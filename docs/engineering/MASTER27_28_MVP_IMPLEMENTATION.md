# MASTER-27/28 — EDHT Medical Passport MVP Expansion

Base: `implementation/master-26` at `fc6656bc442a0c6a31ba859681ff14a6c273039c`.
Baseline pipeline: `2865905318` — PASS.

## Safety invariants
- NOT A DIAGNOSTIC SYSTEM.
- NO AUTONOMOUS PRESCRIBING.
- NO AUTONOMOUS DOSE CHANGE.
- NO AUTONOMOUS THERAPY DISCONTINUATION.
- UNKNOWN laboratory state is never normalized to NORMAL.
- Original clinical documents remain distinct from extracted structured data.
- Digital Twin epistemic states remain explicit: OBSERVED, MEASURED, CLINICIAN_ASSESSED, PATIENT_REPORTED, INFERRED, PREDICTED, SIMULATED.
- Existing MASTER-26 Pharmacy, Medication, Prescription, Reminder, Security, Audit and AI boundaries are preserved.
- Historical audit baselines, hashes, obsolete MASTER09 and `.gitlab-ci-runtime.yml` are out of scope for modification.

## Implementation plan
P0 is the existing medication reminder engine and patient Today experience. MASTER-26 already contains reminder schedules, timezone handling, snooze, TAKEN/SKIPPED/MISSED state, history data and local in-app notification delivery; MASTER-27/28 extends this without changing prescription authority.

Laboratory adds structured results, reference-range provenance, longitudinal trends, document linkage and a synthetic FHIR boundary. Production OCR and production FHIR connectivity remain external gates.

EDHT Digital Twin v0.1 is a Clinical State Twin generated only from recorded EDHT patient state. It provides system projections, timeline, trends, attention items, source provenance, completeness and snapshot history. It does not generate diagnoses or treatment instructions.

PILOT mode separates demo/synthetic state, requires explicit consent and emits privacy-preserving product analytics without clinical content.

## Coverage policy
Coverage is conservative. `PARTIAL`, `INTERFACE_ONLY`, `SYNTHETIC_ADAPTER`, `NOT_IMPLEMENTED` and `EXTERNAL_GATE` remain visible until evidence supports promotion to `IMPLEMENTED`.
