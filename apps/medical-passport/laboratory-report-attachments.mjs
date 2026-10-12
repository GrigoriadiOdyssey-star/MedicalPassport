import {HttpError} from './store.mjs';

const fail=(code,status=400)=>{throw new HttpError(status,code)};
const refs=value=>{
  if(value==null)return [];
  if(!Array.isArray(value)||value.length>100)fail('INVALID_ATTACHMENT_REFS');
  const out=[...new Set(value.map(x=>String(x??'').trim()).filter(Boolean))];
  if(out.some(x=>x.length>200))fail('INVALID_ATTACHMENT_REFS');
  return out;
};

export function attachLaboratoryReportAttachments(Store){
  if(Store.prototype.laboratoryReportAttachmentsAttached)return;
  Store.prototype.laboratoryReportAttachmentsAttached=true;

  const validate=function(user,value){
    const p=this.patient(user),ids=refs(value);
    if(!ids.length)return ids;
    const found=this.db.prepare(`SELECT id FROM documents WHERE patient_id=? AND id IN (${ids.map(()=>'?').join(',')})`).all(p.id,...ids).map(x=>x.id);
    if(found.length!==ids.length)fail('DOCUMENT_NOT_FOUND',404);
    return ids;
  };

  const create=Store.prototype.createDiagnosticReport;
  if(create&&!create.master27AttachmentValidation){
    const wrapped=function(user,input={}){
      return create.call(this,user,{...input,attachment_refs:validate.call(this,user,input.attachment_refs)});
    };
    wrapped.master27AttachmentValidation=true;
    Store.prototype.createDiagnosticReport=wrapped;
  }

  const revise=Store.prototype.reviseDiagnosticReport;
  if(revise&&!revise.master27AttachmentValidation){
    const wrapped=function(user,id,input={}){
      const next={...input};
      if(Object.prototype.hasOwnProperty.call(input,'attachment_refs'))next.attachment_refs=validate.call(this,user,input.attachment_refs);
      return revise.call(this,user,id,next);
    };
    wrapped.master27AttachmentValidation=true;
    Store.prototype.reviseDiagnosticReport=wrapped;
  }

  const read=Store.prototype.labReport;
  if(read&&!read.master27AttachmentResolution){
    const wrapped=function(user,id){
      const p=this.patient(user),report=read.call(this,user,id),ids=refs(report.current?.attachment_refs);
      const attachments=ids.length?this.db.prepare(`SELECT id,name,mime,document_type,source,sha256,created_at FROM documents WHERE patient_id=? AND id IN (${ids.map(()=>'?').join(',')}) ORDER BY created_at DESC`).all(p.id,...ids):[];
      return{...report,attachments};
    };
    wrapped.master27AttachmentResolution=true;
    Store.prototype.labReport=wrapped;
  }
}
