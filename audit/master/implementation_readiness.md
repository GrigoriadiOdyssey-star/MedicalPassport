# Implementation readiness и roadmap

READINESS пересчитана от всех 5175 original_id, без переноса прежнего процента. Наличие Markdown, API path, нормализованного title либо назначенного эвристикой owner не означает готовность реализации.

## Правила gates

| Стадия | Требуемое доказательство |
|---|---|
| REVIEWED | Прочитано полное тело исходного ID, записан per-ID architectural verdict и provenance |
| NORMALIZED | Явно определены ответственность/границы/тип фактов/слой/ссылки, разрешены локальные противоречия; уникальные требования сохранены |
| CANONICALIZED | Owner подтверждён, все source fragments сопоставлены canonical specs, duplicate/overlap context разрешён, dependencies проверены |
| IMPLEMENTATION_READY | Все поля нижеследующего checklist конкретны, contracts/tests/acceptance traceable, clinical/privacy gates закрыты или явно вне scope |

Ledger хранит эти стадии раздельными boolean: terminal classification DUPLICATE/SUPERSEDED сама по себе не повышает готовность. Общий показатель = минимум четырёх процентов, каждый denominator=5175. Это консервативный показатель по обязательным gates, не оценка доли затраченного труда. Учёт 100% ID отображается отдельно.

## Checklist каждого canonical module

Purpose; Scope; Non-goals; Actors; Permissions; Inputs; Outputs; Data model; API; Events; Dependencies; Failure modes; Security; Privacy; Clinical safety; Observability; Tests; Acceptance criteria. Дополнительно: source requirement mapping, explicit open decisions и approved owner. Каждый пункт должен иметь конкретное содержание/ссылку либо обоснованное N/A. Ни один module в проходе 01 не прошёл весь checklist.

## Roadmap boundaries

| Класс | Правило отбора |
|---|---|
| MVP | Только разрешённые срезы взрослого owner passport: identity, profile, reported medicines, allergies, private documents, scoped one-time QR, export/deletion и обязательные controls |
| POST_MVP | Последующие user workflows: reminders, appointments, travel; отдельное подтверждение scope |
| PHASE_2 | Provider/exchange/eRx/lab/imaging/devices и guardian flows после prerequisites |
| PHASE_3 | Расширенные specialty workflows, insurance, emergency/break-glass после validation |
| RESEARCH | AI/CDS, Digital Twin, клинические predictions до доказательств intended use |
| EXPERIMENTAL | Отдельно обозначенные experimental/quantum идеи, без clinical deployment |
| LONG_TERM | Недостаточно определённые или далёкие идеи; сохранить ID, не считать исключёнными навсегда |

57 исходных ID в старом p0ModuleIds — входы в спецификацию, не 57 полностью включённых MVP модулей. В registry это P0_INPUT_NOT_WHOLE_MODULE_APPROVAL. Roadmap routing для непрочитанных модулей эвристическое; mention AI может отправить широкий historical scope в RESEARCH, хотя его безопасный CRUD-срез применим в MVP. Для 4919/5172 локальные HIGH/CRITICAL MVP labels не расширяют глобальный P0.

## Draft engineering slice: scoped disclosure

Purpose: выдача одного согласованного snapshot. Scope: adult owner → bearer recipient. Non-goals: verified provider, minors, offline, break-glass. Actors: owner/recipient/system. Permissions: owner creates/revokes own grant, recipient redeems one secret. Inputs: consent scope/expiry, snapshot source versions; unknown values сохранены. Outputs: grant secret один раз, snapshot/receipt или explicit denial.

Data model: DisclosureGrant/Receipt с tenant/subject/scope/version/digest/expiry/state; existing P0 fields в docs/engineering. API: существующий specs/openapi.json, никакие исторические GET token URLs не включаются. Events: proposed GrantRevoked, SnapshotDisclosed с минимальными metadata. Dependencies: identity, consent, clinical source owners, audit. Failure modes: expired/revoked/redeemed/changed policy, concurrent redemption, stale source, unavailable policy. Security/privacy: secret вне URL/logs, default deny, минимальный scope. Clinical safety: show reported/verified/unknown и source timestamp. Observability: grant outcome/count/latency без PHI. Tests/acceptance: exactly one success under concurrent redeems; revoke prevents future disclosure; cross-tenant access denied; stale policy rechecked.

Этот slice заполняет checklist как draft, но canonicalization/readiness пока не засчитывается: полная карта исторических QR requirements, совместимость scope/версий и независимая проверка контрактов ещё не завершены. Не выдавать draft за готовый модуль.
