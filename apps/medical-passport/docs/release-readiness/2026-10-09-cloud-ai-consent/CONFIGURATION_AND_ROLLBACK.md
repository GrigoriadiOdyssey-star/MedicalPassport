# Configuration and rollback

Apply only in a verified isolated test database, in filename order, after the unchanged existing migrations. New files: assistant_conversations_and_budget, qr_consent_read_contract, care_actor_indexes. Do not edit historical migrations. Supabase public configuration is branch-scoped Preview only; neither a service-role key nor provider key belongs in public assets.

AI stays disabled until the operator has separately approved the model, versioned pricing, total/daily/user budgets and synthetic-only external transmission. A server-only random capability must match the SHA256 digest in the unexposed private approval configuration. The database approval row controls pricing/model/caps and is not writable by authenticated clients. The application checks both environment approval and database approval before a provider call. Do not enable zero/unknown budgets. Unknown outcomes retain reservation and require trusted reconciliation; automatic repeated charged calls are forbidden.

OpenAI key provisioning is a separate secure action; never paste it in chat. store:false controls application response storage only and is not a zero-retention guarantee at the provider. Operational evidence excludes raw prompts, patient records and credentials.

Disable/rollback: set EDHT_AI_MODE=disabled, EDHT_AI_STORAGE_READY=false and EDHT_QR_STORAGE_READY=false only for the working Preview branch, then redeploy that branch. Preserve conversation/ledger/grant tables and medical data; do not drop tables or restore historical schemas. Before any future rollback after live QR use, retain the strengthened RLS exclusions for QR grants. Existing durable grants remain valid under their original authorization contract.

QR one-time means one successful read, not a reusable access session. A issued/downloaded copy cannot be recalled. Document QR sharing stays unavailable until a scoped authenticated proxy is independently implemented and verified; no public bucket or ordinary long-lived document grant is substituted.

External AI is additionally restricted to an operator-configured EDHT_AI_TEST_USER_IDS allowlist of confirmed synthetic accounts (at most ten UUIDs). Missing or invalid allowlist disables live mode; user_metadata is not used. Never approve real medical records for this Preview test.
