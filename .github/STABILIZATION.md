# EDHT Medical Passport — GitHub stabilization, 12 October 2026

## Current source baseline

The application is in `apps/medical-passport/`. The root README and audit checkpoints are historical documentation, not the current application status.

This integration imports all **1,679 tracked files** from GitLab `OdisseyGrigoriadi/edht`, branch `implementation/cloud-mvp-completion`, commit `bb31e24076cd0bd688287dae55e9fd3178a5ccc0`, tree `2a510e75821958118288561fa8f8aed840479573`. Every source path, content and file mode is preserved. GitHub integration additions are confined to `.github/`. Both repository histories are ancestors of the import. See `gitlab-source.json` for provenance.

Original GitHub `main` is preserved at `backup/main-before-gitlab-sync-2026-10-12` (`e8396f1e70c9f95935b699ed6451fc9fe8f91fa1`). Its README is copied to `github-readme-before-sync.md`. Existing Product Bible Issues were not changed.

## Cloud validation

GitLab pipeline 2937098871 could not execute any of its seven jobs because no matching runner was available. The GitHub workflow `EDHT stabilization CI` uses hosted Ubuntu runners, Node.js 24 and disposable PostgreSQL 17 services. It never connects to production databases and requires no production secrets.

The acceptance gate requires source/history parity, all root archival tests, eleven root audit/contract commands, the full application test suite, laboratory integration tests, and four PostgreSQL contract sets. No test-skip pattern is used. Application and database jobs do not load the archival adapter described below.

Run root archival acceptance with the explicit compatibility adapter:

```sh
node --import ./.github/ci/audit-compat.mjs --test tests/*.test.mjs .github/ci/*.test.mjs
```

Run application tests independently:

```sh
cd apps/medical-passport
npm ci --ignore-scripts
npm test
```

Use the workflow job logs for the current executed results. This guide is not a fabricated permanent green status.

## Frozen MASTER-09 compatibility correction

The unmodified upstream root `npm test` currently fails one archival test: MASTER-09's `checkBaselineUnchanged` mistakenly treats later **added** canonical documents as modification of the frozen baseline. GitLab worked around this with a test-skip pattern. Other historical checkpoint guards already filter modified/deleted/renamed/type-changed files.

We do not skip the test or rewrite the archives. `.github/ci/audit-compat.mjs` uses a Node.js synchronous module-load hook to insert `--diff-filter=MDRT` into the one historical guard at load time. It only targets `scripts/master09.mjs`, verifies its exact Git blob hash `fbefee90b87b0445fd644d94b40c2ed0dd57dbf3`, and rejects any source drift or ambiguous replacement. No disk file, cached hash, test assertion, or application behavior is changed. Every original root test still executes. The original plain `npm test` command, without this documented adapter, retains the upstream historical failure.

Ten additional regression tests exercise the actual corrected guard against disposable Git repositories: additions pass; historical modifications, deletions, renames, file-type changes, executable-mode changes, and changed source/audit evidence fail. Missing baselines and adapter source drift also fail closed.

This explicit adapter is a compatibility layer for frozen audit tooling, not clinical validation or an application security workaround. When the source auditing tool is intentionally modernized, remove the adapter through a reviewed change with equivalent negative tests and updated provenance; do not silently weaken the archived assertions.

## Boundaries and future changes

GitLab branches, production deployments, production databases, secrets, and existing Issues are unchanged. Passing synthetic tests does not establish live-provider integration, clinical safety, production readiness, or implementation of all 5,175 roadmap modules.

The source-parity job is intentionally pinned to this import. It is a migration acceptance check, not an automatic bidirectional mirror. Future application changes require a reviewed baseline/provenance update or migration of this strict parity check into a dedicated import verification workflow. Never disable acceptance checks merely to obtain a green badge.

The workflow's acceptance gate reports status; it is not a substitute for repository branch-protection settings. No administration-level branch protection was configured by this change.

## Recovery

Do not force-push or delete repository histories. Before reverting, inspect any commits added after stabilization. Use a reviewed revert of the final integration merge, selecting its previous-main parent, if rollback is needed. The backup branch remains a read-only reference to the original GitHub state. Production rollback, if ever required, is a separate deployment operation and is not performed by this integration.
