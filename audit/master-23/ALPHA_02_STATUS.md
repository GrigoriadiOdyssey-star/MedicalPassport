# Functional Alpha 0.2 — MASTER-23

ALPHA VERSION: 0.2.0
RUNNABLE: YES, local Node 24 + SQLite, http://127.0.0.1:4173

| Capability | Result |
|---|---|
| NAVIGATION | 10 patient screens, desktop sidebar/topbar, mobile bottom navigation + SOS, role-specific doctor workspace |
| DASHBOARD | Name/avatar, available DOB/blood information, critical-allergy warning, quick actions, recent records/documents/access |
| MEDICAL PASSPORT | Structured summaries and working view/edit/add routes |
| ALLERGIES | Add/edit/archive/history; severity, assertion status and source labels |
| MEDICATIONS | Structured schedule fields, calendar-valid ordered dates, active/history views |
| DOCUMENTS | PDF/TXT upload, metadata, TXT preview, download, archive; original bytes retained |
| EMERGENCY / SOS | Dedicated read view and separate edit dialog; no authorization bypass |
| QR ACCESS | Real QR, recipient/scopes/purpose/duration, countdown, copy/share, revoke and status tabs |
| DOCTOR VIEW | Authorized sections only; expired/revoked/used/unauthorized states |
| AI ASSISTANT | Chat UI, quick prompts, context provenance and escalation; explicitly deterministic prototype |
| I18N | Central RU/EN dictionary, live language switching |
| RESPONSIVE | Observed 390/768/1366/1920 widths without horizontal overflow; not every screen/size combination |
| ACCESSIBILITY | Labels, localized skip link, named mobile profile, visible focus, native dialog focus and Escape; no formal certification |
| BACKEND REGRESSION | PASS: 18 original tests retained, additive migration 003 |
| SECURITY REGRESSION | PASS within synthetic alpha tests: recipient, patient, scope, consent, expiry, revoke, one-use atomicity, CSRF and audit rollback |
| UNIT / INTEGRATION TESTS | 32/32 PASS overall: 16 original store/security + 2 original HTTP/restart + 7 UX API/store + 7 frontend unit/DOM |
| E2E TESTS | Real HTTP journey automated; real browser journey agent-operated and recorded, not a committed automated browser suite |
| OLD ONE-PAGE UI REMOVED | YES |

KNOWN UX ISSUES: PDF preview is download-only; avatar uses initials; mobile/tablet checks are representative, not a complete device or assistive-technology matrix. AI quick prompts do not interpret documents or medication and explicitly describe this limitation.

KNOWN FUNCTIONAL ISSUES: local synthetic auth/practitioner registry; no LLM or real EHR; section grants include later active records and are not exact-source-version leases. The 13 retained MASTER-21 tasks (admission, dedupe, receipt cursors, disaster restore, measured-load/transport acceptance) remain open. Metadata upload is a separate request after document bytes; a failed metadata step can leave an uploaded document available for editing. SQLite has no at-rest encryption and audit is not externally anchored.

EXTERNAL GATES: inherited 68 external, 38 legal, 34 jurisdiction records (not additive unique counts); no clinical/legal/provider or production approval claimed. Historical root validation previously 247/248 with a pre-existing MASTER-09 failure: audit/master-22/parent-preservation.json. Historical audits were not rerun or changed.

SCREENSHOTS / PREVIEW: browser screenshots were visually reviewed in the task; live local preview at http://127.0.0.1:4173. No screenshot files are claimed.

NEXT EXACT TASK: five-second single-use request/context/digest-bound admission leases, monotonic expiry and atomic claim, followed by recovery acceptance.
