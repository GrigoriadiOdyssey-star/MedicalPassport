# EDHT — облачный функциональный проход, 12.10.2026

Статус: IN_PROGRESS. Это выполненный инженерный проход, не завершение всей системы и не production release.

Реализовано: корректный AI_PROVIDER_TIMEOUT после получения заголовков; сохранение has_older и RU/EN уведомление о последних40сообщениях; MIME/signature/UTF8/4MiB/SHA256 проверки документов; server-only attestation + атомарный receipt/audit, закрытие старого completion RPC; отдельный раздел Питание/Измерения: ввод/редактирование/история/архив массы,роста,талии через existing observation/version layer.

Облачно проверено: приложение282/282 PASS,0skip; root247PASS/1прежнийcached-baselineFAIL,0skip;11validatorsPASS; fresh/upgrade PostgreSQL17,8SQLcontractsPASS. Старые tests/assertions,ProductBible,baselines,audit/RLS policies не изменялись. Новый SQL не активирует capability и не выставляет CLEAN. Синтетические SQLfixtures откатились.

Не подтверждено: живой AI; независимые пользователи A/B и врач C на новом Preview; isolated managedSupabase; миграции/capability на ней; AV/OCR/translation workers, отзываемый QRdocumentproxy; полный cloudlabs/pharmacy/imaging/twin; Nutrition клинические нормы,педиатрические права,планы и DBbodyvalidation. Единственный PostgreSQL тестовый сервер находился в ephemeral VercelSandbox, не наHP.

По факту5,175 оригинальных IDs не равны реализованным модулям. Достоверный полный deployed-coverage счётчик отсутствует. В этом проходе доработаны существующие AI/Document capabilities и добавлен один частичный Nutrition extension; целиком закрытые original modules не объявлялись.

CI/автодеплой: отдельный cloud-only тег предотвращает запуск нового кода на прежнем HP runner; GitLabCI ожидает настройку облачного исполнителя. AutoVercel для новой ветки выключен, production build запрещён. Итоговые SHA/статусы и deployment evidence — в DraftMR. РабочаяSupabase и Production не изменены. ПлатныеAIвызовы0; SandboxHobby в бесплатнойквоте.

READY FOR PRODUCTION: NO.

## Фактическая публикация

Код: 6267a62ccb0a2e5d90fd18ab87287a1354fc1ff5, Draft MR !12 (dependency !11). GitLab pipeline2936725915 PENDING:7jobs,runner=null,started_at=null;наHPнетзапуска.

Preview: https://edht-r55t1q0e8-grigoriadiodyssey-8824s-projects.vercel.app — dpl_8nfkqXngfvd44pd5uupx3pNeYyw7 READY. BuildlogsподтверждаютточныйGitLabSHA. Страница,app.css,main.js,i18n.js,master27-ui.js,nutritionUI/model —200.

РаботающийавторизованныйflowНЕпринят: /api/me,/api/views/home,/api/notifications,/api/views/nutrition,/api/config дают503CLOUD_URL_INVALID. VercelметаданныеподтвердилиSupabaseENVтолькодлястарыхветок;конфигурацииэтойветкинет. СтарыйpotentiallysharedSupabaseнеперенастроенинеcкопирован. Дляследующегореальногозапуска нужныisolatedSupabase+PreviewURL/publishablekey и подтверждённыйcloudCIrunner. Секреты/productionENVнетронуты.

Sandboxостановленавтоматическиза30мин;повторныйнеcоздавался. Productiondomainсохранилdpl_4MNmqj7fxXTDfwKCR6d3o6NhsXhN. ПолноеMVP,liveAI,реальныйA/B/C,durablegrant/Storagedocumentpathsнеобъявляютсяготовыми.
