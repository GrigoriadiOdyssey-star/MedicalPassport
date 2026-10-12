# CORE-CAP-IMMUNIZATION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## diagnostic-vaccination-planning

Immunization owns source-scoped vaccination assessment and planning context for hematology, oncology and autoimmune/systemic disease. Clinical record and medication owners retain diagnoses/exposure; planning is not administered vaccine, immunity or universal contraindication.

Acceptance additions: Preserve treatment phase, immune recovery, transfusion/splenic function, previous reactions and specialist recommendation versions. Missing context blocks automated eligibility; disease name alone must not become a blanket vaccine prohibition.

## registry-immunization

Immunization owns distinct vaccination-history and versioned schedule-reference profiles. Historical administration, eligibility, recommendation, refusal and unknown status stay separate; a national schedule is jurisdiction/version-bound and not a universal contraindication or automatic order.

Acceptance additions: Preserve source identity, source-specific fields, verification, chronology and correction lineage. Test unknown versus absent states, wrong-patient/tenant binding, stale or revoked access, conflicting reports and attributed human disposition. Clinical actions and sensitive pediatric/guardian disclosure require separately approved workflows; no inferred automation or compatibility approval.

## Source scope

- Original 4321 / diagnostic-vaccination-planning: Hematology Patient Vaccination Assessment Module — Supports vaccination planning for patients with hematologic diseases.
- Original 4322 / diagnostic-vaccination-planning: Pediatric Oncology Vaccination Assessment Module — Supports vaccination planning during and after cancer treatment.
- Original 4324 / diagnostic-vaccination-planning: Systemic & Autoimmune Disease Vaccination Assessment Module — Supports vaccination assessment in systemic and autoimmune diseases.
- Original 486 / registry-immunization: Sexual Health Vaccination Registry — Stores vaccination history related to sexual health.
- Original 732 / registry-immunization: Pregnancy Vaccination Registry — Stores vaccinations recommended during pregnancy.
- Original 1015 / registry-immunization: Pediatric International Vaccination Registry — Stores vaccination records accepted internationally.
- Original 2306 / registry-immunization: HPV Vaccination Registry — Maintains HPV vaccination records.
- Original 2334 / registry-immunization: Pediatric Vaccination Registry — Maintains childhood immunization history.
- Original 2760 / registry-immunization: Vaccination Registry — Maintains vaccination history.
- Original 4271 / registry-immunization: Universal Pediatric Vaccination Registry — Maintains a lifelong structured immunization record.
- Original 4301 / registry-immunization: Global National Immunization Schedule Registry — Maintains version-controlled national immunization schedules.

## Requirements and source metadata

<a id="M17-CAP-IMMUNIZATION-dd74d2e26e3e6276"></a>
- **M17-CAP-IMMUNIZATION-dd74d2e26e3e6276**: Supports vaccination planning for patients with hematologic diseases.
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-21d94006fa494f95"></a>
- **M17-CAP-IMMUNIZATION-21d94006fa494f95**: Integrates
  Applies to original IDs: 4321, 4322, 4324.

<a id="M17-CAP-IMMUNIZATION-776d85a60fac3df8"></a>
- **M17-CAP-IMMUNIZATION-776d85a60fac3df8**: Hematologic Diagnosis
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-9c9ad8ca919e168c"></a>
- **M17-CAP-IMMUNIZATION-9c9ad8ca919e168c**: Blood Counts
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-0207549b28719905"></a>
- **M17-CAP-IMMUNIZATION-0207549b28719905**: Treatment
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-746fa472ce1cde7e"></a>
- **M17-CAP-IMMUNIZATION-746fa472ce1cde7e**: Transfusion History
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-ee54e27f27fe774f"></a>
- **M17-CAP-IMMUNIZATION-ee54e27f27fe774f**: Immune Function
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-1127ff4f5552da6e"></a>
- **M17-CAP-IMMUNIZATION-1127ff4f5552da6e**: Splenic Function
  Applies to original IDs: 4321.

<a id="M17-CAP-IMMUNIZATION-7ec42d2ad16af21e"></a>
- **M17-CAP-IMMUNIZATION-7ec42d2ad16af21e**: Vaccine Type
  Applies to original IDs: 4321, 4324.

<a id="M17-CAP-IMMUNIZATION-6959468a11f3f66f"></a>
- **M17-CAP-IMMUNIZATION-6959468a11f3f66f**: Specialist Recommendations
  Applies to original IDs: 4321, 4324.

<a id="M17-CAP-IMMUNIZATION-5ba74d8fcc7b20cc"></a>
- **M17-CAP-IMMUNIZATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 4321, 4322, 4324, 486, 732, 1015, 2306, 2334, 2760, 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-d5232cbd3a326267"></a>
- **M17-CAP-IMMUNIZATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4321, 4322, 4324, 486, 732, 1015, 2306, 2334, 2760, 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-6f33acf3afb37064"></a>
- **M17-CAP-IMMUNIZATION-6f33acf3afb37064**: ---
  Applies to original IDs: 4321, 4322, 4324, 486, 732, 1015, 2306, 2334, 2760, 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-80767550d781ef6c"></a>
- **M17-CAP-IMMUNIZATION-80767550d781ef6c**: Supports vaccination planning during and after cancer treatment.
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-ee4e4c6885145b0f"></a>
- **M17-CAP-IMMUNIZATION-ee4e4c6885145b0f**: Cancer Diagnosis
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-700831e3b990e2e8"></a>
- **M17-CAP-IMMUNIZATION-700831e3b990e2e8**: Treatment Phase
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-3293409e72238560"></a>
- **M17-CAP-IMMUNIZATION-3293409e72238560**: Chemotherapy
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-42ecf80f75b68da4"></a>
- **M17-CAP-IMMUNIZATION-42ecf80f75b68da4**: Immunotherapy
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-49f514f04b66d6d1"></a>
- **M17-CAP-IMMUNIZATION-49f514f04b66d6d1**: Cellular Therapy
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-75e3c303e89201ce"></a>
- **M17-CAP-IMMUNIZATION-75e3c303e89201ce**: Immune Recovery
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-9457444b538e6aff"></a>
- **M17-CAP-IMMUNIZATION-9457444b538e6aff**: Previous Vaccinations
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-baabb0bcefc3c637"></a>
- **M17-CAP-IMMUNIZATION-baabb0bcefc3c637**: Oncology Recommendations
  Applies to original IDs: 4322.

<a id="M17-CAP-IMMUNIZATION-71e4ad2a675a0ed4"></a>
- **M17-CAP-IMMUNIZATION-71e4ad2a675a0ed4**: Supports vaccination assessment in systemic and autoimmune diseases.
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-5f124f9e42776b79"></a>
- **M17-CAP-IMMUNIZATION-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-9c7649be6be8e67a"></a>
- **M17-CAP-IMMUNIZATION-9c7649be6be8e67a**: Disease Activity
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-3186b1d6891f0f94"></a>
- **M17-CAP-IMMUNIZATION-3186b1d6891f0f94**: Immunomodulatory Therapy
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-0f9dc4d340586437"></a>
- **M17-CAP-IMMUNIZATION-0f9dc4d340586437**: Immune Status
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-4b5b0c8caca3c931"></a>
- **M17-CAP-IMMUNIZATION-4b5b0c8caca3c931**: Previous Reactions
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-120e39884af82b99"></a>
- **M17-CAP-IMMUNIZATION-120e39884af82b99**: Avoids treating systemic disease itself as an automatic universal vaccine prohibition.
  Applies to original IDs: 4324.

<a id="M17-CAP-IMMUNIZATION-2891b826e06f8257"></a>
- **M17-CAP-IMMUNIZATION-2891b826e06f8257**: # Sexual Health Vaccination Registry
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-f0f8f448e7bd7b32"></a>
- **M17-CAP-IMMUNIZATION-f0f8f448e7bd7b32**: Stores vaccination history related to sexual health.
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-4fbeeb87456accf5"></a>
- **M17-CAP-IMMUNIZATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 486, 732, 1015, 2306, 2334, 2760, 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-7a41f1c13f27fb77"></a>
- **M17-CAP-IMMUNIZATION-7a41f1c13f27fb77**: HPV
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-25ef6af7dc551d4d"></a>
- **M17-CAP-IMMUNIZATION-25ef6af7dc551d4d**: Hepatitis A
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-27aa2c34ee6c5169"></a>
- **M17-CAP-IMMUNIZATION-27aa2c34ee6c5169**: Hepatitis B
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-57a27f6127b974e6"></a>
- **M17-CAP-IMMUNIZATION-57a27f6127b974e6**: Other Recommended Vaccinations
  Applies to original IDs: 486.

<a id="M17-CAP-IMMUNIZATION-a7c60796466fa131"></a>
- **M17-CAP-IMMUNIZATION-a7c60796466fa131**: # Pregnancy Vaccination Registry
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-ba9e1b5670aa0f8c"></a>
- **M17-CAP-IMMUNIZATION-ba9e1b5670aa0f8c**: Stores vaccinations recommended during pregnancy.
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-8b255b52100dc7bf"></a>
- **M17-CAP-IMMUNIZATION-8b255b52100dc7bf**: Influenza
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-695360ac44e159e4"></a>
- **M17-CAP-IMMUNIZATION-695360ac44e159e4**: Tdap
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-ebd4f236c46ae172"></a>
- **M17-CAP-IMMUNIZATION-ebd4f236c46ae172**: COVID-19
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-ddaab4183e775748"></a>
- **M17-CAP-IMMUNIZATION-ddaab4183e775748**: Other National Recommendations
  Applies to original IDs: 732.

<a id="M17-CAP-IMMUNIZATION-86dbb2f450bdad77"></a>
- **M17-CAP-IMMUNIZATION-86dbb2f450bdad77**: # Pediatric International Vaccination Registry
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-ab275208f6b4e3c6"></a>
- **M17-CAP-IMMUNIZATION-ab275208f6b4e3c6**: Stores vaccination records accepted internationally.
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-56968d25db6f690c"></a>
- **M17-CAP-IMMUNIZATION-56968d25db6f690c**: WHO Standards
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-c8ba955fba8522ae"></a>
- **M17-CAP-IMMUNIZATION-c8ba955fba8522ae**: EU Standards
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-b7c249ebadb73b6c"></a>
- **M17-CAP-IMMUNIZATION-b7c249ebadb73b6c**: CDC Standards
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-9c26c1b46bcd0a38"></a>
- **M17-CAP-IMMUNIZATION-9c26c1b46bcd0a38**: QR Verification
  Applies to original IDs: 1015.

<a id="M17-CAP-IMMUNIZATION-23b4ef1414ba0b70"></a>
- **M17-CAP-IMMUNIZATION-23b4ef1414ba0b70**: Maintains HPV vaccination records.
  Applies to original IDs: 2306.

<a id="M17-CAP-IMMUNIZATION-30af799bdc84f317"></a>
- **M17-CAP-IMMUNIZATION-30af799bdc84f317**: Vaccine Schedule
  Applies to original IDs: 2306.

<a id="M17-CAP-IMMUNIZATION-92b2c23c4c9745d3"></a>
- **M17-CAP-IMMUNIZATION-92b2c23c4c9745d3**: Booster Monitoring
  Applies to original IDs: 2306.

<a id="M17-CAP-IMMUNIZATION-53f642c5723567a4"></a>
- **M17-CAP-IMMUNIZATION-53f642c5723567a4**: Immunization History
  Applies to original IDs: 2306.

<a id="M17-CAP-IMMUNIZATION-499f055b7e472735"></a>
- **M17-CAP-IMMUNIZATION-499f055b7e472735**: Maintains childhood immunization history.
  Applies to original IDs: 2334.

<a id="M17-CAP-IMMUNIZATION-2ee897a4100acd79"></a>
- **M17-CAP-IMMUNIZATION-2ee897a4100acd79**: National Schedules
  Applies to original IDs: 2334.

<a id="M17-CAP-IMMUNIZATION-e5795f655e2fedfd"></a>
- **M17-CAP-IMMUNIZATION-e5795f655e2fedfd**: International Schedules
  Applies to original IDs: 2334.

<a id="M17-CAP-IMMUNIZATION-e826a6eecfa014c4"></a>
- **M17-CAP-IMMUNIZATION-e826a6eecfa014c4**: Booster Tracking
  Applies to original IDs: 2334.

<a id="M17-CAP-IMMUNIZATION-9890ea678bb31c5d"></a>
- **M17-CAP-IMMUNIZATION-9890ea678bb31c5d**: Maintains vaccination history.
  Applies to original IDs: 2760.

<a id="M17-CAP-IMMUNIZATION-6f6404648b6b50d8"></a>
- **M17-CAP-IMMUNIZATION-6f6404648b6b50d8**: Childhood Vaccines
  Applies to original IDs: 2760.

<a id="M17-CAP-IMMUNIZATION-a9a9c225a4d957b9"></a>
- **M17-CAP-IMMUNIZATION-a9a9c225a4d957b9**: Adult Vaccines
  Applies to original IDs: 2760.

<a id="M17-CAP-IMMUNIZATION-b871175be63c4154"></a>
- **M17-CAP-IMMUNIZATION-b871175be63c4154**: Travel Vaccines
  Applies to original IDs: 2760.

<a id="M17-CAP-IMMUNIZATION-a0ebdcfa358d22d1"></a>
- **M17-CAP-IMMUNIZATION-a0ebdcfa358d22d1**: Booster Scheduling
  Applies to original IDs: 2760.

<a id="M17-CAP-IMMUNIZATION-7da54e835a23067e"></a>
- **M17-CAP-IMMUNIZATION-7da54e835a23067e**: Maintains a lifelong structured immunization record.
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-230f521a3a8985bc"></a>
- **M17-CAP-IMMUNIZATION-230f521a3a8985bc**: Vaccine
  Applies to original IDs: 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-e6322ac09f884cf3"></a>
- **M17-CAP-IMMUNIZATION-e6322ac09f884cf3**: Manufacturer
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-93f9c381ca40e635"></a>
- **M17-CAP-IMMUNIZATION-93f9c381ca40e635**: Product
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-364a4c7e3ce06ed8"></a>
- **M17-CAP-IMMUNIZATION-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-b0324bbb6383ded7"></a>
- **M17-CAP-IMMUNIZATION-b0324bbb6383ded7**: Batch/Lot
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-1c65129f436c9bd3"></a>
- **M17-CAP-IMMUNIZATION-1c65129f436c9bd3**: Administration Date
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-070b914e0e149403"></a>
- **M17-CAP-IMMUNIZATION-070b914e0e149403**: Administration Location
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-0b44b0bbc237f45f"></a>
- **M17-CAP-IMMUNIZATION-0b44b0bbc237f45f**: Provider
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-580c32d823047de1"></a>
- **M17-CAP-IMMUNIZATION-580c32d823047de1**: Country
  Applies to original IDs: 4271, 4301.

<a id="M17-CAP-IMMUNIZATION-c225be7e018f69d0"></a>
- **M17-CAP-IMMUNIZATION-c225be7e018f69d0**: Source Verification
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-9eebbe181498cfd2"></a>
- **M17-CAP-IMMUNIZATION-9eebbe181498cfd2**: Synchronizes with the EDHT Medical Passport.
  Applies to original IDs: 4271.

<a id="M17-CAP-IMMUNIZATION-d06d4230500f36ae"></a>
- **M17-CAP-IMMUNIZATION-d06d4230500f36ae**: Maintains version-controlled national immunization schedules.
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-8dcf50da896726c9"></a>
- **M17-CAP-IMMUNIZATION-8dcf50da896726c9**: Jurisdiction
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-412d156ebe28939d"></a>
- **M17-CAP-IMMUNIZATION-412d156ebe28939d**: Antigen
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-7d189f8d825f47da"></a>
- **M17-CAP-IMMUNIZATION-7d189f8d825f47da**: Recommended Age
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-cbb92af05bc80256"></a>
- **M17-CAP-IMMUNIZATION-cbb92af05bc80256**: Dose Sequence
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-abd33221ca06a414"></a>
- **M17-CAP-IMMUNIZATION-abd33221ca06a414**: Minimum Intervals
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-8dc265caf68f3acc"></a>
- **M17-CAP-IMMUNIZATION-8dc265caf68f3acc**: Catch-up Rules
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-0532d62e9c85a78a"></a>
- **M17-CAP-IMMUNIZATION-0532d62e9c85a78a**: Risk Groups
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-8b494de556bc9e7a"></a>
- **M17-CAP-IMMUNIZATION-8b494de556bc9e7a**: Effective Dates
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-76057635c0e686c9"></a>
- **M17-CAP-IMMUNIZATION-76057635c0e686c9**: Historical Schedule Versions
  Applies to original IDs: 4301.

<a id="M17-CAP-IMMUNIZATION-9ca84c27f551640b"></a>
- **M17-CAP-IMMUNIZATION-9ca84c27f551640b**: Never assumes one universal vaccination schedule for all countries.
  Applies to original IDs: 4301.
