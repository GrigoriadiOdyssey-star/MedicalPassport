# CORE-CAP-LABORATORY — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## diagnostic-laboratory

Laboratory owns source-scoped molecular, allergen-component, renal pathology and immune diagnostic results, specimen lineage and amended reports. Biopsy procedures remain Encounter, images remain Imaging and therapy selection remains clinician-governed CDS. A molecular result alone is not treatment eligibility.

Acceptance additions: Preserve specimen/assay identity, method, reference context, units, report status and amendment lineage. Genomic variants and sensitization results require specialist interpretation; no automatic diagnosis, allergy label or targeted therapy from a positive assay.

## registry-laboratory

Laboratory owns attributed assay, biopsy/pathology, sequencing, antibody and allergy-test results. Specimen, method, reference population and revisions remain explicit; procedures stay with Encounter, images with Imaging and clinical diagnosis with qualified reviewers.

Acceptance additions: Preserve source identity, source-specific fields, verification, chronology and correction lineage. Test unknown versus absent states, wrong-patient/tenant binding, stale or revoked access, conflicting reports and attributed human disposition. Clinical actions and sensitive pediatric/guardian disclosure require separately approved workflows; no inferred automation or compatibility approval.

## ai-assisted-laboratory-workflows

Laboratory owns specimen routing, collection/analysis/reporting workflow and its attributed state. AI can propose queue/routing decisions but cannot replace specimen identity, assay verification or result authorization.

Acceptance additions: Preserve specimen/patient binding, chain of custody, priority author, timestamps and report revisions. Reject duplicate routing, wrong patient and stale requests; automation failure must not fabricate collection, performed assay or verified result.

## Source scope

- Original 2131 / diagnostic-laboratory: Molecular Diagnostics Module — Supports molecular diagnostics.
- Original 3692 / diagnostic-laboratory: Pediatric Oncology Molecular Diagnostics Module — Supports molecular oncology.
- Original 4405 / diagnostic-laboratory: Food Allergen Component Diagnostics Module — Supports component-resolved allergy diagnostics.
- Original 4565 / diagnostic-laboratory: Pediatric Kidney Biopsy, Renal Pathology & Molecular Diagnostics Module — Connect renal biopsy, pathology, molecular diagnostics and clinical nephrology in one traceable workflow.
- Original 5021 / diagnostic-laboratory: Pediatric Immunology Laboratory, Flow Cytometry & Functional Diagnostics Module — Create a unified structured environment for advanced pediatric immune diagnostics.
- Original 196 / registry-laboratory: Antibody Registry — Maintain irregular and alloantibody records with transfusion-warning display.
- Original 473 / registry-laboratory: Skin Biopsy Registry — Stores dermatological biopsy information.
- Original 574 / registry-laboratory: Thyroid Biopsy Registry — Stores fine-needle aspiration biopsy results.
- Original 637 / registry-laboratory: Urinalysis Registry — Stores urine laboratory examinations.
- Original 788 / registry-laboratory: Breast Biopsy Registry — Stores biopsy procedures.
- Original 1098 / registry-laboratory: Pediatric Allergy Skin Test Registry — Tracks dermatologic allergy testing.
- Original 2105 / registry-laboratory: HbA1c Monitoring Registry — Maintains HbA1c history.
- Original 2393 / registry-laboratory: Genetic Variant Registry — Maintains genomic variant information.
- Original 2401 / registry-laboratory: Whole Genome Sequencing Registry — Maintains whole genome sequencing data.
- Original 2402 / registry-laboratory: Whole Exome Sequencing Registry — Maintains whole exome sequencing records.
- Original 2420 / registry-laboratory: Cytokine Profile Registry — Maintains cytokine profile history.
- Original 2463 / registry-laboratory: Renal Biopsy Registry — Maintains kidney biopsy records.
- Original 2483 / registry-laboratory: Liver Biopsy Registry — Maintains liver biopsy records.
- Original 2504 / registry-laboratory: Gastrointestinal Biopsy Registry — Maintains gastrointestinal biopsy records.
- Original 2659 / registry-laboratory: Reproductive Hormone Registry — Maintains reproductive hormone history.
- Original 3229 / registry-laboratory: Pediatric Microbiology Registry — Maintains microbiological data.
- Original 3390 / registry-laboratory: Pediatric Allergy Testing Registry — Maintains allergy diagnostics.
- Original 3431 / registry-laboratory: Pediatric Microbiology Registry — Maintains microbiology studies.
- Original 3571 / registry-laboratory: Pediatric Microbiology Registry — Maintains microbiology results.
- Original 1413 / ai-assisted-laboratory-workflows: AI Smart Laboratory Workflow — Optimizes laboratory operations.
- Original 1747 / ai-assisted-laboratory-workflows: AI Laboratory Workflow Coordinator — Coordinates laboratory workflow.

## Requirements and source metadata

<a id="M17-CAP-LABORATORY-191faee9abcc0de8"></a>
- **M17-CAP-LABORATORY-191faee9abcc0de8**: Supports molecular diagnostics.
  Applies to original IDs: 2131.

<a id="M17-CAP-LABORATORY-4fbeeb87456accf5"></a>
- **M17-CAP-LABORATORY-4fbeeb87456accf5**: Supports
  Applies to original IDs: 2131, 3692, 196, 473, 574, 637, 788, 1098, 2105, 2393, 2401, 2402, 2420, 2463, 2483, 2504, 2659, 3229, 3390, 3431, 3571, 1413, 1747.

<a id="M17-CAP-LABORATORY-7226a20849c36d33"></a>
- **M17-CAP-LABORATORY-7226a20849c36d33**: NGS
  Applies to original IDs: 2131.

<a id="M17-CAP-LABORATORY-99e946885f0d783a"></a>
- **M17-CAP-LABORATORY-99e946885f0d783a**: PCR
  Applies to original IDs: 2131, 3229, 3431, 3571.

<a id="M17-CAP-LABORATORY-2a98ae43cba5734e"></a>
- **M17-CAP-LABORATORY-2a98ae43cba5734e**: Mutation Analysis
  Applies to original IDs: 2131.

<a id="M17-CAP-LABORATORY-5ba74d8fcc7b20cc"></a>
- **M17-CAP-LABORATORY-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 2131, 3692, 4405, 196, 473, 574, 637, 788, 1098, 2105, 2393, 2401, 2402, 2420, 2463, 2483, 2504, 2659, 3229, 3390, 3431, 3571, 1413, 1747.

<a id="M17-CAP-LABORATORY-d5232cbd3a326267"></a>
- **M17-CAP-LABORATORY-d5232cbd3a326267**: Documentation
  Applies to original IDs: 2131, 3692, 4405, 4565, 5021, 196, 473, 574, 637, 788, 1098, 2105, 2393, 2401, 2402, 2420, 2463, 2483, 2504, 2659, 3229, 3390, 3431, 3571, 1413, 1747.

<a id="M17-CAP-LABORATORY-6f33acf3afb37064"></a>
- **M17-CAP-LABORATORY-6f33acf3afb37064**: ---
  Applies to original IDs: 2131, 3692, 4405, 4565, 5021, 196, 473, 574, 637, 788, 1098, 2105, 2393, 2401, 2402, 2420, 2463, 2483, 2504, 2659, 3229, 3390, 3431, 3571, 1413, 1747.

<a id="M17-CAP-LABORATORY-c8d8fb4fbbd53993"></a>
- **M17-CAP-LABORATORY-c8d8fb4fbbd53993**: Supports molecular oncology.
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-9724454961da7c0a"></a>
- **M17-CAP-LABORATORY-9724454961da7c0a**: Tumor Sequencing
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-3c8e11935907fa6a"></a>
- **M17-CAP-LABORATORY-3c8e11935907fa6a**: Mutational Analysis
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-de52fcdf8569a8e6"></a>
- **M17-CAP-LABORATORY-de52fcdf8569a8e6**: Fusion Genes
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-439c72a5649fb524"></a>
- **M17-CAP-LABORATORY-439c72a5649fb524**: Targeted Therapy Selection
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-ebb78406d2c72ad4"></a>
- **M17-CAP-LABORATORY-ebb78406d2c72ad4**: Precision Oncology
  Applies to original IDs: 3692.

<a id="M17-CAP-LABORATORY-8770592b586af7a7"></a>
- **M17-CAP-LABORATORY-8770592b586af7a7**: Supports component-resolved allergy diagnostics.
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-21d94006fa494f95"></a>
- **M17-CAP-LABORATORY-21d94006fa494f95**: Integrates
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-1ea1c1f6f4ef568c"></a>
- **M17-CAP-LABORATORY-1ea1c1f6f4ef568c**: Allergen Source
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-37cd067f87c98390"></a>
- **M17-CAP-LABORATORY-37cd067f87c98390**: Molecular Components
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-b1847bdd88ae0a99"></a>
- **M17-CAP-LABORATORY-b1847bdd88ae0a99**: Specific IgE
  Applies to original IDs: 4405, 3390.

<a id="M17-CAP-LABORATORY-9ad4148533271c14"></a>
- **M17-CAP-LABORATORY-9ad4148533271c14**: Cross-reactivity
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-9ce525c8dcd33cf2"></a>
- **M17-CAP-LABORATORY-9ce525c8dcd33cf2**: Clinical History
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-333c215d53b310b3"></a>
- **M17-CAP-LABORATORY-333c215d53b310b3**: Challenge Results
  Applies to original IDs: 4405.

<a id="M17-CAP-LABORATORY-a6fa6d83b3f964f8"></a>
- **M17-CAP-LABORATORY-a6fa6d83b3f964f8**: Specialist Interpretation
  Applies to original IDs: 4405, 5021.

<a id="M17-CAP-LABORATORY-6510c5c511a879bc"></a>
- **M17-CAP-LABORATORY-6510c5c511a879bc**: Purpose:
  Applies to original IDs: 4565, 5021.

<a id="M17-CAP-LABORATORY-d03d55197b169b90"></a>
- **M17-CAP-LABORATORY-d03d55197b169b90**: Connect renal biopsy, pathology, molecular diagnostics and clinical nephrology in one traceable workflow.
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-a18430c2e5b91505"></a>
- **M17-CAP-LABORATORY-a18430c2e5b91505**: Core Functions:
  Applies to original IDs: 4565, 5021.

<a id="M17-CAP-LABORATORY-d793bce598d42173"></a>
- **M17-CAP-LABORATORY-d793bce598d42173**: Biopsy Indication
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-fea915a17f2566c5"></a>
- **M17-CAP-LABORATORY-fea915a17f2566c5**: Procedure Documentation
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-fc7f2913fdc1ea1f"></a>
- **M17-CAP-LABORATORY-fc7f2913fdc1ea1f**: Specimen Tracking
  Applies to original IDs: 4565, 5021.

<a id="M17-CAP-LABORATORY-6966b6ccfa00b2fb"></a>
- **M17-CAP-LABORATORY-6966b6ccfa00b2fb**: Light Microscopy
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-0e59e63622d3f62d"></a>
- **M17-CAP-LABORATORY-0e59e63622d3f62d**: Immunofluorescence
  Applies to original IDs: 4565, 2463.

<a id="M17-CAP-LABORATORY-a79372d41c9ec29e"></a>
- **M17-CAP-LABORATORY-a79372d41c9ec29e**: Electron Microscopy
  Applies to original IDs: 4565, 2463.

<a id="M17-CAP-LABORATORY-32c488e1a82f5c54"></a>
- **M17-CAP-LABORATORY-32c488e1a82f5c54**: Immunohistochemistry
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-35e82482e599129e"></a>
- **M17-CAP-LABORATORY-35e82482e599129e**: Molecular Pathology
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-c952abd8e805972e"></a>
- **M17-CAP-LABORATORY-c952abd8e805972e**: Digital Pathology Images
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-2ffd6577c7fe5e4d"></a>
- **M17-CAP-LABORATORY-2ffd6577c7fe5e4d**: Pathologist Report
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-94857e10b0dccf29"></a>
- **M17-CAP-LABORATORY-94857e10b0dccf29**: Clinical Correlation
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-816f49494ba8a0c9"></a>
- **M17-CAP-LABORATORY-816f49494ba8a0c9**: Historical Comparison
  Applies to original IDs: 4565, 5021.

<a id="M17-CAP-LABORATORY-4ac52cd7d99b2226"></a>
- **M17-CAP-LABORATORY-4ac52cd7d99b2226**: Final Diagnostic Integration
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-943bbcb1d95c5f00"></a>
- **M17-CAP-LABORATORY-943bbcb1d95c5f00**: Data Traceability:
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-d08b7d6673a9aff7"></a>
- **M17-CAP-LABORATORY-d08b7d6673a9aff7**: Biopsy findings remain linked to the exact clinical episode, laboratory profile, imaging and treatment context.
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-2f27e552d723d07f"></a>
- **M17-CAP-LABORATORY-2f27e552d723d07f**: Integrations:
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-dad1551e6044201a"></a>
- **M17-CAP-LABORATORY-dad1551e6044201a**: Nephrology
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-2d2ffbcbba25564e"></a>
- **M17-CAP-LABORATORY-2d2ffbcbba25564e**: Pathology
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-35ff4287a628c0a4"></a>
- **M17-CAP-LABORATORY-35ff4287a628c0a4**: Laboratory Medicine
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-aaaf0a34a8eb8286"></a>
- **M17-CAP-LABORATORY-aaaf0a34a8eb8286**: Genetics
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-a3241cf77d991407"></a>
- **M17-CAP-LABORATORY-a3241cf77d991407**: Imaging
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-fba14cee8ea55390"></a>
- **M17-CAP-LABORATORY-fba14cee8ea55390**: Digital Twin
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-6aac672cbf2e01b8"></a>
- **M17-CAP-LABORATORY-6aac672cbf2e01b8**: AI:
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-1796c9e7db7de5b8"></a>
- **M17-CAP-LABORATORY-1796c9e7db7de5b8**: May assist image analysis and pattern recognition but cannot replace specialist pathology interpretation.
  Applies to original IDs: 4565.

<a id="M17-CAP-LABORATORY-b88b375a44ccd619"></a>
- **M17-CAP-LABORATORY-b88b375a44ccd619**: Status:
  Applies to original IDs: 4565, 5021.

<a id="M17-CAP-LABORATORY-0304837f2e2c9a8a"></a>
- **M17-CAP-LABORATORY-0304837f2e2c9a8a**: Create a unified structured environment for advanced pediatric immune diagnostics.
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-ce7af44904cf967a"></a>
- **M17-CAP-LABORATORY-ce7af44904cf967a**: Immunoglobulins
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-e022cae3aff0c14f"></a>
- **M17-CAP-LABORATORY-e022cae3aff0c14f**: Lymphocyte Subsets
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-d4e2754d73830228"></a>
- **M17-CAP-LABORATORY-d4e2754d73830228**: Extended Immunophenotyping
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-5895069c924c03dd"></a>
- **M17-CAP-LABORATORY-5895069c924c03dd**: Flow Cytometry
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-1cc276d259629a7c"></a>
- **M17-CAP-LABORATORY-1cc276d259629a7c**: Functional Lymphocyte Testing
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-eade910b6f62a559"></a>
- **M17-CAP-LABORATORY-eade910b6f62a559**: Neutrophil Function
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-65f07a6777e19d3d"></a>
- **M17-CAP-LABORATORY-65f07a6777e19d3d**: Complement Testing
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-c023faa55e82018b"></a>
- **M17-CAP-LABORATORY-c023faa55e82018b**: Cytokine Context
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-f6d480c453e1a08b"></a>
- **M17-CAP-LABORATORY-f6d480c453e1a08b**: Vaccine Antibody Responses
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-7a28a78a806dbc2f"></a>
- **M17-CAP-LABORATORY-7a28a78a806dbc2f**: Molecular Testing
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-05e7b9d18f7c605b"></a>
- **M17-CAP-LABORATORY-05e7b9d18f7c605b**: Reference Context
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-30c6f2d75d8ac59b"></a>
- **M17-CAP-LABORATORY-30c6f2d75d8ac59b**: Treatment Correlation
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-fb7dcbc64a7ed5f8"></a>
- **M17-CAP-LABORATORY-fb7dcbc64a7ed5f8**: AI Functions:
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-7074f37e4b3eab95"></a>
- **M17-CAP-LABORATORY-7074f37e4b3eab95**: Multivariate Trend Visualization
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-3e3f2df309ff5354"></a>
- **M17-CAP-LABORATORY-3e3f2df309ff5354**: Pattern Organization
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-51d17e70ff7d7c0f"></a>
- **M17-CAP-LABORATORY-51d17e70ff7d7c0f**: Missing-test Context
  Applies to original IDs: 5021.

<a id="M17-CAP-LABORATORY-c0f98b2495ce13cf"></a>
- **M17-CAP-LABORATORY-c0f98b2495ce13cf**: # Blood Antibody Registry
  Applies to original IDs: 196.

<a id="M17-CAP-LABORATORY-fd524380e10a5e5d"></a>
- **M17-CAP-LABORATORY-fd524380e10a5e5d**: Irregular Antibodies
  Applies to original IDs: 196.

<a id="M17-CAP-LABORATORY-76ee1334b9df390d"></a>
- **M17-CAP-LABORATORY-76ee1334b9df390d**: Alloantibodies
  Applies to original IDs: 196.

<a id="M17-CAP-LABORATORY-37ff46f18781e532"></a>
- **M17-CAP-LABORATORY-37ff46f18781e532**: Transfusion Warnings
  Applies to original IDs: 196.

<a id="M17-CAP-LABORATORY-601b91a5de3e5713"></a>
- **M17-CAP-LABORATORY-601b91a5de3e5713**: Critical alerts displayed to medical staff.
  Applies to original IDs: 196.

<a id="M17-CAP-LABORATORY-c2d10574f4119733"></a>
- **M17-CAP-LABORATORY-c2d10574f4119733**: # Skin Biopsy Registry
  Applies to original IDs: 473.

<a id="M17-CAP-LABORATORY-195b188bb2d20f06"></a>
- **M17-CAP-LABORATORY-195b188bb2d20f06**: Stores dermatological biopsy information.
  Applies to original IDs: 473.

<a id="M17-CAP-LABORATORY-3da2b62324734f3f"></a>
- **M17-CAP-LABORATORY-3da2b62324734f3f**: Biopsy Date
  Applies to original IDs: 473.

<a id="M17-CAP-LABORATORY-52f7834a10a9c9ac"></a>
- **M17-CAP-LABORATORY-52f7834a10a9c9ac**: Anatomical Site
  Applies to original IDs: 473.

<a id="M17-CAP-LABORATORY-699f13ee097a852a"></a>
- **M17-CAP-LABORATORY-699f13ee097a852a**: Histology Report
  Applies to original IDs: 473.

<a id="M17-CAP-LABORATORY-766329f022f36dd4"></a>
- **M17-CAP-LABORATORY-766329f022f36dd4**: # Thyroid Biopsy Registry
  Applies to original IDs: 574.

<a id="M17-CAP-LABORATORY-5c98be2ab247d3a7"></a>
- **M17-CAP-LABORATORY-5c98be2ab247d3a7**: Stores fine-needle aspiration biopsy results.
  Applies to original IDs: 574.

<a id="M17-CAP-LABORATORY-55563a7710efaecc"></a>
- **M17-CAP-LABORATORY-55563a7710efaecc**: Bethesda Classification
  Applies to original IDs: 574.

<a id="M17-CAP-LABORATORY-ca61a15878284101"></a>
- **M17-CAP-LABORATORY-ca61a15878284101**: Cytology Reports
  Applies to original IDs: 574.

<a id="M17-CAP-LABORATORY-d62a98e3c454827d"></a>
- **M17-CAP-LABORATORY-d62a98e3c454827d**: Follow-up Recommendations
  Applies to original IDs: 574.

<a id="M17-CAP-LABORATORY-cba1ddf480a6f9cd"></a>
- **M17-CAP-LABORATORY-cba1ddf480a6f9cd**: # Urinalysis Registry
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-860f63fc19ab7cd6"></a>
- **M17-CAP-LABORATORY-860f63fc19ab7cd6**: Stores urine laboratory examinations.
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-51a7286f3a9c6065"></a>
- **M17-CAP-LABORATORY-51a7286f3a9c6065**: General Urinalysis
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-4d27a3d6089273ef"></a>
- **M17-CAP-LABORATORY-4d27a3d6089273ef**: Proteinuria
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-431f48473fb36cd0"></a>
- **M17-CAP-LABORATORY-431f48473fb36cd0**: Albuminuria
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-48f77200bd127634"></a>
- **M17-CAP-LABORATORY-48f77200bd127634**: Microscopy
  Applies to original IDs: 637.

<a id="M17-CAP-LABORATORY-a34bf2e4dcaaf45d"></a>
- **M17-CAP-LABORATORY-a34bf2e4dcaaf45d**: Culture Results
  Applies to original IDs: 637, 3229.

<a id="M17-CAP-LABORATORY-20e7c757ace71e92"></a>
- **M17-CAP-LABORATORY-20e7c757ace71e92**: # Breast Biopsy Registry
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-e399d83a804b81c6"></a>
- **M17-CAP-LABORATORY-e399d83a804b81c6**: Stores biopsy procedures.
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-d2ef59b57ba9c02e"></a>
- **M17-CAP-LABORATORY-d2ef59b57ba9c02e**: Core Needle Biopsy
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-94ab1d9d68d08781"></a>
- **M17-CAP-LABORATORY-94ab1d9d68d08781**: Vacuum Biopsy
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-32ffc096d55d159d"></a>
- **M17-CAP-LABORATORY-32ffc096d55d159d**: Histology
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-4f769d3011ff4afe"></a>
- **M17-CAP-LABORATORY-4f769d3011ff4afe**: Pathology Reports
  Applies to original IDs: 788.

<a id="M17-CAP-LABORATORY-b4b6c7e6f13e4947"></a>
- **M17-CAP-LABORATORY-b4b6c7e6f13e4947**: # Pediatric Allergy Skin Test Registry
  Applies to original IDs: 1098.

<a id="M17-CAP-LABORATORY-83996bc6dbf833a0"></a>
- **M17-CAP-LABORATORY-83996bc6dbf833a0**: Tracks dermatologic allergy testing.
  Applies to original IDs: 1098.

<a id="M17-CAP-LABORATORY-0d8a0a466bcba75a"></a>
- **M17-CAP-LABORATORY-0d8a0a466bcba75a**: Patch Test
  Applies to original IDs: 1098.

<a id="M17-CAP-LABORATORY-916a1cfb25dc5538"></a>
- **M17-CAP-LABORATORY-916a1cfb25dc5538**: Prick Test
  Applies to original IDs: 1098.

<a id="M17-CAP-LABORATORY-5f75b700eb8bb73b"></a>
- **M17-CAP-LABORATORY-5f75b700eb8bb73b**: Results
  Applies to original IDs: 1098.

<a id="M17-CAP-LABORATORY-43e8fdf8f42f98ba"></a>
- **M17-CAP-LABORATORY-43e8fdf8f42f98ba**: Maintains HbA1c history.
  Applies to original IDs: 2105.

<a id="M17-CAP-LABORATORY-71f790fdf94f9c10"></a>
- **M17-CAP-LABORATORY-71f790fdf94f9c10**: Laboratory Results
  Applies to original IDs: 2105.

<a id="M17-CAP-LABORATORY-b397a3a7a09aef8f"></a>
- **M17-CAP-LABORATORY-b397a3a7a09aef8f**: Long-term Trends
  Applies to original IDs: 2105.

<a id="M17-CAP-LABORATORY-b7f07a5a8893cc36"></a>
- **M17-CAP-LABORATORY-b7f07a5a8893cc36**: Therapy Evaluation
  Applies to original IDs: 2105.

<a id="M17-CAP-LABORATORY-1c019cbed89b6076"></a>
- **M17-CAP-LABORATORY-1c019cbed89b6076**: Maintains genomic variant information.
  Applies to original IDs: 2393.

<a id="M17-CAP-LABORATORY-557e1ce32474ceaf"></a>
- **M17-CAP-LABORATORY-557e1ce32474ceaf**: SNV
  Applies to original IDs: 2393.

<a id="M17-CAP-LABORATORY-d7613070e6d194ac"></a>
- **M17-CAP-LABORATORY-d7613070e6d194ac**: CNV
  Applies to original IDs: 2393.

<a id="M17-CAP-LABORATORY-7ec7b591c5f9ef1b"></a>
- **M17-CAP-LABORATORY-7ec7b591c5f9ef1b**: Structural Variants
  Applies to original IDs: 2393.

<a id="M17-CAP-LABORATORY-7c8a86715860498c"></a>
- **M17-CAP-LABORATORY-7c8a86715860498c**: Variant Classification
  Applies to original IDs: 2393.

<a id="M17-CAP-LABORATORY-ca16f98f94bc5997"></a>
- **M17-CAP-LABORATORY-ca16f98f94bc5997**: Maintains whole genome sequencing data.
  Applies to original IDs: 2401.

<a id="M17-CAP-LABORATORY-f3d424dd9313340c"></a>
- **M17-CAP-LABORATORY-f3d424dd9313340c**: Raw Data References
  Applies to original IDs: 2401.

<a id="M17-CAP-LABORATORY-50e4ecdc3dec77af"></a>
- **M17-CAP-LABORATORY-50e4ecdc3dec77af**: Variant Reports
  Applies to original IDs: 2401.

<a id="M17-CAP-LABORATORY-34bfee7e02f13526"></a>
- **M17-CAP-LABORATORY-34bfee7e02f13526**: Reanalysis
  Applies to original IDs: 2401.

<a id="M17-CAP-LABORATORY-e1bbe9ec68b366f5"></a>
- **M17-CAP-LABORATORY-e1bbe9ec68b366f5**: Maintains whole exome sequencing records.
  Applies to original IDs: 2402.

<a id="M17-CAP-LABORATORY-a2a20ceba9449d12"></a>
- **M17-CAP-LABORATORY-a2a20ceba9449d12**: Exome Analysis
  Applies to original IDs: 2402.

<a id="M17-CAP-LABORATORY-063403dd2fe895d9"></a>
- **M17-CAP-LABORATORY-063403dd2fe895d9**: Variant Detection
  Applies to original IDs: 2402.

<a id="M17-CAP-LABORATORY-4ddab124a775b933"></a>
- **M17-CAP-LABORATORY-4ddab124a775b933**: Clinical Interpretation
  Applies to original IDs: 2402.

<a id="M17-CAP-LABORATORY-edf1c7f61243bd9e"></a>
- **M17-CAP-LABORATORY-edf1c7f61243bd9e**: Maintains cytokine profile history.
  Applies to original IDs: 2420.

<a id="M17-CAP-LABORATORY-70ed461c8e03742e"></a>
- **M17-CAP-LABORATORY-70ed461c8e03742e**: IL Family
  Applies to original IDs: 2420.

<a id="M17-CAP-LABORATORY-42600befdee31954"></a>
- **M17-CAP-LABORATORY-42600befdee31954**: TNF Family
  Applies to original IDs: 2420.

<a id="M17-CAP-LABORATORY-869bb53f7e2f38e7"></a>
- **M17-CAP-LABORATORY-869bb53f7e2f38e7**: Interferons
  Applies to original IDs: 2420.

<a id="M17-CAP-LABORATORY-31821247f561c574"></a>
- **M17-CAP-LABORATORY-31821247f561c574**: Maintains kidney biopsy records.
  Applies to original IDs: 2463.

<a id="M17-CAP-LABORATORY-78d0334ae8346a4e"></a>
- **M17-CAP-LABORATORY-78d0334ae8346a4e**: Histopathology
  Applies to original IDs: 2463, 2483, 2504.

<a id="M17-CAP-LABORATORY-2bb32ee68bbaac12"></a>
- **M17-CAP-LABORATORY-2bb32ee68bbaac12**: Maintains liver biopsy records.
  Applies to original IDs: 2483.

<a id="M17-CAP-LABORATORY-42eb31ae897f26db"></a>
- **M17-CAP-LABORATORY-42eb31ae897f26db**: Fibrosis Staging
  Applies to original IDs: 2483.

<a id="M17-CAP-LABORATORY-1fb718b1925ab3ec"></a>
- **M17-CAP-LABORATORY-1fb718b1925ab3ec**: Inflammatory Activity
  Applies to original IDs: 2483.

<a id="M17-CAP-LABORATORY-59805c4df923aa4d"></a>
- **M17-CAP-LABORATORY-59805c4df923aa4d**: Maintains gastrointestinal biopsy records.
  Applies to original IDs: 2504.

<a id="M17-CAP-LABORATORY-5143d088e5ea52e3"></a>
- **M17-CAP-LABORATORY-5143d088e5ea52e3**: Dysplasia Assessment
  Applies to original IDs: 2504.

<a id="M17-CAP-LABORATORY-1b093483669d5d97"></a>
- **M17-CAP-LABORATORY-1b093483669d5d97**: Cancer Staging
  Applies to original IDs: 2504.

<a id="M17-CAP-LABORATORY-e77f642aceb5af5a"></a>
- **M17-CAP-LABORATORY-e77f642aceb5af5a**: Maintains reproductive hormone history.
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-37b35a2f4dc4e7c5"></a>
- **M17-CAP-LABORATORY-37b35a2f4dc4e7c5**: FSH
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-fbfd0eed59f10498"></a>
- **M17-CAP-LABORATORY-fbfd0eed59f10498**: LH
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-49dff57230c6f6cc"></a>
- **M17-CAP-LABORATORY-49dff57230c6f6cc**: Estradiol
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-2f87863459d7d729"></a>
- **M17-CAP-LABORATORY-2f87863459d7d729**: Progesterone
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-3568af0ff32502f8"></a>
- **M17-CAP-LABORATORY-3568af0ff32502f8**: AMH
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-3888d62d15ffb41f"></a>
- **M17-CAP-LABORATORY-3888d62d15ffb41f**: Testosterone
  Applies to original IDs: 2659.

<a id="M17-CAP-LABORATORY-e57502195497898b"></a>
- **M17-CAP-LABORATORY-e57502195497898b**: Maintains microbiological data.
  Applies to original IDs: 3229.

<a id="M17-CAP-LABORATORY-5667acfddc64adb5"></a>
- **M17-CAP-LABORATORY-5667acfddc64adb5**: Sequencing
  Applies to original IDs: 3229.

<a id="M17-CAP-LABORATORY-f52cfaefca9fb0c4"></a>
- **M17-CAP-LABORATORY-f52cfaefca9fb0c4**: Resistance Profiles
  Applies to original IDs: 3229.

<a id="M17-CAP-LABORATORY-ad1c9f2dd45e4ed4"></a>
- **M17-CAP-LABORATORY-ad1c9f2dd45e4ed4**: Pathogen Identification
  Applies to original IDs: 3229.

<a id="M17-CAP-LABORATORY-4edfb2a1bd8f5cef"></a>
- **M17-CAP-LABORATORY-4edfb2a1bd8f5cef**: Maintains allergy diagnostics.
  Applies to original IDs: 3390.

<a id="M17-CAP-LABORATORY-e1a60c9509e0e703"></a>
- **M17-CAP-LABORATORY-e1a60c9509e0e703**: Skin Prick Tests
  Applies to original IDs: 3390.

<a id="M17-CAP-LABORATORY-60c7a8ac7fac7331"></a>
- **M17-CAP-LABORATORY-60c7a8ac7fac7331**: Patch Tests
  Applies to original IDs: 3390.

<a id="M17-CAP-LABORATORY-845cd50364650915"></a>
- **M17-CAP-LABORATORY-845cd50364650915**: Component Diagnostics
  Applies to original IDs: 3390.

<a id="M17-CAP-LABORATORY-bac46bb15e126441"></a>
- **M17-CAP-LABORATORY-bac46bb15e126441**: Provocation Tests
  Applies to original IDs: 3390.

<a id="M17-CAP-LABORATORY-ffcddd6eb7e69064"></a>
- **M17-CAP-LABORATORY-ffcddd6eb7e69064**: Maintains microbiology studies.
  Applies to original IDs: 3431.

<a id="M17-CAP-LABORATORY-73e1dd621839e845"></a>
- **M17-CAP-LABORATORY-73e1dd621839e845**: Cultures
  Applies to original IDs: 3431.

<a id="M17-CAP-LABORATORY-be73c48d0259b5a1"></a>
- **M17-CAP-LABORATORY-be73c48d0259b5a1**: Viral Panels
  Applies to original IDs: 3431.

<a id="M17-CAP-LABORATORY-3aad3df4cd559ec4"></a>
- **M17-CAP-LABORATORY-3aad3df4cd559ec4**: Sensitivity Testing
  Applies to original IDs: 3431, 3571.

<a id="M17-CAP-LABORATORY-abea5217bc84c61d"></a>
- **M17-CAP-LABORATORY-abea5217bc84c61d**: AI Interpretation
  Applies to original IDs: 3431.

<a id="M17-CAP-LABORATORY-2979fc2826beaaea"></a>
- **M17-CAP-LABORATORY-2979fc2826beaaea**: Maintains microbiology results.
  Applies to original IDs: 3571.

<a id="M17-CAP-LABORATORY-341063d818f532aa"></a>
- **M17-CAP-LABORATORY-341063d818f532aa**: Culture
  Applies to original IDs: 3571.

<a id="M17-CAP-LABORATORY-d1c31545aea0d43b"></a>
- **M17-CAP-LABORATORY-d1c31545aea0d43b**: Serology
  Applies to original IDs: 3571.

<a id="M17-CAP-LABORATORY-aebb7ade55278a66"></a>
- **M17-CAP-LABORATORY-aebb7ade55278a66**: Genomic Identification
  Applies to original IDs: 3571.

<a id="M17-CAP-LABORATORY-2afa3895f9a99fd2"></a>
- **M17-CAP-LABORATORY-2afa3895f9a99fd2**: Optimizes laboratory operations.
  Applies to original IDs: 1413.

<a id="M17-CAP-LABORATORY-d7a97c535fb53293"></a>
- **M17-CAP-LABORATORY-d7a97c535fb53293**: Sample Routing
  Applies to original IDs: 1413.

<a id="M17-CAP-LABORATORY-2fecf262d4f07a4d"></a>
- **M17-CAP-LABORATORY-2fecf262d4f07a4d**: Queue Management
  Applies to original IDs: 1413.

<a id="M17-CAP-LABORATORY-7761202ddeecefcd"></a>
- **M17-CAP-LABORATORY-7761202ddeecefcd**: Automation
  Applies to original IDs: 1413.

<a id="M17-CAP-LABORATORY-b3ef3101c73d85c3"></a>
- **M17-CAP-LABORATORY-b3ef3101c73d85c3**: Coordinates laboratory workflow.
  Applies to original IDs: 1747.

<a id="M17-CAP-LABORATORY-4dcd8ddf29313612"></a>
- **M17-CAP-LABORATORY-4dcd8ddf29313612**: Sample Collection
  Applies to original IDs: 1747.

<a id="M17-CAP-LABORATORY-2a57eb8f3f30d7e4"></a>
- **M17-CAP-LABORATORY-2a57eb8f3f30d7e4**: Analysis
  Applies to original IDs: 1747.

<a id="M17-CAP-LABORATORY-772cbe61b2443a78"></a>
- **M17-CAP-LABORATORY-772cbe61b2443a78**: Reporting
  Applies to original IDs: 1747.
