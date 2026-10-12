# CORE-CAP-IMAGING — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## diagnostic-imaging

Imaging owns ophthalmic/OCT and dental/craniofacial image series, acquisitions, measurements and reports. AI segmentation and cephalometric measurements remain derived annotations; clinical decisions retain independent approval.

Acceptance additions: Bind measurements and annotations to exact study/series/version, acquisition device, anatomy/laterality, units, quality and interpreter. Corrected source studies invalidate derived comparisons; modality labels do not establish working PACS/device integration.

## registry-imaging

Imaging owns source-specific study/image/report archives and longitudinal comparison references, including endoscopy images. Procedure performance remains Encounter; derived measurements never substitute for qualified interpretation or establish study/device conformance.

Acceptance additions: Preserve source identity, source-specific fields, verification, chronology and correction lineage. Test unknown versus absent states, wrong-patient/tenant binding, stale or revoked access, conflicting reports and attributed human disposition. Clinical actions and sensitive pediatric/guardian disclosure require separately approved workflows; no inferred automation or compatibility approval.

## ai-assisted-imaging-workflows

Imaging owns imaging study queues and acquisition/report workflow. AI priority proposals remain distinguishable from qualified urgency decisions; an optimization result does not attest capacity, completed scan or interpretation.

Acceptance additions: Preserve exact study/request, patient, modality and prioritization evidence. Handle unavailable capacity, stale urgency and duplicate/out-of-order tasks without falsely marking acquisition or excluding emergencies.

## Source scope

- Original 4745 / diagnostic-imaging: Pediatric Ophthalmic Imaging, OCT & Digital Eye Diagnostics Module — Create a unified longitudinal digital imaging environment for pediatric eye care.
- Original 4796 / diagnostic-imaging: Pediatric Dental Imaging, Cephalometry & 3D Diagnostics Module — Create a unified dental and craniofacial imaging environment.
- Original 552 / registry-imaging: Optical Coherence Tomography Registry — Stores OCT examinations.
- Original 2155 / registry-imaging: Endoscopy Registry — Maintains upper GI endoscopy records.
- Original 2156 / registry-imaging: Colonoscopy Registry — Maintains colonoscopy records.
- Original 2188 / registry-imaging: Dermoscopy Registry — Maintains dermoscopic examinations.
- Original 2228 / registry-imaging: Nasal Endoscopy Registry — Maintains nasal endoscopy records.
- Original 2275 / registry-imaging: Scrotal Ultrasound Registry — Maintains scrotal imaging.
- Original 2298 / registry-imaging: Gynecology Ultrasound Registry — Maintains gynecological ultrasound studies.
- Original 2314 / registry-imaging: Fetal Ultrasound Registry — Maintains fetal ultrasound examinations.
- Original 2495 / registry-imaging: Gastrointestinal Endoscopy Registry — Maintains endoscopic procedures.
- Original 2545 / registry-imaging: Bone Density Registry — Maintains bone mineral density records.
- Original 2556 / registry-imaging: Dermoscopy Registry — Maintains dermoscopy examinations.
- Original 2598 / registry-imaging: ENT Endoscopy Registry — Maintains ENT endoscopic procedures.
- Original 2660 / registry-imaging: Reproductive Ultrasound Registry — Maintains reproductive ultrasound examinations.
- Original 3209 / registry-imaging: Pediatric Musculoskeletal Ultrasound Registry — Maintains musculoskeletal ultrasound studies.
- Original 3609 / registry-imaging: Pediatric Endoscopy Registry — Maintains pediatric endoscopy data.
- Original 3753 / registry-imaging: Pediatric ENT Endoscopy Registry — Maintains ENT endoscopic data.
- Original 3771 / registry-imaging: Pediatric Dermoscopy Registry — Maintains dermoscopic imaging.
- Original 1578 / ai-assisted-imaging-workflows: AI Imaging Workflow Manager — Optimizes imaging workflow.
- Original 1748 / ai-assisted-imaging-workflows: AI Imaging Workflow Coordinator — Coordinates imaging workflow.

## Requirements and source metadata

<a id="M17-CAP-IMAGING-6510c5c511a879bc"></a>
- **M17-CAP-IMAGING-6510c5c511a879bc**: Purpose:
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-1a626d0de1b84ac0"></a>
- **M17-CAP-IMAGING-1a626d0de1b84ac0**: Create a unified longitudinal digital imaging environment for pediatric eye care.
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-a18430c2e5b91505"></a>
- **M17-CAP-IMAGING-a18430c2e5b91505**: Core Functions:
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-8b274c0599b1a1f6"></a>
- **M17-CAP-IMAGING-8b274c0599b1a1f6**: Fundus Photography
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-dd41c877c759e187"></a>
- **M17-CAP-IMAGING-dd41c877c759e187**: OCT
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-3237c728f35af8e3"></a>
- **M17-CAP-IMAGING-3237c728f35af8e3**: Anterior Segment Imaging
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-5d172fc7b1dfbb1a"></a>
- **M17-CAP-IMAGING-5d172fc7b1dfbb1a**: Corneal Imaging
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-3ce0e612e72611ba"></a>
- **M17-CAP-IMAGING-3ce0e612e72611ba**: Optic Nerve Imaging
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-7589820861e94059"></a>
- **M17-CAP-IMAGING-7589820861e94059**: Retinal Imaging
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-9c898fa201af78a0"></a>
- **M17-CAP-IMAGING-9c898fa201af78a0**: Ocular Ultrasound
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-d1c1832a3fb1db71"></a>
- **M17-CAP-IMAGING-d1c1832a3fb1db71**: Visual Field Data
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-b561bc9edaee0a03"></a>
- **M17-CAP-IMAGING-b561bc9edaee0a03**: Serial Imaging
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-8a51da397829badb"></a>
- **M17-CAP-IMAGING-8a51da397829badb**: Measurement Tracking
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-b1af226d681699f8"></a>
- **M17-CAP-IMAGING-b1af226d681699f8**: Image Quality
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-2647767d9ab2ec26"></a>
- **M17-CAP-IMAGING-2647767d9ab2ec26**: Structured Reports
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-fb7dcbc64a7ed5f8"></a>
- **M17-CAP-IMAGING-fb7dcbc64a7ed5f8**: AI Functions:
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-bda81c99dcf62207"></a>
- **M17-CAP-IMAGING-bda81c99dcf62207**: Longitudinal Image Comparison
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-4aa37f9c90f4e25a"></a>
- **M17-CAP-IMAGING-4aa37f9c90f4e25a**: Segmentation Support
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-a7d53d2492b45e3e"></a>
- **M17-CAP-IMAGING-a7d53d2492b45e3e**: Measurement Support
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-76c1683f638b99df"></a>
- **M17-CAP-IMAGING-76c1683f638b99df**: Change Detection
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-5af313388f2e35e4"></a>
- **M17-CAP-IMAGING-5af313388f2e35e4**: Workflow Prioritization
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-07f8d474b8b4141c"></a>
- **M17-CAP-IMAGING-07f8d474b8b4141c**: Safety:
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-c31c2d2da699092f"></a>
- **M17-CAP-IMAGING-c31c2d2da699092f**: AI-assisted imaging findings remain supplementary to qualified ophthalmological interpretation.
  Applies to original IDs: 4745.

<a id="M17-CAP-IMAGING-b88b375a44ccd619"></a>
- **M17-CAP-IMAGING-b88b375a44ccd619**: Status:
  Applies to original IDs: 4745, 4796.

<a id="M17-CAP-IMAGING-d5232cbd3a326267"></a>
- **M17-CAP-IMAGING-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4745, 4796, 552, 2155, 2156, 2188, 2228, 2275, 2298, 2314, 2495, 2545, 2556, 2598, 2660, 3209, 3609, 3753, 3771, 1578, 1748.

<a id="M17-CAP-IMAGING-6f33acf3afb37064"></a>
- **M17-CAP-IMAGING-6f33acf3afb37064**: ---
  Applies to original IDs: 4745, 4796, 552, 2155, 2156, 2188, 2228, 2275, 2298, 2314, 2495, 2545, 2556, 2598, 2660, 3209, 3609, 3753, 3771, 1578, 1748.

<a id="M17-CAP-IMAGING-2330e5f2b8c3c536"></a>
- **M17-CAP-IMAGING-2330e5f2b8c3c536**: Create a unified dental and craniofacial imaging environment.
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-5243425d97dec246"></a>
- **M17-CAP-IMAGING-5243425d97dec246**: Intraoral Radiography
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-e56c85462932e587"></a>
- **M17-CAP-IMAGING-e56c85462932e587**: Panoramic Imaging
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-c83d7abe807fe592"></a>
- **M17-CAP-IMAGING-c83d7abe807fe592**: Cephalometric Imaging
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-5c508f3f4f66bc43"></a>
- **M17-CAP-IMAGING-5c508f3f4f66bc43**: CBCT Context
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-09d8862934452d97"></a>
- **M17-CAP-IMAGING-09d8862934452d97**: Clinical Photography
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-78c773597e1c352c"></a>
- **M17-CAP-IMAGING-78c773597e1c352c**: Digital Dental Models
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-e66c77b0f3420ef4"></a>
- **M17-CAP-IMAGING-e66c77b0f3420ef4**: 3D Craniofacial Imaging
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-77bd61272e43639d"></a>
- **M17-CAP-IMAGING-77bd61272e43639d**: Tooth Development Assessment
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-e3f3c7fcb4299451"></a>
- **M17-CAP-IMAGING-e3f3c7fcb4299451**: Jaw Assessment
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-e2ecb16a5ee3fd08"></a>
- **M17-CAP-IMAGING-e2ecb16a5ee3fd08**: Serial Comparison
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-3d0eaa1f91cad9cc"></a>
- **M17-CAP-IMAGING-3d0eaa1f91cad9cc**: Structured Measurements
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-d456a4c2a3a79431"></a>
- **M17-CAP-IMAGING-d456a4c2a3a79431**: Imaging Reports
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-9cb43b62e48f7954"></a>
- **M17-CAP-IMAGING-9cb43b62e48f7954**: Tooth Identification Support
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-7fa79dce2b8d7e98"></a>
- **M17-CAP-IMAGING-7fa79dce2b8d7e98**: Longitudinal Comparison
  Applies to original IDs: 4796, 3771.

<a id="M17-CAP-IMAGING-676c963751944bbd"></a>
- **M17-CAP-IMAGING-676c963751944bbd**: Cephalometric Analysis Support
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-a7c15485995a7844"></a>
- **M17-CAP-IMAGING-a7c15485995a7844**: Anatomical Segmentation Support
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-ec13cec5f7683dd8"></a>
- **M17-CAP-IMAGING-ec13cec5f7683dd8**: AI-derived measurements remain subject to clinician validation.
  Applies to original IDs: 4796.

<a id="M17-CAP-IMAGING-359d285b1467e7e7"></a>
- **M17-CAP-IMAGING-359d285b1467e7e7**: # Optical Coherence Tomography Registry
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-6cd1e79a6799cfa3"></a>
- **M17-CAP-IMAGING-6cd1e79a6799cfa3**: Stores OCT examinations.
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-4fbeeb87456accf5"></a>
- **M17-CAP-IMAGING-4fbeeb87456accf5**: Supports
  Applies to original IDs: 552, 2155, 2156, 2188, 2228, 2275, 2298, 2314, 2495, 2545, 2556, 2598, 2660, 3209, 3609, 3753, 3771, 1578, 1748.

<a id="M17-CAP-IMAGING-cf3c8cd63faaf2b7"></a>
- **M17-CAP-IMAGING-cf3c8cd63faaf2b7**: Retina OCT
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-fec7e0eb1a46a905"></a>
- **M17-CAP-IMAGING-fec7e0eb1a46a905**: Optic Nerve OCT
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-3fdd0571678da9df"></a>
- **M17-CAP-IMAGING-3fdd0571678da9df**: Macula OCT
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-299e51aa0fde8135"></a>
- **M17-CAP-IMAGING-299e51aa0fde8135**: Thickness Analysis
  Applies to original IDs: 552.

<a id="M17-CAP-IMAGING-5ba74d8fcc7b20cc"></a>
- **M17-CAP-IMAGING-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 552, 2155, 2156, 2188, 2228, 2275, 2298, 2314, 2495, 2545, 2556, 2598, 2660, 3209, 3609, 3753, 3771, 1578, 1748.

<a id="M17-CAP-IMAGING-d4b8d2a75743cef6"></a>
- **M17-CAP-IMAGING-d4b8d2a75743cef6**: Maintains upper GI endoscopy records.
  Applies to original IDs: 2155.

<a id="M17-CAP-IMAGING-95a29347fe822013"></a>
- **M17-CAP-IMAGING-95a29347fe822013**: Findings
  Applies to original IDs: 2155, 2228.

<a id="M17-CAP-IMAGING-6fdf6fb507eec070"></a>
- **M17-CAP-IMAGING-6fdf6fb507eec070**: Images
  Applies to original IDs: 2155, 2228.

<a id="M17-CAP-IMAGING-5e73c65b870fd434"></a>
- **M17-CAP-IMAGING-5e73c65b870fd434**: Biopsy Reports
  Applies to original IDs: 2155.

<a id="M17-CAP-IMAGING-0beceec99a73a21c"></a>
- **M17-CAP-IMAGING-0beceec99a73a21c**: Maintains colonoscopy records.
  Applies to original IDs: 2156.

<a id="M17-CAP-IMAGING-1fcfe1c16ab09cbb"></a>
- **M17-CAP-IMAGING-1fcfe1c16ab09cbb**: Polyps
  Applies to original IDs: 2156.

<a id="M17-CAP-IMAGING-7fa55285210d812f"></a>
- **M17-CAP-IMAGING-7fa55285210d812f**: Biopsies
  Applies to original IDs: 2156.

<a id="M17-CAP-IMAGING-cb8bb288cadbc4f7"></a>
- **M17-CAP-IMAGING-cb8bb288cadbc4f7**: Surveillance
  Applies to original IDs: 2156.

<a id="M17-CAP-IMAGING-1b61847bf82068b5"></a>
- **M17-CAP-IMAGING-1b61847bf82068b5**: Maintains dermoscopic examinations.
  Applies to original IDs: 2188.

<a id="M17-CAP-IMAGING-87d8cd7419fd66a4"></a>
- **M17-CAP-IMAGING-87d8cd7419fd66a4**: Image Archive
  Applies to original IDs: 2188.

<a id="M17-CAP-IMAGING-a8141cfe30373037"></a>
- **M17-CAP-IMAGING-a8141cfe30373037**: Lesion Comparison
  Applies to original IDs: 2188.

<a id="M17-CAP-IMAGING-d46b6ca6f554a9cc"></a>
- **M17-CAP-IMAGING-d46b6ca6f554a9cc**: AI Analysis
  Applies to original IDs: 2188.

<a id="M17-CAP-IMAGING-a2ec923fa067d4c6"></a>
- **M17-CAP-IMAGING-a2ec923fa067d4c6**: Maintains nasal endoscopy records.
  Applies to original IDs: 2228.

<a id="M17-CAP-IMAGING-0d86946e629cc025"></a>
- **M17-CAP-IMAGING-0d86946e629cc025**: Follow-up
  Applies to original IDs: 2228, 2298.

<a id="M17-CAP-IMAGING-f95b317cdc1257af"></a>
- **M17-CAP-IMAGING-f95b317cdc1257af**: Maintains scrotal imaging.
  Applies to original IDs: 2275.

<a id="M17-CAP-IMAGING-5032f26f1a690cb2"></a>
- **M17-CAP-IMAGING-5032f26f1a690cb2**: Ultrasound
  Applies to original IDs: 2275, 1748.

<a id="M17-CAP-IMAGING-55cc43dc5e835bb6"></a>
- **M17-CAP-IMAGING-55cc43dc5e835bb6**: Doppler
  Applies to original IDs: 2275.

<a id="M17-CAP-IMAGING-ca2b3f1137870de2"></a>
- **M17-CAP-IMAGING-ca2b3f1137870de2**: Lesion Monitoring
  Applies to original IDs: 2275.

<a id="M17-CAP-IMAGING-001a365dc9f3f8b6"></a>
- **M17-CAP-IMAGING-001a365dc9f3f8b6**: Maintains gynecological ultrasound studies.
  Applies to original IDs: 2298.

<a id="M17-CAP-IMAGING-72ce64926359ff6f"></a>
- **M17-CAP-IMAGING-72ce64926359ff6f**: Pelvic Ultrasound
  Applies to original IDs: 2298.

<a id="M17-CAP-IMAGING-4161c212ebe66f98"></a>
- **M17-CAP-IMAGING-4161c212ebe66f98**: Transvaginal Ultrasound
  Applies to original IDs: 2298.

<a id="M17-CAP-IMAGING-5a4b38bfdbc0ebe2"></a>
- **M17-CAP-IMAGING-5a4b38bfdbc0ebe2**: Maintains fetal ultrasound examinations.
  Applies to original IDs: 2314.

<a id="M17-CAP-IMAGING-8954a9113edcce0f"></a>
- **M17-CAP-IMAGING-8954a9113edcce0f**: Growth Assessment
  Applies to original IDs: 2314.

<a id="M17-CAP-IMAGING-ac905b6e42ec7635"></a>
- **M17-CAP-IMAGING-ac905b6e42ec7635**: Anatomy Scan
  Applies to original IDs: 2314.

<a id="M17-CAP-IMAGING-a7df007fa2d9340b"></a>
- **M17-CAP-IMAGING-a7df007fa2d9340b**: Doppler Studies
  Applies to original IDs: 2314.

<a id="M17-CAP-IMAGING-965e52044d1936ea"></a>
- **M17-CAP-IMAGING-965e52044d1936ea**: Maintains endoscopic procedures.
  Applies to original IDs: 2495.

<a id="M17-CAP-IMAGING-465cf176435d118d"></a>
- **M17-CAP-IMAGING-465cf176435d118d**: Gastroscopy
  Applies to original IDs: 2495, 3609.

<a id="M17-CAP-IMAGING-4ea607a784624620"></a>
- **M17-CAP-IMAGING-4ea607a784624620**: Colonoscopy
  Applies to original IDs: 2495, 3609.

<a id="M17-CAP-IMAGING-1ed929d4e8d78094"></a>
- **M17-CAP-IMAGING-1ed929d4e8d78094**: Capsule Endoscopy
  Applies to original IDs: 2495.

<a id="M17-CAP-IMAGING-8dd4d9dabc671ba8"></a>
- **M17-CAP-IMAGING-8dd4d9dabc671ba8**: Therapeutic Endoscopy
  Applies to original IDs: 2495.

<a id="M17-CAP-IMAGING-969b9c474a1075d7"></a>
- **M17-CAP-IMAGING-969b9c474a1075d7**: Maintains bone mineral density records.
  Applies to original IDs: 2545.

<a id="M17-CAP-IMAGING-ab65aeb28f25d596"></a>
- **M17-CAP-IMAGING-ab65aeb28f25d596**: DXA Results
  Applies to original IDs: 2545.

<a id="M17-CAP-IMAGING-77151bd8fed3d254"></a>
- **M17-CAP-IMAGING-77151bd8fed3d254**: Fracture Risk
  Applies to original IDs: 2545.

<a id="M17-CAP-IMAGING-daaa3882eee479c9"></a>
- **M17-CAP-IMAGING-daaa3882eee479c9**: Osteoporosis Monitoring
  Applies to original IDs: 2545.

<a id="M17-CAP-IMAGING-61cf68bfb7484975"></a>
- **M17-CAP-IMAGING-61cf68bfb7484975**: Maintains dermoscopy examinations.
  Applies to original IDs: 2556.

<a id="M17-CAP-IMAGING-3e175c5ed9e9f33b"></a>
- **M17-CAP-IMAGING-3e175c5ed9e9f33b**: Lesion Imaging
  Applies to original IDs: 2556.

<a id="M17-CAP-IMAGING-23cb5b848c6347ef"></a>
- **M17-CAP-IMAGING-23cb5b848c6347ef**: AI Image Analysis
  Applies to original IDs: 2556.

<a id="M17-CAP-IMAGING-4f98e19f8ccb47ef"></a>
- **M17-CAP-IMAGING-4f98e19f8ccb47ef**: Sequential Monitoring
  Applies to original IDs: 2556.

<a id="M17-CAP-IMAGING-96c5b18ddde99e2b"></a>
- **M17-CAP-IMAGING-96c5b18ddde99e2b**: Maintains ENT endoscopic procedures.
  Applies to original IDs: 2598.

<a id="M17-CAP-IMAGING-a1340ecd47eba896"></a>
- **M17-CAP-IMAGING-a1340ecd47eba896**: Nasal Endoscopy
  Applies to original IDs: 2598, 3753.

<a id="M17-CAP-IMAGING-b4fd0adcba2d1aca"></a>
- **M17-CAP-IMAGING-b4fd0adcba2d1aca**: Laryngoscopy
  Applies to original IDs: 2598, 3753.

<a id="M17-CAP-IMAGING-fcbb27bddfabd972"></a>
- **M17-CAP-IMAGING-fcbb27bddfabd972**: Otoscopy
  Applies to original IDs: 2598, 3753.

<a id="M17-CAP-IMAGING-21c765c841dcb506"></a>
- **M17-CAP-IMAGING-21c765c841dcb506**: Maintains reproductive ultrasound examinations.
  Applies to original IDs: 2660.

<a id="M17-CAP-IMAGING-0ebc7a0617a7ba7e"></a>
- **M17-CAP-IMAGING-0ebc7a0617a7ba7e**: Follicular Monitoring
  Applies to original IDs: 2660.

<a id="M17-CAP-IMAGING-afe7d8baaec48185"></a>
- **M17-CAP-IMAGING-afe7d8baaec48185**: Ovarian Assessment
  Applies to original IDs: 2660.

<a id="M17-CAP-IMAGING-6b0c89b33c614cb2"></a>
- **M17-CAP-IMAGING-6b0c89b33c614cb2**: Uterine Evaluation
  Applies to original IDs: 2660.

<a id="M17-CAP-IMAGING-55db9f6c95343886"></a>
- **M17-CAP-IMAGING-55db9f6c95343886**: Pregnancy Monitoring
  Applies to original IDs: 2660.

<a id="M17-CAP-IMAGING-4228e2e577ccd262"></a>
- **M17-CAP-IMAGING-4228e2e577ccd262**: Maintains musculoskeletal ultrasound studies.
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-1655db75ffccda54"></a>
- **M17-CAP-IMAGING-1655db75ffccda54**: Synovitis
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-3610f4944335f715"></a>
- **M17-CAP-IMAGING-3610f4944335f715**: Joint Effusion
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-366df92a36e43e40"></a>
- **M17-CAP-IMAGING-366df92a36e43e40**: Tendon Evaluation
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-4aa17d28ce54a7ae"></a>
- **M17-CAP-IMAGING-4aa17d28ce54a7ae**: Enthesitis
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-9f8ae290906b215d"></a>
- **M17-CAP-IMAGING-9f8ae290906b215d**: Dynamic Joint Assessment
  Applies to original IDs: 3209.

<a id="M17-CAP-IMAGING-01ab3584aaa3b5c7"></a>
- **M17-CAP-IMAGING-01ab3584aaa3b5c7**: Maintains pediatric endoscopy data.
  Applies to original IDs: 3609.

<a id="M17-CAP-IMAGING-ba7668e9543e477c"></a>
- **M17-CAP-IMAGING-ba7668e9543e477c**: Biopsy Results
  Applies to original IDs: 3609.

<a id="M17-CAP-IMAGING-a02e97cf18314c52"></a>
- **M17-CAP-IMAGING-a02e97cf18314c52**: Video Archive
  Applies to original IDs: 3609, 3753.

<a id="M17-CAP-IMAGING-4b0fb5fd334d8967"></a>
- **M17-CAP-IMAGING-4b0fb5fd334d8967**: AI-assisted Endoscopic Analysis
  Applies to original IDs: 3609.

<a id="M17-CAP-IMAGING-e809c383daefafef"></a>
- **M17-CAP-IMAGING-e809c383daefafef**: Maintains ENT endoscopic data.
  Applies to original IDs: 3753.

<a id="M17-CAP-IMAGING-a593fb90edf6e967"></a>
- **M17-CAP-IMAGING-a593fb90edf6e967**: AI-assisted Analysis
  Applies to original IDs: 3753.

<a id="M17-CAP-IMAGING-ee57428187adfbd4"></a>
- **M17-CAP-IMAGING-ee57428187adfbd4**: Maintains dermoscopic imaging.
  Applies to original IDs: 3771.

<a id="M17-CAP-IMAGING-110b35de9ba01312"></a>
- **M17-CAP-IMAGING-110b35de9ba01312**: Mole Analysis
  Applies to original IDs: 3771.

<a id="M17-CAP-IMAGING-6f09955c79562254"></a>
- **M17-CAP-IMAGING-6f09955c79562254**: Lesion Tracking
  Applies to original IDs: 3771.

<a id="M17-CAP-IMAGING-1b48c91002f0675e"></a>
- **M17-CAP-IMAGING-1b48c91002f0675e**: Skin Cancer Screening
  Applies to original IDs: 3771.

<a id="M17-CAP-IMAGING-0f801210fe1746c4"></a>
- **M17-CAP-IMAGING-0f801210fe1746c4**: AI Image Recognition
  Applies to original IDs: 3771.

<a id="M17-CAP-IMAGING-e453ebb986d5c416"></a>
- **M17-CAP-IMAGING-e453ebb986d5c416**: Optimizes imaging workflow.
  Applies to original IDs: 1578.

<a id="M17-CAP-IMAGING-40cb97ef8e61e033"></a>
- **M17-CAP-IMAGING-40cb97ef8e61e033**: Prioritization
  Applies to original IDs: 1578.

<a id="M17-CAP-IMAGING-2fecf262d4f07a4d"></a>
- **M17-CAP-IMAGING-2fecf262d4f07a4d**: Queue Management
  Applies to original IDs: 1578.

<a id="M17-CAP-IMAGING-447b1013e4c6b478"></a>
- **M17-CAP-IMAGING-447b1013e4c6b478**: Emergency Cases
  Applies to original IDs: 1578.

<a id="M17-CAP-IMAGING-aaabaaa83d68cb97"></a>
- **M17-CAP-IMAGING-aaabaaa83d68cb97**: Coordinates imaging workflow.
  Applies to original IDs: 1748.

<a id="M17-CAP-IMAGING-2663978a32c6d34f"></a>
- **M17-CAP-IMAGING-2663978a32c6d34f**: MRI
  Applies to original IDs: 1748.

<a id="M17-CAP-IMAGING-7bc7f92cb128242c"></a>
- **M17-CAP-IMAGING-7bc7f92cb128242c**: CT
  Applies to original IDs: 1748.

<a id="M17-CAP-IMAGING-c062dc13ee048cfd"></a>
- **M17-CAP-IMAGING-c062dc13ee048cfd**: Radiology
  Applies to original IDs: 1748.
