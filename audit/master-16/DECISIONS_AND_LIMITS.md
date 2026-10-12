# MASTER-16 decisions and limits

Baseline 397cd96fcd61849201bed30fcc9933bd0bf0a3b0: 1662 normalized/canonicalized originals. This append-only pass adds 987 originals across 18 capability families; no review or gap-fill reopening.

Pharmacy uses registered CAP-PHARMACY and creates its first canonical specification. No architectural owner was created. Medication product identity, prescription authority, pharmacist identity, CDS and inventory/dispense responsibilities remain separate. Source 403 was not remigrated.

Disease and care profiles retain authoritative shared owners and every source variant. Source-specific requirements are not universal clinical protocols. Clinical integration is separated from four device-integration profiles; simulation and research decisions remain separate from clinical CDS. Capability-family ranking uses unresolved count plus dependency centrality after the mandated Pharmacy cluster; clinical risk and ownership ambiguity are handled in the explicit boundary/exclusion decisions.

Exact normalized requirement strings are deduplicated only within owner scope, with source applicability and per-line provenance. The unique-requirement counter is an owner-distinct text counter, not a proof of semantic uniqueness. Total preserved fragments: 40152; this pass: 13525. No original was superseded or discarded based on a lexical match.

Audit now has bounded append/receipt/error syntax, a role/action matrix and recovery/integrity/acceptance additions. Synthetic examples cannot prove producer identity, durable storage, privacy or operational behavior. Readiness remains blocked for 28 active specifications; 5 registered owners still lack active specifications. Missing approval, runtime evidence and full-owner contracts remain explicit. Earlier 27 criteria and eight approval gates are retained. No MVP implementation or GitLab write occurred.

Apply MASTER08 baseline with MASTER09–MASTER16 deltas; union addenda by canonical ID, overlay source rows by original ID. Overlay audit/master-16/readiness_registry.json for current readiness; criteria_overlay contains additions while criteria retains original evidence. The master-16 checkpoint links all pass artifacts and the full validation logs.

Next exact cluster: diagnostic-and-assessment-contracts — 2008, 2131, 3692, 4158, 4321, 4322, 4324, 4396, 4405, 4565, 4611, 4745, 4746, 4755, 4767, 4796, 4939, 5021, 5089. Resolve diagnostic result versus signal acquisition versus CDS and vaccination-planning owners before adopting another profile.
