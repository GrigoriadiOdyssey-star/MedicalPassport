import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseModules,sha256} from './catalog-lib.mjs';
import {assertAccounting,assertGraph,assertOwners,assertCandidateReport,assertCounters,assertSafety,assertNonempty,assertMVP,csvCell,census,duplicateTitles} from './gapfill-lib.mjs';
import {parentCheckpoint,profiles,semanticGroups,exceptions} from '../config/pediatric-pass.mjs';
import {dimensions} from '../config/gapfill.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),out=path.join(root,'audit/pediatric-02');
const read=n=>JSON.parse(fs.readFileSync(path.join(root,n),'utf8'));
const src='sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md',bytes=fs.readFileSync(path.join(root,src));
const sourceHash=read('audit/master/source_manifest.json').sha256;if(sha256(bytes)!==sourceHash)throw Error('Source changed');
const ms=parseModules(bytes.toString('utf8')),byId=new Map(ms.map(m=>[m.id,m]));
const frozen=read('config/pediatric-reviewed-source.json');
if(frozen.frozen_count!==315||frozen.modules.length!==315||new Set(frozen.modules.map(m=>m.original_id)).size!==315)throw Error('Review manifest cardinality');
for(const r of frozen.modules)if(!byId.has(r.original_id)||sha256(byId.get(r.original_id).body)!==r.body_sha256)throw Error('Review evidence drift');
const batch=new Set(frozen.modules.map(r=>r.original_id));
const previous=read('audit/gapfill/audit_progress.json'),oldLedger=read('audit/gapfill/audit_ledger.json').modules;
const oldReviewed=new Set(oldLedger.filter(m=>m.reviewed).map(m=>m.original_id));
const metadata={schema_version:3,pass:'PEDIATRIC-02',edition:'2026-09-14',parent_checkpoint:parentCheckpoint,source_sha256:sourceHash,gitlab_writes:false,implementation_started:false};
const inRange=(id,ranges)=>ranges.some(([a,b])=>id>=a&&id<=b);
const primary=id=>profiles.find(p=>inRange(id,p.ranges));
const sourceRef=id=>({path:src,original_id:id,heading_line:byId.get(id).sourceLine,body_sha256:sha256(byId.get(id).body)});
function owner(m){
 if(m.id===1000)return 'CAP-SPECIALTY';
 if([996,1118,4441,5015].includes(m.id))return 'CAP-MEDICATION';
 if(/consent|confidentiality|privacy.*guardian/i.test(m.title))return 'CAP-CONSENT';
 if(/interoperability|data exchange/i.test(m.title))return 'CAP-INTEROP';
 if(/digital twin/i.test(m.title))return 'CAP-TWIN';
 if(/\bAI\b|predictive/i.test(m.title))return 'CAP-CDS';
 if(/appointment/i.test(m.title))return 'CAP-APPOINTMENTS';
 if(/international|professional profile|center profile|cardiologist profile|nephrologist profile|immunologist profile|allergist profile/i.test(m.title))return 'CAP-PROFILE';
 if(/research|clinical trials/i.test(m.title))return 'CAP-RESEARCH';
 if(/telemedicine|telecare|remote monitoring/i.test(m.title))return 'CAP-TELEMEDICINE';
 if(/crisis|emergency|anaphylaxis emergency/i.test(m.title))return 'CAP-EMERGENCY';
 if(/medication|pharmacology|psychopharmacology|therapy safety|nephrotoxicity/i.test(m.title))return 'CAP-CDS';
 if(/allergy registry|drug allergy.*label|delabel/i.test(m.title))return 'CAP-ALLERGY';
 if(/laboratory|biomarker|urinalysis|flow cytometry|pathology/i.test(m.title))return 'CAP-LABORATORY';
 if(/imaging|ultrasound|echocardiography|MRI.*CT/i.test(m.title))return 'CAP-IMAGING';
 if(/registry|timeline|longitudinal.*profile/i.test(m.title))return 'CAP-DATA';
 return 'CAP-SPECIALTY';
}
const reviews=frozen.modules.map(r=>{
 const m=byId.get(r.original_id),p=primary(m.id),labels=[...m.body.matchAll(/^\s*•\s*(.+)$/gm)].map(x=>x[1].trim());
 return {original_id:m.id,title:m.title,...sourceRef(m.id),review_method:'FULL_SOURCE_BODY_ARCHITECTURAL_REVIEW',review_scope:'Source semantics, preservation, ownership and safety boundaries; not independent clinical validation or approved canonical migration.',body:m.body,feature_labels:labels,profile:p?.id??null,canonical_owner_proposal:owner(m),verdict:exceptions[m.id]??('Retain '+m.title+' as a '+(p?.title??'shared pediatric')+' workflow. Preserve source-specific items: '+labels.slice(0,4).join('; ')+'. '+(p?.unique_focus??'Dashboard is a cross-specialty projection.')+' Shared controls and source-fragment appendix apply; approval/implementation remain pending.'),date:metadata.edition};
});
const reviewMap=new Map(reviews.map(r=>[r.original_id,r]));
const ledger=oldLedger.map(old=>{const r=reviewMap.get(old.original_id);return r?{...old,exclusive_status:'REVIEWED_ONLY',reviewed:true,review_evidence:r,history:[...old.history,{event:'PEDIATRIC_FULL_BODY_REVIEW',date:metadata.edition,checkpoint:parentCheckpoint,body_sha256:r.body_sha256}]}:old;});
const registry=read('audit/gapfill/canonical_registry.json').modules.map(old=>{
 const r=reviewMap.get(old.original_id);if(!r)return old;
 return {...old,status:'REVIEWED_ONLY',exclusive_status:'REVIEWED_ONLY',audit_status:'REVIEWED_ONLY',canonical_owner:r.canonical_owner_proposal,owner_candidates:[...new Set([...old.owner_candidates,r.canonical_owner_proposal])],readiness:{reviewed:true,normalized:false,canonicalized:false,implementation_ready:false},audit_notes:[...old.audit_notes,r.verdict],pediatric_profile_proposal:r.profile,classification_basis:'FULL_BODY_PEDIATRIC_REVIEW_OWNER_PROPOSAL'};
});
const owners=read('audit/master/canonical_owners.json').owners;
const accounts=assertAccounting(ms.map(m=>m.id),ledger,registry);
const ownersCheck=assertOwners(registry,owners.map(o=>o.id));assertNonempty(registry);assertMVP(registry,read('config/catalog.json').p0ModuleIds);
const safety={autonomous_prescribing:false,autonomous_dose_change:false,simulation_is_clinical_fact:false,clinician_review_required:true,unvalidated_clinical_import_allowed:false};
const profileRecords=profiles.map(p=>({...p,source_ids:[...new Set([...ms.filter(m=>inRange(m.id,p.ranges)).map(m=>m.id),...semanticGroups.filter(g=>g.target_profile===p.id).flatMap(g=>g.source_ids)])].sort((a,b)=>a-b),record_kind:'CANONICAL_PROFILE_DRAFT',status:'DRAFT_SPECIFICATION',roadmap_stage:'RESEARCH',implementation_ready:false,canonicalized:false,approved:false,new_original_module:false,new_gap_module:false,clinical_safety:safety,contract:'shared_pediatric_contract.md',requirements_document:'requirements/'+p.id+'.md',dependencies:['CAP-DATA','CAP-CONSENT','CAP-CDS','CAP-AI','CAP-TWIN','CAP-AUDIT','CAP-INTEROP']}));
assertSafety(profileRecords);
const graph=read('audit/gapfill/dependency_graph.json');
graph.proposal_graph.nodes.push(...profileRecords.map(p=>({id:p.id})));
graph.proposal_graph.edges.push(...profileRecords.flatMap(p=>p.dependencies.map(to=>({from:p.id,to}))));
assertGraph(graph.proposal_graph.nodes,graph.proposal_graph.edges);
const result=new Map(),json=(p,obj)=>result.set(p,JSON.stringify(obj,null,2)+'\n');
const csv=rows=>{const cols=Object.keys(rows[0]);return '\uFEFF'+cols.join(',')+'\n'+rows.map(r=>cols.map(c=>csvCell(r[c])).join(',')).join('\n')+'\n';};
const decisions=semanticGroups.map(g=>{
 if(g.source_ids.some(id=>!batch.has(id)))throw Error('Unreviewed semantic decision');
 const labels=g.source_ids.map(id=>new Set(reviewMap.get(id).feature_labels));
 return {...g,apply:false,source_records:g.source_ids.map((id,i)=>({source_id:id,source_title:byId.get(id).title,body:byId.get(id).body,provenance:sourceRef(id),unique_literal_feature_labels:[...labels[i]].filter(x=>labels.every((s,j)=>i===j||!s.has(x)))})),reason:g.reason,retention_status:g.target_profile?'RETAINED_IN_DRAFT_APPENDIX':'RETAIN_SEPARATE_THERAPY_TYPES',migrated_requirements:[],approved_migration:false,timestamp:metadata.edition};
});
const duplicates=read('audit/gapfill/duplicate_clusters.json');
for(const d of decisions){
 const ids=[...d.source_ids].sort((a,b)=>a-b),key=ids.join(',');
 let c=duplicates.clusters.find(c=>[...c.members].sort((a,b)=>a-b).join(',')===key);
 if(!c){c={cluster_id:'PED2-CL-'+sha256(key).slice(0,12),members:ids,candidate_basis:['full_source_body_semantic_review']};duplicates.clusters.push(c);}
 Object.assign(c,{classification:d.classification,decision_id:d.id,reason:d.reason,adjudication:'DRAFT_PRESERVATION_COMPLETE; migration unapproved'});
}
duplicates.allowed_classifications=[...new Set([...duplicates.allowed_classifications,'DISTINCT_CAPABILITIES'])];
assertCandidateReport(duplicates.clusters,ms.map(m=>m.id));
const mappings=[];
for(const p of profileRecords){
 const blocks=[];
 for(const id of p.source_ids){
  const m=byId.get(id);
  blocks.push('<a id="source-'+id+'"></a>\n## Source '+id+' — '+m.title+'\n\n'+m.body);
  for(const [i,text] of m.body.split('\n').entries()){
   if(!text.trim())continue;
   mappings.push({source_id:id,source_title:m.title,source_fragment_id:'SRC-'+id+'-L'+(i+1),source_text:text,source_fragment_sha256:sha256(text),target_module:p.id,target_document:p.requirements_document+'#source-'+id,target_section:'Preserved source requirements',reason:'Retain full source including non-bullet requirements while profile contracts add shared boundaries.',timestamp:metadata.edition,provenance:sourceRef(id),migration_state:'DRAFT_RETENTION_ONLY',approved:false});
  }
 }
 result.set(p.requirements_document,'# '+p.id+' — preservation appendix\n\nEvery nonempty source line is mapped in requirement_traceability.json. Repeated wording is retained intentionally. This is proposed consolidation, not approved supersession.\n\n'+blocks.join('\n\n')+'\n');
}
const authored=['shared_pediatric_contract.md','CONTINUE_FROM_HERE.md',...profiles.map(p=>p.document)];
json('authored_documents_manifest.json',{...metadata,documents:authored.map(name=>({path:name,sha256:sha256(fs.readFileSync(path.join(out,name)))}))});
json('audit_ledger.json',{...metadata,status_model:'Nine exclusive states; REVIEWED cumulative; source IDs only.',modules:ledger});
json('canonical_registry.json',{...metadata,modules:registry});
const fields=Object.keys(read('audit/gapfill/canonical_registry.json').modules[0]).filter(k=>!['owner_candidates','audit_notes','canonical_extensions'].includes(k));
result.set('canonical_registry.csv',csv(registry.map(r=>Object.fromEntries(fields.map(k=>[k,r[k]])))));
json('review_evidence.json',{...metadata,batch_count:315,newly_reviewed:reviews.filter(r=>!oldReviewed.has(r.original_id)).length,reviews});
json('canonical_profiles.json',{...metadata,profiles:profileRecords});
json('requirement_traceability.json',{...metadata,mappings});
json('semantic_diffs.json',{...metadata,decisions});
json('duplicate_clusters.json',{...duplicates,...metadata});
json('duplicate_title_inventory.json',{...metadata,groups:duplicateTitles(registry)});
json('dependency_graph.json',{...graph,...metadata});
json('new_module_proposals.json',{...metadata,proposals:profileRecords.map(p=>({...p,decision:'CONSOLIDATE_EXISTING_SPECIALTY_PROFILE',search_scope:'Full corpus retrieval in previous pass plus complete contiguous source blocks in this pass.',alternative_source_ids:p.source_ids,overlap_decisions:decisions.filter(d=>d.target_profile===p.id).map(d=>d.id),canonical_owner_check:owners.some(o=>o.id===p.owner),why_existing_insufficient:'Existing source bodies express requirements but lack a common profile contract and lossless cross-generation mapping.'}))});
json('new_modules_registry.json',{...metadata,modules:[],reason:'No justified independent new capability; five profiles consolidate existing scope.'});
json('change_map.json',{...metadata,apply_enabled:false,original_changes:ms.map(m=>({original_id:m.id,source_reference:sourceRef(m.id),action:batch.has(m.id)?'REVIEW_AND_DRAFT_PROFILE_RETENTION':'CARRY_FORWARD',approved_migration:false,destructive_operation_allowed:false})),profile_changes:profileRecords.map(p=>({id:p.id,action:'WRITE_LOCAL_DRAFT_AND_REQUIREMENT_APPENDIX',document:p.document}))});
const matrix=read('audit/gapfill/pediatric_coverage_evidence.json');
const added=[];
for(const cell of matrix.cells){
 const matching=profileRecords.filter(p=>({'Cardiology':'PRF-PED-CARDIOLOGY','Nephrology':'PRF-PED-RENAL','Allergy':'PRF-PED-ALLERGY','Immunology':'PRF-PED-IMMUNOLOGY','Mental health / psychiatry':'PRF-PED-MENTAL'})[cell.specialty]===p.id);
 const dim=dimensions.find(d=>d.name===cell.dimension),re=new RegExp(dim.pattern,'i');
 const positives=matching.flatMap(p=>p.source_ids).filter(id=>re.test(byId.get(id).title+'\n'+byId.get(id).body));
 const before=new Set(cell.source_ids);const newIds=positives.filter(id=>!before.has(id));
 cell.source_ids=[...new Set([...cell.source_ids,...positives])].sort((a,b)=>a-b);
 cell.reviewed_source_ids=cell.source_ids.filter(id=>ledger[id-1].reviewed);
 cell.state=cell.source_ids.length?'SOURCE_MENTION':'SHARED_REVIEW_REQUIRED';
 cell.confirmed_gap=false;cell.clinically_validated=false;
 cell.additional_context_review_ids=newIds;
 if(newIds.length)added.push({specialty:cell.specialty,dimension:cell.dimension,added_source_ids:newIds,reason:'Complete-block reviewed context includes modules whose titles omit pediatric/specialty words.'});
}
const rows=[...new Set(matrix.cells.map(c=>c.specialty))].map(s=>Object.fromEntries([['specialty',s],...matrix.cells.filter(c=>c.specialty===s).map(c=>[c.dimension,c.state+':'+(c.source_ids.length?c.source_ids.join('|'):c.shared_owner_candidate)])]));
result.set('pediatric_domain_matrix.csv',csv(rows));
json('pediatric_coverage_evidence.json',{...matrix,...metadata,method:'Prior lexical screening plus complete-block, source-reviewed context in five specialty profiles; mentions do not prove clinical completeness.',context_additions:added});
const oldCoverage=read('audit/gapfill/domain_coverage.json');
const adrenalFalsePositives=oldCoverage.domains.find(d=>d.domain==='Nephrology').source_ids.filter(id=>/adrenal/i.test(byId.get(id).title)&&!/\brenal\b|nephro|kidney/i.test(byId.get(id).title));
for(const d of oldCoverage.domains){
 if(d.domain==='Endocrinology'){d.source_ids=[...new Set([...d.source_ids,...adrenalFalsePositives])].sort((a,b)=>a-b);d.source_hits=d.source_ids.length;d.title_hits=d.source_ids.filter(id=>new RegExp(d.query,'i').test(byId.get(id).title)).length;d.under_50_words=d.source_ids.filter(id=>byId.get(id).wordCount<50).length;d.context_review_note='Thirteen adrenal source bodies checked as a retrieval correction; primary endocrine context retained. These supplementary checks do not add IDs to the frozen reviewed batch.';}
 if(d.domain==='Nephrology'){d.source_ids=d.source_ids.filter(id=>!adrenalFalsePositives.includes(id));d.source_hits=d.source_ids.length;d.title_hits=d.source_ids.filter(id=>new RegExp(d.query,'i').test(byId.get(id).title)).length;d.under_50_words=d.source_ids.filter(id=>byId.get(id).wordCount<50).length;d.query_note='Known title-only adrenal false positives excluded after context adjudication; original lexical query retained for provenance.';}
 d.reviewed_hits=d.source_ids.filter(id=>ledger[id-1].reviewed).length;
}
json('domain_coverage.json',{...oldCoverage,...metadata});
json('audit_corrections.json',{...metadata,corrections:[{id:'PED2-RETRIEVAL-01',finding:'Pediatric/specialty title filters miss contextually pediatric source modules',matrix_cells_with_added_context:added.length,examples:[844,855,1114,1115,1116,3063,3663,4405,4414],resolution:'Add reviewed complete-block context with source IDs; no automatic clinical coverage.'},{id:'PED2-RETRIEVAL-02',finding:'renal substring matches Adrenal',excluded_nephrology_candidates:adrenalFalsePositives,resolution:'Retain adrenal sources under endocrine context; source records unchanged.'},{id:'PED2-SEMANTIC-01',finding:'Identical immunotherapy titles have different therapeutic intents',source_ids:[996,1118],resolution:'DISTINCT_CAPABILITIES; retain IVIG/SCIG versus SCIT/SLIT.'}]});
json('findings.json',{...read('audit/gapfill/findings.json'),...metadata,additional_evidence:{source_review_count:315,clinical_gates:'Existing 6 critical and 11 high gates remain open. More detailed source safeguards are preserved; no automatic closure.'}});
const pct=n=>Number((100*n/ms.length).toFixed(4));
const progress={...previous,...metadata,REVIEWED:accounts.reviewed,UNAUDITED:accounts.unaudited,REVIEW_PROGRESS:pct(accounts.reviewed),exclusive_status_counts:accounts.status_counts,GENERATED_CANONICAL_MODULES:15,generated_canonical_breakdown:{prior_profile_drafts:3,prior_extension_drafts:7,current_profile_drafts:5,approved_canonical_modules:0,owner_proposals_excluded:33},SUPPORTING_ARTIFACTS:0,unresolved_owner_ids:ownersCheck.unresolved,high_risk_unreviewed:registry.filter(r=>r.clinical_risk==='HIGH_RISK_REVIEW_CANDIDATE'&&!r.readiness.reviewed).length,duplicate_counts:{exact_groups:duplicates.clusters.filter(c=>c.classification==='EXACT_DUPLICATE').length,semantic_groups:duplicates.clusters.filter(c=>c.classification==='SEMANTIC_DUPLICATE').length,partial_overlap_groups:duplicates.clusters.filter(c=>c.classification==='PARTIAL_OVERLAP').length,distinct_capability_groups:duplicates.clusters.filter(c=>c.classification==='DISTINCT_CAPABILITIES').length,unresolved_clusters:duplicates.clusters.filter(c=>c.classification==='NEEDS_REVIEW').length,source_ids_closed:0},batch:{full_bodies_read:315,new_reviewed:reviews.filter(r=>!oldReviewed.has(r.original_id)).length,semantic_decisions:decisions.length,profile_drafts:5,profile_source_union:new Set(profileRecords.flatMap(p=>p.source_ids)).size,retained_source_line_mappings:mappings.length,additional_matrix_cells:added.length}};
assertCounters(progress);
const censusResult=census(ms.map(m=>m.id),51075);
const missingRefs=graph.source_reference_graph.unresolved_references.length;
result.set('FINAL_AUDIT_READINESS.md','# Final audit readiness — PEDIATRIC-02\n\nNOT READY FOR FINAL SIGN-OFF.\n\n'+[
 'Unreviewed source modules: '+progress.UNAUDITED,
 'Unresolved candidate clusters: '+progress.duplicate_counts.unresolved_clusters,
 'Partial-overlap groups: '+progress.duplicate_counts.partial_overlap_groups+'; migrations unapproved',
 'Unresolved proposed owners: '+progress.unresolved_owner_ids,
 'Unresolved/ambiguous original reference entries: '+missingRefs+'; not all are broken dependencies',
 'Unreviewed high-risk lexical candidates: '+progress.high_risk_unreviewed,
 'Five new profile drafts; no new independent gap modules or approved owners',
 'Seven strategic contracts remain drafts; no validated gap closure',
 'Open: clinical algorithms/terminology, privacy policy, partner conformance, escalation responsibility, requirement migration approval'
].map(s=>'- '+s).join('\n')+'\n\n[Continue](CONTINUE_FROM_HERE.md). Structural tooling tests do not validate clinical practice.\n');
result.set('gap_analysis.md','# PEDIATRIC-02 gap analysis\n\nFive complete specialty contexts strengthen existing shared capabilities. Full-body review: 315 sources, 291 new, 741 cumulative. Five profile drafts preserve all nonempty source lines and are cross-linked to existing seven strategic contracts.\n\n'+profiles.map(p=>'- ['+p.title+']('+p.document+') — '+p.unique_focus).join('\n')+'\n\nNo independent new gap module is justified. The seven prior specification-depth gaps remain open pending validation. Source-local HIGH/CRITICAL MVP labels remain outside current global P0. Matrix mentions and retained source lines are not implementation or clinical-coverage evidence.\n');
result.set('MASTER_GAP_FILL_REPORT.md','# EDHT — PEDIATRIC-02 report\n\nExpected original count 51075; actual/accounted 5175; discrepancy 45900 is unsupported expected scale, not observed lost source IDs. Source and prior audits preserved.\n\nRead 315 full source bodies; '+progress.batch.new_reviewed+' new reviews; cumulative '+progress.REVIEWED+'; unaudited '+progress.UNAUDITED+'. Five canonical profile drafts with '+mappings.length+' source-line mappings preserve unique and repeated requirements. '+decisions.length+' semantic decisions include the IVIG/SCIG versus SCIT/SLIT homonym. No destructive or approved supersede action.\n\nAdditional pediatric context added to '+added.length+' matrix cells; excluded '+adrenalFalsePositives.length+' adrenal title false positives from nephrology retrieval. Full 31×19 matrix remains evidence-linked, not clinically validated.\n\nReview = '+progress.REVIEWED+'/5175 × 100 = '+progress.REVIEW_PROGRESS+'%. Normalization/canonicalization/readiness = 0/5175. Gap fill = 0 validated / 7 scoped gaps. Overall = min(review, normalization, canonicalization, gap fill, readiness) = 0%. Fifteen total generated canonical drafts, zero approved; five newly drafted. Thirty-three owner proposals excluded from original counts.\n\n[Progress](audit_progress.json) · [Counts](count_reconciliation.json) · [Profiles](canonical_profiles.json) · [Source retention](requirement_traceability.json) · [Semantic diffs](semantic_diffs.json) · [Readiness](FINAL_AUDIT_READINESS.md) · [Continue](CONTINUE_FROM_HERE.md).\n');
json('validation.json',{...metadata,status:'PASS_STRUCTURAL',scope:['source census/hash','exclusive accounting','owner references','nonempty descriptions','P0 boundaries','proposed graph targets/cycles','candidate membership','frozen review hashes','safety declarations','source-line retention'],clinical_validation:false,canonical_migrations_approved:0});
const artifactPaths=[...new Set([...result.keys(),...authored,'audit_progress.json','count_reconciliation.json'])].sort();
progress.SUPPORTING_ARTIFACTS=artifactPaths.filter(n=>!profiles.some(p=>p.document===n)).length;
json('audit_progress.json',progress);
json('count_reconciliation.json',{...metadata,...censusResult,accounted_source_modules:5175,orphan_records:[],generated_non_source_records:{owner_proposals:33,canonical_drafts:15,new_gap_modules:0,total_design_records:48},supporting_artifacts:progress.SUPPORTING_ARTIFACTS,supporting_artifact_paths:artifactPaths.filter(n=>!profiles.some(p=>p.document===n)),reason_for_difference:'Immutable source contains exactly 5175 contiguous unique IDs; expected 51075 has no supporting source evidence.'});
const check=process.argv.includes('--check');
for(const [name,content] of result){const target=path.join(out,name);if(check){if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==content)throw Error('Artifact drift '+name);}else{fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content,'utf8');}}
console.log(JSON.stringify({status:'PASS_STRUCTURAL',mode:check?'CHECK':'BUILD',source:5175,reviewed:accounts.reviewed,unaudited:accounts.unaudited,review_progress:progress.REVIEW_PROGRESS,semantic_decisions:decisions.length,mappings:mappings.length,additional_matrix_cells:added.length,adrenal_false_positives:adrenalFalsePositives.length,duplicate_counts:progress.duplicate_counts,supporting_artifacts:progress.SUPPORTING_ARTIFACTS},null,2));
