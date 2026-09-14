export const parent='04b8e805e857746f311710577d58f2c60b8eabc3';
export const domains={
 PULM:{ranges:[[901,920],[3181,3200],[3361,3380],[4451,4500]],note:'Pediatric respiratory profile retains disease phenotype, source measurements and device context. Shared data, imaging, medication, device and emergency owners remain authoritative; AI interpretations require review. Home support is not an automatically staffed emergency service; no autonomous settings or dose changes.'},
 GASTRO:{ranges:[[941,960],[3161,3180],[3281,3300],[3441,3460],[4501,4550]],note:'Pediatric digestive/hepatic/nutrition profile retains symptoms, growth, source laboratory/endoscopic/pathology evidence and treatment context. Separate observations from clinician diagnosis, nutrition prescriptions and derived predictions. Preserve intestinal failure, transplantation, feeding and cross-specialty privacy without autonomous treatment changes.'},
 RHEUM:{ranges:[[4701,4725],[5026,5050]],note:'Rheumatology retains longitudinal phenotype, disease activity, multisystem assessment and source-specific evidence. Laboratory biomarkers alone cannot become a diagnosis or treatment authorization. Shared medication and consent owners control immunosuppression context; preserve joint, ocular, renal, growth, function and vaccination profiles separately.'},
 HEMONC:{ranges:[[961,980],[3121,3140],[3241,3260]],note:'Pediatric hematology/oncology retains diagnostic subtype, specimen/pathology and laboratory provenance, treatment episodes and long-term outcomes. Transfusion compatibility, chemotherapy authorization and research eligibility are separate human-governed workflows. AI trial matching, imaging or risk output does not authorize therapy or establish clinical efficacy.'}
};
export const specific={
 906:'Oximetry requires device identity, signal quality, observation time and acquisition context; thresholds and escalation coverage need approved configuration, not inferred from a generic Alerts label.',
 913:'Weight-based dosage is retained as source intent. Record weight/time/units and independently authorized prescription; do not infer an autonomous dosing engine.',
 3181:'Source includes an unresolved contentReference marker. Retain it as source provenance but do not treat it as a verified citation. Respiratory core is a specialty profile referencing shared owners.',
 3200:'Source contentReference marker is not external evidence. Hub coordinates shared capabilities; it is not a separate clinical truth store.',
 4460:'Action plans require author/version/effective date and school-specific disclosure scope. Display of rescue instructions is separate from generation of a new treatment plan.',
 4461:'Preserve raw curves, FEV1/FVC, reference equation/version, age/height context and test-quality status. Non-comparable or poor-quality tests cannot silently drive a trend.',
 4463:'Pair pre/post measurements with medication, administration time, repeat time and quality; the system records specialist interpretation rather than inventing a response threshold.',
 4472:'CFTR molecular evidence retains classification release, phenotype and family authorization; molecular context alone does not authorize treatment.',
 4476:'CFTR modulator eligibility, product/dose, laboratory monitoring and response remain specialist-supervised with explicit source/evidence versions; no autonomous product substitution.',
 4484:'Preserve invasive airway, prescribed ventilator settings, backup systems, emergency plan and caregiver training. Read-only acquisition cannot silently become remote ventilator control.',
 4485:'Tracheostomy type, caregiver competency and decannulation assessment must survive consolidation; final decannulation remains a clinical decision.',
 4488:'Sleep stages, carbon dioxide and device titration context are distinct from pulse-oximetry alone; preserve specialist report and acquisition settings.',
 4491:'Clinician-defined escalation requires recipient coverage, acknowledgement, fallback and unresolved-alert state; connectivity is not continuous clinical supervision.',
 4492:'An inhaler device event is evidence of device use, not proof of delivered dose or correct inhalation technique; reconcile with source 4493 assessment.',
 4496:'Generated pre-visit content remains a draft and preserves reporter/source attribution until clinician validation.',
 4498:'Emergency passport exposes authorized minimum-necessary current respiratory baseline and device dependency; multilingual access does not bypass identity/consent checks or delay emergency care.',
 4499:'Transfer includes source genetics, device/oxygen/ventilation and emergency plans; add receiving-provider acknowledgement and follow-up rather than count export as completed handover.'
};
