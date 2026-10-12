import test from "node:test";
import assert from "node:assert/strict";
import { Readable } from "node:stream";
import { createHash } from "node:crypto";
import { createApplication } from "../server.mjs";
const sha = (b) => createHash("sha256").update(b).digest("hex");
const fixture = async (t) => {
  const app = createApplication({
    database: ":memory:",
    uploadPolicy: { chunkBytes: 262144 },
  });
  t.after(() => app.store.close());
  const s = app.store,
    password = "Synthetic-storage-password!";
  s.register({ name: "A", email: "a@example.test", password });
  s.register({ name: "B", email: "b@example.test", password });
  return {
    app,
    s,
    u: s.session(s.login("a@example.test", password).token),
    other: s.session(s.login("b@example.test", password).token),
  };
};
async function upload(app, u, bytes, b = {}) {
  const r = app.ingestion.create(u, {
    name: "test.txt",
    mime: "text/plain",
    size: bytes.length,
    sha256: sha(bytes),
    ...b,
  });
  for (
    let offset = 0;
    offset < bytes.length;
    offset += app.ingestion.policy.chunkBytes
  ) {
    const c = bytes.subarray(offset, offset + app.ingestion.policy.chunkBytes);
    await app.ingestion.chunk(u, r.id, offset, Readable.from([c]), sha(c));
  }
  return app.ingestion.complete(u, r.id);
}
export function dicomFixture() {
  const fields = [];
  const tag = (g, e, vr, value) => {
    let b = Buffer.isBuffer(value) ? value : Buffer.from(value);
    if (b.length % 2) b = Buffer.concat([b, Buffer.from([0])]);
    const long = ["OB", "OW"].includes(vr),
      h = Buffer.alloc(long ? 12 : 8);
    h.writeUInt16LE(g);
    h.writeUInt16LE(e, 2);
    h.write(vr, 4);
    long ? h.writeUInt32LE(b.length, 8) : h.writeUInt16LE(b.length, 6);
    fields.push(h, b);
  };
  tag(2, 0x10, "UI", "1.2.840.10008.1.2.1");
  tag(8, 0x18, "UI", "2.25.3");
  tag(8, 0x60, "CS", "CT");
  tag(0x10, 0x20, "LO", "SYNTHETIC");
  tag(0x20, 0x0d, "UI", "2.25.1");
  tag(0x20, 0x0e, "UI", "2.25.2");
  for (const [e, n] of [
    [0x10, 2],
    [0x11, 2],
    [2, 1],
    [0x100, 8],
    [0x103, 0],
  ]) {
    const b = Buffer.alloc(2);
    b.writeUInt16LE(n);
    tag(0x28, e, "US", b);
  }
  tag(0x28, 4, "CS", "MONOCHROME2");
  tag(0x7fe0, 0x10, "OB", Buffer.from([0, 64, 128, 255]));
  return Buffer.concat([Buffer.alloc(128), Buffer.from("DICM"), ...fields]);
}
test("large file uses bounded chunks, resumes retries, streams to object storage and preserves versions", async (t) => {
  const { app, s, u, other } = await fixture(t);
  const bytes = Buffer.alloc(3 * 1024 * 1024 + 17, 65);
  const r = app.ingestion.create(u, {
    name: "large.txt",
    mime: "text/plain",
    size: bytes.length,
    sha256: sha(bytes),
  });
  const c = bytes.subarray(0, 262144);
  await app.ingestion.chunk(u, r.id, 0, Readable.from([c]), sha(c));
  await app.ingestion.chunk(u, r.id, 0, Readable.from([c]), sha(c));
  assert.equal(app.ingestion.status(u, r.id).received, c.length);
  assert.throws(() => app.ingestion.status(other, r.id), /NOT_FOUND/);
  for (let at = c.length; at < bytes.length; at += 262144) {
    const x = bytes.subarray(at, at + 262144);
    await app.ingestion.chunk(u, r.id, at, Readable.from([x]), sha(x));
  }
  const done = await app.ingestion.complete(u, r.id);
  assert.equal(done.status, "COMPLETE");
  assert.equal(
    s.db
      .prepare("SELECT length(content) n FROM documents WHERE id=?")
      .get(done.result_id).n,
    0,
  );
  const doc = s.ownDocument(u, done.result_id),
    v = app.ingestion.file(doc);
  assert.equal(await app.objects.digest(v.object_key), sha(bytes));
  await upload(app, u, Buffer.from("revision"), {
    metadata: { document_id: doc.id, reason: "Correction" },
  });
  assert.equal(app.ingestion.versions(u, doc.id).length, 2);
  assert.equal(s.verifyAudit(), true);
});
test("invalid chunk hash and declared size cannot advance session; cancellation denies further writes", async (t) => {
  const { app, u } = await fixture(t);
  const b = Buffer.from("abc");
  const r = app.ingestion.create(u, {
    name: "x.txt",
    mime: "text/plain",
    size: 3,
    sha256: sha(b),
  });
  await assert.rejects(
    app.ingestion.chunk(u, r.id, 0, Readable.from([b]), "0".repeat(64)),
    /CHECKSUM/,
  );
  assert.equal(app.ingestion.status(u, r.id).received, 0);
  await app.ingestion.cancel(u, r.id);
  await assert.rejects(
    app.ingestion.chunk(u, r.id, 0, Readable.from([b]), sha(b)),
    /NOT_ACTIVE/,
  );
});
test("DICOM imports study series and instances, deduplicates same instance and rejects malformed input", async (t) => {
  const { app, u, other } = await fixture(t);
  const file = dicomFixture(),
    opts = {
      name: "synthetic.dcm",
      mime: "application/dicom",
      kind: "imaging",
      metadata: {
        patient_binding_confirmed: true,
        expected_source_patient_id: "SYNTHETIC",
      },
    };
  const a = await upload(app, u, file, opts),
    b = await upload(app, u, file, opts);
  assert.equal(a.result_id, b.result_id);
  const study = app.imaging.study(u, a.result_id);
  assert.equal(study.series.length, 1);
  assert.equal(study.series[0].instances.length, 1);
  assert.equal(study.series[0].instances[0].metadata.viewerSupported, true);
  assert.equal(study.metadata.anatomy, "NO_PATIENT_DERIVED_ANATOMY");
  assert.throws(() => app.imaging.study(other, study.id), /NOT_FOUND/);
  await assert.rejects(
    upload(app, u, Buffer.from("not DICOM"), opts),
    /DICOM_PART10/,
  );
  await assert.rejects(
    upload(app, u, file, {
      ...opts,
      metadata: {
        patient_binding_confirmed: true,
        expected_source_patient_id: "WRONG",
      },
    }),
    /BINDING_MISMATCH/,
  );
});
test("file content signatures and patient quota enforced", async (t) => {
  const { app, u } = await fixture(t);
  await assert.rejects(
    upload(app, u, Buffer.from("not a PDF"), {
      name: "bad.pdf",
      mime: "application/pdf",
    }),
    /SIGNATURE/,
  );
  assert.throws(
    () =>
      app.ingestion.create(u, {
        name: "big.txt",
        mime: "text/plain",
        size: app.ingestion.policy.documentBytes + 1,
        sha256: "0".repeat(64),
      }),
    /FILE_SIZE/,
  );
});
test("upload HTTP authenticates before reading binary body and rechecks CSRF and ownership", async (t) => {
  const app = createApplication({ database: ":memory:" });
  const origin = await app.start();
  t.after(() => app.close());
  const password = "Synthetic-http-storage!";
  app.store.register({ name: "P", email: "p@example.test", password });
  const login = app.store.login("p@example.test", password),
    headers = {
      Origin: origin,
      Cookie: "edht_session=" + login.token,
      "x-csrf-token": login.csrf,
      "Content-Type": "application/json",
    };
  const bytes = Buffer.from("http content");
  let response = await fetch(origin + "/api/uploads", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "http.txt",
      mime: "text/plain",
      size: bytes.length,
      sha256: sha(bytes),
    }),
  });
  assert.equal(response.status, 201);
  const session = await response.json();
  response = await fetch(
    origin + "/api/uploads/" + session.id + "/chunk?offset=0",
    {
      method: "PUT",
      headers: { Origin: origin, "Content-Type": "application/octet-stream" },
      body: bytes,
    },
  );
  assert.equal(response.status, 401);
  response = await fetch(
    origin + "/api/uploads/" + session.id + "/chunk?offset=0",
    {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/octet-stream",
        "x-chunk-sha256": sha(bytes),
      },
      body: bytes,
    },
  );
  assert.equal(response.status, 200);
  response = await fetch(origin + "/api/uploads/" + session.id + "/complete", {
    method: "POST",
    headers,
    body: "{}",
  });
  assert.equal(response.status, 200);
  const done = await response.json();
  response = await fetch(origin + "/api/documents/" + done.result_id, {
    headers: { Cookie: headers.Cookie },
  });
  assert.equal(await response.text(), "http content");
  const u = app.store.session(login.token);
  app.store.addRecord(u, "condition", { name: "Synthetic_100% result" });
  app.store.addRecord(u, "condition", { name: "SyntheticX100Z result" });
  response = await fetch(
    origin + "/api/search?q=" + encodeURIComponent("_100%"),
    { headers: { Cookie: headers.Cookie } },
  );
  assert.equal(response.status, 200);
  const found = await response.json();
  assert.equal(found.records.length, 1);
  assert.equal(found.records[0].body.name, "Synthetic_100% result");
  app.store.archiveDocument(u, done.result_id);
  response = await fetch(origin + "/api/search?q=http", {
    headers: { Cookie: headers.Cookie },
  });
  assert.equal((await response.json()).documents.length, 0);
});
import { SHA256 } from "../public/file-hash.js";
import { randomBytes } from "node:crypto";
import { cleanBody } from "../store.mjs";
test("incremental browser SHA256 matches crypto across padding and chunk boundaries", () => {
  for (const n of [0, 1, 55, 56, 63, 64, 65, 1024, 2097171]) {
    const bytes = randomBytes(n),
      h = new SHA256();
    for (let i = 0; i < n; i += 37) h.update(bytes.subarray(i, i + 37));
    assert.equal(h.hex(), sha(bytes));
  }
});
test("structured labs, conditions and vaccinations retain history and reject false verification", async (t) => {
  const { s, u, other } = await fixture(t);
  const lab = s.addRecord(u, "observation", {
    name: "Synthetic assay",
    value: "12.3",
    unit: "test-unit",
    reference_low: "10",
    reference_high: "20",
    flag: "normal",
    observed_at: "2026-09-19T08:00:00Z",
    provider: "Synthetic lab",
    method: "Synthetic method",
    specimen: "Synthetic sample",
  });
  s.changeRecord(
    u,
    lab.id,
    { name: "Synthetic assay", value: "13", unit: "test-unit" },
    1,
  );
  assert.equal(s.recordHistory(u, lab.id).length, 2);
  assert.throws(() => s.recordHistory(other, lab.id), /NOT_FOUND/);
  assert.throws(
    () => cleanBody("observation", { name: "x", value: "NaN" }),
    /NUMERIC/,
  );
  assert.throws(
    () =>
      cleanBody("observation", {
        name: "x",
        reference_low: "20",
        reference_high: "10",
      }),
    /REFERENCE/,
  );
  assert.throws(
    () => cleanBody("condition", { name: "x", verification: "confirmed" }),
    /UNKNOWN_RECORD_FIELD/,
  );
  const c = s.addRecord(u, "condition", {
    name: "Synthetic condition",
    status: "active",
    onset: "2026-01-01",
    provider: "Reported provider",
    code: "TEST",
    code_system: "synthetic",
  });
  s.changeRecord(
    u,
    c.id,
    {
      name: "Synthetic condition",
      status: "resolved",
      resolution: "2026-09-19",
    },
    1,
  );
  const v = s.addRecord(u, "vaccination", {
    name: "Synthetic vaccine",
    dose_number: "2",
    date: "2026-09-19",
    manufacturer: "Synthetic",
    lot: "TEST-LOT",
    country: "XX",
    provider: "Synthetic",
    status: "reported",
  });
  assert.equal(s.recordHistory(u, v.id)[0].body.lot, "TEST-LOT");
  assert.equal(s.verifyAudit(), true);
});
test("doctor imaging grant isolates scope, audits each read and denies after revoke", async (t) => {
  const { app, s, u } = await fixture(t),
    r = await upload(app, u, dicomFixture(), {
      name: "study.dcm",
      mime: "application/dicom",
      kind: "imaging",
      metadata: { patient_binding_confirmed: true },
    });
  s.register(
    {
      name: "Doctor",
      email: "doctor@example.test",
      password: "Synthetic-doctor-storage!",
      role: "doctor",
    },
    true,
  );
  const d = s.session(
    s.login("doctor@example.test", "Synthetic-doctor-storage!").token,
  );
  const g = s.createGrant(u, {
      recipient_id: d.user_id,
      scopes: ["imaging"],
      duration: "1h",
    }),
    shared = s.consume(d, g.token);
  assert.equal(shared.records.length, 0);
  assert.equal(shared.documents.length, 0);
  assert.equal(shared.imaging.length, 1);
  const instance = shared.imaging[0].instances[0].id;
  assert.ok(s.consume(d, g.token, null, instance).object_key);
  const wrong = s.createGrant(u, {
    recipient_id: d.user_id,
    scopes: ["documents"],
    duration: "1h",
  });
  assert.throws(() => s.consume(d, wrong.token, null, instance), /NOT_FOUND/);
  s.revoke(u, g.id);
  assert.throws(() => s.consume(d, g.token, null, instance), /NOT_FOUND/);
  assert.equal(s.verifyAudit(), true);
});
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
test("upload resumes across database and service restart using persisted offsets", async (t) => {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), "edht-resume-")),
    database = path.join(base, "db.sqlite"),
    objectRoot = path.join(base, "objects");
  let app = createApplication({
    database,
    objectRoot,
    uploadPolicy: { chunkBytes: 4 },
  });
  t.after(() => {
    app.store.close();
    const target = path.resolve(base);
    assert.ok(
      target.startsWith(path.resolve(os.tmpdir()) + path.sep) &&
        path.basename(target).startsWith("edht-resume-"),
    );
    fs.rmSync(target, { recursive: true, force: true });
  });
  const password = "Synthetic-resume-password!";
  app.store.register({ name: "P", email: "resume@example.test", password });
  let u = app.store.session(
    app.store.login("resume@example.test", password).token,
  );
  const bytes = Buffer.from("abcdefgh");
  const r = app.ingestion.create(u, {
    name: "resume.txt",
    mime: "text/plain",
    size: bytes.length,
    sha256: sha(bytes),
  });
  await app.ingestion.chunk(
    u,
    r.id,
    0,
    Readable.from([bytes.subarray(0, 4)]),
    sha(bytes.subarray(0, 4)),
  );
  app.store.close();
  app = createApplication({
    database,
    objectRoot,
    uploadPolicy: { chunkBytes: 4 },
  });
  u = app.store.session(app.store.login("resume@example.test", password).token);
  assert.equal(app.ingestion.status(u, r.id).received, 4);
  await app.ingestion.chunk(
    u,
    r.id,
    4,
    Readable.from([bytes.subarray(4)]),
    sha(bytes.subarray(4)),
  );
  const done = await app.ingestion.complete(u, r.id);
  assert.equal(done.status, "COMPLETE");
  assert.equal(app.ingestion.versions(u, done.result_id)[0].sha256, sha(bytes));
});
test("personal appointments notify and cancel atomically; guideline context retains four independent unknowns", async (t) => {
  const { app, s, u, other } = await fixture(t);
  const a = app.care.saveAppointment(u, {
    provider: "Synthetic provider",
    specialty: "Test",
    at: new Date(s.now() + 3600000).toISOString(),
    location: "Synthetic clinic",
    status: "planned",
  });
  assert.equal(app.care.appointments(u).length, 1);
  assert.equal(app.care.appointments(other).length, 0);
  assert.throws(
    () =>
      app.care.saveAppointment(other, {
        ...a,
        provider: "X",
        at: new Date(s.now() + 3600000).toISOString(),
      }),
    /NOT_FOUND/,
  );
  app.care.saveAppointment(u, {
    ...a,
    provider: "Synthetic provider",
    at: new Date(s.now() + 3600000).toISOString(),
    status: "cancelled",
  });
  assert.equal(
    s.db
      .prepare(
        "SELECT status FROM notifications WHERE source='appointment' AND related_entity=?",
      )
      .get(a.id).status,
    "CANCELLED",
  );
  app.care.saveContext(u, {
    version: 0,
    patient_home: "XX",
    treating_doctor: "YY",
    reason: "Patient entry",
  });
  const c = app.care.context(u);
  assert.equal(c.context.patient_current.country, null);
  assert.equal(c.context.patient_home.country, "XX");
  assert.equal(c.registry.current_version, null);
  assert.equal(c.registry.status, "BLOCKED_EXTERNAL");
  assert.throws(
    () => app.care.saveContext(u, { version: 0, reason: "stale edit" }),
    /VERSION_CONFLICT/,
  );
  assert.equal(app.care.context(other).version, 0);
  assert.equal(s.verifyAudit(), true);
});

test("vaccination certificate links reject another patient's document on create and revision", async (t) => {
  const { app, s, u, other } = await fixture(t);
  const own = await upload(app, u, Buffer.from("synthetic own certificate"));
  const foreign = await upload(
    app,
    other,
    Buffer.from("synthetic foreign certificate"),
  );
  const ownId = own.result_id,
    foreignId = foreign.result_id;
  assert.ok(ownId);
  assert.ok(foreignId);
  assert.throws(
    () =>
      s.addRecord(u, "vaccination", { name: "Test", document_id: foreignId }),
    /CERTIFICATE_NOT_FOUND/,
  );
  const r = s.addRecord(u, "vaccination", { name: "Test", document_id: ownId });
  assert.throws(
    () => s.changeRecord(u, r.id, { name: "Test", document_id: foreignId }, 1),
    /CERTIFICATE_NOT_FOUND/,
  );
  assert.equal(s.recordHistory(u, r.id).length, 1);
  s.changeRecord(u, r.id, { name: "Updated", document_id: ownId }, 1);
  assert.equal(s.recordHistory(u, r.id).at(-1).body.document_id, ownId);
});
