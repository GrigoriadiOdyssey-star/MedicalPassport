# CORE-CAP-INTEROP — MASTER-11 addendum

Generic and pediatric renal international exchange share transport/mapping ownership despite legacy AI titles. Preserve consent/purpose, patient matching, standardized records, imaging/labs/pathology, medication/dialysis/transplant context, source freshness, translation and receiver handover. Translation is an attributed derivative; cross-border transfer requires actual partner/jurisdiction contracts and cannot expand emergency access or overwrite source facts.

Extends [unchanged MASTER-08 specification](../master08/CAP-INTEROP.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-INTEROP, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-INTEROP-45463610c3132082"></a>
- **M11-CAP-INTEROP-45463610c3132082**: Secure exchange of medical records between healthcare organizations in different countries.
  Original IDs: 220

<a id="M11-CAP-INTEROP-d647e421c6bb1759"></a>
- **M11-CAP-INTEROP-d647e421c6bb1759**: Patient Consent
  Original IDs: 220

<a id="M11-CAP-INTEROP-61bbd33ddaa601ae"></a>
- **M11-CAP-INTEROP-61bbd33ddaa601ae**: Secure Transfer
  Original IDs: 220

<a id="M11-CAP-INTEROP-79b63a83bc7d1c15"></a>
- **M11-CAP-INTEROP-79b63a83bc7d1c15**: Audit Trail
  Original IDs: 220

<a id="M11-CAP-INTEROP-1343c879f2e1abb9"></a>
- **M11-CAP-INTEROP-1343c879f2e1abb9**: Standardized Formats
  Original IDs: 220

<a id="M11-CAP-INTEROP-752fb8ffe49d0cb5"></a>
- **M11-CAP-INTEROP-752fb8ffe49d0cb5**: Encrypted Communication
  Original IDs: 220

<a id="M11-CAP-INTEROP-29a159ee03f03fa9"></a>
- **M11-CAP-INTEROP-29a159ee03f03fa9**: Automatic Translation
  Original IDs: 220

<a id="M11-CAP-INTEROP-0a03b16243e18f75"></a>
- **M11-CAP-INTEROP-0a03b16243e18f75**: Designed for international continuity of care.
  Original IDs: 220

<a id="M11-CAP-INTEROP-b3f03c12a6339d79"></a>
- **M11-CAP-INTEROP-b3f03c12a6339d79**: Secure international exchange of medical information.
  Original IDs: 1344

<a id="M11-CAP-INTEROP-8b5e9b658e594e39"></a>
- **M11-CAP-INTEROP-8b5e9b658e594e39**: Cross-border Care
  Original IDs: 1344

<a id="M11-CAP-INTEROP-53fdcd3a56f144a6"></a>
- **M11-CAP-INTEROP-53fdcd3a56f144a6**: Emergency Access
  Original IDs: 1344

<a id="M11-CAP-INTEROP-ef959e75f54d644f"></a>
- **M11-CAP-INTEROP-ef959e75f54d644f**: Consent Management
  Original IDs: 1344

<a id="M11-CAP-INTEROP-22d495f0e6fdb9c1"></a>
- **M11-CAP-INTEROP-22d495f0e6fdb9c1**: Standardized Medical Records
  Original IDs: 1344

<a id="M11-CAP-INTEROP-a933fc91e05c9915"></a>
- **M11-CAP-INTEROP-a933fc91e05c9915**: Facilitates secure international medical information exchange.
  Original IDs: 1886

<a id="M11-CAP-INTEROP-ad24d679b96d8e76"></a>
- **M11-CAP-INTEROP-ad24d679b96d8e76**: Patient Records
  Original IDs: 1886

<a id="M11-CAP-INTEROP-a3241cf77d991407"></a>
- **M11-CAP-INTEROP-a3241cf77d991407**: Imaging
  Original IDs: 1886

<a id="M11-CAP-INTEROP-71f790fdf94f9c10"></a>
- **M11-CAP-INTEROP-71f790fdf94f9c10**: Laboratory Results
  Original IDs: 1886

<a id="M11-CAP-INTEROP-2c53c579b5dce8a4"></a>
- **M11-CAP-INTEROP-2c53c579b5dce8a4**: Enable standardized exchange of pediatric renal information between authorized healthcare systems and jurisdictions.
  Original IDs: 4595

<a id="M11-CAP-INTEROP-da4c27358837e4f4"></a>
- **M11-CAP-INTEROP-da4c27358837e4f4**: Structured Clinical Data Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-970207590822e4c7"></a>
- **M11-CAP-INTEROP-970207590822e4c7**: Laboratory Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-72c4963a3527e612"></a>
- **M11-CAP-INTEROP-72c4963a3527e612**: Medication Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-4877dba1ee49a34e"></a>
- **M11-CAP-INTEROP-4877dba1ee49a34e**: Imaging Metadata Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-924b969f2da4d823"></a>
- **M11-CAP-INTEROP-924b969f2da4d823**: Pathology Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-d647260c08f34ac5"></a>
- **M11-CAP-INTEROP-d647260c08f34ac5**: Dialysis Data Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-5e0a3ba56f520b60"></a>
- **M11-CAP-INTEROP-5e0a3ba56f520b60**: Transplant Data Exchange
  Original IDs: 4595

<a id="M11-CAP-INTEROP-2c4d8f5fb8f88936"></a>
- **M11-CAP-INTEROP-2c4d8f5fb8f88936**: Medical Passport Synchronization
  Original IDs: 4595

<a id="M11-CAP-INTEROP-232e0f1f44bd4ffc"></a>
- **M11-CAP-INTEROP-232e0f1f44bd4ffc**: Patient Identity Matching
  Original IDs: 4595

<a id="M11-CAP-INTEROP-bde26ea3090fc16e"></a>
- **M11-CAP-INTEROP-bde26ea3090fc16e**: Consent Verification
  Original IDs: 4595

<a id="M11-CAP-INTEROP-a7dc95c85b62a87a"></a>
- **M11-CAP-INTEROP-a7dc95c85b62a87a**: Data Provenance
  Original IDs: 4595

<a id="M11-CAP-INTEROP-ef5c8e2984654801"></a>
- **M11-CAP-INTEROP-ef5c8e2984654801**: Translation Support
  Original IDs: 4595

<a id="M11-CAP-INTEROP-db2775aafe1277e5"></a>
- **M11-CAP-INTEROP-db2775aafe1277e5**: Terminology Mapping
  Original IDs: 4595

<a id="M11-CAP-INTEROP-9bb33c6cd38082d8"></a>
- **M11-CAP-INTEROP-9bb33c6cd38082d8**: Audit Logging
  Original IDs: 4595

<a id="M11-CAP-INTEROP-77fb8ef2bf85b427"></a>
- **M11-CAP-INTEROP-77fb8ef2bf85b427**: Interoperability:
  Original IDs: 4595

<a id="M11-CAP-INTEROP-8530b440fb173726"></a>
- **M11-CAP-INTEROP-8530b440fb173726**: Designed to support standards-based healthcare interoperability and jurisdiction-specific implementation profiles.
  Original IDs: 4595

<a id="M11-CAP-INTEROP-248e55b099715870"></a>
- **M11-CAP-INTEROP-248e55b099715870**: Cross-Border Functions:
  Original IDs: 4595

<a id="M11-CAP-INTEROP-3875d574f1dbc00f"></a>
- **M11-CAP-INTEROP-3875d574f1dbc00f**: Multilingual Clinical Summary
  Original IDs: 4595

<a id="M11-CAP-INTEROP-6fdeb1db8a50b876"></a>
- **M11-CAP-INTEROP-6fdeb1db8a50b876**: Emergency Renal Dataset
  Original IDs: 4595

<a id="M11-CAP-INTEROP-603d4c41e2566835"></a>
- **M11-CAP-INTEROP-603d4c41e2566835**: Receiving-provider Handover
  Original IDs: 4595

<a id="M11-CAP-INTEROP-c225be7e018f69d0"></a>
- **M11-CAP-INTEROP-c225be7e018f69d0**: Source Verification
  Original IDs: 4595

<a id="M11-CAP-INTEROP-9f23d657b7b7ed98"></a>
- **M11-CAP-INTEROP-9f23d657b7b7ed98**: Data Freshness Indicators
  Original IDs: 4595

<a id="M11-CAP-INTEROP-35dcf006dc82711b"></a>
- **M11-CAP-INTEROP-35dcf006dc82711b**: Security:
  Original IDs: 4595

<a id="M11-CAP-INTEROP-8deb81f02b2bfc0e"></a>
- **M11-CAP-INTEROP-8deb81f02b2bfc0e**: Role-based Access
  Original IDs: 4595

<a id="M11-CAP-INTEROP-0ea56e0119c3111c"></a>
- **M11-CAP-INTEROP-0ea56e0119c3111c**: Purpose-based Access
  Original IDs: 4595

<a id="M11-CAP-INTEROP-5c29170953f7e94c"></a>
- **M11-CAP-INTEROP-5c29170953f7e94c**: Encryption
  Original IDs: 4595

<a id="M11-CAP-INTEROP-3f51afab3a09b8f9"></a>
- **M11-CAP-INTEROP-3f51afab3a09b8f9**: Auditability
  Original IDs: 4595

<a id="M11-CAP-INTEROP-e6d53bd74634df6d"></a>
- **M11-CAP-INTEROP-e6d53bd74634df6d**: Consent Enforcement
  Original IDs: 4595

<a id="M11-CAP-INTEROP-1fe987fb9367b3d0"></a>
- **M11-CAP-INTEROP-1fe987fb9367b3d0**: # Cross-Border Medical Record Exchange
  Original IDs: 220

<a id="M11-CAP-INTEROP-638dd97296164597"></a>
- **M11-CAP-INTEROP-638dd97296164597**: Purpose
  Original IDs: 220

<a id="M11-CAP-INTEROP-4fbeeb87456accf5"></a>
- **M11-CAP-INTEROP-4fbeeb87456accf5**: Supports
  Original IDs: 220, 1344, 1886

<a id="M11-CAP-INTEROP-5ba74d8fcc7b20cc"></a>
- **M11-CAP-INTEROP-5ba74d8fcc7b20cc**: Status
  Original IDs: 220, 1344, 1886

<a id="M11-CAP-INTEROP-d5232cbd3a326267"></a>
- **M11-CAP-INTEROP-d5232cbd3a326267**: Documentation
  Original IDs: 220, 1344, 1886, 4595

<a id="M11-CAP-INTEROP-6f33acf3afb37064"></a>
- **M11-CAP-INTEROP-6f33acf3afb37064**: ---
  Original IDs: 220, 1344, 1886, 4595

<a id="M11-CAP-INTEROP-6510c5c511a879bc"></a>
- **M11-CAP-INTEROP-6510c5c511a879bc**: Purpose:
  Original IDs: 4595

<a id="M11-CAP-INTEROP-b34f593f0f83a1d1"></a>
- **M11-CAP-INTEROP-b34f593f0f83a1d1**: Core Functions:
  Original IDs: 4595

<a id="M11-CAP-INTEROP-b88b375a44ccd619"></a>
- **M11-CAP-INTEROP-b88b375a44ccd619**: Status:
  Original IDs: 4595

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
