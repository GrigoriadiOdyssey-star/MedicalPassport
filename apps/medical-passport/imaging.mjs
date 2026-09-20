import fs from "node:fs";
import { randomUUID } from "node:crypto";
import { fail } from "./store.mjs";
import { validateContent } from "./storage.mjs";
const tags = {
  "00020010": "transferSyntax",
  "00080018": "sopUID",
  "0020000d": "studyUID",
  "0020000e": "seriesUID",
  "00080060": "modality",
  "00180015": "bodyPart",
  "00080020": "acquisitionDate",
  "00080080": "facility",
  "00081060": "radiologist",
  "00100020": "sourcePatientID",
  "00200013": "instanceNumber",
  "00280010": "rows",
  "00280011": "columns",
  "00280002": "samples",
  "00280004": "photometric",
  "00280008": "frames",
  "00280100": "bitsAllocated",
  "00280101": "bitsStored",
  "00280102": "highBit",
  "00280103": "pixelRepresentation",
  "00281050": "windowCenter",
  "00281051": "windowWidth",
  "00281052": "intercept",
  "00281053": "slope",
};
export function inspectDicom(file) {
  const fd = fs.openSync(file, "r");
  const size = fs.fstatSync(fd).size;
  const read = (position, n) => {
    const b = Buffer.alloc(n);
    if (fs.readSync(fd, b, 0, n, position) !== n) fail(415, "TRUNCATED_DICOM");
    return b;
  };
  try {
    if (size < 132 || read(128, 4).toString() !== "DICM")
      fail(415, "DICOM_PART10_REQUIRED");
    const metadata = {};
    let at = 132,
      count = 0;
    while (at + 8 <= size) {
      if (++count > 100000) fail(415, "DICOM_ELEMENT_LIMIT");
      const h = read(at, 8),
        group = h.readUInt16LE(0),
        tag =
          group.toString(16).padStart(4, "0") +
          h.readUInt16LE(2).toString(16).padStart(4, "0");
      if (group !== 2 && metadata.transferSyntax !== "1.2.840.10008.1.2.1")
        fail(415, "DICOM_TRANSFER_SYNTAX_UNSUPPORTED");
      const vr = h.subarray(4, 6).toString();
      if (!/^[A-Z]{2}$/.test(vr)) fail(415, "INVALID_DICOM_VR");
      const long = [
          "OB",
          "OD",
          "OF",
          "OL",
          "OV",
          "OW",
          "SQ",
          "UC",
          "UR",
          "UT",
          "UN",
        ].includes(vr),
        header = long ? 12 : 8,
        len = long ? read(at + 8, 4).readUInt32LE() : h.readUInt16LE(6);
      if (len === 0xffffffff) fail(415, "DICOM_UNDEFINED_LENGTH_UNSUPPORTED");
      if (at + header + len > size) fail(415, "TRUNCATED_DICOM");
      if (tag === "7fe00010") {
        metadata.pixelOffset = at + header;
        metadata.pixelLength = len;
        break;
      }
      if (tags[tag]) {
        if (len > 4096) fail(415, "DICOM_METADATA_LIMIT");
        const b = read(at + header, len);
        metadata[tags[tag]] =
          vr === "US"
            ? len >= 2
              ? b.readUInt16LE()
              : 0
            : b.toString("utf8").replace(/\0/g, "").trim();
      }
      at += header + len;
    }
    for (const key of ["studyUID", "seriesUID", "sopUID"])
      if (
        !/^[0-9]+(\.[0-9]+)+$/.test(metadata[key] ?? "") ||
        metadata[key].length > 64
      )
        fail(415, "DICOM_UID_REQUIRED");
    const frames = Number(metadata.frames ?? 1),
      rows = Number(metadata.rows),
      columns = Number(metadata.columns),
      bits = Number(metadata.bitsAllocated);
    metadata.bitsStored ??= metadata.bitsAllocated;
    metadata.highBit ??= Number(metadata.bitsStored) - 1;
    metadata.viewerSupported =
      frames === 1 &&
      Number(metadata.samples) === 1 &&
      ["MONOCHROME1", "MONOCHROME2"].includes(metadata.photometric) &&
      [8, 16].includes(bits) &&
      Number(metadata.bitsStored) > 0 &&
      Number(metadata.bitsStored) <= bits &&
      Number(metadata.highBit) >= Number(metadata.bitsStored) - 1 &&
      Number(metadata.highBit) < bits &&
      rows > 0 &&
      columns > 0 &&
      rows * columns * (bits / 8) <= 16777216 &&
      metadata.pixelLength >= rows * columns * (bits / 8);
    return metadata;
  } finally {
    fs.closeSync(fd);
  }
}
export class Imaging {
  constructor(store) {
    this.s = store;
  }
  async inspect(objects, key, r) {
    if (r.mime === "application/dicom")
      return inspectDicom(objects.location(key));
    await validateContent(objects, key, r.mime, r.size);
    const m = JSON.parse(r.metadata);
    return {
      studyUID:
        m.study_uid ||
        "2.25." + BigInt("0x" + randomUUID().replaceAll("-", "")).toString(),
      seriesUID:
        m.series_uid ||
        "2.25." + BigInt("0x" + randomUUID().replaceAll("-", "")).toString(),
      sopUID:
        "2.25." + BigInt("0x" + randomUUID().replaceAll("-", "")).toString(),
      modality: m.modality ?? "OT",
      bodyPart: m.body_part ?? "",
      viewerSupported: true,
      representation: "source_image",
    };
  }
  persist(user, r, key, parsed) {
    const s = this.s,
      m = JSON.parse(r.metadata);
    if (
      m.expected_source_patient_id &&
      parsed.sourcePatientID !== m.expected_source_patient_id
    )
      fail(409, "DICOM_PATIENT_BINDING_MISMATCH");
    let study = s.db
      .prepare(
        "SELECT * FROM imaging_studies WHERE patient_id=? AND study_uid=?",
      )
      .get(r.patient_id, parsed.studyUID);
    if (study?.archived) fail(409, "STUDY_ARCHIVED");
    if (!study) {
      study = { id: randomUUID() };
      const meta = {
        ...parsed,
        title: m.title ?? `${parsed.modality} study`,
        facility: m.facility ?? parsed.facility ?? "",
        radiologist: m.radiologist ?? parsed.radiologist ?? "",
        report: m.report ?? "",
        source: m.source ?? "patient_import",
        verification: "UNVERIFIED_PATIENT_IMPORT",
        patient_binding: "EXPLICIT_USER_CONFIRMATION",
        anatomy: "NO_PATIENT_DERIVED_ANATOMY",
        processing: "IMPORTED_NOT_CLINICALLY_VALIDATED",
      };
      s.db
        .prepare(
          "INSERT INTO imaging_studies(id,patient_id,study_uid,metadata,created_at) VALUES(?,?,?,?,?)",
        )
        .run(
          study.id,
          r.patient_id,
          parsed.studyUID,
          JSON.stringify(meta),
          s.now(),
        );
      s.db
        .prepare("INSERT INTO imaging_revisions VALUES(?,?,?,?,?,?)")
        .run(
          study.id,
          1,
          JSON.stringify(meta),
          user.user_id,
          "Import",
          s.now(),
        );
    }
    let series = s.db
      .prepare("SELECT * FROM imaging_series WHERE study_id=? AND series_uid=?")
      .get(study.id, parsed.seriesUID);
    if (!series) {
      series = { id: randomUUID() };
      s.db.prepare("INSERT INTO imaging_series VALUES(?,?,?,?)").run(
        series.id,
        study.id,
        parsed.seriesUID,
        JSON.stringify({
          modality: parsed.modality,
          bodyPart: parsed.bodyPart ?? "",
        }),
      );
    }
    const old = s.db
      .prepare(
        "SELECT * FROM imaging_instances WHERE series_id=? AND sop_uid=?",
      )
      .get(series.id, parsed.sopUID);
    if (old) {
      if (old.sha256 !== r.expected_hash) fail(409, "DICOM_INSTANCE_CONFLICT");
      return study.id;
    }
    s.db
      .prepare("INSERT INTO imaging_instances VALUES(?,?,?,?,?,?,?,?,?)")
      .run(
        randomUUID(),
        series.id,
        parsed.sopUID,
        key,
        r.size,
        r.expected_hash,
        r.mime,
        JSON.stringify(parsed),
        s.now(),
      );
    s.audit(user.user_id, "IMAGING_INSTANCE_IMPORTED", study.id, r.patient_id);
    return study.id;
  }
  studies(user) {
    const p = this.s.patient(user);
    this.s.transaction(() =>
      this.s.audit(user.user_id, "IMAGING_STUDIES_READ", "", p.id),
    );
    return this.s.db
      .prepare(
        "SELECT id,study_uid,metadata,version,archived,created_at FROM imaging_studies WHERE patient_id=? ORDER BY created_at DESC LIMIT 100",
      )
      .all(p.id)
      .map((x) => ({ ...x, metadata: JSON.parse(x.metadata) }));
  }
  study(user, id) {
    const p = this.s.patient(user),
      r = this.s.db
        .prepare("SELECT * FROM imaging_studies WHERE id=? AND patient_id=?")
        .get(id, p.id);
    if (!r) fail(404, "NOT_FOUND");
    this.s.transaction(() =>
      this.s.audit(user.user_id, "IMAGING_STUDY_READ", id, p.id),
    );
    return {
      ...r,
      metadata: JSON.parse(r.metadata),
      series: this.s.db
        .prepare("SELECT * FROM imaging_series WHERE study_id=?")
        .all(id)
        .map((a) => ({
          ...a,
          metadata: JSON.parse(a.metadata),
          instances: this.s.db
            .prepare(
              "SELECT id,sop_uid,size,sha256,mime,metadata FROM imaging_instances WHERE series_id=? ORDER BY created_at,id",
            )
            .all(a.id)
            .map((i) => ({ ...i, metadata: JSON.parse(i.metadata) })),
        })),
    };
  }
  revise(user, id, b) {
    const p = this.s.patient(user);
    return this.s.transaction(() => {
      const r = this.s.db
        .prepare("SELECT * FROM imaging_studies WHERE id=? AND patient_id=?")
        .get(id, p.id);
      if (!r) fail(404, "NOT_FOUND");
      if (b.version !== r.version) fail(409, "VERSION_CONFLICT");
      if (
        typeof b.report !== "string" ||
        b.report.length > 10000 ||
        typeof b.reason !== "string" ||
        !b.reason.trim()
      )
        fail(400, "REPORT_REASON_REQUIRED");
      const metadata = { ...JSON.parse(r.metadata), report: b.report };
      this.s.db
        .prepare(
          "UPDATE imaging_studies SET metadata=?,version=version+1,archived=? WHERE id=?",
        )
        .run(JSON.stringify(metadata), b.archived === true ? 1 : 0, id);
      this.s.db
        .prepare("INSERT INTO imaging_revisions VALUES(?,?,?,?,?,?)")
        .run(
          id,
          r.version + 1,
          JSON.stringify(metadata),
          user.user_id,
          b.reason.slice(0, 500),
          this.s.now(),
        );
      this.s.audit(user.user_id, "IMAGING_STUDY_UPDATED", id, p.id);
      return { id, version: r.version + 1 };
    });
  }
  instance(user, id) {
    const p = this.s.patient(user),
      r = this.s.db
        .prepare(
          "SELECT i.* FROM imaging_instances i JOIN imaging_series r ON r.id=i.series_id JOIN imaging_studies t ON t.id=r.study_id WHERE i.id=? AND t.patient_id=?",
        )
        .get(id, p.id);
    if (!r) fail(404, "NOT_FOUND");
    this.s.transaction(() =>
      this.s.audit(user.user_id, "IMAGING_INSTANCE_READ", id, p.id),
    );
    return { ...r, metadata: JSON.parse(r.metadata) };
  }
}
// DICOMweb-shaped application port. No PACS URL supplied by untrusted clients.
export class SandboxPACS {
  constructor(imaging, ingestion) {
    this.imaging = imaging;
    this.ingestion = ingestion;
    this.mode = "LOCAL_SANDBOX";
  }
  qido(user) {
    return this.imaging.studies(user);
  }
  wado(user, id) {
    return this.imaging.instance(user, id);
  }
  stowSession(user, file) {
    return this.ingestion.create(user, { ...file, kind: "imaging" });
  }
  capabilities() {
    return {
      mode: this.mode,
      operations: ["qido", "wado", "stowSession"],
      dicomweb_conformance: false,
      external_connected: false,
      transfer_syntaxes: ["1.2.840.10008.1.2.1"],
      diagnostic_use: false,
    };
  }
}
