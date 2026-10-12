# CORE-CAP-EMERGENCY — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: EmergencySummary, ClinicianAssessment, EscalationTask, Acknowledgement. Dependencies: CAP-EMERGENCY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-MENTAL-CRISIS

Original IDs: 3995, 3996, 4840, 5168.

Assessment, protective factors, escalation, emergency disposition and follow-up remain human-led; preserve explicit prohibition of autonomous risk determination.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-EMERGENCY-92330ef6658d4741"></a>
- **M04-CAP-EMERGENCY-92330ef6658d4741**: Supports urgent pediatric mental health assessment.
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-4123f57ed4a68b73"></a>
- **M04-CAP-EMERGENCY-4123f57ed4a68b73**: Acute Behavioral Crisis
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-571fe2062d58fbb5"></a>
- **M04-CAP-EMERGENCY-571fe2062d58fbb5**: Severe Psychiatric Symptoms
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-f1185cfc06ac3ea2"></a>
- **M04-CAP-EMERGENCY-f1185cfc06ac3ea2**: Safety Assessment
  Origin: original 3995, original 4840, original 5168

<a id="M04-CAP-EMERGENCY-cf99e3f76d61d931"></a>
- **M04-CAP-EMERGENCY-cf99e3f76d61d931**: Crisis Escalation
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-ffc808a998eb5ef9"></a>
- **M04-CAP-EMERGENCY-ffc808a998eb5ef9**: Emergency Referral
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-576af0299110f685"></a>
- **M04-CAP-EMERGENCY-576af0299110f685**: Care Coordination
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-0d86946e629cc025"></a>
- **M04-CAP-EMERGENCY-0d86946e629cc025**: Follow-up
  Origin: original 3995, original 4840, original 5168

<a id="M04-CAP-EMERGENCY-ffe0b4d4c0e8454b"></a>
- **M04-CAP-EMERGENCY-ffe0b4d4c0e8454b**: Designed for rapid escalation to appropriate emergency and specialist services.
  Origin: original 3995

<a id="M04-CAP-EMERGENCY-250d0685cd7df9bf"></a>
- **M04-CAP-EMERGENCY-250d0685cd7df9bf**: Supports clinician-led assessment of suicide and self-harm risk.
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-f468be0316491865"></a>
- **M04-CAP-EMERGENCY-f468be0316491865**: Risk Assessment
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-f18fb2e7254ebbc1"></a>
- **M04-CAP-EMERGENCY-f18fb2e7254ebbc1**: Protective Factors
  Origin: original 3996, original 4840

<a id="M04-CAP-EMERGENCY-1816dd2dcdf8cd08"></a>
- **M04-CAP-EMERGENCY-1816dd2dcdf8cd08**: Safety Planning
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-84534b99d51d1f96"></a>
- **M04-CAP-EMERGENCY-84534b99d51d1f96**: Follow-up Tracking
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-6fdd122d1dc2fe2d"></a>
- **M04-CAP-EMERGENCY-6fdd122d1dc2fe2d**: Family Involvement
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-35a5b6383bb47b46"></a>
- **M04-CAP-EMERGENCY-35a5b6383bb47b46**: Emergency Escalation
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-4b31b6850229e34f"></a>
- **M04-CAP-EMERGENCY-4b31b6850229e34f**: The system does not independently determine risk or replace emergency clinical assessment.
  Origin: original 3996

<a id="M04-CAP-EMERGENCY-59369d8751c567ca"></a>
- **M04-CAP-EMERGENCY-59369d8751c567ca**: Provide a controlled clinical workflow for urgent pediatric mental-health assessment and crisis coordination.
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-7b071cdbcc05f6ba"></a>
- **M04-CAP-EMERGENCY-7b071cdbcc05f6ba**: Crisis Episode
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-3d04cbaeef3af546"></a>
- **M04-CAP-EMERGENCY-3d04cbaeef3af546**: Presenting Concern
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-26e2b27371523ee8"></a>
- **M04-CAP-EMERGENCY-26e2b27371523ee8**: Mental Status
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-f07269feab354fd2"></a>
- **M04-CAP-EMERGENCY-f07269feab354fd2**: Acute Behavioral Change
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-a9c9121cc7e5811e"></a>
- **M04-CAP-EMERGENCY-a9c9121cc7e5811e**: Family/Guardian Context
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-3cfa39200ce0ea10"></a>
- **M04-CAP-EMERGENCY-3cfa39200ce0ea10**: Medication
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-d03edd02840f9b6c"></a>
- **M04-CAP-EMERGENCY-d03edd02840f9b6c**: Medical Context
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-73e74ef198773665"></a>
- **M04-CAP-EMERGENCY-73e74ef198773665**: Emergency Assessment
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-4195fc8e31b7b0e1"></a>
- **M04-CAP-EMERGENCY-4195fc8e31b7b0e1**: Specialist Consultation
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-628421bef2a2789e"></a>
- **M04-CAP-EMERGENCY-628421bef2a2789e**: Safety Plan
  Origin: original 4840, original 5168

<a id="M04-CAP-EMERGENCY-f4f91c94b6692199"></a>
- **M04-CAP-EMERGENCY-f4f91c94b6692199**: Disposition
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-f201cbfb32217cee"></a>
- **M04-CAP-EMERGENCY-f201cbfb32217cee**: Hospitalization
  Origin: original 4840, original 5168

<a id="M04-CAP-EMERGENCY-bb30eb4c7e16b7a0"></a>
- **M04-CAP-EMERGENCY-bb30eb4c7e16b7a0**: Continuity-of-Care Handover
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-6bc5db5610eb1feb"></a>
- **M04-CAP-EMERGENCY-6bc5db5610eb1feb**: Safety Governance:
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-b6cea28fd7cdd6e7"></a>
- **M04-CAP-EMERGENCY-b6cea28fd7cdd6e7**: Human Clinical Assessment Required
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-cf88214980dcfd5b"></a>
- **M04-CAP-EMERGENCY-cf88214980dcfd5b**: Clear Escalation Pathways
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-8deb81f02b2bfc0e"></a>
- **M04-CAP-EMERGENCY-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-8a41518ad3d9aba2"></a>
- **M04-CAP-EMERGENCY-8a41518ad3d9aba2**: Time-stamped Decisions
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-71a765590c1d37b3"></a>
- **M04-CAP-EMERGENCY-71a765590c1d37b3**: Clinical Accountability
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-79b63a83bc7d1c15"></a>
- **M04-CAP-EMERGENCY-79b63a83bc7d1c15**: Audit Trail
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-6d9fe0c9fe0544d9"></a>
- **M04-CAP-EMERGENCY-6d9fe0c9fe0544d9**: AI Role:
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-c036113be69a98c9"></a>
- **M04-CAP-EMERGENCY-c036113be69a98c9**: AI may organize information and identify missing assessment elements but does not make autonomous emergency disposition decisions.
  Origin: original 4840

<a id="M04-CAP-EMERGENCY-d961041fb4e597be"></a>
- **M04-CAP-EMERGENCY-d961041fb4e597be**: Provide rapid access to clinician-validated safety information during pediatric mental-health crises.
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-8e96619c8dca4b93"></a>
- **M04-CAP-EMERGENCY-8e96619c8dca4b93**: Functions:
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-257fbb5f622f23c2"></a>
- **M04-CAP-EMERGENCY-257fbb5f622f23c2**: Crisis Episode Registry
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-4370176f8243746a"></a>
- **M04-CAP-EMERGENCY-4370176f8243746a**: Current Clinical Concern
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-a2a22c4c8b8b2b2d"></a>
- **M04-CAP-EMERGENCY-a2a22c4c8b8b2b2d**: Previous Crisis Context
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-b72f2ebbd5c0f996"></a>
- **M04-CAP-EMERGENCY-b72f2ebbd5c0f996**: Protective Context
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-80e3ef36950805e9"></a>
- **M04-CAP-EMERGENCY-80e3ef36950805e9**: Emergency Contacts
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-c9b067f01c20fb72"></a>
- **M04-CAP-EMERGENCY-c9b067f01c20fb72**: Medication Context
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-3839837a0710f97c"></a>
- **M04-CAP-EMERGENCY-3839837a0710f97c**: Emergency Evaluation
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-8e93323757ed4244"></a>
- **M04-CAP-EMERGENCY-8e93323757ed4244**: Discharge Plan
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-58f384e63547bf41"></a>
- **M04-CAP-EMERGENCY-58f384e63547bf41**: Recurrence Context
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-5a6870afa5c21480"></a>
- **M04-CAP-EMERGENCY-5a6870afa5c21480**: Workflow:
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-5aa81f4077c037d1"></a>
- **M04-CAP-EMERGENCY-5aa81f4077c037d1**: Concern
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-ee5015004de72642"></a>
- **M04-CAP-EMERGENCY-ee5015004de72642**: → Qualified Assessment
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-668a6667b28c4612"></a>
- **M04-CAP-EMERGENCY-668a6667b28c4612**: → Clinician-defined Risk Stratification
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-f30373d46fa0b43d"></a>
- **M04-CAP-EMERGENCY-f30373d46fa0b43d**: → Safety Intervention
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-a1dcb0d24ade0327"></a>
- **M04-CAP-EMERGENCY-a1dcb0d24ade0327**: → Emergency/Hospital Pathway where required
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-7c178bbca288adc1"></a>
- **M04-CAP-EMERGENCY-7c178bbca288adc1**: → Discharge
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-363c3c45d941e045"></a>
- **M04-CAP-EMERGENCY-363c3c45d941e045**: → Follow-up
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-dc20bc176bdee4c8"></a>
- **M04-CAP-EMERGENCY-dc20bc176bdee4c8**: Permissions:
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-0aa1c3e24936151e"></a>
- **M04-CAP-EMERGENCY-0aa1c3e24936151e**: Restricted Sensitive Information
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-39c5dc9895333297"></a>
- **M04-CAP-EMERGENCY-39c5dc9895333297**: Emergency-access Policy
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-329caaaf376c0bdd"></a>
- **M04-CAP-EMERGENCY-329caaaf376c0bdd**: Guardian-access Rules
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-e674652a630a2f53"></a>
- **M04-CAP-EMERGENCY-e674652a630a2f53**: Access Logging
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-07f8d474b8b4141c"></a>
- **M04-CAP-EMERGENCY-07f8d474b8b4141c**: Safety:
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-4e876ecc7edb31f5"></a>
- **M04-CAP-EMERGENCY-4e876ecc7edb31f5**: Automated scoring never substitutes for qualified crisis assessment or emergency intervention.
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-920a1d230724ecf1"></a>
- **M04-CAP-EMERGENCY-920a1d230724ecf1**: MVP:
  Origin: original 5168

<a id="M04-CAP-EMERGENCY-3fec9e727a7538e6"></a>
- **M04-CAP-EMERGENCY-3fec9e727a7538e6**: CRITICAL
  Origin: original 5168

## Preserved source metadata

<a id="M04-CAP-EMERGENCY-4fbeeb87456accf5"></a>
- **M04-CAP-EMERGENCY-4fbeeb87456accf5**: Supports

<a id="M04-CAP-EMERGENCY-5ba74d8fcc7b20cc"></a>
- **M04-CAP-EMERGENCY-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-EMERGENCY-d5232cbd3a326267"></a>
- **M04-CAP-EMERGENCY-d5232cbd3a326267**: Documentation

<a id="M04-CAP-EMERGENCY-6f33acf3afb37064"></a>
- **M04-CAP-EMERGENCY-6f33acf3afb37064**: ---

<a id="M04-CAP-EMERGENCY-6510c5c511a879bc"></a>
- **M04-CAP-EMERGENCY-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-EMERGENCY-b34f593f0f83a1d1"></a>
- **M04-CAP-EMERGENCY-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-EMERGENCY-b88b375a44ccd619"></a>
- **M04-CAP-EMERGENCY-b88b375a44ccd619**: Status:

<a id="M04-CAP-EMERGENCY-b3604d24a08b400e"></a>
- **M04-CAP-EMERGENCY-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
