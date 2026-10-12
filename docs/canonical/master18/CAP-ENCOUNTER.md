# CORE-CAP-ENCOUNTER — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## precision-followup-coordination

Encounter owns proposed follow-up coordination across visits, assays and imaging. A generated plan is not a booked appointment, order, completed procedure or approved therapy review.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## ai-visit-referral-and-discharge-coordination

Encounter owns attributed care coordination, referral, multidisciplinary review and discharge-plan drafts. A consensus vote is recorded opinion, not a binding clinical truth; referral is distinct from acceptance, booking, transfer and completed encounter. Source medication and home-monitoring authority remain external.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## clinical-acquisition-and-procedure-history

Encounter owns attributed physiological-study and procedure episodes, including ECG/EEG archives, electrophysiology, pulmonary/visual function studies and operative/endoscopic documentation. Imaging stores images, Devices stores equipment configuration and clinical interpretation remains qualified. Robotic navigation/intraoperative guidance is a preserved source requirement outside autonomous execution authority; protocol and device conformance need dedicated validation.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Preserve age/development, body size and acquisition time where present, laterality/site, clinical phase, donor/recipient or mother/fetus identity, guardian/assent and adolescent confidentiality. No universal dose, threshold or protocol is inferred. Plans, actual procedures, device operation, clinical diagnoses and model suggestions stay separately attributable. Preserve raw acquisition and interpreted report separately, procedure time, performer, consent and correction lineage; archive presence never attests a completed or safe intervention.

## Source scope

- Original 1532 / precision-followup-coordination: AI Personalized Monitoring Scheduler — Schedules individualized monitoring.
- Original 1535 / precision-followup-coordination: AI Personalized Follow-up Generator — Generates personalized follow-up plans.
- Original 1671 / precision-followup-coordination: AI Precision Follow-Up Engine — Manages personalized follow-up plans.
- Original 1170 / ai-visit-referral-and-discharge-coordination: AI Follow-up Planner — Schedules personalized follow-up.
- Original 1342 / ai-visit-referral-and-discharge-coordination: AI Healthcare Network Intelligence — Coordinates multiple hospitals.
- Original 1378 / ai-visit-referral-and-discharge-coordination: AI Physician Consensus Builder — Aggregates physician opinions.
- Original 1404 / ai-visit-referral-and-discharge-coordination: AI International Referral Network — Manages global referrals.
- Original 1755 / ai-visit-referral-and-discharge-coordination: AI Discharge Planning Engine — Coordinates patient discharge.
- Original 1885 / ai-visit-referral-and-discharge-coordination: AI International Referral Engine — Optimizes international patient referrals.
- Original 1963 / ai-visit-referral-and-discharge-coordination: AI Multidisciplinary Team Platform — Supports multidisciplinary clinical teams.
- Original 2015 / clinical-acquisition-and-procedure-history: ECG Archive Module — Stores electrocardiography records.
- Original 2016 / clinical-acquisition-and-procedure-history: Holter ECG Monitoring Module — Supports Holter monitoring.
- Original 2031 / clinical-acquisition-and-procedure-history: Electrophysiology Study Module — Supports cardiac electrophysiology studies.
- Original 2075 / clinical-acquisition-and-procedure-history: EEG Registry Module — Maintains electroencephalography records.
- Original 2629 / clinical-acquisition-and-procedure-history: Robotic Neurosurgery Module — Supports robotic-assisted neurosurgery.
- Original 2641 / clinical-acquisition-and-procedure-history: Endourology Module — Supports minimally invasive urology.
- Original 2870 / clinical-acquisition-and-procedure-history: Pulmonary Function Laboratory — Maintains pulmonary function studies.
- Original 2910 / clinical-acquisition-and-procedure-history: Visual Function Laboratory — Maintains ophthalmic functional studies.
- Original 2951 / clinical-acquisition-and-procedure-history: Urologic Endoscopy Module — Supports endoscopic urology.
- Original 2970 / clinical-acquisition-and-procedure-history: Gynecologic Endoscopy Module — Supports minimally invasive gynecologic procedures.
- Original 2987 / clinical-acquisition-and-procedure-history: Cesarean Section Module — Supports cesarean section management.
- Original 3830 / clinical-acquisition-and-procedure-history: Pediatric Endoscopy Module — Supports pediatric GI endoscopy.

## Requirements and source metadata

<a id="M18-CAP-ENCOUNTER-a0584927965b912e"></a>
- **M18-CAP-ENCOUNTER-a0584927965b912e**: Schedules individualized monitoring.
  Applies to original IDs: 1532.

<a id="M18-CAP-ENCOUNTER-4fbeeb87456accf5"></a>
- **M18-CAP-ENCOUNTER-4fbeeb87456accf5**: Supports
  Applies to original IDs: 1532, 1535, 1671, 1170, 1342, 1378, 1404, 1755, 1885, 1963, 2015, 2016, 2031, 2075, 2629, 2641, 2870, 2910, 2951, 2970, 2987, 3830.

<a id="M18-CAP-ENCOUNTER-fcbda7f8abde9d4a"></a>
- **M18-CAP-ENCOUNTER-fcbda7f8abde9d4a**: Laboratory Follow-up
  Applies to original IDs: 1532.

<a id="M18-CAP-ENCOUNTER-6689882d187ac23b"></a>
- **M18-CAP-ENCOUNTER-6689882d187ac23b**: Imaging Follow-up
  Applies to original IDs: 1532.

<a id="M18-CAP-ENCOUNTER-e8a8ddbe2273329e"></a>
- **M18-CAP-ENCOUNTER-e8a8ddbe2273329e**: Specialist Visits
  Applies to original IDs: 1532.

<a id="M18-CAP-ENCOUNTER-5ba74d8fcc7b20cc"></a>
- **M18-CAP-ENCOUNTER-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 1532, 1535, 1671, 1170, 1342, 1378, 1404, 1755, 1885, 1963, 2015, 2016, 2031, 2075, 2629, 2641, 2870, 2910, 2951, 2970, 2987, 3830.

<a id="M18-CAP-ENCOUNTER-d5232cbd3a326267"></a>
- **M18-CAP-ENCOUNTER-d5232cbd3a326267**: Documentation
  Applies to original IDs: 1532, 1535, 1671, 1170, 1342, 1378, 1404, 1755, 1885, 1963, 2015, 2016, 2031, 2075, 2629, 2641, 2870, 2910, 2951, 2970, 2987, 3830.

<a id="M18-CAP-ENCOUNTER-6f33acf3afb37064"></a>
- **M18-CAP-ENCOUNTER-6f33acf3afb37064**: ---
  Applies to original IDs: 1532, 1535, 1671, 1170, 1342, 1378, 1404, 1755, 1885, 1963, 2015, 2016, 2031, 2075, 2629, 2641, 2870, 2910, 2951, 2970, 2987, 3830.

<a id="M18-CAP-ENCOUNTER-a48e9d2b20720134"></a>
- **M18-CAP-ENCOUNTER-a48e9d2b20720134**: Generates personalized follow-up plans.
  Applies to original IDs: 1535.

<a id="M18-CAP-ENCOUNTER-340a341e1f3a6589"></a>
- **M18-CAP-ENCOUNTER-340a341e1f3a6589**: Appointment Planning
  Applies to original IDs: 1535.

<a id="M18-CAP-ENCOUNTER-660413fdaa414f30"></a>
- **M18-CAP-ENCOUNTER-660413fdaa414f30**: Laboratory Planning
  Applies to original IDs: 1535.

<a id="M18-CAP-ENCOUNTER-fd12825eb879d292"></a>
- **M18-CAP-ENCOUNTER-fd12825eb879d292**: Therapy Review
  Applies to original IDs: 1535.

<a id="M18-CAP-ENCOUNTER-93b493515f1d6af4"></a>
- **M18-CAP-ENCOUNTER-93b493515f1d6af4**: Manages personalized follow-up plans.
  Applies to original IDs: 1671.

<a id="M18-CAP-ENCOUNTER-2905461e0140087e"></a>
- **M18-CAP-ENCOUNTER-2905461e0140087e**: Visits
  Applies to original IDs: 1671.

<a id="M18-CAP-ENCOUNTER-e2b1e6331d9b8c99"></a>
- **M18-CAP-ENCOUNTER-e2b1e6331d9b8c99**: Laboratory Tests
  Applies to original IDs: 1671, 1170.

<a id="M18-CAP-ENCOUNTER-a3241cf77d991407"></a>
- **M18-CAP-ENCOUNTER-a3241cf77d991407**: Imaging
  Applies to original IDs: 1671, 1170.

<a id="M18-CAP-ENCOUNTER-0e0b96b0c8c3a9a9"></a>
- **M18-CAP-ENCOUNTER-0e0b96b0c8c3a9a9**: Alerts
  Applies to original IDs: 1671.

<a id="M18-CAP-ENCOUNTER-623650a17c06c5a4"></a>
- **M18-CAP-ENCOUNTER-623650a17c06c5a4**: Schedules personalized follow-up.
  Applies to original IDs: 1170.

<a id="M18-CAP-ENCOUNTER-e02494ffc861d6ce"></a>
- **M18-CAP-ENCOUNTER-e02494ffc861d6ce**: Consultations
  Applies to original IDs: 1170.

<a id="M18-CAP-ENCOUNTER-6c2f4d895f25a6d5"></a>
- **M18-CAP-ENCOUNTER-6c2f4d895f25a6d5**: Notifications
  Applies to original IDs: 1170.

<a id="M18-CAP-ENCOUNTER-76da3a795c2b0d3f"></a>
- **M18-CAP-ENCOUNTER-76da3a795c2b0d3f**: Coordinates multiple hospitals.
  Applies to original IDs: 1342.

<a id="M18-CAP-ENCOUNTER-8f522534c15d6fe0"></a>
- **M18-CAP-ENCOUNTER-8f522534c15d6fe0**: Referral Network
  Applies to original IDs: 1342.

<a id="M18-CAP-ENCOUNTER-83749907f2c75975"></a>
- **M18-CAP-ENCOUNTER-83749907f2c75975**: Patient Transfers
  Applies to original IDs: 1342.

<a id="M18-CAP-ENCOUNTER-cb4e86fce50a90a3"></a>
- **M18-CAP-ENCOUNTER-cb4e86fce50a90a3**: Bed Availability
  Applies to original IDs: 1342.

<a id="M18-CAP-ENCOUNTER-90e396e8fddd9ed8"></a>
- **M18-CAP-ENCOUNTER-90e396e8fddd9ed8**: Regional Coordination
  Applies to original IDs: 1342.

<a id="M18-CAP-ENCOUNTER-f8441b4908d429c2"></a>
- **M18-CAP-ENCOUNTER-f8441b4908d429c2**: Aggregates physician opinions.
  Applies to original IDs: 1378.

<a id="M18-CAP-ENCOUNTER-72116841f730fb54"></a>
- **M18-CAP-ENCOUNTER-72116841f730fb54**: Multi-Doctor Review
  Applies to original IDs: 1378.

<a id="M18-CAP-ENCOUNTER-ed03ce40a41f9986"></a>
- **M18-CAP-ENCOUNTER-ed03ce40a41f9986**: Voting
  Applies to original IDs: 1378.

<a id="M18-CAP-ENCOUNTER-e958c34d0af4dd48"></a>
- **M18-CAP-ENCOUNTER-e958c34d0af4dd48**: Consensus Report
  Applies to original IDs: 1378.

<a id="M18-CAP-ENCOUNTER-b9750a569d06c664"></a>
- **M18-CAP-ENCOUNTER-b9750a569d06c664**: Manages global referrals.
  Applies to original IDs: 1404.

<a id="M18-CAP-ENCOUNTER-a8b33447b5ad8dc2"></a>
- **M18-CAP-ENCOUNTER-a8b33447b5ad8dc2**: Specialists
  Applies to original IDs: 1404.

<a id="M18-CAP-ENCOUNTER-b6e8bd9e5e799cd8"></a>
- **M18-CAP-ENCOUNTER-b6e8bd9e5e799cd8**: Hospitals
  Applies to original IDs: 1404.

<a id="M18-CAP-ENCOUNTER-f7142a8bb86fd8b2"></a>
- **M18-CAP-ENCOUNTER-f7142a8bb86fd8b2**: Clinics
  Applies to original IDs: 1404.

<a id="M18-CAP-ENCOUNTER-338cd6a1ad180ca5"></a>
- **M18-CAP-ENCOUNTER-338cd6a1ad180ca5**: Telemedicine
  Applies to original IDs: 1404.

<a id="M18-CAP-ENCOUNTER-1ba536180bcd0d11"></a>
- **M18-CAP-ENCOUNTER-1ba536180bcd0d11**: Coordinates patient discharge.
  Applies to original IDs: 1755.

<a id="M18-CAP-ENCOUNTER-9eb7dbd81b25f996"></a>
- **M18-CAP-ENCOUNTER-9eb7dbd81b25f996**: Medication Plan
  Applies to original IDs: 1755.

<a id="M18-CAP-ENCOUNTER-e9426dd272d9aa70"></a>
- **M18-CAP-ENCOUNTER-e9426dd272d9aa70**: Rehabilitation
  Applies to original IDs: 1755.

<a id="M18-CAP-ENCOUNTER-92f29abe32a206af"></a>
- **M18-CAP-ENCOUNTER-92f29abe32a206af**: Home Monitoring
  Applies to original IDs: 1755.

<a id="M18-CAP-ENCOUNTER-07020d005229d88f"></a>
- **M18-CAP-ENCOUNTER-07020d005229d88f**: Optimizes international patient referrals.
  Applies to original IDs: 1885.

<a id="M18-CAP-ENCOUNTER-962840eae0709ceb"></a>
- **M18-CAP-ENCOUNTER-962840eae0709ceb**: Specialist Referral
  Applies to original IDs: 1885.

<a id="M18-CAP-ENCOUNTER-a237fee41ece4601"></a>
- **M18-CAP-ENCOUNTER-a237fee41ece4601**: Hospital Transfer
  Applies to original IDs: 1885.

<a id="M18-CAP-ENCOUNTER-42684b5eee98ac33"></a>
- **M18-CAP-ENCOUNTER-42684b5eee98ac33**: Medical Tourism
  Applies to original IDs: 1885.

<a id="M18-CAP-ENCOUNTER-3e13096e7b2f46ce"></a>
- **M18-CAP-ENCOUNTER-3e13096e7b2f46ce**: Supports multidisciplinary clinical teams.
  Applies to original IDs: 1963.

<a id="M18-CAP-ENCOUNTER-c9e19674c1f00ab9"></a>
- **M18-CAP-ENCOUNTER-c9e19674c1f00ab9**: Tumor Boards
  Applies to original IDs: 1963.

<a id="M18-CAP-ENCOUNTER-58ff14f12d093627"></a>
- **M18-CAP-ENCOUNTER-58ff14f12d093627**: Cardiology Teams
  Applies to original IDs: 1963.

<a id="M18-CAP-ENCOUNTER-b18d6990935eb7f7"></a>
- **M18-CAP-ENCOUNTER-b18d6990935eb7f7**: Complex Case Management
  Applies to original IDs: 1963.

<a id="M18-CAP-ENCOUNTER-cdc761445410a951"></a>
- **M18-CAP-ENCOUNTER-cdc761445410a951**: Stores electrocardiography records.
  Applies to original IDs: 2015.

<a id="M18-CAP-ENCOUNTER-c7103cdabe65db8d"></a>
- **M18-CAP-ENCOUNTER-c7103cdabe65db8d**: ECG History
  Applies to original IDs: 2015.

<a id="M18-CAP-ENCOUNTER-d46b6ca6f554a9cc"></a>
- **M18-CAP-ENCOUNTER-d46b6ca6f554a9cc**: AI Analysis
  Applies to original IDs: 2015.

<a id="M18-CAP-ENCOUNTER-b758f5746186879a"></a>
- **M18-CAP-ENCOUNTER-b758f5746186879a**: Trend Comparison
  Applies to original IDs: 2015.

<a id="M18-CAP-ENCOUNTER-b4a77f72854b1387"></a>
- **M18-CAP-ENCOUNTER-b4a77f72854b1387**: Supports Holter monitoring.
  Applies to original IDs: 2016.

<a id="M18-CAP-ENCOUNTER-bc1ec69a3597a652"></a>
- **M18-CAP-ENCOUNTER-bc1ec69a3597a652**: 24-hour ECG
  Applies to original IDs: 2016.

<a id="M18-CAP-ENCOUNTER-5e414a254286e2c7"></a>
- **M18-CAP-ENCOUNTER-5e414a254286e2c7**: Rhythm Analysis
  Applies to original IDs: 2016.

<a id="M18-CAP-ENCOUNTER-2632bf30483a0060"></a>
- **M18-CAP-ENCOUNTER-2632bf30483a0060**: Episode Detection
  Applies to original IDs: 2016.

<a id="M18-CAP-ENCOUNTER-fcb153f834754942"></a>
- **M18-CAP-ENCOUNTER-fcb153f834754942**: Supports cardiac electrophysiology studies.
  Applies to original IDs: 2031.

<a id="M18-CAP-ENCOUNTER-c05a76214be02b25"></a>
- **M18-CAP-ENCOUNTER-c05a76214be02b25**: EPS Procedures
  Applies to original IDs: 2031.

<a id="M18-CAP-ENCOUNTER-a987c7770986ff76"></a>
- **M18-CAP-ENCOUNTER-a987c7770986ff76**: Electrical Mapping
  Applies to original IDs: 2031.

<a id="M18-CAP-ENCOUNTER-34dba001c59e35fe"></a>
- **M18-CAP-ENCOUNTER-34dba001c59e35fe**: Arrhythmia Localization
  Applies to original IDs: 2031.

<a id="M18-CAP-ENCOUNTER-7461579c1a6fb57d"></a>
- **M18-CAP-ENCOUNTER-7461579c1a6fb57d**: Maintains electroencephalography records.
  Applies to original IDs: 2075.

<a id="M18-CAP-ENCOUNTER-9edfb45cf4b22bdf"></a>
- **M18-CAP-ENCOUNTER-9edfb45cf4b22bdf**: EEG History
  Applies to original IDs: 2075.

<a id="M18-CAP-ENCOUNTER-abea5217bc84c61d"></a>
- **M18-CAP-ENCOUNTER-abea5217bc84c61d**: AI Interpretation
  Applies to original IDs: 2075.

<a id="M18-CAP-ENCOUNTER-bfc08617f1b0bbd7"></a>
- **M18-CAP-ENCOUNTER-bfc08617f1b0bbd7**: Trend Analysis
  Applies to original IDs: 2075.

<a id="M18-CAP-ENCOUNTER-35f4066c702d5c52"></a>
- **M18-CAP-ENCOUNTER-35f4066c702d5c52**: Supports robotic-assisted neurosurgery.
  Applies to original IDs: 2629.

<a id="M18-CAP-ENCOUNTER-f0ce5a9b04c39580"></a>
- **M18-CAP-ENCOUNTER-f0ce5a9b04c39580**: Robotic Navigation
  Applies to original IDs: 2629.

<a id="M18-CAP-ENCOUNTER-51b1bcf08a6822e3"></a>
- **M18-CAP-ENCOUNTER-51b1bcf08a6822e3**: High-Precision Procedures
  Applies to original IDs: 2629.

<a id="M18-CAP-ENCOUNTER-3f71ea2b47e9d140"></a>
- **M18-CAP-ENCOUNTER-3f71ea2b47e9d140**: Intraoperative Guidance
  Applies to original IDs: 2629.

<a id="M18-CAP-ENCOUNTER-8e665aa3e996e5bd"></a>
- **M18-CAP-ENCOUNTER-8e665aa3e996e5bd**: Outcome Analysis
  Applies to original IDs: 2629.

<a id="M18-CAP-ENCOUNTER-eb99f218179c860a"></a>
- **M18-CAP-ENCOUNTER-eb99f218179c860a**: Supports minimally invasive urology.
  Applies to original IDs: 2641.

<a id="M18-CAP-ENCOUNTER-8b7739937374b976"></a>
- **M18-CAP-ENCOUNTER-8b7739937374b976**: Ureteroscopy
  Applies to original IDs: 2641, 2951.

<a id="M18-CAP-ENCOUNTER-02121bb0a2d7aad7"></a>
- **M18-CAP-ENCOUNTER-02121bb0a2d7aad7**: PCNL
  Applies to original IDs: 2641.

<a id="M18-CAP-ENCOUNTER-f4be7f43dc9170dd"></a>
- **M18-CAP-ENCOUNTER-f4be7f43dc9170dd**: Laser Lithotripsy
  Applies to original IDs: 2641.

<a id="M18-CAP-ENCOUNTER-4d912ce2ae29a6e3"></a>
- **M18-CAP-ENCOUNTER-4d912ce2ae29a6e3**: Flexible Endoscopy
  Applies to original IDs: 2641, 2951.

<a id="M18-CAP-ENCOUNTER-dba3ab9481e6e4d5"></a>
- **M18-CAP-ENCOUNTER-dba3ab9481e6e4d5**: Maintains pulmonary function studies.
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-cc4765f416969a81"></a>
- **M18-CAP-ENCOUNTER-cc4765f416969a81**: Spirometry
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-f36c0bad7a3485ba"></a>
- **M18-CAP-ENCOUNTER-f36c0bad7a3485ba**: DLCO
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-f9d6c78cb59294bd"></a>
- **M18-CAP-ENCOUNTER-f9d6c78cb59294bd**: Lung Volumes
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-c83d993a59e2afb6"></a>
- **M18-CAP-ENCOUNTER-c83d993a59e2afb6**: Bronchodilator Tests
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-4494d523df4215d5"></a>
- **M18-CAP-ENCOUNTER-4494d523df4215d5**: Exercise Testing
  Applies to original IDs: 2870.

<a id="M18-CAP-ENCOUNTER-279c61e2371f0224"></a>
- **M18-CAP-ENCOUNTER-279c61e2371f0224**: Maintains ophthalmic functional studies.
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-fcfb95b9307c19a1"></a>
- **M18-CAP-ENCOUNTER-fcfb95b9307c19a1**: Visual Acuity
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-f5de536f5c8b21e7"></a>
- **M18-CAP-ENCOUNTER-f5de536f5c8b21e7**: Contrast Sensitivity
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-ed5c086b04924f55"></a>
- **M18-CAP-ENCOUNTER-ed5c086b04924f55**: Color Vision
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-990335ee13ecf977"></a>
- **M18-CAP-ENCOUNTER-990335ee13ecf977**: Visual Fields
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-9d06949dce68dd97"></a>
- **M18-CAP-ENCOUNTER-9d06949dce68dd97**: Electroretinography
  Applies to original IDs: 2910.

<a id="M18-CAP-ENCOUNTER-64daa0177454383a"></a>
- **M18-CAP-ENCOUNTER-64daa0177454383a**: Supports endoscopic urology.
  Applies to original IDs: 2951.

<a id="M18-CAP-ENCOUNTER-899482958d42b9bc"></a>
- **M18-CAP-ENCOUNTER-899482958d42b9bc**: Cystoscopy
  Applies to original IDs: 2951.

<a id="M18-CAP-ENCOUNTER-9c307929abdb9711"></a>
- **M18-CAP-ENCOUNTER-9c307929abdb9711**: Endoscopic Procedures
  Applies to original IDs: 2951, 3830.

<a id="M18-CAP-ENCOUNTER-b82ff71ca42f6801"></a>
- **M18-CAP-ENCOUNTER-b82ff71ca42f6801**: Digital Documentation
  Applies to original IDs: 2951.

<a id="M18-CAP-ENCOUNTER-364f1b8150b16d32"></a>
- **M18-CAP-ENCOUNTER-364f1b8150b16d32**: Supports minimally invasive gynecologic procedures.
  Applies to original IDs: 2970.

<a id="M18-CAP-ENCOUNTER-2f9c59109c6f5ff6"></a>
- **M18-CAP-ENCOUNTER-2f9c59109c6f5ff6**: Hysteroscopy
  Applies to original IDs: 2970.

<a id="M18-CAP-ENCOUNTER-df1f080d21dfafc2"></a>
- **M18-CAP-ENCOUNTER-df1f080d21dfafc2**: Laparoscopy
  Applies to original IDs: 2970.

<a id="M18-CAP-ENCOUNTER-90eb0d23c80eb6e4"></a>
- **M18-CAP-ENCOUNTER-90eb0d23c80eb6e4**: Operative Endoscopy
  Applies to original IDs: 2970.

<a id="M18-CAP-ENCOUNTER-c076453c94961546"></a>
- **M18-CAP-ENCOUNTER-c076453c94961546**: Digital Video Archive
  Applies to original IDs: 2970.

<a id="M18-CAP-ENCOUNTER-80d2b74f8a43f55d"></a>
- **M18-CAP-ENCOUNTER-80d2b74f8a43f55d**: Supports cesarean section management.
  Applies to original IDs: 2987.

<a id="M18-CAP-ENCOUNTER-cd0a0f0f29929499"></a>
- **M18-CAP-ENCOUNTER-cd0a0f0f29929499**: Surgical Planning
  Applies to original IDs: 2987.

<a id="M18-CAP-ENCOUNTER-0bb23e7c49fa52db"></a>
- **M18-CAP-ENCOUNTER-0bb23e7c49fa52db**: Operative Documentation
  Applies to original IDs: 2987.

<a id="M18-CAP-ENCOUNTER-749f3fed37116ff9"></a>
- **M18-CAP-ENCOUNTER-749f3fed37116ff9**: Recovery Monitoring
  Applies to original IDs: 2987.

<a id="M18-CAP-ENCOUNTER-fd3dec597344102f"></a>
- **M18-CAP-ENCOUNTER-fd3dec597344102f**: Complication Prevention
  Applies to original IDs: 2987.

<a id="M18-CAP-ENCOUNTER-25366a5618d714a3"></a>
- **M18-CAP-ENCOUNTER-25366a5618d714a3**: Supports pediatric GI endoscopy.
  Applies to original IDs: 3830.

<a id="M18-CAP-ENCOUNTER-465cf176435d118d"></a>
- **M18-CAP-ENCOUNTER-465cf176435d118d**: Gastroscopy
  Applies to original IDs: 3830.

<a id="M18-CAP-ENCOUNTER-4ea607a784624620"></a>
- **M18-CAP-ENCOUNTER-4ea607a784624620**: Colonoscopy
  Applies to original IDs: 3830.

<a id="M18-CAP-ENCOUNTER-1ed929d4e8d78094"></a>
- **M18-CAP-ENCOUNTER-1ed929d4e8d78094**: Capsule Endoscopy
  Applies to original IDs: 3830.

<a id="M18-CAP-ENCOUNTER-21f01717a7a9339b"></a>
- **M18-CAP-ENCOUNTER-21f01717a7a9339b**: AI-assisted Lesion Detection
  Applies to original IDs: 3830.
