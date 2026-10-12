# MASTER-13 remaining-inventory review

Baseline: MASTER-12, commit 8b1ebd63ff7e02e1cefb6e3accbd00b654d56d3a. No historical artifact was rewritten. Only 534 previously UNAUDITED IDs are added to the review ledger in three batches (200, 200, 134).

## Meaning of completion

100% REVIEW means all 5175 original modules have an accounted Level-A-or-deeper review, a purpose, capability/domain classification, candidate owner boundary, risk routing and full source evidence. It does not mean that all requirements are clinically valid, all owners are canonically adopted, or implementation is ready. The remaining-source problems were 444 missing owner classifications and 90 missing narrative-purpose extractions; neither justified inventing a new canonical module.

## Purpose and boundary decisions

The full descriptions of the 90 short/workflow-only cases were inspected. Login, prescription renewal, referral, emergency activation and telemedicine diagrams describe different transitions; their synthesized purposes retain those transitions. A two-word sentence such as “Tracks scoliosis.” is meaningful when accompanied by the retained Cobb-angle, imaging and therapy requirements. Title-only descriptions are still rejected.

Early platform, access, directory, device, insurance and clinical-workspace modules received explicit probable-owner decisions. In specialty clusters, laboratory/biomarker functions, remote consultations, clinical trials and CDS are routed to their existing shared capabilities, with specialty context retained. Generic clinical registries and care coordination remain provisional specialty profiles. These decisions establish a reviewable boundary, not a canonical alias or new service.

During this pass, calibration corrected source sentences that were qualifiers rather than main purposes (for example, international telemedicine's licensing qualifier). Explicit summaries were grounded in the complete feature lists. The same current-pass IDs were corrected without incrementing their counts. Risk routing retains historical high-risk flags and includes prescribing, insulin, ventilation and triage; no absence-of-keyword claim establishes safety.

## Requirements that must survive later canonicalization

- 1300 and 2000: retain orchestration requirements, but do not treat “supreme intelligence” or “Foundation Architecture Complete” as verified capability, independent authority or readiness.
- 4305, 4311, 4312, 4332, 4333, 4345, 4347: separate delivery, allergy evidence, ingredient conflicts, minimal-disclosure exemption verification, QR verification, rule provenance and clinical decision support. Preserve explicit prohibitions on autonomous refusal/certification and on unsupported generated vaccination rules.
- 4734 and 4965: preserve both ROP descriptions. Gestational/birth-weight context, stage/zone, treatment pathways, respiratory context, refractive outcomes and post-treatment follow-up cannot disappear through title-based consolidation.
- 4903–4907: preserve optional cycle recording, confidential age-aware access, bleeding/hemodynamic escalation, functional impact, uncertainty despite limited imaging and adolescent-specific diagnostic safeguards.
- 3556 and 3896: rehabilitation profiles overlap, but Home Programs in 3556 and Joint Function in 3896 remain separately traceable.
- Clinical catalogs and device compatibility lists express source requirements, not proven availability, patient eligibility or validated live integrations.

Each batch retains the complete original description and every nonempty source line with line number and hash. Extracted requirement fragments and cached duplicate candidates are preserved separately. Semantic uniqueness remains unresolved until a later canonical comparison; no source is deleted or silently merged.

## Next safe action

No UNAUDITED original IDs remain. Close the existing deep-review queue, starting with vaccination CDS and allergy/exemption boundaries, neonatal ophthalmology and adolescent confidential workflows. Do not add these IDs to REVIEWED again. Keep normalization, canonicalization, gap integration and implementation-readiness counters independent.

Run `node scripts/validate-master13.mjs` to require complete inventory coverage and execute current and historical checks. The inherited single obsolete MASTER-09 guard remains replaced by the stronger historical-preservation test documented in MASTER-12; no additional historical test is excluded.
