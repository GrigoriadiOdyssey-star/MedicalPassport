import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {validateRegistry} from '../scripts/readiness08.mjs';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const fixture=()=>[read('audit/master-08/implementation_readiness_registry.json'),read('docs/engineering/mvp_candidate_registry.json')];
test('readiness covers 27 criteria for all existing owners and 25 active specifications',()=>{const [r,m]=fixture();assert.equal(validateRegistry(r,m),true);assert.equal(r.active_canonical_assessed,25);assert.equal(r.criteria_count,27);assert.equal(r.implementation_ready,0);assert.equal(r.records.length,33);for(const row of r.records)assert.ok(row.critical_blockers.length);});
test('missing sections, altered evidence and premature readiness are rejected',()=>{
 let [r,m]=fixture();r.records[0].criteria.pop();assert.throws(()=>validateRegistry(r,m),/criterion/);
 [r,m]=fixture();r.records.find(x=>x.canonical_id).implementation_ready=true;assert.throws(()=>validateRegistry(r,m),/Unproven/);
 [r,m]=fixture();r.records.find(x=>x.canonical_id).criteria[0].evidence[0].sha256='0'.repeat(64);assert.throws(()=>validateRegistry(r,m),/drift/);
});
test('MVP owner tags cannot create modules or silently include blocked authorization',()=>{const [r,m]=fixture();assert.deepEqual(m.counts,{MVP_CORE:7,MVP_OPTIONAL:3,POST_MVP:14,PHASE_2:4,RESEARCH:4,LONG_TERM:1});assert.deepEqual(m.core_missing_canonical,['CAP-SECURITY']);assert.equal(m.core_active_canonical,6);assert.equal(m.records.find(x=>x.owner==='CAP-AI').tag,'RESEARCH');m.records[0].owner='INVENTED';assert.throws(()=>validateRegistry(r,m),/owner/);});
test('planning slice retains explicit non-goals and runtime acceptance blockers',()=>{const text=fs.readFileSync(new URL('../docs/engineering/mvp_candidate_architecture.md',import.meta.url),'utf8');for(const needle of ['not implemented','concurrent revoke/read','Unknown, not assessed','CAP-SECURITY','raw access tokens','rollback'])assert.ok(text.includes(needle),needle);const [r,m]=fixture();m.counts.MVP_CORE++;assert.throws(()=>validateRegistry(r,m),/count mismatch/);});
