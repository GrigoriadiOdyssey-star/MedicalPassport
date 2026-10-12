# CORE-CAP-ENCOUNTER — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## pediatric-procedure-and-functional-studies

Encounter owns endoscopy, urodynamics, ECG/neurophysiology and infectious-episode history. Separate acquisition/procedure performance, interpreted results and clinical disposition; raw signals and images retain original source references. An episode entry does not certify an intervention occurred.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## source-physiological-study-archives

Encounter owns attributed examination/acquisition episodes and physiological-study reports. Preserve raw signal, acquisition method and separately reviewed interpretation; a test record is not a diagnosis, device setting or treatment authorization.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## laboratory-referral-orders

Encounter owns attributed laboratory requests/referrals and clinician authorization. Requested tests/priority and source indication stay distinct from completed collection/results, and a draft cannot issue a signed order.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## core-encounter-and-referral-history

Encounter owns attributed admissions, procedures, referrals, clinical consultations and clinician-defined follow-up/exercise/therapy plans. Plan, request, accepted referral and performed episode remain distinct. Source medication/device/result owners retain facts; no generated schedule or clinician vote attests an intervention happened.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## remaining-hospital-portal

Hospital portal coordinates admission-to-discharge episodes; billing, laboratory, imaging and surgery remain separately attributed owner records, with performed versus requested state.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 4030 / pediatric-procedure-and-functional-studies: Pediatric Endoscopy Module — Supports pediatric endoscopy workflows.
- Original 4055 / pediatric-procedure-and-functional-studies: Pediatric Urodynamics Module — Supports pediatric lower urinary tract evaluation.
- Original 4065 / pediatric-procedure-and-functional-studies: Pediatric ECG & Rhythm Module — Supports pediatric electrocardiography.
- Original 4604 / pediatric-procedure-and-functional-studies: Pediatric EEG, Video-EEG & Neurophysiology Intelligence Module — Integrate pediatric EEG and related neurophysiology into the longitudinal neurological record.
- Original 5052 / pediatric-procedure-and-functional-studies: Pediatric Longitudinal Infection Episode Registry Module — Create a unified lifetime registry of clinically significant pediatric infectious episodes.
- Original 506 / source-physiological-study-archives: ECG Archive — Stores electrocardiograms.
- Original 527 / source-physiological-study-archives: EEG Archive — Stores electroencephalography examinations.
- Original 528 / source-physiological-study-archives: EMG Archive — Stores electromyography and nerve conduction studies.
- Original 538 / source-physiological-study-archives: Sleep Study Archive — Stores polysomnography examinations.
- Original 551 / source-physiological-study-archives: Visual Field Examination Archive — Stores computerized visual field examinations.
- Original 585 / source-physiological-study-archives: Spirometry Archive — Stores pulmonary function test results.
- Original 658 / source-physiological-study-archives: Urodynamic Examination Archive — Stores urodynamic study results.
- Original 744 / source-physiological-study-archives: Cardiotocography Archive — Stores CTG examinations.
- Original 845 / source-physiological-study-archives: Pediatric ECG Archive — Stores pediatric electrocardiograms.
- Original 851 / source-physiological-study-archives: Pediatric Exercise Test Archive — Stores pediatric stress testing.
- Original 885 / source-physiological-study-archives: Pediatric EEG Archive — Stores pediatric electroencephalography examinations.
- Original 381 / laboratory-referral-orders: Laboratory Referral Management — Stores laboratory referrals issued by healthcare professionals.
- Original 382 / laboratory-referral-orders: Electronic Laboratory Orders — Allows healthcare professionals to issue electronic laboratory requests.
- Original 124 / core-encounter-and-referral-history: Operations History — Record surgical procedures, dates, providers, supporting documents and recovery notes.
- Original 125 / core-encounter-and-referral-history: Hospitalization History — Record admission, discharge, diagnoses, procedures, medicines and hospitalization reports.
- Original 166 / core-encounter-and-referral-history: Referral Management — Coordinate referral, specialist booking, consultation and returned reports.
- Original 167 / core-encounter-and-referral-history: Specialist Collaboration — Support consent-controlled specialist consultation, messaging and sharing of records and investigations.
- Original 277 / core-encounter-and-referral-history: Laboratory Follow-up Planner — Creates individualized schedules for laboratory follow-up based on physician-defined monitoring plans.
- Original 302 / core-encounter-and-referral-history: Exercise Prescription — Allows healthcare professionals to create personalized exercise plans.
- Original 457 / core-encounter-and-referral-history: Cosmetic Dentistry — Stores cosmetic dental procedures.
- Original 476 / core-encounter-and-referral-history: Cosmetic Dermatology — Stores cosmetic dermatological procedures.
- Original 507 / core-encounter-and-referral-history: Holter Monitoring — Stores Holter monitoring examinations.
- Original 741 / core-encounter-and-referral-history: Labor Admission Center — Supports admission of pregnant patients for childbirth.
- Original 754 / core-encounter-and-referral-history: Breastfeeding Consultation — Supports online and offline lactation consultations.
- Original 811 / core-encounter-and-referral-history: Radiotherapy Monitoring — Stores radiation therapy history.
- Original 850 / core-encounter-and-referral-history: Pediatric Holter Monitoring — Stores Holter ECG examinations.
- Original 205 / remaining-hospital-portal: Hospital Partner Portal — Support hospital admission, identification, records, investigations, billing and discharge.

## Requirements and source metadata

<a id="M19-CAP-ENCOUNTER-7bdddfef3ecd567b"></a>
- **M19-CAP-ENCOUNTER-7bdddfef3ecd567b**: Supports pediatric endoscopy workflows.
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M19-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports
  Applies to original IDs: 4030, 4055, 4065, 506, 527, 528, 538, 551, 585, 658, 744, 845, 851, 885, 381, 382, 167, 277, 302, 457, 476, 507, 811, 850.

<a id="M19-CAP-ENCOUNTER-fd7ceae58560526a"></a>
- **M19-CAP-ENCOUNTER-fd7ceae58560526a**: Upper Endoscopy
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-4ea607a784624620"></a>
- **M19-CAP-ENCOUNTER-4ea607a784624620**: Colonoscopy
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-16f01f8d7f52865d"></a>
- **M19-CAP-ENCOUNTER-16f01f8d7f52865d**: Biopsy Documentation
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-32ffc096d55d159d"></a>
- **M19-CAP-ENCOUNTER-32ffc096d55d159d**: Histology
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-3bc3a5d685835c9d"></a>
- **M19-CAP-ENCOUNTER-3bc3a5d685835c9d**: Image Storage
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-4d07e2fa6d4fbb5d"></a>
- **M19-CAP-ENCOUNTER-4d07e2fa6d4fbb5d**: Video Storage
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-95a29347fe822013"></a>
- **M19-CAP-ENCOUNTER-95a29347fe822013**: Findings
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-0d86946e629cc025"></a>
- **M19-CAP-ENCOUNTER-0d86946e629cc025**: Follow-up
  Applies to original IDs: 4030, 811.

<a id="M19-CAP-ENCOUNTER-7904bd9f9cdb7ab6"></a>
- **M19-CAP-ENCOUNTER-7904bd9f9cdb7ab6**: Integrates endoscopic findings with the patient longitudinal record.
  Applies to original IDs: 4030.

<a id="M19-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M19-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 4030, 4055, 4065, 506, 527, 528, 538, 551, 585, 658, 744, 845, 851, 885, 381, 382, 124, 125, 166, 167, 277, 302, 457, 476, 507, 741, 754, 811, 850, 205.

<a id="M19-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M19-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4030, 4055, 4065, 4604, 5052, 506, 527, 528, 538, 551, 585, 658, 744, 845, 851, 885, 381, 382, 124, 125, 166, 167, 277, 302, 457, 476, 507, 741, 754, 811, 850, 205.

<a id="M19-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M19-CAP-ENCOUNTER-6f33acf3afb37064**: ---
  Applies to original IDs: 4030, 4055, 4065, 4604, 5052, 506, 527, 528, 538, 551, 585, 658, 744, 845, 851, 885, 381, 382, 124, 125, 166, 167, 277, 302, 457, 476, 507, 741, 754, 811, 850, 205.

<a id="M19-CAP-ENCOUNTER-ee997f631482ca96"></a>
- **M19-CAP-ENCOUNTER-ee997f631482ca96**: Supports pediatric lower urinary tract evaluation.
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-f46e4a2365991da8"></a>
- **M19-CAP-ENCOUNTER-f46e4a2365991da8**: Uroflowmetry
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-e634dc3bdb775b65"></a>
- **M19-CAP-ENCOUNTER-e634dc3bdb775b65**: Bladder Pressure
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-a56126cbd2b2717e"></a>
- **M19-CAP-ENCOUNTER-a56126cbd2b2717e**: Capacity
  Applies to original IDs: 4055, 658.

<a id="M19-CAP-ENCOUNTER-bf0f8a3bd36849e7"></a>
- **M19-CAP-ENCOUNTER-bf0f8a3bd36849e7**: Compliance
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-5ace80c268b57224"></a>
- **M19-CAP-ENCOUNTER-5ace80c268b57224**: Voiding Patterns
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-863d4c9b4ad5104f"></a>
- **M19-CAP-ENCOUNTER-863d4c9b4ad5104f**: Pelvic Floor Assessment
  Applies to original IDs: 4055.

<a id="M19-CAP-ENCOUNTER-7fa79dce2b8d7e98"></a>
- **M19-CAP-ENCOUNTER-7fa79dce2b8d7e98**: Longitudinal Comparison
  Applies to original IDs: 4055, 4604.

<a id="M19-CAP-ENCOUNTER-819a1a4119eb1138"></a>
- **M19-CAP-ENCOUNTER-819a1a4119eb1138**: Supports pediatric electrocardiography.
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-908bd653026c1444"></a>
- **M19-CAP-ENCOUNTER-908bd653026c1444**: ECG Acquisition
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-8d89b46795797ce4"></a>
- **M19-CAP-ENCOUNTER-8d89b46795797ce4**: Rhythm Classification
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-7dc1f36de2554ec5"></a>
- **M19-CAP-ENCOUNTER-7dc1f36de2554ec5**: Conduction Analysis
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-9f35f3ee5b12c40f"></a>
- **M19-CAP-ENCOUNTER-9f35f3ee5b12c40f**: QT Assessment
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-0206e06ee4593e71"></a>
- **M19-CAP-ENCOUNTER-0206e06ee4593e71**: Arrhythmia Detection
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-bef46ccdd42dcf4b"></a>
- **M19-CAP-ENCOUNTER-bef46ccdd42dcf4b**: Longitudinal ECG Comparison
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-4918d6690e4826c9"></a>
- **M19-CAP-ENCOUNTER-4918d6690e4826c9**: AI interpretation remains decision support requiring clinician review.
  Applies to original IDs: 4065.

<a id="M19-CAP-ENCOUNTER-6510c5c511a879bc"></a>
- **M19-CAP-ENCOUNTER-6510c5c511a879bc**: Purpose:
  Applies to original IDs: 4604, 5052.

<a id="M19-CAP-ENCOUNTER-b5bf45e9373eb7a1"></a>
- **M19-CAP-ENCOUNTER-b5bf45e9373eb7a1**: Integrate pediatric EEG and related neurophysiology into the longitudinal neurological record.
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-a18430c2e5b91505"></a>
- **M19-CAP-ENCOUNTER-a18430c2e5b91505**: Core Functions:
  Applies to original IDs: 4604, 5052.

<a id="M19-CAP-ENCOUNTER-568ab830413345f7"></a>
- **M19-CAP-ENCOUNTER-568ab830413345f7**: Routine EEG
  Applies to original IDs: 4604, 527.

<a id="M19-CAP-ENCOUNTER-1f2a9495b8b4201d"></a>
- **M19-CAP-ENCOUNTER-1f2a9495b8b4201d**: Sleep EEG
  Applies to original IDs: 4604, 527.

<a id="M19-CAP-ENCOUNTER-77bd60806fa7ccea"></a>
- **M19-CAP-ENCOUNTER-77bd60806fa7ccea**: Ambulatory EEG
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-a7ec6bbe3aaa4aae"></a>
- **M19-CAP-ENCOUNTER-a7ec6bbe3aaa4aae**: Video-EEG Monitoring
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-946cfdd540af5ce1"></a>
- **M19-CAP-ENCOUNTER-946cfdd540af5ce1**: ICU EEG
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-eed8b7e60c540c85"></a>
- **M19-CAP-ENCOUNTER-eed8b7e60c540c85**: Event Marking
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-4f666f4ffc670af8"></a>
- **M19-CAP-ENCOUNTER-4f666f4ffc670af8**: Electrographic Seizure Documentation
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-0000ee83df9464ab"></a>
- **M19-CAP-ENCOUNTER-0000ee83df9464ab**: Background Activity
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-85fa14f5db0bd44b"></a>
- **M19-CAP-ENCOUNTER-85fa14f5db0bd44b**: Epileptiform Findings
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-e2f2c6bb5e5afeba"></a>
- **M19-CAP-ENCOUNTER-e2f2c6bb5e5afeba**: Sleep-related Findings
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-595522f2925fa689"></a>
- **M19-CAP-ENCOUNTER-595522f2925fa689**: Technical Quality
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-a6fa6d83b3f964f8"></a>
- **M19-CAP-ENCOUNTER-a6fa6d83b3f964f8**: Specialist Interpretation
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-816f49494ba8a0c9"></a>
- **M19-CAP-ENCOUNTER-816f49494ba8a0c9**: Historical Comparison
  Applies to original IDs: 4604, 551, 585, 744, 845, 885.

<a id="M19-CAP-ENCOUNTER-30c6f2d75d8ac59b"></a>
- **M19-CAP-ENCOUNTER-30c6f2d75d8ac59b**: Treatment Correlation
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-83002814dbbac6ae"></a>
- **M19-CAP-ENCOUNTER-83002814dbbac6ae**: Data Functions:
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-90bbe5dcb7a2da90"></a>
- **M19-CAP-ENCOUNTER-90bbe5dcb7a2da90**: Raw Study Reference
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-a2923d3deccfb40f"></a>
- **M19-CAP-ENCOUNTER-a2923d3deccfb40f**: Structured Findings
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-0fb99c57950f8dff"></a>
- **M19-CAP-ENCOUNTER-0fb99c57950f8dff**: Clinical Events
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-e41587ec677e9a9e"></a>
- **M19-CAP-ENCOUNTER-e41587ec677e9a9e**: Video Correlation
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-c9b067f01c20fb72"></a>
- **M19-CAP-ENCOUNTER-c9b067f01c20fb72**: Medication Context
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-c78cc79222930be4"></a>
- **M19-CAP-ENCOUNTER-c78cc79222930be4**: Timestamp Synchronization
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-fb7dcbc64a7ed5f8"></a>
- **M19-CAP-ENCOUNTER-fb7dcbc64a7ed5f8**: AI Functions:
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-6469c9a5ff65f1bf"></a>
- **M19-CAP-ENCOUNTER-6469c9a5ff65f1bf**: Signal Review Assistance
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-f5b5d7ede4a8c55d"></a>
- **M19-CAP-ENCOUNTER-f5b5d7ede4a8c55d**: Event Detection Support
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-5af313388f2e35e4"></a>
- **M19-CAP-ENCOUNTER-5af313388f2e35e4**: Workflow Prioritization
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-07f8d474b8b4141c"></a>
- **M19-CAP-ENCOUNTER-07f8d474b8b4141c**: Safety:
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-0dbf01b50920770f"></a>
- **M19-CAP-ENCOUNTER-0dbf01b50920770f**: AI analysis cannot replace qualified EEG interpretation.
  Applies to original IDs: 4604.

<a id="M19-CAP-ENCOUNTER-b88b375a44ccd619"></a>
- **M19-CAP-ENCOUNTER-b88b375a44ccd619**: Status:
  Applies to original IDs: 4604, 5052.

<a id="M19-CAP-ENCOUNTER-80e94c880e171327"></a>
- **M19-CAP-ENCOUNTER-80e94c880e171327**: Create a unified lifetime registry of clinically significant pediatric infectious episodes.
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-9d2eac184da0ae17"></a>
- **M19-CAP-ENCOUNTER-9d2eac184da0ae17**: Infection Episode
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-b9f5b4b6b9719d53"></a>
- **M19-CAP-ENCOUNTER-b9f5b4b6b9719d53**: Date of Onset
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-52f7834a10a9c9ac"></a>
- **M19-CAP-ENCOUNTER-52f7834a10a9c9ac**: Anatomical Site
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-74622bc0d2916615"></a>
- **M19-CAP-ENCOUNTER-74622bc0d2916615**: Suspected Pathogen
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-af2620b0272b5e79"></a>
- **M19-CAP-ENCOUNTER-af2620b0272b5e79**: Confirmed Pathogen
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-0dbeacb9f9ac3f6a"></a>
- **M19-CAP-ENCOUNTER-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-09ed4bc8392e7b15"></a>
- **M19-CAP-ENCOUNTER-09ed4bc8392e7b15**: Fever Context
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-71f790fdf94f9c10"></a>
- **M19-CAP-ENCOUNTER-71f790fdf94f9c10**: Laboratory Results
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-a3241cf77d991407"></a>
- **M19-CAP-ENCOUNTER-a3241cf77d991407**: Imaging
  Applies to original IDs: 5052, 205.

<a id="M19-CAP-ENCOUNTER-d130447d684396f9"></a>
- **M19-CAP-ENCOUNTER-d130447d684396f9**: Microbiology
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-0207549b28719905"></a>
- **M19-CAP-ENCOUNTER-0207549b28719905**: Treatment
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-f201cbfb32217cee"></a>
- **M19-CAP-ENCOUNTER-f201cbfb32217cee**: Hospitalization
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-32c4dafcf8c5420b"></a>
- **M19-CAP-ENCOUNTER-32c4dafcf8c5420b**: Intensive Care Context
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-73dedf86b2ae9801"></a>
- **M19-CAP-ENCOUNTER-73dedf86b2ae9801**: Complications
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-611b9c578c9cc80a"></a>
- **M19-CAP-ENCOUNTER-611b9c578c9cc80a**: Resolution
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-1d65210795905d48"></a>
- **M19-CAP-ENCOUNTER-1d65210795905d48**: Recurrence
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-a32ffb3d800eee3f"></a>
- **M19-CAP-ENCOUNTER-a32ffb3d800eee3f**: Longitudinal Functions:
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-a01ae28bdb2a917e"></a>
- **M19-CAP-ENCOUNTER-a01ae28bdb2a917e**: Infection Frequency
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-d6c5eec9b2676419"></a>
- **M19-CAP-ENCOUNTER-d6c5eec9b2676419**: Recurrent Site Detection
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-92714aa2187dd1e7"></a>
- **M19-CAP-ENCOUNTER-92714aa2187dd1e7**: Pathogen Recurrence
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-b596b3fab9cbd244"></a>
- **M19-CAP-ENCOUNTER-b596b3fab9cbd244**: Treatment History
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-583f456b27a118af"></a>
- **M19-CAP-ENCOUNTER-583f456b27a118af**: Antibiotic Exposure
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-41dc713d820ca713"></a>
- **M19-CAP-ENCOUNTER-41dc713d820ca713**: Resistant Organism History
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-a07121745f141e5c"></a>
- **M19-CAP-ENCOUNTER-a07121745f141e5c**: Patient-specific Infection Baseline
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-d42b0bb84e6cd8da"></a>
- **M19-CAP-ENCOUNTER-d42b0bb84e6cd8da**: MVP Relevance:
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-43a67d79860bcb43"></a>
- **M19-CAP-ENCOUNTER-43a67d79860bcb43**: HIGH
  Applies to original IDs: 5052.

<a id="M19-CAP-ENCOUNTER-f6b1e9de0a170543"></a>
- **M19-CAP-ENCOUNTER-f6b1e9de0a170543**: # ECG Archive
  Applies to original IDs: 506.

<a id="M19-CAP-ENCOUNTER-728b35e622795060"></a>
- **M19-CAP-ENCOUNTER-728b35e622795060**: Stores electrocardiograms.
  Applies to original IDs: 506.

<a id="M19-CAP-ENCOUNTER-7c23d86d6d4f4e24"></a>
- **M19-CAP-ENCOUNTER-7c23d86d6d4f4e24**: Resting ECG
  Applies to original IDs: 506.

<a id="M19-CAP-ENCOUNTER-1c8e42e6003b8546"></a>
- **M19-CAP-ENCOUNTER-1c8e42e6003b8546**: Holter ECG
  Applies to original IDs: 506.

<a id="M19-CAP-ENCOUNTER-0da54171c0064811"></a>
- **M19-CAP-ENCOUNTER-0da54171c0064811**: Stress ECG
  Applies to original IDs: 506.

<a id="M19-CAP-ENCOUNTER-3f46ddfc482453ec"></a>
- **M19-CAP-ENCOUNTER-3f46ddfc482453ec**: Physician Reports
  Applies to original IDs: 506, 658, 885.

<a id="M19-CAP-ENCOUNTER-f353e04b3846c831"></a>
- **M19-CAP-ENCOUNTER-f353e04b3846c831**: # EEG Archive
  Applies to original IDs: 527.

<a id="M19-CAP-ENCOUNTER-1caeacf3349546d1"></a>
- **M19-CAP-ENCOUNTER-1caeacf3349546d1**: Stores electroencephalography examinations.
  Applies to original IDs: 527.

<a id="M19-CAP-ENCOUNTER-061f583808ee9b44"></a>
- **M19-CAP-ENCOUNTER-061f583808ee9b44**: Video EEG
  Applies to original IDs: 527, 885.

<a id="M19-CAP-ENCOUNTER-b4847cd27e678ca9"></a>
- **M19-CAP-ENCOUNTER-b4847cd27e678ca9**: Physician Interpretation
  Applies to original IDs: 527, 528, 538, 551, 744, 507.

<a id="M19-CAP-ENCOUNTER-8f277ed0f8997cc5"></a>
- **M19-CAP-ENCOUNTER-8f277ed0f8997cc5**: # Electromyography Archive
  Applies to original IDs: 528.

<a id="M19-CAP-ENCOUNTER-04f0ae4a99eb93d2"></a>
- **M19-CAP-ENCOUNTER-04f0ae4a99eb93d2**: Stores electromyography and nerve conduction studies.
  Applies to original IDs: 528.

<a id="M19-CAP-ENCOUNTER-d91546e2c5999efe"></a>
- **M19-CAP-ENCOUNTER-d91546e2c5999efe**: EMG Reports
  Applies to original IDs: 528.

<a id="M19-CAP-ENCOUNTER-fd16f6363c1b9dd8"></a>
- **M19-CAP-ENCOUNTER-fd16f6363c1b9dd8**: Nerve Conduction Studies
  Applies to original IDs: 528.

<a id="M19-CAP-ENCOUNTER-56fa14f4a9149af1"></a>
- **M19-CAP-ENCOUNTER-56fa14f4a9149af1**: # Sleep Study Archive
  Applies to original IDs: 538.

<a id="M19-CAP-ENCOUNTER-f21c65fe9dd21e84"></a>
- **M19-CAP-ENCOUNTER-f21c65fe9dd21e84**: Stores polysomnography examinations.
  Applies to original IDs: 538.

<a id="M19-CAP-ENCOUNTER-a8ba65dff570a5c2"></a>
- **M19-CAP-ENCOUNTER-a8ba65dff570a5c2**: Sleep Reports
  Applies to original IDs: 538.

<a id="M19-CAP-ENCOUNTER-99815e8f46747984"></a>
- **M19-CAP-ENCOUNTER-99815e8f46747984**: Oxygen Monitoring
  Applies to original IDs: 538.

<a id="M19-CAP-ENCOUNTER-b71246814ad62ea2"></a>
- **M19-CAP-ENCOUNTER-b71246814ad62ea2**: Sleep Stages
  Applies to original IDs: 538.

<a id="M19-CAP-ENCOUNTER-247d991dc8c00154"></a>
- **M19-CAP-ENCOUNTER-247d991dc8c00154**: # Visual Field Examination Archive
  Applies to original IDs: 551.

<a id="M19-CAP-ENCOUNTER-cbf327a9e963bf10"></a>
- **M19-CAP-ENCOUNTER-cbf327a9e963bf10**: Stores computerized visual field examinations.
  Applies to original IDs: 551.

<a id="M19-CAP-ENCOUNTER-6244898a44d528c3"></a>
- **M19-CAP-ENCOUNTER-6244898a44d528c3**: Humphrey Visual Field
  Applies to original IDs: 551.

<a id="M19-CAP-ENCOUNTER-0a35f54ca08e9883"></a>
- **M19-CAP-ENCOUNTER-0a35f54ca08e9883**: Goldmann Perimetry
  Applies to original IDs: 551.

<a id="M19-CAP-ENCOUNTER-43e7d5635668dbc8"></a>
- **M19-CAP-ENCOUNTER-43e7d5635668dbc8**: # Spirometry Archive
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-5ceca3fea81087da"></a>
- **M19-CAP-ENCOUNTER-5ceca3fea81087da**: Stores pulmonary function test results.
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-d3e0f797fa5f7d6c"></a>
- **M19-CAP-ENCOUNTER-d3e0f797fa5f7d6c**: FEV1
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-25ba796b1fecb54b"></a>
- **M19-CAP-ENCOUNTER-25ba796b1fecb54b**: FVC
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-c91b3b9e707d80b9"></a>
- **M19-CAP-ENCOUNTER-c91b3b9e707d80b9**: FEV1/FVC
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-6550dfdee271f5f4"></a>
- **M19-CAP-ENCOUNTER-6550dfdee271f5f4**: Peak Flow
  Applies to original IDs: 585.

<a id="M19-CAP-ENCOUNTER-012dc39a347bdd92"></a>
- **M19-CAP-ENCOUNTER-012dc39a347bdd92**: # Urodynamic Examination Archive
  Applies to original IDs: 658.

<a id="M19-CAP-ENCOUNTER-39610d41029c335e"></a>
- **M19-CAP-ENCOUNTER-39610d41029c335e**: Stores urodynamic study results.
  Applies to original IDs: 658.

<a id="M19-CAP-ENCOUNTER-d44acfef778f918a"></a>
- **M19-CAP-ENCOUNTER-d44acfef778f918a**: Flowmetry
  Applies to original IDs: 658.

<a id="M19-CAP-ENCOUNTER-afd3ed3dcd852172"></a>
- **M19-CAP-ENCOUNTER-afd3ed3dcd852172**: Pressure Studies
  Applies to original IDs: 658.

<a id="M19-CAP-ENCOUNTER-0b5425f1b8c8c289"></a>
- **M19-CAP-ENCOUNTER-0b5425f1b8c8c289**: # Cardiotocography Archive
  Applies to original IDs: 744.

<a id="M19-CAP-ENCOUNTER-42c3437de46dc32f"></a>
- **M19-CAP-ENCOUNTER-42c3437de46dc32f**: Stores CTG examinations.
  Applies to original IDs: 744.

<a id="M19-CAP-ENCOUNTER-0bad47f40a3908ed"></a>
- **M19-CAP-ENCOUNTER-0bad47f40a3908ed**: Digital Records
  Applies to original IDs: 744.

<a id="M19-CAP-ENCOUNTER-f21d9fb7fe29d532"></a>
- **M19-CAP-ENCOUNTER-f21d9fb7fe29d532**: # Pediatric ECG Archive
  Applies to original IDs: 845.

<a id="M19-CAP-ENCOUNTER-8b5c333e250ab3c6"></a>
- **M19-CAP-ENCOUNTER-8b5c333e250ab3c6**: Stores pediatric electrocardiograms.
  Applies to original IDs: 845.

<a id="M19-CAP-ENCOUNTER-fcd603236be273cc"></a>
- **M19-CAP-ENCOUNTER-fcd603236be273cc**: Digital ECG
  Applies to original IDs: 845.

<a id="M19-CAP-ENCOUNTER-e60c316d3a5e1ecf"></a>
- **M19-CAP-ENCOUNTER-e60c316d3a5e1ecf**: Interpretation
  Applies to original IDs: 845.

<a id="M19-CAP-ENCOUNTER-4a35faa275bb3cc1"></a>
- **M19-CAP-ENCOUNTER-4a35faa275bb3cc1**: # Pediatric Exercise Test Archive
  Applies to original IDs: 851.

<a id="M19-CAP-ENCOUNTER-734b97bb282233a4"></a>
- **M19-CAP-ENCOUNTER-734b97bb282233a4**: Stores pediatric stress testing.
  Applies to original IDs: 851.

<a id="M19-CAP-ENCOUNTER-264aef70160de84c"></a>
- **M19-CAP-ENCOUNTER-264aef70160de84c**: Exercise ECG
  Applies to original IDs: 851.

<a id="M19-CAP-ENCOUNTER-def54dde93aa4578"></a>
- **M19-CAP-ENCOUNTER-def54dde93aa4578**: Performance
  Applies to original IDs: 851.

<a id="M19-CAP-ENCOUNTER-c6b2cbf55be07670"></a>
- **M19-CAP-ENCOUNTER-c6b2cbf55be07670**: Heart Rate Response
  Applies to original IDs: 851.

<a id="M19-CAP-ENCOUNTER-3adf012e17d41a5f"></a>
- **M19-CAP-ENCOUNTER-3adf012e17d41a5f**: # Pediatric EEG Archive
  Applies to original IDs: 885.

<a id="M19-CAP-ENCOUNTER-d007cb15086b70d4"></a>
- **M19-CAP-ENCOUNTER-d007cb15086b70d4**: Stores pediatric electroencephalography examinations.
  Applies to original IDs: 885.

<a id="M19-CAP-ENCOUNTER-9e9960d5fbb3943f"></a>
- **M19-CAP-ENCOUNTER-9e9960d5fbb3943f**: Digital EEG
  Applies to original IDs: 885.

<a id="M19-CAP-ENCOUNTER-5af009db10994138"></a>
- **M19-CAP-ENCOUNTER-5af009db10994138**: # Laboratory Referral Management
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-ab05156c4b88ca50"></a>
- **M19-CAP-ENCOUNTER-ab05156c4b88ca50**: Stores laboratory referrals issued by healthcare professionals.
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-7b74e0a3f22ddddf"></a>
- **M19-CAP-ENCOUNTER-7b74e0a3f22ddddf**: Referral Number
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-e6963099fca2b58a"></a>
- **M19-CAP-ENCOUNTER-e6963099fca2b58a**: Referring Physician
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-1e27ffbb8dff2f91"></a>
- **M19-CAP-ENCOUNTER-1e27ffbb8dff2f91**: Requested Examinations
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-6c6ef0beb712f726"></a>
- **M19-CAP-ENCOUNTER-6c6ef0beb712f726**: Referral Date
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-337b49704d348de9"></a>
- **M19-CAP-ENCOUNTER-337b49704d348de9**: Expiration Date
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-b973d0e2beb8a55d"></a>
- **M19-CAP-ENCOUNTER-b973d0e2beb8a55d**: Integrated with Laboratory Platform.
  Applies to original IDs: 381.

<a id="M19-CAP-ENCOUNTER-c29fcb5826f635b4"></a>
- **M19-CAP-ENCOUNTER-c29fcb5826f635b4**: # Electronic Laboratory Orders
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-455180eb1263b401"></a>
- **M19-CAP-ENCOUNTER-455180eb1263b401**: Allows healthcare professionals to issue electronic laboratory requests.
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-c80681c073d25c40"></a>
- **M19-CAP-ENCOUNTER-c80681c073d25c40**: Individual Tests
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-4a328d3730609bab"></a>
- **M19-CAP-ENCOUNTER-4a328d3730609bab**: Laboratory Panels
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-a9033429c0b06a33"></a>
- **M19-CAP-ENCOUNTER-a9033429c0b06a33**: Clinical Notes
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-b890766b57a1f164"></a>
- **M19-CAP-ENCOUNTER-b890766b57a1f164**: Priority Level
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-b9985c8d7bff4b7b"></a>
- **M19-CAP-ENCOUNTER-b9985c8d7bff4b7b**: Digital Authorization
  Applies to original IDs: 382.

<a id="M19-CAP-ENCOUNTER-dc14f3038443c455"></a>
- **M19-CAP-ENCOUNTER-dc14f3038443c455**: # Operations History
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-f46e10af70055b66"></a>
- **M19-CAP-ENCOUNTER-f46e10af70055b66**: Stores
  Applies to original IDs: 124, 125.

<a id="M19-CAP-ENCOUNTER-bc506fdefc6e7e7b"></a>
- **M19-CAP-ENCOUNTER-bc506fdefc6e7e7b**: Surgery
  Applies to original IDs: 124, 205.

<a id="M19-CAP-ENCOUNTER-703ea7dbc5d7a043"></a>
- **M19-CAP-ENCOUNTER-703ea7dbc5d7a043**: Date
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-9292031266b0e334"></a>
- **M19-CAP-ENCOUNTER-9292031266b0e334**: Hospital
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-4d2b58385f4ea306"></a>
- **M19-CAP-ENCOUNTER-4d2b58385f4ea306**: Surgeon
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-32d252fac5dfc0ed"></a>
- **M19-CAP-ENCOUNTER-32d252fac5dfc0ed**: Documents
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-865278eb1031df84"></a>
- **M19-CAP-ENCOUNTER-865278eb1031df84**: Recovery Notes
  Applies to original IDs: 124.

<a id="M19-CAP-ENCOUNTER-0b76e9028700344c"></a>
- **M19-CAP-ENCOUNTER-0b76e9028700344c**: # Hospitalization History
  Applies to original IDs: 125.

<a id="M19-CAP-ENCOUNTER-63bde98f08b204ce"></a>
- **M19-CAP-ENCOUNTER-63bde98f08b204ce**: Admission
  Applies to original IDs: 125.

<a id="M19-CAP-ENCOUNTER-d2de40816e25d92e"></a>
- **M19-CAP-ENCOUNTER-d2de40816e25d92e**: Discharge
  Applies to original IDs: 125, 205.

<a id="M19-CAP-ENCOUNTER-5f124f9e42776b79"></a>
- **M19-CAP-ENCOUNTER-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 125.

<a id="M19-CAP-ENCOUNTER-228b18d13e8b34f1"></a>
- **M19-CAP-ENCOUNTER-228b18d13e8b34f1**: Procedures
  Applies to original IDs: 125.

<a id="M19-CAP-ENCOUNTER-d7a2add4cd06a8e6"></a>
- **M19-CAP-ENCOUNTER-d7a2add4cd06a8e6**: Medicines
  Applies to original IDs: 125.

<a id="M19-CAP-ENCOUNTER-1b7e8c9aeda2f85f"></a>
- **M19-CAP-ENCOUNTER-1b7e8c9aeda2f85f**: Reports
  Applies to original IDs: 125, 850.

<a id="M19-CAP-ENCOUNTER-4cd7dbc69b8c9990"></a>
- **M19-CAP-ENCOUNTER-4cd7dbc69b8c9990**: # Medical Referrals
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-52a3545c159968e0"></a>
- **M19-CAP-ENCOUNTER-52a3545c159968e0**: Doctor
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-60ad5f0e95a3c0f2"></a>
- **M19-CAP-ENCOUNTER-60ad5f0e95a3c0f2**: ↓
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-203f84f7ff932be5"></a>
- **M19-CAP-ENCOUNTER-203f84f7ff932be5**: Referral
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-610be5161ac12d3f"></a>
- **M19-CAP-ENCOUNTER-610be5161ac12d3f**: Specialist
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-dc32aa30bc89baae"></a>
- **M19-CAP-ENCOUNTER-dc32aa30bc89baae**: Appointment
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-d710418292d90aad"></a>
- **M19-CAP-ENCOUNTER-d710418292d90aad**: Consultation
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-274c6f515f717d85"></a>
- **M19-CAP-ENCOUNTER-274c6f515f717d85**: Report Returned
  Applies to original IDs: 166.

<a id="M19-CAP-ENCOUNTER-647119191b64bc54"></a>
- **M19-CAP-ENCOUNTER-647119191b64bc54**: # Specialist Collaboration
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-e82c61c6ffead3cd"></a>
- **M19-CAP-ENCOUNTER-e82c61c6ffead3cd**: Internal Consultation
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-ef284df442859475"></a>
- **M19-CAP-ENCOUNTER-ef284df442859475**: Secure Messaging
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-eda0336e1d195b1f"></a>
- **M19-CAP-ENCOUNTER-eda0336e1d195b1f**: Shared Medical Records
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-b815d3fa986085cd"></a>
- **M19-CAP-ENCOUNTER-b815d3fa986085cd**: Shared Laboratory Results
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-4e7356dc87910cb8"></a>
- **M19-CAP-ENCOUNTER-4e7356dc87910cb8**: Shared Imaging
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-6f2e3407e89d33ff"></a>
- **M19-CAP-ENCOUNTER-6f2e3407e89d33ff**: Access controlled through patient consent.
  Applies to original IDs: 167.

<a id="M19-CAP-ENCOUNTER-44f502be12395a53"></a>
- **M19-CAP-ENCOUNTER-44f502be12395a53**: # Laboratory Planner
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-e9c3bc8f73331231"></a>
- **M19-CAP-ENCOUNTER-e9c3bc8f73331231**: Creates individualized schedules for laboratory follow-up based on physician-defined monitoring plans.
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-fe0c074aabb61001"></a>
- **M19-CAP-ENCOUNTER-fe0c074aabb61001**: Blood Tests
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-19671279172f520c"></a>
- **M19-CAP-ENCOUNTER-19671279172f520c**: Hormone Panels
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-2b71ef93c9ceeb6a"></a>
- **M19-CAP-ENCOUNTER-2b71ef93c9ceeb6a**: Metabolic Monitoring
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-9715060e5758e52c"></a>
- **M19-CAP-ENCOUNTER-9715060e5758e52c**: Organ Function Tests
  Applies to original IDs: 277.

<a id="M19-CAP-ENCOUNTER-87efcd49c7188dd1"></a>
- **M19-CAP-ENCOUNTER-87efcd49c7188dd1**: # Exercise Prescription
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-104061cf41e3802a"></a>
- **M19-CAP-ENCOUNTER-104061cf41e3802a**: Allows healthcare professionals to create personalized exercise plans.
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-97af011e2625dc81"></a>
- **M19-CAP-ENCOUNTER-97af011e2625dc81**: Activity Type
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-267d300e14857db1"></a>
- **M19-CAP-ENCOUNTER-267d300e14857db1**: Frequency
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-10d8c964b53514ca"></a>
- **M19-CAP-ENCOUNTER-10d8c964b53514ca**: Duration
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-2c78d640da25cc22"></a>
- **M19-CAP-ENCOUNTER-2c78d640da25cc22**: Intensity
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-503f266b802427c1"></a>
- **M19-CAP-ENCOUNTER-503f266b802427c1**: Restrictions
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-3dd6289128a2f672"></a>
- **M19-CAP-ENCOUNTER-3dd6289128a2f672**: Integrated with patient follow-up.
  Applies to original IDs: 302.

<a id="M19-CAP-ENCOUNTER-061e5fbd2323727f"></a>
- **M19-CAP-ENCOUNTER-061e5fbd2323727f**: # Cosmetic Dentistry
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-8df4a7c1ad845aef"></a>
- **M19-CAP-ENCOUNTER-8df4a7c1ad845aef**: Stores cosmetic dental procedures.
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-69d36a6a3ebfb900"></a>
- **M19-CAP-ENCOUNTER-69d36a6a3ebfb900**: Whitening
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-b474a36c32025ff3"></a>
- **M19-CAP-ENCOUNTER-b474a36c32025ff3**: Veneers
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-8f9efc4eb3efe6f3"></a>
- **M19-CAP-ENCOUNTER-8f9efc4eb3efe6f3**: Smile Design
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-19c9365972d66fb7"></a>
- **M19-CAP-ENCOUNTER-19c9365972d66fb7**: Bonding
  Applies to original IDs: 457.

<a id="M19-CAP-ENCOUNTER-9f5cc9325945872f"></a>
- **M19-CAP-ENCOUNTER-9f5cc9325945872f**: # Cosmetic Dermatology
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-9df78a065da9f843"></a>
- **M19-CAP-ENCOUNTER-9df78a065da9f843**: Stores cosmetic dermatological procedures.
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-0f0b22ecdc69d25f"></a>
- **M19-CAP-ENCOUNTER-0f0b22ecdc69d25f**: Laser Procedures
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-aed566235e6f32ea"></a>
- **M19-CAP-ENCOUNTER-aed566235e6f32ea**: Peelings
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-9317a93dbee7db7b"></a>
- **M19-CAP-ENCOUNTER-9317a93dbee7db7b**: Fillers
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-135a667b9a9387c0"></a>
- **M19-CAP-ENCOUNTER-135a667b9a9387c0**: Botulinum Therapy
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-9acd120100b391c1"></a>
- **M19-CAP-ENCOUNTER-9acd120100b391c1**: Skin Rejuvenation
  Applies to original IDs: 476.

<a id="M19-CAP-ENCOUNTER-ee52ace131f01666"></a>
- **M19-CAP-ENCOUNTER-ee52ace131f01666**: # Holter Monitoring
  Applies to original IDs: 507.

<a id="M19-CAP-ENCOUNTER-a0f997d7e389a786"></a>
- **M19-CAP-ENCOUNTER-a0f997d7e389a786**: Stores Holter monitoring examinations.
  Applies to original IDs: 507.

<a id="M19-CAP-ENCOUNTER-dbe6278d49f7c144"></a>
- **M19-CAP-ENCOUNTER-dbe6278d49f7c144**: 24-hour Monitoring
  Applies to original IDs: 507.

<a id="M19-CAP-ENCOUNTER-c42e5c68dde4911e"></a>
- **M19-CAP-ENCOUNTER-c42e5c68dde4911e**: 48-hour Monitoring
  Applies to original IDs: 507.

<a id="M19-CAP-ENCOUNTER-49b5b894200c48dc"></a>
- **M19-CAP-ENCOUNTER-49b5b894200c48dc**: # Labor Admission Center
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-a90da626f217691c"></a>
- **M19-CAP-ENCOUNTER-a90da626f217691c**: Supports admission of pregnant patients for childbirth.
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-01bbec9df504a305"></a>
- **M19-CAP-ENCOUNTER-01bbec9df504a305**: Includes
  Applies to original IDs: 741, 754.

<a id="M19-CAP-ENCOUNTER-0e84caf186c1067b"></a>
- **M19-CAP-ENCOUNTER-0e84caf186c1067b**: Admission Time
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-86c3f3c3ae9c9701"></a>
- **M19-CAP-ENCOUNTER-86c3f3c3ae9c9701**: Initial Assessment
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-c18b2d948a763177"></a>
- **M19-CAP-ENCOUNTER-c18b2d948a763177**: Cervical Dilation
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-3aedbe3db0a601af"></a>
- **M19-CAP-ENCOUNTER-3aedbe3db0a601af**: Fetal Status
  Applies to original IDs: 741.

<a id="M19-CAP-ENCOUNTER-bdfc9a6f82d1d37f"></a>
- **M19-CAP-ENCOUNTER-bdfc9a6f82d1d37f**: # Breastfeeding Consultation
  Applies to original IDs: 754.

<a id="M19-CAP-ENCOUNTER-088547211c302fb8"></a>
- **M19-CAP-ENCOUNTER-088547211c302fb8**: Supports online and offline lactation consultations.
  Applies to original IDs: 754.

<a id="M19-CAP-ENCOUNTER-53f2da0911bef7d6"></a>
- **M19-CAP-ENCOUNTER-53f2da0911bef7d6**: Appointment Booking
  Applies to original IDs: 754.

<a id="M19-CAP-ENCOUNTER-e0d275efdd17a0b5"></a>
- **M19-CAP-ENCOUNTER-e0d275efdd17a0b5**: Video Consultation
  Applies to original IDs: 754.

<a id="M19-CAP-ENCOUNTER-06f98cd3a99642c5"></a>
- **M19-CAP-ENCOUNTER-06f98cd3a99642c5**: Educational Materials
  Applies to original IDs: 754.

<a id="M19-CAP-ENCOUNTER-0419eb8677c5d0f2"></a>
- **M19-CAP-ENCOUNTER-0419eb8677c5d0f2**: # Radiotherapy Monitoring
  Applies to original IDs: 811.

<a id="M19-CAP-ENCOUNTER-b72ef8e8789e4763"></a>
- **M19-CAP-ENCOUNTER-b72ef8e8789e4763**: Stores radiation therapy history.
  Applies to original IDs: 811.

<a id="M19-CAP-ENCOUNTER-413127edea239d4a"></a>
- **M19-CAP-ENCOUNTER-413127edea239d4a**: Treatment Area
  Applies to original IDs: 811.

<a id="M19-CAP-ENCOUNTER-364a4c7e3ce06ed8"></a>
- **M19-CAP-ENCOUNTER-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 811.

<a id="M19-CAP-ENCOUNTER-30f4e103387d0a31"></a>
- **M19-CAP-ENCOUNTER-30f4e103387d0a31**: Fractions
  Applies to original IDs: 811.

<a id="M19-CAP-ENCOUNTER-fdf59e8e6841c192"></a>
- **M19-CAP-ENCOUNTER-fdf59e8e6841c192**: # Pediatric Holter Monitoring
  Applies to original IDs: 850.

<a id="M19-CAP-ENCOUNTER-8dadbd53328ee5fa"></a>
- **M19-CAP-ENCOUNTER-8dadbd53328ee5fa**: Stores Holter ECG examinations.
  Applies to original IDs: 850.

<a id="M19-CAP-ENCOUNTER-bc1ec69a3597a652"></a>
- **M19-CAP-ENCOUNTER-bc1ec69a3597a652**: 24-hour ECG
  Applies to original IDs: 850.

<a id="M19-CAP-ENCOUNTER-97382c4afcf15198"></a>
- **M19-CAP-ENCOUNTER-97382c4afcf15198**: Event Detection
  Applies to original IDs: 850.

<a id="M19-CAP-ENCOUNTER-bd7ea5e186273615"></a>
- **M19-CAP-ENCOUNTER-bd7ea5e186273615**: # Hospital Portal
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-fc1b44c1d4878793"></a>
- **M19-CAP-ENCOUNTER-fc1b44c1d4878793**: Functions
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-d0331f4150b02c33"></a>
- **M19-CAP-ENCOUNTER-d0331f4150b02c33**: Patient Admission
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-793a69e175877ed2"></a>
- **M19-CAP-ENCOUNTER-793a69e175877ed2**: QR Identification
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-0bf31875394aa343"></a>
- **M19-CAP-ENCOUNTER-0bf31875394aa343**: Medical Records
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-a10a70546ef9f3c2"></a>
- **M19-CAP-ENCOUNTER-a10a70546ef9f3c2**: Laboratory
  Applies to original IDs: 205.

<a id="M19-CAP-ENCOUNTER-6213ea843fdb44c1"></a>
- **M19-CAP-ENCOUNTER-6213ea843fdb44c1**: Billing
  Applies to original IDs: 205.
