import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../store.mjs';
import {attachMaster2728} from '../master27-28-bootstrap.mjs';
import {createApplication} from '../server.mjs';

attachMaster2728(Store);
const password='Synthetic-master27-specialty-123';

function fixture(t){
 let now=Date.parse('2026-09-28T12:00:00Z');
 const s=new Store(':memory:',()=>now);s.initLabTwinPilot();t.after(()=>s.close());
 const p=s.register({name:'Specialty Patient',email:'specialty@example.test',password});
 const o=s.register({name:'Other Patient',email:'specialty-other@example.test',password});
 const user=email=>s.session(s.login(email,password).token);
 return{s,u:user(p.email),other:user(o.email),tick:ms=>now+=ms};
}

test('migration 010 is additive and specialty boundaries are synthetic adapters',t=>{
 const{s,u}=fixture(t);
 assert.equal(s.db.prepare('SELECT COUNT(*) n FROM migrations').get().n,11);
 const b=s.labSpecializedBoundaries(u);
 for(const key of ['pathology','microbiology','molecular_genetics','poct_devices'])assert.equal(b[key].status,'SYNTHETIC_ADAPTER');
 assert.equal(b.pathology.autonomous_diagnosis,false);
 assert.equal(b.microbiology.therapy_recommendation,false);
 assert.equal(b.poct_devices.laboratory_verified_by_default,false);
});

test('pathology record keeps specialist text append-only and never becomes an AI diagnosis',t=>{
 const{s,u}=fixture(t);
 const created=s.labSpecialtyCreate(u,'PATHOLOGY',{status:'FINAL',anatomic_site:'Synthetic kidney biopsy',microscopy:'Synthetic microscopy description',diagnosis_text:'Source pathologist text',pathologist:'Synthetic Pathologist',source:'synthetic:master27'});
 const corrected=s.labSpecialtyRevise(u,created.record_id,{status:'CORRECTED',diagnosis_text:'Corrected source pathologist text'});
 assert.equal(corrected.version,2);
 const detail=s.labSpecialtyGet(u,created.record_id);
 assert.deepEqual(detail.versions.map(v=>v.status),['CORRECTED','FINAL']);
 assert.equal(detail.current.payload.specialist_interpretation_required,true);
 assert.equal(detail.current.payload.autonomous_diagnosis,false);
 assert.throws(()=>s.db.exec("UPDATE laboratory_specialty_versions SET status='FINAL'"),/immutable laboratory specialty version/);
});

test('microbiology susceptibility stores source interpretation without treatment recommendation',t=>{
 const{s,u}=fixture(t);
 const r=s.labSpecialtyCreate(u,'MICROBIOLOGY',{status:'FINAL',specimen:'Synthetic swab',organism:'Synthetic organism',detection_result:'DETECTED',culture_status:'GROWTH',susceptibility:[{antibiotic:'Synthetic antibiotic A',mic:'1',unit:'mg/L',interpretation:'SUSCEPTIBLE',source_interpretation:'Synthetic source interpretation'}]});
 const current=s.labSpecialtyGet(u,r.record_id).current.payload;
 assert.equal(current.susceptibility[0].interpretation,'SUSCEPTIBLE');
 assert.equal(current.therapy_recommendation,false);
 assert.equal(current.autonomous_antibiotic_selection,false);
});

test('molecular genetics requires interpretation provenance and never invents pathogenicity or PGx action',t=>{
 const{s,u}=fixture(t);
 assert.throws(()=>s.labSpecialtyCreate(u,'MOLECULAR_GENETICS',{status:'FINAL',sample:'Synthetic blood',variants:[{gene:'GENE1',variant:'c.1A>G',classification:'pathogenic'}]}),/GENETIC_INTERPRETATION_SOURCE_REQUIRED/);
 const r=s.labSpecialtyCreate(u,'MOLECULAR_GENETICS',{status:'FINAL',sample:'Synthetic blood',reference_assembly:'GRCh38',variants:[{gene:'GENE1',variant:'c.1A>G',classification:'source-classification',classification_source:'Synthetic external report',evidence_level:'SOURCE_PROVIDED'}],interpretation_source:'Synthetic external report'});
 const current=s.labSpecialtyGet(u,r.record_id).current.payload;
 assert.equal(current.fabricated_variants,false);
 assert.equal(current.fabricated_pathogenicity,false);
 assert.equal(current.fabricated_pgx,false);
 assert.equal(current.pharmacogenomic_action,false);
});

test('POCT remains device-origin data and is not silently upgraded to laboratory verified',t=>{
 const{s,u}=fixture(t);
 const r=s.labSpecialtyCreate(u,'POCT',{device:{id:'device-syn-1',manufacturer:'Synthetic Devices'},measurement:{code:'GLU',name:'Glucose',value:5.4,unit:'mmol/L'},observed_at:1000,source:'device:unverified'});
 const current=s.labSpecialtyGet(u,r.record_id).current;
 assert.equal(current.verification_state,'UNVERIFIED');
 assert.equal(current.payload.laboratory_verified,false);
 assert.equal(current.payload.lab_equivalent,false);
});

test('specialty records preserve patient isolation and external idempotency',t=>{
 const{s,u,other}=fixture(t);
 const input={status:'FINAL',anatomic_site:'Synthetic skin biopsy',diagnosis_text:'Synthetic source text',source_system:'SYN_PATH',external_record_id:'path-1'};
 const a=s.labSpecialtyCreate(u,'PATHOLOGY',input),b=s.labSpecialtyCreate(u,'PATHOLOGY',input);
 assert.equal(a.record_id,b.record_id);assert.equal(b.replayed,true);
 assert.throws(()=>s.labSpecialtyGet(other,a.record_id),/LAB_SPECIALTY_NOT_FOUND/);
 assert.throws(()=>s.labSpecialtyCreate(u,'PATHOLOGY',{...input,diagnosis_text:'Conflicting source text'}),/IMPORT_SOURCE_CONFLICT/);
});

test('HTTP specialty routes enforce auth, CSRF, namespace and patient isolation',async t=>{
 const app=createApplication({database:':memory:'}),origin=await app.start();t.after(()=>app.close());
 function client(){let cookie='',csrf='';return async(path,body,token=csrf)=>{const r=await fetch(origin+'/api'+path,{method:body===undefined?'GET':'POST',headers:{Origin:origin,Cookie:cookie,'Content-Type':'application/json','x-csrf-token':token},body:body===undefined?undefined:JSON.stringify(body)});if(r.headers.has('set-cookie'))cookie=r.headers.get('set-cookie').split(';')[0];const data=await r.json();if(data.csrf)csrf=data.csrf;return{status:r.status,data};};}
 const p=client(),o=client();
 await p('/register',{name:'P',email:'http-specialty@example.test',password,synthetic:true,adult:true});await p('/login',{email:'http-specialty@example.test',password});
 await o('/register',{name:'O',email:'http-specialty-other@example.test',password,synthetic:true,adult:true});await o('/login',{email:'http-specialty-other@example.test',password});
 const denied=await p('/mvp/laboratory/pathology',{status:'FINAL',anatomic_site:'Synthetic biopsy',diagnosis_text:'Synthetic source'},'bad');assert.equal(denied.status,403);
 const created=await p('/mvp/laboratory/pathology',{status:'FINAL',anatomic_site:'Synthetic biopsy',diagnosis_text:'Synthetic source'});assert.equal(created.status,201);
 assert.equal((await p('/mvp/laboratory/pathology/'+created.data.record_id)).status,200);
 assert.equal((await p('/mvp/laboratory/microbiology/'+created.data.record_id)).status,404);
 assert.equal((await o('/mvp/laboratory/pathology/'+created.data.record_id)).status,404);
});
