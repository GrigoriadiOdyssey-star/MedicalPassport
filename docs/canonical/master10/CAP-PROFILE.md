# CORE-CAP-PROFILE — MASTER-10 addendum

Shared treatment context is a projection linking two separately identified patients. Preserve female/male source categories without assuming sex, parental status or automatic partner access. Independent purpose-scoped grants and withdrawal apply to each source; absence of permission is distinct from absence of clinical data. Never merge partner patient IDs or disclose hidden diagnoses through timeline titles.

Extends [unchanged MASTER-08 specification](../master08/CAP-PROFILE.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-PROFILE, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-PROFILE-589356eb408c56c7"></a>
- **M10-CAP-PROFILE-589356eb408c56c7**: Creates a shared reproductive health profile for partners.
  Original IDs: 764

<a id="M10-CAP-PROFILE-8d85b001168e70bc"></a>
- **M10-CAP-PROFILE-8d85b001168e70bc**: Female Data
  Original IDs: 764

<a id="M10-CAP-PROFILE-5432218f4540930f"></a>
- **M10-CAP-PROFILE-5432218f4540930f**: Male Data
  Original IDs: 764

<a id="M10-CAP-PROFILE-8ba19d107237a535"></a>
- **M10-CAP-PROFILE-8ba19d107237a535**: Shared Treatment Timeline
  Original IDs: 764

<a id="M10-CAP-PROFILE-9fe942870c502c79"></a>
- **M10-CAP-PROFILE-9fe942870c502c79**: # Couple Fertility Profile
  Original IDs: 764

<a id="M10-CAP-PROFILE-4fbeeb87456accf5"></a>
- **M10-CAP-PROFILE-4fbeeb87456accf5**: Supports
  Original IDs: 764

<a id="M10-CAP-PROFILE-5ba74d8fcc7b20cc"></a>
- **M10-CAP-PROFILE-5ba74d8fcc7b20cc**: Status
  Original IDs: 764

<a id="M10-CAP-PROFILE-d5232cbd3a326267"></a>
- **M10-CAP-PROFILE-d5232cbd3a326267**: Documentation
  Original IDs: 764

<a id="M10-CAP-PROFILE-6f33acf3afb37064"></a>
- **M10-CAP-PROFILE-6f33acf3afb37064**: ---
  Original IDs: 764

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
