# CORE-CAP-DEVICES — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: DeviceIdentity, ConfigurationVersion, ImplantLifecycleEvent, SignalChannel, AcquisitionQuality, MonitoringSession. Dependencies: CAP-DEVICES, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-IMAGING, CAP-LABORATORY, CAP-ENCOUNTER.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M06-NEUROSURG-DEVICES

Original IDs: 4628, 5104, 5115.

Shunts, neurostimulators and intrathecal/other implants share one lifecycle owner with distinct device profiles. Preserve manufacturer/model, anatomical configuration, current versus historical settings, programming/revision, battery/explantation and exact imaging-compatibility evidence. Read access cannot issue device commands.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

### M06-NEUROSURG-MONITORING

Original IDs: 4643, 5121.

Intracranial/multimodal and intraoperative acquisition are separate device-channel profiles with units, clocks, signal quality, baseline/change/recovery and anesthesia/intervention correlation. Qualified real-time clinical monitoring is not replaced by recorded signals or AI.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-DEVICES-e770ad846a11f110"></a>
- **M06-CAP-DEVICES-e770ad846a11f110**: Maintain a traceable lifecycle record for pediatric neurosurgical implants and cerebrospinal fluid diversion devices.
  Origin: original 4628

<a id="M06-CAP-DEVICES-ee15650758528faa"></a>
- **M06-CAP-DEVICES-ee15650758528faa**: Device Identification
  Origin: original 4628, original 5104

<a id="M06-CAP-DEVICES-dd666838f2dbf4ec"></a>
- **M06-CAP-DEVICES-dd666838f2dbf4ec**: Manufacturer Data
  Origin: original 4628

<a id="M06-CAP-DEVICES-86a74bad378a2a8e"></a>
- **M06-CAP-DEVICES-86a74bad378a2a8e**: Implant Type
  Origin: original 4628

<a id="M06-CAP-DEVICES-cc27562050093027"></a>
- **M06-CAP-DEVICES-cc27562050093027**: Implant Location
  Origin: original 4628

<a id="M06-CAP-DEVICES-d07223af79bcd364"></a>
- **M06-CAP-DEVICES-d07223af79bcd364**: Implantation Date
  Origin: original 4628

<a id="M06-CAP-DEVICES-b5830ae042281947"></a>
- **M06-CAP-DEVICES-b5830ae042281947**: Device Settings
  Origin: original 4628

<a id="M06-CAP-DEVICES-33a33b326c6003f9"></a>
- **M06-CAP-DEVICES-33a33b326c6003f9**: MRI-related Device Information
  Origin: original 4628

<a id="M06-CAP-DEVICES-1c8bfaf85d02d2a6"></a>
- **M06-CAP-DEVICES-1c8bfaf85d02d2a6**: Revision History
  Origin: original 4628, original 5104, original 5115

<a id="M06-CAP-DEVICES-a665e0269d1da506"></a>
- **M06-CAP-DEVICES-a665e0269d1da506**: Malfunction History
  Origin: original 4628

<a id="M06-CAP-DEVICES-46cdd9e5fce2291e"></a>
- **M06-CAP-DEVICES-46cdd9e5fce2291e**: Infection History
  Origin: original 4628, original 5104, original 5115

<a id="M06-CAP-DEVICES-6b97ceb64c1fa0a3"></a>
- **M06-CAP-DEVICES-6b97ceb64c1fa0a3**: Imaging Correlation
  Origin: original 4628

<a id="M06-CAP-DEVICES-0a1d6ef82391c26e"></a>
- **M06-CAP-DEVICES-0a1d6ef82391c26e**: Procedure History
  Origin: original 4628

<a id="M06-CAP-DEVICES-586d9a85c74613b5"></a>
- **M06-CAP-DEVICES-586d9a85c74613b5**: Device Removal
  Origin: original 4628

<a id="M06-CAP-DEVICES-2e10257fcae7583d"></a>
- **M06-CAP-DEVICES-2e10257fcae7583d**: Replacement
  Origin: original 4628

<a id="M06-CAP-DEVICES-d3fbb0ba7a23096c"></a>
- **M06-CAP-DEVICES-d3fbb0ba7a23096c**: Current Device Status
  Origin: original 4628, original 5104

<a id="M06-CAP-DEVICES-bbf2edbbfacad60e"></a>
- **M06-CAP-DEVICES-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 4628, original 5104

<a id="M06-CAP-DEVICES-be5dc8339e0b9559"></a>
- **M06-CAP-DEVICES-be5dc8339e0b9559**: Critical Device Information
  Origin: original 4628

<a id="M06-CAP-DEVICES-bed8ad682d09c8e8"></a>
- **M06-CAP-DEVICES-bed8ad682d09c8e8**: Device-related Alert Context
  Origin: original 4628

<a id="M06-CAP-DEVICES-35c9d991c22265f3"></a>
- **M06-CAP-DEVICES-35c9d991c22265f3**: Follow-up Requirements
  Origin: original 4628

<a id="M06-CAP-DEVICES-653edeaef3be2ea3"></a>
- **M06-CAP-DEVICES-653edeaef3be2ea3**: Revision Surveillance
  Origin: original 4628

<a id="M06-CAP-DEVICES-5e3b4ac27329d9e2"></a>
- **M06-CAP-DEVICES-5e3b4ac27329d9e2**: Emergency Device Passport
  Origin: original 4628

<a id="M06-CAP-DEVICES-2f27e552d723d07f"></a>
- **M06-CAP-DEVICES-2f27e552d723d07f**: Integrations:
  Origin: original 4628, original 5121

<a id="M06-CAP-DEVICES-43dd69ead2249cc2"></a>
- **M06-CAP-DEVICES-43dd69ead2249cc2**: Neurosurgery
  Origin: original 4628, original 5121

<a id="M06-CAP-DEVICES-c062dc13ee048cfd"></a>
- **M06-CAP-DEVICES-c062dc13ee048cfd**: Radiology
  Origin: original 4628

<a id="M06-CAP-DEVICES-ef963e812dc56963"></a>
- **M06-CAP-DEVICES-ef963e812dc56963**: Emergency Medicine
  Origin: original 4628

<a id="M06-CAP-DEVICES-9e9dbb804ca8197a"></a>
- **M06-CAP-DEVICES-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4628

<a id="M06-CAP-DEVICES-e27ce1fedf3670bb"></a>
- **M06-CAP-DEVICES-e27ce1fedf3670bb**: Device Registry
  Origin: original 4628

<a id="M06-CAP-DEVICES-0cff3716680982b3"></a>
- **M06-CAP-DEVICES-0cff3716680982b3**: Integrate intracranial and neurological monitoring in high-acuity pediatric care.
  Origin: original 4643

<a id="M06-CAP-DEVICES-1f6c664f9786e505"></a>
- **M06-CAP-DEVICES-1f6c664f9786e505**: Intracranial Pressure Data
  Origin: original 4643

<a id="M06-CAP-DEVICES-4499d5aebb03c5c1"></a>
- **M06-CAP-DEVICES-4499d5aebb03c5c1**: Cerebral Perfusion Context
  Origin: original 4643

<a id="M06-CAP-DEVICES-2d8526c5953b347c"></a>
- **M06-CAP-DEVICES-2d8526c5953b347c**: Neurological Examination
  Origin: original 4643

<a id="M06-CAP-DEVICES-57001b14a38776bc"></a>
- **M06-CAP-DEVICES-57001b14a38776bc**: Pupillary Assessment
  Origin: original 4643

<a id="M06-CAP-DEVICES-063b4f82c6fbd099"></a>
- **M06-CAP-DEVICES-063b4f82c6fbd099**: EEG
  Origin: original 4643

<a id="M06-CAP-DEVICES-6a5b48b4f2de5708"></a>
- **M06-CAP-DEVICES-6a5b48b4f2de5708**: Hemodynamics
  Origin: original 4643

<a id="M06-CAP-DEVICES-d77f0fba9e1c058a"></a>
- **M06-CAP-DEVICES-d77f0fba9e1c058a**: Ventilation
  Origin: original 4643

<a id="M06-CAP-DEVICES-276c9631ffc17e76"></a>
- **M06-CAP-DEVICES-276c9631ffc17e76**: Oxygenation
  Origin: original 4643

<a id="M06-CAP-DEVICES-e938795183a5f0eb"></a>
- **M06-CAP-DEVICES-e938795183a5f0eb**: Temperature
  Origin: original 4643

<a id="M06-CAP-DEVICES-d831fb3bb8efed58"></a>
- **M06-CAP-DEVICES-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4643

<a id="M06-CAP-DEVICES-3cfa39200ce0ea10"></a>
- **M06-CAP-DEVICES-3cfa39200ce0ea10**: Medication
  Origin: original 4643

<a id="M06-CAP-DEVICES-0051f0f3665d142b"></a>
- **M06-CAP-DEVICES-0051f0f3665d142b**: Device Data
  Origin: original 4643

<a id="M06-CAP-DEVICES-228b18d13e8b34f1"></a>
- **M06-CAP-DEVICES-228b18d13e8b34f1**: Procedures
  Origin: original 4643

<a id="M06-CAP-DEVICES-0fb99c57950f8dff"></a>
- **M06-CAP-DEVICES-0fb99c57950f8dff**: Clinical Events
  Origin: original 4643

<a id="M06-CAP-DEVICES-eb3e89bb6406a080"></a>
- **M06-CAP-DEVICES-eb3e89bb6406a080**: Timeline Functions:
  Origin: original 4643

<a id="M06-CAP-DEVICES-716ad854047e595f"></a>
- **M06-CAP-DEVICES-716ad854047e595f**: Synchronizes physiological signals, interventions and neurological events for clinical review.
  Origin: original 4643

<a id="M06-CAP-DEVICES-fb7dcbc64a7ed5f8"></a>
- **M06-CAP-DEVICES-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4643

<a id="M06-CAP-DEVICES-3749d3bf664c90c9"></a>
- **M06-CAP-DEVICES-3749d3bf664c90c9**: Multimodal Trend Detection
  Origin: original 4643

<a id="M06-CAP-DEVICES-198a6bb73addefd7"></a>
- **M06-CAP-DEVICES-198a6bb73addefd7**: Event Correlation
  Origin: original 4643

<a id="M06-CAP-DEVICES-82dea9934a0434e1"></a>
- **M06-CAP-DEVICES-82dea9934a0434e1**: Deterioration Signal Support
  Origin: original 4643

<a id="M06-CAP-DEVICES-07f8d474b8b4141c"></a>
- **M06-CAP-DEVICES-07f8d474b8b4141c**: Safety:
  Origin: original 4643, original 5121

<a id="M06-CAP-DEVICES-648df6d0a4c4b01c"></a>
- **M06-CAP-DEVICES-648df6d0a4c4b01c**: AI does not autonomously change critical-care therapy.
  Origin: original 4643

<a id="M06-CAP-DEVICES-d2d6f480535881b9"></a>
- **M06-CAP-DEVICES-d2d6f480535881b9**: Maintain complete traceability of implanted CSF shunt systems throughout the patient's lifetime.
  Origin: original 5104

<a id="M06-CAP-DEVICES-d22c9405754691e3"></a>
- **M06-CAP-DEVICES-d22c9405754691e3**: Shunt Type
  Origin: original 5104

<a id="M06-CAP-DEVICES-d20d78cf6c8da632"></a>
- **M06-CAP-DEVICES-d20d78cf6c8da632**: Manufacturer Context
  Origin: original 5104, original 5115

<a id="M06-CAP-DEVICES-70f07e5f38adc755"></a>
- **M06-CAP-DEVICES-70f07e5f38adc755**: Valve Context
  Origin: original 5104

<a id="M06-CAP-DEVICES-b1a3fea7a953079a"></a>
- **M06-CAP-DEVICES-b1a3fea7a953079a**: Programmable Setting Context
  Origin: original 5104

<a id="M06-CAP-DEVICES-d283cd16c0bbf249"></a>
- **M06-CAP-DEVICES-d283cd16c0bbf249**: Implant Date
  Origin: original 5104, original 5115

<a id="M06-CAP-DEVICES-2049f2e34ede1477"></a>
- **M06-CAP-DEVICES-2049f2e34ede1477**: Anatomical Configuration
  Origin: original 5104

<a id="M06-CAP-DEVICES-81b25245e09492f6"></a>
- **M06-CAP-DEVICES-81b25245e09492f6**: Previous Malfunction
  Origin: original 5104

<a id="M06-CAP-DEVICES-b49d39b2bb98fd4b"></a>
- **M06-CAP-DEVICES-b49d39b2bb98fd4b**: Previous Infection
  Origin: original 5104

<a id="M06-CAP-DEVICES-a3241cf77d991407"></a>
- **M06-CAP-DEVICES-a3241cf77d991407**: Imaging
  Origin: original 5104

<a id="M06-CAP-DEVICES-73ca56fe7a8ce3ae"></a>
- **M06-CAP-DEVICES-73ca56fe7a8ce3ae**: Device-related Symptoms
  Origin: original 5104

<a id="M06-CAP-DEVICES-0d86946e629cc025"></a>
- **M06-CAP-DEVICES-0d86946e629cc025**: Follow-up
  Origin: original 5104

<a id="M06-CAP-DEVICES-c6f7575f5c957a01"></a>
- **M06-CAP-DEVICES-c6f7575f5c957a01**: Replacement Context
  Origin: original 5104

<a id="M06-CAP-DEVICES-60540b4343e8534e"></a>
- **M06-CAP-DEVICES-60540b4343e8534e**: Emergency Information
  Origin: original 5104

<a id="M06-CAP-DEVICES-74e16e70b497e6fe"></a>
- **M06-CAP-DEVICES-74e16e70b497e6fe**: Current Setting Visibility
  Origin: original 5104

<a id="M06-CAP-DEVICES-5ac2cc0012180695"></a>
- **M06-CAP-DEVICES-5ac2cc0012180695**: Malfunction Context
  Origin: original 5104

<a id="M06-CAP-DEVICES-7b02eab921c63ffc"></a>
- **M06-CAP-DEVICES-7b02eab921c63ffc**: MRI-related Device Context
  Origin: original 5104

<a id="M06-CAP-DEVICES-c556310e0988bfe3"></a>
- **M06-CAP-DEVICES-c556310e0988bfe3**: Emergency Passport Integration
  Origin: original 5104

<a id="M06-CAP-DEVICES-6c6b72c61d95ccd8"></a>
- **M06-CAP-DEVICES-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 5104

<a id="M06-CAP-DEVICES-ef6dc72b554b9fdf"></a>
- **M06-CAP-DEVICES-ef6dc72b554b9fdf**: The current device configuration must remain distinguishable from historical configurations.
  Origin: original 5104

<a id="M06-CAP-DEVICES-43a67d79860bcb43"></a>
- **M06-CAP-DEVICES-43a67d79860bcb43**: HIGH
  Origin: original 5104, original 5115

<a id="M06-CAP-DEVICES-138f649b251ad091"></a>
- **M06-CAP-DEVICES-138f649b251ad091**: Provide a unified lifecycle registry for implanted neurological devices.
  Origin: original 5115

<a id="M06-CAP-DEVICES-7e84509910349735"></a>
- **M06-CAP-DEVICES-7e84509910349735**: Device Type
  Origin: original 5115

<a id="M06-CAP-DEVICES-34304b1ae529d0b7"></a>
- **M06-CAP-DEVICES-34304b1ae529d0b7**: Device Identifier
  Origin: original 5115

<a id="M06-CAP-DEVICES-9b5712585c986636"></a>
- **M06-CAP-DEVICES-9b5712585c986636**: Anatomical Location
  Origin: original 5115

<a id="M06-CAP-DEVICES-57b970264c415ddd"></a>
- **M06-CAP-DEVICES-57b970264c415ddd**: Indication
  Origin: original 5115

<a id="M06-CAP-DEVICES-5661259c705d3504"></a>
- **M06-CAP-DEVICES-5661259c705d3504**: Current Configuration
  Origin: original 5115

<a id="M06-CAP-DEVICES-b4f8f676355dcd8c"></a>
- **M06-CAP-DEVICES-b4f8f676355dcd8c**: Programming History
  Origin: original 5115

<a id="M06-CAP-DEVICES-77bd4e56b4cbc626"></a>
- **M06-CAP-DEVICES-77bd4e56b4cbc626**: Battery Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-2643f76730a4daa8"></a>
- **M06-CAP-DEVICES-2643f76730a4daa8**: Device Failure Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-f622d2c09e12abfb"></a>
- **M06-CAP-DEVICES-f622d2c09e12abfb**: Imaging Compatibility Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-abe31ec4bf062a11"></a>
- **M06-CAP-DEVICES-abe31ec4bf062a11**: Follow-up Schedule
  Origin: original 5115

<a id="M06-CAP-DEVICES-facd46bdc84d9dab"></a>
- **M06-CAP-DEVICES-facd46bdc84d9dab**: Explantation Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-9b12a6d7e24c98c3"></a>
- **M06-CAP-DEVICES-9b12a6d7e24c98c3**: Device Classes:
  Origin: original 5115

<a id="M06-CAP-DEVICES-9d83ba326c66ce74"></a>
- **M06-CAP-DEVICES-9d83ba326c66ce74**: Neurostimulators
  Origin: original 5115

<a id="M06-CAP-DEVICES-c4d2556622b6bb5c"></a>
- **M06-CAP-DEVICES-c4d2556622b6bb5c**: Vagus Nerve Stimulation Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-c50796c8ab14c947"></a>
- **M06-CAP-DEVICES-c50796c8ab14c947**: Deep Brain Stimulation Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-1cb083a28e294da2"></a>
- **M06-CAP-DEVICES-1cb083a28e294da2**: Intrathecal Systems Context
  Origin: original 5115

<a id="M06-CAP-DEVICES-df039ad0b6fe4a68"></a>
- **M06-CAP-DEVICES-df039ad0b6fe4a68**: CSF Devices
  Origin: original 5115

<a id="M06-CAP-DEVICES-0fdea20cb3900d40"></a>
- **M06-CAP-DEVICES-0fdea20cb3900d40**: Other Neurological Implants
  Origin: original 5115

<a id="M06-CAP-DEVICES-6c7b0e14eb1a6f4a"></a>
- **M06-CAP-DEVICES-6c7b0e14eb1a6f4a**: Integrate intraoperative neurological monitoring with pediatric neurosurgical procedures and outcomes.
  Origin: original 5121

<a id="M06-CAP-DEVICES-f53ba0c0214c2b5f"></a>
- **M06-CAP-DEVICES-f53ba0c0214c2b5f**: Procedure
  Origin: original 5121

<a id="M06-CAP-DEVICES-af0dfd48b88dbd67"></a>
- **M06-CAP-DEVICES-af0dfd48b88dbd67**: Monitoring Indication
  Origin: original 5121

<a id="M06-CAP-DEVICES-a247377b027607bb"></a>
- **M06-CAP-DEVICES-a247377b027607bb**: Monitoring Modalities
  Origin: original 5121

<a id="M06-CAP-DEVICES-78a5277bb261698e"></a>
- **M06-CAP-DEVICES-78a5277bb261698e**: Baseline Signals
  Origin: original 5121

<a id="M06-CAP-DEVICES-c16161853cac4169"></a>
- **M06-CAP-DEVICES-c16161853cac4169**: Intraoperative Changes
  Origin: original 5121

<a id="M06-CAP-DEVICES-7d7870896dcccf5d"></a>
- **M06-CAP-DEVICES-7d7870896dcccf5d**: Surgical Event Correlation
  Origin: original 5121

<a id="M06-CAP-DEVICES-9fbcbcd1fa610088"></a>
- **M06-CAP-DEVICES-9fbcbcd1fa610088**: Anesthesia Context
  Origin: original 5121

<a id="M06-CAP-DEVICES-402166cfda70726e"></a>
- **M06-CAP-DEVICES-402166cfda70726e**: Intervention Context
  Origin: original 5121

<a id="M06-CAP-DEVICES-df9591480b2c3b00"></a>
- **M06-CAP-DEVICES-df9591480b2c3b00**: Signal Recovery Context
  Origin: original 5121

<a id="M06-CAP-DEVICES-de824d7978c240ff"></a>
- **M06-CAP-DEVICES-de824d7978c240ff**: Final Monitoring Status
  Origin: original 5121

<a id="M06-CAP-DEVICES-79c8bf6fcfd11721"></a>
- **M06-CAP-DEVICES-79c8bf6fcfd11721**: Postoperative Neurological Status
  Origin: original 5121

<a id="M06-CAP-DEVICES-02a107b61a68280d"></a>
- **M06-CAP-DEVICES-02a107b61a68280d**: Formal Report
  Origin: original 5121

<a id="M06-CAP-DEVICES-4fcfb82e137a6aa0"></a>
- **M06-CAP-DEVICES-4fcfb82e137a6aa0**: Historical Procedure Comparison
  Origin: original 5121

<a id="M06-CAP-DEVICES-c736106523040888"></a>
- **M06-CAP-DEVICES-c736106523040888**: Neurophysiology
  Origin: original 5121

<a id="M06-CAP-DEVICES-37ea4931bb315bc8"></a>
- **M06-CAP-DEVICES-37ea4931bb315bc8**: Anesthesiology
  Origin: original 5121

<a id="M06-CAP-DEVICES-0c2d408e413351d3"></a>
- **M06-CAP-DEVICES-0c2d408e413351d3**: Orthopedics
  Origin: original 5121

<a id="M06-CAP-DEVICES-1776431d6d17f344"></a>
- **M06-CAP-DEVICES-1776431d6d17f344**: Neurology
  Origin: original 5121

<a id="M06-CAP-DEVICES-0cedac3465442cf7"></a>
- **M06-CAP-DEVICES-0cedac3465442cf7**: Automated analysis remains supportive and does not replace real-time qualified intraoperative monitoring.
  Origin: original 5121

## Preserved source metadata

<a id="M06-CAP-DEVICES-6510c5c511a879bc"></a>
- **M06-CAP-DEVICES-6510c5c511a879bc**: Purpose:

<a id="M06-CAP-DEVICES-b34f593f0f83a1d1"></a>
- **M06-CAP-DEVICES-b34f593f0f83a1d1**: Core Functions:

<a id="M06-CAP-DEVICES-b88b375a44ccd619"></a>
- **M06-CAP-DEVICES-b88b375a44ccd619**: Status:

<a id="M06-CAP-DEVICES-d5232cbd3a326267"></a>
- **M06-CAP-DEVICES-d5232cbd3a326267**: Documentation

<a id="M06-CAP-DEVICES-6f33acf3afb37064"></a>
- **M06-CAP-DEVICES-6f33acf3afb37064**: ---

<a id="M06-CAP-DEVICES-fd85b703c00f8755"></a>
- **M06-CAP-DEVICES-fd85b703c00f8755**: MVP Relevance:

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).

## Bounded device evidence contract

[Schema](../../../specs/device-configuration.schema.json) · [Contract scope and remaining gates](../../engineering/device-configuration-contract.md). Data and testing have partial evidence only. This contract records documented configuration provenance; it neither reads live device state nor programs a device.
