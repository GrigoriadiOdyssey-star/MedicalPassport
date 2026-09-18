# MASTER-22 implementation checkpoint

Parent: c4b6b4408e20026b51d194b1830742073cf6ba00. Branch: implementation/master-22.
2026-09-18. App: apps/medical-passport. Historical audits and the guideline architecture remain unchanged.

Waves 1–2: real SQLite identity, sessions, recovery, role provisioning, patient binding, consent, recipient scopes, revocation and transactional audit implemented. Security/database tests pass, including six independent connections competing for one-time access: exactly one winner. Audit failure rolls back consumption.

Waves 3–6: patient records, allergy, reported medication, binary document storage/download, emergency profile, expiring scoped QR, four-type synthetic FHIR adapter implemented. Actual HTTP flow and independent QR decoding pass. FHIR exact replay is idempotent; changed content at the same source ID conflicts.

Wave 7: doctor UI and deterministic context assistant implemented. No external LLM connected; no generated clinical advice. Browser acceptance passed: patient registration, clinical entries, file upload, QR creation, scoped doctor view, expiry, revoke, hidden stale snapshot, FHIR import and assistant. Default desktop screenshot inspected; no browser error/warning entries observed. Mobile acceptance is not claimed.

Automated app tests: **18/18 PASS** (16 store/security/concurrency; 2 HTTP/restart integration). Failed app tests: **0**. Two additive migrations apply on clean install and preserve restart data. `npm ci --offline` succeeded from the previously fetched locked npm cache. Initial test assertion and worker-exit waiting defects were corrected. Password recovery/account disable now revoke grants and sessions; emergency versions and source immutability have explicit tests.

Historical regression: **247/248 PASS**, one inherited MASTER-09 baseline guard failure. That guard compares the old baseline against all subsequent canonical documents, including added files. Its 120-path failure list is identical at parent `c4b6b44` and the current tree. No earlier tracked file is modified. See `parent-preservation.json`; do not report 248/248. A root CI addition initially triggered 15 frozen-baseline failures; it was removed completely. The app has a standalone `apps/medical-passport/ci.yml`, not yet included by the frozen root pipeline.

Tracked work packages: **20 total; 7 functional alpha waves complete; 10 strict-contract tasks in progress; 3 not started; 0 externally blocked engineering tasks; 13 remaining**. The 13 original MASTER-21 tasks retain their original acceptance criteria in the new backlog. The seven new functional waves do not close those stronger contracts or establish a percentage of total product readiness.

Identity/data/auth/consent/audit/profile/clinical records/allergy/reported medication/documents/QR/SOS: implemented for the explicitly synthetic alpha boundaries described in the app README. FHIR: four-resource synthetic subset. Assistant: deterministic sandbox, not an external AI model. Runnable locally: **YES**, `http://127.0.0.1:4173` while the server runs.

Runtime remains synthetic, loopback-only. External, clinical, legal and jurisdiction gates stay open. Full MASTER-21 runtime contract conformance is not asserted by this wider MASTER-22 alpha: durable recovery admission fencing, exact source-version leases and historical receipt cursor contracts require separate implementation. Existing 13-task backlog is retained with explicit follow-up mapping.

Next exact implementation task: **M21R-LEASE**, implement a five-second, request/context/exact-source-version/digest-bound admission and atomic single-use transport claim, monotonic expiry and recovery epoch. Propagate the resulting evidence to Security, Data, Consent, Audit, Identity, Allergy and Profile before closing their strict acceptance. Then implement restore quarantine/reconciliation, receipt cursors/deduplication, crash/transport and load acceptance.

External gate records retained unchanged: 68 external, 38 legal, 34 jurisdiction (overlapping categories, not an additive unique-gate count). Clinical/legal/provider and production approval remain false. No GitLab push has been performed for this implementation branch.
