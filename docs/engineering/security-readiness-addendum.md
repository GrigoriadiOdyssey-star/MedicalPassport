# Security: missing readiness additions, MASTER-09

This extends the MASTER-08 [MVP proposal](mvp_candidate_architecture.md) without rewriting its purpose, actors, scope, clinical boundaries or acceptance journey. Security Architecture 81, Zero Trust 221 and Monitoring 229 provide source-backed canonical ownership. This removes the missing-canonical-document blocker only; it does not establish implementation readiness or implement enforcement.

## Decision and enforcement contract proposal

Proposed internal operation: `POST /internal/v1/access-decisions`. It is accessible only to an authenticated enforcement service; it is not a public decision oracle. Request fields: request_id (opaque string), tenant_id, subject_id, session_reference, patient_id, recipient_role_reference, action (`allergy.read` for the candidate), resource_id, expected_resource_version, purpose_code, grant_id, expected_grant_version, expected_policy_version. Every identifier requires a nonempty string and bounded length; final lengths, schema and code systems remain unresolved. Caller-supplied roles and consent assertions are not authoritative. Resolve current versions through Identity, Consent and Data; reject mismatched tenant/patient bindings before returning content.

Response fields: decision_id, decision (`ALLOW` or `DENY`), reason_code, checked_policy_version, checked_grant_version, checked_resource_version and audit_receipt_reference. Missing, conflicting or unverifiable context is DENY. An ALLOW decision is not a reusable bearer capability and does not contain clinical content. Only the enforcement boundary may consume it in the same bounded operation. Public callers receive a non-enumerating error, not internal policy rationale. Service authentication, concrete JSON Schema, expiry bounds and authenticated producer guarantees remain required.

## Revocation, events and failure semantics

Policy and grant versions must be checked at the protected read's defined linearization point. A separate successful decision followed by an unguarded later read is insufficient. The design must choose a transaction boundary or equivalent serialized authorization lease with withdrawal semantics; that unresolved choice blocks readiness. Retries preserve request identity, but a prior ALLOW cannot be replayed after a version change. Source changes require a new decision; never return an older authorized record as a substitute.

AccessDecision and EnforcementReceipt are separate proposed events. Include event_id, request_id, actor/service reference, resource/grant/policy versions, timestamp and outcome, excluding clinical payloads, credentials and raw IP/location unless specifically authorized by policy. Unavailable or unacknowledged audit denies this non-emergency read. A denial audit failure is separately observable and must not turn denial into permission. SIEM/AI anomaly signals do not grant access or autonomously alter clinical permissions.

## Missing evidence and acceptance additions

Extend existing negative fixtures with: caller-forged role; patient-bound grant reused for another record; equal request ID with altered body; ALLOW followed by withdrawal before read; policy/source version change between decision and projection; unavailable audit sink; stale issuer/role cache; delayed telemetry; decision-replay attempts. Acceptance must demonstrate no content release on every failed check and no token or medical data in decision/error logs. These cases are specifications, not executed endpoint tests.

Remaining blockers: exact request/response/event schemas and field constraints; policy engine and issuer contracts; atomic revocation/read implementation design; role/guardian/jurisdiction rules; data migration/rollback; rate/timeout/SLO values; threat-model review; runtime and clinical/privacy/security acceptance. Legacy future-ABAC text is preserved, but current patient/resource/purpose checks cannot be postponed to a later phase. Cryptographic product names and compliance labels are source intentions, not certifications.
