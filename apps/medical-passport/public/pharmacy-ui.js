export function createPharmacyUI({document,window,api,t,e,b,chip,field,modal,actions,notice,load,link,get}) {
  let mode="list", query="", filters={}, location=null;
  const screens=new Set(["pharmacy","pharmacy-map","pharmacy-list","pharmacy-search","pharmacy-detail","pharmacy-medication-detail","prescriptions","prescription-detail","availability","pharmacy-order","pharmacy-orders","dispensing","medication-history","pharmacy-notifications","pharmacology"]);
  const qs=()=>new URLSearchParams(window.location.hash.split("?")[1]||"");
  const encode=v=>encodeURIComponent(v??"");
  const searchPath=()=>{
    const p=new URLSearchParams();
    if(query)p.set("q",query);
    for(const [k,v] of Object.entries(filters))if(v!==""&&v!==false&&v!=null)p.set(k,String(v));
    if(location){p.set("lat",String(location.lat));p.set("lon",String(location.lon));if(filters.sort==="distance")p.set("sort","distance");}
    return "/pharmacy"+(p.size?"?"+p.toString():"");
  };
  const statusLabel=s=>({IN_STOCK:"inStock",LOW_STOCK:"lowStock",OUT_OF_STOCK:"outOfStock",UNKNOWN:"unknownAvailability"}[s]??s);
  const money=p=>p?new Intl.NumberFormat(get().locale==="ru"?"ru-RU":"en-GB",{style:"currency",currency:p.currency}).format(p.amount_minor/100):t("unknown");
  const subnav=()=>`<nav class="pharmacy-subnav" aria-label="${e(t("pharmacy"))}">
    <a href="#/pharmacy">${e(t("pharmacyHome"))}</a>
    <a href="#/prescriptions">${e(t("prescriptions"))}</a>
    <a href="#/pharmacy-orders">${e(t("pharmacyOrders"))}</a>
    <a href="#/dispensing">${e(t("dispensing"))}</a>
    <a href="#/medication-history">${e(t("medicationHistory"))}</a>
    <a href="#/pharmacology">${e(t("pharmacology"))}</a>
  </nav>`;
  const syntheticBanner=()=>`<div class="note pharmacy-synthetic"><strong>${e(t("syntheticData"))}</strong> · ${e(t("syntheticOrderNotice"))}</div>`;
  const searchForm=()=>`<form id="pharmacy-search-form" class="pharmacy-searchbar">
    <input name="q" value="${e(query)}" maxlength="100" placeholder="${e(t("pharmacySearchPlaceholder"))}" aria-label="${e(t("pharmacySearchPlaceholder"))}">
    <button class="btn" type="submit">${e(t("search"))}</button>
    <button class="btn ghost" type="button" data-action="pharmacy-clear">${e(t("clearSearch"))}</button>
    <div class="pharmacy-filter-row">
      ${[["open_now","openNow"],["is_24_7","allDay"],["delivery","delivery"],["pickup","pickup"],["electronic_prescription","electronicPrescription"],["insurance","insurance"],["benefit_prescription","benefit"]].map(([k,l])=>`<label class="check"><input type="checkbox" name="${k}" ${filters[k]?"checked":""}>${e(t(l))}</label>`).join("")}
      <label>${e(t("status"))}<select name="inventory"><option value="">—</option>${["IN_STOCK","LOW_STOCK","OUT_OF_STOCK","UNKNOWN"].map(x=>`<option value="${x}" ${filters.inventory===x?"selected":""}>${e(t(statusLabel(x)))}</option>`).join("")}</select></label>
      <label>${e(t("distance"))}<select name="sort"><option value="">—</option><option value="distance" ${filters.sort==="distance"?"selected":""}>${e(t("distance"))}</option></select></label>
    </div>
  </form>`;
  const invLine=i=>`<div class="inventory-line"><span>${e(i.product.brand_name)} · ${e(i.product.strength)} · ${e(i.product.dose_form)} · ${e(i.product.package)}</span><span class="chip ${e(i.state.toLowerCase())}">${e(t(statusLabel(i.state)))}</span><small>${e(t("freshness"))}: ${e(i.freshness)} · ${e(t("price"))}: ${e(money(i.price))}</small></div>`;
  const card=ph=>`<article class="card pharmacy-card">
    <div class="row spread"><div><p class="eyebrow">${e(ph.city)} · ${e(ph.country)}</p><h2>${e(ph.display_name)}</h2></div><span class="chip synthetic">${e(t("syntheticData"))}</span></div>
    <p>${e(ph.address)}</p>
    <div class="chips">${chip(ph.open_state==="OPEN"?"active":"unknown")}${ph.is_24_7?chip("24/7"):""}${ph.delivery?chip("delivery"):""}${ph.pickup?chip("pickup"):""}</div>
    <p class="muted">${ph.distance_km==null?"":e(ph.distance_km.toFixed(1)+" km · ")}${e(t("openState"))}: ${e(ph.open_state)}</p>
    ${ph.inventory.slice(0,3).map(invLine).join("")}
    <div class="card-actions"><a class="btn" href="#/pharmacy-detail?id=${encode(ph.id)}">${e(t("view"))}</a></div>
  </article>`;
  const map=rows=>{
    if(!rows.length)return `<div class="empty"><h2>${e(t("noPharmacies"))}</h2></div>`;
    const lats=rows.map(x=>x.latitude),lons=rows.map(x=>x.longitude),minLat=Math.min(...lats),maxLat=Math.max(...lats),minLon=Math.min(...lons),maxLon=Math.max(...lons);
    return `<div class="synthetic-map" role="img" aria-label="${e(t("pharmacyMap"))}"><div class="map-watermark">${e(t("syntheticAdapter"))}</div>${rows.map((x,i)=>{const left=maxLon===minLon?50:5+90*(x.longitude-minLon)/(maxLon-minLon),top=maxLat===minLat?50:5+90*(maxLat-x.latitude)/(maxLat-minLat);return `<a class="map-marker" style="left:${left}%;top:${top}%" href="#/pharmacy-detail?id=${encode(x.id)}" aria-label="${e(x.display_name)}"><span>${i+1}</span></a>`}).join("")}</div>`;
  };
  const renderDiscovery=d=>subnav()+syntheticBanner()+`<div class="screen-head"><div><p class="eyebrow">EDHT / ${e(t("pharmacy"))}</p><h1>${e(t("pharmacy"))}</h1><p>${e(t("pharmacyIntro"))}</p></div><div class="tabs"><button class="btn ${mode==="map"?"":"ghost"}" data-action="pharmacy-mode" data-mode="map">${e(t("pharmacyMap"))}</button><button class="btn ${mode==="list"?"":"ghost"}" data-action="pharmacy-mode" data-mode="list">${e(t("pharmacyList"))}</button></div></div>
    ${searchForm()}
    <div class="row spread"><p class="help">${e(t("locationPrivacy"))}</p><button class="btn secondary" data-action="pharmacy-locate">${e(t("useLocation"))}</button></div>
    ${d.recent_searches?.length?`<p class="muted">${e(t("recentSearches"))}: ${d.recent_searches.map(x=>`<button class="link-button" data-action="pharmacy-recent" data-query="${e(x)}">${e(x)}</button>`).join(" · ")}</p>`:""}
    <div class="${mode==="map"?"pharmacy-layout-map":"grid"}">${mode==="map"?map(d.results)+`<div class="pharmacy-map-list">${d.results.map(card).join("")}</div>`:d.results.map(card).join("")||`<div class="empty"><h2>${e(t("noPharmacies"))}</h2></div>`}</div>`;
  const renderDetail=d=>subnav()+syntheticBanner()+`<div class="screen-head"><div><p class="eyebrow">${e(d.city)} · ${e(d.country)}</p><h1>${e(d.display_name)}</h1></div><button class="btn ghost" data-action="pharmacy-favorite" data-id="${e(d.id)}" data-favorite="${d.favorite?"0":"1"}">${e(t(d.favorite?"unfavorite":"favorite"))}</button></div>
    <div class="grid"><section class="card"><h2>${e(t("pharmacyDetail"))}</h2><dl class="definition"><div><dt>${e(t("openState"))}</dt><dd>${e(d.open_state)}</dd></div><div><dt>${e(t("address"))}</dt><dd>${e(d.address)}</dd></div><div><dt>${e(t("phone"))}</dt><dd>${e(d.phone||t("unknown"))}</dd></div><div><dt>${e(t("verification"))}</dt><dd>${e(d.verification_state)}</dd></div></dl><p class="help">${e(t("locationPrivacy"))}</p></section>
    <section class="card"><h2>${e(t("services"))}</h2><div class="chips">${d.delivery?chip("delivery"):""}${d.pickup?chip("pickup"):""}${d.electronic_prescription?chip("electronicPrescription"):""}${d.insurance?chip("insurance"):""}</div><p>${e(t("inventoryFreshness"))}: ${new Date(d.inventory_freshness_at).toLocaleString()}</p></section></div>
    <section class="card"><h2>${e(t("availability"))}</h2>${d.inventory.map(invLine).join("")||`<p>${e(t("unknownAvailability"))}</p>`}</section>`;
  const productView=d=>subnav()+`<div class="screen-head"><div><p class="eyebrow">${e(t("pharmacyMedicationDetail"))}</p><h1>${e(d.brand_name||d.generic_name)}</h1></div></div><section class="card">${syntheticBanner()}<dl class="definition">${[["activeIngredient",d.active_ingredient],["strength",d.strength],["doseForm",d.dose_form],["package",d.package],["manufacturer",d.manufacturer],["localIdentifier",d.local_product_identifier],["verification",d.verification_state]].map(([k,v])=>`<div><dt>${e(t(k))}</dt><dd>${e(v||t("unknown"))}</dd></div>`).join("")}</dl><div class="warning">${e(t("notClinicalSubstitution"))}</div><a class="btn" href="#/availability?product=${encode(d.product_id)}">${e(t("compareAvailability"))}</a></section>`;
  const rxCard=x=>`<article class="card"><div class="row spread"><h2>${e(x.brand_name||x.generic_name)}</h2><span class="chip">${e(x.status)}</span></div><p>${e(x.strength)} · ${e(x.dose_form)} · ${e(x.package)}</p><dl class="definition"><div><dt>${e(t("issueDate"))}</dt><dd>${e(x.issue_date)}</dd></div><div><dt>${e(t("expirationDate"))}</dt><dd>${e(x.expiration_date)}</dd></div><div><dt>${e(t("jurisdiction"))}</dt><dd>${e(x.jurisdiction)}</dd></div></dl><a class="btn ghost" href="#/prescription-detail?id=${encode(x.id)}">${e(t("view"))}</a></article>`;
  const orderCard=o=>`<article class="card"><div class="row spread"><h2>${e(o.brand_name)}</h2><span class="chip">${e(o.status)}</span></div><p>${e(o.pharmacy_name)} · ${e(o.fulfillment)}</p><div class="card-actions">${["CREATED","PENDING"].includes(o.status)?b("confirmOrder","pharmacy-order-action",`data-id="${e(o.id)}" data-next="confirm"`):""}${o.status==="CONFIRMED"&&o.fulfillment==="PICKUP"?b("markReady","pharmacy-order-action",`data-id="${e(o.id)}" data-next="ready"`):""}${["CONFIRMED","READY_FOR_PICKUP","DISPATCHED"].includes(o.status)?b("dispense","pharmacy-order-action",`data-id="${e(o.id)}" data-next="dispense"`):""}</div></article>`;
  async function enrich(screen,result){
    if(!screens.has(screen))return result;
    const p=qs();
    if(["pharmacy","pharmacy-map","pharmacy-list","pharmacy-search"].includes(screen)){
      if(screen==="pharmacy-map")mode="map"; if(screen==="pharmacy-list")mode="list";
      if(p.has("q"))query=p.get("q");
      return await api(searchPath());
    }
    if(screen==="pharmacy-detail")return await api("/pharmacy/"+encode(p.get("id")));
    if(screen==="pharmacy-medication-detail"){
      const all=await api("/pharmacy/products?q="+encode(p.get("id")||""));
      return all.find(x=>x.product_id===p.get("id"))||all[0]||{};
    }
    if(screen==="prescriptions")return await api("/pharmacy/prescriptions");
    if(screen==="prescription-detail")return await api("/pharmacy/prescriptions/"+encode(p.get("id")));
    if(screen==="availability"){
      const all=await api("/pharmacy/products?q=");
      const product=all.find(x=>x.product_id===p.get("product"));
      const pharmacies=await api("/pharmacy?q="+encode(product?.generic_name||product?.active_ingredient||""));
      return {product,pharmacies};
    }
    if(screen==="pharmacy-order"){
      const rx=await api("/pharmacy/prescriptions/"+encode(p.get("prescription")));
      const pharmacies=await api("/pharmacy?q="+encode(rx.generic_name||rx.active_ingredient||""));
      return {rx,pharmacies};
    }
    if(screen==="pharmacy-orders")return await api("/pharmacy/orders");
    if(screen==="dispensing")return await api("/pharmacy/dispensing");
    if(screen==="medication-history")return {history:await api("/views/medication?archived=1&phase=past"),dispensing:await api("/pharmacy/dispensing")};
    if(screen==="pharmacy-notifications")return await api("/notifications?type=Medication&filter=all");
    if(screen==="pharmacology")return {context:await api("/pharmacy/pharmacology-context"),notices:await api("/pharmacy/notices"),provider:await api("/pharmacy/provider-boundary")};
    return result;
  }
  function render(screen,d){
    if(!screens.has(screen))return null;
    if(["pharmacy","pharmacy-map","pharmacy-list","pharmacy-search"].includes(screen))return renderDiscovery(d);
    if(screen==="pharmacy-detail")return renderDetail(d);
    if(screen==="pharmacy-medication-detail")return productView(d);
    if(screen==="prescriptions")return subnav()+`<div class="screen-head"><div><h1>${e(t("prescriptions"))}</h1></div></div><div class="grid">${d.map(rxCard).join("")||`<div class="empty"><h2>${e(t("noPrescriptions"))}</h2></div>`}</div>`;
    if(screen==="prescription-detail")return subnav()+`<div class="screen-head"><div><p class="eyebrow">${e(t("prescriptionDetail"))}</p><h1>${e(d.brand_name)}</h1></div></div><section class="card"><div class="chips"><span class="chip">${e(d.status)}</span><span class="chip synthetic">${e(t("syntheticData"))}</span></div><dl class="definition">${[["activeIngredient",d.active_ingredient],["strength",d.strength],["doseForm",d.dose_form],["package",d.package],["prescriptionStatus",d.status],["issueDate",d.issue_date],["expirationDate",d.expiration_date],["jurisdiction",d.jurisdiction],["paymentModel",d.payment_model]].map(([k,v])=>`<div><dt>${e(t(k))}</dt><dd>${e(v||t("unknown"))}</dd></div>`).join("")}</dl><div class="warning">${e(t("notClinicalSubstitution"))}</div><div class="card-actions"><a class="btn" href="#/availability?product=${encode(d.product_id)}">${e(t("compareAvailability"))}</a><a class="btn secondary" href="#/pharmacy-order?prescription=${encode(d.id)}">${e(t("reserve"))}</a></div></section>`;
    if(screen==="availability")return subnav()+`<div class="screen-head"><h1>${e(t("availability"))}</h1></div>${d.product?productView(d.product):""}<div class="grid">${d.pharmacies.results.map(card).join("")||`<p>${e(t("noPharmacies"))}</p>`}</div>`;
    if(screen==="pharmacy-order")return subnav()+syntheticBanner()+`<div class="screen-head"><h1>${e(t("pharmacyOrder"))}</h1></div><form id="pharmacy-order-form" class="card" novalidate><input type="hidden" name="prescription_id" value="${e(d.rx.id)}"><input type="hidden" name="product_id" value="${e(d.rx.product_id)}"><label>${e(t("pharmacy"))}<select name="pharmacy_id" required>${d.pharmacies.results.filter(x=>x.inventory.some(i=>["IN_STOCK","LOW_STOCK","UNKNOWN"].includes(i.state))).map(x=>`<option value="${e(x.id)}">${e(x.display_name)} · ${e(x.inventory[0]?.state||"UNKNOWN")}</option>`).join("")}</select></label><label>${e(t("services"))}<select name="fulfillment"><option value="PICKUP">${e(t("pickup"))}</option><option value="DELIVERY">${e(t("delivery"))}</option></select></label><label>Quantity<input name="quantity" type="number" min="1" max="${e(String(d.rx.quantity))}" value="1"></label><div class="field-error" data-form-error></div><button class="btn" type="submit">${e(t("createOrder"))}</button></form>`;
    if(screen==="pharmacy-orders")return subnav()+`<div class="screen-head"><h1>${e(t("pharmacyOrders"))}</h1></div>${syntheticBanner()}<div class="grid">${d.map(orderCard).join("")||`<div class="empty"><h2>${e(t("noOrders"))}</h2></div>`}</div>`;
    if(screen==="dispensing")return subnav()+`<div class="screen-head"><h1>${e(t("dispensing"))}</h1></div><div class="timeline">${d.map(x=>`<article class="card"><h2>${e(x.brand_name)}</h2><p>${e(x.pharmacy_name)} · ${new Date(x.dispensed_at).toLocaleString()}</p><p>${e(x.strength)} · ${e(x.dose_form)} · ${e(x.package)} · qty ${e(String(x.quantity))}</p><small>${e(x.source)}</small></article>`).join("")||`<div class="empty"><h2>${e(t("noDispensing"))}</h2></div>`}</div>`;
    if(screen==="medication-history")return subnav()+`<div class="screen-head"><h1>${e(t("medicationHistory"))}</h1></div><section class="card"><h2>${e(t("dispensing"))}</h2>${d.dispensing.map(x=>`<p>${e(x.brand_name)} · ${new Date(x.dispensed_at).toLocaleDateString()} · ${e(x.pharmacy_name)}</p>`).join("")||`<p>${e(t("noDispensing"))}</p>`}</section><section class="card"><h2>${e(t("past"))}</h2>${d.history.records.map(x=>`<p>${e(x.body.name)} · ${e(x.source)}</p>`).join("")||`<p>${e(t("nothing"))}</p>`}</section>`;
    if(screen==="pharmacy-notifications")return subnav()+`<div class="screen-head"><h1>${e(t("pharmacyNotifications"))}</h1></div>${(d.items||[]).map(x=>`<article class="card"><h2>${e(t(x.title))}</h2><p>${e(x.message||"")}</p></article>`).join("")||`<div class="empty"><h2>${e(t("noNotification"))}</h2></div>`}`;
    if(screen==="pharmacology")return subnav()+`<div class="screen-head"><div><p class="eyebrow">${e(t("precisionFoundation"))}</p><h1>${e(t("pharmacology"))}</h1></div></div><div class="warning">${e(t("genomicsNotConfigured"))}</div><div class="grid"><section class="card"><h2>${e(t("pharmacologyContext"))}</h2><p>Patient state version: ${e(String(d.context.patient_state_version))}</p>${d.context.records.map(x=>`<p><strong>${e(x.kind)}</strong> · ${e(t("epistemicState"))}: ${e(x.epistemic_state)} · v${e(String(x.version))}</p>`).join("")||`<p>${e(t("nothing"))}</p>`}</section><section class="card"><h2>${e(t("providerBoundary"))}</h2><p>${e(d.provider.status)}</p><p>${e(d.provider.capabilities.join(" · "))}</p></section><section class="card"><h2>${e(t("notices"))}</h2>${d.notices.map(x=>`<p><strong>${e(x.notice_type)}</strong> · ${e(x.brand_name||"")} · ${e(x.verification_state)}</p>`).join("")||`<p>${e(t("noNotices"))}</p>`}</section><section class="card"><h2>${e(t("simulationBoundary"))}</h2><form id="pharmacy-simulation-form"><label>Product ID<input name="product_id" value="syn-med-amox-500-cap-20"></label><label>Dose scenario<input name="dose_scenario" value="recorded dose scenario"></label><button class="btn" type="submit">${e(t("runSimulation"))}</button></form><div data-simulation-result></div></section><section class="card"><h2>${e(t("pharmacyAssistant"))}</h2><p>${e(t("assistantBoundary"))}</p><form id="pharmacy-assistant-form"><textarea name="message" maxlength="1000" placeholder="${e(t("askPharmacistQuestion"))}"></textarea><button class="btn" type="submit">${e(t("askPharmacistQuestion"))}</button></form><div data-pharmacy-assistant></div></section></div>`;
    return null;
  }
  async function click(action,target){
    if(action==="pharmacy-mode"){mode=target.dataset.mode;await load();return true}
    if(action==="pharmacy-clear"){query="";filters={};await load();return true}
    if(action==="pharmacy-recent"){query=target.dataset.query||"";await load();return true}
    if(action==="pharmacy-locate"){
      if(!window.navigator.geolocation){notice(t("unknownData"),true);return true}
      await new Promise(resolve=>window.navigator.geolocation.getCurrentPosition(p=>{location={lat:p.coords.latitude,lon:p.coords.longitude};filters.sort="distance";resolve()},()=>{notice(t("unknownData"),true);resolve()},{enableHighAccuracy:false,maximumAge:300000,timeout:5000}));
      await load();return true;
    }
    if(action==="pharmacy-favorite"){await api("/pharmacy/favorite",{pharmacy_id:target.dataset.id,favorite:target.dataset.favorite==="1"});await load();return true}
    if(action==="pharmacy-order-action"){await api("/pharmacy/orders/"+encode(target.dataset.id)+"/action",{action:target.dataset.next});await load();return true}
    return false;
  }
  async function submit(form,values){
    if(form.id==="pharmacy-search-form"){
      query=String(values.q||"").trim();filters={};
      for(const k of ["open_now","is_24_7","delivery","pickup","electronic_prescription","insurance","benefit_prescription"])filters[k]=form.elements[k]?.checked||false;
      filters.inventory=values.inventory||"";filters.sort=values.sort||"";
      await load();return true;
    }
    if(form.id==="pharmacy-order-form"){await api("/pharmacy/orders",{prescription_id:values.prescription_id,product_id:values.product_id,pharmacy_id:values.pharmacy_id,fulfillment:values.fulfillment,quantity:Number(values.quantity)});window.location.hash="/pharmacy-orders";return true}
    if(form.id==="pharmacy-simulation-form"){const r=await api("/pharmacy/simulate",{product_id:values.product_id,dose_scenario:values.dose_scenario,requested_outcomes:["boundary_only"]});const el=document.querySelector("[data-simulation-result]");if(el)el.innerHTML=`<div class="note"><strong>${e(t("simulatedOnly"))}</strong><p>${e(r.assumptions.join(" · "))}</p><small>${e(r.provenance)}</small></div>`;return true}
    if(form.id==="pharmacy-assistant-form"){const r=await api("/pharmacy/assistant",{message:values.message});const el=document.querySelector("[data-pharmacy-assistant]");if(el)el.innerHTML=`<div class="note"><strong>${e(r.status)}</strong><p>${e(r.text)}</p></div>`;return true}
    return false;
  }
  async function change(){return false}
  const dashboard=()=>`<section class="card pharmacy-dashboard"><div class="row spread"><div><p class="eyebrow">EDHT</p><h2>${e(t("pharmacy"))}</h2></div><span class="list-icon">⚕</span></div><p>${e(t("pharmacyIntro"))}</p><div class="card-actions"><a class="btn" href="#/pharmacy">${e(t("pharmacy"))}</a><a class="btn ghost" href="#/prescriptions">${e(t("prescriptions"))}</a></div></section>`;
  return {enrich,render,click,submit,change,dashboard,clear(){mode="list";query="";filters={};location=null}};
}