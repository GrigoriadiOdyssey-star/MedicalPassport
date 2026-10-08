import { createHash, randomBytes } from "node:crypto";
import QRCode from "qrcode";
import { CloudHttpError } from "./cloud-runtime.mjs";

export const QR_CLINICAL_SCOPES = Object.freeze([
  "condition", "observation", "allergy", "medication", "vaccination", "emergency",
]);
const durations = Object.freeze({ once: 3600, "1h": 3600, "24h": 86400, "7d": 604800 });
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const tokenPattern = /^[-_A-Za-z0-9]{43}$/;
const fail = (status, code) => { throw new CloudHttpError(status, code); };
const digest = (token) => createHash("sha256").update(token).digest("hex");
const timestamp = (value) => value == null ? null : Date.parse(value);

function result(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw Error("CLOUD_RESPONSE_INVALID");
  if (value.error) {
    if (value.error === "NOT_FOUND") fail(404, "NOT_FOUND");
    if (value.error === "INVALID_RECIPIENT") fail(400, "INVALID_RECIPIENT");
    throw Error("CLOUD_RESPONSE_INVALID");
  }
  return value;
}
function tokenHash(payload) {
  if (typeof payload.token !== "string" || !tokenPattern.test(payload.token)) fail(404, "NOT_FOUND");
  return digest(payload.token);
}

// Authorization comes from the administrator-managed clinicians table, never user_metadata.
export async function trustedCloudRole(cloud, user) {
  if (!user || !uuid.test(user.id)) fail(401, "UNAUTHENTICATED");
  const rows = await cloud.rows("clinicians", {
    select: "user_id,verified_at", user_id: "eq." + user.id,
    verified_at: "not.is.null", limit: "1",
  });
  if (!Array.isArray(rows) || rows.some((row) => row.user_id !== user.id || !row.verified_at))
    throw Error("CLOUD_RESPONSE_INVALID");
  return rows.length ? "doctor" : "patient";
}

export async function consentRoute({ cloud, user, method, path, params = new URLSearchParams(), payload = {}, origin }) {
  if (method === "GET" && path === "/api/grants") {
    const filter = params.get("status") || "all", offset = Number(params.get("offset") || 0);
    if (!["all", "active", "expired", "revoked", "used"].includes(filter) || !Number.isSafeInteger(offset) || offset < 0 || offset > 100000)
      fail(400, "INVALID_PAGE");
    const rows = await cloud.rpc("edht_qr_grants", { p_filter: filter, p_offset: offset });
    if (!Array.isArray(rows)) throw Error("CLOUD_RESPONSE_INVALID");
    return { body: rows.map((row) => ({ ...row, one_time: row.one_time ? 1 : 0,
      expires_at: timestamp(row.expires_at), created_at: timestamp(row.created_at),
      revoked_at: timestamp(row.revoked_at), used_at: timestamp(row.used_at) })) };
  }
  if (method === "POST" && path === "/api/grants") {
    if (!uuid.test(payload.recipient_id || "")) fail(400, "INVALID_RECIPIENT");
    const purpose = payload.purpose ?? "review";
    if (!Array.isArray(payload.scopes) || !payload.scopes.length || payload.scopes.length > 6 ||
      new Set(payload.scopes).size !== payload.scopes.length || payload.scopes.some((scope) => !QR_CLINICAL_SCOPES.includes(scope))) {
      if (Array.isArray(payload.scopes) && payload.scopes.some((scope) => ["documents", "imaging", "laboratory"].includes(scope)))
        fail(409, "CLOUD_QR_DOCUMENT_SHARING_UNAVAILABLE");
      fail(400, "INVALID_SCOPE");
    }
    if (!Object.hasOwn(durations, payload.duration) || !["review", "emergency"].includes(purpose) ||
      (purpose === "emergency" && (payload.scopes.length !== 1 || payload.scopes[0] !== "emergency")))
      fail(400, "INVALID_GRANT");
    let url;
    try { url = new URL(origin); } catch { fail(400, "INVALID_ORIGIN"); }
    if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash)
      fail(400, "INVALID_ORIGIN");
    const token = randomBytes(32).toString("base64url");
    const link = url.origin + "/#access=" + token;
    // Encode before committing consent; a renderer failure must not leave an undisplayed grant.
    const qr = await QRCode.toDataURL(link, { errorCorrectionLevel: "M", width: 320, margin: 4 });
    const grant = result(await cloud.rpc("edht_qr_create", {
      p_recipient: payload.recipient_id, p_scopes: payload.scopes,
      p_purpose: purpose, p_seconds: durations[payload.duration],
      p_one_time: payload.duration === "once", p_token_hash: digest(token),
    }));
    if (!uuid.test(grant.id || "") || !Number.isFinite(timestamp(grant.expires_at))) throw Error("CLOUD_RESPONSE_INVALID");
    return { status: 201, body: { id: grant.id, expires_at: timestamp(grant.expires_at), scopes: payload.scopes, purpose, one_time: payload.duration === "once", token, link, qr } };
  }
  if (method === "POST" && ["/api/access/info", "/api/access"].includes(path)) {
    const value = result(await cloud.rpc(path.endsWith("/info") ? "edht_qr_info" : "edht_qr_read", { p_token_hash: tokenHash(payload) }));
    if (path.endsWith("/info")) {
      if (!["ACTIVE", "ACCESS_REVOKED", "ACCESS_EXPIRED", "ACCESS_USED"].includes(value.status)) throw Error("CLOUD_RESPONSE_INVALID");
      return { body: { ...value, expires_at: timestamp(value.expires_at) } };
    }
    if (!Array.isArray(value.records) || !Array.isArray(value.documents)) throw Error("CLOUD_RESPONSE_INVALID");
    return { body: { ...value, records: value.records.map((row) => ({ ...row, created_at: timestamp(row.created_at) })) } };
  }
  if (method === "POST" && ["/api/access/document", "/api/access/imaging"].includes(path))
    fail(409, "CLOUD_QR_DOCUMENT_SHARING_UNAVAILABLE");
  return null;
}
