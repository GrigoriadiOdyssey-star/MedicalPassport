import test from 'node:test';
import assert from 'node:assert/strict';
import { OpenAIResponses } from '../public/api/_lib/openai-responses.mjs';
const request={model:'synthetic-model',instructions:'Synthetic instructions',messages:[{role:'user',text:'Synthetic question'}],context:{records:[]}};
function failingBody(error){return new OpenAIResponses({apiKey:'synthetic-credential-never-sent',fetchImpl:async()=>({ok:true,body:{async *[Symbol.asyncIterator](){yield Buffer.from('{');throw error;}}})});}
test('body timeout after successful headers preserves the provider timeout code',async()=>{
 for(const name of ['TimeoutError','AbortError'])await assert.rejects(failingBody(new DOMException('Synthetic body abort',name)).respond(request),e=>e.message==='AI_PROVIDER_TIMEOUT'&&e.status===503);
});
test('ordinary body parse or stream failures remain invalid responses',async()=>{
 await assert.rejects(failingBody(new Error('Synthetic transport body error')).respond(request),e=>e.message==='AI_RESPONSE_INVALID'&&e.status===502);
});
