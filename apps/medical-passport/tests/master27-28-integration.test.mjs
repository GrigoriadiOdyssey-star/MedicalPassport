import test from 'node:test';
import assert from 'node:assert/strict';
import { MASTER2728_ROUTES, MASTER2728_RELEASE_GATES } from '../master27-28-integration.mjs';

test('MASTER-27/28 route contract is namespaced and additive', () => {
  assert.ok(MASTER2728_ROUTES.length >= 13);
  for (const route of MASTER2728_ROUTES) assert.match(route, / \/api\/mvp\//);
  assert.equal(new Set(MASTER2728_ROUTES).size, MASTER2728_ROUTES.length);
});

test('unsafe production and autonomous clinical gates remain closed', () => {
  assert.deepEqual(MASTER2728_RELEASE_GATES, {
    productionFHIR: false,
    productionOCR: false,
    productionMedicalTranslation: false,
    autonomousDiagnosis: false,
    autonomousPrescribing: false,
    autonomousDoseChange: false,
    autonomousTherapyDiscontinuation: false,
  });
});

test('pilot routes include labs, twin, translation, consent and dashboard', () => {
  const joined = MASTER2728_ROUTES.join('\n');
  for (const required of ['dashboard','consent','labs','digital-twin','translation','documents']) assert.match(joined, new RegExp(required));
});
