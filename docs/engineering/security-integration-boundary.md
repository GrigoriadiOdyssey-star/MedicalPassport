# Security integration boundary — MASTER-11

Extends only the missing integration portion of the [bounded concurrency contract](security-concurrency-contract.md). Existing purpose, roles, envelope schema, denial semantics and clinical boundaries remain unchanged. This is a provider-neutral contract proposal, not a connected issuer, operational policy service or implementation-ready system.

## Authoritative inputs

Identity supplies an authenticated principal/session assertion: configured issuer reference, subject reference, tenant binding, session reference, authentication time, expiration, session revision and revocation status. Provider identity and keys come from controlled configuration, never a token-supplied arbitrary endpoint. A syntactically valid subject or unverified issuer assertion must not reach the authorization transaction as trusted context.

The role authority supplies role reference, subject, organization, tenant, action scope, validity interval and role revision. A directory profile, account-device trust flag, medical license claim or JWT role string alone is not a current treatment/data-access permission. The patient-binding authority supplies the independently verified subject-to-patient relationship and its revision. Relationship to another person does not imply permission to their records.

Consent/policy supplies grant ID/revision/status, exact recipient role, patient, resource/version, purpose, expiry/withdrawal and policy revision. The record authority supplies the source identity/version and disclosure labels. External role/policy responses cannot select a new tenant, recipient or patient beyond the request's verified bindings. Any disagreement fails closed.

## Snapshot and consistency requirements

The proposed internal TrustedContextSnapshot contains request ID, tenant/subject/session/role/patient bindings, issuer configuration version, session/role/binding/grant/policy/source revisions, fetched-at timestamps and adapter validation outcome. IDs follow the bounded envelope identifier constraints; revisions are positive integers or explicit unavailable states that force denial. No raw credential or clinical payload is stored in the snapshot. An unavailable revision is not zero or an implicit current state.

Before commit, the enforcement boundary must establish that every revocable authority is still valid at the chosen authorization point. The single-store transaction from MASTER-10 covers only locally authoritative state. External issuer/role revocation requires a concrete provider-supported barrier, coherent local replica or equivalent proven protocol; a recent fetch alone does not prove atomic currentness. Until a provider and protocol are selected and tested, cached ALLOW responses and time-based freshness assumptions cannot close this blocker.

Request timeout, maximum assertion age, clock skew and delivery duration need explicit bounded configuration and acceptance evidence. No arbitrary value is assigned in this pass. Missing configuration denies the candidate operation. Delayed revocation events, duplicate/out-of-order provider responses and reconnect after an outage require reconciliation before allowing access; failed identity refresh must not reuse an old permission.

## Adapter acceptance and configuration migration

Required adapter cases: incorrect issuer/audience; wrong tenant/patient/recipient; expired or revoked session/role/grant; valid signature with unauthorized issuer; conflicting role revisions; replayed provider response; stale patient binding; unavailable policy; key rotation; out-of-order revocation; concurrent role withdrawal/read; timeout followed by late ALLOW. A response containing a URL or instruction cannot cause an unapproved outbound lookup or route change.

Configuration changes to issuer keys, role source or policy version must invalidate dependent snapshots. Migration needs an auditable configuration version, staged conformance tests, rollback without restoring revoked permissions and explicit operator authorization. No production key, provider credential, endpoint or live patient data is introduced here.

Remaining blockers are actual provider selection and evidence, precise adapter schemas and verified signing configuration, provable revocation consistency, runtime integration/negative tests, operational limits, jurisdiction/retention policy, migration and qualified acceptance. The document supplies the integration boundary and required cases; it does not prove any listed property is enforced.
