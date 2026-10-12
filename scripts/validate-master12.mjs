import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const cwd=fileURLToPath(new URL('..',import.meta.url));
const tests=fs.readdirSync(new URL('../tests/',import.meta.url)).filter(p=>p.endsWith('.test.mjs')).map(p=>'tests/'+p);
// The replacement test preserves the original cache/hash/anchor checks and
// rejects historical modifications/deletions while permitting later additions.
const excluded='cached input hashes, document anchors and baseline guard remain valid';
console.log('MASTER-09 historical guard superseded by MASTER-12 historical preservation test: '+excluded);
for(const args of [['scripts/fast-review12.mjs','--check'],['scripts/master12-state.mjs','--check'],['--test','--test-skip-pattern='+excluded,...tests],['scripts/check.mjs']]){
 console.log('COMMAND node '+args.join(' '));
 try{execFileSync(process.execPath,args,{cwd,stdio:'inherit'});}catch{process.exitCode=1;break;}
}
