import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {root,build20} from './master20.mjs';import {digest} from './contract-release20.mjs';
build20(true);
const log=execFileSync(process.execPath,['--test','tests/master20.test.mjs'],{cwd:root,encoding:'utf8'}).replaceAll('\r\n','\n');
const passed=Number(log.match(/(?:ℹ|#) pass (\d+)/)?.[1]),failed=Number(log.match(/(?:ℹ|#) fail (\d+)/)?.[1]);if(passed!==8||failed!==0)throw Error('Targeted checks did not pass');
fs.writeFileSync(root+'/audit/master-20/validation.txt',log);
fs.writeFileSync(root+'/audit/master-20/validation_summary.json',JSON.stringify({pass:'MASTER-20',targeted_passed:passed,failed,full_validation_rerun:false,reason:'Only new MASTER20 contract policy, registry and build-gate artifacts changed; historical audit/normalization validators reused without rerun',cached_prior_full_validation:'audit/master-19/validation_summary.json',log_sha256:digest(log),scope:'Design-time contract and readiness checks; no runtime or clinical approval',recovered_development_issue:'Generator parenthesis syntax corrected before successful registry and test validation'},null,2)+'\n');
console.log(log);console.log('MASTER20 targeted validation PASS; full application build remains gated.');
