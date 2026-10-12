import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';const cwd=fileURLToPath(new URL('..',import.meta.url));
for(const args of [['scripts/master19.mjs','--check'],['scripts/control19.mjs','--check'],['scripts/readiness19.mjs','--check'],['scripts/validate-master18.mjs']])execFileSync(process.execPath,args,{cwd,stdio:'inherit'});
console.log('MASTER19 documentation and engineering readiness profiles validated; production and clinical approval remain separate.');
