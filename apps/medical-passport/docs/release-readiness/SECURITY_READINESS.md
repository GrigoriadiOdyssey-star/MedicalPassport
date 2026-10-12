# Security readiness — EDHT Preview
## Scope
Read-only metadata/log audit of Supabase uzesebfgsnakrbzpidwh and synthetic Preview sessions. No policy changes, production changes or medical-data writes in this audit pass.

## Confirmed evidence
- Public schema inventory: 35 tables with RLS enabled. This does not alone prove policy correctness.
- edht_current_clinical_records has security_invoker=true.
- No inspected policies used user_metadata as authorization.
- 29 SECURITY DEFINER functions inspected at metadata level: private schema, explicit search paths, no anon execute. Function-body correctness is not certified by this metadata check.
- Both inspected document buckets are private. Their size/MIME configurations differ; runtime upload policy is 4 MiB.
- Owner/grant policies include owner identity and recipient/scope/expiry/revocation checks.
- Two distinct synthetic document owners confirmed with aggregate SQL. B→A versions 404 on 51e3b8f; A→B versions 404 on c46fd3b; own versions 200.
- These checks do not cover all tables, foreign writes or same-SHA live sessions. Full RLS A/B: INCOMPLETE.

## Auth defect and correction
Supabase logs at 15:56–15:59 UTC on 2026-10-04 showed /user 403 session_not_found after a successful logout. Old error mapping mislabeled it AUTH_PROVIDER_UNAVAILABLE. The correction recognizes exactly that code on GET /auth/v1/user; it does not accept an invalid user or weaken RLS. Subsequent revoked /api/me returned 401 and the login screen; user re-login returned 200.
Provider/network outages remain safe errors. Logout cannot claim successful upstream revocation after a provider failure.
Reference: https://supabase.com/docs/guides/auth/debugging/error-codes

## Secret scan
139 cloud application text files were scanned for high-confidence private-key/token/password-URL patterns. Two secret-shaped strings occurred only in negative key-rejection test fixtures. No secret values are reproduced here.
This is not a full Git history, entropy, all-assets or all-branches scan. Runner credential rotation remains an administrator task if a token was previously exposed.
No service-role key was retrieved or added. Only the public Supabase URL was decrypted for environment matching. Browser tokens/cookies/passwords were not exported.

## Outstanding
- Security Advisor leaked-password protection warning requires a separately considered Auth configuration change; not toggled during this audit.
- Full registration/recovery/brute-force/rate-limit/CSRF/session-fixation and recipient tests are not newly certified.
- Full cross-account profile, medication, lab, grant, audit and mutation matrix remains required.
- No comprehensive antivirus, security penetration test or real-patient compliance certification is claimed.
- No PHI or credentials appeared in the inspected sanitized runtime error messages; complete historical-log absence is not proven.
