# Dynamic Organism / Treatment Impact Visualization
Revision 2026-09-14 · EXT-VISUAL · DRAFT_SPECIFICATION · CAP-TWIN · presentation of evidence and derived clinical models · roadmap RESEARCH.

## Purpose, scope and overlap
Present possible therapy effects on organs, systems, pathways, laboratory markers and known risk areas with their evidence. Existing organ models, multisystem monitoring and therapy-exposure concepts provide inputs; this extension adds a common display contract. It does not justify a new clinical truth store. See [alternatives](new_module_proposals.json). An animation is an explanation of an identified evidence/model result, not proof that a physiological effect occurred.

## Actors and workflow
An authorized clinician selects reconciled therapy and a patient-context version; the view resolves known pharmacology, patient context, evidence and approved model outputs. A patient may receive a restricted explanatory view subject to access policy and clinician-reviewed content. An educator may use an explicitly generic case. Selecting a medicine for a scenario never initiates a prescription.
Choose context → choose observed history or hypothetical scenario → resolve evidence → render overlays → inspect source/assumptions → compare timeline or scenario. Scenario mode remains visible during navigation, sharing and export.

## Display contract and data ownership
CAP-TWIN owns ViewComposition, referencing facts from CAP-DATA, images from CAP-IMAGING and derived assessments from CAP-CDS. No independent duplicate Observation is created.
Each Overlay contains organ/system/pathway key, sourceArtifactId, epistemic_status, evidence reference/version, contextSnapshotId, effective time, model/assumption references where applicable, uncertainty, staleness and anatomy provenance.
OBSERVED denotes a documented observation; MEASURED a measured quantity with unit/method; INFERRED a derived interpretation; PREDICTED a forecast; SIMULATED a hypothetical scenario. REPORTED and CLINICIAN_ASSESSED remain available when inherited from the clinical data contract. Never change status based on display styling. Epistemic status and clinical validation status are independent.

## Required interactions
Interactive body and organ/system highlighting have keyboard equivalents. A timeline synchronizes lab overlays, biomarkers, device signals, disease activity and therapy exposure while displaying missing intervals and differing time resolutions. A side panel lists affected structures, source, evidence strength as defined by that source, assumptions and exclusions. Actual values and hypothetical curves use labels, legends and patterns, not colour alone. Unknown effects display unknown, not green or zero.
Generic anatomy is labelled throughout. Patient-derived geometry references acquisition and accepted derivation; clinically irrelevant visual detail cannot imply unavailable precision. CT/MRI/PET-CT/X-ray/ultrasound/OCT links open the underlying authorized imaging workflow. A textual/table alternative carries the same information, including uncertainty.

## Interfaces, integration and failure behavior
Proposed read operations: getTreatmentImpactView and getOverlayEvidence. Scenario computation delegates to CAP-TWIN; assessment to CAP-CDS. Events ViewContextChanged and ViewInvalidated contain opaque version references. Cache keys include tenant, purpose, authorization scope, context and evidence/model releases. Recheck authorization before export; cached content is invalidated after revocation.
A missing asset switches to the accessible list. Source/model mismatch hides the affected overlay and explains the failure. Stale patient context blocks a new patient-specific scenario. Partial retrieval is visibly partial; animation timing must never imply a validated biological time course unless such a model was actually used.

## Security, clinical safety and AI boundary
The viewer cannot mutate clinical facts, medication orders or model releases. AI may summarize supported overlays with clickable evidence; unsupported explanations are omitted. Limit visible family/genomic information and external provider transfers. Export includes scenario/generic labels, creation time and source versions. Log access and export decisions without duplicating medical content.

## Acceptance and open gates
Tests must preserve all epistemic labels across view, screenshot/export and API output; generic geometry must never be labelled patient-derived. Screen-reader and keyboard paths must expose all warnings. Selecting a drug produces no medication mutation. A confidence-free result is shown as uncertainty unknown. Stale or revoked results disappear from newly authorized queries. Usability and clinician comprehension testing must establish that users distinguish observed effects from scenarios. No visual application or animation is implemented in this stage.
