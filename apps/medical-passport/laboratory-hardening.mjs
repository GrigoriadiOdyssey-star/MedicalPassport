import {createHash} from 'node:crypto';
import {LAB_ORDER_TRANSITIONS} from './laboratory-production.mjs';

const json=value=>JSON.stringify(value??{});
const parse=(value,fallback={})=>{try{return JSON.parse(value)}catch{return fallback}};
const digest=value=>createHash('sha256').update(String(value??'')).digest('hex');
const currentStatuses=new Set(['FINAL','CORRECTED','AMENDED']);
const legacyFlags=new Set(['NORMAL','LOW','HIGH','CRITICAL_LOW','CRITICAL_HIGH','ABNORMAL','POSITIVE','NEGATIVE','INDETERMINATE','UNKNOWN']);
const text=(value,max=200)=>String(value??'').trim().slice(0,max);
const timestamp=value=>{if(value==null||value==='')return null;const n=typeof value==='number'?value:Date.parse(value);return Number.isFinite(n)?n:null};

function ensureTest(store,{code,name='Unmapped laboratory observation',unit='',method='',specimen='UNKNOWN'}={}){
  const key=text(code,100)||'UNKNOWN';
  const found=store.db.prepare('SELECT test_id FROM laboratory_tests WHERE test_id=? OR local_code=? OR standard_code=? LIMIT 1').get(key,key,key);
  if(found)return found.test_id;
  const testId='legacy-'+digest(key).slice(0,32);
  store.db.prepare("INSERT OR IGNORE INTO laboratory_tests(test_id,local_code,standard_code,coding_system,test_name,short_name,category,specimen_type,method,default_unit,provider_id,jurisdiction,status,terminology_state,source,provenance) VALUES(?,?,NULL,NULL,?,'','UNKNOWN',?,?,?,NULL,'UNKNOWN','UNKNOWN','UNKNOWN','compatibility-bridge',?)")
    .run(testId,key,text(name,300)||'Unmapped laboratory observation',text(specimen,100)||'UNKNOWN',text(method,200),text(unit,100),json({mapping:'UNRESOLVED',source_code:key,clinical_authority:false}));
  return testId;
}

export function attachLaboratoryHardening(Store){
  if(Store.prototype.laboratoryHardeningAttached)return;
  Store.prototype.laboratoryHardeningAttached=true;
  const init=Store.prototype.initLabTwinPilot;
  if(init){
    Store.prototype.initLabTwinPilot=function(...args){
      const value=init.apply(this,args);
      this.db.exec(`CREATE TABLE IF NOT EXISTS laboratory_legacy_bridge(
        legacy_id TEXT PRIMARY KEY, canonical_result_id TEXT, state TEXT NOT NULL CHECK(state IN('MIGRATED','PENDING')),
        reason TEXT NOT NULL DEFAULT '', migrated_at INTEGER
      );`);
      return value;
    };
  }

  const canonicalImport=Store.prototype.importLabResult;
  if(canonicalImport){
    Store.prototype.importPatientLabResult=function(user,input={}){
      return canonicalImport.call(this,user,{
        test_id:ensureTest(this,{code:input.test_code??input.test_id,name:input.test_name,unit:input.unit,method:input.method,specimen:input.specimen_type}),
        status:'REGISTERED',value_type:input.value_type??(typeof input.value==='number'?'NUMERIC':'UNKNOWN'),
        value:input.value??null,unit:input.unit??'',source_system:'EDHT_PATIENT_REPORTED',
        external_result_id:input.external_result_id??null,source:'patient:manual',
        verification_state:'UNVERIFIED',epistemic_state:'PATIENT_REPORTED',
        laboratory_id:null,performer:'',source_flag:'UNKNOWN',flag_origin:'NONE',
        observed_at:timestamp(input.observed_at),issued_at:timestamp(input.issued_at),
        provenance:{origin:'patient_reported',document_id:input.document_id??null,legacy_source:input.source??null,
          patient_supplied_context:input.provenance??null,trust:'UNVERIFIED'}
      });
    };
    Store.prototype.importTrustedLabResult=function(user,providerContext={},input={}){
      if(!providerContext||providerContext.authenticated!==true||providerContext.source_state!=='SYNTHETIC_AUTHENTICATED')throw Error('TRUSTED_LAB_SOURCE_REQUIRED');
      const provider=this.db.prepare('SELECT * FROM laboratory_providers WHERE id=?').get(providerContext.provider_id);
      if(!provider||provider.verification_state!=='SYNTHETIC')throw Error('TRUSTED_LAB_PROVIDER_REQUIRED');
      if(!providerContext.connector_id||!providerContext.source_system)throw Error('TRUSTED_LAB_CONTEXT_REQUIRED');
      return canonicalImport.call(this,user,{
        ...input,source_system:String(providerContext.source_system).slice(0,100),
        laboratory_id:provider.id,source:'synthetic:trusted-adapter',
        verification_state:'SYNTHETIC',epistemic_state:'MEASURED',
        performer:String(providerContext.performer??provider.display_name).slice(0,200),
        provenance:{adapter:String(providerContext.connector_id).slice(0,100),adapter_version:String(providerContext.adapter_version??'0.1').slice(0,40),
          provider_id:provider.id,provider_state:'SYNTHETIC',jurisdiction:provider.jurisdiction,authenticated_source:true,
          production_connectivity:false,source:input.provenance??null}
      });
    };
    const reviseCanonical=Store.prototype.reviseLabResult;
    Store.prototype.revisePatientLabResult=function(user,id,input={}){
      const patient=this.patient(user),row=this.db.prepare('SELECT r.source_system,v.epistemic_state FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(x.version) FROM laboratory_result_versions x WHERE x.result_id=r.id) WHERE r.id=? AND r.patient_id=?').get(id,patient.id);
      if(!row)throw Error('LAB_RESULT_NOT_FOUND');
      if(row.epistemic_state!=='PATIENT_REPORTED'||!['EDHT_PATIENT_REPORTED','EDHT_LEGACY_MVP'].includes(row.source_system))throw Error('PROVIDER_RESULT_CORRECTION_REQUIRED');
      if(input.status&&String(input.status).toUpperCase()!=='ENTERED_IN_ERROR')throw Error('PATIENT_CANNOT_CHANGE_RESULT_STATUS');
      return reviseCanonical.call(this,user,id,{status:'ENTERED_IN_ERROR',correction_reason:'Patient marked this self-reported entry as entered in error'});
    };
    const createReport=Store.prototype.createDiagnosticReport;
    const normalizeReportRefs=function(user,input={},existing=null){
      const patient=this.patient(user),bounded=(value,name)=>{if(value==null)return[];if(!Array.isArray(value)||value.length>100)throw Error('INVALID_'+name.toUpperCase());const values=[...new Set(value.map(x=>String(x??'').trim()).filter(Boolean))];if(values.some(x=>x.length>200))throw Error('INVALID_'+name.toUpperCase());return values;};
      const orderId=existing?.order_id??input.order_id??null,providerId=existing?.provider_id??input.provider_id??null;
      if(input.order_id&&existing&&input.order_id!==existing.order_id)throw Error('DIAGNOSTIC_REPORT_IDENTITY_IMMUTABLE');
      if(input.provider_id&&existing&&input.provider_id!==existing.provider_id)throw Error('DIAGNOSTIC_REPORT_IDENTITY_IMMUTABLE');
      if(orderId&&!this.db.prepare('SELECT 1 FROM laboratory_orders WHERE id=? AND patient_id=?').get(orderId,patient.id))throw Error('LAB_ORDER_NOT_FOUND');
      if(providerId&&!this.db.prepare('SELECT 1 FROM laboratory_providers WHERE id=?').get(providerId))throw Error('LAB_PROVIDER_NOT_FOUND');
      const resultRefs=bounded(input.result_refs??(existing?JSON.parse(this.db.prepare('SELECT result_refs FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC LIMIT 1').get(existing.id).result_refs):[]),'result_refs');
      const specimenRefs=bounded(input.specimen_refs??(existing?JSON.parse(this.db.prepare('SELECT specimen_refs FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC LIMIT 1').get(existing.id).specimen_refs):[]),'specimen_refs');
      const attachmentRefs=bounded(input.attachment_refs??(existing?JSON.parse(this.db.prepare('SELECT attachment_refs FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC LIMIT 1').get(existing.id).attachment_refs):[]),'attachment_refs');
      for(const id of resultRefs){const row=this.db.prepare('SELECT order_id FROM laboratory_results WHERE id=? AND patient_id=?').get(id,patient.id);if(!row)throw Error('LAB_RESULT_NOT_FOUND');if(orderId&&row.order_id&&row.order_id!==orderId)throw Error('LAB_RESULT_ORDER_MISMATCH');}
      for(const id of specimenRefs){const row=this.db.prepare('SELECT order_id FROM laboratory_specimens WHERE id=? AND patient_id=?').get(id,patient.id);if(!row)throw Error('LAB_SPECIMEN_NOT_FOUND');if(orderId&&row.order_id!==orderId)throw Error('LAB_SPECIMEN_ORDER_MISMATCH');}
      for(const id of attachmentRefs)if(!this.db.prepare('SELECT 1 FROM documents WHERE id=? AND patient_id=?').get(id,patient.id))throw Error('DOCUMENT_NOT_FOUND');
      return{...input,order_id:orderId,provider_id:providerId,result_refs:resultRefs,specimen_refs:specimenRefs,attachment_refs:attachmentRefs};
    };
    const createReportValidated=Store.prototype.createDiagnosticReport;
    Store.prototype.createDiagnosticReport=function(user,input={}){return createReportValidated.call(this,user,normalizeReportRefs.call(this,user,input));};
    const reviseReportValidated=Store.prototype.reviseDiagnosticReport;
    Store.prototype.reviseDiagnosticReport=function(user,id,input={}){
      const patient=this.patient(user),existing=this.db.prepare('SELECT * FROM diagnostic_reports WHERE id=? AND patient_id=?').get(id,patient.id);
      if(!existing)throw Error('DIAGNOSTIC_REPORT_NOT_FOUND');
      return reviseReportValidated.call(this,user,id,normalizeReportRefs.call(this,user,input,existing));
    };

    Store.prototype.createPatientDiagnosticReport=function(user,input={}){
      return Store.prototype.createDiagnosticReport.call(this,user,{...input,status:'PRELIMINARY',provider_id:null,performer:'',source:'patient:manual',
        provenance:{origin:'patient_reported_document',trust:'UNVERIFIED',patient_supplied:input.provenance??null}});
    };
    const reviseReport=Store.prototype.reviseDiagnosticReport;
    Store.prototype.revisePatientDiagnosticReport=function(user,id,input={}){
      const patient=this.patient(user),report=this.db.prepare('SELECT id FROM diagnostic_reports WHERE id=? AND patient_id=?').get(id,patient.id);
      if(!report)throw Error('DIAGNOSTIC_REPORT_NOT_FOUND');
      const latest=this.db.prepare('SELECT status,source FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC LIMIT 1').get(id);
      if(!latest?.source?.startsWith('patient:'))throw Error('PROVIDER_REPORT_CORRECTION_REQUIRED');
      if(input.status&&String(input.status).toUpperCase()!=='CANCELLED')throw Error('PATIENT_CANNOT_FINALIZE_REPORT');
      return Store.prototype.reviseDiagnosticReport.call(this,user,id,{status:'CANCELLED',source:'patient:manual',provenance:{origin:'patient_reported_document',trust:'UNVERIFIED',reason:'patient_cancelled'}});
    };

  }


  const actionOrder=Store.prototype.labOrderAction;
  Store.prototype.labOrderAction=function(user,id,next,reason=''){
    const patient=this.patient(user),target=String(next??'').toUpperCase(),order=this.db.prepare('SELECT status FROM laboratory_orders WHERE id=? AND patient_id=?').get(id,patient.id);
    if(order&&!(LAB_ORDER_TRANSITIONS[order.status]??[]).includes(target))throw Error('INVALID_LAB_ORDER_TRANSITION');
    const specimens=this.db.prepare('SELECT status FROM laboratory_specimens WHERE order_id=? AND patient_id=?').all(id,patient.id).map(x=>x.status);
    if(target==='COLLECTED'&&!specimens.includes('COLLECTED'))throw Error('COLLECTED_SPECIMEN_REQUIRED');
    if(target==='RECEIVED'&&!specimens.some(x=>['RECEIVED','ACCESSIONED','PROCESSING','COMPLETED'].includes(x)))throw Error('RECEIVED_SPECIMEN_REQUIRED');
    if(target==='IN_PROCESS'&&!this.db.prepare("SELECT 1 FROM laboratory_accessions a JOIN laboratory_specimens s ON s.id=a.specimen_id WHERE a.order_id=? AND a.patient_id=? AND s.status IN('ACCESSIONED','PROCESSING')").get(id,patient.id))throw Error('LAB_ACCESSION_REQUIRED');
    if(target==='PRELIMINARY'&&!this.db.prepare("SELECT 1 FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(x.version) FROM laboratory_result_versions x WHERE x.result_id=r.id) WHERE r.order_id=? AND r.patient_id=? AND v.status IN('PRELIMINARY','FINAL','CORRECTED','AMENDED')").get(id,patient.id))throw Error('PRELIMINARY_RESULT_REQUIRED');
    if(target==='FINAL'){
      const counts=this.db.prepare("SELECT COUNT(*) total,SUM(CASE WHEN v.status IN('FINAL','CORRECTED','AMENDED') AND v.epistemic_state='MEASURED' THEN 1 ELSE 0 END) ready FROM laboratory_order_tests ot LEFT JOIN laboratory_results r ON r.order_id=ot.order_id AND r.test_id=ot.test_id AND r.patient_id=? LEFT JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(x.version) FROM laboratory_result_versions x WHERE x.result_id=r.id) WHERE ot.order_id=?").get(patient.id,id);
      if(!counts.total||Number(counts.ready)!==Number(counts.total))throw Error('FINAL_RESULTS_REQUIRED');
    }
    return actionOrder.call(this,user,id,target,reason);
  };
  Store.prototype.syncLabOrderFromResult=function(user,orderId){
    const patient=this.patient(user),order=this.db.prepare('SELECT * FROM laboratory_orders WHERE id=? AND patient_id=?').get(orderId,patient.id);
    if(!order)return false;
    const tests=this.db.prepare(`SELECT ot.test_id,
      (SELECT v.status FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(v2.version) FROM laboratory_result_versions v2 WHERE v2.result_id=r.id) WHERE r.order_id=ot.order_id AND r.test_id=ot.test_id AND r.patient_id=? ORDER BY r.created_at DESC LIMIT 1) status,
      (SELECT v.epistemic_state FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id AND v.version=(SELECT MAX(v2.version) FROM laboratory_result_versions v2 WHERE v2.result_id=r.id) WHERE r.order_id=ot.order_id AND r.test_id=ot.test_id AND r.patient_id=? ORDER BY r.created_at DESC LIMIT 1) epistemic_state
      FROM laboratory_order_tests ot WHERE ot.order_id=? ORDER BY ot.test_id`).all(patient.id,patient.id,orderId);
    if(!tests.length)return false;
    const final=new Set(['FINAL','CORRECTED','AMENDED']),allFinal=tests.every(x=>final.has(x.status)&&x.epistemic_state==='MEASURED');
    let target=null;
    if(allFinal)target=tests.some(x=>x.status==='CORRECTED')?'CORRECTED':tests.some(x=>x.status==='AMENDED')?'AMENDED':'FINAL';
    else if(tests.some(x=>x.status==='PRELIMINARY'&&x.epistemic_state==='MEASURED'))target='PRELIMINARY';
    else if(tests.some(x=>final.has(x.status)&&x.epistemic_state==='MEASURED'))target='PARTIAL_RESULT';
    if(!target||target===order.status)return false;
    const transitions={IN_PROCESS:['PARTIAL_RESULT','PRELIMINARY','FINAL'],PARTIAL_RESULT:['PRELIMINARY','FINAL','CORRECTED','AMENDED'],PRELIMINARY:['FINAL','CORRECTED','AMENDED'],FINAL:['CORRECTED','AMENDED'],CORRECTED:['CORRECTED','AMENDED'],AMENDED:['CORRECTED','AMENDED']};
    if(!(transitions[order.status]??[]).includes(target))return false;
    const now=this.now(),version=1+this.db.prepare('SELECT COALESCE(MAX(version),0) v FROM laboratory_order_events WHERE order_id=?').get(orderId).v;
    this.db.prepare('UPDATE laboratory_orders SET status=?,updated_at=? WHERE id=? AND patient_id=?').run(target,now,orderId,patient.id);
    this.db.prepare('INSERT INTO laboratory_order_events VALUES(?,?,?,?,?,?)').run(orderId,version,target,user.user_id,'Derived from canonical laboratory result version',now);
    this.audit(user.user_id,'LAB_ORDER_STATUS_DERIVED',orderId+':'+target,patient.id);
    return true;
  };
  const actionSpecimen=Store.prototype.labSpecimenAction;
  Store.prototype.labSpecimenAction=function(user,id,next,details={}){
    if(String(next??'').toUpperCase()==='ACCESSIONED')throw Error('ACCESSION_MUST_USE_CREATE_LAB_ACCESSION');
    if(details.collected_at!=null&&!Number.isFinite(Number(details.collected_at)))throw Error('INVALID_LAB_TIMESTAMP');
    return actionSpecimen.call(this,user,id,next,details);
  };
  const readNotifications=Store.prototype.labNotifications;
  if(readNotifications)Store.prototype.labNotifications=function(user){const p=this.patient(user),rows=readNotifications.call(this,user);this.audit(user.user_id,'CRITICAL_RESULT_NOTIFICATION_VIEWED','LIST',p.id);return rows;};
  Store.prototype.labReports=function(user){
    const p=this.patient(user),ids=this.db.prepare('SELECT id FROM diagnostic_reports WHERE patient_id=? ORDER BY created_at DESC').all(p.id);
    const rows=ids.map(({id})=>{const report=this.db.prepare('SELECT * FROM diagnostic_reports WHERE id=? AND patient_id=?').get(id,p.id);
      const versions=this.db.prepare('SELECT * FROM diagnostic_report_versions WHERE report_id=? ORDER BY version DESC').all(id).map(v=>({...v,result_refs:parse(v.result_refs,[]),specimen_refs:parse(v.specimen_refs,[]),attachment_refs:parse(v.attachment_refs,[]),provenance:parse(v.provenance)}));
      return{...report,current:versions[0],versions};});
    this.audit(user.user_id,'DIAGNOSTIC_REPORT_LIST_READ','',p.id);
    return rows;
  };
  const longitudinal=Store.prototype.labLongitudinal;
  if(longitudinal)Store.prototype.labLongitudinal=function(user){
    const value=longitudinal.call(this,user);
    value.laboratory=value.laboratory.filter(x=>currentStatuses.has(x.status)&&x.epistemic_state==='MEASURED');
    return value;
  };
  Store.prototype.labTrendSeries=function(user,testId){
    const all=this.labResults(user,{test_id:testId}),rows=all.filter(x=>currentStatuses.has(x.status)&&x.value_type==='NUMERIC'&&typeof x.value==='number'&&Number.isFinite(x.value)&&x.epistemic_state==='MEASURED');
    const contexts=rows.map(row=>{
      const specimen=row.specimen_id?this.db.prepare('SELECT specimen_type FROM laboratory_specimens WHERE id=? AND patient_id=?').get(row.specimen_id,this.patient(user).id)?.specimen_type??'UNKNOWN':'UNKNOWN';
      const range=row.reference_range_snapshot??{},fingerprint=JSON.stringify([row.test_id,row.value_type,row.unit,row.method,specimen,row.laboratory_id??null,row.source_system??null,row.verification_state,range.source??null,range.source_version??null,range.id??row.reference_range_id??null]);
      return{row,fingerprint};
    });
    if(!contexts.length)return{test_id:testId,compatibility:'INSUFFICIENT_DATA',series:[],excluded:all.map(x=>({result_id:x.id,reason:x.epistemic_state==='PATIENT_REPORTED'?'PATIENT_REPORTED':x.value_type!=='NUMERIC'?'NON_NUMERIC':'NON_FINAL_OR_UNVERIFIED'}))};
    const base=contexts[0].fingerprint,compatible=contexts.filter(x=>x.fingerprint===base),incompatible=contexts.filter(x=>x.fingerprint!==base);
    return{test_id:testId,compatibility:incompatible.length?'NOT_COMPARABLE':compatible.length<2?'INSUFFICIENT_DATA':'COMPARABLE',
      series:compatible.sort((a,b)=>(a.row.observed_at??0)-(b.row.observed_at??0)).map(({row})=>({result_id:row.id,version:row.version,at:row.observed_at,value:row.value,unit:row.unit,status:row.status,flag:row.source_flag})),
      excluded:[...incompatible.map(x=>({result_id:x.row.id,reason:'CONTEXT_MISMATCH'})),...all.filter(x=>!contexts.some(y=>y.row.id===x.id)).map(x=>({result_id:x.id,reason:x.epistemic_state==='PATIENT_REPORTED'?'PATIENT_REPORTED':x.value_type!=='NUMERIC'?'NON_NUMERIC':'NON_FINAL_OR_UNVERIFIED'}))]};
  };
  Store.prototype.master27Coverage=function(){return{master:'MASTER-27',mode:'synthetic',runtime_implemented:true,ci_verified:false,clinical_validated:false,production_ready:false,canonical_owner:'CAP-LABORATORY',external_gates:['real_lis_lims','national_lab_network','authoritative_terminology','authoritative_reference_ranges','production_pathology_feed','production_microbiology_feed','production_genomics_feed','production_poct_devices','clinician_critical_result_delivery','clinical_validation','jurisdictional_regulatory_validation','privacy_assessment','security_certification'],release_gates_open:true};};

  Store.prototype.migrateLegacyLabResultsMvp=function(user){
    this.initLabTwinPilot?.();
    const p=this.patient(user);
    const rows=this.db.prepare('SELECT l.* FROM lab_results_mvp l LEFT JOIN laboratory_legacy_bridge b ON b.legacy_id=l.id WHERE l.patient_id=? AND b.legacy_id IS NULL ORDER BY l.created_at,l.id').all(p.id);
    let migrated=0,pending=0;
    for(const row of rows){
      try{
        const testId=ensureTest(this,{code:row.test_code||row.id,name:row.test_name,unit:row.unit,method:row.method,specimen:row.specimen||'UNKNOWN'});
        const result=canonicalImport.call(this,user,{
          test_id:testId,status:'REGISTERED',value_type:row.value==null?'UNKNOWN':'NUMERIC',
          value:row.value==null?null:Number(row.value),unit:row.unit??'',
          source_system:'EDHT_LEGACY_MVP',external_result_id:'legacy:'+row.id,
          source:'legacy:patient-reported',verification_state:'UNVERIFIED',epistemic_state:'PATIENT_REPORTED',
          source_flag:'UNKNOWN',flag_origin:'NONE',observed_at:timestamp(row.resulted_at),issued_at:timestamp(row.resulted_at),
          provenance:{bridge:'lab_results_mvp',legacy_id:row.id,legacy_source:row.source,
            legacy_verification:row.verification_state,legacy_flag:row.abnormal_flag,
            legacy_range:{low:row.reference_low,high:row.reference_high,text:row.reference_text,context:parse(row.range_context)},
            document_id:row.document_id??null,clinical_authority:false}
        });
        this.db.prepare("INSERT INTO laboratory_legacy_bridge(legacy_id,canonical_result_id,state,reason,migrated_at) VALUES(?,?,'MIGRATED','',?)")
          .run(row.id,result.result_id,this.now());
        migrated++;
      }catch(error){
        this.db.prepare("INSERT INTO laboratory_legacy_bridge(legacy_id,canonical_result_id,state,reason,migrated_at) VALUES(?,NULL,'PENDING',?,NULL)")
          .run(row.id,String(error.code??error.message??'BRIDGE_FAILED').slice(0,200));
        pending++;
      }
    }
    return{migrated,pending};
  };

  Store.prototype.saveLabResultMvp=function(user,input={}){
    const p=this.patient(user);
    if(!input.test_name)throw Error('LAB_PROVENANCE_REQUIRED');
    if(input.document_id&&!this.db.prepare('SELECT 1 FROM documents WHERE id=? AND patient_id=?').get(input.document_id,p.id))throw Error('LAB_DOCUMENT_NOT_FOUND');
    const id='patient:'+digest([user.user_id,input.test_code,input.test_name,input.value,input.unit,input.observed_at,input.document_id].join('|'));
    const imported=this.importPatientLabResult(user,{...input,external_result_id:id});
    return{id:imported.result_id,version:imported.version,abnormal_flag:'UNKNOWN',epistemic_state:'PATIENT_REPORTED'};
  };

  Store.prototype.labResultsMvp=function(user,test=''){
    this.initLabTwinPilot?.();
    this.migrateLegacyLabResultsMvp(user);
    const filter=String(test??'').trim();
    const rows=this.labResults(user).filter(x=>!filter||x.local_code===filter||x.test_id===filter);
    return rows.map(x=>({id:x.id,version:x.version??x.current?.version??1,test_code:x.local_code||x.test_id,test_name:x.test_name,
      value:x.value,unit:x.unit,reference_low:x.reference_range_snapshot?.lower_bound??null,
      reference_high:x.reference_range_snapshot?.upper_bound??null,reference_text:x.reference_range_snapshot?.reference_text??'',
      abnormal_flag:x.epistemic_state==='PATIENT_REPORTED'?'UNKNOWN':x.source_flag??'UNKNOWN',
      critical_flag:['CRITICAL_LOW','CRITICAL_HIGH'].includes(x.source_flag)?1:0,specimen:x.specimen_type??'',
      collected_at:x.observed_at??null,resulted_at:x.issued_at??null,laboratory:x.laboratory_id??'',
      source:x.source,verification_state:x.verification_state,epistemic_state:x.epistemic_state,
      provenance:x.provenance,method:x.method,range_context:x.reference_range_snapshot??{},status:x.status}));
  };

  Store.prototype.fhirLabSynthetic=function(user,bundle){
    if(!bundle||bundle.resourceType!=='Bundle')throw Error('FHIR_SYNTHETIC_BUNDLE_REQUIRED');
    const entries=(bundle.entry??[]).map(e=>e?.resource).filter(r=>r?.resourceType==='Observation');
    const bundleIdentity=text(bundle.id??bundle.identifier?.value??'',180)||digest(JSON.stringify(entries));
    const items=[];
    for(const resource of entries){
      const coding=resource.code?.coding?.[0]??{},quantity=resource.valueQuantity??{},ref=resource.referenceRange?.[0]??{};
      const code=coding.code??resource.id??digest(JSON.stringify(resource)).slice(0,24);
      const testId=ensureTest(this,{code,name:resource.code?.text??coding.display??code,unit:quantity.unit??quantity.code??'',method:resource.method?.text??'',specimen:resource.specimen?.display??'UNKNOWN'});
      let valueType='UNKNOWN',value=null;
      if(Number.isFinite(quantity.value)){valueType='NUMERIC';value=quantity.value;}
      else if(typeof resource.valueString==='string'){valueType='TEXT';value=resource.valueString.slice(0,2000);}
      else if(typeof resource.valueBoolean==='boolean'){valueType='BOOLEAN';value=resource.valueBoolean;}
      else if(resource.valueCodeableConcept){valueType='CODED';value={code:resource.valueCodeableConcept.coding?.[0]?.code??'',system:resource.valueCodeableConcept.coding?.[0]?.system??'',display:resource.valueCodeableConcept.text??resource.valueCodeableConcept.coding?.[0]?.display??''};}
      const fhirStatus=String(resource.status??'unknown').toLowerCase();
      const status=({final:'FINAL',amended:'AMENDED',corrected:'CORRECTED',preliminary:'PRELIMINARY',cancelled:'CANCELLED','entered-in-error':'ENTERED_IN_ERROR'})[fhirStatus]??'REGISTERED';
      const interpretation=resource.interpretation?.[0]?.coding?.[0]?.code;
      const sourceFlag=({L:'LOW',H:'HIGH',LL:'CRITICAL_LOW',HH:'CRITICAL_HIGH',N:'NORMAL',A:'ABNORMAL',POS:'POSITIVE',NEG:'NEGATIVE'})[interpretation]??'UNKNOWN';
      const ext='fhir:'+bundleIdentity+':'+(resource.id??digest(JSON.stringify(resource)).slice(0,32));
      items.push(canonicalImport.call(this,user,{test_id:testId,status,value_type:valueType,value,unit:quantity.unit??quantity.code??'',
        reference_range_id:null,observed_at:timestamp(resource.effectiveDateTime??resource.effectivePeriod?.start),
        issued_at:timestamp(resource.issued),source_system:'SYNTHETIC_FHIR',external_result_id:ext,
        verification_state:'SYNTHETIC',epistemic_state:'SIMULATED',source:'synthetic:fhir-adapter',
        source_flag:sourceFlag,flag_origin:interpretation?'SOURCE_PROVIDED':'NONE',
        provenance:{adapter:'FHIR_R4_SYNTHETIC',adapter_version:'0.2',bundle_id:bundle.id??null,bundle_identity:bundleIdentity,
          resource_type:'Observation',resource_id:resource.id??null,coding:resource.code??null,fhir_status:fhirStatus,
          reference_range:ref,interpretation:resource.interpretation??null,source_system:'SYNTHETIC_FHIR',production_connectivity:false}}));
    }
    return{imported:items.length,items};
  };

  const twin=Store.prototype.buildClinicalStateTwinMvp;
  if(twin){
    Store.prototype.buildClinicalStateTwinMvp=function(user){
      const result=twin.call(this,user);
      const labs=this.labResults(user).filter(x=>currentStatuses.has(x.status)&&x.epistemic_state==='MEASURED');
      const versions=labs.map(x=>[x.id,x.version]);
      result.source_versions={...result.source_versions,labs:versions};
      result.recent_labs=labs.slice(0,20).map(x=>({id:x.id,version:x.version,test_id:x.test_id,test:x.test_name,value:x.value,unit:x.unit,
        flag:x.source_flag,status:x.status,epistemic_state:x.epistemic_state,source:x.source,provenance:x.provenance}));
      this.db.prepare('UPDATE twin_snapshots_mvp SET source_versions=?,payload=? WHERE id=? AND patient_id=?')
        .run(json(result.source_versions),json({...result}),result.id,this.patient(user).id);
      return result;
    };
  }

  const dashboard=Store.prototype.patientDashboardMvp;
  if(dashboard){
    Store.prototype.patientDashboardMvp=function(user){
      const value=dashboard.call(this,user);
      const rows=this.labResults(user);
      const final=rows.filter(x=>currentStatuses.has(x.status));
      const reported=rows.filter(x=>x.epistemic_state==='PATIENT_REPORTED');
      value.lab_results={latest:final.slice(0,5).map(x=>({id:x.id,version:x.version,test_id:x.test_id,test_name:x.test_name,value:x.value,unit:x.unit,status:x.status,flag:x.source_flag,source:x.source,verification_state:x.verification_state,epistemic_state:x.epistemic_state,provenance:x.provenance})),
        new_count:final.filter(x=>Number.isFinite(x.issued_at)&&x.issued_at>this.now()-7*86400000).length};
      value.patient_reported_labs=reported.slice(0,5).map(x=>({id:x.id,version:x.version,test_id:x.test_id,test_name:x.test_name,value:x.value,unit:x.unit,status:x.status,source:x.source,verification_state:x.verification_state,epistemic_state:x.epistemic_state,provenance:x.provenance}));
      return value;
    };
  }

}
