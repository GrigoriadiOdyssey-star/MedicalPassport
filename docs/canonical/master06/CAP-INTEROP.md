# CORE-CAP-INTEROP — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: ConnectorProfile, MappingCandidate, MappingRelease, ImportBatch, LossReport. Dependencies: CAP-INTEROP, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-IDENTITY, CAP-AI.

Authorized read-only discovery → format/schema profiling → proposed concept mapping → loss/conflict validation → sandbox → independent signed release → quarantine/import-owner acceptance → drift suspension and attributable correction.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M04-STRATEGIC-INTEROP

Original IDs: 1356, 1359.

Named protocols and external-system intent overlap the proposed adaptive connector; discovery, mapping/loss review and signed releases extend the existing integration owner.

Authorized read-only discovery → format/schema profiling → proposed concept mapping → loss/conflict validation → sandbox → independent signed release → quarantine/import-owner acceptance → drift suspension and attributable correction.

## Integrated extension decisions

- EXT-INTEROP: INTEGRATED at documentation scope. Existing protocol/connector intent is extended by authorized discovery, proposed semantic mapping, loss reports, independent approval and rollback. A protocol name never establishes partner conformance.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-INTEROP-f7bb6e6ef0964f39"></a>
- **M06-CAP-INTEROP-f7bb6e6ef0964f39**: Ensures interoperability between healthcare systems.
  Origin: original 1356

<a id="M06-CAP-INTEROP-a6a8c99e93773aba"></a>
- **M06-CAP-INTEROP-a6a8c99e93773aba**: HL7
  Origin: original 1356

<a id="M06-CAP-INTEROP-5faa423c7f424870"></a>
- **M06-CAP-INTEROP-5faa423c7f424870**: FHIR
  Origin: original 1356

<a id="M06-CAP-INTEROP-08934a82877646ee"></a>
- **M06-CAP-INTEROP-08934a82877646ee**: DICOM
  Origin: original 1356

<a id="M06-CAP-INTEROP-8bc74ba95085a16a"></a>
- **M06-CAP-INTEROP-8bc74ba95085a16a**: CDA
  Origin: original 1356

<a id="M06-CAP-INTEROP-4e3e5ab912493a4c"></a>
- **M06-CAP-INTEROP-4e3e5ab912493a4c**: Allows integration with external healthcare platforms.
  Origin: original 1359

<a id="M06-CAP-INTEROP-25efaec3e4753bc1"></a>
- **M06-CAP-INTEROP-25efaec3e4753bc1**: National EMR
  Origin: original 1359

<a id="M06-CAP-INTEROP-9ea29df5a792bdfe"></a>
- **M06-CAP-INTEROP-9ea29df5a792bdfe**: Hospital Systems
  Origin: original 1359

<a id="M06-CAP-INTEROP-08a98af399132da7"></a>
- **M06-CAP-INTEROP-08a98af399132da7**: Research Networks
  Origin: original 1359

<a id="M06-CAP-INTEROP-8412428c60f22adf"></a>
- **M06-CAP-INTEROP-8412428c60f22adf**: # Adaptive Interoperability / Self-adapting Connector Intelligence
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-a8a7b6726275c511"></a>
- **M06-CAP-INTEROP-a8a7b6726275c511**: Revision 2026-09-14 · EXT-INTEROP · DRAFT_SPECIFICATION · CAP-INTEROP · integration and transformation / external clinical systems · roadmap RESEARCH.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-b853e02b0059a580"></a>
- **M06-CAP-INTEROP-b853e02b0059a580**: ## Purpose and overlap
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-af31de914cc42d91"></a>
- **M06-CAP-INTEROP-af31de914cc42d91**: Reduce manual integration work while preserving clinical meaning and source authority. Existing 1356 lists HL7/FHIR/DICOM/CDA and 1359 universal connectors; numerous synchronization titles describe intent. They do not specify safe discovery, semantic validation, loss budgets and release control. Extend this owner using the [search dossier](../../../audit/gapfill/new_module_proposals.json); do not treat an absent title as proof of an absent capability.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-f7e7b991b5c8b319"></a>
- **M06-CAP-INTEROP-f7e7b991b5c8b319**: ## Actors, permissions and supported inputs
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-d45001225623becb"></a>
- **M06-CAP-INTEROP-d45001225623becb**: Partner administrator authorizes scope and read-only credentials; an integration engineer inspects schemas; a terminology steward adjudicates concepts; the clinical data owner approves clinical semantics; an operator deploys an approved version. Approval policy must prevent a generated connector from approving itself.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-98b6bb95b9eed4a4"></a>
- **M06-CAP-INTEROP-98b6bb95b9eed4a4**: Accept FHIR, HL7 v2, CDA, DICOM, CSV, JSON, XML, REST APIs, authorized database exports and vendor-specific formats where technically and legally permitted. Format recognition is not conformance. Each partner declares protocol/version, purpose, data authority, direction, frequency, volume and authorization boundary. No unauthorised scanning, external writes, destructive SQL or automatic schema migration.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-08ed9f46b4c024c5"></a>
- **M06-CAP-INTEROP-08ed9f46b4c024c5**: ## Controlled pipeline
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-174bc1874a459a65"></a>
- **M06-CAP-INTEROP-174bc1874a459a65**: 1. Read-only Connector Discovery inventories only authorized endpoints/files.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-a1aaacd0c1d688a8"></a>
- **M06-CAP-INTEROP-a1aaacd0c1d688a8**: 2. Format Detection identifies candidate encodings, delimiters/protocols and versions.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-59a838456576941a"></a>
- **M06-CAP-INTEROP-59a838456576941a**: 3. Schema Profiling records types, cardinalities, missingness, units, identifiers and sample provenance in a restricted staging area.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-8e8b7009bc02fcda"></a>
- **M06-CAP-INTEROP-8e8b7009bc02fcda**: 4. Semantic Mapping proposes source concepts and meaning; Terminology Mapping pins systems/releases; FHIR Mapping selects explicit profiles and extensions.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-005ba9161fb2e50a"></a>
- **M06-CAP-INTEROP-005ba9161fb2e50a**: 5. Validation checks syntax, identity/tenant, units, time zones, value sets, cardinality, required fields and authority.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-a7c766d14e99ab62"></a>
- **M06-CAP-INTEROP-a7c766d14e99ab62**: 6. Conflict Detection separates duplicate messages, patient ambiguity, contradictory results and corrected versions.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-e42718d1895a9ab5"></a>
- **M06-CAP-INTEROP-e42718d1895a9ab5**: 7. Transformation produces quarantined canonical candidates plus loss reports.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-894347025fe68ee6"></a>
- **M06-CAP-INTEROP-894347025fe68ee6**: 8. Sandbox Testing uses synthetic/de-identified approved fixtures, error cases and round-trip checks.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-6273b7b26ca2365d"></a>
- **M06-CAP-INTEROP-6273b7b26ca2365d**: 9. Human Approval signs exact schema/mapping/connector versions and a bounded release scope.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-0d7fe1b3278cfd0b"></a>
- **M06-CAP-INTEROP-0d7fe1b3278cfd0b**: 10. Connector Registry publishes the signed release; Monitoring detects drift, loss, rejection and reconciliation failures.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-5938e79d7c749867"></a>
- **M06-CAP-INTEROP-5938e79d7c749867**: 11. Rollback stops intake and restores a known connector release; already accepted clinical records require attributable correction/compensation, never silent deletion.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-302da5da1010f6a6"></a>
- **M06-CAP-INTEROP-302da5da1010f6a6**: ## Canonical contract and ownership
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-ebc735fc5f01c464"></a>
- **M06-CAP-INTEROP-ebc735fc5f01c464**: CAP-INTEROP owns ConnectorProfile, MappingCandidate, MappingRelease, ImportBatch and LossReport. Clinical owners retain validated facts. MappingCandidate contains source field/path, source schema hash, target concept/profile, transformation, confidence method/value, evidence source, terminology release, validation state, reviewer decision, approval scope and version. Confidence alone never authorizes import.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-0c0ca6000980f655"></a>
- **M06-CAP-INTEROP-0c0ca6000980f655**: ImportBatch records input digest, partner/message identity, patient-match result, mapping release, item outcomes and idempotency key. A write candidate must reference approved source authority, validated mapping and current release. The clinical owner revalidates and accepts it; the connector cannot unilaterally overwrite the source of truth.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-d02c4f9cc336f7c2"></a>
- **M06-CAP-INTEROP-d02c4f9cc336f7c2**: ## Interfaces and events
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-53fe4e0467b255f3"></a>
- **M06-CAP-INTEROP-53fe4e0467b255f3**: Proposed commands: discoverAuthorizedSchema, proposeMapping, validateMapping, runSandbox, approveConnectorRelease, stageImport, reconcileBatch, suspendConnector. Signed approvals bind artifact hashes. Events MappingProposed, ValidationFailed, ConnectorReleaseApproved, ImportQuarantined, ImportAccepted and ConnectorDriftDetected contain identifiers and counts.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-71ec6ad7b6e8fc3c"></a>
- **M06-CAP-INTEROP-71ec6ad7b6e8fc3c**: Return AMBIGUOUS_PATIENT, UNKNOWN_UNIT, LOSS_EXCEEDS_POLICY, UNAPPROVED_MAPPING, SCHEMA_DRIFT or STALE_RELEASE as appropriate. Per-item quarantine must not mask batch failures. Retries use stable partner event IDs and source versions. Out-of-order corrections retain linkage to earlier results.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-c46fe28cb6e44a19"></a>
- **M06-CAP-INTEROP-c46fe28cb6e44a19**: ## Self-adaptation, AI and security
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-b19abe7610981ee4"></a>
- **M06-CAP-INTEROP-b19abe7610981ee4**: AI can propose probable concepts, missing-field handling and candidate connector code/tests. Generated code is untrusted: sandbox it without production credentials, review dependencies and prevent network escape. It cannot approve its own test expectations. Unknown or incompatible semantics remain unresolved. Round-trip tests compare both retained fields and clinically meaningful semantics; where reverse conversion is impossible, record explicit loss and block or require approved limits.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-a38f08efea7899f5"></a>
- **M06-CAP-INTEROP-a38f08efea7899f5**: Use secret management outside repository, least privilege, transport encryption, restricted staging retention, access audit, consent/purpose checks and jurisdiction controls. Logs include schema/release hashes and rejection counts, not sample PHI. Dependencies CAP-DATA, CAP-IDENTITY, CAP-CONSENT, CAP-AI, CAP-AUDIT. Twin/AI consumers see accepted typed records only.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-f4b816255574bbb9"></a>
- **M06-CAP-INTEROP-f4b816255574bbb9**: ## Acceptance and open gates
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-33b0a3278b58b42d"></a>
- **M06-CAP-INTEROP-33b0a3278b58b42d**: Unknown fields cannot enter clinical truth unvalidated. Unit/time/identity corruption is detected; schema drift suspends affected mappings; replay creates no duplicate fact; failed releases can be disabled without losing history. A candidate connector cannot call destructive endpoints. Approved round-trip loss reports retain every unmapped field disposition. These are specification requirements: no real hospital connector has been generated, tested or approved. Partner contracts, terminology packs, conformance suites and named approval authority remain open.
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-ea8e2d92427f9854"></a>
- **M06-CAP-INTEROP-ea8e2d92427f9854**: Read-only discovery and format profiling
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-b4c682b8787da998"></a>
- **M06-CAP-INTEROP-b4c682b8787da998**: FHIR/HL7v2/CDA/DICOM/CSV/JSON/XML/API/export inputs
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-68a0e74d25ecedc5"></a>
- **M06-CAP-INTEROP-68a0e74d25ecedc5**: Candidate semantic/terminology mappings with confidence
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-0714f81af47a1e33"></a>
- **M06-CAP-INTEROP-0714f81af47a1e33**: Validation and loss/conflict reporting
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-757b5756f07de8fa"></a>
- **M06-CAP-INTEROP-757b5756f07de8fa**: Sandbox round-trip and human approval
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-8ec2befeac8dc564"></a>
- **M06-CAP-INTEROP-8ec2befeac8dc564**: Connector registry monitoring rollback
  Origin: EXT-INTEROP

<a id="M06-CAP-INTEROP-6eb99d2bef4cd730"></a>
- **M06-CAP-INTEROP-6eb99d2bef4cd730**: No unvalidated clinical source-of-truth writes
  Origin: EXT-INTEROP

## Preserved source metadata

<a id="M06-CAP-INTEROP-4fbeeb87456accf5"></a>
- **M06-CAP-INTEROP-4fbeeb87456accf5**: Supports

<a id="M06-CAP-INTEROP-5ba74d8fcc7b20cc"></a>
- **M06-CAP-INTEROP-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-INTEROP-d5232cbd3a326267"></a>
- **M06-CAP-INTEROP-d5232cbd3a326267**: Documentation

<a id="M06-CAP-INTEROP-6f33acf3afb37064"></a>
- **M06-CAP-INTEROP-6f33acf3afb37064**: ---

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
