export function handleMaster2728Api({req,route,url,body,user,store,json}){
  if(req.method==='GET'&&route==='/api/mvp/dashboard'){json(200,store.patientDashboardMvp(user));return true;}
  if(route==='/api/mvp/onboarding'){
    if(req.method==='GET'){json(200,store.pilotOnboardingMvp(user));return true;}
    if(req.method==='POST'){json(200,store.pilotOnboardingMvp(user,body));return true;}
  }
  if(req.method==='POST'&&route==='/api/mvp/pilot/consent'){json(200,store.pilotConsentMvp(user,body.version));return true;}
  if(req.method==='POST'&&route==='/api/mvp/pilot/event'){json(201,store.pilotEventMvp(user,body.event,body.metadata));return true;}
  if(req.method==='GET'&&route==='/api/mvp/labs'){json(200,store.labResultsMvp(user,url.searchParams.get('test')||''));return true;}
  if(req.method==='POST'&&route==='/api/mvp/labs'){json(201,store.saveLabResultMvp(user,body));return true;}
  if(req.method==='GET'&&route==='/api/mvp/labs/trend'){const test=url.searchParams.get('test')||'';if(!test)throw Error('LAB_TEST_CODE_REQUIRED');json(200,store.labTrendMvp(user,test));return true;}
  if(req.method==='POST'&&route==='/api/mvp/fhir/labs/import'){json(201,store.fhirLabSynthetic(user,body.resource||body));return true;}
  if(req.method==='POST'&&route==='/api/mvp/digital-twin/snapshot'){json(201,store.buildClinicalStateTwinMvp(user));return true;}
  if(req.method==='GET'&&route==='/api/mvp/digital-twin/history'){json(200,store.twinHistoryMvp(user));return true;}
  if(req.method==='POST'&&route==='/api/mvp/translation'){json(201,store.translationGatewayMvp(user,body));return true;}
  const metadata=/^\/api\/mvp\/documents\/([a-f0-9-]+)\/metadata$/.exec(route);
  if(req.method==='POST'&&metadata){json(200,store.setDocumentMetadataMvp(user,metadata[1],body));return true;}
  return false;
}
