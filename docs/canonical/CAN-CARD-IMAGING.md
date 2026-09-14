# CAN-CARD-IMAGING — Pediatric multimodality cardiac imaging

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Retain nuclear cardiology, CT angiography, catheterization references, 3D reconstruction and ventricular-volume detail; a generic model is not patient-derived anatomy.

Owner **CAP-IMAGING**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-CARD-IMAGING. Retain nuclear cardiology, CT angiography, catheterization references, 3D reconstruction and ventricular-volume detail; a generic model is not patient-derived anatomy. Source aliases: 3069, 3671, 4070. Comparison: PED2-CARD-IMAGING.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: ImagingStudy, ImagingSeries, ReconstructionReference, Report. Dependencies: CAP-IMAGING, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Link CT/MRI/echo/nuclear/catheterization study references → validate acquisition/geometry → specialist review → compare compatible studies.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-CARD-IMAGING-R-dd10b967d575"></a>
- **CAN-CARD-IMAGING-R-dd10b967d575**: Maintains pediatric cardiac imaging. [source IDs 3069, 3671]

<a id="CAN-CARD-IMAGING-R-3cd905d91ad6"></a>
- **CAN-CARD-IMAGING-R-3cd905d91ad6**: Echocardiography [source IDs 3069, 3671]

<a id="CAN-CARD-IMAGING-R-df7e6cb05e35"></a>
- **CAN-CARD-IMAGING-R-df7e6cb05e35**: CT [source IDs 3069]

<a id="CAN-CARD-IMAGING-R-090cdf5efdb6"></a>
- **CAN-CARD-IMAGING-R-090cdf5efdb6**: MRI [source IDs 3069]

<a id="CAN-CARD-IMAGING-R-29225a090056"></a>
- **CAN-CARD-IMAGING-R-29225a090056**: Cardiac Catheterization [source IDs 3069]

<a id="CAN-CARD-IMAGING-R-8e8e5efd65d9"></a>
- **CAN-CARD-IMAGING-R-8e8e5efd65d9**: AI Imaging Analysis [source IDs 3069]

<a id="CAN-CARD-IMAGING-R-19aadc272b90"></a>
- **CAN-CARD-IMAGING-R-19aadc272b90**: Cardiac MRI [source IDs 3671, 4070]

<a id="CAN-CARD-IMAGING-R-d606fad1d193"></a>
- **CAN-CARD-IMAGING-R-d606fad1d193**: CT Angiography [source IDs 3671]

<a id="CAN-CARD-IMAGING-R-cb93f20ed8fa"></a>
- **CAN-CARD-IMAGING-R-cb93f20ed8fa**: Nuclear Cardiology [source IDs 3671]

<a id="CAN-CARD-IMAGING-R-44ad10f96ce2"></a>
- **CAN-CARD-IMAGING-R-44ad10f96ce2**: AI Image Analysis [source IDs 3671]

<a id="CAN-CARD-IMAGING-R-611b5f416aa7"></a>
- **CAN-CARD-IMAGING-R-611b5f416aa7**: Maintains advanced pediatric cardiac imaging. [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-ea7e4365465a"></a>
- **CAN-CARD-IMAGING-R-ea7e4365465a**: Cardiac CT [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-dc9d93e07ce9"></a>
- **CAN-CARD-IMAGING-R-dc9d93e07ce9**: 3D Reconstruction [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-aaf70eaa5836"></a>
- **CAN-CARD-IMAGING-R-aaf70eaa5836**: Ventricular Volumes [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-9907728c2939"></a>
- **CAN-CARD-IMAGING-R-9907728c2939**: Myocardial Assessment [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-267e1b8b12af"></a>
- **CAN-CARD-IMAGING-R-267e1b8b12af**: Congenital Anatomy [source IDs 4070]

<a id="CAN-CARD-IMAGING-R-9e59e7c53b9f"></a>
- **CAN-CARD-IMAGING-R-9e59e7c53b9f**: Longitudinal Imaging Comparison [source IDs 4070]

## Preserved source metadata

<a id="CAN-CARD-IMAGING-M-17dd6624cc5b"></a>
- **CAN-CARD-IMAGING-M-17dd6624cc5b**: Supports [source IDs 3069, 3671, 4070]

<a id="CAN-CARD-IMAGING-M-2fc1e43d2c6f"></a>
- **CAN-CARD-IMAGING-M-2fc1e43d2c6f**: Status [source IDs 3069, 3671, 4070]

<a id="CAN-CARD-IMAGING-M-8369b8654a18"></a>
- **CAN-CARD-IMAGING-M-8369b8654a18**: Documentation [source IDs 3069, 3671, 4070]

<a id="CAN-CARD-IMAGING-M-9005f6fabd68"></a>
- **CAN-CARD-IMAGING-M-9005f6fabd68**: --- [source IDs 3069, 3671, 4070]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
