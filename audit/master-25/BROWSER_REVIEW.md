# MASTER-25 browser review

Agent-operated localhost review, 2026-09-20, synthetic adult fixture. This is recorded manual/agent evidence, not an automated E2E suite. No real clinical data or external provider was used. Screenshots were inspected in the browser session; no screenshot files are claimed in this repository.

## Observed journeys

- Uploaded a 3,680,000-byte UTF-8 fixture through hashing/chunk progress; after login/session renewal the document persisted as v1. This exceeds the old 1 MiB cap.
- Imported a synthetic DICOM Part 10 gradient fixture with explicit patient-binding confirmation. Study/series/instance appeared; viewer rendered the real fixture pixels. Zoom and Window controls responded. Saved a non-diagnostic study note with change reason.
- Created two matching structured synthetic laboratory observations, including value/unit/reference/provider/time. Both persisted and appeared on the trend chart after reload. No clinical interpretation was asserted.
- Created a personal synthetic appointment and saw it on calendar and Home. Label explicitly distinguishes a personal plan from provider booking.
- Saved guideline home=GR, current=DE, care=DE and doctor=unknown with a synthetic source reason; reloaded and observed retained values. Source count remained 0, registry BLOCKED_EXTERNAL, comparison/translation unavailable.
- Existing patient profile and Alpha 0.3 medication/allergy data were retained. Display name was not overwritten.

## Responsive visual inspection

| Size | Screen | Observation |
|---|---|---|
| 390×844 | Labs | No page-wide horizontal overflow; horizontal Health navigation intentional; cards and trend visible; mobile bottom navigation present |
| 430×932 | Home | Compact identity, critical warning, quick actions, current dose content and bottom navigation visible; no page-wide horizontal overflow |
| 768×1024 | Care | Sidebar, top actions, full appointment card and edit/cancel action fit |
| 1366×900 | Imaging / Guidelines | Real pixel viewer with series and controls; two-column guideline context/source view readable; vertical scroll exposes final save action |
| 1920×1080 | Home | Final wide-screen observation recorded in completion pass |

## Scope and limitations

Backend tests cover doctor imaging scope/revocation, vaccination certificate ownership, record history, resumable restart and SQL wildcard escaping. The new doctor imaging path and every condition/vaccination UI permutation were not exhaustively exercised in the browser. Final report must not label all buttons or all browsers universally tested. Native PDF preview, external providers, production scanning/storage and clinical validation remain absent. Historical Alpha 0.2/0.3 evidence is retained separately.

Completion pass: 1920×1080 Home had scrollWidth=1905 within viewport=1920. Browser logs exposed two earlier null selected-file errors from the shared legacy change handler; handler is now scoped to #upload-form and a DOM regression test covers the new uploader event. No claim is made that historical console logs are empty. Temporary viewport override was reset.

Final search journey returned matching own synthetic medication/lab records and documents. Document results had object-specific deep links. Emergency result without a name now falls back to its localized record kind.
