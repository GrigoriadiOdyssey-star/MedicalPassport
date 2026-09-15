# CORE-CAP-TELEMEDICINE — shared capability and profiles

MASTER-05 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M05-CAP-TELEMEDICINE-0c7b62ac9c893df1"></a>
- **M05-CAP-TELEMEDICINE-0c7b62ac9c893df1**: Supports remote pediatric cardiology.
  Origin: original 3074, original 3676

<a id="M05-CAP-TELEMEDICINE-9f5a446fc83d475a"></a>
- **M05-CAP-TELEMEDICINE-9f5a446fc83d475a**: ECG Review
  Origin: original 3074, original 3676

<a id="M05-CAP-TELEMEDICINE-454ea6b82d620236"></a>
- **M05-CAP-TELEMEDICINE-454ea6b82d620236**: Echo Review
  Origin: original 3074, original 3676

<a id="M05-CAP-TELEMEDICINE-72b19a4ef4ad04eb"></a>
- **M05-CAP-TELEMEDICINE-72b19a4ef4ad04eb**: Remote Monitoring
  Origin: original 3074

<a id="M05-CAP-TELEMEDICINE-204be4c53f7a38a2"></a>
- **M05-CAP-TELEMEDICINE-204be4c53f7a38a2**: Family Consultation
  Origin: original 3074, original 3195, original 3254

<a id="M05-CAP-TELEMEDICINE-c029fd1d9eafe6ba"></a>
- **M05-CAP-TELEMEDICINE-c029fd1d9eafe6ba**: AI Translation
  Origin: original 3074, original 3135, original 3175, original 3195, original 3254, original 3295, original 3376, original 3455

<a id="M05-CAP-TELEMEDICINE-e71bd40bda77e891"></a>
- **M05-CAP-TELEMEDICINE-e71bd40bda77e891**: Supports remote oncology care.
  Origin: original 3135

<a id="M05-CAP-TELEMEDICINE-b67929731b7ccc35"></a>
- **M05-CAP-TELEMEDICINE-b67929731b7ccc35**: Follow-up Consultations
  Origin: original 3135

<a id="M05-CAP-TELEMEDICINE-5401e7780e49fee1"></a>
- **M05-CAP-TELEMEDICINE-5401e7780e49fee1**: Imaging Review
  Origin: original 3135

<a id="M05-CAP-TELEMEDICINE-bb81ba0b79378e37"></a>
- **M05-CAP-TELEMEDICINE-bb81ba0b79378e37**: Laboratory Review
  Origin: original 3135, original 3175, original 3254, original 3295, original 3455, original 4197

<a id="M05-CAP-TELEMEDICINE-17725edecc696e96"></a>
- **M05-CAP-TELEMEDICINE-17725edecc696e96**: Family Conferences
  Origin: original 3135

<a id="M05-CAP-TELEMEDICINE-0a3364ca998bb569"></a>
- **M05-CAP-TELEMEDICINE-0a3364ca998bb569**: Supports remote gastroenterology care.
  Origin: original 3175

<a id="M05-CAP-TELEMEDICINE-ecb6717189fe9120"></a>
- **M05-CAP-TELEMEDICINE-ecb6717189fe9120**: Nutrition Consultations
  Origin: original 3175

<a id="M05-CAP-TELEMEDICINE-9be35a0d9b608925"></a>
- **M05-CAP-TELEMEDICINE-9be35a0d9b608925**: Endoscopy Review
  Origin: original 3175

<a id="M05-CAP-TELEMEDICINE-ff50639fcf6f4824"></a>
- **M05-CAP-TELEMEDICINE-ff50639fcf6f4824**: Family Counseling
  Origin: original 3175

<a id="M05-CAP-TELEMEDICINE-94a8c2055850861f"></a>
- **M05-CAP-TELEMEDICINE-94a8c2055850861f**: Supports remote respiratory care.
  Origin: original 3195

<a id="M05-CAP-TELEMEDICINE-187d66de43d78da3"></a>
- **M05-CAP-TELEMEDICINE-187d66de43d78da3**: Home Spirometry
  Origin: original 3195, original 3376

<a id="M05-CAP-TELEMEDICINE-99815e8f46747984"></a>
- **M05-CAP-TELEMEDICINE-99815e8f46747984**: Oxygen Monitoring
  Origin: original 3195, original 3376

<a id="M05-CAP-TELEMEDICINE-21c9b2283706c73e"></a>
- **M05-CAP-TELEMEDICINE-21c9b2283706c73e**: Ventilator Monitoring
  Origin: original 3195

<a id="M05-CAP-TELEMEDICINE-c0055f3e80f14c95"></a>
- **M05-CAP-TELEMEDICINE-c0055f3e80f14c95**: Supports remote hematology consultations.
  Origin: original 3254

<a id="M05-CAP-TELEMEDICINE-e5ec38b6fb72c75b"></a>
- **M05-CAP-TELEMEDICINE-e5ec38b6fb72c75b**: Bleeding Monitoring
  Origin: original 3254

<a id="M05-CAP-TELEMEDICINE-898dca3481a530ea"></a>
- **M05-CAP-TELEMEDICINE-898dca3481a530ea**: Transfusion Follow-up
  Origin: original 3254

<a id="M05-CAP-TELEMEDICINE-c8714cfecc191938"></a>
- **M05-CAP-TELEMEDICINE-c8714cfecc191938**: Supports remote pediatric gastroenterology care.
  Origin: original 3295

<a id="M05-CAP-TELEMEDICINE-c040b5f1ef18e28e"></a>
- **M05-CAP-TELEMEDICINE-c040b5f1ef18e28e**: Nutrition Follow-up
  Origin: original 3295

<a id="M05-CAP-TELEMEDICINE-8bf61b2b633fc7e7"></a>
- **M05-CAP-TELEMEDICINE-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 3295, original 3455

<a id="M05-CAP-TELEMEDICINE-fdf87aab8c436637"></a>
- **M05-CAP-TELEMEDICINE-fdf87aab8c436637**: Supports remote pulmonology care.
  Origin: original 3376

<a id="M05-CAP-TELEMEDICINE-663d86157022fe86"></a>
- **M05-CAP-TELEMEDICINE-663d86157022fe86**: Asthma Follow-up
  Origin: original 3376

<a id="M05-CAP-TELEMEDICINE-fb6c0067e43b2323"></a>
- **M05-CAP-TELEMEDICINE-fb6c0067e43b2323**: Medication Supervision
  Origin: original 3376

<a id="M05-CAP-TELEMEDICINE-f6e24577c45599fb"></a>
- **M05-CAP-TELEMEDICINE-f6e24577c45599fb**: Supports remote pediatric gastroenterology.
  Origin: original 3455

<a id="M05-CAP-TELEMEDICINE-3c2b71628f57bc6a"></a>
- **M05-CAP-TELEMEDICINE-3c2b71628f57bc6a**: Diet Review
  Origin: original 3455

<a id="M05-CAP-TELEMEDICINE-cc52d6d940178391"></a>
- **M05-CAP-TELEMEDICINE-cc52d6d940178391**: Medication Follow-up
  Origin: original 3455

<a id="M05-CAP-TELEMEDICINE-e0d275efdd17a0b5"></a>
- **M05-CAP-TELEMEDICINE-e0d275efdd17a0b5**: Video Consultation
  Origin: original 3676, original 4079, original 4197, original 4497

<a id="M05-CAP-TELEMEDICINE-6b5154af20cc3812"></a>
- **M05-CAP-TELEMEDICINE-6b5154af20cc3812**: Medication Monitoring
  Origin: original 3676

<a id="M05-CAP-TELEMEDICINE-22862a0b0f7af32d"></a>
- **M05-CAP-TELEMEDICINE-22862a0b0f7af32d**: Follow-up Care
  Origin: original 3676

<a id="M05-CAP-TELEMEDICINE-c5b5c0eb1d0db184"></a>
- **M05-CAP-TELEMEDICINE-c5b5c0eb1d0db184**: Supports remote pediatric cardiac care.
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-92f29abe32a206af"></a>
- **M05-CAP-TELEMEDICINE-92f29abe32a206af**: Home Monitoring
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-2201c250013e9710"></a>
- **M05-CAP-TELEMEDICINE-2201c250013e9710**: Wearable Data
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-9da77df714be61fe"></a>
- **M05-CAP-TELEMEDICINE-9da77df714be61fe**: Blood Pressure
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-f5cb94d0f0206eb5"></a>
- **M05-CAP-TELEMEDICINE-f5cb94d0f0206eb5**: Heart Rate
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-26510a3a5e04abf9"></a>
- **M05-CAP-TELEMEDICINE-26510a3a5e04abf9**: Symptom Diaries
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-9ca34de7a972a86a"></a>
- **M05-CAP-TELEMEDICINE-9ca34de7a972a86a**: ECG Devices
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-0d86946e629cc025"></a>
- **M05-CAP-TELEMEDICINE-0d86946e629cc025**: Follow-up
  Origin: original 4079, original 4194, original 4197, original 4497

<a id="M05-CAP-TELEMEDICINE-abd6d70311e41e8f"></a>
- **M05-CAP-TELEMEDICINE-abd6d70311e41e8f**: Supports escalation workflows based on predefined clinical criteria.
  Origin: original 4079

<a id="M05-CAP-TELEMEDICINE-4842b072ed539c61"></a>
- **M05-CAP-TELEMEDICINE-4842b072ed539c61**: Supports remote longitudinal hematology care.
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-8ea50d2707dd1600"></a>
- **M05-CAP-TELEMEDICINE-8ea50d2707dd1600**: Symptoms
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-b4e722228726c643"></a>
- **M05-CAP-TELEMEDICINE-b4e722228726c643**: Home Measurements
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-f4af213318cdbbc3"></a>
- **M05-CAP-TELEMEDICINE-f4af213318cdbbc3**: Medication Adherence
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-71f790fdf94f9c10"></a>
- **M05-CAP-TELEMEDICINE-71f790fdf94f9c10**: Laboratory Results
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-08b8e6fd8a327f24"></a>
- **M05-CAP-TELEMEDICINE-08b8e6fd8a327f24**: Bleeding Diaries
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-46b6a56144bdf572"></a>
- **M05-CAP-TELEMEDICINE-46b6a56144bdf572**: Pain Diaries
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-a7b0b7c7a6b8a594"></a>
- **M05-CAP-TELEMEDICINE-a7b0b7c7a6b8a594**: Treatment Events
  Origin: original 4194

<a id="M05-CAP-TELEMEDICINE-544a593f4669647a"></a>
- **M05-CAP-TELEMEDICINE-544a593f4669647a**: Supports remote specialist hematology care.
  Origin: original 4197

<a id="M05-CAP-TELEMEDICINE-ddca93d7133f65aa"></a>
- **M05-CAP-TELEMEDICINE-ddca93d7133f65aa**: Treatment Monitoring
  Origin: original 4197, original 4497

<a id="M05-CAP-TELEMEDICINE-9b0366757d544539"></a>
- **M05-CAP-TELEMEDICINE-9b0366757d544539**: Second Opinion
  Origin: original 4197, original 4497

<a id="M05-CAP-TELEMEDICINE-faf30dc5272a472a"></a>
- **M05-CAP-TELEMEDICINE-faf30dc5272a472a**: Multidisciplinary Consultation
  Origin: original 4197

<a id="M05-CAP-TELEMEDICINE-b38047810c871cd2"></a>
- **M05-CAP-TELEMEDICINE-b38047810c871cd2**: Cross-border Consultation
  Origin: original 4197, original 4497

<a id="M05-CAP-TELEMEDICINE-3653fe74232956b2"></a>
- **M05-CAP-TELEMEDICINE-3653fe74232956b2**: Supports cross-border specialist review.
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-d6bef59bd56de728"></a>
- **M05-CAP-TELEMEDICINE-d6bef59bd56de728**: Securely packages
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-14ed4d2078990c93"></a>
- **M05-CAP-TELEMEDICINE-14ed4d2078990c93**: Clinical Summary
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-a3241cf77d991407"></a>
- **M05-CAP-TELEMEDICINE-a3241cf77d991407**: Imaging
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-2d2ffbcbba25564e"></a>
- **M05-CAP-TELEMEDICINE-2d2ffbcbba25564e**: Pathology
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-cb78077b4bfcb26e"></a>
- **M05-CAP-TELEMEDICINE-cb78077b4bfcb26e**: Genomics
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-b596b3fab9cbd244"></a>
- **M05-CAP-TELEMEDICINE-b596b3fab9cbd244**: Treatment History
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-2efc2fec2c0c8ee3"></a>
- **M05-CAP-TELEMEDICINE-2efc2fec2c0c8ee3**: Response
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-8e21b2f0594d8085"></a>
- **M05-CAP-TELEMEDICINE-8e21b2f0594d8085**: Clinical Questions
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-0e543278197072d8"></a>
- **M05-CAP-TELEMEDICINE-0e543278197072d8**: Supports multilingual specialist collaboration through EDHT.
  Origin: original 4242

<a id="M05-CAP-TELEMEDICINE-735155b1b0da9485"></a>
- **M05-CAP-TELEMEDICINE-735155b1b0da9485**: Supports remote respiratory specialist care.
  Origin: original 4497

<a id="M05-CAP-TELEMEDICINE-056a9c33e1916560"></a>
- **M05-CAP-TELEMEDICINE-056a9c33e1916560**: Home Monitoring Review
  Origin: original 4497

<a id="M05-CAP-TELEMEDICINE-40c976f5f51069ec"></a>
- **M05-CAP-TELEMEDICINE-40c976f5f51069ec**: Pulmonary Function Review
  Origin: original 4497

<a id="M05-CAP-TELEMEDICINE-100f7ee630b87036"></a>
- **M05-CAP-TELEMEDICINE-100f7ee630b87036**: Device Review
  Origin: original 4497

## Preserved source metadata

<a id="M05-CAP-TELEMEDICINE-4fbeeb87456accf5"></a>
- **M05-CAP-TELEMEDICINE-4fbeeb87456accf5**: Supports

<a id="M05-CAP-TELEMEDICINE-5ba74d8fcc7b20cc"></a>
- **M05-CAP-TELEMEDICINE-5ba74d8fcc7b20cc**: Status

<a id="M05-CAP-TELEMEDICINE-d5232cbd3a326267"></a>
- **M05-CAP-TELEMEDICINE-d5232cbd3a326267**: Documentation

<a id="M05-CAP-TELEMEDICINE-6f33acf3afb37064"></a>
- **M05-CAP-TELEMEDICINE-6f33acf3afb37064**: ---

<a id="M05-CAP-TELEMEDICINE-21d94006fa494f95"></a>
- **M05-CAP-TELEMEDICINE-21d94006fa494f95**: Integrates

[Applied migration](../../../audit/master-05/requirement_migration.json) · [Gap disposition](../../../audit/master-05/gap_disposition.json) · [Readiness gates](../../../audit/master-05/implementation_gate_matrix.json).
