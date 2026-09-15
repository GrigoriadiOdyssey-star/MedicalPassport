# CORE-CAP-ENCOUNTER — MASTER-10 addendum

IVF cycles link stimulation, retrieval, fertilization and transfer as distinct procedures. Preserve retrieval count/quality/notes and transfer date/grade/physician notes with source version and specimen linkage. Count/grade does not establish suitability, consent or transfer authorization.

Extends [unchanged MASTER-08 specification](../master08/CAP-ENCOUNTER.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-ENCOUNTER, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-ENCOUNTER-db7edbbf09f663c6"></a>
- **M10-CAP-ENCOUNTER-db7edbbf09f663c6**: Stores in vitro fertilization treatment history.
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-b858b78dcd5ed9ca"></a>
- **M10-CAP-ENCOUNTER-b858b78dcd5ed9ca**: Stimulation
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-34829087d2d9b447"></a>
- **M10-CAP-ENCOUNTER-34829087d2d9b447**: Egg Retrieval
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-4b40812dc9c94bb9"></a>
- **M10-CAP-ENCOUNTER-4b40812dc9c94bb9**: Fertilization
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-e3c75140386562e4"></a>
- **M10-CAP-ENCOUNTER-e3c75140386562e4**: Embryo Transfer
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-bd1c3e8adb48ad5b"></a>
- **M10-CAP-ENCOUNTER-bd1c3e8adb48ad5b**: Tracks oocyte retrieval procedures.
  Original IDs: 768

<a id="M10-CAP-ENCOUNTER-b266eb550530399d"></a>
- **M10-CAP-ENCOUNTER-b266eb550530399d**: Number Retrieved
  Original IDs: 768

<a id="M10-CAP-ENCOUNTER-fbaf1cf78a982e74"></a>
- **M10-CAP-ENCOUNTER-fbaf1cf78a982e74**: Quality
  Original IDs: 768

<a id="M10-CAP-ENCOUNTER-734fba275d46f333"></a>
- **M10-CAP-ENCOUNTER-734fba275d46f333**: Procedure Notes
  Original IDs: 768

<a id="M10-CAP-ENCOUNTER-ed058f76a46ae094"></a>
- **M10-CAP-ENCOUNTER-ed058f76a46ae094**: Stores embryo transfer procedures.
  Original IDs: 769

<a id="M10-CAP-ENCOUNTER-9989db3c868bfcee"></a>
- **M10-CAP-ENCOUNTER-9989db3c868bfcee**: Transfer Date
  Original IDs: 769

<a id="M10-CAP-ENCOUNTER-6c551171dbdfd703"></a>
- **M10-CAP-ENCOUNTER-6c551171dbdfd703**: Embryo Grade
  Original IDs: 769

<a id="M10-CAP-ENCOUNTER-6864b968505141fb"></a>
- **M10-CAP-ENCOUNTER-6864b968505141fb**: Physician Notes
  Original IDs: 769

<a id="M10-CAP-ENCOUNTER-a03ffa8dc573799d"></a>
- **M10-CAP-ENCOUNTER-a03ffa8dc573799d**: # IVF Treatment Registry
  Original IDs: 766

<a id="M10-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M10-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports
  Original IDs: 766, 768, 769

<a id="M10-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M10-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status
  Original IDs: 766, 768, 769

<a id="M10-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M10-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation
  Original IDs: 766, 768, 769

<a id="M10-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M10-CAP-ENCOUNTER-6f33acf3afb37064**: ---
  Original IDs: 766, 768, 769

<a id="M10-CAP-ENCOUNTER-4ceb9ca5a3baadc1"></a>
- **M10-CAP-ENCOUNTER-4ceb9ca5a3baadc1**: # Egg Retrieval Monitoring
  Original IDs: 768

<a id="M10-CAP-ENCOUNTER-33505285cac0e12d"></a>
- **M10-CAP-ENCOUNTER-33505285cac0e12d**: # Embryo Transfer Registry
  Original IDs: 769

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
