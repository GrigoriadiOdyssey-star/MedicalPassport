import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
import { createAlpha4UI } from '../public/alpha4-ui.js';
import { createProductUI } from '../public/product-ui.js';
import { createPharmacyUI } from '../public/pharmacy-ui.js';
import { translate as tr } from '../public/i18n.js';
import * as ui from '../public/ui.js';
const source=fs.readFileSync(new URL('../public/main.js',import.meta.url),'utf8').replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\r?\n/gm,'');
const longId='11111111-1111-4111-8111-111111111111',shortId='22222222-2222-4222-8222-222222222222',newId='33333333-3333-4333-8333-333333333333';
async function waitFor(check){for(let n=0;n<100;n++){if(check())return;await new Promise(resolve=>setTimeout(resolve,5));}assert.fail('History UI did not reach the expected state');}
async function setup(t){
 const dom=new JSDOM('<a class="skip" href="#main"></a><div id="app"></div><dialog id="dialog"></dialog><div id="toast"></div>',{url:'https://edht-synthetic.example.test/#/assistant?conversation='+longId,runScripts:'outside-only'});
 const w=dom.window,calls=[];
 const threads=new Map([[longId,{version:42,has_older:true,messages:Array.from({length:40},(_,n)=>({role:n%2?'assistant':'user',text:'Private synthetic saved message '+n}))}],[shortId,{version:2,has_older:false,messages:[{role:'user',text:'Short question'},{role:'assistant',text:'Short saved answer'}]}]]);
 w.localStorage.setItem('edht-language','ru');
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
 w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 w.__deps={tr,createAlpha4UI,createProductUI,createPharmacyUI,...ui};
 w.fetch=async(url,options={})=>{
  const path=String(url).split('?')[0],method=options.method||'GET';calls.push({path,method,headers:options.headers});let value;
  if(path==='/api/me')value={id:'synthetic-owner',name:'Synthetic owner',role:'patient',auth_provider:'supabase',csrf:'synthetic-csrf'};
  else if(path==='/api/assistant/status')value={mode:'disabled',storage_ready:true};
  else if(path==='/api/assistant/conversations'&&method==='GET')value={conversations:[...threads].map(([id,h])=>({id,version:h.version,created_at:1791300000000}))};
  else if(path==='/api/assistant/conversations'&&method==='POST'){threads.set(newId,{version:0,has_older:false,messages:[]});value={id:newId,version:0};}
  else if(/^\/api\/assistant\/conversations\/[^/]+$/.test(path)){const id=path.split('/')[4];assert.ok(threads.has(id));value={id,...structuredClone(threads.get(id))};}
  else if(path==='/api/notifications')value={items:[],unread:0};
  else if(path==='/api/logout')value={ok:true};
  else throw Error('Unexpected history UI request: '+method+' '+path);
  return{ok:true,status:200,json:async()=>value};
 };
 w.eval('const {tr,createAlpha4UI,createProductUI,createPharmacyUI,escape:e,screens,route,grantStatus,sourceStatus,errorMessage,groupTimeline}=window.__deps;\n'+source);
 t.after(()=>w.close());
 await waitFor(()=>w.document.querySelector('[data-assistant-history-limit]'));
 return{w,calls,select(id){const select=w.document.querySelector('[data-assistant-conversation]');select.value=id;select.dispatchEvent(new w.Event('change',{bubbles:true}));}};
}
test('disabled AI still restores history and discloses truncation only for the selected conversation',async t=>{
 const {w,calls,select}=await setup(t);
 assert.equal(w.document.querySelectorAll('.message').length,40);
 assert.match(w.document.querySelector('[data-assistant-history-limit]').textContent,/последние 40 сообщений/);
 assert.equal(w.document.querySelector('#chat-form button').disabled,true);
 select(shortId);
 await waitFor(()=>w.location.hash.includes(shortId)&&w.document.querySelector('[data-assistant-conversation]').disabled===false);
 assert.equal(w.document.querySelector('[data-assistant-history-limit]'),null);
 assert.match(w.document.querySelector('#main').textContent,/Short saved answer/);
 select(longId);
 await waitFor(()=>w.location.hash.includes(longId)&&w.document.querySelector('[data-assistant-conversation]').disabled===false);
 assert.ok(w.document.querySelector('[data-assistant-history-limit]'));
 w.document.querySelector('[data-action="assistant-new"]').click();
 await waitFor(()=>w.location.hash.includes(newId)&&w.document.querySelector('[data-assistant-conversation]').disabled===false);
 assert.equal(w.document.querySelector('[data-assistant-history-limit]'),null);
 assert.equal(w.document.querySelector('.message'),null);
 assert.equal(calls.filter(c=>c.path==='/api/assistant').length,0);
 assert.equal(calls.filter(c=>c.path==='/api/assistant/conversations'&&c.method==='POST').length,1);
});
test('logout clears the history truncation notice and private saved messages',async t=>{
 const {w,calls}=await setup(t);
 w.document.querySelector('[data-action="logout"]').click();
 w.document.querySelector('#confirm-action').click();
 await waitFor(()=>w.document.querySelector('#auth-form'));
 assert.equal(w.document.querySelector('[data-assistant-history-limit]'),null);
 assert.equal(w.document.querySelector('.message'),null);
 assert.doesNotMatch(w.document.body.textContent,/Private synthetic saved message/);
 const logout=calls.find(c=>c.path==='/api/logout');
 assert.equal(logout.method,'POST');assert.equal(logout.headers['x-csrf-token'],'synthetic-csrf');
 assert.equal(calls.filter(c=>c.path==='/api/assistant').length,0);
});
