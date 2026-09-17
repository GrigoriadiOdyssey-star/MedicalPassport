# CORE-CAP-AUDIT — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## remaining-audit-service

Audit owns immutable attributed event metadata, timestamp ordering and protected change references. Clinical payloads and credentials stay outside routine logs; append, delivery and clinician review remain separate facts.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## core-audit-history

Audit owns attributed durable security/clinical-action metadata. Preserve raw legacy field requirements as protected redacted-change references rather than putting clinical values, passwords, tokens or request payloads into routine logs. Audit append is separate from clinical authorization and delivery evidence.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 226 / remaining-audit-service: Audit Trail System — Logs are immutable and timestamped.
- Original 83 / core-audit-history: Audit Logging Architecture — Defines the centralized audit logging system for tracking every critical action performed within the Medical Passport ecosystem.

## Requirements and source metadata

<a id="M19-CAP-AUDIT-abe5be1ca8678a6a"></a>
- **M19-CAP-AUDIT-abe5be1ca8678a6a**: # Audit Trail
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-f01a0c3644ebaf7a"></a>
- **M19-CAP-AUDIT-f01a0c3644ebaf7a**: Records
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-d0a1e65776122adf"></a>
- **M19-CAP-AUDIT-d0a1e65776122adf**: Login
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-c1138ccb6788e616"></a>
- **M19-CAP-AUDIT-c1138ccb6788e616**: Record Access
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-d9f698f62d6b30b9"></a>
- **M19-CAP-AUDIT-d9f698f62d6b30b9**: Document Changes
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-1706cb31da4eac6a"></a>
- **M19-CAP-AUDIT-1706cb31da4eac6a**: Prescription Creation
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-f9e54cd5854c5cb1"></a>
- **M19-CAP-AUDIT-f9e54cd5854c5cb1**: Laboratory Imports
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-2f573c840579b95b"></a>
- **M19-CAP-AUDIT-2f573c840579b95b**: QR Access
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-5375619a1aa36655"></a>
- **M19-CAP-AUDIT-5375619a1aa36655**: Logs are immutable and timestamped.
  Applies to original IDs: 226.

<a id="M19-CAP-AUDIT-5ba74d8fcc7b20cc"></a>
- **M19-CAP-AUDIT-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 226, 83.

<a id="M19-CAP-AUDIT-d5232cbd3a326267"></a>
- **M19-CAP-AUDIT-d5232cbd3a326267**: Documentation
  Applies to original IDs: 226, 83.

<a id="M19-CAP-AUDIT-6f33acf3afb37064"></a>
- **M19-CAP-AUDIT-6f33acf3afb37064**: ---
  Applies to original IDs: 226, 83.

<a id="M19-CAP-AUDIT-31e16d1879c4d51e"></a>
- **M19-CAP-AUDIT-31e16d1879c4d51e**: # Audit Logging Architecture
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-2f5fdcca89ef8e56"></a>
- **M19-CAP-AUDIT-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-e0cd400c88aa3a27"></a>
- **M19-CAP-AUDIT-e0cd400c88aa3a27**: Defines the centralized audit logging system for tracking every critical action performed within the Medical Passport ecosystem.
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-b362dcbd9bedc532"></a>
- **M19-CAP-AUDIT-b362dcbd9bedc532**: # Objectives
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-1d14184e0c8488f5"></a>
- **M19-CAP-AUDIT-1d14184e0c8488f5**: Full Traceability
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-500ce0c1f81756d7"></a>
- **M19-CAP-AUDIT-500ce0c1f81756d7**: Security Monitoring
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-b92a3c8a20032394"></a>
- **M19-CAP-AUDIT-b92a3c8a20032394**: Regulatory Compliance
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6ca89f2eeaeb9fcf"></a>
- **M19-CAP-AUDIT-6ca89f2eeaeb9fcf**: Incident Investigation
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-d3c6da22cf092259"></a>
- **M19-CAP-AUDIT-d3c6da22cf092259**: Fraud Detection
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-52980b266d0c9727"></a>
- **M19-CAP-AUDIT-52980b266d0c9727**: # Logged Events
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-e5543a3ed72a8326"></a>
- **M19-CAP-AUDIT-e5543a3ed72a8326**: Authentication
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-9619e0e4c2834076"></a>
- **M19-CAP-AUDIT-9619e0e4c2834076**: Authorization
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-eeb7e48092de56cb"></a>
- **M19-CAP-AUDIT-eeb7e48092de56cb**: Medical Record Access
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6e1457c91f6def34"></a>
- **M19-CAP-AUDIT-6e1457c91f6def34**: QR Generation
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-b038f229059c2ab6"></a>
- **M19-CAP-AUDIT-b038f229059c2ab6**: QR Scan
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-c378902d145a00a9"></a>
- **M19-CAP-AUDIT-c378902d145a00a9**: SOS Activation
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-7b4381deebfea30a"></a>
- **M19-CAP-AUDIT-7b4381deebfea30a**: AI Requests
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-622850112ee98b1f"></a>
- **M19-CAP-AUDIT-622850112ee98b1f**: Document Upload
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-1154220a8b4dafb7"></a>
- **M19-CAP-AUDIT-1154220a8b4dafb7**: Document Download
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-d1c84df18ef1e9a0"></a>
- **M19-CAP-AUDIT-d1c84df18ef1e9a0**: Prescription Access
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-b04e28442ffb0d56"></a>
- **M19-CAP-AUDIT-b04e28442ffb0d56**: Payment Events
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-f34ff823d8be2c83"></a>
- **M19-CAP-AUDIT-f34ff823d8be2c83**: Admin Actions
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-90c4552a947e3f5c"></a>
- **M19-CAP-AUDIT-90c4552a947e3f5c**: System Configuration Changes
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-bd4b8a03eba1b254"></a>
- **M19-CAP-AUDIT-bd4b8a03eba1b254**: # Audit Record Structure
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-f3f7dcb09edfc11a"></a>
- **M19-CAP-AUDIT-f3f7dcb09edfc11a**: Event ID
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-ed49e067f58a156c"></a>
- **M19-CAP-AUDIT-ed49e067f58a156c**: Timestamp
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-efb56fcdce14508d"></a>
- **M19-CAP-AUDIT-efb56fcdce14508d**: User ID
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-328034151866368b"></a>
- **M19-CAP-AUDIT-328034151866368b**: Role
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-94a5072e0a904f75"></a>
- **M19-CAP-AUDIT-94a5072e0a904f75**: Device ID
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-e61da836585e27f9"></a>
- **M19-CAP-AUDIT-e61da836585e27f9**: Session ID
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-4c8638cb0e7e8b0a"></a>
- **M19-CAP-AUDIT-4c8638cb0e7e8b0a**: IP Address
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-580c32d823047de1"></a>
- **M19-CAP-AUDIT-580c32d823047de1**: Country
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-00593a26202845ab"></a>
- **M19-CAP-AUDIT-00593a26202845ab**: Resource
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-0f0b3f3e4cd8dca4"></a>
- **M19-CAP-AUDIT-0f0b3f3e4cd8dca4**: Action
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-277678be0d3c41a1"></a>
- **M19-CAP-AUDIT-277678be0d3c41a1**: Result
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-9f37c80c60242a61"></a>
- **M19-CAP-AUDIT-9f37c80c60242a61**: Risk Score
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-9e7165365c40d5eb"></a>
- **M19-CAP-AUDIT-9e7165365c40d5eb**: # Event Severity
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-c2d61bcd0d7aadb5"></a>
- **M19-CAP-AUDIT-c2d61bcd0d7aadb5**: Info
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-0e967a74cc4a5470"></a>
- **M19-CAP-AUDIT-0e967a74cc4a5470**: Low
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-701189a3549cbf82"></a>
- **M19-CAP-AUDIT-701189a3549cbf82**: Medium
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-94ea3c89698dee4b"></a>
- **M19-CAP-AUDIT-94ea3c89698dee4b**: High
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-0a595e902758820e"></a>
- **M19-CAP-AUDIT-0a595e902758820e**: Critical
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-012a104936daba10"></a>
- **M19-CAP-AUDIT-012a104936daba10**: Emergency
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6d9ed5a7c018cfa7"></a>
- **M19-CAP-AUDIT-6d9ed5a7c018cfa7**: # Storage
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-5801a9feb0d121d7"></a>
- **M19-CAP-AUDIT-5801a9feb0d121d7**: Application
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-60ad5f0e95a3c0f2"></a>
- **M19-CAP-AUDIT-60ad5f0e95a3c0f2**: ↓
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6f42d060cdabde61"></a>
- **M19-CAP-AUDIT-6f42d060cdabde61**: Audit Queue
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-087b38f2fc97f9db"></a>
- **M19-CAP-AUDIT-087b38f2fc97f9db**: Audit Database
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-b223d2e27f921441"></a>
- **M19-CAP-AUDIT-b223d2e27f921441**: Long-term Archive
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-8972ad6f867c588e"></a>
- **M19-CAP-AUDIT-8972ad6f867c588e**: Analytics
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-fe9519c9fe62691a"></a>
- **M19-CAP-AUDIT-fe9519c9fe62691a**: SIEM
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-4586f5befe764dbb"></a>
- **M19-CAP-AUDIT-4586f5befe764dbb**: # Retention Policy
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-10cfe20136f269ae"></a>
- **M19-CAP-AUDIT-10cfe20136f269ae**: Operational Logs
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-656cea3ee08b256a"></a>
- **M19-CAP-AUDIT-656cea3ee08b256a**: 90 Days
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-d20a95b6b63719a7"></a>
- **M19-CAP-AUDIT-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-28c24139a62dc1c4"></a>
- **M19-CAP-AUDIT-28c24139a62dc1c4**: 7 Years
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-2a384baee9248163"></a>
- **M19-CAP-AUDIT-2a384baee9248163**: Security Events
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-cb6615b4c7511f90"></a>
- **M19-CAP-AUDIT-cb6615b4c7511f90**: 10 Years
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-ee5fb501938646c1"></a>
- **M19-CAP-AUDIT-ee5fb501938646c1**: Critical Incidents
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-8fed700c9e354621"></a>
- **M19-CAP-AUDIT-8fed700c9e354621**: Permanent Archive
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-49f07d5bccf60fe5"></a>
- **M19-CAP-AUDIT-49f07d5bccf60fe5**: # Monitoring
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-dd32f9a27f0c7ed3"></a>
- **M19-CAP-AUDIT-dd32f9a27f0c7ed3**: Failed Logins
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-227050dc7eefdfc7"></a>
- **M19-CAP-AUDIT-227050dc7eefdfc7**: Permission Violations
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6219cbd719f156aa"></a>
- **M19-CAP-AUDIT-6219cbd719f156aa**: Suspicious QR Access
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-6ba4204dad008c42"></a>
- **M19-CAP-AUDIT-6ba4204dad008c42**: Unusual Device Activity
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-daf7f8d0883846bd"></a>
- **M19-CAP-AUDIT-daf7f8d0883846bd**: Data Export Events
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-23243de0d180273c"></a>
- **M19-CAP-AUDIT-23243de0d180273c**: Administrator Actions
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-efc101e38d418651"></a>
- **M19-CAP-AUDIT-efc101e38d418651**: # Security
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-5b46f79e4cf41b27"></a>
- **M19-CAP-AUDIT-5b46f79e4cf41b27**: Immutable Logs
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-cc650a7907363ad2"></a>
- **M19-CAP-AUDIT-cc650a7907363ad2**: AES-256 Encryption
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-ab22d6c1d7c38b52"></a>
- **M19-CAP-AUDIT-ab22d6c1d7c38b52**: Digital Signatures
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-2d98f06e64686172"></a>
- **M19-CAP-AUDIT-2d98f06e64686172**: Time Synchronization
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-06b8175bdcf64d00"></a>
- **M19-CAP-AUDIT-06b8175bdcf64d00**: Tamper Detection
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-fe7a7c5c9542680c"></a>
- **M19-CAP-AUDIT-fe7a7c5c9542680c**: # Compliance
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-dbd1329f16de55fa"></a>
- **M19-CAP-AUDIT-dbd1329f16de55fa**: GDPR
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-c71fe81b3339854c"></a>
- **M19-CAP-AUDIT-c71fe81b3339854c**: HIPAA
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-ebc02dc8c76cbc1e"></a>
- **M19-CAP-AUDIT-ebc02dc8c76cbc1e**: ISO 27001
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-930269163a40dfb0"></a>
- **M19-CAP-AUDIT-930269163a40dfb0**: ISO 27799
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-32100306e6373bd7"></a>
- **M19-CAP-AUDIT-32100306e6373bd7**: SOC 2
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-5343e452ee0ea0c2"></a>
- **M19-CAP-AUDIT-5343e452ee0ea0c2**: eIDAS
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-9879a69a15c5a50a"></a>
- **M19-CAP-AUDIT-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-f4cf69f73e2d6134"></a>
- **M19-CAP-AUDIT-f4cf69f73e2d6134**: ├── Authentication
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-2fe5d7670c4dbd3a"></a>
- **M19-CAP-AUDIT-2fe5d7670c4dbd3a**: ├── IAM
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-efa2a8ae50719ab3"></a>
- **M19-CAP-AUDIT-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-93522f774f6d0bd5"></a>
- **M19-CAP-AUDIT-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-93878a6ec6a84276"></a>
- **M19-CAP-AUDIT-93878a6ec6a84276**: ├── Payments
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-fb47ac4f47f989bd"></a>
- **M19-CAP-AUDIT-fb47ac4f47f989bd**: ├── Administration
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-61bb6805419a5121"></a>
- **M19-CAP-AUDIT-61bb6805419a5121**: ├── Analytics
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-d1d32be995537ed8"></a>
- **M19-CAP-AUDIT-d1d32be995537ed8**: ├── SIEM
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-37bfdffca1a32095"></a>
- **M19-CAP-AUDIT-37bfdffca1a32095**: Future Features
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-dc29052ce83b5fce"></a>
- **M19-CAP-AUDIT-dc29052ce83b5fce**: Blockchain Audit Trail
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-52f689ff0c18e523"></a>
- **M19-CAP-AUDIT-52f689ff0c18e523**: AI Anomaly Detection
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-01dc13b1195cd465"></a>
- **M19-CAP-AUDIT-01dc13b1195cd465**: Real-time Security Dashboard
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-5354ec35fa09a0a1"></a>
- **M19-CAP-AUDIT-5354ec35fa09a0a1**: Automated Compliance Reports
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-5abe0c90adb047d5"></a>
- **M19-CAP-AUDIT-5abe0c90adb047d5**: Cross-system Audit Federation
  Applies to original IDs: 83.

<a id="M19-CAP-AUDIT-60cd917b4edbb1e4"></a>
- **M19-CAP-AUDIT-60cd917b4edbb1e4**: Forensic Investigation Tools
  Applies to original IDs: 83.
