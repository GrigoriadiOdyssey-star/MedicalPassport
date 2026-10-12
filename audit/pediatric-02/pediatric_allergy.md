# PRF-PED-ALLERGY — аллергология и связанные иммунологические процессы
DRAFT_SPECIFICATION · CAP-SPECIALTY · clinical specialty / allergy and anaphylaxis · roadmap RESEARCH. [Общий контракт](shared_pediatric_contract.md); [сохранённые требования](requirements/PRF-PED-ALLERGY.md).

Источники 1111–1120 и 4401–4450 уже содержат подробные процессы. Цель объединения — единая история reaction/testing/interpretation, а не повторная реализация каждого allergy registry. Аллерголог отвечает за интерпретацию, медицинская команда — за supervised challenge и введение, пациент/опекун — за отдельно помеченные сообщения; школа получает ограниченный action plan.

Модель AllergyLabel хранит suspected/confirmed/modified/refuted статус, вещество/продукт/класс, реакцию, время, тяжесть, источник, специалиста и основания. DelabelingDecision содержит исходную метку, доказательства, challenge result, автора, новое состояние и дату; старая запись остаётся доступной по истории. Cross-reactivity evidence и sensitization не превращаются автоматически в clinical allergy.

Рабочие процессы: сообщение реакции → оценка → обследование → заключение; supervised challenge → наблюдение → результат → подтверждение; назначенная иммунотерапия → введение → реакция → специалист; plan preparation → restricted disclosure → expiration/revocation. Oral challenge не становится домашней процедурой из-за наличия телемедицины.
Allergen SCIT/SLIT (1118) отличается от IVIG/SCIG/biological therapy (996). Общая инфраструктура введения сохраняется, therapeutic intent, product и контроль специалиста разделены.

ActionPlan и AutoInjectorPassport сохраняют назначенный препарат/устройство/дозу, expiry/replacement, clinician instructions и контакты. Уведомление о сроке — не новое назначение. Вакцинальные решения сохраняют разрешение, дополнительные условия, альтернативу, отсрочку и противопоказание с автором; AI не выдаёт final clearance.

Нельзя потерять nutrition/growth/substitute foods, environmental/seasonal context, venom/latex, tolerance reassessment, иммунные функции и adult transition. Уникальные иммунологические требования связываются с профилем иммунологии без автоматического смешения записей.

Приёмка: неподтверждённая метка и подтверждённая аллергия различимы; delabeling оставляет след; школьная выгрузка не содержит лишнюю историю; remote service не разрешает supervised процедуру; AI не выдаёт финальную вакцинационную допуск/отказ. Открыты версия клинических критериев, ответственность за процедуры/экстренный план и проверка юрисдикционных разрешений.
