# EDHT Product Design Preview v1 — 2026-10-12

Source: OdisseyGrigoriadi/edht, implementation/cloud-mvp-completion.
Purpose: standalone interactive design demonstration, separate from the working EDHT cloud runtime.

## Scope
Nine screens: Home, Passport, Health history, Medications, Laboratory, Documents, QR consent, AI assistant, Profile.
Desktop/tablet/mobile layouts. Russian and English UI. Shared theme tokens, inline vector icons, 180–200 ms transitions, reduced-motion handling, native modal focus trapping, keyboard focus, Ctrl/Cmd+K search.
Reusable empty/loading/error examples. Safe distinction between document original language and interface/copy language.

## Prototype actions
- Navigate all nine screens, search sections/documents, view notifications and mark read.
- View fictional document original or Russian/English copy; inspect provenance; download fictional plain text.
- Preview scanning/intake steps using a prepared example; no camera, real files or uploads.
- Toggle medication reminders, edit demonstration times, inspect empty archive/lab filter.
- Review selected QR scopes and duration, confirm/revoke a simulated consent. QR graphic is not scannable access.
- Edit fictional profile fields in memory, choose RU/EN on first-use sheet and toolbar.
- Draft/copy AI questions. Generation remains disabled because provider is not connected.
- View emergency UI without phone numbers, dialing or real emergency calls.

## Boundaries
All data is fictional. No fetch, XHR, WebSocket, analytics, SDK, external assets, database, auth, service-role key or provider key. State is in-memory and resets on refresh. No clinical interpretation, genuine translation, file verification or permission creation is claimed. Production, existing runtime source, RLS, CI, tests and historical artifacts are not modified.

The Figma Starter connector reached its MCP quota after foundations/dashboard composition. Figma is an initial editable design reference, not a completed full-screen library:
https://www.figma.com/design/vtzzHIUIvW96pBr6n0uJDK
Its dashboard has a known text-wrapping defect that could not be repaired after quota exhaustion; the standalone HTML design is the demonstration source for this pass.

## Verification
JavaScript syntax parsed; all 18 RU/EN screen render variants passed targeted in-memory checks; distinct empty/error views, document-copy fixture and escaping checked.
Vercel deployment/HTTP and browser visual results are recorded separately after publication. No historical test suites were rerun for this isolated design artifact.

Deploy only files in this folder, as non-production Preview with framework=null and no build/install steps. Do not deploy the repository root or backend.

## Evergreen theme — 2026-10-12
Primary #20745C, pale green #E7F3EC, canvas #F5F8F5. All existing prototype keyframes and transitions are preserved. This presentation is also implemented in the real application via public/modern-green.css loaded after public/app.css; no auth, APIs, RLS, records, runtime JavaScript or historical files are changed.
