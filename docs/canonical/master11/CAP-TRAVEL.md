# CORE-CAP-TRAVEL — MASTER-11 shared specification

Trip and medical-travel coordination owns itinerary, destination/accessibility and provider comparison views. This resolves 778: country/city/cost/reviews are travel-planning context, while actual provider identity stays CAP-IDENTITY and success-rate definitions stay CAP-RESEARCH. Preserve clinic/dentist selection, accessible airports/hotels/pharmacies/hospitals, equipment rental, medicine/visa/insurance and advisory references. Success rates require source/cohort/denominator/time and missingness before comparison; no ranking, treatment eligibility or outcome guarantee is inferred. Shared-profile/contact/QR flags record intent, not grants. Current country rules require authoritative version/date evidence; historical source examples are not current advice.

Existing architectural owner now has a source-backed specification; this is not a new gap capability.

## Workflow and boundaries

Resolve authorized patient/trip/source context → preserve source/version and applicable jurisdiction/time → qualified review of comparison or clinical implications → disclose bounded view → record correction, delivery and provenance.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, TripContext, JurisdictionReference, ProviderReference, ProfileRevision. Dependencies: CAP-TRAVEL, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT, CAP-IDENTITY, CAP-RESEARCH, CAP-QR, CAP-PROFILE, CAP-IMMUNIZATION.

## New source fragments

<a id="M11-CAP-TRAVEL-5c6452effddb4977"></a>
- **M11-CAP-TRAVEL-5c6452effddb4977**: Stores all travel history and upcoming trips.
  Original IDs: 22

<a id="M11-CAP-TRAVEL-c91610423a46692c"></a>
- **M11-CAP-TRAVEL-c91610423a46692c**: id (UUID)
  Original IDs: 22

<a id="M11-CAP-TRAVEL-ff6fb316f9bc6c33"></a>
- **M11-CAP-TRAVEL-ff6fb316f9bc6c33**: user_id
  Original IDs: 22

<a id="M11-CAP-TRAVEL-69cad85f83d01713"></a>
- **M11-CAP-TRAVEL-69cad85f83d01713**: departure_country
  Original IDs: 22

<a id="M11-CAP-TRAVEL-0a6973bd7eee9d29"></a>
- **M11-CAP-TRAVEL-0a6973bd7eee9d29**: destination_country
  Original IDs: 22

<a id="M11-CAP-TRAVEL-28cbc592e6b4092a"></a>
- **M11-CAP-TRAVEL-28cbc592e6b4092a**: departure_city
  Original IDs: 22

<a id="M11-CAP-TRAVEL-f6cbc7bda3b4ee82"></a>
- **M11-CAP-TRAVEL-f6cbc7bda3b4ee82**: destination_city
  Original IDs: 22

<a id="M11-CAP-TRAVEL-07b0aa6e3fc89a12"></a>
- **M11-CAP-TRAVEL-07b0aa6e3fc89a12**: departure_date
  Original IDs: 22

<a id="M11-CAP-TRAVEL-c655043f86b18002"></a>
- **M11-CAP-TRAVEL-c655043f86b18002**: return_date
  Original IDs: 22

<a id="M11-CAP-TRAVEL-609612ad3b93c771"></a>
- **M11-CAP-TRAVEL-609612ad3b93c771**: trip_status
  Original IDs: 22

<a id="M11-CAP-TRAVEL-b950f14a868e5e11"></a>
- **M11-CAP-TRAVEL-b950f14a868e5e11**: insurance_policy_id
  Original IDs: 22

<a id="M11-CAP-TRAVEL-7cf3817021919583"></a>
- **M11-CAP-TRAVEL-7cf3817021919583**: vaccination_required
  Original IDs: 22

<a id="M11-CAP-TRAVEL-c59b5b1dd72e1801"></a>
- **M11-CAP-TRAVEL-c59b5b1dd72e1801**: visa_required
  Original IDs: 22

<a id="M11-CAP-TRAVEL-602ff57fc19ebfab"></a>
- **M11-CAP-TRAVEL-602ff57fc19ebfab**: travel_notes
  Original IDs: 22

<a id="M11-CAP-TRAVEL-e38fdcf4ec81bd7c"></a>
- **M11-CAP-TRAVEL-e38fdcf4ec81bd7c**: emergency_contacts_shared
  Original IDs: 22

<a id="M11-CAP-TRAVEL-212a91071c20dd0f"></a>
- **M11-CAP-TRAVEL-212a91071c20dd0f**: medical_profile_shared
  Original IDs: 22

<a id="M11-CAP-TRAVEL-ba2521405f91714e"></a>
- **M11-CAP-TRAVEL-ba2521405f91714e**: qr_access_enabled
  Original IDs: 22

<a id="M11-CAP-TRAVEL-bcc951dbdead2bf5"></a>
- **M11-CAP-TRAVEL-bcc951dbdead2bf5**: created_at
  Original IDs: 22

<a id="M11-CAP-TRAVEL-51db2c3a3a174a78"></a>
- **M11-CAP-TRAVEL-51db2c3a3a174a78**: updated_at
  Original IDs: 22

<a id="M11-CAP-TRAVEL-11f4442258721d5f"></a>
- **M11-CAP-TRAVEL-11f4442258721d5f**: Travel Record
  Original IDs: 22

<a id="M11-CAP-TRAVEL-46172ef655d51ea4"></a>
- **M11-CAP-TRAVEL-46172ef655d51ea4**: ├── User
  Original IDs: 22

<a id="M11-CAP-TRAVEL-d3851f7ba53f3cf3"></a>
- **M11-CAP-TRAVEL-d3851f7ba53f3cf3**: ├── Insurance
  Original IDs: 22

<a id="M11-CAP-TRAVEL-b7f0d2db15272a43"></a>
- **M11-CAP-TRAVEL-b7f0d2db15272a43**: ├── QR Sessions
  Original IDs: 22

<a id="M11-CAP-TRAVEL-41bd3320fb6ee128"></a>
- **M11-CAP-TRAVEL-41bd3320fb6ee128**: ├── Medical Profile
  Original IDs: 22

<a id="M11-CAP-TRAVEL-a2f47460a111e5e9"></a>
- **M11-CAP-TRAVEL-a2f47460a111e5e9**: ├── Vaccinations
  Original IDs: 22

<a id="M11-CAP-TRAVEL-225d721817a80b2f"></a>
- **M11-CAP-TRAVEL-225d721817a80b2f**: ├── Notifications
  Original IDs: 22

<a id="M11-CAP-TRAVEL-93522f774f6d0bd5"></a>
- **M11-CAP-TRAVEL-93522f774f6d0bd5**: ├── AI Assistant
  Original IDs: 22

<a id="M11-CAP-TRAVEL-37bfdffca1a32095"></a>
- **M11-CAP-TRAVEL-37bfdffca1a32095**: Future Features
  Original IDs: 22

<a id="M11-CAP-TRAVEL-2b2d7f92fe0d1ef4"></a>
- **M11-CAP-TRAVEL-2b2d7f92fe0d1ef4**: Country Health Advisories
  Original IDs: 22

<a id="M11-CAP-TRAVEL-e3c1b1683e588931"></a>
- **M11-CAP-TRAVEL-e3c1b1683e588931**: Vaccine Recommendations
  Original IDs: 22

<a id="M11-CAP-TRAVEL-968629c3bc1a4ede"></a>
- **M11-CAP-TRAVEL-968629c3bc1a4ede**: Climate Risk Analysis
  Original IDs: 22

<a id="M11-CAP-TRAVEL-1e5944f9cb34d38a"></a>
- **M11-CAP-TRAVEL-1e5944f9cb34d38a**: Medicine Import Rules
  Original IDs: 22

<a id="M11-CAP-TRAVEL-5288ebf2f582a519"></a>
- **M11-CAP-TRAVEL-5288ebf2f582a519**: Emergency Numbers
  Original IDs: 22

<a id="M11-CAP-TRAVEL-01d149081a8aab35"></a>
- **M11-CAP-TRAVEL-01d149081a8aab35**: Embassy Information
  Original IDs: 22

<a id="M11-CAP-TRAVEL-8cb536f63171eb3d"></a>
- **M11-CAP-TRAVEL-8cb536f63171eb3d**: Local Pharmacy Finder
  Original IDs: 22

<a id="M11-CAP-TRAVEL-ae324f31cf9de68c"></a>
- **M11-CAP-TRAVEL-ae324f31cf9de68c**: Destination
  Original IDs: 117

<a id="M11-CAP-TRAVEL-60ad5f0e95a3c0f2"></a>
- **M11-CAP-TRAVEL-60ad5f0e95a3c0f2**: ↓
  Original IDs: 117

<a id="M11-CAP-TRAVEL-eff7a1d0a2fba317"></a>
- **M11-CAP-TRAVEL-eff7a1d0a2fba317**: Country Analysis
  Original IDs: 117

<a id="M11-CAP-TRAVEL-eb928415e699b910"></a>
- **M11-CAP-TRAVEL-eb928415e699b910**: Vaccination Check
  Original IDs: 117

<a id="M11-CAP-TRAVEL-296fb7d91e191725"></a>
- **M11-CAP-TRAVEL-296fb7d91e191725**: Disease Alerts
  Original IDs: 117

<a id="M11-CAP-TRAVEL-db6e854f8e48a3e2"></a>
- **M11-CAP-TRAVEL-db6e854f8e48a3e2**: Climate Risks
  Original IDs: 117

<a id="M11-CAP-TRAVEL-09d0ef8caea96325"></a>
- **M11-CAP-TRAVEL-09d0ef8caea96325**: Medicine Restrictions
  Original IDs: 117

<a id="M11-CAP-TRAVEL-3c3701124c561691"></a>
- **M11-CAP-TRAVEL-3c3701124c561691**: Travel Recommendations
  Original IDs: 117

<a id="M11-CAP-TRAVEL-4db49935c1bab8b0"></a>
- **M11-CAP-TRAVEL-4db49935c1bab8b0**: Provides
  Original IDs: 177

<a id="M11-CAP-TRAVEL-b174d3ccbec1ac32"></a>
- **M11-CAP-TRAVEL-b174d3ccbec1ac32**: Accessible Airports
  Original IDs: 177

<a id="M11-CAP-TRAVEL-9114e27f2e619317"></a>
- **M11-CAP-TRAVEL-9114e27f2e619317**: Accessible Hotels
  Original IDs: 177

<a id="M11-CAP-TRAVEL-1d3c6de338d7fa6d"></a>
- **M11-CAP-TRAVEL-1d3c6de338d7fa6d**: Accessible Pharmacies
  Original IDs: 177

<a id="M11-CAP-TRAVEL-ea8a9de783918a69"></a>
- **M11-CAP-TRAVEL-ea8a9de783918a69**: Accessible Hospitals
  Original IDs: 177

<a id="M11-CAP-TRAVEL-20ed29bdb5979a38"></a>
- **M11-CAP-TRAVEL-20ed29bdb5979a38**: Medical Equipment Rental
  Original IDs: 177

<a id="M11-CAP-TRAVEL-80e3ef36950805e9"></a>
- **M11-CAP-TRAVEL-80e3ef36950805e9**: Emergency Contacts
  Original IDs: 177

<a id="M11-CAP-TRAVEL-f4364d96fe644d6b"></a>
- **M11-CAP-TRAVEL-f4364d96fe644d6b**: Integrated with Travel Module.
  Original IDs: 177

<a id="M11-CAP-TRAVEL-ec58fcd4a1f9ce32"></a>
- **M11-CAP-TRAVEL-ec58fcd4a1f9ce32**: Provides international dental treatment planning.
  Original IDs: 459

<a id="M11-CAP-TRAVEL-6b0d83cf43f60f38"></a>
- **M11-CAP-TRAVEL-6b0d83cf43f60f38**: Country Selection
  Original IDs: 459

<a id="M11-CAP-TRAVEL-1a6f40e731fe5219"></a>
- **M11-CAP-TRAVEL-1a6f40e731fe5219**: Clinic Search
  Original IDs: 459

<a id="M11-CAP-TRAVEL-e41497415ff6b297"></a>
- **M11-CAP-TRAVEL-e41497415ff6b297**: Dentist Search
  Original IDs: 459

<a id="M11-CAP-TRAVEL-e77294311acdc1ac"></a>
- **M11-CAP-TRAVEL-e77294311acdc1ac**: Cost Comparison
  Original IDs: 459

<a id="M11-CAP-TRAVEL-6a5b0dcf47546b75"></a>
- **M11-CAP-TRAVEL-6a5b0dcf47546b75**: Travel Planning
  Original IDs: 459

<a id="M11-CAP-TRAVEL-03854c7efbb9b625"></a>
- **M11-CAP-TRAVEL-03854c7efbb9b625**: Integrated with Medical Tourism Platform.
  Original IDs: 459

<a id="M11-CAP-TRAVEL-98c6527ad1d4fdd2"></a>
- **M11-CAP-TRAVEL-98c6527ad1d4fdd2**: Allows comparison of fertility clinics worldwide.
  Original IDs: 778

<a id="M11-CAP-TRAVEL-f3d993f49bc6debb"></a>
- **M11-CAP-TRAVEL-f3d993f49bc6debb**: Displays
  Original IDs: 778

<a id="M11-CAP-TRAVEL-580c32d823047de1"></a>
- **M11-CAP-TRAVEL-580c32d823047de1**: Country
  Original IDs: 778

<a id="M11-CAP-TRAVEL-e92411fba2438bd2"></a>
- **M11-CAP-TRAVEL-e92411fba2438bd2**: City
  Original IDs: 778

<a id="M11-CAP-TRAVEL-6d6349f08a07e7fa"></a>
- **M11-CAP-TRAVEL-6d6349f08a07e7fa**: Success Rate
  Original IDs: 778

<a id="M11-CAP-TRAVEL-d125699682b71377"></a>
- **M11-CAP-TRAVEL-d125699682b71377**: Cost
  Original IDs: 778

<a id="M11-CAP-TRAVEL-0e03b2c19fb0f947"></a>
- **M11-CAP-TRAVEL-0e03b2c19fb0f947**: Reviews
  Original IDs: 778

<a id="M11-CAP-TRAVEL-44d623e0fc438227"></a>
- **M11-CAP-TRAVEL-44d623e0fc438227**: # Travel Records Table
  Original IDs: 22

<a id="M11-CAP-TRAVEL-2f5fdcca89ef8e56"></a>
- **M11-CAP-TRAVEL-2f5fdcca89ef8e56**: ## Purpose
  Original IDs: 22

<a id="M11-CAP-TRAVEL-6f33acf3afb37064"></a>
- **M11-CAP-TRAVEL-6f33acf3afb37064**: ---
  Original IDs: 22, 117, 177, 459, 778

<a id="M11-CAP-TRAVEL-90dc9b75b60f53a5"></a>
- **M11-CAP-TRAVEL-90dc9b75b60f53a5**: # Fields
  Original IDs: 22

<a id="M11-CAP-TRAVEL-fe49bb0338c4f238"></a>
- **M11-CAP-TRAVEL-fe49bb0338c4f238**: purpose
  Original IDs: 22

<a id="M11-CAP-TRAVEL-2fac6cbf308c244b"></a>
- **M11-CAP-TRAVEL-2fac6cbf308c244b**: # Relationships
  Original IDs: 22

<a id="M11-CAP-TRAVEL-5ba74d8fcc7b20cc"></a>
- **M11-CAP-TRAVEL-5ba74d8fcc7b20cc**: Status
  Original IDs: 22, 117, 177, 459, 778

<a id="M11-CAP-TRAVEL-d5232cbd3a326267"></a>
- **M11-CAP-TRAVEL-d5232cbd3a326267**: Documentation
  Original IDs: 22, 117, 177, 459, 778

<a id="M11-CAP-TRAVEL-966280037845a730"></a>
- **M11-CAP-TRAVEL-966280037845a730**: # Travel Health
  Original IDs: 117

<a id="M11-CAP-TRAVEL-6780fe6f1b894075"></a>
- **M11-CAP-TRAVEL-6780fe6f1b894075**: # Accessible Travel
  Original IDs: 177

<a id="M11-CAP-TRAVEL-141b2acffff08808"></a>
- **M11-CAP-TRAVEL-141b2acffff08808**: # International Dental Tourism
  Original IDs: 459

<a id="M11-CAP-TRAVEL-4fbeeb87456accf5"></a>
- **M11-CAP-TRAVEL-4fbeeb87456accf5**: Supports
  Original IDs: 459

<a id="M11-CAP-TRAVEL-cf5e7d29629b5e0d"></a>
- **M11-CAP-TRAVEL-cf5e7d29629b5e0d**: # International Fertility Tourism
  Original IDs: 778

[Delta migration](../../../audit/master-11/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
