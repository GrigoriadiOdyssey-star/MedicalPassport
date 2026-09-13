# Дубликаты и пересечения — проход 01

Всего кандидатных групп/пар: 1969; NEEDS_REVIEW: 1954. Группы могут пересекаться. 3 exact-body группы означают 3 повторных ID относительно одного экземпляра на группу, а не потерю ID.

| Решение | ID | Класс | Вывод |
|---|---|---|---|
| DEC-OV-04 | 2220, 2590 | PARTIAL_OVERLAP | Ophthalmology hubs share AI/twin/imaging but differ in surgery/telemedicine versus genetics/laboratory; version order unproven. |
| DEC-OV-05 | 3340, 3500, 3880 | PARTIAL_OVERLAP | Exact pair 3340/3500 is only a subset of the larger same-title cluster. 3880 has distinct monitoring/research content. |
| DEC-SP-04 | 1003, 1073, 1093 | SPECIALTY_PROJECTION | Clinic/physician/telemedicine appointment workflow is shared; infectious disease, ENT and dermatology retain distinct specialty eligibility. |
| DEC-SP-05 | 2068, 2088, 2110, 2167 | SPECIALTY_PROJECTION | Shared CDS orchestration with separate clinical contexts and evaluation; endocrine profile uniquely calls Digital Twin. |
| DEC-SP-06 | 862, 882, 898, 937, 957 | SHARED_CAPABILITY | Provider organization directory and search data ownership can be shared while specialty profiles and search views remain separate. |
| DEC-EX-01 | 3287, 3447 | EXACT_DUPLICATE | Identical title and parsed body; four pancreatic requirements retained verbatim for both IDs. |
| DEC-EX-02 | 3326, 3488 | EXACT_DUPLICATE | Identical title and parsed body; four adrenal requirements retained for both IDs. |
| DEC-EX-03 | 3340, 3500 | EXACT_DUPLICATE | Identical title and body; all eight integration requirements retained. |
| DEC-SEM-01 | 36, 95 | SEMANTIC_DUPLICATE | The abbreviated 95 contains no requirement beyond 36. Textual intent equivalence only; broader corpus/context still needs reconciliation. |
| DEC-OV-01 | 30, 227, 1924 | PARTIAL_OVERLAP | Persistence schema, patient workflow and AI-labelled dynamic/cross-border feature share one authorization domain but have distinct responsibilities. |
| DEC-OV-02 | 1681, 1700 | PARTIAL_OVERLAP | Core model orchestration vs umbrella platform composition. No evidence that the latter supersedes the former. |
| DEC-OV-03 | 8, 13, 57 | PARTIAL_OVERLAP | Catalog/reported use/order/workflow cannot be merged into one clinical fact. |
| DEC-SP-01 | 1684, 1685, 1686, 2030, 2069 | SPECIALTY_PROJECTION | Different physiological and disease contexts use one twin core. Cardiology and respiratory integration expand model concerns with progression/prediction. |
| DEC-SP-02 | 4596, 4919, 5172 | SPECIALTY_PROJECTION | One policy engine, specialty-sensitive profiles; age/assent/jurisdiction plus reproductive/mental-health segmentation must survive. |
| DEC-SP-03 | 61, 4595 | SPECIALTY_PROJECTION | Renal exchange adds dialysis/transplant/pathology and freshness to shared interoperability; not semantic duplicate. |

Совпадение title автоматически не закрывает модуль. Cosine используется только для очереди; semantic classification выдана лишь после чтения полных тел 36 и 95. Exact body не решает вопрос контекста соседних поколений. Иерархические платформы, таблицы, API и specialty projections сравниваются по ответственности и уникальным требованиям.

Для всех исходных ID сохранены verbatim body и фрагменты в [requirement_inventory.json](requirement_inventory.json). Для проверенных групп дополнительные требования перечислены в [review_decisions.json](review_decisions.json). Полного переноса каждого фрагмента в canonical specification ещё нет: duplicate_of/superseded_by остаются null, CLOSE_AS_DUPLICATE не разрешён.

Кандидаты legacy/version: 27; подтверждённых поколений: 0. Не выводить chronology из величины module_id. Для продолжения проверить внешние ссылки, соседние секции и происхождение каждого варианта.
