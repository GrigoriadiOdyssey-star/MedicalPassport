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
const text=n=>fs.readFileSync(path.join(root,n),'utf8'),j=n=>JSON.parse(text(n)),read=n=>j('audit/master-07/'+n);
const prev=j('audit/master-06/canonical_registry.json').modules;
const f=()=>({sources:read('canonical_registry.json').modules,normalized:read('normalized_source_records.json').records,canonical:read('active_canonical_records.json').records,mappings:read('requirement_migration.json').mappings,aliases:read('canonical_aliases.json').aliases,owners:j('audit/master/canonical_owners.json').owners.map(o=>o.id)});
test('MASTER07 adds 65 frozen full-body reviews excluding all prior 1673',()=>{
 const rs=['SURGERY','ORTHOPEDICS','TRAUMA_REHAB'].flatMap(k=>read('reviews/'+k+'.json').reviews);
 const prior=new Set(prev.filter(r=>r.readiness.reviewed).map(r=>r.original_id));assert.equal(prior.size,1673);assert.equal(rs.length,65);assert.equal(new Set(rs.map(r=>r.original_id)).size,65);
 const ms=new Map(parseModules(text('sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md')).map(m=>[m.id,m]));
 for(const r of rs){assert.ok(!prior.has(r.original_id));assert.equal(r.body,ms.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 const expected=new Set([...prior,...rs.map(r=>r.original_id)]);for(const l of read('audit_ledger.json').modules)assert.equal(l.reviewed,expected.has(l.original_id));
});
test('612 source modules preserve 11878 fragments under 19 shared owners',()=>{
 assert.deepEqual(assertCanonicalMigration(f()),{normalized:612,canonicalized:612,retained_fragments:11878,canonical_documents:19});
 const data=f();assert.equal(new Set(data.canonical.map(c=>c.owner)).size,19);assert.equal(data.canonical.reduce((n,c)=>n+c.profiles.length,0),193);
 const lost=f();lost.mappings.pop();assert.throws(()=>assertCanonicalMigration(lost),/Lost or extra/);
});
test('all previous profiles and historical document hashes remain preserved',()=>{
 const old=j('audit/master-06/active_canonical_records.json').records,current=f().canonical;
 for(const c of old){assert.equal(sha256(text(c.document)),c.document_sha256);const n=current.find(n=>n.owner===c.owner);for(const p of c.profiles)assert.deepEqual(n.profiles.find(x=>x.id===p.id),p);}
 const p=read('audit_progress.json');assert.equal(p.NEWLY_NORMALIZED,64);assert.equal(p.NEWLY_CANONICALIZED,64);assert.equal(p.NEWLY_REVIEWED,65);
});
test('device owner has bounded partial evidence without readiness promotion',()=>{
 const c=f().canonical.find(c=>c.owner==='CAP-DEVICES');assert.ok(c);assert.equal(c.data_contract,'specs/device-configuration.schema.json');
 const g=read('implementation_gate_matrix.json').records.find(g=>g.canonical_id===c.id);assert.equal(assertReadiness(g),false);
 for(const name of ['data','testing']){const gate=g.gates.find(x=>x.name===name);assert.equal(gate.status,'PARTIAL_EVIDENCE');assert.equal(gate.approved_by,null);for(const file of gate.evidence)assert.ok(fs.existsSync(path.join(root,file)),file);}
 for(const id of [4628,5104,5115,4643,5121])assert.ok(c.source_ids.includes(id));
});
test('all new reviews and exactly two prior reviewed IDs enter normalization without double counting',()=>{
 const current=f(),old=j('audit/master-06/normalized_source_records.json').records;const ids=new Set(old.map(r=>r.original_id));
 const fresh=current.normalized.filter(r=>!ids.has(r.original_id)).map(r=>r.original_id);assert.equal(fresh.length,64);
 const reviewed=new Set(['SURGERY','ORTHOPEDICS','TRAUMA_REHAB'].flatMap(k=>read('reviews/'+k+'.json').reviews.map(r=>r.original_id)));
 for(const id of reviewed)assert.equal(fresh.includes(id),![1121,1122,1123].includes(id));
 assert.deepEqual(fresh.filter(id=>!reviewed.has(id)).sort((a,b)=>a-b),[4672,4699]);
});
test('seven previously integrated proposals are not new gains or clinical approvals',()=>{
 const d=read('gap_disposition.json').decisions;
 assertGapIntegration(d,f().canonical,read('gap_requirement_migration.json').mappings,Object.fromEntries(d.map(g=>[g.id,text(g.source_document)])));
 const p=read('audit_progress.json');assert.equal(p.GAP_FILL_INTEGRATED,7);assert.equal(p.NEWLY_GAP_FILL_INTEGRATED,0);assert.equal(p.NEWLY_GAP_FILL_VALIDATED,0);
 for(const r of read('implementation_gate_matrix.json').records){assert.equal(assertReadiness(r),false);r.implementation_ready=true;assert.throws(()=>assertReadiness(r),/Unproven/);}
});
test('current accounting and progress retain all 5175 originals without inflated statuses',()=>{
 const data=f(),p=read('audit_progress.json'),a=assertAccounting(prev.map(r=>r.original_id),read('audit_ledger.json').modules,data.sources);assertCounters(p);
 assert.equal(a.reviewed,1738);assert.equal(a.unaudited,3437);assert.equal(a.normalized,612);assert.equal(a.canonicalized,612);assert.equal(p.UNIQUE_REQUIREMENTS_PRESERVED,5586);
 assert.equal(p.AUDIT_WORK_PROGRESS,Number((100*(1738+612+612)/(3*5175)).toFixed(4)));
 for(const r of data.sources){assert.equal(r.description,prev[r.original_id-1].description);assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);}
});
test('current documents, shared graph and support paths are complete',()=>{
 assert.match(text('audit/master-07/CONTINUE_FROM_HERE.md'),/EDHT_MASTER_07_CHECKPOINT\.json/);
 for(const c of f().canonical){const doc=text(c.document);assert.equal(sha256(doc),c.document_sha256);for(const r of [...c.requirements,...c.source_metadata])assert.ok(doc.includes('<a id="'+r.id+'"></a>'));}
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 const m=read('count_reconciliation.json');assert.equal(m.supporting_artifacts,m.supporting_artifact_paths.length);for(const n of m.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/master-07',n)),n);
});

test('new high-risk clauses and pending owner decisions remain explicit',()=>{
 const data=f(),rows=data.mappings;
 for(const [id,needle] of [[4660,'Growth Arrest'],[4667,'recall'],[4687,'Menstrual Health'],[4688,'Return-to-Learn'],[4695,'Adverse Events'],[4699,'Pre-Injury Functional Baseline']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
 for(const id of [1121,1122,1123]){const r=data.sources[id-1];assert.equal(r.readiness.reviewed,true);assert.equal(r.readiness.normalized,false);assert.equal(r.readiness.canonicalized,false);}
 assert.match(text('audit/master-07/STAGE_POLICY.md'),/1121–1123/);
 const g=read('implementation_gate_matrix.json').records.find(r=>r.canonical_id==='CORE-CAP-DEVICES');assert.match(g.gates.find(g=>g.name==='data').missing,/not covered/);
});
