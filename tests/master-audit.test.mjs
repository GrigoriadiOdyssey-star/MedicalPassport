import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>JSON.parse(fs.readFileSync(path.join(root,'audit/master',name),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');

// Independent CSV reader to detect quote/newline/cell loss in exported descriptions.
function parseCSV(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(cell);cell='';}
  else if(c==='\n'&&!quoted){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}
  else cell+=c;
 }
 assert.equal(quoted,false,'Unterminated quoted CSV field');
 assert.equal(cell,'','CSV ends with complete record');
 return rows;
}

test('master source byte spans reconstruct immutable baseline without losing preamble or tail',()=>{
 const m=read('source_manifest.json'),source=fs.readFileSync(path.join(root,m.source_file));
 assert.equal(hash(source),m.sha256);assert.equal(m.module_spans.length,5175);
 const spans=[m.preamble,...m.module_spans];let end=0;
 for(const span of spans){assert.equal(span.start_byte,end);const b=source.subarray(span.start_byte,span.end_byte_exclusive);assert.equal(hash(b),span.block_sha256??span.sha256);end=span.end_byte_exclusive;}
 assert.equal(end,source.length);
});

test('master CSV preserves all 5175 multiline descriptions and every registry column',()=>{
 const registry=read('canonical_registry.json').modules;
 const [columns,...rows]=parseCSV(fs.readFileSync(path.join(root,'audit/master/canonical_registry.csv'),'utf8').replace(/^\uFEFF/,''));
 assert.equal(rows.length,5175);
 rows.forEach((row,i)=>{assert.equal(row.length,columns.length);columns.forEach((field,j)=>{
  const v=registry[i][field];let expected=typeof v==='object'?JSON.stringify(v):String(v??'');
  if(typeof v==='string'&&/^[=+@\-\t\r]/.test(v))expected="'"+expected;
  assert.equal(row[j],expected,`row ${i+1} field ${field}`);
 });});
});

test('master ledger review counts require explicit source decisions and cannot consume unreviewed IDs',()=>{
 const ledger=read('audit_ledger.json').modules,decisions=read('review_decisions.json').reviews,p=read('audit_progress.json');
 const reviewed=new Set(decisions.map(d=>d.id));assert.equal(reviewed.size,decisions.length);
 for(const m of ledger){assert.equal(m.reviewed,reviewed.has(m.original_id));assert.equal(m.audit_status,m.reviewed?'REVIEWED':'NOT_REVIEWED');if(m.reviewed){assert.ok(m.review.note.length>40);assert.equal(m.review.id,m.original_id);}}
 assert.equal(p.reviewed,reviewed.size);assert.equal(p.unaudited+p.reviewed,5175);assert.equal(p.review_progress,Number((reviewed.size/5175*100).toFixed(4)));
 assert.equal(p.normalized,0);assert.equal(p.canonicalized,0);assert.equal(p.implementation_ready,0);
});

test('duplicate evidence never loses source requirements or enables destructive change',()=>{
 const registry=read('canonical_registry.json').modules,requirements=read('requirement_inventory.json').modules,changes=read('change_map.json');
 assert.equal(requirements.length,5175);assert.equal(changes.changes.length,5175);assert.equal(changes.apply_enabled,false);
 for(let i=0;i<5175;i++){
  assert.equal(registry[i].original_id,i+1);assert.equal(requirements[i].original_id,i+1);assert.equal(requirements[i].preserved_body,registry[i].description);
  for(const f of requirements[i].source_fragments){assert.equal(hash(f.text),f.sha256);assert.equal(f.canonical_destination,null);}
  assert.equal(changes.changes[i].original_id,i+1);assert.equal(changes.changes[i].destructive_operation_allowed,false);assert.deepEqual(changes.changes[i].gitlab_operations,[]);
 }
 for(const c of read('duplicate_clusters.json').clusters.filter(c=>c.classification==='EXACT_DUPLICATE')){
  assert.ok(c.members.length>=2);const bodies=c.members.map(id=>registry[id-1].description);assert.ok(bodies.every(b=>b===bodies[0]));
 }
});

test('unknown owners and dependencies remain explicit instead of becoming validated claims',()=>{
 const registry=read('canonical_registry.json').modules,graph=read('dependency_graph.json');
 assert.ok(registry.some(m=>m.canonical_owner===null));
 assert.equal(graph.critical_dependencies_verified,0);assert.ok(graph.unresolved_references.length>0);
 assert.ok(graph.proposed_capability_edges.every(e=>e.validated===false));
 for(const r of registry){assert.equal(r.implementation_status,'NOT_IMPLEMENTED');assert.equal(r.duplicate_of,null);assert.equal(r.superseded_by,null);if(r.roadmap_stage==='MVP')assert.ok(r.P0_slice_candidate,'A shared owner alone must not promote a historical module to MVP');}
});
