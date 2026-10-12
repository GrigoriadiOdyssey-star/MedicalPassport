import {HttpError} from './store.mjs';
export function adaptFHIR(resource,patientId){const bad=()=>{throw new HttpError(422,'INVALID_SYNTHETIC_FHIR');};if(!resource||typeof resource!=='object'||typeof resource.id!=='string'||!/^[A-Za-z0-9_-]{1,80}$/.test(resource.id))bad();const subject=resource.subject?.reference??resource.patient?.reference;if(subject!=='Patient/'+patientId)bad();let kind,body;
 switch(resource.resourceType){case 'Condition':kind='condition';body={name:resource.code?.text,notes:'Synthetic FHIR import; unverified source assertion'};break;
 case 'AllergyIntolerance':kind='allergy';body={name:resource.code?.text,reaction:resource.reaction?.[0]?.manifestation?.[0]?.text??'',status:'reported'};break;
 case 'Observation':kind='observation';if(typeof resource.valueQuantity?.value!=='number'||!Number.isFinite(resource.valueQuantity.value)||typeof resource.valueQuantity.unit!=='string')bad();body={name:resource.code?.text,notes:String(resource.valueQuantity.value)+' '+resource.valueQuantity.unit+' (synthetic source)'};break;
 case 'MedicationStatement':kind='medication';body={name:resource.medicationCodeableConcept?.text,notes:'Synthetic reported medication; not a prescription',status:'reported'};break;
 default:bad();}
 if(typeof body.name!=='string'||!body.name.trim()||body.name.length>200)bad();return {kind,body,external_id:resource.resourceType+'/'+resource.id};}
