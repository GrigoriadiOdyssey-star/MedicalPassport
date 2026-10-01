import http from "node:http";
import os from "node:os";
import { pipeline } from "node:stream/promises";
import { LocalObjects, Ingestion, storagePolicy } from "./storage.mjs";
import { Care } from "./care.mjs";
import { Imaging, SandboxPACS } from "./imaging.mjs";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import QRCode from "qrcode";
import { Store, HttpError, appRoot, hash } from "./store.mjs";
import { adaptFHIR } from "./interop.mjs";
import { attachUX } from "./ux-store.mjs";
import { attachProduct } from "./product-store.mjs";
import { attachPharmacy } from "./pharmacy.mjs";
import { attachMaster2728 } from "./master27-28-bootstrap.mjs";
import { handleMaster2728Api } from "./master27-28-api.mjs";
attachUX(Store);
attachProduct(Store);
attachPharmacy(Store);
attachMaster2728(Store);
export function createApplication({
  database = path.join(appRoot, "var", "passport.sqlite"),
  mode = process.env.EDHT_MODE ?? "synthetic",
  now,
  objectRoot,
  uploadPolicy,
  scanner,
} = {}) {
  if (mode !== "synthetic" || process.env.NODE_ENV === "production")
    throw Error("PRODUCTION_RELEASE_GATES_OPEN: only synthetic loopback mode permitted");
  const store = new Store(database, now);
  store.initLabTwinPilot();
  store.initPilotMvpRuntime();
  store.seedPharmacyCatalog();
  const objects = new LocalObjects(objectRoot ?? (database === ":memory:" ? fs.mkdtempSync(path.join(os.tmpdir(), "edht-objects-")) : path.join(path.dirname(database), "blob-storage")));
  const imaging = new Imaging(store), ingestion = new Ingestion(store, objects, storagePolicy(uploadPolicy), imaging, scanner), pacs = new SandboxPACS(imaging, ingestion);
  const care = new Care(store);
  let origin; let notificationWorker; const registrationLimit = new Map();
  const server = http.createServer(async (req, res) => {
    const headers = {"Cache-Control":"no-store","X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"no-referrer","Content-Security-Policy":"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'","Permissions-Policy":"camera=(), microphone=(), geolocation=(self)"};
    for (const [k,v] of Object.entries(headers)) res.setHeader(k,v);
    let requestActor="anonymous";
    const json=(status,value)=>{res.writeHead(status,{"Content-Type":"application/json; charset=utf-8"});res.end(JSON.stringify(value));};
    try {
      if(req.headers.host!==new URL(origin).host) throw new HttpError(403,"INVALID_HOST");
      const url=new URL(req.url,origin),route=url.pathname,mutation=!["GET","HEAD"].includes(req.method);
      if(mutation&&req.headers.origin!==origin) throw new HttpError(403,"INVALID_ORIGIN");
      let body={}; const rawChunk=req.method==="PUT"&&/^\/api\/uploads\/[a-f0-9-]+\/chunk$/.test(route);
      if(mutation&&!rawChunk){if(!String(req.headers["content-type"]??"").startsWith("application/json"))throw new HttpError(415,"JSON_REQUIRED");let length=0,chunks=[];for await(const chunk of req){length+=chunk.length;if(length>Math.ceil((ingestion.policy.chunkBytes*4)/3)+32768)throw new HttpError(413,"BODY_TOO_LARGE");chunks.push(chunk);}try{body=JSON.parse(Buffer.concat(chunks).toString()||"{}");}catch{throw new HttpError(400,"INVALID_JSON");}if(!body||typeof body!=="object"||Array.isArray(body))throw new HttpError(400,"INVALID_JSON");}
      if(req.method==="GET"&&["/","/main.js","/i18n.js","/ui.js","/app.css","/product-ui.js","/alpha4-ui.js","/care-ui.js","/file-hash.js","/product-i18n.js","/pharmacy-ui.js","/pharmacy-i18n.js","/master27-ui.js"].includes(route)){const filename=route==="/"?"index.html":route.slice(1),mime=route.endsWith(".js")?"text/javascript":route.endsWith(".css")?"text/css":"text/html";res.writeHead(200,{"Content-Type":mime+"; charset=utf-8"});res.end(fs.readFileSync(path.join(appRoot,"public",filename)));return;}
      if(req.method==="GET"&&route==="/api/health"){json(200,{status:"ok",mode:"synthetic",migrations:store.db.prepare("SELECT version FROM migrations ORDER BY version").all(),ci_verified:false,production_ready:false,release_gates_open:true,release_gates:store.master27Coverage?.()??{status:"NOT_REPORTED"},master27_28:store.master27Coverage?.()??{status:"NOT_REPORTED",production_ready:false}});return;}
      if(req.method==="POST"&&route==="/api/register"){const ip=req.socket.remoteAddress,now=Date.now(),recent=(registrationLimit.get(ip)??[]).filter(t=>now-t<60000);if(recent.length>=10)throw new HttpError(429,"TRY_LATER");registrationLimit.set(ip,[...recent,now]);if(body.synthetic!==true||body.adult!==true)throw new HttpError(400,"SYNTHETIC_ADULT_CONFIRMATION_REQUIRED");if(body.role&&body.role!=="patient")throw new HttpError(403,"ROLE_SELF_ASSIGNMENT_FORBIDDEN");json(201,store.register(body));return;}
      if(req.method==="POST"&&route==="/api/login"){const login=store.login(body.email,body.password,req.socket.remoteAddress);res.setHeader("Set-Cookie",`edht_session=${login.token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`);json(200,{csrf:login.csrf});return;}
      if(req.method==="POST"&&route==="/api/recover"){store.recover(body.token,body.password);json(200,{ok:true});return;}
      const token=String(req.headers.cookie??"").split(";").map(s=>s.trim()).find(s=>s.startsWith("edht_session="))?.slice(13),user=store.session(token);
      if(!user)throw new HttpError(401,"UNAUTHENTICATED");requestActor=user.user_id;if(mutation&&req.headers["x-csrf-token"]!==user.csrf)throw new HttpError(403,"INVALID_CSRF");
      if(handleMaster2728Api({req,route,url,body,user,store,json}))return;
      const sendObject=async(key,mime,name,start,end)=>{res.writeHead(200,{"Content-Type":mime,"Content-Disposition":'attachment; filename="'+name.replace(/[^A-Za-z0-9._-]/g,"_")+'"'});await pipeline(fs.createReadStream(objects.location(key),start===undefined?{}:{start,end}),res);};
      if(route==="/api/access/imaging"&&req.method==="POST"){const i=store.consume(user,body.token,null,body.instance_id);await sendObject(i.object_key,i.mime,"imaging-"+i.sop_uid+".dcm");return;}
      if(route==="/api/appointments"){if(req.method==="GET"){json(200,care.appointments(user));return;}if(req.method==="POST"){json(200,care.saveAppointment(user,body));return;}}
      if(route==="/api/guidelines/context"){if(req.method==="GET"){json(200,care.context(user));return;}if(req.method==="POST"){json(200,care.saveContext(user,body));return;}}
      if(route==="/api/storage-policy"&&req.method==="GET"){json(200,{...ingestion.policy,malware_scanner:scanner?"CONFIGURED":"NOT_SCANNED_SYNTHETIC",pacs:pacs.capabilities()});return;}
      if(route==="/api/uploads"&&req.method==="POST"){json(201,ingestion.create(user,body));return;}
      if(route==="/api/uploads"&&req.method==="GET"){const p=store.patient(user);json(200,store.db.prepare("SELECT id,name,mime,kind,size,received,status,expires_at FROM upload_sessions WHERE patient_id=? AND status IN ('UPLOADING','PROCESSING') ORDER BY created_at DESC LIMIT 64").all(p.id));return;}
      if(/^\/api\/uploads\/[a-f0-9-]+(\/(chunk|complete|cancel))?$/.test(route)){const id=route.split("/")[3];if(rawChunk){if(req.headers["content-type"]!=="application/octet-stream")throw new HttpError(415,"BINARY_CHUNK_REQUIRED");json(200,await ingestion.chunk(user,id,Number(url.searchParams.get("offset")),req,req.headers["x-chunk-sha256"]));return;}if(req.method==="GET"){json(200,ingestion.status(user,id));return;}if(req.method==="POST"&&route.endsWith("/complete")){json(200,await ingestion.complete(user,id));return;}if(req.method==="POST"&&route.endsWith("/cancel")){json(200,await ingestion.cancel(user,id));return;}}
      if(/^\/api\/documents\/[a-f0-9-]+\/versions$/.test(route)&&req.method==="GET"){json(200,ingestion.versions(user,route.split("/")[3]));return;}
      if(route==="/api/imaging"&&req.method==="GET"){json(200,pacs.qido(user));return;}if(route==="/api/pacs/capabilities"&&req.method==="GET"){json(200,pacs.capabilities());return;}
      if(/^\/api\/imaging\/[a-f0-9-]+$/.test(route)){if(req.method==="GET"){json(200,imaging.study(user,route.split("/")[3]));return;}if(req.method==="POST"){json(200,imaging.revise(user,route.split("/")[3],body));return;}}
      if(/^\/api\/imaging-instances\/[a-f0-9-]+\/(file|pixels)$/.test(route)&&req.method==="GET"){const i=pacs.wado(user,route.split("/")[3]);if(route.endsWith("/pixels")){const m=i.metadata;if(i.mime!=="application/dicom"||!m.viewerSupported)throw new HttpError(415,"PIXEL_FORMAT_UNSUPPORTED");await sendObject(i.object_key,"application/octet-stream","pixels.bin",m.pixelOffset,m.pixelOffset+m.rows*m.columns*(m.bitsAllocated/8)-1);}else await sendObject(i.object_key,i.mime,"image"+(i.mime==="application/dicom"?".dcm":""));return;}
      if(/^\/api\/record\/[a-f0-9-]+$/.test(route)&&req.method==="GET"){const p=store.patient(user),r=store.db.prepare("SELECT * FROM current_records WHERE id=? AND patient_id=?").get(route.split("/")[3],p.id);if(!r)throw new HttpError(404,"NOT_FOUND");store.transaction(()=>store.audit(user.user_id,"RECORD_DETAIL_READ",r.id,p.id));json(200,{...r,body:JSON.parse(r.body)});return;}
      if(route==="/api/search"&&req.method==="GET"){const p=store.patient(user),q=(url.searchParams.get("q")??"").trim();if(q.length<2||q.length>100)throw new HttpError(400,"SEARCH_2_TO_100_CHARACTERS");const pattern="%"+q.replace(/[\\%_]/g,c=>"\\"+c)+"%",records=store.db.prepare("SELECT id,kind,body,source,version FROM current_records WHERE patient_id=? AND archived=0 AND body LIKE ? ESCAPE '\\' LIMIT 30").all(p.id,pattern).map(r=>({...r,body:JSON.parse(r.body)})),documents=store.db.prepare("SELECT id,name,document_type,source FROM documents WHERE patient_id=? AND id NOT IN (SELECT document_id FROM document_details WHERE archived=1) AND (name LIKE ? ESCAPE '\\' OR source LIKE ? ESCAPE '\\') LIMIT 30").all(p.id,pattern,pattern);store.transaction(()=>store.audit(user.user_id,"PATIENT_SEARCH","",p.id));json(200,{records,documents});return;}
      const get=(r,fn)=>{if(req.method==="GET"&&route===r){json(200,fn());return true;}return false;},post=(r,fn,status=200)=>{if(req.method==="POST"&&route===r){json(status,fn());return true;}return false;};
      if(get("/api/pharmacy",()=>store.pharmacySearch(user,Object.fromEntries(url.searchParams)))||get("/api/pharmacy/products",()=>store.pharmacyProducts(user,url.searchParams.get("q")??""))||get("/api/pharmacy/prescriptions",()=>store.pharmacyPrescriptions(user,url.searchParams.get("status")??"all"))||get("/api/pharmacy/orders",()=>store.pharmacyOrders(user))||post("/api/pharmacy/orders",()=>store.createPharmacyOrder(user,body),201)||get("/api/pharmacy/dispensing",()=>store.pharmacyDispensing(user))||get("/api/pharmacy/notices",()=>store.pharmacyNotices(user))||get("/api/pharmacy/provider-boundary",()=>store.pharmacyProviderBoundary(user))||get("/api/pharmacy/pharmacology-context",()=>store.pharmacologyContext(user))||post("/api/pharmacy/favorite",()=>store.pharmacyFavorite(user,body.pharmacy_id,body.favorite!==false))||post("/api/pharmacy/simulate",()=>store.pharmacySimulation(user,body))||post("/api/pharmacy/assistant",()=>store.pharmacyAssistant(user,body)))return;
      if(req.method==="GET"&&/^\/api\/pharmacy\/prescriptions\/[A-Za-z0-9_-]+$/.test(route)){json(200,store.pharmacyPrescription(user,route.split("/").at(-1)));return;}if(req.method==="POST"&&/^\/api\/pharmacy\/orders\/[a-f0-9-]+\/action$/.test(route)){json(200,store.pharmacyOrderAction(user,route.split("/")[4],body.action));return;}if(req.method==="GET"&&/^\/api\/pharmacy\/[A-Za-z0-9_-]+$/.test(route)){json(200,store.pharmacyDetail(user,route.split("/").at(-1),url.searchParams.get("q")??""));return;}
      if(get("/api/notifications",()=>store.notificationList(user,url.searchParams.get("filter")??"all",url.searchParams.get("type")??"all",Number(url.searchParams.get("offset")??0)))||post("/api/notifications/action",()=>store.notificationAction(user,body.id??"",body.action,body.minutes))||get("/api/notification-settings",()=>store.preferences(user))||post("/api/notification-settings",()=>store.savePreferences(user,body))||get("/api/reminders",()=>store.reminderData(user,Number(url.searchParams.get("days")??1),Number(url.searchParams.get("offset")??0)))||post("/api/reminders",()=>store.configureReminder(user,body.record_id,body),201)||post("/api/reminders/pause",()=>store.pauseReminder(user,body.id))||post("/api/doses/action",()=>store.doseAction(user,body.id,body.action,body.minutes))||post("/api/timezone",()=>store.timezoneChoice(user,body))||get("/api/sessions",()=>store.sessionsList(user))||post("/api/sessions/revoke",()=>store.revokeSession(user,body.id))||get("/api/profile",()=>store.profile(user))||post("/api/profile",()=>store.updateProfile(user,body)))return;
      if(req.method==="GET"&&route.startsWith("/api/views/")){json(200,store.screen(user,route.split("/")[3],url.searchParams.get("offset")??0,url.searchParams.get("archived")==="1",url.searchParams.get("phase")??"active"));return;}
      if(req.method==="GET"&&/^\/api\/records\/[a-f0-9-]+\/history$/.test(route)){json(200,store.recordHistory(user,route.split("/")[3]));return;}if(req.method==="POST"&&/^\/api\/records\/[a-f0-9-]+\/(update|archive)$/.test(route)){json(200,store.changeRecord(user,route.split("/")[3],body.body,body.version,route.endsWith("/archive")));return;}
      if(req.method==="POST"&&/^\/api\/documents\/[a-f0-9-]+\/metadata$/.test(route)){json(200,store.documentMetadata(user,route.split("/")[3],body));return;}if(req.method==="POST"&&/^\/api\/documents\/[a-f0-9-]+\/archive$/.test(route)){json(200,store.archiveDocument(user,route.split("/")[3]));return;}
      if(post("/api/access/info",()=>store.accessInfo(user,body.token))||get("/api/me",()=>store.me(user))||get("/api/doctors",()=>{store.patient(user);return store.doctors();})||get("/api/passport",()=>store.ownPassport(user))||post("/api/records",()=>store.addRecord(user,body.kind,body.body),201)||post("/api/documents",()=>store.upload(user,body),201)||get("/api/audit",()=>store.auditList(user)))return;
      if(req.method==="POST"&&route==="/api/logout"){store.logout(user);res.setHeader("Set-Cookie","edht_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0");json(200,{ok:true});return;}
      const download=async(d,version)=>{const stored=ingestion.file(d,version);if(stored){await sendObject(stored.object_key,stored.mime,stored.name);return;}if(version)throw new HttpError(404,"VERSION_NOT_FOUND");res.writeHead(200,{"Content-Type":d.mime,"Content-Disposition":`attachment; filename="${d.name.replace(/[^A-Za-z0-9._-]/g,"_")}"`});res.end(Buffer.from(d.content));};
      if(req.method==="GET"&&/^\/api\/documents\/[a-f0-9-]+$/.test(route)){await download(store.ownDocument(user,route.split("/").at(-1)),url.searchParams.has("version")?Number(url.searchParams.get("version")):undefined);return;}
      if(get("/api/grants",()=>store.grants(user,Number(url.searchParams.get("offset")??0),url.searchParams.get("status")??"all")))return;
      if(req.method==="POST"&&route==="/api/grants"){const g=store.createGrant(user,body),link=origin+"/#access="+g.token,qr=await QRCode.toDataURL(link,{errorCorrectionLevel:"M",width:320,margin:4});json(201,{...g,link,qr});return;}
      if(req.method==="POST"&&/^\/api\/grants\/[a-f0-9-]+\/revoke$/.test(route)){store.revoke(user,route.split("/")[3]);json(200,{ok:true});return;}
      if(req.method==="POST"&&route==="/api/access"){if(typeof body.token!=="string"||!/^[-_A-Za-z0-9]{43}$/.test(body.token))throw new HttpError(404,"NOT_FOUND");json(200,store.consume(user,body.token));return;}
      if(req.method==="POST"&&route==="/api/access/document"){if(typeof body.token!=="string"||typeof body.document_id!=="string")throw new HttpError(400,"INVALID_REQUEST");await download(store.consume(user,body.token,body.document_id));return;}
      if(req.method==="POST"&&route==="/api/fhir/import"){const p=store.patient(user),mapped=adaptFHIR(body.resource,p.id);json(201,store.addRecord(user,mapped.kind,mapped.body,"synthetic_fhir:"+mapped.external_id));return;}
      if(req.method==="POST"&&route==="/api/assistant"){const p=store.patient(user),data=store.transaction(()=>{store.audit(user.user_id,"SANDBOX_ASSISTANT_CONTEXT","",p.id);return store.passport(p.id,["allergy","medication","condition"]);});json(200,{provider:"deterministic-sandbox",model:"context-summary-v1",is_generative_ai:false,generated_at:store.now(),source_records:data.records.map(r=>({id:r.id,version:r.version,source:r.source})),text:`В вашем синтетическом паспорте: аллергии — ${data.records.filter(r=>r.kind==="allergy").length}, лекарства — ${data.records.filter(r=>r.kind==="medication").length}, состояния — ${data.records.filter(r=>r.kind==="condition").length}. Это записанные сведения, а не подтверждённые диагнозы или назначения. Обсудите медицинские вопросы с врачом. При непосредственной угрозе здоровью обратитесь в местную экстренную службу.`,boundaries:{guideline_registry:"interface_preserved_not_connected",precision_pharmacology:"not_enabled",digital_twin:"pilot_read_only"}});return;}
      json(404,{error:"NOT_FOUND"});
    }catch(e){const status=e instanceof HttpError?e.status:500;if([401,403,404].includes(status)){try{store.transaction(()=>store.audit(requestActor,"REQUEST_DENIED","",null,"DENIED"));}catch{}}if(status===500)console.error("Request failed:",e.name);if(!res.headersSent)json(status,{error:e instanceof HttpError?e.code:(e?.message&&/^[A-Z0-9_]+$/.test(e.message)?e.message:"INTERNAL_ERROR")});else res.end();}
  });
  server.requestTimeout=15000;server.headersTimeout=10000;
  return {server,store,ingestion,care,imaging,objects,async start(port=0){await new Promise((resolve,reject)=>{server.once("error",reject);server.listen(port,"127.0.0.1",resolve);});origin="http://127.0.0.1:"+server.address().port;notificationWorker=setInterval(()=>{try{store.pumpNotifications();}catch(e){console.error("Notification worker failed:",e.name);}},30000);notificationWorker.unref();return origin;},async close(){clearInterval(notificationWorker);await new Promise(resolve=>server.close(resolve));store.close();}};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const app=createApplication(),origin=await app.start(Number(process.env.PORT??4173));console.log("EDHT synthetic MVP: "+origin);const close=()=>app.close().then(()=>process.exit(0));process.on("SIGINT",close);process.on("SIGTERM",close);}
