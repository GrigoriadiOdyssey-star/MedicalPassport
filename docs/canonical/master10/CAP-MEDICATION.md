# CORE-CAP-MEDICATION — MASTER-10 addendum

FSH, LH, hCG, progesterone, estrogen and GnRH analogue exposure belongs to shared medication history; drug class alone cannot determine actual ingredient/form/strength/dose or authorize treatment. Prescribing and administration remain separate owners.

Extends [unchanged MASTER-08 specification](../master08/CAP-MEDICATION.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-MEDICATION, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-MEDICATION-fe9de08e531ab937"></a>
- **M10-CAP-MEDICATION-fe9de08e531ab937**: Tracks reproductive medicine medications.
  Original IDs: 770

<a id="M10-CAP-MEDICATION-37b35a2f4dc4e7c5"></a>
- **M10-CAP-MEDICATION-37b35a2f4dc4e7c5**: FSH
  Original IDs: 770

<a id="M10-CAP-MEDICATION-fbfd0eed59f10498"></a>
- **M10-CAP-MEDICATION-fbfd0eed59f10498**: LH
  Original IDs: 770

<a id="M10-CAP-MEDICATION-543b0085a8e98d30"></a>
- **M10-CAP-MEDICATION-543b0085a8e98d30**: hCG
  Original IDs: 770

<a id="M10-CAP-MEDICATION-2f87863459d7d729"></a>
- **M10-CAP-MEDICATION-2f87863459d7d729**: Progesterone
  Original IDs: 770

<a id="M10-CAP-MEDICATION-3f55ecdbec07eb48"></a>
- **M10-CAP-MEDICATION-3f55ecdbec07eb48**: Estrogen
  Original IDs: 770

<a id="M10-CAP-MEDICATION-2de08d4225f61134"></a>
- **M10-CAP-MEDICATION-2de08d4225f61134**: GnRH Analogues
  Original IDs: 770

<a id="M10-CAP-MEDICATION-ae8336324478e370"></a>
- **M10-CAP-MEDICATION-ae8336324478e370**: # Fertility Medication Manager
  Original IDs: 770

<a id="M10-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M10-CAP-MEDICATION-4fbeeb87456accf5**: Supports
  Original IDs: 770

<a id="M10-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M10-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status
  Original IDs: 770

<a id="M10-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M10-CAP-MEDICATION-d5232cbd3a326267**: Documentation
  Original IDs: 770

<a id="M10-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M10-CAP-MEDICATION-6f33acf3afb37064**: ---
  Original IDs: 770

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
