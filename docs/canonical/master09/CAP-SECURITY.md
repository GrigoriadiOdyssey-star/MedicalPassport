# CORE-CAP-SECURITY — MASTER-09 shared specification

Security architecture, per-request zero-trust enforcement and monitoring form one existing shared security owner. Identity supplies authenticated subject/session; Consent supplies policy/grant and legal-authority evidence; Security enforces action/resource/context and Audit records outcomes. Authentication alone never authorizes patient data. Legacy ABAC marked future cannot defer patient/purpose/recipient checks required by the current MVP. Preserve mobile/server/API/encryption/monitoring and future HSM/confidential/quantum-resistant intentions without claiming certification or implementation.

Existing architectural owner now has a source-backed specification; this is not a new gap capability.

## Workflow and boundaries

Authenticate trusted context via identity → resolve current role, patient binding, resource/version, purpose and grant/policy → enforce default-deny → acquire durable audit acknowledgement → release only authorized projection. Reject missing/stale/ambiguous attributes and dependency failures; monitoring anomalies require qualified review rather than automatic clinical access escalation.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: AuthorizationRequest, PolicyReference, Decision, EnforcementReceipt, SecurityAlert, IncidentReference. Dependencies: CAP-IDENTITY, CAP-CONSENT, CAP-AUDIT, CAP-DATA.

## New source fragments

<a id="M09-CAP-SECURITY-629b16ac9350b892"></a>
- **M09-CAP-SECURITY-629b16ac9350b892**: Defines the complete cybersecurity architecture of the Medical Passport platform.
  Original IDs: 81

<a id="M09-CAP-SECURITY-7efdfe952679b5c0"></a>
- **M09-CAP-SECURITY-7efdfe952679b5c0**: Zero Trust
  Original IDs: 81

<a id="M09-CAP-SECURITY-243d98090bcfe43c"></a>
- **M09-CAP-SECURITY-243d98090bcfe43c**: Least Privilege
  Original IDs: 81

<a id="M09-CAP-SECURITY-efab02dcd64d47d9"></a>
- **M09-CAP-SECURITY-efab02dcd64d47d9**: Defense in Depth
  Original IDs: 81

<a id="M09-CAP-SECURITY-858c42e17497dec9"></a>
- **M09-CAP-SECURITY-858c42e17497dec9**: Secure by Design
  Original IDs: 81

<a id="M09-CAP-SECURITY-2a76091a7d264e09"></a>
- **M09-CAP-SECURITY-2a76091a7d264e09**: Privacy by Design
  Original IDs: 81

<a id="M09-CAP-SECURITY-dcbab808a3e06a8e"></a>
- **M09-CAP-SECURITY-dcbab808a3e06a8e**: JWT
  Original IDs: 81

<a id="M09-CAP-SECURITY-94cfbae96bac6045"></a>
- **M09-CAP-SECURITY-94cfbae96bac6045**: Refresh Tokens
  Original IDs: 81

<a id="M09-CAP-SECURITY-1fcd23c11cd2a403"></a>
- **M09-CAP-SECURITY-1fcd23c11cd2a403**: OAuth2
  Original IDs: 81

<a id="M09-CAP-SECURITY-dadb9905ad0f4460"></a>
- **M09-CAP-SECURITY-dadb9905ad0f4460**: OpenID Connect
  Original IDs: 81

<a id="M09-CAP-SECURITY-0df8448d109fc80b"></a>
- **M09-CAP-SECURITY-0df8448d109fc80b**: Passkeys (Future)
  Original IDs: 81

<a id="M09-CAP-SECURITY-228708623b4a91cc"></a>
- **M09-CAP-SECURITY-228708623b4a91cc**: Face ID
  Original IDs: 81

<a id="M09-CAP-SECURITY-8544798a5cd544fe"></a>
- **M09-CAP-SECURITY-8544798a5cd544fe**: Touch ID
  Original IDs: 81

<a id="M09-CAP-SECURITY-c48f0e7bb6f278e1"></a>
- **M09-CAP-SECURITY-c48f0e7bb6f278e1**: RBAC
  Original IDs: 81

<a id="M09-CAP-SECURITY-39d49b3394926d89"></a>
- **M09-CAP-SECURITY-39d49b3394926d89**: ABAC (Future)
  Original IDs: 81

<a id="M09-CAP-SECURITY-ac8e894989f78b0d"></a>
- **M09-CAP-SECURITY-ac8e894989f78b0d**: Role Validation
  Original IDs: 81

<a id="M09-CAP-SECURITY-92136b5e00fbfa03"></a>
- **M09-CAP-SECURITY-92136b5e00fbfa03**: Permission Policies
  Original IDs: 81

<a id="M09-CAP-SECURITY-1d08a19784da168d"></a>
- **M09-CAP-SECURITY-1d08a19784da168d**: Session Validation
  Original IDs: 81

<a id="M09-CAP-SECURITY-cc446c4677c82bba"></a>
- **M09-CAP-SECURITY-cc446c4677c82bba**: Data at Rest
  Original IDs: 81

<a id="M09-CAP-SECURITY-efa55b16ffd6b66c"></a>
- **M09-CAP-SECURITY-efa55b16ffd6b66c**: AES-256
  Original IDs: 81

<a id="M09-CAP-SECURITY-bfd14a2628c4561e"></a>
- **M09-CAP-SECURITY-bfd14a2628c4561e**: Data in Transit
  Original IDs: 81

<a id="M09-CAP-SECURITY-44effbba6a37147d"></a>
- **M09-CAP-SECURITY-44effbba6a37147d**: TLS 1.3
  Original IDs: 81

<a id="M09-CAP-SECURITY-9b20e418dec1b014"></a>
- **M09-CAP-SECURITY-9b20e418dec1b014**: Passwords
  Original IDs: 81

<a id="M09-CAP-SECURITY-b2ddb9bc7f9d0b9f"></a>
- **M09-CAP-SECURITY-b2ddb9bc7f9d0b9f**: Argon2id
  Original IDs: 81

<a id="M09-CAP-SECURITY-b2939543db0cba65"></a>
- **M09-CAP-SECURITY-b2939543db0cba65**: File Encryption
  Original IDs: 81

<a id="M09-CAP-SECURITY-a37d696435bd65eb"></a>
- **M09-CAP-SECURITY-a37d696435bd65eb**: Database Encryption
  Original IDs: 81

<a id="M09-CAP-SECURITY-4dd0471d118c033f"></a>
- **M09-CAP-SECURITY-4dd0471d118c033f**: Transparent Data Encryption
  Original IDs: 81

<a id="M09-CAP-SECURITY-50c9278cdc7a856e"></a>
- **M09-CAP-SECURITY-50c9278cdc7a856e**: Rate Limiting
  Original IDs: 81

<a id="M09-CAP-SECURITY-19086e6ec05cad80"></a>
- **M09-CAP-SECURITY-19086e6ec05cad80**: API Gateway
  Original IDs: 81

<a id="M09-CAP-SECURITY-0516a3459a0d42ec"></a>
- **M09-CAP-SECURITY-0516a3459a0d42ec**: WAF
  Original IDs: 81

<a id="M09-CAP-SECURITY-53ea403916caa27a"></a>
- **M09-CAP-SECURITY-53ea403916caa27a**: IP Filtering
  Original IDs: 81

<a id="M09-CAP-SECURITY-21d5a6006369762a"></a>
- **M09-CAP-SECURITY-21d5a6006369762a**: Request Validation
  Original IDs: 81

<a id="M09-CAP-SECURITY-6a60a2356ae80df4"></a>
- **M09-CAP-SECURITY-6a60a2356ae80df4**: Response Validation
  Original IDs: 81

<a id="M09-CAP-SECURITY-12f2676c6afe85d6"></a>
- **M09-CAP-SECURITY-12f2676c6afe85d6**: Certificate Pinning
  Original IDs: 81

<a id="M09-CAP-SECURITY-36ef60cb4284cb6d"></a>
- **M09-CAP-SECURITY-36ef60cb4284cb6d**: Jailbreak Detection
  Original IDs: 81

<a id="M09-CAP-SECURITY-2eedc06a12f7090d"></a>
- **M09-CAP-SECURITY-2eedc06a12f7090d**: Root Detection
  Original IDs: 81

<a id="M09-CAP-SECURITY-c7ec7ad4a608a77a"></a>
- **M09-CAP-SECURITY-c7ec7ad4a608a77a**: Secure Storage
  Original IDs: 81

<a id="M09-CAP-SECURITY-ea7d7213eb5237e7"></a>
- **M09-CAP-SECURITY-ea7d7213eb5237e7**: Anti-Tampering
  Original IDs: 81

<a id="M09-CAP-SECURITY-0d203d109ac49707"></a>
- **M09-CAP-SECURITY-0d203d109ac49707**: Debug Protection
  Original IDs: 81

<a id="M09-CAP-SECURITY-1edf7e9ad779a4aa"></a>
- **M09-CAP-SECURITY-1edf7e9ad779a4aa**: Reverse Proxy
  Original IDs: 81

<a id="M09-CAP-SECURITY-2d5a0b36b9cb8fb2"></a>
- **M09-CAP-SECURITY-2d5a0b36b9cb8fb2**: Firewall
  Original IDs: 81

<a id="M09-CAP-SECURITY-dd62fadb3409bd03"></a>
- **M09-CAP-SECURITY-dd62fadb3409bd03**: IDS
  Original IDs: 81

<a id="M09-CAP-SECURITY-88ef688342a5cfec"></a>
- **M09-CAP-SECURITY-88ef688342a5cfec**: IPS
  Original IDs: 81

<a id="M09-CAP-SECURITY-bb4d650f117f4ad7"></a>
- **M09-CAP-SECURITY-bb4d650f117f4ad7**: Container Isolation
  Original IDs: 81

<a id="M09-CAP-SECURITY-b750bbe18dadbefd"></a>
- **M09-CAP-SECURITY-b750bbe18dadbefd**: Secrets Management
  Original IDs: 81

<a id="M09-CAP-SECURITY-d20a95b6b63719a7"></a>
- **M09-CAP-SECURITY-d20a95b6b63719a7**: Audit Logs
  Original IDs: 81

<a id="M09-CAP-SECURITY-fe9519c9fe62691a"></a>
- **M09-CAP-SECURITY-fe9519c9fe62691a**: SIEM
  Original IDs: 81

<a id="M09-CAP-SECURITY-24b48d5ee466adb2"></a>
- **M09-CAP-SECURITY-24b48d5ee466adb2**: Threat Detection
  Original IDs: 81

<a id="M09-CAP-SECURITY-d5d8df29510477b4"></a>
- **M09-CAP-SECURITY-d5d8df29510477b4**: Intrusion Detection
  Original IDs: 81

<a id="M09-CAP-SECURITY-88ea21d275ee6dbb"></a>
- **M09-CAP-SECURITY-88ea21d275ee6dbb**: Security Alerts
  Original IDs: 81

<a id="M09-CAP-SECURITY-f2ae6a91b86879ea"></a>
- **M09-CAP-SECURITY-f2ae6a91b86879ea**: Incident Tracking
  Original IDs: 81

<a id="M09-CAP-SECURITY-dbd1329f16de55fa"></a>
- **M09-CAP-SECURITY-dbd1329f16de55fa**: GDPR
  Original IDs: 81

<a id="M09-CAP-SECURITY-c71fe81b3339854c"></a>
- **M09-CAP-SECURITY-c71fe81b3339854c**: HIPAA
  Original IDs: 81

<a id="M09-CAP-SECURITY-ebc02dc8c76cbc1e"></a>
- **M09-CAP-SECURITY-ebc02dc8c76cbc1e**: ISO 27001
  Original IDs: 81

<a id="M09-CAP-SECURITY-930269163a40dfb0"></a>
- **M09-CAP-SECURITY-930269163a40dfb0**: ISO 27799
  Original IDs: 81

<a id="M09-CAP-SECURITY-5343e452ee0ea0c2"></a>
- **M09-CAP-SECURITY-5343e452ee0ea0c2**: eIDAS
  Original IDs: 81

<a id="M09-CAP-SECURITY-aec6f70baa78f943"></a>
- **M09-CAP-SECURITY-aec6f70baa78f943**: OWASP ASVS
  Original IDs: 81

<a id="M09-CAP-SECURITY-9de6811d9a459189"></a>
- **M09-CAP-SECURITY-9de6811d9a459189**: OWASP Mobile Top 10
  Original IDs: 81

<a id="M09-CAP-SECURITY-f4cf69f73e2d6134"></a>
- **M09-CAP-SECURITY-f4cf69f73e2d6134**: ├── Authentication
  Original IDs: 81

<a id="M09-CAP-SECURITY-c3ea13f8dde404df"></a>
- **M09-CAP-SECURITY-c3ea13f8dde404df**: ├── API Gateway
  Original IDs: 81

<a id="M09-CAP-SECURITY-58bdc43bd4f43ec3"></a>
- **M09-CAP-SECURITY-58bdc43bd4f43ec3**: ├── Database
  Original IDs: 81

<a id="M09-CAP-SECURITY-37da9cd61593c7cd"></a>
- **M09-CAP-SECURITY-37da9cd61593c7cd**: ├── AI
  Original IDs: 81

<a id="M09-CAP-SECURITY-efa2a8ae50719ab3"></a>
- **M09-CAP-SECURITY-efa2a8ae50719ab3**: ├── QR Passport
  Original IDs: 81

<a id="M09-CAP-SECURITY-a7f2ddd3ac9459b5"></a>
- **M09-CAP-SECURITY-a7f2ddd3ac9459b5**: ├── Telemedicine
  Original IDs: 81

<a id="M09-CAP-SECURITY-fb47ac4f47f989bd"></a>
- **M09-CAP-SECURITY-fb47ac4f47f989bd**: ├── Administration
  Original IDs: 81

<a id="M09-CAP-SECURITY-48a0e7b8fcbc590c"></a>
- **M09-CAP-SECURITY-48a0e7b8fcbc590c**: ├── Audit Logs
  Original IDs: 81

<a id="M09-CAP-SECURITY-37bfdffca1a32095"></a>
- **M09-CAP-SECURITY-37bfdffca1a32095**: Future Features
  Original IDs: 81

<a id="M09-CAP-SECURITY-055c2f5807580744"></a>
- **M09-CAP-SECURITY-055c2f5807580744**: Hardware Security Module (HSM)
  Original IDs: 81

<a id="M09-CAP-SECURITY-fb2f2827c2730391"></a>
- **M09-CAP-SECURITY-fb2f2827c2730391**: Confidential Computing
  Original IDs: 81

<a id="M09-CAP-SECURITY-b0a8e8e123f08000"></a>
- **M09-CAP-SECURITY-b0a8e8e123f08000**: AI Threat Detection
  Original IDs: 81

<a id="M09-CAP-SECURITY-a038f352e2ab0fe4"></a>
- **M09-CAP-SECURITY-a038f352e2ab0fe4**: Behavioral Authentication
  Original IDs: 81

<a id="M09-CAP-SECURITY-715d744563d3d18c"></a>
- **M09-CAP-SECURITY-715d744563d3d18c**: Continuous Risk Assessment
  Original IDs: 81

<a id="M09-CAP-SECURITY-f1ab44b959085525"></a>
- **M09-CAP-SECURITY-f1ab44b959085525**: Quantum-resistant Cryptography
  Original IDs: 81

<a id="M09-CAP-SECURITY-a0c6ef43bca5ead1"></a>
- **M09-CAP-SECURITY-a0c6ef43bca5ead1**: Never trust.
  Original IDs: 221

<a id="M09-CAP-SECURITY-d21403bbd1b7c05c"></a>
- **M09-CAP-SECURITY-d21403bbd1b7c05c**: Always verify.
  Original IDs: 221

<a id="M09-CAP-SECURITY-43db0b6fdafc77fd"></a>
- **M09-CAP-SECURITY-43db0b6fdafc77fd**: Every request is verified regardless of origin.
  Original IDs: 221

<a id="M09-CAP-SECURITY-c2e88dc8de4d0e09"></a>
- **M09-CAP-SECURITY-c2e88dc8de4d0e09**: Authentication required for
  Original IDs: 221

<a id="M09-CAP-SECURITY-4b7405cdbb65ac47"></a>
- **M09-CAP-SECURITY-4b7405cdbb65ac47**: Users
  Original IDs: 221

<a id="M09-CAP-SECURITY-2a7be9b76da4a339"></a>
- **M09-CAP-SECURITY-2a7be9b76da4a339**: Doctors
  Original IDs: 221

<a id="M09-CAP-SECURITY-b6e8bd9e5e799cd8"></a>
- **M09-CAP-SECURITY-b6e8bd9e5e799cd8**: Hospitals
  Original IDs: 221

<a id="M09-CAP-SECURITY-e5649b86c07b7df1"></a>
- **M09-CAP-SECURITY-e5649b86c07b7df1**: Laboratories
  Original IDs: 221

<a id="M09-CAP-SECURITY-1d745269dabac525"></a>
- **M09-CAP-SECURITY-1d745269dabac525**: Pharmacies
  Original IDs: 221

<a id="M09-CAP-SECURITY-8b6673a8566e3112"></a>
- **M09-CAP-SECURITY-8b6673a8566e3112**: APIs
  Original IDs: 221

<a id="M09-CAP-SECURITY-4c73978c58a28078"></a>
- **M09-CAP-SECURITY-4c73978c58a28078**: Detects
  Original IDs: 229

<a id="M09-CAP-SECURITY-c5b16ab99f898d09"></a>
- **M09-CAP-SECURITY-c5b16ab99f898d09**: Unauthorized Access
  Original IDs: 229

<a id="M09-CAP-SECURITY-203048eff978d44d"></a>
- **M09-CAP-SECURITY-203048eff978d44d**: Suspicious Activity
  Original IDs: 229

<a id="M09-CAP-SECURITY-c36b4c4137bd941f"></a>
- **M09-CAP-SECURITY-c36b4c4137bd941f**: API Abuse
  Original IDs: 229

<a id="M09-CAP-SECURITY-ac22cfcec1898c09"></a>
- **M09-CAP-SECURITY-ac22cfcec1898c09**: Brute Force Attempts
  Original IDs: 229

<a id="M09-CAP-SECURITY-63ee838132573d7f"></a>
- **M09-CAP-SECURITY-63ee838132573d7f**: Data Exfiltration
  Original IDs: 229

<a id="M09-CAP-SECURITY-e0fcf4135335ba2e"></a>
- **M09-CAP-SECURITY-e0fcf4135335ba2e**: AI assists security operations by highlighting anomalies for review.
  Original IDs: 229

<a id="M09-CAP-SECURITY-188b4fd37b0739fd"></a>
- **M09-CAP-SECURITY-188b4fd37b0739fd**: # Security Architecture
  Original IDs: 81

<a id="M09-CAP-SECURITY-2f5fdcca89ef8e56"></a>
- **M09-CAP-SECURITY-2f5fdcca89ef8e56**: ## Purpose
  Original IDs: 81

<a id="M09-CAP-SECURITY-6f33acf3afb37064"></a>
- **M09-CAP-SECURITY-6f33acf3afb37064**: ---
  Original IDs: 81, 221, 229

<a id="M09-CAP-SECURITY-f05c7011a6ae4b0d"></a>
- **M09-CAP-SECURITY-f05c7011a6ae4b0d**: # Security Principles
  Original IDs: 81

<a id="M09-CAP-SECURITY-c5f78d13092e39b7"></a>
- **M09-CAP-SECURITY-c5f78d13092e39b7**: # Authentication
  Original IDs: 81

<a id="M09-CAP-SECURITY-058fdd3c32bde582"></a>
- **M09-CAP-SECURITY-058fdd3c32bde582**: # Authorization
  Original IDs: 81

<a id="M09-CAP-SECURITY-583d22c7fdd893f1"></a>
- **M09-CAP-SECURITY-583d22c7fdd893f1**: # Encryption
  Original IDs: 81

<a id="M09-CAP-SECURITY-2d4f62385ca954c9"></a>
- **M09-CAP-SECURITY-2d4f62385ca954c9**: # API Protection
  Original IDs: 81

<a id="M09-CAP-SECURITY-52038c10ad7499ec"></a>
- **M09-CAP-SECURITY-52038c10ad7499ec**: # Mobile Security
  Original IDs: 81

<a id="M09-CAP-SECURITY-dc147eae5bc8ff62"></a>
- **M09-CAP-SECURITY-dc147eae5bc8ff62**: # Server Security
  Original IDs: 81

<a id="M09-CAP-SECURITY-49f07d5bccf60fe5"></a>
- **M09-CAP-SECURITY-49f07d5bccf60fe5**: # Monitoring
  Original IDs: 81

<a id="M09-CAP-SECURITY-fe7a7c5c9542680c"></a>
- **M09-CAP-SECURITY-fe7a7c5c9542680c**: # Compliance
  Original IDs: 81

<a id="M09-CAP-SECURITY-9879a69a15c5a50a"></a>
- **M09-CAP-SECURITY-9879a69a15c5a50a**: # Integrations
  Original IDs: 81

<a id="M09-CAP-SECURITY-5ba74d8fcc7b20cc"></a>
- **M09-CAP-SECURITY-5ba74d8fcc7b20cc**: Status
  Original IDs: 81, 221, 229

<a id="M09-CAP-SECURITY-d5232cbd3a326267"></a>
- **M09-CAP-SECURITY-d5232cbd3a326267**: Documentation
  Original IDs: 81, 221, 229

<a id="M09-CAP-SECURITY-fd81916b25b51037"></a>
- **M09-CAP-SECURITY-fd81916b25b51037**: # Zero Trust Architecture
  Original IDs: 221

<a id="M09-CAP-SECURITY-ef30bda2b3afa0f1"></a>
- **M09-CAP-SECURITY-ef30bda2b3afa0f1**: ## Principle
  Original IDs: 221

<a id="M09-CAP-SECURITY-96061e0445d3e9c7"></a>
- **M09-CAP-SECURITY-96061e0445d3e9c7**: # Security Monitoring
  Original IDs: 229

[Delta migration](../../../audit/master-09/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
