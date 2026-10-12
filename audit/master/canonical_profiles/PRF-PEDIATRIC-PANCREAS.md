# PRF-PEDIATRIC-PANCREAS — Pediatric pancreatic disorders profile

Status: DRAFT_REQUIREMENT_UNION. Source IDs: 3167, 3287, 3447, 3606, 3828, 4035, 4536. Это proposed canonical profile, не новый historical ID. NORMALIZED/CANONICALIZED/IMPLEMENTATION_READY пока false.

## Purpose

Единое профильное представление детских панкреатических заболеваний и связанных клинических записей без копирования общего клинического хранилища.

## Scope

Acute/chronic/recurrent и hereditary pancreatic disease, pancreatic insufficiency, genetic context, imaging/lab findings, enzyme replacement records и nutritional workflows. Возрастные границы ещё должны быть подтверждены clinical owner.

Layer: SPECIALTY PROFILE; proposed owner: CAP-SPECIALTY; stage: PHASE_3, OUT_OF_P0.

## Non-goals

Автоматическая диагностика панкреатита, выбор/изменение ферментной терапии, выдача доз, универсальная модель взрослых пациентов или самостоятельное питание/лечение.

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
| PRF-PEDIATRIC-PANCREAS-R01 | Acute Pancreatitis | 3167, 3287, 3447, 3606, 3828, 4035, 4536 |
| PRF-PEDIATRIC-PANCREAS-R02 | Chronic Pancreatitis | 3167, 3287, 3447, 3606, 3828, 4035, 4536 |
| PRF-PEDIATRIC-PANCREAS-R03 | Pancreatic Insufficiency | 3167, 3287, 3447, 3606, 3828, 4035, 4536 |
| PRF-PEDIATRIC-PANCREAS-R04 | Hereditary Pancreatitis | 3167 |
| PRF-PEDIATRIC-PANCREAS-R05 | Genetic Disorders | 3287, 3447, 3828 |
| PRF-PEDIATRIC-PANCREAS-R06 | Enzyme Replacement Therapy | 3606 |
| PRF-PEDIATRIC-PANCREAS-R07 | Nutritional Monitoring | 3606 |
| PRF-PEDIATRIC-PANCREAS-R08 | Enzyme Replacement | 3828 |
| PRF-PEDIATRIC-PANCREAS-R09 | Recurrent Pancreatitis | 4035 |
| PRF-PEDIATRIC-PANCREAS-R10 | Imaging | 4035, 4536 |
| PRF-PEDIATRIC-PANCREAS-R11 | Genetic Evaluation | 4035 |
| PRF-PEDIATRIC-PANCREAS-R12 | Nutritional Support | 4035 |
| PRF-PEDIATRIC-PANCREAS-R13 | Laboratory Findings | 4536 |
| PRF-PEDIATRIC-PANCREAS-R14 | Genetics | 4536 |
| PRF-PEDIATRIC-PANCREAS-R15 | Nutrition | 4536 |
| PRF-PEDIATRIC-PANCREAS-R16 | Treatment | 4536 |

## Data model

Condition references для диагнозов/phenotypes; Observation/DiagnosticReport для обследований; ImagingStudy/DocumentReference для изображений; MedicationStatement для reported use и отдельный MedicationRequest для назначения. Nutritional assessment — versioned clinician assessment с автором и временем.

Общий envelope и владельцы: [Data architecture](../data_architecture_findings.md). Ни одной новой authoritative specialty table этот draft не вводит.

## API

Profile API — draft contract: read projection(subject, profile version, requested elements, caller policy context) возвращает allowed values/source versions/freshness либо typed denial. Конкретные routes/payload schemas и partner profile URLs ещё не определены. Все write operations идут через shared owner contracts; текущий P0 OpenAPI не объявляется API детских профилей.

## Events

Proposed: ClinicalAssertionVersionChanged, ConsentPolicyChanged, SpecialtyProjectionInvalidated. Envelope: event_id, tenant, subject reference, resource/type/version, timestamp, correlation_id; PHI payload не включать в общий bus. Consumer version-aware и idempotent. Event schema/version и topic policy — открытый engineering gate.

## Dependencies

- CAP-CONDITION
- CAP-LABORATORY
- CAP-IMAGING
- CAP-MEDICATION
- CAP-PRESCRIPTION
- CAP-DOCUMENTS
- CAP-CONSENT
- CAP-AUDIT

Это proposed critical dependencies; API compatibility/integration tests не выполнены.

## Failure modes

- Неизвестен возраст/guardian authority — закрыть профильный доступ, не расширять роль.
- Недостаточно данных для phenotype — показать unknown, не классифицировать как chronic/acute.
- Unknown units/source у лабораторного результата — сохранить источник, исключить автоматическую интерпретацию.

## Security

Tenant isolation; object-level authorization; отдельные service identities; default deny; source references не обходят policy. Запрет direct clinical writes из AI/twin/profile runtime.

## Privacy

Guardian access не blanket access; consent/assent/maturity и sensitive encounter segmentation применяются на каждую выдачу/экспорт. Revocation закрывает будущую выдачу; внешние копии не считаются отозванными автоматически.

## Clinical safety

- Hereditary Pancreatitis и Genetic Disorders сохраняются раздельно: частный диагноз не эквивалентен общему генетическому контексту.
- Recurrent Pancreatitis не удаляется как синоним Acute/Chronic.
- Enzyme Replacement и Enzyme Replacement Therapy сохраняются с исходными формулировками до clinical terminology review.
- Nutritional Monitoring, Nutritional Support и Nutrition не объединяются в одну непрозрачную запись.

Алгоритмов диагностики, лечения и dosing не предлагается. Данные сохраняют source/author/truth kind. Отдельная clinical validation обязательна для будущих actionable функций.

## Observability

Projection version, stale/denied/error counts и dependency latency без medical payload; audit purpose/actor/resource reference/decision. Budgets и alert owner пока не назначены.

## Tests

План: cross-tenant denial; guardian confidential encounter denial; version correction propagation; unknown data handling; replay/out-of-order events; denied AI/order writes; complete source-fragment coverage. Только последняя проверка выполнена локально для draft mapping; приложение не реализовано.

## Acceptance criteria

1. Каждый source requirement доступен в traceability и профильном scope без потери recurrent/hereditary/nutrition/replacement terms.
2. Изменение authoritative Condition/Observation обновляет разрешённую проекцию, не создаёт независимую копию.
3. Любая попытка создать или изменить therapy order через profile read interface отклоняется.
4. Self-reported enzyme use и подписанный prescription различимы по kind/author/version.

Clinical/runtime criteria: NOT_RUN. Ни один checkbox не считается закрытым по существованию текста.

## Open decisions

- Clinical owner и точные pediatric age boundaries.
- Terminology/value sets и связь hereditary/genetic phenotypes.
- Спецификация nutritional assessment и выбор существующего owner после полного corpus search.
- Profile API/schema и policy compatibility tests.

## Original context and status

Исходные формулировки ниже — исторические намерения, не доказанные возможности. Их сохранение предотвращает потерю возрастных границ, product intent и provenance при объединении bullet requirements.

### Original 3167: Pediatric Pancreatic Disorders Module

Source heading line: 77491; body SHA-256: `a4f8cc141c785b01e39192d427e12dec7946c460cd22ded2410ece094b251037`.

- REQ-3167-1: Supports pancreatic diseases.
- REQ-3167-2: Supports
- REQ-3167-4: Status
- REQ-3167-5: Documentation
- REQ-3167-6: ---

### Original 3287: Pediatric Pancreatic Disorders Module

Source heading line: 79727; body SHA-256: `256d839d6f89f0c71ec8e0de165be21ef683d4ddc87b9b82e9b9132c30ac0409`.

- REQ-3287-1: Supports pancreatic diseases.
- REQ-3287-2: Supports
- REQ-3287-7: Status
- REQ-3287-8: Documentation
- REQ-3287-9: ---

### Original 3447: Pediatric Pancreatic Disorders Module

Source heading line: 83208; body SHA-256: `256d839d6f89f0c71ec8e0de165be21ef683d4ddc87b9b82e9b9132c30ac0409`.

- REQ-3447-1: Supports pancreatic diseases.
- REQ-3447-2: Supports
- REQ-3447-7: Status
- REQ-3447-8: Documentation
- REQ-3447-9: ---

### Original 3606: Pediatric Pancreatic Disorders Module

Source heading line: 86401; body SHA-256: `e67c8de38e68c5b2730b4698f5609c1febb40b04e02216d3fd1d23adadb33ed7`.

- REQ-3606-1: Supports pancreatic diseases.
- REQ-3606-2: Supports
- REQ-3606-4: Status
- REQ-3606-5: Documentation
- REQ-3606-6: ---

### Original 3828: Pediatric Pancreatic Disorders Module

Source heading line: 90577; body SHA-256: `dd3eb38d38bff6387039cc494dd9b888e11908a376053d1bdbfb0d7bded5a53a`.

- REQ-3828-1: Supports pancreatic diseases.
- REQ-3828-2: Supports
- REQ-3828-4: Status
- REQ-3828-5: Documentation
- REQ-3828-6: ---

### Original 4035: Pediatric Pancreatic Disease Module

Source heading line: 94728; body SHA-256: `5dcbe907e339c5e5828a7b5d44493fbbf18fc40a596a848f56905ecc22d9a40d`.

- REQ-4035-1: Supports pediatric pancreatic disorders.
- REQ-4035-2: Supports
- REQ-4035-4: Status
- REQ-4035-5: Documentation
- REQ-4035-6: ---

### Original 4536: Pediatric Pancreatic Disease Module

Source heading line: 105844; body SHA-256: `25751724e150e1b3f923ead5dd2a87c6814f7a8ada5d9fef9f981045ef13c4b8`.

- REQ-4536-1: Supports pediatric pancreatic disorders.
- REQ-4536-2: Integrates
- REQ-4536-4: Status
- REQ-4536-5: Documentation
- REQ-4536-6: ---
