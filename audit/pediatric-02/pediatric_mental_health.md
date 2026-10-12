# PRF-PED-MENTAL — психическое здоровье ребёнка и подростка
DRAFT_SPECIFICATION · CAP-SPECIALTY · clinical specialty / mental health and psychiatry · roadmap RESEARCH. [Общий контракт](shared_pediatric_contract.md); [полные источники](requirements/PRF-PED-MENTAL.md).

Блоки 3981–4000, 4826–4850 и 5151–5175 дополняют друг друга: ранние названные методы терапии и многопрофильная помощь остаются вместе с поздними схемами, granular confidentiality и explicit safety. Ни возраст документа, ни маркировка Extended Module v2 не доказывают замену предыдущего поколения.

MentalHealthEpisode объединяет Assessment, MentalStatusExamination, SymptomReport, TherapyEpisode, MedicationEpisode, CrisisEpisode, FunctionalStatus и FollowUpPlan. Reporter/role/context различают ребёнка, опекуна, школу и клинициста. Сгенерированный текст не становится clinician-observed finding. Suspected/provisional/confirmed diagnoses не смешиваются.

Patient, guardian, mental-health specialist, pediatrician и school recipient имеют разные разрешения. ClinicalSummary и RestrictedSessionNote — разные уровни. Trauma narrative не размножается по общей карте; сведения родственников не объединяются с фактами ребёнка. Согласие и права пересматриваются при совершеннолетии, передаче и отзыве; emergency override имеет цель, автора, срок и audit. Школьному получателю передаётся minimum necessary support plan.

Рабочие процессы сохраняют screening → clinician assessment → follow-up/referral; treatment → monitoring → outcome; crisis → qualified assessment → action/disposition → discharge/follow-up. Crisis scoring не заменяет специалиста; автоматизация не выбирает involuntary/coercive care. Пропуск важного follow-up становится задачей для определённого получателя, не диагнозом.
MedicationEpisode/DoseChange/MonitoringRequirement/MonitoringResult сохраняют рост, cardiovascular/metabolic/neurological context, titration, response и reconciliation при отдельном clinician-controlled prescribing.

Сохранены ADHD/executive function, anxiety/OCD, mood, severe illness, eating/sleep/substance contexts, school/family, cognition и functional recovery. Autism identity не равна psychiatric pathology; communication preferences, sensory needs и поддержка решений остаются требованиями. Behavioral context не создаёт постоянных стигматизирующих меток.

Общие AI/twin дают только разрешённую сводку/сценарий с источниками и неопределённостью; не выводят скрытые психические состояния или недокументированную травму. Digital phenotyping — будущая исследовательская возможность с отдельным разрешением.
Приёмка: разграничение reporter и source; запрет выдачи restricted notes школе/неуполномоченному опекуну; отзыв и expiry в кэшах; отсутствие автономного crisis disposition; сохранение версии инструмента/возрастной применимости; подтверждённая adult handover. Открыты клиническая проверка инструментов, региональные политики доступа и фактическое покрытие экстренных маршрутов.
