# CAN-RENAL-FUNCTION — Pediatric renal function observation and trend profile

ADOPTED_DOCUMENTATION_BASELINE · DOMAIN-03 · 2026-09-14. Clinical approval: none. Runtime implementation: none. Roadmap: future pediatric scope, outside adult P0.

## Purpose and canonical ownership

Retain urea, creatinine, cystatin C, eGFR, urinary markers, protein/albumin, electrolytes, acid-base, recovery and persistent-pattern distinctions. Unknown context cannot imply normality.

Owner **CAP-LABORATORY**. Architectural owner adopted for this bounded documented workflow after existing full-body comparison PED2-RENAL-FUNCTION. Retain urea, creatinine, cystatin C, eGFR, urinary markers, protein/albumin, electrolytes, acid-base, recovery and persistent-pattern distinctions. Unknown context cannot imply normality. Source aliases: 926, 4552. Comparison: PED2-RENAL-FUNCTION.

## Actors, data and interfaces

Actors: Authorized patient/guardian; Treating clinician; Relevant specialist; Authorized source service. Inputs: Patient/tenant/purpose; Versioned authorized source records; Measurement/report/evidence context. Outputs: Versioned specialty artifact; Provenance and uncertainty; Reviewer disposition and follow-up. Logical entities: Observation, RenalBaseline, EquationReference, TrendAssessment. Dependencies: CAP-LABORATORY, CAP-DATA, CAP-CONSENT, CAP-AUDIT. Domain services retain their own source facts; this contract owns its declared view/workflow and attributable decisions.

Workflow: Ingest validated results → bind units/method/age/context → clinician-approved calculation → baseline comparison → review.

Proposed commands CreateOrUpdateRecord, ComposeAuthorizedView, RecordProfessionalReview require actor/tenant/purpose, current contextVersion and idempotencyKey. Wrong identity, missing authority, stale source or incomplete evidence produce explicit errors and no clinical mutation. Events RecordVersionCreated, ReviewRecorded, DerivedArtifactInvalidated contain opaque IDs and versions; retries cannot duplicate care actions. FHIR/resource mappings and provider-specific profiles require separate conformance checks.

## Safety, privacy, failure and acceptance

No autonomous prescribing, dose change, device control or emergency disposition. Derived output cannot overwrite measured/observed facts; reviewed recommendations and clinical orders are separate.

Tenant, purpose, relationship, consent/assent, age, jurisdiction, expiry and revocation are checked per record/encounter. Restricted notes and family information are segmented; exports and caches inherit controls.

Wrong patient/unit/source version or revoked permission fails closed. Incomplete context returns an explicit limited/unknown result. Clinical care never waits for automated data completion. Communication failure is visible and requires the configured human escalation path.

Preserve every source fragment, stable owner and exactly one alias per source. Reject stale versions, unknown identity/units, unauthorized disclosures and autonomous clinical writes. Verify idempotent events and correction history.

Monitoring records authorization decisions, context/model/evidence versions, stale/denied operations and review disposition without unnecessary clinical payloads. AI and twin use approved task profiles and preserve epistemic status, sources and uncertainty.

Open gates: Clinical intended-use approval, jurisdiction policy, terminology/profile releases, partner conformance, runtime security and numerical/model evaluation remain open. Documentation adoption does not close them.

## Canonical requirements

<a id="CAN-RENAL-FUNCTION-R-695a4a1076c7"></a>
- **CAN-RENAL-FUNCTION-R-695a4a1076c7**: Tracks renal function. [source IDs 926]

<a id="CAN-RENAL-FUNCTION-R-dfe0ee72c9c7"></a>
- **CAN-RENAL-FUNCTION-R-dfe0ee72c9c7**: Creatinine [source IDs 926]

<a id="CAN-RENAL-FUNCTION-R-b5e81565f0e4"></a>
- **CAN-RENAL-FUNCTION-R-b5e81565f0e4**: eGFR [source IDs 926]

<a id="CAN-RENAL-FUNCTION-R-3a662f284545"></a>
- **CAN-RENAL-FUNCTION-R-3a662f284545**: Urea [source IDs 926]

<a id="CAN-RENAL-FUNCTION-R-068c97192d8b"></a>
- **CAN-RENAL-FUNCTION-R-068c97192d8b**: Electrolytes [source IDs 926]

<a id="CAN-RENAL-FUNCTION-R-d9b8c284ee55"></a>
- **CAN-RENAL-FUNCTION-R-d9b8c284ee55**: Provide a unified longitudinal engine for assessment and monitoring of pediatric kidney function. [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-43ebc3abb216"></a>
- **CAN-RENAL-FUNCTION-R-43ebc3abb216**: Creatinine Tracking [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-f89ab7f00d71"></a>
- **CAN-RENAL-FUNCTION-R-f89ab7f00d71**: Cystatin C Tracking [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-75552f1c8986"></a>
- **CAN-RENAL-FUNCTION-R-75552f1c8986**: eGFR Calculation [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-1bef2f239610"></a>
- **CAN-RENAL-FUNCTION-R-1bef2f239610**: Age-adjusted Renal Function Interpretation [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-8cb4f2528491"></a>
- **CAN-RENAL-FUNCTION-R-8cb4f2528491**: Baseline Kidney Function [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-5074539d8a5d"></a>
- **CAN-RENAL-FUNCTION-R-5074539d8a5d**: Renal Function Trend Analysis [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-e49b455825b8"></a>
- **CAN-RENAL-FUNCTION-R-e49b455825b8**: Proteinuria Monitoring [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-f1fa65211415"></a>
- **CAN-RENAL-FUNCTION-R-f1fa65211415**: Albuminuria Monitoring [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-8629dadbe4ea"></a>
- **CAN-RENAL-FUNCTION-R-8629dadbe4ea**: Urinary Biomarkers [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-c467e1dd8b74"></a>
- **CAN-RENAL-FUNCTION-R-c467e1dd8b74**: Electrolyte Monitoring [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-5054bfb7407a"></a>
- **CAN-RENAL-FUNCTION-R-5054bfb7407a**: Acid-Base Monitoring [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-f57b4ef39ba2"></a>
- **CAN-RENAL-FUNCTION-R-f57b4ef39ba2**: Historical Comparison [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-dbc8f78ac2c4"></a>
- **CAN-RENAL-FUNCTION-R-dbc8f78ac2c4**: Laboratory Abnormality Detection [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-6e743e5ca590"></a>
- **CAN-RENAL-FUNCTION-R-6e743e5ca590**: Renal Recovery Tracking [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-3ecd09f16f16"></a>
- **CAN-RENAL-FUNCTION-R-3ecd09f16f16**: Clinical Logic: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-3fe336c58ab5"></a>
- **CAN-RENAL-FUNCTION-R-3fe336c58ab5**: The system differentiates isolated abnormal results from persistent, recurrent or progressively worsening patterns. [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-7adc7d7e0feb"></a>
- **CAN-RENAL-FUNCTION-R-7adc7d7e0feb**: Data Context: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-332aa8ddb763"></a>
- **CAN-RENAL-FUNCTION-R-332aa8ddb763**: Age [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-c9df902dbbaf"></a>
- **CAN-RENAL-FUNCTION-R-c9df902dbbaf**: Sex where clinically relevant [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-15f6f1cd7df2"></a>
- **CAN-RENAL-FUNCTION-R-15f6f1cd7df2**: Growth [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-a916486c5b56"></a>
- **CAN-RENAL-FUNCTION-R-a916486c5b56**: Hydration [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-915e7038bbb6"></a>
- **CAN-RENAL-FUNCTION-R-915e7038bbb6**: Medication [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-74e594b9773e"></a>
- **CAN-RENAL-FUNCTION-R-74e594b9773e**: Acute Illness [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-b8472af3428e"></a>
- **CAN-RENAL-FUNCTION-R-b8472af3428e**: Chronic Disease [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-38a0d7b98bbb"></a>
- **CAN-RENAL-FUNCTION-R-38a0d7b98bbb**: Previous Renal Function [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-b35155b30d64"></a>
- **CAN-RENAL-FUNCTION-R-b35155b30d64**: Laboratory Methodology [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-0450746eb341"></a>
- **CAN-RENAL-FUNCTION-R-0450746eb341**: Alerts: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-bd4e4c835f86"></a>
- **CAN-RENAL-FUNCTION-R-bd4e4c835f86**: Rapid Renal Function Deterioration [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-41f653e253a1"></a>
- **CAN-RENAL-FUNCTION-R-41f653e253a1**: Critical Electrolyte Abnormality [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-7288ba399069"></a>
- **CAN-RENAL-FUNCTION-R-7288ba399069**: Persistent Proteinuria [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-eb9c21d6caf1"></a>
- **CAN-RENAL-FUNCTION-R-eb9c21d6caf1**: Significant Change from Patient Baseline [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-da8de39cdeea"></a>
- **CAN-RENAL-FUNCTION-R-da8de39cdeea**: Clinician-defined Renal Risk Thresholds [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-8a44fcee55e9"></a>
- **CAN-RENAL-FUNCTION-R-8a44fcee55e9**: Integrations: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-0b6d6c57f142"></a>
- **CAN-RENAL-FUNCTION-R-0b6d6c57f142**: Laboratory Medicine [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-b26b52ae67c9"></a>
- **CAN-RENAL-FUNCTION-R-b26b52ae67c9**: Nephrology [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-fd8587c6620f"></a>
- **CAN-RENAL-FUNCTION-R-fd8587c6620f**: Pharmacy [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-9bdcbb9ddb57"></a>
- **CAN-RENAL-FUNCTION-R-9bdcbb9ddb57**: Intensive Care [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-46e2c928ff1a"></a>
- **CAN-RENAL-FUNCTION-R-46e2c928ff1a**: Digital Twin [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-090535231fe9"></a>
- **CAN-RENAL-FUNCTION-R-090535231fe9**: Medical Passport [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-R-d19840d139f3"></a>
- **CAN-RENAL-FUNCTION-R-d19840d139f3**: HIGH [source IDs 4552]

## Preserved source metadata

<a id="CAN-RENAL-FUNCTION-M-ee252e566bb6"></a>
- **CAN-RENAL-FUNCTION-M-ee252e566bb6**: # Pediatric Kidney Function Monitoring [source IDs 926]

<a id="CAN-RENAL-FUNCTION-M-17dd6624cc5b"></a>
- **CAN-RENAL-FUNCTION-M-17dd6624cc5b**: Supports [source IDs 926]

<a id="CAN-RENAL-FUNCTION-M-2fc1e43d2c6f"></a>
- **CAN-RENAL-FUNCTION-M-2fc1e43d2c6f**: Status [source IDs 926]

<a id="CAN-RENAL-FUNCTION-M-8369b8654a18"></a>
- **CAN-RENAL-FUNCTION-M-8369b8654a18**: Documentation [source IDs 926, 4552]

<a id="CAN-RENAL-FUNCTION-M-9005f6fabd68"></a>
- **CAN-RENAL-FUNCTION-M-9005f6fabd68**: --- [source IDs 926, 4552]

<a id="CAN-RENAL-FUNCTION-M-6668d9834f1f"></a>
- **CAN-RENAL-FUNCTION-M-6668d9834f1f**: Purpose: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-M-713d472307d5"></a>
- **CAN-RENAL-FUNCTION-M-713d472307d5**: Core Functions: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-M-25900ad89eaf"></a>
- **CAN-RENAL-FUNCTION-M-25900ad89eaf**: MVP Relevance: [source IDs 4552]

<a id="CAN-RENAL-FUNCTION-M-907bed51aed6"></a>
- **CAN-RENAL-FUNCTION-M-907bed51aed6**: Status: [source IDs 4552]

[Applied source mapping](../../audit/domain-03/requirement_migration.json) · [Stage policy](../../audit/domain-03/STAGE_POLICY.md).
