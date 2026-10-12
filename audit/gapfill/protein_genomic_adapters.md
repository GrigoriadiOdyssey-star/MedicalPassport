# Protein / Genomic Intelligence Adapters
Revision 2026-09-14 · EXT-GENOMIC · DRAFT_SPECIFICATION · CAP-AI · scientific integration / genomics and molecular evidence · roadmap RESEARCH.

## Purpose and existing coverage
Connect external scientific models and sources through a provider-neutral contract. Preserve existing raw-data references, variant reporting/reanalysis (2401), PGx/CYP analysis (2399, 2677), oncology molecular evidence (4220, 5130) and inherited-family context (5018). Proteinuria modules 2149/4583 are renal observations, not protein-structure engines. This is an adapter extension, not an attempt to reproduce AlphaFold or replace a clinical laboratory.

## Scope, actors and authority
Support protein structure intelligence, variant effects/interpretation, functional genomics, pharmacogenomics, gene–drug and genotype–phenotype relationships, and molecular pathways. A laboratory supplies authorized reports and QC; a qualified genetics/molecular reviewer assesses clinical relevance; a researcher uses separately authorized datasets; the patient controls available access/delegation under applicable policy. Neither a scientific service identity nor a general chatbot may authorize a clinical interpretation.

## Inputs, ownership and output types
CAP-LABORATORY retains tests/results; CAP-DATA retains patient-linked clinical records and genomic report references. The adapter stores execution metadata and derived artifacts under CAP-AI. Input may reference approved sequence/variant files, reference assembly, transcript and version, coordinate convention, alleles, zygosity/phase where known, sample/tissue, germline/somatic/pathogen context, quality flags and pipeline release. Human and pathogen genomes are distinct datasets with distinct identity implications.
Protein requests include sequence/reference version, isoform, model task and intended use. Output includes provider/model version, task, input digest, returned artifact, confidence semantics, limitations, reference dataset/license, provenance and approval state. Structure prediction, functional effect prediction and clinical actionability are three separate result types. Do not infer drug benefit from a predicted fold.

## Adapter and provider lifecycle
Proposed interface: describeCapabilities, validateInput, submitScientificJob, queryJob, retrieveArtifact, cancelJob. Registry entry pins provider, API/model version, accepted formats, data residency, retention/training terms, license, intended-use evaluation and fallback eligibility. No clinical provider is configured by this document.
Validate consent/purpose and legal basis → minimize data → check provider eligibility → submit idempotent job → quarantine output → check schema/provenance/QC → specialist review where required → release a typed result. Cancellation/timeout does not erase the audit trail. A change of model/provider starts a new derived artifact; it does not silently overwrite an interpretation.

## Standards and evidence links
Candidate exchange uses the FHIR Genomics Reporting guide with explicit implementation-guide and terminology versions, Observation/DiagnosticReport, specimen and Provenance links. Assembly/transcript and variant normalization rules must be tested per partner. [HL7 Genomics Reporting](https://hl7.org/fhir/uv/genomics-reporting/).
AlphaFold is an example of an external predicted-structure source with confidence information; its output is not itself experimental validation or patient-specific drug-response evidence. [AlphaFold FAQ](https://alphafold.ebi.ac.uk/faq). Provider examples establish no availability, clinical certification or integration claim.

## AI/twin role and privacy
Knowledge AI indexes approved evidence; Clinical AI can explain a reviewed interpretation; the twin references a released result with uncertainty. Raw sequence, family identifiers and rare variants require restricted access, export controls, retention limits and purpose separation. Pseudonymization does not remove re-identification risk. Research reuse and model training require a separately approved governance basis; a clinical test consent is not an automatic training grant.

## Failure modes, observability and acceptance
Reject reference-build mismatch, unsupported variant/isoform, inadequate QC, missing license or unapproved destination. Return unsupported/uncertain rather than manufacture a benign classification. Conflicting interpretations remain linked to their releases and reviewers. Monitor input/output version compatibility, rejection reasons, model drift and provider terms; redact sequence/variants from routine logs.
Tests must prevent wrong-build interpretation, provider fallback outside approved region and conversion of predicted structure into a clinical fact. Reanalysis preserves old interpretation and explains changed evidence. A provider outage yields an approved equivalent route for that task or abstention. Dependencies CAP-DATA, CAP-LABORATORY, CAP-AI, CAP-CONSENT. Open gates: clinical evaluation, datasets/licenses, consent policy, approved providers and precise exchange profiles.
