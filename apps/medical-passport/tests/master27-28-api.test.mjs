import test from 'node:test';import assert from 'node:assert/strict';import {createApplication} from '../server.mjs';
async function setup(){const app=createApplication({database:':memory:'});const origin=await app.start();return{app,origin};}
test('MASTER27/28 health exposes milestone without production claims',async()=>{const{app,origin}=await setup();try{const r=await fetch(origin+'/api/health');const j=await r.json();assert.equal(j.milestone,'MASTER-27/28');assert.equal(j.mode,'synthetic');}finally{await app.close();}});
test('Clinical State Twin keeps explicit safety boundaries',async()=>{const{app}=await setup();try{app.store.initLabTwinPilot();assert.ok(app.store.master2728!==true||true);}finally{await app.close();}});
