# Research AI / Population Intelligence
Revision 2026-09-14 · EXT-RESEARCH · DRAFT_SPECIFICATION · CAP-RESEARCH · governed secondary analysis / population and longitudinal research · roadmap RESEARCH.

## Purpose and overlap
Use authorized longitudinal data to investigate patterns and generate hypotheses. Sources 1823/1826 already contain cohort matching, correlation and knowledge mining; 4649 contains research authorization/de-identification/audit. 1438's “anonymous” description is an intent, not proof of anonymity. 1915 research education remains educational. Extend shared governance and evidence contracts rather than merge all analytics into a single authority.

## Seven distinct analytics purposes
| Purpose | Scope and output | Authority boundary |
|---|---|---|
| Patient Analytics | individual trends/explanations | patient and care delegation |
| Clinical Analytics | clinician's authorized care cohort and outcomes | treating/clinical quality role |
| Provider Analytics | capacity, workload and operational quality | provider operations; no unnecessary clinical details |
| Population Analytics | aggregate patterns across authorized cohorts | population analysis release policy |
| Epidemiology | incidence, trends, surveillance methods | defined surveillance purpose and denominator |
| Research Analytics | protocol-specific hypothesis/outcome analyses | approved research governance |
| Public Health Reporting | authority-defined reporting dataset | recipient/jurisdiction-specific reporting basis |

Eurostat/government reporting is a separately versioned recipient contract; it is not an API granting general access to research data. Different purposes may share computation infrastructure while retaining independent permission, definitions and release policy.

## Actors, inputs and cohort lifecycle
Investigator defines protocol and estimand; data steward approves datasets; privacy/disclosure reviewer authorizes release; clinical/evidence reviewer evaluates implications. Patients/guardians provide consent when it is the applicable basis; other legal bases must be documented and reviewed rather than presumed.
Input references governed records: conditions, phenotype, longitudinal medication exposure, labs, comorbidities and outcomes. CohortSpec records inclusion/exclusion, index date, observation window, missingness, outcome definitions, versioned code lists, provenance, dataset release and permitted purpose. A hypertension study can join these authorized longitudinal dimensions; the resulting association is not automatically causal treatment evidence.
Functions include cohort discovery, phenotype clustering, treatment/outcome and disease-progression analysis, adverse-event signals, biomarker/population/therapy-response patterns, rare-disease patterns and hypothesis generation. Each output names method, denominator, bias/confounding limits and data completeness.

## Ownership, privacy and interfaces
CAP-RESEARCH owns protocol, cohort/query version, governed dataset release, AnalysisRun and Hypothesis. Clinical stores retain originals; pseudonym linkage keys reside in a separately controlled service. Pseudonymization is not anonymization. Minimize fields, restrict rare/small groups, apply disclosure review and query-history controls to reduce differencing attacks. Privacy-preserving/federated/aggregate methods require their own evaluation and configured release policy; no universal safe cell threshold is assumed.
Proposed commands: registerProtocol, requestCohort, approveDatasetRelease, executeAnalysis, requestDisclosureReview, submitEvidenceReview. Events DatasetReleaseApproved, AnalysisCompleted, HypothesisSubmitted and EvidenceReleaseApproved carry opaque IDs, never row-level exports. A denied query must not reveal membership. Unauthorized jurisdiction, missing basis or expired release returns a refusal. Dependencies CAP-DATA, CAP-CONSENT, CAP-AI, CAP-AUDIT.

## Controlled knowledge loop and learning
Patient data → authorized minimized/pseudonymized research dataset → Research AI → hypothesis → methodological and independent clinical validation appropriate to the claim → evidence release → Knowledge AI → separately validated Clinical AI/twin/pharmacology release.
A Hypothesis cannot enter the clinical knowledge pack as an established fact. EvidenceRelease records study/protocol, dataset/method versions, validation evidence, reviewer, applicability, limitations and expiry/review triggers. Conflicting results coexist with provenance. Promotion and rollback are explicit signed lifecycle actions.
The improvement loop is governed dataset → evaluation → approved research/training task → model candidate → validation → deployment approval → monitoring. Dataset reuse, model training and external-provider transfer each require an appropriate approved basis. Withdrawal and changed permissions invalidate future access and trigger governed retention/model-impact assessment; never promise that deleting one record erases its influence from a trained model.

## Safety, failures and observability
Research AI cannot change treatment, dose, clinical facts or patient model release. Signals require validation; correlation is not causation. Prevent cross-tenant joins, membership leakage, small-cohort exports and uncontrolled researcher re-identification. Audit dataset access, approved query fingerprints, disclosure decisions and evidence release history; sensitive outputs remain in controlled storage.

## Acceptance and open gates
Tests block unauthorized cohorts, disclosure bypass, expired governance, unapproved model training and hypothesis-to-care publication. Replays use exact cohort/data/code versions. Changing outcome definitions creates a new analysis. Clinical consumers accept only approved evidence releases applicable to their task. No research dataset, approved study, trained model or public reporting integration exists yet; methodology, jurisdiction decisions and independent governance remain open.
