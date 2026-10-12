import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {documentRoute} from '../public/api/_lib/cloud-documents.mjs';
const id='11111111-1111-4111-8111-111111111111',bytes=Buffer.from('EDHT synthetic original'),hash=createHash('sha256').update(bytes).digest('hex'),cap='K'.repeat(43);
function harness(status='OPEN'){const calls=[];let reads=0;return{calls,get reads(){return reads;},cloud:{base:new URL('https://synthetic.supabase.co'),key:'sb_publishable_synthetic',token:'synthetic-session',rows:async()=>[{id,document_id:id,version:1,size:bytes.length,sha256:hash,mime:'text/plain',status,expires_at:new Date(Date.now()+60000).toISOString()}],fetch:async()=>{reads++;return new Response(bytes);},rpc:async(name,args)=>{calls.push({name,args});return{id,version:1,ok:true};}}};}
test('verified completion uses only server capability and rereads legacy COMPLETE originals',async()=>{
 for(const status of['OPEN','COMPLETE']){
  const h=harness(status);const r=await documentRoute({cloud:h.cloud,user:{id},method:'POST',path:'/api/uploads/'+id+'/complete',payload:{p_server_capability:'client-forgery'},env:{EDHT_DOCUMENT_INGESTION_CAPABILITY:cap}});
  assert.equal(r.body.ok,true);assert.equal(h.reads,1);assert.deepEqual(h.calls,[{name:'edht_upload_verified_finish',args:{p_id:id,p_server_capability:cap,p_observed_sha256:hash,p_observed_size:bytes.length,p_observed_mime:'text/plain'}}]);
 }
});
test('client capability cannot enable completion; cancellation retains the canonical RPC',async()=>{
 const h=harness();await assert.rejects(documentRoute({cloud:h.cloud,user:{id},method:'POST',path:'/api/uploads/'+id+'/complete',payload:{p_server_capability:cap},env:{}}),e=>e.status===503&&e.message==='DOCUMENT_VERIFICATION_NOT_CONFIGURED');assert.equal(h.calls.length,0);
 await documentRoute({cloud:h.cloud,user:{id},method:'POST',path:'/api/uploads/'+id+'/cancel',payload:{},env:{}});assert.deepEqual(h.calls,[{name:'edht_upload_finish',args:{p_id:id,p_cancel:true}}]);
});
