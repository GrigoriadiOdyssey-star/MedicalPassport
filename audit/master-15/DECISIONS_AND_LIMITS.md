# MASTER-15 normalization decisions

Baseline: MASTER-14 / 7466e42. Review remains complete; no new REVIEWED IDs are counted. Selection uses the cached original inventory and normalized-ID overlay. Source bodies are consulted for requirement transfer and capability-boundary comparison, not a new whole-corpus review.

The completed families are laboratory/biomarker/pathology registries, imaging, Digital Twin integration, telemedicine, CDS, clinical trials, research datasets, appointments, encounter history, longitudinal specialty registries, specialty hubs and cores, and medication profiles/reference/exposure. All destinations are already-adopted owners. No new canonical owner or specification is created.

## Consolidation semantics

Each family has an explicit boundary and acceptance addition in config/master15.mjs. The canonical addenda retain one profile per family with original-module variants. Every requirement atom records applicability_source_ids and original line origins. Identical text may share an atom inside the same owner, but its source context is retained. Different wording is not deleted by a synonym heuristic. Existing specifications are extended, never replaced.

semantic_comparisons.json records KEEP/source preservation, profile integration into a shared capability, partial overlap or distinct profile, canonical owner and unresolved legacy generation. No original is marked SUPERSEDE or DUPLICATE; no destructive source closure is justified merely by matching titles. Unique-requirement counters measure distinct normalized source strings per owner, not established clinical equivalence.

## Material boundary decisions

- Laboratory records retain specimen/method/unit/reference applicability and experimental/genomic markers. Biomarker listing is not evidence of clinical validity.
- Imaging retains study/modalities/anatomy/laterality and interpreter provenance. AI interpretation remains a separately gated derived artifact.
- Telemedicine coordinates authorized remote sessions; prescription, therapy adjustment, device data and emergency authority remain separate. Remote monitoring does not establish safe triage or reliable connectivity.
- CDS retains separate intended uses including organ/embryo selection, prognosis, antimicrobial and ventilation recommendations. None is approved for autonomous execution.
- Twin projections retain scenario/input/model versions and distinguish simulation from observations. Organ and pediatric contexts cannot be generalized into one validated predictive model.
- Trial and AI-ready dataset profiles preserve cohorts, protocol purpose and lineage; discovery/matching does not establish eligibility, recruitment consent or safe secondary use.
- Specialty registries, hubs and cores are scoped compositions of shared capabilities. Their source MVP/foundation labels do not expand the approved minimal vertical slice.
- Medication profiles preserve class/product, packaging, batch, reported exposure, suspected events and population context. Historic pregnancy categories, generic equivalence claims, adherence estimates and renewal reminders do not authorize treatment or dispensing.

## Dependencies, MVP and readiness

The added dependency graph removes self and duplicate edges and checks registered targets. Edges describe data/service contracts, not startup order. Source dependency requirements remain in provenance even where exact runtime bindings are outstanding. No claim is made that the entire inherited architecture graph is now implementation-complete.

MVP owner tags and the existing minimal allergy-record slice are preserved. Previously resolved canonical-document blockers are recorded without removing the remaining detailed owner requirements. New clinical/Twin/research profiles are excluded from automatic MVP inclusion.

Readiness preparation adds profile-specific acceptance and contract evidence requirements under existing owner specifications. Existing purpose, permissions, clinical safety and privacy sections are inherited. Concrete provider schemas, security/privacy evidence, qualified clinical acceptance and end-to-end operational evidence remain outstanding. IMPLEMENTATION_READY is unchanged at zero.

The prior deep-review queue is retained. The delta records only that documentation ownership is resolved for the affected existing queue items; no clinical or runtime queue item is silently closed.

## Validation and continuation

Every family receives migration/state checks; full runs are retained at the 20%, 25%, 30% milestones and final checkpoint. One temporary quoting error in checkpoint prose caused a parser failure before any batch was written; it was corrected and the targeted/full checks rerun. The only excluded historical test remains the documented MASTER09 additive-file guard replacement inherited from MASTER12.

The next exact family is pharmacy catalog/directory/availability. Its source IDs are in normalization_queue.json. This requires a focused boundary decision and the existing registered pharmacy owner's canonical specification; the current family rules do not silently force those records into medication, identity or CDS.
