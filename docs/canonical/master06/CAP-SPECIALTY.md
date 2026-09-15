# CORE-CAP-SPECIALTY — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M05-HEM-CORE

Original IDs: 980, 3241, 3259, 4161, 4200, 4976, 5000.

One hematology orchestration profile retains hemostasis, marrow failure, apheresis, hemovigilance, immune/genetic interfaces and adult transition. It delegates authoritative results, blood-bank releases and treatment orders.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-ANEMIA

Original IDs: 964, 3243, 4163, 4164, 4978, 4979.

Retain anemia subtypes, reticulocyte response, iron/vitamin/renal/inflammatory context, oral/IV iron history and menstrual/GI blood loss as distinct clinical contexts; no automatic diagnosis or iron prescription.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-HEMOGLOBIN

Original IDs: 965, 3244, 4166, 4167, 4981, 4982.

Sickle-cell and thalassemia remain distinct disease profiles sharing longitudinal infrastructure. Retain carrier/newborn screening, acute chest/stroke/splenic risk, hydroxyurea context, alloantibodies, MRI iron, chelation and endocrine/bone outcomes.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-BLEEDING

Original IDs: 966, 3245, 4174, 4175, 4176, 4984, 4985.

Preserve hemophilia, von Willebrand and rare factor/fibrinogen/platelet-function disorders separately; inhibitor and non-factor therapy, home treatment, dental/surgery and menstrual bleeding context remain explicit.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-CYTOPENIA

Original IDs: 3246, 3247, 4169, 4170, 4171, 4172, 4983, 4990, 4991.

Platelet/white-cell/multilineage marrow profiles retain qualitative platelet disease, cyclic neutropenia, named inherited syndromes, medication/toxin exposure, prophylaxis and transplant evaluation without equating every cytopenia.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-TRANSPLANT

Original IDs: 3128, 4186, 4187, 4188.

HSCT coordination retains donor search/HLA, conditioning, engraftment, GVHD, immune recovery and lifelong complications. Donor identity/permissions are separate, and no matching score determines eligibility.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-HEM-THROMBOSIS

Original IDs: 4177, 4178, 4987, 4989.

Venous/arterial/catheter/cerebral events, provoking factors, recurrence, post-thrombotic outcomes and genetic/acquired risk remain distinct; testing and anticoagulation decisions are specialist-led.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-CORE

Original IDs: 3121, 3140, 4201, 5126, 5150.

Oncology and CNS-specific orchestration are profiles of the shared specialty owner. Preserve tumor-specific interfaces, molecular evolution, rehabilitation, palliative and lifelong developmental care without fragmenting source records.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-DIAGNOSIS

Original IDs: 4203, 4209, 4221, 5129.

Multidisciplinary diagnostic integration retains specimen/surgical source, DNA/RNA/epigenetic context, lab/pathologist/report versions, external review and tumor-board evidence. Signed pathology and reclassification remain attributable.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-LEUKEMIA

Original IDs: 3123, 4204, 4205, 4206.

ALL/AML/mixed-lineage profiles retain immunophenotype, cytogenetic/molecular risk, treatment phases and MRD assay/time-point/sensitivity context; missing MRD never implies remission.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-CNS

Original IDs: 3125, 4208, 5136, 5137, 5138, 5139, 5140, 5141.

Distinct glioma/embryonal/ependymal/sellar/optic-pathway tumor profiles retain molecular grouping, CSF/spinal staging, resection, endocrine/visual function and supportive care; stable imaging cannot erase visual decline.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-OUTCOMES

Original IDs: 3138, 4235, 4236, 4249, 5147, 5148.

Response, recurrence, toxicity and survivorship profiles retain criterion/version, discordant modalities, repeat molecular/biopsy evidence, cumulative exposure, secondary malignancy and lifelong follow-up; no invented schedule.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-SUPPORT

Original IDs: 4246, 4247.

Educational communication and concurrent palliative/supportive care are separate specialty workflows. Preserve age-appropriate multilingual explanation, symptoms, care goals and family needs without implying treatment cessation.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-NEURO-FUNCTION

Original IDs: 4210, 5143, 5144, 5145, 5146.

Keep seizures/neurological deficits, endocrine/water-balance/growth, cognitive baseline, educational accommodations and hearing/vision outcomes as linked profiles with source attribution and minimum-necessary school disclosure.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M05-ONCO-CELLULAR

Original IDs: 4230.

CAR-T coordination uses a specialty profile and existing source owners; retain chain of identity/custody through collection, manufacturing, bridging, release and infusion. Manufacturing progress is not product-release authority.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-CORE

Original IDs: 4626, 4650, 5101, 5125.

Shared neurosurgical orchestration retains prenatal-to-adult scope, neuroendoscopy, neurotrauma, surgical planning, implants, neurocritical care and rehabilitation. Independent deployability remains an option; AI cannot determine indication or operative strategy.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-HYDRO

Original IDs: 4627, 5103, 5142.

Hydrocephalus and tumor-related CSF disease are clinical coordination profiles. Preserve ventricular/head-growth/development/vision, CSF diversion, external drainage/ETV and infection/revision context; actual device configuration stays with the device owner.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-CRANIOFACIAL

Original IDs: 4629, 5110.

Preserve suture/syndromic phenotype, functional/cosmetic outcomes, airway/ophthalmic/neurodevelopment and dental/orthodontic reconstruction context within one craniofacial profile.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-CONGENITAL

Original IDs: 4630, 4631, 5107.

Neural-tube and other congenital disorders retain prenatal linkage, lesion level/closure, motor/sensory, kidney/bladder/bowel, skin, nutrition, education and social care. Verified maternal-child linkage does not merge identities or permissions.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-CHIARI

Original IDs: 4632, 5108.

Retain malformation classification, brainstem/swallowing/sleep-breathing, syrinx, CSF-flow imaging, decompression complications and response surveillance.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-SPINE

Original IDs: 4633, 4639, 4640, 4641, 5109, 5112.

Distinct syrinx, injury, tethering, dysraphism and spinal-tumor profiles retain anatomy/measurements, neurological and renal/urodynamic function, retethering, pathology and rehabilitation; they are not synonymous diagnoses.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-EPILEPSY

Original IDs: 4606, 4635, 5113.

Preserve treatment-failure history, video-EEG, functional/structural imaging, genetic/metabolic and neuropsychology context, surgical hypothesis, conference, consent and separately authorized decision; neither AI nor a test establishes eligibility alone.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-FUNCTIONAL

Original IDs: 4644, 5114.

Functional/spasticity/dystonia/pain/epilepsy therapy coordination retains goals, intrathecal therapy, implantation/programming history, battery and functional outcomes while device and medication owners retain their facts.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-VASCULAR

Original IDs: 4636, 5117, 5118.

Neurovascular and intracranial-bleeding profiles retain AVM/cavernous/aneurysm/moyamoya, angiography, coagulation/anticoagulant/hemophilia context and endovascular/radiosurgical outcomes. No autonomous hemostatic or reversal action.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-TRAUMA

Original IDs: 4637, 4638, 5094, 5116.

Severe injury and concussion retain mechanism/time, consciousness/amnesia, ICU/imaging and school/cognitive recovery. Return-to-learn and return-to-activity require distinct clinician clearance; a low automated risk signal cannot exclude acute injury.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEUROSURG-INFECTION

Original IDs: 4642, 5119.

Preserve wound/CNS/shunt infection, CSF leak/hemorrhage, microbiology/resistance, device removal/replacement, ICU/reoperation and attributable resolution versus suspected findings.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-CORE

Original IDs: 2341, 2350, 3021, 3040, 3261, 3279, 3280.

One neonatal orchestration owner coordinates delivery-room, term/preterm, ICU, congenital and lifelong developmental profiles. Maternal and infant records remain distinct, and historical local MVP claims do not authorize deployment.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-PREMATURITY

Original IDs: 2343, 3023, 3263.

Preserve extremely/very/moderate preterm contexts, growth, respiratory support, neurodevelopment and complication follow-up with appropriate age/reference applicability.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-ICU

Original IDs: 2344, 3024, 3264.

NICU coordination retains high-flow and high-frequency ventilation as distinct modalities alongside CPAP, hemodynamic monitoring, infection control and nutrition. Source observations and prescribed settings remain separate from control.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-RESPIRATORY

Original IDs: 2346, 2355, 3026, 3265.

Keep transient tachypnea, distress, meconium aspiration, persistent pulmonary hypertension, BPD and apnea distinct with ventilation/oxygen history and clinical interpretation.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-INFECTION

Original IDs: 2347, 3027.

Early/late-onset and congenital infection/meningitis remain distinct episode contexts; microbiology, antibiotics and response retain source timing and clinical diagnosis authority.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-JAUNDICE

Original IDs: 2348.

Jaundice profile coordinates source bilirubin, age/gestation, phototherapy and separately authorized exchange-transfusion context. No thresholds or treatment recommendation are inferred from a legacy title.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-SCREENING

Original IDs: 2349, 2359, 3032, 3267, 3277.

Screening, confirmatory evaluation and established congenital diagnosis are distinct states. Preserve metabolic/hearing/cardiac, chromosomal/rare/genomic and organ-specific anomalies plus family counseling without treating a screen as diagnosis.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-NUTRITION

Original IDs: 2351, 3028, 3268.

Preserve breastfeeding, donor milk, fortification, enteral/parenteral routes, tolerance and growth. Orders/formula changes and administration remain separately authorized; donor product provenance is not blanket donor access.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-GROWTH-FOLLOWUP

Original IDs: 2352, 2360.

Growth/development and complications retain measurement time/technique, weight/length/head circumference and selected reference release. Historical WHO wording does not prove suitability for every gestational age.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-NEURO

Original IDs: 2353, 3033, 3266.

Preserve reflex/tone examination, seizures, HIE, hemorrhage/leukomalacia and source neuroimaging without collapsing distinct injury phenotypes into a single AI label.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

### M06-NEONATAL-CARDIAC

Original IDs: 2354.

Cardiac neonatal profile links congenital diagnoses and echo/monitoring source data to specialist review using existing clinical/imaging/device owners.

Resolve permitted source context → keep specialty-specific assessments distinct → assemble coordinated view → clinician documents plan → versioned follow-up. The view owns orchestration, never independently replaces source facts.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-SPECIALTY-0df41b8337827a07"></a>
- **M06-CAP-SPECIALTY-0df41b8337827a07**: Stores congenital cardiac diagnoses.
  Origin: original 844

<a id="M06-CAP-SPECIALTY-9288196d19421058"></a>
- **M06-CAP-SPECIALTY-9288196d19421058**: ASD
  Origin: original 844, original 3063

<a id="M06-CAP-SPECIALTY-d782499950a6c959"></a>
- **M06-CAP-SPECIALTY-d782499950a6c959**: VSD
  Origin: original 844, original 3063

<a id="M06-CAP-SPECIALTY-2e60918f4f331cad"></a>
- **M06-CAP-SPECIALTY-2e60918f4f331cad**: Tetralogy of Fallot
  Origin: original 844, original 3063, original 3663

<a id="M06-CAP-SPECIALTY-a6d012319dde3af7"></a>
- **M06-CAP-SPECIALTY-a6d012319dde3af7**: Coarctation
  Origin: original 844

<a id="M06-CAP-SPECIALTY-acad891e825542fc"></a>
- **M06-CAP-SPECIALTY-acad891e825542fc**: Other Congenital Defects
  Origin: original 844

<a id="M06-CAP-SPECIALTY-064d0d61dd6a021c"></a>
- **M06-CAP-SPECIALTY-064d0d61dd6a021c**: Stores pediatric rhythm disorders.
  Origin: original 849

<a id="M06-CAP-SPECIALTY-d1845465b3088f29"></a>
- **M06-CAP-SPECIALTY-d1845465b3088f29**: Supraventricular Tachycardia
  Origin: original 849, original 3065, original 3666, original 4066

<a id="M06-CAP-SPECIALTY-b983e835f5aaaf91"></a>
- **M06-CAP-SPECIALTY-b983e835f5aaaf91**: Bradycardia
  Origin: original 849

<a id="M06-CAP-SPECIALTY-efdbea488599090c"></a>
- **M06-CAP-SPECIALTY-efdbea488599090c**: AV Block
  Origin: original 849

<a id="M06-CAP-SPECIALTY-0d86946e629cc025"></a>
- **M06-CAP-SPECIALTY-0d86946e629cc025**: Follow-up
  Origin: original 849, original 5146, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-9f61870dc4d8214d"></a>
- **M06-CAP-SPECIALTY-9f61870dc4d8214d**: Supports monitoring of pediatric heart failure.
  Origin: original 853

<a id="M06-CAP-SPECIALTY-8ea50d2707dd1600"></a>
- **M06-CAP-SPECIALTY-8ea50d2707dd1600**: Symptoms
  Origin: original 853, original 953, original 4068, original 4247, original 4455, original 4457, original 4474, original 4510, original 4513, original 4516, original 4517, original 4518, original 4520, original 4632, original 4701, original 4826, original 5026, original 5103, original 5108, original 5119, original 5126, original 5142

<a id="M06-CAP-SPECIALTY-7180e4fffcb65860"></a>
- **M06-CAP-SPECIALTY-7180e4fffcb65860**: Echocardiography
  Origin: original 853, original 860, original 2354, original 3661, original 3680, original 4061, original 4080

<a id="M06-CAP-SPECIALTY-3cfa39200ce0ea10"></a>
- **M06-CAP-SPECIALTY-3cfa39200ce0ea10**: Medication
  Origin: original 853, original 953, original 4166, original 4188, original 4455, original 4471, original 4511, original 4513, original 4516, original 4518, original 4520, original 4551, original 4635, original 4637, original 4650, original 4701, original 4702, original 4704, original 4708, original 4709, original 4826, original 4976, original 5026, original 5028, original 5031, original 5032, original 5033, original 5034, original 5035, original 5039, original 5101, original 5126, original 5143, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-bc4672e86cb0b71e"></a>
- **M06-CAP-SPECIALTY-bc4672e86cb0b71e**: Hospitalizations
  Origin: original 853, original 4166, original 4518, original 4826

<a id="M06-CAP-SPECIALTY-0fbc2c810c379d65"></a>
- **M06-CAP-SPECIALTY-0fbc2c810c379d65**: Provides a complete overview of pediatric cardiovascular health.
  Origin: original 860

<a id="M06-CAP-SPECIALTY-f3d993f49bc6debb"></a>
- **M06-CAP-SPECIALTY-f3d993f49bc6debb**: Displays
  Origin: original 860, original 920, original 940, original 960, original 980, original 1120

<a id="M06-CAP-SPECIALTY-182520ba3d242100"></a>
- **M06-CAP-SPECIALTY-182520ba3d242100**: Diagnoses
  Origin: original 860, original 920, original 940, original 960, original 980

<a id="M06-CAP-SPECIALTY-0db3379ed4d9ccfa"></a>
- **M06-CAP-SPECIALTY-0db3379ed4d9ccfa**: ECG
  Origin: original 860, original 4061, original 4080

<a id="M06-CAP-SPECIALTY-b769af85ada69188"></a>
- **M06-CAP-SPECIALTY-b769af85ada69188**: Medications
  Origin: original 860, original 908, original 920, original 940, original 960, original 980

<a id="M06-CAP-SPECIALTY-c5c6c99d870419ad"></a>
- **M06-CAP-SPECIALTY-c5c6c99d870419ad**: Surgeries
  Origin: original 860

<a id="M06-CAP-SPECIALTY-e22fe857a3a17db9"></a>
- **M06-CAP-SPECIALTY-e22fe857a3a17db9**: AI Recommendations
  Origin: original 860, original 920, original 940, original 960, original 980, original 1120

<a id="M06-CAP-SPECIALTY-2cdc78ef3580aa97"></a>
- **M06-CAP-SPECIALTY-2cdc78ef3580aa97**: Acts as the primary pediatric cardiology workspace within the Medical Passport ecosystem.
  Origin: original 860

<a id="M06-CAP-SPECIALTY-8a719ee7cfa254a8"></a>
- **M06-CAP-SPECIALTY-8a719ee7cfa254a8**: Stores pediatric asthma diagnoses.
  Origin: original 904

<a id="M06-CAP-SPECIALTY-0dbeacb9f9ac3f6a"></a>
- **M06-CAP-SPECIALTY-0dbeacb9f9ac3f6a**: Severity
  Origin: original 904, original 4457, original 4978, original 4984, original 4990

<a id="M06-CAP-SPECIALTY-80597c152b979f51"></a>
- **M06-CAP-SPECIALTY-80597c152b979f51**: Triggers
  Origin: original 904, original 4455

<a id="M06-CAP-SPECIALTY-3d2ca03dcd57e33b"></a>
- **M06-CAP-SPECIALTY-3d2ca03dcd57e33b**: Exacerbations
  Origin: original 904, original 3363, original 4455, original 4456, original 4471

<a id="M06-CAP-SPECIALTY-e71d000ad9acb98e"></a>
- **M06-CAP-SPECIALTY-e71d000ad9acb98e**: Treatment Plan
  Origin: original 904, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-ea00ace421a86170"></a>
- **M06-CAP-SPECIALTY-ea00ace421a86170**: Tracks cystic fibrosis management.
  Origin: original 908

<a id="M06-CAP-SPECIALTY-df6b69beaab6f6f4"></a>
- **M06-CAP-SPECIALTY-df6b69beaab6f6f4**: Lung Function
  Origin: original 908, original 4455, original 4456, original 4474

<a id="M06-CAP-SPECIALTY-aaaf0a34a8eb8286"></a>
- **M06-CAP-SPECIALTY-aaaf0a34a8eb8286**: Genetics
  Origin: original 908, original 3040, original 3080, original 3140, original 3180, original 3200, original 3259, original 3279, original 3280, original 3300, original 3380, original 3661, original 3680, original 4061, original 4080, original 4161, original 4169, original 4171, original 4172, original 4176, original 4200, original 4203, original 4221, original 4401, original 4435, original 4444, original 4451, original 4501, original 4519, original 4550, original 4551, original 4575, original 4606, original 4626, original 4629, original 4630, original 4636, original 4701, original 4976, original 4981, original 4982, original 4983, original 4989, original 4990, original 4991, original 5026, original 5101, original 5110, original 5113, original 5126, original 5129, original 5136, original 5141

<a id="M06-CAP-SPECIALTY-5768adaf9507e83f"></a>
- **M06-CAP-SPECIALTY-5768adaf9507e83f**: Nutrition
  Origin: original 908, original 960, original 3161, original 3180, original 3281, original 3300, original 3364, original 3441, original 3444, original 3460, original 4164, original 4247, original 4471, original 4475, original 4501, original 4542, original 4551, original 4575, original 4631, original 4979, original 5140, original 5144

<a id="M06-CAP-SPECIALTY-8dd635ddb5308697"></a>
- **M06-CAP-SPECIALTY-8dd635ddb5308697**: Provides a complete overview of pediatric respiratory health.
  Origin: original 920

<a id="M06-CAP-SPECIALTY-cc4765f416969a81"></a>
- **M06-CAP-SPECIALTY-cc4765f416969a81**: Spirometry
  Origin: original 920

<a id="M06-CAP-SPECIALTY-9215378fd413c675"></a>
- **M06-CAP-SPECIALTY-9215378fd413c675**: Oxygen Saturation
  Origin: original 920

<a id="M06-CAP-SPECIALTY-a3241cf77d991407"></a>
- **M06-CAP-SPECIALTY-a3241cf77d991407**: Imaging
  Origin: original 920, original 960, original 3380, original 3460, original 4063, original 4177, original 4201, original 4203, original 4209, original 4210, original 4235, original 4451, original 4501, original 4516, original 4517, original 4520, original 4551, original 4629, original 4630, original 4701, original 4702, original 4703, original 4706, original 4709, original 4987, original 5026, original 5028, original 5034, original 5035, original 5116, original 5117, original 5119, original 5136, original 5137, original 5139, original 5140

<a id="M06-CAP-SPECIALTY-13a7f250d648e8d2"></a>
- **M06-CAP-SPECIALTY-13a7f250d648e8d2**: Acts as the primary pediatric pulmonology workspace within the Medical Passport ecosystem.
  Origin: original 920

<a id="M06-CAP-SPECIALTY-c703d4c0357a4938"></a>
- **M06-CAP-SPECIALTY-c703d4c0357a4938**: Provides a complete overview of pediatric kidney health.
  Origin: original 940

<a id="M06-CAP-SPECIALTY-71f790fdf94f9c10"></a>
- **M06-CAP-SPECIALTY-71f790fdf94f9c10**: Laboratory Results
  Origin: original 940, original 953, original 960, original 1120, original 4235

<a id="M06-CAP-SPECIALTY-8e2ad3ebd029c2b5"></a>
- **M06-CAP-SPECIALTY-8e2ad3ebd029c2b5**: Dialysis
  Origin: original 940, original 4551, original 4575, original 4600

<a id="M06-CAP-SPECIALTY-c25e5083a540778a"></a>
- **M06-CAP-SPECIALTY-c25e5083a540778a**: Transplantation
  Origin: original 940, original 4186, original 4435, original 4991

<a id="M06-CAP-SPECIALTY-93b0cf94db3d2bb5"></a>
- **M06-CAP-SPECIALTY-93b0cf94db3d2bb5**: Acts as the primary pediatric nephrology workspace within the Medical Passport ecosystem.
  Origin: original 940

<a id="M06-CAP-SPECIALTY-1eca9268ac461aec"></a>
- **M06-CAP-SPECIALTY-1eca9268ac461aec**: Supports children with nutritional disorders.
  Origin: original 948

<a id="M06-CAP-SPECIALTY-d1a90c7defdfa02d"></a>
- **M06-CAP-SPECIALTY-d1a90c7defdfa02d**: Malabsorption
  Origin: original 948, original 3281, original 4501

<a id="M06-CAP-SPECIALTY-739e32f615aa20db"></a>
- **M06-CAP-SPECIALTY-739e32f615aa20db**: Enteral Nutrition
  Origin: original 948, original 2351, original 3028, original 3168, original 3288, original 3448, original 4545

<a id="M06-CAP-SPECIALTY-9ac0748afd93e1ab"></a>
- **M06-CAP-SPECIALTY-9ac0748afd93e1ab**: Growth
  Origin: original 948, original 2360, original 4164, original 4167, original 4510, original 4516, original 4517, original 4520, original 4539, original 4543, original 4544, original 4545, original 4551, original 4702, original 4979, original 4982, original 4990, original 5028, original 5140, original 5144

<a id="M06-CAP-SPECIALTY-13772ce307044873"></a>
- **M06-CAP-SPECIALTY-13772ce307044873**: Vitamin Deficiencies
  Origin: original 948

<a id="M06-CAP-SPECIALTY-e62b5d44c006da6d"></a>
- **M06-CAP-SPECIALTY-e62b5d44c006da6d**: Supports monitoring of inflammatory bowel disease.
  Origin: original 953

<a id="M06-CAP-SPECIALTY-ceb38991b36a5742"></a>
- **M06-CAP-SPECIALTY-ceb38991b36a5742**: Endoscopy
  Origin: original 953, original 960, original 3300, original 3460, original 4501, original 4516, original 4517, original 4518, original 4519, original 4520, original 4550

<a id="M06-CAP-SPECIALTY-b0d0f91164df9f87"></a>
- **M06-CAP-SPECIALTY-b0d0f91164df9f87**: Provides a complete overview of pediatric digestive health.
  Origin: original 960

<a id="M06-CAP-SPECIALTY-a28094b2f0802875"></a>
- **M06-CAP-SPECIALTY-a28094b2f0802875**: Acts as the primary pediatric gastroenterology workspace within the Medical Passport ecosystem.
  Origin: original 960

<a id="M06-CAP-SPECIALTY-655f7d863c405e38"></a>
- **M06-CAP-SPECIALTY-655f7d863c405e38**: Stores anemia diagnoses.
  Origin: original 964

<a id="M06-CAP-SPECIALTY-7c8277fe259f0d6d"></a>
- **M06-CAP-SPECIALTY-7c8277fe259f0d6d**: Iron Deficiency
  Origin: original 964

<a id="M06-CAP-SPECIALTY-aa028eeab93f103b"></a>
- **M06-CAP-SPECIALTY-aa028eeab93f103b**: Hemolytic Anemia
  Origin: original 964, original 3243, original 5000

<a id="M06-CAP-SPECIALTY-2f419c429d586a2a"></a>
- **M06-CAP-SPECIALTY-2f419c429d586a2a**: Aplastic Anemia
  Origin: original 964, original 3243, original 3247, original 4172

<a id="M06-CAP-SPECIALTY-218395244e97e9c0"></a>
- **M06-CAP-SPECIALTY-218395244e97e9c0**: Megaloblastic Anemia
  Origin: original 964, original 3243

<a id="M06-CAP-SPECIALTY-9b78111a1532f62f"></a>
- **M06-CAP-SPECIALTY-9b78111a1532f62f**: Tracks inherited blood disorders.
  Origin: original 965

<a id="M06-CAP-SPECIALTY-331e4c203938dc57"></a>
- **M06-CAP-SPECIALTY-331e4c203938dc57**: Sickle Cell Disease
  Origin: original 965, original 3244, original 5000

<a id="M06-CAP-SPECIALTY-74d1ac0cf8ab9994"></a>
- **M06-CAP-SPECIALTY-74d1ac0cf8ab9994**: Alpha Thalassemia
  Origin: original 965

<a id="M06-CAP-SPECIALTY-88abbcccb5648fed"></a>
- **M06-CAP-SPECIALTY-88abbcccb5648fed**: Beta Thalassemia
  Origin: original 965

<a id="M06-CAP-SPECIALTY-a2a8a21b91097b87"></a>
- **M06-CAP-SPECIALTY-a2a8a21b91097b87**: Carrier Status
  Origin: original 965

<a id="M06-CAP-SPECIALTY-9c5272f25a8fb7e6"></a>
- **M06-CAP-SPECIALTY-9c5272f25a8fb7e6**: Stores coagulation disorders.
  Origin: original 966

<a id="M06-CAP-SPECIALTY-cec74a7055e8b711"></a>
- **M06-CAP-SPECIALTY-cec74a7055e8b711**: Hemophilia A
  Origin: original 966, original 3245, original 4174

<a id="M06-CAP-SPECIALTY-2c9f9fe0c767561a"></a>
- **M06-CAP-SPECIALTY-2c9f9fe0c767561a**: Hemophilia B
  Origin: original 966, original 3245, original 4174

<a id="M06-CAP-SPECIALTY-a157171353d6ddaf"></a>
- **M06-CAP-SPECIALTY-a157171353d6ddaf**: von Willebrand Disease
  Origin: original 966, original 3245, original 5000

<a id="M06-CAP-SPECIALTY-b6e5a8e0325505fd"></a>
- **M06-CAP-SPECIALTY-b6e5a8e0325505fd**: Platelet Disorders
  Origin: original 966, original 4976, original 5000

<a id="M06-CAP-SPECIALTY-8680f270fb6afe67"></a>
- **M06-CAP-SPECIALTY-8680f270fb6afe67**: Provides a complete overview of pediatric hematological health.
  Origin: original 980

<a id="M06-CAP-SPECIALTY-9bbf34aa349132ec"></a>
- **M06-CAP-SPECIALTY-9bbf34aa349132ec**: CBC
  Origin: original 980, original 4171, original 4976

<a id="M06-CAP-SPECIALTY-ca457cec30f5491b"></a>
- **M06-CAP-SPECIALTY-ca457cec30f5491b**: Coagulation
  Origin: original 980, original 4976

<a id="M06-CAP-SPECIALTY-e8dbce37b6236ec7"></a>
- **M06-CAP-SPECIALTY-e8dbce37b6236ec7**: Transfusions
  Origin: original 980, original 4166

<a id="M06-CAP-SPECIALTY-3eb8c25cc484b6ef"></a>
- **M06-CAP-SPECIALTY-3eb8c25cc484b6ef**: Acts as the primary pediatric hematology workspace within the Medical Passport ecosystem.
  Origin: original 980

<a id="M06-CAP-SPECIALTY-4924a8e1260d4256"></a>
- **M06-CAP-SPECIALTY-4924a8e1260d4256**: Provides a complete overview of pediatric allergy care.
  Origin: original 1120

<a id="M06-CAP-SPECIALTY-5ece9f76c54dd0a2"></a>
- **M06-CAP-SPECIALTY-5ece9f76c54dd0a2**: Allergies
  Origin: original 1120

<a id="M06-CAP-SPECIALTY-42ecf80f75b68da4"></a>
- **M06-CAP-SPECIALTY-42ecf80f75b68da4**: Immunotherapy
  Origin: original 1120, original 4401, original 4459

<a id="M06-CAP-SPECIALTY-782014d45c8e7c5e"></a>
- **M06-CAP-SPECIALTY-782014d45c8e7c5e**: Emergency History
  Origin: original 1120

<a id="M06-CAP-SPECIALTY-9046273cad000110"></a>
- **M06-CAP-SPECIALTY-9046273cad000110**: Acts as the central pediatric allergy workspace.
  Origin: original 1120

<a id="M06-CAP-SPECIALTY-2ab9de23946d39b6"></a>
- **M06-CAP-SPECIALTY-2ab9de23946d39b6**: Central platform for neonatology.
  Origin: original 2341, original 3261

<a id="M06-CAP-SPECIALTY-bfb76975438a5f8d"></a>
- **M06-CAP-SPECIALTY-bfb76975438a5f8d**: Newborn Assessment
  Origin: original 2341

<a id="M06-CAP-SPECIALTY-4a1db7b3fa8112be"></a>
- **M06-CAP-SPECIALTY-4a1db7b3fa8112be**: Intensive Care
  Origin: original 2341, original 3040, original 3080, original 3200, original 3279, original 3280, original 4551, original 4575, original 4626, original 4637, original 4642, original 4987, original 5101, original 5116, original 5117, original 5119

<a id="M06-CAP-SPECIALTY-47c5b7a37c2450f8"></a>
- **M06-CAP-SPECIALTY-47c5b7a37c2450f8**: Development Monitoring
  Origin: original 2341, original 3033

<a id="M06-CAP-SPECIALTY-5e0d845bd5f7b883"></a>
- **M06-CAP-SPECIALTY-5e0d845bd5f7b883**: Long-term Neonatal Follow-up
  Origin: original 2341

<a id="M06-CAP-SPECIALTY-e59411699f156fb2"></a>
- **M06-CAP-SPECIALTY-e59411699f156fb2**: Supports premature newborn care.
  Origin: original 2343

<a id="M06-CAP-SPECIALTY-99426d73ea6796c6"></a>
- **M06-CAP-SPECIALTY-99426d73ea6796c6**: Gestational Age
  Origin: original 2343

<a id="M06-CAP-SPECIALTY-8bf61b2b633fc7e7"></a>
- **M06-CAP-SPECIALTY-8bf61b2b633fc7e7**: Growth Monitoring
  Origin: original 2343, original 3023, original 3028, original 3263, original 3283

<a id="M06-CAP-SPECIALTY-5959105c73038e1a"></a>
- **M06-CAP-SPECIALTY-5959105c73038e1a**: NICU Follow-up
  Origin: original 2343

<a id="M06-CAP-SPECIALTY-eca2e587cbdaf35c"></a>
- **M06-CAP-SPECIALTY-eca2e587cbdaf35c**: Maintains NICU history.
  Origin: original 2344

<a id="M06-CAP-SPECIALTY-f5e42beb9e8342f3"></a>
- **M06-CAP-SPECIALTY-f5e42beb9e8342f3**: Respiratory Support
  Origin: original 2344, original 3023, original 4457

<a id="M06-CAP-SPECIALTY-f5aeff23cb9d4fbe"></a>
- **M06-CAP-SPECIALTY-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 2344

<a id="M06-CAP-SPECIALTY-228b18d13e8b34f1"></a>
- **M06-CAP-SPECIALTY-228b18d13e8b34f1**: Procedures
  Origin: original 2344, original 4976, original 5026

<a id="M06-CAP-SPECIALTY-2309cadf473cdadf"></a>
- **M06-CAP-SPECIALTY-2309cadf473cdadf**: Supports respiratory disorders.
  Origin: original 2346

<a id="M06-CAP-SPECIALTY-3bf543cb8337e01a"></a>
- **M06-CAP-SPECIALTY-3bf543cb8337e01a**: Respiratory Distress Syndrome
  Origin: original 2346, original 3026, original 3265

<a id="M06-CAP-SPECIALTY-f9e8c6254dafde20"></a>
- **M06-CAP-SPECIALTY-f9e8c6254dafde20**: Transient Tachypnea
  Origin: original 2346, original 3026

<a id="M06-CAP-SPECIALTY-aa7fd799ef06de48"></a>
- **M06-CAP-SPECIALTY-aa7fd799ef06de48**: Oxygen Therapy
  Origin: original 2346, original 2355

<a id="M06-CAP-SPECIALTY-f29fa38bf4f7860a"></a>
- **M06-CAP-SPECIALTY-f29fa38bf4f7860a**: Maintains neonatal infection history.
  Origin: original 2347

<a id="M06-CAP-SPECIALTY-a01ee1d1cbe7db71"></a>
- **M06-CAP-SPECIALTY-a01ee1d1cbe7db71**: Early Sepsis
  Origin: original 2347

<a id="M06-CAP-SPECIALTY-e25e37f0679cb191"></a>
- **M06-CAP-SPECIALTY-e25e37f0679cb191**: Late Sepsis
  Origin: original 2347

<a id="M06-CAP-SPECIALTY-f0f8cda6e5532ebc"></a>
- **M06-CAP-SPECIALTY-f0f8cda6e5532ebc**: Antibiotic Therapy
  Origin: original 2347

<a id="M06-CAP-SPECIALTY-7a9962a2668f504d"></a>
- **M06-CAP-SPECIALTY-7a9962a2668f504d**: Supports neonatal jaundice management.
  Origin: original 2348

<a id="M06-CAP-SPECIALTY-aa618bafb7a291e5"></a>
- **M06-CAP-SPECIALTY-aa618bafb7a291e5**: Bilirubin Monitoring
  Origin: original 2348

<a id="M06-CAP-SPECIALTY-00ecb985f21498f7"></a>
- **M06-CAP-SPECIALTY-00ecb985f21498f7**: Phototherapy
  Origin: original 2348

<a id="M06-CAP-SPECIALTY-0024bcb8ce2386c0"></a>
- **M06-CAP-SPECIALTY-0024bcb8ce2386c0**: Exchange Transfusion
  Origin: original 2348

<a id="M06-CAP-SPECIALTY-1b2e2880f72a7592"></a>
- **M06-CAP-SPECIALTY-1b2e2880f72a7592**: Maintains newborn screening.
  Origin: original 2349

<a id="M06-CAP-SPECIALTY-bd1b273e3f92cea4"></a>
- **M06-CAP-SPECIALTY-bd1b273e3f92cea4**: Metabolic Disorders
  Origin: original 2349, original 2359

<a id="M06-CAP-SPECIALTY-b74e2b5dffb33287"></a>
- **M06-CAP-SPECIALTY-b74e2b5dffb33287**: Hearing Screening
  Origin: original 2349

<a id="M06-CAP-SPECIALTY-d00707ec73fa3d05"></a>
- **M06-CAP-SPECIALTY-d00707ec73fa3d05**: Cardiac Screening
  Origin: original 2349

<a id="M06-CAP-SPECIALTY-f533edd454e43010"></a>
- **M06-CAP-SPECIALTY-f533edd454e43010**: Coordinates all neonatology services.
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-bce0805e06ff3ba3"></a>
- **M06-CAP-SPECIALTY-bce0805e06ff3ba3**: Neonatology AI
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-fba14cee8ea55390"></a>
- **M06-CAP-SPECIALTY-fba14cee8ea55390**: Digital Twin
  Origin: original 2350, original 3040, original 3080, original 3140, original 3180, original 3200, original 3259, original 3280, original 3300, original 3380, original 3460, original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4161, original 4200, original 4201, original 4401, original 4450, original 4451, original 4500, original 4501, original 4550, original 4551, original 4575, original 4600, original 4650, original 4725, original 4850

<a id="M06-CAP-SPECIALTY-fc99a059e954352c"></a>
- **M06-CAP-SPECIALTY-fc99a059e954352c**: NICU Systems
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-a10a70546ef9f3c2"></a>
- **M06-CAP-SPECIALTY-a10a70546ef9f3c2**: Laboratory
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-66754249a24cb90c"></a>
- **M06-CAP-SPECIALTY-66754249a24cb90c**: Pediatrics Platform
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-741ce9f6d23ae9e4"></a>
- **M06-CAP-SPECIALTY-741ce9f6d23ae9e4**: Forms the complete neonatology ecosystem within EDHT.
  Origin: original 2350

<a id="M06-CAP-SPECIALTY-17f85a77542a1afc"></a>
- **M06-CAP-SPECIALTY-17f85a77542a1afc**: Supports neonatal nutrition management.
  Origin: original 2351

<a id="M06-CAP-SPECIALTY-c8d4b1cb657a5c3f"></a>
- **M06-CAP-SPECIALTY-c8d4b1cb657a5c3f**: Breastfeeding Monitoring
  Origin: original 2351

<a id="M06-CAP-SPECIALTY-742d70c809573f92"></a>
- **M06-CAP-SPECIALTY-742d70c809573f92**: Parenteral Nutrition
  Origin: original 2351, original 3028, original 3168, original 3268, original 3288, original 3448, original 4545

<a id="M06-CAP-SPECIALTY-aad0264f04a5109e"></a>
- **M06-CAP-SPECIALTY-aad0264f04a5109e**: Feeding Tolerance
  Origin: original 2351

<a id="M06-CAP-SPECIALTY-6229a2c7f9546e9f"></a>
- **M06-CAP-SPECIALTY-6229a2c7f9546e9f**: Growth Evaluation
  Origin: original 2351

<a id="M06-CAP-SPECIALTY-eb6f19400a2cb95b"></a>
- **M06-CAP-SPECIALTY-eb6f19400a2cb95b**: Maintains neonatal growth records.
  Origin: original 2352

<a id="M06-CAP-SPECIALTY-cdcecae88521194c"></a>
- **M06-CAP-SPECIALTY-cdcecae88521194c**: Weight
  Origin: original 2352, original 4474, original 4540, original 5144

<a id="M06-CAP-SPECIALTY-1bdb87c27f8c0a3a"></a>
- **M06-CAP-SPECIALTY-1bdb87c27f8c0a3a**: Length
  Origin: original 2352

<a id="M06-CAP-SPECIALTY-61a6bd07c305a785"></a>
- **M06-CAP-SPECIALTY-61a6bd07c305a785**: Head Circumference
  Origin: original 2352, original 4627

<a id="M06-CAP-SPECIALTY-8da32c170f347286"></a>
- **M06-CAP-SPECIALTY-8da32c170f347286**: Growth Curves
  Origin: original 2352, original 3288

<a id="M06-CAP-SPECIALTY-56968d25db6f690c"></a>
- **M06-CAP-SPECIALTY-56968d25db6f690c**: WHO Standards
  Origin: original 2352

<a id="M06-CAP-SPECIALTY-fa9a4e8a41721b92"></a>
- **M06-CAP-SPECIALTY-fa9a4e8a41721b92**: Supports neonatal neurological care.
  Origin: original 2353

<a id="M06-CAP-SPECIALTY-2d8526c5953b347c"></a>
- **M06-CAP-SPECIALTY-2d8526c5953b347c**: Neurological Examination
  Origin: original 2353, original 4626, original 5101, original 5108, original 5126

<a id="M06-CAP-SPECIALTY-d3e587c7e9e4c9f2"></a>
- **M06-CAP-SPECIALTY-d3e587c7e9e4c9f2**: Muscle Tone
  Origin: original 2353

<a id="M06-CAP-SPECIALTY-b9600df1deab3334"></a>
- **M06-CAP-SPECIALTY-b9600df1deab3334**: Seizure Monitoring
  Origin: original 2353

<a id="M06-CAP-SPECIALTY-d081944d0f783f0f"></a>
- **M06-CAP-SPECIALTY-d081944d0f783f0f**: Reflex Assessment
  Origin: original 2353

<a id="M06-CAP-SPECIALTY-acaa4a085baa350f"></a>
- **M06-CAP-SPECIALTY-acaa4a085baa350f**: Supports neonatal cardiac disorders.
  Origin: original 2354

<a id="M06-CAP-SPECIALTY-23e1e2dffbd44243"></a>
- **M06-CAP-SPECIALTY-23e1e2dffbd44243**: Congenital Heart Disease
  Origin: original 2354, original 3061, original 3267, original 4061, original 4080

<a id="M06-CAP-SPECIALTY-658b74b3896ef170"></a>
- **M06-CAP-SPECIALTY-658b74b3896ef170**: Cardiac Monitoring
  Origin: original 2354

<a id="M06-CAP-SPECIALTY-34c5d9f0ebdad955"></a>
- **M06-CAP-SPECIALTY-34c5d9f0ebdad955**: Supports neonatal respiratory care.
  Origin: original 2355

<a id="M06-CAP-SPECIALTY-7f81e52bc145067c"></a>
- **M06-CAP-SPECIALTY-7f81e52bc145067c**: Mechanical Ventilation
  Origin: original 2355, original 3024, original 3264

<a id="M06-CAP-SPECIALTY-d88125b8b1dea913"></a>
- **M06-CAP-SPECIALTY-d88125b8b1dea913**: CPAP
  Origin: original 2355, original 3024, original 3264

<a id="M06-CAP-SPECIALTY-2a31fd692519cabe"></a>
- **M06-CAP-SPECIALTY-2a31fd692519cabe**: Respiratory Monitoring
  Origin: original 2355

<a id="M06-CAP-SPECIALTY-89052ae55bc9d350"></a>
- **M06-CAP-SPECIALTY-89052ae55bc9d350**: Supports neonatal genetic screening.
  Origin: original 2359

<a id="M06-CAP-SPECIALTY-4e77068b04c7211a"></a>
- **M06-CAP-SPECIALTY-4e77068b04c7211a**: Rare Diseases
  Origin: original 2359, original 3032

<a id="M06-CAP-SPECIALTY-d0a5c4ea79e26696"></a>
- **M06-CAP-SPECIALTY-d0a5c4ea79e26696**: Genetic Consultation
  Origin: original 2359

<a id="M06-CAP-SPECIALTY-d5ac9d89a6707a21"></a>
- **M06-CAP-SPECIALTY-d5ac9d89a6707a21**: Supports long-term neonatal follow-up.
  Origin: original 2360

<a id="M06-CAP-SPECIALTY-294546b06f4eebf7"></a>
- **M06-CAP-SPECIALTY-294546b06f4eebf7**: Development
  Origin: original 2360, original 4542, original 4631, original 5103, original 5107

<a id="M06-CAP-SPECIALTY-f1a4c63a0d8ef56a"></a>
- **M06-CAP-SPECIALTY-f1a4c63a0d8ef56a**: Complication Monitoring
  Origin: original 2360

<a id="M06-CAP-SPECIALTY-db8f72f2f8becb67"></a>
- **M06-CAP-SPECIALTY-db8f72f2f8becb67**: Central platform for neonatal medicine.
  Origin: original 3021

<a id="M06-CAP-SPECIALTY-28cc510f8d2d3070"></a>
- **M06-CAP-SPECIALTY-28cc510f8d2d3070**: Premature Infants
  Origin: original 3021

<a id="M06-CAP-SPECIALTY-4682e558f9586a3b"></a>
- **M06-CAP-SPECIALTY-4682e558f9586a3b**: Full-term Newborns
  Origin: original 3021

<a id="M06-CAP-SPECIALTY-a6010f8371c352e3"></a>
- **M06-CAP-SPECIALTY-a6010f8371c352e3**: Neonatal Intensive Care
  Origin: original 3021, original 3261

<a id="M06-CAP-SPECIALTY-0ad42178c0d39544"></a>
- **M06-CAP-SPECIALTY-0ad42178c0d39544**: Congenital Disorders
  Origin: original 3021, original 3261

<a id="M06-CAP-SPECIALTY-9d1833df9d151ef3"></a>
- **M06-CAP-SPECIALTY-9d1833df9d151ef3**: Long-term Development Monitoring
  Origin: original 3021

<a id="M06-CAP-SPECIALTY-938609aea2ed4c4f"></a>
- **M06-CAP-SPECIALTY-938609aea2ed4c4f**: Integrates Obstetrics, Pediatrics, Genetics, Intensive Care, AI and Digital Twin.
  Origin: original 3021

<a id="M06-CAP-SPECIALTY-02c08ae867ba8774"></a>
- **M06-CAP-SPECIALTY-02c08ae867ba8774**: Supports premature infant management.
  Origin: original 3023

<a id="M06-CAP-SPECIALTY-36dffa9e76127a85"></a>
- **M06-CAP-SPECIALTY-36dffa9e76127a85**: Extremely Preterm Infants
  Origin: original 3023

<a id="M06-CAP-SPECIALTY-28fd972e2e282347"></a>
- **M06-CAP-SPECIALTY-28fd972e2e282347**: Very Preterm Infants
  Origin: original 3023

<a id="M06-CAP-SPECIALTY-a8969cd0defc0ca3"></a>
- **M06-CAP-SPECIALTY-a8969cd0defc0ca3**: Neurodevelopmental Assessment
  Origin: original 3023

<a id="M06-CAP-SPECIALTY-6f949a55474da90b"></a>
- **M06-CAP-SPECIALTY-6f949a55474da90b**: Supports NICU management.
  Origin: original 3024

<a id="M06-CAP-SPECIALTY-adf02fbce8aba9b1"></a>
- **M06-CAP-SPECIALTY-adf02fbce8aba9b1**: High-flow Therapy
  Origin: original 3024

<a id="M06-CAP-SPECIALTY-01c040ddde96fc21"></a>
- **M06-CAP-SPECIALTY-01c040ddde96fc21**: Hemodynamic Monitoring
  Origin: original 3024, original 3264

<a id="M06-CAP-SPECIALTY-cf323c299ea06011"></a>
- **M06-CAP-SPECIALTY-cf323c299ea06011**: Infection Control
  Origin: original 3024, original 3264

<a id="M06-CAP-SPECIALTY-47dfd4b9f808b64a"></a>
- **M06-CAP-SPECIALTY-47dfd4b9f808b64a**: Nutrition Support
  Origin: original 3024

<a id="M06-CAP-SPECIALTY-797b0c845676abc6"></a>
- **M06-CAP-SPECIALTY-797b0c845676abc6**: Supports respiratory diseases in newborns.
  Origin: original 3026

<a id="M06-CAP-SPECIALTY-c0e87004d24755d8"></a>
- **M06-CAP-SPECIALTY-c0e87004d24755d8**: Meconium Aspiration
  Origin: original 3026, original 3265

<a id="M06-CAP-SPECIALTY-c5d2c934262d7a07"></a>
- **M06-CAP-SPECIALTY-c5d2c934262d7a07**: Persistent Pulmonary Hypertension
  Origin: original 3026, original 3265

<a id="M06-CAP-SPECIALTY-65b01fa72d31fa7a"></a>
- **M06-CAP-SPECIALTY-65b01fa72d31fa7a**: Bronchopulmonary Dysplasia
  Origin: original 3026, original 3265

<a id="M06-CAP-SPECIALTY-1ad422493e4fbbc1"></a>
- **M06-CAP-SPECIALTY-1ad422493e4fbbc1**: Supports neonatal infectious diseases.
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-4cd1c9cb91194241"></a>
- **M06-CAP-SPECIALTY-4cd1c9cb91194241**: Early-Onset Sepsis
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-867385c471afbec0"></a>
- **M06-CAP-SPECIALTY-867385c471afbec0**: Late-Onset Sepsis
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-184673efceeea108"></a>
- **M06-CAP-SPECIALTY-184673efceeea108**: Congenital Infections
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-2df694c949a47009"></a>
- **M06-CAP-SPECIALTY-2df694c949a47009**: Meningitis
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-efb9b1e51d28f1ac"></a>
- **M06-CAP-SPECIALTY-efb9b1e51d28f1ac**: Antibiotic Monitoring
  Origin: original 3027

<a id="M06-CAP-SPECIALTY-aa92824cc7b2791a"></a>
- **M06-CAP-SPECIALTY-aa92824cc7b2791a**: Supports neonatal nutritional management.
  Origin: original 3028

<a id="M06-CAP-SPECIALTY-c7afee8d9da93eb7"></a>
- **M06-CAP-SPECIALTY-c7afee8d9da93eb7**: Breast Milk Feeding
  Origin: original 3028

<a id="M06-CAP-SPECIALTY-ba01ec5e890fa20c"></a>
- **M06-CAP-SPECIALTY-ba01ec5e890fa20c**: Donor Milk
  Origin: original 3028

<a id="M06-CAP-SPECIALTY-d79f5f6bfaee16b9"></a>
- **M06-CAP-SPECIALTY-d79f5f6bfaee16b9**: Supports congenital anomaly management.
  Origin: original 3032

<a id="M06-CAP-SPECIALTY-453c99950f62440b"></a>
- **M06-CAP-SPECIALTY-453c99950f62440b**: Congenital Malformations
  Origin: original 3032, original 4626

<a id="M06-CAP-SPECIALTY-c2f6d8617add1dbc"></a>
- **M06-CAP-SPECIALTY-c2f6d8617add1dbc**: Chromosomal Disorders
  Origin: original 3032

<a id="M06-CAP-SPECIALTY-9919d10042396c86"></a>
- **M06-CAP-SPECIALTY-9919d10042396c86**: Genetic Counseling
  Origin: original 3032

<a id="M06-CAP-SPECIALTY-cd0a0f0f29929499"></a>
- **M06-CAP-SPECIALTY-cd0a0f0f29929499**: Surgical Planning
  Origin: original 3032, original 4606, original 4626, original 4629, original 4635, original 4640, original 5101, original 5110, original 5112, original 5125

<a id="M06-CAP-SPECIALTY-6b2e5c3f12e34940"></a>
- **M06-CAP-SPECIALTY-6b2e5c3f12e34940**: Supports neurological disorders in newborns.
  Origin: original 3033, original 3266

<a id="M06-CAP-SPECIALTY-de087ab2b1459244"></a>
- **M06-CAP-SPECIALTY-de087ab2b1459244**: Hypoxic-Ischemic Encephalopathy
  Origin: original 3033, original 3266

<a id="M06-CAP-SPECIALTY-534e334c664deeea"></a>
- **M06-CAP-SPECIALTY-534e334c664deeea**: Neonatal Seizures
  Origin: original 3033, original 3266

<a id="M06-CAP-SPECIALTY-c5e4059f492d6111"></a>
- **M06-CAP-SPECIALTY-c5e4059f492d6111**: Brain Injury
  Origin: original 3033

<a id="M06-CAP-SPECIALTY-8be196da47b0f502"></a>
- **M06-CAP-SPECIALTY-8be196da47b0f502**: Neuroimaging
  Origin: original 3033, original 4626, original 4627, original 4632, original 4637, original 5101, original 5126, original 5150

<a id="M06-CAP-SPECIALTY-3d8d5abff9292577"></a>
- **M06-CAP-SPECIALTY-3d8d5abff9292577**: Coordinates the complete neonatology ecosystem.
  Origin: original 3040

<a id="M06-CAP-SPECIALTY-b1f8181affffc03b"></a>
- **M06-CAP-SPECIALTY-b1f8181affffc03b**: AI
  Origin: original 3040, original 3080, original 3140, original 3180, original 3200, original 3259, original 3279, original 3280, original 3300, original 3380, original 3460

<a id="M06-CAP-SPECIALTY-382561e335e4526e"></a>
- **M06-CAP-SPECIALTY-382561e335e4526e**: Obstetrics
  Origin: original 3040, original 3279

<a id="M06-CAP-SPECIALTY-e9eb7b780843070a"></a>
- **M06-CAP-SPECIALTY-e9eb7b780843070a**: Pediatrics
  Origin: original 3040, original 3981, original 4000, original 4701, original 4826, original 4976, original 5026, original 5028, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-ef5990ea3c77ca73"></a>
- **M06-CAP-SPECIALTY-ef5990ea3c77ca73**: Laboratory Services
  Origin: original 3040, original 3080, original 3140, original 3180, original 3200

<a id="M06-CAP-SPECIALTY-338cd6a1ad180ca5"></a>
- **M06-CAP-SPECIALTY-338cd6a1ad180ca5**: Telemedicine
  Origin: original 3040, original 3080, original 3140, original 3180, original 3200, original 3280, original 3300, original 3380, original 3460, original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4161, original 4200, original 4450, original 4451, original 4500, original 4575, original 4600, original 4650, original 4725

<a id="M06-CAP-SPECIALTY-deac2510db512463"></a>
- **M06-CAP-SPECIALTY-deac2510db512463**: Provides intelligent neonatal care and lifelong developmental support across the EDHT ecosystem.
  Origin: original 3040

<a id="M06-CAP-SPECIALTY-d707d9c5996125d8"></a>
- **M06-CAP-SPECIALTY-d707d9c5996125d8**: Central platform for pediatric cardiology.
  Origin: original 3061, original 3661, original 4061

<a id="M06-CAP-SPECIALTY-af2f2b830606750c"></a>
- **M06-CAP-SPECIALTY-af2f2b830606750c**: Acquired Cardiac Disease
  Origin: original 3061

<a id="M06-CAP-SPECIALTY-8037109e292850d2"></a>
- **M06-CAP-SPECIALTY-8037109e292850d2**: Pediatric Arrhythmias
  Origin: original 3061

<a id="M06-CAP-SPECIALTY-28dfb970788905d9"></a>
- **M06-CAP-SPECIALTY-28dfb970788905d9**: Cardiac Intensive Care
  Origin: original 3061

<a id="M06-CAP-SPECIALTY-3a8957fec8ae1b5c"></a>
- **M06-CAP-SPECIALTY-3a8957fec8ae1b5c**: Lifelong Cardiac Follow-up
  Origin: original 3061

<a id="M06-CAP-SPECIALTY-615c53b148b63c36"></a>
- **M06-CAP-SPECIALTY-615c53b148b63c36**: Integrates Cardiac Surgery, Genetics, Radiology, Intensive Care, AI and Digital Twin.
  Origin: original 3061

<a id="M06-CAP-SPECIALTY-68854c208eec309b"></a>
- **M06-CAP-SPECIALTY-68854c208eec309b**: Supports congenital cardiac disorders.
  Origin: original 3063, original 3663

<a id="M06-CAP-SPECIALTY-3bea6a23b2d94c1c"></a>
- **M06-CAP-SPECIALTY-3bea6a23b2d94c1c**: PDA
  Origin: original 3063

<a id="M06-CAP-SPECIALTY-d15b435c5b0185c9"></a>
- **M06-CAP-SPECIALTY-d15b435c5b0185c9**: Transposition of Great Arteries
  Origin: original 3063, original 3663

<a id="M06-CAP-SPECIALTY-4cc0466d0851eed6"></a>
- **M06-CAP-SPECIALTY-4cc0466d0851eed6**: Complex Congenital Heart Disease
  Origin: original 3063

<a id="M06-CAP-SPECIALTY-582855cac67c9d57"></a>
- **M06-CAP-SPECIALTY-582855cac67c9d57**: Supports rhythm disorders in children.
  Origin: original 3065

<a id="M06-CAP-SPECIALTY-c7810455e5b679d8"></a>
- **M06-CAP-SPECIALTY-c7810455e5b679d8**: Ventricular Arrhythmias
  Origin: original 3065, original 3666, original 4066

<a id="M06-CAP-SPECIALTY-6b15ee1a567e01d5"></a>
- **M06-CAP-SPECIALTY-6b15ee1a567e01d5**: Congenital Channelopathies
  Origin: original 3065

<a id="M06-CAP-SPECIALTY-41ff5965a46c90e9"></a>
- **M06-CAP-SPECIALTY-41ff5965a46c90e9**: Holter Monitoring
  Origin: original 3065, original 4066

<a id="M06-CAP-SPECIALTY-9a1f4721d2fbaad3"></a>
- **M06-CAP-SPECIALTY-9a1f4721d2fbaad3**: Electrophysiology
  Origin: original 3065, original 3661, original 3680

<a id="M06-CAP-SPECIALTY-465feb1d42fc8706"></a>
- **M06-CAP-SPECIALTY-465feb1d42fc8706**: Supports pediatric heart failure management.
  Origin: original 3066, original 3668, original 4068

<a id="M06-CAP-SPECIALTY-1ded39aa11057196"></a>
- **M06-CAP-SPECIALTY-1ded39aa11057196**: Dilated Cardiomyopathy
  Origin: original 3066

<a id="M06-CAP-SPECIALTY-f89daf1cea9a131f"></a>
- **M06-CAP-SPECIALTY-f89daf1cea9a131f**: Myocarditis
  Origin: original 3066

<a id="M06-CAP-SPECIALTY-f385d51d6f20351c"></a>
- **M06-CAP-SPECIALTY-f385d51d6f20351c**: Congenital Heart Failure
  Origin: original 3066

<a id="M06-CAP-SPECIALTY-13f23989e375082a"></a>
- **M06-CAP-SPECIALTY-13f23989e375082a**: Mechanical Support
  Origin: original 3066

<a id="M06-CAP-SPECIALTY-bd9980ccf6bd0a41"></a>
- **M06-CAP-SPECIALTY-bd9980ccf6bd0a41**: Long-term Monitoring
  Origin: original 3066, original 3165

<a id="M06-CAP-SPECIALTY-91eb41da5cdb999b"></a>
- **M06-CAP-SPECIALTY-91eb41da5cdb999b**: Coordinates the complete pediatric cardiology ecosystem.
  Origin: original 3080, original 3680, original 4080

<a id="M06-CAP-SPECIALTY-ac6adaa5b404ffd2"></a>
- **M06-CAP-SPECIALTY-ac6adaa5b404ffd2**: Cardiac Surgery
  Origin: original 3080, original 3680, original 4080

<a id="M06-CAP-SPECIALTY-c062dc13ee048cfd"></a>
- **M06-CAP-SPECIALTY-c062dc13ee048cfd**: Radiology
  Origin: original 3080, original 3140, original 3180, original 3200, original 3280, original 4221, original 4551, original 4575, original 4629, original 4632, original 4640, original 4641, original 4987, original 5029, original 5035, original 5101, original 5103, original 5108, original 5109, original 5112, original 5113, original 5117, original 5118, original 5126, original 5136, original 5139, original 5140, original 5141

<a id="M06-CAP-SPECIALTY-be2e91874e7fd4c1"></a>
- **M06-CAP-SPECIALTY-be2e91874e7fd4c1**: Provides intelligent lifelong pediatric cardiovascular care across the EDHT ecosystem.
  Origin: original 3080

<a id="M06-CAP-SPECIALTY-61807d96009dd8b6"></a>
- **M06-CAP-SPECIALTY-61807d96009dd8b6**: Central platform for pediatric oncology.
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-5c7550e2ff4948c3"></a>
- **M06-CAP-SPECIALTY-5c7550e2ff4948c3**: Hematologic Malignancies
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-1751baa23ad6a482"></a>
- **M06-CAP-SPECIALTY-1751baa23ad6a482**: Solid Tumors
  Origin: original 3121, original 4201

<a id="M06-CAP-SPECIALTY-cd9cc84ecdc81938"></a>
- **M06-CAP-SPECIALTY-cd9cc84ecdc81938**: Neuro-Oncology
  Origin: original 3121, original 4626, original 4650, original 5129, original 5136, original 5137, original 5138, original 5139, original 5140, original 5141, original 5142, original 5143, original 5144, original 5145, original 5146

<a id="M06-CAP-SPECIALTY-87e2cf0685e99896"></a>
- **M06-CAP-SPECIALTY-87e2cf0685e99896**: Bone Tumors
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-51265ec445b00ff0"></a>
- **M06-CAP-SPECIALTY-51265ec445b00ff0**: Survivorship Programs
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-5bed3ff2c93fd185"></a>
- **M06-CAP-SPECIALTY-5bed3ff2c93fd185**: Precision Pediatric Oncology
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-5773af7cd1350826"></a>
- **M06-CAP-SPECIALTY-5773af7cd1350826**: Integrates Genetics, Molecular Biology, Pathology, Radiology, AI and Digital Twin.
  Origin: original 3121

<a id="M06-CAP-SPECIALTY-f034b9e2bf918456"></a>
- **M06-CAP-SPECIALTY-f034b9e2bf918456**: Supports childhood leukemia management.
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-14e9317be9852528"></a>
- **M06-CAP-SPECIALTY-14e9317be9852528**: ALL
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-f9a4c869488d2aba"></a>
- **M06-CAP-SPECIALTY-f9a4c869488d2aba**: AML
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-da077a53fd0f21fd"></a>
- **M06-CAP-SPECIALTY-da077a53fd0f21fd**: Mixed Lineage Leukemia
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-0291ae91d4c57233"></a>
- **M06-CAP-SPECIALTY-0291ae91d4c57233**: Relapse Monitoring
  Origin: original 3123, original 4204

<a id="M06-CAP-SPECIALTY-e574934fd6a5ab5c"></a>
- **M06-CAP-SPECIALTY-e574934fd6a5ab5c**: MRD Assessment
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-ff695de7fa9aebf5"></a>
- **M06-CAP-SPECIALTY-ff695de7fa9aebf5**: Precision Therapy
  Origin: original 3123

<a id="M06-CAP-SPECIALTY-14a0b7fe0ce2e27e"></a>
- **M06-CAP-SPECIALTY-14a0b7fe0ce2e27e**: Supports childhood CNS tumors.
  Origin: original 3125

<a id="M06-CAP-SPECIALTY-a8ef8faf77e9ba4d"></a>
- **M06-CAP-SPECIALTY-a8ef8faf77e9ba4d**: Medulloblastoma
  Origin: original 3125, original 5150

<a id="M06-CAP-SPECIALTY-d5c437f311516864"></a>
- **M06-CAP-SPECIALTY-d5c437f311516864**: Glioma
  Origin: original 3125

<a id="M06-CAP-SPECIALTY-200bbf3db1c256a0"></a>
- **M06-CAP-SPECIALTY-200bbf3db1c256a0**: Ependymoma
  Origin: original 3125, original 5150

<a id="M06-CAP-SPECIALTY-98e2a989574fcd69"></a>
- **M06-CAP-SPECIALTY-98e2a989574fcd69**: ATRT
  Origin: original 3125

<a id="M06-CAP-SPECIALTY-81793a86bf41dfe8"></a>
- **M06-CAP-SPECIALTY-81793a86bf41dfe8**: Craniopharyngioma
  Origin: original 3125

<a id="M06-CAP-SPECIALTY-4c103792cf9ea8e6"></a>
- **M06-CAP-SPECIALTY-4c103792cf9ea8e6**: Integrates Neurosurgery, Radiotherapy and Molecular Diagnostics.
  Origin: original 3125

<a id="M06-CAP-SPECIALTY-02b8a9744d4a78c4"></a>
- **M06-CAP-SPECIALTY-02b8a9744d4a78c4**: Supports hematopoietic stem cell transplantation.
  Origin: original 3128

<a id="M06-CAP-SPECIALTY-8f9737bc42bcd793"></a>
- **M06-CAP-SPECIALTY-8f9737bc42bcd793**: Donor Matching
  Origin: original 3128

<a id="M06-CAP-SPECIALTY-04209c5e46d17da6"></a>
- **M06-CAP-SPECIALTY-04209c5e46d17da6**: Conditioning
  Origin: original 3128, original 4186

<a id="M06-CAP-SPECIALTY-99f925d0d846dcb0"></a>
- **M06-CAP-SPECIALTY-99f925d0d846dcb0**: GVHD Monitoring
  Origin: original 3128

<a id="M06-CAP-SPECIALTY-29547c8b6cbdd7e8"></a>
- **M06-CAP-SPECIALTY-29547c8b6cbdd7e8**: Immune Reconstitution
  Origin: original 3128, original 5007

<a id="M06-CAP-SPECIALTY-302a41e98289d67f"></a>
- **M06-CAP-SPECIALTY-302a41e98289d67f**: Long-term Follow-up
  Origin: original 3128, original 4186, original 4230, original 4985, original 5114

<a id="M06-CAP-SPECIALTY-204184e34f3392bd"></a>
- **M06-CAP-SPECIALTY-204184e34f3392bd**: Supports long-term survivors of childhood cancer.
  Origin: original 3138

<a id="M06-CAP-SPECIALTY-086e966b939beddb"></a>
- **M06-CAP-SPECIALTY-086e966b939beddb**: Late Toxicity Monitoring
  Origin: original 3138

<a id="M06-CAP-SPECIALTY-2db9e3dd369329e2"></a>
- **M06-CAP-SPECIALTY-2db9e3dd369329e2**: Cardiac Follow-up
  Origin: original 3138

<a id="M06-CAP-SPECIALTY-eacc0ad3be0bd8aa"></a>
- **M06-CAP-SPECIALTY-eacc0ad3be0bd8aa**: Endocrine Follow-up
  Origin: original 3138, original 5144

<a id="M06-CAP-SPECIALTY-34bf8fd57ec57631"></a>
- **M06-CAP-SPECIALTY-34bf8fd57ec57631**: Fertility Preservation
  Origin: original 3138

<a id="M06-CAP-SPECIALTY-2dc931d58fb1a634"></a>
- **M06-CAP-SPECIALTY-2dc931d58fb1a634**: Quality of Life Assessment
  Origin: original 3138

<a id="M06-CAP-SPECIALTY-052e7ee808f225ff"></a>
- **M06-CAP-SPECIALTY-052e7ee808f225ff**: Coordinates the complete pediatric oncology ecosystem.
  Origin: original 3140

<a id="M06-CAP-SPECIALTY-09166f82482c6be7"></a>
- **M06-CAP-SPECIALTY-09166f82482c6be7**: Molecular Medicine
  Origin: original 3140

<a id="M06-CAP-SPECIALTY-2d2ffbcbba25564e"></a>
- **M06-CAP-SPECIALTY-2d2ffbcbba25564e**: Pathology
  Origin: original 3140, original 4161, original 4201, original 4203, original 4221, original 4235, original 4501, original 4551, original 4626, original 4701, original 4706, original 4708, original 4976, original 5032, original 5101, original 5112, original 5126, original 5129, original 5138, original 5139

<a id="M06-CAP-SPECIALTY-2b7206f2e9721c96"></a>
- **M06-CAP-SPECIALTY-2b7206f2e9721c96**: Provides intelligent personalized pediatric cancer care across the EDHT ecosystem.
  Origin: original 3140

<a id="M06-CAP-SPECIALTY-8a72f93cb36188ac"></a>
- **M06-CAP-SPECIALTY-8a72f93cb36188ac**: Central platform for pediatric gastroenterology.
  Origin: original 3161, original 3281

<a id="M06-CAP-SPECIALTY-033a73d78618892c"></a>
- **M06-CAP-SPECIALTY-033a73d78618892c**: Gastrointestinal Diseases
  Origin: original 3161, original 3281, original 3441

<a id="M06-CAP-SPECIALTY-bba500b0c75f9d84"></a>
- **M06-CAP-SPECIALTY-bba500b0c75f9d84**: Hepatology
  Origin: original 3161, original 3180, original 3281, original 3300, original 3460, original 4550, original 4982

<a id="M06-CAP-SPECIALTY-718c5f8fab10d30d"></a>
- **M06-CAP-SPECIALTY-718c5f8fab10d30d**: Pancreatic Disorders
  Origin: original 3161, original 3281, original 3441

<a id="M06-CAP-SPECIALTY-18631a0fcf8ae805"></a>
- **M06-CAP-SPECIALTY-18631a0fcf8ae805**: Intestinal Disorders
  Origin: original 3161

<a id="M06-CAP-SPECIALTY-0df933d745f899cf"></a>
- **M06-CAP-SPECIALTY-0df933d745f899cf**: Long-term Gastrointestinal Monitoring
  Origin: original 3161

<a id="M06-CAP-SPECIALTY-b46de678e1dcd467"></a>
- **M06-CAP-SPECIALTY-b46de678e1dcd467**: Integrates Nutrition, Surgery, Genetics, Laboratory Medicine, AI and Digital Twin.
  Origin: original 3161

<a id="M06-CAP-SPECIALTY-2662fdc28edc9859"></a>
- **M06-CAP-SPECIALTY-2662fdc28edc9859**: Supports inflammatory bowel disease.
  Origin: original 3163

<a id="M06-CAP-SPECIALTY-1c09f5fc099861bf"></a>
- **M06-CAP-SPECIALTY-1c09f5fc099861bf**: Crohn Disease
  Origin: original 3163, original 3283, original 3444, original 4516

<a id="M06-CAP-SPECIALTY-a8932cac844fd207"></a>
- **M06-CAP-SPECIALTY-a8932cac844fd207**: Ulcerative Colitis
  Origin: original 3163, original 3283, original 3444, original 4516

<a id="M06-CAP-SPECIALTY-0f70f98b64064c11"></a>
- **M06-CAP-SPECIALTY-0f70f98b64064c11**: Indeterminate Colitis
  Origin: original 3163, original 3283

<a id="M06-CAP-SPECIALTY-3ba92a774d0545d8"></a>
- **M06-CAP-SPECIALTY-3ba92a774d0545d8**: Biological Therapy
  Origin: original 3163, original 5026, original 5028, original 5031, original 5050

<a id="M06-CAP-SPECIALTY-d9192a602ca7e43b"></a>
- **M06-CAP-SPECIALTY-d9192a602ca7e43b**: Disease Activity Monitoring
  Origin: original 3163

<a id="M06-CAP-SPECIALTY-568a35e46ba1c461"></a>
- **M06-CAP-SPECIALTY-568a35e46ba1c461**: Supports functional gastrointestinal disorders.
  Origin: original 3165, original 3285

<a id="M06-CAP-SPECIALTY-43974f7a4aa41bc6"></a>
- **M06-CAP-SPECIALTY-43974f7a4aa41bc6**: Functional Constipation
  Origin: original 3165, original 3285, original 3445

<a id="M06-CAP-SPECIALTY-11ebe4a28b7bb306"></a>
- **M06-CAP-SPECIALTY-11ebe4a28b7bb306**: Irritable Bowel Syndrome
  Origin: original 3165

<a id="M06-CAP-SPECIALTY-d33c599ae0f4c1d6"></a>
- **M06-CAP-SPECIALTY-d33c599ae0f4c1d6**: Functional Abdominal Pain
  Origin: original 3165, original 3285, original 3445

<a id="M06-CAP-SPECIALTY-8f1e03af222d3364"></a>
- **M06-CAP-SPECIALTY-8f1e03af222d3364**: Functional Dyspepsia
  Origin: original 3165, original 3285, original 3445

<a id="M06-CAP-SPECIALTY-52210a4e7637d1c9"></a>
- **M06-CAP-SPECIALTY-52210a4e7637d1c9**: Supports nutritional medicine.
  Origin: original 3168

<a id="M06-CAP-SPECIALTY-51c87bd0f0e01c66"></a>
- **M06-CAP-SPECIALTY-51c87bd0f0e01c66**: Malnutrition
  Origin: original 3168, original 3288, original 3448

<a id="M06-CAP-SPECIALTY-ec8eda6872ff2348"></a>
- **M06-CAP-SPECIALTY-ec8eda6872ff2348**: Obesity
  Origin: original 3168, original 3288, original 3448

<a id="M06-CAP-SPECIALTY-09bffd16808a8eea"></a>
- **M06-CAP-SPECIALTY-09bffd16808a8eea**: Micronutrient Monitoring
  Origin: original 3168

<a id="M06-CAP-SPECIALTY-8954a9113edcce0f"></a>
- **M06-CAP-SPECIALTY-8954a9113edcce0f**: Growth Assessment
  Origin: original 3168, original 3268

<a id="M06-CAP-SPECIALTY-8936f9f4a2aa2679"></a>
- **M06-CAP-SPECIALTY-8936f9f4a2aa2679**: Coordinates the complete pediatric gastroenterology ecosystem.
  Origin: original 3180, original 3300, original 3460

<a id="M06-CAP-SPECIALTY-63577150dda5e948"></a>
- **M06-CAP-SPECIALTY-63577150dda5e948**: Provides intelligent lifelong digestive health management across the EDHT ecosystem.
  Origin: original 3180

<a id="M06-CAP-SPECIALTY-3174765510882ed2"></a>
- **M06-CAP-SPECIALTY-3174765510882ed2**: Central platform for pediatric pulmonology.
  Origin: original 3181, original 3361

<a id="M06-CAP-SPECIALTY-3abb6984e52f1f58"></a>
- **M06-CAP-SPECIALTY-3abb6984e52f1f58**: Congenital Lung Diseases
  Origin: original 3181

<a id="M06-CAP-SPECIALTY-dbad6983f50063f7"></a>
- **M06-CAP-SPECIALTY-dbad6983f50063f7**: Airway Disorders
  Origin: original 3181, original 4451, original 4500

<a id="M06-CAP-SPECIALTY-c50b309580bb8e30"></a>
- **M06-CAP-SPECIALTY-c50b309580bb8e30**: Asthma
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M06-CAP-SPECIALTY-aafad16364904aca"></a>
- **M06-CAP-SPECIALTY-aafad16364904aca**: Cystic Fibrosis
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M06-CAP-SPECIALTY-3c6a72da9f80b890"></a>
- **M06-CAP-SPECIALTY-3c6a72da9f80b890**: Chronic Respiratory Diseases
  Origin: original 3181

<a id="M06-CAP-SPECIALTY-1ee452ae74b7deea"></a>
- **M06-CAP-SPECIALTY-1ee452ae74b7deea**: Respiratory Failure
  Origin: original 3181, original 3361, original 4451, original 4500

<a id="M06-CAP-SPECIALTY-a479042b934de637"></a>
- **M06-CAP-SPECIALTY-a479042b934de637**: Integrates Intensive Care, Allergy, Genetics, Radiology, AI and Digital Twin. :contentReference[oaicite:0]{index=0}
  Origin: original 3181

<a id="M06-CAP-SPECIALTY-3d52b05717a3c4a4"></a>
- **M06-CAP-SPECIALTY-3d52b05717a3c4a4**: Supports childhood asthma management.
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-13370fa591d5fb93"></a>
- **M06-CAP-SPECIALTY-13370fa591d5fb93**: Severity Classification
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-5e66e60b90847a0c"></a>
- **M06-CAP-SPECIALTY-5e66e60b90847a0c**: Trigger Identification
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-c615dcdda4ff208a"></a>
- **M06-CAP-SPECIALTY-c615dcdda4ff208a**: Inhalation Therapy
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-0a84a6b4111ad61e"></a>
- **M06-CAP-SPECIALTY-0a84a6b4111ad61e**: Exacerbation Prevention
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-a216fbf6c12326ba"></a>
- **M06-CAP-SPECIALTY-a216fbf6c12326ba**: Personalized Asthma Plans
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-1d681bd832996557"></a>
- **M06-CAP-SPECIALTY-1d681bd832996557**: AI Risk Prediction
  Origin: original 3183

<a id="M06-CAP-SPECIALTY-9bc9957dc1ec787f"></a>
- **M06-CAP-SPECIALTY-9bc9957dc1ec787f**: Supports lifelong cystic fibrosis management.
  Origin: original 3184

<a id="M06-CAP-SPECIALTY-11d7bc32a3d0beb3"></a>
- **M06-CAP-SPECIALTY-11d7bc32a3d0beb3**: CFTR Genotype
  Origin: original 3184

<a id="M06-CAP-SPECIALTY-28cd4c8ebb038965"></a>
- **M06-CAP-SPECIALTY-28cd4c8ebb038965**: Pulmonary Function
  Origin: original 3184, original 4471, original 4500

<a id="M06-CAP-SPECIALTY-f2d18546045624ba"></a>
- **M06-CAP-SPECIALTY-f2d18546045624ba**: Infection Monitoring
  Origin: original 3184

<a id="M06-CAP-SPECIALTY-b9db3e4a5f5b934d"></a>
- **M06-CAP-SPECIALTY-b9db3e4a5f5b934d**: Nutritional Therapy
  Origin: original 3184

<a id="M06-CAP-SPECIALTY-92ac6d2510201cf6"></a>
- **M06-CAP-SPECIALTY-92ac6d2510201cf6**: CFTR Modulators
  Origin: original 3184

<a id="M06-CAP-SPECIALTY-96c457a9cf29c342"></a>
- **M06-CAP-SPECIALTY-96c457a9cf29c342**: Long-term Outcomes
  Origin: original 3184, original 4626, original 4630, original 4637, original 4639, original 4826, original 4976, original 4981, original 5026, original 5101, original 5107, original 5109, original 5110, original 5144

<a id="M06-CAP-SPECIALTY-cf144854d7c5c9a2"></a>
- **M06-CAP-SPECIALTY-cf144854d7c5c9a2**: Coordinates the complete pediatric pulmonology ecosystem.
  Origin: original 3200, original 3380

<a id="M06-CAP-SPECIALTY-2356a36c34e89685"></a>
- **M06-CAP-SPECIALTY-2356a36c34e89685**: Allergy
  Origin: original 3200, original 3380, original 4455

<a id="M06-CAP-SPECIALTY-4264c82362ebdaaf"></a>
- **M06-CAP-SPECIALTY-4264c82362ebdaaf**: Provides intelligent lifelong respiratory care across the EDHT ecosystem. :contentReference[oaicite:1]{index=1}
  Origin: original 3200

<a id="M06-CAP-SPECIALTY-82d7c84a6db55aca"></a>
- **M06-CAP-SPECIALTY-82d7c84a6db55aca**: Central platform for pediatric hematology.
  Origin: original 3241

<a id="M06-CAP-SPECIALTY-25385ddfecb6fa2c"></a>
- **M06-CAP-SPECIALTY-25385ddfecb6fa2c**: Anemia
  Origin: original 3241, original 4200, original 4976, original 5000

<a id="M06-CAP-SPECIALTY-f5fd92935ded8516"></a>
- **M06-CAP-SPECIALTY-f5fd92935ded8516**: Hemoglobinopathies
  Origin: original 3241, original 4161, original 4200, original 5000

<a id="M06-CAP-SPECIALTY-e5d01e625027a615"></a>
- **M06-CAP-SPECIALTY-e5d01e625027a615**: Coagulation Disorders
  Origin: original 3241

<a id="M06-CAP-SPECIALTY-19826fe194bf1adf"></a>
- **M06-CAP-SPECIALTY-19826fe194bf1adf**: Bone Marrow Disorders
  Origin: original 3241, original 4976

<a id="M06-CAP-SPECIALTY-7f223485ff5d93d9"></a>
- **M06-CAP-SPECIALTY-7f223485ff5d93d9**: Platelet Diseases
  Origin: original 3241

<a id="M06-CAP-SPECIALTY-6c1446c0c5038e01"></a>
- **M06-CAP-SPECIALTY-6c1446c0c5038e01**: Pediatric Hemostasis
  Origin: original 3241

<a id="M06-CAP-SPECIALTY-13028a6ad39b92b9"></a>
- **M06-CAP-SPECIALTY-13028a6ad39b92b9**: Integrates Genetics, Laboratory Medicine, Transfusion Medicine, Oncology, AI and Digital Twin.
  Origin: original 3241

<a id="M06-CAP-SPECIALTY-be523de5639fc63e"></a>
- **M06-CAP-SPECIALTY-be523de5639fc63e**: Supports diagnosis and treatment of childhood anemia.
  Origin: original 3243

<a id="M06-CAP-SPECIALTY-efd9cc3cff2f041a"></a>
- **M06-CAP-SPECIALTY-efd9cc3cff2f041a**: Iron Deficiency Anemia
  Origin: original 3243

<a id="M06-CAP-SPECIALTY-26f84ab4e6ba4d71"></a>
- **M06-CAP-SPECIALTY-26f84ab4e6ba4d71**: Chronic Disease Anemia
  Origin: original 3243

<a id="M06-CAP-SPECIALTY-ceef51b3835eb1a1"></a>
- **M06-CAP-SPECIALTY-ceef51b3835eb1a1**: Provides diagnostic algorithms, treatment pathways and long-term monitoring.
  Origin: original 3243

<a id="M06-CAP-SPECIALTY-bca1331283cf35ad"></a>
- **M06-CAP-SPECIALTY-bca1331283cf35ad**: Supports inherited hemoglobin disorders.
  Origin: original 3244

<a id="M06-CAP-SPECIALTY-77ae659bc55da439"></a>
- **M06-CAP-SPECIALTY-77ae659bc55da439**: Alpha-Thalassemia
  Origin: original 3244

<a id="M06-CAP-SPECIALTY-f4c3465b3f886538"></a>
- **M06-CAP-SPECIALTY-f4c3465b3f886538**: Beta-Thalassemia
  Origin: original 3244

<a id="M06-CAP-SPECIALTY-dac2c5a055e2d1fa"></a>
- **M06-CAP-SPECIALTY-dac2c5a055e2d1fa**: Rare Hemoglobin Variants
  Origin: original 3244

<a id="M06-CAP-SPECIALTY-f0d98e8af4e7bc01"></a>
- **M06-CAP-SPECIALTY-f0d98e8af4e7bc01**: Chronic Transfusion Programs
  Origin: original 3244

<a id="M06-CAP-SPECIALTY-ee09f6ad71c40ce7"></a>
- **M06-CAP-SPECIALTY-ee09f6ad71c40ce7**: Supports pediatric coagulation disorders.
  Origin: original 3245

<a id="M06-CAP-SPECIALTY-34c74ffb6f6cb583"></a>
- **M06-CAP-SPECIALTY-34c74ffb6f6cb583**: Rare Factor Deficiencies
  Origin: original 3245

<a id="M06-CAP-SPECIALTY-b37b9107b356b36f"></a>
- **M06-CAP-SPECIALTY-b37b9107b356b36f**: Anticoagulation Management
  Origin: original 3245

<a id="M06-CAP-SPECIALTY-9dda5f19397a0547"></a>
- **M06-CAP-SPECIALTY-9dda5f19397a0547**: Supports platelet diseases.
  Origin: original 3246

<a id="M06-CAP-SPECIALTY-758b5c303d8cf40d"></a>
- **M06-CAP-SPECIALTY-758b5c303d8cf40d**: Immune Thrombocytopenia
  Origin: original 3246, original 4170

<a id="M06-CAP-SPECIALTY-4a87b1c6a26989b0"></a>
- **M06-CAP-SPECIALTY-4a87b1c6a26989b0**: Congenital Platelet Disorders
  Origin: original 3246

<a id="M06-CAP-SPECIALTY-122e1952e51eb839"></a>
- **M06-CAP-SPECIALTY-122e1952e51eb839**: Thrombocytosis
  Origin: original 3246

<a id="M06-CAP-SPECIALTY-74bc050a22b9153d"></a>
- **M06-CAP-SPECIALTY-74bc050a22b9153d**: Platelet Function Disorders
  Origin: original 3246, original 4176

<a id="M06-CAP-SPECIALTY-3295e0de64971593"></a>
- **M06-CAP-SPECIALTY-3295e0de64971593**: Bleeding Risk Assessment
  Origin: original 3246

<a id="M06-CAP-SPECIALTY-5b638f7b16dc009d"></a>
- **M06-CAP-SPECIALTY-5b638f7b16dc009d**: Supports bone marrow failure syndromes.
  Origin: original 3247

<a id="M06-CAP-SPECIALTY-bc4de264ba630d2f"></a>
- **M06-CAP-SPECIALTY-bc4de264ba630d2f**: Fanconi Anemia
  Origin: original 3247

<a id="M06-CAP-SPECIALTY-f45ddeaea1bc299a"></a>
- **M06-CAP-SPECIALTY-f45ddeaea1bc299a**: Diamond–Blackfan Anemia
  Origin: original 3247

<a id="M06-CAP-SPECIALTY-bbd885fc1fcd1068"></a>
- **M06-CAP-SPECIALTY-bbd885fc1fcd1068**: Congenital Marrow Failure
  Origin: original 3247

<a id="M06-CAP-SPECIALTY-42211aad0aff0ae8"></a>
- **M06-CAP-SPECIALTY-42211aad0aff0ae8**: Stem Cell Transplant Planning
  Origin: original 3247

<a id="M06-CAP-SPECIALTY-3c5e2d9f801bbdad"></a>
- **M06-CAP-SPECIALTY-3c5e2d9f801bbdad**: Coordinates pediatric hematologic disease management.
  Origin: original 3259

<a id="M06-CAP-SPECIALTY-d5201c8c85a8f994"></a>
- **M06-CAP-SPECIALTY-d5201c8c85a8f994**: Hematology
  Origin: original 3259, original 4636, original 4704, original 4979, original 4981, original 4982, original 4983, original 4985, original 4987, original 4989, original 4990, original 4991, original 5031, original 5117, original 5118

<a id="M06-CAP-SPECIALTY-6b1b617f18c456db"></a>
- **M06-CAP-SPECIALTY-6b1b617f18c456db**: Oncology
  Origin: original 3259, original 4221, original 4976, original 4987, original 4989, original 5101, original 5112, original 5126

<a id="M06-CAP-SPECIALTY-ab3aa4b66310e203"></a>
- **M06-CAP-SPECIALTY-ab3aa4b66310e203**: Transfusion Medicine
  Origin: original 3259, original 4161, original 4200, original 4976, original 5000

<a id="M06-CAP-SPECIALTY-07e6752f008390f7"></a>
- **M06-CAP-SPECIALTY-07e6752f008390f7**: Supports lifelong blood disease management beginning from infancy.
  Origin: original 3259

<a id="M06-CAP-SPECIALTY-88c98627da394536"></a>
- **M06-CAP-SPECIALTY-88c98627da394536**: Prematurity
  Origin: original 3261

<a id="M06-CAP-SPECIALTY-d9ec6bfec97a5b1d"></a>
- **M06-CAP-SPECIALTY-d9ec6bfec97a5b1d**: Neonatal Resuscitation
  Origin: original 3261

<a id="M06-CAP-SPECIALTY-eecbb9cc5fdd02f3"></a>
- **M06-CAP-SPECIALTY-eecbb9cc5fdd02f3**: High-risk Newborn Follow-up
  Origin: original 3261

<a id="M06-CAP-SPECIALTY-f1c47adfcc1b551a"></a>
- **M06-CAP-SPECIALTY-f1c47adfcc1b551a**: Integrates Obstetrics, Genetics, Pediatric Surgery, Intensive Care, AI and Digital Twin.
  Origin: original 3261

<a id="M06-CAP-SPECIALTY-e834849a01390921"></a>
- **M06-CAP-SPECIALTY-e834849a01390921**: Supports management of premature infants.
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-258f4defb828d7ca"></a>
- **M06-CAP-SPECIALTY-258f4defb828d7ca**: Extremely Preterm
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-f46a2770fa0d0952"></a>
- **M06-CAP-SPECIALTY-f46a2770fa0d0952**: Very Preterm
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-2ee4214cb4508e25"></a>
- **M06-CAP-SPECIALTY-2ee4214cb4508e25**: Moderate Preterm
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-973be014afeb2519"></a>
- **M06-CAP-SPECIALTY-973be014afeb2519**: Neurodevelopment Follow-up
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-fd3dec597344102f"></a>
- **M06-CAP-SPECIALTY-fd3dec597344102f**: Complication Prevention
  Origin: original 3263

<a id="M06-CAP-SPECIALTY-3ad5a1aeef10381f"></a>
- **M06-CAP-SPECIALTY-3ad5a1aeef10381f**: Supports neonatal intensive care.
  Origin: original 3264

<a id="M06-CAP-SPECIALTY-5eb811a2a8308cb6"></a>
- **M06-CAP-SPECIALTY-5eb811a2a8308cb6**: High-frequency Ventilation
  Origin: original 3264

<a id="M06-CAP-SPECIALTY-fd1ca03f9b63a22c"></a>
- **M06-CAP-SPECIALTY-fd1ca03f9b63a22c**: Nutritional Support
  Origin: original 3264

<a id="M06-CAP-SPECIALTY-707096eac478669f"></a>
- **M06-CAP-SPECIALTY-707096eac478669f**: Supports neonatal respiratory diseases.
  Origin: original 3265

<a id="M06-CAP-SPECIALTY-1c89df5f78800c3d"></a>
- **M06-CAP-SPECIALTY-1c89df5f78800c3d**: Apnea of Prematurity
  Origin: original 3265

<a id="M06-CAP-SPECIALTY-1ae98b71188c8a6c"></a>
- **M06-CAP-SPECIALTY-1ae98b71188c8a6c**: Intraventricular Hemorrhage
  Origin: original 3266

<a id="M06-CAP-SPECIALTY-9e1fbff34252cdfc"></a>
- **M06-CAP-SPECIALTY-9e1fbff34252cdfc**: Periventricular Leukomalacia
  Origin: original 3266

<a id="M06-CAP-SPECIALTY-bad703705c2c0af3"></a>
- **M06-CAP-SPECIALTY-bad703705c2c0af3**: Neurodevelopmental Monitoring
  Origin: original 3266

<a id="M06-CAP-SPECIALTY-66c589a91feec39e"></a>
- **M06-CAP-SPECIALTY-66c589a91feec39e**: Supports congenital anomalies.
  Origin: original 3267

<a id="M06-CAP-SPECIALTY-96dfaac8b4c5eda7"></a>
- **M06-CAP-SPECIALTY-96dfaac8b4c5eda7**: Neural Tube Defects
  Origin: original 3267, original 4630, original 5125

<a id="M06-CAP-SPECIALTY-bd95816a8a92fc96"></a>
- **M06-CAP-SPECIALTY-bd95816a8a92fc96**: Gastrointestinal Malformations
  Origin: original 3267

<a id="M06-CAP-SPECIALTY-2a94c13b7cdf0c85"></a>
- **M06-CAP-SPECIALTY-2a94c13b7cdf0c85**: Renal Malformations
  Origin: original 3267

<a id="M06-CAP-SPECIALTY-59c54a28f652829f"></a>
- **M06-CAP-SPECIALTY-59c54a28f652829f**: Craniofacial Disorders
  Origin: original 3267

<a id="M06-CAP-SPECIALTY-f6d2d7634332d086"></a>
- **M06-CAP-SPECIALTY-f6d2d7634332d086**: Supports nutritional care in newborns.
  Origin: original 3268

<a id="M06-CAP-SPECIALTY-753af064f41c1c7a"></a>
- **M06-CAP-SPECIALTY-753af064f41c1c7a**: Breastfeeding
  Origin: original 3268

<a id="M06-CAP-SPECIALTY-f4a5eea090e4edc4"></a>
- **M06-CAP-SPECIALTY-f4a5eea090e4edc4**: Enteral Feeding
  Origin: original 3268

<a id="M06-CAP-SPECIALTY-9e5d52f578f0a26a"></a>
- **M06-CAP-SPECIALTY-9e5d52f578f0a26a**: Human Milk Fortification
  Origin: original 3268

<a id="M06-CAP-SPECIALTY-9ddb281252db6c6a"></a>
- **M06-CAP-SPECIALTY-9ddb281252db6c6a**: Supports inherited neonatal diseases.
  Origin: original 3277

<a id="M06-CAP-SPECIALTY-0e5447bd202a613f"></a>
- **M06-CAP-SPECIALTY-0e5447bd202a613f**: Rare Genetic Disorders
  Origin: original 3277

<a id="M06-CAP-SPECIALTY-61b93ceb0f12940b"></a>
- **M06-CAP-SPECIALTY-61b93ceb0f12940b**: Congenital Syndromes
  Origin: original 3277, original 4172

<a id="M06-CAP-SPECIALTY-c555fe571cd9c340"></a>
- **M06-CAP-SPECIALTY-c555fe571cd9c340**: Whole Genome Sequencing
  Origin: original 3277

<a id="M06-CAP-SPECIALTY-ff50639fcf6f4824"></a>
- **M06-CAP-SPECIALTY-ff50639fcf6f4824**: Family Counseling
  Origin: original 3277

<a id="M06-CAP-SPECIALTY-b10154ea01b7127c"></a>
- **M06-CAP-SPECIALTY-b10154ea01b7127c**: Precision Diagnosis
  Origin: original 3277

<a id="M06-CAP-SPECIALTY-ef99fcbbb6dd7b0d"></a>
- **M06-CAP-SPECIALTY-ef99fcbbb6dd7b0d**: Coordinates neonatal medicine.
  Origin: original 3279

<a id="M06-CAP-SPECIALTY-421ca349036f249c"></a>
- **M06-CAP-SPECIALTY-421ca349036f249c**: Neonatology
  Origin: original 3279, original 4630, original 5101, original 5103

<a id="M06-CAP-SPECIALTY-c2019eedd0fafbb1"></a>
- **M06-CAP-SPECIALTY-c2019eedd0fafbb1**: Pediatric Surgery
  Origin: original 3279

<a id="M06-CAP-SPECIALTY-e0a36825c0e62b82"></a>
- **M06-CAP-SPECIALTY-e0a36825c0e62b82**: Supports the complete continuum from delivery room to infant follow-up.
  Origin: original 3279

<a id="M06-CAP-SPECIALTY-93d3e145ffe5b2e5"></a>
- **M06-CAP-SPECIALTY-93d3e145ffe5b2e5**: Coordinates the complete neonatal ecosystem.
  Origin: original 3280

<a id="M06-CAP-SPECIALTY-35ff4287a628c0a4"></a>
- **M06-CAP-SPECIALTY-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 3280, original 3300, original 3380, original 3460, original 4161, original 4203, original 4401, original 4551, original 4575, original 4708, original 4976, original 4979, original 4983, original 4985, original 4990, original 4991, original 5032

<a id="M06-CAP-SPECIALTY-7ee77cb8507d016d"></a>
- **M06-CAP-SPECIALTY-7ee77cb8507d016d**: Clinical Research
  Origin: original 3280, original 3680, original 4000, original 4080, original 4200

<a id="M06-CAP-SPECIALTY-5794c7e670887db2"></a>
- **M06-CAP-SPECIALTY-5794c7e670887db2**: Provides intelligent newborn care across the EDHT ecosystem from birth through infancy.
  Origin: original 3280

<a id="M06-CAP-SPECIALTY-7fd3aec392aa0a1e"></a>
- **M06-CAP-SPECIALTY-7fd3aec392aa0a1e**: Inflammatory Bowel Disease
  Origin: original 3281, original 3441, original 4501, original 4550

<a id="M06-CAP-SPECIALTY-26fb825518721225"></a>
- **M06-CAP-SPECIALTY-26fb825518721225**: Integrates Nutrition, Surgery, Endoscopy, Radiology, Genetics, AI and Digital Twin.
  Origin: original 3281

<a id="M06-CAP-SPECIALTY-e4369defe59ea48f"></a>
- **M06-CAP-SPECIALTY-e4369defe59ea48f**: Supports pediatric inflammatory bowel disease.
  Origin: original 3283, original 4516

<a id="M06-CAP-SPECIALTY-a882541a1d7bf498"></a>
- **M06-CAP-SPECIALTY-a882541a1d7bf498**: Disease Activity Scores
  Origin: original 3283

<a id="M06-CAP-SPECIALTY-ab85ba4ef3ae1bdb"></a>
- **M06-CAP-SPECIALTY-ab85ba4ef3ae1bdb**: Biologic Therapy
  Origin: original 3283, original 3363, original 3444, original 4702, original 4704, original 4725

<a id="M06-CAP-SPECIALTY-cd19bf593b2dccb6"></a>
- **M06-CAP-SPECIALTY-cd19bf593b2dccb6**: IBS
  Origin: original 3285, original 3445

<a id="M06-CAP-SPECIALTY-f4e21cfa976bb32b"></a>
- **M06-CAP-SPECIALTY-f4e21cfa976bb32b**: Rome IV Criteria
  Origin: original 3285

<a id="M06-CAP-SPECIALTY-f9d511d966879d68"></a>
- **M06-CAP-SPECIALTY-f9d511d966879d68**: Supports nutritional assessment.
  Origin: original 3288

<a id="M06-CAP-SPECIALTY-8e7c0c06ce1145c7"></a>
- **M06-CAP-SPECIALTY-8e7c0c06ce1145c7**: Provides intelligent gastrointestinal care across the EDHT ecosystem.
  Origin: original 3300

<a id="M06-CAP-SPECIALTY-16fd79811dffe7c0"></a>
- **M06-CAP-SPECIALTY-16fd79811dffe7c0**: Chronic Lung Diseases
  Origin: original 3361

<a id="M06-CAP-SPECIALTY-23f838da7e002c66"></a>
- **M06-CAP-SPECIALTY-23f838da7e002c66**: Congenital Pulmonary Disorders
  Origin: original 3361

<a id="M06-CAP-SPECIALTY-0017ffd603b45d2e"></a>
- **M06-CAP-SPECIALTY-0017ffd603b45d2e**: Sleep Breathing Disorders
  Origin: original 3361

<a id="M06-CAP-SPECIALTY-2859df256f010a2b"></a>
- **M06-CAP-SPECIALTY-2859df256f010a2b**: Integrates Allergy, Immunology, Intensive Care, Radiology, AI and Digital Twin.
  Origin: original 3361

<a id="M06-CAP-SPECIALTY-648d85454961258f"></a>
- **M06-CAP-SPECIALTY-648d85454961258f**: Supports pediatric asthma.
  Origin: original 3363

<a id="M06-CAP-SPECIALTY-727f69ee55535562"></a>
- **M06-CAP-SPECIALTY-727f69ee55535562**: Mild Asthma
  Origin: original 3363

<a id="M06-CAP-SPECIALTY-c427c04e3a624cb8"></a>
- **M06-CAP-SPECIALTY-c427c04e3a624cb8**: Moderate Asthma
  Origin: original 3363

<a id="M06-CAP-SPECIALTY-8d75db85cdf45a91"></a>
- **M06-CAP-SPECIALTY-8d75db85cdf45a91**: Severe Asthma
  Origin: original 3363

<a id="M06-CAP-SPECIALTY-233e422ad976542d"></a>
- **M06-CAP-SPECIALTY-233e422ad976542d**: Asthma Action Plans
  Origin: original 3363

<a id="M06-CAP-SPECIALTY-a85a769ee10ea87e"></a>
- **M06-CAP-SPECIALTY-a85a769ee10ea87e**: Supports cystic fibrosis.
  Origin: original 3364

<a id="M06-CAP-SPECIALTY-38682d9ca9256dfc"></a>
- **M06-CAP-SPECIALTY-38682d9ca9256dfc**: Pulmonary Monitoring
  Origin: original 3364

<a id="M06-CAP-SPECIALTY-5a0f97617547c83b"></a>
- **M06-CAP-SPECIALTY-5a0f97617547c83b**: Pancreatic Function
  Origin: original 3364, original 4471

<a id="M06-CAP-SPECIALTY-c26f0d1ebfe697c5"></a>
- **M06-CAP-SPECIALTY-c26f0d1ebfe697c5**: Respiratory Physiotherapy
  Origin: original 3364

<a id="M06-CAP-SPECIALTY-3abc8f2d76aa9813"></a>
- **M06-CAP-SPECIALTY-3abc8f2d76aa9813**: CFTR Modulator Therapy
  Origin: original 3364

<a id="M06-CAP-SPECIALTY-24bbfdf0496e0c3e"></a>
- **M06-CAP-SPECIALTY-24bbfdf0496e0c3e**: Respiratory Medicine
  Origin: original 3380

<a id="M06-CAP-SPECIALTY-6dba99a3d5f05615"></a>
- **M06-CAP-SPECIALTY-6dba99a3d5f05615**: Provides intelligent respiratory care across the EDHT ecosystem.
  Origin: original 3380

<a id="M06-CAP-SPECIALTY-3cd79d96488ff898"></a>
- **M06-CAP-SPECIALTY-3cd79d96488ff898**: Central platform for pediatric gastroenterology, hepatology and nutrition.
  Origin: original 3441

<a id="M06-CAP-SPECIALTY-4eece0be96bfc301"></a>
- **M06-CAP-SPECIALTY-4eece0be96bfc301**: Liver Diseases
  Origin: original 3441

<a id="M06-CAP-SPECIALTY-d63635efadd74711"></a>
- **M06-CAP-SPECIALTY-d63635efadd74711**: Functional GI Disorders
  Origin: original 3441, original 4501

<a id="M06-CAP-SPECIALTY-ae67f3de5aeb0873"></a>
- **M06-CAP-SPECIALTY-ae67f3de5aeb0873**: Integrates Surgery, Nutrition, Endoscopy, Genetics, AI and Digital Twin.
  Origin: original 3441

<a id="M06-CAP-SPECIALTY-b64c7eb2046452d9"></a>
- **M06-CAP-SPECIALTY-b64c7eb2046452d9**: Supports pediatric IBD.
  Origin: original 3444

<a id="M06-CAP-SPECIALTY-9c7649be6be8e67a"></a>
- **M06-CAP-SPECIALTY-9c7649be6be8e67a**: Disease Activity
  Origin: original 3444, original 4701, original 4702, original 4704, original 4706, original 4708, original 4710, original 5026, original 5028, original 5031, original 5033, original 5035, original 5050

<a id="M06-CAP-SPECIALTY-dfe84012d78f21a2"></a>
- **M06-CAP-SPECIALTY-dfe84012d78f21a2**: Supports functional GI disorders.
  Origin: original 3445

<a id="M06-CAP-SPECIALTY-6934bbc490dad30a"></a>
- **M06-CAP-SPECIALTY-6934bbc490dad30a**: Supports pediatric nutrition.
  Origin: original 3448

<a id="M06-CAP-SPECIALTY-081ffcd36483dee8"></a>
- **M06-CAP-SPECIALTY-081ffcd36483dee8**: Micronutrient Deficiency
  Origin: original 3448

<a id="M06-CAP-SPECIALTY-d07b733785cb9629"></a>
- **M06-CAP-SPECIALTY-d07b733785cb9629**: Provides intelligent pediatric digestive care across the EDHT ecosystem.
  Origin: original 3460

<a id="M06-CAP-SPECIALTY-c260c6798ea2e834"></a>
- **M06-CAP-SPECIALTY-c260c6798ea2e834**: Congenital Heart Diseases
  Origin: original 3661

<a id="M06-CAP-SPECIALTY-ae85cc7e3dbc27ac"></a>
- **M06-CAP-SPECIALTY-ae85cc7e3dbc27ac**: Arrhythmias
  Origin: original 3661, original 4061

<a id="M06-CAP-SPECIALTY-3310cfeddf96c2e5"></a>
- **M06-CAP-SPECIALTY-3310cfeddf96c2e5**: Cardiomyopathies
  Origin: original 3661, original 4061

<a id="M06-CAP-SPECIALTY-ce1cdc8853669530"></a>
- **M06-CAP-SPECIALTY-ce1cdc8853669530**: Heart Failure
  Origin: original 3661, original 4061

<a id="M06-CAP-SPECIALTY-8431a21b28f01da6"></a>
- **M06-CAP-SPECIALTY-8431a21b28f01da6**: Pediatric Hypertension
  Origin: original 3661, original 4551

<a id="M06-CAP-SPECIALTY-694f113b1088e7a4"></a>
- **M06-CAP-SPECIALTY-694f113b1088e7a4**: Cardiac Imaging
  Origin: original 3661, original 3680

<a id="M06-CAP-SPECIALTY-4a9a1f0c90aee4b6"></a>
- **M06-CAP-SPECIALTY-4a9a1f0c90aee4b6**: Preventive Cardiology
  Origin: original 3661, original 4061

<a id="M06-CAP-SPECIALTY-bc33416493a6176d"></a>
- **M06-CAP-SPECIALTY-bc33416493a6176d**: Artificial Intelligence
  Origin: original 3661, original 3680, original 3981, original 4000, original 4061, original 4080, original 4161, original 4200, original 4201, original 4401, original 4450, original 4451, original 4500, original 4501, original 4550, original 4575, original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-c0563b9377b05194"></a>
- **M06-CAP-SPECIALTY-c0563b9377b05194**: Cardiac MRI
  Origin: original 3661, original 4061, original 4080

<a id="M06-CAP-SPECIALTY-621000fd8cb9adb3"></a>
- **M06-CAP-SPECIALTY-621000fd8cb9adb3**: Septal Defects
  Origin: original 3663

<a id="M06-CAP-SPECIALTY-6bed77ec34298a23"></a>
- **M06-CAP-SPECIALTY-6bed77ec34298a23**: Single Ventricle Physiology
  Origin: original 3663

<a id="M06-CAP-SPECIALTY-0bcbbd71ed6f0453"></a>
- **M06-CAP-SPECIALTY-0bcbbd71ed6f0453**: Surgical Follow-up
  Origin: original 3663

<a id="M06-CAP-SPECIALTY-b6f1820a1f6547e0"></a>
- **M06-CAP-SPECIALTY-b6f1820a1f6547e0**: Supports pediatric rhythm disorders.
  Origin: original 3666, original 4066

<a id="M06-CAP-SPECIALTY-a99f2007023cb1c5"></a>
- **M06-CAP-SPECIALTY-a99f2007023cb1c5**: Long QT Syndrome
  Origin: original 3666

<a id="M06-CAP-SPECIALTY-d4aa4bdf9e1bb18d"></a>
- **M06-CAP-SPECIALTY-d4aa4bdf9e1bb18d**: Brugada Syndrome
  Origin: original 3666

<a id="M06-CAP-SPECIALTY-9ca3486374606146"></a>
- **M06-CAP-SPECIALTY-9ca3486374606146**: Electrophysiology Evaluation
  Origin: original 3666

<a id="M06-CAP-SPECIALTY-fbfafa4e2202d20e"></a>
- **M06-CAP-SPECIALTY-fbfafa4e2202d20e**: Functional Classification
  Origin: original 3668

<a id="M06-CAP-SPECIALTY-4a07cba5c109105e"></a>
- **M06-CAP-SPECIALTY-4a07cba5c109105e**: Medication Management
  Origin: original 3668

<a id="M06-CAP-SPECIALTY-e95ba5b4b6b3b666"></a>
- **M06-CAP-SPECIALTY-e95ba5b4b6b3b666**: Fluid Monitoring
  Origin: original 3668

<a id="M06-CAP-SPECIALTY-119859676c59304d"></a>
- **M06-CAP-SPECIALTY-119859676c59304d**: Cardiac Function Tracking
  Origin: original 3668

<a id="M06-CAP-SPECIALTY-42ee227dc700fecd"></a>
- **M06-CAP-SPECIALTY-42ee227dc700fecd**: Transplant Evaluation
  Origin: original 3668, original 4991, original 5007

<a id="M06-CAP-SPECIALTY-4e0127ec9358c83b"></a>
- **M06-CAP-SPECIALTY-4e0127ec9358c83b**: Provides intelligent pediatric cardiology across the EDHT ecosystem.
  Origin: original 3680

<a id="M06-CAP-SPECIALTY-8ead82a187357e3b"></a>
- **M06-CAP-SPECIALTY-8ead82a187357e3b**: Central platform for child and adolescent mental health.
  Origin: original 3981

<a id="M06-CAP-SPECIALTY-0c6d241f21f65a43"></a>
- **M06-CAP-SPECIALTY-0c6d241f21f65a43**: Child Psychiatry
  Origin: original 3981, original 4000, original 5151

<a id="M06-CAP-SPECIALTY-6e20d9c250caeeaf"></a>
- **M06-CAP-SPECIALTY-6e20d9c250caeeaf**: Adolescent Psychiatry
  Origin: original 3981, original 5151

<a id="M06-CAP-SPECIALTY-4e4eddb3ff9d9912"></a>
- **M06-CAP-SPECIALTY-4e4eddb3ff9d9912**: Developmental Mental Health
  Origin: original 3981

<a id="M06-CAP-SPECIALTY-490e35cf8d921dfa"></a>
- **M06-CAP-SPECIALTY-490e35cf8d921dfa**: Behavioral Medicine
  Origin: original 3981

<a id="M06-CAP-SPECIALTY-3d5f4f546cb05c0b"></a>
- **M06-CAP-SPECIALTY-3d5f4f546cb05c0b**: Psychotherapy
  Origin: original 3981, original 4826, original 4850, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-5df9f6bab326e906"></a>
- **M06-CAP-SPECIALTY-5df9f6bab326e906**: Psychopharmacology
  Origin: original 3981, original 4000, original 4850, original 5175

<a id="M06-CAP-SPECIALTY-b36f2ac93cd3a90a"></a>
- **M06-CAP-SPECIALTY-b36f2ac93cd3a90a**: Crisis Care
  Origin: original 3981, original 4000, original 4826, original 4850, original 5175

<a id="M06-CAP-SPECIALTY-4631398063618fa6"></a>
- **M06-CAP-SPECIALTY-4631398063618fa6**: Family Mental Health
  Origin: original 3981

<a id="M06-CAP-SPECIALTY-a345e32468d00bdd"></a>
- **M06-CAP-SPECIALTY-a345e32468d00bdd**: Psychology
  Origin: original 3981, original 4000, original 4629, original 4631, original 4637, original 4719, original 4826, original 4850, original 5043, original 5126

<a id="M06-CAP-SPECIALTY-1776431d6d17f344"></a>
- **M06-CAP-SPECIALTY-1776431d6d17f344**: Neurology
  Origin: original 3981, original 4000, original 4208, original 4626, original 4629, original 4630, original 4631, original 4632, original 4636, original 4637, original 4639, original 4640, original 4644, original 4701, original 4704, original 4706, original 4708, original 4826, original 4981, original 4987, original 5026, original 5031, original 5033, original 5035, original 5094, original 5101, original 5103, original 5107, original 5108, original 5109, original 5112, original 5114, original 5116, original 5117, original 5118, original 5126, original 5137, original 5139, original 5141, original 5142, original 5143, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-753b7a0fca5646d7"></a>
- **M06-CAP-SPECIALTY-753b7a0fca5646d7**: Social Care
  Origin: original 3981, original 4631, original 4639, original 4826

<a id="M06-CAP-SPECIALTY-2c02c3f4564964ce"></a>
- **M06-CAP-SPECIALTY-2c02c3f4564964ce**: Coordinates the complete pediatric mental health ecosystem.
  Origin: original 4000

<a id="M06-CAP-SPECIALTY-2354ee9d430cbe5d"></a>
- **M06-CAP-SPECIALTY-2354ee9d430cbe5d**: Developmental Medicine
  Origin: original 4000, original 4826

<a id="M06-CAP-SPECIALTY-f3356e4b78ab2299"></a>
- **M06-CAP-SPECIALTY-f3356e4b78ab2299**: Substance Use Care
  Origin: original 4000

<a id="M06-CAP-SPECIALTY-c3d6442ee87a534e"></a>
- **M06-CAP-SPECIALTY-c3d6442ee87a534e**: Family Support
  Origin: original 4000

<a id="M06-CAP-SPECIALTY-6184fe372c186d88"></a>
- **M06-CAP-SPECIALTY-6184fe372c186d88**: School Collaboration
  Origin: original 4000

<a id="M06-CAP-SPECIALTY-03b35947cdeeccae"></a>
- **M06-CAP-SPECIALTY-03b35947cdeeccae**: Provides longitudinal, family-centered and multidisciplinary pediatric mental health intelligence across the EDHT ecosystem.
  Origin: original 4000

<a id="M06-CAP-SPECIALTY-30eec395a1d9ef13"></a>
- **M06-CAP-SPECIALTY-30eec395a1d9ef13**: Hypertension
  Origin: original 4061, original 4600

<a id="M06-CAP-SPECIALTY-9f62941002d5dae6"></a>
- **M06-CAP-SPECIALTY-9f62941002d5dae6**: Acquired Heart Disease
  Origin: original 4061

<a id="M06-CAP-SPECIALTY-355829262f04ba62"></a>
- **M06-CAP-SPECIALTY-355829262f04ba62**: Supports congenital heart disease management.
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-2bfe553aa51bbc2d"></a>
- **M06-CAP-SPECIALTY-2bfe553aa51bbc2d**: Anatomical Classification
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-2c0c26b70b85d20a"></a>
- **M06-CAP-SPECIALTY-2c0c26b70b85d20a**: Hemodynamic Assessment
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-78167df60625f73c"></a>
- **M06-CAP-SPECIALTY-78167df60625f73c**: Surgical History
  Origin: original 4063, original 4513, original 4545, original 4630, original 4631, original 4641, original 4650, original 5101, original 5136, original 5150

<a id="M06-CAP-SPECIALTY-9fdc32e42fbc4bff"></a>
- **M06-CAP-SPECIALTY-9fdc32e42fbc4bff**: Interventional Procedures
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-b7c9c18abf209101"></a>
- **M06-CAP-SPECIALTY-b7c9c18abf209101**: Longitudinal Follow-up
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-b29b660e58a1715b"></a>
- **M06-CAP-SPECIALTY-b29b660e58a1715b**: Transition to Adult Congenital Cardiology
  Origin: original 4063

<a id="M06-CAP-SPECIALTY-8285da265981774e"></a>
- **M06-CAP-SPECIALTY-8285da265981774e**: Bradyarrhythmias
  Origin: original 4066

<a id="M06-CAP-SPECIALTY-8c545c557fb24de0"></a>
- **M06-CAP-SPECIALTY-8c545c557fb24de0**: Conduction Disorders
  Origin: original 4066

<a id="M06-CAP-SPECIALTY-3b943eea7947c392"></a>
- **M06-CAP-SPECIALTY-3b943eea7947c392**: Event Monitoring
  Origin: original 4066

<a id="M06-CAP-SPECIALTY-17c8db398fde19ca"></a>
- **M06-CAP-SPECIALTY-17c8db398fde19ca**: Treatment Tracking
  Origin: original 4066

<a id="M06-CAP-SPECIALTY-ad7848b8f593a316"></a>
- **M06-CAP-SPECIALTY-ad7848b8f593a316**: Ventricular Function
  Origin: original 4068

<a id="M06-CAP-SPECIALTY-a549916693516568"></a>
- **M06-CAP-SPECIALTY-a549916693516568**: Biomarkers
  Origin: original 4068

<a id="M06-CAP-SPECIALTY-d2cfe5f6515e7557"></a>
- **M06-CAP-SPECIALTY-d2cfe5f6515e7557**: Fluid Status
  Origin: original 4068

<a id="M06-CAP-SPECIALTY-6b5154af20cc3812"></a>
- **M06-CAP-SPECIALTY-6b5154af20cc3812**: Medication Monitoring
  Origin: original 4068, original 5151

<a id="M06-CAP-SPECIALTY-4842464733442efa"></a>
- **M06-CAP-SPECIALTY-4842464733442efa**: Hospitalization Tracking
  Origin: original 4068

<a id="M06-CAP-SPECIALTY-2a1f2899cb133383"></a>
- **M06-CAP-SPECIALTY-2a1f2899cb133383**: Longitudinal Functional Assessment
  Origin: original 4068

<a id="M06-CAP-SPECIALTY-263368bafa9cbdb9"></a>
- **M06-CAP-SPECIALTY-263368bafa9cbdb9**: Arrhythmia Management
  Origin: original 4080

<a id="M06-CAP-SPECIALTY-77b91eaf23050323"></a>
- **M06-CAP-SPECIALTY-77b91eaf23050323**: Interventional Cardiology
  Origin: original 4080

<a id="M06-CAP-SPECIALTY-e9426dd272d9aa70"></a>
- **M06-CAP-SPECIALTY-e9426dd272d9aa70**: Rehabilitation
  Origin: original 4080, original 4208, original 4626, original 4630, original 4631, original 4632, original 4636, original 4637, original 4639, original 4640, original 4641, original 4644, original 4650, original 4701, original 4703, original 4708, original 4709, original 4719, original 4725, original 4826, original 5026, original 5028, original 5029, original 5033, original 5034, original 5043, original 5050, original 5094, original 5101, original 5103, original 5107, original 5108, original 5109, original 5112, original 5114, original 5116, original 5118, original 5125, original 5126, original 5138, original 5143, original 5145, original 5146, original 5175

<a id="M06-CAP-SPECIALTY-72b19a4ef4ad04eb"></a>
- **M06-CAP-SPECIALTY-72b19a4ef4ad04eb**: Remote Monitoring
  Origin: original 4080, original 4600, original 4650, original 4725, original 5000, original 5050, original 5151

<a id="M06-CAP-SPECIALTY-e9d270fee6b79129"></a>
- **M06-CAP-SPECIALTY-e9d270fee6b79129**: Provides intelligent longitudinal pediatric cardiovascular care across the EDHT ecosystem.
  Origin: original 4080

<a id="M06-CAP-SPECIALTY-8d3f81ace130dfd4"></a>
- **M06-CAP-SPECIALTY-8d3f81ace130dfd4**: Central platform for pediatric hematology, hemostasis and transfusion medicine.
  Origin: original 4161

<a id="M06-CAP-SPECIALTY-6867bde69989c6cb"></a>
- **M06-CAP-SPECIALTY-6867bde69989c6cb**: Anemias
  Origin: original 4161

<a id="M06-CAP-SPECIALTY-687ee2acdf790259"></a>
- **M06-CAP-SPECIALTY-687ee2acdf790259**: Cytopenias
  Origin: original 4161, original 4172, original 4200, original 4976

<a id="M06-CAP-SPECIALTY-a470030b2fd75c7f"></a>
- **M06-CAP-SPECIALTY-a470030b2fd75c7f**: Bone Marrow Failure
  Origin: original 4161, original 5000

<a id="M06-CAP-SPECIALTY-6c569e6cbd743f51"></a>
- **M06-CAP-SPECIALTY-6c569e6cbd743f51**: Bleeding Disorders
  Origin: original 4161, original 4976

<a id="M06-CAP-SPECIALTY-e4613991d3485525"></a>
- **M06-CAP-SPECIALTY-e4613991d3485525**: Thrombosis
  Origin: original 4161, original 4200, original 4976, original 5000

<a id="M06-CAP-SPECIALTY-141d0e5f35de53d9"></a>
- **M06-CAP-SPECIALTY-141d0e5f35de53d9**: Rare Hematologic Diseases
  Origin: original 4161

<a id="M06-CAP-SPECIALTY-20a67db2d0ea13cf"></a>
- **M06-CAP-SPECIALTY-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 4161, original 4200, original 4201, original 4976, original 4991, original 5007, original 5126, original 5129, original 5137, original 5150

<a id="M06-CAP-SPECIALTY-504f15b3a863b333"></a>
- **M06-CAP-SPECIALTY-504f15b3a863b333**: Supports structured evaluation of pediatric anemia.
  Origin: original 4163

<a id="M06-CAP-SPECIALTY-5b5d6ee2e647e06f"></a>
- **M06-CAP-SPECIALTY-5b5d6ee2e647e06f**: Hemoglobin
  Origin: original 4163, original 4164, original 4979, original 4982, original 4991

<a id="M06-CAP-SPECIALTY-2f927e293ffcc56c"></a>
- **M06-CAP-SPECIALTY-2f927e293ffcc56c**: MCV
  Origin: original 4163, original 4979

<a id="M06-CAP-SPECIALTY-d8f9054082726e2d"></a>
- **M06-CAP-SPECIALTY-d8f9054082726e2d**: Reticulocytes
  Origin: original 4163, original 4171, original 4976, original 4991

<a id="M06-CAP-SPECIALTY-b61310d0878732b9"></a>
- **M06-CAP-SPECIALTY-b61310d0878732b9**: Iron Studies
  Origin: original 4163, original 4976

<a id="M06-CAP-SPECIALTY-d729a79dbd81ac7d"></a>
- **M06-CAP-SPECIALTY-d729a79dbd81ac7d**: Vitamin Status
  Origin: original 4163

<a id="M06-CAP-SPECIALTY-9a30bf9a5c093e21"></a>
- **M06-CAP-SPECIALTY-9a30bf9a5c093e21**: Hemolysis Markers
  Origin: original 4163, original 4976, original 4981

<a id="M06-CAP-SPECIALTY-5f1baeab95aac0b5"></a>
- **M06-CAP-SPECIALTY-5f1baeab95aac0b5**: Inflammation
  Origin: original 4163

<a id="M06-CAP-SPECIALTY-820873bb0d7db96e"></a>
- **M06-CAP-SPECIALTY-820873bb0d7db96e**: Renal Function
  Origin: original 4163

<a id="M06-CAP-SPECIALTY-0bea5346ef341f41"></a>
- **M06-CAP-SPECIALTY-0bea5346ef341f41**: Family History
  Origin: original 4163, original 4178, original 4519, original 4985, original 4987, original 4989, original 5002

<a id="M06-CAP-SPECIALTY-608e9bbc492884e2"></a>
- **M06-CAP-SPECIALTY-608e9bbc492884e2**: Supports clinician-reviewed differential diagnosis.
  Origin: original 4163

<a id="M06-CAP-SPECIALTY-e7e321f4af4035ac"></a>
- **M06-CAP-SPECIALTY-e7e321f4af4035ac**: Supports iron deficiency assessment and longitudinal monitoring.
  Origin: original 4164

<a id="M06-CAP-SPECIALTY-f15477b4744f8b18"></a>
- **M06-CAP-SPECIALTY-f15477b4744f8b18**: Ferritin
  Origin: original 4164, original 4979, original 4982

<a id="M06-CAP-SPECIALTY-aef61e9654605443"></a>
- **M06-CAP-SPECIALTY-aef61e9654605443**: Transferrin Saturation
  Origin: original 4164, original 4979

<a id="M06-CAP-SPECIALTY-7a256cc999458e0f"></a>
- **M06-CAP-SPECIALTY-7a256cc999458e0f**: Blood Loss Risk
  Origin: original 4164

<a id="M06-CAP-SPECIALTY-0207549b28719905"></a>
- **M06-CAP-SPECIALTY-0207549b28719905**: Treatment
  Origin: original 4164, original 4444, original 4474, original 4510, original 4517, original 4710, original 4978, original 4983, original 4985, original 4990, original 4991, original 5141

<a id="M06-CAP-SPECIALTY-2efc2fec2c0c8ee3"></a>
- **M06-CAP-SPECIALTY-2efc2fec2c0c8ee3**: Response
  Origin: original 4164, original 4204, original 4230, original 4474, original 4978, original 4983, original 4985

<a id="M06-CAP-SPECIALTY-4f020bc362ca7317"></a>
- **M06-CAP-SPECIALTY-4f020bc362ca7317**: Supports longitudinal sickle cell disease care.
  Origin: original 4166

<a id="M06-CAP-SPECIALTY-2fc09d9da796cc42"></a>
- **M06-CAP-SPECIALTY-2fc09d9da796cc42**: Genotype
  Origin: original 4166, original 4167, original 4981, original 4982

<a id="M06-CAP-SPECIALTY-3202d9a15b5fa033"></a>
- **M06-CAP-SPECIALTY-3202d9a15b5fa033**: Hematologic Trends
  Origin: original 4166

<a id="M06-CAP-SPECIALTY-d7d122283d72c31e"></a>
- **M06-CAP-SPECIALTY-d7d122283d72c31e**: Pain Events
  Origin: original 4166

<a id="M06-CAP-SPECIALTY-ccedb83b60fbec5b"></a>
- **M06-CAP-SPECIALTY-ccedb83b60fbec5b**: Acute Chest Events
  Origin: original 4166

<a id="M06-CAP-SPECIALTY-89db1d32516fdeb7"></a>
- **M06-CAP-SPECIALTY-89db1d32516fdeb7**: Organ Monitoring
  Origin: original 4166, original 4167

<a id="M06-CAP-SPECIALTY-481d0e113718ef9b"></a>
- **M06-CAP-SPECIALTY-481d0e113718ef9b**: Preventive Care
  Origin: original 4166

<a id="M06-CAP-SPECIALTY-fa0a4d39a0e1b296"></a>
- **M06-CAP-SPECIALTY-fa0a4d39a0e1b296**: Supports alpha and beta thalassemia care.
  Origin: original 4167

<a id="M06-CAP-SPECIALTY-ac0c8101ab938709"></a>
- **M06-CAP-SPECIALTY-ac0c8101ab938709**: Hemoglobin Analysis
  Origin: original 4167, original 4981

<a id="M06-CAP-SPECIALTY-746fa472ce1cde7e"></a>
- **M06-CAP-SPECIALTY-746fa472ce1cde7e**: Transfusion History
  Origin: original 4167, original 4976, original 5000

<a id="M06-CAP-SPECIALTY-d79756985a766cfa"></a>
- **M06-CAP-SPECIALTY-d79756985a766cfa**: Iron Overload
  Origin: original 4167, original 4981, original 4982

<a id="M06-CAP-SPECIALTY-957837f5b195dbac"></a>
- **M06-CAP-SPECIALTY-957837f5b195dbac**: Chelation
  Origin: original 4167

<a id="M06-CAP-SPECIALTY-661799e756f990fd"></a>
- **M06-CAP-SPECIALTY-661799e756f990fd**: Endocrine Complications
  Origin: original 4167, original 5126

<a id="M06-CAP-SPECIALTY-4caa37b2b7080ef8"></a>
- **M06-CAP-SPECIALTY-4caa37b2b7080ef8**: Supports pediatric neutropenia evaluation.
  Origin: original 4169

<a id="M06-CAP-SPECIALTY-990916d04810924f"></a>
- **M06-CAP-SPECIALTY-990916d04810924f**: ANC Trends
  Origin: original 4169

<a id="M06-CAP-SPECIALTY-46cdd9e5fce2291e"></a>
- **M06-CAP-SPECIALTY-46cdd9e5fce2291e**: Infection History
  Origin: original 4169, original 4444, original 4519, original 4627, original 4990, original 5103

<a id="M06-CAP-SPECIALTY-0cdcf465ec7d12ac"></a>
- **M06-CAP-SPECIALTY-0cdcf465ec7d12ac**: Medication Exposure
  Origin: original 4169, original 4170, original 4987

<a id="M06-CAP-SPECIALTY-f7a53c40cb47b41c"></a>
- **M06-CAP-SPECIALTY-f7a53c40cb47b41c**: Autoimmune Causes
  Origin: original 4169

<a id="M06-CAP-SPECIALTY-4fa4a62e52a40aa7"></a>
- **M06-CAP-SPECIALTY-4fa4a62e52a40aa7**: Congenital Causes
  Origin: original 4169

<a id="M06-CAP-SPECIALTY-e4d5d2da6539d7f5"></a>
- **M06-CAP-SPECIALTY-e4d5d2da6539d7f5**: Bone Marrow Findings
  Origin: original 4169

<a id="M06-CAP-SPECIALTY-4f628574282d6200"></a>
- **M06-CAP-SPECIALTY-4f628574282d6200**: Longitudinal Monitoring
  Origin: original 4169, original 4175

<a id="M06-CAP-SPECIALTY-9b445736670b6785"></a>
- **M06-CAP-SPECIALTY-9b445736670b6785**: Supports pediatric platelet-count disorders.
  Origin: original 4170

<a id="M06-CAP-SPECIALTY-b0a9449a6660b2c2"></a>
- **M06-CAP-SPECIALTY-b0a9449a6660b2c2**: Platelet Trends
  Origin: original 4170

<a id="M06-CAP-SPECIALTY-bb6c997491d4f128"></a>
- **M06-CAP-SPECIALTY-bb6c997491d4f128**: Bleeding Symptoms
  Origin: original 4170, original 4983

<a id="M06-CAP-SPECIALTY-266b4cef20c5c70d"></a>
- **M06-CAP-SPECIALTY-266b4cef20c5c70d**: Infection Association
  Origin: original 4170

<a id="M06-CAP-SPECIALTY-0d252d73a457b29d"></a>
- **M06-CAP-SPECIALTY-0d252d73a457b29d**: Bone Marrow Data
  Origin: original 4170

<a id="M06-CAP-SPECIALTY-e9bb1b7104aa25cd"></a>
- **M06-CAP-SPECIALTY-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4170, original 4511, original 4642, original 4702, original 4705, original 4708, original 4979, original 4982, original 5032, original 5033, original 5039, original 5114, original 5136, original 5137, original 5147

<a id="M06-CAP-SPECIALTY-59af04ede05da9f9"></a>
- **M06-CAP-SPECIALTY-59af04ede05da9f9**: Supports structured evaluation of multilineage cytopenias.
  Origin: original 4171

<a id="M06-CAP-SPECIALTY-f1e4564bf905fc04"></a>
- **M06-CAP-SPECIALTY-f1e4564bf905fc04**: Blood Smear
  Origin: original 4171

<a id="M06-CAP-SPECIALTY-4f673f1b0b7cd551"></a>
- **M06-CAP-SPECIALTY-4f673f1b0b7cd551**: Bone Marrow
  Origin: original 4171, original 4976

<a id="M06-CAP-SPECIALTY-694765c87369e70d"></a>
- **M06-CAP-SPECIALTY-694765c87369e70d**: Infection Testing
  Origin: original 4171

<a id="M06-CAP-SPECIALTY-383f70f563191f4a"></a>
- **M06-CAP-SPECIALTY-383f70f563191f4a**: Nutritional Data
  Origin: original 4171

<a id="M06-CAP-SPECIALTY-27cde7069fe13381"></a>
- **M06-CAP-SPECIALTY-27cde7069fe13381**: Immunology
  Origin: original 4171, original 4501, original 4575, original 4701, original 4704, original 4976, original 4983, original 4990, original 4991, original 5026, original 5031

<a id="M06-CAP-SPECIALTY-2cbd1f2aea929b9b"></a>
- **M06-CAP-SPECIALTY-2cbd1f2aea929b9b**: Medication History
  Origin: original 4171, original 5113

<a id="M06-CAP-SPECIALTY-2ba4b4ed1967058c"></a>
- **M06-CAP-SPECIALTY-2ba4b4ed1967058c**: Supports inherited and acquired bone marrow failure.
  Origin: original 4172

<a id="M06-CAP-SPECIALTY-dc69cebc19553413"></a>
- **M06-CAP-SPECIALTY-dc69cebc19553413**: Bone Marrow Studies
  Origin: original 4172

<a id="M06-CAP-SPECIALTY-05c28706f34ea706"></a>
- **M06-CAP-SPECIALTY-05c28706f34ea706**: Transfusion Requirements
  Origin: original 4172

<a id="M06-CAP-SPECIALTY-ddca93d7133f65aa"></a>
- **M06-CAP-SPECIALTY-ddca93d7133f65aa**: Treatment Monitoring
  Origin: original 4172

<a id="M06-CAP-SPECIALTY-7a75dc90618eeee9"></a>
- **M06-CAP-SPECIALTY-7a75dc90618eeee9**: Supports pediatric hemophilia care.
  Origin: original 4174

<a id="M06-CAP-SPECIALTY-38bb0bc13e87eda3"></a>
- **M06-CAP-SPECIALTY-38bb0bc13e87eda3**: Factor Levels
  Origin: original 4174, original 4984

<a id="M06-CAP-SPECIALTY-28e5bb56be4a21e1"></a>
- **M06-CAP-SPECIALTY-28e5bb56be4a21e1**: Bleeding Events
  Origin: original 4174

<a id="M06-CAP-SPECIALTY-16fded7b0b9b052e"></a>
- **M06-CAP-SPECIALTY-16fded7b0b9b052e**: Joint Health
  Origin: original 4174

<a id="M06-CAP-SPECIALTY-dc70b29e22d49421"></a>
- **M06-CAP-SPECIALTY-dc70b29e22d49421**: Replacement Therapy
  Origin: original 4174

<a id="M06-CAP-SPECIALTY-717f0d4e4e5cc23a"></a>
- **M06-CAP-SPECIALTY-717f0d4e4e5cc23a**: Inhibitor Monitoring
  Origin: original 4174

<a id="M06-CAP-SPECIALTY-e604de00aca459e7"></a>
- **M06-CAP-SPECIALTY-e604de00aca459e7**: Prophylaxis
  Origin: original 4174, original 4435, original 4984, original 4990, original 5007

<a id="M06-CAP-SPECIALTY-467d5dd0b74a4a21"></a>
- **M06-CAP-SPECIALTY-467d5dd0b74a4a21**: Supports von Willebrand disease assessment.
  Origin: original 4175

<a id="M06-CAP-SPECIALTY-194fd60f80cc5f1c"></a>
- **M06-CAP-SPECIALTY-194fd60f80cc5f1c**: Bleeding History
  Origin: original 4175, original 4985

<a id="M06-CAP-SPECIALTY-62348f82b3bcfc9f"></a>
- **M06-CAP-SPECIALTY-62348f82b3bcfc9f**: Laboratory Testing
  Origin: original 4175, original 4178

<a id="M06-CAP-SPECIALTY-921a233d148e284a"></a>
- **M06-CAP-SPECIALTY-921a233d148e284a**: Disease Classification
  Origin: original 4175, original 4709

<a id="M06-CAP-SPECIALTY-e585810271e4f933"></a>
- **M06-CAP-SPECIALTY-e585810271e4f933**: Procedure Planning
  Origin: original 4175

<a id="M06-CAP-SPECIALTY-b596b3fab9cbd244"></a>
- **M06-CAP-SPECIALTY-b596b3fab9cbd244**: Treatment History
  Origin: original 4175

<a id="M06-CAP-SPECIALTY-c35ee9a6e1e3ef76"></a>
- **M06-CAP-SPECIALTY-c35ee9a6e1e3ef76**: Emergency Plans
  Origin: original 4175

<a id="M06-CAP-SPECIALTY-06be258f4465c6bc"></a>
- **M06-CAP-SPECIALTY-06be258f4465c6bc**: Supports rare inherited and acquired bleeding disorders.
  Origin: original 4176

<a id="M06-CAP-SPECIALTY-ef5db99b2a372eec"></a>
- **M06-CAP-SPECIALTY-ef5db99b2a372eec**: Coagulation Factor Deficiencies
  Origin: original 4176

<a id="M06-CAP-SPECIALTY-63acb0725f32bad9"></a>
- **M06-CAP-SPECIALTY-63acb0725f32bad9**: Fibrinogen Disorders
  Origin: original 4176

<a id="M06-CAP-SPECIALTY-2b1d7626c391d394"></a>
- **M06-CAP-SPECIALTY-2b1d7626c391d394**: Bleeding Phenotype
  Origin: original 4176

<a id="M06-CAP-SPECIALTY-a5abdb9ce3ea0d9d"></a>
- **M06-CAP-SPECIALTY-a5abdb9ce3ea0d9d**: Treatment Plans
  Origin: original 4176, original 5151

<a id="M06-CAP-SPECIALTY-60540b4343e8534e"></a>
- **M06-CAP-SPECIALTY-60540b4343e8534e**: Emergency Information
  Origin: original 4176, original 5142

<a id="M06-CAP-SPECIALTY-81b3dd9ea306217c"></a>
- **M06-CAP-SPECIALTY-81b3dd9ea306217c**: Supports pediatric thrombotic disorders.
  Origin: original 4177

<a id="M06-CAP-SPECIALTY-094f81265d87da62"></a>
- **M06-CAP-SPECIALTY-094f81265d87da62**: Venous Thrombosis
  Origin: original 4177, original 4987

<a id="M06-CAP-SPECIALTY-be0fbddfbc568b0d"></a>
- **M06-CAP-SPECIALTY-be0fbddfbc568b0d**: Arterial Thrombosis
  Origin: original 4177, original 4987

<a id="M06-CAP-SPECIALTY-8198e67e8e6bcccf"></a>
- **M06-CAP-SPECIALTY-8198e67e8e6bcccf**: Catheter-related Thrombosis
  Origin: original 4177

<a id="M06-CAP-SPECIALTY-5e1bee5c4692460f"></a>
- **M06-CAP-SPECIALTY-5e1bee5c4692460f**: Risk Factors
  Origin: original 4177, original 4987

<a id="M06-CAP-SPECIALTY-ffba8bb241dd0413"></a>
- **M06-CAP-SPECIALTY-ffba8bb241dd0413**: Anticoagulation
  Origin: original 4177, original 4987, original 5000

<a id="M06-CAP-SPECIALTY-0448dd2dbc1435c8"></a>
- **M06-CAP-SPECIALTY-0448dd2dbc1435c8**: Recurrence Monitoring
  Origin: original 4177

<a id="M06-CAP-SPECIALTY-5a2f3d49139a22d4"></a>
- **M06-CAP-SPECIALTY-5a2f3d49139a22d4**: Supports thrombophilia assessment.
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-91921f4ca412927a"></a>
- **M06-CAP-SPECIALTY-91921f4ca412927a**: Personal History
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-c8b77d49845a729d"></a>
- **M06-CAP-SPECIALTY-c8b77d49845a729d**: Genetic Factors
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-8729e06caff0f24e"></a>
- **M06-CAP-SPECIALTY-8729e06caff0f24e**: Acquired Risk Factors
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-dd1bbc0cc6cbc210"></a>
- **M06-CAP-SPECIALTY-dd1bbc0cc6cbc210**: Recurrence Risk
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-a6fa6d83b3f964f8"></a>
- **M06-CAP-SPECIALTY-a6fa6d83b3f964f8**: Specialist Interpretation
  Origin: original 4178

<a id="M06-CAP-SPECIALTY-be4c921929de1a7e"></a>
- **M06-CAP-SPECIALTY-be4c921929de1a7e**: Supports pediatric hematopoietic stem cell transplantation.
  Origin: original 4186

<a id="M06-CAP-SPECIALTY-d3758080a9dc7412"></a>
- **M06-CAP-SPECIALTY-d3758080a9dc7412**: Candidate Assessment
  Origin: original 4186

<a id="M06-CAP-SPECIALTY-e682db66cb5cb956"></a>
- **M06-CAP-SPECIALTY-e682db66cb5cb956**: Donor Search
  Origin: original 4186

<a id="M06-CAP-SPECIALTY-87401cf0a710dde7"></a>
- **M06-CAP-SPECIALTY-87401cf0a710dde7**: Compatibility
  Origin: original 4186, original 4187

<a id="M06-CAP-SPECIALTY-1707ce6efb900c6b"></a>
- **M06-CAP-SPECIALTY-1707ce6efb900c6b**: Engraftment
  Origin: original 4186, original 4188

<a id="M06-CAP-SPECIALTY-73dedf86b2ae9801"></a>
- **M06-CAP-SPECIALTY-73dedf86b2ae9801**: Complications
  Origin: original 4186, original 4471, original 4517, original 4544, original 4644, original 5101, original 5108, original 5114, original 5116, original 5117

<a id="M06-CAP-SPECIALTY-a564afb87e19f8e0"></a>
- **M06-CAP-SPECIALTY-a564afb87e19f8e0**: Supports transplant donor evaluation.
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-20f9e94d49e7d523"></a>
- **M06-CAP-SPECIALTY-20f9e94d49e7d523**: HLA Data
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-bb2a0480963a18ae"></a>
- **M06-CAP-SPECIALTY-bb2a0480963a18ae**: Relationship
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-023b35ea14201711"></a>
- **M06-CAP-SPECIALTY-023b35ea14201711**: Donor Health
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-59b9534a7ee3874e"></a>
- **M06-CAP-SPECIALTY-59b9534a7ee3874e**: Genetic Information
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-43e4fad6e43f07ff"></a>
- **M06-CAP-SPECIALTY-43e4fad6e43f07ff**: Infectious Screening
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-c4c389bc4d2580f3"></a>
- **M06-CAP-SPECIALTY-c4c389bc4d2580f3**: Selection Documentation
  Origin: original 4187

<a id="M06-CAP-SPECIALTY-30de89a7e48ed68b"></a>
- **M06-CAP-SPECIALTY-30de89a7e48ed68b**: Supports longitudinal post-transplant surveillance.
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-9c9ad8ca919e168c"></a>
- **M06-CAP-SPECIALTY-9c9ad8ca919e168c**: Blood Counts
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-75e3c303e89201ce"></a>
- **M06-CAP-SPECIALTY-75e3c303e89201ce**: Immune Recovery
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-9d60d099367da84d"></a>
- **M06-CAP-SPECIALTY-9d60d099367da84d**: Infection
  Origin: original 4188, original 4236, original 4435, original 4544, original 4545, original 4627, original 5142

<a id="M06-CAP-SPECIALTY-81aa700837344359"></a>
- **M06-CAP-SPECIALTY-81aa700837344359**: GVHD
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-7d5b66a43b823c22"></a>
- **M06-CAP-SPECIALTY-7d5b66a43b823c22**: Organ Function
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-e06ea9e136d2687a"></a>
- **M06-CAP-SPECIALTY-e06ea9e136d2687a**: Long-term Complications
  Origin: original 4188

<a id="M06-CAP-SPECIALTY-64be54181b475e98"></a>
- **M06-CAP-SPECIALTY-64be54181b475e98**: Coordinates the complete pediatric hematology ecosystem.
  Origin: original 4200

<a id="M06-CAP-SPECIALTY-3ee5fff2c26c6671"></a>
- **M06-CAP-SPECIALTY-3ee5fff2c26c6671**: Hemostasis
  Origin: original 4200

<a id="M06-CAP-SPECIALTY-1aadc25d0cd1bd47"></a>
- **M06-CAP-SPECIALTY-1aadc25d0cd1bd47**: Bone Marrow Diagnostics
  Origin: original 4200, original 5000

<a id="M06-CAP-SPECIALTY-adf1dc6011bd3c62"></a>
- **M06-CAP-SPECIALTY-adf1dc6011bd3c62**: Stem Cell Transplantation
  Origin: original 4200, original 4205

<a id="M06-CAP-SPECIALTY-0b04898cf7712f7f"></a>
- **M06-CAP-SPECIALTY-0b04898cf7712f7f**: Digital Pathology
  Origin: original 4200

<a id="M06-CAP-SPECIALTY-d782f0952e410801"></a>
- **M06-CAP-SPECIALTY-d782f0952e410801**: Emergency Medical Passport
  Origin: original 4200, original 4450, original 4500, original 4650

<a id="M06-CAP-SPECIALTY-b7f674cdfcad6e1c"></a>
- **M06-CAP-SPECIALTY-b7f674cdfcad6e1c**: Adult-care Transition
  Origin: original 4200, original 4450, original 4500

<a id="M06-CAP-SPECIALTY-81e266f76179d8f2"></a>
- **M06-CAP-SPECIALTY-81e266f76179d8f2**: Provides intelligent longitudinal pediatric hematology care across the EDHT ecosystem.
  Origin: original 4200

<a id="M06-CAP-SPECIALTY-c65a1d1d752acedd"></a>
- **M06-CAP-SPECIALTY-c65a1d1d752acedd**: Central platform for pediatric oncology and precision cancer medicine.
  Origin: original 4201

<a id="M06-CAP-SPECIALTY-6671a46993980d62"></a>
- **M06-CAP-SPECIALTY-6671a46993980d62**: Leukemias
  Origin: original 4201

<a id="M06-CAP-SPECIALTY-fb89baa3f6a91ea1"></a>
- **M06-CAP-SPECIALTY-fb89baa3f6a91ea1**: Lymphomas
  Origin: original 4201

<a id="M06-CAP-SPECIALTY-a80ecea26a5048c5"></a>
- **M06-CAP-SPECIALTY-a80ecea26a5048c5**: Brain Tumors
  Origin: original 4201, original 5126

<a id="M06-CAP-SPECIALTY-51efbbeff75531b7"></a>
- **M06-CAP-SPECIALTY-51efbbeff75531b7**: Rare Pediatric Cancers
  Origin: original 4201

<a id="M06-CAP-SPECIALTY-ebb78406d2c72ad4"></a>
- **M06-CAP-SPECIALTY-ebb78406d2c72ad4**: Precision Oncology
  Origin: original 4201, original 5150

<a id="M06-CAP-SPECIALTY-e245a3c1f10646a8"></a>
- **M06-CAP-SPECIALTY-e245a3c1f10646a8**: Survivorship
  Origin: original 4201, original 5126, original 5144, original 5150

<a id="M06-CAP-SPECIALTY-c5f2ce2a2de3ca33"></a>
- **M06-CAP-SPECIALTY-c5f2ce2a2de3ca33**: Palliative Care
  Origin: original 4201

<a id="M06-CAP-SPECIALTY-cb78077b4bfcb26e"></a>
- **M06-CAP-SPECIALTY-cb78077b4bfcb26e**: Genomics
  Origin: original 4201, original 5126, original 5150

<a id="M06-CAP-SPECIALTY-747f68311661e702"></a>
- **M06-CAP-SPECIALTY-747f68311661e702**: Pharmacology
  Origin: original 4201, original 4221, original 4575

<a id="M06-CAP-SPECIALTY-ca519247eff2e16a"></a>
- **M06-CAP-SPECIALTY-ca519247eff2e16a**: Clinical Trials
  Origin: original 4201, original 5150

<a id="M06-CAP-SPECIALTY-3cd414814eaeffa7"></a>
- **M06-CAP-SPECIALTY-3cd414814eaeffa7**: Coordinates multidisciplinary cancer diagnostics.
  Origin: original 4203

<a id="M06-CAP-SPECIALTY-7d11bd61845619a8"></a>
- **M06-CAP-SPECIALTY-7d11bd61845619a8**: Clinical Findings
  Origin: original 4203

<a id="M06-CAP-SPECIALTY-7a28a78a806dbc2f"></a>
- **M06-CAP-SPECIALTY-7a28a78a806dbc2f**: Molecular Testing
  Origin: original 4203, original 5129

<a id="M06-CAP-SPECIALTY-50015967720d986a"></a>
- **M06-CAP-SPECIALTY-50015967720d986a**: Tumor Board Review
  Origin: original 4203

<a id="M06-CAP-SPECIALTY-36426c6596491d9c"></a>
- **M06-CAP-SPECIALTY-36426c6596491d9c**: Maintains diagnostic provenance and version history.
  Origin: original 4203

<a id="M06-CAP-SPECIALTY-3521f3947d689bdb"></a>
- **M06-CAP-SPECIALTY-3521f3947d689bdb**: Supports pediatric acute lymphoblastic leukemia care.
  Origin: original 4204

<a id="M06-CAP-SPECIALTY-711b8a64366ff518"></a>
- **M06-CAP-SPECIALTY-711b8a64366ff518**: Immunophenotype
  Origin: original 4204

<a id="M06-CAP-SPECIALTY-8fc49378bfabe721"></a>
- **M06-CAP-SPECIALTY-8fc49378bfabe721**: Cytogenetics
  Origin: original 4204, original 4205

<a id="M06-CAP-SPECIALTY-762b0c3f135759a4"></a>
- **M06-CAP-SPECIALTY-762b0c3f135759a4**: Molecular Findings
  Origin: original 4204

<a id="M06-CAP-SPECIALTY-c385f5b55953e8ea"></a>
- **M06-CAP-SPECIALTY-c385f5b55953e8ea**: Risk Classification
  Origin: original 4204

<a id="M06-CAP-SPECIALTY-2a53a1ecc3db7317"></a>
- **M06-CAP-SPECIALTY-2a53a1ecc3db7317**: Treatment Phases
  Origin: original 4204

<a id="M06-CAP-SPECIALTY-da813ec785293a00"></a>
- **M06-CAP-SPECIALTY-da813ec785293a00**: MRD
  Origin: original 4204, original 4205, original 4235

<a id="M06-CAP-SPECIALTY-d05d6257a6dc9e74"></a>
- **M06-CAP-SPECIALTY-d05d6257a6dc9e74**: Toxicity
  Origin: original 4204, original 4230

<a id="M06-CAP-SPECIALTY-046099f81e41c39b"></a>
- **M06-CAP-SPECIALTY-046099f81e41c39b**: Supports pediatric acute myeloid leukemia.
  Origin: original 4205

<a id="M06-CAP-SPECIALTY-dabea35d36a52d42"></a>
- **M06-CAP-SPECIALTY-dabea35d36a52d42**: Morphology
  Origin: original 4205, original 4976

<a id="M06-CAP-SPECIALTY-5895069c924c03dd"></a>
- **M06-CAP-SPECIALTY-5895069c924c03dd**: Flow Cytometry
  Origin: original 4205, original 4206

<a id="M06-CAP-SPECIALTY-f8ea4c6a26dbeb63"></a>
- **M06-CAP-SPECIALTY-f8ea4c6a26dbeb63**: Molecular Genetics
  Origin: original 4205

<a id="M06-CAP-SPECIALTY-25c06eebf05a9dd4"></a>
- **M06-CAP-SPECIALTY-25c06eebf05a9dd4**: Risk Stratification
  Origin: original 4205

<a id="M06-CAP-SPECIALTY-3293409e72238560"></a>
- **M06-CAP-SPECIALTY-3293409e72238560**: Chemotherapy
  Origin: original 4205, original 5138

<a id="M06-CAP-SPECIALTY-ba795d5822d65e50"></a>
- **M06-CAP-SPECIALTY-ba795d5822d65e50**: Supports measurable residual disease monitoring.
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-5bc5e8f02d2ae8c5"></a>
- **M06-CAP-SPECIALTY-5bc5e8f02d2ae8c5**: Molecular Assays
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-5667acfddc64adb5"></a>
- **M06-CAP-SPECIALTY-5667acfddc64adb5**: Sequencing
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-20a731638b8fa67c"></a>
- **M06-CAP-SPECIALTY-20a731638b8fa67c**: Time Points
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-700831e3b990e2e8"></a>
- **M06-CAP-SPECIALTY-700831e3b990e2e8**: Treatment Phase
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-01ed1c0a31a2b8cf"></a>
- **M06-CAP-SPECIALTY-01ed1c0a31a2b8cf**: Historical Results
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-e870ebf366b9f191"></a>
- **M06-CAP-SPECIALTY-e870ebf366b9f191**: Response Classification
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-525aa7149cec0ba3"></a>
- **M06-CAP-SPECIALTY-525aa7149cec0ba3**: Supports longitudinal MRD visualization.
  Origin: original 4206

<a id="M06-CAP-SPECIALTY-f4388cca9bef82f2"></a>
- **M06-CAP-SPECIALTY-f4388cca9bef82f2**: Supports pediatric central nervous system tumors.
  Origin: original 4208

<a id="M06-CAP-SPECIALTY-43dd69ead2249cc2"></a>
- **M06-CAP-SPECIALTY-43dd69ead2249cc2**: Neurosurgery
  Origin: original 4208, original 4629, original 4630, original 4631, original 4632, original 4636, original 4637, original 4639, original 4640, original 4641, original 4642, original 4644, original 5103, original 5107, original 5108, original 5109, original 5110, original 5112, original 5113, original 5114, original 5116, original 5117, original 5118, original 5119, original 5126, original 5129, original 5136, original 5137, original 5138, original 5139, original 5140, original 5142, original 5143, original 5150

<a id="M06-CAP-SPECIALTY-e3ec5c93dad4f9bf"></a>
- **M06-CAP-SPECIALTY-e3ec5c93dad4f9bf**: Neuro-oncology
  Origin: original 4208

<a id="M06-CAP-SPECIALTY-2663978a32c6d34f"></a>
- **M06-CAP-SPECIALTY-2663978a32c6d34f**: MRI
  Origin: original 4208, original 4636, original 4641, original 4708, original 5108, original 5109, original 5112, original 5113, original 5118, original 5126, original 5141

<a id="M06-CAP-SPECIALTY-78d0334ae8346a4e"></a>
- **M06-CAP-SPECIALTY-78d0334ae8346a4e**: Histopathology
  Origin: original 4208, original 4516, original 4518, original 4519, original 4550, original 4705, original 5126, original 5138, original 5139, original 5150

<a id="M06-CAP-SPECIALTY-55f09823970e8e08"></a>
- **M06-CAP-SPECIALTY-55f09823970e8e08**: Molecular Classification
  Origin: original 4208, original 5126, original 5136, original 5139, original 5150

<a id="M06-CAP-SPECIALTY-0e663a8037c7186f"></a>
- **M06-CAP-SPECIALTY-0e663a8037c7186f**: Radiation Oncology
  Origin: original 4208, original 5126, original 5137, original 5138, original 5139

<a id="M06-CAP-SPECIALTY-597d8c8d1aedc743"></a>
- **M06-CAP-SPECIALTY-597d8c8d1aedc743**: Supports molecularly informed CNS tumor classification.
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-32ffc096d55d159d"></a>
- **M06-CAP-SPECIALTY-32ffc096d55d159d**: Histology
  Origin: original 4209, original 5129, original 5136

<a id="M06-CAP-SPECIALTY-e20880f14bd94c4c"></a>
- **M06-CAP-SPECIALTY-e20880f14bd94c4c**: DNA Alterations
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-0ad6ef7f2c802e51"></a>
- **M06-CAP-SPECIALTY-0ad6ef7f2c802e51**: RNA Findings
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-8da338a0b8a25748"></a>
- **M06-CAP-SPECIALTY-8da338a0b8a25748**: Epigenetic Profiles
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-c0d04aa09b66cf79"></a>
- **M06-CAP-SPECIALTY-c0d04aa09b66cf79**: Molecular Signatures
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-85880776bdd65b83"></a>
- **M06-CAP-SPECIALTY-85880776bdd65b83**: Clinical Phenotype
  Origin: original 4209, original 4710

<a id="M06-CAP-SPECIALTY-f7acfe75db63d0c4"></a>
- **M06-CAP-SPECIALTY-f7acfe75db63d0c4**: Classification frameworks are version-controlled.
  Origin: original 4209

<a id="M06-CAP-SPECIALTY-350754a73253838c"></a>
- **M06-CAP-SPECIALTY-350754a73253838c**: Tracks children with CNS tumors over time.
  Origin: original 4210

<a id="M06-CAP-SPECIALTY-61f9af4306abc31d"></a>
- **M06-CAP-SPECIALTY-61f9af4306abc31d**: Neurological Function
  Origin: original 4210, original 4630, original 5137

<a id="M06-CAP-SPECIALTY-be72329ccea98c8f"></a>
- **M06-CAP-SPECIALTY-be72329ccea98c8f**: Endocrine Function
  Origin: original 4210

<a id="M06-CAP-SPECIALTY-447be47d9affc015"></a>
- **M06-CAP-SPECIALTY-447be47d9affc015**: Cognition
  Origin: original 4210

<a id="M06-CAP-SPECIALTY-1dd1daf4e907b2b5"></a>
- **M06-CAP-SPECIALTY-1dd1daf4e907b2b5**: Vision
  Origin: original 4210, original 4249, original 5140

<a id="M06-CAP-SPECIALTY-eea266fabc22a41d"></a>
- **M06-CAP-SPECIALTY-eea266fabc22a41d**: Hearing
  Origin: original 4210, original 4249

<a id="M06-CAP-SPECIALTY-51e6ac1358b39989"></a>
- **M06-CAP-SPECIALTY-51e6ac1358b39989**: Treatment Toxicity
  Origin: original 4210, original 5138

<a id="M06-CAP-SPECIALTY-1cebf0d2f0c83e65"></a>
- **M06-CAP-SPECIALTY-1cebf0d2f0c83e65**: Recurrence Surveillance
  Origin: original 4210, original 4632, original 4636

<a id="M06-CAP-SPECIALTY-9c8e43d84cd2928f"></a>
- **M06-CAP-SPECIALTY-9c8e43d84cd2928f**: Supports multidisciplinary molecular tumor boards.
  Origin: original 4221

<a id="M06-CAP-SPECIALTY-ee133b9ff74846b7"></a>
- **M06-CAP-SPECIALTY-ee133b9ff74846b7**: Molecular Biology
  Origin: original 4221

<a id="M06-CAP-SPECIALTY-bc506fdefc6e7e7b"></a>
- **M06-CAP-SPECIALTY-bc506fdefc6e7e7b**: Surgery
  Origin: original 4221, original 4501, original 4516, original 4518, original 4637, original 4985, original 5140

<a id="M06-CAP-SPECIALTY-4bbfbd322bd750e8"></a>
- **M06-CAP-SPECIALTY-4bbfbd322bd750e8**: Research Teams
  Origin: original 4221

<a id="M06-CAP-SPECIALTY-4e45eeb0a3ef79e0"></a>
- **M06-CAP-SPECIALTY-4e45eeb0a3ef79e0**: Maintains decisions, evidence and audit history.
  Origin: original 4221

<a id="M06-CAP-SPECIALTY-a2cff3c761e142cc"></a>
- **M06-CAP-SPECIALTY-a2cff3c761e142cc**: Supports CAR-T clinical workflows.
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-e0b6caa45881b5f4"></a>
- **M06-CAP-SPECIALTY-e0b6caa45881b5f4**: Eligibility
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-5a8bc94343872aff"></a>
- **M06-CAP-SPECIALTY-5a8bc94343872aff**: Cell Collection
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-e3d45130da6b0b42"></a>
- **M06-CAP-SPECIALTY-e3d45130da6b0b42**: Manufacturing Status
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-5abe686b2ece43be"></a>
- **M06-CAP-SPECIALTY-5abe686b2ece43be**: Bridging Therapy
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-b971863fb271931a"></a>
- **M06-CAP-SPECIALTY-b971863fb271931a**: Infusion
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-d9e0069450cb2fb6"></a>
- **M06-CAP-SPECIALTY-d9e0069450cb2fb6**: Integrates specialized cellular therapy centers.
  Origin: original 4230

<a id="M06-CAP-SPECIALTY-5c0ea15b1e4f9cb6"></a>
- **M06-CAP-SPECIALTY-5c0ea15b1e4f9cb6**: Combines multimodal treatment-response information.
  Origin: original 4235

<a id="M06-CAP-SPECIALTY-e27d5cf8df815fd1"></a>
- **M06-CAP-SPECIALTY-e27d5cf8df815fd1**: Clinical Status
  Origin: original 4235

<a id="M06-CAP-SPECIALTY-575ee2127792933f"></a>
- **M06-CAP-SPECIALTY-575ee2127792933f**: Molecular Data
  Origin: original 4235

<a id="M06-CAP-SPECIALTY-9b97c6e8966ca772"></a>
- **M06-CAP-SPECIALTY-9b97c6e8966ca772**: Treatment Timeline
  Origin: original 4235

<a id="M06-CAP-SPECIALTY-10f6d158947d039c"></a>
- **M06-CAP-SPECIALTY-10f6d158947d039c**: Supports versioned response criteria.
  Origin: original 4235

<a id="M06-CAP-SPECIALTY-88c52a15a8082a42"></a>
- **M06-CAP-SPECIALTY-88c52a15a8082a42**: Tracks acute and cumulative treatment toxicity.
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-6de4fdba18e70b11"></a>
- **M06-CAP-SPECIALTY-6de4fdba18e70b11**: Hematologic Toxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-4014783d5269dcc2"></a>
- **M06-CAP-SPECIALTY-4014783d5269dcc2**: Cardiotoxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-fa7d79b7ce65f4a3"></a>
- **M06-CAP-SPECIALTY-fa7d79b7ce65f4a3**: Nephrotoxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-07c99018b0a8e7c9"></a>
- **M06-CAP-SPECIALTY-07c99018b0a8e7c9**: Hepatotoxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-34dad47886473fb3"></a>
- **M06-CAP-SPECIALTY-34dad47886473fb3**: Neurotoxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-bfe69b19902300d2"></a>
- **M06-CAP-SPECIALTY-bfe69b19902300d2**: Endocrine Toxicity
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-a62e2242a2fe876d"></a>
- **M06-CAP-SPECIALTY-a62e2242a2fe876d**: Functional Effects
  Origin: original 4236

<a id="M06-CAP-SPECIALTY-b029455395b78e53"></a>
- **M06-CAP-SPECIALTY-b029455395b78e53**: Provides age-appropriate and family-oriented information.
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-5761bc21e8bea3f9"></a>
- **M06-CAP-SPECIALTY-5761bc21e8bea3f9**: Diagnosis Explanations
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-016448b830a32407"></a>
- **M06-CAP-SPECIALTY-016448b830a32407**: Treatment Journey
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-e68b676d452397fb"></a>
- **M06-CAP-SPECIALTY-e68b676d452397fb**: Medication Education
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-bfe1ad39ce108328"></a>
- **M06-CAP-SPECIALTY-bfe1ad39ce108328**: Procedure Preparation
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-0e3cf5124e4fb231"></a>
- **M06-CAP-SPECIALTY-0e3cf5124e4fb231**: Side-effect Information
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-c1a1591f8137fba2"></a>
- **M06-CAP-SPECIALTY-c1a1591f8137fba2**: Follow-up Education
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-34b141c2124dac96"></a>
- **M06-CAP-SPECIALTY-34b141c2124dac96**: Multilingual Content
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-49aa2d7549d1cf58"></a>
- **M06-CAP-SPECIALTY-49aa2d7549d1cf58**: Separates educational information from individualized medical advice.
  Origin: original 4246

<a id="M06-CAP-SPECIALTY-b012898d928f990c"></a>
- **M06-CAP-SPECIALTY-b012898d928f990c**: Supports integrated supportive and palliative care.
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-d929dde3cb2892d8"></a>
- **M06-CAP-SPECIALTY-d929dde3cb2892d8**: Pain
  Origin: original 4247, original 4511, original 4633, original 4639, original 4640, original 4641, original 4702, original 4703, original 4719, original 5028, original 5029, original 5109, original 5112

<a id="M06-CAP-SPECIALTY-9f7b64b8562989bd"></a>
- **M06-CAP-SPECIALTY-9f7b64b8562989bd**: Nausea
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-4c0240d7fe8bc60d"></a>
- **M06-CAP-SPECIALTY-4c0240d7fe8bc60d**: Fatigue
  Origin: original 4247, original 4719, original 5043

<a id="M06-CAP-SPECIALTY-9e512531ebf2d396"></a>
- **M06-CAP-SPECIALTY-9e512531ebf2d396**: Sleep
  Origin: original 4247, original 4638, original 4719, original 4826, original 5094

<a id="M06-CAP-SPECIALTY-c62d68fc86dd429c"></a>
- **M06-CAP-SPECIALTY-c62d68fc86dd429c**: Psychological Needs
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-b2886d3a780ef5b5"></a>
- **M06-CAP-SPECIALTY-b2886d3a780ef5b5**: Family Needs
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-ff20403ce9f2797c"></a>
- **M06-CAP-SPECIALTY-ff20403ce9f2797c**: Care Goals
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-c8eb74cfb0839276"></a>
- **M06-CAP-SPECIALTY-c8eb74cfb0839276**: Quality of Life
  Origin: original 4247, original 4606, original 4635, original 4719

<a id="M06-CAP-SPECIALTY-1e4515cc8b5f22ec"></a>
- **M06-CAP-SPECIALTY-1e4515cc8b5f22ec**: Supports concurrent integration with disease-directed treatment.
  Origin: original 4247

<a id="M06-CAP-SPECIALTY-5036c5478d9bad84"></a>
- **M06-CAP-SPECIALTY-5036c5478d9bad84**: Supports risk-based lifelong surveillance after childhood cancer.
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-d1e16f1dd2850a3a"></a>
- **M06-CAP-SPECIALTY-d1e16f1dd2850a3a**: Previous Treatment Exposure
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-5f12db9d68a44ce4"></a>
- **M06-CAP-SPECIALTY-5f12db9d68a44ce4**: Cardiac Health
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-0a66730d63662444"></a>
- **M06-CAP-SPECIALTY-0a66730d63662444**: Endocrine Health
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-3c23fbbbb6910f06"></a>
- **M06-CAP-SPECIALTY-3c23fbbbb6910f06**: Renal Health
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-b611c5ed87b9d45d"></a>
- **M06-CAP-SPECIALTY-b611c5ed87b9d45d**: Neurological Health
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-2fc5dc9b651fd5ae"></a>
- **M06-CAP-SPECIALTY-2fc5dc9b651fd5ae**: Fertility
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-7cadafdda92ea90b"></a>
- **M06-CAP-SPECIALTY-7cadafdda92ea90b**: Secondary Malignancy Surveillance
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-d1cb4f36886fe46b"></a>
- **M06-CAP-SPECIALTY-d1cb4f36886fe46b**: Psychosocial Health
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-9e7e6438f138e47e"></a>
- **M06-CAP-SPECIALTY-9e7e6438f138e47e**: Generates clinician-reviewable personalized surveillance pathways.
  Origin: original 4249

<a id="M06-CAP-SPECIALTY-36a1225993915cc0"></a>
- **M06-CAP-SPECIALTY-36a1225993915cc0**: Central platform for pediatric allergy and clinical immunology.
  Origin: original 4401

<a id="M06-CAP-SPECIALTY-6a7a52d4afc2bade"></a>
- **M06-CAP-SPECIALTY-6a7a52d4afc2bade**: Food Allergy
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-edefa5ca15622109"></a>
- **M06-CAP-SPECIALTY-edefa5ca15622109**: Drug Allergy
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-a489018567279612"></a>
- **M06-CAP-SPECIALTY-a489018567279612**: Anaphylaxis
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-2e4e19f07cc95a46"></a>
- **M06-CAP-SPECIALTY-2e4e19f07cc95a46**: Respiratory Allergy
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-24268aa7a7b73ac4"></a>
- **M06-CAP-SPECIALTY-24268aa7a7b73ac4**: Allergic Asthma
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-75805801b45957ab"></a>
- **M06-CAP-SPECIALTY-75805801b45957ab**: Insect Venom Allergy
  Origin: original 4401

<a id="M06-CAP-SPECIALTY-1816cd305007279b"></a>
- **M06-CAP-SPECIALTY-1816cd305007279b**: Primary Immunodeficiency
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-24b45d24c22e388a"></a>
- **M06-CAP-SPECIALTY-24b45d24c22e388a**: Immune Dysregulation
  Origin: original 4401, original 4450

<a id="M06-CAP-SPECIALTY-12a3547080776ffb"></a>
- **M06-CAP-SPECIALTY-12a3547080776ffb**: Vaccination Safety
  Origin: original 4401, original 5050

<a id="M06-CAP-SPECIALTY-b7edcd7f826cfcd9"></a>
- **M06-CAP-SPECIALTY-b7edcd7f826cfcd9**: Pulmonology
  Origin: original 4401, original 4632, original 4639, original 4701, original 4704, original 4706, original 4708, original 4709, original 4725, original 4981, original 5026, original 5031, original 5033, original 5034, original 5035, original 5108

<a id="M06-CAP-SPECIALTY-c20697528142b090"></a>
- **M06-CAP-SPECIALTY-c20697528142b090**: Dermatology
  Origin: original 4401, original 4701, original 4704, original 4706, original 4708, original 4709, original 4725, original 5026, original 5031, original 5033, original 5034, original 5035

<a id="M06-CAP-SPECIALTY-73398554fcd7dcc3"></a>
- **M06-CAP-SPECIALTY-73398554fcd7dcc3**: Gastroenterology
  Origin: original 4401, original 4475, original 4550, original 4631, original 4706, original 4709, original 4979, original 5026, original 5033, original 5034

<a id="M06-CAP-SPECIALTY-f5b38128ad4c99ee"></a>
- **M06-CAP-SPECIALTY-f5b38128ad4c99ee**: Vaccination Intelligence
  Origin: original 4401, original 4450, original 4575, original 4981

<a id="M06-CAP-SPECIALTY-356180ab736c1180"></a>
- **M06-CAP-SPECIALTY-356180ab736c1180**: Supports severe and other combined immunodeficiency disorders.
  Origin: original 4435

<a id="M06-CAP-SPECIALTY-3bc01ed891744e1f"></a>
- **M06-CAP-SPECIALTY-3bc01ed891744e1f**: Newborn Screening
  Origin: original 4435

<a id="M06-CAP-SPECIALTY-c20c13e4b933f179"></a>
- **M06-CAP-SPECIALTY-c20c13e4b933f179**: Immune Phenotype
  Origin: original 4435, original 5002

<a id="M06-CAP-SPECIALTY-2e5d2ae50f2e49fd"></a>
- **M06-CAP-SPECIALTY-2e5d2ae50f2e49fd**: Isolation Considerations
  Origin: original 4435

<a id="M06-CAP-SPECIALTY-8c4125d7a97f004a"></a>
- **M06-CAP-SPECIALTY-8c4125d7a97f004a**: Immunoglobulin Therapy
  Origin: original 4435

<a id="M06-CAP-SPECIALTY-0151856d8fef618c"></a>
- **M06-CAP-SPECIALTY-0151856d8fef618c**: Creates a longitudinal representation of immune function.
  Origin: original 4444

<a id="M06-CAP-SPECIALTY-ce7af44904cf967a"></a>
- **M06-CAP-SPECIALTY-ce7af44904cf967a**: Immunoglobulins
  Origin: original 4444

<a id="M06-CAP-SPECIALTY-3d1726df5fd3ec90"></a>
- **M06-CAP-SPECIALTY-3d1726df5fd3ec90**: Cellular Immunity
  Origin: original 4444, original 5002

<a id="M06-CAP-SPECIALTY-77192e1b34283a26"></a>
- **M06-CAP-SPECIALTY-77192e1b34283a26**: Complement
  Origin: original 4444, original 4704, original 4705, original 5002, original 5026, original 5031, original 5032, original 5039

<a id="M06-CAP-SPECIALTY-54ee6c384fe01f97"></a>
- **M06-CAP-SPECIALTY-54ee6c384fe01f97**: Functional Tests
  Origin: original 4444

<a id="M06-CAP-SPECIALTY-5e67a6b65d21fb59"></a>
- **M06-CAP-SPECIALTY-5e67a6b65d21fb59**: Vaccine Responses
  Origin: original 4444

<a id="M06-CAP-SPECIALTY-243bc6e2dbad3dea"></a>
- **M06-CAP-SPECIALTY-243bc6e2dbad3dea**: Supports temporal comparison across childhood.
  Origin: original 4444

<a id="M06-CAP-SPECIALTY-9b87dbf0b2bebe36"></a>
- **M06-CAP-SPECIALTY-9b87dbf0b2bebe36**: Coordinates the complete pediatric allergy and clinical immunology ecosystem.
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-7a9103332e04cce2"></a>
- **M06-CAP-SPECIALTY-7a9103332e04cce2**: Vaccine Allergy
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-33bb1d97f7f0ca83"></a>
- **M06-CAP-SPECIALTY-33bb1d97f7f0ca83**: Allergen Immunotherapy
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-8d331209ef9a644c"></a>
- **M06-CAP-SPECIALTY-8d331209ef9a644c**: Immunogenetics
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-86166817b279685c"></a>
- **M06-CAP-SPECIALTY-86166817b279685c**: Infection Prevention
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-df640205b50c00b5"></a>
- **M06-CAP-SPECIALTY-df640205b50c00b5**: Provides lifelong allergy and immune intelligence across the EDHT ecosystem.
  Origin: original 4450

<a id="M06-CAP-SPECIALTY-b47edd07ca43ac1b"></a>
- **M06-CAP-SPECIALTY-b47edd07ca43ac1b**: Central platform for pediatric respiratory medicine.
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-a6912462dd39eb4e"></a>
- **M06-CAP-SPECIALTY-a6912462dd39eb4e**: Chronic Cough
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-0fcaa738edf7f0c8"></a>
- **M06-CAP-SPECIALTY-0fcaa738edf7f0c8**: Bronchiectasis
  Origin: original 4451, original 4500

<a id="M06-CAP-SPECIALTY-eb82ccf4ae6a30d2"></a>
- **M06-CAP-SPECIALTY-eb82ccf4ae6a30d2**: Congenital Lung Disease
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-2127f85b0d07b90e"></a>
- **M06-CAP-SPECIALTY-2127f85b0d07b90e**: Interstitial Lung Disease
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-89ec24bde85401aa"></a>
- **M06-CAP-SPECIALTY-89ec24bde85401aa**: Sleep-related Breathing Disorders
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-4b98b93f1ef6f783"></a>
- **M06-CAP-SPECIALTY-4b98b93f1ef6f783**: Home Respiratory Therapy
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-15e2c70064c33708"></a>
- **M06-CAP-SPECIALTY-15e2c70064c33708**: Allergy & Immunology
  Origin: original 4451, original 4500, original 4550

<a id="M06-CAP-SPECIALTY-d130447d684396f9"></a>
- **M06-CAP-SPECIALTY-d130447d684396f9**: Microbiology
  Origin: original 4451, original 4471, original 4474, original 4501, original 4642, original 5119

<a id="M06-CAP-SPECIALTY-724bc9cf72e3c1e7"></a>
- **M06-CAP-SPECIALTY-724bc9cf72e3c1e7**: Pulmonary Function Testing
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-62df60cba6b22314"></a>
- **M06-CAP-SPECIALTY-62df60cba6b22314**: Wearables
  Origin: original 4451

<a id="M06-CAP-SPECIALTY-4681007a14daea7a"></a>
- **M06-CAP-SPECIALTY-4681007a14daea7a**: Supports comprehensive pediatric asthma care.
  Origin: original 4455

<a id="M06-CAP-SPECIALTY-5f124f9e42776b79"></a>
- **M06-CAP-SPECIALTY-5f124f9e42776b79**: Diagnosis
  Origin: original 4455, original 4471, original 4984, original 5151

<a id="M06-CAP-SPECIALTY-08588d541c8026a3"></a>
- **M06-CAP-SPECIALTY-08588d541c8026a3**: Adherence
  Origin: original 4455

<a id="M06-CAP-SPECIALTY-b174f3751a8a429e"></a>
- **M06-CAP-SPECIALTY-b174f3751a8a429e**: Emergency Visits
  Origin: original 4455

<a id="M06-CAP-SPECIALTY-1c293d6bff472ffd"></a>
- **M06-CAP-SPECIALTY-1c293d6bff472ffd**: Control Status
  Origin: original 4455

<a id="M06-CAP-SPECIALTY-daa9abf8ca8a1dc9"></a>
- **M06-CAP-SPECIALTY-daa9abf8ca8a1dc9**: Supports longitudinal assessment of asthma control.
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-0535ebb6ad4f5674"></a>
- **M06-CAP-SPECIALTY-0535ebb6ad4f5674**: Analyzes
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-600085d4481fd37d"></a>
- **M06-CAP-SPECIALTY-600085d4481fd37d**: Daytime Symptoms
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-a3ba4b43aae9cbc5"></a>
- **M06-CAP-SPECIALTY-a3ba4b43aae9cbc5**: Night Symptoms
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-f1665310ad9cc22b"></a>
- **M06-CAP-SPECIALTY-f1665310ad9cc22b**: Rescue Medication Use
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-0dd27a521e018b26"></a>
- **M06-CAP-SPECIALTY-0dd27a521e018b26**: Activity Limitation
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-73dc85c50f3881fd"></a>
- **M06-CAP-SPECIALTY-73dc85c50f3881fd**: Treatment Adherence
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-6e1c0a66096b6df8"></a>
- **M06-CAP-SPECIALTY-6e1c0a66096b6df8**: Supports validated age-appropriate assessment frameworks.
  Origin: original 4456

<a id="M06-CAP-SPECIALTY-d9236d5187d663a5"></a>
- **M06-CAP-SPECIALTY-d9236d5187d663a5**: Maintains structured records of asthma exacerbations.
  Origin: original 4457

<a id="M06-CAP-SPECIALTY-f01a0c3644ebaf7a"></a>
- **M06-CAP-SPECIALTY-f01a0c3644ebaf7a**: Records
  Origin: original 4457

<a id="M06-CAP-SPECIALTY-0d09e557a3785c59"></a>
- **M06-CAP-SPECIALTY-0d09e557a3785c59**: Trigger
  Origin: original 4457

<a id="M06-CAP-SPECIALTY-092034fbb21f8a85"></a>
- **M06-CAP-SPECIALTY-092034fbb21f8a85**: Rescue Medication
  Origin: original 4457, original 4460

<a id="M06-CAP-SPECIALTY-e2e9afb39b830ec8"></a>
- **M06-CAP-SPECIALTY-e2e9afb39b830ec8**: Systemic Treatment
  Origin: original 4457

<a id="M06-CAP-SPECIALTY-b07ddd2b3d1f5f41"></a>
- **M06-CAP-SPECIALTY-b07ddd2b3d1f5f41**: Emergency Care
  Origin: original 4457

<a id="M06-CAP-SPECIALTY-f201cbfb32217cee"></a>
- **M06-CAP-SPECIALTY-f201cbfb32217cee**: Hospitalization
  Origin: original 4457, original 4474, original 5151

<a id="M06-CAP-SPECIALTY-9029a8bbdb8a6553"></a>
- **M06-CAP-SPECIALTY-9029a8bbdb8a6553**: Outcome
  Origin: original 4457, original 4642, original 5113, original 5147

<a id="M06-CAP-SPECIALTY-41790cf2307c9a98"></a>
- **M06-CAP-SPECIALTY-41790cf2307c9a98**: Supports identification of clinically relevant asthma triggers.
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-feef087377a59033"></a>
- **M06-CAP-SPECIALTY-feef087377a59033**: Allergens
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-192feac0fca0d23d"></a>
- **M06-CAP-SPECIALTY-192feac0fca0d23d**: Respiratory Infections
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-b34a015a2392abda"></a>
- **M06-CAP-SPECIALTY-b34a015a2392abda**: Exercise
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-5987ad6f24931917"></a>
- **M06-CAP-SPECIALTY-5987ad6f24931917**: Environmental Exposure
  Origin: original 4458, original 4459

<a id="M06-CAP-SPECIALTY-62fe5b2af035e279"></a>
- **M06-CAP-SPECIALTY-62fe5b2af035e279**: Smoke Exposure
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-b30c3690095df2e7"></a>
- **M06-CAP-SPECIALTY-b30c3690095df2e7**: Weather Context
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-f4af213318cdbbc3"></a>
- **M06-CAP-SPECIALTY-f4af213318cdbbc3**: Medication Adherence
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-3e633399c97c3602"></a>
- **M06-CAP-SPECIALTY-3e633399c97c3602**: Historical Exacerbations
  Origin: original 4458

<a id="M06-CAP-SPECIALTY-e1ceace42de2e85c"></a>
- **M06-CAP-SPECIALTY-e1ceace42de2e85c**: Connects pulmonology with EDHT Allergy & Immunology.
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-39d5469afad4a5f8"></a>
- **M06-CAP-SPECIALTY-39d5469afad4a5f8**: Asthma Phenotype
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-b426962ee5a4a5df"></a>
- **M06-CAP-SPECIALTY-b426962ee5a4a5df**: Aeroallergens
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-b1847bdd88ae0a99"></a>
- **M06-CAP-SPECIALTY-b1847bdd88ae0a99**: Specific IgE
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-1aa4ef46ee0b9942"></a>
- **M06-CAP-SPECIALTY-1aa4ef46ee0b9942**: Skin Testing
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-7d8f60fb627e7a1c"></a>
- **M06-CAP-SPECIALTY-7d8f60fb627e7a1c**: Atopic Dermatitis
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-f20d14442b15ad87"></a>
- **M06-CAP-SPECIALTY-f20d14442b15ad87**: Allergic Rhinitis
  Origin: original 4459

<a id="M06-CAP-SPECIALTY-735e74b777257751"></a>
- **M06-CAP-SPECIALTY-735e74b777257751**: Maintains clinician-approved personalized asthma action plans.
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-5e3117025efba2c8"></a>
- **M06-CAP-SPECIALTY-5e3117025efba2c8**: Baseline Therapy
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-a477a0766bae3d9c"></a>
- **M06-CAP-SPECIALTY-a477a0766bae3d9c**: Symptom Zones
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-3b25306725738ef4"></a>
- **M06-CAP-SPECIALTY-3b25306725738ef4**: Escalation Instructions
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-919cd7db78a97d08"></a>
- **M06-CAP-SPECIALTY-919cd7db78a97d08**: Emergency Indicators
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-af2df5270abfdd6a"></a>
- **M06-CAP-SPECIALTY-af2df5270abfdd6a**: School Plan
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-47fc8bc157464f7a"></a>
- **M06-CAP-SPECIALTY-47fc8bc157464f7a**: Guardian Instructions
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-d21d544e081edce9"></a>
- **M06-CAP-SPECIALTY-d21d544e081edce9**: Multilingual Presentation
  Origin: original 4460

<a id="M06-CAP-SPECIALTY-fe940be623006603"></a>
- **M06-CAP-SPECIALTY-fe940be623006603**: Supports comprehensive pediatric cystic fibrosis care.
  Origin: original 4471

<a id="M06-CAP-SPECIALTY-08a4858c3ed95d04"></a>
- **M06-CAP-SPECIALTY-08a4858c3ed95d04**: CFTR Genetics
  Origin: original 4471

<a id="M06-CAP-SPECIALTY-399bf2f57734063b"></a>
- **M06-CAP-SPECIALTY-399bf2f57734063b**: Sweat Testing
  Origin: original 4471

<a id="M06-CAP-SPECIALTY-0b6843f67fd1e350"></a>
- **M06-CAP-SPECIALTY-0b6843f67fd1e350**: Supports pulmonary exacerbation documentation.
  Origin: original 4474

<a id="M06-CAP-SPECIALTY-3d8b6397330d43a0"></a>
- **M06-CAP-SPECIALTY-3d8b6397330d43a0**: Antimicrobials
  Origin: original 4474

<a id="M06-CAP-SPECIALTY-2ead501f1441e7f1"></a>
- **M06-CAP-SPECIALTY-2ead501f1441e7f1**: Recovery
  Origin: original 4474, original 5143

<a id="M06-CAP-SPECIALTY-da312499914beedf"></a>
- **M06-CAP-SPECIALTY-da312499914beedf**: Coordinates non-pulmonary manifestations of cystic fibrosis.
  Origin: original 4475

<a id="M06-CAP-SPECIALTY-1b8a22e65f4f0098"></a>
- **M06-CAP-SPECIALTY-1b8a22e65f4f0098**: Endocrinology
  Origin: original 4475, original 4982, original 5126, original 5136, original 5138, original 5140, original 5144

<a id="M06-CAP-SPECIALTY-c75e5cb786539ee6"></a>
- **M06-CAP-SPECIALTY-c75e5cb786539ee6**: Liver Health
  Origin: original 4475, original 4545

<a id="M06-CAP-SPECIALTY-d6ec75a864cdba47"></a>
- **M06-CAP-SPECIALTY-d6ec75a864cdba47**: Bone Health
  Origin: original 4475, original 4982

<a id="M06-CAP-SPECIALTY-5d7f6df98214486f"></a>
- **M06-CAP-SPECIALTY-5d7f6df98214486f**: Diabetes
  Origin: original 4475

<a id="M06-CAP-SPECIALTY-dd9c8e44f96ed02e"></a>
- **M06-CAP-SPECIALTY-dd9c8e44f96ed02e**: Fertility-related Care
  Origin: original 4475

<a id="M06-CAP-SPECIALTY-da4d73fcac596196"></a>
- **M06-CAP-SPECIALTY-da4d73fcac596196**: Mental Health
  Origin: original 4475

<a id="M06-CAP-SPECIALTY-52ab46d0cd918ecd"></a>
- **M06-CAP-SPECIALTY-52ab46d0cd918ecd**: Supports specialist-supervised CFTR modulator therapy.
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-96f0387f0ad62921"></a>
- **M06-CAP-SPECIALTY-96f0387f0ad62921**: Molecular Eligibility
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-93f9c381ca40e635"></a>
- **M06-CAP-SPECIALTY-93f9c381ca40e635**: Product
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-364a4c7e3ce06ed8"></a>
- **M06-CAP-SPECIALTY-364a4c7e3ce06ed8**: Dose
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-7cab3b93f2b87ad4"></a>
- **M06-CAP-SPECIALTY-7cab3b93f2b87ad4**: Treatment Start
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-e1c2a513ace73bfc"></a>
- **M06-CAP-SPECIALTY-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4476, original 4544, original 4702, original 4987, original 5026

<a id="M06-CAP-SPECIALTY-80b35dd320590f5d"></a>
- **M06-CAP-SPECIALTY-80b35dd320590f5d**: Pulmonary Response
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-6fac9624cbbc02dd"></a>
- **M06-CAP-SPECIALTY-6fac9624cbbc02dd**: Nutritional Response
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-f749e8c444dc0a0d"></a>
- **M06-CAP-SPECIALTY-f749e8c444dc0a0d**: Adverse Events
  Origin: original 4476

<a id="M06-CAP-SPECIALTY-14f7671734570816"></a>
- **M06-CAP-SPECIALTY-14f7671734570816**: Coordinates the complete pediatric respiratory ecosystem.
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-26a6bde024622673"></a>
- **M06-CAP-SPECIALTY-26a6bde024622673**: Respiratory Imaging
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-2f91e2b8b2bd5ccf"></a>
- **M06-CAP-SPECIALTY-2f91e2b8b2bd5ccf**: Rare Lung Disease
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-d10100d1d6ffe53f"></a>
- **M06-CAP-SPECIALTY-d10100d1d6ffe53f**: Home Ventilation
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-fef18a6a1ca6fae3"></a>
- **M06-CAP-SPECIALTY-fef18a6a1ca6fae3**: Sleep Medicine
  Origin: original 4500, original 4632, original 5108, original 5175

<a id="M06-CAP-SPECIALTY-bd27ded6f2fed6de"></a>
- **M06-CAP-SPECIALTY-bd27ded6f2fed6de**: Smart Respiratory Devices
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-d870e93c6bb660ed"></a>
- **M06-CAP-SPECIALTY-d870e93c6bb660ed**: Provides longitudinal, multidisciplinary and cross-border pediatric respiratory intelligence across EDHT.
  Origin: original 4500

<a id="M06-CAP-SPECIALTY-025a99b7e634c8ad"></a>
- **M06-CAP-SPECIALTY-025a99b7e634c8ad**: Central platform for pediatric gastroenterology, hepatology and digestive medicine.
  Origin: original 4501

<a id="M06-CAP-SPECIALTY-cc5faff3d02a17be"></a>
- **M06-CAP-SPECIALTY-cc5faff3d02a17be**: Gastrointestinal Disorders
  Origin: original 4501

<a id="M06-CAP-SPECIALTY-4554ef05a0c7507d"></a>
- **M06-CAP-SPECIALTY-4554ef05a0c7507d**: Liver Disease
  Origin: original 4501

<a id="M06-CAP-SPECIALTY-3ce64bea97ea9ab5"></a>
- **M06-CAP-SPECIALTY-3ce64bea97ea9ab5**: Pancreatic Disease
  Origin: original 4501

<a id="M06-CAP-SPECIALTY-d8a58b04b3b03a0f"></a>
- **M06-CAP-SPECIALTY-d8a58b04b3b03a0f**: Feeding Disorders
  Origin: original 4501, original 4550

<a id="M06-CAP-SPECIALTY-cbedf7a47e899ca6"></a>
- **M06-CAP-SPECIALTY-cbedf7a47e899ca6**: Intestinal Failure
  Origin: original 4501, original 4550

<a id="M06-CAP-SPECIALTY-9e9dbb804ca8197a"></a>
- **M06-CAP-SPECIALTY-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4501, original 4550, original 4551, original 4575, original 4600, original 4626, original 4642, original 4650, original 4725, original 4826, original 4976, original 5026, original 5101, original 5126

<a id="M06-CAP-SPECIALTY-3c3c1689757e4b2f"></a>
- **M06-CAP-SPECIALTY-3c3c1689757e4b2f**: Supports clinician-managed disorders of gut-brain interaction.
  Origin: original 4510

<a id="M06-CAP-SPECIALTY-b579cce691f51546"></a>
- **M06-CAP-SPECIALTY-b579cce691f51546**: Symptom Duration
  Origin: original 4510

<a id="M06-CAP-SPECIALTY-7af1c314d018e2ff"></a>
- **M06-CAP-SPECIALTY-7af1c314d018e2ff**: Stool Patterns
  Origin: original 4510

<a id="M06-CAP-SPECIALTY-8b55d68530fc792d"></a>
- **M06-CAP-SPECIALTY-8b55d68530fc792d**: Diet
  Origin: original 4510, original 4511, original 4979

<a id="M06-CAP-SPECIALTY-27a86002025785a5"></a>
- **M06-CAP-SPECIALTY-27a86002025785a5**: Psychosocial Context
  Origin: original 4510, original 5148

<a id="M06-CAP-SPECIALTY-0a6d5ea84e206912"></a>
- **M06-CAP-SPECIALTY-0a6d5ea84e206912**: Diagnostic Evaluation
  Origin: original 4510

<a id="M06-CAP-SPECIALTY-202f6a2a98b9f441"></a>
- **M06-CAP-SPECIALTY-202f6a2a98b9f441**: Longitudinal Outcomes
  Origin: original 4510, original 4575, original 4627

<a id="M06-CAP-SPECIALTY-f083796839d1d9d6"></a>
- **M06-CAP-SPECIALTY-f083796839d1d9d6**: Supports pediatric constipation and defecation disorders.
  Origin: original 4511

<a id="M06-CAP-SPECIALTY-26df13c14e6e1ff4"></a>
- **M06-CAP-SPECIALTY-26df13c14e6e1ff4**: Stool Frequency
  Origin: original 4511

<a id="M06-CAP-SPECIALTY-f4979c7ad45ed2a3"></a>
- **M06-CAP-SPECIALTY-f4979c7ad45ed2a3**: Stool Characteristics
  Origin: original 4511

<a id="M06-CAP-SPECIALTY-6347eb9658d03622"></a>
- **M06-CAP-SPECIALTY-6347eb9658d03622**: Withholding
  Origin: original 4511

<a id="M06-CAP-SPECIALTY-11c8a5851cb456da"></a>
- **M06-CAP-SPECIALTY-11c8a5851cb456da**: Continence
  Origin: original 4511

<a id="M06-CAP-SPECIALTY-7ccd0b4c79e91fa0"></a>
- **M06-CAP-SPECIALTY-7ccd0b4c79e91fa0**: Supports pediatric gastrointestinal motility disorders.
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-7435247dd14c9334"></a>
- **M06-CAP-SPECIALTY-7435247dd14c9334**: Transit Studies
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-bc16e6a7d1ad3c09"></a>
- **M06-CAP-SPECIALTY-bc16e6a7d1ad3c09**: Manometry
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-1a8020052193298b"></a>
- **M06-CAP-SPECIALTY-1a8020052193298b**: Feeding
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-9936d4ba19db99ca"></a>
- **M06-CAP-SPECIALTY-9936d4ba19db99ca**: Neurological Conditions
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-70848c180456086b"></a>
- **M06-CAP-SPECIALTY-70848c180456086b**: Longitudinal Response
  Origin: original 4513

<a id="M06-CAP-SPECIALTY-218543edba7e5d6c"></a>
- **M06-CAP-SPECIALTY-218543edba7e5d6c**: IBD-Unclassified
  Origin: original 4516

<a id="M06-CAP-SPECIALTY-ee597897b90399c1"></a>
- **M06-CAP-SPECIALTY-ee597897b90399c1**: Supports longitudinal Crohn disease management.
  Origin: original 4517

<a id="M06-CAP-SPECIALTY-1c71a4247748b0eb"></a>
- **M06-CAP-SPECIALTY-1c71a4247748b0eb**: Disease Location
  Origin: original 4517

<a id="M06-CAP-SPECIALTY-bd2cac0681a4041f"></a>
- **M06-CAP-SPECIALTY-bd2cac0681a4041f**: Disease Behavior
  Origin: original 4517

<a id="M06-CAP-SPECIALTY-42201b7175e8bbb5"></a>
- **M06-CAP-SPECIALTY-42201b7175e8bbb5**: Laboratory Activity
  Origin: original 4517, original 4518

<a id="M06-CAP-SPECIALTY-5e8c51cc3501e267"></a>
- **M06-CAP-SPECIALTY-5e8c51cc3501e267**: Outcomes
  Origin: original 4517, original 4518, original 5175

<a id="M06-CAP-SPECIALTY-5c51fcb62e281ec6"></a>
- **M06-CAP-SPECIALTY-5c51fcb62e281ec6**: Supports longitudinal ulcerative colitis management.
  Origin: original 4518

<a id="M06-CAP-SPECIALTY-fabb57f856661655"></a>
- **M06-CAP-SPECIALTY-fabb57f856661655**: Disease Extent
  Origin: original 4518

<a id="M06-CAP-SPECIALTY-775976bef870a1be"></a>
- **M06-CAP-SPECIALTY-775976bef870a1be**: Supports very-early-onset inflammatory bowel disease.
  Origin: original 4519

<a id="M06-CAP-SPECIALTY-2d8631a297752301"></a>
- **M06-CAP-SPECIALTY-2d8631a297752301**: Age at Onset
  Origin: original 4519

<a id="M06-CAP-SPECIALTY-046dd0aa3784c331"></a>
- **M06-CAP-SPECIALTY-046dd0aa3784c331**: Phenotype
  Origin: original 4519

<a id="M06-CAP-SPECIALTY-cb6dd7df15786a1c"></a>
- **M06-CAP-SPECIALTY-cb6dd7df15786a1c**: Immune Findings
  Origin: original 4519

<a id="M06-CAP-SPECIALTY-838cfc5c32e2894e"></a>
- **M06-CAP-SPECIALTY-838cfc5c32e2894e**: Targeted Treatment
  Origin: original 4519

<a id="M06-CAP-SPECIALTY-15731e72fb5f96ee"></a>
- **M06-CAP-SPECIALTY-15731e72fb5f96ee**: Supports longitudinal assessment of IBD activity.
  Origin: original 4520

<a id="M06-CAP-SPECIALTY-79fe9bbc63a73e4d"></a>
- **M06-CAP-SPECIALTY-79fe9bbc63a73e4d**: Laboratory Markers
  Origin: original 4520

<a id="M06-CAP-SPECIALTY-4b01bab1fffc659a"></a>
- **M06-CAP-SPECIALTY-4b01bab1fffc659a**: Stool Biomarkers
  Origin: original 4520

<a id="M06-CAP-SPECIALTY-4d133918213f0f0e"></a>
- **M06-CAP-SPECIALTY-4d133918213f0f0e**: Patient-reported Outcomes
  Origin: original 4520, original 4701, original 4719, original 4826, original 5026, original 5043, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-aac3124611afb123"></a>
- **M06-CAP-SPECIALTY-aac3124611afb123**: Supports validated pediatric disease activity frameworks where appropriate.
  Origin: original 4520

<a id="M06-CAP-SPECIALTY-ba116ccf16f51f45"></a>
- **M06-CAP-SPECIALTY-ba116ccf16f51f45**: Coordinates clinical pediatric nutrition.
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-9c7722f44448c2c4"></a>
- **M06-CAP-SPECIALTY-9c7722f44448c2c4**: Energy Requirements
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-74fd56813a2054f3"></a>
- **M06-CAP-SPECIALTY-74fd56813a2054f3**: Macronutrients
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-e1349ca759be0297"></a>
- **M06-CAP-SPECIALTY-e1349ca759be0297**: Micronutrients
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-bcd3372965813222"></a>
- **M06-CAP-SPECIALTY-bcd3372965813222**: Medical Diets
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-87bf14defd0c45b5"></a>
- **M06-CAP-SPECIALTY-87bf14defd0c45b5**: Feeding Route
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-06e21bd7ac3ff2fe"></a>
- **M06-CAP-SPECIALTY-06e21bd7ac3ff2fe**: Malnutrition Risk
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-3b0f6274260f9489"></a>
- **M06-CAP-SPECIALTY-3b0f6274260f9489**: Disease-specific Nutrition
  Origin: original 4539

<a id="M06-CAP-SPECIALTY-c757ca612324c347"></a>
- **M06-CAP-SPECIALTY-c757ca612324c347**: Supports identification and longitudinal monitoring of nutritional risk.
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-8b4f2a0189219035"></a>
- **M06-CAP-SPECIALTY-8b4f2a0189219035**: Height
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-f27d118816107ae9"></a>
- **M06-CAP-SPECIALTY-f27d118816107ae9**: Growth Velocity
  Origin: original 4540, original 5144

<a id="M06-CAP-SPECIALTY-03cc8a2b432e82eb"></a>
- **M06-CAP-SPECIALTY-03cc8a2b432e82eb**: BMI
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-042613cc56266ede"></a>
- **M06-CAP-SPECIALTY-042613cc56266ede**: Body Composition where available
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-b7b1556b74c305f1"></a>
- **M06-CAP-SPECIALTY-b7b1556b74c305f1**: Dietary Intake
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-a3abaf5f0a97a296"></a>
- **M06-CAP-SPECIALTY-a3abaf5f0a97a296**: Disease Burden
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-c416dd3f1f7776ec"></a>
- **M06-CAP-SPECIALTY-c416dd3f1f7776ec**: Laboratory Findings
  Origin: original 4540

<a id="M06-CAP-SPECIALTY-be225024589d4d21"></a>
- **M06-CAP-SPECIALTY-be225024589d4d21**: Tracks clinically relevant micronutrient status.
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-b2332b35b3d7fc5b"></a>
- **M06-CAP-SPECIALTY-b2332b35b3d7fc5b**: Iron
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-a828e68f514610a5"></a>
- **M06-CAP-SPECIALTY-a828e68f514610a5**: Vitamin D
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-7fe2cf696faf8b75"></a>
- **M06-CAP-SPECIALTY-7fe2cf696faf8b75**: Vitamin B12
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-654ffbebf2637b95"></a>
- **M06-CAP-SPECIALTY-654ffbebf2637b95**: Folate
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-a8b6e1184f3c1710"></a>
- **M06-CAP-SPECIALTY-a8b6e1184f3c1710**: Fat-soluble Vitamins
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-b41255260d9a56f2"></a>
- **M06-CAP-SPECIALTY-b41255260d9a56f2**: Trace Elements
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-ab3febd198e62322"></a>
- **M06-CAP-SPECIALTY-ab3febd198e62322**: Laboratory Trends
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-0f927af1cb7b014f"></a>
- **M06-CAP-SPECIALTY-0f927af1cb7b014f**: Supplementation
  Origin: original 4541

<a id="M06-CAP-SPECIALTY-1e0c8f5bdfd7a4a7"></a>
- **M06-CAP-SPECIALTY-1e0c8f5bdfd7a4a7**: Supports multidisciplinary pediatric feeding disorders.
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-38ea9ca441c9116b"></a>
- **M06-CAP-SPECIALTY-38ea9ca441c9116b**: Feeding Skills
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-6065131336034a0d"></a>
- **M06-CAP-SPECIALTY-6065131336034a0d**: Oral Intake
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-d1f77cd7287f138f"></a>
- **M06-CAP-SPECIALTY-d1f77cd7287f138f**: Sensory Factors
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-b18f69cd1f01719e"></a>
- **M06-CAP-SPECIALTY-b18f69cd1f01719e**: Swallowing
  Origin: original 4542, original 4632, original 4708

<a id="M06-CAP-SPECIALTY-65f654572a2b7e9b"></a>
- **M06-CAP-SPECIALTY-65f654572a2b7e9b**: Gastrointestinal Disease
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-e622bb245fdd41aa"></a>
- **M06-CAP-SPECIALTY-e622bb245fdd41aa**: Behavioral Context
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-9be7ce2253b99d0c"></a>
- **M06-CAP-SPECIALTY-9be7ce2253b99d0c**: Family Impact
  Origin: original 4542

<a id="M06-CAP-SPECIALTY-5bdf59201898f4c3"></a>
- **M06-CAP-SPECIALTY-5bdf59201898f4c3**: Supports clinician-prescribed enteral nutrition.
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-57b970264c415ddd"></a>
- **M06-CAP-SPECIALTY-57b970264c415ddd**: Indication
  Origin: original 4543, original 4544

<a id="M06-CAP-SPECIALTY-1d4b98fcfb14372e"></a>
- **M06-CAP-SPECIALTY-1d4b98fcfb14372e**: Formula
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-6ffbfeb83a373123"></a>
- **M06-CAP-SPECIALTY-6ffbfeb83a373123**: Route
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-0c07f0d195605fe7"></a>
- **M06-CAP-SPECIALTY-0c07f0d195605fe7**: Feeding Schedule
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-68f10bc3a659c374"></a>
- **M06-CAP-SPECIALTY-68f10bc3a659c374**: Calories
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-f8cc53a825212d6a"></a>
- **M06-CAP-SPECIALTY-f8cc53a825212d6a**: Fluid
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-08ae53d88d8bff94"></a>
- **M06-CAP-SPECIALTY-08ae53d88d8bff94**: Tolerance
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-85142e0487beb228"></a>
- **M06-CAP-SPECIALTY-85142e0487beb228**: Tube-related Complications
  Origin: original 4543

<a id="M06-CAP-SPECIALTY-d95de1641df19a8b"></a>
- **M06-CAP-SPECIALTY-d95de1641df19a8b**: Supports specialist-supervised parenteral nutrition.
  Origin: original 4544

<a id="M06-CAP-SPECIALTY-a4fab6e5b3a247f0"></a>
- **M06-CAP-SPECIALTY-a4fab6e5b3a247f0**: Composition
  Origin: original 4544

<a id="M06-CAP-SPECIALTY-9aa26bacf79a057d"></a>
- **M06-CAP-SPECIALTY-9aa26bacf79a057d**: Central Access
  Origin: original 4544, original 4545

<a id="M06-CAP-SPECIALTY-6cdd415dc77e2876"></a>
- **M06-CAP-SPECIALTY-6cdd415dc77e2876**: Infusion Schedule
  Origin: original 4544

<a id="M06-CAP-SPECIALTY-941d836af291d4e2"></a>
- **M06-CAP-SPECIALTY-941d836af291d4e2**: Liver Function
  Origin: original 4544

<a id="M06-CAP-SPECIALTY-c9197913a4f6f387"></a>
- **M06-CAP-SPECIALTY-c9197913a4f6f387**: Supports complex pediatric intestinal failure.
  Origin: original 4545

<a id="M06-CAP-SPECIALTY-f4db6f1aecbd84a4"></a>
- **M06-CAP-SPECIALTY-f4db6f1aecbd84a4**: Remaining Intestinal Anatomy
  Origin: original 4545

<a id="M06-CAP-SPECIALTY-bbd55cda470af3cc"></a>
- **M06-CAP-SPECIALTY-bbd55cda470af3cc**: Intestinal Adaptation
  Origin: original 4545

<a id="M06-CAP-SPECIALTY-62e8f627f7955d0e"></a>
- **M06-CAP-SPECIALTY-62e8f627f7955d0e**: Coordinates the complete pediatric digestive-health ecosystem.
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-82573d9fdad2bc25"></a>
- **M06-CAP-SPECIALTY-82573d9fdad2bc25**: Pancreatology
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-9b75281ad458711c"></a>
- **M06-CAP-SPECIALTY-9b75281ad458711c**: Celiac Disease
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-8060e25a17408069"></a>
- **M06-CAP-SPECIALTY-8060e25a17408069**: Motility
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-30221e0277dce6c5"></a>
- **M06-CAP-SPECIALTY-30221e0277dce6c5**: Clinical Nutrition
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-b22ab146facfd07a"></a>
- **M06-CAP-SPECIALTY-b22ab146facfd07a**: Transition to Adult Care
  Origin: original 4550, original 4575, original 4850

<a id="M06-CAP-SPECIALTY-e506a6f3fb4c5a3e"></a>
- **M06-CAP-SPECIALTY-e506a6f3fb4c5a3e**: Provides longitudinal, multidisciplinary and cross-border pediatric digestive intelligence across EDHT.
  Origin: original 4550

<a id="M06-CAP-SPECIALTY-dad93495e1d868c1"></a>
- **M06-CAP-SPECIALTY-dad93495e1d868c1**: Central clinical architecture for pediatric nephrology and longitudinal kidney health management across the EDHT ecosystem.
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-a7b0c681c08dd19e"></a>
- **M06-CAP-SPECIALTY-a7b0c681c08dd19e**: Pediatric Kidney Health Record
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-6f6cd872e7c37bc7"></a>
- **M06-CAP-SPECIALTY-6f6cd872e7c37bc7**: Renal Diagnosis Registry
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-5e95a3d2f0475982"></a>
- **M06-CAP-SPECIALTY-5e95a3d2f0475982**: Acute Kidney Injury Management
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-40f616d4b442f5cd"></a>
- **M06-CAP-SPECIALTY-40f616d4b442f5cd**: Chronic Kidney Disease Management
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-de0519e4bfd6d240"></a>
- **M06-CAP-SPECIALTY-de0519e4bfd6d240**: Congenital Kidney Disease
  Origin: original 4551, original 4600

<a id="M06-CAP-SPECIALTY-90083eb214833578"></a>
- **M06-CAP-SPECIALTY-90083eb214833578**: Genetic Nephrology
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-60b28b20676c1d87"></a>
- **M06-CAP-SPECIALTY-60b28b20676c1d87**: Glomerular Disease
  Origin: original 4551, original 4600

<a id="M06-CAP-SPECIALTY-fa10b64f611c430d"></a>
- **M06-CAP-SPECIALTY-fa10b64f611c430d**: Tubular Disorders
  Origin: original 4551, original 4600

<a id="M06-CAP-SPECIALTY-ceced9e38e118e70"></a>
- **M06-CAP-SPECIALTY-ceced9e38e118e70**: Electrolyte Disorders
  Origin: original 4551, original 4600

<a id="M06-CAP-SPECIALTY-4ae07eec067f4ff4"></a>
- **M06-CAP-SPECIALTY-4ae07eec067f4ff4**: Acid-Base Disorders
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-3b25281a68f8d5b9"></a>
- **M06-CAP-SPECIALTY-3b25281a68f8d5b9**: Kidney Transplantation
  Origin: original 4551, original 4575, original 4600

<a id="M06-CAP-SPECIALTY-739eec13dc2272c6"></a>
- **M06-CAP-SPECIALTY-739eec13dc2272c6**: Renal Medication Safety
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-a72bf5d699adc477"></a>
- **M06-CAP-SPECIALTY-a72bf5d699adc477**: Multidisciplinary Care Coordination
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-edd465fdb3fd4557"></a>
- **M06-CAP-SPECIALTY-edd465fdb3fd4557**: Clinical Data:
  Origin: original 4551, original 4701, original 4826, original 4976, original 5026, original 5101, original 5126

<a id="M06-CAP-SPECIALTY-7f8a7aa8ed537015"></a>
- **M06-CAP-SPECIALTY-7f8a7aa8ed537015**: Creatinine
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-89807118caf5a6be"></a>
- **M06-CAP-SPECIALTY-89807118caf5a6be**: Cystatin C
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-888f9acc6f6cd2e2"></a>
- **M06-CAP-SPECIALTY-888f9acc6f6cd2e2**: eGFR
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-95df7165bd9fbfda"></a>
- **M06-CAP-SPECIALTY-95df7165bd9fbfda**: Urinalysis
  Origin: original 4551, original 5031, original 5032

<a id="M06-CAP-SPECIALTY-4d27a3d6089273ef"></a>
- **M06-CAP-SPECIALTY-4d27a3d6089273ef**: Proteinuria
  Origin: original 4551, original 4705, original 5032

<a id="M06-CAP-SPECIALTY-431f48473fb36cd0"></a>
- **M06-CAP-SPECIALTY-431f48473fb36cd0**: Albuminuria
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-3e6673e4b5967f40"></a>
- **M06-CAP-SPECIALTY-3e6673e4b5967f40**: Electrolytes
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-41de9f847262847e"></a>
- **M06-CAP-SPECIALTY-41de9f847262847e**: Acid-Base Status
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-9da77df714be61fe"></a>
- **M06-CAP-SPECIALTY-9da77df714be61fe**: Blood Pressure
  Origin: original 4551, original 4705, original 5032

<a id="M06-CAP-SPECIALTY-36742ae9f1aca295"></a>
- **M06-CAP-SPECIALTY-36742ae9f1aca295**: Fluid Balance
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-bbb3773672124cc0"></a>
- **M06-CAP-SPECIALTY-bbb3773672124cc0**: Renal Pathology
  Origin: original 4551, original 4575

<a id="M06-CAP-SPECIALTY-2f27e552d723d07f"></a>
- **M06-CAP-SPECIALTY-2f27e552d723d07f**: Integrations:
  Origin: original 4551, original 4626, original 4629, original 4630, original 4632, original 4636, original 4637, original 4639, original 4640, original 4641, original 4642, original 4644, original 4701, original 4703, original 4704, original 4706, original 4708, original 4709, original 4719, original 4826, original 4976, original 4979, original 4981, original 4982, original 4983, original 4985, original 4987, original 4989, original 4990, original 4991, original 5026, original 5028, original 5029, original 5031, original 5032, original 5033, original 5034, original 5035, original 5043, original 5094, original 5101, original 5103, original 5107, original 5108, original 5109, original 5110, original 5112, original 5113, original 5114, original 5116, original 5117, original 5118, original 5119, original 5126, original 5129, original 5136, original 5137, original 5138, original 5139, original 5140, original 5141, original 5142, original 5143, original 5144, original 5145, original 5146

<a id="M06-CAP-SPECIALTY-646ee4a286165f4e"></a>
- **M06-CAP-SPECIALTY-646ee4a286165f4e**: Urology
  Origin: original 4551, original 4630, original 4631, original 4639, original 4640, original 4641, original 5107, original 5109

<a id="M06-CAP-SPECIALTY-7c49afabe60c90d6"></a>
- **M06-CAP-SPECIALTY-7c49afabe60c90d6**: Cardiology
  Origin: original 4551, original 4701, original 4704, original 4706, original 4709, original 4725, original 4981, original 4982, original 4987, original 4989, original 5026, original 5031, original 5034, original 5035

<a id="M06-CAP-SPECIALTY-7605ce62d32022f4"></a>
- **M06-CAP-SPECIALTY-7605ce62d32022f4**: Pharmacy
  Origin: original 4551, original 4642, original 4701, original 4826, original 4982, original 4987, original 5026, original 5028, original 5032, original 5114, original 5119, original 5146, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-fb7dcbc64a7ed5f8"></a>
- **M06-CAP-SPECIALTY-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 4551, original 4626, original 4633, original 4701, original 4703, original 4826, original 4976, original 4978, original 5151

<a id="M06-CAP-SPECIALTY-0c777c1452427a5c"></a>
- **M06-CAP-SPECIALTY-0c777c1452427a5c**: Longitudinal Pattern Recognition
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-51a5afea4b68d0c3"></a>
- **M06-CAP-SPECIALTY-51a5afea4b68d0c3**: Clinical Trend Detection
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-ba16bd58c016f0b1"></a>
- **M06-CAP-SPECIALTY-ba16bd58c016f0b1**: Deterioration Risk Support
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-c474964efc7eef27"></a>
- **M06-CAP-SPECIALTY-c474964efc7eef27**: Clinical Summarization
  Origin: original 4551, original 4701, original 4976

<a id="M06-CAP-SPECIALTY-b007d4edff89a0b4"></a>
- **M06-CAP-SPECIALTY-b007d4edff89a0b4**: Missing-data Detection
  Origin: original 4551, original 4701, original 4976

<a id="M06-CAP-SPECIALTY-5b7b1f0071a1f6d4"></a>
- **M06-CAP-SPECIALTY-5b7b1f0071a1f6d4**: Decision-support Orchestration
  Origin: original 4551, original 4575

<a id="M06-CAP-SPECIALTY-07f8d474b8b4141c"></a>
- **M06-CAP-SPECIALTY-07f8d474b8b4141c**: Safety:
  Origin: original 4551, original 4626, original 4633, original 4635, original 4638, original 4642, original 4826, original 4978, original 5094

<a id="M06-CAP-SPECIALTY-0a9d579c93e2d9ac"></a>
- **M06-CAP-SPECIALTY-0a9d579c93e2d9ac**: AI cannot independently establish a renal diagnosis, prescribe medication or modify treatment.
  Origin: original 4551

<a id="M06-CAP-SPECIALTY-43a67d79860bcb43"></a>
- **M06-CAP-SPECIALTY-43a67d79860bcb43**: HIGH
  Origin: original 4551, original 4701, original 4826, original 4976, original 4981, original 4984, original 5002, original 5026, original 5101, original 5103, original 5126, original 5148

<a id="M06-CAP-SPECIALTY-bdca879398677ed8"></a>
- **M06-CAP-SPECIALTY-bdca879398677ed8**: Serve as the orchestration layer for the complete EDHT pediatric renal and urological ecosystem.
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-b2e6f8070a7a813d"></a>
- **M06-CAP-SPECIALTY-b2e6f8070a7a813d**: Coordinates:
  Origin: original 4575, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-8544c66216575e9b"></a>
- **M06-CAP-SPECIALTY-8544c66216575e9b**: Pediatric Nephrology
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-06ad4bdab5ae038f"></a>
- **M06-CAP-SPECIALTY-06ad4bdab5ae038f**: Pediatric Urology
  Origin: original 4575, original 4600

<a id="M06-CAP-SPECIALTY-ef963e812dc56963"></a>
- **M06-CAP-SPECIALTY-ef963e812dc56963**: Emergency Medicine
  Origin: original 4575, original 4637, original 4826, original 5094, original 5116, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-33935fa27c61fca7"></a>
- **M06-CAP-SPECIALTY-33935fa27c61fca7**: Platform Functions:
  Origin: original 4575, original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-dc9dad9f9c361021"></a>
- **M06-CAP-SPECIALTY-dc9dad9f9c361021**: Unified Patient Timeline
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-61c11beed7e57144"></a>
- **M06-CAP-SPECIALTY-61c11beed7e57144**: Multidisciplinary Case Review
  Origin: original 4575, original 4606

<a id="M06-CAP-SPECIALTY-8deb81f02b2bfc0e"></a>
- **M06-CAP-SPECIALTY-8deb81f02b2bfc0e**: Role-based Access
  Origin: original 4575, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-ef959e75f54d644f"></a>
- **M06-CAP-SPECIALTY-ef959e75f54d644f**: Consent Management
  Origin: original 4575, original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125

<a id="M06-CAP-SPECIALTY-f573b0997f70bf2f"></a>
- **M06-CAP-SPECIALTY-f573b0997f70bf2f**: Clinical Alerts
  Origin: original 4575, original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-f3f538343dc817d7"></a>
- **M06-CAP-SPECIALTY-f3f538343dc817d7**: Cross-border Data Exchange
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-42f77a5ff4220425"></a>
- **M06-CAP-SPECIALTY-42f77a5ff4220425**: Structured Clinical Documentation
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-3f51afab3a09b8f9"></a>
- **M06-CAP-SPECIALTY-3f51afab3a09b8f9**: Auditability
  Origin: original 4575, original 4850

<a id="M06-CAP-SPECIALTY-a7dc95c85b62a87a"></a>
- **M06-CAP-SPECIALTY-a7dc95c85b62a87a**: Data Provenance
  Origin: original 4575, original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5129, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-802b8c1b9cf43ef1"></a>
- **M06-CAP-SPECIALTY-802b8c1b9cf43ef1**: Quality Indicators
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-f6b8c85561bfc1cd"></a>
- **M06-CAP-SPECIALTY-f6b8c85561bfc1cd**: Research-ready De-identified Data Layer
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-f1555ae96e3bed30"></a>
- **M06-CAP-SPECIALTY-f1555ae96e3bed30**: Architecture:
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-7bbe628b3276047c"></a>
- **M06-CAP-SPECIALTY-7bbe628b3276047c**: Acts as the parent coordination layer while specialized renal modules remain independently deployable services.
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-8fee1cec5c964e3e"></a>
- **M06-CAP-SPECIALTY-8fee1cec5c964e3e**: MVP Scope:
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-0b83f51db7f04f4b"></a>
- **M06-CAP-SPECIALTY-0b83f51db7f04f4b**: Longitudinal Renal Record
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-1fedeb14a943374f"></a>
- **M06-CAP-SPECIALTY-1fedeb14a943374f**: Laboratory Integration
  Origin: original 4575, original 4600, original 4725, original 5000

<a id="M06-CAP-SPECIALTY-082a8ad6f3db811c"></a>
- **M06-CAP-SPECIALTY-082a8ad6f3db811c**: Kidney Function Trends
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-1eeee0f1beace102"></a>
- **M06-CAP-SPECIALTY-1eeee0f1beace102**: Diagnosis Registry
  Origin: original 4575, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-7f59c1e0210c3f26"></a>
- **M06-CAP-SPECIALTY-7f59c1e0210c3f26**: Medication Safety
  Origin: original 4575, original 4600, original 4725, original 4850, original 4976, original 5000, original 5050, original 5175

<a id="M06-CAP-SPECIALTY-d456a4c2a3a79431"></a>
- **M06-CAP-SPECIALTY-d456a4c2a3a79431**: Imaging Reports
  Origin: original 4575, original 5125

<a id="M06-CAP-SPECIALTY-e60d752618c2b8f0"></a>
- **M06-CAP-SPECIALTY-e60d752618c2b8f0**: Interoperability
  Origin: original 4575, original 4600, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-935451130cda4672"></a>
- **M06-CAP-SPECIALTY-935451130cda4672**: Advanced Scope:
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-d21b29b4027c1acc"></a>
- **M06-CAP-SPECIALTY-d21b29b4027c1acc**: Predictive AI
  Origin: original 4575, original 4600

<a id="M06-CAP-SPECIALTY-718566eb41b20f15"></a>
- **M06-CAP-SPECIALTY-718566eb41b20f15**: Digital Twin Modeling
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-2f337b95be16d592"></a>
- **M06-CAP-SPECIALTY-2f337b95be16d592**: Dialysis Device Integration
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-9aa4c621449d968c"></a>
- **M06-CAP-SPECIALTY-9aa4c621449d968c**: Advanced Transplant Intelligence
  Origin: original 4575, original 4600

<a id="M06-CAP-SPECIALTY-9f4c0b239f0c3a91"></a>
- **M06-CAP-SPECIALTY-9f4c0b239f0c3a91**: Cross-border Specialist Networks
  Origin: original 4575

<a id="M06-CAP-SPECIALTY-299b929642526c9d"></a>
- **M06-CAP-SPECIALTY-299b929642526c9d**: Provide the master orchestration layer connecting all pediatric nephrology, urology, dialysis and kidney transplantation capabilities within EDHT.
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-efaa9efed7bb2b52"></a>
- **M06-CAP-SPECIALTY-efaa9efed7bb2b52**: Clinical Domains:
  Origin: original 4600, original 4626, original 5151

<a id="M06-CAP-SPECIALTY-a3cc50bf7f122867"></a>
- **M06-CAP-SPECIALTY-a3cc50bf7f122867**: Acute Kidney Injury
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-cafde2ad7ff04e79"></a>
- **M06-CAP-SPECIALTY-cafde2ad7ff04e79**: Chronic Kidney Disease
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-eb4ad934634ad0fc"></a>
- **M06-CAP-SPECIALTY-eb4ad934634ad0fc**: Genetic Kidney Disease
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-813ec4f138df9fe1"></a>
- **M06-CAP-SPECIALTY-813ec4f138df9fe1**: UTI
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-6c6c0b199876b75f"></a>
- **M06-CAP-SPECIALTY-6c6c0b199876b75f**: Complex Bladder Disease
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-125322344c4098db"></a>
- **M06-CAP-SPECIALTY-125322344c4098db**: Kidney Stones
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-b52f5aff420da7d7"></a>
- **M06-CAP-SPECIALTY-b52f5aff420da7d7**: Renal Nutrition
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-89e1d98e05d35dc9"></a>
- **M06-CAP-SPECIALTY-89e1d98e05d35dc9**: Renal Pharmacology
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-38258adf2ab70daa"></a>
- **M06-CAP-SPECIALTY-38258adf2ab70daa**: Critical Care
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-873049232016f19a"></a>
- **M06-CAP-SPECIALTY-873049232016f19a**: Home Care
  Origin: original 4600, original 4639

<a id="M06-CAP-SPECIALTY-bfb737d3f44b3c35"></a>
- **M06-CAP-SPECIALTY-bfb737d3f44b3c35**: Digital Capabilities:
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-96937651708e40b9"></a>
- **M06-CAP-SPECIALTY-96937651708e40b9**: Multidisciplinary Care
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-8c5d4df9f3996b04"></a>
- **M06-CAP-SPECIALTY-8c5d4df9f3996b04**: Cross-Border Exchange
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-59e267147314b249"></a>
- **M06-CAP-SPECIALTY-59e267147314b249**: Patient/Guardian Interface
  Origin: original 4600, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-6bb4749da6390ca0"></a>
- **M06-CAP-SPECIALTY-6bb4749da6390ca0**: Clinical Registry
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-a7c0a324b8c816f9"></a>
- **M06-CAP-SPECIALTY-a7c0a324b8c816f9**: Research Data Layer
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-ddb73e9d16d29c47"></a>
- **M06-CAP-SPECIALTY-ddb73e9d16d29c47**: Unified Longitudinal Timeline
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-09d27151008b0f6c"></a>
- **M06-CAP-SPECIALTY-09d27151008b0f6c**: Workflow Orchestration
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-24567aeb8f0582e7"></a>
- **M06-CAP-SPECIALTY-24567aeb8f0582e7**: Identity and Access Control
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-962f01de2c106ca9"></a>
- **M06-CAP-SPECIALTY-962f01de2c106ca9**: Clinical Decision Traceability
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-4031cf224b969610"></a>
- **M06-CAP-SPECIALTY-4031cf224b969610**: Quality Monitoring
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-fdaf8140ccf3e46f"></a>
- **M06-CAP-SPECIALTY-fdaf8140ccf3e46f**: Outcome Tracking
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-3407827230e00dc3"></a>
- **M06-CAP-SPECIALTY-3407827230e00dc3**: AI Governance
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-5f51a52700c7b663"></a>
- **M06-CAP-SPECIALTY-5f51a52700c7b663**: Safety Governance
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-5add0b6e75ef89fb"></a>
- **M06-CAP-SPECIALTY-5add0b6e75ef89fb**: MVP Foundation:
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-17c9f342a12f0d93"></a>
- **M06-CAP-SPECIALTY-17c9f342a12f0d93**: Patient Renal Record
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-cce0d41e64fe6249"></a>
- **M06-CAP-SPECIALTY-cce0d41e64fe6249**: Renal Function Trends
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-38a2cebbd8bcc033"></a>
- **M06-CAP-SPECIALTY-38a2cebbd8bcc033**: Imaging and Report Integration
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-a6e660454c4a1516"></a>
- **M06-CAP-SPECIALTY-a6e660454c4a1516**: Provider Workflows
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-753f9d55faa1fa9c"></a>
- **M06-CAP-SPECIALTY-753f9d55faa1fa9c**: Expansion Layers:
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-b3ba0feb20144f7f"></a>
- **M06-CAP-SPECIALTY-b3ba0feb20144f7f**: Dialysis Device Connectivity
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-92f29abe32a206af"></a>
- **M06-CAP-SPECIALTY-92f29abe32a206af**: Home Monitoring
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-8f5868df9b70be73"></a>
- **M06-CAP-SPECIALTY-8f5868df9b70be73**: Population Analytics
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-1efde85b84351453"></a>
- **M06-CAP-SPECIALTY-1efde85b84351453**: Research Infrastructure
  Origin: original 4600, original 4725, original 4850, original 5000, original 5050, original 5125, original 5175

<a id="M06-CAP-SPECIALTY-6c6b72c61d95ccd8"></a>
- **M06-CAP-SPECIALTY-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 4600, original 4650, original 4725, original 4850, original 5000, original 5032, original 5050, original 5125, original 5147, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-1f968f863df7d91f"></a>
- **M06-CAP-SPECIALTY-1f968f863df7d91f**: The platform remains modular. Individual services may be deployed progressively without breaking the unified longitudinal patient model.
  Origin: original 4600

<a id="M06-CAP-SPECIALTY-087329bd33feafd9"></a>
- **M06-CAP-SPECIALTY-087329bd33feafd9**: Support multidisciplinary evaluation of children with treatment-resistant epilepsy.
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-5bd8752abc1f8b2c"></a>
- **M06-CAP-SPECIALTY-5bd8752abc1f8b2c**: Treatment Failure History
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-724d367ac9b65959"></a>
- **M06-CAP-SPECIALTY-724d367ac9b65959**: Seizure Burden
  Origin: original 4606, original 5113

<a id="M06-CAP-SPECIALTY-063b4f82c6fbd099"></a>
- **M06-CAP-SPECIALTY-063b4f82c6fbd099**: EEG
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-a772da0dc5102622"></a>
- **M06-CAP-SPECIALTY-a772da0dc5102622**: Video-EEG
  Origin: original 4606, original 4635, original 5113

<a id="M06-CAP-SPECIALTY-ae099db5e1b1fc6e"></a>
- **M06-CAP-SPECIALTY-ae099db5e1b1fc6e**: Structural Imaging
  Origin: original 4606, original 4635

<a id="M06-CAP-SPECIALTY-0786ea993a8d662a"></a>
- **M06-CAP-SPECIALTY-0786ea993a8d662a**: Functional Imaging
  Origin: original 4606, original 4635

<a id="M06-CAP-SPECIALTY-7e233ded4f3aff0a"></a>
- **M06-CAP-SPECIALTY-7e233ded4f3aff0a**: Neuropsychology
  Origin: original 4606, original 4635, original 4826, original 4850, original 5113, original 5145

<a id="M06-CAP-SPECIALTY-431e461797ebff75"></a>
- **M06-CAP-SPECIALTY-431e461797ebff75**: Metabolic Testing
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-9122b17a80d34725"></a>
- **M06-CAP-SPECIALTY-9122b17a80d34725**: Surgical Candidacy
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-fea915a17f2566c5"></a>
- **M06-CAP-SPECIALTY-fea915a17f2566c5**: Procedure Documentation
  Origin: original 4606, original 4640, original 4650

<a id="M06-CAP-SPECIALTY-1cdb3a5caceb2252"></a>
- **M06-CAP-SPECIALTY-1cdb3a5caceb2252**: Neuromodulation
  Origin: original 4606, original 4635, original 4644

<a id="M06-CAP-SPECIALTY-6b013809774c93b3"></a>
- **M06-CAP-SPECIALTY-6b013809774c93b3**: Postoperative Monitoring
  Origin: original 4606, original 4626, original 4629, original 4640

<a id="M06-CAP-SPECIALTY-bfd88b81644ac579"></a>
- **M06-CAP-SPECIALTY-bfd88b81644ac579**: Seizure Outcome
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-6a420b574aaae378"></a>
- **M06-CAP-SPECIALTY-6a420b574aaae378**: Cognitive Outcome
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-5a6870afa5c21480"></a>
- **M06-CAP-SPECIALTY-5a6870afa5c21480**: Workflow:
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-9875d27fdf3721c4"></a>
- **M06-CAP-SPECIALTY-9875d27fdf3721c4**: Referral → Multimodal Evaluation → Case Conference → Treatment Decision → Intervention → Longitudinal Follow-up.
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-6aac672cbf2e01b8"></a>
- **M06-CAP-SPECIALTY-6aac672cbf2e01b8**: AI:
  Origin: original 4606, original 5175

<a id="M06-CAP-SPECIALTY-4eff066c342f3d9f"></a>
- **M06-CAP-SPECIALTY-4eff066c342f3d9f**: May assist data synthesis but cannot determine surgical eligibility autonomously.
  Origin: original 4606

<a id="M06-CAP-SPECIALTY-6c0ce7934e6849f9"></a>
- **M06-CAP-SPECIALTY-6c0ce7934e6849f9**: Provide a unified longitudinal clinical architecture for pediatric neurosurgical care integrated with the EDHT neurological ecosystem.
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-fd92c1e1f96796fe"></a>
- **M06-CAP-SPECIALTY-fd92c1e1f96796fe**: Neurosurgical Diagnosis Registry
  Origin: original 4626, original 4650, original 5101, original 5125

<a id="M06-CAP-SPECIALTY-64c15a423ff877e3"></a>
- **M06-CAP-SPECIALTY-64c15a423ff877e3**: Surgical Indication
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-54ba424b767673ee"></a>
- **M06-CAP-SPECIALTY-54ba424b767673ee**: Preoperative Assessment
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-0bb23e7c49fa52db"></a>
- **M06-CAP-SPECIALTY-0bb23e7c49fa52db**: Operative Documentation
  Origin: original 4626, original 4650

<a id="M06-CAP-SPECIALTY-2a38c80ee69c5b18"></a>
- **M06-CAP-SPECIALTY-2a38c80ee69c5b18**: Implant and Device Tracking
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-86974c59b631925c"></a>
- **M06-CAP-SPECIALTY-86974c59b631925c**: Complication Surveillance
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-ef953db17f5744cd"></a>
- **M06-CAP-SPECIALTY-ef953db17f5744cd**: Reoperation History
  Origin: original 4626, original 4641

<a id="M06-CAP-SPECIALTY-0b0228bf1a1b645a"></a>
- **M06-CAP-SPECIALTY-0b0228bf1a1b645a**: Transition to Adult Neurosurgery
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-f2ffadd21400b542"></a>
- **M06-CAP-SPECIALTY-f2ffadd21400b542**: Brain Surgery
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-c9051714ca179bdf"></a>
- **M06-CAP-SPECIALTY-c9051714ca179bdf**: Spine Surgery
  Origin: original 4626, original 4650

<a id="M06-CAP-SPECIALTY-df8252de89c1a031"></a>
- **M06-CAP-SPECIALTY-df8252de89c1a031**: Hydrocephalus
  Origin: original 4626, original 4631, original 4650, original 5101, original 5125, original 5142, original 5150

<a id="M06-CAP-SPECIALTY-e9ba93ff758ca910"></a>
- **M06-CAP-SPECIALTY-e9ba93ff758ca910**: Craniosynostosis
  Origin: original 4626, original 4650, original 5125

<a id="M06-CAP-SPECIALTY-a28983412dfb5b1e"></a>
- **M06-CAP-SPECIALTY-a28983412dfb5b1e**: CNS Tumors
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-9fae875ad4d6df8c"></a>
- **M06-CAP-SPECIALTY-9fae875ad4d6df8c**: Epilepsy Surgery
  Origin: original 4626, original 4650, original 5101, original 5125

<a id="M06-CAP-SPECIALTY-ceb478c2d73deb89"></a>
- **M06-CAP-SPECIALTY-ceb478c2d73deb89**: Neurovascular Surgery
  Origin: original 4626, original 4650, original 5101, original 5125

<a id="M06-CAP-SPECIALTY-5847fc43ebaedead"></a>
- **M06-CAP-SPECIALTY-5847fc43ebaedead**: Trauma
  Origin: original 4626, original 4637

<a id="M06-CAP-SPECIALTY-5272669483d7b8d4"></a>
- **M06-CAP-SPECIALTY-5272669483d7b8d4**: Functional Neurosurgery
  Origin: original 4626, original 4650, original 5101, original 5125

<a id="M06-CAP-SPECIALTY-264c6389f56b68ec"></a>
- **M06-CAP-SPECIALTY-264c6389f56b68ec**: Neuroradiology
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-37ea4931bb315bc8"></a>
- **M06-CAP-SPECIALTY-37ea4931bb315bc8**: Anesthesiology
  Origin: original 4626, original 5101

<a id="M06-CAP-SPECIALTY-037a514cc5b3ae8f"></a>
- **M06-CAP-SPECIALTY-037a514cc5b3ae8f**: Longitudinal Surgical Timeline
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-6b97ceb64c1fa0a3"></a>
- **M06-CAP-SPECIALTY-6b97ceb64c1fa0a3**: Imaging Correlation
  Origin: original 4626, original 5029

<a id="M06-CAP-SPECIALTY-e5d384ca7d44eb21"></a>
- **M06-CAP-SPECIALTY-e5d384ca7d44eb21**: Clinical Change Detection
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-acb3f1b2aa40e934"></a>
- **M06-CAP-SPECIALTY-acb3f1b2aa40e934**: Documentation Support
  Origin: original 4626, original 5175

<a id="M06-CAP-SPECIALTY-8e665aa3e996e5bd"></a>
- **M06-CAP-SPECIALTY-8e665aa3e996e5bd**: Outcome Analysis
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-e4e84936857d2e5a"></a>
- **M06-CAP-SPECIALTY-e4e84936857d2e5a**: AI cannot independently determine surgical indication or operative strategy.
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-aa4d3a9ec18b135b"></a>
- **M06-CAP-SPECIALTY-aa4d3a9ec18b135b**: MEDIUM-HIGH
  Origin: original 4626

<a id="M06-CAP-SPECIALTY-2eb7d4292eeaba6a"></a>
- **M06-CAP-SPECIALTY-2eb7d4292eeaba6a**: Coordinate diagnosis, intervention and lifelong surveillance of pediatric hydrocephalus and cerebrospinal fluid disorders.
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-6aaafcd2b1be352b"></a>
- **M06-CAP-SPECIALTY-6aaafcd2b1be352b**: Hydrocephalus Diagnosis
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-ee2c99685508d4bc"></a>
- **M06-CAP-SPECIALTY-ee2c99685508d4bc**: Etiology
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-828d0622112188a9"></a>
- **M06-CAP-SPECIALTY-828d0622112188a9**: Ventricular Measurements
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-6ffb731508469a32"></a>
- **M06-CAP-SPECIALTY-6ffb731508469a32**: Neurological Symptoms
  Origin: original 4627, original 4633, original 5094

<a id="M06-CAP-SPECIALTY-2c4184801658e10c"></a>
- **M06-CAP-SPECIALTY-2c4184801658e10c**: Developmental Status
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-2a9e51fdca30869b"></a>
- **M06-CAP-SPECIALTY-2a9e51fdca30869b**: Intracranial Pressure Context
  Origin: original 4627, original 4629, original 4637, original 5103, original 5110, original 5116, original 5143

<a id="M06-CAP-SPECIALTY-bcd9afa1233c5359"></a>
- **M06-CAP-SPECIALTY-bcd9afa1233c5359**: Shunt Procedures
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-9c307929abdb9711"></a>
- **M06-CAP-SPECIALTY-9c307929abdb9711**: Endoscopic Procedures
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-1a20de8b83e98fe2"></a>
- **M06-CAP-SPECIALTY-1a20de8b83e98fe2**: CSF Diversion
  Origin: original 4627, original 5142

<a id="M06-CAP-SPECIALTY-e27ce1fedf3670bb"></a>
- **M06-CAP-SPECIALTY-e27ce1fedf3670bb**: Device Registry
  Origin: original 4627, original 4644, original 5114, original 5125, original 5142

<a id="M06-CAP-SPECIALTY-1c8bfaf85d02d2a6"></a>
- **M06-CAP-SPECIALTY-1c8bfaf85d02d2a6**: Revision History
  Origin: original 4627, original 5103, original 5125

<a id="M06-CAP-SPECIALTY-fcae1c5b92a3e2bf"></a>
- **M06-CAP-SPECIALTY-fcae1c5b92a3e2bf**: Device Functions:
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-d22c9405754691e3"></a>
- **M06-CAP-SPECIALTY-d22c9405754691e3**: Shunt Type
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-a24b239af75fa42b"></a>
- **M06-CAP-SPECIALTY-a24b239af75fa42b**: Valve Type
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-d283cd16c0bbf249"></a>
- **M06-CAP-SPECIALTY-d283cd16c0bbf249**: Implant Date
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-f8579fa7e9e3281b"></a>
- **M06-CAP-SPECIALTY-f8579fa7e9e3281b**: Programmable Settings
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-79be4c63e68a7ed2"></a>
- **M06-CAP-SPECIALTY-79be4c63e68a7ed2**: Revision
  Origin: original 4627, original 5114, original 5142

<a id="M06-CAP-SPECIALTY-af284bb209d8cd3e"></a>
- **M06-CAP-SPECIALTY-af284bb209d8cd3e**: Malfunction
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-ba9d88315635912e"></a>
- **M06-CAP-SPECIALTY-ba9d88315635912e**: Device Status
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-1dd6ca0f8f06ecdc"></a>
- **M06-CAP-SPECIALTY-1dd6ca0f8f06ecdc**: Medical Passport:
  Origin: original 4627, original 4631, original 4984

<a id="M06-CAP-SPECIALTY-82908e1f59c2d4d8"></a>
- **M06-CAP-SPECIALTY-82908e1f59c2d4d8**: Critical implanted-device information can be available for authorized emergency care.
  Origin: original 4627

<a id="M06-CAP-SPECIALTY-a1a1cb3393052994"></a>
- **M06-CAP-SPECIALTY-a1a1cb3393052994**: Coordinate multidisciplinary management of craniosynostosis and complex craniofacial disorders.
  Origin: original 4629

<a id="M06-CAP-SPECIALTY-3a78f36a3fa89ed0"></a>
- **M06-CAP-SPECIALTY-3a78f36a3fa89ed0**: Cranial Phenotype
  Origin: original 4629

<a id="M06-CAP-SPECIALTY-8e6a5bf99fb3ce41"></a>
- **M06-CAP-SPECIALTY-8e6a5bf99fb3ce41**: Suture Involvement
  Origin: original 4629, original 5110

<a id="M06-CAP-SPECIALTY-1053a5d37070da98"></a>
- **M06-CAP-SPECIALTY-1053a5d37070da98**: Head Growth
  Origin: original 4629, original 5110

<a id="M06-CAP-SPECIALTY-6bc94e83ad73b97e"></a>
- **M06-CAP-SPECIALTY-6bc94e83ad73b97e**: Neurodevelopment
  Origin: original 4629, original 5110

<a id="M06-CAP-SPECIALTY-7c819acf213c6478"></a>
- **M06-CAP-SPECIALTY-7c819acf213c6478**: Ophthalmological Findings
  Origin: original 4629

<a id="M06-CAP-SPECIALTY-3e7c6af853fc9205"></a>
- **M06-CAP-SPECIALTY-3e7c6af853fc9205**: Airway Context
  Origin: original 4629, original 5110

<a id="M06-CAP-SPECIALTY-0a1d6ef82391c26e"></a>
- **M06-CAP-SPECIALTY-0a1d6ef82391c26e**: Procedure History
  Origin: original 4629, original 5110, original 5119

<a id="M06-CAP-SPECIALTY-744f6cc4af1e534f"></a>
- **M06-CAP-SPECIALTY-744f6cc4af1e534f**: Cosmetic and Functional Outcomes
  Origin: original 4629

<a id="M06-CAP-SPECIALTY-86d81ef3975ae5b8"></a>
- **M06-CAP-SPECIALTY-86d81ef3975ae5b8**: Long-term Surveillance
  Origin: original 4629, original 5108, original 5136, original 5140, original 5142

<a id="M06-CAP-SPECIALTY-d79a82b3cd59511b"></a>
- **M06-CAP-SPECIALTY-d79a82b3cd59511b**: Craniofacial Surgery
  Origin: original 4629, original 5110

<a id="M06-CAP-SPECIALTY-34f989613ab16060"></a>
- **M06-CAP-SPECIALTY-34f989613ab16060**: Ophthalmology
  Origin: original 4629, original 4701, original 4725, original 5026, original 5028, original 5103, original 5110, original 5136, original 5140, original 5141, original 5146

<a id="M06-CAP-SPECIALTY-a4592f25affcc927"></a>
- **M06-CAP-SPECIALTY-a4592f25affcc927**: ENT
  Origin: original 4629, original 4632, original 4985, original 5110

<a id="M06-CAP-SPECIALTY-ff7b4179a3c81d40"></a>
- **M06-CAP-SPECIALTY-ff7b4179a3c81d40**: Support longitudinal care for congenital structural disorders of the pediatric central nervous system.
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-6d01dcd20ca2d7c1"></a>
- **M06-CAP-SPECIALTY-6d01dcd20ca2d7c1**: Prenatal Findings
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-c85275e66af608d5"></a>
- **M06-CAP-SPECIALTY-c85275e66af608d5**: Brain Malformations
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-c3ec5a59e87e102a"></a>
- **M06-CAP-SPECIALTY-c3ec5a59e87e102a**: Spinal Dysraphism
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-1a217664808cb0c3"></a>
- **M06-CAP-SPECIALTY-1a217664808cb0c3**: Chiari Malformation
  Origin: original 4630, original 4650, original 5125

<a id="M06-CAP-SPECIALTY-303e590fade74e8c"></a>
- **M06-CAP-SPECIALTY-303e590fade74e8c**: Associated Hydrocephalus
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-674ccb384f6b67f9"></a>
- **M06-CAP-SPECIALTY-674ccb384f6b67f9**: Bladder Function
  Origin: original 4630, original 4641, original 5107, original 5109

<a id="M06-CAP-SPECIALTY-6de7c5a06fc881b6"></a>
- **M06-CAP-SPECIALTY-6de7c5a06fc881b6**: Bowel Function
  Origin: original 4630, original 4641, original 5107, original 5109

<a id="M06-CAP-SPECIALTY-45c370ceb328d605"></a>
- **M06-CAP-SPECIALTY-45c370ceb328d605**: Orthopedic Manifestations
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-f983573723a73015"></a>
- **M06-CAP-SPECIALTY-f983573723a73015**: Prenatal Medicine
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-0c2d408e413351d3"></a>
- **M06-CAP-SPECIALTY-0c2d408e413351d3**: Orthopedics
  Origin: original 4630, original 4631, original 4639, original 4640, original 4641, original 4644, original 4703, original 5028, original 5029, original 5101, original 5107, original 5109, original 5112

<a id="M06-CAP-SPECIALTY-671a886073b17fc7"></a>
- **M06-CAP-SPECIALTY-671a886073b17fc7**: Longitudinal Function:
  Origin: original 4630, original 4704

<a id="M06-CAP-SPECIALTY-3eb565ab036d6a6c"></a>
- **M06-CAP-SPECIALTY-3eb565ab036d6a6c**: Connects prenatal diagnosis with neonatal treatment, childhood development and adult-care transition.
  Origin: original 4630

<a id="M06-CAP-SPECIALTY-93aff4cc62323e01"></a>
- **M06-CAP-SPECIALTY-93aff4cc62323e01**: Provide coordinated lifelong care for children with spina bifida and related neural tube disorders.
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-56bc4c6daf0f9978"></a>
- **M06-CAP-SPECIALTY-56bc4c6daf0f9978**: Lesion Anatomy
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-26c92747b8ffa9ab"></a>
- **M06-CAP-SPECIALTY-26c92747b8ffa9ab**: Shunt Status
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-d2bb402b05fbc1d3"></a>
- **M06-CAP-SPECIALTY-d2bb402b05fbc1d3**: Motor Function
  Origin: original 4631, original 4639, original 4641, original 5107, original 5109, original 5112

<a id="M06-CAP-SPECIALTY-b6ea0adfa656c2a0"></a>
- **M06-CAP-SPECIALTY-b6ea0adfa656c2a0**: Sensory Function
  Origin: original 4631, original 4639, original 4641, original 5107, original 5109, original 5112

<a id="M06-CAP-SPECIALTY-7881805835cd66a2"></a>
- **M06-CAP-SPECIALTY-7881805835cd66a2**: Mobility
  Origin: original 4631, original 4639, original 4719, original 5043, original 5107

<a id="M06-CAP-SPECIALTY-76e3cca62831aace"></a>
- **M06-CAP-SPECIALTY-76e3cca62831aace**: Neurogenic Bladder
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-06c033035d9b407a"></a>
- **M06-CAP-SPECIALTY-06c033035d9b407a**: Neurogenic Bowel
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-f906bcad6358135b"></a>
- **M06-CAP-SPECIALTY-f906bcad6358135b**: Kidney Function
  Origin: original 4631, original 4705, original 5032

<a id="M06-CAP-SPECIALTY-527f5b02cad2d8d0"></a>
- **M06-CAP-SPECIALTY-527f5b02cad2d8d0**: Orthopedic Complications
  Origin: original 4631, original 4639

<a id="M06-CAP-SPECIALTY-ef2cea4a9ddd8e1d"></a>
- **M06-CAP-SPECIALTY-ef2cea4a9ddd8e1d**: Skin Integrity
  Origin: original 4631, original 5107

<a id="M06-CAP-SPECIALTY-d21b5f9033461e8c"></a>
- **M06-CAP-SPECIALTY-d21b5f9033461e8c**: Education
  Origin: original 4631, original 4639

<a id="M06-CAP-SPECIALTY-55f8bbb46b9b9d2e"></a>
- **M06-CAP-SPECIALTY-55f8bbb46b9b9d2e**: Assistive Technology
  Origin: original 4631, original 4639, original 5146

<a id="M06-CAP-SPECIALTY-809ac57f20fe7a0b"></a>
- **M06-CAP-SPECIALTY-809ac57f20fe7a0b**: Care Team:
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-dad1551e6044201a"></a>
- **M06-CAP-SPECIALTY-dad1551e6044201a**: Nephrology
  Origin: original 4631, original 4639, original 4641, original 4701, original 4704, original 4706, original 4709, original 4976, original 4981, original 5026, original 5031, original 5032, original 5034, original 5035, original 5107

<a id="M06-CAP-SPECIALTY-64f2d1b951a134f9"></a>
- **M06-CAP-SPECIALTY-64f2d1b951a134f9**: Nursing
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-abd50c81a1625cc3"></a>
- **M06-CAP-SPECIALTY-abd50c81a1625cc3**: Maintains critical surgical, shunt, bladder and mobility information.
  Origin: original 4631

<a id="M06-CAP-SPECIALTY-e74d1d7eaa51742b"></a>
- **M06-CAP-SPECIALTY-e74d1d7eaa51742b**: Manage pediatric Chiari malformations and other disorders of the craniocervical junction.
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-baeebf149e7db094"></a>
- **M06-CAP-SPECIALTY-baeebf149e7db094**: Chiari Classification
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-ac8a37301fe42db4"></a>
- **M06-CAP-SPECIALTY-ac8a37301fe42db4**: Headache
  Origin: original 4632, original 4638, original 5094, original 5143

<a id="M06-CAP-SPECIALTY-2280de8bef5a81ab"></a>
- **M06-CAP-SPECIALTY-2280de8bef5a81ab**: Neurological Findings
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-dcf2f0cddfb4bad2"></a>
- **M06-CAP-SPECIALTY-dcf2f0cddfb4bad2**: Respiratory Symptoms
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-91d7de0e00fb6d17"></a>
- **M06-CAP-SPECIALTY-91d7de0e00fb6d17**: Sleep-disordered Breathing Context
  Origin: original 4632, original 5108

<a id="M06-CAP-SPECIALTY-85469701794957c1"></a>
- **M06-CAP-SPECIALTY-85469701794957c1**: Syringomyelia
  Origin: original 4632, original 4650

<a id="M06-CAP-SPECIALTY-4b89ba5b7b0654d2"></a>
- **M06-CAP-SPECIALTY-4b89ba5b7b0654d2**: CSF Flow Imaging
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-04c4ee25ceaf68a6"></a>
- **M06-CAP-SPECIALTY-04c4ee25ceaf68a6**: Surgical Assessment
  Origin: original 4632

<a id="M06-CAP-SPECIALTY-34d1ee2aaefade98"></a>
- **M06-CAP-SPECIALTY-34d1ee2aaefade98**: Decompression Procedure
  Origin: original 4632, original 5108

<a id="M06-CAP-SPECIALTY-1534f05abe23e7bb"></a>
- **M06-CAP-SPECIALTY-1534f05abe23e7bb**: Postoperative Imaging
  Origin: original 4632, original 5108, original 5139

<a id="M06-CAP-SPECIALTY-1af11e17f6b27dbf"></a>
- **M06-CAP-SPECIALTY-1af11e17f6b27dbf**: Neurological Outcomes
  Origin: original 4632, original 4636

<a id="M06-CAP-SPECIALTY-ac67f542489868f5"></a>
- **M06-CAP-SPECIALTY-ac67f542489868f5**: Support longitudinal surveillance and management of pediatric syringomyelia and related spinal cord cavity disorders.
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-6cfc117ea7def916"></a>
- **M06-CAP-SPECIALTY-6cfc117ea7def916**: Syrinx Location
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-249eae5fdc36d3f0"></a>
- **M06-CAP-SPECIALTY-249eae5fdc36d3f0**: Syrinx Dimensions
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-b3855be4d9c89d7f"></a>
- **M06-CAP-SPECIALTY-b3855be4d9c89d7f**: Weakness
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-c9f3df74c5a74388"></a>
- **M06-CAP-SPECIALTY-c9f3df74c5a74388**: Sensory Changes
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-c641c7e3eff8916e"></a>
- **M06-CAP-SPECIALTY-c641c7e3eff8916e**: Scoliosis Context
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-d3c051557c3f0ede"></a>
- **M06-CAP-SPECIALTY-d3c051557c3f0ede**: Chiari Association
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-13c96981ddfa7233"></a>
- **M06-CAP-SPECIALTY-13c96981ddfa7233**: Trauma Association
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-dbd4c1e725073a3c"></a>
- **M06-CAP-SPECIALTY-dbd4c1e725073a3c**: MRI Timeline
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-011712fdfa70d2d8"></a>
- **M06-CAP-SPECIALTY-011712fdfa70d2d8**: Surgical Intervention
  Origin: original 4633, original 5109, original 5116, original 5117, original 5119

<a id="M06-CAP-SPECIALTY-e8c2599c3e66ef8e"></a>
- **M06-CAP-SPECIALTY-e8c2599c3e66ef8e**: Postoperative Surveillance
  Origin: original 4633, original 5101

<a id="M06-CAP-SPECIALTY-d08bcd1528f93e38"></a>
- **M06-CAP-SPECIALTY-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 4633, original 4644, original 5101, original 5126, original 5151

<a id="M06-CAP-SPECIALTY-f2ce0efaf0d2d60f"></a>
- **M06-CAP-SPECIALTY-f2ce0efaf0d2d60f**: Longitudinal Measurement Support
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-c77aa01982ff5802"></a>
- **M06-CAP-SPECIALTY-c77aa01982ff5802**: Imaging Change Detection
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-fa621f209c2103cf"></a>
- **M06-CAP-SPECIALTY-fa621f209c2103cf**: Clinical-Imaging Correlation
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-c5aa11e35a07595b"></a>
- **M06-CAP-SPECIALTY-c5aa11e35a07595b**: Imaging AI remains supplementary to neuroradiological and neurosurgical interpretation.
  Origin: original 4633

<a id="M06-CAP-SPECIALTY-301f36c7e4ce0c5e"></a>
- **M06-CAP-SPECIALTY-301f36c7e4ce0c5e**: Support surgical and device-based treatment pathways for selected pediatric epilepsy patients.
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-1d976ef13d0f15bc"></a>
- **M06-CAP-SPECIALTY-1d976ef13d0f15bc**: Drug-resistant Epilepsy
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-92bb447d5c6309c8"></a>
- **M06-CAP-SPECIALTY-92bb447d5c6309c8**: Presurgical Evaluation
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-be1c0103815c32a4"></a>
- **M06-CAP-SPECIALTY-be1c0103815c32a4**: Seizure Localization
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-950a62a4a3504322"></a>
- **M06-CAP-SPECIALTY-950a62a4a3504322**: Resection
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-17ba5984e69e2ca6"></a>
- **M06-CAP-SPECIALTY-17ba5984e69e2ca6**: Disconnection Procedures
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-3f26563cf5cc4101"></a>
- **M06-CAP-SPECIALTY-3f26563cf5cc4101**: Implanted Device Registry
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-ca00dc9c563e7a67"></a>
- **M06-CAP-SPECIALTY-ca00dc9c563e7a67**: Postoperative Seizure Tracking
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-0f4e71cc3debcea2"></a>
- **M06-CAP-SPECIALTY-0f4e71cc3debcea2**: Cognitive Outcomes
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-f5d9c6c7686e4180"></a>
- **M06-CAP-SPECIALTY-f5d9c6c7686e4180**: Multidisciplinary Workflow:
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-c1aec45228eb0fe9"></a>
- **M06-CAP-SPECIALTY-c1aec45228eb0fe9**: Epileptology → Neurophysiology → Imaging → Neuropsychology → Neurosurgery → Case Board → Intervention → Follow-up.
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-4718b10b348ae760"></a>
- **M06-CAP-SPECIALTY-4718b10b348ae760**: Surgical candidacy remains a multidisciplinary specialist decision.
  Origin: original 4635

<a id="M06-CAP-SPECIALTY-5543354fe6ab2aa1"></a>
- **M06-CAP-SPECIALTY-5543354fe6ab2aa1**: Coordinate pediatric cerebrovascular and neurovascular surgical disease.
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-e4b9473e46e44a0e"></a>
- **M06-CAP-SPECIALTY-e4b9473e46e44a0e**: Arteriovenous Malformations
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-368c056586e751b8"></a>
- **M06-CAP-SPECIALTY-368c056586e751b8**: Cavernous Malformations
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-e15a538bac3538a4"></a>
- **M06-CAP-SPECIALTY-e15a538bac3538a4**: Aneurysm
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-2e90f99e5015f499"></a>
- **M06-CAP-SPECIALTY-2e90f99e5015f499**: Moyamoya Context
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-2dd6dbe2f1db2325"></a>
- **M06-CAP-SPECIALTY-2dd6dbe2f1db2325**: Vascular Anatomy
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-2c003bbfad368124"></a>
- **M06-CAP-SPECIALTY-2c003bbfad368124**: Hemorrhage History
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-c97529df53139f39"></a>
- **M06-CAP-SPECIALTY-c97529df53139f39**: Ischemic Events
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-d6a55655d4245547"></a>
- **M06-CAP-SPECIALTY-d6a55655d4245547**: Angiography
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-7bc7f92cb128242c"></a>
- **M06-CAP-SPECIALTY-7bc7f92cb128242c**: CT
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-a118826ecc5cb723"></a>
- **M06-CAP-SPECIALTY-a118826ecc5cb723**: Surgical Treatment
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-0aeb6f7f5e5a8cb2"></a>
- **M06-CAP-SPECIALTY-0aeb6f7f5e5a8cb2**: Endovascular Treatment
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-85f9cfcc6e74ca8e"></a>
- **M06-CAP-SPECIALTY-85f9cfcc6e74ca8e**: Radiosurgical Context
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-6e7052c1988625fa"></a>
- **M06-CAP-SPECIALTY-6e7052c1988625fa**: Post-treatment Imaging
  Origin: original 4636

<a id="M06-CAP-SPECIALTY-b369b9569bd7c59f"></a>
- **M06-CAP-SPECIALTY-b369b9569bd7c59f**: Interventional Neuroradiology
  Origin: original 4636, original 5118

<a id="M06-CAP-SPECIALTY-d463303c19570400"></a>
- **M06-CAP-SPECIALTY-d463303c19570400**: Provide longitudinal management of pediatric traumatic brain injury from emergency presentation through rehabilitation.
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-65f608048b61c2d2"></a>
- **M06-CAP-SPECIALTY-65f608048b61c2d2**: Injury Event
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-d15c2c41ca949d07"></a>
- **M06-CAP-SPECIALTY-d15c2c41ca949d07**: Mechanism
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-5e70caca514dee55"></a>
- **M06-CAP-SPECIALTY-5e70caca514dee55**: Initial Neurological Status
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-7b46bfe00bc72a69"></a>
- **M06-CAP-SPECIALTY-7b46bfe00bc72a69**: Consciousness Assessment
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-12716a9adcf823d7"></a>
- **M06-CAP-SPECIALTY-12716a9adcf823d7**: Intracranial Injury
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-0359a2746fa04199"></a>
- **M06-CAP-SPECIALTY-0359a2746fa04199**: Skull Injury
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-ea71b429588b66d8"></a>
- **M06-CAP-SPECIALTY-ea71b429588b66d8**: Seizures
  Origin: original 4637, original 5143

<a id="M06-CAP-SPECIALTY-c415a33ce86603f9"></a>
- **M06-CAP-SPECIALTY-c415a33ce86603f9**: Cognitive Effects
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-c97dd47b68f29525"></a>
- **M06-CAP-SPECIALTY-c97dd47b68f29525**: Behavioral Effects
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-b21b213eb0d832c5"></a>
- **M06-CAP-SPECIALTY-b21b213eb0d832c5**: School Reintegration
  Origin: original 4637, original 5145

<a id="M06-CAP-SPECIALTY-c318da8ef7447e62"></a>
- **M06-CAP-SPECIALTY-c318da8ef7447e62**: Timeline:
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-c7f36a55fafbb7e9"></a>
- **M06-CAP-SPECIALTY-c7f36a55fafbb7e9**: Emergency → Acute Stabilization → Imaging → Neurosurgical/ICU Care → Recovery → Rehabilitation → Long-term Follow-up.
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-4977eafd100a8a50"></a>
- **M06-CAP-SPECIALTY-4977eafd100a8a50**: ICU
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-5ffa682f42236b85"></a>
- **M06-CAP-SPECIALTY-5ffa682f42236b85**: Education Support
  Origin: original 4637

<a id="M06-CAP-SPECIALTY-7a265753863ce907"></a>
- **M06-CAP-SPECIALTY-7a265753863ce907**: Support structured assessment and recovery monitoring following pediatric concussion and mild traumatic brain injury.
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-24441c42a43d267e"></a>
- **M06-CAP-SPECIALTY-24441c42a43d267e**: Injury Mechanism
  Origin: original 4638, original 4639, original 5094, original 5116

<a id="M06-CAP-SPECIALTY-58a31975f00317f1"></a>
- **M06-CAP-SPECIALTY-58a31975f00317f1**: Acute Symptoms
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-01c4799fe3798c43"></a>
- **M06-CAP-SPECIALTY-01c4799fe3798c43**: Dizziness
  Origin: original 4638, original 5094

<a id="M06-CAP-SPECIALTY-c2b810f18c7e3bf3"></a>
- **M06-CAP-SPECIALTY-c2b810f18c7e3bf3**: Balance
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-4753c913833d2983"></a>
- **M06-CAP-SPECIALTY-4753c913833d2983**: Vision Symptoms
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-773ca04494b9f30c"></a>
- **M06-CAP-SPECIALTY-773ca04494b9f30c**: Cognitive Symptoms
  Origin: original 4638, original 5094

<a id="M06-CAP-SPECIALTY-a1ca037a5a5fd5db"></a>
- **M06-CAP-SPECIALTY-a1ca037a5a5fd5db**: Mood
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-918b6465e2e0edfa"></a>
- **M06-CAP-SPECIALTY-918b6465e2e0edfa**: School Function
  Origin: original 4638, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-0943ef8e2a954607"></a>
- **M06-CAP-SPECIALTY-0943ef8e2a954607**: Physical Activity
  Origin: original 4638, original 4719, original 5043

<a id="M06-CAP-SPECIALTY-b1d32b0f328b1235"></a>
- **M06-CAP-SPECIALTY-b1d32b0f328b1235**: Previous Concussion
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-d89a12d68074b568"></a>
- **M06-CAP-SPECIALTY-d89a12d68074b568**: Symptom Timeline
  Origin: original 4638, original 5039, original 5151

<a id="M06-CAP-SPECIALTY-b5571badb14a9219"></a>
- **M06-CAP-SPECIALTY-b5571badb14a9219**: Clinical Assessments
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-c7fccd82c0294581"></a>
- **M06-CAP-SPECIALTY-c7fccd82c0294581**: Recovery Progress
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-ab9368283fd320ff"></a>
- **M06-CAP-SPECIALTY-ab9368283fd320ff**: Return Functions:
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-723ab735b10cee4a"></a>
- **M06-CAP-SPECIALTY-723ab735b10cee4a**: Return-to-Learn Workflow
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-785d2629f01d0649"></a>
- **M06-CAP-SPECIALTY-785d2629f01d0649**: Return-to-Activity Workflow
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-1270d1005bed0d12"></a>
- **M06-CAP-SPECIALTY-1270d1005bed0d12**: Clinician Clearance Documentation
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-06e62a1429f4b728"></a>
- **M06-CAP-SPECIALTY-06e62a1429f4b728**: School Accommodation Context
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-4127ba60f3b316cd"></a>
- **M06-CAP-SPECIALTY-4127ba60f3b316cd**: Supports clinician-defined escalation for concerning or worsening neurological features.
  Origin: original 4638

<a id="M06-CAP-SPECIALTY-3b4a573ddec82380"></a>
- **M06-CAP-SPECIALTY-3b4a573ddec82380**: Coordinate acute and lifelong management of pediatric spinal cord injury.
  Origin: original 4639

<a id="M06-CAP-SPECIALTY-2d33ce524f06d36c"></a>
- **M06-CAP-SPECIALTY-2d33ce524f06d36c**: Injury Level
  Origin: original 4639

<a id="M06-CAP-SPECIALTY-11ac900e6c4693c8"></a>
- **M06-CAP-SPECIALTY-11ac900e6c4693c8**: Neurological Classification
  Origin: original 4639

<a id="M06-CAP-SPECIALTY-44f51d0e9f8b079d"></a>
- **M06-CAP-SPECIALTY-44f51d0e9f8b079d**: Respiratory Function
  Origin: original 4639, original 4708

<a id="M06-CAP-SPECIALTY-3cdb64ee1434a4f4"></a>
- **M06-CAP-SPECIALTY-3cdb64ee1434a4f4**: Bladder
  Origin: original 4639

<a id="M06-CAP-SPECIALTY-94d10188daa2bf15"></a>
- **M06-CAP-SPECIALTY-94d10188daa2bf15**: Bowel
  Origin: original 4639

<a id="M06-CAP-SPECIALTY-15b311373ac26ff9"></a>
- **M06-CAP-SPECIALTY-15b311373ac26ff9**: Skin
  Origin: original 4639, original 5031

<a id="M06-CAP-SPECIALTY-eff480e7538c881c"></a>
- **M06-CAP-SPECIALTY-eff480e7538c881c**: Spasticity
  Origin: original 4639, original 4644

<a id="M06-CAP-SPECIALTY-9f322362c66e0d28"></a>
- **M06-CAP-SPECIALTY-9f322362c66e0d28**: Pain Medicine
  Origin: original 4639, original 4644, original 4719, original 5043

<a id="M06-CAP-SPECIALTY-0a2d5ad5e5705103"></a>
- **M06-CAP-SPECIALTY-0a2d5ad5e5705103**: Support pediatric neurological and neurosurgical spinal disorders.
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-c3a8a8b7f6f365bb"></a>
- **M06-CAP-SPECIALTY-c3a8a8b7f6f365bb**: Congenital Spine Disorders
  Origin: original 4640, original 4650

<a id="M06-CAP-SPECIALTY-40c3b9404157c97d"></a>
- **M06-CAP-SPECIALTY-40c3b9404157c97d**: Spinal Cord Compression
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-a57b489501497212"></a>
- **M06-CAP-SPECIALTY-a57b489501497212**: Tethered Cord
  Origin: original 4640, original 5125

<a id="M06-CAP-SPECIALTY-644fb77fae951ad5"></a>
- **M06-CAP-SPECIALTY-644fb77fae951ad5**: Spinal Tumors
  Origin: original 4640, original 5126

<a id="M06-CAP-SPECIALTY-458f3ba2d2336d49"></a>
- **M06-CAP-SPECIALTY-458f3ba2d2336d49**: Spinal Cysts
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-a790c89c073ea0af"></a>
- **M06-CAP-SPECIALTY-a790c89c073ea0af**: Neurological Deficits
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-00c8b6059eb75cf3"></a>
- **M06-CAP-SPECIALTY-00c8b6059eb75cf3**: Gait Changes
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-d27ad6a8b7247af3"></a>
- **M06-CAP-SPECIALTY-d27ad6a8b7247af3**: Bladder Changes
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-60b021a366c7f1ec"></a>
- **M06-CAP-SPECIALTY-60b021a366c7f1ec**: Bowel Changes
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-76821ae053b690ca"></a>
- **M06-CAP-SPECIALTY-76821ae053b690ca**: Spine Imaging
  Origin: original 4640

<a id="M06-CAP-SPECIALTY-12426ea7f9e0a0bd"></a>
- **M06-CAP-SPECIALTY-12426ea7f9e0a0bd**: Provide longitudinal surveillance for children with tethered cord and spinal dysraphism.
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-4d51173b8cdf7484"></a>
- **M06-CAP-SPECIALTY-4d51173b8cdf7484**: Congenital Diagnosis
  Origin: original 4641, original 5109

<a id="M06-CAP-SPECIALTY-4e787722e84ee2d2"></a>
- **M06-CAP-SPECIALTY-4e787722e84ee2d2**: Gait
  Origin: original 4641, original 4703, original 5109

<a id="M06-CAP-SPECIALTY-7fe5546c0f1f2e21"></a>
- **M06-CAP-SPECIALTY-7fe5546c0f1f2e21**: Urodynamics
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-6b1103e499871f4f"></a>
- **M06-CAP-SPECIALTY-6b1103e499871f4f**: Kidney Health
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-40625d4eede221e2"></a>
- **M06-CAP-SPECIALTY-40625d4eede221e2**: Orthopedic Findings
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-6dffc73983bf43cb"></a>
- **M06-CAP-SPECIALTY-6dffc73983bf43cb**: Functional Change
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-718c276ed0bc8acc"></a>
- **M06-CAP-SPECIALTY-718c276ed0bc8acc**: Retethering Assessment
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-5ddb42b99c0f2787"></a>
- **M06-CAP-SPECIALTY-5ddb42b99c0f2787**: Clinical Intelligence:
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-66e608b41dd2c7bb"></a>
- **M06-CAP-SPECIALTY-66e608b41dd2c7bb**: Correlates neurological, urological, orthopedic and imaging changes across time.
  Origin: original 4641

<a id="M06-CAP-SPECIALTY-1bb507bda5c058c0"></a>
- **M06-CAP-SPECIALTY-1bb507bda5c058c0**: Provide structured surveillance of neurosurgical infection and postoperative complications.
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-e584fe3cbbdb8849"></a>
- **M06-CAP-SPECIALTY-e584fe3cbbdb8849**: Surgical Site Infection
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-c26a90e474a44464"></a>
- **M06-CAP-SPECIALTY-c26a90e474a44464**: Shunt Infection
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-45b516f18594e90c"></a>
- **M06-CAP-SPECIALTY-45b516f18594e90c**: CNS Infection
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-0b7719e5e8b3ce00"></a>
- **M06-CAP-SPECIALTY-0b7719e5e8b3ce00**: Wound Status
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-b985bf0e35006c12"></a>
- **M06-CAP-SPECIALTY-b985bf0e35006c12**: CSF Findings
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-6deb97db2aff99f9"></a>
- **M06-CAP-SPECIALTY-6deb97db2aff99f9**: Antimicrobial Therapy
  Origin: original 4642, original 5119

<a id="M06-CAP-SPECIALTY-b3adcac93921599e"></a>
- **M06-CAP-SPECIALTY-b3adcac93921599e**: Device Involvement
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-8fd7b760dbe248fe"></a>
- **M06-CAP-SPECIALTY-8fd7b760dbe248fe**: Postoperative Hemorrhage
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-137c0a8f07f92334"></a>
- **M06-CAP-SPECIALTY-137c0a8f07f92334**: CSF Leak
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-d4f61e824a98fff2"></a>
- **M06-CAP-SPECIALTY-d4f61e824a98fff2**: Neurological Deterioration
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-17afb585302a7682"></a>
- **M06-CAP-SPECIALTY-17afb585302a7682**: Reoperation
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-dc7c2f13171e4aa6"></a>
- **M06-CAP-SPECIALTY-dc7c2f13171e4aa6**: ICU Admission
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-813d0ab6af854e92"></a>
- **M06-CAP-SPECIALTY-813d0ab6af854e92**: Infectious Disease
  Origin: original 4642, original 4976, original 4981, original 4990, original 4991, original 5119, original 5142

<a id="M06-CAP-SPECIALTY-27138ecae6708548"></a>
- **M06-CAP-SPECIALTY-27138ecae6708548**: High-risk complications can trigger clinician-defined escalation pathways.
  Origin: original 4642

<a id="M06-CAP-SPECIALTY-9c597ecfc6d78725"></a>
- **M06-CAP-SPECIALTY-9c597ecfc6d78725**: Support selected functional neurosurgical and neuromodulation therapies in pediatric neurological disease.
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-2cf2b84939a9ee1d"></a>
- **M06-CAP-SPECIALTY-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 4644, original 5114

<a id="M06-CAP-SPECIALTY-f7d977c4564bf91e"></a>
- **M06-CAP-SPECIALTY-f7d977c4564bf91e**: Motor Phenotype
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-275d846798987f6f"></a>
- **M06-CAP-SPECIALTY-275d846798987f6f**: Dystonia
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-fc12f44c0fcec874"></a>
- **M06-CAP-SPECIALTY-fc12f44c0fcec874**: Pain Context
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-85d61c5ac64e394d"></a>
- **M06-CAP-SPECIALTY-85d61c5ac64e394d**: Functional Assessment
  Origin: original 4644, original 4708, original 5033

<a id="M06-CAP-SPECIALTY-e39d3139b6fc929d"></a>
- **M06-CAP-SPECIALTY-e39d3139b6fc929d**: Treatment Goals
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-fc90852da2b250ee"></a>
- **M06-CAP-SPECIALTY-fc90852da2b250ee**: Intrathecal Therapy Context
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-d55ca9d738f14f7f"></a>
- **M06-CAP-SPECIALTY-d55ca9d738f14f7f**: Implantable Devices
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-8dc40263cd8c7654"></a>
- **M06-CAP-SPECIALTY-8dc40263cd8c7654**: Surgical Procedures
  Origin: original 4644, original 5126

<a id="M06-CAP-SPECIALTY-0aa0a2935c21e4bd"></a>
- **M06-CAP-SPECIALTY-0aa0a2935c21e4bd**: Device Programming History
  Origin: original 4644

<a id="M06-CAP-SPECIALTY-fbe7d500b7a012b2"></a>
- **M06-CAP-SPECIALTY-fbe7d500b7a012b2**: Serve as the master orchestration layer for pediatric neurosurgery, neurotrauma and complex spine care across EDHT.
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-6a662ebc6e1b44af"></a>
- **M06-CAP-SPECIALTY-6a662ebc6e1b44af**: General Pediatric Neurosurgery
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-606ae4d87820b35d"></a>
- **M06-CAP-SPECIALTY-606ae4d87820b35d**: CSF Disorders
  Origin: original 4650, original 5101, original 5125

<a id="M06-CAP-SPECIALTY-59ae17bfbbbdf6c2"></a>
- **M06-CAP-SPECIALTY-59ae17bfbbbdf6c2**: Neurosurgical Devices
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-97ef0aed6adffe90"></a>
- **M06-CAP-SPECIALTY-97ef0aed6adffe90**: Congenital Brain Disorders
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-59a34a1c6a0c044d"></a>
- **M06-CAP-SPECIALTY-59a34a1c6a0c044d**: Spina Bifida
  Origin: original 4650, original 5125

<a id="M06-CAP-SPECIALTY-8c5d0382f278d4f6"></a>
- **M06-CAP-SPECIALTY-8c5d0382f278d4f6**: Brain Trauma
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-fda3355085bfe0b5"></a>
- **M06-CAP-SPECIALTY-fda3355085bfe0b5**: Concussion
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-8225128e8b62dec1"></a>
- **M06-CAP-SPECIALTY-8225128e8b62dec1**: Spinal Cord Injury
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-08a599f0f3502a62"></a>
- **M06-CAP-SPECIALTY-08a599f0f3502a62**: Neurocritical Care
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-c7b90aeda5b148cc"></a>
- **M06-CAP-SPECIALTY-c7b90aeda5b148cc**: Neuroimaging Integration
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-e64b104fefe0502b"></a>
- **M06-CAP-SPECIALTY-e64b104fefe0502b**: Device Passport
  Origin: original 4650, original 5125

<a id="M06-CAP-SPECIALTY-f11a7630b38b997e"></a>
- **M06-CAP-SPECIALTY-f11a7630b38b997e**: Multidisciplinary Case Boards
  Origin: original 4650, original 4725

<a id="M06-CAP-SPECIALTY-cab8d8a3fa4c50a2"></a>
- **M06-CAP-SPECIALTY-cab8d8a3fa4c50a2**: Outcomes Registry
  Origin: original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-44f642ed98a4ae8e"></a>
- **M06-CAP-SPECIALTY-44f642ed98a4ae8e**: Unified Neurosurgical Timeline
  Origin: original 4650, original 5125

<a id="M06-CAP-SPECIALTY-58e3b9b9c02dc1e2"></a>
- **M06-CAP-SPECIALTY-58e3b9b9c02dc1e2**: Preoperative Workflow
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-4c6c6e66bebee07b"></a>
- **M06-CAP-SPECIALTY-4c6c6e66bebee07b**: Postoperative Workflow
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-235d200f1e7fe9ff"></a>
- **M06-CAP-SPECIALTY-235d200f1e7fe9ff**: Implant Tracking
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-6358a0fc85047d10"></a>
- **M06-CAP-SPECIALTY-6358a0fc85047d10**: Multidisciplinary Coordination
  Origin: original 4650, original 4850, original 5050, original 5125

<a id="M06-CAP-SPECIALTY-aca0583fd7e006c3"></a>
- **M06-CAP-SPECIALTY-aca0583fd7e006c3**: Cross-Border Interoperability
  Origin: original 4650, original 4725, original 4850, original 5000, original 5050, original 5125, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-0ef0882a51d9eac6"></a>
- **M06-CAP-SPECIALTY-0ef0882a51d9eac6**: Imaging Report Integration
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-6c1cba07cdd894e9"></a>
- **M06-CAP-SPECIALTY-6c1cba07cdd894e9**: Implant and Shunt Registry
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-ca19d5307a78807d"></a>
- **M06-CAP-SPECIALTY-ca19d5307a78807d**: Provider Handover
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-220d1cae1cd96cd8"></a>
- **M06-CAP-SPECIALTY-220d1cae1cd96cd8**: Advanced Imaging AI
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-89b9c3e7a93e7462"></a>
- **M06-CAP-SPECIALTY-89b9c3e7a93e7462**: Device Telemetry
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-7cac1f9717f544e7"></a>
- **M06-CAP-SPECIALTY-7cac1f9717f544e7**: Predictive Outcome Models
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-6d99bb130b189364"></a>
- **M06-CAP-SPECIALTY-6d99bb130b189364**: Advanced Surgical Planning
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-6aade7c8c982e88e"></a>
- **M06-CAP-SPECIALTY-6aade7c8c982e88e**: Multicenter Research Infrastructure
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-586b3c0b9273d4b1"></a>
- **M06-CAP-SPECIALTY-586b3c0b9273d4b1**: Specialized neurosurgical services remain independently deployable while sharing the unified EDHT longitudinal patient model.
  Origin: original 4650

<a id="M06-CAP-SPECIALTY-d65305b5f6d21ac0"></a>
- **M06-CAP-SPECIALTY-d65305b5f6d21ac0**: Provide the central longitudinal clinical architecture for pediatric rheumatology, autoimmune, autoinflammatory and systemic connective tissue diseases across EDHT.
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-46c3dc7240a46818"></a>
- **M06-CAP-SPECIALTY-46c3dc7240a46818**: Rheumatologic Diagnosis Registry
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-6549bb8529ae6a52"></a>
- **M06-CAP-SPECIALTY-6549bb8529ae6a52**: Musculoskeletal Symptoms
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-29025f5f48fb2e0e"></a>
- **M06-CAP-SPECIALTY-29025f5f48fb2e0e**: Joint Examination
  Origin: original 4701, original 5026

<a id="M06-CAP-SPECIALTY-b006eb77f693bc98"></a>
- **M06-CAP-SPECIALTY-b006eb77f693bc98**: Systemic Manifestations
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-47794f0e311b46d6"></a>
- **M06-CAP-SPECIALTY-47794f0e311b46d6**: Autoimmune Disease
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-cd4647e36b3c638b"></a>
- **M06-CAP-SPECIALTY-cd4647e36b3c638b**: Autoinflammatory Disease
  Origin: original 4701, original 4725

<a id="M06-CAP-SPECIALTY-8dfc9dc1d8fdbf2d"></a>
- **M06-CAP-SPECIALTY-8dfc9dc1d8fdbf2d**: Connective Tissue Disease
  Origin: original 4701, original 4725, original 5026

<a id="M06-CAP-SPECIALTY-90160fc0ac22777e"></a>
- **M06-CAP-SPECIALTY-90160fc0ac22777e**: Vasculitis
  Origin: original 4701, original 4725, original 5026, original 5050

<a id="M06-CAP-SPECIALTY-edb455520f93874e"></a>
- **M06-CAP-SPECIALTY-edb455520f93874e**: Muscle Disease
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-ef89ed1537854e69"></a>
- **M06-CAP-SPECIALTY-ef89ed1537854e69**: Skin Manifestations
  Origin: original 4701, original 4706, original 4708, original 4710, original 5033, original 5035, original 5039

<a id="M06-CAP-SPECIALTY-6eefc6df511be2e9"></a>
- **M06-CAP-SPECIALTY-6eefc6df511be2e9**: Renal Involvement
  Origin: original 4701, original 4704, original 4706, original 5035

<a id="M06-CAP-SPECIALTY-6f07c3ee79fc6889"></a>
- **M06-CAP-SPECIALTY-6f07c3ee79fc6889**: Ocular Involvement
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-57a4747db1edff55"></a>
- **M06-CAP-SPECIALTY-57a4747db1edff55**: Pulmonary Involvement
  Origin: original 4701, original 4706, original 4709, original 5035

<a id="M06-CAP-SPECIALTY-4c1270b9efa6b98e"></a>
- **M06-CAP-SPECIALTY-4c1270b9efa6b98e**: Cardiovascular Involvement
  Origin: original 4701, original 4706

<a id="M06-CAP-SPECIALTY-045f2ce84e6c680c"></a>
- **M06-CAP-SPECIALTY-045f2ce84e6c680c**: Neurological Involvement
  Origin: original 4701, original 4704, original 4706, original 5035

<a id="M06-CAP-SPECIALTY-b5f5637764c89b92"></a>
- **M06-CAP-SPECIALTY-b5f5637764c89b92**: Medication and Immunosuppression
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-c2dd53183c469c28"></a>
- **M06-CAP-SPECIALTY-c2dd53183c469c28**: Long-term Outcome Tracking
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-fca31b88a2f28f2c"></a>
- **M06-CAP-SPECIALTY-fca31b88a2f28f2c**: Physical Examination
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-d831fb3bb8efed58"></a>
- **M06-CAP-SPECIALTY-d831fb3bb8efed58**: Laboratory Data
  Origin: original 4701, original 5028, original 5035, original 5126

<a id="M06-CAP-SPECIALTY-05f87934557a7537"></a>
- **M06-CAP-SPECIALTY-05f87934557a7537**: Autoantibodies
  Origin: original 4701, original 4704, original 4705, original 4706, original 4708, original 4709, original 5026, original 5031, original 5032, original 5034

<a id="M06-CAP-SPECIALTY-31e97b143dee8a69"></a>
- **M06-CAP-SPECIALTY-31e97b143dee8a69**: Inflammatory Markers
  Origin: original 4701, original 4706, original 5026, original 5031, original 5039

<a id="M06-CAP-SPECIALTY-8f30086bae3f9a8f"></a>
- **M06-CAP-SPECIALTY-8f30086bae3f9a8f**: Infusion Therapy
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-23a329b8baa1834f"></a>
- **M06-CAP-SPECIALTY-23a329b8baa1834f**: Functional Status
  Origin: original 4701, original 4702, original 4826, original 4850, original 5026, original 5028, original 5175

<a id="M06-CAP-SPECIALTY-a63318a2f5573dcf"></a>
- **M06-CAP-SPECIALTY-a63318a2f5573dcf**: Longitudinal Disease Pattern Analysis
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-da803edddcf9d64b"></a>
- **M06-CAP-SPECIALTY-da803edddcf9d64b**: Multisystem Correlation
  Origin: original 4701, original 5002

<a id="M06-CAP-SPECIALTY-e8be23860ddbc4d0"></a>
- **M06-CAP-SPECIALTY-e8be23860ddbc4d0**: Disease Activity Trend Support
  Origin: original 4701

<a id="M06-CAP-SPECIALTY-980395d3fc76484a"></a>
- **M06-CAP-SPECIALTY-980395d3fc76484a**: Provide longitudinal management of juvenile idiopathic arthritis across clinical subtypes and stages of disease.
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-3302b865d99b6fd4"></a>
- **M06-CAP-SPECIALTY-3302b865d99b6fd4**: JIA Diagnosis
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-9b162be826d827e1"></a>
- **M06-CAP-SPECIALTY-9b162be826d827e1**: Disease Subtype
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-0226f5ca271fa4e7"></a>
- **M06-CAP-SPECIALTY-0226f5ca271fa4e7**: Joint Count
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-c89fc18e288798e6"></a>
- **M06-CAP-SPECIALTY-c89fc18e288798e6**: Active Joint Assessment
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-7c4e6d5489a10882"></a>
- **M06-CAP-SPECIALTY-7c4e6d5489a10882**: Limited Joint Assessment
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-2352789d6ece2948"></a>
- **M06-CAP-SPECIALTY-2352789d6ece2948**: Morning Stiffness
  Origin: original 4702, original 4719, original 5028

<a id="M06-CAP-SPECIALTY-f4a6850a1cbf7c9e"></a>
- **M06-CAP-SPECIALTY-f4a6850a1cbf7c9e**: Intra-articular Procedures
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-fc24595f05327baf"></a>
- **M06-CAP-SPECIALTY-fc24595f05327baf**: Remission
  Origin: original 4702, original 4704, original 5028, original 5031

<a id="M06-CAP-SPECIALTY-a6b231db4af33119"></a>
- **M06-CAP-SPECIALTY-a6b231db4af33119**: Flare Tracking
  Origin: original 4702, original 4704

<a id="M06-CAP-SPECIALTY-265ccc63373fd417"></a>
- **M06-CAP-SPECIALTY-265ccc63373fd417**: Complication Surveillance:
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-8a1f46a425d30f77"></a>
- **M06-CAP-SPECIALTY-8a1f46a425d30f77**: Uveitis
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-c88f0ec8ec0ecbf0"></a>
- **M06-CAP-SPECIALTY-c88f0ec8ec0ecbf0**: Growth Disturbance
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-8132aa41a2f917ea"></a>
- **M06-CAP-SPECIALTY-8132aa41a2f917ea**: Joint Damage
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-d27067eda951a2e5"></a>
- **M06-CAP-SPECIALTY-d27067eda951a2e5**: Medication Toxicity
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-d80cf7a00db5361e"></a>
- **M06-CAP-SPECIALTY-d80cf7a00db5361e**: Functional Limitation
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-be60185891648e82"></a>
- **M06-CAP-SPECIALTY-be60185891648e82**: Patient/Guardian Functions:
  Origin: original 4702, original 5151

<a id="M06-CAP-SPECIALTY-aa2cf42a7e8e9298"></a>
- **M06-CAP-SPECIALTY-aa2cf42a7e8e9298**: Symptom Diary
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-84c316602c281f7e"></a>
- **M06-CAP-SPECIALTY-84c316602c281f7e**: Medication Schedule
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-3cbe52b2b428ce1b"></a>
- **M06-CAP-SPECIALTY-3cbe52b2b428ce1b**: Functional Tracking
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-3f8afcdc4e447bb0"></a>
- **M06-CAP-SPECIALTY-3f8afcdc4e447bb0**: Clinician-approved Care Plan
  Origin: original 4702

<a id="M06-CAP-SPECIALTY-87c774c0aac6cd27"></a>
- **M06-CAP-SPECIALTY-87c774c0aac6cd27**: Create a structured longitudinal anatomical map of joint and musculoskeletal involvement.
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-b18d099ac0087b45"></a>
- **M06-CAP-SPECIALTY-b18d099ac0087b45**: Joint Map
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-00b7ad4fa50475ad"></a>
- **M06-CAP-SPECIALTY-00b7ad4fa50475ad**: Swelling
  Origin: original 4703, original 5029

<a id="M06-CAP-SPECIALTY-fc5ba39c9e4b90f4"></a>
- **M06-CAP-SPECIALTY-fc5ba39c9e4b90f4**: Tenderness
  Origin: original 4703, original 5029

<a id="M06-CAP-SPECIALTY-a3d3778b63a0330e"></a>
- **M06-CAP-SPECIALTY-a3d3778b63a0330e**: Range of Motion
  Origin: original 4703, original 5029

<a id="M06-CAP-SPECIALTY-32aaee9bdb9675c2"></a>
- **M06-CAP-SPECIALTY-32aaee9bdb9675c2**: Joint Limitation
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-1f56e87b3fec4d7a"></a>
- **M06-CAP-SPECIALTY-1f56e87b3fec4d7a**: Warmth
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-c91e47a1a8cbc854"></a>
- **M06-CAP-SPECIALTY-c91e47a1a8cbc854**: Functional Impairment
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-4aa17d28ce54a7ae"></a>
- **M06-CAP-SPECIALTY-4aa17d28ce54a7ae**: Enthesitis
  Origin: original 4703, original 5029

<a id="M06-CAP-SPECIALTY-6c651e680db3cfb6"></a>
- **M06-CAP-SPECIALTY-6c651e680db3cfb6**: Dactylitis
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-3a42569c1112bf62"></a>
- **M06-CAP-SPECIALTY-3a42569c1112bf62**: Axial Symptoms
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-c505d8527b57aeea"></a>
- **M06-CAP-SPECIALTY-c505d8527b57aeea**: Muscle Function
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-816f49494ba8a0c9"></a>
- **M06-CAP-SPECIALTY-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4703, original 5002, original 5029

<a id="M06-CAP-SPECIALTY-753ee62e118d240a"></a>
- **M06-CAP-SPECIALTY-753ee62e118d240a**: Visualization:
  Origin: original 4703, original 5029

<a id="M06-CAP-SPECIALTY-e3d2d4508e615622"></a>
- **M06-CAP-SPECIALTY-e3d2d4508e615622**: Provides longitudinal comparison of affected joints across visits and treatment periods.
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-0ddb177c4828085b"></a>
- **M06-CAP-SPECIALTY-0ddb177c4828085b**: Structured Examination Support
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-76c1683f638b99df"></a>
- **M06-CAP-SPECIALTY-76c1683f638b99df**: Change Detection
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-6b886488a4911afc"></a>
- **M06-CAP-SPECIALTY-6b886488a4911afc**: Disease Distribution Visualization
  Origin: original 4703

<a id="M06-CAP-SPECIALTY-791e150b54f860f6"></a>
- **M06-CAP-SPECIALTY-791e150b54f860f6**: Rheumatology
  Origin: original 4703, original 4704, original 4706, original 4708, original 4709, original 4719, original 4976, original 4983, original 4989, original 5028, original 5029, original 5031, original 5032, original 5033, original 5034, original 5035, original 5043

<a id="M06-CAP-SPECIALTY-aa433304c304c24c"></a>
- **M06-CAP-SPECIALTY-aa433304c304c24c**: Physiotherapy
  Origin: original 4703, original 4719

<a id="M06-CAP-SPECIALTY-d9a78ac35d88a83b"></a>
- **M06-CAP-SPECIALTY-d9a78ac35d88a83b**: Coordinate multisystem longitudinal care of pediatric systemic lupus erythematosus.
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-f393e71130aa62f9"></a>
- **M06-CAP-SPECIALTY-f393e71130aa62f9**: SLE Diagnosis
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-f168be26a1038afc"></a>
- **M06-CAP-SPECIALTY-f168be26a1038afc**: Clinical Manifestations
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-445733ccfb3c7365"></a>
- **M06-CAP-SPECIALTY-445733ccfb3c7365**: Hematological Findings
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-2f7374329ae82b2e"></a>
- **M06-CAP-SPECIALTY-2f7374329ae82b2e**: Dermatological Manifestations
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-375c642a75f71b03"></a>
- **M06-CAP-SPECIALTY-375c642a75f71b03**: Musculoskeletal Manifestations
  Origin: original 4704, original 4710

<a id="M06-CAP-SPECIALTY-e0b7e262e376f157"></a>
- **M06-CAP-SPECIALTY-e0b7e262e376f157**: Cardiopulmonary Involvement
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-bbbece7a847db335"></a>
- **M06-CAP-SPECIALTY-bbbece7a847db335**: Immunosuppression
  Origin: original 4704, original 4706, original 4708, original 5031, original 5032, original 5033

<a id="M06-CAP-SPECIALTY-624a3ca3a90cb5bc"></a>
- **M06-CAP-SPECIALTY-624a3ca3a90cb5bc**: Organ Damage Tracking
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-ba6f4bfa7179102f"></a>
- **M06-CAP-SPECIALTY-ba6f4bfa7179102f**: Creates one multisystem lupus timeline rather than separate specialty records.
  Origin: original 4704

<a id="M06-CAP-SPECIALTY-81d9d47760fd8b8d"></a>
- **M06-CAP-SPECIALTY-81d9d47760fd8b8d**: Connect systemic autoimmune disease activity with kidney-specific evaluation and treatment.
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-f45ee9d78d40d064"></a>
- **M06-CAP-SPECIALTY-f45ee9d78d40d064**: Renal Disease Presentation
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-71f9a3eeccc84a71"></a>
- **M06-CAP-SPECIALTY-71f9a3eeccc84a71**: Hematuria
  Origin: original 4705, original 5032

<a id="M06-CAP-SPECIALTY-6c6ea74f1122404d"></a>
- **M06-CAP-SPECIALTY-6c6ea74f1122404d**: Urinary Findings
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-090a7200c420c8fc"></a>
- **M06-CAP-SPECIALTY-090a7200c420c8fc**: Kidney Biopsy
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-1b97c08f2fba9c1d"></a>
- **M06-CAP-SPECIALTY-1b97c08f2fba9c1d**: Immunosuppressive Therapy
  Origin: original 4705, original 4725, original 5050

<a id="M06-CAP-SPECIALTY-02ffb0ea5b1755a8"></a>
- **M06-CAP-SPECIALTY-02ffb0ea5b1755a8**: Relapse
  Origin: original 4705, original 4706, original 5032

<a id="M06-CAP-SPECIALTY-e11349dc3e215636"></a>
- **M06-CAP-SPECIALTY-e11349dc3e215636**: Renal Outcome
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-50a66765b553fe24"></a>
- **M06-CAP-SPECIALTY-50a66765b553fe24**: Shared Workflow:
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-8713392b6bebfd42"></a>
- **M06-CAP-SPECIALTY-8713392b6bebfd42**: Rheumatology → Nephrology → Laboratory Medicine → Renal Pathology → Treatment Plan → Longitudinal Monitoring.
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-23ee2d2415b803c3"></a>
- **M06-CAP-SPECIALTY-23ee2d2415b803c3**: Clinical Timeline:
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-27358f1ccf6972e0"></a>
- **M06-CAP-SPECIALTY-27358f1ccf6972e0**: Systemic disease activity and renal disease activity remain synchronized.
  Origin: original 4705

<a id="M06-CAP-SPECIALTY-2e7112bbd446e09f"></a>
- **M06-CAP-SPECIALTY-2e7112bbd446e09f**: Provide structured management of pediatric systemic vasculitis and vascular inflammatory disease.
  Origin: original 4706

<a id="M06-CAP-SPECIALTY-ec51077c83145f35"></a>
- **M06-CAP-SPECIALTY-ec51077c83145f35**: Vasculitis Diagnosis
  Origin: original 4706, original 5035

<a id="M06-CAP-SPECIALTY-6648a531a7be5e9a"></a>
- **M06-CAP-SPECIALTY-6648a531a7be5e9a**: Vessel Distribution
  Origin: original 4706

<a id="M06-CAP-SPECIALTY-0bf4d67b9c88df63"></a>
- **M06-CAP-SPECIALTY-0bf4d67b9c88df63**: Gastrointestinal Involvement
  Origin: original 4706, original 4709, original 5035

<a id="M06-CAP-SPECIALTY-6dfc1fd557943d0f"></a>
- **M06-CAP-SPECIALTY-6dfc1fd557943d0f**: Biopsy
  Origin: original 4706

<a id="M06-CAP-SPECIALTY-fbe5ecf63bbd0ba8"></a>
- **M06-CAP-SPECIALTY-fbe5ecf63bbd0ba8**: Organ Damage
  Origin: original 4706, original 5035

<a id="M06-CAP-SPECIALTY-9d47b6be7f49986b"></a>
- **M06-CAP-SPECIALTY-9d47b6be7f49986b**: Coordinate multidisciplinary care for juvenile inflammatory muscle disease.
  Origin: original 4708

<a id="M06-CAP-SPECIALTY-ab504758d90168f2"></a>
- **M06-CAP-SPECIALTY-ab504758d90168f2**: Muscle Weakness
  Origin: original 4708, original 5033

<a id="M06-CAP-SPECIALTY-d3edde184dc657d0"></a>
- **M06-CAP-SPECIALTY-d3edde184dc657d0**: Muscle Enzymes
  Origin: original 4708, original 5033

<a id="M06-CAP-SPECIALTY-3887f5918b35bc1b"></a>
- **M06-CAP-SPECIALTY-3887f5918b35bc1b**: Electrophysiology Context
  Origin: original 4708

<a id="M06-CAP-SPECIALTY-3ddb1ae31cb6453b"></a>
- **M06-CAP-SPECIALTY-3ddb1ae31cb6453b**: Muscle Biopsy
  Origin: original 4708

<a id="M06-CAP-SPECIALTY-ff4a8486bb259fbf"></a>
- **M06-CAP-SPECIALTY-ff4a8486bb259fbf**: Calcinosis
  Origin: original 4708

<a id="M06-CAP-SPECIALTY-b51077b8ac259726"></a>
- **M06-CAP-SPECIALTY-b51077b8ac259726**: Manage localized and systemic scleroderma-spectrum disease in pediatric patients.
  Origin: original 4709

<a id="M06-CAP-SPECIALTY-52154af71f8a8fe2"></a>
- **M06-CAP-SPECIALTY-52154af71f8a8fe2**: Skin Involvement
  Origin: original 4709, original 5034

<a id="M06-CAP-SPECIALTY-b1e0d74954dc6f63"></a>
- **M06-CAP-SPECIALTY-b1e0d74954dc6f63**: Skin Distribution
  Origin: original 4709

<a id="M06-CAP-SPECIALTY-7195c55ab15b0ee0"></a>
- **M06-CAP-SPECIALTY-7195c55ab15b0ee0**: Musculoskeletal Involvement
  Origin: original 4709

<a id="M06-CAP-SPECIALTY-d3c4faec2b2fd459"></a>
- **M06-CAP-SPECIALTY-d3c4faec2b2fd459**: Joint Contracture
  Origin: original 4709

<a id="M06-CAP-SPECIALTY-b56828af91e7dd70"></a>
- **M06-CAP-SPECIALTY-b56828af91e7dd70**: Vascular Symptoms
  Origin: original 4709, original 5034

<a id="M06-CAP-SPECIALTY-8add3a8de90b0f0c"></a>
- **M06-CAP-SPECIALTY-8add3a8de90b0f0c**: Cardiac Involvement
  Origin: original 4709, original 5035

<a id="M06-CAP-SPECIALTY-7b2711278d44e43a"></a>
- **M06-CAP-SPECIALTY-7b2711278d44e43a**: Renal Context
  Origin: original 4709, original 4978, original 5031, original 5034, original 5039

<a id="M06-CAP-SPECIALTY-bdfb5cb4b559f914"></a>
- **M06-CAP-SPECIALTY-bdfb5cb4b559f914**: Disease Progression
  Origin: original 4709, original 5034

<a id="M06-CAP-SPECIALTY-8b7a6bbf7a9f1ad3"></a>
- **M06-CAP-SPECIALTY-8b7a6bbf7a9f1ad3**: Support children whose systemic autoimmune phenotype spans multiple connective tissue disease categories.
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-1bc7d8e409ebc9e0"></a>
- **M06-CAP-SPECIALTY-1bc7d8e409ebc9e0**: Autoantibody Profile
  Origin: original 4710, original 5039

<a id="M06-CAP-SPECIALTY-d178599f54d71774"></a>
- **M06-CAP-SPECIALTY-d178599f54d71774**: Vascular Manifestations
  Origin: original 4710, original 5039

<a id="M06-CAP-SPECIALTY-dd8e6846c72326ca"></a>
- **M06-CAP-SPECIALTY-dd8e6846c72326ca**: Renal Manifestations
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-bfad2b86b46bd0b1"></a>
- **M06-CAP-SPECIALTY-bfad2b86b46bd0b1**: Pulmonary Manifestations
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-e7b591804ef4cd51"></a>
- **M06-CAP-SPECIALTY-e7b591804ef4cd51**: Neurological Manifestations
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-5178981096db0ff2"></a>
- **M06-CAP-SPECIALTY-5178981096db0ff2**: Gastrointestinal Manifestations
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-f57d94ad579b8495"></a>
- **M06-CAP-SPECIALTY-f57d94ad579b8495**: Disease Classification History
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-340226f35400dc5a"></a>
- **M06-CAP-SPECIALTY-340226f35400dc5a**: Organ Surveillance
  Origin: original 4710, original 4981

<a id="M06-CAP-SPECIALTY-cdf6a7f85f4b4169"></a>
- **M06-CAP-SPECIALTY-cdf6a7f85f4b4169**: Longitudinal Phenotype Evolution
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-3f17772622c63a3a"></a>
- **M06-CAP-SPECIALTY-3f17772622c63a3a**: Clinical Principle:
  Origin: original 4710, original 4719, original 5039, original 5043

<a id="M06-CAP-SPECIALTY-cd7422cebe5e0e6f"></a>
- **M06-CAP-SPECIALTY-cd7422cebe5e0e6f**: The system preserves evolving clinical phenotype rather than forcing premature fixed categorization.
  Origin: original 4710

<a id="M06-CAP-SPECIALTY-dd89896252253788"></a>
- **M06-CAP-SPECIALTY-dd89896252253788**: Track symptoms and functional burden not fully represented by laboratory or imaging findings.
  Origin: original 4719

<a id="M06-CAP-SPECIALTY-8433e982f216adfd"></a>
- **M06-CAP-SPECIALTY-8433e982f216adfd**: Pain Distribution
  Origin: original 4719

<a id="M06-CAP-SPECIALTY-2390d039baa767c1"></a>
- **M06-CAP-SPECIALTY-2390d039baa767c1**: School Attendance
  Origin: original 4719, original 5043, original 5145

<a id="M06-CAP-SPECIALTY-66a263fe225f3144"></a>
- **M06-CAP-SPECIALTY-66a263fe225f3144**: Daily Function
  Origin: original 4719, original 5043

<a id="M06-CAP-SPECIALTY-1f110ea63e87475d"></a>
- **M06-CAP-SPECIALTY-1f110ea63e87475d**: Social Participation
  Origin: original 4719

<a id="M06-CAP-SPECIALTY-7e0afa566489d379"></a>
- **M06-CAP-SPECIALTY-7e0afa566489d379**: Guardian-reported Outcomes
  Origin: original 4719, original 4826, original 5151

<a id="M06-CAP-SPECIALTY-2121764a5419eb19"></a>
- **M06-CAP-SPECIALTY-2121764a5419eb19**: Treatment Burden
  Origin: original 4719

<a id="M06-CAP-SPECIALTY-6c2c93b35fd0273f"></a>
- **M06-CAP-SPECIALTY-6c2c93b35fd0273f**: School Health
  Origin: original 4719, original 4826, original 5043, original 5094, original 5145

<a id="M06-CAP-SPECIALTY-d09c99ad9fc317ea"></a>
- **M06-CAP-SPECIALTY-d09c99ad9fc317ea**: Patient-reported symptoms remain visible alongside objective disease activity without automatically treating one as a substitute for the other.
  Origin: original 4719

<a id="M06-CAP-SPECIALTY-b4f0c75e436cb746"></a>
- **M06-CAP-SPECIALTY-b4f0c75e436cb746**: Serve as the master orchestration layer for the complete EDHT pediatric rheumatology and systemic inflammatory disease ecosystem.
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-1aca52b49663c9df"></a>
- **M06-CAP-SPECIALTY-1aca52b49663c9df**: Juvenile Idiopathic Arthritis
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-67cc0c9a1f3cf1f2"></a>
- **M06-CAP-SPECIALTY-67cc0c9a1f3cf1f2**: Systemic Lupus
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-3072ad2d34aa693d"></a>
- **M06-CAP-SPECIALTY-3072ad2d34aa693d**: Lupus Nephritis
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-da9a28b7b243e0bb"></a>
- **M06-CAP-SPECIALTY-da9a28b7b243e0bb**: Periodic Fever Syndromes
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-04230eb3f988e4f8"></a>
- **M06-CAP-SPECIALTY-04230eb3f988e4f8**: Juvenile Dermatomyositis
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-b9ec0d3825cc8cde"></a>
- **M06-CAP-SPECIALTY-b9ec0d3825cc8cde**: Scleroderma
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-4ef9e8898196f89f"></a>
- **M06-CAP-SPECIALTY-4ef9e8898196f89f**: Autoantibody Intelligence
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-eaa181597a3eff02"></a>
- **M06-CAP-SPECIALTY-eaa181597a3eff02**: Musculoskeletal Imaging
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-9252ba3914e41319"></a>
- **M06-CAP-SPECIALTY-9252ba3914e41319**: Vaccination Coordination
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-45ee227aa515f78f"></a>
- **M06-CAP-SPECIALTY-45ee227aa515f78f**: Pain and Functional Care
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-cd061f3095079788"></a>
- **M06-CAP-SPECIALTY-cd061f3095079788**: Unified Systemic Disease Timeline
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-fc516e2626e00260"></a>
- **M06-CAP-SPECIALTY-fc516e2626e00260**: Multisystem Clinical Documentation
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-5d6353413d8e1355"></a>
- **M06-CAP-SPECIALTY-5d6353413d8e1355**: Disease Activity Tracking
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-fc8a58ee3376e96a"></a>
- **M06-CAP-SPECIALTY-fc8a58ee3376e96a**: Imaging Integration
  Origin: original 4725, original 5050, original 5125, original 5150

<a id="M06-CAP-SPECIALTY-794340501a166477"></a>
- **M06-CAP-SPECIALTY-794340501a166477**: Quality and Outcome Monitoring
  Origin: original 4725, original 5000

<a id="M06-CAP-SPECIALTY-7f60e857420f69ff"></a>
- **M06-CAP-SPECIALTY-7f60e857420f69ff**: Rheumatology Diagnosis Registry
  Origin: original 4725, original 5026, original 5050

<a id="M06-CAP-SPECIALTY-fac418378d00fffd"></a>
- **M06-CAP-SPECIALTY-fac418378d00fffd**: Disease Activity Record
  Origin: original 4725, original 5050

<a id="M06-CAP-SPECIALTY-e196e7337f5b8d1f"></a>
- **M06-CAP-SPECIALTY-e196e7337f5b8d1f**: Medication and Immunosuppression Record
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-3c2aee116c8d7fb3"></a>
- **M06-CAP-SPECIALTY-3c2aee116c8d7fb3**: Joint Assessment
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-d4a8183a7dc5a694"></a>
- **M06-CAP-SPECIALTY-d4a8183a7dc5a694**: Vaccination Context
  Origin: original 4725, original 4981

<a id="M06-CAP-SPECIALTY-1c72d8953fa4d749"></a>
- **M06-CAP-SPECIALTY-1c72d8953fa4d749**: Advanced Multisystem AI
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-7f0f9dcf02a997f6"></a>
- **M06-CAP-SPECIALTY-7f0f9dcf02a997f6**: Imaging Intelligence
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-f086948703591c8d"></a>
- **M06-CAP-SPECIALTY-f086948703591c8d**: Remote Patient Monitoring
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-1be8c57a7c785607"></a>
- **M06-CAP-SPECIALTY-1be8c57a7c785607**: Rare Disease Analytics
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-df407cf2411869e8"></a>
- **M06-CAP-SPECIALTY-df407cf2411869e8**: International Registries
  Origin: original 4725, original 5000

<a id="M06-CAP-SPECIALTY-41eb791acb882f5b"></a>
- **M06-CAP-SPECIALTY-41eb791acb882f5b**: Specialized rheumatology services remain independently deployable while sharing one longitudinal EDHT patient model across all affected organ systems.
  Origin: original 4725

<a id="M06-CAP-SPECIALTY-e7715b6327593757"></a>
- **M06-CAP-SPECIALTY-e7715b6327593757**: Provide the central longitudinal architecture for pediatric and adolescent mental health, psychiatry, psychology and behavioral care across EDHT.
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-0f4ce764826fa473"></a>
- **M06-CAP-SPECIALTY-0f4ce764826fa473**: Mental Health Diagnosis Registry
  Origin: original 4826, original 4850, original 5151

<a id="M06-CAP-SPECIALTY-1ae7610ca3a0c568"></a>
- **M06-CAP-SPECIALTY-1ae7610ca3a0c568**: Psychological Assessment
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-5a438ad6e27f8c89"></a>
- **M06-CAP-SPECIALTY-5a438ad6e27f8c89**: Psychiatric Assessment
  Origin: original 4826, original 5175

<a id="M06-CAP-SPECIALTY-f31529f0671e7e32"></a>
- **M06-CAP-SPECIALTY-f31529f0671e7e32**: Behavioral Symptoms
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-8c885b58abd149a9"></a>
- **M06-CAP-SPECIALTY-8c885b58abd149a9**: Emotional Symptoms
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-9d87df98d4780997"></a>
- **M06-CAP-SPECIALTY-9d87df98d4780997**: Developmental Context
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-5a12c72f54171432"></a>
- **M06-CAP-SPECIALTY-5a12c72f54171432**: Family Context
  Origin: original 4826, original 5175

<a id="M06-CAP-SPECIALTY-77c99ab89c469adf"></a>
- **M06-CAP-SPECIALTY-77c99ab89c469adf**: School Context
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-0fd0dfbdcbfa6480"></a>
- **M06-CAP-SPECIALTY-0fd0dfbdcbfa6480**: Social Function
  Origin: original 4826, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-013173eb94af9922"></a>
- **M06-CAP-SPECIALTY-013173eb94af9922**: Transition to Adult Mental Health Services
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-eb268b869abc1289"></a>
- **M06-CAP-SPECIALTY-eb268b869abc1289**: Mental Status Examination
  Origin: original 4826, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-d1b162194f83ed72"></a>
- **M06-CAP-SPECIALTY-d1b162194f83ed72**: Standardized Assessments
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-b4aefe1733d00b01"></a>
- **M06-CAP-SPECIALTY-b4aefe1733d00b01**: School-related Information
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-3882fb384c27d0f8"></a>
- **M06-CAP-SPECIALTY-3882fb384c27d0f8**: Therapy History
  Origin: original 4826, original 5175

<a id="M06-CAP-SPECIALTY-9feedc576fbd002c"></a>
- **M06-CAP-SPECIALTY-9feedc576fbd002c**: Safety Plans
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-a2321d8a8ed2c843"></a>
- **M06-CAP-SPECIALTY-a2321d8a8ed2c843**: Longitudinal Clinical Notes
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-3ab5393bc711e30c"></a>
- **M06-CAP-SPECIALTY-3ab5393bc711e30c**: Psychiatry
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-4f1e6f412b1aff63"></a>
- **M06-CAP-SPECIALTY-4f1e6f412b1aff63**: Longitudinal Clinical Summarization
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-36681f399ddefedc"></a>
- **M06-CAP-SPECIALTY-36681f399ddefedc**: Symptom Trend Analysis
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-e1f327e5eb174648"></a>
- **M06-CAP-SPECIALTY-e1f327e5eb174648**: Care-gap Detection
  Origin: original 4826, original 5148, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-4451eb78c97f5a1e"></a>
- **M06-CAP-SPECIALTY-4451eb78c97f5a1e**: Pre-Visit Assessment
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-b3061fdef0bee5a2"></a>
- **M06-CAP-SPECIALTY-b3061fdef0bee5a2**: Documentation Assistance
  Origin: original 4826, original 5151

<a id="M06-CAP-SPECIALTY-b7095468af1c78af"></a>
- **M06-CAP-SPECIALTY-b7095468af1c78af**: Multidisciplinary Case Preparation
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-28cf2a4c2e5d6b5d"></a>
- **M06-CAP-SPECIALTY-28cf2a4c2e5d6b5d**: AI cannot independently establish a psychiatric diagnosis, prescribe psychotropic medication or make autonomous crisis-management decisions.
  Origin: original 4826

<a id="M06-CAP-SPECIALTY-19af9d1fb044d226"></a>
- **M06-CAP-SPECIALTY-19af9d1fb044d226**: Serve as the master orchestration layer for the complete EDHT pediatric and adolescent mental-health ecosystem.
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-ca2ccb8293f1fefb"></a>
- **M06-CAP-SPECIALTY-ca2ccb8293f1fefb**: Child & Adolescent Psychiatry
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-6b07dc491f8b4e79"></a>
- **M06-CAP-SPECIALTY-6b07dc491f8b4e79**: Mental Status Assessment
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-0519d168a7a2289a"></a>
- **M06-CAP-SPECIALTY-0519d168a7a2289a**: Anxiety Disorders
  Origin: original 4850, original 5151

<a id="M06-CAP-SPECIALTY-610f0b252b766a41"></a>
- **M06-CAP-SPECIALTY-610f0b252b766a41**: Mood Disorders
  Origin: original 4850, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-3eea0e304dfa50d8"></a>
- **M06-CAP-SPECIALTY-3eea0e304dfa50d8**: ADHD
  Origin: original 4850, original 5175

<a id="M06-CAP-SPECIALTY-15e509c76b806583"></a>
- **M06-CAP-SPECIALTY-15e509c76b806583**: Autism-related Health Coordination
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-000b88b241df0b6d"></a>
- **M06-CAP-SPECIALTY-000b88b241df0b6d**: Learning and Cognitive Function
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-5fef8ccfc5aa50c5"></a>
- **M06-CAP-SPECIALTY-5fef8ccfc5aa50c5**: Behavioral Disorders
  Origin: original 4850, original 5151, original 5175

<a id="M06-CAP-SPECIALTY-1589901c19a6e295"></a>
- **M06-CAP-SPECIALTY-1589901c19a6e295**: Trauma-related Mental Health
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-65ac6606c8a25d05"></a>
- **M06-CAP-SPECIALTY-65ac6606c8a25d05**: Eating Disorders
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-2b349fae1deb4e2d"></a>
- **M06-CAP-SPECIALTY-2b349fae1deb4e2d**: Sleep and Behavioral Health
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-d8e4d0a16823f581"></a>
- **M06-CAP-SPECIALTY-d8e4d0a16823f581**: Severe Mental Illness
  Origin: original 4850, original 5175

<a id="M06-CAP-SPECIALTY-3f303b53824169d7"></a>
- **M06-CAP-SPECIALTY-3f303b53824169d7**: School Mental Health
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-f82b0c8e67e64e46"></a>
- **M06-CAP-SPECIALTY-f82b0c8e67e64e46**: Family and Social Support
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-a5b3ec0948bc5df7"></a>
- **M06-CAP-SPECIALTY-a5b3ec0948bc5df7**: Medical-Psychiatric Comorbidity
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-994d35e394c3d576"></a>
- **M06-CAP-SPECIALTY-994d35e394c3d576**: Adolescent Substance-related Health
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-c2c6e6635c9e991e"></a>
- **M06-CAP-SPECIALTY-c2c6e6635c9e991e**: Telecare
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-a9c2e016c4aabf01"></a>
- **M06-CAP-SPECIALTY-a9c2e016c4aabf01**: Remote Assessment
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-3552ff81de7774a2"></a>
- **M06-CAP-SPECIALTY-3552ff81de7774a2**: Telepsychiatry
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-4815497e530578c8"></a>
- **M06-CAP-SPECIALTY-4815497e530578c8**: Privacy-aware Documentation
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-34498f9d61921511"></a>
- **M06-CAP-SPECIALTY-34498f9d61921511**: Unified Mental Health Timeline
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-802a174243da9543"></a>
- **M06-CAP-SPECIALTY-802a174243da9543**: Structured Psychiatric Documentation
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-4a0194ceab69c5e9"></a>
- **M06-CAP-SPECIALTY-4a0194ceab69c5e9**: Psychological Assessment Integration
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-0ac069e31cddf68a"></a>
- **M06-CAP-SPECIALTY-0ac069e31cddf68a**: Therapy Tracking
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-69c4220558686e28"></a>
- **M06-CAP-SPECIALTY-69c4220558686e28**: Functional Outcome Monitoring
  Origin: original 4850, original 5050

<a id="M06-CAP-SPECIALTY-e3fc5da1096869f3"></a>
- **M06-CAP-SPECIALTY-e3fc5da1096869f3**: Age-aware Privacy
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-5aaeeee0167e67d5"></a>
- **M06-CAP-SPECIALTY-5aaeeee0167e67d5**: Structured Assessment
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-00be82be44656266"></a>
- **M06-CAP-SPECIALTY-00be82be44656266**: Medication Record
  Origin: original 4850, original 5151

<a id="M06-CAP-SPECIALTY-ce7798d3719c7833"></a>
- **M06-CAP-SPECIALTY-ce7798d3719c7833**: Psychological Treatment Record
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-f400dccc576205ce"></a>
- **M06-CAP-SPECIALTY-f400dccc576205ce**: Safety-plan Storage
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-e95b67c195cc3a44"></a>
- **M06-CAP-SPECIALTY-e95b67c195cc3a44**: Privacy Controls
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-ad2be51166ed6b2a"></a>
- **M06-CAP-SPECIALTY-ad2be51166ed6b2a**: Teleconsultation
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-e2a72dbfec022f32"></a>
- **M06-CAP-SPECIALTY-e2a72dbfec022f32**: Medical Record Integration
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-e63ac473fdf70da7"></a>
- **M06-CAP-SPECIALTY-e63ac473fdf70da7**: Advanced Neuropsychology Analytics
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-616d25b51705e610"></a>
- **M06-CAP-SPECIALTY-616d25b51705e610**: Digital Mental Health Monitoring
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-54fde705aa2cbf1b"></a>
- **M06-CAP-SPECIALTY-54fde705aa2cbf1b**: Predictive Clinical Support
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-d32592af6885768a"></a>
- **M06-CAP-SPECIALTY-d32592af6885768a**: School-system Integration
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-34d5f27017af86de"></a>
- **M06-CAP-SPECIALTY-34d5f27017af86de**: International Mental Health Registries
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-86b0590c44799b5b"></a>
- **M06-CAP-SPECIALTY-86b0590c44799b5b**: Mental health is treated as an integrated component of the lifelong EDHT medical record while preserving stricter privacy and access controls for sensitive psychiatric information.
  Origin: original 4850

<a id="M06-CAP-SPECIALTY-2e4fd4f38cfe59bd"></a>
- **M06-CAP-SPECIALTY-2e4fd4f38cfe59bd**: Provide the unified longitudinal architecture for pediatric hematology, coagulation, cytopenias, transfusion medicine and bone marrow disorders across EDHT.
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-06a84b1b1425d3b8"></a>
- **M06-CAP-SPECIALTY-06a84b1b1425d3b8**: Hematology Diagnosis Registry
  Origin: original 4976, original 5000

<a id="M06-CAP-SPECIALTY-4faba0231a5e4d4f"></a>
- **M06-CAP-SPECIALTY-4faba0231a5e4d4f**: Complete Blood Count Timeline
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-6af6d97ae281b479"></a>
- **M06-CAP-SPECIALTY-6af6d97ae281b479**: Hemoglobin Disorders
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-a46b1e2ff6476d1d"></a>
- **M06-CAP-SPECIALTY-a46b1e2ff6476d1d**: Hemolysis
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-4b6d6ba05def99d1"></a>
- **M06-CAP-SPECIALTY-4b6d6ba05def99d1**: Iron Disorders
  Origin: original 4976, original 5000

<a id="M06-CAP-SPECIALTY-80a63af9d4631401"></a>
- **M06-CAP-SPECIALTY-80a63af9d4631401**: Apheresis Context
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-643ed0c24cd7a310"></a>
- **M06-CAP-SPECIALTY-643ed0c24cd7a310**: Hematological Genetics
  Origin: original 4976, original 5000

<a id="M06-CAP-SPECIALTY-a9ad78fe04f9a403"></a>
- **M06-CAP-SPECIALTY-a9ad78fe04f9a403**: Transition to Adult Hematology
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-b758187deff9b7e0"></a>
- **M06-CAP-SPECIALTY-b758187deff9b7e0**: Immunological Data
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-b9edfabe07992ef6"></a>
- **M06-CAP-SPECIALTY-b9edfabe07992ef6**: Gynecology
  Origin: original 4976, original 4979, original 4985

<a id="M06-CAP-SPECIALTY-c1c6f2ca03cecd24"></a>
- **M06-CAP-SPECIALTY-c1c6f2ca03cecd24**: Blood Bank
  Origin: original 4976, original 4982

<a id="M06-CAP-SPECIALTY-570ee5a8f22356e1"></a>
- **M06-CAP-SPECIALTY-570ee5a8f22356e1**: Longitudinal Hematology Trend Analysis
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-f777248a7952a518"></a>
- **M06-CAP-SPECIALTY-f777248a7952a518**: Cytopenia Pattern Support
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-0708c924fa5a242f"></a>
- **M06-CAP-SPECIALTY-0708c924fa5a242f**: Hemolysis Pattern Support
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-5a343b7784502741"></a>
- **M06-CAP-SPECIALTY-5a343b7784502741**: Bleeding/Thrombosis Timeline
  Origin: original 4976

<a id="M06-CAP-SPECIALTY-9c8299c57bd45788"></a>
- **M06-CAP-SPECIALTY-9c8299c57bd45788**: Support structured evaluation and longitudinal management of pediatric anemia.
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-a6ff8bf4479c55a3"></a>
- **M06-CAP-SPECIALTY-a6ff8bf4479c55a3**: Anemia Detection
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-9d4c66f2cc4f96af"></a>
- **M06-CAP-SPECIALTY-9d4c66f2cc4f96af**: Morphological Classification
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-a38d6c1100eaee2f"></a>
- **M06-CAP-SPECIALTY-a38d6c1100eaee2f**: Reticulocyte Response
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-f418f31d3aec428d"></a>
- **M06-CAP-SPECIALTY-f418f31d3aec428d**: Iron Status
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-0baf222d2cb12132"></a>
- **M06-CAP-SPECIALTY-0baf222d2cb12132**: Vitamin Status Context
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-8b7581d862b3ab36"></a>
- **M06-CAP-SPECIALTY-8b7581d862b3ab36**: Hemolysis Context
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-bf4d74ab3c055d34"></a>
- **M06-CAP-SPECIALTY-bf4d74ab3c055d34**: Blood Loss Context
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-559701b62343876b"></a>
- **M06-CAP-SPECIALTY-559701b62343876b**: Chronic Disease Context
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-0f406983a5d20f2e"></a>
- **M06-CAP-SPECIALTY-0f406983a5d20f2e**: Bone Marrow Context
  Origin: original 4978, original 4983, original 4990

<a id="M06-CAP-SPECIALTY-9584eb96be3c5276"></a>
- **M06-CAP-SPECIALTY-9584eb96be3c5276**: Genetic Context
  Origin: original 4978, original 4990, original 5113

<a id="M06-CAP-SPECIALTY-30fc30598c2938f2"></a>
- **M06-CAP-SPECIALTY-30fc30598c2938f2**: Transfusion Context
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-1d65210795905d48"></a>
- **M06-CAP-SPECIALTY-1d65210795905d48**: Recurrence
  Origin: original 4978, original 4979, original 4983, original 4987, original 5035, original 5112, original 5118, original 5119, original 5126, original 5138, original 5139, original 5150

<a id="M06-CAP-SPECIALTY-d567a549d06457ef"></a>
- **M06-CAP-SPECIALTY-d567a549d06457ef**: Anemia Pattern Organization
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-57911d9f9028b0e8"></a>
- **M06-CAP-SPECIALTY-57911d9f9028b0e8**: Laboratory Correlation
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-cafc1978a673dba2"></a>
- **M06-CAP-SPECIALTY-cafc1978a673dba2**: Historical Trend Support
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-0970f22499489e0a"></a>
- **M06-CAP-SPECIALTY-0970f22499489e0a**: Missing Workup Detection
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-660ea4f47f5cce10"></a>
- **M06-CAP-SPECIALTY-660ea4f47f5cce10**: AI-supported classification does not replace specialist diagnostic assessment.
  Origin: original 4978

<a id="M06-CAP-SPECIALTY-65d779fd92278ea2"></a>
- **M06-CAP-SPECIALTY-65d779fd92278ea2**: Provide longitudinal management of iron deficiency and disorders of iron metabolism.
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-fece79d3ccd03a77"></a>
- **M06-CAP-SPECIALTY-fece79d3ccd03a77**: Transferrin Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-e4b0b97173d14861"></a>
- **M06-CAP-SPECIALTY-e4b0b97173d14861**: Serum Iron Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-69a1bbf180ef015b"></a>
- **M06-CAP-SPECIALTY-69a1bbf180ef015b**: Reticulocyte Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-e09c1ba8e37695cd"></a>
- **M06-CAP-SPECIALTY-e09c1ba8e37695cd**: Gastrointestinal Context
  Origin: original 4979, original 5034

<a id="M06-CAP-SPECIALTY-f7e29c098cd7e1b8"></a>
- **M06-CAP-SPECIALTY-f7e29c098cd7e1b8**: Menstrual Blood Loss Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-8c5a620837055706"></a>
- **M06-CAP-SPECIALTY-8c5a620837055706**: Chronic Inflammation Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-bee25a134c71b0ea"></a>
- **M06-CAP-SPECIALTY-bee25a134c71b0ea**: Oral Iron Therapy
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-376497117cfeeed2"></a>
- **M06-CAP-SPECIALTY-376497117cfeeed2**: Intravenous Iron Context
  Origin: original 4979

<a id="M06-CAP-SPECIALTY-3464207120f1db8a"></a>
- **M06-CAP-SPECIALTY-3464207120f1db8a**: Primary Care
  Origin: original 4979, original 5144, original 5151

<a id="M06-CAP-SPECIALTY-309a4533b2913c94"></a>
- **M06-CAP-SPECIALTY-309a4533b2913c94**: Provide comprehensive longitudinal care for inherited hemoglobin disorders including sickle cell disease.
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-406d24bccdddb88a"></a>
- **M06-CAP-SPECIALTY-406d24bccdddb88a**: Hemoglobinopathy Diagnosis
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-f0bb237bd8b6d878"></a>
- **M06-CAP-SPECIALTY-f0bb237bd8b6d878**: Newborn Screening Context
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-ed6480bea6b224a5"></a>
- **M06-CAP-SPECIALTY-ed6480bea6b224a5**: Baseline Hemoglobin
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-641908a015f7d580"></a>
- **M06-CAP-SPECIALTY-641908a015f7d580**: Pain Episodes
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-018ea3f855ad6c2f"></a>
- **M06-CAP-SPECIALTY-018ea3f855ad6c2f**: Acute Chest Context
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-2aa0cf292e6a6d56"></a>
- **M06-CAP-SPECIALTY-2aa0cf292e6a6d56**: Infection Risk
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-3d991dbf789638f3"></a>
- **M06-CAP-SPECIALTY-3d991dbf789638f3**: Splenic Function Context
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-a6a852e80170b314"></a>
- **M06-CAP-SPECIALTY-a6a852e80170b314**: Stroke Risk Context
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-d8eb5bba7afe07ea"></a>
- **M06-CAP-SPECIALTY-d8eb5bba7afe07ea**: Transfusion
  Origin: original 4981, original 4983

<a id="M06-CAP-SPECIALTY-157f8eefc359f10e"></a>
- **M06-CAP-SPECIALTY-157f8eefc359f10e**: Disease-modifying Therapy
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-1d12a7e6beaf51bc"></a>
- **M06-CAP-SPECIALTY-1d12a7e6beaf51bc**: Hydroxyurea Context
  Origin: original 4981

<a id="M06-CAP-SPECIALTY-7ba750c8dd459cb9"></a>
- **M06-CAP-SPECIALTY-7ba750c8dd459cb9**: Coordinate longitudinal care of pediatric thalassemia and other chronic transfusion-dependent anemias.
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-2b4eb86144abde9a"></a>
- **M06-CAP-SPECIALTY-2b4eb86144abde9a**: Thalassemia Type
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-2a4a2ec3d39d7b49"></a>
- **M06-CAP-SPECIALTY-2a4a2ec3d39d7b49**: Transfusion Schedule
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-2c14da12dd259974"></a>
- **M06-CAP-SPECIALTY-2c14da12dd259974**: Pre-transfusion Hemoglobin
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-10fb1b3b049bbcfe"></a>
- **M06-CAP-SPECIALTY-10fb1b3b049bbcfe**: Blood Product History
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-9ba1dc8531031c77"></a>
- **M06-CAP-SPECIALTY-9ba1dc8531031c77**: Alloantibody Context
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-a26b2ad4e34621df"></a>
- **M06-CAP-SPECIALTY-a26b2ad4e34621df**: MRI Iron Context
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-2a1538a256fc6392"></a>
- **M06-CAP-SPECIALTY-2a1538a256fc6392**: Chelation Therapy
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-a2ec9bf30d0dd0b0"></a>
- **M06-CAP-SPECIALTY-a2ec9bf30d0dd0b0**: Endocrine Surveillance
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-88de929778d7a2df"></a>
- **M06-CAP-SPECIALTY-88de929778d7a2df**: Cardiac Surveillance
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-dc54d893eb812461"></a>
- **M06-CAP-SPECIALTY-dc54d893eb812461**: Liver Surveillance
  Origin: original 4982

<a id="M06-CAP-SPECIALTY-c4f5854f1e7f0191"></a>
- **M06-CAP-SPECIALTY-c4f5854f1e7f0191**: Provide structured assessment of quantitative and qualitative platelet disorders.
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-d539f75843012b22"></a>
- **M06-CAP-SPECIALTY-d539f75843012b22**: Platelet Count
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-efaa495f9a8e1467"></a>
- **M06-CAP-SPECIALTY-efaa495f9a8e1467**: Platelet Trend
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-1ec2706d1a5b50a0"></a>
- **M06-CAP-SPECIALTY-1ec2706d1a5b50a0**: Bruising
  Origin: original 4983, original 4985

<a id="M06-CAP-SPECIALTY-ff48ea76e24478df"></a>
- **M06-CAP-SPECIALTY-ff48ea76e24478df**: Petechiae
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-9c2b55d859ae9c60"></a>
- **M06-CAP-SPECIALTY-9c2b55d859ae9c60**: Mucosal Bleeding
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-baa745fc0fc8fa2c"></a>
- **M06-CAP-SPECIALTY-baa745fc0fc8fa2c**: Immune Thrombocytopenia Context
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-c9b067f01c20fb72"></a>
- **M06-CAP-SPECIALTY-c9b067f01c20fb72**: Medication Context
  Origin: original 4983, original 4989, original 4990, original 5114

<a id="M06-CAP-SPECIALTY-de1a7cd9ab83fa38"></a>
- **M06-CAP-SPECIALTY-de1a7cd9ab83fa38**: Infection Context
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-45853ebadae165e0"></a>
- **M06-CAP-SPECIALTY-45853ebadae165e0**: Autoimmune Context
  Origin: original 4983, original 4989, original 4990, original 4991

<a id="M06-CAP-SPECIALTY-24ca2da877dca80a"></a>
- **M06-CAP-SPECIALTY-24ca2da877dca80a**: Genetic Platelet Disorder Context
  Origin: original 4983

<a id="M06-CAP-SPECIALTY-135e3f766c2170a2"></a>
- **M06-CAP-SPECIALTY-135e3f766c2170a2**: Provide lifelong management of hemophilia and inherited coagulation disorders.
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-2d9a77beeb2cf1d3"></a>
- **M06-CAP-SPECIALTY-2d9a77beeb2cf1d3**: Bleeding Disorder Diagnosis
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-5575494b7cc0fbb3"></a>
- **M06-CAP-SPECIALTY-5575494b7cc0fbb3**: Genetic Diagnosis
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-113e3bed70f4e156"></a>
- **M06-CAP-SPECIALTY-113e3bed70f4e156**: Bleeding Episode Registry
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-c2fc77e3508e06ed"></a>
- **M06-CAP-SPECIALTY-c2fc77e3508e06ed**: Joint Bleeding Context
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-b2315d9ccc8f3e6f"></a>
- **M06-CAP-SPECIALTY-b2315d9ccc8f3e6f**: Trauma Context
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-13aa05ae71d4e6ca"></a>
- **M06-CAP-SPECIALTY-13aa05ae71d4e6ca**: Factor Replacement
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-d9c2696b710299c9"></a>
- **M06-CAP-SPECIALTY-d9c2696b710299c9**: Non-factor Therapy Context
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-f9d953a9ad3d8783"></a>
- **M06-CAP-SPECIALTY-f9d953a9ad3d8783**: Inhibitor Context
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-27d6a7bbb526e0f6"></a>
- **M06-CAP-SPECIALTY-27d6a7bbb526e0f6**: Treatment Product
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-a3534f153cca731c"></a>
- **M06-CAP-SPECIALTY-a3534f153cca731c**: Dose History
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-8ca15b53437ae029"></a>
- **M06-CAP-SPECIALTY-8ca15b53437ae029**: Home Treatment
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-ecca20e690746ca7"></a>
- **M06-CAP-SPECIALTY-ecca20e690746ca7**: Surgery Planning
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-12b4b0d8a7188d6c"></a>
- **M06-CAP-SPECIALTY-12b4b0d8a7188d6c**: Dental Procedure Planning
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-244d7f17060b34f2"></a>
- **M06-CAP-SPECIALTY-244d7f17060b34f2**: Emergency Plan
  Origin: original 4984, original 4985

<a id="M06-CAP-SPECIALTY-a6301263dbd44cfc"></a>
- **M06-CAP-SPECIALTY-a6301263dbd44cfc**: Long-term Joint Outcomes
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-d71107f87db80779"></a>
- **M06-CAP-SPECIALTY-d71107f87db80779**: Current Hemostatic Treatment
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-f73819646992b0d0"></a>
- **M06-CAP-SPECIALTY-f73819646992b0d0**: Inhibitor Status
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-7d85d2a7f28761e9"></a>
- **M06-CAP-SPECIALTY-7d85d2a7f28761e9**: Emergency Treatment Plan
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-abd3905274810b30"></a>
- **M06-CAP-SPECIALTY-abd3905274810b30**: Specialist Contact Context
  Origin: original 4984

<a id="M06-CAP-SPECIALTY-ce3b3a4611ae1d24"></a>
- **M06-CAP-SPECIALTY-ce3b3a4611ae1d24**: Coordinate diagnosis and longitudinal management of von Willebrand disease and related mucocutaneous bleeding phenotypes.
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-12d7d21d38a045b8"></a>
- **M06-CAP-SPECIALTY-12d7d21d38a045b8**: Epistaxis
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-cc1097312ae7f1e7"></a>
- **M06-CAP-SPECIALTY-cc1097312ae7f1e7**: Oral Bleeding
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-323136509ed9333b"></a>
- **M06-CAP-SPECIALTY-323136509ed9333b**: Procedural Bleeding
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-768a85669c514fc8"></a>
- **M06-CAP-SPECIALTY-768a85669c514fc8**: Menstrual Bleeding Context
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-5f739a10d852bfbd"></a>
- **M06-CAP-SPECIALTY-5f739a10d852bfbd**: VWF Testing
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-5f48a7735376c440"></a>
- **M06-CAP-SPECIALTY-5f48a7735376c440**: Factor VIII Context
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-b861d92615901a80"></a>
- **M06-CAP-SPECIALTY-b861d92615901a80**: Platelet Function Context
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-352947ac8b51d4b0"></a>
- **M06-CAP-SPECIALTY-352947ac8b51d4b0**: Procedural Plan
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-b2ad81aeb8f82909"></a>
- **M06-CAP-SPECIALTY-b2ad81aeb8f82909**: Dentistry
  Origin: original 4985

<a id="M06-CAP-SPECIALTY-c330f1bddc4d6aa6"></a>
- **M06-CAP-SPECIALTY-c330f1bddc4d6aa6**: Coordinate pediatric venous and arterial thrombosis care.
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-1b10321b19e679ab"></a>
- **M06-CAP-SPECIALTY-1b10321b19e679ab**: Thrombotic Event
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-52f7834a10a9c9ac"></a>
- **M06-CAP-SPECIALTY-52f7834a10a9c9ac**: Anatomical Site
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-4b0b551eeb4184cd"></a>
- **M06-CAP-SPECIALTY-4b0b551eeb4184cd**: Catheter-associated Thrombosis
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-2a0538160478f6f2"></a>
- **M06-CAP-SPECIALTY-2a0538160478f6f2**: Cerebral Venous Context
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-8e064290b142d8f0"></a>
- **M06-CAP-SPECIALTY-8e064290b142d8f0**: Thrombophilia Context
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-3965f5ed05bd39bb"></a>
- **M06-CAP-SPECIALTY-3965f5ed05bd39bb**: Post-thrombotic Outcomes
  Origin: original 4987

<a id="M06-CAP-SPECIALTY-fa6868a79890ab44"></a>
- **M06-CAP-SPECIALTY-fa6868a79890ab44**: Support specialist evaluation of inherited and acquired thrombotic risk in pediatric patients.
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-2fb268a8fee53d8f"></a>
- **M06-CAP-SPECIALTY-2fb268a8fee53d8f**: Thrombosis History
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-6665f816f9e63117"></a>
- **M06-CAP-SPECIALTY-6665f816f9e63117**: Provoking Factors
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-918e8af4b49ff737"></a>
- **M06-CAP-SPECIALTY-918e8af4b49ff737**: Recurrent Events
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-dc91d58328326808"></a>
- **M06-CAP-SPECIALTY-dc91d58328326808**: Laboratory Thrombophilia Context
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-bf367e9f3a333124"></a>
- **M06-CAP-SPECIALTY-bf367e9f3a333124**: Genetic Testing
  Origin: original 4989, original 5007

<a id="M06-CAP-SPECIALTY-2a02c766b5a8b606"></a>
- **M06-CAP-SPECIALTY-2a02c766b5a8b606**: Central Line Context
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-1bf6bfeb47b13eb8"></a>
- **M06-CAP-SPECIALTY-1bf6bfeb47b13eb8**: Malignancy Context
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-7c87702c8e156a98"></a>
- **M06-CAP-SPECIALTY-7c87702c8e156a98**: Long-term Anticoagulation Context
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-d00519320ad97bc2"></a>
- **M06-CAP-SPECIALTY-d00519320ad97bc2**: Counseling
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-75b75c5c755166a2"></a>
- **M06-CAP-SPECIALTY-75b75c5c755166a2**: Future Risk Documentation
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-9f5afa8f1f9c3dce"></a>
- **M06-CAP-SPECIALTY-9f5afa8f1f9c3dce**: Clinical Governance:
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-4c48afd8d0b39bef"></a>
- **M06-CAP-SPECIALTY-4c48afd8d0b39bef**: Testing decisions and interpretation remain specialist-led and indication-specific.
  Origin: original 4989

<a id="M06-CAP-SPECIALTY-31a8ccbe072bb44b"></a>
- **M06-CAP-SPECIALTY-31a8ccbe072bb44b**: Provide longitudinal evaluation and management of pediatric neutropenia and other clinically significant white cell abnormalities.
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-1f6d513c404a7bf1"></a>
- **M06-CAP-SPECIALTY-1f6d513c404a7bf1**: Absolute Neutrophil Count
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-d54e7a4d0217ffff"></a>
- **M06-CAP-SPECIALTY-d54e7a4d0217ffff**: White Cell Differential
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-10d8c964b53514ca"></a>
- **M06-CAP-SPECIALTY-10d8c964b53514ca**: Duration
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-7780e21cc2ba738d"></a>
- **M06-CAP-SPECIALTY-7780e21cc2ba738d**: Cyclic Pattern Context
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-0b34d4919c679f54"></a>
- **M06-CAP-SPECIALTY-0b34d4919c679f54**: G-CSF Context
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-6cf52eb2351573d6"></a>
- **M06-CAP-SPECIALTY-6cf52eb2351573d6**: Clinical Response
  Origin: original 4990

<a id="M06-CAP-SPECIALTY-d560b4f5af3c0275"></a>
- **M06-CAP-SPECIALTY-d560b4f5af3c0275**: Coordinate evaluation of multi-lineage cytopenias, inherited marrow failure and acquired bone marrow dysfunction.
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-a300e7c5bc6afb91"></a>
- **M06-CAP-SPECIALTY-a300e7c5bc6afb91**: Neutrophils
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-b0b67ed7e56e48cd"></a>
- **M06-CAP-SPECIALTY-b0b67ed7e56e48cd**: Platelets
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-76aedfd2483d011e"></a>
- **M06-CAP-SPECIALTY-76aedfd2483d011e**: Peripheral Smear
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-6d0c0e4ae35cdff0"></a>
- **M06-CAP-SPECIALTY-6d0c0e4ae35cdff0**: Bone Marrow Examination
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-850f4e813e400d86"></a>
- **M06-CAP-SPECIALTY-850f4e813e400d86**: Cytogenetics Context
  Origin: original 4991, original 5129

<a id="M06-CAP-SPECIALTY-6476c2a2bf10b68a"></a>
- **M06-CAP-SPECIALTY-6476c2a2bf10b68a**: Viral Context
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-1bbd34ee74fee5b5"></a>
- **M06-CAP-SPECIALTY-1bbd34ee74fee5b5**: Medication/Toxin Context
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-84994c40511036f7"></a>
- **M06-CAP-SPECIALTY-84994c40511036f7**: Transfusion Support
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-e36fbe30e0bb2a81"></a>
- **M06-CAP-SPECIALTY-e36fbe30e0bb2a81**: Infection Prophylaxis
  Origin: original 4991

<a id="M06-CAP-SPECIALTY-42311c5951c0d1c3"></a>
- **M06-CAP-SPECIALTY-42311c5951c0d1c3**: Serve as the master orchestration layer for the complete EDHT pediatric hematology, hemostasis, thrombosis and transfusion ecosystem.
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-978c320538f84a9b"></a>
- **M06-CAP-SPECIALTY-978c320538f84a9b**: General Pediatric Hematology
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-b354b2ed5d9dc055"></a>
- **M06-CAP-SPECIALTY-b354b2ed5d9dc055**: CBC Intelligence
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-2efb884ab4317c14"></a>
- **M06-CAP-SPECIALTY-2efb884ab4317c14**: Thalassemia
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-385e699dc8b43c5e"></a>
- **M06-CAP-SPECIALTY-385e699dc8b43c5e**: Hemophilia
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-5f091bddaefbe119"></a>
- **M06-CAP-SPECIALTY-5f091bddaefbe119**: Coagulation Diagnostics
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-dc669c8f76a230cc"></a>
- **M06-CAP-SPECIALTY-dc669c8f76a230cc**: Thrombophilia
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-fa07cf35ba0612f0"></a>
- **M06-CAP-SPECIALTY-fa07cf35ba0612f0**: Neutropenia
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-4420913a56e6a6fb"></a>
- **M06-CAP-SPECIALTY-4420913a56e6a6fb**: Hemovigilance
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-1dcace9a3d452327"></a>
- **M06-CAP-SPECIALTY-1dcace9a3d452327**: Apheresis
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-08d8129901c7982a"></a>
- **M06-CAP-SPECIALTY-08d8129901c7982a**: Transition Care
  Origin: original 5000, original 5050, original 5101, original 5125, original 5126, original 5150, original 5175

<a id="M06-CAP-SPECIALTY-716f8c74a63c51aa"></a>
- **M06-CAP-SPECIALTY-716f8c74a63c51aa**: Hematology Digital Twin
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-b88a5980fe6c5530"></a>
- **M06-CAP-SPECIALTY-b88a5980fe6c5530**: Blood Bank Integration
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-c1e62dbe3cc4fceb"></a>
- **M06-CAP-SPECIALTY-c1e62dbe3cc4fceb**: Blood Passport
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-f590cbb24d6a35fb"></a>
- **M06-CAP-SPECIALTY-f590cbb24d6a35fb**: Unified Hematology Timeline
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-c229f7b70231e898"></a>
- **M06-CAP-SPECIALTY-c229f7b70231e898**: Laboratory Trend Intelligence
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-e5873d2d33a485d0"></a>
- **M06-CAP-SPECIALTY-e5873d2d33a485d0**: Bleeding/Thrombosis Event Registry
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-2cb26d579d2a6294"></a>
- **M06-CAP-SPECIALTY-2cb26d579d2a6294**: Transfusion Traceability
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-d00b8cddb6095610"></a>
- **M06-CAP-SPECIALTY-d00b8cddb6095610**: Genetic Integration
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-715cee646385bb8f"></a>
- **M06-CAP-SPECIALTY-715cee646385bb8f**: Bone Marrow Integration
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-cc373fc2e7a3520e"></a>
- **M06-CAP-SPECIALTY-cc373fc2e7a3520e**: Emergency Treatment Information
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-ffae03957f832012"></a>
- **M06-CAP-SPECIALTY-ffae03957f832012**: Multidisciplinary Case Coordination
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-4988b5c6afb2e953"></a>
- **M06-CAP-SPECIALTY-4988b5c6afb2e953**: CBC Timeline
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-68f144c3d6865b34"></a>
- **M06-CAP-SPECIALTY-68f144c3d6865b34**: Anemia Record
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-d2f9f3254373244f"></a>
- **M06-CAP-SPECIALTY-d2f9f3254373244f**: Bleeding Disorder Record
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-bd92f50c47519cd0"></a>
- **M06-CAP-SPECIALTY-bd92f50c47519cd0**: Thrombosis Record
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-abc8071375488628"></a>
- **M06-CAP-SPECIALTY-abc8071375488628**: Medication/Anticoagulation Record
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-9327ddae2ac2e681"></a>
- **M06-CAP-SPECIALTY-9327ddae2ac2e681**: Blood Product Safety
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-f238a2da5f901a27"></a>
- **M06-CAP-SPECIALTY-f238a2da5f901a27**: Advanced Hematology AI
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-d18c29319981fa6a"></a>
- **M06-CAP-SPECIALTY-d18c29319981fa6a**: Automated Blood Bank Integration
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-e44afc3a320e8c2f"></a>
- **M06-CAP-SPECIALTY-e44afc3a320e8c2f**: Predictive Cytopenia Analytics
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-09d079427612e6cc"></a>
- **M06-CAP-SPECIALTY-09d079427612e6cc**: Advanced Hemostasis Intelligence
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-ebd68dea2c1d350d"></a>
- **M06-CAP-SPECIALTY-ebd68dea2c1d350d**: Rare Genetic Blood Disease Analytics
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-7e2111f9364b8c08"></a>
- **M06-CAP-SPECIALTY-7e2111f9364b8c08**: Hematological care remains connected to oncology, immunology, genetics, nephrology, rheumatology, gynecology, infectious disease and emergency medicine through one continuous EDHT patient model.
  Origin: original 5000

<a id="M06-CAP-SPECIALTY-a5533b799d37185b"></a>
- **M06-CAP-SPECIALTY-a5533b799d37185b**: Create a continuously updated structured representation of pediatric immune function.
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-3a87e31856ab8441"></a>
- **M06-CAP-SPECIALTY-3a87e31856ab8441**: Infection Phenotype
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-9b6f34486882b9d8"></a>
- **M06-CAP-SPECIALTY-9b6f34486882b9d8**: Autoimmune Phenotype
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-62554bfdf3f460d9"></a>
- **M06-CAP-SPECIALTY-62554bfdf3f460d9**: Autoinflammatory Phenotype
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-8de1093b6d2165b4"></a>
- **M06-CAP-SPECIALTY-8de1093b6d2165b4**: Allergic Phenotype
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-93db56316840db1f"></a>
- **M06-CAP-SPECIALTY-93db56316840db1f**: Lymphoproliferation Context
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-a2eff5446866ecc0"></a>
- **M06-CAP-SPECIALTY-a2eff5446866ecc0**: Growth Context
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-58ea41a37214e864"></a>
- **M06-CAP-SPECIALTY-58ea41a37214e864**: Immunoglobulin Profile
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-cad3fd53507ff05e"></a>
- **M06-CAP-SPECIALTY-cad3fd53507ff05e**: Functional Testing
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-907629fdc9d74f62"></a>
- **M06-CAP-SPECIALTY-907629fdc9d74f62**: Genetic Findings
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-4dbd0639c0e6c0c0"></a>
- **M06-CAP-SPECIALTY-4dbd0639c0e6c0c0**: Treatment Exposure
  Origin: original 5002, original 5145, original 5175

<a id="M06-CAP-SPECIALTY-0e4ee9d4a189252d"></a>
- **M06-CAP-SPECIALTY-0e4ee9d4a189252d**: Longitudinal Immune Status
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-8e96619c8dca4b93"></a>
- **M06-CAP-SPECIALTY-8e96619c8dca4b93**: Functions:
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-9a21dcadc07dc830"></a>
- **M06-CAP-SPECIALTY-9a21dcadc07dc830**: Baseline Immune Profile
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-ca5423b632528d97"></a>
- **M06-CAP-SPECIALTY-ca5423b632528d97**: Treatment-response Tracking
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-edb4215617c5fdd7"></a>
- **M06-CAP-SPECIALTY-edb4215617c5fdd7**: Immune Deterioration Context
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-91af6ef914fbd8ea"></a>
- **M06-CAP-SPECIALTY-91af6ef914fbd8ea**: Immune Recovery Context
  Origin: original 5002

<a id="M06-CAP-SPECIALTY-55b7aec4ca0eea8e"></a>
- **M06-CAP-SPECIALTY-55b7aec4ca0eea8e**: Coordinate newborn screening, urgent diagnostic assessment and definitive care for severe combined immunodeficiency and related conditions.
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-4b0ed58d450fd553"></a>
- **M06-CAP-SPECIALTY-4b0ed58d450fd553**: Newborn Screening Result
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-4177ef786c4f2cc3"></a>
- **M06-CAP-SPECIALTY-4177ef786c4f2cc3**: Screening Date
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-95391c1209fd6e61"></a>
- **M06-CAP-SPECIALTY-95391c1209fd6e61**: Abnormal Screening Follow-up
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-1701351812cb21f3"></a>
- **M06-CAP-SPECIALTY-1701351812cb21f3**: Lymphocyte Count
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-7b2c2bdf34d606ab"></a>
- **M06-CAP-SPECIALTY-7b2c2bdf34d606ab**: T-cell Assessment
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-09f9b956833ceed0"></a>
- **M06-CAP-SPECIALTY-09f9b956833ceed0**: Infection Prevention Context
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-d6e953c1dd961dee"></a>
- **M06-CAP-SPECIALTY-d6e953c1dd961dee**: Isolation Precaution Context
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-8239771b51f1a01d"></a>
- **M06-CAP-SPECIALTY-8239771b51f1a01d**: Vaccine Safety Context
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-9f6867087cedc081"></a>
- **M06-CAP-SPECIALTY-9f6867087cedc081**: Immunoglobulin Replacement
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-875716322614072c"></a>
- **M06-CAP-SPECIALTY-875716322614072c**: Gene Therapy Context
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-767fb03c96d52ea8"></a>
- **M06-CAP-SPECIALTY-767fb03c96d52ea8**: Definitive Treatment
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-bbf2edbbfacad60e"></a>
- **M06-CAP-SPECIALTY-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-023ff684b6f24583"></a>
- **M06-CAP-SPECIALTY-023ff684b6f24583**: Abnormal Screen Escalation
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-0d248e3d64c562ea"></a>
- **M06-CAP-SPECIALTY-0d248e3d64c562ea**: Follow-up Completion Tracking
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-98027cc6ce065e7f"></a>
- **M06-CAP-SPECIALTY-98027cc6ce065e7f**: Live-vaccine Safety Alert
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-73b064fe0671c95c"></a>
- **M06-CAP-SPECIALTY-73b064fe0671c95c**: Infection Risk Context
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-ddc321bb3d290ade"></a>
- **M06-CAP-SPECIALTY-ddc321bb3d290ade**: Emergency Specialist Referral
  Origin: original 5007

<a id="M06-CAP-SPECIALTY-d9abee205ad082e0"></a>
- **M06-CAP-SPECIALTY-d9abee205ad082e0**: Provide the unified longitudinal architecture for pediatric rheumatology, systemic autoimmune disease and chronic inflammatory disorders across EDHT.
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-3a1739927124d9e2"></a>
- **M06-CAP-SPECIALTY-3a1739927124d9e2**: Arthritis
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-838390b8d3028d11"></a>
- **M06-CAP-SPECIALTY-838390b8d3028d11**: Myositis
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-2f471182a8575fad"></a>
- **M06-CAP-SPECIALTY-2f471182a8575fad**: Autoinflammatory Disease Context
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-9b1651a688938606"></a>
- **M06-CAP-SPECIALTY-9b1651a688938606**: Musculoskeletal Inflammation
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-45102e6653c410c0"></a>
- **M06-CAP-SPECIALTY-45102e6653c410c0**: Systemic Disease Activity
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-65a514f0dd5a0d6c"></a>
- **M06-CAP-SPECIALTY-65a514f0dd5a0d6c**: Organ Involvement
  Origin: original 5026, original 5050

<a id="M06-CAP-SPECIALTY-3186b1d6891f0f94"></a>
- **M06-CAP-SPECIALTY-3186b1d6891f0f94**: Immunomodulatory Therapy
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-eeb966204b23d601"></a>
- **M06-CAP-SPECIALTY-eeb966204b23d601**: Pain and Fatigue
  Origin: original 5026, original 5050

<a id="M06-CAP-SPECIALTY-6d7d134d0bc697fc"></a>
- **M06-CAP-SPECIALTY-6d7d134d0bc697fc**: Growth and Development
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-1a099d01b7239f24"></a>
- **M06-CAP-SPECIALTY-1a099d01b7239f24**: Transition to Adult Rheumatology
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-44a03b04b389b9ff"></a>
- **M06-CAP-SPECIALTY-44a03b04b389b9ff**: Infusion History
  Origin: original 5026

<a id="M06-CAP-SPECIALTY-f7ca9967b2c9090e"></a>
- **M06-CAP-SPECIALTY-f7ca9967b2c9090e**: Provide comprehensive longitudinal management of juvenile idiopathic arthritis.
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-fd590a4f444d5287"></a>
- **M06-CAP-SPECIALTY-fd590a4f444d5287**: JIA Classification Context
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-52cd66bd822f8935"></a>
- **M06-CAP-SPECIALTY-52cd66bd822f8935**: Disease Onset
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-3179d3ca56473626"></a>
- **M06-CAP-SPECIALTY-3179d3ca56473626**: Active Joint Count
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-4f15fc856574fe7c"></a>
- **M06-CAP-SPECIALTY-4f15fc856574fe7c**: Limited Joint Count
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-746379730cbccbff"></a>
- **M06-CAP-SPECIALTY-746379730cbccbff**: Uveitis Risk Context
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-48a840700bbe08a8"></a>
- **M06-CAP-SPECIALTY-48a840700bbe08a8**: Intra-articular Therapy Context
  Origin: original 5028

<a id="M06-CAP-SPECIALTY-b34ae35ccb89659b"></a>
- **M06-CAP-SPECIALTY-b34ae35ccb89659b**: Flare
  Origin: original 5028, original 5031

<a id="M06-CAP-SPECIALTY-ecbff89ecb675bf7"></a>
- **M06-CAP-SPECIALTY-ecbff89ecb675bf7**: Create an anatomical longitudinal map of joint and periarticular inflammatory disease.
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-e00a34c54f1168ef"></a>
- **M06-CAP-SPECIALTY-e00a34c54f1168ef**: Joint-by-Joint Mapping
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-e4f590982890fc1e"></a>
- **M06-CAP-SPECIALTY-e4f590982890fc1e**: Restricted Movement
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-9bcc7845d9d6b44e"></a>
- **M06-CAP-SPECIALTY-9bcc7845d9d6b44e**: Effusion Context
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-2d2e0cc23c9ee9f0"></a>
- **M06-CAP-SPECIALTY-2d2e0cc23c9ee9f0**: Dactylitis Context
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-97a156eadd3165b6"></a>
- **M06-CAP-SPECIALTY-97a156eadd3165b6**: Tendon Involvement
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-a2e99a7b1de483d8"></a>
- **M06-CAP-SPECIALTY-a2e99a7b1de483d8**: Laterality
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-3e7c8f5567536740"></a>
- **M06-CAP-SPECIALTY-3e7c8f5567536740**: Injection History
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-2fba0824835eb85e"></a>
- **M06-CAP-SPECIALTY-2fba0824835eb85e**: Surgical Context
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-841c259583889600"></a>
- **M06-CAP-SPECIALTY-841c259583889600**: Interactive Joint Map
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-d480acb6e90ad399"></a>
- **M06-CAP-SPECIALTY-d480acb6e90ad399**: Active/Inactive Joint Timeline
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-588bcb2216ead73d"></a>
- **M06-CAP-SPECIALTY-588bcb2216ead73d**: Imaging Overlay
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-c9dd7e28fd1cd391"></a>
- **M06-CAP-SPECIALTY-c9dd7e28fd1cd391**: Treatment Overlay
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-482d7cfd9d9af70d"></a>
- **M06-CAP-SPECIALTY-482d7cfd9d9af70d**: Functional Impact
  Origin: original 5029

<a id="M06-CAP-SPECIALTY-d02fa0dac1d73c82"></a>
- **M06-CAP-SPECIALTY-d02fa0dac1d73c82**: Coordinate complex multisystem pediatric systemic lupus erythematosus care.
  Origin: original 5031

<a id="M06-CAP-SPECIALTY-18dd6f05f18f4067"></a>
- **M06-CAP-SPECIALTY-18dd6f05f18f4067**: Disease Manifestations
  Origin: original 5031

<a id="M06-CAP-SPECIALTY-cc417cd0bdd3e9da"></a>
- **M06-CAP-SPECIALTY-cc417cd0bdd3e9da**: Joints
  Origin: original 5031

<a id="M06-CAP-SPECIALTY-c8936c103f5b3f9d"></a>
- **M06-CAP-SPECIALTY-c8936c103f5b3f9d**: Neurological Context
  Origin: original 5031, original 5039

<a id="M06-CAP-SPECIALTY-5ab75b4d87d961ee"></a>
- **M06-CAP-SPECIALTY-5ab75b4d87d961ee**: Hematological Context
  Origin: original 5031

<a id="M06-CAP-SPECIALTY-2c5e69c344470a6b"></a>
- **M06-CAP-SPECIALTY-2c5e69c344470a6b**: Cardiac Context
  Origin: original 5031, original 5034

<a id="M06-CAP-SPECIALTY-58feacc4b9461a19"></a>
- **M06-CAP-SPECIALTY-58feacc4b9461a19**: Pulmonary Context
  Origin: original 5031, original 5033, original 5034, original 5039

<a id="M06-CAP-SPECIALTY-cce8ea82ff2909d5"></a>
- **M06-CAP-SPECIALTY-cce8ea82ff2909d5**: Damage Context
  Origin: original 5031

<a id="M06-CAP-SPECIALTY-96815558c65bc93b"></a>
- **M06-CAP-SPECIALTY-96815558c65bc93b**: Create a shared longitudinal pathway for renal involvement in pediatric lupus.
  Origin: original 5032

<a id="M06-CAP-SPECIALTY-87f11abc863263ad"></a>
- **M06-CAP-SPECIALTY-87f11abc863263ad**: Renal Symptoms
  Origin: original 5032

<a id="M06-CAP-SPECIALTY-0c39793dde0e708d"></a>
- **M06-CAP-SPECIALTY-0c39793dde0e708d**: Renal Biopsy Context
  Origin: original 5032

<a id="M06-CAP-SPECIALTY-01285763f35727ed"></a>
- **M06-CAP-SPECIALTY-01285763f35727ed**: Kidney Outcome
  Origin: original 5032

<a id="M06-CAP-SPECIALTY-dba9740524940f80"></a>
- **M06-CAP-SPECIALTY-dba9740524940f80**: Systemic lupus activity and renal disease activity remain synchronized within one timeline.
  Origin: original 5032

<a id="M06-CAP-SPECIALTY-980186459745107b"></a>
- **M06-CAP-SPECIALTY-980186459745107b**: Provide longitudinal multidisciplinary care for juvenile inflammatory myopathies.
  Origin: original 5033

<a id="M06-CAP-SPECIALTY-d6f80e6ef023ad1b"></a>
- **M06-CAP-SPECIALTY-d6f80e6ef023ad1b**: Autoantibody Context
  Origin: original 5033, original 5035

<a id="M06-CAP-SPECIALTY-5e9a447b25378651"></a>
- **M06-CAP-SPECIALTY-5e9a447b25378651**: MRI Context
  Origin: original 5033

<a id="M06-CAP-SPECIALTY-012ef41aa2d40a53"></a>
- **M06-CAP-SPECIALTY-012ef41aa2d40a53**: Muscle Imaging
  Origin: original 5033

<a id="M06-CAP-SPECIALTY-e651b503ed8799b6"></a>
- **M06-CAP-SPECIALTY-e651b503ed8799b6**: Swallowing Context
  Origin: original 5033, original 5108, original 5143

<a id="M06-CAP-SPECIALTY-122b7e25a6b4c43e"></a>
- **M06-CAP-SPECIALTY-122b7e25a6b4c43e**: Calcinosis Context
  Origin: original 5033

<a id="M06-CAP-SPECIALTY-0537135aca1fea08"></a>
- **M06-CAP-SPECIALTY-0537135aca1fea08**: Coordinate pediatric localized scleroderma and systemic sclerosis spectrum care.
  Origin: original 5034

<a id="M06-CAP-SPECIALTY-9659e7c327f43c4e"></a>
- **M06-CAP-SPECIALTY-9659e7c327f43c4e**: Anatomical Distribution
  Origin: original 5034

<a id="M06-CAP-SPECIALTY-458052e502e78beb"></a>
- **M06-CAP-SPECIALTY-458052e502e78beb**: Skin Change Timeline
  Origin: original 5034

<a id="M06-CAP-SPECIALTY-811d985580ddb3d6"></a>
- **M06-CAP-SPECIALTY-811d985580ddb3d6**: Joint Function
  Origin: original 5034

<a id="M06-CAP-SPECIALTY-e09c794604c2454a"></a>
- **M06-CAP-SPECIALTY-e09c794604c2454a**: Contracture Context
  Origin: original 5034

<a id="M06-CAP-SPECIALTY-744b229f82cf5b84"></a>
- **M06-CAP-SPECIALTY-744b229f82cf5b84**: Provide longitudinal assessment of pediatric primary and secondary vasculitic disorders.
  Origin: original 5035

<a id="M06-CAP-SPECIALTY-c30370207d57459c"></a>
- **M06-CAP-SPECIALTY-c30370207d57459c**: Vessel-size Context
  Origin: original 5035

<a id="M06-CAP-SPECIALTY-9ef7c97b14e4ed43"></a>
- **M06-CAP-SPECIALTY-9ef7c97b14e4ed43**: Ocular Context
  Origin: original 5035

<a id="M06-CAP-SPECIALTY-f3a6fa377b21832d"></a>
- **M06-CAP-SPECIALTY-f3a6fa377b21832d**: Biopsy Context
  Origin: original 5035, original 5137

<a id="M06-CAP-SPECIALTY-da38696201b4c193"></a>
- **M06-CAP-SPECIALTY-da38696201b4c193**: Track evolving pediatric autoimmune phenotypes that do not initially fit a single established disease category.
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-de066f05e36e956f"></a>
- **M06-CAP-SPECIALTY-de066f05e36e956f**: Joint Manifestations
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-a3fa423cc3792739"></a>
- **M06-CAP-SPECIALTY-a3fa423cc3792739**: Muscle Manifestations
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-3c5a3c4cd0e5d807"></a>
- **M06-CAP-SPECIALTY-3c5a3c4cd0e5d807**: Diagnostic Evolution
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-618d7191841789b1"></a>
- **M06-CAP-SPECIALTY-618d7191841789b1**: Final Classification Context
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-76fea83b3c8e159b"></a>
- **M06-CAP-SPECIALTY-76fea83b3c8e159b**: The platform preserves diagnostic uncertainty and evolution rather than forcing premature classification.
  Origin: original 5039

<a id="M06-CAP-SPECIALTY-374ab5618b69bb7d"></a>
- **M06-CAP-SPECIALTY-374ab5618b69bb7d**: Represent pain, fatigue and real-world functional burden alongside inflammatory disease activity.
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-02565a4c63b27cc3"></a>
- **M06-CAP-SPECIALTY-02565a4c63b27cc3**: Pain Location
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-1d24f39955196a81"></a>
- **M06-CAP-SPECIALTY-1d24f39955196a81**: Pain Intensity
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-5a94de06641cb88d"></a>
- **M06-CAP-SPECIALTY-5a94de06641cb88d**: Pain Pattern
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-0b35ea00d95c24c2"></a>
- **M06-CAP-SPECIALTY-0b35ea00d95c24c2**: Sleep Context
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-3f55be8669231626"></a>
- **M06-CAP-SPECIALTY-3f55be8669231626**: Psychological Context
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-41786930a15db451"></a>
- **M06-CAP-SPECIALTY-41786930a15db451**: Disease Activity Correlation
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-2d8f60f48d76c293"></a>
- **M06-CAP-SPECIALTY-2d8f60f48d76c293**: Pain Management
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-977118b2f194ab0c"></a>
- **M06-CAP-SPECIALTY-977118b2f194ab0c**: Longitudinal Function
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-9d120874fb5f9071"></a>
- **M06-CAP-SPECIALTY-9d120874fb5f9071**: Symptoms and functional impairment remain visible even when inflammatory markers are normal or disease activity is low.
  Origin: original 5043

<a id="M06-CAP-SPECIALTY-98ead316ff5efc02"></a>
- **M06-CAP-SPECIALTY-98ead316ff5efc02**: Pediatric Rheumatology
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-de4a4eb508909b1a"></a>
- **M06-CAP-SPECIALTY-de4a4eb508909b1a**: Digital Joint Mapping
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-831addb2297491af"></a>
- **M06-CAP-SPECIALTY-831addb2297491af**: Uveitis Surveillance
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-c1d09be5f04b9d7a"></a>
- **M06-CAP-SPECIALTY-c1d09be5f04b9d7a**: Systemic Sclerosis
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-386f1ecfacfe0f42"></a>
- **M06-CAP-SPECIALTY-386f1ecfacfe0f42**: Kawasaki Disease
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-60810d0796aa79f4"></a>
- **M06-CAP-SPECIALTY-60810d0796aa79f4**: IgA Vasculitis
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-36c8c61ec8923da6"></a>
- **M06-CAP-SPECIALTY-36c8c61ec8923da6**: Sjögren Syndrome
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-35918c06866105d7"></a>
- **M06-CAP-SPECIALTY-35918c06866105d7**: Mixed Connective Tissue Disease
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-42f46971ba414b40"></a>
- **M06-CAP-SPECIALTY-42f46971ba414b40**: Juvenile Spondyloarthritis
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-ccf492499db53f20"></a>
- **M06-CAP-SPECIALTY-ccf492499db53f20**: Psoriatic Arthritis
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-7665b15ca2b9d4fa"></a>
- **M06-CAP-SPECIALTY-7665b15ca2b9d4fa**: Raynaud Phenomenon
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-91dcb171a42a5657"></a>
- **M06-CAP-SPECIALTY-91dcb171a42a5657**: Growth and Bone Health
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-0b85f58122c7099f"></a>
- **M06-CAP-SPECIALTY-0b85f58122c7099f**: Rheumatology Digital Twin
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-7b3aec9b5e5f0fde"></a>
- **M06-CAP-SPECIALTY-7b3aec9b5e5f0fde**: Digital Joint Map
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-ce72405e3e979740"></a>
- **M06-CAP-SPECIALTY-ce72405e3e979740**: Laboratory Intelligence
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-321fdc40042039f1"></a>
- **M06-CAP-SPECIALTY-321fdc40042039f1**: Autoimmune Passport
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-7961f59c140f3e8c"></a>
- **M06-CAP-SPECIALTY-7961f59c140f3e8c**: Unified Rheumatology Timeline
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-6e21015595942a89"></a>
- **M06-CAP-SPECIALTY-6e21015595942a89**: Multisystem Disease Mapping
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-a59206c2dfde276d"></a>
- **M06-CAP-SPECIALTY-a59206c2dfde276d**: Joint Activity Tracking
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-45d5e79b3b8244ce"></a>
- **M06-CAP-SPECIALTY-45d5e79b3b8244ce**: Organ Involvement Registry
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-406118b3de6a2a33"></a>
- **M06-CAP-SPECIALTY-406118b3de6a2a33**: Laboratory and Imaging Integration
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-f72dcf0fa589b678"></a>
- **M06-CAP-SPECIALTY-f72dcf0fa589b678**: Digital Joint Record
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-812aec1a9e93dc22"></a>
- **M06-CAP-SPECIALTY-812aec1a9e93dc22**: Laboratory Timeline
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-a85e84b68fa9ba27"></a>
- **M06-CAP-SPECIALTY-a85e84b68fa9ba27**: Medication/Immunosuppression Record
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-bbaf61334f9dc180"></a>
- **M06-CAP-SPECIALTY-bbaf61334f9dc180**: Vaccination Integration
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-98e8177066c15a13"></a>
- **M06-CAP-SPECIALTY-98e8177066c15a13**: Advanced Rheumatology AI
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-54da6f9be9c99c38"></a>
- **M06-CAP-SPECIALTY-54da6f9be9c99c38**: Systemic Disease Digital Twin
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-2f77951ebb54bd8f"></a>
- **M06-CAP-SPECIALTY-2f77951ebb54bd8f**: Imaging Analytics
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-70686e82902b1833"></a>
- **M06-CAP-SPECIALTY-70686e82902b1833**: Remote Disease Activity Monitoring
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-7fd4f77519caa46b"></a>
- **M06-CAP-SPECIALTY-7fd4f77519caa46b**: Wearable Functional Monitoring
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-af35de7895ec7321"></a>
- **M06-CAP-SPECIALTY-af35de7895ec7321**: Genotype-Phenotype Intelligence
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-27d83513e1c4be73"></a>
- **M06-CAP-SPECIALTY-27d83513e1c4be73**: International Pediatric Rheumatology Registries
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-c5f40fec905e9d0d"></a>
- **M06-CAP-SPECIALTY-c5f40fec905e9d0d**: Pediatric rheumatology is modeled as multisystem medicine connected to immunology, nephrology, ophthalmology, dermatology, cardiology, pulmonology, neurology, rehabilitation and lifelong adult care.
  Origin: original 5050

<a id="M06-CAP-SPECIALTY-92d116f60c6bdad1"></a>
- **M06-CAP-SPECIALTY-92d116f60c6bdad1**: Provide structured longitudinal follow-up following pediatric traumatic brain injury and concussion.
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-75027cc3a17b341d"></a>
- **M06-CAP-SPECIALTY-75027cc3a17b341d**: Injury Date
  Origin: original 5094, original 5116

<a id="M06-CAP-SPECIALTY-4f616610844b14c7"></a>
- **M06-CAP-SPECIALTY-4f616610844b14c7**: Loss of Consciousness Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-61285a487de054c3"></a>
- **M06-CAP-SPECIALTY-61285a487de054c3**: Amnesia Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-1642254dc24a957e"></a>
- **M06-CAP-SPECIALTY-1642254dc24a957e**: School Impact
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-494d39fb0b935e0f"></a>
- **M06-CAP-SPECIALTY-494d39fb0b935e0f**: Imaging Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-e91c03431b8f087a"></a>
- **M06-CAP-SPECIALTY-e91c03431b8f087a**: Activity Restrictions Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-57d4439e0fae62e6"></a>
- **M06-CAP-SPECIALTY-57d4439e0fae62e6**: Return-to-Learn Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-bb43691ef67b266d"></a>
- **M06-CAP-SPECIALTY-bb43691ef67b266d**: Return-to-Activity Context
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-6cf3fc703296c5d4"></a>
- **M06-CAP-SPECIALTY-6cf3fc703296c5d4**: Recovery Timeline
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-db7083c3a47c5dda"></a>
- **M06-CAP-SPECIALTY-db7083c3a47c5dda**: Return decisions remain clinician-led and individualized.
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-f95fc3170b8834b7"></a>
- **M06-CAP-SPECIALTY-f95fc3170b8834b7**: Sports Medicine
  Origin: original 5094

<a id="M06-CAP-SPECIALTY-a08a94fcaa8f0965"></a>
- **M06-CAP-SPECIALTY-a08a94fcaa8f0965**: Provide the unified longitudinal architecture for pediatric neurosurgical care from prenatal and neonatal conditions through adolescence and transition to adult services.
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-b1235956e1ad05d1"></a>
- **M06-CAP-SPECIALTY-b1235956e1ad05d1**: Congenital Neurosurgical Conditions
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-0833a6eafd5d9f25"></a>
- **M06-CAP-SPECIALTY-0833a6eafd5d9f25**: Craniosynostosis Context
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-536720ec251c4bcc"></a>
- **M06-CAP-SPECIALTY-536720ec251c4bcc**: Brain and Spinal Tumors
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-74446be40a38acde"></a>
- **M06-CAP-SPECIALTY-74446be40a38acde**: Traumatic Brain Injury
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-e4451495851d4ad8"></a>
- **M06-CAP-SPECIALTY-e4451495851d4ad8**: Spinal Neurosurgery
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-6b9f807c203e9e3f"></a>
- **M06-CAP-SPECIALTY-6b9f807c203e9e3f**: Neuroendoscopy
  Origin: original 5101, original 5125

<a id="M06-CAP-SPECIALTY-46d45512f97e8a76"></a>
- **M06-CAP-SPECIALTY-46d45512f97e8a76**: Implanted Neurodevices
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-3a62165074b23223"></a>
- **M06-CAP-SPECIALTY-3a62165074b23223**: Perioperative Management
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-2effd76adc3afdd3"></a>
- **M06-CAP-SPECIALTY-2effd76adc3afdd3**: Device History
  Origin: original 5101

<a id="M06-CAP-SPECIALTY-c736106523040888"></a>
- **M06-CAP-SPECIALTY-c736106523040888**: Neurophysiology
  Origin: original 5101, original 5113

<a id="M06-CAP-SPECIALTY-b86d4b142cd32379"></a>
- **M06-CAP-SPECIALTY-b86d4b142cd32379**: Provide longitudinal management of hydrocephalus and clinically significant cerebrospinal fluid disorders.
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-94f62d92e2ebd8f0"></a>
- **M06-CAP-SPECIALTY-94f62d92e2ebd8f0**: Hydrocephalus Etiology
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-b183ed888e3179d6"></a>
- **M06-CAP-SPECIALTY-b183ed888e3179d6**: Age at Diagnosis
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-f25e44f876d884ec"></a>
- **M06-CAP-SPECIALTY-f25e44f876d884ec**: Head Circumference Context
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-3d786074e7045c5a"></a>
- **M06-CAP-SPECIALTY-3d786074e7045c5a**: Neurological Status
  Origin: original 5103, original 5116, original 5136

<a id="M06-CAP-SPECIALTY-06b312777bb9400b"></a>
- **M06-CAP-SPECIALTY-06b312777bb9400b**: Ventricular Imaging
  Origin: original 5103, original 5142

<a id="M06-CAP-SPECIALTY-fe16fd4152bfd8b6"></a>
- **M06-CAP-SPECIALTY-fe16fd4152bfd8b6**: CSF Diversion History
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-b566884146a996c0"></a>
- **M06-CAP-SPECIALTY-b566884146a996c0**: Shunt Context
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-b010bd438f308206"></a>
- **M06-CAP-SPECIALTY-b010bd438f308206**: Endoscopic Treatment Context
  Origin: original 5103

<a id="M06-CAP-SPECIALTY-877cf83a566b0f36"></a>
- **M06-CAP-SPECIALTY-877cf83a566b0f36**: Vision Context
  Origin: original 5103, original 5136

<a id="M06-CAP-SPECIALTY-ceb444a895ec2faf"></a>
- **M06-CAP-SPECIALTY-ceb444a895ec2faf**: Long-term Outcome
  Origin: original 5103, original 5139, original 5141

<a id="M06-CAP-SPECIALTY-ac8f2a0ab202bcb6"></a>
- **M06-CAP-SPECIALTY-ac8f2a0ab202bcb6**: Provide lifelong multidisciplinary management of neural tube defects and associated neurological complications.
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-e504a45ae84144da"></a>
- **M06-CAP-SPECIALTY-e504a45ae84144da**: Prenatal Diagnosis Context
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-30784238f952fc9e"></a>
- **M06-CAP-SPECIALTY-30784238f952fc9e**: Lesion Level
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-4ad74e6497f7d651"></a>
- **M06-CAP-SPECIALTY-4ad74e6497f7d651**: Surgical Closure
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-87ac89009bcd4da6"></a>
- **M06-CAP-SPECIALTY-87ac89009bcd4da6**: Hydrocephalus Context
  Origin: original 5107, original 5139

<a id="M06-CAP-SPECIALTY-18fc276ef698d80f"></a>
- **M06-CAP-SPECIALTY-18fc276ef698d80f**: Chiari Context
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-09f645ce7258dc08"></a>
- **M06-CAP-SPECIALTY-09f645ce7258dc08**: Orthopedic Context
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-9fee4aed7844900b"></a>
- **M06-CAP-SPECIALTY-9fee4aed7844900b**: Assistive Devices
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-fe636a77802b87c3"></a>
- **M06-CAP-SPECIALTY-fe636a77802b87c3**: Fetal Medicine Context
  Origin: original 5107

<a id="M06-CAP-SPECIALTY-0f6700eb2caa5552"></a>
- **M06-CAP-SPECIALTY-0f6700eb2caa5552**: Coordinate longitudinal evaluation and treatment of Chiari malformations and related craniovertebral junction disorders.
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-b2bd1325e4f03d92"></a>
- **M06-CAP-SPECIALTY-b2bd1325e4f03d92**: Malformation Type
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-b6f2ecffd99f35ad"></a>
- **M06-CAP-SPECIALTY-b6f2ecffd99f35ad**: Headache Context
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-0af9105482491edb"></a>
- **M06-CAP-SPECIALTY-0af9105482491edb**: Brainstem Symptoms Context
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-efa92b319bb60baa"></a>
- **M06-CAP-SPECIALTY-efa92b319bb60baa**: Syrinx Context
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-819cce0f8372b2a8"></a>
- **M06-CAP-SPECIALTY-819cce0f8372b2a8**: Surgical Indication Context
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-12f9b9b2857d74dd"></a>
- **M06-CAP-SPECIALTY-12f9b9b2857d74dd**: Symptom Response
  Origin: original 5108

<a id="M06-CAP-SPECIALTY-ba90d68814f0265e"></a>
- **M06-CAP-SPECIALTY-ba90d68814f0265e**: Provide longitudinal management of tethered spinal cord and congenital spinal dysraphism.
  Origin: original 5109

<a id="M06-CAP-SPECIALTY-4f829677593f52e7"></a>
- **M06-CAP-SPECIALTY-4f829677593f52e7**: Spinal Anatomy
  Origin: original 5109

<a id="M06-CAP-SPECIALTY-b28aaf6183b8b65b"></a>
- **M06-CAP-SPECIALTY-b28aaf6183b8b65b**: Orthopedic Changes
  Origin: original 5109

<a id="M06-CAP-SPECIALTY-d6f40384f4821023"></a>
- **M06-CAP-SPECIALTY-d6f40384f4821023**: Urodynamic Context
  Origin: original 5109

<a id="M06-CAP-SPECIALTY-c0942b69fe90e6ff"></a>
- **M06-CAP-SPECIALTY-c0942b69fe90e6ff**: Retethering Context
  Origin: original 5109

<a id="M06-CAP-SPECIALTY-07abde5ef127cb50"></a>
- **M06-CAP-SPECIALTY-07abde5ef127cb50**: Coordinate multidisciplinary care of craniosynostosis and complex craniofacial conditions involving neurosurgical treatment.
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-d6a75a338f1f8996"></a>
- **M06-CAP-SPECIALTY-d6a75a338f1f8996**: Syndromic Context
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-7287ce86ea94cd94"></a>
- **M06-CAP-SPECIALTY-7287ce86ea94cd94**: Head Shape
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-817a5d55245b8009"></a>
- **M06-CAP-SPECIALTY-817a5d55245b8009**: Ophthalmological Context
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-a1cb20d6138ef1d7"></a>
- **M06-CAP-SPECIALTY-a1cb20d6138ef1d7**: CT/Imaging Context
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-03c082a7efe6a3d7"></a>
- **M06-CAP-SPECIALTY-03c082a7efe6a3d7**: Craniofacial Reconstruction Context
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-84c46c32b4a79bd0"></a>
- **M06-CAP-SPECIALTY-84c46c32b4a79bd0**: Postoperative Follow-up
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-e34b504ba79e86bc"></a>
- **M06-CAP-SPECIALTY-e34b504ba79e86bc**: Dentistry/Orthodontics Context
  Origin: original 5110

<a id="M06-CAP-SPECIALTY-51e1a3d983c68f0d"></a>
- **M06-CAP-SPECIALTY-51e1a3d983c68f0d**: Developmental Pediatrics
  Origin: original 5110, original 5145, original 5175

<a id="M06-CAP-SPECIALTY-7471f1f6ee9300fe"></a>
- **M06-CAP-SPECIALTY-7471f1f6ee9300fe**: Coordinate surgical and multidisciplinary management of pediatric spinal cord and spinal canal tumors.
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-a04becd171370428"></a>
- **M06-CAP-SPECIALTY-a04becd171370428**: Tumor Location
  Origin: original 5112, original 5136, original 5137, original 5138, original 5139, original 5141

<a id="M06-CAP-SPECIALTY-a44fdb1cd54a8278"></a>
- **M06-CAP-SPECIALTY-a44fdb1cd54a8278**: Neurological Deficit
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-200007ab09a0ef0c"></a>
- **M06-CAP-SPECIALTY-200007ab09a0ef0c**: Bladder/Bowel Context
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-1e3b8a56bf261f5d"></a>
- **M06-CAP-SPECIALTY-1e3b8a56bf261f5d**: Neurophysiology Context
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-f53ba0c0214c2b5f"></a>
- **M06-CAP-SPECIALTY-f53ba0c0214c2b5f**: Procedure
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-ba6403d34b52aaa0"></a>
- **M06-CAP-SPECIALTY-ba6403d34b52aaa0**: Molecular Diagnosis
  Origin: original 5112, original 5150

<a id="M06-CAP-SPECIALTY-f5a4a52ce8737311"></a>
- **M06-CAP-SPECIALTY-f5a4a52ce8737311**: Oncology Context
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-9e7c041556678bf9"></a>
- **M06-CAP-SPECIALTY-9e7c041556678bf9**: Long-term Functional Outcome
  Origin: original 5112

<a id="M06-CAP-SPECIALTY-c5781c03cd1c48b6"></a>
- **M06-CAP-SPECIALTY-c5781c03cd1c48b6**: Coordinate multidisciplinary evaluation of children with drug-resistant epilepsy being considered for surgical treatment.
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-cb1102e87e0fcb35"></a>
- **M06-CAP-SPECIALTY-cb1102e87e0fcb35**: Epilepsy Diagnosis
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-def440fed3523ee0"></a>
- **M06-CAP-SPECIALTY-def440fed3523ee0**: Functional Imaging Context
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-0f3ba7fb32755016"></a>
- **M06-CAP-SPECIALTY-0f3ba7fb32755016**: Surgical Hypothesis
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-ff167fcc85cd841e"></a>
- **M06-CAP-SPECIALTY-ff167fcc85cd841e**: Multidisciplinary Conference
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-9ab2e9466ded4116"></a>
- **M06-CAP-SPECIALTY-9ab2e9466ded4116**: Procedure Options
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-32be91c8112aac45"></a>
- **M06-CAP-SPECIALTY-32be91c8112aac45**: Consent Context
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-a80701488019395b"></a>
- **M06-CAP-SPECIALTY-a80701488019395b**: Surgical Decision
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-e7a1917c164ec019"></a>
- **M06-CAP-SPECIALTY-e7a1917c164ec019**: Seizure Follow-up
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-fb845c1f65bc786c"></a>
- **M06-CAP-SPECIALTY-fb845c1f65bc786c**: Epileptology
  Origin: original 5113

<a id="M06-CAP-SPECIALTY-18efb1645c5f7c16"></a>
- **M06-CAP-SPECIALTY-18efb1645c5f7c16**: Coordinate pediatric neuromodulation and functional neurosurgical interventions.
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-05a873b93b365617"></a>
- **M06-CAP-SPECIALTY-05a873b93b365617**: Functional Disorder Context
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-d583a1b10ccc5cb9"></a>
- **M06-CAP-SPECIALTY-d583a1b10ccc5cb9**: Epilepsy Context
  Origin: original 5114, original 5143

<a id="M06-CAP-SPECIALTY-e76894d9c01aff38"></a>
- **M06-CAP-SPECIALTY-e76894d9c01aff38**: Movement Disorder Context
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-c408c924e62fd052"></a>
- **M06-CAP-SPECIALTY-c408c924e62fd052**: Spasticity Context
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-7e84509910349735"></a>
- **M06-CAP-SPECIALTY-7e84509910349735**: Device Type
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-45ee49e6c3c95aae"></a>
- **M06-CAP-SPECIALTY-45ee49e6c3c95aae**: Implantation
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-4620c18b754b1fe9"></a>
- **M06-CAP-SPECIALTY-4620c18b754b1fe9**: Device Programming Context
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-b7ff4a95f8d5477e"></a>
- **M06-CAP-SPECIALTY-b7ff4a95f8d5477e**: Battery Status Context
  Origin: original 5114

<a id="M06-CAP-SPECIALTY-b49ce234541b94f3"></a>
- **M06-CAP-SPECIALTY-b49ce234541b94f3**: Functional Outcome
  Origin: original 5114, original 5116, original 5143, original 5146

<a id="M06-CAP-SPECIALTY-4374499adfb84e03"></a>
- **M06-CAP-SPECIALTY-4374499adfb84e03**: Coordinate neurosurgical management and longitudinal outcomes following pediatric cranial trauma.
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-bdbb10b4bb575c49"></a>
- **M06-CAP-SPECIALTY-bdbb10b4bb575c49**: Skull Fracture Context
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-8ba44ee13342f461"></a>
- **M06-CAP-SPECIALTY-8ba44ee13342f461**: Intracranial Hemorrhage Context
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-b5c15aa3740dfa52"></a>
- **M06-CAP-SPECIALTY-b5c15aa3740dfa52**: Cerebral Injury Context
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-b159fac809f357aa"></a>
- **M06-CAP-SPECIALTY-b159fac809f357aa**: Seizure Context
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-bdf74ea48522bd3d"></a>
- **M06-CAP-SPECIALTY-bdf74ea48522bd3d**: Neurocognitive Follow-up
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-d63f8a6bbd7dd255"></a>
- **M06-CAP-SPECIALTY-d63f8a6bbd7dd255**: Trauma Surgery
  Origin: original 5116

<a id="M06-CAP-SPECIALTY-048fff153c19f995"></a>
- **M06-CAP-SPECIALTY-048fff153c19f995**: Coordinate pediatric intracranial bleeding cases requiring neurosurgical, hematological and critical-care management.
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-8cb3ea2ab9605a92"></a>
- **M06-CAP-SPECIALTY-8cb3ea2ab9605a92**: Hemorrhage Type
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-9b5712585c986636"></a>
- **M06-CAP-SPECIALTY-9b5712585c986636**: Anatomical Location
  Origin: original 5117, original 5140

<a id="M06-CAP-SPECIALTY-f1e80615e246bb6e"></a>
- **M06-CAP-SPECIALTY-f1e80615e246bb6e**: Symptom Onset
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-f886b631d243b2a8"></a>
- **M06-CAP-SPECIALTY-f886b631d243b2a8**: Coagulation Context
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-58e54e34d60e2d93"></a>
- **M06-CAP-SPECIALTY-58e54e34d60e2d93**: Hemophilia Context
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-f25802c9177e21ff"></a>
- **M06-CAP-SPECIALTY-f25802c9177e21ff**: Anticoagulation Context
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-87849adad564ee6f"></a>
- **M06-CAP-SPECIALTY-87849adad564ee6f**: Vascular Lesion Context
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-43b670f579471c86"></a>
- **M06-CAP-SPECIALTY-43b670f579471c86**: Hemostatic Therapy Context
  Origin: original 5117

<a id="M06-CAP-SPECIALTY-3ee44ccb334aa398"></a>
- **M06-CAP-SPECIALTY-3ee44ccb334aa398**: Follow-up Imaging
  Origin: original 5117, original 5118

<a id="M06-CAP-SPECIALTY-a1a9df860c126dac"></a>
- **M06-CAP-SPECIALTY-a1a9df860c126dac**: Neurological Outcome
  Origin: original 5117, original 5118, original 5139

<a id="M06-CAP-SPECIALTY-e4ca632bcd8b433a"></a>
- **M06-CAP-SPECIALTY-e4ca632bcd8b433a**: Provide longitudinal multidisciplinary management of pediatric neurovascular lesions.
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-3a1d82c7c987326b"></a>
- **M06-CAP-SPECIALTY-3a1d82c7c987326b**: Vascular Diagnosis
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-18972a05c0ec72cc"></a>
- **M06-CAP-SPECIALTY-18972a05c0ec72cc**: AVM Context
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-96588a0a0b4c4d06"></a>
- **M06-CAP-SPECIALTY-96588a0a0b4c4d06**: Aneurysm Context
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-66785f165a4152f7"></a>
- **M06-CAP-SPECIALTY-66785f165a4152f7**: Cavernous Malformation Context
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-70752501b0fb3985"></a>
- **M06-CAP-SPECIALTY-70752501b0fb3985**: Ischemic Event Context
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-8d08ed70f91be764"></a>
- **M06-CAP-SPECIALTY-8d08ed70f91be764**: Endovascular Treatment Context
  Origin: original 5118

<a id="M06-CAP-SPECIALTY-9bf2d71c1f79d1be"></a>
- **M06-CAP-SPECIALTY-9bf2d71c1f79d1be**: Coordinate diagnosis and management of neurosurgical wound, CNS and implanted-device infections.
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-ffd8e5e66d5c914a"></a>
- **M06-CAP-SPECIALTY-ffd8e5e66d5c914a**: Infection Site
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-07b84d24bd305b06"></a>
- **M06-CAP-SPECIALTY-07b84d24bd305b06**: Device Context
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-92cb13dc8c6f9aba"></a>
- **M06-CAP-SPECIALTY-92cb13dc8c6f9aba**: CSF Context
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-d02e2ba426488d02"></a>
- **M06-CAP-SPECIALTY-d02e2ba426488d02**: Resistance
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-195f0b7fc927067d"></a>
- **M06-CAP-SPECIALTY-195f0b7fc927067d**: Device Removal Context
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-23597216becf34ab"></a>
- **M06-CAP-SPECIALTY-23597216becf34ab**: Device Replacement Context
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-caba9a821fdbe995"></a>
- **M06-CAP-SPECIALTY-caba9a821fdbe995**: Infection Resolution
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-69ccb7c0750bdd62"></a>
- **M06-CAP-SPECIALTY-69ccb7c0750bdd62**: Long-term Device Status
  Origin: original 5119

<a id="M06-CAP-SPECIALTY-27d610857ad8453e"></a>
- **M06-CAP-SPECIALTY-27d610857ad8453e**: Serve as the master orchestration layer for the complete EDHT pediatric neurosurgery ecosystem.
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-8e2b793e4222891a"></a>
- **M06-CAP-SPECIALTY-8e2b793e4222891a**: Pediatric Neurosurgery
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-151c6d40bff57c65"></a>
- **M06-CAP-SPECIALTY-151c6d40bff57c65**: Neurosurgical Case Registry
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-5dc5237f294e7077"></a>
- **M06-CAP-SPECIALTY-5dc5237f294e7077**: Ventricular Shunts
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-07471184fd14f9e4"></a>
- **M06-CAP-SPECIALTY-07471184fd14f9e4**: Shunt Emergencies
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-0c69529fae561763"></a>
- **M06-CAP-SPECIALTY-0c69529fae561763**: Brain Tumor Surgery
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-12e27f50cbcb6ce8"></a>
- **M06-CAP-SPECIALTY-12e27f50cbcb6ce8**: Spinal Tumor Surgery
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-305bb4875fd75e37"></a>
- **M06-CAP-SPECIALTY-305bb4875fd75e37**: Neurostimulation
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-6e6c3392adf9755e"></a>
- **M06-CAP-SPECIALTY-6e6c3392adf9755e**: Implanted Devices
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-d79dafa6dee92347"></a>
- **M06-CAP-SPECIALTY-d79dafa6dee92347**: Neurotrauma
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-5335572a3f9d672a"></a>
- **M06-CAP-SPECIALTY-5335572a3f9d672a**: Intracranial Hemorrhage
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-e0f2e67444a69688"></a>
- **M06-CAP-SPECIALTY-e0f2e67444a69688**: Neurosurgical Infection
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-cf36ab5a2ca3d952"></a>
- **M06-CAP-SPECIALTY-cf36ab5a2ca3d952**: Intraoperative Monitoring
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-34dd58a5c6dbdc87"></a>
- **M06-CAP-SPECIALTY-34dd58a5c6dbdc87**: Neurosurgical Digital Twin
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-da36c9bca9fd2053"></a>
- **M06-CAP-SPECIALTY-da36c9bca9fd2053**: Surgical Navigation Context
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-b5ff4869a0a15c32"></a>
- **M06-CAP-SPECIALTY-b5ff4869a0a15c32**: Neurophysiology Integration
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-78f280edb448d581"></a>
- **M06-CAP-SPECIALTY-78f280edb448d581**: Remote Device Follow-up Context
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-3a61fd8be0c51040"></a>
- **M06-CAP-SPECIALTY-3a61fd8be0c51040**: Procedure Traceability
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-32dec2da08cb7ecc"></a>
- **M06-CAP-SPECIALTY-32dec2da08cb7ecc**: Implant Lifecycle Management
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-d90a28951ea31efe"></a>
- **M06-CAP-SPECIALTY-d90a28951ea31efe**: Imaging Timeline
  Origin: original 5125, original 5150

<a id="M06-CAP-SPECIALTY-ef01c421f4b1d9a2"></a>
- **M06-CAP-SPECIALTY-ef01c421f4b1d9a2**: Device Configuration History
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-e6d56542c1294263"></a>
- **M06-CAP-SPECIALTY-e6d56542c1294263**: Complication Registry
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-81b828cb8c9c4eaf"></a>
- **M06-CAP-SPECIALTY-81b828cb8c9c4eaf**: Surgical Outcome Monitoring
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-51c6262659eef2ce"></a>
- **M06-CAP-SPECIALTY-51c6262659eef2ce**: Emergency Device Information
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-ee2d198d39b466fa"></a>
- **M06-CAP-SPECIALTY-ee2d198d39b466fa**: Procedure Registry
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-811a47e2e2a2cbe3"></a>
- **M06-CAP-SPECIALTY-811a47e2e2a2cbe3**: Hydrocephalus Record
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-3e12cacfdb106756"></a>
- **M06-CAP-SPECIALTY-3e12cacfdb106756**: Shunt/Device Registry
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-0453d8a5156613cc"></a>
- **M06-CAP-SPECIALTY-0453d8a5156613cc**: Device Configuration
  Origin: original 5125, original 5142

<a id="M06-CAP-SPECIALTY-4ff0ed9b46b140f4"></a>
- **M06-CAP-SPECIALTY-4ff0ed9b46b140f4**: Complication Record
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-5e3b4ac27329d9e2"></a>
- **M06-CAP-SPECIALTY-5e3b4ac27329d9e2**: Emergency Device Passport
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-0c9a4a7d7f0e90f7"></a>
- **M06-CAP-SPECIALTY-0c9a4a7d7f0e90f7**: Neurology Integration
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-85814b68593d9698"></a>
- **M06-CAP-SPECIALTY-85814b68593d9698**: Advanced Neurosurgical AI
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-c2a8570fc57b088c"></a>
- **M06-CAP-SPECIALTY-c2a8570fc57b088c**: 3D Surgical Planning
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-4ca78423065419fd"></a>
- **M06-CAP-SPECIALTY-4ca78423065419fd**: Imaging Segmentation
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-5205e006d7f989dc"></a>
- **M06-CAP-SPECIALTY-5205e006d7f989dc**: Surgical Simulation
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-9e1b0ecc63cdde26"></a>
- **M06-CAP-SPECIALTY-9e1b0ecc63cdde26**: Advanced Device Telemetry
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-cdb220d4a343ee96"></a>
- **M06-CAP-SPECIALTY-cdb220d4a343ee96**: Predictive Device Failure Research
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-266bb72d4ebc4771"></a>
- **M06-CAP-SPECIALTY-266bb72d4ebc4771**: International Neurosurgery Registries
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-ec089e0dba0fee27"></a>
- **M06-CAP-SPECIALTY-ec089e0dba0fee27**: Pediatric neurosurgery is represented as a longitudinal surgical-neurological domain tightly connected to neurology, oncology, radiology, genetics, rehabilitation, intensive care and the lifelong EDHT patient record.
  Origin: original 5125

<a id="M06-CAP-SPECIALTY-650a16cb01c1bff4"></a>
- **M06-CAP-SPECIALTY-650a16cb01c1bff4**: Provide the unified longitudinal architecture for pediatric tumors of the central nervous system from initial presentation through diagnosis, multimodal treatment, survivorship and transition to adult care.
  Origin: original 5126

<a id="M06-CAP-SPECIALTY-f9623901823cb66e"></a>
- **M06-CAP-SPECIALTY-f9623901823cb66e**: CNS Tumor Diagnosis Registry
  Origin: original 5126, original 5150

<a id="M06-CAP-SPECIALTY-0aaf75edc413865e"></a>
- **M06-CAP-SPECIALTY-0aaf75edc413865e**: Tumor Localization
  Origin: original 5126

<a id="M06-CAP-SPECIALTY-5d97430d7c7575c8"></a>
- **M06-CAP-SPECIALTY-5d97430d7c7575c8**: Systemic Therapy
  Origin: original 5126, original 5137, original 5141, original 5147, original 5150

<a id="M06-CAP-SPECIALTY-ea1b4895867897fc"></a>
- **M06-CAP-SPECIALTY-ea1b4895867897fc**: Radiotherapy
  Origin: original 5126, original 5137, original 5138, original 5150

<a id="M06-CAP-SPECIALTY-9a0b471c59580799"></a>
- **M06-CAP-SPECIALTY-9a0b471c59580799**: Targeted Therapy
  Origin: original 5126, original 5150

<a id="M06-CAP-SPECIALTY-946c4600c5ef398f"></a>
- **M06-CAP-SPECIALTY-946c4600c5ef398f**: Clinical Trials Context
  Origin: original 5126

<a id="M06-CAP-SPECIALTY-69ba1f150bcf5324"></a>
- **M06-CAP-SPECIALTY-69ba1f150bcf5324**: Neurological Complications
  Origin: original 5126, original 5150

<a id="M06-CAP-SPECIALTY-8aba0684bbbd9e21"></a>
- **M06-CAP-SPECIALTY-8aba0684bbbd9e21**: Neurocognitive Outcomes
  Origin: original 5126, original 5150

<a id="M06-CAP-SPECIALTY-2f9c5067ba843e98"></a>
- **M06-CAP-SPECIALTY-2f9c5067ba843e98**: Treatment Protocol
  Origin: original 5126

<a id="M06-CAP-SPECIALTY-3d738654eb6ce4c7"></a>
- **M06-CAP-SPECIALTY-3d738654eb6ce4c7**: Radiation Exposure
  Origin: original 5126, original 5144, original 5148

<a id="M06-CAP-SPECIALTY-a5dde5b39b89cc72"></a>
- **M06-CAP-SPECIALTY-a5dde5b39b89cc72**: Patient/Guardian Reported Outcomes
  Origin: original 5126

<a id="M06-CAP-SPECIALTY-e9233b3da7af75e3"></a>
- **M06-CAP-SPECIALTY-e9233b3da7af75e3**: Connect morphology, immunophenotype and molecular findings into a traceable integrated CNS tumor diagnosis.
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-a6626f2e0ddb97f1"></a>
- **M06-CAP-SPECIALTY-a6626f2e0ddb97f1**: Specimen Registry
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-6a6de5b751ae8320"></a>
- **M06-CAP-SPECIALTY-6a6de5b751ae8320**: Surgical Source
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-b1883149d3cad31f"></a>
- **M06-CAP-SPECIALTY-b1883149d3cad31f**: Tumor Morphology
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-32c488e1a82f5c54"></a>
- **M06-CAP-SPECIALTY-32c488e1a82f5c54**: Immunohistochemistry
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-dd39732965368f5b"></a>
- **M06-CAP-SPECIALTY-dd39732965368f5b**: Methylation Context
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-89d86cefcb1f5a4b"></a>
- **M06-CAP-SPECIALTY-89d86cefcb1f5a4b**: Genomic Findings
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-47194ea2825ec2b7"></a>
- **M06-CAP-SPECIALTY-47194ea2825ec2b7**: Molecular Alterations
  Origin: original 5129, original 5137

<a id="M06-CAP-SPECIALTY-a0fd5d47f3cb7ab8"></a>
- **M06-CAP-SPECIALTY-a0fd5d47f3cb7ab8**: Integrated Diagnosis
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-b38c9918c145c16c"></a>
- **M06-CAP-SPECIALTY-b38c9918c145c16c**: Diagnostic Version
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-94da3b2be342b8e8"></a>
- **M06-CAP-SPECIALTY-94da3b2be342b8e8**: Pathology Review
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-b5dd5eaa8e4c56d5"></a>
- **M06-CAP-SPECIALTY-b5dd5eaa8e4c56d5**: External Review Context
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-efdb1b37992742d9"></a>
- **M06-CAP-SPECIALTY-efdb1b37992742d9**: Reclassification History
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-dc0d643ae54f3d74"></a>
- **M06-CAP-SPECIALTY-dc0d643ae54f3d74**: Governance:
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-cac69018f2fe8175"></a>
- **M06-CAP-SPECIALTY-cac69018f2fe8175**: Source Laboratory
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-ecb235be5fb71965"></a>
- **M06-CAP-SPECIALTY-ecb235be5fb71965**: Reporting Pathologist
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-c849f8ce01221561"></a>
- **M06-CAP-SPECIALTY-c849f8ce01221561**: Report Version
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-068d1d257e92c5b3"></a>
- **M06-CAP-SPECIALTY-068d1d257e92c5b3**: Diagnostic Revision
  Origin: original 5129

<a id="M06-CAP-SPECIALTY-79b63a83bc7d1c15"></a>
- **M06-CAP-SPECIALTY-79b63a83bc7d1c15**: Audit Trail
  Origin: original 5129, original 5175

<a id="M06-CAP-SPECIALTY-1ecff57c8c9528d2"></a>
- **M06-CAP-SPECIALTY-1ecff57c8c9528d2**: Provide longitudinal multidisciplinary management of pediatric low-grade glioma.
  Origin: original 5136

<a id="M06-CAP-SPECIALTY-6ef20db51bb385a1"></a>
- **M06-CAP-SPECIALTY-6ef20db51bb385a1**: Observation Context
  Origin: original 5136

<a id="M06-CAP-SPECIALTY-d8a6bee5c7364e7b"></a>
- **M06-CAP-SPECIALTY-d8a6bee5c7364e7b**: Systemic Therapy Context
  Origin: original 5136, original 5140

<a id="M06-CAP-SPECIALTY-adb7c4076d318e3f"></a>
- **M06-CAP-SPECIALTY-adb7c4076d318e3f**: Targeted Therapy Context
  Origin: original 5136, original 5137, original 5141

<a id="M06-CAP-SPECIALTY-d695c0fb297fe93b"></a>
- **M06-CAP-SPECIALTY-d695c0fb297fe93b**: Endocrine Context
  Origin: original 5136, original 5138

<a id="M06-CAP-SPECIALTY-acf006089ced2ad7"></a>
- **M06-CAP-SPECIALTY-acf006089ced2ad7**: Tumor Growth Context
  Origin: original 5136

<a id="M06-CAP-SPECIALTY-0271c3b1900c657c"></a>
- **M06-CAP-SPECIALTY-0271c3b1900c657c**: Progression
  Origin: original 5136, original 5137

<a id="M06-CAP-SPECIALTY-0d20c4640dc9117b"></a>
- **M06-CAP-SPECIALTY-0d20c4640dc9117b**: Coordinate complex longitudinal care of aggressive pediatric glial tumors.
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-debaed762b9f77c2"></a>
- **M06-CAP-SPECIALTY-debaed762b9f77c2**: Integrated Molecular Diagnosis
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-53f789dceb87cd83"></a>
- **M06-CAP-SPECIALTY-53f789dceb87cd83**: Surgery Context
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-67b197bf95ce7d1e"></a>
- **M06-CAP-SPECIALTY-67b197bf95ce7d1e**: Clinical Trial Context
  Origin: original 5137, original 5147

<a id="M06-CAP-SPECIALTY-926202c521e8c70c"></a>
- **M06-CAP-SPECIALTY-926202c521e8c70c**: Symptom Burden
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-bd1eb02a34c04a5f"></a>
- **M06-CAP-SPECIALTY-bd1eb02a34c04a5f**: Supportive Care Context
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-acc470e38dbc861d"></a>
- **M06-CAP-SPECIALTY-acc470e38dbc861d**: Palliative Care Context
  Origin: original 5137

<a id="M06-CAP-SPECIALTY-5172546d945a4771"></a>
- **M06-CAP-SPECIALTY-5172546d945a4771**: Provide risk-adapted longitudinal management of pediatric medulloblastoma and related embryonal CNS tumors.
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-8e0e9a76230b069c"></a>
- **M06-CAP-SPECIALTY-8e0e9a76230b069c**: Molecular Group Context
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-26af1db35f574ce9"></a>
- **M06-CAP-SPECIALTY-26af1db35f574ce9**: Surgical Resection
  Origin: original 5138, original 5139

<a id="M06-CAP-SPECIALTY-0221f1b029c14d7f"></a>
- **M06-CAP-SPECIALTY-0221f1b029c14d7f**: CSF Staging Context
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-a53bf7686b245a51"></a>
- **M06-CAP-SPECIALTY-a53bf7686b245a51**: Spinal Imaging
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-499ea6e046c53604"></a>
- **M06-CAP-SPECIALTY-499ea6e046c53604**: Risk Classification Context
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-36cc25004d4e7daa"></a>
- **M06-CAP-SPECIALTY-36cc25004d4e7daa**: Hearing Context
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-406555680659411f"></a>
- **M06-CAP-SPECIALTY-406555680659411f**: Neurocognitive Context
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-cb8bb288cadbc4f7"></a>
- **M06-CAP-SPECIALTY-cb8bb288cadbc4f7**: Surveillance
  Origin: original 5138

<a id="M06-CAP-SPECIALTY-0d00fa38413819a5"></a>
- **M06-CAP-SPECIALTY-0d00fa38413819a5**: Audiology
  Origin: original 5138, original 5146

<a id="M06-CAP-SPECIALTY-aba091c023edda96"></a>
- **M06-CAP-SPECIALTY-aba091c023edda96**: Coordinate diagnosis, surgery, molecular classification and surveillance of pediatric ependymal tumors.
  Origin: original 5139

<a id="M06-CAP-SPECIALTY-6109a5d06de9a8ae"></a>
- **M06-CAP-SPECIALTY-6109a5d06de9a8ae**: Extent of Resection
  Origin: original 5139

<a id="M06-CAP-SPECIALTY-e8b180030e32af21"></a>
- **M06-CAP-SPECIALTY-e8b180030e32af21**: Radiotherapy Context
  Origin: original 5139, original 5140, original 5145

<a id="M06-CAP-SPECIALTY-7900d5ec96be47fb"></a>
- **M06-CAP-SPECIALTY-7900d5ec96be47fb**: CSF Device Context
  Origin: original 5139

<a id="M06-CAP-SPECIALTY-7cefc21ee789ce91"></a>
- **M06-CAP-SPECIALTY-7cefc21ee789ce91**: Surveillance Imaging
  Origin: original 5139

<a id="M06-CAP-SPECIALTY-258a01cf4c4cdc29"></a>
- **M06-CAP-SPECIALTY-258a01cf4c4cdc29**: Repeat Surgery
  Origin: original 5139, original 5147

<a id="M06-CAP-SPECIALTY-1b6dbd553cb7ff61"></a>
- **M06-CAP-SPECIALTY-1b6dbd553cb7ff61**: Coordinate tumors affecting the hypothalamic-pituitary and suprasellar region with neurological, endocrine and visual outcomes.
  Origin: original 5140

<a id="M06-CAP-SPECIALTY-0cabc60653ea9628"></a>
- **M06-CAP-SPECIALTY-0cabc60653ea9628**: Tumor Type
  Origin: original 5140

<a id="M06-CAP-SPECIALTY-129e44f2aabdb935"></a>
- **M06-CAP-SPECIALTY-129e44f2aabdb935**: Visual Fields Context
  Origin: original 5140, original 5141

<a id="M06-CAP-SPECIALTY-2d1f7d83c6ec5f8e"></a>
- **M06-CAP-SPECIALTY-2d1f7d83c6ec5f8e**: Pituitary Function
  Origin: original 5140, original 5144

<a id="M06-CAP-SPECIALTY-2bf4f3d60f105018"></a>
- **M06-CAP-SPECIALTY-2bf4f3d60f105018**: Hypothalamic Function Context
  Origin: original 5140

<a id="M06-CAP-SPECIALTY-28c08cdcdd5430f2"></a>
- **M06-CAP-SPECIALTY-28c08cdcdd5430f2**: Puberty
  Origin: original 5140, original 5144

<a id="M06-CAP-SPECIALTY-96d3c745cc13245f"></a>
- **M06-CAP-SPECIALTY-96d3c745cc13245f**: Weight Regulation Context
  Origin: original 5140

<a id="M06-CAP-SPECIALTY-9c48adadde620c3e"></a>
- **M06-CAP-SPECIALTY-9c48adadde620c3e**: Hormone Replacement
  Origin: original 5140, original 5144

<a id="M06-CAP-SPECIALTY-a9a7dd89fc718555"></a>
- **M06-CAP-SPECIALTY-a9a7dd89fc718555**: Synchronize tumor surveillance with visual function in children with optic pathway and related tumors.
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-fcfb95b9307c19a1"></a>
- **M06-CAP-SPECIALTY-fcfb95b9307c19a1**: Visual Acuity
  Origin: original 5141, original 5146

<a id="M06-CAP-SPECIALTY-5be2d6dec5ff1388"></a>
- **M06-CAP-SPECIALTY-5be2d6dec5ff1388**: Optic Nerve Context
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-8ff463a406d3bb14"></a>
- **M06-CAP-SPECIALTY-8ff463a406d3bb14**: Ophthalmic Imaging Context
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-c9445b86cdf6a9f5"></a>
- **M06-CAP-SPECIALTY-c9445b86cdf6a9f5**: Genetic Syndrome Context
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-699edb248a04f9f6"></a>
- **M06-CAP-SPECIALTY-699edb248a04f9f6**: Tumor Response
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-142d4a3b021eaf69"></a>
- **M06-CAP-SPECIALTY-142d4a3b021eaf69**: Visual Response
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-ab1ffac27deb7888"></a>
- **M06-CAP-SPECIALTY-ab1ffac27deb7888**: Visual Decline Context
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-e59e9c53f72dd350"></a>
- **M06-CAP-SPECIALTY-e59e9c53f72dd350**: Rehabilitation Context
  Origin: original 5141

<a id="M06-CAP-SPECIALTY-8fe9cf351e580175"></a>
- **M06-CAP-SPECIALTY-8fe9cf351e580175**: Connect tumor-related CSF disorders with neurosurgical device history and oncological treatment.
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-6df2b5c25e0ae7a6"></a>
- **M06-CAP-SPECIALTY-6df2b5c25e0ae7a6**: Tumor Context
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-6f900ecb4b25fb03"></a>
- **M06-CAP-SPECIALTY-6f900ecb4b25fb03**: External Drain Context
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-2470e7c2e38dcd11"></a>
- **M06-CAP-SPECIALTY-2470e7c2e38dcd11**: Shunt
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-f88b349e45dfdf31"></a>
- **M06-CAP-SPECIALTY-f88b349e45dfdf31**: ETV Context
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-a8d95b6b0fa55a70"></a>
- **M06-CAP-SPECIALTY-a8d95b6b0fa55a70**: Tumor Treatment Correlation
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-d3fbb0ba7a23096c"></a>
- **M06-CAP-SPECIALTY-d3fbb0ba7a23096c**: Current Device Status
  Origin: original 5142

<a id="M06-CAP-SPECIALTY-4b27d4d738609936"></a>
- **M06-CAP-SPECIALTY-4b27d4d738609936**: Track neurological complications associated with CNS tumors and their treatment.
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-39f8a0d68ad1ab99"></a>
- **M06-CAP-SPECIALTY-39f8a0d68ad1ab99**: Motor Deficit
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-1b5fcfcb1c91da75"></a>
- **M06-CAP-SPECIALTY-1b5fcfcb1c91da75**: Sensory Deficit
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-9f039f68a55d9868"></a>
- **M06-CAP-SPECIALTY-9f039f68a55d9868**: Cranial Nerve Deficit
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-496fede4c40c1485"></a>
- **M06-CAP-SPECIALTY-496fede4c40c1485**: Ataxia Context
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-36e66d57de9d96fe"></a>
- **M06-CAP-SPECIALTY-36e66d57de9d96fe**: Speech Context
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-94aeeb7b726774fb"></a>
- **M06-CAP-SPECIALTY-94aeeb7b726774fb**: Persistent Deficit
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-33bd9bf1bf119f52"></a>
- **M06-CAP-SPECIALTY-33bd9bf1bf119f52**: Epilepsy Platform
  Origin: original 5143

<a id="M06-CAP-SPECIALTY-54a4d8f58169a6ba"></a>
- **M06-CAP-SPECIALTY-54a4d8f58169a6ba**: Monitor endocrine and developmental consequences of CNS tumors and their treatment.
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-4f6ce302e9ff6e2f"></a>
- **M06-CAP-SPECIALTY-4f6ce302e9ff6e2f**: Thyroid Function
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-ee3bbc41677ac97e"></a>
- **M06-CAP-SPECIALTY-ee3bbc41677ac97e**: Adrenal Context
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-0dc84d87def7436a"></a>
- **M06-CAP-SPECIALTY-0dc84d87def7436a**: Gonadal Function Context
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-32b28030182c3a00"></a>
- **M06-CAP-SPECIALTY-32b28030182c3a00**: Water Balance Context
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-9086a5f2dc03ef12"></a>
- **M06-CAP-SPECIALTY-9086a5f2dc03ef12**: Metabolic Context
  Origin: original 5144

<a id="M06-CAP-SPECIALTY-ad3f8eee5103433f"></a>
- **M06-CAP-SPECIALTY-ad3f8eee5103433f**: Surgical Exposure
  Origin: original 5144, original 5148

<a id="M06-CAP-SPECIALTY-0d05114d2bcfc2d1"></a>
- **M06-CAP-SPECIALTY-0d05114d2bcfc2d1**: Track cognition, learning and educational function throughout and after pediatric CNS tumor treatment.
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-2e18d9b3e9da93ad"></a>
- **M06-CAP-SPECIALTY-2e18d9b3e9da93ad**: Baseline Cognitive Context
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-39e080a75ce99efa"></a>
- **M06-CAP-SPECIALTY-39e080a75ce99efa**: Attention
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-ee769b06b5ba7388"></a>
- **M06-CAP-SPECIALTY-ee769b06b5ba7388**: Memory
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-4284ba0130c9a1f1"></a>
- **M06-CAP-SPECIALTY-4284ba0130c9a1f1**: Processing Speed Context
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-226550f10d959ffe"></a>
- **M06-CAP-SPECIALTY-226550f10d959ffe**: Executive Function
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-2cdc52bf1d2f5303"></a>
- **M06-CAP-SPECIALTY-2cdc52bf1d2f5303**: Language
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-155f3959a4dcc572"></a>
- **M06-CAP-SPECIALTY-155f3959a4dcc572**: Academic Function
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-bf7af66959afb992"></a>
- **M06-CAP-SPECIALTY-bf7af66959afb992**: Neurosurgical Context
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-8c93fd021a349a50"></a>
- **M06-CAP-SPECIALTY-8c93fd021a349a50**: Neuropsychological Assessment
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-ba14a910db601d94"></a>
- **M06-CAP-SPECIALTY-ba14a910db601d94**: Educational Support
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-4d156d91f3a5ecb0"></a>
- **M06-CAP-SPECIALTY-4d156d91f3a5ecb0**: Longitudinal Outcome
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-b365441d020e9e61"></a>
- **M06-CAP-SPECIALTY-b365441d020e9e61**: Patient-centered Functions:
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-7f210c90b7e0fd8f"></a>
- **M06-CAP-SPECIALTY-7f210c90b7e0fd8f**: Accommodation Plan Context
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-c11a823dd8855ce4"></a>
- **M06-CAP-SPECIALTY-c11a823dd8855ce4**: Family-reported Function
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-760dfe8b7d0a148e"></a>
- **M06-CAP-SPECIALTY-760dfe8b7d0a148e**: Developmental Goal Tracking
  Origin: original 5145

<a id="M06-CAP-SPECIALTY-e8472818b2e3c81a"></a>
- **M06-CAP-SPECIALTY-e8472818b2e3c81a**: Provide longitudinal surveillance of treatment-related sensory impairment.
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-ac47bad8c14f3a0f"></a>
- **M06-CAP-SPECIALTY-ac47bad8c14f3a0f**: Baseline Hearing
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-cccfebfcb2718b58"></a>
- **M06-CAP-SPECIALTY-cccfebfcb2718b58**: Audiometry
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-2933fc7887b436a2"></a>
- **M06-CAP-SPECIALTY-2933fc7887b436a2**: Ototoxic Therapy Context
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-83b434c155b34570"></a>
- **M06-CAP-SPECIALTY-83b434c155b34570**: Radiation Context
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-b04b5968cffe28d3"></a>
- **M06-CAP-SPECIALTY-b04b5968cffe28d3**: Hearing Change
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-e1819c65fd12855c"></a>
- **M06-CAP-SPECIALTY-e1819c65fd12855c**: Hearing Device Context
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-6a2312cd4cc62122"></a>
- **M06-CAP-SPECIALTY-6a2312cd4cc62122**: Baseline Vision
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-09628cc79cb12d6f"></a>
- **M06-CAP-SPECIALTY-09628cc79cb12d6f**: Visual Field Context
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-14593afbb84916d4"></a>
- **M06-CAP-SPECIALTY-14593afbb84916d4**: Optic Pathway Context
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-7929369d835d6e0c"></a>
- **M06-CAP-SPECIALTY-7929369d835d6e0c**: Treatment-related Vision Change
  Origin: original 5146

<a id="M06-CAP-SPECIALTY-2574925833d1aecb"></a>
- **M06-CAP-SPECIALTY-2574925833d1aecb**: Create a traceable longitudinal pathway when pediatric CNS tumors recur or progress.
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-f38e2d7b4218da7b"></a>
- **M06-CAP-SPECIALTY-f38e2d7b4218da7b**: Original Diagnosis
  Origin: original 5147, original 5148

<a id="M06-CAP-SPECIALTY-cc10c6c35eee7d95"></a>
- **M06-CAP-SPECIALTY-cc10c6c35eee7d95**: Previous Treatments
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-4d5c7888b2f0e513"></a>
- **M06-CAP-SPECIALTY-4d5c7888b2f0e513**: Progression Date
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-4f0aeef7db9b625a"></a>
- **M06-CAP-SPECIALTY-4f0aeef7db9b625a**: Recurrence Site
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-9b1b674333acf511"></a>
- **M06-CAP-SPECIALTY-9b1b674333acf511**: Imaging Evidence
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-e37d8c02d9d5ae82"></a>
- **M06-CAP-SPECIALTY-e37d8c02d9d5ae82**: Pathology Context
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-11b994f0e61eda93"></a>
- **M06-CAP-SPECIALTY-11b994f0e61eda93**: Repeat Biopsy Context
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-b61ba35567ab2013"></a>
- **M06-CAP-SPECIALTY-b61ba35567ab2013**: Molecular Reassessment
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-5c4782289ebfca80"></a>
- **M06-CAP-SPECIALTY-5c4782289ebfca80**: Resistance Context
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-ffe21dd7fb1692c8"></a>
- **M06-CAP-SPECIALTY-ffe21dd7fb1692c8**: Multidisciplinary Review
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-8bccbb0c06a61b2e"></a>
- **M06-CAP-SPECIALTY-8bccbb0c06a61b2e**: Re-irradiation Context
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-d76ef10987aa4333"></a>
- **M06-CAP-SPECIALTY-d76ef10987aa4333**: Each disease episode remains linked to the original tumor while preserving diagnostic and molecular evolution over time.
  Origin: original 5147

<a id="M06-CAP-SPECIALTY-abcbc72228dc2b24"></a>
- **M06-CAP-SPECIALTY-abcbc72228dc2b24**: Provide lifelong risk-based follow-up for survivors of pediatric CNS tumors.
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-0153fd24871adcda"></a>
- **M06-CAP-SPECIALTY-0153fd24871adcda**: Treatment Summary
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-3d455b7f1446ba3a"></a>
- **M06-CAP-SPECIALTY-3d455b7f1446ba3a**: Chemotherapy Exposure
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-e8c4f8a573c0be16"></a>
- **M06-CAP-SPECIALTY-e8c4f8a573c0be16**: Endocrine Risk
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-12a5cc2b3b95a79e"></a>
- **M06-CAP-SPECIALTY-12a5cc2b3b95a79e**: Neurocognitive Risk
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-acb6f341a96a5c2d"></a>
- **M06-CAP-SPECIALTY-acb6f341a96a5c2d**: Hearing Risk
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-83972bea531c5ae8"></a>
- **M06-CAP-SPECIALTY-83972bea531c5ae8**: Vision Risk
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-f49a449a67f0af0a"></a>
- **M06-CAP-SPECIALTY-f49a449a67f0af0a**: Cardiovascular Context
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-6f9b419d777c0045"></a>
- **M06-CAP-SPECIALTY-6f9b419d777c0045**: Cerebrovascular Context
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-3e2e1272f2bd2b07"></a>
- **M06-CAP-SPECIALTY-3e2e1272f2bd2b07**: Secondary Malignancy Context
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-6035f6d2e3692509"></a>
- **M06-CAP-SPECIALTY-6035f6d2e3692509**: Neurological Disability
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-87d49b942cdee5c2"></a>
- **M06-CAP-SPECIALTY-87d49b942cdee5c2**: Surveillance Schedule
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-dec05babbcd46312"></a>
- **M06-CAP-SPECIALTY-dec05babbcd46312**: Survivorship Functions:
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-557a5a59c8be66cd"></a>
- **M06-CAP-SPECIALTY-557a5a59c8be66cd**: Personalized Follow-up Plan
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-900b2afc0aae722b"></a>
- **M06-CAP-SPECIALTY-900b2afc0aae722b**: Treatment Exposure Passport
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-08d9baae1f5f15c7"></a>
- **M06-CAP-SPECIALTY-08d9baae1f5f15c7**: Screening Due
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-a837a6dd2fedf7bc"></a>
- **M06-CAP-SPECIALTY-a837a6dd2fedf7bc**: Screening Overdue
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-6e0d9357d7b2c745"></a>
- **M06-CAP-SPECIALTY-6e0d9357d7b2c745**: Adult-care Handover
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-c247e57e35626496"></a>
- **M06-CAP-SPECIALTY-c247e57e35626496**: Long-term Outcome Registry
  Origin: original 5148

<a id="M06-CAP-SPECIALTY-44e174f9c20357c6"></a>
- **M06-CAP-SPECIALTY-44e174f9c20357c6**: Serve as the master orchestration layer for the complete EDHT pediatric neuro-oncology ecosystem.
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-c99e85b8bd384a40"></a>
- **M06-CAP-SPECIALTY-c99e85b8bd384a40**: CNS Tumor Registry
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-15661d434c7e4d5d"></a>
- **M06-CAP-SPECIALTY-15661d434c7e4d5d**: Diagnostic Timeline
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-f745d9ea8fb3c2d2"></a>
- **M06-CAP-SPECIALTY-f745d9ea8fb3c2d2**: Low-grade Glioma
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-bacae05ef4cdf8a9"></a>
- **M06-CAP-SPECIALTY-bacae05ef4cdf8a9**: High-grade Glioma
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-f24254d01cf15ca6"></a>
- **M06-CAP-SPECIALTY-f24254d01cf15ca6**: Diffuse Midline Tumors
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-9c426cd481a14e8c"></a>
- **M06-CAP-SPECIALTY-9c426cd481a14e8c**: Embryonal Tumors
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-d44090c1862f3db0"></a>
- **M06-CAP-SPECIALTY-d44090c1862f3db0**: Sellar/Suprasellar Tumors
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-2d820e6e1e21e980"></a>
- **M06-CAP-SPECIALTY-2d820e6e1e21e980**: Optic Pathway Tumors
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-efc3f899855cc582"></a>
- **M06-CAP-SPECIALTY-efc3f899855cc582**: Endocrine Late Effects
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-d493e52fee1524f4"></a>
- **M06-CAP-SPECIALTY-d493e52fee1524f4**: Sensory Toxicity
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-52a315c01ef5b7ab"></a>
- **M06-CAP-SPECIALTY-52a315c01ef5b7ab**: CNS Tumor Digital Twin
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-efdf32dbdd82c199"></a>
- **M06-CAP-SPECIALTY-efdf32dbdd82c199**: Pathology Integration
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-0b0c0d84ac035fa4"></a>
- **M06-CAP-SPECIALTY-0b0c0d84ac035fa4**: Treatment Exposure Modeling
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-5c6a62070f3e5850"></a>
- **M06-CAP-SPECIALTY-5c6a62070f3e5850**: Tumor Passport
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-9170fa083f470ab5"></a>
- **M06-CAP-SPECIALTY-9170fa083f470ab5**: Unified Neuro-Oncology Timeline
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-13df090db8ca7caa"></a>
- **M06-CAP-SPECIALTY-13df090db8ca7caa**: Integrated Tumor Diagnosis
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-d533e12cc861433c"></a>
- **M06-CAP-SPECIALTY-d533e12cc861433c**: Imaging and Lesion Tracking
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-06337e04178169d0"></a>
- **M06-CAP-SPECIALTY-06337e04178169d0**: Molecular Evolution Tracking
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-a935e9d92bdb2e89"></a>
- **M06-CAP-SPECIALTY-a935e9d92bdb2e89**: Treatment Protocol Traceability
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-8c44ca290c576465"></a>
- **M06-CAP-SPECIALTY-8c44ca290c576465**: Radiation Exposure History
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-0b54b69d0340343f"></a>
- **M06-CAP-SPECIALTY-0b54b69d0340343f**: Toxicity Surveillance
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-5ec2cb31574591db"></a>
- **M06-CAP-SPECIALTY-5ec2cb31574591db**: Neurocognitive Monitoring
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-3b8829bc5da3cfb4"></a>
- **M06-CAP-SPECIALTY-3b8829bc5da3cfb4**: Survivorship Planning
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-5118a4bfbe4c8da5"></a>
- **M06-CAP-SPECIALTY-5118a4bfbe4c8da5**: Multidisciplinary Tumor Board Support
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-b7c0c93f8f20a9ab"></a>
- **M06-CAP-SPECIALTY-b7c0c93f8f20a9ab**: Consent/Assent Management
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-1c85ef59f2eda3d0"></a>
- **M06-CAP-SPECIALTY-1c85ef59f2eda3d0**: Integrated Pathology Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-0575f59f5d8153c1"></a>
- **M06-CAP-SPECIALTY-0575f59f5d8153c1**: Surgical Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-e5d1859e8d17e494"></a>
- **M06-CAP-SPECIALTY-e5d1859e8d17e494**: Systemic Treatment Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-0665b17787275fe4"></a>
- **M06-CAP-SPECIALTY-0665b17787275fe4**: Radiotherapy Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-87f99735d0c094c3"></a>
- **M06-CAP-SPECIALTY-87f99735d0c094c3**: Toxicity Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-bdc1910c6d7729a8"></a>
- **M06-CAP-SPECIALTY-bdc1910c6d7729a8**: Recurrence Record
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-ed431d1211485167"></a>
- **M06-CAP-SPECIALTY-ed431d1211485167**: Survivorship Plan
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-57af62599e1a3ae5"></a>
- **M06-CAP-SPECIALTY-57af62599e1a3ae5**: Advanced Neuro-Oncology AI
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-b7d725ff54e6ef83"></a>
- **M06-CAP-SPECIALTY-b7d725ff54e6ef83**: Automated Volumetric Imaging
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-811ff19a1857c663"></a>
- **M06-CAP-SPECIALTY-811ff19a1857c663**: Radiomics Research
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-659dd9682a6bc165"></a>
- **M06-CAP-SPECIALTY-659dd9682a6bc165**: Molecular Evolution Analytics
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-babf5efe7eb750f2"></a>
- **M06-CAP-SPECIALTY-babf5efe7eb750f2**: Precision Therapy Intelligence
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-531b8519900ca14c"></a>
- **M06-CAP-SPECIALTY-531b8519900ca14c**: Advanced Survivorship Prediction
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-ae4eaa9d091a6cd4"></a>
- **M06-CAP-SPECIALTY-ae4eaa9d091a6cd4**: International CNS Tumor Registries
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-d15fab60ba4e3472"></a>
- **M06-CAP-SPECIALTY-d15fab60ba4e3472**: Clinical Trial Infrastructure
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-ebb75b5a25e2cfe6"></a>
- **M06-CAP-SPECIALTY-ebb75b5a25e2cfe6**: Pediatric neuro-oncology remains one continuous multidisciplinary domain connecting oncology, neurosurgery, neurology, pathology, genomics, radiology, endocrinology, rehabilitation and lifelong survivorship rather than fragmenting the child into separate specialty records.
  Origin: original 5150

<a id="M06-CAP-SPECIALTY-ba62fe62301c47f9"></a>
- **M06-CAP-SPECIALTY-ba62fe62301c47f9**: Provide a unified longitudinal architecture for pediatric and adolescent mental health across prevention, screening, assessment, treatment, crisis care, rehabilitation and transition into adult services.
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-a99d30a4f8535a1f"></a>
- **M06-CAP-SPECIALTY-a99d30a4f8535a1f**: Clinical Psychology
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-4360a8760b29513b"></a>
- **M06-CAP-SPECIALTY-4360a8760b29513b**: Behavioral Health
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-c93edb6f8db59749"></a>
- **M06-CAP-SPECIALTY-c93edb6f8db59749**: Neurodevelopmental Mental Health
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-9050086848bdc172"></a>
- **M06-CAP-SPECIALTY-9050086848bdc172**: Emotional Regulation
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-30cc8661dd98b9ed"></a>
- **M06-CAP-SPECIALTY-30cc8661dd98b9ed**: Trauma-related Disorders
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-8b6073cfe166f924"></a>
- **M06-CAP-SPECIALTY-8b6073cfe166f924**: Obsessive-Compulsive Spectrum
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-3f120f7031e353fa"></a>
- **M06-CAP-SPECIALTY-3f120f7031e353fa**: Eating Disorder Context
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-fbb741516964708b"></a>
- **M06-CAP-SPECIALTY-fbb741516964708b**: Psychotic Disorders
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-2bbe46610be0b69d"></a>
- **M06-CAP-SPECIALTY-2bbe46610be0b69d**: Sleep-Psychiatry Context
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-7abe998f34b56aaa"></a>
- **M06-CAP-SPECIALTY-7abe998f34b56aaa**: Substance-use Context
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-99edf112accc73ae"></a>
- **M06-CAP-SPECIALTY-99edf112accc73ae**: Family Function
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-74bb2ffc32d68dc6"></a>
- **M06-CAP-SPECIALTY-74bb2ffc32d68dc6**: Screening Assessments
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-055b4e4f7f3ca0f5"></a>
- **M06-CAP-SPECIALTY-055b4e4f7f3ca0f5**: Structured Clinical Assessments
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-7bf44d6f2c07e7d7"></a>
- **M06-CAP-SPECIALTY-7bf44d6f2c07e7d7**: Crisis History
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-2f32360d7cc0a194"></a>
- **M06-CAP-SPECIALTY-2f32360d7cc0a194**: Data Model:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-8eb1decc92fcf777"></a>
- **M06-CAP-SPECIALTY-8eb1decc92fcf777**: MentalHealthEpisode
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-34406fdef3d3e7eb"></a>
- **M06-CAP-SPECIALTY-34406fdef3d3e7eb**: Symptom
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-455ef3285622cf7d"></a>
- **M06-CAP-SPECIALTY-455ef3285622cf7d**: Assessment
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-2963c0c33f9b2b0e"></a>
- **M06-CAP-SPECIALTY-2963c0c33f9b2b0e**: RiskAssessment
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-daf8e58134279bda"></a>
- **M06-CAP-SPECIALTY-daf8e58134279bda**: TherapyEpisode
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-f5fbb19867f94cb8"></a>
- **M06-CAP-SPECIALTY-f5fbb19867f94cb8**: MedicationEpisode
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-195fb09abf958358"></a>
- **M06-CAP-SPECIALTY-195fb09abf958358**: CrisisEpisode
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-9c1c88f597f92c16"></a>
- **M06-CAP-SPECIALTY-9c1c88f597f92c16**: FunctionalStatus
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-94883871aa83c9ae"></a>
- **M06-CAP-SPECIALTY-94883871aa83c9ae**: SchoolContext
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-5640167168b12b96"></a>
- **M06-CAP-SPECIALTY-5640167168b12b96**: FamilyContext
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-e5d112478b5f04ea"></a>
- **M06-CAP-SPECIALTY-e5d112478b5f04ea**: FollowUpPlan
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-d0c148d59fb3a657"></a>
- **M06-CAP-SPECIALTY-d0c148d59fb3a657**: Clinical Workflows:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-6062fc4ad93f7f9e"></a>
- **M06-CAP-SPECIALTY-6062fc4ad93f7f9e**: Screening → Assessment → Diagnosis → Care Plan
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-87f4af9b082cf146"></a>
- **M06-CAP-SPECIALTY-87f4af9b082cf146**: Referral → Specialist Review → Treatment
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-1eee67091adf98d2"></a>
- **M06-CAP-SPECIALTY-1eee67091adf98d2**: Crisis → Safety Assessment → Escalation
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-1fb993255b335230"></a>
- **M06-CAP-SPECIALTY-1fb993255b335230**: Treatment → Monitoring → Outcome
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-4a58c774919c7946"></a>
- **M06-CAP-SPECIALTY-4a58c774919c7946**: Pediatric Care → Transition Planning → Adult Care
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-77f048e378962928"></a>
- **M06-CAP-SPECIALTY-77f048e378962928**: Automation:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-c359438731a4c20a"></a>
- **M06-CAP-SPECIALTY-c359438731a4c20a**: Follow-up Scheduling
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-77b9c856fcb411b6"></a>
- **M06-CAP-SPECIALTY-77b9c856fcb411b6**: Assessment Due Detection
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-992b830a3b8da560"></a>
- **M06-CAP-SPECIALTY-992b830a3b8da560**: Treatment-plan Review
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-05ca296e815070bc"></a>
- **M06-CAP-SPECIALTY-05ca296e815070bc**: Transition Readiness Tracking
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-d3e66e9cbbbb8d24"></a>
- **M06-CAP-SPECIALTY-d3e66e9cbbbb8d24**: Alerts:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-97c78bc159c909a1"></a>
- **M06-CAP-SPECIALTY-97c78bc159c909a1**: Clinician-defined Urgent Review
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-7d4c16470b5d7592"></a>
- **M06-CAP-SPECIALTY-7d4c16470b5d7592**: Significant Documented Deterioration
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-dcebdf7f6f2034b6"></a>
- **M06-CAP-SPECIALTY-dcebdf7f6f2034b6**: Missed High-priority Follow-up
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-affb0fa92c1a22b4"></a>
- **M06-CAP-SPECIALTY-affb0fa92c1a22b4**: Medication Monitoring Gap
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-94581410568a9830"></a>
- **M06-CAP-SPECIALTY-94581410568a9830**: Crisis-plan Review Due
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-290ee40abd88fc47"></a>
- **M06-CAP-SPECIALTY-290ee40abd88fc47**: Symptom Journaling
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-8b883f35c2426937"></a>
- **M06-CAP-SPECIALTY-8b883f35c2426937**: Appointment Preparation
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-0f49b0b6b64e2848"></a>
- **M06-CAP-SPECIALTY-0f49b0b6b64e2848**: Clinician-approved Educational Content
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-f808d9739fbfab24"></a>
- **M06-CAP-SPECIALTY-f808d9739fbfab24**: Treatment-plan Visibility
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-41d988e402b1f371"></a>
- **M06-CAP-SPECIALTY-41d988e402b1f371**: Consent-aware Guardian Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-dc20bc176bdee4c8"></a>
- **M06-CAP-SPECIALTY-dc20bc176bdee4c8**: Permissions:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-bc7569cac34a41dd"></a>
- **M06-CAP-SPECIALTY-bc7569cac34a41dd**: Pediatric Patient Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-212c0dd343840434"></a>
- **M06-CAP-SPECIALTY-212c0dd343840434**: Guardian Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-8f8d854043c86203"></a>
- **M06-CAP-SPECIALTY-8f8d854043c86203**: Clinician Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-2ba1bde7e2417ba3"></a>
- **M06-CAP-SPECIALTY-2ba1bde7e2417ba3**: Mental-health Specialist Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-53fdcd3a56f144a6"></a>
- **M06-CAP-SPECIALTY-53fdcd3a56f144a6**: Emergency Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-56330f1fe7b76f33"></a>
- **M06-CAP-SPECIALTY-56330f1fe7b76f33**: Sensitive-data Segmentation
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-d9209d12def12ae9"></a>
- **M06-CAP-SPECIALTY-d9209d12def12ae9**: Audit:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-c1138ccb6788e616"></a>
- **M06-CAP-SPECIALTY-c1138ccb6788e616**: Record Access
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-45d9eba5a0215ad3"></a>
- **M06-CAP-SPECIALTY-45d9eba5a0215ad3**: Record Modification
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-d83d148729abcf0f"></a>
- **M06-CAP-SPECIALTY-d83d148729abcf0f**: Consent Changes
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-e89241e07ced79b8"></a>
- **M06-CAP-SPECIALTY-e89241e07ced79b8**: Guardian-access Changes
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-5d5e5c355649f372"></a>
- **M06-CAP-SPECIALTY-5d5e5c355649f372**: Emergency-access Events
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-77fb8ef2bf85b427"></a>
- **M06-CAP-SPECIALTY-77fb8ef2bf85b427**: Interoperability:
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-8cef79dd19125e68"></a>
- **M06-CAP-SPECIALTY-8cef79dd19125e68**: FHIR-aligned Mental Health Data
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-57eb71ab56f1077b"></a>
- **M06-CAP-SPECIALTY-57eb71ab56f1077b**: School Health Context
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-29625f870073843c"></a>
- **M06-CAP-SPECIALTY-29625f870073843c**: Longitudinal Summary
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-7da3f1171d69a59d"></a>
- **M06-CAP-SPECIALTY-7da3f1171d69a59d**: Symptom Trend Support
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-a1adcdac60b90b59"></a>
- **M06-CAP-SPECIALTY-a1adcdac60b90b59**: Clinical-data Organization
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-e484fc2e57e6b757"></a>
- **M06-CAP-SPECIALTY-e484fc2e57e6b757**: AI Safety:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-c34b58ae1c192bc1"></a>
- **M06-CAP-SPECIALTY-c34b58ae1c192bc1**: AI cannot independently establish psychiatric diagnosis, prescribe medication, determine involuntary treatment or replace emergency clinical assessment.
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-920a1d230724ecf1"></a>
- **M06-CAP-SPECIALTY-920a1d230724ecf1**: MVP:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-1d213bc7bdb796a0"></a>
- **M06-CAP-SPECIALTY-1d213bc7bdb796a0**: Assessment Record
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-3283a4ddae746744"></a>
- **M06-CAP-SPECIALTY-3283a4ddae746744**: Therapy Record
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-d6b46ccffdb411fa"></a>
- **M06-CAP-SPECIALTY-d6b46ccffdb411fa**: Crisis/Safety Record
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-0be00b0de4c7cc6e"></a>
- **M06-CAP-SPECIALTY-0be00b0de4c7cc6e**: Consent
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-983acd8632b63913"></a>
- **M06-CAP-SPECIALTY-983acd8632b63913**: Audit
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-e89fda53b14e31a7"></a>
- **M06-CAP-SPECIALTY-e89fda53b14e31a7**: Expansion:
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-0d49c5fcc66c37b9"></a>
- **M06-CAP-SPECIALTY-0d49c5fcc66c37b9**: Advanced Outcome Analytics
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-12f9c98ed20660ed"></a>
- **M06-CAP-SPECIALTY-12f9c98ed20660ed**: Digital Phenotyping Research
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-e8f0730b4edd2baf"></a>
- **M06-CAP-SPECIALTY-e8f0730b4edd2baf**: Multimodal AI
  Origin: original 5151

<a id="M06-CAP-SPECIALTY-a79a53d65529674f"></a>
- **M06-CAP-SPECIALTY-a79a53d65529674f**: Population Mental-health Analytics
  Origin: original 5151, original 5175

<a id="M06-CAP-SPECIALTY-09d8c918313e488b"></a>
- **M06-CAP-SPECIALTY-09d8c918313e488b**: Serve as the master orchestration layer connecting pediatric psychiatry, psychology, behavioral health and neurodevelopment with the broader EDHT ecosystem.
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-9ceeb65fe247f902"></a>
- **M06-CAP-SPECIALTY-9ceeb65fe247f902**: Mental Health Screening
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-58dc00ccd09de1d3"></a>
- **M06-CAP-SPECIALTY-58dc00ccd09de1d3**: Anxiety
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-9f8a8901a1b3b5aa"></a>
- **M06-CAP-SPECIALTY-9f8a8901a1b3b5aa**: Depression
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-3b4dcdc59a2f6f37"></a>
- **M06-CAP-SPECIALTY-3b4dcdc59a2f6f37**: OCD
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-a791aa32e1f36dc1"></a>
- **M06-CAP-SPECIALTY-a791aa32e1f36dc1**: Trauma-related Care
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-9fa84fe840eeef37"></a>
- **M06-CAP-SPECIALTY-9fa84fe840eeef37**: Autism-related Mental Health
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-12b6c9db08e2f072"></a>
- **M06-CAP-SPECIALTY-12b6c9db08e2f072**: Eating-related Psychiatry
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-926974e7424daa49"></a>
- **M06-CAP-SPECIALTY-926974e7424daa49**: Sleep-Psychiatry
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-934fd969f3955e1f"></a>
- **M06-CAP-SPECIALTY-934fd969f3955e1f**: Substance-use Care
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-8260fd411d673a3b"></a>
- **M06-CAP-SPECIALTY-8260fd411d673a3b**: Inpatient Psychiatry
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-e9b5c20a4b0cd241"></a>
- **M06-CAP-SPECIALTY-e9b5c20a4b0cd241**: Consent and Confidentiality
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-60e1c7608a31e9de"></a>
- **M06-CAP-SPECIALTY-60e1c7608a31e9de**: Digital Twin Components:
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-00e034434245d82a"></a>
- **M06-CAP-SPECIALTY-00e034434245d82a**: Mental-health Timeline
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-50837e09518df7e8"></a>
- **M06-CAP-SPECIALTY-50837e09518df7e8**: Symptom Trajectory
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-bb1f33938f899a6e"></a>
- **M06-CAP-SPECIALTY-bb1f33938f899a6e**: Medication Response
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-1d4af67e0816bb7f"></a>
- **M06-CAP-SPECIALTY-1d4af67e0816bb7f**: Mental Health Passport:
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-bc6faa9f8cef98df"></a>
- **M06-CAP-SPECIALTY-bc6faa9f8cef98df**: Clinically Confirmed Diagnoses
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-a46c73c34db799e5"></a>
- **M06-CAP-SPECIALTY-a46c73c34db799e5**: Current Medication
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-98d6e3484e041ce5"></a>
- **M06-CAP-SPECIALTY-98d6e3484e041ce5**: Significant Medication Reactions
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-0a0316b0f7b7b489"></a>
- **M06-CAP-SPECIALTY-0a0316b0f7b7b489**: Current Care Team
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-0c9b80dfd652ab6c"></a>
- **M06-CAP-SPECIALTY-0c9b80dfd652ab6c**: Clinician-approved Crisis/Safety Information
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-bc560175f5b9014f"></a>
- **M06-CAP-SPECIALTY-bc560175f5b9014f**: Communication Needs
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-b65f4f2738a43616"></a>
- **M06-CAP-SPECIALTY-b65f4f2738a43616**: Relevant Functional Baseline
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-35c9d991c22265f3"></a>
- **M06-CAP-SPECIALTY-35c9d991c22265f3**: Follow-up Requirements
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-ae2f6238dadc8401"></a>
- **M06-CAP-SPECIALTY-ae2f6238dadc8401**: Unified Mental-health Timeline
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-daa7be8430bbeb23"></a>
- **M06-CAP-SPECIALTY-daa7be8430bbeb23**: Granular Permissions
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-1ec3ed25fa556433"></a>
- **M06-CAP-SPECIALTY-1ec3ed25fa556433**: Consent/Assent
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-fa5cac5be72b867d"></a>
- **M06-CAP-SPECIALTY-fa5cac5be72b867d**: Guardian-access Management
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-3b75f6aa59cab1a7"></a>
- **M06-CAP-SPECIALTY-3b75f6aa59cab1a7**: Therapy Coordination
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-289442c728822005"></a>
- **M06-CAP-SPECIALTY-289442c728822005**: Crisis Continuity
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-20c2557700c65249"></a>
- **M06-CAP-SPECIALTY-20c2557700c65249**: Outcome Monitoring
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-84c9f11d93ed5998"></a>
- **M06-CAP-SPECIALTY-84c9f11d93ed5998**: Multidisciplinary Collaboration
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-a26b96ccea27f821"></a>
- **M06-CAP-SPECIALTY-a26b96ccea27f821**: School Health where authorized
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-acfb2a015f1922d1"></a>
- **M06-CAP-SPECIALTY-acfb2a015f1922d1**: Adult Mental Health
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-f3f93d9e1c04a910"></a>
- **M06-CAP-SPECIALTY-f3f93d9e1c04a910**: Longitudinal Clinical Summary
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-303fa28c4881e06d"></a>
- **M06-CAP-SPECIALTY-303fa28c4881e06d**: Treatment-response Organization
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-5091fe79e84b7b61"></a>
- **M06-CAP-SPECIALTY-5091fe79e84b7b61**: Functional Trend Analysis
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-26e2b27371523ee8"></a>
- **M06-CAP-SPECIALTY-26e2b27371523ee8**: Mental Status
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-498d6b624138a34f"></a>
- **M06-CAP-SPECIALTY-498d6b624138a34f**: Psychotherapy Record
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-7d18455cdd70370a"></a>
- **M06-CAP-SPECIALTY-7d18455cdd70370a**: Crisis/Safety Plan
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-a81ee68e44f062b5"></a>
- **M06-CAP-SPECIALTY-a81ee68e44f062b5**: Confidentiality Controls
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-bd3292699461e203"></a>
- **M06-CAP-SPECIALTY-bd3292699461e203**: Guardian Permissions
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-09fc2f4398081a50"></a>
- **M06-CAP-SPECIALTY-09fc2f4398081a50**: Advanced Mental-health AI
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-7a93387b9d1e233f"></a>
- **M06-CAP-SPECIALTY-7a93387b9d1e233f**: Mental-health Digital Twin
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-5ade1c9858cd4282"></a>
- **M06-CAP-SPECIALTY-5ade1c9858cd4282**: Remote Patient-reported Monitoring
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-d88eebf9e631cb4e"></a>
- **M06-CAP-SPECIALTY-d88eebf9e631cb4e**: Multimodal Outcome Analytics
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-5d2dccc5567b20b5"></a>
- **M06-CAP-SPECIALTY-5d2dccc5567b20b5**: International Outcomes Registries
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-e0059465d95297ad"></a>
- **M06-CAP-SPECIALTY-e0059465d95297ad**: Mental-health information is part of the longitudinal health record but receives stronger privacy, consent and access controls than ordinary clinical data where clinically and legally required.
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-944e3e938f319bf4"></a>
- **M06-CAP-SPECIALTY-944e3e938f319bf4**: Transition Principle:
  Origin: original 5175

<a id="M06-CAP-SPECIALTY-326d9b5aa6f3a59b"></a>
- **M06-CAP-SPECIALTY-326d9b5aa6f3a59b**: The pediatric record supports structured transition into adult mental-health services without automatically transferring information beyond applicable consent and legal requirements.
  Origin: original 5175

## Preserved source metadata

<a id="M06-CAP-SPECIALTY-0b8005822cec405d"></a>
- **M06-CAP-SPECIALTY-0b8005822cec405d**: # Congenital Heart Disease Registry

<a id="M06-CAP-SPECIALTY-4fbeeb87456accf5"></a>
- **M06-CAP-SPECIALTY-4fbeeb87456accf5**: Supports

<a id="M06-CAP-SPECIALTY-5ba74d8fcc7b20cc"></a>
- **M06-CAP-SPECIALTY-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-SPECIALTY-d5232cbd3a326267"></a>
- **M06-CAP-SPECIALTY-d5232cbd3a326267**: Documentation

<a id="M06-CAP-SPECIALTY-6f33acf3afb37064"></a>
- **M06-CAP-SPECIALTY-6f33acf3afb37064**: ---

<a id="M06-CAP-SPECIALTY-2ae16dad972d74b4"></a>
- **M06-CAP-SPECIALTY-2ae16dad972d74b4**: # Pediatric Arrhythmia Registry

<a id="M06-CAP-SPECIALTY-b6d69afb2734ba42"></a>
- **M06-CAP-SPECIALTY-b6d69afb2734ba42**: # Pediatric Heart Failure Registry

<a id="M06-CAP-SPECIALTY-20dcf9e08bfc7cd6"></a>
- **M06-CAP-SPECIALTY-20dcf9e08bfc7cd6**: Tracks

<a id="M06-CAP-SPECIALTY-12f32eef961b170e"></a>
- **M06-CAP-SPECIALTY-12f32eef961b170e**: # Comprehensive Pediatric Cardiology Dashboard

<a id="M06-CAP-SPECIALTY-183a4bc28d4cf8d9"></a>
- **M06-CAP-SPECIALTY-183a4bc28d4cf8d9**: # Pediatric Asthma Registry

<a id="M06-CAP-SPECIALTY-99054e27b301333e"></a>
- **M06-CAP-SPECIALTY-99054e27b301333e**: # Pediatric Cystic Fibrosis Registry

<a id="M06-CAP-SPECIALTY-db355a7e99929018"></a>
- **M06-CAP-SPECIALTY-db355a7e99929018**: # Comprehensive Pediatric Pulmonology Dashboard

<a id="M06-CAP-SPECIALTY-846ed05aa94a265d"></a>
- **M06-CAP-SPECIALTY-846ed05aa94a265d**: # Comprehensive Pediatric Nephrology Dashboard

<a id="M06-CAP-SPECIALTY-0c167dd484e4ebfa"></a>
- **M06-CAP-SPECIALTY-0c167dd484e4ebfa**: # Pediatric Nutrition & Malabsorption Center

<a id="M06-CAP-SPECIALTY-332aadbd56905a1f"></a>
- **M06-CAP-SPECIALTY-332aadbd56905a1f**: # Pediatric IBD Monitoring

<a id="M06-CAP-SPECIALTY-a78e050b27053464"></a>
- **M06-CAP-SPECIALTY-a78e050b27053464**: # Comprehensive Pediatric Gastroenterology Dashboard

<a id="M06-CAP-SPECIALTY-cd1c5cc723493a81"></a>
- **M06-CAP-SPECIALTY-cd1c5cc723493a81**: # Pediatric Anemia Registry

<a id="M06-CAP-SPECIALTY-1249233c2b9ce406"></a>
- **M06-CAP-SPECIALTY-1249233c2b9ce406**: # Pediatric Hemoglobinopathy Registry

<a id="M06-CAP-SPECIALTY-fd0c8f23b0445cf8"></a>
- **M06-CAP-SPECIALTY-fd0c8f23b0445cf8**: # Pediatric Coagulation Registry

<a id="M06-CAP-SPECIALTY-38fad98399b0601c"></a>
- **M06-CAP-SPECIALTY-38fad98399b0601c**: # Comprehensive Pediatric Hematology Dashboard

<a id="M06-CAP-SPECIALTY-21d94006fa494f95"></a>
- **M06-CAP-SPECIALTY-21d94006fa494f95**: Integrates

<a id="M06-CAP-SPECIALTY-6510c5c511a879bc"></a>
- **M06-CAP-SPECIALTY-6510c5c511a879bc**: Purpose:

<a id="M06-CAP-SPECIALTY-b34f593f0f83a1d1"></a>
- **M06-CAP-SPECIALTY-b34f593f0f83a1d1**: Core Functions:

<a id="M06-CAP-SPECIALTY-fd85b703c00f8755"></a>
- **M06-CAP-SPECIALTY-fd85b703c00f8755**: MVP Relevance:

<a id="M06-CAP-SPECIALTY-b88b375a44ccd619"></a>
- **M06-CAP-SPECIALTY-b88b375a44ccd619**: Status:

<a id="M06-CAP-SPECIALTY-b3604d24a08b400e"></a>
- **M06-CAP-SPECIALTY-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
