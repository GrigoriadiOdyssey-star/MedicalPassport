# CORE-CAP-APPOINTMENTS — MASTER-10 addendum

Fertility consultations reuse clinic/physician/online booking. A reserved appointment neither authorizes a procedure nor starts a treatment cycle.

Extends [unchanged MASTER-08 specification](../master08/CAP-APPOINTMENTS.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-APPOINTMENTS, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-APPOINTMENTS-1529f209dda56be0"></a>
- **M10-CAP-APPOINTMENTS-1529f209dda56be0**: Allows scheduling fertility consultations.
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-76968af3bfd3face"></a>
- **M10-CAP-APPOINTMENTS-76968af3bfd3face**: Clinic
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-55faff639138dc86"></a>
- **M10-CAP-APPOINTMENTS-55faff639138dc86**: Physician
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-76507b42b60ede7f"></a>
- **M10-CAP-APPOINTMENTS-76507b42b60ede7f**: Online Consultation
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-82a77873cf8fbddc"></a>
- **M10-CAP-APPOINTMENTS-82a77873cf8fbddc**: # Fertility Consultation Booking
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-4fbeeb87456accf5"></a>
- **M10-CAP-APPOINTMENTS-4fbeeb87456accf5**: Supports
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-5ba74d8fcc7b20cc"></a>
- **M10-CAP-APPOINTMENTS-5ba74d8fcc7b20cc**: Status
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-d5232cbd3a326267"></a>
- **M10-CAP-APPOINTMENTS-d5232cbd3a326267**: Documentation
  Original IDs: 763

<a id="M10-CAP-APPOINTMENTS-6f33acf3afb37064"></a>
- **M10-CAP-APPOINTMENTS-6f33acf3afb37064**: ---
  Original IDs: 763

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
