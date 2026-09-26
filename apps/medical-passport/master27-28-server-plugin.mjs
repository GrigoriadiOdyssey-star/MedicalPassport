import { installMaster2728, MASTER2728_RELEASE_GATES } from './master27-28-integration.mjs';

/**
 * Installs MASTER-27/28 without replacing MASTER-26 routing.
 * The host server calls `handle()` only after authentication/CSRF validation
 * and before its legacy route chain. Unknown routes always fall through.
 */
export function createMaster2728ServerPlugin({ Store, store }) {
  if (!Store || !store) throw Error('MASTER2728_STORE_REQUIRED');
  const integration = installMaster2728(Store, store);
  return Object.freeze({
    name: 'EDHT_MASTER_27_28_MVP',
    releaseGates: MASTER2728_RELEASE_GATES,
    coverage: integration.coverage,
    handle({ req, route, url, body, user, json }) {
      if (!route.startsWith('/api/mvp/')) return false;
      return integration.handle({ req, route, url, body, user, json });
    },
  });
}
