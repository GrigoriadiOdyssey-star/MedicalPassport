# CORE-CAP-LABORATORY — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## precision-critical-laboratory-escalation

Laboratory owns critical-result detection context and result acknowledgement/escalation handoff. Patient-bound assay versions, critical-value policy and qualified interpretation precede escalation; successful delivery is not clinician acknowledgement.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## ai-laboratory-result-operations

Laboratory owns assay quality-control, sample-routing/result delivery context and versioned reference ranges. Adult/pediatric/pregnancy/geriatric labels alone cannot select a valid interval without specimen/method/unit/population provenance. Analyzer operation and clinical interpretation remain qualified activities.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## clinical-genomics-and-hemostasis-results

Laboratory owns cytogenetic, embryo genetic-testing, WGS/WES, variant-interpretation and hemostasis result profiles. Method/specimen/person/reference genome and interpretation version remain explicit; ACMG class labels and AI interpretations are attributed evidence, not independently certified pathogenicity or treatment eligibility.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Preserve age/development, body size and acquisition time where present, laterality/site, clinical phase, donor/recipient or mother/fetus identity, guardian/assent and adolescent confidentiality. No universal dose, threshold or protocol is inferred. Plans, actual procedures, device operation, clinical diagnoses and model suggestions stay separately attributable. Keep germline/somatic and embryo/parent linkage separate. Reclassification must preserve original interpretation and notify authorized consumers; no silent pathogenicity overwrite.

## Source scope

- Original 1597 / precision-critical-laboratory-escalation: AI Critical Laboratory Alert Engine — Detects critical laboratory values.
- Original 1414 / ai-laboratory-result-operations: AI Laboratory Quality Assurance — Monitors laboratory quality.
- Original 1598 / ai-laboratory-result-operations: AI Laboratory Reference Range Engine — Manages laboratory reference ranges.
- Original 1869 / ai-laboratory-result-operations: AI Laboratory Operations — Coordinates laboratory operations.
- Original 2404 / clinical-genomics-and-hemostasis-results: Cytogenetics Module — Supports chromosomal diagnostics.
- Original 2657 / clinical-genomics-and-hemostasis-results: Embryo Genetic Testing Module — Supports embryo genetic diagnostics.
- Original 2673 / clinical-genomics-and-hemostasis-results: Whole Genome Sequencing Module — Supports whole genome sequencing workflows.
- Original 2674 / clinical-genomics-and-hemostasis-results: Whole Exome Sequencing Module — Supports whole exome sequencing.
- Original 2676 / clinical-genomics-and-hemostasis-results: Variant Interpretation Module — Supports interpretation of genetic variants.
- Original 3910 / clinical-genomics-and-hemostasis-results: Pediatric Hemostasis Module — Supports hemostasis monitoring.

## Requirements and source metadata

<a id="M18-CAP-LABORATORY-b5dff8c7c7526bd1"></a>
- **M18-CAP-LABORATORY-b5dff8c7c7526bd1**: Detects critical laboratory values.
  Applies to original IDs: 1597.

<a id="M18-CAP-LABORATORY-4fbeeb87456accf5"></a>
- **M18-CAP-LABORATORY-4fbeeb87456accf5**: Supports
  Applies to original IDs: 1597, 1414, 1598, 1869, 2404, 2657, 2673, 2674, 2676, 3910.

<a id="M18-CAP-LABORATORY-2e333626beb3a145"></a>
- **M18-CAP-LABORATORY-2e333626beb3a145**: Immediate Alerts
  Applies to original IDs: 1597.

<a id="M18-CAP-LABORATORY-9d18f1177aafa802"></a>
- **M18-CAP-LABORATORY-9d18f1177aafa802**: Physician Notification
  Applies to original IDs: 1597.

<a id="M18-CAP-LABORATORY-35a5b6383bb47b46"></a>
- **M18-CAP-LABORATORY-35a5b6383bb47b46**: Emergency Escalation
  Applies to original IDs: 1597.

<a id="M18-CAP-LABORATORY-5ba74d8fcc7b20cc"></a>
- **M18-CAP-LABORATORY-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 1597, 1414, 1598, 1869, 2404, 2657, 2673, 2674, 2676, 3910.

<a id="M18-CAP-LABORATORY-d5232cbd3a326267"></a>
- **M18-CAP-LABORATORY-d5232cbd3a326267**: Documentation
  Applies to original IDs: 1597, 1414, 1598, 1869, 2404, 2657, 2673, 2674, 2676, 3910.

<a id="M18-CAP-LABORATORY-6f33acf3afb37064"></a>
- **M18-CAP-LABORATORY-6f33acf3afb37064**: ---
  Applies to original IDs: 1597, 1414, 1598, 1869, 2404, 2657, 2673, 2674, 2676, 3910.

<a id="M18-CAP-LABORATORY-0310e3ceb0c11ea8"></a>
- **M18-CAP-LABORATORY-0310e3ceb0c11ea8**: Monitors laboratory quality.
  Applies to original IDs: 1414.

<a id="M18-CAP-LABORATORY-ae2755d5eb534c8a"></a>
- **M18-CAP-LABORATORY-ae2755d5eb534c8a**: Internal QC
  Applies to original IDs: 1414.

<a id="M18-CAP-LABORATORY-86f83245fc3e51f5"></a>
- **M18-CAP-LABORATORY-86f83245fc3e51f5**: External QC
  Applies to original IDs: 1414.

<a id="M18-CAP-LABORATORY-1e7bc62c8b8e7f25"></a>
- **M18-CAP-LABORATORY-1e7bc62c8b8e7f25**: Error Detection
  Applies to original IDs: 1414.

<a id="M18-CAP-LABORATORY-d09f9e27125000ee"></a>
- **M18-CAP-LABORATORY-d09f9e27125000ee**: Manages laboratory reference ranges.
  Applies to original IDs: 1598.

<a id="M18-CAP-LABORATORY-6d4c9902983c967b"></a>
- **M18-CAP-LABORATORY-6d4c9902983c967b**: Adult
  Applies to original IDs: 1598.

<a id="M18-CAP-LABORATORY-4af23dfbea9d3877"></a>
- **M18-CAP-LABORATORY-4af23dfbea9d3877**: Pediatric
  Applies to original IDs: 1598.

<a id="M18-CAP-LABORATORY-32bc9690af72c2cf"></a>
- **M18-CAP-LABORATORY-32bc9690af72c2cf**: Pregnancy
  Applies to original IDs: 1598.

<a id="M18-CAP-LABORATORY-84f6e35eedee3a19"></a>
- **M18-CAP-LABORATORY-84f6e35eedee3a19**: Geriatric
  Applies to original IDs: 1598.

<a id="M18-CAP-LABORATORY-f05c88d3f3b0198f"></a>
- **M18-CAP-LABORATORY-f05c88d3f3b0198f**: Coordinates laboratory operations.
  Applies to original IDs: 1869.

<a id="M18-CAP-LABORATORY-d7a97c535fb53293"></a>
- **M18-CAP-LABORATORY-d7a97c535fb53293**: Sample Routing
  Applies to original IDs: 1869.

<a id="M18-CAP-LABORATORY-e5c9d6923f098479"></a>
- **M18-CAP-LABORATORY-e5c9d6923f098479**: Analyzer Utilization
  Applies to original IDs: 1869.

<a id="M18-CAP-LABORATORY-43a3c4a02a862c26"></a>
- **M18-CAP-LABORATORY-43a3c4a02a862c26**: Result Delivery
  Applies to original IDs: 1869.

<a id="M18-CAP-LABORATORY-721d8690e5b9e83a"></a>
- **M18-CAP-LABORATORY-721d8690e5b9e83a**: Supports chromosomal diagnostics.
  Applies to original IDs: 2404.

<a id="M18-CAP-LABORATORY-3ae494fa7e0f13d4"></a>
- **M18-CAP-LABORATORY-3ae494fa7e0f13d4**: Karyotyping
  Applies to original IDs: 2404.

<a id="M18-CAP-LABORATORY-bdc0feec0aa2a23b"></a>
- **M18-CAP-LABORATORY-bdc0feec0aa2a23b**: FISH
  Applies to original IDs: 2404.

<a id="M18-CAP-LABORATORY-293a37108eed2e58"></a>
- **M18-CAP-LABORATORY-293a37108eed2e58**: Chromosomal Microarray
  Applies to original IDs: 2404.

<a id="M18-CAP-LABORATORY-4b25d562ab3425b0"></a>
- **M18-CAP-LABORATORY-4b25d562ab3425b0**: Supports embryo genetic diagnostics.
  Applies to original IDs: 2657.

<a id="M18-CAP-LABORATORY-3b950d312f28e602"></a>
- **M18-CAP-LABORATORY-3b950d312f28e602**: PGT-A
  Applies to original IDs: 2657.

<a id="M18-CAP-LABORATORY-f2c34924cbea5405"></a>
- **M18-CAP-LABORATORY-f2c34924cbea5405**: PGT-M
  Applies to original IDs: 2657.

<a id="M18-CAP-LABORATORY-bdef6e6446a97208"></a>
- **M18-CAP-LABORATORY-bdef6e6446a97208**: PGT-SR
  Applies to original IDs: 2657.

<a id="M18-CAP-LABORATORY-b2e1bc0ae2cfb0da"></a>
- **M18-CAP-LABORATORY-b2e1bc0ae2cfb0da**: Genetic Risk Assessment
  Applies to original IDs: 2657.

<a id="M18-CAP-LABORATORY-b3d654ebbe0d5b0a"></a>
- **M18-CAP-LABORATORY-b3d654ebbe0d5b0a**: Supports whole genome sequencing workflows.
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-14a75835150a1975"></a>
- **M18-CAP-LABORATORY-14a75835150a1975**: WGS
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-2ca482a36dc95b94"></a>
- **M18-CAP-LABORATORY-2ca482a36dc95b94**: Variant Calling
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-49c05b1bc24cb43e"></a>
- **M18-CAP-LABORATORY-49c05b1bc24cb43e**: Annotation
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-e60c316d3a5e1ecf"></a>
- **M18-CAP-LABORATORY-e60c316d3a5e1ecf**: Interpretation
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-84090e00f0049f96"></a>
- **M18-CAP-LABORATORY-84090e00f0049f96**: Clinical Reporting
  Applies to original IDs: 2673.

<a id="M18-CAP-LABORATORY-eabd38c69ab9695f"></a>
- **M18-CAP-LABORATORY-eabd38c69ab9695f**: Supports whole exome sequencing.
  Applies to original IDs: 2674.

<a id="M18-CAP-LABORATORY-8c55f65607f54c63"></a>
- **M18-CAP-LABORATORY-8c55f65607f54c63**: WES Analysis
  Applies to original IDs: 2674.

<a id="M18-CAP-LABORATORY-6858fa61bebdf031"></a>
- **M18-CAP-LABORATORY-6858fa61bebdf031**: Variant Prioritization
  Applies to original IDs: 2674.

<a id="M18-CAP-LABORATORY-94857e10b0dccf29"></a>
- **M18-CAP-LABORATORY-94857e10b0dccf29**: Clinical Correlation
  Applies to original IDs: 2674.

<a id="M18-CAP-LABORATORY-c1df94ec0b981a5c"></a>
- **M18-CAP-LABORATORY-c1df94ec0b981a5c**: Disease Association
  Applies to original IDs: 2674.

<a id="M18-CAP-LABORATORY-543d4d94421e5bf5"></a>
- **M18-CAP-LABORATORY-543d4d94421e5bf5**: Supports interpretation of genetic variants.
  Applies to original IDs: 2676.

<a id="M18-CAP-LABORATORY-7bed75a891c3336b"></a>
- **M18-CAP-LABORATORY-7bed75a891c3336b**: ACMG Classification
  Applies to original IDs: 2676.

<a id="M18-CAP-LABORATORY-0fd38913a1186943"></a>
- **M18-CAP-LABORATORY-0fd38913a1186943**: Pathogenicity Assessment
  Applies to original IDs: 2676.

<a id="M18-CAP-LABORATORY-956f5f7dcda2da54"></a>
- **M18-CAP-LABORATORY-956f5f7dcda2da54**: Evidence Collection
  Applies to original IDs: 2676.

<a id="M18-CAP-LABORATORY-f55c9043fbee3135"></a>
- **M18-CAP-LABORATORY-f55c9043fbee3135**: Clinical Significance
  Applies to original IDs: 2676.

<a id="M18-CAP-LABORATORY-4adc4fb0386df8b1"></a>
- **M18-CAP-LABORATORY-4adc4fb0386df8b1**: Supports hemostasis monitoring.
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-44c7ff2ac255ee7e"></a>
- **M18-CAP-LABORATORY-44c7ff2ac255ee7e**: PT
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-e38ed37cacad6ef9"></a>
- **M18-CAP-LABORATORY-e38ed37cacad6ef9**: INR
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-01e5aa71a3931103"></a>
- **M18-CAP-LABORATORY-01e5aa71a3931103**: aPTT
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-f7c9d7966b731ad1"></a>
- **M18-CAP-LABORATORY-f7c9d7966b731ad1**: Fibrinogen
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-e52a32d9571188af"></a>
- **M18-CAP-LABORATORY-e52a32d9571188af**: D-Dimer
  Applies to original IDs: 3910.

<a id="M18-CAP-LABORATORY-abea5217bc84c61d"></a>
- **M18-CAP-LABORATORY-abea5217bc84c61d**: AI Interpretation
  Applies to original IDs: 3910.
