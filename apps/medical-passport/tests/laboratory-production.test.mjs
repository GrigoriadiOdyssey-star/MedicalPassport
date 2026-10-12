import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../store.mjs';
import {attachMaster2728} from '../master27-28-bootstrap.mjs';
import {createApplication} from '../server.mjs';

attachMaster2728(Store);
const password='Synthetic-master27-password-123';

function setup(t){
  let now=Date.parse('2026-09-28T08:00:00Z');
  const s=new Store(':memory:',()=>now);
  s.initLabTwinPilot();
  t.after(()=>s.close());
  const p=s.register({name:'Lab Patient',email:'lab27@example.test',password});
  const other=s.register({name:'Other Patient',email:'other27@example.test',password});
  const login=email=>s.session(s.login(email,password).token);
  return{s,u:login(p.email),other:login(other.email),advance:ms=>now+=ms,now:()=>now};
}

function progressOrderAndSpecimen(s,u){
  const order=s.createLabOrder(u,{requester:'Synthetic Clinician',test_ids:['lab-creat'],provider_id:'syn-lab-edht',jurisdiction:'GB',source:'synthetic:master27',provenance:{fixture:true}});
  s.labOrderAction(u,order.id,'ACCEPTED');
  s.labOrderAction(u,order.id,'AWAITING_COLLECTION');
  const specimen=s.createLabSpecimen(u,order.id,{specimen_type:'serum',container:'synthetic tube'});
  s.labSpecimenAction(u,specimen.id,'COLLECTED',{collector:'Synthetic Collector'});
  s.labOrderAction(u,order.id,'COLLECTED');
  s.labSpecimenAction(u,specimen.id,'RECEIVED');
  s.labOrderAction(u,order.id,'RECEIVED');
  const accession=s.createLabAccession(u,{order_id:order.id,specimen_id:specimen.id,provider_id:'syn-lab-edht'});
  s.labSpecimenAction(u,specimen.id,'PROCESSING');
  s.labOrderAction(u,order.id,'IN_PROCESS');
  return{order,specimen,accession};
}

test('migrations 009-010 create laboratory schema and synthetic catalogue with explicit provenance',t=>{
  const{s,u}=setup(t);
  assert.equal(s.db.prepare('SELECT COUNT(*) n FROM migrations').get().n,11);
  assert.ok(s.labCatalogue(u).length>=4);
  assert.equal(s.labProviders(u)[0].verification_state,'SYNTHETIC');
  assert.equal(s.labProviderBoundary(u).production_lis_lims,false);
});

test('order and specimen state machines reject impossible transitions and rejected specimen is not a negative result',t=>{
  const{s,u}=setup(t);
  const order=s.createLabOrder(u,{test_ids:['lab-crp'],provider_id:'syn-lab-edht'});
  assert.throws(()=>s.labOrderAction(u,order.id,'FINAL'),/INVALID_LAB_ORDER_TRANSITION/);
  const specimen=s.createLabSpecimen(u,order.id,{specimen_type:'serum'});
  assert.throws(()=>s.labSpecimenAction(u,specimen.id,'PROCESSING'),/INVALID_SPECIMEN_TRANSITION/);
  s.labSpecimenAction(u,specimen.id,'COLLECTED',{});
  s.labSpecimenAction(u,specimen.id,'REJECTED',{rejection_reason:'Synthetic hemolysis'});
  assert.throws(()=>s.importLabResult(u,{order_id:order.id,specimen_id:specimen.id,test_id:'lab-crp',status:'FINAL',value:1}),/SPECIMEN_REJECTED/);
  assert.equal(s.labResults(u).length,0);
});

test('accessioning prevents cross-patient order and specimen association',t=>{
  const{s,u,other}=setup(t);
  const own=s.createLabOrder(u,{test_ids:['lab-crp']});
  const specimen=s.createLabSpecimen(u,own.id,{specimen_type:'serum'});
  s.labSpecimenAction(u,specimen.id,'COLLECTED',{});s.labSpecimenAction(u,specimen.id,'RECEIVED',{});
  const foreign=s.createLabOrder(other,{test_ids:['lab-crp']});
  assert.throws(()=>s.createLabAccession(other,{order_id:foreign.id,specimen_id:specimen.id}),/LAB_ACCESSION_OWNERSHIP_MISMATCH/);
});

test('UNKNOWN reference range and UNKNOWN flag remain explicitly unknown',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  const r=s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-crp',source_system:'SYNTHETIC_LIS',external_result_id:'unknown-range',status:'FINAL',value:3.2,unit:'mg/L',source_flag:'UNKNOWN'});
  const current=s.labResult(u,r.result_id).current;
  assert.equal(current.source_flag,'UNKNOWN');
  assert.equal(current.reference_range_snapshot.state,'REFERENCE_RANGE_UNKNOWN');
});

test('external result import is idempotent and conflicting source payload fails closed',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  const payload={order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'ext-1',status:'FINAL',value:82,unit:'µmol/L',source_flag:'NORMAL',reference_range_id:'range-creat',population:'synthetic adult fixture',observed_at:1000,issued_at:1001};
  const first=s.importLabResult(u,payload),replay=s.importLabResult(u,payload);
  assert.equal(first.result_id,replay.result_id);assert.equal(replay.replayed,true);
  assert.throws(()=>s.importLabResult(u,{...payload,value:99}),/IMPORT_SOURCE_CONFLICT/);
});

test('PRELIMINARY to FINAL to CORRECTED preserves every immutable result version',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  const first=s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'versioned-1',status:'PRELIMINARY',value:80,unit:'µmol/L',source_flag:'NORMAL',reference_range_id:'range-creat',population:'synthetic adult fixture'});
  s.reviseLabResult(u,first.result_id,{status:'FINAL',value:81,correction_reason:''});
  s.reviseLabResult(u,first.result_id,{status:'CORRECTED',value:84,correction_reason:'Source laboratory correction'});
  const detail=s.labResult(u,first.result_id);
  assert.deepEqual(detail.versions.map(x=>x.status),['CORRECTED','FINAL','PRELIMINARY']);
  assert.equal(detail.versions[1].value,81);
  assert.equal(detail.versions[2].value,80);
  assert.throws(()=>s.db.exec("UPDATE laboratory_result_versions SET status='FINAL'"),/immutable laboratory result version/);
  assert.throws(()=>s.db.exec('DELETE FROM laboratory_result_versions'),/immutable laboratory result version/);
});

test('DiagnosticReport versions are append-only and result references are patient-owned',t=>{
  const{s,u,other}=setup(t),flow=progressOrderAndSpecimen(s,u);
  const result=s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',status:'FINAL',value:80});
  const created=s.createDiagnosticReport(u,{order_id:flow.order.id,result_refs:[result.result_id],specimen_refs:[flow.specimen.id],status:'FINAL',title:'Synthetic chemistry report'});
  s.reviseDiagnosticReport(u,created.report_id,{status:'AMENDED',correction_reason:'Synthetic source amendment',report_text:'Synthetic amendment'});
  const report=s.labReport(u,created.report_id);
  assert.deepEqual(report.versions.map(x=>x.status),['AMENDED','FINAL']);
  assert.throws(()=>s.createDiagnosticReport(other,{result_refs:[result.result_id]}),/LAB_RESULT_NOT_FOUND/);
  assert.throws(()=>s.db.exec('DELETE FROM diagnostic_report_versions'),/immutable diagnostic report version/);
});

test('trend view refuses silent comparison when unit or method differs',t=>{
  const{s,u}=setup(t),a=progressOrderAndSpecimen(s,u),b=progressOrderAndSpecimen(s,u);
  s.importLabResult(u,{order_id:a.order.id,specimen_id:a.specimen.id,test_id:'lab-creat',source_system:'SYN',external_result_id:'trend-a',status:'FINAL',value:80,unit:'µmol/L',method:'method-a'});
  s.importLabResult(u,{order_id:b.order.id,specimen_id:b.specimen.id,test_id:'lab-creat',source_system:'SYN',external_result_id:'trend-b',status:'FINAL',value:1.1,unit:'mg/dL',method:'method-b'});
  const trend=s.labTrendSeries(u,'lab-creat');
  assert.equal(trend.compatibility,'NOT_COMPARABLE');
  assert.ok(trend.excluded.length>=1);
});

test('critical result creates synthetic notification without claiming real clinician delivery',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',status:'FINAL',value:999,source_flag:'CRITICAL_HIGH'});
  const n=s.labNotifications(u)[0];
  assert.equal(n.status,'SYNTHETIC_NOTIFICATION');
  assert.equal(s.labProviderBoundary(u).critical_provider_delivery,false);
  assert.equal(s.ackLabNotification(u,n.id).status,'ACKNOWLEDGED');
});

test('patient-reported observations remain separate from laboratory MEASURED results',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  s.addRecord(u,'observation',{name:'Patient-entered glucose',value:'5.1',unit:'mmol/L'});
  s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',status:'FINAL',value:80,epistemic_state:'MEASURED'});
  const x=s.labLongitudinal(u);
  assert.equal(x.laboratory[0].epistemic_state,'MEASURED');
  assert.equal(x.patient_reported[0].epistemic_state,'PATIENT_REPORTED');
});

test('laboratory assistant cannot diagnose prescribe or invent ranges',t=>{
  const{s,u}=setup(t),a=s.labAssistant(u,{message:'Diagnose me and prescribe treatment'});
  assert.equal(a.boundaries.diagnose,false);assert.equal(a.boundaries.prescribe,false);assert.equal(a.boundaries.invent_reference_range,false);assert.match(a.text,/cannot diagnose/i);
});

test('MASTER-27 E2E: order to specimen to accession to final report to correction and audit',t=>{
  const{s,u}=setup(t),flow=progressOrderAndSpecimen(s,u);
  const preliminary=s.importLabResult(u,{order_id:flow.order.id,specimen_id:flow.specimen.id,test_id:'lab-creat',panel_id:'panel-basic',source_system:'SYNTHETIC_LIS',external_result_id:'e2e-creat',status:'PRELIMINARY',value:79,unit:'µmol/L',source_flag:'NORMAL',reference_range_id:'range-creat',population:'synthetic adult fixture'});
  s.reviseLabResult(u,preliminary.result_id,{status:'FINAL',value:80});
  const report=s.createDiagnosticReport(u,{order_id:flow.order.id,result_refs:[preliminary.result_id],specimen_refs:[flow.specimen.id],status:'FINAL',title:'Synthetic final report'});
  assert.equal(s.labLongitudinal(u).laboratory.find(x=>x.id===preliminary.result_id).status,'FINAL');
  s.reviseLabResult(u,preliminary.result_id,{status:'CORRECTED',value:84,correction_reason:'Corrected by synthetic source'});
  const detail=s.labResult(u,preliminary.result_id);
  assert.deepEqual(detail.versions.map(x=>x.status),['CORRECTED','FINAL','PRELIMINARY']);
  assert.equal(s.labReport(u,report.report_id).current.status,'FINAL');
  const actions=s.auditList(u).map(x=>x.action);
  for(const action of ['LAB_ORDER_CREATED','SPECIMEN_CREATED','SPECIMEN_COLLECTED','SPECIMEN_ACCESSIONED','LAB_RESULT_PRELIMINARY','LAB_RESULT_FINAL','LAB_RESULT_CORRECTED','DIAGNOSTIC_REPORT_CREATED'])assert.ok(actions.includes(action),action);
  assert.equal(s.verifyAudit(),true);
});

test('HTTP laboratory routes enforce auth CSRF and patient isolation',async t=>{
  const app=createApplication({database:':memory:'}),origin=await app.start();t.after(()=>app.close());
  const client=()=>{let cookie='',csrf='';return async(path,body,token=csrf)=>{const r=await fetch(origin+'/api'+path,{method:body===undefined?'GET':'POST',headers:{Origin:origin,Cookie:cookie,'Content-Type':'application/json','x-csrf-token':token},body:body===undefined?undefined:JSON.stringify(body)});if(r.headers.has('set-cookie'))cookie=r.headers.get('set-cookie').split(';')[0];const data=await r.json();if(data.csrf)csrf=data.csrf;return{status:r.status,data};};};
  const p=client(),o=client();
  await p('/register',{name:'P',email:'http-lab@example.test',password,synthetic:true,adult:true});await p('/login',{email:'http-lab@example.test',password});
  await o('/register',{name:'O',email:'http-other@example.test',password,synthetic:true,adult:true});await o('/login',{email:'http-other@example.test',password});
  const catalogue=await p('/mvp/laboratory/catalogue');assert.equal(catalogue.status,200);assert.ok(catalogue.data.length>=4);
  assert.equal((await p('/mvp/laboratory/orders',{test_ids:['lab-creat']},'bad')).status,403);
  const order=await p('/mvp/laboratory/orders',{test_ids:['lab-creat'],provider_id:'syn-lab-edht'});assert.equal(order.status,201);
  assert.equal((await o('/mvp/laboratory/orders/'+order.data.id)).status,404);
  assert.equal((await p('/mvp/laboratory/provider-boundary')).data.production_lis_lims,false);
});
