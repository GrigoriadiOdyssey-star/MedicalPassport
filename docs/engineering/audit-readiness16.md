# Audit missing-field addendum — MASTER-16

Extends `CORE-CAP-AUDIT` without replacing any source requirement or prior specification. Scope: internal durable append and controlled audit review; clinical content storage and clinical decision making remain outside this capability. This is an implementable contract proposal with synthetic schema tests, not a running audit service or an approved retention policy. Full owner status remains READINESS_BLOCKED.

## Roles, permissions and data ownership

CAP-AUDIT owns immutable event identity, receipt, ingestion sequence and integrity evidence. Clinical owners retain their own versioned records. Identity owns producer authentication; Security owns current action/tenant/purpose authorization; Consent supplies current disclosure restrictions. None of these dependencies imposes a cyclic service startup order.

| Actor | Allowed action | Mandatory boundary |
|---|---|---|
| Registered clinical service | append its own event | Authenticated producer must match producer_id; tenant and operation allowlist checked before append |
| Patient or authorized representative | read approved patient-facing audit projection | Current patient binding, purpose, field restrictions, capacity/guardian authority and segmentation apply |
| Audit reviewer | query/export a defined investigation scope | Assigned tenant, purpose, resource scope and expiring reviewer grant; export requires separate permission |
| Platform operator | view aggregate health metrics | No clinical/audit event browsing by administrative role alone |
| Retention executor | apply approved retention action | Versioned approved policy, hold check, separately authorized task, and evidence of outcome |

All other actions are denied. Producers cannot supply server receipt identity or alter prior entries. Ordinary audit contains opaque references, action/outcome codes and bounded timestamps, never raw before/after clinical values, credentials, tokens or filenames. Legacy old_value/new_value requirements are preserved through separately authorized redacted change references, not copied into routine telemetry. Redacted-change retrieval requires authorization against the original data owner.

## Data model and events

`specs/audit-envelope16.schema.json` defines exact closed syntax for append, durable receipt and error envelopes. All listed fields are required. schema_version is 1; identifiers use bounded ASCII opaque strings; sequences and timestamps are safe nonnegative integers; body digests use 64 lower-case hexadecimal characters. occurred_at_ms is producer event time, while committed_at_ms is receiver time. Calendar interpretation is outside this envelope. Authoritative producer and tenant bindings cannot be proven by schema syntax.

Deduplication key: tenant_id + producer_id + event_id. A server-computed digest over the validated event fields in schema property order identifies the body. Same key and same body returns the original receipt and sequence. Same key with any changed field returns IDEMPOTENCY_CONFLICT without exposing stored content. producer_sequence is monotonic within the authenticated producer stream; gaps or out-of-order messages are explicitly recorded for reconciliation, never silently rewritten or used as proof that missing events occurred. event_id is the retry identity; request_id is correlation only.

Append-only corrections are new events whose redacted_change_reference links to an authorized correction artifact; old events are never edited. Version 1 does not define record deletion or public export envelopes. A corrected clinical record requires its own domain operation and permission.

## Internal API and atomic acknowledgement

Proposed operation: POST /internal/v1/audit-events. Requires authenticated service identity and current append permission. Enforces the append schema before committing. Successful first append returns 201 with a receipt; identical retry returns 200 with the original receipt. Neither status may be returned before durable commit. Errors use the closed error envelope with 400 INVALID_ENVELOPE, 401 UNAUTHENTICATED, 403 DENIED, 409 IDEMPOTENCY_CONFLICT, 429 RATE_LIMITED or 503 AUDIT_UNAVAILABLE. Responses use no-store; retry hints and public error text must not reveal patient context.

Commit event, deduplication key, tenant-scoped ingest_sequence and receipt in one durable transaction. A crash after commit and before response is resolved by identical retry. A crash before commit must never yield a durable receipt. Concurrent identical appends have one effect; concurrent conflicting bodies have at most one winner. A producer cannot convert a receipt for another event into proof of the current append.

For the already bounded non-emergency allergy read, unavailable audit continues to block release according to the existing Security contract. This addendum does not define emergency access behavior. Clinical care must use its established unavailable-system workflow rather than await an unimplemented service.

## Integrity, privacy, retention and recovery

At commit, calculate body_sha256 over UTF-8 JSON of validated append fields in the order published in schema.properties; string values are ASCII and integers are safe integers. chain_sha256 is SHA-256 of previous chain digest + newline + body digest + newline + decimal ingest_sequence. The first digest in a tenant stream uses 64 zeroes as predecessor. The append store and the external integrity checkpoint must be administered separately. A local hash chain alone is not evidence against a privileged rewrite; trusted checkpoint signing, key custody, rotation, verification frequency and recovery approval remain missing.

No production retention duration is invented. Policy selection requires jurisdiction, purpose, data class, legal basis, hold handling and named approval. Missing policy blocks production activation and deletion. Restore into quarantine, compare durable receipts and integrity checkpoints, reconcile deduplication state and producer gaps, then obtain recovery acceptance before reopening reads. Inconsistent or unverified state remains unavailable; never fabricate receipts to fill gaps.

Version 1 rejects unknown fields and unknown versions. A future incompatible schema uses a new endpoint/version and explicit migration fixtures. Legacy imports must preserve source timestamps, hashes and provenance, mark imported origin in an approved future envelope, and cannot invent original cryptographic receipts; that import envelope remains a blocker.

## Observability, testing and acceptance

Proposed engineering test targets: p99 append acknowledgement under 500 ms at the agreed load; no acknowledged-event loss after a single-process restart; retry idempotence over the configured retention window; alert within 60 seconds on persistent append failures or integrity mismatch. These targets are not measured SLAs. Load envelope, retention window, hosting topology and incident owner require confirmation before they can be accepted.

Metrics: append latency, rejected/unavailable counts, durable queue age, producer gaps, duplicate/conflict counts, checkpoint verification age and restore reconciliation failures. Use aggregate bounded labels only; no tenant, patient, event, token or clinical text labels. Restricted investigation events have their own independently authorized audit.

Synthetic validation covers envelope syntax, every missing field, undeclared sensitive payload, invalid versions/sequences/digests, receipt forgery fields and the limitation that valid syntax does not prove authentication. Runtime acceptance still must demonstrate atomic append/dedupe under concurrency, crash-before/after-commit behavior, producer/tenant authorization, log redaction, independent tamper detection, restore reconciliation and controlled export/retention. No implementation or load test is claimed here.

## Remaining concrete readiness blockers

- Authenticated producer registry, key lifecycle and current authorization integration with tenant isolation.
- Typed query/export/redacted-change and legacy-import contracts; full owner profiles exceed the bounded append envelope.
- Approved retention/hold/export policy, independent integrity checkpoint key custody and recovery acceptance.
- Chosen durable store/topology, operational load envelope, measured durability/concurrency/redaction tests and incident owner.
- Internal-only exchange applicability approval or pinned external audit mapping with semantic-loss fixtures where required.
- Named architecture, security/privacy, clinical-safety applicability and owner acceptance evidence required by the inherited readiness gates.
