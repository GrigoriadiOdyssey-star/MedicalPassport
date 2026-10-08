import { randomUUID } from "node:crypto";
import { AssistantStore, AssistantStoreError } from "./assistant-store.mjs";
import { assistantConfig, OpenAIResponses, AssistantProviderError } from "./openai-responses.mjs";
import { buildAssistantContext } from "./assistant-context.mjs";
import { ASSISTANT_RULES_VERSION, safetyDecision, systemInstructions, validateModelAnswer } from "./assistant-safety.mjs";
import { CloudHttpError } from "./cloud-runtime.mjs";
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const fail=(status,code)=>{throw new CloudHttpError(status,code);};
const allowed=new Set(["message","conversation_id","request_id","language","version"]);
function validate(payload){
 if(!payload||typeof payload!=="object"||Array.isArray(payload)||Object.keys(payload).some(k=>!allowed.has(k)))fail(400,"AI_INPUT_INVALID");
 if(typeof payload.message!=="string"||!payload.message.trim()||payload.message.length>6000||Buffer.byteLength(payload.message)>12000)fail(400,"AI_INPUT_LIMIT");
 if(!["ru","en"].includes(payload.language)||!UUID.test(payload.request_id??"")||payload.conversation_id&&!UUID.test(payload.conversation_id))fail(400,"AI_INPUT_INVALID");
 if(payload.version!==undefined&&(!Number.isSafeInteger(payload.version)||payload.version<0))fail(400,"AI_INPUT_INVALID");
 return {...payload,message:payload.message.trim()};
}
const publicMessage=m=>({id:m.message_id??m.id,role:m.role,text:m.text,created_at:m.generated_at??m.created_at,mode:m.mode??m.response?.mode,source_records:m.source_records??m.response?.source_records??[]});
function envelope({text,mode,safe_status="INFORMATION",source_records=[],conversation_id=null,message_id=randomUUID(),provider="edht",model="informational-safety-v1",reference=null}){
 return{text,mode,persisted:false,safe_status,source_records,conversation_id,message_id,provider,model,is_generative_ai:mode==="live",generated_at:new Date().toISOString(),rules_version:ASSISTANT_RULES_VERSION,request_reference:reference};
}
export async function assistantRoute({cloud,user,method,path,payload,env=process.env,providerFactory,storeFactory}={}){
 if(!path.startsWith("/api/assistant"))return null;
 const config=assistantConfig(env);
 if(method==="GET"&&path==="/api/assistant/status")return{body:{mode:config.mode==="live"&&!config.testUsers.includes(user.id)?"unavailable":config.mode,reason:config.mode==="live"&&!config.testUsers.includes(user.id)?"AI_NOT_CONFIGURED":config.reason??null,storage_ready:config.storageReady}};
 const store=()=>storeFactory?storeFactory(cloud,config.capability):new AssistantStore(cloud,config.capability);
 try{
  if(path.startsWith("/api/assistant/conversations")){
   if(!config.storageReady)fail(503,"AI_STORAGE_NOT_CONFIGURED");
   if(path==="/api/assistant/conversations"&&method==="GET")return{body:{conversations:(await store().list(user.id)).map(r=>({id:r.conversation_id,version:r.version,created_at:r.created_at,updated_at:r.updated_at}))}};
   if(path==="/api/assistant/conversations"&&method==="POST"){
    if(Object.keys(payload??{}).length)fail(400,"AI_INPUT_INVALID");
    const result=await store().create();return{status:201,body:{id:result.conversation_id,version:result.version}};
   }
   const match=path.match(/^\/api\/assistant\/conversations\/([^/]+)(\/delete)?$/);
   if(!match||!UUID.test(match[1]))fail(404,"NOT_FOUND");
   if(method==="GET"&&!match[2]){const h=await store().history(match[1]);return{body:{id:h.conversation_id,version:h.version,messages:h.messages.map(publicMessage)}};}
   if(method==="POST"&&match[2]){if(Object.keys(payload??{}).length)fail(400,"AI_INPUT_INVALID");return{body:await store().delete(match[1])};}
   fail(405,"METHOD_NOT_ALLOWED");
  }
  if(path!=="/api/assistant"||method!=="POST")fail(404,"NOT_FOUND");
  const input=validate(payload),decision=safetyDecision(input.message,input.language);
  if(decision.text)return{body:envelope({text:decision.text,mode:"deterministic",safe_status:decision.status,conversation_id:input.conversation_id??null})};
  if(config.mode==="disabled"||config.mode==="unavailable")fail(503,config.reason??"AI_DISABLED");
  if(config.mode==="live"&&!config.testUsers.includes(user.id))fail(403,"AI_NOT_CONFIGURED");
  const context=buildAssistantContext(await cloud.records(user.id),input.message);
  if(config.mode==="deterministic")return{body:envelope({mode:"deterministic",source_records:context.sources,text:input.language==="en"
   ? "Offline context summary: "+context.records.length+" authorised records selected. This mode does not generate answers to questions."
   : "Сводка offline-контекста: выбрано разрешённых записей — "+context.records.length+". Этот режим не генерирует ответы на вопросы."})};
  const conversations=store();
  const cid=input.conversation_id??(await conversations.create()).conversation_id;
  // History is authoritative on the server, re-authorised through the current JWT on every turn.
  const history=await conversations.history(cid);
  const prior=history.messages.slice(-12).map(m=>({role:m.role,text:String(m.text).slice(0,6000)}));
  const instructions=systemInstructions(input.language);
  let providerInput=[...prior,{role:"user",text:input.message}];
  // UTF-8 bytes plus fixed envelope overhead is a conservative bound, never a claimed actual usage.
  let estimatedInput=Buffer.byteLength(JSON.stringify({instructions,messages:providerInput,context}))+2048;
  while(estimatedInput>config.maxInputTokens&&prior.length){prior.shift();providerInput=[...prior,{role:"user",text:input.message}];estimatedInput=Buffer.byteLength(JSON.stringify({instructions,messages:providerInput,context}))+2048;}
  if(estimatedInput>config.maxInputTokens)fail(400,"AI_INPUT_LIMIT");
  const reservation=await conversations.reserve({conversationId:cid,requestId:input.request_id,message:input.message,language:input.language,expectedVersion:input.version??history.version,maxInputTokens:estimatedInput,maxOutputTokens:config.maxOutputTokens});
  if(reservation.status==="completed"){
   // Do not repeat a potentially billable request. Revalidate cached sources against today's authorised context.
   const r=reservation.response;
   if(!r||r.source_records?.some(s=>!context.sources.some(c=>c.id===s.id&&c.version===s.version)))fail(409,"AI_CONTEXT_CHANGED");
   return{body:r};
  }
  if(reservation.model!==config.model||reservation.pricing_version!==config.pricingVersion){
   await conversations.finish({requestId:input.request_id,status:"failed_before_send"});fail(503,"AI_CONFIGURATION_INVALID");
  }
  let sent=false,settled=false;
  try{
   const provider=providerFactory?providerFactory():new OpenAIResponses({apiKey:env.OPENAI_API_KEY});
   sent=true;
   const result=await provider.respond({model:reservation.model,instructions,messages:providerInput,context,maxOutputTokens:config.maxOutputTokens,timeoutMs:config.timeoutMs});
   const answer=validateModelAnswer(result.answer,context.sources);
   const response=envelope({...answer,mode:"live",conversation_id:cid,message_id:randomUUID(),provider:result.provider,model:result.model,reference:result.provider_reference});
   const completed=await conversations.finish({requestId:input.request_id,response,usage:result.usage,status:"completed"});settled=true;
   if(completed.status!=="completed"||!completed.response)fail(502,"AI_USAGE_UNKNOWN");
   return{body:completed.response};
  }catch(error){
   if(!settled)await conversations.finish({requestId:input.request_id,status:sent?"unknown":"failed_before_send",failureCode:["AI_PROVIDER_TIMEOUT","AI_PROVIDER_UNAVAILABLE"].includes(error.message)?error.message:error.message==="AI_PROVIDER_RATE_LIMITED"?"AI_PROVIDER_RATE_LIMIT":["AI_RESPONSE_INVALID","AI_SOURCE_INVALID","AI_UNSAFE_RESPONSE","AI_USAGE_UNKNOWN"].includes(error.message)?"AI_INVALID_RESPONSE":"AI_PROVIDER_UNAVAILABLE"});
   if(error instanceof AssistantProviderError)fail(error.status,error.message);
   if(["AI_RESPONSE_INVALID","AI_SOURCE_INVALID","AI_UNSAFE_RESPONSE"].includes(error.message))fail(502,error.message);
   throw error;
  }
 }catch(error){if(error instanceof AssistantStoreError)fail(error.status,error.code);throw error;}
}
