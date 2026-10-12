# Preview integration checkpoint — 2026-10-09

Source branch: implementation/cloud-staging-integration, baseline 2ee86e4ff180ffe9fe66097bbb4d883cfc8e058b. Working branch: implementation/cloud-ai-consent-acceptance. Final commit-specific CI/deployment evidence belongs in the merge request, not a self-referential commit claim.

Implemented: server-side Responses adapter; bounded owner-authorized context; source validation; informational safety boundaries; persisted conversations/messages; atomic private approved spending ledger, request deduplication, per-user concurrency/rate/budget, retained uncertain reservations and circuit breaker; actual server reply/history in RU/EN UI; canonical recipient-bound clinical QR creation, one-successful-read redemption, expiry/revoke/audit; trusted clinician lookup; two missing actor FK indexes. Existing durable grants and SQLite runtime retain their contracts.

No paid calls: explicitly deferred by the user. Default AI mode is disabled. Provider-contract tests use mocks. They do not establish LIVE_AI_ACCEPTANCE. Local safety responses are labelled deterministic and transient; paid generated replies are persisted and reconstructed from PostgreSQL.

Live database migration is BLOCKED: the current Vercel Production has no Supabase runtime/config, but that does not establish that the entire Supabase project is isolated or contains only test data. All new migrations and negative/concurrency checks are prepared against disposable PostgreSQL17. No live Supabase schema/Auth changes are made.

The new Preview keeps normal existing Auth/data functions on the existing configuration while AI/QR schema-dependent functionality stays disabled until the additive migrations are approved for a verified test database. Publishing this code does not certify live AI/QR acceptance.

Remaining gates: isolated database approval + migration application; server-only AI capability/approved model/versioned pricing/budget/key; real synthetic multi-turn provider evaluation; final-SHA independent browser sessions A/B and a verified clinician C; document QR proxy with reauthorization; bounded actual document decoding/malware integration; scanner/translation runtime; pharmacy/laboratory/imaging cloud persistence beyond existing clinical records; recovery/backup and clinical/legal release approval.

Production must not be promoted or merged by this iteration. Historical tests, Product Bible, audit artifacts and baseline hashes remain unchanged. The runtime CI's existing historical guard skip is documented separately from full unskipped root test results; no extra skip or allow_failure is introduced.

Local required validation: application 261/261 PASS; unskipped root 247 PASS / 1 pre-existing cached baseline guard FAIL. The failing check compares canonical documentation with the old MASTER-09 baseline; none of those protected files is modified by this change. Runtime CI already skips exactly this test; that existing rule is not expanded. Final commit CI evidence is recorded separately.
