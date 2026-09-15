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
const text=n=>fs.readFileSync(path.join(root,n),'utf8'),j=n=>JSON.parse(text(n)),read=n=>j('audit/master-08/'+n);
const prev=j('audit/master-07/canonical_registry.json').modules;
const f=()=>({sources:read('canonical_registry.json').modules,normalized:read('normalized_source_records.json').records,canonical:read('active_canonical_records.json').records,mappings:read('requirement_migration.json').mappings,aliases:read('canonical_aliases.json').aliases,owners:j('audit/master/canonical_owners.json').owners.map(o=>o.id)});
test('MASTER08 adds 26 frozen full-body reviews excluding all prior 1738',()=>{
 const rs=['FOUNDATION_PERIOP'].flatMap(k=>read('reviews/'+k+'.json').reviews);
 const prior=new Set(prev.filter(r=>r.readiness.reviewed).map(r=>r.original_id));assert.equal(prior.size,1738);assert.equal(rs.length,26);assert.equal(new Set(rs.map(r=>r.original_id)).size,26);
 const ms=new Map(parseModules(text('sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md')).map(m=>[m.id,m]));
 for(const r of rs){assert.ok(!prior.has(r.original_id));assert.equal(r.body,ms.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 const expected=new Set([...prior,...rs.map(r=>r.original_id)]);for(const l of read('audit_ledger.json').modules)assert.equal(l.reviewed,expected.has(l.original_id));
});
test('668 source modules preserve 14539 fragments under 25 shared owners',()=>{
 assert.deepEqual(assertCanonicalMigration(f()),{normalized:668,canonicalized:668,retained_fragments:14539,canonical_documents:25});
 const data=f();assert.equal(new Set(data.canonical.map(c=>c.owner)).size,25);assert.equal(data.canonical.reduce((n,c)=>n+c.profiles.length,0),212);
 const lost=f();lost.mappings.pop();assert.throws(()=>assertCanonicalMigration(lost),/Lost or extra/);
});
test('all previous profiles and historical document hashes remain preserved',()=>{
 const old=j('audit/master-07/active_canonical_records.json').records,current=f().canonical;
 for(const c of old){assert.equal(sha256(text(c.document)),c.document_sha256);const n=current.find(n=>n.owner===c.owner);for(const p of c.profiles)assert.deepEqual(n.profiles.find(x=>x.id===p.id),p);}
 const p=read('audit_progress.json');assert.equal(p.NEWLY_NORMALIZED,56);assert.equal(p.NEWLY_CANONICALIZED,56);assert.equal(p.NEWLY_REVIEWED,26);
});
test('device owner has bounded partial evidence without readiness promotion',()=>{
 const c=f().canonical.find(c=>c.owner==='CAP-DEVICES');assert.ok(c);assert.equal(c.data_contract,'specs/device-configuration.schema.json');
 const g=read('implementation_gate_matrix.json').records.find(g=>g.canonical_id===c.id);assert.equal(assertReadiness(g),false);
 for(const name of ['data','testing']){const gate=g.gates.find(x=>x.name===name);assert.equal(gate.status,'PARTIAL_EVIDENCE');assert.equal(gate.approved_by,null);for(const file of gate.evidence)assert.ok(fs.existsSync(path.join(root,file)),file);}
 for(const id of [4628,5104,5115,4643,5121])assert.ok(c.source_ids.includes(id));
});
test('all new reviews and thirty prior reviewed IDs enter normalization without double counting',()=>{
 const current=f(),old=j('audit/master-07/normalized_source_records.json').records;const ids=new Set(old.map(r=>r.original_id));
 const fresh=current.normalized.filter(r=>!ids.has(r.original_id)).map(r=>r.original_id);assert.equal(fresh.length,56);
 const reviewed=new Set(['FOUNDATION_PERIOP'].flatMap(k=>read('reviews/'+k+'.json').reviews.map(r=>r.original_id)));
 for(const id of reviewed)assert.ok(fresh.includes(id));
 assert.equal(fresh.filter(id=>!reviewed.has(id)).length,30);for(const id of [6,17,18,27,29,30,54,1121,1122,1123])assert.ok(fresh.includes(id));
});
test('seven previously integrated proposals are not new gains or clinical approvals',()=>{
 const d=read('gap_disposition.json').decisions;
 assertGapIntegration(d,f().canonical,read('gap_requirement_migration.json').mappings,Object.fromEntries(d.map(g=>[g.id,text(g.source_document)])));
 const p=read('audit_progress.json');assert.equal(p.GAP_FILL_INTEGRATED,7);assert.equal(p.NEWLY_GAP_FILL_INTEGRATED,0);assert.equal(p.NEWLY_GAP_FILL_VALIDATED,0);
 for(const r of read('implementation_gate_matrix.json').records){assert.equal(assertReadiness(r),false);r.implementation_ready=true;assert.throws(()=>assertReadiness(r),/Unproven/);}
});
test('current accounting and progress retain all 5175 originals without inflated statuses',()=>{
 const data=f(),p=read('audit_progress.json'),a=assertAccounting(prev.map(r=>r.original_id),read('audit_ledger.json').modules,data.sources);assertCounters(p);
 assert.equal(a.reviewed,1764);assert.equal(a.unaudited,3411);assert.equal(a.normalized,668);assert.equal(a.canonicalized,668);assert.equal(p.UNIQUE_REQUIREMENTS_PRESERVED,7137);
 assert.equal(p.AUDIT_WORK_PROGRESS,Number((100*(1764+668+668)/(3*5175)).toFixed(4)));
 for(const r of data.sources){assert.equal(r.description,prev[r.original_id-1].description);assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);}
});
test('current documents, shared graph and support paths are complete',()=>{
 assert.match(text('audit/master-08/CONTINUE_FROM_HERE.md'),/EDHT_MASTER_08_CHECKPOINT\.json/);
 for(const c of f().canonical){const doc=text(c.document);assert.equal(sha256(doc),c.document_sha256);for(const r of [...c.requirements,...c.source_metadata])assert.ok(doc.includes('<a id="'+r.id+'"></a>'));}
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 const m=read('count_reconciliation.json');assert.equal(m.supporting_artifacts,m.supporting_artifact_paths.length);for(const n of m.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/master-08',n)),n);
});

test('legacy corrections preserve fragments while resolving old owner blockers',()=>{
 const data=f(),rows=data.mappings;
 for(const [id,needle] of [[29,'refresh_token'],[27,'old_value'],[32,'Full Medical Record'],[56,'Blood Group'],[4795,'Behavioral Assessment'],[4921,'Ovarian Preservation Context']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
 for(const id of [1121,1122])assert.equal(data.sources[id-1].canonical_owner,'CAP-IDENTITY');assert.equal(data.sources[1122].canonical_owner,'CAP-APPOINTMENTS');
 const changes=read('legacy_implementation_corrections.json').decisions;assert.equal(changes.length,6);for(const d of changes){assert.equal(d.source_preserved,true);for(const ref of d.evidence)assert.equal(ref.body_sha256,sha256(data.sources[ref.original_id-1].description));}
 assert.deepEqual(read('gap_semantic_search.json').dossiers,j('audit/master-07/gap_semantic_search.json').dossiers);
});
