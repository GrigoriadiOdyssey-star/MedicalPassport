# CORE-CAP-ENCOUNTER — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## diagnostic-functional-studies

Encounter owns the ordered/performed diagnostic study episode, indication, technical context and attributed specialist report for EMG, visual electrophysiology and urodynamics. Devices owns acquisition connections, Imaging owns images, Laboratory owns specimen results; this is not a device-command capability.

Acceptance additions: Preserve study indication, performed versus planned status, technical quality, findings, interpreter and historical comparison. Source 4611 and 5089 retain distinct neuromuscular details even where text overlaps. Automated analysis never substitutes for the specialist report.

## registry-encounters

Encounter owns attributed visit, procedure, diagnostic-study, therapy episode and outcome history. Medication/administration and devices remain authoritative for actual exposure/settings; a historical registry does not attest performance, indication or completed intervention without source attribution.

Acceptance additions: Preserve source identity, source-specific fields, verification, chronology and correction lineage. Test unknown versus absent states, wrong-patient/tenant binding, stale or revoked access, conflicting reports and attributed human disposition. Clinical actions and sensitive pediatric/guardian disclosure require separately approved workflows; no inferred automation or compatibility approval.

## ai-assisted-encounter-workflows

Encounter owns attributed clinical episode/task/referral and multidisciplinary decision records; AI provides draft prioritization/automation suggestions. Appointments, operations, clinical source owners and communication retain their own state. The historical Autonomous title explicitly retains human approval and cannot grant autonomous treatment authority.

Acceptance additions: Preserve task owner, episode, prerequisites, version, pending/accepted/completed status, signature and human approval. Referral sent is not accepted or attended. Model reprioritization cannot silently execute clinical actions, overwrite signed notes, schedule surgery or broaden case access.

## Source scope

- Original 4611 / diagnostic-functional-studies: Pediatric EMG, Nerve Conduction & Neuromuscular Diagnostics Module — Integrate pediatric electrodiagnostic testing with neuromuscular clinical data.
- Original 4746 / diagnostic-functional-studies: Pediatric Visual Electrophysiology & Functional Vision Diagnostics Module — Integrate objective functional visual testing into pediatric ophthalmic and neurological care.
- Original 4939 / diagnostic-functional-studies: Pediatric Urodynamics, Uroflowmetry & Bladder Function Diagnostics Module — Create a unified structured environment for pediatric functional urinary diagnostics.
- Original 5089 / diagnostic-functional-studies: Pediatric EMG, Nerve Conduction & Neuromuscular Diagnostics Module — Integrate neurophysiological diagnostics for pediatric peripheral nerve, neuromuscular junction and muscle disorders.
- Original 434 / registry-encounters: Infusion Therapy Registry — Maintains infusion treatment history.
- Original 447 / registry-encounters: Orthodontic Treatment Registry — Stores orthodontic treatment history.
- Original 477 / registry-encounters: Laser Dermatology Registry — Stores laser treatment history.
- Original 589 / registry-encounters: Oxygen Therapy Registry — Stores oxygen therapy information.
- Original 725 / registry-encounters: Prenatal Visit Registry — Stores prenatal consultation history.
- Original 737 / registry-encounters: Delivery Registry — Stores childbirth information.
- Original 746 / registry-encounters: Cesarean Section Registry — Stores cesarean delivery history.
- Original 747 / registry-encounters: Vaginal Delivery Registry — Stores natural childbirth history.
- Original 749 / registry-encounters: APGAR Registry — Stores APGAR scores.
- Original 832 / registry-encounters: Pediatric Hospitalization Registry — Stores inpatient history.
- Original 972 / registry-encounters: Pediatric Bleeding Episode Registry — Tracks bleeding events.
- Original 987 / registry-encounters: Pediatric Biologic Therapy Registry — Tracks biological medications.
- Original 1102 / registry-encounters: Pediatric Laser Therapy Registry — Tracks laser treatment.
- Original 1103 / registry-encounters: Pediatric Wound Care Registry — Stores pediatric wound management.
- Original 1104 / registry-encounters: Pediatric Burn Management Registry — Tracks burn treatment.
- Original 2023 / registry-encounters: Percutaneous Coronary Intervention Registry — Maintains PCI procedures.
- Original 2032 / registry-encounters: Catheter Ablation Registry — Maintains catheter ablation procedures.
- Original 2129 / registry-encounters: Radiation Therapy Registry — Maintains radiation therapy history.
- Original 2223 / registry-encounters: Audiometry Registry — Maintains audiometric examinations.
- Original 2272 / registry-encounters: Urodynamic Study Registry — Maintains urodynamic investigations.
- Original 2303 / registry-encounters: Hormonal Therapy Registry — Maintains hormonal therapy history.
- Original 2319 / registry-encounters: Fetal Heart Monitoring Registry — Maintains fetal monitoring records.
- Original 2320 / registry-encounters: Delivery Registry — Maintains delivery records.
- Original 2322 / registry-encounters: Newborn Transition Registry — Maintains immediate newborn information.
- Original 2443 / registry-encounters: Hormonal Therapy Registry — Maintains hormonal therapy history.
- Original 2547 / registry-encounters: Biologic Therapy Registry — Maintains biologic therapy history.
- Original 2639 / registry-encounters: Urodynamics Registry — Maintains urodynamic examinations.
- Original 2669 / registry-encounters: Assisted Reproductive Technology Registry — Maintains ART procedures.
- Original 3090 / registry-encounters: Pediatric EEG Registry — Maintains electroencephalography records.
- Original 3350 / registry-encounters: Pediatric EEG Registry — Maintains neurophysiology studies.
- Original 3591 / registry-encounters: Pediatric EEG Registry — Maintains EEG studies.
- Original 1194 / ai-assisted-encounter-workflows: AI Clinical Workflow Optimizer — Optimizes physician workflow.
- Original 1239 / ai-assisted-encounter-workflows: AI Autonomous Medical Workflow Engine — Coordinates AI-assisted clinical workflows.
- Original 1247 / ai-assisted-encounter-workflows: AI Clinical Workflow Automation — Automates repetitive clinical tasks.
- Original 1476 / ai-assisted-encounter-workflows: AI Clinical Workflow Context Engine — Tracks workflow state.
- Original 1511 / ai-assisted-encounter-workflows: AI Medical Workflow Optimizer — Optimizes medical workflows.
- Original 1741 / ai-assisted-encounter-workflows: AI Clinical Workflow Core Engine — Central engine for intelligent clinical workflow management.
- Original 1742 / ai-assisted-encounter-workflows: AI Patient Journey Manager — Coordinates the complete patient journey.
- Original 1743 / ai-assisted-encounter-workflows: AI Clinical Task Manager — Automatically organizes physician tasks.
- Original 1749 / ai-assisted-encounter-workflows: AI Surgery Workflow Manager — Coordinates surgical processes.
- Original 1753 / ai-assisted-encounter-workflows: AI Referral Workflow Manager — Coordinates specialist referrals.
- Original 1760 / ai-assisted-encounter-workflows: AI Clinical Workflow Intelligence Platform — Unified intelligent workflow platform.
- Original 1970 / ai-assisted-encounter-workflows: AI Referral Communication Hub — Improves referral communication.
- Original 1976 / ai-assisted-encounter-workflows: AI Clinical Collaboration Registry — Maintains collaboration records.

## Requirements and source metadata

<a id="M17-CAP-ENCOUNTER-6510c5c511a879bc"></a>
- **M17-CAP-ENCOUNTER-6510c5c511a879bc**: Purpose:
  Applies to original IDs: 4611, 4746, 4939, 5089.

<a id="M17-CAP-ENCOUNTER-ef520f851c431391"></a>
- **M17-CAP-ENCOUNTER-ef520f851c431391**: Integrate pediatric electrodiagnostic testing with neuromuscular clinical data.
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-a18430c2e5b91505"></a>
- **M17-CAP-ENCOUNTER-a18430c2e5b91505**: Core Functions:
  Applies to original IDs: 4611, 4746, 4939, 5089.

<a id="M17-CAP-ENCOUNTER-e272fb29c21a9a50"></a>
- **M17-CAP-ENCOUNTER-e272fb29c21a9a50**: EMG
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-fd16f6363c1b9dd8"></a>
- **M17-CAP-ENCOUNTER-fd16f6363c1b9dd8**: Nerve Conduction Studies
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-02d8d21a2a796370"></a>
- **M17-CAP-ENCOUNTER-02d8d21a2a796370**: Neuromuscular Junction Testing
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-6ba4d2f1da08e14f"></a>
- **M17-CAP-ENCOUNTER-6ba4d2f1da08e14f**: Study Indication
  Applies to original IDs: 4611, 4746, 5089.

<a id="M17-CAP-ENCOUNTER-4ce97cdf0350225b"></a>
- **M17-CAP-ENCOUNTER-4ce97cdf0350225b**: Technical Parameters
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-9659e7c327f43c4e"></a>
- **M17-CAP-ENCOUNTER-9659e7c327f43c4e**: Anatomical Distribution
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-95a29347fe822013"></a>
- **M17-CAP-ENCOUNTER-95a29347fe822013**: Findings
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-a6fa6d83b3f964f8"></a>
- **M17-CAP-ENCOUNTER-a6fa6d83b3f964f8**: Specialist Interpretation
  Applies to original IDs: 4611, 4746.

<a id="M17-CAP-ENCOUNTER-816f49494ba8a0c9"></a>
- **M17-CAP-ENCOUNTER-816f49494ba8a0c9**: Historical Comparison
  Applies to original IDs: 4611, 4746, 5089.

<a id="M17-CAP-ENCOUNTER-94857e10b0dccf29"></a>
- **M17-CAP-ENCOUNTER-94857e10b0dccf29**: Clinical Correlation
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-7373adabd21fe2b3"></a>
- **M17-CAP-ENCOUNTER-7373adabd21fe2b3**: Genetic Correlation
  Applies to original IDs: 4611, 4746, 5089.

<a id="M17-CAP-ENCOUNTER-b86b4fba0e59c3bd"></a>
- **M17-CAP-ENCOUNTER-b86b4fba0e59c3bd**: Pathology Correlation
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-fb7dcbc64a7ed5f8"></a>
- **M17-CAP-ENCOUNTER-fb7dcbc64a7ed5f8**: AI Functions:
  Applies to original IDs: 4611, 4939, 5089.

<a id="M17-CAP-ENCOUNTER-3b767cef79e0a8da"></a>
- **M17-CAP-ENCOUNTER-3b767cef79e0a8da**: Structured Data Extraction
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-444523ab0f6b2bf9"></a>
- **M17-CAP-ENCOUNTER-444523ab0f6b2bf9**: Pattern Comparison
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-de30c69c38795d71"></a>
- **M17-CAP-ENCOUNTER-de30c69c38795d71**: Longitudinal Change Support
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-2f27e552d723d07f"></a>
- **M17-CAP-ENCOUNTER-2f27e552d723d07f**: Integrations:
  Applies to original IDs: 4611, 4746.

<a id="M17-CAP-ENCOUNTER-1776431d6d17f344"></a>
- **M17-CAP-ENCOUNTER-1776431d6d17f344**: Neurology
  Applies to original IDs: 4611, 4746.

<a id="M17-CAP-ENCOUNTER-c736106523040888"></a>
- **M17-CAP-ENCOUNTER-c736106523040888**: Neurophysiology
  Applies to original IDs: 4611, 4746.

<a id="M17-CAP-ENCOUNTER-aaaf0a34a8eb8286"></a>
- **M17-CAP-ENCOUNTER-aaaf0a34a8eb8286**: Genetics
  Applies to original IDs: 4611, 4746.

<a id="M17-CAP-ENCOUNTER-e9426dd272d9aa70"></a>
- **M17-CAP-ENCOUNTER-e9426dd272d9aa70**: Rehabilitation
  Applies to original IDs: 4611, 1104.

<a id="M17-CAP-ENCOUNTER-2d2ffbcbba25564e"></a>
- **M17-CAP-ENCOUNTER-2d2ffbcbba25564e**: Pathology
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-07f8d474b8b4141c"></a>
- **M17-CAP-ENCOUNTER-07f8d474b8b4141c**: Safety:
  Applies to original IDs: 4611, 4939.

<a id="M17-CAP-ENCOUNTER-1e71b379f83b020e"></a>
- **M17-CAP-ENCOUNTER-1e71b379f83b020e**: Automated analysis remains supplementary to specialist interpretation.
  Applies to original IDs: 4611.

<a id="M17-CAP-ENCOUNTER-b88b375a44ccd619"></a>
- **M17-CAP-ENCOUNTER-b88b375a44ccd619**: Status:
  Applies to original IDs: 4611, 4746, 4939, 5089.

<a id="M17-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M17-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4611, 4746, 4939, 5089, 434, 447, 477, 589, 725, 737, 746, 747, 749, 832, 972, 987, 1102, 1103, 1104, 2023, 2032, 2129, 2223, 2272, 2303, 2319, 2320, 2322, 2443, 2547, 2639, 2669, 3090, 3350, 3591, 1194, 1239, 1247, 1476, 1511, 1741, 1742, 1743, 1749, 1753, 1760, 1970, 1976.

<a id="M17-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M17-CAP-ENCOUNTER-6f33acf3afb37064**: ---
  Applies to original IDs: 4611, 4746, 4939, 5089, 434, 447, 477, 589, 725, 737, 746, 747, 749, 832, 972, 987, 1102, 1103, 1104, 2023, 2032, 2129, 2223, 2272, 2303, 2319, 2320, 2322, 2443, 2547, 2639, 2669, 3090, 3350, 3591, 1194, 1239, 1247, 1476, 1511, 1741, 1742, 1743, 1749, 1753, 1760, 1970, 1976.

<a id="M17-CAP-ENCOUNTER-33bcc0355abe7c4a"></a>
- **M17-CAP-ENCOUNTER-33bcc0355abe7c4a**: Integrate objective functional visual testing into pediatric ophthalmic and neurological care.
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-9d06949dce68dd97"></a>
- **M17-CAP-ENCOUNTER-9d06949dce68dd97**: Electroretinography
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-6b4ae5e2afeded93"></a>
- **M17-CAP-ENCOUNTER-6b4ae5e2afeded93**: Visual Evoked Potentials
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-7a0164977f1d3579"></a>
- **M17-CAP-ENCOUNTER-7a0164977f1d3579**: Functional Vision Tests
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-f9fdc62bc7dd9da4"></a>
- **M17-CAP-ENCOUNTER-f9fdc62bc7dd9da4**: Dark Adaptation Context
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-ed5c086b04924f55"></a>
- **M17-CAP-ENCOUNTER-ed5c086b04924f55**: Color Vision
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-990335ee13ecf977"></a>
- **M17-CAP-ENCOUNTER-990335ee13ecf977**: Visual Fields
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-595522f2925fa689"></a>
- **M17-CAP-ENCOUNTER-595522f2925fa689**: Technical Quality
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-42563304d723e596"></a>
- **M17-CAP-ENCOUNTER-42563304d723e596**: Neurological Correlation
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-34f989613ab16060"></a>
- **M17-CAP-ENCOUNTER-34f989613ab16060**: Ophthalmology
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-6d476d921d4f6046"></a>
- **M17-CAP-ENCOUNTER-6d476d921d4f6046**: Neuro-Ophthalmology
  Applies to original IDs: 4746.

<a id="M17-CAP-ENCOUNTER-976d19aeb3e8631f"></a>
- **M17-CAP-ENCOUNTER-976d19aeb3e8631f**: Create a unified structured environment for pediatric functional urinary diagnostics.
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-f46e4a2365991da8"></a>
- **M17-CAP-ENCOUNTER-f46e4a2365991da8**: Uroflowmetry
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-60b6563d3880e9df"></a>
- **M17-CAP-ENCOUNTER-60b6563d3880e9df**: Flow Pattern
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-9efea1267ff6783f"></a>
- **M17-CAP-ENCOUNTER-9efea1267ff6783f**: Voided Volume
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-ce22e453047d5b7b"></a>
- **M17-CAP-ENCOUNTER-ce22e453047d5b7b**: Residual Urine
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-8f62aee1994fc4b4"></a>
- **M17-CAP-ENCOUNTER-8f62aee1994fc4b4**: Urodynamic Study
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-1f97ecc78c77f4dc"></a>
- **M17-CAP-ENCOUNTER-1f97ecc78c77f4dc**: Filling Phase
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-b31578f304e75e64"></a>
- **M17-CAP-ENCOUNTER-b31578f304e75e64**: Storage Function
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-9130be5a363a1e8d"></a>
- **M17-CAP-ENCOUNTER-9130be5a363a1e8d**: Emptying Function
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-dd568b2688691227"></a>
- **M17-CAP-ENCOUNTER-dd568b2688691227**: Pressure Data
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-9a16c81ba87ca9ce"></a>
- **M17-CAP-ENCOUNTER-9a16c81ba87ca9ce**: Compliance Context
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-8447259fe5048582"></a>
- **M17-CAP-ENCOUNTER-8447259fe5048582**: Detrusor Activity Context
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-25c6611717203066"></a>
- **M17-CAP-ENCOUNTER-25c6611717203066**: Sphincter Coordination Context
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-5f26783c20976e12"></a>
- **M17-CAP-ENCOUNTER-5f26783c20976e12**: Video Urodynamics Context
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-30c6f2d75d8ac59b"></a>
- **M17-CAP-ENCOUNTER-30c6f2d75d8ac59b**: Treatment Correlation
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-e2ecb16a5ee3fd08"></a>
- **M17-CAP-ENCOUNTER-e2ecb16a5ee3fd08**: Serial Comparison
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-f121194365a94485"></a>
- **M17-CAP-ENCOUNTER-f121194365a94485**: Pattern Quantification Support
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-7fa79dce2b8d7e98"></a>
- **M17-CAP-ENCOUNTER-7fa79dce2b8d7e98**: Longitudinal Comparison
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-910839296cd8bc12"></a>
- **M17-CAP-ENCOUNTER-910839296cd8bc12**: Structured Report Assistance
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-01a216748bdeca03"></a>
- **M17-CAP-ENCOUNTER-01a216748bdeca03**: Automated analysis does not replace specialist interpretation.
  Applies to original IDs: 4939.

<a id="M17-CAP-ENCOUNTER-97ef3f8a21c1b783"></a>
- **M17-CAP-ENCOUNTER-97ef3f8a21c1b783**: Integrate neurophysiological diagnostics for pediatric peripheral nerve, neuromuscular junction and muscle disorders.
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-7de98979a8905506"></a>
- **M17-CAP-ENCOUNTER-7de98979a8905506**: Nerve Conduction
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-51fc7b5a1be9fb2a"></a>
- **M17-CAP-ENCOUNTER-51fc7b5a1be9fb2a**: EMG Context
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-a824eb2b5805518e"></a>
- **M17-CAP-ENCOUNTER-a824eb2b5805518e**: Repetitive Stimulation Context
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-69284a5a267e65fe"></a>
- **M17-CAP-ENCOUNTER-69284a5a267e65fe**: Neuromuscular Junction Context
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-9fa2ffae69afca4d"></a>
- **M17-CAP-ENCOUNTER-9fa2ffae69afca4d**: Nerve Findings
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-5dba7b6257530264"></a>
- **M17-CAP-ENCOUNTER-5dba7b6257530264**: Muscle Findings
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-f1c4f4e1cdbb205e"></a>
- **M17-CAP-ENCOUNTER-f1c4f4e1cdbb205e**: Technical Context
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-b7c22178e847d20a"></a>
- **M17-CAP-ENCOUNTER-b7c22178e847d20a**: Formal Interpretation
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-6b97ceb64c1fa0a3"></a>
- **M17-CAP-ENCOUNTER-6b97ceb64c1fa0a3**: Imaging Correlation
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-57911d9f9028b0e8"></a>
- **M17-CAP-ENCOUNTER-57911d9f9028b0e8**: Laboratory Correlation
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-c123cd3813875826"></a>
- **M17-CAP-ENCOUNTER-c123cd3813875826**: Treatment Response Context
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-2aa051570bebef14"></a>
- **M17-CAP-ENCOUNTER-2aa051570bebef14**: Signal Organization Support
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-6a5f9462c574b340"></a>
- **M17-CAP-ENCOUNTER-6a5f9462c574b340**: Structured Reporting
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-9d3005ab30f05663"></a>
- **M17-CAP-ENCOUNTER-9d3005ab30f05663**: Historical Comparison Assistance
  Applies to original IDs: 5089.

<a id="M17-CAP-ENCOUNTER-7a5babdae3627a35"></a>
- **M17-CAP-ENCOUNTER-7a5babdae3627a35**: # Infusion Therapy Registry
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-a2e5506e341eec8b"></a>
- **M17-CAP-ENCOUNTER-a2e5506e341eec8b**: Maintains infusion treatment history.
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M17-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports
  Applies to original IDs: 434, 447, 477, 589, 725, 737, 746, 747, 749, 832, 972, 987, 1102, 1103, 1104, 2023, 2032, 2129, 2223, 2272, 2303, 2319, 2320, 2322, 2443, 2547, 2639, 2669, 3090, 3350, 3591, 1194, 1239, 1247, 1476, 1511, 1741, 1742, 1743, 1749, 1753, 1970, 1976.

<a id="M17-CAP-ENCOUNTER-3cfa39200ce0ea10"></a>
- **M17-CAP-ENCOUNTER-3cfa39200ce0ea10**: Medication
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-10d8c964b53514ca"></a>
- **M17-CAP-ENCOUNTER-10d8c964b53514ca**: Duration
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-7ec7306ae6b6e2af"></a>
- **M17-CAP-ENCOUNTER-7ec7306ae6b6e2af**: Infusion Rate
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-21fdd0996b26d27b"></a>
- **M17-CAP-ENCOUNTER-21fdd0996b26d27b**: Medical Facility
  Applies to original IDs: 434.

<a id="M17-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M17-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 434, 447, 477, 589, 725, 737, 746, 747, 749, 832, 972, 987, 1102, 1103, 1104, 2023, 2032, 2129, 2223, 2272, 2303, 2319, 2320, 2322, 2443, 2547, 2639, 2669, 3090, 3350, 3591, 1194, 1239, 1247, 1476, 1511, 1741, 1742, 1743, 1749, 1753, 1760, 1970, 1976.

<a id="M17-CAP-ENCOUNTER-3d582cdf68aa9e51"></a>
- **M17-CAP-ENCOUNTER-3d582cdf68aa9e51**: # Orthodontic Treatment Registry
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-c4012a0510b5520c"></a>
- **M17-CAP-ENCOUNTER-c4012a0510b5520c**: Stores orthodontic treatment history.
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-9a151d4b909cb6a7"></a>
- **M17-CAP-ENCOUNTER-9a151d4b909cb6a7**: Braces
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-7aab728cee52b5bc"></a>
- **M17-CAP-ENCOUNTER-7aab728cee52b5bc**: Aligners
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-354a3fb57f623164"></a>
- **M17-CAP-ENCOUNTER-354a3fb57f623164**: Retainers
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-9b97c6e8966ca772"></a>
- **M17-CAP-ENCOUNTER-9b97c6e8966ca772**: Treatment Timeline
  Applies to original IDs: 447.

<a id="M17-CAP-ENCOUNTER-4dfd58443a878e1e"></a>
- **M17-CAP-ENCOUNTER-4dfd58443a878e1e**: # Laser Dermatology Registry
  Applies to original IDs: 477.

<a id="M17-CAP-ENCOUNTER-47ad4bd4e70560ad"></a>
- **M17-CAP-ENCOUNTER-47ad4bd4e70560ad**: Stores laser treatment history.
  Applies to original IDs: 477.

<a id="M17-CAP-ENCOUNTER-d7572844b60f27ef"></a>
- **M17-CAP-ENCOUNTER-d7572844b60f27ef**: Laser Type
  Applies to original IDs: 477.

<a id="M17-CAP-ENCOUNTER-f53ba0c0214c2b5f"></a>
- **M17-CAP-ENCOUNTER-f53ba0c0214c2b5f**: Procedure
  Applies to original IDs: 477.

<a id="M17-CAP-ENCOUNTER-413127edea239d4a"></a>
- **M17-CAP-ENCOUNTER-413127edea239d4a**: Treatment Area
  Applies to original IDs: 477.

<a id="M17-CAP-ENCOUNTER-0d86946e629cc025"></a>
- **M17-CAP-ENCOUNTER-0d86946e629cc025**: Follow-up
  Applies to original IDs: 477, 2023, 2223, 1476, 1742.

<a id="M17-CAP-ENCOUNTER-31b60706ac1a06de"></a>
- **M17-CAP-ENCOUNTER-31b60706ac1a06de**: # Oxygen Therapy Registry
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-611a3faf290f6f2b"></a>
- **M17-CAP-ENCOUNTER-611a3faf290f6f2b**: Stores oxygen therapy information.
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-9227af3d42a5dacc"></a>
- **M17-CAP-ENCOUNTER-9227af3d42a5dacc**: Oxygen Flow Rate
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-7e84509910349735"></a>
- **M17-CAP-ENCOUNTER-7e84509910349735**: Device Type
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-5dff22218c34f455"></a>
- **M17-CAP-ENCOUNTER-5dff22218c34f455**: Daily Usage
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-0ecdd2d7d7142f29"></a>
- **M17-CAP-ENCOUNTER-0ecdd2d7d7142f29**: Physician Recommendations
  Applies to original IDs: 589.

<a id="M17-CAP-ENCOUNTER-26b17faabc14e9d7"></a>
- **M17-CAP-ENCOUNTER-26b17faabc14e9d7**: # Prenatal Visit Registry
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-46ceac2ac40296aa"></a>
- **M17-CAP-ENCOUNTER-46ceac2ac40296aa**: Stores prenatal consultation history.
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-9da77df714be61fe"></a>
- **M17-CAP-ENCOUNTER-9da77df714be61fe**: Blood Pressure
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-cdcecae88521194c"></a>
- **M17-CAP-ENCOUNTER-cdcecae88521194c**: Weight
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-cf56f937741c979f"></a>
- **M17-CAP-ENCOUNTER-cf56f937741c979f**: Fundal Height
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-af2b53e4b5b841d9"></a>
- **M17-CAP-ENCOUNTER-af2b53e4b5b841d9**: Fetal Heart Rate
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-6864b968505141fb"></a>
- **M17-CAP-ENCOUNTER-6864b968505141fb**: Physician Notes
  Applies to original IDs: 725.

<a id="M17-CAP-ENCOUNTER-5ca3fa29c093a633"></a>
- **M17-CAP-ENCOUNTER-5ca3fa29c093a633**: # Delivery Registry
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-6ed1aaa7969effdd"></a>
- **M17-CAP-ENCOUNTER-6ed1aaa7969effdd**: Stores childbirth information.
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-b9e025d648dedbe9"></a>
- **M17-CAP-ENCOUNTER-b9e025d648dedbe9**: Delivery Type
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-9d8224a828e48762"></a>
- **M17-CAP-ENCOUNTER-9d8224a828e48762**: Date & Time
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-9292031266b0e334"></a>
- **M17-CAP-ENCOUNTER-9292031266b0e334**: Hospital
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-55faff639138dc86"></a>
- **M17-CAP-ENCOUNTER-55faff639138dc86**: Physician
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-b67d348aacb0bf73"></a>
- **M17-CAP-ENCOUNTER-b67d348aacb0bf73**: Maternal Outcome
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-0e9c72ff6bdde191"></a>
- **M17-CAP-ENCOUNTER-0e9c72ff6bdde191**: Newborn Information
  Applies to original IDs: 737.

<a id="M17-CAP-ENCOUNTER-32d09d5389b5db72"></a>
- **M17-CAP-ENCOUNTER-32d09d5389b5db72**: # Cesarean Section Registry
  Applies to original IDs: 746.

<a id="M17-CAP-ENCOUNTER-f0bf423e5c7f1594"></a>
- **M17-CAP-ENCOUNTER-f0bf423e5c7f1594**: Stores cesarean delivery history.
  Applies to original IDs: 746.

<a id="M17-CAP-ENCOUNTER-e94f4e46bd1a18b2"></a>
- **M17-CAP-ENCOUNTER-e94f4e46bd1a18b2**: Indications
  Applies to original IDs: 746.

<a id="M17-CAP-ENCOUNTER-18419e891e0c8e26"></a>
- **M17-CAP-ENCOUNTER-18419e891e0c8e26**: Surgical Team
  Applies to original IDs: 746.

<a id="M17-CAP-ENCOUNTER-73dedf86b2ae9801"></a>
- **M17-CAP-ENCOUNTER-73dedf86b2ae9801**: Complications
  Applies to original IDs: 746, 747.

<a id="M17-CAP-ENCOUNTER-2ead501f1441e7f1"></a>
- **M17-CAP-ENCOUNTER-2ead501f1441e7f1**: Recovery
  Applies to original IDs: 746, 747.

<a id="M17-CAP-ENCOUNTER-e32d417116e9838b"></a>
- **M17-CAP-ENCOUNTER-e32d417116e9838b**: # Vaginal Delivery Registry
  Applies to original IDs: 747.

<a id="M17-CAP-ENCOUNTER-58ef8e3d795b3b44"></a>
- **M17-CAP-ENCOUNTER-58ef8e3d795b3b44**: Stores natural childbirth history.
  Applies to original IDs: 747.

<a id="M17-CAP-ENCOUNTER-41a6033e17db1fe7"></a>
- **M17-CAP-ENCOUNTER-41a6033e17db1fe7**: Labor Duration
  Applies to original IDs: 747.

<a id="M17-CAP-ENCOUNTER-ccd34bbcfaa6f660"></a>
- **M17-CAP-ENCOUNTER-ccd34bbcfaa6f660**: Episiotomy
  Applies to original IDs: 747.

<a id="M17-CAP-ENCOUNTER-d01463b8863c367a"></a>
- **M17-CAP-ENCOUNTER-d01463b8863c367a**: # APGAR Registry
  Applies to original IDs: 749.

<a id="M17-CAP-ENCOUNTER-46da41b86e42b438"></a>
- **M17-CAP-ENCOUNTER-46da41b86e42b438**: Stores APGAR scores.
  Applies to original IDs: 749.

<a id="M17-CAP-ENCOUNTER-1477572deea995c5"></a>
- **M17-CAP-ENCOUNTER-1477572deea995c5**: 1 Minute
  Applies to original IDs: 749.

<a id="M17-CAP-ENCOUNTER-af31d197d06dd645"></a>
- **M17-CAP-ENCOUNTER-af31d197d06dd645**: 5 Minutes
  Applies to original IDs: 749.

<a id="M17-CAP-ENCOUNTER-a66c9df98f139946"></a>
- **M17-CAP-ENCOUNTER-a66c9df98f139946**: 10 Minutes
  Applies to original IDs: 749.

<a id="M17-CAP-ENCOUNTER-aa162443a2869444"></a>
- **M17-CAP-ENCOUNTER-aa162443a2869444**: # Pediatric Hospitalization Registry
  Applies to original IDs: 832.

<a id="M17-CAP-ENCOUNTER-d86b0d3d62d53efe"></a>
- **M17-CAP-ENCOUNTER-d86b0d3d62d53efe**: Stores inpatient history.
  Applies to original IDs: 832.

<a id="M17-CAP-ENCOUNTER-63bde98f08b204ce"></a>
- **M17-CAP-ENCOUNTER-63bde98f08b204ce**: Admission
  Applies to original IDs: 832, 1476, 1742.

<a id="M17-CAP-ENCOUNTER-5f124f9e42776b79"></a>
- **M17-CAP-ENCOUNTER-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 832, 1476, 1742.

<a id="M17-CAP-ENCOUNTER-228b18d13e8b34f1"></a>
- **M17-CAP-ENCOUNTER-228b18d13e8b34f1**: Procedures
  Applies to original IDs: 832.

<a id="M17-CAP-ENCOUNTER-bfaa6caa1e59854b"></a>
- **M17-CAP-ENCOUNTER-bfaa6caa1e59854b**: Discharge Summary
  Applies to original IDs: 832.

<a id="M17-CAP-ENCOUNTER-d8891edd7c3332d7"></a>
- **M17-CAP-ENCOUNTER-d8891edd7c3332d7**: # Pediatric Bleeding Episode Registry
  Applies to original IDs: 972.

<a id="M17-CAP-ENCOUNTER-a0f841abaad1ba36"></a>
- **M17-CAP-ENCOUNTER-a0f841abaad1ba36**: Tracks bleeding events.
  Applies to original IDs: 972.

<a id="M17-CAP-ENCOUNTER-0dbeacb9f9ac3f6a"></a>
- **M17-CAP-ENCOUNTER-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 972.

<a id="M17-CAP-ENCOUNTER-0207549b28719905"></a>
- **M17-CAP-ENCOUNTER-0207549b28719905**: Treatment
  Applies to original IDs: 972, 1476, 1742.

<a id="M17-CAP-ENCOUNTER-3b2dc6d79392d7b8"></a>
- **M17-CAP-ENCOUNTER-3b2dc6d79392d7b8**: Location
  Applies to original IDs: 972.

<a id="M17-CAP-ENCOUNTER-9029a8bbdb8a6553"></a>
- **M17-CAP-ENCOUNTER-9029a8bbdb8a6553**: Outcome
  Applies to original IDs: 972.

<a id="M17-CAP-ENCOUNTER-0c99bbdb6a98360b"></a>
- **M17-CAP-ENCOUNTER-0c99bbdb6a98360b**: # Pediatric Biologic Therapy Registry
  Applies to original IDs: 987.

<a id="M17-CAP-ENCOUNTER-eca51a961c19fa98"></a>
- **M17-CAP-ENCOUNTER-eca51a961c19fa98**: Tracks biological medications.
  Applies to original IDs: 987.

<a id="M17-CAP-ENCOUNTER-d26b3a843958c1ee"></a>
- **M17-CAP-ENCOUNTER-d26b3a843958c1ee**: TNF Inhibitors
  Applies to original IDs: 987, 2547.

<a id="M17-CAP-ENCOUNTER-44204fc4bd68aadf"></a>
- **M17-CAP-ENCOUNTER-44204fc4bd68aadf**: IL Inhibitors
  Applies to original IDs: 987, 2547.

<a id="M17-CAP-ENCOUNTER-195df949b10a5a24"></a>
- **M17-CAP-ENCOUNTER-195df949b10a5a24**: JAK Inhibitors
  Applies to original IDs: 987, 2547.

<a id="M17-CAP-ENCOUNTER-6cdd415dc77e2876"></a>
- **M17-CAP-ENCOUNTER-6cdd415dc77e2876**: Infusion Schedule
  Applies to original IDs: 987.

<a id="M17-CAP-ENCOUNTER-0cf7b6378705ee11"></a>
- **M17-CAP-ENCOUNTER-0cf7b6378705ee11**: Tracks laser treatment.
  Applies to original IDs: 1102.

<a id="M17-CAP-ENCOUNTER-be087570e4aac639"></a>
- **M17-CAP-ENCOUNTER-be087570e4aac639**: Hemangiomas
  Applies to original IDs: 1102.

<a id="M17-CAP-ENCOUNTER-a1c85517aa7390cf"></a>
- **M17-CAP-ENCOUNTER-a1c85517aa7390cf**: Pigmented Lesions
  Applies to original IDs: 1102.

<a id="M17-CAP-ENCOUNTER-ea3b0a90f207f90e"></a>
- **M17-CAP-ENCOUNTER-ea3b0a90f207f90e**: Scars
  Applies to original IDs: 1102.

<a id="M17-CAP-ENCOUNTER-5e8c51cc3501e267"></a>
- **M17-CAP-ENCOUNTER-5e8c51cc3501e267**: Outcomes
  Applies to original IDs: 1102.

<a id="M17-CAP-ENCOUNTER-2c0b7959f998fee5"></a>
- **M17-CAP-ENCOUNTER-2c0b7959f998fee5**: Stores pediatric wound management.
  Applies to original IDs: 1103.

<a id="M17-CAP-ENCOUNTER-d378f0840e8cc474"></a>
- **M17-CAP-ENCOUNTER-d378f0840e8cc474**: Acute Wounds
  Applies to original IDs: 1103.

<a id="M17-CAP-ENCOUNTER-07acf82a970a13fe"></a>
- **M17-CAP-ENCOUNTER-07acf82a970a13fe**: Burns
  Applies to original IDs: 1103.

<a id="M17-CAP-ENCOUNTER-681a08b0b30a5c0f"></a>
- **M17-CAP-ENCOUNTER-681a08b0b30a5c0f**: Chronic Wounds
  Applies to original IDs: 1103.

<a id="M17-CAP-ENCOUNTER-695a95dbb45b906a"></a>
- **M17-CAP-ENCOUNTER-695a95dbb45b906a**: Healing Timeline
  Applies to original IDs: 1103.

<a id="M17-CAP-ENCOUNTER-6ed45b845205f1be"></a>
- **M17-CAP-ENCOUNTER-6ed45b845205f1be**: Tracks burn treatment.
  Applies to original IDs: 1104.

<a id="M17-CAP-ENCOUNTER-b213565348c4c251"></a>
- **M17-CAP-ENCOUNTER-b213565348c4c251**: Burn Degree
  Applies to original IDs: 1104.

<a id="M17-CAP-ENCOUNTER-af3c2bfbcbf82f53"></a>
- **M17-CAP-ENCOUNTER-af3c2bfbcbf82f53**: TBSA
  Applies to original IDs: 1104.

<a id="M17-CAP-ENCOUNTER-bc506fdefc6e7e7b"></a>
- **M17-CAP-ENCOUNTER-bc506fdefc6e7e7b**: Surgery
  Applies to original IDs: 1104.

<a id="M17-CAP-ENCOUNTER-28c816e888502df2"></a>
- **M17-CAP-ENCOUNTER-28c816e888502df2**: Maintains PCI procedures.
  Applies to original IDs: 2023.

<a id="M17-CAP-ENCOUNTER-4ee3bdbb65263777"></a>
- **M17-CAP-ENCOUNTER-4ee3bdbb65263777**: Stents
  Applies to original IDs: 2023.

<a id="M17-CAP-ENCOUNTER-ebe897e798c1c94a"></a>
- **M17-CAP-ENCOUNTER-ebe897e798c1c94a**: Balloons
  Applies to original IDs: 2023.

<a id="M17-CAP-ENCOUNTER-ec7719bf3250a0fb"></a>
- **M17-CAP-ENCOUNTER-ec7719bf3250a0fb**: Maintains catheter ablation procedures.
  Applies to original IDs: 2032.

<a id="M17-CAP-ENCOUNTER-6d45cb52faa50f63"></a>
- **M17-CAP-ENCOUNTER-6d45cb52faa50f63**: AF Ablation
  Applies to original IDs: 2032.

<a id="M17-CAP-ENCOUNTER-c5fe1876ebe8e583"></a>
- **M17-CAP-ENCOUNTER-c5fe1876ebe8e583**: VT Ablation
  Applies to original IDs: 2032.

<a id="M17-CAP-ENCOUNTER-14d249af04054d55"></a>
- **M17-CAP-ENCOUNTER-14d249af04054d55**: SVT Ablation
  Applies to original IDs: 2032.

<a id="M17-CAP-ENCOUNTER-fd17caeb23b32c20"></a>
- **M17-CAP-ENCOUNTER-fd17caeb23b32c20**: Maintains radiation therapy history.
  Applies to original IDs: 2129.

<a id="M17-CAP-ENCOUNTER-364a4c7e3ce06ed8"></a>
- **M17-CAP-ENCOUNTER-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 2129.

<a id="M17-CAP-ENCOUNTER-30f4e103387d0a31"></a>
- **M17-CAP-ENCOUNTER-30f4e103387d0a31**: Fractions
  Applies to original IDs: 2129.

<a id="M17-CAP-ENCOUNTER-a5abdb9ce3ea0d9d"></a>
- **M17-CAP-ENCOUNTER-a5abdb9ce3ea0d9d**: Treatment Plans
  Applies to original IDs: 2129.

<a id="M17-CAP-ENCOUNTER-dadc80cbf7dd3e2b"></a>
- **M17-CAP-ENCOUNTER-dadc80cbf7dd3e2b**: Maintains audiometric examinations.
  Applies to original IDs: 2223.

<a id="M17-CAP-ENCOUNTER-eca618657af7d0d4"></a>
- **M17-CAP-ENCOUNTER-eca618657af7d0d4**: Pure Tone Audiometry
  Applies to original IDs: 2223.

<a id="M17-CAP-ENCOUNTER-725634a4c66d13b4"></a>
- **M17-CAP-ENCOUNTER-725634a4c66d13b4**: Speech Audiometry
  Applies to original IDs: 2223.

<a id="M17-CAP-ENCOUNTER-db0eb343f4f21e07"></a>
- **M17-CAP-ENCOUNTER-db0eb343f4f21e07**: Maintains urodynamic investigations.
  Applies to original IDs: 2272.

<a id="M17-CAP-ENCOUNTER-d44acfef778f918a"></a>
- **M17-CAP-ENCOUNTER-d44acfef778f918a**: Flowmetry
  Applies to original IDs: 2272, 2639.

<a id="M17-CAP-ENCOUNTER-afd3ed3dcd852172"></a>
- **M17-CAP-ENCOUNTER-afd3ed3dcd852172**: Pressure Studies
  Applies to original IDs: 2272, 2639.

<a id="M17-CAP-ENCOUNTER-674ccb384f6b67f9"></a>
- **M17-CAP-ENCOUNTER-674ccb384f6b67f9**: Bladder Function
  Applies to original IDs: 2272.

<a id="M17-CAP-ENCOUNTER-01164a5b697223ed"></a>
- **M17-CAP-ENCOUNTER-01164a5b697223ed**: Maintains hormonal therapy history.
  Applies to original IDs: 2303, 2443.

<a id="M17-CAP-ENCOUNTER-fe9d5e7d4ffbf8ef"></a>
- **M17-CAP-ENCOUNTER-fe9d5e7d4ffbf8ef**: Estrogens
  Applies to original IDs: 2303.

<a id="M17-CAP-ENCOUNTER-2f87863459d7d729"></a>
- **M17-CAP-ENCOUNTER-2f87863459d7d729**: Progesterone
  Applies to original IDs: 2303.

<a id="M17-CAP-ENCOUNTER-3745f91639729c52"></a>
- **M17-CAP-ENCOUNTER-3745f91639729c52**: Combined Therapy
  Applies to original IDs: 2303.

<a id="M17-CAP-ENCOUNTER-91e687b76faefdf7"></a>
- **M17-CAP-ENCOUNTER-91e687b76faefdf7**: Maintains fetal monitoring records.
  Applies to original IDs: 2319.

<a id="M17-CAP-ENCOUNTER-5029e98fa787f3af"></a>
- **M17-CAP-ENCOUNTER-5029e98fa787f3af**: CTG
  Applies to original IDs: 2319.

<a id="M17-CAP-ENCOUNTER-27334b4b6e6f7071"></a>
- **M17-CAP-ENCOUNTER-27334b4b6e6f7071**: Baseline Heart Rate
  Applies to original IDs: 2319.

<a id="M17-CAP-ENCOUNTER-1c82d1bc3270fe14"></a>
- **M17-CAP-ENCOUNTER-1c82d1bc3270fe14**: Variability
  Applies to original IDs: 2319.

<a id="M17-CAP-ENCOUNTER-7e3c1903997a8f62"></a>
- **M17-CAP-ENCOUNTER-7e3c1903997a8f62**: Maintains delivery records.
  Applies to original IDs: 2320.

<a id="M17-CAP-ENCOUNTER-c56251d76a70560b"></a>
- **M17-CAP-ENCOUNTER-c56251d76a70560b**: Vaginal Delivery
  Applies to original IDs: 2320.

<a id="M17-CAP-ENCOUNTER-ad5279f40654e29c"></a>
- **M17-CAP-ENCOUNTER-ad5279f40654e29c**: Cesarean Section
  Applies to original IDs: 2320.

<a id="M17-CAP-ENCOUNTER-4dec87935877293b"></a>
- **M17-CAP-ENCOUNTER-4dec87935877293b**: Obstetric Outcomes
  Applies to original IDs: 2320.

<a id="M17-CAP-ENCOUNTER-56351b7d201aaa04"></a>
- **M17-CAP-ENCOUNTER-56351b7d201aaa04**: Maintains immediate newborn information.
  Applies to original IDs: 2322.

<a id="M17-CAP-ENCOUNTER-e59b9ca5e2d20d47"></a>
- **M17-CAP-ENCOUNTER-e59b9ca5e2d20d47**: Apgar Score
  Applies to original IDs: 2322.

<a id="M17-CAP-ENCOUNTER-c788fb2356aeecf2"></a>
- **M17-CAP-ENCOUNTER-c788fb2356aeecf2**: Birth Weight
  Applies to original IDs: 2322.

<a id="M17-CAP-ENCOUNTER-09102dc1ad88211b"></a>
- **M17-CAP-ENCOUNTER-09102dc1ad88211b**: Neonatal Adaptation
  Applies to original IDs: 2322.

<a id="M17-CAP-ENCOUNTER-dc70b29e22d49421"></a>
- **M17-CAP-ENCOUNTER-dc70b29e22d49421**: Replacement Therapy
  Applies to original IDs: 2443.

<a id="M17-CAP-ENCOUNTER-7413cf70d2a6df46"></a>
- **M17-CAP-ENCOUNTER-7413cf70d2a6df46**: Suppression Therapy
  Applies to original IDs: 2443.

<a id="M17-CAP-ENCOUNTER-248b1a6697abf4c3"></a>
- **M17-CAP-ENCOUNTER-248b1a6697abf4c3**: Dose Monitoring
  Applies to original IDs: 2443.

<a id="M17-CAP-ENCOUNTER-f205879203df0847"></a>
- **M17-CAP-ENCOUNTER-f205879203df0847**: Maintains biologic therapy history.
  Applies to original IDs: 2547.

<a id="M17-CAP-ENCOUNTER-b1ea7fa14d22628f"></a>
- **M17-CAP-ENCOUNTER-b1ea7fa14d22628f**: Therapy Safety Monitoring
  Applies to original IDs: 2547.

<a id="M17-CAP-ENCOUNTER-c2ff52f970833fce"></a>
- **M17-CAP-ENCOUNTER-c2ff52f970833fce**: Maintains urodynamic examinations.
  Applies to original IDs: 2639.

<a id="M17-CAP-ENCOUNTER-20d08058d00b5a32"></a>
- **M17-CAP-ENCOUNTER-20d08058d00b5a32**: Bladder Capacity
  Applies to original IDs: 2639.

<a id="M17-CAP-ENCOUNTER-85d61c5ac64e394d"></a>
- **M17-CAP-ENCOUNTER-85d61c5ac64e394d**: Functional Assessment
  Applies to original IDs: 2639.

<a id="M17-CAP-ENCOUNTER-17f827627ffc2d75"></a>
- **M17-CAP-ENCOUNTER-17f827627ffc2d75**: Maintains ART procedures.
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-baec3852076bf1c2"></a>
- **M17-CAP-ENCOUNTER-baec3852076bf1c2**: IVF
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-51129f60807c8470"></a>
- **M17-CAP-ENCOUNTER-51129f60807c8470**: ICSI
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-09330adb8d86f0f1"></a>
- **M17-CAP-ENCOUNTER-09330adb8d86f0f1**: Frozen Embryo Transfer
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-1b39e6c9cd4850c0"></a>
- **M17-CAP-ENCOUNTER-1b39e6c9cd4850c0**: Donor Programs
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-8e665aa3e996e5bd"></a>
- **M17-CAP-ENCOUNTER-8e665aa3e996e5bd**: Outcome Analysis
  Applies to original IDs: 2669.

<a id="M17-CAP-ENCOUNTER-7461579c1a6fb57d"></a>
- **M17-CAP-ENCOUNTER-7461579c1a6fb57d**: Maintains electroencephalography records.
  Applies to original IDs: 3090.

<a id="M17-CAP-ENCOUNTER-568ab830413345f7"></a>
- **M17-CAP-ENCOUNTER-568ab830413345f7**: Routine EEG
  Applies to original IDs: 3090, 3350, 3591.

<a id="M17-CAP-ENCOUNTER-1f2a9495b8b4201d"></a>
- **M17-CAP-ENCOUNTER-1f2a9495b8b4201d**: Sleep EEG
  Applies to original IDs: 3090, 3350.

<a id="M17-CAP-ENCOUNTER-739659791ced3b57"></a>
- **M17-CAP-ENCOUNTER-739659791ced3b57**: Long-term EEG
  Applies to original IDs: 3090.

<a id="M17-CAP-ENCOUNTER-061f583808ee9b44"></a>
- **M17-CAP-ENCOUNTER-061f583808ee9b44**: Video EEG
  Applies to original IDs: 3090, 3350, 3591.

<a id="M17-CAP-ENCOUNTER-05d7ec8a3045aa79"></a>
- **M17-CAP-ENCOUNTER-05d7ec8a3045aa79**: AI Signal Interpretation
  Applies to original IDs: 3090.

<a id="M17-CAP-ENCOUNTER-7790cf14a0da331d"></a>
- **M17-CAP-ENCOUNTER-7790cf14a0da331d**: Maintains neurophysiology studies.
  Applies to original IDs: 3350.

<a id="M17-CAP-ENCOUNTER-77bd60806fa7ccea"></a>
- **M17-CAP-ENCOUNTER-77bd60806fa7ccea**: Ambulatory EEG
  Applies to original IDs: 3350, 3591.

<a id="M17-CAP-ENCOUNTER-42789852a190904c"></a>
- **M17-CAP-ENCOUNTER-42789852a190904c**: AI EEG Interpretation
  Applies to original IDs: 3350.

<a id="M17-CAP-ENCOUNTER-0ed31935d4f8b186"></a>
- **M17-CAP-ENCOUNTER-0ed31935d4f8b186**: Maintains EEG studies.
  Applies to original IDs: 3591.

<a id="M17-CAP-ENCOUNTER-be1c0103815c32a4"></a>
- **M17-CAP-ENCOUNTER-be1c0103815c32a4**: Seizure Localization
  Applies to original IDs: 3591.

<a id="M17-CAP-ENCOUNTER-f18b76a521e0c135"></a>
- **M17-CAP-ENCOUNTER-f18b76a521e0c135**: AI-assisted Interpretation
  Applies to original IDs: 3591.

<a id="M17-CAP-ENCOUNTER-8a039aa0afd52039"></a>
- **M17-CAP-ENCOUNTER-8a039aa0afd52039**: Optimizes physician workflow.
  Applies to original IDs: 1194.

<a id="M17-CAP-ENCOUNTER-08ccf31a240f355c"></a>
- **M17-CAP-ENCOUNTER-08ccf31a240f355c**: Task Prioritization
  Applies to original IDs: 1194.

<a id="M17-CAP-ENCOUNTER-840c03fff1378a3d"></a>
- **M17-CAP-ENCOUNTER-840c03fff1378a3d**: Documentation Queue
  Applies to original IDs: 1194.

<a id="M17-CAP-ENCOUNTER-f2924adb800fe895"></a>
- **M17-CAP-ENCOUNTER-f2924adb800fe895**: Consultation Planning
  Applies to original IDs: 1194.

<a id="M17-CAP-ENCOUNTER-fae06ceff3c46d0c"></a>
- **M17-CAP-ENCOUNTER-fae06ceff3c46d0c**: Coordinates AI-assisted clinical workflows.
  Applies to original IDs: 1239.

<a id="M17-CAP-ENCOUNTER-7761202ddeecefcd"></a>
- **M17-CAP-ENCOUNTER-7761202ddeecefcd**: Automation
  Applies to original IDs: 1239.

<a id="M17-CAP-ENCOUNTER-c49e369f253d2e6e"></a>
- **M17-CAP-ENCOUNTER-c49e369f253d2e6e**: Verification
  Applies to original IDs: 1239.

<a id="M17-CAP-ENCOUNTER-c2f57ded28c2d504"></a>
- **M17-CAP-ENCOUNTER-c2f57ded28c2d504**: Human Approval
  Applies to original IDs: 1239.

<a id="M17-CAP-ENCOUNTER-79b63a83bc7d1c15"></a>
- **M17-CAP-ENCOUNTER-79b63a83bc7d1c15**: Audit Trail
  Applies to original IDs: 1239.

<a id="M17-CAP-ENCOUNTER-f2ee69ebc34971bd"></a>
- **M17-CAP-ENCOUNTER-f2ee69ebc34971bd**: Automates repetitive clinical tasks.
  Applies to original IDs: 1247.

<a id="M17-CAP-ENCOUNTER-848727e21b522fed"></a>
- **M17-CAP-ENCOUNTER-848727e21b522fed**: Referrals
  Applies to original IDs: 1247.

<a id="M17-CAP-ENCOUNTER-c359438731a4c20a"></a>
- **M17-CAP-ENCOUNTER-c359438731a4c20a**: Follow-up Scheduling
  Applies to original IDs: 1247.

<a id="M17-CAP-ENCOUNTER-6c2f4d895f25a6d5"></a>
- **M17-CAP-ENCOUNTER-6c2f4d895f25a6d5**: Notifications
  Applies to original IDs: 1247.

<a id="M17-CAP-ENCOUNTER-9bab73a90b954f21"></a>
- **M17-CAP-ENCOUNTER-9bab73a90b954f21**: Tracks workflow state.
  Applies to original IDs: 1476.

<a id="M17-CAP-ENCOUNTER-6749af8746a57bf8"></a>
- **M17-CAP-ENCOUNTER-6749af8746a57bf8**: Optimizes medical workflows.
  Applies to original IDs: 1511.

<a id="M17-CAP-ENCOUNTER-8f754accb56b9737"></a>
- **M17-CAP-ENCOUNTER-8f754accb56b9737**: Hospital Workflow
  Applies to original IDs: 1511, 1741.

<a id="M17-CAP-ENCOUNTER-276a977f80c8fd87"></a>
- **M17-CAP-ENCOUNTER-276a977f80c8fd87**: Outpatient Workflow
  Applies to original IDs: 1511.

<a id="M17-CAP-ENCOUNTER-d9c2df3f1ecccf14"></a>
- **M17-CAP-ENCOUNTER-d9c2df3f1ecccf14**: Emergency Workflow
  Applies to original IDs: 1511.

<a id="M17-CAP-ENCOUNTER-1a6334ad0e85c4d7"></a>
- **M17-CAP-ENCOUNTER-1a6334ad0e85c4d7**: Central engine for intelligent clinical workflow management.
  Applies to original IDs: 1741.

<a id="M17-CAP-ENCOUNTER-7a8e8aed9a7ea1cb"></a>
- **M17-CAP-ENCOUNTER-7a8e8aed9a7ea1cb**: Patient Journey
  Applies to original IDs: 1741, 1760.

<a id="M17-CAP-ENCOUNTER-4a7f31f908cd1778"></a>
- **M17-CAP-ENCOUNTER-4a7f31f908cd1778**: Clinical Tasks
  Applies to original IDs: 1741, 1760.

<a id="M17-CAP-ENCOUNTER-26a2a0a3769f6598"></a>
- **M17-CAP-ENCOUNTER-26a2a0a3769f6598**: Coordinates the complete patient journey.
  Applies to original IDs: 1742.

<a id="M17-CAP-ENCOUNTER-cbef04c1a43d8c85"></a>
- **M17-CAP-ENCOUNTER-cbef04c1a43d8c85**: Automatically organizes physician tasks.
  Applies to original IDs: 1743.

<a id="M17-CAP-ENCOUNTER-805b80ae3e8195ee"></a>
- **M17-CAP-ENCOUNTER-805b80ae3e8195ee**: Priority Queue
  Applies to original IDs: 1743.

<a id="M17-CAP-ENCOUNTER-0cfba033b1d93ebe"></a>
- **M17-CAP-ENCOUNTER-0cfba033b1d93ebe**: Deadlines
  Applies to original IDs: 1743.

<a id="M17-CAP-ENCOUNTER-388d76507b54643c"></a>
- **M17-CAP-ENCOUNTER-388d76507b54643c**: Clinical Actions
  Applies to original IDs: 1743.

<a id="M17-CAP-ENCOUNTER-371b4893d1da853c"></a>
- **M17-CAP-ENCOUNTER-371b4893d1da853c**: Coordinates surgical processes.
  Applies to original IDs: 1749.

<a id="M17-CAP-ENCOUNTER-7d74758e1b46c029"></a>
- **M17-CAP-ENCOUNTER-7d74758e1b46c029**: Preoperative
  Applies to original IDs: 1749.

<a id="M17-CAP-ENCOUNTER-e2c086c63ab884c5"></a>
- **M17-CAP-ENCOUNTER-e2c086c63ab884c5**: Intraoperative
  Applies to original IDs: 1749.

<a id="M17-CAP-ENCOUNTER-f61d98229e051f34"></a>
- **M17-CAP-ENCOUNTER-f61d98229e051f34**: Postoperative
  Applies to original IDs: 1749.

<a id="M17-CAP-ENCOUNTER-6c9d1bfe13c27f5b"></a>
- **M17-CAP-ENCOUNTER-6c9d1bfe13c27f5b**: Coordinates specialist referrals.
  Applies to original IDs: 1753.

<a id="M17-CAP-ENCOUNTER-3cdbd1824447d8dc"></a>
- **M17-CAP-ENCOUNTER-3cdbd1824447d8dc**: Internal Referral
  Applies to original IDs: 1753.

<a id="M17-CAP-ENCOUNTER-fec07af10a22a439"></a>
- **M17-CAP-ENCOUNTER-fec07af10a22a439**: External Referral
  Applies to original IDs: 1753.

<a id="M17-CAP-ENCOUNTER-5f08ed9cae7cc9f9"></a>
- **M17-CAP-ENCOUNTER-5f08ed9cae7cc9f9**: International Referral
  Applies to original IDs: 1753, 1970.

<a id="M17-CAP-ENCOUNTER-89fd5e59a55e7f00"></a>
- **M17-CAP-ENCOUNTER-89fd5e59a55e7f00**: Unified intelligent workflow platform.
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-039896b594f08ddf"></a>
- **M17-CAP-ENCOUNTER-039896b594f08ddf**: Coordinates
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-04b2428612376e37"></a>
- **M17-CAP-ENCOUNTER-04b2428612376e37**: Hospital Resources
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-338cd6a1ad180ca5"></a>
- **M17-CAP-ENCOUNTER-338cd6a1ad180ca5**: Telemedicine
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-093ccc333a2c143d"></a>
- **M17-CAP-ENCOUNTER-093ccc333a2c143d**: Workflow Optimization
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-f5730e3cd3f6d3da"></a>
- **M17-CAP-ENCOUNTER-f5730e3cd3f6d3da**: Forms the workflow intelligence layer of the EDHT ecosystem.
  Applies to original IDs: 1760.

<a id="M17-CAP-ENCOUNTER-dcbb555893e15d40"></a>
- **M17-CAP-ENCOUNTER-dcbb555893e15d40**: Improves referral communication.
  Applies to original IDs: 1970.

<a id="M17-CAP-ENCOUNTER-bc77ac65ff33b139"></a>
- **M17-CAP-ENCOUNTER-bc77ac65ff33b139**: Physician-to-Physician
  Applies to original IDs: 1970.

<a id="M17-CAP-ENCOUNTER-b30b52308e6f5aba"></a>
- **M17-CAP-ENCOUNTER-b30b52308e6f5aba**: Hospital-to-Hospital
  Applies to original IDs: 1970.

<a id="M17-CAP-ENCOUNTER-8fef5ffa4498ffbc"></a>
- **M17-CAP-ENCOUNTER-8fef5ffa4498ffbc**: Maintains collaboration records.
  Applies to original IDs: 1976.

<a id="M17-CAP-ENCOUNTER-e02494ffc861d6ce"></a>
- **M17-CAP-ENCOUNTER-e02494ffc861d6ce**: Consultations
  Applies to original IDs: 1976.

<a id="M17-CAP-ENCOUNTER-957dd7642231ed09"></a>
- **M17-CAP-ENCOUNTER-957dd7642231ed09**: Meetings
  Applies to original IDs: 1976.

<a id="M17-CAP-ENCOUNTER-d47a723c7d71f80f"></a>
- **M17-CAP-ENCOUNTER-d47a723c7d71f80f**: Clinical Decisions
  Applies to original IDs: 1976.
