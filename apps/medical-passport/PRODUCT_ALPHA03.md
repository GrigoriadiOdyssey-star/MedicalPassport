# Alpha 0.3 product architecture

Scope: local synthetic adult-data alpha. No clinical recommendation, production-readiness or external-delivery certification.

## Notification platform

Migration 004 adds canonical notifications, per-category preferences, medication plans, immutable plan versions and dose slots. Migration 005 distinguishes preference suppression from explicit dismissal. Notifications carry recipient, type, priority, title/message, schedule/delivery/read timestamps, status, channel, source/entity, action route, expiry, creation time, unique delivery key and optional originating audit sequence. User/API fields cannot nominate another recipient.

Lifecycle: SCHEDULED -> QUEUED -> DELIVERED -> READ; eligible medication notifications may be SNOOZED and delivered again. Cancellation and expiry are terminal unless a preference-suppressed pending item is explicitly re-enabled. Dismissed items are never restored by preference changes. FAILED is reserved for future transport failures. IN_APP delivery is a persisted state, not proof that a human saw an alert.

The local worker runs every 30 seconds; relevant authenticated reads also materialize slots. SQLite unique plan/slot and notification keys plus transactions prevent duplicate persisted rows. Restart regression verifies completed actions and delivery keys survive reopening the database. This does not claim external exactly-once delivery. Browser delivery is foreground-only after explicit permission, with generic content; its in-memory seen set resets on a new session. PUSH, EMAIL and SMS adapters are unconnected and visibly labelled; in-app availability is retained. Security notifications cannot be disabled; critical notices cannot be dismissed. Access notifications are generated in the same transaction as the access audit, so notification failure cannot partially consume a one-time grant.

## Medication schedule and factual adherence

Only explicit patient-entered schedules are accepted. Schedules do not derive treatment from free text, change dosage or infer clinical adherence. Each schedule version preserves its actor, medication record/version and configuration. Updating/archiving medication pauses the plan and cancels pending occurrences. Taken/skipped history and immutable schedule versions remain. Daily times, weekdays, custom times and elapsed-hour intervals are supported. Date bounds must fit the medication's declared bounds. Snooze is 5/10/30/60 minutes before the 24-hour expiry; late is an action after 30 minutes, missed is a pending slot after 24 hours. These thresholds are product status definitions, not clinical guidance.

Timezone choice is explicit: home keeps schedules in their existing zone; local reschedules future daily wall times. Elapsed interval schedules preserve their anchor. Editing an interval prepopulates the original anchor in the selected zone. For DST, a nonexistent wall time is skipped and a repeated wall time is materialized once. The interface warns to confirm timing; no silent clinical compensation occurs. History totals cover the selected patient-calendar day range; detail pages are bounded to 300 rows. Notifications and grants use 30-row pages.

## Privacy and UX boundaries

Patient routes reuse authentication, exact Origin and CSRF enforcement. Doctor access rechecks recipient, scope, expiry and revocation at every read. QR review precedes generation. Browser caches contain no persisted health data; preference locale alone uses localStorage. Document language/translation are user-supplied labels, not verified translations; TXT can be previewed, PDF requires download. No external scripts, provider calls, LLM or tracking were added.

Dashboard, medications, access filters, audit activity, settings, sessions and notification center read server state. Pending action buttons are disabled; success follows the server response. No optimistic authorization or dose completion occurs. Blue is the primary UI color, green denotes positive state, red denotes critical/SOS. ECG splash adds no timer delay and respects reduced motion.

Haptic/sound boundary: future feedback adapters must be opt-in, off by default, generic (no health payload), and incapable of changing medical or authorization state. Native audio/haptic adapters are not enabled in this alpha. Appointments, devices, procedures, external document extraction and richer clinical integrations are explicitly unconnected.

The 13 retained strict MASTER-21 runtime tasks, clinical/legal/provider gates, backup/restore design and measured load acceptance remain separate. Local alpha test success does not close canonical-owner production gates.
