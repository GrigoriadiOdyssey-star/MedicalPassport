# CORE-CAP-PRESCRIPTION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## prescription-lifecycle-and-erx

Existing Prescription owns clinician-authored order lifecycle, renewal requests, signing and cross-border eRx validation. Medication owns exposure, Pharmacy owns dispense and Administration owns delivered treatment. Preserve every original field and state but reject autonomous substitution/renewal/AI prescribing implications: a draft, QR, signature or pharmacy lookup alone never establishes valid clinician authority or jurisdictional dispense permission. Controlled-substance handling, dose units, validity, partial fulfilment and cancellation require explicit versioned contracts.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 13 / prescription-lifecycle-and-erx: Prescriptions Table — Stores all prescriptions issued to the user.
- Original 68 / prescription-lifecycle-and-erx: ePrescription Integration — Defines the architecture for issuing, validating, exchanging and dispensing electronic prescriptions internationally.
- Original 121 / prescription-lifecycle-and-erx: Prescription Management — Manage prescription status, uploaded documents, QR representations and renewal reminders.
- Original 155 / prescription-lifecycle-and-erx: Prescription Renewal Module — Request clinician authorization for prescription renewal after expiration checks.
- Original 164 / prescription-lifecycle-and-erx: Digital Prescription System — Link clinician prescription, signature, patient QR and pharmacy validation.

## Requirements and source metadata

<a id="M19-CAP-PRESCRIPTION-16f72cbe2f9bb206"></a>
- **M19-CAP-PRESCRIPTION-16f72cbe2f9bb206**: # Prescriptions Table
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-2f5fdcca89ef8e56"></a>
- **M19-CAP-PRESCRIPTION-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 13, 68.

<a id="M19-CAP-PRESCRIPTION-7c40d54b8f3e5f07"></a>
- **M19-CAP-PRESCRIPTION-7c40d54b8f3e5f07**: Stores all prescriptions issued to the user.
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-6f33acf3afb37064"></a>
- **M19-CAP-PRESCRIPTION-6f33acf3afb37064**: ---
  Applies to original IDs: 13, 68, 121, 155, 164.

<a id="M19-CAP-PRESCRIPTION-90dc9b75b60f53a5"></a>
- **M19-CAP-PRESCRIPTION-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-c91610423a46692c"></a>
- **M19-CAP-PRESCRIPTION-c91610423a46692c**: id (UUID)
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-ff6fb316f9bc6c33"></a>
- **M19-CAP-PRESCRIPTION-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-c559823f6e5c0162"></a>
- **M19-CAP-PRESCRIPTION-c559823f6e5c0162**: medical_profile_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-faea4e7b11fd2247"></a>
- **M19-CAP-PRESCRIPTION-faea4e7b11fd2247**: doctor_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-d8781eb949ab5813"></a>
- **M19-CAP-PRESCRIPTION-d8781eb949ab5813**: hospital_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-f4420fbdfa827d3e"></a>
- **M19-CAP-PRESCRIPTION-f4420fbdfa827d3e**: prescription_number
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-855a0f8094ffe144"></a>
- **M19-CAP-PRESCRIPTION-855a0f8094ffe144**: issue_date
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-1cfa0ddc7ba774e5"></a>
- **M19-CAP-PRESCRIPTION-1cfa0ddc7ba774e5**: expiration_date
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-43cae689d4d63330"></a>
- **M19-CAP-PRESCRIPTION-43cae689d4d63330**: diagnosis_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-891c62b85afbfcf6"></a>
- **M19-CAP-PRESCRIPTION-891c62b85afbfcf6**: medicine_id
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-52e301826e8f4931"></a>
- **M19-CAP-PRESCRIPTION-52e301826e8f4931**: dosage
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-0fca842eac3b1fa9"></a>
- **M19-CAP-PRESCRIPTION-0fca842eac3b1fa9**: frequency
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-993ed6b3a620592f"></a>
- **M19-CAP-PRESCRIPTION-993ed6b3a620592f**: duration
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-62890f6020e82672"></a>
- **M19-CAP-PRESCRIPTION-62890f6020e82672**: quantity
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-142950fc18760058"></a>
- **M19-CAP-PRESCRIPTION-142950fc18760058**: refills_allowed
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-15b9e31c603411fd"></a>
- **M19-CAP-PRESCRIPTION-15b9e31c603411fd**: special_instructions
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-81e0a5dbf8da25a3"></a>
- **M19-CAP-PRESCRIPTION-81e0a5dbf8da25a3**: digital_signature
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-5acef6b6ce9b6225"></a>
- **M19-CAP-PRESCRIPTION-5acef6b6ce9b6225**: qr_code
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-9fe94e819c56a7a3"></a>
- **M19-CAP-PRESCRIPTION-9fe94e819c56a7a3**: country
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-5754dd8ea427e6f0"></a>
- **M19-CAP-PRESCRIPTION-5754dd8ea427e6f0**: status
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-bcc951dbdead2bf5"></a>
- **M19-CAP-PRESCRIPTION-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-51db2c3a3a174a78"></a>
- **M19-CAP-PRESCRIPTION-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-2fac6cbf308c244b"></a>
- **M19-CAP-PRESCRIPTION-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-ccf5f1cc50d31a92"></a>
- **M19-CAP-PRESCRIPTION-ccf5f1cc50d31a92**: Prescription
  Applies to original IDs: 13, 155, 164.

<a id="M19-CAP-PRESCRIPTION-46172ef655d51ea4"></a>
- **M19-CAP-PRESCRIPTION-46172ef655d51ea4**: ├── User
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-41bd3320fb6ee128"></a>
- **M19-CAP-PRESCRIPTION-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-b3a8fb58abb0fac0"></a>
- **M19-CAP-PRESCRIPTION-b3a8fb58abb0fac0**: ├── Doctor
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-4aa0cb20484238f6"></a>
- **M19-CAP-PRESCRIPTION-4aa0cb20484238f6**: ├── Hospital
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-67b13a97f9e6b400"></a>
- **M19-CAP-PRESCRIPTION-67b13a97f9e6b400**: ├── Medicine
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-efa2a8ae50719ab3"></a>
- **M19-CAP-PRESCRIPTION-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 13, 68.

<a id="M19-CAP-PRESCRIPTION-f242256e9ecdac25"></a>
- **M19-CAP-PRESCRIPTION-f242256e9ecdac25**: ├── Pharmacy
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-93522f774f6d0bd5"></a>
- **M19-CAP-PRESCRIPTION-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-37bfdffca1a32095"></a>
- **M19-CAP-PRESCRIPTION-37bfdffca1a32095**: Future Features
  Applies to original IDs: 13, 68.

<a id="M19-CAP-PRESCRIPTION-ea78b05880e070ad"></a>
- **M19-CAP-PRESCRIPTION-ea78b05880e070ad**: Digital Prescription
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-562e8ff5220ce11a"></a>
- **M19-CAP-PRESCRIPTION-562e8ff5220ce11a**: Cross-border Validation
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-0b3c1c1c603ce3f7"></a>
- **M19-CAP-PRESCRIPTION-0b3c1c1c603ce3f7**: Electronic Signature
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-9c26c1b46bcd0a38"></a>
- **M19-CAP-PRESCRIPTION-9c26c1b46bcd0a38**: QR Verification
  Applies to original IDs: 13, 68.

<a id="M19-CAP-PRESCRIPTION-a9154044b51e78fe"></a>
- **M19-CAP-PRESCRIPTION-a9154044b51e78fe**: Pharmacy Integration
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-85af32c9f07b9c13"></a>
- **M19-CAP-PRESCRIPTION-85af32c9f07b9c13**: Renewal Requests
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-87908b6547a438a0"></a>
- **M19-CAP-PRESCRIPTION-87908b6547a438a0**: AI Interaction Checker
  Applies to original IDs: 13.

<a id="M19-CAP-PRESCRIPTION-5ba74d8fcc7b20cc"></a>
- **M19-CAP-PRESCRIPTION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 13, 68, 121, 155, 164.

<a id="M19-CAP-PRESCRIPTION-d5232cbd3a326267"></a>
- **M19-CAP-PRESCRIPTION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 13, 68, 121, 155, 164.

<a id="M19-CAP-PRESCRIPTION-9732a5f91c240885"></a>
- **M19-CAP-PRESCRIPTION-9732a5f91c240885**: # ePrescription Integration
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-6864503b26d180f1"></a>
- **M19-CAP-PRESCRIPTION-6864503b26d180f1**: Defines the architecture for issuing, validating, exchanging and dispensing electronic prescriptions internationally.
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-b362dcbd9bedc532"></a>
- **M19-CAP-PRESCRIPTION-b362dcbd9bedc532**: # Objectives
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-f1873785e4848532"></a>
- **M19-CAP-PRESCRIPTION-f1873785e4848532**: Digital Prescriptions
  Applies to original IDs: 68, 121.

<a id="M19-CAP-PRESCRIPTION-74ae507bc5f78d41"></a>
- **M19-CAP-PRESCRIPTION-74ae507bc5f78d41**: Cross-border Prescription Exchange
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-8b6956ec34ca4e8f"></a>
- **M19-CAP-PRESCRIPTION-8b6956ec34ca4e8f**: Prescription Validation
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-947d949955b98121"></a>
- **M19-CAP-PRESCRIPTION-947d949955b98121**: Pharmacy Verification
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-245c7ed8b25bbf20"></a>
- **M19-CAP-PRESCRIPTION-245c7ed8b25bbf20**: QR Prescription
  Applies to original IDs: 68, 121.

<a id="M19-CAP-PRESCRIPTION-34d318fab15515d9"></a>
- **M19-CAP-PRESCRIPTION-34d318fab15515d9**: AI Prescription Review
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-c4fd1e873d9636db"></a>
- **M19-CAP-PRESCRIPTION-c4fd1e873d9636db**: # Prescription Lifecycle
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-52a3545c159968e0"></a>
- **M19-CAP-PRESCRIPTION-52a3545c159968e0**: Doctor
  Applies to original IDs: 68, 164.

<a id="M19-CAP-PRESCRIPTION-60ad5f0e95a3c0f2"></a>
- **M19-CAP-PRESCRIPTION-60ad5f0e95a3c0f2**: ↓
  Applies to original IDs: 68, 155, 164.

<a id="M19-CAP-PRESCRIPTION-eecf3ef5b6b7634d"></a>
- **M19-CAP-PRESCRIPTION-eecf3ef5b6b7634d**: Create Prescription
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-b95b8e5397e9b6e2"></a>
- **M19-CAP-PRESCRIPTION-b95b8e5397e9b6e2**: Digital Signature
  Applies to original IDs: 68, 164.

<a id="M19-CAP-PRESCRIPTION-9e9dbb804ca8197a"></a>
- **M19-CAP-PRESCRIPTION-9e9dbb804ca8197a**: Medical Passport
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d8848605c44f0141"></a>
- **M19-CAP-PRESCRIPTION-d8848605c44f0141**: Encrypted Storage
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-6e1457c91f6def34"></a>
- **M19-CAP-PRESCRIPTION-6e1457c91f6def34**: QR Generation
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-b3b1511164e136ec"></a>
- **M19-CAP-PRESCRIPTION-b3b1511164e136ec**: Patient
  Applies to original IDs: 68, 164.

<a id="M19-CAP-PRESCRIPTION-3bb1455d8fb9d963"></a>
- **M19-CAP-PRESCRIPTION-3bb1455d8fb9d963**: Medicine Dispensing
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-2301df75872fad25"></a>
- **M19-CAP-PRESCRIPTION-2301df75872fad25**: Prescription Closed
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-35d5a1b67ce56f68"></a>
- **M19-CAP-PRESCRIPTION-35d5a1b67ce56f68**: # Supported Data
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-f118eefb585fb64e"></a>
- **M19-CAP-PRESCRIPTION-f118eefb585fb64e**: Prescription ID
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-3072925175207030"></a>
- **M19-CAP-PRESCRIPTION-3072925175207030**: Doctor ID
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-a9c1a7932173b84d"></a>
- **M19-CAP-PRESCRIPTION-a9c1a7932173b84d**: Patient ID
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-1dcc674f28b67008"></a>
- **M19-CAP-PRESCRIPTION-1dcc674f28b67008**: Medicine
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-f5ff2466370d6d7d"></a>
- **M19-CAP-PRESCRIPTION-f5ff2466370d6d7d**: Generic Name
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-62e8595b83534b39"></a>
- **M19-CAP-PRESCRIPTION-62e8595b83534b39**: Brand Name
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-368389b22a7065de"></a>
- **M19-CAP-PRESCRIPTION-368389b22a7065de**: Dosage
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-6ffbfeb83a373123"></a>
- **M19-CAP-PRESCRIPTION-6ffbfeb83a373123**: Route
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-267d300e14857db1"></a>
- **M19-CAP-PRESCRIPTION-267d300e14857db1**: Frequency
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-81980b9a6b9bd484"></a>
- **M19-CAP-PRESCRIPTION-81980b9a6b9bd484**: Quantity
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-10d8c964b53514ca"></a>
- **M19-CAP-PRESCRIPTION-10d8c964b53514ca**: Duration
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-76c1e87ebfc24494"></a>
- **M19-CAP-PRESCRIPTION-76c1e87ebfc24494**: Refill Count
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-337b49704d348de9"></a>
- **M19-CAP-PRESCRIPTION-337b49704d348de9**: Expiration Date
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-e42f4f6fbe4b928b"></a>
- **M19-CAP-PRESCRIPTION-e42f4f6fbe4b928b**: # Validation
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d27eeb0f88f2e1d5"></a>
- **M19-CAP-PRESCRIPTION-d27eeb0f88f2e1d5**: Doctor License
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-51614ab5b4269622"></a>
- **M19-CAP-PRESCRIPTION-51614ab5b4269622**: Prescription Expiration
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-60a7b2bf7fb6fa82"></a>
- **M19-CAP-PRESCRIPTION-60a7b2bf7fb6fa82**: Duplicate Check
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-912ea524a4675b8d"></a>
- **M19-CAP-PRESCRIPTION-912ea524a4675b8d**: Drug Interaction
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-6026f917c652229b"></a>
- **M19-CAP-PRESCRIPTION-6026f917c652229b**: Allergy Check
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-f981f933cef9166e"></a>
- **M19-CAP-PRESCRIPTION-f981f933cef9166e**: Insurance Coverage
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-319bc9bb192e10e8"></a>
- **M19-CAP-PRESCRIPTION-319bc9bb192e10e8**: # Pharmacy Features
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-b038f229059c2ab6"></a>
- **M19-CAP-PRESCRIPTION-b038f229059c2ab6**: QR Scan
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-4e9225e04f45503f"></a>
- **M19-CAP-PRESCRIPTION-4e9225e04f45503f**: Partial Dispensing
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-80a019cf260c2a09"></a>
- **M19-CAP-PRESCRIPTION-80a019cf260c2a09**: Full Dispensing
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-9917de237702e5ec"></a>
- **M19-CAP-PRESCRIPTION-9917de237702e5ec**: Refill Processing
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-8654b7fee7bef36d"></a>
- **M19-CAP-PRESCRIPTION-8654b7fee7bef36d**: Dispensing History
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-efc101e38d418651"></a>
- **M19-CAP-PRESCRIPTION-efc101e38d418651**: # Security
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-efa55b16ffd6b66c"></a>
- **M19-CAP-PRESCRIPTION-efa55b16ffd6b66c**: AES-256
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-44effbba6a37147d"></a>
- **M19-CAP-PRESCRIPTION-44effbba6a37147d**: TLS 1.3
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d20a95b6b63719a7"></a>
- **M19-CAP-PRESCRIPTION-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-9d20e4829033cb20"></a>
- **M19-CAP-PRESCRIPTION-9d20e4829033cb20**: Time-limited Tokens
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d4ba5cf7ecd13c29"></a>
- **M19-CAP-PRESCRIPTION-d4ba5cf7ecd13c29**: # Standards
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-549ea966fef08865"></a>
- **M19-CAP-PRESCRIPTION-549ea966fef08865**: FHIR MedicationRequest
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-174f701aff0dee22"></a>
- **M19-CAP-PRESCRIPTION-174f701aff0dee22**: FHIR MedicationDispense
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-a6a8c99e93773aba"></a>
- **M19-CAP-PRESCRIPTION-a6a8c99e93773aba**: HL7
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-61706c1dc6d00563"></a>
- **M19-CAP-PRESCRIPTION-61706c1dc6d00563**: SNOMED CT
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-fe468f219c6f18ac"></a>
- **M19-CAP-PRESCRIPTION-fe468f219c6f18ac**: ATC Classification
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-9879a69a15c5a50a"></a>
- **M19-CAP-PRESCRIPTION-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-ca0910ed36c02588"></a>
- **M19-CAP-PRESCRIPTION-ca0910ed36c02588**: ├── Medicines
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-593a539148322e7e"></a>
- **M19-CAP-PRESCRIPTION-593a539148322e7e**: ├── Doctors
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-5cbe96785bf5a069"></a>
- **M19-CAP-PRESCRIPTION-5cbe96785bf5a069**: ├── Pharmacies
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-2b383921dd5c0b8f"></a>
- **M19-CAP-PRESCRIPTION-2b383921dd5c0b8f**: ├── AI Drug Interaction Engine
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d3851f7ba53f3cf3"></a>
- **M19-CAP-PRESCRIPTION-d3851f7ba53f3cf3**: ├── Insurance
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-17ebf3b758d1f27d"></a>
- **M19-CAP-PRESCRIPTION-17ebf3b758d1f27d**: ├── National Health Systems
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-55856185fc2ebdc2"></a>
- **M19-CAP-PRESCRIPTION-55856185fc2ebdc2**: ├── EHDS
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-a903b0e7a20480d3"></a>
- **M19-CAP-PRESCRIPTION-a903b0e7a20480d3**: European ePrescription Network
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-cb8f726e412ce901"></a>
- **M19-CAP-PRESCRIPTION-cb8f726e412ce901**: AI Prescription Optimization
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-d61575867763c89f"></a>
- **M19-CAP-PRESCRIPTION-d61575867763c89f**: Automatic Generic Substitution
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-c8895404a5ff847d"></a>
- **M19-CAP-PRESCRIPTION-c8895404a5ff847d**: Prescription Renewal
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-40df21ab91fc6c42"></a>
- **M19-CAP-PRESCRIPTION-40df21ab91fc6c42**: Voice Prescription
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-e5906935b96d229d"></a>
- **M19-CAP-PRESCRIPTION-e5906935b96d229d**: Controlled Substance Verification
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-fd56dd5d4c82e78c"></a>
- **M19-CAP-PRESCRIPTION-fd56dd5d4c82e78c**: International Prescription Validation
  Applies to original IDs: 68.

<a id="M19-CAP-PRESCRIPTION-6983245975837530"></a>
- **M19-CAP-PRESCRIPTION-6983245975837530**: # Prescription Management
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-4fbeeb87456accf5"></a>
- **M19-CAP-PRESCRIPTION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-6717441084f596b0"></a>
- **M19-CAP-PRESCRIPTION-6717441084f596b0**: Active Prescriptions
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-3c5fcb98b54456f3"></a>
- **M19-CAP-PRESCRIPTION-3c5fcb98b54456f3**: Expired Prescriptions
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-100f2933edecdb51"></a>
- **M19-CAP-PRESCRIPTION-100f2933edecdb51**: PDF Upload
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-734e28bf79d7b6b6"></a>
- **M19-CAP-PRESCRIPTION-734e28bf79d7b6b6**: Renewal Reminder
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-d46b6ca6f554a9cc"></a>
- **M19-CAP-PRESCRIPTION-d46b6ca6f554a9cc**: AI Analysis
  Applies to original IDs: 121.

<a id="M19-CAP-PRESCRIPTION-f9003f401496cf98"></a>
- **M19-CAP-PRESCRIPTION-f9003f401496cf98**: # Prescription Renewal
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-914b1e5f214c811d"></a>
- **M19-CAP-PRESCRIPTION-914b1e5f214c811d**: Workflow
  Applies to original IDs: 155, 164.

<a id="M19-CAP-PRESCRIPTION-252c5ec8edeecaa2"></a>
- **M19-CAP-PRESCRIPTION-252c5ec8edeecaa2**: Expiration Check
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-e232691e08f7259d"></a>
- **M19-CAP-PRESCRIPTION-e232691e08f7259d**: Doctor Notification
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-66ff1b707378a343"></a>
- **M19-CAP-PRESCRIPTION-66ff1b707378a343**: Renewal Request
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-8d7b2e0ad3efeb15"></a>
- **M19-CAP-PRESCRIPTION-8d7b2e0ad3efeb15**: Approval
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-58281b168fabe54c"></a>
- **M19-CAP-PRESCRIPTION-58281b168fabe54c**: Updated QR
  Applies to original IDs: 155.

<a id="M19-CAP-PRESCRIPTION-93b593df60ab86a5"></a>
- **M19-CAP-PRESCRIPTION-93b593df60ab86a5**: # Digital Prescription
  Applies to original IDs: 164.

<a id="M19-CAP-PRESCRIPTION-21d10097ab8f86fb"></a>
- **M19-CAP-PRESCRIPTION-21d10097ab8f86fb**: QR Code
  Applies to original IDs: 164.

<a id="M19-CAP-PRESCRIPTION-7605ce62d32022f4"></a>
- **M19-CAP-PRESCRIPTION-7605ce62d32022f4**: Pharmacy
  Applies to original IDs: 164.

<a id="M19-CAP-PRESCRIPTION-0c39ee7a5f2484a4"></a>
- **M19-CAP-PRESCRIPTION-0c39ee7a5f2484a4**: Validation
  Applies to original IDs: 164.
