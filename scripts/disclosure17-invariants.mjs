// Pure proposed-contract validation only; no endpoint, credentials, authorization or state mutation.
import {checkEnvelope} from './security-envelope-check.mjs';
export function checkDisclosureInvariants(schema,value){
 if(!checkEnvelope(schema,value))return false;
 if(value.kind==='grant_state'){
  if(value.expires_at_ms<=value.created_at_ms)return false;
  if(value.status==='REVOKED'&&value.withdrawn_at_ms<value.created_at_ms)return false;
 }
 if(value.kind==='allergy_view'&&['UNKNOWN','NOT_ASSESSED','NO_KNOWN_ALLERGY'].includes(value.assertion_state)){
  if(value.reported_substance!==null||value.reported_reaction!==null)return false;
  if(['UNKNOWN','NOT_ASSESSED'].includes(value.assertion_state)&&value.verification_state!=='UNKNOWN')return false;
 }
 return true;
}
