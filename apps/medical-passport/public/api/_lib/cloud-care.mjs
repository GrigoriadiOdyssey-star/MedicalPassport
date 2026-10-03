import {CloudHttpError,ms} from "./cloud-runtime.mjs";
const fail=(s,c)=>{throw new CloudHttpError(s,c)};
const text=(v,max=200)=>{if(typeof v!=="string"||v.length>max)fail(400,"INVALID_TEXT");return v.trim();};
const uid=v=>{if(typeof v!=="string"||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v))fail(400,"INVALID_ID");return v};
export async function careRoute({cloud,user,method,path,payload}){
 if(method==="GET"&&path==="/api/appointments"){
  const rows=await cloud.rpc("edht_care_read",{p_kind:"appointments"});
  if(!Array.isArray(rows))throw Error("CLOUD_RESPONSE_INVALID");
  return {body:rows.map(a=>({...a,created_at:ms(a.created_at),archived:a.archived?1:0}))};
 }
 if(method==="POST"&&path==="/api/appointments"){
  const body={provider:text(payload.provider??""),specialty:text(payload.specialty??""),at:text(payload.at??""),location:text(payload.location??"",500),status:payload.status??"planned",source:"PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED"};
  if(!body.provider||!Number.isFinite(Date.parse(body.at))||!["planned","attended","cancelled"].includes(body.status))fail(400,"INVALID_APPOINTMENT");
  if(payload.id&&(!Number.isSafeInteger(payload.version)||payload.version<1))fail(400,"INVALID_VERSION");
  return {body:await cloud.rpc("edht_save_appointment",{p_id:payload.id?uid(payload.id):null,p_version:payload.version??null,p_body:body})};
 }
 if(method==="GET"&&path==="/api/guidelines/context"){
  const row=await cloud.rpc("edht_care_read",{p_kind:"context"});
  if(!row||!row.context||typeof row.context!=="object"||Array.isArray(row.context)||!Number.isSafeInteger(row.version)||row.version<0)throw Error("CLOUD_RESPONSE_INVALID");
  return {body:{context:row.context,version:row.version,registry:{status:"BLOCKED_EXTERNAL",current_version:null,source_count:0,comparison:"UNAVAILABLE_NO_APPROVED_SOURCES",translation:"UNAVAILABLE_NO_VERIFIED_DERIVATIVE",last_verified_at:null},canonical_profile:"GUIDELINE-CROSS-JURISDICTION"}};
 }
 if(method==="POST"&&path==="/api/guidelines/context"){
  const context={};for(const k of ["patient_home","patient_current","treating_doctor","care_delivery"])context[k]={country:text(payload[k]??"",100)||null,origin:"PATIENT_ENTERED",verification:"UNVERIFIED"};
  context.reason=text(payload.reason??"",500);if(!context.reason)fail(400,"CONTEXT_REASON_REQUIRED");
  if(!Number.isSafeInteger(payload.version)||payload.version<0)fail(400,"INVALID_VERSION");
  return {body:await cloud.rpc("edht_save_guideline_context",{p_version:payload.version,p_context:context})};
 }
 return null;
}
