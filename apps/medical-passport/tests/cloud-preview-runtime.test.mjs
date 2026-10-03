import test from "node:test";
import assert from "node:assert/strict";
import {JSDOM} from "jsdom";
import handler from "../public/api/[...route].mjs";
import gateway from "../public/api/gateway.mjs";
import {CloudRuntimeRepository} from "../public/api/_lib/cloud-runtime.mjs";
import {createProductUI} from "../public/product-ui.js";
const A="80000000-0000-4000-8000-000000000001";
const B="80000000-0000-4000-8000-000000000002";
const profile={patient_user_id:A,display_name:"Synthetic A",locale:"ru",time_zone:"UTC",birth_date:null,country:""};
function response(){const headers=new Map();return {statusCode:200,headers,setHeader(k,v){headers.set(k.toLowerCase(),v)},getHeader(k){return headers.get(k.toLowerCase())},end(body){this.body=JSON.parse(body)}};}
const token="test."+Buffer.from(JSON.stringify({session_id:A})).toString("base64url")+".synthetic-signature";
const headers={host:"preview.example.vercel.app",cookie:"__Host-edht_access="+token+"; __Host-edht_csrf=synthetic-csrf"};
function reply(url){
 const path=new URL(url).pathname;
 if(path==="/auth/v1/user")return {id:A,email:"a@example.test"};
 if(path.endsWith("/edht_patient_profiles"))return [profile];
 if(path.endsWith("/edht_notifications_read"))return {items:[],unread:0,timezone:"UTC",offset:0};
 if(path.endsWith("/edht_own_sessions"))return [{id:A,expires_at:null,created_at:"2026-01-01T00:00:00Z"}];
 return [];
}
async function withCloud(run,override){
 const old={fetch:globalThis.fetch,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_PUBLISHABLE_KEY};
 const calls=[];
 process.env.SUPABASE_URL="https://synthetic.supabase.co";
 process.env.SUPABASE_PUBLISHABLE_KEY="sb_publishable_synthetic_contract_test";
 globalThis.fetch=async(url,init)=>{calls.push({url:new URL(url),init});return override?.(url,init)??Response.json(reply(url));};
 try{await run(calls);}finally{globalThis.fetch=old.fetch;if(old.url===undefined)delete process.env.SUPABASE_URL;else process.env.SUPABASE_URL=old.url;if(old.key===undefined)delete process.env.SUPABASE_PUBLISHABLE_KEY;else process.env.SUPABASE_PUBLISHABLE_KEY=old.key;}
}
test("authenticated empty clinical flows execute Supabase reads and preserve API shapes",async()=>{
 await withCloud(async calls=>{
  for(const path of ["me","profile","views/home","views/passport","views/records","views/medication","views/allergy","views/condition","views/observation","views/vaccination","views/emergency","views/documents","notifications","doctors","grants","audit","sessions","notification-settings","reminders"]){
   const res=response();await handler({method:"GET",url:"/api/"+path,headers},res);
   assert.equal(res.statusCode,200,path);assert.equal(res.headers.get("cache-control"),"no-store, private");
   if(path==="notifications")assert.deepEqual(res.body,{items:[],unread:0,timezone:"UTC",offset:0});
   if(path==="views/home"){assert.equal(res.body.document_count,0);assert.equal(res.body.emergency,null);assert.equal(res.body.counts.length,6);}
  }
  assert.ok(calls.some(c=>c.url.pathname.endsWith("/edht_current_clinical_records")));
  assert.ok(calls.some(c=>c.url.pathname.endsWith("/edht_notifications_read")));
  assert.ok(calls.some(c=>c.url.pathname.endsWith("/edht_documents")));
  for(const c of calls.filter(c=>/edht_(current_clinical_records|documents|patient_grants|reminder_plans)$/.test(c.url.pathname)))assert.equal(c.url.searchParams.get("patient_user_id"),"eq."+A);
 });
});
test("database errors are sanitized and never returned as successful empty clinical states",async()=>{
 await withCloud(async()=>{
  const res=response();await handler({method:"GET",url:"/api/views/home",headers},res);
  assert.equal(res.statusCode,502);assert.deepEqual(res.body,{error:"CLOUD_BACKEND_REJECTED"});
 },url=>new URL(url).pathname.endsWith("/edht_current_clinical_records")?Response.json({message:"PRIVATE synthetic response must never escape",access_token:"not-real"},{status:500}):undefined);
});
test("notifications require login; mutations require same origin and CSRF",async()=>{
 await withCloud(async()=>{
  let res=response();await handler({method:"GET",url:"/api/notifications",headers:{host:headers.host}},res);assert.equal(res.statusCode,401);
  res=response();await handler({method:"POST",url:"/api/notifications/action",headers:{...headers,origin:"https://"+headers.host},body:{action:"read_all"}},res);assert.equal(res.statusCode,403);
  res=response();await handler({method:"POST",url:"/api/notifications/action",headers:{...headers,origin:"https://evil.example","x-csrf-token":"synthetic-csrf"},body:{action:"read_all"}},res);assert.equal(res.statusCode,403);
 });
});
test("foreign record IDs yield 404 even with a valid patient session",async()=>{
 await withCloud(async()=>{const res=response();await handler({method:"GET",url:"/api/record/"+B,headers},res);assert.equal(res.statusCode,404);assert.deepEqual(res.body,{error:"NOT_FOUND"});});
});
test("gateway preserves the nested route and rejects malformed targets",async()=>{
 await withCloud(async()=>{
  let res=response();await gateway({method:"GET",url:"/api/gateway?__edht_route=views/passport&offset=0",headers},res);assert.equal(res.statusCode,200);assert.equal(res.body.profile.name,"Synthetic A");
  res=response();await gateway({method:"GET",url:"/api/gateway?__edht_route=//evil.example",headers},res);assert.equal(res.statusCode,400);
 });
});
test("notification polling pauses on error, avoids overlap, and resumes after explicit successful refresh",async()=>{
 const dom=new JSDOM('<span data-unread></span>',{pretendToBeVisual:true});
 let calls=0,fail=true;const state={me:{id:A,role:"patient"},locale:"ru"};
 const ui=createProductUI({document:dom.window.document,window:dom.window,get:()=>state,api:async()=>{calls++;if(fail)throw Error("CLOUD_BACKEND_UNAVAILABLE");return {items:[],unread:0};}});
 await assert.rejects(ui.poll(),/CLOUD_BACKEND_UNAVAILABLE/);
 for(let i=0;i<5;i++)await ui.poll();
 assert.equal(calls,1);assert.equal(ui.isPollingPaused(),true);
 fail=false;await ui.enrich("assistant",{});await ui.poll();assert.equal(calls,3);assert.equal(ui.isPollingPaused(),false);
 dom.window.close();
});
test("malformed provider lists fail closed instead of silently returning []",async()=>{
 const repo=new CloudRuntimeRepository({supabaseUrl:"https://synthetic.supabase.co",publishableKey:"sb_publishable_synthetic_contract_test",accessToken:token,fetchImpl:async()=>Response.json({data:[]})});
 await assert.rejects(repo.records(A),/CLOUD_RESPONSE_INVALID/);
 await assert.rejects(repo.documents(A),/CLOUD_RESPONSE_INVALID/);
});
