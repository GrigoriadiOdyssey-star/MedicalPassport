export const engineeringCategories=['API_CONTRACT','EVENT_CONTRACT','DATA_MODEL','AUTHORIZATION','CONSENT','SECURITY','RECOVERY','FAILURE_HANDLING','OBSERVABILITY','TESTING','ACCEPTANCE_CRITERIA','INTEROPERABILITY','MIGRATION','VERSIONING','OTHER_ENGINEERING'];
export const rules=[[/\bapi\b|requests|responses|endpoint|adapter schema/i,'API_CONTRACT'],[/event|outbox|producer|replay/i,'EVENT_CONTRACT'],[/schema|data model|field|cardinality|identity.*binding/i,'DATA_MODEL'],[/authorization|permission|role|binding|recipient|issuer/i,'AUTHORIZATION'],[/consent|grant|withdraw|guardian/i,'CONSENT'],[/security|signing|credential|token|encryption/i,'SECURITY'],[/recovery|restore|rollback|crash/i,'RECOVERY'],[/failure|unavailable|conflict|quarantine|stale/i,'FAILURE_HANDLING'],[/observab|metric|SLO|load|incident/i,'OBSERVABILITY'],[/test|fixture|proof|conformance/i,'TESTING'],[/acceptance|qualified|approval/i,'ACCEPTANCE_CRITERIA'],[/interoperab|FHIR|terminology|partner|PACS/i,'INTEROPERABILITY'],[/migration|reconciliation|import/i,'MIGRATION'],[/version|evolution|compatibility/i,'VERSIONING']];
export const versioningDescription='Executable schema/API/event evolution and compatibility policy remains undefined.';
export const mvpSourceDecisions={
 52:'Patient/source identity, conflict quarantine and storage version boundary; no patient merge inferred from account.',
 74:'Adult allergy presentation must preserve UNKNOWN versus NOT_ASSESSED versus NO_KNOWN_ALLERGY and provenance.',
 82:'Identity, role and account-to-patient binding cannot be inferred from login alone.',
 83:'Audit uses opaque references; no clinical before/after payload or credentials in routine logs.',
 101:'Registration does not establish adult patient identity or current clinician credentials.',
 102:'Login and recovery require independently verified subject/binding and current revocation state.',
 104:'Profile is a permission-filtered projection, never an independent clinical source.',
 110:'Reported, confirmed, absent and unknown allergy states must remain distinct with attributed source.',
 222:'Current identity/role adapter state is mandatory at release; stale binding denies.',
 223:'MFA enrollment/recovery must invalidate affected sessions; no fallback bypass from account role.',
 224:'Encrypted storage/transport does not substitute for current resource-level authorization.',
 225:'Signature integrity and issuer trust do not prove clinical correctness or prescribing authority.',
 226:'Access-attempt receipts do not prove clinician reading or successful network delivery.'
};
// These are questions for qualified review, not clinical answers or approvals.
export const clinicalQuestions={
 'CAP-SECURITY':['Can wrong-patient, stale binding or revoked authorization disclose an allergy view despite fail-closed rules?','Clinical safety officer and privacy/security reviewer','Adversarial patient-binding and revocation scenarios with workflow observation','MVP clinical release blocked until reviewed'],
 'CAP-AUDIT':['Do patients understand that a committed access-attempt receipt does not establish delivery or clinician review?','Clinical safety officer and patient human-factors reviewer','Comprehension study using synthetic attempt/denial/unavailable receipts','MVP clinical release blocked until reviewed'],
 'CAP-PHARMACY':['Can stale stock, partial dispensing or unclear acknowledgement lead to unsafe treatment assumptions?','Clinical pharmacist','Dispense/reservation misuse scenarios with reconciliation evidence','Pharmacy release blocked; outside initial MVP'],
 'CAP-ALLERGY':['Can the display distinguish unknown, not assessed, no known allergy, reported reaction and clinician-confirmed assertion without suppressing a hazard?','Allergist or clinical immunologist with clinical safety reviewer','Blinded interpretation of synthetic state/provenance/freshness cases and correction handling','MVP clinical release blocked until reviewed'],
 'CAP-TELEMEDICINE':['Are lost connections, jurisdiction changes and unconfirmed clinician handoffs presented without implying completed care?','Practicing telemedicine clinician','Observed communication failure and consent/recording simulations','Telemedicine clinical release blocked'],
 'CAP-NOTIFICATIONS':['Can users mistake technical delivery or retry for a staffed clinical response?','Clinical operations and human-factors reviewer','Escalation/acknowledgement failure scenarios','Clinical-alert release blocked'],
 'CAP-DEVICES':['Are device quality, unit/time errors, stale data and unverified configuration visibly distinguished from current clinical measurements?','Biomedical engineer and relevant clinical specialist','Device-specific hazard and wrong-unit/time/source fixtures','Each device intended-use release blocked'],
 'CAP-AI':['Are intended-use, cohort performance, uncertainty, abstention and human disposition sufficient to prevent unsupported clinical decisions?','Intended-use clinical specialist and model validation lead','Prespecified held-out cohort evaluation and unsafe-output challenge set','Clinical AI release blocked; no autonomous treatment'],
 'CAP-CDS':['Does evidence/context freshness and uncertainty prevent dose or treatment advice outside the validated intended use?','Clinical pharmacologist and relevant specialist','Prespecified context/interaction/organ-function/PGx boundary validation','Clinical CDS release blocked; no autonomous prescribing'],
 'CAP-EMERGENCY':['Can users distinguish unavailable dispatch, missing recipient acknowledgement and actual emergency service acceptance?','Emergency physician and local emergency operations lead','Jurisdiction-specific handoff and outage tabletop simulation','Emergency clinical release blocked'],
 'CAP-SPECIALTY':['Does each profile preserve source authority, intended use and specialty-specific hazards under shared orchestration?','Named specialist for each profile','Profile-specific hazard analysis and acceptance cases','Each specialty profile release independently blocked'],
 'CAP-GOVERNANCE':['Does approval evidence bind the actual capability/version/intended use and an accountable qualified reviewer?','Clinical governance lead','Evidence provenance and scope/version mismatch challenge','Clinical release approval mechanism blocked'],
 'CAP-PRESCRIPTION':['Are issuer authority, cancellation, partial fulfilment and medication units safe under the intended eRx jurisdiction?','Prescribing clinician and clinical pharmacist','Signed-order lifecycle and medication-safety scenario review','Prescription release blocked; outside initial MVP'],
 'CAP-CONDITION':['Can reported, provisional and confirmed clinical assertions and corrections be interpreted without upgrading uncertainty?','Clinical informatician and relevant clinician','Assertion-state, terminology and correction review','Condition assertion clinical release blocked']
};
