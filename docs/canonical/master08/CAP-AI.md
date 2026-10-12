# CORE-CAP-AI — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: TaskProfile, ModelRelease, RouteDecision, InferenceArtifact, ScientificJob. Dependencies: CAP-AI, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-LABORATORY.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-CARD-AI

Original IDs: 854, 3072, 3674, 4075.

Educational output, diagnostic assistance, prediction and surgical support are distinct intended uses of shared AI infrastructure.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M04-PULM-AI

Original IDs: 914, 3193, 3374, 4494, 4496.

Educational assistance, risk prediction, interpretation and draft summarization are distinct task profiles with pediatric evaluation, review and no clinical writes.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M04-GASTRO-AI

Original IDs: 954, 3173, 3293, 3453, 4546, 4548.

Retain educational output, diagnostic support, nutrition/activity predictions, endoscopy support and draft summary as separate task profiles; no autonomous prescribing.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M04-RHEUM-AI

Original IDs: 4722, 5048.

Shared AI tasks retain pediatric/bias evaluation, source/model version, uncertainty and prohibition on autonomous diagnosis, immunosuppression or emergency treatment.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M04-STRATEGIC-GENOMIC

Original IDs: 1609, 1621.

Scientific-execution profiles distinguish human whole-genome/exome/structural variants from pathogen evolution/resistance/outbreak tasks. Clinical report and interpretation authority remains outside adapter execution.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M04-STRATEGIC-AI

Original IDs: 1218, 1259, 1369, 1471, 1547.

Retraining, clinical validation and knowledge updates are separate governed releases. Preserve approval dates, model/dataset versions, feedback and safety monitoring under shared execution infrastructure.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M05-HEM-AI

Original IDs: 974, 3252, 4191, 4192, 4196, 4998.

Educational explanation, morphology, differential/risk and draft documentation are separate AI intended uses. Preserve specialist verification, reject/correct/sign/publish states and explicit prohibition on autonomous transfusion/transplant/anticoagulation decisions.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M05-ONCO-AI

Original IDs: 3133, 4223, 4243, 4245.

Classification/prognosis, image/pathology analysis, evidence retrieval and case synthesis are separate governed tasks. Unsupported summary statements cannot be silently released as clinical facts.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M06-NEUROSURG-AI

Original IDs: 4645, 5123.

Separate timeline, image comparison/segmentation, planning, device-history and outcome tasks. Preserve pediatric evaluation, source/model versions, uncertainty, human validation and no autonomous indication/approach/emergency interpretation.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M06-NEONATAL-AI

Original IDs: 3034, 3272.

Sepsis/mortality/respiratory/growth/neurodevelopment predictions are separate governed tasks with intended-use population, calibration and uncertainty requirements; none authorizes treatment limitation or intervention.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M07-SURGERY-AI

Original IDs: 1130, 4671, 4698.

Surgical monitoring, orthopedic imaging measurements and trauma/recovery prediction share AI governance with explicit task profiles. Preserve lab/image/recovery/complication inputs, alignment/curve/limb-length measurements, uncertainty, model versions, bias, missingness and audit. No autonomous diagnosis, surgical indication, emergency treatment, therapy intensity or clearance.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

### M08-ANESTHESIA-AI

Original IDs: 1386.

Anesthesia assistant is an explicit task profile retaining allergy, prior anesthetic, airway and interaction context; source/model versions, uncertainty and qualified validation are mandatory. No automatic selection, dosing or airway clearance.

Apply hard task/privacy/jurisdiction/population constraints → route approved model → authorized retrieval → validated result envelope → human review → invalidation and separately approved learning release.

## Integrated extension decisions

- EXT-GENOMIC: INTEGRATED at documentation scope. The extension owns scientific adapter execution. Raw genomic records stay with data/lab owners; proteinuria is a renal observation, not protein-structure intelligence. Clinical actionability remains qualified review.
- EXT-AI: INTEGRATED at documentation scope. A single gateway/router/model lifecycle supports separate Knowledge, Clinical, Personal and Research profiles. Knowledge updates are not permission to retrain or deploy a model.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-AI-b1a2bf0a9207858e"></a>
- **M08-CAP-AI-b1a2bf0a9207858e**: AI assists pediatric cardiovascular monitoring.
  Origin: original 854

<a id="M08-CAP-AI-0535ebb6ad4f5674"></a>
- **M08-CAP-AI-0535ebb6ad4f5674**: Analyzes
  Origin: original 854, original 914, original 954, original 974, original 1130, original 1386

<a id="M08-CAP-AI-0db3379ed4d9ccfa"></a>
- **M08-CAP-AI-0db3379ed4d9ccfa**: ECG
  Origin: original 854

<a id="M08-CAP-AI-7180e4fffcb65860"></a>
- **M08-CAP-AI-7180e4fffcb65860**: Echocardiography
  Origin: original 854

<a id="M08-CAP-AI-8ea50d2707dd1600"></a>
- **M08-CAP-AI-8ea50d2707dd1600**: Symptoms
  Origin: original 854, original 914, original 954, original 974, original 4196, original 4496, original 4548

<a id="M08-CAP-AI-71f790fdf94f9c10"></a>
- **M08-CAP-AI-71f790fdf94f9c10**: Laboratory Results
  Origin: original 854, original 954, original 974, original 1130

<a id="M08-CAP-AI-3dd4a7a8a9c557cc"></a>
- **M08-CAP-AI-3dd4a7a8a9c557cc**: Provides educational recommendations.
  Origin: original 854, original 914, original 954, original 974

<a id="M08-CAP-AI-616e51251f231f8a"></a>
- **M08-CAP-AI-616e51251f231f8a**: AI assists respiratory monitoring.
  Origin: original 914

<a id="M08-CAP-AI-cc4765f416969a81"></a>
- **M08-CAP-AI-cc4765f416969a81**: Spirometry
  Origin: original 914

<a id="M08-CAP-AI-9215378fd413c675"></a>
- **M08-CAP-AI-9215378fd413c675**: Oxygen Saturation
  Origin: original 914

<a id="M08-CAP-AI-a3241cf77d991407"></a>
- **M08-CAP-AI-a3241cf77d991407**: Imaging
  Origin: original 914, original 954, original 1130, original 4245, original 4548

<a id="M08-CAP-AI-b16a803c3f352a01"></a>
- **M08-CAP-AI-b16a803c3f352a01**: AI assists digestive disease monitoring.
  Origin: original 954

<a id="M08-CAP-AI-ceb38991b36a5742"></a>
- **M08-CAP-AI-ceb38991b36a5742**: Endoscopy
  Origin: original 954, original 4548

<a id="M08-CAP-AI-412f6a203d1c56bb"></a>
- **M08-CAP-AI-412f6a203d1c56bb**: AI assists blood disorder monitoring.
  Origin: original 974

<a id="M08-CAP-AI-9bbf34aa349132ec"></a>
- **M08-CAP-AI-9bbf34aa349132ec**: CBC
  Origin: original 974

<a id="M08-CAP-AI-ca457cec30f5491b"></a>
- **M08-CAP-AI-ca457cec30f5491b**: Coagulation
  Origin: original 974

<a id="M08-CAP-AI-8a2401966603c2f1"></a>
- **M08-CAP-AI-8a2401966603c2f1**: AI assists surgical monitoring.
  Origin: original 1130

<a id="M08-CAP-AI-8144b1292bff6f0a"></a>
- **M08-CAP-AI-8144b1292bff6f0a**: Postoperative Recovery
  Origin: original 1130

<a id="M08-CAP-AI-73dedf86b2ae9801"></a>
- **M08-CAP-AI-73dedf86b2ae9801**: Complications
  Origin: original 1130

<a id="M08-CAP-AI-4c489437f236ad6d"></a>
- **M08-CAP-AI-4c489437f236ad6d**: Improves AI performance over time.
  Origin: original 1218

<a id="M08-CAP-AI-51e504ed76a26a9a"></a>
- **M08-CAP-AI-51e504ed76a26a9a**: Physician Feedback
  Origin: original 1218

<a id="M08-CAP-AI-8e665aa3e996e5bd"></a>
- **M08-CAP-AI-8e665aa3e996e5bd**: Outcome Analysis
  Origin: original 1218, original 4645

<a id="M08-CAP-AI-4d43acd832e1cd4a"></a>
- **M08-CAP-AI-4d43acd832e1cd4a**: Model Retraining
  Origin: original 1218

<a id="M08-CAP-AI-6818dfacbd189857"></a>
- **M08-CAP-AI-6818dfacbd189857**: Continuously improves AI models using validated clinical outcomes.
  Origin: original 1259

<a id="M08-CAP-AI-8e93e4a13d382570"></a>
- **M08-CAP-AI-8e93e4a13d382570**: Feedback Loops
  Origin: original 1259

<a id="M08-CAP-AI-facb8ad5273cdabc"></a>
- **M08-CAP-AI-facb8ad5273cdabc**: Model Validation
  Origin: original 1259

<a id="M08-CAP-AI-ba62f4a3100e7636"></a>
- **M08-CAP-AI-ba62f4a3100e7636**: Version Control
  Origin: original 1259

<a id="M08-CAP-AI-8ff50782d3bb470f"></a>
- **M08-CAP-AI-8ff50782d3bb470f**: Safety Monitoring
  Origin: original 1259

<a id="M08-CAP-AI-2c6fa7899dcd4c74"></a>
- **M08-CAP-AI-2c6fa7899dcd4c74**: Stores approved AI models.
  Origin: original 1369

<a id="M08-CAP-AI-82e1b71f8b88741f"></a>
- **M08-CAP-AI-82e1b71f8b88741f**: Version
  Origin: original 1369

<a id="M08-CAP-AI-2ce3aa76fd181e1d"></a>
- **M08-CAP-AI-2ce3aa76fd181e1d**: Training Dataset
  Origin: original 1369

<a id="M08-CAP-AI-b44c883b67d1fc42"></a>
- **M08-CAP-AI-b44c883b67d1fc42**: Approval Date
  Origin: original 1369

<a id="M08-CAP-AI-def54dde93aa4578"></a>
- **M08-CAP-AI-def54dde93aa4578**: Performance
  Origin: original 1369

<a id="M08-CAP-AI-43c3f29e967ee543"></a>
- **M08-CAP-AI-43c3f29e967ee543**: Supports anesthesiologists.
  Origin: original 1386

<a id="M08-CAP-AI-5ece9f76c54dd0a2"></a>
- **M08-CAP-AI-5ece9f76c54dd0a2**: Allergies
  Origin: original 1386

<a id="M08-CAP-AI-aadf3c30932be61d"></a>
- **M08-CAP-AI-aadf3c30932be61d**: Previous Anesthesia
  Origin: original 1386

<a id="M08-CAP-AI-dab6b856873292f9"></a>
- **M08-CAP-AI-dab6b856873292f9**: Airway Risk
  Origin: original 1386

<a id="M08-CAP-AI-4f4c8a1e1164c973"></a>
- **M08-CAP-AI-4f4c8a1e1164c973**: Drug Interactions
  Origin: original 1386

<a id="M08-CAP-AI-f897316474a8eadd"></a>
- **M08-CAP-AI-f897316474a8eadd**: Continuously updates medical knowledge.
  Origin: original 1471

<a id="M08-CAP-AI-5ec990d0cc2461d2"></a>
- **M08-CAP-AI-5ec990d0cc2461d2**: New Guidelines
  Origin: original 1471

<a id="M08-CAP-AI-f61b85758526a8c0"></a>
- **M08-CAP-AI-f61b85758526a8c0**: Clinical Publications
  Origin: original 1471

<a id="M08-CAP-AI-62d6fc9fdad9a90f"></a>
- **M08-CAP-AI-62d6fc9fdad9a90f**: Regulatory Updates
  Origin: original 1471

<a id="M08-CAP-AI-741f92907fe12e30"></a>
- **M08-CAP-AI-741f92907fe12e30**: Continuously improves medical reasoning.
  Origin: original 1547

<a id="M08-CAP-AI-c4ea976228873bd2"></a>
- **M08-CAP-AI-c4ea976228873bd2**: Knowledge Updates
  Origin: original 1547

<a id="M08-CAP-AI-1cf96fe2802613d0"></a>
- **M08-CAP-AI-1cf96fe2802613d0**: Clinical Validation
  Origin: original 1547

<a id="M08-CAP-AI-4b50c358aa360e52"></a>
- **M08-CAP-AI-4b50c358aa360e52**: Learning Feedback
  Origin: original 1547

<a id="M08-CAP-AI-0d1540b1a68f7e8f"></a>
- **M08-CAP-AI-0d1540b1a68f7e8f**: Analyzes pathogen genomes.
  Origin: original 1609

<a id="M08-CAP-AI-db32313ce12b7e1f"></a>
- **M08-CAP-AI-db32313ce12b7e1f**: Virus Evolution
  Origin: original 1609

<a id="M08-CAP-AI-017e6bc248ac89ac"></a>
- **M08-CAP-AI-017e6bc248ac89ac**: Bacterial Resistance
  Origin: original 1609

<a id="M08-CAP-AI-7494732d73511c77"></a>
- **M08-CAP-AI-7494732d73511c77**: Outbreak Tracking
  Origin: original 1609

<a id="M08-CAP-AI-fd7218d17d8f6cbc"></a>
- **M08-CAP-AI-fd7218d17d8f6cbc**: Central AI engine for human genome analysis.
  Origin: original 1621

<a id="M08-CAP-AI-3355a2d8d072ba69"></a>
- **M08-CAP-AI-3355a2d8d072ba69**: Whole Genome
  Origin: original 1621

<a id="M08-CAP-AI-5142e3492310aad7"></a>
- **M08-CAP-AI-5142e3492310aad7**: Whole Exome
  Origin: original 1621

<a id="M08-CAP-AI-a73df7bf903e5b7a"></a>
- **M08-CAP-AI-a73df7bf903e5b7a**: Chromosome Analysis
  Origin: original 1621

<a id="M08-CAP-AI-7ec7b591c5f9ef1b"></a>
- **M08-CAP-AI-7ec7b591c5f9ef1b**: Structural Variants
  Origin: original 1621

<a id="M08-CAP-AI-fbe9377634fea335"></a>
- **M08-CAP-AI-fbe9377634fea335**: Provides AI-assisted neonatal care.
  Origin: original 3034

<a id="M08-CAP-AI-11cfdc03d002bd1a"></a>
- **M08-CAP-AI-11cfdc03d002bd1a**: Sepsis Prediction
  Origin: original 3034, original 3272

<a id="M08-CAP-AI-3c0a22bf58e5796e"></a>
- **M08-CAP-AI-3c0a22bf58e5796e**: Mortality Risk Prediction
  Origin: original 3034

<a id="M08-CAP-AI-aa648ba0ca889ac8"></a>
- **M08-CAP-AI-aa648ba0ca889ac8**: Respiratory Failure Prediction
  Origin: original 3034, original 3272

<a id="M08-CAP-AI-ad4daec437f84d76"></a>
- **M08-CAP-AI-ad4daec437f84d76**: Growth Analysis
  Origin: original 3034

<a id="M08-CAP-AI-cbf6ccb801a24154"></a>
- **M08-CAP-AI-cbf6ccb801a24154**: Personalized NICU Care
  Origin: original 3034, original 3272

<a id="M08-CAP-AI-20f2707e68633001"></a>
- **M08-CAP-AI-20f2707e68633001**: Provides AI-assisted pediatric cardiology.
  Origin: original 3072, original 3674

<a id="M08-CAP-AI-0427ae3dea7e3203"></a>
- **M08-CAP-AI-0427ae3dea7e3203**: Congenital Defect Detection
  Origin: original 3072

<a id="M08-CAP-AI-f277181ff3843549"></a>
- **M08-CAP-AI-f277181ff3843549**: Arrhythmia Prediction
  Origin: original 3072

<a id="M08-CAP-AI-d0b6904db0e204ee"></a>
- **M08-CAP-AI-d0b6904db0e204ee**: Heart Failure Prediction
  Origin: original 3072

<a id="M08-CAP-AI-c5dec0658b2ac199"></a>
- **M08-CAP-AI-c5dec0658b2ac199**: Surgical Risk Assessment
  Origin: original 3072

<a id="M08-CAP-AI-e5788cfd990c2baf"></a>
- **M08-CAP-AI-e5788cfd990c2baf**: Personalized Therapy
  Origin: original 3072, original 3173, original 3193, original 3252, original 3293, original 3453

<a id="M08-CAP-AI-b157eac29483939f"></a>
- **M08-CAP-AI-b157eac29483939f**: Provides AI-assisted pediatric oncology.
  Origin: original 3133

<a id="M08-CAP-AI-745a694322e7b6fc"></a>
- **M08-CAP-AI-745a694322e7b6fc**: Tumor Classification
  Origin: original 3133

<a id="M08-CAP-AI-3607a13cd5c82325"></a>
- **M08-CAP-AI-3607a13cd5c82325**: Survival Prediction
  Origin: original 3133

<a id="M08-CAP-AI-da80f24cbf47cff5"></a>
- **M08-CAP-AI-da80f24cbf47cff5**: Treatment Optimization
  Origin: original 3133, original 3674

<a id="M08-CAP-AI-ac53ad933b194bce"></a>
- **M08-CAP-AI-ac53ad933b194bce**: Relapse Prediction
  Origin: original 3133

<a id="M08-CAP-AI-ebb78406d2c72ad4"></a>
- **M08-CAP-AI-ebb78406d2c72ad4**: Precision Oncology
  Origin: original 3133

<a id="M08-CAP-AI-0329042d7f7d7e79"></a>
- **M08-CAP-AI-0329042d7f7d7e79**: Provides AI-assisted pediatric gastroenterology.
  Origin: original 3173, original 3293, original 3453

<a id="M08-CAP-AI-864659a128f4705e"></a>
- **M08-CAP-AI-864659a128f4705e**: IBD Activity Prediction
  Origin: original 3173, original 3453

<a id="M08-CAP-AI-ed913f21f8659808"></a>
- **M08-CAP-AI-ed913f21f8659808**: Nutritional Risk Assessment
  Origin: original 3173

<a id="M08-CAP-AI-5af1ce8c2aa47db7"></a>
- **M08-CAP-AI-5af1ce8c2aa47db7**: Liver Disease Prediction
  Origin: original 3173

<a id="M08-CAP-AI-366e643b3424c38f"></a>
- **M08-CAP-AI-366e643b3424c38f**: Endoscopic Interpretation
  Origin: original 3173

<a id="M08-CAP-AI-797104c76e95b4e2"></a>
- **M08-CAP-AI-797104c76e95b4e2**: Provides AI-assisted respiratory medicine.
  Origin: original 3193

<a id="M08-CAP-AI-7f9d7ee5ddfbc00b"></a>
- **M08-CAP-AI-7f9d7ee5ddfbc00b**: Asthma Risk Prediction
  Origin: original 3193, original 3374

<a id="M08-CAP-AI-8691011a86d1774e"></a>
- **M08-CAP-AI-8691011a86d1774e**: Respiratory Failure Detection
  Origin: original 3193

<a id="M08-CAP-AI-5cd0e92957039235"></a>
- **M08-CAP-AI-5cd0e92957039235**: Imaging Interpretation
  Origin: original 3193, original 3374

<a id="M08-CAP-AI-581db53ddf6776de"></a>
- **M08-CAP-AI-581db53ddf6776de**: Pulmonary Function Analysis
  Origin: original 3193

<a id="M08-CAP-AI-9f37252cf985c389"></a>
- **M08-CAP-AI-9f37252cf985c389**: Provides AI-assisted pediatric hematology.
  Origin: original 3252

<a id="M08-CAP-AI-87291665a2daaa53"></a>
- **M08-CAP-AI-87291665a2daaa53**: Anemia Classification
  Origin: original 3252

<a id="M08-CAP-AI-9891d2378967675a"></a>
- **M08-CAP-AI-9891d2378967675a**: Bleeding Risk Prediction
  Origin: original 3252

<a id="M08-CAP-AI-258ba02bbfe40e2a"></a>
- **M08-CAP-AI-258ba02bbfe40e2a**: Transfusion Optimization
  Origin: original 3252

<a id="M08-CAP-AI-574347605751b962"></a>
- **M08-CAP-AI-574347605751b962**: Bone Marrow Interpretation
  Origin: original 3252

<a id="M08-CAP-AI-e417cc0827c7228b"></a>
- **M08-CAP-AI-e417cc0827c7228b**: Provides AI-assisted neonatal medicine.
  Origin: original 3272

<a id="M08-CAP-AI-960fa867245d5b4c"></a>
- **M08-CAP-AI-960fa867245d5b4c**: Neurodevelopment Risk Assessment
  Origin: original 3272

<a id="M08-CAP-AI-6f98364aa85ccf64"></a>
- **M08-CAP-AI-6f98364aa85ccf64**: Growth Prediction
  Origin: original 3272

<a id="M08-CAP-AI-ba73fe83e55b76ca"></a>
- **M08-CAP-AI-ba73fe83e55b76ca**: Disease Activity Prediction
  Origin: original 3293

<a id="M08-CAP-AI-aef9a39aa5ec545b"></a>
- **M08-CAP-AI-aef9a39aa5ec545b**: Nutrition Planning
  Origin: original 3293

<a id="M08-CAP-AI-ddf3a3d6ce68935d"></a>
- **M08-CAP-AI-ddf3a3d6ce68935d**: Endoscopy Interpretation
  Origin: original 3293

<a id="M08-CAP-AI-0e0cb30958bff7fc"></a>
- **M08-CAP-AI-0e0cb30958bff7fc**: Provides AI-assisted pediatric pulmonology.
  Origin: original 3374

<a id="M08-CAP-AI-5c1ad43abdc4522a"></a>
- **M08-CAP-AI-5c1ad43abdc4522a**: Exacerbation Prediction
  Origin: original 3374

<a id="M08-CAP-AI-9d369c7e5226e7bf"></a>
- **M08-CAP-AI-9d369c7e5226e7bf**: Therapy Optimization
  Origin: original 3374

<a id="M08-CAP-AI-e1ba92629e5741f2"></a>
- **M08-CAP-AI-e1ba92629e5741f2**: Personalized Respiratory Care
  Origin: original 3374

<a id="M08-CAP-AI-b9b9efdf5eab53fa"></a>
- **M08-CAP-AI-b9b9efdf5eab53fa**: Differential Diagnosis
  Origin: original 3453, original 4192

<a id="M08-CAP-AI-405ba7eb79ea112f"></a>
- **M08-CAP-AI-405ba7eb79ea112f**: Nutrition Optimization
  Origin: original 3453

<a id="M08-CAP-AI-845f2cc59aff51f2"></a>
- **M08-CAP-AI-845f2cc59aff51f2**: Liver Disease Monitoring
  Origin: original 3453

<a id="M08-CAP-AI-189797f6ef184ab5"></a>
- **M08-CAP-AI-189797f6ef184ab5**: Diagnosis Assistance
  Origin: original 3674

<a id="M08-CAP-AI-df9adc175516e58f"></a>
- **M08-CAP-AI-df9adc175516e58f**: ECG Interpretation
  Origin: original 3674

<a id="M08-CAP-AI-cb3f44db33fde2bb"></a>
- **M08-CAP-AI-cb3f44db33fde2bb**: Risk Prediction
  Origin: original 3674

<a id="M08-CAP-AI-ba510b42cb7ae4e1"></a>
- **M08-CAP-AI-ba510b42cb7ae4e1**: Surgical Planning Support
  Origin: original 3674

<a id="M08-CAP-AI-de915c9ea3e414c3"></a>
- **M08-CAP-AI-de915c9ea3e414c3**: Provides AI-assisted pediatric cardiology decision support.
  Origin: original 4075

<a id="M08-CAP-AI-cb167fa067b397f5"></a>
- **M08-CAP-AI-cb167fa067b397f5**: ECG Pattern Analysis
  Origin: original 4075

<a id="M08-CAP-AI-c839265a781a69d2"></a>
- **M08-CAP-AI-c839265a781a69d2**: Echocardiography Assistance
  Origin: original 4075

<a id="M08-CAP-AI-25c06eebf05a9dd4"></a>
- **M08-CAP-AI-25c06eebf05a9dd4**: Risk Stratification
  Origin: original 4075, original 4192, original 4243

<a id="M08-CAP-AI-f51972b7feda8a8e"></a>
- **M08-CAP-AI-f51972b7feda8a8e**: Disease Progression Analysis
  Origin: original 4075

<a id="M08-CAP-AI-a0b32b9e75f82dc6"></a>
- **M08-CAP-AI-a0b32b9e75f82dc6**: Imaging Comparison
  Origin: original 4075

<a id="M08-CAP-AI-ddca93d7133f65aa"></a>
- **M08-CAP-AI-ddca93d7133f65aa**: Treatment Monitoring
  Origin: original 4075

<a id="M08-CAP-AI-fcbdc13a5090e4ca"></a>
- **M08-CAP-AI-fcbdc13a5090e4ca**: AI outputs require qualified clinician review.
  Origin: original 4075

<a id="M08-CAP-AI-e65c8e35d5b171da"></a>
- **M08-CAP-AI-e65c8e35d5b171da**: Provides AI-assisted analysis of hematologic morphology.
  Origin: original 4191

<a id="M08-CAP-AI-6f732244adbdcf69"></a>
- **M08-CAP-AI-6f732244adbdcf69**: Cell Classification
  Origin: original 4191, original 4223

<a id="M08-CAP-AI-c6c2e9caa4c0acca"></a>
- **M08-CAP-AI-c6c2e9caa4c0acca**: Abnormal Cell Detection
  Origin: original 4191

<a id="M08-CAP-AI-36d25571f2733c49"></a>
- **M08-CAP-AI-36d25571f2733c49**: Morphological Patterns
  Origin: original 4191

<a id="M08-CAP-AI-acf5cf1000669e83"></a>
- **M08-CAP-AI-acf5cf1000669e83**: Blood Smear Analysis
  Origin: original 4191

<a id="M08-CAP-AI-dad20a80d4c123c5"></a>
- **M08-CAP-AI-dad20a80d4c123c5**: Bone Marrow Assistance
  Origin: original 4191

<a id="M08-CAP-AI-f7f24eecaeab782c"></a>
- **M08-CAP-AI-f7f24eecaeab782c**: Comparison with Previous Studies
  Origin: original 4191

<a id="M08-CAP-AI-63b2c2591cf254e4"></a>
- **M08-CAP-AI-63b2c2591cf254e4**: AI output remains subject to laboratory specialist verification.
  Origin: original 4191

<a id="M08-CAP-AI-315a773e94fce784"></a>
- **M08-CAP-AI-315a773e94fce784**: Provides AI-assisted hematology decision support.
  Origin: original 4192

<a id="M08-CAP-AI-da39057464c2dfd8"></a>
- **M08-CAP-AI-da39057464c2dfd8**: CBC Pattern Analysis
  Origin: original 4192

<a id="M08-CAP-AI-f69f4ccc40803b79"></a>
- **M08-CAP-AI-f69f4ccc40803b79**: Coagulation Interpretation
  Origin: original 4192

<a id="M08-CAP-AI-75e363a40438afc7"></a>
- **M08-CAP-AI-75e363a40438afc7**: Hemolysis Analysis
  Origin: original 4192

<a id="M08-CAP-AI-ea1cb6b1ec6e96d9"></a>
- **M08-CAP-AI-ea1cb6b1ec6e96d9**: Cytopenia Assessment
  Origin: original 4192

<a id="M08-CAP-AI-70e9e738396b2b86"></a>
- **M08-CAP-AI-70e9e738396b2b86**: Longitudinal Trend Detection
  Origin: original 4192

<a id="M08-CAP-AI-b7580fca33832f23"></a>
- **M08-CAP-AI-b7580fca33832f23**: AI output requires qualified clinician review.
  Origin: original 4192, original 4494, original 4546

<a id="M08-CAP-AI-0022af0e87e56a8a"></a>
- **M08-CAP-AI-0022af0e87e56a8a**: Creates AI-assisted preliminary hematology documentation.
  Origin: original 4196

<a id="M08-CAP-AI-974125bf751aa7cf"></a>
- **M08-CAP-AI-974125bf751aa7cf**: AI may structure
  Origin: original 4196

<a id="M08-CAP-AI-194fd60f80cc5f1c"></a>
- **M08-CAP-AI-194fd60f80cc5f1c**: Bleeding History
  Origin: original 4196

<a id="M08-CAP-AI-46cdd9e5fce2291e"></a>
- **M08-CAP-AI-46cdd9e5fce2291e**: Infection History
  Origin: original 4196, original 4496

<a id="M08-CAP-AI-746fa472ce1cde7e"></a>
- **M08-CAP-AI-746fa472ce1cde7e**: Transfusion History
  Origin: original 4196

<a id="M08-CAP-AI-3cfa39200ce0ea10"></a>
- **M08-CAP-AI-3cfa39200ce0ea10**: Medication
  Origin: original 4196, original 4496, original 4548

<a id="M08-CAP-AI-0bea5346ef341f41"></a>
- **M08-CAP-AI-0bea5346ef341f41**: Family History
  Origin: original 4196, original 4548

<a id="M08-CAP-AI-ab3febd198e62322"></a>
- **M08-CAP-AI-ab3febd198e62322**: Laboratory Trends
  Origin: original 4196, original 4245

<a id="M08-CAP-AI-1c21d8579f03eaf3"></a>
- **M08-CAP-AI-1c21d8579f03eaf3**: Relevant Previous Events
  Origin: original 4196

<a id="M08-CAP-AI-f5cb854a76bc0800"></a>
- **M08-CAP-AI-f5cb854a76bc0800**: Clinician can
  Origin: original 4196

<a id="M08-CAP-AI-69f32cafadf0f19a"></a>
- **M08-CAP-AI-69f32cafadf0f19a**: Review
  Origin: original 4196

<a id="M08-CAP-AI-3542f6a4ee6f1af3"></a>
- **M08-CAP-AI-3542f6a4ee6f1af3**: Edit
  Origin: original 4196

<a id="M08-CAP-AI-5451bf3cc1272dca"></a>
- **M08-CAP-AI-5451bf3cc1272dca**: Correct
  Origin: original 4196

<a id="M08-CAP-AI-28ad873d9abfe5e5"></a>
- **M08-CAP-AI-28ad873d9abfe5e5**: Reject
  Origin: original 4196

<a id="M08-CAP-AI-df67f3d321605c07"></a>
- **M08-CAP-AI-df67f3d321605c07**: Approve
  Origin: original 4196

<a id="M08-CAP-AI-eb7717cd32a03f62"></a>
- **M08-CAP-AI-eb7717cd32a03f62**: Sign
  Origin: original 4196

<a id="M08-CAP-AI-d4695f4b08e4fa84"></a>
- **M08-CAP-AI-d4695f4b08e4fa84**: Publish
  Origin: original 4196

<a id="M08-CAP-AI-398e21329121884d"></a>
- **M08-CAP-AI-398e21329121884d**: AI-generated content remains draft until clinician validation.
  Origin: original 4196

<a id="M08-CAP-AI-3c6df7b174ba0ce9"></a>
- **M08-CAP-AI-3c6df7b174ba0ce9**: Provides AI-assisted pathology analysis.
  Origin: original 4223

<a id="M08-CAP-AI-e68ee16e4ac831ac"></a>
- **M08-CAP-AI-e68ee16e4ac831ac**: Tissue Pattern Detection
  Origin: original 4223

<a id="M08-CAP-AI-6680c2936b5fa8ac"></a>
- **M08-CAP-AI-6680c2936b5fa8ac**: Region Identification
  Origin: original 4223

<a id="M08-CAP-AI-d65ec12a66aa5f3d"></a>
- **M08-CAP-AI-d65ec12a66aa5f3d**: Quantification Assistance
  Origin: original 4223

<a id="M08-CAP-AI-816f49494ba8a0c9"></a>
- **M08-CAP-AI-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4223

<a id="M08-CAP-AI-18b204a560e24d64"></a>
- **M08-CAP-AI-18b204a560e24d64**: Molecular Correlation
  Origin: original 4223

<a id="M08-CAP-AI-84e6190a9d01982c"></a>
- **M08-CAP-AI-84e6190a9d01982c**: Final pathology interpretation remains under specialist control.
  Origin: original 4223

<a id="M08-CAP-AI-7adfd37e445096e1"></a>
- **M08-CAP-AI-7adfd37e445096e1**: Provides AI-assisted pediatric oncology intelligence.
  Origin: original 4243

<a id="M08-CAP-AI-63050a6a31068674"></a>
- **M08-CAP-AI-63050a6a31068674**: Diagnostic Pattern Analysis
  Origin: original 4243

<a id="M08-CAP-AI-d5e29d9580d47d44"></a>
- **M08-CAP-AI-d5e29d9580d47d44**: Molecular Evidence Retrieval
  Origin: original 4243

<a id="M08-CAP-AI-0274e221f1e6fdac"></a>
- **M08-CAP-AI-0274e221f1e6fdac**: Treatment Response Analysis
  Origin: original 4243

<a id="M08-CAP-AI-9f978d71481261e8"></a>
- **M08-CAP-AI-9f978d71481261e8**: Toxicity Pattern Detection
  Origin: original 4243

<a id="M08-CAP-AI-4105d2d21f707160"></a>
- **M08-CAP-AI-4105d2d21f707160**: Trial Matching
  Origin: original 4243

<a id="M08-CAP-AI-002127e6b98e2212"></a>
- **M08-CAP-AI-002127e6b98e2212**: Longitudinal Change Detection
  Origin: original 4243, original 4494

<a id="M08-CAP-AI-0320a82a082185b6"></a>
- **M08-CAP-AI-0320a82a082185b6**: AI does not independently diagnose cancer or prescribe treatment.
  Origin: original 4243

<a id="M08-CAP-AI-cc3438b64587f167"></a>
- **M08-CAP-AI-cc3438b64587f167**: Creates clinician-reviewable oncology case summaries.
  Origin: original 4245

<a id="M08-CAP-AI-de8a3446a7531d14"></a>
- **M08-CAP-AI-de8a3446a7531d14**: AI may synthesize
  Origin: original 4245

<a id="M08-CAP-AI-5f124f9e42776b79"></a>
- **M08-CAP-AI-5f124f9e42776b79**: Diagnosis
  Origin: original 4245

<a id="M08-CAP-AI-2d2ffbcbba25564e"></a>
- **M08-CAP-AI-2d2ffbcbba25564e**: Pathology
  Origin: original 4245

<a id="M08-CAP-AI-762b0c3f135759a4"></a>
- **M08-CAP-AI-762b0c3f135759a4**: Molecular Findings
  Origin: original 4245

<a id="M08-CAP-AI-b9fafd8fe16e5ec1"></a>
- **M08-CAP-AI-b9fafd8fe16e5ec1**: Previous Treatment
  Origin: original 4245, original 4548

<a id="M08-CAP-AI-fc1f72d0e6a0ae89"></a>
- **M08-CAP-AI-fc1f72d0e6a0ae89**: Toxicities
  Origin: original 4245

<a id="M08-CAP-AI-970ace8f4b31dfb0"></a>
- **M08-CAP-AI-970ace8f4b31dfb0**: Current Symptoms
  Origin: original 4245

<a id="M08-CAP-AI-af5fb9be630347de"></a>
- **M08-CAP-AI-af5fb9be630347de**: Outstanding Clinical Questions
  Origin: original 4245

<a id="M08-CAP-AI-ad656f8555ffd0f0"></a>
- **M08-CAP-AI-ad656f8555ffd0f0**: Every statement links to its source data where technically available.
  Origin: original 4245

<a id="M08-CAP-AI-cd26f305f1d59993"></a>
- **M08-CAP-AI-cd26f305f1d59993**: Provides AI-assisted pediatric respiratory intelligence.
  Origin: original 4494

<a id="M08-CAP-AI-5b67138154e85b1b"></a>
- **M08-CAP-AI-5b67138154e85b1b**: Symptom Pattern Analysis
  Origin: original 4494, original 4546

<a id="M08-CAP-AI-17b88f3f76a74c87"></a>
- **M08-CAP-AI-17b88f3f76a74c87**: Pulmonary Function Trends
  Origin: original 4494

<a id="M08-CAP-AI-b7d5cb63bb9a9cf0"></a>
- **M08-CAP-AI-b7d5cb63bb9a9cf0**: Exacerbation Risk Support
  Origin: original 4494

<a id="M08-CAP-AI-caeae47d72a9a8ce"></a>
- **M08-CAP-AI-caeae47d72a9a8ce**: Microbiology Correlation
  Origin: original 4494

<a id="M08-CAP-AI-e85e1ee53007deac"></a>
- **M08-CAP-AI-e85e1ee53007deac**: Treatment-response Analysis
  Origin: original 4494, original 4546

<a id="M08-CAP-AI-b4d46b8eacd8287c"></a>
- **M08-CAP-AI-b4d46b8eacd8287c**: Sleep Respiratory Pattern Analysis
  Origin: original 4494

<a id="M08-CAP-AI-54c10ca1b79986f6"></a>
- **M08-CAP-AI-54c10ca1b79986f6**: Creates structured respiratory pre-visit summaries.
  Origin: original 4496

<a id="M08-CAP-AI-3c61a0f665858068"></a>
- **M08-CAP-AI-3c61a0f665858068**: AI may organize
  Origin: original 4496, original 4548

<a id="M08-CAP-AI-3d2ca03dcd57e33b"></a>
- **M08-CAP-AI-3d2ca03dcd57e33b**: Exacerbations
  Origin: original 4496

<a id="M08-CAP-AI-f1665310ad9cc22b"></a>
- **M08-CAP-AI-f1665310ad9cc22b**: Rescue Medication Use
  Origin: original 4496

<a id="M08-CAP-AI-2356a36c34e89685"></a>
- **M08-CAP-AI-2356a36c34e89685**: Allergy
  Origin: original 4496

<a id="M08-CAP-AI-0051f0f3665d142b"></a>
- **M08-CAP-AI-0051f0f3665d142b**: Device Data
  Origin: original 4496

<a id="M08-CAP-AI-28cd4c8ebb038965"></a>
- **M08-CAP-AI-28cd4c8ebb038965**: Pulmonary Function
  Origin: original 4496

<a id="M08-CAP-AI-a03f16b05933c46b"></a>
- **M08-CAP-AI-a03f16b05933c46b**: Sleep Symptoms
  Origin: original 4496

<a id="M08-CAP-AI-295678422f789df2"></a>
- **M08-CAP-AI-295678422f789df2**: Previous Hospitalizations
  Origin: original 4496

<a id="M08-CAP-AI-958ff82b9d0a550b"></a>
- **M08-CAP-AI-958ff82b9d0a550b**: Generated content remains draft until clinician validation.
  Origin: original 4496, original 4548

<a id="M08-CAP-AI-c0cdc8d3633747a7"></a>
- **M08-CAP-AI-c0cdc8d3633747a7**: Provides AI-assisted digestive disease intelligence.
  Origin: original 4546

<a id="M08-CAP-AI-b0250470a5f2c682"></a>
- **M08-CAP-AI-b0250470a5f2c682**: Growth Trend Analysis
  Origin: original 4546

<a id="M08-CAP-AI-57911d9f9028b0e8"></a>
- **M08-CAP-AI-57911d9f9028b0e8**: Laboratory Correlation
  Origin: original 4546

<a id="M08-CAP-AI-40b93f616979bd15"></a>
- **M08-CAP-AI-40b93f616979bd15**: Endoscopy Support
  Origin: original 4546

<a id="M08-CAP-AI-4ade8b79cf1f3a16"></a>
- **M08-CAP-AI-4ade8b79cf1f3a16**: Nutrition Risk Detection
  Origin: original 4546

<a id="M08-CAP-AI-2e629c4a74e4f487"></a>
- **M08-CAP-AI-2e629c4a74e4f487**: Disease Activity Trends
  Origin: original 4546

<a id="M08-CAP-AI-fbd696fb207351a3"></a>
- **M08-CAP-AI-fbd696fb207351a3**: Creates structured pre-visit gastroenterology summaries.
  Origin: original 4548

<a id="M08-CAP-AI-7af1c314d018e2ff"></a>
- **M08-CAP-AI-7af1c314d018e2ff**: Stool Patterns
  Origin: original 4548

<a id="M08-CAP-AI-8b55d68530fc792d"></a>
- **M08-CAP-AI-8b55d68530fc792d**: Diet
  Origin: original 4548

<a id="M08-CAP-AI-9ac0748afd93e1ab"></a>
- **M08-CAP-AI-9ac0748afd93e1ab**: Growth
  Origin: original 4548

<a id="M08-CAP-AI-8b7fbc9b40f09116"></a>
- **M08-CAP-AI-8b7fbc9b40f09116**: Previous Testing
  Origin: original 4548

<a id="M08-CAP-AI-f6a3e5b63623f74c"></a>
- **M08-CAP-AI-f6a3e5b63623f74c**: Provide explainable AI-assisted intelligence for pediatric neurosurgical workflows.
  Origin: original 4645

<a id="M08-CAP-AI-ec92b46a30c6e284"></a>
- **M08-CAP-AI-ec92b46a30c6e284**: Clinical Timeline Generation
  Origin: original 4645

<a id="M08-CAP-AI-6b97ceb64c1fa0a3"></a>
- **M08-CAP-AI-6b97ceb64c1fa0a3**: Imaging Correlation
  Origin: original 4645, original 4722

<a id="M08-CAP-AI-e41f7aeea0f1bbae"></a>
- **M08-CAP-AI-e41f7aeea0f1bbae**: Surgical History Summarization
  Origin: original 4645

<a id="M08-CAP-AI-075ac5de0c36db0b"></a>
- **M08-CAP-AI-075ac5de0c36db0b**: Preoperative Data Organization
  Origin: original 4645

<a id="M08-CAP-AI-9685aecb5492978a"></a>
- **M08-CAP-AI-9685aecb5492978a**: Postoperative Change Detection
  Origin: original 4645

<a id="M08-CAP-AI-fbea04ce7fb3a75b"></a>
- **M08-CAP-AI-fbea04ce7fb3a75b**: Complication Pattern Support
  Origin: original 4645, original 4698

<a id="M08-CAP-AI-b007d4edff89a0b4"></a>
- **M08-CAP-AI-b007d4edff89a0b4**: Missing-data Detection
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-b7095468af1c78af"></a>
- **M08-CAP-AI-b7095468af1c78af**: Multidisciplinary Case Preparation
  Origin: original 4645, original 4722

<a id="M08-CAP-AI-b3061fdef0bee5a2"></a>
- **M08-CAP-AI-b3061fdef0bee5a2**: Documentation Assistance
  Origin: original 4645, original 5048, original 5123

<a id="M08-CAP-AI-dc120a68c610e3ce"></a>
- **M08-CAP-AI-dc120a68c610e3ce**: Potential Advanced Functions:
  Origin: original 4645

<a id="M08-CAP-AI-72216e6c6e0dfa51"></a>
- **M08-CAP-AI-72216e6c6e0dfa51**: Anatomical Segmentation
  Origin: original 4645

<a id="M08-CAP-AI-91efcfcbd5e2fc7a"></a>
- **M08-CAP-AI-91efcfcbd5e2fc7a**: Volumetric Measurement Support
  Origin: original 4645

<a id="M08-CAP-AI-8e3285b1b1f8d30a"></a>
- **M08-CAP-AI-8e3285b1b1f8d30a**: Longitudinal Imaging Comparison
  Origin: original 4645

<a id="M08-CAP-AI-61a54e3005901ea2"></a>
- **M08-CAP-AI-61a54e3005901ea2**: Surgical Planning Visualization
  Origin: original 4645

<a id="M08-CAP-AI-fd21af16dbd376bd"></a>
- **M08-CAP-AI-fd21af16dbd376bd**: AI Governance:
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-9a9561890e832be8"></a>
- **M08-CAP-AI-9a9561890e832be8**: Explainability
  Origin: original 4645, original 4671, original 4698, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-7befc2cd00b0aa53"></a>
- **M08-CAP-AI-7befc2cd00b0aa53**: Confidence and Uncertainty
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-4809454694e9fd3a"></a>
- **M08-CAP-AI-4809454694e9fd3a**: Source Traceability
  Origin: original 4645, original 5048, original 5123

<a id="M08-CAP-AI-d2abd93c250228d8"></a>
- **M08-CAP-AI-d2abd93c250228d8**: Model Version
  Origin: original 4645

<a id="M08-CAP-AI-b7fb073893159334"></a>
- **M08-CAP-AI-b7fb073893159334**: Human Validation
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-79b63a83bc7d1c15"></a>
- **M08-CAP-AI-79b63a83bc7d1c15**: Audit Trail
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-07f8d474b8b4141c"></a>
- **M08-CAP-AI-07f8d474b8b4141c**: Safety:
  Origin: original 4645, original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-753dcde816423b98"></a>
- **M08-CAP-AI-753dcde816423b98**: AI cannot autonomously select surgical procedures or execute surgical decisions.
  Origin: original 4645

<a id="M08-CAP-AI-210039761f4b72b3"></a>
- **M08-CAP-AI-210039761f4b72b3**: Provide explainable AI-assisted intelligence across pediatric orthopedic workflows.
  Origin: original 4671

<a id="M08-CAP-AI-27610827eeb1a23d"></a>
- **M08-CAP-AI-27610827eeb1a23d**: Imaging Comparison Support
  Origin: original 4671, original 5048, original 5123

<a id="M08-CAP-AI-6cf92eeaac686036"></a>
- **M08-CAP-AI-6cf92eeaac686036**: Skeletal Measurement Support
  Origin: original 4671

<a id="M08-CAP-AI-accaf18b5656e48e"></a>
- **M08-CAP-AI-accaf18b5656e48e**: Alignment Measurement
  Origin: original 4671

<a id="M08-CAP-AI-7b244cf1e2ddde87"></a>
- **M08-CAP-AI-7b244cf1e2ddde87**: Growth-related Trend Analysis
  Origin: original 4671

<a id="M08-CAP-AI-c215266851d817b0"></a>
- **M08-CAP-AI-c215266851d817b0**: Fracture Follow-up Support
  Origin: original 4671

<a id="M08-CAP-AI-12b971b6d454d61e"></a>
- **M08-CAP-AI-12b971b6d454d61e**: Spine Curve Measurement Support
  Origin: original 4671

<a id="M08-CAP-AI-6853f434a8522a25"></a>
- **M08-CAP-AI-6853f434a8522a25**: Limb Length Analysis Support
  Origin: original 4671

<a id="M08-CAP-AI-7da6f34cee47322c"></a>
- **M08-CAP-AI-7da6f34cee47322c**: Clinical Timeline Summarization
  Origin: original 4671

<a id="M08-CAP-AI-5091fe79e84b7b61"></a>
- **M08-CAP-AI-5091fe79e84b7b61**: Functional Trend Analysis
  Origin: original 4671

<a id="M08-CAP-AI-db175e2feece6649"></a>
- **M08-CAP-AI-db175e2feece6649**: Source Data Traceability
  Origin: original 4671, original 4698, original 4722, original 4998

<a id="M08-CAP-AI-3b0940a382a9398f"></a>
- **M08-CAP-AI-3b0940a382a9398f**: Model Version Tracking
  Origin: original 4671, original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-36b24493bcae3f43"></a>
- **M08-CAP-AI-36b24493bcae3f43**: Performance Monitoring
  Origin: original 4671, original 4698, original 4722

<a id="M08-CAP-AI-11102c59a338c5dd"></a>
- **M08-CAP-AI-11102c59a338c5dd**: AI cannot independently establish surgical indications, diagnose fractures or determine treatment.
  Origin: original 4671

<a id="M08-CAP-AI-61b26759b9f33427"></a>
- **M08-CAP-AI-61b26759b9f33427**: Provide explainable AI-assisted intelligence across pediatric trauma and rehabilitation pathways.
  Origin: original 4698

<a id="M08-CAP-AI-38bcac0ae65115fb"></a>
- **M08-CAP-AI-38bcac0ae65115fb**: Trauma Timeline Summarization
  Origin: original 4698

<a id="M08-CAP-AI-e50f7fc788dd576b"></a>
- **M08-CAP-AI-e50f7fc788dd576b**: Functional Trend Detection
  Origin: original 4698

<a id="M08-CAP-AI-a1667b6d6ce4f087"></a>
- **M08-CAP-AI-a1667b6d6ce4f087**: Rehabilitation Progress Analysis
  Origin: original 4698

<a id="M08-CAP-AI-dde1a4768f2d3826"></a>
- **M08-CAP-AI-dde1a4768f2d3826**: Readmission Pattern Analysis
  Origin: original 4698

<a id="M08-CAP-AI-9eeee74ffe4a8605"></a>
- **M08-CAP-AI-9eeee74ffe4a8605**: Multisystem Data Correlation
  Origin: original 4698

<a id="M08-CAP-AI-f2302036a7ffb3f4"></a>
- **M08-CAP-AI-f2302036a7ffb3f4**: Clinical Documentation Support
  Origin: original 4698, original 4998

<a id="M08-CAP-AI-072e7502688764f2"></a>
- **M08-CAP-AI-072e7502688764f2**: Outcome Visualization
  Origin: original 4698

<a id="M08-CAP-AI-ba0b80302ca1bd22"></a>
- **M08-CAP-AI-ba0b80302ca1bd22**: Care Coordination Support
  Origin: original 4698

<a id="M08-CAP-AI-c161c8c1b3d03965"></a>
- **M08-CAP-AI-c161c8c1b3d03965**: Bias Monitoring
  Origin: original 4698, original 4722, original 4998, original 5048, original 5123

<a id="M08-CAP-AI-81594eb116869cee"></a>
- **M08-CAP-AI-81594eb116869cee**: AI cannot autonomously determine emergency treatment, surgery, rehabilitation intensity or return-to-sport clearance.
  Origin: original 4698

<a id="M08-CAP-AI-dd9e35704c7484e5"></a>
- **M08-CAP-AI-dd9e35704c7484e5**: Provide explainable AI-assisted intelligence across complex pediatric rheumatology workflows.
  Origin: original 4722

<a id="M08-CAP-AI-1d91e192094c39ac"></a>
- **M08-CAP-AI-1d91e192094c39ac**: Multisystem Timeline Summarization
  Origin: original 4722

<a id="M08-CAP-AI-e8be23860ddbc4d0"></a>
- **M08-CAP-AI-e8be23860ddbc4d0**: Disease Activity Trend Support
  Origin: original 4722

<a id="M08-CAP-AI-9eb50aff4bb3deea"></a>
- **M08-CAP-AI-9eb50aff4bb3deea**: Laboratory Pattern Analysis
  Origin: original 4722

<a id="M08-CAP-AI-60618a4b963b51ee"></a>
- **M08-CAP-AI-60618a4b963b51ee**: Medication-response Analysis
  Origin: original 4722, original 4998, original 5048

<a id="M08-CAP-AI-b2173f3dac44facb"></a>
- **M08-CAP-AI-b2173f3dac44facb**: Organ Involvement Correlation
  Origin: original 4722

<a id="M08-CAP-AI-a2ed486da85c7a43"></a>
- **M08-CAP-AI-a2ed486da85c7a43**: Flare Pattern Support
  Origin: original 4722

<a id="M08-CAP-AI-4451eb78c97f5a1e"></a>
- **M08-CAP-AI-4451eb78c97f5a1e**: Pre-Visit Assessment
  Origin: original 4722, original 4998

<a id="M08-CAP-AI-01a50e0d705511c0"></a>
- **M08-CAP-AI-01a50e0d705511c0**: Explainable Outputs
  Origin: original 4722

<a id="M08-CAP-AI-1257a45a122aa3bf"></a>
- **M08-CAP-AI-1257a45a122aa3bf**: AI cannot autonomously diagnose autoimmune disease or initiate, stop or modify immunosuppressive therapy.
  Origin: original 4722

<a id="M08-CAP-AI-e0d7e8eab93e85ad"></a>
- **M08-CAP-AI-e0d7e8eab93e85ad**: Provide governed AI-assisted intelligence across pediatric hematology workflows.
  Origin: original 4998

<a id="M08-CAP-AI-fb993f7269a8a7f1"></a>
- **M08-CAP-AI-fb993f7269a8a7f1**: CBC Trend Analysis
  Origin: original 4998

<a id="M08-CAP-AI-f777248a7952a518"></a>
- **M08-CAP-AI-f777248a7952a518**: Cytopenia Pattern Support
  Origin: original 4998

<a id="M08-CAP-AI-0708c924fa5a242f"></a>
- **M08-CAP-AI-0708c924fa5a242f**: Hemolysis Pattern Support
  Origin: original 4998

<a id="M08-CAP-AI-2306b87bc0299a65"></a>
- **M08-CAP-AI-2306b87bc0299a65**: Coagulation Trend Support
  Origin: original 4998

<a id="M08-CAP-AI-3e13e83ef858d843"></a>
- **M08-CAP-AI-3e13e83ef858d843**: Bleeding Episode Summarization
  Origin: original 4998

<a id="M08-CAP-AI-2d15d96e65c71df0"></a>
- **M08-CAP-AI-2d15d96e65c71df0**: Thrombosis Timeline Analysis
  Origin: original 4998

<a id="M08-CAP-AI-782ebe7d97be455e"></a>
- **M08-CAP-AI-782ebe7d97be455e**: Transfusion Exposure Analysis
  Origin: original 4998

<a id="M08-CAP-AI-4c090927af993644"></a>
- **M08-CAP-AI-4c090927af993644**: Bone Marrow Data Organization
  Origin: original 4998

<a id="M08-CAP-AI-e1f327e5eb174648"></a>
- **M08-CAP-AI-e1f327e5eb174648**: Care-gap Detection
  Origin: original 4998, original 5048, original 5123

<a id="M08-CAP-AI-271699e3a9a2b34c"></a>
- **M08-CAP-AI-271699e3a9a2b34c**: Pediatric Validation
  Origin: original 4998, original 5048, original 5123

<a id="M08-CAP-AI-2bafc4bd3609a659"></a>
- **M08-CAP-AI-2bafc4bd3609a659**: AI cannot autonomously diagnose hematologic disease, prescribe anticoagulation, order transfusion or determine transplant eligibility.
  Origin: original 4998

<a id="M08-CAP-AI-798d13a36cf1968b"></a>
- **M08-CAP-AI-798d13a36cf1968b**: Provide governed AI-assisted intelligence across pediatric rheumatology and multisystem inflammatory disease.
  Origin: original 5048

<a id="M08-CAP-AI-fd5a99385fdc895f"></a>
- **M08-CAP-AI-fd5a99385fdc895f**: Disease Timeline Summarization
  Origin: original 5048

<a id="M08-CAP-AI-6286fc9e5fa067e6"></a>
- **M08-CAP-AI-6286fc9e5fa067e6**: Flare Pattern Analysis
  Origin: original 5048

<a id="M08-CAP-AI-2ad650414d2217b0"></a>
- **M08-CAP-AI-2ad650414d2217b0**: Joint Activity Trend Support
  Origin: original 5048

<a id="M08-CAP-AI-448da140ac746d64"></a>
- **M08-CAP-AI-448da140ac746d64**: Laboratory Trend Analysis
  Origin: original 5048

<a id="M08-CAP-AI-da803edddcf9d64b"></a>
- **M08-CAP-AI-da803edddcf9d64b**: Multisystem Correlation
  Origin: original 5048

<a id="M08-CAP-AI-f15c0a7370d4df30"></a>
- **M08-CAP-AI-f15c0a7370d4df30**: Patient-reported Outcome Analysis
  Origin: original 5048

<a id="M08-CAP-AI-a94919c3e6636749"></a>
- **M08-CAP-AI-a94919c3e6636749**: Pre-Visit Summary
  Origin: original 5048

<a id="M08-CAP-AI-1aba444d84cca958"></a>
- **M08-CAP-AI-1aba444d84cca958**: AI cannot independently diagnose autoimmune disease, prescribe immunosuppression or determine emergency treatment.
  Origin: original 5048

<a id="M08-CAP-AI-d18045af96f8453a"></a>
- **M08-CAP-AI-d18045af96f8453a**: Provide governed AI-assisted intelligence across pediatric neurosurgical workflows.
  Origin: original 5123

<a id="M08-CAP-AI-b66f3364686cfa98"></a>
- **M08-CAP-AI-b66f3364686cfa98**: Neurosurgical Timeline Summarization
  Origin: original 5123

<a id="M08-CAP-AI-5968b116b135143c"></a>
- **M08-CAP-AI-5968b116b135143c**: Ventricular Trend Organization
  Origin: original 5123

<a id="M08-CAP-AI-1c6d61dbd8c98d5b"></a>
- **M08-CAP-AI-1c6d61dbd8c98d5b**: Device History Analysis
  Origin: original 5123

<a id="M08-CAP-AI-5fd3b3d5cbf4846d"></a>
- **M08-CAP-AI-5fd3b3d5cbf4846d**: Procedure History Summarization
  Origin: original 5123

<a id="M08-CAP-AI-aa6aff574072ab2e"></a>
- **M08-CAP-AI-aa6aff574072ab2e**: Tumor Timeline Support
  Origin: original 5123

<a id="M08-CAP-AI-2aab6147241ab869"></a>
- **M08-CAP-AI-2aab6147241ab869**: Surgical Planning Assistance
  Origin: original 5123

<a id="M08-CAP-AI-943df199873f08ca"></a>
- **M08-CAP-AI-943df199873f08ca**: Complication Pattern Analysis
  Origin: original 5123

<a id="M08-CAP-AI-abfd502c964fcfba"></a>
- **M08-CAP-AI-abfd502c964fcfba**: Outcome Trend Analysis
  Origin: original 5123

<a id="M08-CAP-AI-7e3cfbd98d92654a"></a>
- **M08-CAP-AI-7e3cfbd98d92654a**: AI cannot autonomously determine surgical indication, select an operative approach or replace neurosurgical interpretation of emergency imaging.
  Origin: original 5123

<a id="M08-CAP-AI-4abf46da8623f3c7"></a>
- **M08-CAP-AI-4abf46da8623f3c7**: # Protein / Genomic Intelligence Adapters
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-5165b858f382f4e9"></a>
- **M08-CAP-AI-5165b858f382f4e9**: Revision 2026-09-14 · EXT-GENOMIC · DRAFT_SPECIFICATION · CAP-AI · scientific integration / genomics and molecular evidence · roadmap RESEARCH.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-c92653e37d72fcc1"></a>
- **M08-CAP-AI-c92653e37d72fcc1**: ## Purpose and existing coverage
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-655e53bc413a8ab3"></a>
- **M08-CAP-AI-655e53bc413a8ab3**: Connect external scientific models and sources through a provider-neutral contract. Preserve existing raw-data references, variant reporting/reanalysis (2401), PGx/CYP analysis (2399, 2677), oncology molecular evidence (4220, 5130) and inherited-family context (5018). Proteinuria modules 2149/4583 are renal observations, not protein-structure engines. This is an adapter extension, not an attempt to reproduce AlphaFold or replace a clinical laboratory.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-efd563166041b2d8"></a>
- **M08-CAP-AI-efd563166041b2d8**: ## Scope, actors and authority
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-ab34c38a73f74cad"></a>
- **M08-CAP-AI-ab34c38a73f74cad**: Support protein structure intelligence, variant effects/interpretation, functional genomics, pharmacogenomics, gene–drug and genotype–phenotype relationships, and molecular pathways. A laboratory supplies authorized reports and QC; a qualified genetics/molecular reviewer assesses clinical relevance; a researcher uses separately authorized datasets; the patient controls available access/delegation under applicable policy. Neither a scientific service identity nor a general chatbot may authorize a clinical interpretation.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-2a563a0ed8ff6f69"></a>
- **M08-CAP-AI-2a563a0ed8ff6f69**: ## Inputs, ownership and output types
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-c81daef638d351f9"></a>
- **M08-CAP-AI-c81daef638d351f9**: CAP-LABORATORY retains tests/results; CAP-DATA retains patient-linked clinical records and genomic report references. The adapter stores execution metadata and derived artifacts under CAP-AI. Input may reference approved sequence/variant files, reference assembly, transcript and version, coordinate convention, alleles, zygosity/phase where known, sample/tissue, germline/somatic/pathogen context, quality flags and pipeline release. Human and pathogen genomes are distinct datasets with distinct identity implications.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-7d326dd8109a8464"></a>
- **M08-CAP-AI-7d326dd8109a8464**: Protein requests include sequence/reference version, isoform, model task and intended use. Output includes provider/model version, task, input digest, returned artifact, confidence semantics, limitations, reference dataset/license, provenance and approval state. Structure prediction, functional effect prediction and clinical actionability are three separate result types. Do not infer drug benefit from a predicted fold.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-e109a32e66d3ea82"></a>
- **M08-CAP-AI-e109a32e66d3ea82**: ## Adapter and provider lifecycle
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-6f98dd9732bbbb9b"></a>
- **M08-CAP-AI-6f98dd9732bbbb9b**: Proposed interface: describeCapabilities, validateInput, submitScientificJob, queryJob, retrieveArtifact, cancelJob. Registry entry pins provider, API/model version, accepted formats, data residency, retention/training terms, license, intended-use evaluation and fallback eligibility. No clinical provider is configured by this document.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-e17878e587ed1371"></a>
- **M08-CAP-AI-e17878e587ed1371**: Validate consent/purpose and legal basis → minimize data → check provider eligibility → submit idempotent job → quarantine output → check schema/provenance/QC → specialist review where required → release a typed result. Cancellation/timeout does not erase the audit trail. A change of model/provider starts a new derived artifact; it does not silently overwrite an interpretation.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-f2e4155e08c157de"></a>
- **M08-CAP-AI-f2e4155e08c157de**: ## Standards and evidence links
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-5d515cbe133dedc4"></a>
- **M08-CAP-AI-5d515cbe133dedc4**: Candidate exchange uses the FHIR Genomics Reporting guide with explicit implementation-guide and terminology versions, Observation/DiagnosticReport, specimen and Provenance links. Assembly/transcript and variant normalization rules must be tested per partner. [HL7 Genomics Reporting](https://hl7.org/fhir/uv/genomics-reporting/).
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-fc7bd906ac55ce80"></a>
- **M08-CAP-AI-fc7bd906ac55ce80**: AlphaFold is an example of an external predicted-structure source with confidence information; its output is not itself experimental validation or patient-specific drug-response evidence. [AlphaFold FAQ](https://alphafold.ebi.ac.uk/faq). Provider examples establish no availability, clinical certification or integration claim.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-fa91131113651d6d"></a>
- **M08-CAP-AI-fa91131113651d6d**: ## AI/twin role and privacy
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-cc0cca5b9a93bf5c"></a>
- **M08-CAP-AI-cc0cca5b9a93bf5c**: Knowledge AI indexes approved evidence; Clinical AI can explain a reviewed interpretation; the twin references a released result with uncertainty. Raw sequence, family identifiers and rare variants require restricted access, export controls, retention limits and purpose separation. Pseudonymization does not remove re-identification risk. Research reuse and model training require a separately approved governance basis; a clinical test consent is not an automatic training grant.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-90642ddeaad50245"></a>
- **M08-CAP-AI-90642ddeaad50245**: ## Failure modes, observability and acceptance
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-0eadf59c05ddf8dc"></a>
- **M08-CAP-AI-0eadf59c05ddf8dc**: Reject reference-build mismatch, unsupported variant/isoform, inadequate QC, missing license or unapproved destination. Return unsupported/uncertain rather than manufacture a benign classification. Conflicting interpretations remain linked to their releases and reviewers. Monitor input/output version compatibility, rejection reasons, model drift and provider terms; redact sequence/variants from routine logs.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-ffb7e40ddbdec047"></a>
- **M08-CAP-AI-ffb7e40ddbdec047**: Tests must prevent wrong-build interpretation, provider fallback outside approved region and conversion of predicted structure into a clinical fact. Reanalysis preserves old interpretation and explains changed evidence. A provider outage yields an approved equivalent route for that task or abstention. Dependencies CAP-DATA, CAP-LABORATORY, CAP-AI, CAP-CONSENT. Open gates: clinical evaluation, datasets/licenses, consent policy, approved providers and precise exchange profiles.
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-c02a0fdfbefe81bc"></a>
- **M08-CAP-AI-c02a0fdfbefe81bc**: Model-agnostic protein/variant adapters
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-5e4869f941d77273"></a>
- **M08-CAP-AI-5e4869f941d77273**: Assembly/transcript/allele/phase provenance
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-5a72f00d891c84de"></a>
- **M08-CAP-AI-5a72f00d891c84de**: Gene-drug/genotype-phenotype/pathway evidence
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-2a026f6135761ed2"></a>
- **M08-CAP-AI-2a026f6135761ed2**: Licensing and provider approval
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-afce8df1ca46213a"></a>
- **M08-CAP-AI-afce8df1ca46213a**: No protein prediction to clinical conclusion shortcut
  Origin: EXT-GENOMIC

<a id="M08-CAP-AI-59ec82f6e740341d"></a>
- **M08-CAP-AI-59ec82f6e740341d**: # EDHT Model-agnostic AI Platform
  Origin: EXT-AI

<a id="M08-CAP-AI-8aa859ddf0419370"></a>
- **M08-CAP-AI-8aa859ddf0419370**: Revision 2026-09-14 · EXT-AI · DRAFT_SPECIFICATION · CAP-AI · shared AI infrastructure / governed inference and learning · roadmap RESEARCH.
  Origin: EXT-AI

<a id="M08-CAP-AI-45da6fd0b723ca42"></a>
- **M08-CAP-AI-45da6fd0b723ca42**: ## Purpose and retained capabilities
  Origin: EXT-AI

<a id="M08-CAP-AI-e1a4cb2980fb366e"></a>
- **M08-CAP-AI-e1a4cb2980fb366e**: Provide one infrastructure with task-specific policy, provenance and evaluation. Existing 1369 already calls for model version, dataset, approval and performance; 1259 requires clinical validation/version/safety; 1218 retraining and 1547 knowledge learning need separate controlled release paths. Specialty AI titles become candidate profiles with prompts, retrieval scope, evaluation sets and permissions. They do not automatically receive their own gateways, model registries or patient stores.
  Origin: EXT-AI

<a id="M08-CAP-AI-bb854667c170efc4"></a>
- **M08-CAP-AI-bb854667c170efc4**: ## Responsibility hierarchy
  Origin: EXT-AI

<a id="M08-CAP-AI-8604a804528d4840"></a>
- **M08-CAP-AI-8604a804528d4840**: Knowledge AI retrieves and explains approved evidence with source/version and applicability. Clinical AI supports authorized clinician decisions within a validated intended use. Personal AI provides patient-facing explanations and navigation with no autonomous prescribing or diagnosis. Research AI works within protocol/dataset/disclosure permissions and emits hypotheses rather than clinical knowledge.
  Origin: EXT-AI

<a id="M08-CAP-AI-9d7d47ccc8e4d1dc"></a>
- **M08-CAP-AI-9d7d47ccc8e4d1dc**: The shared platform supplies AI Gateway, Model Router, RAG, Clinical Knowledge Graph, Model Registry, Evaluation, Safety, Monitoring, Audit, Provenance, Uncertainty and Human Review. Knowledge ownership belongs to approved evidence releases; source clinical facts stay with clinical services.
  Origin: EXT-AI

<a id="M08-CAP-AI-c706e6cbf0396b8a"></a>
- **M08-CAP-AI-c706e6cbf0396b8a**: ## Actors, inputs and routing contract
  Origin: EXT-AI

<a id="M08-CAP-AI-f156a777e6d96d0c"></a>
- **M08-CAP-AI-f156a777e6d96d0c**: A task owner specifies use, risk class, input sensitivity, patient/tenant/purpose, jurisdiction, latency/cost limits and required validation. Model stewards approve releases; clinical governance approves clinical intended use; privacy/security approves processing terms. Execution service identities cannot approve themselves.
  Origin: EXT-AI

<a id="M08-CAP-AI-9a109e5cef3f4dba"></a>
- **M08-CAP-AI-9a109e5cef3f4dba**: RouteRequest references authorized context, evidence pack, task/profile version and processing policy. ModelRelease declares provider/model version, task eligibility, populations/exclusions, evaluation, region, retention/training terms, context limits, tool permissions, approval and rollback target. RouteDecision records eligible candidates, exclusions, selected release, policy version and rationale.
  Origin: EXT-AI

<a id="M08-CAP-AI-a5fbe5797f69361d"></a>
- **M08-CAP-AI-a5fbe5797f69361d**: First apply hard constraints: task/intended use, clinical risk, privacy, jurisdiction and validation. Only then optimize among eligible routes for latency and cost. A timeout can switch only to a separately approved route for the same task, data and population. Otherwise abstain or defer to a human. A cheaper model is never an automatic substitute.
  Origin: EXT-AI

<a id="M08-CAP-AI-7800396772d8314b"></a>
- **M08-CAP-AI-7800396772d8314b**: ## Model independence and interfaces
  Origin: EXT-AI

<a id="M08-CAP-AI-323e01e799a68859"></a>
- **M08-CAP-AI-323e01e799a68859**: Adapters may eventually support OpenAI, Google/DeepMind, Anthropic, xAI, open-source, specialized biomedical and future EDHT models. These are illustrative provider categories, not configured or validated integrations. Business contracts use EDHT task/result envelopes, not provider-specific chat objects. Keep provider translation, rate limits and output parsing within adapters.
  Origin: EXT-AI

<a id="M08-CAP-AI-ff0a8855d51c681f"></a>
- **M08-CAP-AI-ff0a8855d51c681f**: Proposed commands: executeGovernedTask, evaluateCandidateRelease, recordHumanReview, approveModelRelease, revokeModelRelease. Events InferenceCompleted, ModelAbstained, ReviewRequested, ModelReleaseChanged and OutputInvalidated contain artifact/version references. Idempotency and explicit cancellation prevent duplicate consequential tool actions. This stage creates no deployed endpoints or provider credentials.
  Origin: EXT-AI

<a id="M08-CAP-AI-c033fee824820575"></a>
- **M08-CAP-AI-c033fee824820575**: ## RAG, tools and result ownership
  Origin: EXT-AI

<a id="M08-CAP-AI-80b4b9dde1c5a0df"></a>
- **M08-CAP-AI-80b4b9dde1c5a0df**: Retrieval enforces authorization before indexing/querying and on source access; embedding stores inherit source sensitivity and deletion/revocation policy. Evidence snippets are untrusted content, never execution instructions. Index releases pin corpus/terminology versions. The knowledge graph preserves provenance, conflicting claims, applicability and review state.
  Origin: EXT-AI

<a id="M08-CAP-AI-0ef200985baef4d7"></a>
- **M08-CAP-AI-0ef200985baef4d7**: Result envelope records source IDs, model release, prompt/task version, retrieval version, epistemic status, uncertainty representation, limitations and human disposition. Unsupported claims trigger abstention. Model confidence is not a calibrated probability unless evaluation supports that interpretation. Tool calls pass through deterministic authorization and schema validation; recommendations cannot call a medication mutation tool.
  Origin: EXT-AI

<a id="M08-CAP-AI-ab979db5773c219d"></a>
- **M08-CAP-AI-ab979db5773c219d**: ## Safety, privacy, failure and monitoring
  Origin: EXT-AI

<a id="M08-CAP-AI-0b0980ef7b18201f"></a>
- **M08-CAP-AI-0b0980ef7b18201f**: Enforce minimum necessary context, separate consent/legal-basis/purpose checks, tenant isolation, provider retention/region rules and redacted logging. Test prompt injection from documents, exfiltration, cross-patient context, stale retrieval, tool misuse, bias/subgroup performance and unsupported age/language. Model outage, schema mismatch or revoked release returns an explicit unavailable state; it must not fabricate a result or select an unapproved provider.
  Origin: EXT-AI

<a id="M08-CAP-AI-bebe41c7d8ed3cef"></a>
- **M08-CAP-AI-bebe41c7d8ed3cef**: Monitor safety incidents, drift, abstention rate, latency, cost, evaluation regressions and human overrides against defined denominators. Pin releases and retain traceability; emergency disablement invalidates affected derived outputs while preserving audit.
  Origin: EXT-AI

<a id="M08-CAP-AI-7345b1f817f29684"></a>
- **M08-CAP-AI-7345b1f817f29684**: ## Governed improvement and acceptance
  Origin: EXT-AI

<a id="M08-CAP-AI-7fe047261aa7e62d"></a>
- **M08-CAP-AI-7fe047261aa7e62d**: Clinical data → governed dataset → evaluation/research → permitted model improvement → validation → signed release → monitoring. Every training/export step requires an approved basis, purpose and retention policy. Feedback is evidence for review, not an automatic training grant. Knowledge-pack updates and model retraining have separate releases.
  Origin: EXT-AI

<a id="M08-CAP-AI-ccea736d3412ca2f"></a>
- **M08-CAP-AI-ccea736d3412ca2f**: Acceptance tests must demonstrate hard-constraint routing before optimization, approved fallback or abstention, source-linked explanations, refusal of clinical fact/order writes, and replayable model/context versions. Dependencies CAP-DATA, CAP-CONSENT, CAP-AUDIT; downstream CDS/twin/research consume typed results. Open gates: model/task evaluation suites, provider contracts, clinical authority, incident response ownership and patient-facing human-factors validation.
  Origin: EXT-AI

<a id="M08-CAP-AI-ccd19047984023c9"></a>
- **M08-CAP-AI-ccd19047984023c9**: Knowledge/Clinical/Personal/Research AI hierarchy
  Origin: EXT-AI

<a id="M08-CAP-AI-500bd4934719a4f3"></a>
- **M08-CAP-AI-500bd4934719a4f3**: Gateway/router/model registry
  Origin: EXT-AI

<a id="M08-CAP-AI-cc1552c4d5781128"></a>
- **M08-CAP-AI-cc1552c4d5781128**: Routing by task/risk/privacy/jurisdiction/cost/latency/validation
  Origin: EXT-AI

<a id="M08-CAP-AI-04fb6681d745c856"></a>
- **M08-CAP-AI-04fb6681d745c856**: Approved alternative models or abstention
  Origin: EXT-AI

<a id="M08-CAP-AI-a5da6005f9b70b4f"></a>
- **M08-CAP-AI-a5da6005f9b70b4f**: RAG/evidence versioning
  Origin: EXT-AI

<a id="M08-CAP-AI-2f70b13cc79e2058"></a>
- **M08-CAP-AI-2f70b13cc79e2058**: Human review/audit/uncertainty
  Origin: EXT-AI

<a id="M08-CAP-AI-a49bf1af51c72ab1"></a>
- **M08-CAP-AI-a49bf1af51c72ab1**: Governed evaluation to training to deployment lifecycle
  Origin: EXT-AI

## Preserved source metadata

<a id="M08-CAP-AI-2090ad0057bd447a"></a>
- **M08-CAP-AI-2090ad0057bd447a**: # Pediatric Cardiology AI Assistant

<a id="M08-CAP-AI-5ba74d8fcc7b20cc"></a>
- **M08-CAP-AI-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-AI-d5232cbd3a326267"></a>
- **M08-CAP-AI-d5232cbd3a326267**: Documentation

<a id="M08-CAP-AI-6f33acf3afb37064"></a>
- **M08-CAP-AI-6f33acf3afb37064**: ---

<a id="M08-CAP-AI-a65aecf567573c2b"></a>
- **M08-CAP-AI-a65aecf567573c2b**: # Pediatric Pulmonology AI Assistant

<a id="M08-CAP-AI-40b3caaa75ef6cb0"></a>
- **M08-CAP-AI-40b3caaa75ef6cb0**: # Pediatric Gastroenterology AI Assistant

<a id="M08-CAP-AI-97801eb339e302d5"></a>
- **M08-CAP-AI-97801eb339e302d5**: # Pediatric Hematology AI Assistant

<a id="M08-CAP-AI-79a1ad567dfefa2d"></a>
- **M08-CAP-AI-79a1ad567dfefa2d**: # Pediatric Surgical AI Assistant

<a id="M08-CAP-AI-4fbeeb87456accf5"></a>
- **M08-CAP-AI-4fbeeb87456accf5**: Supports

<a id="M08-CAP-AI-20dcf9e08bfc7cd6"></a>
- **M08-CAP-AI-20dcf9e08bfc7cd6**: Tracks

<a id="M08-CAP-AI-fab75fdc6c1d00ee"></a>
- **M08-CAP-AI-fab75fdc6c1d00ee**: # AI Anesthesia Planning Assistant

<a id="M08-CAP-AI-6510c5c511a879bc"></a>
- **M08-CAP-AI-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-AI-b34f593f0f83a1d1"></a>
- **M08-CAP-AI-b34f593f0f83a1d1**: Core Functions:

<a id="M08-CAP-AI-b88b375a44ccd619"></a>
- **M08-CAP-AI-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
