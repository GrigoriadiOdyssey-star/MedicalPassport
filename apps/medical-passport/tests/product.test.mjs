import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import assert from "node:assert/strict";
import { createApplication } from "../server.mjs";
import { slots, validateSchedule, wallTime } from "../scheduling.mjs";
function setup(t) {
  let now = Date.parse("2026-09-19T08:00:00Z");
  const app = createApplication({ database: ":memory:", now: () => now }),
    s = app.store;
  t.after(() => s.close());
  const pass = "Synthetic-product-test-123!";
  const p = s.register({
      name: "Synthetic",
      email: "p@example.test",
      password: pass,
    }),
    o = s.register({ name: "Other", email: "o@example.test", password: pass }),
    doctor = s.register(
      { name: "D", email: "d@example.test", password: pass, role: "doctor" },
      true,
    );
  const login = (email) => s.session(s.login(email, pass).token);
  const u = login(p.email),
    other = login(o.email),
    d = login(doctor.email),
    record = s.addRecord(u, "medication", {
      name: "Synthetic medicine",
      dose: "Test dose",
      status: "active",
    });
  const config = {
    mode: "daily",
    times: ["08:00", "20:00"],
    timezone: "UTC",
    start: "2026-09-19",
    end: "2026-09-25",
    confirmed: true,
  };
  return {
    s,
    u,
    other,
    d,
    record,
    config,
    now: () => now,
    advance: (ms) => (now += ms),
  };
}
test("daily, custom weekdays and interval schedules preserve entered times", () => {
  const c = validateSchedule({
    mode: "daily",
    times: ["20:00", "08:00"],
    timezone: "UTC",
    start: "2026-09-19",
    weekdays: [6],
  });
  assert.equal(
    slots(c, Date.parse("2026-09-19"), Date.parse("2026-09-21")).length,
    2,
  );
  const i = validateSchedule({
    ...c,
    mode: "interval",
    interval_hours: 6,
    anchor: Date.parse("2026-09-19T00:00Z"),
  });
  assert.equal(
    slots(i, Date.parse("2026-09-19"), Date.parse("2026-09-20")).length,
    5,
  );
  assert.throws(
    () => validateSchedule({ ...c, times: ["08:00", "08:00"] }),
    /INVALID_SCHEDULE/,
  );
  assert.throws(
    () => validateSchedule({ ...c, timezone: "Mars/Space" }),
    /INVALID_SCHEDULE/,
  );
  assert.throws(
    () => validateSchedule({ ...c, start: "2026-02-30" }),
    /INVALID_SCHEDULE/,
  );
});
test("DST gap is skipped and repeated local time occurs exactly once", () => {
  assert.equal(wallTime("2026-03-08", "02:30", "America/New_York"), null);
  assert.equal(
    wallTime("2026-11-01", "01:30", "America/New_York"),
    Date.parse("2026-11-01T05:30Z"),
  );
  const c = validateSchedule({
    mode: "daily",
    times: ["01:30"],
    timezone: "America/New_York",
    start: "2026-11-01",
  });
  assert.equal(
    slots(c, Date.parse("2026-11-01"), Date.parse("2026-11-02")).length,
    1,
  );
});
test("notification delivery deduplicates; read/dismiss and mandatory security settings enforce ownership", (t) => {
  const { s, u, other, now } = setup(t);
  s.transaction(() => {
    for (let i = 0; i < 2; i++)
      s.notify({
        user_id: u.user_id,
        type: "System",
        title: "system",
        dedupe_key: "same",
        scheduled_at: now() + 60000,
      });
  });
  assert.equal(s.notificationList(u, "upcoming").items.length, 1);
  assert.equal(s.notificationList(u, "unread").items.length, 0);
  s.transaction(() =>
    s.notify({
      user_id: u.user_id,
      type: "Security",
      priority: "CRITICAL",
      title: "security",
      dedupe_key: "critical",
    }),
  );
  const n = s.notificationList(u, "unread").items[0];
  assert.throws(
    () => s.notificationAction(other, n.notification_id, "read"),
    /NOT_FOUND/,
  );
  assert.throws(
    () => s.notificationAction(u, n.notification_id, "dismiss"),
    /INVALID_NOTIFICATION_ACTION/,
  );
  const prefs = s.preferences(u).map((p) => ({ ...p, enabled: false }));
  assert.throws(
    () => s.savePreferences(u, { preferences: prefs }),
    /INVALID_PREFERENCES/,
  );
  s.notificationAction(u, n.notification_id, "read");
  assert.equal(s.notificationList(u, "unread").unread, 0);
  assert.equal(s.verifyAudit(), true);
});
test("reminder creates one dose per slot; snooze does not duplicate doses, taken resolves once", (t) => {
  const { s, u, record, config, advance } = setup(t);
  s.configureReminder(u, record.id, config);
  const before = s.reminderData(u);
  s.pumpNotifications();
  assert.equal(s.reminderData(u).doses.length, before.doses.length);
  const dose = before.doses.find(
    (d) => d.scheduled_at === Date.parse("2026-09-19T08:00Z"),
  );
  s.doseAction(u, dose.id, "snooze", 10);
  assert.equal(
    s.db
      .prepare("SELECT status FROM notifications WHERE related_entity=?")
      .get(dose.id).status,
    "SNOOZED",
  );
  advance(10 * 60000);
  s.pumpNotifications();
  assert.equal(
    s.db
      .prepare("SELECT status FROM notifications WHERE related_entity=?")
      .get(dose.id).status,
    "DELIVERED",
  );
  s.doseAction(u, dose.id, "taken");
  assert.equal(
    s.db.prepare("SELECT status FROM medication_doses WHERE id=?").get(dose.id)
      .status,
    "TAKEN",
  );
  assert.throws(
    () => s.doseAction(u, dose.id, "skip"),
    /DOSE_ALREADY_RESOLVED/,
  );
  assert.equal(
    s.db
      .prepare("SELECT COUNT(*) n FROM notifications WHERE related_entity=?")
      .get(dose.id).n,
    1,
  );
});
test("skipped, late and missed dose states are factual; future and other-patient actions denied", (t) => {
  const { s, u, other, d, record, config, advance } = setup(t);
  s.configureReminder(u, record.id, config);
  let doses = s.reminderData(u).doses;
  const due = doses.find(
      (d) => d.scheduled_at === Date.parse("2026-09-19T08:00Z"),
    ),
    future = doses.find(
      (d) => d.scheduled_at === Date.parse("2026-09-19T20:00Z"),
    );
  assert.throws(() => s.doseAction(u, future.id, "taken"), /DOSE_NOT_DUE/);
  assert.throws(() => s.doseAction(other, due.id, "taken"), /NOT_FOUND/);
  assert.throws(
    () => s.configureReminder(d, record.id, config),
    /PATIENT_ONLY/,
  );
  s.doseAction(u, due.id, "skip");
  advance(13 * 3600000);
  s.doseAction(u, future.id, "taken");
  assert.equal(
    s.db
      .prepare("SELECT status FROM medication_doses WHERE id=?")
      .get(future.id).status,
    "TAKEN_LATE",
  );
  advance(2 * 86400000);
  doses = s.reminderData(u, 7).doses;
  assert.ok(doses.some((x) => x.status === "MISSED"));
  assert.ok(doses.some((x) => x.status === "SKIPPED"));
});
test("pause, archive and edit cancel pending notifications while preserving prescription and provenance", (t) => {
  const { s, u, record, config } = setup(t);
  const plan = s.configureReminder(u, record.id, config);
  s.reminderData(u);
  s.pauseReminder(u, plan.id);
  assert.equal(
    s.db
      .prepare("SELECT COUNT(*) n FROM medication_doses WHERE status='PENDING'")
      .get().n,
    0,
  );
  assert.equal(s.recordHistory(u, record.id).length, 1);
  s.configureReminder(u, record.id, config);
  s.reminderData(u);
  s.changeRecord(
    u,
    record.id,
    { name: "Edited", dose: "New reported dose" },
    1,
  );
  assert.equal(
    s.db.prepare("SELECT active FROM reminder_plans WHERE id=?").get(plan.id)
      .active,
    0,
  );
  assert.equal(s.recordHistory(u, record.id).length, 2);
  assert.equal(
    s.db.prepare("SELECT COUNT(*) n FROM reminder_versions").get().n,
    2,
  );
  assert.throws(
    () => s.db.exec("DELETE FROM reminder_versions"),
    /immutable reminder/,
  );
});
test("timezone change is explicit; home preserves plan, local reschedules future and does not repeat taken slot", (t) => {
  const { s, u, record, config } = setup(t);
  const plan = s.configureReminder(u, record.id, config);
  const due = s
    .reminderData(u)
    .doses.find((d) => d.scheduled_at === Date.parse("2026-09-19T08:00Z"));
  s.doseAction(u, due.id, "taken");
  s.timezoneChoice(u, { timezone: "Europe/Moscow", mode: "home" });
  assert.equal(
    JSON.parse(
      s.db.prepare("SELECT config FROM reminder_plans WHERE id=?").get(plan.id)
        .config,
    ).timezone,
    "UTC",
  );
  s.timezoneChoice(u, { timezone: "Europe/Moscow", mode: "local" });
  const data = s.reminderData(u);
  assert.equal(data.plans[0].config.timezone, "Europe/Moscow");
  assert.equal(
    data.doses.filter((d) => d.slot === "2026-09-19T08:00").length,
    1,
  );
  assert.equal(
    data.doses.find((d) => d.slot === "2026-09-19T20:00").scheduled_at,
    Date.parse("2026-09-19T17:00Z"),
  );
});
test("doctor access creates patient notification linked to audit and one-time consumption", (t) => {
  const { s, u, d } = setup(t);
  const grant = s.createGrant(u, {
    recipient_id: d.user_id,
    scopes: ["allergy"],
    duration: "once",
  });
  s.consume(d, grant.token);
  const items = s.notificationList(u, "all").items;
  assert.ok(
    items.some(
      (n) =>
        n.title === "passportOpened" &&
        n.audit_seq &&
        n.related_entity === grant.id,
    ),
  );
  assert.ok(items.some((n) => n.title === "oneTimeConsumed"));
  assert.equal(
    s
      .notificationList(d, "all")
      .items.some((n) => n.title === "passportOpened"),
    false,
  );
  s.revoke(u, grant.id);
  assert.ok(
    s
      .notificationList(u, "all")
      .items.some((n) => n.title === "accessRevokedNotice"),
  );
});
test("notification insertion failure rolls back access consumption and audit together", (t) => {
  const { s, u, d } = setup(t);
  const grant = s.createGrant(u, {
    recipient_id: d.user_id,
    scopes: ["allergy"],
    duration: "once",
  });
  s.db.exec(
    "CREATE TRIGGER notification_fail BEFORE INSERT ON notifications BEGIN SELECT RAISE(ABORT,'notification unavailable'); END;",
  );
  assert.throws(() => s.consume(d, grant.token), /notification unavailable/);
  assert.equal(
    s.db.prepare("SELECT used_at FROM grants WHERE id=?").get(grant.id).used_at,
    null,
  );
  assert.equal(s.verifyAudit(), true);
});
test("upcoming/active/past medication reads use dates and notification Today uses patient timezone", (t) => {
  const { s, u, now } = setup(t);
  s.addRecord(u, "medication", { name: "future", start: "2026-09-21" });
  s.addRecord(u, "medication", { name: "past", end: "2026-09-18" });
  assert.deepEqual(
    s
      .screen(u, "medication", 0, false, "upcoming")
      .records.map((r) => r.body.name),
    ["future"],
  );
  assert.deepEqual(
    s.screen(u, "medication", 0, false, "past").records.map((r) => r.body.name),
    ["past"],
  );
  assert.equal(s.screen(u, "medication").records.length, 1);
  assert.equal(
    s.screen(u, "home").counts.find((c) => c.kind === "medication").count,
    1,
  );
  s.timezoneChoice(u, { timezone: "Asia/Tokyo", mode: "home" });
  s.transaction(() => {
    s.notify({
      user_id: u.user_id,
      type: "System",
      title: "today",
      scheduled_at: Date.parse("2026-09-18T16:00Z"),
      dedupe_key: "tokyo-today",
    });
    s.notify({
      user_id: u.user_id,
      type: "System",
      title: "tomorrow",
      scheduled_at: Date.parse("2026-09-19T16:00Z"),
      dedupe_key: "tokyo-tomorrow",
    });
  });
  const items = s.notificationList(u, "today").items;
  assert.ok(items.some((n) => n.title === "today"));
  assert.ok(!items.some((n) => n.title === "tomorrow"));
});
test("new product APIs preserve authentication/CSRF, scheduling, ownership and read settings", async (t) => {
  let now = Date.parse("2026-09-19T08:00Z");
  const app = createApplication({ database: ":memory:", now: () => now }),
    origin = await app.start();
  t.after(() => app.close());
  const password = "Synthetic-http-test-123!";
  app.store.register({ name: "P", email: "p@example.test", password });
  const login = await fetch(origin + "/api/login", {
      method: "POST",
      headers: { Origin: origin, "Content-Type": "application/json" },
      body: JSON.stringify({ email: "p@example.test", password }),
    }),
    cookie = login.headers.get("set-cookie").split(";")[0],
    { csrf } = await login.json();
  const req = async (path, body, token = csrf) => {
    const r = await fetch(origin + "/api" + path, {
      method: body ? "POST" : "GET",
      headers: {
        Origin: origin,
        Cookie: cookie,
        "Content-Type": "application/json",
        "x-csrf-token": token,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    return { status: r.status, data: await r.json() };
  };
  const r = await req("/records", {
    kind: "medication",
    body: {
      name: "Synthetic",
      form: "tablet",
      unit: "demo units",
      instructions: "Not for care",
      food: "with_food",
    },
  });
  assert.equal(r.status, 201);
  const config = {
    record_id: r.data.id,
    mode: "daily",
    times: ["08:00"],
    timezone: "UTC",
    start: "2026-09-19",
    confirmed: true,
  };
  assert.equal((await req("/reminders", config, "wrong")).status, 403);
  assert.equal((await req("/reminders", config)).status, 201);
  const history = await req("/reminders?days=7"),
    dose = history.data.doses.find((d) => d.scheduled_at === now);
  assert.equal(
    (await req("/doses/action", { id: dose.id, action: "snooze", minutes: 5 }))
      .status,
    200,
  );
  now += 5 * 60000;
  assert.equal(
    (await req("/doses/action", { id: dose.id, action: "taken" })).status,
    200,
  );
  const settings = (await req("/notification-settings")).data.map((p) => ({
    ...p,
    enabled: true,
  }));
  assert.equal(
    (await req("/notification-settings", { preferences: settings })).status,
    200,
  );
  assert.equal(
    (await req("/notifications/action", { action: "read_all" })).status,
    200,
  );
  assert.equal((await req("/notifications?filter=unread")).data.unread, 0);
  assert.equal((await req("/sessions")).data[0].current, 1);
  assert.equal((await fetch(origin + "/api/notifications")).status, 401);
  assert.equal(
    (
      await req("/reminders", {
        ...config,
        mode: "interval",
        anchor_local: "bad",
      })
    ).status,
    400,
  );
});
test("disabling and re-enabling reminder notifications resumes pending delivery but preserves dismissals", (t) => {
  const { s, u, record, config, advance } = setup(t);
  s.configureReminder(u, record.id, config);
  s.reminderData(u);
  const set = (enabled) =>
    s.savePreferences(u, {
      preferences: s.preferences(u).map((p) => ({
        ...p,
        enabled: p.type === "Medication" ? enabled : true,
      })),
    });
  set(false);
  advance(12 * 3600000);
  s.pumpNotifications();
  assert.equal(
    s
      .notificationList(u, "unread")
      .items.filter(
        (n) =>
          n.source === "medication_dose" &&
          n.scheduled_at === Date.parse("2026-09-19T20:00Z"),
      ).length,
    0,
  );
  set(true);
  const due = s
    .notificationList(u, "unread")
    .items.find(
      (n) =>
        n.source === "medication_dose" &&
        n.scheduled_at === Date.parse("2026-09-19T20:00Z"),
    );
  assert.ok(due);
  s.notificationAction(u, due.notification_id, "dismiss");
  set(false);
  set(true);
  s.pumpNotifications();
  assert.equal(
    s.db
      .prepare("SELECT status FROM notifications WHERE notification_id=?")
      .get(due.notification_id).status,
    "CANCELLED",
  );
});

test("durable restart preserves doses, delivery keys and completed actions", (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "edht-reminder-"));
  const database = path.join(dir, "test.sqlite");
  const now = () => Date.parse("2026-09-19T08:00Z");
  let app = createApplication({ database, now });
  t.after(() => {
    app.store.close();
    fs.rmSync(dir, { recursive: true, force: true });
  });
  let s = app.store;
  const password = "Synthetic-restart-123!";
  s.register({ name: "Synthetic", email: "restart@example.test", password });
  let u = s.session(s.login("restart@example.test", password).token);
  const r = s.addRecord(u, "medication", {
    name: "Synthetic restart medicine",
  });
  s.configureReminder(u, r.id, {
    mode: "daily",
    times: ["08:00"],
    timezone: "UTC",
    start: "2026-09-19",
    confirmed: true,
  });
  const dose = s.reminderData(u).doses.find((d) => d.scheduled_at === now());
  s.doseAction(u, dose.id, "taken");
  const before = s.db.prepare("SELECT COUNT(*) n FROM notifications").get().n;
  s.close();
  app = createApplication({ database, now });
  s = app.store;
  u = s.session(s.login("restart@example.test", password).token);
  s.pumpNotifications();
  s.pumpNotifications();
  const after = s.reminderData(u).doses.filter((d) => d.id === dose.id);
  assert.equal(after.length, 1);
  assert.equal(after[0].status, "TAKEN");
  assert.equal(
    s.db.prepare("SELECT COUNT(*) n FROM notifications").get().n,
    before,
  );
  assert.equal(s.verifyAudit(), true);
});
