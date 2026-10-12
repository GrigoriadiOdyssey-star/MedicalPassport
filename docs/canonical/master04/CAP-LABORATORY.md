# CORE-CAP-LABORATORY — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: SpecimenReference, TestResult, MethodReference, ReferenceIntervalRelease. Dependencies: CAP-LABORATORY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Link patient/specimen/test/method → validate units/reference context and timing → record authorized result → correction/amendment → compatible longitudinal comparison.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-RENAL-FUNCTION

Original IDs: 926, 4552.

Retain urea, creatinine, cystatin C, eGFR, urinary markers, protein/albumin, electrolytes, acid-base, recovery and persistent-pattern distinctions. Unknown context cannot imply normality.

Ingest validated results → bind units/method/age/context → clinician-approved calculation → baseline comparison → review.

### M04-PULM-FUNCTION

Original IDs: 905, 3369, 4461, 4462, 4463, 4465.

Retain raw spirometry curves, plethysmography, diffusion/exercise/respiratory muscle testing, quality/reference version and paired bronchodilator administration timing.

Link patient/specimen/test/method → validate units/reference context and timing → record authorized result → correction/amendment → compatible longitudinal comparison.

### M04-GASTRO-LAB

Original IDs: 949, 951, 3171, 3291, 3451, 4525, 4527.

Preserve stool parasites/occult blood, lactoferrin/calprotectin context, lipase/amylase, synthetic hepatic function/coagulation and sample/method/time; labs do not themselves diagnose.

Link patient/specimen/test/method → validate units/reference context and timing → record authorized result → correction/amendment → compatible longitudinal comparison.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-LABORATORY-799f5b59f51702a3"></a>
- **M04-CAP-LABORATORY-799f5b59f51702a3**: Stores spirometry examinations.
  Origin: original 905

<a id="M04-CAP-LABORATORY-d3e0f797fa5f7d6c"></a>
- **M04-CAP-LABORATORY-d3e0f797fa5f7d6c**: FEV1
  Origin: original 905, original 4461

<a id="M04-CAP-LABORATORY-25ba796b1fecb54b"></a>
- **M04-CAP-LABORATORY-25ba796b1fecb54b**: FVC
  Origin: original 905, original 4461

<a id="M04-CAP-LABORATORY-d2680c24f0731b70"></a>
- **M04-CAP-LABORATORY-d2680c24f0731b70**: Flow Curves
  Origin: original 905

<a id="M04-CAP-LABORATORY-3f46ddfc482453ec"></a>
- **M04-CAP-LABORATORY-3f46ddfc482453ec**: Physician Reports
  Origin: original 905

<a id="M04-CAP-LABORATORY-b817f2e04bffcc29"></a>
- **M04-CAP-LABORATORY-b817f2e04bffcc29**: Tracks renal function.
  Origin: original 926

<a id="M04-CAP-LABORATORY-7f8a7aa8ed537015"></a>
- **M04-CAP-LABORATORY-7f8a7aa8ed537015**: Creatinine
  Origin: original 926

<a id="M04-CAP-LABORATORY-888f9acc6f6cd2e2"></a>
- **M04-CAP-LABORATORY-888f9acc6f6cd2e2**: eGFR
  Origin: original 926

<a id="M04-CAP-LABORATORY-da32d20e3ae3343c"></a>
- **M04-CAP-LABORATORY-da32d20e3ae3343c**: Urea
  Origin: original 926

<a id="M04-CAP-LABORATORY-3e6673e4b5967f40"></a>
- **M04-CAP-LABORATORY-3e6673e4b5967f40**: Electrolytes
  Origin: original 926

<a id="M04-CAP-LABORATORY-5ec6b0720fb508f2"></a>
- **M04-CAP-LABORATORY-5ec6b0720fb508f2**: Stores stool examination history.
  Origin: original 949

<a id="M04-CAP-LABORATORY-d130447d684396f9"></a>
- **M04-CAP-LABORATORY-d130447d684396f9**: Microbiology
  Origin: original 949, original 4525

<a id="M04-CAP-LABORATORY-44ff6b208292c7dc"></a>
- **M04-CAP-LABORATORY-44ff6b208292c7dc**: Parasites
  Origin: original 949

<a id="M04-CAP-LABORATORY-43c8b3b68a21a0b4"></a>
- **M04-CAP-LABORATORY-43c8b3b68a21a0b4**: Occult Blood
  Origin: original 949, original 4525

<a id="M04-CAP-LABORATORY-6a20c0d72734a884"></a>
- **M04-CAP-LABORATORY-6a20c0d72734a884**: Calprotectin
  Origin: original 949, original 3291

<a id="M04-CAP-LABORATORY-a01538101c1ed16d"></a>
- **M04-CAP-LABORATORY-a01538101c1ed16d**: Tracks digestive laboratory markers.
  Origin: original 951

<a id="M04-CAP-LABORATORY-42e9b057aa267b1a"></a>
- **M04-CAP-LABORATORY-42e9b057aa267b1a**: Liver Enzymes
  Origin: original 951, original 4527

<a id="M04-CAP-LABORATORY-2dbda5bfbed50d79"></a>
- **M04-CAP-LABORATORY-2dbda5bfbed50d79**: Bilirubin
  Origin: original 951, original 4527

<a id="M04-CAP-LABORATORY-4f2264dceb303c31"></a>
- **M04-CAP-LABORATORY-4f2264dceb303c31**: Albumin
  Origin: original 951, original 4527

<a id="M04-CAP-LABORATORY-ed0f48c098899f52"></a>
- **M04-CAP-LABORATORY-ed0f48c098899f52**: Lipase
  Origin: original 951

<a id="M04-CAP-LABORATORY-8851e058b50e6f91"></a>
- **M04-CAP-LABORATORY-8851e058b50e6f91**: Amylase
  Origin: original 951

<a id="M04-CAP-LABORATORY-05776302b6e982a5"></a>
- **M04-CAP-LABORATORY-05776302b6e982a5**: Maintains gastrointestinal laboratory studies.
  Origin: original 3171, original 3291

<a id="M04-CAP-LABORATORY-7967a97c019c6d38"></a>
- **M04-CAP-LABORATORY-7967a97c019c6d38**: Liver Function Tests
  Origin: original 3171, original 3451

<a id="M04-CAP-LABORATORY-fa2f6c947f9e9190"></a>
- **M04-CAP-LABORATORY-fa2f6c947f9e9190**: Pancreatic Enzymes
  Origin: original 3171, original 3291, original 3451

<a id="M04-CAP-LABORATORY-31e97b143dee8a69"></a>
- **M04-CAP-LABORATORY-31e97b143dee8a69**: Inflammatory Markers
  Origin: original 3171

<a id="M04-CAP-LABORATORY-272b0bd5607c9880"></a>
- **M04-CAP-LABORATORY-272b0bd5607c9880**: Stool Analysis
  Origin: original 3171

<a id="M04-CAP-LABORATORY-bf367e9f3a333124"></a>
- **M04-CAP-LABORATORY-bf367e9f3a333124**: Genetic Testing
  Origin: original 3171, original 3451

<a id="M04-CAP-LABORATORY-941d836af291d4e2"></a>
- **M04-CAP-LABORATORY-941d836af291d4e2**: Liver Function
  Origin: original 3291

<a id="M04-CAP-LABORATORY-eb37efb0cb8afa0f"></a>
- **M04-CAP-LABORATORY-eb37efb0cb8afa0f**: Stool Studies
  Origin: original 3291, original 3451

<a id="M04-CAP-LABORATORY-d1c31545aea0d43b"></a>
- **M04-CAP-LABORATORY-d1c31545aea0d43b**: Serology
  Origin: original 3291

<a id="M04-CAP-LABORATORY-0e1d1b483ce11d89"></a>
- **M04-CAP-LABORATORY-0e1d1b483ce11d89**: Supports respiratory function testing.
  Origin: original 3369

<a id="M04-CAP-LABORATORY-cc4765f416969a81"></a>
- **M04-CAP-LABORATORY-cc4765f416969a81**: Spirometry
  Origin: original 3369, original 4462

<a id="M04-CAP-LABORATORY-578bb39090fe4c53"></a>
- **M04-CAP-LABORATORY-578bb39090fe4c53**: Body Plethysmography
  Origin: original 3369

<a id="M04-CAP-LABORATORY-614dcb80e0fe3129"></a>
- **M04-CAP-LABORATORY-614dcb80e0fe3129**: Diffusion Capacity
  Origin: original 3369

<a id="M04-CAP-LABORATORY-642ba2141b54b991"></a>
- **M04-CAP-LABORATORY-642ba2141b54b991**: Bronchodilator Testing
  Origin: original 3369, original 4461, original 4462

<a id="M04-CAP-LABORATORY-4494d523df4215d5"></a>
- **M04-CAP-LABORATORY-4494d523df4215d5**: Exercise Testing
  Origin: original 3369, original 4462, original 4465

<a id="M04-CAP-LABORATORY-d7cf4ebebe1a402f"></a>
- **M04-CAP-LABORATORY-d7cf4ebebe1a402f**: Maintains GI laboratory studies.
  Origin: original 3451

<a id="M04-CAP-LABORATORY-56775c7902302305"></a>
- **M04-CAP-LABORATORY-56775c7902302305**: Fecal Calprotectin
  Origin: original 3451

<a id="M04-CAP-LABORATORY-bad759474ed49803"></a>
- **M04-CAP-LABORATORY-bad759474ed49803**: Supports pediatric spirometry workflows.
  Origin: original 4461

<a id="M04-CAP-LABORATORY-f01a0c3644ebaf7a"></a>
- **M04-CAP-LABORATORY-f01a0c3644ebaf7a**: Records
  Origin: original 4461

<a id="M04-CAP-LABORATORY-c91b3b9e707d80b9"></a>
- **M04-CAP-LABORATORY-c91b3b9e707d80b9**: FEV1/FVC
  Origin: original 4461

<a id="M04-CAP-LABORATORY-679dbe7f1bda32cf"></a>
- **M04-CAP-LABORATORY-679dbe7f1bda32cf**: Flow Measurements
  Origin: original 4461

<a id="M04-CAP-LABORATORY-08534a1f304ce0e0"></a>
- **M04-CAP-LABORATORY-08534a1f304ce0e0**: Reference Values
  Origin: original 4461

<a id="M04-CAP-LABORATORY-9975c803861b6c03"></a>
- **M04-CAP-LABORATORY-9975c803861b6c03**: Test Quality
  Origin: original 4461, original 4463

<a id="M04-CAP-LABORATORY-7fa79dce2b8d7e98"></a>
- **M04-CAP-LABORATORY-7fa79dce2b8d7e98**: Longitudinal Comparison
  Origin: original 4461

<a id="M04-CAP-LABORATORY-448fcb80ca4e1e8c"></a>
- **M04-CAP-LABORATORY-448fcb80ca4e1e8c**: Integrates advanced pediatric pulmonary function testing.
  Origin: original 4462

<a id="M04-CAP-LABORATORY-f9d6c78cb59294bd"></a>
- **M04-CAP-LABORATORY-f9d6c78cb59294bd**: Lung Volumes
  Origin: original 4462

<a id="M04-CAP-LABORATORY-240a6ead4dfefe4d"></a>
- **M04-CAP-LABORATORY-240a6ead4dfefe4d**: Diffusion Testing
  Origin: original 4462

<a id="M04-CAP-LABORATORY-4cab87af1978f88f"></a>
- **M04-CAP-LABORATORY-4cab87af1978f88f**: Respiratory Muscle Assessment
  Origin: original 4462

<a id="M04-CAP-LABORATORY-dfe6f0f93b8911f7"></a>
- **M04-CAP-LABORATORY-dfe6f0f93b8911f7**: Quality Controls
  Origin: original 4462

<a id="M04-CAP-LABORATORY-a6fa6d83b3f964f8"></a>
- **M04-CAP-LABORATORY-a6fa6d83b3f964f8**: Specialist Interpretation
  Origin: original 4462, original 4463

<a id="M04-CAP-LABORATORY-e76867ae27a35ffe"></a>
- **M04-CAP-LABORATORY-e76867ae27a35ffe**: Supports structured pre- and post-bronchodilator assessment.
  Origin: original 4463

<a id="M04-CAP-LABORATORY-ef030457062c3138"></a>
- **M04-CAP-LABORATORY-ef030457062c3138**: Baseline Pulmonary Function
  Origin: original 4463

<a id="M04-CAP-LABORATORY-3cfa39200ce0ea10"></a>
- **M04-CAP-LABORATORY-3cfa39200ce0ea10**: Medication
  Origin: original 4463, original 4552

<a id="M04-CAP-LABORATORY-11318cdb594b0dc1"></a>
- **M04-CAP-LABORATORY-11318cdb594b0dc1**: Administration Time
  Origin: original 4463

<a id="M04-CAP-LABORATORY-271e66b504d62db4"></a>
- **M04-CAP-LABORATORY-271e66b504d62db4**: Repeat Measurements
  Origin: original 4463

<a id="M04-CAP-LABORATORY-2efc2fec2c0c8ee3"></a>
- **M04-CAP-LABORATORY-2efc2fec2c0c8ee3**: Response
  Origin: original 4463

<a id="M04-CAP-LABORATORY-99a135a9087acce7"></a>
- **M04-CAP-LABORATORY-99a135a9087acce7**: Supports evaluation of respiratory symptoms associated with exercise.
  Origin: original 4465

<a id="M04-CAP-LABORATORY-8ea50d2707dd1600"></a>
- **M04-CAP-LABORATORY-8ea50d2707dd1600**: Symptoms
  Origin: original 4465

<a id="M04-CAP-LABORATORY-ef12b6cca94b2b60"></a>
- **M04-CAP-LABORATORY-ef12b6cca94b2b60**: Baseline Lung Function
  Origin: original 4465

<a id="M04-CAP-LABORATORY-9215378fd413c675"></a>
- **M04-CAP-LABORATORY-9215378fd413c675**: Oxygen Saturation
  Origin: original 4465

<a id="M04-CAP-LABORATORY-f5cb94d0f0206eb5"></a>
- **M04-CAP-LABORATORY-f5cb94d0f0206eb5**: Heart Rate
  Origin: original 4465

<a id="M04-CAP-LABORATORY-104774a9bf82ba04"></a>
- **M04-CAP-LABORATORY-104774a9bf82ba04**: Post-exercise Measurements
  Origin: original 4465

<a id="M04-CAP-LABORATORY-e9bb1b7104aa25cd"></a>
- **M04-CAP-LABORATORY-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4465

<a id="M04-CAP-LABORATORY-0d7c4aeb99488660"></a>
- **M04-CAP-LABORATORY-0d7c4aeb99488660**: Integrates structured stool diagnostics.
  Origin: original 4525

<a id="M04-CAP-LABORATORY-dbbe69107d7a8c91"></a>
- **M04-CAP-LABORATORY-dbbe69107d7a8c91**: Molecular Pathogen Testing
  Origin: original 4525

<a id="M04-CAP-LABORATORY-ec3dcbd89ed2506f"></a>
- **M04-CAP-LABORATORY-ec3dcbd89ed2506f**: Inflammatory Biomarkers
  Origin: original 4525

<a id="M04-CAP-LABORATORY-6a6aef91beb00a16"></a>
- **M04-CAP-LABORATORY-6a6aef91beb00a16**: Malabsorption Markers
  Origin: original 4525

<a id="M04-CAP-LABORATORY-260b5dbd2befa256"></a>
- **M04-CAP-LABORATORY-260b5dbd2befa256**: Pancreatic Markers
  Origin: original 4525

<a id="M04-CAP-LABORATORY-73ecdbf953ecca8a"></a>
- **M04-CAP-LABORATORY-73ecdbf953ecca8a**: Longitudinal Trends
  Origin: original 4525

<a id="M04-CAP-LABORATORY-9394a53c397ef677"></a>
- **M04-CAP-LABORATORY-9394a53c397ef677**: Tracks longitudinal hepatic status.
  Origin: original 4527

<a id="M04-CAP-LABORATORY-17f8985fe5ce26bb"></a>
- **M04-CAP-LABORATORY-17f8985fe5ce26bb**: Synthetic Function
  Origin: original 4527

<a id="M04-CAP-LABORATORY-ca457cec30f5491b"></a>
- **M04-CAP-LABORATORY-ca457cec30f5491b**: Coagulation
  Origin: original 4527

<a id="M04-CAP-LABORATORY-a3241cf77d991407"></a>
- **M04-CAP-LABORATORY-a3241cf77d991407**: Imaging
  Origin: original 4527

<a id="M04-CAP-LABORATORY-7d11bd61845619a8"></a>
- **M04-CAP-LABORATORY-7d11bd61845619a8**: Clinical Findings
  Origin: original 4527

<a id="M04-CAP-LABORATORY-0207549b28719905"></a>
- **M04-CAP-LABORATORY-0207549b28719905**: Treatment
  Origin: original 4527

<a id="M04-CAP-LABORATORY-89eac5b0b30ea3e0"></a>
- **M04-CAP-LABORATORY-89eac5b0b30ea3e0**: Provide a unified longitudinal engine for assessment and monitoring of pediatric kidney function.
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7797da116ae90ca5"></a>
- **M04-CAP-LABORATORY-7797da116ae90ca5**: Creatinine Tracking
  Origin: original 4552

<a id="M04-CAP-LABORATORY-750b1c19786522c9"></a>
- **M04-CAP-LABORATORY-750b1c19786522c9**: Cystatin C Tracking
  Origin: original 4552

<a id="M04-CAP-LABORATORY-bdd010e7cfa13f65"></a>
- **M04-CAP-LABORATORY-bdd010e7cfa13f65**: eGFR Calculation
  Origin: original 4552

<a id="M04-CAP-LABORATORY-b59979233efb2f2b"></a>
- **M04-CAP-LABORATORY-b59979233efb2f2b**: Age-adjusted Renal Function Interpretation
  Origin: original 4552

<a id="M04-CAP-LABORATORY-b2eb868ed704db34"></a>
- **M04-CAP-LABORATORY-b2eb868ed704db34**: Baseline Kidney Function
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7bfbd74468454622"></a>
- **M04-CAP-LABORATORY-7bfbd74468454622**: Renal Function Trend Analysis
  Origin: original 4552

<a id="M04-CAP-LABORATORY-2ffc4db5d73cc6ef"></a>
- **M04-CAP-LABORATORY-2ffc4db5d73cc6ef**: Proteinuria Monitoring
  Origin: original 4552

<a id="M04-CAP-LABORATORY-177060ff26ea880d"></a>
- **M04-CAP-LABORATORY-177060ff26ea880d**: Albuminuria Monitoring
  Origin: original 4552

<a id="M04-CAP-LABORATORY-395105ef97cc7421"></a>
- **M04-CAP-LABORATORY-395105ef97cc7421**: Urinary Biomarkers
  Origin: original 4552

<a id="M04-CAP-LABORATORY-9fdba1b803b3129c"></a>
- **M04-CAP-LABORATORY-9fdba1b803b3129c**: Electrolyte Monitoring
  Origin: original 4552

<a id="M04-CAP-LABORATORY-b3e3a75141b5bc2d"></a>
- **M04-CAP-LABORATORY-b3e3a75141b5bc2d**: Acid-Base Monitoring
  Origin: original 4552

<a id="M04-CAP-LABORATORY-816f49494ba8a0c9"></a>
- **M04-CAP-LABORATORY-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4552

<a id="M04-CAP-LABORATORY-e9afd2144eec50a5"></a>
- **M04-CAP-LABORATORY-e9afd2144eec50a5**: Laboratory Abnormality Detection
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7e2cb40106fc38b6"></a>
- **M04-CAP-LABORATORY-7e2cb40106fc38b6**: Renal Recovery Tracking
  Origin: original 4552

<a id="M04-CAP-LABORATORY-32562a68b4c4db41"></a>
- **M04-CAP-LABORATORY-32562a68b4c4db41**: Clinical Logic:
  Origin: original 4552

<a id="M04-CAP-LABORATORY-ddd00cceea3170a4"></a>
- **M04-CAP-LABORATORY-ddd00cceea3170a4**: The system differentiates isolated abnormal results from persistent, recurrent or progressively worsening patterns.
  Origin: original 4552

<a id="M04-CAP-LABORATORY-cd9fa01d1a203b82"></a>
- **M04-CAP-LABORATORY-cd9fa01d1a203b82**: Data Context:
  Origin: original 4552

<a id="M04-CAP-LABORATORY-d105f29dd1ec7126"></a>
- **M04-CAP-LABORATORY-d105f29dd1ec7126**: Age
  Origin: original 4552

<a id="M04-CAP-LABORATORY-ceb9e308d07fc5ce"></a>
- **M04-CAP-LABORATORY-ceb9e308d07fc5ce**: Sex where clinically relevant
  Origin: original 4552

<a id="M04-CAP-LABORATORY-9ac0748afd93e1ab"></a>
- **M04-CAP-LABORATORY-9ac0748afd93e1ab**: Growth
  Origin: original 4552

<a id="M04-CAP-LABORATORY-f98cecb5d035001f"></a>
- **M04-CAP-LABORATORY-f98cecb5d035001f**: Hydration
  Origin: original 4552

<a id="M04-CAP-LABORATORY-92d38cc6a8f59a86"></a>
- **M04-CAP-LABORATORY-92d38cc6a8f59a86**: Acute Illness
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7a6d6be9e15b0dc6"></a>
- **M04-CAP-LABORATORY-7a6d6be9e15b0dc6**: Chronic Disease
  Origin: original 4552

<a id="M04-CAP-LABORATORY-d3768517b3c8be6e"></a>
- **M04-CAP-LABORATORY-d3768517b3c8be6e**: Previous Renal Function
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7d843f66a5febf8f"></a>
- **M04-CAP-LABORATORY-7d843f66a5febf8f**: Laboratory Methodology
  Origin: original 4552

<a id="M04-CAP-LABORATORY-d3e66e9cbbbb8d24"></a>
- **M04-CAP-LABORATORY-d3e66e9cbbbb8d24**: Alerts:
  Origin: original 4552

<a id="M04-CAP-LABORATORY-85bc6b4782eb7e1c"></a>
- **M04-CAP-LABORATORY-85bc6b4782eb7e1c**: Rapid Renal Function Deterioration
  Origin: original 4552

<a id="M04-CAP-LABORATORY-95ab0b634f5d3cf7"></a>
- **M04-CAP-LABORATORY-95ab0b634f5d3cf7**: Critical Electrolyte Abnormality
  Origin: original 4552

<a id="M04-CAP-LABORATORY-16d2519129eb3336"></a>
- **M04-CAP-LABORATORY-16d2519129eb3336**: Persistent Proteinuria
  Origin: original 4552

<a id="M04-CAP-LABORATORY-5f2309eddef8c9f3"></a>
- **M04-CAP-LABORATORY-5f2309eddef8c9f3**: Significant Change from Patient Baseline
  Origin: original 4552

<a id="M04-CAP-LABORATORY-60e10e7049b418ab"></a>
- **M04-CAP-LABORATORY-60e10e7049b418ab**: Clinician-defined Renal Risk Thresholds
  Origin: original 4552

<a id="M04-CAP-LABORATORY-2f27e552d723d07f"></a>
- **M04-CAP-LABORATORY-2f27e552d723d07f**: Integrations:
  Origin: original 4552

<a id="M04-CAP-LABORATORY-35ff4287a628c0a4"></a>
- **M04-CAP-LABORATORY-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 4552

<a id="M04-CAP-LABORATORY-dad1551e6044201a"></a>
- **M04-CAP-LABORATORY-dad1551e6044201a**: Nephrology
  Origin: original 4552

<a id="M04-CAP-LABORATORY-7605ce62d32022f4"></a>
- **M04-CAP-LABORATORY-7605ce62d32022f4**: Pharmacy
  Origin: original 4552

<a id="M04-CAP-LABORATORY-4a1db7b3fa8112be"></a>
- **M04-CAP-LABORATORY-4a1db7b3fa8112be**: Intensive Care
  Origin: original 4552

<a id="M04-CAP-LABORATORY-fba14cee8ea55390"></a>
- **M04-CAP-LABORATORY-fba14cee8ea55390**: Digital Twin
  Origin: original 4552

<a id="M04-CAP-LABORATORY-9e9dbb804ca8197a"></a>
- **M04-CAP-LABORATORY-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4552

<a id="M04-CAP-LABORATORY-43a67d79860bcb43"></a>
- **M04-CAP-LABORATORY-43a67d79860bcb43**: HIGH
  Origin: original 4552

## Preserved source metadata

<a id="M04-CAP-LABORATORY-07c82f7c0254014d"></a>
- **M04-CAP-LABORATORY-07c82f7c0254014d**: # Pediatric Spirometry Archive

<a id="M04-CAP-LABORATORY-4fbeeb87456accf5"></a>
- **M04-CAP-LABORATORY-4fbeeb87456accf5**: Supports

<a id="M04-CAP-LABORATORY-5ba74d8fcc7b20cc"></a>
- **M04-CAP-LABORATORY-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-LABORATORY-d5232cbd3a326267"></a>
- **M04-CAP-LABORATORY-d5232cbd3a326267**: Documentation

<a id="M04-CAP-LABORATORY-6f33acf3afb37064"></a>
- **M04-CAP-LABORATORY-6f33acf3afb37064**: ---

<a id="M04-CAP-LABORATORY-16dd257cddee9fb9"></a>
- **M04-CAP-LABORATORY-16dd257cddee9fb9**: # Pediatric Kidney Function Monitoring

<a id="M04-CAP-LABORATORY-4cb2d0ef82099e1a"></a>
- **M04-CAP-LABORATORY-4cb2d0ef82099e1a**: # Pediatric Stool Analysis Archive

<a id="M04-CAP-LABORATORY-7d4dfb368cbcccfa"></a>
- **M04-CAP-LABORATORY-7d4dfb368cbcccfa**: # Pediatric Gastroenterology Laboratory Center

<a id="M04-CAP-LABORATORY-20dcf9e08bfc7cd6"></a>
- **M04-CAP-LABORATORY-20dcf9e08bfc7cd6**: Tracks

<a id="M04-CAP-LABORATORY-21d94006fa494f95"></a>
- **M04-CAP-LABORATORY-21d94006fa494f95**: Integrates

<a id="M04-CAP-LABORATORY-6510c5c511a879bc"></a>
- **M04-CAP-LABORATORY-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-LABORATORY-b34f593f0f83a1d1"></a>
- **M04-CAP-LABORATORY-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-LABORATORY-fd85b703c00f8755"></a>
- **M04-CAP-LABORATORY-fd85b703c00f8755**: MVP Relevance:

<a id="M04-CAP-LABORATORY-b88b375a44ccd619"></a>
- **M04-CAP-LABORATORY-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
