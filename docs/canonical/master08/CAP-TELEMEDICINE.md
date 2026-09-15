# CORE-CAP-TELEMEDICINE — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: RemoteEncounter, ConsultationScope, ReviewDisposition, FollowUpTask. Dependencies: CAP-TELEMEDICINE, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-CARD-REMOTE

Original IDs: 3074, 3676, 4079.

Preserve family consultation, AI translation, ECG/echo review, home wearable/BP/heart-rate/symptom data. A connected device does not prove continuous clinical coverage.

Authorize consultation/monitoring scope → receive provenance-tagged reports → clinician review → acknowledgement/action → follow-up.

### M04-PULM-REMOTE

Original IDs: 3195, 3376, 4497.

Preserve home spirometry, ventilator/oxygen review, medication supervision, translation and second opinion; do not equate consultation with monitored emergency coverage.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M04-GASTRO-REMOTE

Original IDs: 3175, 3295, 3455.

Nutrition/growth/lab/medication review, endoscopy discussion, translation and family counseling share a consultation workflow, not a feeding-prescription engine.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M05-HEM-REMOTE

Original IDs: 3254, 4194, 4197.

Remote consultation preserves bleeding/pain diaries, attributed home measurements, transfusion follow-up, laboratory review, translation and second opinion without assuming continuous emergency supervision.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M05-ONCO-REMOTE

Original IDs: 3135, 4242.

Secure second-opinion/remote review preserves clinical questions and source imaging/pathology/genomics/treatment packages with translation and receiving-specialist access controls.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M06-NEUROSURG-REMOTE

Original IDs: 4647.

Remote follow-up preserves attributed guardian symptom/wound/device reports, approved instructions and escalation recipient/fallback; connection does not establish emergency coverage.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M06-NEONATAL-REMOTE

Original IDs: 3036, 3274.

Regional NICU consultation, parent counseling, imaging and post-discharge follow-up retain provider coverage, source verification and translation limits.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M07-ORTHO-HOME

Original IDs: 4673, 4696.

Home orthopedic and rehabilitation follow-up retains cast/wound/device reports, pain/motion/activity/adherence, approved exercise plan, video review and program updates. Preserve respondent, source clock and validation; named escalation/fallback is required and connectivity does not prove emergency coverage.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

### M08-TELEMED

Original IDs: 23.

Session records preserve appointment/actor/provider/link/time, translator/AI/recording choices, clinical note and prescription references. Recording and secondary use require independent permission; no public meeting URLs or implied emergency coverage.

Authorize consultation scope → receive attributed remote observations → qualified review → acknowledged plan/follow-up; remote access does not establish continuous emergency coverage.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-TELEMEDICINE-3aa3da4b942df2b1"></a>
- **M08-CAP-TELEMEDICINE-3aa3da4b942df2b1**: Stores all online medical consultations.
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-c91610423a46692c"></a>
- **M08-CAP-TELEMEDICINE-c91610423a46692c**: id (UUID)
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-ff6fb316f9bc6c33"></a>
- **M08-CAP-TELEMEDICINE-ff6fb316f9bc6c33**: user_id
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-faea4e7b11fd2247"></a>
- **M08-CAP-TELEMEDICINE-faea4e7b11fd2247**: doctor_id
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-d8781eb949ab5813"></a>
- **M08-CAP-TELEMEDICINE-d8781eb949ab5813**: hospital_id
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-b0b69f972655edab"></a>
- **M08-CAP-TELEMEDICINE-b0b69f972655edab**: appointment_date
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-8b0cb55129334e39"></a>
- **M08-CAP-TELEMEDICINE-8b0cb55129334e39**: start_time
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-b13ce633610b4882"></a>
- **M08-CAP-TELEMEDICINE-b13ce633610b4882**: end_time
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-30376d6db2c394b7"></a>
- **M08-CAP-TELEMEDICINE-30376d6db2c394b7**: session_type
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-e066e126453f6c70"></a>
- **M08-CAP-TELEMEDICINE-e066e126453f6c70**: meeting_provider
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-1d30b40c50bd2cdf"></a>
- **M08-CAP-TELEMEDICINE-1d30b40c50bd2cdf**: meeting_link
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-e8c48d1d02eb8c17"></a>
- **M08-CAP-TELEMEDICINE-e8c48d1d02eb8c17**: language
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-01478eff9ae025bc"></a>
- **M08-CAP-TELEMEDICINE-01478eff9ae025bc**: translator_enabled
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-567067442656f630"></a>
- **M08-CAP-TELEMEDICINE-567067442656f630**: ai_assistant_enabled
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-43cae689d4d63330"></a>
- **M08-CAP-TELEMEDICINE-43cae689d4d63330**: diagnosis_id
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-845280d2ad99c209"></a>
- **M08-CAP-TELEMEDICINE-845280d2ad99c209**: prescription_id
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-0e29c739f674e41f"></a>
- **M08-CAP-TELEMEDICINE-0e29c739f674e41f**: recording_enabled
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-6000b5b8632914a0"></a>
- **M08-CAP-TELEMEDICINE-6000b5b8632914a0**: notes
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-bcc951dbdead2bf5"></a>
- **M08-CAP-TELEMEDICINE-bcc951dbdead2bf5**: created_at
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-51db2c3a3a174a78"></a>
- **M08-CAP-TELEMEDICINE-51db2c3a3a174a78**: updated_at
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-d11d5798caaafc1f"></a>
- **M08-CAP-TELEMEDICINE-d11d5798caaafc1f**: Telemedicine Session
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-46172ef655d51ea4"></a>
- **M08-CAP-TELEMEDICINE-46172ef655d51ea4**: ├── User
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-b3a8fb58abb0fac0"></a>
- **M08-CAP-TELEMEDICINE-b3a8fb58abb0fac0**: ├── Doctor
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-4aa0cb20484238f6"></a>
- **M08-CAP-TELEMEDICINE-4aa0cb20484238f6**: ├── Hospital
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-ed91cefdac4cf7ad"></a>
- **M08-CAP-TELEMEDICINE-ed91cefdac4cf7ad**: ├── Diagnosis
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-13ff240df46fab2e"></a>
- **M08-CAP-TELEMEDICINE-13ff240df46fab2e**: ├── Prescription
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-93522f774f6d0bd5"></a>
- **M08-CAP-TELEMEDICINE-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-a894b29183575e50"></a>
- **M08-CAP-TELEMEDICINE-a894b29183575e50**: ├── Translator
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-93878a6ec6a84276"></a>
- **M08-CAP-TELEMEDICINE-93878a6ec6a84276**: ├── Payments
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-37bfdffca1a32095"></a>
- **M08-CAP-TELEMEDICINE-37bfdffca1a32095**: Future Features
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-e0d275efdd17a0b5"></a>
- **M08-CAP-TELEMEDICINE-e0d275efdd17a0b5**: Video Consultation
  Origin: original 23, original 3036, original 3676, original 4079, original 4197, original 4497, original 4696

<a id="M08-CAP-TELEMEDICINE-a28dcf197b17b71f"></a>
- **M08-CAP-TELEMEDICINE-a28dcf197b17b71f**: Voice Consultation
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-63e8bc260c915e4a"></a>
- **M08-CAP-TELEMEDICINE-63e8bc260c915e4a**: AI Live Translation
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-70b673a960bb3bc0"></a>
- **M08-CAP-TELEMEDICINE-70b673a960bb3bc0**: Medical Recording
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-ea78b05880e070ad"></a>
- **M08-CAP-TELEMEDICINE-ea78b05880e070ad**: Digital Prescription
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-fd8e04fe96adc7c1"></a>
- **M08-CAP-TELEMEDICINE-fd8e04fe96adc7c1**: Calendar Integration
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-f03de9df792a2fc5"></a>
- **M08-CAP-TELEMEDICINE-f03de9df792a2fc5**: Automatic Follow-up
  Origin: original 23

<a id="M08-CAP-TELEMEDICINE-66ffd76d484d6934"></a>
- **M08-CAP-TELEMEDICINE-66ffd76d484d6934**: Supports remote neonatal consultations.
  Origin: original 3036, original 3274

<a id="M08-CAP-TELEMEDICINE-2158b23018659c78"></a>
- **M08-CAP-TELEMEDICINE-2158b23018659c78**: Regional NICU Support
  Origin: original 3036

<a id="M08-CAP-TELEMEDICINE-5401e7780e49fee1"></a>
- **M08-CAP-TELEMEDICINE-5401e7780e49fee1**: Imaging Review
  Origin: original 3036, original 3135, original 3274

<a id="M08-CAP-TELEMEDICINE-c029fd1d9eafe6ba"></a>
- **M08-CAP-TELEMEDICINE-c029fd1d9eafe6ba**: AI Translation
  Origin: original 3036, original 3074, original 3135, original 3175, original 3195, original 3254, original 3274, original 3295, original 3376, original 3455

<a id="M08-CAP-TELEMEDICINE-982fd597aec2cf91"></a>
- **M08-CAP-TELEMEDICINE-982fd597aec2cf91**: Follow-up After Discharge
  Origin: original 3036

<a id="M08-CAP-TELEMEDICINE-0c7b62ac9c893df1"></a>
- **M08-CAP-TELEMEDICINE-0c7b62ac9c893df1**: Supports remote pediatric cardiology.
  Origin: original 3074, original 3676

<a id="M08-CAP-TELEMEDICINE-9f5a446fc83d475a"></a>
- **M08-CAP-TELEMEDICINE-9f5a446fc83d475a**: ECG Review
  Origin: original 3074, original 3676

<a id="M08-CAP-TELEMEDICINE-454ea6b82d620236"></a>
- **M08-CAP-TELEMEDICINE-454ea6b82d620236**: Echo Review
  Origin: original 3074, original 3676

<a id="M08-CAP-TELEMEDICINE-72b19a4ef4ad04eb"></a>
- **M08-CAP-TELEMEDICINE-72b19a4ef4ad04eb**: Remote Monitoring
  Origin: original 3074

<a id="M08-CAP-TELEMEDICINE-204be4c53f7a38a2"></a>
- **M08-CAP-TELEMEDICINE-204be4c53f7a38a2**: Family Consultation
  Origin: original 3074, original 3195, original 3254

<a id="M08-CAP-TELEMEDICINE-e71bd40bda77e891"></a>
- **M08-CAP-TELEMEDICINE-e71bd40bda77e891**: Supports remote oncology care.
  Origin: original 3135

<a id="M08-CAP-TELEMEDICINE-b67929731b7ccc35"></a>
- **M08-CAP-TELEMEDICINE-b67929731b7ccc35**: Follow-up Consultations
  Origin: original 3135

<a id="M08-CAP-TELEMEDICINE-bb81ba0b79378e37"></a>
- **M08-CAP-TELEMEDICINE-bb81ba0b79378e37**: Laboratory Review
  Origin: original 3135, original 3175, original 3254, original 3295, original 3455, original 4197

<a id="M08-CAP-TELEMEDICINE-17725edecc696e96"></a>
- **M08-CAP-TELEMEDICINE-17725edecc696e96**: Family Conferences
  Origin: original 3135

<a id="M08-CAP-TELEMEDICINE-0a3364ca998bb569"></a>
- **M08-CAP-TELEMEDICINE-0a3364ca998bb569**: Supports remote gastroenterology care.
  Origin: original 3175

<a id="M08-CAP-TELEMEDICINE-ecb6717189fe9120"></a>
- **M08-CAP-TELEMEDICINE-ecb6717189fe9120**: Nutrition Consultations
  Origin: original 3175

<a id="M08-CAP-TELEMEDICINE-9be35a0d9b608925"></a>
- **M08-CAP-TELEMEDICINE-9be35a0d9b608925**: Endoscopy Review
  Origin: original 3175

<a id="M08-CAP-TELEMEDICINE-ff50639fcf6f4824"></a>
- **M08-CAP-TELEMEDICINE-ff50639fcf6f4824**: Family Counseling
  Origin: original 3175

<a id="M08-CAP-TELEMEDICINE-94a8c2055850861f"></a>
- **M08-CAP-TELEMEDICINE-94a8c2055850861f**: Supports remote respiratory care.
  Origin: original 3195

<a id="M08-CAP-TELEMEDICINE-187d66de43d78da3"></a>
- **M08-CAP-TELEMEDICINE-187d66de43d78da3**: Home Spirometry
  Origin: original 3195, original 3376

<a id="M08-CAP-TELEMEDICINE-99815e8f46747984"></a>
- **M08-CAP-TELEMEDICINE-99815e8f46747984**: Oxygen Monitoring
  Origin: original 3195, original 3376

<a id="M08-CAP-TELEMEDICINE-21c9b2283706c73e"></a>
- **M08-CAP-TELEMEDICINE-21c9b2283706c73e**: Ventilator Monitoring
  Origin: original 3195

<a id="M08-CAP-TELEMEDICINE-c0055f3e80f14c95"></a>
- **M08-CAP-TELEMEDICINE-c0055f3e80f14c95**: Supports remote hematology consultations.
  Origin: original 3254

<a id="M08-CAP-TELEMEDICINE-e5ec38b6fb72c75b"></a>
- **M08-CAP-TELEMEDICINE-e5ec38b6fb72c75b**: Bleeding Monitoring
  Origin: original 3254

<a id="M08-CAP-TELEMEDICINE-898dca3481a530ea"></a>
- **M08-CAP-TELEMEDICINE-898dca3481a530ea**: Transfusion Follow-up
  Origin: original 3254

<a id="M08-CAP-TELEMEDICINE-f27ba833b13f86e7"></a>
- **M08-CAP-TELEMEDICINE-f27ba833b13f86e7**: NICU Consultation
  Origin: original 3274

<a id="M08-CAP-TELEMEDICINE-ff94230413e1c9ac"></a>
- **M08-CAP-TELEMEDICINE-ff94230413e1c9ac**: Parent Counseling
  Origin: original 3274

<a id="M08-CAP-TELEMEDICINE-d36db1f88e71455e"></a>
- **M08-CAP-TELEMEDICINE-d36db1f88e71455e**: Home Follow-up
  Origin: original 3274

<a id="M08-CAP-TELEMEDICINE-c8714cfecc191938"></a>
- **M08-CAP-TELEMEDICINE-c8714cfecc191938**: Supports remote pediatric gastroenterology care.
  Origin: original 3295

<a id="M08-CAP-TELEMEDICINE-c040b5f1ef18e28e"></a>
- **M08-CAP-TELEMEDICINE-c040b5f1ef18e28e**: Nutrition Follow-up
  Origin: original 3295

<a id="M08-CAP-TELEMEDICINE-8bf61b2b633fc7e7"></a>
- **M08-CAP-TELEMEDICINE-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 3295, original 3455

<a id="M08-CAP-TELEMEDICINE-fdf87aab8c436637"></a>
- **M08-CAP-TELEMEDICINE-fdf87aab8c436637**: Supports remote pulmonology care.
  Origin: original 3376

<a id="M08-CAP-TELEMEDICINE-663d86157022fe86"></a>
- **M08-CAP-TELEMEDICINE-663d86157022fe86**: Asthma Follow-up
  Origin: original 3376

<a id="M08-CAP-TELEMEDICINE-fb6c0067e43b2323"></a>
- **M08-CAP-TELEMEDICINE-fb6c0067e43b2323**: Medication Supervision
  Origin: original 3376

<a id="M08-CAP-TELEMEDICINE-f6e24577c45599fb"></a>
- **M08-CAP-TELEMEDICINE-f6e24577c45599fb**: Supports remote pediatric gastroenterology.
  Origin: original 3455

<a id="M08-CAP-TELEMEDICINE-3c2b71628f57bc6a"></a>
- **M08-CAP-TELEMEDICINE-3c2b71628f57bc6a**: Diet Review
  Origin: original 3455

<a id="M08-CAP-TELEMEDICINE-cc52d6d940178391"></a>
- **M08-CAP-TELEMEDICINE-cc52d6d940178391**: Medication Follow-up
  Origin: original 3455

<a id="M08-CAP-TELEMEDICINE-6b5154af20cc3812"></a>
- **M08-CAP-TELEMEDICINE-6b5154af20cc3812**: Medication Monitoring
  Origin: original 3676

<a id="M08-CAP-TELEMEDICINE-22862a0b0f7af32d"></a>
- **M08-CAP-TELEMEDICINE-22862a0b0f7af32d**: Follow-up Care
  Origin: original 3676

<a id="M08-CAP-TELEMEDICINE-c5b5c0eb1d0db184"></a>
- **M08-CAP-TELEMEDICINE-c5b5c0eb1d0db184**: Supports remote pediatric cardiac care.
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-92f29abe32a206af"></a>
- **M08-CAP-TELEMEDICINE-92f29abe32a206af**: Home Monitoring
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-2201c250013e9710"></a>
- **M08-CAP-TELEMEDICINE-2201c250013e9710**: Wearable Data
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-9da77df714be61fe"></a>
- **M08-CAP-TELEMEDICINE-9da77df714be61fe**: Blood Pressure
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-f5cb94d0f0206eb5"></a>
- **M08-CAP-TELEMEDICINE-f5cb94d0f0206eb5**: Heart Rate
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-26510a3a5e04abf9"></a>
- **M08-CAP-TELEMEDICINE-26510a3a5e04abf9**: Symptom Diaries
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-9ca34de7a972a86a"></a>
- **M08-CAP-TELEMEDICINE-9ca34de7a972a86a**: ECG Devices
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-0d86946e629cc025"></a>
- **M08-CAP-TELEMEDICINE-0d86946e629cc025**: Follow-up
  Origin: original 4079, original 4194, original 4197, original 4497

<a id="M08-CAP-TELEMEDICINE-abd6d70311e41e8f"></a>
- **M08-CAP-TELEMEDICINE-abd6d70311e41e8f**: Supports escalation workflows based on predefined clinical criteria.
  Origin: original 4079

<a id="M08-CAP-TELEMEDICINE-4842b072ed539c61"></a>
- **M08-CAP-TELEMEDICINE-4842b072ed539c61**: Supports remote longitudinal hematology care.
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-8ea50d2707dd1600"></a>
- **M08-CAP-TELEMEDICINE-8ea50d2707dd1600**: Symptoms
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-b4e722228726c643"></a>
- **M08-CAP-TELEMEDICINE-b4e722228726c643**: Home Measurements
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-f4af213318cdbbc3"></a>
- **M08-CAP-TELEMEDICINE-f4af213318cdbbc3**: Medication Adherence
  Origin: original 4194, original 4647, original 4673

<a id="M08-CAP-TELEMEDICINE-71f790fdf94f9c10"></a>
- **M08-CAP-TELEMEDICINE-71f790fdf94f9c10**: Laboratory Results
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-08b8e6fd8a327f24"></a>
- **M08-CAP-TELEMEDICINE-08b8e6fd8a327f24**: Bleeding Diaries
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-46b6a56144bdf572"></a>
- **M08-CAP-TELEMEDICINE-46b6a56144bdf572**: Pain Diaries
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-a7b0b7c7a6b8a594"></a>
- **M08-CAP-TELEMEDICINE-a7b0b7c7a6b8a594**: Treatment Events
  Origin: original 4194

<a id="M08-CAP-TELEMEDICINE-544a593f4669647a"></a>
- **M08-CAP-TELEMEDICINE-544a593f4669647a**: Supports remote specialist hematology care.
  Origin: original 4197

<a id="M08-CAP-TELEMEDICINE-ddca93d7133f65aa"></a>
- **M08-CAP-TELEMEDICINE-ddca93d7133f65aa**: Treatment Monitoring
  Origin: original 4197, original 4497

<a id="M08-CAP-TELEMEDICINE-9b0366757d544539"></a>
- **M08-CAP-TELEMEDICINE-9b0366757d544539**: Second Opinion
  Origin: original 4197, original 4497

<a id="M08-CAP-TELEMEDICINE-faf30dc5272a472a"></a>
- **M08-CAP-TELEMEDICINE-faf30dc5272a472a**: Multidisciplinary Consultation
  Origin: original 4197

<a id="M08-CAP-TELEMEDICINE-b38047810c871cd2"></a>
- **M08-CAP-TELEMEDICINE-b38047810c871cd2**: Cross-border Consultation
  Origin: original 4197, original 4497

<a id="M08-CAP-TELEMEDICINE-3653fe74232956b2"></a>
- **M08-CAP-TELEMEDICINE-3653fe74232956b2**: Supports cross-border specialist review.
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-d6bef59bd56de728"></a>
- **M08-CAP-TELEMEDICINE-d6bef59bd56de728**: Securely packages
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-14ed4d2078990c93"></a>
- **M08-CAP-TELEMEDICINE-14ed4d2078990c93**: Clinical Summary
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-a3241cf77d991407"></a>
- **M08-CAP-TELEMEDICINE-a3241cf77d991407**: Imaging
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-2d2ffbcbba25564e"></a>
- **M08-CAP-TELEMEDICINE-2d2ffbcbba25564e**: Pathology
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-cb78077b4bfcb26e"></a>
- **M08-CAP-TELEMEDICINE-cb78077b4bfcb26e**: Genomics
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-b596b3fab9cbd244"></a>
- **M08-CAP-TELEMEDICINE-b596b3fab9cbd244**: Treatment History
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-2efc2fec2c0c8ee3"></a>
- **M08-CAP-TELEMEDICINE-2efc2fec2c0c8ee3**: Response
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-8e21b2f0594d8085"></a>
- **M08-CAP-TELEMEDICINE-8e21b2f0594d8085**: Clinical Questions
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-0e543278197072d8"></a>
- **M08-CAP-TELEMEDICINE-0e543278197072d8**: Supports multilingual specialist collaboration through EDHT.
  Origin: original 4242

<a id="M08-CAP-TELEMEDICINE-735155b1b0da9485"></a>
- **M08-CAP-TELEMEDICINE-735155b1b0da9485**: Supports remote respiratory specialist care.
  Origin: original 4497

<a id="M08-CAP-TELEMEDICINE-056a9c33e1916560"></a>
- **M08-CAP-TELEMEDICINE-056a9c33e1916560**: Home Monitoring Review
  Origin: original 4497

<a id="M08-CAP-TELEMEDICINE-40c976f5f51069ec"></a>
- **M08-CAP-TELEMEDICINE-40c976f5f51069ec**: Pulmonary Function Review
  Origin: original 4497

<a id="M08-CAP-TELEMEDICINE-100f7ee630b87036"></a>
- **M08-CAP-TELEMEDICINE-100f7ee630b87036**: Device Review
  Origin: original 4497

<a id="M08-CAP-TELEMEDICINE-ce46cd8fc0e0ef80"></a>
- **M08-CAP-TELEMEDICINE-ce46cd8fc0e0ef80**: Support structured follow-up after pediatric neurosurgical treatment outside the hospital.
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-87d1fae3e03810ae"></a>
- **M08-CAP-TELEMEDICINE-87d1fae3e03810ae**: Symptom Monitoring
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-6f8b00b004efb399"></a>
- **M08-CAP-TELEMEDICINE-6f8b00b004efb399**: Neurological Status Reports
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-b56dcfa15d3beef4"></a>
- **M08-CAP-TELEMEDICINE-b56dcfa15d3beef4**: Wound Monitoring Data
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-d929dde3cb2892d8"></a>
- **M08-CAP-TELEMEDICINE-d929dde3cb2892d8**: Pain
  Origin: original 4647, original 4696

<a id="M08-CAP-TELEMEDICINE-e938795183a5f0eb"></a>
- **M08-CAP-TELEMEDICINE-e938795183a5f0eb**: Temperature
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-7881805835cd66a2"></a>
- **M08-CAP-TELEMEDICINE-7881805835cd66a2**: Mobility
  Origin: original 4647, original 4696

<a id="M08-CAP-TELEMEDICINE-e9421dfd39b39c80"></a>
- **M08-CAP-TELEMEDICINE-e9421dfd39b39c80**: Seizure Events
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-73ca56fe7a8ce3ae"></a>
- **M08-CAP-TELEMEDICINE-73ca56fe7a8ce3ae**: Device-related Symptoms
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-3e82189fac2b4970"></a>
- **M08-CAP-TELEMEDICINE-3e82189fac2b4970**: Rehabilitation Progress
  Origin: original 4647, original 4673

<a id="M08-CAP-TELEMEDICINE-ad2be51166ed6b2a"></a>
- **M08-CAP-TELEMEDICINE-ad2be51166ed6b2a**: Teleconsultation
  Origin: original 4647, original 4673

<a id="M08-CAP-TELEMEDICINE-d5a79954ca13cf7d"></a>
- **M08-CAP-TELEMEDICINE-d5a79954ca13cf7d**: Follow-up Scheduling Context
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-fcee34cac8370bb5"></a>
- **M08-CAP-TELEMEDICINE-fcee34cac8370bb5**: Guardian Functions:
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-024aecdd7f9acc05"></a>
- **M08-CAP-TELEMEDICINE-024aecdd7f9acc05**: Structured Symptom Reporting
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-edca5a4e7b0958f1"></a>
- **M08-CAP-TELEMEDICINE-edca5a4e7b0958f1**: Clinician-approved Care Instructions
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-256b3234ffdc69ba"></a>
- **M08-CAP-TELEMEDICINE-256b3234ffdc69ba**: Postoperative Checklist
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-51e78867cddab258"></a>
- **M08-CAP-TELEMEDICINE-51e78867cddab258**: Emergency Warning Information
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-820284402e9b5196"></a>
- **M08-CAP-TELEMEDICINE-820284402e9b5196**: Escalation:
  Origin: original 4647, original 4673

<a id="M08-CAP-TELEMEDICINE-35fd1aba54b11b30"></a>
- **M08-CAP-TELEMEDICINE-35fd1aba54b11b30**: Clinician-defined high-risk responses may trigger review workflows.
  Origin: original 4647

<a id="M08-CAP-TELEMEDICINE-6e0a39faa3e7a86a"></a>
- **M08-CAP-TELEMEDICINE-6e0a39faa3e7a86a**: Support structured home recovery and follow-up following orthopedic injury, disease or surgery.
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-83aaff9004d5cb9d"></a>
- **M08-CAP-TELEMEDICINE-83aaff9004d5cb9d**: Pain Tracking
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-ca9fc08b48cc789a"></a>
- **M08-CAP-TELEMEDICINE-ca9fc08b48cc789a**: Mobility Tracking
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-23a329b8baa1834f"></a>
- **M08-CAP-TELEMEDICINE-23a329b8baa1834f**: Functional Status
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-43cb7f5f0359cf3b"></a>
- **M08-CAP-TELEMEDICINE-43cb7f5f0359cf3b**: Cast Context
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-0149aff76b4335da"></a>
- **M08-CAP-TELEMEDICINE-0149aff76b4335da**: Orthosis Use
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-dc5274a61bd3aa8f"></a>
- **M08-CAP-TELEMEDICINE-dc5274a61bd3aa8f**: Prosthesis Use
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-b68f4fe3bc286533"></a>
- **M08-CAP-TELEMEDICINE-b68f4fe3bc286533**: Wound-related Structured Reporting
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-b17b36a999ebe80a"></a>
- **M08-CAP-TELEMEDICINE-b17b36a999ebe80a**: Home Exercise Completion
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-2f83002b2bc3c677"></a>
- **M08-CAP-TELEMEDICINE-2f83002b2bc3c677**: Patient/Guardian Reports
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-b5e727664fb18ddc"></a>
- **M08-CAP-TELEMEDICINE-b5e727664fb18ddc**: Clinician-defined responses can trigger clinical review.
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-d235b945025da72c"></a>
- **M08-CAP-TELEMEDICINE-d235b945025da72c**: Data Governance:
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-f536bae1722fc50a"></a>
- **M08-CAP-TELEMEDICINE-f536bae1722fc50a**: Home data retains source, timestamp and validation status.
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-2f27e552d723d07f"></a>
- **M08-CAP-TELEMEDICINE-2f27e552d723d07f**: Integrations:
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-0c2d408e413351d3"></a>
- **M08-CAP-TELEMEDICINE-0c2d408e413351d3**: Orthopedics
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-e9426dd272d9aa70"></a>
- **M08-CAP-TELEMEDICINE-e9426dd272d9aa70**: Rehabilitation
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-aa433304c304c24c"></a>
- **M08-CAP-TELEMEDICINE-aa433304c304c24c**: Physiotherapy
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-338cd6a1ad180ca5"></a>
- **M08-CAP-TELEMEDICINE-338cd6a1ad180ca5**: Telemedicine
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-9e9dbb804ca8197a"></a>
- **M08-CAP-TELEMEDICINE-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4673

<a id="M08-CAP-TELEMEDICINE-41ea45fd939e27d1"></a>
- **M08-CAP-TELEMEDICINE-41ea45fd939e27d1**: Extend structured rehabilitation into the home while preserving clinical oversight.
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-3cd29d0f60f3cc82"></a>
- **M08-CAP-TELEMEDICINE-3cd29d0f60f3cc82**: Home Exercise Plan
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-3cbe52b2b428ce1b"></a>
- **M08-CAP-TELEMEDICINE-3cbe52b2b428ce1b**: Functional Tracking
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-a3d3778b63a0330e"></a>
- **M08-CAP-TELEMEDICINE-a3d3778b63a0330e**: Range of Motion
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-ee2f7ffb0a082fdd"></a>
- **M08-CAP-TELEMEDICINE-ee2f7ffb0a082fdd**: Activity
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-6bb2e3839a82b995"></a>
- **M08-CAP-TELEMEDICINE-6bb2e3839a82b995**: Therapy Adherence
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-2be06500a5852124"></a>
- **M08-CAP-TELEMEDICINE-2be06500a5852124**: Assistive Device Use
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-aab1f7e0508ee9db"></a>
- **M08-CAP-TELEMEDICINE-aab1f7e0508ee9db**: Patient/Guardian Feedback
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-b181393ed0fc1c73"></a>
- **M08-CAP-TELEMEDICINE-b181393ed0fc1c73**: Clinician Review
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-455a8b53f7f8f963"></a>
- **M08-CAP-TELEMEDICINE-455a8b53f7f8f963**: Program Updates
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-f31cbb52e4ba596c"></a>
- **M08-CAP-TELEMEDICINE-f31cbb52e4ba596c**: Progress Tracking
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-ea7765d6fcbb8898"></a>
- **M08-CAP-TELEMEDICINE-ea7765d6fcbb8898**: Connected Data:
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-f69e5cba5f67e7b4"></a>
- **M08-CAP-TELEMEDICINE-f69e5cba5f67e7b4**: Validated wearables or rehabilitation devices may contribute activity and functional information.
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-dc0d643ae54f3d74"></a>
- **M08-CAP-TELEMEDICINE-dc0d643ae54f3d74**: Governance:
  Origin: original 4696

<a id="M08-CAP-TELEMEDICINE-7cb438d23cbca006"></a>
- **M08-CAP-TELEMEDICINE-7cb438d23cbca006**: Remote measurements retain source, timestamp and validation status.
  Origin: original 4696

## Preserved source metadata

<a id="M08-CAP-TELEMEDICINE-596df6e593cc819c"></a>
- **M08-CAP-TELEMEDICINE-596df6e593cc819c**: # Telemedicine Sessions Table

<a id="M08-CAP-TELEMEDICINE-2f5fdcca89ef8e56"></a>
- **M08-CAP-TELEMEDICINE-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-TELEMEDICINE-6f33acf3afb37064"></a>
- **M08-CAP-TELEMEDICINE-6f33acf3afb37064**: ---

<a id="M08-CAP-TELEMEDICINE-90dc9b75b60f53a5"></a>
- **M08-CAP-TELEMEDICINE-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-TELEMEDICINE-5754dd8ea427e6f0"></a>
- **M08-CAP-TELEMEDICINE-5754dd8ea427e6f0**: status

<a id="M08-CAP-TELEMEDICINE-2fac6cbf308c244b"></a>
- **M08-CAP-TELEMEDICINE-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-TELEMEDICINE-5ba74d8fcc7b20cc"></a>
- **M08-CAP-TELEMEDICINE-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-TELEMEDICINE-d5232cbd3a326267"></a>
- **M08-CAP-TELEMEDICINE-d5232cbd3a326267**: Documentation

<a id="M08-CAP-TELEMEDICINE-4fbeeb87456accf5"></a>
- **M08-CAP-TELEMEDICINE-4fbeeb87456accf5**: Supports

<a id="M08-CAP-TELEMEDICINE-21d94006fa494f95"></a>
- **M08-CAP-TELEMEDICINE-21d94006fa494f95**: Integrates

<a id="M08-CAP-TELEMEDICINE-6510c5c511a879bc"></a>
- **M08-CAP-TELEMEDICINE-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-TELEMEDICINE-b34f593f0f83a1d1"></a>
- **M08-CAP-TELEMEDICINE-b34f593f0f83a1d1**: Core Functions:

<a id="M08-CAP-TELEMEDICINE-b88b375a44ccd619"></a>
- **M08-CAP-TELEMEDICINE-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
