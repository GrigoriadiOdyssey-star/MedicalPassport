# MASTER-12 calibration and limits

Baseline: MASTER-11 commit 53c4fe4647f200df6c4f867acc6b044a6b728ab4; original IDs and descriptions are immutable.

Level A means automated full-description extraction and candidate classification, as authorized in FAST REVIEW ACCELERATION MODE. It does not resolve clinical correctness, semantic uniqueness or implementation readiness. Level B covers the 29 medication originals 401–430 except previously reviewed 425; their individual findings are in batch 002. Qualified clinical and regulatory approval remains open even for Level B.

Frozen batches preserve original extraction. Effective routing is in canonical_registry_delta.json and deep_review_queue.json. Closing a later deep review must not count the same ID again.

Calibration findings from full-body samples (samples remain Level A):

- Pediatric samples 3905, 4352, 4767, 4975 preserve hemoglobinopathy types, longitudinal dermatologic observations, vestibular dependencies and bilateral ophthalmic context. They require specialty and cross-owner assessment; no clinical protocol is approved.
- AI samples 1145, 1301, 1476, 1792, 2763 include clinical change detection, voice biomarkers, workflow state, frailty and contact tracing. Risk regex alone misses potential clinical influence. All Level-A CAP-AI records therefore enter the deep queue, including governance and research outputs.
- Operations samples 84, 304, 547 and 2434 separate infrastructure recovery from physiological observation. The cached word “monitoring” over-assigned CAP-OPERATIONS. Clinical entries are routed to a provisional specialty owner with data/device alternatives and explicit owner conflict; no alias or canonical promotion results. Infrastructure records stay Operations. Source 84 contains both “Zero Data Loss” and RPO ≤ 5 minutes: these need a scoped recovery decision, not an inferred guarantee.
- Clinical samples 192, 638, 3155, 4372, 4934 retain genetic significance, dialysis modalities, pediatric research purposes and prenatal/postnatal imaging context. A research registry is not consent to secondary use.
- Oncology/infection samples 474, 2773, 4968, 3515, 197, 3564 retain screening, laterality, hereditary and sensitive infection requirements. Module 197's patient-controlled access wording is an unvalidated source requirement, not a legal determination.
- Samples 521, 3083, 753, 2607, 2311, 3524, 3789 retain provider versus workflow boundaries, pediatric epilepsy, lactation, voice, obstetric, CFTR and immune context. Candidate ownership remains provisional.
- Laboratory/encounter samples 363, 2967, 2760, 2001, 2384, 984, 2231 show that shared laboratory/encounter candidates can cover broader specialty workflows. Full source bodies and owner candidates are retained for deep review rather than canonically merged.
- Short explicit purposes, such as “Detects clinical deterioration.” (1166) and “Classifies genomic variants.” (1625), were incorrectly excluded by a four-word threshold. A three-word non-heading sentence ending in a period is now accepted only with extracted source requirements and a candidate owner. Existing batch output was verified unchanged. Title-only/empty descriptions still fail. Two-word or owner-unresolved cases remain UNAUDITED, requiring manual classification.

Normalization is limited to 11 medication/notification originals with per-line provenance and two new profiles under existing owners. Every nonempty source line is mapped; source-string uniqueness counters are not proof of globally unique semantics. No additional canonical owner, gap-fill closure or implementation-ready module is claimed.

Validation compatibility: the historical MASTER-09 guard mistakes later added canonical documents for modifications. The full runner excludes that single historical test and substitutes a MASTER-12 test that forbids modification/deletion of historical files while retaining the historical cache hash, document hash and anchor assertions. The two initial failed diagnostic runs remain in the external validation logs; corrected runs must be reported separately.

Device sample 334 contains synchronization and physician-access requirements without proven integration behavior. All newly reviewed CDS, Twin, Interop, Devices, Research, Security and Consent profiles therefore require deep control/integration validation even when a clinical-risk keyword is absent. Module 2867 (Sleep Medicine) illustrates a still-provisional medication-versus-specialty owner boundary; its existing deep queue remains open.
