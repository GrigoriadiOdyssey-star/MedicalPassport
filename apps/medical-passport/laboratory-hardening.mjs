import {createHash} from 'node:crypto';

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
        verification_state:'SYNTHETIC',epistemic_state:'SIMULATED',
        performer:String(providerContext.performer??provider.display_name).slice(0,200),
        provenance:{adapter:String(providerContext.connector_id).slice(0,100),adapter_version:String(providerContext.adapter_version??'0.1').slice(0,40),
          provider_id:provider.id,provider_state:'SYNTHETIC',jurisdiction:provider.jurisdiction,authenticated_source:true,
          production_connectivity:false,source:input.provenance??null}
      });
    };
  }

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
