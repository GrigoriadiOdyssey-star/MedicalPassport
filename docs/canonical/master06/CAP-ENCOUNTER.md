# CORE-CAP-ENCOUNTER — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: Encounter, ProcedureRecord, SessionRecord, FollowUpPlan. Dependencies: CAP-ENCOUNTER, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-CARD-SURGERY

Original IDs: 847, 3067, 3669, 4072.

Retain corrective/palliative surgery, valve and great-vessel detail, hospital/surgeon identity and imaging follow-up. AI does not authorize surgery.

Preoperative assessment → authorized plan → procedure documentation → postoperative/ICU follow-up → longitudinal outcomes.

### CAN-MENTAL-THERAPY

Original IDs: 3994, 4841, 5167.

Preserve CBT/family/behavioral/supportive therapy, individual/group care, participation/goals and outcomes. Restricted session notes stay separate from shared summaries.

Referral/indication → agreed goals/modality → sessions → outcome/review → completion/follow-up.

### PED2-RENAL-DIALYSIS

Original IDs: 927, 4567, 4577, 4578, 4579.

Shared treatment/session record with distinct PD, HD and CKRT profiles; retain prescription, access, equipment, modality parameters and interruption history.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M04-PULM-PROCEDURE

Original IDs: 3189, 3370, 4467.

Bronchoscopy retains video, lavage, foreign-body removal, diagnostic/therapeutic procedures, sampling, complications and follow-up.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M04-GASTRO-ENDOSCOPY

Original IDs: 945, 3169, 3289, 3449, 4521.

Retain capsule/endoscopic ultrasound, therapeutic interventions, images, biopsy location, sedation and complications; image AI is a referenced task.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M04-RHEUM-REHAB

Original IDs: 4720, 5044.

Preserve baseline, gait/balance, range of motion, assistive devices, OT/PT/home plan and agreed activity goals.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M05-HEM-MARROW

Original IDs: 968, 3249, 4173, 4992.

The marrow procedure profile preserves aspiration/core biopsy, specimen tracking, morphology/cellularity, flow, cytogenetic/molecular and signed pathology references. Procedure and laboratory interpretation authorities remain separate.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M05-HEM-APHERESIS

Original IDs: 4995.

Apheresis is a procedure/session profile of the existing encounter owner. Preserve access, machine, replacement fluid, anticoagulation, collection product and complications without enabling device control.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M05-ONCO-RADIATION

Original IDs: 4231, 4232, 5133.

Radiotherapy/proton course profiles distinguish planned and delivered dose, fractionation, cranial/spinal targets, critical structures and lifetime exposure; no treatment-equipment control.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M05-ONCO-SURGERY

Original IDs: 4233, 5131.

Retain operative indication, margins, extent-of-resection assessment, postoperative MRI, pathology, CSF/neurological complications and adjuvant context.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M06-NEUROSURG-TUMOR-SURGERY

Original IDs: 4634, 5111, 5131.

Neurosurgical tumor procedures complement the existing oncologic surgery profile. Preserve intraoperative findings, molecular/pathology links, residual/extent-of-resection assessment, postoperative imaging and CSF/neurological outcomes.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M06-NEUROSURG-PLANNING

Original IDs: 5120.

Surgical planning is a versioned encounter workflow linking registered imaging/navigation, functional/vascular anatomy, neurophysiology/anesthesia/blood/device plans and final signed plan; no navigation accuracy claim is inferred.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M06-NEUROSURG-ENDOSCOPY

Original IDs: 5106.

Neuroendoscopic procedure profile retains indication/ETV type, preoperative and intraoperative findings, procedure date, CSF dynamics, complications, failure, repeat procedures and shunt conversion with clinician outcome assessment.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M06-NEUROSURG-RECOVERY

Original IDs: 5122.

Postoperative recovery documentation retains baseline/current neurological status, wound/device, swallowing/speech, functional goals, rehabilitation and school reintegration as a profile of shared encounter follow-up.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M06-PED-POSTOP-ICU

Original IDs: 1131.

Postoperative pediatric ICU is an encounter/history profile retaining ventilation, monitoring, complications and outcomes, not evidence that every ICU function is implemented.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-ENCOUNTER-2b0a56d0be770667"></a>
- **M06-CAP-ENCOUNTER-2b0a56d0be770667**: Stores pediatric cardiac surgical history.
  Origin: original 847

<a id="M06-CAP-ENCOUNTER-f53ba0c0214c2b5f"></a>
- **M06-CAP-ENCOUNTER-f53ba0c0214c2b5f**: Procedure
  Origin: original 847, original 4233, original 4521

<a id="M06-CAP-ENCOUNTER-9292031266b0e334"></a>
- **M06-CAP-ENCOUNTER-9292031266b0e334**: Hospital
  Origin: original 847

<a id="M06-CAP-ENCOUNTER-4d2b58385f4ea306"></a>
- **M06-CAP-ENCOUNTER-4d2b58385f4ea306**: Surgeon
  Origin: original 847

<a id="M06-CAP-ENCOUNTER-0d86946e629cc025"></a>
- **M06-CAP-ENCOUNTER-0d86946e629cc025**: Follow-up
  Origin: original 847, original 4231, original 4233, original 4467, original 4521, original 4841, original 4995, original 5167

<a id="M06-CAP-ENCOUNTER-19be36efb5a7a8c2"></a>
- **M06-CAP-ENCOUNTER-19be36efb5a7a8c2**: Stores dialysis treatment history.
  Origin: original 927

<a id="M06-CAP-ENCOUNTER-8fca66af97a57c1f"></a>
- **M06-CAP-ENCOUNTER-8fca66af97a57c1f**: Hemodialysis
  Origin: original 927, original 4567

<a id="M06-CAP-ENCOUNTER-4d70d2b410a5a35e"></a>
- **M06-CAP-ENCOUNTER-4d70d2b410a5a35e**: Peritoneal Dialysis
  Origin: original 927, original 4567

<a id="M06-CAP-ENCOUNTER-7be7dd711df71636"></a>
- **M06-CAP-ENCOUNTER-7be7dd711df71636**: Treatment Sessions
  Origin: original 927

<a id="M06-CAP-ENCOUNTER-73dedf86b2ae9801"></a>
- **M06-CAP-ENCOUNTER-73dedf86b2ae9801**: Complications
  Origin: original 927, original 1131, original 4233, original 4467, original 4521, original 4567, original 4578, original 4634, original 4995, original 5106

<a id="M06-CAP-ENCOUNTER-4138f1bd49da3db8"></a>
- **M06-CAP-ENCOUNTER-4138f1bd49da3db8**: Stores endoscopic examinations.
  Origin: original 945

<a id="M06-CAP-ENCOUNTER-465cf176435d118d"></a>
- **M06-CAP-ENCOUNTER-465cf176435d118d**: Gastroscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M06-CAP-ENCOUNTER-4ea607a784624620"></a>
- **M06-CAP-ENCOUNTER-4ea607a784624620**: Colonoscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M06-CAP-ENCOUNTER-1ed929d4e8d78094"></a>
- **M06-CAP-ENCOUNTER-1ed929d4e8d78094**: Capsule Endoscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M06-CAP-ENCOUNTER-3f46ddfc482453ec"></a>
- **M06-CAP-ENCOUNTER-3f46ddfc482453ec**: Physician Reports
  Origin: original 945

<a id="M06-CAP-ENCOUNTER-2adc656bdef2ff6d"></a>
- **M06-CAP-ENCOUNTER-2adc656bdef2ff6d**: Stores bone marrow examinations.
  Origin: original 968

<a id="M06-CAP-ENCOUNTER-c408598d12f8820f"></a>
- **M06-CAP-ENCOUNTER-c408598d12f8820f**: Aspirate
  Origin: original 968, original 3249

<a id="M06-CAP-ENCOUNTER-6dfc1fd557943d0f"></a>
- **M06-CAP-ENCOUNTER-6dfc1fd557943d0f**: Biopsy
  Origin: original 968, original 3249, original 4173, original 4634, original 5131

<a id="M06-CAP-ENCOUNTER-3e81e3f4758a16ae"></a>
- **M06-CAP-ENCOUNTER-3e81e3f4758a16ae**: Cytology
  Origin: original 968, original 4467

<a id="M06-CAP-ENCOUNTER-32ffc096d55d159d"></a>
- **M06-CAP-ENCOUNTER-32ffc096d55d159d**: Histology
  Origin: original 968

<a id="M06-CAP-ENCOUNTER-59781fce0b6450de"></a>
- **M06-CAP-ENCOUNTER-59781fce0b6450de**: Tracks postoperative ICU patients.
  Origin: original 1131

<a id="M06-CAP-ENCOUNTER-d77f0fba9e1c058a"></a>
- **M06-CAP-ENCOUNTER-d77f0fba9e1c058a**: Ventilation
  Origin: original 1131

<a id="M06-CAP-ENCOUNTER-f5aeff23cb9d4fbe"></a>
- **M06-CAP-ENCOUNTER-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 1131

<a id="M06-CAP-ENCOUNTER-5e8c51cc3501e267"></a>
- **M06-CAP-ENCOUNTER-5e8c51cc3501e267**: Outcomes
  Origin: original 1131

<a id="M06-CAP-ENCOUNTER-63990fa9e9d2169a"></a>
- **M06-CAP-ENCOUNTER-63990fa9e9d2169a**: Supports pediatric cardiac surgery.
  Origin: original 3067

<a id="M06-CAP-ENCOUNTER-e21351a7ecc4565c"></a>
- **M06-CAP-ENCOUNTER-e21351a7ecc4565c**: Corrective Surgery
  Origin: original 3067

<a id="M06-CAP-ENCOUNTER-16232110e19372fa"></a>
- **M06-CAP-ENCOUNTER-16232110e19372fa**: Palliative Surgery
  Origin: original 3067

<a id="M06-CAP-ENCOUNTER-db9314a2c5c56a2c"></a>
- **M06-CAP-ENCOUNTER-db9314a2c5c56a2c**: Valve Repair
  Origin: original 3067

<a id="M06-CAP-ENCOUNTER-32b401858d594ad9"></a>
- **M06-CAP-ENCOUNTER-32b401858d594ad9**: Great Vessel Reconstruction
  Origin: original 3067

<a id="M06-CAP-ENCOUNTER-6b013809774c93b3"></a>
- **M06-CAP-ENCOUNTER-6b013809774c93b3**: Postoperative Monitoring
  Origin: original 3067, original 3669, original 4072

<a id="M06-CAP-ENCOUNTER-01ab3584aaa3b5c7"></a>
- **M06-CAP-ENCOUNTER-01ab3584aaa3b5c7**: Maintains pediatric endoscopy data.
  Origin: original 3169

<a id="M06-CAP-ENCOUNTER-275cbc669a610228"></a>
- **M06-CAP-ENCOUNTER-275cbc669a610228**: Endoscopic Ultrasound
  Origin: original 3169

<a id="M06-CAP-ENCOUNTER-23cb5b848c6347ef"></a>
- **M06-CAP-ENCOUNTER-23cb5b848c6347ef**: AI Image Analysis
  Origin: original 3169

<a id="M06-CAP-ENCOUNTER-af9986a90033933a"></a>
- **M06-CAP-ENCOUNTER-af9986a90033933a**: Maintains pediatric bronchoscopy records.
  Origin: original 3189

<a id="M06-CAP-ENCOUNTER-92fc97f3239f96a2"></a>
- **M06-CAP-ENCOUNTER-92fc97f3239f96a2**: Diagnostic Bronchoscopy
  Origin: original 3189, original 3370

<a id="M06-CAP-ENCOUNTER-acfea8ff5875b3e3"></a>
- **M06-CAP-ENCOUNTER-acfea8ff5875b3e3**: Therapeutic Bronchoscopy
  Origin: original 3189, original 3370

<a id="M06-CAP-ENCOUNTER-b92bf1532f8929ec"></a>
- **M06-CAP-ENCOUNTER-b92bf1532f8929ec**: Airway Evaluation
  Origin: original 3189

<a id="M06-CAP-ENCOUNTER-d22f7c73e9c71467"></a>
- **M06-CAP-ENCOUNTER-d22f7c73e9c71467**: Foreign Body Removal
  Origin: original 3189

<a id="M06-CAP-ENCOUNTER-c076453c94961546"></a>
- **M06-CAP-ENCOUNTER-c076453c94961546**: Digital Video Archive
  Origin: original 3189

<a id="M06-CAP-ENCOUNTER-1e4bfa87a4f80e00"></a>
- **M06-CAP-ENCOUNTER-1e4bfa87a4f80e00**: Maintains bone marrow diagnostics.
  Origin: original 3249

<a id="M06-CAP-ENCOUNTER-8fc49378bfabe721"></a>
- **M06-CAP-ENCOUNTER-8fc49378bfabe721**: Cytogenetics
  Origin: original 3249, original 4173, original 4992

<a id="M06-CAP-ENCOUNTER-5895069c924c03dd"></a>
- **M06-CAP-ENCOUNTER-5895069c924c03dd**: Flow Cytometry
  Origin: original 3249, original 4173, original 4992

<a id="M06-CAP-ENCOUNTER-20a67db2d0ea13cf"></a>
- **M06-CAP-ENCOUNTER-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 3249, original 4173, original 4634, original 4992, original 5111

<a id="M06-CAP-ENCOUNTER-d5c9e201638bd8a4"></a>
- **M06-CAP-ENCOUNTER-d5c9e201638bd8a4**: Maintains pediatric endoscopy records.
  Origin: original 3289, original 3449

<a id="M06-CAP-ENCOUNTER-9dd410cc247ce7f0"></a>
- **M06-CAP-ENCOUNTER-9dd410cc247ce7f0**: Therapeutic Procedures
  Origin: original 3289, original 3449

<a id="M06-CAP-ENCOUNTER-8f8d1688418f5c65"></a>
- **M06-CAP-ENCOUNTER-8f8d1688418f5c65**: Digital Archive
  Origin: original 3289, original 3370

<a id="M06-CAP-ENCOUNTER-3e46d6032b0ffc26"></a>
- **M06-CAP-ENCOUNTER-3e46d6032b0ffc26**: Maintains bronchoscopy records.
  Origin: original 3370

<a id="M06-CAP-ENCOUNTER-38c245db4fa56107"></a>
- **M06-CAP-ENCOUNTER-38c245db4fa56107**: Bronchoalveolar Lavage
  Origin: original 3370

<a id="M06-CAP-ENCOUNTER-02d1afe5752c26d3"></a>
- **M06-CAP-ENCOUNTER-02d1afe5752c26d3**: AI-assisted Image Review
  Origin: original 3449

<a id="M06-CAP-ENCOUNTER-b83b95fc85bc49b1"></a>
- **M06-CAP-ENCOUNTER-b83b95fc85bc49b1**: Supports pediatric cardiac surgery pathways.
  Origin: original 3669

<a id="M06-CAP-ENCOUNTER-54ba424b767673ee"></a>
- **M06-CAP-ENCOUNTER-54ba424b767673ee**: Preoperative Assessment
  Origin: original 3669, original 4072, original 4233

<a id="M06-CAP-ENCOUNTER-cd0a0f0f29929499"></a>
- **M06-CAP-ENCOUNTER-cd0a0f0f29929499**: Surgical Planning
  Origin: original 3669, original 4072, original 4233

<a id="M06-CAP-ENCOUNTER-fe96e27084f3fc21"></a>
- **M06-CAP-ENCOUNTER-fe96e27084f3fc21**: ICU Follow-up
  Origin: original 3669

<a id="M06-CAP-ENCOUNTER-96c457a9cf29c342"></a>
- **M06-CAP-ENCOUNTER-96c457a9cf29c342**: Long-term Outcomes
  Origin: original 3669, original 4232

<a id="M06-CAP-ENCOUNTER-2c3a35b774d58aa7"></a>
- **M06-CAP-ENCOUNTER-2c3a35b774d58aa7**: Coordinates evidence-based psychological interventions.
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-2dcab3c57e09d41c"></a>
- **M06-CAP-ENCOUNTER-2dcab3c57e09d41c**: CBT
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-e52bd10c68433c2f"></a>
- **M06-CAP-ENCOUNTER-e52bd10c68433c2f**: Family Therapy
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-0f2ab1510d35d16a"></a>
- **M06-CAP-ENCOUNTER-0f2ab1510d35d16a**: Behavioral Therapy
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-fc042171e1e6e3cf"></a>
- **M06-CAP-ENCOUNTER-fc042171e1e6e3cf**: Supportive Therapy
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-911706ff98a550e4"></a>
- **M06-CAP-ENCOUNTER-911706ff98a550e4**: Therapy Goals
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-f31cbb52e4ba596c"></a>
- **M06-CAP-ENCOUNTER-f31cbb52e4ba596c**: Progress Tracking
  Origin: original 3994, original 4720

<a id="M06-CAP-ENCOUNTER-bd6734c26259c6d8"></a>
- **M06-CAP-ENCOUNTER-bd6734c26259c6d8**: Referral Coordination
  Origin: original 3994

<a id="M06-CAP-ENCOUNTER-4e907a8641570c14"></a>
- **M06-CAP-ENCOUNTER-4e907a8641570c14**: Supports pediatric cardiac surgery workflows.
  Origin: original 4072

<a id="M06-CAP-ENCOUNTER-fea915a17f2566c5"></a>
- **M06-CAP-ENCOUNTER-fea915a17f2566c5**: Procedure Documentation
  Origin: original 4072

<a id="M06-CAP-ENCOUNTER-ff61d97cd7cd8eeb"></a>
- **M06-CAP-ENCOUNTER-ff61d97cd7cd8eeb**: Complication Tracking
  Origin: original 4072

<a id="M06-CAP-ENCOUNTER-6689882d187ac23b"></a>
- **M06-CAP-ENCOUNTER-6689882d187ac23b**: Imaging Follow-up
  Origin: original 4072

<a id="M06-CAP-ENCOUNTER-202f6a2a98b9f441"></a>
- **M06-CAP-ENCOUNTER-202f6a2a98b9f441**: Longitudinal Outcomes
  Origin: original 4072

<a id="M06-CAP-ENCOUNTER-49ac3bab8d5a8426"></a>
- **M06-CAP-ENCOUNTER-49ac3bab8d5a8426**: Integrates bone marrow diagnostic workflows.
  Origin: original 4173

<a id="M06-CAP-ENCOUNTER-e04355a137034dc1"></a>
- **M06-CAP-ENCOUNTER-e04355a137034dc1**: Aspiration
  Origin: original 4173, original 4992

<a id="M06-CAP-ENCOUNTER-dabea35d36a52d42"></a>
- **M06-CAP-ENCOUNTER-dabea35d36a52d42**: Morphology
  Origin: original 4173, original 4992

<a id="M06-CAP-ENCOUNTER-4f769d3011ff4afe"></a>
- **M06-CAP-ENCOUNTER-4f769d3011ff4afe**: Pathology Reports
  Origin: original 4173

<a id="M06-CAP-ENCOUNTER-7fa79dce2b8d7e98"></a>
- **M06-CAP-ENCOUNTER-7fa79dce2b8d7e98**: Longitudinal Comparison
  Origin: original 4173

<a id="M06-CAP-ENCOUNTER-e9faaf760d3dbe86"></a>
- **M06-CAP-ENCOUNTER-e9faaf760d3dbe86**: Supports pediatric radiation oncology.
  Origin: original 4231

<a id="M06-CAP-ENCOUNTER-57b970264c415ddd"></a>
- **M06-CAP-ENCOUNTER-57b970264c415ddd**: Indication
  Origin: original 4231, original 4467, original 4521

<a id="M06-CAP-ENCOUNTER-7c7fb2adca62a628"></a>
- **M06-CAP-ENCOUNTER-7c7fb2adca62a628**: Treatment Planning
  Origin: original 4231

<a id="M06-CAP-ENCOUNTER-c7039c5f9964fbb0"></a>
- **M06-CAP-ENCOUNTER-c7039c5f9964fbb0**: Target Volumes
  Origin: original 4231

<a id="M06-CAP-ENCOUNTER-554b0253c681db77"></a>
- **M06-CAP-ENCOUNTER-554b0253c681db77**: Treatment Course
  Origin: original 4231, original 4232, original 5133

<a id="M06-CAP-ENCOUNTER-6253339b00dd8054"></a>
- **M06-CAP-ENCOUNTER-6253339b00dd8054**: Dose Records
  Origin: original 4231

<a id="M06-CAP-ENCOUNTER-f402916b06f0dbf7"></a>
- **M06-CAP-ENCOUNTER-f402916b06f0dbf7**: Organ-at-risk Data
  Origin: original 4231

<a id="M06-CAP-ENCOUNTER-d05d6257a6dc9e74"></a>
- **M06-CAP-ENCOUNTER-d05d6257a6dc9e74**: Toxicity
  Origin: original 4231, original 4232

<a id="M06-CAP-ENCOUNTER-2eaf7620cd44f084"></a>
- **M06-CAP-ENCOUNTER-2eaf7620cd44f084**: Supports pediatric proton therapy workflows.
  Origin: original 4232

<a id="M06-CAP-ENCOUNTER-203f84f7ff932be5"></a>
- **M06-CAP-ENCOUNTER-203f84f7ff932be5**: Referral
  Origin: original 4232

<a id="M06-CAP-ENCOUNTER-e4aecc75bd1a2bc1"></a>
- **M06-CAP-ENCOUNTER-e4aecc75bd1a2bc1**: Planning Data
  Origin: original 4232

<a id="M06-CAP-ENCOUNTER-04570f795234679f"></a>
- **M06-CAP-ENCOUNTER-04570f795234679f**: Dose Documentation
  Origin: original 4232

<a id="M06-CAP-ENCOUNTER-a3241cf77d991407"></a>
- **M06-CAP-ENCOUNTER-a3241cf77d991407**: Imaging
  Origin: original 4232, original 4233, original 4634, original 5111

<a id="M06-CAP-ENCOUNTER-18825c4db89a8ef5"></a>
- **M06-CAP-ENCOUNTER-18825c4db89a8ef5**: Supports surgical oncology workflows.
  Origin: original 4233

<a id="M06-CAP-ENCOUNTER-2d2ffbcbba25564e"></a>
- **M06-CAP-ENCOUNTER-2d2ffbcbba25564e**: Pathology
  Origin: original 4233, original 4467, original 4634, original 4992, original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-4b762f3e0122d9d6"></a>
- **M06-CAP-ENCOUNTER-4b762f3e0122d9d6**: Margins
  Origin: original 4233

<a id="M06-CAP-ENCOUNTER-2ead501f1441e7f1"></a>
- **M06-CAP-ENCOUNTER-2ead501f1441e7f1**: Recovery
  Origin: original 4233

<a id="M06-CAP-ENCOUNTER-3d59f840b8e2a095"></a>
- **M06-CAP-ENCOUNTER-3d59f840b8e2a095**: Supports pediatric bronchoscopy workflows.
  Origin: original 4467

<a id="M06-CAP-ENCOUNTER-f01a0c3644ebaf7a"></a>
- **M06-CAP-ENCOUNTER-f01a0c3644ebaf7a**: Records
  Origin: original 4467, original 4521

<a id="M06-CAP-ENCOUNTER-9a7cc269612e850a"></a>
- **M06-CAP-ENCOUNTER-9a7cc269612e850a**: Airway Findings
  Origin: original 4467

<a id="M06-CAP-ENCOUNTER-228b18d13e8b34f1"></a>
- **M06-CAP-ENCOUNTER-228b18d13e8b34f1**: Procedures
  Origin: original 4467

<a id="M06-CAP-ENCOUNTER-2ace6b7563626b65"></a>
- **M06-CAP-ENCOUNTER-2ace6b7563626b65**: Samples
  Origin: original 4467

<a id="M06-CAP-ENCOUNTER-d130447d684396f9"></a>
- **M06-CAP-ENCOUNTER-d130447d684396f9**: Microbiology
  Origin: original 4467

<a id="M06-CAP-ENCOUNTER-8d7c6c153e3a2a02"></a>
- **M06-CAP-ENCOUNTER-8d7c6c153e3a2a02**: Supports pediatric diagnostic and therapeutic endoscopy.
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-a72cc6a2952a242d"></a>
- **M06-CAP-ENCOUNTER-a72cc6a2952a242d**: Anatomical Findings
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-6fdf6fb507eec070"></a>
- **M06-CAP-ENCOUNTER-6fdf6fb507eec070**: Images
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-7fa55285210d812f"></a>
- **M06-CAP-ENCOUNTER-7fa55285210d812f**: Biopsies
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-1d56760e632bb2d6"></a>
- **M06-CAP-ENCOUNTER-1d56760e632bb2d6**: Intervention
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-13f1212263f93193"></a>
- **M06-CAP-ENCOUNTER-13f1212263f93193**: Sedation Context
  Origin: original 4521

<a id="M06-CAP-ENCOUNTER-f3cc2660eae7dafa"></a>
- **M06-CAP-ENCOUNTER-f3cc2660eae7dafa**: Provide comprehensive management of pediatric renal replacement therapy.
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-44f61ea3b06a325e"></a>
- **M06-CAP-ENCOUNTER-44f61ea3b06a325e**: Continuous Renal Replacement Therapy
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-1d7029ea9ec4c19d"></a>
- **M06-CAP-ENCOUNTER-1d7029ea9ec4c19d**: Dialysis Prescription
  Origin: original 4567, original 4578

<a id="M06-CAP-ENCOUNTER-d13661cce509c6c0"></a>
- **M06-CAP-ENCOUNTER-d13661cce509c6c0**: Session Registry
  Origin: original 4567, original 4841, original 5167

<a id="M06-CAP-ENCOUNTER-8d1b0669274f2c54"></a>
- **M06-CAP-ENCOUNTER-8d1b0669274f2c54**: Vascular Access
  Origin: original 4567, original 4578, original 4579, original 4995

<a id="M06-CAP-ENCOUNTER-ba4403dced82af76"></a>
- **M06-CAP-ENCOUNTER-ba4403dced82af76**: Peritoneal Access
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-0dd6b5e026af56a6"></a>
- **M06-CAP-ENCOUNTER-0dd6b5e026af56a6**: Fluid Management
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-ec1c1b0919513410"></a>
- **M06-CAP-ENCOUNTER-ec1c1b0919513410**: Dry Weight
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-9da77df714be61fe"></a>
- **M06-CAP-ENCOUNTER-9da77df714be61fe**: Blood Pressure
  Origin: original 4567, original 4577, original 4578

<a id="M06-CAP-ENCOUNTER-e1c2a513ace73bfc"></a>
- **M06-CAP-ENCOUNTER-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4567, original 4578

<a id="M06-CAP-ENCOUNTER-97437969d9beb815"></a>
- **M06-CAP-ENCOUNTER-97437969d9beb815**: Dialysis Adequacy
  Origin: original 4567, original 4578

<a id="M06-CAP-ENCOUNTER-3cfa39200ce0ea10"></a>
- **M06-CAP-ENCOUNTER-3cfa39200ce0ea10**: Medication
  Origin: original 4567, original 4579, original 4995

<a id="M06-CAP-ENCOUNTER-5768adaf9507e83f"></a>
- **M06-CAP-ENCOUNTER-5768adaf9507e83f**: Nutrition
  Origin: original 4567, original 4578, original 4579

<a id="M06-CAP-ENCOUNTER-9d60d099367da84d"></a>
- **M06-CAP-ENCOUNTER-9d60d099367da84d**: Infection
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-039bd9a2eb935782"></a>
- **M06-CAP-ENCOUNTER-039bd9a2eb935782**: Device Integration
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-f4fca1c375817430"></a>
- **M06-CAP-ENCOUNTER-f4fca1c375817430**: Home Dialysis
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-802b8c1b9cf43ef1"></a>
- **M06-CAP-ENCOUNTER-802b8c1b9cf43ef1**: Quality Indicators
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-1a67354f9b95dc03"></a>
- **M06-CAP-ENCOUNTER-1a67354f9b95dc03**: Operational Functions:
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-0bdf7d46bf3b9b32"></a>
- **M06-CAP-ENCOUNTER-0bdf7d46bf3b9b32**: Treatment Scheduling
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-57cb10961ef97cba"></a>
- **M06-CAP-ENCOUNTER-57cb10961ef97cba**: Session Documentation
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-aa0f535ea0f205ba"></a>
- **M06-CAP-ENCOUNTER-aa0f535ea0f205ba**: Equipment Tracking
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-42c69a144c647dff"></a>
- **M06-CAP-ENCOUNTER-42c69a144c647dff**: Consumable Context
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-8581a92f19c1b4ee"></a>
- **M06-CAP-ENCOUNTER-8581a92f19c1b4ee**: Access Surveillance
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-0cc13e424e926f1c"></a>
- **M06-CAP-ENCOUNTER-0cc13e424e926f1c**: Clinical Escalation
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-ffe21dd7fb1692c8"></a>
- **M06-CAP-ENCOUNTER-ffe21dd7fb1692c8**: Multidisciplinary Review
  Origin: original 4567, original 5120

<a id="M06-CAP-ENCOUNTER-be60185891648e82"></a>
- **M06-CAP-ENCOUNTER-be60185891648e82**: Patient/Guardian Functions:
  Origin: original 4567, original 4577

<a id="M06-CAP-ENCOUNTER-d4af315691cfe9fe"></a>
- **M06-CAP-ENCOUNTER-d4af315691cfe9fe**: Home Treatment Records
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-a19f6e049660f673"></a>
- **M06-CAP-ENCOUNTER-a19f6e049660f673**: Weight Tracking
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-8ea50d2707dd1600"></a>
- **M06-CAP-ENCOUNTER-8ea50d2707dd1600**: Symptoms
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-efd4d6ad415728f0"></a>
- **M06-CAP-ENCOUNTER-efd4d6ad415728f0**: Treatment Education
  Origin: original 4567

<a id="M06-CAP-ENCOUNTER-bc9dca210114a187"></a>
- **M06-CAP-ENCOUNTER-bc9dca210114a187**: Support children receiving chronic peritoneal dialysis at home and provide structured communication between families and clinical teams.
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-f344ebe4b377d2d7"></a>
- **M06-CAP-ENCOUNTER-f344ebe4b377d2d7**: Peritoneal Dialysis Prescription
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-3d6dd0f86c652404"></a>
- **M06-CAP-ENCOUNTER-3d6dd0f86c652404**: Automated Peritoneal Dialysis
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-43abbf3c4393caf3"></a>
- **M06-CAP-ENCOUNTER-43abbf3c4393caf3**: Manual Exchange Documentation
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-08d4a89ed0d03e81"></a>
- **M06-CAP-ENCOUNTER-08d4a89ed0d03e81**: Treatment Schedule
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-268aba70ef4ddd37"></a>
- **M06-CAP-ENCOUNTER-268aba70ef4ddd37**: Dialysis Solution
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-4265ef7fd3981d5a"></a>
- **M06-CAP-ENCOUNTER-4265ef7fd3981d5a**: Fill Volume
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-4ed8be9f0ba93c70"></a>
- **M06-CAP-ENCOUNTER-4ed8be9f0ba93c70**: Dwell Time
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-490c47049eb0cf2a"></a>
- **M06-CAP-ENCOUNTER-490c47049eb0cf2a**: Ultrafiltration
  Origin: original 4577, original 4578, original 4579

<a id="M06-CAP-ENCOUNTER-cdcecae88521194c"></a>
- **M06-CAP-ENCOUNTER-cdcecae88521194c**: Weight
  Origin: original 4577, original 4578

<a id="M06-CAP-ENCOUNTER-36742ae9f1aca295"></a>
- **M06-CAP-ENCOUNTER-36742ae9f1aca295**: Fluid Balance
  Origin: original 4577, original 4579

<a id="M06-CAP-ENCOUNTER-95569700f44252a5"></a>
- **M06-CAP-ENCOUNTER-95569700f44252a5**: Catheter Status
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-81d9e3bdd9244d74"></a>
- **M06-CAP-ENCOUNTER-81d9e3bdd9244d74**: Exit-site Monitoring
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-73dc85c50f3881fd"></a>
- **M06-CAP-ENCOUNTER-73dc85c50f3881fd**: Treatment Adherence
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-04c92e873dd0a95b"></a>
- **M06-CAP-ENCOUNTER-04c92e873dd0a95b**: Device Data Integration
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-635bc9bcb87eef61"></a>
- **M06-CAP-ENCOUNTER-635bc9bcb87eef61**: Home Treatment Logs
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-422c8f1aac36c24a"></a>
- **M06-CAP-ENCOUNTER-422c8f1aac36c24a**: Complication Functions:
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-dc8c3ba9b4d5f1f4"></a>
- **M06-CAP-ENCOUNTER-dc8c3ba9b4d5f1f4**: Peritonitis Registry
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-9f3d639800517ba6"></a>
- **M06-CAP-ENCOUNTER-9f3d639800517ba6**: Exit-site Infection
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-6b77e1631ac47d3f"></a>
- **M06-CAP-ENCOUNTER-6b77e1631ac47d3f**: Drainage Problems
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-a0909ba161226e5f"></a>
- **M06-CAP-ENCOUNTER-a0909ba161226e5f**: Catheter Dysfunction
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-e9bfbcc317ba1d66"></a>
- **M06-CAP-ENCOUNTER-e9bfbcc317ba1d66**: Fluid Overload
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-c9031759e80c10ff"></a>
- **M06-CAP-ENCOUNTER-c9031759e80c10ff**: Treatment Interruption
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-4f886750f725ff5d"></a>
- **M06-CAP-ENCOUNTER-4f886750f725ff5d**: Home Dashboard
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-4192fd3a5a572125"></a>
- **M06-CAP-ENCOUNTER-4192fd3a5a572125**: Treatment Checklist
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-5ba889b1637fb49c"></a>
- **M06-CAP-ENCOUNTER-5ba889b1637fb49c**: Supply Tracking
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-f2f11f27eb060b29"></a>
- **M06-CAP-ENCOUNTER-f2f11f27eb060b29**: Symptom Reporting
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-0f49b0b6b64e2848"></a>
- **M06-CAP-ENCOUNTER-0f49b0b6b64e2848**: Clinician-approved Educational Content
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-fb9e03223e0ba744"></a>
- **M06-CAP-ENCOUNTER-fb9e03223e0ba744**: Emergency Instructions
  Origin: original 4577

<a id="M06-CAP-ENCOUNTER-7e80e5eca9f64ca1"></a>
- **M06-CAP-ENCOUNTER-7e80e5eca9f64ca1**: Coordinate pediatric hemodialysis sessions, clinical parameters, equipment and longitudinal outcomes.
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-3275c4ce77faab22"></a>
- **M06-CAP-ENCOUNTER-3275c4ce77faab22**: Session Scheduling
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-b900039c744aef1b"></a>
- **M06-CAP-ENCOUNTER-b900039c744aef1b**: Pre-Dialysis Assessment
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-1d4747400dffe7b7"></a>
- **M06-CAP-ENCOUNTER-1d4747400dffe7b7**: Post-Dialysis Assessment
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-98289066ba33a3f8"></a>
- **M06-CAP-ENCOUNTER-98289066ba33a3f8**: Target Weight
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-d617a864db6b5224"></a>
- **M06-CAP-ENCOUNTER-d617a864db6b5224**: Blood Flow
  Origin: original 4578, original 4579

<a id="M06-CAP-ENCOUNTER-e6fef2f90a9d34b6"></a>
- **M06-CAP-ENCOUNTER-e6fef2f90a9d34b6**: Dialysate Parameters
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-ffba8bb241dd0413"></a>
- **M06-CAP-ENCOUNTER-ffba8bb241dd0413**: Anticoagulation
  Origin: original 4578, original 4579

<a id="M06-CAP-ENCOUNTER-ba0e4c581595a452"></a>
- **M06-CAP-ENCOUNTER-ba0e4c581595a452**: Medication Administration
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-63915170859e6e45"></a>
- **M06-CAP-ENCOUNTER-63915170859e6e45**: Session Events
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-d1288b3fbe4a6aa6"></a>
- **M06-CAP-ENCOUNTER-d1288b3fbe4a6aa6**: Treatment Completion
  Origin: original 4578, original 5133, original 5167

<a id="M06-CAP-ENCOUNTER-52f776d981da6c60"></a>
- **M06-CAP-ENCOUNTER-52f776d981da6c60**: Longitudinal Intelligence:
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-f0944fe699fe0089"></a>
- **M06-CAP-ENCOUNTER-f0944fe699fe0089**: Adequacy Trends
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-c44651f199a98c12"></a>
- **M06-CAP-ENCOUNTER-c44651f199a98c12**: Blood Pressure Trends
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-1f2f91170c530a3f"></a>
- **M06-CAP-ENCOUNTER-1f2f91170c530a3f**: Weight Trends
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-e3713f12d64c6615"></a>
- **M06-CAP-ENCOUNTER-e3713f12d64c6615**: Access Performance
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-ab3febd198e62322"></a>
- **M06-CAP-ENCOUNTER-ab3febd198e62322**: Laboratory Trends
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-7cc8dc90ba952200"></a>
- **M06-CAP-ENCOUNTER-7cc8dc90ba952200**: Treatment Tolerance
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-2f27e552d723d07f"></a>
- **M06-CAP-ENCOUNTER-2f27e552d723d07f**: Integrations:
  Origin: original 4578, original 4634, original 4720, original 4992, original 4995, original 5044, original 5106, original 5111, original 5122, original 5131

<a id="M06-CAP-ENCOUNTER-54eded08702df067"></a>
- **M06-CAP-ENCOUNTER-54eded08702df067**: Dialysis Machines
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-35ff4287a628c0a4"></a>
- **M06-CAP-ENCOUNTER-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 4578, original 4992

<a id="M06-CAP-ENCOUNTER-7605ce62d32022f4"></a>
- **M06-CAP-ENCOUNTER-7605ce62d32022f4**: Pharmacy
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-dad1551e6044201a"></a>
- **M06-CAP-ENCOUNTER-dad1551e6044201a**: Nephrology
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-3ac5a64c26435e0b"></a>
- **M06-CAP-ENCOUNTER-3ac5a64c26435e0b**: Device Management
  Origin: original 4578

<a id="M06-CAP-ENCOUNTER-af96fdc54ebbd517"></a>
- **M06-CAP-ENCOUNTER-af96fdc54ebbd517**: Support renal replacement therapy in critically ill pediatric patients.
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-78da9a2742258ea7"></a>
- **M06-CAP-ENCOUNTER-78da9a2742258ea7**: CKRT/CRRT Prescription
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-450c0f2fef4c74c9"></a>
- **M06-CAP-ENCOUNTER-450c0f2fef4c74c9**: Treatment Modality
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-56f7fd05035ac994"></a>
- **M06-CAP-ENCOUNTER-56f7fd05035ac994**: Dialysate
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-b2bae0ac13fc1ca5"></a>
- **M06-CAP-ENCOUNTER-b2bae0ac13fc1ca5**: Replacement Fluid
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-a5ea19497a3c8c47"></a>
- **M06-CAP-ENCOUNTER-a5ea19497a3c8c47**: Hemodynamic Status
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-3e6673e4b5967f40"></a>
- **M06-CAP-ENCOUNTER-3e6673e4b5967f40**: Electrolytes
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-41de9f847262847e"></a>
- **M06-CAP-ENCOUNTER-41de9f847262847e**: Acid-Base Status
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-0051f0f3665d142b"></a>
- **M06-CAP-ENCOUNTER-0051f0f3665d142b**: Device Data
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-681f9ead0f3d8982"></a>
- **M06-CAP-ENCOUNTER-681f9ead0f3d8982**: Treatment Interruptions
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-93b12717b55f143f"></a>
- **M06-CAP-ENCOUNTER-93b12717b55f143f**: Filter Changes
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-d77ebdc25974e7d6"></a>
- **M06-CAP-ENCOUNTER-d77ebdc25974e7d6**: Complication Documentation
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-7c78af3acf6c9c48"></a>
- **M06-CAP-ENCOUNTER-7c78af3acf6c9c48**: ICU Integration:
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-d6465fc31e921c97"></a>
- **M06-CAP-ENCOUNTER-d6465fc31e921c97**: Sepsis
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-fa1defbe8ff8ff32"></a>
- **M06-CAP-ENCOUNTER-fa1defbe8ff8ff32**: Multiorgan Failure
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-eaf5019df6020560"></a>
- **M06-CAP-ENCOUNTER-eaf5019df6020560**: Hemodynamic Support
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-7f81e52bc145067c"></a>
- **M06-CAP-ENCOUNTER-7f81e52bc145067c**: Mechanical Ventilation
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-d831fb3bb8efed58"></a>
- **M06-CAP-ENCOUNTER-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-07f8d474b8b4141c"></a>
- **M06-CAP-ENCOUNTER-07f8d474b8b4141c**: Safety:
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-f76f4bdaafd08ea4"></a>
- **M06-CAP-ENCOUNTER-f76f4bdaafd08ea4**: High-acuity treatment decisions remain under specialist critical-care and nephrology supervision.
  Origin: original 4579

<a id="M06-CAP-ENCOUNTER-ff2d37cd4ca761a7"></a>
- **M06-CAP-ENCOUNTER-ff2d37cd4ca761a7**: Coordinate neurosurgical management of pediatric brain tumors within the wider neuro-oncology platform.
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-a04becd171370428"></a>
- **M06-CAP-ENCOUNTER-a04becd171370428**: Tumor Location
  Origin: original 4634, original 5111

<a id="M06-CAP-ENCOUNTER-64c15a423ff877e3"></a>
- **M06-CAP-ENCOUNTER-64c15a423ff877e3**: Surgical Indication
  Origin: original 4634, original 5111, original 5120, original 5131

<a id="M06-CAP-ENCOUNTER-55a3b82c00527623"></a>
- **M06-CAP-ENCOUNTER-55a3b82c00527623**: Preoperative Planning
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-950a62a4a3504322"></a>
- **M06-CAP-ENCOUNTER-950a62a4a3504322**: Resection
  Origin: original 4634, original 5131

<a id="M06-CAP-ENCOUNTER-39315c87f7669e89"></a>
- **M06-CAP-ENCOUNTER-39315c87f7669e89**: Intraoperative Data
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-55daa6845aa34073"></a>
- **M06-CAP-ENCOUNTER-55daa6845aa34073**: Residual Disease
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-1534f05abe23e7bb"></a>
- **M06-CAP-ENCOUNTER-1534f05abe23e7bb**: Postoperative Imaging
  Origin: original 4634, original 5106, original 5111

<a id="M06-CAP-ENCOUNTER-a790c89c073ea0af"></a>
- **M06-CAP-ENCOUNTER-a790c89c073ea0af**: Neurological Deficits
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-17afb585302a7682"></a>
- **M06-CAP-ENCOUNTER-17afb585302a7682**: Reoperation
  Origin: original 4634, original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-86d81ef3975ae5b8"></a>
- **M06-CAP-ENCOUNTER-86d81ef3975ae5b8**: Long-term Surveillance
  Origin: original 4634, original 5111

<a id="M06-CAP-ENCOUNTER-cd9cc84ecdc81938"></a>
- **M06-CAP-ENCOUNTER-cd9cc84ecdc81938**: Neuro-Oncology
  Origin: original 4634, original 5131

<a id="M06-CAP-ENCOUNTER-43dd69ead2249cc2"></a>
- **M06-CAP-ENCOUNTER-43dd69ead2249cc2**: Neurosurgery
  Origin: original 4634, original 5106, original 5111, original 5122, original 5131

<a id="M06-CAP-ENCOUNTER-264c6389f56b68ec"></a>
- **M06-CAP-ENCOUNTER-264c6389f56b68ec**: Neuroradiology
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-6b1b617f18c456db"></a>
- **M06-CAP-ENCOUNTER-6b1b617f18c456db**: Oncology
  Origin: original 4634, original 4992, original 4995, original 5111

<a id="M06-CAP-ENCOUNTER-ea1b4895867897fc"></a>
- **M06-CAP-ENCOUNTER-ea1b4895867897fc**: Radiotherapy
  Origin: original 4634

<a id="M06-CAP-ENCOUNTER-e9426dd272d9aa70"></a>
- **M06-CAP-ENCOUNTER-e9426dd272d9aa70**: Rehabilitation
  Origin: original 4634, original 5111, original 5122, original 5131, original 5167

<a id="M06-CAP-ENCOUNTER-3da93e041e0fa0e7"></a>
- **M06-CAP-ENCOUNTER-3da93e041e0fa0e7**: Coordinate rehabilitation for children with inflammatory and systemic musculoskeletal disease.
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-fca68ccf901c1ea7"></a>
- **M06-CAP-ENCOUNTER-fca68ccf901c1ea7**: Functional Baseline
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-8951380ee6a8c53b"></a>
- **M06-CAP-ENCOUNTER-8951380ee6a8c53b**: Joint Range of Motion
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-6648cbeaf52f7c1c"></a>
- **M06-CAP-ENCOUNTER-6648cbeaf52f7c1c**: Muscle Strength
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-7881805835cd66a2"></a>
- **M06-CAP-ENCOUNTER-7881805835cd66a2**: Mobility
  Origin: original 4720, original 5044, original 5122

<a id="M06-CAP-ENCOUNTER-4e787722e84ee2d2"></a>
- **M06-CAP-ENCOUNTER-4e787722e84ee2d2**: Gait
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-d63829d8f5e37774"></a>
- **M06-CAP-ENCOUNTER-d63829d8f5e37774**: Endurance
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-d929dde3cb2892d8"></a>
- **M06-CAP-ENCOUNTER-d929dde3cb2892d8**: Pain
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-bcbe15b6b26611a9"></a>
- **M06-CAP-ENCOUNTER-bcbe15b6b26611a9**: Contractures
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-aa433304c304c24c"></a>
- **M06-CAP-ENCOUNTER-aa433304c304c24c**: Physiotherapy
  Origin: original 4720, original 5044, original 5122

<a id="M06-CAP-ENCOUNTER-226a232c5362ff1b"></a>
- **M06-CAP-ENCOUNTER-226a232c5362ff1b**: Occupational Therapy
  Origin: original 4720, original 5044, original 5122

<a id="M06-CAP-ENCOUNTER-262e1420c9936450"></a>
- **M06-CAP-ENCOUNTER-262e1420c9936450**: Home Program
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-9fee4aed7844900b"></a>
- **M06-CAP-ENCOUNTER-9fee4aed7844900b**: Assistive Devices
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-028c6828a851b3b8"></a>
- **M06-CAP-ENCOUNTER-028c6828a851b3b8**: Rehabilitation Goals
  Origin: original 4720

<a id="M06-CAP-ENCOUNTER-d08bcd1528f93e38"></a>
- **M06-CAP-ENCOUNTER-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-791e150b54f860f6"></a>
- **M06-CAP-ENCOUNTER-791e150b54f860f6**: Rheumatology
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-7e0d2d09696ce889"></a>
- **M06-CAP-ENCOUNTER-7e0d2d09696ce889**: Rehabilitation Medicine
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-0c2d408e413351d3"></a>
- **M06-CAP-ENCOUNTER-0c2d408e413351d3**: Orthopedics
  Origin: original 4720, original 5044

<a id="M06-CAP-ENCOUNTER-ddbb4a8aa0bc4d4c"></a>
- **M06-CAP-ENCOUNTER-ddbb4a8aa0bc4d4c**: Create a structured longitudinal record of psychological and psychotherapeutic interventions.
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-6dcaeb4b7a20f8de"></a>
- **M06-CAP-ENCOUNTER-6dcaeb4b7a20f8de**: Therapy Indication
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-3df3c4ed3b9b6c0b"></a>
- **M06-CAP-ENCOUNTER-3df3c4ed3b9b6c0b**: Therapy Modality
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-e39d3139b6fc929d"></a>
- **M06-CAP-ENCOUNTER-e39d3139b6fc929d**: Treatment Goals
  Origin: original 4841, original 5167

<a id="M06-CAP-ENCOUNTER-9ba6d784ad63b10d"></a>
- **M06-CAP-ENCOUNTER-9ba6d784ad63b10d**: Intervention Plan
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-f7c2f64a8f81da61"></a>
- **M06-CAP-ENCOUNTER-f7c2f64a8f81da61**: Symptom Measures
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-75b1ab465e596ef6"></a>
- **M06-CAP-ENCOUNTER-75b1ab465e596ef6**: Functional Goals
  Origin: original 4841, original 5122

<a id="M06-CAP-ENCOUNTER-ba6aa9c7f9f7162d"></a>
- **M06-CAP-ENCOUNTER-ba6aa9c7f9f7162d**: Patient Participation
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-7f92c3a767397dc4"></a>
- **M06-CAP-ENCOUNTER-7f92c3a767397dc4**: Guardian Participation where appropriate
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-95ca82a45122dc88"></a>
- **M06-CAP-ENCOUNTER-95ca82a45122dc88**: Treatment Progress
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-8158fae71efa0684"></a>
- **M06-CAP-ENCOUNTER-8158fae71efa0684**: Treatment Modification
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-821ca89f5c693e01"></a>
- **M06-CAP-ENCOUNTER-821ca89f5c693e01**: Therapy Completion
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-16bf46bb5b7cd2ed"></a>
- **M06-CAP-ENCOUNTER-16bf46bb5b7cd2ed**: Outcome Measures
  Origin: original 4841, original 5167

<a id="M06-CAP-ENCOUNTER-5e4da390b5deff2d"></a>
- **M06-CAP-ENCOUNTER-5e4da390b5deff2d**: Supported Care Models:
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-98d6f21ca108c9a1"></a>
- **M06-CAP-ENCOUNTER-98d6f21ca108c9a1**: Individual Therapy
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-974e4bf2d7437cff"></a>
- **M06-CAP-ENCOUNTER-974e4bf2d7437cff**: Family-based Intervention
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-f0f30affa6ff9d10"></a>
- **M06-CAP-ENCOUNTER-f0f30affa6ff9d10**: Group Therapy Context
  Origin: original 4841, original 5167

<a id="M06-CAP-ENCOUNTER-b29fd5c7fc8a64b7"></a>
- **M06-CAP-ENCOUNTER-b29fd5c7fc8a64b7**: Behavioral Intervention
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-ea7b3b958804bba6"></a>
- **M06-CAP-ENCOUNTER-ea7b3b958804bba6**: Skills-based Therapy
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-7b641e7a4722eb9a"></a>
- **M06-CAP-ENCOUNTER-7b641e7a4722eb9a**: Developmentally Adapted Psychological Care
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-4eb2af6b34b4b40a"></a>
- **M06-CAP-ENCOUNTER-4eb2af6b34b4b40a**: Privacy:
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-3027760ffee53773"></a>
- **M06-CAP-ENCOUNTER-3027760ffee53773**: Detailed psychotherapy notes may be subject to enhanced access controls separate from general clinical summaries.
  Origin: original 4841

<a id="M06-CAP-ENCOUNTER-799c5c7e3dfd0e4c"></a>
- **M06-CAP-ENCOUNTER-799c5c7e3dfd0e4c**: Connect bone marrow procedures, morphology, pathology and molecular diagnostics within one traceable clinical workflow.
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-4fe5158d0bff2af4"></a>
- **M06-CAP-ENCOUNTER-4fe5158d0bff2af4**: Procedure Indication
  Origin: original 4992, original 4995, original 5106

<a id="M06-CAP-ENCOUNTER-d652fd2b383ea2d7"></a>
- **M06-CAP-ENCOUNTER-d652fd2b383ea2d7**: Core Biopsy
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-fc7f2913fdc1ea1f"></a>
- **M06-CAP-ENCOUNTER-fc7f2913fdc1ea1f**: Specimen Tracking
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-79df1514618742a9"></a>
- **M06-CAP-ENCOUNTER-79df1514618742a9**: Cellularity Context
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-7a28a78a806dbc2f"></a>
- **M06-CAP-ENCOUNTER-7a28a78a806dbc2f**: Molecular Testing
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-78d0334ae8346a4e"></a>
- **M06-CAP-ENCOUNTER-78d0334ae8346a4e**: Histopathology
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-fe847f9965ec252a"></a>
- **M06-CAP-ENCOUNTER-fe847f9965ec252a**: Immunophenotyping
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-a6fa6d83b3f964f8"></a>
- **M06-CAP-ENCOUNTER-a6fa6d83b3f964f8**: Specialist Interpretation
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-94857e10b0dccf29"></a>
- **M06-CAP-ENCOUNTER-94857e10b0dccf29**: Clinical Correlation
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-816f49494ba8a0c9"></a>
- **M06-CAP-ENCOUNTER-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-f58af08e3b577873"></a>
- **M06-CAP-ENCOUNTER-f58af08e3b577873**: Treatment Impact
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-d5201c8c85a8f994"></a>
- **M06-CAP-ENCOUNTER-d5201c8c85a8f994**: Hematology
  Origin: original 4992, original 4995

<a id="M06-CAP-ENCOUNTER-aaaf0a34a8eb8286"></a>
- **M06-CAP-ENCOUNTER-aaaf0a34a8eb8286**: Genetics
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-fb7dcbc64a7ed5f8"></a>
- **M06-CAP-ENCOUNTER-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-13e1a201b5eb714d"></a>
- **M06-CAP-ENCOUNTER-13e1a201b5eb714d**: Structured Data Organization
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-aca18d42c7fa8fff"></a>
- **M06-CAP-ENCOUNTER-aca18d42c7fa8fff**: Historical Comparison Support
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-f171efc5fc7ff8be"></a>
- **M06-CAP-ENCOUNTER-f171efc5fc7ff8be**: Diagnostic Timeline Assembly
  Origin: original 4992

<a id="M06-CAP-ENCOUNTER-98e3b5086e8e6cbf"></a>
- **M06-CAP-ENCOUNTER-98e3b5086e8e6cbf**: Coordinate therapeutic apheresis and clinically indicated cellular collection procedures in pediatric patients.
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-38e3e8aaddacff66"></a>
- **M06-CAP-ENCOUNTER-38e3e8aaddacff66**: Procedure Type
  Origin: original 4995, original 5131

<a id="M06-CAP-ENCOUNTER-c203e354374d9b88"></a>
- **M06-CAP-ENCOUNTER-c203e354374d9b88**: Machine/Device Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-3d4b36fdd505e5ab"></a>
- **M06-CAP-ENCOUNTER-3d4b36fdd505e5ab**: Replacement Fluid Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-f25802c9177e21ff"></a>
- **M06-CAP-ENCOUNTER-f25802c9177e21ff**: Anticoagulation Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-9aeb6f7ed710881d"></a>
- **M06-CAP-ENCOUNTER-9aeb6f7ed710881d**: Pre-procedure Labs
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-ec6d848e71271854"></a>
- **M06-CAP-ENCOUNTER-ec6d848e71271854**: Procedure Parameters
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-d41261faa2ec740d"></a>
- **M06-CAP-ENCOUNTER-d41261faa2ec740d**: Product Collection Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-e9bb1b7104aa25cd"></a>
- **M06-CAP-ENCOUNTER-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4995, original 5044

<a id="M06-CAP-ENCOUNTER-e2bcbdb15c33554b"></a>
- **M06-CAP-ENCOUNTER-e2bcbdb15c33554b**: Clinical Contexts:
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-bb6e4802291fff0f"></a>
- **M06-CAP-ENCOUNTER-bb6e4802291fff0f**: Plasma Exchange
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-68407dc8111347bd"></a>
- **M06-CAP-ENCOUNTER-68407dc8111347bd**: Red Cell Exchange
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-1f349d87e889002d"></a>
- **M06-CAP-ENCOUNTER-1f349d87e889002d**: Leukapheresis Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-1c176ed7ed059385"></a>
- **M06-CAP-ENCOUNTER-1c176ed7ed059385**: Stem Cell Collection Context
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-bca1dace86dc60be"></a>
- **M06-CAP-ENCOUNTER-bca1dace86dc60be**: Other Therapeutic Apheresis
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-ab3aa4b66310e203"></a>
- **M06-CAP-ENCOUNTER-ab3aa4b66310e203**: Transfusion Medicine
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-c25e5083a540778a"></a>
- **M06-CAP-ENCOUNTER-c25e5083a540778a**: Transplantation
  Origin: original 4995

<a id="M06-CAP-ENCOUNTER-4a1db7b3fa8112be"></a>
- **M06-CAP-ENCOUNTER-4a1db7b3fa8112be**: Intensive Care
  Origin: original 4995, original 5106

<a id="M06-CAP-ENCOUNTER-5c99feb474219ba7"></a>
- **M06-CAP-ENCOUNTER-5c99feb474219ba7**: Coordinate safe rehabilitation and preservation of function in pediatric inflammatory disease.
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-85d61c5ac64e394d"></a>
- **M06-CAP-ENCOUNTER-85d61c5ac64e394d**: Functional Assessment
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-c8f2f3fad28c4b03"></a>
- **M06-CAP-ENCOUNTER-c8f2f3fad28c4b03**: Strength
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-c2b810f18c7e3bf3"></a>
- **M06-CAP-ENCOUNTER-c2b810f18c7e3bf3**: Balance
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-b9eb769ed9c3bee1"></a>
- **M06-CAP-ENCOUNTER-b9eb769ed9c3bee1**: Exercise Tolerance
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-e09c794604c2454a"></a>
- **M06-CAP-ENCOUNTER-e09c794604c2454a**: Contracture Context
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-32d495f5bbc14544"></a>
- **M06-CAP-ENCOUNTER-32d495f5bbc14544**: Activity Goals
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-a72a7cfb72748859"></a>
- **M06-CAP-ENCOUNTER-a72a7cfb72748859**: School Participation
  Origin: original 5044

<a id="M06-CAP-ENCOUNTER-50b8c26cc6deda0a"></a>
- **M06-CAP-ENCOUNTER-50b8c26cc6deda0a**: Coordinate neuroendoscopic procedures and longitudinal follow-up in pediatric neurosurgery.
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-f88b349e45dfdf31"></a>
- **M06-CAP-ENCOUNTER-f88b349e45dfdf31**: ETV Context
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-bda8c69f5a6a77b1"></a>
- **M06-CAP-ENCOUNTER-bda8c69f5a6a77b1**: Endoscopic Procedure Type
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-9ac5be76ee69e8b9"></a>
- **M06-CAP-ENCOUNTER-9ac5be76ee69e8b9**: Preoperative Imaging
  Origin: original 5106, original 5120

<a id="M06-CAP-ENCOUNTER-6c99ca5bc0c98e1c"></a>
- **M06-CAP-ENCOUNTER-6c99ca5bc0c98e1c**: Intraoperative Findings
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-735ded0799e7e752"></a>
- **M06-CAP-ENCOUNTER-735ded0799e7e752**: Procedure Date
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-2c12c94cde9502a7"></a>
- **M06-CAP-ENCOUNTER-2c12c94cde9502a7**: CSF Dynamics Context
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-6cf52eb2351573d6"></a>
- **M06-CAP-ENCOUNTER-6cf52eb2351573d6**: Clinical Response
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-1595749abcab3b8a"></a>
- **M06-CAP-ENCOUNTER-1595749abcab3b8a**: Failure Context
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-9e69c70d67ccae0f"></a>
- **M06-CAP-ENCOUNTER-9e69c70d67ccae0f**: Repeat Procedure
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-253fb73d09f84811"></a>
- **M06-CAP-ENCOUNTER-253fb73d09f84811**: Shunt Conversion Context
  Origin: original 5106

<a id="M06-CAP-ENCOUNTER-ceb444a895ec2faf"></a>
- **M06-CAP-ENCOUNTER-ceb444a895ec2faf**: Long-term Outcome
  Origin: original 5106, original 5122, original 5131

<a id="M06-CAP-ENCOUNTER-c062dc13ee048cfd"></a>
- **M06-CAP-ENCOUNTER-c062dc13ee048cfd**: Radiology
  Origin: original 5106, original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-1776431d6d17f344"></a>
- **M06-CAP-ENCOUNTER-1776431d6d17f344**: Neurology
  Origin: original 5106, original 5111, original 5122, original 5131

<a id="M06-CAP-ENCOUNTER-133bc922e109bb17"></a>
- **M06-CAP-ENCOUNTER-133bc922e109bb17**: Connect neurosurgical treatment of pediatric brain tumors with oncology, pathology, imaging and longitudinal neurological outcomes.
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-02723df1654d8dd7"></a>
- **M06-CAP-ENCOUNTER-02723df1654d8dd7**: Presentation
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-f3a6fa377b21832d"></a>
- **M06-CAP-ENCOUNTER-f3a6fa377b21832d**: Biopsy Context
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-325b9d0917dc4bef"></a>
- **M06-CAP-ENCOUNTER-325b9d0917dc4bef**: Resection Context
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-6109a5d06de9a8ae"></a>
- **M06-CAP-ENCOUNTER-6109a5d06de9a8ae**: Extent of Resection
  Origin: original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-ba6403d34b52aaa0"></a>
- **M06-CAP-ENCOUNTER-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-a1a9df860c126dac"></a>
- **M06-CAP-ENCOUNTER-a1a9df860c126dac**: Neurological Outcome
  Origin: original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-4ba63e2ad30c17fd"></a>
- **M06-CAP-ENCOUNTER-4ba63e2ad30c17fd**: CSF Disorder Context
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-7ccf45269d465a4e"></a>
- **M06-CAP-ENCOUNTER-7ccf45269d465a4e**: Oncology Treatment Context
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-1d65210795905d48"></a>
- **M06-CAP-ENCOUNTER-1d65210795905d48**: Recurrence
  Origin: original 5111

<a id="M06-CAP-ENCOUNTER-43a67d79860bcb43"></a>
- **M06-CAP-ENCOUNTER-43a67d79860bcb43**: HIGH
  Origin: original 5111, original 5131

<a id="M06-CAP-ENCOUNTER-3ffdaa1c3be3204f"></a>
- **M06-CAP-ENCOUNTER-3ffdaa1c3be3204f**: Create a traceable multidisciplinary environment for complex pediatric neurosurgical planning.
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-82d4a77474b0887a"></a>
- **M06-CAP-ENCOUNTER-82d4a77474b0887a**: Anatomical Localization
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-2677b2b1cf618ee3"></a>
- **M06-CAP-ENCOUNTER-2677b2b1cf618ee3**: Functional Anatomy Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-dba3f829bf3d7472"></a>
- **M06-CAP-ENCOUNTER-dba3f829bf3d7472**: Vascular Anatomy Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-518f3e07818e2c76"></a>
- **M06-CAP-ENCOUNTER-518f3e07818e2c76**: Surgical Approach
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-ca06eefa18d99ef1"></a>
- **M06-CAP-ENCOUNTER-ca06eefa18d99ef1**: Navigation Data Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-3bb53df5a05ade9f"></a>
- **M06-CAP-ENCOUNTER-3bb53df5a05ade9f**: Neurophysiology Plan
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-9fbcbcd1fa610088"></a>
- **M06-CAP-ENCOUNTER-9fbcbcd1fa610088**: Anesthesia Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-5996759cbd020112"></a>
- **M06-CAP-ENCOUNTER-5996759cbd020112**: Blood Management Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-ad43088485ce1e6e"></a>
- **M06-CAP-ENCOUNTER-ad43088485ce1e6e**: Device Requirements
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-fe3a1cfee56c7c43"></a>
- **M06-CAP-ENCOUNTER-fe3a1cfee56c7c43**: Implant Requirements
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-ad10c429d21bb80c"></a>
- **M06-CAP-ENCOUNTER-ad10c429d21bb80c**: Risk Documentation
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-1f8b3f8a6e3241d5"></a>
- **M06-CAP-ENCOUNTER-1f8b3f8a6e3241d5**: Final Surgical Plan
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-bfb737d3f44b3c35"></a>
- **M06-CAP-ENCOUNTER-bfb737d3f44b3c35**: Digital Capabilities:
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-5bf44bb05d84bb14"></a>
- **M06-CAP-ENCOUNTER-5bf44bb05d84bb14**: Imaging Fusion Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-df18797b43b127c3"></a>
- **M06-CAP-ENCOUNTER-df18797b43b127c3**: 3D Anatomical Modeling Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-4dc99c17c9be3643"></a>
- **M06-CAP-ENCOUNTER-4dc99c17c9be3643**: Procedure Simulation Context
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-007c953ebc7639b3"></a>
- **M06-CAP-ENCOUNTER-007c953ebc7639b3**: Planning Version History
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-ce64b9865f003086"></a>
- **M06-CAP-ENCOUNTER-ce64b9865f003086**: Decision Traceability
  Origin: original 5120

<a id="M06-CAP-ENCOUNTER-dc16b04a65b9e339"></a>
- **M06-CAP-ENCOUNTER-dc16b04a65b9e339**: Track recovery and functional outcomes after pediatric neurosurgical procedures.
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-4b67be3b4875be86"></a>
- **M06-CAP-ENCOUNTER-4b67be3b4875be86**: Baseline Neurological Status
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-79c8bf6fcfd11721"></a>
- **M06-CAP-ENCOUNTER-79c8bf6fcfd11721**: Postoperative Neurological Status
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-fc12f44c0fcec874"></a>
- **M06-CAP-ENCOUNTER-fc12f44c0fcec874**: Pain Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-d2bb402b05fbc1d3"></a>
- **M06-CAP-ENCOUNTER-d2bb402b05fbc1d3**: Motor Function
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-36e66d57de9d96fe"></a>
- **M06-CAP-ENCOUNTER-36e66d57de9d96fe**: Speech Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-e651b503ed8799b6"></a>
- **M06-CAP-ENCOUNTER-e651b503ed8799b6**: Swallowing Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-94dc7f863fbef7c4"></a>
- **M06-CAP-ENCOUNTER-94dc7f863fbef7c4**: Cognitive Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-b159fac809f357aa"></a>
- **M06-CAP-ENCOUNTER-b159fac809f357aa**: Seizure Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-0b7719e5e8b3ce00"></a>
- **M06-CAP-ENCOUNTER-0b7719e5e8b3ce00**: Wound Status
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-ba9d88315635912e"></a>
- **M06-CAP-ENCOUNTER-ba9d88315635912e**: Device Status
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-0165523a336a3cb1"></a>
- **M06-CAP-ENCOUNTER-0165523a336a3cb1**: School Reintegration Context
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-ea3d45fe20391aba"></a>
- **M06-CAP-ENCOUNTER-ea3d45fe20391aba**: Speech Therapy
  Origin: original 5122

<a id="M06-CAP-ENCOUNTER-a345e32468d00bdd"></a>
- **M06-CAP-ENCOUNTER-a345e32468d00bdd**: Psychology
  Origin: original 5122, original 5167

<a id="M06-CAP-ENCOUNTER-087ffec1f651fb3a"></a>
- **M06-CAP-ENCOUNTER-087ffec1f651fb3a**: Connect neurosurgical procedures with pathology, postoperative imaging and oncological treatment planning.
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-52f7834a10a9c9ac"></a>
- **M06-CAP-ENCOUNTER-52f7834a10a9c9ac**: Anatomical Site
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-3afc6a2b74620b7a"></a>
- **M06-CAP-ENCOUNTER-3afc6a2b74620b7a**: Operative Findings
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-b1f97d8aeac77e13"></a>
- **M06-CAP-ENCOUNTER-b1f97d8aeac77e13**: Postoperative MRI
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-c0a44ce92c076bee"></a>
- **M06-CAP-ENCOUNTER-c0a44ce92c076bee**: Surgical Complications
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-eb6a68bc455581a8"></a>
- **M06-CAP-ENCOUNTER-eb6a68bc455581a8**: CSF Complications
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-c399ce2cf568aa4f"></a>
- **M06-CAP-ENCOUNTER-c399ce2cf568aa4f**: Adjuvant Treatment Context
  Origin: original 5131

<a id="M06-CAP-ENCOUNTER-94e1aa1d6b41b736"></a>
- **M06-CAP-ENCOUNTER-94e1aa1d6b41b736**: Maintain a lifetime traceable record of radiotherapy delivered for pediatric CNS tumors.
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-f4005ba884b6e4d5"></a>
- **M06-CAP-ENCOUNTER-f4005ba884b6e4d5**: Radiotherapy Indication
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-bf0acdf97b47ab48"></a>
- **M06-CAP-ENCOUNTER-bf0acdf97b47ab48**: Treatment Site
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-2c52c3febff18e35"></a>
- **M06-CAP-ENCOUNTER-2c52c3febff18e35**: Treatment Technique
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-e27927ff144a206e"></a>
- **M06-CAP-ENCOUNTER-e27927ff144a206e**: Dose Context
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-56b61801b45621ac"></a>
- **M06-CAP-ENCOUNTER-56b61801b45621ac**: Fractionation Context
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-a7114546bf221f8b"></a>
- **M06-CAP-ENCOUNTER-a7114546bf221f8b**: Treatment Dates
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-8b5432c17242bebe"></a>
- **M06-CAP-ENCOUNTER-8b5432c17242bebe**: Cranial Exposure
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-9d12f9116975c81c"></a>
- **M06-CAP-ENCOUNTER-9d12f9116975c81c**: Spinal Exposure
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-c7305e42886af921"></a>
- **M06-CAP-ENCOUNTER-c7305e42886af921**: Critical Structure Context
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-76a795090fc83829"></a>
- **M06-CAP-ENCOUNTER-76a795090fc83829**: Acute Toxicity
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-3ee44ccb334aa398"></a>
- **M06-CAP-ENCOUNTER-3ee44ccb334aa398**: Follow-up Imaging
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-b2b85abe5f357fec"></a>
- **M06-CAP-ENCOUNTER-b2b85abe5f357fec**: Late-effect Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-3e2e1272f2bd2b07"></a>
- **M06-CAP-ENCOUNTER-3e2e1272f2bd2b07**: Secondary Malignancy Context
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-8fa0f06de0f7321a"></a>
- **M06-CAP-ENCOUNTER-8fa0f06de0f7321a**: Long-term Integration:
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-a2ec9bf30d0dd0b0"></a>
- **M06-CAP-ENCOUNTER-a2ec9bf30d0dd0b0**: Endocrine Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-82fe5bfbe6ee302f"></a>
- **M06-CAP-ENCOUNTER-82fe5bfbe6ee302f**: Neurocognitive Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-7bee8335054deeaa"></a>
- **M06-CAP-ENCOUNTER-7bee8335054deeaa**: Hearing Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-15812df0176b471b"></a>
- **M06-CAP-ENCOUNTER-15812df0176b471b**: Vision Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-6d9a941c547c5d02"></a>
- **M06-CAP-ENCOUNTER-6d9a941c547c5d02**: Vascular Surveillance
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-8bf61b2b633fc7e7"></a>
- **M06-CAP-ENCOUNTER-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 5133

<a id="M06-CAP-ENCOUNTER-f3dfb05d2cbd1933"></a>
- **M06-CAP-ENCOUNTER-f3dfb05d2cbd1933**: Provide structured longitudinal management of psychological and psychotherapeutic interventions without unnecessarily exposing confidential session content.
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-8e96619c8dca4b93"></a>
- **M06-CAP-ENCOUNTER-8e96619c8dca4b93**: Functions:
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-0cafb61738b4fb2c"></a>
- **M06-CAP-ENCOUNTER-0cafb61738b4fb2c**: Therapy Type
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-2cf2b84939a9ee1d"></a>
- **M06-CAP-ENCOUNTER-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-42119430ca78d00d"></a>
- **M06-CAP-ENCOUNTER-42119430ca78d00d**: Attendance
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-99232a097b3eb787"></a>
- **M06-CAP-ENCOUNTER-99232a097b3eb787**: Progress Context
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-d889a755becf4a5a"></a>
- **M06-CAP-ENCOUNTER-d889a755becf4a5a**: Family Intervention Context
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-9bbec08e146eac77"></a>
- **M06-CAP-ENCOUNTER-9bbec08e146eac77**: Privacy Architecture:
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-ce914b044fb5fa3b"></a>
- **M06-CAP-ENCOUNTER-ce914b044fb5fa3b**: Clinical Summary Layer
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-548f75e5795d5fc2"></a>
- **M06-CAP-ENCOUNTER-548f75e5795d5fc2**: Restricted Session-note Layer
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-3e780e074f5cc321"></a>
- **M06-CAP-ENCOUNTER-3e780e074f5cc321**: Consent-aware Sharing
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-8deb81f02b2bfc0e"></a>
- **M06-CAP-ENCOUNTER-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-329caaaf376c0bdd"></a>
- **M06-CAP-ENCOUNTER-329caaaf376c0bdd**: Guardian-access Rules
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-79b63a83bc7d1c15"></a>
- **M06-CAP-ENCOUNTER-79b63a83bc7d1c15**: Audit Trail
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-77fb8ef2bf85b427"></a>
- **M06-CAP-ENCOUNTER-77fb8ef2bf85b427**: Interoperability:
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-3ab5393bc711e30c"></a>
- **M06-CAP-ENCOUNTER-3ab5393bc711e30c**: Psychiatry
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-e9eb7b780843070a"></a>
- **M06-CAP-ENCOUNTER-e9eb7b780843070a**: Pediatrics
  Origin: original 5167

<a id="M06-CAP-ENCOUNTER-a1c2cf6fd73864d4"></a>
- **M06-CAP-ENCOUNTER-a1c2cf6fd73864d4**: School Support Context
  Origin: original 5167

## Preserved source metadata

<a id="M06-CAP-ENCOUNTER-13215ef954107ab7"></a>
- **M06-CAP-ENCOUNTER-13215ef954107ab7**: # Pediatric Heart Surgery Registry

<a id="M06-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M06-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports

<a id="M06-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M06-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M06-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation

<a id="M06-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M06-CAP-ENCOUNTER-6f33acf3afb37064**: ---

<a id="M06-CAP-ENCOUNTER-ac39f46e587312bc"></a>
- **M06-CAP-ENCOUNTER-ac39f46e587312bc**: # Pediatric Dialysis Registry

<a id="M06-CAP-ENCOUNTER-491af60cf0c84c2f"></a>
- **M06-CAP-ENCOUNTER-491af60cf0c84c2f**: # Pediatric Endoscopy Archive

<a id="M06-CAP-ENCOUNTER-ec136c8e8bcae3c3"></a>
- **M06-CAP-ENCOUNTER-ec136c8e8bcae3c3**: # Pediatric Bone Marrow Registry

<a id="M06-CAP-ENCOUNTER-d5580104fa9ebcce"></a>
- **M06-CAP-ENCOUNTER-d5580104fa9ebcce**: # Pediatric Intensive Care Surgical Registry

<a id="M06-CAP-ENCOUNTER-21d94006fa494f95"></a>
- **M06-CAP-ENCOUNTER-21d94006fa494f95**: Integrates

<a id="M06-CAP-ENCOUNTER-6510c5c511a879bc"></a>
- **M06-CAP-ENCOUNTER-6510c5c511a879bc**: Purpose:

<a id="M06-CAP-ENCOUNTER-b34f593f0f83a1d1"></a>
- **M06-CAP-ENCOUNTER-b34f593f0f83a1d1**: Core Functions:

<a id="M06-CAP-ENCOUNTER-b88b375a44ccd619"></a>
- **M06-CAP-ENCOUNTER-b88b375a44ccd619**: Status:

<a id="M06-CAP-ENCOUNTER-fd85b703c00f8755"></a>
- **M06-CAP-ENCOUNTER-fd85b703c00f8755**: MVP Relevance:

<a id="M06-CAP-ENCOUNTER-b3604d24a08b400e"></a>
- **M06-CAP-ENCOUNTER-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
