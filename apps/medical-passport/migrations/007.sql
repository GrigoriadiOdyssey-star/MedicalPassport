CREATE TABLE guideline_context(patient_id TEXT PRIMARY KEY REFERENCES patients(id),context TEXT NOT NULL CHECK(json_valid(context)),version INTEGER NOT NULL,updated_at INTEGER NOT NULL);
CREATE TABLE guideline_context_versions(patient_id TEXT NOT NULL REFERENCES patients(id),version INTEGER NOT NULL,context TEXT NOT NULL CHECK(json_valid(context)),actor_id TEXT NOT NULL,created_at INTEGER NOT NULL,PRIMARY KEY(patient_id,version));
CREATE TRIGGER guideline_context_no_update BEFORE UPDATE ON guideline_context_versions BEGIN SELECT RAISE(ABORT,'immutable context revision'); END;
CREATE TRIGGER guideline_context_no_delete BEFORE DELETE ON guideline_context_versions BEGIN SELECT RAISE(ABORT,'immutable context revision'); END;
CREATE TRIGGER imaging_revision_no_update BEFORE UPDATE ON imaging_revisions BEGIN SELECT RAISE(ABORT,'immutable imaging revision'); END;
CREATE TRIGGER imaging_revision_no_delete BEFORE DELETE ON imaging_revisions BEGIN SELECT RAISE(ABORT,'immutable imaging revision'); END;
CREATE TRIGGER appointment_version_no_update BEFORE UPDATE ON appointment_versions BEGIN SELECT RAISE(ABORT,'immutable appointment revision'); END;
CREATE TRIGGER appointment_version_no_delete BEFORE DELETE ON appointment_versions BEGIN SELECT RAISE(ABORT,'immutable appointment revision'); END;
