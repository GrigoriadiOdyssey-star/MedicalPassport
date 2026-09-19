import { localDate } from "./scheduling.mjs";
import { HttpError, hash, cleanBody, kinds } from "./store.mjs";
const fail = (code, status = 400) => {
  throw new HttpError(status, code);
};
const trim = (v, max = 200) => {
  if (typeof v !== "string" || v.length > max) fail("INVALID_TEXT");
  return v.trim();
};
const date = (v) => {
  v = trim(v, 10);
  if (
    v &&
    (!/^\d{4}-\d{2}-\d{2}$/.test(v) ||
      Number.isNaN(Date.parse(v)) ||
      new Date(v).toISOString().slice(0, 10) !== v)
  )
    fail("INVALID_DATE");
  return v;
};
export function attachUX(Store) {
  Store.prototype.profile = function (user) {
    const p = this.patient(user);
    return {
      ...this.me(user),
      ...this.db
        .prepare(
          "SELECT birth_date,country,timezone FROM patient_details WHERE patient_id=?",
        )
        .get(p.id),
    };
  };
  Store.prototype.updateProfile = function (user, body) {
    const p = this.patient(user),
      name = trim(body.name, 100),
      birth = date(body.birth_date ?? ""),
      country = trim(body.country ?? "", 100);
    if (!name) fail("INVALID_TEXT");
    if (birth) {
      const today = new Date(this.now()),
        cutoff = new Date(
          Date.UTC(
            today.getUTCFullYear() - 18,
            today.getUTCMonth(),
            today.getUTCDate(),
          ),
        );
      if (new Date(birth) > cutoff) fail("ADULT_PROFILE_REQUIRED");
    }
    return this.transaction(() => {
      this.db
        .prepare("UPDATE users SET name=? WHERE id=?")
        .run(name, user.user_id);
      this.db
        .prepare(
          "INSERT INTO patient_details(patient_id,birth_date,country) VALUES(?,?,?) ON CONFLICT(patient_id) DO UPDATE SET birth_date=excluded.birth_date,country=excluded.country",
        )
        .run(p.id, birth, country);
      this.audit(user.user_id, "PROFILE_UPDATED", "", p.id);
      return { ok: true };
    });
  };
  Store.prototype.recordHistory = function (user, id) {
    const p = this.patient(user),
      r = this.db
        .prepare("SELECT * FROM records WHERE id=? AND patient_id=?")
        .get(id, p.id);
    if (!r) fail("NOT_FOUND", 404);
    return this.transaction(() => {
      this.audit(user.user_id, "RECORD_HISTORY_READ", id, p.id);
      return [
        {
          version: r.version,
          body: JSON.parse(r.body),
          archived: 0,
          source: r.source,
          created_at: r.created_at,
        },
        ...this.db
          .prepare(
            "SELECT version,body,archived,created_at FROM record_changes WHERE record_id=? ORDER BY version",
          )
          .all(id)
          .map((x) => ({
            ...x,
            source: "patient_reported",
            body: JSON.parse(x.body),
          })),
      ];
    });
  };
  Store.prototype.changeRecord = function (
    user,
    id,
    body,
    expectedVersion,
    archive = false,
  ) {
    const p = this.patient(user);
    return this.transaction(() => {
      const r = this.db
        .prepare("SELECT * FROM current_records WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!r) fail("NOT_FOUND", 404);
      if (r.version !== expectedVersion) fail("VERSION_CONFLICT", 409);
      if (r.archived) fail("RECORD_ARCHIVED", 409);
      const clean = archive ? JSON.parse(r.body) : cleanBody(r.kind, body);
      this.db
        .prepare(
          "INSERT INTO record_changes(record_id,version,body,archived,created_at) VALUES(?,?,?,?,?)",
        )
        .run(
          id,
          r.version + 1,
          JSON.stringify(clean),
          archive ? 1 : 0,
          this.now(),
        );
      if (this.cancelFuture) {
        const plan = this.db
          .prepare(
            "SELECT id FROM reminder_plans WHERE record_id=? AND active=1",
          )
          .get(id);
        if (plan) {
          this.db
            .prepare(
              "UPDATE reminder_plans SET active=0,updated_at=? WHERE id=?",
            )
            .run(this.now(), plan.id);
          this.cancelFuture(plan.id, 0);
          this.audit(user.user_id, "REMINDER_PAUSED_ON_EDIT", plan.id, p.id);
        }
      }
      this.audit(
        user.user_id,
        archive ? "RECORD_ARCHIVED" : "RECORD_UPDATED",
        id,
        p.id,
      );
      return { id, version: r.version + 1 };
    });
  };
  Store.prototype.documentMetadata = function (user, id, body) {
    const p = this.patient(user);
    return this.transaction(() => {
      if (
        !this.db
          .prepare("SELECT 1 FROM documents WHERE id=? AND patient_id=?")
          .get(id, p.id)
      )
        fail("NOT_FOUND", 404);
      const language = trim(body.language ?? "und", 20),
        translation = body.translation_status ?? "original";
      if (
        !/^[a-z]{2,3}(-[A-Za-z]{2,8})?$/.test(language) ||
        !["original", "translated"].includes(translation)
      )
        fail("INVALID_DOCUMENT_METADATA");
      const description = trim(body.description ?? "", 1000),
        d = date(body.document_date ?? "");
      this.db
        .prepare(
          "INSERT INTO document_details(document_id,description,document_date) VALUES(?,?,?) ON CONFLICT(document_id) DO UPDATE SET description=excluded.description,document_date=excluded.document_date",
        )
        .run(id, description, d);
      this.db
        .prepare(
          "UPDATE document_details SET language=?,translation_status=? WHERE document_id=?",
        )
        .run(language, translation, id);
      this.audit(user.user_id, "DOCUMENT_METADATA_UPDATED", id, p.id);
      return { ok: true };
    });
  };
  Store.prototype.archiveDocument = function (user, id) {
    const p = this.patient(user);
    return this.transaction(() => {
      if (
        !this.db
          .prepare("SELECT 1 FROM documents WHERE id=? AND patient_id=?")
          .get(id, p.id)
      )
        fail("NOT_FOUND", 404);
      this.db
        .prepare(
          "INSERT INTO document_details(document_id,archived) VALUES(?,1) ON CONFLICT(document_id) DO UPDATE SET archived=1",
        )
        .run(id);
      this.audit(user.user_id, "DOCUMENT_ARCHIVED", id, p.id);
      return { ok: true };
    });
  };
  Store.prototype.screen = function (
    user,
    screen,
    offset = 0,
    archived = false,
    phase = "active",
  ) {
    const p = this.patient(user);
    offset = Number(offset);
    if (!Number.isInteger(offset) || offset < 0 || offset > 100000)
      fail("INVALID_PAGE");
    return this.transaction(() => {
      this.audit(user.user_id, "SCREEN_READ", screen, p.id);
      const today = localDate(this.now(), this.profile(user).timezone ?? "UTC");
      const medPhase = archived ? "past" : phase;
      if (!["active", "past", "upcoming"].includes(medPhase))
        fail("INVALID_PAGE");
      const medWhere =
        medPhase === "past"
          ? "(archived=1 OR json_extract(body,'$.status')='stopped' OR (json_extract(body,'$.end')!='' AND json_extract(body,'$.end')<'" +
            today +
            "'))"
          : "archived=0 AND COALESCE(json_extract(body,'$.status'),'active')!='stopped' AND " +
            (medPhase === "upcoming"
              ? "json_extract(body,'$.start')>'" + today + "'"
              : "(COALESCE(json_extract(body,'$.start'),'')<='" +
                today +
                "') AND (COALESCE(json_extract(body,'$.end'),'')='' OR json_extract(body,'$.end')>='" +
                today +
                "')");
      const readRecords = (filter, limit = 30) =>
        this.db
          .prepare(
            `SELECT * FROM current_records WHERE patient_id=? AND ${filter === "medication" ? medWhere : "archived=?"} ${filter ? "AND kind=?" : ""} ORDER BY created_at DESC,id DESC LIMIT ? OFFSET ?`,
          )
          .all(
            ...[
              p.id,
              ...(filter === "medication" ? [] : [archived ? 1 : 0]),
              ...(filter ? [filter] : []),
              limit,
              offset,
            ],
          )
          .map((r) => ({ ...r, body: JSON.parse(r.body) }));
      const docs = () =>
        this.db
          .prepare(
            "SELECT d.id,d.name,d.mime,d.document_type,d.source,d.created_at,COALESCE(m.description,'') description,COALESCE(m.document_date,'') document_date,COALESCE(m.language,'und') language,COALESCE(m.translation_status,'original') translation_status,COALESCE(m.archived,0) archived FROM documents d LEFT JOIN document_details m ON m.document_id=d.id WHERE d.patient_id=? AND COALESCE(m.archived,0)=? ORDER BY d.created_at DESC,d.id DESC LIMIT 30 OFFSET ?",
          )
          .all(p.id, archived ? 1 : 0, offset);
      if (kinds.includes(screen))
        return { records: readRecords(screen), offset, page_size: 30 };
      if (screen === "documents")
        return { documents: docs(), offset, page_size: 30 };
      if (screen === "records")
        return {
          records: readRecords(null),
          documents: docs(),
          offset,
          page_size: 30,
        };
      if (["home", "passport"].includes(screen)) {
        const counts = this.db
          .prepare(
            "SELECT kind,COUNT(*) count FROM current_records WHERE patient_id=? AND archived=0 AND (kind!='medication' OR (COALESCE(json_extract(body,'$.status'),'active')!='stopped' AND COALESCE(NULLIF(json_extract(body,'$.start'),''),'0000-01-01')<=? AND COALESCE(NULLIF(json_extract(body,'$.end'),''),'9999-12-31')>=?)) GROUP BY kind",
          )
          .all(
            p.id,
            localDate(this.now(), this.profile(user).timezone || "UTC"),
            localDate(this.now(), this.profile(user).timezone || "UTC"),
          );
        return {
          profile: this.profile(user),
          counts,
          document_count: this.db
            .prepare(
              "SELECT COUNT(*) n FROM documents WHERE patient_id=? AND id NOT IN (SELECT document_id FROM document_details WHERE archived=1)",
            )
            .get(p.id).n,
          emergency: readRecords("emergency", 1)[0] ?? null,
          critical_allergies: this.db
            .prepare(
              "SELECT id,body FROM current_records WHERE patient_id=? AND kind='allergy' AND archived=0 AND json_extract(body,'$.severity')='critical' LIMIT 10",
            )
            .all(p.id)
            .map((r) => ({ ...r, body: JSON.parse(r.body) })),
          recent: readRecords(null, 4),
          documents: docs().slice(0, 3),
          access: this.db
            .prepare(
              "SELECT action,occurred_at FROM audit_events WHERE patient_id=? AND action IN ('SHARED_PASSPORT_READ','SHARED_DOCUMENT_READ','EMERGENCY_ACCESS','GRANT_REVOKED') ORDER BY seq DESC LIMIT 4",
            )
            .all(p.id),
        };
      }
      fail("NOT_FOUND", 404);
    });
  };
  Store.prototype.accessInfo = function (user, token) {
    return this.transaction(() => {
      const session = this.db
          .prepare(
            "SELECT 1 FROM sessions WHERE token_hash=? AND user_id=? AND expires_at>? AND epoch=?",
          )
          .get(user.token_hash, user.user_id, this.now(), user.epoch),
        doctor = this.doctors().some((d) => d.id === user.user_id);
      if (!session || !doctor) fail("ACCESS_NOT_AUTHORIZED", 404);
      const g = this.db
        .prepare(
          "SELECT g.*,c.active,c.patient_id AS cp,c.recipient_id AS cr FROM grants g JOIN consents c ON c.id=g.consent_id WHERE g.token_hash=? AND g.recipient_id=?",
        )
        .get(hash(String(token)), user.user_id);
      if (!g) fail("ACCESS_NOT_AUTHORIZED", 404);
      let status =
        g.revoked_at !== null || !g.active
          ? "ACCESS_REVOKED"
          : g.expires_at <= this.now()
            ? "ACCESS_EXPIRED"
            : g.one_time && g.used_at !== null
              ? "ACCESS_USED"
              : "ACTIVE";
      if (g.cp !== g.patient_id || g.cr !== g.recipient_id)
        status = "ACCESS_NOT_AUTHORIZED";
      this.audit(
        user.user_id,
        "ACCESS_STATUS_CHECK",
        g.id,
        g.patient_id,
        status === "ACTIVE" ? "COMMITTED" : "DENIED",
      );
      return {
        status,
        expires_at: g.expires_at,
        scopes: JSON.parse(g.scopes),
        purpose: g.purpose,
        one_time: !!g.one_time,
        patient_label: "Patient " + g.patient_id.slice(0, 8),
      };
    });
  };
}
