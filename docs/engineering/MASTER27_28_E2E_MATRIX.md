# MASTER-27/28 E2E matrix

## Scenario A — medication adherence
Register → profile → medication → reminder configuration → TAKEN/SNOOZED/SKIPPED/MISSED → adherence summary. Existing MASTER-26 reminder runtime is preserved; MASTER-27/28 adds explicit configuration and safety contracts. Missed dose must never trigger double-dose advice.

## Scenario B — laboratory to Clinical State Twin
Structured/manual/synthetic-FHIR lab → explicit reference state → trend → MEASURED epistemic state → body/system projection → provenance. UNKNOWN remains UNKNOWN. Production OCR/FHIR are external gates.

## Scenario C — scoped sharing
Patient creates bounded scope → doctor projection includes only granted categories → Digital Twin summary is read-only → revoke must invalidate subsequent access in preserved MASTER-26 grant runtime.

## Scenario D — Clinical State Twin
Recorded conditions + medications + labs + documents + adherence → snapshot → system view → timeline → attention layer. No autonomous diagnosis, prescription, dose change or discontinuation.

## CI evidence rule
These tests are committed but must not be reported as passing until a runner executes them. GitLab shared runner allocation is currently blocked by `ci_quota_exceeded`.
