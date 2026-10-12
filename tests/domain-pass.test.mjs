import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseModules,sha256} from '../scripts/catalog-lib.mjs';
import {assertCanonicalMigration,normalizeLine} from '../scripts/canonical-lib.mjs';
import {assertAccounting,assertGraph,assertCounters} from '../scripts/gapfill-lib.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const json=n=>JSON.parse(fs.readFileSync(path.join(root,n),'utf8'));
const read=n=>json('audit/domain-03/'+n);
const sources=json('audit/pediatric-02/canonical_registry.json').modules;
const fixture=()=>({sources:structuredClone(sources),normalized:read('normalized_source_records.json').records,canonical:read('active_canonical_records.json').records,mappings:read('requirement_migration.json').mappings,aliases:read('canonical_aliases.json').aliases,owners:json('audit/master/canonical_owners.json').owners.map(o=>o.id)});

test('domain review adds 359 unique full-body records without repeating prior 741',()=>{
 const prior=new Set(json('audit/pediatric-02/audit_ledger.json').modules.filter(r=>r.reviewed).map(r=>r.original_id));
 const manifest=read('source_review_manifest.json');
 const reviews=manifest.domain_manifests.flatMap(n=>read(n).reviews);
 const modules=parseModules(fs.readFileSync(path.join(root,'sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md'),'utf8'));
 const byId=new Map(modules.map(m=>[m.id,m]));
 assert.equal(prior.size,741);assert.equal(reviews.length,359);assert.equal(new Set(reviews.map(r=>r.original_id)).size,359);
 for(const r of reviews){assert.ok(!prior.has(r.original_id));assert.equal(r.body,byId.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 const expected=new Set([...prior,...reviews.map(r=>r.original_id)]);
 for(const r of read('audit_ledger.json').modules)assert.equal(r.reviewed,expected.has(r.original_id));
});

test('canonical migration preserves 503 source fragments across 30 IDs and ten documents',()=>{
 assert.deepEqual(assertCanonicalMigration(fixture()),{normalized:30,canonicalized:30,retained_fragments:503,canonical_documents:10});
});
test('migration validator rejects lost legacy fragments and altered target requirements',()=>{
 const missing=fixture();missing.mappings.pop();assert.throws(()=>assertCanonicalMigration(missing),/Lost or extra/);
 const changed=fixture(),m=changed.mappings.find(m=>m.target_record_id.includes('-R-'));
 changed.canonical.find(c=>c.id===m.target_module).requirements.find(r=>r.id===m.target_record_id).text='Replacement omitting a legacy requirement';
 assert.throws(()=>assertCanonicalMigration(changed),/not preserved/);
});
test('migration validator rejects duplicate aliases and wrong owners',()=>{
 const duplicate=fixture();duplicate.aliases.push(duplicate.aliases[0]);assert.throws(()=>assertCanonicalMigration(duplicate),/Alias mismatch/);
 const wrong=fixture();wrong.normalized[0].canonical_owner='CAP-AUDIT';assert.throws(()=>assertCanonicalMigration(wrong),/owner mismatch/);
});
test('migration validator rejects unreviewed sources, changed source hashes and clinical approval inflation',()=>{
 const unreviewed=fixture();unreviewed.sources.find(s=>s.original_id===unreviewed.normalized[0].original_id).readiness.reviewed=false;assert.throws(()=>assertCanonicalMigration(unreviewed),/not previously reviewed/);
 const drift=fixture();drift.normalized[0].source_sha256='changed';assert.throws(()=>assertCanonicalMigration(drift),/hash mismatch/);
 const inflated=fixture();inflated.canonical[0].clinical_approval=true;assert.throws(()=>assertCanonicalMigration(inflated),/Unsupported approval/);
});
test('published canonical documents match hashes and every mapped target anchor',()=>{
 const f=fixture();
 for(const c of f.canonical){
  const document=fs.readFileSync(path.join(root,c.document),'utf8');assert.equal(sha256(document),c.document_sha256);
  for(const r of [...c.requirements,...c.source_metadata]){assert.ok(document.includes('<a id="'+r.id+'"></a>'));assert.ok(document.includes(r.text));}
 }
 for(const m of f.mappings){assert.equal(m.migration_state,'APPLIED_DOCUMENTATION_MAPPING');assert.equal(m.clinical_approval,false);assert.equal(m.text,normalizeLine(m.source_text));}
});
test('cumulative stage counts remain distinct from clinical readiness and exclusive statuses',()=>{
 const p=read('audit_progress.json'),ledger=read('audit_ledger.json').modules,registry=read('canonical_registry.json').modules;
 const a=assertAccounting(sources.map(s=>s.original_id),ledger,registry);assertCounters(p);
 assert.equal(a.reviewed,1100);assert.equal(a.unaudited,4075);assert.equal(a.normalized,30);assert.equal(a.canonicalized,30);
 assert.equal(p.exclusive_status_counts.REVIEWED_ONLY,1070);assert.equal(p.exclusive_status_counts.CANONICALIZED,30);
 assert.equal(p.AUDIT_WORK_PROGRESS,Number((100*(1100+30+30)/(3*5175)).toFixed(4)));
 assert.equal(p.GAP_FILL_VALIDATED,0);assert.equal(p.IMPLEMENTATION_READY,0);assert.equal(p.OVERALL_PRODUCT_BIBLE_PROGRESS,0);
 for(const r of registry){assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);assert.equal(r.description,sources.find(s=>s.original_id===r.original_id).description);}
});
test('adopted contracts use prior semantic comparisons and acyclic owner dependencies',()=>{
 const semantic=json('audit/pediatric-02/semantic_diffs.json').decisions;
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 for(const c of fixture().canonical){const d=semantic.find(d=>d.id===c.semantic_decision);assert.equal(d.classification,'PARTIAL_OVERLAP');assert.deepEqual(c.source_ids,d.source_ids);assert.ok(g.nodes.some(n=>n.id===c.id));}
 const count=read('count_reconciliation.json');assert.equal(count.supporting_artifacts,count.supporting_artifact_paths.length);
 for(const n of count.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/domain-03',n)));
});
test('unique allergy history, handover confirmation and restricted therapy notes survive adoption',()=>{
 const rows=fixture().mappings;
 for(const [id,needle] of [[4418,'Previous records remain traceable'],[4599,'Confirmation'],[5167,'Restricted Session-note Layer']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
});
