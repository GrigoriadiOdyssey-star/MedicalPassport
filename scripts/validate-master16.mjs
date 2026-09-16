import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const cwd=fileURLToPath(new URL('..',import.meta.url));
execFileSync(process.execPath,['scripts/master16.mjs','--check'],{cwd,stdio:'inherit'});
execFileSync(process.execPath,['scripts/readiness16.mjs','--check'],{cwd,stdio:'inherit'});
execFileSync(process.execPath,['scripts/validate-master15.mjs'],{cwd,stdio:'inherit'});
console.log('MASTER16 source preservation complete; readiness is assessed separately without promotion of unapproved gates.');
