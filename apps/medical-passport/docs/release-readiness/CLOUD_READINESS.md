# Cloud readiness — EDHT
Production is unchanged. GitLab remains source of truth.

## Architecture and deployment
Vercel edht serves apps/medical-passport/public with cloud API wrappers and SupabaseRepository. It does not run the SQLite product-server. Porting a SQLite route requires a real cloud contract, not merely a route wrapper returning success.
Preview branch: implementation/cloud-staging-integration.
Known verified deployment: dpl_HSDMDcMLjpMqjSANkVNsv8tbCvkz, c46fd3b, READY.
URL: https://edht-3n1n86e0t-grigoriadiodyssey-8824s-projects.vercel.app
Branch alias: https://edht-git-implementation-ab6b91-grigoriadiodyssey-8824s-projects.vercel.app
The immutable URL is tied to c46fd3b. The branch alias changes with later commits; verify build logs for each final SHA.

Only SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY were listed at project scope, both Preview + branch scoped. No linked shared variables were returned. The URL matches uzesebfgsnakrbzpidwh. No production env edit occurred.
Supabase is ACTIVE_HEALTHY, PostgreSQL 17, with no development branch. This audit does not authorize shared Auth setting changes.

## Migrations observed
20260920234947 edht_medical_passport_core_v1
20260920235009 edht_core_fk_indexes
20261001224117 edht_document_storage
20261001224203 edht_patient_records
20261001224520 cloud_rpc_and_fk_hardening
20261003155416 preview_runtime_contracts
20261003160239 preview_document_sessions
20261003161413 preview_reminder_provenance
20261003195351 preview_care_contracts

Some applied timestamps differ from repository filenames; that alone is not proof of SQL content drift. No live migration was applied in this pass.

## CI evidence
Runner 57035521, Docker/node:24-alpine.
Pipeline 2911032132 at 51e3b8f completed specifications, laboratory, PostgreSQL migrations, Preview runtime and care contract jobs successfully. Main application test retry: 226 pass / 3 fixture failures.
The PostgreSQL job executed fresh test bootstrap, document/patient/RPC migrations and rls-smoke.
Subsequent Auth and fixture commits launch their own full pipeline. Final status must be checked, not inferred from this earlier pipeline.
Transient Alpine DNS failure occurred before tests; retry was used without changing runner/CI.

## Runtime evidence
Observed 200: login, me, profile, sessions, audit, grants list, notifications, document view, storage policy, uploads list, own document versions.
Expected 401: revoked session before renewed login.
Expected 404: foreign document versions.
Earlier 503 AUTH_PROVIDER_UNAVAILABLE was traced to revoked-session 403 and corrected.
Pharmacy cloud route remains explicitly unimplemented. QR creation/recipient token lifecycle, specialized lab/imaging, translation runtime and clinician workspace remain blockers.

## Data/performance/operations gaps
Two advisor missing-index warnings: appointment_versions.actor_user_id and guideline_context_versions.actor_user_id. Prepare additive indexes after checking actual query workload/schema; no live database mutation was made.
Unused-index advice is not a reason to delete indexes in a small test database.
Later MASTER-34 durable jobs and transaction/object modules are not proven integrated into this Preview.
Backup restore, retention/deletion lifecycle, alerting, load testing, large/resumable uploads and async translation jobs remain unverified.
No paid resource was created, and no laptop was configured as a permanent server.
