# Bounded access contract and serialization decision — MASTER-10

Adds only missing data/API/event/concurrency details to [MASTER-09 security proposals](security-readiness-addendum.md). No service, enforcement endpoint or MVP implementation is delivered.

## Typed envelope

[Schema](../../specs/security-access-contract.schema.json) defines request, allow/deny decision and audit-event envelopes for the internal `allergy.read` candidate. Opaque IDs use 1–128 ASCII letters/digits/underscore/hyphen; versions are positive safe integers, times are nonnegative Unix milliseconds. Purpose is the local candidate code `patient_authorized_review`, not a standardized clinical terminology claim. No free-text clinical payload, role assertion, bearer credential or extra field is permitted. Request IDs are scoped to an authenticated enforcement producer and tenant; clients cannot assert producer identity. The API remains internal. Public errors remain non-enumerating.

An ALLOW response requires the checked source/grant/policy versions and a durable audit receipt; DENY cannot use the AUTHORIZED reason. Denied decisions may have null versions where protected state cannot be resolved. A schema-valid message is not authorization, verified identity or proof of durable audit. Timestamp and version fields cannot be trusted merely because they pass syntax checks.

The accompanying checker supports only the exact schema keywords used here and rejects unsupported keywords. It is not a general JSON Schema engine or external meta-schema certification. Negative fixtures exercise field bounds, types, invalid allow evidence, extra secrets and event shapes. Full standards-validator certification and actual endpoint behavior remain missing evidence; no dependency was installed for this pass.

## Chosen consistency boundary for the candidate

Use a single authoritative transactional boundary for grant version/withdrawal, current local role/policy versions, the selected source version, an immutable authorized projection snapshot and durable audit receipt. This is a logical design choice, not a required database product. All reads and withdrawals serialize on the same grant revision key; policy/role/source revisions must also participate in the validation/commit boundary. A standalone cached ALLOW is never sufficient to fetch a record.

For a read: authenticate the enforcement producer; verify current session/role state through the agreed identity contract; enter the transaction; lock/serialize the grant; compare exact patient/tenant/recipient/purpose/resource and expected versions; require active grant and unexpired authority; create the immutable filtered projection reference plus durable audit receipt in the same successful commit. Release only that committed projection. A failed transaction or missing audit receipt releases nothing. Payload data is excluded from the audit event. External SIEM delivery is an outbox follow-up and is not itself the durable receipt.

For withdrawal: enter the same serialization boundary; record withdrawal, increment grant version and persist the audit receipt; acknowledge only after commit. If withdrawal commits first, the read must deny. If the read commits first, that already-authorized snapshot may finish delivery; withdrawal prevents subsequent authorization, not recall of already committed/released information. Transport queues need bounded delivery duration and cancellation behavior; those operational values remain blockers. This ordering must be explicit to users and verified in runtime acceptance.

Source/policy/role changes must either serialize under the same boundary or have a proven revocation barrier; otherwise the candidate cannot claim a current decision. External issuer/session revocation integration is still unresolved, so the above local transaction alone is insufficient for readiness. No promise is made that a disconnected identity issuer can be checked atomically.

## Idempotency and events

Request identity is `(tenant, authenticated producer, request_id)`, bound to the canonical request body digest. Same ID with a changed body is a conflict. A successful old read response is not replayed after withdrawal or source/policy change; retry requires a current authorization check and must not expose a cached projection. Grant mutation retries must return their committed version without granting new access.

AccessDecision events represent evaluated outcome; EnforcementReceipt events represent committed allow/deny enforcement evidence. Both carry opaque IDs, versions, actor reference, time and bounded reason code. Idempotent consumers use `(producer, event_id)`; altered payload under an existing key is quarantined. Key ownership, digest algorithm/profile and cross-service event schema evolution still require integration approval.

## Acceptance additions and remaining blockers

Required runtime traces: read-then-withdraw; withdraw-then-read; source/role/policy version changes between evaluation and commit; duplicate read after withdrawal; altered retry body; transaction abort; unavailable audit persistence; delayed external SIEM; unavailable issuer; wrong patient/tenant/recipient; queue delivery after withdrawal. No race outcome may release an uncommitted or newly unauthorized projection. These traces are requirements, not executed concurrent endpoint tests.

Remaining: identity issuer/current role/policy integration; concrete transaction/storage design and isolation proof; patient record projection/redaction tests; jurisdiction/retention and guardian policy; migration/rollback; maximum TTL/delivery/SLO values; threat review and qualified/runtime acceptance. The bounded envelope schema advances partial data/API/event evidence only. Full CAP-SECURITY remains BLOCKED_READINESS.
