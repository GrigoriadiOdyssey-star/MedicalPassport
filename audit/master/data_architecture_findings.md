# Data architecture findings

MA-C01 и MA-H01: исходные 7/8/13/56/57/58 создают риск нескольких независимых представлений одного clinical fact. Ниже — целевая модель владения. Это proposed design; миграций и FHIR profiles пока нет.

## Source of truth

| Сущность | Canonical owner | Authoritative record / граница |
|---|---|---|
| Patient | CAP-DATA + CAP-IDENTITY binding | Clinical subject ID отдельно от аккаунта; внешние identifiers с issuer |
| Practitioner | CAP-IDENTITY | Проверяемая профессиональная identity; лицензии отдельными evidence records |
| Organization | CAP-IDENTITY | Организация отдельно от Location/PractitionerRole |
| Encounter | CAP-ENCOUNTER | Версионированный эпизод помощи, участники и effective period |
| Condition | CAP-CONDITION | Отдельные reported/clinician assessments, verification и provenance |
| Observation | CAP-LABORATORY для лаборатории; CAP-DATA для остальных измерений | Один observation ID, performer, specimen/device при наличии; источник обязателен |
| DiagnosticReport | CAP-LABORATORY либо CAP-IMAGING по типу исследования | Результат интерпретации с references на observations/study, не копия |
| Medication | CAP-MEDICATION | Каталожное определение препарата/формы/силы; не факт приёма |
| MedicationRequest | CAP-PRESCRIPTION | Order с prescriber authority, status и signature evidence |
| MedicationDispense | CAP-PHARMACY | Событие выдачи, performer/quantity/substitution/linked order |
| MedicationAdministration | CAP-ADMINISTRATION | Событие введения и исполнитель; не self-reported taken |
| MedicationStatement | CAP-MEDICATION | Сообщение пациента/источника о применении; не order |
| AllergyIntolerance | CAP-ALLERGY | Allergen, reaction, clinical/verification status; отсутствие данных отдельно |
| Procedure | CAP-ENCOUNTER | Выполненная процедура отдельно от ServiceRequest |
| Immunization | CAP-IMMUNIZATION | Факт введения вакцины, партия/исполнитель; schedule/certificate отдельно |
| CarePlan | CAP-ENCOUNTER | План с автором/целями; выполнение хранится в событиях |
| Appointment | CAP-APPOINTMENTS | Booking lifecycle; не состоявшийся Encounter |
| DocumentReference | CAP-DOCUMENTS | Метаданные исходника/версии, hash, storage reference |
| ImagingStudy | CAP-IMAGING | Study/series/instance identifiers; pixel data в PACS/object store |
| Device | CAP-DEVICES | Клиническое устройство, модель/серийный номер/calibration; не login device |
| Consent | CAP-CONSENT | Версия scope/purpose/recipient/time и legal/authority context |
| Coverage | CAP-COVERAGE | Заявленное/подтверждённое покрытие, период, issuer |
| Claim | CAP-COVERAGE | Требование оплаты; не доказательство диагноза/лечения |
| Specimen | CAP-LABORATORY | Тип, сбор, идентификаторы, traceability |
| ServiceRequest | CAP-ENCOUNTER | Запрос услуги, intent/author; не результат |
| Provenance | CAP-AUDIT | Авторство/преобразование версии и source record reference |
| AuditEvent | CAP-AUDIT | Кто/зачем/когда/результат действия; без medical old/new payload |
| RelatedPerson / AuthorityEvidence | CAP-CONSENT + identity reference | Родство отдельно от текущих полномочий |
| ClinicalAssertion | CAP-DATA | Внутренний envelope версии и вида достоверности |
| InferenceRun / SimulationRun | CAP-AI / CAP-TWIN | Производный результат отдельно от клинических фактов |

Для Observation и DiagnosticReport owner выбирается однозначно по producer domain при создании и записывается в record. Таблица не разрешает двум capabilities независимо создавать копии с одним external identifier. Это открытый контракт назначения владельца, который ещё должен пройти проверку.

## Обязательный envelope

`assertion_id`, `tenant_id`, `subject_id`, `owner_capability`, `assertion_kind`, `resource_type`, `resource_version`, `effective_time`, `recorded_at`, `source_system`, `source_record_id`, `source_version`, `author/performer`, `verification_status`, `code_system/version`, `consent_policy_reference`, `supersedes_version`, `provenance_reference`.

`assertion_kind`: OBSERVED_FACT, REPORTED_FACT, CLINICIAN_ASSESSMENT, AI_INFERENCE, PREDICTION, SIMULATION, RECOMMENDATION, ORDER, DISPENSE, ADMINISTRATION. Это внутренняя семантика, не утверждение о наличии одноимённого FHIR enum. Claim не автоматически порождает verified Condition. Для legacy unknown provenance хранится UNKNOWN и original narrative, а не придуманная дата/врач.

Version immutable. Исправление создаёт новую версию и причинную связь; conflicting assertions сохраняются с обеими provenance до reconciliation. Удаление/ограничение доступа обрабатывается через policy и retention workflow, а не физическим удалением истории без следа. Индекс идемпотентного импорта: tenant + source system + resource type + external ID + source version; конфликт одного ключа с разным hash помещается в quarantine.

Patient matching имеет отдельный review queue. Merge не уничтожает старые identifiers; требуется reversible unmerge record и пересчёт разрешённых projections. Для measurements обязательны value/unit, effective time, method, status и source; unknown unit не интерпретируется как известная. Clinical record и patient account имеют разные lifecycle.

## FHIR mapping boundaries

Предложенный стартовый exchange adapter — FHIR R4 4.0.1, если его принимает выбранный партнёр. В R4 MedicationStatement отличен от MedicationRequest/Dispense/Administration; внутреннее сообщение о приёме сохраняет его происхождение. [HL7 MedicationStatement](https://hl7.org/fhir/R4/medicationstatement.html).

Provenance должен ссылаться на конкретную версию преобразованного ресурса; подробности author/transform и audit access не подменяют друг друга. [HL7 Provenance](https://hl7.org/fhir/R4/provenance.html).

Все вышеприведённые ownership и identifier rules — архитектурные предложения EDHT. Их ещё нужно выразить в schemas, mappings и миграциях. Проверки: conflicting import, duplicate arrival, correction propagation, patient unmerge, stale projection, unknown units, clinician/report separation. Ни одна из них не заявлена выполненной для приложения.
