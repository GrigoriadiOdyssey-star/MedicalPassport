import { SupabaseAuth } from "./_lib/supabase-auth.mjs";

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
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 32768) throw new Error("BODY_TOO_LARGE");
  }
  try { return raw ? JSON.parse(raw) : {}; } catch { throw new Error("INVALID_JSON"); }
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
    try { return await client.user(jar[ACCESS]); } catch {}
  }
  if (!jar[REFRESH]) return null;
  try {
    const result = await client.refresh(jar[REFRESH]);
    setSession(res, result.session);
    return result.user;
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
      const result = await client.signUp({ email: payload.email, password: payload.password, displayName: payload.display_name });
      if (result.session) setSession(res, result.session);
      return json(res, 201, { confirmationRequired: result.confirmationRequired });
    }
    if (method === "POST" && route === "/api/login") {
      const result = await client.signIn({ email: payload.email, password: payload.password });
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
      if (!await current(req, res, client)) return json(res, 401, { error: "UNAUTHENTICATED" });
      await client.updatePassword(cookies(req)[ACCESS], payload.password);
      return json(res, 200, { ok: true });
    }
    if (method === "POST" && route === "/api/logout") {
      if (!validCsrf(req)) return json(res, 403, { error: "INVALID_CSRF" });
      const user = await current(req, res, client);
      if (user) { try { await client.signOut(cookies(req)[ACCESS]); } catch {} }
      clearCookies(res);
      return json(res, 200, { ok: true });
    }
    if (method === "GET" && route === "/api/me") {
      const user = await current(req, res, client);
      if (!user) return json(res, 401, { error: "UNAUTHENTICATED" });
      let csrf = cookies(req)[CSRF];
      if (!csrf) { csrf = crypto.randomUUID(); setCookie(res, CSRF, csrf, 60 * 60 * 24 * 30, false); }
      return json(res, 200, { id: user.id, email: user.email, name: user.email || "Patient", role: "patient", csrf });
    }
    if (method === "GET" && route === "/api/views/home") {
      if (!await current(req, res, client)) return json(res, 401, { error: "UNAUTHENTICATED" });
      return json(res, 200, { profile: { name: "Patient", birth_date: "", country: "" }, emergency: null, critical_allergies: [], recent: [], documents: [], counts: [{ kind: "medication", count: 0 }, { kind: "allergy", count: 0 }], access: [] });
    }
    return json(res, 501, { error: "CLOUD_FEATURE_NOT_MIGRATED" });
  } catch (error) {
    const known = new Set(["BODY_TOO_LARGE", "INVALID_JSON", "REGISTRATION_INVALID", "AUTHENTICATION_FAILED", "REGISTRATION_UNAVAILABLE", "AUTH_RATE_LIMITED", "CLOUD_URL_INVALID", "CLOUD_PUBLISHABLE_KEY_REQUIRED", "PASSWORD_INVALID", "RECOVERY_REDIRECT_INVALID", "AUTH_PROVIDER_UNAVAILABLE", "AUTH_RESPONSE_INVALID"]);
    const code = known.has(error?.message) ? error.message : "AUTH_PROVIDER_UNAVAILABLE";
    const status = code === "BODY_TOO_LARGE" ? 413 : code === "INVALID_JSON" ? 400 : code === "AUTHENTICATION_FAILED" ? 401 : code === "AUTH_RATE_LIMITED" ? 429 : 503;
    return json(res, status, { error: code });
  }
}
