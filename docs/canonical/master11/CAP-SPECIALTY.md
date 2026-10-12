# CORE-CAP-SPECIALTY — MASTER-11 addendum

Pre-travel and imported-infection care retain destination/duration/dates, history, vaccination/prevention, malaria/food/water/vector/animal exposure, illness/symptoms/labs and follow-up. WHO/national/international guidance intent needs an exact approved source release; the registry does not provide validated prophylactic doses, required vaccines or individual travel clearance.

Extends [unchanged MASTER-08 specification](../master08/CAP-SPECIALTY.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-SPECIALTY, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M11-CAP-SPECIALTY-ac5f66a0d589442d"></a>
- **M11-CAP-SPECIALTY-ac5f66a0d589442d**: Assesses infectious risks before international travel.
  Original IDs: 1021

<a id="M11-CAP-SPECIALTY-f53b4f9a79821096"></a>
- **M11-CAP-SPECIALTY-f53b4f9a79821096**: Destination Analysis
  Original IDs: 1021

<a id="M11-CAP-SPECIALTY-dd0b4b40082a335a"></a>
- **M11-CAP-SPECIALTY-dd0b4b40082a335a**: Required Vaccines
  Original IDs: 1021

<a id="M11-CAP-SPECIALTY-d52c301c5d4b5a74"></a>
- **M11-CAP-SPECIALTY-d52c301c5d4b5a74**: Local Epidemics
  Original IDs: 1021

<a id="M11-CAP-SPECIALTY-73d6dacfb3c8f751"></a>
- **M11-CAP-SPECIALTY-73d6dacfb3c8f751**: WHO Recommendations
  Original IDs: 1021

<a id="M11-CAP-SPECIALTY-60c1f953a2770cc1"></a>
- **M11-CAP-SPECIALTY-60c1f953a2770cc1**: Supports pediatric travel medicine.
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-92c0279be752e16d"></a>
- **M11-CAP-SPECIALTY-92c0279be752e16d**: Travel Risk Assessment
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-5e8baed45e6da4a7"></a>
- **M11-CAP-SPECIALTY-5e8baed45e6da4a7**: Vaccination Planning
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-db1c013dcfd8423e"></a>
- **M11-CAP-SPECIALTY-db1c013dcfd8423e**: Tropical Diseases
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-b9d1d2010beaa7bc"></a>
- **M11-CAP-SPECIALTY-b9d1d2010beaa7bc**: Exposure Evaluation
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-c6a6b7b2c560cfc8"></a>
- **M11-CAP-SPECIALTY-c6a6b7b2c560cfc8**: Post-travel Assessment
  Original IDs: 3957

<a id="M11-CAP-SPECIALTY-9eac01f669b626fc"></a>
- **M11-CAP-SPECIALTY-9eac01f669b626fc**: Supports pre-travel and post-travel pediatric infectious disease workflows.
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-ae324f31cf9de68c"></a>
- **M11-CAP-SPECIALTY-ae324f31cf9de68c**: Destination
  Original IDs: 4293, 5070

<a id="M11-CAP-SPECIALTY-10d8c964b53514ca"></a>
- **M11-CAP-SPECIALTY-10d8c964b53514ca**: Duration
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-b9f7850c43c977c3"></a>
- **M11-CAP-SPECIALTY-b9f7850c43c977c3**: Medical History
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-c725477367334eb0"></a>
- **M11-CAP-SPECIALTY-c725477367334eb0**: Vaccination
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-f77c110a969b6dd2"></a>
- **M11-CAP-SPECIALTY-f77c110a969b6dd2**: Preventive Requirements
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-dee9c030267edcf0"></a>
- **M11-CAP-SPECIALTY-dee9c030267edcf0**: Exposure History
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-8ea50d2707dd1600"></a>
- **M11-CAP-SPECIALTY-8ea50d2707dd1600**: Symptoms
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-196ab9187643f404"></a>
- **M11-CAP-SPECIALTY-196ab9187643f404**: Travel Timeline
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-654cc2663d1ff61c"></a>
- **M11-CAP-SPECIALTY-654cc2663d1ff61c**: Connect pediatric travel history, preventive medicine and imported infection assessment.
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-f196627f097786cb"></a>
- **M11-CAP-SPECIALTY-f196627f097786cb**: Travel Dates
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-1f8b9a6d05d31711"></a>
- **M11-CAP-SPECIALTY-1f8b9a6d05d31711**: Travel Purpose Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-60f475c3b2db5da1"></a>
- **M11-CAP-SPECIALTY-60f475c3b2db5da1**: Vaccination Requirements Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-fde4ccdca6f67fff"></a>
- **M11-CAP-SPECIALTY-fde4ccdca6f67fff**: National/International Guidance Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-4d8b17579bda870a"></a>
- **M11-CAP-SPECIALTY-4d8b17579bda870a**: Malaria Risk Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-ccb75ad0fbbf1617"></a>
- **M11-CAP-SPECIALTY-ccb75ad0fbbf1617**: Food/Water Risk Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-5bb1674bd78b70d8"></a>
- **M11-CAP-SPECIALTY-5bb1674bd78b70d8**: Vector Exposure Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-31391b63977f346c"></a>
- **M11-CAP-SPECIALTY-31391b63977f346c**: Animal Exposure Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-1c70c0446b908aae"></a>
- **M11-CAP-SPECIALTY-1c70c0446b908aae**: Preventive Medication Context
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-b0cdd972a94e1d2a"></a>
- **M11-CAP-SPECIALTY-b0cdd972a94e1d2a**: Illness During Travel
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-1ab9e02822129e43"></a>
- **M11-CAP-SPECIALTY-1ab9e02822129e43**: Post-travel Symptoms
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-62348f82b3bcfc9f"></a>
- **M11-CAP-SPECIALTY-62348f82b3bcfc9f**: Laboratory Testing
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-b6e6d4c8294aa176"></a>
- **M11-CAP-SPECIALTY-b6e6d4c8294aa176**: Imported Infection Diagnosis
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-0d86946e629cc025"></a>
- **M11-CAP-SPECIALTY-0d86946e629cc025**: Follow-up
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-2f27e552d723d07f"></a>
- **M11-CAP-SPECIALTY-2f27e552d723d07f**: Integrations:
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-813d0ab6af854e92"></a>
- **M11-CAP-SPECIALTY-813d0ab6af854e92**: Infectious Disease
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-7c65c5638317ca0a"></a>
- **M11-CAP-SPECIALTY-7c65c5638317ca0a**: Vaccination Platform
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-03e6f3d95e9208e7"></a>
- **M11-CAP-SPECIALTY-03e6f3d95e9208e7**: Public Health
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-e9eb7b780843070a"></a>
- **M11-CAP-SPECIALTY-e9eb7b780843070a**: Pediatrics
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-35ff4287a628c0a4"></a>
- **M11-CAP-SPECIALTY-35ff4287a628c0a4**: Laboratory Medicine
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-4fbeeb87456accf5"></a>
- **M11-CAP-SPECIALTY-4fbeeb87456accf5**: Supports
  Original IDs: 1021, 3957

<a id="M11-CAP-SPECIALTY-6f33acf3afb37064"></a>
- **M11-CAP-SPECIALTY-6f33acf3afb37064**: ---
  Original IDs: 1021, 3957, 4293, 5070

<a id="M11-CAP-SPECIALTY-5ba74d8fcc7b20cc"></a>
- **M11-CAP-SPECIALTY-5ba74d8fcc7b20cc**: Status
  Original IDs: 3957, 4293

<a id="M11-CAP-SPECIALTY-d5232cbd3a326267"></a>
- **M11-CAP-SPECIALTY-d5232cbd3a326267**: Documentation
  Original IDs: 3957, 4293, 5070

<a id="M11-CAP-SPECIALTY-21d94006fa494f95"></a>
- **M11-CAP-SPECIALTY-21d94006fa494f95**: Integrates
  Original IDs: 4293

<a id="M11-CAP-SPECIALTY-6510c5c511a879bc"></a>
- **M11-CAP-SPECIALTY-6510c5c511a879bc**: Purpose:
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-b34f593f0f83a1d1"></a>
- **M11-CAP-SPECIALTY-b34f593f0f83a1d1**: Core Functions:
  Original IDs: 5070

<a id="M11-CAP-SPECIALTY-b88b375a44ccd619"></a>
- **M11-CAP-SPECIALTY-b88b375a44ccd619**: Status:
  Original IDs: 5070

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
