# CORE-CAP-INTEROP — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: ConnectorProfile, MappingCandidate, MappingRelease, ImportBatch, LossReport. Dependencies: CAP-INTEROP, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-IDENTITY, CAP-AI.

Authorized read-only discovery → format/schema profiling → proposed concept mapping → loss/conflict validation → sandbox → independent signed release → quarantine/import-owner acceptance → drift suspension and attributable correction.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M04-STRATEGIC-INTEROP

Original IDs: 1356, 1359.

Named protocols and external-system intent overlap the proposed adaptive connector; discovery, mapping/loss review and signed releases extend the existing integration owner.

Authorized read-only discovery → format/schema profiling → proposed concept mapping → loss/conflict validation → sandbox → independent signed release → quarantine/import-owner acceptance → drift suspension and attributable correction.

### M08-INTEROP

Original IDs: 61, 62, 70.

FHIR/HL7 and gateway profiles share translation/transport ownership. Preserve every listed resource/message/version/connector category and circuit-breaker/retry/audit requirement; each actual partner release needs schemas, terminology and loss fixtures. No automatic connector activation, unsupported conformance claim or clinical truth overwrite.

Authorized read-only discovery → format/schema profiling → proposed concept mapping → loss/conflict validation → sandbox → independent signed release → quarantine/import-owner acceptance → drift suspension and attributable correction.

## Integrated extension decisions

- EXT-INTEROP: INTEGRATED at documentation scope. Existing protocol/connector intent is extended by authorized discovery, proposed semantic mapping, loss reports, independent approval and rollback. A protocol name never establishes partner conformance.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-INTEROP-cdce9740ec75f3a6"></a>
- **M08-CAP-INTEROP-cdce9740ec75f3a6**: Defines integration with the HL7 FHIR international healthcare interoperability standard.
  Origin: original 61

<a id="M08-CAP-INTEROP-b3b1511164e136ec"></a>
- **M08-CAP-INTEROP-b3b1511164e136ec**: Patient
  Origin: original 61

<a id="M08-CAP-INTEROP-90077f4b2cffd18e"></a>
- **M08-CAP-INTEROP-90077f4b2cffd18e**: Practitioner
  Origin: original 61

<a id="M08-CAP-INTEROP-919082fc85b78913"></a>
- **M08-CAP-INTEROP-919082fc85b78913**: Organization
  Origin: original 61

<a id="M08-CAP-INTEROP-0f209567811a28ab"></a>
- **M08-CAP-INTEROP-0f209567811a28ab**: Encounter
  Origin: original 61

<a id="M08-CAP-INTEROP-7ee68083ea7ce070"></a>
- **M08-CAP-INTEROP-7ee68083ea7ce070**: Observation
  Origin: original 61

<a id="M08-CAP-INTEROP-57ccfe90efd3a695"></a>
- **M08-CAP-INTEROP-57ccfe90efd3a695**: Condition
  Origin: original 61

<a id="M08-CAP-INTEROP-8069b7a707a840a5"></a>
- **M08-CAP-INTEROP-8069b7a707a840a5**: AllergyIntolerance
  Origin: original 61

<a id="M08-CAP-INTEROP-3cfa39200ce0ea10"></a>
- **M08-CAP-INTEROP-3cfa39200ce0ea10**: Medication
  Origin: original 61

<a id="M08-CAP-INTEROP-29ce190075f445ce"></a>
- **M08-CAP-INTEROP-29ce190075f445ce**: MedicationRequest
  Origin: original 61

<a id="M08-CAP-INTEROP-fff36c39e6b83cd0"></a>
- **M08-CAP-INTEROP-fff36c39e6b83cd0**: Immunization
  Origin: original 61

<a id="M08-CAP-INTEROP-c955a105dd666a1e"></a>
- **M08-CAP-INTEROP-c955a105dd666a1e**: DiagnosticReport
  Origin: original 61

<a id="M08-CAP-INTEROP-f53ba0c0214c2b5f"></a>
- **M08-CAP-INTEROP-f53ba0c0214c2b5f**: Procedure
  Origin: original 61

<a id="M08-CAP-INTEROP-2ea19532e107254c"></a>
- **M08-CAP-INTEROP-2ea19532e107254c**: DocumentReference
  Origin: original 61

<a id="M08-CAP-INTEROP-c807b29134799af1"></a>
- **M08-CAP-INTEROP-c807b29134799af1**: CarePlan
  Origin: original 61

<a id="M08-CAP-INTEROP-864d8ee14d518aed"></a>
- **M08-CAP-INTEROP-864d8ee14d518aed**: Coverage
  Origin: original 61

<a id="M08-CAP-INTEROP-9e9dbb804ca8197a"></a>
- **M08-CAP-INTEROP-9e9dbb804ca8197a**: Medical Passport
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-60ad5f0e95a3c0f2"></a>
- **M08-CAP-INTEROP-60ad5f0e95a3c0f2**: ↓
  Origin: original 61, original 62, original 70

<a id="M08-CAP-INTEROP-5078aa4abb359c7e"></a>
- **M08-CAP-INTEROP-5078aa4abb359c7e**: FHIR Mapper
  Origin: original 61

<a id="M08-CAP-INTEROP-c8be510668307f22"></a>
- **M08-CAP-INTEROP-c8be510668307f22**: FHIR Resources
  Origin: original 61

<a id="M08-CAP-INTEROP-6d42b3542e7a005a"></a>
- **M08-CAP-INTEROP-6d42b3542e7a005a**: Hospital Information System
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-d30b147b276b238d"></a>
- **M08-CAP-INTEROP-d30b147b276b238d**: Electronic Health Record
  Origin: original 61

<a id="M08-CAP-INTEROP-2dde5b697b778203"></a>
- **M08-CAP-INTEROP-2dde5b697b778203**: FHIR R4
  Origin: original 61

<a id="M08-CAP-INTEROP-e65c1b93e7237021"></a>
- **M08-CAP-INTEROP-e65c1b93e7237021**: FHIR R4B
  Origin: original 61

<a id="M08-CAP-INTEROP-8176b8f8f392ce1a"></a>
- **M08-CAP-INTEROP-8176b8f8f392ce1a**: FHIR R5 (Future)
  Origin: original 61

<a id="M08-CAP-INTEROP-182520ba3d242100"></a>
- **M08-CAP-INTEROP-182520ba3d242100**: Diagnoses
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-d7a2add4cd06a8e6"></a>
- **M08-CAP-INTEROP-d7a2add4cd06a8e6**: Medicines
  Origin: original 61

<a id="M08-CAP-INTEROP-ca00fc7c0d0e2a70"></a>
- **M08-CAP-INTEROP-ca00fc7c0d0e2a70**: Vaccinations
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-71f790fdf94f9c10"></a>
- **M08-CAP-INTEROP-71f790fdf94f9c10**: Laboratory Results
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-f6feaab2781dc285"></a>
- **M08-CAP-INTEROP-f6feaab2781dc285**: Medical Documents
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-62d40b61fc447a79"></a>
- **M08-CAP-INTEROP-62d40b61fc447a79**: Emergency Card
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-24f5c88a3f294930"></a>
- **M08-CAP-INTEROP-24f5c88a3f294930**: Prescriptions
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-b9f7850c43c977c3"></a>
- **M08-CAP-INTEROP-b9f7850c43c977c3**: Medical History
  Origin: original 61

<a id="M08-CAP-INTEROP-9c266954e8b0b358"></a>
- **M08-CAP-INTEROP-9c266954e8b0b358**: Vaccination Certificate
  Origin: original 61

<a id="M08-CAP-INTEROP-1fcd23c11cd2a403"></a>
- **M08-CAP-INTEROP-1fcd23c11cd2a403**: OAuth2
  Origin: original 61, original 62, original 70

<a id="M08-CAP-INTEROP-a2b3a3d1e3de6f44"></a>
- **M08-CAP-INTEROP-a2b3a3d1e3de6f44**: SMART on FHIR
  Origin: original 61

<a id="M08-CAP-INTEROP-dcbab808a3e06a8e"></a>
- **M08-CAP-INTEROP-dcbab808a3e06a8e**: JWT
  Origin: original 61, original 62, original 70

<a id="M08-CAP-INTEROP-44effbba6a37147d"></a>
- **M08-CAP-INTEROP-44effbba6a37147d**: TLS 1.3
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-b95b8e5397e9b6e2"></a>
- **M08-CAP-INTEROP-b95b8e5397e9b6e2**: Digital Signature
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-e496807084365b11"></a>
- **M08-CAP-INTEROP-e496807084365b11**: ├── Hospitals
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-92e7cc6c67badac3"></a>
- **M08-CAP-INTEROP-92e7cc6c67badac3**: ├── Clinics
  Origin: original 61, original 62

<a id="M08-CAP-INTEROP-57f93485edb2909d"></a>
- **M08-CAP-INTEROP-57f93485edb2909d**: ├── National EHR
  Origin: original 61

<a id="M08-CAP-INTEROP-a7f2ddd3ac9459b5"></a>
- **M08-CAP-INTEROP-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 61, original 70

<a id="M08-CAP-INTEROP-93522f774f6d0bd5"></a>
- **M08-CAP-INTEROP-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 61, original 70

<a id="M08-CAP-INTEROP-efa2a8ae50719ab3"></a>
- **M08-CAP-INTEROP-efa2a8ae50719ab3**: ├── QR Passport
  Origin: original 61, original 70

<a id="M08-CAP-INTEROP-37bfdffca1a32095"></a>
- **M08-CAP-INTEROP-37bfdffca1a32095**: Future Features
  Origin: original 61, original 62, original 70

<a id="M08-CAP-INTEROP-84475a956e9ba1e5"></a>
- **M08-CAP-INTEROP-84475a956e9ba1e5**: SMART on FHIR Apps
  Origin: original 61

<a id="M08-CAP-INTEROP-bcd8d18d20c1d713"></a>
- **M08-CAP-INTEROP-bcd8d18d20c1d713**: National Health Exchange
  Origin: original 61

<a id="M08-CAP-INTEROP-ba2bfa6b73e9a550"></a>
- **M08-CAP-INTEROP-ba2bfa6b73e9a550**: Cross-border Medical Exchange
  Origin: original 61

<a id="M08-CAP-INTEROP-0cc675dce1c21511"></a>
- **M08-CAP-INTEROP-0cc675dce1c21511**: Automatic Hospital Synchronization
  Origin: original 61

<a id="M08-CAP-INTEROP-980eb5e11423a714"></a>
- **M08-CAP-INTEROP-980eb5e11423a714**: Real-time Medical Updates
  Origin: original 61

<a id="M08-CAP-INTEROP-8814e4d56609896e"></a>
- **M08-CAP-INTEROP-8814e4d56609896e**: International Health Networks
  Origin: original 61

<a id="M08-CAP-INTEROP-8344117a29c23018"></a>
- **M08-CAP-INTEROP-8344117a29c23018**: Defines integration with HL7-based healthcare information systems.
  Origin: original 62

<a id="M08-CAP-INTEROP-31a511c0983dd690"></a>
- **M08-CAP-INTEROP-31a511c0983dd690**: HL7 v2.x
  Origin: original 62

<a id="M08-CAP-INTEROP-4f28b6cfbec1da6a"></a>
- **M08-CAP-INTEROP-4f28b6cfbec1da6a**: HL7 v3
  Origin: original 62

<a id="M08-CAP-INTEROP-8bc74ba95085a16a"></a>
- **M08-CAP-INTEROP-8bc74ba95085a16a**: CDA
  Origin: original 62, original 1356

<a id="M08-CAP-INTEROP-5ad57b8c461631cc"></a>
- **M08-CAP-INTEROP-5ad57b8c461631cc**: CCDA
  Origin: original 62

<a id="M08-CAP-INTEROP-b213a683c300c815"></a>
- **M08-CAP-INTEROP-b213a683c300c815**: FHIR Bridge
  Origin: original 62

<a id="M08-CAP-INTEROP-8e5ef318d680be5e"></a>
- **M08-CAP-INTEROP-8e5ef318d680be5e**: ADT
  Origin: original 62

<a id="M08-CAP-INTEROP-628b526cd2966a08"></a>
- **M08-CAP-INTEROP-628b526cd2966a08**: ORM
  Origin: original 62

<a id="M08-CAP-INTEROP-92f9e700562f8e5b"></a>
- **M08-CAP-INTEROP-92f9e700562f8e5b**: ORU
  Origin: original 62

<a id="M08-CAP-INTEROP-5f37a80caa101b75"></a>
- **M08-CAP-INTEROP-5f37a80caa101b75**: MDM
  Origin: original 62

<a id="M08-CAP-INTEROP-2c4ea6fb25f06fde"></a>
- **M08-CAP-INTEROP-2c4ea6fb25f06fde**: SIU
  Origin: original 62

<a id="M08-CAP-INTEROP-180aa84594bfcaee"></a>
- **M08-CAP-INTEROP-180aa84594bfcaee**: DFT
  Origin: original 62

<a id="M08-CAP-INTEROP-d876b78bfa2757f2"></a>
- **M08-CAP-INTEROP-d876b78bfa2757f2**: VXU
  Origin: original 62

<a id="M08-CAP-INTEROP-37fc2ade89d97f6b"></a>
- **M08-CAP-INTEROP-37fc2ade89d97f6b**: QRY
  Origin: original 62

<a id="M08-CAP-INTEROP-41caf1021bdeec56"></a>
- **M08-CAP-INTEROP-41caf1021bdeec56**: ACK
  Origin: original 62

<a id="M08-CAP-INTEROP-e13d2163a28bbc5c"></a>
- **M08-CAP-INTEROP-e13d2163a28bbc5c**: HL7 Gateway
  Origin: original 62

<a id="M08-CAP-INTEROP-f90059176918a357"></a>
- **M08-CAP-INTEROP-f90059176918a357**: Message Parser
  Origin: original 62

<a id="M08-CAP-INTEROP-0c39ee7a5f2484a4"></a>
- **M08-CAP-INTEROP-0c39ee7a5f2484a4**: Validation
  Origin: original 62

<a id="M08-CAP-INTEROP-73cfa407420574e8"></a>
- **M08-CAP-INTEROP-73cfa407420574e8**: Database
  Origin: original 62

<a id="M08-CAP-INTEROP-6a7737edecac8dda"></a>
- **M08-CAP-INTEROP-6a7737edecac8dda**: Patient Registration
  Origin: original 62

<a id="M08-CAP-INTEROP-d212a31cd8b6d87a"></a>
- **M08-CAP-INTEROP-d212a31cd8b6d87a**: Hospital Admissions
  Origin: original 62

<a id="M08-CAP-INTEROP-474bef8e88720a2c"></a>
- **M08-CAP-INTEROP-474bef8e88720a2c**: Medical Summary
  Origin: original 62

<a id="M08-CAP-INTEROP-137445703f51ac69"></a>
- **M08-CAP-INTEROP-137445703f51ac69**: Clinical Documents
  Origin: original 62

<a id="M08-CAP-INTEROP-bfaa6caa1e59854b"></a>
- **M08-CAP-INTEROP-bfaa6caa1e59854b**: Discharge Summary
  Origin: original 62

<a id="M08-CAP-INTEROP-848727e21b522fed"></a>
- **M08-CAP-INTEROP-848727e21b522fed**: Referrals
  Origin: original 62

<a id="M08-CAP-INTEROP-918c6503d072ec65"></a>
- **M08-CAP-INTEROP-918c6503d072ec65**: HL7 Schema Validation
  Origin: original 62

<a id="M08-CAP-INTEROP-9c611ddb2f496211"></a>
- **M08-CAP-INTEROP-9c611ddb2f496211**: Message Integrity
  Origin: original 62

<a id="M08-CAP-INTEROP-3dc6cd668fb0fcaa"></a>
- **M08-CAP-INTEROP-3dc6cd668fb0fcaa**: Duplicate Detection
  Origin: original 62

<a id="M08-CAP-INTEROP-b1bd5cfcf6d1416f"></a>
- **M08-CAP-INTEROP-b1bd5cfcf6d1416f**: Error Handling
  Origin: original 62

<a id="M08-CAP-INTEROP-bc012269eef59f3c"></a>
- **M08-CAP-INTEROP-bc012269eef59f3c**: VPN
  Origin: original 62

<a id="M08-CAP-INTEROP-2b6baf8a4b2a225c"></a>
- **M08-CAP-INTEROP-2b6baf8a4b2a225c**: Digital Certificates
  Origin: original 62

<a id="M08-CAP-INTEROP-d20a95b6b63719a7"></a>
- **M08-CAP-INTEROP-d20a95b6b63719a7**: Audit Logs
  Origin: original 62, original 70

<a id="M08-CAP-INTEROP-9fa7837bdf357285"></a>
- **M08-CAP-INTEROP-9fa7837bdf357285**: ├── FHIR
  Origin: original 62

<a id="M08-CAP-INTEROP-203034f4e671b3b0"></a>
- **M08-CAP-INTEROP-203034f4e671b3b0**: ├── Laboratory Systems
  Origin: original 62

<a id="M08-CAP-INTEROP-25987517a3699254"></a>
- **M08-CAP-INTEROP-25987517a3699254**: ├── PACS
  Origin: original 62

<a id="M08-CAP-INTEROP-17ebf3b758d1f27d"></a>
- **M08-CAP-INTEROP-17ebf3b758d1f27d**: ├── National Health Systems
  Origin: original 62, original 70

<a id="M08-CAP-INTEROP-a4cafc0d097b6399"></a>
- **M08-CAP-INTEROP-a4cafc0d097b6399**: Automatic HL7 Mapping
  Origin: original 62

<a id="M08-CAP-INTEROP-e153b831a5cb2254"></a>
- **M08-CAP-INTEROP-e153b831a5cb2254**: AI Data Validation
  Origin: original 62

<a id="M08-CAP-INTEROP-91bc2168dec007a8"></a>
- **M08-CAP-INTEROP-91bc2168dec007a8**: Real-time Synchronization
  Origin: original 62

<a id="M08-CAP-INTEROP-3caac442f77bc3fe"></a>
- **M08-CAP-INTEROP-3caac442f77bc3fe**: International Hospital Exchange
  Origin: original 62

<a id="M08-CAP-INTEROP-4cbd4f1f293d2492"></a>
- **M08-CAP-INTEROP-4cbd4f1f293d2492**: Cross-border Health Records
  Origin: original 62

<a id="M08-CAP-INTEROP-a19717db92e6a9ee"></a>
- **M08-CAP-INTEROP-a19717db92e6a9ee**: National Registry Integration
  Origin: original 62

<a id="M08-CAP-INTEROP-ca411947392fb1dc"></a>
- **M08-CAP-INTEROP-ca411947392fb1dc**: Provides a centralized gateway for secure communication with external healthcare, payment and third-party services.
  Origin: original 70

<a id="M08-CAP-INTEROP-38997c558ed865de"></a>
- **M08-CAP-INTEROP-38997c558ed865de**: Unified API Access
  Origin: original 70

<a id="M08-CAP-INTEROP-e5543a3ed72a8326"></a>
- **M08-CAP-INTEROP-e5543a3ed72a8326**: Authentication
  Origin: original 70

<a id="M08-CAP-INTEROP-9619e0e4c2834076"></a>
- **M08-CAP-INTEROP-9619e0e4c2834076**: Authorization
  Origin: original 70

<a id="M08-CAP-INTEROP-50c9278cdc7a856e"></a>
- **M08-CAP-INTEROP-50c9278cdc7a856e**: Rate Limiting
  Origin: original 70

<a id="M08-CAP-INTEROP-fd00742b6fa4dc7b"></a>
- **M08-CAP-INTEROP-fd00742b6fa4dc7b**: Logging
  Origin: original 70

<a id="M08-CAP-INTEROP-f5aeff23cb9d4fbe"></a>
- **M08-CAP-INTEROP-f5aeff23cb9d4fbe**: Monitoring
  Origin: original 70

<a id="M08-CAP-INTEROP-7ebecf0fc697c26f"></a>
- **M08-CAP-INTEROP-7ebecf0fc697c26f**: High Availability
  Origin: original 70

<a id="M08-CAP-INTEROP-2911ea11a161f615"></a>
- **M08-CAP-INTEROP-2911ea11a161f615**: Healthcare
  Origin: original 70

<a id="M08-CAP-INTEROP-b6e8bd9e5e799cd8"></a>
- **M08-CAP-INTEROP-b6e8bd9e5e799cd8**: Hospitals
  Origin: original 70

<a id="M08-CAP-INTEROP-f7142a8bb86fd8b2"></a>
- **M08-CAP-INTEROP-f7142a8bb86fd8b2**: Clinics
  Origin: original 70

<a id="M08-CAP-INTEROP-e5649b86c07b7df1"></a>
- **M08-CAP-INTEROP-e5649b86c07b7df1**: Laboratories
  Origin: original 70

<a id="M08-CAP-INTEROP-1d745269dabac525"></a>
- **M08-CAP-INTEROP-1d745269dabac525**: Pharmacies
  Origin: original 70

<a id="M08-CAP-INTEROP-7169c60cccee605c"></a>
- **M08-CAP-INTEROP-7169c60cccee605c**: Insurance Companies
  Origin: original 70

<a id="M08-CAP-INTEROP-0e990086e76dab92"></a>
- **M08-CAP-INTEROP-0e990086e76dab92**: Government
  Origin: original 70

<a id="M08-CAP-INTEROP-3f0543d6d2943b37"></a>
- **M08-CAP-INTEROP-3f0543d6d2943b37**: National Health Systems
  Origin: original 70

<a id="M08-CAP-INTEROP-5cf0e0b800631b45"></a>
- **M08-CAP-INTEROP-5cf0e0b800631b45**: EHDS
  Origin: original 70

<a id="M08-CAP-INTEROP-a6c263905826aa47"></a>
- **M08-CAP-INTEROP-a6c263905826aa47**: ePrescription Networks
  Origin: original 70

<a id="M08-CAP-INTEROP-9e66ca227574ecfb"></a>
- **M08-CAP-INTEROP-9e66ca227574ecfb**: Digital Identity Providers
  Origin: original 70

<a id="M08-CAP-INTEROP-2e838690f5e6217e"></a>
- **M08-CAP-INTEROP-2e838690f5e6217e**: AI Services
  Origin: original 70

<a id="M08-CAP-INTEROP-4e6146911c85532f"></a>
- **M08-CAP-INTEROP-4e6146911c85532f**: AI Assistant
  Origin: original 70

<a id="M08-CAP-INTEROP-ac989f3755277e65"></a>
- **M08-CAP-INTEROP-ac989f3755277e65**: OCR
  Origin: original 70

<a id="M08-CAP-INTEROP-113a1f2e2d274955"></a>
- **M08-CAP-INTEROP-113a1f2e2d274955**: Translation
  Origin: original 70

<a id="M08-CAP-INTEROP-2b4ec9d019c137b0"></a>
- **M08-CAP-INTEROP-2b4ec9d019c137b0**: Speech-to-Text
  Origin: original 70

<a id="M08-CAP-INTEROP-24ed8da4266aacc0"></a>
- **M08-CAP-INTEROP-24ed8da4266aacc0**: Text-to-Speech
  Origin: original 70

<a id="M08-CAP-INTEROP-28cbfdcefa11e191"></a>
- **M08-CAP-INTEROP-28cbfdcefa11e191**: Maps
  Origin: original 70

<a id="M08-CAP-INTEROP-56a43f5506056565"></a>
- **M08-CAP-INTEROP-56a43f5506056565**: Google Maps
  Origin: original 70

<a id="M08-CAP-INTEROP-a4fba57660184dcc"></a>
- **M08-CAP-INTEROP-a4fba57660184dcc**: Apple Maps
  Origin: original 70

<a id="M08-CAP-INTEROP-2aea315958c0883f"></a>
- **M08-CAP-INTEROP-2aea315958c0883f**: OpenStreetMap
  Origin: original 70

<a id="M08-CAP-INTEROP-f57a2598cdedb711"></a>
- **M08-CAP-INTEROP-f57a2598cdedb711**: Payments
  Origin: original 70

<a id="M08-CAP-INTEROP-149334a814ae2a63"></a>
- **M08-CAP-INTEROP-149334a814ae2a63**: Stripe
  Origin: original 70

<a id="M08-CAP-INTEROP-2874a0af9993f805"></a>
- **M08-CAP-INTEROP-2874a0af9993f805**: PayPal
  Origin: original 70

<a id="M08-CAP-INTEROP-c3d6425213522466"></a>
- **M08-CAP-INTEROP-c3d6425213522466**: Apple Pay
  Origin: original 70

<a id="M08-CAP-INTEROP-e13ebd3ec5e81036"></a>
- **M08-CAP-INTEROP-e13ebd3ec5e81036**: Google Pay
  Origin: original 70

<a id="M08-CAP-INTEROP-22c4d8e52be0076f"></a>
- **M08-CAP-INTEROP-22c4d8e52be0076f**: SEPA
  Origin: original 70

<a id="M08-CAP-INTEROP-6c2f4d895f25a6d5"></a>
- **M08-CAP-INTEROP-6c2f4d895f25a6d5**: Notifications
  Origin: original 70

<a id="M08-CAP-INTEROP-ab789e99c2797c85"></a>
- **M08-CAP-INTEROP-ab789e99c2797c85**: Firebase
  Origin: original 70

<a id="M08-CAP-INTEROP-28530c12ff1d37d8"></a>
- **M08-CAP-INTEROP-28530c12ff1d37d8**: Apple Push Notification Service
  Origin: original 70

<a id="M08-CAP-INTEROP-9e01fcc0674f2764"></a>
- **M08-CAP-INTEROP-9e01fcc0674f2764**: Twilio
  Origin: original 70

<a id="M08-CAP-INTEROP-f33e49d0c18a6e09"></a>
- **M08-CAP-INTEROP-f33e49d0c18a6e09**: SendGrid
  Origin: original 70

<a id="M08-CAP-INTEROP-cf769b7e4648b257"></a>
- **M08-CAP-INTEROP-cf769b7e4648b257**: Cloud Storage
  Origin: original 70

<a id="M08-CAP-INTEROP-a0637a5c84643795"></a>
- **M08-CAP-INTEROP-a0637a5c84643795**: AWS S3
  Origin: original 70

<a id="M08-CAP-INTEROP-647db462ecb4c20c"></a>
- **M08-CAP-INTEROP-647db462ecb4c20c**: Azure Blob Storage
  Origin: original 70

<a id="M08-CAP-INTEROP-6670ce60e163ce40"></a>
- **M08-CAP-INTEROP-6670ce60e163ce40**: Google Cloud Storage
  Origin: original 70

<a id="M08-CAP-INTEROP-d06e9d6bf148cddc"></a>
- **M08-CAP-INTEROP-d06e9d6bf148cddc**: Client
  Origin: original 70

<a id="M08-CAP-INTEROP-19086e6ec05cad80"></a>
- **M08-CAP-INTEROP-19086e6ec05cad80**: API Gateway
  Origin: original 70

<a id="M08-CAP-INTEROP-21d5a6006369762a"></a>
- **M08-CAP-INTEROP-21d5a6006369762a**: Request Validation
  Origin: original 70

<a id="M08-CAP-INTEROP-fe6faed82ee4a30d"></a>
- **M08-CAP-INTEROP-fe6faed82ee4a30d**: Service Routing
  Origin: original 70

<a id="M08-CAP-INTEROP-9eb353cff0dcf07a"></a>
- **M08-CAP-INTEROP-9eb353cff0dcf07a**: External API
  Origin: original 70

<a id="M08-CAP-INTEROP-6a60a2356ae80df4"></a>
- **M08-CAP-INTEROP-6a60a2356ae80df4**: Response Validation
  Origin: original 70

<a id="M08-CAP-INTEROP-202f9d6d04ef075d"></a>
- **M08-CAP-INTEROP-202f9d6d04ef075d**: API Keys
  Origin: original 70

<a id="M08-CAP-INTEROP-b2af95cb29675293"></a>
- **M08-CAP-INTEROP-b2af95cb29675293**: Mutual TLS
  Origin: original 70

<a id="M08-CAP-INTEROP-efa55b16ffd6b66c"></a>
- **M08-CAP-INTEROP-efa55b16ffd6b66c**: AES-256
  Origin: original 70

<a id="M08-CAP-INTEROP-f0ffb35f196e6e3a"></a>
- **M08-CAP-INTEROP-f0ffb35f196e6e3a**: IP Allowlist
  Origin: original 70

<a id="M08-CAP-INTEROP-4855792b5d5ecc05"></a>
- **M08-CAP-INTEROP-4855792b5d5ecc05**: Web Application Firewall
  Origin: original 70

<a id="M08-CAP-INTEROP-9339dda530f1d22b"></a>
- **M08-CAP-INTEROP-9339dda530f1d22b**: API Usage
  Origin: original 70

<a id="M08-CAP-INTEROP-14eec2f693ebba0c"></a>
- **M08-CAP-INTEROP-14eec2f693ebba0c**: Latency
  Origin: original 70

<a id="M08-CAP-INTEROP-3e411ea5500d0982"></a>
- **M08-CAP-INTEROP-3e411ea5500d0982**: Error Rate
  Origin: original 70

<a id="M08-CAP-INTEROP-0f7968e9409e0268"></a>
- **M08-CAP-INTEROP-0f7968e9409e0268**: Availability
  Origin: original 70

<a id="M08-CAP-INTEROP-e24f2e594d7faaaa"></a>
- **M08-CAP-INTEROP-e24f2e594d7faaaa**: Request Logs
  Origin: original 70

<a id="M08-CAP-INTEROP-4b9ca88e3e9cc5d0"></a>
- **M08-CAP-INTEROP-4b9ca88e3e9cc5d0**: Health Checks
  Origin: original 70

<a id="M08-CAP-INTEROP-a8bcf5b8889a591d"></a>
- **M08-CAP-INTEROP-a8bcf5b8889a591d**: Retry Mechanism
  Origin: original 70

<a id="M08-CAP-INTEROP-166f7cd16473cccf"></a>
- **M08-CAP-INTEROP-166f7cd16473cccf**: Circuit Breaker
  Origin: original 70

<a id="M08-CAP-INTEROP-edb4ae4d0222a441"></a>
- **M08-CAP-INTEROP-edb4ae4d0222a441**: Timeout Control
  Origin: original 70

<a id="M08-CAP-INTEROP-7a527bcced5278fb"></a>
- **M08-CAP-INTEROP-7a527bcced5278fb**: Load Balancing
  Origin: original 70

<a id="M08-CAP-INTEROP-3a133ad2e6d5c1f6"></a>
- **M08-CAP-INTEROP-3a133ad2e6d5c1f6**: Failover
  Origin: original 70

<a id="M08-CAP-INTEROP-915ec1403e040699"></a>
- **M08-CAP-INTEROP-915ec1403e040699**: Queue Processing
  Origin: original 70

<a id="M08-CAP-INTEROP-e1ec3543392ad999"></a>
- **M08-CAP-INTEROP-e1ec3543392ad999**: ├── Backend
  Origin: original 70

<a id="M08-CAP-INTEROP-93878a6ec6a84276"></a>
- **M08-CAP-INTEROP-93878a6ec6a84276**: ├── Payments
  Origin: original 70

<a id="M08-CAP-INTEROP-225d721817a80b2f"></a>
- **M08-CAP-INTEROP-225d721817a80b2f**: ├── Notifications
  Origin: original 70

<a id="M08-CAP-INTEROP-61bb6805419a5121"></a>
- **M08-CAP-INTEROP-61bb6805419a5121**: ├── Analytics
  Origin: original 70

<a id="M08-CAP-INTEROP-fb47ac4f47f989bd"></a>
- **M08-CAP-INTEROP-fb47ac4f47f989bd**: ├── Administration
  Origin: original 70

<a id="M08-CAP-INTEROP-365360b562f0d8b0"></a>
- **M08-CAP-INTEROP-365360b562f0d8b0**: API Marketplace
  Origin: original 70

<a id="M08-CAP-INTEROP-2d6183b1cd2a9288"></a>
- **M08-CAP-INTEROP-2d6183b1cd2a9288**: Partner Developer Portal
  Origin: original 70

<a id="M08-CAP-INTEROP-93ed603cc183e095"></a>
- **M08-CAP-INTEROP-93ed603cc183e095**: Public SDK
  Origin: original 70

<a id="M08-CAP-INTEROP-ebfc195b498cf56f"></a>
- **M08-CAP-INTEROP-ebfc195b498cf56f**: GraphQL Gateway
  Origin: original 70

<a id="M08-CAP-INTEROP-b32c3a8be3fee102"></a>
- **M08-CAP-INTEROP-b32c3a8be3fee102**: Event Streaming
  Origin: original 70

<a id="M08-CAP-INTEROP-88b8e4e216ed4001"></a>
- **M08-CAP-INTEROP-88b8e4e216ed4001**: Webhooks
  Origin: original 70

<a id="M08-CAP-INTEROP-c1f2179b905783e6"></a>
- **M08-CAP-INTEROP-c1f2179b905783e6**: Multi-region API Gateway
  Origin: original 70

<a id="M08-CAP-INTEROP-f7bb6e6ef0964f39"></a>
- **M08-CAP-INTEROP-f7bb6e6ef0964f39**: Ensures interoperability between healthcare systems.
  Origin: original 1356

<a id="M08-CAP-INTEROP-a6a8c99e93773aba"></a>
- **M08-CAP-INTEROP-a6a8c99e93773aba**: HL7
  Origin: original 1356

<a id="M08-CAP-INTEROP-5faa423c7f424870"></a>
- **M08-CAP-INTEROP-5faa423c7f424870**: FHIR
  Origin: original 1356

<a id="M08-CAP-INTEROP-08934a82877646ee"></a>
- **M08-CAP-INTEROP-08934a82877646ee**: DICOM
  Origin: original 1356

<a id="M08-CAP-INTEROP-4e3e5ab912493a4c"></a>
- **M08-CAP-INTEROP-4e3e5ab912493a4c**: Allows integration with external healthcare platforms.
  Origin: original 1359

<a id="M08-CAP-INTEROP-25efaec3e4753bc1"></a>
- **M08-CAP-INTEROP-25efaec3e4753bc1**: National EMR
  Origin: original 1359

<a id="M08-CAP-INTEROP-9ea29df5a792bdfe"></a>
- **M08-CAP-INTEROP-9ea29df5a792bdfe**: Hospital Systems
  Origin: original 1359

<a id="M08-CAP-INTEROP-08a98af399132da7"></a>
- **M08-CAP-INTEROP-08a98af399132da7**: Research Networks
  Origin: original 1359

<a id="M08-CAP-INTEROP-8412428c60f22adf"></a>
- **M08-CAP-INTEROP-8412428c60f22adf**: # Adaptive Interoperability / Self-adapting Connector Intelligence
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-a8a7b6726275c511"></a>
- **M08-CAP-INTEROP-a8a7b6726275c511**: Revision 2026-09-14 · EXT-INTEROP · DRAFT_SPECIFICATION · CAP-INTEROP · integration and transformation / external clinical systems · roadmap RESEARCH.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-b853e02b0059a580"></a>
- **M08-CAP-INTEROP-b853e02b0059a580**: ## Purpose and overlap
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-af31de914cc42d91"></a>
- **M08-CAP-INTEROP-af31de914cc42d91**: Reduce manual integration work while preserving clinical meaning and source authority. Existing 1356 lists HL7/FHIR/DICOM/CDA and 1359 universal connectors; numerous synchronization titles describe intent. They do not specify safe discovery, semantic validation, loss budgets and release control. Extend this owner using the [search dossier](../../../audit/gapfill/new_module_proposals.json); do not treat an absent title as proof of an absent capability.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-f7e7b991b5c8b319"></a>
- **M08-CAP-INTEROP-f7e7b991b5c8b319**: ## Actors, permissions and supported inputs
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-d45001225623becb"></a>
- **M08-CAP-INTEROP-d45001225623becb**: Partner administrator authorizes scope and read-only credentials; an integration engineer inspects schemas; a terminology steward adjudicates concepts; the clinical data owner approves clinical semantics; an operator deploys an approved version. Approval policy must prevent a generated connector from approving itself.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-98b6bb95b9eed4a4"></a>
- **M08-CAP-INTEROP-98b6bb95b9eed4a4**: Accept FHIR, HL7 v2, CDA, DICOM, CSV, JSON, XML, REST APIs, authorized database exports and vendor-specific formats where technically and legally permitted. Format recognition is not conformance. Each partner declares protocol/version, purpose, data authority, direction, frequency, volume and authorization boundary. No unauthorised scanning, external writes, destructive SQL or automatic schema migration.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-08ed9f46b4c024c5"></a>
- **M08-CAP-INTEROP-08ed9f46b4c024c5**: ## Controlled pipeline
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-174bc1874a459a65"></a>
- **M08-CAP-INTEROP-174bc1874a459a65**: 1. Read-only Connector Discovery inventories only authorized endpoints/files.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-a1aaacd0c1d688a8"></a>
- **M08-CAP-INTEROP-a1aaacd0c1d688a8**: 2. Format Detection identifies candidate encodings, delimiters/protocols and versions.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-59a838456576941a"></a>
- **M08-CAP-INTEROP-59a838456576941a**: 3. Schema Profiling records types, cardinalities, missingness, units, identifiers and sample provenance in a restricted staging area.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-8e8b7009bc02fcda"></a>
- **M08-CAP-INTEROP-8e8b7009bc02fcda**: 4. Semantic Mapping proposes source concepts and meaning; Terminology Mapping pins systems/releases; FHIR Mapping selects explicit profiles and extensions.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-005ba9161fb2e50a"></a>
- **M08-CAP-INTEROP-005ba9161fb2e50a**: 5. Validation checks syntax, identity/tenant, units, time zones, value sets, cardinality, required fields and authority.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-a7c766d14e99ab62"></a>
- **M08-CAP-INTEROP-a7c766d14e99ab62**: 6. Conflict Detection separates duplicate messages, patient ambiguity, contradictory results and corrected versions.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-e42718d1895a9ab5"></a>
- **M08-CAP-INTEROP-e42718d1895a9ab5**: 7. Transformation produces quarantined canonical candidates plus loss reports.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-894347025fe68ee6"></a>
- **M08-CAP-INTEROP-894347025fe68ee6**: 8. Sandbox Testing uses synthetic/de-identified approved fixtures, error cases and round-trip checks.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-6273b7b26ca2365d"></a>
- **M08-CAP-INTEROP-6273b7b26ca2365d**: 9. Human Approval signs exact schema/mapping/connector versions and a bounded release scope.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-0d7fe1b3278cfd0b"></a>
- **M08-CAP-INTEROP-0d7fe1b3278cfd0b**: 10. Connector Registry publishes the signed release; Monitoring detects drift, loss, rejection and reconciliation failures.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-5938e79d7c749867"></a>
- **M08-CAP-INTEROP-5938e79d7c749867**: 11. Rollback stops intake and restores a known connector release; already accepted clinical records require attributable correction/compensation, never silent deletion.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-302da5da1010f6a6"></a>
- **M08-CAP-INTEROP-302da5da1010f6a6**: ## Canonical contract and ownership
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-ebc735fc5f01c464"></a>
- **M08-CAP-INTEROP-ebc735fc5f01c464**: CAP-INTEROP owns ConnectorProfile, MappingCandidate, MappingRelease, ImportBatch and LossReport. Clinical owners retain validated facts. MappingCandidate contains source field/path, source schema hash, target concept/profile, transformation, confidence method/value, evidence source, terminology release, validation state, reviewer decision, approval scope and version. Confidence alone never authorizes import.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-0c0ca6000980f655"></a>
- **M08-CAP-INTEROP-0c0ca6000980f655**: ImportBatch records input digest, partner/message identity, patient-match result, mapping release, item outcomes and idempotency key. A write candidate must reference approved source authority, validated mapping and current release. The clinical owner revalidates and accepts it; the connector cannot unilaterally overwrite the source of truth.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-d02c4f9cc336f7c2"></a>
- **M08-CAP-INTEROP-d02c4f9cc336f7c2**: ## Interfaces and events
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-53fe4e0467b255f3"></a>
- **M08-CAP-INTEROP-53fe4e0467b255f3**: Proposed commands: discoverAuthorizedSchema, proposeMapping, validateMapping, runSandbox, approveConnectorRelease, stageImport, reconcileBatch, suspendConnector. Signed approvals bind artifact hashes. Events MappingProposed, ValidationFailed, ConnectorReleaseApproved, ImportQuarantined, ImportAccepted and ConnectorDriftDetected contain identifiers and counts.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-71ec6ad7b6e8fc3c"></a>
- **M08-CAP-INTEROP-71ec6ad7b6e8fc3c**: Return AMBIGUOUS_PATIENT, UNKNOWN_UNIT, LOSS_EXCEEDS_POLICY, UNAPPROVED_MAPPING, SCHEMA_DRIFT or STALE_RELEASE as appropriate. Per-item quarantine must not mask batch failures. Retries use stable partner event IDs and source versions. Out-of-order corrections retain linkage to earlier results.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-c46fe28cb6e44a19"></a>
- **M08-CAP-INTEROP-c46fe28cb6e44a19**: ## Self-adaptation, AI and security
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-b19abe7610981ee4"></a>
- **M08-CAP-INTEROP-b19abe7610981ee4**: AI can propose probable concepts, missing-field handling and candidate connector code/tests. Generated code is untrusted: sandbox it without production credentials, review dependencies and prevent network escape. It cannot approve its own test expectations. Unknown or incompatible semantics remain unresolved. Round-trip tests compare both retained fields and clinically meaningful semantics; where reverse conversion is impossible, record explicit loss and block or require approved limits.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-a38f08efea7899f5"></a>
- **M08-CAP-INTEROP-a38f08efea7899f5**: Use secret management outside repository, least privilege, transport encryption, restricted staging retention, access audit, consent/purpose checks and jurisdiction controls. Logs include schema/release hashes and rejection counts, not sample PHI. Dependencies CAP-DATA, CAP-IDENTITY, CAP-CONSENT, CAP-AI, CAP-AUDIT. Twin/AI consumers see accepted typed records only.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-f4b816255574bbb9"></a>
- **M08-CAP-INTEROP-f4b816255574bbb9**: ## Acceptance and open gates
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-33b0a3278b58b42d"></a>
- **M08-CAP-INTEROP-33b0a3278b58b42d**: Unknown fields cannot enter clinical truth unvalidated. Unit/time/identity corruption is detected; schema drift suspends affected mappings; replay creates no duplicate fact; failed releases can be disabled without losing history. A candidate connector cannot call destructive endpoints. Approved round-trip loss reports retain every unmapped field disposition. These are specification requirements: no real hospital connector has been generated, tested or approved. Partner contracts, terminology packs, conformance suites and named approval authority remain open.
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-ea8e2d92427f9854"></a>
- **M08-CAP-INTEROP-ea8e2d92427f9854**: Read-only discovery and format profiling
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-b4c682b8787da998"></a>
- **M08-CAP-INTEROP-b4c682b8787da998**: FHIR/HL7v2/CDA/DICOM/CSV/JSON/XML/API/export inputs
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-68a0e74d25ecedc5"></a>
- **M08-CAP-INTEROP-68a0e74d25ecedc5**: Candidate semantic/terminology mappings with confidence
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-0714f81af47a1e33"></a>
- **M08-CAP-INTEROP-0714f81af47a1e33**: Validation and loss/conflict reporting
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-757b5756f07de8fa"></a>
- **M08-CAP-INTEROP-757b5756f07de8fa**: Sandbox round-trip and human approval
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-8ec2befeac8dc564"></a>
- **M08-CAP-INTEROP-8ec2befeac8dc564**: Connector registry monitoring rollback
  Origin: EXT-INTEROP

<a id="M08-CAP-INTEROP-6eb99d2bef4cd730"></a>
- **M08-CAP-INTEROP-6eb99d2bef4cd730**: No unvalidated clinical source-of-truth writes
  Origin: EXT-INTEROP

## Preserved source metadata

<a id="M08-CAP-INTEROP-3df86485e934ef98"></a>
- **M08-CAP-INTEROP-3df86485e934ef98**: # FHIR Integration Architecture

<a id="M08-CAP-INTEROP-2f5fdcca89ef8e56"></a>
- **M08-CAP-INTEROP-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-INTEROP-6f33acf3afb37064"></a>
- **M08-CAP-INTEROP-6f33acf3afb37064**: ---

<a id="M08-CAP-INTEROP-e78e790079fcf00d"></a>
- **M08-CAP-INTEROP-e78e790079fcf00d**: # Supported FHIR Resources

<a id="M08-CAP-INTEROP-f466b3e8ed0674ed"></a>
- **M08-CAP-INTEROP-f466b3e8ed0674ed**: # Data Exchange

<a id="M08-CAP-INTEROP-6d81213790f14ace"></a>
- **M08-CAP-INTEROP-6d81213790f14ace**: # Supported FHIR Versions

<a id="M08-CAP-INTEROP-07cf22a5a5a9a148"></a>
- **M08-CAP-INTEROP-07cf22a5a5a9a148**: # Import

<a id="M08-CAP-INTEROP-4828f7f4a29f3e23"></a>
- **M08-CAP-INTEROP-4828f7f4a29f3e23**: # Export

<a id="M08-CAP-INTEROP-efc101e38d418651"></a>
- **M08-CAP-INTEROP-efc101e38d418651**: # Security

<a id="M08-CAP-INTEROP-9879a69a15c5a50a"></a>
- **M08-CAP-INTEROP-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-INTEROP-5ba74d8fcc7b20cc"></a>
- **M08-CAP-INTEROP-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-INTEROP-d5232cbd3a326267"></a>
- **M08-CAP-INTEROP-d5232cbd3a326267**: Documentation

<a id="M08-CAP-INTEROP-f990974c747d9f81"></a>
- **M08-CAP-INTEROP-f990974c747d9f81**: # HL7 Integration Architecture

<a id="M08-CAP-INTEROP-2b72c38ea7a92150"></a>
- **M08-CAP-INTEROP-2b72c38ea7a92150**: # Supported HL7 Versions

<a id="M08-CAP-INTEROP-56bef367c128c84a"></a>
- **M08-CAP-INTEROP-56bef367c128c84a**: # Supported Messages

<a id="M08-CAP-INTEROP-e42f4f6fbe4b928b"></a>
- **M08-CAP-INTEROP-e42f4f6fbe4b928b**: # Validation

<a id="M08-CAP-INTEROP-dea58292c544cfdc"></a>
- **M08-CAP-INTEROP-dea58292c544cfdc**: # External API Gateway

<a id="M08-CAP-INTEROP-b362dcbd9bedc532"></a>
- **M08-CAP-INTEROP-b362dcbd9bedc532**: # Objectives

<a id="M08-CAP-INTEROP-5f7e4293a03ed283"></a>
- **M08-CAP-INTEROP-5f7e4293a03ed283**: # Connected Services

<a id="M08-CAP-INTEROP-5059c771c0cb44d5"></a>
- **M08-CAP-INTEROP-5059c771c0cb44d5**: # Gateway Flow

<a id="M08-CAP-INTEROP-49f07d5bccf60fe5"></a>
- **M08-CAP-INTEROP-49f07d5bccf60fe5**: # Monitoring

<a id="M08-CAP-INTEROP-9e75fe446443557c"></a>
- **M08-CAP-INTEROP-9e75fe446443557c**: # Reliability

<a id="M08-CAP-INTEROP-4fbeeb87456accf5"></a>
- **M08-CAP-INTEROP-4fbeeb87456accf5**: Supports

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
