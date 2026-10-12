import test from 'node:test';
import assert from 'node:assert/strict';
import { createMaster2728ServerPlugin } from '../master27-28-server-plugin.mjs';

function fixture() {
  class Store {}
  const store = Object.create(Store.prototype);
  store.db = { exec() {}, prepare(){ return { run(){}, all(){return []}, get(){return null} }; } };
  store.now = () => Date.now();
  store.master2728Coverage = () => ({ milestone:'MASTER-27/28' });
  const plugin = createMaster2728ServerPlugin({ Store, store });
  return { Store, store, plugin };
}

test('plugin never intercepts MASTER-26 routes', () => {
  const { plugin } = fixture();
  assert.equal(plugin.handle({ route:'/api/pharmacy' }), false);
  assert.equal(plugin.handle({ route:'/api/reminders' }), false);
  assert.equal(plugin.handle({ route:'/api/grants' }), false);
});

test('release gates remain closed for unverified production capabilities', () => {
  const { plugin } = fixture();
  assert.equal(plugin.releaseGates.productionFHIR, false);
  assert.equal(plugin.releaseGates.productionOCR, false);
  assert.equal(plugin.releaseGates.productionMedicalTranslation, false);
  assert.equal(plugin.releaseGates.autonomousDiagnosis, false);
  assert.equal(plugin.releaseGates.autonomousPrescribing, false);
});

test('plugin publishes MASTER-27/28 identity and coverage', () => {
  const { plugin } = fixture();
  assert.equal(plugin.name, 'EDHT_MASTER_27_28_MVP');
  assert.equal(plugin.coverage.milestone, 'MASTER-27/28');
});
