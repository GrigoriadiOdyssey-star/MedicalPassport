import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {sha256,parseModules} from '../scripts/catalog-lib.mjs';
import {assertCanonicalMigration,normalizeLine} from '../scripts/canonical-lib.mjs';
import {assertAccounting,assertCounters,assertGraph} from '../scripts/gapfill-lib.mjs';
import {assertGapIntegration,assertReadiness} from '../scripts/master04-lib.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const text=n=>fs.readFileSync(path.join(root,n),'utf8'),j=n=>JSON.parse(text(n)),read=n=>j('audit/master-04/'+n);
const previous=j('audit/domain-03/canonical_registry.json').modules;
const fixture=()=>({sources:read('canonical_registry.json').modules,normalized:read('normalized_source_records.json').records,canonical:read('active_canonical_records.json').records,mappings:read('requirement_migration.json').mappings,aliases:read('canonical_aliases.json').aliases,owners:j('audit/master/canonical_owners.json').owners.map(o=>o.id)});
const gapFixture=()=>{const d=read('gap_disposition.json').decisions;return [d,read('active_canonical_records.json').records,read('gap_requirement_migration.json').mappings,Object.fromEntries(d.map(g=>[g.id,text(g.source_document)]))];};

test('MASTER04 adds exactly 323 new full-body reviews without repeating 1100',()=>{
 const reviews=['PULM','GASTRO','RHEUM','HEMONC'].flatMap(k=>read('reviews/'+k+'.json').reviews);
 const source=parseModules(text('sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md')),byId=new Map(source.map(m=>[m.id,m]));
 const prior=new Set(previous.filter(r=>r.readiness.reviewed).map(r=>r.original_id));assert.equal(prior.size,1100);assert.equal(reviews.length,323);assert.equal(new Set(reviews.map(r=>r.original_id)).size,323);
 for(const r of reviews){assert.ok(!prior.has(r.original_id));assert.equal(r.body,byId.get(r.original_id).body);assert.equal(r.body_sha256,sha256(r.body));assert.ok(r.verdict.length>70);}
 const expected=new Set([...prior,...reviews.map(r=>r.original_id)]);for(const r of read('audit_ledger.json').modules)assert.equal(r.reviewed,expected.has(r.original_id));
});
test('273 original IDs map to 17 shared owners with no lost source lines',()=>{
 assert.deepEqual(assertCanonicalMigration(fixture()),{normalized:273,canonicalized:273,retained_fragments:4844,canonical_documents:17});
 const f=fixture();assert.equal(new Set(f.canonical.map(c=>c.owner)).size,17);
 for(const n of f.normalized)assert.equal(n.source_sha256,sha256(previous[n.original_id-1].description));
 const missing=fixture();missing.mappings.pop();assert.throws(()=>assertCanonicalMigration(missing),/Lost or extra/);
});
test('historical canonical documents remain byte-identical and their 30 IDs are not new gains',()=>{
 const rel=read('canonical_document_relocation.json').relocations;assert.equal(rel.length,10);
 const ids=new Set(rel.flatMap(r=>r.source_ids));assert.equal(ids.size,30);
 for(const r of rel){assert.equal(sha256(text(r.historical_document)),r.historical_sha256);assert.ok(fs.existsSync(path.join(root,r.target)));assert.equal(r.original_ids_not_newly_counted,true);}
 const current=fixture().canonical;
 for(const old of j('audit/domain-03/active_canonical_records.json').records){const c=current.find(c=>c.owner===old.owner),p=c.profiles.find(p=>p.id===old.id);assert.deepEqual(p.prior_contract.api,old.api);assert.equal(p.prior_contract.clinical_safety,old.clinical_safety);for(const dep of old.dependencies)assert.ok(c.dependencies.includes(dep));}
 const p=read('audit_progress.json');assert.equal(p.NORMALIZED,273);assert.equal(p.NEWLY_NORMALIZED,243);assert.equal(p.NEWLY_CANONICALIZED,243);
});
test('every current canonical document has its recorded hash and all mapped anchors',()=>{
 for(const c of fixture().canonical){const doc=text(c.document);assert.equal(sha256(doc),c.document_sha256);for(const r of [...c.requirements,...c.source_metadata])assert.ok(doc.includes('<a id="'+r.id+'"></a>'));}
});
test('seven gap proposals retain full documents and every declared requirement under five existing owners',()=>{
 const f=gapFixture();assertGapIntegration(...f);assert.equal(new Set(f[0].map(d=>d.owner)).size,5);
 for(const d of f[0]){assert.deepEqual(d.history,['DRAFT_SPECIFICATION','VALIDATED_DOCUMENTATION','INTEGRATED']);assert.equal(d.clinical_validation,false);assert.equal(d.implementation_ready,false);}
 assert.equal(f[0].find(d=>d.id==='EXT-VISUAL').target,f[0].find(d=>d.id==='EXT-TWIN').target);
 assert.equal(f[0].find(d=>d.id==='EXT-GENOMIC').target,f[0].find(d=>d.id==='EXT-AI').target);
});
test('gap validation rejects duplicate lines, wrong source hashes and missing criteria',()=>{
 const duplicate=gapFixture();duplicate[2][1]=structuredClone(duplicate[2][0]);assert.throws(()=>assertGapIntegration(...duplicate),/Duplicate or missing/);
 const hash=gapFixture();hash[0][0].source_document_sha256='wrong';assert.throws(()=>assertGapIntegration(...hash),/hash mismatch/);
 const missing=gapFixture();missing[0][0].requirement_coverage.pop();assert.throws(()=>assertGapIntegration(...missing),/requirement not integrated/);
 const owner=gapFixture();owner[0][0].owner='CAP-DATA';assert.throws(()=>assertGapIntegration(...owner),/owner or scope mismatch/);
});
test('retrieval preserves unadjudicated candidates and known false-merge exclusions',()=>{
 const dossiers=read('gap_semantic_search.json').dossiers;assert.equal(dossiers.length,7);
 const genomic=dossiers.find(d=>d.proposal_id==='EXT-GENOMIC');assert.ok(genomic.negative_sources.includes(2149));assert.ok(genomic.negative_sources.includes(4583));
 const twin=dossiers.find(d=>d.proposal_id==='EXT-TWIN');assert.deepEqual(twin.negative_sources,[1224,1225,1876]);
 const research=dossiers.find(d=>d.proposal_id==='EXT-RESEARCH');assert.ok(research.negative_sources.includes(1915));
 assert.ok(dossiers.some(d=>d.candidates.some(c=>!c.reviewed)));for(const d of dossiers)assert.ok(d.unadjudicated_candidates.length>0);
});
test('implementation readiness requires all eight evidenced approved gates',()=>{
 for(const r of read('implementation_gate_matrix.json').records){assert.equal(assertReadiness(r),false);const fake=structuredClone(r);fake.implementation_ready=true;assert.throws(()=>assertReadiness(fake),/Unproven/);}
 const r=read('implementation_gate_matrix.json').records[0];r.gates.pop();assert.throws(()=>assertReadiness(r),/Missing/);
});
test('passing documentation gates without named approval cannot inflate readiness',()=>{
 const r=read('implementation_gate_matrix.json').records[0];r.gates=r.gates.map(g=>({...g,status:'PASS',evidence:['local-test-result']}));r.implementation_ready=true;assert.throws(()=>assertReadiness(r),/Unproven/);
});
test('source accounting, stage percentages and textual requirement count are reproducible',()=>{
 const p=read('audit_progress.json'),f=fixture(),a=assertAccounting(previous.map(r=>r.original_id),read('audit_ledger.json').modules,f.sources);assertCounters(p);
 assert.equal(a.reviewed,1423);assert.equal(a.unaudited,3752);assert.equal(a.normalized,273);assert.equal(a.canonicalized,273);
 const requirements=new Set(f.canonical.flatMap(c=>c.requirements.map(r=>r.id)));const unique=new Set(f.mappings.filter(m=>requirements.has(m.target_record_id)).map(m=>m.target_module+'|'+normalizeLine(m.source_text)));
 assert.equal(unique.size,2421);assert.equal(p.UNIQUE_REQUIREMENTS_PRESERVED,2421);assert.equal(p.AUDIT_WORK_PROGRESS,Number((100*(1423+273+273)/(3*5175)).toFixed(4)));
 for(const r of f.sources){assert.equal(r.description,previous[r.original_id-1].description);assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);}
});
test('unique pediatric and pharmacology clauses remain in applied requirements',()=>{
 const rows=fixture().mappings;
 for(const [id,needle] of [[905,'Flow Curves'],[4463,'Administration Time'],[4476,'Molecular Eligibility'],[4544,'Central Access'],[4545,'Remaining Intestinal Anatomy'],[5029,'Laterality'],[5047,'Restriction Expiration'],[2677,'CYP Gene Analysis'],[1727,'Supplements'],[4579,'specialist critical-care']])assert.ok(rows.some(m=>m.source_id===id&&m.source_text.includes(needle)),id+' '+needle);
});
test('shared graph and support manifest contain no missing references',()=>{
 const g=read('dependency_graph.json').proposal_graph;assertGraph(g.nodes,g.edges);
 const count=read('count_reconciliation.json');assert.equal(count.supporting_artifacts,count.supporting_artifact_paths.length);for(const n of count.supporting_artifact_paths)assert.ok(fs.existsSync(path.join(root,'audit/master-04',n)),n);
});
