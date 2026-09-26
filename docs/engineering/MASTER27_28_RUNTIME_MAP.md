# MASTER-27/28 runtime map

## Preserved MASTER-26 runtime

The accidental compact rewrite of `apps/medical-passport/server.mjs` in commit `6d01bcf9` removed established routes for resumable document ingestion, imaging/PACS, pharmacy, notifications, sessions, record history, search, FHIR import and scoped document/imaging access. That commit has been reverted on the working branch. The MASTER-26 server surface is preserved before further integration.

## New bounded runtimes

- `lab-twin-pilot.mjs`: laboratory persistence, synthetic FHIR Observation ingestion, trends, Clinical State Twin snapshots, system projections, timeline, attention layer, pilot consent and privacy-preserving analytics.
- `pilot-mvp-runtime.mjs`: 7-step pilot onboarding state, patient dashboard aggregation, document metadata categories/version/provenance and Multilingual Medical Translation Gateway synthetic boundary.
- `notification-adapter.mjs`: local synthetic delivery plus explicit external push gate.

## Integration rule

New runtime modules must be integrated additively into the preserved server. Existing MASTER-26 routes may not be replaced by a reduced router. Production FHIR/OCR/push/translation providers remain external gates until connected and validated.

## CI state

Pipeline execution is externally blocked by GitLab `ci_quota_exceeded`; jobs are rejected before runner allocation. This is not test evidence. Status promotion to IMPLEMENTED requires executable test evidence once CI capacity is restored.
