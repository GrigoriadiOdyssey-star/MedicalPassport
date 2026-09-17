import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const cwd=fileURLToPath(new URL('..',import.meta.url));
for(const args of [['scripts/master18.mjs','--check'],['scripts/readiness18.mjs','--check'],['scripts/validate-master17.mjs']])execFileSync(process.execPath,args,{cwd,stdio:'inherit'});
console.log('MASTER18 append-only canonical migration and bounded readiness contracts validated; no runtime or approval evidence inferred.');
