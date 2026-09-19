import test from "node:test";
import assert from "node:assert/strict";
import { Store } from "../store.mjs";
import { attachUX } from "../ux-store.mjs";
import { createApplication } from "../server.mjs";
attachUX(Store);
const password = "Synthetic-test-password-123";
function setup(t) {
  let time = Date.parse("2026-09-18T12:00:00Z");
  const s = new Store(":memory:", () => time);
  t.after(() => s.close());
  const p = s.register({ name: "P", email: "p@example.test", password }),
    d = s.register(
      { name: "D", email: "d@example.test", password, role: "doctor" },
      true,
    ),
    other = s.register({
      name: "Other",
      email: "other@example.test",
      password,
    });
  const login = (email) => s.session(s.login(email, password).token),
    u = login(p.email),
    v = login(d.email),
    o = login(other.email);
  return {
    s,
    u,
    v,
    o,
    d,
    tick: () => (time += 3600000),
    grant: (scopes = ["allergy"], duration = "1h") =>
      s.createGrant(u, { recipient_id: d.id, scopes, duration }),
  };
}
test("revision edit is optimistic, immutable and visible only in current projection", (t) => {
  const { s, u, grant, v, o } = setup(t);
  const r = s.addRecord(u, "allergy", {
      name: "A",
      reaction: "First",
      severity: "mild",
    }),
    g = grant();
  s.changeRecord(
    u,
    r.id,
    { name: "A", reaction: "Second", severity: "critical" },
    1,
  );
  assert.equal(s.consume(v, g.token).records[0].body.reaction, "Second");
  assert.equal(
    JSON.parse(
      s.db.prepare("SELECT body FROM records WHERE id=?").get(r.id).body,
    ).reaction,
    "First",
  );
  assert.throws(
    () => s.changeRecord(u, r.id, { name: "Lost change" }, 1),
    /VERSION_CONFLICT/,
  );
  assert.throws(
    () => s.changeRecord(o, r.id, { name: "Other patient" }, 2),
    /NOT_FOUND/,
  );
  assert.throws(
    () => s.changeRecord(v, r.id, { name: "Doctor write" }, 2),
    /PATIENT_ONLY/,
  );
  assert.equal(s.recordHistory(u, r.id).length, 2);
  assert.throws(
    () => s.db.exec("DELETE FROM record_changes"),
    /immutable revision/,
  );
});
test("archiving preserves history and removes live grant content", (t) => {
  const { s, u, v, grant } = setup(t),
    r = s.addRecord(u, "allergy", { name: "A" }),
    g = grant();
  s.changeRecord(u, r.id, null, 1, true);
  assert.equal(s.consume(v, g.token).records.length, 0);
  assert.equal(s.recordHistory(u, r.id).length, 2);
  assert.equal(s.screen(u, "allergy").records.length, 0);
  assert.equal(s.screen(u, "allergy", 0, true).records.length, 1);
  assert.equal(s.verifyAudit(), true);
});
test("document metadata persists; archive denies shared download without deleting original bytes", (t) => {
  const { s, u, v, grant, o } = setup(t),
    doc = s.upload(u, {
      name: "fixture.txt",
      mime: "text/plain",
      base64: "dGVzdA==",
    }),
    g = grant(["documents"]);
  s.documentMetadata(u, doc.id, {
    description: "Synthetic description",
    document_date: "2026-01-01",
  });
  assert.equal(
    s.screen(u, "documents").documents[0].description,
    "Synthetic description",
  );
  assert.throws(() => s.archiveDocument(o, doc.id), /NOT_FOUND/);
  s.archiveDocument(u, doc.id);
  assert.equal(s.consume(v, g.token).documents.length, 0);
  assert.throws(() => s.consume(v, g.token, doc.id), /NOT_FOUND/);
  assert.equal(
    Buffer.from(s.ownDocument(u, doc.id).content).toString(),
    "test",
  );
  assert.equal(s.screen(u, "documents", 0, true).documents.length, 1);
});
test("recipient-bound status distinguishes expiry, revoke and use without disclosing foreign grant metadata", (t) => {
  const { s, u, v, o, grant, tick } = setup(t),
    g = grant(),
    once = grant(["allergy"], "once");
  assert.throws(() => s.accessInfo(o, g.token), /ACCESS_NOT_AUTHORIZED/);
  assert.equal(s.accessInfo(v, once.token).status, "ACTIVE");
  s.consume(v, once.token);
  assert.equal(s.accessInfo(v, once.token).status, "ACCESS_USED");
  s.revoke(u, once.id);
  assert.equal(s.accessInfo(v, once.token).status, "ACCESS_REVOKED");
  tick();
  assert.equal(
    s.accessInfo(s.session(s.login("d@example.test", password).token), g.token)
      .status,
    "ACCESS_EXPIRED",
  );
});
test("screen reads are bounded, typed and patient-owned; profile validates adult birth dates", (t) => {
  const { s, u, o } = setup(t);
  for (let i = 0; i < 35; i++)
    s.addRecord(u, "medication", {
      name: "M" + i,
      dose: "Synthetic dose",
      frequency: "Synthetic frequency",
      status: "active",
    });
  assert.equal(s.screen(u, "medication").records.length, 30);
  assert.equal(s.screen(u, "medication", 30).records.length, 5);
  assert.equal(s.screen(o, "medication").records.length, 0);
  assert.equal(s.screen(u, "home").recent.length, 4);
  s.updateProfile(u, {
    name: "Updated",
    birth_date: "1990-02-28",
    country: "Synthetic",
  });
  assert.equal(s.profile(u).birth_date, "1990-02-28");
  assert.throws(
    () => s.updateProfile(u, { name: "P", birth_date: "2026-02-30" }),
    /INVALID_DATE/,
  );
  assert.throws(
    () => s.updateProfile(u, { name: "P", birth_date: "2020-01-01" }),
    /ADULT_PROFILE_REQUIRED/,
  );
});
test("new UI HTTP routes retain authentication and CSRF while supporting edits", async (t) => {
  const app = createApplication({ database: ":memory:" }),
    origin = await app.start();
  t.after(() => app.close());
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
      name: "M",
      dose: "5 synthetic units",
      frequency: "daily",
      status: "active",
    },
  });
  assert.equal(r.status, 201);
  assert.equal(
    (
      await req(
        "/records/" + r.data.id + "/update",
        { version: 1, body: { name: "M2", status: "stopped" } },
        "bad",
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await req("/records/" + r.data.id + "/update", {
        version: 1,
        body: { name: "M2", status: "stopped" },
      })
    ).status,
    200,
  );
  assert.equal(
    (await req("/records/" + r.data.id + "/history")).data.length,
    2,
  );
  assert.equal(
    (await req("/views/medication?archived=1")).data.records[0].body.name,
    "M2",
  );
  assert.equal(
    (await req("/records/" + r.data.id + "/archive", { version: 2 })).status,
    200,
  );
  assert.equal((await req("/views/medication")).data.records.length, 0);
  assert.equal(
    (await fetch(origin + "/main.js")).headers.get("content-type"),
    "text/javascript; charset=utf-8",
  );
});

test("medication dates are calendar-valid and ordered on create and revision", (t) => {
  const { s, u } = setup(t);
  assert.throws(
    () => s.addRecord(u, "medication", { name: "M", start: "2026-02-30" }),
    /INVALID_DATE/,
  );
  assert.throws(
    () =>
      s.addRecord(u, "medication", {
        name: "M",
        start: "2026-02-02",
        end: "2026-01-01",
      }),
    /INVALID_DATE_RANGE/,
  );
  const r = s.addRecord(u, "medication", {
    name: "M",
    start: "2026-02-02",
    end: "2026-02-02",
  });
  assert.throws(
    () => s.changeRecord(u, r.id, { name: "M", end: "invalid" }, 1),
    /INVALID_DATE/,
  );
  s.changeRecord(u, r.id, { name: "M", status: "stopped" }, 1);
  assert.equal(
    s.screen(u, "home").counts.find((c) => c.kind === "medication"),
    undefined,
  );
  assert.equal(s.recordHistory(u, r.id).length, 2);
});
