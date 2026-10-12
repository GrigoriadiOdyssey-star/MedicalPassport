import {sha256} from './catalog-lib.mjs';
export const normalizeLine=s=>s.replace(/^\s*•\s*/,'').trim().replace(/\s+/g,' ');
export function assertCanonicalMigration({sources,normalized,canonical,mappings,aliases,owners}){
 const sourceMap=new Map(sources.map(s=>[s.original_id,s])),canonMap=new Map(canonical.map(c=>[c.id,c])),allowed=new Set(owners);
 if(canonMap.size!==canonical.length)throw Error('Duplicate canonical ID');
 const seen=new Set();
 for(const n of normalized){
  if(seen.has(n.original_id))throw Error('Duplicate normalized source');seen.add(n.original_id);
  const s=sourceMap.get(n.original_id);if(!s?.readiness?.reviewed)throw Error('Canonical source not previously reviewed');
  if(n.source_sha256!==sha256(s.description))throw Error('Normalized source hash mismatch');
  if(!allowed.has(n.canonical_owner)||canonMap.get(n.canonical_target)?.owner!==n.canonical_owner)throw Error('Canonical owner mismatch');
  for(const key of ['purpose','scope','workflow','clinical_safety','privacy','failure_modes','acceptance','open_gates'])if(typeof n[key]!=='string'||!n[key].trim())throw Error('Incomplete normalization '+key);
  for(const key of ['actors','inputs','outputs','entities','dependencies'])if(!Array.isArray(n[key])||!n[key].length)throw Error('Incomplete normalization '+key);
  const a=aliases.filter(a=>a.original_id===n.original_id);if(a.length!==1||a[0].canonical_id!==n.canonical_target)throw Error('Alias mismatch');
  const rows=mappings.filter(m=>m.source_id===n.original_id),expected=s.description.split('\n').map((text,i)=>({text,line:i+1})).filter(r=>r.text.trim());
  if(rows.length!==expected.length)throw Error('Lost or extra source fragment');
  for(const e of expected){
   const ms=rows.filter(m=>m.source_line===e.line);if(ms.length!==1)throw Error('Duplicate or missing source line');
   const m=ms[0];if(m.source_text!==e.text||m.source_fragment_sha256!==sha256(e.text))throw Error('Source fragment changed');
   if(m.target_module!==n.canonical_target)throw Error('Wrong fragment destination');
   const c=canonMap.get(m.target_module),r=[...c.requirements,...c.source_metadata].find(r=>r.id===m.target_record_id);
   if(!r||r.text!==normalizeLine(e.text))throw Error('Requirement not preserved in canonical target');
  }
 }
 if(mappings.some(m=>!seen.has(m.source_id))||aliases.some(a=>!seen.has(a.original_id)))throw Error('Orphan migration record');
 for(const c of canonical){
  if(c.stage!=='ADOPTED_DOCUMENTATION_BASELINE'||c.clinical_approval!==false||c.implementation_ready!==false)throw Error('Unsupported approval scope');
  if(!c.semantic_decision||!c.owner_evidence||!c.document_sha256)throw Error('Missing canonical adoption evidence');
  if(!allowed.has(c.owner))throw Error('Unknown canonical owner');
 }
 return {normalized:normalized.length,canonicalized:aliases.length,retained_fragments:mappings.length,canonical_documents:canonical.length};
}
