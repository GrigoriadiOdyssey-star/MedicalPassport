import { createHash } from "node:crypto";
export class AssistantProviderError extends Error {
  constructor(code,status=503){super(code);this.status=status;this.name="AssistantProviderError";}
}
const schema={type:"object",properties:{text:{type:"string"},source_ids:{type:"array",items:{type:"string"}},safe_status:{type:"string",enum:["INFORMATION","CLINICIAN_REVIEW_REQUIRED","EMERGENCY_ESCALATION"]}},required:["text","source_ids","safe_status"],additionalProperties:false};
export function assistantConfig(env=process.env){
  const mode=env.EDHT_AI_MODE??"disabled";
  const testUsers=(env.EDHT_AI_TEST_USER_IDS??"").split(",").filter(Boolean);
  const validUsers=testUsers.length>0&&testUsers.length<=10&&testUsers.every(id=>/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id));
  const config={mode,testUsers,storageReady:env.EDHT_AI_STORAGE_READY==="true",model:env.EDHT_AI_MODEL,pricingVersion:env.EDHT_AI_PRICING_VERSION,maxInputTokens:32768,maxOutputTokens:1200,timeoutMs:20000,capability:env.EDHT_AI_LEDGER_CAPABILITY};
  if(!["disabled","deterministic","live"].includes(mode))return{...config,mode:"unavailable",reason:"AI_CONFIGURATION_INVALID"};
  if(mode==="disabled")return{...config,reason:"AI_DISABLED"};
  if(mode==="deterministic")return config;
  if(!validUsers||env.EDHT_AI_BUDGET_APPROVED!=="true"||!config.storageReady||!/^[A-Za-z0-9_-]{43,128}$/.test(config.capability??"")||
     typeof env.OPENAI_API_KEY!=="string"||env.OPENAI_API_KEY.length<20||/[\r\n]/.test(env.OPENAI_API_KEY)||
     !/^[a-zA-Z0-9._:-]{1,100}$/.test(config.model??"")||!/^[a-zA-Z0-9._:-]{1,100}$/.test(config.pricingVersion??""))
    return{...config,mode:"unavailable",reason:"AI_NOT_CONFIGURED"};
  return config;
}
export class OpenAIResponses{
  #key;#fetch;
  constructor({apiKey,fetchImpl=globalThis.fetch}={}){
    if(typeof apiKey!=="string"||apiKey.length<20||/[\r\n]/.test(apiKey))throw new AssistantProviderError("AI_NOT_CONFIGURED");
    this.#key=apiKey;this.#fetch=fetchImpl;
  }
  async respond({model,instructions,messages,context,maxOutputTokens=1200,timeoutMs=20000}){
    const input=[{role:"user",content:JSON.stringify({kind:"untrusted_patient_context",...context})},...messages.map(m=>({role:m.role,content:m.text}))];
    let response;
    try{response=await this.#fetch("https://api.openai.com/v1/responses",{method:"POST",redirect:"error",headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.#key},signal:AbortSignal.timeout(timeoutMs),
      body:JSON.stringify({model,instructions,input,store:false,service_tier:"default",max_output_tokens:maxOutputTokens,text:{format:{type:"json_schema",name:"edht_informational_answer",strict:true,schema}}})});}
    catch(error){throw new AssistantProviderError(error?.name==="TimeoutError"||error?.name==="AbortError"?"AI_PROVIDER_TIMEOUT":"AI_PROVIDER_UNAVAILABLE");}
    if(!response.ok)throw new AssistantProviderError(response.status===429?"AI_PROVIDER_RATE_LIMITED":"AI_PROVIDER_UNAVAILABLE",response.status===429?429:503);
    let value;try{
      const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.byteLength;if(size>131072)throw Error("response limit");chunks.push(Buffer.from(chunk));}
      value=JSON.parse(Buffer.concat(chunks).toString("utf8"));
    }catch(error){
      const timeout=error?.name==="TimeoutError"||error?.name==="AbortError";
      throw new AssistantProviderError(timeout?"AI_PROVIDER_TIMEOUT":"AI_RESPONSE_INVALID",timeout?503:502);
    }
    if(value.status!=="completed"||!Array.isArray(value.output))throw new AssistantProviderError("AI_RESPONSE_INVALID",502);
    const text=value.output.filter(x=>x.type==="message"&&x.role==="assistant").flatMap(x=>x.content??[]).filter(x=>x.type==="output_text").map(x=>x.text).join("");
    let answer;try{answer=JSON.parse(text);}catch{throw new AssistantProviderError("AI_RESPONSE_INVALID",502);}
    const usage=value.usage;
    if(!Number.isSafeInteger(usage?.input_tokens)||usage.input_tokens<0||!Number.isSafeInteger(usage?.output_tokens)||usage.output_tokens<0)throw new AssistantProviderError("AI_USAGE_UNKNOWN",502);
    return{answer,usage:{input_tokens:usage.input_tokens,output_tokens:usage.output_tokens,...(usage.input_tokens_details?.cached_tokens>0?{cached_input_tokens:usage.input_tokens_details.cached_tokens,estimated:true}:{})},provider:"openai",model,
      provider_reference:typeof value.id==="string"?createHash("sha256").update(value.id).digest("hex").slice(0,24):null};
  }
}
