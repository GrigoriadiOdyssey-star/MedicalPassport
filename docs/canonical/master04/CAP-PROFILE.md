# CORE-CAP-PROFILE — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: PassportView, TransitionPlan, DeliveryReceipt, HandoverAcknowledgement. Dependencies: CAP-PROFILE, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Assemble authorized current passport → record readiness and handover scope → send to chosen authorized provider → delivery plus acceptance acknowledgement → unresolved follow-up.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-RENAL-HANDOVER

Original IDs: 4574, 4599.

Preserve renal/genetic/pathology/imaging/dialysis/transplant history, emergency context and cross-border language support. Export alone is not completed handover.

Readiness/skills assessment → authorized current summary → receiving-provider transfer → confirmation → follow-up.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-PROFILE-054a3336c5119b77"></a>
- **M04-CAP-PROFILE-054a3336c5119b77**: Preserve critical kidney information across institutions, countries and the transition from pediatric to adult medicine.
  Origin: original 4574

<a id="M04-CAP-PROFILE-9f366be43afe8714"></a>
- **M04-CAP-PROFILE-9f366be43afe8714**: Medical Passport Data:
  Origin: original 4574

<a id="M04-CAP-PROFILE-dc5270143908309b"></a>
- **M04-CAP-PROFILE-dc5270143908309b**: Major Renal Diagnosis
  Origin: original 4574

<a id="M04-CAP-PROFILE-b2eb868ed704db34"></a>
- **M04-CAP-PROFILE-b2eb868ed704db34**: Baseline Kidney Function
  Origin: original 4574

<a id="M04-CAP-PROFILE-b79b9b9ee462b388"></a>
- **M04-CAP-PROFILE-b79b9b9ee462b388**: CKD Status
  Origin: original 4574

<a id="M04-CAP-PROFILE-872a841a831b8897"></a>
- **M04-CAP-PROFILE-872a841a831b8897**: Dialysis Status
  Origin: original 4574

<a id="M04-CAP-PROFILE-cafddaa86defb329"></a>
- **M04-CAP-PROFILE-cafddaa86defb329**: Kidney Transplant Status
  Origin: original 4574

<a id="M04-CAP-PROFILE-22d10b3ff243c333"></a>
- **M04-CAP-PROFILE-22d10b3ff243c333**: Critical Medication
  Origin: original 4574

<a id="M04-CAP-PROFILE-bbbece7a847db335"></a>
- **M04-CAP-PROFILE-bbbece7a847db335**: Immunosuppression
  Origin: original 4574

<a id="M04-CAP-PROFILE-5ece9f76c54dd0a2"></a>
- **M04-CAP-PROFILE-5ece9f76c54dd0a2**: Allergies
  Origin: original 4574

<a id="M04-CAP-PROFILE-8d1b0669274f2c54"></a>
- **M04-CAP-PROFILE-8d1b0669274f2c54**: Vascular Access
  Origin: original 4574

<a id="M04-CAP-PROFILE-5575494b7cc0fbb3"></a>
- **M04-CAP-PROFILE-5575494b7cc0fbb3**: Genetic Diagnosis
  Origin: original 4574

<a id="M04-CAP-PROFILE-70f98b2127d3f2f0"></a>
- **M04-CAP-PROFILE-70f98b2127d3f2f0**: Major Procedures
  Origin: original 4574

<a id="M04-CAP-PROFILE-2721401578c98ab1"></a>
- **M04-CAP-PROFILE-2721401578c98ab1**: Emergency Considerations
  Origin: original 4574

<a id="M04-CAP-PROFILE-22a6639767e0a6d1"></a>
- **M04-CAP-PROFILE-22a6639767e0a6d1**: Transition Functions:
  Origin: original 4574

<a id="M04-CAP-PROFILE-a31f0ca16ae07216"></a>
- **M04-CAP-PROFILE-a31f0ca16ae07216**: Structured Pediatric Summary
  Origin: original 4574

<a id="M04-CAP-PROFILE-70784463e50afff2"></a>
- **M04-CAP-PROFILE-70784463e50afff2**: Longitudinal Renal History
  Origin: original 4574

<a id="M04-CAP-PROFILE-b596b3fab9cbd244"></a>
- **M04-CAP-PROFILE-b596b3fab9cbd244**: Treatment History
  Origin: original 4574

<a id="M04-CAP-PROFILE-5de02c92fa8f983f"></a>
- **M04-CAP-PROFILE-5de02c92fa8f983f**: Dialysis History
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-b8884e71d187a716"></a>
- **M04-CAP-PROFILE-b8884e71d187a716**: Transplant History
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-aaaf0a34a8eb8286"></a>
- **M04-CAP-PROFILE-aaaf0a34a8eb8286**: Genetics
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-a3241cf77d991407"></a>
- **M04-CAP-PROFILE-a3241cf77d991407**: Imaging
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-2d2ffbcbba25564e"></a>
- **M04-CAP-PROFILE-2d2ffbcbba25564e**: Pathology
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-f43a0702ad91f5fb"></a>
- **M04-CAP-PROFILE-f43a0702ad91f5fb**: Current Care Plan
  Origin: original 4574, original 4599

<a id="M04-CAP-PROFILE-dcf03e8095dfe278"></a>
- **M04-CAP-PROFILE-dcf03e8095dfe278**: Adult Specialist Handover
  Origin: original 4574

<a id="M04-CAP-PROFILE-248e55b099715870"></a>
- **M04-CAP-PROFILE-248e55b099715870**: Cross-Border Functions:
  Origin: original 4574

<a id="M04-CAP-PROFILE-3875d574f1dbc00f"></a>
- **M04-CAP-PROFILE-3875d574f1dbc00f**: Multilingual Clinical Summary
  Origin: original 4574

<a id="M04-CAP-PROFILE-8382fe79b09178ea"></a>
- **M04-CAP-PROFILE-8382fe79b09178ea**: Standardized Data Exchange
  Origin: original 4574

<a id="M04-CAP-PROFILE-58ee25c963db67bc"></a>
- **M04-CAP-PROFILE-58ee25c963db67bc**: Patient-authorized Access
  Origin: original 4574

<a id="M04-CAP-PROFILE-bd52f084b53f646b"></a>
- **M04-CAP-PROFILE-bd52f084b53f646b**: Emergency Access Rules
  Origin: original 4574

<a id="M04-CAP-PROFILE-e7cb54962030eabf"></a>
- **M04-CAP-PROFILE-e7cb54962030eabf**: Jurisdiction-aware Data Sharing
  Origin: original 4574

<a id="M04-CAP-PROFILE-0320d403926c4a4f"></a>
- **M04-CAP-PROFILE-0320d403926c4a4f**: Prevent loss of clinically important information when pediatric renal patients transition into adult healthcare.
  Origin: original 4599

<a id="M04-CAP-PROFILE-b666ff6b79b05815"></a>
- **M04-CAP-PROFILE-b666ff6b79b05815**: Transition Readiness
  Origin: original 4599

<a id="M04-CAP-PROFILE-14468478fe040eaa"></a>
- **M04-CAP-PROFILE-14468478fe040eaa**: Patient Education
  Origin: original 4599

<a id="M04-CAP-PROFILE-76819cc9b7f5f07d"></a>
- **M04-CAP-PROFILE-76819cc9b7f5f07d**: Self-management Skills
  Origin: original 4599

<a id="M04-CAP-PROFILE-d8893edb21b7a8cf"></a>
- **M04-CAP-PROFILE-d8893edb21b7a8cf**: Diagnosis History
  Origin: original 4599

<a id="M04-CAP-PROFILE-00d8f338d2a5b2aa"></a>
- **M04-CAP-PROFILE-00d8f338d2a5b2aa**: Kidney Function History
  Origin: original 4599

<a id="M04-CAP-PROFILE-78167df60625f73c"></a>
- **M04-CAP-PROFILE-78167df60625f73c**: Surgical History
  Origin: original 4599

<a id="M04-CAP-PROFILE-2cbd1f2aea929b9b"></a>
- **M04-CAP-PROFILE-2cbd1f2aea929b9b**: Medication History
  Origin: original 4599

<a id="M04-CAP-PROFILE-5d3e821555030f9d"></a>
- **M04-CAP-PROFILE-5d3e821555030f9d**: Complication History
  Origin: original 4599

<a id="M04-CAP-PROFILE-eea812bae63ced56"></a>
- **M04-CAP-PROFILE-eea812bae63ced56**: Adult Provider Handover
  Origin: original 4599

<a id="M04-CAP-PROFILE-b4665d95eb5d5afc"></a>
- **M04-CAP-PROFILE-b4665d95eb5d5afc**: Lifelong Record:
  Origin: original 4599

<a id="M04-CAP-PROFILE-7cee3c470e603226"></a>
- **M04-CAP-PROFILE-7cee3c470e603226**: Preserves the pediatric renal trajectory as part of the patient's permanent EDHT health history.
  Origin: original 4599

<a id="M04-CAP-PROFILE-1665d47c4be756a9"></a>
- **M04-CAP-PROFILE-1665d47c4be756a9**: Transition Workflow:
  Origin: original 4599

<a id="M04-CAP-PROFILE-21c53768cdb9e5cc"></a>
- **M04-CAP-PROFILE-21c53768cdb9e5cc**: Preparation → Readiness Assessment → Structured Summary → Adult Provider Transfer → Confirmation → Follow-up.
  Origin: original 4599

<a id="M04-CAP-PROFILE-1dd6ca0f8f06ecdc"></a>
- **M04-CAP-PROFILE-1dd6ca0f8f06ecdc**: Medical Passport:
  Origin: original 4599

<a id="M04-CAP-PROFILE-23c683c9525adf1d"></a>
- **M04-CAP-PROFILE-23c683c9525adf1d**: Critical renal and transplant information remains continuously available according to authorization rules.
  Origin: original 4599

## Preserved source metadata

<a id="M04-CAP-PROFILE-6510c5c511a879bc"></a>
- **M04-CAP-PROFILE-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-PROFILE-b88b375a44ccd619"></a>
- **M04-CAP-PROFILE-b88b375a44ccd619**: Status:

<a id="M04-CAP-PROFILE-d5232cbd3a326267"></a>
- **M04-CAP-PROFILE-d5232cbd3a326267**: Documentation

<a id="M04-CAP-PROFILE-6f33acf3afb37064"></a>
- **M04-CAP-PROFILE-6f33acf3afb37064**: ---

<a id="M04-CAP-PROFILE-b34f593f0f83a1d1"></a>
- **M04-CAP-PROFILE-b34f593f0f83a1d1**: Core Functions:

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
