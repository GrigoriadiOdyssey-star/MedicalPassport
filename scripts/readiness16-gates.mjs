import {criteria} from '../config/readiness08.mjs';
const requiredGates=['architecture','data','security','privacy','interoperability','clinical_safety','testing','acceptance'];
export function readinessDecision(record){
 const missing=[];
 if(!record.canonical_id)missing.push('NO_ACTIVE_CANONICAL_SPECIFICATION');
 const rows=record.criteria_overlay??record.criteria??[];
 for(const name of criteria){const c=rows.filter(c=>c.name===name);if(c.length!==1||c[0].status!=='SATISFIED'||!c[0].evidence?.length)missing.push('CRITERION:'+name);}
 const gates=record.existing_eight_gate_evidence?.gates??[];
 for(const name of requiredGates){const g=gates.filter(g=>g.name===name);if(g.length!==1||g[0].status!=='PASS'||!g[0].evidence?.length||!g[0].approved_by||!g[0].approval_reference)missing.push('GATE:'+name);}
 return {implementation_ready:missing.length===0,unresolved_gate_keys:missing};
}
