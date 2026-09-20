import { randomUUID } from "node:crypto";
import { HttpError, cleanBody } from "./store.mjs";

const fail=(code,status=400)=>{throw new HttpError(status,code);};
const truth=v=>v===true||v===1||v==="1"||v==="true";
const json=v=>{try{return JSON.parse(v)}catch{return null}};
const text=(v,max=200)=>{if(typeof v!=="string"||v.length>max)fail("INVALID_TEXT");return v.trim()};
const upper=v=>String(v??"").toUpperCase();
const DAY=86400000;
export const inventoryStates=["IN_STOCK","LOW_STOCK","OUT_OF_STOCK","UNKNOWN"];
export const prescriptionStates=["ACTIVE","PARTIALLY_DISPENSED","DISPENSED","EXPIRED","CANCELLED","ARCHIVED"];
export const orderStates=["CREATED","PENDING","CONFIRMED","READY_FOR_PICKUP","DISPATCHED","COMPLETED","CANCELLED","FAILED"];
export const epistemicStates=["OBSERVED","MEASURED","CLINICIAN_ASSESSED","PATIENT_REPORTED","INFERRED","PREDICTED","SIMULATED"];

export function distanceKm(a,b){
  if(!a||!b||![a.lat,a.lon,b.lat,b.lon].every(Number.isFinite))return null;
  const r=6371,rad=x=>x*Math.PI/180,dLat=rad(b.lat-a.lat),dLon=rad(b.lon-a.lon);
  const s=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLon/2)**2;
  return 2*r*Math.asin(Math.min(1,Math.sqrt(s)));
}
export function freshnessState(observedAt,freshnessMs,now=Date.now()){
  if(!Number.isFinite(Number(observedAt))||!Number.isFinite(Number(freshnessMs)))return "UNKNOWN";
  return now-Number(observedAt)<=Number(freshnessMs)?"FRESH":"STALE";
}
export function productMatch(a,b){
  if(!a||!b)return "UNKNOWN";
  const same=(k)=>upper(a[k])===upper(b[k])&&upper(a[k])!=="";
  if((a.product_id&&a.product_id===b.product_id)||(same("country")&&same("local_product_identifier")))return "EXACT_PRODUCT";
  if(!same("active_ingredient")){
    return same("therapeutic_group")?"THERAPEUTIC_ALTERNATIVE":"NOT_EQUIVALENT";
  }
  if(!same("strength"))return "SAME_ACTIVE_INGREDIENT";
  if(!same("dose_form"))return "SAME_STRENGTH";
  if(!same("package"))return "SAME_FORM";
  return "GENERIC_EQUIVALENT_CANDIDATE";
}
export function priceComparable(a,b){
  const m=productMatch(a,b);
  return ["EXACT_PRODUCT","GENERIC_EQUIVALENT_CANDIDATE"].includes(m);
}
export function nextOrderStatus(current,action,fulfillment){
  const map={
    CREATED:{submit:"PENDING",confirm:"CONFIRMED",cancel:"CANCELLED",fail:"FAILED"},
    PENDING:{confirm:"CONFIRMED",cancel:"CANCELLED",fail:"FAILED"},
    CONFIRMED:{ready:"READY_FOR_PICKUP",dispatch:fulfillment==="DELIVERY"?"DISPATCHED":null,dispense:"COMPLETED",cancel:"CANCELLED",fail:"FAILED"},
    READY_FOR_PICKUP:{dispense:"COMPLETED",cancel:"CANCELLED",fail:"FAILED"},
    DISPATCHED:{dispense:"COMPLETED",fail:"FAILED"},
  };
  const next=map[current]?.[action]??null;
  if(!next)fail("INVALID_ORDER_TRANSITION",409);
  return next;
}
function localClock(now,zone){
  const parts=new Intl.DateTimeFormat("en-GB",{timeZone:zone,weekday:"short",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date(now));
  return Object.fromEntries(parts.map(p=>[p.type,p.value]));
}
export function pharmacyOpenState(pharmacy,now=Date.now()){
  if(pharmacy.is_24_7)return "OPEN";
  const hours=typeof pharmacy.working_hours==="string"?json(pharmacy.working_hours):pharmacy.working_hours;
  if(!hours)return "UNKNOWN";
  try{
    const p=localClock(now,pharmacy.timezone), rule=hours[p.weekday];
    if(!rule)return "CLOSED";
    const hhmm=p.hour+":"+p.minute;
    return hhmm>=rule[0]&&hhmm<rule[1]?"OPEN":"CLOSED";
  }catch{return "UNKNOWN"}
}
const syntheticPharmacies=[
  ["syn-pharmacy-london-1","EDHT Synthetic Pharmacy London Ltd","Harbour Pharmacy","GB","England","London","10 Synthetic Harbour Road",51.5078,-0.0877,"+44 20 0000 0001","",{"Mon":["08:00","22:00"],"Tue":["08:00","22:00"],"Wed":["08:00","22:00"],"Thu":["08:00","22:00"],"Fri":["08:00","22:00"],"Sat":["09:00","20:00"],"Sun":["10:00","18:00"]},"Europe/London",0,1,1,1,0,1,["STEP_FREE","HEARING_LOOP"]],
  ["syn-pharmacy-london-24","EDHT Synthetic Night Pharmacy Ltd","Night Pharmacy 24","GB","England","London","24 Synthetic Station Street",51.5142,-0.1028,"+44 20 0000 0024","",{},"Europe/London",1,0,1,1,1,0,["STEP_FREE"]],
  ["syn-pharmacy-athens-1","EDHT Synthetic Pharmacy Athens","Athens Care Pharmacy","GR","Attica","Athens","8 Synthetic Ermou",37.9765,23.7257,"+30 210 000 0001","",{"Mon":["08:00","20:00"],"Tue":["08:00","20:00"],"Wed":["08:00","20:00"],"Thu":["08:00","20:00"],"Fri":["08:00","20:00"],"Sat":["09:00","15:00"]},"Europe/Athens",0,1,1,1,0,0,["STEP_FREE"]],
  ["syn-pharmacy-tallinn-1","EDHT Synthetic Pharmacy Tallinn","Baltic Health Pharmacy","EE","Harju","Tallinn","5 Synthetic Viru",59.4372,24.7453,"+372 600 0001","",{"Mon":["08:00","21:00"],"Tue":["08:00","21:00"],"Wed":["08:00","21:00"],"Thu":["08:00","21:00"],"Fri":["08:00","21:00"],"Sat":["09:00","18:00"],"Sun":["10:00","16:00"]},"Europe/Tallinn",0,1,1,1,1,1,["STEP_FREE","LOW_COUNTER"]],
];
const syntheticProducts=[
  ["syn-med-amox-500-cap-20","Amoxicillin Demo","Amoxicillin","amoxicillin","500 mg","capsule","20 capsules","EDHT Synthetic Pharma","GB","GB-SYN-AMOX-500-CAP-20","SYN-AMOX-500-CAP-20","beta-lactam antibacterial"],
  ["syn-med-amox-250-susp","Amoxicillin Suspension Demo","Amoxicillin","amoxicillin","250 mg/5 mL","oral suspension","100 mL","EDHT Synthetic Pharma","GB","GB-SYN-AMOX-250-SUSP","SYN-AMOX-250-SUSP","beta-lactam antibacterial"],
  ["syn-med-paracetamol-500-16","Paracetamol Demo","Paracetamol","paracetamol","500 mg","tablet","16 tablets","EDHT Synthetic Pharma","GB","GB-SYN-PARA-500-16","SYN-PARA-500-16","analgesic"],
  ["syn-med-paracetamol-500-32","Paracetamol Value Demo","Paracetamol","paracetamol","500 mg","tablet","32 tablets","Synthetic Generics","GB","GB-SYN-PARA-500-32","SYN-PARA-500-32","analgesic"],
];
const inventorySeed=[
  ["syn-inv-1","syn-pharmacy-london-1","syn-med-amox-500-cap-20","IN_STOCK",12],
  ["syn-inv-2","syn-pharmacy-london-24","syn-med-amox-500-cap-20","LOW_STOCK",2],
  ["syn-inv-3","syn-pharmacy-athens-1","syn-med-amox-500-cap-20","UNKNOWN",null],
  ["syn-inv-4","syn-pharmacy-tallinn-1","syn-med-amox-500-cap-20","OUT_OF_STOCK",0],
  ["syn-inv-5","syn-pharmacy-london-1","syn-med-paracetamol-500-16","IN_STOCK",30],
  ["syn-inv-6","syn-pharmacy-london-24","syn-med-paracetamol-500-16","IN_STOCK",8],
  ["syn-inv-7","syn-pharmacy-london-1","syn-med-paracetamol-500-32","LOW_STOCK",3],
  ["syn-inv-8","syn-pharmacy-london-1","syn-med-amox-250-susp","UNKNOWN",null],
];
const priceSeed=[
  ["syn-price-1","syn-pharmacy-london-1","syn-med-amox-500-cap-20","GBP",899,"SELF_PAY"],
  ["syn-price-2","syn-pharmacy-london-24","syn-med-amox-500-cap-20","GBP",950,"SELF_PAY"],
  ["syn-price-3","syn-pharmacy-london-1","syn-med-paracetamol-500-16","GBP",299,"SELF_PAY"],
  ["syn-price-4","syn-pharmacy-london-24","syn-med-paracetamol-500-16","GBP",349,"SELF_PAY"],
];
export function attachPharmacy(Store){
  if(Store.prototype.pharmacyAttached)return;
  Store.prototype.pharmacyAttached=true;
  Store.prototype.seedPharmacyCatalog=function(){
    const now=this.now();
    this.transaction(()=>{
      const ps=this.db.prepare("INSERT OR IGNORE INTO pharmacies VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
      for(const p of syntheticPharmacies)ps.run(...p.slice(0,11),JSON.stringify(p[11]),...p.slice(12,19),JSON.stringify(p[19]),"SYNTHETIC","synthetic:master26",now);
      const ms=this.db.prepare("INSERT OR IGNORE INTO medication_products VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
      for(const p of syntheticProducts)ms.run(...p,"SYNTHETIC","synthetic:master26");
      const inv=this.db.prepare("INSERT OR IGNORE INTO inventory_observations VALUES(?,?,?,?,?,?,?,?,?)");
      for(const x of inventorySeed)inv.run(...x,now-15*60000,2*3600000,"SYNTHETIC","synthetic:master26");
      const prices=this.db.prepare("INSERT OR IGNORE INTO price_observations VALUES(?,?,?,?,?,?,?,?,?)");
      for(const x of priceSeed)prices.run(...x,now-10*60000,"synthetic:master26","SYNTHETIC");
      this.db.prepare("INSERT OR IGNORE INTO regulatory_notices VALUES(?,?,?,?,?,?,?,?,?)").run("syn-notice-shortage","SHORTAGE","EDHT Synthetic Authority","GB","syn-med-amox-500-cap-20","2026-09-01","MONITORING","synthetic://master26/shortage","SYNTHETIC");
    });
  };
  Store.prototype.ensurePharmacyPatientDemo=function(user){
    const p=this.patient(user);
    if(this.db.prepare("SELECT 1 FROM prescriptions WHERE patient_id=? LIMIT 1").get(p.id))return;
    this.transaction(()=>{
      this.db.prepare("INSERT INTO prescriptions VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)").run(
        "syn-rx-"+p.id,p.id,"syn-med-amox-500-cap-20","ACTIVE","500 mg as recorded in synthetic prescription",1,0,
        "Synthetic Clinician","2026-09-19","2026-10-19","GB","ELECTRONIC","SELF_PAY","SYNTHETIC_DEMO_PRESCRIPTION",this.now()
      );
      this.audit(user.user_id,"SYNTHETIC_PRESCRIPTION_SEEDED","syn-rx-"+p.id,p.id);
    });
  };
  Store.prototype.pharmacyProducts=function(user,q=""){
    const p=this.patient(user); q=text(String(q??""),100).toLowerCase();
    const rows=this.db.prepare("SELECT * FROM medication_products ORDER BY generic_name,strength,dose_form,package").all();
    const filtered=!q?rows:rows.filter(x=>[x.brand_name,x.generic_name,x.active_ingredient,x.strength,x.dose_form,x.package,x.manufacturer,x.local_product_identifier].some(v=>String(v).toLowerCase().includes(q)));
    this.transaction(()=>this.audit(user.user_id,"PHARMACY_CATALOGUE_READ",q,p.id));
    return filtered.map(x=>({...x,provenance:"SYNTHETIC",clinical_equivalence_not_asserted:true}));
  };
  Store.prototype.pharmacySearch=function(user,params={}){
    const p=this.patient(user),q=text(String(params.q??""),100).toLowerCase(),now=this.now();
    const products=this.db.prepare("SELECT * FROM medication_products").all();
    const productHits=q?products.filter(x=>[x.brand_name,x.generic_name,x.active_ingredient,x.strength,x.dose_form,x.package,x.manufacturer,x.local_product_identifier].some(v=>String(v).toLowerCase().includes(q))):products;
    const productIds=new Set(productHits.map(x=>x.product_id));
    const inv=this.db.prepare("SELECT * FROM inventory_observations ORDER BY observed_at DESC").all(), latest=new Map();
    for(const x of inv){const k=x.pharmacy_id+"|"+x.product_id;if(!latest.has(k))latest.set(k,x)}
    const prices=this.db.prepare("SELECT * FROM price_observations ORDER BY observed_at DESC").all(), priceMap=new Map();
    for(const x of prices){const k=x.pharmacy_id+"|"+x.product_id;if(!priceMap.has(k))priceMap.set(k,x)}
    const lat=Number(params.lat),lon=Number(params.lon),hasLoc=Number.isFinite(lat)&&Number.isFinite(lon);
    let rows=this.db.prepare("SELECT * FROM pharmacies ORDER BY display_name").all().map(ph=>{
      const pharmacyText=[ph.display_name,ph.legal_name,ph.address,ph.city,ph.region,ph.country].join(" ").toLowerCase();
      const inventory=[...latest.values()].filter(x=>x.pharmacy_id===ph.id&&productIds.has(x.product_id)).map(x=>{
        const product=products.find(p=>p.product_id===x.product_id),price=priceMap.get(ph.id+"|"+x.product_id);
        return {...x,product,freshness:freshnessState(x.observed_at,x.freshness_ms,now),price:price?{currency:price.currency,amount_minor:price.amount_minor,price_type:price.price_type,observed_at:price.observed_at,verification_state:price.verification_state}:null};
      });
      return {...ph,working_hours:json(ph.working_hours),accessibility:json(ph.accessibility),open_state:pharmacyOpenState(ph,now),distance_km:hasLoc?distanceKm({lat,lon},{lat:ph.latitude,lon:ph.longitude}):null,inventory,synthetic:true,provenance:"SYNTHETIC"};
    });
    if(q)rows=rows.filter(x=>[x.display_name,x.legal_name,x.address,x.city,x.region].join(" ").toLowerCase().includes(q)||x.inventory.length);
    if(truth(params.open_now))rows=rows.filter(x=>x.open_state==="OPEN");
    if(truth(params.is_24_7))rows=rows.filter(x=>x.is_24_7);
    if(truth(params.delivery))rows=rows.filter(x=>x.delivery);
    if(truth(params.pickup))rows=rows.filter(x=>x.pickup);
    if(truth(params.electronic_prescription))rows=rows.filter(x=>x.electronic_prescription);
    if(truth(params.benefit_prescription)||truth(params.government_program))rows=rows.filter(x=>x.benefit_prescription);
    if(truth(params.insurance))rows=rows.filter(x=>x.insurance);
    const stock=upper(params.inventory);
    if(inventoryStates.includes(stock))rows=rows.filter(x=>x.inventory.some(i=>i.state===stock));
    const max=Number(params.max_distance_km);
    if(Number.isFinite(max)&&hasLoc)rows=rows.filter(x=>x.distance_km!==null&&x.distance_km<=max);
    if(params.sort==="distance"&&hasLoc)rows.sort((a,b)=>(a.distance_km??Infinity)-(b.distance_km??Infinity));
    if(q)this.transaction(()=>{
      this.db.prepare("INSERT INTO pharmacy_recent_searches VALUES(?,?,?) ON CONFLICT(patient_id,query) DO UPDATE SET searched_at=excluded.searched_at").run(p.id,q,now);
      this.audit(user.user_id,"PHARMACY_SEARCH",q,p.id);
    }); else this.transaction(()=>this.audit(user.user_id,"PHARMACY_DISCOVERY_READ","",p.id));
    const recent=this.db.prepare("SELECT query FROM pharmacy_recent_searches WHERE patient_id=? ORDER BY searched_at DESC LIMIT 6").all(p.id).map(x=>x.query);
    return {provider:{kind:"MAP_PROVIDER",status:"SYNTHETIC_ADAPTER",name:"local-coordinate-adapter",production_connected:false},query:q,recent_searches:recent,user_location_persisted:false,results:rows};
  };
  Store.prototype.pharmacyDetail=function(user,id,q=""){
    const p=this.patient(user),ph=this.db.prepare("SELECT * FROM pharmacies WHERE id=?").get(id);
    if(!ph)fail("PHARMACY_NOT_FOUND",404);
    const products=this.db.prepare("SELECT * FROM medication_products").all(), inv=this.db.prepare("SELECT * FROM inventory_observations WHERE pharmacy_id=? ORDER BY observed_at DESC").all(id);
    const seen=new Set(),items=[];
    for(const x of inv){if(seen.has(x.product_id))continue;seen.add(x.product_id);const product=products.find(y=>y.product_id===x.product_id);if(q&&![product.brand_name,product.generic_name,product.active_ingredient].some(v=>v.toLowerCase().includes(String(q).toLowerCase())))continue;const price=this.db.prepare("SELECT * FROM price_observations WHERE pharmacy_id=? AND product_id=? ORDER BY observed_at DESC LIMIT 1").get(id,x.product_id);items.push({...x,product,freshness:freshnessState(x.observed_at,x.freshness_ms,this.now()),price:price??null})}
    const favorite=!!this.db.prepare("SELECT 1 FROM pharmacy_favorites WHERE patient_id=? AND pharmacy_id=?").get(p.id,id);
    this.transaction(()=>this.audit(user.user_id,"PHARMACY_DETAIL_READ",id,p.id));
    return {...ph,working_hours:json(ph.working_hours),accessibility:json(ph.accessibility),open_state:pharmacyOpenState(ph,this.now()),inventory:items,favorite,provenance:"SYNTHETIC",directions_adapter:{status:"SYNTHETIC_ADAPTER",precise_location_stored:false},call_action:ph.phone?{status:"AVAILABLE",phone:ph.phone}:{status:"UNKNOWN"}};
  };
  Store.prototype.pharmacyFavorite=function(user,id,on=true){
    const p=this.patient(user);if(!this.db.prepare("SELECT 1 FROM pharmacies WHERE id=?").get(id))fail("PHARMACY_NOT_FOUND",404);
    return this.transaction(()=>{if(on)this.db.prepare("INSERT OR IGNORE INTO pharmacy_favorites VALUES(?,?,?)").run(p.id,id,this.now());else this.db.prepare("DELETE FROM pharmacy_favorites WHERE patient_id=? AND pharmacy_id=?").run(p.id,id);this.audit(user.user_id,on?"PHARMACY_FAVORITED":"PHARMACY_UNFAVORITED",id,p.id);return{favorite:!!on}});
  };
  Store.prototype.pharmacyPrescriptions=function(user,status="all"){
    const p=this.patient(user);this.ensurePharmacyPatientDemo(user);
    const rows=this.db.prepare("SELECT x.*,m.brand_name,m.generic_name,m.active_ingredient,m.strength,m.dose_form,m.package,m.manufacturer,m.verification_state product_verification FROM prescriptions x JOIN medication_products m ON m.product_id=x.product_id WHERE x.patient_id=? ORDER BY x.created_at DESC").all(p.id);
    const filtered=status==="all"?rows:rows.filter(x=>x.status===upper(status));
    this.transaction(()=>this.audit(user.user_id,"PRESCRIPTION_LIST_READ",status,p.id));
    return filtered;
  };
  Store.prototype.pharmacyPrescription=function(user,id){
    const p=this.patient(user);this.ensurePharmacyPatientDemo(user);
    const row=this.db.prepare("SELECT x.*,m.* FROM prescriptions x JOIN medication_products m ON m.product_id=x.product_id WHERE x.id=? AND x.patient_id=?").get(id,p.id);
    if(!row)fail("PRESCRIPTION_NOT_FOUND",404);
    const dispensing=this.db.prepare("SELECT d.*,p.display_name pharmacy_name FROM dispensing_events d JOIN pharmacies p ON p.id=d.pharmacy_id WHERE d.prescription_id=? AND d.patient_id=? ORDER BY d.dispensed_at").all(id,p.id);
    this.transaction(()=>this.audit(user.user_id,"PRESCRIPTION_DETAIL_READ",id,p.id));
    return {...row,dispensing,no_autonomous_prescribing:true,no_autonomous_dose_change:true};
  };
  Store.prototype.createPharmacyOrder=function(user,body){
    const p=this.patient(user);this.ensurePharmacyPatientDemo(user);
    const rx=this.db.prepare("SELECT * FROM prescriptions WHERE id=? AND patient_id=?").get(body.prescription_id,p.id);
    if(!rx||!["ACTIVE","PARTIALLY_DISPENSED"].includes(rx.status))fail("PRESCRIPTION_NOT_ACTIVE",409);
    if(body.product_id!==rx.product_id)fail("AUTOMATIC_SUBSTITUTION_FORBIDDEN",409);
    const ph=this.db.prepare("SELECT * FROM pharmacies WHERE id=?").get(body.pharmacy_id);if(!ph)fail("PHARMACY_NOT_FOUND",404);
    const fulfillment=upper(body.fulfillment??"PICKUP");if(!["PICKUP","DELIVERY"].includes(fulfillment))fail("INVALID_FULFILLMENT");
    if(fulfillment==="PICKUP"&&!ph.pickup)fail("FULFILLMENT_UNAVAILABLE",409);if(fulfillment==="DELIVERY"&&!ph.delivery)fail("FULFILLMENT_UNAVAILABLE",409);
    const inv=this.db.prepare("SELECT * FROM inventory_observations WHERE pharmacy_id=? AND product_id=? ORDER BY observed_at DESC LIMIT 1").get(ph.id,rx.product_id);
    if(!inv||inv.state==="OUT_OF_STOCK")fail("PRODUCT_UNAVAILABLE",409);
    const qty=Number(body.quantity??1);if(!Number.isInteger(qty)||qty<1||qty>rx.quantity)fail("INVALID_QUANTITY");
    return this.transaction(()=>{const id=randomUUID(),now=this.now(),kind=fulfillment==="PICKUP"?"RESERVATION":"ORDER";this.db.prepare("INSERT INTO pharmacy_orders VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)").run(id,p.id,rx.id,rx.product_id,ph.id,kind,fulfillment,"CREATED",qty,"NOT_CONNECTED_SYNTHETIC",1,now,now);this.db.prepare("INSERT INTO pharmacy_order_history VALUES(?,?,?,?,?)").run(id,1,"CREATED",user.user_id,now);this.audit(user.user_id,"PHARMACY_ORDER_CREATED",id,p.id);return this.pharmacyOrderSnapshot(p.id,id)});
  };
  Store.prototype.pharmacyOrderSnapshot=function(patientId,id){
    const row=this.db.prepare("SELECT o.*,p.display_name pharmacy_name,m.brand_name,m.generic_name,m.strength,m.dose_form,m.package FROM pharmacy_orders o JOIN pharmacies p ON p.id=o.pharmacy_id JOIN medication_products m ON m.product_id=o.product_id WHERE o.id=? AND o.patient_id=?").get(id,patientId);if(!row)fail("ORDER_NOT_FOUND",404);return row;
  };
  Store.prototype.pharmacyOrders=function(user){
    const p=this.patient(user);return this.db.prepare("SELECT o.*,p.display_name pharmacy_name,m.brand_name,m.strength,m.dose_form,m.package FROM pharmacy_orders o JOIN pharmacies p ON p.id=o.pharmacy_id JOIN medication_products m ON m.product_id=o.product_id WHERE o.patient_id=? ORDER BY o.created_at DESC").all(p.id);
  };
  Store.prototype.pharmacyOrderAction=function(user,id,action){
    const p=this.patient(user);
    return this.transaction(()=>{
      const order=this.db.prepare("SELECT * FROM pharmacy_orders WHERE id=? AND patient_id=?").get(id,p.id);if(!order)fail("ORDER_NOT_FOUND",404);
      const next=nextOrderStatus(order.status,String(action),order.fulfillment),now=this.now(),v=1+this.db.prepare("SELECT COALESCE(MAX(version),0) v FROM pharmacy_order_history WHERE order_id=?").get(id).v;
      this.db.prepare("UPDATE pharmacy_orders SET status=?,updated_at=? WHERE id=?").run(next,now,id);this.db.prepare("INSERT INTO pharmacy_order_history VALUES(?,?,?,?,?)").run(id,v,next,user.user_id,now);
      if(next==="COMPLETED"){
        if(!this.db.prepare("SELECT 1 FROM dispensing_events WHERE prescription_id=? AND pharmacy_id=? AND patient_id=?").get(order.prescription_id,order.pharmacy_id,p.id)){
          const rx=this.db.prepare("SELECT * FROM prescriptions WHERE id=?").get(order.prescription_id),product=this.db.prepare("SELECT * FROM medication_products WHERE product_id=?").get(order.product_id),disp=randomUUID();
          const clean=cleanBody("medication",{name:product.brand_name,dose:rx.dose_context,form:product.dose_form,frequency:"As recorded in prescription",prescriber:rx.prescriber,status:"active",notes:"Dispensing-confirmed synthetic record; does not authorize treatment changes."});
          const recordId=randomUUID();this.db.prepare("INSERT INTO records VALUES(?,?,?,?,?,?,?)").run(recordId,p.id,"medication",1,JSON.stringify(clean),"dispensing:"+disp,now);
          this.audit(user.user_id,"DISPENSING_MEDICATION_RECORDED",recordId,p.id);const auditSeq=Number(this.db.prepare("SELECT MAX(seq) n FROM audit_events").get().n);
          this.db.prepare("INSERT INTO dispensing_events VALUES(?,?,?,?,?,?,?,?,?,?,?)").run(disp,p.id,rx.id,order.product_id,order.pharmacy_id,recordId,now,order.quantity,rx.jurisdiction,"synthetic:master26",auditSeq);
          this.db.prepare("UPDATE prescriptions SET status='DISPENSED' WHERE id=?").run(rx.id);
          this.audit(user.user_id,"PRESCRIPTION_DISPENSED",disp,p.id);
        }
      }
      this.audit(user.user_id,"PHARMACY_ORDER_STATUS_"+next,id,p.id);return this.pharmacyOrderSnapshot(p.id,id);
    });
  };
  Store.prototype.pharmacyDispensing=function(user){
    const p=this.patient(user);return this.transaction(()=>{this.audit(user.user_id,"DISPENSING_HISTORY_READ","",p.id);return this.db.prepare("SELECT d.*,m.brand_name,m.generic_name,m.strength,m.dose_form,m.package,ph.display_name pharmacy_name FROM dispensing_events d JOIN medication_products m ON m.product_id=d.product_id JOIN pharmacies ph ON ph.id=d.pharmacy_id WHERE d.patient_id=? ORDER BY d.dispensed_at DESC").all(p.id)});
  };
  Store.prototype.pharmacyNotices=function(user){
    const p=this.patient(user);this.transaction(()=>this.audit(user.user_id,"PHARMACY_NOTICE_READ","",p.id));return this.db.prepare("SELECT n.*,m.brand_name,m.generic_name,m.strength FROM regulatory_notices n LEFT JOIN medication_products m ON m.product_id=n.product_id ORDER BY issued_date DESC").all().map(x=>({...x,synthetic:x.verification_state==="SYNTHETIC"}));
  };
  Store.prototype.pharmacyProviderBoundary=function(user){
    const p=this.patient(user);this.transaction(()=>this.audit(user.user_id,"PHARMACY_PROVIDER_BOUNDARY_READ","",p.id));return{status:"SYNTHETIC_ADAPTER",production_network_connected:false,capabilities:["pharmacy_profile","branches","operating_hours","services","inventory_feed","reservation_order_handling","prescription_support_configuration","availability_updates"],write_access:"NOT_EXPOSED_TO_PATIENT",interfaces:{inventory:"PharmacyInventoryProvider",ordering:"PharmacyOrderProvider",delivery:"DeliveryProvider",payment:"PaymentProvider",maps:"MapProvider",regulation:"RegulatoryProvider"}};
  };
  Store.prototype.pharmacologyContext=function(user){
    const p=this.patient(user),rows=this.db.prepare("SELECT id,kind,body,source,version,created_at FROM current_records WHERE patient_id=? AND archived=0 AND kind IN('medication','allergy','condition','observation') ORDER BY created_at").all(p.id).map(r=>({...r,body:json(r.body)}));
    const state=r=>r.source?.startsWith("dispensing:")?"OBSERVED":r.source?.startsWith("synthetic_fhir:")?"OBSERVED":r.kind==="observation"?"OBSERVED":"PATIENT_REPORTED";
    const context={patient_state_version:this.db.prepare("SELECT COALESCE(MAX(seq),0) v FROM audit_events WHERE patient_id=?").get(p.id).v,records:rows.map(r=>({id:r.id,kind:r.kind,version:r.version,source:r.source,epistemic_state:state(r),body:r.body})),genomics:{status:"NOT_CONFIGURED",required_provenance:["sample","gene","variant","diplotype","phenotype","authoritative_source","version","date","evidence_level"]},digital_twin:{status:"INTERFACE_ONLY"},clinical_automation:{prescribe:false,dose_adjust:false,stop:false,substitute:false}};
    this.transaction(()=>this.audit(user.user_id,"PHARMACOLOGY_CONTEXT_READ","",p.id));return context;
  };
  Store.prototype.pharmacySimulation=function(user,body){
    const p=this.patient(user),ctx=this.pharmacologyContext(user),product=this.db.prepare("SELECT * FROM medication_products WHERE product_id=?").get(body.product_id);if(!product)fail("PRODUCT_NOT_FOUND",404);
    if(typeof body.dose_scenario!=="string"||!body.dose_scenario.trim())fail("INVALID_SIMULATION_REQUEST");
    const result={status:"SIMULATED",model_version:"synthetic-boundary-v1",input_snapshot_version:ctx.patient_state_version,product:{product_id:product.product_id,active_ingredient:product.active_ingredient,strength:product.strength,dose_form:product.dose_form},dose_scenario:body.dose_scenario,requested_outcomes:Array.isArray(body.requested_outcomes)?body.requested_outcomes.slice(0,10):[],assumptions:["Synthetic model boundary only","No pharmacokinetic or clinical prediction executed"],uncertainty:"NOT_QUANTIFIED_INTERFACE_ONLY",clinical_action:null,provenance:"SYNTHETIC_ADAPTER"};
    this.transaction(()=>this.audit(user.user_id,"DIGITAL_TWIN_PHARMACOLOGY_SIMULATION",product.product_id,p.id));return result;
  };
  Store.prototype.pharmacyAssistant=function(user,body={}){
    const p=this.patient(user),q=text(String(body.message??""),1000),ctx=this.pharmacologyContext(user);let textOut="I can explain recorded medication information, locate synthetic pharmacy inventory, and prepare questions for a clinician or pharmacist.";
    if(/dose|доз|stop|отмен|замен|substitut|prescrib/i.test(q))textOut="I cannot prescribe, change a dose, stop medication, or choose a substitution. I can show the recorded prescription and help prepare a question for your clinician or pharmacist.";
    const out={provider:"deterministic-safety-boundary",is_generative_ai:false,text:textOut,status:"INFORMATION_ONLY",source_record_ids:ctx.records.map(x=>x.id),missing_data:ctx.genomics.status==="NOT_CONFIGURED"?["pharmacogenomics_not_configured"]:[],boundaries:{prescribe:false,dose_adjust:false,stop:false,substitute:false,override_clinician:false}};
    this.transaction(()=>this.audit(user.user_id,"PHARMACY_ASSISTANT_USED","",p.id));return out;
  };
}
