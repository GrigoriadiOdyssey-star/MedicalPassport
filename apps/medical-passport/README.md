# EDHT Medical Passport — Functional Alpha 0.2

Node 24, vanilla browser UI, real HTTP API and SQLite persistence. This is the MASTER-23 multi-screen redesign, based on implementation commit `05ab4fd`. Use fictional adult profiles only. Production startup is refused; the server binds only to `127.0.0.1`.

## Start

From this directory:

```powershell
npm ci --ignore-scripts --cache ./var/npm-cache
npm run migrate
npm test
npm start
```

Open http://127.0.0.1:4173. No compilation, Docker, external database, provider credential or AI key is required. `PORT` can change the port. SQLite files and local caches live in ignored `var/`; never commit or use real health data there. The database is not encrypted at rest. `npm run migrate` can be repeated without dropping data; startup also applies migrations.

Create a patient through the registration form. Passwords require 12–128 characters. Public registration cannot assign a doctor/admin/service role. To provision a **synthetic** doctor, use a different terminal:

```powershell
$env:EDHT_DOCTOR_PASSWORD = Read-Host 'Password for the synthetic doctor' -MaskInput
npm run doctor -- doctor@example.test 'Synthetic Doctor'
Remove-Item Env:EDHT_DOCTOR_PASSWORD
```

`Read-Host -MaskInput` requires PowerShell 7. On other shells supply `EDHT_DOCTOR_PASSWORD` through a local environment mechanism. Do not put real provider credentials into this alpha. Each email is unique; rerunning doctor provisioning with the same email returns a conflict.

Recovery: `node cli.mjs recovery <email>` prints a local single-use, 15-minute recovery code. Enter it in the recovery form. Recovery revokes all existing sessions and incoming/outgoing grants. `node cli.mjs disable <email>` disables an account and revokes its sessions/grants. These are local operator capabilities, not public account-discovery endpoints.

## Working journey

1. Register and log in as a fictional adult patient.
2. Add an allergy and reported medication; add conditions, observations or vaccination records as needed.
3. Upload a PDF or UTF-8 text fixture (maximum 1 MiB). PDFs are signature-checked but not malware-scanned; all downloads use attachment disposition.
4. Save the emergency profile, including unknown blood group/Rh when unknown. Entries preserve prior versions; they are not clinician-verified.
5. Select a provisioned doctor, scopes, purpose and lifetime. Create the QR and copy its link immediately. Raw tokens are shown once and only hashes are stored in the database.
6. Log out and log in as that doctor. Paste the QR link into the access form, or open its URL in the **same machine's** browser. A phone cannot reach this loopback alpha by scanning its link.
7. Open the allowed snapshot. Every read, including each document download, performs current server-side authorization and transactional audit. A grant for allergy does not disclose medication/emergency/documents.
8. Log back in as the patient, revoke the grant, then retry the same link as the doctor: access is denied and the previous UI snapshot is cleared. Already delivered information cannot be recalled.

Durations: one request (maximum one hour), one hour, 24 hours, seven days. A one-request grant permits either one passport response **or one document**. For a direct one-time document download, provide its ID before using the token. Reading passport metadata consumes a one-request grant; its document buttons cannot reuse it. Emergency-purpose grants permit only the emergency section and have a distinct access audit event. There is no anonymous SOS or blanket break-glass bypass.

## Implemented boundaries

- Session cookies are HttpOnly/SameSite=Strict with a one-hour server expiry, CSRF token and exact Origin/Host checks. HTTP is allowed only for this loopback alpha; production requires a separate HTTPS deployment design.
- Passwords use salted scrypt; session, recovery and QR tokens use random 256-bit values with only hashes stored. Login failures are throttled. Account/practitioner status and session epoch are checked.
- Consent, recipient, expiry, revocation, scope and single-use claims are checked in SQLite `BEGIN IMMEDIATE` transactions. Audit failure rolls back one-time consumption. Six independent DB connections are tested for one winner.
- Records are immutable; emergency entries increment a version. Audit is append-only and hash-chained inside the same database. This detects accidental/tampered chains but is **not** external, independently anchored tamper-proof storage.
- Patient data is bounded to its patient ID; documents contain bytes, metadata and SHA-256. Downloads reauthorize. There are no public clinical routes, third-party scripts or external requests from the frontend.
- The synthetic FHIR adapter accepts a restricted subset of Condition, Observation, AllergyIntolerance and MedicationStatement with exact `Patient/<id>` binding. Exact replay returns the existing record; conflicting content for a source ID returns 409. It is not a general FHIR server, does not round-trip every field, and has no real provider connection.
- The assistant is a labelled deterministic summary of server-selected own-patient context with record IDs/versions. `is_generative_ai:false`; no LLM, diagnosis, prescribing or dose changes. Guideline Intelligence, Digital Twin and Precision Pharmacology remain disconnected boundaries.

## Remaining strict MASTER-21 obligations

MASTER-22 authorizes broader patient-entered records and section sharing; it does not silently complete the earlier adult single-allergy lease/recovery contracts. In particular, the current section grant includes later records in the selected section. It is **not** an exact-source-version grant.

The retained 13-task backlog still needs acceptance against its original contracts: exact source/authority versions; five-second request/digest-bound admission leases and monotonic clock handling; durable retry deduplication; bounded receipt cursors without recursive audit; recovery epoch/quarantine/reconciliation of source, grants, audit, dedupe and outbox; crash/restore and transport-boundary tests; measured load acceptance. Account password recovery is distinct from this disaster recovery contract. No full canonical owner or production runtime readiness is awarded by the alpha tests.

See `../../audit/master-22/` for the checkpoint, evidence and honest task accounting. Existing clinical/legal/jurisdiction/provider gates remain open. No real patient use, medical validation, production readiness or external integration certification is claimed.

## Verification

`npm test` runs real in-memory/disk SQLite tests and HTTP tests against ephemeral ports, including QR generation independently decoded by jsQR, permission isolation, CSRF/Origin, expiry, revoke, one-time races, audit rollback, account recovery, FHIR replay and DB restart. Tests use temporary disposable synthetic databases and close them before cleanup.

`tests/browser-alpha02.md` records the latest browser scenario and responsive evidence; `tests/browser-scenario.md` preserves Alpha 0.1 evidence. It is browser verification evidence, not a claimed automated Playwright suite.

## Alpha 0.2 interface and additive APIs

Home, Passport, Timeline, Allergies, Medications, Documents, QR, Emergency, AI assistant and Profile have separate screens. Desktop sidebar and mobile bottom navigation share one RU/EN dictionary. Forms use dialogs, confirmations and error states. The doctor has a separate read-only workspace.

Migration 003 adds immutable record revisions and document/profile metadata without rewriting original records. Edits use expected versions and return 409 on conflicts. Archives preserve history and original document bytes while removing entries from live shared views. Medication start/end dates are validated server-side.

New authenticated routes: GET/POST /api/profile; GET /api/views/:screen with bounded offset pages; GET /api/records/:id/history; POST /api/records/:id/update or /archive; POST /api/documents/:id/metadata or /archive; POST /api/access/info. Mutations retain existing CSRF/Origin checks. Access status is recipient-bound and does not consume a one-time grant; actual content reads still use the original authorization transaction.

The app suite has 32 tests. Frontend tests combine pure helpers and real DOM integration with mocked network; API/store tests exercise real SQLite and HTTP. Native browser journeys are documented separately. See ../../audit/master-23/ALPHA_02_STATUS.md for remaining limitations and checkpoint.
