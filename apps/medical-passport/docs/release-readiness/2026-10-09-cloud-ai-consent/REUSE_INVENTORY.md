# Existing implementation sources checked through GitLab

All comparisons use cloud baseline 2ee86e4f; no blind branch merges were made.

- master-30-translation-n8n — 66e508be: translation copies preserve original ID/version/hash, languages and review status; n8n uses opaque references, HMAC/timestamp/nonce and replay checks. Current dependencies are SQLite, local objects, Python and process-local orchestration.
- master-30-runtime-hardening — 728e97db: preferred translation source; execution/validation/review status separation, stale worker recovery, protected dose/unit/code placeholders, Argos1.11 and pypdf6. Live cloud worker, RLS provenance and OCR are still missing; lexical checks do not certify clinical equivalence.
- master-33-document-scanner — b2fc17f1: camera permission/capture/retake, camera-stream cleanup and JPEG/PNG file fallback already exist. Capture lifecycle may be reused with current signed Supabase uploader; its old chunk API must not overwrite the cloud protocol. OCR, deskew and multipage PDF are absent.
- master-34-cloud-staging — bf4e0242: transaction/rollback unit-of-work, bounded immutable Supabase objects and SKIP LOCKED/lease/retry worker queue foundations exist. They are guarded as local-synthetic, not a ready cloud runtime. Selective adaptation is required.
