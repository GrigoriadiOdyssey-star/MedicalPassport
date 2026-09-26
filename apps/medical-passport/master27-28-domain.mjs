import { safeLabFlag } from './pilot-safety.mjs';

export const REMINDER_STATES=Object.freeze(['TAKEN','SNOOZED','SKIPPED','MISSED']);
export const SYSTEMS=Object.freeze(['CARDIOVASCULAR','RESPIRATORY','RENAL','HEPATIC','ENDOCRINE','NEUROLOGICAL','GASTROINTESTINAL','HEMATOLOGICAL','IMMUNE','MUSCULOSKELETAL','REPRODUCTIVE','GENERAL']);
export const QR_SCOPES=Object.freeze(['EMERGENCY','MEDICATIONS','ALLERGIES','LABS','DOCUMENTS','DIGITAL_TWIN_SUMMARY','FULL_CLINICAL_SUMMARY']);
export const QR_DURATIONS=Object.freeze({ONE_TIME:0,ONE_HOUR:3600,DAY:86400,SEVEN_DAYS:604800});

export function createMedicationReminder(input,now=new Date()){
 if(!input.medicationId||!input.dose||!input.times?.length) throw Error('REMINDER_REQUIRED_FIELDS');
 return {id:input.id??crypto.randomUUID(),medicationId:input.medicationId,dose:input.dose,form:input.form??null,frequency:input.frequency??'DAILY',times:[...input.times],days:input.days??[0,1,2,3,4,5,6],start:input.start??now.toISOString().slice(0,10),end:input.permanent?null:(input.end??null),permanent:Boolean(input.permanent),timezone:input.timezone??'UTC',quietHours:input.quietHours??null,snoozeMinutes:input.snoozeMinutes??10,createdAt:now.toISOString()};
}
export function recordReminderEvent(reminder,status,at=new Date()){
 if(!REMINDER_STATES.includes(status)) throw Error('INVALID_REMINDER_STATE');
 return {id:crypto.randomUUID(),reminderId:reminder.id,medicationId:reminder.medicationId,status,at:at.toISOString()};
}
export function adherenceSummary(events){const decided=events.filter(x=>['TAKEN','SKIPPED','MISSED'].includes(x.status));const taken=decided.filter(x=>x.status==='TAKEN').length;return {taken,total:decided.length,rate:decided.length?Math.round(taken/decided.length*100):null,clinicalInterpretation:null};}

export function normalizeLabResult(r){return {id:r.id??crypto.randomUUID(),testCode:r.testCode??null,testName:r.testName,value:r.value,unit:r.unit??null,referenceRange:r.referenceRange??null,flag:safeLabFlag(r.flag),critical:Boolean(r.critical),specimen:r.specimen??null,collectedAt:r.collectedAt??null,resultedAt:r.resultedAt??null,laboratory:r.laboratory??null,source:r.source??'MANUAL',verificationState:r.verificationState??'UNVERIFIED',provenance:r.provenance??null,jurisdiction:r.jurisdiction??null,originalDocumentReference:r.originalDocumentReference??null,epistemicState:'MEASURED'};}
export function labTrend(results){const rows=[...results].filter(x=>Number.isFinite(Number(x.value))).sort((a,b)=>new Date(a.resultedAt)-new Date(b.resultedAt));if(rows.length<2)return {direction:'INSUFFICIENT_DATA',points:rows};const a=Number(rows.at(-2).value),b=Number(rows.at(-1).value);return {direction:b>a?'INCREASED':b<a?'DECREASED':'STABLE',points:rows};}

export function buildClinicalStateTwin(patient,{modelVersion='0.1'}={}){
 const labs=(patient.labs??[]).map(normalizeLabResult);const events=[];
 for(const x of patient.conditions??[])events.push({type:'DIAGNOSIS',date:x.date??x.recordedAt,source:x.source,provenance:x.provenance,data:x});
 for(const x of patient.medications??[])events.push({type:'MEDICATION_START',date:x.start,source:x.source,provenance:x.provenance,data:x});
 for(const x of labs)events.push({type:'LAB_RESULT',date:x.resultedAt,source:x.source,provenance:x.provenance,data:x});
 for(const x of patient.documents??[])events.push({type:'DOCUMENT',date:x.date,source:x.provider,provenance:x.provenance,data:x});
 for(const x of patient.adherence??[])events.push({type:'ADHERENCE_EVENT',date:x.at,source:'PATIENT',provenance:x.provenance??null,data:x});
 events.sort((a,b)=>new Date(b.date??0)-new Date(a.date??0));
 const systems=Object.fromEntries(SYSTEMS.map(s=>[s,{system:s,availableData:[],activeConditions:[],relevantMedications:[],relevantLabs:[],lastUpdated:null,dataCompleteness:0,state:'INSUFFICIENT_DATA'}]));
 for(const lab of labs){const s=lab.system&&systems[lab.system]?lab.system:'GENERAL';systems[s].relevantLabs.push(lab);systems[s].availableData.push({kind:'LAB',id:lab.id,epistemicState:'MEASURED'});}
 for(const c of patient.conditions??[]){const s=c.system&&systems[c.system]?c.system:'GENERAL';systems[s].activeConditions.push({...c,epistemicState:'CLINICIAN_ASSESSED'});}
 for(const m of patient.medications??[]){const targets=(m.systems??['GENERAL']).filter(x=>systems[x]);for(const s of targets)systems[s].relevantMedications.push(m);}
 for(const s of Object.values(systems)){const count=s.availableData.length+s.activeConditions.length+s.relevantMedications.length;s.dataCompleteness=Math.min(100,count*20);s.state=count?'AVAILABLE':'INSUFFICIENT_DATA';s.lastUpdated=events.find(e=>e.data?.system===s.system)?.date??null;}
 const sourceVersions=patient.sourceVersions??{};const completeness=Number(patient.dataCompleteness??Math.min(100,[patient.demographics,patient.conditions?.length,patient.medications?.length,labs.length,patient.documents?.length].filter(Boolean).length*20));
 return {patientStateVersion:patient.version??1,generatedAt:new Date().toISOString(),sourceVersions,provenance:patient.provenance??[],dataCompleteness:completeness,modelVersion,current:{demographics:patient.demographics??null,conditions:patient.conditions??[],medications:patient.medications??[],allergies:patient.allergies??[],recentLabs:labs.slice(-10)},systems,timeline:events,attention:buildAttention({labs,patient})};
}
function buildAttention({labs,patient}){const out=[];for(const l of labs.filter(x=>x.flag!=='NORMAL'&&x.flag!=='UNKNOWN'))out.push({status:'REVIEW_RECOMMENDED',kind:'LAB_RESULT',ref:l.id,message:'Result is outside the supplied reference range; discuss with a clinician.'});for(const l of labs.filter(x=>!x.provenance))out.push({status:'SOURCE_VERIFICATION_REQUIRED',kind:'LAB_RESULT',ref:l.id,message:'Source provenance is incomplete.'});if((patient.adherence??[]).filter(x=>x.status==='MISSED').length>=2)out.push({status:'DATA_CHANGED',kind:'ADHERENCE',message:'Multiple reminder events were marked missed.'});return out;}

export function createScopedGrant({patientId,scopes,duration='ONE_HOUR'},now=new Date()){
 if(!patientId||!scopes?.length||scopes.some(x=>!QR_SCOPES.includes(x)))throw Error('INVALID_ACCESS_GRANT');const seconds=QR_DURATIONS[duration];if(seconds===undefined)throw Error('INVALID_ACCESS_DURATION');return {id:crypto.randomUUID(),patientId,scopes:[...new Set(scopes)],duration,createdAt:now.toISOString(),expiresAt:seconds?new Date(now.getTime()+seconds*1000).toISOString():null,oneTime:duration==='ONE_TIME',usedAt:null,revokedAt:null};
}
export function grantAllows(grant,scope,now=new Date()){if(grant.revokedAt)return false;if(grant.expiresAt&&new Date(grant.expiresAt)<=now)return false;if(grant.oneTime&&grant.usedAt)return false;return grant.scopes.includes(scope)||grant.scopes.includes('FULL_CLINICAL_SUMMARY');}
export function revokeGrant(grant,now=new Date()){return {...grant,revokedAt:now.toISOString()};}
export function boundedDoctorProjection(patient,grant){const out={patientId:grant.patientId};if(grantAllows(grant,'ALLERGIES'))out.allergies=patient.allergies??[];if(grantAllows(grant,'MEDICATIONS'))out.medications=patient.medications??[];if(grantAllows(grant,'LABS'))out.labs=patient.labs??[];if(grantAllows(grant,'DOCUMENTS'))out.documents=patient.documents??[];if(grantAllows(grant,'DIGITAL_TWIN_SUMMARY')){const t=buildClinicalStateTwin(patient);out.digitalTwin={generatedAt:t.generatedAt,dataCompleteness:t.dataCompleteness,current:t.current,attention:t.attention};}return out;}
