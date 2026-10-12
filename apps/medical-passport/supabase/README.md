# Supabase cloud foundation: patient, records and documents

Migrations `20261001000000_document_storage.sql` and `20261001001000_patient_records.sql` prepare private, owner-scoped persistence. They are not applied to a hosted project.

The async `supabase-repository.mjs` adapter calls the PostgREST RPC and table contracts using a patient's Supabase Auth access token. It accepts only HTTPS, a Supabase publishable key (or legacy JWT with the `anon` role), and a caller-provided access token. It rejects service-role/secret keys, never logs provider response bodies, and returns stable error codes.

GitLab CI now applies both migrations to an ephemeral PostgreSQL 17 instance and exercises RLS for a patient, scoped recipient and unrelated user, including exact-version document access and revocation. The job is a disposable test database; it is not a deployed EDHT environment.

## Still required before a public staging demo

- The running app still authenticates through local SQLite and does not instantiate the async cloud adapter.
- Add Supabase Auth login/session handling and an async application repository boundary, then route the existing screens through it.
- Add a Storage upload/download adapter with integrity verification and an audited download proxy.
- Run tests against the managed Supabase project after it is active; ephemeral PostgreSQL does not test Supabase Auth or Storage service behavior.
- Complete access logging, malware scanning, backup/restore, data residency and clinical/jurisdiction gates before any real data or production use.

No SQLite accounts or medical records are copied to cloud automatically.
