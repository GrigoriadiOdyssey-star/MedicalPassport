# CORE-CAP-DATA — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: SourceRecordReference, TimelineIndex, ContextSnapshot, CorrectionLink. Dependencies: CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Verify identity/source authority → preserve original version → validate typed record → index authorized references → record attributable correction without erasing history.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-CARD-RECORD

Original IDs: 3062, 3662, 4062.

Own the index and provenance, not duplicate diagnoses or measurements. Preserve ECG, catheterization, surgery, medication history and functional status.

Resolve authorized source records → reconcile identity/version → index timeline → publish bounded summary.

### PED2-CARD-GENETICS

Original IDs: 3077, 3672, 4073.

Shared familial cardiology context; preserve variant interpretation, counseling, family screening and disease-specific panels.

Verify identity/source authority → preserve original version → validate typed record → index authorized references → record attributable correction without erasing history.

### PED2-IMMUNE-REGISTRY

Original IDs: 994, 4431, 5004.

Named SCID/CVID/IgA/CGD conditions plus suspected/confirmed, genetic, infection, malignancy and treatment contexts remain represented.

Verify identity/source authority → preserve original version → validate typed record → index authorized references → record attributable correction without erasing history.

### M04-PULM-RECORD

Original IDs: 916, 3182, 3362, 4452.

One respiratory index preserves bronchoscopy, genetics, oxygen, admissions, ventilatory support and outcomes with source versions.

Verify identity/source authority → preserve original version → validate typed record → index authorized references → record attributable correction without erasing history.

### M04-GASTRO-RECORD

Original IDs: 956, 3162, 3282, 3442, 4502.

Digestive index retains growth, histology, nutrition, procedure/outcome and imaging references without creating duplicate clinical truth.

Verify identity/source authority → preserve original version → validate typed record → index authorized references → record attributable correction without erasing history.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-DATA-5a11a7dcc05eae8d"></a>
- **M04-CAP-DATA-5a11a7dcc05eae8d**: Displays the complete respiratory history.
  Origin: original 916

<a id="M04-CAP-DATA-01bbec9df504a305"></a>
- **M04-CAP-DATA-01bbec9df504a305**: Includes
  Origin: original 916, original 956

<a id="M04-CAP-DATA-182520ba3d242100"></a>
- **M04-CAP-DATA-182520ba3d242100**: Diagnoses
  Origin: original 916, original 956, original 3162, original 3282, original 3362, original 3442, original 4062, original 4452, original 4502

<a id="M04-CAP-DATA-cc4765f416969a81"></a>
- **M04-CAP-DATA-cc4765f416969a81**: Spirometry
  Origin: original 916

<a id="M04-CAP-DATA-a3241cf77d991407"></a>
- **M04-CAP-DATA-a3241cf77d991407**: Imaging
  Origin: original 916, original 3182, original 3362, original 3442, original 3662, original 4062, original 4452, original 4502

<a id="M04-CAP-DATA-b769af85ada69188"></a>
- **M04-CAP-DATA-b769af85ada69188**: Medications
  Origin: original 916, original 956

<a id="M04-CAP-DATA-0d870ccf5f88653b"></a>
- **M04-CAP-DATA-0d870ccf5f88653b**: Displays the complete digestive disease history.
  Origin: original 956

<a id="M04-CAP-DATA-ceb38991b36a5742"></a>
- **M04-CAP-DATA-ceb38991b36a5742**: Endoscopy
  Origin: original 956, original 3162, original 3282, original 3442, original 4502

<a id="M04-CAP-DATA-71f790fdf94f9c10"></a>
- **M04-CAP-DATA-71f790fdf94f9c10**: Laboratory Results
  Origin: original 956, original 4502

<a id="M04-CAP-DATA-039fef145e973beb"></a>
- **M04-CAP-DATA-039fef145e973beb**: Stores congenital immune disorders.
  Origin: original 994

<a id="M04-CAP-DATA-35c08fc981170d3c"></a>
- **M04-CAP-DATA-35c08fc981170d3c**: SCID
  Origin: original 994

<a id="M04-CAP-DATA-2fb5fa4050c6a6cd"></a>
- **M04-CAP-DATA-2fb5fa4050c6a6cd**: CVID
  Origin: original 994

<a id="M04-CAP-DATA-d847973abab889a1"></a>
- **M04-CAP-DATA-d847973abab889a1**: IgA Deficiency
  Origin: original 994

<a id="M04-CAP-DATA-3cc1c76dc2c87a9a"></a>
- **M04-CAP-DATA-3cc1c76dc2c87a9a**: Chronic Granulomatous Disease
  Origin: original 994

<a id="M04-CAP-DATA-3309cd133e6fa345"></a>
- **M04-CAP-DATA-3309cd133e6fa345**: Maintains comprehensive pediatric cardiology records.
  Origin: original 3062, original 3662

<a id="M04-CAP-DATA-13f4122807b7f58f"></a>
- **M04-CAP-DATA-13f4122807b7f58f**: Congenital Defects
  Origin: original 3062

<a id="M04-CAP-DATA-7180e4fffcb65860"></a>
- **M04-CAP-DATA-7180e4fffcb65860**: Echocardiography
  Origin: original 3062, original 3662, original 4062

<a id="M04-CAP-DATA-0db3379ed4d9ccfa"></a>
- **M04-CAP-DATA-0db3379ed4d9ccfa**: ECG
  Origin: original 3062, original 4062

<a id="M04-CAP-DATA-5f6b10d9b27b3198"></a>
- **M04-CAP-DATA-5f6b10d9b27b3198**: Catheterization
  Origin: original 3062, original 4062

<a id="M04-CAP-DATA-bc506fdefc6e7e7b"></a>
- **M04-CAP-DATA-bc506fdefc6e7e7b**: Surgery
  Origin: original 3062

<a id="M04-CAP-DATA-4f628574282d6200"></a>
- **M04-CAP-DATA-4f628574282d6200**: Longitudinal Monitoring
  Origin: original 3062, original 3362, original 3442, original 3662

<a id="M04-CAP-DATA-8496f03ff9cb0ed6"></a>
- **M04-CAP-DATA-8496f03ff9cb0ed6**: Supports inherited cardiac diseases.
  Origin: original 3077

<a id="M04-CAP-DATA-50f0ba6093c590bf"></a>
- **M04-CAP-DATA-50f0ba6093c590bf**: Cardiomyopathy Genetics
  Origin: original 3077, original 4073

<a id="M04-CAP-DATA-c1d8dd3a92a5276b"></a>
- **M04-CAP-DATA-c1d8dd3a92a5276b**: Channelopathies
  Origin: original 3077, original 3672, original 4073

<a id="M04-CAP-DATA-f762d9e7cf8eb84c"></a>
- **M04-CAP-DATA-f762d9e7cf8eb84c**: Family Screening
  Origin: original 3077, original 3672, original 4073

<a id="M04-CAP-DATA-c3686c11660ba755"></a>
- **M04-CAP-DATA-c3686c11660ba755**: Variant Interpretation
  Origin: original 3077, original 4073

<a id="M04-CAP-DATA-9919d10042396c86"></a>
- **M04-CAP-DATA-9919d10042396c86**: Genetic Counseling
  Origin: original 3077, original 3672, original 4073

<a id="M04-CAP-DATA-c25950448dcfa41a"></a>
- **M04-CAP-DATA-c25950448dcfa41a**: Maintains comprehensive pediatric gastroenterology records.
  Origin: original 3162, original 3282, original 3442

<a id="M04-CAP-DATA-32ffc096d55d159d"></a>
- **M04-CAP-DATA-32ffc096d55d159d**: Histology
  Origin: original 3162, original 3282

<a id="M04-CAP-DATA-6eb87ffe1a85d7aa"></a>
- **M04-CAP-DATA-6eb87ffe1a85d7aa**: Nutrition Status
  Origin: original 3162

<a id="M04-CAP-DATA-0ef2b09db2ccd4b4"></a>
- **M04-CAP-DATA-0ef2b09db2ccd4b4**: Laboratory Studies
  Origin: original 3162

<a id="M04-CAP-DATA-b7c9c18abf209101"></a>
- **M04-CAP-DATA-b7c9c18abf209101**: Longitudinal Follow-up
  Origin: original 3162, original 3182, original 3282

<a id="M04-CAP-DATA-872f2015111bad74"></a>
- **M04-CAP-DATA-872f2015111bad74**: Maintains comprehensive pediatric pulmonology records.
  Origin: original 3182, original 3362

<a id="M04-CAP-DATA-a3778889bcb547c6"></a>
- **M04-CAP-DATA-a3778889bcb547c6**: Respiratory Diagnoses
  Origin: original 3182

<a id="M04-CAP-DATA-28cd4c8ebb038965"></a>
- **M04-CAP-DATA-28cd4c8ebb038965**: Pulmonary Function
  Origin: original 3182, original 4452

<a id="M04-CAP-DATA-a0b1db9a2cc87733"></a>
- **M04-CAP-DATA-a0b1db9a2cc87733**: Bronchoscopy
  Origin: original 3182

<a id="M04-CAP-DATA-5768adaf9507e83f"></a>
- **M04-CAP-DATA-5768adaf9507e83f**: Nutrition
  Origin: original 3282, original 3442, original 4502

<a id="M04-CAP-DATA-8bf61b2b633fc7e7"></a>
- **M04-CAP-DATA-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 3282

<a id="M04-CAP-DATA-df6b69beaab6f6f4"></a>
- **M04-CAP-DATA-df6b69beaab6f6f4**: Lung Function
  Origin: original 3362

<a id="M04-CAP-DATA-aaaf0a34a8eb8286"></a>
- **M04-CAP-DATA-aaaf0a34a8eb8286**: Genetics
  Origin: original 3362, original 4431, original 4502, original 5004

<a id="M04-CAP-DATA-aa7fd799ef06de48"></a>
- **M04-CAP-DATA-aa7fd799ef06de48**: Oxygen Therapy
  Origin: original 3362, original 4452

<a id="M04-CAP-DATA-9ac0748afd93e1ab"></a>
- **M04-CAP-DATA-9ac0748afd93e1ab**: Growth
  Origin: original 3442, original 4502

<a id="M04-CAP-DATA-304805e45eeb8f1e"></a>
- **M04-CAP-DATA-304805e45eeb8f1e**: Cardiac Diagnoses
  Origin: original 3662

<a id="M04-CAP-DATA-b18831d7eba08acc"></a>
- **M04-CAP-DATA-b18831d7eba08acc**: ECG Data
  Origin: original 3662

<a id="M04-CAP-DATA-78167df60625f73c"></a>
- **M04-CAP-DATA-78167df60625f73c**: Surgical History
  Origin: original 3662, original 4062

<a id="M04-CAP-DATA-f470f2f764e665ec"></a>
- **M04-CAP-DATA-f470f2f764e665ec**: Supports genetic cardiac disorders.
  Origin: original 3672

<a id="M04-CAP-DATA-22e2c1ee1bb4132d"></a>
- **M04-CAP-DATA-22e2c1ee1bb4132d**: Cardiomyopathy Genes
  Origin: original 3672

<a id="M04-CAP-DATA-ded16b48422316e8"></a>
- **M04-CAP-DATA-ded16b48422316e8**: Congenital Heart Disease Genetics
  Origin: original 3672, original 4073

<a id="M04-CAP-DATA-e580feb5260a89de"></a>
- **M04-CAP-DATA-e580feb5260a89de**: Maintains longitudinal pediatric cardiac records.
  Origin: original 4062

<a id="M04-CAP-DATA-2cbd1f2aea929b9b"></a>
- **M04-CAP-DATA-2cbd1f2aea929b9b**: Medication History
  Origin: original 4062

<a id="M04-CAP-DATA-23a329b8baa1834f"></a>
- **M04-CAP-DATA-23a329b8baa1834f**: Functional Status
  Origin: original 4062

<a id="M04-CAP-DATA-9a8c26b3a802c4a1"></a>
- **M04-CAP-DATA-9a8c26b3a802c4a1**: Supports inherited cardiac disorders.
  Origin: original 4073

<a id="M04-CAP-DATA-5cca3a15283eb891"></a>
- **M04-CAP-DATA-5cca3a15283eb891**: Genetic Panels
  Origin: original 4073

<a id="M04-CAP-DATA-dba5935fc5b30ed1"></a>
- **M04-CAP-DATA-dba5935fc5b30ed1**: Supports children with primary immunodeficiencies and other inborn errors of immunity.
  Origin: original 4431

<a id="M04-CAP-DATA-5f124f9e42776b79"></a>
- **M04-CAP-DATA-5f124f9e42776b79**: Diagnosis
  Origin: original 4431

<a id="M04-CAP-DATA-046dd0aa3784c331"></a>
- **M04-CAP-DATA-046dd0aa3784c331**: Phenotype
  Origin: original 4431

<a id="M04-CAP-DATA-46cdd9e5fce2291e"></a>
- **M04-CAP-DATA-46cdd9e5fce2291e**: Infection History
  Origin: original 4431, original 5004

<a id="M04-CAP-DATA-ee54e27f27fe774f"></a>
- **M04-CAP-DATA-ee54e27f27fe774f**: Immune Function
  Origin: original 4431

<a id="M04-CAP-DATA-1fd4a4171abf7920"></a>
- **M04-CAP-DATA-1fd4a4171abf7920**: Autoimmunity
  Origin: original 4431, original 5004

<a id="M04-CAP-DATA-0207549b28719905"></a>
- **M04-CAP-DATA-0207549b28719905**: Treatment
  Origin: original 4431

<a id="M04-CAP-DATA-73dedf86b2ae9801"></a>
- **M04-CAP-DATA-73dedf86b2ae9801**: Complications
  Origin: original 4431

<a id="M04-CAP-DATA-5e8c51cc3501e267"></a>
- **M04-CAP-DATA-5e8c51cc3501e267**: Outcomes
  Origin: original 4431, original 4452, original 4502

<a id="M04-CAP-DATA-75ba3425074dedb4"></a>
- **M04-CAP-DATA-75ba3425074dedb4**: Maintains longitudinal pediatric respiratory records.
  Origin: original 4452

<a id="M04-CAP-DATA-8ea50d2707dd1600"></a>
- **M04-CAP-DATA-8ea50d2707dd1600**: Symptoms
  Origin: original 4452, original 4502

<a id="M04-CAP-DATA-3d2ca03dcd57e33b"></a>
- **M04-CAP-DATA-3d2ca03dcd57e33b**: Exacerbations
  Origin: original 4452

<a id="M04-CAP-DATA-d130447d684396f9"></a>
- **M04-CAP-DATA-d130447d684396f9**: Microbiology
  Origin: original 4452

<a id="M04-CAP-DATA-facac9fd733d4dac"></a>
- **M04-CAP-DATA-facac9fd733d4dac**: Ventilatory Support
  Origin: original 4452

<a id="M04-CAP-DATA-3cfa39200ce0ea10"></a>
- **M04-CAP-DATA-3cfa39200ce0ea10**: Medication
  Origin: original 4452, original 4502

<a id="M04-CAP-DATA-bc4672e86cb0b71e"></a>
- **M04-CAP-DATA-bc4672e86cb0b71e**: Hospitalizations
  Origin: original 4452

<a id="M04-CAP-DATA-a79c1f8380fc85ce"></a>
- **M04-CAP-DATA-a79c1f8380fc85ce**: Maintains longitudinal digestive health records.
  Origin: original 4502

<a id="M04-CAP-DATA-78d0334ae8346a4e"></a>
- **M04-CAP-DATA-78d0334ae8346a4e**: Histopathology
  Origin: original 4502

<a id="M04-CAP-DATA-228b18d13e8b34f1"></a>
- **M04-CAP-DATA-228b18d13e8b34f1**: Procedures
  Origin: original 4502

<a id="M04-CAP-DATA-b277004b3d58b505"></a>
- **M04-CAP-DATA-b277004b3d58b505**: Provide lifelong structured management of confirmed or suspected inborn errors of immunity.
  Origin: original 5004

<a id="M04-CAP-DATA-8c193a6c18fae852"></a>
- **M04-CAP-DATA-8c193a6c18fae852**: Clinical Diagnosis
  Origin: original 5004

<a id="M04-CAP-DATA-ba6403d34b52aaa0"></a>
- **M04-CAP-DATA-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 5004

<a id="M04-CAP-DATA-c20c13e4b933f179"></a>
- **M04-CAP-DATA-c20c13e4b933f179**: Immune Phenotype
  Origin: original 5004

<a id="M04-CAP-DATA-297288bbf2e52f43"></a>
- **M04-CAP-DATA-297288bbf2e52f43**: Genetic Variant
  Origin: original 5004

<a id="M04-CAP-DATA-0bea5346ef341f41"></a>
- **M04-CAP-DATA-0bea5346ef341f41**: Family History
  Origin: original 5004

<a id="M04-CAP-DATA-0d9ddd402d163fee"></a>
- **M04-CAP-DATA-0d9ddd402d163fee**: Autoinflammation
  Origin: original 5004

<a id="M04-CAP-DATA-aca3f912f5fdde43"></a>
- **M04-CAP-DATA-aca3f912f5fdde43**: Lymphoproliferation
  Origin: original 5004

<a id="M04-CAP-DATA-01af3050b6e2fd45"></a>
- **M04-CAP-DATA-01af3050b6e2fd45**: Malignancy Risk Context
  Origin: original 5004

<a id="M04-CAP-DATA-9f6867087cedc081"></a>
- **M04-CAP-DATA-9f6867087cedc081**: Immunoglobulin Replacement
  Origin: original 5004

<a id="M04-CAP-DATA-3c249e13fee020c4"></a>
- **M04-CAP-DATA-3c249e13fee020c4**: Antimicrobial Prophylaxis
  Origin: original 5004

<a id="M04-CAP-DATA-3ba92a774d0545d8"></a>
- **M04-CAP-DATA-3ba92a774d0545d8**: Biological Therapy
  Origin: original 5004

<a id="M04-CAP-DATA-43a65d9b0bf1c627"></a>
- **M04-CAP-DATA-43a65d9b0bf1c627**: Transplant Context
  Origin: original 5004

<a id="M04-CAP-DATA-875716322614072c"></a>
- **M04-CAP-DATA-875716322614072c**: Gene Therapy Context
  Origin: original 5004

<a id="M04-CAP-DATA-86d81ef3975ae5b8"></a>
- **M04-CAP-DATA-86d81ef3975ae5b8**: Long-term Surveillance
  Origin: original 5004

<a id="M04-CAP-DATA-2f27e552d723d07f"></a>
- **M04-CAP-DATA-2f27e552d723d07f**: Integrations:
  Origin: original 5004

<a id="M04-CAP-DATA-27cde7069fe13381"></a>
- **M04-CAP-DATA-27cde7069fe13381**: Immunology
  Origin: original 5004

<a id="M04-CAP-DATA-813d0ab6af854e92"></a>
- **M04-CAP-DATA-813d0ab6af854e92**: Infectious Disease
  Origin: original 5004

<a id="M04-CAP-DATA-d5201c8c85a8f994"></a>
- **M04-CAP-DATA-d5201c8c85a8f994**: Hematology
  Origin: original 5004

<a id="M04-CAP-DATA-6b1b617f18c456db"></a>
- **M04-CAP-DATA-6b1b617f18c456db**: Oncology
  Origin: original 5004

<a id="M04-CAP-DATA-791e150b54f860f6"></a>
- **M04-CAP-DATA-791e150b54f860f6**: Rheumatology
  Origin: original 5004

<a id="M04-CAP-DATA-c25e5083a540778a"></a>
- **M04-CAP-DATA-c25e5083a540778a**: Transplantation
  Origin: original 5004

## Preserved source metadata

<a id="M04-CAP-DATA-0b8b9dbd6cf28670"></a>
- **M04-CAP-DATA-0b8b9dbd6cf28670**: # Pediatric Pulmonology Timeline

<a id="M04-CAP-DATA-5ba74d8fcc7b20cc"></a>
- **M04-CAP-DATA-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-DATA-d5232cbd3a326267"></a>
- **M04-CAP-DATA-d5232cbd3a326267**: Documentation

<a id="M04-CAP-DATA-6f33acf3afb37064"></a>
- **M04-CAP-DATA-6f33acf3afb37064**: ---

<a id="M04-CAP-DATA-08e9485a757ff4ef"></a>
- **M04-CAP-DATA-08e9485a757ff4ef**: # Pediatric Gastroenterology Timeline

<a id="M04-CAP-DATA-95e1f3bc9d2aa611"></a>
- **M04-CAP-DATA-95e1f3bc9d2aa611**: # Primary Immunodeficiency Registry

<a id="M04-CAP-DATA-4fbeeb87456accf5"></a>
- **M04-CAP-DATA-4fbeeb87456accf5**: Supports

<a id="M04-CAP-DATA-20dcf9e08bfc7cd6"></a>
- **M04-CAP-DATA-20dcf9e08bfc7cd6**: Tracks

<a id="M04-CAP-DATA-6510c5c511a879bc"></a>
- **M04-CAP-DATA-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-DATA-b34f593f0f83a1d1"></a>
- **M04-CAP-DATA-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-DATA-b88b375a44ccd619"></a>
- **M04-CAP-DATA-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
