import { HttpError } from './store.mjs';
const fail=(code,status=400)=>{throw new HttpError(status,code)};
const text=(v,max=200)=>{v=String(v??'').trim();if(v.length>max)fail('INVALID_TEXT');return v};
const safeDate=v=>{if(!v)return 0;const n=Date.parse(v);if(!Number.isFinite(n))fail('INVALID_DATE');return n};

export function attachLaboratoryExtensions(Store){
 if(Store.prototype.laboratoryExtensionsAttached)return;
 Store.prototype.laboratoryExtensionsAttached=true;

 Store.prototype.linkLabAttachment=function(user,resultId,version,documentId,relation='SOURCE_REPORT'){
  const p=this.patient(user),result=this.db.prepare('SELECT * FROM laboratory_results WHERE id=? AND patient_id=?').get(resultId,p.id);
  if(!result)fail('LAB_RESULT_NOT_FOUND',404);
  if(!this.db.prepare('SELECT 1 FROM laboratory_result_versions WHERE result_id=? AND version=?').get(resultId,Number(version)))fail('LAB_RESULT_VERSION_NOT_FOUND',404);
  if(!this.db.prepare('SELECT 1 FROM documents WHERE id=? AND patient_id=?').get(documentId,p.id))fail('DOCUMENT_NOT_FOUND',404);
  const rel=text(relation,50)||'SOURCE_REPORT';
  return this.transaction(()=>{
   this.db.prepare('INSERT OR IGNORE INTO laboratory_result_attachments VALUES(?,?,?,?,?)').run(resultId,Number(version),documentId,rel,this.now());
   this.audit(user.user_id,'LAB_ATTACHMENT_LINKED',resultId+':'+version,p.id);
   return{result_id:resultId,result_version:Number(version),document_id:documentId,relation:rel};
  });
 };

 Store.prototype.labAttachments=function(user,resultId){
  const p=this.patient(user);
  if(!this.db.prepare('SELECT 1 FROM laboratory_results WHERE id=? AND patient_id=?').get(resultId,p.id))fail('LAB_RESULT_NOT_FOUND',404);
  const rows=this.db.prepare(`SELECT a.result_id,a.result_version,a.document_id,a.relation,a.created_at,d.name,d.mime,d.document_type,d.source,d.sha256,d.created_at document_created_at
    FROM laboratory_result_attachments a JOIN documents d ON d.id=a.document_id
    WHERE a.result_id=? AND d.patient_id=? ORDER BY a.result_version DESC,a.created_at DESC`).all(resultId,p.id);
  this.audit(user.user_id,'LAB_ATTACHMENT_VIEWED',resultId,p.id);
  return rows;
 };

 Store.prototype.labResultSearch=function(user,filters={}){
  let rows=this.labResults(user,{test_id:filters.test_id||'',status:filters.status||'',flag:filters.flag||'',category:filters.category||''});
  const q=text(filters.q??'',100).toLowerCase(),provider=text(filters.provider??'',100).toLowerCase(),specimen=text(filters.specimen_type??'',100).toLowerCase(),source=text(filters.source??'',100).toLowerCase(),from=safeDate(filters.date_from),to=safeDate(filters.date_to);
  rows=rows.map(x=>{
   const s=x.specimen_id?this.db.prepare('SELECT specimen_type FROM laboratory_specimens WHERE id=?').get(x.specimen_id):null;
   const p=x.laboratory_id?this.db.prepare('SELECT display_name,country,jurisdiction FROM laboratory_providers WHERE id=?').get(x.laboratory_id):null;
   return{...x,specimen_type:s?.specimen_type??'UNKNOWN',laboratory_name:p?.display_name??'',laboratory_country:p?.country??'',laboratory_jurisdiction:p?.jurisdiction??''};
  });
  if(q)rows=rows.filter(x=>[x.test_name,x.local_code,x.test_id,x.category,x.laboratory_name,x.source].some(v=>String(v??'').toLowerCase().includes(q)));
  if(provider)rows=rows.filter(x=>[x.laboratory_id,x.laboratory_name,x.laboratory_country,x.laboratory_jurisdiction].some(v=>String(v??'').toLowerCase().includes(provider)));
  if(specimen)rows=rows.filter(x=>String(x.specimen_type).toLowerCase()===specimen);
  if(source)rows=rows.filter(x=>String(x.source??'').toLowerCase().includes(source)||String(x.source_system??'').toLowerCase().includes(source));
  if(from)rows=rows.filter(x=>Number(x.observed_at??x.issued_at??0)>=from);
  if(to)rows=rows.filter(x=>Number(x.observed_at??x.issued_at??0)<=to+86399999);
  return rows;
 };

 Store.prototype.labSpecializedBoundaries=function(user){
  const p=this.patient(user);this.audit(user.user_id,'LAB_SPECIALIZED_BOUNDARY_READ','',p.id);
  return{
   pathology:{status:'INTERFACE_ONLY',owner:'CAP-LABORATORY',fields:['specimen','anatomic_site','collection','gross_description','microscopy','diagnosis_text','pathologist','report_status','attachments','version','source','provenance'],autonomous_diagnosis:false},
   microbiology:{status:'INTERFACE_ONLY',owner:'CAP-LABORATORY',fields:['specimen','organism','detection_result','culture_status','susceptibility','antibiotic','mic','method','source_interpretation','source','provenance'],therapy_recommendation:false},
   molecular_genetics:{status:'INTERFACE_ONLY',owner:'CAP-LABORATORY',fields:['sample','gene','variant','method','reference_assembly','laboratory','result','interpretation_source','version','date','evidence_level'],fabricated_variants:false,fabricated_pathogenicity:false,fabricated_pgx:false},
   poct_devices:{status:'INTERFACE_ONLY',owner:'CAP-LABORATORY',fields:['device','measurement','method','source','verification_state','observed_at','provenance'],laboratory_verified_by_default:false},
   external_gates:['production_pathology_feed','production_microbiology_feed','production_genomics_feed','production_poct_device_connector']
  };
 };
}
