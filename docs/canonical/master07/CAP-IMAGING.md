# CORE-CAP-IMAGING — shared capability and profiles

MASTER-07 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: ImagingStudyReference, AcquisitionContext, MeasurementReference, SignedReportReference. Dependencies: CAP-IMAGING, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-CARD-ECHO

Original IDs: 846, 3064, 3664, 4064.

Preserve Doppler, valve/chamber/ventricular/congenital assessment and source images/reports. AI image interpretation is separately governed.

Acquire authorized echo reference → validate identity/measurement metadata → specialist report → longitudinal comparison.

### CAN-CARD-IMAGING

Original IDs: 3069, 3671, 4070.

Retain nuclear cardiology, CT angiography, catheterization references, 3D reconstruction and ventricular-volume detail; a generic model is not patient-derived anatomy.

Link CT/MRI/echo/nuclear/catheterization study references → validate acquisition/geometry → specialist review → compare compatible studies.

### M04-PULM-IMAGING

Original IDs: 912, 3190, 3371, 4466.

All modalities, historical comparison, signed radiology reports and separately governed AI outputs remain available.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

### M04-GASTRO-IMAGING

Original IDs: 950, 3170, 3290, 3450, 4524.

Preserve organ-specific ultrasound, fluoroscopy/contrast, MR enterography, historical comparisons and report provenance.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

### M05-ONCO-PATHOLOGY-IMAGES

Original IDs: 3130, 4222.

Shared imaging manages whole-slide/annotation references linked to morphology, immunohistochemistry, cytogenetic/molecular and expert reports. It does not authorize or overwrite signed pathology.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

### M05-ONCO-IMAGING

Original IDs: 3129, 4224, 5128.

Preserve CT/MRI/PET/ultrasound/nuclear studies and CNS lesion/volume, enhancement, edema, mass effect, hydrocephalus/spinal dissemination, postoperative and treatment overlays with acquisition and interpretation provenance.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

### M06-NEONATAL-IMAGING

Original IDs: 2357, 3029, 3269.

All original CT/MRI/X-ray/ultrasound, cranial and echo scopes remain with imaging acquisition/report references and separate AI assistance.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

### M07-SURGERY-IMAGING

Original IDs: 1129.

Pre/postoperative CT, MRI, ultrasound and radiographs reference the imaging owner and original signed study/report. Modality and chronology are preserved; a surgical archive must not create a second imaging interpretation authority.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M07-CAP-IMAGING-402f14a78f08600c"></a>
- **M07-CAP-IMAGING-402f14a78f08600c**: Stores pediatric echocardiograms.
  Origin: original 846

<a id="M07-CAP-IMAGING-6fdf6fb507eec070"></a>
- **M07-CAP-IMAGING-6fdf6fb507eec070**: Images
  Origin: original 846

<a id="M07-CAP-IMAGING-68edc784789a3df0"></a>
- **M07-CAP-IMAGING-68edc784789a3df0**: Measurements
  Origin: original 846

<a id="M07-CAP-IMAGING-3f46ddfc482453ec"></a>
- **M07-CAP-IMAGING-3f46ddfc482453ec**: Physician Reports
  Origin: original 846

<a id="M07-CAP-IMAGING-1f33c55afec2bda4"></a>
- **M07-CAP-IMAGING-1f33c55afec2bda4**: Stores chest imaging.
  Origin: original 912

<a id="M07-CAP-IMAGING-332b4ec3b65fa2c7"></a>
- **M07-CAP-IMAGING-332b4ec3b65fa2c7**: X-ray
  Origin: original 912, original 1129

<a id="M07-CAP-IMAGING-7bc7f92cb128242c"></a>
- **M07-CAP-IMAGING-7bc7f92cb128242c**: CT
  Origin: original 912, original 1129, original 2357, original 3069, original 3129, original 3170, original 3190, original 3290, original 3371, original 3450, original 4224, original 4466, original 4524

<a id="M07-CAP-IMAGING-2663978a32c6d34f"></a>
- **M07-CAP-IMAGING-2663978a32c6d34f**: MRI
  Origin: original 912, original 1129, original 2357, original 3029, original 3069, original 3129, original 3170, original 3190, original 3269, original 3290, original 3371, original 3450, original 4224, original 4466, original 4524

<a id="M07-CAP-IMAGING-5032f26f1a690cb2"></a>
- **M07-CAP-IMAGING-5032f26f1a690cb2**: Ultrasound
  Origin: original 912, original 1129, original 2357, original 3129, original 3170, original 3290, original 3450, original 4224, original 4466, original 4524

<a id="M07-CAP-IMAGING-85bdcde05bd8c20a"></a>
- **M07-CAP-IMAGING-85bdcde05bd8c20a**: Stores abdominal ultrasound examinations.
  Origin: original 950

<a id="M07-CAP-IMAGING-0c0260ea6dd315fa"></a>
- **M07-CAP-IMAGING-0c0260ea6dd315fa**: Liver
  Origin: original 950

<a id="M07-CAP-IMAGING-5c962e0c63da80d5"></a>
- **M07-CAP-IMAGING-5c962e0c63da80d5**: Gallbladder
  Origin: original 950

<a id="M07-CAP-IMAGING-0ed4298f97f0e72b"></a>
- **M07-CAP-IMAGING-0ed4298f97f0e72b**: Pancreas
  Origin: original 950

<a id="M07-CAP-IMAGING-a71f11c40ea7e423"></a>
- **M07-CAP-IMAGING-a71f11c40ea7e423**: Intestines
  Origin: original 950

<a id="M07-CAP-IMAGING-40f5dd84e8ee142f"></a>
- **M07-CAP-IMAGING-40f5dd84e8ee142f**: Spleen
  Origin: original 950

<a id="M07-CAP-IMAGING-c2fb81759ca03b20"></a>
- **M07-CAP-IMAGING-c2fb81759ca03b20**: Stores preoperative and postoperative imaging.
  Origin: original 1129

<a id="M07-CAP-IMAGING-9a2135cf438e2d08"></a>
- **M07-CAP-IMAGING-9a2135cf438e2d08**: Maintains neonatal imaging.
  Origin: original 2357, original 3269

<a id="M07-CAP-IMAGING-b643882bdf3bd937"></a>
- **M07-CAP-IMAGING-b643882bdf3bd937**: X-Ray
  Origin: original 2357

<a id="M07-CAP-IMAGING-0555e089ed694337"></a>
- **M07-CAP-IMAGING-0555e089ed694337**: Maintains neonatal imaging studies.
  Origin: original 3029

<a id="M07-CAP-IMAGING-fb2abfb205839aa6"></a>
- **M07-CAP-IMAGING-fb2abfb205839aa6**: Cranial Ultrasound
  Origin: original 3029, original 3269

<a id="M07-CAP-IMAGING-7180e4fffcb65860"></a>
- **M07-CAP-IMAGING-7180e4fffcb65860**: Echocardiography
  Origin: original 3029, original 3069, original 3269, original 3671

<a id="M07-CAP-IMAGING-7a876b075a72a524"></a>
- **M07-CAP-IMAGING-7a876b075a72a524**: Chest X-ray
  Origin: original 3029, original 3190, original 3269, original 3371, original 4466

<a id="M07-CAP-IMAGING-4921e9ac4e17165a"></a>
- **M07-CAP-IMAGING-4921e9ac4e17165a**: AI Imaging Analysis
  Origin: original 3029, original 3069, original 3129, original 3170, original 3190

<a id="M07-CAP-IMAGING-941ab313ddea6b50"></a>
- **M07-CAP-IMAGING-941ab313ddea6b50**: Supports pediatric cardiac ultrasound.
  Origin: original 3064

<a id="M07-CAP-IMAGING-b72d61cc347de0c5"></a>
- **M07-CAP-IMAGING-b72d61cc347de0c5**: Structural Assessment
  Origin: original 3064, original 3664

<a id="M07-CAP-IMAGING-a87317df355ce88a"></a>
- **M07-CAP-IMAGING-a87317df355ce88a**: Doppler Analysis
  Origin: original 3064

<a id="M07-CAP-IMAGING-ad7848b8f593a316"></a>
- **M07-CAP-IMAGING-ad7848b8f593a316**: Ventricular Function
  Origin: original 3064, original 3664, original 4064

<a id="M07-CAP-IMAGING-e6224b8891af24b4"></a>
- **M07-CAP-IMAGING-e6224b8891af24b4**: Valve Assessment
  Origin: original 3064, original 3664, original 4064

<a id="M07-CAP-IMAGING-f91041d138c8cbef"></a>
- **M07-CAP-IMAGING-f91041d138c8cbef**: Congenital Heart Evaluation
  Origin: original 3064

<a id="M07-CAP-IMAGING-2976e626693d486e"></a>
- **M07-CAP-IMAGING-2976e626693d486e**: Integrated with AI-assisted image interpretation.
  Origin: original 3064

<a id="M07-CAP-IMAGING-0f1cf125a4110a7b"></a>
- **M07-CAP-IMAGING-0f1cf125a4110a7b**: Maintains pediatric cardiac imaging.
  Origin: original 3069, original 3671

<a id="M07-CAP-IMAGING-2c1cd1dbd936df5f"></a>
- **M07-CAP-IMAGING-2c1cd1dbd936df5f**: Cardiac Catheterization
  Origin: original 3069

<a id="M07-CAP-IMAGING-011a0ea1ae377553"></a>
- **M07-CAP-IMAGING-011a0ea1ae377553**: Maintains pediatric oncology imaging.
  Origin: original 3129

<a id="M07-CAP-IMAGING-171b4a73c61b59ea"></a>
- **M07-CAP-IMAGING-171b4a73c61b59ea**: PET/CT
  Origin: original 3129

<a id="M07-CAP-IMAGING-0d41c989e57e287e"></a>
- **M07-CAP-IMAGING-0d41c989e57e287e**: Nuclear Medicine
  Origin: original 3129, original 4224

<a id="M07-CAP-IMAGING-bc5ce7424fde048f"></a>
- **M07-CAP-IMAGING-bc5ce7424fde048f**: Maintains pathology data.
  Origin: original 3130

<a id="M07-CAP-IMAGING-78d0334ae8346a4e"></a>
- **M07-CAP-IMAGING-78d0334ae8346a4e**: Histopathology
  Origin: original 3130

<a id="M07-CAP-IMAGING-32c488e1a82f5c54"></a>
- **M07-CAP-IMAGING-32c488e1a82f5c54**: Immunohistochemistry
  Origin: original 3130, original 4222

<a id="M07-CAP-IMAGING-35e82482e599129e"></a>
- **M07-CAP-IMAGING-35e82482e599129e**: Molecular Pathology
  Origin: original 3130

<a id="M07-CAP-IMAGING-8fc49378bfabe721"></a>
- **M07-CAP-IMAGING-8fc49378bfabe721**: Cytogenetics
  Origin: original 3130

<a id="M07-CAP-IMAGING-0b04898cf7712f7f"></a>
- **M07-CAP-IMAGING-0b04898cf7712f7f**: Digital Pathology
  Origin: original 3130

<a id="M07-CAP-IMAGING-1524c734fa59c25f"></a>
- **M07-CAP-IMAGING-1524c734fa59c25f**: Maintains gastrointestinal imaging.
  Origin: original 3170, original 3290

<a id="M07-CAP-IMAGING-7b572796ef017271"></a>
- **M07-CAP-IMAGING-7b572796ef017271**: Fluoroscopy
  Origin: original 3170

<a id="M07-CAP-IMAGING-6144449757072ce3"></a>
- **M07-CAP-IMAGING-6144449757072ce3**: Maintains pulmonary imaging.
  Origin: original 3190, original 3371

<a id="M07-CAP-IMAGING-647478a9201e5ed6"></a>
- **M07-CAP-IMAGING-647478a9201e5ed6**: Lung Ultrasound
  Origin: original 3190, original 3371

<a id="M07-CAP-IMAGING-23cb5b848c6347ef"></a>
- **M07-CAP-IMAGING-23cb5b848c6347ef**: AI Image Analysis
  Origin: original 3269, original 3290, original 3450, original 3671

<a id="M07-CAP-IMAGING-590369369c402e65"></a>
- **M07-CAP-IMAGING-590369369c402e65**: Contrast Studies
  Origin: original 3290, original 3450, original 4524

<a id="M07-CAP-IMAGING-4b512277a9cdecef"></a>
- **M07-CAP-IMAGING-4b512277a9cdecef**: AI Image Interpretation
  Origin: original 3371

<a id="M07-CAP-IMAGING-d058bf95982b1284"></a>
- **M07-CAP-IMAGING-d058bf95982b1284**: Maintains GI imaging.
  Origin: original 3450

<a id="M07-CAP-IMAGING-66a9a069f4839641"></a>
- **M07-CAP-IMAGING-66a9a069f4839641**: Supports pediatric echocardiography.
  Origin: original 3664, original 4064

<a id="M07-CAP-IMAGING-a7df007fa2d9340b"></a>
- **M07-CAP-IMAGING-a7df007fa2d9340b**: Doppler Studies
  Origin: original 3664

<a id="M07-CAP-IMAGING-05064cd5efcbe97e"></a>
- **M07-CAP-IMAGING-05064cd5efcbe97e**: AI-assisted Echo Analysis
  Origin: original 3664

<a id="M07-CAP-IMAGING-c0563b9377b05194"></a>
- **M07-CAP-IMAGING-c0563b9377b05194**: Cardiac MRI
  Origin: original 3671, original 4070

<a id="M07-CAP-IMAGING-ccdf0186fa32f073"></a>
- **M07-CAP-IMAGING-ccdf0186fa32f073**: CT Angiography
  Origin: original 3671

<a id="M07-CAP-IMAGING-ad2241fbe5a55963"></a>
- **M07-CAP-IMAGING-ad2241fbe5a55963**: Nuclear Cardiology
  Origin: original 3671

<a id="M07-CAP-IMAGING-1e87572b1cf62ff2"></a>
- **M07-CAP-IMAGING-1e87572b1cf62ff2**: 2D Echocardiography
  Origin: original 4064

<a id="M07-CAP-IMAGING-55cc43dc5e835bb6"></a>
- **M07-CAP-IMAGING-55cc43dc5e835bb6**: Doppler
  Origin: original 4064

<a id="M07-CAP-IMAGING-c1a722a0392f4032"></a>
- **M07-CAP-IMAGING-c1a722a0392f4032**: Chamber Measurements
  Origin: original 4064

<a id="M07-CAP-IMAGING-daa3dc46e8e5ce2f"></a>
- **M07-CAP-IMAGING-daa3dc46e8e5ce2f**: Congenital Anatomy
  Origin: original 4064, original 4070

<a id="M07-CAP-IMAGING-7fa79dce2b8d7e98"></a>
- **M07-CAP-IMAGING-7fa79dce2b8d7e98**: Longitudinal Comparison
  Origin: original 4064, original 4224

<a id="M07-CAP-IMAGING-a45bcb39e35f4930"></a>
- **M07-CAP-IMAGING-a45bcb39e35f4930**: AI-assisted Image Analysis
  Origin: original 4064

<a id="M07-CAP-IMAGING-534838f6d56ae8fd"></a>
- **M07-CAP-IMAGING-534838f6d56ae8fd**: Maintains advanced pediatric cardiac imaging.
  Origin: original 4070

<a id="M07-CAP-IMAGING-5594d1a0a5fc83c3"></a>
- **M07-CAP-IMAGING-5594d1a0a5fc83c3**: Cardiac CT
  Origin: original 4070

<a id="M07-CAP-IMAGING-58a87a4307a14734"></a>
- **M07-CAP-IMAGING-58a87a4307a14734**: 3D Reconstruction
  Origin: original 4070

<a id="M07-CAP-IMAGING-d84c59358a80e2e5"></a>
- **M07-CAP-IMAGING-d84c59358a80e2e5**: Ventricular Volumes
  Origin: original 4070

<a id="M07-CAP-IMAGING-b1d36683496336e7"></a>
- **M07-CAP-IMAGING-b1d36683496336e7**: Myocardial Assessment
  Origin: original 4070

<a id="M07-CAP-IMAGING-8e3285b1b1f8d30a"></a>
- **M07-CAP-IMAGING-8e3285b1b1f8d30a**: Longitudinal Imaging Comparison
  Origin: original 4070

<a id="M07-CAP-IMAGING-496d53796ec68d5a"></a>
- **M07-CAP-IMAGING-496d53796ec68d5a**: Supports digital pathology.
  Origin: original 4222

<a id="M07-CAP-IMAGING-c93ca9e253d8f844"></a>
- **M07-CAP-IMAGING-c93ca9e253d8f844**: Whole-slide Imaging
  Origin: original 4222

<a id="M07-CAP-IMAGING-32ffc096d55d159d"></a>
- **M07-CAP-IMAGING-32ffc096d55d159d**: Histology
  Origin: original 4222

<a id="M07-CAP-IMAGING-49c05b1bc24cb43e"></a>
- **M07-CAP-IMAGING-49c05b1bc24cb43e**: Annotation
  Origin: original 4222

<a id="M07-CAP-IMAGING-18b204a560e24d64"></a>
- **M07-CAP-IMAGING-18b204a560e24d64**: Molecular Correlation
  Origin: original 4222

<a id="M07-CAP-IMAGING-a930cd821cb4d457"></a>
- **M07-CAP-IMAGING-a930cd821cb4d457**: AI-assisted Pattern Analysis
  Origin: original 4222

<a id="M07-CAP-IMAGING-f0eb3c9e0b167a44"></a>
- **M07-CAP-IMAGING-f0eb3c9e0b167a44**: Expert Review
  Origin: original 4222

<a id="M07-CAP-IMAGING-15ec951541883adc"></a>
- **M07-CAP-IMAGING-15ec951541883adc**: Integrates oncology imaging.
  Origin: original 4224

<a id="M07-CAP-IMAGING-743748e8a3a7b070"></a>
- **M07-CAP-IMAGING-743748e8a3a7b070**: PET
  Origin: original 4224

<a id="M07-CAP-IMAGING-086097fc4d51570f"></a>
- **M07-CAP-IMAGING-086097fc4d51570f**: Tumor Measurements
  Origin: original 4224

<a id="M07-CAP-IMAGING-f5d67595b8e2d779"></a>
- **M07-CAP-IMAGING-f5d67595b8e2d779**: Response Assessment
  Origin: original 4224

<a id="M07-CAP-IMAGING-dcdbe989948cfa11"></a>
- **M07-CAP-IMAGING-dcdbe989948cfa11**: Integrates respiratory imaging into longitudinal care.
  Origin: original 4466

<a id="M07-CAP-IMAGING-47fb4ac09c18574f"></a>
- **M07-CAP-IMAGING-47fb4ac09c18574f**: Airway Imaging
  Origin: original 4466

<a id="M07-CAP-IMAGING-816f49494ba8a0c9"></a>
- **M07-CAP-IMAGING-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4466, original 4524, original 5128

<a id="M07-CAP-IMAGING-0844c26e8c3772e7"></a>
- **M07-CAP-IMAGING-0844c26e8c3772e7**: Radiology Reports
  Origin: original 4466, original 4524

<a id="M07-CAP-IMAGING-a593fb90edf6e967"></a>
- **M07-CAP-IMAGING-a593fb90edf6e967**: AI-assisted Analysis
  Origin: original 4466

<a id="M07-CAP-IMAGING-be486385f2752393"></a>
- **M07-CAP-IMAGING-be486385f2752393**: Integrates gastrointestinal imaging.
  Origin: original 4524

<a id="M07-CAP-IMAGING-49884d769caa6639"></a>
- **M07-CAP-IMAGING-49884d769caa6639**: Radiography
  Origin: original 4524

<a id="M07-CAP-IMAGING-3ea0837d2011db09"></a>
- **M07-CAP-IMAGING-3ea0837d2011db09**: MR Enterography
  Origin: original 4524

<a id="M07-CAP-IMAGING-8d7e08e5008f78ce"></a>
- **M07-CAP-IMAGING-8d7e08e5008f78ce**: Create a longitudinal imaging environment for pediatric CNS tumor assessment and surveillance.
  Origin: original 5128

<a id="M07-CAP-IMAGING-89dd76f51c9d54a5"></a>
- **M07-CAP-IMAGING-89dd76f51c9d54a5**: MRI Study Registry
  Origin: original 5128

<a id="M07-CAP-IMAGING-11d218592356710e"></a>
- **M07-CAP-IMAGING-11d218592356710e**: CT Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-a04becd171370428"></a>
- **M07-CAP-IMAGING-a04becd171370428**: Tumor Location
  Origin: original 5128

<a id="M07-CAP-IMAGING-7c2abb882f080401"></a>
- **M07-CAP-IMAGING-7c2abb882f080401**: Tumor Dimensions
  Origin: original 5128

<a id="M07-CAP-IMAGING-1ec7c0957cf73575"></a>
- **M07-CAP-IMAGING-1ec7c0957cf73575**: Tumor Volume Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-3ec174c29528fda0"></a>
- **M07-CAP-IMAGING-3ec174c29528fda0**: Enhancement Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-7bb561cb207fe5e3"></a>
- **M07-CAP-IMAGING-7bb561cb207fe5e3**: Edema Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-0aacddd60c43f216"></a>
- **M07-CAP-IMAGING-0aacddd60c43f216**: Mass Effect Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-87ac89009bcd4da6"></a>
- **M07-CAP-IMAGING-87ac89009bcd4da6**: Hydrocephalus Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-37b2f77d6e5d73c7"></a>
- **M07-CAP-IMAGING-37b2f77d6e5d73c7**: Spinal Dissemination Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-1534f05abe23e7bb"></a>
- **M07-CAP-IMAGING-1534f05abe23e7bb**: Postoperative Imaging
  Origin: original 5128

<a id="M07-CAP-IMAGING-8cdbf62e785a0501"></a>
- **M07-CAP-IMAGING-8cdbf62e785a0501**: Treatment-response Imaging
  Origin: original 5128

<a id="M07-CAP-IMAGING-7cefc21ee789ce91"></a>
- **M07-CAP-IMAGING-7cefc21ee789ce91**: Surveillance Imaging
  Origin: original 5128

<a id="M07-CAP-IMAGING-0a8ec2e08095ee37"></a>
- **M07-CAP-IMAGING-0a8ec2e08095ee37**: Progression Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-f3a42e97da41faab"></a>
- **M07-CAP-IMAGING-f3a42e97da41faab**: Digital Functions:
  Origin: original 5128

<a id="M07-CAP-IMAGING-d90a28951ea31efe"></a>
- **M07-CAP-IMAGING-d90a28951ea31efe**: Imaging Timeline
  Origin: original 5128

<a id="M07-CAP-IMAGING-6f09955c79562254"></a>
- **M07-CAP-IMAGING-6f09955c79562254**: Lesion Tracking
  Origin: original 5128

<a id="M07-CAP-IMAGING-b17ea15d20f53f60"></a>
- **M07-CAP-IMAGING-b17ea15d20f53f60**: Measurement History
  Origin: original 5128

<a id="M07-CAP-IMAGING-c9dd7e28fd1cd391"></a>
- **M07-CAP-IMAGING-c9dd7e28fd1cd391**: Treatment Overlay
  Origin: original 5128

<a id="M07-CAP-IMAGING-72ec7f1d880d6629"></a>
- **M07-CAP-IMAGING-72ec7f1d880d6629**: Surgery Overlay
  Origin: original 5128

<a id="M07-CAP-IMAGING-c0b4085d48feddc9"></a>
- **M07-CAP-IMAGING-c0b4085d48feddc9**: Radiotherapy Overlay
  Origin: original 5128

<a id="M07-CAP-IMAGING-fb7dcbc64a7ed5f8"></a>
- **M07-CAP-IMAGING-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 5128

<a id="M07-CAP-IMAGING-971cb1a7d3b07fa6"></a>
- **M07-CAP-IMAGING-971cb1a7d3b07fa6**: Image Comparison Support
  Origin: original 5128

<a id="M07-CAP-IMAGING-03c0f22f1e8f1c6f"></a>
- **M07-CAP-IMAGING-03c0f22f1e8f1c6f**: Lesion Segmentation Context
  Origin: original 5128

<a id="M07-CAP-IMAGING-67962c5f1da5f925"></a>
- **M07-CAP-IMAGING-67962c5f1da5f925**: Volumetric Trend Support
  Origin: original 5128

<a id="M07-CAP-IMAGING-123bf65addeb2e8a"></a>
- **M07-CAP-IMAGING-123bf65addeb2e8a**: Change Detection Assistance
  Origin: original 5128

<a id="M07-CAP-IMAGING-07f8d474b8b4141c"></a>
- **M07-CAP-IMAGING-07f8d474b8b4141c**: Safety:
  Origin: original 5128

<a id="M07-CAP-IMAGING-80990b8a37b9339d"></a>
- **M07-CAP-IMAGING-80990b8a37b9339d**: Formal radiological interpretation remains clinician-led.
  Origin: original 5128

## Preserved source metadata

<a id="M07-CAP-IMAGING-65a310f591de3535"></a>
- **M07-CAP-IMAGING-65a310f591de3535**: # Pediatric Echocardiography Archive

<a id="M07-CAP-IMAGING-4fbeeb87456accf5"></a>
- **M07-CAP-IMAGING-4fbeeb87456accf5**: Supports

<a id="M07-CAP-IMAGING-5ba74d8fcc7b20cc"></a>
- **M07-CAP-IMAGING-5ba74d8fcc7b20cc**: Status

<a id="M07-CAP-IMAGING-d5232cbd3a326267"></a>
- **M07-CAP-IMAGING-d5232cbd3a326267**: Documentation

<a id="M07-CAP-IMAGING-6f33acf3afb37064"></a>
- **M07-CAP-IMAGING-6f33acf3afb37064**: ---

<a id="M07-CAP-IMAGING-1155c69caf4dc384"></a>
- **M07-CAP-IMAGING-1155c69caf4dc384**: # Pediatric Lung Imaging Archive

<a id="M07-CAP-IMAGING-55b9f810ea601ea1"></a>
- **M07-CAP-IMAGING-55b9f810ea601ea1**: # Pediatric Abdominal Ultrasound Archive

<a id="M07-CAP-IMAGING-08ceb8d369ae3ffe"></a>
- **M07-CAP-IMAGING-08ceb8d369ae3ffe**: # Pediatric Surgical Imaging Archive

<a id="M07-CAP-IMAGING-6510c5c511a879bc"></a>
- **M07-CAP-IMAGING-6510c5c511a879bc**: Purpose:

<a id="M07-CAP-IMAGING-b34f593f0f83a1d1"></a>
- **M07-CAP-IMAGING-b34f593f0f83a1d1**: Core Functions:

<a id="M07-CAP-IMAGING-b88b375a44ccd619"></a>
- **M07-CAP-IMAGING-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-07/requirement_migration.json) · [Gap disposition](../../../audit/master-07/gap_disposition.json) · [Readiness gates](../../../audit/master-07/implementation_gate_matrix.json).
