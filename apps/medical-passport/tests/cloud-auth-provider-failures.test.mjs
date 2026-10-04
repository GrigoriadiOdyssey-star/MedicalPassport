import test from "node:test";
import assert from "node:assert/strict";
import handler from "../public/api/[...route].mjs";

const host="preview.example.vercel.app";
const access="synthetic-access-token-long-enough";
const refresh="synthetic-refresh-token-long-enough";
const owner="81000000-0000-4000-8000-000000000001";
async function run({method="GET",path="/api/me",fetcher,cookie="__Host-edht_access="+access},verify){
 const previous={fetch:globalThis.fetch,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_PUBLISHABLE_KEY};
 process.env.SUPABASE_URL="https://synthetic.supabase.co";
 process.env.SUPABASE_PUBLISHABLE_KEY="sb_publishable_synthetic_auth_failure";
 globalThis.fetch=fetcher;
 const headers=new Map(),res={statusCode:200,setHeader(k,v){headers.set(k.toLowerCase(),v)},getHeader(k){return headers.get(k.toLowerCase())},end(body){this.body=JSON.parse(body)}};
 try{
  await handler({method,url:path,body:method==="POST"?{}:undefined,headers:{host,origin:"https://"+host,cookie,"x-csrf-token":"synthetic-csrf"}},res);
  verify(res,headers);
 }finally{
  globalThis.fetch=previous.fetch;
  for(const [key,value] of [["SUPABASE_URL",previous.url],["SUPABASE_PUBLISHABLE_KEY",previous.key]])if(value===undefined)delete process.env[key];else process.env[key]=value;
 }
}
test("Auth provider outage remains 503 and does not clear a potentially valid session",async()=>{
 await run({fetcher:async()=>Response.json({message:"PRIVATE_PROVIDER_DETAIL"},{status:503})},(res,headers)=>{
  assert.equal(res.statusCode,503);assert.deepEqual(res.body,{error:"AUTH_PROVIDER_UNAVAILABLE"});assert.equal(headers.has("set-cookie"),false);
  assert.equal(headers.get("cache-control"),"no-store, private");
 });
});
test("refresh provider outage does not report invalid credentials or delete refresh cookie",async()=>{
 await run({cookie:"__Host-edht_refresh="+refresh,fetcher:async()=>Response.json({message:"PRIVATE_PROVIDER_DETAIL"},{status:503})},(res,headers)=>{
  assert.equal(res.statusCode,503);assert.deepEqual(res.body,{error:"AUTH_PROVIDER_UNAVAILABLE"});assert.equal(headers.has("set-cookie"),false);
 });
});
test("failed remote logout clears local cookies but never claims successful revocation",async()=>{
 await run({method:"POST",path:"/api/logout",cookie:"__Host-edht_access="+access+"; __Host-edht_csrf=synthetic-csrf",fetcher:async input=>new URL(input).pathname==="/auth/v1/user"?Response.json({id:owner,email:"synthetic@example.test"}):Response.json({message:"PRIVATE_PROVIDER_DETAIL"},{status:503})},(res,headers)=>{
  assert.equal(res.statusCode,503);assert.deepEqual(res.body,{error:"AUTH_PROVIDER_UNAVAILABLE"});
  const cookies=headers.get("set-cookie");assert.equal(cookies.length,3);for(const cookie of cookies)assert.match(cookie,/Max-Age=0/);
 });
});
test("actual expired credentials still return 401 without a provider error body",async()=>{
 await run({fetcher:async()=>Response.json({message:"PRIVATE_PROVIDER_DETAIL"},{status:401})},res=>{
  assert.equal(res.statusCode,401);assert.deepEqual(res.body,{error:"UNAUTHENTICATED"});
 });
});
