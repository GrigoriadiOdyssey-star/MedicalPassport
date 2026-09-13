const fs=require('node:fs');
const assert=require('node:assert/strict');
const api=JSON.parse(fs.readFileSync(require('node:path').join(__dirname, '../specs/openapi.json'),'utf8'));
const resolve=r=>r.slice(2).split('/').reduce((o,k)=>o[k.replace(/~1/g,'/').replace(/~0/g,'~')],api);
let refs=0,operations=0,examples=0,negative=0;
function walk(v){if(!v||typeof v!=='object')return;if(v.$ref){assert(v.$ref.startsWith('#/'),'Only internal references');assert(resolve(v.$ref),'Broken ref '+v.$ref);refs++;}for(const x of Object.values(v))walk(x);}
walk(api);
const ids=new Set();
for(const [url,path] of Object.entries(api.paths))for(const [method,op] of Object.entries(path)){
 operations++;assert(!ids.has(op.operationId));ids.add(op.operationId);
 const ps=(op.parameters||[]).map(p=>p.$ref?resolve(p.$ref):p);
 const expected=[...url.matchAll(/\{([^}]+)\}/g)].map(m=>m[1]);
 assert.deepEqual(ps.filter(p=>p.in==='path').map(p=>p.name).sort(),expected.sort());
 for(const p of ps.filter(p=>p.in==='path'))assert.equal(p.required,true);
 if(url==='/qr-resolve')assert.deepEqual(op.security,[]);else assert.deepEqual(op.security||api.security,[{OwnerAccessToken:[]}]);
 assert(!/token|secret/.test(url));
 assert(Object.keys(op.responses).some(s=>/^2\d\d$/.test(s)));
 for(const response of Object.values(op.responses)){
  const r=response.$ref?resolve(response.$ref):response;
  assert(r.headers['Cache-Control']);
  const h=r.headers['Cache-Control'];
  assert.equal((h.$ref?resolve(h.$ref):h).schema.const,'no-store');
 }
 if(['put','delete'].includes(method))assert(ps.some(p=>p.name==='If-Match'));
}
function validate(s,v,loc='$'){
 if(s.$ref)return validate(resolve(s.$ref),v,loc);
 if(s.anyOf)assert(s.anyOf.some(x=>{try{validate(x,v,loc);return true}catch{return false}}),loc+' anyOf');
 if(s.allOf)for(const x of s.allOf)validate(x,v,loc);
 if(s.if){let passed=true;try{validate(s.if,v,loc)}catch{passed=false}if(passed&&s.then)validate(s.then,v,loc);if(!passed&&s.else)validate(s.else,v,loc);}
 if(s.not){let passed=true;try{validate(s.not,v,loc)}catch{passed=false}assert(!passed,loc+' not');}
 if(s.const!==undefined)assert.deepEqual(v,s.const,loc+' const');
 if(s.enum)assert(s.enum.includes(v),loc+' enum');
 if(s.type){const ok=s.type==='null'?v===null:s.type==='array'?Array.isArray(v):s.type==='object'?v!==null&&typeof v==='object'&&!Array.isArray(v):s.type==='integer'?Number.isInteger(v):typeof v===s.type;assert(ok,loc+' type '+s.type);}
 if(v!==null&&typeof v==='object'&&!Array.isArray(v)){
  for(const r of s.required||[])assert(Object.hasOwn(v,r),loc+' required '+r);
  for(const [k,x] of Object.entries(v)){
   if(s.properties&&Object.hasOwn(s.properties,k))validate(s.properties[k],x,loc+'.'+k);
   else if(s.additionalProperties===false)assert.fail(loc+' additional '+k);
  }
 }
 if(Array.isArray(v)){
  if(s.minItems!==undefined)assert(v.length>=s.minItems,loc+' minItems');
  if(s.maxItems!==undefined)assert(v.length<=s.maxItems,loc+' maxItems');
  if(s.uniqueItems)assert.equal(new Set(v.map(x=>JSON.stringify(x))).size,v.length,loc+' uniqueItems');
  if(s.items)for(const x of v)validate(s.items,x,loc+'[]');
  if(s.contains)assert(v.some(x=>{try{validate(s.contains,x,loc);return true}catch{return false}}),loc+' contains');
 }
 if(typeof v==='string'){
  if(s.minLength!==undefined)assert(v.length>=s.minLength,loc+' minLength');
  if(s.maxLength!==undefined)assert(v.length<=s.maxLength,loc+' maxLength');
  if(s.pattern)assert(new RegExp(s.pattern).test(v),loc+' pattern');
  if(s.format==='uuid')assert(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v),loc+' uuid');
  if(s.format==='date-time')assert(!Number.isNaN(Date.parse(v))&&v.includes('T'),loc+' date-time');
  if(s.format==='date')assert(/^\d{4}-\d{2}-\d{2}$/.test(v)&&new Date(v).toISOString().slice(0,10)===v,loc+' date');
 }
 if(typeof v==='number'){if(s.minimum!==undefined)assert(v>=s.minimum);if(s.maximum!==undefined)assert(v<=s.maximum);}
}
for(const [name,s] of Object.entries(api.components.schemas))for(const x of s.examples||[]){validate(s,x,name);examples++;}
const schema=name=>api.components.schemas[name];
const reject=(name,v)=>{assert.throws(()=>validate(schema(name),v),name+' accepted invalid case');negative++;};
const profile=schema('ProfileInput').examples[0];
reject('ProfileInput',{...profile,user_id:'00000000-0000-4000-8000-000000000001'});
reject('ProfileInput',{...profile,blood_group:'A0'});
reject('ProfileInput',{...profile,allergy_status:'safe'});
reject('ProfileInput',{...profile,display_name:''});
reject('ConsentInput',{...schema('ConsentInput').examples[0],scopes:['documents']});
reject('ConsentInput',{...schema('ConsentInput').examples[0],scopes:['allergies','allergies']});
reject('ConsentInput',{...schema('ConsentInput').examples[0],expires_in_seconds:86401});
reject('QrResolveInput',{token:'short'});
reject('DeletionInput',{confirm:false});
reject('SharedPassport',{snapshot_at:'2026-09-13T00:00:00Z',scopes:['profile']});
reject('SharedPassport',{snapshot_at:'2026-09-13T00:00:00Z',scopes:['allergies'],allergies:[],profile:{...profile,provenance:'self_reported'}});
reject('SharedAllergy',{...schema('AllergyInput').examples[0],clinical_status:'inactive',provenance:'self_reported'});
reject('SharedMedicine',{...schema('MedicineInput').examples[0],status:'stopped',provenance:'self_reported'});
console.log(JSON.stringify({status:'passed',scope:'Targeted contract checks using a limited schema evaluator; not full OpenAPI validation or runtime testing',paths:Object.keys(api.paths).length,operations,schemas:Object.keys(api.components.schemas).length,refs,positive_examples:examples,negative_cases:negative}));
