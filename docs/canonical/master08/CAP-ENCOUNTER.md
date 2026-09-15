# CORE-CAP-ENCOUNTER — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M07-SURGERY-EPISODES

Original IDs: 1124, 1128, 1132, 4666.

Surgical and orthopedic perioperative records share procedure ownership. Preserve procedure/date/surgeon/outcome, trauma ICU and rehabilitation, laparoscopic versus thoracoscopic equipment, indication, imaging plan, consent, anesthesia, blood loss, implants and postoperative wound/mobility context. Clinical indication and anesthetic authorization remain separate signed decisions.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M07-SURGERY-REHAB

Original IDs: 1136, 4669, 4690.

Rehabilitation plans retain clinician-approved physiotherapy/nutrition/activity, functional baseline, strength/motion/gait/balance, sessions, home goals, occupational therapy and discharge. Return-to-school and activity are distinct decisions; completion of an exercise does not imply clearance.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M07-REHAB-CLEARANCE

Original IDs: 4688.

Return-to-learn, daily activity, PE, training and sport are separately scoped clinician decisions with baseline/function, symptoms, restrictions, testing and review date. Record progression and clearance independently; no single approval automatically grants the other scopes.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M07-REHAB-OT-SPEECH

Original IDs: 4691, 4692.

Occupational and speech/language/swallowing sessions retain distinct goals, clinician, fine-motor/self-care/feeding/handwriting/environment and voice/alternative communication/feeding-safety context. Shared therapy record ownership preserves specialty differences; exercises do not establish safe oral feeding.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M08-PORTAL

Original IDs: 44.

Doctor portal composes patient and encounter workflows, independently owned prescribing, appointments, documents and telemedicine. Preserve signature/credential/clinical role requirements and future dictation/integration features without treating portal access as universal patient or prescribing permission.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M08-PERIOPERATIVE

Original IDs: 2381, 3051, 3715.

Anesthesia and pre/intra/postoperative care are encounter profiles with clinical assessment, medication-plan references, source monitoring, recovery and enhanced-recovery protocol/version. AI risk prediction remains governed separately; no inferred thresholds or autonomous discharge.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

### M08-SPECIALTY-SURGERY

Original IDs: 4772, 4795, 4921, 4946.

ENT, dental behavioral/sedation, adolescent gynecologic and reconstructive urologic procedures retain distinct airway/hearing/implant, accommodation/adverse event, ovarian preservation/consent-assent, catheter/drain/stent/specimen and functional outcomes. Existing encounter owner coordinates source-owned device/pathology/medication; family access and clinical authority remain restricted.

Record indication and authorized plan → capture procedure/session parameters and provenance → complications and human disposition → signed follow-up; no device or medication control.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-ENCOUNTER-b416529dc8248c0e"></a>
- **M08-CAP-ENCOUNTER-b416529dc8248c0e**: Provides healthcare professionals with secure access to patient information, telemedicine tools and clinical workflows.
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-b6f4ac1547df8402"></a>
- **M08-CAP-ENCOUNTER-b6f4ac1547df8402**: Doctor Dashboard
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-0b2aac579325edb5"></a>
- **M08-CAP-ENCOUNTER-0b2aac579325edb5**: Patient Search
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-3810773bf9c18db5"></a>
- **M08-CAP-ENCOUNTER-3810773bf9c18db5**: Medical Profile Viewer
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-cff8baf3e5c74161"></a>
- **M08-CAP-ENCOUNTER-cff8baf3e5c74161**: Diagnosis Management
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-89105ca49f8f3406"></a>
- **M08-CAP-ENCOUNTER-89105ca49f8f3406**: Prescription Management
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-8dbe8eba9e09249d"></a>
- **M08-CAP-ENCOUNTER-8dbe8eba9e09249d**: Medical Documents Viewer
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-71f790fdf94f9c10"></a>
- **M08-CAP-ENCOUNTER-71f790fdf94f9c10**: Laboratory Results
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-768a3fbc7bee7e4e"></a>
- **M08-CAP-ENCOUNTER-768a3fbc7bee7e4e**: Medical Imaging
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-338cd6a1ad180ca5"></a>
- **M08-CAP-ENCOUNTER-338cd6a1ad180ca5**: Telemedicine
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-b7393a458ee2e3cb"></a>
- **M08-CAP-ENCOUNTER-b7393a458ee2e3cb**: AI Clinical Assistant
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-5cb0822386dcb573"></a>
- **M08-CAP-ENCOUNTER-5cb0822386dcb573**: View Patient Profile
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-b9cf7619e94d0a2e"></a>
- **M08-CAP-ENCOUNTER-b9cf7619e94d0a2e**: Create Diagnosis
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-03f40dc8a7efc434"></a>
- **M08-CAP-ENCOUNTER-03f40dc8a7efc434**: Update Diagnosis
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-053106ad40c0f843"></a>
- **M08-CAP-ENCOUNTER-053106ad40c0f843**: Prescribe Medicines
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-2edab8a63d48031c"></a>
- **M08-CAP-ENCOUNTER-2edab8a63d48031c**: Upload Medical Documents
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-0de7b38eb203333f"></a>
- **M08-CAP-ENCOUNTER-0de7b38eb203333f**: Review Medical History
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-32d44e7cc9d9c727"></a>
- **M08-CAP-ENCOUNTER-32d44e7cc9d9c727**: Follow-up Planning
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-dd932794c8b95292"></a>
- **M08-CAP-ENCOUNTER-dd932794c8b95292**: Schedule Appointment
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-703b0499e934285d"></a>
- **M08-CAP-ENCOUNTER-703b0499e934285d**: Reschedule
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-7da56cd1d9eade2b"></a>
- **M08-CAP-ENCOUNTER-7da56cd1d9eade2b**: Cancel
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-10a193e1c613340b"></a>
- **M08-CAP-ENCOUNTER-10a193e1c613340b**: Calendar
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-0f7968e9409e0268"></a>
- **M08-CAP-ENCOUNTER-0f7968e9409e0268**: Availability
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-d85864f4e6c78790"></a>
- **M08-CAP-ENCOUNTER-d85864f4e6c78790**: Waiting Room
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-be52745e60a18fe4"></a>
- **M08-CAP-ENCOUNTER-be52745e60a18fe4**: Video Call
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-95dfcb59a08a730c"></a>
- **M08-CAP-ENCOUNTER-95dfcb59a08a730c**: Voice Call
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-624b8ad171ee97f8"></a>
- **M08-CAP-ENCOUNTER-624b8ad171ee97f8**: Chat
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-623b97ea6c3882e9"></a>
- **M08-CAP-ENCOUNTER-623b97ea6c3882e9**: Live Translation
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-f86ff6f8a77590d4"></a>
- **M08-CAP-ENCOUNTER-f86ff6f8a77590d4**: Screen Sharing
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-2c5acf64136926ba"></a>
- **M08-CAP-ENCOUNTER-2c5acf64136926ba**: File Sharing
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-344f32be4062ab65"></a>
- **M08-CAP-ENCOUNTER-344f32be4062ab65**: Session Notes
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-26935c103ea328ae"></a>
- **M08-CAP-ENCOUNTER-26935c103ea328ae**: Diagnosis Suggestions
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-a04e10f7c485dedf"></a>
- **M08-CAP-ENCOUNTER-a04e10f7c485dedf**: Drug Interaction Analysis
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-ba38e568f9a0c080"></a>
- **M08-CAP-ENCOUNTER-ba38e568f9a0c080**: Clinical Guidelines
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-cab08375f14a8e48"></a>
- **M08-CAP-ENCOUNTER-cab08375f14a8e48**: Medical Summaries
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-65732cf3ce14cb72"></a>
- **M08-CAP-ENCOUNTER-65732cf3ce14cb72**: Laboratory Interpretation
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-5f42ba8f024bbd01"></a>
- **M08-CAP-ENCOUNTER-5f42ba8f024bbd01**: Medical Translation
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-8338fdfd47f8f8b9"></a>
- **M08-CAP-ENCOUNTER-8338fdfd47f8f8b9**: Doctor Verification
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-c4e4e180d581adc4"></a>
- **M08-CAP-ENCOUNTER-c4e4e180d581adc4**: Digital Certificate
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-0b3c1c1c603ce3f7"></a>
- **M08-CAP-ENCOUNTER-0b3c1c1c603ce3f7**: Electronic Signature
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-fd2f05fb7464e1d2"></a>
- **M08-CAP-ENCOUNTER-fd2f05fb7464e1d2**: Two-Factor Authentication
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-d20a95b6b63719a7"></a>
- **M08-CAP-ENCOUNTER-d20a95b6b63719a7**: Audit Logs
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-8d02f72c1c0a1863"></a>
- **M08-CAP-ENCOUNTER-8d02f72c1c0a1863**: GDPR Compliance
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-c319f7ea6797eff9"></a>
- **M08-CAP-ENCOUNTER-c319f7ea6797eff9**: HIPAA Compliance
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-db59f8620101e9fd"></a>
- **M08-CAP-ENCOUNTER-db59f8620101e9fd**: ├── Users
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-41bd3320fb6ee128"></a>
- **M08-CAP-ENCOUNTER-41bd3320fb6ee128**: ├── Medical Profile
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-bd5acdeb2683509a"></a>
- **M08-CAP-ENCOUNTER-bd5acdeb2683509a**: ├── Diagnoses
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-ca0910ed36c02588"></a>
- **M08-CAP-ENCOUNTER-ca0910ed36c02588**: ├── Medicines
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-aa3e999983b79daa"></a>
- **M08-CAP-ENCOUNTER-aa3e999983b79daa**: ├── Prescriptions
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-d3290df0dc43733d"></a>
- **M08-CAP-ENCOUNTER-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-a7f2ddd3ac9459b5"></a>
- **M08-CAP-ENCOUNTER-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-93522f774f6d0bd5"></a>
- **M08-CAP-ENCOUNTER-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-225d721817a80b2f"></a>
- **M08-CAP-ENCOUNTER-225d721817a80b2f**: ├── Notifications
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-48a0e7b8fcbc590c"></a>
- **M08-CAP-ENCOUNTER-48a0e7b8fcbc590c**: ├── Audit Logs
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-37bfdffca1a32095"></a>
- **M08-CAP-ENCOUNTER-37bfdffca1a32095**: Future Features
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-278c89d5be707c23"></a>
- **M08-CAP-ENCOUNTER-278c89d5be707c23**: Voice Dictation
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-757fbb013e1ce208"></a>
- **M08-CAP-ENCOUNTER-757fbb013e1ce208**: AI Clinical Notes
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-2533a04ff43c84a5"></a>
- **M08-CAP-ENCOUNTER-2533a04ff43c84a5**: Electronic Health Records
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-e83390c12ac00c61"></a>
- **M08-CAP-ENCOUNTER-e83390c12ac00c61**: Hospital Integration
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-3f0543d6d2943b37"></a>
- **M08-CAP-ENCOUNTER-3f0543d6d2943b37**: National Health Systems
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-271ba7d1216b2ba8"></a>
- **M08-CAP-ENCOUNTER-271ba7d1216b2ba8**: Clinical Decision Support
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-af784f6f13860b44"></a>
- **M08-CAP-ENCOUNTER-af784f6f13860b44**: Multi-clinic Management
  Origin: original 44

<a id="M08-CAP-ENCOUNTER-2b0a56d0be770667"></a>
- **M08-CAP-ENCOUNTER-2b0a56d0be770667**: Stores pediatric cardiac surgical history.
  Origin: original 847

<a id="M08-CAP-ENCOUNTER-f53ba0c0214c2b5f"></a>
- **M08-CAP-ENCOUNTER-f53ba0c0214c2b5f**: Procedure
  Origin: original 847, original 1132, original 4233, original 4521, original 4795, original 4921

<a id="M08-CAP-ENCOUNTER-9292031266b0e334"></a>
- **M08-CAP-ENCOUNTER-9292031266b0e334**: Hospital
  Origin: original 847

<a id="M08-CAP-ENCOUNTER-4d2b58385f4ea306"></a>
- **M08-CAP-ENCOUNTER-4d2b58385f4ea306**: Surgeon
  Origin: original 847, original 1124

<a id="M08-CAP-ENCOUNTER-0d86946e629cc025"></a>
- **M08-CAP-ENCOUNTER-0d86946e629cc025**: Follow-up
  Origin: original 847, original 1136, original 4231, original 4233, original 4467, original 4521, original 4666, original 4772, original 4795, original 4841, original 4921, original 4995, original 5167

<a id="M08-CAP-ENCOUNTER-19be36efb5a7a8c2"></a>
- **M08-CAP-ENCOUNTER-19be36efb5a7a8c2**: Stores dialysis treatment history.
  Origin: original 927

<a id="M08-CAP-ENCOUNTER-8fca66af97a57c1f"></a>
- **M08-CAP-ENCOUNTER-8fca66af97a57c1f**: Hemodialysis
  Origin: original 927, original 4567

<a id="M08-CAP-ENCOUNTER-4d70d2b410a5a35e"></a>
- **M08-CAP-ENCOUNTER-4d70d2b410a5a35e**: Peritoneal Dialysis
  Origin: original 927, original 4567

<a id="M08-CAP-ENCOUNTER-7be7dd711df71636"></a>
- **M08-CAP-ENCOUNTER-7be7dd711df71636**: Treatment Sessions
  Origin: original 927, original 4690, original 4692

<a id="M08-CAP-ENCOUNTER-73dedf86b2ae9801"></a>
- **M08-CAP-ENCOUNTER-73dedf86b2ae9801**: Complications
  Origin: original 927, original 1131, original 4233, original 4467, original 4521, original 4567, original 4578, original 4634, original 4921, original 4946, original 4995, original 5106

<a id="M08-CAP-ENCOUNTER-4138f1bd49da3db8"></a>
- **M08-CAP-ENCOUNTER-4138f1bd49da3db8**: Stores endoscopic examinations.
  Origin: original 945

<a id="M08-CAP-ENCOUNTER-465cf176435d118d"></a>
- **M08-CAP-ENCOUNTER-465cf176435d118d**: Gastroscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M08-CAP-ENCOUNTER-4ea607a784624620"></a>
- **M08-CAP-ENCOUNTER-4ea607a784624620**: Colonoscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M08-CAP-ENCOUNTER-1ed929d4e8d78094"></a>
- **M08-CAP-ENCOUNTER-1ed929d4e8d78094**: Capsule Endoscopy
  Origin: original 945, original 3169, original 3289, original 3449

<a id="M08-CAP-ENCOUNTER-3f46ddfc482453ec"></a>
- **M08-CAP-ENCOUNTER-3f46ddfc482453ec**: Physician Reports
  Origin: original 945

<a id="M08-CAP-ENCOUNTER-2adc656bdef2ff6d"></a>
- **M08-CAP-ENCOUNTER-2adc656bdef2ff6d**: Stores bone marrow examinations.
  Origin: original 968

<a id="M08-CAP-ENCOUNTER-c408598d12f8820f"></a>
- **M08-CAP-ENCOUNTER-c408598d12f8820f**: Aspirate
  Origin: original 968, original 3249

<a id="M08-CAP-ENCOUNTER-6dfc1fd557943d0f"></a>
- **M08-CAP-ENCOUNTER-6dfc1fd557943d0f**: Biopsy
  Origin: original 968, original 3249, original 4173, original 4634, original 5131

<a id="M08-CAP-ENCOUNTER-3e81e3f4758a16ae"></a>
- **M08-CAP-ENCOUNTER-3e81e3f4758a16ae**: Cytology
  Origin: original 968, original 4467

<a id="M08-CAP-ENCOUNTER-32ffc096d55d159d"></a>
- **M08-CAP-ENCOUNTER-32ffc096d55d159d**: Histology
  Origin: original 968

<a id="M08-CAP-ENCOUNTER-28ac78f971a57ec5"></a>
- **M08-CAP-ENCOUNTER-28ac78f971a57ec5**: Stores all pediatric surgical procedures.
  Origin: original 1124

<a id="M08-CAP-ENCOUNTER-38e3e8aaddacff66"></a>
- **M08-CAP-ENCOUNTER-38e3e8aaddacff66**: Procedure Type
  Origin: original 1124, original 4995, original 5131

<a id="M08-CAP-ENCOUNTER-703ea7dbc5d7a043"></a>
- **M08-CAP-ENCOUNTER-703ea7dbc5d7a043**: Date
  Origin: original 1124

<a id="M08-CAP-ENCOUNTER-9029a8bbdb8a6553"></a>
- **M08-CAP-ENCOUNTER-9029a8bbdb8a6553**: Outcome
  Origin: original 1124

<a id="M08-CAP-ENCOUNTER-3e9cd1eb97f75557"></a>
- **M08-CAP-ENCOUNTER-3e9cd1eb97f75557**: Tracks emergency pediatric trauma surgery.
  Origin: original 1128

<a id="M08-CAP-ENCOUNTER-5ca5768f5c27201a"></a>
- **M08-CAP-ENCOUNTER-5ca5768f5c27201a**: Injury
  Origin: original 1128

<a id="M08-CAP-ENCOUNTER-cecb5a82d5862114"></a>
- **M08-CAP-ENCOUNTER-cecb5a82d5862114**: Operation
  Origin: original 1128

<a id="M08-CAP-ENCOUNTER-4977eafd100a8a50"></a>
- **M08-CAP-ENCOUNTER-4977eafd100a8a50**: ICU
  Origin: original 1128

<a id="M08-CAP-ENCOUNTER-e9426dd272d9aa70"></a>
- **M08-CAP-ENCOUNTER-e9426dd272d9aa70**: Rehabilitation
  Origin: original 1128, original 4634, original 4666, original 4691, original 4692, original 5111, original 5122, original 5131, original 5167

<a id="M08-CAP-ENCOUNTER-59781fce0b6450de"></a>
- **M08-CAP-ENCOUNTER-59781fce0b6450de**: Tracks postoperative ICU patients.
  Origin: original 1131

<a id="M08-CAP-ENCOUNTER-d77f0fba9e1c058a"></a>
- **M08-CAP-ENCOUNTER-d77f0fba9e1c058a**: Ventilation
  Origin: original 1131

<a id="M08-CAP-ENCOUNTER-f5aeff23cb9d4fbe"></a>
- **M08-CAP-ENCOUNTER-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 1131, original 4795

<a id="M08-CAP-ENCOUNTER-5e8c51cc3501e267"></a>
- **M08-CAP-ENCOUNTER-5e8c51cc3501e267**: Outcomes
  Origin: original 1131

<a id="M08-CAP-ENCOUNTER-4ba5dd6bc8d7475e"></a>
- **M08-CAP-ENCOUNTER-4ba5dd6bc8d7475e**: Tracks laparoscopic and thoracoscopic procedures.
  Origin: original 1132

<a id="M08-CAP-ENCOUNTER-bc69691df2ee1ace"></a>
- **M08-CAP-ENCOUNTER-bc69691df2ee1ace**: Equipment
  Origin: original 1132

<a id="M08-CAP-ENCOUNTER-2ead501f1441e7f1"></a>
- **M08-CAP-ENCOUNTER-2ead501f1441e7f1**: Recovery
  Origin: original 1132, original 4233, original 4795

<a id="M08-CAP-ENCOUNTER-5635c8fd45cff13d"></a>
- **M08-CAP-ENCOUNTER-5635c8fd45cff13d**: Plans postoperative rehabilitation.
  Origin: original 1136

<a id="M08-CAP-ENCOUNTER-aa433304c304c24c"></a>
- **M08-CAP-ENCOUNTER-aa433304c304c24c**: Physiotherapy
  Origin: original 1136, original 4669, original 4720, original 5044, original 5122

<a id="M08-CAP-ENCOUNTER-5768adaf9507e83f"></a>
- **M08-CAP-ENCOUNTER-5768adaf9507e83f**: Nutrition
  Origin: original 1136, original 4567, original 4578, original 4579, original 4692

<a id="M08-CAP-ENCOUNTER-ee2f7ffb0a082fdd"></a>
- **M08-CAP-ENCOUNTER-ee2f7ffb0a082fdd**: Activity
  Origin: original 1136

<a id="M08-CAP-ENCOUNTER-f0b9dc3a7c23d7e2"></a>
- **M08-CAP-ENCOUNTER-f0b9dc3a7c23d7e2**: Supports pediatric anesthesia.
  Origin: original 2381

<a id="M08-CAP-ENCOUNTER-f468be0316491865"></a>
- **M08-CAP-ENCOUNTER-f468be0316491865**: Risk Assessment
  Origin: original 2381

<a id="M08-CAP-ENCOUNTER-2c8b7b756d493c42"></a>
- **M08-CAP-ENCOUNTER-2c8b7b756d493c42**: Airway Management
  Origin: original 2381

<a id="M08-CAP-ENCOUNTER-749f3fed37116ff9"></a>
- **M08-CAP-ENCOUNTER-749f3fed37116ff9**: Recovery Monitoring
  Origin: original 2381

<a id="M08-CAP-ENCOUNTER-cd275e97a1679f3e"></a>
- **M08-CAP-ENCOUNTER-cd275e97a1679f3e**: Supports perioperative management.
  Origin: original 3051

<a id="M08-CAP-ENCOUNTER-54ba424b767673ee"></a>
- **M08-CAP-ENCOUNTER-54ba424b767673ee**: Preoperative Assessment
  Origin: original 3051, original 3669, original 4072, original 4233, original 4666, original 4772, original 4921, original 4946

<a id="M08-CAP-ENCOUNTER-25c06eebf05a9dd4"></a>
- **M08-CAP-ENCOUNTER-25c06eebf05a9dd4**: Risk Stratification
  Origin: original 3051

<a id="M08-CAP-ENCOUNTER-cf36ab5a2ca3d952"></a>
- **M08-CAP-ENCOUNTER-cf36ab5a2ca3d952**: Intraoperative Monitoring
  Origin: original 3051, original 3715

<a id="M08-CAP-ENCOUNTER-8144b1292bff6f0a"></a>
- **M08-CAP-ENCOUNTER-8144b1292bff6f0a**: Postoperative Recovery
  Origin: original 3051

<a id="M08-CAP-ENCOUNTER-42e4a0444524d063"></a>
- **M08-CAP-ENCOUNTER-42e4a0444524d063**: Enhanced Recovery Protocols
  Origin: original 3051

<a id="M08-CAP-ENCOUNTER-63990fa9e9d2169a"></a>
- **M08-CAP-ENCOUNTER-63990fa9e9d2169a**: Supports pediatric cardiac surgery.
  Origin: original 3067

<a id="M08-CAP-ENCOUNTER-e21351a7ecc4565c"></a>
- **M08-CAP-ENCOUNTER-e21351a7ecc4565c**: Corrective Surgery
  Origin: original 3067

<a id="M08-CAP-ENCOUNTER-16232110e19372fa"></a>
- **M08-CAP-ENCOUNTER-16232110e19372fa**: Palliative Surgery
  Origin: original 3067

<a id="M08-CAP-ENCOUNTER-db9314a2c5c56a2c"></a>
- **M08-CAP-ENCOUNTER-db9314a2c5c56a2c**: Valve Repair
  Origin: original 3067

<a id="M08-CAP-ENCOUNTER-32b401858d594ad9"></a>
- **M08-CAP-ENCOUNTER-32b401858d594ad9**: Great Vessel Reconstruction
  Origin: original 3067

<a id="M08-CAP-ENCOUNTER-6b013809774c93b3"></a>
- **M08-CAP-ENCOUNTER-6b013809774c93b3**: Postoperative Monitoring
  Origin: original 3067, original 3669, original 4072, original 4772, original 4921

<a id="M08-CAP-ENCOUNTER-01ab3584aaa3b5c7"></a>
- **M08-CAP-ENCOUNTER-01ab3584aaa3b5c7**: Maintains pediatric endoscopy data.
  Origin: original 3169

<a id="M08-CAP-ENCOUNTER-275cbc669a610228"></a>
- **M08-CAP-ENCOUNTER-275cbc669a610228**: Endoscopic Ultrasound
  Origin: original 3169

<a id="M08-CAP-ENCOUNTER-23cb5b848c6347ef"></a>
- **M08-CAP-ENCOUNTER-23cb5b848c6347ef**: AI Image Analysis
  Origin: original 3169

<a id="M08-CAP-ENCOUNTER-af9986a90033933a"></a>
- **M08-CAP-ENCOUNTER-af9986a90033933a**: Maintains pediatric bronchoscopy records.
  Origin: original 3189

<a id="M08-CAP-ENCOUNTER-92fc97f3239f96a2"></a>
- **M08-CAP-ENCOUNTER-92fc97f3239f96a2**: Diagnostic Bronchoscopy
  Origin: original 3189, original 3370

<a id="M08-CAP-ENCOUNTER-acfea8ff5875b3e3"></a>
- **M08-CAP-ENCOUNTER-acfea8ff5875b3e3**: Therapeutic Bronchoscopy
  Origin: original 3189, original 3370

<a id="M08-CAP-ENCOUNTER-b92bf1532f8929ec"></a>
- **M08-CAP-ENCOUNTER-b92bf1532f8929ec**: Airway Evaluation
  Origin: original 3189

<a id="M08-CAP-ENCOUNTER-d22f7c73e9c71467"></a>
- **M08-CAP-ENCOUNTER-d22f7c73e9c71467**: Foreign Body Removal
  Origin: original 3189

<a id="M08-CAP-ENCOUNTER-c076453c94961546"></a>
- **M08-CAP-ENCOUNTER-c076453c94961546**: Digital Video Archive
  Origin: original 3189

<a id="M08-CAP-ENCOUNTER-1e4bfa87a4f80e00"></a>
- **M08-CAP-ENCOUNTER-1e4bfa87a4f80e00**: Maintains bone marrow diagnostics.
  Origin: original 3249

<a id="M08-CAP-ENCOUNTER-8fc49378bfabe721"></a>
- **M08-CAP-ENCOUNTER-8fc49378bfabe721**: Cytogenetics
  Origin: original 3249, original 4173, original 4992

<a id="M08-CAP-ENCOUNTER-5895069c924c03dd"></a>
- **M08-CAP-ENCOUNTER-5895069c924c03dd**: Flow Cytometry
  Origin: original 3249, original 4173, original 4992

<a id="M08-CAP-ENCOUNTER-20a67db2d0ea13cf"></a>
- **M08-CAP-ENCOUNTER-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 3249, original 4173, original 4634, original 4992, original 5111

<a id="M08-CAP-ENCOUNTER-d5c9e201638bd8a4"></a>
- **M08-CAP-ENCOUNTER-d5c9e201638bd8a4**: Maintains pediatric endoscopy records.
  Origin: original 3289, original 3449

<a id="M08-CAP-ENCOUNTER-9dd410cc247ce7f0"></a>
- **M08-CAP-ENCOUNTER-9dd410cc247ce7f0**: Therapeutic Procedures
  Origin: original 3289, original 3449

<a id="M08-CAP-ENCOUNTER-8f8d1688418f5c65"></a>
- **M08-CAP-ENCOUNTER-8f8d1688418f5c65**: Digital Archive
  Origin: original 3289, original 3370

<a id="M08-CAP-ENCOUNTER-3e46d6032b0ffc26"></a>
- **M08-CAP-ENCOUNTER-3e46d6032b0ffc26**: Maintains bronchoscopy records.
  Origin: original 3370

<a id="M08-CAP-ENCOUNTER-38c245db4fa56107"></a>
- **M08-CAP-ENCOUNTER-38c245db4fa56107**: Bronchoalveolar Lavage
  Origin: original 3370

<a id="M08-CAP-ENCOUNTER-02d1afe5752c26d3"></a>
- **M08-CAP-ENCOUNTER-02d1afe5752c26d3**: AI-assisted Image Review
  Origin: original 3449

<a id="M08-CAP-ENCOUNTER-b83b95fc85bc49b1"></a>
- **M08-CAP-ENCOUNTER-b83b95fc85bc49b1**: Supports pediatric cardiac surgery pathways.
  Origin: original 3669

<a id="M08-CAP-ENCOUNTER-cd0a0f0f29929499"></a>
- **M08-CAP-ENCOUNTER-cd0a0f0f29929499**: Surgical Planning
  Origin: original 3669, original 4072, original 4233, original 4666

<a id="M08-CAP-ENCOUNTER-fe96e27084f3fc21"></a>
- **M08-CAP-ENCOUNTER-fe96e27084f3fc21**: ICU Follow-up
  Origin: original 3669

<a id="M08-CAP-ENCOUNTER-96c457a9cf29c342"></a>
- **M08-CAP-ENCOUNTER-96c457a9cf29c342**: Long-term Outcomes
  Origin: original 3669, original 4232, original 4669

<a id="M08-CAP-ENCOUNTER-07a33e922522fad3"></a>
- **M08-CAP-ENCOUNTER-07a33e922522fad3**: Integrates pediatric anesthesia workflows.
  Origin: original 3715

<a id="M08-CAP-ENCOUNTER-06ad38392587ebbf"></a>
- **M08-CAP-ENCOUNTER-06ad38392587ebbf**: Pre-anesthesia Assessment
  Origin: original 3715

<a id="M08-CAP-ENCOUNTER-459ee2e8b64719c1"></a>
- **M08-CAP-ENCOUNTER-459ee2e8b64719c1**: Medication Planning
  Origin: original 3715

<a id="M08-CAP-ENCOUNTER-de3e67d53876bddb"></a>
- **M08-CAP-ENCOUNTER-de3e67d53876bddb**: Recovery Tracking
  Origin: original 3715

<a id="M08-CAP-ENCOUNTER-cb3f44db33fde2bb"></a>
- **M08-CAP-ENCOUNTER-cb3f44db33fde2bb**: Risk Prediction
  Origin: original 3715

<a id="M08-CAP-ENCOUNTER-2c3a35b774d58aa7"></a>
- **M08-CAP-ENCOUNTER-2c3a35b774d58aa7**: Coordinates evidence-based psychological interventions.
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-2dcab3c57e09d41c"></a>
- **M08-CAP-ENCOUNTER-2dcab3c57e09d41c**: CBT
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-e52bd10c68433c2f"></a>
- **M08-CAP-ENCOUNTER-e52bd10c68433c2f**: Family Therapy
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-0f2ab1510d35d16a"></a>
- **M08-CAP-ENCOUNTER-0f2ab1510d35d16a**: Behavioral Therapy
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-fc042171e1e6e3cf"></a>
- **M08-CAP-ENCOUNTER-fc042171e1e6e3cf**: Supportive Therapy
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-911706ff98a550e4"></a>
- **M08-CAP-ENCOUNTER-911706ff98a550e4**: Therapy Goals
  Origin: original 3994, original 4690, original 4691, original 4692

<a id="M08-CAP-ENCOUNTER-f31cbb52e4ba596c"></a>
- **M08-CAP-ENCOUNTER-f31cbb52e4ba596c**: Progress Tracking
  Origin: original 3994, original 4669, original 4690, original 4691, original 4692, original 4720

<a id="M08-CAP-ENCOUNTER-bd6734c26259c6d8"></a>
- **M08-CAP-ENCOUNTER-bd6734c26259c6d8**: Referral Coordination
  Origin: original 3994

<a id="M08-CAP-ENCOUNTER-4e907a8641570c14"></a>
- **M08-CAP-ENCOUNTER-4e907a8641570c14**: Supports pediatric cardiac surgery workflows.
  Origin: original 4072

<a id="M08-CAP-ENCOUNTER-fea915a17f2566c5"></a>
- **M08-CAP-ENCOUNTER-fea915a17f2566c5**: Procedure Documentation
  Origin: original 4072, original 4666, original 4772, original 4946

<a id="M08-CAP-ENCOUNTER-ff61d97cd7cd8eeb"></a>
- **M08-CAP-ENCOUNTER-ff61d97cd7cd8eeb**: Complication Tracking
  Origin: original 4072, original 4666, original 4772

<a id="M08-CAP-ENCOUNTER-6689882d187ac23b"></a>
- **M08-CAP-ENCOUNTER-6689882d187ac23b**: Imaging Follow-up
  Origin: original 4072

<a id="M08-CAP-ENCOUNTER-202f6a2a98b9f441"></a>
- **M08-CAP-ENCOUNTER-202f6a2a98b9f441**: Longitudinal Outcomes
  Origin: original 4072

<a id="M08-CAP-ENCOUNTER-49ac3bab8d5a8426"></a>
- **M08-CAP-ENCOUNTER-49ac3bab8d5a8426**: Integrates bone marrow diagnostic workflows.
  Origin: original 4173

<a id="M08-CAP-ENCOUNTER-e04355a137034dc1"></a>
- **M08-CAP-ENCOUNTER-e04355a137034dc1**: Aspiration
  Origin: original 4173, original 4992

<a id="M08-CAP-ENCOUNTER-dabea35d36a52d42"></a>
- **M08-CAP-ENCOUNTER-dabea35d36a52d42**: Morphology
  Origin: original 4173, original 4992

<a id="M08-CAP-ENCOUNTER-4f769d3011ff4afe"></a>
- **M08-CAP-ENCOUNTER-4f769d3011ff4afe**: Pathology Reports
  Origin: original 4173

<a id="M08-CAP-ENCOUNTER-7fa79dce2b8d7e98"></a>
- **M08-CAP-ENCOUNTER-7fa79dce2b8d7e98**: Longitudinal Comparison
  Origin: original 4173

<a id="M08-CAP-ENCOUNTER-e9faaf760d3dbe86"></a>
- **M08-CAP-ENCOUNTER-e9faaf760d3dbe86**: Supports pediatric radiation oncology.
  Origin: original 4231

<a id="M08-CAP-ENCOUNTER-57b970264c415ddd"></a>
- **M08-CAP-ENCOUNTER-57b970264c415ddd**: Indication
  Origin: original 4231, original 4467, original 4521

<a id="M08-CAP-ENCOUNTER-7c7fb2adca62a628"></a>
- **M08-CAP-ENCOUNTER-7c7fb2adca62a628**: Treatment Planning
  Origin: original 4231

<a id="M08-CAP-ENCOUNTER-c7039c5f9964fbb0"></a>
- **M08-CAP-ENCOUNTER-c7039c5f9964fbb0**: Target Volumes
  Origin: original 4231

<a id="M08-CAP-ENCOUNTER-554b0253c681db77"></a>
- **M08-CAP-ENCOUNTER-554b0253c681db77**: Treatment Course
  Origin: original 4231, original 4232, original 5133

<a id="M08-CAP-ENCOUNTER-6253339b00dd8054"></a>
- **M08-CAP-ENCOUNTER-6253339b00dd8054**: Dose Records
  Origin: original 4231

<a id="M08-CAP-ENCOUNTER-f402916b06f0dbf7"></a>
- **M08-CAP-ENCOUNTER-f402916b06f0dbf7**: Organ-at-risk Data
  Origin: original 4231

<a id="M08-CAP-ENCOUNTER-d05d6257a6dc9e74"></a>
- **M08-CAP-ENCOUNTER-d05d6257a6dc9e74**: Toxicity
  Origin: original 4231, original 4232

<a id="M08-CAP-ENCOUNTER-2eaf7620cd44f084"></a>
- **M08-CAP-ENCOUNTER-2eaf7620cd44f084**: Supports pediatric proton therapy workflows.
  Origin: original 4232

<a id="M08-CAP-ENCOUNTER-203f84f7ff932be5"></a>
- **M08-CAP-ENCOUNTER-203f84f7ff932be5**: Referral
  Origin: original 4232

<a id="M08-CAP-ENCOUNTER-e4aecc75bd1a2bc1"></a>
- **M08-CAP-ENCOUNTER-e4aecc75bd1a2bc1**: Planning Data
  Origin: original 4232

<a id="M08-CAP-ENCOUNTER-04570f795234679f"></a>
- **M08-CAP-ENCOUNTER-04570f795234679f**: Dose Documentation
  Origin: original 4232

<a id="M08-CAP-ENCOUNTER-a3241cf77d991407"></a>
- **M08-CAP-ENCOUNTER-a3241cf77d991407**: Imaging
  Origin: original 4232, original 4233, original 4634, original 4666, original 4772, original 4921, original 4946, original 5111

<a id="M08-CAP-ENCOUNTER-18825c4db89a8ef5"></a>
- **M08-CAP-ENCOUNTER-18825c4db89a8ef5**: Supports surgical oncology workflows.
  Origin: original 4233

<a id="M08-CAP-ENCOUNTER-2d2ffbcbba25564e"></a>
- **M08-CAP-ENCOUNTER-2d2ffbcbba25564e**: Pathology
  Origin: original 4233, original 4467, original 4634, original 4921, original 4946, original 4992, original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-4b762f3e0122d9d6"></a>
- **M08-CAP-ENCOUNTER-4b762f3e0122d9d6**: Margins
  Origin: original 4233

<a id="M08-CAP-ENCOUNTER-3d59f840b8e2a095"></a>
- **M08-CAP-ENCOUNTER-3d59f840b8e2a095**: Supports pediatric bronchoscopy workflows.
  Origin: original 4467

<a id="M08-CAP-ENCOUNTER-f01a0c3644ebaf7a"></a>
- **M08-CAP-ENCOUNTER-f01a0c3644ebaf7a**: Records
  Origin: original 4467, original 4521

<a id="M08-CAP-ENCOUNTER-9a7cc269612e850a"></a>
- **M08-CAP-ENCOUNTER-9a7cc269612e850a**: Airway Findings
  Origin: original 4467

<a id="M08-CAP-ENCOUNTER-228b18d13e8b34f1"></a>
- **M08-CAP-ENCOUNTER-228b18d13e8b34f1**: Procedures
  Origin: original 4467

<a id="M08-CAP-ENCOUNTER-2ace6b7563626b65"></a>
- **M08-CAP-ENCOUNTER-2ace6b7563626b65**: Samples
  Origin: original 4467

<a id="M08-CAP-ENCOUNTER-d130447d684396f9"></a>
- **M08-CAP-ENCOUNTER-d130447d684396f9**: Microbiology
  Origin: original 4467

<a id="M08-CAP-ENCOUNTER-8d7c6c153e3a2a02"></a>
- **M08-CAP-ENCOUNTER-8d7c6c153e3a2a02**: Supports pediatric diagnostic and therapeutic endoscopy.
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-a72cc6a2952a242d"></a>
- **M08-CAP-ENCOUNTER-a72cc6a2952a242d**: Anatomical Findings
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-6fdf6fb507eec070"></a>
- **M08-CAP-ENCOUNTER-6fdf6fb507eec070**: Images
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-7fa55285210d812f"></a>
- **M08-CAP-ENCOUNTER-7fa55285210d812f**: Biopsies
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-1d56760e632bb2d6"></a>
- **M08-CAP-ENCOUNTER-1d56760e632bb2d6**: Intervention
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-13f1212263f93193"></a>
- **M08-CAP-ENCOUNTER-13f1212263f93193**: Sedation Context
  Origin: original 4521

<a id="M08-CAP-ENCOUNTER-f3cc2660eae7dafa"></a>
- **M08-CAP-ENCOUNTER-f3cc2660eae7dafa**: Provide comprehensive management of pediatric renal replacement therapy.
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-44f61ea3b06a325e"></a>
- **M08-CAP-ENCOUNTER-44f61ea3b06a325e**: Continuous Renal Replacement Therapy
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-1d7029ea9ec4c19d"></a>
- **M08-CAP-ENCOUNTER-1d7029ea9ec4c19d**: Dialysis Prescription
  Origin: original 4567, original 4578

<a id="M08-CAP-ENCOUNTER-d13661cce509c6c0"></a>
- **M08-CAP-ENCOUNTER-d13661cce509c6c0**: Session Registry
  Origin: original 4567, original 4841, original 5167

<a id="M08-CAP-ENCOUNTER-8d1b0669274f2c54"></a>
- **M08-CAP-ENCOUNTER-8d1b0669274f2c54**: Vascular Access
  Origin: original 4567, original 4578, original 4579, original 4995

<a id="M08-CAP-ENCOUNTER-ba4403dced82af76"></a>
- **M08-CAP-ENCOUNTER-ba4403dced82af76**: Peritoneal Access
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-0dd6b5e026af56a6"></a>
- **M08-CAP-ENCOUNTER-0dd6b5e026af56a6**: Fluid Management
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-ec1c1b0919513410"></a>
- **M08-CAP-ENCOUNTER-ec1c1b0919513410**: Dry Weight
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-9da77df714be61fe"></a>
- **M08-CAP-ENCOUNTER-9da77df714be61fe**: Blood Pressure
  Origin: original 4567, original 4577, original 4578

<a id="M08-CAP-ENCOUNTER-e1c2a513ace73bfc"></a>
- **M08-CAP-ENCOUNTER-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4567, original 4578

<a id="M08-CAP-ENCOUNTER-97437969d9beb815"></a>
- **M08-CAP-ENCOUNTER-97437969d9beb815**: Dialysis Adequacy
  Origin: original 4567, original 4578

<a id="M08-CAP-ENCOUNTER-3cfa39200ce0ea10"></a>
- **M08-CAP-ENCOUNTER-3cfa39200ce0ea10**: Medication
  Origin: original 4567, original 4579, original 4772, original 4795, original 4921, original 4995

<a id="M08-CAP-ENCOUNTER-9d60d099367da84d"></a>
- **M08-CAP-ENCOUNTER-9d60d099367da84d**: Infection
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-039bd9a2eb935782"></a>
- **M08-CAP-ENCOUNTER-039bd9a2eb935782**: Device Integration
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-f4fca1c375817430"></a>
- **M08-CAP-ENCOUNTER-f4fca1c375817430**: Home Dialysis
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-802b8c1b9cf43ef1"></a>
- **M08-CAP-ENCOUNTER-802b8c1b9cf43ef1**: Quality Indicators
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-1a67354f9b95dc03"></a>
- **M08-CAP-ENCOUNTER-1a67354f9b95dc03**: Operational Functions:
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-0bdf7d46bf3b9b32"></a>
- **M08-CAP-ENCOUNTER-0bdf7d46bf3b9b32**: Treatment Scheduling
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-57cb10961ef97cba"></a>
- **M08-CAP-ENCOUNTER-57cb10961ef97cba**: Session Documentation
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-aa0f535ea0f205ba"></a>
- **M08-CAP-ENCOUNTER-aa0f535ea0f205ba**: Equipment Tracking
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-42c69a144c647dff"></a>
- **M08-CAP-ENCOUNTER-42c69a144c647dff**: Consumable Context
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-8581a92f19c1b4ee"></a>
- **M08-CAP-ENCOUNTER-8581a92f19c1b4ee**: Access Surveillance
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-0cc13e424e926f1c"></a>
- **M08-CAP-ENCOUNTER-0cc13e424e926f1c**: Clinical Escalation
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-ffe21dd7fb1692c8"></a>
- **M08-CAP-ENCOUNTER-ffe21dd7fb1692c8**: Multidisciplinary Review
  Origin: original 4567, original 5120

<a id="M08-CAP-ENCOUNTER-be60185891648e82"></a>
- **M08-CAP-ENCOUNTER-be60185891648e82**: Patient/Guardian Functions:
  Origin: original 4567, original 4577, original 4669, original 4690

<a id="M08-CAP-ENCOUNTER-d4af315691cfe9fe"></a>
- **M08-CAP-ENCOUNTER-d4af315691cfe9fe**: Home Treatment Records
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-a19f6e049660f673"></a>
- **M08-CAP-ENCOUNTER-a19f6e049660f673**: Weight Tracking
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-8ea50d2707dd1600"></a>
- **M08-CAP-ENCOUNTER-8ea50d2707dd1600**: Symptoms
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-efd4d6ad415728f0"></a>
- **M08-CAP-ENCOUNTER-efd4d6ad415728f0**: Treatment Education
  Origin: original 4567

<a id="M08-CAP-ENCOUNTER-bc9dca210114a187"></a>
- **M08-CAP-ENCOUNTER-bc9dca210114a187**: Support children receiving chronic peritoneal dialysis at home and provide structured communication between families and clinical teams.
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-f344ebe4b377d2d7"></a>
- **M08-CAP-ENCOUNTER-f344ebe4b377d2d7**: Peritoneal Dialysis Prescription
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-3d6dd0f86c652404"></a>
- **M08-CAP-ENCOUNTER-3d6dd0f86c652404**: Automated Peritoneal Dialysis
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-43abbf3c4393caf3"></a>
- **M08-CAP-ENCOUNTER-43abbf3c4393caf3**: Manual Exchange Documentation
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-08d4a89ed0d03e81"></a>
- **M08-CAP-ENCOUNTER-08d4a89ed0d03e81**: Treatment Schedule
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-268aba70ef4ddd37"></a>
- **M08-CAP-ENCOUNTER-268aba70ef4ddd37**: Dialysis Solution
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-4265ef7fd3981d5a"></a>
- **M08-CAP-ENCOUNTER-4265ef7fd3981d5a**: Fill Volume
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-4ed8be9f0ba93c70"></a>
- **M08-CAP-ENCOUNTER-4ed8be9f0ba93c70**: Dwell Time
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-490c47049eb0cf2a"></a>
- **M08-CAP-ENCOUNTER-490c47049eb0cf2a**: Ultrafiltration
  Origin: original 4577, original 4578, original 4579

<a id="M08-CAP-ENCOUNTER-cdcecae88521194c"></a>
- **M08-CAP-ENCOUNTER-cdcecae88521194c**: Weight
  Origin: original 4577, original 4578

<a id="M08-CAP-ENCOUNTER-36742ae9f1aca295"></a>
- **M08-CAP-ENCOUNTER-36742ae9f1aca295**: Fluid Balance
  Origin: original 4577, original 4579

<a id="M08-CAP-ENCOUNTER-95569700f44252a5"></a>
- **M08-CAP-ENCOUNTER-95569700f44252a5**: Catheter Status
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-81d9e3bdd9244d74"></a>
- **M08-CAP-ENCOUNTER-81d9e3bdd9244d74**: Exit-site Monitoring
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-73dc85c50f3881fd"></a>
- **M08-CAP-ENCOUNTER-73dc85c50f3881fd**: Treatment Adherence
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-04c92e873dd0a95b"></a>
- **M08-CAP-ENCOUNTER-04c92e873dd0a95b**: Device Data Integration
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-635bc9bcb87eef61"></a>
- **M08-CAP-ENCOUNTER-635bc9bcb87eef61**: Home Treatment Logs
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-422c8f1aac36c24a"></a>
- **M08-CAP-ENCOUNTER-422c8f1aac36c24a**: Complication Functions:
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-dc8c3ba9b4d5f1f4"></a>
- **M08-CAP-ENCOUNTER-dc8c3ba9b4d5f1f4**: Peritonitis Registry
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-9f3d639800517ba6"></a>
- **M08-CAP-ENCOUNTER-9f3d639800517ba6**: Exit-site Infection
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-6b77e1631ac47d3f"></a>
- **M08-CAP-ENCOUNTER-6b77e1631ac47d3f**: Drainage Problems
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-a0909ba161226e5f"></a>
- **M08-CAP-ENCOUNTER-a0909ba161226e5f**: Catheter Dysfunction
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-e9bfbcc317ba1d66"></a>
- **M08-CAP-ENCOUNTER-e9bfbcc317ba1d66**: Fluid Overload
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-c9031759e80c10ff"></a>
- **M08-CAP-ENCOUNTER-c9031759e80c10ff**: Treatment Interruption
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-4f886750f725ff5d"></a>
- **M08-CAP-ENCOUNTER-4f886750f725ff5d**: Home Dashboard
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-4192fd3a5a572125"></a>
- **M08-CAP-ENCOUNTER-4192fd3a5a572125**: Treatment Checklist
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-5ba889b1637fb49c"></a>
- **M08-CAP-ENCOUNTER-5ba889b1637fb49c**: Supply Tracking
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-f2f11f27eb060b29"></a>
- **M08-CAP-ENCOUNTER-f2f11f27eb060b29**: Symptom Reporting
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-0f49b0b6b64e2848"></a>
- **M08-CAP-ENCOUNTER-0f49b0b6b64e2848**: Clinician-approved Educational Content
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-fb9e03223e0ba744"></a>
- **M08-CAP-ENCOUNTER-fb9e03223e0ba744**: Emergency Instructions
  Origin: original 4577

<a id="M08-CAP-ENCOUNTER-7e80e5eca9f64ca1"></a>
- **M08-CAP-ENCOUNTER-7e80e5eca9f64ca1**: Coordinate pediatric hemodialysis sessions, clinical parameters, equipment and longitudinal outcomes.
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-3275c4ce77faab22"></a>
- **M08-CAP-ENCOUNTER-3275c4ce77faab22**: Session Scheduling
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-b900039c744aef1b"></a>
- **M08-CAP-ENCOUNTER-b900039c744aef1b**: Pre-Dialysis Assessment
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-1d4747400dffe7b7"></a>
- **M08-CAP-ENCOUNTER-1d4747400dffe7b7**: Post-Dialysis Assessment
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-98289066ba33a3f8"></a>
- **M08-CAP-ENCOUNTER-98289066ba33a3f8**: Target Weight
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-d617a864db6b5224"></a>
- **M08-CAP-ENCOUNTER-d617a864db6b5224**: Blood Flow
  Origin: original 4578, original 4579

<a id="M08-CAP-ENCOUNTER-e6fef2f90a9d34b6"></a>
- **M08-CAP-ENCOUNTER-e6fef2f90a9d34b6**: Dialysate Parameters
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-ffba8bb241dd0413"></a>
- **M08-CAP-ENCOUNTER-ffba8bb241dd0413**: Anticoagulation
  Origin: original 4578, original 4579

<a id="M08-CAP-ENCOUNTER-ba0e4c581595a452"></a>
- **M08-CAP-ENCOUNTER-ba0e4c581595a452**: Medication Administration
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-63915170859e6e45"></a>
- **M08-CAP-ENCOUNTER-63915170859e6e45**: Session Events
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-d1288b3fbe4a6aa6"></a>
- **M08-CAP-ENCOUNTER-d1288b3fbe4a6aa6**: Treatment Completion
  Origin: original 4578, original 5133, original 5167

<a id="M08-CAP-ENCOUNTER-52f776d981da6c60"></a>
- **M08-CAP-ENCOUNTER-52f776d981da6c60**: Longitudinal Intelligence:
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-f0944fe699fe0089"></a>
- **M08-CAP-ENCOUNTER-f0944fe699fe0089**: Adequacy Trends
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-c44651f199a98c12"></a>
- **M08-CAP-ENCOUNTER-c44651f199a98c12**: Blood Pressure Trends
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-1f2f91170c530a3f"></a>
- **M08-CAP-ENCOUNTER-1f2f91170c530a3f**: Weight Trends
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-e3713f12d64c6615"></a>
- **M08-CAP-ENCOUNTER-e3713f12d64c6615**: Access Performance
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-ab3febd198e62322"></a>
- **M08-CAP-ENCOUNTER-ab3febd198e62322**: Laboratory Trends
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-7cc8dc90ba952200"></a>
- **M08-CAP-ENCOUNTER-7cc8dc90ba952200**: Treatment Tolerance
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-2f27e552d723d07f"></a>
- **M08-CAP-ENCOUNTER-2f27e552d723d07f**: Integrations:
  Origin: original 4578, original 4634, original 4666, original 4669, original 4691, original 4692, original 4720, original 4795, original 4921, original 4946, original 4992, original 4995, original 5044, original 5106, original 5111, original 5122, original 5131

<a id="M08-CAP-ENCOUNTER-54eded08702df067"></a>
- **M08-CAP-ENCOUNTER-54eded08702df067**: Dialysis Machines
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-35ff4287a628c0a4"></a>
- **M08-CAP-ENCOUNTER-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 4578, original 4992

<a id="M08-CAP-ENCOUNTER-7605ce62d32022f4"></a>
- **M08-CAP-ENCOUNTER-7605ce62d32022f4**: Pharmacy
  Origin: original 4578, original 4666

<a id="M08-CAP-ENCOUNTER-dad1551e6044201a"></a>
- **M08-CAP-ENCOUNTER-dad1551e6044201a**: Nephrology
  Origin: original 4578, original 4946

<a id="M08-CAP-ENCOUNTER-3ac5a64c26435e0b"></a>
- **M08-CAP-ENCOUNTER-3ac5a64c26435e0b**: Device Management
  Origin: original 4578

<a id="M08-CAP-ENCOUNTER-af96fdc54ebbd517"></a>
- **M08-CAP-ENCOUNTER-af96fdc54ebbd517**: Support renal replacement therapy in critically ill pediatric patients.
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-78da9a2742258ea7"></a>
- **M08-CAP-ENCOUNTER-78da9a2742258ea7**: CKRT/CRRT Prescription
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-450c0f2fef4c74c9"></a>
- **M08-CAP-ENCOUNTER-450c0f2fef4c74c9**: Treatment Modality
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-56f7fd05035ac994"></a>
- **M08-CAP-ENCOUNTER-56f7fd05035ac994**: Dialysate
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-b2bae0ac13fc1ca5"></a>
- **M08-CAP-ENCOUNTER-b2bae0ac13fc1ca5**: Replacement Fluid
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-a5ea19497a3c8c47"></a>
- **M08-CAP-ENCOUNTER-a5ea19497a3c8c47**: Hemodynamic Status
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-3e6673e4b5967f40"></a>
- **M08-CAP-ENCOUNTER-3e6673e4b5967f40**: Electrolytes
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-41de9f847262847e"></a>
- **M08-CAP-ENCOUNTER-41de9f847262847e**: Acid-Base Status
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-0051f0f3665d142b"></a>
- **M08-CAP-ENCOUNTER-0051f0f3665d142b**: Device Data
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-681f9ead0f3d8982"></a>
- **M08-CAP-ENCOUNTER-681f9ead0f3d8982**: Treatment Interruptions
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-93b12717b55f143f"></a>
- **M08-CAP-ENCOUNTER-93b12717b55f143f**: Filter Changes
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-d77ebdc25974e7d6"></a>
- **M08-CAP-ENCOUNTER-d77ebdc25974e7d6**: Complication Documentation
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-7c78af3acf6c9c48"></a>
- **M08-CAP-ENCOUNTER-7c78af3acf6c9c48**: ICU Integration:
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-d6465fc31e921c97"></a>
- **M08-CAP-ENCOUNTER-d6465fc31e921c97**: Sepsis
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-fa1defbe8ff8ff32"></a>
- **M08-CAP-ENCOUNTER-fa1defbe8ff8ff32**: Multiorgan Failure
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-eaf5019df6020560"></a>
- **M08-CAP-ENCOUNTER-eaf5019df6020560**: Hemodynamic Support
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-7f81e52bc145067c"></a>
- **M08-CAP-ENCOUNTER-7f81e52bc145067c**: Mechanical Ventilation
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-d831fb3bb8efed58"></a>
- **M08-CAP-ENCOUNTER-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4579, original 4921, original 4946

<a id="M08-CAP-ENCOUNTER-07f8d474b8b4141c"></a>
- **M08-CAP-ENCOUNTER-07f8d474b8b4141c**: Safety:
  Origin: original 4579, original 4795

<a id="M08-CAP-ENCOUNTER-f76f4bdaafd08ea4"></a>
- **M08-CAP-ENCOUNTER-f76f4bdaafd08ea4**: High-acuity treatment decisions remain under specialist critical-care and nephrology supervision.
  Origin: original 4579

<a id="M08-CAP-ENCOUNTER-ff2d37cd4ca761a7"></a>
- **M08-CAP-ENCOUNTER-ff2d37cd4ca761a7**: Coordinate neurosurgical management of pediatric brain tumors within the wider neuro-oncology platform.
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-a04becd171370428"></a>
- **M08-CAP-ENCOUNTER-a04becd171370428**: Tumor Location
  Origin: original 4634, original 5111

<a id="M08-CAP-ENCOUNTER-64c15a423ff877e3"></a>
- **M08-CAP-ENCOUNTER-64c15a423ff877e3**: Surgical Indication
  Origin: original 4634, original 4666, original 4772, original 4921, original 4946, original 5111, original 5120, original 5131

<a id="M08-CAP-ENCOUNTER-55a3b82c00527623"></a>
- **M08-CAP-ENCOUNTER-55a3b82c00527623**: Preoperative Planning
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-950a62a4a3504322"></a>
- **M08-CAP-ENCOUNTER-950a62a4a3504322**: Resection
  Origin: original 4634, original 5131

<a id="M08-CAP-ENCOUNTER-39315c87f7669e89"></a>
- **M08-CAP-ENCOUNTER-39315c87f7669e89**: Intraoperative Data
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-55daa6845aa34073"></a>
- **M08-CAP-ENCOUNTER-55daa6845aa34073**: Residual Disease
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-1534f05abe23e7bb"></a>
- **M08-CAP-ENCOUNTER-1534f05abe23e7bb**: Postoperative Imaging
  Origin: original 4634, original 5106, original 5111

<a id="M08-CAP-ENCOUNTER-a790c89c073ea0af"></a>
- **M08-CAP-ENCOUNTER-a790c89c073ea0af**: Neurological Deficits
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-17afb585302a7682"></a>
- **M08-CAP-ENCOUNTER-17afb585302a7682**: Reoperation
  Origin: original 4634, original 4946, original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-86d81ef3975ae5b8"></a>
- **M08-CAP-ENCOUNTER-86d81ef3975ae5b8**: Long-term Surveillance
  Origin: original 4634, original 5111

<a id="M08-CAP-ENCOUNTER-cd9cc84ecdc81938"></a>
- **M08-CAP-ENCOUNTER-cd9cc84ecdc81938**: Neuro-Oncology
  Origin: original 4634, original 5131

<a id="M08-CAP-ENCOUNTER-43dd69ead2249cc2"></a>
- **M08-CAP-ENCOUNTER-43dd69ead2249cc2**: Neurosurgery
  Origin: original 4634, original 5106, original 5111, original 5122, original 5131

<a id="M08-CAP-ENCOUNTER-264c6389f56b68ec"></a>
- **M08-CAP-ENCOUNTER-264c6389f56b68ec**: Neuroradiology
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-6b1b617f18c456db"></a>
- **M08-CAP-ENCOUNTER-6b1b617f18c456db**: Oncology
  Origin: original 4634, original 4992, original 4995, original 5111

<a id="M08-CAP-ENCOUNTER-ea1b4895867897fc"></a>
- **M08-CAP-ENCOUNTER-ea1b4895867897fc**: Radiotherapy
  Origin: original 4634

<a id="M08-CAP-ENCOUNTER-272247501c12e97f"></a>
- **M08-CAP-ENCOUNTER-272247501c12e97f**: Provide structured perioperative workflows for pediatric orthopedic surgery.
  Origin: original 4666

<a id="M08-CAP-ENCOUNTER-0be00b0de4c7cc6e"></a>
- **M08-CAP-ENCOUNTER-0be00b0de4c7cc6e**: Consent
  Origin: original 4666, original 4772

<a id="M08-CAP-ENCOUNTER-9fbcbcd1fa610088"></a>
- **M08-CAP-ENCOUNTER-9fbcbcd1fa610088**: Anesthesia Context
  Origin: original 4666, original 4772, original 5120

<a id="M08-CAP-ENCOUNTER-7f5123ed33cff654"></a>
- **M08-CAP-ENCOUNTER-7f5123ed33cff654**: Implant Documentation
  Origin: original 4666, original 4772

<a id="M08-CAP-ENCOUNTER-bf4d74ab3c055d34"></a>
- **M08-CAP-ENCOUNTER-bf4d74ab3c055d34**: Blood Loss Context
  Origin: original 4666

<a id="M08-CAP-ENCOUNTER-612ecd89632acb9f"></a>
- **M08-CAP-ENCOUNTER-612ecd89632acb9f**: Postoperative Care
  Origin: original 4666, original 4946

<a id="M08-CAP-ENCOUNTER-2d8f60f48d76c293"></a>
- **M08-CAP-ENCOUNTER-2d8f60f48d76c293**: Pain Management
  Origin: original 4666, original 4772, original 4921

<a id="M08-CAP-ENCOUNTER-1cb0d3e4eb521218"></a>
- **M08-CAP-ENCOUNTER-1cb0d3e4eb521218**: Wound Monitoring
  Origin: original 4666

<a id="M08-CAP-ENCOUNTER-fed5d6649ea53bd7"></a>
- **M08-CAP-ENCOUNTER-fed5d6649ea53bd7**: Infection Surveillance
  Origin: original 4666, original 4772

<a id="M08-CAP-ENCOUNTER-7881805835cd66a2"></a>
- **M08-CAP-ENCOUNTER-7881805835cd66a2**: Mobility
  Origin: original 4666, original 4669, original 4690, original 4720, original 5044, original 5122

<a id="M08-CAP-ENCOUNTER-0c2d408e413351d3"></a>
- **M08-CAP-ENCOUNTER-0c2d408e413351d3**: Orthopedics
  Origin: original 4666, original 4669, original 4691, original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-37ea4931bb315bc8"></a>
- **M08-CAP-ENCOUNTER-37ea4931bb315bc8**: Anesthesiology
  Origin: original 4666, original 4795, original 4921, original 4946

<a id="M08-CAP-ENCOUNTER-bc506fdefc6e7e7b"></a>
- **M08-CAP-ENCOUNTER-bc506fdefc6e7e7b**: Surgery
  Origin: original 4666

<a id="M08-CAP-ENCOUNTER-64f2d1b951a134f9"></a>
- **M08-CAP-ENCOUNTER-64f2d1b951a134f9**: Nursing
  Origin: original 4666

<a id="M08-CAP-ENCOUNTER-c062dc13ee048cfd"></a>
- **M08-CAP-ENCOUNTER-c062dc13ee048cfd**: Radiology
  Origin: original 4666, original 4921, original 4946, original 5106, original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-f68120d45fbc5038"></a>
- **M08-CAP-ENCOUNTER-f68120d45fbc5038**: Provide longitudinal rehabilitation after pediatric orthopedic disease, injury or surgery.
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-fca68ccf901c1ea7"></a>
- **M08-CAP-ENCOUNTER-fca68ccf901c1ea7**: Functional Baseline
  Origin: original 4669, original 4690, original 4720

<a id="M08-CAP-ENCOUNTER-a3d3778b63a0330e"></a>
- **M08-CAP-ENCOUNTER-a3d3778b63a0330e**: Range of Motion
  Origin: original 4669, original 4690

<a id="M08-CAP-ENCOUNTER-c8f2f3fad28c4b03"></a>
- **M08-CAP-ENCOUNTER-c8f2f3fad28c4b03**: Strength
  Origin: original 4669, original 4690, original 5044

<a id="M08-CAP-ENCOUNTER-4e787722e84ee2d2"></a>
- **M08-CAP-ENCOUNTER-4e787722e84ee2d2**: Gait
  Origin: original 4669, original 4690, original 4720

<a id="M08-CAP-ENCOUNTER-c2b810f18c7e3bf3"></a>
- **M08-CAP-ENCOUNTER-c2b810f18c7e3bf3**: Balance
  Origin: original 4669, original 4690, original 5044

<a id="M08-CAP-ENCOUNTER-d929dde3cb2892d8"></a>
- **M08-CAP-ENCOUNTER-d929dde3cb2892d8**: Pain
  Origin: original 4669, original 4688, original 4690, original 4720

<a id="M08-CAP-ENCOUNTER-c893e23761c5eacb"></a>
- **M08-CAP-ENCOUNTER-c893e23761c5eacb**: Physiotherapy Plan
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-689e4394c1563eab"></a>
- **M08-CAP-ENCOUNTER-689e4394c1563eab**: Home Exercise Program
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-226a232c5362ff1b"></a>
- **M08-CAP-ENCOUNTER-226a232c5362ff1b**: Occupational Therapy
  Origin: original 4669, original 4720, original 5044, original 5122

<a id="M08-CAP-ENCOUNTER-028c6828a851b3b8"></a>
- **M08-CAP-ENCOUNTER-028c6828a851b3b8**: Rehabilitation Goals
  Origin: original 4669, original 4720

<a id="M08-CAP-ENCOUNTER-9fee4aed7844900b"></a>
- **M08-CAP-ENCOUNTER-9fee4aed7844900b**: Assistive Devices
  Origin: original 4669, original 4691, original 4720

<a id="M08-CAP-ENCOUNTER-913fab667ecf2644"></a>
- **M08-CAP-ENCOUNTER-913fab667ecf2644**: Progress Measures
  Origin: original 4669, original 4690

<a id="M08-CAP-ENCOUNTER-9c332fd85475a4a1"></a>
- **M08-CAP-ENCOUNTER-9c332fd85475a4a1**: Return to School
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-43e9637d7a566196"></a>
- **M08-CAP-ENCOUNTER-43e9637d7a566196**: Return to Activity
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-edff499ef384545a"></a>
- **M08-CAP-ENCOUNTER-edff499ef384545a**: Clinician-approved Exercise Plan
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-63c1b899d778aee7"></a>
- **M08-CAP-ENCOUNTER-63c1b899d778aee7**: Home Task Documentation
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-23970671bddf9fe9"></a>
- **M08-CAP-ENCOUNTER-23970671bddf9fe9**: Appointment Information
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-7e0d2d09696ce889"></a>
- **M08-CAP-ENCOUNTER-7e0d2d09696ce889**: Rehabilitation Medicine
  Origin: original 4669, original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-f95fc3170b8834b7"></a>
- **M08-CAP-ENCOUNTER-f95fc3170b8834b7**: Sports Medicine
  Origin: original 4669

<a id="M08-CAP-ENCOUNTER-53f81fc9deea67b9"></a>
- **M08-CAP-ENCOUNTER-53f81fc9deea67b9**: Coordinate staged functional recovery after injury, surgery or neurological events.
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-880e29f3b68a7cb2"></a>
- **M08-CAP-ENCOUNTER-880e29f3b68a7cb2**: Baseline Activity
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-f83bf2d111ca4570"></a>
- **M08-CAP-ENCOUNTER-f83bf2d111ca4570**: Current Functional Status
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-a72a7cfb72748859"></a>
- **M08-CAP-ENCOUNTER-a72a7cfb72748859**: School Participation
  Origin: original 4688, original 5044

<a id="M08-CAP-ENCOUNTER-0943ef8e2a954607"></a>
- **M08-CAP-ENCOUNTER-0943ef8e2a954607**: Physical Activity
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-a22c6408c8619c32"></a>
- **M08-CAP-ENCOUNTER-a22c6408c8619c32**: Sport Participation
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-7e6babac8a5cdfb0"></a>
- **M08-CAP-ENCOUNTER-7e6babac8a5cdfb0**: Rehabilitation Status
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-6ffb731508469a32"></a>
- **M08-CAP-ENCOUNTER-6ffb731508469a32**: Neurological Symptoms
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-3e3c3357878b34d1"></a>
- **M08-CAP-ENCOUNTER-3e3c3357878b34d1**: Orthopedic Restrictions
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-955fac8d910b7791"></a>
- **M08-CAP-ENCOUNTER-955fac8d910b7791**: Clinician Restrictions
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-cad3fd53507ff05e"></a>
- **M08-CAP-ENCOUNTER-cad3fd53507ff05e**: Functional Testing
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-c53e3b49dcbb44d6"></a>
- **M08-CAP-ENCOUNTER-c53e3b49dcbb44d6**: Progression Documentation
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-2f7945804e1f3e88"></a>
- **M08-CAP-ENCOUNTER-2f7945804e1f3e88**: Clearance Documentation
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-d2881c6db88947c4"></a>
- **M08-CAP-ENCOUNTER-d2881c6db88947c4**: Workflows:
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-2b8a44efb1d48cea"></a>
- **M08-CAP-ENCOUNTER-2b8a44efb1d48cea**: Return-to-Learn
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-e2da0e1f2043d567"></a>
- **M08-CAP-ENCOUNTER-e2da0e1f2043d567**: Return-to-Daily Activity
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-de73a15d8aac8d8d"></a>
- **M08-CAP-ENCOUNTER-de73a15d8aac8d8d**: Return-to-Physical Education
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-db31bc09afe3e295"></a>
- **M08-CAP-ENCOUNTER-db31bc09afe3e295**: Return-to-Training
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-e69c05b7d5e47e7e"></a>
- **M08-CAP-ENCOUNTER-e69c05b7d5e47e7e**: Return-to-Sport
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-dc0d643ae54f3d74"></a>
- **M08-CAP-ENCOUNTER-dc0d643ae54f3d74**: Governance:
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-4f6be7f756f8227a"></a>
- **M08-CAP-ENCOUNTER-4f6be7f756f8227a**: Clearance decisions remain attributable to authorized clinicians.
  Origin: original 4688

<a id="M08-CAP-ENCOUNTER-e012652f8e339b7d"></a>
- **M08-CAP-ENCOUNTER-e012652f8e339b7d**: Provide structured longitudinal physiotherapy planning and outcome measurement.
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-cdcfacc064f24bc0"></a>
- **M08-CAP-ENCOUNTER-cdcfacc064f24bc0**: Coordination
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-d63829d8f5e37774"></a>
- **M08-CAP-ENCOUNTER-d63829d8f5e37774**: Endurance
  Origin: original 4690, original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-262e1420c9936450"></a>
- **M08-CAP-ENCOUNTER-262e1420c9936450**: Home Program
  Origin: original 4690, original 4692, original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-d08bcd1528f93e38"></a>
- **M08-CAP-ENCOUNTER-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 4690, original 4691, original 4692, original 4720, original 4921, original 5044

<a id="M08-CAP-ENCOUNTER-463887a16662c543"></a>
- **M08-CAP-ENCOUNTER-463887a16662c543**: Discharge Planning
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-68a52529ddb7e173"></a>
- **M08-CAP-ENCOUNTER-68a52529ddb7e173**: Clinician-approved Home Exercises
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-b3a7bf1caba99fef"></a>
- **M08-CAP-ENCOUNTER-b3a7bf1caba99fef**: Therapy Schedule
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-4b33466df8bbe3de"></a>
- **M08-CAP-ENCOUNTER-4b33466df8bbe3de**: Structured Feedback
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-a2b7962680ea07d2"></a>
- **M08-CAP-ENCOUNTER-a2b7962680ea07d2**: Data:
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-7de9ceeeb5f2532b"></a>
- **M08-CAP-ENCOUNTER-7de9ceeeb5f2532b**: Every assessment and intervention retains clinician, date and treatment context.
  Origin: original 4690

<a id="M08-CAP-ENCOUNTER-1509aad93c395bbf"></a>
- **M08-CAP-ENCOUNTER-1509aad93c395bbf**: Support functional independence and participation in everyday activities.
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-1b70b8fbfc6830f9"></a>
- **M08-CAP-ENCOUNTER-1b70b8fbfc6830f9**: Activities of Daily Living
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-15696489bf3047b5"></a>
- **M08-CAP-ENCOUNTER-15696489bf3047b5**: Fine Motor Function
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-fa6305feb2a59bcd"></a>
- **M08-CAP-ENCOUNTER-fa6305feb2a59bcd**: Upper Limb Function
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-e9a38c69c6bc2bc0"></a>
- **M08-CAP-ENCOUNTER-e9a38c69c6bc2bc0**: Self-care
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-77f0f15362f3acdc"></a>
- **M08-CAP-ENCOUNTER-77f0f15362f3acdc**: Feeding Function
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-acd5043d6b1d5fe5"></a>
- **M08-CAP-ENCOUNTER-acd5043d6b1d5fe5**: Handwriting Context
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-918b6465e2e0edfa"></a>
- **M08-CAP-ENCOUNTER-918b6465e2e0edfa**: School Function
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-02e405e3909af331"></a>
- **M08-CAP-ENCOUNTER-02e405e3909af331**: Sensory Context
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-b05f7082d91a3d10"></a>
- **M08-CAP-ENCOUNTER-b05f7082d91a3d10**: Environmental Barriers
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-f412f81e28215101"></a>
- **M08-CAP-ENCOUNTER-f412f81e28215101**: Adaptive Equipment
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-9ba6d784ad63b10d"></a>
- **M08-CAP-ENCOUNTER-9ba6d784ad63b10d**: Intervention Plan
  Origin: original 4691, original 4841

<a id="M08-CAP-ENCOUNTER-1776431d6d17f344"></a>
- **M08-CAP-ENCOUNTER-1776431d6d17f344**: Neurology
  Origin: original 4691, original 4692, original 5106, original 5111, original 5122, original 5131

<a id="M08-CAP-ENCOUNTER-51e1a3d983c68f0d"></a>
- **M08-CAP-ENCOUNTER-51e1a3d983c68f0d**: Developmental Pediatrics
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-5ffa682f42236b85"></a>
- **M08-CAP-ENCOUNTER-5ffa682f42236b85**: Education Support
  Origin: original 4691, original 4692

<a id="M08-CAP-ENCOUNTER-873049232016f19a"></a>
- **M08-CAP-ENCOUNTER-873049232016f19a**: Home Care
  Origin: original 4691

<a id="M08-CAP-ENCOUNTER-4dc6edf8428e86fb"></a>
- **M08-CAP-ENCOUNTER-4dc6edf8428e86fb**: Coordinate speech, language, communication and swallowing rehabilitation within multidisciplinary pediatric care.
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-6b8c21af9190f5a9"></a>
- **M08-CAP-ENCOUNTER-6b8c21af9190f5a9**: Speech Assessment
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-ee4163a42c30b254"></a>
- **M08-CAP-ENCOUNTER-ee4163a42c30b254**: Language Assessment
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-f7f8e1915674b4a2"></a>
- **M08-CAP-ENCOUNTER-f7f8e1915674b4a2**: Communication Function
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-9281005248e70ff9"></a>
- **M08-CAP-ENCOUNTER-9281005248e70ff9**: Voice Context
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-f6defbb94a998715"></a>
- **M08-CAP-ENCOUNTER-f6defbb94a998715**: Swallowing Assessment
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-9db41843362809f3"></a>
- **M08-CAP-ENCOUNTER-9db41843362809f3**: Feeding Safety Context
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-1ff996985bfc0ba6"></a>
- **M08-CAP-ENCOUNTER-1ff996985bfc0ba6**: Alternative Communication
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-7132567c7a043b1a"></a>
- **M08-CAP-ENCOUNTER-7132567c7a043b1a**: Assistive Communication Devices
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-f897e6e3b11df07d"></a>
- **M08-CAP-ENCOUNTER-f897e6e3b11df07d**: School Integration
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-ea3d45fe20391aba"></a>
- **M08-CAP-ENCOUNTER-ea3d45fe20391aba**: Speech Therapy
  Origin: original 4692, original 5122

<a id="M08-CAP-ENCOUNTER-a4592f25affcc927"></a>
- **M08-CAP-ENCOUNTER-a4592f25affcc927**: ENT
  Origin: original 4692, original 4795

<a id="M08-CAP-ENCOUNTER-73398554fcd7dcc3"></a>
- **M08-CAP-ENCOUNTER-73398554fcd7dcc3**: Gastroenterology
  Origin: original 4692

<a id="M08-CAP-ENCOUNTER-3da93e041e0fa0e7"></a>
- **M08-CAP-ENCOUNTER-3da93e041e0fa0e7**: Coordinate rehabilitation for children with inflammatory and systemic musculoskeletal disease.
  Origin: original 4720

<a id="M08-CAP-ENCOUNTER-8951380ee6a8c53b"></a>
- **M08-CAP-ENCOUNTER-8951380ee6a8c53b**: Joint Range of Motion
  Origin: original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-6648cbeaf52f7c1c"></a>
- **M08-CAP-ENCOUNTER-6648cbeaf52f7c1c**: Muscle Strength
  Origin: original 4720

<a id="M08-CAP-ENCOUNTER-bcbe15b6b26611a9"></a>
- **M08-CAP-ENCOUNTER-bcbe15b6b26611a9**: Contractures
  Origin: original 4720

<a id="M08-CAP-ENCOUNTER-791e150b54f860f6"></a>
- **M08-CAP-ENCOUNTER-791e150b54f860f6**: Rheumatology
  Origin: original 4720, original 5044

<a id="M08-CAP-ENCOUNTER-dc21c2d2ddec6aad"></a>
- **M08-CAP-ENCOUNTER-dc21c2d2ddec6aad**: Provide structured perioperative management for pediatric ENT procedures.
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-3e7c6af853fc9205"></a>
- **M08-CAP-ENCOUNTER-3e7c6af853fc9205**: Airway Context
  Origin: original 4772, original 4795

<a id="M08-CAP-ENCOUNTER-36cc25004d4e7daa"></a>
- **M08-CAP-ENCOUNTER-36cc25004d4e7daa**: Hearing Context
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-7f828bba7442ff96"></a>
- **M08-CAP-ENCOUNTER-7f828bba7442ff96**: Bleeding Surveillance
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-3aaa094482c93d40"></a>
- **M08-CAP-ENCOUNTER-3aaa094482c93d40**: Device Registry:
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-b5056cae5fea9642"></a>
- **M08-CAP-ENCOUNTER-b5056cae5fea9642**: Cochlear Implant
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-50bd155ccb83d110"></a>
- **M08-CAP-ENCOUNTER-50bd155ccb83d110**: Hearing Implant
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-db9b694d4564639e"></a>
- **M08-CAP-ENCOUNTER-db9b694d4564639e**: Airway Device
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-47d7b9b7cfe65ad4"></a>
- **M08-CAP-ENCOUNTER-47d7b9b7cfe65ad4**: Other ENT Implant
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-9aa7ed92d4d55304"></a>
- **M08-CAP-ENCOUNTER-9aa7ed92d4d55304**: Device Manufacturer
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-94581929b2d1d382"></a>
- **M08-CAP-ENCOUNTER-94581929b2d1d382**: Model
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-d283cd16c0bbf249"></a>
- **M08-CAP-ENCOUNTER-d283cd16c0bbf249**: Implant Date
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-4b8ef00443c876e8"></a>
- **M08-CAP-ENCOUNTER-4b8ef00443c876e8**: Current Status
  Origin: original 4772

<a id="M08-CAP-ENCOUNTER-c083d103e89fd4e9"></a>
- **M08-CAP-ENCOUNTER-c083d103e89fd4e9**: Support safe dental treatment for children requiring behavioral management, sedation or anesthesia.
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-586c2cb3a37836ce"></a>
- **M08-CAP-ENCOUNTER-586c2cb3a37836ce**: Behavioral Assessment
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-9d87df98d4780997"></a>
- **M08-CAP-ENCOUNTER-9d87df98d4780997**: Developmental Context
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-bc560175f5b9014f"></a>
- **M08-CAP-ENCOUNTER-bc560175f5b9014f**: Communication Needs
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-65137e072946683b"></a>
- **M08-CAP-ENCOUNTER-65137e072946683b**: Previous Dental Experience
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-4753ae8e8bbec9f8"></a>
- **M08-CAP-ENCOUNTER-4753ae8e8bbec9f8**: Sedation History
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-c0562e30806ae889"></a>
- **M08-CAP-ENCOUNTER-c0562e30806ae889**: Anesthesia History
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-2356a36c34e89685"></a>
- **M08-CAP-ENCOUNTER-2356a36c34e89685**: Allergy
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-bb054aa758d27f3e"></a>
- **M08-CAP-ENCOUNTER-bb054aa758d27f3e**: Pre-procedure Assessment
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-f749e8c444dc0a0d"></a>
- **M08-CAP-ENCOUNTER-f749e8c444dc0a0d**: Adverse Events
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-b2ad81aeb8f82909"></a>
- **M08-CAP-ENCOUNTER-b2ad81aeb8f82909**: Dentistry
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-e9eb7b780843070a"></a>
- **M08-CAP-ENCOUNTER-e9eb7b780843070a**: Pediatrics
  Origin: original 4795, original 5167

<a id="M08-CAP-ENCOUNTER-b7edcd7f826cfcd9"></a>
- **M08-CAP-ENCOUNTER-b7edcd7f826cfcd9**: Pulmonology
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-9e9dbb804ca8197a"></a>
- **M08-CAP-ENCOUNTER-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-ad66f2d2cf984045"></a>
- **M08-CAP-ENCOUNTER-ad66f2d2cf984045**: Sedation and anesthesia workflows remain governed by qualified clinicians and applicable local standards.
  Origin: original 4795

<a id="M08-CAP-ENCOUNTER-ddbb4a8aa0bc4d4c"></a>
- **M08-CAP-ENCOUNTER-ddbb4a8aa0bc4d4c**: Create a structured longitudinal record of psychological and psychotherapeutic interventions.
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-6dcaeb4b7a20f8de"></a>
- **M08-CAP-ENCOUNTER-6dcaeb4b7a20f8de**: Therapy Indication
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-3df3c4ed3b9b6c0b"></a>
- **M08-CAP-ENCOUNTER-3df3c4ed3b9b6c0b**: Therapy Modality
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-e39d3139b6fc929d"></a>
- **M08-CAP-ENCOUNTER-e39d3139b6fc929d**: Treatment Goals
  Origin: original 4841, original 5167

<a id="M08-CAP-ENCOUNTER-f7c2f64a8f81da61"></a>
- **M08-CAP-ENCOUNTER-f7c2f64a8f81da61**: Symptom Measures
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-75b1ab465e596ef6"></a>
- **M08-CAP-ENCOUNTER-75b1ab465e596ef6**: Functional Goals
  Origin: original 4841, original 5122

<a id="M08-CAP-ENCOUNTER-ba6aa9c7f9f7162d"></a>
- **M08-CAP-ENCOUNTER-ba6aa9c7f9f7162d**: Patient Participation
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-7f92c3a767397dc4"></a>
- **M08-CAP-ENCOUNTER-7f92c3a767397dc4**: Guardian Participation where appropriate
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-95ca82a45122dc88"></a>
- **M08-CAP-ENCOUNTER-95ca82a45122dc88**: Treatment Progress
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-8158fae71efa0684"></a>
- **M08-CAP-ENCOUNTER-8158fae71efa0684**: Treatment Modification
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-821ca89f5c693e01"></a>
- **M08-CAP-ENCOUNTER-821ca89f5c693e01**: Therapy Completion
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-16bf46bb5b7cd2ed"></a>
- **M08-CAP-ENCOUNTER-16bf46bb5b7cd2ed**: Outcome Measures
  Origin: original 4841, original 5167

<a id="M08-CAP-ENCOUNTER-5e4da390b5deff2d"></a>
- **M08-CAP-ENCOUNTER-5e4da390b5deff2d**: Supported Care Models:
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-98d6f21ca108c9a1"></a>
- **M08-CAP-ENCOUNTER-98d6f21ca108c9a1**: Individual Therapy
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-974e4bf2d7437cff"></a>
- **M08-CAP-ENCOUNTER-974e4bf2d7437cff**: Family-based Intervention
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-f0f30affa6ff9d10"></a>
- **M08-CAP-ENCOUNTER-f0f30affa6ff9d10**: Group Therapy Context
  Origin: original 4841, original 5167

<a id="M08-CAP-ENCOUNTER-b29fd5c7fc8a64b7"></a>
- **M08-CAP-ENCOUNTER-b29fd5c7fc8a64b7**: Behavioral Intervention
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-ea7b3b958804bba6"></a>
- **M08-CAP-ENCOUNTER-ea7b3b958804bba6**: Skills-based Therapy
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-7b641e7a4722eb9a"></a>
- **M08-CAP-ENCOUNTER-7b641e7a4722eb9a**: Developmentally Adapted Psychological Care
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-4eb2af6b34b4b40a"></a>
- **M08-CAP-ENCOUNTER-4eb2af6b34b4b40a**: Privacy:
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-3027760ffee53773"></a>
- **M08-CAP-ENCOUNTER-3027760ffee53773**: Detailed psychotherapy notes may be subject to enhanced access controls separate from general clinical summaries.
  Origin: original 4841

<a id="M08-CAP-ENCOUNTER-a4c9e1f543885fc2"></a>
- **M08-CAP-ENCOUNTER-a4c9e1f543885fc2**: Coordinate pediatric and adolescent gynecological surgical workflows.
  Origin: original 4921

<a id="M08-CAP-ENCOUNTER-1ec3ed25fa556433"></a>
- **M08-CAP-ENCOUNTER-1ec3ed25fa556433**: Consent/Assent
  Origin: original 4921, original 4946

<a id="M08-CAP-ENCOUNTER-4e48d4d0d4726e53"></a>
- **M08-CAP-ENCOUNTER-4e48d4d0d4726e53**: Minimally Invasive Surgery Context
  Origin: original 4921

<a id="M08-CAP-ENCOUNTER-1e6d038e54c30b95"></a>
- **M08-CAP-ENCOUNTER-1e6d038e54c30b95**: Ovarian Preservation Context
  Origin: original 4921

<a id="M08-CAP-ENCOUNTER-fc7f2913fdc1ea1f"></a>
- **M08-CAP-ENCOUNTER-fc7f2913fdc1ea1f**: Specimen Tracking
  Origin: original 4921, original 4946, original 4992

<a id="M08-CAP-ENCOUNTER-b9edfabe07992ef6"></a>
- **M08-CAP-ENCOUNTER-b9edfabe07992ef6**: Gynecology
  Origin: original 4921

<a id="M08-CAP-ENCOUNTER-c2019eedd0fafbb1"></a>
- **M08-CAP-ENCOUNTER-c2019eedd0fafbb1**: Pediatric Surgery
  Origin: original 4921

<a id="M08-CAP-ENCOUNTER-9f322362c66e0d28"></a>
- **M08-CAP-ENCOUNTER-9f322362c66e0d28**: Pain Medicine
  Origin: original 4921, original 4946

<a id="M08-CAP-ENCOUNTER-4016ea55b137f4af"></a>
- **M08-CAP-ENCOUNTER-4016ea55b137f4af**: Coordinate the complete pediatric urological surgical lifecycle.
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-e585810271e4f933"></a>
- **M08-CAP-ENCOUNTER-e585810271e4f933**: Procedure Planning
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-2e13e695f0e9fcf7"></a>
- **M08-CAP-ENCOUNTER-2e13e695f0e9fcf7**: Reconstruction
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-d9eb2aaf62beef0b"></a>
- **M08-CAP-ENCOUNTER-d9eb2aaf62beef0b**: Minimally Invasive Context
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-04be57e1042e71df"></a>
- **M08-CAP-ENCOUNTER-04be57e1042e71df**: Catheter/Drain/Stent
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-b49ce234541b94f3"></a>
- **M08-CAP-ENCOUNTER-b49ce234541b94f3**: Functional Outcome
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-646ee4a286165f4e"></a>
- **M08-CAP-ENCOUNTER-646ee4a286165f4e**: Urology
  Origin: original 4946

<a id="M08-CAP-ENCOUNTER-799c5c7e3dfd0e4c"></a>
- **M08-CAP-ENCOUNTER-799c5c7e3dfd0e4c**: Connect bone marrow procedures, morphology, pathology and molecular diagnostics within one traceable clinical workflow.
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-4fe5158d0bff2af4"></a>
- **M08-CAP-ENCOUNTER-4fe5158d0bff2af4**: Procedure Indication
  Origin: original 4992, original 4995, original 5106

<a id="M08-CAP-ENCOUNTER-d652fd2b383ea2d7"></a>
- **M08-CAP-ENCOUNTER-d652fd2b383ea2d7**: Core Biopsy
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-79df1514618742a9"></a>
- **M08-CAP-ENCOUNTER-79df1514618742a9**: Cellularity Context
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-7a28a78a806dbc2f"></a>
- **M08-CAP-ENCOUNTER-7a28a78a806dbc2f**: Molecular Testing
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-78d0334ae8346a4e"></a>
- **M08-CAP-ENCOUNTER-78d0334ae8346a4e**: Histopathology
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-fe847f9965ec252a"></a>
- **M08-CAP-ENCOUNTER-fe847f9965ec252a**: Immunophenotyping
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-a6fa6d83b3f964f8"></a>
- **M08-CAP-ENCOUNTER-a6fa6d83b3f964f8**: Specialist Interpretation
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-94857e10b0dccf29"></a>
- **M08-CAP-ENCOUNTER-94857e10b0dccf29**: Clinical Correlation
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-816f49494ba8a0c9"></a>
- **M08-CAP-ENCOUNTER-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-f58af08e3b577873"></a>
- **M08-CAP-ENCOUNTER-f58af08e3b577873**: Treatment Impact
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-d5201c8c85a8f994"></a>
- **M08-CAP-ENCOUNTER-d5201c8c85a8f994**: Hematology
  Origin: original 4992, original 4995

<a id="M08-CAP-ENCOUNTER-aaaf0a34a8eb8286"></a>
- **M08-CAP-ENCOUNTER-aaaf0a34a8eb8286**: Genetics
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-fb7dcbc64a7ed5f8"></a>
- **M08-CAP-ENCOUNTER-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-13e1a201b5eb714d"></a>
- **M08-CAP-ENCOUNTER-13e1a201b5eb714d**: Structured Data Organization
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-aca18d42c7fa8fff"></a>
- **M08-CAP-ENCOUNTER-aca18d42c7fa8fff**: Historical Comparison Support
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-f171efc5fc7ff8be"></a>
- **M08-CAP-ENCOUNTER-f171efc5fc7ff8be**: Diagnostic Timeline Assembly
  Origin: original 4992

<a id="M08-CAP-ENCOUNTER-98e3b5086e8e6cbf"></a>
- **M08-CAP-ENCOUNTER-98e3b5086e8e6cbf**: Coordinate therapeutic apheresis and clinically indicated cellular collection procedures in pediatric patients.
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-c203e354374d9b88"></a>
- **M08-CAP-ENCOUNTER-c203e354374d9b88**: Machine/Device Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-3d4b36fdd505e5ab"></a>
- **M08-CAP-ENCOUNTER-3d4b36fdd505e5ab**: Replacement Fluid Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-f25802c9177e21ff"></a>
- **M08-CAP-ENCOUNTER-f25802c9177e21ff**: Anticoagulation Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-9aeb6f7ed710881d"></a>
- **M08-CAP-ENCOUNTER-9aeb6f7ed710881d**: Pre-procedure Labs
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-ec6d848e71271854"></a>
- **M08-CAP-ENCOUNTER-ec6d848e71271854**: Procedure Parameters
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-d41261faa2ec740d"></a>
- **M08-CAP-ENCOUNTER-d41261faa2ec740d**: Product Collection Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-e9bb1b7104aa25cd"></a>
- **M08-CAP-ENCOUNTER-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4995, original 5044

<a id="M08-CAP-ENCOUNTER-e2bcbdb15c33554b"></a>
- **M08-CAP-ENCOUNTER-e2bcbdb15c33554b**: Clinical Contexts:
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-bb6e4802291fff0f"></a>
- **M08-CAP-ENCOUNTER-bb6e4802291fff0f**: Plasma Exchange
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-68407dc8111347bd"></a>
- **M08-CAP-ENCOUNTER-68407dc8111347bd**: Red Cell Exchange
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-1f349d87e889002d"></a>
- **M08-CAP-ENCOUNTER-1f349d87e889002d**: Leukapheresis Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-1c176ed7ed059385"></a>
- **M08-CAP-ENCOUNTER-1c176ed7ed059385**: Stem Cell Collection Context
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-bca1dace86dc60be"></a>
- **M08-CAP-ENCOUNTER-bca1dace86dc60be**: Other Therapeutic Apheresis
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-ab3aa4b66310e203"></a>
- **M08-CAP-ENCOUNTER-ab3aa4b66310e203**: Transfusion Medicine
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-c25e5083a540778a"></a>
- **M08-CAP-ENCOUNTER-c25e5083a540778a**: Transplantation
  Origin: original 4995

<a id="M08-CAP-ENCOUNTER-4a1db7b3fa8112be"></a>
- **M08-CAP-ENCOUNTER-4a1db7b3fa8112be**: Intensive Care
  Origin: original 4995, original 5106

<a id="M08-CAP-ENCOUNTER-5c99feb474219ba7"></a>
- **M08-CAP-ENCOUNTER-5c99feb474219ba7**: Coordinate safe rehabilitation and preservation of function in pediatric inflammatory disease.
  Origin: original 5044

<a id="M08-CAP-ENCOUNTER-85d61c5ac64e394d"></a>
- **M08-CAP-ENCOUNTER-85d61c5ac64e394d**: Functional Assessment
  Origin: original 5044

<a id="M08-CAP-ENCOUNTER-b9eb769ed9c3bee1"></a>
- **M08-CAP-ENCOUNTER-b9eb769ed9c3bee1**: Exercise Tolerance
  Origin: original 5044

<a id="M08-CAP-ENCOUNTER-e09c794604c2454a"></a>
- **M08-CAP-ENCOUNTER-e09c794604c2454a**: Contracture Context
  Origin: original 5044

<a id="M08-CAP-ENCOUNTER-32d495f5bbc14544"></a>
- **M08-CAP-ENCOUNTER-32d495f5bbc14544**: Activity Goals
  Origin: original 5044

<a id="M08-CAP-ENCOUNTER-50b8c26cc6deda0a"></a>
- **M08-CAP-ENCOUNTER-50b8c26cc6deda0a**: Coordinate neuroendoscopic procedures and longitudinal follow-up in pediatric neurosurgery.
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-f88b349e45dfdf31"></a>
- **M08-CAP-ENCOUNTER-f88b349e45dfdf31**: ETV Context
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-bda8c69f5a6a77b1"></a>
- **M08-CAP-ENCOUNTER-bda8c69f5a6a77b1**: Endoscopic Procedure Type
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-9ac5be76ee69e8b9"></a>
- **M08-CAP-ENCOUNTER-9ac5be76ee69e8b9**: Preoperative Imaging
  Origin: original 5106, original 5120

<a id="M08-CAP-ENCOUNTER-6c99ca5bc0c98e1c"></a>
- **M08-CAP-ENCOUNTER-6c99ca5bc0c98e1c**: Intraoperative Findings
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-735ded0799e7e752"></a>
- **M08-CAP-ENCOUNTER-735ded0799e7e752**: Procedure Date
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-2c12c94cde9502a7"></a>
- **M08-CAP-ENCOUNTER-2c12c94cde9502a7**: CSF Dynamics Context
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-6cf52eb2351573d6"></a>
- **M08-CAP-ENCOUNTER-6cf52eb2351573d6**: Clinical Response
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-1595749abcab3b8a"></a>
- **M08-CAP-ENCOUNTER-1595749abcab3b8a**: Failure Context
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-9e69c70d67ccae0f"></a>
- **M08-CAP-ENCOUNTER-9e69c70d67ccae0f**: Repeat Procedure
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-253fb73d09f84811"></a>
- **M08-CAP-ENCOUNTER-253fb73d09f84811**: Shunt Conversion Context
  Origin: original 5106

<a id="M08-CAP-ENCOUNTER-ceb444a895ec2faf"></a>
- **M08-CAP-ENCOUNTER-ceb444a895ec2faf**: Long-term Outcome
  Origin: original 5106, original 5122, original 5131

<a id="M08-CAP-ENCOUNTER-133bc922e109bb17"></a>
- **M08-CAP-ENCOUNTER-133bc922e109bb17**: Connect neurosurgical treatment of pediatric brain tumors with oncology, pathology, imaging and longitudinal neurological outcomes.
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-02723df1654d8dd7"></a>
- **M08-CAP-ENCOUNTER-02723df1654d8dd7**: Presentation
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-f3a6fa377b21832d"></a>
- **M08-CAP-ENCOUNTER-f3a6fa377b21832d**: Biopsy Context
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-325b9d0917dc4bef"></a>
- **M08-CAP-ENCOUNTER-325b9d0917dc4bef**: Resection Context
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-6109a5d06de9a8ae"></a>
- **M08-CAP-ENCOUNTER-6109a5d06de9a8ae**: Extent of Resection
  Origin: original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-ba6403d34b52aaa0"></a>
- **M08-CAP-ENCOUNTER-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-a1a9df860c126dac"></a>
- **M08-CAP-ENCOUNTER-a1a9df860c126dac**: Neurological Outcome
  Origin: original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-4ba63e2ad30c17fd"></a>
- **M08-CAP-ENCOUNTER-4ba63e2ad30c17fd**: CSF Disorder Context
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-7ccf45269d465a4e"></a>
- **M08-CAP-ENCOUNTER-7ccf45269d465a4e**: Oncology Treatment Context
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-1d65210795905d48"></a>
- **M08-CAP-ENCOUNTER-1d65210795905d48**: Recurrence
  Origin: original 5111

<a id="M08-CAP-ENCOUNTER-43a67d79860bcb43"></a>
- **M08-CAP-ENCOUNTER-43a67d79860bcb43**: HIGH
  Origin: original 5111, original 5131

<a id="M08-CAP-ENCOUNTER-3ffdaa1c3be3204f"></a>
- **M08-CAP-ENCOUNTER-3ffdaa1c3be3204f**: Create a traceable multidisciplinary environment for complex pediatric neurosurgical planning.
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-82d4a77474b0887a"></a>
- **M08-CAP-ENCOUNTER-82d4a77474b0887a**: Anatomical Localization
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-2677b2b1cf618ee3"></a>
- **M08-CAP-ENCOUNTER-2677b2b1cf618ee3**: Functional Anatomy Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-dba3f829bf3d7472"></a>
- **M08-CAP-ENCOUNTER-dba3f829bf3d7472**: Vascular Anatomy Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-518f3e07818e2c76"></a>
- **M08-CAP-ENCOUNTER-518f3e07818e2c76**: Surgical Approach
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-ca06eefa18d99ef1"></a>
- **M08-CAP-ENCOUNTER-ca06eefa18d99ef1**: Navigation Data Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-3bb53df5a05ade9f"></a>
- **M08-CAP-ENCOUNTER-3bb53df5a05ade9f**: Neurophysiology Plan
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-5996759cbd020112"></a>
- **M08-CAP-ENCOUNTER-5996759cbd020112**: Blood Management Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-ad43088485ce1e6e"></a>
- **M08-CAP-ENCOUNTER-ad43088485ce1e6e**: Device Requirements
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-fe3a1cfee56c7c43"></a>
- **M08-CAP-ENCOUNTER-fe3a1cfee56c7c43**: Implant Requirements
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-ad10c429d21bb80c"></a>
- **M08-CAP-ENCOUNTER-ad10c429d21bb80c**: Risk Documentation
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-1f8b3f8a6e3241d5"></a>
- **M08-CAP-ENCOUNTER-1f8b3f8a6e3241d5**: Final Surgical Plan
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-bfb737d3f44b3c35"></a>
- **M08-CAP-ENCOUNTER-bfb737d3f44b3c35**: Digital Capabilities:
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-5bf44bb05d84bb14"></a>
- **M08-CAP-ENCOUNTER-5bf44bb05d84bb14**: Imaging Fusion Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-df18797b43b127c3"></a>
- **M08-CAP-ENCOUNTER-df18797b43b127c3**: 3D Anatomical Modeling Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-4dc99c17c9be3643"></a>
- **M08-CAP-ENCOUNTER-4dc99c17c9be3643**: Procedure Simulation Context
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-007c953ebc7639b3"></a>
- **M08-CAP-ENCOUNTER-007c953ebc7639b3**: Planning Version History
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-ce64b9865f003086"></a>
- **M08-CAP-ENCOUNTER-ce64b9865f003086**: Decision Traceability
  Origin: original 5120

<a id="M08-CAP-ENCOUNTER-dc16b04a65b9e339"></a>
- **M08-CAP-ENCOUNTER-dc16b04a65b9e339**: Track recovery and functional outcomes after pediatric neurosurgical procedures.
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-4b67be3b4875be86"></a>
- **M08-CAP-ENCOUNTER-4b67be3b4875be86**: Baseline Neurological Status
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-79c8bf6fcfd11721"></a>
- **M08-CAP-ENCOUNTER-79c8bf6fcfd11721**: Postoperative Neurological Status
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-fc12f44c0fcec874"></a>
- **M08-CAP-ENCOUNTER-fc12f44c0fcec874**: Pain Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-d2bb402b05fbc1d3"></a>
- **M08-CAP-ENCOUNTER-d2bb402b05fbc1d3**: Motor Function
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-36e66d57de9d96fe"></a>
- **M08-CAP-ENCOUNTER-36e66d57de9d96fe**: Speech Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-e651b503ed8799b6"></a>
- **M08-CAP-ENCOUNTER-e651b503ed8799b6**: Swallowing Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-94dc7f863fbef7c4"></a>
- **M08-CAP-ENCOUNTER-94dc7f863fbef7c4**: Cognitive Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-b159fac809f357aa"></a>
- **M08-CAP-ENCOUNTER-b159fac809f357aa**: Seizure Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-0b7719e5e8b3ce00"></a>
- **M08-CAP-ENCOUNTER-0b7719e5e8b3ce00**: Wound Status
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-ba9d88315635912e"></a>
- **M08-CAP-ENCOUNTER-ba9d88315635912e**: Device Status
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-0165523a336a3cb1"></a>
- **M08-CAP-ENCOUNTER-0165523a336a3cb1**: School Reintegration Context
  Origin: original 5122

<a id="M08-CAP-ENCOUNTER-a345e32468d00bdd"></a>
- **M08-CAP-ENCOUNTER-a345e32468d00bdd**: Psychology
  Origin: original 5122, original 5167

<a id="M08-CAP-ENCOUNTER-087ffec1f651fb3a"></a>
- **M08-CAP-ENCOUNTER-087ffec1f651fb3a**: Connect neurosurgical procedures with pathology, postoperative imaging and oncological treatment planning.
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-52f7834a10a9c9ac"></a>
- **M08-CAP-ENCOUNTER-52f7834a10a9c9ac**: Anatomical Site
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-3afc6a2b74620b7a"></a>
- **M08-CAP-ENCOUNTER-3afc6a2b74620b7a**: Operative Findings
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-b1f97d8aeac77e13"></a>
- **M08-CAP-ENCOUNTER-b1f97d8aeac77e13**: Postoperative MRI
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-c0a44ce92c076bee"></a>
- **M08-CAP-ENCOUNTER-c0a44ce92c076bee**: Surgical Complications
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-eb6a68bc455581a8"></a>
- **M08-CAP-ENCOUNTER-eb6a68bc455581a8**: CSF Complications
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-c399ce2cf568aa4f"></a>
- **M08-CAP-ENCOUNTER-c399ce2cf568aa4f**: Adjuvant Treatment Context
  Origin: original 5131

<a id="M08-CAP-ENCOUNTER-94e1aa1d6b41b736"></a>
- **M08-CAP-ENCOUNTER-94e1aa1d6b41b736**: Maintain a lifetime traceable record of radiotherapy delivered for pediatric CNS tumors.
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-f4005ba884b6e4d5"></a>
- **M08-CAP-ENCOUNTER-f4005ba884b6e4d5**: Radiotherapy Indication
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-bf0acdf97b47ab48"></a>
- **M08-CAP-ENCOUNTER-bf0acdf97b47ab48**: Treatment Site
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-2c52c3febff18e35"></a>
- **M08-CAP-ENCOUNTER-2c52c3febff18e35**: Treatment Technique
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-e27927ff144a206e"></a>
- **M08-CAP-ENCOUNTER-e27927ff144a206e**: Dose Context
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-56b61801b45621ac"></a>
- **M08-CAP-ENCOUNTER-56b61801b45621ac**: Fractionation Context
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-a7114546bf221f8b"></a>
- **M08-CAP-ENCOUNTER-a7114546bf221f8b**: Treatment Dates
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-8b5432c17242bebe"></a>
- **M08-CAP-ENCOUNTER-8b5432c17242bebe**: Cranial Exposure
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-9d12f9116975c81c"></a>
- **M08-CAP-ENCOUNTER-9d12f9116975c81c**: Spinal Exposure
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-c7305e42886af921"></a>
- **M08-CAP-ENCOUNTER-c7305e42886af921**: Critical Structure Context
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-76a795090fc83829"></a>
- **M08-CAP-ENCOUNTER-76a795090fc83829**: Acute Toxicity
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-3ee44ccb334aa398"></a>
- **M08-CAP-ENCOUNTER-3ee44ccb334aa398**: Follow-up Imaging
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-b2b85abe5f357fec"></a>
- **M08-CAP-ENCOUNTER-b2b85abe5f357fec**: Late-effect Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-3e2e1272f2bd2b07"></a>
- **M08-CAP-ENCOUNTER-3e2e1272f2bd2b07**: Secondary Malignancy Context
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-8fa0f06de0f7321a"></a>
- **M08-CAP-ENCOUNTER-8fa0f06de0f7321a**: Long-term Integration:
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-a2ec9bf30d0dd0b0"></a>
- **M08-CAP-ENCOUNTER-a2ec9bf30d0dd0b0**: Endocrine Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-82fe5bfbe6ee302f"></a>
- **M08-CAP-ENCOUNTER-82fe5bfbe6ee302f**: Neurocognitive Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-7bee8335054deeaa"></a>
- **M08-CAP-ENCOUNTER-7bee8335054deeaa**: Hearing Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-15812df0176b471b"></a>
- **M08-CAP-ENCOUNTER-15812df0176b471b**: Vision Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-6d9a941c547c5d02"></a>
- **M08-CAP-ENCOUNTER-6d9a941c547c5d02**: Vascular Surveillance
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-8bf61b2b633fc7e7"></a>
- **M08-CAP-ENCOUNTER-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 5133

<a id="M08-CAP-ENCOUNTER-f3dfb05d2cbd1933"></a>
- **M08-CAP-ENCOUNTER-f3dfb05d2cbd1933**: Provide structured longitudinal management of psychological and psychotherapeutic interventions without unnecessarily exposing confidential session content.
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-8e96619c8dca4b93"></a>
- **M08-CAP-ENCOUNTER-8e96619c8dca4b93**: Functions:
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-0cafb61738b4fb2c"></a>
- **M08-CAP-ENCOUNTER-0cafb61738b4fb2c**: Therapy Type
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-2cf2b84939a9ee1d"></a>
- **M08-CAP-ENCOUNTER-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-42119430ca78d00d"></a>
- **M08-CAP-ENCOUNTER-42119430ca78d00d**: Attendance
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-99232a097b3eb787"></a>
- **M08-CAP-ENCOUNTER-99232a097b3eb787**: Progress Context
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-d889a755becf4a5a"></a>
- **M08-CAP-ENCOUNTER-d889a755becf4a5a**: Family Intervention Context
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-9bbec08e146eac77"></a>
- **M08-CAP-ENCOUNTER-9bbec08e146eac77**: Privacy Architecture:
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-ce914b044fb5fa3b"></a>
- **M08-CAP-ENCOUNTER-ce914b044fb5fa3b**: Clinical Summary Layer
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-548f75e5795d5fc2"></a>
- **M08-CAP-ENCOUNTER-548f75e5795d5fc2**: Restricted Session-note Layer
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-3e780e074f5cc321"></a>
- **M08-CAP-ENCOUNTER-3e780e074f5cc321**: Consent-aware Sharing
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-8deb81f02b2bfc0e"></a>
- **M08-CAP-ENCOUNTER-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-329caaaf376c0bdd"></a>
- **M08-CAP-ENCOUNTER-329caaaf376c0bdd**: Guardian-access Rules
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-79b63a83bc7d1c15"></a>
- **M08-CAP-ENCOUNTER-79b63a83bc7d1c15**: Audit Trail
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-77fb8ef2bf85b427"></a>
- **M08-CAP-ENCOUNTER-77fb8ef2bf85b427**: Interoperability:
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-3ab5393bc711e30c"></a>
- **M08-CAP-ENCOUNTER-3ab5393bc711e30c**: Psychiatry
  Origin: original 5167

<a id="M08-CAP-ENCOUNTER-a1c2cf6fd73864d4"></a>
- **M08-CAP-ENCOUNTER-a1c2cf6fd73864d4**: School Support Context
  Origin: original 5167

## Preserved source metadata

<a id="M08-CAP-ENCOUNTER-b33335e6828e3437"></a>
- **M08-CAP-ENCOUNTER-b33335e6828e3437**: # Doctor Portal

<a id="M08-CAP-ENCOUNTER-2f5fdcca89ef8e56"></a>
- **M08-CAP-ENCOUNTER-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M08-CAP-ENCOUNTER-6f33acf3afb37064**: ---

<a id="M08-CAP-ENCOUNTER-19addde118ab4f35"></a>
- **M08-CAP-ENCOUNTER-19addde118ab4f35**: # Core Features

<a id="M08-CAP-ENCOUNTER-2ca411624f226454"></a>
- **M08-CAP-ENCOUNTER-2ca411624f226454**: # Patient Management

<a id="M08-CAP-ENCOUNTER-5cb5abfccde681da"></a>
- **M08-CAP-ENCOUNTER-5cb5abfccde681da**: # Appointment Management

<a id="M08-CAP-ENCOUNTER-e86fe0567bf9a217"></a>
- **M08-CAP-ENCOUNTER-e86fe0567bf9a217**: # Telemedicine

<a id="M08-CAP-ENCOUNTER-7a365d914338b8d3"></a>
- **M08-CAP-ENCOUNTER-7a365d914338b8d3**: # AI Features

<a id="M08-CAP-ENCOUNTER-efc101e38d418651"></a>
- **M08-CAP-ENCOUNTER-efc101e38d418651**: # Security

<a id="M08-CAP-ENCOUNTER-9879a69a15c5a50a"></a>
- **M08-CAP-ENCOUNTER-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M08-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M08-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation

<a id="M08-CAP-ENCOUNTER-13215ef954107ab7"></a>
- **M08-CAP-ENCOUNTER-13215ef954107ab7**: # Pediatric Heart Surgery Registry

<a id="M08-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M08-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports

<a id="M08-CAP-ENCOUNTER-ac39f46e587312bc"></a>
- **M08-CAP-ENCOUNTER-ac39f46e587312bc**: # Pediatric Dialysis Registry

<a id="M08-CAP-ENCOUNTER-491af60cf0c84c2f"></a>
- **M08-CAP-ENCOUNTER-491af60cf0c84c2f**: # Pediatric Endoscopy Archive

<a id="M08-CAP-ENCOUNTER-ec136c8e8bcae3c3"></a>
- **M08-CAP-ENCOUNTER-ec136c8e8bcae3c3**: # Pediatric Bone Marrow Registry

<a id="M08-CAP-ENCOUNTER-61ba48ba90726dac"></a>
- **M08-CAP-ENCOUNTER-61ba48ba90726dac**: # Pediatric Surgical Procedure Registry

<a id="M08-CAP-ENCOUNTER-fdd6a4cd05d95581"></a>
- **M08-CAP-ENCOUNTER-fdd6a4cd05d95581**: # Pediatric Trauma Surgery Registry

<a id="M08-CAP-ENCOUNTER-d5580104fa9ebcce"></a>
- **M08-CAP-ENCOUNTER-d5580104fa9ebcce**: # Pediatric Intensive Care Surgical Registry

<a id="M08-CAP-ENCOUNTER-0076785253ee82a7"></a>
- **M08-CAP-ENCOUNTER-0076785253ee82a7**: # Pediatric Minimally Invasive Surgery Registry

<a id="M08-CAP-ENCOUNTER-a0058ba21558ef9f"></a>
- **M08-CAP-ENCOUNTER-a0058ba21558ef9f**: # Pediatric Surgical Rehabilitation Planner

<a id="M08-CAP-ENCOUNTER-21d94006fa494f95"></a>
- **M08-CAP-ENCOUNTER-21d94006fa494f95**: Integrates

<a id="M08-CAP-ENCOUNTER-6510c5c511a879bc"></a>
- **M08-CAP-ENCOUNTER-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-ENCOUNTER-b34f593f0f83a1d1"></a>
- **M08-CAP-ENCOUNTER-b34f593f0f83a1d1**: Core Functions:

<a id="M08-CAP-ENCOUNTER-b88b375a44ccd619"></a>
- **M08-CAP-ENCOUNTER-b88b375a44ccd619**: Status:

<a id="M08-CAP-ENCOUNTER-fd85b703c00f8755"></a>
- **M08-CAP-ENCOUNTER-fd85b703c00f8755**: MVP Relevance:

<a id="M08-CAP-ENCOUNTER-b3604d24a08b400e"></a>
- **M08-CAP-ENCOUNTER-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
