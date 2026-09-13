# PRF-PEDIATRIC-ENDOCRINE-HUB — Pediatric endocrinology workspace composition

Status: DRAFT_REQUIREMENT_UNION. Source IDs: 3120, 3340, 3500, 3640, 3880. Это proposed canonical profile, не новый historical ID. NORMALIZED/CANONICALIZED/IMPLEMENTATION_READY пока false.

## Purpose

Один профиль композиции детского эндокринологического workspace поверх shared capabilities, сохраняющий требования всех прочитанных вариантов hub.

## Scope

Infancy through adolescence как исходное намерение; AI/twin, genetics/nutrition, lab/imaging/radiology, telemedicine, preventive care, diabetes technology/monitoring, continuous monitoring и research как раздельно включаемые capability views.

Layer: SPECIALTY PROFILE; proposed owner: CAP-SPECIALTY; stage: PHASE_3, OUT_OF_P0.

## Non-goals

Новый самостоятельный EHR, единая база копий clinical facts, автономный AI-endocrinologist, clinical certification из названия Intelligence Hub, включение всех перечисленных функций в MVP.

## Actors

Patient (child/adolescent), verified guardian с текущей authority, authorized clinician и системные consumers с отдельной purpose/tenant policy. Person/team для clinical ownership пока не назначен. Наличие actor в списке не выдаёт права.

## Permissions

Patient/guardian/clinician получают только разрешённые data elements/encounters. На clinical records действуют права shared owner. Read-only profile не может выполнять prescribing/administering. Research/AI consent отдельно. Unknown/conflicting authority → deny/review.

## Inputs

Versioned source references, subject/tenant, effective/recorded time, verification/truth kind, consent/policy version, authority evidence, requested profile version. Отсутствующие данные остаются unknown.

## Outputs

Permission-filtered profile projection с source versions/freshness; отдельные errors/unknown/stale markers. Клинические факты, predictions и recommendations не объединяются.

## Requirement union

Точные исходные feature labels объединены только при буквальном совпадении. Синонимы не свёрнуты автоматически. Narrative/context fragments сохранены ниже и в traceability.

| Requirement | Original label | Original IDs |
|---|---|---|
| PRF-PEDIATRIC-ENDOCRINE-HUB-R01 | AI | 3120, 3340, 3500 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R02 | Digital Twin | 3120, 3340, 3500, 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R03 | Genetics | 3120, 3340, 3500, 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R04 | Nutrition | 3120, 3340, 3500 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R05 | Laboratory Services | 3120 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R06 | Radiology | 3120 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R07 | Telemedicine | 3120, 3340, 3500, 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R08 | Preventive Medicine | 3120 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R09 | Diabetes Technology | 3340, 3500 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R10 | Laboratory Medicine | 3340, 3500, 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R11 | Imaging | 3340, 3500, 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R12 | Artificial Intelligence | 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R13 | Continuous Monitoring | 3640 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R14 | Clinical Research | 3640, 3880 |
| PRF-PEDIATRIC-ENDOCRINE-HUB-R15 | Diabetes Monitoring | 3880 |

## Data model

Workspace configuration/profile version, permitted references на source resources и projection freshness. Clinical facts принадлежат shared owners. Model results — InferenceRun/SimulationRun, research exports — отдельный authorization context.

Общий envelope и владельцы: [Data architecture](../data_architecture_findings.md). Ни одной новой authoritative specialty table этот draft не вводит.

## API

Profile API — draft contract: read projection(subject, profile version, requested elements, caller policy context) возвращает allowed values/source versions/freshness либо typed denial. Конкретные routes/payload schemas и partner profile URLs ещё не определены. Все write operations идут через shared owner contracts; текущий P0 OpenAPI не объявляется API детских профилей.

## Events

Proposed: ClinicalAssertionVersionChanged, ConsentPolicyChanged, SpecialtyProjectionInvalidated. Envelope: event_id, tenant, subject reference, resource/type/version, timestamp, correlation_id; PHI payload не включать в общий bus. Consumer version-aware и idempotent. Event schema/version и topic policy — открытый engineering gate.

## Dependencies

- CAP-DATA
- CAP-CONDITION
- CAP-LABORATORY
- CAP-IMAGING
- CAP-DEVICES
- CAP-TELEMEDICINE
- CAP-AI
- CAP-CDS
- CAP-TWIN
- CAP-RESEARCH
- CAP-CONSENT
- CAP-AUDIT

Это proposed critical dependencies; API compatibility/integration tests не выполнены.

## Failure modes

- Shared capability недоступна — конкретная секция unavailable/stale, без подставных normal results.
- Разрешение на AI/research отсутствует — эти панели/экспорты не доступны.
- Stale simulation относительно clinical snapshot — не показывать как current assessment.

## Security

Tenant isolation; object-level authorization; отдельные service identities; default deny; source references не обходят policy. Запрет direct clinical writes из AI/twin/profile runtime.

## Privacy

Guardian access не blanket access; consent/assent/maturity и sensitive encounter segmentation применяются на каждую выдачу/экспорт. Revocation закрывает будущую выдачу; внешние копии не считаются отозванными автоматически.

## Clinical safety

- Nutrition и Preventive Medicine из 3120 не исчезают в позднем hub.
- Continuous Monitoring, Diabetes Monitoring и Diabetes Technology сохраняются как разные требования до уточнения modality/device contracts.
- Laboratory Services/Laboratory Medicine и Radiology/Imaging хранят original labels; terminology equivalence ещё не утверждена.
- Clinical Research не получает данные только потому, что clinician имеет clinical access.

Алгоритмов диагностики, лечения и dosing не предлагается. Данные сохраняют source/author/truth kind. Отдельная clinical validation обязательна для будущих actionable функций.

## Observability

Projection version, stale/denied/error counts и dependency latency без medical payload; audit purpose/actor/resource reference/decision. Budgets и alert owner пока не назначены.

## Tests

План: cross-tenant denial; guardian confidential encounter denial; version correction propagation; unknown data handling; replay/out-of-order events; denied AI/order writes; complete source-fragment coverage. Только последняя проверка выполнена локально для draft mapping; приложение не реализовано.

## Acceptance criteria

1. Каждое исходное integration requirement связано с конкретным canonical section и provenance.
2. Patient snapshot не копируется в specialty-owned authoritative tables.
3. Workspace скрывает запрещённые элементы/encounters и не раскрывает их через агрегаты.
4. Simulation/AI recommendation отображаются с отдельным truth kind и не создают clinical orders.

Clinical/runtime criteria: NOT_RUN. Ни один checkbox не считается закрытым по существованию текста.

## Open decisions

- Clinical owner; age transition/assent policy и confidential endocrine records.
- Точный список совместимых shared API/profile versions.
- Nutrition/prevention owner после полного поиска альтернатив.
- Performance/freshness budgets и отказоустойчивость композиции.
- Отдельные clinical AI/twin evaluation packs.

## Original context and status

Исходные формулировки ниже — исторические намерения, не доказанные возможности. Их сохранение предотвращает потерю возрастных границ, product intent и provenance при объединении bullet requirements.

### Original 3120: Clinical Pediatric Endocrinology Intelligence Hub

Source heading line: 76613; body SHA-256: `435ef86c115f8c787aedafedcac86a2e3166d50bdd4efd8c17a20bbfd781e32c`.

- REQ-3120-1: Coordinates the complete pediatric endocrinology ecosystem.
- REQ-3120-2: Integrates
- REQ-3120-4: Provides intelligent endocrine care from infancy through adolescence across the EDHT ecosystem.
- REQ-3120-5: Status
- REQ-3120-6: Documentation
- REQ-3120-7: ---

### Original 3340: Clinical Pediatric Endocrinology Intelligence Hub

Source heading line: 80879; body SHA-256: `83f621f0a73d834c6123d82af6265cbe83bb731477fb31fef3f4b22e116a1742`.

- REQ-3340-1: Coordinates the complete pediatric endocrinology ecosystem.
- REQ-3340-2: Integrates
- REQ-3340-11: Provides intelligent endocrine care across the EDHT ecosystem.
- REQ-3340-12: Status
- REQ-3340-13: Documentation
- REQ-3340-14: ---

### Original 3500: Clinical Pediatric Endocrinology Intelligence Hub

Source heading line: 84352; body SHA-256: `83f621f0a73d834c6123d82af6265cbe83bb731477fb31fef3f4b22e116a1742`.

- REQ-3500-1: Coordinates the complete pediatric endocrinology ecosystem.
- REQ-3500-2: Integrates
- REQ-3500-11: Provides intelligent endocrine care across the EDHT ecosystem.
- REQ-3500-12: Status
- REQ-3500-13: Documentation
- REQ-3500-14: ---

### Original 3640: Clinical Pediatric Endocrinology Intelligence Hub

Source heading line: 87038; body SHA-256: `02e5c8c2ae70bbcbff06b70aa769caedd37dcaed8db13da253c9ca0a853626a4`.

- REQ-3640-1: Coordinates the complete pediatric endocrinology ecosystem.
- REQ-3640-2: Integrates
- REQ-3640-4: Provides intelligent pediatric endocrinology across the EDHT ecosystem.
- REQ-3640-5: Status
- REQ-3640-6: Documentation
- REQ-3640-7: ---

### Original 3880: Clinical Pediatric Endocrinology Intelligence Hub

Source heading line: 91530; body SHA-256: `c3f45372ebf787dddefd10377bb3986a7f2169a31ff754d57bb023ab0fe3ff3a`.

- REQ-3880-1: Coordinates the complete pediatric endocrinology ecosystem.
- REQ-3880-2: Integrates
- REQ-3880-4: Provides intelligent pediatric endocrinology across the EDHT ecosystem.
- REQ-3880-5: Status
- REQ-3880-6: Documentation
- REQ-3880-7: ---
