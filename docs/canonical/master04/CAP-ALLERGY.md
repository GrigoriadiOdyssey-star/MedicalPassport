# CORE-CAP-ALLERGY — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: AllergyLabel, ReactionRecord, DiagnosticEvidence, DelabelingDecision. Dependencies: CAP-ALLERGY, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Preserve historical label → link reaction/evidence and uncertainty → specialist decision → attributable label revision → authorized downstream notification.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### CAN-ALLERGY-LABEL

Original IDs: 1115, 4416, 4418.

Retain original label, suspected/confirmed state, drug/class, reaction/timing/severity, alternatives, challenge and specialist decision. Never silently erase history.

Capture historical label → assess reaction/diagnostic evidence → specialist conclusion → attributable label revision → notify authorized consumers.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-ALLERGY-64c476c60a6de16c"></a>
- **M04-CAP-ALLERGY-64c476c60a6de16c**: Tracks medication allergies.
  Origin: original 1115

<a id="M04-CAP-ALLERGY-e86927e88cd6559e"></a>
- **M04-CAP-ALLERGY-e86927e88cd6559e**: Drug
  Origin: original 1115

<a id="M04-CAP-ALLERGY-535d89ff4b4f1e99"></a>
- **M04-CAP-ALLERGY-535d89ff4b4f1e99**: Reaction
  Origin: original 1115, original 4416

<a id="M04-CAP-ALLERGY-0dbeacb9f9ac3f6a"></a>
- **M04-CAP-ALLERGY-0dbeacb9f9ac3f6a**: Severity
  Origin: original 1115, original 4416

<a id="M04-CAP-ALLERGY-2e49a0f342fb8c56"></a>
- **M04-CAP-ALLERGY-2e49a0f342fb8c56**: Alternatives
  Origin: original 1115

<a id="M04-CAP-ALLERGY-8588890db847e7cb"></a>
- **M04-CAP-ALLERGY-8588890db847e7cb**: Maintains structured suspected and confirmed medication allergy records.
  Origin: original 4416

<a id="M04-CAP-ALLERGY-3cfa39200ce0ea10"></a>
- **M04-CAP-ALLERGY-3cfa39200ce0ea10**: Medication
  Origin: original 4416

<a id="M04-CAP-ALLERGY-5a5f8d8a5ff7582c"></a>
- **M04-CAP-ALLERGY-5a5f8d8a5ff7582c**: Drug Class
  Origin: original 4416

<a id="M04-CAP-ALLERGY-03bf1582655475eb"></a>
- **M04-CAP-ALLERGY-03bf1582655475eb**: Timing
  Origin: original 4416

<a id="M04-CAP-ALLERGY-0207549b28719905"></a>
- **M04-CAP-ALLERGY-0207549b28719905**: Treatment
  Origin: original 4416

<a id="M04-CAP-ALLERGY-0a6d5ea84e206912"></a>
- **M04-CAP-ALLERGY-0a6d5ea84e206912**: Diagnostic Evaluation
  Origin: original 4416

<a id="M04-CAP-ALLERGY-9b5eba133cbaa884"></a>
- **M04-CAP-ALLERGY-9b5eba133cbaa884**: Confirmation Status
  Origin: original 4416

<a id="M04-CAP-ALLERGY-71a3a3c446f77971"></a>
- **M04-CAP-ALLERGY-71a3a3c446f77971**: Prevents unverified allergy labels from being treated as equivalent to confirmed allergy.
  Origin: original 4416

<a id="M04-CAP-ALLERGY-1aee9b9472dd2ede"></a>
- **M04-CAP-ALLERGY-1aee9b9472dd2ede**: Supports professionally verified removal or modification of incorrect drug-allergy labels.
  Origin: original 4418

<a id="M04-CAP-ALLERGY-7419debc73567506"></a>
- **M04-CAP-ALLERGY-7419debc73567506**: Maintains
  Origin: original 4418

<a id="M04-CAP-ALLERGY-9c20e4ca5449e704"></a>
- **M04-CAP-ALLERGY-9c20e4ca5449e704**: Original Label
  Origin: original 4418

<a id="M04-CAP-ALLERGY-d0834c181db5be32"></a>
- **M04-CAP-ALLERGY-d0834c181db5be32**: Diagnostic Evidence
  Origin: original 4418

<a id="M04-CAP-ALLERGY-333c215d53b310b3"></a>
- **M04-CAP-ALLERGY-333c215d53b310b3**: Challenge Results
  Origin: original 4418

<a id="M04-CAP-ALLERGY-36fc909108ee2f27"></a>
- **M04-CAP-ALLERGY-36fc909108ee2f27**: Specialist Decision
  Origin: original 4418

<a id="M04-CAP-ALLERGY-69e2e6f2cbfb2a8f"></a>
- **M04-CAP-ALLERGY-69e2e6f2cbfb2a8f**: New Status
  Origin: original 4418

<a id="M04-CAP-ALLERGY-703ea7dbc5d7a043"></a>
- **M04-CAP-ALLERGY-703ea7dbc5d7a043**: Date
  Origin: original 4418

<a id="M04-CAP-ALLERGY-be0cbe3a94d5a15a"></a>
- **M04-CAP-ALLERGY-be0cbe3a94d5a15a**: Audit History
  Origin: original 4418

<a id="M04-CAP-ALLERGY-fe2a73ebe66aba2c"></a>
- **M04-CAP-ALLERGY-fe2a73ebe66aba2c**: Previous records remain traceable.
  Origin: original 4418

## Preserved source metadata

<a id="M04-CAP-ALLERGY-4fbeeb87456accf5"></a>
- **M04-CAP-ALLERGY-4fbeeb87456accf5**: Supports

<a id="M04-CAP-ALLERGY-5ba74d8fcc7b20cc"></a>
- **M04-CAP-ALLERGY-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-ALLERGY-d5232cbd3a326267"></a>
- **M04-CAP-ALLERGY-d5232cbd3a326267**: Documentation

<a id="M04-CAP-ALLERGY-6f33acf3afb37064"></a>
- **M04-CAP-ALLERGY-6f33acf3afb37064**: ---

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
