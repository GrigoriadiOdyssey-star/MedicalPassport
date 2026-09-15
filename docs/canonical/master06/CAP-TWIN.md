# CORE-CAP-TWIN — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: TwinSnapshot, ModelInstance, ScenarioRun, ViewComposition. Dependencies: CAP-TWIN, CAP-DATA, CAP-CONSENT, CAP-AUDIT, CAP-AI, CAP-IMAGING, CAP-DEVICES, CAP-CDS.

Freeze source snapshot → select approved level/profile/model → generate typed state/scenario/view → expose uncertainty → clinician review → invalidate on source/release change. Operational twins are not patient physiology.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-CARD-TWIN

Original IDs: 3073, 3675, 4076.

Retain development, function, anatomy, hemodynamics, progression and surgical scenario models with explicit epistemic status.

Freeze source snapshot → select approved level/profile/model → generate typed state/scenario/view → expose uncertainty → clinician review → invalidate on source/release change. Operational twins are not patient physiology.

### M04-STRATEGIC-TWIN

Original IDs: 3073, 3675, 4076.

Cardiac patient models retain anatomy/function/hemodynamics/development and surgical scenarios. Operational hospital/physician models are excluded from patient physiology and remain separate pending operational-owner review.

Freeze source snapshot → select approved level/profile/model → generate typed state/scenario/view → expose uncertainty → clinician review → invalidate on source/release change. Operational twins are not patient physiology.

### M06-NEONATAL-TWIN

Original IDs: 3035, 3273.

Organ development/growth models, therapy/NICU scenarios and long-term forecasts share twin infrastructure but remain separately typed hypothetical outputs, never measured development or clinical fact.

Freeze source snapshot → select approved level/profile/model → generate typed state/scenario/view → expose uncertainty → clinician review → invalidate on source/release change. Operational twins are not patient physiology.

## Integrated extension decisions

- EXT-TWIN: INTEGRATED at documentation scope. Patient-state/scenario profiles share versioned twin infrastructure. Hospital operations and physician workload models do not become patient physiological models.
- EXT-VISUAL: INTEGRATED at documentation scope. Evidence-linked anatomical and joint overlays are a view profile of the twin with source clinical ownership. No independent truth store or additional canonical owner is justified.

## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-TWIN-b77ba7994e3e0b1a"></a>
- **M06-CAP-TWIN-b77ba7994e3e0b1a**: Integrates neonatology with Digital Twin.
  Origin: original 3035, original 3273

<a id="M06-CAP-TWIN-24d0443a009a4eb6"></a>
- **M06-CAP-TWIN-24d0443a009a4eb6**: Organ Development Simulation
  Origin: original 3035, original 3273

<a id="M06-CAP-TWIN-a717667723ec563c"></a>
- **M06-CAP-TWIN-a717667723ec563c**: Growth Modeling
  Origin: original 3035, original 3273

<a id="M06-CAP-TWIN-c859f6d0064a3254"></a>
- **M06-CAP-TWIN-c859f6d0064a3254**: Therapy Response Prediction
  Origin: original 3035

<a id="M06-CAP-TWIN-5ac8b5774d2b3c7b"></a>
- **M06-CAP-TWIN-5ac8b5774d2b3c7b**: Long-term Development Forecasting
  Origin: original 3035

<a id="M06-CAP-TWIN-6e80dbb3112fe425"></a>
- **M06-CAP-TWIN-6e80dbb3112fe425**: Integrates pediatric cardiology with Digital Twin.
  Origin: original 3073, original 4076

<a id="M06-CAP-TWIN-960ff3a3091f568d"></a>
- **M06-CAP-TWIN-960ff3a3091f568d**: Heart Development Simulation
  Origin: original 3073

<a id="M06-CAP-TWIN-3156afb3fab1295a"></a>
- **M06-CAP-TWIN-3156afb3fab1295a**: Hemodynamic Modeling
  Origin: original 3073, original 3675

<a id="M06-CAP-TWIN-7b25fc96a9f3ec93"></a>
- **M06-CAP-TWIN-7b25fc96a9f3ec93**: Surgical Outcome Prediction
  Origin: original 3073, original 3675

<a id="M06-CAP-TWIN-b9d33c08ec5a340f"></a>
- **M06-CAP-TWIN-b9d33c08ec5a340f**: Long-term Cardiac Modeling
  Origin: original 3073

<a id="M06-CAP-TWIN-0561a9353cf3004f"></a>
- **M06-CAP-TWIN-0561a9353cf3004f**: NICU Therapy Prediction
  Origin: original 3273

<a id="M06-CAP-TWIN-da7d9faef8bcef7d"></a>
- **M06-CAP-TWIN-da7d9faef8bcef7d**: Long-term Outcome Forecasting
  Origin: original 3273

<a id="M06-CAP-TWIN-81a7536e48a9721f"></a>
- **M06-CAP-TWIN-81a7536e48a9721f**: Integrates cardiology with Digital Twin.
  Origin: original 3675

<a id="M06-CAP-TWIN-0e7f0366d0953b48"></a>
- **M06-CAP-TWIN-0e7f0366d0953b48**: Heart Function Simulation
  Origin: original 3675

<a id="M06-CAP-TWIN-bdfb5cb4b559f914"></a>
- **M06-CAP-TWIN-bdfb5cb4b559f914**: Disease Progression
  Origin: original 3675, original 4076

<a id="M06-CAP-TWIN-700613352a0ee252"></a>
- **M06-CAP-TWIN-700613352a0ee252**: Models
  Origin: original 4076

<a id="M06-CAP-TWIN-54ba5644c29b182c"></a>
- **M06-CAP-TWIN-54ba5644c29b182c**: Cardiac Anatomy
  Origin: original 4076

<a id="M06-CAP-TWIN-6a5b48b4f2de5708"></a>
- **M06-CAP-TWIN-6a5b48b4f2de5708**: Hemodynamics
  Origin: original 4076

<a id="M06-CAP-TWIN-ad7848b8f593a316"></a>
- **M06-CAP-TWIN-ad7848b8f593a316**: Ventricular Function
  Origin: original 4076

<a id="M06-CAP-TWIN-f9556d65876d7d40"></a>
- **M06-CAP-TWIN-f9556d65876d7d40**: Treatment Scenarios
  Origin: original 4076

<a id="M06-CAP-TWIN-3dc55d9a7574fc58"></a>
- **M06-CAP-TWIN-3dc55d9a7574fc58**: Surgical Outcomes
  Origin: original 4076

<a id="M06-CAP-TWIN-29565f846ba01ab4"></a>
- **M06-CAP-TWIN-29565f846ba01ab4**: Longitudinal Cardiac Trajectories
  Origin: original 4076

<a id="M06-CAP-TWIN-a5336c79f17ae4e7"></a>
- **M06-CAP-TWIN-a5336c79f17ae4e7**: Supports simulation for clinical decision support and research.
  Origin: original 4076

<a id="M06-CAP-TWIN-1bd8fdfaab53cfbc"></a>
- **M06-CAP-TWIN-1bd8fdfaab53cfbc**: # Seven-level Digital Twin
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-9fa8676613fef903"></a>
- **M06-CAP-TWIN-9fa8676613fef903**: Revision 2026-09-14 · EXT-TWIN · DRAFT_SPECIFICATION · CAP-TWIN · shared clinical model / patient state · roadmap RESEARCH.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-cc4aaa7156341245"></a>
- **M06-CAP-TWIN-cc4aaa7156341245**: ## Purpose and retained intent
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-d4912dd7fc5e8497"></a>
- **M06-CAP-TWIN-d4912dd7fc5e8497**: Organize patient representation, visualization and model outputs in one versioned system. Hundreds of specialty titles mention twins; these become candidate profiles, not separate infrastructure. Sources 1224 and 1876 describe hospital/resource operations and remain operational models. A workflow model of a physician (1225) is also separate from patient physiology. Search alternatives and preservation decisions are in [dossier](../../../audit/gapfill/new_module_proposals.json) and [semantic diffs](../../../audit/gapfill/semantic_diffs.json).
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-8a1a653d9e848734"></a>
- **M06-CAP-TWIN-8a1a653d9e848734**: ## Levels, inputs and outputs
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-02025190f1e5fd74"></a>
- **M06-CAP-TWIN-02025190f1e5fd74**: | Level | Input | Output and release gate |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-c422bb1b032c6973"></a>
- **M06-CAP-TWIN-c422bb1b032c6973**: |---|---|---|
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-b76d1bfd459f7fb4"></a>
- **M06-CAP-TWIN-b76d1bfd459f7fb4**: | 1 Digital Patient Representation | authorized clinical records and provenance | chronological representation with conflicting/missing facts retained |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-35ab989fa6c4281c"></a>
- **M06-CAP-TWIN-35ab989fa6c4281c**: | 2 Anatomical / Organ System Visualization | generic atlas or validated imaging-derived geometry | labelled body/organ view; provenance required for patient-derived claims |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-c019923be4ab7584"></a>
- **M06-CAP-TWIN-c019923be4ab7584**: | 3 Patient-specific physiological state | timed labs, device signals, clinical observations | measured state plus separately typed inferred estimates; calibration/time alignment gate |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-05a06555fd006a97"></a>
- **M06-CAP-TWIN-05a06555fd006a97**: | 4 Disease-state models | diagnoses, clinical assessments, longitudinal evidence | disease-specific model instance with validated intended use and uncertainty |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-508cfd51d0df17d6"></a>
- **M06-CAP-TWIN-508cfd51d0df17d6**: | 5 Treatment-response models | reconciled therapy exposures and outcomes | prediction with explicit horizon, context and applicability |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-fb43aa2cda5912d3"></a>
- **M06-CAP-TWIN-fb43aa2cda5912d3**: | 6 Scenario simulation | frozen state and user-selected hypothetical intervention | simulated trajectories, assumptions and alternatives; no clinical fact writes |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-5d0b5a86a9ca1c28"></a>
- **M06-CAP-TWIN-5d0b5a86a9ca1c28**: | 7 Longitudinal patient-specific model | successive approved snapshots and model releases | versioned history, drift/invalidation, comparison and replay |
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-76666d852722ca76"></a>
- **M06-CAP-TWIN-76666d852722ca76**: A level is enabled only after its own data and validation gates. Passing level 1 does not imply availability of levels 3–7. Missing later levels are displayed as unavailable. An individual parameter fit is a versioned model change with validation, not permission for autonomous learning.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-b84c20cb388c29ab"></a>
- **M06-CAP-TWIN-b84c20cb388c29ab**: ## Actors, ownership and model lifecycle
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-66bb098e5acbd296"></a>
- **M06-CAP-TWIN-66bb098e5acbd296**: Patients can view authorized summaries and mark reported context; clinicians interpret clinical views; imaging specialists validate derived anatomy; model stewards validate model releases. Guardian/delegation access follows age, scope and transition rules. Clinical data owners retain facts; CAP-TWIN owns TwinSnapshot, ModelInstance, ScenarioRun and derived anatomy references. Shared stores retain imaging, medication and device records.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-9558e7bd8d7c5be0"></a>
- **M06-CAP-TWIN-9558e7bd8d7c5be0**: Create snapshot → check required inputs → select approved profile/model → calculate → persist typed output → reviewer disposition → monitor invalidation. Snapshot includes tenant/patient, time range, consent/purpose, source IDs/versions, missingness, model release and profile. ScenarioRun includes parameters, baseline, horizon, uncertainty representation, computation version and epistemic_status SIMULATED. No synthetic value replaces an Observation.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-6d408848bd31915a"></a>
- **M06-CAP-TWIN-6d408848bd31915a**: ## Imaging and visual representation
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-aa90fdf1f15d2eb4"></a>
- **M06-CAP-TWIN-aa90fdf1f15d2eb4**: Support references to CT, MRI, PET/CT, X-ray, ultrasound, OCT and future modalities. Store study/series/instance identifiers, acquisition time, modality, geometry/coordinate frame, derivation/segmentation method and review status. FHIR ImagingStudy/DiagnosticReport/Observation/Provenance are candidate linkage resources; DICOM objects remain under imaging ownership.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-51f86f5a829a0d52"></a>
- **M06-CAP-TWIN-51f86f5a829a0d52**: Generic anatomy always displays “generic anatomy”. Patient-derived anatomy requires traceable patient imaging, registration/segmentation provenance and acceptance by the appropriate workflow; a generic atlas cannot acquire that label because the patient name is displayed. De-identify exported images, including embedded metadata, according to the authorized workflow.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-c8509f3eed53d8de"></a>
- **M06-CAP-TWIN-c8509f3eed53d8de**: Provide organ/system highlighting, clinical timeline, lab overlays, biomarker state, device signals, disease activity and therapy exposure. Spatial and temporal uncertainty, stale source data and unavailable organ models stay visible.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-e6fcbd26ea65f801"></a>
- **M06-CAP-TWIN-e6fcbd26ea65f801**: ## Interfaces and dependencies
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-3415794dbaa98eeb"></a>
- **M06-CAP-TWIN-3415794dbaa98eeb**: Proposed commands: createTwinSnapshot, evaluateModel, runScenario, invalidateDerivedOutputs, compareSnapshots. Query returns level availability and typed artifacts. Events TwinSnapshotCreated, ScenarioCompleted, DerivedOutputInvalidated carry IDs/versions only. Reject wrong patient/tenant, incompatible profile, stale input version and unsupported model with explicit error codes. Retries are idempotent; asynchronous cancellation must not publish a partial result as complete. Dependencies CAP-DATA, CAP-AI, CAP-IMAGING, CAP-DEVICES, CAP-CONSENT; connected medication and specialty profiles supply authorized references.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-fd18be13b37b6a89"></a>
- **M06-CAP-TWIN-fd18be13b37b6a89**: ## Safety, privacy, failures and observability
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-101e3a2ddf9ed18d"></a>
- **M06-CAP-TWIN-101e3a2ddf9ed18d**: AI may estimate and explain within a validated task; it neither diagnoses autonomously nor prescribes. Separate OBSERVED, MEASURED, REPORTED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED. Confidence measures mean only what the model's evaluation supports; absent confidence is unknown. Model outage offers an authorized earlier snapshot explicitly marked stale, or abstains. Cross-patient joins, device clock drift and incomplete imaging must block patient-specific inference. Logs capture model/context hashes, failures, latency and reviewer action with patient details excluded.
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-f4b816255574bbb9"></a>
- **M06-CAP-TWIN-f4b816255574bbb9**: ## Acceptance and open gates
  Origin: EXT-TWIN, EXT-VISUAL

<a id="M06-CAP-TWIN-90ef5fb0bf7e5dbf"></a>
- **M06-CAP-TWIN-90ef5fb0bf7e5dbf**: Verify all seven level states; source updates invalidate downstream outputs without deleting history; a scenario never changes facts or orders; replay uses exact recorded versions. Test generic/patient-derived labelling, imaging identifier mismatch, longitudinal comparison, consent revocation and accessible non-3D rendering. All numerical physiology, disease and response models require specialist validation and intended-use evidence. This draft establishes contracts; it supplies no validated patient simulator. See [dynamic view](../../../audit/gapfill/dynamic_organism_visualization.md) and [data architecture](../../../audit/gapfill/data_architecture.md).
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-27657fbc6ab7082f"></a>
- **M06-CAP-TWIN-27657fbc6ab7082f**: Seven separated twin levels
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-279b75367fe77c0f"></a>
- **M06-CAP-TWIN-279b75367fe77c0f**: Generic versus patient-derived anatomy
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-297e8b62239ef008"></a>
- **M06-CAP-TWIN-297e8b62239ef008**: CT/MRI/PET-CT/X-ray/ultrasound/OCT references
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-343c75486c79a74d"></a>
- **M06-CAP-TWIN-343c75486c79a74d**: Versioned physiological/disease/treatment model
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-80d72ceea8584e14"></a>
- **M06-CAP-TWIN-80d72ceea8584e14**: Scenario assumptions and uncertainty
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-7ea94c45b4214b9c"></a>
- **M06-CAP-TWIN-7ea94c45b4214b9c**: Longitudinal invalidation and replay
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-a92971ec981e561b"></a>
- **M06-CAP-TWIN-a92971ec981e561b**: No clinical fact overwrite
  Origin: EXT-TWIN

<a id="M06-CAP-TWIN-849743ff15176e4b"></a>
- **M06-CAP-TWIN-849743ff15176e4b**: # Dynamic Organism / Treatment Impact Visualization
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-6236cf40e1307709"></a>
- **M06-CAP-TWIN-6236cf40e1307709**: Revision 2026-09-14 · EXT-VISUAL · DRAFT_SPECIFICATION · CAP-TWIN · presentation of evidence and derived clinical models · roadmap RESEARCH.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-cc4c4d1a2f407dff"></a>
- **M06-CAP-TWIN-cc4c4d1a2f407dff**: ## Purpose, scope and overlap
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-6e3b8c8f0bc6bc03"></a>
- **M06-CAP-TWIN-6e3b8c8f0bc6bc03**: Present possible therapy effects on organs, systems, pathways, laboratory markers and known risk areas with their evidence. Existing organ models, multisystem monitoring and therapy-exposure concepts provide inputs; this extension adds a common display contract. It does not justify a new clinical truth store. See [alternatives](../../../audit/gapfill/new_module_proposals.json). An animation is an explanation of an identified evidence/model result, not proof that a physiological effect occurred.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-ca735fd7797d9326"></a>
- **M06-CAP-TWIN-ca735fd7797d9326**: ## Actors and workflow
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-e86c17fa76cf816a"></a>
- **M06-CAP-TWIN-e86c17fa76cf816a**: An authorized clinician selects reconciled therapy and a patient-context version; the view resolves known pharmacology, patient context, evidence and approved model outputs. A patient may receive a restricted explanatory view subject to access policy and clinician-reviewed content. An educator may use an explicitly generic case. Selecting a medicine for a scenario never initiates a prescription.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-05e7bc761263d590"></a>
- **M06-CAP-TWIN-05e7bc761263d590**: Choose context → choose observed history or hypothetical scenario → resolve evidence → render overlays → inspect source/assumptions → compare timeline or scenario. Scenario mode remains visible during navigation, sharing and export.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-74d1a201e06fe029"></a>
- **M06-CAP-TWIN-74d1a201e06fe029**: ## Display contract and data ownership
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-2844fbed2cf51f03"></a>
- **M06-CAP-TWIN-2844fbed2cf51f03**: CAP-TWIN owns ViewComposition, referencing facts from CAP-DATA, images from CAP-IMAGING and derived assessments from CAP-CDS. No independent duplicate Observation is created.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-8666de7e63bfbb39"></a>
- **M06-CAP-TWIN-8666de7e63bfbb39**: Each Overlay contains organ/system/pathway key, sourceArtifactId, epistemic_status, evidence reference/version, contextSnapshotId, effective time, model/assumption references where applicable, uncertainty, staleness and anatomy provenance.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-0f722e7b125b4968"></a>
- **M06-CAP-TWIN-0f722e7b125b4968**: OBSERVED denotes a documented observation; MEASURED a measured quantity with unit/method; INFERRED a derived interpretation; PREDICTED a forecast; SIMULATED a hypothetical scenario. REPORTED and CLINICIAN_ASSESSED remain available when inherited from the clinical data contract. Never change status based on display styling. Epistemic status and clinical validation status are independent.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-6e2534789a3e86eb"></a>
- **M06-CAP-TWIN-6e2534789a3e86eb**: ## Required interactions
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-4c5afff5a6e90344"></a>
- **M06-CAP-TWIN-4c5afff5a6e90344**: Interactive body and organ/system highlighting have keyboard equivalents. A timeline synchronizes lab overlays, biomarkers, device signals, disease activity and therapy exposure while displaying missing intervals and differing time resolutions. A side panel lists affected structures, source, evidence strength as defined by that source, assumptions and exclusions. Actual values and hypothetical curves use labels, legends and patterns, not colour alone. Unknown effects display unknown, not green or zero.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-6773e1d7920dc1b9"></a>
- **M06-CAP-TWIN-6773e1d7920dc1b9**: Generic anatomy is labelled throughout. Patient-derived geometry references acquisition and accepted derivation; clinically irrelevant visual detail cannot imply unavailable precision. CT/MRI/PET-CT/X-ray/ultrasound/OCT links open the underlying authorized imaging workflow. A textual/table alternative carries the same information, including uncertainty.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-292da50ab7b0c6b4"></a>
- **M06-CAP-TWIN-292da50ab7b0c6b4**: ## Interfaces, integration and failure behavior
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-cb5911858a31e0cf"></a>
- **M06-CAP-TWIN-cb5911858a31e0cf**: Proposed read operations: getTreatmentImpactView and getOverlayEvidence. Scenario computation delegates to CAP-TWIN; assessment to CAP-CDS. Events ViewContextChanged and ViewInvalidated contain opaque version references. Cache keys include tenant, purpose, authorization scope, context and evidence/model releases. Recheck authorization before export; cached content is invalidated after revocation.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-281ec80cf2078a38"></a>
- **M06-CAP-TWIN-281ec80cf2078a38**: A missing asset switches to the accessible list. Source/model mismatch hides the affected overlay and explains the failure. Stale patient context blocks a new patient-specific scenario. Partial retrieval is visibly partial; animation timing must never imply a validated biological time course unless such a model was actually used.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-4b1359416012cd2c"></a>
- **M06-CAP-TWIN-4b1359416012cd2c**: ## Security, clinical safety and AI boundary
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-2759a6fb50e1d67c"></a>
- **M06-CAP-TWIN-2759a6fb50e1d67c**: The viewer cannot mutate clinical facts, medication orders or model releases. AI may summarize supported overlays with clickable evidence; unsupported explanations are omitted. Limit visible family/genomic information and external provider transfers. Export includes scenario/generic labels, creation time and source versions. Log access and export decisions without duplicating medical content.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-356e508fd51c3fa7"></a>
- **M06-CAP-TWIN-356e508fd51c3fa7**: Tests must preserve all epistemic labels across view, screenshot/export and API output; generic geometry must never be labelled patient-derived. Screen-reader and keyboard paths must expose all warnings. Selecting a drug produces no medication mutation. A confidence-free result is shown as uncertainty unknown. Stale or revoked results disappear from newly authorized queries. Usability and clinician comprehension testing must establish that users distinguish observed effects from scenarios. No visual application or animation is implemented in this stage.
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-a91ecfa5d8dca18f"></a>
- **M06-CAP-TWIN-a91ecfa5d8dca18f**: Interactive body and organ/system highlighting
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-a7c97f9027f578c2"></a>
- **M06-CAP-TWIN-a7c97f9027f578c2**: Observed/measured/inferred/predicted/simulated labels
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-7db1bf6f3cd95f53"></a>
- **M06-CAP-TWIN-7db1bf6f3cd95f53**: Treatment impact/evidence/model links
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-719f178a388538b5"></a>
- **M06-CAP-TWIN-719f178a388538b5**: Temporal overlays and stale/unknown states
  Origin: EXT-VISUAL

<a id="M06-CAP-TWIN-e0db9b92930b1481"></a>
- **M06-CAP-TWIN-e0db9b92930b1481**: Accessible alternative and no false patient anatomy
  Origin: EXT-VISUAL

## Preserved source metadata

<a id="M06-CAP-TWIN-4fbeeb87456accf5"></a>
- **M06-CAP-TWIN-4fbeeb87456accf5**: Supports

<a id="M06-CAP-TWIN-5ba74d8fcc7b20cc"></a>
- **M06-CAP-TWIN-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-TWIN-d5232cbd3a326267"></a>
- **M06-CAP-TWIN-d5232cbd3a326267**: Documentation

<a id="M06-CAP-TWIN-6f33acf3afb37064"></a>
- **M06-CAP-TWIN-6f33acf3afb37064**: ---

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
