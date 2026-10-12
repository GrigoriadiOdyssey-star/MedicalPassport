CREATE TABLE laboratory_specialty_records(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 domain TEXT NOT NULL CHECK(domain IN('PATHOLOGY','MICROBIOLOGY','MOLECULAR_GENETICS','POCT')),
 specimen_id TEXT REFERENCES laboratory_specimens(id),
 source_system TEXT NOT NULL,
 external_record_id TEXT,
 created_at INTEGER NOT NULL,
 UNIQUE(patient_id,domain,source_system,external_record_id)
);
CREATE INDEX laboratory_specialty_patient_domain ON laboratory_specialty_records(patient_id,domain,created_at DESC);

CREATE TABLE laboratory_specialty_versions(
 record_id TEXT NOT NULL REFERENCES laboratory_specialty_records(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL CHECK(status IN('REGISTERED','PRELIMINARY','FINAL','CORRECTED','AMENDED','CANCELLED','ENTERED_IN_ERROR')),
 payload TEXT NOT NULL CHECK(json_valid(payload)),
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 verification_state TEXT NOT NULL CHECK(verification_state IN('SYNTHETIC','UNVERIFIED','VERIFIED','STALE')),
 issued_at INTEGER NOT NULL,
 previous_version INTEGER,
 payload_hash TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 PRIMARY KEY(record_id,version)
);
CREATE TRIGGER laboratory_specialty_versions_no_update BEFORE UPDATE ON laboratory_specialty_versions BEGIN SELECT RAISE(ABORT,'immutable laboratory specialty version'); END;
CREATE TRIGGER laboratory_specialty_versions_no_delete BEFORE DELETE ON laboratory_specialty_versions BEGIN SELECT RAISE(ABORT,'immutable laboratory specialty version'); END;

CREATE TABLE laboratory_specialty_attachments(
 record_id TEXT NOT NULL REFERENCES laboratory_specialty_records(id),
 version INTEGER NOT NULL,
 document_id TEXT NOT NULL REFERENCES documents(id),
 relation TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 PRIMARY KEY(record_id,version,document_id)
);
