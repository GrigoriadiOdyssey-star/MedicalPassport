import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {census,assertAccounting,assertGraph,assertOwners,assertNonempty,assertMVP,assertSafety,assertCounters,assertEvidenceEnvelope,duplicateTitles,assertCandidateReport,csvCell} from '../scripts/gapfill-lib.mjs';
import {sha256,parseModules} from '../scripts/catalog-lib.mjs';
import {extensions} from '../config/gapfill.mjs';

test('gap-fill CSV round trip preserves all original descriptions and status columns',()=>{
 const input=fs.readFileSync(path.join(root,'audit/gapfill/canonical_registry.csv'),'utf8').replace(/^\uFEFF/,'');
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<input.length;i++){
  const c=input[i];
  if(c==='"'){if(quoted&&input[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(cell);cell='';}
  else if(c==='\n'&&!quoted){row.push(cell);rows.push(row);row=[];cell='';}
  else cell+=c;
 }
 assert.equal(quoted,false);assert.equal(cell,'');const [columns,...values]=rows;
 const registry=read('canonical_registry.json').modules;assert.equal(values.length,5175);
 values.forEach((cells,i)=>{assert.equal(cells.length,columns.length);columns.forEach((key,j)=>{
  const v=registry[i][key];let expected=typeof v==='object'?JSON.stringify(v):String(v??'');
  if(typeof v==='string'&&/^[=+@\-\t\r]/.test(v))expected="'"+expected;
  assert.equal(cells[j],expected,'row '+i+' '+key);
 });});
});
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=n=>JSON.parse(fs.readFileSync(path.join(root,'audit/gapfill',n),'utf8'));
const fixture=()=>({ids:[1,2],ledger:[1,2].map(original_id=>({original_id,exclusive_status:'NOT_REVIEWED',reviewed:false,normalized:false,canonicalized:false,implementation_ready:false})),registry:[1,2].map(original_id=>({original_id,exclusive_status:'NOT_REVIEWED'}))});
const accounting=f=>assertAccounting(f.ids,f.ledger,f.registry);

test('census distinguishes unsupported expected tail from missing observed IDs',()=>{
 const x=census(Array.from({length:5175},(_,i)=>i+1),51075);
 assert.equal(x.actual_source_count,5175);assert.equal(x.count_discrepancy,45900);
 assert.deepEqual(x.missing_ids,[]);assert.deepEqual(x.duplicate_ids,[]);
 assert.equal(x.expected_but_not_evidenced_range.count,45900);
 const broken=census([1,3,3],51075);assert.deepEqual(broken.missing_ids,[2]);assert.deepEqual(broken.duplicate_ids,[3]);
 assert.throws(()=>census([0],3),/invalid original_id/);
});

test('accounting rejects source/ledger/registry duplicates and missing IDs',()=>{
 assert.equal(accounting(fixture()).accounted_count,2);
 for(const field of ['ledger','registry']){
  let f=fixture();f[field].push({...f[field][0]});assert.throws(()=>accounting(f),/duplicate/);
  f=fixture();f[field].pop();assert.throws(()=>accounting(f),/missing/);
 }
 const f=fixture();f.ids=[1,1];assert.throws(()=>accounting(f),/duplicate source/);
});

test('generated records cannot enter original registry as orphans',()=>{
 for(const field of ['ledger','registry']){const f=fixture();f[field][0].original_id='EXT-AI';assert.throws(()=>accounting(f),/orphan/);}
});

test('exclusive status and stage evidence must agree across ledger and registry',()=>{
 let f=fixture();f.ledger[0].exclusive_status='REVIEWED_ONLY';assert.throws(()=>accounting(f),/contradiction/);
 f=fixture();f.ledger[0].normalized=true;assert.throws(()=>accounting(f),/normalization without evidence/);
 f=fixture();f.registry[0].exclusive_status='NORMALIZED';assert.throws(()=>accounting(f),/status mismatch/);
 f=fixture();f.ledger[0].exclusive_status='DUPLICATE';assert.throws(()=>accounting(f),/migration evidence/);
 f=fixture();f.ledger[0].reviewed=true;assert.throws(()=>accounting(f),/review without evidence/);
});

test('dependency validator rejects dangling targets, duplicate nodes and cycles',()=>{
 const nodes=['A','B','C'].map(id=>({id}));
 assert.equal(assertGraph(nodes,[{from:'A',to:'B'},{from:'B',to:'C'}]),true);
 assert.throws(()=>assertGraph(nodes,[{from:'A',to:'Z'}]),/broken dependency/);
 assert.throws(()=>assertGraph(nodes,[{from:'A',to:'B'},{from:'B',to:'A'}]),/circular/);
 assert.throws(()=>assertGraph([...nodes,{id:'A'}],[]),/duplicate graph node/);
});

test('unknown owners are rejected while unresolved owners remain explicit',()=>{
 assert.deepEqual(assertOwners([{canonical_owner:null}],['CAP-AI']),{unresolved:1});
 assert.throws(()=>assertOwners([{canonical_owner:'MADE-UP'}],['CAP-AI']),/unknown canonical owner/);
});

test('empty source descriptions and titles fail validation',()=>{
 assertNonempty([{title:'Source',description:'Requirement'}]);
 for(const row of [{title:' ',description:'Requirement'},{title:'Source',description:''}])assert.throws(()=>assertNonempty([row]),/empty module/);
});

test('title matches are inventory evidence rather than automatic semantic closures',()=>{
 const groups=duplicateTitles([{original_id:1,title:' Drug  Response '},{original_id:2,title:'drug response'},{original_id:3,title:'drug risk'}]);
 assert.equal(groups.length,1);assert.deepEqual(groups[0].original_ids,[1,2]);assert.match(groups[0].meaning,/NOT_SEMANTIC/);
});

test('semantic report rejects non-source, single and repeated members',()=>{
 assertCandidateReport([{cluster_id:'C',members:[1,2]}],[1,2]);
 for(const members of [[1],[1,1],[1,3]])assert.throws(()=>assertCandidateReport([{cluster_id:'C',members}],[1,2]),/invalid semantic candidate/);
 assert.throws(()=>assertCandidateReport([{cluster_id:'C',members:[1,2]},{cluster_id:'C',members:[1,2]}],[1,2]),/duplicate candidate/);
});

test('historical MVP flags cannot expand the authorized P0 slice',()=>{
 assertMVP([{original_id:1,roadmap_stage:'MVP'}],[1]);
 assert.throws(()=>assertMVP([{original_id:2,roadmap_stage:'MVP'}],[1]),/unapproved historical MVP/);
});

test('each prohibited high-risk declaration is detected',()=>{
 assertSafety(extensions);
 for(const field of Object.keys(extensions[0].clinical_safety)){
  const bad=structuredClone(extensions[0]);bad.clinical_safety[field]=!bad.clinical_safety[field];
  assert.throws(()=>assertSafety([bad]),/unsafe high-risk/);
 }
 const bad=structuredClone(extensions[0]);bad.roadmap_stage='MVP';assert.throws(()=>assertSafety([bad]),/incorrectly promoted/);
});

test('progress rejects generated count inflation, stage inconsistency and draft-as-closure',()=>{
 const p=read('audit_progress.json');assertCounters(p);
 for(const [key,value] of [['ACCOUNTED_SOURCE_MODULES',5182],['REVIEW_PROGRESS',100],['CANONICALIZED',7],['GAP_FILL_PROGRESS',100],['OVERALL_PRODUCT_BIBLE_PROGRESS',100],['REVIEWED',-1]]){
  assert.throws(()=>assertCounters({...p,[key]:value}));
 }
 const q=structuredClone(p);q.exclusive_status_counts.REVIEWED_ONLY++;assert.throws(()=>assertCounters(q),/exclusive counts/);
});

test('derived epistemic states cannot authorize writes to clinical facts',()=>{
 for(const epistemic_status of ['INFERRED','PREDICTED','SIMULATED']){
  assertEvidenceEnvelope({epistemic_status,clinical_fact_write_allowed:false});
  assert.throws(()=>assertEvidenceEnvelope({epistemic_status,clinical_fact_write_allowed:true}),/derived output/);
 }
 assert.throws(()=>assertEvidenceEnvelope({epistemic_status:'CERTAIN'}),/unknown epistemic/);
});

test('connector approval, model fallback and research release cannot bypass metadata gates',()=>{
 const x={kind:'CONNECTOR_MAPPING',epistemic_status:'REPORTED',target:'CLINICAL_SOURCE_OF_TRUTH',validation_state:'VALIDATED',approval_state:'APPROVED'};
 assertEvidenceEnvelope(x);
 for(const key of ['validation_state','approval_state'])assert.throws(()=>assertEvidenceEnvelope({...x,[key]:'PENDING'}),/unvalidated mapping/);
 assert.throws(()=>assertEvidenceEnvelope({kind:'MODEL_ROUTE',epistemic_status:'REPORTED',route_validation_state:'UNREVIEWED'}),/unapproved model/);
 assert.throws(()=>assertEvidenceEnvelope({kind:'RESEARCH_RELEASE',epistemic_status:'REPORTED',disclosure_review:'APPROVED'}),/without governance/);
});

test('CSV escaping preserves multiline content and neutralizes formula prefixes',()=>{
 assert.equal(csvCell('=1+1'),'"\'=1+1"');
 assert.equal(csvCell('line one\n"line two"'),'"line one\n""line two"""');
 assert.equal(csvCell(-2),'"-2"');
});

test('frozen reviewed batch retains complete source bodies and independent source hashes',()=>{
 const source=fs.readFileSync(path.join(root,'sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md'));
 assert.equal(sha256(source),'da6bd421441f58d2b759f3edf8d5b54c415f0e4544968d162cb352da59a6e835');
 const modules=new Map(parseModules(source.toString('utf8')).map(m=>[m.id,m]));
 const evidence=read('review_evidence.json');assert.equal(evidence.reviews.length,366);assert.equal(evidence.distinct_new_reviewed_ids,352);
 for(const r of evidence.reviews){assert.equal(r.retained_original_body,modules.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.retained_original_body));}
 const p=read('audit_progress.json');assert.equal(p.REVIEWED,450);assert.equal(p.REVIEWED+p.UNAUDITED,5175);
});

test('semantic decisions preserve both complete source bodies and never apply a migration',()=>{
 const source=new Map(read('canonical_registry.json').modules.map(r=>[r.original_id,r.description]));
 const decisions=read('semantic_diffs.json').decisions;assert.equal(decisions.length,8);
 for(const d of decisions){assert.equal(d.apply,false);assert.deepEqual(d.migrated_requirements,[]);for(const r of d.proposed_retained_requirements){assert.equal(r.body,source.get(r.source_id));assert.equal(r.provenance.body_sha256,sha256(r.body));}}
});

test('pediatric 31 by 19 matrix carries source evidence and no auto-created gaps',()=>{
 const x=read('pediatric_coverage_evidence.json');assert.equal(x.cells.length,31*19);
 assert.equal(new Set(x.cells.map(c=>c.specialty+'|'+c.dimension)).size,589);
 const owners=JSON.parse(fs.readFileSync(path.join(root,'audit/master/canonical_owners.json'),'utf8')).owners.map(o=>o.id);
 for(const c of x.cells){assert.equal(c.confirmed_gap,false);assert.ok(owners.includes(c.shared_owner_candidate));for(const id of c.source_ids)assert.ok(Number.isInteger(id)&&id>=1&&id<=5175);if(c.state==='SHARED_REVIEW_REQUIRED')assert.equal(c.source_ids.length,0);}
});

test('canonical drafts and supporting artifacts never increase original source count',()=>{
 const p=read('audit_progress.json'),c=read('count_reconciliation.json');
 assert.equal(p.GENERATED_CANONICAL_MODULES,10);assert.equal(p.NEW_GAP_MODULES,0);assert.equal(c.generated_non_source_records.total_non_source_design_records,43);
 assert.equal(read('audit_ledger.json').modules.length,5175);assert.equal(read('canonical_registry.json').modules.length,5175);
 assert.equal(read('new_modules_registry.json').modules.length,0);
 assert.equal(p.SUPPORTING_ARTIFACTS,c.supporting_artifact_paths.length);
 for(const name of c.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/gapfill',name)));
 for(const d of read('authored_documents_manifest.json').documents)assert.equal(sha256(fs.readFileSync(path.join(root,'audit/gapfill',d.path))),d.sha256);
});
