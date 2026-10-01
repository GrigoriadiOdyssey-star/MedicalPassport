import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../store.mjs';
import {attachMaster2728} from '../master27-28-bootstrap.mjs';

attachMaster2728(Store);
const password='Synthetic-master27-hardening-123!';
function setup(t){
  let now=Date.parse('2026-09-28T08:00:00Z');
  const store=new Store(':memory:',()=>now);
  store.initLabTwinPilot();
  t.after(()=>store.close());
  const patient=store.register({name:'Hardening Patient',email:'hardening@example.test',password});
  const other=store.register({name:'Other Patient',email:'hardening-other@example.test',password});
  const login=email=>store.session(store.login(email,password).token);
  return{store,patient:login(patient.email),other:login(other.email),advance:ms=>now+=ms};
}

test('patient import cannot self-assert provider, measured or verified laboratory data',t=>{
  const{store,patient}=setup(t);
  const imported=store.importPatientLabResult(patient,{test_id:'lab-creat',value:81,unit:'umol/L',status:'FINAL',
    source_system:'REAL_LIS',verification_state:'VERIFIED',epistemic_state:'MEASURED',laboratory_id:'real-provider',performer:'Verified Lab'});
  const current=store.labResult(patient,imported.result_id).current;
  assert.equal(current.status,'REGISTERED');
  assert.equal(current.source,'patient:manual');
  assert.equal(current.verification_state,'UNVERIFIED');
  assert.equal(current.epistemic_state,'PATIENT_REPORTED');
  assert.equal(current.laboratory_id,null);
  assert.equal(current.performer,'');
  assert.equal(current.source_flag,'UNKNOWN');
});

test('legacy result POST persists only in canonical tables and legacy GET projects canonical data',t=>{
  const{store,patient}=setup(t);
  const saved=store.saveLabResultMvp(patient,{test_code:'lab-creat',test_name:'Creatinine',value:72,unit:'umol/L',source:'patient',provenance:{self_reported:true}});
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM lab_results_mvp').get().n,0);
  const canonical=store.db.prepare('SELECT r.id,v.status,v.epistemic_state,v.verification_state FROM laboratory_results r JOIN laboratory_result_versions v ON v.result_id=r.id WHERE r.id=?').get(saved.id);
  assert.equal(canonical.status,'REGISTERED');
  assert.equal(canonical.epistemic_state,'PATIENT_REPORTED');
  assert.equal(canonical.verification_state,'UNVERIFIED');
  assert.equal(store.labResultsMvp(patient,'lab-creat')[0].id,saved.id);
});

test('FHIR synthetic Observation import is canonical and carries stable adapter provenance',t=>{
  const{store,patient,advance}=setup(t);
  const bundle={resourceType:'Bundle',id:'bundle-hardening-1',entry:[{resource:{resourceType:'Observation',id:'obs-1',status:'final',
    code:{coding:[{system:'http://loinc.org',code:'718-7',display:'Hemoglobin'}],text:'Hemoglobin'},
    valueQuantity:{value:13.2,unit:'g/dL'},}}]};
  const first=store.fhirLabSynthetic(patient,bundle);advance(3600000);const replay=store.fhirLabSynthetic(patient,bundle);
  assert.equal(first.imported,1);
  assert.equal(first.items[0].result_id,replay.items[0].result_id);
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM laboratory_results WHERE source_system=?').get('SYNTHETIC_FHIR').n,1);
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM lab_results_mvp').get().n,0);
  const current=store.labResult(patient,first.items[0].result_id).current;
  assert.equal(current.status,'FINAL');
  assert.equal(current.verification_state,'SYNTHETIC');
  assert.equal(current.epistemic_state,'SIMULATED');
  assert.equal(current.provenance.adapter_version,'0.2');
});

test('dashboard and Digital Twin use canonical result identities and final measured results only',t=>{
  const{store,patient}=setup(t);
  const reported=store.importPatientLabResult(patient,{test_id:'lab-creat',value:79,unit:'umol/L'});
  const final=store.importLabResult(patient,{test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'twin-final',
    status:'FINAL',value:80,unit:'umol/L',source_flag:'NORMAL',verification_state:'SYNTHETIC',epistemic_state:'MEASURED'});
  const dashboard=store.patientDashboardMvp(patient);
  assert.deepEqual(dashboard.lab_results.latest.map(x=>x.id),[final.result_id]);
  assert.equal(dashboard.patient_reported_labs[0].id,reported.result_id);
  const twin=store.buildClinicalStateTwinMvp(patient);
  assert.deepEqual(twin.source_versions.labs,[[final.result_id,1]]);
  assert.equal(twin.recent_labs[0].version,1);
  assert.equal(twin.recent_labs.some(x=>x.id===reported.result_id),false);
});

test('laboratory grant exposes scoped read-only data and is audited; one-time grant cannot replay',t=>{
  const{store,patient}=setup(t);
  const final=store.importLabResult(patient,{test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'qr-final',
    status:'FINAL',value:81,unit:'umol/L',verification_state:'SYNTHETIC',epistemic_state:'MEASURED'});
  const doctor=store.register({name:'Synthetic Doctor',email:'doctor-hardening@example.test',password,role:'doctor'},true);
  const grant=store.createGrant(patient,{recipient_id:doctor.id,scopes:['laboratory'],duration:'once'});
  const doctorSession=store.session(store.login(doctor.email,password).token);
  const projection=store.consume(doctorSession,grant.token);
  assert.equal(projection.laboratory.results[0].result_id,final.result_id);
  assert.equal(projection.laboratory.provenance.owner,'CAP-LABORATORY');
  assert.throws(()=>store.consume(doctorSession,grant.token),/NOT_FOUND/);
  assert.equal(store.db.prepare("SELECT COUNT(*) n FROM audit_events WHERE action='SHARED_LABORATORY_READ'").get().n,1);
});

test('laboratory grants remain bound to intended doctor, patient, expiry, and revocation',t=>{
  const{store,patient,other,advance}=setup(t);
  const doctor=store.register({name:'Synthetic Doctor Two',email:'doctor-hardening-2@example.test',password,role:'doctor'},true);
  const otherDoctor=store.register({name:'Synthetic Doctor Three',email:'doctor-hardening-3@example.test',password,role:'doctor'},true);
  const grant=store.createGrant(patient,{recipient_id:doctor.id,scopes:['laboratory'],duration:'1h'});
  const doctorSession=store.session(store.login(doctor.email,password).token);
  const wrongDoctor=store.session(store.login(otherDoctor.email,password).token);
  assert.throws(()=>store.consume(wrongDoctor,grant.token),/NOT_FOUND/);
  store.revoke(patient,grant.id);
  assert.throws(()=>store.consume(doctorSession,grant.token),/NOT_FOUND/);
  const expired=store.createGrant(other,{recipient_id:doctor.id,scopes:['laboratory'],duration:'1h'});
  advance(3600001);
  assert.throws(()=>store.consume(doctorSession,expired.token),/NOT_FOUND/);
});

test('pre-existing legacy laboratory rows are bridged once without deleting legacy source history',t=>{
  const{store,patient}=setup(t),p=store.patient(patient);
  store.db.prepare('INSERT INTO lab_results_mvp(id,patient_id,test_code,test_name,value,unit,reference_low,reference_high,reference_text,abnormal_flag,critical_flag,specimen,collected_at,resulted_at,laboratory,source,verification_state,provenance,jurisdiction,document_id,method,range_context,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run('legacy-row-1',p.id,'lab-creat','Legacy Creatinine',70,'umol/L',50,100,'legacy text','NORMAL',0,'serum',store.now(),store.now(),'legacy lab','manual','VERIFIED','{}','GB',null,'legacy method','{}',store.now());
  const projected=store.labResultsMvp(patient,'lab-creat');
  assert.equal(projected.length,1);
  assert.equal(projected[0].epistemic_state,'PATIENT_REPORTED');
  assert.equal(projected[0].verification_state,'UNVERIFIED');
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM laboratory_results WHERE source_system=?').get('EDHT_LEGACY_MVP').n,1);
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM lab_results_mvp WHERE id=?').get('legacy-row-1').n,1);
  assert.equal(store.migrateLegacyLabResultsMvp(patient).migrated,0);
});

test('POCT uses the injected application clock for its observation time',t=>{
  const{store,patient}=setup(t);
  const created=store.labSpecialtyCreate(patient,'POCT',{device:{id:'demo-meter'},measurement:{code:'GLU',name:'Glucose',value:5.4,unit:'mmol/L'}});
  const current=store.labSpecialtyGet(patient,created.record_id).current;
  assert.equal(current.payload.observed_at,store.now());
});

test('all supported laboratory value types enforce their closed contracts',t=>{
  const{store,patient}=setup(t),valid=[
    ['NUMERIC',2.5],['TEXT','detected'],['BOOLEAN',true],['CODED',{code:'X1',system:'synthetic',display:'Example'}],
    ['RATIO',{numerator:1,denominator:4,numerator_unit:'mg',denominator_unit:'L'}],
    ['RANGE',{lower:1,upper:3,unit:'mg/L'}],['POSITIVE_NEGATIVE','NEGATIVE'],
    ['NOT_DETECTED_DETECTED','NOT_DETECTED'],['UNKNOWN',null]
  ];
  for(const[valueType,value]of valid)store.importLabResult(patient,{test_id:'lab-creat',source_system:'TYPE_TEST',external_result_id:'valid-'+valueType,status:'REGISTERED',value_type:valueType,value});
  const invalid=[
    ['NUMERIC',NaN],['NUMERIC',Infinity],['TEXT',5],['BOOLEAN','true'],['CODED',{code:'X'}],
    ['RATIO',{numerator:1,denominator:0}],['RANGE',{lower:4,upper:2}],
    ['POSITIVE_NEGATIVE','MAYBE'],['NOT_DETECTED_DETECTED','ABSENT'],['UNKNOWN','not unknown']
  ];
  for(const[valueType,value]of invalid)assert.throws(()=>store.importLabResult(patient,{test_id:'lab-creat',source_system:'TYPE_TEST',external_result_id:'invalid-'+valueType+'-'+String(value),status:'REGISTERED',value_type:valueType,value}));
  assert.throws(()=>store.importLabResult(patient,{test_id:'lab-creat',observed_at:Infinity}),/INVALID_LAB_TIMESTAMP/);
});

test('synthetic authenticated provider adapter stamps synthetic trust and attribution',t=>{
  const{store,patient}=setup(t);
  const result=store.importTrustedLabResult(patient,{authenticated:true,source_state:'SYNTHETIC_AUTHENTICATED',provider_id:'syn-lab-edht',connector_id:'synthetic-fixture',adapter_version:'1.2',source_system:'SYNTHETIC_LIS'},
    {test_id:'lab-creat',external_result_id:'trusted-1',status:'FINAL',value:83,unit:'µmol/L'});
  const current=store.labResult(patient,result.result_id).current;
  assert.equal(current.verification_state,'SYNTHETIC');
  assert.equal(current.epistemic_state,'MEASURED');
  assert.equal(current.provenance.adapter,'synthetic-fixture');
  assert.equal(current.provenance.production_connectivity,false);
});

test('missing source timestamps do not alter idempotency hash and correction attribution is retained',t=>{
  const{store,patient,advance}=setup(t),input={test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'stable-no-time',status:'FINAL',value:84,unit:'µmol/L'};
  const first=store.importLabResult(patient,input);advance(3600000);
  const replay=store.importLabResult(patient,input);assert.equal(replay.replayed,true);
  assert.equal(store.labResult(patient,first.result_id).current.observed_at,null);
  assert.throws(()=>store.reviseLabResult(patient,first.result_id,{status:'CORRECTED',value:85}),/CORRECTION_REASON_REQUIRED/);
  const corrected=store.reviseLabResult(patient,first.result_id,{status:'CORRECTED',value:85,correction_reason:'Source correction'});
  const version=store.db.prepare('SELECT actor_id,correction_reason,previous_version FROM laboratory_result_versions WHERE result_id=? AND version=?').get(first.result_id,corrected.version);
  assert.equal(version.actor_id,patient.user_id);
  assert.equal(version.correction_reason,'Source correction');
  assert.equal(version.previous_version,1);
});

test('order final state is derived from canonical measured results after valid specimen lifecycle',t=>{
  const{store,patient}=setup(t);
  const order=store.createLabOrder(patient,{test_ids:['lab-creat'],provider_id:'syn-lab-edht'});
  store.labOrderAction(patient,order.id,'ACCEPTED');
  store.labOrderAction(patient,order.id,'AWAITING_COLLECTION');
  const specimen=store.createLabSpecimen(patient,order.id,{specimen_type:'serum'});
  store.labSpecimenAction(patient,specimen.id,'COLLECTED',{collector:'Synthetic Collector'});
  store.labOrderAction(patient,order.id,'COLLECTED');
  store.labSpecimenAction(patient,specimen.id,'RECEIVED');
  store.labOrderAction(patient,order.id,'RECEIVED');
  const accession=store.createLabAccession(patient,{order_id:order.id,specimen_id:specimen.id,provider_id:'syn-lab-edht'});
  assert.ok(accession.id);
  store.labSpecimenAction(patient,specimen.id,'PROCESSING');
  store.labOrderAction(patient,order.id,'IN_PROCESS');
  assert.throws(()=>store.labOrderAction(patient,order.id,'FINAL'),/FINAL_RESULTS_REQUIRED/);
  assert.throws(()=>store.labSpecimenAction(patient,specimen.id,'ACCESSIONED'),/ACCESSION_MUST_USE_CREATE_LAB_ACCESSION/);
  store.importLabResult(patient,{test_id:'lab-creat',order_id:order.id,specimen_id:specimen.id,source_system:'SYNTHETIC_LIS',
    external_result_id:'lifecycle-final',status:'FINAL',value_type:'NUMERIC',value:77,unit:'µmol/L',
    verification_state:'SYNTHETIC',epistemic_state:'MEASURED'});
  const current=store.db.prepare('SELECT status FROM laboratory_orders WHERE id=?').get(order.id);
  assert.equal(current.status,'FINAL');
  assert.equal(store.db.prepare('SELECT COUNT(*) n FROM laboratory_order_events WHERE order_id=? AND to_status=\'FINAL\'').get(order.id).n,1);
});

test('active health coverage remains synthetic, CI-unverified and not production-ready',async t=>{
  const app=createApplication({database:':memory:'});
  t.after(()=>app.close());
  const origin=await app.start(0);
  const response=await fetch(origin+'/api/health'),health=await response.json();
  assert.equal(health.mode,'synthetic');
  assert.equal(health.ci_verified,false);
  assert.equal(health.production_ready,false);
  assert.equal(health.master27_28.canonical_owner,'CAP-LABORATORY');
  assert.ok(health.master27_28.external_gates.includes('clinical_validation'));
});
