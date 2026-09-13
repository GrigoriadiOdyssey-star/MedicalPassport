import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseModules, sha256} from './catalog-lib.mjs';
import {edition, baselineCommit, sourceHash, owners, reviews, decisions, findings, gaps} from '../config/master-audit.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'audit/master');
const sourceFile = 'sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md';
const bytes = fs.readFileSync(path.join(root, sourceFile));
if (sha256(bytes) !== sourceHash) throw Error('Immutable source hash mismatch; STOP');
const source = bytes.toString('utf8');
const modules = parseModules(source);
if (modules.length !== 5175) throw Error('Expected 5175 original modules');
const byId = new Map(modules.map(m=>[m.id,m]));
const reviewMap = new Map(reviews.map(r=>[r.id,r]));
const ownerMap = new Map(owners.map(o=>[o.id,o]));
const p0 = new Set(JSON.parse(fs.readFileSync(path.join(root,'config/catalog.json'))).p0ModuleIds);
const statuses = ['NOT_REVIEWED','REVIEWED','NORMALIZED','CANONICALIZED','SUPERSEDED','DUPLICATE','PARTIAL_OVERLAP','LEGACY_GENERATION','NEEDS_REVIEW','IMPLEMENTATION_READY'];
const fields = 'original_id module_id title normalized_title description domain subdomain capability module_type architecture_layer canonical_owner status duplicate_of supersedes superseded_by dependencies data_entities FHIR_resources API_dependencies events AI_role clinical_risk privacy_risk security_level jurisdiction_scope MVP_status roadmap_stage implementation_status source_reference audit_status audit_notes'.split(' ');
const meta = {schema_version:1,edition,source_sha256:sourceHash,baseline_commit:baselineCommit,pass:'MASTER-01',state:'ANALYZE_ONLY',gitlab_writes:false};
const norm = s=>s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const unique = xs=>[...new Set(xs)];
const group = (xs,key)=>{const map=new Map();for(const x of xs){const k=key(x);if(!map.has(k))map.set(k,[]);map.get(k).push(x);}return [...map.values()];};
const evidence = m=>({path:sourceFile,heading_line:m.sourceLine,body_sha256:sha256(m.body),original_id:m.id});
const headers=[...source.matchAll(/^## Module (\d+) — (.+)\r?$/gm)];
let offset=0, previous=0;
const spans=headers.map((h,i)=>{
 offset+=Buffer.byteLength(source.slice(previous,h.index),'utf8'); previous=h.index;
 const block=source.slice(h.index,headers[i+1]?.index??source.length);
 return {original_id:Number(h[1]),start_byte:offset,end_byte_exclusive:offset+Buffer.byteLength(block),start_line:modules[i].sourceLine,end_line:modules[i+1]?modules[i+1].sourceLine-1:source.split('\n').length,block_sha256:sha256(block),body_sha256:sha256(modules[i].body)};
});
const normalizedTitles=group(modules,m=>norm(m.title)).filter(g=>g.length>1);
const exactBodies=group(modules,m=>sha256(m.body)).filter(g=>g.length>1);
const originalTitleGroups=group(modules,m=>m.title.toLowerCase().replace(/\s+/g,' ').trim()).filter(g=>g.length>1);
const empty=modules.filter(m=>!m.body.replace(/[#*\-•\s]/g,'')).map(m=>m.id);
const malformedHeadings=source.split('\n').map((s,i)=>({s,line:i+1})).filter(x=>/^## Module\b/.test(x.s)&&!/^## Module \d+ — .+\r?$/.test(x.s));
const legacy=modules.filter(m=>/extended module\s*v\d|version\s*\d|next generation|legacy|generation\s*\d/i.test(m.title+'\n'+m.body));

// Candidate discovery, not semantic adjudication. Sparse TF-IDF unigram cosine.
// Boilerplate is removed, very common words ignored, and rare-term retrieval is bounded.
const stop=new Set('the and for with from this that into all are can not has have will supports support documentation status module system engine platform integration clinical medical patient patients health healthcare ai features core functions future provides purpose enables allows based edht intelligence'.split(' '));
const tokenise=s=>norm(s).split(' ').filter(t=>t.length>2&&!stop.has(t)&&!/^\d+$/.test(t));
const tokenSets=modules.map(m=>new Set(tokenise(m.title+' '+m.body)));
const postings=new Map();
tokenSets.forEach((set,i)=>{for(const t of set){if(!postings.has(t))postings.set(t,[]);postings.get(t).push(i);}});
const vectors=tokenSets.map(set=>{const v=new Map();for(const t of set){const n=postings.get(t).length;if(n<=350)v.set(t,Math.log((modules.length+1)/(n+1)));}const length=Math.hypot(...v.values())||1;return new Map([...v].map(([t,w])=>[t,w/length]));});
const lexicalPairs=new Map();let comparisons=0;
vectors.forEach((v,i)=>{
 const candidates=new Set();
 for(const [t] of [...v].sort((a,b)=>b[1]-a[1]).slice(0,12))for(const j of postings.get(t))if(i!==j)candidates.add(j);
 const best=[];
 for(const j of candidates){const other=vectors[j];let score=0,shared=0;for(const [t,w] of v)if(other.has(t)){score+=w*other.get(t);shared++;}comparisons++;if(score>=0.68&&shared>=4)best.push({ids:[Math.min(i,j)+1,Math.max(i,j)+1],score:Number(score.toFixed(5)),shared});}
 for(const pair of best.sort((a,b)=>b.score-a.score||a.ids[0]-b.ids[0]||a.ids[1]-b.ids[1]).slice(0,3))lexicalPairs.set(pair.ids.join('-'),pair);
});
const clusters=[];
function addCluster(ids,basis,type='NEEDS_REVIEW',extra={}){
 const sorted=[...ids].sort((a,b)=>a-b), key=sorted.join('-');
 const old=clusters.find(c=>c.members.join('-')===key);
 if(old){old.candidate_basis=unique([...old.candidate_basis,basis]);if(type!=='NEEDS_REVIEW')Object.assign(old,{classification:type},extra);return old;}
 const c={cluster_id:'CL-'+sha256(key).slice(0,12),members:sorted,candidate_basis:[basis],classification:type,adjudication:type==='NEEDS_REVIEW'?'PENDING':'SOURCE_TEXT_ONLY',...extra};clusters.push(c);return c;
}
for(const g of normalizedTitles)addCluster(g.map(m=>m.id),'normalized_title');
for(const g of exactBodies)addCluster(g.map(m=>m.id),'exact_parsed_body','EXACT_DUPLICATE',{equality_scope:'parsed body after outer trim; not proof that all contextual responsibilities are identical'});
for(const p of [...lexicalPairs.values()].sort((a,b)=>a.ids[0]-b.ids[0]||a.ids[1]-b.ids[1]))addCluster(p.ids,'bounded_tfidf_lexical_candidate','NEEDS_REVIEW',{cosine:p.score,shared_terms:p.shared});
for(const d of decisions){
 const c=addCluster(d.ids,'explicit_source_review',d.type,{decision_id:d.id,canonical_owner_proposal:d.owner,reason:d.reason,unique_requirements:d.distinct,retained_requirements:d.requirements,adjudication:'SOURCE_TEXT_REVIEWED; broader contextual review pending'});
 c.comparison={title:d.ids.map(id=>byId.get(id).title),description_evidence:d.ids.map(id=>evidence(byId.get(id))),responsibility:d.reason,capability:d.owner,inputs:'See verbatim source and field extraction; unspecified values remain unknown.',outputs:'See verbatim source; no inferred clinical output is treated as fact.',workflow:d.distinct,data_ownership:'Proposed shared owner; no source module has been superseded.',dependencies:'Extracted mentions are evidence candidates, not validated runtime edges.',clinical_context:d.distinct,actors:'Only actors explicitly stated in source; external credentials not verified.'};
}
const clusterIndex=new Map();for(const c of clusters)for(const id of c.members){if(!clusterIndex.has(id))clusterIndex.set(id,[]);clusterIndex.get(id).push(c.cluster_id);}

const ownerMatchers=owners.map(o=>[o,new RegExp(o.pattern,'i')]);
const specialtyRe=/pediatric|paediatric|cardiol|pulmon|renal|nephro|neuro|endocrin|oncol|mental|psychiatr|obstetric|gyneco|gastro|dermato|ophthalm|neonat|hepat|rheumat|urolog|orthoped|otolaryng|immunolog|genetic/ig;
const allFHIR=unique(owners.flatMap(o=>o.entities).filter(e=>['Patient','Practitioner','Organization','PractitionerRole','AuditEvent','Provenance','Consent','Medication','MedicationStatement','MedicationRequest','MedicationDispense','MedicationAdministration','AllergyIntolerance','Condition','Observation','DiagnosticReport','Specimen','ImagingStudy','DocumentReference','Binary','Immunization','Encounter','Procedure','CarePlan','ServiceRequest','Appointment','Schedule','Slot','Communication','Device','DeviceMetric','Coverage','Claim','Invoice','ResearchStudy','ResearchSubject','RelatedPerson'].includes(e)));
function sections(body){
 const result={};let current=null;
 for(const raw of body.split('\n')){
  const s=raw.replace(/^#+\s*/,'').replace(/:\s*$/,'').trim();
  if(/^(purpose|inputs|outputs|integrations|integrates|dependencies|relationships|actors|permissions|events|workflow|supports|core functions|functions)$/i.test(s)){current=s.toLowerCase();result[current]??=[];continue;}
  if(/^#+ /.test(raw)||/^---+$/.test(s)||/^(status|future features|security|governance|lifecycle)$/i.test(s)){current=null;continue;}
  if(current&&s)result[current].push(s.replace(/^[•├└─\s-]+/,''));
 }
 return result;
}
const knownTitles=new Map(group(modules,m=>norm(m.title)).map(g=>[norm(g[0].title),g.map(x=>x.id)]));
const edges=[],unresolved=[];
const registry=modules.map(m=>{
 const r=reviewMap.get(m.id),text=m.title+'\n'+m.body;
 const titleOwners=ownerMatchers.filter(([,re])=>re.test(m.title)).map(([o])=>o.id);
 const bodyOwners=ownerMatchers.filter(([,re])=>re.test(m.body)).map(([o])=>o.id);
 const candidates=unique([...titleOwners,...bodyOwners]);
 let proposed=r?.owner??(titleOwners.length===1?titleOwners[0]:null);
 const selected=ownerMap.get(proposed);
 const sec=sections(m.body);
 const references=unique([...(sec.integrations??[]),...(sec.integrates??[]),...(sec.dependencies??[])]);
 const deps=references.map(ref=>{
  const targets=(knownTitles.get(norm(ref))??[]).filter(id=>id!==m.id);
  const caps=ownerMatchers.filter(([,re])=>re.test(ref)).map(([o])=>o.id);
  const item={mention:ref,original_targets:targets,capability_candidates:caps,resolution:targets.length===1?'EXACT_TITLE_MENTION_UNVERIFIED':targets.length>1?'AMBIGUOUS_TITLE':caps.length?'CAPABILITY_CANDIDATE':'UNRESOLVED',source:evidence(m)};
  if(targets.length===1)edges.push({from:`SRC-${m.id}`,to:`SRC-${targets[0]}`,type:'source_mention',validation:'UNVERIFIED_DEPENDENCY',evidence:ref});
  else unresolved.push({original_id:m.id,...item});
  return item;
 });
 const numericRefs=[...m.body.matchAll(/\bmodule\s+#?(\d{1,6})\b/ig)].map(x=>Number(x[1]));
 for(const id of numericRefs){if(byId.has(id))edges.push({from:`SRC-${m.id}`,to:`SRC-${id}`,type:'explicit_id_reference',validation:'TARGET_EXISTS_SEMANTICS_UNVERIFIED'});else unresolved.push({original_id:m.id,mention:`Module ${id}`,resolution:'MISSING_ID'});}
 const high=/dos(e|age)|prescri|drug.*interaction|contraindicat|pregnan|lactat|pediatric|paediatric|oncolog|\bicu\b|emergency|mental|psychiatr|suicid|surg|diagnos|treatment|therap|digital twin|interpret/i.test(text);
 const hasAI=/\bAI\b|artificial intelligence|machine learning/i.test(text),twin=/digital twin|simulat/i.test(text);
 const api=[...m.body.matchAll(/\b(GET|POST|PUT|PATCH|DELETE)\s+(\/[^\s\n]+)/g)].map(x=>({method:x[1],path:x[2],state:'HISTORICAL_UNVERIFIED'}));
 const ownerStage=selected?.stage==='MVP'&&!p0.has(m.id)?'POST_MVP':selected?.stage;
 const stage=twin?'RESEARCH':hasAI?'RESEARCH':/quantum|experimental/i.test(text)?'EXPERIMENTAL':/next generation|far.future/i.test(m.title)?'LONG_TERM':ownerStage??'LONG_TERM';
 const status=r?'REVIEWED':'NOT_REVIEWED';
 const fieldsEvidence=allFHIR.filter(e=>new RegExp('\\b'+e+'\\b','i').test(text));
 const specMatches=unique(m.title.match(specialtyRe)??[]).map(x=>x.toLowerCase());
 const layer=twin&&specMatches.length?'DIGITAL TWIN PROJECTION':specMatches.length?'SPECIALTY PROFILE':/portal|dashboard|interface|\bui\b/i.test(m.title)?'UI / PORTAL':/workflow/i.test(m.title)?'WORKFLOW':hasAI?'AI / CDS PROFILE':selected?.layer??null;
 return {
  original_id:m.id,module_id:`SRC-${String(m.id).padStart(4,'0')}`,title:m.title,normalized_title:norm(m.title),description:m.body,
  domain:selected?.name??null,subdomain:specMatches,capability:candidates,module_type:/table/i.test(m.title)?'DATA_MODEL_PROPOSAL':/api/i.test(m.title)?'API_PROPOSAL':/architecture|platform|hub/i.test(m.title)?'ARCHITECTURE_PROPOSAL':'CAPABILITY_PROPOSAL',architecture_layer:layer,
  canonical_owner:proposed,status:'HISTORICAL_SOURCE_PRESERVED',duplicate_of:null,supersedes:[],superseded_by:null,
  dependencies:deps,data_entities:selected?.entities??[],FHIR_resources:fieldsEvidence,API_dependencies:api,events:sec.events??[],
  AI_role:twin?'SIMULATION_OR_PREDICTION_CANDIDATE':hasAI?'UNREVIEWED_INFERENCE_OR_ASSISTANCE':null,
  clinical_risk:high?'HIGH_RISK_REVIEW_CANDIDATE':'UNASSESSED',privacy_risk:/mental|psychiatr|genetic|genom|reproductive|sexual|guardian|child|pediatric/i.test(text)?'SENSITIVE_SEGMENTATION_REVIEW':'UNASSESSED',security_level:'RESTRICTED_HEALTH_DATA_DEFAULT_PROPOSAL',
  jurisdiction_scope:unique([/cross.border|international|worldwide|global/i.test(text)?'CROSS_BORDER_CANDIDATE':'JURISDICTION_UNDECIDED',...(/\bGDPR\b/.test(text)?['GDPR_MENTION_NOT_COMPLIANCE']:[]),...(/\bHIPAA\b/.test(text)?['HIPAA_MENTION_NOT_COMPLIANCE']:[])]),
  MVP_status:p0.has(m.id)?'P0_INPUT_NOT_WHOLE_MODULE_APPROVAL':'NOT_APPROVED',roadmap_stage:stage,implementation_status:'NOT_IMPLEMENTED',source_reference:evidence(m),audit_status:status,audit_notes:[r?.note??'Machine inventory only; full source review pending.','Null/empty inferred fields mean UNKNOWN or not explicitly found, not no dependencies/risks.'],
  classification_basis:r?'SOURCE_REVIEW_OWNER_PROPOSAL':'HEURISTIC_CANDIDATES_ONLY',owner_candidates:candidates,owner_decision:proposed?'PROPOSED_NOT_CANONICALIZED':'UNRESOLVED',
  stage_basis:'PROPOSED conservative routing; P0 input is partial, never whole-module inclusion',P0_slice_candidate:p0.has(m.id)?{scope:'Only the subset already specified in docs/product/product-scope.md; the complete historical module is not approved.',stage:'MVP',validation:'REQUIRES_REQUIREMENT_MAPPING'}:null,source_sections:sec,cluster_ids:clusterIndex.get(m.id)??[],legacy_generation_candidate:legacy.some(x=>x.id===m.id),
  FHIR_mapping_candidates:selected?(selected.entities.filter(e=>allFHIR.includes(e))):[],FHIR_profiles:[],terminology_bindings:[],readiness:{reviewed:!!r,normalized:false,canonicalized:false,implementation_ready:false},
 };
});
const ledger=registry.map(m=>({original_id:m.original_id,audit_status:m.audit_status,...m.readiness,source_reference:m.source_reference,review:reviewMap.get(m.original_id)??null,history:[{date:edition,operation:'ACCOUNT_IMMUTABLE_BASELINE',before:'NOT_REVIEWED',after:'NOT_REVIEWED'},...(reviewMap.has(m.original_id)?[{date:edition,operation:'SOURCE_BODY_ARCHITECTURAL_REVIEW',before:'NOT_REVIEWED',after:'REVIEWED'}]:[])],open_gates:['NORMALIZATION','CANONICAL_OWNER_AND_REQUIREMENT_UNION','DEPENDENCY_CONTRACTS','CLINICAL_AND_PRIVACY_REVIEW','IMPLEMENTATION_SPECIFICATION']}));
const requirementInventory=modules.map(m=>({original_id:m.id,source:evidence(m),preserved_body:m.body,source_fragments:m.body.split(/\n\s*\n/).filter(Boolean).map((s,i)=>({fragment_id:`REQ-${m.id}-${i+1}`,text:s,sha256:sha256(s),canonical_destination:null,migration_status:'NOT_MIGRATED'}))}));
const changeMap=registry.map(m=>({original_id:m.original_id,module_id:m.module_id,action:reviewMap.get(m.original_id)?.action??'NEEDS_HUMAN_REVIEW',canonical_owner_proposal:m.canonical_owner,source_before:m.source_reference,proposed_after:'Pending canonical specification; source retained unchanged',decision_status:'PROPOSED_NOT_APPLIED',unique_requirements_preserved:'requirement_inventory.json / original_id '+m.original_id,destructive_operation_allowed:false,blockers:['Validate contextual duplicate cluster','Complete requirement-to-canonical mapping','Verify dependencies and safety gates'],gitlab_operations:[]}));
const gapRows=gaps.map(g=>{const re=new RegExp(g.search,'i');const matches=modules.filter(m=>re.test(m.title+'\n'+m.body));return {...g,existing_alternatives_checked:matches.map(m=>({original_id:m.id,title:m.title,source:evidence(m),review:reviewMap.has(m.id)?'SOURCE_REVIEWED':'LEXICAL_SEARCH_HIT_NOT_REVIEWED'})),overlap_analysis:'Existing related content found; no proven absent capability. Resolve against proposed owner before proposing new module.',architecture_layer:ownerMap.get(g.owner).layer,dependencies:ownerMap.get(g.owner).dependencies,risk:'HIGH_ARCHITECTURAL_GAP_CANDIDATE'};});
const reviewed=reviews.length;
const pct=n=>Number((n/5175*100).toFixed(4));
const progress={...meta,denominator:5175,accounted:5175,reviewed,normalized:0,canonicalized:0,implementation_ready:0,unaudited:5175-reviewed,canonical_modules:0,proposed_canonical_capabilities:owners.length,review_progress:pct(reviewed),normalization_progress:0,canonicalization_progress:0,implementation_readiness:0,overall_audit_progress:0,overall_method:'minimum(review, normalization, canonicalization, implementation readiness); conservative weakest-gate measure, not estimated labour completion',inventory_coverage:100,duplicate_counts:{exact_duplicate_groups:exactBodies.length,exact_duplicate_excess_ids:exactBodies.reduce((n,g)=>n+g.length-1,0),semantic_duplicate_groups:decisions.filter(d=>d.type==='SEMANTIC_DUPLICATE').length,semantic_duplicate_excess_ids:1,partial_overlap_groups:decisions.filter(d=>d.type==='PARTIAL_OVERLAP').length,specialty_projection_groups:decisions.filter(d=>d.type==='SPECIALTY_PROJECTION').length,legacy_generations_confirmed:0,legacy_generation_candidate_modules:legacy.length,unresolved_clusters:clusters.filter(c=>c.classification==='NEEDS_REVIEW').length},new_gap_candidates:gapRows.length,confirmed_new_gaps:0,new_canonical_module_proposals:0,critical_findings:findings.filter(f=>f.severity==='CRITICAL').length,high_findings:findings.filter(f=>f.severity==='HIGH').length,gitlab_write_status:'NO_WRITES_THIS_PASS',quality_gate:'NOT_COMPLETE'};
const manifest={...meta,source_file:sourceFile,bytes:bytes.length,sha256:sha256(bytes),encoding:'UTF-8',immutable:true,total_original_modules:modules.length,unique_original_ids:new Set(modules.map(m=>m.id)).size,missing_ids:[],repeated_ids:[],malformed_headings:malformedHeadings,empty_bodies:empty,preamble:{start_byte:0,end_byte_exclusive:spans[0].start_byte,sha256:sha256(bytes.subarray(0,spans[0].start_byte))},module_spans:spans};
const incoming=new Set(edges.map(e=>Number(e.to.replace('SRC-',''))));
const outgoing=new Set(edges.map(e=>Number(e.from.replace('SRC-',''))));
const noObservedLinks=modules.filter(m=>!incoming.has(m.id)&&!outgoing.has(m.id)).map(m=>m.id);
const graph={...meta,edge_direction:'dependent -> prerequisite / reference target',nodes:modules.map(m=>({id:`SRC-${m.id}`,original_id:m.id})),edges,proposed_capability_nodes:owners,proposed_capability_edges:owners.flatMap(o=>o.dependencies.map(d=>({from:o.id,to:d,type:'ARCHITECTURAL_PROPOSAL',validated:false}))),unresolved_references:unresolved,no_observed_explicit_links:noObservedLinks,orphan_interpretation:'No observed exact reference is not proof of a true architectural orphan; named/generic relationships are incomplete.',critical_dependencies_verified:0};

const outputs=new Map();
const json=(name,obj)=>outputs.set(name,JSON.stringify(obj,null,2)+'\n');
json('source_manifest.json',manifest);json('audit_ledger.json',{...meta,allowed_statuses:statuses,modules:ledger});
json('canonical_registry.json',{...meta,field_semantics:'All ownership/layer/roadmap/entity matches are proposals until reviewed and gated; FHIR_resources are literal mentions, FHIR_mapping_candidates are proposed mappings, empty profiles mean unspecified.',modules:registry});
const csvCell=x=>'"'+(typeof x==='object'?JSON.stringify(x):String(x??'')).replace(/"/g,'""')+'"';
// Quote every field; prefix formula-leading scalar cells to avoid spreadsheet formula execution.
const safeCsv=x=>typeof x==='string'&&/^[=+@\-\t\r]/.test(x)?"'"+x:x;
outputs.set('canonical_registry.csv','\uFEFF'+fields.join(',')+'\r\n'+registry.map(m=>fields.map(f=>csvCell(safeCsv(m[f]))).join(',')).join('\r\n')+'\r\n');
json('duplicate_clusters.json',{...meta,method:{title_groups:normalizedTitles.length,original_casefold_title_groups:originalTitleGroups.length,tfidf:'binary unigram TF-IDF with corpus document frequency, cosine >=0.68, >=4 shared non-boilerplate terms, top3 per module retrieved through 12 highest-IDF terms; terms occurring >350 modules omitted',candidate_comparisons:comparisons,lexical_pairs:lexicalPairs.size,limitation:'Not an embedding semantic search; no recall claim. Overlapping clusters are not summed as independent duplicate module counts. UNIQUE is never assigned merely for absence of lexical hits.'},allowed_classifications:['EXACT_DUPLICATE','SEMANTIC_DUPLICATE','PARTIAL_OVERLAP','SPECIALTY_PROJECTION','SHARED_CAPABILITY','LEGACY_GENERATION','UNIQUE','NEEDS_REVIEW'],clusters});
json('dependency_graph.json',graph);json('requirement_inventory.json',{...meta,policy:'Verbatim inventory preserves every requirement; it is not evidence that requirements were migrated or implemented.',modules:requirementInventory});
json('canonical_owners.json',{...meta,owners});json('review_decisions.json',{...meta,reviews,cluster_decisions:decisions});json('findings.json',{...meta,findings});json('gap_candidates.json',{...meta,gaps:gapRows});
json('change_map.json',{...meta,apply_enabled:false,batch_plan:[],changes:changeMap});json('audit_progress.json',progress);
json('review_queue.json',{...meta,ordering:'Unreviewed high clinical risk first, then duplicate cluster membership, then original ID; heuristic priority does not establish risk.',modules:registry.filter(m=>!m.readiness.reviewed).sort((a,b)=>(b.clinical_risk==='HIGH_RISK_REVIEW_CANDIDATE')-(a.clinical_risk==='HIGH_RISK_REVIEW_CANDIDATE')||b.cluster_ids.length-a.cluster_ids.length||a.original_id-b.original_id).map(m=>({original_id:m.original_id,title:m.title,clinical_risk:m.clinical_risk,cluster_ids:m.cluster_ids,source:m.source_reference}))});

outputs.set('audit_baseline.md',`# MASTER AUDIT — baseline\n\nДата: ${edition}. База: commit \`${baselineCommit}\`. Оригинал immutable.\n\n| Проверка | Результат |\n|---|---:|\n| TOTAL ORIGINAL MODULES | ${modules.length} |\n| Unique original IDs | ${manifest.unique_original_ids} |\n| Missing / repeated IDs | 0 / 0 |\n| Malformed headings / empty bodies | ${malformedHeadings.length} / ${empty.length} |\n| Casefold title groups (previous method) | ${originalTitleGroups.length} |\n| Normalized title groups (NFKC + punctuation) | ${normalizedTitles.length} |\n| Exact parsed-body groups | ${exactBodies.length} |\n| Bounded lexical pair candidates | ${lexicalPairs.size} |\n| Legacy/version marker candidates | ${legacy.length} |\n| Unresolved/ambiguous named reference entries | ${unresolved.length} |\n| Modules without observed exact dependency/reference links | ${noObservedLinks.length} |\n\nSHA-256: \`${sourceHash}\`; ${bytes.length} bytes. Byte ranges cover the original preamble plus every complete module block without loss. Source hash mismatch aborts generation.\n\nНеразрешённые references не обязательно сломанные ссылки: в исходнике часто перечислены общие названия систем без ID. Отсутствие явного ребра не доказывает orphan. Legacy markers — поисковые кандидаты, не доказательство supersede. ${findings.length} содержательных находок по ${reviewed} прочитанным модулям находятся в [findings.json](findings.json).\n\nПредыдущие 80 замен не считаются полной проверкой 63 модулей в этом ledger автоматически. Готовность пересчитана с нуля. 21% не используется. Полный корпус прошёл структурный/лексический анализ; содержательная проверка охватила только отмеченные REVIEWED ID.\n\n[Manifest](source_manifest.json) · [Ledger](audit_ledger.json) · [Registry](canonical_registry.json) · [Progress](audit_progress.json)\n`);
outputs.set('duplicate_report.md',`# Дубликаты и пересечения — проход 01\n\nВсего кандидатных групп/пар: ${clusters.length}; NEEDS_REVIEW: ${progress.duplicate_counts.unresolved_clusters}. Группы могут пересекаться. ${exactBodies.length} exact-body группы означают ${progress.duplicate_counts.exact_duplicate_excess_ids} повторных ID относительно одного экземпляра на группу, а не потерю ID.\n\n| Решение | ID | Класс | Вывод |\n|---|---|---|---|\n${decisions.map(d=>`| ${d.id} | ${d.ids.join(', ')} | ${d.type} | ${d.reason} |`).join('\n')}\n\nСовпадение title автоматически не закрывает модуль. Cosine используется только для очереди; semantic classification выдана лишь после чтения полных тел 36 и 95. Exact body не решает вопрос контекста соседних поколений. Иерархические платформы, таблицы, API и specialty projections сравниваются по ответственности и уникальным требованиям.\n\nДля всех исходных ID сохранены verbatim body и фрагменты в [requirement_inventory.json](requirement_inventory.json). Для проверенных групп дополнительные требования перечислены в [review_decisions.json](review_decisions.json). Полного переноса каждого фрагмента в canonical specification ещё нет: duplicate_of/superseded_by остаются null, CLOSE_AS_DUPLICATE не разрешён.\n\nКандидаты legacy/version: ${legacy.length}; подтверждённых поколений: 0. Не выводить chronology из величины module_id. Для продолжения проверить внешние ссылки, соседние секции и происхождение каждого варианта.\n`);
outputs.set('gap_analysis.md',`# Gap analysis\n\nНовых исходных ID или доказанно отсутствующих capabilities не создано. ${gaps.length} gap-кандидатов — недоопределённые контракты, которые могут быть завершены в уже существующих владельцах.\n\n| ID | Проблема / владелец | Совпадений в 5175 | Следующее действие |\n|---|---|---:|---|\n${gapRows.map(g=>`| ${g.id} | ${g.problem} ${g.owner} | ${g.existing_alternatives_checked.length} | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |`).join('\n')}\n\nПолные search expressions, найденные original_id, provenance, architecture layer, dependencies, risks и stages сохранены в [gap_candidates.json](gap_candidates.json). Лексическое попадание не равно содержательной проверке альтернативы. Статус NEW_CANONICAL_MODULE_PROPOSAL запрещён до завершения этой проверки и архитектурного обоснования.\n`);
outputs.set('MASTER_AUDIT_REPORT.md',`# EDHT MASTER AUDIT — проход 01\n\nПервый проход сохранён локально; полный MASTER AUDIT не завершён. GitLab mutations не выполнялись. Исходные 5175 ID учтены и побайтный baseline сохранён.\n\n| Метрика | Значение |\n|---|---:|\n| SOURCE MODULES | 5175 |\n| ACCOUNTED | 5175 |\n| REVIEWED | ${reviewed} |\n| NORMALIZED | 0 |\n| CANONICALIZED | 0 |\n| IMPLEMENTATION_READY | 0 |\n| UNAUDITED | ${5175-reviewed} |\n| CANONICAL MODULES | 0; ${owners.length} владельцев предложено |\n| EXACT DUPLICATES | ${exactBodies.length} группы / ${progress.duplicate_counts.exact_duplicate_excess_ids} повторных ID |\n| SEMANTIC DUPLICATES | 1 группа (36, 95), text-intent review |\n| PARTIAL OVERLAPS | ${progress.duplicate_counts.partial_overlap_groups} группы |\n| LEGACY GENERATIONS | 0 подтверждено / ${legacy.length} marker-кандидатов |\n| NEW GAPS | 0 подтверждено / ${gapRows.length} кандидатов |\n| CRITICAL FINDINGS | ${progress.critical_findings} |\n| HIGH FINDINGS | ${progress.high_findings} |\n| GITLAB WRITE STATUS | NO_WRITES_THIS_PASS |\n| REVIEW PROGRESS | ${progress.review_progress}% |\n| NORMALIZATION PROGRESS | 0% |\n| OVERALL AUDIT PROGRESS | 0% по минимуму обязательных gates |\n\nАвтоматическая инвентаризация не повышает содержательную готовность. REVIEWED означает полное чтение исходного блока и записанный архитектурный вывод, а не независимую клиническую экспертизу. Все поля с эвристическими значениями явно помечены как предложения; неизвестные значения не подменены вымышленными контрактами.\n\n## Полученный результат\n\n- Baseline/manifest с SHA-256, byte/line spans для каждого ID.\n- Ledger и JSON/CSV registry на 5175 ID, полные исходные descriptions и открытые gates.\n- ${clusters.length} duplicate/overlap групп/пар; ${decisions.length} содержательных решений, ${progress.duplicate_counts.unresolved_clusters} кандидатных кластеров ещё не разрешены.\n- ${owners.length} proposed shared owners, reference graph, data/AI/twin/clinical/security/interoperability findings.\n- Change Map на каждый ID, verbatim requirement inventory, ${gaps.length} gap search dossiers.\n- ${findings.length} открытых архитектурных gates: часть пересматривает ранее исправленные формулировки на уровне будущей реализации.\n\n## Quality gates\n\nУчёт ID, целостность оригинала и machine registry проверяются автоматически. Остальные обязательные gates — разрешение всех clusters, canonical owners, critical dependencies, high-risk clinical content, AI/privacy/interoperability и full requirement migration — остаются открыты. Canonical specifications и инженерная реализация не готовы.\n\n## NEXT SAFE ACTION\n\nВзять первые 25 ID из [review_queue.json](review_queue.json), прочитать полные тела и соседние поколения; добавить per-ID decisions в config/master-audit.mjs. Для групп 36/95, 30/227/1924 и exact pairs подготовить полноценные canonical specs с картой каждого уникального фрагмента, затем пройти gates. Выполнить node scripts/master-audit.mjs и node scripts/master-audit.mjs --check. GitLab APPLY по-прежнему выключен.\n\n[Baseline](audit_baseline.md) · [Progress](audit_progress.json) · [Change Map](change_map.json) · [Checkpoint](CHECKPOINT.md)\n`);

function validate(){
 if(new Set(reviews.map(r=>r.id)).size!==reviews.length)throw Error('Repeated review ID');
 for(const r of reviews)if(!byId.has(r.id)||!ownerMap.has(r.owner)||!r.note)throw Error('Invalid review');
 for(const rows of [registry,ledger,changeMap,requirementInventory])if(rows.length!==5175||rows.some((m,i)=>m.original_id!==i+1))throw Error('Lost/repeated/reordered ID');
 for(const m of registry){for(const f of fields)if(!(f in m))throw Error('Missing registry field '+f);if(m.description!==byId.get(m.original_id).body)throw Error('Description loss');if(!statuses.includes(m.audit_status))throw Error('Unknown audit status');if(m.canonical_owner&&!ownerMap.has(m.canonical_owner))throw Error('Dangling owner');if(m.readiness.reviewed!==reviewMap.has(m.original_id))throw Error('Inflated review');if(m.duplicate_of||m.superseded_by)throw Error('Premature destructive classification');}
 for(let i=0;i<spans.length;i++){const s=spans[i];if(i&&spans[i-1].end_byte_exclusive!==s.start_byte)throw Error('Source gap');if(sha256(bytes.subarray(s.start_byte,s.end_byte_exclusive))!==s.block_sha256)throw Error('Span hash');}if(spans.at(-1).end_byte_exclusive!==bytes.length)throw Error('Source tail loss');
 for(const c of clusters)if(c.members.some(id=>!byId.has(id))||new Set(c.members).size!==c.members.length)throw Error('Invalid cluster member');
 const visit=(id,active=new Set(),done=new Set())=>{if(active.has(id))throw Error('Proposed capability dependency cycle '+id);if(done.has(id))return;active.add(id);for(const d of ownerMap.get(id).dependencies){if(!ownerMap.has(d))throw Error('Dangling dependency');visit(d,active,done);}active.delete(id);done.add(id);};for(const o of owners)visit(o.id);
 if(ledger.filter(m=>m.reviewed).length!==progress.reviewed||progress.unaudited+progress.reviewed!==5175)throw Error('Progress mismatch');
 return {result:'PASS',checks:['5175 IDs across source/registry/ledger/change map/requirements','Immutable source hash and contiguous byte spans','Verbatim descriptions preserved','Required registry fields/status enum','Review count based on explicit source decisions','All cluster member IDs valid','Proposed owner graph no missing targets or cycles','No supersede/duplicate writes','Deterministic artifacts'],counts:{modules:5175,reviewed,owners:owners.length,clusters:clusters.length,source_reference_edges:edges.length,unresolved_reference_entries:unresolved.length}};
}
const validation=validate();
json('validation.json',{...meta,...validation});
const check=process.argv.includes('--check');
if(!check)fs.mkdirSync(out,{recursive:true});
for(const [name,data] of outputs){const file=path.join(out,name);if(check){if(!fs.existsSync(file)||fs.readFileSync(file,'utf8')!==data)throw Error('Artifact drift: '+name);}else fs.writeFileSync(file,data,'utf8');}
console.log(JSON.stringify({mode:check?'CHECK':'BUILD',...validation,progress},null,2));
