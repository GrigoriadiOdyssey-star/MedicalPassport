export const NUTRITION_PANEL = "nutrition_anthropometry";
export const NUTRITION_METRICS = Object.freeze({
  weight: Object.freeze({unit:"kg",label:"nutritionWeight"}),
  height: Object.freeze({unit:"cm",label:"nutritionHeight"}),
  waist: Object.freeze({unit:"cm",label:"nutritionWaist"}),
});
export class NutritionValidationError extends Error {
  constructor(){super("INVALID_NUTRITION_RECORD");}
}
export function validateAnthropometryBody(body){
  const reject=()=>{throw new NutritionValidationError();};
  const fields=["panel","name","value","unit","observed_at","method","notes"];
  if(!body||typeof body!=="object"||Array.isArray(body)||Object.keys(body).some(k=>!fields.includes(k)))reject();
  for(const key of["panel","name","value","unit","observed_at","method"])if(typeof body[key]!=="string"||!body[key]||body[key].length>2000)reject();
  if(body.notes!==undefined&&(typeof body.notes!=="string"||body.notes.length>2000))reject();
  if(body.panel!==NUTRITION_PANEL||!Object.hasOwn(NUTRITION_METRICS,body.name))reject();
  if(body.unit!==NUTRITION_METRICS[body.name].unit||!["self_reported","home_measurement"].includes(body.method))reject();
  if(!/^(?:0|[1-9][0-9]*)(?:\.[0-9]+)?$/.test(body.value)||!Number.isFinite(Number(body.value))||Number(body.value)<=0)reject();
  if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(body.observed_at))reject();
  const at=Date.parse(body.observed_at);
  if(!Number.isFinite(at)||new Date(at).toISOString().slice(0,19)!==body.observed_at.slice(0,19))reject();
  return{...body};
}
export function isAnthropometryRecord(record){return record?.kind==="observation"&&record.body?.panel===NUTRITION_PANEL;}
export function anthropometryValid(body){try{validateAnthropometryBody(body);return true;}catch(error){if(error instanceof NutritionValidationError)return false;throw error;}}
export function nutritionView(records,{offset=0,archived=false}={}){
  if(!Array.isArray(records))throw Error("CLOUD_RESPONSE_INVALID");
  if(!Number.isSafeInteger(offset)||offset<0||offset>100000)throw Error("INVALID_PAGE");
  const selected=records.filter(r=>isAnthropometryRecord(r)&&Boolean(r.archived)===archived);
  return{capability:"CAP-NUTRITION",profile:"GENERAL",clinical_validation:"NOT_APPROVED",records:selected.slice(offset,offset+30),loaded_count:selected.length,offset,page_size:30};
}
