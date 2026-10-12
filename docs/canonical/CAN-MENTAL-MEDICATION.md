# CAN-MENTAL-MEDICATION — Pediatric psychotropic medication safety profile

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Preserve start/stop/titration, growth/weight, cardiovascular/metabolic/neurological/sleep effects, adherence, response and adverse reactions. No autonomous prescribing/dose changes.

Owner **CAP-CDS**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-MENTAL-MEDICATION. Preserve start/stop/titration, growth/weight, cardiovascular/metabolic/neurological/sleep effects, adherence, response and adverse reactions. No autonomous prescribing/dose changes. Source aliases: 3993, 4842, 5166. Comparison: PED2-MENTAL-MEDICATION.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: MedicationEpisodeReference, DoseChangeReference, MonitoringRequirement, MonitoringResult, ResponseAssessment. Dependencies: CAP-CDS, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-MEDICATION, CAP-LABORATORY, CAP-AI. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Reconcile exposure → verify indication/context → evaluate approved monitoring rules → clinician review → separately authorized order action.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-MENTAL-MEDICATION-R-64a27a6be597"></a>
- **CAN-MENTAL-MEDICATION-R-64a27a6be597**: Supports clinician-supervised psychiatric medication management. [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-R-bb5561e96d69"></a>
- **CAN-MENTAL-MEDICATION-R-bb5561e96d69**: Medication Registry [source IDs 3993, 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-14b7fb321b1c"></a>
- **CAN-MENTAL-MEDICATION-R-14b7fb321b1c**: Dose Tracking [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-R-7220107f14f0"></a>
- **CAN-MENTAL-MEDICATION-R-7220107f14f0**: Adverse Effects [source IDs 3993, 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-24bc8031bc14"></a>
- **CAN-MENTAL-MEDICATION-R-24bc8031bc14**: Drug Interactions [source IDs 3993, 4842]

<a id="CAN-MENTAL-MEDICATION-R-23598ca51009"></a>
- **CAN-MENTAL-MEDICATION-R-23598ca51009**: Response Monitoring [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-R-95141fd7445a"></a>
- **CAN-MENTAL-MEDICATION-R-95141fd7445a**: Treatment History [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-R-74ab1f68cbe1"></a>
- **CAN-MENTAL-MEDICATION-R-74ab1f68cbe1**: Medication Reconciliation [source IDs 3993, 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-9d46fae15e65"></a>
- **CAN-MENTAL-MEDICATION-R-9d46fae15e65**: All prescribing remains subject to licensed clinician review and local regulations. [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-R-7b2feeccf778"></a>
- **CAN-MENTAL-MEDICATION-R-7b2feeccf778**: Provide medication safety and longitudinal monitoring for pediatric psychotropic treatment. [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-9344e65d0c66"></a>
- **CAN-MENTAL-MEDICATION-R-9344e65d0c66**: Indication [source IDs 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-1eedfb4e4326"></a>
- **CAN-MENTAL-MEDICATION-R-1eedfb4e4326**: Dose History [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-168dd2e1eb58"></a>
- **CAN-MENTAL-MEDICATION-R-168dd2e1eb58**: Weight-related Context [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-6434bcd98ca2"></a>
- **CAN-MENTAL-MEDICATION-R-6434bcd98ca2**: Medication Changes [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-d49021a162ac"></a>
- **CAN-MENTAL-MEDICATION-R-d49021a162ac**: Treatment Response [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-2ca4bc5f723e"></a>
- **CAN-MENTAL-MEDICATION-R-2ca4bc5f723e**: Adherence [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-16ec31936912"></a>
- **CAN-MENTAL-MEDICATION-R-16ec31936912**: Laboratory Monitoring [source IDs 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-f7f1673e9cd4"></a>
- **CAN-MENTAL-MEDICATION-R-f7f1673e9cd4**: Cardiovascular Monitoring Context [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-94c3324a34ec"></a>
- **CAN-MENTAL-MEDICATION-R-94c3324a34ec**: Growth and Weight Monitoring [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-d3d0cb8dfe15"></a>
- **CAN-MENTAL-MEDICATION-R-d3d0cb8dfe15**: Sleep Effects [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-35b349106903"></a>
- **CAN-MENTAL-MEDICATION-R-35b349106903**: Neurological Effects [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-826788475ea3"></a>
- **CAN-MENTAL-MEDICATION-R-826788475ea3**: Safety Functions: [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-f73738d9f8a5"></a>
- **CAN-MENTAL-MEDICATION-R-f73738d9f8a5**: Interaction Alerts [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-3428c76c0860"></a>
- **CAN-MENTAL-MEDICATION-R-3428c76c0860**: Duplicate Therapy Detection [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-c50140b1de65"></a>
- **CAN-MENTAL-MEDICATION-R-c50140b1de65**: Missing Monitoring Detection [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-d16493a3353c"></a>
- **CAN-MENTAL-MEDICATION-R-d16493a3353c**: Allergy Integration [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-fe90aaa76648"></a>
- **CAN-MENTAL-MEDICATION-R-fe90aaa76648**: Patient-specific Risk Context [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-55e8654c9d9d"></a>
- **CAN-MENTAL-MEDICATION-R-55e8654c9d9d**: Clinician-defined High-risk Alerts [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-8a44fcee55e9"></a>
- **CAN-MENTAL-MEDICATION-R-8a44fcee55e9**: Integrations: [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-e7dea5bc4edd"></a>
- **CAN-MENTAL-MEDICATION-R-e7dea5bc4edd**: Psychiatry [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-fd8587c6620f"></a>
- **CAN-MENTAL-MEDICATION-R-fd8587c6620f**: Pharmacy [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-ccb878ea94ba"></a>
- **CAN-MENTAL-MEDICATION-R-ccb878ea94ba**: Pediatrics [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-ce3e573ecbec"></a>
- **CAN-MENTAL-MEDICATION-R-ce3e573ecbec**: Cardiology [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-0b6d6c57f142"></a>
- **CAN-MENTAL-MEDICATION-R-0b6d6c57f142**: Laboratory Medicine [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-090535231fe9"></a>
- **CAN-MENTAL-MEDICATION-R-090535231fe9**: Medical Passport [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-R-d19840d139f3"></a>
- **CAN-MENTAL-MEDICATION-R-d19840d139f3**: HIGH [source IDs 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-R-5ed32bbfbdd4"></a>
- **CAN-MENTAL-MEDICATION-R-5ed32bbfbdd4**: Provide comprehensive longitudinal safety management for psychiatric medication in children and adolescents. [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-48d845a70404"></a>
- **CAN-MENTAL-MEDICATION-R-48d845a70404**: Functions: [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-1266ab829738"></a>
- **CAN-MENTAL-MEDICATION-R-1266ab829738**: Dose [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-f71ed34399e7"></a>
- **CAN-MENTAL-MEDICATION-R-f71ed34399e7**: Weight Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-0114de832376"></a>
- **CAN-MENTAL-MEDICATION-R-0114de832376**: Start/Stop [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-7f27f3af75d2"></a>
- **CAN-MENTAL-MEDICATION-R-7f27f3af75d2**: Titration History [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-666e7172f68d"></a>
- **CAN-MENTAL-MEDICATION-R-666e7172f68d**: Adherence Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-c1b5a3da8d40"></a>
- **CAN-MENTAL-MEDICATION-R-c1b5a3da8d40**: Response [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-ed9fda42f43a"></a>
- **CAN-MENTAL-MEDICATION-R-ed9fda42f43a**: Allergy [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-9235e99b3261"></a>
- **CAN-MENTAL-MEDICATION-R-9235e99b3261**: Drug Interaction [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-93874ddd9509"></a>
- **CAN-MENTAL-MEDICATION-R-93874ddd9509**: Cardiovascular Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-31bbcb77f0d6"></a>
- **CAN-MENTAL-MEDICATION-R-31bbcb77f0d6**: Metabolic Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-066bb2c3fcad"></a>
- **CAN-MENTAL-MEDICATION-R-066bb2c3fcad**: Neurological Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-fab11bb77f10"></a>
- **CAN-MENTAL-MEDICATION-R-fab11bb77f10**: Growth Context [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-8c94cace98be"></a>
- **CAN-MENTAL-MEDICATION-R-8c94cace98be**: Automation: [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-97ada4984376"></a>
- **CAN-MENTAL-MEDICATION-R-97ada4984376**: Monitoring Due [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-232ac179de76"></a>
- **CAN-MENTAL-MEDICATION-R-232ac179de76**: Laboratory Due [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-c526cbdb7584"></a>
- **CAN-MENTAL-MEDICATION-R-c526cbdb7584**: Follow-up Due [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-631e448ae34f"></a>
- **CAN-MENTAL-MEDICATION-R-631e448ae34f**: Interaction Review [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-20517c9953dd"></a>
- **CAN-MENTAL-MEDICATION-R-20517c9953dd**: Treatment-plan Review [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-7a54e8452271"></a>
- **CAN-MENTAL-MEDICATION-R-7a54e8452271**: Data Model: [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-8d5bf5ec30c0"></a>
- **CAN-MENTAL-MEDICATION-R-8d5bf5ec30c0**: MedicationEpisode [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-dd3c6a7a5fed"></a>
- **CAN-MENTAL-MEDICATION-R-dd3c6a7a5fed**: DoseChange [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-8fee5363d78d"></a>
- **CAN-MENTAL-MEDICATION-R-8fee5363d78d**: MonitoringRequirement [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-5883cb8158b1"></a>
- **CAN-MENTAL-MEDICATION-R-5883cb8158b1**: MonitoringResult [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-e8e5c95e3df5"></a>
- **CAN-MENTAL-MEDICATION-R-e8e5c95e3df5**: AdverseReaction [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-8d371058eaeb"></a>
- **CAN-MENTAL-MEDICATION-R-8d371058eaeb**: ResponseAssessment [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-5a903588d8b4"></a>
- **CAN-MENTAL-MEDICATION-R-5a903588d8b4**: Safety: [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-938b59379984"></a>
- **CAN-MENTAL-MEDICATION-R-938b59379984**: Medication decisions remain clinician-controlled. [source IDs 5166]

<a id="CAN-MENTAL-MEDICATION-R-80e37213d519"></a>
- **CAN-MENTAL-MEDICATION-R-80e37213d519**: MVP: [source IDs 5166]

## Preserved source metadata

<a id="CAN-MENTAL-MEDICATION-M-17dd6624cc5b"></a>
- **CAN-MENTAL-MEDICATION-M-17dd6624cc5b**: Supports [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-M-2fc1e43d2c6f"></a>
- **CAN-MENTAL-MEDICATION-M-2fc1e43d2c6f**: Status [source IDs 3993]

<a id="CAN-MENTAL-MEDICATION-M-8369b8654a18"></a>
- **CAN-MENTAL-MEDICATION-M-8369b8654a18**: Documentation [source IDs 3993, 4842]

<a id="CAN-MENTAL-MEDICATION-M-9005f6fabd68"></a>
- **CAN-MENTAL-MEDICATION-M-9005f6fabd68**: --- [source IDs 3993, 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-M-6668d9834f1f"></a>
- **CAN-MENTAL-MEDICATION-M-6668d9834f1f**: Purpose: [source IDs 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-M-713d472307d5"></a>
- **CAN-MENTAL-MEDICATION-M-713d472307d5**: Core Functions: [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-M-25900ad89eaf"></a>
- **CAN-MENTAL-MEDICATION-M-25900ad89eaf**: MVP Relevance: [source IDs 4842]

<a id="CAN-MENTAL-MEDICATION-M-907bed51aed6"></a>
- **CAN-MENTAL-MEDICATION-M-907bed51aed6**: Status: [source IDs 4842, 5166]

<a id="CAN-MENTAL-MEDICATION-M-c4465375628e"></a>
- **CAN-MENTAL-MEDICATION-M-c4465375628e**: Extended Module v2 [source IDs 5166]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
