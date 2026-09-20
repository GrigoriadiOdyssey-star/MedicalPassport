# Product Bible implementation coverage

Full canonical owners, not page counts. Baseline c4c3599; no renewed legacy audit. See JSON for specification hashes, profile provenance, dependencies and missing functions. MASTER-25 waves A–D extend the synthetic alpha without changing historical MVP classification.

| Owner | Runtime status | Existing workflow | Missing scope |
|---|---|---|---|
| CAP-GOVERNANCE | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-IDENTITY | PARTIALLY_IMPLEMENTED | Local sessions and synthetic practitioner identity | Real identity issuer, verified clinical authority, MFA |
| CAP-SECURITY | PARTIALLY_IMPLEMENTED | Session/CSRF/ownership checks | Production hardening, encryption key operations, load acceptance |
| CAP-AUDIT | PARTIALLY_IMPLEMENTED | Transactional hash-chain audit | External anchoring, retention policy and disaster recovery |
| CAP-CONSENT | PARTIALLY_IMPLEMENTED | Recipient-bound scoped expiring/revocable grants | Exact source/version leases and recovery contracts |
| CAP-DATA | PARTIALLY_IMPLEMENTED | Versioned patient records | Full canonical terminology, reconciliation and recovery |
| CAP-INTEROP | PARTIALLY_IMPLEMENTED | Restricted synthetic FHIR import | Real provider integration and conformance |
| CAP-QR | PARTIALLY_IMPLEMENTED | QR generation, scoped access and revocation | Offline verification and deployment-bound trust |
| CAP-PROFILE | PARTIALLY_IMPLEMENTED | Patient profile and scoped passport | Full longitudinal cross-provider aggregation |
| CAP-MEDICATION | PARTIALLY_IMPLEMENTED | Reported medicines, version history, schedules and adherence | Verified prescriptions, reconciliation and full pharmacology |
| CAP-PRESCRIPTION | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-PHARMACY | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-ADMINISTRATION | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-ALLERGY | PARTIALLY_IMPLEMENTED | Reported assertions, versions and critical alerts | Qualified verification and cross-source reconciliation |
| CAP-CONDITION | PARTIALLY_IMPLEMENTED | Structured reported conditions, status/onset/resolution, provider/code, revisions/archive | Verified diagnosis lifecycle and terminology services |
| CAP-LABORATORY | PARTIALLY_IMPLEMENTED | Structured patient-entered results, reference fields, comparable trends and immutable revisions | Laboratory issuer verification, real feeds, coded panel reconciliation and qualified result review |
| CAP-IMAGING | PARTIALLY_IMPLEMENTED | Study/series/instance import, scoped object storage, report revisions and bounded pixel viewer | Broader DICOM syntax/sequence/multiframe support, certified viewer, live PACS, validated anatomy derivation |
| CAP-DOCUMENTS | PARTIALLY_IMPLEMENTED | Configurable resumable object-storage ingestion, SHA256, versioned originals, source labels and scoped streams | Native PDF preview, verified translation, malware service, production object provider and complete source certification |
| CAP-IMMUNIZATION | PARTIALLY_IMPLEMENTED | Structured vaccine/dose/manufacturer/lot/provider/certificate reference and history | Verified issuer certificates, schedules, jurisdiction rules and provider feeds |
| CAP-ENCOUNTER | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-APPOINTMENTS | PARTIALLY_IMPLEMENTED | Patient-entered personal calendar, revisions, cancellation and scheduled notifications | Provider booking/availability, live telemedicine, externally confirmed appointments |
| CAP-TELEMEDICINE | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-NOTIFICATIONS | PARTIALLY_IMPLEMENTED | In-app scheduling, preferences, medication/appointment actions and periodic UI refresh | Background external delivery and provider guarantees |
| CAP-DEVICES | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-COVERAGE | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-AI | PARTIALLY_IMPLEMENTED | Deterministic permitted-context summaries | Generative explain/translate and source-governed guideline comparison |
| CAP-CDS | RESEARCH | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-TWIN | RESEARCH | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-RESEARCH | RESEARCH | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-TRAVEL | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-EMERGENCY | PARTIALLY_IMPLEMENTED | Patient emergency profile and scoped access | External emergency integration and validated operational workflows |
| CAP-OPERATIONS | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |
| CAP-SPECIALTY | POST_MVP | — | Canonical source profiles and external acceptance not implemented in the runtime |

Guideline Intelligence remains a profile of existing owners; no new owner/module is counted. Statuses describe the full canonical owner. None is promoted to fully IMPLEMENTED merely by this Alpha profile. See MASTER-25 evidence and open gates.
