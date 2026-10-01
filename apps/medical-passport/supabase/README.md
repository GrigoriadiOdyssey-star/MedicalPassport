# Supabase cloud foundation: patient and clinical data

The follow-on migration `20261001001000_patient_records.sql` prepares the patient identity, profile, clinical-record and scoped-sharing contract. It is additive and is not applied while the connected Supabase project is inactive.

- Supabase Auth UUIDs are the cloud identity. Existing SQLite accounts are not automatically mapped.
- Each clinical record is an immutable version. The append function serializes version allocation and validates the owner, kind and bounded JSON payload.
- Patient sharing is explicit, category-scoped, recipient-bound, revocable and expires within seven days. This authorization records an authenticated recipient, not a verified clinician credential.
- The current-record view uses `security_invoker` so the caller's RLS policies remain in force.
- No real patient data, provider data, or credentials belong in this staging schema.

The application still uses its local SQLite repository. Before this schema can serve the UI, add an Auth/session bridge and an async repository boundary, run the migrations against disposable PostgreSQL, and prove owner/isolation/revocation behavior with real RLS integration tests. Do not mark the app cloud-ready based on SQL contract tests alone.
