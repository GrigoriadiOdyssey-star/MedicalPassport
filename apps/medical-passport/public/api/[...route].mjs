import { SupabaseAuth } from "./_lib/supabase-auth.mjs";
import { SupabaseRepository } from "./_lib/supabase-repository.mjs";

const ACCESS = "__Host-edht_access";
const REFRESH = "__Host-edht_refresh";
const CSRF = "__Host-edht_csrf";
const cookieFlags = "Path=/; Secure; SameSite=Strict";
function cookies(req) {
  return Object.fromEntries(String(req.headers.cookie || "").split(";").map((v) => v.trim()).filter(Boolean).map((v) => {
    const at = v.indexOf("="); return [v.slice(0, at), decodeURIComponent(v.slice(at + 1))];
  }));
}
function setCookie(res, name, value, age, httpOnly = true) {
  const line = name + "=" + encodeURIComponent(value) + "; " + cookieFlags + "; Max-Age=" + age + (httpOnly ? "; HttpOnly" : "");
  const old = res.getHeader("Set-Cookie");
  res.setHeader("Set-Cookie", old ? [].concat(old, line) : [line]);
}
function clearCookies(res) {
  for (const name of [ACCESS, REFRESH, CSRF]) setCookie(res, name, "", 0, name !== CSRF);
}
function json(res, status, value) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(value));
}
async function body(req) {
  if (req.body && typeof req.body === "object" && !Array.isArray(req.body)) return req.body;
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 32768) throw new Error("BODY_TOO_LARGE");
  }
  try { return raw ? JSON.parse(raw) : {}; } catch { throw new Error("INVALID_JSON"); }
}
function repository(accessToken) {
  return new SupabaseRepository({ supabaseUrl: process.env.SUPABASE_URL, publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY, accessToken });
}
function auth() {
  return new SupabaseAuth({ supabaseUrl: process.env.SUPABASE_URL, publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY });
}
function setSession(res, session) {
  const now = Math.floor(Date.now() / 1000);
  setCookie(res, ACCESS, session.accessToken, Math.max(60, Math.min(3600, session.expiresAt ? session.expiresAt - now : 3600)));
  setCookie(res, REFRESH, session.refreshToken, 60 * 60 * 24 * 30);
  setCookie(res, CSRF, crypto.randomUUID(), 60 * 60 * 24 * 30, false);
}
function validCsrf(req) {
  const jar = cookies(req);
  return !!jar[CSRF] && req.headers["x-csrf-token"] === jar[CSRF];
}
function safeOrigin(req) {
  return typeof req.headers.origin === "string" && typeof req.headers.host === "string" && req.headers.origin === "https://" + req.headers.host;
}
async function current(req, res, client) {
  const jar = cookies(req);
  if (jar[ACCESS]) {
    try { return { user: await client.user(jar[ACCESS]), accessToken: jar[ACCESS] }; } catch {}
  }
  if (!jar[REFRESH]) return null;
  try {
    const result = await client.refresh(jar[REFRESH]);
    setSession(res, result.session);
    return { user: result.user, accessToken: result.session.accessToken };
  } catch {
    clearCookies(res);
    return null;
  }
}
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, private");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Frame-Options", "DENY");
  const url = new URL(req.url, "https://" + (req.headers.host || "invalid"));
  const route = url.pathname;
  const method = req.method || "GET";
  try {
    if (method !== "GET" && !safeOrigin(req)) return json(res, 403, { error: "INVALID_ORIGIN" });
    if (method === "POST") req.body = await body(req);
    const payload = req.body || {};
    const client = auth();
    if (method === "POST" && route === "/api/register") {
      if (payload.synthetic !== true || payload.adult !== true) return json(res, 400, { error: "CONFIRMATION_REQUIRED" });
      const result = await client.signUp({ email: payload.email, password: payload.password, displayName: payload.display_name, redirectTo: "https://" + req.headers.host + "/?confirmation=1" });
      if (result.session) {
        await repository(result.session.accessToken).saveProfile({ patientUserId: result.user.id, displayName: payload.display_name, locale: payload.locale || "ru", timeZone: payload.time_zone || "UTC" });
        setSession(res, result.session);
      }
      return json(res, 201, { confirmationRequired: result.confirmationRequired });
    }
    if (method === "POST" && route === "/api/login") {
      const result = await client.signIn({ email: payload.email, password: payload.password });
      const cloud = repository(result.session.accessToken);
      const profile = await cloud.profile(result.user.id);
      if (!profile) await cloud.saveProfile({ patientUserId: result.user.id, displayName: result.user.email.split("@")[0], locale: "ru", timeZone: "UTC" });
      setSession(res, result.session);
      return json(res, 200, { ok: true });
    }
    if (method === "POST" && route === "/api/recover") {
      const redirect = "https://" + req.headers.host + "/?recovery=1";
      await client.requestPasswordReset({ email: payload.email, redirectTo: redirect });
      return json(res, 200, { ok: true });
    }
    if (method === "POST" && route === "/api/recover/session") {
      if (typeof payload.access_token !== "string" || typeof payload.refresh_token !== "string") return json(res, 400, { error: "RECOVERY_LINK_INVALID" });
      const user = await client.user(payload.access_token);
      setSession(res, { accessToken: payload.access_token, refreshToken: payload.refresh_token });
      return json(res, 200, { id: user.id });
    }
    if (method === "POST" && route === "/api/recover/update") {
      if (!validCsrf(req)) return json(res, 403, { error: "INVALID_CSRF" });
      const session = await current(req, res, client);
      if (!session) return json(res, 401, { error: "UNAUTHENTICATED" });
      await client.updatePassword(session.accessToken, payload.password);
      return json(res, 200, { ok: true });
    }
    if (method === "POST" && route === "/api/logout") {
      if (!validCsrf(req)) return json(res, 403, { error: "INVALID_CSRF" });
      const user = await current(req, res, client);
      if (user) { try { await client.signOut(user.accessToken); } catch {} }
      clearCookies(res);
      return json(res, 200, { ok: true });
    }
    if (method === "GET" && route === "/api/me") {
      const session = await current(req, res, client);
      if (!session) return json(res, 401, { error: "UNAUTHENTICATED" });
      const user = session.user;
      const profile = await repository(session.accessToken).profile(user.id);
      let csrf = cookies(req)[CSRF];
      if (!csrf) { csrf = crypto.randomUUID(); setCookie(res, CSRF, csrf, 60 * 60 * 24 * 30, false); }
      return json(res, 200, { id: user.id, email: user.email, name: profile?.display_name || user.email || "Patient", role: "patient", csrf });
    }
    if (method === "GET" && route === "/api/profile") {
      const session = await current(req, res, client);
      if (!session) return json(res, 401, { error: "UNAUTHENTICATED" });
      const profile = await repository(session.accessToken).profile(session.user.id);
      return json(res, 200, { name: profile?.display_name || session.user.email || "Patient", locale: profile?.locale || "ru", time_zone: profile?.time_zone || "UTC", birth_date: "", country: "" });
    }
    if (method === "GET" && route === "/api/views/home") {
      const session = await current(req, res, client);
      if (!session) return json(res, 401, { error: "UNAUTHENTICATED" });
      const cloud = repository(session.accessToken);
      const profile = await cloud.profile(session.user.id);
      const rows = await cloud.currentRecords(session.user.id);
      const records = rows.map((r) => ({ id: r.record_id, version: r.version, kind: r.kind, body: r.body, source: r.source, created_at: r.created_at }));
      const counts = ["condition","observation","allergy","medication","vaccination","emergency"].map((kind) => ({ kind, count: records.filter((r) => r.kind === kind).length }));
      const emergency = records.find((r) => r.kind === "emergency") || null;
      return json(res, 200, { profile: { name: profile?.display_name || session.user.email || "Patient", birth_date: "", country: "" }, emergency, critical_allergies: records.filter((r) => r.kind === "allergy" && r.body?.severity === "critical"), recent: records.slice(0, 8), documents: [], counts, access: [] });
    }
    return json(res, 501, { error: "CLOUD_FEATURE_NOT_MIGRATED" });
  } catch (error) {
    const known = new Set(["BODY_TOO_LARGE", "INVALID_JSON", "REGISTRATION_INVALID", "AUTHENTICATION_FAILED", "REGISTRATION_UNAVAILABLE", "AUTH_RATE_LIMITED", "CLOUD_URL_INVALID", "CLOUD_PUBLISHABLE_KEY_REQUIRED", "PASSWORD_INVALID", "RECOVERY_REDIRECT_INVALID", "AUTH_PROVIDER_UNAVAILABLE", "AUTH_RESPONSE_INVALID"]);
    const code = known.has(error?.message) ? error.message : "AUTH_PROVIDER_UNAVAILABLE";
    const status = code === "BODY_TOO_LARGE" ? 413 : code === "INVALID_JSON" ? 400 : code === "AUTHENTICATION_FAILED" ? 401 : code === "AUTH_RATE_LIMITED" ? 429 : 503;
    return json(res, status, { error: code });
  }
}
