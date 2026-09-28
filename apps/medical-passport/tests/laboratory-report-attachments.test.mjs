import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../store.mjs';
import {attachMaster2728} from '../master27-28-bootstrap.mjs';

attachMaster2728(Store);
const password='Synthetic-report-attachments-123';
function fixture(t){const s=new Store(':memory:');s.initLabTwinPilot();t.after(()=>s.close());const p=s.register({name:'P',email:'report-att@example.test',password}),o=s.register({name:'O',email:'report-att-other@example.test',password});const login=email=>s.session(s.login(email,password).token);return{s,u:login(p.email),other:login(o.email)};}

test('DiagnosticReport resolves only patient-owned attachments and versions attachment refs',t=>{
 const{s,u}=fixture(t);
 const a=s.upload(u,{name:'source-a.txt',mime:'text/plain',document_type:'lab',source:'synthetic:master27',base64:Buffer.from('a').toString('base64')});
 const b=s.upload(u,{name:'source-b.txt',mime:'text/plain',document_type:'lab',source:'synthetic:master27',base64:Buffer.from('b').toString('base64')});
 const created=s.createDiagnosticReport(u,{status:'FINAL',title:'Synthetic report',attachment_refs:[a.id]});
 let detail=s.labReport(u,created.report_id);
 assert.deepEqual(detail.current.attachment_refs,[a.id]);assert.equal(detail.attachments[0].id,a.id);
 s.reviseDiagnosticReport(u,created.report_id,{status:'AMENDED',attachment_refs:[a.id,b.id],report_text:'Synthetic amendment'});
 detail=s.labReport(u,created.report_id);
 assert.deepEqual(detail.current.attachment_refs.sort(),[a.id,b.id].sort());assert.equal(detail.attachments.length,2);
 assert.deepEqual(detail.versions.map(v=>v.attachment_refs.length),[2,1]);
});

test('DiagnosticReport rejects foreign attachment refs',t=>{
 const{s,u,other}=fixture(t);
 const foreign=s.upload(other,{name:'foreign.txt',mime:'text/plain',document_type:'lab',source:'synthetic:master27',base64:Buffer.from('foreign').toString('base64')});
 assert.throws(()=>s.createDiagnosticReport(u,{status:'FINAL',title:'Denied',attachment_refs:[foreign.id]}),/DOCUMENT_NOT_FOUND/);
});
