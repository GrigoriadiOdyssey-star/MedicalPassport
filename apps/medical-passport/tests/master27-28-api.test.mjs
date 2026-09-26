import test from 'node:test';
import assert from 'node:assert/strict';
import {handleMaster2728Api} from '../master27-28-api.mjs';
function invoke(method,route,{body={},query='',methods={}}={}){let response;const store=new Proxy({}, {get:(_,name)=>methods[name]||(()=>({method:name}))});const handled=handleMaster2728Api({req:{method},route,url:new URL('http://local'+route+query),body,user:{user_id:'u1'},store,json:(status,value)=>{response={status,value};}});return{handled,response};}
test('dashboard route is isolated and handled',()=>{const r=invoke('GET','/api/mvp/dashboard',{methods:{patientDashboardMvp:()=>({environment:'PILOT_SYNTHETIC'})}});assert.equal(r.handled,true);assert.equal(r.response.status,200);assert.equal(r.response.value.environment,'PILOT_SYNTHETIC');});
test('unknown route falls through to MASTER-26 router',()=>assert.equal(invoke('GET','/api/pharmacy').handled,false));
test('lab trend requires code',()=>assert.throws(()=>invoke('GET','/api/mvp/labs/trend'),/LAB_TEST_CODE_REQUIRED/));
test('digital twin snapshot delegates to bounded runtime',()=>{const r=invoke('POST','/api/mvp/digital-twin/snapshot',{methods:{buildClinicalStateTwinMvp:()=>({kind:'Clinical State Twin'})}});assert.equal(r.response.status,201);assert.equal(r.response.value.kind,'Clinical State Twin');});
test('document metadata accepts UUID route',()=>{const id='123e4567-e89b-12d3-a456-426614174000';const r=invoke('POST',`/api/mvp/documents/${id}/metadata`,{methods:{setDocumentMetadataMvp:(_u,doc)=>({document_id:doc})}});assert.equal(r.response.value.document_id,id);});
