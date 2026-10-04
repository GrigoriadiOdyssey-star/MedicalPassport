# MVP acceptance / gap matrix
Evidence snapshot: 2026-10-04. Cloud runtime and stable SQLite runtime are assessed separately.
Legend: P = implemented with partial verification; B = blocked end-to-end; U = not verified.
For every row, final acceptance requires UI, API, persistence, authorization, audit, tests, E2E, reload persistence, error/empty behavior and security verification. Code existence alone is insufficient.

| Capability | Status | Evidence | Missing acceptance / minimal next action | MVP |
|---|---|---|---|---|
| Identity | PARTIAL | Real login/me/profile 200; revoked-session error fixed; recovery path exists | Same-SHA registration/recovery/logout/session regression completion | Yes |
| Security | PARTIAL | Private buckets; RLS enabled; scoped reads; new Auth failure tests | Full live A/B read/write matrix; password protection setting review | Yes |
| Audit | PARTIAL | /api/audit 200; immutable database/event contracts | Verify recipient use/revoke receipts and A/B audit exclusion | Yes |
| Consent/access | BLOCKED | Grant list/revoke and verified-doctor directory exist | Legacy recipient-bound token lifecycle is not a canonical grant row; implement without conflating contracts | Yes |
| Medical data | PARTIAL | Owner-scoped current records/history and version/archive paths | Same-SHA create/update/archive/reload and foreign-write denial | Yes |
| Profile | PARTIAL | Authenticated profile displays correctly, persisted test account | Complete profile write/reload and two-user isolation | Yes |
| Allergies | PARTIAL | Separate A/B synthetic labels; current passport count | Critical-data provenance and foreign-ID mutations | Yes |
| Medications | PARTIAL | Record and reminder cloud APIs exist | Dose/pause/timezone and reload E2E; no clinical prescribing claim | Yes |
| Labs | PARTIAL | Clinical observation view and laboratory CI job pass | Specialized laboratory/pilot APIs still missing in cloud | Yes |
| Documents | PARTIAL | Own list/versions 200; cross-owner versions 404 both ways | Final-SHA valid image/PDF upload/reopen/foreign-download/write tests; antivirus not provided | Yes |
| QR sharing | BLOCKED | QR page/list/directory displays; no eligible doctor in tested account | Cloud POST /api/grants, single-use token consumption, expiry/revoke/recipient view | Yes |
| Emergency | PARTIAL | Emergency UI and clinical subset present | Complete minimized profile and authorized emergency path; no real emergency integration | Yes |
| Notifications/reminders | PARTIAL | Real /api/notifications 200; failed polling pauses | Delivered/read/dismiss/preferences and dose scenario/reload | Yes |
| Assistant foundation | PARTIAL | Deterministic summary with provenance and disclaimers | Full unsafe/emergency/foreign-data language tests; no generative clinical AI claim | Yes |
| Doctor view | BLOCKED | Verified directory plus existing SQLite clinician implementations | Cloud verified-role/grant-scoped clinical context/notes lifecycle | Yes |
| Translation | BLOCKED | Document UI truthfully says translator not connected; later branch gateway exists | Selective gateway integration with failure/provenance tests and approved local runtime | Yes |
| Pharmacy foundation | BLOCKED | Stable/later-branch models; current cloud UI reaches explicit unavailable error | Migrate foundation contract or label unavailable navigation honestly; no fake live stock | Foundation |
| Insurance foundation | PARTIAL | Stable model/context/counters | Cloud persistence and isolation not demonstrated | Foundation |

## Release gate
0 of these 16 core/extended capabilities is certified complete across all acceptance dimensions in this audit. This means 0 fully certified rows, **not zero implemented functionality**. Do not turn it into a product implementation percentage.

## Priorities
P1: complete genuine QR/recipient contract, complete cloud clinical workspace, final-SHA green CI and full master E2E/A/B.
P2: translation foundation, upload security validation, two FK indexes, leaked-password protection decision, branch reconciliation and retention/backup evidence.
P3: terminology/language consistency and responsive/accessibility completion.
P4: external system integrations and the remaining Product Bible roadmap; do not implement them to inflate MVP numbers.
