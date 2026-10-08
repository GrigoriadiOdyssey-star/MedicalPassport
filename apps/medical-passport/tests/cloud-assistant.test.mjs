import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { assistantRoute } from '../public/api/_lib/cloud-assistant.mjs';
import { assistantConfig, OpenAIResponses } from '../public/api/_lib/openai-responses.mjs';
import { buildAssistantContext } from '../public/api/_lib/assistant-context.mjs';
import { safetyDecision, validateModelAnswer } from '../public/api/_lib/assistant-safety.mjs';
const user={id:'11111111-1111-4111-8111-111111111111'};
const record={id:'22222222-2222-4222-8222-222222222222',version:2,kind:'medication',source:'patient_reported',created_at:100,body:{name:'synthetic medicine',dose:'recorded only',unit:'mg',verification_status:'UNVERIFIED',private_identifier:'never send'}};
const live={EDHT_AI_MODE:'live',EDHT_AI_TEST_USER_IDS:user.id,EDHT_AI_STORAGE_READY:'true',EDHT_AI_BUDGET_APPROVED:'true',OPENAI_API_KEY:'synthetic-provider-credential-for-contract-tests',EDHT_AI_LEDGER_CAPABILITY:'synthetic-capability-for-contract-tests-only-12345',EDHT_AI_MODEL:'approved-synthetic-model',EDHT_AI_PRICING_VERSION:'synthetic-price-v1'};
const payload=(message='Explain this recorded medicine',language='en')=>({message,language,request_id:randomUUID()});
function route(options={}) {return assistantRoute({user,cloud:{records:async()=>[record]},method:'POST',path:'/api/assistant',payload:payload(),env:{},...options});}
function memoryStore(){
 const id=randomUUID(),messages=[],requests=new Map();let version=0;const settlements=[];
 return {id,messages,settlements,list:async()=>[],create:async()=>({conversation_id:id,version}),history:async()=>({conversation_id:id,version,messages:[...messages]}),delete:async()=>({ok:true}),
  reserve:async r=>{if(requests.has(r.requestId))return{status:'completed',response:requests.get(r.requestId)};messages.push({role:'user',text:r.message});version++;return{status:'reserved',model:live.EDHT_AI_MODEL,pricing_version:live.EDHT_AI_PRICING_VERSION};},
  finish:async r=>{settlements.push(r);if(r.status==='completed'){messages.push({role:'assistant',text:r.response.text});version++;requests.set(r.requestId,r.response);}return{status:r.status,response:r.response};}};
}
test('default and missing approval are disabled without calling provider or records',async()=>{
 let called=0;await assert.rejects(route({cloud:{records:async()=>{called++;return[];}}}),e=>e.status===503&&e.message==='AI_DISABLED');assert.equal(called,0);
 assert.equal(assistantConfig({...live,EDHT_AI_BUDGET_APPROVED:''}).mode,'unavailable');
});
test('benign diagnosis explanation is allowed; treatment decision and immediate crisis take independent safe paths',async()=>{
 assert.equal(safetyDecision('Explain my recorded diagnosis').status,'INFORMATION');assert.equal(safetyDecision('Объясни записанный диагноз').status,'INFORMATION');
 assert.equal(safetyDecision('Please prescribe a higher dose').status,'CLINICIAN_REVIEW_REQUIRED');
 const r=await route({payload:payload('I cannot breathe')});assert.equal(r.body.safe_status,'EMERGENCY_ESCALATION');assert.equal(r.body.is_generative_ai,false);assert.match(r.body.text,/not placed a call/);
});
test('client model/system/owner fields and oversized input rejected before provider',async()=>{
 for(const field of ['model','owner_id','system','source_records','cost'])await assert.rejects(route({payload:{...payload(),[field]:'untrusted'}}),/AI_INPUT_INVALID/);
 await assert.rejects(route({payload:payload('x'.repeat(6001))}),/AI_INPUT_LIMIT/);
});
test('bounded context preserves sources, units and epistemic status and excludes identifiers',()=>{
 const c=buildAssistantContext([record,{...record,id:randomUUID(),version:1,archived:true}], 'medicine');assert.equal(c.records.length,2);assert.equal(c.records[0].source,'patient_reported');assert.equal(c.records[0].body.unit,'mg');assert.equal(c.records[0].body.verification_status,'UNVERIFIED');assert.equal(c.records[0].body.private_identifier,undefined);assert.equal(c.sources[1].archived,true);
 assert.equal(buildAssistantContext([], 'question').records.length,0);
});
test('fabricated source and unsafe output never become accepted answers',()=>{
 const c=buildAssistantContext([record],'medicine');assert.throws(()=>validateModelAnswer({text:'Invented',source_ids:['foreign/1'],safe_status:'INFORMATION'},c.sources),/AI_SOURCE_INVALID/);
 assert.throws(()=>validateModelAnswer({text:'You should increase your dose to 100 mg',source_ids:[],safe_status:'INFORMATION'},[]),/AI_UNSAFE_RESPONSE/);
});
test('Responses adapter uses fixed URL, store:false and strict output; returns safe usage only',async()=>{
 let request;const p=new OpenAIResponses({apiKey:live.OPENAI_API_KEY,fetchImpl:async(url,init)=>{request={url,init};return Response.json({id:'synthetic-provider-request',status:'completed',output:[{type:'message',role:'assistant',content:[{type:'output_text',text:JSON.stringify({text:'A meaningful contract answer',source_ids:[],safe_status:'INFORMATION'})}]}],usage:{input_tokens:23,output_tokens:8}});}});
 const r=await p.respond({model:live.EDHT_AI_MODEL,instructions:'safety instructions',messages:[{role:'user',text:'question'}],context:{records:[]}});
 const body=JSON.parse(request.init.body);assert.equal(request.url,'https://api.openai.com/v1/responses');assert.equal(request.init.redirect,'error');assert.equal(body.store,false);assert.equal(body.text.format.strict,true);assert.equal(body.model,live.EDHT_AI_MODEL);assert.deepEqual(r.usage,{input_tokens:23,output_tokens:8});assert.equal(r.provider_reference.length,24);
});
test('five turns use authoritative prior messages, persist replies and idempotent replay avoids another call',async()=>{
 const store=memoryStore();let calls=0;const histories=[];const provider={respond:async r=>{calls++;histories.push(r.messages);return{answer:{text:'Contract answer '+calls,source_ids:[record.id+'/2'],safe_status:'INFORMATION'},usage:{input_tokens:100,output_tokens:30},provider:'openai',model:live.EDHT_AI_MODEL};}};
 let last;
 for(let n=0;n<5;n++){last={...payload('Follow up '+n),conversation_id:store.id};const result=await route({env:live,payload:last,storeFactory:()=>store,providerFactory:()=>provider});assert.equal(result.body.text,'Contract answer '+(n+1));assert.equal(result.body.is_generative_ai,true);}
 assert.equal(histories[4].length,9);assert.equal(store.messages.length,10);
 const replay=await route({env:live,payload:last,storeFactory:()=>store,providerFactory:()=>provider});assert.equal(calls,5);assert.equal(replay.body.text,'Contract answer 5');
});
test('provider timeout retains unknown reservation and never falls back to fake success',async()=>{
 const store=memoryStore();const p={respond:async()=>{throw new Error('AI_PROVIDER_TIMEOUT');}};
 await assert.rejects(route({env:live,storeFactory:()=>store,providerFactory:()=>p}),/AI_PROVIDER_TIMEOUT/);assert.equal(store.settlements[0].status,'unknown');assert.equal(store.settlements[0].response,undefined);
});
test('configured pricing/model mismatch releases only pre-send reservation and prevents provider',async()=>{
 const store=memoryStore();store.reserve=async()=>({status:'reserved',model:'different',pricing_version:live.EDHT_AI_PRICING_VERSION});let called=0;
 await assert.rejects(route({env:live,storeFactory:()=>store,providerFactory:()=>{called++;}}),/AI_CONFIGURATION_INVALID/);assert.equal(called,0);assert.equal(store.settlements[0].status,'failed_before_send');
});

test('live synthetic allowlist prevents transmitting another account records',async()=>{let called=0;await assert.rejects(route({user:{id:randomUUID()},env:live,cloud:{records:async()=>{called++;return[];}}}),e=>e.status===403&&e.message==='AI_NOT_CONFIGURED');assert.equal(called,0);});
