# MASTER-16

REVIEWED 5175/5175; no repeat review. NORMALIZED / CANONICALIZED 2649/5175 (51.1884%).

Next exact cluster: diagnostic-and-assessment-contracts; IDs 2008, 2131, 3692, 4158, 4321, 4322, 4324, 4396, 4405, 4565, 4611, 4745, 4746, 4755, 4767, 4796, 4939, 5021, 5089

Apply MASTER08 and deltas MASTER09 through MASTER16. Retain old source variants and clinical/readiness gates. If next_exact_cluster.requires_new_family_decision is true, resolve diagnostic-result, signal-acquisition, clinical-assessment and vaccination-planning contracts before adding a selection rule. Otherwise use node scripts/master16.mjs --next. Validate with node scripts/master16.mjs --check.
