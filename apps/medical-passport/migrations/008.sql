CREATE TABLE pharmacies(
 id TEXT PRIMARY KEY,
 legal_name TEXT NOT NULL,
 display_name TEXT NOT NULL,
 country TEXT NOT NULL,
 region TEXT NOT NULL,
 city TEXT NOT NULL,
 address TEXT NOT NULL,
 latitude REAL,
 longitude REAL,
 phone TEXT NOT NULL DEFAULT '',
 website TEXT NOT NULL DEFAULT '',
 working_hours TEXT NOT NULL CHECK(json_valid(working_hours)),
 timezone TEXT NOT NULL,
 is_24_7 INTEGER NOT NULL CHECK(is_24_7 IN(0,1)),
 delivery INTEGER NOT NULL CHECK(delivery IN(0,1)),
 pickup INTEGER NOT NULL CHECK(pickup IN(0,1)),
 electronic_prescription INTEGER NOT NULL CHECK(electronic_prescription IN(0,1)),
 benefit_prescription INTEGER NOT NULL CHECK(benefit_prescription IN(0,1)),
 insurance INTEGER NOT NULL CHECK(insurance IN(0,1)),
 accessibility TEXT NOT NULL CHECK(json_valid(accessibility)),
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','STALE','UNKNOWN')),
 source TEXT NOT NULL,
 inventory_freshness_at INTEGER NOT NULL
);
CREATE TABLE medication_products(
 product_id TEXT PRIMARY KEY,
 brand_name TEXT NOT NULL,
 generic_name TEXT NOT NULL,
 active_ingredient TEXT NOT NULL,
 strength TEXT NOT NULL,
 dose_form TEXT NOT NULL,
 package TEXT NOT NULL,
 manufacturer TEXT NOT NULL,
 country TEXT NOT NULL,
 country_identifier TEXT NOT NULL,
 local_product_identifier TEXT NOT NULL,
 therapeutic_group TEXT NOT NULL DEFAULT '',
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','UNKNOWN')),
 source TEXT NOT NULL,
 UNIQUE(country,local_product_identifier)
);
CREATE TABLE inventory_observations(
 id TEXT PRIMARY KEY,
 pharmacy_id TEXT NOT NULL REFERENCES pharmacies(id),
 product_id TEXT NOT NULL REFERENCES medication_products(product_id),
 state TEXT NOT NULL CHECK(state IN('IN_STOCK','LOW_STOCK','OUT_OF_STOCK','UNKNOWN')),
 quantity INTEGER,
 observed_at INTEGER NOT NULL,
 freshness_ms INTEGER NOT NULL,
 confidence TEXT NOT NULL CHECK(confidence IN('VERIFIED','SYNTHETIC','UNKNOWN')),
 source TEXT NOT NULL
);
CREATE INDEX inventory_pharmacy_product ON inventory_observations(pharmacy_id,product_id,observed_at DESC);
CREATE TABLE price_observations(
 id TEXT PRIMARY KEY,
 pharmacy_id TEXT NOT NULL REFERENCES pharmacies(id),
 product_id TEXT NOT NULL REFERENCES medication_products(product_id),
 currency TEXT NOT NULL,
 amount_minor INTEGER NOT NULL CHECK(amount_minor>=0),
 price_type TEXT NOT NULL,
 observed_at INTEGER NOT NULL,
 source TEXT NOT NULL,
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','UNKNOWN'))
);
CREATE INDEX price_product ON price_observations(product_id,observed_at DESC);
CREATE TABLE prescriptions(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 product_id TEXT NOT NULL REFERENCES medication_products(product_id),
 status TEXT NOT NULL CHECK(status IN('ACTIVE','PARTIALLY_DISPENSED','DISPENSED','EXPIRED','CANCELLED','ARCHIVED')),
 dose_context TEXT NOT NULL,
 quantity INTEGER NOT NULL CHECK(quantity>0),
 repeats_remaining INTEGER NOT NULL DEFAULT 0 CHECK(repeats_remaining>=0),
 prescriber TEXT NOT NULL,
 issue_date TEXT NOT NULL,
 expiration_date TEXT NOT NULL,
 jurisdiction TEXT NOT NULL,
 prescription_type TEXT NOT NULL,
 payment_model TEXT NOT NULL CHECK(payment_model IN('SELF_PAY','INSURANCE','BENEFIT','GOVERNMENT_PROGRAM','MIXED','UNKNOWN')),
 provenance TEXT NOT NULL,
 created_at INTEGER NOT NULL
);
CREATE INDEX prescription_patient ON prescriptions(patient_id,status,created_at DESC);
CREATE TABLE pharmacy_orders(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 prescription_id TEXT NOT NULL REFERENCES prescriptions(id),
 product_id TEXT NOT NULL REFERENCES medication_products(product_id),
 pharmacy_id TEXT NOT NULL REFERENCES pharmacies(id),
 kind TEXT NOT NULL CHECK(kind IN('RESERVATION','ORDER')),
 fulfillment TEXT NOT NULL CHECK(fulfillment IN('PICKUP','DELIVERY')),
 status TEXT NOT NULL CHECK(status IN('CREATED','PENDING','CONFIRMED','READY_FOR_PICKUP','DISPATCHED','COMPLETED','CANCELLED','FAILED')),
 quantity INTEGER NOT NULL CHECK(quantity>0),
 payment_state TEXT NOT NULL,
 synthetic INTEGER NOT NULL CHECK(synthetic=1),
 created_at INTEGER NOT NULL,
 updated_at INTEGER NOT NULL
);
CREATE TABLE pharmacy_order_history(
 order_id TEXT NOT NULL REFERENCES pharmacy_orders(id),
 version INTEGER NOT NULL,
 status TEXT NOT NULL,
 actor_id TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 PRIMARY KEY(order_id,version)
);
CREATE TRIGGER pharmacy_order_history_no_update BEFORE UPDATE ON pharmacy_order_history BEGIN SELECT RAISE(ABORT,'immutable pharmacy order history'); END;
CREATE TRIGGER pharmacy_order_history_no_delete BEFORE DELETE ON pharmacy_order_history BEGIN SELECT RAISE(ABORT,'immutable pharmacy order history'); END;
CREATE TABLE dispensing_events(
 id TEXT PRIMARY KEY,
 patient_id TEXT NOT NULL REFERENCES patients(id),
 prescription_id TEXT NOT NULL REFERENCES prescriptions(id),
 product_id TEXT NOT NULL REFERENCES medication_products(product_id),
 pharmacy_id TEXT NOT NULL REFERENCES pharmacies(id),
 medication_record_id TEXT REFERENCES records(id),
 dispensed_at INTEGER NOT NULL,
 quantity INTEGER NOT NULL CHECK(quantity>0),
 jurisdiction TEXT NOT NULL,
 source TEXT NOT NULL,
 audit_seq INTEGER REFERENCES audit_events(seq)
);
CREATE INDEX dispensing_patient ON dispensing_events(patient_id,dispensed_at DESC);
CREATE TABLE pharmacy_favorites(
 patient_id TEXT NOT NULL REFERENCES patients(id),
 pharmacy_id TEXT NOT NULL REFERENCES pharmacies(id),
 created_at INTEGER NOT NULL,
 PRIMARY KEY(patient_id,pharmacy_id)
);
CREATE TABLE pharmacy_recent_searches(
 patient_id TEXT NOT NULL REFERENCES patients(id),
 query TEXT NOT NULL,
 searched_at INTEGER NOT NULL,
 PRIMARY KEY(patient_id,query)
);
CREATE TABLE regulatory_notices(
 id TEXT PRIMARY KEY,
 notice_type TEXT NOT NULL CHECK(notice_type IN('SHORTAGE','RECALL','SAFETY_NOTICE')),
 authority TEXT NOT NULL,
 jurisdiction TEXT NOT NULL,
 product_id TEXT REFERENCES medication_products(product_id),
 issued_date TEXT NOT NULL,
 status TEXT NOT NULL,
 source_reference TEXT NOT NULL,
 verification_state TEXT NOT NULL CHECK(verification_state IN('VERIFIED','SYNTHETIC','UNKNOWN'))
);
