import test from "node:test";
import assert from "node:assert/strict";
import { createApplication } from "../server.mjs";
import {
  distanceKm,
  freshnessState,
  productMatch,
  priceComparable,
  nextOrderStatus,
} from "../pharmacy.mjs";

const password="Synthetic-master26-test-123!";

function setup(t){
  let now=Date.parse("2026-09-20T12:00:00Z");
  const app=createApplication({database:":memory:",now:()=>now}),s=app.store;
  t.after(()=>s.close());
  const p=s.register({name:"Synthetic Patient",email:"master26@example.test",password});
  const d=s.register({name:"Synthetic Doctor",email:"doctor26@example.test",password,role:"doctor"},true);
  const login=(email)=>s.session(s.login(email,password).token);
  return {app,s,u:login(p.email),doctor:login(d.email),advance:(ms)=>now+=ms,now:()=>now};
}
test("distance is bounded and location is never persisted by pharmacy search",t=>{
  const {s,u}=setup(t);
  const d=distanceKm({lat:51.5074,lon:-0.1278},{lat:51.5142,lon:-0.1028});
  assert.ok(d>1&&d<3);
  const before=s.db.prepare("SELECT COUNT(*) n FROM pharmacy_recent_searches").get().n;
  const r=s.pharmacySearch(u,{lat:"51.5074",lon:"-0.1278",sort:"distance"});
  assert.equal(r.user_location_persisted,false);
  assert.ok(r.results[0].distance_km!==null);
  assert.equal(s.db.prepare("SELECT COUNT(*) n FROM pharmacy_recent_searches").get().n,before);
  assert.equal(s.db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%location%'").all().length,0);
});
test("product matching distinguishes exact identity, strength, form and package without clinical substitution",()=>{
  const a={country:"GB",local_product_identifier:"A",active_ingredient:"x",strength:"500",dose_form:"tablet",package:"20",therapeutic_group:"g"};
  assert.equal(productMatch(a,{...a}),"EXACT_PRODUCT");
  assert.equal(productMatch(a,{...a,local_product_identifier:"B",strength:"250"}),"SAME_ACTIVE_INGREDIENT");
  assert.equal(productMatch(a,{...a,local_product_identifier:"B",dose_form:"capsule"}),"SAME_STRENGTH");
  assert.equal(productMatch(a,{...a,local_product_identifier:"B",package:"40"}),"SAME_FORM");
  assert.equal(productMatch(a,{...a,local_product_identifier:"B"}),"GENERIC_EQUIVALENT_CANDIDATE");
  assert.equal(productMatch(a,{...a,local_product_identifier:"B",active_ingredient:"y",therapeutic_group:"g"}),"THERAPEUTIC_ALTERNATIVE");
  assert.equal(priceComparable(a,{...a,local_product_identifier:"B"}),true);
  assert.equal(priceComparable(a,{...a,local_product_identifier:"B",strength:"250"}),false);
});
test("UNKNOWN stock remains UNKNOWN and stale observations remain visibly stale",t=>{
  const {s,u,advance}=setup(t);
  let r=s.pharmacySearch(u,{q:"amoxicillin",inventory:"UNKNOWN"});
  assert.ok(r.results.length>0);
  assert.ok(r.results.every(p=>p.inventory.some(i=>i.state==="UNKNOWN")));
  const target=r.results.flatMap(p=>p.inventory).find(i=>i.state==="UNKNOWN");
  assert.equal(target.state,"UNKNOWN");
  advance(3*3600000);
  r=s.pharmacySearch(u,{q:"amoxicillin"});
  assert.ok(r.results.flatMap(p=>p.inventory).some(i=>i.freshness==="STALE"));
  assert.equal(freshnessState(target.observed_at,target.freshness_ms,s.now()),"STALE");
});
test("filters compose and unsupported benefit/insurance are never inferred",t=>{
  const {s,u}=setup(t);
  const r=s.pharmacySearch(u,{q:"amoxicillin",pickup:"true",electronic_prescription:"true",inventory:"IN_STOCK"});
  assert.ok(r.results.length>=1);
  for(const p of r.results){assert.equal(p.pickup,1);assert.equal(p.electronic_prescription,1);assert.ok(p.inventory.some(i=>i.state==="IN_STOCK"))}
  const rx=s.pharmacyPrescriptions(u)[0];
  assert.equal(rx.payment_model,"SELF_PAY");
  assert.notEqual(rx.payment_model,"INSURANCE");
});
test("order state machine rejects impossible transitions",()=>{
  assert.equal(nextOrderStatus("CREATED","submit","PICKUP"),"PENDING");
  assert.equal(nextOrderStatus("PENDING","confirm","PICKUP"),"CONFIRMED");
  assert.equal(nextOrderStatus("CONFIRMED","ready","PICKUP"),"READY_FOR_PICKUP");
  assert.equal(nextOrderStatus("READY_FOR_PICKUP","dispense","PICKUP"),"COMPLETED");
  assert.throws(()=>nextOrderStatus("CREATED","dispense","PICKUP"),/INVALID_ORDER_TRANSITION/);
});
test("patient-only pharmacy boundary denies doctor access",t=>{
  const {s,doctor}=setup(t);
  assert.throws(()=>s.pharmacySearch(doctor,{q:"amoxicillin"}),/PATIENT_ONLY/);
  assert.throws(()=>s.pharmacyPrescriptions(doctor),/PATIENT_ONLY/);
});
test("provider, inventory, prices, notices and products preserve SYNTHETIC provenance",t=>{
  const {s,u}=setup(t);
  const search=s.pharmacySearch(u,{q:"amoxicillin"});
  assert.equal(search.provider.status,"SYNTHETIC_ADAPTER");
  assert.ok(search.results.every(x=>x.provenance==="SYNTHETIC"));
  assert.ok(search.results.flatMap(x=>x.inventory).every(x=>x.confidence==="SYNTHETIC"));
  assert.ok(s.pharmacyProducts(u,"amoxicillin").every(x=>x.provenance==="SYNTHETIC"));
  assert.ok(s.pharmacyNotices(u).every(x=>x.synthetic===true));
});
test("precision pharmacology context preserves epistemic states and no clinical automation",t=>{
  const {s,u}=setup(t);
  s.addRecord(u,"medication",{name:"Reported medicine",dose:"reported dose",status:"reported"});
  s.addRecord(u,"observation",{name:"Creatinine",value:"1.0",unit:"synthetic"});
  const c=s.pharmacologyContext(u);
  assert.ok(c.records.some(x=>x.kind==="medication"&&x.epistemic_state==="PATIENT_REPORTED"));
  assert.ok(c.records.some(x=>x.kind==="observation"&&x.epistemic_state==="OBSERVED"));
  assert.equal(c.genomics.status,"NOT_CONFIGURED");
  assert.deepEqual(c.clinical_automation,{prescribe:false,dose_adjust:false,stop:false,substitute:false});
});
test("AI assistant and Digital Twin boundary cannot prescribe, dose-adjust, stop or substitute",t=>{
  const {s,u}=setup(t);
  const ai=s.pharmacyAssistant(u,{message:"Should I stop and change dose?"});
  assert.equal(ai.boundaries.prescribe,false);
  assert.match(ai.text,/cannot prescribe/i);
  const sim=s.pharmacySimulation(u,{product_id:"syn-med-amox-500-cap-20",dose_scenario:"synthetic recorded scenario",requested_outcomes:["exposure"]});
  assert.equal(sim.status,"SIMULATED");
  assert.equal(sim.clinical_action,null);
  assert.equal(sim.provenance,"SYNTHETIC_ADAPTER");
  assert.match(sim.uncertainty,/INTERFACE_ONLY/);
});
test("MASTER-26 E2E: prescription to exact medicine to IN_STOCK pickup to dispensing to longitudinal medication history and audit",t=>{
  const {s,u}=setup(t);
  const rx=s.pharmacyPrescriptions(u)[0];
  assert.equal(rx.status,"ACTIVE");
  const products=s.pharmacyProducts(u,rx.local_product_identifier);
  assert.equal(products.length,1);
  assert.equal(products[0].product_id,rx.product_id);
  const found=s.pharmacySearch(u,{q:products[0].generic_name,inventory:"IN_STOCK",pickup:"true"});
  assert.ok(found.results.length>=1);
  const ph=found.results[0];
  const before=s.screen(u,"medication").records.length;
  const order=s.createPharmacyOrder(u,{prescription_id:rx.id,product_id:rx.product_id,pharmacy_id:ph.id,fulfillment:"PICKUP",quantity:1});
  assert.equal(order.status,"CREATED");
  s.pharmacyOrderAction(u,order.id,"confirm");
  s.pharmacyOrderAction(u,order.id,"ready");
  const completed=s.pharmacyOrderAction(u,order.id,"dispense");
  assert.equal(completed.status,"COMPLETED");
  const disp=s.pharmacyDispensing(u);
  assert.equal(disp.length,1);
  const after=s.screen(u,"medication").records;
  assert.equal(after.length,before+1);
  assert.ok(after.some(x=>x.source.startsWith("dispensing:")));
  assert.equal(s.pharmacyPrescription(u,rx.id).status,"DISPENSED");
  const audit=s.auditList(u);
  for(const action of ["PHARMACY_ORDER_CREATED","PRESCRIPTION_DISPENSED","DISPENSING_MEDICATION_RECORDED"])
    assert.ok(audit.some(x=>x.action===action),action);
  assert.equal(s.verifyAudit(),true);
  assert.throws(()=>s.db.exec("DELETE FROM pharmacy_order_history"),/immutable pharmacy order history/);
});
test("HTTP pharmacy workflow retains authentication, CSRF and synthetic boundaries",async t=>{
  const app=createApplication({database:":memory:"}),origin=await app.start();
  t.after(()=>app.close());
  app.store.register({name:"HTTP Patient",email:"http26@example.test",password});
  let cookie="",csrf="";
  const request=async(path,body,token=csrf)=>{
    const r=await fetch(origin+"/api"+path,{method:body===undefined?"GET":"POST",headers:{Origin:origin,Cookie:cookie,"Content-Type":"application/json","x-csrf-token":token},body:body===undefined?undefined:JSON.stringify(body)});
    if(r.headers.has("set-cookie"))cookie=r.headers.get("set-cookie").split(";")[0];
    const data=await r.json();if(data.csrf)csrf=data.csrf;return{status:r.status,data};
  };
  await request("/login",{email:"http26@example.test",password});
  const discovery=await request("/pharmacy?q=amoxicillin&inventory=IN_STOCK");
  assert.equal(discovery.status,200);assert.equal(discovery.data.provider.status,"SYNTHETIC_ADAPTER");
  const rx=(await request("/pharmacy/prescriptions")).data[0];
  const ph=discovery.data.results[0];
  assert.equal((await request("/pharmacy/orders",{prescription_id:rx.id,product_id:rx.product_id,pharmacy_id:ph.id,fulfillment:"PICKUP",quantity:1},"bad")).status,403);
  const created=await request("/pharmacy/orders",{prescription_id:rx.id,product_id:rx.product_id,pharmacy_id:ph.id,fulfillment:"PICKUP",quantity:1});
  assert.equal(created.status,201);
});
