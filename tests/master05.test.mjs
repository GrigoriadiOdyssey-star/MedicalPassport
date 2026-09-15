import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {sha256,parseModules} from '../scripts/catalog-lib.mjs';
import {assertCanonicalMigration} from '../scripts/canonical-lib.mjs';
import {assertAccounting,assertCounters,assertGraph} from '../scripts/gapfill-lib.mjs';
import {assertReadiness,assertGapIntegration} from '../scripts/master04-lib.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const text=n=>fs.readFileSync(path.join(root,n),'utf8'),j=n=>JSON.parse(text(n)),read=n=>j('audit/master-05/'+n);
const prev=j('audit/master-04/canonical_registry.json').modules;
const f=()=>({sources:read('canonical_registry.json').modules,normalized:read('normalized_source_records.json').records,canonical:read('active_canonical_records.json').records,mappings:read('requirement_migration.json').mappings,aliases:read('canonical_aliases.json').aliases,owners:j('audit/master/canonical_owners.json').owners.map(o=>o.id)});
test('MASTER05 adds 131 frozen full-body reviews excluding all prior 1423',()=>{
 const rs=['HEMATO','ONCO','NEUROONCO'].flatMap(k=>read('reviews/'+k+'.json').reviews);
 const prior=new Set(prev.filter(r=>r.readiness.reviewed).map(r=>r.original_id));assert.equal(prior.size,1423);assert.equal(rs.length,131);assert.equal(new Set(rs.map(r=>r.original_id)).size,131);
 const ms=new Map(parseModules(text('sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md')).map(m=>[m.id,m]));
 for(const r of rs){assert.ok(!prior.has(r.original_id));assert.equal(r.body,ms.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 const expected=new Set([...prior,...rs.map(r=>r.original_id)]);for(const l of read('audit_ledger.json').modules)assert.equal(l.reviewed,expected.has(l.original_id));
});
test('421 source modules preserve 7651 fragments under 18 shared owners',()=>{
 assert.deepEqual(assertCanonicalMigration(f()),{normalized:421,canonicalized:421,retained_fragments:7651,canonical_documents:18});
 const data=f();assert.equal(new Set(data.canonical.map(c=>c.owner)).size,18);assert.equal(data.canonical.reduce((n,c)=>n+c.profiles.length,0),105);
 const lost=f();lost.mappings.pop();assert.throws(()=>assertCanonicalMigration(lost),/Lost or extra/);
});
test('all previous profiles and historical document hashes remain preserved',()=>{
 const old=j('audit/master-04/active_canonical_records.json').records,current=f().canonical;
 for(const c of old){assert.equal(sha256(text(c.document)),c.document_sha256);const n=current.find(n=>n.owner===c.owner);for(const p of c.profiles)assert.deepEqual(n.profiles.find(x=>x.id===p.id),p);}
 const p=read('audit_progress.json');assert.equal(p.NEWLY_NORMALIZED,148);assert.equal(p.NEWLY_CANONICALIZED,148);assert.equal(p.NEWLY_REVIEWED,131);
});
test('administration ownership preserves blood-bank release separation and source product traceability',()=>{
 const c=f().canonical.find(c=>c.owner==='CAP-ADMINISTRATION');assert.ok(c);assert.match(c.workflow,/blood-bank/);assert.match(c.workflow,/No automatic product release/);
 const rows=f().mappings;for(const [id,needle] of [[4182,'Crossmatching'],[4993,'Product Identification'],[4993,'Transfusion Start/End'],[4994,'Blood Bank Review'],[4994,'Future Transfusion Requirements']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
});
test('CNS oncology retains unique molecular, radiation, investigational and functional requirements',()=>{
 const rows=f().mappings;for(const [id,needle] of [[5129,'Reclassification History'],[5133,'Fractionation Context'],[5135,'Protocol Deviations Context'],[5145,'Accommodation Plan Context'],[5147,'Re-irradiation Context'],[5130,'Fusion Context']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
});
test('seven previously integrated proposals are not new gains or clinical approvals',()=>{
 const d=read('gap_disposition.json').decisions;
 assertGapIntegration(d,f().canonical,read('gap_requirement_migration.json').mappings,Object.fromEntries(d.map(g=>[g.id,text(g.source_document)])));
 const p=read('audit_progress.json');assert.equal(p.GAP_FILL_INTEGRATED,7);assert.equal(p.NEWLY_GAP_FILL_INTEGRATED,0);assert.equal(p.NEWLY_GAP_FILL_VALIDATED,0);
 for(const r of read('implementation_gate_matrix.json').records){assert.equal(assertReadiness(r),false);r.implementation_ready=true;assert.throws(()=>assertReadiness(r),/Unproven/);}
});
test('current accounting and progress retain all 5175 originals without inflated statuses',()=>{
 const data=f(),p=read('audit_progress.json'),a=assertAccounting(prev.map(r=>r.original_id),read('audit_ledger.json').modules,data.sources);assertCounters(p);
 assert.equal(a.reviewed,1554);assert.equal(a.unaudited,3621);assert.equal(a.normalized,421);assert.equal(a.canonicalized,421);assert.equal(p.UNIQUE_REQUIREMENTS_PRESERVED,3792);
 assert.equal(p.AUDIT_WORK_PROGRESS,Number((100*(1554+421+421)/(3*5175)).toFixed(4)));
 for(const r of data.sources){assert.equal(r.description,prev[r.original_id-1].description);assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);}
});
test('current documents, shared graph and support paths are complete',()=>{
 assert.match(text('audit/master-05/CONTINUE_FROM_HERE.md'),/EDHT_MASTER_05_CHECKPOINT\.json/);
 for(const c of f().canonical){const doc=text(c.document);assert.equal(sha256(doc),c.document_sha256);for(const r of [...c.requirements,...c.source_metadata])assert.ok(doc.includes('<a id="'+r.id+'"></a>'));}
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 const m=read('count_reconciliation.json');assert.equal(m.supporting_artifacts,m.supporting_artifact_paths.length);for(const n of m.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/master-05',n)),n);
});
