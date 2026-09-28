import {attachLabTwinPilot} from './lab-twin-pilot.mjs';
import {attachPilotMvpRuntime} from './pilot-mvp-runtime.mjs';
import {attachLaboratoryProduction} from './laboratory-production.mjs';
import {attachLaboratoryExtensions} from './laboratory-extensions.mjs';

export function attachMaster2728(Store){
  attachLabTwinPilot(Store);
  attachPilotMvpRuntime(Store);
  attachLaboratoryProduction(Store);
  attachLaboratoryExtensions(Store);
  const current=Store.prototype.initLabTwinPilot;
  if(current&&!current.master27CatalogueSeed){
    const wrapped=function(...args){
      const result=current.apply(this,args);
      if(typeof this.transaction==='function'){
        this.initLaboratoryExtensions?.();
        this.seedLaboratoryCatalogue?.();
      }
      return result;
    };
    wrapped.master27CatalogueSeed=true;
    Store.prototype.initLabTwinPilot=wrapped;
  }
  return Store;
}
