import test from 'node:test';
import assert from 'node:assert/strict';
import {validateDeviceEvidence,selectDocumentedConfiguration as select} from '../scripts/device-configuration-contract.mjs';
const context={tenant_id:'t',patient_id:'p',device_id:'d',as_of:'2026-09-15T12:00:00Z'};
const record=(version=1)=>({record_id:'r'+version,tenant_id:'t',patient_id:'p',device_id:'d',version,previous_record_id:version===1?null:'r'+(version-1),effective_at:'2026-09-10T12:00:00Z',recorded_at:'2026-09-11T12:00:00Z',event:version===1?'IMPLANT':'CONFIGURATION',source:{record_id:'s'+version,version:'1',sha256:'a'.repeat(64),author_id:'clinician'},review:{state:'VERIFIED',reviewer_id:'reviewer'},settings:[{code:'example_dimensionless_parameter',value:2,unit:'1'}]});
test('device record selection uses verified documented history without mutation or programming output',()=>{
 const rows=[record(2),record()],before=structuredClone(rows);assert.equal(validateDeviceEvidence(rows[0]),true);
 const result=select(rows,context);assert.equal(result.record_id,'r2');assert.equal(result.status,'LATEST_VERIFIED_DOCUMENTED');assert.ok(!('settings' in result));assert.deepEqual(rows,before);
});
test('unverified or rejected latest record blocks fallback; explant and replacement close physical device',()=>{
 for(const state of ['UNVERIFIED','REJECTED']){const r=record(2);r.review={state,reviewer_id:null};assert.deepEqual(select([record(),r],context),{status:'LATEST_RECORD_UNVERIFIED',record_id:null});}
 for(const event of ['EXPLANT','REPLACEMENT']){const r=record(2);r.event=event;assert.equal(select([record(),r],context).status,'NOT_CURRENT_FOR_THIS_DEVICE');}
});
test('device history refuses foreign context, branching, missing predecessor and future knowledge',()=>{
 for(const key of ['tenant_id','patient_id','device_id']){const r=record();r[key]='foreign';assert.throws(()=>select([r],context),/CONTEXT_MISMATCH/);}
 assert.throws(()=>select([record(),record()],context),/AMBIGUOUS_HISTORY/);
 assert.equal(select([record(2)],context).status,'INCOMPLETE_OR_CONFLICTING_HISTORY');
 const r=record(2);r.previous_record_id='wrong';assert.equal(select([record(),r],context).status,'INCOMPLETE_OR_CONFLICTING_HISTORY');
 const delayed=record();delayed.recorded_at='2026-09-16T12:00:00Z';assert.equal(select([delayed],context).status,'UNKNOWN');
 assert.equal(select([],context).status,'UNKNOWN');
});
test('device evidence rejects unknown units, false review, impossible dates and command payloads',()=>{
 const cases=[r=>{r.settings[0].unit=null;},r=>{r.review.reviewer_id=null;},r=>{r.recorded_at='2026-02-30T12:00:00Z';},r=>{r.effective_at='2026-09-20T12:00:00Z';},r=>{r.program_device=true;},r=>{r.settings[0].value=Infinity;}];
 for(const change of cases){const r=record();change(r);assert.throws(()=>validateDeviceEvidence(r));}
 const leap=record();leap.effective_at='2024-02-29T12:00:00+03:00';assert.equal(validateDeviceEvidence(leap),true);
});
