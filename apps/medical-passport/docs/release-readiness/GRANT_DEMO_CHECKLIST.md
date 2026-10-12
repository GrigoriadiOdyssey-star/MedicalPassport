# Grant / partner demonstration checklist
## Current verdict
Complete requested demo: **NOT READY**.
A supervised synthetic partial demonstration is available. Closed clinical pilot and production: **NOT READY**.

## Truthful demonstration today
- Open the verified Preview, not production.
- Sign in with an existing synthetic adult test account.
- Show Home, profile and passport.
- Show the synthetic allergy and separate account-owned document metadata/versions.
- Show medication/lab empty states without claiming that missing data means no disease.
- Show notifications and the deterministic assistant with provenance/disclaimer.
- Show emergency UI only; never trigger a real emergency call.
- Explain that QR screen existence is not functioning recipient sharing, and the assistant is not a certified clinical model.

## Required before a complete demo
[ ] One final SHA has green full CI and matching Vercel build evidence.
[ ] Register/login/profile/blood group/allergy/diagnosis/medication/lab writes persist after reload.
[ ] Valid JPEG/PNG/PDF upload and reopen succeed; malformed uploads fail safely.
[ ] Reminder lifecycle works.
[ ] Time-limited QR grant is created, used by eligible recipient and revoked.
[ ] Doctor context is correctly scoped and audited.
[ ] A/B cannot read or modify each other's records across all required capabilities on one SHA.
[ ] Translation path preserves original/provenance and has tested failure handling.
[ ] Desktop/tablet/mobile, RU/EN and keyboard/error accessibility are verified.
[ ] Production authorization is obtained separately.

## Evidence package
Architecture/code/CI evidence is available, but it is a partial technical annex.
Security evidence is partial; table-level RLS metadata is not a completed isolation certification.
Do not claim pharmacy stock, insurer connectivity, EMIAS/EGISZ/Epic integration, native mobile release, autonomous prescribing or emergency-service integration.
Use this checklist together with MVP_RELEASE_READINESS_REPORT.md, MVP_GAP_MATRIX.md, SECURITY_READINESS.md and CLOUD_READINESS.md.
