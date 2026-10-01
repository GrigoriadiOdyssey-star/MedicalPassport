# Supabase cloud foundation: medical documents

This is a prepared migration for the first cloud persistence slice. It is not applied to any Supabase project. The connected EDHT project was reported as inactive, so the migration needs a fresh project-status check and database-side validation before activation.

## Contract

- Uses Supabase Auth UUIDs as patient and recipient identities. Existing SQLite accounts are not silently mapped or copied.
- Stores document metadata and immutable versioned bytes in a private Storage bucket. Object paths are `<patient-auth-uuid>/<document-uuid>/<version>`.
- Patients can upload and read their own objects. A patient can issue or revoke an expiring grant for one recipient, one document and one exact version. Grants expire within seven days.
- There is no public bucket, client-supplied path authority, object update policy, or object deletion policy.
- The migration contains no credentials. Runtime credentials belong in the deployment platform's secret manager.

## Required work before a staging demo

1. Confirm the project is active and that its region/data residency is approved for synthetic staging data.
2. Apply the migration in a disposable staging project and run owner, unrelated-user, recipient, expired-grant, revoked-grant, upload-path and MIME/size tests against real PostgreSQL and Storage.
3. Implement Supabase Auth session handling and an application server adapter. The current alpha uses local SQLite sessions; this migration does not change that behavior.
4. Proxy document downloads through an authorization and append-only audit boundary. Direct Storage reads are RLS-protected, but this slice does not claim per-download audit.
5. Add migration rollback/restore evidence, malware scanning, encryption/key management review, rate limits and cloud integration tests.
6. Only then enable a private staging preview. Do not promote this synthetic slice to production.

## Local development compatibility

The existing SQLite and local-object alpha remains unchanged. The cloud schema is additive and isolated under `supabase/migrations`; no legacy migration or audit baseline is rewritten. No patient data should be copied into staging.
