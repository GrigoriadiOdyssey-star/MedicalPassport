# Cloud QR consent runtime decision — 2026-10-09

## Implemented contract

The cloud runtime now has a clinical QR consent handler alongside the existing canonical patient grants. The new migration adds `access_mode` with the default `DURABLE`, preserving existing durable grants. New QR grants use `QR` and a private credential record containing only the SHA-256 hash of a random 32-byte token. The client receives an actual locally rendered, scannable PNG QR code; no third-party QR service receives the token.

Supported QR scopes are condition, observation, allergy, medication, vaccination and emergency. Creation binds the grant to a specific recipient who is verified in the administrator-managed `clinicians` table. The issuer and recipient must have a live Supabase session matching the JWT `session_id`. User-editable metadata never establishes a doctor role. Legacy `review` purpose and duration contracts are preserved: `once`, `1h`, `24h`, `7d`; `once` expires after one hour and permits exactly one successful read.

`POST /api/grants` creates the canonical grant and private credential in one transaction. The canonical trigger persists creation audit and notification evidence. `GET /api/grants` includes durable and QR owner grants and supports real active/expired/revoked/used filtering; it never returns token hashes. Existing canonical revoke remains authoritative.

`POST /api/access/info` checks the real recipient and session, returns the consent state, and does not consume a one-read grant. A patient label is returned only to an active authorized recipient. Unknown tokens, unverified users and wrong recipients receive the same opaque `NOT_FOUND` result. Inactive consent status is visible only to the bound, verified recipient.

`POST /api/access` selects current, unarchived clinical records in the granted scopes. Provenance and version fields are preserved. It locks the same canonical grant row used by revoke, then the private credential row. Required owner and recipient audit receipts and one-use consumption commit before a successful response. An audit failure therefore prevents the read and consumption from committing. Direct RLS reads of clinical tables exclude QR grants; the current-records view and Data API cannot bypass the credential check. Original durable grant scope behavior is retained.

Document, imaging and laboratory QR sharing are explicitly unavailable and return `CLOUD_QR_DOCUMENT_SHARING_UNAVAILABLE` (409). No document grant, access session, public bucket or signed URL is created to bypass the clinical-only contract. The shared passport response has no documents because document scope cannot be granted. Existing durable document grants are unchanged. Clinician-authored notes and broader write consent are not implemented by this change.

## Verification completed in the disposable local PostgreSQL environment

- `cloud-consent.test.mjs`: 5/5 focused tests passed. The returned PNG was decoded with jsQR and matched the exact Preview-origin link. Hash-only persistence, opaque denial, malformed consent, backend outage propagation and trusted doctor-role lookup were checked.
- `qr-consent-contract.sql`: passed on a fresh PostgreSQL database with the new migration; synthetic fixtures were rolled back. It checked correct/wrong verified recipients, direct RLS exclusion of QR, preserved durable grants, private hash denial, non-consuming info, one successful read, repeatable time-limited read, canonical revoke, revoked-session denial and committed audit receipts.
- Real two-client concurrency test: two independent concurrent PostgreSQL client processes targeted the same one-read grant in the disposable `edht_qr_concurrency` database. Exactly one returned `ALLOWED` and one `DENIED`; the database contained one consumed credential and one owner shared-read receipt. The processes overlapped.

The concurrency setup and driver files were generated outside the repository as `edht-qr-concurrency-setup.sql`, `edht-qr-concurrency-read.sql` and `edht-qr-concurrency-run.mjs`. They contain synthetic local fixtures only and must not be committed or treated as live deployment evidence.

## Deployment gate

These results verify code and local database behavior, not a live clinician Preview flow. The managed Supabase project was not changed by this QR implementation. Live migration application remains blocked until the target database is confirmed isolated from production or the exact change is separately authorized. Enable `EDHT_QR_STORAGE_READY=true` only after the migration and required trusted clinician configuration are available in the intended Preview environment.

A final immutable Preview must still demonstrate an actual patient issuer and an independently authenticated verified clinician on the same SHA, with wrong-recipient, read, revoke and session checks. No production readiness or live A/B/C pass is claimed here.
