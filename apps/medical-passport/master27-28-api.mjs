export function handleMaster2728Api({req,route,url,body,user,store,json}){
  if(req.method==='GET'&&route==='/api/mvp/dashboard'){json(200,store.patientDashboardMvp(user));return true;}
  if(route==='/api/mvp/onboarding'){
    if(req.method==='GET'){json(200,store.pilotOnboardingMvp(user));return true;}
    if(req.method==='POST'){json(200,store.pilotOnboardingMvp(user,body));return true;}
  }
  if(req.method==='POST'&&route==='/api/mvp/pilot/consent'){json(200,store.pilotConsentMvp(user,body.version));return true;}
  if(req.method==='POST'&&route==='/api/mvp/pilot/event'){json(201,store.pilotEventMvp(user,body.event,body.metadata));return true;}

  // Legacy pilot laboratory projection retained for compatibility.
  if(req.method==='GET'&&route==='/api/mvp/labs'){json(200,store.labResultsMvp(user,url.searchParams.get('test')||''));return true;}
  if(req.method==='POST'&&route==='/api/mvp/labs'){json(201,store.saveLabResultMvp(user,body));return true;}
  if(req.method==='GET'&&route==='/api/mvp/labs/trend'){const test=url.searchParams.get('test')||'';if(!test)throw Error('LAB_TEST_CODE_REQUIRED');json(200,store.labTrendMvp(user,test));return true;}
  if(req.method==='POST'&&route==='/api/mvp/fhir/labs/import'){json(201,store.fhirLabSynthetic(user,body.resource||body));return true;}

  // MASTER-27 production-shaped laboratory runtime. Real providers remain gated.
  if(req.method==='GET'&&route==='/api/mvp/laboratory/providers'){json(200,store.labProviders(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/catalogue'){json(200,store.labCatalogue(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/panels'){json(200,store.labPanels(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/orders'){json(200,store.labOrders(user,url.searchParams.get('status')||'all'));return true;}
  if(req.method==='POST'&&route==='/api/mvp/laboratory/orders'){json(201,store.createLabOrder(user,body));return true;}

  let match=/^\/api\/mvp\/laboratory\/orders\/([A-Za-z0-9_-]+)$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labOrder(user,match[1]));return true;}
  match=/^\/api\/mvp\/laboratory\/orders\/([A-Za-z0-9_-]+)\/action$/.exec(route);
  if(match&&req.method==='POST'){json(200,store.labOrderAction(user,match[1],body.status||body.action,body.reason));return true;}
  match=/^\/api\/mvp\/laboratory\/orders\/([A-Za-z0-9_-]+)\/specimens$/.exec(route);
  if(match&&req.method==='POST'){json(201,store.createLabSpecimen(user,match[1],body));return true;}
  match=/^\/api\/mvp\/laboratory\/specimens\/([A-Za-z0-9_-]+)\/action$/.exec(route);
  if(match&&req.method==='POST'){json(200,store.labSpecimenAction(user,match[1],body.status||body.action,body));return true;}

  if(req.method==='POST'&&route==='/api/mvp/laboratory/accessions'){json(201,store.createLabAccession(user,body));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/results'){
    json(200,store.labResultSearch(user,{
      q:url.searchParams.get('q')||'',
      test_id:url.searchParams.get('test_id')||'',
      status:url.searchParams.get('status')||'',
      flag:url.searchParams.get('flag')||'',
      category:url.searchParams.get('category')||'',
      provider:url.searchParams.get('provider')||'',
      specimen_type:url.searchParams.get('specimen_type')||'',
      source:url.searchParams.get('source')||'',
      date_from:url.searchParams.get('date_from')||'',
      date_to:url.searchParams.get('date_to')||''
    }));return true;
  }
  if(req.method==='POST'&&route==='/api/mvp/laboratory/results/import'){json(201,store.importLabResult(user,body));return true;}
  match=/^\/api\/mvp\/laboratory\/results\/([A-Za-z0-9_-]+)\/attachments$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labAttachments(user,match[1]));return true;}
  if(match&&req.method==='POST'){json(201,store.linkLabAttachment(user,match[1],body.version,body.document_id,body.relation));return true;}
  match=/^\/api\/mvp\/laboratory\/results\/([A-Za-z0-9_-]+)$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labResult(user,match[1]));return true;}
  match=/^\/api\/mvp\/laboratory\/results\/([A-Za-z0-9_-]+)\/version$/.exec(route);
  if(match&&req.method==='POST'){json(201,store.reviseLabResult(user,match[1],body));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/longitudinal'){json(200,store.labLongitudinal(user));return true;}
  match=/^\/api\/mvp\/laboratory\/trends\/([A-Za-z0-9_-]+)$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labTrendSeries(user,match[1]));return true;}

  if(req.method==='GET'&&route==='/api/mvp/laboratory/reports'){json(200,store.labReports(user));return true;}
  if(req.method==='POST'&&route==='/api/mvp/laboratory/reports'){json(201,store.createDiagnosticReport(user,body));return true;}
  match=/^\/api\/mvp\/laboratory\/reports\/([A-Za-z0-9_-]+)$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labReport(user,match[1]));return true;}
  match=/^\/api\/mvp\/laboratory\/reports\/([A-Za-z0-9_-]+)\/version$/.exec(route);
  if(match&&req.method==='POST'){json(201,store.reviseDiagnosticReport(user,match[1],body));return true;}

  const specialtyDomain={pathology:'PATHOLOGY',microbiology:'MICROBIOLOGY','molecular-genetics':'MOLECULAR_GENETICS',poct:'POCT'};
  match=/^\/api\/mvp\/laboratory\/(pathology|microbiology|molecular-genetics|poct)$/.exec(route);
  if(match&&req.method==='GET'){json(200,store.labSpecialtyList(user,specialtyDomain[match[1]]));return true;}
  if(match&&req.method==='POST'){json(201,store.labSpecialtyCreate(user,specialtyDomain[match[1]],body));return true;}
  match=/^\/api\/mvp\/laboratory\/(pathology|microbiology|molecular-genetics|poct)\/([A-Za-z0-9_-]+)$/.exec(route);
  if(match&&req.method==='GET'){const record=store.labSpecialtyGet(user,match[2]);if(record.domain!==specialtyDomain[match[1]])throw new Error('LAB_SPECIALTY_NOT_FOUND');json(200,record);return true;}
  match=/^\/api\/mvp\/laboratory\/(pathology|microbiology|molecular-genetics|poct)\/([A-Za-z0-9_-]+)\/version$/.exec(route);
  if(match&&req.method==='POST'){const record=store.labSpecialtyGet(user,match[2]);if(record.domain!==specialtyDomain[match[1]])throw new Error('LAB_SPECIALTY_NOT_FOUND');json(201,store.labSpecialtyRevise(user,match[2],body));return true;}
  match=/^\/api\/mvp\/laboratory\/(pathology|microbiology|molecular-genetics|poct)\/([A-Za-z0-9_-]+)\/attachments$/.exec(route);
  if(match&&req.method==='POST'){const record=store.labSpecialtyGet(user,match[2]);if(record.domain!==specialtyDomain[match[1]])throw new Error('LAB_SPECIALTY_NOT_FOUND');json(201,store.linkLabSpecialtyAttachment(user,match[2],body.version,body.document_id,body.relation));return true;}

  if(req.method==='GET'&&route==='/api/mvp/laboratory/notifications'){json(200,store.labNotifications(user));return true;}
  match=/^\/api\/mvp\/laboratory\/notifications\/([A-Za-z0-9_-]+)\/acknowledge$/.exec(route);
  if(match&&req.method==='POST'){json(200,store.ackLabNotification(user,match[1]));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/provider-boundary'){json(200,store.labProviderBoundary(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/laboratory/specialized-boundaries'){json(200,store.labSpecializedBoundaries(user));return true;}
  if(req.method==='POST'&&route==='/api/mvp/laboratory/assistant'){json(200,store.labAssistant(user,body));return true;}

  if(req.method==='POST'&&route==='/api/mvp/digital-twin/snapshot'){json(201,store.buildClinicalStateTwinMvp(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/digital-twin/history'){json(200,store.twinHistoryMvp(user));return true;}
  if(req.method==='POST'&&route==='/api/mvp/translation'){json(201,store.translationGatewayMvp(user,body));return true;}
  const metadata=/^\/api\/mvp\/documents\/([a-f0-9-]+)\/metadata$/.exec(route);
  if(req.method==='POST'&&metadata){json(200,store.setDocumentMetadataMvp(user,metadata[1],body));return true;}
  return false;
}
