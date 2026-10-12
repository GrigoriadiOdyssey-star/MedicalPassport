# CORE-CAP-DATA — MASTER-10 addendum

Diagnostics, medications, procedures and outcomes form an attributed source-reference timeline. Cross-partner joins require independent authorization at render time and cannot create merged identity or duplicate clinical truth.

Extends [unchanged MASTER-08 specification](../master08/CAP-DATA.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-DATA, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-DATA-63aeb7f77f1f47fe"></a>
- **M10-CAP-DATA-63aeb7f77f1f47fe**: Displays the complete fertility treatment journey.
  Original IDs: 779

<a id="M10-CAP-DATA-01bbec9df504a305"></a>
- **M10-CAP-DATA-01bbec9df504a305**: Includes
  Original IDs: 779

<a id="M10-CAP-DATA-66cb8cd6201376f6"></a>
- **M10-CAP-DATA-66cb8cd6201376f6**: Diagnostics
  Original IDs: 779

<a id="M10-CAP-DATA-b769af85ada69188"></a>
- **M10-CAP-DATA-b769af85ada69188**: Medications
  Original IDs: 779

<a id="M10-CAP-DATA-228b18d13e8b34f1"></a>
- **M10-CAP-DATA-228b18d13e8b34f1**: Procedures
  Original IDs: 779

<a id="M10-CAP-DATA-5e8c51cc3501e267"></a>
- **M10-CAP-DATA-5e8c51cc3501e267**: Outcomes
  Original IDs: 779

<a id="M10-CAP-DATA-94811b69bb1ffb15"></a>
- **M10-CAP-DATA-94811b69bb1ffb15**: # Fertility Timeline
  Original IDs: 779

<a id="M10-CAP-DATA-5ba74d8fcc7b20cc"></a>
- **M10-CAP-DATA-5ba74d8fcc7b20cc**: Status
  Original IDs: 779

<a id="M10-CAP-DATA-d5232cbd3a326267"></a>
- **M10-CAP-DATA-d5232cbd3a326267**: Documentation
  Original IDs: 779

<a id="M10-CAP-DATA-6f33acf3afb37064"></a>
- **M10-CAP-DATA-6f33acf3afb37064**: ---
  Original IDs: 779

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
