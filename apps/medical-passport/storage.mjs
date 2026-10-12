import fs from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { once } from "node:events";
import { fail } from "./store.mjs";
export function storagePolicy(overrides = {}) {
  const integer = (name, value) => {
    const n = Number(value);
    if (!Number.isSafeInteger(n) || n < 1)
      throw Error("INVALID_STORAGE_POLICY_" + name);
    return n;
  };
  const policy = {
    documentBytes: integer(
      "documentBytes",
      process.env.EDHT_DOCUMENT_MAX_BYTES ?? 268435456,
    ),
    imagingBytes: integer(
      "imagingBytes",
      process.env.EDHT_IMAGING_MAX_BYTES ?? 2147483648,
    ),
    patientBytes: integer(
      "patientBytes",
      process.env.EDHT_PATIENT_STORAGE_BYTES ?? 21474836480,
    ),
    chunkBytes: integer("chunkBytes", process.env.EDHT_CHUNK_BYTES ?? 2097152),
    previewBytes: 33554432,
    sessionHours: 24,
    activeSessions: 64,
    ...overrides,
  };
  for (const k of Object.keys(policy)) integer(k, policy[k]);
  if (policy.chunkBytes > 16777216)
    throw Error("CHUNK_BUFFER_POLICY_MAX_16_MIB");
  return policy;
}
export class LocalObjects {
  constructor(root) {
    this.root = path.resolve(root);
    for (const d of ["objects", "uploads"])
      fs.mkdirSync(path.join(this.root, d), { recursive: true });
  }
  location(key) {
    if (
      !/^(objects\/[a-f0-9]{64}|uploads\/[a-f0-9-]+\/(\d+|assembled)(\.tmp)?)$/.test(
        key,
      )
    )
      throw Error("INVALID_OBJECT_KEY");
    const p = path.resolve(this.root, key);
    if (!p.startsWith(this.root + path.sep)) throw Error("INVALID_OBJECT_PATH");
    return p;
  }
  read(key) {
    return fs.createReadStream(this.location(key));
  }
  stat(key) {
    return fs.statSync(this.location(key));
  }
  async digest(key) {
    const h = createHash("sha256");
    for await (const chunk of this.read(key)) h.update(chunk);
    return h.digest("hex");
  }
  putChunk(id, offset, bytes) {
    const key = `uploads/${id}/${offset}`,
      p = this.location(key);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p + ".tmp", bytes, { mode: 0o600 });
    fs.renameSync(p + ".tmp", p);
    return key;
  }
  async assemble(id, chunks) {
    const key = `uploads/${id}/assembled`,
      file = this.location(key);
    const out = fs.createWriteStream(file, { mode: 0o600 });
    let error;
    out.on("error", (e) => {
      error = e;
    });
    try {
      for (const c of chunks) {
        for await (const buf of this.read(`uploads/${id}/${c.offset}`)) {
          if (error) throw error;
          if (!out.write(buf)) await once(out, "drain");
        }
      }
      out.end();
      await once(out, "finish");
      return key;
    } catch (e) {
      out.destroy();
      throw e;
    }
  }
  publish(key, digest) {
    const target = `objects/${digest}`;
    if (fs.existsSync(this.location(target))) fs.unlinkSync(this.location(key));
    else fs.renameSync(this.location(key), this.location(target));
    return target;
  }
  cleanParts(id) {
    const folder = path.resolve(this.root, "uploads", id);
    if (
      !/^[a-f0-9-]+$/.test(id) ||
      !folder.startsWith(path.resolve(this.root, "uploads") + path.sep)
    )
      throw Error("INVALID_CLEANUP_PATH");
    fs.rmSync(folder, { recursive: true, force: true });
  }
}
export const ingestionMime = [
  "application/pdf",
  "text/plain",
  "image/png",
  "image/jpeg",
  "application/json",
  "text/csv",
];
export async function validateContent(objects, key, mime, size) {
  const fd = fs.openSync(objects.location(key), "r");
  const head = Buffer.alloc(Math.min(size, 4096));
  try {
    fs.readSync(fd, head, 0, head.length, 0);
  } finally {
    fs.closeSync(fd);
  }
  if (mime === "application/pdf" && head.subarray(0, 5).toString() !== "%PDF-")
    fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (
    mime === "image/png" &&
    !head.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  )
    fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (
    mime === "image/jpeg" &&
    !(head[0] === 255 && head[1] === 216 && head[2] === 255)
  )
    fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (["text/plain", "text/csv", "application/json"].includes(mime)) {
    const decoder = new TextDecoder("utf-8", { fatal: true });
    try {
      for await (const c of objects.read(key)) {
        if (c.includes(0)) fail(415, "INVALID_TEXT_FILE");
        decoder.decode(c, { stream: true });
      }
      decoder.decode();
    } catch {
      fail(415, "INVALID_TEXT_FILE");
    }
  }
}
const safe = (value, max = 200) => {
  if (typeof value !== "string" || value.length > max)
    fail(400, "INVALID_METADATA");
  return value.trim();
};
export class Ingestion {
  constructor(
    store,
    objects,
    policy,
    imaging,
    scanner = { scan: async () => ({ state: "NOT_SCANNED_SYNTHETIC" }) },
  ) {
    this.s = store;
    this.objects = objects;
    this.policy = policy;
    this.imaging = imaging;
    this.scanner = scanner;
    this.locks = new Set();
    store.legacyUploadLimit = policy.chunkBytes;
    for (const row of store.db
      .prepare("SELECT id FROM documents WHERE length(content)>0")
      .all())
      this.migrateLegacy(row.id);
    const legacyUpload = store.upload.bind(store);
    store.upload = (user, body) => {
      const result = legacyUpload(user, body);
      this.migrateLegacy(result.id);
      return result;
    };
    store.db
      .prepare(
        "UPDATE upload_sessions SET status='UPLOADING' WHERE status='PROCESSING'",
      )
      .run();
  }
  migrateLegacy(id) {
    const s = this.s,
      d = s.db.prepare("SELECT * FROM documents WHERE id=?").get(id);
    if (!d || !d.content.length) return;
    const key = "objects/" + d.sha256;
    if (createHash("sha256").update(d.content).digest("hex") !== d.sha256)
      throw Error("LEGACY_FILE_INTEGRITY");
    if (!fs.existsSync(this.objects.location(key)))
      fs.writeFileSync(this.objects.location(key), d.content, { mode: 0o600 });
    const owner = s.db
      .prepare("SELECT user_id FROM patients WHERE id=?")
      .get(d.patient_id).user_id;
    s.transaction(() => {
      s.db
        .prepare(
          "INSERT OR IGNORE INTO document_versions VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
        )
        .run(
          id,
          1,
          key,
          d.content.length,
          d.sha256,
          d.mime,
          d.name,
          JSON.stringify({
            source: d.source,
            category: d.document_type,
            verification: "UNVERIFIED_PATIENT_UPLOAD",
            legacy: true,
          }),
          owner,
          d.created_at,
          "Legacy original migrated without content change",
          "NOT_SCANNED_SYNTHETIC",
        );
      s.db
        .prepare("UPDATE documents SET content=? WHERE id=?")
        .run(Buffer.alloc(0), id);
      s.audit(owner, "DOCUMENT_STORAGE_MIGRATED", id, d.patient_id);
    });
  }
  own(user, id) {
    const p = this.s.patient(user);
    const r = this.s.db
      .prepare("SELECT * FROM upload_sessions WHERE id=? AND patient_id=?")
      .get(id, p.id);
    if (!r) fail(404, "NOT_FOUND");
    return r;
  }
  status(user, id) {
    const r = this.own(user, id);
    return {
      id: r.id,
      name: r.name,
      size: r.size,
      mime: r.mime,
      received: r.received,
      status: r.status,
      expires_at: r.expires_at,
      result_id: r.result_id,
      sha256: r.expected_hash,
      chunk_bytes: this.policy.chunkBytes,
    };
  }
  expire() {
    for (const r of this.s.db
      .prepare(
        "SELECT id FROM upload_sessions WHERE expires_at<=? AND status IN ('UPLOADING','PROCESSING')",
      )
      .all(this.s.now())) {
      if (this.locks.has(r.id)) continue;
      this.s.db
        .prepare("UPDATE upload_sessions SET status='EXPIRED' WHERE id=?")
        .run(r.id);
      this.objects.cleanParts(r.id);
    }
  }
  create(user, b) {
    this.expire();
    const s = this.s,
      p = s.patient(user),
      kind = b.kind ?? "document",
      limit =
        kind === "imaging"
          ? this.policy.imagingBytes
          : this.policy.documentBytes;
    if (
      !["document", "imaging"].includes(kind) ||
      !Number.isSafeInteger(b.size) ||
      b.size <= 0 ||
      b.size > limit
    )
      fail(413, "FILE_SIZE_POLICY");
    if (!/^[a-f0-9]{64}$/.test(b.sha256 ?? "")) fail(400, "SHA256_REQUIRED");
    if (
      !(
        kind === "imaging"
          ? ["application/dicom", "image/png", "image/jpeg"]
          : ingestionMime
      ).includes(b.mime)
    )
      fail(415, "UNSUPPORTED_FILE_TYPE");
    const metadata = b.metadata ?? {};
    if (
      !metadata ||
      typeof metadata !== "object" ||
      Array.isArray(metadata) ||
      JSON.stringify(metadata).length > 12000
    )
      fail(400, "INVALID_METADATA");
    if (kind === "imaging" && metadata.patient_binding_confirmed !== true)
      fail(400, "PATIENT_BINDING_CONFIRMATION_REQUIRED");
    if (
      metadata.document_id &&
      !s.db
        .prepare("SELECT 1 FROM documents WHERE id=? AND patient_id=?")
        .get(metadata.document_id, p.id)
    )
      fail(404, "NOT_FOUND");
    const name = safe(b.name, 180).replace(/[\r\n"\\/]/g, "_");
    if (!name) fail(400, "NAME_REQUIRED");
    return s.transaction(() => {
      const reserved = s.db
        .prepare(
          "SELECT COALESCE(SUM(size),0) n,COUNT(*) c FROM upload_sessions WHERE patient_id=? AND status IN ('UPLOADING','PROCESSING') AND expires_at>?",
        )
        .get(p.id, s.now());
      const used =
        s.db
          .prepare(
            "SELECT COALESCE(SUM(v.size),0) n FROM document_versions v JOIN documents d ON d.id=v.document_id WHERE d.patient_id=?",
          )
          .get(p.id).n +
        s.db
          .prepare(
            "SELECT COALESCE(SUM(i.size),0) n FROM imaging_instances i JOIN imaging_series r ON r.id=i.series_id JOIN imaging_studies t ON t.id=r.study_id WHERE t.patient_id=?",
          )
          .get(p.id).n;
      if (
        reserved.c >= this.policy.activeSessions ||
        used + reserved.n + b.size > this.policy.patientBytes
      )
        fail(413, "STORAGE_QUOTA");
      const id = randomUUID();
      s.db
        .prepare(
          "INSERT INTO upload_sessions(id,patient_id,actor_id,name,mime,size,expected_hash,kind,metadata,created_at,expires_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
        )
        .run(
          id,
          p.id,
          user.user_id,
          name,
          b.mime,
          b.size,
          b.sha256,
          kind,
          JSON.stringify(metadata),
          s.now(),
          s.now() + this.policy.sessionHours * 3600000,
        );
      s.audit(user.user_id, "UPLOAD_SESSION_CREATED", id, p.id);
      return this.status(user, id);
    });
  }
  async locked(id, fn) {
    if (this.locks.has(id)) fail(409, "UPLOAD_BUSY");
    this.locks.add(id);
    try {
      return await fn();
    } finally {
      this.locks.delete(id);
    }
  }
  async chunk(user, id, offset, req, expected) {
    return this.locked(id, async () => {
      const r = this.own(user, id);
      if (r.status !== "UPLOADING" || r.expires_at <= this.s.now())
        fail(409, "UPLOAD_NOT_ACTIVE");
      if (
        !Number.isSafeInteger(offset) ||
        offset < 0 ||
        offset > r.received ||
        !/^[a-f0-9]{64}$/.test(expected ?? "")
      )
        fail(400, "INVALID_CHUNK");
      let length = 0;
      const chunks = [];
      for await (const c of req) {
        length += c.length;
        if (length > this.policy.chunkBytes || offset + length > r.size)
          fail(413, "CHUNK_SIZE_POLICY");
        chunks.push(c);
      }
      if (!length) fail(400, "EMPTY_CHUNK");
      const bytes = Buffer.concat(chunks),
        digest = createHash("sha256").update(bytes).digest("hex");
      if (digest !== expected) fail(422, "CHUNK_CHECKSUM_MISMATCH");
      const old = this.s.db
        .prepare("SELECT * FROM upload_chunks WHERE upload_id=? AND offset=?")
        .get(id, offset);
      if (old) {
        if (old.sha256 !== digest || old.size !== length)
          fail(409, "CHUNK_CONFLICT");
        return this.status(user, id);
      }
      if (offset !== r.received) fail(409, "OFFSET_CONFLICT");
      this.objects.putChunk(id, offset, bytes);
      this.s.transaction(() => {
        this.s.db
          .prepare("INSERT INTO upload_chunks VALUES(?,?,?,?)")
          .run(id, offset, length, digest);
        this.s.db
          .prepare("UPDATE upload_sessions SET received=received+? WHERE id=?")
          .run(length, id);
      });
      return this.status(user, id);
    });
  }
  async complete(user, id) {
    return this.locked(id, async () => {
      const r = this.own(user, id);
      if (r.status === "COMPLETE") return this.status(user, id);
      if (
        r.status !== "UPLOADING" ||
        r.received !== r.size ||
        r.expires_at <= this.s.now()
      )
        fail(409, "UPLOAD_INCOMPLETE");
      this.s.db
        .prepare("UPDATE upload_sessions SET status='PROCESSING' WHERE id=?")
        .run(id);
      try {
        const chunks = this.s.db
          .prepare(
            "SELECT * FROM upload_chunks WHERE upload_id=? ORDER BY offset",
          )
          .all(id);
        const key = await this.objects.assemble(id, chunks);
        if (
          this.objects.stat(key).size !== r.size ||
          (await this.objects.digest(key)) !== r.expected_hash
        )
          fail(422, "FILE_CHECKSUM_MISMATCH");
        let imaging;
        if (r.kind === "imaging")
          imaging = await this.imaging.inspect(this.objects, key, r);
        else await validateContent(this.objects, key, r.mime, r.size);
        const scan = await this.scanner.scan({
          objects: this.objects,
          key,
          mime: r.mime,
          sha256: r.expected_hash,
        });
        if (!["CLEAN", "NOT_SCANNED_SYNTHETIC"].includes(scan.state))
          fail(422, "FILE_QUARANTINED");
        const objectKey = this.objects.publish(key, r.expected_hash);
        const result = this.s.transaction(() => {
          const resultId =
            r.kind === "imaging"
              ? this.imaging.persist(user, r, objectKey, imaging)
              : this.saveDocument(user, r, objectKey, scan.state);
          this.s.db
            .prepare(
              "UPDATE upload_sessions SET status='COMPLETE',result_id=? WHERE id=?",
            )
            .run(resultId, id);
          this.s.audit(user.user_id, "UPLOAD_COMPLETED", id, r.patient_id);
          return this.status(user, id);
        });
        this.objects.cleanParts(id);
        return result;
      } catch (e) {
        this.s.db
          .prepare(
            "UPDATE upload_sessions SET status='UPLOADING' WHERE id=? AND status='PROCESSING'",
          )
          .run(id);
        throw e;
      }
    });
  }
  saveDocument(user, r, key, scan) {
    const s = this.s,
      m = JSON.parse(r.metadata);
    let id = m.document_id;
    if (id) {
      const d = s.db
        .prepare("SELECT * FROM documents WHERE id=? AND patient_id=?")
        .get(id, r.patient_id);
      if (!d) fail(404, "NOT_FOUND");
      if (!safe(m.reason ?? "", 500)) fail(400, "VERSION_REASON_REQUIRED");
      if (
        !s.db
          .prepare("SELECT 1 FROM document_versions WHERE document_id=?")
          .get(id)
      ) {
        const oldKey = "objects/" + d.sha256;
        if (!fs.existsSync(this.objects.location(oldKey)))
          fs.writeFileSync(this.objects.location(oldKey), d.content, {
            mode: 0o600,
          });
        s.db
          .prepare(
            "INSERT INTO document_versions VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
          )
          .run(
            id,
            1,
            oldKey,
            d.content.length,
            d.sha256,
            d.mime,
            d.name,
            JSON.stringify({ source: d.source }),
            user.user_id,
            d.created_at,
            "Legacy original retained",
            "NOT_SCANNED_SYNTHETIC",
          );
      }
    } else {
      id = randomUUID();
      s.db
        .prepare("INSERT INTO documents VALUES(?,?,?,?,?,?,?,?,?)")
        .run(
          id,
          r.patient_id,
          r.name,
          r.mime,
          safe(m.category ?? "Other"),
          safe(m.source ?? "patient_uploaded"),
          r.expected_hash,
          Buffer.alloc(0),
          s.now(),
        );
    }
    const version =
      (s.db
        .prepare(
          "SELECT MAX(version) n FROM document_versions WHERE document_id=?",
        )
        .get(id).n ?? 0) + 1;
    s.db
      .prepare("INSERT INTO document_versions VALUES(?,?,?,?,?,?,?,?,?,?,?,?)")
      .run(
        id,
        version,
        key,
        r.size,
        r.expected_hash,
        r.mime,
        r.name,
        JSON.stringify({ ...m, verification: "UNVERIFIED_PATIENT_UPLOAD" }),
        user.user_id,
        s.now(),
        safe(m.reason ?? "Original upload", 500),
        scan,
      );
    s.db
      .prepare(
        "UPDATE documents SET name=?,mime=?,document_type=?,source=?,sha256=?,content=? WHERE id=?",
      )
      .run(
        r.name,
        r.mime,
        safe(m.category ?? "Other"),
        safe(m.source ?? "patient_uploaded"),
        r.expected_hash,
        Buffer.alloc(0),
        id,
      );
    s.audit(user.user_id, "DOCUMENT_UPLOADED", id, r.patient_id);
    return id;
  }
  cancel(user, id) {
    return this.locked(id, async () => {
      const r = this.own(user, id);
      if (r.status === "COMPLETE") fail(409, "ALREADY_COMPLETE");
      this.s.transaction(() => {
        this.s.db
          .prepare("UPDATE upload_sessions SET status='CANCELLED' WHERE id=?")
          .run(id);
        this.s.audit(user.user_id, "UPLOAD_CANCELLED", id, r.patient_id);
      });
      this.objects.cleanParts(id);
      return this.status(user, id);
    });
  }
  versions(user, id) {
    const d = this.s.ownDocument(user, id);
    return this.s.db
      .prepare(
        "SELECT version,size,sha256,mime,name,metadata,uploaded_by,created_at,reason,scan_state FROM document_versions WHERE document_id=? ORDER BY version DESC",
      )
      .all(d.id)
      .map((x) => ({ ...x, metadata: JSON.parse(x.metadata) }));
  }
  file(document, version) {
    return this.s.db
      .prepare(
        "SELECT * FROM document_versions WHERE document_id=? AND (? IS NULL OR version=?) ORDER BY version DESC LIMIT 1",
      )
      .get(document.id, version ?? null, version ?? null);
  }
}
