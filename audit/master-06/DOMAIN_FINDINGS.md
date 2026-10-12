# MASTER-06 domain findings

## NEUROSURG — 47 new IDs

Pediatric neurosurgery retains longitudinal disease/procedure/device identity, source imaging and functional baseline. Surgical indication, operative strategy, emergency imaging and intraoperative monitoring remain qualified human decisions. Preserve current versus historical device configuration; read access does not permit programming or control.

- 4628: Implant identity, manufacturer/model, MRI-related information and programming/revision history remain source-specific. A generic device label must not imply MRI compatibility or authorize programming.
- 4630: Prenatal findings link through separately verified maternal/infant identity and permissions; preserve neonatal treatment and adult-transition history.
- 4635: Presurgical video-EEG, imaging and neuropsychology support a multidisciplinary hypothesis; neither AI localization nor device availability determines surgical candidacy.
- 4638: Return-to-learn and return-to-activity retain distinct clinician clearance and school accommodation states; symptom completion does not automatically authorize return.
- 4643: Neuromonitoring requires device/channel identity, units, quality, clock alignment and source/intervention timing; automated correlation must not change critical-care therapy.
- 4648: Emergency summary retains last-update/source verification, current valve information and communication needs with minimum-necessary authorization; it is not operative decision authority.
- 5104: Current shunt configuration is distinguished from historical settings, removal/replacement and revision state. Unverified historical configuration cannot become the current device setting.
- 5105: Preserve explicit prohibition on delaying urgent neurosurgical evaluation for automated assessment; a negative or missing model result does not exclude shunt malfunction.
- 5113: Consent and multidisciplinary surgical decision are separate states from a surgical hypothesis or list of procedure options.
- 5115: Battery, programming, current configuration, imaging compatibility and explantation remain distinct device lifecycle facts; no command/control capability is inferred.
- 5117: Intracranial bleeding links hematology/coagulation/anticoagulation context with neurosurgical assessment; documentation never issues hemostatic therapy or reversal.
- 5119: Device infection preserves resistance/microbiology, removal/replacement and resolution history; a positive signal is not a confirmed device-infection diagnosis.
- 5120: Planning/navigation preserves registered coordinate frames, source/segmentation versions, functional anatomy, anesthesia/blood/device plans and final signed plan; an illustrative model is not patient-specific navigation.
- 5121: Baseline/changed/recovered intraoperative signals and anesthesia/intervention context require contemporaneous qualified monitoring. AI cannot replace real-time staff or imply coverage.
- 5123: Separate summarization, imaging, device-history and planning tasks, each with intended-use/pediatric evaluation. AI cannot choose an approach or replace emergency-image interpretation.

## NEONATAL — 56 new IDs

Neonatal care preserves gestational/postnatal age and measurement context, birth/admission identity, respiratory/nutrition/medication exposure, ICU events and developmental follow-up. Maternal and infant identities/permissions remain separate. AI and monitoring cannot autonomously resuscitate, prescribe, change ventilation or determine eligibility.

- 2348: Bilirubin monitoring, phototherapy and exchange transfusion are separate workflows; age/gestation, measurement timing and validated protocol context are required before clinical action.
- 2352: WHO Standards is retained as historical source intent, not a universal neonatal growth reference. Preserve reference/version and gestational/corrected-age applicability with specialist validation.
- 2358: Infusions, nutrition and antibiotics retain exposure/route/units and separately authorized prescription and administration; no autonomous neonatal dose or pump change.
- 3022: Birth/gestational-age/weight and Apgar observations require time point, assessor and source; an Apgar score is not retrospectively inferred from other documentation.
- 3025: The source claim based on international guidelines supplies no named version or validation evidence. Require approved neonatal resuscitation protocol/version and qualified response team; preserve documentation intent without embedding unverified instructions.
- 3028: Donor milk, breast milk, fortification and enteral/parenteral nutrition remain distinct product/route/exposure contexts; milk provenance does not expose donor identity without authorization.
- 3034: Sepsis, mortality, respiratory and growth predictions are separate intended uses with population/gestational applicability and calibration evidence; no AI determination of treatment limitation.
- 3264: High-frequency ventilation complements earlier high-flow/CPAP scope. Preserve prescribed settings, observed device data, clinical events and quality/timing separately; no remote ventilator control.
- 3266: Intraventricular hemorrhage and periventricular leukomalacia extend earlier neurological scope; preserve source imaging and clinical assessment rather than conflating injury phenotypes.
- 3275: AI Dataset Collection is a research intent, not permission to train on neonatal records. Protocol, appropriate authorization, purpose and disclosure controls remain separate.

## EMERGENCY — 16 new IDs

Emergency specialty profiles preserve clinician-led urgency, source event/triage/transfer provenance and minimum-necessary passport disclosure. Historical templates and device connectivity do not establish a staffed response service or autonomous diagnosis/treatment. Patient instability must not wait for AI, data completion or administrative clearance.

- 4098: Emergency allergy instructions require identifiable clinician/version, applicability and minimal school/caregiver scope; multilingual access is not blanket disclosure or a new prescription.
- 4678: Transfer retains point-of-injury times, interventions and sending/receiving identities with acknowledgement, reconciliation and clock uncertainty; transport location is sensitive and distinct from clinical record authority.
- 4741: Emergency pathway diagrams are documentation flow, not mandatory sequencing that could delay clinician-directed urgent care for imaging or administrative steps.
- 4780: Spreading odontogenic infection/airway risk has a clinician-defined escalation route; automated classification cannot rule out airway compromise or independently prescribe antibiotics.
- 4798: Dental/craniofacial device passport retains placement/removal/replacement/current status and communication/bleeding-risk context. It references device-owner facts without creating a second authoritative registry.
- 4909: Preserve explicit no-automated-rule-out torsion safeguard, laterality and onset. Imaging workflow labels cannot delay urgent specialist assessment.
- 4943: Automated systems cannot rule out torsion or delay urgent assessment. Preserve viability and contralateral procedure context as clinician-recorded outcomes.
- 4969: Laterality, injury time and anterior/posterior segment context extend earlier eye-emergency profiles; sight-threatening presentations require clinician-defined immediate pathways.
