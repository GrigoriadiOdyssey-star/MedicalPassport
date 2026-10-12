import {sha256} from './catalog-lib.mjs';
import {normalizeLine} from './canonical-lib.mjs';
export const readinessGates=['architecture','data','security','privacy','interoperability','clinical_safety','testing','acceptance'];
export function assertReadiness(record){
 if(!Array.isArray(record.gates)||record.gates.length!==8||new Set(record.gates.map(g=>g.name)).size!==8||readinessGates.some(n=>!record.gates.some(g=>g.name===n)))throw Error('Missing readiness gate');
 const eligible=record.gates.every(g=>g.status==='PASS'&&g.evidence?.length&&g.approved_by&&g.approval_reference);
 if(record.implementation_ready!==eligible)throw Error('Unproven implementation readiness');
 return eligible;
}
export function assertGapIntegration(decisions,canonical,migrations,sourceDocuments){
 if(decisions.length!==7||new Set(decisions.map(d=>d.id)).size!==7)throw Error('Gap scope mismatch');
 for(const d of decisions){
  const c=canonical.find(c=>c.owner===d.owner);
  if(!c||d.target!==c.id||d.status!=='INTEGRATED'||d.validation_scope!=='DOCUMENTATION_SEMANTICS_AND_OWNER')throw Error('Gap owner or scope mismatch');
  if(!d.semantic_analysis||!d.search_evidence||!d.positive_sources.length||d.clinical_validation!==false)throw Error('Missing gap evidence');
  if(d.requirement_coverage.length!==d.required_count||d.requirement_coverage.some(r=>!c.requirements.some(a=>a.id===r.target_id&&a.text===r.requirement)))throw Error('Gap requirement not integrated');
  const rows=migrations.filter(m=>m.proposal_id===d.id);
  if(rows.length!==d.source_nonempty_lines||rows.some(m=>!c.requirements.some(r=>r.id===m.target_id&&r.text===m.normalized_text)))throw Error('Gap draft fragment lost');
  const body=sourceDocuments[d.id];if(typeof body!=='string'||sha256(body)!==d.source_document_sha256)throw Error('Gap source hash mismatch');
  const lines=body.split('\n').map((text,i)=>({text,line:i+1})).filter(r=>r.text.trim());
  if(lines.length!==rows.length)throw Error('Gap line count mismatch');
  for(const l of lines){const matches=rows.filter(m=>m.source_line===l.line);if(matches.length!==1)throw Error('Duplicate or missing gap line');const m=matches[0];if(m.source_text!==l.text||m.source_fragment_sha256!==sha256(l.text)||m.source_sha256!==sha256(body)||m.normalized_text!==normalizeLine(l.text)||m.target_module!==d.target)throw Error('Gap provenance mismatch');}
 }
 if(migrations.some(m=>!decisions.some(d=>d.id===m.proposal_id)))throw Error('Orphan gap fragment');
 return true;
}
