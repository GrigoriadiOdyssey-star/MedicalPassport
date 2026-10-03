# Preview cloud runtime contract inventory

Branch: implementation/cloud-staging-integration. Production is excluded.

The Vercel project deploys apps/medical-passport/public. The SQLite server and its routes are not part of that deployment. At 4ed58e3a the cloud router implements Auth, profile and home only, returning CLOUD_FEATURE_NOT_MIGRATED for other requests. There is only one explicit nested view wrapper (home).

## Confirmed Preview environment boundary

The two project variables SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are scoped to Preview and this branch. No shared environment variables are linked. SUPABASE_URL points to project uzesebfgsnakrbzpidwh. Production remains on implementation/master-27-completion at de2e8d04510fc18f38117452a88cce2e740e1485, where public/api/[...route].mjs does not exist. No production settings or production source are changed.

## Routes used by core screens

- Home/passport/health: GET /api/views/{home,passport,records,condition,observation,allergy,medication,vaccination,emergency,documents}.
- Profile/privacy: GET /api/profile, /api/sessions, /api/audit, /api/grants; POST profile and grant revoke.
- QR: GET /api/grants and /api/doctors; POST /api/grants creates a recipient-bound link with expiration and optional single use. The legacy QR token contract is NOT interchangeable with a plain edht_patient_grant.
- Notifications: GET /api/notifications, /api/notification-settings; POST notifications/action and notification-settings.
- Medication: GET /api/reminders; POST reminders, reminders/pause, doses/action and timezone. Record changes pause existing reminders.
- Records: GET /api/record/:id and /api/records/:id/history; POST records and records/:id/{update,archive}.
- Documents: GET /api/storage-policy, /api/uploads, /api/documents/:id/versions, metadata/download routes. The existing chunk-upload protocol requires a separate persistent Storage implementation; a successful list response does not certify upload support.
- AI: POST /api/assistant. Existing contract is deterministic-sandbox, explicitly not generative AI.
- Search: GET /api/search.

## Additional reachable routes

Care: appointments and guidelines/context.
Imaging: imaging, imaging/:id, imaging-instances/:id, upload/chunk/finalize.
Pharmacy: pharmacy, products, prescriptions, orders, dispensing, pharmacology-context, notices, provider-boundary, favorite, simulate, assistant.
Laboratory: mvp/laboratory/results, orders, reports, notifications, providers, catalogue, specialized-boundaries, trends, provider-boundary and mvp/labs.
Shared access: access/info, access, access/imaging.

These routes must remain explicit release blockers until their cloud contracts are implemented and verified. They must not be replaced with fabricated success or seeded demonstration data.

## Verification sequence

1. Apply all migrations to disposable PostgreSQL in CI; run unchanged baseline RLS tests and additional Preview runtime A/B tests.
2. Apply the additive migration to the verified Preview Supabase project only.
3. Deploy cloud runtime changes to the Preview branch; run all existing jobs plus new regression tests.
4. Verify authenticated requests and UI in the actual Preview; inspect runtime logs.
5. Distinguish SQL role-based A/B isolation from two live independent browser sessions in the release report.
