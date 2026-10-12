# CAN-ALLERGY-LABEL — Drug-allergy label and specialist delabeling lifecycle

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Retain original label, suspected/confirmed state, drug/class, reaction/timing/severity, alternatives, challenge and specialist decision. Never silently erase history.

Owner **CAP-ALLERGY**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-ALLERGY-DRUG-LABEL. Retain original label, suspected/confirmed state, drug/class, reaction/timing/severity, alternatives, challenge and specialist decision. Never silently erase history. Source aliases: 1115, 4416, 4418. Comparison: PED2-ALLERGY-DRUG-LABEL.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: AllergyLabel, ReactionRecord, DiagnosticEvidence, DelabelingDecision. Dependencies: CAP-ALLERGY, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Capture historical label → assess reaction/diagnostic evidence → specialist conclusion → attributable label revision → notify authorized consumers.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-ALLERGY-LABEL-R-874d7e610908"></a>
- **CAN-ALLERGY-LABEL-R-874d7e610908**: Tracks medication allergies. [source IDs 1115]

<a id="CAN-ALLERGY-LABEL-R-2bb69d0ab72c"></a>
- **CAN-ALLERGY-LABEL-R-2bb69d0ab72c**: Drug [source IDs 1115]

<a id="CAN-ALLERGY-LABEL-R-402ff51a19f8"></a>
- **CAN-ALLERGY-LABEL-R-402ff51a19f8**: Reaction [source IDs 1115, 4416]

<a id="CAN-ALLERGY-LABEL-R-08b39c7ad4b5"></a>
- **CAN-ALLERGY-LABEL-R-08b39c7ad4b5**: Severity [source IDs 1115, 4416]

<a id="CAN-ALLERGY-LABEL-R-2da0e2bdeed7"></a>
- **CAN-ALLERGY-LABEL-R-2da0e2bdeed7**: Alternatives [source IDs 1115]

<a id="CAN-ALLERGY-LABEL-R-c8bcbd476a83"></a>
- **CAN-ALLERGY-LABEL-R-c8bcbd476a83**: Maintains structured suspected and confirmed medication allergy records. [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-915e7038bbb6"></a>
- **CAN-ALLERGY-LABEL-R-915e7038bbb6**: Medication [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-3f0e92b105a4"></a>
- **CAN-ALLERGY-LABEL-R-3f0e92b105a4**: Drug Class [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-035951cb0230"></a>
- **CAN-ALLERGY-LABEL-R-035951cb0230**: Timing [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-6dd85a905a56"></a>
- **CAN-ALLERGY-LABEL-R-6dd85a905a56**: Treatment [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-869f7e26edf4"></a>
- **CAN-ALLERGY-LABEL-R-869f7e26edf4**: Diagnostic Evaluation [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-c95ea23cd500"></a>
- **CAN-ALLERGY-LABEL-R-c95ea23cd500**: Confirmation Status [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-87ba1c3800ea"></a>
- **CAN-ALLERGY-LABEL-R-87ba1c3800ea**: Prevents unverified allergy labels from being treated as equivalent to confirmed allergy. [source IDs 4416]

<a id="CAN-ALLERGY-LABEL-R-11ea234bd615"></a>
- **CAN-ALLERGY-LABEL-R-11ea234bd615**: Supports professionally verified removal or modification of incorrect drug-allergy labels. [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-169a76261a85"></a>
- **CAN-ALLERGY-LABEL-R-169a76261a85**: Maintains [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-cd1b81658a13"></a>
- **CAN-ALLERGY-LABEL-R-cd1b81658a13**: Original Label [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-27144d10a965"></a>
- **CAN-ALLERGY-LABEL-R-27144d10a965**: Diagnostic Evidence [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-3ba5c245684e"></a>
- **CAN-ALLERGY-LABEL-R-3ba5c245684e**: Challenge Results [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-9849ab7a6981"></a>
- **CAN-ALLERGY-LABEL-R-9849ab7a6981**: Specialist Decision [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-3709d3218953"></a>
- **CAN-ALLERGY-LABEL-R-3709d3218953**: New Status [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-1a938eb7b985"></a>
- **CAN-ALLERGY-LABEL-R-1a938eb7b985**: Date [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-34973ef817f8"></a>
- **CAN-ALLERGY-LABEL-R-34973ef817f8**: Audit History [source IDs 4418]

<a id="CAN-ALLERGY-LABEL-R-9f9b5ac9d109"></a>
- **CAN-ALLERGY-LABEL-R-9f9b5ac9d109**: Previous records remain traceable. [source IDs 4418]

## Preserved source metadata

<a id="CAN-ALLERGY-LABEL-M-17dd6624cc5b"></a>
- **CAN-ALLERGY-LABEL-M-17dd6624cc5b**: Supports [source IDs 1115, 4416]

<a id="CAN-ALLERGY-LABEL-M-2fc1e43d2c6f"></a>
- **CAN-ALLERGY-LABEL-M-2fc1e43d2c6f**: Status [source IDs 1115, 4416, 4418]

<a id="CAN-ALLERGY-LABEL-M-8369b8654a18"></a>
- **CAN-ALLERGY-LABEL-M-8369b8654a18**: Documentation [source IDs 1115, 4416, 4418]

<a id="CAN-ALLERGY-LABEL-M-9005f6fabd68"></a>
- **CAN-ALLERGY-LABEL-M-9005f6fabd68**: --- [source IDs 1115, 4416, 4418]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
