import { randomUUID } from "node:crypto";
import { fail } from "./store.mjs";
const text = (v, max = 200) => {
  if (typeof v !== "string" || v.length > max) fail(400, "INVALID_TEXT");
  return v.trim();
};
export class Care {
  constructor(store) {
    this.s = store;
  }
  appointments(user) {
    const p = this.s.patient(user);
    return this.s.transaction(() => {
      this.s.audit(user.user_id, "APPOINTMENTS_READ", "", p.id);
      return this.s.db
        .prepare(
          "SELECT * FROM appointment_entries WHERE patient_id=? ORDER BY created_at DESC LIMIT 100",
        )
        .all(p.id)
        .map((x) => ({ ...x, body: JSON.parse(x.body) }));
    });
  }
  saveAppointment(user, b) {
    const s = this.s,
      p = s.patient(user);
    const body = {
      provider: text(b.provider ?? ""),
      specialty: text(b.specialty ?? ""),
      at: text(b.at ?? ""),
      location: text(b.location ?? "", 500),
      status: b.status ?? "planned",
      source: "PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED",
    };
    if (
      !body.provider ||
      !Number.isFinite(Date.parse(body.at)) ||
      !["planned", "attended", "cancelled"].includes(body.status)
    )
      fail(400, "INVALID_APPOINTMENT");
    return s.transaction(() => {
      const existing = b.id
        ? s.db
            .prepare(
              "SELECT * FROM appointment_entries WHERE id=? AND patient_id=?",
            )
            .get(b.id, p.id)
        : null;
      if (b.id && !existing) fail(404, "NOT_FOUND");
      if (existing && existing.version !== b.version)
        fail(409, "VERSION_CONFLICT");
      const id = existing?.id ?? randomUUID(),
        version = (existing?.version ?? 0) + 1;
      if (existing)
        s.db
          .prepare(
            "UPDATE appointment_entries SET body=?,version=?,archived=? WHERE id=?",
          )
          .run(
            JSON.stringify(body),
            version,
            body.status === "cancelled" ? 1 : 0,
            id,
          );
      else
        s.db
          .prepare("INSERT INTO appointment_entries VALUES(?,?,?,?,?,?)")
          .run(id, p.id, JSON.stringify(body), version, 0, s.now());
      s.db
        .prepare("INSERT INTO appointment_versions VALUES(?,?,?,?,?)")
        .run(id, version, JSON.stringify(body), user.user_id, s.now());
      s.db
        .prepare(
          "UPDATE notifications SET status='CANCELLED' WHERE source='appointment' AND related_entity=? AND status IN ('SCHEDULED','QUEUED','DELIVERED','SNOOZED')",
        )
        .run(id);
      s.audit(user.user_id, "APPOINTMENT_UPDATED", id, p.id);
      if (body.status === "planned" && Date.parse(body.at) > s.now())
        s.notify({
          user_id: user.user_id,
          type: "Appointment",
          title: "appointmentReminder",
          message: body.provider,
          source: "appointment",
          related_entity: id,
          action_url: "#/care?appointment=" + id,
          scheduled_at: Math.max(s.now(), Date.parse(body.at) - 3600000),
          expires_at: Date.parse(body.at) + 86400000,
          dedupe_key: "appointment:" + id + ":" + version,
        });
      return { id, version };
    });
  }
  context(user) {
    const p = this.s.patient(user);
    this.s.transaction(() =>
      this.s.audit(user.user_id, "GUIDELINE_CONTEXT_READ", "", p.id),
    );
    const row = this.s.db
      .prepare("SELECT * FROM guideline_context WHERE patient_id=?")
      .get(p.id);
    return {
      context: row ? JSON.parse(row.context) : {},
      version: row?.version ?? 0,
      registry: {
        status: "BLOCKED_EXTERNAL",
        current_version: null,
        source_count: 0,
        comparison: "UNAVAILABLE_NO_APPROVED_SOURCES",
        translation: "UNAVAILABLE_NO_VERIFIED_DERIVATIVE",
        last_verified_at: null,
      },
      canonical_profile: "GUIDELINE-CROSS-JURISDICTION",
    };
  }
  saveContext(user, b) {
    const s = this.s,
      p = s.patient(user),
      context = {};
    for (const k of [
      "patient_home",
      "patient_current",
      "treating_doctor",
      "care_delivery",
    ]) {
      const v = b[k] ?? "";
      context[k] = {
        country: text(v, 100) || null,
        origin: "PATIENT_ENTERED",
        verification: "UNVERIFIED",
      };
    }
    context.reason = text(b.reason ?? "", 500);
    if (!context.reason) fail(400, "CONTEXT_REASON_REQUIRED");
    return s.transaction(() => {
      const r = s.db
        .prepare("SELECT version FROM guideline_context WHERE patient_id=?")
        .get(p.id);
      if ((r?.version ?? 0) !== b.version) fail(409, "VERSION_CONFLICT");
      const version = (r?.version ?? 0) + 1;
      s.db
        .prepare(
          "INSERT INTO guideline_context VALUES(?,?,?,?) ON CONFLICT(patient_id) DO UPDATE SET context=excluded.context,version=excluded.version,updated_at=excluded.updated_at",
        )
        .run(p.id, JSON.stringify(context), version, s.now());
      s.db
        .prepare("INSERT INTO guideline_context_versions VALUES(?,?,?,?,?)")
        .run(p.id, version, JSON.stringify(context), user.user_id, s.now());
      s.audit(user.user_id, "GUIDELINE_CONTEXT_UPDATED", "", p.id);
      return { version };
    });
  }
}
