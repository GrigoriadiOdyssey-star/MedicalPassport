# CORE-CAP-AUDIT — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: AuditEvent, ActorReference, PolicyVersion, RedactedChangeReference, IntegrityEvidence. Dependencies: CAP-AUDIT, CAP-DATA, CAP-CONSENT.

Capture authorized producer event → redact secrets and clinical payloads → append with source/time/correlation → durable integrity acknowledgement → controlled review/export with its own audit. Old/new values become governed redacted change references; retention requires approved policy.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M08-AUDIT

Original IDs: 27.

Audit actions preserve actor/session/entity/result/security-investigation provenance. Raw old_value/new_value, IP and location legacy fields need minimized/redacted or encrypted-reference migration; never log bearer tokens or unrestricted health payloads. Compliance labels remain goals, not certifications.

Capture authorized producer event → redact secrets and clinical payloads → append with source/time/correlation → durable integrity acknowledgement → controlled review/export with its own audit. Old/new values become governed redacted change references; retention requires approved policy.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-AUDIT-852d7bfedb6a2153"></a>
- **M08-CAP-AUDIT-852d7bfedb6a2153**: Stores every important system action for security, compliance and troubleshooting.
  Origin: original 27

<a id="M08-CAP-AUDIT-c91610423a46692c"></a>
- **M08-CAP-AUDIT-c91610423a46692c**: id (UUID)
  Origin: original 27

<a id="M08-CAP-AUDIT-ff6fb316f9bc6c33"></a>
- **M08-CAP-AUDIT-ff6fb316f9bc6c33**: user_id
  Origin: original 27

<a id="M08-CAP-AUDIT-4775059172374e0e"></a>
- **M08-CAP-AUDIT-4775059172374e0e**: action
  Origin: original 27

<a id="M08-CAP-AUDIT-be5847cfbc9690e0"></a>
- **M08-CAP-AUDIT-be5847cfbc9690e0**: entity_type
  Origin: original 27

<a id="M08-CAP-AUDIT-0d131945142eeee8"></a>
- **M08-CAP-AUDIT-0d131945142eeee8**: entity_id
  Origin: original 27

<a id="M08-CAP-AUDIT-8406d83b95bbc2ef"></a>
- **M08-CAP-AUDIT-8406d83b95bbc2ef**: old_value
  Origin: original 27

<a id="M08-CAP-AUDIT-7b75e49845468dd8"></a>
- **M08-CAP-AUDIT-7b75e49845468dd8**: new_value
  Origin: original 27

<a id="M08-CAP-AUDIT-1ca4e36472bad879"></a>
- **M08-CAP-AUDIT-1ca4e36472bad879**: performed_by
  Origin: original 27

<a id="M08-CAP-AUDIT-846f3171f3a09846"></a>
- **M08-CAP-AUDIT-846f3171f3a09846**: device_type
  Origin: original 27

<a id="M08-CAP-AUDIT-b82a6b3fe559c7c3"></a>
- **M08-CAP-AUDIT-b82a6b3fe559c7c3**: device_name
  Origin: original 27

<a id="M08-CAP-AUDIT-09e56e311e862564"></a>
- **M08-CAP-AUDIT-09e56e311e862564**: operating_system
  Origin: original 27

<a id="M08-CAP-AUDIT-3bcd0e158140726e"></a>
- **M08-CAP-AUDIT-3bcd0e158140726e**: browser
  Origin: original 27

<a id="M08-CAP-AUDIT-2c2262c559f21e3b"></a>
- **M08-CAP-AUDIT-2c2262c559f21e3b**: ip_address
  Origin: original 27

<a id="M08-CAP-AUDIT-9fe94e819c56a7a3"></a>
- **M08-CAP-AUDIT-9fe94e819c56a7a3**: country
  Origin: original 27

<a id="M08-CAP-AUDIT-964c74225c44f6e8"></a>
- **M08-CAP-AUDIT-964c74225c44f6e8**: city
  Origin: original 27

<a id="M08-CAP-AUDIT-84c40dcf2044ed93"></a>
- **M08-CAP-AUDIT-84c40dcf2044ed93**: session_id
  Origin: original 27

<a id="M08-CAP-AUDIT-cb80ad7ae84cfd9a"></a>
- **M08-CAP-AUDIT-cb80ad7ae84cfd9a**: risk_level
  Origin: original 27

<a id="M08-CAP-AUDIT-83df3efea1e87b1e"></a>
- **M08-CAP-AUDIT-83df3efea1e87b1e**: success
  Origin: original 27

<a id="M08-CAP-AUDIT-f32188893b724da5"></a>
- **M08-CAP-AUDIT-f32188893b724da5**: failure_reason
  Origin: original 27

<a id="M08-CAP-AUDIT-bcc951dbdead2bf5"></a>
- **M08-CAP-AUDIT-bcc951dbdead2bf5**: created_at
  Origin: original 27

<a id="M08-CAP-AUDIT-906f29dbdb5b00aa"></a>
- **M08-CAP-AUDIT-906f29dbdb5b00aa**: Audit Log
  Origin: original 27

<a id="M08-CAP-AUDIT-46172ef655d51ea4"></a>
- **M08-CAP-AUDIT-46172ef655d51ea4**: ├── User
  Origin: original 27

<a id="M08-CAP-AUDIT-f4cf69f73e2d6134"></a>
- **M08-CAP-AUDIT-f4cf69f73e2d6134**: ├── Authentication
  Origin: original 27

<a id="M08-CAP-AUDIT-b7f0d2db15272a43"></a>
- **M08-CAP-AUDIT-b7f0d2db15272a43**: ├── QR Sessions
  Origin: original 27

<a id="M08-CAP-AUDIT-d3290df0dc43733d"></a>
- **M08-CAP-AUDIT-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 27

<a id="M08-CAP-AUDIT-93522f774f6d0bd5"></a>
- **M08-CAP-AUDIT-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 27

<a id="M08-CAP-AUDIT-93878a6ec6a84276"></a>
- **M08-CAP-AUDIT-93878a6ec6a84276**: ├── Payments
  Origin: original 27

<a id="M08-CAP-AUDIT-a7f2ddd3ac9459b5"></a>
- **M08-CAP-AUDIT-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 27

<a id="M08-CAP-AUDIT-a35a4753309e049e"></a>
- **M08-CAP-AUDIT-a35a4753309e049e**: ├── Security
  Origin: original 27

<a id="M08-CAP-AUDIT-37bfdffca1a32095"></a>
- **M08-CAP-AUDIT-37bfdffca1a32095**: Future Features
  Origin: original 27

<a id="M08-CAP-AUDIT-500ce0c1f81756d7"></a>
- **M08-CAP-AUDIT-500ce0c1f81756d7**: Security Monitoring
  Origin: original 27

<a id="M08-CAP-AUDIT-d3c6da22cf092259"></a>
- **M08-CAP-AUDIT-d3c6da22cf092259**: Fraud Detection
  Origin: original 27

<a id="M08-CAP-AUDIT-04cb21048691a59f"></a>
- **M08-CAP-AUDIT-04cb21048691a59f**: User Activity Timeline
  Origin: original 27

<a id="M08-CAP-AUDIT-7ef3a44d27115e92"></a>
- **M08-CAP-AUDIT-7ef3a44d27115e92**: Administrator Audit
  Origin: original 27

<a id="M08-CAP-AUDIT-8d02f72c1c0a1863"></a>
- **M08-CAP-AUDIT-8d02f72c1c0a1863**: GDPR Compliance
  Origin: original 27

<a id="M08-CAP-AUDIT-c319f7ea6797eff9"></a>
- **M08-CAP-AUDIT-c319f7ea6797eff9**: HIPAA Compliance
  Origin: original 27

<a id="M08-CAP-AUDIT-6ca89f2eeaeb9fcf"></a>
- **M08-CAP-AUDIT-6ca89f2eeaeb9fcf**: Incident Investigation
  Origin: original 27

## Preserved source metadata

<a id="M08-CAP-AUDIT-44bda04132a7444c"></a>
- **M08-CAP-AUDIT-44bda04132a7444c**: # Audit Logs Table

<a id="M08-CAP-AUDIT-2f5fdcca89ef8e56"></a>
- **M08-CAP-AUDIT-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-AUDIT-6f33acf3afb37064"></a>
- **M08-CAP-AUDIT-6f33acf3afb37064**: ---

<a id="M08-CAP-AUDIT-90dc9b75b60f53a5"></a>
- **M08-CAP-AUDIT-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-AUDIT-2fac6cbf308c244b"></a>
- **M08-CAP-AUDIT-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-AUDIT-5ba74d8fcc7b20cc"></a>
- **M08-CAP-AUDIT-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-AUDIT-d5232cbd3a326267"></a>
- **M08-CAP-AUDIT-d5232cbd3a326267**: Documentation

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
