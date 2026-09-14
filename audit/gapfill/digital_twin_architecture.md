# Seven-level Digital Twin
Revision 2026-09-14 · EXT-TWIN · DRAFT_SPECIFICATION · CAP-TWIN · shared clinical model / patient state · roadmap RESEARCH.

## Purpose and retained intent
Organize patient representation, visualization and model outputs in one versioned system. Hundreds of specialty titles mention twins; these become candidate profiles, not separate infrastructure. Sources 1224 and 1876 describe hospital/resource operations and remain operational models. A workflow model of a physician (1225) is also separate from patient physiology. Search alternatives and preservation decisions are in [dossier](new_module_proposals.json) and [semantic diffs](semantic_diffs.json).

## Levels, inputs and outputs
| Level | Input | Output and release gate |
|---|---|---|
| 1 Digital Patient Representation | authorized clinical records and provenance | chronological representation with conflicting/missing facts retained |
| 2 Anatomical / Organ System Visualization | generic atlas or validated imaging-derived geometry | labelled body/organ view; provenance required for patient-derived claims |
| 3 Patient-specific physiological state | timed labs, device signals, clinical observations | measured state plus separately typed inferred estimates; calibration/time alignment gate |
| 4 Disease-state models | diagnoses, clinical assessments, longitudinal evidence | disease-specific model instance with validated intended use and uncertainty |
| 5 Treatment-response models | reconciled therapy exposures and outcomes | prediction with explicit horizon, context and applicability |
| 6 Scenario simulation | frozen state and user-selected hypothetical intervention | simulated trajectories, assumptions and alternatives; no clinical fact writes |
| 7 Longitudinal patient-specific model | successive approved snapshots and model releases | versioned history, drift/invalidation, comparison and replay |

A level is enabled only after its own data and validation gates. Passing level 1 does not imply availability of levels 3–7. Missing later levels are displayed as unavailable. An individual parameter fit is a versioned model change with validation, not permission for autonomous learning.

## Actors, ownership and model lifecycle
Patients can view authorized summaries and mark reported context; clinicians interpret clinical views; imaging specialists validate derived anatomy; model stewards validate model releases. Guardian/delegation access follows age, scope and transition rules. Clinical data owners retain facts; CAP-TWIN owns TwinSnapshot, ModelInstance, ScenarioRun and derived anatomy references. Shared stores retain imaging, medication and device records.
Create snapshot → check required inputs → select approved profile/model → calculate → persist typed output → reviewer disposition → monitor invalidation. Snapshot includes tenant/patient, time range, consent/purpose, source IDs/versions, missingness, model release and profile. ScenarioRun includes parameters, baseline, horizon, uncertainty representation, computation version and epistemic_status SIMULATED. No synthetic value replaces an Observation.

## Imaging and visual representation
Support references to CT, MRI, PET/CT, X-ray, ultrasound, OCT and future modalities. Store study/series/instance identifiers, acquisition time, modality, geometry/coordinate frame, derivation/segmentation method and review status. FHIR ImagingStudy/DiagnosticReport/Observation/Provenance are candidate linkage resources; DICOM objects remain under imaging ownership.
Generic anatomy always displays “generic anatomy”. Patient-derived anatomy requires traceable patient imaging, registration/segmentation provenance and acceptance by the appropriate workflow; a generic atlas cannot acquire that label because the patient name is displayed. De-identify exported images, including embedded metadata, according to the authorized workflow.
Provide organ/system highlighting, clinical timeline, lab overlays, biomarker state, device signals, disease activity and therapy exposure. Spatial and temporal uncertainty, stale source data and unavailable organ models stay visible.

## Interfaces and dependencies
Proposed commands: createTwinSnapshot, evaluateModel, runScenario, invalidateDerivedOutputs, compareSnapshots. Query returns level availability and typed artifacts. Events TwinSnapshotCreated, ScenarioCompleted, DerivedOutputInvalidated carry IDs/versions only. Reject wrong patient/tenant, incompatible profile, stale input version and unsupported model with explicit error codes. Retries are idempotent; asynchronous cancellation must not publish a partial result as complete. Dependencies CAP-DATA, CAP-AI, CAP-IMAGING, CAP-DEVICES, CAP-CONSENT; connected medication and specialty profiles supply authorized references.

## Safety, privacy, failures and observability
AI may estimate and explain within a validated task; it neither diagnoses autonomously nor prescribes. Separate OBSERVED, MEASURED, REPORTED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED. Confidence measures mean only what the model's evaluation supports; absent confidence is unknown. Model outage offers an authorized earlier snapshot explicitly marked stale, or abstains. Cross-patient joins, device clock drift and incomplete imaging must block patient-specific inference. Logs capture model/context hashes, failures, latency and reviewer action with patient details excluded.

## Acceptance and open gates
Verify all seven level states; source updates invalidate downstream outputs without deleting history; a scenario never changes facts or orders; replay uses exact recorded versions. Test generic/patient-derived labelling, imaging identifier mismatch, longitudinal comparison, consent revocation and accessible non-3D rendering. All numerical physiology, disease and response models require specialist validation and intended-use evidence. This draft establishes contracts; it supplies no validated patient simulator. See [dynamic view](dynamic_organism_visualization.md) and [data architecture](data_architecture.md).
