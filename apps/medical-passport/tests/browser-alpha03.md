# Alpha 0.3 browser verification — 2026-09-19

Agent-operated real browser, local HTTP server and persisted SQLite; not an automated Playwright E2E suite. Synthetic fixtures only. Existing Alpha 0.2 records remained available after additive migrations. Browser calls used the supported CUA surface.

## Observed journeys

- Patient login: two labelled demo medications, one fictional critical allergy, two TXT documents, emergency profile and active named-recipient grant appear on dashboard.
- Snooze a due dose for ten minutes: Upcoming shows SNOOZED with deferred time. Mark taken: medication history shows TAKEN. A separate due dose was marked skipped.
- Configure medicine B with the twice-daily preset and explicit confirmation: 08:00/20:00 persist without changing the original medication record version.
- Disable System notifications and save/reload: preference persists; Security remains checked and locked.
- QR wizard shows a review step before generation. Allergy-only, one-hour named-doctor access opens only allergy data in the separate doctor workspace, with purpose/scope/remaining time. Patient sees the read audit and notification. Patient revokes; doctor retries the same link and gets revoked-access denial with no medical content.
- Privacy Revoked filter shows the revoked grant and matching access/audit events.
- Upload a synthetic TXT through the file chooser with language en and description. The document and metadata appear, unread count increases. After session expiry, a new login retains the document; text preview displays exactly the fixture content.
- RU/EN switching renders translated product navigation, dashboard and forms.

## Responsive observations

| Viewport | Examined surface | Observation |
|---|---|---|
| 390 x 844 | RU home, schedule dialog | No horizontal overflow; mobile bottom navigation/SOS, visible critical warning; dialog focus retained, interval mode hides daily fields |
| 430 x 932 | RU notifications | Readable filters, cards and actions; no horizontal overflow |
| 768 x 1024 | RU medications | Initial narrow columns corrected to single column; cards approximately 495 px; no horizontal overflow |
| 1366 x 900 | RU dashboard | Sidebar, demographics, critical warning and quick actions readable; scroll width 1351 |
| 1920 x 1080 | EN dashboard | Centered content, readable spacing and controls; scroll width 1905 |

Viewport tests are visual inspection, not a formal human usability study or exhaustive device/browser certification. Native browser notification permission/delivery and external channels were not certified. Full button coverage is not claimed; exercised controls and automated DOM flows are listed above and in tests. No screenshots are claimed as saved artifacts.
