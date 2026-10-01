const kinds = new Set([
  "condition",
  "observation",
  "allergy",
  "medication",
  "vaccination",
  "emergency",
]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function publicKey(value) {
  if (typeof value !== "string" || value.length < 16 || value.length > 4096)
    throw new Error("CLOUD_PUBLISHABLE_KEY_REQUIRED");
  if (value.startsWith("sb_publishable_")) return value;
  const parts = value.split(".");
  if (parts.length === 3) {
    let claims;
    try {
      claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
    } catch {
      throw new Error("CLOUD_PUBLISHABLE_KEY_INVALID");
    }
    if (claims.role === "anon") return value;
  }
  throw new Error("CLOUD_PUBLISHABLE_KEY_REQUIRED");
}

function requiredUuid(value, code) {
  if (typeof value !== "string" || !uuid.test(value))
    throw new Error(code);
  return value;
}

export class SupabaseRepository {
  constructor({
    supabaseUrl,
    publishableKey,
    accessToken,
    fetchImpl = globalThis.fetch,
    timeoutMs = 10000,
  } = {}) {
    let base;
    try {
      base = new URL(supabaseUrl);
    } catch {
      throw new Error("CLOUD_URL_INVALID");
    }
    if (
      base.protocol !== "https:" ||
      base.username ||
      base.password ||
      base.search ||
      base.hash ||
      base.pathname !== "/"
    )
      throw new Error("CLOUD_URL_INVALID");
    if (
      typeof accessToken !== "string" ||
      accessToken.length < 20 ||
      accessToken.length > 8192 ||
      /[\r\n]/.test(accessToken)
    )
      throw new Error("CLOUD_SESSION_REQUIRED");
    if (typeof fetchImpl !== "function") throw new Error("CLOUD_FETCH_UNAVAILABLE");
    if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 100 || timeoutMs > 30000)
      throw new Error("CLOUD_TIMEOUT_INVALID");

    this.base = base;
    this.key = publicKey(publishableKey);
    this.token = accessToken;
    this.fetch = fetchImpl;
    this.timeoutMs = timeoutMs;
  }

  async request(path, { method = "GET", query, body, prefer } = {}) {
    const url = new URL(path, this.base);
    if (url.origin !== this.base.origin) throw new Error("CLOUD_PATH_INVALID");
    if (query) for (const [key, value] of Object.entries(query))
      url.searchParams.set(key, value);

    const headers = {
      apikey: this.key,
      authorization: "Bearer " + this.token,
      accept: "application/json",
    };
    if (body !== undefined) headers["content-type"] = "application/json";
    if (prefer) headers.prefer = prefer;

    let response;
    try {
      response = await this.fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: AbortSignal.timeout(this.timeoutMs),
      });
    } catch {
      throw new Error("CLOUD_BACKEND_UNAVAILABLE");
    }

    if (response.status === 401) throw new Error("CLOUD_SESSION_INVALID");
    if (response.status === 403) throw new Error("CLOUD_ACCESS_DENIED");
    if (response.status === 404) throw new Error("CLOUD_RESOURCE_MISSING");
    if (!response.ok) throw new Error("CLOUD_BACKEND_REJECTED");
    if (response.status === 204) return null;
    try {
      return await response.json();
    } catch {
      throw new Error("CLOUD_RESPONSE_INVALID");
    }
  }

  async profile(patientUserId) {
    const id = requiredUuid(patientUserId, "PATIENT_ID_INVALID");
    const rows = await this.request("/rest/v1/edht_patient_profiles", {
      query: {
        select: "patient_user_id,display_name,locale,time_zone,created_at,updated_at",
        patient_user_id: "eq." + id,
        limit: "1",
      },
    });
    return Array.isArray(rows) ? (rows[0] ?? null) : null;
  }

  async saveProfile({ patientUserId, displayName, locale, timeZone }) {
    const id = requiredUuid(patientUserId, "PATIENT_ID_INVALID");
    return this.request("/rest/v1/edht_patient_profiles", {
      method: "POST",
      query: { on_conflict: "patient_user_id" },
      prefer: "resolution=merge-duplicates,return=representation",
      body: [{
        patient_user_id: id,
        display_name: displayName,
        locale,
        time_zone: timeZone,
      }],
    });
  }

  async currentRecords(patientUserId, kind) {
    const id = requiredUuid(patientUserId, "PATIENT_ID_INVALID");
    if (kind !== undefined && !kinds.has(kind))
      throw new Error("RECORD_KIND_INVALID");
    const query = {
      select: "record_id,version,patient_user_id,actor_user_id,kind,body,source,created_at",
      patient_user_id: "eq." + id,
      order: "created_at.desc,record_id.asc",
    };
    if (kind) query.kind = "eq." + kind;
    const rows = await this.request("/rest/v1/edht_current_clinical_records", { query });
    if (!Array.isArray(rows)) throw new Error("CLOUD_RESPONSE_INVALID");
    return rows;
  }

  async appendRecord({ recordId = null, kind, body, source }) {
    if (kind !== undefined && !kinds.has(kind))
      throw new Error("RECORD_KIND_INVALID");
    if (recordId !== null) requiredUuid(recordId, "RECORD_ID_INVALID");
    const result = await this.request(
      "/rest/v1/rpc/edht_append_clinical_record_version",
      {
        method: "POST",
        body: {
          p_record_id: recordId,
          p_kind: kind,
          p_body: body,
          p_source: source,
        },
      },
    );
    return Array.isArray(result) ? (result[0] ?? null) : result;
  }

  async createPatientGrant({ recipientUserId, purpose, scopes, expiresAt }) {
    const recipient = requiredUuid(recipientUserId, "RECIPIENT_ID_INVALID");
    return this.request("/rest/v1/rpc/edht_create_patient_grant", {
      method: "POST",
      body: {
        p_recipient_user_id: recipient,
        p_purpose: purpose,
        p_scopes: scopes,
        p_expires_at: expiresAt,
      },
    });
  }

  async revokePatientGrant(grantId) {
    const id = requiredUuid(grantId, "GRANT_ID_INVALID");
    return this.request("/rest/v1/rpc/edht_revoke_patient_grant", {
      method: "POST",
      body: { p_grant_id: id },
    });
  }

  async createDocumentGrant({
    documentId,
    version,
    recipientUserId,
    purpose,
    expiresAt,
  }) {
    const document = requiredUuid(documentId, "DOCUMENT_ID_INVALID");
    const recipient = requiredUuid(recipientUserId, "RECIPIENT_ID_INVALID");
    if (!Number.isSafeInteger(version) || version < 1)
      throw new Error("DOCUMENT_VERSION_INVALID");
    return this.request("/rest/v1/rpc/edht_create_document_grant", {
      method: "POST",
      body: {
        p_document_id: document,
        p_document_version: version,
        p_recipient_user_id: recipient,
        p_purpose: purpose,
        p_expires_at: expiresAt,
      },
    });
  }

  async revokeDocumentGrant(grantId) {
    const id = requiredUuid(grantId, "GRANT_ID_INVALID");
    return this.request("/rest/v1/rpc/edht_revoke_document_grant", {
      method: "POST",
      body: { p_grant_id: id },
    });
  }
}
