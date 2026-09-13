# Digital Twin findings

Прочитаны 1681–1686, 1697–1700, 2030, 2069, 2110. В источнике перечислены возможности, но нет equations, параметров, validation datasets, границ применимости или результатов испытаний. Наличие слов Clinical Validation в 1698 означает план работы.

## Нормализованная структура — предложение

| Компонент | Источник | Сохраняемые требования |
|---|---|---|
| Twin Core / runtime | 1681, 1700 | Orchestration patient/organ/disease/treatment simulations |
| Patient snapshot builder | 1682 | Medical history, genomics, laboratory, imaging |
| Organ model family | 1683 | Heart, liver, kidney, brain |
| Cardiovascular model | 1684, 2030 | Blood flow, heart function, arrhythmia, progression, therapy prediction |
| Respiratory model | 1685, 2069 | Lung function, gas exchange, ventilation, progression, therapy prediction |
| Endocrine model | 1686, 2110 | Diabetes, thyroid, hormonal feedback; endocrine CDS integration |
| Population/research projection | 1697, 1698 | Epidemiology, public health, simulation studies, model development |
| Clinician CDS view | 1699 | Diagnosis support, treatment planning, predicted outcomes |

Disease models, medication response и risk forecasting находятся внутри versioned model family/profile. Их наличие в platform outline не означает готовую модель; отдельные математические спецификации обязательны.

## SimulationRun — draft

Уникальные run_id и snapshot_id; patient/cohort scope; consent/purpose; model family/version; parameter set; calibration provenance; boundary conditions; units; observation timestamps и missingness; scenario/hypothetical interventions; random seed при стохастике; solver/version; horizon; uncertainty; applicability checks; input/output hashes; runtime warnings; author/reviewer; generated/expiry times.

Scenario interventions никогда не сохраняются как действующий medication order. Результат помечен SIMULATION/PREDICTION и показывает время данных. Экстраполяция за validated domain ведёт к abstain или явно исследовательскому выводу, не к clinically actionable advice. Re-run после correction создаёт новую версию; старый результат сохраняет исходный snapshot и invalidation reason.

## Failure modes и проверки

- Неверные units, inconsistent timestamps или отсутствие критичного input: reject/abstain, не подстановка «нормы».
- Неподходящая population/age/condition: запрет клинического использования вне intended use.
- Solver не сошёлся: FAILED с diagnostic code, без достоверно выглядящего графика результата.
- Data/consent изменились: повторная policy проверка перед отображением, stale marker или блокировка.
- Клинический workflow пытается получить «решение модели» как order: deny; отдельный authorized clinician action.

Нужны reference cases, численная устойчивость, sensitivity/identifiability analysis, независимые clinical datasets, subgroup evidence и adverse-result review. Эти проверки не выполнены. Статус модели и профилей — RESEARCH; они не входят в взрослый P0.
