# CORE-CAP-RESEARCH — shared capability and profiles

MASTER-04 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: Protocol, CohortSpec, DatasetRelease, AnalysisRun, Hypothesis, EvidenceRelease. Dependencies: CAP-RESEARCH, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-AI.

Register protocol/purpose → authorize cohort and dataset → execute versioned analysis → disclosure review → hypothesis → independent evidence review → separately approved clinical knowledge release.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M04-STRATEGIC-RESEARCH

Original IDs: 1438, 1440, 1823, 1826, 2219, 2588, 4649.

Retain mortality/morbidity, agency-specific reporting, cohorts, imaging datasets and neurosurgical outcomes. Research education is not cohort processing; anonymous wording needs disclosure validation.

Register protocol/purpose → authorize cohort and dataset → execute versioned analysis → disclosure review → hypothesis → independent evidence review → separately approved clinical knowledge release.

## Integrated extension decisions

- EXT-RESEARCH: INTEGRATED at documentation scope. Research/popuIation governance shares infrastructure but keeps purpose-specific release rules; research-method education is outside cohort execution. Integrate hypothesis/evidence-release controls without causal claims.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M04-CAP-RESEARCH-1f78554970301625"></a>
- **M04-CAP-RESEARCH-1f78554970301625**: Analyzes anonymous population health.
  Origin: original 1438

<a id="M04-CAP-RESEARCH-21fddc3c315298f8"></a>
- **M04-CAP-RESEARCH-21fddc3c315298f8**: Disease Trends
  Origin: original 1438

<a id="M04-CAP-RESEARCH-2216a68f528946b4"></a>
- **M04-CAP-RESEARCH-2216a68f528946b4**: Mortality
  Origin: original 1438

<a id="M04-CAP-RESEARCH-62c922e13d86be79"></a>
- **M04-CAP-RESEARCH-62c922e13d86be79**: Morbidity
  Origin: original 1438

<a id="M04-CAP-RESEARCH-8f1bbb4d64e00f52"></a>
- **M04-CAP-RESEARCH-8f1bbb4d64e00f52**: Master epidemiological intelligence platform.
  Origin: original 1440

<a id="M04-CAP-RESEARCH-039896b594f08ddf"></a>
- **M04-CAP-RESEARCH-039896b594f08ddf**: Coordinates
  Origin: original 1440

<a id="M04-CAP-RESEARCH-2cc860994020ceb5"></a>
- **M04-CAP-RESEARCH-2cc860994020ceb5**: WHO
  Origin: original 1440

<a id="M04-CAP-RESEARCH-a1e3fb22ea97e61e"></a>
- **M04-CAP-RESEARCH-a1e3fb22ea97e61e**: ECDC
  Origin: original 1440

<a id="M04-CAP-RESEARCH-890163743679af08"></a>
- **M04-CAP-RESEARCH-890163743679af08**: CDC
  Origin: original 1440

<a id="M04-CAP-RESEARCH-586a248f07c8c528"></a>
- **M04-CAP-RESEARCH-586a248f07c8c528**: National Health Agencies
  Origin: original 1440

<a id="M04-CAP-RESEARCH-9e9dbb804ca8197a"></a>
- **M04-CAP-RESEARCH-9e9dbb804ca8197a**: Medical Passport
  Origin: original 1440

<a id="M04-CAP-RESEARCH-63ed4f2636271e6c"></a>
- **M04-CAP-RESEARCH-63ed4f2636271e6c**: Anonymous Population Analytics
  Origin: original 1440

<a id="M04-CAP-RESEARCH-8814c142bf476453"></a>
- **M04-CAP-RESEARCH-8814c142bf476453**: Forms the epidemiological intelligence layer of the Medical Passport ecosystem.
  Origin: original 1440

<a id="M04-CAP-RESEARCH-e15801f09b6ea4e9"></a>
- **M04-CAP-RESEARCH-e15801f09b6ea4e9**: Builds research cohorts.
  Origin: original 1823

<a id="M04-CAP-RESEARCH-88df836622035da3"></a>
- **M04-CAP-RESEARCH-88df836622035da3**: Inclusion Criteria
  Origin: original 1823

<a id="M04-CAP-RESEARCH-c7a65cf31187ae5f"></a>
- **M04-CAP-RESEARCH-c7a65cf31187ae5f**: Exclusion Criteria
  Origin: original 1823

<a id="M04-CAP-RESEARCH-f1cd74bf4c31f1e5"></a>
- **M04-CAP-RESEARCH-f1cd74bf4c31f1e5**: Patient Matching
  Origin: original 1823

<a id="M04-CAP-RESEARCH-de8ebfc1c9fb0620"></a>
- **M04-CAP-RESEARCH-de8ebfc1c9fb0620**: Generates scientific hypotheses.
  Origin: original 1826

<a id="M04-CAP-RESEARCH-7a351e5c79894384"></a>
- **M04-CAP-RESEARCH-7a351e5c79894384**: Pattern Discovery
  Origin: original 1826

<a id="M04-CAP-RESEARCH-744e5485a5592fb0"></a>
- **M04-CAP-RESEARCH-744e5485a5592fb0**: Data Correlation
  Origin: original 1826

<a id="M04-CAP-RESEARCH-7519f730ec2e1b0e"></a>
- **M04-CAP-RESEARCH-7519f730ec2e1b0e**: Knowledge Mining
  Origin: original 1826

<a id="M04-CAP-RESEARCH-946278e28bd10bb7"></a>
- **M04-CAP-RESEARCH-946278e28bd10bb7**: Supports ophthalmology clinical research.
  Origin: original 2219, original 2588

<a id="M04-CAP-RESEARCH-ca519247eff2e16a"></a>
- **M04-CAP-RESEARCH-ca519247eff2e16a**: Clinical Trials
  Origin: original 2219, original 2588

<a id="M04-CAP-RESEARCH-04cd0be2dda01d15"></a>
- **M04-CAP-RESEARCH-04cd0be2dda01d15**: Registries
  Origin: original 2219

<a id="M04-CAP-RESEARCH-522ba172cbf833d5"></a>
- **M04-CAP-RESEARCH-522ba172cbf833d5**: AI Datasets
  Origin: original 2219

<a id="M04-CAP-RESEARCH-fd938687cbc16d73"></a>
- **M04-CAP-RESEARCH-fd938687cbc16d73**: Imaging Databases
  Origin: original 2588

<a id="M04-CAP-RESEARCH-293ad0d421445042"></a>
- **M04-CAP-RESEARCH-293ad0d421445042**: AI Dataset Collection
  Origin: original 2588

<a id="M04-CAP-RESEARCH-d734837882a76c70"></a>
- **M04-CAP-RESEARCH-d734837882a76c70**: Measure pediatric neurosurgical outcomes and create governed research-ready longitudinal datasets.
  Origin: original 4649

<a id="M04-CAP-RESEARCH-3dc55d9a7574fc58"></a>
- **M04-CAP-RESEARCH-3dc55d9a7574fc58**: Surgical Outcomes
  Origin: original 4649

<a id="M04-CAP-RESEARCH-1af11e17f6b27dbf"></a>
- **M04-CAP-RESEARCH-1af11e17f6b27dbf**: Neurological Outcomes
  Origin: original 4649

<a id="M04-CAP-RESEARCH-d08bcd1528f93e38"></a>
- **M04-CAP-RESEARCH-d08bcd1528f93e38**: Functional Outcomes
  Origin: original 4649

<a id="M04-CAP-RESEARCH-73dedf86b2ae9801"></a>
- **M04-CAP-RESEARCH-73dedf86b2ae9801**: Complications
  Origin: original 4649

<a id="M04-CAP-RESEARCH-9d60d099367da84d"></a>
- **M04-CAP-RESEARCH-9d60d099367da84d**: Infection
  Origin: original 4649

<a id="M04-CAP-RESEARCH-17afb585302a7682"></a>
- **M04-CAP-RESEARCH-17afb585302a7682**: Reoperation
  Origin: original 4649

<a id="M04-CAP-RESEARCH-fbef6f7a0fa2590e"></a>
- **M04-CAP-RESEARCH-fbef6f7a0fa2590e**: Device Failure
  Origin: original 4649

<a id="M04-CAP-RESEARCH-30d1224e208b1015"></a>
- **M04-CAP-RESEARCH-30d1224e208b1015**: Length of Stay
  Origin: original 4649

<a id="M04-CAP-RESEARCH-83881e276860b4f1"></a>
- **M04-CAP-RESEARCH-83881e276860b4f1**: Readmission
  Origin: original 4649

<a id="M04-CAP-RESEARCH-3f768e942eebe491"></a>
- **M04-CAP-RESEARCH-3f768e942eebe491**: Rehabilitation Outcomes
  Origin: original 4649

<a id="M04-CAP-RESEARCH-4d133918213f0f0e"></a>
- **M04-CAP-RESEARCH-4d133918213f0f0e**: Patient-reported Outcomes
  Origin: original 4649

<a id="M04-CAP-RESEARCH-802b8c1b9cf43ef1"></a>
- **M04-CAP-RESEARCH-802b8c1b9cf43ef1**: Quality Indicators
  Origin: original 4649

<a id="M04-CAP-RESEARCH-302a41e98289d67f"></a>
- **M04-CAP-RESEARCH-302a41e98289d67f**: Long-term Follow-up
  Origin: original 4649

<a id="M04-CAP-RESEARCH-12d2939ed4920513"></a>
- **M04-CAP-RESEARCH-12d2939ed4920513**: Research Functions:
  Origin: original 4649

<a id="M04-CAP-RESEARCH-8b82f2b1d221e643"></a>
- **M04-CAP-RESEARCH-8b82f2b1d221e643**: De-identified Cohorts
  Origin: original 4649

<a id="M04-CAP-RESEARCH-9f3c2d485514a453"></a>
- **M04-CAP-RESEARCH-9f3c2d485514a453**: Registry Data
  Origin: original 4649

<a id="M04-CAP-RESEARCH-4b2406f9b6b75d4d"></a>
- **M04-CAP-RESEARCH-4b2406f9b6b75d4d**: Outcome Comparison
  Origin: original 4649

<a id="M04-CAP-RESEARCH-7901bec99ecf0210"></a>
- **M04-CAP-RESEARCH-7901bec99ecf0210**: Eligibility Screening Support
  Origin: original 4649

<a id="M04-CAP-RESEARCH-902df0a40ff343c6"></a>
- **M04-CAP-RESEARCH-902df0a40ff343c6**: Data Quality Assessment
  Origin: original 4649

<a id="M04-CAP-RESEARCH-fb7ad1a05b2b7520"></a>
- **M04-CAP-RESEARCH-fb7ad1a05b2b7520**: Longitudinal Research Datasets
  Origin: original 4649

<a id="M04-CAP-RESEARCH-ca5701d6f9dd9df5"></a>
- **M04-CAP-RESEARCH-ca5701d6f9dd9df5**: Multicenter Dataset Support
  Origin: original 4649

<a id="M04-CAP-RESEARCH-dc0d643ae54f3d74"></a>
- **M04-CAP-RESEARCH-dc0d643ae54f3d74**: Governance:
  Origin: original 4649

<a id="M04-CAP-RESEARCH-2633ca6d9d42b0c7"></a>
- **M04-CAP-RESEARCH-2633ca6d9d42b0c7**: Research processing requires appropriate authorization, consent where applicable, de-identification and auditability.
  Origin: original 4649

<a id="M04-CAP-RESEARCH-b937e3c2b76b7742"></a>
- **M04-CAP-RESEARCH-b937e3c2b76b7742**: # Research AI / Population Intelligence
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-16b077b9974ebd07"></a>
- **M04-CAP-RESEARCH-16b077b9974ebd07**: Revision 2026-09-14 · EXT-RESEARCH · DRAFT_SPECIFICATION · CAP-RESEARCH · governed secondary analysis / population and longitudinal research · roadmap RESEARCH.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-b853e02b0059a580"></a>
- **M04-CAP-RESEARCH-b853e02b0059a580**: ## Purpose and overlap
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-b7c054dea6678014"></a>
- **M04-CAP-RESEARCH-b7c054dea6678014**: Use authorized longitudinal data to investigate patterns and generate hypotheses. Sources 1823/1826 already contain cohort matching, correlation and knowledge mining; 4649 contains research authorization/de-identification/audit. 1438's “anonymous” description is an intent, not proof of anonymity. 1915 research education remains educational. Extend shared governance and evidence contracts rather than merge all analytics into a single authority.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-7a55ca44e40a330a"></a>
- **M04-CAP-RESEARCH-7a55ca44e40a330a**: ## Seven distinct analytics purposes
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-7fc9e1f1358a50f6"></a>
- **M04-CAP-RESEARCH-7fc9e1f1358a50f6**: | Purpose | Scope and output | Authority boundary |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-c422bb1b032c6973"></a>
- **M04-CAP-RESEARCH-c422bb1b032c6973**: |---|---|---|
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-30e16269ce423cb3"></a>
- **M04-CAP-RESEARCH-30e16269ce423cb3**: | Patient Analytics | individual trends/explanations | patient and care delegation |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-c10e028a44dc30e3"></a>
- **M04-CAP-RESEARCH-c10e028a44dc30e3**: | Clinical Analytics | clinician's authorized care cohort and outcomes | treating/clinical quality role |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-4426d6ed7d9ad3a0"></a>
- **M04-CAP-RESEARCH-4426d6ed7d9ad3a0**: | Provider Analytics | capacity, workload and operational quality | provider operations; no unnecessary clinical details |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-e3fe79ba924daf17"></a>
- **M04-CAP-RESEARCH-e3fe79ba924daf17**: | Population Analytics | aggregate patterns across authorized cohorts | population analysis release policy |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-bf213cceb1759b12"></a>
- **M04-CAP-RESEARCH-bf213cceb1759b12**: | Epidemiology | incidence, trends, surveillance methods | defined surveillance purpose and denominator |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-4da3e5fdfdc41a36"></a>
- **M04-CAP-RESEARCH-4da3e5fdfdc41a36**: | Research Analytics | protocol-specific hypothesis/outcome analyses | approved research governance |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-7aa4741c3580cfef"></a>
- **M04-CAP-RESEARCH-7aa4741c3580cfef**: | Public Health Reporting | authority-defined reporting dataset | recipient/jurisdiction-specific reporting basis |
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-0017e348a8b113e3"></a>
- **M04-CAP-RESEARCH-0017e348a8b113e3**: Eurostat/government reporting is a separately versioned recipient contract; it is not an API granting general access to research data. Different purposes may share computation infrastructure while retaining independent permission, definitions and release policy.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-3d9cf851b98891b7"></a>
- **M04-CAP-RESEARCH-3d9cf851b98891b7**: ## Actors, inputs and cohort lifecycle
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-304c567439d8417b"></a>
- **M04-CAP-RESEARCH-304c567439d8417b**: Investigator defines protocol and estimand; data steward approves datasets; privacy/disclosure reviewer authorizes release; clinical/evidence reviewer evaluates implications. Patients/guardians provide consent when it is the applicable basis; other legal bases must be documented and reviewed rather than presumed.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-3e7c901b9cf77746"></a>
- **M04-CAP-RESEARCH-3e7c901b9cf77746**: Input references governed records: conditions, phenotype, longitudinal medication exposure, labs, comorbidities and outcomes. CohortSpec records inclusion/exclusion, index date, observation window, missingness, outcome definitions, versioned code lists, provenance, dataset release and permitted purpose. A hypertension study can join these authorized longitudinal dimensions; the resulting association is not automatically causal treatment evidence.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-ea572b69951c8dce"></a>
- **M04-CAP-RESEARCH-ea572b69951c8dce**: Functions include cohort discovery, phenotype clustering, treatment/outcome and disease-progression analysis, adverse-event signals, biomarker/population/therapy-response patterns, rare-disease patterns and hypothesis generation. Each output names method, denominator, bias/confounding limits and data completeness.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-ba30ff79682a3073"></a>
- **M04-CAP-RESEARCH-ba30ff79682a3073**: ## Ownership, privacy and interfaces
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-59b8d2499d72e573"></a>
- **M04-CAP-RESEARCH-59b8d2499d72e573**: CAP-RESEARCH owns protocol, cohort/query version, governed dataset release, AnalysisRun and Hypothesis. Clinical stores retain originals; pseudonym linkage keys reside in a separately controlled service. Pseudonymization is not anonymization. Minimize fields, restrict rare/small groups, apply disclosure review and query-history controls to reduce differencing attacks. Privacy-preserving/federated/aggregate methods require their own evaluation and configured release policy; no universal safe cell threshold is assumed.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-877783add83a585b"></a>
- **M04-CAP-RESEARCH-877783add83a585b**: Proposed commands: registerProtocol, requestCohort, approveDatasetRelease, executeAnalysis, requestDisclosureReview, submitEvidenceReview. Events DatasetReleaseApproved, AnalysisCompleted, HypothesisSubmitted and EvidenceReleaseApproved carry opaque IDs, never row-level exports. A denied query must not reveal membership. Unauthorized jurisdiction, missing basis or expired release returns a refusal. Dependencies CAP-DATA, CAP-CONSENT, CAP-AI, CAP-AUDIT.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-6d2ba87f527845b0"></a>
- **M04-CAP-RESEARCH-6d2ba87f527845b0**: ## Controlled knowledge loop and learning
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-776d5e565a16c4f9"></a>
- **M04-CAP-RESEARCH-776d5e565a16c4f9**: Patient data → authorized minimized/pseudonymized research dataset → Research AI → hypothesis → methodological and independent clinical validation appropriate to the claim → evidence release → Knowledge AI → separately validated Clinical AI/twin/pharmacology release.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-4b3cefa71b899b23"></a>
- **M04-CAP-RESEARCH-4b3cefa71b899b23**: A Hypothesis cannot enter the clinical knowledge pack as an established fact. EvidenceRelease records study/protocol, dataset/method versions, validation evidence, reviewer, applicability, limitations and expiry/review triggers. Conflicting results coexist with provenance. Promotion and rollback are explicit signed lifecycle actions.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-d700b5b5759060f2"></a>
- **M04-CAP-RESEARCH-d700b5b5759060f2**: The improvement loop is governed dataset → evaluation → approved research/training task → model candidate → validation → deployment approval → monitoring. Dataset reuse, model training and external-provider transfer each require an appropriate approved basis. Withdrawal and changed permissions invalidate future access and trigger governed retention/model-impact assessment; never promise that deleting one record erases its influence from a trained model.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-4269db1718be66eb"></a>
- **M04-CAP-RESEARCH-4269db1718be66eb**: ## Safety, failures and observability
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-739bf430ef1a2a29"></a>
- **M04-CAP-RESEARCH-739bf430ef1a2a29**: Research AI cannot change treatment, dose, clinical facts or patient model release. Signals require validation; correlation is not causation. Prevent cross-tenant joins, membership leakage, small-cohort exports and uncontrolled researcher re-identification. Audit dataset access, approved query fingerprints, disclosure decisions and evidence release history; sensitive outputs remain in controlled storage.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-f4b816255574bbb9"></a>
- **M04-CAP-RESEARCH-f4b816255574bbb9**: ## Acceptance and open gates
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-2aba2811bc8a5b53"></a>
- **M04-CAP-RESEARCH-2aba2811bc8a5b53**: Tests block unauthorized cohorts, disclosure bypass, expired governance, unapproved model training and hypothesis-to-care publication. Replays use exact cohort/data/code versions. Changing outcome definitions creates a new analysis. Clinical consumers accept only approved evidence releases applicable to their task. No research dataset, approved study, trained model or public reporting integration exists yet; methodology, jurisdiction decisions and independent governance remain open.
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-b1a01f371983c85b"></a>
- **M04-CAP-RESEARCH-b1a01f371983c85b**: Distinct analytics purposes
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-a304c0b407b82cb4"></a>
- **M04-CAP-RESEARCH-a304c0b407b82cb4**: Cohort version and longitudinal exposure/outcome
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-4ca664fbd4a531a8"></a>
- **M04-CAP-RESEARCH-4ca664fbd4a531a8**: Pseudonymization/aggregation and disclosure control
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-7c8539ee84a5174c"></a>
- **M04-CAP-RESEARCH-7c8539ee84a5174c**: Governed hypothesis to evidence publication
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-e3b8ae8d0997795f"></a>
- **M04-CAP-RESEARCH-e3b8ae8d0997795f**: No correlation-to-causation claim
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-6d551b6f1b39b7af"></a>
- **M04-CAP-RESEARCH-6d551b6f1b39b7af**: Separate training consent/legal basis
  Origin: EXT-RESEARCH

<a id="M04-CAP-RESEARCH-138313061f2528fb"></a>
- **M04-CAP-RESEARCH-138313061f2528fb**: Knowledge feedback approval and rollback
  Origin: EXT-RESEARCH

## Preserved source metadata

<a id="M04-CAP-RESEARCH-4fbeeb87456accf5"></a>
- **M04-CAP-RESEARCH-4fbeeb87456accf5**: Supports

<a id="M04-CAP-RESEARCH-5ba74d8fcc7b20cc"></a>
- **M04-CAP-RESEARCH-5ba74d8fcc7b20cc**: Status

<a id="M04-CAP-RESEARCH-d5232cbd3a326267"></a>
- **M04-CAP-RESEARCH-d5232cbd3a326267**: Documentation

<a id="M04-CAP-RESEARCH-6f33acf3afb37064"></a>
- **M04-CAP-RESEARCH-6f33acf3afb37064**: ---

<a id="M04-CAP-RESEARCH-6510c5c511a879bc"></a>
- **M04-CAP-RESEARCH-6510c5c511a879bc**: Purpose:

<a id="M04-CAP-RESEARCH-b34f593f0f83a1d1"></a>
- **M04-CAP-RESEARCH-b34f593f0f83a1d1**: Core Functions:

<a id="M04-CAP-RESEARCH-b88b375a44ccd619"></a>
- **M04-CAP-RESEARCH-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-04/requirement_migration.json) · [Gap disposition](../../../audit/master-04/gap_disposition.json) · [Readiness gates](../../../audit/master-04/implementation_gate_matrix.json).
