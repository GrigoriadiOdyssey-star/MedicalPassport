import test from "node:test";
import assert from "node:assert/strict";
import {careRoute} from "../public/api/_lib/cloud-care.mjs";
import handler from "../public/api/[...route].mjs";
const id="84000000-0000-4000-8000-000000000001";
const input={provider:" Synthetic provider ",at:"2030-01-01T10:00:00Z",status:"planned"};
test("care empty states require completed database reads; malformed responses fail closed",async()=>{
 const calls=[];const cloud={rpc:async(name,p)=>{calls.push([name,p]);return p.p_kind==="appointments"?[]:{context:{},version:0};}};
 assert.deepEqual((await careRoute({cloud,user:{id},method:"GET",path:"/api/appointments"})).body,[]);
 const context=await careRoute({cloud,user:{id},method:"GET",path:"/api/guidelines/context"});
 assert.equal(context.body.version,0);assert.equal(context.body.registry.status,"BLOCKED_EXTERNAL");
 assert.equal(calls.length,2);
 await assert.rejects(careRoute({cloud:{rpc:async()=>null},method:"GET",path:"/api/appointments"}),/CLOUD_RESPONSE_INVALID/);
 await assert.rejects(careRoute({cloud:{rpc:async()=>[]},method:"GET",path:"/api/guidelines/context"}),/CLOUD_RESPONSE_INVALID/);
 await assert.rejects(careRoute({cloud:{rpc:async()=>{throw Error("CLOUD_BACKEND_UNAVAILABLE");}},method:"GET",path:"/api/appointments"}),/CLOUD_BACKEND_UNAVAILABLE/);
});
test("appointment writes keep patient provenance and reject malformed identity/version",async()=>{
 let captured;const cloud={rpc:async(name,p)=>{captured={name,p};return {id,version:1};}};
 await careRoute({cloud,user:{id},method:"POST",path:"/api/appointments",payload:{...input,patient_user_id:"foreign",source:"verified_clinician"}});
 assert.equal(captured.name,"edht_save_appointment");assert.equal(captured.p.p_body.provider,"Synthetic provider");
 assert.equal(captured.p.p_body.source,"PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED");assert.equal(captured.p.p_body.patient_user_id,undefined);
 for(const payload of [{...input,id:"not-a-uuid",version:1},{...input,id,version:0},{...input,at:"invalid"},{...input,status:"confirmed_by_clinic"}])
  await assert.rejects(careRoute({cloud,method:"POST",path:"/api/appointments",payload}),e=>e.status===400);
});
test("context keeps four independent unknowns and never manufactures verification",async()=>{
 let captured;const cloud={rpc:async(name,p)=>{captured=p;return {version:1};}};
 await careRoute({cloud,method:"POST",path:"/api/guidelines/context",payload:{version:0,reason:"Synthetic source",patient_home:"GR",verification:"VERIFIED"}});
 assert.equal(captured.p_context.patient_home.country,"GR");
 for(const key of ["patient_current","treating_doctor","care_delivery"])assert.equal(captured.p_context[key].country,null);
 for(const key of ["patient_home","patient_current","treating_doctor","care_delivery"])assert.equal(captured.p_context[key].verification,"UNVERIFIED");
});
function response(){const h=new Map();return {statusCode:200,headers:h,setHeader(k,v){h.set(k.toLowerCase(),v);},getHeader(k){return h.get(k.toLowerCase());},end(v){this.body=JSON.parse(v);}};}
async function provider(run,reject=false){
 const saved={fetch:globalThis.fetch,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_PUBLISHABLE_KEY};
 process.env.SUPABASE_URL="https://synthetic.supabase.co";process.env.SUPABASE_PUBLISHABLE_KEY="sb_publishable_synthetic_care_test";
 globalThis.fetch=async(url)=>{
  const p=new URL(url).pathname;
  if(p==="/auth/v1/user")return Response.json({id,email:"synthetic@example.test"});
  if(reject)return Response.json({message:"PRIVATE_PROVIDER_BODY"},{status:500});
  return Response.json([]);
 };
 try{await run();}finally{globalThis.fetch=saved.fetch;for(const [k,v]of [["SUPABASE_URL",saved.url],["SUPABASE_PUBLISHABLE_KEY",saved.key]])if(v===undefined)delete process.env[k];else process.env[k]=v;}
}
const headers={host:"preview.example.vercel.app",cookie:"__Host-edht_access=synthetic-care-access-token; __Host-edht_csrf=synthetic-csrf"};
test("care routes inherit authentication, origin, CSRF and private no-store",async()=>provider(async()=>{
 let r=response();await handler({method:"GET",url:"/api/appointments",headers:{host:headers.host}},r);assert.equal(r.statusCode,401);
 r=response();await handler({method:"GET",url:"/api/appointments",headers},r);assert.equal(r.statusCode,200);assert.deepEqual(r.body,[]);assert.equal(r.headers.get("cache-control"),"no-store, private");
 for(const path of ["/api/appointments","/api/guidelines/context"]){r=response();await handler({method:"POST",url:path,headers:{...headers,origin:"https://"+headers.host},body:input},r);assert.equal(r.statusCode,403);}
}));
test("care database failure is a sanitized error, never an empty successful list",async()=>provider(async()=>{
 const r=response();await handler({method:"GET",url:"/api/appointments",headers},r);assert.equal(r.statusCode,502);assert.deepEqual(r.body,{error:"CLOUD_BACKEND_REJECTED"});
},true));
