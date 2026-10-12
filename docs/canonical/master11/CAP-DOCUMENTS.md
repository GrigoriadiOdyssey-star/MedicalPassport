# CORE-CAP-DOCUMENTS — MASTER-11 addendum

Medication travel certificate is a versioned document derivative linking qualified physician, prescribed medication and diagnosis source where authorized, with scoped QR verification. A generated certificate does not certify authenticity, medication legality, border acceptance or prescribing authority. Minimize diagnosis disclosure and preserve signature/issuer provenance.

Extends [unchanged MASTER-08 specification](../master08/CAP-DOCUMENTS.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-DOCUMENTS, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-DOCUMENTS-d193bdcca3f67084"></a>
- **M11-CAP-DOCUMENTS-d193bdcca3f67084**: Generates travel documentation for prescribed medications.
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-271e42d0ea3f96db"></a>
- **M11-CAP-DOCUMENTS-271e42d0ea3f96db**: Physician Information
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-0e8b278920617d2e"></a>
- **M11-CAP-DOCUMENTS-0e8b278920617d2e**: Medication List
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-5f124f9e42776b79"></a>
- **M11-CAP-DOCUMENTS-5f124f9e42776b79**: Diagnosis
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-9c26c1b46bcd0a38"></a>
- **M11-CAP-DOCUMENTS-9c26c1b46bcd0a38**: QR Verification
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-de9df7e525b399f2"></a>
- **M11-CAP-DOCUMENTS-de9df7e525b399f2**: # Medication Travel Certificate
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-4fbeeb87456accf5"></a>
- **M11-CAP-DOCUMENTS-4fbeeb87456accf5**: Supports
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-5ba74d8fcc7b20cc"></a>
- **M11-CAP-DOCUMENTS-5ba74d8fcc7b20cc**: Status
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-d5232cbd3a326267"></a>
- **M11-CAP-DOCUMENTS-d5232cbd3a326267**: Documentation
  Original IDs: 425

<a id="M11-CAP-DOCUMENTS-6f33acf3afb37064"></a>
- **M11-CAP-DOCUMENTS-6f33acf3afb37064**: ---
  Original IDs: 425

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
