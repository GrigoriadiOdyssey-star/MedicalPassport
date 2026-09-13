# PRF-PEDIATRIC-ADRENAL — Pediatric adrenal disorders profile

Status: DRAFT_REQUIREMENT_UNION. Source IDs: 3107, 3326, 3488, 3632, 3868. Это proposed canonical profile, не новый historical ID. NORMALIZED/CANONICALIZED/IMPLEMENTATION_READY пока false.

## Purpose

Объединить профильные требования к детским заболеваниям надпочечников, сохранив различие diagnosis, hormonal evaluation, monitoring и therapy records.

## Scope

Congenital Adrenal Hyperplasia, Adrenal Insufficiency, Cushing Syndrome, Adrenal Tumors, Steroid Therapy, Hormonal Evaluation, Hormone Monitoring как версионированные факты/процессы под клиническим контролем.

Layer: SPECIALTY PROFILE; proposed owner: CAP-SPECIALTY; stage: PHASE_3, OUT_OF_P0.

## Non-goals

Определение дозы стероидов, экстренная лечебная рекомендация, интерпретация гормональных проб без validated clinical protocol, автоматическая постановка диагноза.

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
| PRF-PEDIATRIC-ADRENAL-R01 | Congenital Adrenal Hyperplasia | 3107, 3326, 3488, 3632, 3868 |
| PRF-PEDIATRIC-ADRENAL-R02 | Adrenal Insufficiency | 3107, 3326, 3488, 3632, 3868 |
| PRF-PEDIATRIC-ADRENAL-R03 | Cushing Syndrome | 3107, 3326, 3488, 3632, 3868 |
| PRF-PEDIATRIC-ADRENAL-R04 | Adrenal Tumors | 3107, 3326, 3488, 3868 |
| PRF-PEDIATRIC-ADRENAL-R05 | Steroid Therapy | 3107 |
| PRF-PEDIATRIC-ADRENAL-R06 | Hormonal Evaluation | 3632 |
| PRF-PEDIATRIC-ADRENAL-R07 | Hormone Monitoring | 3868 |

## Data model

Condition для source-attributed diagnoses; Observation/DiagnosticReport для hormone measurements/evaluation; MedicationStatement/MedicationRequest/MedicationAdministration раздельно по виду события. Диагностическая оценка не заменяется графиком monitoring.

Общий envelope и владельцы: [Data architecture](../data_architecture_findings.md). Ни одной новой authoritative specialty table этот draft не вводит.

## API

Profile API — draft contract: read projection(subject, profile version, requested elements, caller policy context) возвращает allowed values/source versions/freshness либо typed denial. Конкретные routes/payload schemas и partner profile URLs ещё не определены. Все write operations идут через shared owner contracts; текущий P0 OpenAPI не объявляется API детских профилей.

## Events

Proposed: ClinicalAssertionVersionChanged, ConsentPolicyChanged, SpecialtyProjectionInvalidated. Envelope: event_id, tenant, subject reference, resource/type/version, timestamp, correlation_id; PHI payload не включать в общий bus. Consumer version-aware и idempotent. Event schema/version и topic policy — открытый engineering gate.

## Dependencies

- CAP-CONDITION
- CAP-LABORATORY
- CAP-MEDICATION
- CAP-PRESCRIPTION
- CAP-ENCOUNTER
- CAP-CONSENT
- CAP-AUDIT

Это proposed critical dependencies; API compatibility/integration tests не выполнены.

## Failure modes

- Нет reference interval/method/time/units для hormone value — не давать интерпретацию.
- Противоречивые diagnoses сохраняются с provenance до clinician reconciliation.
- Доступ к sensitive endocrine/guardian records отсутствует — вернуть policy denial без раскрытия данных.

## Security

Tenant isolation; object-level authorization; отдельные service identities; default deny; source references не обходят policy. Запрет direct clinical writes из AI/twin/profile runtime.

## Privacy

Guardian access не blanket access; consent/assent/maturity и sensitive encounter segmentation применяются на каждую выдачу/экспорт. Revocation закрывает будущую выдачу; внешние копии не считаются отозванными автоматически.

## Clinical safety

- Adrenal Tumors сохраняется даже если отсутствует в краткой версии 3632.
- Steroid Therapy — требование к поддержке отдельного клинического workflow, не разрешение на автономное назначение.
- Hormonal Evaluation и Hormone Monitoring имеют разные purpose/time и сохраняются раздельно.

Алгоритмов диагностики, лечения и dosing не предлагается. Данные сохраняют source/author/truth kind. Отдельная clinical validation обязательна для будущих actionable функций.

## Observability

Projection version, stale/denied/error counts и dependency latency без medical payload; audit purpose/actor/resource reference/decision. Budgets и alert owner пока не назначены.

## Tests

План: cross-tenant denial; guardian confidential encounter denial; version correction propagation; unknown data handling; replay/out-of-order events; denied AI/order writes; complete source-fragment coverage. Только последняя проверка выполнена локально для draft mapping; приложение не реализовано.

## Acceptance criteria

1. Union включает все семь исходных feature labels.
2. Clinical and reported assertions не смешиваются при импорте и просмотре.
3. Profile не может менять дозировку или создавать order.
4. Пользователь видит source/version/time для каждого hormone observation.

Clinical/runtime criteria: NOT_RUN. Ни один checkbox не считается закрытым по существованию текста.

## Open decisions

- Clinical owner, exact intended use и педиатрические ограничения.
- LOINC/SNOMED/value-set bindings по конкретным исследованиям.
- Human workflow для clinical evaluation и emergency referral вне P0.
- Profile schema и payload/permission tests.

## Original context and status

Исходные формулировки ниже — исторические намерения, не доказанные возможности. Их сохранение предотвращает потерю возрастных границ, product intent и provenance при объединении bullet requirements.

### Original 3107: Pediatric Adrenal Disorders Module

Source heading line: 76382; body SHA-256: `28b6bdecc4100144840cf7afd7b2ade195d74c2713d776adbca4742862445267`.

- REQ-3107-1: Supports adrenal diseases.
- REQ-3107-2: Supports
- REQ-3107-4: Status
- REQ-3107-5: Documentation
- REQ-3107-6: ---

### Original 3326: Pediatric Adrenal Disorders Module

Source heading line: 80577; body SHA-256: `2ced55d6143e2926cc1b384b85085a876f801857ca27c2bd7a544c1ba7e51165`.

- REQ-3326-1: Supports adrenal diseases.
- REQ-3326-2: Supports
- REQ-3326-7: Status
- REQ-3326-8: Documentation
- REQ-3326-9: ---

### Original 3488: Pediatric Adrenal Disorders Module

Source heading line: 84100; body SHA-256: `2ced55d6143e2926cc1b384b85085a876f801857ca27c2bd7a544c1ba7e51165`.

- REQ-3488-1: Supports adrenal diseases.
- REQ-3488-2: Supports
- REQ-3488-7: Status
- REQ-3488-8: Documentation
- REQ-3488-9: ---

### Original 3632: Pediatric Adrenal Disorders Module

Source heading line: 86896; body SHA-256: `1a2ab8dabd9e991f4b300c4d4bc6b198e0b1c93d2cde9356a9ec2a12eedfe5cf`.

- REQ-3632-1: Supports adrenal diseases.
- REQ-3632-2: Supports
- REQ-3632-4: Status
- REQ-3632-5: Documentation
- REQ-3632-6: ---

### Original 3868: Pediatric Adrenal Disorders Module

Source heading line: 91319; body SHA-256: `3045aba3964abb2235d9017f9262297de363c7b03f59ac346cf3dfb950b247a6`.

- REQ-3868-1: Supports adrenal diseases.
- REQ-3868-2: Supports
- REQ-3868-4: Status
- REQ-3868-5: Documentation
- REQ-3868-6: ---
