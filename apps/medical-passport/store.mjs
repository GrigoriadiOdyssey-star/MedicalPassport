import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  randomBytes,
  randomUUID,
  createHash,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
export const appRoot = fileURLToPath(new URL(".", import.meta.url)),
  hash = (x) => createHash("sha256").update(x).digest("hex"),
  secret = () => randomBytes(32).toString("base64url");
export class HttpError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
    this.code = code;
  }
}
export const fail = (status, code) => {
  throw new HttpError(status, code);
};
export function passwordHash(password) {
  if (
    typeof password !== "string" ||
    password.length < 12 ||
    password.length > 128
  )
    fail(400, "PASSWORD_12_TO_128_CHARACTERS");
  const salt = randomBytes(16).toString("hex");
  return salt + ":" + scryptSync(password, salt, 64).toString("hex");
}
export function passwordMatches(password, stored) {
  if (typeof password !== "string" || password.length > 128) return false;
  const [salt, key] = stored.split(":");
  const computed = scryptSync(password, salt, 64);
  return timingSafeEqual(computed, Buffer.from(key, "hex"));
}
const dummy = passwordHash("Synthetic-dummy-password-not-an-account");
const text = (v, max = 200) => {
  if (typeof v !== "string" || !v.trim() || v.length > max)
    fail(400, "INVALID_TEXT");
  return v.trim();
};
export const kinds = [
  "condition",
  "observation",
  "allergy",
  "medication",
  "vaccination",
  "emergency",
];
export function cleanBody(kind, b) {
  if (!b || typeof b !== "object" || Array.isArray(b))
    fail(400, "INVALID_RECORD");
  const allowed =
    kind === "emergency"
      ? [
          "bloodGroup",
          "rh",
          "allergies",
          "medications",
          "diagnoses",
          "contacts",
          "instructions",
          "donor",
        ]
      : kind === "allergy"
        ? ["name", "reaction", "status", "severity", "onset", "notes"]
        : kind === "medication"
          ? [
              "name",
              "notes",
              "status",
              "dose",
              "frequency",
              "form",
              "unit",
              "instructions",
              "food",
              "prescriber",
              "route",
              "start",
              "end",
            ]
          : kind === "condition"
            ? [
                "name",
                "notes",
                "status",
                "onset",
                "resolution",
                "provider",
                "code",
                "code_system",
              ]
            : kind === "observation"
              ? [
                  "name",
                  "notes",
                  "panel",
                  "value",
                  "unit",
                  "reference_low",
                  "reference_high",
                  "flag",
                  "observed_at",
                  "provider",
                  "specimen",
                  "method",
                ]
              : kind === "vaccination"
                ? [
                    "name",
                    "notes",
                    "dose_number",
                    "date",
                    "manufacturer",
                    "lot",
                    "country",
                    "provider",
                    "status",
                    "document_id",
                  ]
                : ["name", "notes"];
  if (Object.keys(b).some((k) => !allowed.includes(k)))
    fail(400, "UNKNOWN_RECORD_FIELD");
  const out = {};
  for (const [k, v] of Object.entries(b)) {
    if (typeof v !== "string" || v.length > 2000) fail(400, "INVALID_RECORD");
    out[k] = v.trim();
  }
  if (kind !== "emergency") out.name = text(b.name);
  if (
    ["medication", "condition", "observation", "vaccination"].includes(kind)
  ) {
    for (const k of ["start", "end", "onset", "resolution", "date"])
      if (
        out[k] &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(out[k]) ||
          Number.isNaN(Date.parse(out[k])) ||
          new Date(out[k]).toISOString().slice(0, 10) !== out[k])
      )
        fail(400, "INVALID_DATE");
    if (out.start && out.end && out.end < out.start)
      fail(400, "INVALID_DATE_RANGE");
  }
  if (
    kind === "allergy" &&
    out.severity &&
    !["unknown", "mild", "moderate", "severe", "critical"].includes(
      out.severity,
    )
  )
    fail(400, "INVALID_SEVERITY");
  if (
    kind === "medication" &&
    out.status &&
    !["reported", "active", "stopped"].includes(out.status)
  )
    fail(400, "INVALID_STATUS");
  if (
    kind === "allergy" &&
    !["reported", "unknown", "not_assessed", "no_known_allergy"].includes(
      out.status ?? "reported",
    )
  )
    fail(400, "INVALID_ASSERTION");
  if (kind === "allergy") {
    out.status ??= "reported";
    if (out.status !== "reported" && out.reaction)
      fail(400, "CONTRADICTORY_ASSERTION");
  }
  if (kind === "observation") {
    for (const key of ["value", "reference_low", "reference_high"])
      if (out[key] && !Number.isFinite(Number(out[key])))
        fail(400, "INVALID_NUMERIC_VALUE");
    if (
      out.reference_low &&
      out.reference_high &&
      Number(out.reference_low) > Number(out.reference_high)
    )
      fail(400, "INVALID_REFERENCE_RANGE");
    if (out.observed_at && !Number.isFinite(Date.parse(out.observed_at)))
      fail(400, "INVALID_DATE");
    if (
      out.flag &&
      !["unknown", "normal", "low", "high", "critical"].includes(out.flag)
    )
      fail(400, "INVALID_FLAG");
  }
  if (
    kind === "condition" &&
    out.status &&
    !["active", "resolved", "remission", "unknown"].includes(out.status)
  )
    fail(400, "INVALID_STATUS");
  if (
    kind === "vaccination" &&
    out.dose_number &&
    !/^[1-9][0-9]?$/.test(out.dose_number)
  )
    fail(400, "INVALID_DOSE_NUMBER");
  if (kind === "emergency") {
    out.bloodGroup ??= "UNKNOWN";
    out.rh ??= "UNKNOWN";
    if (
      !["UNKNOWN", "A", "B", "AB", "O"].includes(out.bloodGroup) ||
      !["UNKNOWN", "+", "-"].includes(out.rh)
    )
      fail(400, "INVALID_BLOOD_GROUP");
  }
  return out;
}
export class Store {
  constructor(filename, now = () => Date.now()) {
    this.now = now;
    if (filename !== ":memory:")
      fs.mkdirSync(path.dirname(filename), { recursive: true });
    this.db = new DatabaseSync(filename);
    this.db.exec(
      "PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000; PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL;",
    );
    this.db.exec(
      "CREATE TABLE IF NOT EXISTS migrations(version INTEGER PRIMARY KEY, applied_at INTEGER NOT NULL)",
    );
    for (const version of [1, 2, 3, 4, 5, 6, 7, 8])
      if (
        !this.db
          .prepare("SELECT 1 FROM migrations WHERE version=?")
          .get(version)
      ) {
        this.transaction(() => {
          this.db.exec(
            fs.readFileSync(
              appRoot +
                "migrations/" +
                String(version).padStart(3, "0") +
                ".sql",
              "utf8",
            ),
          );
          this.db
            .prepare("INSERT INTO migrations VALUES(?,?)")
            .run(version, this.now());
        });
      }
    this.db
      .prepare("INSERT OR IGNORE INTO organizations VALUES(?,?,1)")
      .run("local-synthetic", "EDHT Synthetic Clinic");
  }
  transaction(fn) {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const result = fn();
      this.db.exec("COMMIT");
      return result;
    } catch (e) {
      this.db.exec("ROLLBACK");
      throw e;
    }
  }
  audit(actor, action, reference = "", patient = null, outcome = "COMMITTED") {
    const previous =
        this.db
          .prepare(
            "SELECT event_hash FROM audit_events ORDER BY seq DESC LIMIT 1",
          )
          .get()?.event_hash ?? "0".repeat(64),
      time = this.now();
    const digest = hash(
      JSON.stringify([
        previous,
        patient,
        actor,
        action,
        reference,
        outcome,
        time,
      ]),
    );
    this.db
      .prepare(
        "INSERT INTO audit_events(patient_id,actor_id,action,reference,outcome,occurred_at,previous_hash,event_hash) VALUES(?,?,?,?,?,?,?,?)",
      )
      .run(patient, actor, action, reference, outcome, time, previous, digest);
  }
  register({ email, password, name, role = "patient" }, provision = false) {
    email = text(email, 254).toLowerCase();
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !["patient", "doctor", "admin", "service"].includes(role) ||
      (!provision && role !== "patient")
    )
      fail(400, "INVALID_REGISTRATION");
    name = text(name, 100);
    const pw = passwordHash(password);
    return this.transaction(() => {
      if (this.db.prepare("SELECT 1 FROM users WHERE email=?").get(email))
        fail(409, "ACCOUNT_UNAVAILABLE");
      const id = randomUUID();
      this.db
        .prepare(
          "INSERT INTO users(id,email,name,password_hash,role,organization_id) VALUES(?,?,?,?,?,?)",
        )
        .run(
          id,
          email,
          name,
          pw,
          role,
          role === "patient" ? null : "local-synthetic",
        );
      this.db
        .prepare("INSERT INTO authentication_identities VALUES(?,?,?)")
        .run(id, "local-password", id);
      if (role === "patient")
        this.db
          .prepare("INSERT INTO patients VALUES(?,?,?,1)")
          .run(randomUUID(), id, this.now());
      if (role === "doctor")
        this.db
          .prepare("INSERT INTO practitioners VALUES(?,?,?,?)")
          .run(randomUUID(), id, "local-synthetic", "synthetic_verified");
      this.audit(id, "REGISTER");
      return { id, email, name, role };
    });
  }
  login(email, password, ip = "local") {
    email = typeof email === "string" ? email.toLowerCase().trim() : "";
    const key = hash(email + "|" + ip),
      ipKey = hash("ip|" + ip),
      now = this.now();
    const limits = [key, ipKey].map((k) =>
      this.db.prepare("SELECT * FROM login_throttle WHERE key=?").get(k),
    );
    if (limits.some((v) => v?.blocked_until > now)) fail(429, "TRY_LATER");
    const user = this.db
      .prepare("SELECT * FROM users WHERE email=?")
      .get(email);
    const good =
      passwordMatches(password, user?.password_hash ?? dummy) &&
      user?.status === "active";
    if (!good) {
      this.transaction(() => {
        for (const k of [key, ipKey])
          this.db
            .prepare(
              "INSERT INTO login_throttle VALUES(?,1,0) ON CONFLICT(key) DO UPDATE SET failures=failures+1,blocked_until=CASE WHEN failures>=4 THEN ? ELSE blocked_until END",
            )
            .run(k, now + 60000);
        this.audit(user?.id ?? "anonymous", "LOGIN_FAILED", "", "", "DENIED");
      });
      fail(401, "INVALID_CREDENTIALS");
    }
    return this.transaction(() => {
      this.db.prepare("DELETE FROM login_throttle WHERE key=?").run(key);
      const token = secret(),
        csrf = secret();
      this.db
        .prepare("INSERT INTO sessions VALUES(?,?,?,?,?)")
        .run(hash(token), user.id, csrf, now + 3600000, user.epoch);
      this.audit(user.id, "LOGIN");
      return { token, csrf };
    });
  }
  session(token) {
    if (!token) return null;
    const s = this.db
      .prepare(
        "SELECT s.*,u.email,u.name,u.role,u.status,u.epoch AS current_epoch FROM sessions s JOIN users u ON u.id=s.user_id WHERE token_hash=?",
      )
      .get(hash(token));
    return s &&
      s.status === "active" &&
      s.epoch === s.current_epoch &&
      s.expires_at > this.now()
      ? s
      : null;
  }
  patient(user) {
    const p = this.db
      .prepare("SELECT * FROM patients WHERE user_id=?")
      .get(user.user_id);
    if (user.role !== "patient" || !p) fail(403, "PATIENT_ONLY");
    return p;
  }
  me(user) {
    return {
      id: user.user_id,
      name: user.name,
      email: user.email,
      role: user.role,
      csrf: user.csrf,
      patient_id:
        this.db
          .prepare("SELECT id FROM patients WHERE user_id=?")
          .get(user.user_id)?.id ?? null,
      mode: "SYNTHETIC_ONLY",
    };
  }
  logout(user) {
    this.transaction(() => {
      this.db
        .prepare("DELETE FROM sessions WHERE token_hash=?")
        .run(user.token_hash);
      this.audit(user.user_id, "LOGOUT");
    });
  }
  issueRecovery(email) {
    return this.transaction(() => {
      const u = this.db
        .prepare("SELECT id FROM users WHERE email=?")
        .get(email.toLowerCase());
      if (!u) fail(404, "NOT_FOUND");
      const token = secret();
      this.db
        .prepare("INSERT INTO recovery_tokens VALUES(?,?,?,NULL)")
        .run(hash(token), u.id, this.now() + 900000);
      this.audit("local-operator", "RECOVERY_ISSUED", u.id);
      return token;
    });
  }
  recover(token, password) {
    const pw = passwordHash(password);
    return this.transaction(() => {
      const r = this.db
        .prepare(
          "SELECT * FROM recovery_tokens WHERE token_hash=? AND used_at IS NULL AND expires_at>?",
        )
        .get(hash(String(token)), this.now());
      if (!r) fail(400, "INVALID_RECOVERY");
      this.db
        .prepare("UPDATE recovery_tokens SET used_at=? WHERE token_hash=?")
        .run(this.now(), r.token_hash);
      this.db
        .prepare("UPDATE users SET password_hash=?,epoch=epoch+1 WHERE id=?")
        .run(pw, r.user_id);
      this.db.prepare("DELETE FROM sessions WHERE user_id=?").run(r.user_id);
      this.invalidateGrants(r.user_id);
      this.audit(r.user_id, "PASSWORD_RECOVERED");
    });
  }
  invalidateGrants(userId) {
    this.db
      .prepare(
        "UPDATE grants SET revoked_at=COALESCE(revoked_at,?) WHERE recipient_id=? OR patient_id IN (SELECT id FROM patients WHERE user_id=?)",
      )
      .run(this.now(), userId, userId);
    this.db
      .prepare(
        "UPDATE consents SET active=0 WHERE recipient_id=? OR patient_id IN (SELECT id FROM patients WHERE user_id=?)",
      )
      .run(userId, userId);
  }
  disable(email) {
    return this.transaction(() => {
      const u = this.db
        .prepare("SELECT id FROM users WHERE email=?")
        .get(email.toLowerCase());
      if (!u) fail(404, "NOT_FOUND");
      this.db
        .prepare("UPDATE users SET status='disabled',epoch=epoch+1 WHERE id=?")
        .run(u.id);
      this.db.prepare("DELETE FROM sessions WHERE user_id=?").run(u.id);
      this.invalidateGrants(u.id);
      this.audit("local-operator", "ACCOUNT_DISABLED", u.id);
    });
  }
  doctors() {
    return this.db
      .prepare(
        "SELECT u.id,u.name FROM users u JOIN practitioners p ON p.user_id=u.id WHERE u.role='doctor' AND u.status='active' AND p.status='synthetic_verified'",
      )
      .all();
  }
  addRecord(user, kind, body, source = "patient_reported") {
    const p = this.patient(user);
    if (!kinds.includes(kind)) fail(400, "INVALID_KIND");
    const clean = cleanBody(kind, body);
    return this.transaction(() => {
      if (
        kind === "vaccination" &&
        clean.document_id &&
        !this.db
          .prepare("SELECT id FROM documents WHERE id=? AND patient_id=?")
          .get(clean.document_id, p.id)
      )
        fail(404, "CERTIFICATE_NOT_FOUND");
      if (source.startsWith("synthetic_fhir:")) {
        const old = this.db
          .prepare(
            "SELECT id,kind,body FROM records WHERE patient_id=? AND source=?",
          )
          .get(p.id, source);
        if (old) {
          if (old.kind !== kind || old.body !== JSON.stringify(clean))
            fail(409, "IMPORT_SOURCE_CONFLICT");
          this.audit(user.user_id, "FHIR_IMPORT_REPLAY", old.id, p.id);
          return { id: old.id, kind, body: clean, replayed: true };
        }
      }
      const version =
        kind === "emergency"
          ? 1 +
            this.db
              .prepare(
                "SELECT COALESCE(MAX(version),0) v FROM records WHERE patient_id=? AND kind='emergency'",
              )
              .get(p.id).v
          : 1;
      const id = randomUUID();
      this.db
        .prepare("INSERT INTO records VALUES(?,?,?,?,?,?,?)")
        .run(
          id,
          p.id,
          kind,
          version,
          JSON.stringify(clean),
          source,
          this.now(),
        );
      this.audit(user.user_id, "RECORD_CREATED", id, p.id);
      return { id, kind, body: clean };
    });
  }
  passport(patientId, scopes) {
    const records = this.db
      .prepare(
        "SELECT id,kind,version,body,source,created_at FROM current_records WHERE patient_id=? AND archived=0 ORDER BY created_at,id",
      )
      .all(patientId)
      .filter((r) => scopes.includes(r.kind))
      .map((r) => ({ ...r, body: JSON.parse(r.body) }));
    const docs = scopes.includes("documents")
      ? this.db
          .prepare(
            "SELECT id,name,mime,document_type,source,sha256,created_at FROM documents WHERE patient_id=? AND id NOT IN (SELECT document_id FROM document_details WHERE archived=1)",
          )
          .all(patientId)
      : [];
    const imaging = scopes.includes("imaging")
      ? this.db
          .prepare(
            "SELECT id,study_uid,metadata,version FROM imaging_studies WHERE patient_id=? AND archived=0 ORDER BY created_at DESC LIMIT 100",
          )
          .all(patientId)
          .map((r) => ({
            ...r,
            metadata: JSON.parse(r.metadata),
            instances: this.db
              .prepare(
                "SELECT i.id,i.sop_uid,i.mime,i.metadata FROM imaging_instances i JOIN imaging_series s ON s.id=i.series_id WHERE s.study_id=? ORDER BY i.created_at LIMIT 500",
              )
              .all(r.id)
              .map((i) => ({ ...i, metadata: JSON.parse(i.metadata) })),
          }))
      : [];
    return { patient_id: patientId, records, documents: docs, imaging };
  }
  ownPassport(user) {
    const p = this.patient(user);
    return this.transaction(() => {
      this.audit(user.user_id, "PASSPORT_READ", "", p.id);
      return this.passport(p.id, [...kinds, "documents"]);
    });
  }
  upload(user, { name, mime, document_type, source, base64 }) {
    const p = this.patient(user);
    name = text(name, 160).replace(/[\r\n"\\/]/g, "_");
    source = text(source ?? "patient_uploaded");
    document_type = text(document_type ?? "medical_document");
    if (
      !["application/pdf", "text/plain"].includes(mime) ||
      typeof base64 !== "string" ||
      base64.length >
        Math.ceil(((this.legacyUploadLimit ?? 2097152) * 4) / 3) + 4 ||
      !/^[A-Za-z0-9+/]*={0,2}$/.test(base64)
    )
      fail(400, "INVALID_DOCUMENT");
    const bytes = Buffer.from(base64, "base64");
    if (
      !bytes.length ||
      bytes.length > (this.legacyUploadLimit ?? 2097152) ||
      (mime === "application/pdf" &&
        bytes.subarray(0, 5).toString() !== "%PDF-")
    )
      fail(400, "INVALID_DOCUMENT");
    return this.transaction(() => {
      const id = randomUUID();
      this.db
        .prepare("INSERT INTO documents VALUES(?,?,?,?,?,?,?,?,?)")
        .run(
          id,
          p.id,
          name,
          mime,
          document_type,
          source,
          hash(bytes),
          bytes,
          this.now(),
        );
      this.audit(user.user_id, "DOCUMENT_UPLOADED", id, p.id);
      return { id };
    });
  }
  ownDocument(user, id) {
    const p = this.patient(user);
    return this.transaction(() => {
      const d = this.db
        .prepare("SELECT * FROM documents WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!d) fail(404, "NOT_FOUND");
      this.audit(user.user_id, "DOCUMENT_DOWNLOAD", id, p.id);
      return d;
    });
  }
  createGrant(user, { recipient_id, scopes, duration, purpose = "review" }) {
    const p = this.patient(user);
    if (
      !Array.isArray(scopes) ||
      !scopes.length ||
      scopes.length > 8 ||
      new Set(scopes).size !== scopes.length ||
      scopes.some((x) => ![...kinds, "documents", "imaging"].includes(x))
    )
      fail(400, "INVALID_SCOPE");
    const durations = {
      once: 3600000,
      "1h": 3600000,
      "24h": 86400000,
      "7d": 604800000,
    };
    if (
      !Object.hasOwn(durations, duration) ||
      !["review", "emergency"].includes(purpose) ||
      (purpose === "emergency" &&
        (scopes.length !== 1 || scopes[0] !== "emergency"))
    )
      fail(400, "INVALID_GRANT");
    return this.transaction(() => {
      if (!this.doctors().some((d) => d.id === recipient_id))
        fail(400, "INVALID_RECIPIENT");
      const id = randomUUID(),
        consent = randomUUID(),
        token = secret(),
        now = this.now();
      this.db
        .prepare("INSERT INTO consents VALUES(?,?,?,?,1,?)")
        .run(consent, p.id, recipient_id, purpose, now);
      this.db
        .prepare("INSERT INTO grants VALUES(?,?,?,?,?,?,?,?,NULL,?,NULL,?)")
        .run(
          id,
          consent,
          p.id,
          recipient_id,
          hash(token),
          JSON.stringify(scopes),
          purpose,
          now + durations[duration],
          duration === "once" ? 1 : 0,
          now,
        );
      this.audit(user.user_id, "GRANT_CREATED", id, p.id);
      return {
        id,
        token,
        expires_at: now + durations[duration],
        scopes,
        purpose,
      };
    });
  }
  grants(user, offset = 0, status = "all") {
    if (
      !Number.isInteger(Number(offset)) ||
      offset < 0 ||
      offset > 100000 ||
      !["all", "active", "expired", "revoked", "used"].includes(status)
    )
      fail(400, "INVALID_PAGE");
    const now = this.now();
    const where = {
      all: "",
      active:
        " AND g.revoked_at IS NULL AND g.expires_at>" +
        now +
        " AND NOT(g.one_time=1 AND g.used_at IS NOT NULL)",
      expired: " AND g.revoked_at IS NULL AND g.expires_at<=" + now,
      revoked: " AND g.revoked_at IS NOT NULL",
      used:
        " AND g.revoked_at IS NULL AND g.expires_at>" +
        now +
        " AND g.one_time=1 AND g.used_at IS NOT NULL",
    }[status];
    const p = this.patient(user);
    return this.db
      .prepare(
        "SELECT g.id,g.scopes,g.purpose,g.expires_at,g.revoked_at,g.one_time,g.used_at,u.name AS recipient FROM grants g JOIN users u ON u.id=g.recipient_id WHERE g.patient_id=? " +
          where +
          " ORDER BY g.created_at DESC,g.id LIMIT 30 OFFSET ?",
      )
      .all(p.id, Number(offset))
      .map((g) => ({ ...g, scopes: JSON.parse(g.scopes) }));
  }
  revoke(user, id) {
    const p = this.patient(user);
    return this.transaction(() => {
      const g = this.db
        .prepare("SELECT * FROM grants WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!g) fail(404, "NOT_FOUND");
      this.db
        .prepare(
          "UPDATE grants SET revoked_at=COALESCE(revoked_at,?) WHERE id=?",
        )
        .run(this.now(), id);
      this.db
        .prepare("UPDATE consents SET active=0 WHERE id=?")
        .run(g.consent_id);
      this.audit(user.user_id, "GRANT_REVOKED", id, p.id);
    });
  }
  consume(user, token, documentId = null, imagingId = null) {
    return this.transaction(() => {
      if (
        !user.token_hash ||
        !this.db
          .prepare(
            "SELECT 1 FROM sessions WHERE token_hash=? AND user_id=? AND expires_at>? AND epoch=?",
          )
          .get(user.token_hash, user.user_id, this.now(), user.epoch)
      )
        fail(404, "NOT_FOUND");
      const current = this.db
        .prepare(
          "SELECT u.*,p.status AS practitioner_status FROM users u LEFT JOIN practitioners p ON p.user_id=u.id WHERE u.id=?",
        )
        .get(user.user_id);
      if (
        !current ||
        current.role !== "doctor" ||
        current.status !== "active" ||
        current.practitioner_status !== "synthetic_verified" ||
        current.epoch !== user.epoch
      )
        fail(404, "NOT_FOUND");
      const g = this.db
        .prepare(
          "SELECT g.*,c.active AS consent_active,c.recipient_id AS consent_recipient,c.patient_id AS consent_patient FROM grants g JOIN consents c ON c.id=g.consent_id WHERE token_hash=?",
        )
        .get(hash(String(token)));
      if (
        !g ||
        g.recipient_id !== user.user_id ||
        !g.consent_active ||
        g.consent_recipient !== g.recipient_id ||
        g.consent_patient !== g.patient_id ||
        g.revoked_at !== null ||
        g.expires_at <= this.now() ||
        (g.one_time && g.used_at !== null)
      )
        fail(404, "NOT_FOUND");
      const scopes = JSON.parse(g.scopes);
      let result;
      if (imagingId) {
        if (documentId || !scopes.includes("imaging")) fail(404, "NOT_FOUND");
        result = this.db
          .prepare(
            "SELECT i.* FROM imaging_instances i JOIN imaging_series r ON r.id=i.series_id JOIN imaging_studies t ON t.id=r.study_id WHERE i.id=? AND t.patient_id=? AND t.archived=0",
          )
          .get(imagingId, g.patient_id);
        if (!result) fail(404, "NOT_FOUND");
      } else if (documentId) {
        if (!scopes.includes("documents")) fail(404, "NOT_FOUND");
        result = this.db
          .prepare(
            "SELECT * FROM documents WHERE id=? AND patient_id=? AND id NOT IN (SELECT document_id FROM document_details WHERE archived=1)",
          )
          .get(documentId, g.patient_id);
        if (!result) fail(404, "NOT_FOUND");
      } else result = this.passport(g.patient_id, scopes);
      if (g.one_time) {
        const n = this.db
          .prepare(
            "UPDATE grants SET used_at=? WHERE id=? AND used_at IS NULL AND revoked_at IS NULL AND expires_at>?",
          )
          .run(this.now(), g.id, this.now());
        if (n.changes !== 1) fail(404, "NOT_FOUND");
      }
      this.audit(
        user.user_id,
        g.purpose === "emergency"
          ? "EMERGENCY_ACCESS"
          : imagingId
            ? "SHARED_IMAGING_READ"
            : documentId
              ? "SHARED_DOCUMENT_READ"
              : "SHARED_PASSPORT_READ",
        g.id,
        g.patient_id,
      );
      return result;
    });
  }
  auditList(user) {
    const p = this.patient(user);
    return this.transaction(() => {
      const rows = this.db
        .prepare(
          "SELECT seq,action,outcome,occurred_at,reference FROM audit_events WHERE patient_id=? ORDER BY seq DESC LIMIT 100",
        )
        .all(p.id);
      this.audit(user.user_id, "AUDIT_HISTORY_READ", "", p.id);
      return rows;
    });
  }
  verifyAudit() {
    let prev = "0".repeat(64);
    for (const r of this.db
      .prepare("SELECT * FROM audit_events ORDER BY seq")
      .all()) {
      if (
        r.previous_hash !== prev ||
        r.event_hash !==
          hash(
            JSON.stringify([
              prev,
              r.patient_id,
              r.actor_id,
              r.action,
              r.reference,
              r.outcome,
              r.occurred_at,
            ]),
          )
      )
        return false;
      prev = r.event_hash;
    }
    return true;
  }
  close() {
    this.db.close();
  }
}
