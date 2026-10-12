# CORE-CAP-DOCUMENTS — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: DocumentMetadata, BlobReference, IntegrityHash, QuarantineState, DerivativeLineage. Dependencies: CAP-DOCUMENTS, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Authorize upload → quarantine and inspect media → checksum immutable original → approve scoped metadata → derive separately attributed OCR/translation → reauthorize each access → apply versioned retention to originals and derivatives. Extracted content is not verified clinical fact.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M08-DOCUMENTS

Original IDs: 12, 37, 39, 40.

Document metadata/storage/media and OCR are shared original/derivative lifecycle profiles. Preserve MIME/hash, source issue/expiry/provider, scan/quarantine, immutable originals, thumbnails, OCR/translation/model lineage and all legacy formats/features. Extracted dose/signature text is unverified; storage_path and signed URLs are not public record fields.

Authorize upload → quarantine and inspect media → checksum immutable original → approve scoped metadata → derive separately attributed OCR/translation → reauthorize each access → apply versioned retention to originals and derivatives. Extracted content is not verified clinical fact.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-DOCUMENTS-6e985ad82ea9c57f"></a>
- **M08-CAP-DOCUMENTS-6e985ad82ea9c57f**: Stores all medical documents uploaded by the user.
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-c91610423a46692c"></a>
- **M08-CAP-DOCUMENTS-c91610423a46692c**: id (UUID)
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-ff6fb316f9bc6c33"></a>
- **M08-CAP-DOCUMENTS-ff6fb316f9bc6c33**: user_id
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-c559823f6e5c0162"></a>
- **M08-CAP-DOCUMENTS-c559823f6e5c0162**: medical_profile_id
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-25e1b646ed36b9b2"></a>
- **M08-CAP-DOCUMENTS-25e1b646ed36b9b2**: document_type
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-ce330b54bda8bbff"></a>
- **M08-CAP-DOCUMENTS-ce330b54bda8bbff**: title
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-dcc7c3eb359a623e"></a>
- **M08-CAP-DOCUMENTS-dcc7c3eb359a623e**: description
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-59652776c4e11795"></a>
- **M08-CAP-DOCUMENTS-59652776c4e11795**: file_name
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-d80985c9cb34d88c"></a>
- **M08-CAP-DOCUMENTS-d80985c9cb34d88c**: file_extension
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-c9c1a134bbacb401"></a>
- **M08-CAP-DOCUMENTS-c9c1a134bbacb401**: file_size
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-a7bbb33d2dea74f1"></a>
- **M08-CAP-DOCUMENTS-a7bbb33d2dea74f1**: mime_type
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-7d45ae86c8aad1c3"></a>
- **M08-CAP-DOCUMENTS-7d45ae86c8aad1c3**: storage_path
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-a8726a5d2ebb44e0"></a>
- **M08-CAP-DOCUMENTS-a8726a5d2ebb44e0**: thumbnail_path
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-1163ac1af359a20d"></a>
- **M08-CAP-DOCUMENTS-1163ac1af359a20d**: document_language
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-279b8e2e406a1c66"></a>
- **M08-CAP-DOCUMENTS-279b8e2e406a1c66**: translated_language
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-accb62e35da36651"></a>
- **M08-CAP-DOCUMENTS-accb62e35da36651**: country_of_origin
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-d8781eb949ab5813"></a>
- **M08-CAP-DOCUMENTS-d8781eb949ab5813**: hospital_id
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-faea4e7b11fd2247"></a>
- **M08-CAP-DOCUMENTS-faea4e7b11fd2247**: doctor_id
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-855a0f8094ffe144"></a>
- **M08-CAP-DOCUMENTS-855a0f8094ffe144**: issue_date
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-1cfa0ddc7ba774e5"></a>
- **M08-CAP-DOCUMENTS-1cfa0ddc7ba774e5**: expiration_date
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-6690340ee2407973"></a>
- **M08-CAP-DOCUMENTS-6690340ee2407973**: is_verified
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-b0c94635c46008b2"></a>
- **M08-CAP-DOCUMENTS-b0c94635c46008b2**: is_translated
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-e01e367ba60353a8"></a>
- **M08-CAP-DOCUMENTS-e01e367ba60353a8**: ocr_completed
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-6f9b091b13a87018"></a>
- **M08-CAP-DOCUMENTS-6f9b091b13a87018**: ai_processed
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-8ef84ba64e76679f"></a>
- **M08-CAP-DOCUMENTS-8ef84ba64e76679f**: qr_available
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-bcc951dbdead2bf5"></a>
- **M08-CAP-DOCUMENTS-bcc951dbdead2bf5**: created_at
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-51db2c3a3a174a78"></a>
- **M08-CAP-DOCUMENTS-51db2c3a3a174a78**: updated_at
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-24f5c88a3f294930"></a>
- **M08-CAP-DOCUMENTS-24f5c88a3f294930**: Prescriptions
  Origin: original 12, original 39

<a id="M08-CAP-DOCUMENTS-71f790fdf94f9c10"></a>
- **M08-CAP-DOCUMENTS-71f790fdf94f9c10**: Laboratory Results
  Origin: original 12, original 37, original 39

<a id="M08-CAP-DOCUMENTS-fe0c074aabb61001"></a>
- **M08-CAP-DOCUMENTS-fe0c074aabb61001**: Blood Tests
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-2663978a32c6d34f"></a>
- **M08-CAP-DOCUMENTS-2663978a32c6d34f**: MRI
  Origin: original 12, original 40

<a id="M08-CAP-DOCUMENTS-7bc7f92cb128242c"></a>
- **M08-CAP-DOCUMENTS-7bc7f92cb128242c**: CT
  Origin: original 12, original 40

<a id="M08-CAP-DOCUMENTS-b643882bdf3bd937"></a>
- **M08-CAP-DOCUMENTS-b643882bdf3bd937**: X-Ray
  Origin: original 12, original 40

<a id="M08-CAP-DOCUMENTS-5032f26f1a690cb2"></a>
- **M08-CAP-DOCUMENTS-5032f26f1a690cb2**: Ultrasound
  Origin: original 12, original 40

<a id="M08-CAP-DOCUMENTS-0db3379ed4d9ccfa"></a>
- **M08-CAP-DOCUMENTS-0db3379ed4d9ccfa**: ECG
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-1963c78c9e1438a0"></a>
- **M08-CAP-DOCUMENTS-1963c78c9e1438a0**: Vaccination Certificates
  Origin: original 12, original 39

<a id="M08-CAP-DOCUMENTS-2d052ebdee2572b1"></a>
- **M08-CAP-DOCUMENTS-2d052ebdee2572b1**: Medical Reports
  Origin: original 12, original 37

<a id="M08-CAP-DOCUMENTS-f011f0223b828093"></a>
- **M08-CAP-DOCUMENTS-f011f0223b828093**: Discharge Summaries
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-4d8a9079b91b59ed"></a>
- **M08-CAP-DOCUMENTS-4d8a9079b91b59ed**: Insurance Documents
  Origin: original 12, original 39

<a id="M08-CAP-DOCUMENTS-70d64774c5d447de"></a>
- **M08-CAP-DOCUMENTS-70d64774c5d447de**: Disability Certificates
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-496cd4619eb9666d"></a>
- **M08-CAP-DOCUMENTS-496cd4619eb9666d**: Medical Document
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-46172ef655d51ea4"></a>
- **M08-CAP-DOCUMENTS-46172ef655d51ea4**: ├── User
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-41bd3320fb6ee128"></a>
- **M08-CAP-DOCUMENTS-41bd3320fb6ee128**: ├── Medical Profile
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-b3a8fb58abb0fac0"></a>
- **M08-CAP-DOCUMENTS-b3a8fb58abb0fac0**: ├── Doctor
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-4aa0cb20484238f6"></a>
- **M08-CAP-DOCUMENTS-4aa0cb20484238f6**: ├── Hospital
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-efa2a8ae50719ab3"></a>
- **M08-CAP-DOCUMENTS-efa2a8ae50719ab3**: ├── QR Passport
  Origin: original 12, original 37, original 39, original 40

<a id="M08-CAP-DOCUMENTS-93522f774f6d0bd5"></a>
- **M08-CAP-DOCUMENTS-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 12, original 37, original 39, original 40

<a id="M08-CAP-DOCUMENTS-5d854ee63a66069f"></a>
- **M08-CAP-DOCUMENTS-5d854ee63a66069f**: ├── OCR
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-4b32fba504df8b6d"></a>
- **M08-CAP-DOCUMENTS-4b32fba504df8b6d**: ├── Translation
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-37bfdffca1a32095"></a>
- **M08-CAP-DOCUMENTS-37bfdffca1a32095**: Future Features
  Origin: original 12, original 37, original 39, original 40

<a id="M08-CAP-DOCUMENTS-e5a5e57328a09622"></a>
- **M08-CAP-DOCUMENTS-e5a5e57328a09622**: OCR Recognition
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-b67d6c6407351c95"></a>
- **M08-CAP-DOCUMENTS-b67d6c6407351c95**: AI Summary
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-29a159ee03f03fa9"></a>
- **M08-CAP-DOCUMENTS-29a159ee03f03fa9**: Automatic Translation
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-c62b109694bc4bf0"></a>
- **M08-CAP-DOCUMENTS-c62b109694bc4bf0**: PDF Generation
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-b95b8e5397e9b6e2"></a>
- **M08-CAP-DOCUMENTS-b95b8e5397e9b6e2**: Digital Signature
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-4a8e1f55ed10530c"></a>
- **M08-CAP-DOCUMENTS-4a8e1f55ed10530c**: Cloud Synchronization
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-4e1bf771cb5cf660"></a>
- **M08-CAP-DOCUMENTS-4e1bf771cb5cf660**: Offline Access
  Origin: original 12

<a id="M08-CAP-DOCUMENTS-8017191473a1c14a"></a>
- **M08-CAP-DOCUMENTS-8017191473a1c14a**: Extracts medical information from uploaded documents, prescriptions and images.
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-96175796b7761e88"></a>
- **M08-CAP-DOCUMENTS-96175796b7761e88**: PDF
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-55e8e3bab6a36eb3"></a>
- **M08-CAP-DOCUMENTS-55e8e3bab6a36eb3**: JPG
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-d81c2b369452a362"></a>
- **M08-CAP-DOCUMENTS-d81c2b369452a362**: PNG
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-2bd79e4118cb9b95"></a>
- **M08-CAP-DOCUMENTS-2bd79e4118cb9b95**: HEIC
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-a8ebba12054516b6"></a>
- **M08-CAP-DOCUMENTS-a8ebba12054516b6**: DICOM Preview
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-131c6e596453a4fd"></a>
- **M08-CAP-DOCUMENTS-131c6e596453a4fd**: Camera Scan
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-be0ae24fefabe968"></a>
- **M08-CAP-DOCUMENTS-be0ae24fefabe968**: Passport Scan
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-dc3879615487b5bf"></a>
- **M08-CAP-DOCUMENTS-dc3879615487b5bf**: Prescription Scan
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-d01aa86a43b0d197"></a>
- **M08-CAP-DOCUMENTS-d01aa86a43b0d197**: Text Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-41bf4fb51a87501e"></a>
- **M08-CAP-DOCUMENTS-41bf4fb51a87501e**: Handwriting Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-2588fc96e9e711f4"></a>
- **M08-CAP-DOCUMENTS-2588fc96e9e711f4**: Multi-language OCR
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-f80069b7e7320f5d"></a>
- **M08-CAP-DOCUMENTS-f80069b7e7320f5d**: Medical Terminology Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-9ab530ba3cd6b57b"></a>
- **M08-CAP-DOCUMENTS-9ab530ba3cd6b57b**: Table Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-1f3fbf45c8855e2d"></a>
- **M08-CAP-DOCUMENTS-1f3fbf45c8855e2d**: QR Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-4dbb627d9151222a"></a>
- **M08-CAP-DOCUMENTS-4dbb627d9151222a**: Barcode Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-2a1353530728730d"></a>
- **M08-CAP-DOCUMENTS-2a1353530728730d**: Signature Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-c826831ef61afb73"></a>
- **M08-CAP-DOCUMENTS-c826831ef61afb73**: Stamp Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-92cc35113d50827b"></a>
- **M08-CAP-DOCUMENTS-92cc35113d50827b**: Document Classification
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-0e72b48def66acfd"></a>
- **M08-CAP-DOCUMENTS-0e72b48def66acfd**: Medicine Extraction
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-9f6aa713608062b9"></a>
- **M08-CAP-DOCUMENTS-9f6aa713608062b9**: Diagnosis Extraction
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-c6759a4e8932cafe"></a>
- **M08-CAP-DOCUMENTS-c6759a4e8932cafe**: Doctor Information
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-93757f356932f41f"></a>
- **M08-CAP-DOCUMENTS-93757f356932f41f**: Hospital Information
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-1f76ff013c866d19"></a>
- **M08-CAP-DOCUMENTS-1f76ff013c866d19**: Date Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-84fa4b2827cb5458"></a>
- **M08-CAP-DOCUMENTS-84fa4b2827cb5458**: Dosage Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-ee4287879e0da8e0"></a>
- **M08-CAP-DOCUMENTS-ee4287879e0da8e0**: ICD Detection
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-f32d652b9afb7110"></a>
- **M08-CAP-DOCUMENTS-f32d652b9afb7110**: Structured Text
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-c9b52647cb778119"></a>
- **M08-CAP-DOCUMENTS-c9b52647cb778119**: JSON
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-d3bfb1971b75d09a"></a>
- **M08-CAP-DOCUMENTS-d3bfb1971b75d09a**: Searchable PDF
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-474bef8e88720a2c"></a>
- **M08-CAP-DOCUMENTS-474bef8e88720a2c**: Medical Summary
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-4fafaba4f9615007"></a>
- **M08-CAP-DOCUMENTS-4fafaba4f9615007**: AI Confidence Score
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-d3290df0dc43733d"></a>
- **M08-CAP-DOCUMENTS-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 37, original 39, original 40

<a id="M08-CAP-DOCUMENTS-7a9774b191e42209"></a>
- **M08-CAP-DOCUMENTS-7a9774b191e42209**: ├── Translation Engine
  Origin: original 37, original 39

<a id="M08-CAP-DOCUMENTS-ca0910ed36c02588"></a>
- **M08-CAP-DOCUMENTS-ca0910ed36c02588**: ├── Medicines
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-bd5acdeb2683509a"></a>
- **M08-CAP-DOCUMENTS-bd5acdeb2683509a**: ├── Diagnoses
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-aa3e999983b79daa"></a>
- **M08-CAP-DOCUMENTS-aa3e999983b79daa**: ├── Prescriptions
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-ba3b5767831d534a"></a>
- **M08-CAP-DOCUMENTS-ba3b5767831d534a**: Offline OCR
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-f8c67c73c3d9b7e5"></a>
- **M08-CAP-DOCUMENTS-f8c67c73c3d9b7e5**: Live Camera OCR
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-fea05f3ea37f1135"></a>
- **M08-CAP-DOCUMENTS-fea05f3ea37f1135**: Prescription Auto-fill
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-c8e3e459ad3a7965"></a>
- **M08-CAP-DOCUMENTS-c8e3e459ad3a7965**: Laboratory Auto-import
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-685dd0930153654c"></a>
- **M08-CAP-DOCUMENTS-685dd0930153654c**: Insurance Document Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-b505401d94e71841"></a>
- **M08-CAP-DOCUMENTS-b505401d94e71841**: Passport Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-91694541e55b5c41"></a>
- **M08-CAP-DOCUMENTS-91694541e55b5c41**: Smart Medical Form Recognition
  Origin: original 37

<a id="M08-CAP-DOCUMENTS-7578c02617e98490"></a>
- **M08-CAP-DOCUMENTS-7578c02617e98490**: Defines secure storage, encryption, synchronization and lifecycle management for all user files.
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-08934a82877646ee"></a>
- **M08-CAP-DOCUMENTS-08934a82877646ee**: DICOM
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-864b9799b27001b1"></a>
- **M08-CAP-DOCUMENTS-864b9799b27001b1**: DOCX
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-af746b3cd959a9a3"></a>
- **M08-CAP-DOCUMENTS-af746b3cd959a9a3**: XLSX
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-0d860f4a7af24b42"></a>
- **M08-CAP-DOCUMENTS-0d860f4a7af24b42**: ZIP
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-f6feaab2781dc285"></a>
- **M08-CAP-DOCUMENTS-f6feaab2781dc285**: Medical Documents
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-f7f76ed08da80788"></a>
- **M08-CAP-DOCUMENTS-f7f76ed08da80788**: Medical Images
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-59dba7aa1151c596"></a>
- **M08-CAP-DOCUMENTS-59dba7aa1151c596**: Travel Documents
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-86f3db36b60fb936"></a>
- **M08-CAP-DOCUMENTS-86f3db36b60fb936**: User Avatar
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-6d1e7f010789fb00"></a>
- **M08-CAP-DOCUMENTS-6d1e7f010789fb00**: Temporary Files
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-df863bbe755ecbd7"></a>
- **M08-CAP-DOCUMENTS-df863bbe755ecbd7**: Backups
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-cc650a7907363ad2"></a>
- **M08-CAP-DOCUMENTS-cc650a7907363ad2**: AES-256 Encryption
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-44effbba6a37147d"></a>
- **M08-CAP-DOCUMENTS-44effbba6a37147d**: TLS 1.3
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-be03c3c2b004e445"></a>
- **M08-CAP-DOCUMENTS-be03c3c2b004e445**: End-to-End Encryption (future)
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-05914d413986cc46"></a>
- **M08-CAP-DOCUMENTS-05914d413986cc46**: Signed URLs
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-bb76c2ec1e2674bf"></a>
- **M08-CAP-DOCUMENTS-bb76c2ec1e2674bf**: Access Control
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-1260cd8cfd575871"></a>
- **M08-CAP-DOCUMENTS-1260cd8cfd575871**: File Integrity Check
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-149fe47d48f3832d"></a>
- **M08-CAP-DOCUMENTS-149fe47d48f3832d**: Antivirus Scan
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-069c2fbb0c5dfd9d"></a>
- **M08-CAP-DOCUMENTS-069c2fbb0c5dfd9d**: Private Storage
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-60ad5f0e95a3c0f2"></a>
- **M08-CAP-DOCUMENTS-60ad5f0e95a3c0f2**: ↓
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-0552931f5de14413"></a>
- **M08-CAP-DOCUMENTS-0552931f5de14413**: Encrypted Bucket
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-3af9413991170358"></a>
- **M08-CAP-DOCUMENTS-3af9413991170358**: Metadata Database
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-102dd496b00d9e3a"></a>
- **M08-CAP-DOCUMENTS-102dd496b00d9e3a**: Thumbnail Generator
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-28e5eea2f85a73d4"></a>
- **M08-CAP-DOCUMENTS-28e5eea2f85a73d4**: OCR Queue
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-5517c542b8115e11"></a>
- **M08-CAP-DOCUMENTS-5517c542b8115e11**: AI Processing Queue
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-9dc7eb529ce18818"></a>
- **M08-CAP-DOCUMENTS-9dc7eb529ce18818**: Backup Storage
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-0bd073fff7de1456"></a>
- **M08-CAP-DOCUMENTS-0bd073fff7de1456**: File ID
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-f152adaa2f631594"></a>
- **M08-CAP-DOCUMENTS-f152adaa2f631594**: Owner
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-0d046a44214631bc"></a>
- **M08-CAP-DOCUMENTS-0d046a44214631bc**: Type
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-be9d923b2255a43c"></a>
- **M08-CAP-DOCUMENTS-be9d923b2255a43c**: Size
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-6a0cfc12849ff6df"></a>
- **M08-CAP-DOCUMENTS-6a0cfc12849ff6df**: Hash
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-c0c4e89a1bca0101"></a>
- **M08-CAP-DOCUMENTS-c0c4e89a1bca0101**: Checksum
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-0056a9a8728bb586"></a>
- **M08-CAP-DOCUMENTS-0056a9a8728bb586**: Upload Date
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-95b60fa29a5203a8"></a>
- **M08-CAP-DOCUMENTS-95b60fa29a5203a8**: Last Access
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-0e26e0e9df22880c"></a>
- **M08-CAP-DOCUMENTS-0e26e0e9df22880c**: Encryption Version
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-24809e263ed68001"></a>
- **M08-CAP-DOCUMENTS-24809e263ed68001**: Retention Policy
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-6f3df47ab591c26a"></a>
- **M08-CAP-DOCUMENTS-6f3df47ab591c26a**: ├── OCR Engine
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-a7f2ddd3ac9459b5"></a>
- **M08-CAP-DOCUMENTS-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-48a0e7b8fcbc590c"></a>
- **M08-CAP-DOCUMENTS-48a0e7b8fcbc590c**: ├── Audit Logs
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-7b3cf3c8a8c7a811"></a>
- **M08-CAP-DOCUMENTS-7b3cf3c8a8c7a811**: Multi-region Storage
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-f03ba94b84997fb2"></a>
- **M08-CAP-DOCUMENTS-f03ba94b84997fb2**: Automatic Backup
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-381bf626458d70c3"></a>
- **M08-CAP-DOCUMENTS-381bf626458d70c3**: Version History
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-f1bab4cac909ad12"></a>
- **M08-CAP-DOCUMENTS-f1bab4cac909ad12**: File Recovery
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-3bdebf458190d044"></a>
- **M08-CAP-DOCUMENTS-3bdebf458190d044**: Offline Cache
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-5d934d4582c2c032"></a>
- **M08-CAP-DOCUMENTS-5d934d4582c2c032**: Smart Compression
  Origin: original 39

<a id="M08-CAP-DOCUMENTS-28bfd7dbb80eab0a"></a>
- **M08-CAP-DOCUMENTS-28bfd7dbb80eab0a**: Secure Sharing
  Origin: original 39, original 40

<a id="M08-CAP-DOCUMENTS-1af54af14cdfa783"></a>
- **M08-CAP-DOCUMENTS-1af54af14cdfa783**: Defines storage, processing and lifecycle management of all media assets within the Medical Passport ecosystem.
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-6bd02bd0f00ae1d0"></a>
- **M08-CAP-DOCUMENTS-6bd02bd0f00ae1d0**: Photos
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-13d79231036b887a"></a>
- **M08-CAP-DOCUMENTS-13d79231036b887a**: Profile Pictures
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-9395a63c8437ed7a"></a>
- **M08-CAP-DOCUMENTS-9395a63c8437ed7a**: ECG Images
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-12ea7d91824a06b2"></a>
- **M08-CAP-DOCUMENTS-12ea7d91824a06b2**: Video
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-0962a55ab612bc47"></a>
- **M08-CAP-DOCUMENTS-0962a55ab612bc47**: Audio
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-8dd5ac0784945b4b"></a>
- **M08-CAP-DOCUMENTS-8dd5ac0784945b4b**: Voice Notes
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-3007599d37493948"></a>
- **M08-CAP-DOCUMENTS-3007599d37493948**: Camera Capture
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-eac3987d1c858bbd"></a>
- **M08-CAP-DOCUMENTS-eac3987d1c858bbd**: Profile Images
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-3211753c4de369fc"></a>
- **M08-CAP-DOCUMENTS-3211753c4de369fc**: Insurance Images
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-d953ce2b53709192"></a>
- **M08-CAP-DOCUMENTS-d953ce2b53709192**: Prescription Images
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-dfeafcf080abecda"></a>
- **M08-CAP-DOCUMENTS-dfeafcf080abecda**: Emergency Attachments
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-353ac6bb678d3c24"></a>
- **M08-CAP-DOCUMENTS-353ac6bb678d3c24**: Telemedicine Recordings
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-873b9b59632cbe47"></a>
- **M08-CAP-DOCUMENTS-873b9b59632cbe47**: AI Attachments
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-a70483bb63bf3cc4"></a>
- **M08-CAP-DOCUMENTS-a70483bb63bf3cc4**: Upload
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-caf7093d1b88770b"></a>
- **M08-CAP-DOCUMENTS-caf7093d1b88770b**: Virus Scan
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-5c29170953f7e94c"></a>
- **M08-CAP-DOCUMENTS-5c29170953f7e94c**: Encryption
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-a8a89f2d67956ca1"></a>
- **M08-CAP-DOCUMENTS-a8a89f2d67956ca1**: Thumbnail Generation
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-86df11377b11e433"></a>
- **M08-CAP-DOCUMENTS-86df11377b11e433**: OCR (if image)
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-d46b6ca6f554a9cc"></a>
- **M08-CAP-DOCUMENTS-d46b6ca6f554a9cc**: AI Analysis
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-cf769b7e4648b257"></a>
- **M08-CAP-DOCUMENTS-cf769b7e4648b257**: Cloud Storage
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-4b1957bbe1a9c595"></a>
- **M08-CAP-DOCUMENTS-4b1957bbe1a9c595**: Backup
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-17e2d02454073177"></a>
- **M08-CAP-DOCUMENTS-17e2d02454073177**: Watermark Protection
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-a75d706bd5e32807"></a>
- **M08-CAP-DOCUMENTS-a75d706bd5e32807**: Metadata Protection
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-10d4e485487c42ec"></a>
- **M08-CAP-DOCUMENTS-10d4e485487c42ec**: Automatic Malware Scan
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-3fcee41ef51254e6"></a>
- **M08-CAP-DOCUMENTS-3fcee41ef51254e6**: Media ID
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-01fbf2d868282d2c"></a>
- **M08-CAP-DOCUMENTS-01fbf2d868282d2c**: File Type
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-611b9c578c9cc80a"></a>
- **M08-CAP-DOCUMENTS-611b9c578c9cc80a**: Resolution
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-10d8c964b53514ca"></a>
- **M08-CAP-DOCUMENTS-10d8c964b53514ca**: Duration
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-3b2dc6d79392d7b8"></a>
- **M08-CAP-DOCUMENTS-3b2dc6d79392d7b8**: Location
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-942189c5a7afaf1c"></a>
- **M08-CAP-DOCUMENTS-942189c5a7afaf1c**: Created At
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-a2bad0d3c182ef02"></a>
- **M08-CAP-DOCUMENTS-a2bad0d3c182ef02**: Updated At
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-225d721817a80b2f"></a>
- **M08-CAP-DOCUMENTS-225d721817a80b2f**: ├── Notifications
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-543e0f2849458c6b"></a>
- **M08-CAP-DOCUMENTS-543e0f2849458c6b**: AI Image Enhancement
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-f187ad40f76d6ec5"></a>
- **M08-CAP-DOCUMENTS-f187ad40f76d6ec5**: DICOM Viewer
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-ebd39f97f0b6157d"></a>
- **M08-CAP-DOCUMENTS-ebd39f97f0b6157d**: Automatic Compression
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-2ba2d83195773ffb"></a>
- **M08-CAP-DOCUMENTS-2ba2d83195773ffb**: Live Camera Upload
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-1db3378ce1beedc6"></a>
- **M08-CAP-DOCUMENTS-1db3378ce1beedc6**: Face Blur
  Origin: original 40

<a id="M08-CAP-DOCUMENTS-1087577a49ab831b"></a>
- **M08-CAP-DOCUMENTS-1087577a49ab831b**: Metadata Removal
  Origin: original 40

## Preserved source metadata

<a id="M08-CAP-DOCUMENTS-1fd4094a3a1b0475"></a>
- **M08-CAP-DOCUMENTS-1fd4094a3a1b0475**: # Medical Documents Table

<a id="M08-CAP-DOCUMENTS-2f5fdcca89ef8e56"></a>
- **M08-CAP-DOCUMENTS-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-DOCUMENTS-6f33acf3afb37064"></a>
- **M08-CAP-DOCUMENTS-6f33acf3afb37064**: ---

<a id="M08-CAP-DOCUMENTS-90dc9b75b60f53a5"></a>
- **M08-CAP-DOCUMENTS-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-DOCUMENTS-5754dd8ea427e6f0"></a>
- **M08-CAP-DOCUMENTS-5754dd8ea427e6f0**: status

<a id="M08-CAP-DOCUMENTS-aa909a749a1f8079"></a>
- **M08-CAP-DOCUMENTS-aa909a749a1f8079**: # Supported Documents

<a id="M08-CAP-DOCUMENTS-2fac6cbf308c244b"></a>
- **M08-CAP-DOCUMENTS-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-DOCUMENTS-5ba74d8fcc7b20cc"></a>
- **M08-CAP-DOCUMENTS-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-DOCUMENTS-d5232cbd3a326267"></a>
- **M08-CAP-DOCUMENTS-d5232cbd3a326267**: Documentation

<a id="M08-CAP-DOCUMENTS-799daaea1aabeb56"></a>
- **M08-CAP-DOCUMENTS-799daaea1aabeb56**: # OCR Engine

<a id="M08-CAP-DOCUMENTS-510345723b247acd"></a>
- **M08-CAP-DOCUMENTS-510345723b247acd**: # Supported Inputs

<a id="M08-CAP-DOCUMENTS-c40dd7d89974df05"></a>
- **M08-CAP-DOCUMENTS-c40dd7d89974df05**: # OCR Features

<a id="M08-CAP-DOCUMENTS-75776c7c59e053c3"></a>
- **M08-CAP-DOCUMENTS-75776c7c59e053c3**: # AI Processing

<a id="M08-CAP-DOCUMENTS-3ad4f20057becbcc"></a>
- **M08-CAP-DOCUMENTS-3ad4f20057becbcc**: # Outputs

<a id="M08-CAP-DOCUMENTS-9879a69a15c5a50a"></a>
- **M08-CAP-DOCUMENTS-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-DOCUMENTS-326b48a2e42264f9"></a>
- **M08-CAP-DOCUMENTS-326b48a2e42264f9**: # File Storage Architecture

<a id="M08-CAP-DOCUMENTS-9f4ed4b04f7285c7"></a>
- **M08-CAP-DOCUMENTS-9f4ed4b04f7285c7**: # Supported File Types

<a id="M08-CAP-DOCUMENTS-78da8296c6b8a6ea"></a>
- **M08-CAP-DOCUMENTS-78da8296c6b8a6ea**: # Storage Categories

<a id="M08-CAP-DOCUMENTS-efc101e38d418651"></a>
- **M08-CAP-DOCUMENTS-efc101e38d418651**: # Security

<a id="M08-CAP-DOCUMENTS-0140977bd655d669"></a>
- **M08-CAP-DOCUMENTS-0140977bd655d669**: # Storage Strategy

<a id="M08-CAP-DOCUMENTS-893fc72dca689b73"></a>
- **M08-CAP-DOCUMENTS-893fc72dca689b73**: # Metadata

<a id="M08-CAP-DOCUMENTS-6da47fe022cbf3bf"></a>
- **M08-CAP-DOCUMENTS-6da47fe022cbf3bf**: # Media Storage

<a id="M08-CAP-DOCUMENTS-74c9c62697010a14"></a>
- **M08-CAP-DOCUMENTS-74c9c62697010a14**: # Supported Media

<a id="M08-CAP-DOCUMENTS-53600c56daf329e5"></a>
- **M08-CAP-DOCUMENTS-53600c56daf329e5**: # Media Categories

<a id="M08-CAP-DOCUMENTS-d8fb253684be2862"></a>
- **M08-CAP-DOCUMENTS-d8fb253684be2862**: # Processing Pipeline

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
