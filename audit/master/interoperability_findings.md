# Interoperability findings

Источники проверены 14 сентября 2026. Применимость ниже — архитектурное предложение EDHT, а не подтверждение conformant implementation. Основные прочитанные ID: 61 и 4595; дополнительные medicinals/diagnoses/documents — 8/9/12/13/57/58.

| Стандарт / система | Предлагаемая граница EDHT | Открытое решение / первичный источник |
|---|---|---|
| FHIR | Versioned exchange adapter, canonical resource mapping | R4 4.0.1 — кандидат первой partner integration; R4B/R5 отдельными mapping packs. [HL7 R4](https://hl7.org/fhir/R4/medicationstatement.html) |
| HL7 v2 | Партнёрский inbound/outbound adapter для legacy feeds | Message types/version/ACK/retry/dedup contract выбирать по партнёру; нынешний corpus не задаёт их. [HL7 v2 / FHIR mapping](https://hl7.org/fhir/R4/comparison-v2.html) |
| DICOM / DICOMweb | Imaging objects/metadata, study-series-instance IDs, query/retrieve/store adapter | Pin conformance и transfer syntaxes; текущий просмотренный PS3.18 — 2026c. [DICOM PS3.18](https://dicom.nema.org/medical/dicom/current/output/html/part18.html) |
| PACS | Внешнее хранилище/система изображений | PACS — роль системы, не самостоятельная кодировка/терминология; отдельный vendor conformance pack |
| LOINC | Идентификаторы измерений/исследований/документов | Code + release; проверить права и third-party content. [LOINC](https://loinc.org/) и [license](https://loinc.org/kb/license) |
| SNOMED CT | Клинические понятия и value sets | Edition/version/jurisdiction и лицензирование до распространения. [SNOMED International](https://www.snomed.org/get-snomed) |
| ICD | Кодирование диагнозов/статистики по выбранной версии и юрисдикции | Сохранять исходную систему; mapping не считать equivalence автоматически. [WHO ICD](https://www.who.int/standards/classifications/classification-of-diseases) |
| ATC | Классификация медикаментов | ATC/DDD предназначена для drug utilization; DDD не используется как персональная назначаемая доза. [WHO ATC/DDD](https://www.who.int/tools/atc-ddd-toolkit/methodology) |
| UCUM | Машинные units для количественных observations | Сохранять unit code и исходную строку; проверять размерность/преобразование. [UCUM specification](https://ucum.org/ucum) |

FHIR не является готовым security protocol: доступ, authentication, authorization и logging проектируются дополнительно. [HL7 FHIR security](https://hl7.org/fhir/R4/security.html).

## Обязательный partner profile pack

Partner ID, endpoint/environment; release и CapabilityStatement; profile canonical URLs и versions; supported resources/interactions/search parameters; identifier issuer/system; patient matching policy; terminology bindings/value sets/ConceptMap versions; permitted lossy mappings; provenance/transformation chain; legal/purpose boundary; auth/scopes; idempotency/ACK/retries/rate limits; quarantine и manual reconciliation; contract fixtures.

Registry различает literal FHIR_resources и FHIR_mapping_candidates. Пустой FHIR_profiles означает, что профиль ещё не выбран. Совпадение названия внутренней сущности с FHIR resource не доказывает conformance. Metadata Patient/identifier не даёт право объединить двух пациентов автоматически. Импорт сохраняет исходный payload в разрешённом retention контуре и transformation provenance; неизвестные коды/units не заменяются «ближайшим» значением молча.

Renal profile 4595 сохраняет dialysis/transplant/pathology, handover, freshness и source verification поверх общего adapter. Pediatric consent 4596 проверяется до экспорта. Нужны round-trip fixtures без потери clinical intent, duplicate/reordered messages, missing identifiers, ambiguous mapping, stale consent, corrupt DICOM metadata и inaccessible pixel data. Ни один partner pack или round-trip test пока не завершён.
