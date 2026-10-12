# Security / privacy / consent findings

Архитектурные предложения для canonical layer. Исходные 14/27/29/30/32/227 и профильные 4596/4919/5172 прочитаны; прежние исправления в docs/engineering и docs/safety сохраняются. Реализация контролей не проверялась, потому что приложения нет.

## Единая авторизация

AuthorizationDecision = subject + verified actor + tenant + resource/version/element + action + purpose + consent/policy version + authority evidence + jurisdiction + effective time + decision/reason. RBAC определяет базовую возможность, ABAC/relationship policy ограничивает конкретные данные. Роль doctor/hospital сама по себе не даёт полный record. Default deny; policy failure не заменяется allow.

Identity OIDC subject отдельно от Patient. Practitioner license/organization affiliation и family/guardian evidence имеют issuer, срок и scope. Смена возраста, полномочий или юрисдикции порождает policy re-evaluation и invalidation будущих access grants. Несогласованные требования разных юрисдикций остаются NEEDS_REVIEW, не объединяются в наиболее широкое разрешение.

## Access matrix — ограничения предложенного P0

| Actor | P0 | Будущие условия |
|---|---|---|
| Adult owner | Собственные profile/allergies/reported medicines/private documents, export/deletion | Subject binding и tenant enforcement |
| Bearer QR recipient | Один явно разрешённый snapshot до expiry/revocation | Профессия не установлена; нельзя называть verified doctor |
| Clinician/provider | Не общий доступ P0 | Credential + purpose + patient policy + data scope |
| Guardian/family | Вне P0 | Authority evidence + возраст/assent + confidential encounter exceptions |
| School/research recipient | Вне P0 | Раздельный purpose/dataset/authorization, особенно 5172 |
| Emergency/break-glass | Вне P0 | Проверенный actor, reason, minimum dataset, expiry, independent retrospective review |

## QR, отзыв и жизненный цикл данных

Grant хранит hash секрета, scope, expiry и policy version. Redemption атомарно проверяет неиспользованный/неотозванный grant и согласие, фиксирует snapshot version и receipt. Гонка revoke/redeem имеет определённую точку принятия решения и проверяется конкурентным тестом. Audit не содержит токена или полного snapshot. Offline bearer copy не может гарантировать немедленный online revoke; это отдельная будущая модель угроз.

Отзыв блокирует будущие выдачи и выдачу новых ссылок. Он не может стереть уже полученную внешним получателем копию. Deletion, retention exceptions, backup expiry и legal holds — отдельные workflows с подтверждаемым scope и сроками. Research/training consent не вытекает из clinical consent. Export проверяет доступ заново при выдаче файла, а не только при старте job.

## Технические контролируемые границы

TLS и managed encryption keys; key rotation/version и restore plan; секреты вне repo/logs; separate service identities; tenant scope во всех queries/jobs/object keys; quarantine upload; signed short-lived object access после authorization; deduplication не раскрывает существование чужих файлов. Audit metadata минимальны, доступ отдельно ограничен, provenance ссылается на версии клинических записей.

Необходимые негативные тесты: IDOR/cross-tenant request, stale/replayed grant, expired clinician license, contested guardian, confidential record в family export, event replay, consent revoke during AI run, deleted data in restored backup, unknown policy jurisdiction. Это список будущих проверок, не доказательства прохождения. Регуляторные утверждения остаются предварительными и привязаны к выбранной юрисдикции согласно существующей regulatory assessment.
