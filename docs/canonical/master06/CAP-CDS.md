# CORE-CAP-CDS — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: AssessmentRequest, AssessmentResult, EvidenceRelease, ClinicianDisposition. Dependencies: CAP-CDS, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-MEDICATION, CAP-LABORATORY, CAP-AI, CAP-TWIN.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-MENTAL-MEDICATION

Original IDs: 3993, 4842, 5166.

Preserve start/stop/titration, growth/weight, cardiovascular/metabolic/neurological/sleep effects, adherence, response and adverse reactions. No autonomous prescribing/dose changes.

Reconcile exposure → verify indication/context → evaluate approved monitoring rules → clinician review → separately authorized order action.

### PED2-RENAL-MEDICATION

Original IDs: 933, 4566.

933 names immunosuppressants, antihypertensives and diuretics; 4566 adds contrast, multiple nephrotoxins, TDM and missing monitoring.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M04-RHEUM-MED-SAFETY

Original IDs: 4713, 5046.

Medication safety profiles retain pre-treatment screening, glucocorticoid/targeted exposures, organ/infection/vaccination context and clinician-defined treatment holds; alerts cannot execute holds.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M04-STRATEGIC-PHARM

Original IDs: 1175, 1176, 1540, 1606, 1661, 1663, 1664, 1680, 1727, 1841, 1843, 1860, 2399, 2677, 4419.

Precision medicine has broader diagnostic/preventive intent than pharmacology. Keep that as a sibling decision-support profile; retain CYP, OTC/supplements, cross-reactivity tolerance/evidence and no autonomous prescription.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M05-HEM-MED-SAFETY

Original IDs: 4179, 4988, 4997.

Retain anticoagulation and hematology medication monitoring profiles with renal/weight/procedure context, holds/reversal, cytotoxic/immune exposure and infection/cytopenia monitoring. Assessment cannot execute dose, reversal or hold.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M05-ONCO-PRECISION-SAFETY

Original IDs: 4220, 4227, 4228, 5130.

Preserve molecular actionability/evidence, resistance evolution, germline/somatic/CNV/fusion/reclassification context and authorized BSA/protocol/organ/toxicity checks. A molecular association is not treatment authorization.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M06-NEUROSURG-MED-DEVICE-SAFETY

Original IDs: 5097.

Combined medication/device safety is derived clinical assessment, not device control. Retain dose/weight/organ/TDM/allergy and reconciliation plus battery/replacement/monitoring gaps, with source data owned by medication and device services.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

### M06-NEONATAL-PRECISION

Original IDs: 3038, 3276.

Precision nutrition, genomics, respiratory care and individual developmental risk are assessment profiles with explicit missingness/evidence and clinician review, not autonomous therapy or diagnosis.

Freeze authorized context → validate applicability and missingness → retrieve approved evidence → produce bounded assessment → clinician review → separately authorized clinical action.

## Integrated extension decisions

- EXT-PHARM: INTEGRATED at documentation scope. Medication facts and prescriptions remain with their clinical owners; derived drug assessment belongs to CDS. Integrate the missing assessment/context/governance contract rather than duplicate a medicines database.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-CDS-71f6f2b5a5e34ab6"></a>
- **M06-CAP-CDS-71f6f2b5a5e34ab6**: Tracks renal medications.
  Origin: original 933

<a id="M06-CAP-CDS-5ab874e8998bf8aa"></a>
- **M06-CAP-CDS-5ab874e8998bf8aa**: Weight-Based Dosage
  Origin: original 933

<a id="M06-CAP-CDS-f43d0d6fbbfd28ad"></a>
- **M06-CAP-CDS-f43d0d6fbbfd28ad**: Immunosuppressants
  Origin: original 933

<a id="M06-CAP-CDS-05f2196434645850"></a>
- **M06-CAP-CDS-05f2196434645850**: Antihypertensives
  Origin: original 933

<a id="M06-CAP-CDS-c728c449cbcc5568"></a>
- **M06-CAP-CDS-c728c449cbcc5568**: Diuretics
  Origin: original 933

<a id="M06-CAP-CDS-d336e6432ae035b0"></a>
- **M06-CAP-CDS-d336e6432ae035b0**: Supports precision medicine.
  Origin: original 1175, original 1540

<a id="M06-CAP-CDS-0535ebb6ad4f5674"></a>
- **M06-CAP-CDS-0535ebb6ad4f5674**: Analyzes
  Origin: original 1175

<a id="M06-CAP-CDS-aaaf0a34a8eb8286"></a>
- **M06-CAP-CDS-aaaf0a34a8eb8286**: Genetics
  Origin: original 1175

<a id="M06-CAP-CDS-a549916693516568"></a>
- **M06-CAP-CDS-a549916693516568**: Biomarkers
  Origin: original 1175, original 1661

<a id="M06-CAP-CDS-e5788cfd990c2baf"></a>
- **M06-CAP-CDS-e5788cfd990c2baf**: Personalized Therapy
  Origin: original 1175, original 1606, original 1661, original 1680, original 1841, original 1860, original 2399, original 2677, original 3038

<a id="M06-CAP-CDS-2e97dbd0a47d384c"></a>
- **M06-CAP-CDS-2e97dbd0a47d384c**: Optimizes medication using genetic information.
  Origin: original 1176

<a id="M06-CAP-CDS-c1e98ae54914105e"></a>
- **M06-CAP-CDS-c1e98ae54914105e**: Drug Metabolism
  Origin: original 1176, original 1606, original 2399

<a id="M06-CAP-CDS-160612d68ddb15c7"></a>
- **M06-CAP-CDS-160612d68ddb15c7**: Gene Variants
  Origin: original 1176, original 1843

<a id="M06-CAP-CDS-5fbe75bdbaa0e03e"></a>
- **M06-CAP-CDS-5fbe75bdbaa0e03e**: Dose Optimization
  Origin: original 1176, original 1843

<a id="M06-CAP-CDS-01bbec9df504a305"></a>
- **M06-CAP-CDS-01bbec9df504a305**: Includes
  Origin: original 1540

<a id="M06-CAP-CDS-2ebf25614b8225a5"></a>
- **M06-CAP-CDS-2ebf25614b8225a5**: Personalized Diagnostics
  Origin: original 1540

<a id="M06-CAP-CDS-14d45edc67bd9f76"></a>
- **M06-CAP-CDS-14d45edc67bd9f76**: Personalized Treatment
  Origin: original 1540

<a id="M06-CAP-CDS-727b8857575e0c65"></a>
- **M06-CAP-CDS-727b8857575e0c65**: Personalized Prevention
  Origin: original 1540

<a id="M06-CAP-CDS-1572347d7bcf1842"></a>
- **M06-CAP-CDS-1572347d7bcf1842**: Predictive Healthcare
  Origin: original 1540

<a id="M06-CAP-CDS-49542d0b2c1b462e"></a>
- **M06-CAP-CDS-49542d0b2c1b462e**: Predicts drug response using genetic information.
  Origin: original 1606

<a id="M06-CAP-CDS-356804248c951f56"></a>
- **M06-CAP-CDS-356804248c951f56**: Adverse Reactions
  Origin: original 1606, original 4713

<a id="M06-CAP-CDS-a487c1249c2b028d"></a>
- **M06-CAP-CDS-a487c1249c2b028d**: Central AI engine for precision medicine.
  Origin: original 1661, original 1841

<a id="M06-CAP-CDS-cb78077b4bfcb26e"></a>
- **M06-CAP-CDS-cb78077b4bfcb26e**: Genomics
  Origin: original 1661

<a id="M06-CAP-CDS-271ba7d1216b2ba8"></a>
- **M06-CAP-CDS-271ba7d1216b2ba8**: Clinical Decision Support
  Origin: original 1661

<a id="M06-CAP-CDS-cbd0c9a3de8375fc"></a>
- **M06-CAP-CDS-cbd0c9a3de8375fc**: Predicts patient response to medications.
  Origin: original 1663

<a id="M06-CAP-CDS-d82f1f1a5048986c"></a>
- **M06-CAP-CDS-d82f1f1a5048986c**: Drug Efficacy
  Origin: original 1663

<a id="M06-CAP-CDS-b1100d9ac9ca4e0b"></a>
- **M06-CAP-CDS-b1100d9ac9ca4e0b**: Side Effects
  Origin: original 1663

<a id="M06-CAP-CDS-71363a5f0cee92a0"></a>
- **M06-CAP-CDS-71363a5f0cee92a0**: Personalized Dosing
  Origin: original 1663

<a id="M06-CAP-CDS-092249493bbaa473"></a>
- **M06-CAP-CDS-092249493bbaa473**: Optimizes therapy for each patient.
  Origin: original 1664

<a id="M06-CAP-CDS-d0b7386c3d41f975"></a>
- **M06-CAP-CDS-d0b7386c3d41f975**: Treatment Adjustment
  Origin: original 1664

<a id="M06-CAP-CDS-3e9401fa68f0c7d0"></a>
- **M06-CAP-CDS-3e9401fa68f0c7d0**: Combination Therapy
  Origin: original 1664

<a id="M06-CAP-CDS-bd9980ccf6bd0a41"></a>
- **M06-CAP-CDS-bd9980ccf6bd0a41**: Long-term Monitoring
  Origin: original 1664

<a id="M06-CAP-CDS-47fe8ecc3d0f4e24"></a>
- **M06-CAP-CDS-47fe8ecc3d0f4e24**: Unified precision medicine platform.
  Origin: original 1680, original 1860

<a id="M06-CAP-CDS-039896b594f08ddf"></a>
- **M06-CAP-CDS-039896b594f08ddf**: Coordinates
  Origin: original 1680, original 1860

<a id="M06-CAP-CDS-1682c1502ead2cfc"></a>
- **M06-CAP-CDS-1682c1502ead2cfc**: Personalized Diagnosis
  Origin: original 1680

<a id="M06-CAP-CDS-9d0d4a1dfad7755b"></a>
- **M06-CAP-CDS-9d0d4a1dfad7755b**: Prevention
  Origin: original 1680

<a id="M06-CAP-CDS-f5aeff23cb9d4fbe"></a>
- **M06-CAP-CDS-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 1680

<a id="M06-CAP-CDS-ac15977ec8b9c18c"></a>
- **M06-CAP-CDS-ac15977ec8b9c18c**: Clinical Intelligence
  Origin: original 1680

<a id="M06-CAP-CDS-5c1e0e0c055adfff"></a>
- **M06-CAP-CDS-5c1e0e0c055adfff**: Forms the precision medicine layer of the EDHT ecosystem.
  Origin: original 1680

<a id="M06-CAP-CDS-d87482add26e3715"></a>
- **M06-CAP-CDS-d87482add26e3715**: Analyzes medication interactions.
  Origin: original 1727

<a id="M06-CAP-CDS-7b3ac164dbbae1eb"></a>
- **M06-CAP-CDS-7b3ac164dbbae1eb**: Prescription Drugs
  Origin: original 1727

<a id="M06-CAP-CDS-9d4894b9e3ed1881"></a>
- **M06-CAP-CDS-9d4894b9e3ed1881**: OTC
  Origin: original 1727

<a id="M06-CAP-CDS-c6272723fafb11f6"></a>
- **M06-CAP-CDS-c6272723fafb11f6**: Supplements
  Origin: original 1727

<a id="M06-CAP-CDS-cf3206744f372c90"></a>
- **M06-CAP-CDS-cf3206744f372c90**: Genomic Medicine
  Origin: original 1841, original 3038

<a id="M06-CAP-CDS-09166f82482c6be7"></a>
- **M06-CAP-CDS-09166f82482c6be7**: Molecular Medicine
  Origin: original 1841

<a id="M06-CAP-CDS-3fe6094ecd4efe45"></a>
- **M06-CAP-CDS-3fe6094ecd4efe45**: Optimizes medication selection using pharmacogenomics.
  Origin: original 1843

<a id="M06-CAP-CDS-d97497bcd4f598b2"></a>
- **M06-CAP-CDS-d97497bcd4f598b2**: Drug Response
  Origin: original 1843

<a id="M06-CAP-CDS-20a67db2d0ea13cf"></a>
- **M06-CAP-CDS-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 1860

<a id="M06-CAP-CDS-5f95719da1b94796"></a>
- **M06-CAP-CDS-5f95719da1b94796**: Pharmacogenomics
  Origin: original 1860

<a id="M06-CAP-CDS-31c3ac9242b222bf"></a>
- **M06-CAP-CDS-31c3ac9242b222bf**: Multi-Omics
  Origin: original 1860

<a id="M06-CAP-CDS-c400e5e480b22f04"></a>
- **M06-CAP-CDS-c400e5e480b22f04**: Precision Monitoring
  Origin: original 1860

<a id="M06-CAP-CDS-0d4ecb24ca2c40d9"></a>
- **M06-CAP-CDS-0d4ecb24ca2c40d9**: Forms the precision medicine intelligence layer of the EDHT ecosystem.
  Origin: original 1860

<a id="M06-CAP-CDS-bac64e561df30e4e"></a>
- **M06-CAP-CDS-bac64e561df30e4e**: Supports pharmacogenomic analysis.
  Origin: original 2399

<a id="M06-CAP-CDS-7f59c1e0210c3f26"></a>
- **M06-CAP-CDS-7f59c1e0210c3f26**: Medication Safety
  Origin: original 2399, original 2677

<a id="M06-CAP-CDS-b6d923190da0f00c"></a>
- **M06-CAP-CDS-b6d923190da0f00c**: Supports pharmacogenomic decision-making.
  Origin: original 2677

<a id="M06-CAP-CDS-ed2b671263a23ef0"></a>
- **M06-CAP-CDS-ed2b671263a23ef0**: Drug Response Prediction
  Origin: original 2677

<a id="M06-CAP-CDS-d910e774bdd4dfc9"></a>
- **M06-CAP-CDS-d910e774bdd4dfc9**: CYP Gene Analysis
  Origin: original 2677

<a id="M06-CAP-CDS-8aa92a02d49ae955"></a>
- **M06-CAP-CDS-8aa92a02d49ae955**: Supports personalized neonatal medicine.
  Origin: original 3038

<a id="M06-CAP-CDS-dbfcbd6ce6b9ae28"></a>
- **M06-CAP-CDS-dbfcbd6ce6b9ae28**: Precision Nutrition
  Origin: original 3038

<a id="M06-CAP-CDS-4619e26e8744d3a1"></a>
- **M06-CAP-CDS-4619e26e8744d3a1**: Long-term Development Prediction
  Origin: original 3038

<a id="M06-CAP-CDS-0fab32bbfc6c7743"></a>
- **M06-CAP-CDS-0fab32bbfc6c7743**: Supports precision neonatal medicine.
  Origin: original 3276

<a id="M06-CAP-CDS-eba70b0f60a67f58"></a>
- **M06-CAP-CDS-eba70b0f60a67f58**: Genomic Diagnostics
  Origin: original 3276

<a id="M06-CAP-CDS-48a89715b3fddc31"></a>
- **M06-CAP-CDS-48a89715b3fddc31**: Personalized Nutrition
  Origin: original 3276

<a id="M06-CAP-CDS-f55cf90643f81529"></a>
- **M06-CAP-CDS-f55cf90643f81529**: Precision Respiratory Care
  Origin: original 3276

<a id="M06-CAP-CDS-c5ded53975c9f427"></a>
- **M06-CAP-CDS-c5ded53975c9f427**: Individual Risk Prediction
  Origin: original 3276

<a id="M06-CAP-CDS-32987170d2501132"></a>
- **M06-CAP-CDS-32987170d2501132**: Supports clinician-supervised psychiatric medication management.
  Origin: original 3993

<a id="M06-CAP-CDS-ac3166b35f6510af"></a>
- **M06-CAP-CDS-ac3166b35f6510af**: Medication Registry
  Origin: original 3993, original 4566, original 4713, original 4842, original 5046, original 5166

<a id="M06-CAP-CDS-e4d8415f0a46ade5"></a>
- **M06-CAP-CDS-e4d8415f0a46ade5**: Dose Tracking
  Origin: original 3993

<a id="M06-CAP-CDS-ec1f62d8579498be"></a>
- **M06-CAP-CDS-ec1f62d8579498be**: Adverse Effects
  Origin: original 3993, original 4842, original 5097, original 5166

<a id="M06-CAP-CDS-4f4c8a1e1164c973"></a>
- **M06-CAP-CDS-4f4c8a1e1164c973**: Drug Interactions
  Origin: original 3993, original 4227, original 4713, original 4842, original 4988, original 4997, original 5046, original 5097

<a id="M06-CAP-CDS-bf3e89de7b15207a"></a>
- **M06-CAP-CDS-bf3e89de7b15207a**: Response Monitoring
  Origin: original 3993

<a id="M06-CAP-CDS-b596b3fab9cbd244"></a>
- **M06-CAP-CDS-b596b3fab9cbd244**: Treatment History
  Origin: original 3993

<a id="M06-CAP-CDS-8f50ce2495a24715"></a>
- **M06-CAP-CDS-8f50ce2495a24715**: Medication Reconciliation
  Origin: original 3993, original 4566, original 4713, original 4842, original 4988, original 4997, original 5097, original 5166

<a id="M06-CAP-CDS-cffbdc9b19d34d0c"></a>
- **M06-CAP-CDS-cffbdc9b19d34d0c**: All prescribing remains subject to licensed clinician review and local regulations.
  Origin: original 3993

<a id="M06-CAP-CDS-5f010abfd483f445"></a>
- **M06-CAP-CDS-5f010abfd483f445**: Supports clinician-supervised anticoagulation workflows.
  Origin: original 4179

<a id="M06-CAP-CDS-3cfa39200ce0ea10"></a>
- **M06-CAP-CDS-3cfa39200ce0ea10**: Medication
  Origin: original 4179

<a id="M06-CAP-CDS-364a4c7e3ce06ed8"></a>
- **M06-CAP-CDS-364a4c7e3ce06ed8**: Dose
  Origin: original 4179, original 4227, original 4228, original 4988, original 5046, original 5097, original 5166

<a id="M06-CAP-CDS-e1c2a513ace73bfc"></a>
- **M06-CAP-CDS-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4179, original 4566, original 4713, original 4842, original 4988, original 4997, original 5046, original 5166

<a id="M06-CAP-CDS-08588d541c8026a3"></a>
- **M06-CAP-CDS-08588d541c8026a3**: Adherence
  Origin: original 4179, original 4713, original 4842, original 4988

<a id="M06-CAP-CDS-28e5bb56be4a21e1"></a>
- **M06-CAP-CDS-28e5bb56be4a21e1**: Bleeding Events
  Origin: original 4179, original 4988

<a id="M06-CAP-CDS-c96826ab7d6dcc9a"></a>
- **M06-CAP-CDS-c96826ab7d6dcc9a**: Thrombotic Events
  Origin: original 4179, original 4988

<a id="M06-CAP-CDS-228b18d13e8b34f1"></a>
- **M06-CAP-CDS-228b18d13e8b34f1**: Procedures
  Origin: original 4179

<a id="M06-CAP-CDS-4f6eff6e1139baae"></a>
- **M06-CAP-CDS-4f6eff6e1139baae**: Treatment Duration
  Origin: original 4179, original 4988

<a id="M06-CAP-CDS-b5d31e03fd108144"></a>
- **M06-CAP-CDS-b5d31e03fd108144**: Connects molecular tumor characteristics with clinically relevant evidence.
  Origin: original 4220

<a id="M06-CAP-CDS-8ab2c59dea1424cf"></a>
- **M06-CAP-CDS-8ab2c59dea1424cf**: Actionable Alteration Identification
  Origin: original 4220

<a id="M06-CAP-CDS-c5bfe3b655ebd77e"></a>
- **M06-CAP-CDS-c5bfe3b655ebd77e**: Evidence Classification
  Origin: original 4220

<a id="M06-CAP-CDS-50b1c0b690719d12"></a>
- **M06-CAP-CDS-50b1c0b690719d12**: Therapy Association
  Origin: original 4220

<a id="M06-CAP-CDS-b28dd9e6e59f6ada"></a>
- **M06-CAP-CDS-b28dd9e6e59f6ada**: Resistance Markers
  Origin: original 4220

<a id="M06-CAP-CDS-b1301212b696d593"></a>
- **M06-CAP-CDS-b1301212b696d593**: Clinical Trial Matching
  Origin: original 4220

<a id="M06-CAP-CDS-b8ccc007223d8b6d"></a>
- **M06-CAP-CDS-b8ccc007223d8b6d**: Molecular Tumor Board Review
  Origin: original 4220

<a id="M06-CAP-CDS-229176921c1d037a"></a>
- **M06-CAP-CDS-229176921c1d037a**: No treatment recommendation becomes actionable without qualified clinical review.
  Origin: original 4220

<a id="M06-CAP-CDS-a1847f44fc4de4fb"></a>
- **M06-CAP-CDS-a1847f44fc4de4fb**: Provides oncology-specific medication safety controls.
  Origin: original 4227

<a id="M06-CAP-CDS-f62ebcef0792a834"></a>
- **M06-CAP-CDS-f62ebcef0792a834**: Checks
  Origin: original 4227

<a id="M06-CAP-CDS-1b08c9987056fec9"></a>
- **M06-CAP-CDS-1b08c9987056fec9**: Patient Identity
  Origin: original 4227

<a id="M06-CAP-CDS-5f124f9e42776b79"></a>
- **M06-CAP-CDS-5f124f9e42776b79**: Diagnosis
  Origin: original 4227

<a id="M06-CAP-CDS-dbe240b8553e431d"></a>
- **M06-CAP-CDS-dbe240b8553e431d**: Protocol
  Origin: original 4227

<a id="M06-CAP-CDS-88ed5cf9aaf13649"></a>
- **M06-CAP-CDS-88ed5cf9aaf13649**: Body Surface Area
  Origin: original 4227

<a id="M06-CAP-CDS-7d5b66a43b823c22"></a>
- **M06-CAP-CDS-7d5b66a43b823c22**: Organ Function
  Origin: original 4227, original 5046

<a id="M06-CAP-CDS-5ece9f76c54dd0a2"></a>
- **M06-CAP-CDS-5ece9f76c54dd0a2**: Allergies
  Origin: original 4227

<a id="M06-CAP-CDS-66665530d7c05d5e"></a>
- **M06-CAP-CDS-66665530d7c05d5e**: Previous Toxicity
  Origin: original 4227

<a id="M06-CAP-CDS-18de1b4b21afbf71"></a>
- **M06-CAP-CDS-18de1b4b21afbf71**: Requires authorized clinical verification.
  Origin: original 4227

<a id="M06-CAP-CDS-4acb6f0649c82b43"></a>
- **M06-CAP-CDS-4acb6f0649c82b43**: Supports targeted anticancer therapy.
  Origin: original 4228

<a id="M06-CAP-CDS-3bd805ecf0cceabf"></a>
- **M06-CAP-CDS-3bd805ecf0cceabf**: Molecular Target
  Origin: original 4228

<a id="M06-CAP-CDS-e86927e88cd6559e"></a>
- **M06-CAP-CDS-e86927e88cd6559e**: Drug
  Origin: original 4228, original 4419

<a id="M06-CAP-CDS-03ed187199083dfb"></a>
- **M06-CAP-CDS-03ed187199083dfb**: Evidence Level
  Origin: original 4228

<a id="M06-CAP-CDS-2efc2fec2c0c8ee3"></a>
- **M06-CAP-CDS-2efc2fec2c0c8ee3**: Response
  Origin: original 4228, original 5166

<a id="M06-CAP-CDS-d02e2ba426488d02"></a>
- **M06-CAP-CDS-d02e2ba426488d02**: Resistance
  Origin: original 4228

<a id="M06-CAP-CDS-d05d6257a6dc9e74"></a>
- **M06-CAP-CDS-d05d6257a6dc9e74**: Toxicity
  Origin: original 4228

<a id="M06-CAP-CDS-50e0bfc86ab21396"></a>
- **M06-CAP-CDS-50e0bfc86ab21396**: Molecular Evolution
  Origin: original 4228

<a id="M06-CAP-CDS-8e7ee4dd5586f60d"></a>
- **M06-CAP-CDS-8e7ee4dd5586f60d**: Supports clinician-facing assessment of possible medication cross-reactivity.
  Origin: original 4419

<a id="M06-CAP-CDS-32a79aa90b436d09"></a>
- **M06-CAP-CDS-32a79aa90b436d09**: Considers
  Origin: original 4419

<a id="M06-CAP-CDS-5a5f8d8a5ff7582c"></a>
- **M06-CAP-CDS-5a5f8d8a5ff7582c**: Drug Class
  Origin: original 4419

<a id="M06-CAP-CDS-bef091022dd1e95f"></a>
- **M06-CAP-CDS-bef091022dd1e95f**: Molecular Relationships
  Origin: original 4419

<a id="M06-CAP-CDS-bca735897c201d50"></a>
- **M06-CAP-CDS-bca735897c201d50**: Reaction Phenotype
  Origin: original 4419

<a id="M06-CAP-CDS-e1632c3981b86204"></a>
- **M06-CAP-CDS-e1632c3981b86204**: Previous Tolerance
  Origin: original 4419

<a id="M06-CAP-CDS-07e61485659e560b"></a>
- **M06-CAP-CDS-07e61485659e560b**: Diagnostic Results
  Origin: original 4419

<a id="M06-CAP-CDS-a14676d30512ec3f"></a>
- **M06-CAP-CDS-a14676d30512ec3f**: Evidence Source
  Origin: original 4419

<a id="M06-CAP-CDS-7b35a85b3b105005"></a>
- **M06-CAP-CDS-7b35a85b3b105005**: Reduce medication-related renal risk and support kidney-function-aware pharmacological workflows.
  Origin: original 4566

<a id="M06-CAP-CDS-7168530100922e30"></a>
- **M06-CAP-CDS-7168530100922e30**: Kidney Function Context
  Origin: original 4566

<a id="M06-CAP-CDS-d4107a943e85f133"></a>
- **M06-CAP-CDS-d4107a943e85f133**: Renal Dose Context
  Origin: original 4566

<a id="M06-CAP-CDS-70ca50696c892877"></a>
- **M06-CAP-CDS-70ca50696c892877**: Nephrotoxic Medication Detection
  Origin: original 4566

<a id="M06-CAP-CDS-241e49f61676d696"></a>
- **M06-CAP-CDS-241e49f61676d696**: Multiple Nephrotoxin Exposure
  Origin: original 4566

<a id="M06-CAP-CDS-dbeeb1396dbfd3be"></a>
- **M06-CAP-CDS-dbeeb1396dbfd3be**: Drug Interaction Risk
  Origin: original 4566

<a id="M06-CAP-CDS-4c710e79230a5cc3"></a>
- **M06-CAP-CDS-4c710e79230a5cc3**: Contrast Exposure
  Origin: original 4566

<a id="M06-CAP-CDS-b90db32ea6c2cf86"></a>
- **M06-CAP-CDS-b90db32ea6c2cf86**: Therapeutic Drug Monitoring
  Origin: original 4566

<a id="M06-CAP-CDS-9400bef24a19d253"></a>
- **M06-CAP-CDS-9400bef24a19d253**: Previous Adverse Reactions
  Origin: original 4566

<a id="M06-CAP-CDS-e45db3c480ad7a3b"></a>
- **M06-CAP-CDS-e45db3c480ad7a3b**: Exposure Timeline
  Origin: original 4566

<a id="M06-CAP-CDS-d5521c62387fe66a"></a>
- **M06-CAP-CDS-d5521c62387fe66a**: Renal Recovery Monitoring
  Origin: original 4566

<a id="M06-CAP-CDS-8d818fdbc8e69e2a"></a>
- **M06-CAP-CDS-8d818fdbc8e69e2a**: Safety Alerts:
  Origin: original 4566, original 4713

<a id="M06-CAP-CDS-0d6f831247be2907"></a>
- **M06-CAP-CDS-0d6f831247be2907**: Potentially Unsafe Renal Exposure
  Origin: original 4566

<a id="M06-CAP-CDS-77d4f947928693ae"></a>
- **M06-CAP-CDS-77d4f947928693ae**: Kidney Function Deterioration
  Origin: original 4566

<a id="M06-CAP-CDS-7158798beedcaecf"></a>
- **M06-CAP-CDS-7158798beedcaecf**: Missing Required Monitoring
  Origin: original 4566

<a id="M06-CAP-CDS-60fd59b0ea5bc0c9"></a>
- **M06-CAP-CDS-60fd59b0ea5bc0c9**: Clinically Relevant Drug Combination
  Origin: original 4566

<a id="M06-CAP-CDS-be76057148672199"></a>
- **M06-CAP-CDS-be76057148672199**: Clinician-defined High-risk Threshold
  Origin: original 4566

<a id="M06-CAP-CDS-2f27e552d723d07f"></a>
- **M06-CAP-CDS-2f27e552d723d07f**: Integrations:
  Origin: original 4566, original 4713, original 4842, original 4997

<a id="M06-CAP-CDS-7605ce62d32022f4"></a>
- **M06-CAP-CDS-7605ce62d32022f4**: Pharmacy
  Origin: original 4566, original 4713, original 4842, original 4997

<a id="M06-CAP-CDS-35ff4287a628c0a4"></a>
- **M06-CAP-CDS-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 4566, original 4713, original 4842, original 4997

<a id="M06-CAP-CDS-dad1551e6044201a"></a>
- **M06-CAP-CDS-dad1551e6044201a**: Nephrology
  Origin: original 4566

<a id="M06-CAP-CDS-42eadf0ce3414b8c"></a>
- **M06-CAP-CDS-42eadf0ce3414b8c**: Hospital Medication Systems
  Origin: original 4566

<a id="M06-CAP-CDS-9e9dbb804ca8197a"></a>
- **M06-CAP-CDS-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4566, original 4842

<a id="M06-CAP-CDS-b764bd19f6b4c392"></a>
- **M06-CAP-CDS-b764bd19f6b4c392**: AI Safety Layer
  Origin: original 4566

<a id="M06-CAP-CDS-43a67d79860bcb43"></a>
- **M06-CAP-CDS-43a67d79860bcb43**: HIGH
  Origin: original 4566, original 4713, original 4842, original 4988, original 5046, original 5097, original 5166

<a id="M06-CAP-CDS-fd0a97e3cade2b6b"></a>
- **M06-CAP-CDS-fd0a97e3cade2b6b**: Provide medication safety for children receiving immunomodulatory, immunosuppressive or biologic therapies.
  Origin: original 4713

<a id="M06-CAP-CDS-a3534f153cca731c"></a>
- **M06-CAP-CDS-a3534f153cca731c**: Dose History
  Origin: original 4713, original 4842, original 4997

<a id="M06-CAP-CDS-e088e9f3190e8ffa"></a>
- **M06-CAP-CDS-e088e9f3190e8ffa**: Weight-related Dose Context
  Origin: original 4713

<a id="M06-CAP-CDS-bbbece7a847db335"></a>
- **M06-CAP-CDS-bbbece7a847db335**: Immunosuppression
  Origin: original 4713, original 4997

<a id="M06-CAP-CDS-ab85ba4ef3ae1bdb"></a>
- **M06-CAP-CDS-ab85ba4ef3ae1bdb**: Biologic Therapy
  Origin: original 4713, original 4997

<a id="M06-CAP-CDS-73b064fe0671c95c"></a>
- **M06-CAP-CDS-73b064fe0671c95c**: Infection Risk Context
  Origin: original 4713

<a id="M06-CAP-CDS-02aaf2e9c021e422"></a>
- **M06-CAP-CDS-02aaf2e9c021e422**: Organ Function Monitoring
  Origin: original 4713

<a id="M06-CAP-CDS-7ff590adde418414"></a>
- **M06-CAP-CDS-7ff590adde418414**: Allergy Integration
  Origin: original 4713, original 4842, original 5046, original 5097

<a id="M06-CAP-CDS-e9bb1b7104aa25cd"></a>
- **M06-CAP-CDS-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4713, original 4842, original 4997, original 5046, original 5097, original 5130

<a id="M06-CAP-CDS-71b21bb634e4dabd"></a>
- **M06-CAP-CDS-71b21bb634e4dabd**: Missing Monitoring
  Origin: original 4713

<a id="M06-CAP-CDS-4aaa0f7ff61f7444"></a>
- **M06-CAP-CDS-4aaa0f7ff61f7444**: Potential Interaction
  Origin: original 4713

<a id="M06-CAP-CDS-1bfcb54a431042dd"></a>
- **M06-CAP-CDS-1bfcb54a431042dd**: Clinically Relevant Laboratory Change
  Origin: original 4713

<a id="M06-CAP-CDS-de1a7cd9ab83fa38"></a>
- **M06-CAP-CDS-de1a7cd9ab83fa38**: Infection Context
  Origin: original 4713

<a id="M06-CAP-CDS-50b423b6023aff70"></a>
- **M06-CAP-CDS-50b423b6023aff70**: Patient-specific Contraindication Context
  Origin: original 4713

<a id="M06-CAP-CDS-27cde7069fe13381"></a>
- **M06-CAP-CDS-27cde7069fe13381**: Immunology
  Origin: original 4713, original 4997

<a id="M06-CAP-CDS-813d0ab6af854e92"></a>
- **M06-CAP-CDS-813d0ab6af854e92**: Infectious Disease
  Origin: original 4713, original 4997

<a id="M06-CAP-CDS-f5b38128ad4c99ee"></a>
- **M06-CAP-CDS-f5b38128ad4c99ee**: Vaccination Intelligence
  Origin: original 4713

<a id="M06-CAP-CDS-b28f62c0306e79db"></a>
- **M06-CAP-CDS-b28f62c0306e79db**: Provide medication safety and longitudinal monitoring for pediatric psychotropic treatment.
  Origin: original 4842

<a id="M06-CAP-CDS-57b970264c415ddd"></a>
- **M06-CAP-CDS-57b970264c415ddd**: Indication
  Origin: original 4842, original 4988, original 5166

<a id="M06-CAP-CDS-1e644ea5e320c826"></a>
- **M06-CAP-CDS-1e644ea5e320c826**: Weight-related Context
  Origin: original 4842, original 4988, original 4997

<a id="M06-CAP-CDS-fba6567fc0a4b503"></a>
- **M06-CAP-CDS-fba6567fc0a4b503**: Medication Changes
  Origin: original 4842

<a id="M06-CAP-CDS-b2fc3c661ea7890a"></a>
- **M06-CAP-CDS-b2fc3c661ea7890a**: Cardiovascular Monitoring Context
  Origin: original 4842

<a id="M06-CAP-CDS-e028c47d4800d46f"></a>
- **M06-CAP-CDS-e028c47d4800d46f**: Growth and Weight Monitoring
  Origin: original 4842

<a id="M06-CAP-CDS-aac80853be430082"></a>
- **M06-CAP-CDS-aac80853be430082**: Sleep Effects
  Origin: original 4842

<a id="M06-CAP-CDS-c83f275ba75db0d6"></a>
- **M06-CAP-CDS-c83f275ba75db0d6**: Neurological Effects
  Origin: original 4842

<a id="M06-CAP-CDS-bbf2edbbfacad60e"></a>
- **M06-CAP-CDS-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 4842, original 4988, original 4997, original 5046, original 5097

<a id="M06-CAP-CDS-8afb1103fef4b3da"></a>
- **M06-CAP-CDS-8afb1103fef4b3da**: Interaction Alerts
  Origin: original 4842, original 4988, original 5097

<a id="M06-CAP-CDS-7cd673943988cd90"></a>
- **M06-CAP-CDS-7cd673943988cd90**: Duplicate Therapy Detection
  Origin: original 4842

<a id="M06-CAP-CDS-27223e8c6d59171d"></a>
- **M06-CAP-CDS-27223e8c6d59171d**: Missing Monitoring Detection
  Origin: original 4842, original 4988

<a id="M06-CAP-CDS-deee5190fb415521"></a>
- **M06-CAP-CDS-deee5190fb415521**: Patient-specific Risk Context
  Origin: original 4842

<a id="M06-CAP-CDS-f3863b6b6ff6ee2f"></a>
- **M06-CAP-CDS-f3863b6b6ff6ee2f**: Clinician-defined High-risk Alerts
  Origin: original 4842, original 5097

<a id="M06-CAP-CDS-3ab5393bc711e30c"></a>
- **M06-CAP-CDS-3ab5393bc711e30c**: Psychiatry
  Origin: original 4842

<a id="M06-CAP-CDS-e9eb7b780843070a"></a>
- **M06-CAP-CDS-e9eb7b780843070a**: Pediatrics
  Origin: original 4842

<a id="M06-CAP-CDS-7c49afabe60c90d6"></a>
- **M06-CAP-CDS-7c49afabe60c90d6**: Cardiology
  Origin: original 4842

<a id="M06-CAP-CDS-c88ed20b60cc59fe"></a>
- **M06-CAP-CDS-c88ed20b60cc59fe**: Provide medication safety and monitoring for pediatric anticoagulant and antithrombotic therapy.
  Origin: original 4988

<a id="M06-CAP-CDS-f2788f32971c0296"></a>
- **M06-CAP-CDS-f2788f32971c0296**: Anticoagulant Registry
  Origin: original 4988

<a id="M06-CAP-CDS-3deadaadc2aa3a71"></a>
- **M06-CAP-CDS-3deadaadc2aa3a71**: Renal Function Context
  Origin: original 4988

<a id="M06-CAP-CDS-e585810271e4f933"></a>
- **M06-CAP-CDS-e585810271e4f933**: Procedure Planning
  Origin: original 4988

<a id="M06-CAP-CDS-612b9765fe26ea00"></a>
- **M06-CAP-CDS-612b9765fe26ea00**: Medication Holds
  Origin: original 4988

<a id="M06-CAP-CDS-abfb2b490f0a0212"></a>
- **M06-CAP-CDS-abfb2b490f0a0212**: Reversal Context
  Origin: original 4988

<a id="M06-CAP-CDS-abbd232755f33490"></a>
- **M06-CAP-CDS-abbd232755f33490**: Bleeding Risk Alerts
  Origin: original 4988

<a id="M06-CAP-CDS-b2c43836e71340a9"></a>
- **M06-CAP-CDS-b2c43836e71340a9**: Procedure Context
  Origin: original 4988

<a id="M06-CAP-CDS-17ee8da042f1b536"></a>
- **M06-CAP-CDS-17ee8da042f1b536**: Renal Function Alerts
  Origin: original 4988

<a id="M06-CAP-CDS-9cc89a32e86d974d"></a>
- **M06-CAP-CDS-9cc89a32e86d974d**: Clinician-defined High-risk Conditions
  Origin: original 4988

<a id="M06-CAP-CDS-8a6eacc47f904a33"></a>
- **M06-CAP-CDS-8a6eacc47f904a33**: Provide medication safety across complex hematological treatment pathways.
  Origin: original 4997

<a id="M06-CAP-CDS-d21d1210f82c0243"></a>
- **M06-CAP-CDS-d21d1210f82c0243**: Hematology Medication Registry
  Origin: original 4997

<a id="M06-CAP-CDS-00e25f53ed869a7f"></a>
- **M06-CAP-CDS-00e25f53ed869a7f**: Organ Function Context
  Origin: original 4997, original 5097

<a id="M06-CAP-CDS-035e62a6156be697"></a>
- **M06-CAP-CDS-035e62a6156be697**: Cytotoxic Exposure Context
  Origin: original 4997

<a id="M06-CAP-CDS-452795752c263e9e"></a>
- **M06-CAP-CDS-452795752c263e9e**: Immunotherapy Context
  Origin: original 4997

<a id="M06-CAP-CDS-2aa0cf292e6a6d56"></a>
- **M06-CAP-CDS-2aa0cf292e6a6d56**: Infection Risk
  Origin: original 4997, original 5046

<a id="M06-CAP-CDS-2356a36c34e89685"></a>
- **M06-CAP-CDS-2356a36c34e89685**: Allergy
  Origin: original 4997, original 5097, original 5166

<a id="M06-CAP-CDS-f749e8c444dc0a0d"></a>
- **M06-CAP-CDS-f749e8c444dc0a0d**: Adverse Events
  Origin: original 4997, original 5046

<a id="M06-CAP-CDS-a6e5af92c38e4985"></a>
- **M06-CAP-CDS-a6e5af92c38e4985**: Cytopenia Monitoring
  Origin: original 4997

<a id="M06-CAP-CDS-fcbd6c153dfc36a9"></a>
- **M06-CAP-CDS-fcbd6c153dfc36a9**: Organ Toxicity Context
  Origin: original 4997

<a id="M06-CAP-CDS-01b273c2406aec75"></a>
- **M06-CAP-CDS-01b273c2406aec75**: Infection Risk Alerts
  Origin: original 4997

<a id="M06-CAP-CDS-0e81212503c4488e"></a>
- **M06-CAP-CDS-0e81212503c4488e**: Interaction Detection
  Origin: original 4997

<a id="M06-CAP-CDS-834189ebd8320e51"></a>
- **M06-CAP-CDS-834189ebd8320e51**: Required Monitoring
  Origin: original 4997

<a id="M06-CAP-CDS-e2be34a5ef55cd6d"></a>
- **M06-CAP-CDS-e2be34a5ef55cd6d**: Clinician-defined Treatment Holds
  Origin: original 4997, original 5046

<a id="M06-CAP-CDS-d5201c8c85a8f994"></a>
- **M06-CAP-CDS-d5201c8c85a8f994**: Hematology
  Origin: original 4997

<a id="M06-CAP-CDS-6b1b617f18c456db"></a>
- **M06-CAP-CDS-6b1b617f18c456db**: Oncology
  Origin: original 4997

<a id="M06-CAP-CDS-b2dcff83373756ac"></a>
- **M06-CAP-CDS-b2dcff83373756ac**: Provide comprehensive safety monitoring for pediatric rheumatology medications and biologic therapies.
  Origin: original 5046

<a id="M06-CAP-CDS-2cf2b84939a9ee1d"></a>
- **M06-CAP-CDS-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 5046

<a id="M06-CAP-CDS-3388a209063c3833"></a>
- **M06-CAP-CDS-3388a209063c3833**: Weight Context
  Origin: original 5046, original 5097, original 5166

<a id="M06-CAP-CDS-e0af32ed792f0c30"></a>
- **M06-CAP-CDS-e0af32ed792f0c30**: Administration
  Origin: original 5046

<a id="M06-CAP-CDS-1b97c08f2fba9c1d"></a>
- **M06-CAP-CDS-1b97c08f2fba9c1d**: Immunosuppressive Therapy
  Origin: original 5046

<a id="M06-CAP-CDS-3ba92a774d0545d8"></a>
- **M06-CAP-CDS-3ba92a774d0545d8**: Biological Therapy
  Origin: original 5046

<a id="M06-CAP-CDS-9a0b471c59580799"></a>
- **M06-CAP-CDS-9a0b471c59580799**: Targeted Therapy
  Origin: original 5046

<a id="M06-CAP-CDS-6277e3c9160c3eea"></a>
- **M06-CAP-CDS-6277e3c9160c3eea**: Glucocorticoid Exposure
  Origin: original 5046

<a id="M06-CAP-CDS-d4a8183a7dc5a694"></a>
- **M06-CAP-CDS-d4a8183a7dc5a694**: Vaccination Context
  Origin: original 5046

<a id="M06-CAP-CDS-02a06b2a54da4d7f"></a>
- **M06-CAP-CDS-02a06b2a54da4d7f**: Required Screening
  Origin: original 5046

<a id="M06-CAP-CDS-2a51d3c97e356a40"></a>
- **M06-CAP-CDS-2a51d3c97e356a40**: Laboratory Monitoring Gaps
  Origin: original 5046

<a id="M06-CAP-CDS-ce0364398a66dc38"></a>
- **M06-CAP-CDS-ce0364398a66dc38**: Infection-context Alerts
  Origin: original 5046

<a id="M06-CAP-CDS-da9b2f9b136f321b"></a>
- **M06-CAP-CDS-da9b2f9b136f321b**: Vaccination Review
  Origin: original 5046

<a id="M06-CAP-CDS-55fa0ad6e5b94874"></a>
- **M06-CAP-CDS-55fa0ad6e5b94874**: Drug Interaction Detection
  Origin: original 5046

<a id="M06-CAP-CDS-0c7be92f1baec9b5"></a>
- **M06-CAP-CDS-0c7be92f1baec9b5**: Provide unified safety monitoring across neurological medications, implanted devices and complex treatment programs.
  Origin: original 5097

<a id="M06-CAP-CDS-67fa3cf55b30b4b9"></a>
- **M06-CAP-CDS-67fa3cf55b30b4b9**: Neurological Medication Registry
  Origin: original 5097

<a id="M06-CAP-CDS-78c32cb96b486fda"></a>
- **M06-CAP-CDS-78c32cb96b486fda**: Required Laboratory Monitoring
  Origin: original 5097

<a id="M06-CAP-CDS-75fe47f149718ec2"></a>
- **M06-CAP-CDS-75fe47f149718ec2**: Therapeutic Drug Monitoring Context
  Origin: original 5097

<a id="M06-CAP-CDS-3f26563cf5cc4101"></a>
- **M06-CAP-CDS-3f26563cf5cc4101**: Implanted Device Registry
  Origin: original 5097

<a id="M06-CAP-CDS-d5eacb428fd75fa5"></a>
- **M06-CAP-CDS-d5eacb428fd75fa5**: Neurostimulator Context
  Origin: original 5097

<a id="M06-CAP-CDS-f48f7aa3c889b046"></a>
- **M06-CAP-CDS-f48f7aa3c889b046**: Pump Context
  Origin: original 5097

<a id="M06-CAP-CDS-b566884146a996c0"></a>
- **M06-CAP-CDS-b566884146a996c0**: Shunt Context
  Origin: original 5097

<a id="M06-CAP-CDS-a02c3ec8e9149c6b"></a>
- **M06-CAP-CDS-a02c3ec8e9149c6b**: Device Follow-up
  Origin: original 5097

<a id="M06-CAP-CDS-c699a4d97ad27e43"></a>
- **M06-CAP-CDS-c699a4d97ad27e43**: Monitoring Gaps
  Origin: original 5097

<a id="M06-CAP-CDS-240089815391cd95"></a>
- **M06-CAP-CDS-240089815391cd95**: Battery/Replacement Context
  Origin: original 5097

<a id="M06-CAP-CDS-f3d77e387d8df3ae"></a>
- **M06-CAP-CDS-f3d77e387d8df3ae**: Integrate tumor genomics and clinically relevant molecular alterations with precision-treatment pathways.
  Origin: original 5130

<a id="M06-CAP-CDS-9724454961da7c0a"></a>
- **M06-CAP-CDS-9724454961da7c0a**: Tumor Sequencing
  Origin: original 5130

<a id="M06-CAP-CDS-b77b78d6369994e2"></a>
- **M06-CAP-CDS-b77b78d6369994e2**: Germline Context
  Origin: original 5130

<a id="M06-CAP-CDS-d76e333f13d0b264"></a>
- **M06-CAP-CDS-d76e333f13d0b264**: Somatic Variants
  Origin: original 5130

<a id="M06-CAP-CDS-30952c51fd013ca3"></a>
- **M06-CAP-CDS-30952c51fd013ca3**: Copy-number Context
  Origin: original 5130

<a id="M06-CAP-CDS-e83caf3688ca5451"></a>
- **M06-CAP-CDS-e83caf3688ca5451**: Fusion Context
  Origin: original 5130

<a id="M06-CAP-CDS-fa4b1717a0a6c888"></a>
- **M06-CAP-CDS-fa4b1717a0a6c888**: Molecular Driver
  Origin: original 5130

<a id="M06-CAP-CDS-1df603c4fa510a89"></a>
- **M06-CAP-CDS-1df603c4fa510a89**: Actionability Context
  Origin: original 5130

<a id="M06-CAP-CDS-adb7c4076d318e3f"></a>
- **M06-CAP-CDS-adb7c4076d318e3f**: Targeted Therapy Context
  Origin: original 5130

<a id="M06-CAP-CDS-a062d19423104416"></a>
- **M06-CAP-CDS-a062d19423104416**: Molecular Tumor Board
  Origin: original 5130

<a id="M06-CAP-CDS-67b197bf95ce7d1e"></a>
- **M06-CAP-CDS-67b197bf95ce7d1e**: Clinical Trial Context
  Origin: original 5130

<a id="M06-CAP-CDS-f7550694f0c4598f"></a>
- **M06-CAP-CDS-f7550694f0c4598f**: Resistance Evolution Context
  Origin: original 5130

<a id="M06-CAP-CDS-5d155fd87d107b06"></a>
- **M06-CAP-CDS-5d155fd87d107b06**: Repeat Molecular Testing
  Origin: original 5130

<a id="M06-CAP-CDS-f1278e8b8720f679"></a>
- **M06-CAP-CDS-f1278e8b8720f679**: Variant Reclassification
  Origin: original 5130

<a id="M06-CAP-CDS-9029a8bbdb8a6553"></a>
- **M06-CAP-CDS-9029a8bbdb8a6553**: Outcome
  Origin: original 5130

<a id="M06-CAP-CDS-fb7dcbc64a7ed5f8"></a>
- **M06-CAP-CDS-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 5130

<a id="M06-CAP-CDS-64d93db22d692e8c"></a>
- **M06-CAP-CDS-64d93db22d692e8c**: Molecular Data Organization
  Origin: original 5130

<a id="M06-CAP-CDS-acae265865f872aa"></a>
- **M06-CAP-CDS-acae265865f872aa**: Genotype-Phenotype Correlation Support
  Origin: original 5130

<a id="M06-CAP-CDS-c281e216ff6018df"></a>
- **M06-CAP-CDS-c281e216ff6018df**: Treatment Evidence Mapping Context
  Origin: original 5130

<a id="M06-CAP-CDS-2ef96ea4118955c9"></a>
- **M06-CAP-CDS-2ef96ea4118955c9**: Molecular Evolution Timeline
  Origin: original 5130

<a id="M06-CAP-CDS-dc0d643ae54f3d74"></a>
- **M06-CAP-CDS-dc0d643ae54f3d74**: Governance:
  Origin: original 5130

<a id="M06-CAP-CDS-e7ddabcab25e3212"></a>
- **M06-CAP-CDS-e7ddabcab25e3212**: Treatment decisions remain multidisciplinary and clinician-led.
  Origin: original 5130

<a id="M06-CAP-CDS-da134aa809c917f5"></a>
- **M06-CAP-CDS-da134aa809c917f5**: Provide comprehensive longitudinal safety management for psychiatric medication in children and adolescents.
  Origin: original 5166

<a id="M06-CAP-CDS-8e96619c8dca4b93"></a>
- **M06-CAP-CDS-8e96619c8dca4b93**: Functions:
  Origin: original 5166

<a id="M06-CAP-CDS-7e88096e992aa2ad"></a>
- **M06-CAP-CDS-7e88096e992aa2ad**: Start/Stop
  Origin: original 5166

<a id="M06-CAP-CDS-c0db85c701ce0201"></a>
- **M06-CAP-CDS-c0db85c701ce0201**: Titration History
  Origin: original 5166

<a id="M06-CAP-CDS-397d44420a0c1306"></a>
- **M06-CAP-CDS-397d44420a0c1306**: Adherence Context
  Origin: original 5166

<a id="M06-CAP-CDS-912ea524a4675b8d"></a>
- **M06-CAP-CDS-912ea524a4675b8d**: Drug Interaction
  Origin: original 5166

<a id="M06-CAP-CDS-f49a449a67f0af0a"></a>
- **M06-CAP-CDS-f49a449a67f0af0a**: Cardiovascular Context
  Origin: original 5166

<a id="M06-CAP-CDS-9086a5f2dc03ef12"></a>
- **M06-CAP-CDS-9086a5f2dc03ef12**: Metabolic Context
  Origin: original 5166

<a id="M06-CAP-CDS-c8936c103f5b3f9d"></a>
- **M06-CAP-CDS-c8936c103f5b3f9d**: Neurological Context
  Origin: original 5166

<a id="M06-CAP-CDS-a2eff5446866ecc0"></a>
- **M06-CAP-CDS-a2eff5446866ecc0**: Growth Context
  Origin: original 5166

<a id="M06-CAP-CDS-77f048e378962928"></a>
- **M06-CAP-CDS-77f048e378962928**: Automation:
  Origin: original 5166

<a id="M06-CAP-CDS-5b484093e10e2c26"></a>
- **M06-CAP-CDS-5b484093e10e2c26**: Monitoring Due
  Origin: original 5166

<a id="M06-CAP-CDS-2fef40453014cf1f"></a>
- **M06-CAP-CDS-2fef40453014cf1f**: Laboratory Due
  Origin: original 5166

<a id="M06-CAP-CDS-875c72e3ba98fda3"></a>
- **M06-CAP-CDS-875c72e3ba98fda3**: Follow-up Due
  Origin: original 5166

<a id="M06-CAP-CDS-a91399f246eee20f"></a>
- **M06-CAP-CDS-a91399f246eee20f**: Interaction Review
  Origin: original 5166

<a id="M06-CAP-CDS-992b830a3b8da560"></a>
- **M06-CAP-CDS-992b830a3b8da560**: Treatment-plan Review
  Origin: original 5166

<a id="M06-CAP-CDS-2f32360d7cc0a194"></a>
- **M06-CAP-CDS-2f32360d7cc0a194**: Data Model:
  Origin: original 5166

<a id="M06-CAP-CDS-f5fbb19867f94cb8"></a>
- **M06-CAP-CDS-f5fbb19867f94cb8**: MedicationEpisode
  Origin: original 5166

<a id="M06-CAP-CDS-5f1dccb4332fe19e"></a>
- **M06-CAP-CDS-5f1dccb4332fe19e**: DoseChange
  Origin: original 5166

<a id="M06-CAP-CDS-4323e464493ba580"></a>
- **M06-CAP-CDS-4323e464493ba580**: MonitoringRequirement
  Origin: original 5166

<a id="M06-CAP-CDS-8249981d95a46af3"></a>
- **M06-CAP-CDS-8249981d95a46af3**: MonitoringResult
  Origin: original 5166

<a id="M06-CAP-CDS-fd8fa255579fdd5e"></a>
- **M06-CAP-CDS-fd8fa255579fdd5e**: AdverseReaction
  Origin: original 5166

<a id="M06-CAP-CDS-98c9296dbad71813"></a>
- **M06-CAP-CDS-98c9296dbad71813**: ResponseAssessment
  Origin: original 5166

<a id="M06-CAP-CDS-07f8d474b8b4141c"></a>
- **M06-CAP-CDS-07f8d474b8b4141c**: Safety:
  Origin: original 5166

<a id="M06-CAP-CDS-638fbb84b5de08a3"></a>
- **M06-CAP-CDS-638fbb84b5de08a3**: Medication decisions remain clinician-controlled.
  Origin: original 5166

<a id="M06-CAP-CDS-920a1d230724ecf1"></a>
- **M06-CAP-CDS-920a1d230724ecf1**: MVP:
  Origin: original 5166

<a id="M06-CAP-CDS-b8c31d14e4db9c4f"></a>
- **M06-CAP-CDS-b8c31d14e4db9c4f**: # Precision Pharmacology / Drug Intelligence
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-c7a78709127b34f3"></a>
- **M06-CAP-CDS-c7a78709127b34f3**: Revision 2026-09-14 · EXT-PHARM · DRAFT_SPECIFICATION · proposed owner CAP-CDS · shared clinical decision support / pharmacology / personalized therapy · roadmap RESEARCH, outside current P0.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-cc4c4d1a2f407dff"></a>
- **M06-CAP-CDS-cc4c4d1a2f407dff**: ## Purpose, scope and overlap
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-67bc51603a88d942"></a>
- **M06-CAP-CDS-67bc51603a88d942**: Provide a longitudinal, evidence-linked assessment of medication response, interactions, adverse effects, organ toxicity and alternative therapy scenarios. Existing sources already include pharmacogenomics, dose optimization, OTC/supplements, renal monitoring and therapy response: 1176, 1606, 1663, 1664, 1727, 1843, 2399, 2677, 4419, 4566, 5166. See [search dossier](../../../audit/gapfill/new_module_proposals.json) and [pairwise preservation](../../../audit/gapfill/semantic_diffs.json). Their missing common contract justifies an extension of CAP-CDS, not a duplicate source module. Do not build a prescribing engine or claim a simulated response is a measured outcome.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-2d0c800d3f0f7416"></a>
- **M06-CAP-CDS-2d0c800d3f0f7416**: ## Actors, permissions and workflow
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-2c3f5491003e8384"></a>
- **M06-CAP-CDS-2c3f5491003e8384**: A patient supplies reported exposure and symptoms; a treating clinician reconciles source records and reviews recommendations; a pharmacist reviews interactions; a qualified genetics reviewer adjudicates PGx interpretation. Research staff receive separate governed datasets. A service identity may read only the episode and purpose authorized by the consent/access service.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-62ddfadecf0f0a39"></a>
- **M06-CAP-CDS-62ddfadecf0f0a39**: Workflow: reconcile medication history → freeze context → validate applicability and missingness → retrieve evidence → calculate an approved assessment/scenario → expose uncertainty and alternatives → clinician accepts, rejects or requests more evidence. An accepted recommendation still requires a separate authenticated medication order, with its own author and lifecycle. No AI or twin service may issue or change that order.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-b8d6ddbf968ec9dc"></a>
- **M06-CAP-CDS-b8d6ddbf968ec9dc**: ## Inputs and canonical ownership
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-3868440f00a9c053"></a>
- **M06-CAP-CDS-3868440f00a9c053**: CAP-MEDICATION owns medication statements, reconciliation and exposure episodes, with references to prescriptions owned by CAP-PRESCRIPTION, dispensing owned by CAP-PHARMACY and administration owned by CAP-ADMINISTRATION. CAP-DATA owns identity-linked clinical context; CAP-LABORATORY owns results and CAP-CDS owns derived assessments. CAP-AI owns model execution provenance, not medication truth.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-d32a948d75c72678"></a>
- **M06-CAP-CDS-d32a948d75c72678**: The context snapshot includes age and date basis, sex-related clinical context where relevant, height, weight, BSA plus formula/input versions, diagnoses, chronic disease, allergies, prior adverse reactions, current and past medicines, active ingredients, strength/formulation, route, dose units, frequency, start/stop times and adherence uncertainty. Include OTC products and supplements, pregnancy/lactation state, pediatric age/development context, renal/hepatic function with equation and measurement provenance, biomarkers, devices, genome/PGx phenotype, available proteomics/metabolomics, clinical phenotype and observed treatment response. Unknown, not tested, absent and conflicting are separate values. Never infer normal organ function from an absent result.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-bdd7a333bacddf8e"></a>
- **M06-CAP-CDS-bdd7a333bacddf8e**: ## Data and interfaces
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-43372d96506e49d3"></a>
- **M06-CAP-CDS-43372d96506e49d3**: AssessmentRequest references patient, tenant, encounter, purpose, context snapshot/version, exposure IDs, evidence release and intended use. AssessmentResult references input hashes, findings, affected organs/pathways, uncertainty, applicability exclusions, missing data, model/rule version and clinician disposition. ScenarioComparison references alternatives and explicit assumptions; it does not create DoseChange.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-364d028dd3f517ec"></a>
- **M06-CAP-CDS-364d028dd3f517ec**: Proposed internal commands: requestMedicationAssessment, compareTherapyScenarios, recordClinicianReview. These are contract proposals, not implemented API routes. Idempotency key prevents duplicate jobs; contextVersion mismatch returns STALE_CONTEXT; insufficient inputs return INSUFFICIENT_EVIDENCE; authorization failure produces no clinical payload. Events AssessmentProduced, AssessmentInvalidated and ClinicianReviewRecorded contain opaque IDs and version metadata, not full patient records.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-a9cd3cad41cf1c4f"></a>
- **M06-CAP-CDS-a9cd3cad41cf1c4f**: Candidate FHIR R4 mappings: MedicationStatement for reported use, MedicationRequest for an independently authorized order, Observation/DiagnosticReport for results, AllergyIntolerance, Provenance and Consent. Mapping profiles and partner terminology packs require separate validation. Dependencies: CAP-MEDICATION, CAP-LABORATORY, CAP-DATA, CAP-AI, CAP-TWIN, CAP-CONSENT.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-16471d032d9e36a1"></a>
- **M06-CAP-CDS-16471d032d9e36a1**: ## Evidence, AI and twin boundary
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-93599357d8174361"></a>
- **M06-CAP-CDS-93599357d8174361**: Knowledge AI supplies versioned evidence; Clinical AI explains an assessment; Personal AI provides an audience-appropriate explanation without prescribing; a twin consumes approved context to produce separately labelled scenarios. PGx knowledge must retain allele/phenotype interpretation, evidence source, version, jurisdiction and population applicability. CPIC distinguishes guidance on using available genetic results from decisions to order testing. The FDA association table itself does not imply that testing is recommended before prescribing. These are boundaries for the design, not a validated dosing rule set. [CPIC guidelines](https://cpicpgx.org/guidelines/) · [FDA table](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations).
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-4bce74ea5437f5ca"></a>
- **M06-CAP-CDS-4bce74ea5437f5ca**: Longitudinal response observations may support governed evaluation; they must not silently retrain a patient model or convert correlation into drug efficacy.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-785ae1a2bda66fdc"></a>
- **M06-CAP-CDS-785ae1a2bda66fdc**: ## Failure modes, privacy and observability
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-a2bd18338c895303"></a>
- **M06-CAP-CDS-a2bd18338c895303**: Conflicting exposure, stale labs, unsupported age group, missing units, uncertain PGx calls or model outage require explicit abstention or a limited result. Never invent dose values. Restrict genomic/family information, enforce purpose/jurisdiction and record source access, evidence release, reviewer action and invalidation without copying sensitive context into logs. Encryption, retention and revocation inherit the [data contract](../../../audit/gapfill/data_architecture.md).
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-06c83daf4109e9a1"></a>
- **M06-CAP-CDS-06c83daf4109e9a1**: ## Acceptance and unresolved gates
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-5769f5bddcbeb03b"></a>
- **M06-CAP-CDS-5769f5bddcbeb03b**: Tests must reject stale context, ambiguous units, unapproved models and autonomous dose/order mutations. A new renal result invalidates a dependent scenario; clinician review records the exact evidence/context versions. Both OTC and supplement exposures participate in interaction screening. Each finding opens its source and assumptions. Pediatric/BSA/pregnancy cases remain blocked until intended-use validation establishes eligibility. Open gates: validated formulas/thresholds, licensed knowledge packs, clinical evaluation, human factors and clinical governance. No live assessment or medical validation is claimed.
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-4272dff977cf6e63"></a>
- **M06-CAP-CDS-4272dff977cf6e63**: Patient covariates and missingness
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-a2556e6de4080025"></a>
- **M06-CAP-CDS-a2556e6de4080025**: Medication exposure incl OTC/supplements
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-59a6c47a3b33a1b4"></a>
- **M06-CAP-CDS-59a6c47a3b33a1b4**: Renal/hepatic function and pediatric/pregnancy context
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-d316d156c2d3c9ff"></a>
- **M06-CAP-CDS-d316d156c2d3c9ff**: Genomic/PGx phenotype and uncertainty
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-07bd6ca8f0576ec2"></a>
- **M06-CAP-CDS-07bd6ca8f0576ec2**: Organ toxicity and adverse reaction evidence
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-451569efe5f30c88"></a>
- **M06-CAP-CDS-451569efe5f30c88**: Response model/scenario comparison
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-f6fa32fad860566e"></a>
- **M06-CAP-CDS-f6fa32fad860566e**: Clinician review boundary
  Origin: EXT-PHARM

<a id="M06-CAP-CDS-72c8ef48cd9af228"></a>
- **M06-CAP-CDS-72c8ef48cd9af228**: Longitudinal response and governed learning
  Origin: EXT-PHARM

## Preserved source metadata

<a id="M06-CAP-CDS-d62a845fe4d57fe4"></a>
- **M06-CAP-CDS-d62a845fe4d57fe4**: # Pediatric Nephrology Medication Manager

<a id="M06-CAP-CDS-4fbeeb87456accf5"></a>
- **M06-CAP-CDS-4fbeeb87456accf5**: Supports

<a id="M06-CAP-CDS-5ba74d8fcc7b20cc"></a>
- **M06-CAP-CDS-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-CDS-d5232cbd3a326267"></a>
- **M06-CAP-CDS-d5232cbd3a326267**: Documentation

<a id="M06-CAP-CDS-6f33acf3afb37064"></a>
- **M06-CAP-CDS-6f33acf3afb37064**: ---

<a id="M06-CAP-CDS-21d94006fa494f95"></a>
- **M06-CAP-CDS-21d94006fa494f95**: Integrates

<a id="M06-CAP-CDS-6510c5c511a879bc"></a>
- **M06-CAP-CDS-6510c5c511a879bc**: Purpose:

<a id="M06-CAP-CDS-b34f593f0f83a1d1"></a>
- **M06-CAP-CDS-b34f593f0f83a1d1**: Core Functions:

<a id="M06-CAP-CDS-fd85b703c00f8755"></a>
- **M06-CAP-CDS-fd85b703c00f8755**: MVP Relevance:

<a id="M06-CAP-CDS-b88b375a44ccd619"></a>
- **M06-CAP-CDS-b88b375a44ccd619**: Status:

<a id="M06-CAP-CDS-b3604d24a08b400e"></a>
- **M06-CAP-CDS-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
