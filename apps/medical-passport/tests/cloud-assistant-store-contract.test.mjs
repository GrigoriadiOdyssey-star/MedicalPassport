import test from 'node:test';
import assert from 'node:assert/strict';
import { AssistantStore, AssistantStoreError } from '../public/api/_lib/assistant-store.mjs';

const A='84000000-0000-4000-8000-000000000001';
const C='85000000-0000-4000-8000-000000000001';
const R='86000000-0000-4000-8000-000000000001';
const capability='a'.repeat(43); // A synthetic fixture, never a deployment credential.
function harness(reply={status:'reserved'}) {
 const calls=[];
 const cloud={
  async rpc(name,body={}) { calls.push({name,body}); return reply; },
  async rows(name,query) { calls.push({name,query}); return []; },
 };
 return {calls,store:new AssistantStore(cloud,capability),cloud};
}
const reservation={conversationId:C,requestId:R,message:'A synthetic question',language:'en',expectedVersion:0,maxInputTokens:100,maxOutputTokens:50};
const response={text:'A synthetic response',source_records:[],safe_status:'INFORMATION',rules_version:'contract-v1'};

test('conversation reads carry the owner predicate and only validated entity IDs',async()=>{
 const h=harness();
 assert.deepEqual(await h.store.list(A),[]);
 assert.equal(h.calls[0].query.owner_user_id,'eq.'+A);
 assert.equal(h.calls[0].query.limit,'100');
 await h.store.history(C);
 assert.deepEqual(h.calls[1],{name:'edht_assistant_history',body:{p_conversation_id:C}});
 await assert.rejects(h.store.history('foreign-or-invalid'),e=>e.code==='AI_INVALID_ID');
 assert.equal(h.calls.length,2);
});

test('absent server capability cannot reserve spend or reconcile forged provider text',async()=>{
 const h=harness(),store=new AssistantStore(h.cloud,undefined);
 await assert.rejects(store.reserve(reservation),e=>e.code==='AI_NOT_CONFIGURED'&&e.status===503);
 await assert.rejects(store.finish({requestId:R,status:'completed',response,usage:{input_tokens:1,output_tokens:1}}),e=>e.code==='AI_NOT_CONFIGURED');
 assert.equal(h.calls.length,0);
});

test('bad request size, language, version and token bounds stop before the database',async()=>{
 const h=harness();
 for(const extra of [{message:''},{message:'x'.repeat(6001)},{language:'xx'},{expectedVersion:-1},{maxInputTokens:0},{maxOutputTokens:8193}])
  await assert.rejects(h.store.reserve({...reservation,...extra}),e=>e.code==='AI_INPUT_LIMIT');
 assert.equal(h.calls.length,0);
});

test('reservation forwards server-authorized bounds without inventing a model, price or owner',async()=>{
 const h=harness({status:'reserved',conversation_id:C,version:1});
 const r=await h.store.reserve(reservation);
 assert.equal(r.status,'reserved');
 assert.deepEqual(h.calls[0],{name:'edht_assistant_reserve',body:{
  p_server_capability:capability,p_conversation_id:C,p_request_id:R,
  p_message:reservation.message,p_language:'en',p_expected_version:0,
  p_max_input_tokens:100,p_max_output_tokens:50,
 }});
 assert.equal(Object.hasOwn(h.calls[0].body,'p_model'),false);
 assert.equal(Object.hasOwn(h.calls[0].body,'p_owner_user_id'),false);
});

test('missing or malformed provider usage preserves unknown cost rather than reconciling to zero',async()=>{
 const h=harness({status:'unknown',reserved_cost_microusd:150});
 for(const usage of [null,{input_tokens:20},{input_tokens:-1,output_tokens:10},{input_tokens:Infinity,output_tokens:0}]) {
  const r=await h.store.finish({requestId:R,status:'completed',response,usage});
  assert.equal(r.status,'unknown');
  const body=h.calls.at(-1).body;
  assert.equal(body.p_status,'unknown');
  assert.equal(body.p_response,null);
  assert.equal(body.p_input_tokens,null);
  assert.equal(body.p_output_tokens,null);
 }
});

test('valid usage and safe failure codes are forwarded; arbitrary errors are never persisted',async()=>{
 const h=harness({status:'completed',response});
 await h.store.finish({requestId:R,status:'completed',response,usage:{input_tokens:20,output_tokens:10}});
 assert.equal(h.calls[0].body.p_input_tokens,20);
 assert.equal(h.calls[0].body.p_output_tokens,10);
 assert.equal(h.calls[0].body.p_failure_code,null);
 await h.store.finish({requestId:R,status:'unknown',failureCode:'AI_PROVIDER_TIMEOUT'});
 assert.equal(h.calls[1].body.p_failure_code,'AI_PROVIDER_TIMEOUT');
 await assert.rejects(h.store.finish({requestId:R,status:'unknown',failureCode:'raw provider response or token'}),e=>e.code==='AI_INVALID_FINISH_STATUS');
 assert.equal(h.calls.length,2);
});

test('RLS, quota and conflict results become exact safe HTTP error codes',async()=>{
 for(const [code,status] of [['AI_CONVERSATION_NOT_FOUND',404],['AI_BUDGET_EXCEEDED',429],['AI_BUSY',409],['AI_RECONCILIATION_REQUIRED',409],['AI_CIRCUIT_OPEN',503]]) {
  const h=harness({error:code});
  await assert.rejects(h.store.reserve(reservation),e=>e instanceof AssistantStoreError&&e.code===code&&e.status===status);
 }
 const h=harness({error:'unexpected backend response with private details'});
 await assert.rejects(h.store.history(C),e=>e.code==='AI_STORE_REJECTED'&&e.status===503&&!e.message.includes('private details'));
});

test('cached token usage is marked as a conservative cost estimate',async()=>{
 const h=harness({status:'completed',response});
 for(const usage of [{input_tokens:20,output_tokens:10,cached_input_tokens:5},{input_tokens:20,output_tokens:10,estimated:true}]) {
  await h.store.finish({requestId:R,status:'completed',response,usage});
  assert.equal(h.calls.at(-1).body.p_cost_estimated,true);
 }
 await h.store.finish({requestId:R,status:'completed',response,usage:{input_tokens:20,output_tokens:10}});
 assert.equal(h.calls.at(-1).body.p_cost_estimated,false);
});
