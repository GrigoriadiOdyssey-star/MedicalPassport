// Targeted contract checks, not a production authorization layer or full JSON Schema engine.
const fields=(o,keys)=>{if(!o||typeof o!=='object'||Array.isArray(o)||Object.keys(o).some(k=>!keys.includes(k))||keys.some(k=>!(k in o)))throw Error('INVALID_FIELDS');};
const nonempty=s=>typeof s==='string'&&s.trim().length>0;
const time=s=>{if(!nonempty(s)||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(s)||!Number.isFinite(Date.parse(s)))throw Error('INVALID_TIME');const [year,month,day,hour,minute,second]=s.slice(0,19).split(/[-T:]/).map(Number);const leap=year%4===0&&(year%100!==0||year%400===0);const days=[31,leap?29:28,31,30,31,30,31,31,30,31,30,31];if(month<1||month>12||day<1||day>days[month-1]||hour>23||minute>59||second>59)throw Error('INVALID_TIME');return Date.parse(s);};
export function validateDeviceEvidence(r){
 fields(r,['record_id','tenant_id','patient_id','device_id','version','previous_record_id','effective_at','recorded_at','event','source','review','settings']);
 for(const k of ['record_id','tenant_id','patient_id','device_id'])if(!nonempty(r[k]))throw Error('INVALID_ID');
 if(!Number.isInteger(r.version)||r.version<1||!(r.previous_record_id===null||nonempty(r.previous_record_id)))throw Error('INVALID_VERSION');
 if(time(r.recorded_at)<time(r.effective_at))throw Error('FUTURE_ACTUAL_EVENT');
 if(!['IMPLANT','CONFIGURATION','REVISION','REPLACEMENT','EXPLANT'].includes(r.event))throw Error('INVALID_EVENT');
 fields(r.source,['record_id','version','sha256','author_id']);if(Object.values(r.source).some(v=>!nonempty(v))||!/^[a-f0-9]{64}$/.test(r.source.sha256))throw Error('INVALID_SOURCE');
 fields(r.review,['state','reviewer_id']);if(!['UNVERIFIED','VERIFIED','REJECTED'].includes(r.review.state)||!(r.review.reviewer_id===null||nonempty(r.review.reviewer_id))||(r.review.state==='VERIFIED'&&!nonempty(r.review.reviewer_id)))throw Error('INVALID_REVIEW');
 if(!Array.isArray(r.settings))throw Error('INVALID_SETTINGS');const codes=new Set();
 for(const s of r.settings){fields(s,['code','value','unit']);if(!nonempty(s.code)||codes.has(s.code))throw Error('INVALID_SETTING_CODE');codes.add(s.code);if(!((typeof s.value==='number'&&Number.isFinite(s.value))||nonempty(s.value)))throw Error('INVALID_SETTING_VALUE');if(!(s.unit===null||nonempty(s.unit))||(typeof s.value==='number'&&!nonempty(s.unit)))throw Error('UNKNOWN_UNIT');}
 return true;
}
export function selectDocumentedConfiguration(records,context){
 fields(context,['tenant_id','patient_id','device_id','as_of']);for(const k of ['tenant_id','patient_id','device_id'])if(!nonempty(context[k]))throw Error('INVALID_CONTEXT');const at=time(context.as_of);
 const ids=new Set(),versions=new Set();for(const r of records){validateDeviceEvidence(r);if(['tenant_id','patient_id','device_id'].some(k=>r[k]!==context[k]))throw Error('CONTEXT_MISMATCH');if(ids.has(r.record_id)||versions.has(r.version))throw Error('AMBIGUOUS_HISTORY');ids.add(r.record_id);versions.add(r.version);}
 const eligible=records.filter(r=>time(r.effective_at)<=at&&time(r.recorded_at)<=at).sort((a,b)=>a.version-b.version);
 if(!eligible.length)return {status:'UNKNOWN',record_id:null};
 for(let i=0;i<eligible.length;i++){const r=eligible[i],previous=eligible[i-1];if(r.version!==i+1||r.previous_record_id!==(previous?.record_id??null)||previous&&time(r.effective_at)<time(previous.effective_at))return {status:'INCOMPLETE_OR_CONFLICTING_HISTORY',record_id:null};}
 const latest=eligible.at(-1);if(latest.review.state!=='VERIFIED')return {status:'LATEST_RECORD_UNVERIFIED',record_id:null};
 if(latest.event==='EXPLANT'||latest.event==='REPLACEMENT')return {status:'NOT_CURRENT_FOR_THIS_DEVICE',record_id:latest.record_id};
 return {status:'LATEST_VERIFIED_DOCUMENTED',record_id:latest.record_id,version:latest.version,effective_at:latest.effective_at,source_sha256:latest.source.sha256};
}
