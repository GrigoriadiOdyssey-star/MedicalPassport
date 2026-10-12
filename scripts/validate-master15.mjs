import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const cwd=fileURLToPath(new URL('..',import.meta.url));
execFileSync(process.execPath,['scripts/master15.mjs','--check'],{cwd,stdio:'inherit'});
execFileSync(process.execPath,['scripts/validate-master13.mjs'],{cwd,stdio:'inherit'});
console.log('MASTER15 source-preserving normalization checks complete; clinical/runtime gates remain open.');
