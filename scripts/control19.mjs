import fs from 'node:fs';import {fileURLToPath} from 'node:url';import {sha256} from './catalog-lib.mjs';
export const root=fileURLToPath(new URL('..',import.meta.url));const j=p=>JSON.parse(fs.readFileSync(root+'/'+p)),check=process.argv.includes('--check');
const cs=[...j('audit/master-08/active_canonical_records.json').records,...['09','10','11','12','14','15','16','17','18'].flatMap(p=>j('audit/master-'+p+'/canonical_delta.json').records)];
const rows=[
 ['twin-core-state-profiles','CAP-TWIN','Organize patient representation'],
 ['patient-longitudinal-state','CAP-TWIN','Create snapshot'],
 ['physiological-organ-models','CAP-TWIN','Patient-specific physiological state'],
 ['disease-state-models','CAP-TWIN','Disease-state models'],
 ['treatment-response-scenarios','CAP-TWIN','Scenario simulation'],
 ['risk-model-provenance','CAP-TWIN','Model uncertainty'],
 ['generic-vs-patient-anatomy','CAP-TWIN','Generic anatomy always displays'],
 ['visual-timeline-labs-biomarkers-exposure','CAP-TWIN','Provide organ/system highlighting'],
 ['ct-mri-petct-xray-ultrasound-oct','CAP-TWIN','CT/MRI/PET-CT/X-ray/ultrasound/OCT'],
 ['dynamic-organism-pathway-impact','CAP-TWIN','Present possible therapy effects'],
 ['epistemic-states','CAP-TWIN','CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED'],
 ['overlay-input-evidence-uncertainty','CAP-TWIN','Each Overlay contains'],
 ['accessible-dynamic-organism','CAP-TWIN','keyboard equivalents'],
 ['pharmacology-response-interactions-toxicity','CAP-CDS','Provide a longitudinal, evidence-linked assessment'],
 ['pharmacology-complete-patient-context','CAP-CDS','The context snapshot includes age'],
 ['exposure-and-derived-owner-boundaries','CAP-CDS','CAP-MEDICATION owns medication statements'],
 ['precision-assessment-scenario-handoff','CAP-CDS','AssessmentRequest references patient'],
 ['clinician-review-not-prescribing','CAP-CDS','No AI or twin service may issue or change that order'],
 ['knowledge-personal-clinical-ai-pgx','CAP-CDS','Knowledge AI supplies versioned evidence'],
 ['protein-and-functional-genomics','CAP-AI','Support protein structure intelligence'],
 ['source-invalidation-and-pediatric-applicability','CAP-CDS','A new renal result invalidates'],
 ['research-validation-feedback','CAP-RESEARCH','methodological and independent clinical validation'],
 ['research-no-hypothesis-to-fact','CAP-RESEARCH','A Hypothesis cannot enter'],
 ['canonical-ingestion-and-clinical-truth','CAP-INTEROP','The clinical owner revalidates and accepts it'],
 ['typed-records-only-for-twin','CAP-INTEROP','Twin/AI consumers see accepted typed records only']
];
const evidence=path=>({path,sha256:sha256(fs.readFileSync(root+'/'+path))});
export function buildControl(){const capabilities=rows.map(([key,owner,needle])=>{const c=cs.find(c=>c.owner===owner&&c.requirements.some(r=>r.text.includes(needle)));if(!c)throw Error('Missing confirmed architecture anchor '+key);const r=c.requirements.find(r=>r.text.includes(needle));return {key,owner,status:'EXISTING_ARCHITECTURE_REQUIREMENT_CONFIRMED',source_requirement:r.id,text:r.text,evidence:evidence(c.document),anchor:r.id};});return {pass:'MASTER-19',capabilities,capabilities_checked:capabilities.length,new_owners:0,new_modules:0,architecture_status:'REQUESTED_CONCEPTUAL_CAPABILITIES_COVERED',implementation_status:'NOT_IMPLEMENTED_OR_CLINICALLY_VALIDATED',digital_twin_owner:'CAP-TWIN',precision_pharmacology_owner:'CAP-CDS',medication_truth_owner:'CAP-MEDICATION',new_contract:evidence('docs/engineering/twin-pharmacology-control19.md'),remaining_engineering:['Model-specific typed numerical contracts and acceptance thresholds','Runtime authorized handoff, invalidation and replay implementation','Imaging derivation and modality-specific integration','Accessible dynamic-organism UI and export implementation'],external_gates:['Licensed evidence/terminology releases','Qualified model intended-use/calibration/clinical safety validation','Approved imaging derivations','Actual partner and identity/security integrations','Clinical comprehension and human-factors acceptance'],clinical_fact_write_allowed:false,autonomous_prescribing_allowed:false};}
export function labelSafe(v){const states=['OBSERVED','MEASURED','REPORTED','CLINICIAN_ASSESSED','INFERRED','PREDICTED','SIMULATED'];return states.includes(v.epistemic_status)&&v.clinical_fact_write===false&&v.prescribing===false&&Boolean(v.context_version&&v.model_version&&v.evidence_version&&v.provenance_reference)&&(['KNOWN','UNKNOWN'].includes(v.uncertainty_status))&&(['GENERIC_ANATOMY','PATIENT_DERIVED_ANATOMY'].includes(v.anatomy))&&(v.anatomy!=='PATIENT_DERIVED_ANATOMY'||v.imaging_accepted===true&&Boolean(v.study_reference&&v.derivation_reference));}
if(process.argv[1]===fileURLToPath(import.meta.url)){const value=buildControl(),text=JSON.stringify(value,null,2)+'\n',p=root+'/audit/master-19/architecture_control.json';if(check){if(fs.readFileSync(p,'utf8')!==text)throw Error('Control drift');}else fs.writeFileSync(p,text);console.log(JSON.stringify({status:'PASS',capabilities:value.capabilities_checked,new_owners:0}));}
