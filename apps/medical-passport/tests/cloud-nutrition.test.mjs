import test from "node:test";
import assert from "node:assert/strict";
import {NUTRITION_PANEL,NutritionValidationError,validateAnthropometryBody,anthropometryValid,nutritionView} from "../public/nutrition-model.mjs";
import {createNutritionUI} from "../public/nutrition-ui.js";
import {CloudRuntimeRepository} from "../public/api/_lib/cloud-runtime.mjs";
import {cleanBody} from "../public/api/_lib/cloud-record-validation.mjs";
import {escape,route} from "../public/ui.js";
import {translate} from "../public/i18n.js";
const USER="11111111-1111-4111-8111-111111111111",OTHER="22222222-2222-4222-8222-222222222222";
const body=()=>({panel:NUTRITION_PANEL,name:"weight",value:"72.4",unit:"kg",observed_at:"2026-10-12T09:00:00Z",method:"home_measurement",notes:"Synthetic measurement"});
const record=(id,b=body(),archived=0)=>({id,version:2,kind:"observation",body:b,source:"patient_reported",created_at:1791795600000,archived});
test("nutrition capture validates strict units, values, time and patient provenance",()=>{
 assert.deepEqual(validateAnthropometryBody(body()),body());assert.deepEqual(cleanBody("observation",body()),body());
 for(const patch of[{value:"0"},{value:"-1"},{value:"NaN"},{unit:"lb"},{method:"clinician_verified"},{observed_at:"2026-02-30T09:00:00Z"},{patient_user_id:OTHER},{review_state:"approved"}])assert.throws(()=>validateAnthropometryBody({...body(),...patch}),NutritionValidationError);
 assert.throws(()=>cleanBody("observation",{...body(),unit:"lb"}),e=>e.status===400&&e.message==="INVALID_NUTRITION_RECORD");
 assert.equal(cleanBody("observation",{name:"Existing unrelated observation",value:"3",unit:"arbitrary"}).value,"3");
});
test("nutrition view filters before paging and preserves legacy source and history identity",()=>{
 const unrelated=Array.from({length:35},(_,i)=>record("other-"+i,{name:"Other",value:"1",unit:"x"})),nutrition=Array.from({length:32},(_,i)=>record("nutrition-"+i));
 const view=nutritionView([...unrelated,...nutrition],{offset:30});assert.equal(view.loaded_count,32);assert.equal(view.records.length,2);assert.equal(view.records[0],nutrition[30]);
 const invalid=record("legacy",{...body(),unit:"legacy_unit"});assert.equal(anthropometryValid(invalid.body),false);assert.equal(nutritionView([invalid]).records[0],invalid);
 assert.equal(nutritionView([record("archived",body(),1)]).loaded_count,0);assert.equal(nutritionView([record("archived",body(),1)],{archived:true}).loaded_count,1);
});
test("nutrition cloud view uses current owner and successful empty reads; backend rejection propagates",async()=>{
 const repo=Object.create(CloudRuntimeRepository.prototype);
 repo.fullProfile=async user=>{assert.equal(user.id,USER);return{id:USER,locale:"ru",timezone:"UTC"};};
 repo.records=async userId=>{assert.equal(userId,USER);return[];};
 repo.documents=async()=>{throw Error("UNRELATED_DOCUMENT_READ");};
 const view=await repo.view({id:USER},"nutrition",new URLSearchParams({patient_user_id:OTHER}));
 assert.deepEqual(view.records,[]);assert.equal(view.loaded_count,0);assert.equal(view.capability,"CAP-NUTRITION");
 repo.records=async()=>{throw Error("CLOUD_BACKEND_UNAVAILABLE");};
 await assert.rejects(repo.view({id:USER},"nutrition",new URLSearchParams()),{message:"CLOUD_BACKEND_UNAVAILABLE"});
});
function ui(archived=false){return createNutritionUI({t:key=>translate(key,"ru"),e:escape,b:(key,action,extra="")=>'<button data-action="'+escape(action)+'" '+extra+'>'+escape(translate(key,"ru"))+'</button>',head:key=>'<h1>'+escape(translate(key,"ru"))+'</h1>',field:()=>"",modal:()=>{},actions:()=>"",get:()=>({locale:"ru",archived})});}
test("nutrition UI distinguishes successful empty data, invalid legacy values and malformed responses",()=>{
 assert.match(ui().render(nutritionView([])),/Измерений пока нет/);assert.throws(()=>ui().render({}),{message:"CLOUD_RESPONSE_INVALID"});
 const html=ui().render(nutritionView([record("synthetic",{...body(),notes:"<script>synthetic</script>"})]));
 assert.match(html,/&lt;script&gt;synthetic/);assert.doesNotMatch(html,/<script>/);assert.match(html,/Не подтверждено врачом/);
 assert.match(ui().render(nutritionView([record("legacy",{...body(),unit:"legacy"})])),/не соответствует формату/);
 assert.equal(route("#/nutrition","patient"),"nutrition");assert.equal(route("#/nutrition","doctor"),"doctor");
});
test("nutrition form builds only existing observation fields and derives its unit",()=>{
 const input={name:"height",value:"170",observed_at:"2026-10-12T09:00:00Z",method:"self_reported",notes:"Synthetic"};
 assert.deepEqual(ui().formBody(input),{panel:NUTRITION_PANEL,...input,unit:"cm"});
 assert.throws(()=>ui().formBody({...input,value:"0"}),NutritionValidationError);
 assert.throws(()=>ui().formBody({...input,source:"clinician_verified"}),NutritionValidationError);
});
