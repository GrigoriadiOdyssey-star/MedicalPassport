// Pure reference state machine for implementation acceptance. No database/server/network authority.
export const initialState=()=>({grant_active:true,source_version:1,grant_source_version:1,policy_version:1,grant_policy_version:1,identity_current:true,audit_available:true,epoch:1,lease:null,releases:[]});
export const context={tenant:'syn_tenant',subject:'syn_doctor',patient:'syn_patient',grant:'syn_grant',request:'syn_request',digest:'a'.repeat(64)};
const key=c=>JSON.stringify(['tenant','subject','patient','grant','request','digest'].map(k=>c[k]));
const valid=c=>c&&['tenant','subject','patient','grant','request'].every(k=>typeof c[k]==='string'&&c[k].length>0)&&typeof c.digest==='string'&&/^[a-f0-9]{64}$/.test(c.digest);
export function transition(state,operation,now=0,caller=context){const s=structuredClone(state);if(!Number.isSafeInteger(now)||now<0)return {state:s,outcome:'DENY'};
 switch(operation){
 case 'REVOKE':s.grant_active=false;break;
 case 'CORRECT':s.source_version++;break;
 case 'POLICY':s.policy_version++;break;
 case 'SUSPEND':s.identity_current=false;break;
 case 'AUDIT_DOWN':s.audit_available=false;break;
 case 'RESTORE':s.epoch++;break;
 case 'ADMIT':
  if(!valid(caller)||key(caller)!==key(context)||s.lease||!s.grant_active||!s.identity_current||!s.audit_available||s.source_version!==s.grant_source_version||s.policy_version!==s.grant_policy_version||!Number.isSafeInteger(now+5000))return {state:s,outcome:'DENY'};
  s.lease={key:key(caller),source_version:s.source_version,issued:now,expires:now+5000,epoch:s.epoch,consumed:false};return {state:s,outcome:'ADMITTED'};
 case 'RELEASE':{const l=s.lease;if(!valid(caller)||!l||l.consumed||l.epoch!==s.epoch||l.key!==key(caller)||now<l.issued||now>=l.expires)return {state:s,outcome:'DENY'};l.consumed=true;s.releases.push({source_version:l.source_version,at:now,delivery_confirmed:false});return {state:s,outcome:'CLAIMED_NOT_DELIVERY_PROOF'};}
 default:throw Error('Unknown modeled operation');
 }return {state:s,outcome:'STATE_CHANGED'};
}
