# MASTER AUDIT — baseline

Дата: 2026-09-14. База: commit `27a26f77d2ca2532ef7c5586802d892dd359a8d0`. Оригинал immutable.

| Проверка | Результат |
|---|---:|
| TOTAL ORIGINAL MODULES | 5175 |
| Unique original IDs | 5175 |
| Missing / repeated IDs | 0 / 0 |
| Malformed headings / empty bodies | 0 / 0 |
| Casefold title groups (previous method) | 492 |
| Normalized title groups (NFKC + punctuation) | 493 |
| Exact parsed-body groups | 3 |
| Bounded lexical pair candidates | 1531 |
| Legacy/version marker candidates | 27 |
| Unresolved/ambiguous named reference entries | 5747 |
| Modules without observed exact dependency/reference links | 5154 |

SHA-256: `da6bd421441f58d2b759f3edf8d5b54c415f0e4544968d162cb352da59a6e835`; 1794594 bytes. Byte ranges cover the original preamble plus every complete module block without loss. Source hash mismatch aborts generation.

Неразрешённые references не обязательно сломанные ссылки: в исходнике часто перечислены общие названия систем без ID. Отсутствие явного ребра не доказывает orphan. Legacy markers — поисковые кандидаты, не доказательство supersede. 12 содержательных находок по 83 прочитанным модулям находятся в [findings.json](findings.json).

Предыдущие 80 замен не считаются полной проверкой 63 модулей в этом ledger автоматически. Готовность пересчитана с нуля. 21% не используется. Полный корпус прошёл структурный/лексический анализ; содержательная проверка охватила только отмеченные REVIEWED ID.

[Manifest](source_manifest.json) · [Ledger](audit_ledger.json) · [Registry](canonical_registry.json) · [Progress](audit_progress.json)
