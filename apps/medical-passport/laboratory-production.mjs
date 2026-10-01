import { randomUUID, createHash } from 'node:crypto';
import { HttpError } from './store.mjs';

const fail=(code,status=400)=>{throw new HttpError(status,code)};
const json=v=>JSON.stringify(v??{});
const parse=(v,f={})=>{try{return JSON.parse(v)}catch{return f}};
const sha=v=>createHash('sha256').update(JSON.stringify(v)).digest('hex');
const text=(v,max=1000)=>{if(typeof v!=='string'||v.length>max)fail('INVALID_TEXT');return v.trim()};
const timestamp=v=>{if(v==null||v==='')return null;const n=typeof v==='number'?v:Date.parse(v);if(!Number.isFinite(n))fail('INVALID_LAB_TIMESTAMP');return n};
function normalizeValue(type,value){
 if(type==='UNKNOWN'){if(value!=null)fail('UNKNOWN_VALUE_MUST_BE_NULL');return null}
 if(type==='NUMERIC'){if(typeof value!=='number'||!Number.isFinite(value))fail('INVALID_NUMERIC_VALUE');return value}
 if(type==='TEXT'){if(typeof value!=='string'||value.length>5000)fail('INVALID_TEXT_VALUE');return value}
 if(type==='BOOLEAN'){if(typeof value!=='boolean')fail('INVALID_BOOLEAN_VALUE');return value}
 if(type==='CODED'){if(!value||typeof value!=='object'||Array.isArray(value)||typeof value.code!=='string'||!value.code.trim()||typeof (value.system??value.source)!=='string'||!(value.system??value.source).trim())fail('INVALID_CODED_VALUE');return{code:value.code.trim().slice(0,200),system:String(value.system??value.source).trim().slice(0,500),...(value.display?{display:String(value.display).slice(0,500)}:{})}}
 if(type==='RATIO'){const n=value?.numerator,d=value?.denominator;if(!Number.isFinite(n)||!Number.isFinite(d)||d===0)fail('INVALID_RATIO_VALUE');return{numerator:n,denominator:d,numerator_unit:String(value.numerator_unit??'').slice(0,100),denominator_unit:String(value.denominator_unit??'').slice(0,100)}}
 if(type==='RANGE'){const low=value?.lower,high=value?.upper;if(low!=null&&!Number.isFinite(low)||high!=null&&!Number.isFinite(high)||low==null&&high==null||low!=null&&high!=null&&low>high)fail('INVALID_RANGE_VALUE');return{lower:low??null,upper:high??null,unit:String(value.unit??'').slice(0,100)}}
 if(type==='POSITIVE_NEGATIVE'){if(!['POSITIVE','NEGATIVE','INDETERMINATE','UNKNOWN'].includes(value))fail('INVALID_QUALITATIVE_VALUE');return value}
 if(type==='NOT_DETECTED_DETECTED'){if(!['DETECTED','NOT_DETECTED','INDETERMINATE','UNKNOWN'].includes(value))fail('INVALID_QUALITATIVE_VALUE');return value}
 fail('INVALID_LAB_VALUE_TYPE');
}

export const LAB_ORDER_TRANSITIONS=Object.freeze({
 DRAFT:['REQUESTED','CANCELLED'],
 REQUESTED:['ACCEPTED','REJECTED','CANCELLED','EXPIRED'],
 ACCEPTED:['AWAITING_COLLECTION','CANCELLED'],
 AWAITING_COLLECTION:['COLLECTED','CANCELLED'],
 COLLECTED:['RECEIVED','REJECTED'],
 RECEIVED:['IN_PROCESS','REJECTED'],
 IN_PROCESS:['PARTIAL_RESULT','PRELIMINARY','FINAL','REJECTED'],
 PARTIAL_RESULT:['PRELIMINARY','FINAL','CORRECTED','AMENDED'],
 PRELIMINARY:['FINAL','CORRECTED','AMENDED'],
 FINAL:['CORRECTED','AMENDED'],
 CORRECTED:['CORRECTED','AMENDED'],
 AMENDED:['CORRECTED','AMENDED'],
 CANCELLED:[],REJECTED:[],EXPIRED:[]
});
export const SPECIMEN_TRANSITIONS=Object.freeze({
 EXPECTED:['COLLECTED','CANCELLED'],COLLECTED:['RECEIVED','REJECTED'],RECEIVED:['ACCESSIONED','REJECTED'],ACCESSIONED:['PROCESSING','REJECTED'],PROCESSING:['COMPLETED','REJECTED'],COMPLETED:[],REJECTED:[],CANCELLED:[]
});
export const LAB_RESULT_TRANSITIONS=Object.freeze({
 REGISTERED:['PRELIMINARY','FINAL','CANCELLED','ENTERED_IN_ERROR'],PRELIMINARY:['FINAL','CANCELLED','ENTERED_IN_ERROR'],FINAL:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],CORRECTED:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],AMENDED:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],CANCELLED:[],ENTERED_IN_ERROR:[]
});
const FLAGS=new Set(['NORMAL','LOW','HIGH','CRITICAL_LOW','CRITICAL_HIGH','ABNORMAL','POSITIVE','NEGATIVE','INDETERMINATE','UNKNOWN']);
const VALUE_TYPES=new Set(['NUMERIC','TEXT','BOOLEAN','CODED','RATIO','RANGE','POSITIVE_NEGATIVE','NOT_DETECTED_DETECTED','UNKNOWN']);
const EPISTEMIC=new Set(['OBSERVED','MEASURED','CLINICIAN_ASSESSED','PATIENT_REPORTED','INFERRED','PREDICTED','SIMULATED']);
const FINALISH=new Set(['FINAL','CORRECTED','AMENDED']);

export function attachLaboratoryProduction(Store){
 if(Store.prototype.laboratoryProductionAttached)return;
 Store.prototype.laboratoryProductionAttached=true;

 Store.prototype.seedLaboratoryCatalogue=function(){
  const now=this.now();
  this.transaction(()=>{
   this.db.prepare('INSERT OR IGNORE INTO laboratory_providers VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(
    'syn-lab-edht','EDHT Synthetic Diagnostics Ltd','EDHT Synthetic Laboratory','GB','GB','LABORATORY','1 Synthetic Clinical Way','+44 20 0000 2700','','Europe/London','SYNTHETIC','synthetic:master27',json({kind:'synthetic_fixture',production_connected:false}),now
   );
   const test=this.db.prepare('INSERT OR IGNORE INTO laboratory_tests VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
   const rows=[
    ['lab-hgb','HGB',null,null,'Hemoglobin','HGB','hematology','blood','synthetic analyser','g/L','syn-lab-edht','GB','ACTIVE','SYNTHETIC','synthetic:master27',{production_terminology:false}],
    ['lab-creat','CREAT',null,null,'Creatinine','CREAT','chemistry','serum','synthetic analyser','µmol/L','syn-lab-edht','GB','ACTIVE','SYNTHETIC','synthetic:master27',{production_terminology:false}],
    ['lab-crp','CRP',null,null,'C-reactive protein','CRP','immunology','serum','synthetic analyser','mg/L','syn-lab-edht','GB','ACTIVE','SYNTHETIC','synthetic:master27',{production_terminology:false}],
    ['lab-tsh','TSH',null,null,'Thyroid stimulating hormone','TSH','endocrinology','serum','synthetic analyser','mIU/L','syn-lab-edht','GB','ACTIVE','SYNTHETIC','synthetic:master27',{production_terminology:false}]
   ];
   for(const r of rows)test.run(...r.slice(0,15),json(r[15]));
   this.db.prepare('INSERT OR IGNORE INTO laboratory_panels VALUES(?,?,?,?,?,?,?)').run('panel-basic','BASIC-SYN','Synthetic Basic Panel','chemistry','syn-lab-edht','synthetic:master27',json({production_catalogue:false}));
   for(const [testId,sort] of [['lab-creat',1],['lab-crp',2]])this.db.prepare('INSERT OR IGNORE INTO laboratory_panel_tests VALUES(?,?,?)').run('panel-basic',testId,sort);
   const range=this.db.prepare('INSERT OR IGNORE INTO laboratory_reference_ranges VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
   range.run('range-hgb','lab-hgb','syn-lab-edht',120,170,'Synthetic fixture range only','g/L','ANY',null,null,'UNKNOWN','synthetic analyser','synthetic adult fixture','','','synthetic:master27','v1','SYNTHETIC',json({not_clinically_authoritative:true}));
   range.run('range-creat','lab-creat','syn-lab-edht',60,110,'Synthetic fixture range only','µmol/L','ANY',null,null,'UNKNOWN','synthetic analyser','synthetic adult fixture','','','synthetic:master27','v1','SYNTHETIC',json({not_clinically_authoritative:true}));
  });
 };

 Store.prototype.labProviders=function(user){const p=this.patient(user);this.audit(user.user_id,'LAB_PROVIDER_LIST_READ','',p.id);return this.db.prepare('SELECT * FROM laboratory_providers ORDER BY display_name').all().map(x=>({...x,provenance:parse(x.provenance)}));};
 Store.prototype.labCatalogue=function(user){const p=this.patient(user);this.audit(user.user_id,'LAB_CATALOGUE_READ','',p.id);return this.db.prepare('SELECT * FROM laboratory_tests ORDER BY category,test_name').all().map(x=>({...x,provenance:parse(x.provenance)}));};
 Store.prototype.labPanels=function(user){const p=this.patient(user);this.audit(user.user_id,'LAB_PANEL_LIST_READ','',p.id);return this.db.prepare('SELECT * FROM laboratory_panels ORDER BY panel_name').all().map(x=>({...x,provenance:parse(x.provenance),tests:this.db.prepare('SELECT t.* FROM laboratory_panel_tests pt JOIN laboratory_tests t ON t.test_id=pt.test_id WHERE pt.panel_id=? ORDER BY pt.sort_order').all(x.panel_id)}));};

 Store.prototype.labOrderSnapshot=function(patientId,id){
  const o=this.db.prepare('SELECT * FROM laboratory_orders WHERE id=? AND patient_id=?').get(id,patientId);if(!o)fail('LAB_ORDER_NOT_FOUND',404);
  return {...o,provenance:parse(o.provenance),tests:this.db.prepare('SELECT t.* FROM laboratory_order_tests ot JOIN laboratory_tests t ON t.test_id=ot.test_id WHERE ot.order_id=? ORDER BY t.test_name').all(id),specimens:this.db.prepare('SELECT * FROM laboratory_specimens WHERE order_id=? AND patient_id=? ORDER BY created_at').all(id,patientId)};
 };
 Store.prototype.createLabOrder=function(user,input={}){
  const p=this.patient(user),now=this.now(),priority=String(input.priority??'ROUTINE').toUpperCase(),tests=[...new Set(Array.isArray(input.test_ids)?input.test_ids:[])];
  if(!['ROUTINE','URGENT','STAT','UNKNOWN'].includes(priority))fail('INVALID_LAB_PRIORITY');if(!tests.length)fail('LAB_TEST_REQUIRED');
  for(const id of tests)if(!this.db.prepare("SELECT 1 FROM laboratory_tests WHERE test_id=? AND status='ACTIVE'").get(id))fail('LAB_TEST_NOT_FOUND',404);
  if(input.provider_id&&!this.db.prepare('SELECT 1 FROM laboratory_providers WHERE id=?').get(input.provider_id))fail('LAB_PROVIDER_NOT_FOUND',404);
  const id=randomUUID(),status=String(input.status??'REQUESTED').toUpperCase();if(!['DRAFT','REQUESTED'].includes(status))fail('INVALID_LAB_ORDER_STATE');
  return this.transaction(()=>{this.db.prepare('INSERT INTO laboratory_orders VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(id,p.id,text(input.requester??'Patient reported request',200),String(input.request_date??new Date(now).toISOString().slice(0,10)),priority,text(input.clinical_context??'',1000),input.provider_id??null,text(input.jurisdiction??'UNKNOWN',50),status,text(input.preparation??'',1000),String(input.source??'patient_reported'),json(input.provenance??{epistemic_state:'PATIENT_REPORTED'}),now,now);for(const testId of tests)this.db.prepare('INSERT INTO laboratory_order_tests(order_id,test_id,panel_id) VALUES(?,?,?)').run(id,testId,input.panel_id??null);this.db.prepare('INSERT INTO laboratory_order_events VALUES(?,?,?,?,?,?)').run(id,1,status,user.user_id,'',now);this.audit(user.user_id,'LAB_ORDER_CREATED',id,p.id);return this.labOrderSnapshot(p.id,id);});
 };
 Store.prototype.labOrders=function(user,status='all'){const p=this.patient(user),rows=status==='all'?this.db.prepare('SELECT id FROM laboratory_orders WHERE patient_id=? ORDER BY updated_at DESC').all(p.id):this.db.prepare('SELECT id FROM laboratory_orders WHERE patient_id=? AND status=? ORDER BY updated_at DESC').all(p.id,String(status).toUpperCase());this.audit(user.user_id,'LAB_ORDER_LIST_READ',status,p.id);return rows.map(x=>this.labOrderSnapshot(p.id,x.id));};
 Store.prototype.labOrder=function(user,id){const p=this.patient(user),out=this.labOrderSnapshot(p.id,id);this.audit(user.user_id,'LAB_ORDER_READ',id,p.id);return out;};
 Store.prototype.labOrderAction=function(user,id,next,reason=''){const p=this.patient(user);next=String(next).toUpperCase();return this.transaction(()=>{const o=this.db.prepare('SELECT * FROM laboratory_orders WHERE id=? AND patient_id=?').get(id,p.id);if(!o)fail('LAB_ORDER_NOT_FOUND',404);if(!(LAB_ORDER_TRANSITIONS[o.status]??[]).includes(next))fail('INVALID_LAB_ORDER_TRANSITION',409);const now=this.now(),v=1+this.db.prepare('SELECT COALESCE(MAX(version),0) v FROM laboratory_order_events WHERE order_id=?').get(id).v;this.db.prepare('UPDATE laboratory_orders SET status=?,updated_at=? WHERE id=?').run(next,now,id);this.db.prepare('INSERT INTO laboratory_order_events VALUES(?,?,?,?,?,?)').run(id,v,next,user.user_id,text(String(reason??''),500),now);this.audit(user.user_id,'LAB_ORDER_UPDATED',id,p.id);return this.labOrderSnapshot(p.id,id);});};

 Store.prototype.createLabSpecimen=function(user,orderId,input={}){
  const p=this.patient(user),o=this.db.prepare('SELECT * FROM laboratory_orders WHERE id=? AND patient_id=?').get(orderId,p.id);if(!o)fail('LAB_ORDER_NOT_FOUND',404);if(['CANCELLED','REJECTED','EXPIRED','FINAL'].includes(o.status))fail('LAB_ORDER_CLOSED',409);
  const id=randomUUID(),now=this.now();return this.transaction(()=>{this.db.prepare('INSERT INTO laboratory_specimens VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(id,orderId,p.id,text(input.specimen_type??'UNKNOWN',100),text(input.container??'',100),text(input.collection_method??'',200),null,'','', 'EXPECTED','UNKNOWN','','UNKNOWN',String(input.source??'synthetic:master27'),json(input.provenance??{epistemic_state:'OBSERVED'}),now,now);this.db.prepare('INSERT INTO laboratory_specimen_events VALUES(?,?,?,?,?)').run(id,1,'EXPECTED',user.user_id,'',now);this.audit(user.user_id,'SPECIMEN_CREATED',id,p.id);return this.db.prepare('SELECT * FROM laboratory_specimens WHERE id=?').get(id);});
 };
 Store.prototype.labSpecimenAction=function(user,id,next,details={}){
  const p=this.patient(user);next=String(next).toUpperCase();return this.transaction(()=>{const s=this.db.prepare('SELECT * FROM laboratory_specimens WHERE id=? AND patient_id=?').get(id,p.id);if(!s)fail('SPECIMEN_NOT_FOUND',404);if(!(SPECIMEN_TRANSITIONS[s.status]??[]).includes(next))fail('INVALID_SPECIMEN_TRANSITION',409);const now=this.now(),v=1+this.db.prepare('SELECT COALESCE(MAX(version),0) v FROM laboratory_specimen_events WHERE specimen_id=?').get(id).v;let collected=s.collected_at,collector=s.collector,location=s.collection_location,quality=s.quality_state,rejection=s.rejection_reason;if(next==='COLLECTED'){collected=Number(details.collected_at??now);collector=text(details.collector??'Patient collection',200);location=text(details.collection_location??'',200)}if(next==='REJECTED'){quality=String(details.quality_state??'REJECTED');rejection=text(details.rejection_reason??'Unspecified specimen rejection',500)}this.db.prepare('UPDATE laboratory_specimens SET status=?,collected_at=?,collector=?,collection_location=?,quality_state=?,rejection_reason=?,updated_at=? WHERE id=?').run(next,collected,collector,location,quality,rejection,now,id);this.db.prepare('INSERT INTO laboratory_specimen_events VALUES(?,?,?,?,?)').run(id,v,next,user.user_id,text(details.reason??rejection??'',500),now);this.audit(user.user_id,next==='REJECTED'?'SPECIMEN_REJECTED':'SPECIMEN_'+next,id,p.id);return this.db.prepare('SELECT * FROM laboratory_specimens WHERE id=?').get(id);});
 };
 Store.prototype.createLabAccession=function(user,input={}){
  const p=this.patient(user),o=this.db.prepare('SELECT * FROM laboratory_orders WHERE id=? AND patient_id=?').get(input.order_id,p.id),s=this.db.prepare('SELECT * FROM laboratory_specimens WHERE id=? AND patient_id=?').get(input.specimen_id,p.id);if(!o||!s||s.order_id!==o.id)fail('LAB_ACCESSION_OWNERSHIP_MISMATCH',409);if(s.status!=='RECEIVED')fail('SPECIMEN_NOT_RECEIVED',409);
  const id=randomUUID(),number=text(input.accession_number??('SYN-'+id.slice(0,8)),100),now=this.now();return this.transaction(()=>{this.db.prepare('INSERT INTO laboratory_accessions VALUES(?,?,?,?,?,?,?,?,?,?,?)').run(id,number,p.id,o.id,s.id,input.provider_id??o.provider_id,Number(input.received_at??now),null,null,String(input.source??'synthetic:master27'),json(input.provenance??{production_lis:false}));const v=1+this.db.prepare('SELECT COALESCE(MAX(version),0) v FROM laboratory_specimen_events WHERE specimen_id=?').get(s.id).v;this.db.prepare("UPDATE laboratory_specimens SET status='ACCESSIONED',updated_at=? WHERE id=?").run(now,s.id);this.db.prepare('INSERT INTO laboratory_specimen_events VALUES(?,?,?,?,?)').run(s.id,v,'ACCESSIONED',user.user_id,'',now);this.audit(user.user_id,'SPECIMEN_ACCESSIONED',id,p.id);return this.db.prepare('SELECT * FROM laboratory_accessions WHERE id=?').get(id);});
 };

 Store.prototype.labReferenceFor=function(testId,providerId=null,context={}){
  const candidates=this.db.prepare("SELECT * FROM laboratory_reference_ranges WHERE test_id=? AND (provider_id IS NULL OR provider_id=?)").all(testId,providerId);
  const test=this.db.prepare('SELECT * FROM laboratory_tests WHERE test_id=?').get(testId);
  const patientId=context.patient_id??null;
  let ageDays=context.age_days;
  if(ageDays==null&&patientId){
    const birth=this.db.prepare('SELECT birth_date FROM patient_details WHERE patient_id=?').get(patientId)?.birth_date;
    const when=timestamp(context.observed_at);
    if(birth&&when!=null&&Number.isFinite(Date.parse(birth)))ageDays=Math.max(0,Math.floor((when-Date.parse(birth))/86400000));
  }
  const sex=String(context.sex_context??'UNKNOWN').toUpperCase(),pregnancy=String(context.pregnancy_context??'UNKNOWN').toUpperCase();
  const unit=String(context.unit??test?.default_unit??''),method=String(context.method??test?.method??'');
  const effectiveDate=timestamp(context.observed_at)==null?null:new Date(timestamp(context.observed_at)).toISOString().slice(0,10);
  const valid=candidates.filter(r=>{
    if(context.reference_range_id&&r.id!==context.reference_range_id)return false;
    if(r.unit&&unit&&r.unit!==unit)return false;
    if(r.method&&(!method||r.method.toLowerCase()!==method.toLowerCase()))return false;
    if(r.sex_context&&r.sex_context!=='ANY'&&(sex==='UNKNOWN'||r.sex_context!==sex))return false;
    if(r.pregnancy_context&&r.pregnancy_context!=='UNKNOWN'&&(pregnancy==='UNKNOWN'||r.pregnancy_context!==pregnancy))return false;
    if((r.age_min_days!=null||r.age_max_days!=null)&&(ageDays==null||r.age_min_days!=null&&ageDays<r.age_min_days||r.age_max_days!=null&&ageDays>r.age_max_days))return false;
    if((r.effective_from||r.effective_to)&&(!effectiveDate||r.effective_from&&effectiveDate<r.effective_from||r.effective_to&&effectiveDate>r.effective_to))return false;
    if(r.population&&r.population!==(context.population??''))return false;
    return true;
  });
  valid.sort((a,b)=>(b.provider_id===providerId?1:0)-(a.provider_id===providerId?1:0)
    ||(b.verification_state==='VERIFIED'?1:0)-(a.verification_state==='VERIFIED'?1:0)
    ||(b.method?1:0)-(a.method?1:0)
    ||String(b.effective_from??'').localeCompare(String(a.effective_from??'')));
  const r=valid[0];
  return r?{...r,provenance:parse(r.provenance),selection_context:{unit,method,sex_context:sex,pregnancy_context:pregnancy,age_days:ageDays??null,effective_date:effectiveDate,population:context.population??null}}:null;
 };
 Store.prototype.importLabResult=function(user,input={}){
  const p=this.patient(user),test=this.db.prepare('SELECT * FROM laboratory_tests WHERE test_id=?').get(input.test_id);
  if(!test)fail('LAB_TEST_NOT_FOUND',404);
  if(input.order_id&&!this.db.prepare('SELECT 1 FROM laboratory_orders WHERE id=? AND patient_id=?').get(input.order_id,p.id))fail('LAB_ORDER_NOT_FOUND',404);
  if(input.specimen_id){const specimen=this.db.prepare('SELECT * FROM laboratory_specimens WHERE id=? AND patient_id=?').get(input.specimen_id,p.id);if(!specimen||(input.order_id&&specimen.order_id!==input.order_id))fail('LAB_RESULT_SPECIMEN_MISMATCH',409);if(['REJECTED','CANCELLED'].includes(specimen.status))fail('SPECIMEN_REJECTED',409)}
  const sourceSystem=text(input.source_system??'EDHT_MANUAL',100),external=input.external_result_id==null?null:text(String(input.external_result_id),200),status=String(input.status??'REGISTERED').toUpperCase();
  const valueType=String(input.value_type??(typeof input.value==='number'?'NUMERIC':input.value==null?'UNKNOWN':'TEXT')).toUpperCase(),value=normalizeValue(valueType,input.value??null);
  const flag=String(input.source_flag??'UNKNOWN').toUpperCase(),epistemic=String(input.epistemic_state??(sourceSystem==='PATIENT'?'PATIENT_REPORTED':'MEASURED')).toUpperCase(),verification=String(input.verification_state??'UNVERIFIED').toUpperCase();
  if(status!=='REGISTERED'&&!LAB_RESULT_TRANSITIONS.REGISTERED.includes(status))fail('INVALID_LAB_RESULT_STATUS');
  if(!VALUE_TYPES.has(valueType)||!FLAGS.has(flag)||!EPISTEMIC.has(epistemic)||!['SYNTHETIC','UNVERIFIED','VERIFIED','STALE','UNKNOWN'].includes(verification))fail('INVALID_LAB_RESULT');
  const rangeContext={patient_id:p.id,unit:input.unit??test.default_unit,method:input.method??test.method,observed_at:input.observed_at,sex_context:input.sex_context,pregnancy_context:input.pregnancy_context,population:input.population,reference_range_id:input.reference_range_id};
  const range=this.labReferenceFor(test.test_id,Object.prototype.hasOwnProperty.call(input,'laboratory_id')?input.laboratory_id:test.provider_id??null,rangeContext);
  if(input.reference_range_id&&(!range||range.id!==input.reference_range_id))fail('REFERENCE_RANGE_CONTEXT_MISMATCH',409);
  const snapshot=range?{id:range.id,lower_bound:range.lower_bound,upper_bound:range.upper_bound,reference_text:range.reference_text,unit:range.unit,source:range.source,source_version:range.source_version,verification_state:range.verification_state,selection_context:range.selection_context}:{state:'REFERENCE_RANGE_UNKNOWN'};
  const rangeId=range?.id??null;
  const normalized={status,value_type:valueType,value,unit:String(input.unit??test.default_unit??''),reference_range_id:rangeId,reference_range_snapshot:snapshot,
   source_flag:flag,flag_origin:String(input.flag_origin??(flag==='UNKNOWN'?'NONE':'SOURCE_PROVIDED')).toUpperCase(),epistemic_state:epistemic,
   method:String(input.method??test.method??''),laboratory_id:Object.prototype.hasOwnProperty.call(input,'laboratory_id')?input.laboratory_id:test.provider_id??null,performer:String(input.performer??''),
   observed_at:timestamp(input.observed_at),issued_at:timestamp(input.issued_at),source:String(input.source??sourceSystem),
   provenance:input.provenance??{source_system:sourceSystem,external_result_id:external},verification_state:verification};
  const payloadHash=sha(normalized);
  const existing=external?this.db.prepare('SELECT * FROM laboratory_results WHERE patient_id=? AND source_system=? AND external_result_id=?').get(p.id,sourceSystem,external):null;
  if(existing){
   const latest=this.db.prepare('SELECT * FROM laboratory_result_versions WHERE result_id=? ORDER BY version DESC LIMIT 1').get(existing.id);
   if(latest.payload_hash===payloadHash){this.audit(user.user_id,'LAB_RESULT_IMPORT_REPLAY',existing.id,p.id);return{result_id:existing.id,version:latest.version,replayed:true}}
   if(!['CORRECTED','AMENDED'].includes(status))fail('IMPORT_SOURCE_CONFLICT',409);
   return this.reviseLabResult(user,existing.id,{...input,...normalized,status});
  }
  const id=randomUUID(),now=this.now();
  return this.transaction(()=>{
   this.db.prepare('INSERT INTO laboratory_results VALUES(?,?,?,?,?,?,?,?,?)').run(id,p.id,input.order_id??null,input.specimen_id??null,test.test_id,input.panel_id??null,sourceSystem,external,now);
   this.db.prepare('INSERT INTO laboratory_result_versions(result_id,version,status,value_type,value_json,unit,reference_range_id,reference_range_snapshot,source_flag,flag_origin,epistemic_state,method,laboratory_id,performer,observed_at,issued_at,correction_reason,previous_version,source,provenance,verification_state,payload_hash,created_at,actor_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run(id,1,status,valueType,json(value),normalized.unit,rangeId,json(snapshot),flag,normalized.flag_origin,epistemic,normalized.method,normalized.laboratory_id,normalized.performer,normalized.observed_at,normalized.issued_at,'',null,normalized.source,json(normalized.provenance),verification,payloadHash,now,user.user_id);
   this.audit(user.user_id,status==='PRELIMINARY'?'LAB_RESULT_PRELIMINARY':FINALISH.has(status)?'LAB_RESULT_FINAL':'LAB_RESULT_IMPORTED',id,p.id);
   if(['CRITICAL_LOW','CRITICAL_HIGH'].includes(flag)){const nid=randomUUID();this.db.prepare('INSERT INTO laboratory_critical_notifications VALUES(?,?,?,?,?,?,?,?,?)').run(nid,p.id,id,1,'PATIENT_AND_PROVIDER','SYNTHETIC_NOTIFICATION',now,null,'synthetic:master27');this.audit(user.user_id,'CRITICAL_RESULT_NOTIFICATION_CREATED',nid,p.id)}
   if(input.order_id)this.syncLabOrderFromResult?.(user,input.order_id);
   return{result_id:id,version:1,status,replayed:false};
  });
 };
 Store.prototype.reviseLabResult=function(user,id,input={}){
  const p=this.patient(user),record=this.db.prepare('SELECT * FROM laboratory_results WHERE id=? AND patient_id=?').get(id,p.id);
  if(!record)fail('LAB_RESULT_NOT_FOUND',404);
  const latest=this.db.prepare('SELECT * FROM laboratory_result_versions WHERE result_id=? ORDER BY version DESC LIMIT 1').get(id),status=String(input.status??'').toUpperCase();
  if(!(LAB_RESULT_TRANSITIONS[latest.status]??[]).includes(status))fail('INVALID_LAB_RESULT_TRANSITION',409);
  const reason=text(input.correction_reason??'',500);
  if(['CORRECTED','AMENDED'].includes(status)&&!reason)fail('CORRECTION_REASON_REQUIRED');
  const version=latest.version+1,now=this.now(),valueType=String(input.value_type??latest.value_type).toUpperCase();
  const value=normalizeValue(valueType,Object.prototype.hasOwnProperty.call(input,'value')?input.value:parse(latest.value_json,null));
  const flag=String(input.source_flag??latest.source_flag).toUpperCase(),epistemic=String(input.epistemic_state??latest.epistemic_state).toUpperCase(),verification=String(input.verification_state??latest.verification_state).toUpperCase();
  if(!VALUE_TYPES.has(valueType)||!FLAGS.has(flag)||!EPISTEMIC.has(epistemic)||!['SYNTHETIC','UNVERIFIED','VERIFIED','STALE','UNKNOWN'].includes(verification))fail('INVALID_LAB_RESULT');
  const selectedRangeId=Object.prototype.hasOwnProperty.call(input,'reference_range_id')?input.reference_range_id:latest.reference_range_id;
  let range=null,snapshot;
  if(selectedRangeId===latest.reference_range_id){snapshot=parse(latest.reference_range_snapshot,{state:'REFERENCE_RANGE_UNKNOWN'});range=selectedRangeId?this.db.prepare('SELECT * FROM laboratory_reference_ranges WHERE id=? AND test_id=?').get(selectedRangeId,record.test_id):null;}
  else if(selectedRangeId){const test=this.db.prepare('SELECT * FROM laboratory_tests WHERE test_id=?').get(record.test_id);range=this.labReferenceFor(record.test_id,input.laboratory_id??latest.laboratory_id??test?.provider_id??null,{patient_id:p.id,unit:input.unit??latest.unit,method:input.method??latest.method,observed_at:input.observed_at??latest.observed_at,sex_context:input.sex_context,pregnancy_context:input.pregnancy_context,population:input.population,reference_range_id:selectedRangeId});if(!range)fail('REFERENCE_RANGE_CONTEXT_MISMATCH',409);snapshot={id:range.id,lower_bound:range.lower_bound,upper_bound:range.upper_bound,reference_text:range.reference_text,unit:range.unit,source:range.source,source_version:range.source_version,verification_state:range.verification_state,selection_context:range.selection_context};}
  else snapshot={state:'REFERENCE_RANGE_UNKNOWN'};
  const payload={status,value_type:valueType,value,unit:String(input.unit??latest.unit),reference_range_id:selectedRangeId??null,reference_range_snapshot:snapshot,
   source_flag:flag,flag_origin:String(input.flag_origin??latest.flag_origin),epistemic_state:epistemic,method:String(input.method??latest.method),
   laboratory_id:input.laboratory_id??latest.laboratory_id,performer:String(input.performer??latest.performer),
   observed_at:Object.prototype.hasOwnProperty.call(input,'observed_at')?timestamp(input.observed_at):timestamp(latest.observed_at),
   issued_at:Object.prototype.hasOwnProperty.call(input,'issued_at')?timestamp(input.issued_at):timestamp(latest.issued_at),
   source:String(input.source??latest.source),provenance:input.provenance??parse(latest.provenance),verification_state:verification};
  const payloadHash=sha(payload);
  return this.transaction(()=>{
   this.db.prepare('INSERT INTO laboratory_result_versions(result_id,version,status,value_type,value_json,unit,reference_range_id,reference_range_snapshot,source_flag,flag_origin,epistemic_state,method,laboratory_id,performer,observed_at,issued_at,correction_reason,previous_version,source,provenance,verification_state,payload_hash,created_at,actor_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run(id,version,status,valueType,json(value),payload.unit,selectedRangeId??null,json(snapshot),flag,payload.flag_origin,epistemic,payload.method,payload.laboratory_id,payload.performer,payload.observed_at,payload.issued_at,reason,latest.version,payload.source,json(payload.provenance),verification,payloadHash,now,user.user_id);
   this.audit(user.user_id,status==='CORRECTED'?'LAB_RESULT_CORRECTED':status==='AMENDED'?'LAB_RESULT_AMENDED':status==='FINAL'?'LAB_RESULT_FINAL':'LAB_RESULT_UPDATED',id,p.id);
   if(['CRITICAL_LOW','CRITICAL_HIGH'].includes(flag)){const nid=randomUUID();this.db.prepare('INSERT INTO laboratory_critical_notifications VALUES(?,?,?,?,?,?,?,?,?)').run(nid,p.id,id,version,'PATIENT_AND_PROVIDER','SYNTHETIC_NOTIFICATION',now,null,'synthetic:master27');this.audit(user.user_id,'CRITICAL_RESULT_NOTIFICATION_CREATED',nid,p.id)}
   if(record.order_id)this.syncLabOrderFromResult?.(user,record.order_id);
   return{result_id:id,version,status};
  });
 };
 Store.prototype.labResults=function(user,filters={}){const p=this.patient(user),rows=this.db.prepare("SELECT r.*,v.*,t.test_name,t.local_code,t.category FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(x.version) FROM laboratory_result_versions x WHERE x.result_id=r.id) JOIN laboratory_tests t ON t.test_id=r.test_id WHERE r.patient_id=? ORDER BY COALESCE(v.issued_at,v.created_at) DESC").all(p.id).map(x=>({...x,value:parse(x.value_json,null),reference_range_snapshot:parse(x.reference_range_snapshot),provenance:parse(x.provenance)}));const out=rows.filter(x=>(!filters.test_id||x.test_id===filters.test_id)&&(!filters.status||x.status===String(filters.status).toUpperCase())&&(!filters.flag||x.source_flag===String(filters.flag).toUpperCase())&&(!filters.category||x.category===filters.category));this.audit(user.user_id,'LAB_HISTORY_VIEWED','',p.id);return out;};
 Store.prototype.labResult=function(user,id){const p=this.patient(user),r=this.db.prepare('SELECT r.*,t.test_name,t.local_code,t.category FROM laboratory_results r JOIN laboratory_tests t ON t.test_id=r.test_id WHERE r.id=? AND r.patient_id=?').get(id,p.id);if(!r)fail('LAB_RESULT_NOT_FOUND',404);const versions=this.db.prepare('SELECT * FROM laboratory_result_versions WHERE result_id=? ORDER BY version DESC').all(id).map(x=>({...x,value:parse(x.value_json,null),reference_range_snapshot:parse(x.reference_range_snapshot),provenance:parse(x.provenance)}));this.audit(user.user_id,'LAB_RESULT_VIEWED',id,p.id);return{...r,versions,current:versions[0]};};
 Store.prototype.labLongitudinal=function(user){const p=this.patient(user),laboratory=this.labResults(user),reported=this.db.prepare("SELECT id,body,source,created_at FROM current_records WHERE patient_id=? AND archived=0 AND kind='observation' ORDER BY created_at DESC").all(p.id).map(x=>({id:x.id,kind:'PATIENT_OBSERVATION',epistemic_state:x.source?.startsWith('synthetic_fhir:')?'OBSERVED':'PATIENT_REPORTED',source:x.source,created_at:x.created_at,body:parse(x.body)}));return{laboratory:laboratory.map(x=>({...x,kind:'LABORATORY_RESULT'})),patient_reported:reported};};
 Store.prototype.labTrendSeries=function(user,testId){const rows=this.labResults(user,{test_id:testId}).filter(x=>FINALISH.has(x.status));if(!rows.length)return{test_id:testId,compatibility:'INSUFFICIENT_DATA',series:[]};const base=rows[0],compatible=rows.filter(x=>x.unit===base.unit&&x.method===base.method),incompatible=rows.filter(x=>x.unit!==base.unit||x.method!==base.method);return{test_id:testId,compatibility:incompatible.length?'NOT_COMPARABLE':'COMPARABLE',series:compatible.sort((a,b)=>a.observed_at-b.observed_at).map(x=>({at:x.observed_at,value:x.value,unit:x.unit,status:x.status,flag:x.source_flag,version:x.version})),excluded:incompatible.map(x=>({result_id:x.id,reason:'UNIT_OR_METHOD_MISMATCH'}))};};

 Store.prototype.createDiagnosticReport=function(user,input={}){
  const p=this.patient(user),refs=[...new Set(input.result_refs??[])],specimens=[...new Set(input.specimen_refs??[])],attachments=[...new Set(input.attachment_refs??[])];
  const id=randomUUID(),now=this.now(),status=String(input.status??'FINAL').toUpperCase();if(!['PRELIMINARY','FINAL'].includes(status))fail('INVALID_DIAGNOSTIC_REPORT_STATUS');
  return this.transaction(()=>{
   this.db.prepare('INSERT INTO diagnostic_reports VALUES(?,?,?,?,?)').run(id,p.id,input.order_id??null,input.provider_id??null,now);
   this.db.prepare('INSERT INTO diagnostic_report_versions(report_id,version,status,title,result_refs,specimen_refs,attachment_refs,performer,report_text,issued_at,source,provenance,created_at,actor_id,correction_reason,previous_version) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run(id,1,status,text(input.title??'Laboratory Diagnostic Report',200),json(refs),json(specimens),json(attachments),text(input.performer??'',200),text(input.report_text??'',5000),timestamp(input.issued_at)??now,String(input.source??'synthetic:master27'),json(input.provenance??{production_lis:false}),now,user.user_id,'',null);
   this.audit(user.user_id,'DIAGNOSTIC_REPORT_CREATED',id,p.id);return{report_id:id,version:1,status};
  });
 };
 Store.prototype.reviseDiagnosticReport=function(user,id,input={}){
  const p=this.patient(user),report=this.db.prepare('SELECT * FROM diagnostic_reports WHERE id=? AND patient_id=?').get(id,p.id);if(!report)fail('DIAGNOSTIC_REPORT_NOT_FOUND',404);
  const latest=this.db.prepare('SELECT * FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC LIMIT 1').get(id),status=String(input.status??'').toUpperCase();
  if(!['CORRECTED','AMENDED','CANCELLED'].includes(status))fail('INVALID_DIAGNOSTIC_REPORT_STATUS');
  const reason=text(input.correction_reason??'',500);if(['CORRECTED','AMENDED'].includes(status)&&!reason)fail('CORRECTION_REASON_REQUIRED');
  const refs=Object.prototype.hasOwnProperty.call(input,'result_refs')?[...new Set(input.result_refs)]:parse(latest.result_refs,[]);
  const specimens=Object.prototype.hasOwnProperty.call(input,'specimen_refs')?[...new Set(input.specimen_refs)]:parse(latest.specimen_refs,[]);
  const attachments=Object.prototype.hasOwnProperty.call(input,'attachment_refs')?[...new Set(input.attachment_refs)]:parse(latest.attachment_refs,[]);
  const version=latest.version+1,now=this.now();
  return this.transaction(()=>{
   this.db.prepare('INSERT INTO diagnostic_report_versions(report_id,version,status,title,result_refs,specimen_refs,attachment_refs,performer,report_text,issued_at,source,provenance,created_at,actor_id,correction_reason,previous_version) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run(id,version,status,text(input.title??latest.title,200),json(refs),json(specimens),json(attachments),text(input.performer??latest.performer,200),text(input.report_text??latest.report_text,5000),timestamp(input.issued_at)??latest.issued_at,String(input.source??latest.source),json(input.provenance??parse(latest.provenance)),now,user.user_id,reason,latest.version);
   this.audit(user.user_id,'DIAGNOSTIC_REPORT_'+status,id,p.id);return{report_id:id,version,status};
  });
 };
 Store.prototype.labReport=function(user,id){const p=this.patient(user),r=this.db.prepare('SELECT * FROM diagnostic_reports WHERE id=? AND patient_id=?').get(id,p.id);if(!r)fail('DIAGNOSTIC_REPORT_NOT_FOUND',404);const versions=this.db.prepare('SELECT * FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC').all(id).map(x=>({...x,result_refs:parse(x.result_refs,[]),specimen_refs:parse(x.specimen_refs,[]),attachment_refs:parse(x.attachment_refs,[]),provenance:parse(x.provenance)}));this.audit(user.user_id,'DIAGNOSTIC_REPORT_VIEWED',id,p.id);return{...r,current:versions[0],versions};};
 Store.prototype.labReports=function(user){const p=this.patient(user),ids=this.db.prepare('SELECT id FROM diagnostic_reports WHERE patient_id=? ORDER BY created_at DESC').all(p.id);return ids.map(x=>this.labReport(user,x.id));};
 Store.prototype.labNotifications=function(user){const p=this.patient(user);return this.db.prepare('SELECT * FROM laboratory_critical_notifications WHERE patient_id=? ORDER BY created_at DESC').all(p.id);};
 Store.prototype.ackLabNotification=function(user,id){const p=this.patient(user);return this.transaction(()=>{const n=this.db.prepare('SELECT * FROM laboratory_critical_notifications WHERE id=? AND patient_id=?').get(id,p.id);if(!n)fail('LAB_NOTIFICATION_NOT_FOUND',404);const now=this.now();this.db.prepare("UPDATE laboratory_critical_notifications SET status='ACKNOWLEDGED',acknowledged_at=? WHERE id=?").run(now,id);this.audit(user.user_id,'CRITICAL_RESULT_ACKNOWLEDGED',id,p.id);return{...n,status:'ACKNOWLEDGED',acknowledged_at:now};});};
 Store.prototype.labProviderBoundary=function(user){const p=this.patient(user);this.audit(user.user_id,'LAB_PROVIDER_BOUNDARY_READ','',p.id);return{status:'INTERFACE_ONLY',production_lis_lims:false,production_national_lab_network:false,production_terminology:false,production_reference_ranges:false,production_devices:false,critical_provider_delivery:false,interfaces:['LaboratoryProvider','LaboratoryOrderProvider','LaboratoryResultProvider','SpecimenProvider','DiagnosticReportProvider','TerminologyProvider'],fhir:['ServiceRequest','Specimen','Observation','DiagnosticReport']};};
 Store.prototype.labAssistant=function(user,input={}){const p=this.patient(user),message=String(input.message??''),refs=this.labResults(user).slice(0,20).map(x=>({id:x.id,version:x.version,status:x.status,flag:x.source_flag}));let answer='I can explain recorded laboratory terminology, statuses, source flags and provenance. I cannot diagnose or recommend treatment.';if(/diagnos|prescrib|treat|dose|therapy|диагноз|леч|доз/i.test(message))answer='I cannot diagnose, prescribe, change treatment or infer a reference range. I can show the recorded result, source flag and questions to discuss with a clinician.';this.audit(user.user_id,'LAB_ASSISTANT_USED','',p.id);return{status:'INFORMATION_ONLY',is_generative_ai:false,text:answer,source_results:refs,boundaries:{diagnose:false,prescribe:false,treatment_recommendation:false,dose_adjustment:false,invent_reference_range:false,override_clinician:false}};};
}

export const LABORATORY_PRODUCTION_STATUS=Object.freeze({orders:'IMPLEMENTED',specimens:'IMPLEMENTED',accessioning:'IMPLEMENTED',test_catalogue:'SYNTHETIC_ADAPTER',panels:'IMPLEMENTED',result_versioning:'IMPLEMENTED',diagnostic_reports:'IMPLEMENTED',longitudinal_history:'IMPLEMENTED',trends:'IMPLEMENTED',critical_patient_notifications:'SYNTHETIC_ADAPTER',provider_critical_delivery:'INTERFACE_ONLY',production_lis_lims:'EXTERNAL_GATE',production_terminology:'EXTERNAL_GATE',production_reference_ranges:'EXTERNAL_GATE',production_devices:'EXTERNAL_GATE'});
