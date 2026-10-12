# Repository-wide gap analysis

Оригинал: 5175 ID. Поиск покрывает 51 областей и 31 × 19 ячеек детской архитектуры. Полные исходные тела прочитаны для 366 strategic IDs; уникальных REVIEWED с прошлым проходом: 450. Остальная часть корпуса прошла поиск/структурную проверку, а не полный semantic audit.

| Extension | Source hits | Reviewed alternatives | Решение |
|---|---:|---:|---|
| [Precision Pharmacology / Drug Intelligence](precision_pharmacology_architecture.md) | 175 | 64 | EXTEND_EXISTING_OWNER CAP-CDS; validated close pending |
| [Seven-level Digital Twin](digital_twin_architecture.md) | 455 | 156 | EXTEND_EXISTING_OWNER CAP-TWIN; validated close pending |
| [Dynamic Organism / Treatment Impact Visualization](dynamic_organism_visualization.md) | 343 | 41 | EXTEND_EXISTING_OWNER CAP-TWIN; validated close pending |
| [Protein / Genomic Intelligence Adapters](protein_genomic_adapters.md) | 384 | 114 | EXTEND_EXISTING_OWNER CAP-AI; validated close pending |
| [Adaptive Interoperability / Connector Intelligence](adaptive_interoperability_architecture.md) | 455 | 46 | EXTEND_EXISTING_OWNER CAP-INTEROP; validated close pending |
| [Research AI / Population Intelligence](research_ai_architecture.md) | 342 | 93 | EXTEND_EXISTING_OWNER CAP-RESEARCH; validated close pending |
| [Model-agnostic AI Platform](ai_platform_architecture.md) | 332 | 42 | EXTEND_EXISTING_OWNER CAP-AI; validated close pending |

Это семь gaps в глубине спецификаций/контрактов, не семь доказанно отсутствующих клинических функций. New gap modules = 0. Неиспользованные найденные альтернативы остаются в dossier и требуют review перед final canonical migration. Проверенные overlaps и сохранённые уникальные требования: [semantic_diffs.json](semantic_diffs.json). Generated modules и metadata никогда не получают original_id.

Пустая matrix cell обозначает SHARED_REVIEW_REQUIRED, а не создание нового модуля. SOURCE_MENTION также не доказывает полноту workflow. [Domain coverage](domain_coverage.json) · [Pediatric evidence](pediatric_coverage_evidence.json).
