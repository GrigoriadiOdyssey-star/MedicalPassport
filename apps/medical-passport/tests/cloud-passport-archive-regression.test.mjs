import test from "node:test";
import assert from "node:assert/strict";
import handler from "../public/api/[...route].mjs";
const owner="81000000-0000-4000-8000-000000000001";
const active="81000000-0000-4000-8000-000000000002";
const archived="81000000-0000-4000-8000-000000000003";
const host="preview.example.vercel.app";
function response(){const headers=new Map();return {statusCode:200,headers,setHeader(k,v){headers.set(k.toLowerCase(),v)},getHeader(k){return headers.get(k.toLowerCase())},end(body){this.body=JSON.parse(body);}};}
async function exercise(rows,run,{error=false}={}){
 const previous={fetch:globalThis.fetch,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_PUBLISHABLE_KEY};const calls=[];
 process.env.SUPABASE_URL="https://synthetic.supabase.co";process.env.SUPABASE_PUBLISHABLE_KEY="sb_publishable_synthetic_passport_test";
 globalThis.fetch=async(input)=>{
  const url=new URL(input);calls.push(url);
  if(url.pathname==="/auth/v1/user")return Response.json({id:owner,email:"synthetic@example.test"});
  if(url.pathname.endsWith("/edht_current_clinical_records"))return error?Response.json({message:"PRIVATE_DATABASE_DETAIL"},{status:500}):Response.json(rows);
  return Response.json([]);
 };
 try{
  const res=response();await handler({method:"GET",url:"/api/passport",headers:{host,cookie:"__Host-edht_access=synthetic-access-token-long-enough"}},res);
  await run(res,calls);
 }finally{globalThis.fetch=previous.fetch;for(const [name,value] of [["SUPABASE_URL",previous.url],["SUPABASE_PUBLISHABLE_KEY",previous.key]]){if(value===undefined)delete process.env[name];else process.env[name]=value;}}
}
const row=(id,isArchived)=>({record_id:id,version:2,kind:"allergy",body:{name:"Synthetic fixture"},source:"patient_reported",created_at:"2026-10-03T00:00:00Z",archived:isArchived});
test("cloud passport excludes archived revisions while retaining active records and owner-scoped reads",async()=>{
 await exercise([row(active,false),row(archived,true)],(res,calls)=>{
  assert.equal(res.statusCode,200);assert.deepEqual(res.body.records.map(r=>r.id),[active]);assert.equal(res.body.records[0].version,2);
  assert.deepEqual(res.body.documents,[]);assert.equal(res.headers.get("cache-control"),"no-store, private");
  const reads=calls.filter(u=>/edht_(current_clinical_records|documents)$/.test(u.pathname));assert.equal(reads.length,2);
  for(const u of reads)assert.equal(u.searchParams.get("patient_user_id"),"eq."+owner);
 });
});
test("passport with only archived records has a real successful empty state",async()=>{
 await exercise([row(archived,true)],res=>{assert.equal(res.statusCode,200);assert.deepEqual(res.body,{records:[],documents:[]});});
});
test("passport database failure remains an error and never masquerades as empty data",async()=>{
 await exercise([],res=>{assert.equal(res.statusCode,502);assert.deepEqual(res.body,{error:"CLOUD_BACKEND_REJECTED"});assert.ok(!JSON.stringify(res.body).includes("PRIVATE_DATABASE_DETAIL"));},{error:true});
});
