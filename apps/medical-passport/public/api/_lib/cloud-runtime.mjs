import { cleanBody } from "./cloud-record-validation.mjs";
import { validateSchedule, slots, localDate, wallTime } from "./cloud-scheduling.mjs";
import { SupabaseRepository } from "./supabase-repository.mjs";
export const KINDS = ["condition","observation","allergy","medication","vaccination","emergency"];
export const NOTICE_TYPES = ["Medication","Appointment","Document","Access","Security","Emergency","Clinical","Guideline","System"];
export class CloudHttpError extends Error { constructor(status, code) { super(code); this.status=status; } }
const fail=(status,code)=>{throw new CloudHttpError(status,code);};
export const ms=(value)=>value==null?null:(typeof value==="number"?value:Date.parse(value));
const list=(rows)=>{if(!Array.isArray(rows)) throw Error("CLOUD_RESPONSE_INVALID");return rows;};
export function page(value=0) { const n=Number(value);if(!Number.isSafeInteger(n)||n<0||n>100000)fail(400,"INVALID_PAGE");return n; }
const uuid=(v)=>{if(typeof v!=="string"||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v))fail(400,"INVALID_ID");return v;};
const record=(r)=>({id:r.record_id,kind:r.kind,version:r.version,body:r.body,source:r.source,created_at:ms(r.created_at),archived:r.archived?1:0});
const documentRow=(r)=>({id:r.id,version:r.version,name:r.original_name,mime:r.mime_type,byte_size:r.byte_size,document_type:r.document_type,source:r.source,created_at:ms(r.created_at),description:r.metadata?.description||"",document_date:r.metadata?.document_date||"",language:r.metadata?.language||"",translation_status:r.metadata?.translation_status||"original",archived:r.metadata?.archived?1:0});
const notice=(n)=>{const row={...n};for(const k of ["scheduled_at","expires_at","created_at","read_at","delivered_at"])row[k]=ms(n[k]);return row;};
export class CloudRuntimeRepository extends SupabaseRepository {
 async rows(table, query={}) { return list(await this.request("/rest/v1/"+table,{query})); }
 async rpc(name, body={}) { return this.request("/rest/v1/rpc/"+name,{method:"POST",body}); }
 async fullProfile(user) {
  const rows=await this.rows("edht_patient_profiles",{select:"display_name,locale,time_zone,birth_date,country",patient_user_id:"eq."+uuid(user.id),limit:"1"});
  const p=rows[0];if(!p)fail(404,"PROFILE_NOT_FOUND");
  return {id:user.id,name:p.display_name,locale:p.locale,time_zone:p.time_zone,timezone:p.time_zone,birth_date:p.birth_date||"",country:p.country||""};
 }
 async documents(userId,{offset=0,archived=false,all=false}={}) {
  // Fetch all immutable versions in bounded pages before selecting each latest version.
  const rows=[];let next=0;
  for(;;){const batch=await this.rows("edht_documents",{select:"id,version,original_name,mime_type,byte_size,document_type,source,created_at,metadata",patient_user_id:"eq."+uuid(userId),order:"id.asc,version.desc",offset:String(next),limit:"500"});rows.push(...batch);if(batch.length<500)break;next+=500;if(next>100000)fail(503,"CLOUD_RESULT_LIMIT");}
  const seen=new Set();const result=rows.filter(r=>{if(seen.has(r.id))return false;seen.add(r.id);return Boolean(r.metadata?.archived)===archived;}).map(documentRow).sort((a,b)=>b.created_at-a.created_at||a.id.localeCompare(b.id));
  return all?result:result.slice(offset,offset+30);
 }
 async records(userId) {
  const result=[];let offset=0;
  for(;;){const rows=await this.rows("edht_current_clinical_records",{select:"record_id,version,kind,body,source,created_at,archived",patient_user_id:"eq."+uuid(userId),order:"created_at.desc,record_id.asc",offset:String(offset),limit:"500"});result.push(...rows.map(record));if(rows.length<500)break;offset+=500;if(offset>100000)fail(503,"CLOUD_RESULT_LIMIT");}
  return result;
 }
 async audit(userId) {
  return (await this.rows("edht_runtime_audit",{select:"seq,action,reference,outcome,occurred_at",user_id:"eq."+uuid(userId),order:"seq.desc",limit:"100"})).map(r=>({...r,occurred_at:ms(r.occurred_at)}));
 }
 async doctors() {
  return (await this.rows("clinicians",{select:"user_id,given_name,family_name",verified_at:"not.is.null",user_id:"not.is.null",order:"family_name.asc,given_name.asc",limit:"1000"})).map(r=>({id:r.user_id,name:[r.given_name,r.family_name].filter(Boolean).join(" ")}));
 }
 async grants(userId,params) {
  const status=params.get("status")||"all",offset=page(params.get("offset")||0);
  if(!["all","active","expired","revoked","used"].includes(status))fail(400,"INVALID_PAGE");
  // Existing canonical cloud grants are durable, recipient-bound and never single-use.
  const query={select:"id,recipient_user_id,purpose,scopes,expires_at,revoked_at,created_at",patient_user_id:"eq."+uuid(userId),order:"created_at.desc,id.asc",offset:String(offset),limit:"30"};
  const now=new Date().toISOString();
  if(status==="active"){query.revoked_at="is.null";query.expires_at="gt."+now;}
  if(status==="expired"){query.revoked_at="is.null";query.expires_at="lte."+now;}
  if(status==="revoked")query.revoked_at="not.is.null";
  // A used single-use grant cannot exist in this contract. Still execute the authorized DB read.
  const rows=await this.rows("edht_patient_grants",query);
  const doctors=await this.doctors();
  return (status==="used"?[]:rows).map(r=>({...r,expires_at:ms(r.expires_at),created_at:ms(r.created_at),revoked_at:ms(r.revoked_at),one_time:0,used_at:null,recipient:doctors.find(d=>d.id===r.recipient_user_id)?.name||r.recipient_user_id}));
 }
 async pump(userId) {
  const plans=await this.rows("edht_reminder_plans",{select:"id,version,config,updated_at",patient_user_id:"eq."+uuid(userId),active:"eq.true"});
  for(const plan of plans){
   const config=validateSchedule(plan.config),now=Date.now();
   await this.rpc("edht_reminder_materialize",{p_plan_id:plan.id,p_version:plan.version,p_slots:slots(config,Math.max(ms(plan.updated_at),now-30*86400000),now+2*86400000)});
  }
 }
 async reminders(user,params){
  const days=Number(params.get("days")||1),offset=page(params.get("offset")||0);
  if(![1,7,30].includes(days))fail(400,"INVALID_PAGE");
  await this.pump(user.id);
  const profile=await this.fullProfile(user),zone=profile.timezone,today=localDate(Date.now(),zone);
  const startDay=new Date(Date.parse(today)-(days-1)*86400000).toISOString().slice(0,10);
  const nextDay=new Date(Date.parse(today)+86400000).toISOString().slice(0,10);
  const start=wallTime(startDay,"00:00",zone),end=wallTime(nextDay,"00:00",zone);
  const [plans,doses,counts]=await Promise.all([
   this.rows("edht_reminder_plans",{select:"id,record_id,config,active,version",patient_user_id:"eq."+uuid(user.id)}),
   this.rows("edht_medication_doses",{select:"id,record_id,plan_id,plan_version,scheduled_at,status,snapshot,acted_at,snoozed_until",patient_user_id:"eq."+uuid(user.id),and:"(scheduled_at.gte."+new Date(start).toISOString()+",scheduled_at.lte."+new Date(Date.now()+2*86400000).toISOString()+")",order:"scheduled_at.desc,id.asc",limit:"300",offset:String(offset)}),
   this.rpc("edht_reminder_counts",{p_start:new Date(start).toISOString(),p_end:new Date(end).toISOString()})
  ]);
  return {plans,doses:doses.map(d=>({...d,scheduled_at:ms(d.scheduled_at),acted_at:ms(d.acted_at),snoozed_until:ms(d.snoozed_until)})),counts:list(counts),offset,limit:300,timezone:zone};
 }
 async notifications(params,userId) {
  await this.pump(userId);
  const result=await this.rpc("edht_notifications_read",{p_filter:params.get("filter")||"all",p_type:params.get("type")||"all",p_offset:page(params.get("offset")||0)});
  if(!result||!Array.isArray(result.items)||!Number.isSafeInteger(result.unread))throw Error("CLOUD_RESPONSE_INVALID");
  return {...result,items:result.items.map(notice)};
 }
 async preferences(userId) {
  const rows=await this.rows("edht_notification_preferences",{select:"type,enabled,channel",user_id:"eq."+uuid(userId),limit:"9"});
  // Inherited defaults are part of the legacy contract, only after a successful database read.
  return NOTICE_TYPES.map(type=>rows.find(r=>r.type===type)||{type,enabled:true,channel:"IN_APP"});
 }
 async sessions(session) {
  const rows=list(await this.rpc("edht_own_sessions"));
  // The token has already been verified by SupabaseAuth.user; claims identify this session only.
  let id;try{id=JSON.parse(Buffer.from(session.accessToken.split(".")[1],"base64url").toString()).session_id;}catch{throw Error("CLOUD_SESSION_INVALID");}
  return rows.map(r=>({id:r.id,created_at:ms(r.created_at),expires_at:ms(r.expires_at),current:r.id===id,revocable:false}));
 }
 async view(user,name,params) {
  if(!["home","passport","records","documents",...KINDS].includes(name))fail(404,"NOT_FOUND");
  const offset=page(params.get("offset")||0),archived=params.get("archived")==="1";
  if(name==="documents")return {documents:await this.documents(user.id,{offset,archived}),offset,page_size:30};
  const [profile,records]=await Promise.all([this.fullProfile(user),this.records(user.id)]);
  if(KINDS.includes(name)){
   let selected=records.filter(r=>r.kind===name);
   if(name==="medication"){
    const phase=archived?"past":params.get("phase")||"active";
    if(!["active","past","upcoming"].includes(phase))fail(400,"INVALID_PHASE");
    const today=new Intl.DateTimeFormat("en-CA",{timeZone:profile.timezone,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
    selected=selected.filter(r=>{const past=r.archived||r.body.status==="stopped"||(r.body.end&&r.body.end<today);const future=!past&&r.body.start&&r.body.start>today;return phase==="past"?past:phase==="upcoming"?future:!past&&!future;});
   }
   return {records:selected.filter(r=>name==="medication"||Boolean(r.archived)===archived).slice(offset,offset+30),offset,page_size:30};
  }
  const docs=await this.documents(user.id,{all:true,archived});
  if(name==="records")return {records:records.filter(r=>Boolean(r.archived)===archived).slice(offset,offset+30),documents:docs.slice(offset,offset+30),offset,page_size:30};
  const audit=await this.audit(user.id);
  return {profile,counts:KINDS.map(kind=>({kind,count:records.filter(r=>r.kind===kind&&!r.archived&&(kind!=="medication"||(r.body.status!=="stopped"&&(!r.body.start||r.body.start<=localDate(Date.now(),profile.timezone))&&(!r.body.end||r.body.end>=localDate(Date.now(),profile.timezone))))).length})),document_count:docs.length,emergency:records.find(r=>r.kind==="emergency"&&!r.archived)||null,critical_allergies:records.filter(r=>r.kind==="allergy"&&!r.archived&&r.body.severity==="critical"),recent:records.filter(r=>!r.archived).slice(0,4),documents:docs.slice(0,3),access:audit.filter(a=>/SHARED_|EMERGENCY_ACCESS/.test(a.action))};
 }
}

export async function cloudRoute({cloud,user,session,method,path,params,payload}) {
 if(method==="GET"&&path==="/api/profile")return {body:await cloud.fullProfile(user)};
 if(method==="GET"&&path.startsWith("/api/views/"))return {body:await cloud.view(user,path.slice(11),params)};
 if(method==="GET"&&path==="/api/notifications")return {body:await cloud.notifications(params,user.id)};
 if(method==="GET"&&path==="/api/notification-settings")return {body:await cloud.preferences(user.id)};
 if(method==="POST"&&path==="/api/notifications/action"){
  if(!["read","read_all","dismiss"].includes(payload.action))fail(400,"INVALID_NOTIFICATION_ACTION");
  return {body:await cloud.rpc("edht_notification_action",{p_id:payload.action==="read_all"?null:uuid(payload.id),p_action:payload.action})};
 }
 if(method==="POST"&&path==="/api/notification-settings")return {body:await cloud.rpc("edht_notification_settings",{p_preferences:payload.preferences})};
 if(method==="GET"&&path==="/api/doctors")return {body:await cloud.doctors()};
 if(method==="GET"&&path==="/api/grants")return {body:await cloud.grants(user.id,params)};
 if(method==="POST"&&/^\/api\/grants\/[^/]+\/revoke$/.test(path)){
  const revoked=await cloud.revokePatientGrant(uuid(path.split("/")[3]));if(!revoked)fail(404,"NOT_FOUND");return {body:{ok:true}};
 }
 if(method==="GET"&&path==="/api/reminders")return {body:await cloud.reminders(user,params)};
 if(method==="POST"&&path==="/api/reminders"){
  const config=validateSchedule(payload);
  return {body:await cloud.rpc("edht_reminder_configure",{p_record_id:uuid(payload.record_id),p_config:config,p_confirmed:payload.confirmed===true})};
 }
 if(method==="POST"&&path==="/api/reminders/pause")return {body:await cloud.rpc("edht_reminder_pause",{p_id:uuid(payload.id)})};
 if(method==="POST"&&path==="/api/doses/action"){
  if(!["taken","skip","snooze"].includes(payload.action))fail(400,"INVALID_DOSE_ACTION");
  return {body:await cloud.rpc("edht_dose_action",{p_id:uuid(payload.id),p_action:payload.action,p_minutes:Number(payload.minutes||10)})};
 }
 if(method==="GET"&&path==="/api/audit")return {body:await cloud.audit(user.id)};
 if(method==="GET"&&path==="/api/sessions")return {body:await cloud.sessions(session)};
 if(method==="GET"&&path==="/api/passport")return {body:{records:await cloud.records(user.id),documents:await cloud.documents(user.id,{all:true})}};
 if(method==="GET"&&/^\/api\/record\/[^/]+$/.test(path)){
  const rows=await cloud.records(user.id);const found=rows.find(r=>r.id===uuid(path.split("/")[3]));if(!found)fail(404,"NOT_FOUND");return {body:found};
 }
 if(method==="GET"&&/^\/api\/records\/[^/]+\/history$/.test(path)){
  const rows=await cloud.rows("edht_clinical_record_versions",{select:"record_id,version,kind,body,source,created_at,archived",record_id:"eq."+uuid(path.split("/")[3]),patient_user_id:"eq."+uuid(user.id),order:"version.asc"});if(!rows.length)fail(404,"NOT_FOUND");return {body:rows.map(record)};
 }
 if(method==="GET"&&/^\/api\/documents\/[^/]+\/versions$/.test(path)){
  const rows=await cloud.rows("edht_documents",{select:"id,version,original_name,mime_type,byte_size,document_type,source,created_at,metadata",id:"eq."+uuid(path.split("/")[3]),patient_user_id:"eq."+uuid(user.id),order:"version.desc"});if(!rows.length)fail(404,"NOT_FOUND");return {body:rows.map(documentRow)};
 }
 if(method==="POST"&&path==="/api/assistant"){
  const records=(await cloud.records(user.id)).filter(r=>!r.archived&&["allergy","medication","condition"].includes(r.kind));
  return {body:{provider:"deterministic-sandbox",model:"context-summary-v1",is_generative_ai:false,generated_at:Date.now(),source_records:records.map(r=>({id:r.id,version:r.version,source:r.source})),text:"В вашем синтетическом паспорте: аллергии — "+records.filter(r=>r.kind==="allergy").length+", лекарства — "+records.filter(r=>r.kind==="medication").length+", состояния — "+records.filter(r=>r.kind==="condition").length+". Это записанные сведения, а не подтверждённые диагнозы или назначения. Обсудите медицинские вопросы с врачом. При непосредственной угрозе здоровью обратитесь в местную экстренную службу.",boundaries:{guideline_registry:"interface_preserved_not_connected",precision_pharmacology:"not_enabled",digital_twin:"pilot_read_only"}}};
 }
 if(method==="GET"&&path==="/api/search"){
  const q=params.get("q")||"";if(q.length<2||q.length>100)fail(400,"INVALID_SEARCH");
  const query=q.toLocaleLowerCase();const [records,documents]=await Promise.all([cloud.records(user.id),cloud.documents(user.id,{all:true})]);
  return {body:{records:records.filter(r=>!r.archived&&Object.values(r.body).some(v=>String(v).toLocaleLowerCase().includes(query))).slice(0,30),documents:documents.filter(d=>d.name.toLocaleLowerCase().includes(query)).slice(0,30)}};
 }
 if(method==="POST"&&path==="/api/records"){
  if(!KINDS.includes(payload.kind))fail(400,"INVALID_KIND");
  const result=await cloud.appendRecord({kind:payload.kind,body:cleanBody(payload.kind,payload.body),source:"patient_reported"});
  return {status:201,body:{id:result.record_id,version:result.version}};
 }
 if(method==="POST"&&/^\/api\/records\/[^/]+\/(update|archive)$/.test(path)){
  const id=uuid(path.split("/")[3]),r=(await cloud.records(user.id)).find(r=>r.id===id);
  if(!r)fail(404,"NOT_FOUND");
  const archive=path.endsWith("/archive");
  return {body:await cloud.rpc("edht_change_record",{p_id:id,p_version:payload.version,p_body:archive?null:cleanBody(r.kind,payload.body),p_archive:archive})};
 }
 if(method==="POST"&&path==="/api/profile"){
  const name=payload.name,country=payload.country??"",birth=payload.birth_date??"";
  if(typeof name!=="string"||!name.trim()||name.length>100||typeof country!=="string"||country.length>100)fail(400,"INVALID_TEXT");
  if(birth&&(!/^\d{4}-\d{2}-\d{2}$/.test(birth)||!Number.isFinite(Date.parse(birth))||new Date(birth).toISOString().slice(0,10)!==birth))fail(400,"INVALID_DATE");
  if(birth){const now=new Date();if(new Date(birth)>new Date(Date.UTC(now.getUTCFullYear()-18,now.getUTCMonth(),now.getUTCDate())))fail(400,"ADULT_PROFILE_REQUIRED");}
  const result=list(await cloud.request("/rest/v1/edht_patient_profiles",{method:"PATCH",query:{patient_user_id:"eq."+uuid(user.id)},prefer:"return=representation",body:{display_name:name.trim(),country:country.trim(),birth_date:birth||null,updated_at:new Date().toISOString()}}));
  if(result.length!==1)fail(404,"PROFILE_NOT_FOUND");return {body:{ok:true}};
 }
 return null;
}
