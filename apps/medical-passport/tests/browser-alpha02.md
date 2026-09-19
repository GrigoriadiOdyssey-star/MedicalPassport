# Alpha 0.2 browser acceptance evidence

Observed on 2026-09-18/19 through the Codex in-app Chromium browser, against the running local HTTP server and persisted SQLite database. Only fictional fixtures were used. This is an agent-operated browser check, not a reproducible automated Playwright test suite.

## Functional journey observed

- New synthetic adult registration and empty dashboard; subsequent login and logout confirmation.
- Allergy creation with critical severity, edit to version 2, history showing both versions, archive confirmation and archived view; another active allergy retained for scoped sharing.
- Medication creation with dose/frequency/route, structured display. Active versus stopped behavior additionally asserted in HTTP tests.
- Upload tests/synthetic-document.txt with description, rendered metadata and escaped text preview.
- Dedicated emergency display, edit dialog, save and subsequent view.
- Recipient-bound allergy-only QR created with a countdown; copied link opened by provisioned doctor. Only allergy shown, no medication/document sections.
- Patient revoked grant; doctor retry showed the distinct revoked state and cleared shared data. Expired and already-consumed synthetic fixture grants, plus invalid token, produced distinct expiry/used/unauthorized states. Fixture expired/used conditions were seeded through Store, then checked through UI.
- RU/EN switch; assistant quick prompt produced labelled deterministic response with two context record references. Emergency escalation additionally tested in DOM integration without assistant API calls.
- Restart on continuation retained the fictional profile, medication, allergy, document and emergency data.

## Responsive and accessibility evidence

| Width | Screen / locale | Document scrollWidth |
|---|---|---|
| 390 | Home RU | 375 |
| 390 | Passport RU | 375 |
| 390 | Emergency edit dialog RU | 375 |
| 390 | Profile EN (earlier pass) | 390 |
| 390 | QR EN (earlier pass) | 375 |
| 390 | Medication/Documents EN (earlier pass) | 390 |
| 768 | Home RU and earlier EN | 753 |
| 1366 | Home EN | 1351 |
| 1920 | Passport EN | 1905 |

Widths are CSS pixels; 15px differences reflect the vertical scrollbar. No horizontal overflow in these observations. Screenshots of desktop passport/dashboard, mobile dashboard and emergency dialog were visually inspected. This does not claim every screen/viewport combination.

Mobile profile has an accessible name even with its visual text hidden. Modal focus was inside dialog after opening; Escape closed it without saving. Localized skip link verified after language switch and reload. Final captured browser error log was empty. No formal WCAG, screen-reader or cross-browser certification is claimed.
