# CORE-CAP-DEVICES — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M07-ORTHO-IMPLANTS

Original IDs: 1133, 4667.

Surgical and orthopedic implants share device lifecycle ownership. Preserve manufacturer/model/serial/lot when available, location, implantation/revision/removal/replacement, follow-up and imaging context. Missing identifiers remain unknown; recall surveillance needs authoritative source and acknowledged response, and MRI context is not compatibility approval.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

### M07-ORTHO-ASSISTIVE

Original IDs: 4668, 4694.

Orthoses, prostheses, wheelchairs/walkers/standing/seating and communication/environmental aids are profiles of shared device lifecycle. Preserve needs/prescription, fitting, growth adjustment, skin/comfort, maintenance/replacement, use and functional goals; prescription authority stays clinical and device data does not authorize control.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

### M07-REHAB-ROBOTICS

Original IDs: 4695.

Robotic/exoskeleton and gait/upper-limb devices retain prescription/protocol references, settings, session/adverse-event links, baseline, progress and maintenance. Encounter services own therapy delivery; source integration is read-only and does not program devices or select treatment intensity. The bounded configuration schema is not a complete robotics contract.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

### M08-RPM

Original IDs: 69.

Medical wearable/home connector profiles retain listed brands, measured signals and source clocks/quality/pairing/consent with deduplication. Account trust devices remain identity-owned. RPM data paths do not authorize device commands, closed-loop treatment or emergency classification.

Verify device/patient identity and declared capability → capture attributable configuration/lifecycle or read-only signal channel → validate units, clock/quality and provenance → authorized clinical review → correction/revision without rewriting history. Device commands, programming and closed-loop control are outside this contract. Imaging compatibility requires specific current manufacturer/device evidence.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-DEVICES-f59d0c6bb7b5566c"></a>
- **M08-CAP-DEVICES-f59d0c6bb7b5566c**: Defines integration with wearable devices, home medical equipment and health monitoring systems.
  Origin: original 69

<a id="M08-CAP-DEVICES-6d6c48312bac1fc9"></a>
- **M08-CAP-DEVICES-6d6c48312bac1fc9**: Apple Watch
  Origin: original 69

<a id="M08-CAP-DEVICES-3fd6d448f446d863"></a>
- **M08-CAP-DEVICES-3fd6d448f446d863**: Samsung Galaxy Watch
  Origin: original 69

<a id="M08-CAP-DEVICES-3e2f5b639a3337ea"></a>
- **M08-CAP-DEVICES-3e2f5b639a3337ea**: Google Pixel Watch
  Origin: original 69

<a id="M08-CAP-DEVICES-edc055266d364f4d"></a>
- **M08-CAP-DEVICES-edc055266d364f4d**: Fitbit
  Origin: original 69

<a id="M08-CAP-DEVICES-bf5f65e5991ae2bc"></a>
- **M08-CAP-DEVICES-bf5f65e5991ae2bc**: Garmin
  Origin: original 69

<a id="M08-CAP-DEVICES-97ef0dd2dfe8a277"></a>
- **M08-CAP-DEVICES-97ef0dd2dfe8a277**: Withings
  Origin: original 69

<a id="M08-CAP-DEVICES-3655ed1f2b44173f"></a>
- **M08-CAP-DEVICES-3655ed1f2b44173f**: Omron
  Origin: original 69

<a id="M08-CAP-DEVICES-37d46b6ca54aa10c"></a>
- **M08-CAP-DEVICES-37d46b6ca54aa10c**: Dexcom CGM
  Origin: original 69

<a id="M08-CAP-DEVICES-54050b8492aa689b"></a>
- **M08-CAP-DEVICES-54050b8492aa689b**: Abbott FreeStyle Libre
  Origin: original 69

<a id="M08-CAP-DEVICES-9d7a95fb24939009"></a>
- **M08-CAP-DEVICES-9d7a95fb24939009**: Blood Pressure Monitors
  Origin: original 69

<a id="M08-CAP-DEVICES-23d5943d7099d139"></a>
- **M08-CAP-DEVICES-23d5943d7099d139**: Pulse Oximeters
  Origin: original 69

<a id="M08-CAP-DEVICES-a20869e783ad9faa"></a>
- **M08-CAP-DEVICES-a20869e783ad9faa**: Smart Thermometers
  Origin: original 69

<a id="M08-CAP-DEVICES-d12f0f338485ccfe"></a>
- **M08-CAP-DEVICES-d12f0f338485ccfe**: Smart Scales
  Origin: original 69

<a id="M08-CAP-DEVICES-9ca34de7a972a86a"></a>
- **M08-CAP-DEVICES-9ca34de7a972a86a**: ECG Devices
  Origin: original 69

<a id="M08-CAP-DEVICES-f5cb94d0f0206eb5"></a>
- **M08-CAP-DEVICES-f5cb94d0f0206eb5**: Heart Rate
  Origin: original 69

<a id="M08-CAP-DEVICES-0db3379ed4d9ccfa"></a>
- **M08-CAP-DEVICES-0db3379ed4d9ccfa**: ECG
  Origin: original 69

<a id="M08-CAP-DEVICES-9da77df714be61fe"></a>
- **M08-CAP-DEVICES-9da77df714be61fe**: Blood Pressure
  Origin: original 69

<a id="M08-CAP-DEVICES-cad6b866668fdaaf"></a>
- **M08-CAP-DEVICES-cad6b866668fdaaf**: Blood Oxygen (SpO₂)
  Origin: original 69

<a id="M08-CAP-DEVICES-fcc0d1982e5688b3"></a>
- **M08-CAP-DEVICES-fcc0d1982e5688b3**: Blood Glucose
  Origin: original 69

<a id="M08-CAP-DEVICES-b59c5b8ff3990af8"></a>
- **M08-CAP-DEVICES-b59c5b8ff3990af8**: Body Temperature
  Origin: original 69

<a id="M08-CAP-DEVICES-cdcecae88521194c"></a>
- **M08-CAP-DEVICES-cdcecae88521194c**: Weight
  Origin: original 69

<a id="M08-CAP-DEVICES-03cc8a2b432e82eb"></a>
- **M08-CAP-DEVICES-03cc8a2b432e82eb**: BMI
  Origin: original 69

<a id="M08-CAP-DEVICES-9e512531ebf2d396"></a>
- **M08-CAP-DEVICES-9e512531ebf2d396**: Sleep
  Origin: original 69

<a id="M08-CAP-DEVICES-ee2f7ffb0a082fdd"></a>
- **M08-CAP-DEVICES-ee2f7ffb0a082fdd**: Activity
  Origin: original 69

<a id="M08-CAP-DEVICES-68f10bc3a659c374"></a>
- **M08-CAP-DEVICES-68f10bc3a659c374**: Calories
  Origin: original 69

<a id="M08-CAP-DEVICES-f63ae5b65503cc9e"></a>
- **M08-CAP-DEVICES-f63ae5b65503cc9e**: Steps
  Origin: original 69

<a id="M08-CAP-DEVICES-c37bd3d46a7617b1"></a>
- **M08-CAP-DEVICES-c37bd3d46a7617b1**: Medical Device
  Origin: original 69

<a id="M08-CAP-DEVICES-60ad5f0e95a3c0f2"></a>
- **M08-CAP-DEVICES-60ad5f0e95a3c0f2**: ↓
  Origin: original 69

<a id="M08-CAP-DEVICES-ec97104fef181d18"></a>
- **M08-CAP-DEVICES-ec97104fef181d18**: Bluetooth / Wi-Fi
  Origin: original 69

<a id="M08-CAP-DEVICES-12bfefd894369e7f"></a>
- **M08-CAP-DEVICES-12bfefd894369e7f**: Mobile App
  Origin: original 69

<a id="M08-CAP-DEVICES-b8e47fb5ac8d9676"></a>
- **M08-CAP-DEVICES-b8e47fb5ac8d9676**: Secure API
  Origin: original 69

<a id="M08-CAP-DEVICES-9e9dbb804ca8197a"></a>
- **M08-CAP-DEVICES-9e9dbb804ca8197a**: Medical Passport
  Origin: original 69, original 4628

<a id="M08-CAP-DEVICES-3907aea3a2fc44b1"></a>
- **M08-CAP-DEVICES-3907aea3a2fc44b1**: Medical Profile
  Origin: original 69

<a id="M08-CAP-DEVICES-d46b6ca6f554a9cc"></a>
- **M08-CAP-DEVICES-d46b6ca6f554a9cc**: AI Analysis
  Origin: original 69

<a id="M08-CAP-DEVICES-6c2f4d895f25a6d5"></a>
- **M08-CAP-DEVICES-6c2f4d895f25a6d5**: Notifications
  Origin: original 69

<a id="M08-CAP-DEVICES-d62d61a84a7b2cfb"></a>
- **M08-CAP-DEVICES-d62d61a84a7b2cfb**: Real-time
  Origin: original 69

<a id="M08-CAP-DEVICES-8dd9527fef3c08a6"></a>
- **M08-CAP-DEVICES-8dd9527fef3c08a6**: Scheduled
  Origin: original 69

<a id="M08-CAP-DEVICES-d28172c28db7b3c5"></a>
- **M08-CAP-DEVICES-d28172c28db7b3c5**: Manual
  Origin: original 69

<a id="M08-CAP-DEVICES-c308bf47964c141e"></a>
- **M08-CAP-DEVICES-c308bf47964c141e**: Offline Sync
  Origin: original 69

<a id="M08-CAP-DEVICES-bfc08617f1b0bbd7"></a>
- **M08-CAP-DEVICES-bfc08617f1b0bbd7**: Trend Analysis
  Origin: original 69

<a id="M08-CAP-DEVICES-ed64514fe8f2d3aa"></a>
- **M08-CAP-DEVICES-ed64514fe8f2d3aa**: Health Risk Detection
  Origin: original 69

<a id="M08-CAP-DEVICES-7c09466f036b5150"></a>
- **M08-CAP-DEVICES-7c09466f036b5150**: Early Warning Alerts
  Origin: original 69

<a id="M08-CAP-DEVICES-6a9b537670e510f6"></a>
- **M08-CAP-DEVICES-6a9b537670e510f6**: Chronic Disease Monitoring
  Origin: original 69

<a id="M08-CAP-DEVICES-d917d5a880f7558b"></a>
- **M08-CAP-DEVICES-d917d5a880f7558b**: Personalized Recommendations
  Origin: original 69

<a id="M08-CAP-DEVICES-7d8144413b0e7fd6"></a>
- **M08-CAP-DEVICES-7d8144413b0e7fd6**: Emergency Detection
  Origin: original 69

<a id="M08-CAP-DEVICES-fd9e20c30e79e8ea"></a>
- **M08-CAP-DEVICES-fd9e20c30e79e8ea**: Bluetooth LE Health
  Origin: original 69

<a id="M08-CAP-DEVICES-1cf0a8899b5d23ff"></a>
- **M08-CAP-DEVICES-1cf0a8899b5d23ff**: Apple HealthKit
  Origin: original 69

<a id="M08-CAP-DEVICES-45a2ae50daabf6f0"></a>
- **M08-CAP-DEVICES-45a2ae50daabf6f0**: Google Health Connect
  Origin: original 69

<a id="M08-CAP-DEVICES-f4fbc6beb7cb5414"></a>
- **M08-CAP-DEVICES-f4fbc6beb7cb5414**: IEEE 11073
  Origin: original 69

<a id="M08-CAP-DEVICES-5c78614719eb13f5"></a>
- **M08-CAP-DEVICES-5c78614719eb13f5**: FHIR Observation
  Origin: original 69

<a id="M08-CAP-DEVICES-ccfa9146ccc99b76"></a>
- **M08-CAP-DEVICES-ccfa9146ccc99b76**: Encrypted Transmission
  Origin: original 69

<a id="M08-CAP-DEVICES-418a53df0af12568"></a>
- **M08-CAP-DEVICES-418a53df0af12568**: Device Authentication
  Origin: original 69

<a id="M08-CAP-DEVICES-fcecdb23269c6ca0"></a>
- **M08-CAP-DEVICES-fcecdb23269c6ca0**: User Consent
  Origin: original 69

<a id="M08-CAP-DEVICES-d20a95b6b63719a7"></a>
- **M08-CAP-DEVICES-d20a95b6b63719a7**: Audit Logs
  Origin: original 69

<a id="M08-CAP-DEVICES-60ff2d46433db7ba"></a>
- **M08-CAP-DEVICES-60ff2d46433db7ba**: Secure Pairing
  Origin: original 69

<a id="M08-CAP-DEVICES-41bd3320fb6ee128"></a>
- **M08-CAP-DEVICES-41bd3320fb6ee128**: ├── Medical Profile
  Origin: original 69

<a id="M08-CAP-DEVICES-93522f774f6d0bd5"></a>
- **M08-CAP-DEVICES-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 69

<a id="M08-CAP-DEVICES-225d721817a80b2f"></a>
- **M08-CAP-DEVICES-225d721817a80b2f**: ├── Notifications
  Origin: original 69

<a id="M08-CAP-DEVICES-9d07865e1a8a4cfc"></a>
- **M08-CAP-DEVICES-9d07865e1a8a4cfc**: ├── SOS Module
  Origin: original 69

<a id="M08-CAP-DEVICES-a7f2ddd3ac9459b5"></a>
- **M08-CAP-DEVICES-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 69

<a id="M08-CAP-DEVICES-61bb6805419a5121"></a>
- **M08-CAP-DEVICES-61bb6805419a5121**: ├── Analytics
  Origin: original 69

<a id="M08-CAP-DEVICES-bcc206f041686e88"></a>
- **M08-CAP-DEVICES-bcc206f041686e88**: ├── Reporting
  Origin: original 69

<a id="M08-CAP-DEVICES-37bfdffca1a32095"></a>
- **M08-CAP-DEVICES-37bfdffca1a32095**: Future Features
  Origin: original 69

<a id="M08-CAP-DEVICES-8b7c7e1d139ef590"></a>
- **M08-CAP-DEVICES-8b7c7e1d139ef590**: Implantable Device Support
  Origin: original 69

<a id="M08-CAP-DEVICES-f086948703591c8d"></a>
- **M08-CAP-DEVICES-f086948703591c8d**: Remote Patient Monitoring
  Origin: original 69

<a id="M08-CAP-DEVICES-9110faede348b790"></a>
- **M08-CAP-DEVICES-9110faede348b790**: Smart Insulin Pens
  Origin: original 69

<a id="M08-CAP-DEVICES-b304438de4c324c6"></a>
- **M08-CAP-DEVICES-b304438de4c324c6**: Smart Inhalers
  Origin: original 69

<a id="M08-CAP-DEVICES-2094a804e0e12628"></a>
- **M08-CAP-DEVICES-2094a804e0e12628**: AI Continuous Health Monitoring
  Origin: original 69

<a id="M08-CAP-DEVICES-54a07dc82df09152"></a>
- **M08-CAP-DEVICES-54a07dc82df09152**: Hospital Remote Monitoring
  Origin: original 69

<a id="M08-CAP-DEVICES-6241c8d8368a6078"></a>
- **M08-CAP-DEVICES-6241c8d8368a6078**: Predictive Emergency Alerts
  Origin: original 69

<a id="M08-CAP-DEVICES-1f262a6ffe573e34"></a>
- **M08-CAP-DEVICES-1f262a6ffe573e34**: Stores implanted surgical devices.
  Origin: original 1133

<a id="M08-CAP-DEVICES-78cc123e4d864d3c"></a>
- **M08-CAP-DEVICES-78cc123e4d864d3c**: Implant
  Origin: original 1133

<a id="M08-CAP-DEVICES-e6322ac09f884cf3"></a>
- **M08-CAP-DEVICES-e6322ac09f884cf3**: Manufacturer
  Origin: original 1133, original 4667

<a id="M08-CAP-DEVICES-d10a36a5dddd617a"></a>
- **M08-CAP-DEVICES-d10a36a5dddd617a**: Serial Number
  Origin: original 1133

<a id="M08-CAP-DEVICES-0d86946e629cc025"></a>
- **M08-CAP-DEVICES-0d86946e629cc025**: Follow-up
  Origin: original 1133, original 5104

<a id="M08-CAP-DEVICES-e770ad846a11f110"></a>
- **M08-CAP-DEVICES-e770ad846a11f110**: Maintain a traceable lifecycle record for pediatric neurosurgical implants and cerebrospinal fluid diversion devices.
  Origin: original 4628

<a id="M08-CAP-DEVICES-ee15650758528faa"></a>
- **M08-CAP-DEVICES-ee15650758528faa**: Device Identification
  Origin: original 4628, original 5104

<a id="M08-CAP-DEVICES-dd666838f2dbf4ec"></a>
- **M08-CAP-DEVICES-dd666838f2dbf4ec**: Manufacturer Data
  Origin: original 4628

<a id="M08-CAP-DEVICES-86a74bad378a2a8e"></a>
- **M08-CAP-DEVICES-86a74bad378a2a8e**: Implant Type
  Origin: original 4628

<a id="M08-CAP-DEVICES-cc27562050093027"></a>
- **M08-CAP-DEVICES-cc27562050093027**: Implant Location
  Origin: original 4628, original 4667

<a id="M08-CAP-DEVICES-d07223af79bcd364"></a>
- **M08-CAP-DEVICES-d07223af79bcd364**: Implantation Date
  Origin: original 4628, original 4667

<a id="M08-CAP-DEVICES-b5830ae042281947"></a>
- **M08-CAP-DEVICES-b5830ae042281947**: Device Settings
  Origin: original 4628, original 4695

<a id="M08-CAP-DEVICES-33a33b326c6003f9"></a>
- **M08-CAP-DEVICES-33a33b326c6003f9**: MRI-related Device Information
  Origin: original 4628

<a id="M08-CAP-DEVICES-1c8bfaf85d02d2a6"></a>
- **M08-CAP-DEVICES-1c8bfaf85d02d2a6**: Revision History
  Origin: original 4628, original 5104, original 5115

<a id="M08-CAP-DEVICES-a665e0269d1da506"></a>
- **M08-CAP-DEVICES-a665e0269d1da506**: Malfunction History
  Origin: original 4628

<a id="M08-CAP-DEVICES-46cdd9e5fce2291e"></a>
- **M08-CAP-DEVICES-46cdd9e5fce2291e**: Infection History
  Origin: original 4628, original 5104, original 5115

<a id="M08-CAP-DEVICES-6b97ceb64c1fa0a3"></a>
- **M08-CAP-DEVICES-6b97ceb64c1fa0a3**: Imaging Correlation
  Origin: original 4628

<a id="M08-CAP-DEVICES-0a1d6ef82391c26e"></a>
- **M08-CAP-DEVICES-0a1d6ef82391c26e**: Procedure History
  Origin: original 4628

<a id="M08-CAP-DEVICES-586d9a85c74613b5"></a>
- **M08-CAP-DEVICES-586d9a85c74613b5**: Device Removal
  Origin: original 4628

<a id="M08-CAP-DEVICES-2e10257fcae7583d"></a>
- **M08-CAP-DEVICES-2e10257fcae7583d**: Replacement
  Origin: original 4628, original 4667, original 4694

<a id="M08-CAP-DEVICES-d3fbb0ba7a23096c"></a>
- **M08-CAP-DEVICES-d3fbb0ba7a23096c**: Current Device Status
  Origin: original 4628, original 5104

<a id="M08-CAP-DEVICES-bbf2edbbfacad60e"></a>
- **M08-CAP-DEVICES-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 4628, original 5104

<a id="M08-CAP-DEVICES-be5dc8339e0b9559"></a>
- **M08-CAP-DEVICES-be5dc8339e0b9559**: Critical Device Information
  Origin: original 4628

<a id="M08-CAP-DEVICES-bed8ad682d09c8e8"></a>
- **M08-CAP-DEVICES-bed8ad682d09c8e8**: Device-related Alert Context
  Origin: original 4628

<a id="M08-CAP-DEVICES-35c9d991c22265f3"></a>
- **M08-CAP-DEVICES-35c9d991c22265f3**: Follow-up Requirements
  Origin: original 4628, original 4667

<a id="M08-CAP-DEVICES-653edeaef3be2ea3"></a>
- **M08-CAP-DEVICES-653edeaef3be2ea3**: Revision Surveillance
  Origin: original 4628

<a id="M08-CAP-DEVICES-5e3b4ac27329d9e2"></a>
- **M08-CAP-DEVICES-5e3b4ac27329d9e2**: Emergency Device Passport
  Origin: original 4628

<a id="M08-CAP-DEVICES-2f27e552d723d07f"></a>
- **M08-CAP-DEVICES-2f27e552d723d07f**: Integrations:
  Origin: original 4628, original 4668, original 4694, original 5121

<a id="M08-CAP-DEVICES-43dd69ead2249cc2"></a>
- **M08-CAP-DEVICES-43dd69ead2249cc2**: Neurosurgery
  Origin: original 4628, original 5121

<a id="M08-CAP-DEVICES-c062dc13ee048cfd"></a>
- **M08-CAP-DEVICES-c062dc13ee048cfd**: Radiology
  Origin: original 4628

<a id="M08-CAP-DEVICES-ef963e812dc56963"></a>
- **M08-CAP-DEVICES-ef963e812dc56963**: Emergency Medicine
  Origin: original 4628

<a id="M08-CAP-DEVICES-e27ce1fedf3670bb"></a>
- **M08-CAP-DEVICES-e27ce1fedf3670bb**: Device Registry
  Origin: original 4628

<a id="M08-CAP-DEVICES-0cff3716680982b3"></a>
- **M08-CAP-DEVICES-0cff3716680982b3**: Integrate intracranial and neurological monitoring in high-acuity pediatric care.
  Origin: original 4643

<a id="M08-CAP-DEVICES-1f6c664f9786e505"></a>
- **M08-CAP-DEVICES-1f6c664f9786e505**: Intracranial Pressure Data
  Origin: original 4643

<a id="M08-CAP-DEVICES-4499d5aebb03c5c1"></a>
- **M08-CAP-DEVICES-4499d5aebb03c5c1**: Cerebral Perfusion Context
  Origin: original 4643

<a id="M08-CAP-DEVICES-2d8526c5953b347c"></a>
- **M08-CAP-DEVICES-2d8526c5953b347c**: Neurological Examination
  Origin: original 4643

<a id="M08-CAP-DEVICES-57001b14a38776bc"></a>
- **M08-CAP-DEVICES-57001b14a38776bc**: Pupillary Assessment
  Origin: original 4643

<a id="M08-CAP-DEVICES-063b4f82c6fbd099"></a>
- **M08-CAP-DEVICES-063b4f82c6fbd099**: EEG
  Origin: original 4643

<a id="M08-CAP-DEVICES-6a5b48b4f2de5708"></a>
- **M08-CAP-DEVICES-6a5b48b4f2de5708**: Hemodynamics
  Origin: original 4643

<a id="M08-CAP-DEVICES-d77f0fba9e1c058a"></a>
- **M08-CAP-DEVICES-d77f0fba9e1c058a**: Ventilation
  Origin: original 4643

<a id="M08-CAP-DEVICES-276c9631ffc17e76"></a>
- **M08-CAP-DEVICES-276c9631ffc17e76**: Oxygenation
  Origin: original 4643

<a id="M08-CAP-DEVICES-e938795183a5f0eb"></a>
- **M08-CAP-DEVICES-e938795183a5f0eb**: Temperature
  Origin: original 4643

<a id="M08-CAP-DEVICES-d831fb3bb8efed58"></a>
- **M08-CAP-DEVICES-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4643

<a id="M08-CAP-DEVICES-3cfa39200ce0ea10"></a>
- **M08-CAP-DEVICES-3cfa39200ce0ea10**: Medication
  Origin: original 4643

<a id="M08-CAP-DEVICES-0051f0f3665d142b"></a>
- **M08-CAP-DEVICES-0051f0f3665d142b**: Device Data
  Origin: original 4643

<a id="M08-CAP-DEVICES-228b18d13e8b34f1"></a>
- **M08-CAP-DEVICES-228b18d13e8b34f1**: Procedures
  Origin: original 4643

<a id="M08-CAP-DEVICES-0fb99c57950f8dff"></a>
- **M08-CAP-DEVICES-0fb99c57950f8dff**: Clinical Events
  Origin: original 4643

<a id="M08-CAP-DEVICES-eb3e89bb6406a080"></a>
- **M08-CAP-DEVICES-eb3e89bb6406a080**: Timeline Functions:
  Origin: original 4643

<a id="M08-CAP-DEVICES-716ad854047e595f"></a>
- **M08-CAP-DEVICES-716ad854047e595f**: Synchronizes physiological signals, interventions and neurological events for clinical review.
  Origin: original 4643

<a id="M08-CAP-DEVICES-fb7dcbc64a7ed5f8"></a>
- **M08-CAP-DEVICES-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4643

<a id="M08-CAP-DEVICES-3749d3bf664c90c9"></a>
- **M08-CAP-DEVICES-3749d3bf664c90c9**: Multimodal Trend Detection
  Origin: original 4643

<a id="M08-CAP-DEVICES-198a6bb73addefd7"></a>
- **M08-CAP-DEVICES-198a6bb73addefd7**: Event Correlation
  Origin: original 4643

<a id="M08-CAP-DEVICES-82dea9934a0434e1"></a>
- **M08-CAP-DEVICES-82dea9934a0434e1**: Deterioration Signal Support
  Origin: original 4643

<a id="M08-CAP-DEVICES-07f8d474b8b4141c"></a>
- **M08-CAP-DEVICES-07f8d474b8b4141c**: Safety:
  Origin: original 4643, original 4667, original 4695, original 5121

<a id="M08-CAP-DEVICES-648df6d0a4c4b01c"></a>
- **M08-CAP-DEVICES-648df6d0a4c4b01c**: AI does not autonomously change critical-care therapy.
  Origin: original 4643

<a id="M08-CAP-DEVICES-72f44474b6d724fa"></a>
- **M08-CAP-DEVICES-72f44474b6d724fa**: Maintain a lifelong traceable registry of pediatric orthopedic implants, prostheses and relevant devices.
  Origin: original 4667

<a id="M08-CAP-DEVICES-0d3ce09d466a96b4"></a>
- **M08-CAP-DEVICES-0d3ce09d466a96b4**: Implant Identification
  Origin: original 4667

<a id="M08-CAP-DEVICES-7e84509910349735"></a>
- **M08-CAP-DEVICES-7e84509910349735**: Device Type
  Origin: original 4667, original 5115

<a id="M08-CAP-DEVICES-94581929b2d1d382"></a>
- **M08-CAP-DEVICES-94581929b2d1d382**: Model
  Origin: original 4667

<a id="M08-CAP-DEVICES-0d3b55198654263e"></a>
- **M08-CAP-DEVICES-0d3b55198654263e**: Serial/Lot Information where available
  Origin: original 4667

<a id="M08-CAP-DEVICES-f53ba0c0214c2b5f"></a>
- **M08-CAP-DEVICES-f53ba0c0214c2b5f**: Procedure
  Origin: original 4667, original 5121

<a id="M08-CAP-DEVICES-a3241cf77d991407"></a>
- **M08-CAP-DEVICES-a3241cf77d991407**: Imaging
  Origin: original 4667, original 5104

<a id="M08-CAP-DEVICES-ba9d88315635912e"></a>
- **M08-CAP-DEVICES-ba9d88315635912e**: Device Status
  Origin: original 4667

<a id="M08-CAP-DEVICES-73dedf86b2ae9801"></a>
- **M08-CAP-DEVICES-73dedf86b2ae9801**: Complications
  Origin: original 4667

<a id="M08-CAP-DEVICES-79be4c63e68a7ed2"></a>
- **M08-CAP-DEVICES-79be4c63e68a7ed2**: Revision
  Origin: original 4667

<a id="M08-CAP-DEVICES-b6b565bb1bbb49ae"></a>
- **M08-CAP-DEVICES-b6b565bb1bbb49ae**: Removal
  Origin: original 4667

<a id="M08-CAP-DEVICES-3e958d44914a91b7"></a>
- **M08-CAP-DEVICES-3e958d44914a91b7**: MRI-related Device Context where applicable
  Origin: original 4667

<a id="M08-CAP-DEVICES-1dd6ca0f8f06ecdc"></a>
- **M08-CAP-DEVICES-1dd6ca0f8f06ecdc**: Medical Passport:
  Origin: original 4667

<a id="M08-CAP-DEVICES-deb5bd7a100d9920"></a>
- **M08-CAP-DEVICES-deb5bd7a100d9920**: Critical implant information can be available for authorized future care.
  Origin: original 4667

<a id="M08-CAP-DEVICES-9b7689b055e9ee7b"></a>
- **M08-CAP-DEVICES-9b7689b055e9ee7b**: Supports device recall and surveillance workflows when appropriate data sources are available.
  Origin: original 4667

<a id="M08-CAP-DEVICES-5c3aa5c96828525a"></a>
- **M08-CAP-DEVICES-5c3aa5c96828525a**: Coordinate prescription, fitting and longitudinal use of pediatric orthotic, prosthetic and mobility technologies.
  Origin: original 4668

<a id="M08-CAP-DEVICES-19fe55b88cd4e7b6"></a>
- **M08-CAP-DEVICES-19fe55b88cd4e7b6**: Orthosis
  Origin: original 4668

<a id="M08-CAP-DEVICES-6910a705d2256beb"></a>
- **M08-CAP-DEVICES-6910a705d2256beb**: Prosthesis
  Origin: original 4668

<a id="M08-CAP-DEVICES-d9104c4a7fbfa9ac"></a>
- **M08-CAP-DEVICES-d9104c4a7fbfa9ac**: Wheelchair
  Origin: original 4668

<a id="M08-CAP-DEVICES-fe87f98aecb5640c"></a>
- **M08-CAP-DEVICES-fe87f98aecb5640c**: Walker
  Origin: original 4668

<a id="M08-CAP-DEVICES-515c8e989ec9cd96"></a>
- **M08-CAP-DEVICES-515c8e989ec9cd96**: Standing Device
  Origin: original 4668

<a id="M08-CAP-DEVICES-e7e0ac1ae81610a8"></a>
- **M08-CAP-DEVICES-e7e0ac1ae81610a8**: Seating System
  Origin: original 4668

<a id="M08-CAP-DEVICES-c348cb32b5706975"></a>
- **M08-CAP-DEVICES-c348cb32b5706975**: Mobility Aid
  Origin: original 4668

<a id="M08-CAP-DEVICES-ccf5f1cc50d31a92"></a>
- **M08-CAP-DEVICES-ccf5f1cc50d31a92**: Prescription
  Origin: original 4668

<a id="M08-CAP-DEVICES-f0f3ac1fd559e187"></a>
- **M08-CAP-DEVICES-f0f3ac1fd559e187**: Fitting
  Origin: original 4668

<a id="M08-CAP-DEVICES-7cd6cb0e4cae6615"></a>
- **M08-CAP-DEVICES-7cd6cb0e4cae6615**: Growth-related Adjustment
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-c3dbb34aa3ad5fc2"></a>
- **M08-CAP-DEVICES-c3dbb34aa3ad5fc2**: Device Replacement
  Origin: original 4668

<a id="M08-CAP-DEVICES-75b1ab465e596ef6"></a>
- **M08-CAP-DEVICES-75b1ab465e596ef6**: Functional Goals
  Origin: original 4668

<a id="M08-CAP-DEVICES-1f80be215614c816"></a>
- **M08-CAP-DEVICES-1f80be215614c816**: Skin Monitoring
  Origin: original 4668

<a id="M08-CAP-DEVICES-c991a5ff8db262b9"></a>
- **M08-CAP-DEVICES-c991a5ff8db262b9**: Comfort
  Origin: original 4668

<a id="M08-CAP-DEVICES-17ae38950b1ea2d7"></a>
- **M08-CAP-DEVICES-17ae38950b1ea2d7**: Usage
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-e9426dd272d9aa70"></a>
- **M08-CAP-DEVICES-e9426dd272d9aa70**: Rehabilitation
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-fdaf8140ccf3e46f"></a>
- **M08-CAP-DEVICES-fdaf8140ccf3e46f**: Outcome Tracking
  Origin: original 4668

<a id="M08-CAP-DEVICES-0c2d408e413351d3"></a>
- **M08-CAP-DEVICES-0c2d408e413351d3**: Orthopedics
  Origin: original 4668, original 4694, original 5121

<a id="M08-CAP-DEVICES-aa433304c304c24c"></a>
- **M08-CAP-DEVICES-aa433304c304c24c**: Physiotherapy
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-226a232c5362ff1b"></a>
- **M08-CAP-DEVICES-226a232c5362ff1b**: Occupational Therapy
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-6f13ada140c06ee9"></a>
- **M08-CAP-DEVICES-6f13ada140c06ee9**: Prosthetics Services
  Origin: original 4668

<a id="M08-CAP-DEVICES-873049232016f19a"></a>
- **M08-CAP-DEVICES-873049232016f19a**: Home Care
  Origin: original 4668, original 4694

<a id="M08-CAP-DEVICES-c57cfe17526f2c86"></a>
- **M08-CAP-DEVICES-c57cfe17526f2c86**: Manage assistive technologies used to support mobility, communication, self-care and participation.
  Origin: original 4694

<a id="M08-CAP-DEVICES-d06b3834633e3498"></a>
- **M08-CAP-DEVICES-d06b3834633e3498**: Device Needs Assessment
  Origin: original 4694

<a id="M08-CAP-DEVICES-da1bcf6676aec2bd"></a>
- **M08-CAP-DEVICES-da1bcf6676aec2bd**: Wheelchairs
  Origin: original 4694

<a id="M08-CAP-DEVICES-6d5f1ca95f15c056"></a>
- **M08-CAP-DEVICES-6d5f1ca95f15c056**: Mobility Devices
  Origin: original 4694

<a id="M08-CAP-DEVICES-da7fa2172342e6ff"></a>
- **M08-CAP-DEVICES-da7fa2172342e6ff**: Standing Systems
  Origin: original 4694

<a id="M08-CAP-DEVICES-1f1bbe337b10afea"></a>
- **M08-CAP-DEVICES-1f1bbe337b10afea**: Seating Systems
  Origin: original 4694

<a id="M08-CAP-DEVICES-4cfb4eecbc3d1286"></a>
- **M08-CAP-DEVICES-4cfb4eecbc3d1286**: Communication Devices
  Origin: original 4694

<a id="M08-CAP-DEVICES-9d145ba80383d831"></a>
- **M08-CAP-DEVICES-9d145ba80383d831**: Environmental Controls
  Origin: original 4694

<a id="M08-CAP-DEVICES-e70d81a347dae5ef"></a>
- **M08-CAP-DEVICES-e70d81a347dae5ef**: Orthotics
  Origin: original 4694

<a id="M08-CAP-DEVICES-b475262a1e5dec26"></a>
- **M08-CAP-DEVICES-b475262a1e5dec26**: Prosthetics
  Origin: original 4694

<a id="M08-CAP-DEVICES-f412f81e28215101"></a>
- **M08-CAP-DEVICES-f412f81e28215101**: Adaptive Equipment
  Origin: original 4694

<a id="M08-CAP-DEVICES-2100ed1795fcc3bd"></a>
- **M08-CAP-DEVICES-2100ed1795fcc3bd**: Device Fitting
  Origin: original 4694

<a id="M08-CAP-DEVICES-497c7721b34b7660"></a>
- **M08-CAP-DEVICES-497c7721b34b7660**: Maintenance
  Origin: original 4694

<a id="M08-CAP-DEVICES-d08bcd1528f93e38"></a>
- **M08-CAP-DEVICES-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 4694

<a id="M08-CAP-DEVICES-ea3d45fe20391aba"></a>
- **M08-CAP-DEVICES-ea3d45fe20391aba**: Speech Therapy
  Origin: original 4694

<a id="M08-CAP-DEVICES-22b033d9fe8e71cf"></a>
- **M08-CAP-DEVICES-22b033d9fe8e71cf**: School Support
  Origin: original 4694

<a id="M08-CAP-DEVICES-c9e1a9dbde41abe6"></a>
- **M08-CAP-DEVICES-c9e1a9dbde41abe6**: Provide a governed architecture for advanced rehabilitation technologies.
  Origin: original 4695

<a id="M08-CAP-DEVICES-d914e248ecd59339"></a>
- **M08-CAP-DEVICES-d914e248ecd59339**: Robotic Rehabilitation Device Registry
  Origin: original 4695

<a id="M08-CAP-DEVICES-a3603dda66eb7a3b"></a>
- **M08-CAP-DEVICES-a3603dda66eb7a3b**: Exoskeleton Context
  Origin: original 4695

<a id="M08-CAP-DEVICES-0ea83b678cf85e1f"></a>
- **M08-CAP-DEVICES-0ea83b678cf85e1f**: Gait Training Technology
  Origin: original 4695

<a id="M08-CAP-DEVICES-e3800862c21b3426"></a>
- **M08-CAP-DEVICES-e3800862c21b3426**: Upper Extremity Robotics
  Origin: original 4695

<a id="M08-CAP-DEVICES-b5de0bf7c3a64f92"></a>
- **M08-CAP-DEVICES-b5de0bf7c3a64f92**: Device Prescription
  Origin: original 4695

<a id="M08-CAP-DEVICES-0307a54047798be9"></a>
- **M08-CAP-DEVICES-0307a54047798be9**: Therapy Protocol
  Origin: original 4695

<a id="M08-CAP-DEVICES-a4182724f6420531"></a>
- **M08-CAP-DEVICES-a4182724f6420531**: Session Data
  Origin: original 4695

<a id="M08-CAP-DEVICES-fca68ccf901c1ea7"></a>
- **M08-CAP-DEVICES-fca68ccf901c1ea7**: Functional Baseline
  Origin: original 4695

<a id="M08-CAP-DEVICES-e9bb1b7104aa25cd"></a>
- **M08-CAP-DEVICES-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4695

<a id="M08-CAP-DEVICES-f749e8c444dc0a0d"></a>
- **M08-CAP-DEVICES-f749e8c444dc0a0d**: Adverse Events
  Origin: original 4695

<a id="M08-CAP-DEVICES-f31cbb52e4ba596c"></a>
- **M08-CAP-DEVICES-f31cbb52e4ba596c**: Progress Tracking
  Origin: original 4695

<a id="M08-CAP-DEVICES-b97ac045e5945696"></a>
- **M08-CAP-DEVICES-b97ac045e5945696**: Device Maintenance
  Origin: original 4695

<a id="M08-CAP-DEVICES-16bf46bb5b7cd2ed"></a>
- **M08-CAP-DEVICES-16bf46bb5b7cd2ed**: Outcome Measures
  Origin: original 4695

<a id="M08-CAP-DEVICES-609dd60fea1981cd"></a>
- **M08-CAP-DEVICES-609dd60fea1981cd**: Data Integration:
  Origin: original 4695

<a id="M08-CAP-DEVICES-8630b2860c6b833a"></a>
- **M08-CAP-DEVICES-8630b2860c6b833a**: Validated device data may flow into the longitudinal rehabilitation record.
  Origin: original 4695

<a id="M08-CAP-DEVICES-a8ceb57737e634e2"></a>
- **M08-CAP-DEVICES-a8ceb57737e634e2**: Technology supplements qualified rehabilitation professionals and does not autonomously define treatment.
  Origin: original 4695

<a id="M08-CAP-DEVICES-d2d6f480535881b9"></a>
- **M08-CAP-DEVICES-d2d6f480535881b9**: Maintain complete traceability of implanted CSF shunt systems throughout the patient's lifetime.
  Origin: original 5104

<a id="M08-CAP-DEVICES-d22c9405754691e3"></a>
- **M08-CAP-DEVICES-d22c9405754691e3**: Shunt Type
  Origin: original 5104

<a id="M08-CAP-DEVICES-d20d78cf6c8da632"></a>
- **M08-CAP-DEVICES-d20d78cf6c8da632**: Manufacturer Context
  Origin: original 5104, original 5115

<a id="M08-CAP-DEVICES-70f07e5f38adc755"></a>
- **M08-CAP-DEVICES-70f07e5f38adc755**: Valve Context
  Origin: original 5104

<a id="M08-CAP-DEVICES-b1a3fea7a953079a"></a>
- **M08-CAP-DEVICES-b1a3fea7a953079a**: Programmable Setting Context
  Origin: original 5104

<a id="M08-CAP-DEVICES-d283cd16c0bbf249"></a>
- **M08-CAP-DEVICES-d283cd16c0bbf249**: Implant Date
  Origin: original 5104, original 5115

<a id="M08-CAP-DEVICES-2049f2e34ede1477"></a>
- **M08-CAP-DEVICES-2049f2e34ede1477**: Anatomical Configuration
  Origin: original 5104

<a id="M08-CAP-DEVICES-81b25245e09492f6"></a>
- **M08-CAP-DEVICES-81b25245e09492f6**: Previous Malfunction
  Origin: original 5104

<a id="M08-CAP-DEVICES-b49d39b2bb98fd4b"></a>
- **M08-CAP-DEVICES-b49d39b2bb98fd4b**: Previous Infection
  Origin: original 5104

<a id="M08-CAP-DEVICES-73ca56fe7a8ce3ae"></a>
- **M08-CAP-DEVICES-73ca56fe7a8ce3ae**: Device-related Symptoms
  Origin: original 5104

<a id="M08-CAP-DEVICES-c6f7575f5c957a01"></a>
- **M08-CAP-DEVICES-c6f7575f5c957a01**: Replacement Context
  Origin: original 5104

<a id="M08-CAP-DEVICES-60540b4343e8534e"></a>
- **M08-CAP-DEVICES-60540b4343e8534e**: Emergency Information
  Origin: original 5104

<a id="M08-CAP-DEVICES-74e16e70b497e6fe"></a>
- **M08-CAP-DEVICES-74e16e70b497e6fe**: Current Setting Visibility
  Origin: original 5104

<a id="M08-CAP-DEVICES-5ac2cc0012180695"></a>
- **M08-CAP-DEVICES-5ac2cc0012180695**: Malfunction Context
  Origin: original 5104

<a id="M08-CAP-DEVICES-7b02eab921c63ffc"></a>
- **M08-CAP-DEVICES-7b02eab921c63ffc**: MRI-related Device Context
  Origin: original 5104

<a id="M08-CAP-DEVICES-c556310e0988bfe3"></a>
- **M08-CAP-DEVICES-c556310e0988bfe3**: Emergency Passport Integration
  Origin: original 5104

<a id="M08-CAP-DEVICES-6c6b72c61d95ccd8"></a>
- **M08-CAP-DEVICES-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 5104

<a id="M08-CAP-DEVICES-ef6dc72b554b9fdf"></a>
- **M08-CAP-DEVICES-ef6dc72b554b9fdf**: The current device configuration must remain distinguishable from historical configurations.
  Origin: original 5104

<a id="M08-CAP-DEVICES-43a67d79860bcb43"></a>
- **M08-CAP-DEVICES-43a67d79860bcb43**: HIGH
  Origin: original 5104, original 5115

<a id="M08-CAP-DEVICES-138f649b251ad091"></a>
- **M08-CAP-DEVICES-138f649b251ad091**: Provide a unified lifecycle registry for implanted neurological devices.
  Origin: original 5115

<a id="M08-CAP-DEVICES-34304b1ae529d0b7"></a>
- **M08-CAP-DEVICES-34304b1ae529d0b7**: Device Identifier
  Origin: original 5115

<a id="M08-CAP-DEVICES-9b5712585c986636"></a>
- **M08-CAP-DEVICES-9b5712585c986636**: Anatomical Location
  Origin: original 5115

<a id="M08-CAP-DEVICES-57b970264c415ddd"></a>
- **M08-CAP-DEVICES-57b970264c415ddd**: Indication
  Origin: original 5115

<a id="M08-CAP-DEVICES-5661259c705d3504"></a>
- **M08-CAP-DEVICES-5661259c705d3504**: Current Configuration
  Origin: original 5115

<a id="M08-CAP-DEVICES-b4f8f676355dcd8c"></a>
- **M08-CAP-DEVICES-b4f8f676355dcd8c**: Programming History
  Origin: original 5115

<a id="M08-CAP-DEVICES-77bd4e56b4cbc626"></a>
- **M08-CAP-DEVICES-77bd4e56b4cbc626**: Battery Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-2643f76730a4daa8"></a>
- **M08-CAP-DEVICES-2643f76730a4daa8**: Device Failure Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-f622d2c09e12abfb"></a>
- **M08-CAP-DEVICES-f622d2c09e12abfb**: Imaging Compatibility Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-abe31ec4bf062a11"></a>
- **M08-CAP-DEVICES-abe31ec4bf062a11**: Follow-up Schedule
  Origin: original 5115

<a id="M08-CAP-DEVICES-facd46bdc84d9dab"></a>
- **M08-CAP-DEVICES-facd46bdc84d9dab**: Explantation Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-9b12a6d7e24c98c3"></a>
- **M08-CAP-DEVICES-9b12a6d7e24c98c3**: Device Classes:
  Origin: original 5115

<a id="M08-CAP-DEVICES-9d83ba326c66ce74"></a>
- **M08-CAP-DEVICES-9d83ba326c66ce74**: Neurostimulators
  Origin: original 5115

<a id="M08-CAP-DEVICES-c4d2556622b6bb5c"></a>
- **M08-CAP-DEVICES-c4d2556622b6bb5c**: Vagus Nerve Stimulation Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-c50796c8ab14c947"></a>
- **M08-CAP-DEVICES-c50796c8ab14c947**: Deep Brain Stimulation Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-1cb083a28e294da2"></a>
- **M08-CAP-DEVICES-1cb083a28e294da2**: Intrathecal Systems Context
  Origin: original 5115

<a id="M08-CAP-DEVICES-df039ad0b6fe4a68"></a>
- **M08-CAP-DEVICES-df039ad0b6fe4a68**: CSF Devices
  Origin: original 5115

<a id="M08-CAP-DEVICES-0fdea20cb3900d40"></a>
- **M08-CAP-DEVICES-0fdea20cb3900d40**: Other Neurological Implants
  Origin: original 5115

<a id="M08-CAP-DEVICES-6c7b0e14eb1a6f4a"></a>
- **M08-CAP-DEVICES-6c7b0e14eb1a6f4a**: Integrate intraoperative neurological monitoring with pediatric neurosurgical procedures and outcomes.
  Origin: original 5121

<a id="M08-CAP-DEVICES-af0dfd48b88dbd67"></a>
- **M08-CAP-DEVICES-af0dfd48b88dbd67**: Monitoring Indication
  Origin: original 5121

<a id="M08-CAP-DEVICES-a247377b027607bb"></a>
- **M08-CAP-DEVICES-a247377b027607bb**: Monitoring Modalities
  Origin: original 5121

<a id="M08-CAP-DEVICES-78a5277bb261698e"></a>
- **M08-CAP-DEVICES-78a5277bb261698e**: Baseline Signals
  Origin: original 5121

<a id="M08-CAP-DEVICES-c16161853cac4169"></a>
- **M08-CAP-DEVICES-c16161853cac4169**: Intraoperative Changes
  Origin: original 5121

<a id="M08-CAP-DEVICES-7d7870896dcccf5d"></a>
- **M08-CAP-DEVICES-7d7870896dcccf5d**: Surgical Event Correlation
  Origin: original 5121

<a id="M08-CAP-DEVICES-9fbcbcd1fa610088"></a>
- **M08-CAP-DEVICES-9fbcbcd1fa610088**: Anesthesia Context
  Origin: original 5121

<a id="M08-CAP-DEVICES-402166cfda70726e"></a>
- **M08-CAP-DEVICES-402166cfda70726e**: Intervention Context
  Origin: original 5121

<a id="M08-CAP-DEVICES-df9591480b2c3b00"></a>
- **M08-CAP-DEVICES-df9591480b2c3b00**: Signal Recovery Context
  Origin: original 5121

<a id="M08-CAP-DEVICES-de824d7978c240ff"></a>
- **M08-CAP-DEVICES-de824d7978c240ff**: Final Monitoring Status
  Origin: original 5121

<a id="M08-CAP-DEVICES-79c8bf6fcfd11721"></a>
- **M08-CAP-DEVICES-79c8bf6fcfd11721**: Postoperative Neurological Status
  Origin: original 5121

<a id="M08-CAP-DEVICES-02a107b61a68280d"></a>
- **M08-CAP-DEVICES-02a107b61a68280d**: Formal Report
  Origin: original 5121

<a id="M08-CAP-DEVICES-4fcfb82e137a6aa0"></a>
- **M08-CAP-DEVICES-4fcfb82e137a6aa0**: Historical Procedure Comparison
  Origin: original 5121

<a id="M08-CAP-DEVICES-c736106523040888"></a>
- **M08-CAP-DEVICES-c736106523040888**: Neurophysiology
  Origin: original 5121

<a id="M08-CAP-DEVICES-37ea4931bb315bc8"></a>
- **M08-CAP-DEVICES-37ea4931bb315bc8**: Anesthesiology
  Origin: original 5121

<a id="M08-CAP-DEVICES-1776431d6d17f344"></a>
- **M08-CAP-DEVICES-1776431d6d17f344**: Neurology
  Origin: original 5121

<a id="M08-CAP-DEVICES-0cedac3465442cf7"></a>
- **M08-CAP-DEVICES-0cedac3465442cf7**: Automated analysis remains supportive and does not replace real-time qualified intraoperative monitoring.
  Origin: original 5121

## Preserved source metadata

<a id="M08-CAP-DEVICES-cb6d4f8d2386e9d3"></a>
- **M08-CAP-DEVICES-cb6d4f8d2386e9d3**: # Medical Device Integration

<a id="M08-CAP-DEVICES-2f5fdcca89ef8e56"></a>
- **M08-CAP-DEVICES-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-DEVICES-6f33acf3afb37064"></a>
- **M08-CAP-DEVICES-6f33acf3afb37064**: ---

<a id="M08-CAP-DEVICES-0201789dbd9ec694"></a>
- **M08-CAP-DEVICES-0201789dbd9ec694**: # Supported Devices

<a id="M08-CAP-DEVICES-526190132ece1bd2"></a>
- **M08-CAP-DEVICES-526190132ece1bd2**: # Health Data

<a id="M08-CAP-DEVICES-c2afa1380de0c6ee"></a>
- **M08-CAP-DEVICES-c2afa1380de0c6ee**: # Data Flow

<a id="M08-CAP-DEVICES-57bf0b8ec040b0e2"></a>
- **M08-CAP-DEVICES-57bf0b8ec040b0e2**: # Synchronization

<a id="M08-CAP-DEVICES-75776c7c59e053c3"></a>
- **M08-CAP-DEVICES-75776c7c59e053c3**: # AI Processing

<a id="M08-CAP-DEVICES-d4ba5cf7ecd13c29"></a>
- **M08-CAP-DEVICES-d4ba5cf7ecd13c29**: # Standards

<a id="M08-CAP-DEVICES-efc101e38d418651"></a>
- **M08-CAP-DEVICES-efc101e38d418651**: # Security

<a id="M08-CAP-DEVICES-9879a69a15c5a50a"></a>
- **M08-CAP-DEVICES-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-DEVICES-5ba74d8fcc7b20cc"></a>
- **M08-CAP-DEVICES-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-DEVICES-d5232cbd3a326267"></a>
- **M08-CAP-DEVICES-d5232cbd3a326267**: Documentation

<a id="M08-CAP-DEVICES-383e87995c54bcf9"></a>
- **M08-CAP-DEVICES-383e87995c54bcf9**: # Pediatric Surgical Implant Registry

<a id="M08-CAP-DEVICES-4fbeeb87456accf5"></a>
- **M08-CAP-DEVICES-4fbeeb87456accf5**: Supports

<a id="M08-CAP-DEVICES-6510c5c511a879bc"></a>
- **M08-CAP-DEVICES-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-DEVICES-b34f593f0f83a1d1"></a>
- **M08-CAP-DEVICES-b34f593f0f83a1d1**: Core Functions:

<a id="M08-CAP-DEVICES-b88b375a44ccd619"></a>
- **M08-CAP-DEVICES-b88b375a44ccd619**: Status:

<a id="M08-CAP-DEVICES-fd85b703c00f8755"></a>
- **M08-CAP-DEVICES-fd85b703c00f8755**: MVP Relevance:

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).

## Bounded device evidence contract

[Schema](../../../specs/device-configuration.schema.json) · [Contract scope and remaining gates](../../engineering/device-configuration-contract.md). Data and testing have partial evidence only. This contract records documented configuration provenance; it neither reads live device state nor programs a device.
