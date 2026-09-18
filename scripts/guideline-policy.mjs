// Pure design-time policies. No polling, retrieval, translation, AI inference or clinical approval service.
export const highRisk=new Set(['DOSE_CHANGE','CONTRAINDICATION_CHANGE','EMERGENCY_CHANGE','PREGNANCY','PEDIATRICS','ONCOLOGY','CRITICAL_CARE']);
const classes=new Set(['EDITORIAL_ONLY','EVIDENCE_UPDATE','DIAGNOSTIC_CHANGE','TREATMENT_CHANGE','MEDICATION_CHANGE','DOSE_CHANGE','CONTRAINDICATION_CHANGE','MONITORING_CHANGE','SCREENING_CHANGE','FOLLOW_UP_CHANGE','REFERRAL_CHANGE','EMERGENCY_CHANGE','LEGAL_OR_POLICY_CHANGE']);
const contexts=new Set(['ADULT_GENERAL','PREGNANCY','PEDIATRICS','ONCOLOGY','CRITICAL_CARE']);
export function assessKnowledgeCandidate(v){
 const required=['source_validated','document_validated','structure_validated','semantic_diff_complete','classification_complete'];
 if(required.some(k=>v[k]!==true)||!['VERIFIED_PRIMARY','VERIFIED_SECONDARY'].includes(v.authority))return 'PENDING_VERIFICATION';
 if(!Array.isArray(v.classes)||!v.classes.length||v.classes.some(x=>!classes.has(x))||!Array.isArray(v.contexts)||!v.contexts.length||v.contexts.some(x=>!contexts.has(x)))return 'PENDING_VERIFICATION';
 const risky=[...v.classes,...v.contexts].some(x=>highRisk.has(x));
 if(risky&&v.qualified_safety_review!==true)return 'PENDING_CLINICAL_REVIEW';
 if(v.governed_knowledge_approval!==true)return 'PENDING_CLINICAL_REVIEW';
 return 'APPROVED_FOR_KNOWLEDGE_LAYER';
}
export function clinicalActivation(v){return v.knowledge_state==='APPROVED_FOR_KNOWLEDGE_LAYER'&&v.independent_rule_release_verified===true&&v.intended_use_validated===true&&v.permission_current===true;}
export function sourceHealth(version,available,checkedAt){return {version:structuredClone(version),availability:available?'AVAILABLE':'SOURCE_TEMPORARILY_UNAVAILABLE',last_attempt:checkedAt,last_verified_at:version.last_verified_at,warning:available?null:'Currentness cannot be reconfirmed; retain known lifecycle status.'};}
export function detectChange(oldDoc,newDoc){if([oldDoc,newDoc].some(d=>!d||typeof d.document_hash!=='string'||!d.document_hash||typeof d.metadata_digest!=='string'||!d.metadata_digest))return 'INVALID_INPUT_REQUIRES_VERIFICATION';if(oldDoc.document_hash===newDoc.document_hash&&oldDoc.metadata_digest===newDoc.metadata_digest)return 'UNCHANGED';if(oldDoc.document_hash===newDoc.document_hash)return 'METADATA_CHANGE_REVIEW_REQUIRED';if(oldDoc.normalized_text_hash&&newDoc.normalized_text_hash&&oldDoc.normalized_text_hash===newDoc.normalized_text_hash)return 'EDITORIAL_CANDIDATE_REQUIRES_VERIFICATION';return 'SEMANTIC_DIFF_REQUIRED';}
export function dependentState({kind,source_version,changed_version,confirmed,change_known=true}){if(!change_known||source_version!==changed_version)return 'UNCHANGED';if(!confirmed)return 'UPDATE_PENDING_VERIFICATION';return kind==='TRANSLATION'?'SOURCE_SUPERSEDED':'OUTDATED_COMPARISON';}
export function explainDifference(reason){return reason&&reason.claim&&Array.isArray(reason.authoritative_citations)&&reason.authoritative_citations.length&&reason.authoritative_citations.every(c=>typeof c==='string'&&c.length>0)&&reason.causal_support_verified===true?{text:reason.claim,citations:reason.authoritative_citations}:{text:'Reason not established from available authoritative sources.',citations:[]};}
export function patientRecheck({consent_current,clinician_permission_current,affected}){return consent_current===true&&clinician_permission_current===true&&affected===true?{task:'GUIDELINE_REVIEW_REQUIRED',clinical_mutations:[]}:{task:null,clinical_mutations:[]};}
export function noticePolicy(classes){return classes.length===1&&classes[0]==='EDITORIAL_ONLY'?{level:'INFO',delivery:'HISTORY_OR_DIGEST'}:{level:'REVIEW_REQUIRED',delivery:'GOVERNED_CLASSIFICATION_REQUIRED'};}
