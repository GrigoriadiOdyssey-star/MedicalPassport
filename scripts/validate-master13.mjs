import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const cwd=fileURLToPath(new URL('..',import.meta.url));
execFileSync(process.execPath,['scripts/master13.mjs','--check'],{cwd,stdio:'inherit'});
const p=JSON.parse(fs.readFileSync(new URL('../audit/master-13/audit_progress.json',import.meta.url)));
if(p.REVIEWED!==5175||p.UNAUDITED!==0||p.REVIEW_PROGRESS!==100)throw Error('REVIEW completion is not established');
execFileSync(process.execPath,['scripts/validate-master12.mjs'],{cwd,stdio:'inherit'});
console.log('MASTER13 COMPLETE LEVEL-A REVIEW: 5175/5175; no implementation or clinical approval implied.');
