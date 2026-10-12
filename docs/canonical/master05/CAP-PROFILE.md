# CORE-CAP-PROFILE — shared capability and profiles

MASTER-05 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M05-HEM-PASSPORT

Original IDs: 4195, 4199.

Current authorized blood passport and adult handover preserve antibodies/factor/inhibitor context, emergency plan and specialist contact; receipt and acceptance remain separate from export and from blood-bank release.

Assemble authorized current passport → record readiness and handover scope → send to chosen authorized provider → delivery plus acceptance acknowledgement → unresolved follow-up.

### M05-ONCO-PASSPORT

Original IDs: 4248.

Cancer exposure passport is a profile of existing passport ownership, retaining original/molecular diagnosis, surgery, chemotherapy, radiation, cellular therapy, transplant and late-effect surveillance history.

Assemble authorized current passport → record readiness and handover scope → send to chosen authorized provider → delivery plus acceptance acknowledgement → unresolved follow-up.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M05-CAP-PROFILE-19b1a30da92dd296"></a>
- **M05-CAP-PROFILE-19b1a30da92dd296**: Provides rapid access to critical hematology information.
  Origin: original 4195

<a id="M05-CAP-PROFILE-45d89fd69e192fb8"></a>
- **M05-CAP-PROFILE-45d89fd69e192fb8**: May display
  Origin: original 4195

<a id="M05-CAP-PROFILE-5f124f9e42776b79"></a>
- **M05-CAP-PROFILE-5f124f9e42776b79**: Diagnosis
  Origin: original 4195

<a id="M05-CAP-PROFILE-6cab26a2e684fc1d"></a>
- **M05-CAP-PROFILE-6cab26a2e684fc1d**: Hemophilia Type
  Origin: original 4195

<a id="M05-CAP-PROFILE-6ce8222558295ca7"></a>
- **M05-CAP-PROFILE-6ce8222558295ca7**: Factor Deficiency
  Origin: original 4195

<a id="M05-CAP-PROFILE-331e4c203938dc57"></a>
- **M05-CAP-PROFILE-331e4c203938dc57**: Sickle Cell Disease
  Origin: original 4195

<a id="M05-CAP-PROFILE-a048fa6dfcb9dafe"></a>
- **M05-CAP-PROFILE-a048fa6dfcb9dafe**: Antibodies
  Origin: original 4195

<a id="M05-CAP-PROFILE-2fe9a70b697f1a61"></a>
- **M05-CAP-PROFILE-2fe9a70b697f1a61**: Blood Group
  Origin: original 4195

<a id="M05-CAP-PROFILE-05e576d32d372247"></a>
- **M05-CAP-PROFILE-05e576d32d372247**: Current Therapy
  Origin: original 4195

<a id="M05-CAP-PROFILE-244d7f17060b34f2"></a>
- **M05-CAP-PROFILE-244d7f17060b34f2**: Emergency Plan
  Origin: original 4195

<a id="M05-CAP-PROFILE-26ec2fdaa9320dd5"></a>
- **M05-CAP-PROFILE-26ec2fdaa9320dd5**: Specialist Contact
  Origin: original 4195

<a id="M05-CAP-PROFILE-1ccc15c7999c5cf9"></a>
- **M05-CAP-PROFILE-1ccc15c7999c5cf9**: Supports multilingual cross-border emergency access with appropriate authorization.
  Origin: original 4195

<a id="M05-CAP-PROFILE-52d321d641d5a768"></a>
- **M05-CAP-PROFILE-52d321d641d5a768**: Supports structured transition to adult hematology.
  Origin: original 4199

<a id="M05-CAP-PROFILE-b666ff6b79b05815"></a>
- **M05-CAP-PROFILE-b666ff6b79b05815**: Transition Readiness
  Origin: original 4199, original 4599

<a id="M05-CAP-PROFILE-474bef8e88720a2c"></a>
- **M05-CAP-PROFILE-474bef8e88720a2c**: Medical Summary
  Origin: original 4199

<a id="M05-CAP-PROFILE-b596b3fab9cbd244"></a>
- **M05-CAP-PROFILE-b596b3fab9cbd244**: Treatment History
  Origin: original 4199, original 4574

<a id="M05-CAP-PROFILE-aaaf0a34a8eb8286"></a>
- **M05-CAP-PROFILE-aaaf0a34a8eb8286**: Genetics
  Origin: original 4199, original 4574, original 4599

<a id="M05-CAP-PROFILE-746fa472ce1cde7e"></a>
- **M05-CAP-PROFILE-746fa472ce1cde7e**: Transfusion History
  Origin: original 4199

<a id="M05-CAP-PROFILE-c35ee9a6e1e3ef76"></a>
- **M05-CAP-PROFILE-c35ee9a6e1e3ef76**: Emergency Plans
  Origin: original 4199

<a id="M05-CAP-PROFILE-4b7e31fbae94bdd0"></a>
- **M05-CAP-PROFILE-4b7e31fbae94bdd0**: Adult Specialist Transfer
  Origin: original 4199

<a id="M05-CAP-PROFILE-1c59f0738a89c49b"></a>
- **M05-CAP-PROFILE-1c59f0738a89c49b**: Continuity Tracking
  Origin: original 4199

<a id="M05-CAP-PROFILE-c92dd73be198e423"></a>
- **M05-CAP-PROFILE-c92dd73be198e423**: Maintains the longitudinal EDHT Medical Passport across transition.
  Origin: original 4199

<a id="M05-CAP-PROFILE-df0714f9c6df44da"></a>
- **M05-CAP-PROFILE-df0714f9c6df44da**: Creates a lifelong structured cancer survivorship record.
  Origin: original 4248

<a id="M05-CAP-PROFILE-011257364aecfedb"></a>
- **M05-CAP-PROFILE-011257364aecfedb**: Contains
  Origin: original 4248

<a id="M05-CAP-PROFILE-f38e2d7b4218da7b"></a>
- **M05-CAP-PROFILE-f38e2d7b4218da7b**: Original Diagnosis
  Origin: original 4248

<a id="M05-CAP-PROFILE-ba6403d34b52aaa0"></a>
- **M05-CAP-PROFILE-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 4248

<a id="M05-CAP-PROFILE-bc506fdefc6e7e7b"></a>
- **M05-CAP-PROFILE-bc506fdefc6e7e7b**: Surgery
  Origin: original 4248

<a id="M05-CAP-PROFILE-3d455b7f1446ba3a"></a>
- **M05-CAP-PROFILE-3d455b7f1446ba3a**: Chemotherapy Exposure
  Origin: original 4248

<a id="M05-CAP-PROFILE-3d738654eb6ce4c7"></a>
- **M05-CAP-PROFILE-3d738654eb6ce4c7**: Radiation Exposure
  Origin: original 4248

<a id="M05-CAP-PROFILE-49f514f04b66d6d1"></a>
- **M05-CAP-PROFILE-49f514f04b66d6d1**: Cellular Therapy
  Origin: original 4248

<a id="M05-CAP-PROFILE-c25e5083a540778a"></a>
- **M05-CAP-PROFILE-c25e5083a540778a**: Transplantation
  Origin: original 4248

<a id="M05-CAP-PROFILE-52eeb5fac7fe876a"></a>
- **M05-CAP-PROFILE-52eeb5fac7fe876a**: Major Toxicities
  Origin: original 4248

<a id="M05-CAP-PROFILE-adf311d8f0cdd952"></a>
- **M05-CAP-PROFILE-adf311d8f0cdd952**: Late-effect Risks
  Origin: original 4248

<a id="M05-CAP-PROFILE-8520336af5aecacb"></a>
- **M05-CAP-PROFILE-8520336af5aecacb**: Surveillance History
  Origin: original 4248

<a id="M05-CAP-PROFILE-8209a843ad3b14c9"></a>
- **M05-CAP-PROFILE-8209a843ad3b14c9**: Travels with the patient's EDHT Medical Passport into adulthood.
  Origin: original 4248

<a id="M05-CAP-PROFILE-054a3336c5119b77"></a>
- **M05-CAP-PROFILE-054a3336c5119b77**: Preserve critical kidney information across institutions, countries and the transition from pediatric to adult medicine.
  Origin: original 4574

<a id="M05-CAP-PROFILE-9f366be43afe8714"></a>
- **M05-CAP-PROFILE-9f366be43afe8714**: Medical Passport Data:
  Origin: original 4574

<a id="M05-CAP-PROFILE-dc5270143908309b"></a>
- **M05-CAP-PROFILE-dc5270143908309b**: Major Renal Diagnosis
  Origin: original 4574

<a id="M05-CAP-PROFILE-b2eb868ed704db34"></a>
- **M05-CAP-PROFILE-b2eb868ed704db34**: Baseline Kidney Function
  Origin: original 4574

<a id="M05-CAP-PROFILE-b79b9b9ee462b388"></a>
- **M05-CAP-PROFILE-b79b9b9ee462b388**: CKD Status
  Origin: original 4574

<a id="M05-CAP-PROFILE-872a841a831b8897"></a>
- **M05-CAP-PROFILE-872a841a831b8897**: Dialysis Status
  Origin: original 4574

<a id="M05-CAP-PROFILE-cafddaa86defb329"></a>
- **M05-CAP-PROFILE-cafddaa86defb329**: Kidney Transplant Status
  Origin: original 4574

<a id="M05-CAP-PROFILE-22d10b3ff243c333"></a>
- **M05-CAP-PROFILE-22d10b3ff243c333**: Critical Medication
  Origin: original 4574

<a id="M05-CAP-PROFILE-bbbece7a847db335"></a>
- **M05-CAP-PROFILE-bbbece7a847db335**: Immunosuppression
  Origin: original 4574

<a id="M05-CAP-PROFILE-5ece9f76c54dd0a2"></a>
- **M05-CAP-PROFILE-5ece9f76c54dd0a2**: Allergies
  Origin: original 4574

<a id="M05-CAP-PROFILE-8d1b0669274f2c54"></a>
- **M05-CAP-PROFILE-8d1b0669274f2c54**: Vascular Access
  Origin: original 4574

<a id="M05-CAP-PROFILE-5575494b7cc0fbb3"></a>
- **M05-CAP-PROFILE-5575494b7cc0fbb3**: Genetic Diagnosis
  Origin: original 4574

<a id="M05-CAP-PROFILE-70f98b2127d3f2f0"></a>
- **M05-CAP-PROFILE-70f98b2127d3f2f0**: Major Procedures
  Origin: original 4574

<a id="M05-CAP-PROFILE-2721401578c98ab1"></a>
- **M05-CAP-PROFILE-2721401578c98ab1**: Emergency Considerations
  Origin: original 4574

<a id="M05-CAP-PROFILE-22a6639767e0a6d1"></a>
- **M05-CAP-PROFILE-22a6639767e0a6d1**: Transition Functions:
  Origin: original 4574

<a id="M05-CAP-PROFILE-a31f0ca16ae07216"></a>
- **M05-CAP-PROFILE-a31f0ca16ae07216**: Structured Pediatric Summary
  Origin: original 4574

<a id="M05-CAP-PROFILE-70784463e50afff2"></a>
- **M05-CAP-PROFILE-70784463e50afff2**: Longitudinal Renal History
  Origin: original 4574

<a id="M05-CAP-PROFILE-5de02c92fa8f983f"></a>
- **M05-CAP-PROFILE-5de02c92fa8f983f**: Dialysis History
  Origin: original 4574, original 4599

<a id="M05-CAP-PROFILE-b8884e71d187a716"></a>
- **M05-CAP-PROFILE-b8884e71d187a716**: Transplant History
  Origin: original 4574, original 4599

<a id="M05-CAP-PROFILE-a3241cf77d991407"></a>
- **M05-CAP-PROFILE-a3241cf77d991407**: Imaging
  Origin: original 4574, original 4599

<a id="M05-CAP-PROFILE-2d2ffbcbba25564e"></a>
- **M05-CAP-PROFILE-2d2ffbcbba25564e**: Pathology
  Origin: original 4574, original 4599

<a id="M05-CAP-PROFILE-f43a0702ad91f5fb"></a>
- **M05-CAP-PROFILE-f43a0702ad91f5fb**: Current Care Plan
  Origin: original 4574, original 4599

<a id="M05-CAP-PROFILE-dcf03e8095dfe278"></a>
- **M05-CAP-PROFILE-dcf03e8095dfe278**: Adult Specialist Handover
  Origin: original 4574

<a id="M05-CAP-PROFILE-248e55b099715870"></a>
- **M05-CAP-PROFILE-248e55b099715870**: Cross-Border Functions:
  Origin: original 4574

<a id="M05-CAP-PROFILE-3875d574f1dbc00f"></a>
- **M05-CAP-PROFILE-3875d574f1dbc00f**: Multilingual Clinical Summary
  Origin: original 4574

<a id="M05-CAP-PROFILE-8382fe79b09178ea"></a>
- **M05-CAP-PROFILE-8382fe79b09178ea**: Standardized Data Exchange
  Origin: original 4574

<a id="M05-CAP-PROFILE-58ee25c963db67bc"></a>
- **M05-CAP-PROFILE-58ee25c963db67bc**: Patient-authorized Access
  Origin: original 4574

<a id="M05-CAP-PROFILE-bd52f084b53f646b"></a>
- **M05-CAP-PROFILE-bd52f084b53f646b**: Emergency Access Rules
  Origin: original 4574

<a id="M05-CAP-PROFILE-e7cb54962030eabf"></a>
- **M05-CAP-PROFILE-e7cb54962030eabf**: Jurisdiction-aware Data Sharing
  Origin: original 4574

<a id="M05-CAP-PROFILE-0320d403926c4a4f"></a>
- **M05-CAP-PROFILE-0320d403926c4a4f**: Prevent loss of clinically important information when pediatric renal patients transition into adult healthcare.
  Origin: original 4599

<a id="M05-CAP-PROFILE-14468478fe040eaa"></a>
- **M05-CAP-PROFILE-14468478fe040eaa**: Patient Education
  Origin: original 4599

<a id="M05-CAP-PROFILE-76819cc9b7f5f07d"></a>
- **M05-CAP-PROFILE-76819cc9b7f5f07d**: Self-management Skills
  Origin: original 4599

<a id="M05-CAP-PROFILE-d8893edb21b7a8cf"></a>
- **M05-CAP-PROFILE-d8893edb21b7a8cf**: Diagnosis History
  Origin: original 4599

<a id="M05-CAP-PROFILE-00d8f338d2a5b2aa"></a>
- **M05-CAP-PROFILE-00d8f338d2a5b2aa**: Kidney Function History
  Origin: original 4599

<a id="M05-CAP-PROFILE-78167df60625f73c"></a>
- **M05-CAP-PROFILE-78167df60625f73c**: Surgical History
  Origin: original 4599

<a id="M05-CAP-PROFILE-2cbd1f2aea929b9b"></a>
- **M05-CAP-PROFILE-2cbd1f2aea929b9b**: Medication History
  Origin: original 4599

<a id="M05-CAP-PROFILE-5d3e821555030f9d"></a>
- **M05-CAP-PROFILE-5d3e821555030f9d**: Complication History
  Origin: original 4599

<a id="M05-CAP-PROFILE-eea812bae63ced56"></a>
- **M05-CAP-PROFILE-eea812bae63ced56**: Adult Provider Handover
  Origin: original 4599

<a id="M05-CAP-PROFILE-b4665d95eb5d5afc"></a>
- **M05-CAP-PROFILE-b4665d95eb5d5afc**: Lifelong Record:
  Origin: original 4599

<a id="M05-CAP-PROFILE-7cee3c470e603226"></a>
- **M05-CAP-PROFILE-7cee3c470e603226**: Preserves the pediatric renal trajectory as part of the patient's permanent EDHT health history.
  Origin: original 4599

<a id="M05-CAP-PROFILE-1665d47c4be756a9"></a>
- **M05-CAP-PROFILE-1665d47c4be756a9**: Transition Workflow:
  Origin: original 4599

<a id="M05-CAP-PROFILE-21c53768cdb9e5cc"></a>
- **M05-CAP-PROFILE-21c53768cdb9e5cc**: Preparation → Readiness Assessment → Structured Summary → Adult Provider Transfer → Confirmation → Follow-up.
  Origin: original 4599

<a id="M05-CAP-PROFILE-1dd6ca0f8f06ecdc"></a>
- **M05-CAP-PROFILE-1dd6ca0f8f06ecdc**: Medical Passport:
  Origin: original 4599

<a id="M05-CAP-PROFILE-23c683c9525adf1d"></a>
- **M05-CAP-PROFILE-23c683c9525adf1d**: Critical renal and transplant information remains continuously available according to authorization rules.
  Origin: original 4599

## Preserved source metadata

<a id="M05-CAP-PROFILE-5ba74d8fcc7b20cc"></a>
- **M05-CAP-PROFILE-5ba74d8fcc7b20cc**: Status

<a id="M05-CAP-PROFILE-d5232cbd3a326267"></a>
- **M05-CAP-PROFILE-d5232cbd3a326267**: Documentation

<a id="M05-CAP-PROFILE-6f33acf3afb37064"></a>
- **M05-CAP-PROFILE-6f33acf3afb37064**: ---

<a id="M05-CAP-PROFILE-4fbeeb87456accf5"></a>
- **M05-CAP-PROFILE-4fbeeb87456accf5**: Supports

<a id="M05-CAP-PROFILE-6510c5c511a879bc"></a>
- **M05-CAP-PROFILE-6510c5c511a879bc**: Purpose:

<a id="M05-CAP-PROFILE-b88b375a44ccd619"></a>
- **M05-CAP-PROFILE-b88b375a44ccd619**: Status:

<a id="M05-CAP-PROFILE-b34f593f0f83a1d1"></a>
- **M05-CAP-PROFILE-b34f593f0f83a1d1**: Core Functions:

[Applied migration](../../../audit/master-05/requirement_migration.json) · [Gap disposition](../../../audit/master-05/gap_disposition.json) · [Readiness gates](../../../audit/master-05/implementation_gate_matrix.json).
