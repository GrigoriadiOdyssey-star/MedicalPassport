import test from 'node:test';
import assert from 'node:assert/strict';
import { assistantRoute } from '../public/api/_lib/cloud-assistant.mjs';
const user={id:'11111111-1111-4111-8111-111111111111'}, cid='22222222-2222-4222-8222-222222222222';
function harness(hasOlder=false){
 const calls=[];const store={list:async id=>{calls.push(['list',id]);return[{conversation_id:cid,version:41}];},create:async()=>{calls.push(['create']);return{conversation_id:cid,version:0};},history:async id=>{calls.push(['history',id]);return{conversation_id:cid,version:41,has_older:hasOlder,messages:[{message_id:'synthetic-message',role:'assistant',text:'Saved server answer',source_records:[]}]};},delete:async id=>{calls.push(['delete',id]);return{ok:true};}};
 return{calls,run:(method,path,payload)=>assistantRoute({user,cloud:{records:async()=>{throw Error('Unexpected context transmission');}},method,path,payload,env:{EDHT_AI_MODE:'disabled',EDHT_AI_STORAGE_READY:'true'},storeFactory:()=>store,providerFactory:()=>{throw Error('Unexpected paid call');}})};
}
test('history CRUD remains available while live AI is disabled and has no billing capability',async()=>{
 const h=harness();const status=await h.run('GET','/api/assistant/status');assert.equal(status.body.mode,'disabled');assert.equal(status.body.storage_ready,true);
 assert.equal((await h.run('GET','/api/assistant/conversations')).body.conversations[0].id,cid);
 assert.equal((await h.run('POST','/api/assistant/conversations',{})).status,201);
 assert.equal((await h.run('GET','/api/assistant/conversations/'+cid)).body.messages[0].text,'Saved server answer');
 assert.deepEqual((await h.run('POST','/api/assistant/conversations/'+cid+'/delete',{})).body,{ok:true});
 assert.deepEqual(h.calls.map(x=>x[0]),['list','create','history','delete']);
});
test('history API preserves the database truncation disclosure without inventing pagination',async()=>{
 for(const value of [false,true]){const result=await harness(value).run('GET','/api/assistant/conversations/'+cid);assert.equal(result.body.has_older,value);assert.equal(result.body.messages.length,1);}
});
