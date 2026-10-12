import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {build21,root} from './master21.mjs';import {digest} from './contract-release20.mjs';
build21(true);
const log=execFileSync(process.execPath,['--test','tests/master21.test.mjs'],{cwd:root,encoding:'utf8'}).replaceAll('\r\n','\n');
const passed=Number(log.match(/(?:ℹ|#) pass (\d+)/)?.[1]),failed=Number(log.match(/(?:ℹ|#) fail (\d+)/)?.[1]);if(passed!==12||failed!==0)throw Error('MASTER21 targeted validation failed');
fs.writeFileSync(root+'/audit/master-21/validation.txt',log);
fs.writeFileSync(root+'/audit/master-21/validation_summary.json',JSON.stringify({pass:'MASTER-21',targeted_passed:passed,failed,full_validation_rerun:false,owner_dependency_graph_recomputed:false,scope:'New closed ports, synthetic adapters, clinical/release dispositions and scoped engineering readiness; not a running application or clinical approval',prior_validated_baseline:'audit/master-20/validation_summary.json',log_sha256:digest(log)},null,2)+'\n');console.log(log);
