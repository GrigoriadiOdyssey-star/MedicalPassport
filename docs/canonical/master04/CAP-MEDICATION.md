# CORE-CAP-MEDICATION — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: MedicationStatement, ExposureEpisode, Reconciliation, AdministrationReference. Dependencies: CAP-MEDICATION, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Capture reported/prescribed/administered exposure as distinct evidence → reconcile with author/version → monitor response and changes → preserve correction history; prescription/pharmacy/administration retain authority.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-IMMUNE-REPLACEMENT

Original IDs: 996, 4441, 5015.

IVIG/SCIG therapy shares product/route/exposure tracking; retain biological therapy as a separate subtype, infusion reactions, home care and product changes.

Capture reported/prescribed/administered exposure as distinct evidence → reconcile with author/version → monitor response and changes → preserve correction history; prescription/pharmacy/administration retain authority.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-MEDICATION-dbbef1d6c6d47668"></a>
- **M04-CAP-MEDICATION-dbbef1d6c6d47668**: Tracks immunotherapy.
  Origin: original 996

<a id="M04-CAP-MEDICATION-43f721077b5df4f8"></a>
- **M04-CAP-MEDICATION-43f721077b5df4f8**: IVIG
  Origin: original 996

<a id="M04-CAP-MEDICATION-17316a7be7efdeef"></a>
- **M04-CAP-MEDICATION-17316a7be7efdeef**: SCIG
  Origin: original 996

<a id="M04-CAP-MEDICATION-3ba92a774d0545d8"></a>
- **M04-CAP-MEDICATION-3ba92a774d0545d8**: Biological Therapy
  Origin: original 996

<a id="M04-CAP-MEDICATION-bf3e89de7b15207a"></a>
- **M04-CAP-MEDICATION-bf3e89de7b15207a**: Response Monitoring
  Origin: original 996

<a id="M04-CAP-MEDICATION-b96780e8a37f8a94"></a>
- **M04-CAP-MEDICATION-b96780e8a37f8a94**: Supports clinician-supervised immunoglobulin replacement.
  Origin: original 4441

<a id="M04-CAP-MEDICATION-93f9c381ca40e635"></a>
- **M04-CAP-MEDICATION-93f9c381ca40e635**: Product
  Origin: original 4441, original 5015

<a id="M04-CAP-MEDICATION-6ffbfeb83a373123"></a>
- **M04-CAP-MEDICATION-6ffbfeb83a373123**: Route
  Origin: original 4441, original 5015

<a id="M04-CAP-MEDICATION-364a4c7e3ce06ed8"></a>
- **M04-CAP-MEDICATION-364a4c7e3ce06ed8**: Dose
  Origin: original 4441, original 5015

<a id="M04-CAP-MEDICATION-e0af32ed792f0c30"></a>
- **M04-CAP-MEDICATION-e0af32ed792f0c30**: Administration
  Origin: original 4441

<a id="M04-CAP-MEDICATION-3b2c3ca949f16a52"></a>
- **M04-CAP-MEDICATION-3b2c3ca949f16a52**: Immunoglobulin Levels
  Origin: original 4441

<a id="M04-CAP-MEDICATION-a01ae28bdb2a917e"></a>
- **M04-CAP-MEDICATION-a01ae28bdb2a917e**: Infection Frequency
  Origin: original 4441

<a id="M04-CAP-MEDICATION-356804248c951f56"></a>
- **M04-CAP-MEDICATION-356804248c951f56**: Adverse Reactions
  Origin: original 4441

<a id="M04-CAP-MEDICATION-e9bb1b7104aa25cd"></a>
- **M04-CAP-MEDICATION-e9bb1b7104aa25cd**: Treatment Response
  Origin: original 4441, original 5015

<a id="M04-CAP-MEDICATION-333ff7952ce0d90e"></a>
- **M04-CAP-MEDICATION-333ff7952ce0d90e**: Manage intravenous and subcutaneous immunoglobulin replacement across the complete treatment lifecycle.
  Origin: original 5015

<a id="M04-CAP-MEDICATION-2cf2b84939a9ee1d"></a>
- **M04-CAP-MEDICATION-2cf2b84939a9ee1d**: Treatment Indication
  Origin: original 5015

<a id="M04-CAP-MEDICATION-267d300e14857db1"></a>
- **M04-CAP-MEDICATION-267d300e14857db1**: Frequency
  Origin: original 5015

<a id="M04-CAP-MEDICATION-3388a209063c3833"></a>
- **M04-CAP-MEDICATION-3388a209063c3833**: Weight Context
  Origin: original 5015

<a id="M04-CAP-MEDICATION-6cdd415dc77e2876"></a>
- **M04-CAP-MEDICATION-6cdd415dc77e2876**: Infusion Schedule
  Origin: original 5015

<a id="M04-CAP-MEDICATION-15b3deadf07f7595"></a>
- **M04-CAP-MEDICATION-15b3deadf07f7595**: Pre-treatment Laboratory Context
  Origin: original 5015

<a id="M04-CAP-MEDICATION-dc44066741ba0f64"></a>
- **M04-CAP-MEDICATION-dc44066741ba0f64**: Infection Burden
  Origin: original 5015

<a id="M04-CAP-MEDICATION-2d92d631f6313620"></a>
- **M04-CAP-MEDICATION-2d92d631f6313620**: Trough Level Context
  Origin: original 5015

<a id="M04-CAP-MEDICATION-fdd43c7cf6dc04d2"></a>
- **M04-CAP-MEDICATION-fdd43c7cf6dc04d2**: Home Therapy
  Origin: original 5015

<a id="M04-CAP-MEDICATION-349391face89942f"></a>
- **M04-CAP-MEDICATION-349391face89942f**: Administration Record
  Origin: original 5015

<a id="M04-CAP-MEDICATION-861181876bcc3ff4"></a>
- **M04-CAP-MEDICATION-861181876bcc3ff4**: Adverse Reaction
  Origin: original 5015

<a id="M04-CAP-MEDICATION-6b4017a202a4f345"></a>
- **M04-CAP-MEDICATION-6b4017a202a4f345**: Product Change
  Origin: original 5015

<a id="M04-CAP-MEDICATION-96c457a9cf29c342"></a>
- **M04-CAP-MEDICATION-96c457a9cf29c342**: Long-term Outcomes
  Origin: original 5015

<a id="M04-CAP-MEDICATION-bbf2edbbfacad60e"></a>
- **M04-CAP-MEDICATION-bbf2edbbfacad60e**: Safety Functions:
  Origin: original 5015

<a id="M04-CAP-MEDICATION-24542e39d8206fb2"></a>
- **M04-CAP-MEDICATION-24542e39d8206fb2**: Product Traceability
  Origin: original 5015

<a id="M04-CAP-MEDICATION-de419797b065c009"></a>
- **M04-CAP-MEDICATION-de419797b065c009**: Infusion Reaction History
  Origin: original 5015

<a id="M04-CAP-MEDICATION-848bc1433ce056c3"></a>
- **M04-CAP-MEDICATION-848bc1433ce056c3**: Allergy Context
  Origin: original 5015

<a id="M04-CAP-MEDICATION-a3534f153cca731c"></a>
- **M04-CAP-MEDICATION-a3534f153cca731c**: Dose History
  Origin: original 5015

<a id="M04-CAP-MEDICATION-be3e9a8964759849"></a>
- **M04-CAP-MEDICATION-be3e9a8964759849**: Missed Treatment Detection
  Origin: original 5015

<a id="M04-CAP-MEDICATION-570923469cb5987a"></a>
- **M04-CAP-MEDICATION-570923469cb5987a**: Clinician-defined Monitoring
  Origin: original 5015

<a id="M04-CAP-MEDICATION-43a67d79860bcb43"></a>
- **M04-CAP-MEDICATION-43a67d79860bcb43**: HIGH
  Origin: original 5015

## Preserved source metadata

<a id="M04-CAP-MEDICATION-ab6d0fa9eac0da47"></a>
- **M04-CAP-MEDICATION-ab6d0fa9eac0da47**: # Pediatric Immunotherapy Registry

<a id="M04-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M04-CAP-MEDICATION-4fbeeb87456accf5**: Supports

<a id="M04-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M04-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M04-CAP-MEDICATION-d5232cbd3a326267**: Documentation

<a id="M04-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M04-CAP-MEDICATION-6f33acf3afb37064**: ---

<a id="M04-CAP-MEDICATION-20dcf9e08bfc7cd6"></a>
- **M04-CAP-MEDICATION-20dcf9e08bfc7cd6**: Tracks

<a id="M04-CAP-MEDICATION-6510c5c511a879bc"></a>
- **M04-CAP-MEDICATION-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-MEDICATION-b34f593f0f83a1d1"></a>
- **M04-CAP-MEDICATION-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-MEDICATION-fd85b703c00f8755"></a>
- **M04-CAP-MEDICATION-fd85b703c00f8755**: MVP Relevance:

<a id="M04-CAP-MEDICATION-b88b375a44ccd619"></a>
- **M04-CAP-MEDICATION-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
