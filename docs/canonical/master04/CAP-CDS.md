# CORE-CAP-CDS — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

## Integrated extension decisions

- EXT-PHARM: INTEGRATED at documentation scope. Medication facts and prescriptions remain with their clinical owners; derived drug assessment belongs to CDS. Integrate the missing assessment/context/governance contract rather than duplicate a medicines database.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-CDS-71f6f2b5a5e34ab6"></a>
- **M04-CAP-CDS-71f6f2b5a5e34ab6**: Tracks renal medications.
  Origin: original 933

<a id="M04-CAP-CDS-5ab874e8998bf8aa"></a>
- **M04-CAP-CDS-5ab874e8998bf8aa**: Weight-Based Dosage
  Origin: original 933

<a id="M04-CAP-CDS-f43d0d6fbbfd28ad"></a>
- **M04-CAP-CDS-f43d0d6fbbfd28ad**: Immunosuppressants
  Origin: original 933

<a id="M04-CAP-CDS-05f2196434645850"></a>
- **M04-CAP-CDS-05f2196434645850**: Antihypertensives
  Origin: original 933

<a id="M04-CAP-CDS-c728c449cbcc5568"></a>
- **M04-CAP-CDS-c728c449cbcc5568**: Diuretics
  Origin: original 933

<a id="M04-CAP-CDS-d336e6432ae035b0"></a>
- **M04-CAP-CDS-d336e6432ae035b0**: Supports precision medicine.
  Origin: original 1175, original 1540

<a id="M04-CAP-CDS-0535ebb6ad4f5674"></a>
- **M04-CAP-CDS-0535ebb6ad4f5674**: Analyzes
  Origin: original 1175

<a id="M04-CAP-CDS-aaaf0a34a8eb8286"></a>
- **M04-CAP-CDS-aaaf0a34a8eb8286**: Genetics
  Origin: original 1175

<a id="M04-CAP-CDS-a549916693516568"></a>
- **M04-CAP-CDS-a549916693516568**: Biomarkers
  Origin: original 1175, original 1661

<a id="M04-CAP-CDS-e5788cfd990c2baf"></a>
- **M04-CAP-CDS-e5788cfd990c2baf**: Personalized Therapy
  Origin: original 1175, original 1606, original 1661, original 1680, original 1841, original 1860, original 2399, original 2677

<a id="M04-CAP-CDS-2e97dbd0a47d384c"></a>
- **M04-CAP-CDS-2e97dbd0a47d384c**: Optimizes medication using genetic information.
  Origin: original 1176

<a id="M04-CAP-CDS-c1e98ae54914105e"></a>
- **M04-CAP-CDS-c1e98ae54914105e**: Drug Metabolism
  Origin: original 1176, original 1606, original 2399

<a id="M04-CAP-CDS-160612d68ddb15c7"></a>
- **M04-CAP-CDS-160612d68ddb15c7**: Gene Variants
  Origin: original 1176, original 1843

<a id="M04-CAP-CDS-5fbe75bdbaa0e03e"></a>
- **M04-CAP-CDS-5fbe75bdbaa0e03e**: Dose Optimization
  Origin: original 1176, original 1843

<a id="M04-CAP-CDS-01bbec9df504a305"></a>
- **M04-CAP-CDS-01bbec9df504a305**: Includes
  Origin: original 1540

<a id="M04-CAP-CDS-2ebf25614b8225a5"></a>
- **M04-CAP-CDS-2ebf25614b8225a5**: Personalized Diagnostics
  Origin: original 1540

<a id="M04-CAP-CDS-14d45edc67bd9f76"></a>
- **M04-CAP-CDS-14d45edc67bd9f76**: Personalized Treatment
  Origin: original 1540

<a id="M04-CAP-CDS-727b8857575e0c65"></a>
- **M04-CAP-CDS-727b8857575e0c65**: Personalized Prevention
  Origin: original 1540

<a id="M04-CAP-CDS-1572347d7bcf1842"></a>
- **M04-CAP-CDS-1572347d7bcf1842**: Predictive Healthcare
  Origin: original 1540

<a id="M04-CAP-CDS-49542d0b2c1b462e"></a>
- **M04-CAP-CDS-49542d0b2c1b462e**: Predicts drug response using genetic information.
  Origin: original 1606

<a id="M04-CAP-CDS-356804248c951f56"></a>
- **M04-CAP-CDS-356804248c951f56**: Adverse Reactions
  Origin: original 1606, original 4713

<a id="M04-CAP-CDS-a487c1249c2b028d"></a>
- **M04-CAP-CDS-a487c1249c2b028d**: Central AI engine for precision medicine.
  Origin: original 1661, original 1841

<a id="M04-CAP-CDS-cb78077b4bfcb26e"></a>
- **M04-CAP-CDS-cb78077b4bfcb26e**: Genomics
  Origin: original 1661

<a id="M04-CAP-CDS-271ba7d1216b2ba8"></a>
- **M04-CAP-CDS-271ba7d1216b2ba8**: Clinical Decision Support
  Origin: original 1661

<a id="M04-CAP-CDS-cbd0c9a3de8375fc"></a>
- **M04-CAP-CDS-cbd0c9a3de8375fc**: Predicts patient response to medications.
  Origin: original 1663

<a id="M04-CAP-CDS-d82f1f1a5048986c"></a>
- **M04-CAP-CDS-d82f1f1a5048986c**: Drug Efficacy
  Origin: original 1663

<a id="M04-CAP-CDS-b1100d9ac9ca4e0b"></a>
- **M04-CAP-CDS-b1100d9ac9ca4e0b**: Side Effects
  Origin: original 1663

<a id="M04-CAP-CDS-71363a5f0cee92a0"></a>
- **M04-CAP-CDS-71363a5f0cee92a0**: Personalized Dosing
  Origin: original 1663

<a id="M04-CAP-CDS-092249493bbaa473"></a>
- **M04-CAP-CDS-092249493bbaa473**: Optimizes therapy for each patient.
  Origin: original 1664

<a id="M04-CAP-CDS-d0b7386c3d41f975"></a>
- **M04-CAP-CDS-d0b7386c3d41f975**: Treatment Adjustment
  Origin: original 1664

<a id="M04-CAP-CDS-3e9401fa68f0c7d0"></a>
- **M04-CAP-CDS-3e9401fa68f0c7d0**: Combination Therapy
  Origin: original 1664

<a id="M04-CAP-CDS-bd9980ccf6bd0a41"></a>
- **M04-CAP-CDS-bd9980ccf6bd0a41**: Long-term Monitoring
  Origin: original 1664

<a id="M04-CAP-CDS-47fe8ecc3d0f4e24"></a>
- **M04-CAP-CDS-47fe8ecc3d0f4e24**: Unified precision medicine platform.
  Origin: original 1680, original 1860

<a id="M04-CAP-CDS-039896b594f08ddf"></a>
- **M04-CAP-CDS-039896b594f08ddf**: Coordinates
  Origin: original 1680, original 1860

<a id="M04-CAP-CDS-1682c1502ead2cfc"></a>
- **M04-CAP-CDS-1682c1502ead2cfc**: Personalized Diagnosis
  Origin: original 1680

<a id="M04-CAP-CDS-9d0d4a1dfad7755b"></a>
- **M04-CAP-CDS-9d0d4a1dfad7755b**: Prevention
  Origin: original 1680

<a id="M04-CAP-CDS-f5aeff23cb9d4fbe"></a>
- **M04-CAP-CDS-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 1680

<a id="M04-CAP-CDS-ac15977ec8b9c18c"></a>
- **M04-CAP-CDS-ac15977ec8b9c18c**: Clinical Intelligence
  Origin: original 1680

<a id="M04-CAP-CDS-5c1e0e0c055adfff"></a>
- **M04-CAP-CDS-5c1e0e0c055adfff**: Forms the precision medicine layer of the EDHT ecosystem.
  Origin: original 1680

<a id="M04-CAP-CDS-d87482add26e3715"></a>
- **M04-CAP-CDS-d87482add26e3715**: Analyzes medication interactions.
  Origin: original 1727

<a id="M04-CAP-CDS-7b3ac164dbbae1eb"></a>
- **M04-CAP-CDS-7b3ac164dbbae1eb**: Prescription Drugs
  Origin: original 1727

<a id="M04-CAP-CDS-9d4894b9e3ed1881"></a>
- **M04-CAP-CDS-9d4894b9e3ed1881**: OTC
  Origin: original 1727

<a id="M04-CAP-CDS-c6272723fafb11f6"></a>
- **M04-CAP-CDS-c6272723fafb11f6**: Supplements
  Origin: original 1727

<a id="M04-CAP-CDS-cf3206744f372c90"></a>
- **M04-CAP-CDS-cf3206744f372c90**: Genomic Medicine
  Origin: original 1841

<a id="M04-CAP-CDS-09166f82482c6be7"></a>
- **M04-CAP-CDS-09166f82482c6be7**: Molecular Medicine
  Origin: original 1841

<a id="M04-CAP-CDS-3fe6094ecd4efe45"></a>
- **M04-CAP-CDS-3fe6094ecd4efe45**: Optimizes medication selection using pharmacogenomics.
  Origin: original 1843

<a id="M04-CAP-CDS-d97497bcd4f598b2"></a>
- **M04-CAP-CDS-d97497bcd4f598b2**: Drug Response
  Origin: original 1843

<a id="M04-CAP-CDS-20a67db2d0ea13cf"></a>
- **M04-CAP-CDS-20a67db2d0ea13cf**: Molecular Diagnostics
  Origin: original 1860

<a id="M04-CAP-CDS-5f95719da1b94796"></a>
- **M04-CAP-CDS-5f95719da1b94796**: Pharmacogenomics
  Origin: original 1860

<a id="M04-CAP-CDS-31c3ac9242b222bf"></a>
- **M04-CAP-CDS-31c3ac9242b222bf**: Multi-Omics
  Origin: original 1860

<a id="M04-CAP-CDS-c400e5e480b22f04"></a>
- **M04-CAP-CDS-c400e5e480b22f04**: Precision Monitoring
  Origin: original 1860

<a id="M04-CAP-CDS-0d4ecb24ca2c40d9"></a>
- **M04-CAP-CDS-0d4ecb24ca2c40d9**: Forms the precision medicine intelligence layer of the EDHT ecosystem.
  Origin: original 1860

<a id="M04-CAP-CDS-bac64e561df30e4e"></a>
- **M04-CAP-CDS-bac64e561df30e4e**: Supports pharmacogenomic analysis.
  Origin: original 2399

<a id="M04-CAP-CDS-7f59c1e0210c3f26"></a>
- **M04-CAP-CDS-7f59c1e0210c3f26**: Medication Safety
  Origin: original 2399, original 2677

<a id="M04-CAP-CDS-b6d923190da0f00c"></a>
- **M04-CAP-CDS-b6d923190da0f00c**: Supports pharmacogenomic decision-making.
  Origin: original 2677

<a id="M04-CAP-CDS-ed2b671263a23ef0"></a>
- **M04-CAP-CDS-ed2b671263a23ef0**: Drug Response Prediction
  Origin: original 2677

<a id="M04-CAP-CDS-d910e774bdd4dfc9"></a>
- **M04-CAP-CDS-d910e774bdd4dfc9**: CYP Gene Analysis
  Origin: original 2677

<a id="M04-CAP-CDS-32987170d2501132"></a>
- **M04-CAP-CDS-32987170d2501132**: Supports clinician-supervised psychiatric medication management.
  Origin: original 3993

<a id="M04-CAP-CDS-ac3166b35f6510af"></a>
- **M04-CAP-CDS-ac3166b35f6510af**: Medication Registry
  Origin: original 3993, original 4566, original 4713, original 4842, original 5046, original 5166

<a id="M04-CAP-CDS-e4d8415f0a46ade5"></a>
- **M04-CAP-CDS-e4d8415f0a46ade5**: Dose Tracking
  Origin: original 3993

<a id="M04-CAP-CDS-ec1f62d8579498be"></a>
- **M04-CAP-CDS-ec1f62d8579498be**: Adverse Effects
  Origin: original 3993, original 4842, original 5166

<a id="M04-CAP-CDS-4f4c8a1e1164c973"></a>
- **M04-CAP-CDS-4f4c8a1e1164c973**: Drug Interactions
  Origin: original 3993, original 4713, original 4842, original 5046

<a id="M04-CAP-CDS-bf3e89de7b15207a"></a>
- **M04-CAP-CDS-bf3e89de7b15207a**: Response Monitoring
  Origin: original 3993

<a id="M04-CAP-CDS-b596b3fab9cbd244"></a>
- **M04-CAP-CDS-b596b3fab9cbd244**: Treatment History
  Origin: original 3993

<a id="M04-CAP-CDS-8f50ce2495a24715"></a>
- **M04-CAP-CDS-8f50ce2495a24715**: Medication Reconciliation
  Origin: original 3993, original 4566, original 4713, original 4842, original 5166

<a id="M04-CAP-CDS-cffbdc9b19d34d0c"></a>
- **M04-CAP-CDS-cffbdc9b19d34d0c**: All prescribing remains subject to licensed clinician review and local regulations.
  Origin: original 3993

<a id="M04-CAP-CDS-8e7ee4dd5586f60d"></a>
- **M04-CAP-CDS-8e7ee4dd5586f60d**: Supports clinician-facing assessment of possible medication cross-reactivity.
  Origin: original 4419

<a id="M04-CAP-CDS-32a79aa90b436d09"></a>
- **M04-CAP-CDS-32a79aa90b436d09**: Considers
  Origin: original 4419

<a id="M04-CAP-CDS-e86927e88cd6559e"></a>
- **M04-CAP-CDS-e86927e88cd6559e**: Drug
  Origin: original 4419

<a id="M04-CAP-CDS-5a5f8d8a5ff7582c"></a>
- **M04-CAP-CDS-5a5f8d8a5ff7582c**: Drug Class
  Origin: original 4419

<a id="M04-CAP-CDS-bef091022dd1e95f"></a>
- **M04-CAP-CDS-bef091022dd1e95f**: Molecular Relationships
  Origin: original 4419

<a id="M04-CAP-CDS-bca735897c201d50"></a>
- **M04-CAP-CDS-bca735897c201d50**: Reaction Phenotype
  Origin: original 4419

<a id="M04-CAP-CDS-e1632c3981b86204"></a>
- **M04-CAP-CDS-e1632c3981b86204**: Previous Tolerance
  Origin: original 4419

<a id="M04-CAP-CDS-07e61485659e560b"></a>
- **M04-CAP-CDS-07e61485659e560b**: Diagnostic Results
  Origin: original 4419

<a id="M04-CAP-CDS-a14676d30512ec3f"></a>
- **M04-CAP-CDS-a14676d30512ec3f**: Evidence Source
  Origin: original 4419

<a id="M04-CAP-CDS-7b35a85b3b105005"></a>
- **M04-CAP-CDS-7b35a85b3b105005**: Reduce medication-related renal risk and support kidney-function-aware pharmacological workflows.
  Origin: original 4566

<a id="M04-CAP-CDS-7168530100922e30"></a>
- **M04-CAP-CDS-7168530100922e30**: Kidney Function Context
  Origin: original 4566

<a id="M04-CAP-CDS-d4107a943e85f133"></a>
- **M04-CAP-CDS-d4107a943e85f133**: Renal Dose Context
  Origin: original 4566

<a id="M04-CAP-CDS-70ca50696c892877"></a>
- **M04-CAP-CDS-70ca50696c892877**: Nephrotoxic Medication Detection
  Origin: original 4566

<a id="M04-CAP-CDS-241e49f61676d696"></a>
- **M04-CAP-CDS-241e49f61676d696**: Multiple Nephrotoxin Exposure
  Origin: original 4566

<a id="M04-CAP-CDS-dbeeb1396dbfd3be"></a>
- **M04-CAP-CDS-dbeeb1396dbfd3be**: Drug Interaction Risk
  Origin: original 4566

<a id="M04-CAP-CDS-e1c2a513ace73bfc"></a>
- **M04-CAP-CDS-e1c2a513ace73bfc**: Laboratory Monitoring
  Origin: original 4566, original 4713, original 4842, original 5046, original 5166

<a id="M04-CAP-CDS-4c710e79230a5cc3"></a>
- **M04-CAP-CDS-4c710e79230a5cc3**: Contrast Exposure
  Origin: original 4566

<a id="M04-CAP-CDS-b90db32ea6c2cf86"></a>
- **M04-CAP-CDS-b90db32ea6c2cf86**: Therapeutic Drug Monitoring
  Origin: original 4566

<a id="M04-CAP-CDS-9400bef24a19d253"></a>
- **M04-CAP-CDS-9400bef24a19d253**: Previous Adverse Reactions
  Origin: original 4566

<a id="M04-CAP-CDS-e45db3c480ad7a3b"></a>
- **M04-CAP-CDS-e45db3c480ad7a3b**: Exposure Timeline
  Origin: original 4566

<a id="M04-CAP-CDS-d5521c62387fe66a"></a>
- **M04-CAP-CDS-d5521c62387fe66a**: Renal Recovery Monitoring
  Origin: original 4566

<a id="M04-CAP-CDS-8d818fdbc8e69e2a"></a>
- **M04-CAP-CDS-8d818fdbc8e69e2a**: Safety Alerts:
  Origin: original 4566, original 4713

<a id="M04-CAP-CDS-0d6f831247be2907"></a>
- **M04-CAP-CDS-0d6f831247be2907**: Potentially Unsafe Renal Exposure
  Origin: original 4566

<a id="M04-CAP-CDS-77d4f947928693ae"></a>
- **M04-CAP-CDS-77d4f947928693ae**: Kidney Function Deterioration
  Origin: original 4566

<a id="M04-CAP-CDS-7158798beedcaecf"></a>
- **M04-CAP-CDS-7158798beedcaecf**: Missing Required Monitoring
  Origin: original 4566

<a id="M04-CAP-CDS-60fd59b0ea5bc0c9"></a>
- **M04-CAP-CDS-60fd59b0ea5bc0c9**: Clinically Relevant Drug Combination
  Origin: original 4566

<a id="M04-CAP-CDS-be76057148672199"></a>
- **M04-CAP-CDS-be76057148672199**: Clinician-defined High-risk Threshold
  Origin: original 4566

<a id="M04-CAP-CDS-2f27e552d723d07f"></a>
- **M04-CAP-CDS-2f27e552d723d07f**: Integrations:
  Origin: original 4566, original 4713, original 4842

<a id="M04-CAP-CDS-7605ce62d32022f4"></a>
- **M04-CAP-CDS-7605ce62d32022f4**: Pharmacy
  Origin: original 4566, original 4713, original 4842

<a id="M04-CAP-CDS-35ff4287a628c0a4"></a>
- **M04-CAP-CDS-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 4566, original 4713, original 4842

<a id="M04-CAP-CDS-dad1551e6044201a"></a>
- **M04-CAP-CDS-dad1551e6044201a**: Nephrology
  Origin: original 4566

<a id="M04-CAP-CDS-42eadf0ce3414b8c"></a>
- **M04-CAP-CDS-42eadf0ce3414b8c**: Hospital Medication Systems
  Origin: original 4566

<a id="M04-CAP-CDS-9e9dbb804ca8197a"></a>
- **M04-CAP-CDS-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4566, original 4842

<a id="M04-CAP-CDS-b764bd19f6b4c392"></a>
- **M04-CAP-CDS-b764bd19f6b4c392**: AI Safety Layer
  Origin: original 4566

<a id="M04-CAP-CDS-43a67d79860bcb43"></a>
- **M04-CAP-CDS-43a67d79860bcb43**: HIGH
  Origin: original 4566, original 4713, original 4842, original 5046, original 5166

<a id="M04-CAP-CDS-fd0a97e3cade2b6b"></a>
- **M04-CAP-CDS-fd0a97e3cade2b6b**: Provide medication safety for children receiving immunomodulatory, immunosuppressive or biologic therapies.
  Origin: original 4713

<a id="M04-CAP-CDS-a3534f153cca731c"></a>
- **M04-CAP-CDS-a3534f153cca731c**: Dose History
  Origin: original 4713, original 4842

<a id="M04-CAP-CDS-e088e9f3190e8ffa"></a>
- **M04-CAP-CDS-e088e9f3190e8ffa**: Weight-related Dose Context
  Origin: original 4713

<a id="M04-CAP-CDS-bbbece7a847db335"></a>
- **M04-CAP-CDS-bbbece7a847db335**: Immunosuppression
  Origin: original 4713

<a id="M04-CAP-CDS-ab85ba4ef3ae1bdb"></a>
- **M04-CAP-CDS-ab85ba4ef3ae1bdb**: Biologic Therapy
  Origin: original 4713

<a id="M04-CAP-CDS-73b064fe0671c95c"></a>
- **M04-CAP-CDS-73b064fe0671c95c**: Infection Risk Context
  Origin: original 4713

<a id="M04-CAP-CDS-02aaf2e9c021e422"></a>
- **M04-CAP-CDS-02aaf2e9c021e422**: Organ Function Monitoring
  Origin: original 4713

<a id="M04-CAP-CDS-7ff590adde418414"></a>
- **M04-CAP-CDS-7ff590adde418414**: Allergy Integration
  Origin: original 4713, original 4842, original 5046

<a id="M04-CAP-CDS-e9bb1b7104aa25cd"></a>
- **M04-CAP-CDS-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4713, original 4842, original 5046

<a id="M04-CAP-CDS-08588d541c8026a3"></a>
- **M04-CAP-CDS-08588d541c8026a3**: Adherence
  Origin: original 4713, original 4842

<a id="M04-CAP-CDS-71b21bb634e4dabd"></a>
- **M04-CAP-CDS-71b21bb634e4dabd**: Missing Monitoring
  Origin: original 4713

<a id="M04-CAP-CDS-4aaa0f7ff61f7444"></a>
- **M04-CAP-CDS-4aaa0f7ff61f7444**: Potential Interaction
  Origin: original 4713

<a id="M04-CAP-CDS-1bfcb54a431042dd"></a>
- **M04-CAP-CDS-1bfcb54a431042dd**: Clinically Relevant Laboratory Change
  Origin: original 4713

<a id="M04-CAP-CDS-de1a7cd9ab83fa38"></a>
- **M04-CAP-CDS-de1a7cd9ab83fa38**: Infection Context
  Origin: original 4713

<a id="M04-CAP-CDS-50b423b6023aff70"></a>
- **M04-CAP-CDS-50b423b6023aff70**: Patient-specific Contraindication Context
  Origin: original 4713

<a id="M04-CAP-CDS-27cde7069fe13381"></a>
- **M04-CAP-CDS-27cde7069fe13381**: Immunology
  Origin: original 4713

<a id="M04-CAP-CDS-813d0ab6af854e92"></a>
- **M04-CAP-CDS-813d0ab6af854e92**: Infectious Disease
  Origin: original 4713

<a id="M04-CAP-CDS-f5b38128ad4c99ee"></a>
- **M04-CAP-CDS-f5b38128ad4c99ee**: Vaccination Intelligence
  Origin: original 4713

<a id="M04-CAP-CDS-b28f62c0306e79db"></a>
- **M04-CAP-CDS-b28f62c0306e79db**: Provide medication safety and longitudinal monitoring for pediatric psychotropic treatment.
  Origin: original 4842

<a id="M04-CAP-CDS-57b970264c415ddd"></a>
- **M04-CAP-CDS-57b970264c415ddd**: Indication
  Origin: original 4842, original 5166

<a id="M04-CAP-CDS-1e644ea5e320c826"></a>
- **M04-CAP-CDS-1e644ea5e320c826**: Weight-related Context
  Origin: original 4842

<a id="M04-CAP-CDS-fba6567fc0a4b503"></a>
- **M04-CAP-CDS-fba6567fc0a4b503**: Medication Changes
  Origin: original 4842

<a id="M04-CAP-CDS-b2fc3c661ea7890a"></a>
- **M04-CAP-CDS-b2fc3c661ea7890a**: Cardiovascular Monitoring Context
  Origin: original 4842

<a id="M04-CAP-CDS-e028c47d4800d46f"></a>
- **M04-CAP-CDS-e028c47d4800d46f**: Growth and Weight Monitoring
  Origin: original 4842

<a id="M04-CAP-CDS-aac80853be430082"></a>
- **M04-CAP-CDS-aac80853be430082**: Sleep Effects
  Origin: original 4842

<a id="M04-CAP-CDS-c83f275ba75db0d6"></a>
- **M04-CAP-CDS-c83f275ba75db0d6**: Neurological Effects
  Origin: original 4842

<a id="M04-CAP-CDS-bbf2edbbfacad60e"></a>
- **M04-CAP-CDS-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 4842, original 5046

<a id="M04-CAP-CDS-8afb1103fef4b3da"></a>
- **M04-CAP-CDS-8afb1103fef4b3da**: Interaction Alerts
  Origin: original 4842

<a id="M04-CAP-CDS-7cd673943988cd90"></a>
- **M04-CAP-CDS-7cd673943988cd90**: Duplicate Therapy Detection
  Origin: original 4842

<a id="M04-CAP-CDS-27223e8c6d59171d"></a>
- **M04-CAP-CDS-27223e8c6d59171d**: Missing Monitoring Detection
  Origin: original 4842

<a id="M04-CAP-CDS-deee5190fb415521"></a>
- **M04-CAP-CDS-deee5190fb415521**: Patient-specific Risk Context
  Origin: original 4842

<a id="M04-CAP-CDS-f3863b6b6ff6ee2f"></a>
- **M04-CAP-CDS-f3863b6b6ff6ee2f**: Clinician-defined High-risk Alerts
  Origin: original 4842

<a id="M04-CAP-CDS-3ab5393bc711e30c"></a>
- **M04-CAP-CDS-3ab5393bc711e30c**: Psychiatry
  Origin: original 4842

<a id="M04-CAP-CDS-e9eb7b780843070a"></a>
- **M04-CAP-CDS-e9eb7b780843070a**: Pediatrics
  Origin: original 4842

<a id="M04-CAP-CDS-7c49afabe60c90d6"></a>
- **M04-CAP-CDS-7c49afabe60c90d6**: Cardiology
  Origin: original 4842

<a id="M04-CAP-CDS-b2dcff83373756ac"></a>
- **M04-CAP-CDS-b2dcff83373756ac**: Provide comprehensive safety monitoring for pediatric rheumatology medications and biologic therapies.
  Origin: original 5046

<a id="M04-CAP-CDS-2cf2b84939a9ee1d"></a>
- **M04-CAP-CDS-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 5046

<a id="M04-CAP-CDS-364a4c7e3ce06ed8"></a>
- **M04-CAP-CDS-364a4c7e3ce06ed8**: Dose
  Origin: original 5046, original 5166

<a id="M04-CAP-CDS-3388a209063c3833"></a>
- **M04-CAP-CDS-3388a209063c3833**: Weight Context
  Origin: original 5046, original 5166

<a id="M04-CAP-CDS-e0af32ed792f0c30"></a>
- **M04-CAP-CDS-e0af32ed792f0c30**: Administration
  Origin: original 5046

<a id="M04-CAP-CDS-1b97c08f2fba9c1d"></a>
- **M04-CAP-CDS-1b97c08f2fba9c1d**: Immunosuppressive Therapy
  Origin: original 5046

<a id="M04-CAP-CDS-3ba92a774d0545d8"></a>
- **M04-CAP-CDS-3ba92a774d0545d8**: Biological Therapy
  Origin: original 5046

<a id="M04-CAP-CDS-9a0b471c59580799"></a>
- **M04-CAP-CDS-9a0b471c59580799**: Targeted Therapy
  Origin: original 5046

<a id="M04-CAP-CDS-6277e3c9160c3eea"></a>
- **M04-CAP-CDS-6277e3c9160c3eea**: Glucocorticoid Exposure
  Origin: original 5046

<a id="M04-CAP-CDS-7d5b66a43b823c22"></a>
- **M04-CAP-CDS-7d5b66a43b823c22**: Organ Function
  Origin: original 5046

<a id="M04-CAP-CDS-2aa0cf292e6a6d56"></a>
- **M04-CAP-CDS-2aa0cf292e6a6d56**: Infection Risk
  Origin: original 5046

<a id="M04-CAP-CDS-d4a8183a7dc5a694"></a>
- **M04-CAP-CDS-d4a8183a7dc5a694**: Vaccination Context
  Origin: original 5046

<a id="M04-CAP-CDS-f749e8c444dc0a0d"></a>
- **M04-CAP-CDS-f749e8c444dc0a0d**: Adverse Events
  Origin: original 5046

<a id="M04-CAP-CDS-02a06b2a54da4d7f"></a>
- **M04-CAP-CDS-02a06b2a54da4d7f**: Required Screening
  Origin: original 5046

<a id="M04-CAP-CDS-2a51d3c97e356a40"></a>
- **M04-CAP-CDS-2a51d3c97e356a40**: Laboratory Monitoring Gaps
  Origin: original 5046

<a id="M04-CAP-CDS-ce0364398a66dc38"></a>
- **M04-CAP-CDS-ce0364398a66dc38**: Infection-context Alerts
  Origin: original 5046

<a id="M04-CAP-CDS-da9b2f9b136f321b"></a>
- **M04-CAP-CDS-da9b2f9b136f321b**: Vaccination Review
  Origin: original 5046

<a id="M04-CAP-CDS-55fa0ad6e5b94874"></a>
- **M04-CAP-CDS-55fa0ad6e5b94874**: Drug Interaction Detection
  Origin: original 5046

<a id="M04-CAP-CDS-e2be34a5ef55cd6d"></a>
- **M04-CAP-CDS-e2be34a5ef55cd6d**: Clinician-defined Treatment Holds
  Origin: original 5046

<a id="M04-CAP-CDS-da134aa809c917f5"></a>
- **M04-CAP-CDS-da134aa809c917f5**: Provide comprehensive longitudinal safety management for psychiatric medication in children and adolescents.
  Origin: original 5166

<a id="M04-CAP-CDS-8e96619c8dca4b93"></a>
- **M04-CAP-CDS-8e96619c8dca4b93**: Functions:
  Origin: original 5166

<a id="M04-CAP-CDS-7e88096e992aa2ad"></a>
- **M04-CAP-CDS-7e88096e992aa2ad**: Start/Stop
  Origin: original 5166

<a id="M04-CAP-CDS-c0db85c701ce0201"></a>
- **M04-CAP-CDS-c0db85c701ce0201**: Titration History
  Origin: original 5166

<a id="M04-CAP-CDS-397d44420a0c1306"></a>
- **M04-CAP-CDS-397d44420a0c1306**: Adherence Context
  Origin: original 5166

<a id="M04-CAP-CDS-2efc2fec2c0c8ee3"></a>
- **M04-CAP-CDS-2efc2fec2c0c8ee3**: Response
  Origin: original 5166

<a id="M04-CAP-CDS-2356a36c34e89685"></a>
- **M04-CAP-CDS-2356a36c34e89685**: Allergy
  Origin: original 5166

<a id="M04-CAP-CDS-912ea524a4675b8d"></a>
- **M04-CAP-CDS-912ea524a4675b8d**: Drug Interaction
  Origin: original 5166

<a id="M04-CAP-CDS-f49a449a67f0af0a"></a>
- **M04-CAP-CDS-f49a449a67f0af0a**: Cardiovascular Context
  Origin: original 5166

<a id="M04-CAP-CDS-9086a5f2dc03ef12"></a>
- **M04-CAP-CDS-9086a5f2dc03ef12**: Metabolic Context
  Origin: original 5166

<a id="M04-CAP-CDS-c8936c103f5b3f9d"></a>
- **M04-CAP-CDS-c8936c103f5b3f9d**: Neurological Context
  Origin: original 5166

<a id="M04-CAP-CDS-a2eff5446866ecc0"></a>
- **M04-CAP-CDS-a2eff5446866ecc0**: Growth Context
  Origin: original 5166

<a id="M04-CAP-CDS-77f048e378962928"></a>
- **M04-CAP-CDS-77f048e378962928**: Automation:
  Origin: original 5166

<a id="M04-CAP-CDS-5b484093e10e2c26"></a>
- **M04-CAP-CDS-5b484093e10e2c26**: Monitoring Due
  Origin: original 5166

<a id="M04-CAP-CDS-2fef40453014cf1f"></a>
- **M04-CAP-CDS-2fef40453014cf1f**: Laboratory Due
  Origin: original 5166

<a id="M04-CAP-CDS-875c72e3ba98fda3"></a>
- **M04-CAP-CDS-875c72e3ba98fda3**: Follow-up Due
  Origin: original 5166

<a id="M04-CAP-CDS-a91399f246eee20f"></a>
- **M04-CAP-CDS-a91399f246eee20f**: Interaction Review
  Origin: original 5166

<a id="M04-CAP-CDS-992b830a3b8da560"></a>
- **M04-CAP-CDS-992b830a3b8da560**: Treatment-plan Review
  Origin: original 5166

<a id="M04-CAP-CDS-2f32360d7cc0a194"></a>
- **M04-CAP-CDS-2f32360d7cc0a194**: Data Model:
  Origin: original 5166

<a id="M04-CAP-CDS-f5fbb19867f94cb8"></a>
- **M04-CAP-CDS-f5fbb19867f94cb8**: MedicationEpisode
  Origin: original 5166

<a id="M04-CAP-CDS-5f1dccb4332fe19e"></a>
- **M04-CAP-CDS-5f1dccb4332fe19e**: DoseChange
  Origin: original 5166

<a id="M04-CAP-CDS-4323e464493ba580"></a>
- **M04-CAP-CDS-4323e464493ba580**: MonitoringRequirement
  Origin: original 5166

<a id="M04-CAP-CDS-8249981d95a46af3"></a>
- **M04-CAP-CDS-8249981d95a46af3**: MonitoringResult
  Origin: original 5166

<a id="M04-CAP-CDS-fd8fa255579fdd5e"></a>
- **M04-CAP-CDS-fd8fa255579fdd5e**: AdverseReaction
  Origin: original 5166

<a id="M04-CAP-CDS-98c9296dbad71813"></a>
- **M04-CAP-CDS-98c9296dbad71813**: ResponseAssessment
  Origin: original 5166

<a id="M04-CAP-CDS-07f8d474b8b4141c"></a>
- **M04-CAP-CDS-07f8d474b8b4141c**: Safety:
  Origin: original 5166

<a id="M04-CAP-CDS-638fbb84b5de08a3"></a>
- **M04-CAP-CDS-638fbb84b5de08a3**: Medication decisions remain clinician-controlled.
  Origin: original 5166

<a id="M04-CAP-CDS-920a1d230724ecf1"></a>
- **M04-CAP-CDS-920a1d230724ecf1**: MVP:
  Origin: original 5166

<a id="M04-CAP-CDS-b8c31d14e4db9c4f"></a>
- **M04-CAP-CDS-b8c31d14e4db9c4f**: # Precision Pharmacology / Drug Intelligence
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-c7a78709127b34f3"></a>
- **M04-CAP-CDS-c7a78709127b34f3**: Revision 2026-09-14 · EXT-PHARM · DRAFT_SPECIFICATION · proposed owner CAP-CDS · shared clinical decision support / pharmacology / personalized therapy · roadmap RESEARCH, outside current P0.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-cc4c4d1a2f407dff"></a>
- **M04-CAP-CDS-cc4c4d1a2f407dff**: ## Purpose, scope and overlap
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-67bc51603a88d942"></a>
- **M04-CAP-CDS-67bc51603a88d942**: Provide a longitudinal, evidence-linked assessment of medication response, interactions, adverse effects, organ toxicity and alternative therapy scenarios. Existing sources already include pharmacogenomics, dose optimization, OTC/supplements, renal monitoring and therapy response: 1176, 1606, 1663, 1664, 1727, 1843, 2399, 2677, 4419, 4566, 5166. See [search dossier](../../../audit/gapfill/new_module_proposals.json) and [pairwise preservation](../../../audit/gapfill/semantic_diffs.json). Their missing common contract justifies an extension of CAP-CDS, not a duplicate source module. Do not build a prescribing engine or claim a simulated response is a measured outcome.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-2d0c800d3f0f7416"></a>
- **M04-CAP-CDS-2d0c800d3f0f7416**: ## Actors, permissions and workflow
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-2c3f5491003e8384"></a>
- **M04-CAP-CDS-2c3f5491003e8384**: A patient supplies reported exposure and symptoms; a treating clinician reconciles source records and reviews recommendations; a pharmacist reviews interactions; a qualified genetics reviewer adjudicates PGx interpretation. Research staff receive separate governed datasets. A service identity may read only the episode and purpose authorized by the consent/access service.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-62ddfadecf0f0a39"></a>
- **M04-CAP-CDS-62ddfadecf0f0a39**: Workflow: reconcile medication history → freeze context → validate applicability and missingness → retrieve evidence → calculate an approved assessment/scenario → expose uncertainty and alternatives → clinician accepts, rejects or requests more evidence. An accepted recommendation still requires a separate authenticated medication order, with its own author and lifecycle. No AI or twin service may issue or change that order.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-b8d6ddbf968ec9dc"></a>
- **M04-CAP-CDS-b8d6ddbf968ec9dc**: ## Inputs and canonical ownership
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-3868440f00a9c053"></a>
- **M04-CAP-CDS-3868440f00a9c053**: CAP-MEDICATION owns medication statements, reconciliation and exposure episodes, with references to prescriptions owned by CAP-PRESCRIPTION, dispensing owned by CAP-PHARMACY and administration owned by CAP-ADMINISTRATION. CAP-DATA owns identity-linked clinical context; CAP-LABORATORY owns results and CAP-CDS owns derived assessments. CAP-AI owns model execution provenance, not medication truth.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-d32a948d75c72678"></a>
- **M04-CAP-CDS-d32a948d75c72678**: The context snapshot includes age and date basis, sex-related clinical context where relevant, height, weight, BSA plus formula/input versions, diagnoses, chronic disease, allergies, prior adverse reactions, current and past medicines, active ingredients, strength/formulation, route, dose units, frequency, start/stop times and adherence uncertainty. Include OTC products and supplements, pregnancy/lactation state, pediatric age/development context, renal/hepatic function with equation and measurement provenance, biomarkers, devices, genome/PGx phenotype, available proteomics/metabolomics, clinical phenotype and observed treatment response. Unknown, not tested, absent and conflicting are separate values. Never infer normal organ function from an absent result.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-bdd7a333bacddf8e"></a>
- **M04-CAP-CDS-bdd7a333bacddf8e**: ## Data and interfaces
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-43372d96506e49d3"></a>
- **M04-CAP-CDS-43372d96506e49d3**: AssessmentRequest references patient, tenant, encounter, purpose, context snapshot/version, exposure IDs, evidence release and intended use. AssessmentResult references input hashes, findings, affected organs/pathways, uncertainty, applicability exclusions, missing data, model/rule version and clinician disposition. ScenarioComparison references alternatives and explicit assumptions; it does not create DoseChange.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-364d028dd3f517ec"></a>
- **M04-CAP-CDS-364d028dd3f517ec**: Proposed internal commands: requestMedicationAssessment, compareTherapyScenarios, recordClinicianReview. These are contract proposals, not implemented API routes. Idempotency key prevents duplicate jobs; contextVersion mismatch returns STALE_CONTEXT; insufficient inputs return INSUFFICIENT_EVIDENCE; authorization failure produces no clinical payload. Events AssessmentProduced, AssessmentInvalidated and ClinicianReviewRecorded contain opaque IDs and version metadata, not full patient records.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-a9cd3cad41cf1c4f"></a>
- **M04-CAP-CDS-a9cd3cad41cf1c4f**: Candidate FHIR R4 mappings: MedicationStatement for reported use, MedicationRequest for an independently authorized order, Observation/DiagnosticReport for results, AllergyIntolerance, Provenance and Consent. Mapping profiles and partner terminology packs require separate validation. Dependencies: CAP-MEDICATION, CAP-LABORATORY, CAP-DATA, CAP-AI, CAP-TWIN, CAP-CONSENT.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-16471d032d9e36a1"></a>
- **M04-CAP-CDS-16471d032d9e36a1**: ## Evidence, AI and twin boundary
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-93599357d8174361"></a>
- **M04-CAP-CDS-93599357d8174361**: Knowledge AI supplies versioned evidence; Clinical AI explains an assessment; Personal AI provides an audience-appropriate explanation without prescribing; a twin consumes approved context to produce separately labelled scenarios. PGx knowledge must retain allele/phenotype interpretation, evidence source, version, jurisdiction and population applicability. CPIC distinguishes guidance on using available genetic results from decisions to order testing. The FDA association table itself does not imply that testing is recommended before prescribing. These are boundaries for the design, not a validated dosing rule set. [CPIC guidelines](https://cpicpgx.org/guidelines/) · [FDA table](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations).
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-4bce74ea5437f5ca"></a>
- **M04-CAP-CDS-4bce74ea5437f5ca**: Longitudinal response observations may support governed evaluation; they must not silently retrain a patient model or convert correlation into drug efficacy.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-785ae1a2bda66fdc"></a>
- **M04-CAP-CDS-785ae1a2bda66fdc**: ## Failure modes, privacy and observability
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-a2bd18338c895303"></a>
- **M04-CAP-CDS-a2bd18338c895303**: Conflicting exposure, stale labs, unsupported age group, missing units, uncertain PGx calls or model outage require explicit abstention or a limited result. Never invent dose values. Restrict genomic/family information, enforce purpose/jurisdiction and record source access, evidence release, reviewer action and invalidation without copying sensitive context into logs. Encryption, retention and revocation inherit the [data contract](../../../audit/gapfill/data_architecture.md).
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-06c83daf4109e9a1"></a>
- **M04-CAP-CDS-06c83daf4109e9a1**: ## Acceptance and unresolved gates
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-5769f5bddcbeb03b"></a>
- **M04-CAP-CDS-5769f5bddcbeb03b**: Tests must reject stale context, ambiguous units, unapproved models and autonomous dose/order mutations. A new renal result invalidates a dependent scenario; clinician review records the exact evidence/context versions. Both OTC and supplement exposures participate in interaction screening. Each finding opens its source and assumptions. Pediatric/BSA/pregnancy cases remain blocked until intended-use validation establishes eligibility. Open gates: validated formulas/thresholds, licensed knowledge packs, clinical evaluation, human factors and clinical governance. No live assessment or medical validation is claimed.
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-4272dff977cf6e63"></a>
- **M04-CAP-CDS-4272dff977cf6e63**: Patient covariates and missingness
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-a2556e6de4080025"></a>
- **M04-CAP-CDS-a2556e6de4080025**: Medication exposure incl OTC/supplements
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-59a6c47a3b33a1b4"></a>
- **M04-CAP-CDS-59a6c47a3b33a1b4**: Renal/hepatic function and pediatric/pregnancy context
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-d316d156c2d3c9ff"></a>
- **M04-CAP-CDS-d316d156c2d3c9ff**: Genomic/PGx phenotype and uncertainty
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-07bd6ca8f0576ec2"></a>
- **M04-CAP-CDS-07bd6ca8f0576ec2**: Organ toxicity and adverse reaction evidence
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-451569efe5f30c88"></a>
- **M04-CAP-CDS-451569efe5f30c88**: Response model/scenario comparison
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-f6fa32fad860566e"></a>
- **M04-CAP-CDS-f6fa32fad860566e**: Clinician review boundary
  Origin: EXT-PHARM

<a id="M04-CAP-CDS-72c8ef48cd9af228"></a>
- **M04-CAP-CDS-72c8ef48cd9af228**: Longitudinal response and governed learning
  Origin: EXT-PHARM

## Preserved source metadata

<a id="M04-CAP-CDS-d62a845fe4d57fe4"></a>
- **M04-CAP-CDS-d62a845fe4d57fe4**: # Pediatric Nephrology Medication Manager

<a id="M04-CAP-CDS-4fbeeb87456accf5"></a>
- **M04-CAP-CDS-4fbeeb87456accf5**: Supports

<a id="M04-CAP-CDS-5ba74d8fcc7b20cc"></a>
- **M04-CAP-CDS-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-CDS-d5232cbd3a326267"></a>
- **M04-CAP-CDS-d5232cbd3a326267**: Documentation

<a id="M04-CAP-CDS-6f33acf3afb37064"></a>
- **M04-CAP-CDS-6f33acf3afb37064**: ---

<a id="M04-CAP-CDS-6510c5c511a879bc"></a>
- **M04-CAP-CDS-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-CDS-b34f593f0f83a1d1"></a>
- **M04-CAP-CDS-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-CDS-fd85b703c00f8755"></a>
- **M04-CAP-CDS-fd85b703c00f8755**: MVP Relevance:

<a id="M04-CAP-CDS-b88b375a44ccd619"></a>
- **M04-CAP-CDS-b88b375a44ccd619**: Status:

<a id="M04-CAP-CDS-b3604d24a08b400e"></a>
- **M04-CAP-CDS-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
