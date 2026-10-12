CREATE TABLE laboratory_providers(
 id TEXT PRIMARY KEY,
 legal_name TEXT NOT NULL,
 display_name TEXT NOT NULL,
 country TEXT NOT NULL,
 jurisdiction TEXT NOT NULL,
 provider_type TEXT NOT NULL,
 address TEXT NOT NULL DEFAULT '',
 phone TEXT NOT NULL DEFAULT '',
 website TEXT NOT NULL DEFAULT '',
 timezone TEXT NOT NULL,
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','UNKNOWN','STALE')),
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 created_at INTEGER NOT NULL
);
CREATE TABLE laboratory_tests(
 test_id TEXT PRIMARY KEY,
 local_code TEXT NOT NULL,
 standard_code TEXT,
 coding_system TEXT,
 test_name TEXT NOT NULL,
 short_name TEXT NOT NULL DEFAULT '',
 category TEXT NOT NULL,
 specimen_type TEXT NOT NULL,
 method TEXT NOT NULL DEFAULT '',
 default_unit TEXT NOT NULL DEFAULT '',
 provider_id TEXT REFERENCES laboratory_providers(id),
 jurisdiction TEXT NOT NULL,
 status TEXT NOT NULL CHECK(status IN('ACTIVE','INACTIVE','UNKNOWN')),
 terminology_state TEXT NOT NULL CHECK(terminology_state IN('VERIFIED','SYNTHETIC','INTERFACE_ONLY','UNKNOWN')),
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 UNIQUE(provider_id,local_code)
);
CREATE TABLE laboratory_panels(
 panel_id TEXT PRIMARY KEY,
 local_code TEXT NOT NULL,
 panel_name TEXT NOT NULL,
 category TEXT NOT NULL,
 provider_id TEXT REFERENCES laboratory_providers(id),
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance))
);
CREATE TABLE laboratory_panel_tests(
 panel_id TEXT NOT NULL REFERENCES laboratory_panels(panel_id),
 test_id TEXT NOT NULL REFERENCES laboratory_tests(test_id),
 sort_order INTEGER NOT NULL DEFAULT 0,
 PRIMARY KEY(panel_id,test_id)
);
CREATE TABLE laboratory_orders(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 requester TEXT NOT NULL,
 request_date TEXT NOT NULL,
 priority TEXT NOT NULL CHECK(priority IN('ROUTINE','URGENT','STAT','UNKNOWN')),
 clinical_context TEXT NOT NULL DEFAULT '',
 provider_id TEXT REFERENCES laboratory_providers(id),
 jurisdiction TEXT NOT NULL,
 status TEXT NOT NULL CHECK(status IN('DRAFT','REQUESTED','ACCEPTED','AWAITING_COLLECTION','COLLECTED','RECEIVED','IN_PROCESS','PARTIAL_RESULT','PRELIMINARY','FINAL','CORRECTED','AMENDED','CANCELLED','REJECTED','EXPIRED')),
 preparation TEXT NOT NULL DEFAULT '',
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL
);
CREATE INDEX laboratory_orders_patient_status ON laboratory_orders(patient_id,status,updated_at DESC);
CREATE TABLE laboratory_order_tests(
 order_id TEXT NOT NULL REFERENCES laboratory_orders(id),
 test_id TEXT NOT NULL REFERENCES laboratory_tests(test_id),
 panel_id TEXT REFERENCES laboratory_panels(panel_id),
 PRIMARY KEY(order_id,test_id)
);
CREATE TABLE laboratory_order_events(
 order_id TEXT NOT NULL REFERENCES laboratory_orders(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL,
 actor_id TEXT NOT NULL,
 reason TEXT NOT NULL DEFAULT '',
 created_at INTEGER NOT NULL,
 PRIMARY KEY(order_id,version)
);
CREATE TRIGGER laboratory_order_events_no_update BEFORE UPDATE ON laboratory_order_events BEGIN SELECT RAISE(ABORT,'immutable laboratory order history'); END;
CREATE TRIGGER laboratory_order_events_no_delete BEFORE DELETE ON laboratory_order_events BEGIN SELECT RAISE(ABORT,'immutable laboratory order history'); END;
CREATE TABLE laboratory_specimens(
 id TEXT PRIMARY KEY,
 order_id TEXT NOT NULL REFERENCES laboratory_orders(id),
 patient_id TEXT NOT NULL REFERENCES patients(id),
 specimen_type TEXT NOT NULL,
 container TEXT NOT NULL DEFAULT '',
 collection_method TEXT NOT NULL DEFAULT '',
 collected_at INTEGER,
 collector TEXT NOT NULL DEFAULT '',
 collection_location TEXT NOT NULL DEFAULT '',
 status TEXT NOT NULL CHECK(status IN('EXPECTED','COLLECTED','RECEIVED','ACCESSIONED','PROCESSING','COMPLETED','REJECTED','CANCELLED')),
 quality_state TEXT NOT NULL DEFAULT 'UNKNOWN',
 rejection_reason TEXT NOT NULL DEFAULT '',
 storage_state TEXT NOT NULL DEFAULT 'UNKNOWN',
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL
);
CREATE INDEX laboratory_specimens_patient_order ON laboratory_specimens(patient_id,order_id,status);
CREATE TABLE laboratory_specimen_events(
 specimen_id TEXT NOT NULL REFERENCES laboratory_specimens(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL,
 actor_id TEXT NOT NULL,
 reason TEXT NOT NULL DEFAULT '',
 created_at INTEGER NOT NULL,
 PRIMARY KEY(specimen_id,version)
);
CREATE TRIGGER laboratory_specimen_events_no_update BEFORE UPDATE ON laboratory_specimen_events BEGIN SELECT RAISE(ABORT,'immutable specimen history'); END;
CREATE TRIGGER laboratory_specimen_events_no_delete BEFORE DELETE ON laboratory_specimen_events BEGIN SELECT RAISE(ABORT,'immutable specimen history'); END;
CREATE TABLE laboratory_accessions(
 id TEXT PRIMARY KEY,
 accession_number TEXT NOT NULL UNIQUE,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 order_id TEXT NOT NULL REFERENCES laboratory_orders(id),
 specimen_id TEXT NOT NULL REFERENCES laboratory_specimens(id),
 provider_id TEXT REFERENCES laboratory_providers(id),
 received_at INTEGER NOT NULL,
 processing_started_at INTEGER,
 processing_completed_at INTEGER,
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance))
);
CREATE TABLE laboratory_reference_ranges(
 id TEXT PRIMARY KEY,
 test_id TEXT NOT NULL REFERENCES laboratory_tests(test_id),
 provider_id TEXT REFERENCES laboratory_providers(id),
 lower_bound REAL,
 upper_bound REAL,
 reference_text TEXT NOT NULL DEFAULT '',
 unit TEXT NOT NULL DEFAULT '',
 sex_context TEXT NOT NULL DEFAULT 'ANY',
 age_min_days INTEGER,
 age_max_days INTEGER,
 pregnancy_context TEXT NOT NULL DEFAULT 'UNKNOWN',
 method TEXT NOT NULL DEFAULT '',
 population TEXT NOT NULL DEFAULT '',
 effective_from TEXT NOT NULL DEFAULT '',
 effective_to TEXT NOT NULL DEFAULT '',
 source TEXT NOT NULL,
 source_version TEXT NOT NULL DEFAULT '',
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','UNKNOWN')),
 provenance TEXT NOT NULL CHECK(json_valid(provenance))
);
CREATE TABLE laboratory_results(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 order_id TEXT REFERENCES laboratory_orders(id),
 specimen_id TEXT REFERENCES laboratory_specimens(id),
 test_id TEXT NOT NULL REFERENCES laboratory_tests(test_id),
 panel_id TEXT REFERENCES laboratory_panels(panel_id),
 source_system TEXT NOT NULL,
 external_result_id TEXT,
 created_at INTEGER NOT NULL,
 UNIQUE(patient_id,source_system,external_result_id)
);
CREATE INDEX laboratory_results_patient_test ON laboratory_results(patient_id,test_id,created_at DESC);
CREATE TABLE laboratory_result_versions(
 result_id TEXT NOT NULL REFERENCES laboratory_results(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL CHECK(status IN('REGISTERED','PRELIMINARY','FINAL','CORRECTED','AMENDED','CANCELLED','ENTERED_IN_ERROR')),
 value_type TEXT NOT NULL CHECK(value_type IN('NUMERIC','TEXT','BOOLEAN','CODED','RATIO','RANGE','POSITIVE_NEGATIVE','NOT_DETECTED_DETECTED','UNKNOWN')),
 value_json TEXT NOT NULL CHECK(json_valid(value_json)),
 unit TEXT NOT NULL DEFAULT '',
 reference_range_id TEXT REFERENCES laboratory_reference_ranges(id),
 reference_range_snapshot TEXT NOT NULL CHECK(json_valid(reference_range_snapshot)),
 source_flag TEXT NOT NULL CHECK(source_flag IN('NORMAL','LOW','HIGH','CRITICAL_LOW','CRITICAL_HIGH','ABNORMAL','POSITIVE','NEGATIVE','INDETERMINATE','UNKNOWN')),
 flag_origin TEXT NOT NULL CHECK(flag_origin IN('SOURCE_PROVIDED','CALCULATED_DISPLAY','NONE')),
 epistemic_state TEXT NOT NULL CHECK(epistemic_state IN('OBSERVED','MEASURED','CLINICIAN_ASSESSED','PATIENT_REPORTED','INFERRED','PREDICTED','SIMULATED')),
 method TEXT NOT NULL DEFAULT '',
 laboratory_id TEXT REFERENCES laboratory_providers(id),
 performer TEXT NOT NULL DEFAULT '',
 observed_at INTEGER,
 issued_at INTEGER,
 correction_reason TEXT NOT NULL DEFAULT '',
 previous_version INTEGER,
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 verification_state TEXT NOT NULL,
 payload_hash TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 PRIMARY KEY(result_id,version)
);
CREATE TRIGGER laboratory_result_versions_no_update BEFORE UPDATE ON laboratory_result_versions BEGIN SELECT RAISE(ABORT,'immutable laboratory result version'); END;
CREATE TRIGGER laboratory_result_versions_no_delete BEFORE DELETE ON laboratory_result_versions BEGIN SELECT RAISE(ABORT,'immutable laboratory result version'); END;
CREATE TABLE diagnostic_reports(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 order_id TEXT REFERENCES laboratory_orders(id),
 provider_id TEXT REFERENCES laboratory_providers(id),
 created_at INTEGER NOT NULL
);
CREATE TABLE diagnostic_report_versions(
 report_id TEXT NOT NULL REFERENCES diagnostic_reports(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL CHECK(status IN('PRELIMINARY','FINAL','CORRECTED','AMENDED','CANCELLED')),
 title TEXT NOT NULL,
 result_refs TEXT NOT NULL CHECK(json_valid(result_refs)),
 specimen_refs TEXT NOT NULL CHECK(json_valid(specimen_refs)),
 attachment_refs TEXT NOT NULL CHECK(json_valid(attachment_refs)),
 performer TEXT NOT NULL DEFAULT '',
 report_text TEXT NOT NULL DEFAULT '',
 issued_at INTEGER NOT NULL,
 source TEXT NOT NULL,
 provenance TEXT NOT NULL CHECK(json_valid(provenance)),
 created_at INTEGER NOT NULL,
 PRIMARY KEY(report_id,version)
);
CREATE TRIGGER diagnostic_report_versions_no_update BEFORE UPDATE ON diagnostic_report_versions BEGIN SELECT RAISE(ABORT,'immutable diagnostic report version'); END;
CREATE TRIGGER diagnostic_report_versions_no_delete BEFORE DELETE ON diagnostic_report_versions BEGIN SELECT RAISE(ABORT,'immutable diagnostic report version'); END;
CREATE TABLE laboratory_result_attachments(
 result_id TEXT NOT NULL REFERENCES laboratory_results(id),
 result_version INTEGER NOT NULL,
 document_id TEXT NOT NULL REFERENCES documents(id),
 relation TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 PRIMARY KEY(result_id,result_version,document_id)
);
CREATE TABLE laboratory_critical_notifications(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 result_id TEXT NOT NULL REFERENCES laboratory_results(id),
 result_version INTEGER NOT NULL,
 audience TEXT NOT NULL,
 status TEXT NOT NULL CHECK(status IN('NOTIFICATION_NOT_CONNECTED','NOTIFICATION_PENDING','SYNTHETIC_NOTIFICATION','ACKNOWLEDGED')),
 created_at INTEGER NOT NULL,
 acknowledged_at INTEGER,
 source TEXT NOT NULL
);
