# MVP candidate: patient-authorized allergy record review

This is a proposed documentation slice, not an implementation, clinical deployment or commitment to deliver every capability tagged under an owner. MASTER-08 begins readiness assessment before all 5175 originals are reviewed. Existing canonical specifications remain the source of full requirements; the slice deliberately selects one workflow.

## Purpose, scope and non-goals

A bound, authenticated adult patient selects one existing source-linked allergy record for a verified clinician to read. The clinician sees its origin, verification and freshness state; the patient can withdraw the grant and inspect an access receipt. Unknown, not assessed and no known allergy are distinct. This demonstrates identity → patient binding → explicit grant → authorization → source projection → audit → revocation.

The initial candidate excludes minors/delegation, clinical writeback, allergy diagnosis, medications/prescribing, uploaded documents, QR/bearer links, public emergency access, live external imports, notifications, telemedicine, AI and twins. Selecting an adult-only candidate does not remove pediatric or other legacy requirements; they remain in the full owner specifications. No test patient or clinical data is created by this planning pass.

## Ownership, actors, roles and permissions

Identity owns account/session and verified clinician/organization role references. Security owns enforcement; Consent owns the grant/policy record. Data owns patient/source identity and provenance. Allergy owns the clinical record, while Profile builds an authorized read projection. Audit owns an append-only access receipt. A patient role may select and revoke their own bounded grant; a verified clinician may read exactly its granted record for the named purpose; an audit reviewer may inspect policy-authorized metadata. A platform administrator receives no default clinical-content access.

CAP-SECURITY has an architectural owner but no active canonical document yet, so this vertical slice is BLOCKED. No shadow authorization owner is invented under Profile or Consent.

## Inputs, outputs and candidate data model

Candidate inputs: authenticated subject/session reference; verified patient binding; recipient clinician role; exact patient, record and record-version IDs; purpose; requested expiry; active consent/policy versions. Output: filtered allergy projection plus source/verification/freshness state and access receipt reference, or a non-enumerating denial. Response never includes raw access tokens, storage paths or another patient's identifiers.

Proposed grant envelope: opaque grant ID, tenant ID, patient ID, creator subject ID, recipient role reference, record ID/version, purpose code, created/expiry/withdrawn timestamps, status, grant version and policy version. Mandatory field types, identifier constraints, null/absent semantics, terminology value sets and maximum expiry are still missing. This envelope is a design proposal, not a validated JSON Schema. Patient identifiers must not be inferred from an account ID.

## API contracts and events

Candidate routes (not implemented): `POST /v1/disclosure-grants`, `GET /v1/disclosure-grants/{id}/allergy-view`, `POST /v1/disclosure-grants/{id}/revoke`, `GET /v1/disclosure-grants/{id}/receipts`. Creation requires an idempotency key; state changes require expected version. Tenant and actor identity are derived from authenticated context and rechecked against record/grant ownership. Create/read/revoke schemas, response/error envelopes and concurrency guarantees are not complete and block readiness.

Proposed events: GrantCreated, GrantWithdrawn, AccessAllowed, AccessDenied, SourceVersionChanged. Each carries event ID/version, producer identity, correlation ID, timestamp, policy/grant/source version references and outcome; clinical payloads and secrets stay out. Durable audit must acknowledge authorization before content release; failed audit persistence denies this non-emergency view. Withdrawal and access need an explicitly tested linearization point: a check performed before withdrawal must not silently permit an unbounded cached response afterward. Already delivered information cannot be recalled. Event storage/outbox, retry and retention contracts remain unresolved.

## Dependencies and external integrations

Only seven shared owners are core candidates: Identity, Security, Consent, Audit, Data, Profile and Allergy. Documents, Interoperability and Notifications are optional extension candidates, not dependencies of this local read-only slice. Identity issuer selection remains an external dependency requiring provider review. Data initially uses an already ingested, attributable record; no new partner connection is implied. Rendering can be part of a modular application; independent microservices are not required.

## FHIR and terminology

FHIR R4 4.0.1 is a candidate exchange baseline, not a claim that it is the newest version or that EDHT conforms. Candidate mappings: Patient, Practitioner/PractitionerRole, Organization, AllergyIntolerance, Consent, Provenance and AuditEvent. Account/session objects are internal identity objects. Profile constraints, binding versions, implementation guides, capability statements, partner scope and loss fixtures must be pinned before an optional exchange slice becomes ready. Consent data does not implement enforcement; FHIR itself is not a security protocol. See [FHIR R4 security](https://hl7.org/fhir/R4/security.html) and [Consent](https://hl7.org/fhir/R4/consent.html), consulted 2026-09-15.

## Security, privacy, consent and audit

Default deny, exact tenant/patient/record/purpose/recipient matching, current role and grant state, replay resistance, bounded sessions and protected transport/storage are design requirements. No whole-record hospital privilege or public QR template is imported as an active grant. Issuer and token handling should be assessed against [OAuth security BCP, RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html); this reference does not certify an implementation. Secrets belong in protected credential systems, not clinical tables or audit payloads. Raw legacy old/new audit values become redacted changes or access-controlled references.

Jurisdiction, lawful basis, retention/deletion, patient capacity, processor contracts and incident response remain policy blockers. Revocation stops later permitted access; it cannot erase a recipient's already received information. Audit metadata also requires access controls and retention. Clinical record correction and withdrawal are different operations.

## Clinical safety and AI boundaries

Read-only presentation must not diagnose an allergy, infer absence from missing data, suggest a drug or suppress a warning. Source, uncertainty and unverified/conflicting information remain visible. This is not emergency triage. No AI inference is required. Qualified review of intended use, wrong-patient hazards, stale/unknown state and display interpretation remains missing.

## Failure modes and observability

Deny on expired/revoked/foreign grants, unavailable identity/policy/audit services, mismatched source version or ambiguous patient binding. Do not leak record existence through error detail. Conflicting source versions require refresh/review, not silent fallback. Candidate telemetry: authorization denial reason codes, audit acknowledgement failure, revocation propagation lag, source mismatch and service latency; logs exclude health payloads and bearer credentials. Numerical alert/SLO thresholds and operational owners remain unapproved.

## Testing strategy and acceptance criteria

Use synthetic contract fixtures. Positive case: bound adult patient grants one record to verified clinician, which is read with exact source version and audit receipt. Negative cases: wrong tenant/patient/recipient/purpose, role expiration, revoked or expired grant, re-used idempotency key with different body, concurrent revoke/read, missing audit acknowledgement, stale source, ambiguous identity, missing allergy data, unavailable policy and unauthorized receipt access. Response/log inspection must detect clinical or credential leakage. Tests must eventually exercise actual endpoints and enforcement; documentation validators do not satisfy these cases.

Acceptance requires the complete journey, no disclosure on each negative case, explicit unknown-versus-negative UI, durable audit and demonstrated revocation semantics. Named clinical/security/privacy/architecture acceptance and measured execution results remain missing. No implementation-ready status is awarded by writing this plan.

## Versioning and migration

Version API/schema, grant/policy, source and event envelopes independently. Never overwrite original clinical evidence. Preserve all legacy clauses in the mapping ledger, with implementation corrections explicitly recorded. Map old raw tokens to revoked credentials plus newly issued protected references; do not import public/full-record QR defaults as grants. Unknown blood group remains unknown. Source migrations require dry-run reconciliation, rollback boundaries, old/new identifier mapping and negative authorization fixtures; their executable contracts are not yet defined.
