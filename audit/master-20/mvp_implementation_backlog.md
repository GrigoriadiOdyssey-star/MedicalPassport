# MASTER20 implementation backlog

BUILD_GATE_FAIL. Only the bounded Audit profile is ready for implementation design. Execution of full application work remains gated.

## M20-AUDIT-APPEND

Owner: CAP-AUDIT; order 5. Dependencies: SPEC20-CAP-IDENTITY, SPEC20-CAP-SECURITY, SPEC20-CAP-CONSENT, SPEC20-CAP-DATA.

- purpose: Implement the already specified adult single-allergy access-attempt audit profile
- backend_work: Transactional append and producer dedupe; lock tenant integrity stream before grant and dedupe; Commit audit, receipt and outbox atomically before acknowledgement
- frontend_work: None; internal boundary
- database_work: AuditEvent/AuditDeduplication/AuditReceipt/AuditOutbox and tenant stream row; Unique tenant+producer+event_id and grant projection sequence
- api_work: POST /internal/v1/audit-events with MASTER16 closed schema/errors
- events: MASTER17 lifecycle envelopes; MASTER16 durable audit receipt
- security_requirements: Authenticated producer and current per-resource policy; Patient-only receipt query; revoked clinical grant does not remove historical accountability; No clinical payload/credentials/cursor in logs; Fail closed when integrity/policy/source is unavailable
- tests: Concurrent identical/conflicting retry; Crash before/after commit; Two producers and grants cannot fork tenant chain
- acceptance_criteria: One durable effect for identical retry; changed body conflicts; No acknowledged event loss under injected restart; No 2xx before atomic commit

## M20-AUDIT-QUERY

Owner: CAP-AUDIT; order 7. Dependencies: M20-AUDIT-APPEND, SPEC20-CAP-PROFILE.

- purpose: Implement the already specified adult single-allergy access-attempt audit profile
- backend_work: Snapshot pagination, opaque bound cursors and self-audit without recursion
- frontend_work: Patient receipt list with attempt-versus-delivery wording; Empty/unavailable/withheld states without inferred absence of access
- database_work: Grant/patient projection, cursor epoch and snapshot bounds
- api_work: GET /v1/disclosure-grants/{id}/receipts with MASTER18 closed responses
- events: MASTER17 lifecycle envelopes; MASTER16 durable audit receipt
- security_requirements: Authenticated producer and current per-resource policy; Patient-only receipt query; revoked clinical grant does not remove historical accountability; No clinical payload/credentials/cursor in logs; Fail closed when integrity/policy/source is unavailable
- tests: Wrong tenant/clinician/subject denial; Clinical grant revoked but current patient self-read allowed; Receipt policy revocation denies; stale cursor fails
- acceptance_criteria: All negative authorization cases disclose no receipt existence; Only permitted source-bound metadata returned; One query self-audit outside captured snapshot

## M20-AUDIT-RECOVERY

Owner: CAP-AUDIT; order 8. Dependencies: M20-AUDIT-APPEND, M20-AUDIT-QUERY.

- purpose: Implement the already specified adult single-allergy access-attempt audit profile
- backend_work: Quarantined restore, checkpoint verification and projection/outbox reconciliation; Bounded telemetry and numerical synthetic load acceptance
- frontend_work: Explicit unavailable state; no stale clinical fallback
- database_work: Restore manifest and epoch reset; retain immutable acknowledgement identity
- api_work: Verify no-store and closed error behavior during outages
- events: MASTER17 lifecycle envelopes; MASTER16 durable audit receipt
- security_requirements: Authenticated producer and current per-resource policy; Patient-only receipt query; revoked clinical grant does not remove historical accountability; No clinical payload/credentials/cursor in logs; Fail closed when integrity/policy/source is unavailable
- tests: Missing checkpoint blocks reopening; Replay cannot reactivate withdrawn grant; Log/cache redaction and 20 append +20 query/sec synthetic load
- acceptance_criteria: Reconciled source/audit/dedupe counts before reopening; p99 append <=500ms and query <=1s at declared load, measured during implementation; No real patient use without external gates

## Missing specifications

- SPEC20-CAP-IDENTITY: CAP-IDENTITY-B04, CAP-IDENTITY-B09, CAP-IDENTITY-B02, CAP-IDENTITY-B05, CAP-IDENTITY-B01
- SPEC20-CAP-DATA: CAP-DATA-B04, CAP-DATA-B09, CAP-DATA-B02, CAP-DATA-B05, CAP-DATA-B01
- SPEC20-CAP-SECURITY: CAP-SECURITY-B03, CAP-SECURITY-B05, CAP-SECURITY-B02
- SPEC20-CAP-CONSENT: CAP-CONSENT-B04, CAP-CONSENT-B09, CAP-CONSENT-B02, CAP-CONSENT-B05, CAP-CONSENT-B01
- SPEC20-CAP-ALLERGY: CAP-ALLERGY-B04, CAP-ALLERGY-B09, CAP-ALLERGY-B02, CAP-ALLERGY-B05, CAP-ALLERGY-B01
- SPEC20-CAP-PROFILE: CAP-PROFILE-B04, CAP-PROFILE-B09, CAP-PROFILE-B02, CAP-PROFILE-B05, CAP-PROFILE-B01
