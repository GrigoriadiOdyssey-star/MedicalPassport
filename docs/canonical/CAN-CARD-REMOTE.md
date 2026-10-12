# CAN-CARD-REMOTE — Remote pediatric cardiology care coordination

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Preserve family consultation, AI translation, ECG/echo review, home wearable/BP/heart-rate/symptom data. A connected device does not prove continuous clinical coverage.

Owner **CAP-TELEMEDICINE**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-CARD-REMOTE. Preserve family consultation, AI translation, ECG/echo review, home wearable/BP/heart-rate/symptom data. A connected device does not prove continuous clinical coverage. Source aliases: 3074, 3676, 4079. Comparison: PED2-CARD-REMOTE.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: Encounter, RemoteReport, MonitoringPlan, EscalationTask. Dependencies: CAP-TELEMEDICINE, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Authorize consultation/monitoring scope → receive provenance-tagged reports → clinician review → acknowledgement/action → follow-up.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-CARD-REMOTE-R-4ffaf4e75ce9"></a>
- **CAN-CARD-REMOTE-R-4ffaf4e75ce9**: Supports remote pediatric cardiology. [source IDs 3074, 3676]

<a id="CAN-CARD-REMOTE-R-d6386a3d8ec3"></a>
- **CAN-CARD-REMOTE-R-d6386a3d8ec3**: ECG Review [source IDs 3074, 3676]

<a id="CAN-CARD-REMOTE-R-203af1695dfc"></a>
- **CAN-CARD-REMOTE-R-203af1695dfc**: Echo Review [source IDs 3074, 3676]

<a id="CAN-CARD-REMOTE-R-7be9b9d114a2"></a>
- **CAN-CARD-REMOTE-R-7be9b9d114a2**: Remote Monitoring [source IDs 3074]

<a id="CAN-CARD-REMOTE-R-64323ab01d08"></a>
- **CAN-CARD-REMOTE-R-64323ab01d08**: Family Consultation [source IDs 3074]

<a id="CAN-CARD-REMOTE-R-24d65c02642b"></a>
- **CAN-CARD-REMOTE-R-24d65c02642b**: AI Translation [source IDs 3074]

<a id="CAN-CARD-REMOTE-R-2b16f181325d"></a>
- **CAN-CARD-REMOTE-R-2b16f181325d**: Video Consultation [source IDs 3676, 4079]

<a id="CAN-CARD-REMOTE-R-680a401d84b7"></a>
- **CAN-CARD-REMOTE-R-680a401d84b7**: Medication Monitoring [source IDs 3676]

<a id="CAN-CARD-REMOTE-R-70b7f76c0ca0"></a>
- **CAN-CARD-REMOTE-R-70b7f76c0ca0**: Follow-up Care [source IDs 3676]

<a id="CAN-CARD-REMOTE-R-129031279fcc"></a>
- **CAN-CARD-REMOTE-R-129031279fcc**: Supports remote pediatric cardiac care. [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-5a5b427f7cdd"></a>
- **CAN-CARD-REMOTE-R-5a5b427f7cdd**: Home Monitoring [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-06156a7e8d89"></a>
- **CAN-CARD-REMOTE-R-06156a7e8d89**: Wearable Data [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-79e48fe77c57"></a>
- **CAN-CARD-REMOTE-R-79e48fe77c57**: Blood Pressure [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-4df979553442"></a>
- **CAN-CARD-REMOTE-R-4df979553442**: Heart Rate [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-349de6d74617"></a>
- **CAN-CARD-REMOTE-R-349de6d74617**: Symptom Diaries [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-fcb83ab75eb5"></a>
- **CAN-CARD-REMOTE-R-fcb83ab75eb5**: ECG Devices [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-b43929b3e4a8"></a>
- **CAN-CARD-REMOTE-R-b43929b3e4a8**: Follow-up [source IDs 4079]

<a id="CAN-CARD-REMOTE-R-4cd39c489795"></a>
- **CAN-CARD-REMOTE-R-4cd39c489795**: Supports escalation workflows based on predefined clinical criteria. [source IDs 4079]

## Preserved source metadata

<a id="CAN-CARD-REMOTE-M-17dd6624cc5b"></a>
- **CAN-CARD-REMOTE-M-17dd6624cc5b**: Supports [source IDs 3074, 3676]

<a id="CAN-CARD-REMOTE-M-2fc1e43d2c6f"></a>
- **CAN-CARD-REMOTE-M-2fc1e43d2c6f**: Status [source IDs 3074, 3676, 4079]

<a id="CAN-CARD-REMOTE-M-8369b8654a18"></a>
- **CAN-CARD-REMOTE-M-8369b8654a18**: Documentation [source IDs 3074, 3676, 4079]

<a id="CAN-CARD-REMOTE-M-9005f6fabd68"></a>
- **CAN-CARD-REMOTE-M-9005f6fabd68**: --- [source IDs 3074, 3676, 4079]

<a id="CAN-CARD-REMOTE-M-1b585a0b235b"></a>
- **CAN-CARD-REMOTE-M-1b585a0b235b**: Integrates [source IDs 4079]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
