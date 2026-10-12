# CORE-CAP-AI — MASTER-10 addendum

Hormone, ultrasound, lab and treatment-timeline analysis is a bounded AI task requiring source/model versions, validation, uncertainty and human disposition. No independent selection, grading, stimulation dose or reproductive decision.

Extends [unchanged MASTER-08 specification](../master08/CAP-AI.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-AI, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-AI-cc6356b415e00b17"></a>
- **M10-CAP-AI-cc6356b415e00b17**: AI assists reproductive treatment monitoring.
  Original IDs: 777

<a id="M10-CAP-AI-0535ebb6ad4f5674"></a>
- **M10-CAP-AI-0535ebb6ad4f5674**: Analyzes
  Original IDs: 777

<a id="M10-CAP-AI-7b40033c1c8e1625"></a>
- **M10-CAP-AI-7b40033c1c8e1625**: Hormones
  Original IDs: 777

<a id="M10-CAP-AI-5032f26f1a690cb2"></a>
- **M10-CAP-AI-5032f26f1a690cb2**: Ultrasound
  Original IDs: 777

<a id="M10-CAP-AI-71f790fdf94f9c10"></a>
- **M10-CAP-AI-71f790fdf94f9c10**: Laboratory Results
  Original IDs: 777

<a id="M10-CAP-AI-9b97c6e8966ca772"></a>
- **M10-CAP-AI-9b97c6e8966ca772**: Treatment Timeline
  Original IDs: 777

<a id="M10-CAP-AI-782ad0677884c83c"></a>
- **M10-CAP-AI-782ad0677884c83c**: # Reproductive AI Assistant
  Original IDs: 777

<a id="M10-CAP-AI-5ba74d8fcc7b20cc"></a>
- **M10-CAP-AI-5ba74d8fcc7b20cc**: Status
  Original IDs: 777

<a id="M10-CAP-AI-d5232cbd3a326267"></a>
- **M10-CAP-AI-d5232cbd3a326267**: Documentation
  Original IDs: 777

<a id="M10-CAP-AI-6f33acf3afb37064"></a>
- **M10-CAP-AI-6f33acf3afb37064**: ---
  Original IDs: 777

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
