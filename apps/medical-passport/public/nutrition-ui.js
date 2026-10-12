import {NUTRITION_PANEL,NUTRITION_METRICS,NutritionValidationError,anthropometryValid,validateAnthropometryBody} from "./nutrition-model.mjs";
export function createNutritionUI(ctx){
 const{t,e,b,head,field,modal,actions,get}=ctx;
 const dateTime=value=>{const at=new Date(value);return Number.isFinite(at.getTime())?at.toLocaleString(get().locale==="ru"?"ru-RU":"en-GB"):String(value??"");};
 function render(data){
  if(!data||data.capability!=="CAP-NUTRITION"||!Array.isArray(data.records)||!Number.isSafeInteger(data.loaded_count)||!Number.isSafeInteger(data.offset))throw Error("CLOUD_RESPONSE_INVALID");
  const archived=Boolean(get().archived);
  const tabs='<div class="toolbar tabs">'+[false,true].map(v=>b(v?"archived":"active","archive-tab",'data-value="'+(v?1:0)+'" aria-pressed="'+(archived===v)+'"')).join("")+'</div>';
  const cards=data.records.map(r=>{
   const valid=anthropometryValid(r.body),metric=Object.hasOwn(NUTRITION_METRICS,r.body?.name??"")?NUTRITION_METRICS[r.body.name]:null;
   const method=r.body?.method==="home_measurement"?t("nutritionHomeMeasured"):r.body?.method==="self_reported"?t("nutritionSelfReported"):r.body?.method;
   return '<article class="card"><div class="row spread"><h2>'+e(metric?t(metric.label):r.body?.name)+'</h2><span class="chip">'+e(t("nutritionUnverified"))+'</span></div>'+(!valid?'<p role="status" class="note">'+e(t("nutritionLegacyWarning"))+'</p>':"")+'<p class="big-value">'+e(r.body?.value)+' '+e(r.body?.unit)+'</p><p>'+e(t("nutritionMeasuredAt"))+': '+e(dateTime(r.body?.observed_at))+'</p><p>'+e(t("nutritionMethod"))+': '+e(method)+'</p><p>'+e(r.body?.notes)+'</p><small>'+e(t("source"))+': '+e(r.source==="patient_reported"?t("nutritionSourcePatient"):r.source)+' · '+e(t("version"))+' '+e(r.version)+' · '+e(dateTime(r.created_at))+' · '+e(r.id)+'</small><div class="card-actions">'+(valid&&!r.archived?b("edit","nutrition-edit",'data-id="'+e(r.id)+'"'):"")+(!r.archived?b("archive","archive-record",'data-id="'+e(r.id)+'"'):"")+b("history","history",'data-id="'+e(r.id)+'"',"ghost")+'</div></article>';
  }).join("");
  const empty='<section class="empty"><h2>'+e(t(archived?"nutritionEmptyArchive":"nutritionEmpty"))+'</h2><p>'+e(t("nutritionEmptyHelp"))+'</p>'+(!archived?b("nutritionAdd","nutrition-add","",""):"")+'</section>';
  const pager='<div class="row spread toolbar">'+(data.offset?b("previous","page",'data-offset="'+Math.max(0,data.offset-30)+'"'):"<span></span>")+(data.offset+data.records.length<data.loaded_count?b("next","page",'data-offset="'+(data.offset+30)+'"'):"")+'</div>';
  return head("nutrition",b("nutritionAdd","nutrition-add","",""))+'<section class="card"><p>'+e(t("nutritionBoundary"))+'</p><small>'+e(t("nutritionLoadedCount"))+': '+data.loaded_count+'</small></section>'+tabs+(cards?'<div class="grid">'+cards+'</div>':empty)+pager;
 }
 function openForm(record){
  const body=record?.body??{};
  modal("nutritionAdd",'<form id="nutrition-form" '+(record?'data-id="'+e(record.id)+'" data-version="'+e(record.version)+'"':"")+' novalidate>'+field("name","nutritionMeasurement",body.name??"weight","text",true,[["weight","nutritionWeight"],["height","nutritionHeight"],["waist","nutritionWaist"]])+field("value","nutritionValue",body.value??"","text",true)+'<p class="help">'+e(t("nutritionUnits"))+'</p>'+field("observed_at","nutritionTimeUTC",body.observed_at??new Date().toISOString(),"text",true)+field("method","nutritionMethod",body.method??"self_reported","text",true,[["self_reported","nutritionSelfReported"],["home_measurement","nutritionHomeMeasured"]])+field("notes","notes",body.notes??"","textarea")+'<p class="help">'+e(t("nutritionUnverified"))+'</p><div data-form-error class="field-error" role="alert"></div>'+actions()+'</form>');
 }
 function formBody(values){
  if(!values||typeof values!=="object"||Array.isArray(values)||Object.keys(values).some(k=>!["name","value","observed_at","method","notes"].includes(k)))throw new NutritionValidationError();
  const body={panel:NUTRITION_PANEL,name:values.name,value:values.value?.trim(),unit:NUTRITION_METRICS[values.name]?.unit,observed_at:values.observed_at?.trim(),method:values.method,notes:values.notes??""};
  return validateAnthropometryBody(body);
 }
 return{render,openForm,formBody};
}
