# CORE-CAP-PROFILE — shared capability and profiles

MASTER-07 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M06-SURGICAL-PASSPORT

Original IDs: 4648, 4798.

Neurosurgical and dental/craniofacial emergency views share passport ownership with specialty profiles. Preserve current device configuration, placement/removal/replacement, critical medications, bleeding/immunosuppression and communication needs; underlying device records stay authoritative.

Assemble authorized current passport → record readiness and handover scope → send to chosen authorized provider → delivery plus acceptance acknowledgement → unresolved follow-up.

### M07-ORTHO-PASSPORT

Original IDs: 4674.

Orthopedic adult handover preserves major diagnoses/injuries/operations, current implants/prostheses/aids, medication/allergy, imaging, function and rehab timeline. Multilingual and cross-border views reference verified source versions and purpose-specific consent, not unrestricted disclosure.

Assemble authorized current passport → record readiness and handover scope → send to chosen authorized provider → delivery plus acceptance acknowledgement → unresolved follow-up.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M07-CAP-PROFILE-19b1a30da92dd296"></a>
- **M07-CAP-PROFILE-19b1a30da92dd296**: Provides rapid access to critical hematology information.
  Origin: original 4195

<a id="M07-CAP-PROFILE-45d89fd69e192fb8"></a>
- **M07-CAP-PROFILE-45d89fd69e192fb8**: May display
  Origin: original 4195

<a id="M07-CAP-PROFILE-5f124f9e42776b79"></a>
- **M07-CAP-PROFILE-5f124f9e42776b79**: Diagnosis
  Origin: original 4195

<a id="M07-CAP-PROFILE-6cab26a2e684fc1d"></a>
- **M07-CAP-PROFILE-6cab26a2e684fc1d**: Hemophilia Type
  Origin: original 4195

<a id="M07-CAP-PROFILE-6ce8222558295ca7"></a>
- **M07-CAP-PROFILE-6ce8222558295ca7**: Factor Deficiency
  Origin: original 4195

<a id="M07-CAP-PROFILE-331e4c203938dc57"></a>
- **M07-CAP-PROFILE-331e4c203938dc57**: Sickle Cell Disease
  Origin: original 4195

<a id="M07-CAP-PROFILE-a048fa6dfcb9dafe"></a>
- **M07-CAP-PROFILE-a048fa6dfcb9dafe**: Antibodies
  Origin: original 4195

<a id="M07-CAP-PROFILE-2fe9a70b697f1a61"></a>
- **M07-CAP-PROFILE-2fe9a70b697f1a61**: Blood Group
  Origin: original 4195

<a id="M07-CAP-PROFILE-05e576d32d372247"></a>
- **M07-CAP-PROFILE-05e576d32d372247**: Current Therapy
  Origin: original 4195

<a id="M07-CAP-PROFILE-244d7f17060b34f2"></a>
- **M07-CAP-PROFILE-244d7f17060b34f2**: Emergency Plan
  Origin: original 4195

<a id="M07-CAP-PROFILE-26ec2fdaa9320dd5"></a>
- **M07-CAP-PROFILE-26ec2fdaa9320dd5**: Specialist Contact
  Origin: original 4195

<a id="M07-CAP-PROFILE-1ccc15c7999c5cf9"></a>
- **M07-CAP-PROFILE-1ccc15c7999c5cf9**: Supports multilingual cross-border emergency access with appropriate authorization.
  Origin: original 4195

<a id="M07-CAP-PROFILE-52d321d641d5a768"></a>
- **M07-CAP-PROFILE-52d321d641d5a768**: Supports structured transition to adult hematology.
  Origin: original 4199

<a id="M07-CAP-PROFILE-b666ff6b79b05815"></a>
- **M07-CAP-PROFILE-b666ff6b79b05815**: Transition Readiness
  Origin: original 4199, original 4599

<a id="M07-CAP-PROFILE-474bef8e88720a2c"></a>
- **M07-CAP-PROFILE-474bef8e88720a2c**: Medical Summary
  Origin: original 4199

<a id="M07-CAP-PROFILE-b596b3fab9cbd244"></a>
- **M07-CAP-PROFILE-b596b3fab9cbd244**: Treatment History
  Origin: original 4199, original 4574

<a id="M07-CAP-PROFILE-aaaf0a34a8eb8286"></a>
- **M07-CAP-PROFILE-aaaf0a34a8eb8286**: Genetics
  Origin: original 4199, original 4574, original 4599

<a id="M07-CAP-PROFILE-746fa472ce1cde7e"></a>
- **M07-CAP-PROFILE-746fa472ce1cde7e**: Transfusion History
  Origin: original 4199

<a id="M07-CAP-PROFILE-c35ee9a6e1e3ef76"></a>
- **M07-CAP-PROFILE-c35ee9a6e1e3ef76**: Emergency Plans
  Origin: original 4199

<a id="M07-CAP-PROFILE-4b7e31fbae94bdd0"></a>
- **M07-CAP-PROFILE-4b7e31fbae94bdd0**: Adult Specialist Transfer
  Origin: original 4199

<a id="M07-CAP-PROFILE-1c59f0738a89c49b"></a>
- **M07-CAP-PROFILE-1c59f0738a89c49b**: Continuity Tracking
  Origin: original 4199

<a id="M07-CAP-PROFILE-c92dd73be198e423"></a>
- **M07-CAP-PROFILE-c92dd73be198e423**: Maintains the longitudinal EDHT Medical Passport across transition.
  Origin: original 4199

<a id="M07-CAP-PROFILE-df0714f9c6df44da"></a>
- **M07-CAP-PROFILE-df0714f9c6df44da**: Creates a lifelong structured cancer survivorship record.
  Origin: original 4248

<a id="M07-CAP-PROFILE-011257364aecfedb"></a>
- **M07-CAP-PROFILE-011257364aecfedb**: Contains
  Origin: original 4248

<a id="M07-CAP-PROFILE-f38e2d7b4218da7b"></a>
- **M07-CAP-PROFILE-f38e2d7b4218da7b**: Original Diagnosis
  Origin: original 4248

<a id="M07-CAP-PROFILE-ba6403d34b52aaa0"></a>
- **M07-CAP-PROFILE-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 4248

<a id="M07-CAP-PROFILE-bc506fdefc6e7e7b"></a>
- **M07-CAP-PROFILE-bc506fdefc6e7e7b**: Surgery
  Origin: original 4248

<a id="M07-CAP-PROFILE-3d455b7f1446ba3a"></a>
- **M07-CAP-PROFILE-3d455b7f1446ba3a**: Chemotherapy Exposure
  Origin: original 4248

<a id="M07-CAP-PROFILE-3d738654eb6ce4c7"></a>
- **M07-CAP-PROFILE-3d738654eb6ce4c7**: Radiation Exposure
  Origin: original 4248

<a id="M07-CAP-PROFILE-49f514f04b66d6d1"></a>
- **M07-CAP-PROFILE-49f514f04b66d6d1**: Cellular Therapy
  Origin: original 4248

<a id="M07-CAP-PROFILE-c25e5083a540778a"></a>
- **M07-CAP-PROFILE-c25e5083a540778a**: Transplantation
  Origin: original 4248

<a id="M07-CAP-PROFILE-52eeb5fac7fe876a"></a>
- **M07-CAP-PROFILE-52eeb5fac7fe876a**: Major Toxicities
  Origin: original 4248

<a id="M07-CAP-PROFILE-adf311d8f0cdd952"></a>
- **M07-CAP-PROFILE-adf311d8f0cdd952**: Late-effect Risks
  Origin: original 4248

<a id="M07-CAP-PROFILE-8520336af5aecacb"></a>
- **M07-CAP-PROFILE-8520336af5aecacb**: Surveillance History
  Origin: original 4248

<a id="M07-CAP-PROFILE-8209a843ad3b14c9"></a>
- **M07-CAP-PROFILE-8209a843ad3b14c9**: Travels with the patient's EDHT Medical Passport into adulthood.
  Origin: original 4248

<a id="M07-CAP-PROFILE-054a3336c5119b77"></a>
- **M07-CAP-PROFILE-054a3336c5119b77**: Preserve critical kidney information across institutions, countries and the transition from pediatric to adult medicine.
  Origin: original 4574

<a id="M07-CAP-PROFILE-9f366be43afe8714"></a>
- **M07-CAP-PROFILE-9f366be43afe8714**: Medical Passport Data:
  Origin: original 4574, original 4674

<a id="M07-CAP-PROFILE-dc5270143908309b"></a>
- **M07-CAP-PROFILE-dc5270143908309b**: Major Renal Diagnosis
  Origin: original 4574

<a id="M07-CAP-PROFILE-b2eb868ed704db34"></a>
- **M07-CAP-PROFILE-b2eb868ed704db34**: Baseline Kidney Function
  Origin: original 4574

<a id="M07-CAP-PROFILE-b79b9b9ee462b388"></a>
- **M07-CAP-PROFILE-b79b9b9ee462b388**: CKD Status
  Origin: original 4574

<a id="M07-CAP-PROFILE-872a841a831b8897"></a>
- **M07-CAP-PROFILE-872a841a831b8897**: Dialysis Status
  Origin: original 4574

<a id="M07-CAP-PROFILE-cafddaa86defb329"></a>
- **M07-CAP-PROFILE-cafddaa86defb329**: Kidney Transplant Status
  Origin: original 4574

<a id="M07-CAP-PROFILE-22d10b3ff243c333"></a>
- **M07-CAP-PROFILE-22d10b3ff243c333**: Critical Medication
  Origin: original 4574, original 4648, original 4798

<a id="M07-CAP-PROFILE-bbbece7a847db335"></a>
- **M07-CAP-PROFILE-bbbece7a847db335**: Immunosuppression
  Origin: original 4574

<a id="M07-CAP-PROFILE-5ece9f76c54dd0a2"></a>
- **M07-CAP-PROFILE-5ece9f76c54dd0a2**: Allergies
  Origin: original 4574, original 4648, original 4674, original 4798

<a id="M07-CAP-PROFILE-8d1b0669274f2c54"></a>
- **M07-CAP-PROFILE-8d1b0669274f2c54**: Vascular Access
  Origin: original 4574

<a id="M07-CAP-PROFILE-5575494b7cc0fbb3"></a>
- **M07-CAP-PROFILE-5575494b7cc0fbb3**: Genetic Diagnosis
  Origin: original 4574

<a id="M07-CAP-PROFILE-70f98b2127d3f2f0"></a>
- **M07-CAP-PROFILE-70f98b2127d3f2f0**: Major Procedures
  Origin: original 4574

<a id="M07-CAP-PROFILE-2721401578c98ab1"></a>
- **M07-CAP-PROFILE-2721401578c98ab1**: Emergency Considerations
  Origin: original 4574, original 4648

<a id="M07-CAP-PROFILE-22a6639767e0a6d1"></a>
- **M07-CAP-PROFILE-22a6639767e0a6d1**: Transition Functions:
  Origin: original 4574, original 4674

<a id="M07-CAP-PROFILE-a31f0ca16ae07216"></a>
- **M07-CAP-PROFILE-a31f0ca16ae07216**: Structured Pediatric Summary
  Origin: original 4574

<a id="M07-CAP-PROFILE-70784463e50afff2"></a>
- **M07-CAP-PROFILE-70784463e50afff2**: Longitudinal Renal History
  Origin: original 4574

<a id="M07-CAP-PROFILE-5de02c92fa8f983f"></a>
- **M07-CAP-PROFILE-5de02c92fa8f983f**: Dialysis History
  Origin: original 4574, original 4599

<a id="M07-CAP-PROFILE-b8884e71d187a716"></a>
- **M07-CAP-PROFILE-b8884e71d187a716**: Transplant History
  Origin: original 4574, original 4599

<a id="M07-CAP-PROFILE-a3241cf77d991407"></a>
- **M07-CAP-PROFILE-a3241cf77d991407**: Imaging
  Origin: original 4574, original 4599

<a id="M07-CAP-PROFILE-2d2ffbcbba25564e"></a>
- **M07-CAP-PROFILE-2d2ffbcbba25564e**: Pathology
  Origin: original 4574, original 4599

<a id="M07-CAP-PROFILE-f43a0702ad91f5fb"></a>
- **M07-CAP-PROFILE-f43a0702ad91f5fb**: Current Care Plan
  Origin: original 4574, original 4599

<a id="M07-CAP-PROFILE-dcf03e8095dfe278"></a>
- **M07-CAP-PROFILE-dcf03e8095dfe278**: Adult Specialist Handover
  Origin: original 4574

<a id="M07-CAP-PROFILE-248e55b099715870"></a>
- **M07-CAP-PROFILE-248e55b099715870**: Cross-Border Functions:
  Origin: original 4574, original 4648, original 4674, original 4798

<a id="M07-CAP-PROFILE-3875d574f1dbc00f"></a>
- **M07-CAP-PROFILE-3875d574f1dbc00f**: Multilingual Clinical Summary
  Origin: original 4574, original 4674

<a id="M07-CAP-PROFILE-8382fe79b09178ea"></a>
- **M07-CAP-PROFILE-8382fe79b09178ea**: Standardized Data Exchange
  Origin: original 4574

<a id="M07-CAP-PROFILE-58ee25c963db67bc"></a>
- **M07-CAP-PROFILE-58ee25c963db67bc**: Patient-authorized Access
  Origin: original 4574

<a id="M07-CAP-PROFILE-bd52f084b53f646b"></a>
- **M07-CAP-PROFILE-bd52f084b53f646b**: Emergency Access Rules
  Origin: original 4574

<a id="M07-CAP-PROFILE-e7cb54962030eabf"></a>
- **M07-CAP-PROFILE-e7cb54962030eabf**: Jurisdiction-aware Data Sharing
  Origin: original 4574

<a id="M07-CAP-PROFILE-0320d403926c4a4f"></a>
- **M07-CAP-PROFILE-0320d403926c4a4f**: Prevent loss of clinically important information when pediatric renal patients transition into adult healthcare.
  Origin: original 4599

<a id="M07-CAP-PROFILE-14468478fe040eaa"></a>
- **M07-CAP-PROFILE-14468478fe040eaa**: Patient Education
  Origin: original 4599

<a id="M07-CAP-PROFILE-76819cc9b7f5f07d"></a>
- **M07-CAP-PROFILE-76819cc9b7f5f07d**: Self-management Skills
  Origin: original 4599

<a id="M07-CAP-PROFILE-d8893edb21b7a8cf"></a>
- **M07-CAP-PROFILE-d8893edb21b7a8cf**: Diagnosis History
  Origin: original 4599

<a id="M07-CAP-PROFILE-00d8f338d2a5b2aa"></a>
- **M07-CAP-PROFILE-00d8f338d2a5b2aa**: Kidney Function History
  Origin: original 4599

<a id="M07-CAP-PROFILE-78167df60625f73c"></a>
- **M07-CAP-PROFILE-78167df60625f73c**: Surgical History
  Origin: original 4599

<a id="M07-CAP-PROFILE-2cbd1f2aea929b9b"></a>
- **M07-CAP-PROFILE-2cbd1f2aea929b9b**: Medication History
  Origin: original 4599

<a id="M07-CAP-PROFILE-5d3e821555030f9d"></a>
- **M07-CAP-PROFILE-5d3e821555030f9d**: Complication History
  Origin: original 4599

<a id="M07-CAP-PROFILE-eea812bae63ced56"></a>
- **M07-CAP-PROFILE-eea812bae63ced56**: Adult Provider Handover
  Origin: original 4599, original 4674

<a id="M07-CAP-PROFILE-b4665d95eb5d5afc"></a>
- **M07-CAP-PROFILE-b4665d95eb5d5afc**: Lifelong Record:
  Origin: original 4599

<a id="M07-CAP-PROFILE-7cee3c470e603226"></a>
- **M07-CAP-PROFILE-7cee3c470e603226**: Preserves the pediatric renal trajectory as part of the patient's permanent EDHT health history.
  Origin: original 4599

<a id="M07-CAP-PROFILE-1665d47c4be756a9"></a>
- **M07-CAP-PROFILE-1665d47c4be756a9**: Transition Workflow:
  Origin: original 4599

<a id="M07-CAP-PROFILE-21c53768cdb9e5cc"></a>
- **M07-CAP-PROFILE-21c53768cdb9e5cc**: Preparation → Readiness Assessment → Structured Summary → Adult Provider Transfer → Confirmation → Follow-up.
  Origin: original 4599

<a id="M07-CAP-PROFILE-1dd6ca0f8f06ecdc"></a>
- **M07-CAP-PROFILE-1dd6ca0f8f06ecdc**: Medical Passport:
  Origin: original 4599

<a id="M07-CAP-PROFILE-23c683c9525adf1d"></a>
- **M07-CAP-PROFILE-23c683c9525adf1d**: Critical renal and transplant information remains continuously available according to authorization rules.
  Origin: original 4599

<a id="M07-CAP-PROFILE-9dcd7a8641494856"></a>
- **M07-CAP-PROFILE-9dcd7a8641494856**: Make critical neurosurgical information available during authorized emergency care.
  Origin: original 4648

<a id="M07-CAP-PROFILE-c8aca248c8114eba"></a>
- **M07-CAP-PROFILE-c8aca248c8114eba**: Critical Data:
  Origin: original 4648

<a id="M07-CAP-PROFILE-3c619c7daa1fa522"></a>
- **M07-CAP-PROFILE-3c619c7daa1fa522**: Major Neurosurgical Diagnosis
  Origin: original 4648

<a id="M07-CAP-PROFILE-630020ed95e129e5"></a>
- **M07-CAP-PROFILE-630020ed95e129e5**: Previous Brain Surgery
  Origin: original 4648

<a id="M07-CAP-PROFILE-b06704c377e5f1c7"></a>
- **M07-CAP-PROFILE-b06704c377e5f1c7**: Previous Spine Surgery
  Origin: original 4648

<a id="M07-CAP-PROFILE-cc03c79abe49b627"></a>
- **M07-CAP-PROFILE-cc03c79abe49b627**: CSF Shunt
  Origin: original 4648

<a id="M07-CAP-PROFILE-b2572b45419a393f"></a>
- **M07-CAP-PROFILE-b2572b45419a393f**: Programmable Valve Information
  Origin: original 4648

<a id="M07-CAP-PROFILE-c1ec6c97ab5cc387"></a>
- **M07-CAP-PROFILE-c1ec6c97ab5cc387**: Neuromodulation Device
  Origin: original 4648

<a id="M07-CAP-PROFILE-ea692684a720d46f"></a>
- **M07-CAP-PROFILE-ea692684a720d46f**: Other Implanted Devices
  Origin: original 4648

<a id="M07-CAP-PROFILE-f7a1e52ded87e8ca"></a>
- **M07-CAP-PROFILE-f7a1e52ded87e8ca**: Epilepsy
  Origin: original 4648

<a id="M07-CAP-PROFILE-092034fbb21f8a85"></a>
- **M07-CAP-PROFILE-092034fbb21f8a85**: Rescue Medication
  Origin: original 4648

<a id="M07-CAP-PROFILE-4b67be3b4875be86"></a>
- **M07-CAP-PROFILE-4b67be3b4875be86**: Baseline Neurological Status
  Origin: original 4648

<a id="M07-CAP-PROFILE-bc560175f5b9014f"></a>
- **M07-CAP-PROFILE-bc560175f5b9014f**: Communication Needs
  Origin: original 4648

<a id="M07-CAP-PROFILE-3a7b4d0ff9f2fee2"></a>
- **M07-CAP-PROFILE-3a7b4d0ff9f2fee2**: Multilingual Summary
  Origin: original 4648, original 4798

<a id="M07-CAP-PROFILE-528eb69072b09210"></a>
- **M07-CAP-PROFILE-528eb69072b09210**: Standardized Device Information
  Origin: original 4648

<a id="M07-CAP-PROFILE-c225be7e018f69d0"></a>
- **M07-CAP-PROFILE-c225be7e018f69d0**: Source Verification
  Origin: original 4648, original 4674, original 4798

<a id="M07-CAP-PROFILE-3afa87b2d3fb1be8"></a>
- **M07-CAP-PROFILE-3afa87b2d3fb1be8**: Last-update Timestamp
  Origin: original 4648

<a id="M07-CAP-PROFILE-ded6b1ea70b7faa2"></a>
- **M07-CAP-PROFILE-ded6b1ea70b7faa2**: Authorized Emergency Access
  Origin: original 4648, original 4798

<a id="M07-CAP-PROFILE-4eb2af6b34b4b40a"></a>
- **M07-CAP-PROFILE-4eb2af6b34b4b40a**: Privacy:
  Origin: original 4648

<a id="M07-CAP-PROFILE-ab49fc855072988d"></a>
- **M07-CAP-PROFILE-ab49fc855072988d**: Only minimum clinically necessary emergency information is exposed according to applicable authorization rules.
  Origin: original 4648

<a id="M07-CAP-PROFILE-c54c78f9b2e6a51a"></a>
- **M07-CAP-PROFILE-c54c78f9b2e6a51a**: Preserve critical musculoskeletal information across institutions and during transition into adult orthopedic care.
  Origin: original 4674

<a id="M07-CAP-PROFILE-d47a6b6a2492740b"></a>
- **M07-CAP-PROFILE-d47a6b6a2492740b**: Major Orthopedic Diagnoses
  Origin: original 4674

<a id="M07-CAP-PROFILE-0ad42178c0d39544"></a>
- **M07-CAP-PROFILE-0ad42178c0d39544**: Congenital Disorders
  Origin: original 4674

<a id="M07-CAP-PROFILE-397e0ebd891f6b35"></a>
- **M07-CAP-PROFILE-397e0ebd891f6b35**: Major Injuries
  Origin: original 4674

<a id="M07-CAP-PROFILE-7cf6d593c75da14d"></a>
- **M07-CAP-PROFILE-7cf6d593c75da14d**: Previous Operations
  Origin: original 4674

<a id="M07-CAP-PROFILE-c9051714ca179bdf"></a>
- **M07-CAP-PROFILE-c9051714ca179bdf**: Spine Surgery
  Origin: original 4674

<a id="M07-CAP-PROFILE-18bf7a985a27008b"></a>
- **M07-CAP-PROFILE-18bf7a985a27008b**: Joint Surgery
  Origin: original 4674

<a id="M07-CAP-PROFILE-efa012d5cce2d0d8"></a>
- **M07-CAP-PROFILE-efa012d5cce2d0d8**: Implants
  Origin: original 4674

<a id="M07-CAP-PROFILE-1ccaf2dba59437c5"></a>
- **M07-CAP-PROFILE-1ccaf2dba59437c5**: Prostheses
  Origin: original 4674

<a id="M07-CAP-PROFILE-6d5f1ca95f15c056"></a>
- **M07-CAP-PROFILE-6d5f1ca95f15c056**: Mobility Devices
  Origin: original 4674

<a id="M07-CAP-PROFILE-a46c73c34db799e5"></a>
- **M07-CAP-PROFILE-a46c73c34db799e5**: Current Medication
  Origin: original 4674

<a id="M07-CAP-PROFILE-fca68ccf901c1ea7"></a>
- **M07-CAP-PROFILE-fca68ccf901c1ea7**: Functional Baseline
  Origin: original 4674

<a id="M07-CAP-PROFILE-8ec54c2036878b58"></a>
- **M07-CAP-PROFILE-8ec54c2036878b58**: Important Imaging History
  Origin: original 4674

<a id="M07-CAP-PROFILE-8cef7a67810e7a4e"></a>
- **M07-CAP-PROFILE-8cef7a67810e7a4e**: Pediatric Orthopedic Summary
  Origin: original 4674

<a id="M07-CAP-PROFILE-3fb0470a594cd1ed"></a>
- **M07-CAP-PROFILE-3fb0470a594cd1ed**: Growth-related History
  Origin: original 4674

<a id="M07-CAP-PROFILE-edc288f488d3e8cf"></a>
- **M07-CAP-PROFILE-edc288f488d3e8cf**: Surgical Timeline
  Origin: original 4674

<a id="M07-CAP-PROFILE-daf1346fc3d8297e"></a>
- **M07-CAP-PROFILE-daf1346fc3d8297e**: Implant Registry
  Origin: original 4674

<a id="M07-CAP-PROFILE-3be2c5a575f1f7c2"></a>
- **M07-CAP-PROFILE-3be2c5a575f1f7c2**: Rehabilitation History
  Origin: original 4674

<a id="M07-CAP-PROFILE-f83bf2d111ca4570"></a>
- **M07-CAP-PROFILE-f83bf2d111ca4570**: Current Functional Status
  Origin: original 4674

<a id="M07-CAP-PROFILE-cf8ece5635012c99"></a>
- **M07-CAP-PROFILE-cf8ece5635012c99**: Standardized Implant Information
  Origin: original 4674

<a id="M07-CAP-PROFILE-ccd49a0982a9939b"></a>
- **M07-CAP-PROFILE-ccd49a0982a9939b**: Authorized Data Exchange
  Origin: original 4674

<a id="M07-CAP-PROFILE-71e9acdc140f882d"></a>
- **M07-CAP-PROFILE-71e9acdc140f882d**: Preserve clinically important dental, orthodontic and maxillofacial information for emergency and cross-provider care.
  Origin: original 4798

<a id="M07-CAP-PROFILE-dc3be1dec66c98c9"></a>
- **M07-CAP-PROFILE-dc3be1dec66c98c9**: Passport Data:
  Origin: original 4798

<a id="M07-CAP-PROFILE-d2eae9897120d89a"></a>
- **M07-CAP-PROFILE-d2eae9897120d89a**: Major Dental Conditions
  Origin: original 4798

<a id="M07-CAP-PROFILE-ae44b63491f36da2"></a>
- **M07-CAP-PROFILE-ae44b63491f36da2**: Dental Trauma History
  Origin: original 4798

<a id="M07-CAP-PROFILE-8e2f4759042f915d"></a>
- **M07-CAP-PROFILE-8e2f4759042f915d**: Maxillofacial Surgery
  Origin: original 4798

<a id="M07-CAP-PROFILE-d70eedcaa61262eb"></a>
- **M07-CAP-PROFILE-d70eedcaa61262eb**: Orthodontic Appliances
  Origin: original 4798

<a id="M07-CAP-PROFILE-c573bb4f0bd19b12"></a>
- **M07-CAP-PROFILE-c573bb4f0bd19b12**: Dental Implants where applicable
  Origin: original 4798

<a id="M07-CAP-PROFILE-1eae0cabf94498fc"></a>
- **M07-CAP-PROFILE-1eae0cabf94498fc**: Craniofacial Devices
  Origin: original 4798

<a id="M07-CAP-PROFILE-8f7e2677112e3ea3"></a>
- **M07-CAP-PROFILE-8f7e2677112e3ea3**: Bleeding Risk Context
  Origin: original 4798

<a id="M07-CAP-PROFILE-1740c0c8ffda46a5"></a>
- **M07-CAP-PROFILE-1740c0c8ffda46a5**: Immunosuppression Context
  Origin: original 4798

<a id="M07-CAP-PROFILE-05492c87ade645af"></a>
- **M07-CAP-PROFILE-05492c87ade645af**: Relevant Systemic Disease
  Origin: original 4798

<a id="M07-CAP-PROFILE-184735c4bb807db8"></a>
- **M07-CAP-PROFILE-184735c4bb807db8**: Special Communication Needs
  Origin: original 4798

<a id="M07-CAP-PROFILE-3aaa094482c93d40"></a>
- **M07-CAP-PROFILE-3aaa094482c93d40**: Device Registry:
  Origin: original 4798

<a id="M07-CAP-PROFILE-e0551f8e40f9dadb"></a>
- **M07-CAP-PROFILE-e0551f8e40f9dadb**: Appliance Type
  Origin: original 4798

<a id="M07-CAP-PROFILE-6a039a0f5b73a730"></a>
- **M07-CAP-PROFILE-6a039a0f5b73a730**: Implant/Device Type
  Origin: original 4798

<a id="M07-CAP-PROFILE-81f85d539c130b07"></a>
- **M07-CAP-PROFILE-81f85d539c130b07**: Placement Date
  Origin: original 4798

<a id="M07-CAP-PROFILE-9b5712585c986636"></a>
- **M07-CAP-PROFILE-9b5712585c986636**: Anatomical Location
  Origin: original 4798

<a id="M07-CAP-PROFILE-998255ff250f86ba"></a>
- **M07-CAP-PROFILE-998255ff250f86ba**: Manufacturer where applicable
  Origin: original 4798

<a id="M07-CAP-PROFILE-4b8ef00443c876e8"></a>
- **M07-CAP-PROFILE-4b8ef00443c876e8**: Current Status
  Origin: original 4798

<a id="M07-CAP-PROFILE-0d3f13b95715ed13"></a>
- **M07-CAP-PROFILE-0d3f13b95715ed13**: Removal/Replacement History
  Origin: original 4798

<a id="M07-CAP-PROFILE-315bf83133191f18"></a>
- **M07-CAP-PROFILE-315bf83133191f18**: Standardized Terminology
  Origin: original 4798

## Preserved source metadata

<a id="M07-CAP-PROFILE-5ba74d8fcc7b20cc"></a>
- **M07-CAP-PROFILE-5ba74d8fcc7b20cc**: Status

<a id="M07-CAP-PROFILE-d5232cbd3a326267"></a>
- **M07-CAP-PROFILE-d5232cbd3a326267**: Documentation

<a id="M07-CAP-PROFILE-6f33acf3afb37064"></a>
- **M07-CAP-PROFILE-6f33acf3afb37064**: ---

<a id="M07-CAP-PROFILE-4fbeeb87456accf5"></a>
- **M07-CAP-PROFILE-4fbeeb87456accf5**: Supports

<a id="M07-CAP-PROFILE-6510c5c511a879bc"></a>
- **M07-CAP-PROFILE-6510c5c511a879bc**: Purpose:

<a id="M07-CAP-PROFILE-b88b375a44ccd619"></a>
- **M07-CAP-PROFILE-b88b375a44ccd619**: Status:

<a id="M07-CAP-PROFILE-b34f593f0f83a1d1"></a>
- **M07-CAP-PROFILE-b34f593f0f83a1d1**: Core Functions:

[Applied migration](../../../audit/master-07/requirement_migration.json) · [Gap disposition](../../../audit/master-07/gap_disposition.json) · [Readiness gates](../../../audit/master-07/implementation_gate_matrix.json).
