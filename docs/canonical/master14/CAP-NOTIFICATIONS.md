# CORE-CAP-NOTIFICATIONS — domain notification variants

One existing delivery owner with event-origin variants. No new canonical module; seven source profiles extend the shared notification capability.

Origin services determine clinical/event truth. Notifications owns authorized template rendering, recipient/channel selection, scheduling, attempts and delivery records. Clinical response and acknowledgement remain separate.

This extends MASTER08 sources 21/34 and MASTER12 source 416; their records and requirements remain unchanged.

## Original 107: Reminder Engine

Deliver cross-domain reminders through push, SMS and email. Adds the explicit cross-domain medicine, appointment, vaccination, laboratory, travel and AI recommendation routing matrix to the existing channel/template lifecycle.

## Original 118: Medical Notifications

Present a unified notification inbox for medical, access, AI and emergency events. Preserves QR access, AI alerts and emergency events as separate origin categories. An inbox read state is not human clinical acknowledgement.

## Original 342: Medical Device Notification Center

Notify authorized recipients of device and synchronization events. Preserves low battery, offline, synchronization failure, firmware update and new-measurement events. The device owner determines state; notification never performs a firmware or therapy change.

## Original 367: Laboratory Result Notification Center

Notify recipients of laboratory workflow milestones and critical-result events. Preserves sample received, analysis started, results available and critical result separately. Laboratory authority determines criticality; delivery alone cannot close critical-result escalation.

## Original 756: Pregnancy Notification Center

Deliver pregnancy-context appointment, laboratory, ultrasound and medication reminders. Preserves the four distinct event sources; a pregnancy profile does not duplicate the shared notification lifecycle. Confidential content must be redacted in external previews.

## Original 1025: Pediatric Infection Notification Center

Deliver pediatric infection laboratory, medication, isolation and follow-up notifications. Preserves isolation completion as an externally authorized event, not a timer-derived clearance. Guardian authority and confidential child/adolescent context are checked for each recipient.

## Original 4305: Vaccination Smart Notification Engine

Deliver versioned vaccination-status notifications with jurisdiction and preference context. Preserves upcoming, due soon, due, window ending, overdue, catch-up required and medical review required separately. Immunization/CDS owns those determinations; delivery configuration cannot override clinical windows or invent catch-up rules.

## Migration and acceptance

All nonempty original lines are retained below with per-source line mappings in requirement_migration_delta.json. Delivery, inbox read, human acknowledgement and clinical response are separate states. Test revoked access, stale and duplicate events, wrong recipients, failed channels and redacted previews. No clinical approval or implementation readiness is granted.

<a id="M14-NOTIFY-da910d58c579ff75"></a>
- **M14-NOTIFY-da910d58c579ff75**: # Reminder Engine

<a id="M14-NOTIFY-d7a2add4cd06a8e6"></a>
- **M14-NOTIFY-d7a2add4cd06a8e6**: Medicines

<a id="M14-NOTIFY-bcddbd1b76017ab8"></a>
- **M14-NOTIFY-bcddbd1b76017ab8**: Appointments

<a id="M14-NOTIFY-ca00fc7c0d0e2a70"></a>
- **M14-NOTIFY-ca00fc7c0d0e2a70**: Vaccinations

<a id="M14-NOTIFY-a10a70546ef9f3c2"></a>
- **M14-NOTIFY-a10a70546ef9f3c2**: Laboratory

<a id="M14-NOTIFY-fdb7c739414b8157"></a>
- **M14-NOTIFY-fdb7c739414b8157**: Travel

<a id="M14-NOTIFY-e22fe857a3a17db9"></a>
- **M14-NOTIFY-e22fe857a3a17db9**: AI Recommendations

<a id="M14-NOTIFY-0f5ad7d6e65af38c"></a>
- **M14-NOTIFY-0f5ad7d6e65af38c**: Delivery

<a id="M14-NOTIFY-510a1445ac875884"></a>
- **M14-NOTIFY-510a1445ac875884**: Push

<a id="M14-NOTIFY-88e65e1525989565"></a>
- **M14-NOTIFY-88e65e1525989565**: SMS

<a id="M14-NOTIFY-5e249b74917623fe"></a>
- **M14-NOTIFY-5e249b74917623fe**: Email

<a id="M14-NOTIFY-5ba74d8fcc7b20cc"></a>
- **M14-NOTIFY-5ba74d8fcc7b20cc**: Status

<a id="M14-NOTIFY-d5232cbd3a326267"></a>
- **M14-NOTIFY-d5232cbd3a326267**: Documentation

<a id="M14-NOTIFY-6f33acf3afb37064"></a>
- **M14-NOTIFY-6f33acf3afb37064**: ---

<a id="M14-NOTIFY-f7a04154dc52bf5c"></a>
- **M14-NOTIFY-f7a04154dc52bf5c**: # Notification Center

<a id="M14-NOTIFY-6c2f4d895f25a6d5"></a>
- **M14-NOTIFY-6c2f4d895f25a6d5**: Notifications

<a id="M14-NOTIFY-f8eacbfaa2347a2d"></a>
- **M14-NOTIFY-f8eacbfaa2347a2d**: Doctor Visits

<a id="M14-NOTIFY-2f573c840579b95b"></a>
- **M14-NOTIFY-2f573c840579b95b**: QR Access

<a id="M14-NOTIFY-2befb28f2bb3878c"></a>
- **M14-NOTIFY-2befb28f2bb3878c**: AI Alerts

<a id="M14-NOTIFY-c34462462dc175ea"></a>
- **M14-NOTIFY-c34462462dc175ea**: Emergency Events

<a id="M14-NOTIFY-89caaaba04da196f"></a>
- **M14-NOTIFY-89caaaba04da196f**: # Medical Device Notifications

<a id="M14-NOTIFY-6ddd67a550a74e20"></a>
- **M14-NOTIFY-6ddd67a550a74e20**: Provides notifications related to connected medical devices.

<a id="M14-NOTIFY-4fbeeb87456accf5"></a>
- **M14-NOTIFY-4fbeeb87456accf5**: Supports

<a id="M14-NOTIFY-97143e00bb2b5725"></a>
- **M14-NOTIFY-97143e00bb2b5725**: Low Battery

<a id="M14-NOTIFY-912535a4a7e3d592"></a>
- **M14-NOTIFY-912535a4a7e3d592**: Device Offline

<a id="M14-NOTIFY-cb63e985907e943f"></a>
- **M14-NOTIFY-cb63e985907e943f**: Synchronization Failure

<a id="M14-NOTIFY-d1c10e8e39fa7d04"></a>
- **M14-NOTIFY-d1c10e8e39fa7d04**: Firmware Updates

<a id="M14-NOTIFY-029dd19ca0c75503"></a>
- **M14-NOTIFY-029dd19ca0c75503**: New Measurements

<a id="M14-NOTIFY-4456042f42cf39b4"></a>
- **M14-NOTIFY-4456042f42cf39b4**: # Laboratory Result Notifications

<a id="M14-NOTIFY-891d2d9f385f5f09"></a>
- **M14-NOTIFY-891d2d9f385f5f09**: Provides notifications regarding laboratory examinations.

<a id="M14-NOTIFY-fd48a9ca82c534b6"></a>
- **M14-NOTIFY-fd48a9ca82c534b6**: Sample Received

<a id="M14-NOTIFY-9ebfce6645aba3cf"></a>
- **M14-NOTIFY-9ebfce6645aba3cf**: Analysis Started

<a id="M14-NOTIFY-2ee00e764702536c"></a>
- **M14-NOTIFY-2ee00e764702536c**: Results Available

<a id="M14-NOTIFY-b3f9832849c475fb"></a>
- **M14-NOTIFY-b3f9832849c475fb**: Critical Result Notification

<a id="M14-NOTIFY-f2a1427d4c8ead8e"></a>
- **M14-NOTIFY-f2a1427d4c8ead8e**: Integrated with Medical Passport.

<a id="M14-NOTIFY-f4e5055eed2fb649"></a>
- **M14-NOTIFY-f4e5055eed2fb649**: # Pregnancy Notification Center

<a id="M14-NOTIFY-66ab60fd2ae605d4"></a>
- **M14-NOTIFY-66ab60fd2ae605d4**: Provides reminders.

<a id="M14-NOTIFY-e2b1e6331d9b8c99"></a>
- **M14-NOTIFY-e2b1e6331d9b8c99**: Laboratory Tests

<a id="M14-NOTIFY-9d14aa09e65edcba"></a>
- **M14-NOTIFY-9d14aa09e65edcba**: Ultrasounds

<a id="M14-NOTIFY-3cfa39200ce0ea10"></a>
- **M14-NOTIFY-3cfa39200ce0ea10**: Medication

<a id="M14-NOTIFY-8da5ac137df17104"></a>
- **M14-NOTIFY-8da5ac137df17104**: Notification system.

<a id="M14-NOTIFY-71f790fdf94f9c10"></a>
- **M14-NOTIFY-71f790fdf94f9c10**: Laboratory Results

<a id="M14-NOTIFY-cfe6a25d05cd276d"></a>
- **M14-NOTIFY-cfe6a25d05cd276d**: Medication Reminders

<a id="M14-NOTIFY-a2e50249981ac0d3"></a>
- **M14-NOTIFY-a2e50249981ac0d3**: Isolation Completion

<a id="M14-NOTIFY-4ba2bd68672f5410"></a>
- **M14-NOTIFY-4ba2bd68672f5410**: Follow-up Visits

<a id="M14-NOTIFY-3ab15acd11531fcd"></a>
- **M14-NOTIFY-3ab15acd11531fcd**: Provides personalized vaccination notifications.

<a id="M14-NOTIFY-e8a41ba26751d33f"></a>
- **M14-NOTIFY-e8a41ba26751d33f**: May generate

<a id="M14-NOTIFY-1060aee9db5f0052"></a>
- **M14-NOTIFY-1060aee9db5f0052**: Upcoming Vaccination

<a id="M14-NOTIFY-5dbbf6b0c58e16a8"></a>
- **M14-NOTIFY-5dbbf6b0c58e16a8**: Due Soon

<a id="M14-NOTIFY-77ecfd2a8e9235c0"></a>
- **M14-NOTIFY-77ecfd2a8e9235c0**: Vaccination Due

<a id="M14-NOTIFY-525f0834375517e5"></a>
- **M14-NOTIFY-525f0834375517e5**: Recommended Window Ending

<a id="M14-NOTIFY-60666aa99a7dcb66"></a>
- **M14-NOTIFY-60666aa99a7dcb66**: Overdue Vaccination

<a id="M14-NOTIFY-223f66b5846b763e"></a>
- **M14-NOTIFY-223f66b5846b763e**: Catch-up Required

<a id="M14-NOTIFY-1dec26f0a0ad3059"></a>
- **M14-NOTIFY-1dec26f0a0ad3059**: Medical Review Required

<a id="M14-NOTIFY-83a0658c647ea7d1"></a>
- **M14-NOTIFY-83a0658c647ea7d1**: Notification timing can be configured by jurisdiction and user preferences.
