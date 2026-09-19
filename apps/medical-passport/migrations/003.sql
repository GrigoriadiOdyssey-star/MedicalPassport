CREATE TABLE record_changes (
 id INTEGER PRIMARY KEY AUTOINCREMENT, record_id TEXT NOT NULL REFERENCES records(id),
 version INTEGER NOT NULL, body TEXT NOT NULL CHECK(json_valid(body)),
 archived INTEGER NOT NULL DEFAULT 0 CHECK(archived IN (0,1)),
 created_at INTEGER NOT NULL, UNIQUE(record_id,version)
);
CREATE TRIGGER changes_no_update BEFORE UPDATE ON record_changes BEGIN SELECT RAISE(ABORT,'immutable revision'); END;
CREATE TRIGGER changes_no_delete BEFORE DELETE ON record_changes BEGIN SELECT RAISE(ABORT,'immutable revision'); END;
CREATE TABLE document_details(document_id TEXT PRIMARY KEY REFERENCES documents(id), description TEXT NOT NULL DEFAULT '', document_date TEXT NOT NULL DEFAULT '', archived INTEGER NOT NULL DEFAULT 0 CHECK(archived IN (0,1)));
CREATE TABLE patient_details(patient_id TEXT PRIMARY KEY REFERENCES patients(id), birth_date TEXT NOT NULL DEFAULT '', country TEXT NOT NULL DEFAULT '');
CREATE VIEW current_records AS SELECT r.id,r.patient_id,r.kind,COALESCE(c.version,r.version) version,COALESCE(c.body,r.body) body,
 CASE WHEN c.id IS NULL THEN r.source ELSE 'patient_reported' END source,
 COALESCE(c.created_at,r.created_at) created_at,COALESCE(c.archived,0) archived
 FROM records r LEFT JOIN record_changes c ON c.id=(SELECT MAX(x.id) FROM record_changes x WHERE x.record_id=r.id);
