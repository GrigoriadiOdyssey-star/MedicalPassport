# CAN-CARD-ECHO — Pediatric echocardiography record

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Preserve Doppler, valve/chamber/ventricular/congenital assessment and source images/reports. AI image interpretation is separately governed.

Owner **CAP-IMAGING**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-CARD-ECHO. Preserve Doppler, valve/chamber/ventricular/congenital assessment and source images/reports. AI image interpretation is separately governed. Source aliases: 846, 3064, 3664, 4064. Comparison: PED2-CARD-ECHO.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: ImagingStudy, ImagingMeasurement, DiagnosticReport. Dependencies: CAP-IMAGING, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Acquire authorized echo reference → validate identity/measurement metadata → specialist report → longitudinal comparison.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-CARD-ECHO-R-8c07d07d32af"></a>
- **CAN-CARD-ECHO-R-8c07d07d32af**: Stores pediatric echocardiograms. [source IDs 846]

<a id="CAN-CARD-ECHO-R-ff3a7199bfc3"></a>
- **CAN-CARD-ECHO-R-ff3a7199bfc3**: Images [source IDs 846]

<a id="CAN-CARD-ECHO-R-7e88519dba5b"></a>
- **CAN-CARD-ECHO-R-7e88519dba5b**: Measurements [source IDs 846]

<a id="CAN-CARD-ECHO-R-3a56654e8ce0"></a>
- **CAN-CARD-ECHO-R-3a56654e8ce0**: Physician Reports [source IDs 846]

<a id="CAN-CARD-ECHO-R-938f90236ccf"></a>
- **CAN-CARD-ECHO-R-938f90236ccf**: Supports pediatric cardiac ultrasound. [source IDs 3064]

<a id="CAN-CARD-ECHO-R-0c056b421c13"></a>
- **CAN-CARD-ECHO-R-0c056b421c13**: Structural Assessment [source IDs 3064, 3664]

<a id="CAN-CARD-ECHO-R-8a65a1ba1d52"></a>
- **CAN-CARD-ECHO-R-8a65a1ba1d52**: Doppler Analysis [source IDs 3064]

<a id="CAN-CARD-ECHO-R-14929a6c30e4"></a>
- **CAN-CARD-ECHO-R-14929a6c30e4**: Ventricular Function [source IDs 3064, 3664, 4064]

<a id="CAN-CARD-ECHO-R-cc7fa228ecbc"></a>
- **CAN-CARD-ECHO-R-cc7fa228ecbc**: Valve Assessment [source IDs 3064, 3664, 4064]

<a id="CAN-CARD-ECHO-R-06834973cd48"></a>
- **CAN-CARD-ECHO-R-06834973cd48**: Congenital Heart Evaluation [source IDs 3064]

<a id="CAN-CARD-ECHO-R-2dd1a9cd4818"></a>
- **CAN-CARD-ECHO-R-2dd1a9cd4818**: Integrated with AI-assisted image interpretation. [source IDs 3064]

<a id="CAN-CARD-ECHO-R-6fd0ea267e75"></a>
- **CAN-CARD-ECHO-R-6fd0ea267e75**: Supports pediatric echocardiography. [source IDs 3664, 4064]

<a id="CAN-CARD-ECHO-R-6b45952bdf59"></a>
- **CAN-CARD-ECHO-R-6b45952bdf59**: Doppler Studies [source IDs 3664]

<a id="CAN-CARD-ECHO-R-b7344c031add"></a>
- **CAN-CARD-ECHO-R-b7344c031add**: AI-assisted Echo Analysis [source IDs 3664]

<a id="CAN-CARD-ECHO-R-c46c83562ee2"></a>
- **CAN-CARD-ECHO-R-c46c83562ee2**: 2D Echocardiography [source IDs 4064]

<a id="CAN-CARD-ECHO-R-77d26df524c7"></a>
- **CAN-CARD-ECHO-R-77d26df524c7**: Doppler [source IDs 4064]

<a id="CAN-CARD-ECHO-R-b790cdd54257"></a>
- **CAN-CARD-ECHO-R-b790cdd54257**: Chamber Measurements [source IDs 4064]

<a id="CAN-CARD-ECHO-R-267e1b8b12af"></a>
- **CAN-CARD-ECHO-R-267e1b8b12af**: Congenital Anatomy [source IDs 4064]

<a id="CAN-CARD-ECHO-R-acde0dd77f4e"></a>
- **CAN-CARD-ECHO-R-acde0dd77f4e**: Longitudinal Comparison [source IDs 4064]

<a id="CAN-CARD-ECHO-R-8000c25bce4b"></a>
- **CAN-CARD-ECHO-R-8000c25bce4b**: AI-assisted Image Analysis [source IDs 4064]

## Preserved source metadata

<a id="CAN-CARD-ECHO-M-a4d9269a108a"></a>
- **CAN-CARD-ECHO-M-a4d9269a108a**: # Pediatric Echocardiography Archive [source IDs 846]

<a id="CAN-CARD-ECHO-M-17dd6624cc5b"></a>
- **CAN-CARD-ECHO-M-17dd6624cc5b**: Supports [source IDs 846, 3064, 3664, 4064]

<a id="CAN-CARD-ECHO-M-2fc1e43d2c6f"></a>
- **CAN-CARD-ECHO-M-2fc1e43d2c6f**: Status [source IDs 846, 3064, 3664, 4064]

<a id="CAN-CARD-ECHO-M-8369b8654a18"></a>
- **CAN-CARD-ECHO-M-8369b8654a18**: Documentation [source IDs 846, 3064, 3664, 4064]

<a id="CAN-CARD-ECHO-M-9005f6fabd68"></a>
- **CAN-CARD-ECHO-M-9005f6fabd68**: --- [source IDs 846, 3064, 3664, 4064]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
