# CORE-CAP-IMMUNIZATION — MASTER-11 addendum

Product names/history, antigen components, dose sequences, national schedules, age/catch-up and transit/date/duration form explicit reconciliation profiles. Preserve original vaccination history and uncertain equivalence, never silently recompute it as fact. Schedule/requirement versions and jurisdiction applicability need qualified confirmation; Estonia/Germany is a historical example, not a current validated schedule.

Extends [unchanged MASTER-08 specification](../master08/CAP-IMMUNIZATION.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-IMMUNIZATION, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-IMMUNIZATION-648a99790fa02837"></a>
- **M11-CAP-IMMUNIZATION-648a99790fa02837**: Supports interpretation of vaccination records across jurisdictions.
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-28cbfdcefa11e191"></a>
- **M11-CAP-IMMUNIZATION-28cbfdcefa11e191**: Maps
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-9560797739c1b3e0"></a>
- **M11-CAP-IMMUNIZATION-9560797739c1b3e0**: Vaccine Products
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-84b6c9501b50bbf9"></a>
- **M11-CAP-IMMUNIZATION-84b6c9501b50bbf9**: Antigen Components
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-1300cb34735bbd71"></a>
- **M11-CAP-IMMUNIZATION-1300cb34735bbd71**: Dose Sequences
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-2ee897a4100acd79"></a>
- **M11-CAP-IMMUNIZATION-2ee897a4100acd79**: National Schedules
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-0c7d80223441f3ad"></a>
- **M11-CAP-IMMUNIZATION-0c7d80223441f3ad**: Product Names
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-d534853bf2093482"></a>
- **M11-CAP-IMMUNIZATION-d534853bf2093482**: Historical Products
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-11e443cd678695c3"></a>
- **M11-CAP-IMMUNIZATION-11e443cd678695c3**: Flags uncertain equivalence for professional review.
  Original IDs: 4273

<a id="M11-CAP-IMMUNIZATION-5773b02facf3829b"></a>
- **M11-CAP-IMMUNIZATION-5773b02facf3829b**: Recalculates vaccination requirements after international relocation.
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-c8ebc3e63069029b"></a>
- **M11-CAP-IMMUNIZATION-c8ebc3e63069029b**: Example
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-29f0a11ff5a2dacc"></a>
- **M11-CAP-IMMUNIZATION-29f0a11ff5a2dacc**: Estonia
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-60ad5f0e95a3c0f2"></a>
- **M11-CAP-IMMUNIZATION-60ad5f0e95a3c0f2**: ↓
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-85312622bea69e47"></a>
- **M11-CAP-IMMUNIZATION-85312622bea69e47**: Germany
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-d12d892fa5e4cdc1"></a>
- **M11-CAP-IMMUNIZATION-d12d892fa5e4cdc1**: System compares
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-9457444b538e6aff"></a>
- **M11-CAP-IMMUNIZATION-9457444b538e6aff**: Previous Vaccinations
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-99809ff30da7ac4a"></a>
- **M11-CAP-IMMUNIZATION-99809ff30da7ac4a**: Antigen Composition
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-2c76ceb0f9e1ca59"></a>
- **M11-CAP-IMMUNIZATION-2c76ceb0f9e1ca59**: Dose Numbers
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-9c0efba63c78c41c"></a>
- **M11-CAP-IMMUNIZATION-9c0efba63c78c41c**: Product Equivalence
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-356d49a6a3871dfa"></a>
- **M11-CAP-IMMUNIZATION-356d49a6a3871dfa**: German Schedule
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-5fb8f64f3d504245"></a>
- **M11-CAP-IMMUNIZATION-5fb8f64f3d504245**: Age Requirements
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-4dadca6d2551cc63"></a>
- **M11-CAP-IMMUNIZATION-4dadca6d2551cc63**: Catch-up Requirements
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-a9af170bc4b3ea16"></a>
- **M11-CAP-IMMUNIZATION-a9af170bc4b3ea16**: Preserves the original vaccination history.
  Original IDs: 4307

<a id="M11-CAP-IMMUNIZATION-374336b8d920b94c"></a>
- **M11-CAP-IMMUNIZATION-374336b8d920b94c**: Supports personalized vaccination assessment for international travel.
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-32a79aa90b436d09"></a>
- **M11-CAP-IMMUNIZATION-32a79aa90b436d09**: Considers
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-ae324f31cf9de68c"></a>
- **M11-CAP-IMMUNIZATION-ae324f31cf9de68c**: Destination
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-f463a90b49c12066"></a>
- **M11-CAP-IMMUNIZATION-f463a90b49c12066**: Transit Countries
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-49d86c175da224f5"></a>
- **M11-CAP-IMMUNIZATION-49d86c175da224f5**: Travel Date
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-10d8c964b53514ca"></a>
- **M11-CAP-IMMUNIZATION-10d8c964b53514ca**: Duration
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-d105f29dd1ec7126"></a>
- **M11-CAP-IMMUNIZATION-d105f29dd1ec7126**: Age
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-b9f7850c43c977c3"></a>
- **M11-CAP-IMMUNIZATION-b9f7850c43c977c3**: Medical History
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-e9d2a24f76662099"></a>
- **M11-CAP-IMMUNIZATION-e9d2a24f76662099**: Existing Vaccinations
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-f4cb40975577092a"></a>
- **M11-CAP-IMMUNIZATION-f4cb40975577092a**: Destination-specific Requirements
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-c9b2f3a123552241"></a>
- **M11-CAP-IMMUNIZATION-c9b2f3a123552241**: Risk-based Recommendations
  Original IDs: 4339

<a id="M11-CAP-IMMUNIZATION-5ba74d8fcc7b20cc"></a>
- **M11-CAP-IMMUNIZATION-5ba74d8fcc7b20cc**: Status
  Original IDs: 4273, 4307, 4339

<a id="M11-CAP-IMMUNIZATION-d5232cbd3a326267"></a>
- **M11-CAP-IMMUNIZATION-d5232cbd3a326267**: Documentation
  Original IDs: 4273, 4307, 4339

<a id="M11-CAP-IMMUNIZATION-6f33acf3afb37064"></a>
- **M11-CAP-IMMUNIZATION-6f33acf3afb37064**: ---
  Original IDs: 4273, 4307, 4339

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
