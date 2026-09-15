export const parent='46539f4beb5cc79e3ff35f9d6a6f46086d3390b3';
export const domains={
 NEUROSURG:{ranges:[[4626,4650],[5101,5125]],note:'Pediatric neurosurgery retains longitudinal disease/procedure/device identity, source imaging and functional baseline. Surgical indication, operative strategy, emergency imaging and intraoperative monitoring remain qualified human decisions. Preserve current versus historical device configuration; read access does not permit programming or control.'},
 NEONATAL:{ranges:[[2341,2360],[3021,3040],[3261,3280]],note:'Neonatal care preserves gestational/postnatal age and measurement context, birth/admission identity, respiratory/nutrition/medication exposure, ICU events and developmental follow-up. Maternal and infant identities/permissions remain separate. AI and monitoring cannot autonomously resuscitate, prescribe, change ventilation or determine eligibility.'},
 EMERGENCY:{ranges:[831,1068,1088,1108,1131,1138,2339,3007,4098,4678,4741,4780,4798,4909,4943,4969].map(id=>[id,id]),note:'Emergency specialty profiles preserve clinician-led urgency, source event/triage/transfer provenance and minimum-necessary passport disclosure. Historical templates and device connectivity do not establish a staffed response service or autonomous diagnosis/treatment. Patient instability must not wait for AI, data completion or administrative clearance.'}
};
export const specific={
 4628:'Implant identity, manufacturer/model, MRI-related information and programming/revision history remain source-specific. A generic device label must not imply MRI compatibility or authorize programming.',
 4630:'Prenatal findings link through separately verified maternal/infant identity and permissions; preserve neonatal treatment and adult-transition history.',
 4635:'Presurgical video-EEG, imaging and neuropsychology support a multidisciplinary hypothesis; neither AI localization nor device availability determines surgical candidacy.',
 4638:'Return-to-learn and return-to-activity retain distinct clinician clearance and school accommodation states; symptom completion does not automatically authorize return.',
 4643:'Neuromonitoring requires device/channel identity, units, quality, clock alignment and source/intervention timing; automated correlation must not change critical-care therapy.',
 4648:'Emergency summary retains last-update/source verification, current valve information and communication needs with minimum-necessary authorization; it is not operative decision authority.',
 5104:'Current shunt configuration is distinguished from historical settings, removal/replacement and revision state. Unverified historical configuration cannot become the current device setting.',
 5105:'Preserve explicit prohibition on delaying urgent neurosurgical evaluation for automated assessment; a negative or missing model result does not exclude shunt malfunction.',
 5113:'Consent and multidisciplinary surgical decision are separate states from a surgical hypothesis or list of procedure options.',
 5115:'Battery, programming, current configuration, imaging compatibility and explantation remain distinct device lifecycle facts; no command/control capability is inferred.',
 5117:'Intracranial bleeding links hematology/coagulation/anticoagulation context with neurosurgical assessment; documentation never issues hemostatic therapy or reversal.',
 5119:'Device infection preserves resistance/microbiology, removal/replacement and resolution history; a positive signal is not a confirmed device-infection diagnosis.',
 5120:'Planning/navigation preserves registered coordinate frames, source/segmentation versions, functional anatomy, anesthesia/blood/device plans and final signed plan; an illustrative model is not patient-specific navigation.',
 5121:'Baseline/changed/recovered intraoperative signals and anesthesia/intervention context require contemporaneous qualified monitoring. AI cannot replace real-time staff or imply coverage.',
 5123:'Separate summarization, imaging, device-history and planning tasks, each with intended-use/pediatric evaluation. AI cannot choose an approach or replace emergency-image interpretation.'
};
