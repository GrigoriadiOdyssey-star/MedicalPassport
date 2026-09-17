# CORE-CAP-IMAGING — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## ai-imaging-data-workflow

Imaging owns study/series metadata, DICOM processing and radiology workflow references. Scheduling and draft reporting retain separate state; imported metadata is untrusted and cannot establish patient/study identity or device conformance without validation.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## clinical-imaging-result-profiles

Imaging owns source-bound coronary angiography and musculoskeletal ultrasound study/report references. Stenosis, synovitis, Doppler or AI interpretation retains acquisition, laterality/site and qualified reporting provenance; PCI planning and therapy decisions remain external.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Preserve age/development, body size and acquisition time where present, laterality/site, clinical phase, donor/recipient or mother/fetus identity, guardian/assent and adolescent confidentiality. No universal dose, threshold or protocol is inferred. Plans, actual procedures, device operation, clinical diagnoses and model suggestions stay separately attributable.

## Source scope

- Original 1573 / ai-imaging-data-workflow: AI DICOM Processing Engine — Processes DICOM imaging data.
- Original 1870 / ai-imaging-data-workflow: AI Radiology Operations — Coordinates radiology department workflow.
- Original 2022 / clinical-imaging-result-profiles: Coronary Angiography Module — Stores coronary angiography results.
- Original 3549 / clinical-imaging-result-profiles: Pediatric Bone & Joint Ultrasound Module — Supports musculoskeletal ultrasound.
- Original 3889 / clinical-imaging-result-profiles: Pediatric Joint Ultrasound Module — Supports musculoskeletal ultrasound.

## Requirements and source metadata

<a id="M18-CAP-IMAGING-b1a09062dff718a9"></a>
- **M18-CAP-IMAGING-b1a09062dff718a9**: Processes DICOM imaging data.
  Applies to original IDs: 1573.

<a id="M18-CAP-IMAGING-4fbeeb87456accf5"></a>
- **M18-CAP-IMAGING-4fbeeb87456accf5**: Supports
  Applies to original IDs: 1573, 1870, 2022, 3549, 3889.

<a id="M18-CAP-IMAGING-fab3a4d6316ab78d"></a>
- **M18-CAP-IMAGING-fab3a4d6316ab78d**: DICOM Import
  Applies to original IDs: 1573.

<a id="M18-CAP-IMAGING-6bb0b5ad202b6330"></a>
- **M18-CAP-IMAGING-6bb0b5ad202b6330**: Metadata
  Applies to original IDs: 1573.

<a id="M18-CAP-IMAGING-4ab6a2a84e478447"></a>
- **M18-CAP-IMAGING-4ab6a2a84e478447**: Image Series
  Applies to original IDs: 1573.

<a id="M18-CAP-IMAGING-5ba74d8fcc7b20cc"></a>
- **M18-CAP-IMAGING-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 1573, 1870, 2022, 3549, 3889.

<a id="M18-CAP-IMAGING-d5232cbd3a326267"></a>
- **M18-CAP-IMAGING-d5232cbd3a326267**: Documentation
  Applies to original IDs: 1573, 1870, 2022, 3549, 3889.

<a id="M18-CAP-IMAGING-6f33acf3afb37064"></a>
- **M18-CAP-IMAGING-6f33acf3afb37064**: ---
  Applies to original IDs: 1573, 1870, 2022, 3549, 3889.

<a id="M18-CAP-IMAGING-21bf5becc7c3a354"></a>
- **M18-CAP-IMAGING-21bf5becc7c3a354**: Coordinates radiology department workflow.
  Applies to original IDs: 1870.

<a id="M18-CAP-IMAGING-c4c2c4c25aaf0d28"></a>
- **M18-CAP-IMAGING-c4c2c4c25aaf0d28**: Scheduling
  Applies to original IDs: 1870.

<a id="M18-CAP-IMAGING-a35296cb163e98a6"></a>
- **M18-CAP-IMAGING-a35296cb163e98a6**: Image Processing
  Applies to original IDs: 1870.

<a id="M18-CAP-IMAGING-772cbe61b2443a78"></a>
- **M18-CAP-IMAGING-772cbe61b2443a78**: Reporting
  Applies to original IDs: 1870.

<a id="M18-CAP-IMAGING-9c024cb6e3544c87"></a>
- **M18-CAP-IMAGING-9c024cb6e3544c87**: Stores coronary angiography results.
  Applies to original IDs: 2022.

<a id="M18-CAP-IMAGING-08bdfaaf39fc2f93"></a>
- **M18-CAP-IMAGING-08bdfaaf39fc2f93**: Vessel Assessment
  Applies to original IDs: 2022.

<a id="M18-CAP-IMAGING-c6776c8a7e2559db"></a>
- **M18-CAP-IMAGING-c6776c8a7e2559db**: Stenosis
  Applies to original IDs: 2022.

<a id="M18-CAP-IMAGING-c4960f4b8522da1d"></a>
- **M18-CAP-IMAGING-c4960f4b8522da1d**: PCI Planning
  Applies to original IDs: 2022.

<a id="M18-CAP-IMAGING-9a26737ca8b7523a"></a>
- **M18-CAP-IMAGING-9a26737ca8b7523a**: Supports musculoskeletal ultrasound.
  Applies to original IDs: 3549, 3889.

<a id="M18-CAP-IMAGING-1655db75ffccda54"></a>
- **M18-CAP-IMAGING-1655db75ffccda54**: Synovitis
  Applies to original IDs: 3549.

<a id="M18-CAP-IMAGING-546c50c65455c091"></a>
- **M18-CAP-IMAGING-546c50c65455c091**: Effusion
  Applies to original IDs: 3549.

<a id="M18-CAP-IMAGING-4ed9921092aeb0d9"></a>
- **M18-CAP-IMAGING-4ed9921092aeb0d9**: Tenosynovitis
  Applies to original IDs: 3549.

<a id="M18-CAP-IMAGING-2bb2a9858945ac2d"></a>
- **M18-CAP-IMAGING-2bb2a9858945ac2d**: Power Doppler
  Applies to original IDs: 3549.

<a id="M18-CAP-IMAGING-2e1e8516bec3a944"></a>
- **M18-CAP-IMAGING-2e1e8516bec3a944**: Disease Monitoring
  Applies to original IDs: 3549.

<a id="M18-CAP-IMAGING-9c7e800a7c83a15c"></a>
- **M18-CAP-IMAGING-9c7e800a7c83a15c**: Synovitis Detection
  Applies to original IDs: 3889.

<a id="M18-CAP-IMAGING-3610f4944335f715"></a>
- **M18-CAP-IMAGING-3610f4944335f715**: Joint Effusion
  Applies to original IDs: 3889.

<a id="M18-CAP-IMAGING-7cff312809f9c4ea"></a>
- **M18-CAP-IMAGING-7cff312809f9c4ea**: Tendon Assessment
  Applies to original IDs: 3889.

<a id="M18-CAP-IMAGING-abea5217bc84c61d"></a>
- **M18-CAP-IMAGING-abea5217bc84c61d**: AI Interpretation
  Applies to original IDs: 3889.
