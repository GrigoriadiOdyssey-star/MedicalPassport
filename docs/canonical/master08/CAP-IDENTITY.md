# CORE-CAP-IDENTITY — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: Account, SessionReference, Practitioner, Organization, VerifiedRole. Dependencies: CAP-IDENTITY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Verify account/session and separately sourced provider role → authenticate with chosen issuer → rotate/revoke session references → audit. Do not persist raw bearer credentials in clinical tables or treat organization membership as patient authorization.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M08-IDENTITY

Original IDs: 6, 29, 54, 55, 28.

User accounts, session/auth APIs and account-device trust share identity ownership, distinct from clinical patient records and medical-device acquisition. Preserve all account fields/endpoints, logout/revocation, recovery, MFA/passkey/biometric intent; implement token references/hashes and protected credential storage rather than exposed access_token/refresh_token columns. Profile editing never changes clinical authority.

Verify account/session and separately sourced provider role → authenticate with chosen issuer → rotate/revoke session references → audit. Do not persist raw bearer credentials in clinical tables or treat organization membership as patient authorization.

### M08-PROVIDERS

Original IDs: 17, 18, 1121, 1122.

Practitioner and organization records confirm ownership of pediatric surgeon/center profiles. Preserve qualifications, surgical specialization, languages, license/verification source, facilities/ICU/OR/contact and temporal role. Facility flags do not prove live availability, and licensure does not imply specific privileges.

Verify account/session and separately sourced provider role → authenticate with chosen issuer → rotate/revoke session references → audit. Do not persist raw bearer credentials in clinical tables or treat organization membership as patient authorization.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-IDENTITY-06a31e3bb0e6074c"></a>
- **M08-CAP-IDENTITY-06a31e3bb0e6074c**: Stores all registered users.
  Origin: original 6

<a id="M08-CAP-IDENTITY-c91610423a46692c"></a>
- **M08-CAP-IDENTITY-c91610423a46692c**: id (UUID)
  Origin: original 6, original 17, original 18, original 28, original 29

<a id="M08-CAP-IDENTITY-343184d0288e3a11"></a>
- **M08-CAP-IDENTITY-343184d0288e3a11**: email
  Origin: original 6, original 17, original 18

<a id="M08-CAP-IDENTITY-0fb52a054ac630c9"></a>
- **M08-CAP-IDENTITY-0fb52a054ac630c9**: phone
  Origin: original 6, original 17, original 18

<a id="M08-CAP-IDENTITY-7b0326c02164e9ad"></a>
- **M08-CAP-IDENTITY-7b0326c02164e9ad**: password_hash
  Origin: original 6

<a id="M08-CAP-IDENTITY-86eeac265664936f"></a>
- **M08-CAP-IDENTITY-86eeac265664936f**: first_name
  Origin: original 6, original 17

<a id="M08-CAP-IDENTITY-0c8652f54024ff0d"></a>
- **M08-CAP-IDENTITY-0c8652f54024ff0d**: last_name
  Origin: original 6, original 17

<a id="M08-CAP-IDENTITY-dac638c0171592a2"></a>
- **M08-CAP-IDENTITY-dac638c0171592a2**: date_of_birth
  Origin: original 6

<a id="M08-CAP-IDENTITY-5edd53a200dbbf70"></a>
- **M08-CAP-IDENTITY-5edd53a200dbbf70**: gender
  Origin: original 6

<a id="M08-CAP-IDENTITY-4e97923f76a5b1c3"></a>
- **M08-CAP-IDENTITY-4e97923f76a5b1c3**: nationality
  Origin: original 6

<a id="M08-CAP-IDENTITY-9fe94e819c56a7a3"></a>
- **M08-CAP-IDENTITY-9fe94e819c56a7a3**: country
  Origin: original 6, original 17, original 18, original 28, original 29

<a id="M08-CAP-IDENTITY-964c74225c44f6e8"></a>
- **M08-CAP-IDENTITY-964c74225c44f6e8**: city
  Origin: original 6, original 17, original 18, original 29

<a id="M08-CAP-IDENTITY-e8c48d1d02eb8c17"></a>
- **M08-CAP-IDENTITY-e8c48d1d02eb8c17**: language
  Origin: original 6, original 28

<a id="M08-CAP-IDENTITY-2e4593dca9812e63"></a>
- **M08-CAP-IDENTITY-2e4593dca9812e63**: avatar_url
  Origin: original 6

<a id="M08-CAP-IDENTITY-4866e008e08977f3"></a>
- **M08-CAP-IDENTITY-4866e008e08977f3**: two_factor_enabled
  Origin: original 6

<a id="M08-CAP-IDENTITY-067ff6dd0260d265"></a>
- **M08-CAP-IDENTITY-067ff6dd0260d265**: biometric_enabled
  Origin: original 6, original 28

<a id="M08-CAP-IDENTITY-c2c7b00ccdb40725"></a>
- **M08-CAP-IDENTITY-c2c7b00ccdb40725**: email_verified
  Origin: original 6

<a id="M08-CAP-IDENTITY-c1ab9d0a097f309e"></a>
- **M08-CAP-IDENTITY-c1ab9d0a097f309e**: phone_verified
  Origin: original 6

<a id="M08-CAP-IDENTITY-bcc951dbdead2bf5"></a>
- **M08-CAP-IDENTITY-bcc951dbdead2bf5**: created_at
  Origin: original 6, original 17, original 18, original 28, original 29

<a id="M08-CAP-IDENTITY-51db2c3a3a174a78"></a>
- **M08-CAP-IDENTITY-51db2c3a3a174a78**: updated_at
  Origin: original 6, original 17, original 18, original 28, original 29

<a id="M08-CAP-IDENTITY-db12af4d898b53c1"></a>
- **M08-CAP-IDENTITY-db12af4d898b53c1**: last_login
  Origin: original 6, original 28

<a id="M08-CAP-IDENTITY-195b9e7bd72b6492"></a>
- **M08-CAP-IDENTITY-195b9e7bd72b6492**: User
  Origin: original 6

<a id="M08-CAP-IDENTITY-41bd3320fb6ee128"></a>
- **M08-CAP-IDENTITY-41bd3320fb6ee128**: ├── Medical Profile
  Origin: original 6, original 55

<a id="M08-CAP-IDENTITY-ca0910ed36c02588"></a>
- **M08-CAP-IDENTITY-ca0910ed36c02588**: ├── Medicines
  Origin: original 6

<a id="M08-CAP-IDENTITY-bd5acdeb2683509a"></a>
- **M08-CAP-IDENTITY-bd5acdeb2683509a**: ├── Diagnoses
  Origin: original 6, original 17, original 18

<a id="M08-CAP-IDENTITY-23a3bdaef436618d"></a>
- **M08-CAP-IDENTITY-23a3bdaef436618d**: ├── Documents
  Origin: original 6

<a id="M08-CAP-IDENTITY-8c3d9cb4386663b0"></a>
- **M08-CAP-IDENTITY-8c3d9cb4386663b0**: ├── Trips
  Origin: original 6

<a id="M08-CAP-IDENTITY-b7f0d2db15272a43"></a>
- **M08-CAP-IDENTITY-b7f0d2db15272a43**: ├── QR Sessions
  Origin: original 6, original 28, original 29

<a id="M08-CAP-IDENTITY-259300a963789632"></a>
- **M08-CAP-IDENTITY-259300a963789632**: ├── Family Members
  Origin: original 6

<a id="M08-CAP-IDENTITY-225d721817a80b2f"></a>
- **M08-CAP-IDENTITY-225d721817a80b2f**: ├── Notifications
  Origin: original 6, original 28, original 55

<a id="M08-CAP-IDENTITY-93878a6ec6a84276"></a>
- **M08-CAP-IDENTITY-93878a6ec6a84276**: ├── Payments
  Origin: original 6

<a id="M08-CAP-IDENTITY-72ee25ae2078257c"></a>
- **M08-CAP-IDENTITY-72ee25ae2078257c**: ├── AI Conversations
  Origin: original 6

<a id="M08-CAP-IDENTITY-a3722f0253181393"></a>
- **M08-CAP-IDENTITY-a3722f0253181393**: Stores doctor information.
  Origin: original 17

<a id="M08-CAP-IDENTITY-54ade6b585244bbc"></a>
- **M08-CAP-IDENTITY-54ade6b585244bbc**: specialization
  Origin: original 17

<a id="M08-CAP-IDENTITY-fbaa9c54df04a6bd"></a>
- **M08-CAP-IDENTITY-fbaa9c54df04a6bd**: license_number
  Origin: original 17, original 18

<a id="M08-CAP-IDENTITY-d8781eb949ab5813"></a>
- **M08-CAP-IDENTITY-d8781eb949ab5813**: hospital_id
  Origin: original 17

<a id="M08-CAP-IDENTITY-e137aa68cfb94fcc"></a>
- **M08-CAP-IDENTITY-e137aa68cfb94fcc**: languages
  Origin: original 17

<a id="M08-CAP-IDENTITY-a336871365a60f0b"></a>
- **M08-CAP-IDENTITY-a336871365a60f0b**: years_of_experience
  Origin: original 17

<a id="M08-CAP-IDENTITY-eeffcd9906fc2585"></a>
- **M08-CAP-IDENTITY-eeffcd9906fc2585**: telemedicine_enabled
  Origin: original 17

<a id="M08-CAP-IDENTITY-a24ca7b45bce4ea0"></a>
- **M08-CAP-IDENTITY-a24ca7b45bce4ea0**: verification_status
  Origin: original 17

<a id="M08-CAP-IDENTITY-bfd5929ae29ea342"></a>
- **M08-CAP-IDENTITY-bfd5929ae29ea342**: rating
  Origin: original 17

<a id="M08-CAP-IDENTITY-52a3545c159968e0"></a>
- **M08-CAP-IDENTITY-52a3545c159968e0**: Doctor
  Origin: original 17

<a id="M08-CAP-IDENTITY-4aa0cb20484238f6"></a>
- **M08-CAP-IDENTITY-4aa0cb20484238f6**: ├── Hospital
  Origin: original 17

<a id="M08-CAP-IDENTITY-aa3e999983b79daa"></a>
- **M08-CAP-IDENTITY-aa3e999983b79daa**: ├── Prescriptions
  Origin: original 17, original 18

<a id="M08-CAP-IDENTITY-d3290df0dc43733d"></a>
- **M08-CAP-IDENTITY-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 17, original 18

<a id="M08-CAP-IDENTITY-a7f2ddd3ac9459b5"></a>
- **M08-CAP-IDENTITY-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 17, original 18

<a id="M08-CAP-IDENTITY-2665820a15a70d88"></a>
- **M08-CAP-IDENTITY-2665820a15a70d88**: ├── Patients
  Origin: original 17, original 18

<a id="M08-CAP-IDENTITY-37bfdffca1a32095"></a>
- **M08-CAP-IDENTITY-37bfdffca1a32095**: Future Features
  Origin: original 17, original 18, original 28, original 29, original 54, original 55

<a id="M08-CAP-IDENTITY-45dc7d85324ea3a8"></a>
- **M08-CAP-IDENTITY-45dc7d85324ea3a8**: Online Appointments
  Origin: original 17

<a id="M08-CAP-IDENTITY-e0d275efdd17a0b5"></a>
- **M08-CAP-IDENTITY-e0d275efdd17a0b5**: Video Consultation
  Origin: original 17

<a id="M08-CAP-IDENTITY-eae7f1f40969a5d6"></a>
- **M08-CAP-IDENTITY-eae7f1f40969a5d6**: AI Assisted Diagnosis
  Origin: original 17

<a id="M08-CAP-IDENTITY-fd8e04fe96adc7c1"></a>
- **M08-CAP-IDENTITY-fd8e04fe96adc7c1**: Calendar Integration
  Origin: original 17

<a id="M08-CAP-IDENTITY-b95b8e5397e9b6e2"></a>
- **M08-CAP-IDENTITY-b95b8e5397e9b6e2**: Digital Signature
  Origin: original 17

<a id="M08-CAP-IDENTITY-e31eb3806530bcd0"></a>
- **M08-CAP-IDENTITY-e31eb3806530bcd0**: Patient Reviews
  Origin: original 17

<a id="M08-CAP-IDENTITY-b3dbbe60157238ac"></a>
- **M08-CAP-IDENTITY-b3dbbe60157238ac**: Availability Schedule
  Origin: original 17

<a id="M08-CAP-IDENTITY-087c84545f85842d"></a>
- **M08-CAP-IDENTITY-087c84545f85842d**: Stores hospitals, clinics and medical centers.
  Origin: original 18

<a id="M08-CAP-IDENTITY-e20d460f6589fc2f"></a>
- **M08-CAP-IDENTITY-e20d460f6589fc2f**: name
  Origin: original 18

<a id="M08-CAP-IDENTITY-6b4850fce25f1b07"></a>
- **M08-CAP-IDENTITY-6b4850fce25f1b07**: hospital_type
  Origin: original 18

<a id="M08-CAP-IDENTITY-6069f44150b70c7b"></a>
- **M08-CAP-IDENTITY-6069f44150b70c7b**: address
  Origin: original 18

<a id="M08-CAP-IDENTITY-70577d9fa01462f6"></a>
- **M08-CAP-IDENTITY-70577d9fa01462f6**: postal_code
  Origin: original 18

<a id="M08-CAP-IDENTITY-38ca8d13ab4cc0c6"></a>
- **M08-CAP-IDENTITY-38ca8d13ab4cc0c6**: latitude
  Origin: original 18

<a id="M08-CAP-IDENTITY-6b0f008f8db9dca5"></a>
- **M08-CAP-IDENTITY-6b0f008f8db9dca5**: longitude
  Origin: original 18

<a id="M08-CAP-IDENTITY-fbc423a77512bdee"></a>
- **M08-CAP-IDENTITY-fbc423a77512bdee**: website
  Origin: original 18

<a id="M08-CAP-IDENTITY-3dbd309d69d22bda"></a>
- **M08-CAP-IDENTITY-3dbd309d69d22bda**: emergency_department
  Origin: original 18

<a id="M08-CAP-IDENTITY-2f2387fed228bbf4"></a>
- **M08-CAP-IDENTITY-2f2387fed228bbf4**: trauma_center
  Origin: original 18

<a id="M08-CAP-IDENTITY-e7cf5e208e8c97db"></a>
- **M08-CAP-IDENTITY-e7cf5e208e8c97db**: icu_available
  Origin: original 18

<a id="M08-CAP-IDENTITY-3f203e07dbd668fa"></a>
- **M08-CAP-IDENTITY-3f203e07dbd668fa**: telemedicine_available
  Origin: original 18

<a id="M08-CAP-IDENTITY-3a1de446c94313fb"></a>
- **M08-CAP-IDENTITY-3a1de446c94313fb**: working_hours
  Origin: original 18

<a id="M08-CAP-IDENTITY-9292031266b0e334"></a>
- **M08-CAP-IDENTITY-9292031266b0e334**: Hospital
  Origin: original 18

<a id="M08-CAP-IDENTITY-593a539148322e7e"></a>
- **M08-CAP-IDENTITY-593a539148322e7e**: ├── Doctors
  Origin: original 18

<a id="M08-CAP-IDENTITY-d3851f7ba53f3cf3"></a>
- **M08-CAP-IDENTITY-d3851f7ba53f3cf3**: ├── Insurance
  Origin: original 18

<a id="M08-CAP-IDENTITY-398e64c3d7455bf6"></a>
- **M08-CAP-IDENTITY-398e64c3d7455bf6**: Nearest Hospital Search
  Origin: original 18

<a id="M08-CAP-IDENTITY-c0f0eee5bf6ba6b4"></a>
- **M08-CAP-IDENTITY-c0f0eee5bf6ba6b4**: Route Navigation
  Origin: original 18

<a id="M08-CAP-IDENTITY-a32ed1caec7236de"></a>
- **M08-CAP-IDENTITY-a32ed1caec7236de**: Emergency Availability
  Origin: original 18

<a id="M08-CAP-IDENTITY-53f856b75a8c7026"></a>
- **M08-CAP-IDENTITY-53f856b75a8c7026**: International Directory
  Origin: original 18

<a id="M08-CAP-IDENTITY-33432a25fe312328"></a>
- **M08-CAP-IDENTITY-33432a25fe312328**: Hospital Ratings
  Origin: original 18

<a id="M08-CAP-IDENTITY-05d0168fa34ba1a5"></a>
- **M08-CAP-IDENTITY-05d0168fa34ba1a5**: Online Registration
  Origin: original 18

<a id="M08-CAP-IDENTITY-c8b3da5b5f601ce4"></a>
- **M08-CAP-IDENTITY-c8b3da5b5f601ce4**: Live Waiting Time
  Origin: original 18

<a id="M08-CAP-IDENTITY-8aa2b9a35ef55440"></a>
- **M08-CAP-IDENTITY-8aa2b9a35ef55440**: Stores all trusted user devices connected to the Medical Passport account.
  Origin: original 28

<a id="M08-CAP-IDENTITY-ff6fb316f9bc6c33"></a>
- **M08-CAP-IDENTITY-ff6fb316f9bc6c33**: user_id
  Origin: original 28, original 29

<a id="M08-CAP-IDENTITY-b82a6b3fe559c7c3"></a>
- **M08-CAP-IDENTITY-b82a6b3fe559c7c3**: device_name
  Origin: original 28, original 29

<a id="M08-CAP-IDENTITY-846f3171f3a09846"></a>
- **M08-CAP-IDENTITY-846f3171f3a09846**: device_type
  Origin: original 28

<a id="M08-CAP-IDENTITY-09e56e311e862564"></a>
- **M08-CAP-IDENTITY-09e56e311e862564**: operating_system
  Origin: original 28

<a id="M08-CAP-IDENTITY-7e95d076641a23dd"></a>
- **M08-CAP-IDENTITY-7e95d076641a23dd**: os_version
  Origin: original 28

<a id="M08-CAP-IDENTITY-a58e4c9a29f435c9"></a>
- **M08-CAP-IDENTITY-a58e4c9a29f435c9**: app_version
  Origin: original 28

<a id="M08-CAP-IDENTITY-3f70e10133f4525a"></a>
- **M08-CAP-IDENTITY-3f70e10133f4525a**: device_identifier
  Origin: original 28

<a id="M08-CAP-IDENTITY-ca80f4943182d1e9"></a>
- **M08-CAP-IDENTITY-ca80f4943182d1e9**: push_token
  Origin: original 28

<a id="M08-CAP-IDENTITY-1e8bf1e08b1c3d1d"></a>
- **M08-CAP-IDENTITY-1e8bf1e08b1c3d1d**: timezone
  Origin: original 28

<a id="M08-CAP-IDENTITY-d44978cee95cd53b"></a>
- **M08-CAP-IDENTITY-d44978cee95cd53b**: last_ip
  Origin: original 28

<a id="M08-CAP-IDENTITY-1b4e522fa1e5627f"></a>
- **M08-CAP-IDENTITY-1b4e522fa1e5627f**: trusted_device
  Origin: original 28

<a id="M08-CAP-IDENTITY-8abceb02e16f435d"></a>
- **M08-CAP-IDENTITY-8abceb02e16f435d**: User Device
  Origin: original 28

<a id="M08-CAP-IDENTITY-46172ef655d51ea4"></a>
- **M08-CAP-IDENTITY-46172ef655d51ea4**: ├── User
  Origin: original 28, original 29

<a id="M08-CAP-IDENTITY-f4cf69f73e2d6134"></a>
- **M08-CAP-IDENTITY-f4cf69f73e2d6134**: ├── Authentication
  Origin: original 28, original 55

<a id="M08-CAP-IDENTITY-a35a4753309e049e"></a>
- **M08-CAP-IDENTITY-a35a4753309e049e**: ├── Security
  Origin: original 28, original 29

<a id="M08-CAP-IDENTITY-3ac5a64c26435e0b"></a>
- **M08-CAP-IDENTITY-3ac5a64c26435e0b**: Device Management
  Origin: original 28

<a id="M08-CAP-IDENTITY-80ff475b199a6675"></a>
- **M08-CAP-IDENTITY-80ff475b199a6675**: Remote Logout
  Origin: original 28

<a id="M08-CAP-IDENTITY-d000aabe8bcd14cb"></a>
- **M08-CAP-IDENTITY-d000aabe8bcd14cb**: Push Notifications
  Origin: original 28

<a id="M08-CAP-IDENTITY-0d58fced08504d02"></a>
- **M08-CAP-IDENTITY-0d58fced08504d02**: Trusted Devices
  Origin: original 28

<a id="M08-CAP-IDENTITY-7323d0841ce0cca3"></a>
- **M08-CAP-IDENTITY-7323d0841ce0cca3**: Biometric Authentication
  Origin: original 28

<a id="M08-CAP-IDENTITY-c408f090b88c9753"></a>
- **M08-CAP-IDENTITY-c408f090b88c9753**: Suspicious Login Detection
  Origin: original 28

<a id="M08-CAP-IDENTITY-2effd76adc3afdd3"></a>
- **M08-CAP-IDENTITY-2effd76adc3afdd3**: Device History
  Origin: original 28

<a id="M08-CAP-IDENTITY-ef89b74c4f5048cc"></a>
- **M08-CAP-IDENTITY-ef89b74c4f5048cc**: Stores active and historical authentication sessions.
  Origin: original 29

<a id="M08-CAP-IDENTITY-9ce278c7243c5d6f"></a>
- **M08-CAP-IDENTITY-9ce278c7243c5d6f**: access_token
  Origin: original 29

<a id="M08-CAP-IDENTITY-7a25892cc9d86978"></a>
- **M08-CAP-IDENTITY-7a25892cc9d86978**: refresh_token
  Origin: original 29

<a id="M08-CAP-IDENTITY-30376d6db2c394b7"></a>
- **M08-CAP-IDENTITY-30376d6db2c394b7**: session_type
  Origin: original 29

<a id="M08-CAP-IDENTITY-ed90ae4d45b0c374"></a>
- **M08-CAP-IDENTITY-ed90ae4d45b0c374**: login_method
  Origin: original 29

<a id="M08-CAP-IDENTITY-b79685036044a4a7"></a>
- **M08-CAP-IDENTITY-b79685036044a4a7**: two_factor_used
  Origin: original 29

<a id="M08-CAP-IDENTITY-96ad76373e114457"></a>
- **M08-CAP-IDENTITY-96ad76373e114457**: biometric_used
  Origin: original 29

<a id="M08-CAP-IDENTITY-5043dfea413290f5"></a>
- **M08-CAP-IDENTITY-5043dfea413290f5**: device_id
  Origin: original 29

<a id="M08-CAP-IDENTITY-2c2262c559f21e3b"></a>
- **M08-CAP-IDENTITY-2c2262c559f21e3b**: ip_address
  Origin: original 29

<a id="M08-CAP-IDENTITY-4fc8eeec1389de18"></a>
- **M08-CAP-IDENTITY-4fc8eeec1389de18**: last_activity
  Origin: original 29

<a id="M08-CAP-IDENTITY-d9b43600edccd62c"></a>
- **M08-CAP-IDENTITY-d9b43600edccd62c**: expires_at
  Origin: original 29

<a id="M08-CAP-IDENTITY-02c8a715e146dab7"></a>
- **M08-CAP-IDENTITY-02c8a715e146dab7**: revoked_at
  Origin: original 29

<a id="M08-CAP-IDENTITY-f165e1dc5719be00"></a>
- **M08-CAP-IDENTITY-f165e1dc5719be00**: Authentication Session
  Origin: original 29

<a id="M08-CAP-IDENTITY-51d0a8c3f1ff6087"></a>
- **M08-CAP-IDENTITY-51d0a8c3f1ff6087**: ├── User Devices
  Origin: original 29

<a id="M08-CAP-IDENTITY-48a0e7b8fcbc590c"></a>
- **M08-CAP-IDENTITY-48a0e7b8fcbc590c**: ├── Audit Logs
  Origin: original 29, original 55

<a id="M08-CAP-IDENTITY-fca60f92e838d794"></a>
- **M08-CAP-IDENTITY-fca60f92e838d794**: Multi-device Login
  Origin: original 29

<a id="M08-CAP-IDENTITY-c717c203c1f53744"></a>
- **M08-CAP-IDENTITY-c717c203c1f53744**: Session Revocation
  Origin: original 29

<a id="M08-CAP-IDENTITY-228708623b4a91cc"></a>
- **M08-CAP-IDENTITY-228708623b4a91cc**: Face ID
  Origin: original 29

<a id="M08-CAP-IDENTITY-8544798a5cd544fe"></a>
- **M08-CAP-IDENTITY-8544798a5cd544fe**: Touch ID
  Origin: original 29

<a id="M08-CAP-IDENTITY-794118775d2b339e"></a>
- **M08-CAP-IDENTITY-794118775d2b339e**: Passkeys
  Origin: original 29, original 54

<a id="M08-CAP-IDENTITY-ad331142397d37bc"></a>
- **M08-CAP-IDENTITY-ad331142397d37bc**: OAuth
  Origin: original 29

<a id="M08-CAP-IDENTITY-3ba5472748bd09e8"></a>
- **M08-CAP-IDENTITY-3ba5472748bd09e8**: SSO
  Origin: original 29

<a id="M08-CAP-IDENTITY-9ed90e98dde7f789"></a>
- **M08-CAP-IDENTITY-9ed90e98dde7f789**: Login History
  Origin: original 29

<a id="M08-CAP-IDENTITY-05607a0f7924ef49"></a>
- **M08-CAP-IDENTITY-05607a0f7924ef49**: Defines all authentication and authorization endpoints.
  Origin: original 54

<a id="M08-CAP-IDENTITY-887c7f1b563a7699"></a>
- **M08-CAP-IDENTITY-887c7f1b563a7699**: POST /auth/register
  Origin: original 54

<a id="M08-CAP-IDENTITY-619da77df803681e"></a>
- **M08-CAP-IDENTITY-619da77df803681e**: Creates a new account.
  Origin: original 54

<a id="M08-CAP-IDENTITY-84c4c3b540af4072"></a>
- **M08-CAP-IDENTITY-84c4c3b540af4072**: Required
  Origin: original 54

<a id="M08-CAP-IDENTITY-5e249b74917623fe"></a>
- **M08-CAP-IDENTITY-5e249b74917623fe**: Email
  Origin: original 54

<a id="M08-CAP-IDENTITY-d92f5e24e2f74625"></a>
- **M08-CAP-IDENTITY-d92f5e24e2f74625**: Password
  Origin: original 54

<a id="M08-CAP-IDENTITY-2e76943de10dea79"></a>
- **M08-CAP-IDENTITY-2e76943de10dea79**: First Name
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-43b8118a9ae48c91"></a>
- **M08-CAP-IDENTITY-43b8118a9ae48c91**: Last Name
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-580c32d823047de1"></a>
- **M08-CAP-IDENTITY-580c32d823047de1**: Country
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-2cdc52bf1d2f5303"></a>
- **M08-CAP-IDENTITY-2cdc52bf1d2f5303**: Language
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-0f6ce5db1025be5d"></a>
- **M08-CAP-IDENTITY-0f6ce5db1025be5d**: Returns
  Origin: original 54

<a id="M08-CAP-IDENTITY-872067ac94187bcc"></a>
- **M08-CAP-IDENTITY-872067ac94187bcc**: JWT Access Token
  Origin: original 54

<a id="M08-CAP-IDENTITY-9f80edb3b035fea7"></a>
- **M08-CAP-IDENTITY-9f80edb3b035fea7**: Refresh Token
  Origin: original 54

<a id="M08-CAP-IDENTITY-efb56fcdce14508d"></a>
- **M08-CAP-IDENTITY-efb56fcdce14508d**: User ID
  Origin: original 54

<a id="M08-CAP-IDENTITY-4bea41ae06f612fd"></a>
- **M08-CAP-IDENTITY-4bea41ae06f612fd**: POST /auth/login
  Origin: original 54

<a id="M08-CAP-IDENTITY-ecd4cb55073a5b07"></a>
- **M08-CAP-IDENTITY-ecd4cb55073a5b07**: Authentication using email and password.
  Origin: original 54

<a id="M08-CAP-IDENTITY-e94ccbe22164eff1"></a>
- **M08-CAP-IDENTITY-e94ccbe22164eff1**: Access Token
  Origin: original 54

<a id="M08-CAP-IDENTITY-e61da836585e27f9"></a>
- **M08-CAP-IDENTITY-e61da836585e27f9**: Session ID
  Origin: original 54

<a id="M08-CAP-IDENTITY-cd8724acdd82bfc6"></a>
- **M08-CAP-IDENTITY-cd8724acdd82bfc6**: POST /auth/logout
  Origin: original 54

<a id="M08-CAP-IDENTITY-f85a6dbb1e199204"></a>
- **M08-CAP-IDENTITY-f85a6dbb1e199204**: Invalidates current session.
  Origin: original 54

<a id="M08-CAP-IDENTITY-8d7d1980890e40b4"></a>
- **M08-CAP-IDENTITY-8d7d1980890e40b4**: POST /auth/refresh
  Origin: original 54

<a id="M08-CAP-IDENTITY-251cc99f01083dae"></a>
- **M08-CAP-IDENTITY-251cc99f01083dae**: Issues a new access token.
  Origin: original 54

<a id="M08-CAP-IDENTITY-36aab41046545396"></a>
- **M08-CAP-IDENTITY-36aab41046545396**: POST /auth/forgot-password
  Origin: original 54

<a id="M08-CAP-IDENTITY-ed982e54616b3b16"></a>
- **M08-CAP-IDENTITY-ed982e54616b3b16**: Sends password reset email.
  Origin: original 54

<a id="M08-CAP-IDENTITY-070ada268ea0aa16"></a>
- **M08-CAP-IDENTITY-070ada268ea0aa16**: POST /auth/reset-password
  Origin: original 54

<a id="M08-CAP-IDENTITY-4abcc95effd20b6d"></a>
- **M08-CAP-IDENTITY-4abcc95effd20b6d**: Changes password using reset token.
  Origin: original 54

<a id="M08-CAP-IDENTITY-9bcf03738c4d4637"></a>
- **M08-CAP-IDENTITY-9bcf03738c4d4637**: POST /auth/verify-email
  Origin: original 54

<a id="M08-CAP-IDENTITY-63c2121fb8841a8e"></a>
- **M08-CAP-IDENTITY-63c2121fb8841a8e**: Verifies email address.
  Origin: original 54

<a id="M08-CAP-IDENTITY-c35eb6195ba28c31"></a>
- **M08-CAP-IDENTITY-c35eb6195ba28c31**: POST /auth/change-password
  Origin: original 54

<a id="M08-CAP-IDENTITY-a49328d816799780"></a>
- **M08-CAP-IDENTITY-a49328d816799780**: Requires authentication.
  Origin: original 54

<a id="M08-CAP-IDENTITY-214cadfa78cf4b43"></a>
- **M08-CAP-IDENTITY-214cadfa78cf4b43**: POST /auth/2fa/enable
  Origin: original 54

<a id="M08-CAP-IDENTITY-7cd305b7a2db4b72"></a>
- **M08-CAP-IDENTITY-7cd305b7a2db4b72**: POST /auth/2fa/disable
  Origin: original 54

<a id="M08-CAP-IDENTITY-93ec90d2efcd5619"></a>
- **M08-CAP-IDENTITY-93ec90d2efcd5619**: POST /auth/2fa/verify
  Origin: original 54

<a id="M08-CAP-IDENTITY-9f24bdccc15af05a"></a>
- **M08-CAP-IDENTITY-9f24bdccc15af05a**: POST /auth/biometric/register
  Origin: original 54

<a id="M08-CAP-IDENTITY-f47194c69cf8c7c4"></a>
- **M08-CAP-IDENTITY-f47194c69cf8c7c4**: POST /auth/biometric/login
  Origin: original 54

<a id="M08-CAP-IDENTITY-67db018cf49e2e1c"></a>
- **M08-CAP-IDENTITY-67db018cf49e2e1c**: GET /auth/sessions
  Origin: original 54

<a id="M08-CAP-IDENTITY-ff927b95c6af8995"></a>
- **M08-CAP-IDENTITY-ff927b95c6af8995**: DELETE /auth/sessions/{id}
  Origin: original 54

<a id="M08-CAP-IDENTITY-5daec407d215b0dd"></a>
- **M08-CAP-IDENTITY-5daec407d215b0dd**: DELETE /auth/sessions
  Origin: original 54

<a id="M08-CAP-IDENTITY-a3903b6da43d2aea"></a>
- **M08-CAP-IDENTITY-a3903b6da43d2aea**: GET /devices
  Origin: original 54

<a id="M08-CAP-IDENTITY-6621e70ee992c786"></a>
- **M08-CAP-IDENTITY-6621e70ee992c786**: DELETE /devices/{id}
  Origin: original 54

<a id="M08-CAP-IDENTITY-b988fdf98e73de99"></a>
- **M08-CAP-IDENTITY-b988fdf98e73de99**: POST /devices/trust
  Origin: original 54

<a id="M08-CAP-IDENTITY-23e45cd191e70161"></a>
- **M08-CAP-IDENTITY-23e45cd191e70161**: POST /devices/untrust
  Origin: original 54

<a id="M08-CAP-IDENTITY-d6ea1bdd127bdf47"></a>
- **M08-CAP-IDENTITY-d6ea1bdd127bdf47**: {
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-d9b76fddc788880a"></a>
- **M08-CAP-IDENTITY-d9b76fddc788880a**: "success": true,
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-a30df3676e7be06e"></a>
- **M08-CAP-IDENTITY-a30df3676e7be06e**: "message": "...",
  Origin: original 54

<a id="M08-CAP-IDENTITY-c8e4db651133c614"></a>
- **M08-CAP-IDENTITY-c8e4db651133c614**: "data": {}
  Origin: original 54

<a id="M08-CAP-IDENTITY-ac89c5c4e185f31e"></a>
- **M08-CAP-IDENTITY-ac89c5c4e185f31e**: }
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-86a283538af4af29"></a>
- **M08-CAP-IDENTITY-86a283538af4af29**: 400 Validation Error
  Origin: original 54

<a id="M08-CAP-IDENTITY-715c20551940e769"></a>
- **M08-CAP-IDENTITY-715c20551940e769**: 401 Unauthorized
  Origin: original 54

<a id="M08-CAP-IDENTITY-3f9bd5469a45e346"></a>
- **M08-CAP-IDENTITY-3f9bd5469a45e346**: 403 Forbidden
  Origin: original 54

<a id="M08-CAP-IDENTITY-38f0fbc694dd56d3"></a>
- **M08-CAP-IDENTITY-38f0fbc694dd56d3**: 404 Not Found
  Origin: original 54

<a id="M08-CAP-IDENTITY-6a8ff46335bae235"></a>
- **M08-CAP-IDENTITY-6a8ff46335bae235**: 409 Conflict
  Origin: original 54

<a id="M08-CAP-IDENTITY-d00e7b4005be04b9"></a>
- **M08-CAP-IDENTITY-d00e7b4005be04b9**: 429 Too Many Requests
  Origin: original 54

<a id="M08-CAP-IDENTITY-6fc22b06d9f29e3b"></a>
- **M08-CAP-IDENTITY-6fc22b06d9f29e3b**: 500 Internal Error
  Origin: original 54

<a id="M08-CAP-IDENTITY-dcbab808a3e06a8e"></a>
- **M08-CAP-IDENTITY-dcbab808a3e06a8e**: JWT
  Origin: original 54

<a id="M08-CAP-IDENTITY-efa55b16ffd6b66c"></a>
- **M08-CAP-IDENTITY-efa55b16ffd6b66c**: AES-256
  Origin: original 54

<a id="M08-CAP-IDENTITY-44effbba6a37147d"></a>
- **M08-CAP-IDENTITY-44effbba6a37147d**: TLS 1.3
  Origin: original 54

<a id="M08-CAP-IDENTITY-c48f0e7bb6f278e1"></a>
- **M08-CAP-IDENTITY-c48f0e7bb6f278e1**: RBAC
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-1a811c116e88fd01"></a>
- **M08-CAP-IDENTITY-1a811c116e88fd01**: Device Verification
  Origin: original 54

<a id="M08-CAP-IDENTITY-34ab7485714ae5a7"></a>
- **M08-CAP-IDENTITY-34ab7485714ae5a7**: IP Validation
  Origin: original 54

<a id="M08-CAP-IDENTITY-d20a95b6b63719a7"></a>
- **M08-CAP-IDENTITY-d20a95b6b63719a7**: Audit Logs
  Origin: original 54, original 55

<a id="M08-CAP-IDENTITY-30418815bcebfa99"></a>
- **M08-CAP-IDENTITY-30418815bcebfa99**: Apple Sign-In
  Origin: original 54

<a id="M08-CAP-IDENTITY-1561188342a7cff3"></a>
- **M08-CAP-IDENTITY-1561188342a7cff3**: Google Sign-In
  Origin: original 54

<a id="M08-CAP-IDENTITY-8324615998ea1b3d"></a>
- **M08-CAP-IDENTITY-8324615998ea1b3d**: Microsoft Login
  Origin: original 54

<a id="M08-CAP-IDENTITY-93f5872726cd0650"></a>
- **M08-CAP-IDENTITY-93f5872726cd0650**: eID Login
  Origin: original 54

<a id="M08-CAP-IDENTITY-88669ed8b7cf7ab7"></a>
- **M08-CAP-IDENTITY-88669ed8b7cf7ab7**: Hardware Security Keys
  Origin: original 54

<a id="M08-CAP-IDENTITY-c997a75e2e5aa07b"></a>
- **M08-CAP-IDENTITY-c997a75e2e5aa07b**: Risk-based Authentication
  Origin: original 54

<a id="M08-CAP-IDENTITY-1a50feb0d5d15fa6"></a>
- **M08-CAP-IDENTITY-1a50feb0d5d15fa6**: Defines all endpoints related to user profile management.
  Origin: original 55

<a id="M08-CAP-IDENTITY-a7f5c57db0ac0d9f"></a>
- **M08-CAP-IDENTITY-a7f5c57db0ac0d9f**: GET /users/me
  Origin: original 55

<a id="M08-CAP-IDENTITY-9c2ef08b1aa2a7dc"></a>
- **M08-CAP-IDENTITY-9c2ef08b1aa2a7dc**: Returns authenticated user profile.
  Origin: original 55

<a id="M08-CAP-IDENTITY-2986a39c218bbb9d"></a>
- **M08-CAP-IDENTITY-2986a39c218bbb9d**: PUT /users/me
  Origin: original 55

<a id="M08-CAP-IDENTITY-40e7f80561190889"></a>
- **M08-CAP-IDENTITY-40e7f80561190889**: Updates profile information.
  Origin: original 55

<a id="M08-CAP-IDENTITY-7e78c9e00e0ea8cd"></a>
- **M08-CAP-IDENTITY-7e78c9e00e0ea8cd**: Fields
  Origin: original 55

<a id="M08-CAP-IDENTITY-f05c97d7dd51a4b5"></a>
- **M08-CAP-IDENTITY-f05c97d7dd51a4b5**: Phone
  Origin: original 55

<a id="M08-CAP-IDENTITY-d29370484e88074e"></a>
- **M08-CAP-IDENTITY-d29370484e88074e**: Date of Birth
  Origin: original 55

<a id="M08-CAP-IDENTITY-da0cfc5fd9b93a00"></a>
- **M08-CAP-IDENTITY-da0cfc5fd9b93a00**: Gender
  Origin: original 55

<a id="M08-CAP-IDENTITY-e92411fba2438bd2"></a>
- **M08-CAP-IDENTITY-e92411fba2438bd2**: City
  Origin: original 55

<a id="M08-CAP-IDENTITY-a5de18c8ef5144da"></a>
- **M08-CAP-IDENTITY-a5de18c8ef5144da**: Timezone
  Origin: original 55

<a id="M08-CAP-IDENTITY-353c9603fc6674f5"></a>
- **M08-CAP-IDENTITY-353c9603fc6674f5**: POST /users/avatar
  Origin: original 55

<a id="M08-CAP-IDENTITY-f3be0c68f960c195"></a>
- **M08-CAP-IDENTITY-f3be0c68f960c195**: Accepts
  Origin: original 55

<a id="M08-CAP-IDENTITY-55e8e3bab6a36eb3"></a>
- **M08-CAP-IDENTITY-55e8e3bab6a36eb3**: JPG
  Origin: original 55

<a id="M08-CAP-IDENTITY-d81c2b369452a362"></a>
- **M08-CAP-IDENTITY-d81c2b369452a362**: PNG
  Origin: original 55

<a id="M08-CAP-IDENTITY-2bd79e4118cb9b95"></a>
- **M08-CAP-IDENTITY-2bd79e4118cb9b95**: HEIC
  Origin: original 55

<a id="M08-CAP-IDENTITY-747f7ea972ac92c9"></a>
- **M08-CAP-IDENTITY-747f7ea972ac92c9**: Maximum Size
  Origin: original 55

<a id="M08-CAP-IDENTITY-ebf5d6e1ee482b40"></a>
- **M08-CAP-IDENTITY-ebf5d6e1ee482b40**: 10 MB
  Origin: original 55

<a id="M08-CAP-IDENTITY-9b6613c0a7cd9143"></a>
- **M08-CAP-IDENTITY-9b6613c0a7cd9143**: DELETE /users/avatar
  Origin: original 55

<a id="M08-CAP-IDENTITY-89425a1d5a5bf890"></a>
- **M08-CAP-IDENTITY-89425a1d5a5bf890**: PATCH /users/language
  Origin: original 55

<a id="M08-CAP-IDENTITY-e9e91b972c8b7e5f"></a>
- **M08-CAP-IDENTITY-e9e91b972c8b7e5f**: PATCH /users/country
  Origin: original 55

<a id="M08-CAP-IDENTITY-6714b130d7752f26"></a>
- **M08-CAP-IDENTITY-6714b130d7752f26**: GET /users/settings/notifications
  Origin: original 55

<a id="M08-CAP-IDENTITY-aa459154faf58710"></a>
- **M08-CAP-IDENTITY-aa459154faf58710**: PUT /users/settings/notifications
  Origin: original 55

<a id="M08-CAP-IDENTITY-48703a68b506b374"></a>
- **M08-CAP-IDENTITY-48703a68b506b374**: GET /users/settings/privacy
  Origin: original 55

<a id="M08-CAP-IDENTITY-7ac1deb09ee49534"></a>
- **M08-CAP-IDENTITY-7ac1deb09ee49534**: PUT /users/settings/privacy
  Origin: original 55

<a id="M08-CAP-IDENTITY-990a0ed7f3b14721"></a>
- **M08-CAP-IDENTITY-990a0ed7f3b14721**: GET /users/settings/security
  Origin: original 55

<a id="M08-CAP-IDENTITY-606f22b91b96ddc9"></a>
- **M08-CAP-IDENTITY-606f22b91b96ddc9**: PUT /users/settings/security
  Origin: original 55

<a id="M08-CAP-IDENTITY-df2d12d29ca88eaa"></a>
- **M08-CAP-IDENTITY-df2d12d29ca88eaa**: GET /users/export
  Origin: original 55

<a id="M08-CAP-IDENTITY-0c7c1a22a82f7aac"></a>
- **M08-CAP-IDENTITY-0c7c1a22a82f7aac**: Formats
  Origin: original 55

<a id="M08-CAP-IDENTITY-96175796b7761e88"></a>
- **M08-CAP-IDENTITY-96175796b7761e88**: PDF
  Origin: original 55

<a id="M08-CAP-IDENTITY-c9b52647cb778119"></a>
- **M08-CAP-IDENTITY-c9b52647cb778119**: JSON
  Origin: original 55

<a id="M08-CAP-IDENTITY-0d860f4a7af24b42"></a>
- **M08-CAP-IDENTITY-0d860f4a7af24b42**: ZIP
  Origin: original 55

<a id="M08-CAP-IDENTITY-958daeeb67066047"></a>
- **M08-CAP-IDENTITY-958daeeb67066047**: DELETE /users/me
  Origin: original 55

<a id="M08-CAP-IDENTITY-f9471d44f50cbdc8"></a>
- **M08-CAP-IDENTITY-f9471d44f50cbdc8**: Options
  Origin: original 55

<a id="M08-CAP-IDENTITY-a9e7e99f1f48d698"></a>
- **M08-CAP-IDENTITY-a9e7e99f1f48d698**: Soft Delete
  Origin: original 55

<a id="M08-CAP-IDENTITY-24479cdeb1ac3475"></a>
- **M08-CAP-IDENTITY-24479cdeb1ac3475**: Permanent Delete
  Origin: original 55

<a id="M08-CAP-IDENTITY-f4eea15f7a9c414b"></a>
- **M08-CAP-IDENTITY-f4eea15f7a9c414b**: "data": {
  Origin: original 55

<a id="M08-CAP-IDENTITY-91d6832251ce1c38"></a>
- **M08-CAP-IDENTITY-91d6832251ce1c38**: "id": "...",
  Origin: original 55

<a id="M08-CAP-IDENTITY-ea267f156bd34178"></a>
- **M08-CAP-IDENTITY-ea267f156bd34178**: "email": "...",
  Origin: original 55

<a id="M08-CAP-IDENTITY-91f4a5db31769ca9"></a>
- **M08-CAP-IDENTITY-91f4a5db31769ca9**: "firstName": "...",
  Origin: original 55

<a id="M08-CAP-IDENTITY-a25337bdf8c12dd1"></a>
- **M08-CAP-IDENTITY-a25337bdf8c12dd1**: "lastName": "..."
  Origin: original 55

<a id="M08-CAP-IDENTITY-ca51b08733e66b72"></a>
- **M08-CAP-IDENTITY-ca51b08733e66b72**: JWT Required
  Origin: original 55

<a id="M08-CAP-IDENTITY-dbd1329f16de55fa"></a>
- **M08-CAP-IDENTITY-dbd1329f16de55fa**: GDPR
  Origin: original 55

<a id="M08-CAP-IDENTITY-c71fe81b3339854c"></a>
- **M08-CAP-IDENTITY-c71fe81b3339854c**: HIPAA
  Origin: original 55

<a id="M08-CAP-IDENTITY-efa2a8ae50719ab3"></a>
- **M08-CAP-IDENTITY-efa2a8ae50719ab3**: ├── QR Passport
  Origin: original 55

<a id="M08-CAP-IDENTITY-a8f33420a29532cc"></a>
- **M08-CAP-IDENTITY-a8f33420a29532cc**: Multiple Profiles
  Origin: original 55

<a id="M08-CAP-IDENTITY-fb7955795ea0213f"></a>
- **M08-CAP-IDENTITY-fb7955795ea0213f**: Family Accounts
  Origin: original 55

<a id="M08-CAP-IDENTITY-8515c80e8712ffbc"></a>
- **M08-CAP-IDENTITY-8515c80e8712ffbc**: Digital Identity
  Origin: original 55

<a id="M08-CAP-IDENTITY-99b1521b02ccb66f"></a>
- **M08-CAP-IDENTITY-99b1521b02ccb66f**: eID Verification
  Origin: original 55

<a id="M08-CAP-IDENTITY-35ba7333a0a1bb52"></a>
- **M08-CAP-IDENTITY-35ba7333a0a1bb52**: Face Verification
  Origin: original 55

<a id="M08-CAP-IDENTITY-fc9cc154ac92a25a"></a>
- **M08-CAP-IDENTITY-fc9cc154ac92a25a**: Account Recovery Center
  Origin: original 55

<a id="M08-CAP-IDENTITY-64df6ede00a909be"></a>
- **M08-CAP-IDENTITY-64df6ede00a909be**: Data Portability
  Origin: original 55

<a id="M08-CAP-IDENTITY-ce8328d0340ac790"></a>
- **M08-CAP-IDENTITY-ce8328d0340ac790**: Professional profile of licensed pediatric surgeons.
  Origin: original 1121

<a id="M08-CAP-IDENTITY-b0f874eff292dcf3"></a>
- **M08-CAP-IDENTITY-b0f874eff292dcf3**: Qualifications
  Origin: original 1121

<a id="M08-CAP-IDENTITY-0b379eedb717ebd1"></a>
- **M08-CAP-IDENTITY-0b379eedb717ebd1**: Experience
  Origin: original 1121

<a id="M08-CAP-IDENTITY-7681f964d00f56f8"></a>
- **M08-CAP-IDENTITY-7681f964d00f56f8**: Surgical Specialization
  Origin: original 1121

<a id="M08-CAP-IDENTITY-2d1464b435bb05f6"></a>
- **M08-CAP-IDENTITY-2d1464b435bb05f6**: Languages
  Origin: original 1121

<a id="M08-CAP-IDENTITY-c41cbea21dddc152"></a>
- **M08-CAP-IDENTITY-c41cbea21dddc152**: Stores pediatric surgery center information.
  Origin: original 1122

<a id="M08-CAP-IDENTITY-4eb64c04a5621b34"></a>
- **M08-CAP-IDENTITY-4eb64c04a5621b34**: Operating Rooms
  Origin: original 1122

<a id="M08-CAP-IDENTITY-4977eafd100a8a50"></a>
- **M08-CAP-IDENTITY-4977eafd100a8a50**: ICU
  Origin: original 1122

<a id="M08-CAP-IDENTITY-705ca7666c7616e4"></a>
- **M08-CAP-IDENTITY-705ca7666c7616e4**: Physicians
  Origin: original 1122

<a id="M08-CAP-IDENTITY-9ffc076550b94ce2"></a>
- **M08-CAP-IDENTITY-9ffc076550b94ce2**: Contact Information
  Origin: original 1122

## Preserved source metadata

<a id="M08-CAP-IDENTITY-b4b97f4a6b08d5c0"></a>
- **M08-CAP-IDENTITY-b4b97f4a6b08d5c0**: # Users Table

<a id="M08-CAP-IDENTITY-2f5fdcca89ef8e56"></a>
- **M08-CAP-IDENTITY-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-IDENTITY-6f33acf3afb37064"></a>
- **M08-CAP-IDENTITY-6f33acf3afb37064**: ---

<a id="M08-CAP-IDENTITY-90dc9b75b60f53a5"></a>
- **M08-CAP-IDENTITY-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-IDENTITY-5754dd8ea427e6f0"></a>
- **M08-CAP-IDENTITY-5754dd8ea427e6f0**: status

<a id="M08-CAP-IDENTITY-2fac6cbf308c244b"></a>
- **M08-CAP-IDENTITY-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-IDENTITY-5ba74d8fcc7b20cc"></a>
- **M08-CAP-IDENTITY-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-IDENTITY-d5232cbd3a326267"></a>
- **M08-CAP-IDENTITY-d5232cbd3a326267**: Documentation

<a id="M08-CAP-IDENTITY-e866043e45ee5cdc"></a>
- **M08-CAP-IDENTITY-e866043e45ee5cdc**: # Doctors Table

<a id="M08-CAP-IDENTITY-2fadf63ad74d39e2"></a>
- **M08-CAP-IDENTITY-2fadf63ad74d39e2**: # Hospitals Table

<a id="M08-CAP-IDENTITY-0c9dd76c4de4b58b"></a>
- **M08-CAP-IDENTITY-0c9dd76c4de4b58b**: # User Devices Table

<a id="M08-CAP-IDENTITY-229a2783f12daa24"></a>
- **M08-CAP-IDENTITY-229a2783f12daa24**: # Authentication Sessions Table

<a id="M08-CAP-IDENTITY-ec7d99b1a178c41c"></a>
- **M08-CAP-IDENTITY-ec7d99b1a178c41c**: # Authentication API

<a id="M08-CAP-IDENTITY-a5ed47816dbe6e3c"></a>
- **M08-CAP-IDENTITY-a5ed47816dbe6e3c**: # Registration

<a id="M08-CAP-IDENTITY-6dce44603d15a21b"></a>
- **M08-CAP-IDENTITY-6dce44603d15a21b**: # Login

<a id="M08-CAP-IDENTITY-aca89b9463911523"></a>
- **M08-CAP-IDENTITY-aca89b9463911523**: # Logout

<a id="M08-CAP-IDENTITY-2c762a0170ac83e3"></a>
- **M08-CAP-IDENTITY-2c762a0170ac83e3**: # Refresh Token

<a id="M08-CAP-IDENTITY-448e74b90da5888d"></a>
- **M08-CAP-IDENTITY-448e74b90da5888d**: # Forgot Password

<a id="M08-CAP-IDENTITY-d2aed7d027dd61b2"></a>
- **M08-CAP-IDENTITY-d2aed7d027dd61b2**: # Reset Password

<a id="M08-CAP-IDENTITY-b87afa06060329d5"></a>
- **M08-CAP-IDENTITY-b87afa06060329d5**: # Verify Email

<a id="M08-CAP-IDENTITY-6a108be8340fdaf2"></a>
- **M08-CAP-IDENTITY-6a108be8340fdaf2**: # Change Password

<a id="M08-CAP-IDENTITY-0a6acf9baf6a73fa"></a>
- **M08-CAP-IDENTITY-0a6acf9baf6a73fa**: # Two-Factor Authentication

<a id="M08-CAP-IDENTITY-0f50081f964c4ca9"></a>
- **M08-CAP-IDENTITY-0f50081f964c4ca9**: # Biometric Login

<a id="M08-CAP-IDENTITY-971ac427216412df"></a>
- **M08-CAP-IDENTITY-971ac427216412df**: # Session Management

<a id="M08-CAP-IDENTITY-f4345044e79301e1"></a>
- **M08-CAP-IDENTITY-f4345044e79301e1**: # Device Management

<a id="M08-CAP-IDENTITY-9e7d13ca40140fec"></a>
- **M08-CAP-IDENTITY-9e7d13ca40140fec**: # Response Format

<a id="M08-CAP-IDENTITY-ebe0c1660abd9355"></a>
- **M08-CAP-IDENTITY-ebe0c1660abd9355**: # Error Codes

<a id="M08-CAP-IDENTITY-efc101e38d418651"></a>
- **M08-CAP-IDENTITY-efc101e38d418651**: # Security

<a id="M08-CAP-IDENTITY-3f0f99b89eb8ddf3"></a>
- **M08-CAP-IDENTITY-3f0f99b89eb8ddf3**: # User API

<a id="M08-CAP-IDENTITY-50bce47393fe0739"></a>
- **M08-CAP-IDENTITY-50bce47393fe0739**: # Get Current User

<a id="M08-CAP-IDENTITY-e8e289173dcbf13f"></a>
- **M08-CAP-IDENTITY-e8e289173dcbf13f**: # Update User

<a id="M08-CAP-IDENTITY-0bacb1b4471a552e"></a>
- **M08-CAP-IDENTITY-0bacb1b4471a552e**: # Upload Avatar

<a id="M08-CAP-IDENTITY-0e64fdbff6ef4d86"></a>
- **M08-CAP-IDENTITY-0e64fdbff6ef4d86**: # Delete Avatar

<a id="M08-CAP-IDENTITY-60c8225fec3228c2"></a>
- **M08-CAP-IDENTITY-60c8225fec3228c2**: # Change Language

<a id="M08-CAP-IDENTITY-6c1563d40d7c8521"></a>
- **M08-CAP-IDENTITY-6c1563d40d7c8521**: # Change Country

<a id="M08-CAP-IDENTITY-a1c483491a22d4b7"></a>
- **M08-CAP-IDENTITY-a1c483491a22d4b7**: # Notification Settings

<a id="M08-CAP-IDENTITY-9fce5f7cedb037bb"></a>
- **M08-CAP-IDENTITY-9fce5f7cedb037bb**: # Privacy Settings

<a id="M08-CAP-IDENTITY-3bc5867b20f0abc2"></a>
- **M08-CAP-IDENTITY-3bc5867b20f0abc2**: # Security Settings

<a id="M08-CAP-IDENTITY-e6ad74c3c6ba5230"></a>
- **M08-CAP-IDENTITY-e6ad74c3c6ba5230**: # Download Personal Data

<a id="M08-CAP-IDENTITY-ffad182462e9e41c"></a>
- **M08-CAP-IDENTITY-ffad182462e9e41c**: # Delete Account

<a id="M08-CAP-IDENTITY-ab2fd2438e03fce3"></a>
- **M08-CAP-IDENTITY-ab2fd2438e03fce3**: # Response Example

<a id="M08-CAP-IDENTITY-9879a69a15c5a50a"></a>
- **M08-CAP-IDENTITY-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-IDENTITY-0f0e73fde2b88d23"></a>
- **M08-CAP-IDENTITY-0f0e73fde2b88d23**: # Pediatric Surgeon Profile

<a id="M08-CAP-IDENTITY-4fbeeb87456accf5"></a>
- **M08-CAP-IDENTITY-4fbeeb87456accf5**: Supports

<a id="M08-CAP-IDENTITY-7703caa2c7964ad2"></a>
- **M08-CAP-IDENTITY-7703caa2c7964ad2**: # Pediatric Surgery Center Profile

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
