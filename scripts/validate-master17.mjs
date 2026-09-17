import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const cwd=fileURLToPath(new URL('..',import.meta.url));
execFileSync(process.execPath,['scripts/master17.mjs','--check'],{cwd,stdio:'inherit'});
execFileSync(process.execPath,['scripts/readiness17.mjs','--check'],{cwd,stdio:'inherit'});
execFileSync(process.execPath,['scripts/validate-master16.mjs'],{cwd,stdio:'inherit'});
console.log('MASTER17 documentation delta validated; implementation readiness requires its own complete evidence.');
