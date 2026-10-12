# CORE-CAP-CONSENT — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: AuthorizationScope, RestrictionPolicy, ConsentEvent, DisclosureDecision. Dependencies: CAP-CONSENT, CAP-DATA, CAP-AUDIT.

Resolve actor/relationship/purpose/jurisdiction → evaluate record/encounter restrictions → minimum-necessary disclosure → audit → invalidate access/cache on expiry/revocation.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-MENTAL-CONFIDENTIALITY

Original IDs: 4849, 5172.

Telecare/transition and element/encounter-level authorization are different responsibilities linked through one consent owner.

Resolve actor/relationship/purpose/jurisdiction → evaluate record/encounter restrictions → minimum-necessary disclosure → audit → invalidate access/cache on expiry/revocation.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-CONSENT-6a1ee0ad3efa4dd7"></a>
- **M04-CAP-CONSENT-6a1ee0ad3efa4dd7**: Support remote mental-health care, enhanced privacy governance and structured transition into adult mental-health services.
  Origin: original 4849

<a id="M04-CAP-CONSENT-feebb407954d04ff"></a>
- **M04-CAP-CONSENT-feebb407954d04ff**: Telecare Functions:
  Origin: original 4849

<a id="M04-CAP-CONSENT-e0d275efdd17a0b5"></a>
- **M04-CAP-CONSENT-e0d275efdd17a0b5**: Video Consultation
  Origin: original 4849

<a id="M04-CAP-CONSENT-72e78c63ba9415f0"></a>
- **M04-CAP-CONSENT-72e78c63ba9415f0**: Remote Psychological Follow-up
  Origin: original 4849

<a id="M04-CAP-CONSENT-05c99f9c3d3d09f9"></a>
- **M04-CAP-CONSENT-05c99f9c3d3d09f9**: Symptom Assessments
  Origin: original 4849

<a id="M04-CAP-CONSENT-b615754ff5b2cb08"></a>
- **M04-CAP-CONSENT-b615754ff5b2cb08**: Medication Review
  Origin: original 4849

<a id="M04-CAP-CONSENT-379091941000b78a"></a>
- **M04-CAP-CONSENT-379091941000b78a**: Therapy Follow-up
  Origin: original 4849

<a id="M04-CAP-CONSENT-f2aa330c0dac89cc"></a>
- **M04-CAP-CONSENT-f2aa330c0dac89cc**: Guardian Participation Controls
  Origin: original 4849

<a id="M04-CAP-CONSENT-1910746a318c9b67"></a>
- **M04-CAP-CONSENT-1910746a318c9b67**: Patient-only Session Context where legally appropriate
  Origin: original 4849

<a id="M04-CAP-CONSENT-576af0299110f685"></a>
- **M04-CAP-CONSENT-576af0299110f685**: Care Coordination
  Origin: original 4849

<a id="M04-CAP-CONSENT-17a169fd20fd2abb"></a>
- **M04-CAP-CONSENT-17a169fd20fd2abb**: Privacy Functions:
  Origin: original 4849

<a id="M04-CAP-CONSENT-92fe6b4d49e74da9"></a>
- **M04-CAP-CONSENT-92fe6b4d49e74da9**: Age-aware Confidentiality
  Origin: original 4849

<a id="M04-CAP-CONSENT-e8b2574751f58b31"></a>
- **M04-CAP-CONSENT-e8b2574751f58b31**: Guardian Access Controls
  Origin: original 4849

<a id="M04-CAP-CONSENT-fb3a9b6e8d1948c6"></a>
- **M04-CAP-CONSENT-fb3a9b6e8d1948c6**: Sensitive Note Segmentation
  Origin: original 4849

<a id="M04-CAP-CONSENT-98cbe9a359f0ba7a"></a>
- **M04-CAP-CONSENT-98cbe9a359f0ba7a**: Purpose-limited Access
  Origin: original 4849

<a id="M04-CAP-CONSENT-0d911135c9ea2dfc"></a>
- **M04-CAP-CONSENT-0d911135c9ea2dfc**: Emergency Override Governance
  Origin: original 4849

<a id="M04-CAP-CONSENT-212090261129aed8"></a>
- **M04-CAP-CONSENT-212090261129aed8**: Consent History
  Origin: original 4849

<a id="M04-CAP-CONSENT-79b63a83bc7d1c15"></a>
- **M04-CAP-CONSENT-79b63a83bc7d1c15**: Audit Trail
  Origin: original 4849

<a id="M04-CAP-CONSENT-22a6639767e0a6d1"></a>
- **M04-CAP-CONSENT-22a6639767e0a6d1**: Transition Functions:
  Origin: original 4849

<a id="M04-CAP-CONSENT-646285a8bb348190"></a>
- **M04-CAP-CONSENT-646285a8bb348190**: Pediatric Mental Health Summary
  Origin: original 4849

<a id="M04-CAP-CONSENT-d8893edb21b7a8cf"></a>
- **M04-CAP-CONSENT-d8893edb21b7a8cf**: Diagnosis History
  Origin: original 4849

<a id="M04-CAP-CONSENT-0cdcf465ec7d12ac"></a>
- **M04-CAP-CONSENT-0cdcf465ec7d12ac**: Medication Exposure
  Origin: original 4849

<a id="M04-CAP-CONSENT-3882fb384c27d0f8"></a>
- **M04-CAP-CONSENT-3882fb384c27d0f8**: Therapy History
  Origin: original 4849

<a id="M04-CAP-CONSENT-f526b61e05777680"></a>
- **M04-CAP-CONSENT-f526b61e05777680**: Hospitalization History
  Origin: original 4849

<a id="M04-CAP-CONSENT-23a329b8baa1834f"></a>
- **M04-CAP-CONSENT-23a329b8baa1834f**: Functional Status
  Origin: original 4849

<a id="M04-CAP-CONSENT-f43a0702ad91f5fb"></a>
- **M04-CAP-CONSENT-f43a0702ad91f5fb**: Current Care Plan
  Origin: original 4849

<a id="M04-CAP-CONSENT-eea812bae63ced56"></a>
- **M04-CAP-CONSENT-eea812bae63ced56**: Adult Provider Handover
  Origin: original 4849

<a id="M04-CAP-CONSENT-112b4157809ba743"></a>
- **M04-CAP-CONSENT-112b4157809ba743**: Provide the privacy and authorization layer required for pediatric mental-health information.
  Origin: original 5172

<a id="M04-CAP-CONSENT-8e96619c8dca4b93"></a>
- **M04-CAP-CONSENT-8e96619c8dca4b93**: Functions:
  Origin: original 5172

<a id="M04-CAP-CONSENT-852356f0b5459732"></a>
- **M04-CAP-CONSENT-852356f0b5459732**: Guardian Authority Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-7a04f275fc86bc8a"></a>
- **M04-CAP-CONSENT-7a04f275fc86bc8a**: Patient Assent
  Origin: original 5172

<a id="M04-CAP-CONSENT-5eb626ec7f09fd11"></a>
- **M04-CAP-CONSENT-5eb626ec7f09fd11**: Patient Consent where applicable
  Origin: original 5172

<a id="M04-CAP-CONSENT-c2289a665200a02a"></a>
- **M04-CAP-CONSENT-c2289a665200a02a**: Confidential Encounter Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-ab175ab25d1e0f95"></a>
- **M04-CAP-CONSENT-ab175ab25d1e0f95**: Information Segmentation
  Origin: original 5172

<a id="M04-CAP-CONSENT-1f206788bbca5e1b"></a>
- **M04-CAP-CONSENT-1f206788bbca5e1b**: Data-sharing Authorization
  Origin: original 5172

<a id="M04-CAP-CONSENT-bccd59dc6044e7c8"></a>
- **M04-CAP-CONSENT-bccd59dc6044e7c8**: Authorization Expiration
  Origin: original 5172

<a id="M04-CAP-CONSENT-c32ed0200636f8aa"></a>
- **M04-CAP-CONSENT-c32ed0200636f8aa**: Authorization Revocation
  Origin: original 5172

<a id="M04-CAP-CONSENT-d007db7d8e2e2787"></a>
- **M04-CAP-CONSENT-d007db7d8e2e2787**: Emergency-access Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-02da4f2828d39387"></a>
- **M04-CAP-CONSENT-02da4f2828d39387**: Legal/Jurisdiction Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-511a1e104b0e0b78"></a>
- **M04-CAP-CONSENT-511a1e104b0e0b78**: Access History
  Origin: original 5172

<a id="M04-CAP-CONSENT-dc20bc176bdee4c8"></a>
- **M04-CAP-CONSENT-dc20bc176bdee4c8**: Permissions:
  Origin: original 5172

<a id="M04-CAP-CONSENT-b3b1511164e136ec"></a>
- **M04-CAP-CONSENT-b3b1511164e136ec**: Patient
  Origin: original 5172

<a id="M04-CAP-CONSENT-3cf669d295d7b82a"></a>
- **M04-CAP-CONSENT-3cf669d295d7b82a**: Parent/Guardian
  Origin: original 5172

<a id="M04-CAP-CONSENT-1cb80d510d94cc13"></a>
- **M04-CAP-CONSENT-1cb80d510d94cc13**: Psychiatrist
  Origin: original 5172

<a id="M04-CAP-CONSENT-e53c3366eb3368a6"></a>
- **M04-CAP-CONSENT-e53c3366eb3368a6**: Psychologist
  Origin: original 5172

<a id="M04-CAP-CONSENT-84b6b68353fd10e8"></a>
- **M04-CAP-CONSENT-84b6b68353fd10e8**: Pediatrician
  Origin: original 5172

<a id="M04-CAP-CONSENT-f3a113e386d9d25a"></a>
- **M04-CAP-CONSENT-f3a113e386d9d25a**: Emergency Clinician
  Origin: original 5172

<a id="M04-CAP-CONSENT-f41d95925fd0aba4"></a>
- **M04-CAP-CONSENT-f41d95925fd0aba4**: Authorized School Recipient Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-f81734a8599b5d82"></a>
- **M04-CAP-CONSENT-f81734a8599b5d82**: Research Access Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-d9209d12def12ae9"></a>
- **M04-CAP-CONSENT-d9209d12def12ae9**: Audit:
  Origin: original 5172

<a id="M04-CAP-CONSENT-ae5010f2a7155383"></a>
- **M04-CAP-CONSENT-ae5010f2a7155383**: Who Accessed
  Origin: original 5172

<a id="M04-CAP-CONSENT-ffb2e110f4df6f7c"></a>
- **M04-CAP-CONSENT-ffb2e110f4df6f7c**: What Was Accessed
  Origin: original 5172

<a id="M04-CAP-CONSENT-d91303e89557830b"></a>
- **M04-CAP-CONSENT-d91303e89557830b**: Why
  Origin: original 5172

<a id="M04-CAP-CONSENT-70573343d3a9b391"></a>
- **M04-CAP-CONSENT-70573343d3a9b391**: When
  Origin: original 5172

<a id="M04-CAP-CONSENT-937328f3f1b3fb17"></a>
- **M04-CAP-CONSENT-937328f3f1b3fb17**: Disclosure Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-4003e535fb7ff0fa"></a>
- **M04-CAP-CONSENT-4003e535fb7ff0fa**: Override Context
  Origin: original 5172

<a id="M04-CAP-CONSENT-6c6b72c61d95ccd8"></a>
- **M04-CAP-CONSENT-6c6b72c61d95ccd8**: Architecture Principle:
  Origin: original 5172

<a id="M04-CAP-CONSENT-d925ef49a23e8b89"></a>
- **M04-CAP-CONSENT-d925ef49a23e8b89**: Access is determined at data-element and encounter level where required rather than treating the entire pediatric record as universally visible.
  Origin: original 5172

<a id="M04-CAP-CONSENT-920a1d230724ecf1"></a>
- **M04-CAP-CONSENT-920a1d230724ecf1**: MVP:
  Origin: original 5172

<a id="M04-CAP-CONSENT-3fec9e727a7538e6"></a>
- **M04-CAP-CONSENT-3fec9e727a7538e6**: CRITICAL
  Origin: original 5172

## Preserved source metadata

<a id="M04-CAP-CONSENT-6510c5c511a879bc"></a>
- **M04-CAP-CONSENT-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-CONSENT-b88b375a44ccd619"></a>
- **M04-CAP-CONSENT-b88b375a44ccd619**: Status:

<a id="M04-CAP-CONSENT-d5232cbd3a326267"></a>
- **M04-CAP-CONSENT-d5232cbd3a326267**: Documentation

<a id="M04-CAP-CONSENT-6f33acf3afb37064"></a>
- **M04-CAP-CONSENT-6f33acf3afb37064**: ---

<a id="M04-CAP-CONSENT-b3604d24a08b400e"></a>
- **M04-CAP-CONSENT-b3604d24a08b400e**: Extended Module v2

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
