import test from "node:test";
import assert from "node:assert/strict";
import {createHash} from "node:crypto";
import {PNG} from "pngjs";
import jsQR from "jsqr";
import {consentRoute,trustedCloudRole} from "../public/api/_lib/cloud-consent.mjs";
const A="a1000000-0000-4000-8000-000000000001";
const C="a1000000-0000-4000-8000-000000000003";
const G="a2000000-0000-4000-8000-000000000001";
const request={user:{id:A},method:"POST",path:"/api/grants",origin:"https://preview.example.vercel.app",payload:{recipient_id:C,scopes:["allergy"],duration:"once",purpose:"review"}};

test("cloud QR is actually decodable, recipient-bound, and stores only a credential hash",async()=>{
 const calls=[];
 const cloud={rpc:async(name,body)=>{calls.push({name,body});return {id:G,expires_at:"2030-01-01T00:00:00Z",token_hash:"must-not-escape"};}};
 const a=await consentRoute({...request,cloud});
 const b=await consentRoute({...request,cloud});
 assert.equal(a.status,201);
 assert.match(a.body.token,/^[-_A-Za-z0-9]{43}$/);
 assert.notEqual(a.body.token,b.body.token);
 assert.equal(a.body.link,"https://preview.example.vercel.app/#access="+a.body.token);
 const image=PNG.sync.read(Buffer.from(a.body.qr.split(",")[1],"base64"));
 const qr=jsQR(new Uint8ClampedArray(image.data),image.width,image.height);
 assert.equal(qr.data,a.body.link);
 assert.equal(calls[0].name,"edht_qr_create");
 assert.equal(calls[0].body.p_token_hash,createHash("sha256").update(a.body.token).digest("hex"));
 assert.equal(calls[0].body.p_recipient,C);
 assert.equal(calls[0].body.p_seconds,3600);
 assert.equal(calls[0].body.p_one_time,true);
 assert.ok(!JSON.stringify(calls).includes(a.body.token));
 assert.equal(a.body.token_hash,undefined);
});

test("unsupported document scopes and malformed consent fail before any database write",async()=>{
 let calls=0;const cloud={rpc:async()=>{calls++;throw Error("must-not-call");}};
 for(const payload of [
  {...request.payload,scopes:["documents"]},
  {...request.payload,scopes:["allergy","allergy"]},
  {...request.payload,scopes:["allergy"],purpose:"emergency"},
  {...request.payload,scopes:[]},
  {...request.payload,scopes:{}},
  {...request.payload,recipient_id:"not-an-id"},
  {...request.payload,duration:"forever"},
 ]) await assert.rejects(consentRoute({...request,cloud,payload}),error=>[400,409].includes(error.status));
 for(const origin of ["http://preview.example.vercel.app","https://evil.example/path","https://name:password@preview.example.vercel.app"])
  await assert.rejects(consentRoute({...request,cloud,origin}),error=>error.status===400&&error.message==="INVALID_ORIGIN");
 assert.equal(calls,0);
});

test("access uses real authorization RPC, hides denial details, and does not fake backend outages",async()=>{
 const token="S".repeat(43);let call;
 const cloud={rpc:async(name,body)=>{call={name,body};return {error:"NOT_FOUND"};}};
 await assert.rejects(consentRoute({cloud,method:"POST",path:"/api/access",payload:{token}}),error=>error.status===404&&error.message==="NOT_FOUND");
 assert.equal(call.name,"edht_qr_read");assert.equal(call.body.p_token_hash,createHash("sha256").update(token).digest("hex"));
 await assert.rejects(consentRoute({cloud,method:"POST",path:"/api/access/info",payload:{token:"invalid"}}),error=>error.status===404);
 await assert.rejects(consentRoute({...request,cloud:{rpc:async()=>{throw Error("CLOUD_BACKEND_UNAVAILABLE");}}}),/CLOUD_BACKEND_UNAVAILABLE/);
 await assert.rejects(consentRoute({cloud:{rpc:async()=>({})},method:"POST",path:"/api/access",payload:{token}}),/CLOUD_RESPONSE_INVALID/);
});

test("trusted doctor role is backed by exact verified table row, never client metadata",async()=>{
 let query;
 const cloud={rows:async(table,q)=>{assert.equal(table,"clinicians");query=q;return [];}};
 assert.equal(await trustedCloudRole(cloud,{id:A,user_metadata:{role:"doctor",verified_at:"2030"}}),"patient");
 assert.equal(query.user_id,"eq."+A);assert.equal(query.verified_at,"not.is.null");
 assert.equal(await trustedCloudRole({rows:async()=>[{user_id:C,verified_at:"2026-01-01"}]},{id:C}),"doctor");
 await assert.rejects(trustedCloudRole({rows:async()=>[{user_id:C,verified_at:"2026-01-01"}]},{id:A}),/CLOUD_RESPONSE_INVALID/);
});

test("one-read used state and owner grant list preserve real contract shapes",async()=>{
 const info=await consentRoute({cloud:{rpc:async()=>({status:"ACCESS_USED",expires_at:"2030-01-01T00:00:00Z",scopes:["allergy"],patient_label:null})},method:"POST",path:"/api/access/info",payload:{token:"S".repeat(43)}});
 assert.equal(info.body.status,"ACCESS_USED");assert.equal(info.body.patient_label,null);
 const grants=await consentRoute({cloud:{rpc:async(name)=>{assert.equal(name,"edht_qr_grants");return [{id:G,one_time:true,expires_at:"2030-01-01T00:00:00Z",used_at:"2026-01-01T00:00:00Z"}];}},method:"GET",path:"/api/grants",params:new URLSearchParams("status=used")});
 assert.equal(grants.body[0].one_time,1);assert.equal(typeof grants.body[0].used_at,"number");
});
