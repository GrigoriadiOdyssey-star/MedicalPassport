# MASTER-27 — Laboratory / Diagnostics production-shaped completion

This document records implementation coverage only. It does not alter Product Bible source modules, canonical ownership, historical audit evidence, or historical validation baselines.

## Canonical ownership reused

Primary owner: `CAP-LABORATORY — Laboratory and observations`.

Reused supporting owners: `CAP-DATA`, `CAP-CONSENT`, `CAP-AUDIT`, `CAP-SECURITY`, `CAP-IDENTITY`, `CAP-AI`, `CAP-COVERAGE`, and `CAP-SPECIALTY` where applicable. `CAP-IMAGING` remains separate.

## Implemented in `implementation/master-27-completion`

- forward-only migration 009 for providers, catalogue, panels, orders, specimens, accessions, reference ranges, versioned results, DiagnosticReports, attachments and critical-result notification state;
- additive migration 010 for versioned pathology, microbiology, molecular-genetics and POCT specialty records plus document links;
- laboratory order state machine and immutable order event history;
- specimen state machine with explicit rejected/cancelled states;
- accessioning with patient/order/specimen ownership checks;
- structured result values and epistemic state;
- `REGISTERED / PRELIMINARY / FINAL / CORRECTED / AMENDED / CANCELLED / ENTERED_IN_ERROR` result lifecycle;
- append-only result versions with DB-level UPDATE/DELETE protection;
- source-specific reference-range snapshots and explicit `REFERENCE_RANGE_UNKNOWN`;
- source flags and explicit flag origin;
- stable external result identity, idempotent replay and conflict rejection;
- DiagnosticReport with append-only versions;
- longitudinal projection that keeps patient-reported observations separate from laboratory measured results;
- trend compatibility guard: unit/method mismatch is `NOT_COMPARABLE`, never silently converted;
- critical-result patient notification state without claiming real clinician delivery;
- result and specialty document attachment boundaries with patient ownership checks;
- pathology specialty workflow with append-only specialist text, provenance and explicit `autonomous_diagnosis=false`;
- microbiology specialty workflow with structured detection/culture/susceptibility source data and no automatic therapy or antibiotic selection;
- molecular-genetics specialty workflow requiring supplied variant data and interpretation source, with no fabricated pathogenicity or pharmacogenomic action;
- POCT specialty workflow that preserves device origin and never treats device data as laboratory-verified by default;
- deterministic Laboratory Assistant safety boundary: no diagnosis, prescribing, treatment change, dose change or invented reference range;
- namespaced `/api/mvp/laboratory/*` APIs behind the existing auth/CSRF server boundary;
- additive Laboratory patient workspace loaded independently of the MASTER-26 `main.js` shell;
- executable MASTER-27 domain/API/E2E and specialty safety tests.

## Synthetic adapters

The current test catalogue, provider, reference ranges, provider-origin results, pathology, microbiology, genetics and POCT fixtures used by tests are explicitly synthetic or unverified. They are not real clinical-provider connections and are never promoted to verified production data by default.

## External gates

The following are not connected and must not be represented as production-ready:

- real LIS/LIMS;
- national laboratory networks;
- real laboratory provider APIs;
- authoritative LOINC/SNOMED/terminology service;
- authoritative laboratory reference-range services;
- real POCT / diagnostic-device integrations;
- confirmed external clinician critical-result delivery;
- production pathology/microbiology/genomics provider feeds;
- insurance/payment workflows where required by jurisdiction;
- clinical laboratory specialist validation;
- security/privacy/DPIA and jurisdiction-specific regulatory validation.

## CI status

Pipeline `2888307732` could not execute because GitLab returned `ci_quota_exceeded` before a runner started. This is an external CI execution gate, not a test result. The focused and full suites remain configured for execution once CI quota is available.
