import {createApplication} from './server.mjs';import {localParts,localDate} from './scheduling.mjs';
// Idempotent, fictional data only. Never changes existing accounts or real records.
const app=createApplication(),s=app.store,password='Synthetic-alpha03-demo-123!';
const account=(email,name,role='patient')=>s.db.prepare('SELECT * FROM users WHERE email=?').get(email)??s.register({email,name,password,role},role==='doctor');
const patient=account('alpha03.patient@example.test','Alex Morgan · SYNTHETIC'),doctor=account('alpha03.doctor@example.test','Dr Taylor · SYNTHETIC','doctor');
const user=s.session(s.login(patient.email,password).token),p=s.patient(user),zone='Europe/Moscow';
if(!s.db.prepare('SELECT 1 FROM records WHERE patient_id=?').get(p.id)){
 const realNow=s.now,now=realNow(),day=localDate(now,zone),timeAt=ms=>{const p=localParts(ms,zone);return p.hour+':'+p.minute;};
 s.updateProfile(user,{name:patient.name,birth_date:'1988-04-12',country:'Synthetic demonstration'});s.timezoneChoice(user,{timezone:zone,mode:'home'});
 const m1=s.addRecord(user,'medication',{name:'Demo medicine A · SYNTHETIC',dose:'1',unit:'demo unit',form:'Synthetic tablet',frequency:'Entered demo schedule',status:'active',instructions:'Fictional fixture; do not use for care.',prescriber:'Synthetic clinician (patient reported)'});
 const m2=s.addRecord(user,'medication',{name:'Demo medicine B · SYNTHETIC',dose:'2',unit:'demo units',route:'Fictional route',status:'active',instructions:'Synthetic data, not a prescription.'});
 s.addRecord(user,'allergy',{name:'Demo allergen · SYNTHETIC',reaction:'Fictional reaction',severity:'critical',status:'reported',notes:'Not clinical data.'});
 s.addRecord(user,'emergency',{bloodGroup:'UNKNOWN',rh:'UNKNOWN',allergies:'Demo allergen — fictional',medications:'Two synthetic medicine records',contacts:'Synthetic emergency contact',instructions:'Demo only. No real patient information.'});
 for(const [name,type] of [['Synthetic lab report.txt','lab'],['Synthetic consultation.txt','consultation']]){const doc=s.upload(user,{name,mime:'text/plain',document_type:type,base64:Buffer.from('SYNTHETIC EDHT demo document. No real medical result.').toString('base64')});s.documentMetadata(user,doc.id,{description:'Synthetic Alpha 0.3 fixture',document_date:day,language:'en',translation_status:'original'});}
 s.now=()=>now-6*60000;
 s.configureReminder(user,m1.id,{mode:'daily',times:[timeAt(now-5*60000),timeAt(now+15*60000)],timezone:zone,start:day,confirmed:true});
 s.configureReminder(user,m2.id,{mode:'daily',times:[timeAt(now+30*60000)],timezone:zone,start:day,confirmed:true});
 s.now=realNow;s.createGrant(user,{recipient_id:doctor.id,scopes:['allergy','medication','documents'],duration:'7d'});s.pumpNotifications();
 console.log('Created labelled Alpha 0.3 synthetic scenario.');
}else console.log('Existing Alpha 0.3 scenario retained.');
console.log('Patient: alpha03.patient@example.test; Doctor: alpha03.doctor@example.test');console.log('Synthetic demo password: '+password);s.close();
