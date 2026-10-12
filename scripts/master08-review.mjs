import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parseModules,sha256} from './catalog-lib.mjs';
import {domains,specific,parent} from '../config/master-pass-08.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source='sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md',buffer=fs.readFileSync(path.join(root,source));
const hash=JSON.parse(fs.readFileSync(path.join(root,'audit/master/source_manifest.json'),'utf8')).sha256;
if(sha256(buffer)!==hash)throw Error('Immutable source changed');
const modules=parseModules(buffer.toString('utf8'));
const prior=JSON.parse(fs.readFileSync(path.join(root,'audit/master-07/audit_ledger.json'),'utf8')).modules;
const already=new Set(prior.filter(m=>m.reviewed).map(m=>m.original_id));
const [mode,key]=process.argv.slice(2),selected=key?[key]:Object.keys(domains);
if(!['--record','--check'].includes(mode))throw Error('Use --record DOMAIN after reading that domain, or --check');
for(const key of selected){
 if(!domains[key])throw Error('Unknown domain');
 const d=domains[key],ms=modules.filter(m=>!already.has(m.id)&&d.ranges.some(([a,b])=>m.id>=a&&m.id<=b));
 const data={pass:'MASTER-08',domain:key,parent_checkpoint:parent,source_sha256:hash,review_scope:'Full-body architectural review; no clinical certification; excludes all prior 1738 reviewed IDs.',count:ms.length,reviews:ms.map(m=>({original_id:m.id,title:m.title,body:m.body,body_sha256:sha256(m.body),source:{path:source,heading_line:m.sourceLine},verdict:specific[m.id]??d.note,feature_labels:[...m.body.matchAll(/^\s*•\s*(.+)$/gm)].map(x=>x[1].trim()),date:'2026-09-15'}))};
 const target=path.join(root,'audit/master-08/reviews',key+'.json'),content=JSON.stringify(data,null,2)+'\n';
 if(mode==='--record'){if(fs.existsSync(target))throw Error('Existing domain review is immutable; inspect rather than overwrite');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);}
 if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==content)throw Error('Review drift '+key);
 const actual=JSON.parse(fs.readFileSync(target,'utf8'));
 if(actual.reviews.some(r=>already.has(r.original_id))||new Set(actual.reviews.map(r=>r.original_id)).size!==ms.length)throw Error('Repeated review ID');
 console.log(JSON.stringify({domain:key,status:'PASS',count:ms.length,prior_reviewed_ids_repeated:0,body_hashes_verified:true}));
}



