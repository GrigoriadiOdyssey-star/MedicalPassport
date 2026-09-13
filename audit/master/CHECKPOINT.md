# EDHT MASTER AUDIT checkpoint

Дата прохода: 2026-09-14. Локальная ветка: `audit/master-pass-01`; base GitLab/main: `27a26f77d2ca2532ef7c5586802d892dd359a8d0`. Локальные результаты этого прохода не опубликованы. Не повторять миграцию и не создавать новый токен для чтения локальных артефактов.

## Возобновить точно отсюда

```powershell
Set-Location -LiteralPath 'C:\Users\HP\Documents\Codex\2026-09-12\new-chat\outputs\EDHT'
git switch audit/master-pass-01
git status --short --branch
node scripts/master-audit.mjs --check
node --input-type=module -e 'import fs from "node:fs";const q=JSON.parse(fs.readFileSync("audit/master/review_queue.json"));console.log(JSON.stringify(q.modules.slice(0,25),null,2));'
```

Прочитать полные исходные тела выбранных ID (путь/heading_line в очереди), затем близкие cluster members и контекст соседних секций. Per-ID выводы добавлять в `config/master-audit.mjs`; не поднимать reviewed по lexical match. Поля reviewed/normalized/canonicalized/implementation_ready отражают разные gates. В проходе 01 генератор намеренно разрешает только source review; перед поддержкой следующих стадий добавить документированные requirement-migration/gate evidence и валидацию переходов, а не просто менять счетчик.

```powershell
node scripts/master-audit.mjs
node scripts/master-audit.mjs --check
npm test
npm run check
git diff --check
```

Инструмент полностью локален, внешних npm-зависимостей не требует. Оригинал SHA-256 фиксирован в source_manifest/config; mismatch останавливает генерацию. Generated JSON/CSV/MD создаются из config/source; authored architecture/findings/CHECKPOINT сохраняются. Редактирование generated files без config приводит к drift error.

## Следующий наиболее полезный пакет

1. Закрыть контекстные сравнения для 36/95, 30/227/1924, 3340/3500/3880 и соседних поколений.
2. Разработать canonical requirement union для каждого такого owner/profile; каждому исходному fragment присвоить destination и evidence. Не помечать duplicate/superseded до переноса всех уникальных требований.
3. Уточнить 33 owner proposals: CAP-SPECIALTY разбить на проверенные specialty profiles, не создавать общий клинический super-service. Unresolved owner не назначать по одному слову.
4. Проверить остальные high-risk modules и неразрешённые кандидатные кластеры (актуальный счётчик — audit_progress.json).

## GitLab APPLY

`change_map.json.apply_enabled = false`, gitlab_operations и batch_plan пусты. Источник не меняется; Issues не создаются/закрываются. До APPLY нужны validated change map, before/after/recovery plan, small sequential batches и проверка ошибок/лимитов. При rate-limit/warning остановить записи. Доступ к GitLab CI ранее требовал verification аккаунта; этот проход его статус не перепроверял. После отдельного перехода к APPLY публиковать изменения существующего проекта, не повторять миграцию.
