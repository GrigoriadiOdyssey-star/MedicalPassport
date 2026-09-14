# CAN-CARD-RECORD — Longitudinal pediatric cardiology record index

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Own the index and provenance, not duplicate diagnoses or measurements. Preserve ECG, catheterization, surgery, medication history and functional status.

Owner **CAP-DATA**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-CARD-REGISTRY. Own the index and provenance, not duplicate diagnoses or measurements. Preserve ECG, catheterization, surgery, medication history and functional status. Source aliases: 3062, 3662, 4062. Comparison: PED2-CARD-REGISTRY.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: SpecialtyRecordIndex, ClinicalReference, ContextSnapshot. Dependencies: CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Resolve authorized source records → reconcile identity/version → index timeline → publish bounded summary.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-CARD-RECORD-R-53caf1fdd747"></a>
- **CAN-CARD-RECORD-R-53caf1fdd747**: Maintains comprehensive pediatric cardiology records. [source IDs 3062, 3662]

<a id="CAN-CARD-RECORD-R-d161e65ce014"></a>
- **CAN-CARD-RECORD-R-d161e65ce014**: Congenital Defects [source IDs 3062]

<a id="CAN-CARD-RECORD-R-3cd905d91ad6"></a>
- **CAN-CARD-RECORD-R-3cd905d91ad6**: Echocardiography [source IDs 3062, 3662, 4062]

<a id="CAN-CARD-RECORD-R-cbbc65fcbfd5"></a>
- **CAN-CARD-RECORD-R-cbbc65fcbfd5**: ECG [source IDs 3062, 4062]

<a id="CAN-CARD-RECORD-R-a42c0313e775"></a>
- **CAN-CARD-RECORD-R-a42c0313e775**: Catheterization [source IDs 3062, 4062]

<a id="CAN-CARD-RECORD-R-7e3c197f4e58"></a>
- **CAN-CARD-RECORD-R-7e3c197f4e58**: Surgery [source IDs 3062]

<a id="CAN-CARD-RECORD-R-06e4b9df2f17"></a>
- **CAN-CARD-RECORD-R-06e4b9df2f17**: Longitudinal Monitoring [source IDs 3062, 3662]

<a id="CAN-CARD-RECORD-R-32814bed6f27"></a>
- **CAN-CARD-RECORD-R-32814bed6f27**: Cardiac Diagnoses [source IDs 3662]

<a id="CAN-CARD-RECORD-R-3b75093163e4"></a>
- **CAN-CARD-RECORD-R-3b75093163e4**: ECG Data [source IDs 3662]

<a id="CAN-CARD-RECORD-R-0766f15902ef"></a>
- **CAN-CARD-RECORD-R-0766f15902ef**: Imaging [source IDs 3662, 4062]

<a id="CAN-CARD-RECORD-R-255756747fd3"></a>
- **CAN-CARD-RECORD-R-255756747fd3**: Surgical History [source IDs 3662, 4062]

<a id="CAN-CARD-RECORD-R-cc4a943a70a9"></a>
- **CAN-CARD-RECORD-R-cc4a943a70a9**: Maintains longitudinal pediatric cardiac records. [source IDs 4062]

<a id="CAN-CARD-RECORD-R-e73c76ffd887"></a>
- **CAN-CARD-RECORD-R-e73c76ffd887**: Diagnoses [source IDs 4062]

<a id="CAN-CARD-RECORD-R-c0f807a9d457"></a>
- **CAN-CARD-RECORD-R-c0f807a9d457**: Medication History [source IDs 4062]

<a id="CAN-CARD-RECORD-R-10f13a542fa8"></a>
- **CAN-CARD-RECORD-R-10f13a542fa8**: Functional Status [source IDs 4062]

## Preserved source metadata

<a id="CAN-CARD-RECORD-M-17dd6624cc5b"></a>
- **CAN-CARD-RECORD-M-17dd6624cc5b**: Supports [source IDs 3062, 3662, 4062]

<a id="CAN-CARD-RECORD-M-2fc1e43d2c6f"></a>
- **CAN-CARD-RECORD-M-2fc1e43d2c6f**: Status [source IDs 3062, 3662, 4062]

<a id="CAN-CARD-RECORD-M-8369b8654a18"></a>
- **CAN-CARD-RECORD-M-8369b8654a18**: Documentation [source IDs 3062, 3662, 4062]

<a id="CAN-CARD-RECORD-M-9005f6fabd68"></a>
- **CAN-CARD-RECORD-M-9005f6fabd68**: --- [source IDs 3062, 3662, 4062]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
