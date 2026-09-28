import test from 'node:test';
import assert from 'node:assert/strict';
import { MASTER2728_ROUTES, MASTER2728_RELEASE_GATES } from '../master27-28-integration.mjs';

test('MASTER-27/28 route contract is namespaced and additive', () => {
  assert.ok(MASTER2728_ROUTES.length >= 30);
  for (const route of MASTER2728_ROUTES) assert.match(route, /\/api\/mvp\//);
  assert.equal(new Set(MASTER2728_ROUTES).size, MASTER2728_ROUTES.length);
});

test('unsafe production and autonomous clinical gates remain closed', () => {
  for (const gate of [
    'productionFHIR',
    'productionLISLIMS',
    'productionNationalLabNetwork',
    'productionTerminology',
    'productionReferenceRanges',
    'productionDevicesPOCT',
    'productionCriticalProviderDelivery',
    'productionOCR',
    'productionMedicalTranslation',
    'autonomousDiagnosis',
    'autonomousPrescribing',
    'autonomousDoseChange',
    'autonomousTherapyDiscontinuation',
  ]) assert.equal(MASTER2728_RELEASE_GATES[gate], false, gate);
});

test('pilot routes include laboratory lifecycle, twin, translation, consent and dashboard', () => {
  const joined = MASTER2728_ROUTES.join('\n');
  for (const required of ['dashboard','consent','laboratory/orders','laboratory/specimens','laboratory/accessions','laboratory/results','laboratory/reports','laboratory/trends','digital-twin','translation','documents']) assert.match(joined, new RegExp(required));
});
