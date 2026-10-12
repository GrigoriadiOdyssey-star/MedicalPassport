CREATE UNIQUE INDEX IF NOT EXISTS fhir_source_unique ON records(patient_id,source) WHERE source LIKE 'synthetic_fhir:%';
CREATE TRIGGER IF NOT EXISTS records_no_update BEFORE UPDATE ON records BEGIN SELECT RAISE(ABORT,'immutable source record'); END;
CREATE TRIGGER IF NOT EXISTS records_no_delete BEFORE DELETE ON records BEGIN SELECT RAISE(ABORT,'immutable source record'); END;
