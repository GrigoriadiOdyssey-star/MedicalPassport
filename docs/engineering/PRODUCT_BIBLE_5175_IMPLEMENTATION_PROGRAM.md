# EDHT Product Bible 5,175 — implementation program

## Authority

The implementation source is `sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md` with the preserved machine-readable registry in `data/modules.json` and the complete range index in `docs/module-index.md`.

The current demonstrable product in `apps/medical-passport/` is the implementation target. Do not create a parallel prototype.

## Program rule

Every original module 1–5175 must be traceable to runtime evidence or an explicit boundary. Presence in documentation or UI alone is not implementation.

Allowed implementation states:

- IMPLEMENTED — working runtime path plus acceptance evidence.
- PARTIAL — material runtime behavior exists but canonical acceptance is incomplete.
- INTERFACE_ONLY — typed/internal boundary exists but no functioning provider.
- SYNTHETIC_ADAPTER — demonstrable non-production adapter exists.
- EXTERNAL_GATE — implementation depends on an external provider, authority, certification, contract or infrastructure.
- RESEARCH — capability must not be represented as clinical production functionality.
- NOT_IMPLEMENTED — no material implementation evidence.

## Implementation order

### Wave A — demonstrable patient/doctor MVP

Identity, security, audit, consent, data, profile, allergy, condition, medication, notifications/reminders, laboratory, documents, QR sharing, emergency, appointments, encounter/doctor workspace, bounded AI assistant and Clinical State Twin.

Acceptance target: complete patient journey from onboarding through medication/reminders/labs/documents to scoped doctor access, revocation and Digital Twin state projection.

### Wave B — connected care foundations

Prescription lifecycle, pharmacy, immunization, imaging, telemedicine, travel, devices and interoperability adapters.

Production provider connectivity remains EXTERNAL_GATE until actually connected and verified.

### Wave C — specialty and institutional surfaces

Specialty hubs, administration, coverage/insurance, operations, organization/provider portals, longitudinal specialty workflows and pediatric/family profiles.

### Wave D — advanced intelligence and research

Research, precision pharmacology, population analytics, advanced Digital Twin, genomics/proteomics, simulations and CDS proposals. Derived/predicted/simulated state must remain epistemically separate from observed/measured/clinician-assessed state.

## Safety invariants

- NOT A DIAGNOSTIC SYSTEM for the demonstrable MVP.
- No autonomous prescribing.
- No autonomous dose change.
- No autonomous therapy discontinuation.
- No fabricated reference ranges, clinical sources or provider connectivity.
- Synthetic data never silently mixes with pilot/real data.
- Original clinical documents remain distinct from extracted data.
- Patient/doctor access remains scope-bound and auditable.
- Historical audit baselines and hashes are immutable.

## Existing evidence to preserve

MASTER-26/27-28 already contains working or partial foundations for sessions, CSRF/ownership, audit, consent grants, patient records, reminders, pharmacy/prescription foundations, laboratory, synthetic FHIR, Clinical State Twin, pilot consent/analytics and patient UI. Extend these components rather than replacing them.

## Coverage discipline

`product_implementation_coverage.json` is the older canonical-owner ledger and must not be interpreted as proof that all 5,175 original modules are implemented. New implementation work must add runtime evidence and tests before status promotion.

The implementation program proceeds by canonical owner/dependency wave while preserving original module IDs for traceability. This prevents 5,175 disconnected feature stubs and keeps one coherent Medical Passport product.
