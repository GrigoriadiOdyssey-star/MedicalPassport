import { attachMaster2728 } from './master27-28-bootstrap.mjs';
import { handleMaster2728Api } from './master27-28-api.mjs';

/**
 * Additive integration seam for MASTER-27/28.
 * Existing server, MASTER-26 APIs and UI remain untouched until this seam is
 * validated by executable integration tests.
 */
export function installMaster2728(Store, store) {
  attachMaster2728(Store);
  store.initLabTwinPilot?.();
  store.initPilotMvpRuntime?.();
  return {
    coverage: store.master2728Coverage?.() ?? null,
    handle(context) {
      return handleMaster2728Api({ ...context, store });
    },
  };
}

export const MASTER2728_ROUTES = Object.freeze([
  'GET /api/mvp/dashboard',
  'GET /api/mvp/onboarding',
  'POST /api/mvp/onboarding',
  'POST /api/mvp/pilot/consent',
  'POST /api/mvp/pilot/event',
  'GET /api/mvp/labs',
  'POST /api/mvp/labs',
  'GET /api/mvp/labs/trend',
  'POST /api/mvp/fhir/labs/import',
  'POST /api/mvp/digital-twin/snapshot',
  'GET /api/mvp/digital-twin/history',
  'POST /api/mvp/translation',
  'POST /api/mvp/documents/:id/metadata',
]);

export const MASTER2728_RELEASE_GATES = Object.freeze({
  productionFHIR: false,
  productionOCR: false,
  productionMedicalTranslation: false,
  autonomousDiagnosis: false,
  autonomousPrescribing: false,
  autonomousDoseChange: false,
  autonomousTherapyDiscontinuation: false,
});
