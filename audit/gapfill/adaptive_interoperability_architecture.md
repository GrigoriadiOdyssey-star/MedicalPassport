# Adaptive Interoperability / Self-adapting Connector Intelligence
Revision 2026-09-14 · EXT-INTEROP · DRAFT_SPECIFICATION · CAP-INTEROP · integration and transformation / external clinical systems · roadmap RESEARCH.

## Purpose and overlap
Reduce manual integration work while preserving clinical meaning and source authority. Existing 1356 lists HL7/FHIR/DICOM/CDA and 1359 universal connectors; numerous synchronization titles describe intent. They do not specify safe discovery, semantic validation, loss budgets and release control. Extend this owner using the [search dossier](new_module_proposals.json); do not treat an absent title as proof of an absent capability.

## Actors, permissions and supported inputs
Partner administrator authorizes scope and read-only credentials; an integration engineer inspects schemas; a terminology steward adjudicates concepts; the clinical data owner approves clinical semantics; an operator deploys an approved version. Approval policy must prevent a generated connector from approving itself.
Accept FHIR, HL7 v2, CDA, DICOM, CSV, JSON, XML, REST APIs, authorized database exports and vendor-specific formats where technically and legally permitted. Format recognition is not conformance. Each partner declares protocol/version, purpose, data authority, direction, frequency, volume and authorization boundary. No unauthorised scanning, external writes, destructive SQL or automatic schema migration.

## Controlled pipeline
1. Read-only Connector Discovery inventories only authorized endpoints/files.
2. Format Detection identifies candidate encodings, delimiters/protocols and versions.
3. Schema Profiling records types, cardinalities, missingness, units, identifiers and sample provenance in a restricted staging area.
4. Semantic Mapping proposes source concepts and meaning; Terminology Mapping pins systems/releases; FHIR Mapping selects explicit profiles and extensions.
5. Validation checks syntax, identity/tenant, units, time zones, value sets, cardinality, required fields and authority.
6. Conflict Detection separates duplicate messages, patient ambiguity, contradictory results and corrected versions.
7. Transformation produces quarantined canonical candidates plus loss reports.
8. Sandbox Testing uses synthetic/de-identified approved fixtures, error cases and round-trip checks.
9. Human Approval signs exact schema/mapping/connector versions and a bounded release scope.
10. Connector Registry publishes the signed release; Monitoring detects drift, loss, rejection and reconciliation failures.
11. Rollback stops intake and restores a known connector release; already accepted clinical records require attributable correction/compensation, never silent deletion.

## Canonical contract and ownership
CAP-INTEROP owns ConnectorProfile, MappingCandidate, MappingRelease, ImportBatch and LossReport. Clinical owners retain validated facts. MappingCandidate contains source field/path, source schema hash, target concept/profile, transformation, confidence method/value, evidence source, terminology release, validation state, reviewer decision, approval scope and version. Confidence alone never authorizes import.
ImportBatch records input digest, partner/message identity, patient-match result, mapping release, item outcomes and idempotency key. A write candidate must reference approved source authority, validated mapping and current release. The clinical owner revalidates and accepts it; the connector cannot unilaterally overwrite the source of truth.

## Interfaces and events
Proposed commands: discoverAuthorizedSchema, proposeMapping, validateMapping, runSandbox, approveConnectorRelease, stageImport, reconcileBatch, suspendConnector. Signed approvals bind artifact hashes. Events MappingProposed, ValidationFailed, ConnectorReleaseApproved, ImportQuarantined, ImportAccepted and ConnectorDriftDetected contain identifiers and counts.
Return AMBIGUOUS_PATIENT, UNKNOWN_UNIT, LOSS_EXCEEDS_POLICY, UNAPPROVED_MAPPING, SCHEMA_DRIFT or STALE_RELEASE as appropriate. Per-item quarantine must not mask batch failures. Retries use stable partner event IDs and source versions. Out-of-order corrections retain linkage to earlier results.

## Self-adaptation, AI and security
AI can propose probable concepts, missing-field handling and candidate connector code/tests. Generated code is untrusted: sandbox it without production credentials, review dependencies and prevent network escape. It cannot approve its own test expectations. Unknown or incompatible semantics remain unresolved. Round-trip tests compare both retained fields and clinically meaningful semantics; where reverse conversion is impossible, record explicit loss and block or require approved limits.
Use secret management outside repository, least privilege, transport encryption, restricted staging retention, access audit, consent/purpose checks and jurisdiction controls. Logs include schema/release hashes and rejection counts, not sample PHI. Dependencies CAP-DATA, CAP-IDENTITY, CAP-CONSENT, CAP-AI, CAP-AUDIT. Twin/AI consumers see accepted typed records only.

## Acceptance and open gates
Unknown fields cannot enter clinical truth unvalidated. Unit/time/identity corruption is detected; schema drift suspends affected mappings; replay creates no duplicate fact; failed releases can be disabled without losing history. A candidate connector cannot call destructive endpoints. Approved round-trip loss reports retain every unmapped field disposition. These are specification requirements: no real hospital connector has been generated, tested or approved. Partner contracts, terminology packs, conformance suites and named approval authority remain open.
