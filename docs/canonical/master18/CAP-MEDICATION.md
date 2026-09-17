# CORE-CAP-MEDICATION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## precision-medication-proposals

Medication owns individualized medication-plan proposals and their reconciliation with reported use. Dose optimization, scheduling and interaction prevention are unapproved source requirements, not executable prescriptions; CDS supplies recommendations and prescribing authority remains separate.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Require units, indication, current organ-function/exposure context, drug/knowledge versions and clinician-confirmed disposition; no automatic dose or substitution.

## ai-medication-history-and-safety

Medication owns draft medication/prescription content, adherence observations and safety-review context. Dispensing and signing authorities are external; absence of recorded use does not prove a missed dose. Prescribing or verification labels never authorize automatic dosage or dispensing.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## clinical-pediatric-chemotherapy-plan

Medication owns protocol-bound chemotherapy plan/exposure and toxicity context. Scheduling, dose adjustment and supportive-therapy requirements remain proposals requiring verified protocol, patient size/organ-function/exposure context and qualified oncology review; Administration owns delivered doses.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Preserve age/development, body size and acquisition time where present, laterality/site, clinical phase, donor/recipient or mother/fetus identity, guardian/assent and adolescent confidentiality. No universal dose, threshold or protocol is inferred. Plans, actual procedures, device operation, clinical diagnoses and model suggestions stay separately attributable.

## Source scope

- Original 1311 / precision-medication-proposals: AI Personalized Medication Optimization — Optimizes medication plans.
- Original 1522 / precision-medication-proposals: AI Personalized Medication Planner — Creates optimized medication plans.
- Original 1673 / precision-medication-proposals: AI Personalized Medication Plan — Creates individualized medication plans.
- Original 1153 / ai-medication-history-and-safety: AI Prescription Generator — Generates prescription drafts.
- Original 1251 / ai-medication-history-and-safety: AI Medication Adherence Monitor — Evaluates treatment adherence.
- Original 1315 / ai-medication-history-and-safety: AI Prescription Verification Engine — Verifies prescriptions before dispensing.
- Original 1772 / ai-medication-history-and-safety: AI Medication Adherence Monitor — Tracks medication adherence.
- Original 3470 / clinical-pediatric-chemotherapy-plan: Pediatric Chemotherapy Module — Supports chemotherapy management.

## Requirements and source metadata

<a id="M18-CAP-MEDICATION-7a25cae563ae16e0"></a>
- **M18-CAP-MEDICATION-7a25cae563ae16e0**: Optimizes medication plans.
  Applies to original IDs: 1311.

<a id="M18-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M18-CAP-MEDICATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 1311, 1522, 1673, 1251, 1772, 3470.

<a id="M18-CAP-MEDICATION-86211ac6ff2b3049"></a>
- **M18-CAP-MEDICATION-86211ac6ff2b3049**: Effectiveness
  Applies to original IDs: 1311.

<a id="M18-CAP-MEDICATION-337ac426909d5755"></a>
- **M18-CAP-MEDICATION-337ac426909d5755**: Safety
  Applies to original IDs: 1311.

<a id="M18-CAP-MEDICATION-d125699682b71377"></a>
- **M18-CAP-MEDICATION-d125699682b71377**: Cost
  Applies to original IDs: 1311.

<a id="M18-CAP-MEDICATION-08588d541c8026a3"></a>
- **M18-CAP-MEDICATION-08588d541c8026a3**: Adherence
  Applies to original IDs: 1311.

<a id="M18-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M18-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 1311, 1522, 1673, 1153, 1251, 1315, 1772, 3470.

<a id="M18-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M18-CAP-MEDICATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 1311, 1522, 1673, 1153, 1251, 1315, 1772, 3470.

<a id="M18-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M18-CAP-MEDICATION-6f33acf3afb37064**: ---
  Applies to original IDs: 1311, 1522, 1673, 1153, 1251, 1315, 1772, 3470.

<a id="M18-CAP-MEDICATION-0ae2374ccbff2776"></a>
- **M18-CAP-MEDICATION-0ae2374ccbff2776**: Creates optimized medication plans.
  Applies to original IDs: 1522.

<a id="M18-CAP-MEDICATION-c1bd7c5ff5108706"></a>
- **M18-CAP-MEDICATION-c1bd7c5ff5108706**: Dosage Optimization
  Applies to original IDs: 1522.

<a id="M18-CAP-MEDICATION-224a4ff363c9b838"></a>
- **M18-CAP-MEDICATION-224a4ff363c9b838**: Drug Scheduling
  Applies to original IDs: 1522.

<a id="M18-CAP-MEDICATION-dab6424e03272449"></a>
- **M18-CAP-MEDICATION-dab6424e03272449**: Interaction Prevention
  Applies to original IDs: 1522, 1673.

<a id="M18-CAP-MEDICATION-9e19b08b0907f23c"></a>
- **M18-CAP-MEDICATION-9e19b08b0907f23c**: Creates individualized medication plans.
  Applies to original IDs: 1673.

<a id="M18-CAP-MEDICATION-368389b22a7065de"></a>
- **M18-CAP-MEDICATION-368389b22a7065de**: Dosage
  Applies to original IDs: 1673, 1153, 1315.

<a id="M18-CAP-MEDICATION-c6d2faefa788a381"></a>
- **M18-CAP-MEDICATION-c6d2faefa788a381**: Schedule
  Applies to original IDs: 1673.

<a id="M18-CAP-MEDICATION-cfd2987c35aa73fa"></a>
- **M18-CAP-MEDICATION-cfd2987c35aa73fa**: Generates prescription drafts.
  Applies to original IDs: 1153.

<a id="M18-CAP-MEDICATION-01bbec9df504a305"></a>
- **M18-CAP-MEDICATION-01bbec9df504a305**: Includes
  Applies to original IDs: 1153.

<a id="M18-CAP-MEDICATION-10d8c964b53514ca"></a>
- **M18-CAP-MEDICATION-10d8c964b53514ca**: Duration
  Applies to original IDs: 1153.

<a id="M18-CAP-MEDICATION-75f567d6afa8c676"></a>
- **M18-CAP-MEDICATION-75f567d6afa8c676**: Instructions
  Applies to original IDs: 1153.

<a id="M18-CAP-MEDICATION-c7b62a9f0a91b9c9"></a>
- **M18-CAP-MEDICATION-c7b62a9f0a91b9c9**: Safety Checks
  Applies to original IDs: 1153.

<a id="M18-CAP-MEDICATION-7b257d458f27fd04"></a>
- **M18-CAP-MEDICATION-7b257d458f27fd04**: Evaluates treatment adherence.
  Applies to original IDs: 1251.

<a id="M18-CAP-MEDICATION-3a1194f5335f5efb"></a>
- **M18-CAP-MEDICATION-3a1194f5335f5efb**: Missed Doses
  Applies to original IDs: 1251, 1772.

<a id="M18-CAP-MEDICATION-2a6097334f8af426"></a>
- **M18-CAP-MEDICATION-2a6097334f8af426**: Therapy Interruptions
  Applies to original IDs: 1251.

<a id="M18-CAP-MEDICATION-80cbfdd05848c851"></a>
- **M18-CAP-MEDICATION-80cbfdd05848c851**: Compliance Trends
  Applies to original IDs: 1251.

<a id="M18-CAP-MEDICATION-f23475e15d86d32e"></a>
- **M18-CAP-MEDICATION-f23475e15d86d32e**: Verifies prescriptions before dispensing.
  Applies to original IDs: 1315.

<a id="M18-CAP-MEDICATION-f62ebcef0792a834"></a>
- **M18-CAP-MEDICATION-f62ebcef0792a834**: Checks
  Applies to original IDs: 1315.

<a id="M18-CAP-MEDICATION-37686c4220a596f9"></a>
- **M18-CAP-MEDICATION-37686c4220a596f9**: Contraindications
  Applies to original IDs: 1315.

<a id="M18-CAP-MEDICATION-4f4c8a1e1164c973"></a>
- **M18-CAP-MEDICATION-4f4c8a1e1164c973**: Drug Interactions
  Applies to original IDs: 1315.

<a id="M18-CAP-MEDICATION-344ee57b39c9017e"></a>
- **M18-CAP-MEDICATION-344ee57b39c9017e**: Tracks medication adherence.
  Applies to original IDs: 1772.

<a id="M18-CAP-MEDICATION-ad8bba88158e84d9"></a>
- **M18-CAP-MEDICATION-ad8bba88158e84d9**: Compliance Rate
  Applies to original IDs: 1772.

<a id="M18-CAP-MEDICATION-9de3bc147c690418"></a>
- **M18-CAP-MEDICATION-9de3bc147c690418**: Reminder System
  Applies to original IDs: 1772.

<a id="M18-CAP-MEDICATION-d0caaebf90acd81a"></a>
- **M18-CAP-MEDICATION-d0caaebf90acd81a**: Supports chemotherapy management.
  Applies to original IDs: 3470.

<a id="M18-CAP-MEDICATION-55b69f2aa4cfa161"></a>
- **M18-CAP-MEDICATION-55b69f2aa4cfa161**: Protocol Scheduling
  Applies to original IDs: 3470.

<a id="M18-CAP-MEDICATION-c0e9d7d7b184482d"></a>
- **M18-CAP-MEDICATION-c0e9d7d7b184482d**: Dose Adjustment
  Applies to original IDs: 3470.

<a id="M18-CAP-MEDICATION-ca81c21d9ddb4308"></a>
- **M18-CAP-MEDICATION-ca81c21d9ddb4308**: Toxicity Monitoring
  Applies to original IDs: 3470.

<a id="M18-CAP-MEDICATION-fc042171e1e6e3cf"></a>
- **M18-CAP-MEDICATION-fc042171e1e6e3cf**: Supportive Therapy
  Applies to original IDs: 3470.
