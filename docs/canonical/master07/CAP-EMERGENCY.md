# CORE-CAP-EMERGENCY — shared capability and profiles

MASTER-07 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: EmergencySummary, ClinicianAssessment, EscalationTask, Acknowledgement. Dependencies: CAP-EMERGENCY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-MENTAL-CRISIS

Original IDs: 3995, 3996, 4840, 5168.

Assessment, protective factors, escalation, emergency disposition and follow-up remain human-led; preserve explicit prohibition of autonomous risk determination.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-NEUROSURG-SHUNT-URGENT

Original IDs: 5105.

Suspected shunt malfunction uses current verified configuration and baseline/history to support urgent clinical assessment. Neither a model result nor missing data may delay evaluation or exclude malfunction.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-NEONATAL-RESUSCITATION

Original IDs: 2345, 3025.

Preserve initial stabilization, timed airway/compression/oxygen/administration and outcome documentation. Guideline intent requires a named approved version and qualified team; the system does not generate or autonomously execute resuscitation instructions.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-EMERGENCY-CORE

Original IDs: 831, 2339, 3007.

Shared emergency records retain fever, seizures, trauma, poisoning/admissions, dehydration, respiratory failure and pediatric resuscitation scope. A registry is not an emergency dispatch or autonomous triage service.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-EYE-EMERGENCY

Original IDs: 1068, 4741, 4969.

Eye emergency profiles retain acute vision loss, chemical burns, globe/orbital/corneal/anterior/posterior injury, laterality/time and visual recovery; diagrams do not require delaying urgent care for imaging.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-AIRWAY-DENTAL

Original IDs: 1088, 4780.

Airway obstruction/foreign body and odontogenic spread are distinct emergency profiles sharing human escalation. Preserve dental origin, drainage/extraction/referral and antibiotic history without automated exclusion or prescribing.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-SKIN-EMERGENCY

Original IDs: 1108.

Severe skin/allergic emergency profile preserves named SJS/TEN and severe-reaction scope; no model-only diagnosis or unsupervised medication action.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-SURGICAL-EMERGENCY

Original IDs: 1138, 4909, 4943.

Acute abdomen/obstruction/trauma and ovarian/testicular emergencies retain different anatomy, laterality, onset, viability/preservation and procedural contexts. Automated systems cannot rule out torsion or delay specialist assessment.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-ALLERGY-ACTION

Original IDs: 4098.

Individualized allergy/anaphylaxis plan preserves clinician/version, trigger/medication instruction, caregiver/school minimal scope and emergency contacts; sharing never creates a new prescription.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

### M06-PED-TRANSFER

Original IDs: 4678.

Prehospital transfer retains injury/transport chronology, interventions, sending/receiving identities and handover acknowledgement with time/source uncertainty. Cross-provider transport does not grant broad passport access.

Resolve permitted current summary → human urgent assessment and disposition → escalation recipient/acknowledgement → follow-up; emergency care never waits for model availability.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M07-CAP-EMERGENCY-716c08ca59da8e47"></a>
- **M07-CAP-EMERGENCY-716c08ca59da8e47**: Stores emergency medical events.
  Origin: original 831

<a id="M07-CAP-EMERGENCY-3a9aabe209294833"></a>
- **M07-CAP-EMERGENCY-3a9aabe209294833**: Fever
  Origin: original 831, original 2339, original 3007

<a id="M07-CAP-EMERGENCY-ea71b429588b66d8"></a>
- **M07-CAP-EMERGENCY-ea71b429588b66d8**: Seizures
  Origin: original 831, original 2339, original 3007

<a id="M07-CAP-EMERGENCY-5847fc43ebaedead"></a>
- **M07-CAP-EMERGENCY-5847fc43ebaedead**: Trauma
  Origin: original 831, original 1138, original 2339, original 3007, original 4741

<a id="M07-CAP-EMERGENCY-dd09ac90080afcb3"></a>
- **M07-CAP-EMERGENCY-dd09ac90080afcb3**: Poisoning
  Origin: original 831

<a id="M07-CAP-EMERGENCY-d212a31cd8b6d87a"></a>
- **M07-CAP-EMERGENCY-d212a31cd8b6d87a**: Hospital Admissions
  Origin: original 831

<a id="M07-CAP-EMERGENCY-7c1f011a0c08bae7"></a>
- **M07-CAP-EMERGENCY-7c1f011a0c08bae7**: Supports pediatric ophthalmic emergencies.
  Origin: original 1068

<a id="M07-CAP-EMERGENCY-01bbec9df504a305"></a>
- **M07-CAP-EMERGENCY-01bbec9df504a305**: Includes
  Origin: original 1068, original 1088, original 1108, original 1138

<a id="M07-CAP-EMERGENCY-a9291571a70a6328"></a>
- **M07-CAP-EMERGENCY-a9291571a70a6328**: Eye Injury
  Origin: original 1068

<a id="M07-CAP-EMERGENCY-0005aa7a9ff6d86e"></a>
- **M07-CAP-EMERGENCY-0005aa7a9ff6d86e**: Chemical Burns
  Origin: original 1068

<a id="M07-CAP-EMERGENCY-778cdd2bbd26b7ce"></a>
- **M07-CAP-EMERGENCY-778cdd2bbd26b7ce**: Acute Vision Loss
  Origin: original 1068

<a id="M07-CAP-EMERGENCY-f90cda67da0fe4b2"></a>
- **M07-CAP-EMERGENCY-f90cda67da0fe4b2**: Supports airway emergencies.
  Origin: original 1088

<a id="M07-CAP-EMERGENCY-43ea3fd019a228ab"></a>
- **M07-CAP-EMERGENCY-43ea3fd019a228ab**: Airway Obstruction
  Origin: original 1088

<a id="M07-CAP-EMERGENCY-4caba43f70456a81"></a>
- **M07-CAP-EMERGENCY-4caba43f70456a81**: Foreign Body
  Origin: original 1088, original 4741

<a id="M07-CAP-EMERGENCY-b2cd859edcd008bb"></a>
- **M07-CAP-EMERGENCY-b2cd859edcd008bb**: Emergency Protocols
  Origin: original 1088, original 1138

<a id="M07-CAP-EMERGENCY-872925bdd303c30a"></a>
- **M07-CAP-EMERGENCY-872925bdd303c30a**: Supports dermatologic emergencies.
  Origin: original 1108

<a id="M07-CAP-EMERGENCY-31599f2825bffd3d"></a>
- **M07-CAP-EMERGENCY-31599f2825bffd3d**: Stevens–Johnson Syndrome
  Origin: original 1108

<a id="M07-CAP-EMERGENCY-f55936d9e54fc3a8"></a>
- **M07-CAP-EMERGENCY-f55936d9e54fc3a8**: Toxic Epidermal Necrolysis
  Origin: original 1108

<a id="M07-CAP-EMERGENCY-2426e6a8b3f215fb"></a>
- **M07-CAP-EMERGENCY-2426e6a8b3f215fb**: Severe Allergic Reactions
  Origin: original 1108

<a id="M07-CAP-EMERGENCY-636b374a2c6f8afb"></a>
- **M07-CAP-EMERGENCY-636b374a2c6f8afb**: Supports emergency pediatric surgery.
  Origin: original 1138

<a id="M07-CAP-EMERGENCY-5f0780f34eee368a"></a>
- **M07-CAP-EMERGENCY-5f0780f34eee368a**: Acute Abdomen
  Origin: original 1138

<a id="M07-CAP-EMERGENCY-5314e45e8824de26"></a>
- **M07-CAP-EMERGENCY-5314e45e8824de26**: Intestinal Obstruction
  Origin: original 1138

<a id="M07-CAP-EMERGENCY-9582f661225344ab"></a>
- **M07-CAP-EMERGENCY-9582f661225344ab**: Supports pediatric emergency care.
  Origin: original 2339

<a id="M07-CAP-EMERGENCY-56f39823c8445c98"></a>
- **M07-CAP-EMERGENCY-56f39823c8445c98**: Supports neonatal resuscitation documentation.
  Origin: original 2345

<a id="M07-CAP-EMERGENCY-50ea77841ef8d7d1"></a>
- **M07-CAP-EMERGENCY-50ea77841ef8d7d1**: Initial Stabilization
  Origin: original 2345

<a id="M07-CAP-EMERGENCY-63d5c083ff461d46"></a>
- **M07-CAP-EMERGENCY-63d5c083ff461d46**: Resuscitation Steps
  Origin: original 2345

<a id="M07-CAP-EMERGENCY-4a14ec40d27d0a2e"></a>
- **M07-CAP-EMERGENCY-4a14ec40d27d0a2e**: Clinical Outcome
  Origin: original 2345

<a id="M07-CAP-EMERGENCY-17908f9ab6ca3296"></a>
- **M07-CAP-EMERGENCY-17908f9ab6ca3296**: Supports emergency pediatric care.
  Origin: original 3007

<a id="M07-CAP-EMERGENCY-afd8eb2c6b195ec2"></a>
- **M07-CAP-EMERGENCY-afd8eb2c6b195ec2**: Dehydration
  Origin: original 3007

<a id="M07-CAP-EMERGENCY-1ee452ae74b7deea"></a>
- **M07-CAP-EMERGENCY-1ee452ae74b7deea**: Respiratory Failure
  Origin: original 3007

<a id="M07-CAP-EMERGENCY-c20c9345be83aedb"></a>
- **M07-CAP-EMERGENCY-c20c9345be83aedb**: Pediatric Resuscitation
  Origin: original 3007

<a id="M07-CAP-EMERGENCY-d0890af0591bb30e"></a>
- **M07-CAP-EMERGENCY-d0890af0591bb30e**: Supports neonatal resuscitation.
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-2c8b7b756d493c42"></a>
- **M07-CAP-EMERGENCY-2c8b7b756d493c42**: Airway Management
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-66501ddb360f68b5"></a>
- **M07-CAP-EMERGENCY-66501ddb360f68b5**: Chest Compressions
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-ba0e4c581595a452"></a>
- **M07-CAP-EMERGENCY-ba0e4c581595a452**: Medication Administration
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-aa7fd799ef06de48"></a>
- **M07-CAP-EMERGENCY-aa7fd799ef06de48**: Oxygen Therapy
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-afad05b0df1935f2"></a>
- **M07-CAP-EMERGENCY-afad05b0df1935f2**: Resuscitation Documentation
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-df4b4ce66ee9ce31"></a>
- **M07-CAP-EMERGENCY-df4b4ce66ee9ce31**: Based on international neonatal resuscitation guidelines.
  Origin: original 3025

<a id="M07-CAP-EMERGENCY-92330ef6658d4741"></a>
- **M07-CAP-EMERGENCY-92330ef6658d4741**: Supports urgent pediatric mental health assessment.
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-4123f57ed4a68b73"></a>
- **M07-CAP-EMERGENCY-4123f57ed4a68b73**: Acute Behavioral Crisis
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-571fe2062d58fbb5"></a>
- **M07-CAP-EMERGENCY-571fe2062d58fbb5**: Severe Psychiatric Symptoms
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-f1185cfc06ac3ea2"></a>
- **M07-CAP-EMERGENCY-f1185cfc06ac3ea2**: Safety Assessment
  Origin: original 3995, original 4840, original 5168

<a id="M07-CAP-EMERGENCY-cf99e3f76d61d931"></a>
- **M07-CAP-EMERGENCY-cf99e3f76d61d931**: Crisis Escalation
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-ffc808a998eb5ef9"></a>
- **M07-CAP-EMERGENCY-ffc808a998eb5ef9**: Emergency Referral
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-576af0299110f685"></a>
- **M07-CAP-EMERGENCY-576af0299110f685**: Care Coordination
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-0d86946e629cc025"></a>
- **M07-CAP-EMERGENCY-0d86946e629cc025**: Follow-up
  Origin: original 3995, original 4840, original 4909, original 4943, original 4969, original 5168

<a id="M07-CAP-EMERGENCY-ffe0b4d4c0e8454b"></a>
- **M07-CAP-EMERGENCY-ffe0b4d4c0e8454b**: Designed for rapid escalation to appropriate emergency and specialist services.
  Origin: original 3995

<a id="M07-CAP-EMERGENCY-250d0685cd7df9bf"></a>
- **M07-CAP-EMERGENCY-250d0685cd7df9bf**: Supports clinician-led assessment of suicide and self-harm risk.
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-f468be0316491865"></a>
- **M07-CAP-EMERGENCY-f468be0316491865**: Risk Assessment
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-f18fb2e7254ebbc1"></a>
- **M07-CAP-EMERGENCY-f18fb2e7254ebbc1**: Protective Factors
  Origin: original 3996, original 4840

<a id="M07-CAP-EMERGENCY-1816dd2dcdf8cd08"></a>
- **M07-CAP-EMERGENCY-1816dd2dcdf8cd08**: Safety Planning
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-84534b99d51d1f96"></a>
- **M07-CAP-EMERGENCY-84534b99d51d1f96**: Follow-up Tracking
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-6fdd122d1dc2fe2d"></a>
- **M07-CAP-EMERGENCY-6fdd122d1dc2fe2d**: Family Involvement
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-35a5b6383bb47b46"></a>
- **M07-CAP-EMERGENCY-35a5b6383bb47b46**: Emergency Escalation
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-4b31b6850229e34f"></a>
- **M07-CAP-EMERGENCY-4b31b6850229e34f**: The system does not independently determine risk or replace emergency clinical assessment.
  Origin: original 3996

<a id="M07-CAP-EMERGENCY-238fa304df5ba9f3"></a>
- **M07-CAP-EMERGENCY-238fa304df5ba9f3**: Centralizes individualized emergency allergy plans.
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-6b8efe950bab8a0b"></a>
- **M07-CAP-EMERGENCY-6b8efe950bab8a0b**: Anaphylaxis Plans
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-7d45ac7f237e1f95"></a>
- **M07-CAP-EMERGENCY-7d45ac7f237e1f95**: Medication Instructions
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-f5641a22c80654d5"></a>
- **M07-CAP-EMERGENCY-f5641a22c80654d5**: Trigger Avoidance
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-dfd3acd6ebdbca2f"></a>
- **M07-CAP-EMERGENCY-dfd3acd6ebdbca2f**: School Plans
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-9c2bf347f0ed300c"></a>
- **M07-CAP-EMERGENCY-9c2bf347f0ed300c**: Caregiver Instructions
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-80e3ef36950805e9"></a>
- **M07-CAP-EMERGENCY-80e3ef36950805e9**: Emergency Contacts
  Origin: original 4098, original 5168

<a id="M07-CAP-EMERGENCY-423acc7e70f94400"></a>
- **M07-CAP-EMERGENCY-423acc7e70f94400**: Cross-border Access
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-f423370e9b686f89"></a>
- **M07-CAP-EMERGENCY-f423370e9b686f89**: Provides multilingual emergency information through the Medical Passport.
  Origin: original 4098

<a id="M07-CAP-EMERGENCY-3c5c59fe2bf6d8f4"></a>
- **M07-CAP-EMERGENCY-3c5c59fe2bf6d8f4**: Preserve critical clinical information from the point of injury through emergency transport and hospital admission.
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-0f60f16bf21943a2"></a>
- **M07-CAP-EMERGENCY-0f60f16bf21943a2**: Injury Time
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-0d9794e42e4f8b43"></a>
- **M07-CAP-EMERGENCY-0d9794e42e4f8b43**: Injury Location Context
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-d15c2c41ca949d07"></a>
- **M07-CAP-EMERGENCY-d15c2c41ca949d07**: Mechanism
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-5039022eacf5aabd"></a>
- **M07-CAP-EMERGENCY-5039022eacf5aabd**: Initial Clinical Status
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-a158f45f0f200d67"></a>
- **M07-CAP-EMERGENCY-a158f45f0f200d67**: Vital Signs
  Origin: original 4678, original 4909

<a id="M07-CAP-EMERGENCY-3d786074e7045c5a"></a>
- **M07-CAP-EMERGENCY-3d786074e7045c5a**: Neurological Status
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-165b044cde4adfa6"></a>
- **M07-CAP-EMERGENCY-165b044cde4adfa6**: Airway Intervention
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-f5e42beb9e8342f3"></a>
- **M07-CAP-EMERGENCY-f5e42beb9e8342f3**: Respiratory Support
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-c45b4b3a917b95e8"></a>
- **M07-CAP-EMERGENCY-c45b4b3a917b95e8**: Circulatory Support
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-aade0c2176e0195a"></a>
- **M07-CAP-EMERGENCY-aade0c2176e0195a**: Immobilization
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-3cfa39200ce0ea10"></a>
- **M07-CAP-EMERGENCY-3cfa39200ce0ea10**: Medication
  Origin: original 4678, original 4741, original 4780, original 4840, original 4969

<a id="M07-CAP-EMERGENCY-228b18d13e8b34f1"></a>
- **M07-CAP-EMERGENCY-228b18d13e8b34f1**: Procedures
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-c5f618451e1ccb63"></a>
- **M07-CAP-EMERGENCY-c5f618451e1ccb63**: Transport Mode
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-bea0121a79b2b1c0"></a>
- **M07-CAP-EMERGENCY-bea0121a79b2b1c0**: Receiving Facility
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-e344d5dbeafcd854"></a>
- **M07-CAP-EMERGENCY-e344d5dbeafcd854**: Transfer Timeline
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-f761ca777491affb"></a>
- **M07-CAP-EMERGENCY-f761ca777491affb**: Handover Documentation
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-77fb8ef2bf85b427"></a>
- **M07-CAP-EMERGENCY-77fb8ef2bf85b427**: Interoperability:
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-47a997399378008e"></a>
- **M07-CAP-EMERGENCY-47a997399378008e**: Supports structured transfer of clinically relevant information between emergency services and receiving institutions.
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-54700f0a8d7678ea"></a>
- **M07-CAP-EMERGENCY-54700f0a8d7678ea**: Medical Passport Integration:
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-f00cee22f9fa6b36"></a>
- **M07-CAP-EMERGENCY-f00cee22f9fa6b36**: Authorized emergency information may provide critical diagnoses, allergies, medications and implanted-device data.
  Origin: original 4678

<a id="M07-CAP-EMERGENCY-450533e3176d906a"></a>
- **M07-CAP-EMERGENCY-450533e3176d906a**: Provide rapid structured management of pediatric ocular trauma and emergency eye conditions.
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-65f608048b61c2d2"></a>
- **M07-CAP-EMERGENCY-65f608048b61c2d2**: Injury Event
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-24441c42a43d267e"></a>
- **M07-CAP-EMERGENCY-24441c42a43d267e**: Injury Mechanism
  Origin: original 4741, original 4969

<a id="M07-CAP-EMERGENCY-fcfb95b9307c19a1"></a>
- **M07-CAP-EMERGENCY-fcfb95b9307c19a1**: Visual Acuity
  Origin: original 4741, original 4969

<a id="M07-CAP-EMERGENCY-6594c6b363ad226d"></a>
- **M07-CAP-EMERGENCY-6594c6b363ad226d**: External Eye Injury
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-699f34b47986b8ed"></a>
- **M07-CAP-EMERGENCY-699f34b47986b8ed**: Corneal Injury
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-1429cc63c2ebfc7f"></a>
- **M07-CAP-EMERGENCY-1429cc63c2ebfc7f**: Globe Injury
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-c9791db4939d4356"></a>
- **M07-CAP-EMERGENCY-c9791db4939d4356**: Orbital Injury
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-f487f068e51c281b"></a>
- **M07-CAP-EMERGENCY-f487f068e51c281b**: Chemical Exposure
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-a3241cf77d991407"></a>
- **M07-CAP-EMERGENCY-a3241cf77d991407**: Imaging
  Origin: original 4741, original 4780, original 4969, original 5105

<a id="M07-CAP-EMERGENCY-7d41ba3b23d4127e"></a>
- **M07-CAP-EMERGENCY-7d41ba3b23d4127e**: Emergency Procedures
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-bc506fdefc6e7e7b"></a>
- **M07-CAP-EMERGENCY-bc506fdefc6e7e7b**: Surgery
  Origin: original 4741, original 4969

<a id="M07-CAP-EMERGENCY-f1a4c63a0d8ef56a"></a>
- **M07-CAP-EMERGENCY-f1a4c63a0d8ef56a**: Complication Monitoring
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-68c2f3ec3d034dfb"></a>
- **M07-CAP-EMERGENCY-68c2f3ec3d034dfb**: Visual Recovery
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-0e677b785488bf1e"></a>
- **M07-CAP-EMERGENCY-0e677b785488bf1e**: Emergency Workflow:
  Origin: original 4741, original 4909, original 4943

<a id="M07-CAP-EMERGENCY-233a0ef40441d5ca"></a>
- **M07-CAP-EMERGENCY-233a0ef40441d5ca**: Presentation → Immediate Assessment → Imaging/Examination → Intervention → Follow-up → Visual Rehabilitation.
  Origin: original 4741

<a id="M07-CAP-EMERGENCY-2f27e552d723d07f"></a>
- **M07-CAP-EMERGENCY-2f27e552d723d07f**: Integrations:
  Origin: original 4741, original 4780, original 4969

<a id="M07-CAP-EMERGENCY-ef963e812dc56963"></a>
- **M07-CAP-EMERGENCY-ef963e812dc56963**: Emergency Medicine
  Origin: original 4741, original 4780, original 4969

<a id="M07-CAP-EMERGENCY-34f989613ab16060"></a>
- **M07-CAP-EMERGENCY-34f989613ab16060**: Ophthalmology
  Origin: original 4741, original 4969

<a id="M07-CAP-EMERGENCY-c062dc13ee048cfd"></a>
- **M07-CAP-EMERGENCY-c062dc13ee048cfd**: Radiology
  Origin: original 4741, original 4969

<a id="M07-CAP-EMERGENCY-7432919641ce156b"></a>
- **M07-CAP-EMERGENCY-7432919641ce156b**: Support rapid assessment and coordinated management of pediatric odontogenic infection and dental emergencies.
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-23e5bdaee80ce703"></a>
- **M07-CAP-EMERGENCY-23e5bdaee80ce703**: Dental Pain
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-a3bd89164ecb3970"></a>
- **M07-CAP-EMERGENCY-a3bd89164ecb3970**: Local Infection
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-68ba7e368a350b79"></a>
- **M07-CAP-EMERGENCY-68ba7e368a350b79**: Abscess
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-a4fd8800af32de35"></a>
- **M07-CAP-EMERGENCY-a4fd8800af32de35**: Facial Swelling
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-09ed4bc8392e7b15"></a>
- **M07-CAP-EMERGENCY-09ed4bc8392e7b15**: Fever Context
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-ff11d7d5bfa33528"></a>
- **M07-CAP-EMERGENCY-ff11d7d5bfa33528**: Tooth Origin
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-f3104248b1929a98"></a>
- **M07-CAP-EMERGENCY-f3104248b1929a98**: Airway Risk Context
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-583f456b27a118af"></a>
- **M07-CAP-EMERGENCY-583f456b27a118af**: Antibiotic Exposure
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-a870e90178ac4339"></a>
- **M07-CAP-EMERGENCY-a870e90178ac4339**: Drainage
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-ef6cb29323b2db9d"></a>
- **M07-CAP-EMERGENCY-ef6cb29323b2db9d**: Endodontic Procedure
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-ff732e07b1f22c58"></a>
- **M07-CAP-EMERGENCY-ff732e07b1f22c58**: Extraction
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-ba94c800db592316"></a>
- **M07-CAP-EMERGENCY-ba94c800db592316**: Hospital Referral
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-e9bb1b7104aa25cd"></a>
- **M07-CAP-EMERGENCY-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-86974c59b631925c"></a>
- **M07-CAP-EMERGENCY-86974c59b631925c**: Complication Surveillance
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-b2ad81aeb8f82909"></a>
- **M07-CAP-EMERGENCY-b2ad81aeb8f82909**: Dentistry
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-8e2f4759042f915d"></a>
- **M07-CAP-EMERGENCY-8e2f4759042f915d**: Maxillofacial Surgery
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-a4592f25affcc927"></a>
- **M07-CAP-EMERGENCY-a4592f25affcc927**: ENT
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-813d0ab6af854e92"></a>
- **M07-CAP-EMERGENCY-813d0ab6af854e92**: Infectious Disease
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-7605ce62d32022f4"></a>
- **M07-CAP-EMERGENCY-7605ce62d32022f4**: Pharmacy
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-07f8d474b8b4141c"></a>
- **M07-CAP-EMERGENCY-07f8d474b8b4141c**: Safety:
  Origin: original 4780, original 4909, original 4943, original 4969, original 5105, original 5168

<a id="M07-CAP-EMERGENCY-c6fcd5eb5fd6967b"></a>
- **M07-CAP-EMERGENCY-c6fcd5eb5fd6967b**: Potentially severe spreading infection or airway involvement can enter clinician-defined escalation workflows.
  Origin: original 4780

<a id="M07-CAP-EMERGENCY-59369d8751c567ca"></a>
- **M07-CAP-EMERGENCY-59369d8751c567ca**: Provide a controlled clinical workflow for urgent pediatric mental-health assessment and crisis coordination.
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-7b071cdbcc05f6ba"></a>
- **M07-CAP-EMERGENCY-7b071cdbcc05f6ba**: Crisis Episode
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-3d04cbaeef3af546"></a>
- **M07-CAP-EMERGENCY-3d04cbaeef3af546**: Presenting Concern
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-26e2b27371523ee8"></a>
- **M07-CAP-EMERGENCY-26e2b27371523ee8**: Mental Status
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-f07269feab354fd2"></a>
- **M07-CAP-EMERGENCY-f07269feab354fd2**: Acute Behavioral Change
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-a9c9121cc7e5811e"></a>
- **M07-CAP-EMERGENCY-a9c9121cc7e5811e**: Family/Guardian Context
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-d03edd02840f9b6c"></a>
- **M07-CAP-EMERGENCY-d03edd02840f9b6c**: Medical Context
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-73e74ef198773665"></a>
- **M07-CAP-EMERGENCY-73e74ef198773665**: Emergency Assessment
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-4195fc8e31b7b0e1"></a>
- **M07-CAP-EMERGENCY-4195fc8e31b7b0e1**: Specialist Consultation
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-628421bef2a2789e"></a>
- **M07-CAP-EMERGENCY-628421bef2a2789e**: Safety Plan
  Origin: original 4840, original 5168

<a id="M07-CAP-EMERGENCY-f4f91c94b6692199"></a>
- **M07-CAP-EMERGENCY-f4f91c94b6692199**: Disposition
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-f201cbfb32217cee"></a>
- **M07-CAP-EMERGENCY-f201cbfb32217cee**: Hospitalization
  Origin: original 4840, original 5168

<a id="M07-CAP-EMERGENCY-bb30eb4c7e16b7a0"></a>
- **M07-CAP-EMERGENCY-bb30eb4c7e16b7a0**: Continuity-of-Care Handover
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-6bc5db5610eb1feb"></a>
- **M07-CAP-EMERGENCY-6bc5db5610eb1feb**: Safety Governance:
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-b6cea28fd7cdd6e7"></a>
- **M07-CAP-EMERGENCY-b6cea28fd7cdd6e7**: Human Clinical Assessment Required
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-cf88214980dcfd5b"></a>
- **M07-CAP-EMERGENCY-cf88214980dcfd5b**: Clear Escalation Pathways
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-8deb81f02b2bfc0e"></a>
- **M07-CAP-EMERGENCY-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-8a41518ad3d9aba2"></a>
- **M07-CAP-EMERGENCY-8a41518ad3d9aba2**: Time-stamped Decisions
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-71a765590c1d37b3"></a>
- **M07-CAP-EMERGENCY-71a765590c1d37b3**: Clinical Accountability
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-79b63a83bc7d1c15"></a>
- **M07-CAP-EMERGENCY-79b63a83bc7d1c15**: Audit Trail
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-6d9fe0c9fe0544d9"></a>
- **M07-CAP-EMERGENCY-6d9fe0c9fe0544d9**: AI Role:
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-c036113be69a98c9"></a>
- **M07-CAP-EMERGENCY-c036113be69a98c9**: AI may organize information and identify missing assessment elements but does not make autonomous emergency disposition decisions.
  Origin: original 4840

<a id="M07-CAP-EMERGENCY-98edb19fabf5f455"></a>
- **M07-CAP-EMERGENCY-98edb19fabf5f455**: Support rapid structured coordination of suspected or confirmed pediatric ovarian torsion and other acute gynecological presentations.
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-4606283c063c9af2"></a>
- **M07-CAP-EMERGENCY-4606283c063c9af2**: Acute Pain
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-f1e80615e246bb6e"></a>
- **M07-CAP-EMERGENCY-f1e80615e246bb6e**: Symptom Onset
  Origin: original 4909, original 4943

<a id="M07-CAP-EMERGENCY-a2e99a7b1de483d8"></a>
- **M07-CAP-EMERGENCY-a2e99a7b1de483d8**: Laterality
  Origin: original 4909, original 4943, original 4969

<a id="M07-CAP-EMERGENCY-f79af291ff84fc7b"></a>
- **M07-CAP-EMERGENCY-f79af291ff84fc7b**: Clinical Assessment
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-36e4e89ad9679486"></a>
- **M07-CAP-EMERGENCY-36e4e89ad9679486**: Laboratory Context
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-5032f26f1a690cb2"></a>
- **M07-CAP-EMERGENCY-5032f26f1a690cb2**: Ultrasound
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-e4b8831a0f5ade0c"></a>
- **M07-CAP-EMERGENCY-e4b8831a0f5ade0c**: Doppler Context
  Origin: original 4909, original 4943

<a id="M07-CAP-EMERGENCY-7d3da308312c36d9"></a>
- **M07-CAP-EMERGENCY-7d3da308312c36d9**: Surgical Consultation
  Origin: original 4909, original 4943

<a id="M07-CAP-EMERGENCY-f53ba0c0214c2b5f"></a>
- **M07-CAP-EMERGENCY-f53ba0c0214c2b5f**: Procedure
  Origin: original 4909, original 4943

<a id="M07-CAP-EMERGENCY-1e6d038e54c30b95"></a>
- **M07-CAP-EMERGENCY-1e6d038e54c30b95**: Ovarian Preservation Context
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-0d60c7320fa88689"></a>
- **M07-CAP-EMERGENCY-0d60c7320fa88689**: Pathology where applicable
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-6b013809774c93b3"></a>
- **M07-CAP-EMERGENCY-6b013809774c93b3**: Postoperative Monitoring
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-dd1bbc0cc6cbc210"></a>
- **M07-CAP-EMERGENCY-dd1bbc0cc6cbc210**: Recurrence Risk
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-0a2d6eedd3941a50"></a>
- **M07-CAP-EMERGENCY-0a2d6eedd3941a50**: Presentation → Assessment → Imaging → Specialist Review → Intervention → Follow-up.
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-0273ed965c2052aa"></a>
- **M07-CAP-EMERGENCY-0273ed965c2052aa**: The platform supports escalation but does not use automated rules to exclude torsion.
  Origin: original 4909

<a id="M07-CAP-EMERGENCY-1a7add3ae128aa27"></a>
- **M07-CAP-EMERGENCY-1a7add3ae128aa27**: Support rapid clinical coordination for acute pediatric scrotal and testicular presentations.
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-d929dde3cb2892d8"></a>
- **M07-CAP-EMERGENCY-d929dde3cb2892d8**: Pain
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-044f2ae42087fb45"></a>
- **M07-CAP-EMERGENCY-044f2ae42087fb45**: Examination
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-3d8ded55dced9b0b"></a>
- **M07-CAP-EMERGENCY-3d8ded55dced9b0b**: Associated Symptoms
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-530021a8e96c0f37"></a>
- **M07-CAP-EMERGENCY-530021a8e96c0f37**: Ultrasound Context
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-7595da5c093f7d86"></a>
- **M07-CAP-EMERGENCY-7595da5c093f7d86**: Testicular Viability Context
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-caa46fc8b5145e38"></a>
- **M07-CAP-EMERGENCY-caa46fc8b5145e38**: Contralateral Procedure Context
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-612ecd89632acb9f"></a>
- **M07-CAP-EMERGENCY-612ecd89632acb9f**: Postoperative Care
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-b66b653fbb90b8f0"></a>
- **M07-CAP-EMERGENCY-b66b653fbb90b8f0**: Long-term Testicular Health
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-035c4aa4ed6a208b"></a>
- **M07-CAP-EMERGENCY-035c4aa4ed6a208b**: Presentation → Immediate Assessment → Specialist Review → Intervention → Follow-up.
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-f908dbf13c63e4c4"></a>
- **M07-CAP-EMERGENCY-f908dbf13c63e4c4**: Automated systems must never be used to rule out torsion or delay urgent specialist assessment.
  Origin: original 4943

<a id="M07-CAP-EMERGENCY-ad2bcb97b343d328"></a>
- **M07-CAP-EMERGENCY-ad2bcb97b343d328**: Support rapid structured assessment and continuity of care following pediatric eye injury.
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-e1616986451ec451"></a>
- **M07-CAP-EMERGENCY-e1616986451ec451**: Time of Injury
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-e637fb12f5ceb884"></a>
- **M07-CAP-EMERGENCY-e637fb12f5ceb884**: External Injury
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-53b6713b0bf55912"></a>
- **M07-CAP-EMERGENCY-53b6713b0bf55912**: Anterior Segment
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-db67f20e10cc72d6"></a>
- **M07-CAP-EMERGENCY-db67f20e10cc72d6**: Posterior Segment Context
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-b2772384c648e711"></a>
- **M07-CAP-EMERGENCY-b2772384c648e711**: Foreign Body Context
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-6303bdd78ba2283b"></a>
- **M07-CAP-EMERGENCY-6303bdd78ba2283b**: Chemical Exposure Context
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-2faf57989b965c4c"></a>
- **M07-CAP-EMERGENCY-2faf57989b965c4c**: Emergency Procedure
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-9aacfcd18e6547ff"></a>
- **M07-CAP-EMERGENCY-9aacfcd18e6547ff**: Visual Outcome
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-e737751ef946fd5b"></a>
- **M07-CAP-EMERGENCY-e737751ef946fd5b**: Potentially sight-threatening presentations enter immediate clinician-defined emergency pathways.
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-9e9dbb804ca8197a"></a>
- **M07-CAP-EMERGENCY-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4969

<a id="M07-CAP-EMERGENCY-971952312dd23e4d"></a>
- **M07-CAP-EMERGENCY-971952312dd23e4d**: Support rapid access to clinically relevant historical information when shunt malfunction or other CSF diversion complications are suspected.
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-77be326ba9988815"></a>
- **M07-CAP-EMERGENCY-77be326ba9988815**: Current Shunt Configuration
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-4b67be3b4875be86"></a>
- **M07-CAP-EMERGENCY-4b67be3b4875be86**: Baseline Neurological Status
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-812ff73beb4d6ac2"></a>
- **M07-CAP-EMERGENCY-812ff73beb4d6ac2**: Previous Malfunction Pattern
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-64495309009178eb"></a>
- **M07-CAP-EMERGENCY-64495309009178eb**: Previous Revision
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-970ace8f4b31dfb0"></a>
- **M07-CAP-EMERGENCY-970ace8f4b31dfb0**: Current Symptoms
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-ea86cc93014651f0"></a>
- **M07-CAP-EMERGENCY-ea86cc93014651f0**: Vomiting Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-b6f2ecffd99f35ad"></a>
- **M07-CAP-EMERGENCY-b6f2ecffd99f35ad**: Headache Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-a8d55b3e12db6eb4"></a>
- **M07-CAP-EMERGENCY-a8d55b3e12db6eb4**: Consciousness Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-877cf83a566b0f36"></a>
- **M07-CAP-EMERGENCY-877cf83a566b0f36**: Vision Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-b159fac809f357aa"></a>
- **M07-CAP-EMERGENCY-b159fac809f357aa**: Seizure Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-5b94edad9bec04c1"></a>
- **M07-CAP-EMERGENCY-5b94edad9bec04c1**: Neurosurgical Assessment
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-1d56760e632bb2d6"></a>
- **M07-CAP-EMERGENCY-1d56760e632bb2d6**: Intervention
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-9029a8bbdb8a6553"></a>
- **M07-CAP-EMERGENCY-9029a8bbdb8a6553**: Outcome
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-bbf2edbbfacad60e"></a>
- **M07-CAP-EMERGENCY-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-22c584c696f80d9a"></a>
- **M07-CAP-EMERGENCY-22c584c696f80d9a**: Critical Device History Visibility
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-bb7b37cea3998074"></a>
- **M07-CAP-EMERGENCY-bb7b37cea3998074**: Previous Imaging Comparison Context
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-0574c5042c077005"></a>
- **M07-CAP-EMERGENCY-0574c5042c077005**: Emergency Neurosurgical Escalation
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-d15298918a19ed8d"></a>
- **M07-CAP-EMERGENCY-d15298918a19ed8d**: Medical Passport Integration
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-69b9280c663b8de3"></a>
- **M07-CAP-EMERGENCY-69b9280c663b8de3**: Automated assessment must never delay urgent neurosurgical evaluation.
  Origin: original 5105

<a id="M07-CAP-EMERGENCY-d961041fb4e597be"></a>
- **M07-CAP-EMERGENCY-d961041fb4e597be**: Provide rapid access to clinician-validated safety information during pediatric mental-health crises.
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-8e96619c8dca4b93"></a>
- **M07-CAP-EMERGENCY-8e96619c8dca4b93**: Functions:
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-257fbb5f622f23c2"></a>
- **M07-CAP-EMERGENCY-257fbb5f622f23c2**: Crisis Episode Registry
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-4370176f8243746a"></a>
- **M07-CAP-EMERGENCY-4370176f8243746a**: Current Clinical Concern
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-a2a22c4c8b8b2b2d"></a>
- **M07-CAP-EMERGENCY-a2a22c4c8b8b2b2d**: Previous Crisis Context
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-b72f2ebbd5c0f996"></a>
- **M07-CAP-EMERGENCY-b72f2ebbd5c0f996**: Protective Context
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-c9b067f01c20fb72"></a>
- **M07-CAP-EMERGENCY-c9b067f01c20fb72**: Medication Context
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-3839837a0710f97c"></a>
- **M07-CAP-EMERGENCY-3839837a0710f97c**: Emergency Evaluation
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-8e93323757ed4244"></a>
- **M07-CAP-EMERGENCY-8e93323757ed4244**: Discharge Plan
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-58f384e63547bf41"></a>
- **M07-CAP-EMERGENCY-58f384e63547bf41**: Recurrence Context
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-5a6870afa5c21480"></a>
- **M07-CAP-EMERGENCY-5a6870afa5c21480**: Workflow:
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-5aa81f4077c037d1"></a>
- **M07-CAP-EMERGENCY-5aa81f4077c037d1**: Concern
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-ee5015004de72642"></a>
- **M07-CAP-EMERGENCY-ee5015004de72642**: → Qualified Assessment
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-668a6667b28c4612"></a>
- **M07-CAP-EMERGENCY-668a6667b28c4612**: → Clinician-defined Risk Stratification
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-f30373d46fa0b43d"></a>
- **M07-CAP-EMERGENCY-f30373d46fa0b43d**: → Safety Intervention
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-a1dcb0d24ade0327"></a>
- **M07-CAP-EMERGENCY-a1dcb0d24ade0327**: → Emergency/Hospital Pathway where required
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-7c178bbca288adc1"></a>
- **M07-CAP-EMERGENCY-7c178bbca288adc1**: → Discharge
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-363c3c45d941e045"></a>
- **M07-CAP-EMERGENCY-363c3c45d941e045**: → Follow-up
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-dc20bc176bdee4c8"></a>
- **M07-CAP-EMERGENCY-dc20bc176bdee4c8**: Permissions:
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-0aa1c3e24936151e"></a>
- **M07-CAP-EMERGENCY-0aa1c3e24936151e**: Restricted Sensitive Information
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-39c5dc9895333297"></a>
- **M07-CAP-EMERGENCY-39c5dc9895333297**: Emergency-access Policy
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-329caaaf376c0bdd"></a>
- **M07-CAP-EMERGENCY-329caaaf376c0bdd**: Guardian-access Rules
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-e674652a630a2f53"></a>
- **M07-CAP-EMERGENCY-e674652a630a2f53**: Access Logging
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-4e876ecc7edb31f5"></a>
- **M07-CAP-EMERGENCY-4e876ecc7edb31f5**: Automated scoring never substitutes for qualified crisis assessment or emergency intervention.
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-920a1d230724ecf1"></a>
- **M07-CAP-EMERGENCY-920a1d230724ecf1**: MVP:
  Origin: original 5168

<a id="M07-CAP-EMERGENCY-3fec9e727a7538e6"></a>
- **M07-CAP-EMERGENCY-3fec9e727a7538e6**: CRITICAL
  Origin: original 5168

## Preserved source metadata

<a id="M07-CAP-EMERGENCY-10688939192eecef"></a>
- **M07-CAP-EMERGENCY-10688939192eecef**: # Pediatric Emergency Registry

<a id="M07-CAP-EMERGENCY-4fbeeb87456accf5"></a>
- **M07-CAP-EMERGENCY-4fbeeb87456accf5**: Supports

<a id="M07-CAP-EMERGENCY-5ba74d8fcc7b20cc"></a>
- **M07-CAP-EMERGENCY-5ba74d8fcc7b20cc**: Status

<a id="M07-CAP-EMERGENCY-d5232cbd3a326267"></a>
- **M07-CAP-EMERGENCY-d5232cbd3a326267**: Documentation

<a id="M07-CAP-EMERGENCY-6f33acf3afb37064"></a>
- **M07-CAP-EMERGENCY-6f33acf3afb37064**: ---

<a id="M07-CAP-EMERGENCY-bafaba28f9145eba"></a>
- **M07-CAP-EMERGENCY-bafaba28f9145eba**: # Pediatric Airway Emergency Module

<a id="M07-CAP-EMERGENCY-e528074b41764144"></a>
- **M07-CAP-EMERGENCY-e528074b41764144**: # Pediatric Surgical Emergency Module

<a id="M07-CAP-EMERGENCY-6510c5c511a879bc"></a>
- **M07-CAP-EMERGENCY-6510c5c511a879bc**: Purpose:

<a id="M07-CAP-EMERGENCY-b34f593f0f83a1d1"></a>
- **M07-CAP-EMERGENCY-b34f593f0f83a1d1**: Core Functions:

<a id="M07-CAP-EMERGENCY-b88b375a44ccd619"></a>
- **M07-CAP-EMERGENCY-b88b375a44ccd619**: Status:

<a id="M07-CAP-EMERGENCY-b3604d24a08b400e"></a>
- **M07-CAP-EMERGENCY-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-07/requirement_migration.json) · [Gap disposition](../../../audit/master-07/gap_disposition.json) · [Readiness gates](../../../audit/master-07/implementation_gate_matrix.json).
