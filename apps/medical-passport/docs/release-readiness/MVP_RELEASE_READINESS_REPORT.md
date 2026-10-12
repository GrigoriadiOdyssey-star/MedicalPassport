# EDHT MVP release readiness — 2026-10-04
## Decision
**RC NOT READY. Production promotion is not authorized.**
This is a point-in-time evidence report, not certification of all Product Bible modules.

## Source and lineage
Project: OdisseyGrigoriadi/edht.
Stable/default branch implementation/master-25 remains at 061746b8298d4746a2bf02bc99a04584ecc2c604. Pipeline 2910957925: validate-specifications and create-pages succeeded on runner 57035521.
Cloud branch: implementation/cloud-staging-integration.
Audit starting SHA a4622560db83b424e83f08c9b3bb4cc24a49b719.
Fixes: 51e3b8fa2296408eb770dcf7d07fb921fb91293f and c46fd3b9ff2f1160a1991c94391999bc1e6dc352.
Test fixture correction: e230d462edca8f6c7c5c82a25d7e841615cfe8a9.
No stable-branch merge or production deployment was performed.

50 branches were inventoried. MASTER-26 through MASTER-34 cannot be treated as already merged into stable. Application blob comparison: MASTER-34 has 30 identical shared files, 21 different shared files and 36 files absent from stable; cloud has 30 identical shared, 22 different shared and 90 files absent from stable. These are file-level comparisons, not proof that every capability is absent/present. Translation, secure exchange and durable-job modules on later branches need selective integration; blind merge is inappropriate.
Open MRs !8, !9 and !10 were drafts; no merge was performed.

## Confirmed changes
- Auth provider outages retain safe 503 semantics instead of becoming an invalid-session response.
- A failed upstream logout revocation is no longer reported as successful; local cookies are cleared.
- Supabase GET /auth/v1/user returning 403 with code session_not_found is classified as revoked authentication. Unknown 403 errors remain provider failures. No provider response bodies are returned or logged.
- Cloud passport regression fixture now uses a synthetic token of the existing accepted length. Assertions and security validation remain unchanged. A separate new regression rejects short credentials before any provider call.

## Evidence and limits
At 51e3b8f, pipeline 2911032132: specifications, laboratory suite, PostgreSQL migrations, Preview runtime contracts and Preview care contracts passed. Application suite: 226/229 passed; three failures came from the too-short fixture, before passport logic. Four new outage/logout tests passed. An initial app job failed at Alpine DNS before tests; its retry executed the suite.
c46fd3b Preview dpl_HSDMDcMLjpMqjSANkVNsv8tbCvkz was READY; Vercel build logs explicitly identified that SHA. The alias served it.
Browser A re-login: POST /api/login 200; GET /api/me, profile, sessions, audit, grants, notifications, document lists and own document versions 200.
B on 51e3b8f could view only its synthetic document list; requesting A's document versions returned 404.
A on c46fd3b requesting B's versions returned 404. Read-only SQL confirmed distinct fixture owners.
**This is limited cross-account document evidence on two builds, not a same-SHA full RLS A/B pass.**
The master scenario remains blocked at QR creation / recipient clinical view / translation. No fabricated successful responses were introduced.
Final pipeline and deployed SHA must be read from GitLab/Vercel after this documentation commit; this report does not predeclare their result.

## Product classification
Functional Alpha with a partial cloud MVP; not pilot-ready or production-ready.
Stable registry: 33 owners, 19 PARTIAL, 11 POST_MVP, 3 RESEARCH. It is not a current end-to-end acceptance registry.
Full Product Bible coverage: **NOT MEASURABLE YET** without updated traceability to 5,175 original IDs.

## Inventory methodology
Counts below are physical lines in selected tracked code directories, excluding blank-vs-code differentiation. They are not readiness percentages.
Stable SHA 061746b: backend 82 files / 5,699 lines; frontend 69 / 5,775; SQL migrations 34 / 1,021; application tests 68 / 3,118; root validation scripts 64 / 3,032; root tests 33 / 1,006. Total selected code: 350 files / 19,651 lines. App production subset: 12,495 lines.
Cloud audit starting SHA a462256: 128 selected files / 17,686 lines (server/support 36/4,885; Vercel API 10/1,252; frontend 13/6,081; SQL migrations 18/1,675; tests 51/3,793). Current fixes add code/tests; these counts are explicitly baseline counts.
Documentation/generated/static assets are not included in these code totals. Their existence is not evidence of working capabilities.

## Readiness scoring
No defensible overall functional percentage is asserted: write-path E2E, recipient access and same-SHA A/B remain incomplete.
Use the acceptance matrix in MVP_GAP_MATRIX.md. A PARTIAL capability is never counted as DONE.
Technical release status: BLOCKED, irrespective of the proportion of passing unit tests.
