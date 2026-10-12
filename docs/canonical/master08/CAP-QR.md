# CORE-CAP-QR — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: DisclosureGrant, TokenDigest, RecipientBinding, Expiry, ConsumptionEvent. Dependencies: CAP-QR, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve patient-approved resource/purpose/recipient scope → issue opaque revocable token reference → authenticate redemption → enforce current policy and expiry → atomically consume if single-use → audit. No health payload in QR; offline copies cannot guarantee immediate revocation.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M08-QR

Original IDs: 14, 32, 33.

QR session, role templates and access levels share scoped disclosure ownership. Preserve time/one-time/revocation/recipient and audit events, but public/full-record/permanent templates are not grants. Opaque token references, authenticated recipient/purpose and online revocation protect content; offline copies cannot promise immediate revocation.

Resolve patient-approved resource/purpose/recipient scope → issue opaque revocable token reference → authenticate redemption → enforce current policy and expiry → atomically consume if single-use → audit. No health payload in QR; offline copies cannot guarantee immediate revocation.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-QR-e32ad039e6d08338"></a>
- **M08-CAP-QR-e32ad039e6d08338**: Stores all QR access sessions.
  Origin: original 14

<a id="M08-CAP-QR-c91610423a46692c"></a>
- **M08-CAP-QR-c91610423a46692c**: id (UUID)
  Origin: original 14

<a id="M08-CAP-QR-ff6fb316f9bc6c33"></a>
- **M08-CAP-QR-ff6fb316f9bc6c33**: user_id
  Origin: original 14

<a id="M08-CAP-QR-c559823f6e5c0162"></a>
- **M08-CAP-QR-c559823f6e5c0162**: medical_profile_id
  Origin: original 14

<a id="M08-CAP-QR-30376d6db2c394b7"></a>
- **M08-CAP-QR-30376d6db2c394b7**: session_type
  Origin: original 14

<a id="M08-CAP-QR-8fb5a3ae469a553f"></a>
- **M08-CAP-QR-8fb5a3ae469a553f**: qr_token
  Origin: original 14

<a id="M08-CAP-QR-bb6ffcbd1a3e62b0"></a>
- **M08-CAP-QR-bb6ffcbd1a3e62b0**: access_level
  Origin: original 14

<a id="M08-CAP-QR-d82d14c172a419d8"></a>
- **M08-CAP-QR-d82d14c172a419d8**: recipient_type
  Origin: original 14

<a id="M08-CAP-QR-235445114d981309"></a>
- **M08-CAP-QR-235445114d981309**: recipient_id
  Origin: original 14

<a id="M08-CAP-QR-9fe94e819c56a7a3"></a>
- **M08-CAP-QR-9fe94e819c56a7a3**: country
  Origin: original 14

<a id="M08-CAP-QR-e8c48d1d02eb8c17"></a>
- **M08-CAP-QR-e8c48d1d02eb8c17**: language
  Origin: original 14

<a id="M08-CAP-QR-d9b43600edccd62c"></a>
- **M08-CAP-QR-d9b43600edccd62c**: expires_at
  Origin: original 14

<a id="M08-CAP-QR-e4a4975b5703361c"></a>
- **M08-CAP-QR-e4a4975b5703361c**: is_revoked
  Origin: original 14

<a id="M08-CAP-QR-637f97e9c75aa29b"></a>
- **M08-CAP-QR-637f97e9c75aa29b**: device_info
  Origin: original 14

<a id="M08-CAP-QR-2c2262c559f21e3b"></a>
- **M08-CAP-QR-2c2262c559f21e3b**: ip_address
  Origin: original 14

<a id="M08-CAP-QR-80a960896bf599b3"></a>
- **M08-CAP-QR-80a960896bf599b3**: location
  Origin: original 14

<a id="M08-CAP-QR-bcc951dbdead2bf5"></a>
- **M08-CAP-QR-bcc951dbdead2bf5**: created_at
  Origin: original 14

<a id="M08-CAP-QR-51db2c3a3a174a78"></a>
- **M08-CAP-QR-51db2c3a3a174a78**: updated_at
  Origin: original 14

<a id="M08-CAP-QR-aaf755839e510e4c"></a>
- **M08-CAP-QR-aaf755839e510e4c**: QR Session
  Origin: original 14

<a id="M08-CAP-QR-46172ef655d51ea4"></a>
- **M08-CAP-QR-46172ef655d51ea4**: ├── User
  Origin: original 14

<a id="M08-CAP-QR-41bd3320fb6ee128"></a>
- **M08-CAP-QR-41bd3320fb6ee128**: ├── Medical Profile
  Origin: original 14

<a id="M08-CAP-QR-ca0910ed36c02588"></a>
- **M08-CAP-QR-ca0910ed36c02588**: ├── Medicines
  Origin: original 14

<a id="M08-CAP-QR-bd5acdeb2683509a"></a>
- **M08-CAP-QR-bd5acdeb2683509a**: ├── Diagnoses
  Origin: original 14

<a id="M08-CAP-QR-23a3bdaef436618d"></a>
- **M08-CAP-QR-23a3bdaef436618d**: ├── Documents
  Origin: original 14

<a id="M08-CAP-QR-b3a8fb58abb0fac0"></a>
- **M08-CAP-QR-b3a8fb58abb0fac0**: ├── Doctor
  Origin: original 14

<a id="M08-CAP-QR-f242256e9ecdac25"></a>
- **M08-CAP-QR-f242256e9ecdac25**: ├── Pharmacy
  Origin: original 14

<a id="M08-CAP-QR-4aa0cb20484238f6"></a>
- **M08-CAP-QR-4aa0cb20484238f6**: ├── Hospital
  Origin: original 14

<a id="M08-CAP-QR-411c8436cc599e63"></a>
- **M08-CAP-QR-411c8436cc599e63**: ├── Emergency Access
  Origin: original 14

<a id="M08-CAP-QR-37bfdffca1a32095"></a>
- **M08-CAP-QR-37bfdffca1a32095**: Future Features
  Origin: original 14, original 32, original 33

<a id="M08-CAP-QR-f8d1099c4cf02794"></a>
- **M08-CAP-QR-f8d1099c4cf02794**: Dynamic QR
  Origin: original 14, original 32, original 33

<a id="M08-CAP-QR-4fa8f7c8cef6108a"></a>
- **M08-CAP-QR-4fa8f7c8cef6108a**: Temporary Access
  Origin: original 14, original 33

<a id="M08-CAP-QR-c9686dd61144856c"></a>
- **M08-CAP-QR-c9686dd61144856c**: One-time QR
  Origin: original 14

<a id="M08-CAP-QR-726f7a10420e6927"></a>
- **M08-CAP-QR-726f7a10420e6927**: Offline QR
  Origin: original 14

<a id="M08-CAP-QR-eeb06e1cbb53d58f"></a>
- **M08-CAP-QR-eeb06e1cbb53d58f**: Encrypted QR
  Origin: original 14

<a id="M08-CAP-QR-10042e3a35e40aee"></a>
- **M08-CAP-QR-10042e3a35e40aee**: QR Audit Log
  Origin: original 14

<a id="M08-CAP-QR-511a1e104b0e0b78"></a>
- **M08-CAP-QR-511a1e104b0e0b78**: Access History
  Origin: original 14

<a id="M08-CAP-QR-d67c3649bdc57c07"></a>
- **M08-CAP-QR-d67c3649bdc57c07**: Defines what information is accessible through different QR access levels.
  Origin: original 32

<a id="M08-CAP-QR-8b2d7025901b5418"></a>
- **M08-CAP-QR-8b2d7025901b5418**: Full Name
  Origin: original 32

<a id="M08-CAP-QR-2fe9a70b697f1a61"></a>
- **M08-CAP-QR-2fe9a70b697f1a61**: Blood Group
  Origin: original 32

<a id="M08-CAP-QR-fec90cddd3b7d01a"></a>
- **M08-CAP-QR-fec90cddd3b7d01a**: Rh Factor
  Origin: original 32

<a id="M08-CAP-QR-ed85b85272bcf6f9"></a>
- **M08-CAP-QR-ed85b85272bcf6f9**: Emergency Contact
  Origin: original 32

<a id="M08-CAP-QR-194eb4af94a9648f"></a>
- **M08-CAP-QR-194eb4af94a9648f**: Includes Level 1 +
  Origin: original 32

<a id="M08-CAP-QR-5ece9f76c54dd0a2"></a>
- **M08-CAP-QR-5ece9f76c54dd0a2**: Allergies
  Origin: original 32

<a id="M08-CAP-QR-5dfc4279dcad6281"></a>
- **M08-CAP-QR-5dfc4279dcad6281**: Chronic Diseases
  Origin: original 32

<a id="M08-CAP-QR-2d226d838938977f"></a>
- **M08-CAP-QR-2d226d838938977f**: Current Medicines
  Origin: original 32

<a id="M08-CAP-QR-fb9e03223e0ba744"></a>
- **M08-CAP-QR-fb9e03223e0ba744**: Emergency Instructions
  Origin: original 32

<a id="M08-CAP-QR-8dff2382677c548c"></a>
- **M08-CAP-QR-8dff2382677c548c**: Includes Level 2 +
  Origin: original 32

<a id="M08-CAP-QR-182520ba3d242100"></a>
- **M08-CAP-QR-182520ba3d242100**: Diagnoses
  Origin: original 32

<a id="M08-CAP-QR-b9f7850c43c977c3"></a>
- **M08-CAP-QR-b9f7850c43c977c3**: Medical History
  Origin: original 32

<a id="M08-CAP-QR-ca00fc7c0d0e2a70"></a>
- **M08-CAP-QR-ca00fc7c0d0e2a70**: Vaccinations
  Origin: original 32

<a id="M08-CAP-QR-f6feaab2781dc285"></a>
- **M08-CAP-QR-f6feaab2781dc285**: Medical Documents
  Origin: original 32

<a id="M08-CAP-QR-24f5c88a3f294930"></a>
- **M08-CAP-QR-24f5c88a3f294930**: Prescriptions
  Origin: original 32

<a id="M08-CAP-QR-01bbec9df504a305"></a>
- **M08-CAP-QR-01bbec9df504a305**: Includes
  Origin: original 32

<a id="M08-CAP-QR-d7a2add4cd06a8e6"></a>
- **M08-CAP-QR-d7a2add4cd06a8e6**: Medicines
  Origin: original 32

<a id="M08-CAP-QR-368389b22a7065de"></a>
- **M08-CAP-QR-368389b22a7065de**: Dosage
  Origin: original 32

<a id="M08-CAP-QR-f1eb33e6db510901"></a>
- **M08-CAP-QR-f1eb33e6db510901**: Prescription Validity
  Origin: original 32

<a id="M08-CAP-QR-9c26c1b46bcd0a38"></a>
- **M08-CAP-QR-9c26c1b46bcd0a38**: QR Verification
  Origin: original 32

<a id="M08-CAP-QR-0ce7f0605304e6de"></a>
- **M08-CAP-QR-0ce7f0605304e6de**: Full Medical Record
  Origin: original 32

<a id="M08-CAP-QR-32d252fac5dfc0ed"></a>
- **M08-CAP-QR-32d252fac5dfc0ed**: Documents
  Origin: original 32

<a id="M08-CAP-QR-a3241cf77d991407"></a>
- **M08-CAP-QR-a3241cf77d991407**: Imaging
  Origin: original 32

<a id="M08-CAP-QR-71f790fdf94f9c10"></a>
- **M08-CAP-QR-71f790fdf94f9c10**: Laboratory Results
  Origin: original 32

<a id="M08-CAP-QR-e4a7d395f869c9ae"></a>
- **M08-CAP-QR-e4a7d395f869c9ae**: Insurance
  Origin: original 32, original 33

<a id="M08-CAP-QR-bc08e6806917ec9d"></a>
- **M08-CAP-QR-bc08e6806917ec9d**: Insurance Policy
  Origin: original 32

<a id="M08-CAP-QR-f4d5808ad8b38a9b"></a>
- **M08-CAP-QR-f4d5808ad8b38a9b**: Hospital Visits
  Origin: original 32

<a id="M08-CAP-QR-079cf9b52818f426"></a>
- **M08-CAP-QR-079cf9b52818f426**: Claims
  Origin: original 32

<a id="M08-CAP-QR-6213ea843fdb44c1"></a>
- **M08-CAP-QR-6213ea843fdb44c1**: Billing
  Origin: original 32

<a id="M08-CAP-QR-092efc782e065280"></a>
- **M08-CAP-QR-092efc782e065280**: User-defined access
  Origin: original 32

<a id="M08-CAP-QR-e4a418bf0884555f"></a>
- **M08-CAP-QR-e4a418bf0884555f**: SOS
  Origin: original 32

<a id="M08-CAP-QR-8e6912162a9987b5"></a>
- **M08-CAP-QR-8e6912162a9987b5**: Emergency Notifications
  Origin: original 32

<a id="M08-CAP-QR-3907aea3a2fc44b1"></a>
- **M08-CAP-QR-3907aea3a2fc44b1**: Medical Profile
  Origin: original 32

<a id="M08-CAP-QR-cc650a7907363ad2"></a>
- **M08-CAP-QR-cc650a7907363ad2**: AES-256 Encryption
  Origin: original 32, original 33

<a id="M08-CAP-QR-82f7ca2c8746a83e"></a>
- **M08-CAP-QR-82f7ca2c8746a83e**: Time Limited Access
  Origin: original 32

<a id="M08-CAP-QR-c27e24295ef3c8a5"></a>
- **M08-CAP-QR-c27e24295ef3c8a5**: One-Time QR
  Origin: original 32

<a id="M08-CAP-QR-d7eca9c6a87dee34"></a>
- **M08-CAP-QR-d7eca9c6a87dee34**: Access Logs
  Origin: original 32

<a id="M08-CAP-QR-ca39d0407f53d637"></a>
- **M08-CAP-QR-ca39d0407f53d637**: Revocable Access
  Origin: original 32

<a id="M08-CAP-QR-3160601f971b0589"></a>
- **M08-CAP-QR-3160601f971b0589**: Biometric Confirmation
  Origin: original 32

<a id="M08-CAP-QR-8f42a68a287d9fbf"></a>
- **M08-CAP-QR-8f42a68a287d9fbf**: Country-specific Permissions
  Origin: original 32

<a id="M08-CAP-QR-c9c7fe37227e176c"></a>
- **M08-CAP-QR-c9c7fe37227e176c**: AI Risk Analysis
  Origin: original 32

<a id="M08-CAP-QR-c457962c3490fa0a"></a>
- **M08-CAP-QR-c457962c3490fa0a**: Offline QR Verification
  Origin: original 32

<a id="M08-CAP-QR-425e6fea2e317d0d"></a>
- **M08-CAP-QR-425e6fea2e317d0d**: Multi-factor Verification
  Origin: original 32

<a id="M08-CAP-QR-b95b8e5397e9b6e2"></a>
- **M08-CAP-QR-b95b8e5397e9b6e2**: Digital Signature
  Origin: original 32, original 33

<a id="M08-CAP-QR-e5bf92268898c59d"></a>
- **M08-CAP-QR-e5bf92268898c59d**: Defines the rules governing QR access, permissions, expiration, and security.
  Origin: original 33

<a id="M08-CAP-QR-5082803cd51bf75c"></a>
- **M08-CAP-QR-5082803cd51bf75c**: One-Time Access
  Origin: original 33

<a id="M08-CAP-QR-968189f082140fb3"></a>
- **M08-CAP-QR-968189f082140fb3**: Permanent Access
  Origin: original 33

<a id="M08-CAP-QR-53fdcd3a56f144a6"></a>
- **M08-CAP-QR-53fdcd3a56f144a6**: Emergency Access
  Origin: original 33

<a id="M08-CAP-QR-ca8825aeb38afc62"></a>
- **M08-CAP-QR-ca8825aeb38afc62**: Doctor Access
  Origin: original 33

<a id="M08-CAP-QR-3acff2174016c433"></a>
- **M08-CAP-QR-3acff2174016c433**: Pharmacy Access
  Origin: original 33

<a id="M08-CAP-QR-47326e7f2cfb403d"></a>
- **M08-CAP-QR-47326e7f2cfb403d**: Hospital Access
  Origin: original 33

<a id="M08-CAP-QR-0c8fbb3f20a2caf5"></a>
- **M08-CAP-QR-0c8fbb3f20a2caf5**: Insurance Access
  Origin: original 33

<a id="M08-CAP-QR-f5ccd5f81abc4189"></a>
- **M08-CAP-QR-f5ccd5f81abc4189**: Family Access
  Origin: original 33

<a id="M08-CAP-QR-4a40f206ae9bd5e0"></a>
- **M08-CAP-QR-4a40f206ae9bd5e0**: One-Time
  Origin: original 33

<a id="M08-CAP-QR-60ad5f0e95a3c0f2"></a>
- **M08-CAP-QR-60ad5f0e95a3c0f2**: ↓
  Origin: original 33

<a id="M08-CAP-QR-d251502526b5126d"></a>
- **M08-CAP-QR-d251502526b5126d**: Used Once
  Origin: original 33

<a id="M08-CAP-QR-7f3601fdfb726018"></a>
- **M08-CAP-QR-7f3601fdfb726018**: Automatically Revoked
  Origin: original 33

<a id="M08-CAP-QR-98a99042b05b4de1"></a>
- **M08-CAP-QR-98a99042b05b4de1**: Temporary
  Origin: original 33

<a id="M08-CAP-QR-187cf5a0d3a9ef3c"></a>
- **M08-CAP-QR-187cf5a0d3a9ef3c**: 1 Hour
  Origin: original 33

<a id="M08-CAP-QR-25f059702d99e88d"></a>
- **M08-CAP-QR-25f059702d99e88d**: 3 Hours
  Origin: original 33

<a id="M08-CAP-QR-ad5be4efc4c05afa"></a>
- **M08-CAP-QR-ad5be4efc4c05afa**: 12 Hours
  Origin: original 33

<a id="M08-CAP-QR-e88d262e991489fe"></a>
- **M08-CAP-QR-e88d262e991489fe**: 24 Hours
  Origin: original 33

<a id="M08-CAP-QR-8a58ac55e85b1b0b"></a>
- **M08-CAP-QR-8a58ac55e85b1b0b**: 7 Days
  Origin: original 33

<a id="M08-CAP-QR-a068cdbe57674d96"></a>
- **M08-CAP-QR-a068cdbe57674d96**: 30 Days
  Origin: original 33

<a id="M08-CAP-QR-ec7037eee6721440"></a>
- **M08-CAP-QR-ec7037eee6721440**: Automatically Expires
  Origin: original 33

<a id="M08-CAP-QR-0336ff65b89a44c8"></a>
- **M08-CAP-QR-0336ff65b89a44c8**: Permanent
  Origin: original 33

<a id="M08-CAP-QR-ea2884c8a10d6578"></a>
- **M08-CAP-QR-ea2884c8a10d6578**: Until Revoked by User
  Origin: original 33

<a id="M08-CAP-QR-52a3545c159968e0"></a>
- **M08-CAP-QR-52a3545c159968e0**: Doctor
  Origin: original 33

<a id="M08-CAP-QR-3dfd59e78da56d08"></a>
- **M08-CAP-QR-3dfd59e78da56d08**: ✓ Medicines
  Origin: original 33

<a id="M08-CAP-QR-1b9e80bc0d66cd58"></a>
- **M08-CAP-QR-1b9e80bc0d66cd58**: ✓ Diagnoses
  Origin: original 33

<a id="M08-CAP-QR-24acf9ab429d47a9"></a>
- **M08-CAP-QR-24acf9ab429d47a9**: ✓ Documents
  Origin: original 33

<a id="M08-CAP-QR-d4b697d9fe744ed3"></a>
- **M08-CAP-QR-d4b697d9fe744ed3**: ✓ Vaccinations
  Origin: original 33

<a id="M08-CAP-QR-e8efb3ad5514aacd"></a>
- **M08-CAP-QR-e8efb3ad5514aacd**: ✓ Allergies
  Origin: original 33

<a id="M08-CAP-QR-128e572578362901"></a>
- **M08-CAP-QR-128e572578362901**: ✓ Prescriptions
  Origin: original 33

<a id="M08-CAP-QR-7605ce62d32022f4"></a>
- **M08-CAP-QR-7605ce62d32022f4**: Pharmacy
  Origin: original 33

<a id="M08-CAP-QR-6b4e295516eeb7ef"></a>
- **M08-CAP-QR-6b4e295516eeb7ef**: ✓ Prescription
  Origin: original 33

<a id="M08-CAP-QR-295b78724b9a4d44"></a>
- **M08-CAP-QR-295b78724b9a4d44**: ✓ Dosage
  Origin: original 33

<a id="M08-CAP-QR-f7d1ce9c0cc3356a"></a>
- **M08-CAP-QR-f7d1ce9c0cc3356a**: ✗ Diagnoses
  Origin: original 33

<a id="M08-CAP-QR-ab9a38e502155a8f"></a>
- **M08-CAP-QR-ab9a38e502155a8f**: ✗ Documents
  Origin: original 33

<a id="M08-CAP-QR-9292031266b0e334"></a>
- **M08-CAP-QR-9292031266b0e334**: Hospital
  Origin: original 33

<a id="M08-CAP-QR-7daa9a5cdba0bda6"></a>
- **M08-CAP-QR-7daa9a5cdba0bda6**: ✓ Full Medical Record
  Origin: original 33

<a id="M08-CAP-QR-330e70106fdc0a83"></a>
- **M08-CAP-QR-330e70106fdc0a83**: ✓ Policy
  Origin: original 33

<a id="M08-CAP-QR-9be063ef5e5a95dd"></a>
- **M08-CAP-QR-9be063ef5e5a95dd**: ✓ Claims
  Origin: original 33

<a id="M08-CAP-QR-180b6cdd13d3e8fe"></a>
- **M08-CAP-QR-180b6cdd13d3e8fe**: ✓ Hospital Visits
  Origin: original 33

<a id="M08-CAP-QR-6b2ac1f5af4411d9"></a>
- **M08-CAP-QR-6b2ac1f5af4411d9**: Family
  Origin: original 33

<a id="M08-CAP-QR-9508029ce2d97375"></a>
- **M08-CAP-QR-9508029ce2d97375**: User Configurable
  Origin: original 33

<a id="M08-CAP-QR-44effbba6a37147d"></a>
- **M08-CAP-QR-44effbba6a37147d**: TLS 1.3
  Origin: original 33

<a id="M08-CAP-QR-7b2fe4dd32b3a17d"></a>
- **M08-CAP-QR-7b2fe4dd32b3a17d**: JWT Authentication
  Origin: original 33

<a id="M08-CAP-QR-d90133fb13a1e9bf"></a>
- **M08-CAP-QR-d90133fb13a1e9bf**: QR Token Rotation
  Origin: original 33

<a id="M08-CAP-QR-1a811c116e88fd01"></a>
- **M08-CAP-QR-1a811c116e88fd01**: Device Verification
  Origin: original 33

<a id="M08-CAP-QR-34ab7485714ae5a7"></a>
- **M08-CAP-QR-34ab7485714ae5a7**: IP Validation
  Origin: original 33

<a id="M08-CAP-QR-3c9c2a46578f9da9"></a>
- **M08-CAP-QR-3c9c2a46578f9da9**: Country Validation
  Origin: original 33

<a id="M08-CAP-QR-882a8d2fceb91d9e"></a>
- **M08-CAP-QR-882a8d2fceb91d9e**: Time Validation
  Origin: original 33

<a id="M08-CAP-QR-e674652a630a2f53"></a>
- **M08-CAP-QR-e674652a630a2f53**: Access Logging
  Origin: original 33

<a id="M08-CAP-QR-ab05e6df9b699a20"></a>
- **M08-CAP-QR-ab05e6df9b699a20**: Automatic Revocation
  Origin: original 33

<a id="M08-CAP-QR-ab08dbc985caa442"></a>
- **M08-CAP-QR-ab08dbc985caa442**: QR Created
  Origin: original 33

<a id="M08-CAP-QR-d153b1a9ca4382c7"></a>
- **M08-CAP-QR-d153b1a9ca4382c7**: QR Viewed
  Origin: original 33

<a id="M08-CAP-QR-9211bd765ef8dc56"></a>
- **M08-CAP-QR-9211bd765ef8dc56**: QR Expired
  Origin: original 33

<a id="M08-CAP-QR-10c05e0f8b07f838"></a>
- **M08-CAP-QR-10c05e0f8b07f838**: QR Revoked
  Origin: original 33

<a id="M08-CAP-QR-ab4a618c6e3cdeca"></a>
- **M08-CAP-QR-ab4a618c6e3cdeca**: QR Shared
  Origin: original 33

<a id="M08-CAP-QR-6a813e891c37bdbc"></a>
- **M08-CAP-QR-6a813e891c37bdbc**: QR Downloaded
  Origin: original 33

<a id="M08-CAP-QR-60f51af299727bcd"></a>
- **M08-CAP-QR-60f51af299727bcd**: QR Printed
  Origin: original 33

<a id="M08-CAP-QR-6400babcd4ede6aa"></a>
- **M08-CAP-QR-6400babcd4ede6aa**: QR Validation Failed
  Origin: original 33

<a id="M08-CAP-QR-17cbeb0fd5d8bbac"></a>
- **M08-CAP-QR-17cbeb0fd5d8bbac**: Offline Verification
  Origin: original 33

<a id="M08-CAP-QR-2b66144af3cba09c"></a>
- **M08-CAP-QR-2b66144af3cba09c**: Blockchain Verification
  Origin: original 33

<a id="M08-CAP-QR-a4bb65ec17979d27"></a>
- **M08-CAP-QR-a4bb65ec17979d27**: Country Restrictions
  Origin: original 33

<a id="M08-CAP-QR-b88794df9f0caaf8"></a>
- **M08-CAP-QR-b88794df9f0caaf8**: AI Fraud Detection
  Origin: original 33

<a id="M08-CAP-QR-29a87250440b15c5"></a>
- **M08-CAP-QR-29a87250440b15c5**: Multi-QR Profiles
  Origin: original 33

## Preserved source metadata

<a id="M08-CAP-QR-2bacf67bfcc49d36"></a>
- **M08-CAP-QR-2bacf67bfcc49d36**: # QR Sessions Table

<a id="M08-CAP-QR-2f5fdcca89ef8e56"></a>
- **M08-CAP-QR-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-QR-6f33acf3afb37064"></a>
- **M08-CAP-QR-6f33acf3afb37064**: ---

<a id="M08-CAP-QR-90dc9b75b60f53a5"></a>
- **M08-CAP-QR-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-QR-2fac6cbf308c244b"></a>
- **M08-CAP-QR-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-QR-5ba74d8fcc7b20cc"></a>
- **M08-CAP-QR-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-QR-d5232cbd3a326267"></a>
- **M08-CAP-QR-d5232cbd3a326267**: Documentation

<a id="M08-CAP-QR-81f2acecf533243c"></a>
- **M08-CAP-QR-81f2acecf533243c**: # QR Access Levels

<a id="M08-CAP-QR-097eab4b2651cc5e"></a>
- **M08-CAP-QR-097eab4b2651cc5e**: # Access Levels

<a id="M08-CAP-QR-4feab6c6e501fe41"></a>
- **M08-CAP-QR-4feab6c6e501fe41**: ## Level 1 — Public

<a id="M08-CAP-QR-b6b3384fae5db6e6"></a>
- **M08-CAP-QR-b6b3384fae5db6e6**: ## Level 2 — Emergency

<a id="M08-CAP-QR-543a100245e1b341"></a>
- **M08-CAP-QR-543a100245e1b341**: ## Level 3 — Doctor

<a id="M08-CAP-QR-f98520d7d140c0c0"></a>
- **M08-CAP-QR-f98520d7d140c0c0**: ## Level 4 — Pharmacy

<a id="M08-CAP-QR-80fbbc7f02155d12"></a>
- **M08-CAP-QR-80fbbc7f02155d12**: ## Level 5 — Hospital

<a id="M08-CAP-QR-db9bd37030dcbce3"></a>
- **M08-CAP-QR-db9bd37030dcbce3**: ## Level 6 — Insurance

<a id="M08-CAP-QR-be751c31b4cc5483"></a>
- **M08-CAP-QR-be751c31b4cc5483**: ## Level 7 — Family

<a id="M08-CAP-QR-efc101e38d418651"></a>
- **M08-CAP-QR-efc101e38d418651**: # Security

<a id="M08-CAP-QR-6c9a716710fd4f21"></a>
- **M08-CAP-QR-6c9a716710fd4f21**: # QR Access Rules

<a id="M08-CAP-QR-626c8018ecdba853"></a>
- **M08-CAP-QR-626c8018ecdba853**: # Access Types

<a id="M08-CAP-QR-13168c5b8d08b325"></a>
- **M08-CAP-QR-13168c5b8d08b325**: # Expiration

<a id="M08-CAP-QR-b6b5fd2a6c86ba97"></a>
- **M08-CAP-QR-b6b5fd2a6c86ba97**: # Permission Matrix

<a id="M08-CAP-QR-8c626009fe79b980"></a>
- **M08-CAP-QR-8c626009fe79b980**: # Security Rules

<a id="M08-CAP-QR-c21c5d052efff7af"></a>
- **M08-CAP-QR-c21c5d052efff7af**: # Audit Events

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
