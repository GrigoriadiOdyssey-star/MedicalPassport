# CORE-CAP-IMAGING — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

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

### M08-IMAGING

Original IDs: 63, 64.

DICOM and PACS profiles share imaging ownership with original study/series/instance, acquisition, modality and diagnostic lineage. Preserve DIMSE/DICOMweb, vendor candidates and viewing capabilities while requiring partner validation and independently governed AI/anonymization.

Link study/series and acquisition → preserve geometry/quality → link measurements and signed report → compare compatible versions; AI output remains a separate artifact.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-IMAGING-9b3ffb6e0f9d1846"></a>
- **M08-CAP-IMAGING-9b3ffb6e0f9d1846**: Defines support for storing, viewing and exchanging medical imaging using the DICOM standard.
  Origin: original 63

<a id="M08-CAP-IMAGING-7bc7f92cb128242c"></a>
- **M08-CAP-IMAGING-7bc7f92cb128242c**: CT
  Origin: original 63, original 64, original 912, original 1129, original 2357, original 3069, original 3129, original 3170, original 3190, original 3290, original 3371, original 3450, original 4224, original 4466, original 4524

<a id="M08-CAP-IMAGING-2663978a32c6d34f"></a>
- **M08-CAP-IMAGING-2663978a32c6d34f**: MRI
  Origin: original 63, original 64, original 912, original 1129, original 2357, original 3029, original 3069, original 3129, original 3170, original 3190, original 3269, original 3290, original 3371, original 3450, original 4224, original 4466, original 4524

<a id="M08-CAP-IMAGING-b643882bdf3bd937"></a>
- **M08-CAP-IMAGING-b643882bdf3bd937**: X-Ray
  Origin: original 63, original 64, original 2357

<a id="M08-CAP-IMAGING-5032f26f1a690cb2"></a>
- **M08-CAP-IMAGING-5032f26f1a690cb2**: Ultrasound
  Origin: original 63, original 64, original 912, original 1129, original 2357, original 3129, original 3170, original 3290, original 3450, original 4224, original 4466, original 4524

<a id="M08-CAP-IMAGING-1d2fb5100cd47ef4"></a>
- **M08-CAP-IMAGING-1d2fb5100cd47ef4**: Mammography
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-743748e8a3a7b070"></a>
- **M08-CAP-IMAGING-743748e8a3a7b070**: PET
  Origin: original 63, original 64, original 4224

<a id="M08-CAP-IMAGING-21bc5ebb749d8a06"></a>
- **M08-CAP-IMAGING-21bc5ebb749d8a06**: SPECT
  Origin: original 63

<a id="M08-CAP-IMAGING-d6a55655d4245547"></a>
- **M08-CAP-IMAGING-d6a55655d4245547**: Angiography
  Origin: original 63

<a id="M08-CAP-IMAGING-7881f9e08d464589"></a>
- **M08-CAP-IMAGING-7881f9e08d464589**: Dental Imaging
  Origin: original 63

<a id="M08-CAP-IMAGING-34f989613ab16060"></a>
- **M08-CAP-IMAGING-34f989613ab16060**: Ophthalmology
  Origin: original 63

<a id="M08-CAP-IMAGING-a70483bb63bf3cc4"></a>
- **M08-CAP-IMAGING-a70483bb63bf3cc4**: Upload
  Origin: original 63

<a id="M08-CAP-IMAGING-25f16cdf398f1278"></a>
- **M08-CAP-IMAGING-25f16cdf398f1278**: Download
  Origin: original 63

<a id="M08-CAP-IMAGING-4e9c6ac0d97c6c98"></a>
- **M08-CAP-IMAGING-4e9c6ac0d97c6c98**: Preview
  Origin: original 63

<a id="M08-CAP-IMAGING-dd6abed223037a36"></a>
- **M08-CAP-IMAGING-dd6abed223037a36**: Viewer
  Origin: original 63

<a id="M08-CAP-IMAGING-81e89de042b4a62a"></a>
- **M08-CAP-IMAGING-81e89de042b4a62a**: Metadata Extraction
  Origin: original 63

<a id="M08-CAP-IMAGING-15ccb8afd07d4b7a"></a>
- **M08-CAP-IMAGING-15ccb8afd07d4b7a**: Search
  Origin: original 63

<a id="M08-CAP-IMAGING-d46b6ca6f554a9cc"></a>
- **M08-CAP-IMAGING-d46b6ca6f554a9cc**: AI Analysis
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-c37bd3d46a7617b1"></a>
- **M08-CAP-IMAGING-c37bd3d46a7617b1**: Medical Device
  Origin: original 63

<a id="M08-CAP-IMAGING-60ad5f0e95a3c0f2"></a>
- **M08-CAP-IMAGING-60ad5f0e95a3c0f2**: ↓
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-e74d493b1347d7d8"></a>
- **M08-CAP-IMAGING-e74d493b1347d7d8**: PACS
  Origin: original 63

<a id="M08-CAP-IMAGING-04c8beeae1b6db25"></a>
- **M08-CAP-IMAGING-04c8beeae1b6db25**: DICOM Gateway
  Origin: original 63

<a id="M08-CAP-IMAGING-9e9dbb804ca8197a"></a>
- **M08-CAP-IMAGING-9e9dbb804ca8197a**: Medical Passport
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-cf769b7e4648b257"></a>
- **M08-CAP-IMAGING-cf769b7e4648b257**: Cloud Storage
  Origin: original 63

<a id="M08-CAP-IMAGING-a9c1a7932173b84d"></a>
- **M08-CAP-IMAGING-a9c1a7932173b84d**: Patient ID
  Origin: original 63

<a id="M08-CAP-IMAGING-223f8ed52d200ce6"></a>
- **M08-CAP-IMAGING-223f8ed52d200ce6**: Study ID
  Origin: original 63

<a id="M08-CAP-IMAGING-bd81ca44185c13f8"></a>
- **M08-CAP-IMAGING-bd81ca44185c13f8**: Series ID
  Origin: original 63

<a id="M08-CAP-IMAGING-9a7a46632ff53f22"></a>
- **M08-CAP-IMAGING-9a7a46632ff53f22**: Instance ID
  Origin: original 63

<a id="M08-CAP-IMAGING-ea603dfadd57135c"></a>
- **M08-CAP-IMAGING-ea603dfadd57135c**: Study Date
  Origin: original 63

<a id="M08-CAP-IMAGING-9c38d12bad60f3fb"></a>
- **M08-CAP-IMAGING-9c38d12bad60f3fb**: Modality
  Origin: original 63

<a id="M08-CAP-IMAGING-5db7f62d2537b033"></a>
- **M08-CAP-IMAGING-5db7f62d2537b033**: Body Part
  Origin: original 63

<a id="M08-CAP-IMAGING-9292031266b0e334"></a>
- **M08-CAP-IMAGING-9292031266b0e334**: Hospital
  Origin: original 63

<a id="M08-CAP-IMAGING-52a3545c159968e0"></a>
- **M08-CAP-IMAGING-52a3545c159968e0**: Doctor
  Origin: original 63

<a id="M08-CAP-IMAGING-e6322ac09f884cf3"></a>
- **M08-CAP-IMAGING-e6322ac09f884cf3**: Manufacturer
  Origin: original 63

<a id="M08-CAP-IMAGING-611b9c578c9cc80a"></a>
- **M08-CAP-IMAGING-611b9c578c9cc80a**: Resolution
  Origin: original 63

<a id="M08-CAP-IMAGING-f5f75f47e9db9954"></a>
- **M08-CAP-IMAGING-f5f75f47e9db9954**: File Size
  Origin: original 63

<a id="M08-CAP-IMAGING-1156d7f1beae88e9"></a>
- **M08-CAP-IMAGING-1156d7f1beae88e9**: Zoom
  Origin: original 63

<a id="M08-CAP-IMAGING-ba720a73a8ae1e46"></a>
- **M08-CAP-IMAGING-ba720a73a8ae1e46**: Pan
  Origin: original 63

<a id="M08-CAP-IMAGING-66664bc5a33317a2"></a>
- **M08-CAP-IMAGING-66664bc5a33317a2**: Window Level
  Origin: original 63

<a id="M08-CAP-IMAGING-68edc784789a3df0"></a>
- **M08-CAP-IMAGING-68edc784789a3df0**: Measurements
  Origin: original 63, original 846

<a id="M08-CAP-IMAGING-7f3cc17e0bf64796"></a>
- **M08-CAP-IMAGING-7f3cc17e0bf64796**: Multi-frame Support
  Origin: original 63

<a id="M08-CAP-IMAGING-7fc765c5281a8473"></a>
- **M08-CAP-IMAGING-7fc765c5281a8473**: Series Navigation
  Origin: original 63

<a id="M08-CAP-IMAGING-44bcb521fb836823"></a>
- **M08-CAP-IMAGING-44bcb521fb836823**: 3D Reconstruction (Future)
  Origin: original 63

<a id="M08-CAP-IMAGING-bd518eadd0163254"></a>
- **M08-CAP-IMAGING-bd518eadd0163254**: Image Classification
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-96ab1561316fe013"></a>
- **M08-CAP-IMAGING-96ab1561316fe013**: Lesion Detection
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-2673e99043a3dfb4"></a>
- **M08-CAP-IMAGING-2673e99043a3dfb4**: Organ Recognition
  Origin: original 63

<a id="M08-CAP-IMAGING-f7f24eecaeab782c"></a>
- **M08-CAP-IMAGING-f7f24eecaeab782c**: Comparison with Previous Studies
  Origin: original 63

<a id="M08-CAP-IMAGING-474bef8e88720a2c"></a>
- **M08-CAP-IMAGING-474bef8e88720a2c**: Medical Summary
  Origin: original 63

<a id="M08-CAP-IMAGING-0e9a5f4b817206f3"></a>
- **M08-CAP-IMAGING-0e9a5f4b817206f3**: Risk Detection
  Origin: original 63

<a id="M08-CAP-IMAGING-cc650a7907363ad2"></a>
- **M08-CAP-IMAGING-cc650a7907363ad2**: AES-256 Encryption
  Origin: original 63

<a id="M08-CAP-IMAGING-7c1bd0755e11bd41"></a>
- **M08-CAP-IMAGING-7c1bd0755e11bd41**: DICOM Anonymization
  Origin: original 63

<a id="M08-CAP-IMAGING-44effbba6a37147d"></a>
- **M08-CAP-IMAGING-44effbba6a37147d**: TLS 1.3
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-d20a95b6b63719a7"></a>
- **M08-CAP-IMAGING-d20a95b6b63719a7**: Audit Logs
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-b95b8e5397e9b6e2"></a>
- **M08-CAP-IMAGING-b95b8e5397e9b6e2**: Digital Signature
  Origin: original 63

<a id="M08-CAP-IMAGING-d3290df0dc43733d"></a>
- **M08-CAP-IMAGING-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-e496807084365b11"></a>
- **M08-CAP-IMAGING-e496807084365b11**: ├── Hospitals
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-93522f774f6d0bd5"></a>
- **M08-CAP-IMAGING-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-5d854ee63a66069f"></a>
- **M08-CAP-IMAGING-5d854ee63a66069f**: ├── OCR
  Origin: original 63

<a id="M08-CAP-IMAGING-a7f2ddd3ac9459b5"></a>
- **M08-CAP-IMAGING-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-efa2a8ae50719ab3"></a>
- **M08-CAP-IMAGING-efa2a8ae50719ab3**: ├── QR Passport
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-bcc206f041686e88"></a>
- **M08-CAP-IMAGING-bcc206f041686e88**: ├── Reporting
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-37bfdffca1a32095"></a>
- **M08-CAP-IMAGING-37bfdffca1a32095**: Future Features
  Origin: original 63, original 64

<a id="M08-CAP-IMAGING-3bf4272b2107b299"></a>
- **M08-CAP-IMAGING-3bf4272b2107b299**: PACS Synchronization
  Origin: original 63

<a id="M08-CAP-IMAGING-a927a3e901625191"></a>
- **M08-CAP-IMAGING-a927a3e901625191**: Cloud DICOM Viewer
  Origin: original 63

<a id="M08-CAP-IMAGING-675d4f997d905dd7"></a>
- **M08-CAP-IMAGING-675d4f997d905dd7**: AI Radiology Assistant
  Origin: original 63

<a id="M08-CAP-IMAGING-a0afd45144839363"></a>
- **M08-CAP-IMAGING-a0afd45144839363**: 3D Viewer
  Origin: original 63

<a id="M08-CAP-IMAGING-cb7f5e9867ad525e"></a>
- **M08-CAP-IMAGING-cb7f5e9867ad525e**: Cross-hospital Image Exchange
  Origin: original 63

<a id="M08-CAP-IMAGING-85635a2c20de9a32"></a>
- **M08-CAP-IMAGING-85635a2c20de9a32**: Automatic Image Comparison
  Origin: original 63

<a id="M08-CAP-IMAGING-d4dfabad8ec0adad"></a>
- **M08-CAP-IMAGING-d4dfabad8ec0adad**: Defines integration with PACS (Picture Archiving and Communication Systems) used by hospitals and diagnostic centers.
  Origin: original 64

<a id="M08-CAP-IMAGING-607ae83b0645ad6c"></a>
- **M08-CAP-IMAGING-607ae83b0645ad6c**: Orthanc
  Origin: original 64

<a id="M08-CAP-IMAGING-df4cc4347ab83c86"></a>
- **M08-CAP-IMAGING-df4cc4347ab83c86**: dcm4chee
  Origin: original 64

<a id="M08-CAP-IMAGING-93dc61e43f38779f"></a>
- **M08-CAP-IMAGING-93dc61e43f38779f**: GE PACS
  Origin: original 64

<a id="M08-CAP-IMAGING-3e516f0c4eaf868c"></a>
- **M08-CAP-IMAGING-3e516f0c4eaf868c**: Philips IntelliSpace
  Origin: original 64

<a id="M08-CAP-IMAGING-55ba463df72f3316"></a>
- **M08-CAP-IMAGING-55ba463df72f3316**: Siemens syngo
  Origin: original 64

<a id="M08-CAP-IMAGING-fb7f7d9ae193b299"></a>
- **M08-CAP-IMAGING-fb7f7d9ae193b299**: Agfa IMPAX
  Origin: original 64

<a id="M08-CAP-IMAGING-f7a49e1443fda169"></a>
- **M08-CAP-IMAGING-f7a49e1443fda169**: Fujifilm Synapse
  Origin: original 64

<a id="M08-CAP-IMAGING-60e1c3a46d7ba1dd"></a>
- **M08-CAP-IMAGING-60e1c3a46d7ba1dd**: Sectra PACS
  Origin: original 64

<a id="M08-CAP-IMAGING-9a2f04eaf5a9891b"></a>
- **M08-CAP-IMAGING-9a2f04eaf5a9891b**: DICOM C-STORE
  Origin: original 64

<a id="M08-CAP-IMAGING-c3292cf94f0b98f0"></a>
- **M08-CAP-IMAGING-c3292cf94f0b98f0**: DICOM C-FIND
  Origin: original 64

<a id="M08-CAP-IMAGING-7c6466abde154268"></a>
- **M08-CAP-IMAGING-7c6466abde154268**: DICOM C-MOVE
  Origin: original 64

<a id="M08-CAP-IMAGING-d92a7b141e2ab5f0"></a>
- **M08-CAP-IMAGING-d92a7b141e2ab5f0**: DICOM C-GET
  Origin: original 64

<a id="M08-CAP-IMAGING-7d6a4b4769a36649"></a>
- **M08-CAP-IMAGING-7d6a4b4769a36649**: DICOMweb
  Origin: original 64

<a id="M08-CAP-IMAGING-4ecf6ff516055603"></a>
- **M08-CAP-IMAGING-4ecf6ff516055603**: WADO-RS
  Origin: original 64

<a id="M08-CAP-IMAGING-7d11639078d537f9"></a>
- **M08-CAP-IMAGING-7d11639078d537f9**: STOW-RS
  Origin: original 64

<a id="M08-CAP-IMAGING-94171f9ea01b72ae"></a>
- **M08-CAP-IMAGING-94171f9ea01b72ae**: QIDO-RS
  Origin: original 64

<a id="M08-CAP-IMAGING-bf2b260ee7b65deb"></a>
- **M08-CAP-IMAGING-bf2b260ee7b65deb**: Hospital PACS
  Origin: original 64

<a id="M08-CAP-IMAGING-a45388b980cd3ef3"></a>
- **M08-CAP-IMAGING-a45388b980cd3ef3**: Secure Gateway
  Origin: original 64

<a id="M08-CAP-IMAGING-cfc348b65a00f0f3"></a>
- **M08-CAP-IMAGING-cfc348b65a00f0f3**: Image Metadata
  Origin: original 64

<a id="M08-CAP-IMAGING-a8f8ef194dfe4dd4"></a>
- **M08-CAP-IMAGING-a8f8ef194dfe4dd4**: Image Viewer
  Origin: original 64

<a id="M08-CAP-IMAGING-250109bd0df56080"></a>
- **M08-CAP-IMAGING-250109bd0df56080**: Patient Profile
  Origin: original 64

<a id="M08-CAP-IMAGING-7d93f5cc7432cd8c"></a>
- **M08-CAP-IMAGING-7d93f5cc7432cd8c**: Automatic Import
  Origin: original 64

<a id="M08-CAP-IMAGING-51c0ef95c9427ad5"></a>
- **M08-CAP-IMAGING-51c0ef95c9427ad5**: Manual Import
  Origin: original 64

<a id="M08-CAP-IMAGING-2f30cb7f6c1afa50"></a>
- **M08-CAP-IMAGING-2f30cb7f6c1afa50**: Scheduled Synchronization
  Origin: original 64

<a id="M08-CAP-IMAGING-5dfc69bac5d2c737"></a>
- **M08-CAP-IMAGING-5dfc69bac5d2c737**: Incremental Updates
  Origin: original 64

<a id="M08-CAP-IMAGING-d30be18ad5d6bd8e"></a>
- **M08-CAP-IMAGING-d30be18ad5d6bd8e**: Metadata Validation
  Origin: original 64

<a id="M08-CAP-IMAGING-b32eb85fa798afa8"></a>
- **M08-CAP-IMAGING-b32eb85fa798afa8**: Dental
  Origin: original 64

<a id="M08-CAP-IMAGING-9395a63c8437ed7a"></a>
- **M08-CAP-IMAGING-9395a63c8437ed7a**: ECG Images
  Origin: original 64

<a id="M08-CAP-IMAGING-e94f74274bdad308"></a>
- **M08-CAP-IMAGING-e94f74274bdad308**: Comparison with Previous Exams
  Origin: original 64

<a id="M08-CAP-IMAGING-8b6a592f4af9804a"></a>
- **M08-CAP-IMAGING-8b6a592f4af9804a**: AI Medical Summary
  Origin: original 64

<a id="M08-CAP-IMAGING-a6421e8b8869577a"></a>
- **M08-CAP-IMAGING-a6421e8b8869577a**: Image Quality Assessment
  Origin: original 64

<a id="M08-CAP-IMAGING-bc012269eef59f3c"></a>
- **M08-CAP-IMAGING-bc012269eef59f3c**: VPN
  Origin: original 64

<a id="M08-CAP-IMAGING-427804ac0f355d8b"></a>
- **M08-CAP-IMAGING-427804ac0f355d8b**: DICOM TLS
  Origin: original 64

<a id="M08-CAP-IMAGING-efa55b16ffd6b66c"></a>
- **M08-CAP-IMAGING-efa55b16ffd6b66c**: AES-256
  Origin: original 64

<a id="M08-CAP-IMAGING-bb76c2ec1e2674bf"></a>
- **M08-CAP-IMAGING-bb76c2ec1e2674bf**: Access Control
  Origin: original 64

<a id="M08-CAP-IMAGING-adc39bd7dace31c7"></a>
- **M08-CAP-IMAGING-adc39bd7dace31c7**: ├── DICOM Module
  Origin: original 64

<a id="M08-CAP-IMAGING-2b75d43a37d69353"></a>
- **M08-CAP-IMAGING-2b75d43a37d69353**: Real-time PACS Synchronization
  Origin: original 64

<a id="M08-CAP-IMAGING-99dad6a9cf2d8292"></a>
- **M08-CAP-IMAGING-99dad6a9cf2d8292**: Multi-hospital PACS Support
  Origin: original 64

<a id="M08-CAP-IMAGING-6337f432200bcf65"></a>
- **M08-CAP-IMAGING-6337f432200bcf65**: Cloud PACS
  Origin: original 64

<a id="M08-CAP-IMAGING-ccd0149384be8ae6"></a>
- **M08-CAP-IMAGING-ccd0149384be8ae6**: AI Radiology Workflow
  Origin: original 64

<a id="M08-CAP-IMAGING-df4ca3ac593b07e8"></a>
- **M08-CAP-IMAGING-df4ca3ac593b07e8**: Federated Medical Imaging
  Origin: original 64

<a id="M08-CAP-IMAGING-f3a344e0e5d843e7"></a>
- **M08-CAP-IMAGING-f3a344e0e5d843e7**: International Image Exchange
  Origin: original 64

<a id="M08-CAP-IMAGING-402f14a78f08600c"></a>
- **M08-CAP-IMAGING-402f14a78f08600c**: Stores pediatric echocardiograms.
  Origin: original 846

<a id="M08-CAP-IMAGING-6fdf6fb507eec070"></a>
- **M08-CAP-IMAGING-6fdf6fb507eec070**: Images
  Origin: original 846

<a id="M08-CAP-IMAGING-3f46ddfc482453ec"></a>
- **M08-CAP-IMAGING-3f46ddfc482453ec**: Physician Reports
  Origin: original 846

<a id="M08-CAP-IMAGING-1f33c55afec2bda4"></a>
- **M08-CAP-IMAGING-1f33c55afec2bda4**: Stores chest imaging.
  Origin: original 912

<a id="M08-CAP-IMAGING-332b4ec3b65fa2c7"></a>
- **M08-CAP-IMAGING-332b4ec3b65fa2c7**: X-ray
  Origin: original 912, original 1129

<a id="M08-CAP-IMAGING-85bdcde05bd8c20a"></a>
- **M08-CAP-IMAGING-85bdcde05bd8c20a**: Stores abdominal ultrasound examinations.
  Origin: original 950

<a id="M08-CAP-IMAGING-0c0260ea6dd315fa"></a>
- **M08-CAP-IMAGING-0c0260ea6dd315fa**: Liver
  Origin: original 950

<a id="M08-CAP-IMAGING-5c962e0c63da80d5"></a>
- **M08-CAP-IMAGING-5c962e0c63da80d5**: Gallbladder
  Origin: original 950

<a id="M08-CAP-IMAGING-0ed4298f97f0e72b"></a>
- **M08-CAP-IMAGING-0ed4298f97f0e72b**: Pancreas
  Origin: original 950

<a id="M08-CAP-IMAGING-a71f11c40ea7e423"></a>
- **M08-CAP-IMAGING-a71f11c40ea7e423**: Intestines
  Origin: original 950

<a id="M08-CAP-IMAGING-40f5dd84e8ee142f"></a>
- **M08-CAP-IMAGING-40f5dd84e8ee142f**: Spleen
  Origin: original 950

<a id="M08-CAP-IMAGING-c2fb81759ca03b20"></a>
- **M08-CAP-IMAGING-c2fb81759ca03b20**: Stores preoperative and postoperative imaging.
  Origin: original 1129

<a id="M08-CAP-IMAGING-9a2135cf438e2d08"></a>
- **M08-CAP-IMAGING-9a2135cf438e2d08**: Maintains neonatal imaging.
  Origin: original 2357, original 3269

<a id="M08-CAP-IMAGING-0555e089ed694337"></a>
- **M08-CAP-IMAGING-0555e089ed694337**: Maintains neonatal imaging studies.
  Origin: original 3029

<a id="M08-CAP-IMAGING-fb2abfb205839aa6"></a>
- **M08-CAP-IMAGING-fb2abfb205839aa6**: Cranial Ultrasound
  Origin: original 3029, original 3269

<a id="M08-CAP-IMAGING-7180e4fffcb65860"></a>
- **M08-CAP-IMAGING-7180e4fffcb65860**: Echocardiography
  Origin: original 3029, original 3069, original 3269, original 3671

<a id="M08-CAP-IMAGING-7a876b075a72a524"></a>
- **M08-CAP-IMAGING-7a876b075a72a524**: Chest X-ray
  Origin: original 3029, original 3190, original 3269, original 3371, original 4466

<a id="M08-CAP-IMAGING-4921e9ac4e17165a"></a>
- **M08-CAP-IMAGING-4921e9ac4e17165a**: AI Imaging Analysis
  Origin: original 3029, original 3069, original 3129, original 3170, original 3190

<a id="M08-CAP-IMAGING-941ab313ddea6b50"></a>
- **M08-CAP-IMAGING-941ab313ddea6b50**: Supports pediatric cardiac ultrasound.
  Origin: original 3064

<a id="M08-CAP-IMAGING-b72d61cc347de0c5"></a>
- **M08-CAP-IMAGING-b72d61cc347de0c5**: Structural Assessment
  Origin: original 3064, original 3664

<a id="M08-CAP-IMAGING-a87317df355ce88a"></a>
- **M08-CAP-IMAGING-a87317df355ce88a**: Doppler Analysis
  Origin: original 3064

<a id="M08-CAP-IMAGING-ad7848b8f593a316"></a>
- **M08-CAP-IMAGING-ad7848b8f593a316**: Ventricular Function
  Origin: original 3064, original 3664, original 4064

<a id="M08-CAP-IMAGING-e6224b8891af24b4"></a>
- **M08-CAP-IMAGING-e6224b8891af24b4**: Valve Assessment
  Origin: original 3064, original 3664, original 4064

<a id="M08-CAP-IMAGING-f91041d138c8cbef"></a>
- **M08-CAP-IMAGING-f91041d138c8cbef**: Congenital Heart Evaluation
  Origin: original 3064

<a id="M08-CAP-IMAGING-2976e626693d486e"></a>
- **M08-CAP-IMAGING-2976e626693d486e**: Integrated with AI-assisted image interpretation.
  Origin: original 3064

<a id="M08-CAP-IMAGING-0f1cf125a4110a7b"></a>
- **M08-CAP-IMAGING-0f1cf125a4110a7b**: Maintains pediatric cardiac imaging.
  Origin: original 3069, original 3671

<a id="M08-CAP-IMAGING-2c1cd1dbd936df5f"></a>
- **M08-CAP-IMAGING-2c1cd1dbd936df5f**: Cardiac Catheterization
  Origin: original 3069

<a id="M08-CAP-IMAGING-011a0ea1ae377553"></a>
- **M08-CAP-IMAGING-011a0ea1ae377553**: Maintains pediatric oncology imaging.
  Origin: original 3129

<a id="M08-CAP-IMAGING-171b4a73c61b59ea"></a>
- **M08-CAP-IMAGING-171b4a73c61b59ea**: PET/CT
  Origin: original 3129

<a id="M08-CAP-IMAGING-0d41c989e57e287e"></a>
- **M08-CAP-IMAGING-0d41c989e57e287e**: Nuclear Medicine
  Origin: original 3129, original 4224

<a id="M08-CAP-IMAGING-bc5ce7424fde048f"></a>
- **M08-CAP-IMAGING-bc5ce7424fde048f**: Maintains pathology data.
  Origin: original 3130

<a id="M08-CAP-IMAGING-78d0334ae8346a4e"></a>
- **M08-CAP-IMAGING-78d0334ae8346a4e**: Histopathology
  Origin: original 3130

<a id="M08-CAP-IMAGING-32c488e1a82f5c54"></a>
- **M08-CAP-IMAGING-32c488e1a82f5c54**: Immunohistochemistry
  Origin: original 3130, original 4222

<a id="M08-CAP-IMAGING-35e82482e599129e"></a>
- **M08-CAP-IMAGING-35e82482e599129e**: Molecular Pathology
  Origin: original 3130

<a id="M08-CAP-IMAGING-8fc49378bfabe721"></a>
- **M08-CAP-IMAGING-8fc49378bfabe721**: Cytogenetics
  Origin: original 3130

<a id="M08-CAP-IMAGING-0b04898cf7712f7f"></a>
- **M08-CAP-IMAGING-0b04898cf7712f7f**: Digital Pathology
  Origin: original 3130

<a id="M08-CAP-IMAGING-1524c734fa59c25f"></a>
- **M08-CAP-IMAGING-1524c734fa59c25f**: Maintains gastrointestinal imaging.
  Origin: original 3170, original 3290

<a id="M08-CAP-IMAGING-7b572796ef017271"></a>
- **M08-CAP-IMAGING-7b572796ef017271**: Fluoroscopy
  Origin: original 3170

<a id="M08-CAP-IMAGING-6144449757072ce3"></a>
- **M08-CAP-IMAGING-6144449757072ce3**: Maintains pulmonary imaging.
  Origin: original 3190, original 3371

<a id="M08-CAP-IMAGING-647478a9201e5ed6"></a>
- **M08-CAP-IMAGING-647478a9201e5ed6**: Lung Ultrasound
  Origin: original 3190, original 3371

<a id="M08-CAP-IMAGING-23cb5b848c6347ef"></a>
- **M08-CAP-IMAGING-23cb5b848c6347ef**: AI Image Analysis
  Origin: original 3269, original 3290, original 3450, original 3671

<a id="M08-CAP-IMAGING-590369369c402e65"></a>
- **M08-CAP-IMAGING-590369369c402e65**: Contrast Studies
  Origin: original 3290, original 3450, original 4524

<a id="M08-CAP-IMAGING-4b512277a9cdecef"></a>
- **M08-CAP-IMAGING-4b512277a9cdecef**: AI Image Interpretation
  Origin: original 3371

<a id="M08-CAP-IMAGING-d058bf95982b1284"></a>
- **M08-CAP-IMAGING-d058bf95982b1284**: Maintains GI imaging.
  Origin: original 3450

<a id="M08-CAP-IMAGING-66a9a069f4839641"></a>
- **M08-CAP-IMAGING-66a9a069f4839641**: Supports pediatric echocardiography.
  Origin: original 3664, original 4064

<a id="M08-CAP-IMAGING-a7df007fa2d9340b"></a>
- **M08-CAP-IMAGING-a7df007fa2d9340b**: Doppler Studies
  Origin: original 3664

<a id="M08-CAP-IMAGING-05064cd5efcbe97e"></a>
- **M08-CAP-IMAGING-05064cd5efcbe97e**: AI-assisted Echo Analysis
  Origin: original 3664

<a id="M08-CAP-IMAGING-c0563b9377b05194"></a>
- **M08-CAP-IMAGING-c0563b9377b05194**: Cardiac MRI
  Origin: original 3671, original 4070

<a id="M08-CAP-IMAGING-ccdf0186fa32f073"></a>
- **M08-CAP-IMAGING-ccdf0186fa32f073**: CT Angiography
  Origin: original 3671

<a id="M08-CAP-IMAGING-ad2241fbe5a55963"></a>
- **M08-CAP-IMAGING-ad2241fbe5a55963**: Nuclear Cardiology
  Origin: original 3671

<a id="M08-CAP-IMAGING-1e87572b1cf62ff2"></a>
- **M08-CAP-IMAGING-1e87572b1cf62ff2**: 2D Echocardiography
  Origin: original 4064

<a id="M08-CAP-IMAGING-55cc43dc5e835bb6"></a>
- **M08-CAP-IMAGING-55cc43dc5e835bb6**: Doppler
  Origin: original 4064

<a id="M08-CAP-IMAGING-c1a722a0392f4032"></a>
- **M08-CAP-IMAGING-c1a722a0392f4032**: Chamber Measurements
  Origin: original 4064

<a id="M08-CAP-IMAGING-daa3dc46e8e5ce2f"></a>
- **M08-CAP-IMAGING-daa3dc46e8e5ce2f**: Congenital Anatomy
  Origin: original 4064, original 4070

<a id="M08-CAP-IMAGING-7fa79dce2b8d7e98"></a>
- **M08-CAP-IMAGING-7fa79dce2b8d7e98**: Longitudinal Comparison
  Origin: original 4064, original 4224

<a id="M08-CAP-IMAGING-a45bcb39e35f4930"></a>
- **M08-CAP-IMAGING-a45bcb39e35f4930**: AI-assisted Image Analysis
  Origin: original 4064

<a id="M08-CAP-IMAGING-534838f6d56ae8fd"></a>
- **M08-CAP-IMAGING-534838f6d56ae8fd**: Maintains advanced pediatric cardiac imaging.
  Origin: original 4070

<a id="M08-CAP-IMAGING-5594d1a0a5fc83c3"></a>
- **M08-CAP-IMAGING-5594d1a0a5fc83c3**: Cardiac CT
  Origin: original 4070

<a id="M08-CAP-IMAGING-58a87a4307a14734"></a>
- **M08-CAP-IMAGING-58a87a4307a14734**: 3D Reconstruction
  Origin: original 4070

<a id="M08-CAP-IMAGING-d84c59358a80e2e5"></a>
- **M08-CAP-IMAGING-d84c59358a80e2e5**: Ventricular Volumes
  Origin: original 4070

<a id="M08-CAP-IMAGING-b1d36683496336e7"></a>
- **M08-CAP-IMAGING-b1d36683496336e7**: Myocardial Assessment
  Origin: original 4070

<a id="M08-CAP-IMAGING-8e3285b1b1f8d30a"></a>
- **M08-CAP-IMAGING-8e3285b1b1f8d30a**: Longitudinal Imaging Comparison
  Origin: original 4070

<a id="M08-CAP-IMAGING-496d53796ec68d5a"></a>
- **M08-CAP-IMAGING-496d53796ec68d5a**: Supports digital pathology.
  Origin: original 4222

<a id="M08-CAP-IMAGING-c93ca9e253d8f844"></a>
- **M08-CAP-IMAGING-c93ca9e253d8f844**: Whole-slide Imaging
  Origin: original 4222

<a id="M08-CAP-IMAGING-32ffc096d55d159d"></a>
- **M08-CAP-IMAGING-32ffc096d55d159d**: Histology
  Origin: original 4222

<a id="M08-CAP-IMAGING-49c05b1bc24cb43e"></a>
- **M08-CAP-IMAGING-49c05b1bc24cb43e**: Annotation
  Origin: original 4222

<a id="M08-CAP-IMAGING-18b204a560e24d64"></a>
- **M08-CAP-IMAGING-18b204a560e24d64**: Molecular Correlation
  Origin: original 4222

<a id="M08-CAP-IMAGING-a930cd821cb4d457"></a>
- **M08-CAP-IMAGING-a930cd821cb4d457**: AI-assisted Pattern Analysis
  Origin: original 4222

<a id="M08-CAP-IMAGING-f0eb3c9e0b167a44"></a>
- **M08-CAP-IMAGING-f0eb3c9e0b167a44**: Expert Review
  Origin: original 4222

<a id="M08-CAP-IMAGING-15ec951541883adc"></a>
- **M08-CAP-IMAGING-15ec951541883adc**: Integrates oncology imaging.
  Origin: original 4224

<a id="M08-CAP-IMAGING-086097fc4d51570f"></a>
- **M08-CAP-IMAGING-086097fc4d51570f**: Tumor Measurements
  Origin: original 4224

<a id="M08-CAP-IMAGING-f5d67595b8e2d779"></a>
- **M08-CAP-IMAGING-f5d67595b8e2d779**: Response Assessment
  Origin: original 4224

<a id="M08-CAP-IMAGING-dcdbe989948cfa11"></a>
- **M08-CAP-IMAGING-dcdbe989948cfa11**: Integrates respiratory imaging into longitudinal care.
  Origin: original 4466

<a id="M08-CAP-IMAGING-47fb4ac09c18574f"></a>
- **M08-CAP-IMAGING-47fb4ac09c18574f**: Airway Imaging
  Origin: original 4466

<a id="M08-CAP-IMAGING-816f49494ba8a0c9"></a>
- **M08-CAP-IMAGING-816f49494ba8a0c9**: Historical Comparison
  Origin: original 4466, original 4524, original 5128

<a id="M08-CAP-IMAGING-0844c26e8c3772e7"></a>
- **M08-CAP-IMAGING-0844c26e8c3772e7**: Radiology Reports
  Origin: original 4466, original 4524

<a id="M08-CAP-IMAGING-a593fb90edf6e967"></a>
- **M08-CAP-IMAGING-a593fb90edf6e967**: AI-assisted Analysis
  Origin: original 4466

<a id="M08-CAP-IMAGING-be486385f2752393"></a>
- **M08-CAP-IMAGING-be486385f2752393**: Integrates gastrointestinal imaging.
  Origin: original 4524

<a id="M08-CAP-IMAGING-49884d769caa6639"></a>
- **M08-CAP-IMAGING-49884d769caa6639**: Radiography
  Origin: original 4524

<a id="M08-CAP-IMAGING-3ea0837d2011db09"></a>
- **M08-CAP-IMAGING-3ea0837d2011db09**: MR Enterography
  Origin: original 4524

<a id="M08-CAP-IMAGING-8d7e08e5008f78ce"></a>
- **M08-CAP-IMAGING-8d7e08e5008f78ce**: Create a longitudinal imaging environment for pediatric CNS tumor assessment and surveillance.
  Origin: original 5128

<a id="M08-CAP-IMAGING-89dd76f51c9d54a5"></a>
- **M08-CAP-IMAGING-89dd76f51c9d54a5**: MRI Study Registry
  Origin: original 5128

<a id="M08-CAP-IMAGING-11d218592356710e"></a>
- **M08-CAP-IMAGING-11d218592356710e**: CT Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-a04becd171370428"></a>
- **M08-CAP-IMAGING-a04becd171370428**: Tumor Location
  Origin: original 5128

<a id="M08-CAP-IMAGING-7c2abb882f080401"></a>
- **M08-CAP-IMAGING-7c2abb882f080401**: Tumor Dimensions
  Origin: original 5128

<a id="M08-CAP-IMAGING-1ec7c0957cf73575"></a>
- **M08-CAP-IMAGING-1ec7c0957cf73575**: Tumor Volume Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-3ec174c29528fda0"></a>
- **M08-CAP-IMAGING-3ec174c29528fda0**: Enhancement Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-7bb561cb207fe5e3"></a>
- **M08-CAP-IMAGING-7bb561cb207fe5e3**: Edema Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-0aacddd60c43f216"></a>
- **M08-CAP-IMAGING-0aacddd60c43f216**: Mass Effect Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-87ac89009bcd4da6"></a>
- **M08-CAP-IMAGING-87ac89009bcd4da6**: Hydrocephalus Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-37b2f77d6e5d73c7"></a>
- **M08-CAP-IMAGING-37b2f77d6e5d73c7**: Spinal Dissemination Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-1534f05abe23e7bb"></a>
- **M08-CAP-IMAGING-1534f05abe23e7bb**: Postoperative Imaging
  Origin: original 5128

<a id="M08-CAP-IMAGING-8cdbf62e785a0501"></a>
- **M08-CAP-IMAGING-8cdbf62e785a0501**: Treatment-response Imaging
  Origin: original 5128

<a id="M08-CAP-IMAGING-7cefc21ee789ce91"></a>
- **M08-CAP-IMAGING-7cefc21ee789ce91**: Surveillance Imaging
  Origin: original 5128

<a id="M08-CAP-IMAGING-0a8ec2e08095ee37"></a>
- **M08-CAP-IMAGING-0a8ec2e08095ee37**: Progression Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-f3a42e97da41faab"></a>
- **M08-CAP-IMAGING-f3a42e97da41faab**: Digital Functions:
  Origin: original 5128

<a id="M08-CAP-IMAGING-d90a28951ea31efe"></a>
- **M08-CAP-IMAGING-d90a28951ea31efe**: Imaging Timeline
  Origin: original 5128

<a id="M08-CAP-IMAGING-6f09955c79562254"></a>
- **M08-CAP-IMAGING-6f09955c79562254**: Lesion Tracking
  Origin: original 5128

<a id="M08-CAP-IMAGING-b17ea15d20f53f60"></a>
- **M08-CAP-IMAGING-b17ea15d20f53f60**: Measurement History
  Origin: original 5128

<a id="M08-CAP-IMAGING-c9dd7e28fd1cd391"></a>
- **M08-CAP-IMAGING-c9dd7e28fd1cd391**: Treatment Overlay
  Origin: original 5128

<a id="M08-CAP-IMAGING-72ec7f1d880d6629"></a>
- **M08-CAP-IMAGING-72ec7f1d880d6629**: Surgery Overlay
  Origin: original 5128

<a id="M08-CAP-IMAGING-c0b4085d48feddc9"></a>
- **M08-CAP-IMAGING-c0b4085d48feddc9**: Radiotherapy Overlay
  Origin: original 5128

<a id="M08-CAP-IMAGING-fb7dcbc64a7ed5f8"></a>
- **M08-CAP-IMAGING-fb7dcbc64a7ed5f8**: AI Functions:
  Origin: original 5128

<a id="M08-CAP-IMAGING-971cb1a7d3b07fa6"></a>
- **M08-CAP-IMAGING-971cb1a7d3b07fa6**: Image Comparison Support
  Origin: original 5128

<a id="M08-CAP-IMAGING-03c0f22f1e8f1c6f"></a>
- **M08-CAP-IMAGING-03c0f22f1e8f1c6f**: Lesion Segmentation Context
  Origin: original 5128

<a id="M08-CAP-IMAGING-67962c5f1da5f925"></a>
- **M08-CAP-IMAGING-67962c5f1da5f925**: Volumetric Trend Support
  Origin: original 5128

<a id="M08-CAP-IMAGING-123bf65addeb2e8a"></a>
- **M08-CAP-IMAGING-123bf65addeb2e8a**: Change Detection Assistance
  Origin: original 5128

<a id="M08-CAP-IMAGING-07f8d474b8b4141c"></a>
- **M08-CAP-IMAGING-07f8d474b8b4141c**: Safety:
  Origin: original 5128

<a id="M08-CAP-IMAGING-80990b8a37b9339d"></a>
- **M08-CAP-IMAGING-80990b8a37b9339d**: Formal radiological interpretation remains clinician-led.
  Origin: original 5128

## Preserved source metadata

<a id="M08-CAP-IMAGING-fdd415036302fa71"></a>
- **M08-CAP-IMAGING-fdd415036302fa71**: # DICOM Integration Architecture

<a id="M08-CAP-IMAGING-2f5fdcca89ef8e56"></a>
- **M08-CAP-IMAGING-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-IMAGING-6f33acf3afb37064"></a>
- **M08-CAP-IMAGING-6f33acf3afb37064**: ---

<a id="M08-CAP-IMAGING-a746a709c39e7f27"></a>
- **M08-CAP-IMAGING-a746a709c39e7f27**: # Supported Modalities

<a id="M08-CAP-IMAGING-f349346e257ad7c7"></a>
- **M08-CAP-IMAGING-f349346e257ad7c7**: # Supported Operations

<a id="M08-CAP-IMAGING-e42ad98d3990c499"></a>
- **M08-CAP-IMAGING-e42ad98d3990c499**: # Workflow

<a id="M08-CAP-IMAGING-893fc72dca689b73"></a>
- **M08-CAP-IMAGING-893fc72dca689b73**: # Metadata

<a id="M08-CAP-IMAGING-8685730e9e02e3a4"></a>
- **M08-CAP-IMAGING-8685730e9e02e3a4**: # Viewer Features

<a id="M08-CAP-IMAGING-7a365d914338b8d3"></a>
- **M08-CAP-IMAGING-7a365d914338b8d3**: # AI Features

<a id="M08-CAP-IMAGING-efc101e38d418651"></a>
- **M08-CAP-IMAGING-efc101e38d418651**: # Security

<a id="M08-CAP-IMAGING-9879a69a15c5a50a"></a>
- **M08-CAP-IMAGING-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-IMAGING-5ba74d8fcc7b20cc"></a>
- **M08-CAP-IMAGING-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-IMAGING-d5232cbd3a326267"></a>
- **M08-CAP-IMAGING-d5232cbd3a326267**: Documentation

<a id="M08-CAP-IMAGING-172cf21168bca864"></a>
- **M08-CAP-IMAGING-172cf21168bca864**: # PACS Integration Architecture

<a id="M08-CAP-IMAGING-44efce5df66d89b9"></a>
- **M08-CAP-IMAGING-44efce5df66d89b9**: # Supported PACS

<a id="M08-CAP-IMAGING-82a6478d7e5aca0b"></a>
- **M08-CAP-IMAGING-82a6478d7e5aca0b**: # Supported Protocols

<a id="M08-CAP-IMAGING-57bf0b8ec040b0e2"></a>
- **M08-CAP-IMAGING-57bf0b8ec040b0e2**: # Synchronization

<a id="M08-CAP-IMAGING-56d17fdd343970f2"></a>
- **M08-CAP-IMAGING-56d17fdd343970f2**: # Image Types

<a id="M08-CAP-IMAGING-75776c7c59e053c3"></a>
- **M08-CAP-IMAGING-75776c7c59e053c3**: # AI Processing

<a id="M08-CAP-IMAGING-65a310f591de3535"></a>
- **M08-CAP-IMAGING-65a310f591de3535**: # Pediatric Echocardiography Archive

<a id="M08-CAP-IMAGING-4fbeeb87456accf5"></a>
- **M08-CAP-IMAGING-4fbeeb87456accf5**: Supports

<a id="M08-CAP-IMAGING-1155c69caf4dc384"></a>
- **M08-CAP-IMAGING-1155c69caf4dc384**: # Pediatric Lung Imaging Archive

<a id="M08-CAP-IMAGING-55b9f810ea601ea1"></a>
- **M08-CAP-IMAGING-55b9f810ea601ea1**: # Pediatric Abdominal Ultrasound Archive

<a id="M08-CAP-IMAGING-08ceb8d369ae3ffe"></a>
- **M08-CAP-IMAGING-08ceb8d369ae3ffe**: # Pediatric Surgical Imaging Archive

<a id="M08-CAP-IMAGING-6510c5c511a879bc"></a>
- **M08-CAP-IMAGING-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-IMAGING-b34f593f0f83a1d1"></a>
- **M08-CAP-IMAGING-b34f593f0f83a1d1**: Core Functions:

<a id="M08-CAP-IMAGING-b88b375a44ccd619"></a>
- **M08-CAP-IMAGING-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
