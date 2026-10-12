import test from 'node:test';import assert from 'node:assert/strict';import {PILOT_SAFETY,EPISTEMIC_STATES,ATTENTION_STATUSES,safeLabFlag,validatePilotBoundary} from '../pilot-safety.mjs';
test('all dangerous autonomous pilot capabilities remain disabled',()=>assert.equal(validatePilotBoundary(),true));
test('unknown lab values never normalize silently',()=>{assert.equal(safeLabFlag('UNKNOWN'),'UNKNOWN');assert.equal(safeLabFlag('unexpected'),'UNKNOWN');});
test('epistemic categories remain explicit',()=>{assert.ok(EPISTEMIC_STATES.includes('MEASURED'));assert.ok(EPISTEMIC_STATES.includes('SIMULATED'));assert.notEqual(EPISTEMIC_STATES.indexOf('MEASURED'),EPISTEMIC_STATES.indexOf('SIMULATED'));});
test('attention layer has no prescribing state',()=>{assert.ok(ATTENTION_STATUSES.includes('REVIEW_RECOMMENDED'));assert.equal(ATTENTION_STATUSES.some(x=>/PRESCRIB|DIAGNOS/.test(x)),false);});
test('reminder cannot mutate prescription or suggest doubling',()=>{assert.equal(PILOT_SAFETY.remindersMayMutatePrescription,false);assert.equal(PILOT_SAFETY.missedDoseMaySuggestDoubling,false);});
