# Shared data architecture — gap-fill contracts
Revision 2026-09-14. Draft logical schemas; no application/database implementation.

## Authority and record kinds
Original source IDs 1–5175 are immutable documentation identities. CAP-* denotes proposed shared owners, PRF-* prior profile drafts and EXT-* canonical extension drafts. None acquires an original_id. Registry classification is a proposal, not production ownership approval.

Clinical fact, patient report, clinician assessment, model inference, forecast and scenario are separate records. A single evidence envelope carries tenant, subject reference, purpose, effective/recorded time, source references and versions, epistemic_status, validation_state, author/reviewer, jurisdiction, retention class and consent/governance reference. Missing, absent, not tested and contradictory values remain distinct. Correction creates a new attributable version linked to the prior record; it does not erase provenance.

| Logical entity | Proposed authority | Required distinctions |
|---|---|---|
| Patient / IdentityLink | CAP-IDENTITY | partner identity versus internal ID; ambiguous match quarantined |
| Consent / Delegation | CAP-CONSENT | purpose, scope, expiry, revocation, guardian authority and adult transition |
| Observation / ClinicalAssessment | CAP-DATA and clinical domain | measurement/report/inference, method, unit, time, source and reviewer |
| MedicationExposure | CAP-MEDICATION | reconciled or reported use versus hypothetical alternative |
| Prescription / Dispense / Administration | CAP-PRESCRIPTION / CAP-PHARMACY / CAP-ADMINISTRATION | separately authorized order, dispensing and administration lifecycles |
| Laboratory / Genomic report | CAP-LABORATORY | sample, result/correction, assay/pipeline, reference ranges/build, QC |
| Imaging source | CAP-IMAGING | study/series/instance, patient identity, modality and derivation |
| Device signal | CAP-DEVICES | device/calibration, timestamp/time zone, quality, disconnect and gaps |
| Assessment / EvidenceReference | CAP-CDS | approved evidence versus hypothesis; context/evidence/model versions |
| TwinSnapshot / Scenario | CAP-TWIN | immutable input snapshot, generic/derived anatomy, assumptions and horizon |
| Connector / MappingRelease | CAP-INTEROP | candidate, validated, approved, active, revoked; loss/authority gates |
| ModelRelease / Inference | CAP-AI | task eligibility, provider terms, execution versus clinical approval |
| Cohort / Hypothesis / EvidenceRelease | CAP-RESEARCH | governed processing, disclosure, validation and clinical promotion |
| AuditEvent | CAP-AUDIT | actor/purpose/decision/object version without unnecessary PHI |

## Temporal, semantic and lifecycle contracts
Record effective time separately from ingestion and correction time. Preserve original unit/value and transformation with pinned terminology versions. Clinical estimates retain the equation/model and source inputs. An inferred value cannot become measured by being exported or accepted for display. A clinician may create a separately attributed assessment that references it.

Epistemic status is independent of order lifecycle and validation lifecycle. An approved SIMULATED scenario remains simulated. An OBSERVED record can still be unverified or wrong. “Approved” always names scope, approver and artifact hash.
Candidate FHIR resources include Patient, RelatedPerson, Encounter, Condition, Observation, DiagnosticReport, MedicationStatement, MedicationRequest, AllergyIntolerance, ImagingStudy, DocumentReference, Consent, Provenance and AuditEvent. Resource names alone do not establish interoperability; implementation guides, terminology licenses and jurisdiction/partner profiles remain required.

## Permissions, events and failure handling
Authorization combines tenant, role, relationship, purpose, consent/delegation and jurisdiction. Enforce it on reads, derived datasets, exports and caches. Guardian powers and adolescent confidentiality require explicit policy and review, not a global parental override. Emergency access needs a separately scoped, attributable policy.
Use immutable version references in asynchronous events. Idempotency, ordering and replay rules protect against duplicate imports and stale computations. Cross-patient/tenant references fail closed. Source updates publish invalidation to dependent assessments/scenarios; consumers cannot silently keep an old result as current. Events/logs contain opaque IDs, with detailed clinical payload behind authorized retrieval.

## Retention, research and validation
Encrypt data in transit and at rest, isolate secrets and linkage keys, audit access, minimize derived copies and implement domain-specific retention/deletion legal holds with reviewed policy. Pseudonymized genomic/rare-disease records remain sensitive. Clinical permission does not automatically permit research, training or external processing. Rights withdrawal triggers future-access revocation and a governed review of retained artifacts.

Audit tooling checks source/registry identities, evidence hashes, draft gates and metadata. It does not validate live permissions, full FHIR conformance, numerical models or clinical safety. Acceptance of this architecture requires approved entity ownership, migrations, policy decisions, partner profiles and end-to-end failure tests in a later implementation stage.
