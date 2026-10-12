# CORE-CAP-SPECIALTY — MASTER-10 addendum

Female/male/combined/unexplained infertility, stimulation response, pregnancy after assisted reproduction and the specialty workspace are distinct profiles. Preserve follicles/estradiol/medication response and early pregnancy imaging/labs while keeping source ownership and clinician decisions separate. No success guarantee, inferred embryo viability or autonomous stimulation recommendation.

Extends [unchanged MASTER-08 specification](../master08/CAP-SPECIALTY.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Verify patient/specimen/source linkage and independent authorization → capture versioned source-owned context → qualified review → render bounded profile → preserve correction and withdrawal history.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: SourceReference, PatientBinding, EpisodeReference, ProfileRevision. Dependencies: CAP-SPECIALTY, CAP-DATA, CAP-CONSENT, CAP-SECURITY, CAP-AUDIT.

## New source fragments

<a id="M10-CAP-SPECIALTY-d3af434368617d45"></a>
- **M10-CAP-SPECIALTY-d3af434368617d45**: Stores infertility diagnoses.
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-835f37c3ebb6b75b"></a>
- **M10-CAP-SPECIALTY-835f37c3ebb6b75b**: Female Factors
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-3dd7f81ca16c3f04"></a>
- **M10-CAP-SPECIALTY-3dd7f81ca16c3f04**: Male Factors
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-8bf40a14548e8c95"></a>
- **M10-CAP-SPECIALTY-8bf40a14548e8c95**: Combined Factors
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-0f8b98280a0538f0"></a>
- **M10-CAP-SPECIALTY-0f8b98280a0538f0**: Unexplained Infertility
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-7ac700b64b17d11f"></a>
- **M10-CAP-SPECIALTY-7ac700b64b17d11f**: Tracks ovarian stimulation cycles.
  Original IDs: 771

<a id="M10-CAP-SPECIALTY-4289dc7827e23a4f"></a>
- **M10-CAP-SPECIALTY-4289dc7827e23a4f**: Follicle Growth
  Original IDs: 771

<a id="M10-CAP-SPECIALTY-49dff57230c6f6cc"></a>
- **M10-CAP-SPECIALTY-49dff57230c6f6cc**: Estradiol
  Original IDs: 771

<a id="M10-CAP-SPECIALTY-bb1f33938f899a6e"></a>
- **M10-CAP-SPECIALTY-bb1f33938f899a6e**: Medication Response
  Original IDs: 771

<a id="M10-CAP-SPECIALTY-a5879e040aa4403f"></a>
- **M10-CAP-SPECIALTY-a5879e040aa4403f**: Supports pregnancies achieved through assisted reproduction.
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-5b35040d6e704676"></a>
- **M10-CAP-SPECIALTY-5b35040d6e704676**: Early Pregnancy
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-5032f26f1a690cb2"></a>
- **M10-CAP-SPECIALTY-5032f26f1a690cb2**: Ultrasound
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-71f790fdf94f9c10"></a>
- **M10-CAP-SPECIALTY-71f790fdf94f9c10**: Laboratory Results
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-e69b8e91d7214b61"></a>
- **M10-CAP-SPECIALTY-e69b8e91d7214b61**: Provides a complete overview of fertility treatment.
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-f3d993f49bc6debb"></a>
- **M10-CAP-SPECIALTY-f3d993f49bc6debb**: Displays
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-7b40033c1c8e1625"></a>
- **M10-CAP-SPECIALTY-7b40033c1c8e1625**: Hormones
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-baec3852076bf1c2"></a>
- **M10-CAP-SPECIALTY-baec3852076bf1c2**: IVF
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-9e824ea2c4e0ef7f"></a>
- **M10-CAP-SPECIALTY-9e824ea2c4e0ef7f**: Embryos
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-b769af85ada69188"></a>
- **M10-CAP-SPECIALTY-b769af85ada69188**: Medications
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-e5797c17a8280c5f"></a>
- **M10-CAP-SPECIALTY-e5797c17a8280c5f**: Pregnancy Progress
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-e22fe857a3a17db9"></a>
- **M10-CAP-SPECIALTY-e22fe857a3a17db9**: AI Recommendations
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-3f2ee03c609429ec"></a>
- **M10-CAP-SPECIALTY-3f2ee03c609429ec**: Acts as the primary reproductive medicine workspace within the Medical Passport ecosystem.
  Original IDs: 780

<a id="M10-CAP-SPECIALTY-ad40c081f1820f2e"></a>
- **M10-CAP-SPECIALTY-ad40c081f1820f2e**: # Infertility Diagnosis Registry
  Original IDs: 765

<a id="M10-CAP-SPECIALTY-4fbeeb87456accf5"></a>
- **M10-CAP-SPECIALTY-4fbeeb87456accf5**: Supports
  Original IDs: 765, 771

<a id="M10-CAP-SPECIALTY-5ba74d8fcc7b20cc"></a>
- **M10-CAP-SPECIALTY-5ba74d8fcc7b20cc**: Status
  Original IDs: 765, 771, 775, 780

<a id="M10-CAP-SPECIALTY-d5232cbd3a326267"></a>
- **M10-CAP-SPECIALTY-d5232cbd3a326267**: Documentation
  Original IDs: 765, 771, 775, 780

<a id="M10-CAP-SPECIALTY-6f33acf3afb37064"></a>
- **M10-CAP-SPECIALTY-6f33acf3afb37064**: ---
  Original IDs: 765, 771, 775, 780

<a id="M10-CAP-SPECIALTY-dac3f0105b9d8a52"></a>
- **M10-CAP-SPECIALTY-dac3f0105b9d8a52**: # Ovarian Stimulation Monitoring
  Original IDs: 771

<a id="M10-CAP-SPECIALTY-3b37a0174ec2e138"></a>
- **M10-CAP-SPECIALTY-3b37a0174ec2e138**: # Pregnancy After IVF Monitoring
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-20dcf9e08bfc7cd6"></a>
- **M10-CAP-SPECIALTY-20dcf9e08bfc7cd6**: Tracks
  Original IDs: 775

<a id="M10-CAP-SPECIALTY-1dfde8983969ac72"></a>
- **M10-CAP-SPECIALTY-1dfde8983969ac72**: # Comprehensive Reproductive Medicine Dashboard
  Original IDs: 780

[Delta migration](../../../audit/master-10/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
