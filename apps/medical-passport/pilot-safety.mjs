export const PILOT_SAFETY = Object.freeze({
  diagnosticSystem:false,
  autonomousPrescribing:false,
  autonomousDoseChange:false,
  autonomousTherapyDiscontinuation:false,
  unknownLabIsNormal:false,
  syntheticMayMixWithReal:false,
  remindersMayMutatePrescription:false,
  missedDoseMaySuggestDoubling:false,
});
export const ATTENTION_STATUSES=Object.freeze(['INFORMATION','DATA_CHANGED','DATA_INCOMPLETE','REVIEW_RECOMMENDED','SOURCE_VERIFICATION_REQUIRED']);
export const EPISTEMIC_STATES=Object.freeze(['OBSERVED','MEASURED','CLINICIAN_ASSESSED','PATIENT_REPORTED','INFERRED','PREDICTED','SIMULATED']);
export const LAB_FLAGS=Object.freeze(['NORMAL','LOW','HIGH','CRITICAL_LOW','CRITICAL_HIGH','UNKNOWN']);
export function validatePilotBoundary(){return Object.values(PILOT_SAFETY).every(v=>v===false);}
export function safeLabFlag(flag){return LAB_FLAGS.includes(flag)?flag:'UNKNOWN';}
