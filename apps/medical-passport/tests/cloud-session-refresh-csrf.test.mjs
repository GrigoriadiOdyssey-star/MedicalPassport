import test from "node:test";
import assert from "node:assert/strict";
import handler from "../public/api/[...route].mjs";

const uid = "92000000-0000-4000-8000-000000000001";
const host = "preview.example.vercel.app";
const csrf = "synthetic-session-csrf";
const expired = "synthetic-expired-access-token";
const fresh = "synthetic-refreshed-access-token";
const refresh = "synthetic-original-refresh-token";
const nextRefresh = "synthetic-rotated-refresh-token";
const cookieHeader = jar => Object.entries(jar).map(([k,v]) => k+"="+encodeURIComponent(v)).join("; ");
function response() {
 const headers = new Map();
 return {statusCode:200,headers,setHeader(k,v){headers.set(k.toLowerCase(),v);},
 getHeader(k){return headers.get(k.toLowerCase());},end(body){this.body=JSON.parse(body);}};
}
function acceptCookies(jar,res) {
 for(const raw of [].concat(res.headers.get("set-cookie") || [])) {
  const pair=raw.split(";")[0],at=pair.indexOf("=");
  if(raw.includes("Max-Age=0"))delete jar[pair.slice(0,at)];
  else jar[pair.slice(0,at)]=decodeURIComponent(pair.slice(at+1));
 }
}
async function request(jar,path,body,extra={}) {
 const res=response();
 await handler({method:body===undefined?"GET":"POST",url:"/api/"+path,
 headers:{host,cookie:cookieHeader(jar),...(body===undefined?{}:{origin:"https://"+host,"x-csrf-token":csrf}),...extra},body},res);
 acceptCookies(jar,res);return res;
}
async function provider(run,{denyRefresh=false}={}) {
 const saved={fetch:globalThis.fetch,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_PUBLISHABLE_KEY};
 const calls=[];
 process.env.SUPABASE_URL="https://synthetic.supabase.co";
 process.env.SUPABASE_PUBLISHABLE_KEY="sb_publishable_synthetic_session_test";
 globalThis.fetch=async(url,init={})=>{
  const u=new URL(url);calls.push({path:u.pathname,grant:u.searchParams.get("grant_type"),init});
  if(u.pathname==="/auth/v1/user")return init.headers.authorization==="Bearer "+fresh
   ?Response.json({id:uid,email:"synthetic@example.test"}):Response.json({message:"synthetic expired"},{status:401});
  if(u.pathname==="/auth/v1/token"){
   if(denyRefresh)return Response.json({message:"PRIVATE_PROVIDER_RESPONSE"},{status:400});
   return Response.json({access_token:fresh,refresh_token:nextRefresh,expires_at:Math.floor(Date.now()/1000)+3600,user:{id:uid,email:"synthetic@example.test"}});
  }
  if(u.pathname.endsWith("/edht_patient_profiles"))return Response.json([{patient_user_id:uid,display_name:"Synthetic",locale:"ru",time_zone:"UTC"}]);
  if(u.pathname.endsWith("/edht_reminder_plans"))return Response.json([]);
  if(u.pathname.endsWith("/edht_notifications_read"))return Response.json({items:[],unread:0,timezone:"UTC",offset:0});
  if(u.pathname.endsWith("/edht_notification_action"))return Response.json({ok:true});
  throw Error("Unexpected synthetic provider route: "+u.pathname);
 };
 try{await run(calls);}finally{
  globalThis.fetch=saved.fetch;
  for(const [k,v]of [["SUPABASE_URL",saved.url],["SUPABASE_PUBLISHABLE_KEY",saved.key]])if(v===undefined)delete process.env[k];else process.env[k]=v;
 }
}
for(const includeAccess of [true,false])test("session restoration keeps /me CSRF consistent with the browser cookie ("+(includeAccess?"expired access":"access cookie expired")+")",async()=>{
 await provider(async calls=>{
  const jar={"__Host-edht_refresh":refresh,"__Host-edht_csrf":csrf,...(includeAccess?{"__Host-edht_access":expired}:{})};
  const me=await request(jar,"me");
  assert.equal(me.statusCode,200);assert.equal(me.body.id,uid);
  assert.equal(me.body.csrf,jar["__Host-edht_csrf"]);
  assert.equal(jar["__Host-edht_access"],fresh);assert.equal(jar["__Host-edht_refresh"],nextRefresh);
  assert.equal(me.headers.get("cache-control"),"no-store, private");
  const action=await request(jar,"notifications/action",{action:"read_all"},{"x-csrf-token":me.body.csrf});
  assert.equal(action.statusCode,200);
  assert.equal(calls.filter(c=>c.grant==="refresh_token").length,1);
 });
});
test("background notification refresh preserves the page CSRF for a subsequent authenticated mutation",async()=>{
 await provider(async calls=>{
  const jar={"__Host-edht_access":expired,"__Host-edht_refresh":refresh,"__Host-edht_csrf":csrf};
  const notices=await request(jar,"notifications");assert.equal(notices.statusCode,200);
  const action=await request(jar,"notifications/action",{action:"read_all"});
  assert.equal(action.statusCode,200);
  assert.equal(calls.filter(c=>c.path.endsWith("/edht_notification_action")).length,1);
 });
});
test("refresh does not bypass origin, CSRF or rejected Supabase sessions",async()=>{
 await provider(async()=>{
  const jar={"__Host-edht_access":fresh,"__Host-edht_refresh":refresh,"__Host-edht_csrf":csrf};
  assert.equal((await request(jar,"notifications/action",{action:"read_all"},{"x-csrf-token":"wrong"})).statusCode,403);
  assert.equal((await request(jar,"notifications/action",{action:"read_all"},{origin:"https://other.example"})).statusCode,403);
 });
 await provider(async calls=>{
  const jar={"__Host-edht_access":expired,"__Host-edht_refresh":refresh,"__Host-edht_csrf":csrf};
  const me=await request(jar,"me");
  assert.equal(me.statusCode,401);assert.deepEqual(me.body,{error:"UNAUTHENTICATED"});assert.deepEqual(jar,{});
  assert.equal(calls.some(c=>c.path.includes("/rest/v1/")),false);
 },{denyRefresh:true});
});
test("a fresh password login still rotates CSRF and retains secure cookie attributes",async()=>{
 await provider(async()=>{
  const jar={"__Host-edht_csrf":csrf};
  const login=await request(jar,"login",{email:"synthetic@example.test",password:"synthetic-test-password"});
  assert.equal(login.statusCode,200);assert.notEqual(jar["__Host-edht_csrf"],csrf);
  const cookies=login.headers.get("set-cookie");assert.equal(cookies.length,3);
  assert.ok(cookies.every(c=>c.includes("Secure")&&c.includes("SameSite=Strict")&&c.includes("Path=/")));
  assert.ok(cookies.filter(c=>!c.startsWith("__Host-edht_csrf=")).every(c=>c.includes("HttpOnly")));
  assert.doesNotMatch(JSON.stringify(login.body),/synthetic-(refreshed|rotated)/);
 });
});
