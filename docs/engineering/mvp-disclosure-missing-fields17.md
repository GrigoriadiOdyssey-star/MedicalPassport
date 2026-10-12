# MASTER-17: missing contracts for the existing adult allergy disclosure slice

This addendum extends the existing MVP candidate and Security/Audit additions. It does not rewrite the seven canonical owners, expand the adult-only read-only slice or claim that proposed endpoints exist. The earlier missing Security canonical-document blocker was resolved in MASTER09. Full-owner and MVP-slice readiness are tracked separately in `audit/master-17/readiness_queue.json` so unrelated pediatric, AI, emergency and research extensions do not silently block this slice.

## Minimum operations

The new `specs/disclosure-contract17.schema.json` defines closed request, grant, view, withdrawal and event envelopes. HTTP identity and tenant context come from authenticated infrastructure, never from caller assertions in the request body. Header request correlation and Idempotency-Key use the same bounded opaque identifier constraints as the schemas.

| Operation | Request/response | Authority and failure behavior |
|---|---|---|
| POST /v1/disclosure-grants | grant_create → grant_state; 201, identical retry 200 | Bound adult patient may select one owned record/version and verified clinician recipient for TREATMENT_REVIEW; current policy must permit requested TTL |
| GET /v1/disclosure-grants/{id}/allergy-view | no body → allergy_view; 200 | Current recipient role, patient/tenant/purpose binding, policy, grant and source versions must all match at the read barrier |
| POST /v1/disclosure-grants/{id}/revoke | grant_revoke → grant_state; 200 | Grant creator/patient binding and expected version required; repeat of the same authorized withdrawal returns its original state |
| GET /v1/disclosure-grants/{id}/receipts | bounded cursor/limit → audit-owned authorized projection | Existing Audit projection contract is not complete; this operation stays a concrete readiness blocker rather than receiving a fictional response model |

Every response is no-store. A Problem envelope contains only request_id and a code: INVALID_REQUEST, UNAUTHENTICATED, ACCESS_DENIED, STALE_VERSION, IDEMPOTENCY_CONFLICT, POLICY_UNAVAILABLE or AUDIT_UNAVAILABLE. Unauthenticated →401; public inaccessible/missing/expired/foreign grant →uniform 404; invalid syntax →400; authorized stale version or conflicting retry →409; required dependency failure →503. Diagnostic internal reasons must not reveal record existence to unauthorized callers.

Create deduplication key is tenant + authenticated subject + operation + Idempotency-Key. Persist the validated-body fingerprint and grant transactionally. Identical retry returns the original result; changed body conflicts. A failed transaction creates neither grant nor successful receipt. Withdrawal never rewrites clinical records or withdraws previously delivered information. Source correction does not grant access to its new version automatically.

## Data ownership and clinical display

Consent owns grant identity/status, expiry and withdrawal. Identity owns adult patient binding and verified clinician role/expiry. Data and Allergy own source record/version and provenance; Profile owns only the filtered view. Audit owns durable receipts. Security owns the linearization barrier and deny-by-default enforcement. These remain seven logical owners; there is no new disclosure service owner.

The view schema retains record ID/version, assertion state, source verification state, freshness and source reference, an attributed reported substance/reaction display, grant reference and receipt reference. Unknown assertion is not absence of allergy. UNVERIFIED is not a clinician-confirmed diagnosis. Missing substance/reaction text remains null and cannot be filled by AI. Exact terminology binding and qualified UI interpretation acceptance remain blockers; the bounded free-text display does not claim terminology conformance.

## Actor/resource/action matrix

| Actor | Action/resource | Conditions | Consent and emergency behavior | Audit |
|---|---|---|---|---|
| Bound adult patient | create/revoke own single-record grant | Current session, independent patient binding, owned source/version | Explicit purpose/recipient/expiry; no emergency override in this slice | Creation/withdrawal and denial |
| Verified doctor | read granted allergy view | Recipient role, current credential, tenant/patient/purpose and all versions match | Active grant and current policy; no reuse after withdrawal | Durable access decision and release receipt |
| Clinic or system service | execute narrowly assigned internal operation | Authenticated producer, current service permission and exact patient resource context | Clinic identity alone grants no clinical access | Producer and correlation attribution |
| Pharmacy or laboratory | none in this slice | Deny even with a generic professional role | No implicit disclosure grant | Safe denial metadata |
| Family/guardian or minor account | none in this slice | Adult-only eligibility must be proven; ambiguity denies | Delegation and minor workflows remain retained full-owner profiles | Safe denial metadata |
| Emergency actor | none in this slice | Separate emergency capability and approved workflow required | No break-glass flag accepted here | Safe denial metadata |
| Operator/admin | health telemetry only | No clinical-content access from infrastructure role | No override | Administrative actions separately audited |

## Events, concurrency and recovery

Only already proposed lifecycle events are specified: GrantCreated and GrantWithdrawn (Consent producer; Security and Audit consumers), SourceVersionChanged (Data/Allergy producer; Security/Profile consumers), AccessAllowed and AccessDenied (Security producer; Audit consumer). Version-1 payloads contain event ID, producer, correlation ID, tenant, resource, grant/source/policy versions, timestamp and outcome; no clinical text or credentials. Persist grant mutation and event outbox together. Delivery is at least once; consumers deduplicate tenant + producer + event_id and reject conflicting replay. Failure retries keep event identity; dead-letter state is operator-visible and does not silently apply permissions.

Authorization does not rely solely on delayed events. The read barrier verifies current source/grant/policy state and current recipient role before release. A withdrawal linearized before that barrier denies the read. A withdrawal after an already authorized release cannot recall delivered content. Choosing and proving the concrete transaction/serialization mechanism remains a Security implementation blocker. A previously issued ALLOW cannot be replayed as a bearer grant.

SourceVersionChanged carries null grant_reference and grant_version: the source owner does not invent or enumerate disclosure grants. Security/Profile resolve their current affected bindings from the resource/version reference. Grant lifecycle and access events require their actual grant reference/version. The source change is an invalidation signal, never a permission grant.

Offline or unknown issuer/policy/grant/audit state denies this non-emergency workflow. No cached clinical view substitutes for current authorization. Audit-unavailable means no content release; queued telemetry is not durable authorization evidence. Partial publication, concurrent revoke/read, producer replay, source amendment and crash-after-commit must be tested with the actual implementation. Restore requires reconciliation of grant state, deduplication records, outbox and durable audit before reopening the slice.

## Configurable privacy and retention

`retention_policy` envelopes explicitly model DRAFT and APPROVED configurations. Jurisdiction, data category, legal basis, purpose, consent-policy reference, retention period, hold behavior, archive/export conditions and approval reference belong to versioned policy configuration. No universal legal duration is asserted. DRAFT permits an unset retention value and has no approval; it cannot activate deletion/export/archival. APPROVED requires explicit values and an approval reference, but syntactically supplied approval is not authenticated governance evidence.

Grant expiry is a separate access-duration policy, not record retention. A revoked grant does not delete clinical records or audit evidence. Legal holds prevent deletion; archival/export remain separately authorized and audited. Retention execution must recheck current policy and holds at the deletion boundary. Runtime verification of genuine policy approval, consent precedence and jurisdiction applicability remains necessary.

## Tests and acceptance

Synthetic schemas test closed fields, missing fields, invalid states, unknown versions, forged identity fields and unapproved retention configuration. They do not authenticate an issuer, prove atomic state transitions, demonstrate clinical UI safety or certify a legal policy. No production endpoint or clinical data is created.

The pure contract checker `scripts/disclosure17-invariants.mjs` additionally rejects expiry at/before creation, withdrawal before creation, and contradictory unknown/not-assessed allergy projections. These cross-field checks do not evaluate live grant state, user authority, clinical truth or jurisdiction policy.

The next executable acceptance must exercise: owned-record grant → exact verified-recipient view → durable receipt → withdrawal → denied later view. Negative fixtures must include foreign patient/tenant/recipient, stale source/policy, expired role, ambiguous adult binding, body-changed retry, concurrent withdrawal, unavailable audit and retained clinical data in logs. Metrics must count denials, stale context, audit failures and outbox lag without patient/record labels; numerical SLOs and accountable incident ownership remain unapproved.

Remaining MVP blockers: genuine issuer/role/policy adapters; audit receipt-query response contract; transaction/read-barrier implementation evidence; controlled terminology and UI safety acceptance; approved retention/privacy configuration; runtime journey, recovery/redaction tests and named architecture/security/privacy/clinical acceptance. None is an unrelated post-MVP feature.
