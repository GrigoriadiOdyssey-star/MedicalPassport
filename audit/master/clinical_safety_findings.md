# Clinical safety findings

Этот проход проверяет требования и опасные границы поведения. Клиническое заключение о применимости алгоритмов и независимая медицинская экспертиза не выполнены. В [findings.json](findings.json) severity относится к архитектурному риску, а не обнаруженной уязвимости работающего сервера.

## Разделение знания и действия

| Вид записи | Кто/что формирует | Разрешённый переход |
|---|---|---|
| OBSERVED FACT | Авторизованный измерительный источник/исполнитель | Проверка source/units/time; correction новой версией |
| REPORTED FACT | Пациент, proxy либо иной указанный источник | Сохранить автора и reported nature; не автоподтверждать |
| CLINICIAN ASSESSMENT | Проверенный clinician с полномочиями | Отдельное действие, evidence и версия |
| AI INFERENCE | ModelVersion + InferenceRun | Показать отдельно с uncertainty; никакой прямой записи диагноза |
| PREDICTION / SIMULATION | Модель + snapshot + scenario | Только derived result с validity horizon |
| RECOMMENDATION | CDS/clinician | Не order; требуется отдельное решение человека |
| ORDER | Authorized prescriber/order actor | Signed/attributed clinical workflow |
| DISPENSE | Pharmacy actor | Отдельное событие выдачи |
| ADMINISTRATION | Исполнитель введения | Отдельное событие и evidence; self-report не equivalent |

AI не назначает лечение, не выписывает рецепт, не меняет дозу, не отменяет лекарство и не подменяет врача. Операции approval и clinical order используют отдельные permissions и endpoint. Сам по себе доступ модели к инструментам не даёт доступа к этим операциям. Пересказ recommendation не считается approval.

## Hazard register для проверенных источников

| Hazard | ID / trigger | Предлагаемый контроль | Что проверить |
|---|---|---|---|
| Ложное отсутствие взаимодействий | 36, 95: No Interaction без полноты источников | NOT_CHECKED / INCOMPLETE / POSSIBLE / REVIEWED_OUTCOME; указать базу и дату | missing drug, неизвестная дозировка, outdated knowledge |
| Автокоррекция терапии | 36, 57, 1141, 1699 | Read-only AI/CDS output + clinician approval + отдельный order | direct write denied, replay approval, altered result |
| Self-report как доказанное введение | 8, 13, 57 | Statement/order/dispense/administration раздельны | одна таблетка отмечена дважды; order есть, dispense нет |
| Ребёнок/опекун получают лишние сведения | 16, 4596, 4919, 5172 | Authority evidence + confidential encounter/element filtering | maturity transition, contested guardian, school recipient |
| Simulation становится диагнозом | 1681–1700, 2030, 2069 | Separate derived store, source/model version, applicability gate | out-of-domain patient, stale lab, invalid unit |
| Непроверенный OCR/перевод | 12, 2137 | Source preserved, derivative versioned, clinician review when used clinically | negation/dose/unit translation error, document tampering |

## Очередь обязательной специализированной проверки

Pregnancy/lactation, pediatrics, oncology, ICU/emergency, mental health, surgery, lab interpretation, imaging interpretation, diagnosis, medication dosing и Digital Twin prediction получают высокий приоритет по lexical flags. Это сигналы triage; они не определяют клиническую тяжесть отдельного модуля автоматически. [review_queue.json](review_queue.json) содержит ещё не прочитанные ID.

Для каждого clinical intended use нужны population/exclusions, actor, input requirements, validated knowledge source, uncertainty, failure response, human oversight, acceptance thresholds и harm monitoring. Отсутствующее значение не заполняется моделью как факт. Confidence не заменяет доказанную calibration и clinical utility.

Переход RESEARCH → clinical release требует утверждённого evaluation protocol, разделения train/test, представительных групп, безопасного abstention, клинического reviewer и rollback criteria. Конкретные пороги выбираются до испытаний для конкретной задачи; универсальные числа здесь не выдумываются. Ни один из проверенных клинических профилей пока не объявлен IMPLEMENTATION_READY.
