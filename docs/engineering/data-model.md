# Модель данных P0

Статус: **proposed-specification**. Источник: модули 5–14, 27–30, 52, 55–59. Поля API описаны в [OpenAPI](../../specs/openapi.json). Это логическая модель, не выполненная миграция БД.

## Общие правила

- Идентификаторы UUID выдаёт сервер. Дата события — UTC `timestamptz`; календарные даты — `date` без выдуманного часового пояса. Пустое значение, неизвестное значение и отрицательное утверждение различаются.
- У каждого медицинского ресурса ровно один `profile_id`. `profiles.owner_user_id` уникален в P0. Не хранить одновременно независимые `user_id` и `medical_profile_id`, которые могут указывать на разных владельцев (проблема модулей 8–12).
- `version bigint >=1` увеличивается атомарно. HTTP `ETag: "7"` соответствует версии; полная замена и удаление требуют `If-Match`. Отсутствие — 428, несовпадение — 412. Состояние проверяется в том же `UPDATE ... WHERE version = :expected`, а не отдельным незащищённым чтением.
- Текст трактуется как данные, выводится с экранированием, не исполняется как HTML/SQL/инструкция модели. Все медицинские записи P0 имеют `provenance = self_reported`; клиент не может присвоить `verified`.
- Soft delete скрывает запись из API немедленно, но не считается завершённым физическим удалением. После очистки оставшийся служебный tombstone не содержит медицинского текста.

## Сущности и ограничения

| Таблица | Ключевые поля и связи | Инварианты |
|---|---|---|
| users | id, oidc_issuer, oidc_subject, state, created_at | unique(issuer, subject); state active/deletion_pending/deleted; пароль не хранится |
| profiles | id, owner_user_id FK users, display_name, birth_date?, blood_group?, emergency_contact?, allergy_status, version, created_at, updated_at | unique(owner_user_id); birth_date не в будущем; P0 только для совершеннолетнего в выбранной юрисдикции |
| allergies | id, profile_id FK profiles, substance, reaction?, severity, clinical_status, provenance, version, timestamps, deleted_at? | severity unknown/mild/moderate/severe; status active/inactive; имена и реакции не являются клиническим подтверждением |
| medicines | id, profile_id FK profiles, name, active_ingredient?, dose_text?, schedule_text?, status, start_date?, end_date?, provenance, version, timestamps, deleted_at? | status active/stopped; end_date >= start_date; свободный текст не превращается в рекомендацию дозы |
| documents | id, profile_id FK profiles, title, media_type, size_bytes, sha256, storage_key, state, version, timestamps | storage_key generated unique; state quarantined/available/rejected/deleted; выдача только available |
| consent_events | id, profile_id FK profiles, purpose, recipient_kind, scopes, notice_version, granted_at, expires_at, revoked_at? | purpose share_passport; recipient_kind bearer_holder; scopes непустое уникальное подмножество profile/allergies/medicines |
| qr_grants | id, profile_id FK profiles, consent_id FK consent_events, token_digest, scopes, created_at, expires_at, consumed_at?, revoked_at? | digest unique; один успешный resolve; scopes ⊆ consent scopes; expires_at ≤ consent expiry; 60–86 400 сек |
| audit_events | id, subject_user_id?, actor_kind, actor_id?, action, resource_type, resource_id?, outcome, request_id, occurred_at | append-only для runtime-роли; никаких before/after медицинских значений |
| jobs | id, owner_user_id FK users, type, status, attempts, created_at, completed_at?, result_key? | тип export/deletion; retry с ограничением и состоянием failed; медицинское содержимое не входит в ошибку |
| outbox | id, event_type, entity_id, created_at, processed_at?, attempts | вставка в транзакции с изменением; дедупликация worker по id |
| idempotency_keys | owner_user_id, operation, key_digest, request_digest, resource_id, expires_at | unique(owner, operation, key_digest); тот же ключ и другое тело →409 |

JSONB допустим для небольшого typed `emergency_contact` и наборов scope. Медицинские списки не прячутся в произвольный JSONB: allergies и medicines — самостоятельные записи. `blood_group` — A+/A-/B+/B-/AB+/AB-/O+/O- или null; API не принимает отдельный несовместимый `rh_factor`. Цвет волос и глаз из модуля 7 не входит в необходимый минимум.

Поле `allergy_status`: `unknown`, `none_known`, `recorded`. При создании первой активной аллергии сервер в одной транзакции меняет статус профиля на `recorded` и увеличивает версию профиля. Нельзя сохранить `none_known`/`unknown`, пока есть активные аллергии (409). При удалении/деактивации последней активной аллергии статус становится `unknown`, а не `none_known`; пользователь может явно заявить «известных аллергий нет». `recorded` при отсутствии активных аллергий отклоняется. Нулевое число лекарств означает «нет записей», а не «не принимает препараты».

## Индексы

Первичные ключи всех таблиц; unique для субъекта входа, владельца профиля и digest QR. Для списков: `(profile_id, created_at, id)` с условием `deleted_at IS NULL`; для аудита `(subject_user_id, occurred_at, id)`; для grants `(profile_id, created_at, id)` и `(consent_id)`; для worker `(status, created_at)`. Индексы внешних ключей создаются явно. GIN, полнотекстовый поиск, геоиндексы, шардинг и materialized views добавляются только по измеренному запросу.

## Транзакции и гонки

Изменение медицинской записи, корректировка allergy_status, событие аудита и outbox фиксируются одной транзакцией. При ошибке аудита операция откатывается. Для чтения чувствительных данных событие записывается до выдачи ответа; недоступность обязательного аудита даёт 503.

Создание QR, отзыв согласия и resolve блокируют строку согласия, затем строку grant в одном порядке. Проверяются владелец, статус аккаунта, сроки, scope и `consumed_at IS NULL`. Снимок читается в согласованной транзакции; `consumed_at` и событие выдачи фиксируются вместе. Если revoke первым получил блокировку и commit, дальнейший resolve не выдаёт данные. Если resolve уже завершил commit, отзыв не может забрать полученную копию.

Идемпотентность для обычных POST: ключ 16–128 символов; срок записи 24 часа; сравнивается нормализованное тело запроса и субъект. Повтор возвращает исходный resource_id и исходный код. Для QR-секрета используется отдельное правило: секрет возвращается только при первом создании; повтор с тем же ключом →409 с кодом `qr_secret_already_issued` и ID grant. Клиент может отозвать grant и создать новый. Секрет не сохраняется открытым ради удобства повторов.

## Жизненный цикл данных

Экспорт читает согласованный снимок профиля, аллергий, лекарств, метаданных и доступных документов. Архив создаётся в закрытом хранилище; скачивание через API с повторной проверкой владельца; результат истекает через 24 часа. Отсутствие/отказ документа явно отражается в манифесте; успех не объявляется полным без проверки состава.

Запрос удаления немедленно переводит аккаунт в deletion_pending, отзывает grants и блокирует новые медицинские записи. Разрешены только получение статуса удаления и завершение сессии у поставщика входа. Worker удаляет текущие объекты, производные файлы, export, медицинские строки и учётную запись в согласованном порядке с повторяемыми шагами. Вновь созданная учётная запись с тем же внешним субъектом не восстанавливает старый профиль. Минимальная запись удаления и резервные копии обрабатываются по утверждённой политике, описанной в [operations](operations.md).
