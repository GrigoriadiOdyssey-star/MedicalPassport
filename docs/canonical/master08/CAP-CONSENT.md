# CORE-CAP-CONSENT — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: AuthorizationScope, RestrictionPolicy, ConsentEvent, DisclosureDecision. Dependencies: CAP-CONSENT, CAP-DATA, CAP-AUDIT.

Resolve actor/relationship/purpose/jurisdiction → evaluate record/encounter restrictions → minimum-necessary disclosure → audit → invalidate access/cache on expiry/revocation.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-MENTAL-CONFIDENTIALITY

Original IDs: 4849, 5172.

Telecare/transition and element/encounter-level authorization are different responsibilities linked through one consent owner.

Resolve actor/relationship/purpose/jurisdiction → evaluate record/encounter restrictions → minimum-necessary disclosure → audit → invalidate access/cache on expiry/revocation.

### M08-CONSENT

Original IDs: 30, 227, 43.

Consent history and family access share policy ownership with explicit recipient, resource, purpose, expiry, withdrawal and guardian evidence. Family roles and signed/accepted flags do not prove legal authority. Preserve language/country/version/signature provenance while separating law/policy approval and access enforcement.

Resolve actor/relationship/purpose/jurisdiction → evaluate record/encounter restrictions → minimum-necessary disclosure → audit → invalidate access/cache on expiry/revocation.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-CONSENT-fd3ea7ffb206b367"></a>
- **M08-CAP-CONSENT-fd3ea7ffb206b367**: Stores all user consents related to privacy, medical data sharing and legal compliance.
  Origin: original 30

<a id="M08-CAP-CONSENT-c91610423a46692c"></a>
- **M08-CAP-CONSENT-c91610423a46692c**: id (UUID)
  Origin: original 30

<a id="M08-CAP-CONSENT-ff6fb316f9bc6c33"></a>
- **M08-CAP-CONSENT-ff6fb316f9bc6c33**: user_id
  Origin: original 30

<a id="M08-CAP-CONSENT-98b3bd25a01fa97c"></a>
- **M08-CAP-CONSENT-98b3bd25a01fa97c**: consent_type
  Origin: original 30

<a id="M08-CAP-CONSENT-b18909467fad0e27"></a>
- **M08-CAP-CONSENT-b18909467fad0e27**: consent_version
  Origin: original 30

<a id="M08-CAP-CONSENT-282673f6d35709bd"></a>
- **M08-CAP-CONSENT-282673f6d35709bd**: accepted
  Origin: original 30

<a id="M08-CAP-CONSENT-193459b3f569434b"></a>
- **M08-CAP-CONSENT-193459b3f569434b**: accepted_at
  Origin: original 30

<a id="M08-CAP-CONSENT-d9b43600edccd62c"></a>
- **M08-CAP-CONSENT-d9b43600edccd62c**: expires_at
  Origin: original 30

<a id="M08-CAP-CONSENT-40861b60f2bab6f0"></a>
- **M08-CAP-CONSENT-40861b60f2bab6f0**: withdrawn_at
  Origin: original 30

<a id="M08-CAP-CONSENT-9fe94e819c56a7a3"></a>
- **M08-CAP-CONSENT-9fe94e819c56a7a3**: country
  Origin: original 30

<a id="M08-CAP-CONSENT-e8c48d1d02eb8c17"></a>
- **M08-CAP-CONSENT-e8c48d1d02eb8c17**: language
  Origin: original 30

<a id="M08-CAP-CONSENT-2c2262c559f21e3b"></a>
- **M08-CAP-CONSENT-2c2262c559f21e3b**: ip_address
  Origin: original 30

<a id="M08-CAP-CONSENT-5043dfea413290f5"></a>
- **M08-CAP-CONSENT-5043dfea413290f5**: device_id
  Origin: original 30

<a id="M08-CAP-CONSENT-66cddc40e7df3e30"></a>
- **M08-CAP-CONSENT-66cddc40e7df3e30**: signature_type
  Origin: original 30

<a id="M08-CAP-CONSENT-e187a9bc5c3997ad"></a>
- **M08-CAP-CONSENT-e187a9bc5c3997ad**: signature_hash
  Origin: original 30

<a id="M08-CAP-CONSENT-bcc951dbdead2bf5"></a>
- **M08-CAP-CONSENT-bcc951dbdead2bf5**: created_at
  Origin: original 30

<a id="M08-CAP-CONSENT-51db2c3a3a174a78"></a>
- **M08-CAP-CONSENT-51db2c3a3a174a78**: updated_at
  Origin: original 30

<a id="M08-CAP-CONSENT-fcecdb23269c6ca0"></a>
- **M08-CAP-CONSENT-fcecdb23269c6ca0**: User Consent
  Origin: original 30

<a id="M08-CAP-CONSENT-46172ef655d51ea4"></a>
- **M08-CAP-CONSENT-46172ef655d51ea4**: ├── User
  Origin: original 30

<a id="M08-CAP-CONSENT-f4cf69f73e2d6134"></a>
- **M08-CAP-CONSENT-f4cf69f73e2d6134**: ├── Authentication
  Origin: original 30

<a id="M08-CAP-CONSENT-d3290df0dc43733d"></a>
- **M08-CAP-CONSENT-d3290df0dc43733d**: ├── Medical Documents
  Origin: original 30

<a id="M08-CAP-CONSENT-b7f0d2db15272a43"></a>
- **M08-CAP-CONSENT-b7f0d2db15272a43**: ├── QR Sessions
  Origin: original 30

<a id="M08-CAP-CONSENT-93522f774f6d0bd5"></a>
- **M08-CAP-CONSENT-93522f774f6d0bd5**: ├── AI Assistant
  Origin: original 30, original 43

<a id="M08-CAP-CONSENT-a7f2ddd3ac9459b5"></a>
- **M08-CAP-CONSENT-a7f2ddd3ac9459b5**: ├── Telemedicine
  Origin: original 30

<a id="M08-CAP-CONSENT-48a0e7b8fcbc590c"></a>
- **M08-CAP-CONSENT-48a0e7b8fcbc590c**: ├── Audit Logs
  Origin: original 30, original 43

<a id="M08-CAP-CONSENT-37bfdffca1a32095"></a>
- **M08-CAP-CONSENT-37bfdffca1a32095**: Future Features
  Origin: original 30, original 43

<a id="M08-CAP-CONSENT-a222e476783d7596"></a>
- **M08-CAP-CONSENT-a222e476783d7596**: GDPR Consent
  Origin: original 30

<a id="M08-CAP-CONSENT-0f814bc6a198cafe"></a>
- **M08-CAP-CONSENT-0f814bc6a198cafe**: HIPAA Consent
  Origin: original 30

<a id="M08-CAP-CONSENT-0b3c1c1c603ce3f7"></a>
- **M08-CAP-CONSENT-0b3c1c1c603ce3f7**: Electronic Signature
  Origin: original 30

<a id="M08-CAP-CONSENT-d8360a15bd565cea"></a>
- **M08-CAP-CONSENT-d8360a15bd565cea**: Parent/Guardian Consent
  Origin: original 30

<a id="M08-CAP-CONSENT-14581c661ce3ef68"></a>
- **M08-CAP-CONSENT-14581c661ce3ef68**: Data Sharing Consent
  Origin: original 30

<a id="M08-CAP-CONSENT-035de7e957b803a0"></a>
- **M08-CAP-CONSENT-035de7e957b803a0**: Research Participation
  Origin: original 30

<a id="M08-CAP-CONSENT-212090261129aed8"></a>
- **M08-CAP-CONSENT-212090261129aed8**: Consent History
  Origin: original 30, original 4849

<a id="M08-CAP-CONSENT-5031217822556ff5"></a>
- **M08-CAP-CONSENT-5031217822556ff5**: Provides secure management of family member access to medical information.
  Origin: original 43

<a id="M08-CAP-CONSENT-a710cdf74a1d7757"></a>
- **M08-CAP-CONSENT-a710cdf74a1d7757**: Parent
  Origin: original 43

<a id="M08-CAP-CONSENT-89bf69dc7766d6d7"></a>
- **M08-CAP-CONSENT-89bf69dc7766d6d7**: Child
  Origin: original 43

<a id="M08-CAP-CONSENT-a05a9a27c2a8fb67"></a>
- **M08-CAP-CONSENT-a05a9a27c2a8fb67**: Spouse
  Origin: original 43

<a id="M08-CAP-CONSENT-55c73190e29ce3a6"></a>
- **M08-CAP-CONSENT-55c73190e29ce3a6**: Guardian
  Origin: original 43

<a id="M08-CAP-CONSENT-cf2218818c8100db"></a>
- **M08-CAP-CONSENT-cf2218818c8100db**: Caregiver
  Origin: original 43

<a id="M08-CAP-CONSENT-b5353a91a7e933a9"></a>
- **M08-CAP-CONSENT-b5353a91a7e933a9**: Relative
  Origin: original 43

<a id="M08-CAP-CONSENT-a9e2af6b28462deb"></a>
- **M08-CAP-CONSENT-a9e2af6b28462deb**: Legal Representative
  Origin: original 43

<a id="M08-CAP-CONSENT-41c339347f4270ca"></a>
- **M08-CAP-CONSENT-41c339347f4270ca**: View Only
  Origin: original 43

<a id="M08-CAP-CONSENT-0eef1daefa12513d"></a>
- **M08-CAP-CONSENT-0eef1daefa12513d**: View + Download
  Origin: original 43

<a id="M08-CAP-CONSENT-ec4c7a50c87f8504"></a>
- **M08-CAP-CONSENT-ec4c7a50c87f8504**: Medical Management
  Origin: original 43

<a id="M08-CAP-CONSENT-4c8dfb84dd005ba9"></a>
- **M08-CAP-CONSENT-4c8dfb84dd005ba9**: Medicine Management
  Origin: original 43

<a id="M08-CAP-CONSENT-3657b1eb142d6767"></a>
- **M08-CAP-CONSENT-3657b1eb142d6767**: Document Management
  Origin: original 43

<a id="M08-CAP-CONSENT-53fdcd3a56f144a6"></a>
- **M08-CAP-CONSENT-53fdcd3a56f144a6**: Emergency Access
  Origin: original 43

<a id="M08-CAP-CONSENT-0eb1d20c0706fe0c"></a>
- **M08-CAP-CONSENT-0eb1d20c0706fe0c**: Full Administration
  Origin: original 43

<a id="M08-CAP-CONSENT-5e666e818e9eb7fb"></a>
- **M08-CAP-CONSENT-5e666e818e9eb7fb**: Invite Family Member
  Origin: original 43

<a id="M08-CAP-CONSENT-4b9d3b5739aaf272"></a>
- **M08-CAP-CONSENT-4b9d3b5739aaf272**: Remove Family Member
  Origin: original 43

<a id="M08-CAP-CONSENT-4fa8f7c8cef6108a"></a>
- **M08-CAP-CONSENT-4fa8f7c8cef6108a**: Temporary Access
  Origin: original 43

<a id="M08-CAP-CONSENT-968189f082140fb3"></a>
- **M08-CAP-CONSENT-968189f082140fb3**: Permanent Access
  Origin: original 43

<a id="M08-CAP-CONSENT-511a1e104b0e0b78"></a>
- **M08-CAP-CONSENT-511a1e104b0e0b78**: Access History
  Origin: original 43, original 5172

<a id="M08-CAP-CONSENT-a3e8eca800c7b17c"></a>
- **M08-CAP-CONSENT-a3e8eca800c7b17c**: Permission Management
  Origin: original 43

<a id="M08-CAP-CONSENT-3907aea3a2fc44b1"></a>
- **M08-CAP-CONSENT-3907aea3a2fc44b1**: Medical Profile
  Origin: original 43

<a id="M08-CAP-CONSENT-d7a2add4cd06a8e6"></a>
- **M08-CAP-CONSENT-d7a2add4cd06a8e6**: Medicines
  Origin: original 43

<a id="M08-CAP-CONSENT-5ece9f76c54dd0a2"></a>
- **M08-CAP-CONSENT-5ece9f76c54dd0a2**: Allergies
  Origin: original 43

<a id="M08-CAP-CONSENT-182520ba3d242100"></a>
- **M08-CAP-CONSENT-182520ba3d242100**: Diagnoses
  Origin: original 43

<a id="M08-CAP-CONSENT-ca00fc7c0d0e2a70"></a>
- **M08-CAP-CONSENT-ca00fc7c0d0e2a70**: Vaccinations
  Origin: original 43

<a id="M08-CAP-CONSENT-f6feaab2781dc285"></a>
- **M08-CAP-CONSENT-f6feaab2781dc285**: Medical Documents
  Origin: original 43

<a id="M08-CAP-CONSENT-e4a7d395f869c9ae"></a>
- **M08-CAP-CONSENT-e4a7d395f869c9ae**: Insurance
  Origin: original 43

<a id="M08-CAP-CONSENT-80e3ef36950805e9"></a>
- **M08-CAP-CONSENT-80e3ef36950805e9**: Emergency Contacts
  Origin: original 43

<a id="M08-CAP-CONSENT-63e1d5023f68e934"></a>
- **M08-CAP-CONSENT-63e1d5023f68e934**: QR Passport
  Origin: original 43

<a id="M08-CAP-CONSENT-f228fc13c7446b7d"></a>
- **M08-CAP-CONSENT-f228fc13c7446b7d**: User Approval
  Origin: original 43

<a id="M08-CAP-CONSENT-3160601f971b0589"></a>
- **M08-CAP-CONSENT-3160601f971b0589**: Biometric Confirmation
  Origin: original 43

<a id="M08-CAP-CONSENT-fd2f05fb7464e1d2"></a>
- **M08-CAP-CONSENT-fd2f05fb7464e1d2**: Two-Factor Authentication
  Origin: original 43

<a id="M08-CAP-CONSENT-d20a95b6b63719a7"></a>
- **M08-CAP-CONSENT-d20a95b6b63719a7**: Audit Logs
  Origin: original 43

<a id="M08-CAP-CONSENT-61643072d415c76d"></a>
- **M08-CAP-CONSENT-61643072d415c76d**: Permission Expiration
  Origin: original 43

<a id="M08-CAP-CONSENT-ca39d0407f53d637"></a>
- **M08-CAP-CONSENT-ca39d0407f53d637**: Revocable Access
  Origin: original 43

<a id="M08-CAP-CONSENT-9235a65ebdd7cbd8"></a>
- **M08-CAP-CONSENT-9235a65ebdd7cbd8**: Invite
  Origin: original 43

<a id="M08-CAP-CONSENT-60ad5f0e95a3c0f2"></a>
- **M08-CAP-CONSENT-60ad5f0e95a3c0f2**: ↓
  Origin: original 43

<a id="M08-CAP-CONSENT-c49e369f253d2e6e"></a>
- **M08-CAP-CONSENT-c49e369f253d2e6e**: Verification
  Origin: original 43

<a id="M08-CAP-CONSENT-929a732ac836ab70"></a>
- **M08-CAP-CONSENT-929a732ac836ab70**: Permission Selection
  Origin: original 43

<a id="M08-CAP-CONSENT-21509109d4a8f25c"></a>
- **M08-CAP-CONSENT-21509109d4a8f25c**: Access Granted
  Origin: original 43

<a id="M08-CAP-CONSENT-7fb3c9beb22120a7"></a>
- **M08-CAP-CONSENT-7fb3c9beb22120a7**: Activity Logging
  Origin: original 43

<a id="M08-CAP-CONSENT-da39d461d66267e9"></a>
- **M08-CAP-CONSENT-da39d461d66267e9**: Permission Review
  Origin: original 43

<a id="M08-CAP-CONSENT-e9e76bad6340921b"></a>
- **M08-CAP-CONSENT-e9e76bad6340921b**: Access Revocation
  Origin: original 43

<a id="M08-CAP-CONSENT-5e49499d1b3ea5dd"></a>
- **M08-CAP-CONSENT-5e49499d1b3ea5dd**: ├── User Profile
  Origin: original 43

<a id="M08-CAP-CONSENT-efa2a8ae50719ab3"></a>
- **M08-CAP-CONSENT-efa2a8ae50719ab3**: ├── QR Passport
  Origin: original 43

<a id="M08-CAP-CONSENT-0c15dac7184031a0"></a>
- **M08-CAP-CONSENT-0c15dac7184031a0**: ├── Emergency Mode
  Origin: original 43

<a id="M08-CAP-CONSENT-225d721817a80b2f"></a>
- **M08-CAP-CONSENT-225d721817a80b2f**: ├── Notifications
  Origin: original 43

<a id="M08-CAP-CONSENT-ca0910ed36c02588"></a>
- **M08-CAP-CONSENT-ca0910ed36c02588**: ├── Medicines
  Origin: original 43

<a id="M08-CAP-CONSENT-23a3bdaef436618d"></a>
- **M08-CAP-CONSENT-23a3bdaef436618d**: ├── Documents
  Origin: original 43

<a id="M08-CAP-CONSENT-2401f0b4cb531bec"></a>
- **M08-CAP-CONSENT-2401f0b4cb531bec**: Child Medical Accounts
  Origin: original 43

<a id="M08-CAP-CONSENT-68b54d60fa5ba355"></a>
- **M08-CAP-CONSENT-68b54d60fa5ba355**: Elderly Care Mode
  Origin: original 43

<a id="M08-CAP-CONSENT-c00fdbafe1826ea8"></a>
- **M08-CAP-CONSENT-c00fdbafe1826ea8**: Family Dashboard
  Origin: original 43

<a id="M08-CAP-CONSENT-5f228667999bf1ff"></a>
- **M08-CAP-CONSENT-5f228667999bf1ff**: Shared Medicine Reminders
  Origin: original 43

<a id="M08-CAP-CONSENT-3248619d1a64f8ee"></a>
- **M08-CAP-CONSENT-3248619d1a64f8ee**: Shared Travel Profiles
  Origin: original 43

<a id="M08-CAP-CONSENT-1109871da98ff91a"></a>
- **M08-CAP-CONSENT-1109871da98ff91a**: Emergency Family Broadcast
  Origin: original 43

<a id="M08-CAP-CONSENT-3f750a3244b4be7f"></a>
- **M08-CAP-CONSENT-3f750a3244b4be7f**: Multi-Guardian Support
  Origin: original 43

<a id="M08-CAP-CONSENT-29dae955a526e4d3"></a>
- **M08-CAP-CONSENT-29dae955a526e4d3**: Patient controls
  Origin: original 227

<a id="M08-CAP-CONSENT-8ebf03c210cf2330"></a>
- **M08-CAP-CONSENT-8ebf03c210cf2330**: Who may access data
  Origin: original 227

<a id="M08-CAP-CONSENT-31e60eee6ff17199"></a>
- **M08-CAP-CONSENT-31e60eee6ff17199**: Which data are shared
  Origin: original 227

<a id="M08-CAP-CONSENT-ac2d0ac2fa0ec682"></a>
- **M08-CAP-CONSENT-ac2d0ac2fa0ec682**: Access duration
  Origin: original 227

<a id="M08-CAP-CONSENT-bfb2ab85f944de05"></a>
- **M08-CAP-CONSENT-bfb2ab85f944de05**: Emergency permissions
  Origin: original 227

<a id="M08-CAP-CONSENT-542ec5832a5cb88f"></a>
- **M08-CAP-CONSENT-542ec5832a5cb88f**: Consent history
  Origin: original 227

<a id="M08-CAP-CONSENT-aa657ff3fc951209"></a>
- **M08-CAP-CONSENT-aa657ff3fc951209**: Consent can be revoked at any time.
  Origin: original 227

<a id="M08-CAP-CONSENT-6a1ee0ad3efa4dd7"></a>
- **M08-CAP-CONSENT-6a1ee0ad3efa4dd7**: Support remote mental-health care, enhanced privacy governance and structured transition into adult mental-health services.
  Origin: original 4849

<a id="M08-CAP-CONSENT-feebb407954d04ff"></a>
- **M08-CAP-CONSENT-feebb407954d04ff**: Telecare Functions:
  Origin: original 4849

<a id="M08-CAP-CONSENT-e0d275efdd17a0b5"></a>
- **M08-CAP-CONSENT-e0d275efdd17a0b5**: Video Consultation
  Origin: original 4849

<a id="M08-CAP-CONSENT-72e78c63ba9415f0"></a>
- **M08-CAP-CONSENT-72e78c63ba9415f0**: Remote Psychological Follow-up
  Origin: original 4849

<a id="M08-CAP-CONSENT-05c99f9c3d3d09f9"></a>
- **M08-CAP-CONSENT-05c99f9c3d3d09f9**: Symptom Assessments
  Origin: original 4849

<a id="M08-CAP-CONSENT-b615754ff5b2cb08"></a>
- **M08-CAP-CONSENT-b615754ff5b2cb08**: Medication Review
  Origin: original 4849

<a id="M08-CAP-CONSENT-379091941000b78a"></a>
- **M08-CAP-CONSENT-379091941000b78a**: Therapy Follow-up
  Origin: original 4849

<a id="M08-CAP-CONSENT-f2aa330c0dac89cc"></a>
- **M08-CAP-CONSENT-f2aa330c0dac89cc**: Guardian Participation Controls
  Origin: original 4849

<a id="M08-CAP-CONSENT-1910746a318c9b67"></a>
- **M08-CAP-CONSENT-1910746a318c9b67**: Patient-only Session Context where legally appropriate
  Origin: original 4849

<a id="M08-CAP-CONSENT-576af0299110f685"></a>
- **M08-CAP-CONSENT-576af0299110f685**: Care Coordination
  Origin: original 4849

<a id="M08-CAP-CONSENT-17a169fd20fd2abb"></a>
- **M08-CAP-CONSENT-17a169fd20fd2abb**: Privacy Functions:
  Origin: original 4849

<a id="M08-CAP-CONSENT-92fe6b4d49e74da9"></a>
- **M08-CAP-CONSENT-92fe6b4d49e74da9**: Age-aware Confidentiality
  Origin: original 4849

<a id="M08-CAP-CONSENT-e8b2574751f58b31"></a>
- **M08-CAP-CONSENT-e8b2574751f58b31**: Guardian Access Controls
  Origin: original 4849

<a id="M08-CAP-CONSENT-fb3a9b6e8d1948c6"></a>
- **M08-CAP-CONSENT-fb3a9b6e8d1948c6**: Sensitive Note Segmentation
  Origin: original 4849

<a id="M08-CAP-CONSENT-98cbe9a359f0ba7a"></a>
- **M08-CAP-CONSENT-98cbe9a359f0ba7a**: Purpose-limited Access
  Origin: original 4849

<a id="M08-CAP-CONSENT-0d911135c9ea2dfc"></a>
- **M08-CAP-CONSENT-0d911135c9ea2dfc**: Emergency Override Governance
  Origin: original 4849

<a id="M08-CAP-CONSENT-79b63a83bc7d1c15"></a>
- **M08-CAP-CONSENT-79b63a83bc7d1c15**: Audit Trail
  Origin: original 4849

<a id="M08-CAP-CONSENT-22a6639767e0a6d1"></a>
- **M08-CAP-CONSENT-22a6639767e0a6d1**: Transition Functions:
  Origin: original 4849

<a id="M08-CAP-CONSENT-646285a8bb348190"></a>
- **M08-CAP-CONSENT-646285a8bb348190**: Pediatric Mental Health Summary
  Origin: original 4849

<a id="M08-CAP-CONSENT-d8893edb21b7a8cf"></a>
- **M08-CAP-CONSENT-d8893edb21b7a8cf**: Diagnosis History
  Origin: original 4849

<a id="M08-CAP-CONSENT-0cdcf465ec7d12ac"></a>
- **M08-CAP-CONSENT-0cdcf465ec7d12ac**: Medication Exposure
  Origin: original 4849

<a id="M08-CAP-CONSENT-3882fb384c27d0f8"></a>
- **M08-CAP-CONSENT-3882fb384c27d0f8**: Therapy History
  Origin: original 4849

<a id="M08-CAP-CONSENT-f526b61e05777680"></a>
- **M08-CAP-CONSENT-f526b61e05777680**: Hospitalization History
  Origin: original 4849

<a id="M08-CAP-CONSENT-23a329b8baa1834f"></a>
- **M08-CAP-CONSENT-23a329b8baa1834f**: Functional Status
  Origin: original 4849

<a id="M08-CAP-CONSENT-f43a0702ad91f5fb"></a>
- **M08-CAP-CONSENT-f43a0702ad91f5fb**: Current Care Plan
  Origin: original 4849

<a id="M08-CAP-CONSENT-eea812bae63ced56"></a>
- **M08-CAP-CONSENT-eea812bae63ced56**: Adult Provider Handover
  Origin: original 4849

<a id="M08-CAP-CONSENT-112b4157809ba743"></a>
- **M08-CAP-CONSENT-112b4157809ba743**: Provide the privacy and authorization layer required for pediatric mental-health information.
  Origin: original 5172

<a id="M08-CAP-CONSENT-8e96619c8dca4b93"></a>
- **M08-CAP-CONSENT-8e96619c8dca4b93**: Functions:
  Origin: original 5172

<a id="M08-CAP-CONSENT-852356f0b5459732"></a>
- **M08-CAP-CONSENT-852356f0b5459732**: Guardian Authority Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-7a04f275fc86bc8a"></a>
- **M08-CAP-CONSENT-7a04f275fc86bc8a**: Patient Assent
  Origin: original 5172

<a id="M08-CAP-CONSENT-5eb626ec7f09fd11"></a>
- **M08-CAP-CONSENT-5eb626ec7f09fd11**: Patient Consent where applicable
  Origin: original 5172

<a id="M08-CAP-CONSENT-c2289a665200a02a"></a>
- **M08-CAP-CONSENT-c2289a665200a02a**: Confidential Encounter Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-ab175ab25d1e0f95"></a>
- **M08-CAP-CONSENT-ab175ab25d1e0f95**: Information Segmentation
  Origin: original 5172

<a id="M08-CAP-CONSENT-1f206788bbca5e1b"></a>
- **M08-CAP-CONSENT-1f206788bbca5e1b**: Data-sharing Authorization
  Origin: original 5172

<a id="M08-CAP-CONSENT-bccd59dc6044e7c8"></a>
- **M08-CAP-CONSENT-bccd59dc6044e7c8**: Authorization Expiration
  Origin: original 5172

<a id="M08-CAP-CONSENT-c32ed0200636f8aa"></a>
- **M08-CAP-CONSENT-c32ed0200636f8aa**: Authorization Revocation
  Origin: original 5172

<a id="M08-CAP-CONSENT-d007db7d8e2e2787"></a>
- **M08-CAP-CONSENT-d007db7d8e2e2787**: Emergency-access Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-02da4f2828d39387"></a>
- **M08-CAP-CONSENT-02da4f2828d39387**: Legal/Jurisdiction Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-dc20bc176bdee4c8"></a>
- **M08-CAP-CONSENT-dc20bc176bdee4c8**: Permissions:
  Origin: original 5172

<a id="M08-CAP-CONSENT-b3b1511164e136ec"></a>
- **M08-CAP-CONSENT-b3b1511164e136ec**: Patient
  Origin: original 5172

<a id="M08-CAP-CONSENT-3cf669d295d7b82a"></a>
- **M08-CAP-CONSENT-3cf669d295d7b82a**: Parent/Guardian
  Origin: original 5172

<a id="M08-CAP-CONSENT-1cb80d510d94cc13"></a>
- **M08-CAP-CONSENT-1cb80d510d94cc13**: Psychiatrist
  Origin: original 5172

<a id="M08-CAP-CONSENT-e53c3366eb3368a6"></a>
- **M08-CAP-CONSENT-e53c3366eb3368a6**: Psychologist
  Origin: original 5172

<a id="M08-CAP-CONSENT-84b6b68353fd10e8"></a>
- **M08-CAP-CONSENT-84b6b68353fd10e8**: Pediatrician
  Origin: original 5172

<a id="M08-CAP-CONSENT-f3a113e386d9d25a"></a>
- **M08-CAP-CONSENT-f3a113e386d9d25a**: Emergency Clinician
  Origin: original 5172

<a id="M08-CAP-CONSENT-f41d95925fd0aba4"></a>
- **M08-CAP-CONSENT-f41d95925fd0aba4**: Authorized School Recipient Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-f81734a8599b5d82"></a>
- **M08-CAP-CONSENT-f81734a8599b5d82**: Research Access Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-d9209d12def12ae9"></a>
- **M08-CAP-CONSENT-d9209d12def12ae9**: Audit:
  Origin: original 5172

<a id="M08-CAP-CONSENT-ae5010f2a7155383"></a>
- **M08-CAP-CONSENT-ae5010f2a7155383**: Who Accessed
  Origin: original 5172

<a id="M08-CAP-CONSENT-ffb2e110f4df6f7c"></a>
- **M08-CAP-CONSENT-ffb2e110f4df6f7c**: What Was Accessed
  Origin: original 5172

<a id="M08-CAP-CONSENT-d91303e89557830b"></a>
- **M08-CAP-CONSENT-d91303e89557830b**: Why
  Origin: original 5172

<a id="M08-CAP-CONSENT-70573343d3a9b391"></a>
- **M08-CAP-CONSENT-70573343d3a9b391**: When
  Origin: original 5172

<a id="M08-CAP-CONSENT-937328f3f1b3fb17"></a>
- **M08-CAP-CONSENT-937328f3f1b3fb17**: Disclosure Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-4003e535fb7ff0fa"></a>
- **M08-CAP-CONSENT-4003e535fb7ff0fa**: Override Context
  Origin: original 5172

<a id="M08-CAP-CONSENT-6c6b72c61d95ccd8"></a>
- **M08-CAP-CONSENT-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 5172

<a id="M08-CAP-CONSENT-d925ef49a23e8b89"></a>
- **M08-CAP-CONSENT-d925ef49a23e8b89**: Access is determined at data-element and encounter level where required rather than treating the entire pediatric record as universally visible.
  Origin: original 5172

<a id="M08-CAP-CONSENT-920a1d230724ecf1"></a>
- **M08-CAP-CONSENT-920a1d230724ecf1**: MVP:
  Origin: original 5172

<a id="M08-CAP-CONSENT-3fec9e727a7538e6"></a>
- **M08-CAP-CONSENT-3fec9e727a7538e6**: CRITICAL
  Origin: original 5172

## Preserved source metadata

<a id="M08-CAP-CONSENT-3d01ff384fe32d29"></a>
- **M08-CAP-CONSENT-3d01ff384fe32d29**: # User Consent Table

<a id="M08-CAP-CONSENT-2f5fdcca89ef8e56"></a>
- **M08-CAP-CONSENT-2f5fdcca89ef8e56**: ## Purpose

<a id="M08-CAP-CONSENT-6f33acf3afb37064"></a>
- **M08-CAP-CONSENT-6f33acf3afb37064**: ---

<a id="M08-CAP-CONSENT-90dc9b75b60f53a5"></a>
- **M08-CAP-CONSENT-90dc9b75b60f53a5**: # Fields

<a id="M08-CAP-CONSENT-5754dd8ea427e6f0"></a>
- **M08-CAP-CONSENT-5754dd8ea427e6f0**: status

<a id="M08-CAP-CONSENT-2fac6cbf308c244b"></a>
- **M08-CAP-CONSENT-2fac6cbf308c244b**: # Relationships

<a id="M08-CAP-CONSENT-5ba74d8fcc7b20cc"></a>
- **M08-CAP-CONSENT-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-CONSENT-d5232cbd3a326267"></a>
- **M08-CAP-CONSENT-d5232cbd3a326267**: Documentation

<a id="M08-CAP-CONSENT-6cf3f837c0cda311"></a>
- **M08-CAP-CONSENT-6cf3f837c0cda311**: # Family Access Management

<a id="M08-CAP-CONSENT-008103668f8fbf8a"></a>
- **M08-CAP-CONSENT-008103668f8fbf8a**: # Supported Roles

<a id="M08-CAP-CONSENT-e7a1dcd595ffd025"></a>
- **M08-CAP-CONSENT-e7a1dcd595ffd025**: # Permission Levels

<a id="M08-CAP-CONSENT-d16a9c13e1680192"></a>
- **M08-CAP-CONSENT-d16a9c13e1680192**: # Features

<a id="M08-CAP-CONSENT-21ba1e4f160fe7e0"></a>
- **M08-CAP-CONSENT-21ba1e4f160fe7e0**: # Shared Information

<a id="M08-CAP-CONSENT-efc101e38d418651"></a>
- **M08-CAP-CONSENT-efc101e38d418651**: # Security

<a id="M08-CAP-CONSENT-e42ad98d3990c499"></a>
- **M08-CAP-CONSENT-e42ad98d3990c499**: # Workflow

<a id="M08-CAP-CONSENT-9879a69a15c5a50a"></a>
- **M08-CAP-CONSENT-9879a69a15c5a50a**: # Integrations

<a id="M08-CAP-CONSENT-275a45bd2ce9e3e5"></a>
- **M08-CAP-CONSENT-275a45bd2ce9e3e5**: # Consent Management

<a id="M08-CAP-CONSENT-6510c5c511a879bc"></a>
- **M08-CAP-CONSENT-6510c5c511a879bc**: Purpose:

<a id="M08-CAP-CONSENT-b88b375a44ccd619"></a>
- **M08-CAP-CONSENT-b88b375a44ccd619**: Status:

<a id="M08-CAP-CONSENT-b3604d24a08b400e"></a>
- **M08-CAP-CONSENT-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
