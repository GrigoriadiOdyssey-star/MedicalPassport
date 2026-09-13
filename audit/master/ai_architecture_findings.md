# AI / CDS architecture findings

Основание: 36/95/1141/1239/1924/2068/2088/2110/2167 и AI-производные в 12/2137. Одно слово Engine не обосновывает независимый runtime. Для непрочитанных AI-модулей registry сохраняет кандидатов без подтверждённой canonicalization.

## Предлагаемая общая платформа

| Компонент | Владеет | Не владеет |
|---|---|---|
| Model Gateway | Маршрутизация разрешённых ModelVersion, timeout/quota/egress policy | Решение об авторизации пациента, клинический order |
| Model Registry | Версия, intended use, deployment status, dataset lineage, validation pack | Медицинский факт |
| Knowledge / RAG | Версионированные источники, лицензия, дата, retrieval provenance | Истина по отсутствующему документу |
| Evaluation | Pre-release/offline tests, subgroup results, drift/abstention evidence | Автоподтверждение новой модели |
| Inference Runtime | Input snapshot reference, prompt/config/model versions, результат | Перезапись source record |
| Clinical AI/CDS | Use-case profile, knowledge rules, recommendation/evidence/uncertainty | Prescription/administration |
| Approval | Отдельный actor/action, reviewed output hash, validity/version check | Неявное согласие из текста или клика просмотра |
| Monitoring / Safety | Ошибки, drift, incident/rollback, минимум PHI | Полный prompt/medical payload в общих логах |

Specialty AI profiles определяют входные ресурсы, population, contraindications, evidence и критерии; не создают собственные patient/medication databases. 1239 уже содержит Human Approval — название Autonomous нельзя трактовать как разрешение самостоятельного лечения. 1924 направляется в deterministic CAP-CONSENT; возможный AI help объясняет текст, но не выдаёт доступ.

## Контракт InferenceRun — draft

Run ID; tenant/subject; purpose; approved profile/model versions; snapshot ID/hash; effective/recorded times; consent/policy decision reference; retrieval source IDs/versions; output schema version; assertion_kind=AI_INFERENCE/RECOMMENDATION; uncertainty/abstention reason; validation status; created/expiry time; review decision reference. Полный input/output хранится только в разрешённом защищённом контуре с retention policy.

Состояния: REQUESTED → AUTHORIZED → RUNNING → SUCCEEDED / ABSTAINED / FAILED / CANCELLED. Approval — отдельный lifecycle. Timeout/cancellation не повторяют side effects; повторная команда с тем же idempotency key возвращает тот же run либо конфликт при другом input hash.

Непроверенные документы, пользовательский текст и retrieved content — данные, а не системные инструкции. Prompt injection не может изменить tools/egress/policy. Модель не получает секреты провайдеров или широкие clinical write credentials. Unknown/missing data отображается явно; запрет на hallucinated patient facts проверяется задачами с отсутствующим/противоречивым контекстом.

## Открытые gates

Выбрать провайдеров и договорённости об обработке/обучении на данных; отдельное разрешение на research/training; deployable evaluation harness; incident owner; rollback drill; model retirement/version pinning; измеримые thresholds по специальности. Создание API keys, подключение моделей и реальные медицинские данные в этом проходе не выполнялись.
