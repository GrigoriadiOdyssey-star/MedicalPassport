# CORE-CAP-IMMUNIZATION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## pediatric-vaccine-rule-profiles

Immunization owns versioned vaccine eligibility/catch-up, adverse-event, cold-chain/batch, product-equivalence and clinical-clearance profiles. Separate clinical contraindication, precaution, temporary deferral, specialist review, and legally recognized exemption. Never infer a universal waiting period, restart a series from calendar gaps, equate temporal adverse events with causality, or let AI grant permanent exemption/clearance. Manufacturer/jurisdiction/effective version, immune status and source evidence remain mandatory decision context; Devices, Documents and Interop keep their shared capabilities.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## vaccination-history-archive

Immunization owns historical vaccine administration and booster context. QR verification is a separate sharing capability; historical entry does not establish current eligibility, product equivalence or genuine issuer verification.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## core-vaccination-records

Immunization owns dated vaccine administration and clinician-reviewed schedule/history. Distinguish doses planned, reported and verified, product/antigen equivalence, adverse event and contraindication; retain batch, issuer and country/rule version.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 4272 / pediatric-vaccine-rule-profiles: Global Vaccination Schedule Engine — Supports country-specific vaccination schedules.
- Original 4274 / pediatric-vaccine-rule-profiles: Pediatric Vaccination Catch-Up Planning Module — Supports clinician-reviewed catch-up vaccination planning.
- Original 4275 / pediatric-vaccine-rule-profiles: Pediatric Vaccine Eligibility & Contraindication Module — Supports vaccination safety assessment.
- Original 4276 / pediatric-vaccine-rule-profiles: Pediatric Vaccine Adverse Event Module — Supports structured documentation of events following immunization.
- Original 4280 / pediatric-vaccine-rule-profiles: Pediatric Vaccine Cold Chain Integrity Module — Supports vaccine storage quality information.
- Original 4302 / pediatric-vaccine-rule-profiles: Vaccination Age & Eligibility Rules Engine — Determines vaccination eligibility using jurisdiction-specific rules.
- Original 4303 / pediatric-vaccine-rule-profiles: Vaccine Dose Interval Intelligence Engine — Calculates vaccine dose intervals.
- Original 4304 / pediatric-vaccine-rule-profiles: Vaccination Due-Date & Recommended Window Engine — Calculates personalized vaccination windows.
- Original 4306 / pediatric-vaccine-rule-profiles: Missed Vaccination & Catch-Up Intelligence Engine — Supports individualized catch-up vaccination planning.
- Original 4308 / pediatric-vaccine-rule-profiles: Sex-, Age- & Risk-Specific Vaccination Rules Engine — Supports jurisdiction-specific vaccination rules for defined populations.
- Original 4309 / pediatric-vaccine-rule-profiles: Vaccine Product & Antigen Equivalence Engine — Maps vaccines across manufacturers, countries and historical records.
- Original 4310 / pediatric-vaccine-rule-profiles: Dynamic Vaccination Guideline Update Engine — Maintains changing vaccination guidance.
- Original 4312 / pediatric-vaccine-rule-profiles: Vaccine Component Allergy Cross-Check Engine — Cross-checks documented allergies against vaccine components.
- Original 4313 / pediatric-vaccine-rule-profiles: Previous Severe Vaccine Reaction Engine — Detects clinically significant previous vaccine reactions.
- Original 4314 / pediatric-vaccine-rule-profiles: Vaccine Anaphylaxis Safety Module — Supports vaccine-related anaphylaxis documentation and safety workflows.
- Original 4315 / pediatric-vaccine-rule-profiles: Vaccination Contraindication Classification Engine — Separates clinically different vaccination restrictions.
- Original 4316 / pediatric-vaccine-rule-profiles: Temporary Vaccination Deferral Module — Supports clinician-authorized temporary vaccination deferral.
- Original 4317 / pediatric-vaccine-rule-profiles: Post-Acute-Illness Vaccination Reassessment Engine — Supports vaccination reassessment following acute illness.
- Original 4318 / pediatric-vaccine-rule-profiles: Immunodeficiency Vaccination Safety Engine — Supports vaccination assessment in patients with immune disorders.
- Original 4319 / pediatric-vaccine-rule-profiles: Immunosuppressive Therapy Vaccination Rules Engine — Evaluates vaccination considerations around immunosuppressive treatment.
- Original 4320 / pediatric-vaccine-rule-profiles: Live Vaccine Restriction Intelligence Engine — Supports additional safety controls for live vaccines.
- Original 4325 / pediatric-vaccine-rule-profiles: Specialist Vaccination Clearance Module — Supports specialist authorization workflows when vaccination requires additional review.
- Original 4330 / pediatric-vaccine-rule-profiles: Country-Specific Vaccine Exemption Legal Rules Engine — Maintains jurisdiction-specific rules for medical vaccination exemptions.
- Original 4336 / pediatric-vaccine-rule-profiles: Personal Vaccination Timeline Module — Creates a lifelong vaccination timeline.
- Original 4338 / pediatric-vaccine-rule-profiles: Pregnancy & Future Pregnancy Vaccination Context Module — Supports vaccination-related clinical context where pregnancy is relevant.
- Original 4342 / pediatric-vaccine-rule-profiles: Vaccine Batch & Recall Safety Engine — Connects vaccination history to vaccine batch safety information.
- Original 4343 / pediatric-vaccine-rule-profiles: Vaccine Pharmacovigilance Intelligence Module — Supports structured vaccine safety surveillance.
- Original 4345 / pediatric-vaccine-rule-profiles: Vaccination Evidence Provenance Engine — Maintains evidence provenance for vaccination rules.
- Original 4346 / pediatric-vaccine-rule-profiles: Vaccination Clinical Rules Validation Sandbox — Provides a controlled environment for testing vaccination rule updates before deployment.
- Original 4348 / pediatric-vaccine-rule-profiles: Multilingual Vaccination Education Module — Provides understandable vaccination information in supported languages.
- Original 4350 / pediatric-vaccine-rule-profiles: EDHT Global Vaccination Intelligence Hub — Coordinates the complete EDHT vaccination ecosystem.
- Original 4421 / pediatric-vaccine-rule-profiles: Pediatric Vaccine Allergy Specialist Clearance Module — Supports allergist/immunologist review before vaccination when clinically required.
- Original 1005 / vaccination-history-archive: Pediatric Vaccination History Archive — Stores complete vaccination history.
- Original 11 / core-vaccination-records: Vaccinations Table — Stores all vaccination records for the user.
- Original 60 / core-vaccination-records: Vaccinations API — Defines all API endpoints for vaccination management.
- Original 109 / core-vaccination-records: Vaccination Management — Record vaccine administration and certificates and support booster reminders and travel context.
- Original 827 / core-vaccination-records: Pediatric Vaccination Center — Stores complete vaccination history.

## Requirements and source metadata

<a id="M19-CAP-IMMUNIZATION-c5ed9e5e312201db"></a>
- **M19-CAP-IMMUNIZATION-c5ed9e5e312201db**: Supports country-specific vaccination schedules.
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-11d88a533b261210"></a>
- **M19-CAP-IMMUNIZATION-11d88a533b261210**: Maintains versioned rules by
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-580c32d823047de1"></a>
- **M19-CAP-IMMUNIZATION-580c32d823047de1**: Country
  Applies to original IDs: 4272, 4309, 4310, 60, 109.

<a id="M19-CAP-IMMUNIZATION-c1da89035bd39c9d"></a>
- **M19-CAP-IMMUNIZATION-c1da89035bd39c9d**: Region
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-d105f29dd1ec7126"></a>
- **M19-CAP-IMMUNIZATION-d105f29dd1ec7126**: Age
  Applies to original IDs: 4272, 4274, 4275, 4306, 4308.

<a id="M19-CAP-IMMUNIZATION-91bf9dee3f6be072"></a>
- **M19-CAP-IMMUNIZATION-91bf9dee3f6be072**: Risk Group
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-230f521a3a8985bc"></a>
- **M19-CAP-IMMUNIZATION-230f521a3a8985bc**: Vaccine
  Applies to original IDs: 4272, 4276, 109.

<a id="M19-CAP-IMMUNIZATION-896ce33528860b22"></a>
- **M19-CAP-IMMUNIZATION-896ce33528860b22**: Schedule Version
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-13fdabb1aa8b539f"></a>
- **M19-CAP-IMMUNIZATION-13fdabb1aa8b539f**: Effective Date
  Applies to original IDs: 4272, 4310, 4330, 4345.

<a id="M19-CAP-IMMUNIZATION-8a362daeb154685d"></a>
- **M19-CAP-IMMUNIZATION-8a362daeb154685d**: Allows EDHT to interpret vaccination records when a child moves between countries.
  Applies to original IDs: 4272.

<a id="M19-CAP-IMMUNIZATION-5ba74d8fcc7b20cc"></a>
- **M19-CAP-IMMUNIZATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 4272, 4274, 4275, 4276, 4280, 4302, 4303, 4304, 4306, 4308, 4309, 4310, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4325, 4330, 4336, 4338, 4342, 4343, 4345, 4346, 4348, 4350, 4421, 1005, 11, 60, 109, 827.

<a id="M19-CAP-IMMUNIZATION-d5232cbd3a326267"></a>
- **M19-CAP-IMMUNIZATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4272, 4274, 4275, 4276, 4280, 4302, 4303, 4304, 4306, 4308, 4309, 4310, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4325, 4330, 4336, 4338, 4342, 4343, 4345, 4346, 4348, 4350, 4421, 1005, 11, 60, 109, 827.

<a id="M19-CAP-IMMUNIZATION-6f33acf3afb37064"></a>
- **M19-CAP-IMMUNIZATION-6f33acf3afb37064**: ---
  Applies to original IDs: 4272, 4274, 4275, 4276, 4280, 4302, 4303, 4304, 4306, 4308, 4309, 4310, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4325, 4330, 4336, 4338, 4342, 4343, 4345, 4346, 4348, 4350, 4421, 1005, 11, 60, 109, 827.

<a id="M19-CAP-IMMUNIZATION-ef2d0139d5fdfc78"></a>
- **M19-CAP-IMMUNIZATION-ef2d0139d5fdfc78**: Supports clinician-reviewed catch-up vaccination planning.
  Applies to original IDs: 4274.

<a id="M19-CAP-IMMUNIZATION-0535ebb6ad4f5674"></a>
- **M19-CAP-IMMUNIZATION-0535ebb6ad4f5674**: Analyzes
  Applies to original IDs: 4274, 4306.

<a id="M19-CAP-IMMUNIZATION-74b7b4272d9dd817"></a>
- **M19-CAP-IMMUNIZATION-74b7b4272d9dd817**: Previous Doses
  Applies to original IDs: 4274, 4302, 4319.

<a id="M19-CAP-IMMUNIZATION-9560797739c1b3e0"></a>
- **M19-CAP-IMMUNIZATION-9560797739c1b3e0**: Vaccine Products
  Applies to original IDs: 4274, 4306.

<a id="M19-CAP-IMMUNIZATION-f2a18d34b875ccba"></a>
- **M19-CAP-IMMUNIZATION-f2a18d34b875ccba**: Dose Dates
  Applies to original IDs: 4274.

<a id="M19-CAP-IMMUNIZATION-09e6675247f7663c"></a>
- **M19-CAP-IMMUNIZATION-09e6675247f7663c**: Country Schedule
  Applies to original IDs: 4274.

<a id="M19-CAP-IMMUNIZATION-5e1bee5c4692460f"></a>
- **M19-CAP-IMMUNIZATION-5e1bee5c4692460f**: Risk Factors
  Applies to original IDs: 4274, 4338.

<a id="M19-CAP-IMMUNIZATION-37686c4220a596f9"></a>
- **M19-CAP-IMMUNIZATION-37686c4220a596f9**: Contraindications
  Applies to original IDs: 4274, 4336, 4346, 4348, 4350.

<a id="M19-CAP-IMMUNIZATION-7bada26bac8e9353"></a>
- **M19-CAP-IMMUNIZATION-7bada26bac8e9353**: Uses version-controlled official vaccination rules.
  Applies to original IDs: 4274.

<a id="M19-CAP-IMMUNIZATION-3e95809c7784cd8b"></a>
- **M19-CAP-IMMUNIZATION-3e95809c7784cd8b**: Supports vaccination safety assessment.
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-21d94006fa494f95"></a>
- **M19-CAP-IMMUNIZATION-21d94006fa494f95**: Integrates
  Applies to original IDs: 4275, 4280, 4314, 4318, 4338, 4350.

<a id="M19-CAP-IMMUNIZATION-d835ebeab7bc56b9"></a>
- **M19-CAP-IMMUNIZATION-d835ebeab7bc56b9**: Medical Conditions
  Applies to original IDs: 4275, 4306.

<a id="M19-CAP-IMMUNIZATION-bbbece7a847db335"></a>
- **M19-CAP-IMMUNIZATION-bbbece7a847db335**: Immunosuppression
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-5ece9f76c54dd0a2"></a>
- **M19-CAP-IMMUNIZATION-5ece9f76c54dd0a2**: Allergies
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-4b5b0c8caca3c931"></a>
- **M19-CAP-IMMUNIZATION-4b5b0c8caca3c931**: Previous Reactions
  Applies to original IDs: 4275, 4320.

<a id="M19-CAP-IMMUNIZATION-05e576d32d372247"></a>
- **M19-CAP-IMMUNIZATION-05e576d32d372247**: Current Therapy
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-b5c7a5b2b9c378f9"></a>
- **M19-CAP-IMMUNIZATION-b5c7a5b2b9c378f9**: Pregnancy Context where relevant
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-f3b0ea526c46893c"></a>
- **M19-CAP-IMMUNIZATION-f3b0ea526c46893c**: Vaccine-specific Guidance
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-850b128d2060e521"></a>
- **M19-CAP-IMMUNIZATION-850b128d2060e521**: Final eligibility remains a clinical determination.
  Applies to original IDs: 4275.

<a id="M19-CAP-IMMUNIZATION-c4c2dd334f25748b"></a>
- **M19-CAP-IMMUNIZATION-c4c2dd334f25748b**: Supports structured documentation of events following immunization.
  Applies to original IDs: 4276.

<a id="M19-CAP-IMMUNIZATION-f01a0c3644ebaf7a"></a>
- **M19-CAP-IMMUNIZATION-f01a0c3644ebaf7a**: Records
  Applies to original IDs: 4276, 4316.

<a id="M19-CAP-IMMUNIZATION-61633d20dcec1aa3"></a>
- **M19-CAP-IMMUNIZATION-61633d20dcec1aa3**: Batch
  Applies to original IDs: 4276, 4343.

<a id="M19-CAP-IMMUNIZATION-03bf1582655475eb"></a>
- **M19-CAP-IMMUNIZATION-03bf1582655475eb**: Timing
  Applies to original IDs: 4276, 4313, 4343.

<a id="M19-CAP-IMMUNIZATION-8ea50d2707dd1600"></a>
- **M19-CAP-IMMUNIZATION-8ea50d2707dd1600**: Symptoms
  Applies to original IDs: 4276.

<a id="M19-CAP-IMMUNIZATION-0dbeacb9f9ac3f6a"></a>
- **M19-CAP-IMMUNIZATION-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 4276, 4313.

<a id="M19-CAP-IMMUNIZATION-f79af291ff84fc7b"></a>
- **M19-CAP-IMMUNIZATION-f79af291ff84fc7b**: Clinical Assessment
  Applies to original IDs: 4276, 4343.

<a id="M19-CAP-IMMUNIZATION-0207549b28719905"></a>
- **M19-CAP-IMMUNIZATION-0207549b28719905**: Treatment
  Applies to original IDs: 4276.

<a id="M19-CAP-IMMUNIZATION-9029a8bbdb8a6553"></a>
- **M19-CAP-IMMUNIZATION-9029a8bbdb8a6553**: Outcome
  Applies to original IDs: 4276, 4343.

<a id="M19-CAP-IMMUNIZATION-49d025e664d07a7c"></a>
- **M19-CAP-IMMUNIZATION-49d025e664d07a7c**: Supports jurisdiction-specific pharmacovigilance workflows.
  Applies to original IDs: 4276.

<a id="M19-CAP-IMMUNIZATION-301d7c11310fe51f"></a>
- **M19-CAP-IMMUNIZATION-301d7c11310fe51f**: Supports vaccine storage quality information.
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-33ac6de450eceaba"></a>
- **M19-CAP-IMMUNIZATION-33ac6de450eceaba**: Temperature Monitoring
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-8caa6f16a08e9eff"></a>
- **M19-CAP-IMMUNIZATION-8caa6f16a08e9eff**: Storage Device Data
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-eaae63901375f2ae"></a>
- **M19-CAP-IMMUNIZATION-eaae63901375f2ae**: Excursion Events
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-817dbaef88a7317d"></a>
- **M19-CAP-IMMUNIZATION-817dbaef88a7317d**: Batch Information
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-aac1a1fb6261c2d3"></a>
- **M19-CAP-IMMUNIZATION-aac1a1fb6261c2d3**: Quarantine Status
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-dc810d2a524ef6b5"></a>
- **M19-CAP-IMMUNIZATION-dc810d2a524ef6b5**: Corrective Actions
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-be0cbe3a94d5a15a"></a>
- **M19-CAP-IMMUNIZATION-be0cbe3a94d5a15a**: Audit History
  Applies to original IDs: 4280.

<a id="M19-CAP-IMMUNIZATION-647611586cf0e6d1"></a>
- **M19-CAP-IMMUNIZATION-647611586cf0e6d1**: Determines vaccination eligibility using jurisdiction-specific rules.
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-4d7b4c17b47d42b1"></a>
- **M19-CAP-IMMUNIZATION-4d7b4c17b47d42b1**: Evaluates
  Applies to original IDs: 4302, 4308, 4313, 4317, 4320.

<a id="M19-CAP-IMMUNIZATION-5aa92c1ab6beeaaf"></a>
- **M19-CAP-IMMUNIZATION-5aa92c1ab6beeaaf**: Chronological Age
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-b361ec2973528682"></a>
- **M19-CAP-IMMUNIZATION-b361ec2973528682**: Minimum Age
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-7d189f8d825f47da"></a>
- **M19-CAP-IMMUNIZATION-7d189f8d825f47da**: Recommended Age
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-8dc7327c693dd088"></a>
- **M19-CAP-IMMUNIZATION-8dc7327c693dd088**: Maximum or Special Age Windows
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-dc296e6d94a13c7e"></a>
- **M19-CAP-IMMUNIZATION-dc296e6d94a13c7e**: Medical Risk Groups
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-8683d1e6bbc88188"></a>
- **M19-CAP-IMMUNIZATION-8683d1e6bbc88188**: Previous Infection where applicable
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-17e4822585a3ba02"></a>
- **M19-CAP-IMMUNIZATION-17e4822585a3ba02**: National Guidance Version
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-5b1523fac85d43e9"></a>
- **M19-CAP-IMMUNIZATION-5b1523fac85d43e9**: Produces clinician-reviewable eligibility status.
  Applies to original IDs: 4302.

<a id="M19-CAP-IMMUNIZATION-ec291b6ce3cfa667"></a>
- **M19-CAP-IMMUNIZATION-ec291b6ce3cfa667**: Calculates vaccine dose intervals.
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-4fbeeb87456accf5"></a>
- **M19-CAP-IMMUNIZATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 4303, 4309, 4312, 4319, 4330, 1005, 60, 827.

<a id="M19-CAP-IMMUNIZATION-5a2a30b242d7ca8b"></a>
- **M19-CAP-IMMUNIZATION-5a2a30b242d7ca8b**: Previous Dose Date
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-edbed9152b1be900"></a>
- **M19-CAP-IMMUNIZATION-edbed9152b1be900**: Minimum Interval
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-45912f0f9069b65f"></a>
- **M19-CAP-IMMUNIZATION-45912f0f9069b65f**: Recommended Interval
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-626347f6dd34f6a2"></a>
- **M19-CAP-IMMUNIZATION-626347f6dd34f6a2**: Dose Number
  Applies to original IDs: 4303, 60.

<a id="M19-CAP-IMMUNIZATION-19689dbaf893736c"></a>
- **M19-CAP-IMMUNIZATION-19689dbaf893736c**: Vaccine Product
  Applies to original IDs: 4303, 4314, 4343.

<a id="M19-CAP-IMMUNIZATION-7994f4eb951a01d6"></a>
- **M19-CAP-IMMUNIZATION-7994f4eb951a01d6**: Antigen Equivalence
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-864d2c1d4f3b0ef1"></a>
- **M19-CAP-IMMUNIZATION-864d2c1d4f3b0ef1**: Delayed Doses
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-547585ea3fe22a69"></a>
- **M19-CAP-IMMUNIZATION-547585ea3fe22a69**: Catch-up Schedules
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-76f9b0d563a26b98"></a>
- **M19-CAP-IMMUNIZATION-76f9b0d563a26b98**: Prevents simple calendar logic from incorrectly restarting vaccine series.
  Applies to original IDs: 4303.

<a id="M19-CAP-IMMUNIZATION-d0727faf78919f17"></a>
- **M19-CAP-IMMUNIZATION-d0727faf78919f17**: Calculates personalized vaccination windows.
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-4db49935c1bab8b0"></a>
- **M19-CAP-IMMUNIZATION-4db49935c1bab8b0**: Provides
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-f036c5225f718983"></a>
- **M19-CAP-IMMUNIZATION-f036c5225f718983**: Earliest Valid Date
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-131f50278d39f986"></a>
- **M19-CAP-IMMUNIZATION-131f50278d39f986**: Recommended Date
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-742fa668d0078f09"></a>
- **M19-CAP-IMMUNIZATION-742fa668d0078f09**: Recommended Window
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-6b1adb838dc35c39"></a>
- **M19-CAP-IMMUNIZATION-6b1adb838dc35c39**: Due Soon Status
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-12fa8647194b91d1"></a>
- **M19-CAP-IMMUNIZATION-12fa8647194b91d1**: Due Status
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-75abbc3e67985e1b"></a>
- **M19-CAP-IMMUNIZATION-75abbc3e67985e1b**: Overdue Status
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-d92b09a7e7fd8cdd"></a>
- **M19-CAP-IMMUNIZATION-d92b09a7e7fd8cdd**: Catch-up Requirement
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-ff95f2e3ab52ceb4"></a>
- **M19-CAP-IMMUNIZATION-ff95f2e3ab52ceb4**: All calculations retain source jurisdiction and rule version.
  Applies to original IDs: 4304.

<a id="M19-CAP-IMMUNIZATION-d580f46a8bbdc4ad"></a>
- **M19-CAP-IMMUNIZATION-d580f46a8bbdc4ad**: Supports individualized catch-up vaccination planning.
  Applies to original IDs: 4306.

<a id="M19-CAP-IMMUNIZATION-0de85d2208bbb73f"></a>
- **M19-CAP-IMMUNIZATION-0de85d2208bbb73f**: Missing Doses
  Applies to original IDs: 4306.

<a id="M19-CAP-IMMUNIZATION-741a5286860a4ab4"></a>
- **M19-CAP-IMMUNIZATION-741a5286860a4ab4**: Previous Valid Doses
  Applies to original IDs: 4306.

<a id="M19-CAP-IMMUNIZATION-b081d12809b1d8fc"></a>
- **M19-CAP-IMMUNIZATION-b081d12809b1d8fc**: Dose Intervals
  Applies to original IDs: 4306, 4346.

<a id="M19-CAP-IMMUNIZATION-dc7cb60e8a3c6a90"></a>
- **M19-CAP-IMMUNIZATION-dc7cb60e8a3c6a90**: National Schedule
  Applies to original IDs: 4306, 827.

<a id="M19-CAP-IMMUNIZATION-0532d62e9c85a78a"></a>
- **M19-CAP-IMMUNIZATION-0532d62e9c85a78a**: Risk Groups
  Applies to original IDs: 4306.

<a id="M19-CAP-IMMUNIZATION-af632afacc882c84"></a>
- **M19-CAP-IMMUNIZATION-af632afacc882c84**: Proposed catch-up pathways require applicable professional validation.
  Applies to original IDs: 4306.

<a id="M19-CAP-IMMUNIZATION-4c044670c502706a"></a>
- **M19-CAP-IMMUNIZATION-4c044670c502706a**: Supports jurisdiction-specific vaccination rules for defined populations.
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-18231f93433a4b55"></a>
- **M19-CAP-IMMUNIZATION-18231f93433a4b55**: Sex-related Criteria where clinically and legally applicable
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-fbe4fa9de8f4c218"></a>
- **M19-CAP-IMMUNIZATION-fbe4fa9de8f4c218**: Pregnancy-related Context where applicable
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-289d3f9917c73895"></a>
- **M19-CAP-IMMUNIZATION-289d3f9917c73895**: Medical Risk
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-61c4fdec9ada10b8"></a>
- **M19-CAP-IMMUNIZATION-61c4fdec9ada10b8**: Occupational Risk
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-0cdb4cf1d2585dc9"></a>
- **M19-CAP-IMMUNIZATION-0cdb4cf1d2585dc9**: Epidemiological Risk
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-e7e6035fcc37a046"></a>
- **M19-CAP-IMMUNIZATION-e7e6035fcc37a046**: National Guidance
  Applies to original IDs: 4308, 4317, 4338.

<a id="M19-CAP-IMMUNIZATION-1232a219b3a418d6"></a>
- **M19-CAP-IMMUNIZATION-1232a219b3a418d6**: Rules are versioned and never treated as globally universal.
  Applies to original IDs: 4308.

<a id="M19-CAP-IMMUNIZATION-02333836d2dac82c"></a>
- **M19-CAP-IMMUNIZATION-02333836d2dac82c**: Maps vaccines across manufacturers, countries and historical records.
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-facd88bd64eea9b4"></a>
- **M19-CAP-IMMUNIZATION-facd88bd64eea9b4**: Commercial Product Name
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-c1852fa4d87441fe"></a>
- **M19-CAP-IMMUNIZATION-c1852fa4d87441fe**: Generic Vaccine Type
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-84b6c9501b50bbf9"></a>
- **M19-CAP-IMMUNIZATION-84b6c9501b50bbf9**: Antigen Components
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-e6322ac09f884cf3"></a>
- **M19-CAP-IMMUNIZATION-e6322ac09f884cf3**: Manufacturer
  Applies to original IDs: 4309, 4342, 60.

<a id="M19-CAP-IMMUNIZATION-78b8efe1df6da411"></a>
- **M19-CAP-IMMUNIZATION-78b8efe1df6da411**: Combination Vaccines
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-d534853bf2093482"></a>
- **M19-CAP-IMMUNIZATION-d534853bf2093482**: Historical Products
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-285520b556546d93"></a>
- **M19-CAP-IMMUNIZATION-285520b556546d93**: Product Changes
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-c9ad196fc66c44b6"></a>
- **M19-CAP-IMMUNIZATION-c9ad196fc66c44b6**: Enables cross-border immunization interpretation.
  Applies to original IDs: 4309.

<a id="M19-CAP-IMMUNIZATION-6d8235b5afcb059d"></a>
- **M19-CAP-IMMUNIZATION-6d8235b5afcb059d**: Maintains changing vaccination guidance.
  Applies to original IDs: 4310.

<a id="M19-CAP-IMMUNIZATION-20dcf9e08bfc7cd6"></a>
- **M19-CAP-IMMUNIZATION-20dcf9e08bfc7cd6**: Tracks
  Applies to original IDs: 4310, 4342.

<a id="M19-CAP-IMMUNIZATION-e0fd7f441ec8df4e"></a>
- **M19-CAP-IMMUNIZATION-e0fd7f441ec8df4e**: Source Authority
  Applies to original IDs: 4310, 4345.

<a id="M19-CAP-IMMUNIZATION-77ec714e9b6f9396"></a>
- **M19-CAP-IMMUNIZATION-77ec714e9b6f9396**: Guideline Version
  Applies to original IDs: 4310.

<a id="M19-CAP-IMMUNIZATION-6a79ffc40162391a"></a>
- **M19-CAP-IMMUNIZATION-6a79ffc40162391a**: Publication Date
  Applies to original IDs: 4310, 4345.

<a id="M19-CAP-IMMUNIZATION-07950d073084f3bf"></a>
- **M19-CAP-IMMUNIZATION-07950d073084f3bf**: Superseded Rules
  Applies to original IDs: 4310.

<a id="M19-CAP-IMMUNIZATION-36c8d5bad1558aa8"></a>
- **M19-CAP-IMMUNIZATION-36c8d5bad1558aa8**: Rule Changes
  Applies to original IDs: 4310.

<a id="M19-CAP-IMMUNIZATION-01c6e8228acf635c"></a>
- **M19-CAP-IMMUNIZATION-01c6e8228acf635c**: Evidence Provenance
  Applies to original IDs: 4310, 4350.

<a id="M19-CAP-IMMUNIZATION-a478f299626d934e"></a>
- **M19-CAP-IMMUNIZATION-a478f299626d934e**: Historical patient decisions remain linked to the rule version active at that time.
  Applies to original IDs: 4310.

<a id="M19-CAP-IMMUNIZATION-5db37ebbc2577f80"></a>
- **M19-CAP-IMMUNIZATION-5db37ebbc2577f80**: Cross-checks documented allergies against vaccine components.
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-52bb13c5bf21b889"></a>
- **M19-CAP-IMMUNIZATION-52bb13c5bf21b889**: Active Ingredients
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-8f66aa0decd17b5b"></a>
- **M19-CAP-IMMUNIZATION-8f66aa0decd17b5b**: Excipients
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-25bb28a886ddf624"></a>
- **M19-CAP-IMMUNIZATION-25bb28a886ddf624**: Residual Components
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-dfddeb3b9f9d6f01"></a>
- **M19-CAP-IMMUNIZATION-dfddeb3b9f9d6f01**: Packaging-related Allergens where relevant
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-af7b77f3426f4398"></a>
- **M19-CAP-IMMUNIZATION-af7b77f3426f4398**: Previous Reaction Evidence
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-987adb6799f88641"></a>
- **M19-CAP-IMMUNIZATION-987adb6799f88641**: Potential conflicts generate clinical review alerts rather than autonomous refusal.
  Applies to original IDs: 4312.

<a id="M19-CAP-IMMUNIZATION-c37b5c42209ce537"></a>
- **M19-CAP-IMMUNIZATION-c37b5c42209ce537**: Detects clinically significant previous vaccine reactions.
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-3a78e87c42783d8e"></a>
- **M19-CAP-IMMUNIZATION-3a78e87c42783d8e**: Previous Vaccine
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-364a4c7e3ce06ed8"></a>
- **M19-CAP-IMMUNIZATION-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-bca735897c201d50"></a>
- **M19-CAP-IMMUNIZATION-bca735897c201d50**: Reaction Phenotype
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-f85943bc69fc6e69"></a>
- **M19-CAP-IMMUNIZATION-f85943bc69fc6e69**: Emergency Treatment
  Applies to original IDs: 4313, 4314.

<a id="M19-CAP-IMMUNIZATION-8a8b56a3abe303f6"></a>
- **M19-CAP-IMMUNIZATION-8a8b56a3abe303f6**: Specialist Findings
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-215b6110aab4d175"></a>
- **M19-CAP-IMMUNIZATION-215b6110aab4d175**: Subsequent Vaccination History
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-6918df1c1215aa47"></a>
- **M19-CAP-IMMUNIZATION-6918df1c1215aa47**: Supports safety escalation before future vaccination.
  Applies to original IDs: 4313.

<a id="M19-CAP-IMMUNIZATION-a0ff2e6fd4ab90e3"></a>
- **M19-CAP-IMMUNIZATION-a0ff2e6fd4ab90e3**: Supports vaccine-related anaphylaxis documentation and safety workflows.
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-32f0a5d78464a9a4"></a>
- **M19-CAP-IMMUNIZATION-32f0a5d78464a9a4**: Suspected Trigger
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-d6dddab36a72a2c6"></a>
- **M19-CAP-IMMUNIZATION-d6dddab36a72a2c6**: Reaction Timeline
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-7d11bd61845619a8"></a>
- **M19-CAP-IMMUNIZATION-7d11bd61845619a8**: Clinical Findings
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-f67b04cecd8229ed"></a>
- **M19-CAP-IMMUNIZATION-f67b04cecd8229ed**: Components
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-4fca7076f761582a"></a>
- **M19-CAP-IMMUNIZATION-4fca7076f761582a**: Allergy Assessment
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-4cb3f0aba13aa1ee"></a>
- **M19-CAP-IMMUNIZATION-4cb3f0aba13aa1ee**: Future Vaccination Plan
  Applies to original IDs: 4314.

<a id="M19-CAP-IMMUNIZATION-9dd970af1397ca36"></a>
- **M19-CAP-IMMUNIZATION-9dd970af1397ca36**: Separates clinically different vaccination restrictions.
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-3389517df873026f"></a>
- **M19-CAP-IMMUNIZATION-3389517df873026f**: Classifies
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-8b7a2da51dc4fdf6"></a>
- **M19-CAP-IMMUNIZATION-8b7a2da51dc4fdf6**: Confirmed Contraindication
  Applies to original IDs: 4315, 4421.

<a id="M19-CAP-IMMUNIZATION-7802ca19d05937be"></a>
- **M19-CAP-IMMUNIZATION-7802ca19d05937be**: Temporary Deferral
  Applies to original IDs: 4315, 4421.

<a id="M19-CAP-IMMUNIZATION-23c4f137429f120e"></a>
- **M19-CAP-IMMUNIZATION-23c4f137429f120e**: Precaution
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-d5d65be3e4a5acda"></a>
- **M19-CAP-IMMUNIZATION-d5d65be3e4a5acda**: Specialist Review Required
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-d2c60e2ddbcd5569"></a>
- **M19-CAP-IMMUNIZATION-d2c60e2ddbcd5569**: Product-specific Restriction
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-1122ac5c68fe57f0"></a>
- **M19-CAP-IMMUNIZATION-1122ac5c68fe57f0**: Vaccine-class Restriction
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-ee2e300be2b6672f"></a>
- **M19-CAP-IMMUNIZATION-ee2e300be2b6672f**: No Confirmed Contraindication
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-dd9fccfce50dbdcc"></a>
- **M19-CAP-IMMUNIZATION-dd9fccfce50dbdcc**: Prevents all restrictions from being represented simply as "vaccination prohibited."
  Applies to original IDs: 4315.

<a id="M19-CAP-IMMUNIZATION-2bba46fefbc02963"></a>
- **M19-CAP-IMMUNIZATION-2bba46fefbc02963**: Supports clinician-authorized temporary vaccination deferral.
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-2483452c56552068"></a>
- **M19-CAP-IMMUNIZATION-2483452c56552068**: Reason
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-723be31e47b5013c"></a>
- **M19-CAP-IMMUNIZATION-723be31e47b5013c**: Affected Vaccine
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-2422e0f7d14fc2a1"></a>
- **M19-CAP-IMMUNIZATION-2422e0f7d14fc2a1**: Start Date
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-e6fd3b7a126485e8"></a>
- **M19-CAP-IMMUNIZATION-e6fd3b7a126485e8**: Review Date
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-337b49704d348de9"></a>
- **M19-CAP-IMMUNIZATION-337b49704d348de9**: Expiration Date
  Applies to original IDs: 4316, 60.

<a id="M19-CAP-IMMUNIZATION-73c7d2c169e9d949"></a>
- **M19-CAP-IMMUNIZATION-73c7d2c169e9d949**: Authorizing Clinician
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-5cd5827a07dbb6e3"></a>
- **M19-CAP-IMMUNIZATION-5cd5827a07dbb6e3**: Supporting Evidence
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-8dcf50da896726c9"></a>
- **M19-CAP-IMMUNIZATION-8dcf50da896726c9**: Jurisdiction
  Applies to original IDs: 4316, 4345.

<a id="M19-CAP-IMMUNIZATION-eb37461b9426f99b"></a>
- **M19-CAP-IMMUNIZATION-eb37461b9426f99b**: No universal fixed post-infection waiting period is assumed.
  Applies to original IDs: 4316.

<a id="M19-CAP-IMMUNIZATION-0d8f48ec67dbce6c"></a>
- **M19-CAP-IMMUNIZATION-0d8f48ec67dbce6c**: Supports vaccination reassessment following acute illness.
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-51db37ff0aa62c4f"></a>
- **M19-CAP-IMMUNIZATION-51db37ff0aa62c4f**: Current Clinical Status
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-1f09b3343d6c0a80"></a>
- **M19-CAP-IMMUNIZATION-1f09b3343d6c0a80**: Illness Severity
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-2ead501f1441e7f1"></a>
- **M19-CAP-IMMUNIZATION-2ead501f1441e7f1**: Recovery
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-3a9aabe209294833"></a>
- **M19-CAP-IMMUNIZATION-3a9aabe209294833**: Fever
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-3e9e9cdedddcaab8"></a>
- **M19-CAP-IMMUNIZATION-3e9e9cdedddcaab8**: Planned Vaccine
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-48170a21bf13a6b3"></a>
- **M19-CAP-IMMUNIZATION-48170a21bf13a6b3**: Specialist Instructions
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-09c0a0dbc9a8e0f1"></a>
- **M19-CAP-IMMUNIZATION-09c0a0dbc9a8e0f1**: Does not impose a universal waiting period after every respiratory infection.
  Applies to original IDs: 4317.

<a id="M19-CAP-IMMUNIZATION-55a09dd74e0457ee"></a>
- **M19-CAP-IMMUNIZATION-55a09dd74e0457ee**: Supports vaccination assessment in patients with immune disorders.
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-e76820d23209012b"></a>
- **M19-CAP-IMMUNIZATION-e76820d23209012b**: Immune Diagnosis
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-ee54e27f27fe774f"></a>
- **M19-CAP-IMMUNIZATION-ee54e27f27fe774f**: Immune Function
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-c416dd3f1f7776ec"></a>
- **M19-CAP-IMMUNIZATION-c416dd3f1f7776ec**: Laboratory Findings
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-7ec42d2ad16af21e"></a>
- **M19-CAP-IMMUNIZATION-7ec42d2ad16af21e**: Vaccine Type
  Applies to original IDs: 4318, 4319, 4320, 4338.

<a id="M19-CAP-IMMUNIZATION-de4ed1dc32363a66"></a>
- **M19-CAP-IMMUNIZATION-de4ed1dc32363a66**: Current Treatment
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-9457444b538e6aff"></a>
- **M19-CAP-IMMUNIZATION-9457444b538e6aff**: Previous Vaccinations
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-6959468a11f3f66f"></a>
- **M19-CAP-IMMUNIZATION-6959468a11f3f66f**: Specialist Recommendations
  Applies to original IDs: 4318.

<a id="M19-CAP-IMMUNIZATION-62a69560e1e7d780"></a>
- **M19-CAP-IMMUNIZATION-62a69560e1e7d780**: Evaluates vaccination considerations around immunosuppressive treatment.
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-3cfa39200ce0ea10"></a>
- **M19-CAP-IMMUNIZATION-3cfa39200ce0ea10**: Medication
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-45b48346ceee45e9"></a>
- **M19-CAP-IMMUNIZATION-45b48346ceee45e9**: Treatment Class
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-9b97c6e8966ca772"></a>
- **M19-CAP-IMMUNIZATION-9b97c6e8966ca772**: Treatment Timeline
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-0f9dc4d340586437"></a>
- **M19-CAP-IMMUNIZATION-0f9dc4d340586437**: Immune Status
  Applies to original IDs: 4319, 4320.

<a id="M19-CAP-IMMUNIZATION-1652c34a9e7dab02"></a>
- **M19-CAP-IMMUNIZATION-1652c34a9e7dab02**: Planned Therapy
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-f5df05d6020d3ecc"></a>
- **M19-CAP-IMMUNIZATION-f5df05d6020d3ecc**: Specialist Decisions
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-81db745de4d368f0"></a>
- **M19-CAP-IMMUNIZATION-81db745de4d368f0**: Rules remain guideline- and jurisdiction-versioned.
  Applies to original IDs: 4319.

<a id="M19-CAP-IMMUNIZATION-2c16bcf58b87a0a8"></a>
- **M19-CAP-IMMUNIZATION-2c16bcf58b87a0a8**: Supports additional safety controls for live vaccines.
  Applies to original IDs: 4320.

<a id="M19-CAP-IMMUNIZATION-1b97c08f2fba9c1d"></a>
- **M19-CAP-IMMUNIZATION-1b97c08f2fba9c1d**: Immunosuppressive Therapy
  Applies to original IDs: 4320.

<a id="M19-CAP-IMMUNIZATION-d1a0431383ca6b11"></a>
- **M19-CAP-IMMUNIZATION-d1a0431383ca6b11**: Relevant Medical Conditions
  Applies to original IDs: 4320.

<a id="M19-CAP-IMMUNIZATION-ccfa68b615f1adce"></a>
- **M19-CAP-IMMUNIZATION-ccfa68b615f1adce**: Specialist Authorization
  Applies to original IDs: 4320.

<a id="M19-CAP-IMMUNIZATION-f71278f490890a70"></a>
- **M19-CAP-IMMUNIZATION-f71278f490890a70**: Applicable Guidance
  Applies to original IDs: 4320.

<a id="M19-CAP-IMMUNIZATION-22787b84e566ba1f"></a>
- **M19-CAP-IMMUNIZATION-22787b84e566ba1f**: Supports specialist authorization workflows when vaccination requires additional review.
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-abc4a500447fb377"></a>
- **M19-CAP-IMMUNIZATION-abc4a500447fb377**: May involve
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-42f99308f2a47eef"></a>
- **M19-CAP-IMMUNIZATION-42f99308f2a47eef**: Allergist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-8a17e09fa2aad5e3"></a>
- **M19-CAP-IMMUNIZATION-8a17e09fa2aad5e3**: Immunologist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-fd8f91419f316340"></a>
- **M19-CAP-IMMUNIZATION-fd8f91419f316340**: Hematologist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-d6ba4cfb3717933d"></a>
- **M19-CAP-IMMUNIZATION-d6ba4cfb3717933d**: Oncologist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-7e624e4cfc2b2133"></a>
- **M19-CAP-IMMUNIZATION-7e624e4cfc2b2133**: Rheumatologist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-fa48d94752f8df7d"></a>
- **M19-CAP-IMMUNIZATION-fa48d94752f8df7d**: Infectious Disease Specialist
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-cb7942c1a914bd31"></a>
- **M19-CAP-IMMUNIZATION-cb7942c1a914bd31**: Other Authorized Clinician
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-ca19383a3d23ef2c"></a>
- **M19-CAP-IMMUNIZATION-ca19383a3d23ef2c**: Records decision provenance and validity period.
  Applies to original IDs: 4325.

<a id="M19-CAP-IMMUNIZATION-84eba3ed639fc159"></a>
- **M19-CAP-IMMUNIZATION-84eba3ed639fc159**: Maintains jurisdiction-specific rules for medical vaccination exemptions.
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-071c10fade3a9631"></a>
- **M19-CAP-IMMUNIZATION-071c10fade3a9631**: Authorized Issuer
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-b66184d4ad30c161"></a>
- **M19-CAP-IMMUNIZATION-b66184d4ad30c161**: Accepted Grounds
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-49277069ebf69e70"></a>
- **M19-CAP-IMMUNIZATION-49277069ebf69e70**: Certificate Requirements
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-35010eaa2c317a3d"></a>
- **M19-CAP-IMMUNIZATION-35010eaa2c317a3d**: Validity Rules
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-56c9bd39bac1c656"></a>
- **M19-CAP-IMMUNIZATION-56c9bd39bac1c656**: Required Evidence
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-71cc018cd43e9032"></a>
- **M19-CAP-IMMUNIZATION-71cc018cd43e9032**: Verification Rules
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-1debc8f655aecacf"></a>
- **M19-CAP-IMMUNIZATION-1debc8f655aecacf**: Legal Version
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-1c2c477c95204e62"></a>
- **M19-CAP-IMMUNIZATION-1c2c477c95204e62**: Separates clinical contraindication from legal recognition of an exemption.
  Applies to original IDs: 4330.

<a id="M19-CAP-IMMUNIZATION-9119bc0c02d36f88"></a>
- **M19-CAP-IMMUNIZATION-9119bc0c02d36f88**: Creates a lifelong vaccination timeline.
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-f3d993f49bc6debb"></a>
- **M19-CAP-IMMUNIZATION-f3d993f49bc6debb**: Displays
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-712d133f27565a27"></a>
- **M19-CAP-IMMUNIZATION-712d133f27565a27**: Completed Vaccinations
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-6cf69bf0d7a73cbe"></a>
- **M19-CAP-IMMUNIZATION-6cf69bf0d7a73cbe**: Upcoming Vaccinations
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-b5942f652670c885"></a>
- **M19-CAP-IMMUNIZATION-b5942f652670c885**: Due Vaccinations
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-437a325617e6c726"></a>
- **M19-CAP-IMMUNIZATION-437a325617e6c726**: Overdue Vaccinations
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-27eaf1da677a8ccf"></a>
- **M19-CAP-IMMUNIZATION-27eaf1da677a8ccf**: Deferrals
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-06099641f4838d9c"></a>
- **M19-CAP-IMMUNIZATION-06099641f4838d9c**: Exemptions
  Applies to original IDs: 4336, 4346.

<a id="M19-CAP-IMMUNIZATION-f01cdca1d8935df0"></a>
- **M19-CAP-IMMUNIZATION-f01cdca1d8935df0**: Historical Schedule Context
  Applies to original IDs: 4336.

<a id="M19-CAP-IMMUNIZATION-937e1cf86e15aa82"></a>
- **M19-CAP-IMMUNIZATION-937e1cf86e15aa82**: Supports vaccination-related clinical context where pregnancy is relevant.
  Applies to original IDs: 4338.

<a id="M19-CAP-IMMUNIZATION-254bcfe40d598cd6"></a>
- **M19-CAP-IMMUNIZATION-254bcfe40d598cd6**: Pregnancy Status
  Applies to original IDs: 4338.

<a id="M19-CAP-IMMUNIZATION-d3059752a0aa0564"></a>
- **M19-CAP-IMMUNIZATION-d3059752a0aa0564**: Gestational Context
  Applies to original IDs: 4338.

<a id="M19-CAP-IMMUNIZATION-8ce66c463bff0a7a"></a>
- **M19-CAP-IMMUNIZATION-8ce66c463bff0a7a**: Previous Vaccination
  Applies to original IDs: 4338.

<a id="M19-CAP-IMMUNIZATION-befc0c88d877cf39"></a>
- **M19-CAP-IMMUNIZATION-befc0c88d877cf39**: Clinician Assessment
  Applies to original IDs: 4338.

<a id="M19-CAP-IMMUNIZATION-551fbc1d6cc9b42d"></a>
- **M19-CAP-IMMUNIZATION-551fbc1d6cc9b42d**: Connects vaccination history to vaccine batch safety information.
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-93f9c381ca40e635"></a>
- **M19-CAP-IMMUNIZATION-93f9c381ca40e635**: Product
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-b0324bbb6383ded7"></a>
- **M19-CAP-IMMUNIZATION-b0324bbb6383ded7**: Batch/Lot
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-1c65129f436c9bd3"></a>
- **M19-CAP-IMMUNIZATION-1c65129f436c9bd3**: Administration Date
  Applies to original IDs: 4342, 60.

<a id="M19-CAP-IMMUNIZATION-0c1607af55487682"></a>
- **M19-CAP-IMMUNIZATION-0c1607af55487682**: Recall Status
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-2d96f86d36994abb"></a>
- **M19-CAP-IMMUNIZATION-2d96f86d36994abb**: Safety Notice
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-f39f9a64f7fe0602"></a>
- **M19-CAP-IMMUNIZATION-f39f9a64f7fe0602**: Patient Notification
  Applies to original IDs: 4342.

<a id="M19-CAP-IMMUNIZATION-0d86946e629cc025"></a>
- **M19-CAP-IMMUNIZATION-0d86946e629cc025**: Follow-up
  Applies to original IDs: 4342, 4348.

<a id="M19-CAP-IMMUNIZATION-fdf23381d75efb4e"></a>
- **M19-CAP-IMMUNIZATION-fdf23381d75efb4e**: Supports structured vaccine safety surveillance.
  Applies to original IDs: 4343.

<a id="M19-CAP-IMMUNIZATION-9c38e0e75817c0c5"></a>
- **M19-CAP-IMMUNIZATION-9c38e0e75817c0c5**: Integrates authorized data on
  Applies to original IDs: 4343.

<a id="M19-CAP-IMMUNIZATION-f749e8c444dc0a0d"></a>
- **M19-CAP-IMMUNIZATION-f749e8c444dc0a0d**: Adverse Events
  Applies to original IDs: 4343.

<a id="M19-CAP-IMMUNIZATION-434c18b891babe1f"></a>
- **M19-CAP-IMMUNIZATION-434c18b891babe1f**: Reporting Status
  Applies to original IDs: 4343.

<a id="M19-CAP-IMMUNIZATION-8c0189cdfff99842"></a>
- **M19-CAP-IMMUNIZATION-8c0189cdfff99842**: Population-level analytics use privacy-preserving controls.
  Applies to original IDs: 4343.

<a id="M19-CAP-IMMUNIZATION-2a8c21cbb9443e7c"></a>
- **M19-CAP-IMMUNIZATION-2a8c21cbb9443e7c**: Maintains evidence provenance for vaccination rules.
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-48c814ce77feecdc"></a>
- **M19-CAP-IMMUNIZATION-48c814ce77feecdc**: Each rule can reference
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-5d43eb529ab935d8"></a>
- **M19-CAP-IMMUNIZATION-5d43eb529ab935d8**: Source Document
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-82e1b71f8b88741f"></a>
- **M19-CAP-IMMUNIZATION-82e1b71f8b88741f**: Version
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-3c03d07c4a648654"></a>
- **M19-CAP-IMMUNIZATION-3c03d07c4a648654**: Evidence Update
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-8d867a44a241d7e2"></a>
- **M19-CAP-IMMUNIZATION-8d867a44a241d7e2**: Superseded Version
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-82c5d287e19f5ac4"></a>
- **M19-CAP-IMMUNIZATION-82c5d287e19f5ac4**: Prevents unsupported AI-generated vaccination rules from entering production logic.
  Applies to original IDs: 4345.

<a id="M19-CAP-IMMUNIZATION-2f253ea22f76dea3"></a>
- **M19-CAP-IMMUNIZATION-2f253ea22f76dea3**: Provides a controlled environment for testing vaccination rule updates before deployment.
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-526dc901e27938d7"></a>
- **M19-CAP-IMMUNIZATION-526dc901e27938d7**: Tests
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-f77569cd2052a6f4"></a>
- **M19-CAP-IMMUNIZATION-f77569cd2052a6f4**: Age Logic
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-fd7b7167105505a6"></a>
- **M19-CAP-IMMUNIZATION-fd7b7167105505a6**: Catch-up Logic
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-c6baf74216b45219"></a>
- **M19-CAP-IMMUNIZATION-c6baf74216b45219**: Country Migration
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-32342c7ea9722c38"></a>
- **M19-CAP-IMMUNIZATION-32342c7ea9722c38**: Historical Records
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-8919d28a26987108"></a>
- **M19-CAP-IMMUNIZATION-8919d28a26987108**: Edge Cases
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-9fcaeb0fc7c84a0e"></a>
- **M19-CAP-IMMUNIZATION-9fcaeb0fc7c84a0e**: Production deployment requires controlled validation.
  Applies to original IDs: 4346.

<a id="M19-CAP-IMMUNIZATION-003ea1187987d7c6"></a>
- **M19-CAP-IMMUNIZATION-003ea1187987d7c6**: Provides understandable vaccination information in supported languages.
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-a9069169527f7d73"></a>
- **M19-CAP-IMMUNIZATION-a9069169527f7d73**: Explains
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-c1b4eddcfe0752b6"></a>
- **M19-CAP-IMMUNIZATION-c1b4eddcfe0752b6**: Vaccine Purpose
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-7ce343523910aa12"></a>
- **M19-CAP-IMMUNIZATION-7ce343523910aa12**: Dose Schedule
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-24109240e5dabc88"></a>
- **M19-CAP-IMMUNIZATION-24109240e5dabc88**: Expected Reactions
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-b3d94e51fefcdde8"></a>
- **M19-CAP-IMMUNIZATION-b3d94e51fefcdde8**: Safety Information
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-add04072a3d31ceb"></a>
- **M19-CAP-IMMUNIZATION-add04072a3d31ceb**: When Medical Review Is Needed
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-fab2913e4017bd62"></a>
- **M19-CAP-IMMUNIZATION-fab2913e4017bd62**: Content maintains source and version provenance.
  Applies to original IDs: 4348.

<a id="M19-CAP-IMMUNIZATION-efa27103f5012e45"></a>
- **M19-CAP-IMMUNIZATION-efa27103f5012e45**: Coordinates the complete EDHT vaccination ecosystem.
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-a3fb76c4d67fed12"></a>
- **M19-CAP-IMMUNIZATION-a3fb76c4d67fed12**: National Immunization Schedules
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-8607eddf8ef3f266"></a>
- **M19-CAP-IMMUNIZATION-8607eddf8ef3f266**: Personalized Vaccination Timelines
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-9cb7e85c822ecf80"></a>
- **M19-CAP-IMMUNIZATION-9cb7e85c822ecf80**: Smart Notifications
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-fbb17b5c1357fbdd"></a>
- **M19-CAP-IMMUNIZATION-fbb17b5c1357fbdd**: Catch-up Vaccination
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-5158ce2dd76f8a6b"></a>
- **M19-CAP-IMMUNIZATION-5158ce2dd76f8a6b**: Cross-border Migration
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-a281379675541a50"></a>
- **M19-CAP-IMMUNIZATION-a281379675541a50**: Vaccine Equivalence
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-1bc66449e89ada64"></a>
- **M19-CAP-IMMUNIZATION-1bc66449e89ada64**: Allergy Safety
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-37ccc87a189d4598"></a>
- **M19-CAP-IMMUNIZATION-37ccc87a189d4598**: Immunodeficiency
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-d5201c8c85a8f994"></a>
- **M19-CAP-IMMUNIZATION-d5201c8c85a8f994**: Hematology
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-6b1b617f18c456db"></a>
- **M19-CAP-IMMUNIZATION-6b1b617f18c456db**: Oncology
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-47794f0e311b46d6"></a>
- **M19-CAP-IMMUNIZATION-47794f0e311b46d6**: Autoimmune Disease
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-84c03a49b9b93f99"></a>
- **M19-CAP-IMMUNIZATION-84c03a49b9b93f99**: Medical Exemptions
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-2b6baf8a4b2a225c"></a>
- **M19-CAP-IMMUNIZATION-2b6baf8a4b2a225c**: Digital Certificates
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-56d90bc33f6d2c8f"></a>
- **M19-CAP-IMMUNIZATION-56d90bc33f6d2c8f**: Pharmacovigilance
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-bc33416493a6176d"></a>
- **M19-CAP-IMMUNIZATION-bc33416493a6176d**: Artificial Intelligence
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-9e9dbb804ca8197a"></a>
- **M19-CAP-IMMUNIZATION-9e9dbb804ca8197a**: Medical Passport
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-a8f7eafa95f5645a"></a>
- **M19-CAP-IMMUNIZATION-a8f7eafa95f5645a**: Provides a global, version-controlled and clinician-supervised vaccination intelligence layer across EDHT.
  Applies to original IDs: 4350.

<a id="M19-CAP-IMMUNIZATION-bcc7159fe00c7203"></a>
- **M19-CAP-IMMUNIZATION-bcc7159fe00c7203**: Supports allergist/immunologist review before vaccination when clinically required.
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-c8c21adf01448cb5"></a>
- **M19-CAP-IMMUNIZATION-c8c21adf01448cb5**: Possible outcomes
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-fd89cc4c0322e4a2"></a>
- **M19-CAP-IMMUNIZATION-fd89cc4c0322e4a2**: Vaccination Permitted
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-65570052aac3d2f2"></a>
- **M19-CAP-IMMUNIZATION-65570052aac3d2f2**: Additional Observation Required
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-5bb55ff64f8f85d9"></a>
- **M19-CAP-IMMUNIZATION-5bb55ff64f8f85d9**: Alternative Product Considered
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-bdf8deb5aeca9a37"></a>
- **M19-CAP-IMMUNIZATION-bdf8deb5aeca9a37**: Specialist-supervised Vaccination
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-211f629c5a8903f8"></a>
- **M19-CAP-IMMUNIZATION-211f629c5a8903f8**: AI cannot issue final clearance.
  Applies to original IDs: 4421.

<a id="M19-CAP-IMMUNIZATION-af20e2e443521901"></a>
- **M19-CAP-IMMUNIZATION-af20e2e443521901**: Stores complete vaccination history.
  Applies to original IDs: 1005, 827.

<a id="M19-CAP-IMMUNIZATION-009f662933cfa40c"></a>
- **M19-CAP-IMMUNIZATION-009f662933cfa40c**: National Vaccines
  Applies to original IDs: 1005.

<a id="M19-CAP-IMMUNIZATION-0883dc21051792e9"></a>
- **M19-CAP-IMMUNIZATION-0883dc21051792e9**: International Vaccines
  Applies to original IDs: 1005.

<a id="M19-CAP-IMMUNIZATION-60c2307a0f352a97"></a>
- **M19-CAP-IMMUNIZATION-60c2307a0f352a97**: Booster Schedule
  Applies to original IDs: 1005.

<a id="M19-CAP-IMMUNIZATION-9c26c1b46bcd0a38"></a>
- **M19-CAP-IMMUNIZATION-9c26c1b46bcd0a38**: QR Verification
  Applies to original IDs: 1005.

<a id="M19-CAP-IMMUNIZATION-763a52f3cdad8e0e"></a>
- **M19-CAP-IMMUNIZATION-763a52f3cdad8e0e**: # Vaccinations Table
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-2f5fdcca89ef8e56"></a>
- **M19-CAP-IMMUNIZATION-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-ff342e594ea9f60f"></a>
- **M19-CAP-IMMUNIZATION-ff342e594ea9f60f**: Stores all vaccination records for the user.
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-90dc9b75b60f53a5"></a>
- **M19-CAP-IMMUNIZATION-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-c91610423a46692c"></a>
- **M19-CAP-IMMUNIZATION-c91610423a46692c**: id (UUID)
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-ff6fb316f9bc6c33"></a>
- **M19-CAP-IMMUNIZATION-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-c559823f6e5c0162"></a>
- **M19-CAP-IMMUNIZATION-c559823f6e5c0162**: medical_profile_id
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-da41093ca7625361"></a>
- **M19-CAP-IMMUNIZATION-da41093ca7625361**: vaccine_name
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-1af2f04633c5e56b"></a>
- **M19-CAP-IMMUNIZATION-1af2f04633c5e56b**: manufacturer
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-cb5b7418aabb2cf7"></a>
- **M19-CAP-IMMUNIZATION-cb5b7418aabb2cf7**: batch_number
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-cad73c5a4ccc7a9b"></a>
- **M19-CAP-IMMUNIZATION-cad73c5a4ccc7a9b**: dose_number
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-4564e0b74eb85db1"></a>
- **M19-CAP-IMMUNIZATION-4564e0b74eb85db1**: total_doses
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-b6294d1af96ced8f"></a>
- **M19-CAP-IMMUNIZATION-b6294d1af96ced8f**: vaccination_date
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-8993b1ad7821190a"></a>
- **M19-CAP-IMMUNIZATION-8993b1ad7821190a**: next_dose_date
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-9fe94e819c56a7a3"></a>
- **M19-CAP-IMMUNIZATION-9fe94e819c56a7a3**: country
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-8c901e2cc2a67b90"></a>
- **M19-CAP-IMMUNIZATION-8c901e2cc2a67b90**: clinic
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-37e500b549e353c0"></a>
- **M19-CAP-IMMUNIZATION-37e500b549e353c0**: doctor
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-fe9bf5b29c157a63"></a>
- **M19-CAP-IMMUNIZATION-fe9bf5b29c157a63**: certificate_number
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-248f3474a10f1c26"></a>
- **M19-CAP-IMMUNIZATION-248f3474a10f1c26**: document_id
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-5754dd8ea427e6f0"></a>
- **M19-CAP-IMMUNIZATION-5754dd8ea427e6f0**: status
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-bcc951dbdead2bf5"></a>
- **M19-CAP-IMMUNIZATION-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-51db2c3a3a174a78"></a>
- **M19-CAP-IMMUNIZATION-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-2fac6cbf308c244b"></a>
- **M19-CAP-IMMUNIZATION-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-c725477367334eb0"></a>
- **M19-CAP-IMMUNIZATION-c725477367334eb0**: Vaccination
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-46172ef655d51ea4"></a>
- **M19-CAP-IMMUNIZATION-46172ef655d51ea4**: ├── User
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-41bd3320fb6ee128"></a>
- **M19-CAP-IMMUNIZATION-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-d3290df0dc43733d"></a>
- **M19-CAP-IMMUNIZATION-d3290df0dc43733d**: ├── Medical Documents
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-efa2a8ae50719ab3"></a>
- **M19-CAP-IMMUNIZATION-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-e329f0af494e8ca9"></a>
- **M19-CAP-IMMUNIZATION-e329f0af494e8ca9**: ├── Travel Module
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-93522f774f6d0bd5"></a>
- **M19-CAP-IMMUNIZATION-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-37bfdffca1a32095"></a>
- **M19-CAP-IMMUNIZATION-37bfdffca1a32095**: Future Features
  Applies to original IDs: 11, 60.

<a id="M19-CAP-IMMUNIZATION-3435414d5a2c6de8"></a>
- **M19-CAP-IMMUNIZATION-3435414d5a2c6de8**: International vaccination certificate
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-5dd2e5b2f126fbe8"></a>
- **M19-CAP-IMMUNIZATION-5dd2e5b2f126fbe8**: WHO compatibility
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-6fe3bf266364b83b"></a>
- **M19-CAP-IMMUNIZATION-6fe3bf266364b83b**: COVID Certificate
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-66088a33b65aa856"></a>
- **M19-CAP-IMMUNIZATION-66088a33b65aa856**: Country requirements
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-bb0b69297b3af9d8"></a>
- **M19-CAP-IMMUNIZATION-bb0b69297b3af9d8**: AI recommendations
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-9f3ffb9f42042efb"></a>
- **M19-CAP-IMMUNIZATION-9f3ffb9f42042efb**: Automatic reminders
  Applies to original IDs: 11.

<a id="M19-CAP-IMMUNIZATION-eed50ae715177407"></a>
- **M19-CAP-IMMUNIZATION-eed50ae715177407**: # Vaccinations API
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-58006c151db3726c"></a>
- **M19-CAP-IMMUNIZATION-58006c151db3726c**: Defines all API endpoints for vaccination management.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-870a9a6fc76ca26a"></a>
- **M19-CAP-IMMUNIZATION-870a9a6fc76ca26a**: # Get Vaccinations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-d6e6d1354f8c3e15"></a>
- **M19-CAP-IMMUNIZATION-d6e6d1354f8c3e15**: GET /vaccinations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-b89c3071a8952682"></a>
- **M19-CAP-IMMUNIZATION-b89c3071a8952682**: Returns all vaccination records.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-3c5e5bf12f398b54"></a>
- **M19-CAP-IMMUNIZATION-3c5e5bf12f398b54**: Filters
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-65d7e6c9febb1335"></a>
- **M19-CAP-IMMUNIZATION-65d7e6c9febb1335**: Completed
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-4f869c3f37c1fec2"></a>
- **M19-CAP-IMMUNIZATION-4f869c3f37c1fec2**: Upcoming
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-dda5277c389f4874"></a>
- **M19-CAP-IMMUNIZATION-dda5277c389f4874**: Expired
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ebd4f236c46ae172"></a>
- **M19-CAP-IMMUNIZATION-ebd4f236c46ae172**: COVID-19
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-b871175be63c4154"></a>
- **M19-CAP-IMMUNIZATION-b871175be63c4154**: Travel Vaccines
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-6f6404648b6b50d8"></a>
- **M19-CAP-IMMUNIZATION-6f6404648b6b50d8**: Childhood Vaccines
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-5c1d7981470b0f6f"></a>
- **M19-CAP-IMMUNIZATION-5c1d7981470b0f6f**: # Get Vaccination
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-687809d6110b1101"></a>
- **M19-CAP-IMMUNIZATION-687809d6110b1101**: GET /vaccinations/{id}
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-d5662bd258acfe9a"></a>
- **M19-CAP-IMMUNIZATION-d5662bd258acfe9a**: Returns detailed vaccination information.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-30b565d5ef087dd1"></a>
- **M19-CAP-IMMUNIZATION-30b565d5ef087dd1**: # Create Vaccination
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-0ebaf022a094d8f5"></a>
- **M19-CAP-IMMUNIZATION-0ebaf022a094d8f5**: POST /vaccinations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-7e78c9e00e0ea8cd"></a>
- **M19-CAP-IMMUNIZATION-7e78c9e00e0ea8cd**: Fields
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-e9296381995cc940"></a>
- **M19-CAP-IMMUNIZATION-e9296381995cc940**: Vaccine Name
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-f5ff2466370d6d7d"></a>
- **M19-CAP-IMMUNIZATION-f5ff2466370d6d7d**: Generic Name
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-c11a577b14c67fdc"></a>
- **M19-CAP-IMMUNIZATION-c11a577b14c67fdc**: Batch Number
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-e2399f24a8f642c1"></a>
- **M19-CAP-IMMUNIZATION-e2399f24a8f642c1**: Total Doses
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-76968af3bfd3face"></a>
- **M19-CAP-IMMUNIZATION-76968af3bfd3face**: Clinic
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-52a3545c159968e0"></a>
- **M19-CAP-IMMUNIZATION-52a3545c159968e0**: Doctor
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-2d791cbb8f7adb9b"></a>
- **M19-CAP-IMMUNIZATION-2d791cbb8f7adb9b**: Notes
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-4ddba96a2bd26e05"></a>
- **M19-CAP-IMMUNIZATION-4ddba96a2bd26e05**: # Update Vaccination
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-1e1eb8322d4c59ba"></a>
- **M19-CAP-IMMUNIZATION-1e1eb8322d4c59ba**: PUT /vaccinations/{id}
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-9b7df36f23773f11"></a>
- **M19-CAP-IMMUNIZATION-9b7df36f23773f11**: Updates vaccination record.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-8e3eb90db680a38c"></a>
- **M19-CAP-IMMUNIZATION-8e3eb90db680a38c**: # Delete Vaccination
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-29dab5dc02769a5a"></a>
- **M19-CAP-IMMUNIZATION-29dab5dc02769a5a**: DELETE /vaccinations/{id}
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-9bf8910bfd2b51c4"></a>
- **M19-CAP-IMMUNIZATION-9bf8910bfd2b51c4**: Soft delete.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-1f9f0f30a4aad42a"></a>
- **M19-CAP-IMMUNIZATION-1f9f0f30a4aad42a**: # Vaccination Certificate
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-a78f04083fba3272"></a>
- **M19-CAP-IMMUNIZATION-a78f04083fba3272**: GET /vaccinations/certificate
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-2bfdce9b3b3e9738"></a>
- **M19-CAP-IMMUNIZATION-2bfdce9b3b3e9738**: Returns digital vaccination certificate.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-0c7c1a22a82f7aac"></a>
- **M19-CAP-IMMUNIZATION-0c7c1a22a82f7aac**: Formats
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-96175796b7761e88"></a>
- **M19-CAP-IMMUNIZATION-96175796b7761e88**: PDF
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-94cd98c9145af728"></a>
- **M19-CAP-IMMUNIZATION-94cd98c9145af728**: QR
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-5faa423c7f424870"></a>
- **M19-CAP-IMMUNIZATION-5faa423c7f424870**: FHIR
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-321406bd603f16ae"></a>
- **M19-CAP-IMMUNIZATION-321406bd603f16ae**: # Travel Vaccinations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-b61562f6177f3da0"></a>
- **M19-CAP-IMMUNIZATION-b61562f6177f3da0**: GET /vaccinations/travel/{country}
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-772048440331fa7d"></a>
- **M19-CAP-IMMUNIZATION-772048440331fa7d**: Returns required and recommended vaccines for destination country.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-c884c4822ee7d9b0"></a>
- **M19-CAP-IMMUNIZATION-c884c4822ee7d9b0**: # Vaccination Schedule
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-7419b07e30c20f4a"></a>
- **M19-CAP-IMMUNIZATION-7419b07e30c20f4a**: GET /vaccinations/schedule
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-2778e8c69346206a"></a>
- **M19-CAP-IMMUNIZATION-2778e8c69346206a**: Returns upcoming vaccinations.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-66d557c53237dce1"></a>
- **M19-CAP-IMMUNIZATION-66d557c53237dce1**: # Vaccination Reminder
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-9619989e03ee72df"></a>
- **M19-CAP-IMMUNIZATION-9619989e03ee72df**: GET /vaccinations/reminders
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-46b0c50f84014031"></a>
- **M19-CAP-IMMUNIZATION-46b0c50f84014031**: Returns reminder schedule.
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-211131b414092a8b"></a>
- **M19-CAP-IMMUNIZATION-211131b414092a8b**: # AI Vaccination Analysis
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-111f23a516cf194a"></a>
- **M19-CAP-IMMUNIZATION-111f23a516cf194a**: POST /vaccinations/analyze
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-0f6ce5db1025be5d"></a>
- **M19-CAP-IMMUNIZATION-0f6ce5db1025be5d**: Returns
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-fa7ef227a9610440"></a>
- **M19-CAP-IMMUNIZATION-fa7ef227a9610440**: Missing Vaccines
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-a01d241792f1a0b1"></a>
- **M19-CAP-IMMUNIZATION-a01d241792f1a0b1**: Booster Recommendations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-0fced95aa48daab2"></a>
- **M19-CAP-IMMUNIZATION-0fced95aa48daab2**: Country Requirements
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-f468be0316491865"></a>
- **M19-CAP-IMMUNIZATION-f468be0316491865**: Risk Assessment
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-7483747d5c7a39e6"></a>
- **M19-CAP-IMMUNIZATION-7483747d5c7a39e6**: # Search Vaccines
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-b87920a45ee80dc3"></a>
- **M19-CAP-IMMUNIZATION-b87920a45ee80dc3**: GET /vaccinations/search
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-c017887fd27fd5cc"></a>
- **M19-CAP-IMMUNIZATION-c017887fd27fd5cc**: Disease
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ab2fd2438e03fce3"></a>
- **M19-CAP-IMMUNIZATION-ab2fd2438e03fce3**: # Response Example
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-d6ea1bdd127bdf47"></a>
- **M19-CAP-IMMUNIZATION-d6ea1bdd127bdf47**: {
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-d9b76fddc788880a"></a>
- **M19-CAP-IMMUNIZATION-d9b76fddc788880a**: "success": true,
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-f4eea15f7a9c414b"></a>
- **M19-CAP-IMMUNIZATION-f4eea15f7a9c414b**: "data": {
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-91d6832251ce1c38"></a>
- **M19-CAP-IMMUNIZATION-91d6832251ce1c38**: "id": "...",
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-4aa564ed1f74cdb5"></a>
- **M19-CAP-IMMUNIZATION-4aa564ed1f74cdb5**: "vaccine": "COVID-19",
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-619a6f6cc71404ea"></a>
- **M19-CAP-IMMUNIZATION-619a6f6cc71404ea**: "dose": 2,
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-88a921b16010de80"></a>
- **M19-CAP-IMMUNIZATION-88a921b16010de80**: "status": "Completed"
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ac89c5c4e185f31e"></a>
- **M19-CAP-IMMUNIZATION-ac89c5c4e185f31e**: }
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-efc101e38d418651"></a>
- **M19-CAP-IMMUNIZATION-efc101e38d418651**: # Security
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ca51b08733e66b72"></a>
- **M19-CAP-IMMUNIZATION-ca51b08733e66b72**: JWT Required
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-d20a95b6b63719a7"></a>
- **M19-CAP-IMMUNIZATION-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-0349f77b1e444441"></a>
- **M19-CAP-IMMUNIZATION-0349f77b1e444441**: Encrypted Data
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-a6f838712ba6cf93"></a>
- **M19-CAP-IMMUNIZATION-a6f838712ba6cf93**: FHIR Compatible
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-dbd1329f16de55fa"></a>
- **M19-CAP-IMMUNIZATION-dbd1329f16de55fa**: GDPR
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-c71fe81b3339854c"></a>
- **M19-CAP-IMMUNIZATION-c71fe81b3339854c**: HIPAA
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-6d171322d8fea4c2"></a>
- **M19-CAP-IMMUNIZATION-6d171322d8fea4c2**: WHO Digital Certificate Compatible
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-9879a69a15c5a50a"></a>
- **M19-CAP-IMMUNIZATION-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-225d721817a80b2f"></a>
- **M19-CAP-IMMUNIZATION-225d721817a80b2f**: ├── Notifications
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-a7f2ddd3ac9459b5"></a>
- **M19-CAP-IMMUNIZATION-a7f2ddd3ac9459b5**: ├── Telemedicine
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ce99558ef888235f"></a>
- **M19-CAP-IMMUNIZATION-ce99558ef888235f**: WHO Smart Vaccination Certificate
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-2fa126046786cb77"></a>
- **M19-CAP-IMMUNIZATION-2fa126046786cb77**: EU Digital Health Certificate
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-ffb0fa88fe8689ca"></a>
- **M19-CAP-IMMUNIZATION-ffb0fa88fe8689ca**: Automatic National Registry Import
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-25ee3f2ee7ce6ee3"></a>
- **M19-CAP-IMMUNIZATION-25ee3f2ee7ce6ee3**: Pediatric Vaccination Calendar
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-13552635277b2712"></a>
- **M19-CAP-IMMUNIZATION-13552635277b2712**: AI Booster Prediction
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-77357519dff3fa2a"></a>
- **M19-CAP-IMMUNIZATION-77357519dff3fa2a**: Epidemic Risk Alerts
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-8be47653442088ea"></a>
- **M19-CAP-IMMUNIZATION-8be47653442088ea**: International Vaccination Verification
  Applies to original IDs: 60.

<a id="M19-CAP-IMMUNIZATION-e3d5945dcddec67f"></a>
- **M19-CAP-IMMUNIZATION-e3d5945dcddec67f**: # Vaccination Module
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-f46e10af70055b66"></a>
- **M19-CAP-IMMUNIZATION-f46e10af70055b66**: Stores
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-703ea7dbc5d7a043"></a>
- **M19-CAP-IMMUNIZATION-703ea7dbc5d7a043**: Date
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-bcdc4f6ef99e87ab"></a>
- **M19-CAP-IMMUNIZATION-bcdc4f6ef99e87ab**: Certificate
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-cf4e9d2ab9d25328"></a>
- **M19-CAP-IMMUNIZATION-cf4e9d2ab9d25328**: Booster
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-b1f8181affffc03b"></a>
- **M19-CAP-IMMUNIZATION-b1f8181affffc03b**: AI
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-60ad5f0e95a3c0f2"></a>
- **M19-CAP-IMMUNIZATION-60ad5f0e95a3c0f2**: ↓
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-777e9e30fff4e585"></a>
- **M19-CAP-IMMUNIZATION-777e9e30fff4e585**: Reminder
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-1815f8401e0a4829"></a>
- **M19-CAP-IMMUNIZATION-1815f8401e0a4829**: Travel Advice
  Applies to original IDs: 109.

<a id="M19-CAP-IMMUNIZATION-81001a695dee62ed"></a>
- **M19-CAP-IMMUNIZATION-81001a695dee62ed**: # Pediatric Vaccination Center
  Applies to original IDs: 827.

<a id="M19-CAP-IMMUNIZATION-ac30c872c5c77f28"></a>
- **M19-CAP-IMMUNIZATION-ac30c872c5c77f28**: International Schedule
  Applies to original IDs: 827.

<a id="M19-CAP-IMMUNIZATION-9a5ef744b8166314"></a>
- **M19-CAP-IMMUNIZATION-9a5ef744b8166314**: Booster Reminders
  Applies to original IDs: 827.

<a id="M19-CAP-IMMUNIZATION-b6389a500e252b34"></a>
- **M19-CAP-IMMUNIZATION-b6389a500e252b34**: Certificates
  Applies to original IDs: 827.
