# CORE-CAP-AI — MASTER-11 addendum

Hospital/cost/travel/translation assistance, treatment navigation and destination/season/climate/outbreak risk are separate AI task profiles. Preserve current source date/model/version, uncertainty and human review; no clinical selection, guarantee, unverified outbreak inference or autonomous treatment/travel recommendation. Unavailable current evidence remains explicit.

Extends [unchanged MASTER-08 specification](../master08/CAP-AI.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-AI, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-AI-23a9a45a71d4c141"></a>
- **M11-CAP-AI-23a9a45a71d4c141**: Supports international medical tourism.
  Original IDs: 1403, 1888

<a id="M11-CAP-AI-01bbec9df504a305"></a>
- **M11-CAP-AI-01bbec9df504a305**: Includes
  Original IDs: 1403

<a id="M11-CAP-AI-6de5f2934118b5c6"></a>
- **M11-CAP-AI-6de5f2934118b5c6**: Hospital Selection
  Original IDs: 1403, 1888

<a id="M11-CAP-AI-e77294311acdc1ac"></a>
- **M11-CAP-AI-e77294311acdc1ac**: Cost Comparison
  Original IDs: 1403

<a id="M11-CAP-AI-6a5b0dcf47546b75"></a>
- **M11-CAP-AI-6a5b0dcf47546b75**: Travel Planning
  Original IDs: 1403

<a id="M11-CAP-AI-5f42ba8f024bbd01"></a>
- **M11-CAP-AI-5f42ba8f024bbd01**: Medical Translation
  Original IDs: 1403

<a id="M11-CAP-AI-0469e8bdff046a2f"></a>
- **M11-CAP-AI-0469e8bdff046a2f**: Calculates infection risks before travel.
  Original IDs: 1425

<a id="M11-CAP-AI-0535ebb6ad4f5674"></a>
- **M11-CAP-AI-0535ebb6ad4f5674**: Analyzes
  Original IDs: 1425

<a id="M11-CAP-AI-ae324f31cf9de68c"></a>
- **M11-CAP-AI-ae324f31cf9de68c**: Destination
  Original IDs: 1425

<a id="M11-CAP-AI-f572e0ac7e9c2e55"></a>
- **M11-CAP-AI-f572e0ac7e9c2e55**: Season
  Original IDs: 1425

<a id="M11-CAP-AI-768e21b3f4f06bc9"></a>
- **M11-CAP-AI-768e21b3f4f06bc9**: Climate
  Original IDs: 1425

<a id="M11-CAP-AI-ffd58abc1afc1188"></a>
- **M11-CAP-AI-ffd58abc1afc1188**: Current Outbreaks
  Original IDs: 1425

<a id="M11-CAP-AI-7c7fb2adca62a628"></a>
- **M11-CAP-AI-7c7fb2adca62a628**: Treatment Planning
  Original IDs: 1888

<a id="M11-CAP-AI-1cf0ffde4a79a7ee"></a>
- **M11-CAP-AI-1cf0ffde4a79a7ee**: Patient Navigation
  Original IDs: 1888

<a id="M11-CAP-AI-5ba74d8fcc7b20cc"></a>
- **M11-CAP-AI-5ba74d8fcc7b20cc**: Status
  Original IDs: 1403, 1425, 1888

<a id="M11-CAP-AI-d5232cbd3a326267"></a>
- **M11-CAP-AI-d5232cbd3a326267**: Documentation
  Original IDs: 1403, 1425, 1888

<a id="M11-CAP-AI-6f33acf3afb37064"></a>
- **M11-CAP-AI-6f33acf3afb37064**: ---
  Original IDs: 1403, 1425, 1888

<a id="M11-CAP-AI-4fbeeb87456accf5"></a>
- **M11-CAP-AI-4fbeeb87456accf5**: Supports
  Original IDs: 1888

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
