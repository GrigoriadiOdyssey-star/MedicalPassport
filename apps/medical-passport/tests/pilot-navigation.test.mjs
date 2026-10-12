import test from 'node:test';import assert from 'node:assert/strict';
import {PILOT_NAVIGATION,PATIENT_DASHBOARD_CARDS,DOCTOR_WORKSPACE_SECTIONS,navigationFor} from '../pilot-navigation.mjs';
test('patient MVP has a short coherent primary navigation',()=>{assert.ok(PILOT_NAVIGATION.length<=8);assert.deepEqual(navigationFor('patient'),PILOT_NAVIGATION);});
test('dashboard contains required MASTER-27/28 cards',()=>{for(const id of ['TODAY','NEXT_MEDICATION','LAB_RESULTS','ACTIVE_CONDITIONS','RECENT_DOCUMENTS','UPCOMING_APPOINTMENTS','DIGITAL_TWIN','QR_ACCESS','AI_ASSISTANT','SOS'])assert.ok(PATIENT_DASHBOARD_CARDS.includes(id));});
test('doctor workspace contains bounded clinical sections',()=>{for(const id of ['ALLERGIES','CURRENT_MEDICATIONS','RECENT_LABS','DIGITAL_TWIN','TIMELINE','PROVENANCE'])assert.ok(DOCTOR_WORKSPACE_SECTIONS.includes(id));});
