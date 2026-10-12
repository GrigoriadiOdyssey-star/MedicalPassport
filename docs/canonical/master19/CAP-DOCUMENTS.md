# CORE-CAP-DOCUMENTS — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## pediatric-certificate-lifecycle

Documents owns signed vaccine/exemption artifacts, validity, revocation and supersession. Immunization owns clinical facts, Identity/Security verify issuer, QR provides controlled presentation. A cryptographically intact document may still be stale, revoked or clinically unsupported. Offline presentation exposes last-verification time and never certifies current revocation status.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## laboratory-document-archives

Documents owns receipt, implant-passport, laboratory-report and optical-prescription artifacts. Typed clinical owners retain authoritative fields; archival presence cannot verify an issuer or turn an old prescription into current treatment. Preserve laterality and document revision/verification.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## core-clinical-documents

Documents owns notes, reports, certificates, declarations and translation drafts with issuer/source/language/version provenance. A certificate or translated clinical statement requires authenticated author/verification, and no generated report grants fitness, customs permission, diagnosis or school disclosure authority.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 4277 / pediatric-certificate-lifecycle: Pediatric Digital Vaccination Certificate Module — Provides verifiable vaccination information through the Medical Passport.
- Original 4326 / pediatric-certificate-lifecycle: Vaccination Medical Exemption Certificate Module — Supports authorized digital medical exemption certificates.
- Original 4327 / pediatric-certificate-lifecycle: Temporary Vaccine Exemption Certificate Module — Supports time-limited medical exemptions.
- Original 4328 / pediatric-certificate-lifecycle: Permanent Vaccine Exemption Record Module — Supports appropriately authorized long-term exemption records.
- Original 4329 / pediatric-certificate-lifecycle: Vaccine Exemption Expiration & Reassessment Engine — Tracks medical exemption validity.
- Original 4334 / pediatric-certificate-lifecycle: Vaccine Certificate Revocation Module — Supports revocation of invalid or superseded certificates.
- Original 326 / laboratory-document-archives: Medical Receipt Archive — Stores digital receipts from healthcare providers.
- Original 346 / laboratory-document-archives: Implant Documentation Archive — Stores documents related to implanted medical devices.
- Original 368 / laboratory-document-archives: Laboratory Report Archive — Stores laboratory reports in chronological order.
- Original 545 / laboratory-document-archives: Eyeglass Prescription Archive — Stores optical prescriptions.
- Original 49 / core-clinical-documents: Reporting System — Provides automated reporting for users, healthcare providers, administrators and regulatory organizations.
- Original 162 / core-clinical-documents: Electronic Medical Notes — Maintain consultation notes, diagnoses, care plans, follow-up and attachments with structured generation support.
- Original 165 / core-clinical-documents: Medical Certificate Module — Create and retain medical certificates and support their digital signatures.
- Original 170 / core-clinical-documents: Medical Report Generator — Generate clinical summary documents with PDF, FHIR, HL7 and secure sharing outputs.
- Original 175 / core-clinical-documents: International Disability Documentation — Store disability certificates, assessments and translations and support controlled export.
- Original 255 / core-clinical-documents: AI Medical Interpreter — Designed to facilitate multilingual communication while preserving medical terminology.
- Original 257 / core-clinical-documents: Consultation Summary Generator — Physician reviews and approves before final publication.
- Original 273 / core-clinical-documents: Medical Sport Clearance — Automatic reminders before renewal.
- Original 319 / core-clinical-documents: Physician Performance Notes — Document professional observations, follow-up, laboratory interpretation and exercise recommendations in the medical record.
- Original 320 / core-clinical-documents: Performance Health Report — Generate physician-oriented reports covering activity, recovery, laboratory, hormonal, nutritional and lifestyle context.
- Original 426 / core-clinical-documents: Customs Medication Declaration — Stores customs declarations related to transported medications.
- Original 1016 / core-clinical-documents: Pediatric School Infection Certificate — Generates digital certificates.
- Original 1030 / core-clinical-documents: Pediatric Infection Document Generator — Generates infection-related medical documents.

## Requirements and source metadata

<a id="M19-CAP-DOCUMENTS-85a438f46ffd0d1f"></a>
- **M19-CAP-DOCUMENTS-85a438f46ffd0d1f**: Provides verifiable vaccination information through the Medical Passport.
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-4fbeeb87456accf5"></a>
- **M19-CAP-DOCUMENTS-4fbeeb87456accf5**: Supports
  Applies to original IDs: 4277, 326, 346, 368, 545, 162, 165, 255, 426, 1016, 1030.

<a id="M19-CAP-DOCUMENTS-53977d8f7dad8e06"></a>
- **M19-CAP-DOCUMENTS-53977d8f7dad8e06**: QR-based Access
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-ab22d6c1d7c38b52"></a>
- **M19-CAP-DOCUMENTS-ab22d6c1d7c38b52**: Digital Signatures
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-8e165741a4670a02"></a>
- **M19-CAP-DOCUMENTS-8e165741a4670a02**: Issuer Verification
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-ffda182bfe81bb2d"></a>
- **M19-CAP-DOCUMENTS-ffda182bfe81bb2d**: Vaccine History
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-d21d544e081edce9"></a>
- **M19-CAP-DOCUMENTS-d21d544e081edce9**: Multilingual Presentation
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-1940eb81cb9886a8"></a>
- **M19-CAP-DOCUMENTS-1940eb81cb9886a8**: Selective Data Sharing
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-38fe6151a00f4342"></a>
- **M19-CAP-DOCUMENTS-38fe6151a00f4342**: Offline Emergency Presentation
  Applies to original IDs: 4277.

<a id="M19-CAP-DOCUMENTS-5ba74d8fcc7b20cc"></a>
- **M19-CAP-DOCUMENTS-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 4277, 4326, 4327, 4328, 4329, 4334, 326, 346, 368, 545, 49, 162, 165, 170, 175, 255, 257, 273, 319, 320, 426, 1016.

<a id="M19-CAP-DOCUMENTS-d5232cbd3a326267"></a>
- **M19-CAP-DOCUMENTS-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4277, 4326, 4327, 4328, 4329, 4334, 326, 346, 368, 545, 49, 162, 165, 170, 175, 255, 257, 273, 319, 320, 426, 1016.

<a id="M19-CAP-DOCUMENTS-6f33acf3afb37064"></a>
- **M19-CAP-DOCUMENTS-6f33acf3afb37064**: ---
  Applies to original IDs: 4277, 4326, 4327, 4328, 4329, 4334, 326, 346, 368, 545, 49, 162, 165, 170, 175, 255, 257, 273, 319, 320, 426, 1016, 1030.

<a id="M19-CAP-DOCUMENTS-3ac5afabec451501"></a>
- **M19-CAP-DOCUMENTS-3ac5afabec451501**: Supports authorized digital medical exemption certificates.
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-011257364aecfedb"></a>
- **M19-CAP-DOCUMENTS-011257364aecfedb**: Contains
  Applies to original IDs: 4326, 4327.

<a id="M19-CAP-DOCUMENTS-c2a80b33bcc1cba2"></a>
- **M19-CAP-DOCUMENTS-c2a80b33bcc1cba2**: Certificate ID
  Applies to original IDs: 4326, 4334.

<a id="M19-CAP-DOCUMENTS-929961d09c84a707"></a>
- **M19-CAP-DOCUMENTS-929961d09c84a707**: Vaccine or Vaccine Class
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-b83d94941a3f9df1"></a>
- **M19-CAP-DOCUMENTS-b83d94941a3f9df1**: Exemption Status
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-7b3000be0e912cce"></a>
- **M19-CAP-DOCUMENTS-7b3000be0e912cce**: Validity
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-9635b0f7a187b097"></a>
- **M19-CAP-DOCUMENTS-9635b0f7a187b097**: Issuing Clinician
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-8dcf50da896726c9"></a>
- **M19-CAP-DOCUMENTS-8dcf50da896726c9**: Jurisdiction
  Applies to original IDs: 4326, 4327, 4328.

<a id="M19-CAP-DOCUMENTS-b95b8e5397e9b6e2"></a>
- **M19-CAP-DOCUMENTS-b95b8e5397e9b6e2**: Digital Signature
  Applies to original IDs: 4326, 49.

<a id="M19-CAP-DOCUMENTS-4ffbbbb119ba3766"></a>
- **M19-CAP-DOCUMENTS-4ffbbbb119ba3766**: Verification Status
  Applies to original IDs: 4326, 4334.

<a id="M19-CAP-DOCUMENTS-40050a3c3994b651"></a>
- **M19-CAP-DOCUMENTS-40050a3c3994b651**: Sensitive diagnosis information remains protected.
  Applies to original IDs: 4326.

<a id="M19-CAP-DOCUMENTS-9e36777f1d9fe27b"></a>
- **M19-CAP-DOCUMENTS-9e36777f1d9fe27b**: Supports time-limited medical exemptions.
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-13fdabb1aa8b539f"></a>
- **M19-CAP-DOCUMENTS-13fdabb1aa8b539f**: Effective Date
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-337b49704d348de9"></a>
- **M19-CAP-DOCUMENTS-337b49704d348de9**: Expiration Date
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-2bba8360024db7c3"></a>
- **M19-CAP-DOCUMENTS-2bba8360024db7c3**: Reassessment Date
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-24a2871c8f2a2e95"></a>
- **M19-CAP-DOCUMENTS-24a2871c8f2a2e95**: Applicable Vaccine
  Applies to original IDs: 4327, 4328.

<a id="M19-CAP-DOCUMENTS-5e936b6e5cee2f56"></a>
- **M19-CAP-DOCUMENTS-5e936b6e5cee2f56**: Authorized Clinician
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-148ccaa7d363d4a7"></a>
- **M19-CAP-DOCUMENTS-148ccaa7d363d4a7**: Verification Data
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-c92a5bde8ca14288"></a>
- **M19-CAP-DOCUMENTS-c92a5bde8ca14288**: Automatically transitions to reassessment when validity expires.
  Applies to original IDs: 4327.

<a id="M19-CAP-DOCUMENTS-acfcbe6f7504fc93"></a>
- **M19-CAP-DOCUMENTS-acfcbe6f7504fc93**: Supports appropriately authorized long-term exemption records.
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-f01a0c3644ebaf7a"></a>
- **M19-CAP-DOCUMENTS-f01a0c3644ebaf7a**: Records
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-e84b45f799c36717"></a>
- **M19-CAP-DOCUMENTS-e84b45f799c36717**: Medical Classification
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-9128c0faadad5ae7"></a>
- **M19-CAP-DOCUMENTS-9128c0faadad5ae7**: Authorizing Specialist
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-47938ffbcdd000e3"></a>
- **M19-CAP-DOCUMENTS-47938ffbcdd000e3**: Evidence Reference
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-10f35868ff6e2c00"></a>
- **M19-CAP-DOCUMENTS-10f35868ff6e2c00**: Issue Date
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-b06a9c643b3e40b5"></a>
- **M19-CAP-DOCUMENTS-b06a9c643b3e40b5**: Reassessment Requirements where applicable
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-697310a7afdcc9db"></a>
- **M19-CAP-DOCUMENTS-697310a7afdcc9db**: Permanent status is never generated solely by AI.
  Applies to original IDs: 4328.

<a id="M19-CAP-DOCUMENTS-907e8a8936cabad6"></a>
- **M19-CAP-DOCUMENTS-907e8a8936cabad6**: Tracks medical exemption validity.
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-4db49935c1bab8b0"></a>
- **M19-CAP-DOCUMENTS-4db49935c1bab8b0**: Provides
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-5e2c97259a96e708"></a>
- **M19-CAP-DOCUMENTS-5e2c97259a96e708**: Upcoming Expiration Alerts
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-0a65de7924e1e25b"></a>
- **M19-CAP-DOCUMENTS-0a65de7924e1e25b**: Reassessment Requests
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-cbc065ff4fa3df61"></a>
- **M19-CAP-DOCUMENTS-cbc065ff4fa3df61**: Expired Status
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-018d4271b48e880b"></a>
- **M19-CAP-DOCUMENTS-018d4271b48e880b**: Renewal Workflow
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-962840eae0709ceb"></a>
- **M19-CAP-DOCUMENTS-962840eae0709ceb**: Specialist Referral
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-c0f5791f44eca407"></a>
- **M19-CAP-DOCUMENTS-c0f5791f44eca407**: Updated Certificate Version
  Applies to original IDs: 4329.

<a id="M19-CAP-DOCUMENTS-690cd6cea5f632d5"></a>
- **M19-CAP-DOCUMENTS-690cd6cea5f632d5**: Supports revocation of invalid or superseded certificates.
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-20dcf9e08bfc7cd6"></a>
- **M19-CAP-DOCUMENTS-20dcf9e08bfc7cd6**: Tracks
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-65657914f01c4f60"></a>
- **M19-CAP-DOCUMENTS-65657914f01c4f60**: Revocation Reason
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-b6449ff3606b3496"></a>
- **M19-CAP-DOCUMENTS-b6449ff3606b3496**: Authorized Actor
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-ed49e067f58a156c"></a>
- **M19-CAP-DOCUMENTS-ed49e067f58a156c**: Timestamp
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-834bee56ba71a7e1"></a>
- **M19-CAP-DOCUMENTS-834bee56ba71a7e1**: Replacement Certificate
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-56d93290eff75085"></a>
- **M19-CAP-DOCUMENTS-56d93290eff75085**: Preserves immutable audit history.
  Applies to original IDs: 4334.

<a id="M19-CAP-DOCUMENTS-71184f017e164a5a"></a>
- **M19-CAP-DOCUMENTS-71184f017e164a5a**: # Medical Receipt Archive
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-dc1eeff2c56728d6"></a>
- **M19-CAP-DOCUMENTS-dc1eeff2c56728d6**: Stores digital receipts from healthcare providers.
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-d718608f5142b96c"></a>
- **M19-CAP-DOCUMENTS-d718608f5142b96c**: PDF Documents
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-6fdf6fb507eec070"></a>
- **M19-CAP-DOCUMENTS-6fdf6fb507eec070**: Images
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-74e5b785fb18fd9c"></a>
- **M19-CAP-DOCUMENTS-74e5b785fb18fd9c**: Digital Receipts
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-4d8a9079b91b59ed"></a>
- **M19-CAP-DOCUMENTS-4d8a9079b91b59ed**: Insurance Documents
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-c958851769f77f48"></a>
- **M19-CAP-DOCUMENTS-c958851769f77f48**: Integrated with Medical Finance.
  Applies to original IDs: 326.

<a id="M19-CAP-DOCUMENTS-9aee27efdf38d950"></a>
- **M19-CAP-DOCUMENTS-9aee27efdf38d950**: # Implant Documentation
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-b076f6f9e257afcf"></a>
- **M19-CAP-DOCUMENTS-b076f6f9e257afcf**: Stores documents related to implanted medical devices.
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-82126361518aba72"></a>
- **M19-CAP-DOCUMENTS-82126361518aba72**: Implant Passport
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-7f279095cb7caacd"></a>
- **M19-CAP-DOCUMENTS-7f279095cb7caacd**: Manufacturer Information
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-745e5d4121605a7c"></a>
- **M19-CAP-DOCUMENTS-745e5d4121605a7c**: Model Number
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-d10a36a5dddd617a"></a>
- **M19-CAP-DOCUMENTS-d10a36a5dddd617a**: Serial Number
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-d07223af79bcd364"></a>
- **M19-CAP-DOCUMENTS-d07223af79bcd364**: Implantation Date
  Applies to original IDs: 346.

<a id="M19-CAP-DOCUMENTS-3832d18807806658"></a>
- **M19-CAP-DOCUMENTS-3832d18807806658**: # Laboratory Report Archive
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-58a5205d23a942d0"></a>
- **M19-CAP-DOCUMENTS-58a5205d23a942d0**: Stores laboratory reports in chronological order.
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-d93b3f17217a773b"></a>
- **M19-CAP-DOCUMENTS-d93b3f17217a773b**: PDF Reports
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-3f56bdada1b07a61"></a>
- **M19-CAP-DOCUMENTS-3f56bdada1b07a61**: Digital Reports
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-f848c45678d661db"></a>
- **M19-CAP-DOCUMENTS-f848c45678d661db**: Historical Reports
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-77c045177935326f"></a>
- **M19-CAP-DOCUMENTS-77c045177935326f**: Physician Access
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-8a0fa2f988f3fde1"></a>
- **M19-CAP-DOCUMENTS-8a0fa2f988f3fde1**: Integrated with Medical Archive.
  Applies to original IDs: 368.

<a id="M19-CAP-DOCUMENTS-0e2d5551af0558e4"></a>
- **M19-CAP-DOCUMENTS-0e2d5551af0558e4**: # Eyeglass Prescription Archive
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-e9a028a0f015a5bb"></a>
- **M19-CAP-DOCUMENTS-e9a028a0f015a5bb**: Stores optical prescriptions.
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-45334584ca9676f0"></a>
- **M19-CAP-DOCUMENTS-45334584ca9676f0**: Right Eye
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-e5e5414d28ef95de"></a>
- **M19-CAP-DOCUMENTS-e5e5414d28ef95de**: Left Eye
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-03b57af48db1bc36"></a>
- **M19-CAP-DOCUMENTS-03b57af48db1bc36**: Cylinder
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-be27f1b5fb7a4423"></a>
- **M19-CAP-DOCUMENTS-be27f1b5fb7a4423**: Axis
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-d0d1b5d026d585f1"></a>
- **M19-CAP-DOCUMENTS-d0d1b5d026d585f1**: Addition
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-29083f75af6fa09a"></a>
- **M19-CAP-DOCUMENTS-29083f75af6fa09a**: Prism
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-16b7b14d1e87e43d"></a>
- **M19-CAP-DOCUMENTS-16b7b14d1e87e43d**: Prescription History
  Applies to original IDs: 545.

<a id="M19-CAP-DOCUMENTS-9463fbd28dd7c95a"></a>
- **M19-CAP-DOCUMENTS-9463fbd28dd7c95a**: # Reporting System
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-2f5fdcca89ef8e56"></a>
- **M19-CAP-DOCUMENTS-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-a8829d29dd562bb3"></a>
- **M19-CAP-DOCUMENTS-a8829d29dd562bb3**: Provides automated reporting for users, healthcare providers, administrators and regulatory organizations.
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-3c25bf230e0eef0c"></a>
- **M19-CAP-DOCUMENTS-3c25bf230e0eef0c**: # Report Categories
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-2d052ebdee2572b1"></a>
- **M19-CAP-DOCUMENTS-2d052ebdee2572b1**: Medical Reports
  Applies to original IDs: 49, 1030.

<a id="M19-CAP-DOCUMENTS-7182e5129178e10d"></a>
- **M19-CAP-DOCUMENTS-7182e5129178e10d**: Prescription Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-cc63510d7a964573"></a>
- **M19-CAP-DOCUMENTS-cc63510d7a964573**: Vaccination Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-e243957e75e49c7f"></a>
- **M19-CAP-DOCUMENTS-e243957e75e49c7f**: Laboratory Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-462bd6c26af1b7b9"></a>
- **M19-CAP-DOCUMENTS-462bd6c26af1b7b9**: Insurance Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9bfc5ba930207a4a"></a>
- **M19-CAP-DOCUMENTS-9bfc5ba930207a4a**: Telemedicine Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-c20ff7ad734c82c4"></a>
- **M19-CAP-DOCUMENTS-c20ff7ad734c82c4**: QR Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-118eb5a1fd9230c7"></a>
- **M19-CAP-DOCUMENTS-118eb5a1fd9230c7**: AI Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-e0ac9f801f47d112"></a>
- **M19-CAP-DOCUMENTS-e0ac9f801f47d112**: Financial Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9b8ed1e167072f40"></a>
- **M19-CAP-DOCUMENTS-9b8ed1e167072f40**: Security Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-b579a424c276e133"></a>
- **M19-CAP-DOCUMENTS-b579a424c276e133**: # Medical Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-287e2c8fd7d242ed"></a>
- **M19-CAP-DOCUMENTS-287e2c8fd7d242ed**: Patient Summary
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-2cbd1f2aea929b9b"></a>
- **M19-CAP-DOCUMENTS-2cbd1f2aea929b9b**: Medication History
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-d8893edb21b7a8cf"></a>
- **M19-CAP-DOCUMENTS-d8893edb21b7a8cf**: Diagnosis History
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-7b89d5c0d957eb6e"></a>
- **M19-CAP-DOCUMENTS-7b89d5c0d957eb6e**: Allergy Summary
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-a91b469df851c232"></a>
- **M19-CAP-DOCUMENTS-a91b469df851c232**: Vaccination History
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-625a452653042346"></a>
- **M19-CAP-DOCUMENTS-625a452653042346**: Chronic Disease Report
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-c4bc59b8a8fcfbb5"></a>
- **M19-CAP-DOCUMENTS-c4bc59b8a8fcfbb5**: Emergency Medical Card
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-79a2c7cd7753661e"></a>
- **M19-CAP-DOCUMENTS-79a2c7cd7753661e**: # Administrative Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-ef16923e516087fa"></a>
- **M19-CAP-DOCUMENTS-ef16923e516087fa**: User Statistics
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-3d61ae372f082320"></a>
- **M19-CAP-DOCUMENTS-3d61ae372f082320**: System Usage
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-2cf07a8b5909c34f"></a>
- **M19-CAP-DOCUMENTS-2cf07a8b5909c34f**: AI Performance
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-0917b2732132032a"></a>
- **M19-CAP-DOCUMENTS-0917b2732132032a**: QR Statistics
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-4d9aa421bf2998d9"></a>
- **M19-CAP-DOCUMENTS-4d9aa421bf2998d9**: Payment Statistics
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9cefcf16c63d15b8"></a>
- **M19-CAP-DOCUMENTS-9cefcf16c63d15b8**: Audit Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-bce8d63fd76292c7"></a>
- **M19-CAP-DOCUMENTS-bce8d63fd76292c7**: # Financial Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-2c9de4fb372d66ab"></a>
- **M19-CAP-DOCUMENTS-2c9de4fb372d66ab**: Revenue
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-aff7e9bfe29f8293"></a>
- **M19-CAP-DOCUMENTS-aff7e9bfe29f8293**: Subscription Statistics
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-079cf9b52818f426"></a>
- **M19-CAP-DOCUMENTS-079cf9b52818f426**: Claims
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-363889129d2da994"></a>
- **M19-CAP-DOCUMENTS-363889129d2da994**: Refunds
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-15f45b2849600574"></a>
- **M19-CAP-DOCUMENTS-15f45b2849600574**: Transactions
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-b152419c811136fc"></a>
- **M19-CAP-DOCUMENTS-b152419c811136fc**: # Export Formats
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-96175796b7761e88"></a>
- **M19-CAP-DOCUMENTS-96175796b7761e88**: PDF
  Applies to original IDs: 49, 170, 175.

<a id="M19-CAP-DOCUMENTS-82cff81383d2da87"></a>
- **M19-CAP-DOCUMENTS-82cff81383d2da87**: CSV
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-af746b3cd959a9a3"></a>
- **M19-CAP-DOCUMENTS-af746b3cd959a9a3**: XLSX
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-c9b52647cb778119"></a>
- **M19-CAP-DOCUMENTS-c9b52647cb778119**: JSON
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-799c9737f1fa7b5f"></a>
- **M19-CAP-DOCUMENTS-799c9737f1fa7b5f**: XML
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-b2d3eb1f51566a55"></a>
- **M19-CAP-DOCUMENTS-b2d3eb1f51566a55**: # Filters
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-36d2fa83c0fc6c01"></a>
- **M19-CAP-DOCUMENTS-36d2fa83c0fc6c01**: Date Range
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-580c32d823047de1"></a>
- **M19-CAP-DOCUMENTS-580c32d823047de1**: Country
  Applies to original IDs: 49, 426.

<a id="M19-CAP-DOCUMENTS-2cdc52bf1d2f5303"></a>
- **M19-CAP-DOCUMENTS-2cdc52bf1d2f5303**: Language
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9292031266b0e334"></a>
- **M19-CAP-DOCUMENTS-9292031266b0e334**: Hospital
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-52a3545c159968e0"></a>
- **M19-CAP-DOCUMENTS-52a3545c159968e0**: Doctor
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-b3b1511164e136ec"></a>
- **M19-CAP-DOCUMENTS-b3b1511164e136ec**: Patient
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-5f124f9e42776b79"></a>
- **M19-CAP-DOCUMENTS-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-1dcc674f28b67008"></a>
- **M19-CAP-DOCUMENTS-1dcc674f28b67008**: Medicine
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-efc101e38d418651"></a>
- **M19-CAP-DOCUMENTS-efc101e38d418651**: # Security
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-5c29170953f7e94c"></a>
- **M19-CAP-DOCUMENTS-5c29170953f7e94c**: Encryption
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-bb76c2ec1e2674bf"></a>
- **M19-CAP-DOCUMENTS-bb76c2ec1e2674bf**: Access Control
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9bb33c6cd38082d8"></a>
- **M19-CAP-DOCUMENTS-9bb33c6cd38082d8**: Audit Logging
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-9879a69a15c5a50a"></a>
- **M19-CAP-DOCUMENTS-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-db59f8620101e9fd"></a>
- **M19-CAP-DOCUMENTS-db59f8620101e9fd**: ├── Users
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-41bd3320fb6ee128"></a>
- **M19-CAP-DOCUMENTS-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-ca0910ed36c02588"></a>
- **M19-CAP-DOCUMENTS-ca0910ed36c02588**: ├── Medicines
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-bd5acdeb2683509a"></a>
- **M19-CAP-DOCUMENTS-bd5acdeb2683509a**: ├── Diagnoses
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-37da9cd61593c7cd"></a>
- **M19-CAP-DOCUMENTS-37da9cd61593c7cd**: ├── AI
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-f7d3e7c6698ab073"></a>
- **M19-CAP-DOCUMENTS-f7d3e7c6698ab073**: ├── QR
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-a7f2ddd3ac9459b5"></a>
- **M19-CAP-DOCUMENTS-a7f2ddd3ac9459b5**: ├── Telemedicine
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-93878a6ec6a84276"></a>
- **M19-CAP-DOCUMENTS-93878a6ec6a84276**: ├── Payments
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-48a0e7b8fcbc590c"></a>
- **M19-CAP-DOCUMENTS-48a0e7b8fcbc590c**: ├── Audit Logs
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-37bfdffca1a32095"></a>
- **M19-CAP-DOCUMENTS-37bfdffca1a32095**: Future Features
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-81b3096a4ec4be2c"></a>
- **M19-CAP-DOCUMENTS-81b3096a4ec4be2c**: Scheduled Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-6ac0c6121ad8755f"></a>
- **M19-CAP-DOCUMENTS-6ac0c6121ad8755f**: AI Report Generation
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-30045ca53c172838"></a>
- **M19-CAP-DOCUMENTS-30045ca53c172838**: Executive Reports
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-f7c18196d43a46da"></a>
- **M19-CAP-DOCUMENTS-f7c18196d43a46da**: Government Reporting
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-5262fb45109b1828"></a>
- **M19-CAP-DOCUMENTS-5262fb45109b1828**: WHO Reporting
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-a506bf1077da2157"></a>
- **M19-CAP-DOCUMENTS-a506bf1077da2157**: Eurostat Reporting
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-34d61262f89b57a3"></a>
- **M19-CAP-DOCUMENTS-34d61262f89b57a3**: Public Health Statistics
  Applies to original IDs: 49.

<a id="M19-CAP-DOCUMENTS-efb91c47fa576f2e"></a>
- **M19-CAP-DOCUMENTS-efb91c47fa576f2e**: # Medical Notes
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-b0d40af775a7c885"></a>
- **M19-CAP-DOCUMENTS-b0d40af775a7c885**: Consultation Notes
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-182520ba3d242100"></a>
- **M19-CAP-DOCUMENTS-182520ba3d242100**: Diagnoses
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-e71d000ad9acb98e"></a>
- **M19-CAP-DOCUMENTS-e71d000ad9acb98e**: Treatment Plan
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-0d86946e629cc025"></a>
- **M19-CAP-DOCUMENTS-0d86946e629cc025**: Follow-up
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-fd7f8bb833ddabf6"></a>
- **M19-CAP-DOCUMENTS-fd7f8bb833ddabf6**: Attachments
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-a5bfe07c0a856276"></a>
- **M19-CAP-DOCUMENTS-a5bfe07c0a856276**: AI assists with structured note generation.
  Applies to original IDs: 162.

<a id="M19-CAP-DOCUMENTS-e55aa059da49733c"></a>
- **M19-CAP-DOCUMENTS-e55aa059da49733c**: # Medical Certificates
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-4edf42e86c2bd352"></a>
- **M19-CAP-DOCUMENTS-4edf42e86c2bd352**: Sick Leave
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-319e5441757dca10"></a>
- **M19-CAP-DOCUMENTS-319e5441757dca10**: Fitness Certificate
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-f242479c02860220"></a>
- **M19-CAP-DOCUMENTS-f242479c02860220**: Travel Certificate
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-9c266954e8b0b358"></a>
- **M19-CAP-DOCUMENTS-9c266954e8b0b358**: Vaccination Certificate
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-7cd946a4dd6f9a2f"></a>
- **M19-CAP-DOCUMENTS-7cd946a4dd6f9a2f**: Medical Clearance
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-7dd9e412fb5e3d00"></a>
- **M19-CAP-DOCUMENTS-7dd9e412fb5e3d00**: Digital signature supported.
  Applies to original IDs: 165.

<a id="M19-CAP-DOCUMENTS-a38ffccec8165aec"></a>
- **M19-CAP-DOCUMENTS-a38ffccec8165aec**: # Medical Report Generator
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-102f9103362fc0c3"></a>
- **M19-CAP-DOCUMENTS-102f9103362fc0c3**: Generates
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-02d5500ddd9908ad"></a>
- **M19-CAP-DOCUMENTS-02d5500ddd9908ad**: Consultation Report
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-1d21b571a1166e40"></a>
- **M19-CAP-DOCUMENTS-1d21b571a1166e40**: Laboratory Summary
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-5b3c6d5a4b577cb1"></a>
- **M19-CAP-DOCUMENTS-5b3c6d5a4b577cb1**: Medication Summary
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-2c809c574ddea982"></a>
- **M19-CAP-DOCUMENTS-2c809c574ddea982**: Hospital Summary
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-b67d6c6407351c95"></a>
- **M19-CAP-DOCUMENTS-b67d6c6407351c95**: AI Summary
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-24084e0e8a8d8545"></a>
- **M19-CAP-DOCUMENTS-24084e0e8a8d8545**: Export
  Applies to original IDs: 170, 175.

<a id="M19-CAP-DOCUMENTS-5faa423c7f424870"></a>
- **M19-CAP-DOCUMENTS-5faa423c7f424870**: FHIR
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-a6a8c99e93773aba"></a>
- **M19-CAP-DOCUMENTS-a6a8c99e93773aba**: HL7
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-766fc835a99a03af"></a>
- **M19-CAP-DOCUMENTS-766fc835a99a03af**: Secure Share
  Applies to original IDs: 170.

<a id="M19-CAP-DOCUMENTS-195482945f4f54aa"></a>
- **M19-CAP-DOCUMENTS-195482945f4f54aa**: # International Disability Documents
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-f46e10af70055b66"></a>
- **M19-CAP-DOCUMENTS-f46e10af70055b66**: Stores
  Applies to original IDs: 175, 273.

<a id="M19-CAP-DOCUMENTS-32d96f5d6b0c0d49"></a>
- **M19-CAP-DOCUMENTS-32d96f5d6b0c0d49**: National Disability Card
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-b7ef05f53ea27aa7"></a>
- **M19-CAP-DOCUMENTS-b7ef05f53ea27aa7**: International Certificates
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-0e31feeed8ea4789"></a>
- **M19-CAP-DOCUMENTS-0e31feeed8ea4789**: Medical Assessments
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-f73b3c1b1e14596f"></a>
- **M19-CAP-DOCUMENTS-f73b3c1b1e14596f**: Official Translations
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-54bd903c21f0cd01"></a>
- **M19-CAP-DOCUMENTS-54bd903c21f0cd01**: Digital Copies
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-94cd98c9145af728"></a>
- **M19-CAP-DOCUMENTS-94cd98c9145af728**: QR
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-3a740d7010f6507c"></a>
- **M19-CAP-DOCUMENTS-3a740d7010f6507c**: Secure Link
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-130eccb6f67dfbcb"></a>
- **M19-CAP-DOCUMENTS-130eccb6f67dfbcb**: FHIR Attachment
  Applies to original IDs: 175.

<a id="M19-CAP-DOCUMENTS-a5757cd0e251045a"></a>
- **M19-CAP-DOCUMENTS-a5757cd0e251045a**: # AI Interpreter
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-5a02667095780950"></a>
- **M19-CAP-DOCUMENTS-5a02667095780950**: Voice Translation
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-f4da5ed3406c94c1"></a>
- **M19-CAP-DOCUMENTS-f4da5ed3406c94c1**: Medical Terminology
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-58ef0ecae0cd4b8f"></a>
- **M19-CAP-DOCUMENTS-58ef0ecae0cd4b8f**: Live Conversation
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-da55b4ced83e05e6"></a>
- **M19-CAP-DOCUMENTS-da55b4ced83e05e6**: Subtitle Generation
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-d4e700b0c666bd9d"></a>
- **M19-CAP-DOCUMENTS-d4e700b0c666bd9d**: Consultation Summary
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-12f1a3f1a4016d6d"></a>
- **M19-CAP-DOCUMENTS-12f1a3f1a4016d6d**: Designed to facilitate multilingual communication while preserving medical terminology.
  Applies to original IDs: 255.

<a id="M19-CAP-DOCUMENTS-58cc22d4835ab7a9"></a>
- **M19-CAP-DOCUMENTS-58cc22d4835ab7a9**: # Consultation Summary
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-e4a7c2374c91acdf"></a>
- **M19-CAP-DOCUMENTS-e4a7c2374c91acdf**: Automatically prepares
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-5ee18a78d2f8b530"></a>
- **M19-CAP-DOCUMENTS-5ee18a78d2f8b530**: Visit Summary
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-db15b9a1384ed65e"></a>
- **M19-CAP-DOCUMENTS-db15b9a1384ed65e**: Recommendations
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-fba6567fc0a4b503"></a>
- **M19-CAP-DOCUMENTS-fba6567fc0a4b503**: Medication Changes
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-8152d4fa31a70705"></a>
- **M19-CAP-DOCUMENTS-8152d4fa31a70705**: Follow-up Plan
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-cb438c54eb357644"></a>
- **M19-CAP-DOCUMENTS-cb438c54eb357644**: Physician reviews and approves before final publication.
  Applies to original IDs: 257.

<a id="M19-CAP-DOCUMENTS-26afe8730fa4d7ff"></a>
- **M19-CAP-DOCUMENTS-26afe8730fa4d7ff**: # Sport Medical Clearance
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-91ac180034c33862"></a>
- **M19-CAP-DOCUMENTS-91ac180034c33862**: Medical Examinations
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-757382f59dbb7a38"></a>
- **M19-CAP-DOCUMENTS-757382f59dbb7a38**: Fitness Certificates
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-122226f503cb57ff"></a>
- **M19-CAP-DOCUMENTS-122226f503cb57ff**: Specialist Conclusions
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-b72a3981f980f6fe"></a>
- **M19-CAP-DOCUMENTS-b72a3981f980f6fe**: Expiration Dates
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-1451dcc06f2bca89"></a>
- **M19-CAP-DOCUMENTS-1451dcc06f2bca89**: Automatic reminders before renewal.
  Applies to original IDs: 273.

<a id="M19-CAP-DOCUMENTS-7f2d657f8e97bf23"></a>
- **M19-CAP-DOCUMENTS-7f2d657f8e97bf23**: # Physician Performance Notes
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-b57c9a94172abe25"></a>
- **M19-CAP-DOCUMENTS-b57c9a94172abe25**: Allows healthcare professionals to document
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-4b56c859f96d56e6"></a>
- **M19-CAP-DOCUMENTS-4b56c859f96d56e6**: Clinical Observations
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-d62a98e3c454827d"></a>
- **M19-CAP-DOCUMENTS-d62a98e3c454827d**: Follow-up Recommendations
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-65732cf3ce14cb72"></a>
- **M19-CAP-DOCUMENTS-65732cf3ce14cb72**: Laboratory Interpretation
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-83ea95c631f34f13"></a>
- **M19-CAP-DOCUMENTS-83ea95c631f34f13**: Exercise Recommendations
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-6f4f68c6123be066"></a>
- **M19-CAP-DOCUMENTS-6f4f68c6123be066**: Integrated with the patient's medical record.
  Applies to original IDs: 319.

<a id="M19-CAP-DOCUMENTS-3c22f2b699dfeb23"></a>
- **M19-CAP-DOCUMENTS-3c22f2b699dfeb23**: # Performance Health Report
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-6638ec47dd2d8867"></a>
- **M19-CAP-DOCUMENTS-6638ec47dd2d8867**: Generates structured reports including
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-0943ef8e2a954607"></a>
- **M19-CAP-DOCUMENTS-0943ef8e2a954607**: Physical Activity
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-2ead501f1441e7f1"></a>
- **M19-CAP-DOCUMENTS-2ead501f1441e7f1**: Recovery
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-71f790fdf94f9c10"></a>
- **M19-CAP-DOCUMENTS-71f790fdf94f9c10**: Laboratory Results
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-cad42ed132c5235f"></a>
- **M19-CAP-DOCUMENTS-cad42ed132c5235f**: Hormonal Monitoring
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-5768adaf9507e83f"></a>
- **M19-CAP-DOCUMENTS-5768adaf9507e83f**: Nutrition
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-2ca17148f0df833d"></a>
- **M19-CAP-DOCUMENTS-2ca17148f0df833d**: Lifestyle Factors
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-28ce7197fa4854c7"></a>
- **M19-CAP-DOCUMENTS-28ce7197fa4854c7**: Designed for physician review and long-term follow-up.
  Applies to original IDs: 320.

<a id="M19-CAP-DOCUMENTS-d4befef6aa5b824b"></a>
- **M19-CAP-DOCUMENTS-d4befef6aa5b824b**: # Customs Medication Declaration
  Applies to original IDs: 426.

<a id="M19-CAP-DOCUMENTS-39afa891fd6c6e08"></a>
- **M19-CAP-DOCUMENTS-39afa891fd6c6e08**: Stores customs declarations related to transported medications.
  Applies to original IDs: 426.

<a id="M19-CAP-DOCUMENTS-40393de2cee738b1"></a>
- **M19-CAP-DOCUMENTS-40393de2cee738b1**: Entry Date
  Applies to original IDs: 426.

<a id="M19-CAP-DOCUMENTS-0e8b278920617d2e"></a>
- **M19-CAP-DOCUMENTS-0e8b278920617d2e**: Medication List
  Applies to original IDs: 426.

<a id="M19-CAP-DOCUMENTS-49559cfbf7b93423"></a>
- **M19-CAP-DOCUMENTS-49559cfbf7b93423**: Documentation Archive
  Applies to original IDs: 426.

<a id="M19-CAP-DOCUMENTS-ca61f088cc05a3a6"></a>
- **M19-CAP-DOCUMENTS-ca61f088cc05a3a6**: # Pediatric School Infection Certificate
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-3df3b91b791458da"></a>
- **M19-CAP-DOCUMENTS-3df3b91b791458da**: Generates digital certificates.
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-b03ef2b21b668dc9"></a>
- **M19-CAP-DOCUMENTS-b03ef2b21b668dc9**: Recovery Confirmation
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-9c332fd85475a4a1"></a>
- **M19-CAP-DOCUMENTS-9c332fd85475a4a1**: Return to School
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-f3beb04729c63a25"></a>
- **M19-CAP-DOCUMENTS-f3beb04729c63a25**: Physician Signature
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-f57da9be49d5101a"></a>
- **M19-CAP-DOCUMENTS-f57da9be49d5101a**: QR Validation
  Applies to original IDs: 1016.

<a id="M19-CAP-DOCUMENTS-2949708e2fb34727"></a>
- **M19-CAP-DOCUMENTS-2949708e2fb34727**: Generates infection-related medical documents.
  Applies to original IDs: 1030.

<a id="M19-CAP-DOCUMENTS-b6389a500e252b34"></a>
- **M19-CAP-DOCUMENTS-b6389a500e252b34**: Certificates
  Applies to original IDs: 1030.

<a id="M19-CAP-DOCUMENTS-3150e7f308e57b23"></a>
- **M19-CAP-DOCUMENTS-3150e7f308e57b23**: QR Documents
  Applies to original IDs: 1030.

<a id="M19-CAP-DOCUMENTS-6b3c09e6887e75b5"></a>
- **M19-CAP-DOCUMENTS-6b3c09e6887e75b5**: PDF Export
  Applies to original IDs: 1030.
