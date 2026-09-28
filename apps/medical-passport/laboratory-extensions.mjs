import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID, createHash } from 'node:crypto';
import { HttpError } from './store.mjs';

const fail=(code,status=400)=>{throw new HttpError(status,code)};
const text=(v,max=200)=>{v=String(v??'').trim();if(v.length>max)fail('INVALID_TEXT');return v};
const safeDate=v=>{if(!v)return 0;const n=Date.parse(v);if(!Number.isFinite(n))fail('INVALID_DATE');return n};
const json=v=>JSON.stringify(v??{});
const parse=(v,f={})=>{try{return JSON.parse(v)}catch{return f}};
const sha=v=>createHash('sha256').update(JSON.stringify(v)).digest('hex');
const arr=(v,max=100)=>{if(v==null)return[];if(!Array.isArray(v)||v.length>max)fail('INVALID_ARRAY');return v};
const strings=(v,max=50,len=200)=>arr(v,max).map(x=>text(x,len)).filter(Boolean);
const DOMAINS=new Set(['PATHOLOGY','MICROBIOLOGY','MOLECULAR_GENETICS','POCT']);
const SPECIALTY_TRANSITIONS=Object.freeze({
 REGISTERED:['PRELIMINARY','FINAL','CANCELLED','ENTERED_IN_ERROR'],
 PRELIMINARY:['FINAL','CORRECTED','AMENDED','CANCELLED','ENTERED_IN_ERROR'],
 FINAL:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],
 CORRECTED:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],
 AMENDED:['CORRECTED','AMENDED','ENTERED_IN_ERROR'],
 CANCELLED:[],ENTERED_IN_ERROR:[]
});
const here=path.dirname(fileURLToPath(import.meta.url));
const migration10=fs.readFileSync(path.join(here,'migrations','010.sql'),'utf8');

function domain(v){v=String(v??'').toUpperCase();if(!DOMAINS.has(v))fail('INVALID_LAB_SPECIALTY');return v}
function specialtyPayload(kind,input={}){
 if(kind==='PATHOLOGY'){
  const payload={
   anatomic_site:text(input.anatomic_site,300),
   procedure:text(input.procedure,300),
   gross_description:text(input.gross_description,5000),
   microscopy:text(input.microscopy,5000),
   diagnosis_text:text(input.diagnosis_text,5000),
   pathologist:text(input.pathologist,300),
   method:text(input.method,300),
   clinical_episode_ref:text(input.clinical_episode_ref,300),
   correlation_refs:strings(input.correlation_refs,50,300),
   specialist_interpretation_required:true,
   autonomous_diagnosis:false
  };
  if(!payload.anatomic_site&&!payload.gross_description&&!payload.microscopy&&!payload.diagnosis_text)fail('PATHOLOGY_CONTENT_REQUIRED');
  return payload;
 }
 if(kind==='MICROBIOLOGY'){
  const detection=String(input.detection_result??'PENDING').toUpperCase(),culture=String(input.culture_status??'PENDING').toUpperCase();
  if(!['PENDING','DETECTED','NOT_DETECTED','INDETERMINATE'].includes(detection))fail('INVALID_MICROBIOLOGY_DETECTION');
  if(!['PENDING','NO_GROWTH','GROWTH','MIXED','NOT_APPLICABLE'].includes(culture))fail('INVALID_MICROBIOLOGY_CULTURE');
  const susceptibility=arr(input.susceptibility,100).map(x=>{
   if(!x||typeof x!=='object'||Array.isArray(x))fail('INVALID_SUSCEPTIBILITY');
   const interpretation=String(x.interpretation??'UNKNOWN').toUpperCase();
   if(!['SUSCEPTIBLE','INTERMEDIATE','RESISTANT','UNKNOWN'].includes(interpretation))fail('INVALID_SUSCEPTIBILITY');
   return{antibiotic:text(x.antibiotic,200),mic:x.mic==null?null:text(x.mic,100),unit:text(x.unit,50),interpretation,method:text(x.method,200),source_interpretation:text(x.source_interpretation,500)};
  });
  return{specimen:text(input.specimen,300),organism:text(input.organism,300),detection_result:detection,culture_status:culture,susceptibility,method:text(input.method,300),source_interpretation:text(input.source_interpretation,2000),therapy_recommendation:false,autonomous_antibiotic_selection:false};
 }
 if(kind==='MOLECULAR_GENETICS'){
  const variants=arr(input.variants,100).map(x=>{
   if(!x||typeof x!=='object'||Array.isArray(x))fail('INVALID_GENETIC_VARIANT');
   const gene=text(x.gene,100),variant=text(x.variant,500),classification=text(x.classification,200),classification_source=text(x.classification_source,500);
   if(!gene||!variant)fail('GENETIC_VARIANT_REQUIRED');
   if(classification&&!classification_source)fail('GENETIC_INTERPRETATION_SOURCE_REQUIRED');
   return{gene,variant,zygosity:text(x.zygosity,100),classification,classification_source,evidence_level:text(x.evidence_level,200)};
  });
  if(!variants.length)fail('GENETIC_VARIANT_REQUIRED');
  return{sample:text(input.sample,300),variants,method:text(input.method,300),reference_assembly:text(input.reference_assembly,100),laboratory:text(input.laboratory,300),result:text(input.result,3000),interpretation_source:text(input.interpretation_source,500),evidence_level:text(input.evidence_level,200),fabricated_variants:false,fabricated_pathogenicity:false,fabricated_pgx:false,pharmacogenomic_action:false};
 }
 const device=input.device&&typeof input.device==='object'&&!Array.isArray(input.device)?input.device:{},measurement=input.measurement&&typeof input.measurement==='object'&&!Array.isArray(input.measurement)?input.measurement:{};
 const value=measurement.value??input.value;
 if(!text(device.id??input.device_id,200))fail('POCT_DEVICE_REQUIRED');
 if(!text(measurement.code??measurement.name??input.measurement_code??input.measurement_name,200))fail('POCT_MEASUREMENT_REQUIRED');
 if(value===undefined||value===null||String(value).length>500)fail('POCT_VALUE_REQUIRED');
 return{device:{id:text(device.id??input.device_id,200),manufacturer:text(device.manufacturer,200),model:text(device.model,200),serial:text(device.serial,200)},measurement:{code:text(measurement.code??input.measurement_code,100),name:text(measurement.name??input.measurement_name,300),value,unit:text(measurement.unit??input.unit,100)},method:text(input.method,300),observed_at:Number(input.observed_at??Date.now()),device_verification_state:String(input.device_verification_state??'UNVERIFIED').toUpperCase()==='SYNTHETIC'?'SYNTHETIC':'UNVERIFIED',laboratory_verified:false,lab_equivalent:false};
}

export function attachLaboratoryExtensions(Store){
 if(Store.prototype.laboratoryExtensionsAttached)return;
 Store.prototype.laboratoryExtensionsAttached=true;

 Store.prototype.initLaboratoryExtensions=function(){
  if(this.db.prepare('SELECT 1 FROM migrations WHERE version=10').get())return false;
  this.transaction(()=>{this.db.exec(migration10);this.db.prepare('INSERT INTO migrations(version,applied_at) VALUES(10,?)').run(this.now());});
  return true;
 };

 Store.prototype.linkLabAttachment=function(user,resultId,version,documentId,relation='SOURCE_REPORT'){
  const p=this.patient(user),result=this.db.prepare('SELECT * FROM laboratory_results WHERE id=? AND patient_id=?').get(resultId,p.id);
  if(!result)fail('LAB_RESULT_NOT_FOUND',404);
  if(!this.db.prepare('SELECT 1 FROM laboratory_result_versions WHERE result_id=? AND version=?').get(resultId,Number(version)))fail('LAB_RESULT_VERSION_NOT_FOUND',404);
  if(!this.db.prepare('SELECT 1 FROM documents WHERE id=? AND patient_id=?').get(documentId,p.id))fail('DOCUMENT_NOT_FOUND',404);
  const rel=text(relation,50)||'SOURCE_REPORT';
  return this.transaction(()=>{this.db.prepare('INSERT OR IGNORE INTO laboratory_result_attachments VALUES(?,?,?,?,?)').run(resultId,Number(version),documentId,rel,this.now());this.audit(user.user_id,'LAB_ATTACHMENT_LINKED',resultId+':'+version,p.id);return{result_id:resultId,result_version:Number(version),document_id:documentId,relation:rel};});
 };

 Store.prototype.labAttachments=function(user,resultId){
  const p=this.patient(user);if(!this.db.prepare('SELECT 1 FROM laboratory_results WHERE id=? AND patient_id=?').get(resultId,p.id))fail('LAB_RESULT_NOT_FOUND',404);
  const rows=this.db.prepare(`SELECT a.result_id,a.result_version,a.document_id,a.relation,a.created_at,d.name,d.mime,d.document_type,d.source,d.sha256,d.created_at document_created_at FROM laboratory_result_attachments a JOIN documents d ON d.id=a.document_id WHERE a.result_id=? AND d.patient_id=? ORDER BY a.result_version DESC,a.created_at DESC`).all(resultId,p.id);
  this.audit(user.user_id,'LAB_ATTACHMENT_VIEWED',resultId,p.id);return rows;
 };

 Store.prototype.labResultSearch=function(user,filters={}){
  let rows=this.labResults(user,{test_id:filters.test_id||'',status:filters.status||'',flag:filters.flag||'',category:filters.category||''});
  const q=text(filters.q??'',100).toLowerCase(),provider=text(filters.provider??'',100).toLowerCase(),specimen=text(filters.specimen_type??'',100).toLowerCase(),source=text(filters.source??'',100).toLowerCase(),from=safeDate(filters.date_from),to=safeDate(filters.date_to);
  rows=rows.map(x=>{const s=x.specimen_id?this.db.prepare('SELECT specimen_type FROM laboratory_specimens WHERE id=?').get(x.specimen_id):null;const p=x.laboratory_id?this.db.prepare('SELECT display_name,country,jurisdiction FROM laboratory_providers WHERE id=?').get(x.laboratory_id):null;return{...x,specimen_type:s?.specimen_type??'UNKNOWN',laboratory_name:p?.display_name??'',laboratory_country:p?.country??'',laboratory_jurisdiction:p?.jurisdiction??''};});
  if(q)rows=rows.filter(x=>[x.test_name,x.local_code,x.test_id,x.category,x.laboratory_name,x.source].some(v=>String(v??'').toLowerCase().includes(q)));
  if(provider)rows=rows.filter(x=>[x.laboratory_id,x.laboratory_name,x.laboratory_country,x.laboratory_jurisdiction].some(v=>String(v??'').toLowerCase().includes(provider)));
  if(specimen)rows=rows.filter(x=>String(x.specimen_type).toLowerCase()===specimen);
  if(source)rows=rows.filter(x=>String(x.source??'').toLowerCase().includes(source)||String(x.source_system??'').toLowerCase().includes(source));
  if(from)rows=rows.filter(x=>Number(x.observed_at??x.issued_at??0)>=from);if(to)rows=rows.filter(x=>Number(x.observed_at??x.issued_at??0)<=to+86399999);return rows;
 };

 Store.prototype.labSpecialtyCreate=function(user,kind,input={}){
  kind=domain(kind);const p=this.patient(user);if(input.specimen_id&&!this.db.prepare('SELECT 1 FROM laboratory_specimens WHERE id=? AND patient_id=?').get(input.specimen_id,p.id))fail('SPECIMEN_NOT_FOUND',404);
  const payload=specialtyPayload(kind,input),sourceSystem=text(input.source_system??'EDHT_MANUAL',100)||'EDHT_MANUAL',external=input.external_record_id==null?null:text(input.external_record_id,200),status=String(input.status??(kind==='POCT'?'FINAL':'REGISTERED')).toUpperCase();
  if(!SPECIALTY_TRANSITIONS.REGISTERED.includes(status)&&status!=='REGISTERED')fail('INVALID_LAB_SPECIALTY_STATUS');
  const source=text(input.source??'synthetic:master27',200)||'synthetic:master27',verification=source.startsWith('synthetic:')?'SYNTHETIC':'UNVERIFIED',provenance=input.provenance&&typeof input.provenance==='object'&&!Array.isArray(input.provenance)?input.provenance:{source_system:sourceSystem,external_record_id:external,production_feed:false},normalized={status,payload,source,provenance,verification_state:verification},digest=sha(normalized);
  const existing=external?this.db.prepare('SELECT * FROM laboratory_specialty_records WHERE patient_id=? AND domain=? AND source_system=? AND external_record_id=?').get(p.id,kind,sourceSystem,external):null;
  if(existing){const latest=this.db.prepare('SELECT * FROM laboratory_specialty_versions WHERE record_id=? ORDER BY version DESC LIMIT 1').get(existing.id);if(latest.payload_hash===digest){this.audit(user.user_id,'LAB_SPECIALTY_IMPORT_REPLAY',existing.id,p.id);return{record_id:existing.id,version:latest.version,replayed:true}}if(!['CORRECTED','AMENDED'].includes(status))fail('IMPORT_SOURCE_CONFLICT',409);return this.labSpecialtyRevise(user,existing.id,{...input,status});}
  const id=randomUUID(),now=this.now(),issued=Number(input.issued_at??now);return this.transaction(()=>{this.db.prepare('INSERT INTO laboratory_specialty_records VALUES(?,?,?,?,?,?,?)').run(id,p.id,kind,input.specimen_id??null,sourceSystem,external,now);this.db.prepare('INSERT INTO laboratory_specialty_versions VALUES(?,?,?,?,?,?,?,?,?,?,?)').run(id,1,status,json(payload),source,json(provenance),verification,issued,null,digest,now);this.audit(user.user_id,'LAB_'+kind+'_CREATED',id,p.id);return{record_id:id,version:1,status,replayed:false,domain:kind};});
 };

 Store.prototype.labSpecialtyRevise=function(user,id,input={}){
  const p=this.patient(user),record=this.db.prepare('SELECT * FROM laboratory_specialty_records WHERE id=? AND patient_id=?').get(id,p.id);if(!record)fail('LAB_SPECIALTY_NOT_FOUND',404);
  const latest=this.db.prepare('SELECT * FROM laboratory_specialty_versions WHERE record_id=? ORDER BY version DESC LIMIT 1').get(id),status=String(input.status??'').toUpperCase();if(!(SPECIALTY_TRANSITIONS[latest.status]??[]).includes(status))fail('INVALID_LAB_SPECIALTY_TRANSITION',409);
  const previous=parse(latest.payload,{}),payload=specialtyPayload(record.domain,{...previous,...input}),source=text(input.source??latest.source,200),provenance=input.provenance&&typeof input.provenance==='object'&&!Array.isArray(input.provenance)?input.provenance:parse(latest.provenance,{}),verification=latest.verification_state,now=this.now(),version=latest.version+1,issued=Number(input.issued_at??now),digest=sha({status,payload,source,provenance,verification_state:verification});
  return this.transaction(()=>{this.db.prepare('INSERT INTO laboratory_specialty_versions VALUES(?,?,?,?,?,?,?,?,?,?,?)').run(id,version,status,json(payload),source,json(provenance),verification,issued,latest.version,digest,now);this.audit(user.user_id,'LAB_'+record.domain+'_'+status,id,p.id);return{record_id:id,version,status,domain:record.domain};});
 };

 Store.prototype.labSpecialtyGet=function(user,id){
  const p=this.patient(user),record=this.db.prepare('SELECT * FROM laboratory_specialty_records WHERE id=? AND patient_id=?').get(id,p.id);if(!record)fail('LAB_SPECIALTY_NOT_FOUND',404);
  const versions=this.db.prepare('SELECT * FROM laboratory_specialty_versions WHERE record_id=? ORDER BY version DESC').all(id).map(v=>({...v,payload:parse(v.payload,{}),provenance:parse(v.provenance,{})}));
  const attachments=this.db.prepare(`SELECT a.*,d.name,d.mime,d.document_type,d.source document_source FROM laboratory_specialty_attachments a JOIN documents d ON d.id=a.document_id WHERE a.record_id=? AND d.patient_id=? ORDER BY a.version DESC,a.created_at DESC`).all(id,p.id);
  this.audit(user.user_id,'LAB_SPECIALTY_VIEWED',id,p.id);return{...record,current:versions[0],versions,attachments};
 };

 Store.prototype.labSpecialtyList=function(user,kind){kind=domain(kind);const p=this.patient(user),ids=this.db.prepare('SELECT id FROM laboratory_specialty_records WHERE patient_id=? AND domain=? ORDER BY created_at DESC').all(p.id,kind);this.audit(user.user_id,'LAB_'+kind+'_LIST_READ','',p.id);return ids.map(x=>this.labSpecialtyGet(user,x.id));};

 Store.prototype.linkLabSpecialtyAttachment=function(user,id,version,documentId,relation='SOURCE_REPORT'){
  const p=this.patient(user),record=this.db.prepare('SELECT * FROM laboratory_specialty_records WHERE id=? AND patient_id=?').get(id,p.id);if(!record)fail('LAB_SPECIALTY_NOT_FOUND',404);if(!this.db.prepare('SELECT 1 FROM laboratory_specialty_versions WHERE record_id=? AND version=?').get(id,Number(version)))fail('LAB_SPECIALTY_VERSION_NOT_FOUND',404);if(!this.db.prepare('SELECT 1 FROM documents WHERE id=? AND patient_id=?').get(documentId,p.id))fail('DOCUMENT_NOT_FOUND',404);
  const rel=text(relation,50)||'SOURCE_REPORT';return this.transaction(()=>{this.db.prepare('INSERT OR IGNORE INTO laboratory_specialty_attachments VALUES(?,?,?,?,?)').run(id,Number(version),documentId,rel,this.now());this.audit(user.user_id,'LAB_SPECIALTY_ATTACHMENT_LINKED',id+':'+version,p.id);return{record_id:id,version:Number(version),document_id:documentId,relation:rel};});
 };

 Store.prototype.labSpecializedBoundaries=function(user){
  const p=this.patient(user);this.audit(user.user_id,'LAB_SPECIALIZED_BOUNDARY_READ','',p.id);
  return{
   pathology:{status:'SYNTHETIC_ADAPTER',owner:'CAP-LABORATORY',versioned:true,attachments:true,specialist_interpretation_required:true,production_feed:false,autonomous_diagnosis:false},
   microbiology:{status:'SYNTHETIC_ADAPTER',owner:'CAP-LABORATORY',versioned:true,susceptibility:true,production_feed:false,therapy_recommendation:false,autonomous_antibiotic_selection:false},
   molecular_genetics:{status:'SYNTHETIC_ADAPTER',owner:'CAP-LABORATORY',versioned:true,interpretation_source_required:true,production_feed:false,fabricated_variants:false,fabricated_pathogenicity:false,fabricated_pgx:false},
   poct_devices:{status:'SYNTHETIC_ADAPTER',owner:'CAP-LABORATORY',versioned:true,production_connector:false,laboratory_verified_by_default:false,lab_equivalent_by_default:false},
   external_gates:['production_pathology_feed','production_microbiology_feed','production_genomics_feed','production_poct_device_connector']
  };
 };
}
