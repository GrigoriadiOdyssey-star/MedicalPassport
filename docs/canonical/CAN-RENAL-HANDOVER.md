# CAN-RENAL-HANDOVER — Pediatric renal passport and adult-care handover

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Preserve renal/genetic/pathology/imaging/dialysis/transplant history, emergency context and cross-border language support. Export alone is not completed handover.

Owner **CAP-PROFILE**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-RENAL-TRANSITION. Preserve renal/genetic/pathology/imaging/dialysis/transplant history, emergency context and cross-border language support. Export alone is not completed handover. Source aliases: 4574, 4599. Comparison: PED2-RENAL-TRANSITION.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: TransitionPlan, DisclosurePackage, DeliveryReceipt, HandoverAcknowledgement. Dependencies: CAP-PROFILE, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Readiness/skills assessment → authorized current summary → receiving-provider transfer → confirmation → follow-up.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-RENAL-HANDOVER-R-b747f5c8bc5c"></a>
- **CAN-RENAL-HANDOVER-R-b747f5c8bc5c**: Preserve critical kidney information across institutions, countries and the transition from pediatric to adult medicine. [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-e93887a8ff8c"></a>
- **CAN-RENAL-HANDOVER-R-e93887a8ff8c**: Medical Passport Data: [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-1f415fa2897b"></a>
- **CAN-RENAL-HANDOVER-R-1f415fa2897b**: Major Renal Diagnosis [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-8cb4f2528491"></a>
- **CAN-RENAL-HANDOVER-R-8cb4f2528491**: Baseline Kidney Function [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-677780ae3269"></a>
- **CAN-RENAL-HANDOVER-R-677780ae3269**: CKD Status [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-62b57fc5bcdb"></a>
- **CAN-RENAL-HANDOVER-R-62b57fc5bcdb**: Dialysis Status [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-e7c825e7a0bd"></a>
- **CAN-RENAL-HANDOVER-R-e7c825e7a0bd**: Kidney Transplant Status [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-264e7a297040"></a>
- **CAN-RENAL-HANDOVER-R-264e7a297040**: Critical Medication [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-6fffad6b3a5c"></a>
- **CAN-RENAL-HANDOVER-R-6fffad6b3a5c**: Immunosuppression [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-91fdb57005fc"></a>
- **CAN-RENAL-HANDOVER-R-91fdb57005fc**: Allergies [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-3377a26e6ed1"></a>
- **CAN-RENAL-HANDOVER-R-3377a26e6ed1**: Vascular Access [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-eb8e79c9f73a"></a>
- **CAN-RENAL-HANDOVER-R-eb8e79c9f73a**: Genetic Diagnosis [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-d6a8df5bc3cb"></a>
- **CAN-RENAL-HANDOVER-R-d6a8df5bc3cb**: Major Procedures [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-9bb7a5366c6e"></a>
- **CAN-RENAL-HANDOVER-R-9bb7a5366c6e**: Emergency Considerations [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-4c461a62d3ef"></a>
- **CAN-RENAL-HANDOVER-R-4c461a62d3ef**: Transition Functions: [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-aef1de96faac"></a>
- **CAN-RENAL-HANDOVER-R-aef1de96faac**: Structured Pediatric Summary [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-19ff6be4228f"></a>
- **CAN-RENAL-HANDOVER-R-19ff6be4228f**: Longitudinal Renal History [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-95141fd7445a"></a>
- **CAN-RENAL-HANDOVER-R-95141fd7445a**: Treatment History [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-548f7ee95f9b"></a>
- **CAN-RENAL-HANDOVER-R-548f7ee95f9b**: Dialysis History [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-610b3dca33b4"></a>
- **CAN-RENAL-HANDOVER-R-610b3dca33b4**: Transplant History [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-52a2af8f6855"></a>
- **CAN-RENAL-HANDOVER-R-52a2af8f6855**: Genetics [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-0766f15902ef"></a>
- **CAN-RENAL-HANDOVER-R-0766f15902ef**: Imaging [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-02cafcd555ad"></a>
- **CAN-RENAL-HANDOVER-R-02cafcd555ad**: Pathology [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-4d60372302ce"></a>
- **CAN-RENAL-HANDOVER-R-4d60372302ce**: Current Care Plan [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-R-d83d117a6ebc"></a>
- **CAN-RENAL-HANDOVER-R-d83d117a6ebc**: Adult Specialist Handover [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-2ffeb7fded13"></a>
- **CAN-RENAL-HANDOVER-R-2ffeb7fded13**: Cross-Border Functions: [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-faa79f417bf1"></a>
- **CAN-RENAL-HANDOVER-R-faa79f417bf1**: Multilingual Clinical Summary [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-57152374b0b4"></a>
- **CAN-RENAL-HANDOVER-R-57152374b0b4**: Standardized Data Exchange [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-79e2d285c7e9"></a>
- **CAN-RENAL-HANDOVER-R-79e2d285c7e9**: Patient-authorized Access [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-9690b2f261e2"></a>
- **CAN-RENAL-HANDOVER-R-9690b2f261e2**: Emergency Access Rules [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-0c32a9d8779f"></a>
- **CAN-RENAL-HANDOVER-R-0c32a9d8779f**: Jurisdiction-aware Data Sharing [source IDs 4574]

<a id="CAN-RENAL-HANDOVER-R-d817e5b5f783"></a>
- **CAN-RENAL-HANDOVER-R-d817e5b5f783**: Prevent loss of clinically important information when pediatric renal patients transition into adult healthcare. [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-40479dbe5df5"></a>
- **CAN-RENAL-HANDOVER-R-40479dbe5df5**: Transition Readiness [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-4e38765492e4"></a>
- **CAN-RENAL-HANDOVER-R-4e38765492e4**: Patient Education [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-10259600b9dd"></a>
- **CAN-RENAL-HANDOVER-R-10259600b9dd**: Self-management Skills [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-bf4bc4ae92f5"></a>
- **CAN-RENAL-HANDOVER-R-bf4bc4ae92f5**: Diagnosis History [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-adf5418fcab9"></a>
- **CAN-RENAL-HANDOVER-R-adf5418fcab9**: Kidney Function History [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-255756747fd3"></a>
- **CAN-RENAL-HANDOVER-R-255756747fd3**: Surgical History [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-c0f807a9d457"></a>
- **CAN-RENAL-HANDOVER-R-c0f807a9d457**: Medication History [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-7635a63873a1"></a>
- **CAN-RENAL-HANDOVER-R-7635a63873a1**: Complication History [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-3832a969ef9b"></a>
- **CAN-RENAL-HANDOVER-R-3832a969ef9b**: Adult Provider Handover [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-7c6682dddc43"></a>
- **CAN-RENAL-HANDOVER-R-7c6682dddc43**: Lifelong Record: [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-6b3bb92314d4"></a>
- **CAN-RENAL-HANDOVER-R-6b3bb92314d4**: Preserves the pediatric renal trajectory as part of the patient's permanent EDHT health history. [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-4b136c8b4ad9"></a>
- **CAN-RENAL-HANDOVER-R-4b136c8b4ad9**: Transition Workflow: [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-a242da07bcc8"></a>
- **CAN-RENAL-HANDOVER-R-a242da07bcc8**: Preparation → Readiness Assessment → Structured Summary → Adult Provider Transfer → Confirmation → Follow-up. [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-1a93c6610477"></a>
- **CAN-RENAL-HANDOVER-R-1a93c6610477**: Medical Passport: [source IDs 4599]

<a id="CAN-RENAL-HANDOVER-R-c13c4eeb9ba5"></a>
- **CAN-RENAL-HANDOVER-R-c13c4eeb9ba5**: Critical renal and transplant information remains continuously available according to authorization rules. [source IDs 4599]

## Preserved source metadata

<a id="CAN-RENAL-HANDOVER-M-6668d9834f1f"></a>
- **CAN-RENAL-HANDOVER-M-6668d9834f1f**: Purpose: [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-M-907bed51aed6"></a>
- **CAN-RENAL-HANDOVER-M-907bed51aed6**: Status: [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-M-8369b8654a18"></a>
- **CAN-RENAL-HANDOVER-M-8369b8654a18**: Documentation [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-M-9005f6fabd68"></a>
- **CAN-RENAL-HANDOVER-M-9005f6fabd68**: --- [source IDs 4574, 4599]

<a id="CAN-RENAL-HANDOVER-M-713d472307d5"></a>
- **CAN-RENAL-HANDOVER-M-713d472307d5**: Core Functions: [source IDs 4599]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
