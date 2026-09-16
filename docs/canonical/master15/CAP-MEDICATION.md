# CORE-CAP-MEDICATION — consolidated source profiles

Extends existing canonical owner and all prior addenda. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## medication-profiles

Medication owns attributed medication-context profiles; lists of drug classes are scoped coverage requirements, not preferred therapy, dosing algorithms or substitution approval.

Acceptance additions: Retain product/class, route/formulation, patient/context, reported-versus-ordered exposure and evidence versions; treatment selection and dose changes require independent clinical approval.

## medication-reference-exposure

Extend the established medication reference/exposure profiles with attributed product, batch, packaging, adherence, history and reported-effect evidence. Renewal planning does not issue prescriptions; product matches and displayed generic claims do not prove interchangeability or authenticity.

Acceptance additions: Preserve suspected adverse effects, source/period/denominator of adherence, exact product/route/formulation/version, pediatric age/weight and lactation context. Historical pregnancy safety categories alone cannot establish treatment safety. Require current qualified evidence before applying restrictions, alternatives or treatment advice; a diary or reminder does not establish ingestion.

## Source scope

- Original 623 / medication-profiles: Digestive Medication Manager — Supports medications used in gastroenterology.
- Original 730 / medication-profiles: Pregnancy Medication Manager — Tracks medications considered during pregnancy.
- Original 829 / medication-profiles: Pediatric Medication Manager — Tracks medications prescribed to children.
- Original 852 / medication-profiles: Pediatric Cardiac Medication Manager — Tracks cardiovascular medications for children.
- Original 894 / medication-profiles: Pediatric Neurological Medication Manager — Tracks neurological medications.
- Original 913 / medication-profiles: Pediatric Respiratory Medication Manager — Tracks respiratory medications.
- Original 952 / medication-profiles: Pediatric Gastroenterology Medication Manager — Tracks gastrointestinal medications.
- Original 973 / medication-profiles: Pediatric Hematology Medication Manager — Tracks hematology medications.
- Original 2018 / medication-profiles: Cardiology Medication Manager — Supports cardiovascular medication management.
- Original 156 / medication-reference-exposure: Medication Adherence Engine — AI estimates treatment adherence and provides reminders.
- Original 157 / medication-reference-exposure: Medication History — Maintain attributed medication exposure history, including start, stop and reported effects.
- Original 403 / medication-reference-exposure: Pharmacy Generic Alternatives — Displays approved generic equivalents.
- Original 410 / medication-reference-exposure: Medication Barcode Scanner — Scans medication packaging.
- Original 413 / medication-reference-exposure: Pediatric Medication Guide — Displays medication information for pediatric use.
- Original 414 / medication-reference-exposure: Pregnancy Medication Safety — Displays pregnancy-related medication information.
- Original 415 / medication-reference-exposure: Breastfeeding Medication Guide — Displays medication safety during breastfeeding.
- Original 421 / medication-reference-exposure: Medication Renewal Planner — Helps users plan prescription renewals.
- Original 435 / medication-reference-exposure: Medication Effectiveness Diary — Allows users to record treatment effectiveness.
- Original 436 / medication-reference-exposure: Medication Adverse Event Reporting — Allows documentation of suspected medication-related adverse events.
- Original 437 / medication-reference-exposure: Medication Manufacturer Directory — Provides manufacturer information.
- Original 438 / medication-reference-exposure: Medication Batch Registry — Stores medication batch information.
- Original 439 / medication-reference-exposure: Medication Package Archive — Stores photographs of medication packaging.

## Requirements and source metadata

<a id="M15-CAP-MEDICATION-9576240f36b4875c"></a>
- **M15-CAP-MEDICATION-9576240f36b4875c**: # Digestive Medication Manager
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-00e752aafa7b7d04"></a>
- **M15-CAP-MEDICATION-00e752aafa7b7d04**: Supports medications used in gastroenterology.
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-01bbec9df504a305"></a>
- **M15-CAP-MEDICATION-01bbec9df504a305**: Includes
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-38511daaf23dfe28"></a>
- **M15-CAP-MEDICATION-38511daaf23dfe28**: Proton Pump Inhibitors
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-b922bd4faf949052"></a>
- **M15-CAP-MEDICATION-b922bd4faf949052**: H2 Blockers
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-b8b6ffd58b9de465"></a>
- **M15-CAP-MEDICATION-b8b6ffd58b9de465**: Enzymes
  Applies to original IDs: 623, 952.

<a id="M15-CAP-MEDICATION-e72779dcfbecb8ad"></a>
- **M15-CAP-MEDICATION-e72779dcfbecb8ad**: Probiotics
  Applies to original IDs: 623, 952.

<a id="M15-CAP-MEDICATION-cf1455105f07c3ad"></a>
- **M15-CAP-MEDICATION-cf1455105f07c3ad**: Antibiotics
  Applies to original IDs: 623, 913.

<a id="M15-CAP-MEDICATION-9f898fd07cad30f3"></a>
- **M15-CAP-MEDICATION-9f898fd07cad30f3**: Biologics
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-98d89f9286bc0197"></a>
- **M15-CAP-MEDICATION-98d89f9286bc0197**: Hepatoprotective Therapy
  Applies to original IDs: 623.

<a id="M15-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M15-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 623, 730, 829, 852, 894, 913, 952, 973, 2018, 156, 157, 403, 410, 413, 414, 415, 421, 435, 436, 437, 438, 439.

<a id="M15-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M15-CAP-MEDICATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 623, 730, 829, 852, 894, 913, 952, 973, 2018, 156, 157, 403, 410, 413, 414, 415, 421, 435, 436, 437, 438, 439.

<a id="M15-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M15-CAP-MEDICATION-6f33acf3afb37064**: ---
  Applies to original IDs: 623, 730, 829, 852, 894, 913, 952, 973, 2018, 156, 157, 403, 410, 413, 414, 415, 421, 435, 436, 437, 438, 439.

<a id="M15-CAP-MEDICATION-777304a8bc7fe829"></a>
- **M15-CAP-MEDICATION-777304a8bc7fe829**: # Pregnancy Medication Manager
  Applies to original IDs: 730.

<a id="M15-CAP-MEDICATION-9532e062b62a7983"></a>
- **M15-CAP-MEDICATION-9532e062b62a7983**: Tracks medications considered during pregnancy.
  Applies to original IDs: 730.

<a id="M15-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M15-CAP-MEDICATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 730, 829, 852, 894, 913, 952, 973, 2018, 403, 410, 413, 414, 415, 421, 435, 436, 437, 438, 439.

<a id="M15-CAP-MEDICATION-100aa6cea9ea58db"></a>
- **M15-CAP-MEDICATION-100aa6cea9ea58db**: Safety Category
  Applies to original IDs: 730.

<a id="M15-CAP-MEDICATION-569d9101e84f5b18"></a>
- **M15-CAP-MEDICATION-569d9101e84f5b18**: Physician Approval
  Applies to original IDs: 730, 829.

<a id="M15-CAP-MEDICATION-368389b22a7065de"></a>
- **M15-CAP-MEDICATION-368389b22a7065de**: Dosage
  Applies to original IDs: 730.

<a id="M15-CAP-MEDICATION-c6d2faefa788a381"></a>
- **M15-CAP-MEDICATION-c6d2faefa788a381**: Schedule
  Applies to original IDs: 730, 829, 852, 894.

<a id="M15-CAP-MEDICATION-4fe82eebfe13810c"></a>
- **M15-CAP-MEDICATION-4fe82eebfe13810c**: # Pediatric Medication Manager
  Applies to original IDs: 829.

<a id="M15-CAP-MEDICATION-56d7527c1073467c"></a>
- **M15-CAP-MEDICATION-56d7527c1073467c**: Tracks medications prescribed to children.
  Applies to original IDs: 829.

<a id="M15-CAP-MEDICATION-5ab874e8998bf8aa"></a>
- **M15-CAP-MEDICATION-5ab874e8998bf8aa**: Weight-Based Dosage
  Applies to original IDs: 829, 852, 894, 913, 952, 973.

<a id="M15-CAP-MEDICATION-9de3bc147c690418"></a>
- **M15-CAP-MEDICATION-9de3bc147c690418**: Reminder System
  Applies to original IDs: 829.

<a id="M15-CAP-MEDICATION-45171c85f9c3769e"></a>
- **M15-CAP-MEDICATION-45171c85f9c3769e**: # Pediatric Cardiac Medication Manager
  Applies to original IDs: 852.

<a id="M15-CAP-MEDICATION-2ce77af3cf54c105"></a>
- **M15-CAP-MEDICATION-2ce77af3cf54c105**: Tracks cardiovascular medications for children.
  Applies to original IDs: 852.

<a id="M15-CAP-MEDICATION-f5aeff23cb9d4fbe"></a>
- **M15-CAP-MEDICATION-f5aeff23cb9d4fbe**: Monitoring
  Applies to original IDs: 852.

<a id="M15-CAP-MEDICATION-29469ff5152949be"></a>
- **M15-CAP-MEDICATION-29469ff5152949be**: # Pediatric Neurological Medication Manager
  Applies to original IDs: 894.

<a id="M15-CAP-MEDICATION-1bc8c85862a1bb3c"></a>
- **M15-CAP-MEDICATION-1bc8c85862a1bb3c**: Tracks neurological medications.
  Applies to original IDs: 894.

<a id="M15-CAP-MEDICATION-b1100d9ac9ca4e0b"></a>
- **M15-CAP-MEDICATION-b1100d9ac9ca4e0b**: Side Effects
  Applies to original IDs: 894, 157, 435.

<a id="M15-CAP-MEDICATION-5d5eca102dede322"></a>
- **M15-CAP-MEDICATION-5d5eca102dede322**: # Pediatric Respiratory Medication Manager
  Applies to original IDs: 913.

<a id="M15-CAP-MEDICATION-1fb8f416bacfab78"></a>
- **M15-CAP-MEDICATION-1fb8f416bacfab78**: Tracks respiratory medications.
  Applies to original IDs: 913.

<a id="M15-CAP-MEDICATION-1baf83baafe8812f"></a>
- **M15-CAP-MEDICATION-1baf83baafe8812f**: Bronchodilators
  Applies to original IDs: 913.

<a id="M15-CAP-MEDICATION-1c5a7fceb71181c9"></a>
- **M15-CAP-MEDICATION-1c5a7fceb71181c9**: Steroids
  Applies to original IDs: 913.

<a id="M15-CAP-MEDICATION-207dd9cca7fccb14"></a>
- **M15-CAP-MEDICATION-207dd9cca7fccb14**: # Pediatric Gastroenterology Medication Manager
  Applies to original IDs: 952.

<a id="M15-CAP-MEDICATION-b8cde7ab6ed50252"></a>
- **M15-CAP-MEDICATION-b8cde7ab6ed50252**: Tracks gastrointestinal medications.
  Applies to original IDs: 952.

<a id="M15-CAP-MEDICATION-f43d0d6fbbfd28ad"></a>
- **M15-CAP-MEDICATION-f43d0d6fbbfd28ad**: Immunosuppressants
  Applies to original IDs: 952.

<a id="M15-CAP-MEDICATION-630cd0e73bedd7e0"></a>
- **M15-CAP-MEDICATION-630cd0e73bedd7e0**: # Pediatric Hematology Medication Manager
  Applies to original IDs: 973.

<a id="M15-CAP-MEDICATION-15c629a2edd9ff75"></a>
- **M15-CAP-MEDICATION-15c629a2edd9ff75**: Tracks hematology medications.
  Applies to original IDs: 973.

<a id="M15-CAP-MEDICATION-76bf5ad404af9204"></a>
- **M15-CAP-MEDICATION-76bf5ad404af9204**: Clotting Factors
  Applies to original IDs: 973.

<a id="M15-CAP-MEDICATION-b2332b35b3d7fc5b"></a>
- **M15-CAP-MEDICATION-b2332b35b3d7fc5b**: Iron
  Applies to original IDs: 973.

<a id="M15-CAP-MEDICATION-42ecf80f75b68da4"></a>
- **M15-CAP-MEDICATION-42ecf80f75b68da4**: Immunotherapy
  Applies to original IDs: 973.

<a id="M15-CAP-MEDICATION-fd3dd3f0ef67407b"></a>
- **M15-CAP-MEDICATION-fd3dd3f0ef67407b**: Supports cardiovascular medication management.
  Applies to original IDs: 2018.

<a id="M15-CAP-MEDICATION-5cc22430a04b9350"></a>
- **M15-CAP-MEDICATION-5cc22430a04b9350**: ACE Inhibitors
  Applies to original IDs: 2018.

<a id="M15-CAP-MEDICATION-2ae8f10285f1f3e7"></a>
- **M15-CAP-MEDICATION-2ae8f10285f1f3e7**: Beta-blockers
  Applies to original IDs: 2018.

<a id="M15-CAP-MEDICATION-7fbf82d778bd6e0d"></a>
- **M15-CAP-MEDICATION-7fbf82d778bd6e0d**: Statins
  Applies to original IDs: 2018.

<a id="M15-CAP-MEDICATION-d446d9ed9da52cf2"></a>
- **M15-CAP-MEDICATION-d446d9ed9da52cf2**: # Medication Adherence
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-0a19bd2b005ba8ce"></a>
- **M15-CAP-MEDICATION-0a19bd2b005ba8ce**: Measures
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-3a1194f5335f5efb"></a>
- **M15-CAP-MEDICATION-3a1194f5335f5efb**: Missed Doses
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-a6361b2da2eed942"></a>
- **M15-CAP-MEDICATION-a6361b2da2eed942**: Completed Courses
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-7a310edd235fac85"></a>
- **M15-CAP-MEDICATION-7a310edd235fac85**: Daily Compliance
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-7458daf3fa39e72c"></a>
- **M15-CAP-MEDICATION-7458daf3fa39e72c**: Weekly Compliance
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-342762ba194c4da9"></a>
- **M15-CAP-MEDICATION-342762ba194c4da9**: AI estimates treatment adherence and provides reminders.
  Applies to original IDs: 156.

<a id="M15-CAP-MEDICATION-498f9f68b54287df"></a>
- **M15-CAP-MEDICATION-498f9f68b54287df**: # Medication History
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-f46e10af70055b66"></a>
- **M15-CAP-MEDICATION-f46e10af70055b66**: Stores
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-2d226d838938977f"></a>
- **M15-CAP-MEDICATION-2d226d838938977f**: Current Medicines
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-e67a779053e180bb"></a>
- **M15-CAP-MEDICATION-e67a779053e180bb**: Previous Medicines
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-2422e0f7d14fc2a1"></a>
- **M15-CAP-MEDICATION-2422e0f7d14fc2a1**: Start Date
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-39761e7604228fdf"></a>
- **M15-CAP-MEDICATION-39761e7604228fdf**: End Date
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-86211ac6ff2b3049"></a>
- **M15-CAP-MEDICATION-86211ac6ff2b3049**: Effectiveness
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-927d193e95f1d566"></a>
- **M15-CAP-MEDICATION-927d193e95f1d566**: Timeline supported.
  Applies to original IDs: 157.

<a id="M15-CAP-MEDICATION-2fe8cd767c3df135"></a>
- **M15-CAP-MEDICATION-2fe8cd767c3df135**: # Generic Alternatives
  Applies to original IDs: 403.

<a id="M15-CAP-MEDICATION-c426423c040bb518"></a>
- **M15-CAP-MEDICATION-c426423c040bb518**: Displays approved generic equivalents.
  Applies to original IDs: 403.

<a id="M15-CAP-MEDICATION-3f0dde69082a293e"></a>
- **M15-CAP-MEDICATION-3f0dde69082a293e**: INN Matching
  Applies to original IDs: 403.

<a id="M15-CAP-MEDICATION-24e72f5819d345ad"></a>
- **M15-CAP-MEDICATION-24e72f5819d345ad**: Dosage Comparison
  Applies to original IDs: 403.

<a id="M15-CAP-MEDICATION-3c15c7cc9b6273f7"></a>
- **M15-CAP-MEDICATION-3c15c7cc9b6273f7**: Manufacturer Comparison
  Applies to original IDs: 403.

<a id="M15-CAP-MEDICATION-edf9a71cfca511be"></a>
- **M15-CAP-MEDICATION-edf9a71cfca511be**: # Medication Barcode Scanner
  Applies to original IDs: 410.

<a id="M15-CAP-MEDICATION-9245df6dcb712ba2"></a>
- **M15-CAP-MEDICATION-9245df6dcb712ba2**: Scans medication packaging.
  Applies to original IDs: 410.

<a id="M15-CAP-MEDICATION-de0ab3f6d86c6f10"></a>
- **M15-CAP-MEDICATION-de0ab3f6d86c6f10**: Barcode
  Applies to original IDs: 410.

<a id="M15-CAP-MEDICATION-21d10097ab8f86fb"></a>
- **M15-CAP-MEDICATION-21d10097ab8f86fb**: QR Code
  Applies to original IDs: 410.

<a id="M15-CAP-MEDICATION-1c09c1cae303dd86"></a>
- **M15-CAP-MEDICATION-1c09c1cae303dd86**: Package Identification
  Applies to original IDs: 410.

<a id="M15-CAP-MEDICATION-b08a68d9a953ac59"></a>
- **M15-CAP-MEDICATION-b08a68d9a953ac59**: # Pediatric Medication Guide
  Applies to original IDs: 413.

<a id="M15-CAP-MEDICATION-0fe0e60e11b098de"></a>
- **M15-CAP-MEDICATION-0fe0e60e11b098de**: Displays medication information for pediatric use.
  Applies to original IDs: 413.

<a id="M15-CAP-MEDICATION-d105f29dd1ec7126"></a>
- **M15-CAP-MEDICATION-d105f29dd1ec7126**: Age
  Applies to original IDs: 413.

<a id="M15-CAP-MEDICATION-cdcecae88521194c"></a>
- **M15-CAP-MEDICATION-cdcecae88521194c**: Weight
  Applies to original IDs: 413.

<a id="M15-CAP-MEDICATION-d1b2f7430b9c3134"></a>
- **M15-CAP-MEDICATION-d1b2f7430b9c3134**: Pediatric Restrictions
  Applies to original IDs: 413.

<a id="M15-CAP-MEDICATION-2c2542356643744c"></a>
- **M15-CAP-MEDICATION-2c2542356643744c**: # Pregnancy Medication Safety
  Applies to original IDs: 414.

<a id="M15-CAP-MEDICATION-b5717fe18cbb4091"></a>
- **M15-CAP-MEDICATION-b5717fe18cbb4091**: Displays pregnancy-related medication information.
  Applies to original IDs: 414.

<a id="M15-CAP-MEDICATION-c41aab3036c18043"></a>
- **M15-CAP-MEDICATION-c41aab3036c18043**: Trimester Information
  Applies to original IDs: 414.

<a id="M15-CAP-MEDICATION-069e7b050bb543f7"></a>
- **M15-CAP-MEDICATION-069e7b050bb543f7**: Safety Categories
  Applies to original IDs: 414.

<a id="M15-CAP-MEDICATION-6edf7b6ebf9bb97f"></a>
- **M15-CAP-MEDICATION-6edf7b6ebf9bb97f**: # Breastfeeding Medication Guide
  Applies to original IDs: 415.

<a id="M15-CAP-MEDICATION-54fe712af38c7e5c"></a>
- **M15-CAP-MEDICATION-54fe712af38c7e5c**: Displays medication safety during breastfeeding.
  Applies to original IDs: 415.

<a id="M15-CAP-MEDICATION-9c8fad5c31d0aa51"></a>
- **M15-CAP-MEDICATION-9c8fad5c31d0aa51**: Lactation Recommendations
  Applies to original IDs: 415.

<a id="M15-CAP-MEDICATION-7752490a83ae1510"></a>
- **M15-CAP-MEDICATION-7752490a83ae1510**: Alternative Medicines
  Applies to original IDs: 415.

<a id="M15-CAP-MEDICATION-e221dbe801dcd470"></a>
- **M15-CAP-MEDICATION-e221dbe801dcd470**: # Medication Renewal Planner
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-173e7c0a0f18d118"></a>
- **M15-CAP-MEDICATION-173e7c0a0f18d118**: Helps users plan prescription renewals.
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-ce0485ccde7b2a7d"></a>
- **M15-CAP-MEDICATION-ce0485ccde7b2a7d**: Renewal Date
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-c9ba4879c96fdb8a"></a>
- **M15-CAP-MEDICATION-c9ba4879c96fdb8a**: Remaining Supply
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-838309ebff4fd481"></a>
- **M15-CAP-MEDICATION-838309ebff4fd481**: Physician Reminder
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-31b25d44d718b385"></a>
- **M15-CAP-MEDICATION-31b25d44d718b385**: Pharmacy Reminder
  Applies to original IDs: 421.

<a id="M15-CAP-MEDICATION-f46ee58dca330a13"></a>
- **M15-CAP-MEDICATION-f46ee58dca330a13**: # Medication Effectiveness Diary
  Applies to original IDs: 435.

<a id="M15-CAP-MEDICATION-c62493607735d0c7"></a>
- **M15-CAP-MEDICATION-c62493607735d0c7**: Allows users to record treatment effectiveness.
  Applies to original IDs: 435.

<a id="M15-CAP-MEDICATION-ea858675dafa5bf9"></a>
- **M15-CAP-MEDICATION-ea858675dafa5bf9**: Symptom Improvement
  Applies to original IDs: 435.

<a id="M15-CAP-MEDICATION-6864b968505141fb"></a>
- **M15-CAP-MEDICATION-6864b968505141fb**: Physician Notes
  Applies to original IDs: 435.

<a id="M15-CAP-MEDICATION-f93f0ec97ca497b9"></a>
- **M15-CAP-MEDICATION-f93f0ec97ca497b9**: # Adverse Event Reporting
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-0849b09a6aaf760d"></a>
- **M15-CAP-MEDICATION-0849b09a6aaf760d**: Allows documentation of suspected medication-related adverse events.
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-a31c4b886960439e"></a>
- **M15-CAP-MEDICATION-a31c4b886960439e**: Event Description
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-0dbeacb9f9ac3f6a"></a>
- **M15-CAP-MEDICATION-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-9029a8bbdb8a6553"></a>
- **M15-CAP-MEDICATION-9029a8bbdb8a6553**: Outcome
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-589c29bbea72be7a"></a>
- **M15-CAP-MEDICATION-589c29bbea72be7a**: Physician Review
  Applies to original IDs: 436.

<a id="M15-CAP-MEDICATION-ec3d6b26148acb26"></a>
- **M15-CAP-MEDICATION-ec3d6b26148acb26**: # Medication Manufacturer Directory
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-cb5f6f6d94228c0f"></a>
- **M15-CAP-MEDICATION-cb5f6f6d94228c0f**: Provides manufacturer information.
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-48611a48b1546ce6"></a>
- **M15-CAP-MEDICATION-48611a48b1546ce6**: Company
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-580c32d823047de1"></a>
- **M15-CAP-MEDICATION-580c32d823047de1**: Country
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-9ffc076550b94ce2"></a>
- **M15-CAP-MEDICATION-9ffc076550b94ce2**: Contact Information
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-57eb31e9938bc535"></a>
- **M15-CAP-MEDICATION-57eb31e9938bc535**: Product Portfolio
  Applies to original IDs: 437.

<a id="M15-CAP-MEDICATION-da3b11c9158f5463"></a>
- **M15-CAP-MEDICATION-da3b11c9158f5463**: # Medication Batch Registry
  Applies to original IDs: 438.

<a id="M15-CAP-MEDICATION-324d3ae95156fb3c"></a>
- **M15-CAP-MEDICATION-324d3ae95156fb3c**: Stores medication batch information.
  Applies to original IDs: 438.

<a id="M15-CAP-MEDICATION-c11a577b14c67fdc"></a>
- **M15-CAP-MEDICATION-c11a577b14c67fdc**: Batch Number
  Applies to original IDs: 438.

<a id="M15-CAP-MEDICATION-337b49704d348de9"></a>
- **M15-CAP-MEDICATION-337b49704d348de9**: Expiration Date
  Applies to original IDs: 438.

<a id="M15-CAP-MEDICATION-e6322ac09f884cf3"></a>
- **M15-CAP-MEDICATION-e6322ac09f884cf3**: Manufacturer
  Applies to original IDs: 438.

<a id="M15-CAP-MEDICATION-8ed5c5dddbedfe09"></a>
- **M15-CAP-MEDICATION-8ed5c5dddbedfe09**: # Medication Package Archive
  Applies to original IDs: 439.

<a id="M15-CAP-MEDICATION-3d25d2a6ec25aa60"></a>
- **M15-CAP-MEDICATION-3d25d2a6ec25aa60**: Stores photographs of medication packaging.
  Applies to original IDs: 439.

<a id="M15-CAP-MEDICATION-67298f561e8af14f"></a>
- **M15-CAP-MEDICATION-67298f561e8af14f**: Front View
  Applies to original IDs: 439.

<a id="M15-CAP-MEDICATION-c73f5513012be4f7"></a>
- **M15-CAP-MEDICATION-c73f5513012be4f7**: Back View
  Applies to original IDs: 439.

<a id="M15-CAP-MEDICATION-0ce89fb068cc4652"></a>
- **M15-CAP-MEDICATION-0ce89fb068cc4652**: Leaflet Images
  Applies to original IDs: 439.
