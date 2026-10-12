# Gap analysis

Новых исходных ID или доказанно отсутствующих capabilities не создано. 6 gap-кандидатов — недоопределённые контракты, которые могут быть завершены в уже существующих владельцах.

| ID | Проблема / владелец | Совпадений в 5175 | Следующее действие |
|---|---|---:|---|
| GAP-01 | Prevent self-report, order and AI output from overwriting one clinical fact. CAP-DATA | 99 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |
| GAP-02 | Unify evidence of authority, policy versions and confidential encounter rules. CAP-CONSENT | 142 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |
| GAP-03 | Require use-case thresholds, subgroup evaluation, abstention and rollback evidence. CAP-AI | 259 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |
| GAP-04 | Avoid stale clinical summary or simulation being treated as current truth after corrections/revocation. CAP-DATA | 436 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |
| GAP-05 | Pin versioned partner profiles and test lossy/ambiguous mappings. CAP-INTEROP | 84 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |
| GAP-06 | Separate access revocation, immutable disclosure receipt, data deletion and backup expiry. CAP-OPERATIONS | 115 | Читать найденные альтернативы, сравнить inputs/outputs/ownership; предпочесть дополнение shared capability. |

Полные search expressions, найденные original_id, provenance, architecture layer, dependencies, risks и stages сохранены в [gap_candidates.json](gap_candidates.json). Лексическое попадание не равно содержательной проверке альтернативы. Статус NEW_CANONICAL_MODULE_PROPOSAL запрещён до завершения этой проверки и архитектурного обоснования.
