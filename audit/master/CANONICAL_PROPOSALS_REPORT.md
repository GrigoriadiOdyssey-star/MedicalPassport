# Canonical profile proposals — continuation of pass 01

Содержательная проверка расширена до 98 исходных ID. Три профильные спецификации объединяют требования 17 прочитанных модулей. Они пока не утверждены и не повышают NORMALIZED/CANONICALIZED/IMPLEMENTATION_READY.

| Draft | Исходные ID | Уникальные требования, которые нельзя потерять |
|---|---|---|
| [Pediatric pancreas](canonical_profiles/PRF-PEDIATRIC-PANCREAS.md) | 3167, 3287, 3447, 3606, 3828, 4035, 4536 | Hereditary / recurrent / genetic context, enzyme replacement, nutritional monitoring/support, imaging/lab |
| [Pediatric adrenal](canonical_profiles/PRF-PEDIATRIC-ADRENAL.md) | 3107, 3326, 3488, 3632, 3868 | Steroid therapy, hormonal evaluation, hormone monitoring сверх общих диагнозов |
| [Pediatric endocrine hub](canonical_profiles/PRF-PEDIATRIC-ENDOCRINE-HUB.md) | 3120, 3340, 3500, 3640, 3880 | Infancy through adolescence, prevention, nutrition, diabetes technology/monitoring, continuous monitoring, research |

Для каждого draft заполнены Purpose, Scope, Non-goals, Actors, Permissions, Inputs, Outputs, Data model, API boundary, Events, Dependencies, Failure modes, Security, Privacy, Clinical safety, Observability, Tests и Acceptance criteria. Нерешённые маршруты/schema, clinical ownership, terminology и compatibility открыто перечислены; будущие runtime/clinical тесты имеют NOT_RUN.

Каждый исходный paragraph fragment связан с draft requirement либо разделом Original context and status, с неизменённым text/hash: [requirement_traceability_proposals.json](requirement_traceability_proposals.json). Только буквальные одинаковые feature labels объединены; синонимы/похожие диагнозы не приравнены автоматически. Лексическая карта проверяет полноту сохранения текста, но не доказывает клиническую корректность нормализации.

Actual canonical destinations в requirement_inventory.json остаются null, потому что proposed mapping ещё не утверждена. Исходные duplicate_of/superseded_by тоже null. Source IDs не закрыты, новые historical IDs не созданы, GitLab не изменялся.

Продолжить с подтверждения clinical scope и domain ownership трёх drafts, затем requirement-by-requirement adjudication и dependency contracts; только после этих gates менять нормализационный статус. Актуальные counts — [audit_progress.json](audit_progress.json).
