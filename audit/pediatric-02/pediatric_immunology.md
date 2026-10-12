# PRF-PED-IMMUNOLOGY — клиническая иммунология
DRAFT_SPECIFICATION · CAP-SPECIALTY · clinical specialty / immune deficiency and dysregulation · roadmap RESEARCH. [Общий контракт](shared_pediatric_contract.md); [карта источников](requirements/PRF-PED-IMMUNOLOGY.md).

Профиль сохраняет ранние 991–999 и глубокие 5001–5025 вместе с пересекающимися иммунологическими требованиями 4431–4444. Global Pediatric Super Dashboard 1000 рассматривается как общая проекция всего педиатрического продукта.

Иммунолог, лаборатория, генетик, инфекционист, трансплантационная команда и уполномоченная семья работают с различными представлениями. Входы включают infection phenotype, immunoglobulins, subsets/flow cytometry, functional tests, complement, antibodies, genetics, medication/infusion and transplant context. ImmuneProfile и InfectionEpisode связывают эти данные, сохраняя время, метод/референс, терапевтический контекст и происхождение. Паттерн инфекции не равен диагнозу иммунодефицита.

Нужно сохранить SCID/CVID/IgA/CGD, antibody/cellular/combined/phagocyte/complement disorders, вторичную недостаточность, immune dysregulation, autoinflammation и oncology context. Состояния screening abnormal → specialist referral → confirmation → treatment planning → follow-up не сворачиваются в один disease flag.

IVIG/SCIG replacement включает product/route/dose/frequency/weight, trough context, infusion reactions, product change, missed treatment и home therapy. Allergen immunotherapy остаётся отдельным therapeutic intent. HSCT/reconstitution связывает conditioning/graft/GVHD/infection/immunoglobulin/functional recovery; биологическая терапия имеет отдельные screening/monitoring требования.

VaccineResponseObservation, EligibilityReview и RevaccinationPlan различны. Антительный результат не выдаёт разрешение на вакцину; решение ссылается на актуальные данные, утверждённую версию правил и специалиста. Национальный календарь и post-transplant sequence не подменяют друг друга.
Генетика и family cascade сохраняют отдельные полномочия родственников; raw scientific model output не записывается как подтверждённый клинический вывод.

Приёмка: задержка abnormal-screen follow-up видима; неподтверждённое состояние не становится confirmed; все заменяемые функции сохранены; immune state и модель twin разделены; разрешение на исследование/обучение не наследуется от лечения. Открыты клинические rule packs, редкие/возрастные выборки для проверки, лабораторные профили и контроль передачи взрослой службе.
