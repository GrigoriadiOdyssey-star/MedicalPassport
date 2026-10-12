# MASTER-15

REVIEWED 5175/5175; no repeat review. NORMALIZED / CANONICALIZED 1662/5175 (32.1159%).

Next exact cluster: pharmacy-catalog-and-availability; IDs 45, 115, 151, 204, 391, 392, 393, 394, 395, 396, 397, 399, 400, 401, 402

Apply MASTER08 and deltas MASTER09 through MASTER15. Retain old source variants and clinical/readiness gates. If next_exact_cluster.requires_new_family_decision is true, compare the pharmacy sources and establish the existing owner specification before adding a selection rule. Otherwise use node scripts/master15.mjs --next. Validate with node scripts/master15.mjs --check.
