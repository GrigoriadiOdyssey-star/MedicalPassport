import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../store.mjs';
import {attachMaster2728} from '../master27-28-bootstrap.mjs';

attachMaster2728(Store);
test('fresh Store applies the complete numbered migration registry before runtime initialization',t=>{
  const store=new Store(':memory:');
  t.after(()=>store.close());
  const versions=store.db.prepare('SELECT version FROM migrations ORDER BY version').all().map(x=>x.version);
  assert.deepEqual(versions,[1,2,3,4,5,6,7,8,9,10,11]);
  store.initLabTwinPilot();store.initLaboratoryExtensions();store.initLabTwinPilot();
  assert.deepEqual(store.db.prepare('SELECT version FROM migrations ORDER BY version').all().map(x=>x.version),versions);
  assert.ok(store.db.prepare("SELECT 1 FROM sqlite_master WHERE type='trigger' AND name='laboratory_result_owner_insert'").get());
});

test('database guards reject cross-patient specimen ownership and result identity edits',t=>{
  const store=new Store(':memory:');
  store.initLabTwinPilot();
  t.after(()=>store.close());
  const password='Synthetic-migration-guard-123!';
  const a=store.register({name:'A',email:'migration-a@example.test',password});
  const b=store.register({name:'B',email:'migration-b@example.test',password});
  const user=email=>store.session(store.login(email,password).token);
  const ua=user(a.email),ub=user(b.email),order=store.createLabOrder(ua,{test_ids:['lab-creat']});
  const foreignPatient=store.patient(ub).id;
  assert.throws(()=>store.db.prepare('INSERT INTO laboratory_specimens VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(
    'foreign-specimen',order.id,foreignPatient,'serum','','',null,'','','EXPECTED','UNKNOWN','','UNKNOWN','test','{}',store.now(),store.now()),/LAB_ORDER_PATIENT_MISMATCH/);
  const result=store.importLabResult(ua,{test_id:'lab-creat',source_system:'SYNTHETIC_LIS',external_result_id:'identity-check',status:'FINAL',value:80,unit:'umol/L'});
  assert.throws(()=>store.db.prepare('UPDATE laboratory_results SET source_system=? WHERE id=?').run('OTHER',result.result_id),/immutable laboratory result identity/);
});
