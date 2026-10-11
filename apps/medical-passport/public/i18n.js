import { productStrings } from "./product-i18n.js";
import { pharmacyStrings } from "./pharmacy-i18n.js";
export const strings = {
  imaging: ["Medical imaging", "Медицинские исследования"],
  search: ["Search", "Поиск"],
  navPassport: ["Passport", "Паспорт"],
  navProfile: ["Profile", "Профиль"],
  navAI: ["AI", "AI"],
  navQR: ["QR", "QR"],
  skip: ["Skip to content", "К содержимому"],
  home: ["Home", "Главная"],
  passport: ["Medical passport", "Медицинский паспорт"],
  records: ["Medical timeline", "История здоровья"],
  medication: ["Medications", "Лекарства"],
  allergy: ["Allergies", "Аллергии"],
  documents: ["Documents", "Документы"],
  qr: ["QR access", "QR-доступ"],
  emergency: ["Emergency / SOS", "Экстренная помощь"],
  assistant: ["AI assistant", "AI-ассистент"],
  profile: ["Profile & settings", "Профиль и настройки"],
  doctor: ["Doctor workspace", "Кабинет врача"],
  condition: ["Conditions", "Состояния"],
  observation: ["Observations", "Наблюдения"],
  vaccination: ["Vaccinations", "Вакцинации"],
  brand: ["Medical Passport", "Медицинский паспорт"],
  alpha: [
    "Alpha 0.2 · fictional adult data only",
    "Alpha 0.2 · только вымышленные данные взрослых",
  ],
  local: ["Local synthetic workspace", "Локальная синтетическая среда"],
  welcome: ["Your health, in one place.", "Ваше здоровье — в одном месте."],
  intro: [
    "Keep important information close. Share only what you choose.",
    "Храните важные сведения рядом. Делитесь только тем, что выбрали.",
  ],
  signin: ["Sign in", "Войти"],
  signup: ["Create a passport", "Создать паспорт"],
  recover: ["Recover access", "Восстановить доступ"],
  email: ["Email", "Email"],
  password: ["Password", "Пароль"],
  passwordHelp: ["12–128 characters", "12–128 символов"],
  name: ["Name", "Имя"],
  synthetic: [
    "I will use fictional data only",
    "Я использую только вымышленные данные",
  ],
  adult: ["This is an adult profile", "Это профиль совершеннолетнего"],
  recoveryCode: [
    "Recovery code from local operator",
    "Код восстановления от локального оператора",
  ],
  logout: ["Sign out", "Выйти"],
  logoutConfirm: [
    "Sign out and clear this screen?",
    "Выйти и очистить данные на экране?",
  ],
  language: ["Language", "Язык"],
  notifications: ["Access activity", "История доступа"],
  menu: ["Open menu", "Открыть меню"],
  close: ["Close", "Закрыть"],
  cancel: ["Cancel", "Отмена"],
  save: ["Save changes", "Сохранить"],
  add: ["Add", "Добавить"],
  edit: ["Edit", "Изменить"],
  view: ["View", "Открыть"],
  history: ["History", "История"],
  archive: ["Archive", "В архив"],
  archiveConfirm: [
    "Archive this item? Its history is retained; it will no longer appear in active sharing.",
    "Архивировать запись? История сохранится, запись исчезнет из активного доступа.",
  ],
  revoke: ["Revoke access", "Отозвать доступ"],
  revokeConfirm: [
    "Revoke this access now? New requests will be denied.",
    "Отозвать доступ сейчас? Новые запросы будут запрещены.",
  ],
  confirm: ["Confirm", "Подтвердить"],
  saved: ["Changes saved", "Изменения сохранены"],
  created: ["Created successfully", "Успешно создано"],
  loading: ["Loading…", "Загрузка…"],
  saving: ["Saving…", "Сохранение…"],
  retry: ["Try again", "Повторить"],
  back: ["Back", "Назад"],
  next: ["Next page", "Следующая страница"],
  previous: ["Previous page", "Предыдущая страница"],
  active: ["Active", "Активно"],
  archived: ["Archived", "В архиве"],
  expired: ["Expired", "Истекло"],
  revoked: ["Revoked", "Отозвано"],
  used: ["Used", "Использовано"],
  unknown: ["Not recorded", "Не указано"],
  reported: ["Patient reported", "Со слов пациента"],
  verified: ["Clinician verified", "Подтверждено врачом"],
  imported: ["Imported", "Импортировано"],
  inferred: ["AI inferred", "Предположение AI"],
  critical: ["Critical", "Критично"],
  mild: ["Mild", "Лёгкая"],
  moderate: ["Moderate", "Умеренная"],
  severe: ["Severe", "Тяжёлая"],
  not_assessed: ["Not assessed", "Не оценено"],
  no_known_allergy: [
    "No known allergy reported",
    "Сообщено об отсутствии известных аллергий",
  ],
  stopped: ["Stopped", "Прекращено"],
  source: ["Source", "Источник"],
  date: ["Date", "Дата"],
  status: ["Status", "Статус"],
  version: ["Version", "Версия"],
  verification: ["Verification", "Подтверждение"],
  greeting: ["Your personal health space", "Ваше пространство здоровья"],
  overview: ["A clear view of what matters", "Главное — перед вами"],
  quick: ["Quick actions", "Быстрые действия"],
  showQR: ["Share with a doctor", "Поделиться с врачом"],
  askAI: ["Prepare with AI", "Подготовиться с AI"],
  sos: ["SOS / Emergency", "SOS / Экстренная помощь"],
  sosHelp: ["Open your emergency summary", "Открыть экстренные сведения"],
  qrHelp: ["Choose a recipient and scope", "Выбрать получателя и разделы"],
  aiHelp: ["Review context and questions", "Обзор сведений и вопросов"],
  recent: ["Recent medical activity", "Последние записи"],
  latestDocs: ["Latest documents", "Последние документы"],
  accessActivity: ["Access activity", "История доступа"],
  allRecords: ["Open timeline", "Открыть историю"],
  nothing: ["Nothing here yet", "Пока ничего нет"],
  emptyRecords: [
    "Add your first record to build your health history.",
    "Добавьте первую запись в историю здоровья.",
  ],
  emptyMeds: ["No medications added yet", "Лекарства пока не добавлены"],
  emptyAllergies: ["No allergies recorded yet", "Аллергии пока не записаны"],
  absence: [
    "Missing records do not mean absence of allergies or conditions.",
    "Отсутствие записей не означает отсутствие аллергий или заболеваний.",
  ],
  emptyDocs: [
    "Keep your important documents together",
    "Соберите важные документы в одном месте",
  ],
  emptyGrants: [
    "You control who can see your passport",
    "Вы решаете, кто увидит ваш паспорт",
  ],
  emptyAccess: ["No access events yet", "Событий доступа пока нет"],
  unverified: [
    "Reported information is not a verified diagnosis or prescription.",
    "Сообщённые сведения не являются подтверждённым диагнозом или назначением.",
  ],
  criticalWarning: [
    "Critical allergy reported — review before sharing",
    "Сообщена критичная аллергия — проверьте сведения перед передачей",
  ],
  personal: ["Personal information", "Личные данные"],
  blood: ["Blood group / Rh", "Группа крови / Rh"],
  birth: ["Date of birth", "Дата рождения"],
  age: ["years", "лет"],
  country: ["Country", "Страна"],
  contacts: ["Emergency contacts", "Экстренные контакты"],
  instructions: ["Special instructions", "Особые инструкции"],
  donor: ["Donor information (optional)", "Донорство (необязательно)"],
  addAllergy: ["Add allergy", "Добавить аллергию"],
  addMedication: ["Add medication", "Добавить лекарство"],
  addRecord: ["Add record", "Добавить запись"],
  substance: ["Substance", "Вещество"],
  reaction: ["Reaction", "Реакция"],
  severity: ["Severity", "Тяжесть"],
  dose: ["Reported dose", "Указанная доза"],
  frequency: ["Frequency", "Частота"],
  route: ["Route", "Способ приёма"],
  start: ["Start date", "Дата начала"],
  end: ["End date", "Дата окончания"],
  notes: ["Notes", "Примечание"],
  recordType: ["Record type", "Тип записи"],
  stop: ["Stop / archive", "Прекратить / архивировать"],
  patientOnly: [
    "Edits remain patient-reported and preserve earlier versions.",
    "Изменения остаются сведениями со слов пациента; прежние версии сохраняются.",
  ],
  upload: ["Upload document", "Загрузить документ"],
  drop: [
    "Drop a file here or choose a file",
    "Перетащите файл сюда или выберите его",
  ],
  choose: ["Choose file", "Выбрать файл"],
  fileHelp: [
    "PDF or TXT · configured size policy · fictional data only",
    "PDF или TXT · настраиваемая политика размера · только вымышленные данные",
  ],
  fileWarning: [
    "Files are not malware-scanned. PDF preview is unavailable; download to a trusted viewer.",
    "Файлы не проверены антивирусом. Предпросмотр PDF недоступен; скачайте в доверенную программу.",
  ],
  documentType: ["Document type", "Тип документа"],
  description: ["Description", "Описание"],
  download: ["Download", "Скачать"],
  preview: ["Preview text", "Просмотреть текст"],
  medical_document: ["Medical document", "Медицинский документ"],
  lab: ["Lab result", "Результат анализа"],
  report: ["Medical report", "Заключение"],
  prescription: ["Prescription document", "Документ назначения"],
  emergencyIntro: [
    "Important information, easy to find",
    "Важные сведения — сразу перед глазами",
  ],
  emergencyNotice: [
    "This screen does not call emergency services. In immediate danger, contact your local emergency service.",
    "Этот экран не вызывает скорую помощь. При непосредственной опасности свяжитесь с местной экстренной службой.",
  ],
  emergencyPermission: [
    "Sharing requires a signed-in, explicitly selected doctor. No public access or blanket bypass.",
    "Для доступа нужен вход выбранного врача и ваше разрешение. Открытого доступа без проверки нет.",
  ],
  editEmergency: ["Edit emergency profile", "Изменить экстренный профиль"],
  emergencyView: ["Emergency view", "Экстренные сведения"],
  majorConditions: ["Major conditions", "Основные состояния"],
  bloodGroup: ["Blood group", "Группа крови"],
  rh: ["Rh factor", "Резус-фактор"],
  who: ["1 · Who gets access", "1 · Кому открыть доступ"],
  what: ["2 · What they can see", "2 · Какие разделы доступны"],
  howlong: ["3 · For how long", "3 · На какой срок"],
  why: ["4 · Purpose", "4 · Цель"],
  recipient: ["Doctor", "Врач"],
  noDoctors: [
    "No synthetic doctor has been provisioned. A local operator can create one using the app README.",
    "Тестовый врач ещё не создан. Локальный оператор может создать его по инструкции приложения.",
  ],
  once: ["One request", "Один запрос"],
  "1h": ["1 hour", "1 час"],
  "24h": ["24 hours", "24 часа"],
  "7d": ["7 days", "7 дней"],
  duration: ["Duration", "Срок"],
  purpose: ["Purpose", "Цель"],
  review: ["Passport review", "Просмотр паспорта"],
  generate: ["Generate QR", "Создать QR"],
  shareTitle: ["Ready to share", "Готово к передаче"],
  copy: ["Copy link", "Копировать ссылку"],
  share: ["Share", "Поделиться"],
  copied: ["Link copied", "Ссылка скопирована"],
  expiresIn: ["Time remaining", "Осталось времени"],
  saveLink: [
    "Save this link now. It cannot be retrieved later.",
    "Сохраните ссылку сейчас. Позже восстановить её нельзя.",
  ],
  localQR: [
    "Local preview: this link works on this computer only.",
    "Локальная версия: ссылка работает только на этом компьютере.",
  ],
  onceHelp: [
    "One request opens the passport OR downloads one document. Opening a passport consumes the one-time grant.",
    "Один запрос открывает паспорт ИЛИ скачивает один документ. Просмотр паспорта использует одноразовое разрешение.",
  ],
  scopeHelp: [
    "Sharing includes current and later active records in the selected sections.",
    "Доступ включает текущие и новые активные записи выбранных разделов.",
  ],
  accessToken: ["QR link or access token", "Ссылка QR или токен доступа"],
  documentId: [
    "Document ID for direct one-time download (optional)",
    "ID документа для прямого одноразового скачивания (необязательно)",
  ],
  openAccess: ["Check access & open", "Проверить доступ и открыть"],
  accessPrompt: [
    "A patient’s permission opens the right information.",
    "Разрешение пациента открывает только нужные сведения.",
  ],
  scope: ["Allowed sections", "Разрешённые разделы"],
  patient: ["Patient", "Пациент"],
  expires: ["Expires", "Действует до"],
  sharedVia: ["Shared via QR", "Доступ через QR"],
  refreshAccess: ["Check again", "Проверить снова"],
  accessExpired: ["This access has expired", "Срок доступа истёк"],
  accessRevoked: ["The patient revoked this access", "Пациент отозвал доступ"],
  accessUsed: [
    "This one-time access has already been used",
    "Одноразовый доступ уже использован",
  ],
  accessDenied: [
    "This access is not available to your account",
    "Этот доступ недоступен вашему аккаунту",
  ],
  requestNew: [
    "Ask the patient for a new permission. Previously delivered data cannot be recalled.",
    "Попросите пациента выдать новое разрешение. Уже переданные данные невозможно отозвать.",
  ],
  aiTitle: [
    "Prepare for a better conversation",
    "Подготовьтесь к разговору с врачом",
  ],
  aiNotice: [
    "Prototype · deterministic context assistant, not a generative AI model. No diagnosis, prescribing or dose changes.",
    "Прототип · детерминированный обзор контекста, не генеративная AI-модель. Без диагностики, назначений и изменения доз.",
  ],
  aiContext: [
    "Using your own reported passport context",
    "Используются сведения вашего паспорта",
  ],
  aiMedication: ["Explain my medication", "Объяснить сведения о лекарстве"],
  aiDocument: ["Explain this document", "Объяснить документ"],
  aiQuestions: ["Prepare questions for my doctor", "Подготовить вопросы врачу"],
  aiTravel: [
    "What should I show a doctor abroad?",
    "Что показать врачу за границей?",
  ],
  message: ["Your question", "Ваш вопрос"],
  send: ["Send", "Отправить"],
  aiReply: [
    "I can organize recorded information, but cannot interpret treatment or diagnose. Ask your doctor to confirm medication names, doses, allergies and missing records. For documents, review the original with a qualified professional.",
    "Я могу упорядочить записанные сведения, но не интерпретировать лечение и не ставить диагноз. Попросите врача проверить названия и дозы лекарств, аллергии и недостающие записи. Документы обсуждайте в оригинале с квалифицированным специалистом.",
  ],
  aiSources: ["Context records", "Записи контекста"],
  aiEmergency: [
    "If there is immediate danger, contact local emergency services now. Do not wait for this prototype assistant.",
    "При непосредственной опасности немедленно свяжитесь с местной экстренной службой. Не ждите ответа этого прототипа.",
  ],
  dateRangeError: [
    "End date must be on or after the start date.",
    "Дата окончания должна быть не раньше даты начала.",
  ],
  errorTitle: ["Something needs your attention", "Нужно ваше внимание"],
  network: [
    "Connection unavailable. Check your network and try again.",
    "Нет соединения. Проверьте подключение и повторите.",
  ],
  server: [
    "The service could not complete this request. Try again.",
    "Сервис не смог выполнить запрос. Повторите попытку.",
  ],
  invalid: ["Check the highlighted fields.", "Проверьте выделенные поля."],
  required: ["This field is required", "Обязательное поле"],
  loginError: ["Check your email and password.", "Проверьте email и пароль."],
  sessionExpired: [
    "Your session ended. Please sign in again.",
    "Сессия завершена. Войдите снова.",
  ],
  forbidden: [
    "This action is not available to your account.",
    "Это действие недоступно вашему аккаунту.",
  ],
  conflict: [
    "This record changed. Reload it before saving.",
    "Запись изменилась. Обновите её перед сохранением.",
  ],
  uploadError: [
    "Choose a valid PDF or TXT file configured size policy.",
    "Выберите корректный PDF или TXT настраиваемая политика размера.",
  ],
  tryLater: [
    "Too many attempts. Try again in a minute.",
    "Слишком много попыток. Повторите через минуту.",
  ],
  scopeError: [
    "Select at least one section. Emergency purpose allows only the emergency profile.",
    "Выберите хотя бы один раздел. Экстренная цель допускает только экстренный профиль.",
  ],
  dateError: [
    "Enter a valid date. The profile must belong to an adult.",
    "Введите корректную дату. Профиль должен принадлежать взрослому.",
  ],
  recoveryError: [
    "Recovery code is invalid or expired.",
    "Код восстановления неверен или просрочен.",
  ],
  emailTaken: [
    "This email is unavailable. Sign in or choose another one.",
    "Этот email недоступен. Войдите или выберите другой.",
  ],
  fileSelected: ["Selected file", "Выбранный файл"],
  all: ["All", "Все"],
  clear: ["Clear", "Очистить"],
  newPassword: ["New password", "Новый пароль"],
  securityNote: [
    "Sharing, expiry and revocation are checked by the server.",
    "Получатель, срок и отзыв проверяются сервером.",
  ],
  sectionCount: ["records", "записей"],
  SCREEN_READ: ["Passport section opened", "Открыт раздел паспорта"],
  GRANT_REVOKED: ["Access revoked", "Доступ отозван"],
  SHARED_PASSPORT_READ: [
    "Doctor opened shared passport",
    "Врач открыл разрешённые сведения",
  ],
  SHARED_DOCUMENT_READ: [
    "Doctor downloaded a document",
    "Врач скачал документ",
  ],
  EMERGENCY_ACCESS: [
    "Emergency information opened",
    "Открыты экстренные сведения",
  ],
  ACCESS_STATUS_CHECK: ["Access status checked", "Проверен статус доступа"],
};
Object.assign(strings, productStrings, pharmacyStrings);
strings.alpha = [
  "Alpha 0.4 · fictional adult data only",
  "Alpha 0.4 · только вымышленные данные взрослых",
];
export function translate(key, locale = "ru") {
  return strings[key]?.[locale === "en" ? 0 : 1] ?? key;
}
export const errorKeys = {
  INVALID_CREDENTIALS: "loginError",
  AUTHENTICATION_FAILED: "cloudLoginError",
  UNAUTHENTICATED: "sessionExpired",
  INVALID_CSRF: "sessionExpired",
  PATIENT_ONLY: "forbidden",
  INVALID_ORIGIN: "forbidden",
  INVALID_HOST: "forbidden",
  ROLE_SELF_ASSIGNMENT_FORBIDDEN: "forbidden",
  VERSION_CONFLICT: "conflict",
  RECORD_ARCHIVED: "conflict",
  INVALID_DOCUMENT: "uploadError",
  BODY_TOO_LARGE: "uploadError",
  TRY_LATER: "tryLater",
  INVALID_SCOPE: "scopeError",
  INVALID_GRANT: "scopeError",
  INVALID_RECIPIENT: "noDoctors",
  INVALID_DATE_RANGE: "dateRangeError",
  INVALID_DATE: "dateError",
  ADULT_PROFILE_REQUIRED: "dateError",
  INVALID_RECOVERY: "recoveryError",
  ACCOUNT_UNAVAILABLE: "emailTaken",
  PASSWORD_12_TO_128_CHARACTERS: "passwordHelp",
  NOT_FOUND: "accessDenied",
  ACCESS_NOT_AUTHORIZED: "accessDenied",
};

Object.assign(errorKeys, {
  INVALID_SCHEDULE: "scheduleError",
  SCHEDULE_CONFIRM_REQUIRED: "scheduleError",
  INVALID_TIMEZONE: "scheduleError",
  DOSE_ALREADY_RESOLVED: "doseResolved",
  DOSE_NOT_DUE: "doseNotDue",
  REMINDER_DISABLED: "reminderDisabled",
  SCHEDULE_OUTSIDE_RECORD: "scheduleBounds",
});

Object.assign(strings, {
  imaging: ["Medical imaging", "Исследования"],
  observation: ["Laboratory", "Лаборатория"],
  "medication-detail": ["Medication details", "Карточка препарата"],
  health: ["Health", "Здоровье"],
  imagingImported: ["Imaging imported", "Исследование импортировано"],
  imagingOpened: ["Doctor opened imaging", "Врач открыл снимок"],
});

Object.assign(strings, {
  care: ["Care", "Приёмы"],
  guidelines: ["Guidelines", "Рекомендации"],
  planned: ["Planned", "Запланировано"],
  attended: ["Attended", "Состоялся"],
  cancelled: ["Cancelled", "Отменён"],
  appointmentReminder: ["Upcoming appointment", "Предстоящий приём"],
});

Object.assign(strings, {
  clinicalName: ["Name / test", "Название / анализ"],
  normal: ["Within reported range", "В пределах указанного диапазона"],
  low: ["Low (source flag)", "Ниже (отметка источника)"],
  high: ["High (source flag)", "Выше (отметка источника)"],
  resolved: ["Resolved", "Разрешено"],
  remission: ["Remission", "Ремиссия"],
  uploadUnsupported: [
    "This file representation is not supported; the source was not imported.",
    "Представление файла не поддержано; исходник не импортирован.",
  ],
  uploadIntegrity: [
    "File integrity check failed. Select the original file and retry.",
    "Контрольная сумма не совпала. Выберите исходный файл и повторите.",
  ],
  uploadQuota: [
    "This upload exceeds the configured file or storage policy.",
    "Загрузка превышает настроенный лимит файла или хранилища.",
  ],
});
Object.assign(errorKeys, {
  DICOM_TRANSFER_SYNTAX_UNSUPPORTED: "uploadUnsupported",
  DICOM_UNDEFINED_LENGTH_UNSUPPORTED: "uploadUnsupported",
  DICOM_PART10_REQUIRED: "uploadUnsupported",
  CONTENT_SIGNATURE_MISMATCH: "uploadUnsupported",
  FILE_CHECKSUM_MISMATCH: "uploadIntegrity",
  CHUNK_CHECKSUM_MISMATCH: "uploadIntegrity",
  RESUME_FILE_MISMATCH: "uploadIntegrity",
  FILE_SIZE_POLICY: "uploadQuota",
  STORAGE_QUOTA: "uploadQuota",
  CHUNK_SIZE_POLICY: "uploadQuota",
});

// Credential rejection must not reveal whether an account exists.
Object.assign(strings, {
  cloudLoginError: [
    "Unable to sign in. Check your email and password or recover access.",
    "Не удалось войти. Проверьте email и пароль или восстановите доступ.",
  ],
});

Object.assign(strings, {
  cloudRecoveryHelp: [
    "We will email you a Supabase recovery link. Open the newest email to set a new password.",
    "Мы отправим ссылку восстановления Supabase. Откройте последнее письмо, чтобы задать новый пароль.",
  ],
  cloudRecoverySent: [
    "If recovery is available for this address, an email will arrive. Open the newest recovery email.",
    "Если восстановление для этого адреса доступно, придёт письмо. Откройте последнее письмо восстановления.",
  ],
  cloudRecoveryInvalid: [
    "This recovery link is invalid, expired or already used. Request a new email below.",
    "Ссылка восстановления недействительна, просрочена или уже использована. Запросите новое письмо ниже.",
  ],
});
Object.assign(errorKeys, {
  RECOVERY_LINK_INVALID: "cloudRecoveryInvalid",
  PASSWORD_INVALID: "passwordHelp",
});

Object.assign(strings, {
  cloudUploadFormat: [
    "This file format is not supported. Choose one of the formats listed above.",
    "Этот формат файла не поддерживается. Выберите один из форматов, указанных выше.",
  ],
  cloudUploadTooLarge: [
    "This file exceeds the displayed size limit. Choose a smaller file.",
    "Размер файла превышает указанный лимит. Выберите файл меньшего размера.",
  ],
});
Object.assign(errorKeys, {
  UNSUPPORTED_FILE_TYPE: "cloudUploadFormat",
  FILE_TOO_LARGE: "cloudUploadTooLarge",
});

// Cloud assistant modes and actionable errors; no provider response bodies.
Object.assign(strings, {
  "aiTitle": [
    "Your medical passport assistant",
    "Ассистент медицинского паспорта"
  ],
  "aiBoundary": [
    "Answers can explain recorded information and general medical concepts. They do not replace a clinician or authorize treatment changes.",
    "Ответы помогают разобраться в записях и общих медицинских понятиях. Они не заменяют врача и не разрешают менять лечение."
  ],
  "aiModeLive": [
    "Generative AI is connected. Check answers against the original sources.",
    "Генеративный ИИ подключён. Проверяйте ответы по оригинальным источникам."
  ],
  "aiModeDeterministic": [
    "Recorded-data overview mode. A generative AI model is not used.",
    "Режим обзора записанных данных. Генеративная модель не используется."
  ],
  "aiModeDisabled": [
    "Generative AI is disabled. Paid calls have not been authorized.",
    "Генеративный ИИ выключен. Платные вызовы не разрешены."
  ],
  "aiModeUnavailable": [
    "The AI provider is temporarily unavailable. Your saved history is retained.",
    "AI-провайдер временно недоступен. Сохранённая история остаётся доступной."
  ],
  "aiModeBudgetExceeded": [
    "The approved AI usage limit has been reached. No new paid request will be made.",
    "Достигнут утверждённый лимит использования ИИ. Новые платные запросы не выполняются."
  ],
  "aiStorageUnavailable": [
    "Cloud conversation storage is not configured yet. You can still use the passport and SOS sections.",
    "Облачное хранение диалогов пока не настроено. Паспорт и раздел SOS остаются доступны."
  ],
  "aiConversations": [
    "Saved conversations",
    "Сохранённые диалоги"
  ],
  "aiChooseConversation": [
    "Choose a conversation",
    "Выберите диалог"
  ],
  "aiNewConversation": [
    "New conversation",
    "Новый диалог"
  ],
  "aiDeleteConversation": [
    "Delete conversation",
    "Удалить диалог"
  ],
  "aiDeleteConfirm": [
    "Delete this conversation and its messages?",
    "Удалить этот диалог и все его сообщения?"
  ],
  "aiWaiting": [
    "Waiting for an answer…",
    "Ожидаем ответ…"
  ],
  "aiPendingRetry": [
    "The request is not confirmed. Retry resends the same request, without creating a duplicate.",
    "Выполнение запроса не подтверждено. Повторная попытка отправит тот же запрос без создания дубликата."
  ],
  "aiSummary": [
    "Summarize my recorded medical history",
    "Кратко изложи мою записанную медицинскую историю"
  ],
  "aiLab": [
    "Explain my recorded laboratory results",
    "Объясни мои записанные результаты анализов"
  ],
  "aiDisabledError": [
    "AI is not enabled for this environment. No paid call was made.",
    "ИИ не включён для этого окружения. Платный вызов не выполнялся."
  ],
  "aiUnavailableError": [
    "The AI service is temporarily unavailable. Retry this request later.",
    "AI-сервис временно недоступен. Повторите этот запрос позже."
  ],
  "aiLimitError": [
    "The approved AI usage limit has been reached. Try again when the limit renews.",
    "Достигнут утверждённый лимит ИИ. Повторите после обновления лимита."
  ],
  "aiBusyError": [
    "Another answer is being prepared for this conversation. Wait and retry.",
    "Для этого диалога уже готовится ответ. Подождите и повторите."
  ],
  "aiInvalidResponse": [
    "The assistant returned an invalid response. No substitute answer is shown.",
    "Ассистент вернул некорректный ответ. Подставной ответ не отображается."
  ]
});
Object.assign(errorKeys, {
  "AI_DISABLED": "aiDisabledError",
  "AI_CONFIGURATION_REQUIRED": "aiDisabledError",
  "AI_STORAGE_UNAVAILABLE": "aiStorageUnavailable",
  "AI_PROVIDER_UNAVAILABLE": "aiUnavailableError",
  "AI_PROVIDER_TIMEOUT": "aiUnavailableError",
  "AI_RESPONSE_INVALID": "aiInvalidResponse",
  "AI_BUDGET_EXCEEDED": "aiLimitError",
  "AI_RATE_LIMITED": "tryLater",
  "AI_CONCURRENCY_LIMIT": "aiBusyError",
  "AI_CONVERSATION_BUSY": "aiBusyError",
  "AI_REQUEST_PENDING": "aiBusyError"
});

Object.assign(strings, {
  "aiInputLimit": [
    "This question or conversation is too long. Shorten it or start a new conversation.",
    "Вопрос или диалог слишком длинный. Сократите вопрос или начните новый диалог."
  ],
  "aiReconciliation": [
    "The provider may have processed this request, but its outcome is not confirmed. No new chargeable attempt will be made until it is reconciled.",
    "Провайдер мог обработать запрос, но результат пока не подтверждён. Новый платный вызов будет заблокирован до сверки."
  ],
  "aiConversationMissing": [
    "This conversation is unavailable to your account. Choose another conversation.",
    "Этот диалог недоступен вашему аккаунту. Выберите другой диалог."
  ],
  "aiLimitError": [
    "The approved AI usage limit has been reached. New paid requests are paused.",
    "Достигнут утверждённый лимит ИИ. Новые платные запросы приостановлены."
  ]
});
Object.assign(errorKeys, {
  "AI_NOT_CONFIGURED": "aiDisabledError",
  "AI_CONFIGURATION_INVALID": "aiDisabledError",
  "AI_STORAGE_NOT_CONFIGURED": "aiStorageUnavailable",
  "AI_STORE_REQUIRED": "aiStorageUnavailable",
  "AI_STORE_RESPONSE_INVALID": "aiUnavailableError",
  "AI_STORE_REJECTED": "aiUnavailableError",
  "AI_INPUT_INVALID": "invalid",
  "AI_INPUT_LIMIT": "aiInputLimit",
  "AI_HISTORY_LIMIT": "aiInputLimit",
  "AI_INVALID_ID": "invalid",
  "AI_CONVERSATION_LIMIT": "aiLimitError",
  "AI_CONVERSATION_NOT_FOUND": "aiConversationMissing",
  "AI_PROVIDER_RATE_LIMITED": "tryLater",
  "AI_PROVIDER_RATE_LIMIT": "tryLater",
  "AI_CIRCUIT_OPEN": "aiUnavailableError",
  "AI_BUSY": "aiBusyError",
  "AI_RECONCILIATION_REQUIRED": "aiReconciliation",
  "AI_VERSION_CONFLICT": "conflict",
  "AI_REQUEST_CONFLICT": "conflict",
  "AI_CONTEXT_CHANGED": "conflict",
  "AI_INVALID_RESPONSE": "aiInvalidResponse",
  "AI_SOURCE_INVALID": "aiInvalidResponse",
  "AI_UNSAFE_RESPONSE": "aiInvalidResponse",
  "AI_USAGE_UNKNOWN": "aiReconciliation"
});

Object.assign(strings, {
  "aiTransient": [
    "This response is temporary and is not saved in conversation history.",
    "Этот ответ временный и не сохраняется в истории диалога."
  ]
});

Object.assign(strings, {
  "qrClinicalObservations": [
    "Clinical results",
    "Клинические результаты"
  ],
  "qrScopeUnavailable": [
    "Not connected in cloud Preview",
    "Не подключено в облачном Preview"
  ],
  "qrDocumentBoundary": [
    "Cloud QR can share authorized clinical records. Sharing original documents, imaging files and specialized reports is not connected yet.",
    "Облачный QR может передавать разрешённые клинические записи. Передача оригиналов документов, снимков и специализированных отчётов пока не подключена."
  ],
  "qrNotConfigured": [
    "Cloud QR is not configured in this Preview yet. No access permission has been issued.",
    "Облачный QR пока не настроен в этом Preview. Разрешение на доступ не выдано."
  ],
  "qrDocumentsUnavailable": [
    "Sharing these documents or imaging files is not available in cloud Preview. Select supported clinical sections.",
    "Передача этих документов или снимков недоступна в облачном Preview. Выберите поддерживаемые клинические разделы."
  ],
  "qrRecipientError": [
    "Choose a verified clinician from the available directory.",
    "Выберите подтверждённого врача из доступного каталога."
  ],
  "qrGrantError": [
    "Check the access duration, purpose and selected sections. Emergency access permits only the emergency profile.",
    "Проверьте срок, цель и выбранные разделы. Экстренный доступ разрешает только экстренный профиль."
  ]
});
Object.assign(errorKeys, {
  "QR_NOT_CONFIGURED": "qrNotConfigured",
  "CLOUD_QR_DOCUMENT_SHARING_UNAVAILABLE": "qrDocumentsUnavailable",
  "INVALID_RECIPIENT": "qrRecipientError",
  "INVALID_SCOPE": "scopeError",
  "INVALID_GRANT": "qrGrantError"
});

Object.assign(strings, {
  aiHistoryLimited: ["Only the latest 40 messages are displayed. Earlier messages remain saved; loading them is not available yet.", "Показаны только последние 40 сообщений. Более ранние сообщения сохранены; их загрузка пока недоступна."]
});

Object.assign(strings, {
  "nutrition": [
    "Nutrition · measurements",
    "Питание · измерения"
  ],
  "nutritionWeight": [
    "Weight (kg)",
    "Масса тела (кг)"
  ],
  "nutritionHeight": [
    "Height (cm)",
    "Рост (см)"
  ],
  "nutritionWaist": [
    "Waist circumference (cm)",
    "Окружность талии (см)"
  ],
  "nutritionAdd": [
    "Add a measurement",
    "Добавить измерение"
  ],
  "nutritionMeasurement": [
    "Measurement",
    "Показатель"
  ],
  "nutritionValue": [
    "Reported value",
    "Записанное значение"
  ],
  "nutritionMeasuredAt": [
    "Measured at",
    "Время измерения"
  ],
  "nutritionTimeUTC": [
    "Measurement time in UTC (e.g. 2026-10-12T09:00:00Z)",
    "Время измерения UTC (например, 2026-10-12T09:00:00Z)"
  ],
  "nutritionMethod": [
    "How was this obtained?",
    "Как получено значение?"
  ],
  "nutritionSelfReported": [
    "Reported from memory",
    "Со слов пациента"
  ],
  "nutritionHomeMeasured": [
    "Home measurement",
    "Домашнее измерение"
  ],
  "nutritionSourcePatient": [
    "Patient reported",
    "Сообщено пациентом"
  ],
  "nutritionUnverified": [
    "Not clinician verified",
    "Не подтверждено врачом"
  ],
  "nutritionUnits": [
    "Weight uses kg; height and waist use cm. Use a dot for decimals.",
    "Масса — в кг; рост и талия — в см. Для десятичных дробей используйте точку."
  ],
  "nutritionBoundary": [
    "Record measurements and review their history. Clinical reference ranges, dietary targets and recommendations are not connected. Pediatric feeding and clinical plans are not available here.",
    "Записывайте измерения и просматривайте историю. Клинические нормы, цели питания и рекомендации пока не подключены. Детское вскармливание и лечебные планы в этом разделе недоступны."
  ],
  "nutritionEmpty": [
    "No measurements yet",
    "Измерений пока нет"
  ],
  "nutritionEmptyArchive": [
    "No archived measurements",
    "Архивных измерений нет"
  ],
  "nutritionEmptyHelp": [
    "A missing measurement is not a clinical conclusion.",
    "Отсутствие измерения не является медицинским заключением."
  ],
  "nutritionLegacyWarning": [
    "This existing record does not match the measurement format. Its original values and history remain available.",
    "Эта существующая запись не соответствует формату измерения. Исходные значения и история сохранены."
  ],
  "nutritionInvalid": [
    "Check the measurement, unit, positive numeric value and valid UTC time. Only patient-reported methods are available.",
    "Проверьте показатель, единицу, положительное число и корректное время UTC. Доступны только сведения, сообщённые пациентом."
  ],
  "nutritionLoadedCount": [
    "Loaded measurements",
    "Загруженные измерения"
  ]
});
Object.assign(errorKeys, { INVALID_NUTRITION_RECORD: "nutritionInvalid" });

Object.assign(strings, { documentVerificationUnavailable: ["Server file verification is not configured. This upload has not been completed.", "Серверная проверка файлов пока не подключена. Эта загрузка не завершена."] });
Object.assign(errorKeys, { DOCUMENT_VERIFICATION_NOT_CONFIGURED: "documentVerificationUnavailable", UPLOAD_VERIFICATION_REQUIRED: "documentVerificationUnavailable" });
