# CORE-CAP-PROFILE — MASTER-11 addendum

Multilingual infectious-disease disclosure is a source-linked passport projection retaining vaccines, prior infections/resistance/microbiology, antimicrobial allergies/current use, immunocompromise and isolation context. Role, purpose, consent and emergency policy are separately checked; language choice does not broaden recipient access.

Extends [unchanged MASTER-08 specification](../master08/CAP-PROFILE.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-PROFILE, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-PROFILE-07d2c6ced6fd82f3"></a>
- **M11-CAP-PROFILE-07d2c6ced6fd82f3**: Provides critical infectious disease information during international care.
  Original IDs: 4299

<a id="M11-CAP-PROFILE-bebe8ff567c27e81"></a>
- **M11-CAP-PROFILE-bebe8ff567c27e81**: Supports multilingual access to
  Original IDs: 4299

<a id="M11-CAP-PROFILE-a91b469df851c232"></a>
- **M11-CAP-PROFILE-a91b469df851c232**: Vaccination History
  Original IDs: 4299

<a id="M11-CAP-PROFILE-7dde352ee0aea560"></a>
- **M11-CAP-PROFILE-7dde352ee0aea560**: Relevant Previous Infections
  Original IDs: 4299

<a id="M11-CAP-PROFILE-4fd5a5a95517734b"></a>
- **M11-CAP-PROFILE-4fd5a5a95517734b**: Resistant Organisms
  Original IDs: 4299

<a id="M11-CAP-PROFILE-a793244195a40377"></a>
- **M11-CAP-PROFILE-a793244195a40377**: Important Microbiology
  Original IDs: 4299

<a id="M11-CAP-PROFILE-fbbeb1989fb1be71"></a>
- **M11-CAP-PROFILE-fbbeb1989fb1be71**: Antimicrobial Allergies
  Original IDs: 4299

<a id="M11-CAP-PROFILE-2da5f2ab97c3dd99"></a>
- **M11-CAP-PROFILE-2da5f2ab97c3dd99**: Current Antimicrobials
  Original IDs: 4299

<a id="M11-CAP-PROFILE-63005c4a802c6ed8"></a>
- **M11-CAP-PROFILE-63005c4a802c6ed8**: Immunocompromised Status
  Original IDs: 4299

<a id="M11-CAP-PROFILE-d2e2a261eda045f3"></a>
- **M11-CAP-PROFILE-d2e2a261eda045f3**: Isolation-relevant Information
  Original IDs: 4299

<a id="M11-CAP-PROFILE-abdee66bcdbc429e"></a>
- **M11-CAP-PROFILE-abdee66bcdbc429e**: Uses role-based access, consent and emergency-access policies.
  Original IDs: 4299

<a id="M11-CAP-PROFILE-5ba74d8fcc7b20cc"></a>
- **M11-CAP-PROFILE-5ba74d8fcc7b20cc**: Status
  Original IDs: 4299

<a id="M11-CAP-PROFILE-d5232cbd3a326267"></a>
- **M11-CAP-PROFILE-d5232cbd3a326267**: Documentation
  Original IDs: 4299

<a id="M11-CAP-PROFILE-6f33acf3afb37064"></a>
- **M11-CAP-PROFILE-6f33acf3afb37064**: ---
  Original IDs: 4299

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
