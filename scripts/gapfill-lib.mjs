import {exclusiveStatuses} from '../config/gapfill.mjs';

export function census(ids,expectedCount){
 const seen=new Set(),duplicate_ids=[];
 for(const id of ids){if(!Number.isInteger(id)||id<1)throw Error('invalid original_id');if(seen.has(id))duplicate_ids.push(id);seen.add(id);}
 const max=ids.length?Math.max(...ids):0,missing_ids=[];
 for(let id=1;id<=max;id++)if(!seen.has(id))missing_ids.push(id);
 return {expected_count:expectedCount,actual_source_count:ids.length,unique_original_ids:seen.size,missing_ids,duplicate_ids:[...new Set(duplicate_ids)],count_discrepancy:expectedCount-ids.length,missing_within_observed_range:missing_ids,expected_but_not_evidenced_range:expectedCount>max?{from:max+1,to:expectedCount,count:expectedCount-max,interpretation:'Not evidence of lost source records; expected total is unverified.'}:null};
}
export function assertAccounting(sourceIds,ledger,registry){
 const expected=new Set(sourceIds);
 if(expected.size!==sourceIds.length)throw Error('duplicate source original_id');
 for(const [label,rows] of [['ledger',ledger],['registry',registry]]){
  const seen=new Set();for(const r of rows){if(!expected.has(r.original_id))throw Error('orphan '+label+' original_id');if(seen.has(r.original_id))throw Error('duplicate '+label+' original_id');seen.add(r.original_id);}
  if(seen.size!==expected.size)throw Error('missing '+label+' original_id');
 }
 const status_counts=Object.fromEntries(exclusiveStatuses.map(s=>[s,0]));
 let reviewed=0,normalized=0,canonicalized=0,ready=0;
 for(const row of ledger){
  if(!exclusiveStatuses.includes(row.exclusive_status))throw Error('invalid exclusive status');
  status_counts[row.exclusive_status]++;
  if(row.reviewed){if(!row.review_evidence?.body_sha256||!row.review_evidence?.verdict)throw Error('review without evidence');reviewed++;}
  if(row.normalized){if(!row.reviewed||!row.normalization_evidence)throw Error('normalization without evidence');normalized++;}
  if(row.canonicalized){if(!row.normalized||!row.canonicalization_evidence)throw Error('canonicalization without evidence');canonicalized++;}
  if(row.implementation_ready){if(!row.canonicalized||!row.implementation_evidence)throw Error('readiness without evidence');ready++;}
  if(row.exclusive_status==='NOT_REVIEWED'&&row.reviewed)throw Error('status contradicts review');
  if(row.exclusive_status==='REVIEWED_ONLY'&&(!row.reviewed||row.normalized))throw Error('reviewed-only contradiction');
  if(row.exclusive_status==='NORMALIZED'&&(!row.normalized||row.canonicalized))throw Error('normalized status contradiction');
  if(row.exclusive_status==='CANONICALIZED'&&(!row.canonicalized||row.implementation_ready))throw Error('canonical status contradiction');
  if(row.exclusive_status==='IMPLEMENTATION_READY'&&!row.implementation_ready)throw Error('ready status contradiction');
  if(['SUPERSEDED','DUPLICATE'].includes(row.exclusive_status)&&!row.requirement_migration_evidence)throw Error('terminal classification without migration evidence');
 }
 for(const row of registry){const item=ledger.find(x=>x.original_id===row.original_id);if(row.exclusive_status!==item.exclusive_status)throw Error('registry/ledger status mismatch');}
 if(Object.values(status_counts).reduce((a,b)=>a+b,0)!==sourceIds.length)throw Error('status sum mismatch');
 return {source_count:sourceIds.length,accounted_count:ledger.length,status_counts,reviewed,normalized,canonicalized,implementation_ready:ready,unaudited:sourceIds.length-reviewed};
}
export function assertGraph(nodes,edges){
 const ids=new Set(nodes.map(n=>n.id));if(ids.size!==nodes.length)throw Error('duplicate graph node');
 const adj=new Map(nodes.map(n=>[n.id,[]]));for(const e of edges){if(!ids.has(e.from)||!ids.has(e.to))throw Error('broken dependency');adj.get(e.from).push(e.to);}
 const done=new Set(),active=new Set();
 const walk=id=>{if(active.has(id))throw Error('circular dependency');if(done.has(id))return;active.add(id);for(const next of adj.get(id))walk(next);active.delete(id);done.add(id);};
 for(const id of ids)walk(id);
 return true;
}
export function assertOwners(registry,ownerIds){
 const ids=new Set(ownerIds);for(const r of registry)if(r.canonical_owner&&!ids.has(r.canonical_owner))throw Error('unknown canonical owner');
 return {unresolved:registry.filter(r=>!r.canonical_owner).length};
}
export function assertNonempty(registry){for(const r of registry)if(!r.title?.trim()||!r.description?.trim())throw Error('empty module');}
export function assertMVP(registry,p0Ids){const allowed=new Set(p0Ids);for(const r of registry)if(r.roadmap_stage==='MVP'&&!allowed.has(r.original_id))throw Error('unapproved historical MVP module');}
export function assertSafety(extensions){
 for(const x of extensions){const s=x.clinical_safety;if(!s||s.autonomous_prescribing!==false||s.autonomous_dose_change!==false||s.simulation_is_clinical_fact!==false||s.clinician_review_required!==true||s.unvalidated_clinical_import_allowed!==false)throw Error('unsafe high-risk extension');if(x.roadmap_stage==='MVP')throw Error('research expansion incorrectly promoted to MVP');}
}
export function assertCounters(p){
 for(const k of ['ORIGINAL_SOURCE_MODULES','ACCOUNTED_SOURCE_MODULES','REVIEWED','UNAUDITED','NORMALIZED','CANONICALIZED','IMPLEMENTATION_READY'])if(!Number.isInteger(p[k])||p[k]<0)throw Error('invalid count');
 if(p.ORIGINAL_SOURCE_MODULES!==p.ACCOUNTED_SOURCE_MODULES)throw Error('source/accounted mismatch');
 if(p.REVIEWED+p.UNAUDITED!==p.ORIGINAL_SOURCE_MODULES)throw Error('review/unaudited mismatch');
 if(Object.values(p.exclusive_status_counts).reduce((a,b)=>a+b,0)!==p.ORIGINAL_SOURCE_MODULES)throw Error('exclusive counts mismatch');
 const pct=p.ORIGINAL_SOURCE_MODULES?Number((100*p.REVIEWED/p.ORIGINAL_SOURCE_MODULES).toFixed(4)):0;
 if(p.REVIEW_PROGRESS!==pct)throw Error('inflated progress');
 if(p.IMPLEMENTATION_READY>p.CANONICALIZED||p.CANONICALIZED>p.NORMALIZED||p.NORMALIZED>p.REVIEWED)throw Error('invalid progress hierarchy');
 for(const [count,percent] of [['NORMALIZED','NORMALIZATION_PROGRESS'],['CANONICALIZED','CANONICALIZATION_PROGRESS'],['IMPLEMENTATION_READY','IMPLEMENTATION_READINESS']])if(p[percent]!==Number((100*p[count]/(p.ORIGINAL_SOURCE_MODULES||1)).toFixed(4)))throw Error('invalid stage percent');
 const g=p.gap_scope;if(!g||!Number.isInteger(g.validated_closed)||g.validated_closed<0||g.validated_closed>g.identified_specification_gaps||g.drafted>g.identified_specification_gaps)throw Error('invalid gap counters');
 if(p.GAP_FILL_PROGRESS!==Number((100*g.validated_closed/(g.identified_specification_gaps||1)).toFixed(4)))throw Error('invalid gap percent');
 if(p.OVERALL_PRODUCT_BIBLE_PROGRESS!==Math.min(p.REVIEW_PROGRESS,p.NORMALIZATION_PROGRESS,p.CANONICALIZATION_PROGRESS,p.GAP_FILL_PROGRESS,p.IMPLEMENTATION_READINESS))throw Error('inflated overall progress');
}
export function assertEvidenceEnvelope(x){
 if(!['OBSERVED','MEASURED','REPORTED','CLINICIAN_ASSESSED','INFERRED','PREDICTED','SIMULATED'].includes(x.epistemic_status))throw Error('unknown epistemic status');
 if(['INFERRED','PREDICTED','SIMULATED'].includes(x.epistemic_status)&&x.clinical_fact_write_allowed!==false)throw Error('derived output cannot write clinical fact');
 if(x.kind==='CONNECTOR_MAPPING'&&x.target==='CLINICAL_SOURCE_OF_TRUTH'&&(x.validation_state!=='VALIDATED'||x.approval_state!=='APPROVED'))throw Error('unvalidated mapping import');
 if(x.kind==='MODEL_ROUTE'&&x.route_validation_state!=='APPROVED')throw Error('unapproved model fallback');
 if(x.kind==='RESEARCH_RELEASE'&&(x.disclosure_review!=='APPROVED'||!x.governance_basis))throw Error('research disclosure without governance');
}
export function duplicateTitles(rows){
 const groups=new Map();for(const r of rows){const key=r.title.normalize('NFKC').toLocaleLowerCase('en').replace(/\s+/g,' ').trim();const ids=groups.get(key)??[];ids.push(r.original_id);groups.set(key,ids);}
 return [...groups].filter(([,ids])=>ids.length>1).map(([title,original_ids])=>({title,original_ids,meaning:'TITLE_MATCH_ONLY_NOT_SEMANTIC_DUPLICATE'}));
}
export function assertCandidateReport(clusters,sourceIds){
 const ids=new Set(sourceIds),keys=new Set();for(const c of clusters){if(!c.cluster_id||keys.has(c.cluster_id))throw Error('duplicate candidate cluster');keys.add(c.cluster_id);if(!Array.isArray(c.members)||c.members.length<2||new Set(c.members).size!==c.members.length||c.members.some(id=>!ids.has(id)))throw Error('invalid semantic candidate members');}
}
export function csvCell(value){
 let s=typeof value==='object'?JSON.stringify(value):String(value??'');if(typeof value==='string'&&/^[=+@\-\t\r]/.test(value))s="'"+s;
 return '"'+s.replace(/"/g,'""')+'"';
}
