import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';
import {createAlpha4UI} from '../public/alpha4-ui.js';
import {createProductUI} from '../public/product-ui.js';
import {createPharmacyUI} from '../public/pharmacy-ui.js';
import {createNutritionUI} from '../public/nutrition-ui.js';
import {nutritionView} from '../public/nutrition-model.mjs';
import {translate as tr} from '../public/i18n.js';
import * as ui from '../public/ui.js';
const source=fs.readFileSync(new URL('../public/main.js',import.meta.url),'utf8').replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\r?\n/gm,'');
async function waitFor(check){for(let n=0;n<150;n++){if(check())return;await new Promise(r=>setTimeout(r,5));}assert.fail('Nutrition UI did not settle');}
test('cloud nutrition navigation opens the capture form and saves through the existing observation API',async t=>{
 const dom=new JSDOM('<a class="skip" href="#main"></a><div id="app"></div><dialog id="dialog"></dialog><div id="toast"></div>',{url:'https://edht-synthetic.example.test/#/nutrition',runScripts:'outside-only'});t.after(()=>dom.window.close());
 const w=dom.window,records=[],calls=[];w.localStorage.setItem('edht-language','ru');
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 w.__deps={tr,createAlpha4UI,createProductUI,createPharmacyUI,createNutritionUI,...ui};
 w.fetch=async(url,options={})=>{
  const path=String(url).split('?')[0],method=options.method??'GET';calls.push({path,method});let value;
  if(path==='/api/me')value={id:'11111111-1111-4111-8111-111111111111',role:'patient',name:'EDHT synthetic',auth_provider:'supabase',csrf:'synthetic-csrf'};
  else if(path==='/api/views/nutrition')value=nutritionView(records);
  else if(path==='/api/notifications')value={items:[],unread:0};
  else if(path==='/api/records'&&method==='POST'){
   const payload=JSON.parse(options.body);assert.equal(payload.kind,'observation');assert.equal(payload.body.panel,'nutrition_anthropometry');assert.equal(payload.body.unit,'kg');assert.equal(payload.body.source,undefined);assert.equal(options.headers['x-csrf-token'],'synthetic-csrf');
   value={id:'22222222-2222-4222-8222-222222222222',version:1,kind:payload.kind,body:payload.body,source:'patient_reported',created_at:Date.now(),archived:0};records.push(value);
  }else throw Error('Unexpected nutrition request '+method+' '+path);
  return{ok:true,status:200,json:async()=>value};
 };
 w.eval('const {tr,createAlpha4UI,createProductUI,createPharmacyUI,createNutritionUI,escape:e,screens,route,grantStatus,sourceStatus,errorMessage,groupTimeline}=window.__deps;\n'+source);
 await waitFor(()=>w.document.querySelector('[data-action="nutrition-add"]'));
 assert.match(w.document.querySelector('#main').textContent,/Измерений пока нет/);
 w.document.querySelector('[data-action="nutrition-add"]').click();
 const form=w.document.querySelector('#nutrition-form');assert.ok(form);
 form.querySelector('[name="value"]').value='72.4';
 form.querySelector('[name="observed_at"]').value='2026-10-12T09:00:00Z';
 form.dispatchEvent(new w.SubmitEvent('submit',{bubbles:true,cancelable:true,submitter:form.querySelector('[type="submit"]')}));
 await waitFor(()=>w.document.querySelector('[data-action="nutrition-edit"]'));
 assert.match(w.document.querySelector('#main').textContent,/72.4/);
 assert.match(w.document.querySelector('#main').textContent,/Не подтверждено врачом/);
 assert.equal(calls.filter(c=>c.path==='/api/records'&&c.method==='POST').length,1);
});
