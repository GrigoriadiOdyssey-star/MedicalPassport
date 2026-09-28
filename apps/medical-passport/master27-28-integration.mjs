import { attachMaster2728 } from './master27-28-bootstrap.mjs';
import { handleMaster2728Api } from './master27-28-api.mjs';

/**
 * Additive integration seam for MASTER-27/28.
 * Existing MASTER-26 routes remain the host source of truth; this module owns
 * only namespaced /api/mvp capabilities and falls through for everything else.
 */
export function installMaster2728(Store, store) {
  attachMaster2728(Store);
  store.initLabTwinPilot?.();
  store.initPilotMvpRuntime?.();
  store.seedLaboratoryCatalogue?.();
  return {
    coverage: {
      ...(store.master2728Coverage?.() ?? {}),
      laboratory_completion: 'IMPLEMENTED_WITH_SYNTHETIC_ADAPTERS',
    },
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
  'GET /api/mvp/laboratory/providers',
  'GET /api/mvp/laboratory/catalogue',
  'GET /api/mvp/laboratory/panels',
  'GET /api/mvp/laboratory/orders',
  'POST /api/mvp/laboratory/orders',
  'GET /api/mvp/laboratory/orders/:id',
  'POST /api/mvp/laboratory/orders/:id/action',
  'POST /api/mvp/laboratory/orders/:id/specimens',
  'POST /api/mvp/laboratory/specimens/:id/action',
  'POST /api/mvp/laboratory/accessions',
  'GET /api/mvp/laboratory/results',
  'POST /api/mvp/laboratory/results/import',
  'GET /api/mvp/laboratory/results/:id',
  'POST /api/mvp/laboratory/results/:id/version',
  'GET /api/mvp/laboratory/longitudinal',
  'GET /api/mvp/laboratory/trends/:testId',
  'GET /api/mvp/laboratory/reports',
  'POST /api/mvp/laboratory/reports',
  'GET /api/mvp/laboratory/reports/:id',
  'POST /api/mvp/laboratory/reports/:id/version',
  'GET /api/mvp/laboratory/notifications',
  'POST /api/mvp/laboratory/notifications/:id/acknowledge',
  'GET /api/mvp/laboratory/provider-boundary',
  'POST /api/mvp/laboratory/assistant',
  'POST /api/mvp/digital-twin/snapshot',
  'GET /api/mvp/digital-twin/history',
  'POST /api/mvp/translation',
  'POST /api/mvp/documents/:id/metadata',
]);

export const MASTER2728_RELEASE_GATES = Object.freeze({
  productionFHIR: false,
  productionLISLIMS: false,
  productionNationalLabNetwork: false,
  productionTerminology: false,
  productionReferenceRanges: false,
  productionDevicesPOCT: false,
  productionCriticalProviderDelivery: false,
  productionOCR: false,
  productionMedicalTranslation: false,
  autonomousDiagnosis: false,
  autonomousPrescribing: false,
  autonomousDoseChange: false,
  autonomousTherapyDiscontinuation: false,
});
