import {createHash} from "node:crypto";
import {CloudHttpError,ms} from "./cloud-runtime.mjs";
const fail=(s,c)=>{throw new CloudHttpError(s,c)};
const uuid=v=>{if(typeof v!=="string"||!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v))fail(400,"INVALID_ID");return v;};
const bucket="edht-medical-documents";
export const cloudStoragePolicy={documentBytes:4194304,imagingBytes:4194304,patientBytes:21474836480,chunkBytes:2097152,previewBytes:4194304,sessionHours:24,activeSessions:64,transport:"supabase-signed",imagingUpload:false};
const projection=s=>({...s,kind:"document",received:s.status==="COMPLETE"?s.size:0,created_at:ms(s.created_at),expires_at:ms(s.expires_at)});
async function sessions(cloud,user,id){
 const q={select:"id,document_id,version,name,mime,size,sha256,status,created_at,expires_at",patient_user_id:"eq."+uuid(user.id),order:"created_at.desc",limit:"64"};
 if(id)q.id="eq."+uuid(id);else{q.status="eq.OPEN";q.expires_at="gt."+new Date().toISOString();}
 const rows=await cloud.rows("edht_upload_sessions",q);if(id&&!rows.length)fail(404,"NOT_FOUND");return rows;
}
async function signUpload(cloud,user,s){
 if(s.status!=="OPEN"||ms(s.expires_at)<=Date.now())fail(409,"UPLOAD_CLOSED");
 const path=user.id+"/"+s.document_id+"/"+s.version;
 const data=await cloud.request("/storage/v1/object/upload/sign/"+bucket+"/"+path,{method:"POST",body:{}});
 const signed=new URL(cloud.base.origin+"/storage/v1"+data.url);
 if(signed.origin!==cloud.base.origin||!signed.pathname.startsWith("/storage/v1/object/upload/sign/"+bucket+"/")||!signed.searchParams.has("token"))throw Error("CLOUD_RESPONSE_INVALID");
 return {...projection(s),transport:"supabase-signed",upload_url:signed.toString()};
}
export async function documentRoute({cloud,user,method,path,params,payload}){
 if(method==="GET"&&path==="/api/storage-policy")return {body:cloudStoragePolicy};
 if(method==="GET"&&path==="/api/uploads")return {body:(await sessions(cloud,user)).map(projection)};
 if(method==="POST"&&path==="/api/uploads"){
  if(payload.kind!=="document")fail(400,"CLOUD_IMAGING_UPLOAD_UNAVAILABLE");
  if(typeof payload.name!=="string"||/[\r\n]/.test(payload.name)||!Number.isSafeInteger(payload.size)||payload.size<1||payload.size>cloudStoragePolicy.documentBytes)fail(400,"INVALID_UPLOAD");
  const s=await cloud.rpc("edht_upload_reserve",{p_name:payload.name,p_mime:payload.mime,p_size:payload.size,p_sha256:payload.sha256,p_metadata:payload.metadata||{}});
  return {status:201,body:await signUpload(cloud,user,s)};
 }
 if(method==="GET"&&/^\/api\/uploads\/[^/]+$/.test(path)){
  const s=(await sessions(cloud,user,path.split("/")[3]))[0];return {body:await signUpload(cloud,user,s)};
 }
 if(method==="POST"&&/^\/api\/uploads\/[^/]+\/(complete|cancel)$/.test(path)){
  const s=(await sessions(cloud,user,path.split("/")[3]))[0],cancel=path.endsWith("/cancel");
  if(!cancel&&s.status!=="COMPLETE"){
   if(s.status!=="OPEN"||ms(s.expires_at)<=Date.now())fail(409,"UPLOAD_CLOSED");
   const url=new URL("/storage/v1/object/authenticated/"+bucket+"/"+user.id+"/"+s.document_id+"/"+s.version,cloud.base);
   let res;try{res=await cloud.fetch(url,{headers:{apikey:cloud.key,authorization:"Bearer "+cloud.token},signal:AbortSignal.timeout(30000)});}catch{throw Error("CLOUD_BACKEND_UNAVAILABLE");}
   if(!res.ok)fail(res.status===404?409:502,"CLOUD_UPLOAD_VERIFY_FAILED");
   const hash=createHash("sha256");let size=0;
   for await(const chunk of res.body){size+=chunk.byteLength;if(size>cloudStoragePolicy.documentBytes)fail(413,"FILE_TOO_LARGE");hash.update(chunk);}
   if(size!==s.size||hash.digest("hex")!==s.sha256)fail(409,"UPLOAD_INTEGRITY_MISMATCH");
  }
  return {body:await cloud.rpc("edht_upload_finish",{p_id:s.id,p_cancel:cancel})};
 }
 if(method==="POST"&&/^\/api\/documents\/[^/]+\/(metadata|archive)$/.test(path))return {body:await cloud.rpc("edht_document_metadata",{p_id:uuid(path.split("/")[3]),p_body:payload,p_archive:path.endsWith("/archive")})};
 if(method==="GET"&&/^\/api\/documents\/[^/]+$/.test(path)){
  const id=uuid(path.split("/")[3]),q={select:"id,version,object_path,original_name,mime_type,byte_size,metadata",patient_user_id:"eq."+uuid(user.id),id:"eq."+id,order:"version.desc",limit:"1"};
  if(params.has("version")){const v=Number(params.get("version"));if(!Number.isSafeInteger(v)||v<1)fail(400,"INVALID_VERSION");q.version="eq."+v;}
  const d=(await cloud.rows("edht_documents",q))[0];if(!d)fail(404,"NOT_FOUND");
  if(d.metadata?.cloud_upload_pending){const s=await cloud.rows("edht_upload_sessions",{select:"status",patient_user_id:"eq."+uuid(user.id),document_id:"eq."+id,version:"eq."+d.version,limit:"1"});if(s[0]?.status!=="COMPLETE")fail(409,"UPLOAD_INCOMPLETE");}
  const data=await cloud.request("/storage/v1/object/sign/"+bucket+"/"+d.object_path,{method:"POST",body:{expiresIn:30}});
  const redirect=new URL(cloud.base.origin+"/storage/v1"+data.signedURL);
  if(redirect.origin!==cloud.base.origin||!redirect.pathname.startsWith("/storage/v1/object/sign/"+bucket+"/"))throw Error("CLOUD_RESPONSE_INVALID");
  redirect.searchParams.set("download",d.original_name);
  return {redirect:redirect.toString()};
 }
 return null;
}
