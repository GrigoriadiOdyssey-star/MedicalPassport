# CORE-CAP-RESEARCH — MASTER-10 addendum

Cycle, pregnancy and live-birth rates are different cohort outcomes with explicit denominator, follow-up, treatment context and missingness. Aggregates are not individual predictions or comparable clinic rankings without population adjustment and evidence.

Extends [unchanged MASTER-08 specification](../master08/CAP-RESEARCH.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-RESEARCH, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-RESEARCH-0b4925eaaf51d57b"></a>
- **M10-CAP-RESEARCH-0b4925eaaf51d57b**: Provides treatment outcome statistics.
  Original IDs: 776

<a id="M10-CAP-RESEARCH-f3d993f49bc6debb"></a>
- **M10-CAP-RESEARCH-f3d993f49bc6debb**: Displays
  Original IDs: 776

<a id="M10-CAP-RESEARCH-97ede4bf21a6303f"></a>
- **M10-CAP-RESEARCH-97ede4bf21a6303f**: Cycles
  Original IDs: 776

<a id="M10-CAP-RESEARCH-d30d3ca2feffeaa9"></a>
- **M10-CAP-RESEARCH-d30d3ca2feffeaa9**: Pregnancy Rate
  Original IDs: 776

<a id="M10-CAP-RESEARCH-b11ec48e32b62f08"></a>
- **M10-CAP-RESEARCH-b11ec48e32b62f08**: Live Birth Rate
  Original IDs: 776

<a id="M10-CAP-RESEARCH-af60b3fbe84d77de"></a>
- **M10-CAP-RESEARCH-af60b3fbe84d77de**: # Fertility Success Analytics
  Original IDs: 776

<a id="M10-CAP-RESEARCH-5ba74d8fcc7b20cc"></a>
- **M10-CAP-RESEARCH-5ba74d8fcc7b20cc**: Status
  Original IDs: 776

<a id="M10-CAP-RESEARCH-d5232cbd3a326267"></a>
- **M10-CAP-RESEARCH-d5232cbd3a326267**: Documentation
  Original IDs: 776

<a id="M10-CAP-RESEARCH-6f33acf3afb37064"></a>
- **M10-CAP-RESEARCH-6f33acf3afb37064**: ---
  Original IDs: 776

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
