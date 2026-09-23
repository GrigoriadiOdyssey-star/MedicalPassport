# MedicalPassport

EDHT Medical Passport is an international digital-health platform specification and implementation project.

## Repository role

This GitHub repository is the live Product Bible issue corpus. The complete specification lineage is preserved through 5,175 numbered issues, including later canonicalization, supersession and duplicate-resolution work.

Current implementation, audit artifacts, canonical registries, CI and executable Medical Passport code are maintained in GitLab:

`https://gitlab.com/OdisseyGrigoriadi/edht`

The active implementation baseline used for repository reconciliation is:

`implementation/master-25`

## Source-of-truth policy

- GitHub Issues preserve the live Product Bible and current issue-level canonicalization state.
- GitLab preserves the immutable exported Product Bible, audit provenance, canonical specifications and implementation history.
- Original module IDs must remain traceable even when an issue is superseded or consolidated.
- Historical exports and hashes must not be rewritten to match later GitHub edits.
- Current GitHub changes should be synchronized into GitLab as additive, verified deltas.

## Reconciliation status

A direct GitHub ↔ GitLab reconciliation was started on 2026-09-23. The first verified delta is maintained in GitLab under:

`sources/github-sync/`

This keeps historical audit evidence immutable while allowing newer GitHub canonicalization to inform current implementation work.
