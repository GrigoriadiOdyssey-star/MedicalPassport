import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseModules,sha256} from '../scripts/catalog-lib.mjs';
import {assertAccounting,assertGraph,assertCounters} from '../scripts/gapfill-lib.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=n=>JSON.parse(fs.readFileSync(path.join(root,'audit/pediatric-02',n),'utf8'));
const source=()=>parseModules(fs.readFileSync(path.join(root,'sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md'),'utf8'));
test('pediatric review counts only frozen full-body evidence and preserves prior reviewed IDs',()=>{
 const frozen=JSON.parse(fs.readFileSync(path.join(root,'config/pediatric-reviewed-source.json'),'utf8'));
 const old=JSON.parse(fs.readFileSync(path.join(root,'audit/gapfill/audit_ledger.json'),'utf8')).modules;
 const reviews=read('review_evidence.json').reviews,ledger=read('audit_ledger.json').modules,registry=read('canonical_registry.json').modules;
 const expected=new Set([...old.filter(m=>m.reviewed).map(m=>m.original_id),...frozen.modules.map(m=>m.original_id)]);
 assert.equal(reviews.length,315);assert.equal(expected.size,741);
 const ms=new Map(source().map(m=>[m.id,m]));
 for(const r of reviews){assert.equal(r.body,ms.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 for(const r of ledger)assert.equal(r.reviewed,expected.has(r.original_id));
 const a=assertAccounting([...ms.keys()],ledger,registry);assert.equal(a.reviewed,741);assert.equal(a.unaudited,4434);assert.equal(a.normalized,0);
 assertCounters(read('audit_progress.json'));
});
test('every nonempty source line survives exactly once per profile including paragraphs and safety rules',()=>{
 const ms=new Map(source().map(m=>[m.id,m])),mappings=read('requirement_traceability.json').mappings;
 const seen=new Set();for(const m of mappings){const key=m.target_module+'|'+m.source_fragment_id;assert.ok(!seen.has(key));seen.add(key);assert.equal(m.source_fragment_sha256,sha256(m.source_text));assert.equal(m.approved,false);}
 for(const p of read('canonical_profiles.json').profiles){
  const appendix=fs.readFileSync(path.join(root,'audit/pediatric-02',p.requirements_document),'utf8');assert.equal(p.approved,false);
  for(const id of p.source_ids){
   assert.ok(appendix.includes(ms.get(id).body));
   for(const [i,text] of ms.get(id).body.split('\n').entries())if(text.trim()){
    const rows=mappings.filter(m=>m.target_module===p.id&&m.source_fragment_id==='SRC-'+id+'-L'+(i+1));assert.equal(rows.length,1);assert.equal(rows[0].source_text,text);
   }
  }
 }
 assert.equal(mappings.length,6665);
});
test('same-title IVIG/SCIG and SCIT/SLIT concepts stay separate',()=>{
 const d=read('semantic_diffs.json').decisions.find(d=>d.id==='PED2-IMMUNOTHERAPY-HOMONYM');
 assert.equal(d.classification,'DISTINCT_CAPABILITIES');assert.equal(d.target_profile,null);assert.equal(d.apply,false);
 assert.match(d.source_records.find(r=>r.source_id===996).body,/IVIG/);assert.match(d.source_records.find(r=>r.source_id===1118).body,/SCIT/);
 const reg=read('canonical_registry.json').modules;for(const id of [996,1118]){assert.equal(reg[id-1].duplicate_of,null);assert.equal(reg[id-1].superseded_by,null);}
});
test('semantic consolidations retain full bodies without closing source IDs',()=>{
 const ms=new Map(source().map(m=>[m.id,m]));
 const ds=read('semantic_diffs.json').decisions;assert.equal(ds.length,32);
 for(const d of ds){assert.equal(d.approved_migration,false);assert.deepEqual(d.migrated_requirements,[]);for(const s of d.source_records){assert.equal(s.body,ms.get(s.source_id).body);assert.equal(s.provenance.body_sha256,sha256(s.body));}}
 const p=read('audit_progress.json');assert.equal(p.duplicate_counts.source_ids_closed,0);assert.equal(p.CANONICALIZED,0);assert.equal(p.GENERATED_CANONICAL_MODULES,15);assert.equal(p.NEW_GAP_MODULES,0);
});
test('pediatric matrix gains explicit congenital context without inventing clinical completeness',()=>{
 const m=read('pediatric_coverage_evidence.json');assert.equal(m.cells.length,589);assert.equal(m.context_additions.length,62);
 assert.ok(m.cells.some(c=>c.specialty==='Cardiology'&&c.source_ids.includes(844)));
 for(const c of m.cells){assert.equal(c.confirmed_gap,false);assert.equal(c.clinically_validated,false);assert.equal(new Set(c.source_ids).size,c.source_ids.length);}
});
test('adrenal retrieval correction retains endocrine source coverage and original IDs',()=>{
 const ids=read('audit_corrections.json').corrections.find(c=>c.id==='PED2-RETRIEVAL-02').excluded_nephrology_candidates;
 assert.equal(ids.length,13);const domains=read('domain_coverage.json').domains;
 for(const id of ids){assert.ok(!domains.find(d=>d.domain==='Nephrology').source_ids.includes(id));assert.ok(domains.find(d=>d.domain==='Endocrinology').source_ids.includes(id));}
 assert.equal(read('canonical_registry.json').modules.length,5175);
});
test('profile graph and documentation hashes remain reproducible',()=>{
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 for(const p of read('canonical_profiles.json').profiles)assert.ok(g.nodes.some(n=>n.id===p.id));
 for(const d of read('authored_documents_manifest.json').documents)assert.equal(sha256(fs.readFileSync(path.join(root,'audit/pediatric-02',d.path))),d.sha256);
 const c=read('count_reconciliation.json');assert.equal(c.generated_non_source_records.total_design_records,48);assert.equal(c.supporting_artifacts,c.supporting_artifact_paths.length);
 for(const f of c.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/pediatric-02',f)));
});
test('clinical source safeguards remain in the proposed profile appendices',()=>{
 const mappings=read('requirement_traceability.json').mappings;
 for(const [id,needle] of [[3079,'fetal diagnosis'],[4418,'Previous records remain traceable'],[4579,'specialist critical-care'],[4591,'without punitive'],[4599,'Confirmation'],[4832,'autonomy'],[5153,'clinician-observed'],[5167,'Restricted Session-note Layer'],[5170,'relatives remains'],[5174,'coercive-care']])assert.ok(mappings.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
});
