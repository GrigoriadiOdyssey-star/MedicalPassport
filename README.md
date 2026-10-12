# Current checkpoint: MASTER-08 (2026-09-15)

1764 / 5175 reviewed; 668 normalized/canonicalized originals; 25 shared specifications and 212 profiles. Seven gap proposals remain integrated. Implementation ready: 0.

[Audit](audit/master-08/MASTER_AUDIT_REPORT.md) · [Continue](audit/master-08/CONTINUE_FROM_HERE.md) · [Readiness pipeline](audit/master-08/IMPLEMENTATION_READINESS_REPORT.md) · [MVP candidate architecture](docs/engineering/mvp_candidate_architecture.md) · [MVP tags](docs/engineering/mvp_candidate_registry.json).

# Current checkpoint: MASTER-07 (2026-09-15)

1738 / 5175 reviewed; 612 normalized and canonicalized original IDs; 19 shared specifications with 193 source profiles. Seven gap proposals integrated at documentation scope. Implementation ready: 0.

[Current audit report](audit/master-07/MASTER_AUDIT_REPORT.md) · [Continue from checkpoint](audit/master-07/CONTINUE_FROM_HERE.md).

# Current checkpoint: MASTER-06 (2026-09-15)

1673 / 5175 reviewed; 548 normalized and canonicalized original IDs; 19 shared specifications with 158 source profiles. Seven gap proposals integrated at documentation scope. Implementation ready: 0.

[Current audit report](audit/master-06/MASTER_AUDIT_REPORT.md) · [Continue from checkpoint](audit/master-06/CONTINUE_FROM_HERE.md) · [Bounded device contract](docs/engineering/device-configuration-contract.md).

# EDHT — Medical Passport

Исправленная продуктовая и техническая документация European Digital Health Technologies. Редакция аудита: **15 сентября 2026**.

Этот репозиторий сохраняет все **5 175 исходных ID** и предоставляет основу разработки: ограниченный P0, API-контракт, модель данных, требования безопасности, критерии приёмки и воспроизводимый реестр. В исходном архиве был один Markdown-документ; исходного кода приложения и Git-истории не было. Приложение пока не реализовано и клинически не валидировано.

| Начать здесь | Содержание |
|---|---|
| [MASTER-05 — последний checkpoint](audit/master-05/MASTER_AUDIT_REPORT.md) | 1 554 reviewed; 421 normalized/canonicalized; 18 общих спецификаций, 105 профилей; 7 ранее интегрированных proposals |
| [Продолжить MASTER-05](audit/master-05/CONTINUE_FROM_HERE.md) | Новые диапазоны review, сохранённые ID и открытые readiness gates |
| [Текущие спецификации MASTER-05](docs/canonical/master05/README.md) | Shared owners и профили; прежние версии и требования сохранены |
| [MASTER-04 — предыдущий checkpoint](audit/master-04/MASTER_AUDIT_REPORT.md) | 1 423 reviewed; 273 normalized/canonicalized; 17 общих спецификаций с профилями; 7 proposals интегрированы на уровне документации |
| [Продолжить MASTER-04](audit/master-04/CONTINUE_FROM_HERE.md) | Новые диапазоны review, сохранённые ID и восемь обязательных gates готовности |
| [Текущие общие спецификации](docs/canonical/master04/README.md) | Один canonical owner + profiles; исторические документы и требования сохранены |
| [DOMAIN-03 — предыдущий checkpoint](audit/domain-03/MASTER_GAP_FILL_REPORT.md) | 1 100 reviewed ID; 30 normalized/canonicalized ID → 10 канонических спецификаций документации; 503 сохранённых фрагмента |
| [Продолжить DOMAIN-03](audit/domain-03/CONTINUE_FROM_HERE.md) | Состояние, команды и следующая работа |
| [Канонические спецификации](docs/canonical/README.md) | Принятая структура документации; клиническая валидация и реализация ещё не выполнены |
| [PEDIATRIC-02 — предыдущий checkpoint](audit/pediatric-02/MASTER_GAP_FILL_REPORT.md) | 741 reviewed ID, пять профильных спецификаций, 32 semantic decisions и сохранённые source fragments |
| [Продолжить PEDIATRIC-02](audit/pediatric-02/CONTINUE_FROM_HERE.md) | Состояние, команды и следующая работа |
| [GAP-FILL — предыдущий checkpoint](audit/gapfill/MASTER_GAP_FILL_REPORT.md) | Сверка 5175/51075, 450 reviewed IDs, семь стратегических draft extensions и открытые gates |
| [Продолжить с checkpoint](audit/gapfill/CONTINUE_FROM_HERE.md) | Точные команды, сохранённое состояние и следующая безопасная работа |
| [MASTER AUDIT — текущий проход](audit/master/MASTER_AUDIT_REPORT.md) | Пересчёт по 5175 ID, registry, clusters, canonical proposals, Change Map и checkpoint |
| [Канонические профили — продолжение](audit/master/CANONICAL_PROPOSALS_REPORT.md) | Три draft specifications и карта сохранения требований 17 исходных модулей |
| [Отчёт аудита](REPORT.md) | Выводы, исправления, проверки и оставшаяся работа |
| [Область продукта](docs/product/product-scope.md) | P0 и границы следующих этапов |
| [Дорожная карта](docs/product/roadmap.md) | Последовательность разработки и условия перехода |
| [Критерии приёмки](docs/product/acceptance-and-traceability.md) | Проверяемые требования с исходными ID |
| [Реестр модулей](docs/module-index.md) | 52 удобные главы по 100 модулей; последняя — 75 |
| [Полная исправленная Bible](docs/product-bible.md) | Сводная версия с ограничениями и исправлениями |
| [Машинный реестр](data/modules.json) | ID, исходные строки, контрольные суммы, фазы, повторы |
| [Архитектура](docs/engineering/architecture.md) | Модульный сервер, PostgreSQL, закрытые документы |
| [Модель данных](docs/engineering/data-model.md) | Поля, связи, версии, неопределённые значения |
| [API-контракт](specs/openapi.json) | OpenAPI 3.1.1; 21 путь и 33 операции |
| [Правила API](docs/engineering/api-contract.md) | Ошибки, идемпотентность, пагинация и инварианты |
| [Доступ и QR](docs/engineering/auth-and-qr.md) | Согласие, однократный токен, срок, отзыв |
| [Эксплуатация](docs/engineering/operations.md) | Карантин, экспорт, удаление и восстановление |
| [Клиническая безопасность](docs/safety/clinical-safety.md) | Риски, ограничения AI и условия включения функций |
| [Приватность](docs/safety/privacy-and-consent.md) | Разрешения, опека, обработка и сегментация |
| [Регуляторная оценка](docs/safety/regulatory-assessment.md) | Предварительная применимость и необходимые доказательства |

P0 предлагается для взрослого владельца собственного паспорта: профиль, аллергии, лекарства, закрытые документы, ограниченная передача через QR, экспорт и удаление. AI, назначения, SOS-диспетчеризация, дети/опекуны, устройства и профессиональные интеграции требуют отдельных этапов.

## Проверка репозитория

Требуется Node.js 24. Внешние npm-зависимости не нужны.

```sh
npm run build
npm test
npm run check
npm run domain:check
npm run master04:check
npm run master05:check
```

Генератор сохраняет 5 175 идентификаторов, применяет точные [редакторские правила](config/editorial-corrections.json) и создаёт [журнал замен](data/corrections-applied.json). Проверки подтверждают целостность источника, воспроизводимость каталога, внутренние ссылки и базовую связность OpenAPI. Они не тестируют отсутствующий сервер и не доказывают клиническую безопасность.

[GitLab CI](.gitlab-ci.yml) запускает эти же проверки. Для его фактического выполнения нужен доступный runner и достаточная квота проекта; локальный успех не равен успешному запуску GitLab pipeline.

## Изменения и происхождение

Исходный документ сохранён побайтно в [sources](sources/README.md), контрольные суммы — в [provenance.json](sources/provenance.json). Заголовки и маркированные списки рабочей редакции нормализованы для чтения; исходная иерархия доступна в архивной копии. Нормативные уточнения P0 и безопасности имеют приоритет над оставшимися историческими перечнями будущих возможностей.

Правила последующих изменений: [CONTRIBUTING](CONTRIBUTING.md). Новые функции оформляются по [шаблону](docs/templates/feature-specification.md). Открытая лицензия не назначена: права на исходные материалы и условия распространения должен определить владелец.
