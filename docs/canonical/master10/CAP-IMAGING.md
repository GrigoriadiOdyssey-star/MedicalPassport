# CORE-CAP-IMAGING — MASTER-10 addendum

Ultrasound follicle diameter/count/growth retains study/time, laterality, measurement method/units and signed interpretation. Cross-study comparisons require compatibility; measurements never choose a treatment or trigger.

Extends [unchanged MASTER-08 specification](../master08/CAP-IMAGING.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-IMAGING, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-IMAGING-bcfd6ce60cb26e45"></a>
- **M10-CAP-IMAGING-bcfd6ce60cb26e45**: Stores follicular development.
  Original IDs: 772

<a id="M10-CAP-IMAGING-5032f26f1a690cb2"></a>
- **M10-CAP-IMAGING-5032f26f1a690cb2**: Ultrasound
  Original IDs: 772

<a id="M10-CAP-IMAGING-9b3538175b56f8f9"></a>
- **M10-CAP-IMAGING-9b3538175b56f8f9**: Diameter
  Original IDs: 772

<a id="M10-CAP-IMAGING-6a39849178d3ef60"></a>
- **M10-CAP-IMAGING-6a39849178d3ef60**: Number
  Original IDs: 772

<a id="M10-CAP-IMAGING-67b8930e2378552d"></a>
- **M10-CAP-IMAGING-67b8930e2378552d**: Growth Timeline
  Original IDs: 772

<a id="M10-CAP-IMAGING-d87533e51ebf56ef"></a>
- **M10-CAP-IMAGING-d87533e51ebf56ef**: # Follicle Monitoring
  Original IDs: 772

<a id="M10-CAP-IMAGING-4fbeeb87456accf5"></a>
- **M10-CAP-IMAGING-4fbeeb87456accf5**: Supports
  Original IDs: 772

<a id="M10-CAP-IMAGING-5ba74d8fcc7b20cc"></a>
- **M10-CAP-IMAGING-5ba74d8fcc7b20cc**: Status
  Original IDs: 772

<a id="M10-CAP-IMAGING-d5232cbd3a326267"></a>
- **M10-CAP-IMAGING-d5232cbd3a326267**: Documentation
  Original IDs: 772

<a id="M10-CAP-IMAGING-6f33acf3afb37064"></a>
- **M10-CAP-IMAGING-6f33acf3afb37064**: ---
  Original IDs: 772

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
