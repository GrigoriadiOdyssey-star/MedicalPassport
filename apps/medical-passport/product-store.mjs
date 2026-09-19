import { randomUUID } from "node:crypto";
import { HttpError } from "./store.mjs";
import {
  validateSchedule,
  slots,
  localDate,
  validZone,
  wallTime,
} from "./scheduling.mjs";
const DAY = 86400000;
export const notificationTypes = [
  "Medication",
  "Appointment",
  "Document",
  "Access",
  "Security",
  "Emergency",
  "Clinical",
  "Guideline",
  "System",
];
const fail = (code, status = 400) => {
  throw new HttpError(status, code);
};
export function attachProduct(Store) {
  if (Store.prototype.productAttached) return;
  Store.prototype.productAttached = true;
  Store.prototype.notify = function (n) {
    const pref = this.db
      .prepare(
        "SELECT * FROM notification_preferences WHERE user_id=? AND type=?",
      )
      .get(n.user_id, n.type);
    if (pref?.enabled === 0 && n.type !== "Security") return;
    const at = n.scheduled_at ?? this.now();
    this.db
      .prepare(
        `INSERT OR IGNORE INTO notifications(notification_id,user_id,type,priority,title,message,scheduled_at,status,source,related_entity,action_url,expires_at,created_at,dedupe_key,audit_seq) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      )
      .run(
        randomUUID(),
        n.user_id,
        n.type,
        n.priority ?? "NORMAL",
        n.title,
        n.message ?? "",
        at,
        "SCHEDULED",
        n.source ?? "system",
        n.related_entity ?? "",
        n.action_url ?? "#/notifications",
        n.expires_at ?? at + 30 * DAY,
        this.now(),
        n.dedupe_key,
        n.audit_seq ?? null,
      );
  };
  const originalAudit = Store.prototype.audit;
  Store.prototype.audit = function (
    actor,
    action,
    reference = "",
    patient = null,
    outcome = "COMMITTED",
  ) {
    const result = originalAudit.call(
      this,
      actor,
      action,
      reference,
      patient,
      outcome,
    );
    const seq = Number(
      this.db.prepare("SELECT MAX(seq) n FROM audit_events").get().n,
    );
    const events = {
      DOCUMENT_UPLOADED: ["Document", "documentUploaded", "documents"],
      RECORD_UPDATED: ["Clinical", "recordUpdated", "records"],
      GRANT_CREATED: ["Access", "accessGranted", "privacy"],
      GRANT_REVOKED: ["Access", "accessRevokedNotice", "privacy"],
      SHARED_PASSPORT_READ: ["Access", "passportOpened", "privacy"],
      SHARED_DOCUMENT_READ: ["Access", "documentOpened", "privacy"],
      EMERGENCY_ACCESS: ["Emergency", "emergencyOpened", "privacy"],
      PASSWORD_RECOVERED: ["Security", "accountRecovered", "profile"],
    };
    const event = events[action];
    if (event) {
      const owner = patient
        ? this.db
            .prepare("SELECT user_id FROM patients WHERE id=?")
            .get(patient)?.user_id
        : actor;
      if (
        owner &&
        this.db.prepare("SELECT 1 FROM users WHERE id=?").get(owner)
      ) {
        this.notify({
          user_id: owner,
          type: event[0],
          title: event[1],
          source: "audit",
          related_entity: reference,
          action_url: "#/" + event[2],
          dedupe_key: "audit:" + seq,
          audit_seq: seq,
        });
        const grant = this.db
          .prepare("SELECT one_time,used_at FROM grants WHERE id=?")
          .get(reference);
        if (
          grant?.one_time &&
          grant.used_at &&
          [
            "SHARED_PASSPORT_READ",
            "SHARED_DOCUMENT_READ",
            "EMERGENCY_ACCESS",
          ].includes(action)
        )
          this.notify({
            user_id: owner,
            type: "Access",
            title: "oneTimeConsumed",
            source: "audit",
            related_entity: reference,
            action_url: "#/privacy",
            dedupe_key: "once:" + reference,
            audit_seq: seq,
          });
      }
    }
    if (
      ["REQUEST_DENIED", "LOGIN_FAILED"].includes(action) &&
      actor !== "anonymous" &&
      this.db.prepare("SELECT 1 FROM users WHERE id=?").get(actor)
    )
      this.notify({
        user_id: actor,
        type: "Security",
        priority: "CRITICAL",
        title: "requestDeniedNotice",
        source: "audit",
        dedupe_key: "denial:" + actor + ":" + Math.floor(this.now() / 3600000),
        audit_seq: seq,
      });
    return result;
  };
  Store.prototype.preferences = function (user) {
    return notificationTypes.map((type) => ({
      ...{ type, enabled: 1, channel: "IN_APP" },
      ...this.db
        .prepare(
          "SELECT type,enabled,channel FROM notification_preferences WHERE user_id=? AND type=?",
        )
        .get(user.user_id, type),
    }));
  };
  Store.prototype.savePreferences = function (user, body) {
    if (
      !Array.isArray(body.preferences) ||
      body.preferences.length !== notificationTypes.length ||
      new Set(body.preferences.map((p) => p.type)).size !==
        notificationTypes.length
    )
      fail("INVALID_PREFERENCES");
    return this.transaction(() => {
      for (const p of body.preferences) {
        if (
          !notificationTypes.includes(p.type) ||
          typeof p.enabled !== "boolean" ||
          !["IN_APP", "BROWSER", "PUSH", "EMAIL", "SMS"].includes(p.channel) ||
          (p.type === "Security" && !p.enabled)
        )
          fail("INVALID_PREFERENCES");
        this.db
          .prepare(
            "INSERT INTO notification_preferences VALUES(?,?,?,?) ON CONFLICT(user_id,type) DO UPDATE SET enabled=excluded.enabled,channel=excluded.channel",
          )
          .run(user.user_id, p.type, p.enabled ? 1 : 0, p.channel);
        if (!p.enabled)
          this.db
            .prepare(
              "UPDATE notifications SET status='CANCELLED',suppressed_by_settings=1 WHERE user_id=? AND type=? AND status IN('SCHEDULED','QUEUED','SNOOZED')",
            )
            .run(user.user_id, p.type);
        else
          this.db
            .prepare(
              "UPDATE notifications SET status='SCHEDULED',suppressed_by_settings=0 WHERE user_id=? AND type=? AND suppressed_by_settings=1 AND expires_at>? AND (source!='medication_dose' OR related_entity IN (SELECT d.id FROM medication_doses d JOIN reminder_plans p ON p.id=d.plan_id WHERE d.status='PENDING' AND p.active=1))",
            )
            .run(user.user_id, p.type, this.now());
      }
      this.audit(user.user_id, "NOTIFICATION_SETTINGS_UPDATED");
      return { ok: true };
    });
  };
  Store.prototype.configureReminder = function (user, id, input) {
    const p = this.patient(user),
      config = validateSchedule(input);
    if (input.confirmed !== true) fail("SCHEDULE_CONFIRM_REQUIRED");
    return this.transaction(() => {
      const r = this.db
        .prepare(
          "SELECT * FROM current_records WHERE id=? AND patient_id=? AND kind='medication' AND archived=0",
        )
        .get(id, p.id);
      if (!r || JSON.parse(r.body).status === "stopped") fail("NOT_FOUND", 404);
      const body = JSON.parse(r.body);
      if (
        (body.start && config.start < body.start) ||
        (body.end && (!config.end || config.end > body.end))
      )
        fail("SCHEDULE_OUTSIDE_RECORD");
      const old = this.db
          .prepare("SELECT * FROM reminder_plans WHERE record_id=?")
          .get(id),
        plan = old?.id ?? randomUUID(),
        version = (old?.version ?? 0) + 1;
      this.db
        .prepare(
          "INSERT INTO reminder_plans VALUES(?,?,?,?,?,1,?,?) ON CONFLICT(record_id) DO UPDATE SET version=excluded.version,config=excluded.config,active=1,updated_at=excluded.updated_at",
        )
        .run(
          plan,
          id,
          p.id,
          version,
          JSON.stringify(config),
          this.now(),
          this.now(),
        );
      this.db
        .prepare("INSERT INTO reminder_versions VALUES(?,?,?,?,?,?)")
        .run(
          plan,
          version,
          JSON.stringify(config),
          r.version,
          user.user_id,
          this.now(),
        );
      this.cancelFuture(plan, this.now());
      this.audit(user.user_id, "REMINDER_CONFIGURED", plan, p.id);
      this.notify({
        user_id: user.user_id,
        type: "Medication",
        title: "reminderScheduled",
        related_entity: plan,
        action_url: "#/medication",
        dedupe_key: "plan:" + plan + ":" + version,
      });
      return { id: plan, version };
    });
  };
  Store.prototype.cancelFuture = function (plan, from) {
    this.db
      .prepare(
        "UPDATE notifications SET status='CANCELLED' WHERE related_entity IN(SELECT id FROM medication_doses WHERE plan_id=? AND scheduled_at>=? AND status='PENDING') AND status NOT IN('READ','CANCELLED','EXPIRED')",
      )
      .run(plan, from);
    this.db
      .prepare(
        "UPDATE medication_doses SET status='CANCELLED' WHERE plan_id=? AND scheduled_at>=? AND status='PENDING'",
      )
      .run(plan, from);
  };
  Store.prototype.pauseReminder = function (user, id) {
    const p = this.patient(user);
    return this.transaction(() => {
      const plan = this.db
        .prepare("SELECT * FROM reminder_plans WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!plan) fail("NOT_FOUND", 404);
      this.db
        .prepare("UPDATE reminder_plans SET active=0,updated_at=? WHERE id=?")
        .run(this.now(), id);
      this.cancelFuture(id, 0);
      this.audit(user.user_id, "REMINDER_PAUSED", id, p.id);
      return { ok: true };
    });
  };
  // Called both by the worker and by own-patient reads. Unique slots + notification keys
  // make repeated workers/restarts idempotent. No external network delivery occurs here.
  Store.prototype.pumpNotifications = function (userId = null) {
    return this.transaction(() => {
      const now = this.now();
      const plans = this.db
        .prepare(
          `SELECT p.*,r.body,r.version record_version,r.archived,r.source,pt.user_id FROM reminder_plans p JOIN current_records r ON r.id=p.record_id JOIN patients pt ON pt.id=p.patient_id WHERE p.active=1 ${userId ? "AND pt.user_id=?" : ""}`,
        )
        .all(...(userId ? [userId] : []));
      for (const plan of plans) {
        const body = JSON.parse(plan.body);
        if (plan.archived || body.status === "stopped") {
          this.db
            .prepare("UPDATE reminder_plans SET active=0 WHERE id=?")
            .run(plan.id);
          this.cancelFuture(plan.id, 0);
          continue;
        }
        const c = JSON.parse(plan.config),
          from = Math.max(plan.updated_at, now - 30 * DAY);
        for (const slot of slots(c, from, now + 2 * DAY)) {
          const existing = this.db
            .prepare(
              "SELECT * FROM medication_doses WHERE plan_id=? AND slot=?",
            )
            .get(plan.id, slot.slot);
          if (existing && existing.status !== "CANCELLED") {
            if (existing.status === "PENDING")
              this.notify({
                user_id: plan.user_id,
                type: "Medication",
                title: "doseReminder",
                message: JSON.parse(existing.snapshot).name,
                scheduled_at: existing.scheduled_at,
                expires_at: existing.scheduled_at + DAY,
                source: "medication_dose",
                related_entity: existing.id,
                action_url: "#/medication",
                dedupe_key: "dose:" + existing.id + ":" + existing.plan_version,
              });
            continue;
          }
          const id = existing?.id ?? randomUUID(),
            snapshot = JSON.stringify({
              ...body,
              source: plan.source,
              record_version: plan.record_version,
              timezone: c.timezone,
            });
          if (existing)
            this.db
              .prepare(
                "UPDATE medication_doses SET plan_version=?,scheduled_at=?,status='PENDING',acted_at=NULL,snapshot=? WHERE id=?",
              )
              .run(plan.version, slot.at, snapshot, id);
          else
            this.db
              .prepare(
                "INSERT INTO medication_doses VALUES(?,?,?,?,?,?,?,'PENDING',NULL,?)",
              )
              .run(
                id,
                plan.id,
                plan.version,
                plan.patient_id,
                plan.record_id,
                slot.slot,
                slot.at,
                snapshot,
              );
          this.notify({
            user_id: plan.user_id,
            type: "Medication",
            title: "doseReminder",
            message: body.name,
            scheduled_at: slot.at,
            expires_at: slot.at + DAY,
            source: "medication_dose",
            related_entity: id,
            action_url: "#/medication",
            dedupe_key: "dose:" + id + ":" + plan.version,
          });
        }
      }
      this.db
        .prepare(
          "UPDATE medication_doses SET status='MISSED' WHERE status='PENDING' AND scheduled_at<?",
        )
        .run(now - DAY);
      this.db
        .prepare(
          "UPDATE notifications SET status='EXPIRED' WHERE expires_at<=? AND status IN('SCHEDULED','QUEUED','DELIVERED','SNOOZED')",
        )
        .run(now);
      const soon = this.db
        .prepare(
          `SELECT g.*,p.user_id FROM grants g JOIN patients p ON p.id=g.patient_id WHERE g.revoked_at IS NULL AND g.used_at IS NULL AND g.expires_at>? AND g.expires_at<=? ${userId ? "AND p.user_id=?" : ""}`,
        )
        .all(now, now + 15 * 60000, ...(userId ? [userId] : []));
      for (const g of soon)
        this.notify({
          user_id: g.user_id,
          type: "Access",
          title: "accessExpiresSoon",
          source: "grant",
          related_entity: g.id,
          action_url: "#/privacy",
          expires_at: g.expires_at,
          dedupe_key: "expires:" + g.id,
        });
      this.db
        .prepare(
          "UPDATE notifications SET status='QUEUED' WHERE status IN('SCHEDULED','SNOOZED') AND scheduled_at<=? AND expires_at>?",
        )
        .run(now, now);
      this.db
        .prepare(
          "UPDATE notifications SET status='DELIVERED',delivered_at=? WHERE status='QUEUED'",
        )
        .run(now);
      return { ok: true };
    });
  };
  Store.prototype.notificationList = function (
    user,
    filter = "all",
    type = "all",
    offset = 0,
  ) {
    if (
      !Number.isInteger(Number(offset)) ||
      offset < 0 ||
      offset > 100000 ||
      !["all", "today", "upcoming", "unread"].includes(filter) ||
      !(type === "all" || notificationTypes.includes(type))
    )
      fail("INVALID_PAGE");
    this.pumpNotifications(user.user_id);
    const p = this.db
        .prepare(
          "SELECT timezone FROM patient_details WHERE patient_id=(SELECT id FROM patients WHERE user_id=?)",
        )
        .get(user.user_id),
      zone = p?.timezone ?? "UTC",
      today = localDate(this.now(), zone);
    let where = "user_id=?";
    const args = [user.user_id];
    if (type !== "all") {
      where += " AND type=?";
      args.push(type);
    }
    if (filter === "unread") where += " AND status='DELIVERED'";
    if (filter === "upcoming") where += " AND status IN('SCHEDULED','SNOOZED')";
    if (filter === "today") {
      where += " AND scheduled_at BETWEEN ? AND ?";
      const tomorrow = new Date(Date.parse(today) + DAY)
        .toISOString()
        .slice(0, 10);
      args.push(
        wallTime(today, "00:00", zone),
        wallTime(tomorrow, "00:00", zone) - 1,
      );
    }
    let rows = this.db
      .prepare(
        `SELECT * FROM notifications WHERE ${where} ORDER BY scheduled_at ${filter === "upcoming" ? "ASC" : "DESC"},notification_id LIMIT 30 OFFSET ?`,
      )
      .all(...args, Number(offset));
    if (filter === "today")
      rows = rows.filter((n) => localDate(n.scheduled_at, zone) === today);
    return {
      items: rows,
      unread: this.db
        .prepare(
          "SELECT COUNT(*) n FROM notifications WHERE user_id=? AND status='DELIVERED'",
        )
        .get(user.user_id).n,
      timezone: zone,
      offset: Number(offset),
    };
  };
  Store.prototype.notificationAction = function (
    user,
    id,
    action,
    minutes = 10,
  ) {
    return this.transaction(() => {
      if (action === "read_all") {
        this.db
          .prepare(
            "UPDATE notifications SET status='READ',read_at=? WHERE user_id=? AND status='DELIVERED'",
          )
          .run(this.now(), user.user_id);
      } else {
        const n = this.db
          .prepare(
            "SELECT * FROM notifications WHERE notification_id=? AND user_id=?",
          )
          .get(id, user.user_id);
        if (!n) fail("NOT_FOUND", 404);
        if (action === "read" && ["DELIVERED", "READ"].includes(n.status))
          this.db
            .prepare(
              "UPDATE notifications SET status='READ',read_at=COALESCE(read_at,?) WHERE notification_id=?",
            )
            .run(this.now(), id);
        else if (action === "dismiss" && n.priority !== "CRITICAL")
          this.db
            .prepare(
              "UPDATE notifications SET status='CANCELLED',suppressed_by_settings=0 WHERE notification_id=?",
            )
            .run(id);
        else fail("INVALID_NOTIFICATION_ACTION");
      }
      this.audit(user.user_id, "NOTIFICATION_ACTION", id);
      return { ok: true };
    });
  };
  Store.prototype.reminderData = function (user, days = 1, offset = 0) {
    const p = this.patient(user);
    if (
      !Number.isInteger(Number(offset)) ||
      offset < 0 ||
      offset > 100000 ||
      ![1, 7, 30].includes(Number(days))
    )
      fail("INVALID_PAGE");
    this.pumpNotifications(user.user_id);
    const zone = this.profile(user).timezone ?? "UTC",
      today = localDate(this.now(), zone),
      startDay = new Date(Date.parse(today) - (Number(days) - 1) * DAY)
        .toISOString()
        .slice(0, 10),
      nextDay = new Date(Date.parse(today) + DAY).toISOString().slice(0, 10);
    const start = wallTime(startDay, "00:00", zone),
      end = wallTime(nextDay, "00:00", zone);
    return {
      counts: this.db
        .prepare(
          "SELECT status,COUNT(*) n FROM medication_doses WHERE patient_id=? AND scheduled_at>=? AND scheduled_at<? AND status!='CANCELLED' GROUP BY status",
        )
        .all(p.id, start, end),
      offset: Number(offset),
      timezone: this.profile(user).timezone ?? "UTC",
      plans: this.db
        .prepare("SELECT * FROM reminder_plans WHERE patient_id=?")
        .all(p.id)
        .map((x) => ({ ...x, config: JSON.parse(x.config) })),
      doses: this.db
        .prepare(
          "SELECT * FROM medication_doses WHERE patient_id=? AND scheduled_at>=? AND scheduled_at<=? ORDER BY scheduled_at DESC,id LIMIT 300 OFFSET ?",
        )
        .all(p.id, start, this.now() + 2 * DAY, Number(offset))
        .map((d) => ({ ...d, snapshot: JSON.parse(d.snapshot) })),
      limit: 300,
    };
  };
  Store.prototype.doseAction = function (user, id, action, minutes = 10) {
    const p = this.patient(user);
    this.pumpNotifications(user.user_id);
    return this.transaction(() => {
      const d = this.db
        .prepare("SELECT * FROM medication_doses WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!d) fail("NOT_FOUND", 404);
      if (
        d.status !== "PENDING" &&
        !(d.status === "MISSED" && action === "taken")
      )
        fail("DOSE_ALREADY_RESOLVED", 409);
      if (d.scheduled_at > this.now()) fail("DOSE_NOT_DUE");
      if (action === "snooze") {
        if (
          ![5, 10, 30, 60].includes(Number(minutes)) ||
          this.now() + Number(minutes) * 60000 >= d.scheduled_at + DAY
        )
          fail("INVALID_SNOOZE");
        const n = this.db
          .prepare(
            "SELECT notification_id FROM notifications WHERE related_entity=? AND source='medication_dose' ORDER BY created_at DESC LIMIT 1",
          )
          .get(id);
        if (!n) fail("REMINDER_DISABLED");
        this.db
          .prepare(
            "UPDATE notifications SET status='SNOOZED',scheduled_at=?,read_at=NULL WHERE notification_id=?",
          )
          .run(this.now() + Number(minutes) * 60000, n.notification_id);
      } else {
        if (!["taken", "skip"].includes(action)) fail("INVALID_DOSE_ACTION");
        const status =
          action === "skip"
            ? "SKIPPED"
            : this.now() > d.scheduled_at + 30 * 60000
              ? "TAKEN_LATE"
              : "TAKEN";
        this.db
          .prepare("UPDATE medication_doses SET status=?,acted_at=? WHERE id=?")
          .run(status, this.now(), id);
        this.db
          .prepare(
            "UPDATE notifications SET status='READ',read_at=? WHERE related_entity=? AND source='medication_dose'",
          )
          .run(this.now(), id);
      }
      this.audit(user.user_id, "DOSE_" + action.toUpperCase(), id, p.id);
      return { ok: true };
    });
  };
  Store.prototype.timezoneChoice = function (user, body) {
    const p = this.patient(user);
    if (!validZone(body.timezone) || !["home", "local"].includes(body.mode))
      fail("INVALID_TIMEZONE");
    return this.transaction(() => {
      this.db
        .prepare(
          "INSERT INTO patient_details(patient_id,timezone) VALUES(?,?) ON CONFLICT(patient_id) DO UPDATE SET timezone=excluded.timezone",
        )
        .run(p.id, body.timezone);
      if (body.mode === "local") {
        const plans = this.db
          .prepare(
            "SELECT * FROM reminder_plans WHERE patient_id=? AND active=1",
          )
          .all(p.id);
        for (const plan of plans) {
          const c = JSON.parse(plan.config);
          if (c.mode === "interval") continue;
          c.timezone = body.timezone;
          this.db
            .prepare(
              "UPDATE reminder_plans SET config=?,version=version+1,updated_at=? WHERE id=?",
            )
            .run(JSON.stringify(c), this.now(), plan.id);
          this.db
            .prepare("INSERT INTO reminder_versions VALUES(?,?,?,?,?,?)")
            .run(
              plan.id,
              plan.version + 1,
              JSON.stringify(c),
              this.db
                .prepare("SELECT version FROM current_records WHERE id=?")
                .get(plan.record_id).version,
              user.user_id,
              this.now(),
            );
          this.cancelFuture(plan.id, this.now());
        }
      }
      this.audit(
        user.user_id,
        "TIMEZONE_CHOICE_" + body.mode.toUpperCase(),
        body.timezone,
        p.id,
      );
      return { ok: true };
    });
  };
  Store.prototype.sessionsList = function (user) {
    return this.db
      .prepare(
        "SELECT rowid id,expires_at,token_hash=? current FROM sessions WHERE user_id=? AND expires_at>? ORDER BY expires_at DESC LIMIT 50",
      )
      .all(user.token_hash, user.user_id, this.now());
  };
  Store.prototype.revokeSession = function (user, id) {
    return this.transaction(() => {
      this.db
        .prepare(
          "DELETE FROM sessions WHERE rowid=? AND user_id=? AND token_hash!=?",
        )
        .run(Number(id), user.user_id, user.token_hash);
      this.audit(user.user_id, "SESSION_REVOKED", String(id));
      return { ok: true };
    });
  };
}
