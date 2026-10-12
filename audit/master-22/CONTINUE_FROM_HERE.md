# Continue MASTER-22

Use implementation/master-22 in outputs/EDHT. Do not repeat the 5175-module audit or edit prior checkpoint outputs. Start with apps/medical-passport and this directory.

Current checkpoint: seven MASTER-22 functional alpha waves complete, browser scenario verified. Node 24; run `npm ci` then `npm test`, `npm run migrate`, `npm start` inside apps/medical-passport. Service binds 127.0.0.1:4173 only. See app README for synthetic doctor provisioning and password recovery. Runtime databases, demo accounts and npm cache are ignored and must not be committed.

Latest automation: 18/18 app tests PASS; two migrations; six-connection one-time race exactly one winner; clean cached install PASS. Root regression 247/248: one inherited MASTER-09 baseline-guard failure, proven unchanged at the parent in `parent-preservation.json`. Do not rerun the old module audits. Do not claim all legacy validators pass. Original MASTER-21 13-item runtime backlog is not automatically complete; its narrow lease/recovery/receipt obligations remain distinct from the user-authorized broader alpha.

Next exact task: M21R-LEASE. Read `docs/engineering/mvp-admission-recovery.md` and the preserved 13-task acceptance in `mvp_implementation_backlog.json`; add request/context/exact-version/digest-bound five-second admission, monotonic expiry and single-use claim with a recovery epoch. Implement real SQL race/crash/transport acceptance; update all seven dependent owners only on sufficient evidence. Then restore quarantine/reconciliation and receipt cursor/dedupe work. Current section grants allow later records in their selected sections; do not confuse them with exact-source-version grants.

Clinical, legal, real-provider, generative AI and production gates remain open. No new canonical owners, guideline audit or specialty capability expansion is needed. Separate app CI is present but not wired into the frozen root CI. No GitLab push in this run.
