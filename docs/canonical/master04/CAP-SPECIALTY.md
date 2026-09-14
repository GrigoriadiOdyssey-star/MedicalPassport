# CORE-CAP-SPECIALTY — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: SpecialtyProfile, AuthorizedContextView, DiseaseActivityAssessment, CarePlanReference. Dependencies: CAP-SPECIALTY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-CARD-CORE

Original IDs: 3061, 3661, 4061.

3061 retains ICU and lifelong follow-up; 3661 adds hypertension/prevention/electrophysiology; 4061 emphasizes ECG/MRI. One profile retains each scope.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-CARD-CONGENITAL

Original IDs: 844, 3063, 3663, 4063.

Retain specific defect names, single-ventricle physiology, hemodynamics, procedures and explicit adult-congenital transition.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-CARD-RHYTHM

Original IDs: 849, 3065, 3666, 4066.

Retain named channelopathies, AV/conduction disorders, bradyarrhythmia, Holter/event monitoring and electrophysiology.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-CARD-FAILURE

Original IDs: 853, 3066, 3668, 4068.

Symptoms, myocarditis, mechanical support, fluid status, hospitalization, transplant evaluation and function are complementary.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-CARD-HUB

Original IDs: 860, 3080, 3680, 4080.

Workspace and coordination views share data but retain rehabilitation, research, genetics and ICU interfaces.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-RENAL-ORCHESTRATION

Original IDs: 940, 4551, 4575, 4600.

Dashboard, clinical core and orchestration layers differ; no duplicate patient stores or mandatory deployment-per-module inference.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-MENTAL-CORE

Original IDs: 3981, 4826, 5151.

Retain broad clinical domains plus explicit episode/assessment schema and workflows; local MVP wording does not expand EDHT P0.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-MENTAL-HUB

Original IDs: 4000, 4850, 5175.

Retain developmental/substance/family care, restricted summaries, passport and conditional adult transfer; no universal guardian or school access.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-ALLERGY-HUB

Original IDs: 1120, 4401, 4450.

Retain allergy dashboard, immune integration, vaccine clearance, anaphylaxis, immunotherapy and transition across shared owners.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-IMMUNE-PROFILE

Original IDs: 4444, 5002.

5002 extends baseline/recovery and multisystem phenotype; retain explicit vaccine-response and test-type detail from 4444.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### PED2-IMMUNE-SCREENING

Original IDs: 4435, 5007.

Combined-immunity scope and neonatal SCID screening require linked but distinct screening, confirmation, escalation and definitive-treatment states.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-PULM-CORE

Original IDs: 920, 3181, 3200, 3361, 3380, 4451, 4500.

Respiratory orchestration retains congenital/airway/rare disease, sleep, home ventilation and emergency/passport interfaces. A common workspace delegates clinical facts and orders to their owners.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-PULM-ASTHMA

Original IDs: 904, 3183, 3363, 4455, 4456, 4457, 4458, 4459, 4460.

Asthma profiles distinguish diagnosis, control, exacerbation, trigger inference, allergic context and signed action plan. Preserve biologics, age-appropriate framework and school disclosure.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-PULM-CF

Original IDs: 908, 3184, 3364, 4471, 4474, 4475, 4476.

CF shares a longitudinal profile while retaining CFTR-modulator eligibility, pancreatic/nutrition/endocrine/fertility context and exacerbation recovery. Molecular interpretation and medication orders remain separate.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-GASTRO-CORE

Original IDs: 960, 3161, 3180, 3281, 3300, 3441, 3460, 4501, 4550.

Digestive orchestration preserves hepatology, pancreatic/motility/feeding/intestinal-failure care and nutrition with shared source owners and separate signed plans.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-GASTRO-IBD

Original IDs: 953, 3163, 3283, 3444, 4516, 4517, 4518, 4519, 4520.

Retain IBD-unclassified/indeterminate terminology history, Crohn location/behavior, UC extent, monogenic immune context, growth and instrument-specific activity; no automatic scores or targeted treatment.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-GASTRO-FUNCTIONAL

Original IDs: 3165, 3285, 3445, 4510, 4511, 4513.

Retain named functional disorders and legacy Rome IV reference, evolving framework version, motility testing, continence and patient-reported burden.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-GASTRO-NUTRITION

Original IDs: 948, 3168, 3288, 3448, 4539, 4540, 4541, 4542, 4543, 4544, 4545.

Nutrition profiles retain feeding skills, micronutrients, formula/route and fluid/calorie units, PN composition/access, remaining bowel anatomy and adaptation. Orders and pump/compounding actions remain external authorized workflows.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-CORE

Original IDs: 4701, 4725, 5026, 5050.

Systemic disease orchestration retains all organ interfaces, specialty independence, evolving phenotype and adult handover; local MVP wording does not change global adult P0.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-JIA

Original IDs: 4702, 5028.

Retain subtype, active/limited joint counts, intra-articular procedure history, uveitis and growth, plans and guardian diaries.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-JOINT

Original IDs: 4703, 5029.

One examination/map profile preserves laterality, effusion, tendon involvement, injection/surgery history, gait and observed versus rendered findings.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-LUPUS

Original IDs: 4704, 5031, 4705, 5032.

Systemic and renal lupus assessments are coordinated profiles; retain urinary/blood-pressure/biopsy/complement evidence, organ damage and renal relapse with separate clinical authority.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-MYOSITIS

Original IDs: 4708, 5033.

Preserve electrophysiology, muscle biopsy, swallowing/respiratory involvement, calcinosis and multidisciplinary rehabilitation.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-SCLERODERMA

Original IDs: 4709, 5034.

Localized and systemic scope retains vascular/skin distribution, contracture, organ surveillance and change timeline without collapsing disease classifications.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-VASCULITIS

Original IDs: 4706, 5035.

Preserve vessel distribution/size, ocular and other organ contexts, biopsy, damage and recurrence.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-EVOLUTION

Original IDs: 4710, 5039.

Maintain diagnostic classification history and uncertain/evolving overlap phenotype; normalization never forces a diagnosis.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M04-RHEUM-FUNCTION

Original IDs: 4719, 5043.

Keep patient/guardian attribution, school and social participation, sleep/fatigue and treatment burden even when inflammatory markers are normal.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-SPECIALTY-0df41b8337827a07"></a>
- **M04-CAP-SPECIALTY-0df41b8337827a07**: Stores congenital cardiac diagnoses.
  Origin: original 844

<a id="M04-CAP-SPECIALTY-9288196d19421058"></a>
- **M04-CAP-SPECIALTY-9288196d19421058**: ASD
  Origin: original 844, original 3063

<a id="M04-CAP-SPECIALTY-d782499950a6c959"></a>
- **M04-CAP-SPECIALTY-d782499950a6c959**: VSD
  Origin: original 844, original 3063

<a id="M04-CAP-SPECIALTY-2e60918f4f331cad"></a>
- **M04-CAP-SPECIALTY-2e60918f4f331cad**: Tetralogy of Fallot
  Origin: original 844, original 3063, original 3663

<a id="M04-CAP-SPECIALTY-a6d012319dde3af7"></a>
- **M04-CAP-SPECIALTY-a6d012319dde3af7**: Coarctation
  Origin: original 844

<a id="M04-CAP-SPECIALTY-acad891e825542fc"></a>
- **M04-CAP-SPECIALTY-acad891e825542fc**: Other Congenital Defects
  Origin: original 844

<a id="M04-CAP-SPECIALTY-064d0d61dd6a021c"></a>
- **M04-CAP-SPECIALTY-064d0d61dd6a021c**: Stores pediatric rhythm disorders.
  Origin: original 849

<a id="M04-CAP-SPECIALTY-d1845465b3088f29"></a>
- **M04-CAP-SPECIALTY-d1845465b3088f29**: Supraventricular Tachycardia
  Origin: original 849, original 3065, original 3666, original 4066

<a id="M04-CAP-SPECIALTY-b983e835f5aaaf91"></a>
- **M04-CAP-SPECIALTY-b983e835f5aaaf91**: Bradycardia
  Origin: original 849

<a id="M04-CAP-SPECIALTY-efdbea488599090c"></a>
- **M04-CAP-SPECIALTY-efdbea488599090c**: AV Block
  Origin: original 849

<a id="M04-CAP-SPECIALTY-0d86946e629cc025"></a>
- **M04-CAP-SPECIALTY-0d86946e629cc025**: Follow-up
  Origin: original 849, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-9f61870dc4d8214d"></a>
- **M04-CAP-SPECIALTY-9f61870dc4d8214d**: Supports monitoring of pediatric heart failure.
  Origin: original 853

<a id="M04-CAP-SPECIALTY-8ea50d2707dd1600"></a>
- **M04-CAP-SPECIALTY-8ea50d2707dd1600**: Symptoms
  Origin: original 853, original 953, original 4068, original 4455, original 4457, original 4474, original 4510, original 4513, original 4516, original 4517, original 4518, original 4520, original 4701, original 4826, original 5026

<a id="M04-CAP-SPECIALTY-7180e4fffcb65860"></a>
- **M04-CAP-SPECIALTY-7180e4fffcb65860**: Echocardiography
  Origin: original 853, original 860, original 3661, original 3680, original 4061, original 4080

<a id="M04-CAP-SPECIALTY-3cfa39200ce0ea10"></a>
- **M04-CAP-SPECIALTY-3cfa39200ce0ea10**: Medication
  Origin: original 853, original 953, original 4455, original 4471, original 4511, original 4513, original 4516, original 4518, original 4520, original 4551, original 4701, original 4702, original 4704, original 4708, original 4709, original 4826, original 5026, original 5028, original 5031, original 5032, original 5033, original 5034, original 5035, original 5039, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-bc4672e86cb0b71e"></a>
- **M04-CAP-SPECIALTY-bc4672e86cb0b71e**: Hospitalizations
  Origin: original 853, original 4518, original 4826

<a id="M04-CAP-SPECIALTY-0fbc2c810c379d65"></a>
- **M04-CAP-SPECIALTY-0fbc2c810c379d65**: Provides a complete overview of pediatric cardiovascular health.
  Origin: original 860

<a id="M04-CAP-SPECIALTY-f3d993f49bc6debb"></a>
- **M04-CAP-SPECIALTY-f3d993f49bc6debb**: Displays
  Origin: original 860, original 920, original 940, original 960, original 1120

<a id="M04-CAP-SPECIALTY-182520ba3d242100"></a>
- **M04-CAP-SPECIALTY-182520ba3d242100**: Diagnoses
  Origin: original 860, original 920, original 940, original 960

<a id="M04-CAP-SPECIALTY-0db3379ed4d9ccfa"></a>
- **M04-CAP-SPECIALTY-0db3379ed4d9ccfa**: ECG
  Origin: original 860, original 4061, original 4080

<a id="M04-CAP-SPECIALTY-b769af85ada69188"></a>
- **M04-CAP-SPECIALTY-b769af85ada69188**: Medications
  Origin: original 860, original 908, original 920, original 940, original 960

<a id="M04-CAP-SPECIALTY-c5c6c99d870419ad"></a>
- **M04-CAP-SPECIALTY-c5c6c99d870419ad**: Surgeries
  Origin: original 860

<a id="M04-CAP-SPECIALTY-e22fe857a3a17db9"></a>
- **M04-CAP-SPECIALTY-e22fe857a3a17db9**: AI Recommendations
  Origin: original 860, original 920, original 940, original 960, original 1120

<a id="M04-CAP-SPECIALTY-2cdc78ef3580aa97"></a>
- **M04-CAP-SPECIALTY-2cdc78ef3580aa97**: Acts as the primary pediatric cardiology workspace within the Medical Passport ecosystem.
  Origin: original 860

<a id="M04-CAP-SPECIALTY-8a719ee7cfa254a8"></a>
- **M04-CAP-SPECIALTY-8a719ee7cfa254a8**: Stores pediatric asthma diagnoses.
  Origin: original 904

<a id="M04-CAP-SPECIALTY-0dbeacb9f9ac3f6a"></a>
- **M04-CAP-SPECIALTY-0dbeacb9f9ac3f6a**: Severity
  Origin: original 904, original 4457

<a id="M04-CAP-SPECIALTY-80597c152b979f51"></a>
- **M04-CAP-SPECIALTY-80597c152b979f51**: Triggers
  Origin: original 904, original 4455

<a id="M04-CAP-SPECIALTY-3d2ca03dcd57e33b"></a>
- **M04-CAP-SPECIALTY-3d2ca03dcd57e33b**: Exacerbations
  Origin: original 904, original 3363, original 4455, original 4456, original 4471

<a id="M04-CAP-SPECIALTY-e71d000ad9acb98e"></a>
- **M04-CAP-SPECIALTY-e71d000ad9acb98e**: Treatment Plan
  Origin: original 904, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-ea00ace421a86170"></a>
- **M04-CAP-SPECIALTY-ea00ace421a86170**: Tracks cystic fibrosis management.
  Origin: original 908

<a id="M04-CAP-SPECIALTY-df6b69beaab6f6f4"></a>
- **M04-CAP-SPECIALTY-df6b69beaab6f6f4**: Lung Function
  Origin: original 908, original 4455, original 4456, original 4474

<a id="M04-CAP-SPECIALTY-aaaf0a34a8eb8286"></a>
- **M04-CAP-SPECIALTY-aaaf0a34a8eb8286**: Genetics
  Origin: original 908, original 3080, original 3180, original 3200, original 3300, original 3380, original 3661, original 3680, original 4061, original 4080, original 4401, original 4435, original 4444, original 4451, original 4501, original 4519, original 4550, original 4551, original 4575, original 4701, original 5026

<a id="M04-CAP-SPECIALTY-5768adaf9507e83f"></a>
- **M04-CAP-SPECIALTY-5768adaf9507e83f**: Nutrition
  Origin: original 908, original 960, original 3161, original 3180, original 3281, original 3300, original 3364, original 3441, original 3444, original 3460, original 4471, original 4475, original 4501, original 4542, original 4551, original 4575

<a id="M04-CAP-SPECIALTY-8dd635ddb5308697"></a>
- **M04-CAP-SPECIALTY-8dd635ddb5308697**: Provides a complete overview of pediatric respiratory health.
  Origin: original 920

<a id="M04-CAP-SPECIALTY-cc4765f416969a81"></a>
- **M04-CAP-SPECIALTY-cc4765f416969a81**: Spirometry
  Origin: original 920

<a id="M04-CAP-SPECIALTY-9215378fd413c675"></a>
- **M04-CAP-SPECIALTY-9215378fd413c675**: Oxygen Saturation
  Origin: original 920

<a id="M04-CAP-SPECIALTY-a3241cf77d991407"></a>
- **M04-CAP-SPECIALTY-a3241cf77d991407**: Imaging
  Origin: original 920, original 960, original 3380, original 3460, original 4063, original 4451, original 4501, original 4516, original 4517, original 4520, original 4551, original 4701, original 4702, original 4703, original 4706, original 4709, original 5026, original 5028, original 5034, original 5035

<a id="M04-CAP-SPECIALTY-13a7f250d648e8d2"></a>
- **M04-CAP-SPECIALTY-13a7f250d648e8d2**: Acts as the primary pediatric pulmonology workspace within the Medical Passport ecosystem.
  Origin: original 920

<a id="M04-CAP-SPECIALTY-c703d4c0357a4938"></a>
- **M04-CAP-SPECIALTY-c703d4c0357a4938**: Provides a complete overview of pediatric kidney health.
  Origin: original 940

<a id="M04-CAP-SPECIALTY-71f790fdf94f9c10"></a>
- **M04-CAP-SPECIALTY-71f790fdf94f9c10**: Laboratory Results
  Origin: original 940, original 953, original 960, original 1120

<a id="M04-CAP-SPECIALTY-8e2ad3ebd029c2b5"></a>
- **M04-CAP-SPECIALTY-8e2ad3ebd029c2b5**: Dialysis
  Origin: original 940, original 4551, original 4575, original 4600

<a id="M04-CAP-SPECIALTY-c25e5083a540778a"></a>
- **M04-CAP-SPECIALTY-c25e5083a540778a**: Transplantation
  Origin: original 940, original 4435

<a id="M04-CAP-SPECIALTY-93b0cf94db3d2bb5"></a>
- **M04-CAP-SPECIALTY-93b0cf94db3d2bb5**: Acts as the primary pediatric nephrology workspace within the Medical Passport ecosystem.
  Origin: original 940

<a id="M04-CAP-SPECIALTY-1eca9268ac461aec"></a>
- **M04-CAP-SPECIALTY-1eca9268ac461aec**: Supports children with nutritional disorders.
  Origin: original 948

<a id="M04-CAP-SPECIALTY-d1a90c7defdfa02d"></a>
- **M04-CAP-SPECIALTY-d1a90c7defdfa02d**: Malabsorption
  Origin: original 948, original 3281, original 4501

<a id="M04-CAP-SPECIALTY-739e32f615aa20db"></a>
- **M04-CAP-SPECIALTY-739e32f615aa20db**: Enteral Nutrition
  Origin: original 948, original 3168, original 3288, original 3448, original 4545

<a id="M04-CAP-SPECIALTY-9ac0748afd93e1ab"></a>
- **M04-CAP-SPECIALTY-9ac0748afd93e1ab**: Growth
  Origin: original 948, original 4510, original 4516, original 4517, original 4520, original 4539, original 4543, original 4544, original 4545, original 4551, original 4702, original 5028

<a id="M04-CAP-SPECIALTY-13772ce307044873"></a>
- **M04-CAP-SPECIALTY-13772ce307044873**: Vitamin Deficiencies
  Origin: original 948

<a id="M04-CAP-SPECIALTY-e62b5d44c006da6d"></a>
- **M04-CAP-SPECIALTY-e62b5d44c006da6d**: Supports monitoring of inflammatory bowel disease.
  Origin: original 953

<a id="M04-CAP-SPECIALTY-ceb38991b36a5742"></a>
- **M04-CAP-SPECIALTY-ceb38991b36a5742**: Endoscopy
  Origin: original 953, original 960, original 3300, original 3460, original 4501, original 4516, original 4517, original 4518, original 4519, original 4520, original 4550

<a id="M04-CAP-SPECIALTY-b0d0f91164df9f87"></a>
- **M04-CAP-SPECIALTY-b0d0f91164df9f87**: Provides a complete overview of pediatric digestive health.
  Origin: original 960

<a id="M04-CAP-SPECIALTY-a28094b2f0802875"></a>
- **M04-CAP-SPECIALTY-a28094b2f0802875**: Acts as the primary pediatric gastroenterology workspace within the Medical Passport ecosystem.
  Origin: original 960

<a id="M04-CAP-SPECIALTY-4924a8e1260d4256"></a>
- **M04-CAP-SPECIALTY-4924a8e1260d4256**: Provides a complete overview of pediatric allergy care.
  Origin: original 1120

<a id="M04-CAP-SPECIALTY-5ece9f76c54dd0a2"></a>
- **M04-CAP-SPECIALTY-5ece9f76c54dd0a2**: Allergies
  Origin: original 1120

<a id="M04-CAP-SPECIALTY-42ecf80f75b68da4"></a>
- **M04-CAP-SPECIALTY-42ecf80f75b68da4**: Immunotherapy
  Origin: original 1120, original 4401, original 4459

<a id="M04-CAP-SPECIALTY-782014d45c8e7c5e"></a>
- **M04-CAP-SPECIALTY-782014d45c8e7c5e**: Emergency History
  Origin: original 1120

<a id="M04-CAP-SPECIALTY-9046273cad000110"></a>
- **M04-CAP-SPECIALTY-9046273cad000110**: Acts as the central pediatric allergy workspace.
  Origin: original 1120

<a id="M04-CAP-SPECIALTY-d707d9c5996125d8"></a>
- **M04-CAP-SPECIALTY-d707d9c5996125d8**: Central platform for pediatric cardiology.
  Origin: original 3061, original 3661, original 4061

<a id="M04-CAP-SPECIALTY-23e1e2dffbd44243"></a>
- **M04-CAP-SPECIALTY-23e1e2dffbd44243**: Congenital Heart Disease
  Origin: original 3061, original 4061, original 4080

<a id="M04-CAP-SPECIALTY-af2f2b830606750c"></a>
- **M04-CAP-SPECIALTY-af2f2b830606750c**: Acquired Cardiac Disease
  Origin: original 3061

<a id="M04-CAP-SPECIALTY-8037109e292850d2"></a>
- **M04-CAP-SPECIALTY-8037109e292850d2**: Pediatric Arrhythmias
  Origin: original 3061

<a id="M04-CAP-SPECIALTY-28dfb970788905d9"></a>
- **M04-CAP-SPECIALTY-28dfb970788905d9**: Cardiac Intensive Care
  Origin: original 3061

<a id="M04-CAP-SPECIALTY-3a8957fec8ae1b5c"></a>
- **M04-CAP-SPECIALTY-3a8957fec8ae1b5c**: Lifelong Cardiac Follow-up
  Origin: original 3061

<a id="M04-CAP-SPECIALTY-615c53b148b63c36"></a>
- **M04-CAP-SPECIALTY-615c53b148b63c36**: Integrates Cardiac Surgery, Genetics, Radiology, Intensive Care, AI and Digital Twin.
  Origin: original 3061

<a id="M04-CAP-SPECIALTY-68854c208eec309b"></a>
- **M04-CAP-SPECIALTY-68854c208eec309b**: Supports congenital cardiac disorders.
  Origin: original 3063, original 3663

<a id="M04-CAP-SPECIALTY-3bea6a23b2d94c1c"></a>
- **M04-CAP-SPECIALTY-3bea6a23b2d94c1c**: PDA
  Origin: original 3063

<a id="M04-CAP-SPECIALTY-d15b435c5b0185c9"></a>
- **M04-CAP-SPECIALTY-d15b435c5b0185c9**: Transposition of Great Arteries
  Origin: original 3063, original 3663

<a id="M04-CAP-SPECIALTY-4cc0466d0851eed6"></a>
- **M04-CAP-SPECIALTY-4cc0466d0851eed6**: Complex Congenital Heart Disease
  Origin: original 3063

<a id="M04-CAP-SPECIALTY-582855cac67c9d57"></a>
- **M04-CAP-SPECIALTY-582855cac67c9d57**: Supports rhythm disorders in children.
  Origin: original 3065

<a id="M04-CAP-SPECIALTY-c7810455e5b679d8"></a>
- **M04-CAP-SPECIALTY-c7810455e5b679d8**: Ventricular Arrhythmias
  Origin: original 3065, original 3666, original 4066

<a id="M04-CAP-SPECIALTY-6b15ee1a567e01d5"></a>
- **M04-CAP-SPECIALTY-6b15ee1a567e01d5**: Congenital Channelopathies
  Origin: original 3065

<a id="M04-CAP-SPECIALTY-41ff5965a46c90e9"></a>
- **M04-CAP-SPECIALTY-41ff5965a46c90e9**: Holter Monitoring
  Origin: original 3065, original 4066

<a id="M04-CAP-SPECIALTY-9a1f4721d2fbaad3"></a>
- **M04-CAP-SPECIALTY-9a1f4721d2fbaad3**: Electrophysiology
  Origin: original 3065, original 3661, original 3680

<a id="M04-CAP-SPECIALTY-465feb1d42fc8706"></a>
- **M04-CAP-SPECIALTY-465feb1d42fc8706**: Supports pediatric heart failure management.
  Origin: original 3066, original 3668, original 4068

<a id="M04-CAP-SPECIALTY-1ded39aa11057196"></a>
- **M04-CAP-SPECIALTY-1ded39aa11057196**: Dilated Cardiomyopathy
  Origin: original 3066

<a id="M04-CAP-SPECIALTY-f89daf1cea9a131f"></a>
- **M04-CAP-SPECIALTY-f89daf1cea9a131f**: Myocarditis
  Origin: original 3066

<a id="M04-CAP-SPECIALTY-f385d51d6f20351c"></a>
- **M04-CAP-SPECIALTY-f385d51d6f20351c**: Congenital Heart Failure
  Origin: original 3066

<a id="M04-CAP-SPECIALTY-13f23989e375082a"></a>
- **M04-CAP-SPECIALTY-13f23989e375082a**: Mechanical Support
  Origin: original 3066

<a id="M04-CAP-SPECIALTY-bd9980ccf6bd0a41"></a>
- **M04-CAP-SPECIALTY-bd9980ccf6bd0a41**: Long-term Monitoring
  Origin: original 3066, original 3165

<a id="M04-CAP-SPECIALTY-91eb41da5cdb999b"></a>
- **M04-CAP-SPECIALTY-91eb41da5cdb999b**: Coordinates the complete pediatric cardiology ecosystem.
  Origin: original 3080, original 3680, original 4080

<a id="M04-CAP-SPECIALTY-b1f8181affffc03b"></a>
- **M04-CAP-SPECIALTY-b1f8181affffc03b**: AI
  Origin: original 3080, original 3180, original 3200, original 3300, original 3380, original 3460

<a id="M04-CAP-SPECIALTY-fba14cee8ea55390"></a>
- **M04-CAP-SPECIALTY-fba14cee8ea55390**: Digital Twin
  Origin: original 3080, original 3180, original 3200, original 3300, original 3380, original 3460, original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4401, original 4450, original 4451, original 4500, original 4501, original 4550, original 4551, original 4575, original 4600, original 4725, original 4850

<a id="M04-CAP-SPECIALTY-ac6adaa5b404ffd2"></a>
- **M04-CAP-SPECIALTY-ac6adaa5b404ffd2**: Cardiac Surgery
  Origin: original 3080, original 3680, original 4080

<a id="M04-CAP-SPECIALTY-4a1db7b3fa8112be"></a>
- **M04-CAP-SPECIALTY-4a1db7b3fa8112be**: Intensive Care
  Origin: original 3080, original 3200, original 4551, original 4575

<a id="M04-CAP-SPECIALTY-c062dc13ee048cfd"></a>
- **M04-CAP-SPECIALTY-c062dc13ee048cfd**: Radiology
  Origin: original 3080, original 3180, original 3200, original 4551, original 4575, original 5029, original 5035

<a id="M04-CAP-SPECIALTY-338cd6a1ad180ca5"></a>
- **M04-CAP-SPECIALTY-338cd6a1ad180ca5**: Telemedicine
  Origin: original 3080, original 3180, original 3200, original 3300, original 3380, original 3460, original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4450, original 4451, original 4500, original 4575, original 4600, original 4725

<a id="M04-CAP-SPECIALTY-ef5990ea3c77ca73"></a>
- **M04-CAP-SPECIALTY-ef5990ea3c77ca73**: Laboratory Services
  Origin: original 3080, original 3180, original 3200

<a id="M04-CAP-SPECIALTY-be2e91874e7fd4c1"></a>
- **M04-CAP-SPECIALTY-be2e91874e7fd4c1**: Provides intelligent lifelong pediatric cardiovascular care across the EDHT ecosystem.
  Origin: original 3080

<a id="M04-CAP-SPECIALTY-8a72f93cb36188ac"></a>
- **M04-CAP-SPECIALTY-8a72f93cb36188ac**: Central platform for pediatric gastroenterology.
  Origin: original 3161, original 3281

<a id="M04-CAP-SPECIALTY-033a73d78618892c"></a>
- **M04-CAP-SPECIALTY-033a73d78618892c**: Gastrointestinal Diseases
  Origin: original 3161, original 3281, original 3441

<a id="M04-CAP-SPECIALTY-bba500b0c75f9d84"></a>
- **M04-CAP-SPECIALTY-bba500b0c75f9d84**: Hepatology
  Origin: original 3161, original 3180, original 3281, original 3300, original 3460, original 4550

<a id="M04-CAP-SPECIALTY-718c5f8fab10d30d"></a>
- **M04-CAP-SPECIALTY-718c5f8fab10d30d**: Pancreatic Disorders
  Origin: original 3161, original 3281, original 3441

<a id="M04-CAP-SPECIALTY-18631a0fcf8ae805"></a>
- **M04-CAP-SPECIALTY-18631a0fcf8ae805**: Intestinal Disorders
  Origin: original 3161

<a id="M04-CAP-SPECIALTY-0df933d745f899cf"></a>
- **M04-CAP-SPECIALTY-0df933d745f899cf**: Long-term Gastrointestinal Monitoring
  Origin: original 3161

<a id="M04-CAP-SPECIALTY-b46de678e1dcd467"></a>
- **M04-CAP-SPECIALTY-b46de678e1dcd467**: Integrates Nutrition, Surgery, Genetics, Laboratory Medicine, AI and Digital Twin.
  Origin: original 3161

<a id="M04-CAP-SPECIALTY-2662fdc28edc9859"></a>
- **M04-CAP-SPECIALTY-2662fdc28edc9859**: Supports inflammatory bowel disease.
  Origin: original 3163

<a id="M04-CAP-SPECIALTY-1c09f5fc099861bf"></a>
- **M04-CAP-SPECIALTY-1c09f5fc099861bf**: Crohn Disease
  Origin: original 3163, original 3283, original 3444, original 4516

<a id="M04-CAP-SPECIALTY-a8932cac844fd207"></a>
- **M04-CAP-SPECIALTY-a8932cac844fd207**: Ulcerative Colitis
  Origin: original 3163, original 3283, original 3444, original 4516

<a id="M04-CAP-SPECIALTY-0f70f98b64064c11"></a>
- **M04-CAP-SPECIALTY-0f70f98b64064c11**: Indeterminate Colitis
  Origin: original 3163, original 3283

<a id="M04-CAP-SPECIALTY-3ba92a774d0545d8"></a>
- **M04-CAP-SPECIALTY-3ba92a774d0545d8**: Biological Therapy
  Origin: original 3163, original 5026, original 5028, original 5031, original 5050

<a id="M04-CAP-SPECIALTY-d9192a602ca7e43b"></a>
- **M04-CAP-SPECIALTY-d9192a602ca7e43b**: Disease Activity Monitoring
  Origin: original 3163

<a id="M04-CAP-SPECIALTY-568a35e46ba1c461"></a>
- **M04-CAP-SPECIALTY-568a35e46ba1c461**: Supports functional gastrointestinal disorders.
  Origin: original 3165, original 3285

<a id="M04-CAP-SPECIALTY-43974f7a4aa41bc6"></a>
- **M04-CAP-SPECIALTY-43974f7a4aa41bc6**: Functional Constipation
  Origin: original 3165, original 3285, original 3445

<a id="M04-CAP-SPECIALTY-11ebe4a28b7bb306"></a>
- **M04-CAP-SPECIALTY-11ebe4a28b7bb306**: Irritable Bowel Syndrome
  Origin: original 3165

<a id="M04-CAP-SPECIALTY-d33c599ae0f4c1d6"></a>
- **M04-CAP-SPECIALTY-d33c599ae0f4c1d6**: Functional Abdominal Pain
  Origin: original 3165, original 3285, original 3445

<a id="M04-CAP-SPECIALTY-8f1e03af222d3364"></a>
- **M04-CAP-SPECIALTY-8f1e03af222d3364**: Functional Dyspepsia
  Origin: original 3165, original 3285, original 3445

<a id="M04-CAP-SPECIALTY-52210a4e7637d1c9"></a>
- **M04-CAP-SPECIALTY-52210a4e7637d1c9**: Supports nutritional medicine.
  Origin: original 3168

<a id="M04-CAP-SPECIALTY-51c87bd0f0e01c66"></a>
- **M04-CAP-SPECIALTY-51c87bd0f0e01c66**: Malnutrition
  Origin: original 3168, original 3288, original 3448

<a id="M04-CAP-SPECIALTY-742d70c809573f92"></a>
- **M04-CAP-SPECIALTY-742d70c809573f92**: Parenteral Nutrition
  Origin: original 3168, original 3288, original 3448, original 4545

<a id="M04-CAP-SPECIALTY-ec8eda6872ff2348"></a>
- **M04-CAP-SPECIALTY-ec8eda6872ff2348**: Obesity
  Origin: original 3168, original 3288, original 3448

<a id="M04-CAP-SPECIALTY-09bffd16808a8eea"></a>
- **M04-CAP-SPECIALTY-09bffd16808a8eea**: Micronutrient Monitoring
  Origin: original 3168

<a id="M04-CAP-SPECIALTY-8954a9113edcce0f"></a>
- **M04-CAP-SPECIALTY-8954a9113edcce0f**: Growth Assessment
  Origin: original 3168

<a id="M04-CAP-SPECIALTY-8936f9f4a2aa2679"></a>
- **M04-CAP-SPECIALTY-8936f9f4a2aa2679**: Coordinates the complete pediatric gastroenterology ecosystem.
  Origin: original 3180, original 3300, original 3460

<a id="M04-CAP-SPECIALTY-63577150dda5e948"></a>
- **M04-CAP-SPECIALTY-63577150dda5e948**: Provides intelligent lifelong digestive health management across the EDHT ecosystem.
  Origin: original 3180

<a id="M04-CAP-SPECIALTY-3174765510882ed2"></a>
- **M04-CAP-SPECIALTY-3174765510882ed2**: Central platform for pediatric pulmonology.
  Origin: original 3181, original 3361

<a id="M04-CAP-SPECIALTY-3abb6984e52f1f58"></a>
- **M04-CAP-SPECIALTY-3abb6984e52f1f58**: Congenital Lung Diseases
  Origin: original 3181

<a id="M04-CAP-SPECIALTY-dbad6983f50063f7"></a>
- **M04-CAP-SPECIALTY-dbad6983f50063f7**: Airway Disorders
  Origin: original 3181, original 4451, original 4500

<a id="M04-CAP-SPECIALTY-c50b309580bb8e30"></a>
- **M04-CAP-SPECIALTY-c50b309580bb8e30**: Asthma
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M04-CAP-SPECIALTY-aafad16364904aca"></a>
- **M04-CAP-SPECIALTY-aafad16364904aca**: Cystic Fibrosis
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M04-CAP-SPECIALTY-3c6a72da9f80b890"></a>
- **M04-CAP-SPECIALTY-3c6a72da9f80b890**: Chronic Respiratory Diseases
  Origin: original 3181

<a id="M04-CAP-SPECIALTY-1ee452ae74b7deea"></a>
- **M04-CAP-SPECIALTY-1ee452ae74b7deea**: Respiratory Failure
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M04-CAP-SPECIALTY-a479042b934de637"></a>
- **M04-CAP-SPECIALTY-a479042b934de637**: Integrates Intensive Care, Allergy, Genetics, Radiology, AI and Digital Twin. :contentReference[oaicite:0]{index=0}
  Origin: original 3181

<a id="M04-CAP-SPECIALTY-3d52b05717a3c4a4"></a>
- **M04-CAP-SPECIALTY-3d52b05717a3c4a4**: Supports childhood asthma management.
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-13370fa591d5fb93"></a>
- **M04-CAP-SPECIALTY-13370fa591d5fb93**: Severity Classification
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-5e66e60b90847a0c"></a>
- **M04-CAP-SPECIALTY-5e66e60b90847a0c**: Trigger Identification
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-c615dcdda4ff208a"></a>
- **M04-CAP-SPECIALTY-c615dcdda4ff208a**: Inhalation Therapy
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-0a84a6b4111ad61e"></a>
- **M04-CAP-SPECIALTY-0a84a6b4111ad61e**: Exacerbation Prevention
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-a216fbf6c12326ba"></a>
- **M04-CAP-SPECIALTY-a216fbf6c12326ba**: Personalized Asthma Plans
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-1d681bd832996557"></a>
- **M04-CAP-SPECIALTY-1d681bd832996557**: AI Risk Prediction
  Origin: original 3183

<a id="M04-CAP-SPECIALTY-9bc9957dc1ec787f"></a>
- **M04-CAP-SPECIALTY-9bc9957dc1ec787f**: Supports lifelong cystic fibrosis management.
  Origin: original 3184

<a id="M04-CAP-SPECIALTY-11d7bc32a3d0beb3"></a>
- **M04-CAP-SPECIALTY-11d7bc32a3d0beb3**: CFTR Genotype
  Origin: original 3184

<a id="M04-CAP-SPECIALTY-28cd4c8ebb038965"></a>
- **M04-CAP-SPECIALTY-28cd4c8ebb038965**: Pulmonary Function
  Origin: original 3184, original 4471, original 4500

<a id="M04-CAP-SPECIALTY-f2d18546045624ba"></a>
- **M04-CAP-SPECIALTY-f2d18546045624ba**: Infection Monitoring
  Origin: original 3184

<a id="M04-CAP-SPECIALTY-b9db3e4a5f5b934d"></a>
- **M04-CAP-SPECIALTY-b9db3e4a5f5b934d**: Nutritional Therapy
  Origin: original 3184

<a id="M04-CAP-SPECIALTY-92ac6d2510201cf6"></a>
- **M04-CAP-SPECIALTY-92ac6d2510201cf6**: CFTR Modulators
  Origin: original 3184

<a id="M04-CAP-SPECIALTY-96c457a9cf29c342"></a>
- **M04-CAP-SPECIALTY-96c457a9cf29c342**: Long-term Outcomes
  Origin: original 3184, original 4826, original 5026

<a id="M04-CAP-SPECIALTY-cf144854d7c5c9a2"></a>
- **M04-CAP-SPECIALTY-cf144854d7c5c9a2**: Coordinates the complete pediatric pulmonology ecosystem.
  Origin: original 3200, original 3380

<a id="M04-CAP-SPECIALTY-2356a36c34e89685"></a>
- **M04-CAP-SPECIALTY-2356a36c34e89685**: Allergy
  Origin: original 3200, original 3380, original 4455

<a id="M04-CAP-SPECIALTY-4264c82362ebdaaf"></a>
- **M04-CAP-SPECIALTY-4264c82362ebdaaf**: Provides intelligent lifelong respiratory care across the EDHT ecosystem. :contentReference[oaicite:1]{index=1}
  Origin: original 3200

<a id="M04-CAP-SPECIALTY-7fd3aec392aa0a1e"></a>
- **M04-CAP-SPECIALTY-7fd3aec392aa0a1e**: Inflammatory Bowel Disease
  Origin: original 3281, original 3441, original 4501, original 4550

<a id="M04-CAP-SPECIALTY-26fb825518721225"></a>
- **M04-CAP-SPECIALTY-26fb825518721225**: Integrates Nutrition, Surgery, Endoscopy, Radiology, Genetics, AI and Digital Twin.
  Origin: original 3281

<a id="M04-CAP-SPECIALTY-e4369defe59ea48f"></a>
- **M04-CAP-SPECIALTY-e4369defe59ea48f**: Supports pediatric inflammatory bowel disease.
  Origin: original 3283, original 4516

<a id="M04-CAP-SPECIALTY-a882541a1d7bf498"></a>
- **M04-CAP-SPECIALTY-a882541a1d7bf498**: Disease Activity Scores
  Origin: original 3283

<a id="M04-CAP-SPECIALTY-ab85ba4ef3ae1bdb"></a>
- **M04-CAP-SPECIALTY-ab85ba4ef3ae1bdb**: Biologic Therapy
  Origin: original 3283, original 3363, original 3444, original 4702, original 4704, original 4725

<a id="M04-CAP-SPECIALTY-8bf61b2b633fc7e7"></a>
- **M04-CAP-SPECIALTY-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 3283

<a id="M04-CAP-SPECIALTY-cd19bf593b2dccb6"></a>
- **M04-CAP-SPECIALTY-cd19bf593b2dccb6**: IBS
  Origin: original 3285, original 3445

<a id="M04-CAP-SPECIALTY-f4e21cfa976bb32b"></a>
- **M04-CAP-SPECIALTY-f4e21cfa976bb32b**: Rome IV Criteria
  Origin: original 3285

<a id="M04-CAP-SPECIALTY-f9d511d966879d68"></a>
- **M04-CAP-SPECIALTY-f9d511d966879d68**: Supports nutritional assessment.
  Origin: original 3288

<a id="M04-CAP-SPECIALTY-8da32c170f347286"></a>
- **M04-CAP-SPECIALTY-8da32c170f347286**: Growth Curves
  Origin: original 3288

<a id="M04-CAP-SPECIALTY-35ff4287a628c0a4"></a>
- **M04-CAP-SPECIALTY-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 3300, original 3380, original 3460, original 4401, original 4551, original 4575, original 4708, original 5032

<a id="M04-CAP-SPECIALTY-8e7c0c06ce1145c7"></a>
- **M04-CAP-SPECIALTY-8e7c0c06ce1145c7**: Provides intelligent gastrointestinal care across the EDHT ecosystem.
  Origin: original 3300

<a id="M04-CAP-SPECIALTY-16fd79811dffe7c0"></a>
- **M04-CAP-SPECIALTY-16fd79811dffe7c0**: Chronic Lung Diseases
  Origin: original 3361

<a id="M04-CAP-SPECIALTY-23f838da7e002c66"></a>
- **M04-CAP-SPECIALTY-23f838da7e002c66**: Congenital Pulmonary Disorders
  Origin: original 3361

<a id="M04-CAP-SPECIALTY-0017ffd603b45d2e"></a>
- **M04-CAP-SPECIALTY-0017ffd603b45d2e**: Sleep Breathing Disorders
  Origin: original 3361

<a id="M04-CAP-SPECIALTY-2859df256f010a2b"></a>
- **M04-CAP-SPECIALTY-2859df256f010a2b**: Integrates Allergy, Immunology, Intensive Care, Radiology, AI and Digital Twin.
  Origin: original 3361

<a id="M04-CAP-SPECIALTY-648d85454961258f"></a>
- **M04-CAP-SPECIALTY-648d85454961258f**: Supports pediatric asthma.
  Origin: original 3363

<a id="M04-CAP-SPECIALTY-727f69ee55535562"></a>
- **M04-CAP-SPECIALTY-727f69ee55535562**: Mild Asthma
  Origin: original 3363

<a id="M04-CAP-SPECIALTY-c427c04e3a624cb8"></a>
- **M04-CAP-SPECIALTY-c427c04e3a624cb8**: Moderate Asthma
  Origin: original 3363

<a id="M04-CAP-SPECIALTY-8d75db85cdf45a91"></a>
- **M04-CAP-SPECIALTY-8d75db85cdf45a91**: Severe Asthma
  Origin: original 3363

<a id="M04-CAP-SPECIALTY-233e422ad976542d"></a>
- **M04-CAP-SPECIALTY-233e422ad976542d**: Asthma Action Plans
  Origin: original 3363

<a id="M04-CAP-SPECIALTY-a85a769ee10ea87e"></a>
- **M04-CAP-SPECIALTY-a85a769ee10ea87e**: Supports cystic fibrosis.
  Origin: original 3364

<a id="M04-CAP-SPECIALTY-38682d9ca9256dfc"></a>
- **M04-CAP-SPECIALTY-38682d9ca9256dfc**: Pulmonary Monitoring
  Origin: original 3364

<a id="M04-CAP-SPECIALTY-5a0f97617547c83b"></a>
- **M04-CAP-SPECIALTY-5a0f97617547c83b**: Pancreatic Function
  Origin: original 3364, original 4471

<a id="M04-CAP-SPECIALTY-c26f0d1ebfe697c5"></a>
- **M04-CAP-SPECIALTY-c26f0d1ebfe697c5**: Respiratory Physiotherapy
  Origin: original 3364

<a id="M04-CAP-SPECIALTY-3abc8f2d76aa9813"></a>
- **M04-CAP-SPECIALTY-3abc8f2d76aa9813**: CFTR Modulator Therapy
  Origin: original 3364

<a id="M04-CAP-SPECIALTY-24bbfdf0496e0c3e"></a>
- **M04-CAP-SPECIALTY-24bbfdf0496e0c3e**: Respiratory Medicine
  Origin: original 3380

<a id="M04-CAP-SPECIALTY-6dba99a3d5f05615"></a>
- **M04-CAP-SPECIALTY-6dba99a3d5f05615**: Provides intelligent respiratory care across the EDHT ecosystem.
  Origin: original 3380

<a id="M04-CAP-SPECIALTY-3cd79d96488ff898"></a>
- **M04-CAP-SPECIALTY-3cd79d96488ff898**: Central platform for pediatric gastroenterology, hepatology and nutrition.
  Origin: original 3441

<a id="M04-CAP-SPECIALTY-4eece0be96bfc301"></a>
- **M04-CAP-SPECIALTY-4eece0be96bfc301**: Liver Diseases
  Origin: original 3441

<a id="M04-CAP-SPECIALTY-d63635efadd74711"></a>
- **M04-CAP-SPECIALTY-d63635efadd74711**: Functional GI Disorders
  Origin: original 3441, original 4501

<a id="M04-CAP-SPECIALTY-ae67f3de5aeb0873"></a>
- **M04-CAP-SPECIALTY-ae67f3de5aeb0873**: Integrates Surgery, Nutrition, Endoscopy, Genetics, AI and Digital Twin.
  Origin: original 3441

<a id="M04-CAP-SPECIALTY-b64c7eb2046452d9"></a>
- **M04-CAP-SPECIALTY-b64c7eb2046452d9**: Supports pediatric IBD.
  Origin: original 3444

<a id="M04-CAP-SPECIALTY-9c7649be6be8e67a"></a>
- **M04-CAP-SPECIALTY-9c7649be6be8e67a**: Disease Activity
  Origin: original 3444, original 4701, original 4702, original 4704, original 4706, original 4708, original 4710, original 5026, original 5028, original 5031, original 5033, original 5035, original 5050

<a id="M04-CAP-SPECIALTY-dfe84012d78f21a2"></a>
- **M04-CAP-SPECIALTY-dfe84012d78f21a2**: Supports functional GI disorders.
  Origin: original 3445

<a id="M04-CAP-SPECIALTY-6934bbc490dad30a"></a>
- **M04-CAP-SPECIALTY-6934bbc490dad30a**: Supports pediatric nutrition.
  Origin: original 3448

<a id="M04-CAP-SPECIALTY-081ffcd36483dee8"></a>
- **M04-CAP-SPECIALTY-081ffcd36483dee8**: Micronutrient Deficiency
  Origin: original 3448

<a id="M04-CAP-SPECIALTY-d07b733785cb9629"></a>
- **M04-CAP-SPECIALTY-d07b733785cb9629**: Provides intelligent pediatric digestive care across the EDHT ecosystem.
  Origin: original 3460

<a id="M04-CAP-SPECIALTY-c260c6798ea2e834"></a>
- **M04-CAP-SPECIALTY-c260c6798ea2e834**: Congenital Heart Diseases
  Origin: original 3661

<a id="M04-CAP-SPECIALTY-ae85cc7e3dbc27ac"></a>
- **M04-CAP-SPECIALTY-ae85cc7e3dbc27ac**: Arrhythmias
  Origin: original 3661, original 4061

<a id="M04-CAP-SPECIALTY-3310cfeddf96c2e5"></a>
- **M04-CAP-SPECIALTY-3310cfeddf96c2e5**: Cardiomyopathies
  Origin: original 3661, original 4061

<a id="M04-CAP-SPECIALTY-ce1cdc8853669530"></a>
- **M04-CAP-SPECIALTY-ce1cdc8853669530**: Heart Failure
  Origin: original 3661, original 4061

<a id="M04-CAP-SPECIALTY-8431a21b28f01da6"></a>
- **M04-CAP-SPECIALTY-8431a21b28f01da6**: Pediatric Hypertension
  Origin: original 3661, original 4551

<a id="M04-CAP-SPECIALTY-694f113b1088e7a4"></a>
- **M04-CAP-SPECIALTY-694f113b1088e7a4**: Cardiac Imaging
  Origin: original 3661, original 3680

<a id="M04-CAP-SPECIALTY-4a9a1f0c90aee4b6"></a>
- **M04-CAP-SPECIALTY-4a9a1f0c90aee4b6**: Preventive Cardiology
  Origin: original 3661, original 4061

<a id="M04-CAP-SPECIALTY-bc33416493a6176d"></a>
- **M04-CAP-SPECIALTY-bc33416493a6176d**: Artificial Intelligence
  Origin: original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4401, original 4450, original 4451, original 4500, original 4501, original 4550, original 4575, original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-c0563b9377b05194"></a>
- **M04-CAP-SPECIALTY-c0563b9377b05194**: Cardiac MRI
  Origin: original 3661, original 4061, original 4080

<a id="M04-CAP-SPECIALTY-621000fd8cb9adb3"></a>
- **M04-CAP-SPECIALTY-621000fd8cb9adb3**: Septal Defects
  Origin: original 3663

<a id="M04-CAP-SPECIALTY-6bed77ec34298a23"></a>
- **M04-CAP-SPECIALTY-6bed77ec34298a23**: Single Ventricle Physiology
  Origin: original 3663

<a id="M04-CAP-SPECIALTY-0bcbbd71ed6f0453"></a>
- **M04-CAP-SPECIALTY-0bcbbd71ed6f0453**: Surgical Follow-up
  Origin: original 3663

<a id="M04-CAP-SPECIALTY-b6f1820a1f6547e0"></a>
- **M04-CAP-SPECIALTY-b6f1820a1f6547e0**: Supports pediatric rhythm disorders.
  Origin: original 3666, original 4066

<a id="M04-CAP-SPECIALTY-a99f2007023cb1c5"></a>
- **M04-CAP-SPECIALTY-a99f2007023cb1c5**: Long QT Syndrome
  Origin: original 3666

<a id="M04-CAP-SPECIALTY-d4aa4bdf9e1bb18d"></a>
- **M04-CAP-SPECIALTY-d4aa4bdf9e1bb18d**: Brugada Syndrome
  Origin: original 3666

<a id="M04-CAP-SPECIALTY-9ca3486374606146"></a>
- **M04-CAP-SPECIALTY-9ca3486374606146**: Electrophysiology Evaluation
  Origin: original 3666

<a id="M04-CAP-SPECIALTY-fbfafa4e2202d20e"></a>
- **M04-CAP-SPECIALTY-fbfafa4e2202d20e**: Functional Classification
  Origin: original 3668

<a id="M04-CAP-SPECIALTY-4a07cba5c109105e"></a>
- **M04-CAP-SPECIALTY-4a07cba5c109105e**: Medication Management
  Origin: original 3668

<a id="M04-CAP-SPECIALTY-e95ba5b4b6b3b666"></a>
- **M04-CAP-SPECIALTY-e95ba5b4b6b3b666**: Fluid Monitoring
  Origin: original 3668

<a id="M04-CAP-SPECIALTY-119859676c59304d"></a>
- **M04-CAP-SPECIALTY-119859676c59304d**: Cardiac Function Tracking
  Origin: original 3668

<a id="M04-CAP-SPECIALTY-42ee227dc700fecd"></a>
- **M04-CAP-SPECIALTY-42ee227dc700fecd**: Transplant Evaluation
  Origin: original 3668, original 5007

<a id="M04-CAP-SPECIALTY-7ee77cb8507d016d"></a>
- **M04-CAP-SPECIALTY-7ee77cb8507d016d**: Clinical Research
  Origin: original 3680, original 4000, original 4080

<a id="M04-CAP-SPECIALTY-4e0127ec9358c83b"></a>
- **M04-CAP-SPECIALTY-4e0127ec9358c83b**: Provides intelligent pediatric cardiology across the EDHT ecosystem.
  Origin: original 3680

<a id="M04-CAP-SPECIALTY-8ead82a187357e3b"></a>
- **M04-CAP-SPECIALTY-8ead82a187357e3b**: Central platform for child and adolescent mental health.
  Origin: original 3981

<a id="M04-CAP-SPECIALTY-0c6d241f21f65a43"></a>
- **M04-CAP-SPECIALTY-0c6d241f21f65a43**: Child Psychiatry
  Origin: original 3981, original 4000, original 5151

<a id="M04-CAP-SPECIALTY-6e20d9c250caeeaf"></a>
- **M04-CAP-SPECIALTY-6e20d9c250caeeaf**: Adolescent Psychiatry
  Origin: original 3981, original 5151

<a id="M04-CAP-SPECIALTY-4e4eddb3ff9d9912"></a>
- **M04-CAP-SPECIALTY-4e4eddb3ff9d9912**: Developmental Mental Health
  Origin: original 3981

<a id="M04-CAP-SPECIALTY-490e35cf8d921dfa"></a>
- **M04-CAP-SPECIALTY-490e35cf8d921dfa**: Behavioral Medicine
  Origin: original 3981

<a id="M04-CAP-SPECIALTY-3d5f4f546cb05c0b"></a>
- **M04-CAP-SPECIALTY-3d5f4f546cb05c0b**: Psychotherapy
  Origin: original 3981, original 4826, original 4850, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-5df9f6bab326e906"></a>
- **M04-CAP-SPECIALTY-5df9f6bab326e906**: Psychopharmacology
  Origin: original 3981, original 4000, original 4850, original 5175

<a id="M04-CAP-SPECIALTY-b36f2ac93cd3a90a"></a>
- **M04-CAP-SPECIALTY-b36f2ac93cd3a90a**: Crisis Care
  Origin: original 3981, original 4000, original 4826, original 4850, original 5175

<a id="M04-CAP-SPECIALTY-4631398063618fa6"></a>
- **M04-CAP-SPECIALTY-4631398063618fa6**: Family Mental Health
  Origin: original 3981

<a id="M04-CAP-SPECIALTY-a345e32468d00bdd"></a>
- **M04-CAP-SPECIALTY-a345e32468d00bdd**: Psychology
  Origin: original 3981, original 4000, original 4719, original 4826, original 4850, original 5043

<a id="M04-CAP-SPECIALTY-e9eb7b780843070a"></a>
- **M04-CAP-SPECIALTY-e9eb7b780843070a**: Pediatrics
  Origin: original 3981, original 4000, original 4701, original 4826, original 5026, original 5028, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-1776431d6d17f344"></a>
- **M04-CAP-SPECIALTY-1776431d6d17f344**: Neurology
  Origin: original 3981, original 4000, original 4701, original 4704, original 4706, original 4708, original 4826, original 5026, original 5031, original 5033, original 5035, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-753b7a0fca5646d7"></a>
- **M04-CAP-SPECIALTY-753b7a0fca5646d7**: Social Care
  Origin: original 3981, original 4826

<a id="M04-CAP-SPECIALTY-2c02c3f4564964ce"></a>
- **M04-CAP-SPECIALTY-2c02c3f4564964ce**: Coordinates the complete pediatric mental health ecosystem.
  Origin: original 4000

<a id="M04-CAP-SPECIALTY-2354ee9d430cbe5d"></a>
- **M04-CAP-SPECIALTY-2354ee9d430cbe5d**: Developmental Medicine
  Origin: original 4000, original 4826

<a id="M04-CAP-SPECIALTY-f3356e4b78ab2299"></a>
- **M04-CAP-SPECIALTY-f3356e4b78ab2299**: Substance Use Care
  Origin: original 4000

<a id="M04-CAP-SPECIALTY-c3d6442ee87a534e"></a>
- **M04-CAP-SPECIALTY-c3d6442ee87a534e**: Family Support
  Origin: original 4000

<a id="M04-CAP-SPECIALTY-6184fe372c186d88"></a>
- **M04-CAP-SPECIALTY-6184fe372c186d88**: School Collaboration
  Origin: original 4000

<a id="M04-CAP-SPECIALTY-03b35947cdeeccae"></a>
- **M04-CAP-SPECIALTY-03b35947cdeeccae**: Provides longitudinal, family-centered and multidisciplinary pediatric mental health intelligence across the EDHT ecosystem.
  Origin: original 4000

<a id="M04-CAP-SPECIALTY-30eec395a1d9ef13"></a>
- **M04-CAP-SPECIALTY-30eec395a1d9ef13**: Hypertension
  Origin: original 4061, original 4600

<a id="M04-CAP-SPECIALTY-9f62941002d5dae6"></a>
- **M04-CAP-SPECIALTY-9f62941002d5dae6**: Acquired Heart Disease
  Origin: original 4061

<a id="M04-CAP-SPECIALTY-355829262f04ba62"></a>
- **M04-CAP-SPECIALTY-355829262f04ba62**: Supports congenital heart disease management.
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-2bfe553aa51bbc2d"></a>
- **M04-CAP-SPECIALTY-2bfe553aa51bbc2d**: Anatomical Classification
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-2c0c26b70b85d20a"></a>
- **M04-CAP-SPECIALTY-2c0c26b70b85d20a**: Hemodynamic Assessment
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-78167df60625f73c"></a>
- **M04-CAP-SPECIALTY-78167df60625f73c**: Surgical History
  Origin: original 4063, original 4513, original 4545

<a id="M04-CAP-SPECIALTY-9fdc32e42fbc4bff"></a>
- **M04-CAP-SPECIALTY-9fdc32e42fbc4bff**: Interventional Procedures
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-b7c9c18abf209101"></a>
- **M04-CAP-SPECIALTY-b7c9c18abf209101**: Longitudinal Follow-up
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-b29b660e58a1715b"></a>
- **M04-CAP-SPECIALTY-b29b660e58a1715b**: Transition to Adult Congenital Cardiology
  Origin: original 4063

<a id="M04-CAP-SPECIALTY-8285da265981774e"></a>
- **M04-CAP-SPECIALTY-8285da265981774e**: Bradyarrhythmias
  Origin: original 4066

<a id="M04-CAP-SPECIALTY-8c545c557fb24de0"></a>
- **M04-CAP-SPECIALTY-8c545c557fb24de0**: Conduction Disorders
  Origin: original 4066

<a id="M04-CAP-SPECIALTY-3b943eea7947c392"></a>
- **M04-CAP-SPECIALTY-3b943eea7947c392**: Event Monitoring
  Origin: original 4066

<a id="M04-CAP-SPECIALTY-17c8db398fde19ca"></a>
- **M04-CAP-SPECIALTY-17c8db398fde19ca**: Treatment Tracking
  Origin: original 4066

<a id="M04-CAP-SPECIALTY-ad7848b8f593a316"></a>
- **M04-CAP-SPECIALTY-ad7848b8f593a316**: Ventricular Function
  Origin: original 4068

<a id="M04-CAP-SPECIALTY-a549916693516568"></a>
- **M04-CAP-SPECIALTY-a549916693516568**: Biomarkers
  Origin: original 4068

<a id="M04-CAP-SPECIALTY-d2cfe5f6515e7557"></a>
- **M04-CAP-SPECIALTY-d2cfe5f6515e7557**: Fluid Status
  Origin: original 4068

<a id="M04-CAP-SPECIALTY-6b5154af20cc3812"></a>
- **M04-CAP-SPECIALTY-6b5154af20cc3812**: Medication Monitoring
  Origin: original 4068, original 5151

<a id="M04-CAP-SPECIALTY-4842464733442efa"></a>
- **M04-CAP-SPECIALTY-4842464733442efa**: Hospitalization Tracking
  Origin: original 4068

<a id="M04-CAP-SPECIALTY-2a1f2899cb133383"></a>
- **M04-CAP-SPECIALTY-2a1f2899cb133383**: Longitudinal Functional Assessment
  Origin: original 4068

<a id="M04-CAP-SPECIALTY-263368bafa9cbdb9"></a>
- **M04-CAP-SPECIALTY-263368bafa9cbdb9**: Arrhythmia Management
  Origin: original 4080

<a id="M04-CAP-SPECIALTY-77b91eaf23050323"></a>
- **M04-CAP-SPECIALTY-77b91eaf23050323**: Interventional Cardiology
  Origin: original 4080

<a id="M04-CAP-SPECIALTY-e9426dd272d9aa70"></a>
- **M04-CAP-SPECIALTY-e9426dd272d9aa70**: Rehabilitation
  Origin: original 4080, original 4701, original 4703, original 4708, original 4709, original 4719, original 4725, original 4826, original 5026, original 5028, original 5029, original 5033, original 5034, original 5043, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-72b19a4ef4ad04eb"></a>
- **M04-CAP-SPECIALTY-72b19a4ef4ad04eb**: Remote Monitoring
  Origin: original 4080, original 4600, original 4725, original 5050, original 5151

<a id="M04-CAP-SPECIALTY-e9d270fee6b79129"></a>
- **M04-CAP-SPECIALTY-e9d270fee6b79129**: Provides intelligent longitudinal pediatric cardiovascular care across the EDHT ecosystem.
  Origin: original 4080

<a id="M04-CAP-SPECIALTY-36a1225993915cc0"></a>
- **M04-CAP-SPECIALTY-36a1225993915cc0**: Central platform for pediatric allergy and clinical immunology.
  Origin: original 4401

<a id="M04-CAP-SPECIALTY-6a7a52d4afc2bade"></a>
- **M04-CAP-SPECIALTY-6a7a52d4afc2bade**: Food Allergy
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-edefa5ca15622109"></a>
- **M04-CAP-SPECIALTY-edefa5ca15622109**: Drug Allergy
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-a489018567279612"></a>
- **M04-CAP-SPECIALTY-a489018567279612**: Anaphylaxis
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-2e4e19f07cc95a46"></a>
- **M04-CAP-SPECIALTY-2e4e19f07cc95a46**: Respiratory Allergy
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-24268aa7a7b73ac4"></a>
- **M04-CAP-SPECIALTY-24268aa7a7b73ac4**: Allergic Asthma
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-75805801b45957ab"></a>
- **M04-CAP-SPECIALTY-75805801b45957ab**: Insect Venom Allergy
  Origin: original 4401

<a id="M04-CAP-SPECIALTY-1816cd305007279b"></a>
- **M04-CAP-SPECIALTY-1816cd305007279b**: Primary Immunodeficiency
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-24b45d24c22e388a"></a>
- **M04-CAP-SPECIALTY-24b45d24c22e388a**: Immune Dysregulation
  Origin: original 4401, original 4450

<a id="M04-CAP-SPECIALTY-12a3547080776ffb"></a>
- **M04-CAP-SPECIALTY-12a3547080776ffb**: Vaccination Safety
  Origin: original 4401, original 5050

<a id="M04-CAP-SPECIALTY-b7edcd7f826cfcd9"></a>
- **M04-CAP-SPECIALTY-b7edcd7f826cfcd9**: Pulmonology
  Origin: original 4401, original 4701, original 4704, original 4706, original 4708, original 4709, original 4725, original 5026, original 5031, original 5033, original 5034, original 5035

<a id="M04-CAP-SPECIALTY-c20697528142b090"></a>
- **M04-CAP-SPECIALTY-c20697528142b090**: Dermatology
  Origin: original 4401, original 4701, original 4704, original 4706, original 4708, original 4709, original 4725, original 5026, original 5031, original 5033, original 5034, original 5035

<a id="M04-CAP-SPECIALTY-73398554fcd7dcc3"></a>
- **M04-CAP-SPECIALTY-73398554fcd7dcc3**: Gastroenterology
  Origin: original 4401, original 4475, original 4550, original 4706, original 4709, original 5026, original 5033, original 5034

<a id="M04-CAP-SPECIALTY-f5b38128ad4c99ee"></a>
- **M04-CAP-SPECIALTY-f5b38128ad4c99ee**: Vaccination Intelligence
  Origin: original 4401, original 4450, original 4575

<a id="M04-CAP-SPECIALTY-356180ab736c1180"></a>
- **M04-CAP-SPECIALTY-356180ab736c1180**: Supports severe and other combined immunodeficiency disorders.
  Origin: original 4435

<a id="M04-CAP-SPECIALTY-3bc01ed891744e1f"></a>
- **M04-CAP-SPECIALTY-3bc01ed891744e1f**: Newborn Screening
  Origin: original 4435

<a id="M04-CAP-SPECIALTY-c20c13e4b933f179"></a>
- **M04-CAP-SPECIALTY-c20c13e4b933f179**: Immune Phenotype
  Origin: original 4435, original 5002

<a id="M04-CAP-SPECIALTY-9d60d099367da84d"></a>
- **M04-CAP-SPECIALTY-9d60d099367da84d**: Infection
  Origin: original 4435, original 4544, original 4545

<a id="M04-CAP-SPECIALTY-2e5d2ae50f2e49fd"></a>
- **M04-CAP-SPECIALTY-2e5d2ae50f2e49fd**: Isolation Considerations
  Origin: original 4435

<a id="M04-CAP-SPECIALTY-e604de00aca459e7"></a>
- **M04-CAP-SPECIALTY-e604de00aca459e7**: Prophylaxis
  Origin: original 4435, original 5007

<a id="M04-CAP-SPECIALTY-8c4125d7a97f004a"></a>
- **M04-CAP-SPECIALTY-8c4125d7a97f004a**: Immunoglobulin Therapy
  Origin: original 4435

<a id="M04-CAP-SPECIALTY-0151856d8fef618c"></a>
- **M04-CAP-SPECIALTY-0151856d8fef618c**: Creates a longitudinal representation of immune function.
  Origin: original 4444

<a id="M04-CAP-SPECIALTY-ce7af44904cf967a"></a>
- **M04-CAP-SPECIALTY-ce7af44904cf967a**: Immunoglobulins
  Origin: original 4444

<a id="M04-CAP-SPECIALTY-3d1726df5fd3ec90"></a>
- **M04-CAP-SPECIALTY-3d1726df5fd3ec90**: Cellular Immunity
  Origin: original 4444, original 5002

<a id="M04-CAP-SPECIALTY-77192e1b34283a26"></a>
- **M04-CAP-SPECIALTY-77192e1b34283a26**: Complement
  Origin: original 4444, original 4704, original 4705, original 5002, original 5026, original 5031, original 5032, original 5039

<a id="M04-CAP-SPECIALTY-54ee6c384fe01f97"></a>
- **M04-CAP-SPECIALTY-54ee6c384fe01f97**: Functional Tests
  Origin: original 4444

<a id="M04-CAP-SPECIALTY-5e67a6b65d21fb59"></a>
- **M04-CAP-SPECIALTY-5e67a6b65d21fb59**: Vaccine Responses
  Origin: original 4444

<a id="M04-CAP-SPECIALTY-46cdd9e5fce2291e"></a>
- **M04-CAP-SPECIALTY-46cdd9e5fce2291e**: Infection History
  Origin: original 4444, original 4519

<a id="M04-CAP-SPECIALTY-0207549b28719905"></a>
- **M04-CAP-SPECIALTY-0207549b28719905**: Treatment
  Origin: original 4444, original 4474, original 4510, original 4517, original 4710

<a id="M04-CAP-SPECIALTY-243bc6e2dbad3dea"></a>
- **M04-CAP-SPECIALTY-243bc6e2dbad3dea**: Supports temporal comparison across childhood.
  Origin: original 4444

<a id="M04-CAP-SPECIALTY-9b87dbf0b2bebe36"></a>
- **M04-CAP-SPECIALTY-9b87dbf0b2bebe36**: Coordinates the complete pediatric allergy and clinical immunology ecosystem.
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-7a9103332e04cce2"></a>
- **M04-CAP-SPECIALTY-7a9103332e04cce2**: Vaccine Allergy
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-33bb1d97f7f0ca83"></a>
- **M04-CAP-SPECIALTY-33bb1d97f7f0ca83**: Allergen Immunotherapy
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-8d331209ef9a644c"></a>
- **M04-CAP-SPECIALTY-8d331209ef9a644c**: Immunogenetics
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-86166817b279685c"></a>
- **M04-CAP-SPECIALTY-86166817b279685c**: Infection Prevention
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-d782f0952e410801"></a>
- **M04-CAP-SPECIALTY-d782f0952e410801**: Emergency Medical Passport
  Origin: original 4450, original 4500

<a id="M04-CAP-SPECIALTY-b7f674cdfcad6e1c"></a>
- **M04-CAP-SPECIALTY-b7f674cdfcad6e1c**: Adult-care Transition
  Origin: original 4450, original 4500

<a id="M04-CAP-SPECIALTY-df640205b50c00b5"></a>
- **M04-CAP-SPECIALTY-df640205b50c00b5**: Provides lifelong allergy and immune intelligence across the EDHT ecosystem.
  Origin: original 4450

<a id="M04-CAP-SPECIALTY-b47edd07ca43ac1b"></a>
- **M04-CAP-SPECIALTY-b47edd07ca43ac1b**: Central platform for pediatric respiratory medicine.
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-a6912462dd39eb4e"></a>
- **M04-CAP-SPECIALTY-a6912462dd39eb4e**: Chronic Cough
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-0fcaa738edf7f0c8"></a>
- **M04-CAP-SPECIALTY-0fcaa738edf7f0c8**: Bronchiectasis
  Origin: original 4451, original 4500

<a id="M04-CAP-SPECIALTY-eb82ccf4ae6a30d2"></a>
- **M04-CAP-SPECIALTY-eb82ccf4ae6a30d2**: Congenital Lung Disease
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-2127f85b0d07b90e"></a>
- **M04-CAP-SPECIALTY-2127f85b0d07b90e**: Interstitial Lung Disease
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-89ec24bde85401aa"></a>
- **M04-CAP-SPECIALTY-89ec24bde85401aa**: Sleep-related Breathing Disorders
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-4b98b93f1ef6f783"></a>
- **M04-CAP-SPECIALTY-4b98b93f1ef6f783**: Home Respiratory Therapy
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-15e2c70064c33708"></a>
- **M04-CAP-SPECIALTY-15e2c70064c33708**: Allergy & Immunology
  Origin: original 4451, original 4500, original 4550

<a id="M04-CAP-SPECIALTY-d130447d684396f9"></a>
- **M04-CAP-SPECIALTY-d130447d684396f9**: Microbiology
  Origin: original 4451, original 4471, original 4474, original 4501

<a id="M04-CAP-SPECIALTY-724bc9cf72e3c1e7"></a>
- **M04-CAP-SPECIALTY-724bc9cf72e3c1e7**: Pulmonary Function Testing
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-62df60cba6b22314"></a>
- **M04-CAP-SPECIALTY-62df60cba6b22314**: Wearables
  Origin: original 4451

<a id="M04-CAP-SPECIALTY-4681007a14daea7a"></a>
- **M04-CAP-SPECIALTY-4681007a14daea7a**: Supports comprehensive pediatric asthma care.
  Origin: original 4455

<a id="M04-CAP-SPECIALTY-5f124f9e42776b79"></a>
- **M04-CAP-SPECIALTY-5f124f9e42776b79**: Diagnosis
  Origin: original 4455, original 4471, original 5151

<a id="M04-CAP-SPECIALTY-08588d541c8026a3"></a>
- **M04-CAP-SPECIALTY-08588d541c8026a3**: Adherence
  Origin: original 4455

<a id="M04-CAP-SPECIALTY-b174f3751a8a429e"></a>
- **M04-CAP-SPECIALTY-b174f3751a8a429e**: Emergency Visits
  Origin: original 4455

<a id="M04-CAP-SPECIALTY-1c293d6bff472ffd"></a>
- **M04-CAP-SPECIALTY-1c293d6bff472ffd**: Control Status
  Origin: original 4455

<a id="M04-CAP-SPECIALTY-daa9abf8ca8a1dc9"></a>
- **M04-CAP-SPECIALTY-daa9abf8ca8a1dc9**: Supports longitudinal assessment of asthma control.
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-0535ebb6ad4f5674"></a>
- **M04-CAP-SPECIALTY-0535ebb6ad4f5674**: Analyzes
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-600085d4481fd37d"></a>
- **M04-CAP-SPECIALTY-600085d4481fd37d**: Daytime Symptoms
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-a3ba4b43aae9cbc5"></a>
- **M04-CAP-SPECIALTY-a3ba4b43aae9cbc5**: Night Symptoms
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-f1665310ad9cc22b"></a>
- **M04-CAP-SPECIALTY-f1665310ad9cc22b**: Rescue Medication Use
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-0dd27a521e018b26"></a>
- **M04-CAP-SPECIALTY-0dd27a521e018b26**: Activity Limitation
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-73dc85c50f3881fd"></a>
- **M04-CAP-SPECIALTY-73dc85c50f3881fd**: Treatment Adherence
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-6e1c0a66096b6df8"></a>
- **M04-CAP-SPECIALTY-6e1c0a66096b6df8**: Supports validated age-appropriate assessment frameworks.
  Origin: original 4456

<a id="M04-CAP-SPECIALTY-d9236d5187d663a5"></a>
- **M04-CAP-SPECIALTY-d9236d5187d663a5**: Maintains structured records of asthma exacerbations.
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-f01a0c3644ebaf7a"></a>
- **M04-CAP-SPECIALTY-f01a0c3644ebaf7a**: Records
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-0d09e557a3785c59"></a>
- **M04-CAP-SPECIALTY-0d09e557a3785c59**: Trigger
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-092034fbb21f8a85"></a>
- **M04-CAP-SPECIALTY-092034fbb21f8a85**: Rescue Medication
  Origin: original 4457, original 4460

<a id="M04-CAP-SPECIALTY-e2e9afb39b830ec8"></a>
- **M04-CAP-SPECIALTY-e2e9afb39b830ec8**: Systemic Treatment
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-b07ddd2b3d1f5f41"></a>
- **M04-CAP-SPECIALTY-b07ddd2b3d1f5f41**: Emergency Care
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-f201cbfb32217cee"></a>
- **M04-CAP-SPECIALTY-f201cbfb32217cee**: Hospitalization
  Origin: original 4457, original 4474, original 5151

<a id="M04-CAP-SPECIALTY-f5e42beb9e8342f3"></a>
- **M04-CAP-SPECIALTY-f5e42beb9e8342f3**: Respiratory Support
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-9029a8bbdb8a6553"></a>
- **M04-CAP-SPECIALTY-9029a8bbdb8a6553**: Outcome
  Origin: original 4457

<a id="M04-CAP-SPECIALTY-41790cf2307c9a98"></a>
- **M04-CAP-SPECIALTY-41790cf2307c9a98**: Supports identification of clinically relevant asthma triggers.
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-feef087377a59033"></a>
- **M04-CAP-SPECIALTY-feef087377a59033**: Allergens
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-192feac0fca0d23d"></a>
- **M04-CAP-SPECIALTY-192feac0fca0d23d**: Respiratory Infections
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-b34a015a2392abda"></a>
- **M04-CAP-SPECIALTY-b34a015a2392abda**: Exercise
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-5987ad6f24931917"></a>
- **M04-CAP-SPECIALTY-5987ad6f24931917**: Environmental Exposure
  Origin: original 4458, original 4459

<a id="M04-CAP-SPECIALTY-62fe5b2af035e279"></a>
- **M04-CAP-SPECIALTY-62fe5b2af035e279**: Smoke Exposure
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-b30c3690095df2e7"></a>
- **M04-CAP-SPECIALTY-b30c3690095df2e7**: Weather Context
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-f4af213318cdbbc3"></a>
- **M04-CAP-SPECIALTY-f4af213318cdbbc3**: Medication Adherence
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-3e633399c97c3602"></a>
- **M04-CAP-SPECIALTY-3e633399c97c3602**: Historical Exacerbations
  Origin: original 4458

<a id="M04-CAP-SPECIALTY-e1ceace42de2e85c"></a>
- **M04-CAP-SPECIALTY-e1ceace42de2e85c**: Connects pulmonology with EDHT Allergy & Immunology.
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-39d5469afad4a5f8"></a>
- **M04-CAP-SPECIALTY-39d5469afad4a5f8**: Asthma Phenotype
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-b426962ee5a4a5df"></a>
- **M04-CAP-SPECIALTY-b426962ee5a4a5df**: Aeroallergens
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-b1847bdd88ae0a99"></a>
- **M04-CAP-SPECIALTY-b1847bdd88ae0a99**: Specific IgE
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-1aa4ef46ee0b9942"></a>
- **M04-CAP-SPECIALTY-1aa4ef46ee0b9942**: Skin Testing
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-7d8f60fb627e7a1c"></a>
- **M04-CAP-SPECIALTY-7d8f60fb627e7a1c**: Atopic Dermatitis
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-f20d14442b15ad87"></a>
- **M04-CAP-SPECIALTY-f20d14442b15ad87**: Allergic Rhinitis
  Origin: original 4459

<a id="M04-CAP-SPECIALTY-735e74b777257751"></a>
- **M04-CAP-SPECIALTY-735e74b777257751**: Maintains clinician-approved personalized asthma action plans.
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-5e3117025efba2c8"></a>
- **M04-CAP-SPECIALTY-5e3117025efba2c8**: Baseline Therapy
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-a477a0766bae3d9c"></a>
- **M04-CAP-SPECIALTY-a477a0766bae3d9c**: Symptom Zones
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-3b25306725738ef4"></a>
- **M04-CAP-SPECIALTY-3b25306725738ef4**: Escalation Instructions
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-919cd7db78a97d08"></a>
- **M04-CAP-SPECIALTY-919cd7db78a97d08**: Emergency Indicators
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-af2df5270abfdd6a"></a>
- **M04-CAP-SPECIALTY-af2df5270abfdd6a**: School Plan
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-47fc8bc157464f7a"></a>
- **M04-CAP-SPECIALTY-47fc8bc157464f7a**: Guardian Instructions
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-d21d544e081edce9"></a>
- **M04-CAP-SPECIALTY-d21d544e081edce9**: Multilingual Presentation
  Origin: original 4460

<a id="M04-CAP-SPECIALTY-fe940be623006603"></a>
- **M04-CAP-SPECIALTY-fe940be623006603**: Supports comprehensive pediatric cystic fibrosis care.
  Origin: original 4471

<a id="M04-CAP-SPECIALTY-08a4858c3ed95d04"></a>
- **M04-CAP-SPECIALTY-08a4858c3ed95d04**: CFTR Genetics
  Origin: original 4471

<a id="M04-CAP-SPECIALTY-399bf2f57734063b"></a>
- **M04-CAP-SPECIALTY-399bf2f57734063b**: Sweat Testing
  Origin: original 4471

<a id="M04-CAP-SPECIALTY-73dedf86b2ae9801"></a>
- **M04-CAP-SPECIALTY-73dedf86b2ae9801**: Complications
  Origin: original 4471, original 4517, original 4544

<a id="M04-CAP-SPECIALTY-0b6843f67fd1e350"></a>
- **M04-CAP-SPECIALTY-0b6843f67fd1e350**: Supports pulmonary exacerbation documentation.
  Origin: original 4474

<a id="M04-CAP-SPECIALTY-cdcecae88521194c"></a>
- **M04-CAP-SPECIALTY-cdcecae88521194c**: Weight
  Origin: original 4474, original 4540

<a id="M04-CAP-SPECIALTY-3d8b6397330d43a0"></a>
- **M04-CAP-SPECIALTY-3d8b6397330d43a0**: Antimicrobials
  Origin: original 4474

<a id="M04-CAP-SPECIALTY-2efc2fec2c0c8ee3"></a>
- **M04-CAP-SPECIALTY-2efc2fec2c0c8ee3**: Response
  Origin: original 4474

<a id="M04-CAP-SPECIALTY-2ead501f1441e7f1"></a>
- **M04-CAP-SPECIALTY-2ead501f1441e7f1**: Recovery
  Origin: original 4474

<a id="M04-CAP-SPECIALTY-da312499914beedf"></a>
- **M04-CAP-SPECIALTY-da312499914beedf**: Coordinates non-pulmonary manifestations of cystic fibrosis.
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-1b8a22e65f4f0098"></a>
- **M04-CAP-SPECIALTY-1b8a22e65f4f0098**: Endocrinology
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-c75e5cb786539ee6"></a>
- **M04-CAP-SPECIALTY-c75e5cb786539ee6**: Liver Health
  Origin: original 4475, original 4545

<a id="M04-CAP-SPECIALTY-d6ec75a864cdba47"></a>
- **M04-CAP-SPECIALTY-d6ec75a864cdba47**: Bone Health
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-5d7f6df98214486f"></a>
- **M04-CAP-SPECIALTY-5d7f6df98214486f**: Diabetes
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-dd9c8e44f96ed02e"></a>
- **M04-CAP-SPECIALTY-dd9c8e44f96ed02e**: Fertility-related Care
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-da4d73fcac596196"></a>
- **M04-CAP-SPECIALTY-da4d73fcac596196**: Mental Health
  Origin: original 4475

<a id="M04-CAP-SPECIALTY-52ab46d0cd918ecd"></a>
- **M04-CAP-SPECIALTY-52ab46d0cd918ecd**: Supports specialist-supervised CFTR modulator therapy.
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-96f0387f0ad62921"></a>
- **M04-CAP-SPECIALTY-96f0387f0ad62921**: Molecular Eligibility
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-93f9c381ca40e635"></a>
- **M04-CAP-SPECIALTY-93f9c381ca40e635**: Product
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-364a4c7e3ce06ed8"></a>
- **M04-CAP-SPECIALTY-364a4c7e3ce06ed8**: Dose
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-7cab3b93f2b87ad4"></a>
- **M04-CAP-SPECIALTY-7cab3b93f2b87ad4**: Treatment Start
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-e1c2a513ace73bfc"></a>
- **M04-CAP-SPECIALTY-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4476, original 4544, original 4702, original 5026

<a id="M04-CAP-SPECIALTY-80b35dd320590f5d"></a>
- **M04-CAP-SPECIALTY-80b35dd320590f5d**: Pulmonary Response
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-6fac9624cbbc02dd"></a>
- **M04-CAP-SPECIALTY-6fac9624cbbc02dd**: Nutritional Response
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-f749e8c444dc0a0d"></a>
- **M04-CAP-SPECIALTY-f749e8c444dc0a0d**: Adverse Events
  Origin: original 4476

<a id="M04-CAP-SPECIALTY-14f7671734570816"></a>
- **M04-CAP-SPECIALTY-14f7671734570816**: Coordinates the complete pediatric respiratory ecosystem.
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-26a6bde024622673"></a>
- **M04-CAP-SPECIALTY-26a6bde024622673**: Respiratory Imaging
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-2f91e2b8b2bd5ccf"></a>
- **M04-CAP-SPECIALTY-2f91e2b8b2bd5ccf**: Rare Lung Disease
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-d10100d1d6ffe53f"></a>
- **M04-CAP-SPECIALTY-d10100d1d6ffe53f**: Home Ventilation
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-fef18a6a1ca6fae3"></a>
- **M04-CAP-SPECIALTY-fef18a6a1ca6fae3**: Sleep Medicine
  Origin: original 4500, original 5175

<a id="M04-CAP-SPECIALTY-bd27ded6f2fed6de"></a>
- **M04-CAP-SPECIALTY-bd27ded6f2fed6de**: Smart Respiratory Devices
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-d870e93c6bb660ed"></a>
- **M04-CAP-SPECIALTY-d870e93c6bb660ed**: Provides longitudinal, multidisciplinary and cross-border pediatric respiratory intelligence across EDHT.
  Origin: original 4500

<a id="M04-CAP-SPECIALTY-025a99b7e634c8ad"></a>
- **M04-CAP-SPECIALTY-025a99b7e634c8ad**: Central platform for pediatric gastroenterology, hepatology and digestive medicine.
  Origin: original 4501

<a id="M04-CAP-SPECIALTY-cc5faff3d02a17be"></a>
- **M04-CAP-SPECIALTY-cc5faff3d02a17be**: Gastrointestinal Disorders
  Origin: original 4501

<a id="M04-CAP-SPECIALTY-4554ef05a0c7507d"></a>
- **M04-CAP-SPECIALTY-4554ef05a0c7507d**: Liver Disease
  Origin: original 4501

<a id="M04-CAP-SPECIALTY-3ce64bea97ea9ab5"></a>
- **M04-CAP-SPECIALTY-3ce64bea97ea9ab5**: Pancreatic Disease
  Origin: original 4501

<a id="M04-CAP-SPECIALTY-d8a58b04b3b03a0f"></a>
- **M04-CAP-SPECIALTY-d8a58b04b3b03a0f**: Feeding Disorders
  Origin: original 4501, original 4550

<a id="M04-CAP-SPECIALTY-cbedf7a47e899ca6"></a>
- **M04-CAP-SPECIALTY-cbedf7a47e899ca6**: Intestinal Failure
  Origin: original 4501, original 4550

<a id="M04-CAP-SPECIALTY-27cde7069fe13381"></a>
- **M04-CAP-SPECIALTY-27cde7069fe13381**: Immunology
  Origin: original 4501, original 4575, original 4701, original 4704, original 5026, original 5031

<a id="M04-CAP-SPECIALTY-2d2ffbcbba25564e"></a>
- **M04-CAP-SPECIALTY-2d2ffbcbba25564e**: Pathology
  Origin: original 4501, original 4551, original 4701, original 4706, original 4708, original 5032

<a id="M04-CAP-SPECIALTY-bc506fdefc6e7e7b"></a>
- **M04-CAP-SPECIALTY-bc506fdefc6e7e7b**: Surgery
  Origin: original 4501, original 4516, original 4518

<a id="M04-CAP-SPECIALTY-9e9dbb804ca8197a"></a>
- **M04-CAP-SPECIALTY-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4501, original 4550, original 4551, original 4575, original 4600, original 4725, original 4826, original 5026

<a id="M04-CAP-SPECIALTY-3c3c1689757e4b2f"></a>
- **M04-CAP-SPECIALTY-3c3c1689757e4b2f**: Supports clinician-managed disorders of gut-brain interaction.
  Origin: original 4510

<a id="M04-CAP-SPECIALTY-b579cce691f51546"></a>
- **M04-CAP-SPECIALTY-b579cce691f51546**: Symptom Duration
  Origin: original 4510

<a id="M04-CAP-SPECIALTY-7af1c314d018e2ff"></a>
- **M04-CAP-SPECIALTY-7af1c314d018e2ff**: Stool Patterns
  Origin: original 4510

<a id="M04-CAP-SPECIALTY-8b55d68530fc792d"></a>
- **M04-CAP-SPECIALTY-8b55d68530fc792d**: Diet
  Origin: original 4510, original 4511

<a id="M04-CAP-SPECIALTY-27a86002025785a5"></a>
- **M04-CAP-SPECIALTY-27a86002025785a5**: Psychosocial Context
  Origin: original 4510

<a id="M04-CAP-SPECIALTY-0a6d5ea84e206912"></a>
- **M04-CAP-SPECIALTY-0a6d5ea84e206912**: Diagnostic Evaluation
  Origin: original 4510

<a id="M04-CAP-SPECIALTY-202f6a2a98b9f441"></a>
- **M04-CAP-SPECIALTY-202f6a2a98b9f441**: Longitudinal Outcomes
  Origin: original 4510, original 4575

<a id="M04-CAP-SPECIALTY-f083796839d1d9d6"></a>
- **M04-CAP-SPECIALTY-f083796839d1d9d6**: Supports pediatric constipation and defecation disorders.
  Origin: original 4511

<a id="M04-CAP-SPECIALTY-26df13c14e6e1ff4"></a>
- **M04-CAP-SPECIALTY-26df13c14e6e1ff4**: Stool Frequency
  Origin: original 4511

<a id="M04-CAP-SPECIALTY-f4979c7ad45ed2a3"></a>
- **M04-CAP-SPECIALTY-f4979c7ad45ed2a3**: Stool Characteristics
  Origin: original 4511

<a id="M04-CAP-SPECIALTY-d929dde3cb2892d8"></a>
- **M04-CAP-SPECIALTY-d929dde3cb2892d8**: Pain
  Origin: original 4511, original 4702, original 4703, original 4719, original 5028, original 5029

<a id="M04-CAP-SPECIALTY-6347eb9658d03622"></a>
- **M04-CAP-SPECIALTY-6347eb9658d03622**: Withholding
  Origin: original 4511

<a id="M04-CAP-SPECIALTY-11c8a5851cb456da"></a>
- **M04-CAP-SPECIALTY-11c8a5851cb456da**: Continence
  Origin: original 4511

<a id="M04-CAP-SPECIALTY-e9bb1b7104aa25cd"></a>
- **M04-CAP-SPECIALTY-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4511, original 4702, original 4705, original 4708, original 5032, original 5033, original 5039

<a id="M04-CAP-SPECIALTY-7ccd0b4c79e91fa0"></a>
- **M04-CAP-SPECIALTY-7ccd0b4c79e91fa0**: Supports pediatric gastrointestinal motility disorders.
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-7435247dd14c9334"></a>
- **M04-CAP-SPECIALTY-7435247dd14c9334**: Transit Studies
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-bc16e6a7d1ad3c09"></a>
- **M04-CAP-SPECIALTY-bc16e6a7d1ad3c09**: Manometry
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-1a8020052193298b"></a>
- **M04-CAP-SPECIALTY-1a8020052193298b**: Feeding
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-9936d4ba19db99ca"></a>
- **M04-CAP-SPECIALTY-9936d4ba19db99ca**: Neurological Conditions
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-70848c180456086b"></a>
- **M04-CAP-SPECIALTY-70848c180456086b**: Longitudinal Response
  Origin: original 4513

<a id="M04-CAP-SPECIALTY-218543edba7e5d6c"></a>
- **M04-CAP-SPECIALTY-218543edba7e5d6c**: IBD-Unclassified
  Origin: original 4516

<a id="M04-CAP-SPECIALTY-78d0334ae8346a4e"></a>
- **M04-CAP-SPECIALTY-78d0334ae8346a4e**: Histopathology
  Origin: original 4516, original 4518, original 4519, original 4550, original 4705

<a id="M04-CAP-SPECIALTY-ee597897b90399c1"></a>
- **M04-CAP-SPECIALTY-ee597897b90399c1**: Supports longitudinal Crohn disease management.
  Origin: original 4517

<a id="M04-CAP-SPECIALTY-1c71a4247748b0eb"></a>
- **M04-CAP-SPECIALTY-1c71a4247748b0eb**: Disease Location
  Origin: original 4517

<a id="M04-CAP-SPECIALTY-bd2cac0681a4041f"></a>
- **M04-CAP-SPECIALTY-bd2cac0681a4041f**: Disease Behavior
  Origin: original 4517

<a id="M04-CAP-SPECIALTY-42201b7175e8bbb5"></a>
- **M04-CAP-SPECIALTY-42201b7175e8bbb5**: Laboratory Activity
  Origin: original 4517, original 4518

<a id="M04-CAP-SPECIALTY-5e8c51cc3501e267"></a>
- **M04-CAP-SPECIALTY-5e8c51cc3501e267**: Outcomes
  Origin: original 4517, original 4518, original 5175

<a id="M04-CAP-SPECIALTY-5c51fcb62e281ec6"></a>
- **M04-CAP-SPECIALTY-5c51fcb62e281ec6**: Supports longitudinal ulcerative colitis management.
  Origin: original 4518

<a id="M04-CAP-SPECIALTY-fabb57f856661655"></a>
- **M04-CAP-SPECIALTY-fabb57f856661655**: Disease Extent
  Origin: original 4518

<a id="M04-CAP-SPECIALTY-775976bef870a1be"></a>
- **M04-CAP-SPECIALTY-775976bef870a1be**: Supports very-early-onset inflammatory bowel disease.
  Origin: original 4519

<a id="M04-CAP-SPECIALTY-2d8631a297752301"></a>
- **M04-CAP-SPECIALTY-2d8631a297752301**: Age at Onset
  Origin: original 4519

<a id="M04-CAP-SPECIALTY-046dd0aa3784c331"></a>
- **M04-CAP-SPECIALTY-046dd0aa3784c331**: Phenotype
  Origin: original 4519

<a id="M04-CAP-SPECIALTY-cb6dd7df15786a1c"></a>
- **M04-CAP-SPECIALTY-cb6dd7df15786a1c**: Immune Findings
  Origin: original 4519

<a id="M04-CAP-SPECIALTY-0bea5346ef341f41"></a>
- **M04-CAP-SPECIALTY-0bea5346ef341f41**: Family History
  Origin: original 4519, original 5002

<a id="M04-CAP-SPECIALTY-838cfc5c32e2894e"></a>
- **M04-CAP-SPECIALTY-838cfc5c32e2894e**: Targeted Treatment
  Origin: original 4519

<a id="M04-CAP-SPECIALTY-15731e72fb5f96ee"></a>
- **M04-CAP-SPECIALTY-15731e72fb5f96ee**: Supports longitudinal assessment of IBD activity.
  Origin: original 4520

<a id="M04-CAP-SPECIALTY-79fe9bbc63a73e4d"></a>
- **M04-CAP-SPECIALTY-79fe9bbc63a73e4d**: Laboratory Markers
  Origin: original 4520

<a id="M04-CAP-SPECIALTY-4b01bab1fffc659a"></a>
- **M04-CAP-SPECIALTY-4b01bab1fffc659a**: Stool Biomarkers
  Origin: original 4520

<a id="M04-CAP-SPECIALTY-4d133918213f0f0e"></a>
- **M04-CAP-SPECIALTY-4d133918213f0f0e**: Patient-reported Outcomes
  Origin: original 4520, original 4701, original 4719, original 4826, original 5026, original 5043, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-aac3124611afb123"></a>
- **M04-CAP-SPECIALTY-aac3124611afb123**: Supports validated pediatric disease activity frameworks where appropriate.
  Origin: original 4520

<a id="M04-CAP-SPECIALTY-ba116ccf16f51f45"></a>
- **M04-CAP-SPECIALTY-ba116ccf16f51f45**: Coordinates clinical pediatric nutrition.
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-9c7722f44448c2c4"></a>
- **M04-CAP-SPECIALTY-9c7722f44448c2c4**: Energy Requirements
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-74fd56813a2054f3"></a>
- **M04-CAP-SPECIALTY-74fd56813a2054f3**: Macronutrients
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-e1349ca759be0297"></a>
- **M04-CAP-SPECIALTY-e1349ca759be0297**: Micronutrients
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-bcd3372965813222"></a>
- **M04-CAP-SPECIALTY-bcd3372965813222**: Medical Diets
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-87bf14defd0c45b5"></a>
- **M04-CAP-SPECIALTY-87bf14defd0c45b5**: Feeding Route
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-06e21bd7ac3ff2fe"></a>
- **M04-CAP-SPECIALTY-06e21bd7ac3ff2fe**: Malnutrition Risk
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-3b0f6274260f9489"></a>
- **M04-CAP-SPECIALTY-3b0f6274260f9489**: Disease-specific Nutrition
  Origin: original 4539

<a id="M04-CAP-SPECIALTY-c757ca612324c347"></a>
- **M04-CAP-SPECIALTY-c757ca612324c347**: Supports identification and longitudinal monitoring of nutritional risk.
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-8b4f2a0189219035"></a>
- **M04-CAP-SPECIALTY-8b4f2a0189219035**: Height
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-f27d118816107ae9"></a>
- **M04-CAP-SPECIALTY-f27d118816107ae9**: Growth Velocity
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-03cc8a2b432e82eb"></a>
- **M04-CAP-SPECIALTY-03cc8a2b432e82eb**: BMI
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-042613cc56266ede"></a>
- **M04-CAP-SPECIALTY-042613cc56266ede**: Body Composition where available
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-b7b1556b74c305f1"></a>
- **M04-CAP-SPECIALTY-b7b1556b74c305f1**: Dietary Intake
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-a3abaf5f0a97a296"></a>
- **M04-CAP-SPECIALTY-a3abaf5f0a97a296**: Disease Burden
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-c416dd3f1f7776ec"></a>
- **M04-CAP-SPECIALTY-c416dd3f1f7776ec**: Laboratory Findings
  Origin: original 4540

<a id="M04-CAP-SPECIALTY-be225024589d4d21"></a>
- **M04-CAP-SPECIALTY-be225024589d4d21**: Tracks clinically relevant micronutrient status.
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-b2332b35b3d7fc5b"></a>
- **M04-CAP-SPECIALTY-b2332b35b3d7fc5b**: Iron
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-a828e68f514610a5"></a>
- **M04-CAP-SPECIALTY-a828e68f514610a5**: Vitamin D
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-7fe2cf696faf8b75"></a>
- **M04-CAP-SPECIALTY-7fe2cf696faf8b75**: Vitamin B12
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-654ffbebf2637b95"></a>
- **M04-CAP-SPECIALTY-654ffbebf2637b95**: Folate
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-a8b6e1184f3c1710"></a>
- **M04-CAP-SPECIALTY-a8b6e1184f3c1710**: Fat-soluble Vitamins
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-b41255260d9a56f2"></a>
- **M04-CAP-SPECIALTY-b41255260d9a56f2**: Trace Elements
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-ab3febd198e62322"></a>
- **M04-CAP-SPECIALTY-ab3febd198e62322**: Laboratory Trends
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-0f927af1cb7b014f"></a>
- **M04-CAP-SPECIALTY-0f927af1cb7b014f**: Supplementation
  Origin: original 4541

<a id="M04-CAP-SPECIALTY-1e0c8f5bdfd7a4a7"></a>
- **M04-CAP-SPECIALTY-1e0c8f5bdfd7a4a7**: Supports multidisciplinary pediatric feeding disorders.
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-38ea9ca441c9116b"></a>
- **M04-CAP-SPECIALTY-38ea9ca441c9116b**: Feeding Skills
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-6065131336034a0d"></a>
- **M04-CAP-SPECIALTY-6065131336034a0d**: Oral Intake
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-d1f77cd7287f138f"></a>
- **M04-CAP-SPECIALTY-d1f77cd7287f138f**: Sensory Factors
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-b18f69cd1f01719e"></a>
- **M04-CAP-SPECIALTY-b18f69cd1f01719e**: Swallowing
  Origin: original 4542, original 4708

<a id="M04-CAP-SPECIALTY-65f654572a2b7e9b"></a>
- **M04-CAP-SPECIALTY-65f654572a2b7e9b**: Gastrointestinal Disease
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-294546b06f4eebf7"></a>
- **M04-CAP-SPECIALTY-294546b06f4eebf7**: Development
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-e622bb245fdd41aa"></a>
- **M04-CAP-SPECIALTY-e622bb245fdd41aa**: Behavioral Context
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-9be7ce2253b99d0c"></a>
- **M04-CAP-SPECIALTY-9be7ce2253b99d0c**: Family Impact
  Origin: original 4542

<a id="M04-CAP-SPECIALTY-5bdf59201898f4c3"></a>
- **M04-CAP-SPECIALTY-5bdf59201898f4c3**: Supports clinician-prescribed enteral nutrition.
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-57b970264c415ddd"></a>
- **M04-CAP-SPECIALTY-57b970264c415ddd**: Indication
  Origin: original 4543, original 4544

<a id="M04-CAP-SPECIALTY-1d4b98fcfb14372e"></a>
- **M04-CAP-SPECIALTY-1d4b98fcfb14372e**: Formula
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-6ffbfeb83a373123"></a>
- **M04-CAP-SPECIALTY-6ffbfeb83a373123**: Route
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-0c07f0d195605fe7"></a>
- **M04-CAP-SPECIALTY-0c07f0d195605fe7**: Feeding Schedule
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-68f10bc3a659c374"></a>
- **M04-CAP-SPECIALTY-68f10bc3a659c374**: Calories
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-f8cc53a825212d6a"></a>
- **M04-CAP-SPECIALTY-f8cc53a825212d6a**: Fluid
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-08ae53d88d8bff94"></a>
- **M04-CAP-SPECIALTY-08ae53d88d8bff94**: Tolerance
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-85142e0487beb228"></a>
- **M04-CAP-SPECIALTY-85142e0487beb228**: Tube-related Complications
  Origin: original 4543

<a id="M04-CAP-SPECIALTY-d95de1641df19a8b"></a>
- **M04-CAP-SPECIALTY-d95de1641df19a8b**: Supports specialist-supervised parenteral nutrition.
  Origin: original 4544

<a id="M04-CAP-SPECIALTY-a4fab6e5b3a247f0"></a>
- **M04-CAP-SPECIALTY-a4fab6e5b3a247f0**: Composition
  Origin: original 4544

<a id="M04-CAP-SPECIALTY-9aa26bacf79a057d"></a>
- **M04-CAP-SPECIALTY-9aa26bacf79a057d**: Central Access
  Origin: original 4544, original 4545

<a id="M04-CAP-SPECIALTY-6cdd415dc77e2876"></a>
- **M04-CAP-SPECIALTY-6cdd415dc77e2876**: Infusion Schedule
  Origin: original 4544

<a id="M04-CAP-SPECIALTY-941d836af291d4e2"></a>
- **M04-CAP-SPECIALTY-941d836af291d4e2**: Liver Function
  Origin: original 4544

<a id="M04-CAP-SPECIALTY-c9197913a4f6f387"></a>
- **M04-CAP-SPECIALTY-c9197913a4f6f387**: Supports complex pediatric intestinal failure.
  Origin: original 4545

<a id="M04-CAP-SPECIALTY-f4db6f1aecbd84a4"></a>
- **M04-CAP-SPECIALTY-f4db6f1aecbd84a4**: Remaining Intestinal Anatomy
  Origin: original 4545

<a id="M04-CAP-SPECIALTY-bbd55cda470af3cc"></a>
- **M04-CAP-SPECIALTY-bbd55cda470af3cc**: Intestinal Adaptation
  Origin: original 4545

<a id="M04-CAP-SPECIALTY-62e8f627f7955d0e"></a>
- **M04-CAP-SPECIALTY-62e8f627f7955d0e**: Coordinates the complete pediatric digestive-health ecosystem.
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-82573d9fdad2bc25"></a>
- **M04-CAP-SPECIALTY-82573d9fdad2bc25**: Pancreatology
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-9b75281ad458711c"></a>
- **M04-CAP-SPECIALTY-9b75281ad458711c**: Celiac Disease
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-8060e25a17408069"></a>
- **M04-CAP-SPECIALTY-8060e25a17408069**: Motility
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-30221e0277dce6c5"></a>
- **M04-CAP-SPECIALTY-30221e0277dce6c5**: Clinical Nutrition
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-b22ab146facfd07a"></a>
- **M04-CAP-SPECIALTY-b22ab146facfd07a**: Transition to Adult Care
  Origin: original 4550, original 4575, original 4850

<a id="M04-CAP-SPECIALTY-e506a6f3fb4c5a3e"></a>
- **M04-CAP-SPECIALTY-e506a6f3fb4c5a3e**: Provides longitudinal, multidisciplinary and cross-border pediatric digestive intelligence across EDHT.
  Origin: original 4550

<a id="M04-CAP-SPECIALTY-dad93495e1d868c1"></a>
- **M04-CAP-SPECIALTY-dad93495e1d868c1**: Central clinical architecture for pediatric nephrology and longitudinal kidney health management across the EDHT ecosystem.
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-a7b0c681c08dd19e"></a>
- **M04-CAP-SPECIALTY-a7b0c681c08dd19e**: Pediatric Kidney Health Record
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-6f6cd872e7c37bc7"></a>
- **M04-CAP-SPECIALTY-6f6cd872e7c37bc7**: Renal Diagnosis Registry
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-5e95a3d2f0475982"></a>
- **M04-CAP-SPECIALTY-5e95a3d2f0475982**: Acute Kidney Injury Management
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-40f616d4b442f5cd"></a>
- **M04-CAP-SPECIALTY-40f616d4b442f5cd**: Chronic Kidney Disease Management
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-de0519e4bfd6d240"></a>
- **M04-CAP-SPECIALTY-de0519e4bfd6d240**: Congenital Kidney Disease
  Origin: original 4551, original 4600

<a id="M04-CAP-SPECIALTY-90083eb214833578"></a>
- **M04-CAP-SPECIALTY-90083eb214833578**: Genetic Nephrology
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-60b28b20676c1d87"></a>
- **M04-CAP-SPECIALTY-60b28b20676c1d87**: Glomerular Disease
  Origin: original 4551, original 4600

<a id="M04-CAP-SPECIALTY-fa10b64f611c430d"></a>
- **M04-CAP-SPECIALTY-fa10b64f611c430d**: Tubular Disorders
  Origin: original 4551, original 4600

<a id="M04-CAP-SPECIALTY-ceced9e38e118e70"></a>
- **M04-CAP-SPECIALTY-ceced9e38e118e70**: Electrolyte Disorders
  Origin: original 4551, original 4600

<a id="M04-CAP-SPECIALTY-4ae07eec067f4ff4"></a>
- **M04-CAP-SPECIALTY-4ae07eec067f4ff4**: Acid-Base Disorders
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-3b25281a68f8d5b9"></a>
- **M04-CAP-SPECIALTY-3b25281a68f8d5b9**: Kidney Transplantation
  Origin: original 4551, original 4575, original 4600

<a id="M04-CAP-SPECIALTY-739eec13dc2272c6"></a>
- **M04-CAP-SPECIALTY-739eec13dc2272c6**: Renal Medication Safety
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-a72bf5d699adc477"></a>
- **M04-CAP-SPECIALTY-a72bf5d699adc477**: Multidisciplinary Care Coordination
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-edd465fdb3fd4557"></a>
- **M04-CAP-SPECIALTY-edd465fdb3fd4557**: Clinical Data:
  Origin: original 4551, original 4701, original 4826, original 5026

<a id="M04-CAP-SPECIALTY-7f8a7aa8ed537015"></a>
- **M04-CAP-SPECIALTY-7f8a7aa8ed537015**: Creatinine
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-89807118caf5a6be"></a>
- **M04-CAP-SPECIALTY-89807118caf5a6be**: Cystatin C
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-888f9acc6f6cd2e2"></a>
- **M04-CAP-SPECIALTY-888f9acc6f6cd2e2**: eGFR
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-95df7165bd9fbfda"></a>
- **M04-CAP-SPECIALTY-95df7165bd9fbfda**: Urinalysis
  Origin: original 4551, original 5031, original 5032

<a id="M04-CAP-SPECIALTY-4d27a3d6089273ef"></a>
- **M04-CAP-SPECIALTY-4d27a3d6089273ef**: Proteinuria
  Origin: original 4551, original 4705, original 5032

<a id="M04-CAP-SPECIALTY-431f48473fb36cd0"></a>
- **M04-CAP-SPECIALTY-431f48473fb36cd0**: Albuminuria
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-3e6673e4b5967f40"></a>
- **M04-CAP-SPECIALTY-3e6673e4b5967f40**: Electrolytes
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-41de9f847262847e"></a>
- **M04-CAP-SPECIALTY-41de9f847262847e**: Acid-Base Status
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-9da77df714be61fe"></a>
- **M04-CAP-SPECIALTY-9da77df714be61fe**: Blood Pressure
  Origin: original 4551, original 4705, original 5032

<a id="M04-CAP-SPECIALTY-36742ae9f1aca295"></a>
- **M04-CAP-SPECIALTY-36742ae9f1aca295**: Fluid Balance
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-bbb3773672124cc0"></a>
- **M04-CAP-SPECIALTY-bbb3773672124cc0**: Renal Pathology
  Origin: original 4551, original 4575

<a id="M04-CAP-SPECIALTY-2f27e552d723d07f"></a>
- **M04-CAP-SPECIALTY-2f27e552d723d07f**: Integrations:
  Origin: original 4551, original 4701, original 4703, original 4704, original 4706, original 4708, original 4709, original 4719, original 4826, original 5026, original 5028, original 5029, original 5031, original 5032, original 5033, original 5034, original 5035, original 5043

<a id="M04-CAP-SPECIALTY-646ee4a286165f4e"></a>
- **M04-CAP-SPECIALTY-646ee4a286165f4e**: Urology
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-7c49afabe60c90d6"></a>
- **M04-CAP-SPECIALTY-7c49afabe60c90d6**: Cardiology
  Origin: original 4551, original 4701, original 4704, original 4706, original 4709, original 4725, original 5026, original 5031, original 5034, original 5035

<a id="M04-CAP-SPECIALTY-7605ce62d32022f4"></a>
- **M04-CAP-SPECIALTY-7605ce62d32022f4**: Pharmacy
  Origin: original 4551, original 4701, original 4826, original 5026, original 5028, original 5032, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-fb7dcbc64a7ed5f8"></a>
- **M04-CAP-SPECIALTY-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4551, original 4701, original 4703, original 4826, original 5151

<a id="M04-CAP-SPECIALTY-0c777c1452427a5c"></a>
- **M04-CAP-SPECIALTY-0c777c1452427a5c**: Longitudinal Pattern Recognition
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-51a5afea4b68d0c3"></a>
- **M04-CAP-SPECIALTY-51a5afea4b68d0c3**: Clinical Trend Detection
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-ba16bd58c016f0b1"></a>
- **M04-CAP-SPECIALTY-ba16bd58c016f0b1**: Deterioration Risk Support
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-c474964efc7eef27"></a>
- **M04-CAP-SPECIALTY-c474964efc7eef27**: Clinical Summarization
  Origin: original 4551, original 4701

<a id="M04-CAP-SPECIALTY-b007d4edff89a0b4"></a>
- **M04-CAP-SPECIALTY-b007d4edff89a0b4**: Missing-data Detection
  Origin: original 4551, original 4701

<a id="M04-CAP-SPECIALTY-5b7b1f0071a1f6d4"></a>
- **M04-CAP-SPECIALTY-5b7b1f0071a1f6d4**: Decision-support Orchestration
  Origin: original 4551, original 4575

<a id="M04-CAP-SPECIALTY-07f8d474b8b4141c"></a>
- **M04-CAP-SPECIALTY-07f8d474b8b4141c**: Safety:
  Origin: original 4551, original 4826

<a id="M04-CAP-SPECIALTY-0a9d579c93e2d9ac"></a>
- **M04-CAP-SPECIALTY-0a9d579c93e2d9ac**: AI cannot independently establish a renal diagnosis, prescribe medication or modify treatment.
  Origin: original 4551

<a id="M04-CAP-SPECIALTY-43a67d79860bcb43"></a>
- **M04-CAP-SPECIALTY-43a67d79860bcb43**: HIGH
  Origin: original 4551, original 4701, original 4826, original 5002, original 5026

<a id="M04-CAP-SPECIALTY-bdca879398677ed8"></a>
- **M04-CAP-SPECIALTY-bdca879398677ed8**: Serve as the orchestration layer for the complete EDHT pediatric renal and urological ecosystem.
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-b2e6f8070a7a813d"></a>
- **M04-CAP-SPECIALTY-b2e6f8070a7a813d**: Coordinates:
  Origin: original 4575, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-8544c66216575e9b"></a>
- **M04-CAP-SPECIALTY-8544c66216575e9b**: Pediatric Nephrology
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-06ad4bdab5ae038f"></a>
- **M04-CAP-SPECIALTY-06ad4bdab5ae038f**: Pediatric Urology
  Origin: original 4575, original 4600

<a id="M04-CAP-SPECIALTY-747f68311661e702"></a>
- **M04-CAP-SPECIALTY-747f68311661e702**: Pharmacology
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-ef963e812dc56963"></a>
- **M04-CAP-SPECIALTY-ef963e812dc56963**: Emergency Medicine
  Origin: original 4575, original 4826, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-33935fa27c61fca7"></a>
- **M04-CAP-SPECIALTY-33935fa27c61fca7**: Platform Functions:
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-dc9dad9f9c361021"></a>
- **M04-CAP-SPECIALTY-dc9dad9f9c361021**: Unified Patient Timeline
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-61c11beed7e57144"></a>
- **M04-CAP-SPECIALTY-61c11beed7e57144**: Multidisciplinary Case Review
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-8deb81f02b2bfc0e"></a>
- **M04-CAP-SPECIALTY-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 4575, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-ef959e75f54d644f"></a>
- **M04-CAP-SPECIALTY-ef959e75f54d644f**: Consent Management
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-f573b0997f70bf2f"></a>
- **M04-CAP-SPECIALTY-f573b0997f70bf2f**: Clinical Alerts
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-f3f538343dc817d7"></a>
- **M04-CAP-SPECIALTY-f3f538343dc817d7**: Cross-border Data Exchange
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-42f77a5ff4220425"></a>
- **M04-CAP-SPECIALTY-42f77a5ff4220425**: Structured Clinical Documentation
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-3f51afab3a09b8f9"></a>
- **M04-CAP-SPECIALTY-3f51afab3a09b8f9**: Auditability
  Origin: original 4575, original 4850

<a id="M04-CAP-SPECIALTY-a7dc95c85b62a87a"></a>
- **M04-CAP-SPECIALTY-a7dc95c85b62a87a**: Data Provenance
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-802b8c1b9cf43ef1"></a>
- **M04-CAP-SPECIALTY-802b8c1b9cf43ef1**: Quality Indicators
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-f6b8c85561bfc1cd"></a>
- **M04-CAP-SPECIALTY-f6b8c85561bfc1cd**: Research-ready De-identified Data Layer
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-f1555ae96e3bed30"></a>
- **M04-CAP-SPECIALTY-f1555ae96e3bed30**: Architecture:
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-7bbe628b3276047c"></a>
- **M04-CAP-SPECIALTY-7bbe628b3276047c**: Acts as the parent coordination layer while specialized renal modules remain independently deployable services.
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-8fee1cec5c964e3e"></a>
- **M04-CAP-SPECIALTY-8fee1cec5c964e3e**: MVP Scope:
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-0b83f51db7f04f4b"></a>
- **M04-CAP-SPECIALTY-0b83f51db7f04f4b**: Longitudinal Renal Record
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-1fedeb14a943374f"></a>
- **M04-CAP-SPECIALTY-1fedeb14a943374f**: Laboratory Integration
  Origin: original 4575, original 4600, original 4725

<a id="M04-CAP-SPECIALTY-082a8ad6f3db811c"></a>
- **M04-CAP-SPECIALTY-082a8ad6f3db811c**: Kidney Function Trends
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-1eeee0f1beace102"></a>
- **M04-CAP-SPECIALTY-1eeee0f1beace102**: Diagnosis Registry
  Origin: original 4575, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-7f59c1e0210c3f26"></a>
- **M04-CAP-SPECIALTY-7f59c1e0210c3f26**: Medication Safety
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-d456a4c2a3a79431"></a>
- **M04-CAP-SPECIALTY-d456a4c2a3a79431**: Imaging Reports
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-e60d752618c2b8f0"></a>
- **M04-CAP-SPECIALTY-e60d752618c2b8f0**: Interoperability
  Origin: original 4575, original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-935451130cda4672"></a>
- **M04-CAP-SPECIALTY-935451130cda4672**: Advanced Scope:
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-d21b29b4027c1acc"></a>
- **M04-CAP-SPECIALTY-d21b29b4027c1acc**: Predictive AI
  Origin: original 4575, original 4600

<a id="M04-CAP-SPECIALTY-718566eb41b20f15"></a>
- **M04-CAP-SPECIALTY-718566eb41b20f15**: Digital Twin Modeling
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-2f337b95be16d592"></a>
- **M04-CAP-SPECIALTY-2f337b95be16d592**: Dialysis Device Integration
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-9aa4c621449d968c"></a>
- **M04-CAP-SPECIALTY-9aa4c621449d968c**: Advanced Transplant Intelligence
  Origin: original 4575, original 4600

<a id="M04-CAP-SPECIALTY-9f4c0b239f0c3a91"></a>
- **M04-CAP-SPECIALTY-9f4c0b239f0c3a91**: Cross-border Specialist Networks
  Origin: original 4575

<a id="M04-CAP-SPECIALTY-299b929642526c9d"></a>
- **M04-CAP-SPECIALTY-299b929642526c9d**: Provide the master orchestration layer connecting all pediatric nephrology, urology, dialysis and kidney transplantation capabilities within EDHT.
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-efaa9efed7bb2b52"></a>
- **M04-CAP-SPECIALTY-efaa9efed7bb2b52**: Clinical Domains:
  Origin: original 4600, original 5151

<a id="M04-CAP-SPECIALTY-a3cc50bf7f122867"></a>
- **M04-CAP-SPECIALTY-a3cc50bf7f122867**: Acute Kidney Injury
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-cafde2ad7ff04e79"></a>
- **M04-CAP-SPECIALTY-cafde2ad7ff04e79**: Chronic Kidney Disease
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-eb4ad934634ad0fc"></a>
- **M04-CAP-SPECIALTY-eb4ad934634ad0fc**: Genetic Kidney Disease
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-813ec4f138df9fe1"></a>
- **M04-CAP-SPECIALTY-813ec4f138df9fe1**: UTI
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-6c6c0b199876b75f"></a>
- **M04-CAP-SPECIALTY-6c6c0b199876b75f**: Complex Bladder Disease
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-125322344c4098db"></a>
- **M04-CAP-SPECIALTY-125322344c4098db**: Kidney Stones
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-b52f5aff420da7d7"></a>
- **M04-CAP-SPECIALTY-b52f5aff420da7d7**: Renal Nutrition
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-89e1d98e05d35dc9"></a>
- **M04-CAP-SPECIALTY-89e1d98e05d35dc9**: Renal Pharmacology
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-38258adf2ab70daa"></a>
- **M04-CAP-SPECIALTY-38258adf2ab70daa**: Critical Care
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-873049232016f19a"></a>
- **M04-CAP-SPECIALTY-873049232016f19a**: Home Care
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-bfb737d3f44b3c35"></a>
- **M04-CAP-SPECIALTY-bfb737d3f44b3c35**: Digital Capabilities:
  Origin: original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-96937651708e40b9"></a>
- **M04-CAP-SPECIALTY-96937651708e40b9**: Multidisciplinary Care
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-8c5d4df9f3996b04"></a>
- **M04-CAP-SPECIALTY-8c5d4df9f3996b04**: Cross-Border Exchange
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-59e267147314b249"></a>
- **M04-CAP-SPECIALTY-59e267147314b249**: Patient/Guardian Interface
  Origin: original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-6bb4749da6390ca0"></a>
- **M04-CAP-SPECIALTY-6bb4749da6390ca0**: Clinical Registry
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-a7c0a324b8c816f9"></a>
- **M04-CAP-SPECIALTY-a7c0a324b8c816f9**: Research Data Layer
  Origin: original 4600, original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-ddb73e9d16d29c47"></a>
- **M04-CAP-SPECIALTY-ddb73e9d16d29c47**: Unified Longitudinal Timeline
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-09d27151008b0f6c"></a>
- **M04-CAP-SPECIALTY-09d27151008b0f6c**: Workflow Orchestration
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-24567aeb8f0582e7"></a>
- **M04-CAP-SPECIALTY-24567aeb8f0582e7**: Identity and Access Control
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-962f01de2c106ca9"></a>
- **M04-CAP-SPECIALTY-962f01de2c106ca9**: Clinical Decision Traceability
  Origin: original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-4031cf224b969610"></a>
- **M04-CAP-SPECIALTY-4031cf224b969610**: Quality Monitoring
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-fdaf8140ccf3e46f"></a>
- **M04-CAP-SPECIALTY-fdaf8140ccf3e46f**: Outcome Tracking
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-3407827230e00dc3"></a>
- **M04-CAP-SPECIALTY-3407827230e00dc3**: AI Governance
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-5f51a52700c7b663"></a>
- **M04-CAP-SPECIALTY-5f51a52700c7b663**: Safety Governance
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-5add0b6e75ef89fb"></a>
- **M04-CAP-SPECIALTY-5add0b6e75ef89fb**: MVP Foundation:
  Origin: original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-17c9f342a12f0d93"></a>
- **M04-CAP-SPECIALTY-17c9f342a12f0d93**: Patient Renal Record
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-cce0d41e64fe6249"></a>
- **M04-CAP-SPECIALTY-cce0d41e64fe6249**: Renal Function Trends
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-38a2cebbd8bcc033"></a>
- **M04-CAP-SPECIALTY-38a2cebbd8bcc033**: Imaging and Report Integration
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-a6e660454c4a1516"></a>
- **M04-CAP-SPECIALTY-a6e660454c4a1516**: Provider Workflows
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-753f9d55faa1fa9c"></a>
- **M04-CAP-SPECIALTY-753f9d55faa1fa9c**: Expansion Layers:
  Origin: original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-b3ba0feb20144f7f"></a>
- **M04-CAP-SPECIALTY-b3ba0feb20144f7f**: Dialysis Device Connectivity
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-92f29abe32a206af"></a>
- **M04-CAP-SPECIALTY-92f29abe32a206af**: Home Monitoring
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-8f5868df9b70be73"></a>
- **M04-CAP-SPECIALTY-8f5868df9b70be73**: Population Analytics
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-1efde85b84351453"></a>
- **M04-CAP-SPECIALTY-1efde85b84351453**: Research Infrastructure
  Origin: original 4600, original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-6c6b72c61d95ccd8"></a>
- **M04-CAP-SPECIALTY-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 4600, original 4725, original 4850, original 5032, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-1f968f863df7d91f"></a>
- **M04-CAP-SPECIALTY-1f968f863df7d91f**: The platform remains modular. Individual services may be deployed progressively without breaking the unified longitudinal patient model.
  Origin: original 4600

<a id="M04-CAP-SPECIALTY-d65305b5f6d21ac0"></a>
- **M04-CAP-SPECIALTY-d65305b5f6d21ac0**: Provide the central longitudinal clinical architecture for pediatric rheumatology, autoimmune, autoinflammatory and systemic connective tissue diseases across EDHT.
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-46c3dc7240a46818"></a>
- **M04-CAP-SPECIALTY-46c3dc7240a46818**: Rheumatologic Diagnosis Registry
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-6549bb8529ae6a52"></a>
- **M04-CAP-SPECIALTY-6549bb8529ae6a52**: Musculoskeletal Symptoms
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-29025f5f48fb2e0e"></a>
- **M04-CAP-SPECIALTY-29025f5f48fb2e0e**: Joint Examination
  Origin: original 4701, original 5026

<a id="M04-CAP-SPECIALTY-b006eb77f693bc98"></a>
- **M04-CAP-SPECIALTY-b006eb77f693bc98**: Systemic Manifestations
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-47794f0e311b46d6"></a>
- **M04-CAP-SPECIALTY-47794f0e311b46d6**: Autoimmune Disease
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-cd4647e36b3c638b"></a>
- **M04-CAP-SPECIALTY-cd4647e36b3c638b**: Autoinflammatory Disease
  Origin: original 4701, original 4725

<a id="M04-CAP-SPECIALTY-8dfc9dc1d8fdbf2d"></a>
- **M04-CAP-SPECIALTY-8dfc9dc1d8fdbf2d**: Connective Tissue Disease
  Origin: original 4701, original 4725, original 5026

<a id="M04-CAP-SPECIALTY-90160fc0ac22777e"></a>
- **M04-CAP-SPECIALTY-90160fc0ac22777e**: Vasculitis
  Origin: original 4701, original 4725, original 5026, original 5050

<a id="M04-CAP-SPECIALTY-edb455520f93874e"></a>
- **M04-CAP-SPECIALTY-edb455520f93874e**: Muscle Disease
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-ef89ed1537854e69"></a>
- **M04-CAP-SPECIALTY-ef89ed1537854e69**: Skin Manifestations
  Origin: original 4701, original 4706, original 4708, original 4710, original 5033, original 5035, original 5039

<a id="M04-CAP-SPECIALTY-6eefc6df511be2e9"></a>
- **M04-CAP-SPECIALTY-6eefc6df511be2e9**: Renal Involvement
  Origin: original 4701, original 4704, original 4706, original 5035

<a id="M04-CAP-SPECIALTY-6f07c3ee79fc6889"></a>
- **M04-CAP-SPECIALTY-6f07c3ee79fc6889**: Ocular Involvement
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-57a4747db1edff55"></a>
- **M04-CAP-SPECIALTY-57a4747db1edff55**: Pulmonary Involvement
  Origin: original 4701, original 4706, original 4709, original 5035

<a id="M04-CAP-SPECIALTY-4c1270b9efa6b98e"></a>
- **M04-CAP-SPECIALTY-4c1270b9efa6b98e**: Cardiovascular Involvement
  Origin: original 4701, original 4706

<a id="M04-CAP-SPECIALTY-045f2ce84e6c680c"></a>
- **M04-CAP-SPECIALTY-045f2ce84e6c680c**: Neurological Involvement
  Origin: original 4701, original 4704, original 4706, original 5035

<a id="M04-CAP-SPECIALTY-b5f5637764c89b92"></a>
- **M04-CAP-SPECIALTY-b5f5637764c89b92**: Medication and Immunosuppression
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-c2dd53183c469c28"></a>
- **M04-CAP-SPECIALTY-c2dd53183c469c28**: Long-term Outcome Tracking
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-fca31b88a2f28f2c"></a>
- **M04-CAP-SPECIALTY-fca31b88a2f28f2c**: Physical Examination
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-d831fb3bb8efed58"></a>
- **M04-CAP-SPECIALTY-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4701, original 5028, original 5035

<a id="M04-CAP-SPECIALTY-05f87934557a7537"></a>
- **M04-CAP-SPECIALTY-05f87934557a7537**: Autoantibodies
  Origin: original 4701, original 4704, original 4705, original 4706, original 4708, original 4709, original 5026, original 5031, original 5032, original 5034

<a id="M04-CAP-SPECIALTY-31e97b143dee8a69"></a>
- **M04-CAP-SPECIALTY-31e97b143dee8a69**: Inflammatory Markers
  Origin: original 4701, original 4706, original 5026, original 5031, original 5039

<a id="M04-CAP-SPECIALTY-8f30086bae3f9a8f"></a>
- **M04-CAP-SPECIALTY-8f30086bae3f9a8f**: Infusion Therapy
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-23a329b8baa1834f"></a>
- **M04-CAP-SPECIALTY-23a329b8baa1834f**: Functional Status
  Origin: original 4701, original 4702, original 4826, original 4850, original 5026, original 5028, original 5175

<a id="M04-CAP-SPECIALTY-dad1551e6044201a"></a>
- **M04-CAP-SPECIALTY-dad1551e6044201a**: Nephrology
  Origin: original 4701, original 4704, original 4706, original 4709, original 5026, original 5031, original 5032, original 5034, original 5035

<a id="M04-CAP-SPECIALTY-34f989613ab16060"></a>
- **M04-CAP-SPECIALTY-34f989613ab16060**: Ophthalmology
  Origin: original 4701, original 4725, original 5026, original 5028

<a id="M04-CAP-SPECIALTY-a63318a2f5573dcf"></a>
- **M04-CAP-SPECIALTY-a63318a2f5573dcf**: Longitudinal Disease Pattern Analysis
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-da803edddcf9d64b"></a>
- **M04-CAP-SPECIALTY-da803edddcf9d64b**: Multisystem Correlation
  Origin: original 4701, original 5002

<a id="M04-CAP-SPECIALTY-e8be23860ddbc4d0"></a>
- **M04-CAP-SPECIALTY-e8be23860ddbc4d0**: Disease Activity Trend Support
  Origin: original 4701

<a id="M04-CAP-SPECIALTY-980395d3fc76484a"></a>
- **M04-CAP-SPECIALTY-980395d3fc76484a**: Provide longitudinal management of juvenile idiopathic arthritis across clinical subtypes and stages of disease.
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-3302b865d99b6fd4"></a>
- **M04-CAP-SPECIALTY-3302b865d99b6fd4**: JIA Diagnosis
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-9b162be826d827e1"></a>
- **M04-CAP-SPECIALTY-9b162be826d827e1**: Disease Subtype
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-0226f5ca271fa4e7"></a>
- **M04-CAP-SPECIALTY-0226f5ca271fa4e7**: Joint Count
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-c89fc18e288798e6"></a>
- **M04-CAP-SPECIALTY-c89fc18e288798e6**: Active Joint Assessment
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-7c4e6d5489a10882"></a>
- **M04-CAP-SPECIALTY-7c4e6d5489a10882**: Limited Joint Assessment
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-2352789d6ece2948"></a>
- **M04-CAP-SPECIALTY-2352789d6ece2948**: Morning Stiffness
  Origin: original 4702, original 4719, original 5028

<a id="M04-CAP-SPECIALTY-f4a6850a1cbf7c9e"></a>
- **M04-CAP-SPECIALTY-f4a6850a1cbf7c9e**: Intra-articular Procedures
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-fc24595f05327baf"></a>
- **M04-CAP-SPECIALTY-fc24595f05327baf**: Remission
  Origin: original 4702, original 4704, original 5028, original 5031

<a id="M04-CAP-SPECIALTY-a6b231db4af33119"></a>
- **M04-CAP-SPECIALTY-a6b231db4af33119**: Flare Tracking
  Origin: original 4702, original 4704

<a id="M04-CAP-SPECIALTY-265ccc63373fd417"></a>
- **M04-CAP-SPECIALTY-265ccc63373fd417**: Complication Surveillance:
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-8a1f46a425d30f77"></a>
- **M04-CAP-SPECIALTY-8a1f46a425d30f77**: Uveitis
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-c88f0ec8ec0ecbf0"></a>
- **M04-CAP-SPECIALTY-c88f0ec8ec0ecbf0**: Growth Disturbance
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-8132aa41a2f917ea"></a>
- **M04-CAP-SPECIALTY-8132aa41a2f917ea**: Joint Damage
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-d27067eda951a2e5"></a>
- **M04-CAP-SPECIALTY-d27067eda951a2e5**: Medication Toxicity
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-d80cf7a00db5361e"></a>
- **M04-CAP-SPECIALTY-d80cf7a00db5361e**: Functional Limitation
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-be60185891648e82"></a>
- **M04-CAP-SPECIALTY-be60185891648e82**: Patient/Guardian Functions:
  Origin: original 4702, original 5151

<a id="M04-CAP-SPECIALTY-aa2cf42a7e8e9298"></a>
- **M04-CAP-SPECIALTY-aa2cf42a7e8e9298**: Symptom Diary
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-84c316602c281f7e"></a>
- **M04-CAP-SPECIALTY-84c316602c281f7e**: Medication Schedule
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-3cbe52b2b428ce1b"></a>
- **M04-CAP-SPECIALTY-3cbe52b2b428ce1b**: Functional Tracking
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-3f8afcdc4e447bb0"></a>
- **M04-CAP-SPECIALTY-3f8afcdc4e447bb0**: Clinician-approved Care Plan
  Origin: original 4702

<a id="M04-CAP-SPECIALTY-87c774c0aac6cd27"></a>
- **M04-CAP-SPECIALTY-87c774c0aac6cd27**: Create a structured longitudinal anatomical map of joint and musculoskeletal involvement.
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-b18d099ac0087b45"></a>
- **M04-CAP-SPECIALTY-b18d099ac0087b45**: Joint Map
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-00b7ad4fa50475ad"></a>
- **M04-CAP-SPECIALTY-00b7ad4fa50475ad**: Swelling
  Origin: original 4703, original 5029

<a id="M04-CAP-SPECIALTY-fc5ba39c9e4b90f4"></a>
- **M04-CAP-SPECIALTY-fc5ba39c9e4b90f4**: Tenderness
  Origin: original 4703, original 5029

<a id="M04-CAP-SPECIALTY-a3d3778b63a0330e"></a>
- **M04-CAP-SPECIALTY-a3d3778b63a0330e**: Range of Motion
  Origin: original 4703, original 5029

<a id="M04-CAP-SPECIALTY-32aaee9bdb9675c2"></a>
- **M04-CAP-SPECIALTY-32aaee9bdb9675c2**: Joint Limitation
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-1f56e87b3fec4d7a"></a>
- **M04-CAP-SPECIALTY-1f56e87b3fec4d7a**: Warmth
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-c91e47a1a8cbc854"></a>
- **M04-CAP-SPECIALTY-c91e47a1a8cbc854**: Functional Impairment
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-4aa17d28ce54a7ae"></a>
- **M04-CAP-SPECIALTY-4aa17d28ce54a7ae**: Enthesitis
  Origin: original 4703, original 5029

<a id="M04-CAP-SPECIALTY-6c651e680db3cfb6"></a>
- **M04-CAP-SPECIALTY-6c651e680db3cfb6**: Dactylitis
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-3a42569c1112bf62"></a>
- **M04-CAP-SPECIALTY-3a42569c1112bf62**: Axial Symptoms
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-c505d8527b57aeea"></a>
- **M04-CAP-SPECIALTY-c505d8527b57aeea**: Muscle Function
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-4e787722e84ee2d2"></a>
- **M04-CAP-SPECIALTY-4e787722e84ee2d2**: Gait
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-816f49494ba8a0c9"></a>
- **M04-CAP-SPECIALTY-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4703, original 5002, original 5029

<a id="M04-CAP-SPECIALTY-753ee62e118d240a"></a>
- **M04-CAP-SPECIALTY-753ee62e118d240a**: Visualization:
  Origin: original 4703, original 5029

<a id="M04-CAP-SPECIALTY-e3d2d4508e615622"></a>
- **M04-CAP-SPECIALTY-e3d2d4508e615622**: Provides longitudinal comparison of affected joints across visits and treatment periods.
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-0ddb177c4828085b"></a>
- **M04-CAP-SPECIALTY-0ddb177c4828085b**: Structured Examination Support
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-76c1683f638b99df"></a>
- **M04-CAP-SPECIALTY-76c1683f638b99df**: Change Detection
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-6b886488a4911afc"></a>
- **M04-CAP-SPECIALTY-6b886488a4911afc**: Disease Distribution Visualization
  Origin: original 4703

<a id="M04-CAP-SPECIALTY-791e150b54f860f6"></a>
- **M04-CAP-SPECIALTY-791e150b54f860f6**: Rheumatology
  Origin: original 4703, original 4704, original 4706, original 4708, original 4709, original 4719, original 5028, original 5029, original 5031, original 5032, original 5033, original 5034, original 5035, original 5043

<a id="M04-CAP-SPECIALTY-0c2d408e413351d3"></a>
- **M04-CAP-SPECIALTY-0c2d408e413351d3**: Orthopedics
  Origin: original 4703, original 5028, original 5029

<a id="M04-CAP-SPECIALTY-aa433304c304c24c"></a>
- **M04-CAP-SPECIALTY-aa433304c304c24c**: Physiotherapy
  Origin: original 4703, original 4719

<a id="M04-CAP-SPECIALTY-d9a78ac35d88a83b"></a>
- **M04-CAP-SPECIALTY-d9a78ac35d88a83b**: Coordinate multisystem longitudinal care of pediatric systemic lupus erythematosus.
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-f393e71130aa62f9"></a>
- **M04-CAP-SPECIALTY-f393e71130aa62f9**: SLE Diagnosis
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-f168be26a1038afc"></a>
- **M04-CAP-SPECIALTY-f168be26a1038afc**: Clinical Manifestations
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-445733ccfb3c7365"></a>
- **M04-CAP-SPECIALTY-445733ccfb3c7365**: Hematological Findings
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-2f7374329ae82b2e"></a>
- **M04-CAP-SPECIALTY-2f7374329ae82b2e**: Dermatological Manifestations
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-375c642a75f71b03"></a>
- **M04-CAP-SPECIALTY-375c642a75f71b03**: Musculoskeletal Manifestations
  Origin: original 4704, original 4710

<a id="M04-CAP-SPECIALTY-e0b7e262e376f157"></a>
- **M04-CAP-SPECIALTY-e0b7e262e376f157**: Cardiopulmonary Involvement
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-bbbece7a847db335"></a>
- **M04-CAP-SPECIALTY-bbbece7a847db335**: Immunosuppression
  Origin: original 4704, original 4706, original 4708, original 5031, original 5032, original 5033

<a id="M04-CAP-SPECIALTY-624a3ca3a90cb5bc"></a>
- **M04-CAP-SPECIALTY-624a3ca3a90cb5bc**: Organ Damage Tracking
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-d5201c8c85a8f994"></a>
- **M04-CAP-SPECIALTY-d5201c8c85a8f994**: Hematology
  Origin: original 4704, original 5031

<a id="M04-CAP-SPECIALTY-671a886073b17fc7"></a>
- **M04-CAP-SPECIALTY-671a886073b17fc7**: Longitudinal Function:
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-ba6f4bfa7179102f"></a>
- **M04-CAP-SPECIALTY-ba6f4bfa7179102f**: Creates one multisystem lupus timeline rather than separate specialty records.
  Origin: original 4704

<a id="M04-CAP-SPECIALTY-81d9d47760fd8b8d"></a>
- **M04-CAP-SPECIALTY-81d9d47760fd8b8d**: Connect systemic autoimmune disease activity with kidney-specific evaluation and treatment.
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-f45ee9d78d40d064"></a>
- **M04-CAP-SPECIALTY-f45ee9d78d40d064**: Renal Disease Presentation
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-71f9a3eeccc84a71"></a>
- **M04-CAP-SPECIALTY-71f9a3eeccc84a71**: Hematuria
  Origin: original 4705, original 5032

<a id="M04-CAP-SPECIALTY-f906bcad6358135b"></a>
- **M04-CAP-SPECIALTY-f906bcad6358135b**: Kidney Function
  Origin: original 4705, original 5032

<a id="M04-CAP-SPECIALTY-6c6ea74f1122404d"></a>
- **M04-CAP-SPECIALTY-6c6ea74f1122404d**: Urinary Findings
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-090a7200c420c8fc"></a>
- **M04-CAP-SPECIALTY-090a7200c420c8fc**: Kidney Biopsy
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-1b97c08f2fba9c1d"></a>
- **M04-CAP-SPECIALTY-1b97c08f2fba9c1d**: Immunosuppressive Therapy
  Origin: original 4705, original 4725, original 5050

<a id="M04-CAP-SPECIALTY-02ffb0ea5b1755a8"></a>
- **M04-CAP-SPECIALTY-02ffb0ea5b1755a8**: Relapse
  Origin: original 4705, original 4706, original 5032

<a id="M04-CAP-SPECIALTY-e11349dc3e215636"></a>
- **M04-CAP-SPECIALTY-e11349dc3e215636**: Renal Outcome
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-50a66765b553fe24"></a>
- **M04-CAP-SPECIALTY-50a66765b553fe24**: Shared Workflow:
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-8713392b6bebfd42"></a>
- **M04-CAP-SPECIALTY-8713392b6bebfd42**: Rheumatology → Nephrology → Laboratory Medicine → Renal Pathology → Treatment Plan → Longitudinal Monitoring.
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-23ee2d2415b803c3"></a>
- **M04-CAP-SPECIALTY-23ee2d2415b803c3**: Clinical Timeline:
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-27358f1ccf6972e0"></a>
- **M04-CAP-SPECIALTY-27358f1ccf6972e0**: Systemic disease activity and renal disease activity remain synchronized.
  Origin: original 4705

<a id="M04-CAP-SPECIALTY-2e7112bbd446e09f"></a>
- **M04-CAP-SPECIALTY-2e7112bbd446e09f**: Provide structured management of pediatric systemic vasculitis and vascular inflammatory disease.
  Origin: original 4706

<a id="M04-CAP-SPECIALTY-ec51077c83145f35"></a>
- **M04-CAP-SPECIALTY-ec51077c83145f35**: Vasculitis Diagnosis
  Origin: original 4706, original 5035

<a id="M04-CAP-SPECIALTY-6648a531a7be5e9a"></a>
- **M04-CAP-SPECIALTY-6648a531a7be5e9a**: Vessel Distribution
  Origin: original 4706

<a id="M04-CAP-SPECIALTY-0bf4d67b9c88df63"></a>
- **M04-CAP-SPECIALTY-0bf4d67b9c88df63**: Gastrointestinal Involvement
  Origin: original 4706, original 4709, original 5035

<a id="M04-CAP-SPECIALTY-6dfc1fd557943d0f"></a>
- **M04-CAP-SPECIALTY-6dfc1fd557943d0f**: Biopsy
  Origin: original 4706

<a id="M04-CAP-SPECIALTY-fbe5ecf63bbd0ba8"></a>
- **M04-CAP-SPECIALTY-fbe5ecf63bbd0ba8**: Organ Damage
  Origin: original 4706, original 5035

<a id="M04-CAP-SPECIALTY-9d47b6be7f49986b"></a>
- **M04-CAP-SPECIALTY-9d47b6be7f49986b**: Coordinate multidisciplinary care for juvenile inflammatory muscle disease.
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-ab504758d90168f2"></a>
- **M04-CAP-SPECIALTY-ab504758d90168f2**: Muscle Weakness
  Origin: original 4708, original 5033

<a id="M04-CAP-SPECIALTY-85d61c5ac64e394d"></a>
- **M04-CAP-SPECIALTY-85d61c5ac64e394d**: Functional Assessment
  Origin: original 4708, original 5033

<a id="M04-CAP-SPECIALTY-d3edde184dc657d0"></a>
- **M04-CAP-SPECIALTY-d3edde184dc657d0**: Muscle Enzymes
  Origin: original 4708, original 5033

<a id="M04-CAP-SPECIALTY-2663978a32c6d34f"></a>
- **M04-CAP-SPECIALTY-2663978a32c6d34f**: MRI
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-3887f5918b35bc1b"></a>
- **M04-CAP-SPECIALTY-3887f5918b35bc1b**: Electrophysiology Context
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-3ddb1ae31cb6453b"></a>
- **M04-CAP-SPECIALTY-3ddb1ae31cb6453b**: Muscle Biopsy
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-44f51d0e9f8b079d"></a>
- **M04-CAP-SPECIALTY-44f51d0e9f8b079d**: Respiratory Function
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-ff4a8486bb259fbf"></a>
- **M04-CAP-SPECIALTY-ff4a8486bb259fbf**: Calcinosis
  Origin: original 4708

<a id="M04-CAP-SPECIALTY-b51077b8ac259726"></a>
- **M04-CAP-SPECIALTY-b51077b8ac259726**: Manage localized and systemic scleroderma-spectrum disease in pediatric patients.
  Origin: original 4709

<a id="M04-CAP-SPECIALTY-921a233d148e284a"></a>
- **M04-CAP-SPECIALTY-921a233d148e284a**: Disease Classification
  Origin: original 4709

<a id="M04-CAP-SPECIALTY-52154af71f8a8fe2"></a>
- **M04-CAP-SPECIALTY-52154af71f8a8fe2**: Skin Involvement
  Origin: original 4709, original 5034

<a id="M04-CAP-SPECIALTY-b1e0d74954dc6f63"></a>
- **M04-CAP-SPECIALTY-b1e0d74954dc6f63**: Skin Distribution
  Origin: original 4709

<a id="M04-CAP-SPECIALTY-7195c55ab15b0ee0"></a>
- **M04-CAP-SPECIALTY-7195c55ab15b0ee0**: Musculoskeletal Involvement
  Origin: original 4709

<a id="M04-CAP-SPECIALTY-d3c4faec2b2fd459"></a>
- **M04-CAP-SPECIALTY-d3c4faec2b2fd459**: Joint Contracture
  Origin: original 4709

<a id="M04-CAP-SPECIALTY-b56828af91e7dd70"></a>
- **M04-CAP-SPECIALTY-b56828af91e7dd70**: Vascular Symptoms
  Origin: original 4709, original 5034

<a id="M04-CAP-SPECIALTY-8add3a8de90b0f0c"></a>
- **M04-CAP-SPECIALTY-8add3a8de90b0f0c**: Cardiac Involvement
  Origin: original 4709, original 5035

<a id="M04-CAP-SPECIALTY-7b2711278d44e43a"></a>
- **M04-CAP-SPECIALTY-7b2711278d44e43a**: Renal Context
  Origin: original 4709, original 5031, original 5034, original 5039

<a id="M04-CAP-SPECIALTY-bdfb5cb4b559f914"></a>
- **M04-CAP-SPECIALTY-bdfb5cb4b559f914**: Disease Progression
  Origin: original 4709, original 5034

<a id="M04-CAP-SPECIALTY-8b7a6bbf7a9f1ad3"></a>
- **M04-CAP-SPECIALTY-8b7a6bbf7a9f1ad3**: Support children whose systemic autoimmune phenotype spans multiple connective tissue disease categories.
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-85880776bdd65b83"></a>
- **M04-CAP-SPECIALTY-85880776bdd65b83**: Clinical Phenotype
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-1bc7d8e409ebc9e0"></a>
- **M04-CAP-SPECIALTY-1bc7d8e409ebc9e0**: Autoantibody Profile
  Origin: original 4710, original 5039

<a id="M04-CAP-SPECIALTY-d178599f54d71774"></a>
- **M04-CAP-SPECIALTY-d178599f54d71774**: Vascular Manifestations
  Origin: original 4710, original 5039

<a id="M04-CAP-SPECIALTY-dd8e6846c72326ca"></a>
- **M04-CAP-SPECIALTY-dd8e6846c72326ca**: Renal Manifestations
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-bfad2b86b46bd0b1"></a>
- **M04-CAP-SPECIALTY-bfad2b86b46bd0b1**: Pulmonary Manifestations
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-e7b591804ef4cd51"></a>
- **M04-CAP-SPECIALTY-e7b591804ef4cd51**: Neurological Manifestations
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-5178981096db0ff2"></a>
- **M04-CAP-SPECIALTY-5178981096db0ff2**: Gastrointestinal Manifestations
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-f57d94ad579b8495"></a>
- **M04-CAP-SPECIALTY-f57d94ad579b8495**: Disease Classification History
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-340226f35400dc5a"></a>
- **M04-CAP-SPECIALTY-340226f35400dc5a**: Organ Surveillance
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-cdf6a7f85f4b4169"></a>
- **M04-CAP-SPECIALTY-cdf6a7f85f4b4169**: Longitudinal Phenotype Evolution
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-3f17772622c63a3a"></a>
- **M04-CAP-SPECIALTY-3f17772622c63a3a**: Clinical Principle:
  Origin: original 4710, original 4719, original 5039, original 5043

<a id="M04-CAP-SPECIALTY-cd7422cebe5e0e6f"></a>
- **M04-CAP-SPECIALTY-cd7422cebe5e0e6f**: The system preserves evolving clinical phenotype rather than forcing premature fixed categorization.
  Origin: original 4710

<a id="M04-CAP-SPECIALTY-dd89896252253788"></a>
- **M04-CAP-SPECIALTY-dd89896252253788**: Track symptoms and functional burden not fully represented by laboratory or imaging findings.
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-8433e982f216adfd"></a>
- **M04-CAP-SPECIALTY-8433e982f216adfd**: Pain Distribution
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-4c0240d7fe8bc60d"></a>
- **M04-CAP-SPECIALTY-4c0240d7fe8bc60d**: Fatigue
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-9e512531ebf2d396"></a>
- **M04-CAP-SPECIALTY-9e512531ebf2d396**: Sleep
  Origin: original 4719, original 4826

<a id="M04-CAP-SPECIALTY-7881805835cd66a2"></a>
- **M04-CAP-SPECIALTY-7881805835cd66a2**: Mobility
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-0943ef8e2a954607"></a>
- **M04-CAP-SPECIALTY-0943ef8e2a954607**: Physical Activity
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-2390d039baa767c1"></a>
- **M04-CAP-SPECIALTY-2390d039baa767c1**: School Attendance
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-66a263fe225f3144"></a>
- **M04-CAP-SPECIALTY-66a263fe225f3144**: Daily Function
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-1f110ea63e87475d"></a>
- **M04-CAP-SPECIALTY-1f110ea63e87475d**: Social Participation
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-7e0afa566489d379"></a>
- **M04-CAP-SPECIALTY-7e0afa566489d379**: Guardian-reported Outcomes
  Origin: original 4719, original 4826, original 5151

<a id="M04-CAP-SPECIALTY-2121764a5419eb19"></a>
- **M04-CAP-SPECIALTY-2121764a5419eb19**: Treatment Burden
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-c8eb74cfb0839276"></a>
- **M04-CAP-SPECIALTY-c8eb74cfb0839276**: Quality of Life
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-9f322362c66e0d28"></a>
- **M04-CAP-SPECIALTY-9f322362c66e0d28**: Pain Medicine
  Origin: original 4719, original 5043

<a id="M04-CAP-SPECIALTY-6c2c93b35fd0273f"></a>
- **M04-CAP-SPECIALTY-6c2c93b35fd0273f**: School Health
  Origin: original 4719, original 4826, original 5043

<a id="M04-CAP-SPECIALTY-d09c99ad9fc317ea"></a>
- **M04-CAP-SPECIALTY-d09c99ad9fc317ea**: Patient-reported symptoms remain visible alongside objective disease activity without automatically treating one as a substitute for the other.
  Origin: original 4719

<a id="M04-CAP-SPECIALTY-b4f0c75e436cb746"></a>
- **M04-CAP-SPECIALTY-b4f0c75e436cb746**: Serve as the master orchestration layer for the complete EDHT pediatric rheumatology and systemic inflammatory disease ecosystem.
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-1aca52b49663c9df"></a>
- **M04-CAP-SPECIALTY-1aca52b49663c9df**: Juvenile Idiopathic Arthritis
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-67cc0c9a1f3cf1f2"></a>
- **M04-CAP-SPECIALTY-67cc0c9a1f3cf1f2**: Systemic Lupus
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-3072ad2d34aa693d"></a>
- **M04-CAP-SPECIALTY-3072ad2d34aa693d**: Lupus Nephritis
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-da9a28b7b243e0bb"></a>
- **M04-CAP-SPECIALTY-da9a28b7b243e0bb**: Periodic Fever Syndromes
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-04230eb3f988e4f8"></a>
- **M04-CAP-SPECIALTY-04230eb3f988e4f8**: Juvenile Dermatomyositis
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-b9ec0d3825cc8cde"></a>
- **M04-CAP-SPECIALTY-b9ec0d3825cc8cde**: Scleroderma
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-4ef9e8898196f89f"></a>
- **M04-CAP-SPECIALTY-4ef9e8898196f89f**: Autoantibody Intelligence
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-eaa181597a3eff02"></a>
- **M04-CAP-SPECIALTY-eaa181597a3eff02**: Musculoskeletal Imaging
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-9252ba3914e41319"></a>
- **M04-CAP-SPECIALTY-9252ba3914e41319**: Vaccination Coordination
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-45ee227aa515f78f"></a>
- **M04-CAP-SPECIALTY-45ee227aa515f78f**: Pain and Functional Care
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-f11a7630b38b997e"></a>
- **M04-CAP-SPECIALTY-f11a7630b38b997e**: Multidisciplinary Case Boards
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-cab8d8a3fa4c50a2"></a>
- **M04-CAP-SPECIALTY-cab8d8a3fa4c50a2**: Outcomes Registry
  Origin: original 4725, original 4850, original 5050

<a id="M04-CAP-SPECIALTY-aca0583fd7e006c3"></a>
- **M04-CAP-SPECIALTY-aca0583fd7e006c3**: Cross-Border Interoperability
  Origin: original 4725, original 4850, original 5050, original 5175

<a id="M04-CAP-SPECIALTY-cd061f3095079788"></a>
- **M04-CAP-SPECIALTY-cd061f3095079788**: Unified Systemic Disease Timeline
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-fc516e2626e00260"></a>
- **M04-CAP-SPECIALTY-fc516e2626e00260**: Multisystem Clinical Documentation
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-5d6353413d8e1355"></a>
- **M04-CAP-SPECIALTY-5d6353413d8e1355**: Disease Activity Tracking
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-fc8a58ee3376e96a"></a>
- **M04-CAP-SPECIALTY-fc8a58ee3376e96a**: Imaging Integration
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-794340501a166477"></a>
- **M04-CAP-SPECIALTY-794340501a166477**: Quality and Outcome Monitoring
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-7f60e857420f69ff"></a>
- **M04-CAP-SPECIALTY-7f60e857420f69ff**: Rheumatology Diagnosis Registry
  Origin: original 4725, original 5026, original 5050

<a id="M04-CAP-SPECIALTY-fac418378d00fffd"></a>
- **M04-CAP-SPECIALTY-fac418378d00fffd**: Disease Activity Record
  Origin: original 4725, original 5050

<a id="M04-CAP-SPECIALTY-e196e7337f5b8d1f"></a>
- **M04-CAP-SPECIALTY-e196e7337f5b8d1f**: Medication and Immunosuppression Record
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-3c2aee116c8d7fb3"></a>
- **M04-CAP-SPECIALTY-3c2aee116c8d7fb3**: Joint Assessment
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-d4a8183a7dc5a694"></a>
- **M04-CAP-SPECIALTY-d4a8183a7dc5a694**: Vaccination Context
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-1c72d8953fa4d749"></a>
- **M04-CAP-SPECIALTY-1c72d8953fa4d749**: Advanced Multisystem AI
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-7f0f9dcf02a997f6"></a>
- **M04-CAP-SPECIALTY-7f0f9dcf02a997f6**: Imaging Intelligence
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-f086948703591c8d"></a>
- **M04-CAP-SPECIALTY-f086948703591c8d**: Remote Patient Monitoring
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-1be8c57a7c785607"></a>
- **M04-CAP-SPECIALTY-1be8c57a7c785607**: Rare Disease Analytics
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-df407cf2411869e8"></a>
- **M04-CAP-SPECIALTY-df407cf2411869e8**: International Registries
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-41eb791acb882f5b"></a>
- **M04-CAP-SPECIALTY-41eb791acb882f5b**: Specialized rheumatology services remain independently deployable while sharing one longitudinal EDHT patient model across all affected organ systems.
  Origin: original 4725

<a id="M04-CAP-SPECIALTY-e7715b6327593757"></a>
- **M04-CAP-SPECIALTY-e7715b6327593757**: Provide the central longitudinal architecture for pediatric and adolescent mental health, psychiatry, psychology and behavioral care across EDHT.
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-0f4ce764826fa473"></a>
- **M04-CAP-SPECIALTY-0f4ce764826fa473**: Mental Health Diagnosis Registry
  Origin: original 4826, original 4850, original 5151

<a id="M04-CAP-SPECIALTY-1ae7610ca3a0c568"></a>
- **M04-CAP-SPECIALTY-1ae7610ca3a0c568**: Psychological Assessment
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-5a438ad6e27f8c89"></a>
- **M04-CAP-SPECIALTY-5a438ad6e27f8c89**: Psychiatric Assessment
  Origin: original 4826, original 5175

<a id="M04-CAP-SPECIALTY-f31529f0671e7e32"></a>
- **M04-CAP-SPECIALTY-f31529f0671e7e32**: Behavioral Symptoms
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-8c885b58abd149a9"></a>
- **M04-CAP-SPECIALTY-8c885b58abd149a9**: Emotional Symptoms
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-9d87df98d4780997"></a>
- **M04-CAP-SPECIALTY-9d87df98d4780997**: Developmental Context
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-5a12c72f54171432"></a>
- **M04-CAP-SPECIALTY-5a12c72f54171432**: Family Context
  Origin: original 4826, original 5175

<a id="M04-CAP-SPECIALTY-77c99ab89c469adf"></a>
- **M04-CAP-SPECIALTY-77c99ab89c469adf**: School Context
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-0fd0dfbdcbfa6480"></a>
- **M04-CAP-SPECIALTY-0fd0dfbdcbfa6480**: Social Function
  Origin: original 4826, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-7e233ded4f3aff0a"></a>
- **M04-CAP-SPECIALTY-7e233ded4f3aff0a**: Neuropsychology
  Origin: original 4826, original 4850

<a id="M04-CAP-SPECIALTY-013173eb94af9922"></a>
- **M04-CAP-SPECIALTY-013173eb94af9922**: Transition to Adult Mental Health Services
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-eb268b869abc1289"></a>
- **M04-CAP-SPECIALTY-eb268b869abc1289**: Mental Status Examination
  Origin: original 4826, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-d1b162194f83ed72"></a>
- **M04-CAP-SPECIALTY-d1b162194f83ed72**: Standardized Assessments
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-b4aefe1733d00b01"></a>
- **M04-CAP-SPECIALTY-b4aefe1733d00b01**: School-related Information
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-3882fb384c27d0f8"></a>
- **M04-CAP-SPECIALTY-3882fb384c27d0f8**: Therapy History
  Origin: original 4826, original 5175

<a id="M04-CAP-SPECIALTY-9feedc576fbd002c"></a>
- **M04-CAP-SPECIALTY-9feedc576fbd002c**: Safety Plans
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-a2321d8a8ed2c843"></a>
- **M04-CAP-SPECIALTY-a2321d8a8ed2c843**: Longitudinal Clinical Notes
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-3ab5393bc711e30c"></a>
- **M04-CAP-SPECIALTY-3ab5393bc711e30c**: Psychiatry
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-4f1e6f412b1aff63"></a>
- **M04-CAP-SPECIALTY-4f1e6f412b1aff63**: Longitudinal Clinical Summarization
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-36681f399ddefedc"></a>
- **M04-CAP-SPECIALTY-36681f399ddefedc**: Symptom Trend Analysis
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-e1f327e5eb174648"></a>
- **M04-CAP-SPECIALTY-e1f327e5eb174648**: Care-gap Detection
  Origin: original 4826, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-4451eb78c97f5a1e"></a>
- **M04-CAP-SPECIALTY-4451eb78c97f5a1e**: Pre-Visit Assessment
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-b3061fdef0bee5a2"></a>
- **M04-CAP-SPECIALTY-b3061fdef0bee5a2**: Documentation Assistance
  Origin: original 4826, original 5151

<a id="M04-CAP-SPECIALTY-b7095468af1c78af"></a>
- **M04-CAP-SPECIALTY-b7095468af1c78af**: Multidisciplinary Case Preparation
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-28cf2a4c2e5d6b5d"></a>
- **M04-CAP-SPECIALTY-28cf2a4c2e5d6b5d**: AI cannot independently establish a psychiatric diagnosis, prescribe psychotropic medication or make autonomous crisis-management decisions.
  Origin: original 4826

<a id="M04-CAP-SPECIALTY-19af9d1fb044d226"></a>
- **M04-CAP-SPECIALTY-19af9d1fb044d226**: Serve as the master orchestration layer for the complete EDHT pediatric and adolescent mental-health ecosystem.
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-ca2ccb8293f1fefb"></a>
- **M04-CAP-SPECIALTY-ca2ccb8293f1fefb**: Child & Adolescent Psychiatry
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-6b07dc491f8b4e79"></a>
- **M04-CAP-SPECIALTY-6b07dc491f8b4e79**: Mental Status Assessment
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-0519d168a7a2289a"></a>
- **M04-CAP-SPECIALTY-0519d168a7a2289a**: Anxiety Disorders
  Origin: original 4850, original 5151

<a id="M04-CAP-SPECIALTY-610f0b252b766a41"></a>
- **M04-CAP-SPECIALTY-610f0b252b766a41**: Mood Disorders
  Origin: original 4850, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-3eea0e304dfa50d8"></a>
- **M04-CAP-SPECIALTY-3eea0e304dfa50d8**: ADHD
  Origin: original 4850, original 5175

<a id="M04-CAP-SPECIALTY-15e509c76b806583"></a>
- **M04-CAP-SPECIALTY-15e509c76b806583**: Autism-related Health Coordination
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-000b88b241df0b6d"></a>
- **M04-CAP-SPECIALTY-000b88b241df0b6d**: Learning and Cognitive Function
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-5fef8ccfc5aa50c5"></a>
- **M04-CAP-SPECIALTY-5fef8ccfc5aa50c5**: Behavioral Disorders
  Origin: original 4850, original 5151, original 5175

<a id="M04-CAP-SPECIALTY-1589901c19a6e295"></a>
- **M04-CAP-SPECIALTY-1589901c19a6e295**: Trauma-related Mental Health
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-65ac6606c8a25d05"></a>
- **M04-CAP-SPECIALTY-65ac6606c8a25d05**: Eating Disorders
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-2b349fae1deb4e2d"></a>
- **M04-CAP-SPECIALTY-2b349fae1deb4e2d**: Sleep and Behavioral Health
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-d8e4d0a16823f581"></a>
- **M04-CAP-SPECIALTY-d8e4d0a16823f581**: Severe Mental Illness
  Origin: original 4850, original 5175

<a id="M04-CAP-SPECIALTY-3f303b53824169d7"></a>
- **M04-CAP-SPECIALTY-3f303b53824169d7**: School Mental Health
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-f82b0c8e67e64e46"></a>
- **M04-CAP-SPECIALTY-f82b0c8e67e64e46**: Family and Social Support
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-a5b3ec0948bc5df7"></a>
- **M04-CAP-SPECIALTY-a5b3ec0948bc5df7**: Medical-Psychiatric Comorbidity
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-994d35e394c3d576"></a>
- **M04-CAP-SPECIALTY-994d35e394c3d576**: Adolescent Substance-related Health
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-c2c6e6635c9e991e"></a>
- **M04-CAP-SPECIALTY-c2c6e6635c9e991e**: Telecare
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-a9c2e016c4aabf01"></a>
- **M04-CAP-SPECIALTY-a9c2e016c4aabf01**: Remote Assessment
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-3552ff81de7774a2"></a>
- **M04-CAP-SPECIALTY-3552ff81de7774a2**: Telepsychiatry
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-4815497e530578c8"></a>
- **M04-CAP-SPECIALTY-4815497e530578c8**: Privacy-aware Documentation
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-34498f9d61921511"></a>
- **M04-CAP-SPECIALTY-34498f9d61921511**: Unified Mental Health Timeline
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-802a174243da9543"></a>
- **M04-CAP-SPECIALTY-802a174243da9543**: Structured Psychiatric Documentation
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-4a0194ceab69c5e9"></a>
- **M04-CAP-SPECIALTY-4a0194ceab69c5e9**: Psychological Assessment Integration
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-0ac069e31cddf68a"></a>
- **M04-CAP-SPECIALTY-0ac069e31cddf68a**: Therapy Tracking
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-69c4220558686e28"></a>
- **M04-CAP-SPECIALTY-69c4220558686e28**: Functional Outcome Monitoring
  Origin: original 4850, original 5050

<a id="M04-CAP-SPECIALTY-6358a0fc85047d10"></a>
- **M04-CAP-SPECIALTY-6358a0fc85047d10**: Multidisciplinary Coordination
  Origin: original 4850, original 5050

<a id="M04-CAP-SPECIALTY-e3fc5da1096869f3"></a>
- **M04-CAP-SPECIALTY-e3fc5da1096869f3**: Age-aware Privacy
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-5aaeeee0167e67d5"></a>
- **M04-CAP-SPECIALTY-5aaeeee0167e67d5**: Structured Assessment
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-00be82be44656266"></a>
- **M04-CAP-SPECIALTY-00be82be44656266**: Medication Record
  Origin: original 4850, original 5151

<a id="M04-CAP-SPECIALTY-ce7798d3719c7833"></a>
- **M04-CAP-SPECIALTY-ce7798d3719c7833**: Psychological Treatment Record
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-f400dccc576205ce"></a>
- **M04-CAP-SPECIALTY-f400dccc576205ce**: Safety-plan Storage
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-e95b67c195cc3a44"></a>
- **M04-CAP-SPECIALTY-e95b67c195cc3a44**: Privacy Controls
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-ad2be51166ed6b2a"></a>
- **M04-CAP-SPECIALTY-ad2be51166ed6b2a**: Teleconsultation
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-e2a72dbfec022f32"></a>
- **M04-CAP-SPECIALTY-e2a72dbfec022f32**: Medical Record Integration
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-e63ac473fdf70da7"></a>
- **M04-CAP-SPECIALTY-e63ac473fdf70da7**: Advanced Neuropsychology Analytics
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-616d25b51705e610"></a>
- **M04-CAP-SPECIALTY-616d25b51705e610**: Digital Mental Health Monitoring
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-54fde705aa2cbf1b"></a>
- **M04-CAP-SPECIALTY-54fde705aa2cbf1b**: Predictive Clinical Support
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-d32592af6885768a"></a>
- **M04-CAP-SPECIALTY-d32592af6885768a**: School-system Integration
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-34d5f27017af86de"></a>
- **M04-CAP-SPECIALTY-34d5f27017af86de**: International Mental Health Registries
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-86b0590c44799b5b"></a>
- **M04-CAP-SPECIALTY-86b0590c44799b5b**: Mental health is treated as an integrated component of the lifelong EDHT medical record while preserving stricter privacy and access controls for sensitive psychiatric information.
  Origin: original 4850

<a id="M04-CAP-SPECIALTY-a5533b799d37185b"></a>
- **M04-CAP-SPECIALTY-a5533b799d37185b**: Create a continuously updated structured representation of pediatric immune function.
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-3a87e31856ab8441"></a>
- **M04-CAP-SPECIALTY-3a87e31856ab8441**: Infection Phenotype
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-9b6f34486882b9d8"></a>
- **M04-CAP-SPECIALTY-9b6f34486882b9d8**: Autoimmune Phenotype
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-62554bfdf3f460d9"></a>
- **M04-CAP-SPECIALTY-62554bfdf3f460d9**: Autoinflammatory Phenotype
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-8de1093b6d2165b4"></a>
- **M04-CAP-SPECIALTY-8de1093b6d2165b4**: Allergic Phenotype
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-93db56316840db1f"></a>
- **M04-CAP-SPECIALTY-93db56316840db1f**: Lymphoproliferation Context
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-a2eff5446866ecc0"></a>
- **M04-CAP-SPECIALTY-a2eff5446866ecc0**: Growth Context
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-58ea41a37214e864"></a>
- **M04-CAP-SPECIALTY-58ea41a37214e864**: Immunoglobulin Profile
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-cad3fd53507ff05e"></a>
- **M04-CAP-SPECIALTY-cad3fd53507ff05e**: Functional Testing
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-907629fdc9d74f62"></a>
- **M04-CAP-SPECIALTY-907629fdc9d74f62**: Genetic Findings
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-4dbd0639c0e6c0c0"></a>
- **M04-CAP-SPECIALTY-4dbd0639c0e6c0c0**: Treatment Exposure
  Origin: original 5002, original 5175

<a id="M04-CAP-SPECIALTY-0e4ee9d4a189252d"></a>
- **M04-CAP-SPECIALTY-0e4ee9d4a189252d**: Longitudinal Immune Status
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-8e96619c8dca4b93"></a>
- **M04-CAP-SPECIALTY-8e96619c8dca4b93**: Functions:
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-9a21dcadc07dc830"></a>
- **M04-CAP-SPECIALTY-9a21dcadc07dc830**: Baseline Immune Profile
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-ca5423b632528d97"></a>
- **M04-CAP-SPECIALTY-ca5423b632528d97**: Treatment-response Tracking
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-edb4215617c5fdd7"></a>
- **M04-CAP-SPECIALTY-edb4215617c5fdd7**: Immune Deterioration Context
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-91af6ef914fbd8ea"></a>
- **M04-CAP-SPECIALTY-91af6ef914fbd8ea**: Immune Recovery Context
  Origin: original 5002

<a id="M04-CAP-SPECIALTY-55b7aec4ca0eea8e"></a>
- **M04-CAP-SPECIALTY-55b7aec4ca0eea8e**: Coordinate newborn screening, urgent diagnostic assessment and definitive care for severe combined immunodeficiency and related conditions.
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-4b0ed58d450fd553"></a>
- **M04-CAP-SPECIALTY-4b0ed58d450fd553**: Newborn Screening Result
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-4177ef786c4f2cc3"></a>
- **M04-CAP-SPECIALTY-4177ef786c4f2cc3**: Screening Date
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-95391c1209fd6e61"></a>
- **M04-CAP-SPECIALTY-95391c1209fd6e61**: Abnormal Screening Follow-up
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-1701351812cb21f3"></a>
- **M04-CAP-SPECIALTY-1701351812cb21f3**: Lymphocyte Count
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-7b2c2bdf34d606ab"></a>
- **M04-CAP-SPECIALTY-7b2c2bdf34d606ab**: T-cell Assessment
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-20a67db2d0ea13cf"></a>
- **M04-CAP-SPECIALTY-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-bf367e9f3a333124"></a>
- **M04-CAP-SPECIALTY-bf367e9f3a333124**: Genetic Testing
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-09f9b956833ceed0"></a>
- **M04-CAP-SPECIALTY-09f9b956833ceed0**: Infection Prevention Context
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-d6e953c1dd961dee"></a>
- **M04-CAP-SPECIALTY-d6e953c1dd961dee**: Isolation Precaution Context
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-8239771b51f1a01d"></a>
- **M04-CAP-SPECIALTY-8239771b51f1a01d**: Vaccine Safety Context
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-9f6867087cedc081"></a>
- **M04-CAP-SPECIALTY-9f6867087cedc081**: Immunoglobulin Replacement
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-875716322614072c"></a>
- **M04-CAP-SPECIALTY-875716322614072c**: Gene Therapy Context
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-767fb03c96d52ea8"></a>
- **M04-CAP-SPECIALTY-767fb03c96d52ea8**: Definitive Treatment
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-29547c8b6cbdd7e8"></a>
- **M04-CAP-SPECIALTY-29547c8b6cbdd7e8**: Immune Reconstitution
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-bbf2edbbfacad60e"></a>
- **M04-CAP-SPECIALTY-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-023ff684b6f24583"></a>
- **M04-CAP-SPECIALTY-023ff684b6f24583**: Abnormal Screen Escalation
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-0d248e3d64c562ea"></a>
- **M04-CAP-SPECIALTY-0d248e3d64c562ea**: Follow-up Completion Tracking
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-98027cc6ce065e7f"></a>
- **M04-CAP-SPECIALTY-98027cc6ce065e7f**: Live-vaccine Safety Alert
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-73b064fe0671c95c"></a>
- **M04-CAP-SPECIALTY-73b064fe0671c95c**: Infection Risk Context
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-ddc321bb3d290ade"></a>
- **M04-CAP-SPECIALTY-ddc321bb3d290ade**: Emergency Specialist Referral
  Origin: original 5007

<a id="M04-CAP-SPECIALTY-d9abee205ad082e0"></a>
- **M04-CAP-SPECIALTY-d9abee205ad082e0**: Provide the unified longitudinal architecture for pediatric rheumatology, systemic autoimmune disease and chronic inflammatory disorders across EDHT.
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-3a1739927124d9e2"></a>
- **M04-CAP-SPECIALTY-3a1739927124d9e2**: Arthritis
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-838390b8d3028d11"></a>
- **M04-CAP-SPECIALTY-838390b8d3028d11**: Myositis
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-2f471182a8575fad"></a>
- **M04-CAP-SPECIALTY-2f471182a8575fad**: Autoinflammatory Disease Context
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-9b1651a688938606"></a>
- **M04-CAP-SPECIALTY-9b1651a688938606**: Musculoskeletal Inflammation
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-45102e6653c410c0"></a>
- **M04-CAP-SPECIALTY-45102e6653c410c0**: Systemic Disease Activity
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-65a514f0dd5a0d6c"></a>
- **M04-CAP-SPECIALTY-65a514f0dd5a0d6c**: Organ Involvement
  Origin: original 5026, original 5050

<a id="M04-CAP-SPECIALTY-3186b1d6891f0f94"></a>
- **M04-CAP-SPECIALTY-3186b1d6891f0f94**: Immunomodulatory Therapy
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-eeb966204b23d601"></a>
- **M04-CAP-SPECIALTY-eeb966204b23d601**: Pain and Fatigue
  Origin: original 5026, original 5050

<a id="M04-CAP-SPECIALTY-6d7d134d0bc697fc"></a>
- **M04-CAP-SPECIALTY-6d7d134d0bc697fc**: Growth and Development
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-1a099d01b7239f24"></a>
- **M04-CAP-SPECIALTY-1a099d01b7239f24**: Transition to Adult Rheumatology
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-44a03b04b389b9ff"></a>
- **M04-CAP-SPECIALTY-44a03b04b389b9ff**: Infusion History
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-228b18d13e8b34f1"></a>
- **M04-CAP-SPECIALTY-228b18d13e8b34f1**: Procedures
  Origin: original 5026

<a id="M04-CAP-SPECIALTY-f7ca9967b2c9090e"></a>
- **M04-CAP-SPECIALTY-f7ca9967b2c9090e**: Provide comprehensive longitudinal management of juvenile idiopathic arthritis.
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-fd590a4f444d5287"></a>
- **M04-CAP-SPECIALTY-fd590a4f444d5287**: JIA Classification Context
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-52cd66bd822f8935"></a>
- **M04-CAP-SPECIALTY-52cd66bd822f8935**: Disease Onset
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-3179d3ca56473626"></a>
- **M04-CAP-SPECIALTY-3179d3ca56473626**: Active Joint Count
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-4f15fc856574fe7c"></a>
- **M04-CAP-SPECIALTY-4f15fc856574fe7c**: Limited Joint Count
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-746379730cbccbff"></a>
- **M04-CAP-SPECIALTY-746379730cbccbff**: Uveitis Risk Context
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-48a840700bbe08a8"></a>
- **M04-CAP-SPECIALTY-48a840700bbe08a8**: Intra-articular Therapy Context
  Origin: original 5028

<a id="M04-CAP-SPECIALTY-b34ae35ccb89659b"></a>
- **M04-CAP-SPECIALTY-b34ae35ccb89659b**: Flare
  Origin: original 5028, original 5031

<a id="M04-CAP-SPECIALTY-ecbff89ecb675bf7"></a>
- **M04-CAP-SPECIALTY-ecbff89ecb675bf7**: Create an anatomical longitudinal map of joint and periarticular inflammatory disease.
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-e00a34c54f1168ef"></a>
- **M04-CAP-SPECIALTY-e00a34c54f1168ef**: Joint-by-Joint Mapping
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-e4f590982890fc1e"></a>
- **M04-CAP-SPECIALTY-e4f590982890fc1e**: Restricted Movement
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-9bcc7845d9d6b44e"></a>
- **M04-CAP-SPECIALTY-9bcc7845d9d6b44e**: Effusion Context
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-2d2e0cc23c9ee9f0"></a>
- **M04-CAP-SPECIALTY-2d2e0cc23c9ee9f0**: Dactylitis Context
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-97a156eadd3165b6"></a>
- **M04-CAP-SPECIALTY-97a156eadd3165b6**: Tendon Involvement
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-a2e99a7b1de483d8"></a>
- **M04-CAP-SPECIALTY-a2e99a7b1de483d8**: Laterality
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-6b97ceb64c1fa0a3"></a>
- **M04-CAP-SPECIALTY-6b97ceb64c1fa0a3**: Imaging Correlation
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-3e7c8f5567536740"></a>
- **M04-CAP-SPECIALTY-3e7c8f5567536740**: Injection History
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-2fba0824835eb85e"></a>
- **M04-CAP-SPECIALTY-2fba0824835eb85e**: Surgical Context
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-841c259583889600"></a>
- **M04-CAP-SPECIALTY-841c259583889600**: Interactive Joint Map
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-d480acb6e90ad399"></a>
- **M04-CAP-SPECIALTY-d480acb6e90ad399**: Active/Inactive Joint Timeline
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-588bcb2216ead73d"></a>
- **M04-CAP-SPECIALTY-588bcb2216ead73d**: Imaging Overlay
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-c9dd7e28fd1cd391"></a>
- **M04-CAP-SPECIALTY-c9dd7e28fd1cd391**: Treatment Overlay
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-482d7cfd9d9af70d"></a>
- **M04-CAP-SPECIALTY-482d7cfd9d9af70d**: Functional Impact
  Origin: original 5029

<a id="M04-CAP-SPECIALTY-d02fa0dac1d73c82"></a>
- **M04-CAP-SPECIALTY-d02fa0dac1d73c82**: Coordinate complex multisystem pediatric systemic lupus erythematosus care.
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-18dd6f05f18f4067"></a>
- **M04-CAP-SPECIALTY-18dd6f05f18f4067**: Disease Manifestations
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-15b311373ac26ff9"></a>
- **M04-CAP-SPECIALTY-15b311373ac26ff9**: Skin
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-cc417cd0bdd3e9da"></a>
- **M04-CAP-SPECIALTY-cc417cd0bdd3e9da**: Joints
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-c8936c103f5b3f9d"></a>
- **M04-CAP-SPECIALTY-c8936c103f5b3f9d**: Neurological Context
  Origin: original 5031, original 5039

<a id="M04-CAP-SPECIALTY-5ab75b4d87d961ee"></a>
- **M04-CAP-SPECIALTY-5ab75b4d87d961ee**: Hematological Context
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-2c5e69c344470a6b"></a>
- **M04-CAP-SPECIALTY-2c5e69c344470a6b**: Cardiac Context
  Origin: original 5031, original 5034

<a id="M04-CAP-SPECIALTY-58feacc4b9461a19"></a>
- **M04-CAP-SPECIALTY-58feacc4b9461a19**: Pulmonary Context
  Origin: original 5031, original 5033, original 5034, original 5039

<a id="M04-CAP-SPECIALTY-cce8ea82ff2909d5"></a>
- **M04-CAP-SPECIALTY-cce8ea82ff2909d5**: Damage Context
  Origin: original 5031

<a id="M04-CAP-SPECIALTY-96815558c65bc93b"></a>
- **M04-CAP-SPECIALTY-96815558c65bc93b**: Create a shared longitudinal pathway for renal involvement in pediatric lupus.
  Origin: original 5032

<a id="M04-CAP-SPECIALTY-87f11abc863263ad"></a>
- **M04-CAP-SPECIALTY-87f11abc863263ad**: Renal Symptoms
  Origin: original 5032

<a id="M04-CAP-SPECIALTY-0c39793dde0e708d"></a>
- **M04-CAP-SPECIALTY-0c39793dde0e708d**: Renal Biopsy Context
  Origin: original 5032

<a id="M04-CAP-SPECIALTY-01285763f35727ed"></a>
- **M04-CAP-SPECIALTY-01285763f35727ed**: Kidney Outcome
  Origin: original 5032

<a id="M04-CAP-SPECIALTY-dba9740524940f80"></a>
- **M04-CAP-SPECIALTY-dba9740524940f80**: Systemic lupus activity and renal disease activity remain synchronized within one timeline.
  Origin: original 5032

<a id="M04-CAP-SPECIALTY-980186459745107b"></a>
- **M04-CAP-SPECIALTY-980186459745107b**: Provide longitudinal multidisciplinary care for juvenile inflammatory myopathies.
  Origin: original 5033

<a id="M04-CAP-SPECIALTY-d6f80e6ef023ad1b"></a>
- **M04-CAP-SPECIALTY-d6f80e6ef023ad1b**: Autoantibody Context
  Origin: original 5033, original 5035

<a id="M04-CAP-SPECIALTY-5e9a447b25378651"></a>
- **M04-CAP-SPECIALTY-5e9a447b25378651**: MRI Context
  Origin: original 5033

<a id="M04-CAP-SPECIALTY-012ef41aa2d40a53"></a>
- **M04-CAP-SPECIALTY-012ef41aa2d40a53**: Muscle Imaging
  Origin: original 5033

<a id="M04-CAP-SPECIALTY-e651b503ed8799b6"></a>
- **M04-CAP-SPECIALTY-e651b503ed8799b6**: Swallowing Context
  Origin: original 5033

<a id="M04-CAP-SPECIALTY-122b7e25a6b4c43e"></a>
- **M04-CAP-SPECIALTY-122b7e25a6b4c43e**: Calcinosis Context
  Origin: original 5033

<a id="M04-CAP-SPECIALTY-0537135aca1fea08"></a>
- **M04-CAP-SPECIALTY-0537135aca1fea08**: Coordinate pediatric localized scleroderma and systemic sclerosis spectrum care.
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-9659e7c327f43c4e"></a>
- **M04-CAP-SPECIALTY-9659e7c327f43c4e**: Anatomical Distribution
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-458052e502e78beb"></a>
- **M04-CAP-SPECIALTY-458052e502e78beb**: Skin Change Timeline
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-811d985580ddb3d6"></a>
- **M04-CAP-SPECIALTY-811d985580ddb3d6**: Joint Function
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-e09c794604c2454a"></a>
- **M04-CAP-SPECIALTY-e09c794604c2454a**: Contracture Context
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-e09c1ba8e37695cd"></a>
- **M04-CAP-SPECIALTY-e09c1ba8e37695cd**: Gastrointestinal Context
  Origin: original 5034

<a id="M04-CAP-SPECIALTY-744b229f82cf5b84"></a>
- **M04-CAP-SPECIALTY-744b229f82cf5b84**: Provide longitudinal assessment of pediatric primary and secondary vasculitic disorders.
  Origin: original 5035

<a id="M04-CAP-SPECIALTY-c30370207d57459c"></a>
- **M04-CAP-SPECIALTY-c30370207d57459c**: Vessel-size Context
  Origin: original 5035

<a id="M04-CAP-SPECIALTY-9ef7c97b14e4ed43"></a>
- **M04-CAP-SPECIALTY-9ef7c97b14e4ed43**: Ocular Context
  Origin: original 5035

<a id="M04-CAP-SPECIALTY-f3a6fa377b21832d"></a>
- **M04-CAP-SPECIALTY-f3a6fa377b21832d**: Biopsy Context
  Origin: original 5035

<a id="M04-CAP-SPECIALTY-1d65210795905d48"></a>
- **M04-CAP-SPECIALTY-1d65210795905d48**: Recurrence
  Origin: original 5035

<a id="M04-CAP-SPECIALTY-da38696201b4c193"></a>
- **M04-CAP-SPECIALTY-da38696201b4c193**: Track evolving pediatric autoimmune phenotypes that do not initially fit a single established disease category.
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-d89a12d68074b568"></a>
- **M04-CAP-SPECIALTY-d89a12d68074b568**: Symptom Timeline
  Origin: original 5039, original 5151

<a id="M04-CAP-SPECIALTY-de066f05e36e956f"></a>
- **M04-CAP-SPECIALTY-de066f05e36e956f**: Joint Manifestations
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-a3fa423cc3792739"></a>
- **M04-CAP-SPECIALTY-a3fa423cc3792739**: Muscle Manifestations
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-3c5a3c4cd0e5d807"></a>
- **M04-CAP-SPECIALTY-3c5a3c4cd0e5d807**: Diagnostic Evolution
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-618d7191841789b1"></a>
- **M04-CAP-SPECIALTY-618d7191841789b1**: Final Classification Context
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-76fea83b3c8e159b"></a>
- **M04-CAP-SPECIALTY-76fea83b3c8e159b**: The platform preserves diagnostic uncertainty and evolution rather than forcing premature classification.
  Origin: original 5039

<a id="M04-CAP-SPECIALTY-374ab5618b69bb7d"></a>
- **M04-CAP-SPECIALTY-374ab5618b69bb7d**: Represent pain, fatigue and real-world functional burden alongside inflammatory disease activity.
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-02565a4c63b27cc3"></a>
- **M04-CAP-SPECIALTY-02565a4c63b27cc3**: Pain Location
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-1d24f39955196a81"></a>
- **M04-CAP-SPECIALTY-1d24f39955196a81**: Pain Intensity
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-5a94de06641cb88d"></a>
- **M04-CAP-SPECIALTY-5a94de06641cb88d**: Pain Pattern
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-0b35ea00d95c24c2"></a>
- **M04-CAP-SPECIALTY-0b35ea00d95c24c2**: Sleep Context
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-3f55be8669231626"></a>
- **M04-CAP-SPECIALTY-3f55be8669231626**: Psychological Context
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-41786930a15db451"></a>
- **M04-CAP-SPECIALTY-41786930a15db451**: Disease Activity Correlation
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-2d8f60f48d76c293"></a>
- **M04-CAP-SPECIALTY-2d8f60f48d76c293**: Pain Management
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-977118b2f194ab0c"></a>
- **M04-CAP-SPECIALTY-977118b2f194ab0c**: Longitudinal Function
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-9d120874fb5f9071"></a>
- **M04-CAP-SPECIALTY-9d120874fb5f9071**: Symptoms and functional impairment remain visible even when inflammatory markers are normal or disease activity is low.
  Origin: original 5043

<a id="M04-CAP-SPECIALTY-98ead316ff5efc02"></a>
- **M04-CAP-SPECIALTY-98ead316ff5efc02**: Pediatric Rheumatology
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-de4a4eb508909b1a"></a>
- **M04-CAP-SPECIALTY-de4a4eb508909b1a**: Digital Joint Mapping
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-831addb2297491af"></a>
- **M04-CAP-SPECIALTY-831addb2297491af**: Uveitis Surveillance
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-c1d09be5f04b9d7a"></a>
- **M04-CAP-SPECIALTY-c1d09be5f04b9d7a**: Systemic Sclerosis
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-386f1ecfacfe0f42"></a>
- **M04-CAP-SPECIALTY-386f1ecfacfe0f42**: Kawasaki Disease
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-60810d0796aa79f4"></a>
- **M04-CAP-SPECIALTY-60810d0796aa79f4**: IgA Vasculitis
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-36c8c61ec8923da6"></a>
- **M04-CAP-SPECIALTY-36c8c61ec8923da6**: Sjögren Syndrome
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-35918c06866105d7"></a>
- **M04-CAP-SPECIALTY-35918c06866105d7**: Mixed Connective Tissue Disease
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-42f46971ba414b40"></a>
- **M04-CAP-SPECIALTY-42f46971ba414b40**: Juvenile Spondyloarthritis
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-ccf492499db53f20"></a>
- **M04-CAP-SPECIALTY-ccf492499db53f20**: Psoriatic Arthritis
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-7665b15ca2b9d4fa"></a>
- **M04-CAP-SPECIALTY-7665b15ca2b9d4fa**: Raynaud Phenomenon
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-91dcb171a42a5657"></a>
- **M04-CAP-SPECIALTY-91dcb171a42a5657**: Growth and Bone Health
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-08d8129901c7982a"></a>
- **M04-CAP-SPECIALTY-08d8129901c7982a**: Transition Care
  Origin: original 5050, original 5175

<a id="M04-CAP-SPECIALTY-0b85f58122c7099f"></a>
- **M04-CAP-SPECIALTY-0b85f58122c7099f**: Rheumatology Digital Twin
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-7b3aec9b5e5f0fde"></a>
- **M04-CAP-SPECIALTY-7b3aec9b5e5f0fde**: Digital Joint Map
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-ce72405e3e979740"></a>
- **M04-CAP-SPECIALTY-ce72405e3e979740**: Laboratory Intelligence
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-321fdc40042039f1"></a>
- **M04-CAP-SPECIALTY-321fdc40042039f1**: Autoimmune Passport
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-7961f59c140f3e8c"></a>
- **M04-CAP-SPECIALTY-7961f59c140f3e8c**: Unified Rheumatology Timeline
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-6e21015595942a89"></a>
- **M04-CAP-SPECIALTY-6e21015595942a89**: Multisystem Disease Mapping
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-a59206c2dfde276d"></a>
- **M04-CAP-SPECIALTY-a59206c2dfde276d**: Joint Activity Tracking
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-45d5e79b3b8244ce"></a>
- **M04-CAP-SPECIALTY-45d5e79b3b8244ce**: Organ Involvement Registry
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-406118b3de6a2a33"></a>
- **M04-CAP-SPECIALTY-406118b3de6a2a33**: Laboratory and Imaging Integration
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-f72dcf0fa589b678"></a>
- **M04-CAP-SPECIALTY-f72dcf0fa589b678**: Digital Joint Record
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-812aec1a9e93dc22"></a>
- **M04-CAP-SPECIALTY-812aec1a9e93dc22**: Laboratory Timeline
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-a85e84b68fa9ba27"></a>
- **M04-CAP-SPECIALTY-a85e84b68fa9ba27**: Medication/Immunosuppression Record
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-bbaf61334f9dc180"></a>
- **M04-CAP-SPECIALTY-bbaf61334f9dc180**: Vaccination Integration
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-98e8177066c15a13"></a>
- **M04-CAP-SPECIALTY-98e8177066c15a13**: Advanced Rheumatology AI
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-54da6f9be9c99c38"></a>
- **M04-CAP-SPECIALTY-54da6f9be9c99c38**: Systemic Disease Digital Twin
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-2f77951ebb54bd8f"></a>
- **M04-CAP-SPECIALTY-2f77951ebb54bd8f**: Imaging Analytics
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-70686e82902b1833"></a>
- **M04-CAP-SPECIALTY-70686e82902b1833**: Remote Disease Activity Monitoring
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-7fd4f77519caa46b"></a>
- **M04-CAP-SPECIALTY-7fd4f77519caa46b**: Wearable Functional Monitoring
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-af35de7895ec7321"></a>
- **M04-CAP-SPECIALTY-af35de7895ec7321**: Genotype-Phenotype Intelligence
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-27d83513e1c4be73"></a>
- **M04-CAP-SPECIALTY-27d83513e1c4be73**: International Pediatric Rheumatology Registries
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-c5f40fec905e9d0d"></a>
- **M04-CAP-SPECIALTY-c5f40fec905e9d0d**: Pediatric rheumatology is modeled as multisystem medicine connected to immunology, nephrology, ophthalmology, dermatology, cardiology, pulmonology, neurology, rehabilitation and lifelong adult care.
  Origin: original 5050

<a id="M04-CAP-SPECIALTY-ba62fe62301c47f9"></a>
- **M04-CAP-SPECIALTY-ba62fe62301c47f9**: Provide a unified longitudinal architecture for pediatric and adolescent mental health across prevention, screening, assessment, treatment, crisis care, rehabilitation and transition into adult services.
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-a99d30a4f8535a1f"></a>
- **M04-CAP-SPECIALTY-a99d30a4f8535a1f**: Clinical Psychology
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-4360a8760b29513b"></a>
- **M04-CAP-SPECIALTY-4360a8760b29513b**: Behavioral Health
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-c93edb6f8db59749"></a>
- **M04-CAP-SPECIALTY-c93edb6f8db59749**: Neurodevelopmental Mental Health
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-9050086848bdc172"></a>
- **M04-CAP-SPECIALTY-9050086848bdc172**: Emotional Regulation
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-30cc8661dd98b9ed"></a>
- **M04-CAP-SPECIALTY-30cc8661dd98b9ed**: Trauma-related Disorders
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-8b6073cfe166f924"></a>
- **M04-CAP-SPECIALTY-8b6073cfe166f924**: Obsessive-Compulsive Spectrum
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-3f120f7031e353fa"></a>
- **M04-CAP-SPECIALTY-3f120f7031e353fa**: Eating Disorder Context
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-fbb741516964708b"></a>
- **M04-CAP-SPECIALTY-fbb741516964708b**: Psychotic Disorders
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-2bbe46610be0b69d"></a>
- **M04-CAP-SPECIALTY-2bbe46610be0b69d**: Sleep-Psychiatry Context
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-7abe998f34b56aaa"></a>
- **M04-CAP-SPECIALTY-7abe998f34b56aaa**: Substance-use Context
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-918b6465e2e0edfa"></a>
- **M04-CAP-SPECIALTY-918b6465e2e0edfa**: School Function
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-99edf112accc73ae"></a>
- **M04-CAP-SPECIALTY-99edf112accc73ae**: Family Function
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-74bb2ffc32d68dc6"></a>
- **M04-CAP-SPECIALTY-74bb2ffc32d68dc6**: Screening Assessments
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-055b4e4f7f3ca0f5"></a>
- **M04-CAP-SPECIALTY-055b4e4f7f3ca0f5**: Structured Clinical Assessments
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-a5abdb9ce3ea0d9d"></a>
- **M04-CAP-SPECIALTY-a5abdb9ce3ea0d9d**: Treatment Plans
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-7bf44d6f2c07e7d7"></a>
- **M04-CAP-SPECIALTY-7bf44d6f2c07e7d7**: Crisis History
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-d08bcd1528f93e38"></a>
- **M04-CAP-SPECIALTY-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-2f32360d7cc0a194"></a>
- **M04-CAP-SPECIALTY-2f32360d7cc0a194**: Data Model:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-8eb1decc92fcf777"></a>
- **M04-CAP-SPECIALTY-8eb1decc92fcf777**: MentalHealthEpisode
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-34406fdef3d3e7eb"></a>
- **M04-CAP-SPECIALTY-34406fdef3d3e7eb**: Symptom
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-455ef3285622cf7d"></a>
- **M04-CAP-SPECIALTY-455ef3285622cf7d**: Assessment
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-2963c0c33f9b2b0e"></a>
- **M04-CAP-SPECIALTY-2963c0c33f9b2b0e**: RiskAssessment
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-daf8e58134279bda"></a>
- **M04-CAP-SPECIALTY-daf8e58134279bda**: TherapyEpisode
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-f5fbb19867f94cb8"></a>
- **M04-CAP-SPECIALTY-f5fbb19867f94cb8**: MedicationEpisode
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-195fb09abf958358"></a>
- **M04-CAP-SPECIALTY-195fb09abf958358**: CrisisEpisode
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-9c1c88f597f92c16"></a>
- **M04-CAP-SPECIALTY-9c1c88f597f92c16**: FunctionalStatus
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-94883871aa83c9ae"></a>
- **M04-CAP-SPECIALTY-94883871aa83c9ae**: SchoolContext
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-5640167168b12b96"></a>
- **M04-CAP-SPECIALTY-5640167168b12b96**: FamilyContext
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-e5d112478b5f04ea"></a>
- **M04-CAP-SPECIALTY-e5d112478b5f04ea**: FollowUpPlan
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-d0c148d59fb3a657"></a>
- **M04-CAP-SPECIALTY-d0c148d59fb3a657**: Clinical Workflows:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-6062fc4ad93f7f9e"></a>
- **M04-CAP-SPECIALTY-6062fc4ad93f7f9e**: Screening → Assessment → Diagnosis → Care Plan
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-87f4af9b082cf146"></a>
- **M04-CAP-SPECIALTY-87f4af9b082cf146**: Referral → Specialist Review → Treatment
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-1eee67091adf98d2"></a>
- **M04-CAP-SPECIALTY-1eee67091adf98d2**: Crisis → Safety Assessment → Escalation
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-1fb993255b335230"></a>
- **M04-CAP-SPECIALTY-1fb993255b335230**: Treatment → Monitoring → Outcome
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-4a58c774919c7946"></a>
- **M04-CAP-SPECIALTY-4a58c774919c7946**: Pediatric Care → Transition Planning → Adult Care
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-77f048e378962928"></a>
- **M04-CAP-SPECIALTY-77f048e378962928**: Automation:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-c359438731a4c20a"></a>
- **M04-CAP-SPECIALTY-c359438731a4c20a**: Follow-up Scheduling
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-77b9c856fcb411b6"></a>
- **M04-CAP-SPECIALTY-77b9c856fcb411b6**: Assessment Due Detection
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-992b830a3b8da560"></a>
- **M04-CAP-SPECIALTY-992b830a3b8da560**: Treatment-plan Review
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-05ca296e815070bc"></a>
- **M04-CAP-SPECIALTY-05ca296e815070bc**: Transition Readiness Tracking
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-d3e66e9cbbbb8d24"></a>
- **M04-CAP-SPECIALTY-d3e66e9cbbbb8d24**: Alerts:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-97c78bc159c909a1"></a>
- **M04-CAP-SPECIALTY-97c78bc159c909a1**: Clinician-defined Urgent Review
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-7d4c16470b5d7592"></a>
- **M04-CAP-SPECIALTY-7d4c16470b5d7592**: Significant Documented Deterioration
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-dcebdf7f6f2034b6"></a>
- **M04-CAP-SPECIALTY-dcebdf7f6f2034b6**: Missed High-priority Follow-up
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-affb0fa92c1a22b4"></a>
- **M04-CAP-SPECIALTY-affb0fa92c1a22b4**: Medication Monitoring Gap
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-94581410568a9830"></a>
- **M04-CAP-SPECIALTY-94581410568a9830**: Crisis-plan Review Due
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-290ee40abd88fc47"></a>
- **M04-CAP-SPECIALTY-290ee40abd88fc47**: Symptom Journaling
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-8b883f35c2426937"></a>
- **M04-CAP-SPECIALTY-8b883f35c2426937**: Appointment Preparation
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-0f49b0b6b64e2848"></a>
- **M04-CAP-SPECIALTY-0f49b0b6b64e2848**: Clinician-approved Educational Content
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-f808d9739fbfab24"></a>
- **M04-CAP-SPECIALTY-f808d9739fbfab24**: Treatment-plan Visibility
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-41d988e402b1f371"></a>
- **M04-CAP-SPECIALTY-41d988e402b1f371**: Consent-aware Guardian Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-dc20bc176bdee4c8"></a>
- **M04-CAP-SPECIALTY-dc20bc176bdee4c8**: Permissions:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-bc7569cac34a41dd"></a>
- **M04-CAP-SPECIALTY-bc7569cac34a41dd**: Pediatric Patient Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-212c0dd343840434"></a>
- **M04-CAP-SPECIALTY-212c0dd343840434**: Guardian Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-8f8d854043c86203"></a>
- **M04-CAP-SPECIALTY-8f8d854043c86203**: Clinician Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-2ba1bde7e2417ba3"></a>
- **M04-CAP-SPECIALTY-2ba1bde7e2417ba3**: Mental-health Specialist Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-53fdcd3a56f144a6"></a>
- **M04-CAP-SPECIALTY-53fdcd3a56f144a6**: Emergency Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-56330f1fe7b76f33"></a>
- **M04-CAP-SPECIALTY-56330f1fe7b76f33**: Sensitive-data Segmentation
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-d9209d12def12ae9"></a>
- **M04-CAP-SPECIALTY-d9209d12def12ae9**: Audit:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-c1138ccb6788e616"></a>
- **M04-CAP-SPECIALTY-c1138ccb6788e616**: Record Access
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-45d9eba5a0215ad3"></a>
- **M04-CAP-SPECIALTY-45d9eba5a0215ad3**: Record Modification
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-d83d148729abcf0f"></a>
- **M04-CAP-SPECIALTY-d83d148729abcf0f**: Consent Changes
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-e89241e07ced79b8"></a>
- **M04-CAP-SPECIALTY-e89241e07ced79b8**: Guardian-access Changes
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-5d5e5c355649f372"></a>
- **M04-CAP-SPECIALTY-5d5e5c355649f372**: Emergency-access Events
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-77fb8ef2bf85b427"></a>
- **M04-CAP-SPECIALTY-77fb8ef2bf85b427**: Interoperability:
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-8cef79dd19125e68"></a>
- **M04-CAP-SPECIALTY-8cef79dd19125e68**: FHIR-aligned Mental Health Data
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-3464207120f1db8a"></a>
- **M04-CAP-SPECIALTY-3464207120f1db8a**: Primary Care
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-57eb71ab56f1077b"></a>
- **M04-CAP-SPECIALTY-57eb71ab56f1077b**: School Health Context
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-29625f870073843c"></a>
- **M04-CAP-SPECIALTY-29625f870073843c**: Longitudinal Summary
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-7da3f1171d69a59d"></a>
- **M04-CAP-SPECIALTY-7da3f1171d69a59d**: Symptom Trend Support
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-a1adcdac60b90b59"></a>
- **M04-CAP-SPECIALTY-a1adcdac60b90b59**: Clinical-data Organization
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-e484fc2e57e6b757"></a>
- **M04-CAP-SPECIALTY-e484fc2e57e6b757**: AI Safety:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-c34b58ae1c192bc1"></a>
- **M04-CAP-SPECIALTY-c34b58ae1c192bc1**: AI cannot independently establish psychiatric diagnosis, prescribe medication, determine involuntary treatment or replace emergency clinical assessment.
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-920a1d230724ecf1"></a>
- **M04-CAP-SPECIALTY-920a1d230724ecf1**: MVP:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-1d213bc7bdb796a0"></a>
- **M04-CAP-SPECIALTY-1d213bc7bdb796a0**: Assessment Record
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-3283a4ddae746744"></a>
- **M04-CAP-SPECIALTY-3283a4ddae746744**: Therapy Record
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-d6b46ccffdb411fa"></a>
- **M04-CAP-SPECIALTY-d6b46ccffdb411fa**: Crisis/Safety Record
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-0be00b0de4c7cc6e"></a>
- **M04-CAP-SPECIALTY-0be00b0de4c7cc6e**: Consent
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-983acd8632b63913"></a>
- **M04-CAP-SPECIALTY-983acd8632b63913**: Audit
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-e89fda53b14e31a7"></a>
- **M04-CAP-SPECIALTY-e89fda53b14e31a7**: Expansion:
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-0d49c5fcc66c37b9"></a>
- **M04-CAP-SPECIALTY-0d49c5fcc66c37b9**: Advanced Outcome Analytics
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-12f9c98ed20660ed"></a>
- **M04-CAP-SPECIALTY-12f9c98ed20660ed**: Digital Phenotyping Research
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-e8f0730b4edd2baf"></a>
- **M04-CAP-SPECIALTY-e8f0730b4edd2baf**: Multimodal AI
  Origin: original 5151

<a id="M04-CAP-SPECIALTY-a79a53d65529674f"></a>
- **M04-CAP-SPECIALTY-a79a53d65529674f**: Population Mental-health Analytics
  Origin: original 5151, original 5175

<a id="M04-CAP-SPECIALTY-09d8c918313e488b"></a>
- **M04-CAP-SPECIALTY-09d8c918313e488b**: Serve as the master orchestration layer connecting pediatric psychiatry, psychology, behavioral health and neurodevelopment with the broader EDHT ecosystem.
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-9ceeb65fe247f902"></a>
- **M04-CAP-SPECIALTY-9ceeb65fe247f902**: Mental Health Screening
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-58dc00ccd09de1d3"></a>
- **M04-CAP-SPECIALTY-58dc00ccd09de1d3**: Anxiety
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-9f8a8901a1b3b5aa"></a>
- **M04-CAP-SPECIALTY-9f8a8901a1b3b5aa**: Depression
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-3b4dcdc59a2f6f37"></a>
- **M04-CAP-SPECIALTY-3b4dcdc59a2f6f37**: OCD
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-a791aa32e1f36dc1"></a>
- **M04-CAP-SPECIALTY-a791aa32e1f36dc1**: Trauma-related Care
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-9fa84fe840eeef37"></a>
- **M04-CAP-SPECIALTY-9fa84fe840eeef37**: Autism-related Mental Health
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-12b6c9db08e2f072"></a>
- **M04-CAP-SPECIALTY-12b6c9db08e2f072**: Eating-related Psychiatry
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-926974e7424daa49"></a>
- **M04-CAP-SPECIALTY-926974e7424daa49**: Sleep-Psychiatry
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-934fd969f3955e1f"></a>
- **M04-CAP-SPECIALTY-934fd969f3955e1f**: Substance-use Care
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-8260fd411d673a3b"></a>
- **M04-CAP-SPECIALTY-8260fd411d673a3b**: Inpatient Psychiatry
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-e9b5c20a4b0cd241"></a>
- **M04-CAP-SPECIALTY-e9b5c20a4b0cd241**: Consent and Confidentiality
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-60e1c7608a31e9de"></a>
- **M04-CAP-SPECIALTY-60e1c7608a31e9de**: Digital Twin Components:
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-00e034434245d82a"></a>
- **M04-CAP-SPECIALTY-00e034434245d82a**: Mental-health Timeline
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-50837e09518df7e8"></a>
- **M04-CAP-SPECIALTY-50837e09518df7e8**: Symptom Trajectory
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-bb1f33938f899a6e"></a>
- **M04-CAP-SPECIALTY-bb1f33938f899a6e**: Medication Response
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-1d4af67e0816bb7f"></a>
- **M04-CAP-SPECIALTY-1d4af67e0816bb7f**: Mental Health Passport:
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-bc6faa9f8cef98df"></a>
- **M04-CAP-SPECIALTY-bc6faa9f8cef98df**: Clinically Confirmed Diagnoses
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-a46c73c34db799e5"></a>
- **M04-CAP-SPECIALTY-a46c73c34db799e5**: Current Medication
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-98d6e3484e041ce5"></a>
- **M04-CAP-SPECIALTY-98d6e3484e041ce5**: Significant Medication Reactions
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-0a0316b0f7b7b489"></a>
- **M04-CAP-SPECIALTY-0a0316b0f7b7b489**: Current Care Team
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-0c9b80dfd652ab6c"></a>
- **M04-CAP-SPECIALTY-0c9b80dfd652ab6c**: Clinician-approved Crisis/Safety Information
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-bc560175f5b9014f"></a>
- **M04-CAP-SPECIALTY-bc560175f5b9014f**: Communication Needs
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-b65f4f2738a43616"></a>
- **M04-CAP-SPECIALTY-b65f4f2738a43616**: Relevant Functional Baseline
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-35c9d991c22265f3"></a>
- **M04-CAP-SPECIALTY-35c9d991c22265f3**: Follow-up Requirements
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-ae2f6238dadc8401"></a>
- **M04-CAP-SPECIALTY-ae2f6238dadc8401**: Unified Mental-health Timeline
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-daa7be8430bbeb23"></a>
- **M04-CAP-SPECIALTY-daa7be8430bbeb23**: Granular Permissions
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-1ec3ed25fa556433"></a>
- **M04-CAP-SPECIALTY-1ec3ed25fa556433**: Consent/Assent
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-fa5cac5be72b867d"></a>
- **M04-CAP-SPECIALTY-fa5cac5be72b867d**: Guardian-access Management
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-3b75f6aa59cab1a7"></a>
- **M04-CAP-SPECIALTY-3b75f6aa59cab1a7**: Therapy Coordination
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-289442c728822005"></a>
- **M04-CAP-SPECIALTY-289442c728822005**: Crisis Continuity
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-20c2557700c65249"></a>
- **M04-CAP-SPECIALTY-20c2557700c65249**: Outcome Monitoring
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-84c9f11d93ed5998"></a>
- **M04-CAP-SPECIALTY-84c9f11d93ed5998**: Multidisciplinary Collaboration
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-51e1a3d983c68f0d"></a>
- **M04-CAP-SPECIALTY-51e1a3d983c68f0d**: Developmental Pediatrics
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-a26b96ccea27f821"></a>
- **M04-CAP-SPECIALTY-a26b96ccea27f821**: School Health where authorized
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-acfb2a015f1922d1"></a>
- **M04-CAP-SPECIALTY-acfb2a015f1922d1**: Adult Mental Health
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-6aac672cbf2e01b8"></a>
- **M04-CAP-SPECIALTY-6aac672cbf2e01b8**: AI:
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-f3f93d9e1c04a910"></a>
- **M04-CAP-SPECIALTY-f3f93d9e1c04a910**: Longitudinal Clinical Summary
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-303fa28c4881e06d"></a>
- **M04-CAP-SPECIALTY-303fa28c4881e06d**: Treatment-response Organization
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-acb3f1b2aa40e934"></a>
- **M04-CAP-SPECIALTY-acb3f1b2aa40e934**: Documentation Support
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-5091fe79e84b7b61"></a>
- **M04-CAP-SPECIALTY-5091fe79e84b7b61**: Functional Trend Analysis
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-26e2b27371523ee8"></a>
- **M04-CAP-SPECIALTY-26e2b27371523ee8**: Mental Status
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-498d6b624138a34f"></a>
- **M04-CAP-SPECIALTY-498d6b624138a34f**: Psychotherapy Record
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-7d18455cdd70370a"></a>
- **M04-CAP-SPECIALTY-7d18455cdd70370a**: Crisis/Safety Plan
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-a81ee68e44f062b5"></a>
- **M04-CAP-SPECIALTY-a81ee68e44f062b5**: Confidentiality Controls
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-bd3292699461e203"></a>
- **M04-CAP-SPECIALTY-bd3292699461e203**: Guardian Permissions
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-79b63a83bc7d1c15"></a>
- **M04-CAP-SPECIALTY-79b63a83bc7d1c15**: Audit Trail
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-09fc2f4398081a50"></a>
- **M04-CAP-SPECIALTY-09fc2f4398081a50**: Advanced Mental-health AI
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-7a93387b9d1e233f"></a>
- **M04-CAP-SPECIALTY-7a93387b9d1e233f**: Mental-health Digital Twin
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-5ade1c9858cd4282"></a>
- **M04-CAP-SPECIALTY-5ade1c9858cd4282**: Remote Patient-reported Monitoring
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-d88eebf9e631cb4e"></a>
- **M04-CAP-SPECIALTY-d88eebf9e631cb4e**: Multimodal Outcome Analytics
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-5d2dccc5567b20b5"></a>
- **M04-CAP-SPECIALTY-5d2dccc5567b20b5**: International Outcomes Registries
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-e0059465d95297ad"></a>
- **M04-CAP-SPECIALTY-e0059465d95297ad**: Mental-health information is part of the longitudinal health record but receives stronger privacy, consent and access controls than ordinary clinical data where clinically and legally required.
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-944e3e938f319bf4"></a>
- **M04-CAP-SPECIALTY-944e3e938f319bf4**: Transition Principle:
  Origin: original 5175

<a id="M04-CAP-SPECIALTY-326d9b5aa6f3a59b"></a>
- **M04-CAP-SPECIALTY-326d9b5aa6f3a59b**: The pediatric record supports structured transition into adult mental-health services without automatically transferring information beyond applicable consent and legal requirements.
  Origin: original 5175

## Preserved source metadata

<a id="M04-CAP-SPECIALTY-0b8005822cec405d"></a>
- **M04-CAP-SPECIALTY-0b8005822cec405d**: # Congenital Heart Disease Registry

<a id="M04-CAP-SPECIALTY-4fbeeb87456accf5"></a>
- **M04-CAP-SPECIALTY-4fbeeb87456accf5**: Supports

<a id="M04-CAP-SPECIALTY-5ba74d8fcc7b20cc"></a>
- **M04-CAP-SPECIALTY-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-SPECIALTY-d5232cbd3a326267"></a>
- **M04-CAP-SPECIALTY-d5232cbd3a326267**: Documentation

<a id="M04-CAP-SPECIALTY-6f33acf3afb37064"></a>
- **M04-CAP-SPECIALTY-6f33acf3afb37064**: ---

<a id="M04-CAP-SPECIALTY-2ae16dad972d74b4"></a>
- **M04-CAP-SPECIALTY-2ae16dad972d74b4**: # Pediatric Arrhythmia Registry

<a id="M04-CAP-SPECIALTY-b6d69afb2734ba42"></a>
- **M04-CAP-SPECIALTY-b6d69afb2734ba42**: # Pediatric Heart Failure Registry

<a id="M04-CAP-SPECIALTY-20dcf9e08bfc7cd6"></a>
- **M04-CAP-SPECIALTY-20dcf9e08bfc7cd6**: Tracks

<a id="M04-CAP-SPECIALTY-12f32eef961b170e"></a>
- **M04-CAP-SPECIALTY-12f32eef961b170e**: # Comprehensive Pediatric Cardiology Dashboard

<a id="M04-CAP-SPECIALTY-183a4bc28d4cf8d9"></a>
- **M04-CAP-SPECIALTY-183a4bc28d4cf8d9**: # Pediatric Asthma Registry

<a id="M04-CAP-SPECIALTY-99054e27b301333e"></a>
- **M04-CAP-SPECIALTY-99054e27b301333e**: # Pediatric Cystic Fibrosis Registry

<a id="M04-CAP-SPECIALTY-db355a7e99929018"></a>
- **M04-CAP-SPECIALTY-db355a7e99929018**: # Comprehensive Pediatric Pulmonology Dashboard

<a id="M04-CAP-SPECIALTY-846ed05aa94a265d"></a>
- **M04-CAP-SPECIALTY-846ed05aa94a265d**: # Comprehensive Pediatric Nephrology Dashboard

<a id="M04-CAP-SPECIALTY-0c167dd484e4ebfa"></a>
- **M04-CAP-SPECIALTY-0c167dd484e4ebfa**: # Pediatric Nutrition & Malabsorption Center

<a id="M04-CAP-SPECIALTY-332aadbd56905a1f"></a>
- **M04-CAP-SPECIALTY-332aadbd56905a1f**: # Pediatric IBD Monitoring

<a id="M04-CAP-SPECIALTY-a78e050b27053464"></a>
- **M04-CAP-SPECIALTY-a78e050b27053464**: # Comprehensive Pediatric Gastroenterology Dashboard

<a id="M04-CAP-SPECIALTY-21d94006fa494f95"></a>
- **M04-CAP-SPECIALTY-21d94006fa494f95**: Integrates

<a id="M04-CAP-SPECIALTY-6510c5c511a879bc"></a>
- **M04-CAP-SPECIALTY-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-SPECIALTY-b34f593f0f83a1d1"></a>
- **M04-CAP-SPECIALTY-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-SPECIALTY-fd85b703c00f8755"></a>
- **M04-CAP-SPECIALTY-fd85b703c00f8755**: MVP Relevance:

<a id="M04-CAP-SPECIALTY-b88b375a44ccd619"></a>
- **M04-CAP-SPECIALTY-b88b375a44ccd619**: Status:

<a id="M04-CAP-SPECIALTY-b3604d24a08b400e"></a>
- **M04-CAP-SPECIALTY-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
