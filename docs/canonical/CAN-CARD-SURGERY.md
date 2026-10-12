# CAN-CARD-SURGERY — Pediatric cardiac procedure and follow-up record

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Retain corrective/palliative surgery, valve and great-vessel detail, hospital/surgeon identity and imaging follow-up. AI does not authorize surgery.

Owner **CAP-ENCOUNTER**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-CARD-SURGERY. Retain corrective/palliative surgery, valve and great-vessel detail, hospital/surgeon identity and imaging follow-up. AI does not authorize surgery. Source aliases: 847, 3067, 3669, 4072. Comparison: PED2-CARD-SURGERY.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: Procedure, SurgicalEpisode, ComplicationRecord, FollowUpPlan. Dependencies: CAP-ENCOUNTER, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Preoperative assessment → authorized plan → procedure documentation → postoperative/ICU follow-up → longitudinal outcomes.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-CARD-SURGERY-R-9e367d655f35"></a>
- **CAN-CARD-SURGERY-R-9e367d655f35**: Stores pediatric cardiac surgical history. [source IDs 847]

<a id="CAN-CARD-SURGERY-R-443bb1c6c7c0"></a>
- **CAN-CARD-SURGERY-R-443bb1c6c7c0**: Procedure [source IDs 847]

<a id="CAN-CARD-SURGERY-R-c0c028294227"></a>
- **CAN-CARD-SURGERY-R-c0c028294227**: Hospital [source IDs 847]

<a id="CAN-CARD-SURGERY-R-7670daed9586"></a>
- **CAN-CARD-SURGERY-R-7670daed9586**: Surgeon [source IDs 847]

<a id="CAN-CARD-SURGERY-R-b43929b3e4a8"></a>
- **CAN-CARD-SURGERY-R-b43929b3e4a8**: Follow-up [source IDs 847]

<a id="CAN-CARD-SURGERY-R-deaa62d731a2"></a>
- **CAN-CARD-SURGERY-R-deaa62d731a2**: Supports pediatric cardiac surgery. [source IDs 3067]

<a id="CAN-CARD-SURGERY-R-a28fce4c81a6"></a>
- **CAN-CARD-SURGERY-R-a28fce4c81a6**: Corrective Surgery [source IDs 3067]

<a id="CAN-CARD-SURGERY-R-857a1c2fab72"></a>
- **CAN-CARD-SURGERY-R-857a1c2fab72**: Palliative Surgery [source IDs 3067]

<a id="CAN-CARD-SURGERY-R-0d2f3bf48b21"></a>
- **CAN-CARD-SURGERY-R-0d2f3bf48b21**: Valve Repair [source IDs 3067]

<a id="CAN-CARD-SURGERY-R-5d40d616551c"></a>
- **CAN-CARD-SURGERY-R-5d40d616551c**: Great Vessel Reconstruction [source IDs 3067]

<a id="CAN-CARD-SURGERY-R-5f2800a8461f"></a>
- **CAN-CARD-SURGERY-R-5f2800a8461f**: Postoperative Monitoring [source IDs 3067, 3669, 4072]

<a id="CAN-CARD-SURGERY-R-d5e14a22339b"></a>
- **CAN-CARD-SURGERY-R-d5e14a22339b**: Supports pediatric cardiac surgery pathways. [source IDs 3669]

<a id="CAN-CARD-SURGERY-R-23efa02161f3"></a>
- **CAN-CARD-SURGERY-R-23efa02161f3**: Preoperative Assessment [source IDs 3669, 4072]

<a id="CAN-CARD-SURGERY-R-17c895056dab"></a>
- **CAN-CARD-SURGERY-R-17c895056dab**: Surgical Planning [source IDs 3669, 4072]

<a id="CAN-CARD-SURGERY-R-b3690f2221e1"></a>
- **CAN-CARD-SURGERY-R-b3690f2221e1**: ICU Follow-up [source IDs 3669]

<a id="CAN-CARD-SURGERY-R-64f70fb4c290"></a>
- **CAN-CARD-SURGERY-R-64f70fb4c290**: Long-term Outcomes [source IDs 3669]

<a id="CAN-CARD-SURGERY-R-9bf5beaf900e"></a>
- **CAN-CARD-SURGERY-R-9bf5beaf900e**: Supports pediatric cardiac surgery workflows. [source IDs 4072]

<a id="CAN-CARD-SURGERY-R-2b39d24b38c5"></a>
- **CAN-CARD-SURGERY-R-2b39d24b38c5**: Procedure Documentation [source IDs 4072]

<a id="CAN-CARD-SURGERY-R-d487f91bff3d"></a>
- **CAN-CARD-SURGERY-R-d487f91bff3d**: Complication Tracking [source IDs 4072]

<a id="CAN-CARD-SURGERY-R-8ffbfee6a1c2"></a>
- **CAN-CARD-SURGERY-R-8ffbfee6a1c2**: Imaging Follow-up [source IDs 4072]

<a id="CAN-CARD-SURGERY-R-86f217c295ee"></a>
- **CAN-CARD-SURGERY-R-86f217c295ee**: Longitudinal Outcomes [source IDs 4072]

## Preserved source metadata

<a id="CAN-CARD-SURGERY-M-9e0c21901680"></a>
- **CAN-CARD-SURGERY-M-9e0c21901680**: # Pediatric Heart Surgery Registry [source IDs 847]

<a id="CAN-CARD-SURGERY-M-17dd6624cc5b"></a>
- **CAN-CARD-SURGERY-M-17dd6624cc5b**: Supports [source IDs 847, 3067, 3669, 4072]

<a id="CAN-CARD-SURGERY-M-2fc1e43d2c6f"></a>
- **CAN-CARD-SURGERY-M-2fc1e43d2c6f**: Status [source IDs 847, 3067, 3669, 4072]

<a id="CAN-CARD-SURGERY-M-8369b8654a18"></a>
- **CAN-CARD-SURGERY-M-8369b8654a18**: Documentation [source IDs 847, 3067, 3669, 4072]

<a id="CAN-CARD-SURGERY-M-9005f6fabd68"></a>
- **CAN-CARD-SURGERY-M-9005f6fabd68**: --- [source IDs 847, 3067, 3669, 4072]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
