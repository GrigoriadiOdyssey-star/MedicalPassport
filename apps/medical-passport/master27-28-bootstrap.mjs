import {attachLabTwinPilot} from './lab-twin-pilot.mjs';
import {attachPilotMvpRuntime} from './pilot-mvp-runtime.mjs';
import {attachLaboratoryProduction} from './laboratory-production.mjs';

export function attachMaster2728(Store){
  attachLabTwinPilot(Store);
  attachPilotMvpRuntime(Store);
  attachLaboratoryProduction(Store);
  return Store;
}
