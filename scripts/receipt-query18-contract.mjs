// Synthetic contract oracle only. No authentication, persistence, HTTP or cryptographic verification.
import {checkEnvelope} from './security-envelope-check.mjs';
const object=properties=>({type:'object',additionalProperties:false,required:Object.keys(properties),properties});
const id={type:'string',minLength:1,maxLength:128,pattern:'^[A-Za-z0-9_-]+$'};
const integer={type:'integer',minimum:0,maximum:Number.MAX_SAFE_INTEGER};
const nullableId={oneOf:[id,{type:'null'}]};
export const itemSchema=object({receipt_reference:id,receipt_sequence:{...integer,minimum:1},occurred_at_ms:integer,committed_at_ms:integer,action:{enum:['GRANT_CREATED','GRANT_REVOKED','GRANT_EXPIRED','ALLERGY_VIEW_ATTEMPT','RECEIPTS_VIEW']},outcome:{enum:['COMMITTED','DENIED','UNAVAILABLE']},actor_role:{enum:['PATIENT','CLINICIAN','SERVICE','WITHHELD']},actor_reference:nullableId});
export const errorSchema=object({kind:{const:'receipt_query_error'},schema_version:{const:1},code:{enum:['INVALID_REQUEST','INVALID_CURSOR','UNAUTHENTICATED','NOT_FOUND','UNAVAILABLE','RATE_LIMITED']},request_reference:id});
const headerSchema=object({kind:{const:'receipt_query_page'},schema_version:{const:1},grant_reference:id,snapshot_sequence:integer,next_cursor:{oneOf:[{type:'string',minLength:32,maxLength:256,pattern:'^[A-Za-z0-9_-]+$'},{type:'null'}]}});
export const schema={$schema:'https://json-schema.org/draft/2020-12/schema',$id:'urn:edht:audit-receipt-query:1',title:'Patient receipt query syntax; authoritative bindings and paging need runtime evidence',oneOf:[{...headerSchema,required:[...headerSchema.required,'items'],properties:{...headerSchema.properties,items:{type:'array',maxItems:100,items:itemSchema}}},errorSchema]};
export function validPage(value){
 if(!value||!Array.isArray(value.items)||value.items.length>100)return false;
 const {items,...head}=value;if(!checkEnvelope(headerSchema,head))return false;
 if(items.length===0&&head.next_cursor!==null)return false;
 let last=0;const ids=new Set();
 for(const x of items){if(!checkEnvelope(itemSchema,x)||x.receipt_sequence<=last||x.receipt_sequence>head.snapshot_sequence||ids.has(x.receipt_reference))return false;
  if(x.actor_role==='WITHHELD'&&x.actor_reference!==null)return false;
  if(x.action.startsWith('GRANT_')&&x.outcome!=='COMMITTED')return false;
  last=x.receipt_sequence;ids.add(x.receipt_reference);
 }return true;
}
// Truth-table model uses independently supplied, already verified facts, not request claims.
export function expectedQueryStatus(facts){
 if(facts.authenticated!==true)return 401;
 if(facts.policy_available!==true||facts.audit_available!==true)return 503;
 if(facts.adult_patient_bound!==true||facts.same_tenant!==true||facts.grant_patient_matches!==true||facts.read_self_allowed!==true||facts.grant_exists!==true)return 404;
 return 200;
}
export const sample={kind:'receipt_query_page',schema_version:1,grant_reference:'grant-fixture',snapshot_sequence:2,items:[{receipt_reference:'receipt-fixture',receipt_sequence:1,occurred_at_ms:100,committed_at_ms:105,action:'ALLERGY_VIEW_ATTEMPT',outcome:'COMMITTED',actor_role:'CLINICIAN',actor_reference:'actor-fixture'}],next_cursor:null};
