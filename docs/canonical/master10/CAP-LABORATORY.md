# CORE-CAP-LABORATORY — MASTER-10 addendum

Embryology and hormone observations use separate specimen/result profiles under laboratory ownership. Retain developmental stage/grading, cryopreservation/transfer and embryo/egg/sperm storage identity/custody separately from patient IDs; hormone AMH/LH/FSH/estradiol/progesterone retain units/method/reference/timing. Storage or shared treatment linkage never authorizes disposal, donation, transfer or partner disclosure. Custody and consent state require specialist-validated contracts.

Extends [unchanged MASTER-08 specification](../master08/CAP-LABORATORY.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-LABORATORY, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-LABORATORY-2d681d38c3aaefc2"></a>
- **M10-CAP-LABORATORY-2d681d38c3aaefc2**: Stores embryo information.
  Original IDs: 767

<a id="M10-CAP-LABORATORY-7e44192230be02a2"></a>
- **M10-CAP-LABORATORY-7e44192230be02a2**: Development Stage
  Original IDs: 767

<a id="M10-CAP-LABORATORY-dba7066a268b6f23"></a>
- **M10-CAP-LABORATORY-dba7066a268b6f23**: Grading
  Original IDs: 767

<a id="M10-CAP-LABORATORY-42e8af3059cdaa23"></a>
- **M10-CAP-LABORATORY-42e8af3059cdaa23**: Cryopreservation
  Original IDs: 767

<a id="M10-CAP-LABORATORY-b5c004e6259d340b"></a>
- **M10-CAP-LABORATORY-b5c004e6259d340b**: Transfer History
  Original IDs: 767

<a id="M10-CAP-LABORATORY-d3c2d52814568958"></a>
- **M10-CAP-LABORATORY-d3c2d52814568958**: Displays reproductive hormone trends.
  Original IDs: 773

<a id="M10-CAP-LABORATORY-3568af0ff32502f8"></a>
- **M10-CAP-LABORATORY-3568af0ff32502f8**: AMH
  Original IDs: 773

<a id="M10-CAP-LABORATORY-fbfd0eed59f10498"></a>
- **M10-CAP-LABORATORY-fbfd0eed59f10498**: LH
  Original IDs: 773

<a id="M10-CAP-LABORATORY-37b35a2f4dc4e7c5"></a>
- **M10-CAP-LABORATORY-37b35a2f4dc4e7c5**: FSH
  Original IDs: 773

<a id="M10-CAP-LABORATORY-49dff57230c6f6cc"></a>
- **M10-CAP-LABORATORY-49dff57230c6f6cc**: Estradiol
  Original IDs: 773

<a id="M10-CAP-LABORATORY-2f87863459d7d729"></a>
- **M10-CAP-LABORATORY-2f87863459d7d729**: Progesterone
  Original IDs: 773

<a id="M10-CAP-LABORATORY-4f370eac5e1cee93"></a>
- **M10-CAP-LABORATORY-4f370eac5e1cee93**: Stores frozen embryos and gametes.
  Original IDs: 774

<a id="M10-CAP-LABORATORY-9e824ea2c4e0ef7f"></a>
- **M10-CAP-LABORATORY-9e824ea2c4e0ef7f**: Embryos
  Original IDs: 774

<a id="M10-CAP-LABORATORY-47a0fa03c1f96d3d"></a>
- **M10-CAP-LABORATORY-47a0fa03c1f96d3d**: Eggs
  Original IDs: 774

<a id="M10-CAP-LABORATORY-99449419ec92652a"></a>
- **M10-CAP-LABORATORY-99449419ec92652a**: Sperm
  Original IDs: 774

<a id="M10-CAP-LABORATORY-18427afb0c9b45b2"></a>
- **M10-CAP-LABORATORY-18427afb0c9b45b2**: Storage Information
  Original IDs: 774

<a id="M10-CAP-LABORATORY-3eb6309d77e2fbe2"></a>
- **M10-CAP-LABORATORY-3eb6309d77e2fbe2**: # Embryo Registry
  Original IDs: 767

<a id="M10-CAP-LABORATORY-4fbeeb87456accf5"></a>
- **M10-CAP-LABORATORY-4fbeeb87456accf5**: Supports
  Original IDs: 767, 773, 774

<a id="M10-CAP-LABORATORY-5ba74d8fcc7b20cc"></a>
- **M10-CAP-LABORATORY-5ba74d8fcc7b20cc**: Status
  Original IDs: 767, 773, 774

<a id="M10-CAP-LABORATORY-d5232cbd3a326267"></a>
- **M10-CAP-LABORATORY-d5232cbd3a326267**: Documentation
  Original IDs: 767, 773, 774

<a id="M10-CAP-LABORATORY-6f33acf3afb37064"></a>
- **M10-CAP-LABORATORY-6f33acf3afb37064**: ---
  Original IDs: 767, 773, 774

<a id="M10-CAP-LABORATORY-0c2317df648b72cf"></a>
- **M10-CAP-LABORATORY-0c2317df648b72cf**: # Reproductive Hormone Dashboard
  Original IDs: 773

<a id="M10-CAP-LABORATORY-21a6ba10d0ba7f39"></a>
- **M10-CAP-LABORATORY-21a6ba10d0ba7f39**: # Cryopreservation Registry
  Original IDs: 774

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
