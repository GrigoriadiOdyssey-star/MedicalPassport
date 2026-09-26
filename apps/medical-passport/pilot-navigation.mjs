export const PILOT_NAVIGATION = Object.freeze([
  { id:'today', label:'Сегодня', href:'#/home', priority:0 },
  { id:'medications', label:'Лекарства', href:'#/medication', priority:1 },
  { id:'laboratory', label:'Лаборатория', href:'#/laboratory', priority:2 },
  { id:'documents', label:'Документы', href:'#/documents', priority:3 },
  { id:'digital-twin', label:'Digital Twin', href:'#/digital-twin', priority:4 },
  { id:'qr', label:'QR доступ', href:'#/qr', priority:5 },
  { id:'assistant', label:'AI Assistant', href:'#/assistant', priority:6 },
]);

export const PATIENT_DASHBOARD_CARDS = Object.freeze([
  'TODAY','NEXT_MEDICATION','LAB_RESULTS','ACTIVE_CONDITIONS','RECENT_DOCUMENTS',
  'UPCOMING_APPOINTMENTS','DIGITAL_TWIN','QR_ACCESS','AI_ASSISTANT','SOS'
]);

export const DOCTOR_WORKSPACE_SECTIONS = Object.freeze([
  'PATIENT_SUMMARY','ALLERGIES','CONDITIONS','CURRENT_MEDICATIONS','RECENT_LABS',
  'DOCUMENTS','DIGITAL_TWIN','TIMELINE','PROVENANCE'
]);

export function navigationFor(role='patient') {
  return role === 'doctor'
    ? DOCTOR_WORKSPACE_SECTIONS.map((id,index)=>({id,label:id.replaceAll('_',' '),priority:index}))
    : [...PILOT_NAVIGATION];
}
