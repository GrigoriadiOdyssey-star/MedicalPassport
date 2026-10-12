# CAN-MENTAL-THERAPY — Pediatric psychotherapy episode and protected-note record

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Preserve CBT/family/behavioral/supportive therapy, individual/group care, participation/goals and outcomes. Restricted session notes stay separate from shared summaries.

Owner **CAP-ENCOUNTER**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-MENTAL-THERAPY. Preserve CBT/family/behavioral/supportive therapy, individual/group care, participation/goals and outcomes. Restricted session notes stay separate from shared summaries. Source aliases: 3994, 4841, 5167. Comparison: PED2-MENTAL-THERAPY.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: TherapyEpisode, SessionReference, ClinicalSummary, RestrictedSessionNote, TherapyGoal. Dependencies: CAP-ENCOUNTER, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Referral/indication → agreed goals/modality → sessions → outcome/review → completion/follow-up.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-MENTAL-THERAPY-R-32b1f59815cd"></a>
- **CAN-MENTAL-THERAPY-R-32b1f59815cd**: Coordinates evidence-based psychological interventions. [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-dbf1181a3ab7"></a>
- **CAN-MENTAL-THERAPY-R-dbf1181a3ab7**: CBT [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-13f033fcf587"></a>
- **CAN-MENTAL-THERAPY-R-13f033fcf587**: Family Therapy [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-f1379ed7daab"></a>
- **CAN-MENTAL-THERAPY-R-f1379ed7daab**: Behavioral Therapy [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-51b7f9f59e94"></a>
- **CAN-MENTAL-THERAPY-R-51b7f9f59e94**: Supportive Therapy [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-165485c55a45"></a>
- **CAN-MENTAL-THERAPY-R-165485c55a45**: Therapy Goals [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-265b91d9ca8f"></a>
- **CAN-MENTAL-THERAPY-R-265b91d9ca8f**: Progress Tracking [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-aded6182335e"></a>
- **CAN-MENTAL-THERAPY-R-aded6182335e**: Referral Coordination [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-R-65627df64e5d"></a>
- **CAN-MENTAL-THERAPY-R-65627df64e5d**: Create a structured longitudinal record of psychological and psychotherapeutic interventions. [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-85a20d819f30"></a>
- **CAN-MENTAL-THERAPY-R-85a20d819f30**: Therapy Indication [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-383dac585e23"></a>
- **CAN-MENTAL-THERAPY-R-383dac585e23**: Therapy Modality [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-94a34f3055e6"></a>
- **CAN-MENTAL-THERAPY-R-94a34f3055e6**: Treatment Goals [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-R-72e548d1bf6d"></a>
- **CAN-MENTAL-THERAPY-R-72e548d1bf6d**: Session Registry [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-R-6d61bf1c1643"></a>
- **CAN-MENTAL-THERAPY-R-6d61bf1c1643**: Intervention Plan [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-80eeb7518f22"></a>
- **CAN-MENTAL-THERAPY-R-80eeb7518f22**: Symptom Measures [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-5aadca7b0fc4"></a>
- **CAN-MENTAL-THERAPY-R-5aadca7b0fc4**: Functional Goals [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-1d6eba3ae137"></a>
- **CAN-MENTAL-THERAPY-R-1d6eba3ae137**: Patient Participation [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-3a85c0a570be"></a>
- **CAN-MENTAL-THERAPY-R-3a85c0a570be**: Guardian Participation where appropriate [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-b5b61454ebf6"></a>
- **CAN-MENTAL-THERAPY-R-b5b61454ebf6**: Treatment Progress [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-aec0641017cf"></a>
- **CAN-MENTAL-THERAPY-R-aec0641017cf**: Treatment Modification [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-fb42aa4be41f"></a>
- **CAN-MENTAL-THERAPY-R-fb42aa4be41f**: Therapy Completion [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-b43929b3e4a8"></a>
- **CAN-MENTAL-THERAPY-R-b43929b3e4a8**: Follow-up [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-R-bc7ed23dd01d"></a>
- **CAN-MENTAL-THERAPY-R-bc7ed23dd01d**: Outcome Measures [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-R-bdab984f0184"></a>
- **CAN-MENTAL-THERAPY-R-bdab984f0184**: Supported Care Models: [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-8572fc42b28c"></a>
- **CAN-MENTAL-THERAPY-R-8572fc42b28c**: Individual Therapy [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-0758fca4ef3b"></a>
- **CAN-MENTAL-THERAPY-R-0758fca4ef3b**: Family-based Intervention [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-e19c81ab4668"></a>
- **CAN-MENTAL-THERAPY-R-e19c81ab4668**: Group Therapy Context [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-R-f3804a173d0c"></a>
- **CAN-MENTAL-THERAPY-R-f3804a173d0c**: Behavioral Intervention [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-079729b81fb0"></a>
- **CAN-MENTAL-THERAPY-R-079729b81fb0**: Skills-based Therapy [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-a5bf36010800"></a>
- **CAN-MENTAL-THERAPY-R-a5bf36010800**: Developmentally Adapted Psychological Care [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-714533ee58f2"></a>
- **CAN-MENTAL-THERAPY-R-714533ee58f2**: Privacy: [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-8133e7176159"></a>
- **CAN-MENTAL-THERAPY-R-8133e7176159**: Detailed psychotherapy notes may be subject to enhanced access controls separate from general clinical summaries. [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-R-2e06ae87af2f"></a>
- **CAN-MENTAL-THERAPY-R-2e06ae87af2f**: Provide structured longitudinal management of psychological and psychotherapeutic interventions without unnecessarily exposing confidential session content. [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-48d845a70404"></a>
- **CAN-MENTAL-THERAPY-R-48d845a70404**: Functions: [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-e18948917631"></a>
- **CAN-MENTAL-THERAPY-R-e18948917631**: Therapy Type [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-cc91bf1310ec"></a>
- **CAN-MENTAL-THERAPY-R-cc91bf1310ec**: Treatment Indication [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-6ddeaf505181"></a>
- **CAN-MENTAL-THERAPY-R-6ddeaf505181**: Attendance [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-801d0b44cd33"></a>
- **CAN-MENTAL-THERAPY-R-801d0b44cd33**: Progress Context [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-d72316578376"></a>
- **CAN-MENTAL-THERAPY-R-d72316578376**: Family Intervention Context [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-249e32195faa"></a>
- **CAN-MENTAL-THERAPY-R-249e32195faa**: Treatment Completion [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-8ac2dbc8ba07"></a>
- **CAN-MENTAL-THERAPY-R-8ac2dbc8ba07**: Privacy Architecture: [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-f608fd9b59b1"></a>
- **CAN-MENTAL-THERAPY-R-f608fd9b59b1**: Clinical Summary Layer [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-b1a088dc8588"></a>
- **CAN-MENTAL-THERAPY-R-b1a088dc8588**: Restricted Session-note Layer [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-71925b0ded9f"></a>
- **CAN-MENTAL-THERAPY-R-71925b0ded9f**: Consent-aware Sharing [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-0055c98eb65b"></a>
- **CAN-MENTAL-THERAPY-R-0055c98eb65b**: Role-based Access [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-f4d80ab716c7"></a>
- **CAN-MENTAL-THERAPY-R-f4d80ab716c7**: Guardian-access Rules [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-08547ee0e90e"></a>
- **CAN-MENTAL-THERAPY-R-08547ee0e90e**: Audit Trail [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-cdfd585a56c4"></a>
- **CAN-MENTAL-THERAPY-R-cdfd585a56c4**: Interoperability: [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-e7dea5bc4edd"></a>
- **CAN-MENTAL-THERAPY-R-e7dea5bc4edd**: Psychiatry [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-c335655aec19"></a>
- **CAN-MENTAL-THERAPY-R-c335655aec19**: Psychology [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-ccb878ea94ba"></a>
- **CAN-MENTAL-THERAPY-R-ccb878ea94ba**: Pediatrics [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-100a9274a922"></a>
- **CAN-MENTAL-THERAPY-R-100a9274a922**: Rehabilitation [source IDs 5167]

<a id="CAN-MENTAL-THERAPY-R-f2ff9cf55b64"></a>
- **CAN-MENTAL-THERAPY-R-f2ff9cf55b64**: School Support Context [source IDs 5167]

## Preserved source metadata

<a id="CAN-MENTAL-THERAPY-M-17dd6624cc5b"></a>
- **CAN-MENTAL-THERAPY-M-17dd6624cc5b**: Supports [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-M-2fc1e43d2c6f"></a>
- **CAN-MENTAL-THERAPY-M-2fc1e43d2c6f**: Status [source IDs 3994]

<a id="CAN-MENTAL-THERAPY-M-8369b8654a18"></a>
- **CAN-MENTAL-THERAPY-M-8369b8654a18**: Documentation [source IDs 3994, 4841]

<a id="CAN-MENTAL-THERAPY-M-9005f6fabd68"></a>
- **CAN-MENTAL-THERAPY-M-9005f6fabd68**: --- [source IDs 3994, 4841, 5167]

<a id="CAN-MENTAL-THERAPY-M-6668d9834f1f"></a>
- **CAN-MENTAL-THERAPY-M-6668d9834f1f**: Purpose: [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-M-713d472307d5"></a>
- **CAN-MENTAL-THERAPY-M-713d472307d5**: Core Functions: [source IDs 4841]

<a id="CAN-MENTAL-THERAPY-M-907bed51aed6"></a>
- **CAN-MENTAL-THERAPY-M-907bed51aed6**: Status: [source IDs 4841, 5167]

<a id="CAN-MENTAL-THERAPY-M-c4465375628e"></a>
- **CAN-MENTAL-THERAPY-M-c4465375628e**: Extended Module v2 [source IDs 5167]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
