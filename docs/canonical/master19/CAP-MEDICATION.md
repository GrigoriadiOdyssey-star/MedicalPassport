# CORE-CAP-MEDICATION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## pediatric-medication-and-precision-safety

Medication owns longitudinal medication/exposure, reconciliation and safety-context profiles, including allergen immunotherapy, endocrine replacement, antimicrobial stewardship, biological agents and molecularly selected neuro-oncology. Administration owns delivered doses, Laboratory owns results, CDS owns advice and Twin owns simulations. Dose-context fields preserve units, patient size/acquisition time, organ function, protocol and therapy phase; they never issue executable dosing. Rescue plans and medication changes require attributed clinician decisions.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## core-medication-exposure-and-monitoring

Medication owns product reference, reported/verified exposure, adverse reaction, therapy monitoring and reconciliation. PrEP/PEP, chemotherapy, endocrine/anabolic therapy, immunosuppression and pediatric regimens retain specialist indication, units/time/weight/organ-function context and source evidence. Self-report is neither endorsement nor prescription; exposure records do not prove adherence or delivered dose.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 4095 / pediatric-medication-and-precision-safety: Pediatric Allergen Immunotherapy Module — Supports allergen immunotherapy workflows.
- Original 4391 / pediatric-medication-and-precision-safety: Pediatric Systemic Dermatologic Therapy Monitoring Module — Supports specialist-supervised systemic treatment monitoring.
- Original 4413 / pediatric-medication-and-precision-safety: Pediatric Epinephrine Auto-Injector Passport Module — Maintains critical rescue-medication information.
- Original 4428 / pediatric-medication-and-precision-safety: Pediatric Allergen Immunotherapy Module — Supports specialist-supervised allergen immunotherapy.
- Original 4621 / pediatric-medication-and-precision-safety: Pediatric Neurology Medication, Polypharmacy & Safety Engine — Provide medication safety across complex pediatric neurological treatment.
- Original 4896 / pediatric-medication-and-precision-safety: Pediatric Endocrine Medication, Hormone Therapy & Safety Engine — Provide medication and hormone-therapy safety across pediatric endocrine care.
- Original 4917 / pediatric-medication-and-precision-safety: Adolescent Reproductive Medication & Hormonal Therapy Safety Module — Provide longitudinal medication safety for gynecological and reproductive hormonal therapies.
- Original 5016 / pediatric-medication-and-precision-safety: Pediatric Biological & Targeted Immune Therapy Safety Module — Provide safety monitoring for biologic and targeted immune-modifying therapies.
- Original 5056 / pediatric-medication-and-precision-safety: Pediatric Antimicrobial Therapy & Stewardship Engine — Provide governed antimicrobial medication management and stewardship support for pediatric care.
- Original 5082 / pediatric-medication-and-precision-safety: Pediatric Epilepsy Medication & Rescue Therapy Safety Engine — Provide comprehensive medication safety for antiseizure and emergency seizure treatment.
- Original 5134 / pediatric-medication-and-precision-safety: Pediatric Targeted Neuro-Oncology & Precision Therapy Safety Module — Coordinate targeted and molecularly selected treatment in pediatric CNS tumors.
- Original 153 / core-medication-exposure-and-monitoring: Generic Medicine Database — Supports worldwide medicine matching.
- Original 158 / core-medication-exposure-and-monitoring: Side Effects Reporting — Collect attributed adverse-effect reports and flag proposed urgency for professional review.
- Original 276 / core-medication-exposure-and-monitoring: Hormonal Therapy Monitoring — Allows users to record prescribed hormonal therapies.
- Original 278 / core-medication-exposure-and-monitoring: Supplement Management — Record supplement use and provide interaction-awareness and tracking support.
- Original 440 / core-medication-exposure-and-monitoring: Global Medication Management Platform — Provides unified medication management across the Medical Passport ecosystem.
- Original 493 / core-medication-exposure-and-monitoring: PrEP Monitoring — Supports monitoring of preventive therapy.
- Original 494 / core-medication-exposure-and-monitoring: PEP Monitoring — Supports monitoring of post-exposure prophylaxis.
- Original 569 / core-medication-exposure-and-monitoring: Insulin Therapy Management — Supports insulin treatment monitoring.
- Original 576 / core-medication-exposure-and-monitoring: Testosterone Therapy Monitoring — Supports physician-supervised testosterone replacement therapy monitoring.
- Original 577 / core-medication-exposure-and-monitoring: Anabolic Substance Monitoring — Supports health monitoring for individuals using anabolic-androgenic substances under medical supervision or self-report.
- Original 624 / core-medication-exposure-and-monitoring: Probiotic Therapy Monitoring — Tracks probiotic treatment.
- Original 648 / core-medication-exposure-and-monitoring: Immunosuppressive Therapy Monitoring — Supports monitoring after kidney transplantation.
- Original 678 / core-medication-exposure-and-monitoring: Testosterone Replacement Therapy Center — Supports physician-supervised testosterone therapy.
- Original 679 / core-medication-exposure-and-monitoring: Gonadotropin Therapy Monitoring — Supports monitoring of hCG and related therapies.
- Original 703 / core-medication-exposure-and-monitoring: Hormone Replacement Therapy Monitoring — Supports physician-supervised HRT.
- Original 810 / core-medication-exposure-and-monitoring: Chemotherapy Monitoring — Tracks chemotherapy cycles.
- Original 866 / core-medication-exposure-and-monitoring: Pediatric Insulin Therapy Manager — Manages insulin therapy for children.
- Original 868 / core-medication-exposure-and-monitoring: Pediatric Growth Hormone Therapy — Supports monitoring of growth hormone treatment.
- Original 909 / core-medication-exposure-and-monitoring: Pediatric Inhaler Manager — Tracks inhaler therapy.
- Original 970 / core-medication-exposure-and-monitoring: Pediatric Iron Therapy Manager — Tracks iron supplementation.
- Original 1008 / core-medication-exposure-and-monitoring: Pediatric Antimicrobial Therapy Manager — Tracks antimicrobial therapy.

## Requirements and source metadata

<a id="M19-CAP-MEDICATION-683cd75310c1352b"></a>
- **M19-CAP-MEDICATION-683cd75310c1352b**: Supports allergen immunotherapy workflows.
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M19-CAP-MEDICATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 4095, 440, 624, 810, 866, 909, 970, 1008.

<a id="M19-CAP-MEDICATION-e83638bed8da5d5d"></a>
- **M19-CAP-MEDICATION-e83638bed8da5d5d**: Treatment Protocols
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-e4d8415f0a46ade5"></a>
- **M19-CAP-MEDICATION-e4d8415f0a46ade5**: Dose Tracking
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-356804248c951f56"></a>
- **M19-CAP-MEDICATION-356804248c951f56**: Adverse Reactions
  Applies to original IDs: 4095, 4428.

<a id="M19-CAP-MEDICATION-73dc85c50f3881fd"></a>
- **M19-CAP-MEDICATION-73dc85c50f3881fd**: Treatment Adherence
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-6cf52eb2351573d6"></a>
- **M19-CAP-MEDICATION-6cf52eb2351573d6**: Clinical Response
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-a2590747430c8a43"></a>
- **M19-CAP-MEDICATION-a2590747430c8a43**: Maintenance Monitoring
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-202f6a2a98b9f441"></a>
- **M19-CAP-MEDICATION-202f6a2a98b9f441**: Longitudinal Outcomes
  Applies to original IDs: 4095.

<a id="M19-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M19-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 4095, 4391, 4413, 4428, 153, 158, 276, 278, 440, 493, 494, 569, 576, 577, 624, 648, 678, 679, 703, 810, 866, 868, 909, 970, 1008.

<a id="M19-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M19-CAP-MEDICATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 4095, 4391, 4413, 4428, 4621, 4896, 4917, 5016, 5056, 5082, 5134, 153, 158, 276, 278, 440, 493, 494, 569, 576, 577, 624, 648, 678, 679, 703, 810, 866, 868, 909, 970, 1008.

<a id="M19-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M19-CAP-MEDICATION-6f33acf3afb37064**: ---
  Applies to original IDs: 4095, 4391, 4413, 4428, 4621, 4896, 4917, 5016, 5056, 5082, 5134, 153, 158, 276, 278, 440, 493, 494, 569, 576, 577, 624, 648, 678, 679, 703, 810, 866, 868, 909, 970, 1008.

<a id="M19-CAP-MEDICATION-f178b2e5476a1712"></a>
- **M19-CAP-MEDICATION-f178b2e5476a1712**: Supports specialist-supervised systemic treatment monitoring.
  Applies to original IDs: 4391.

<a id="M19-CAP-MEDICATION-20dcf9e08bfc7cd6"></a>
- **M19-CAP-MEDICATION-20dcf9e08bfc7cd6**: Tracks
  Applies to original IDs: 4391, 4413, 4428, 648, 678, 679, 703, 868.

<a id="M19-CAP-MEDICATION-3cfa39200ce0ea10"></a>
- **M19-CAP-MEDICATION-3cfa39200ce0ea10**: Medication
  Applies to original IDs: 4391, 909.

<a id="M19-CAP-MEDICATION-364a4c7e3ce06ed8"></a>
- **M19-CAP-MEDICATION-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 4391, 4428, 5016, 5056, 5082, 5134, 868.

<a id="M19-CAP-MEDICATION-25d747393526b787"></a>
- **M19-CAP-MEDICATION-25d747393526b787**: Laboratory Requirements
  Applies to original IDs: 4391.

<a id="M19-CAP-MEDICATION-4f6eff6e1139baae"></a>
- **M19-CAP-MEDICATION-4f6eff6e1139baae**: Treatment Duration
  Applies to original IDs: 4391, 4917, 624, 703.

<a id="M19-CAP-MEDICATION-2efc2fec2c0c8ee3"></a>
- **M19-CAP-MEDICATION-2efc2fec2c0c8ee3**: Response
  Applies to original IDs: 4391, 4428, 679.

<a id="M19-CAP-MEDICATION-ec1f62d8579498be"></a>
- **M19-CAP-MEDICATION-ec1f62d8579498be**: Adverse Effects
  Applies to original IDs: 4391, 4621, 4917, 5082.

<a id="M19-CAP-MEDICATION-2aa0cf292e6a6d56"></a>
- **M19-CAP-MEDICATION-2aa0cf292e6a6d56**: Infection Risk
  Applies to original IDs: 4391, 5016.

<a id="M19-CAP-MEDICATION-03841311e521d440"></a>
- **M19-CAP-MEDICATION-03841311e521d440**: Treatment Changes
  Applies to original IDs: 4391.

<a id="M19-CAP-MEDICATION-df50e8ab6e273a64"></a>
- **M19-CAP-MEDICATION-df50e8ab6e273a64**: Maintains critical rescue-medication information.
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-93f9c381ca40e635"></a>
- **M19-CAP-MEDICATION-93f9c381ca40e635**: Product
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-8b0977932531bb7f"></a>
- **M19-CAP-MEDICATION-8b0977932531bb7f**: Prescribed Dose
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-15745ae4887c75a9"></a>
- **M19-CAP-MEDICATION-15745ae4887c75a9**: Device
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-ccf5f1cc50d31a92"></a>
- **M19-CAP-MEDICATION-ccf5f1cc50d31a92**: Prescription
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-8154ac552d297e62"></a>
- **M19-CAP-MEDICATION-8154ac552d297e62**: Expiration
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-9ff76316045fe8f3"></a>
- **M19-CAP-MEDICATION-9ff76316045fe8f3**: Replacement Requirement
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-18427afb0c9b45b2"></a>
- **M19-CAP-MEDICATION-18427afb0c9b45b2**: Storage Information
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-244d7f17060b34f2"></a>
- **M19-CAP-MEDICATION-244d7f17060b34f2**: Emergency Plan
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-dbc22092a12fc6ba"></a>
- **M19-CAP-MEDICATION-dbc22092a12fc6ba**: Can generate expiration reminders.
  Applies to original IDs: 4413.

<a id="M19-CAP-MEDICATION-6420e7a4c75a59e9"></a>
- **M19-CAP-MEDICATION-6420e7a4c75a59e9**: Supports specialist-supervised allergen immunotherapy.
  Applies to original IDs: 4428.

<a id="M19-CAP-MEDICATION-57b970264c415ddd"></a>
- **M19-CAP-MEDICATION-57b970264c415ddd**: Indication
  Applies to original IDs: 4428, 5056, 5082.

<a id="M19-CAP-MEDICATION-c277a805ede1a1df"></a>
- **M19-CAP-MEDICATION-c277a805ede1a1df**: Allergen
  Applies to original IDs: 4428.

<a id="M19-CAP-MEDICATION-12f8b510a12979d0"></a>
- **M19-CAP-MEDICATION-12f8b510a12979d0**: Treatment Method
  Applies to original IDs: 4428.

<a id="M19-CAP-MEDICATION-700831e3b990e2e8"></a>
- **M19-CAP-MEDICATION-700831e3b990e2e8**: Treatment Phase
  Applies to original IDs: 4428.

<a id="M19-CAP-MEDICATION-e0af32ed792f0c30"></a>
- **M19-CAP-MEDICATION-e0af32ed792f0c30**: Administration
  Applies to original IDs: 4428, 5016, 5134.

<a id="M19-CAP-MEDICATION-10d8c964b53514ca"></a>
- **M19-CAP-MEDICATION-10d8c964b53514ca**: Duration
  Applies to original IDs: 4428.

<a id="M19-CAP-MEDICATION-6510c5c511a879bc"></a>
- **M19-CAP-MEDICATION-6510c5c511a879bc**: Purpose:
  Applies to original IDs: 4621, 4896, 4917, 5016, 5056, 5082, 5134.

<a id="M19-CAP-MEDICATION-4ac27d287b083258"></a>
- **M19-CAP-MEDICATION-4ac27d287b083258**: Provide medication safety across complex pediatric neurological treatment.
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-a18430c2e5b91505"></a>
- **M19-CAP-MEDICATION-a18430c2e5b91505**: Core Functions:
  Applies to original IDs: 4621, 4896, 4917, 5016, 5056, 5082, 5134.

<a id="M19-CAP-MEDICATION-67fa3cf55b30b4b9"></a>
- **M19-CAP-MEDICATION-67fa3cf55b30b4b9**: Neurological Medication Registry
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-a3534f153cca731c"></a>
- **M19-CAP-MEDICATION-a3534f153cca731c**: Dose History
  Applies to original IDs: 4621, 4896, 4917, 866.

<a id="M19-CAP-MEDICATION-e088e9f3190e8ffa"></a>
- **M19-CAP-MEDICATION-e088e9f3190e8ffa**: Weight-related Dose Context
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-4f4c8a1e1164c973"></a>
- **M19-CAP-MEDICATION-4f4c8a1e1164c973**: Drug Interactions
  Applies to original IDs: 4621, 4896, 4917, 5082.

<a id="M19-CAP-MEDICATION-795cce5f2b1f68d6"></a>
- **M19-CAP-MEDICATION-795cce5f2b1f68d6**: Polypharmacy
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-b90db32ea6c2cf86"></a>
- **M19-CAP-MEDICATION-b90db32ea6c2cf86**: Therapeutic Drug Monitoring
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-e1c2a513ace73bfc"></a>
- **M19-CAP-MEDICATION-e1c2a513ace73bfc**: Laboratory Monitoring
  Applies to original IDs: 4621, 4896, 5016, 5134, 576, 648, 810.

<a id="M19-CAP-MEDICATION-7ff590adde418414"></a>
- **M19-CAP-MEDICATION-7ff590adde418414**: Allergy Integration
  Applies to original IDs: 4621, 5082.

<a id="M19-CAP-MEDICATION-e9bb1b7104aa25cd"></a>
- **M19-CAP-MEDICATION-e9bb1b7104aa25cd**: Treatment Response
  Applies to original IDs: 4621, 4896, 4917, 5016, 5056, 5082, 5134.

<a id="M19-CAP-MEDICATION-8f50ce2495a24715"></a>
- **M19-CAP-MEDICATION-8f50ce2495a24715**: Medication Reconciliation
  Applies to original IDs: 4621, 4896.

<a id="M19-CAP-MEDICATION-edb39a199513cd00"></a>
- **M19-CAP-MEDICATION-edb39a199513cd00**: Hospital Discharge Reconciliation
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-08588d541c8026a3"></a>
- **M19-CAP-MEDICATION-08588d541c8026a3**: Adherence
  Applies to original IDs: 4621, 4896, 4917.

<a id="M19-CAP-MEDICATION-092034fbb21f8a85"></a>
- **M19-CAP-MEDICATION-092034fbb21f8a85**: Rescue Medication
  Applies to original IDs: 4621, 5082.

<a id="M19-CAP-MEDICATION-1f6d3be2defa34c3"></a>
- **M19-CAP-MEDICATION-1f6d3be2defa34c3**: Medication Change History
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-7f4041a2834fa4b6"></a>
- **M19-CAP-MEDICATION-7f4041a2834fa4b6**: Safety Intelligence:
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-7cd673943988cd90"></a>
- **M19-CAP-MEDICATION-7cd673943988cd90**: Duplicate Therapy Detection
  Applies to original IDs: 4621, 5056.

<a id="M19-CAP-MEDICATION-0e81212503c4488e"></a>
- **M19-CAP-MEDICATION-0e81212503c4488e**: Interaction Detection
  Applies to original IDs: 4621, 5082.

<a id="M19-CAP-MEDICATION-27223e8c6d59171d"></a>
- **M19-CAP-MEDICATION-27223e8c6d59171d**: Missing Monitoring Detection
  Applies to original IDs: 4621, 4896.

<a id="M19-CAP-MEDICATION-ce2da054f56eec84"></a>
- **M19-CAP-MEDICATION-ce2da054f56eec84**: High-risk Combination Review
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-1f8046d119f2150a"></a>
- **M19-CAP-MEDICATION-1f8046d119f2150a**: Dose-context Alerts
  Applies to original IDs: 4621, 4896.

<a id="M19-CAP-MEDICATION-50b423b6023aff70"></a>
- **M19-CAP-MEDICATION-50b423b6023aff70**: Patient-specific Contraindication Context
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-2f27e552d723d07f"></a>
- **M19-CAP-MEDICATION-2f27e552d723d07f**: Integrations:
  Applies to original IDs: 4621, 4917, 5016.

<a id="M19-CAP-MEDICATION-7605ce62d32022f4"></a>
- **M19-CAP-MEDICATION-7605ce62d32022f4**: Pharmacy
  Applies to original IDs: 4621, 4917, 5016.

<a id="M19-CAP-MEDICATION-35ff4287a628c0a4"></a>
- **M19-CAP-MEDICATION-35ff4287a628c0a4**: Laboratory Medicine
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-9e9dbb804ca8197a"></a>
- **M19-CAP-MEDICATION-9e9dbb804ca8197a**: Medical Passport
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-ef963e812dc56963"></a>
- **M19-CAP-MEDICATION-ef963e812dc56963**: Emergency Medicine
  Applies to original IDs: 4621.

<a id="M19-CAP-MEDICATION-d42b0bb84e6cd8da"></a>
- **M19-CAP-MEDICATION-d42b0bb84e6cd8da**: MVP Relevance:
  Applies to original IDs: 4621, 4896, 5056, 5082.

<a id="M19-CAP-MEDICATION-43a67d79860bcb43"></a>
- **M19-CAP-MEDICATION-43a67d79860bcb43**: HIGH
  Applies to original IDs: 4621, 4896, 5056, 5082.

<a id="M19-CAP-MEDICATION-b88b375a44ccd619"></a>
- **M19-CAP-MEDICATION-b88b375a44ccd619**: Status:
  Applies to original IDs: 4621, 4896, 4917, 5016, 5056, 5082, 5134.

<a id="M19-CAP-MEDICATION-3ced4f98fa077806"></a>
- **M19-CAP-MEDICATION-3ced4f98fa077806**: Provide medication and hormone-therapy safety across pediatric endocrine care.
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-ac3166b35f6510af"></a>
- **M19-CAP-MEDICATION-ac3166b35f6510af**: Medication Registry
  Applies to original IDs: 4896, 4917.

<a id="M19-CAP-MEDICATION-9c48adadde620c3e"></a>
- **M19-CAP-MEDICATION-9c48adadde620c3e**: Hormone Replacement
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-182c0b7e7f45cd43"></a>
- **M19-CAP-MEDICATION-182c0b7e7f45cd43**: Insulin
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-aa4e3e433085dc78"></a>
- **M19-CAP-MEDICATION-aa4e3e433085dc78**: Growth Hormone
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-148ea3042427ddae"></a>
- **M19-CAP-MEDICATION-148ea3042427ddae**: Thyroid Therapy
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-0ad6dc83b3951574"></a>
- **M19-CAP-MEDICATION-0ad6dc83b3951574**: Adrenal Replacement
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-a4cce65c17466b87"></a>
- **M19-CAP-MEDICATION-a4cce65c17466b87**: Puberty-related Hormone Therapy
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-1e644ea5e320c826"></a>
- **M19-CAP-MEDICATION-1e644ea5e320c826**: Weight-related Context
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-f749e8c444dc0a0d"></a>
- **M19-CAP-MEDICATION-f749e8c444dc0a0d**: Adverse Events
  Applies to original IDs: 4896, 5016, 5134.

<a id="M19-CAP-MEDICATION-bbf2edbbfacad60e"></a>
- **M19-CAP-MEDICATION-bbf2edbbfacad60e**: Safety Functions:
  Applies to original IDs: 4896, 5016, 5082, 5134.

<a id="M19-CAP-MEDICATION-8afb1103fef4b3da"></a>
- **M19-CAP-MEDICATION-8afb1103fef4b3da**: Interaction Alerts
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-36e36728507b0b20"></a>
- **M19-CAP-MEDICATION-36e36728507b0b20**: Emergency Steroid Context
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-e684bd0849eba4bf"></a>
- **M19-CAP-MEDICATION-e684bd0849eba4bf**: Insulin Safety Context
  Applies to original IDs: 4896.

<a id="M19-CAP-MEDICATION-f3863b6b6ff6ee2f"></a>
- **M19-CAP-MEDICATION-f3863b6b6ff6ee2f**: Clinician-defined High-risk Alerts
  Applies to original IDs: 4896, 5082.

<a id="M19-CAP-MEDICATION-cf39d0dbe4828c87"></a>
- **M19-CAP-MEDICATION-cf39d0dbe4828c87**: Provide longitudinal medication safety for gynecological and reproductive hormonal therapies.
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-2cf2b84939a9ee1d"></a>
- **M19-CAP-MEDICATION-2cf2b84939a9ee1d**: Treatment Indication
  Applies to original IDs: 4917, 5134.

<a id="M19-CAP-MEDICATION-cbc632a373747b8a"></a>
- **M19-CAP-MEDICATION-cbc632a373747b8a**: Hormonal Therapy
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-2356a36c34e89685"></a>
- **M19-CAP-MEDICATION-2356a36c34e89685**: Allergy
  Applies to original IDs: 4917, 5016, 5056, 5082.

<a id="M19-CAP-MEDICATION-1612d8ebce61ce4a"></a>
- **M19-CAP-MEDICATION-1612d8ebce61ce4a**: Blood Pressure Context
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-f0e8f686e8dff12b"></a>
- **M19-CAP-MEDICATION-f0e8f686e8dff12b**: Thrombotic Risk Context
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-0a6390d9c06a082d"></a>
- **M19-CAP-MEDICATION-0a6390d9c06a082d**: Migraine Context
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-bfe1987fc3cd5d02"></a>
- **M19-CAP-MEDICATION-bfe1987fc3cd5d02**: Liver Context
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-8ebc1b59c1a3dff6"></a>
- **M19-CAP-MEDICATION-8ebc1b59c1a3dff6**: Laboratory Monitoring where indicated
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-b9edfabe07992ef6"></a>
- **M19-CAP-MEDICATION-b9edfabe07992ef6**: Gynecology
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-1b8a22e65f4f0098"></a>
- **M19-CAP-MEDICATION-1b8a22e65f4f0098**: Endocrinology
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-d5201c8c85a8f994"></a>
- **M19-CAP-MEDICATION-d5201c8c85a8f994**: Hematology
  Applies to original IDs: 4917, 5016.

<a id="M19-CAP-MEDICATION-1776431d6d17f344"></a>
- **M19-CAP-MEDICATION-1776431d6d17f344**: Neurology
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-3464207120f1db8a"></a>
- **M19-CAP-MEDICATION-3464207120f1db8a**: Primary Care
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-07f8d474b8b4141c"></a>
- **M19-CAP-MEDICATION-07f8d474b8b4141c**: Safety:
  Applies to original IDs: 4917, 5056.

<a id="M19-CAP-MEDICATION-ea5445eeb72b3f0c"></a>
- **M19-CAP-MEDICATION-ea5445eeb72b3f0c**: Medication selection remains clinician-led and patient-specific.
  Applies to original IDs: 4917.

<a id="M19-CAP-MEDICATION-89d14efcb4b34d71"></a>
- **M19-CAP-MEDICATION-89d14efcb4b34d71**: Provide safety monitoring for biologic and targeted immune-modifying therapies.
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-6dcaeb4b7a20f8de"></a>
- **M19-CAP-MEDICATION-6dcaeb4b7a20f8de**: Therapy Indication
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-5e49eac309e3935a"></a>
- **M19-CAP-MEDICATION-5e49eac309e3935a**: Biological Agent
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-9a0b471c59580799"></a>
- **M19-CAP-MEDICATION-9a0b471c59580799**: Targeted Therapy
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-111f8e08e6768d5a"></a>
- **M19-CAP-MEDICATION-111f8e08e6768d5a**: Pre-treatment Screening
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-d4a8183a7dc5a694"></a>
- **M19-CAP-MEDICATION-d4a8183a7dc5a694**: Vaccination Context
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-00e25f53ed869a7f"></a>
- **M19-CAP-MEDICATION-00e25f53ed869a7f**: Organ Function Context
  Applies to original IDs: 5016, 5082.

<a id="M19-CAP-MEDICATION-bed207f083d4a1d0"></a>
- **M19-CAP-MEDICATION-bed207f083d4a1d0**: Infusion Reaction
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-aa4172a38f3f9d23"></a>
- **M19-CAP-MEDICATION-aa4172a38f3f9d23**: Treatment Hold Context
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-e02c31a1f69fbb91"></a>
- **M19-CAP-MEDICATION-e02c31a1f69fbb91**: Discontinuation
  Applies to original IDs: 5016, 5056.

<a id="M19-CAP-MEDICATION-27cde7069fe13381"></a>
- **M19-CAP-MEDICATION-27cde7069fe13381**: Immunology
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-791e150b54f860f6"></a>
- **M19-CAP-MEDICATION-791e150b54f860f6**: Rheumatology
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-73398554fcd7dcc3"></a>
- **M19-CAP-MEDICATION-73398554fcd7dcc3**: Gastroenterology
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-c20697528142b090"></a>
- **M19-CAP-MEDICATION-c20697528142b090**: Dermatology
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-813d0ab6af854e92"></a>
- **M19-CAP-MEDICATION-813d0ab6af854e92**: Infectious Disease
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-9ad564245bdfd965"></a>
- **M19-CAP-MEDICATION-9ad564245bdfd965**: Required Screening Detection
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-ce0364398a66dc38"></a>
- **M19-CAP-MEDICATION-ce0364398a66dc38**: Infection-context Alerts
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-da9b2f9b136f321b"></a>
- **M19-CAP-MEDICATION-da9b2f9b136f321b**: Vaccination Review
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-16d19b28eff74f4c"></a>
- **M19-CAP-MEDICATION-16d19b28eff74f4c**: Interaction Context
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-c699a4d97ad27e43"></a>
- **M19-CAP-MEDICATION-c699a4d97ad27e43**: Monitoring Gaps
  Applies to original IDs: 5016.

<a id="M19-CAP-MEDICATION-75efa3b05c87656b"></a>
- **M19-CAP-MEDICATION-75efa3b05c87656b**: Provide governed antimicrobial medication management and stewardship support for pediatric care.
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-408effe5d61948d3"></a>
- **M19-CAP-MEDICATION-408effe5d61948d3**: Antimicrobial Agent
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-3388a209063c3833"></a>
- **M19-CAP-MEDICATION-3388a209063c3833**: Weight Context
  Applies to original IDs: 5056, 5082.

<a id="M19-CAP-MEDICATION-6ffbfeb83a373123"></a>
- **M19-CAP-MEDICATION-6ffbfeb83a373123**: Route
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-267d300e14857db1"></a>
- **M19-CAP-MEDICATION-267d300e14857db1**: Frequency
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-2422e0f7d14fc2a1"></a>
- **M19-CAP-MEDICATION-2422e0f7d14fc2a1**: Start Date
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-ddc06882421ec938"></a>
- **M19-CAP-MEDICATION-ddc06882421ec938**: Planned Duration
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-f5486ac59c9bb5f3"></a>
- **M19-CAP-MEDICATION-f5486ac59c9bb5f3**: Microbiology Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-3134e2bed51c3b0b"></a>
- **M19-CAP-MEDICATION-3134e2bed51c3b0b**: Susceptibility Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-820873bb0d7db96e"></a>
- **M19-CAP-MEDICATION-820873bb0d7db96e**: Renal Function
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-441f25c6aaa30b91"></a>
- **M19-CAP-MEDICATION-441f25c6aaa30b91**: Hepatic Function Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-912ea524a4675b8d"></a>
- **M19-CAP-MEDICATION-912ea524a4675b8d**: Drug Interaction
  Applies to original IDs: 5056, 5134.

<a id="M19-CAP-MEDICATION-282f9a1f1ccd1958"></a>
- **M19-CAP-MEDICATION-282f9a1f1ccd1958**: De-escalation Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-ce99943d0ac0ae5e"></a>
- **M19-CAP-MEDICATION-ce99943d0ac0ae5e**: Stewardship Functions:
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-77a40e9bfbbcfe2c"></a>
- **M19-CAP-MEDICATION-77a40e9bfbbcfe2c**: Excess Duration Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-c19cd63791a6d4ea"></a>
- **M19-CAP-MEDICATION-c19cd63791a6d4ea**: Microbiology-Treatment Correlation
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-2fc5f48bc137ff07"></a>
- **M19-CAP-MEDICATION-2fc5f48bc137ff07**: IV-to-Oral Review Context
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-8d23b09b2c7cea8c"></a>
- **M19-CAP-MEDICATION-8d23b09b2c7cea8c**: Previous Resistance
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-37a4fe7ff9c28419"></a>
- **M19-CAP-MEDICATION-37a4fe7ff9c28419**: Allergy Review
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-3fe36f192ab4b0e6"></a>
- **M19-CAP-MEDICATION-3fe36f192ab4b0e6**: Treatment Outcome
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-b601763465110953"></a>
- **M19-CAP-MEDICATION-b601763465110953**: All therapeutic recommendations remain clinician-reviewed and patient-specific.
  Applies to original IDs: 5056.

<a id="M19-CAP-MEDICATION-9db80e5975f4fc9b"></a>
- **M19-CAP-MEDICATION-9db80e5975f4fc9b**: Provide comprehensive medication safety for antiseizure and emergency seizure treatment.
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-fc3c8c6b84c423bf"></a>
- **M19-CAP-MEDICATION-fc3c8c6b84c423bf**: Antiseizure Medication Registry
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-4144bc995fdb04f7"></a>
- **M19-CAP-MEDICATION-4144bc995fdb04f7**: Administration Schedule
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-ec4cf76f2086484f"></a>
- **M19-CAP-MEDICATION-ec4cf76f2086484f**: Serum Level Context
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-001d622f8a9f6d29"></a>
- **M19-CAP-MEDICATION-001d622f8a9f6d29**: Rescue Plan
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-fba6567fc0a4b503"></a>
- **M19-CAP-MEDICATION-fba6567fc0a4b503**: Medication Changes
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-397d44420a0c1306"></a>
- **M19-CAP-MEDICATION-397d44420a0c1306**: Adherence Context
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-c504e58f3b39a996"></a>
- **M19-CAP-MEDICATION-c504e58f3b39a996**: Duplicate Therapy Context
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-834189ebd8320e51"></a>
- **M19-CAP-MEDICATION-834189ebd8320e51**: Required Monitoring
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-2f3a0ce8d2894a79"></a>
- **M19-CAP-MEDICATION-2f3a0ce8d2894a79**: Rescue Plan Visibility
  Applies to original IDs: 5082.

<a id="M19-CAP-MEDICATION-c9c587f3a775cdf8"></a>
- **M19-CAP-MEDICATION-c9c587f3a775cdf8**: Coordinate targeted and molecularly selected treatment in pediatric CNS tumors.
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-3bd805ecf0cceabf"></a>
- **M19-CAP-MEDICATION-3bd805ecf0cceabf**: Molecular Target
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-a7472d3c57b3f4e0"></a>
- **M19-CAP-MEDICATION-a7472d3c57b3f4e0**: Therapy
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-0ae42e6a623dbf60"></a>
- **M19-CAP-MEDICATION-0ae42e6a623dbf60**: Molecular Evidence Context
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-89db1d32516fdeb7"></a>
- **M19-CAP-MEDICATION-89db1d32516fdeb7**: Organ Monitoring
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-5c4782289ebfca80"></a>
- **M19-CAP-MEDICATION-5c4782289ebfca80**: Resistance Context
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-b61ba35567ab2013"></a>
- **M19-CAP-MEDICATION-b61ba35567ab2013**: Molecular Reassessment
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-8158fae71efa0684"></a>
- **M19-CAP-MEDICATION-8158fae71efa0684**: Treatment Modification
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-9029a8bbdb8a6553"></a>
- **M19-CAP-MEDICATION-9029a8bbdb8a6553**: Outcome
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-4ffa5fcd8c303564"></a>
- **M19-CAP-MEDICATION-4ffa5fcd8c303564**: Molecular Diagnosis Verification
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-25d5e0d2890f57f4"></a>
- **M19-CAP-MEDICATION-25d5e0d2890f57f4**: Medication Interaction Review
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-ca81c21d9ddb4308"></a>
- **M19-CAP-MEDICATION-ca81c21d9ddb4308**: Toxicity Monitoring
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-92ff6e65fe767c86"></a>
- **M19-CAP-MEDICATION-92ff6e65fe767c86**: Required Surveillance
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-8a7a10b871559401"></a>
- **M19-CAP-MEDICATION-8a7a10b871559401**: Treatment Version Traceability
  Applies to original IDs: 5134.

<a id="M19-CAP-MEDICATION-4608e571d8b486e4"></a>
- **M19-CAP-MEDICATION-4608e571d8b486e4**: # Generic Medicine Database
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-f46e10af70055b66"></a>
- **M19-CAP-MEDICATION-f46e10af70055b66**: Stores
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-c3b2f5fcf90dddf2"></a>
- **M19-CAP-MEDICATION-c3b2f5fcf90dddf2**: International Nonproprietary Name (INN)
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-ee87b08dca8597fd"></a>
- **M19-CAP-MEDICATION-ee87b08dca8597fd**: Brand Names
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-daa921eb0e51e4de"></a>
- **M19-CAP-MEDICATION-daa921eb0e51e4de**: Country Availability
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-981f3cea9ccbfeac"></a>
- **M19-CAP-MEDICATION-981f3cea9ccbfeac**: Dosage Forms
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-c8f2f3fad28c4b03"></a>
- **M19-CAP-MEDICATION-c8f2f3fad28c4b03**: Strength
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-e6322ac09f884cf3"></a>
- **M19-CAP-MEDICATION-e6322ac09f884cf3**: Manufacturer
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-19a0c12d0d010ff8"></a>
- **M19-CAP-MEDICATION-19a0c12d0d010ff8**: Supports worldwide medicine matching.
  Applies to original IDs: 153.

<a id="M19-CAP-MEDICATION-0360e206994454ea"></a>
- **M19-CAP-MEDICATION-0360e206994454ea**: # Side Effects
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-0580bb84b6b7e507"></a>
- **M19-CAP-MEDICATION-0580bb84b6b7e507**: Users can report
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-3f999e9cf54a7025"></a>
- **M19-CAP-MEDICATION-3f999e9cf54a7025**: Mild
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-640c0843ab9b1ddb"></a>
- **M19-CAP-MEDICATION-640c0843ab9b1ddb**: Moderate
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-fda908067dfd4040"></a>
- **M19-CAP-MEDICATION-fda908067dfd4040**: Severe
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-1e5a36efc5638933"></a>
- **M19-CAP-MEDICATION-1e5a36efc5638933**: Allergic Reaction
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-c8be3a7a0d401443"></a>
- **M19-CAP-MEDICATION-c8be3a7a0d401443**: AI determines urgency and recommends contacting a healthcare professional when appropriate.
  Applies to original IDs: 158.

<a id="M19-CAP-MEDICATION-dc71eab2bfea40c1"></a>
- **M19-CAP-MEDICATION-dc71eab2bfea40c1**: # Hormonal Therapy
  Applies to original IDs: 276.

<a id="M19-CAP-MEDICATION-a7e4ad66d96eaa2c"></a>
- **M19-CAP-MEDICATION-a7e4ad66d96eaa2c**: Allows users to record prescribed hormonal therapies.
  Applies to original IDs: 276.

<a id="M19-CAP-MEDICATION-da43051922e327e9"></a>
- **M19-CAP-MEDICATION-da43051922e327e9**: Provides reminders for follow-up examinations and laboratory monitoring.
  Applies to original IDs: 276.

<a id="M19-CAP-MEDICATION-9486e20c93491518"></a>
- **M19-CAP-MEDICATION-9486e20c93491518**: Does not recommend starting, stopping or changing treatment.
  Applies to original IDs: 276.

<a id="M19-CAP-MEDICATION-93d29892145b4111"></a>
- **M19-CAP-MEDICATION-93d29892145b4111**: # Supplement Registry
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-7ed30bea56318248"></a>
- **M19-CAP-MEDICATION-7ed30bea56318248**: Allows users to record
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-6423992c5f92f096"></a>
- **M19-CAP-MEDICATION-6423992c5f92f096**: Vitamins
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-cded0ecb44616316"></a>
- **M19-CAP-MEDICATION-cded0ecb44616316**: Minerals
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-fc0fe213f1c18f0f"></a>
- **M19-CAP-MEDICATION-fc0fe213f1c18f0f**: Protein
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-c2137d9e98671f9c"></a>
- **M19-CAP-MEDICATION-c2137d9e98671f9c**: Creatine
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-8f4545b86647a6bd"></a>
- **M19-CAP-MEDICATION-8f4545b86647a6bd**: Omega-3
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-297eea49b3b50bb7"></a>
- **M19-CAP-MEDICATION-297eea49b3b50bb7**: Herbal Supplements
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-587bfa7cec41d200"></a>
- **M19-CAP-MEDICATION-587bfa7cec41d200**: Provides interaction awareness and tracking.
  Applies to original IDs: 278.

<a id="M19-CAP-MEDICATION-f7dbbe7ab50cf201"></a>
- **M19-CAP-MEDICATION-f7dbbe7ab50cf201**: # Global Medication Management Platform
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-38020a19806a32e3"></a>
- **M19-CAP-MEDICATION-38020a19806a32e3**: Provides unified medication management across the Medical Passport ecosystem.
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-24f5c88a3f294930"></a>
- **M19-CAP-MEDICATION-24f5c88a3f294930**: Prescriptions
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-2cbd1f2aea929b9b"></a>
- **M19-CAP-MEDICATION-2cbd1f2aea929b9b**: Medication History
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-a9154044b51e78fe"></a>
- **M19-CAP-MEDICATION-a9154044b51e78fe**: Pharmacy Integration
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-8e933a18c06111d3"></a>
- **M19-CAP-MEDICATION-8e933a18c06111d3**: Travel Documentation
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-ddca93d7133f65aa"></a>
- **M19-CAP-MEDICATION-ddca93d7133f65aa**: Treatment Monitoring
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-78c7cc3ab418d331"></a>
- **M19-CAP-MEDICATION-78c7cc3ab418d331**: Acts as the central medication management module.
  Applies to original IDs: 440.

<a id="M19-CAP-MEDICATION-09d563074ec35a4c"></a>
- **M19-CAP-MEDICATION-09d563074ec35a4c**: # PrEP Monitoring
  Applies to original IDs: 493.

<a id="M19-CAP-MEDICATION-9fad3198d502b99d"></a>
- **M19-CAP-MEDICATION-9fad3198d502b99d**: Supports monitoring of preventive therapy.
  Applies to original IDs: 493.

<a id="M19-CAP-MEDICATION-01bbec9df504a305"></a>
- **M19-CAP-MEDICATION-01bbec9df504a305**: Includes
  Applies to original IDs: 493, 494, 569, 576, 577.

<a id="M19-CAP-MEDICATION-1a9e5b862275ee04"></a>
- **M19-CAP-MEDICATION-1a9e5b862275ee04**: Laboratory Schedule
  Applies to original IDs: 493, 577.

<a id="M19-CAP-MEDICATION-4ba2bd68672f5410"></a>
- **M19-CAP-MEDICATION-4ba2bd68672f5410**: Follow-up Visits
  Applies to original IDs: 493.

<a id="M19-CAP-MEDICATION-f4af213318cdbbc3"></a>
- **M19-CAP-MEDICATION-f4af213318cdbbc3**: Medication Adherence
  Applies to original IDs: 493.

<a id="M19-CAP-MEDICATION-3a79051e1041d797"></a>
- **M19-CAP-MEDICATION-3a79051e1041d797**: # PEP Monitoring
  Applies to original IDs: 494.

<a id="M19-CAP-MEDICATION-275b9e3f3385d57e"></a>
- **M19-CAP-MEDICATION-275b9e3f3385d57e**: Supports monitoring of post-exposure prophylaxis.
  Applies to original IDs: 494.

<a id="M19-CAP-MEDICATION-9b97c6e8966ca772"></a>
- **M19-CAP-MEDICATION-9b97c6e8966ca772**: Treatment Timeline
  Applies to original IDs: 494.

<a id="M19-CAP-MEDICATION-fcbda7f8abde9d4a"></a>
- **M19-CAP-MEDICATION-fcbda7f8abde9d4a**: Laboratory Follow-up
  Applies to original IDs: 494.

<a id="M19-CAP-MEDICATION-6b5154af20cc3812"></a>
- **M19-CAP-MEDICATION-6b5154af20cc3812**: Medication Monitoring
  Applies to original IDs: 494.

<a id="M19-CAP-MEDICATION-bc9845fd732b2556"></a>
- **M19-CAP-MEDICATION-bc9845fd732b2556**: # Insulin Therapy Management
  Applies to original IDs: 569.

<a id="M19-CAP-MEDICATION-f91965129ae0c424"></a>
- **M19-CAP-MEDICATION-f91965129ae0c424**: Supports insulin treatment monitoring.
  Applies to original IDs: 569.

<a id="M19-CAP-MEDICATION-0956b730c9dd3f98"></a>
- **M19-CAP-MEDICATION-0956b730c9dd3f98**: Basal Insulin
  Applies to original IDs: 569, 866.

<a id="M19-CAP-MEDICATION-f880f92712247236"></a>
- **M19-CAP-MEDICATION-f880f92712247236**: Bolus Insulin
  Applies to original IDs: 569, 866.

<a id="M19-CAP-MEDICATION-3e7c8f5567536740"></a>
- **M19-CAP-MEDICATION-3e7c8f5567536740**: Injection History
  Applies to original IDs: 569.

<a id="M19-CAP-MEDICATION-2e0c353434ee5487"></a>
- **M19-CAP-MEDICATION-2e0c353434ee5487**: Dose Adjustments
  Applies to original IDs: 569.

<a id="M19-CAP-MEDICATION-cd6f583f74f29fad"></a>
- **M19-CAP-MEDICATION-cd6f583f74f29fad**: Insulin Pump Integration
  Applies to original IDs: 569.

<a id="M19-CAP-MEDICATION-9595a6f92517ac49"></a>
- **M19-CAP-MEDICATION-9595a6f92517ac49**: # Testosterone Therapy Monitoring
  Applies to original IDs: 576.

<a id="M19-CAP-MEDICATION-b9c00155fb43d465"></a>
- **M19-CAP-MEDICATION-b9c00155fb43d465**: Supports physician-supervised testosterone replacement therapy monitoring.
  Applies to original IDs: 576.

<a id="M19-CAP-MEDICATION-b596b3fab9cbd244"></a>
- **M19-CAP-MEDICATION-b596b3fab9cbd244**: Treatment History
  Applies to original IDs: 576.

<a id="M19-CAP-MEDICATION-a4326def74127851"></a>
- **M19-CAP-MEDICATION-a4326def74127851**: Injection Schedule
  Applies to original IDs: 576, 678.

<a id="M19-CAP-MEDICATION-f2daa824b43877a0"></a>
- **M19-CAP-MEDICATION-f2daa824b43877a0**: Adverse Event Monitoring
  Applies to original IDs: 576.

<a id="M19-CAP-MEDICATION-8aac61a556e5fdcb"></a>
- **M19-CAP-MEDICATION-8aac61a556e5fdcb**: # Performance-Enhancing Substance Monitoring
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-558e6a57dcc854f4"></a>
- **M19-CAP-MEDICATION-558e6a57dcc854f4**: Supports health monitoring for individuals using anabolic-androgenic substances under medical supervision or self-report.
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-68fdb0b974d7784e"></a>
- **M19-CAP-MEDICATION-68fdb0b974d7784e**: Compound Registry
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-bf05bb9e8c3ada30"></a>
- **M19-CAP-MEDICATION-bf05bb9e8c3ada30**: Liver Monitoring
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-7837eba49de70e96"></a>
- **M19-CAP-MEDICATION-7837eba49de70e96**: Kidney Monitoring
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-1b40580c7df5b87c"></a>
- **M19-CAP-MEDICATION-1b40580c7df5b87c**: Cardiovascular Monitoring
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-cad42ed132c5235f"></a>
- **M19-CAP-MEDICATION-cad42ed132c5235f**: Hormonal Monitoring
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-0ecdd2d7d7142f29"></a>
- **M19-CAP-MEDICATION-0ecdd2d7d7142f29**: Physician Recommendations
  Applies to original IDs: 577.

<a id="M19-CAP-MEDICATION-eb32c2ad7ba5d2c7"></a>
- **M19-CAP-MEDICATION-eb32c2ad7ba5d2c7**: # Probiotic Therapy Monitoring
  Applies to original IDs: 624.

<a id="M19-CAP-MEDICATION-57417cc350fa4003"></a>
- **M19-CAP-MEDICATION-57417cc350fa4003**: Tracks probiotic treatment.
  Applies to original IDs: 624.

<a id="M19-CAP-MEDICATION-1fbaf91389bcb1de"></a>
- **M19-CAP-MEDICATION-1fbaf91389bcb1de**: Selected Product
  Applies to original IDs: 624.

<a id="M19-CAP-MEDICATION-bf3e89de7b15207a"></a>
- **M19-CAP-MEDICATION-bf3e89de7b15207a**: Response Monitoring
  Applies to original IDs: 624.

<a id="M19-CAP-MEDICATION-6864b968505141fb"></a>
- **M19-CAP-MEDICATION-6864b968505141fb**: Physician Notes
  Applies to original IDs: 624, 679.

<a id="M19-CAP-MEDICATION-d04d46c5163a57f1"></a>
- **M19-CAP-MEDICATION-d04d46c5163a57f1**: # Immunosuppressive Therapy Monitoring
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-82eb8f3ba438d2cb"></a>
- **M19-CAP-MEDICATION-82eb8f3ba438d2cb**: Supports monitoring after kidney transplantation.
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-6f57a3cdf20c9e2f"></a>
- **M19-CAP-MEDICATION-6f57a3cdf20c9e2f**: Tacrolimus
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-5b479b1d19096183"></a>
- **M19-CAP-MEDICATION-5b479b1d19096183**: Cyclosporine
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-8294f55e48ceb6ac"></a>
- **M19-CAP-MEDICATION-8294f55e48ceb6ac**: Mycophenolate
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-d5b3b99ba19a811e"></a>
- **M19-CAP-MEDICATION-d5b3b99ba19a811e**: Everolimus
  Applies to original IDs: 648.

<a id="M19-CAP-MEDICATION-2a1389f7b18b8dfa"></a>
- **M19-CAP-MEDICATION-2a1389f7b18b8dfa**: # Testosterone Replacement Therapy Center
  Applies to original IDs: 678.

<a id="M19-CAP-MEDICATION-7e8894e753b22aed"></a>
- **M19-CAP-MEDICATION-7e8894e753b22aed**: Supports physician-supervised testosterone therapy.
  Applies to original IDs: 678.

<a id="M19-CAP-MEDICATION-368389b22a7065de"></a>
- **M19-CAP-MEDICATION-368389b22a7065de**: Dosage
  Applies to original IDs: 678, 970.

<a id="M19-CAP-MEDICATION-71f790fdf94f9c10"></a>
- **M19-CAP-MEDICATION-71f790fdf94f9c10**: Laboratory Results
  Applies to original IDs: 678.

<a id="M19-CAP-MEDICATION-b1100d9ac9ca4e0b"></a>
- **M19-CAP-MEDICATION-b1100d9ac9ca4e0b**: Side Effects
  Applies to original IDs: 678, 703, 810, 970.

<a id="M19-CAP-MEDICATION-95ca82a45122dc88"></a>
- **M19-CAP-MEDICATION-95ca82a45122dc88**: Treatment Progress
  Applies to original IDs: 678.

<a id="M19-CAP-MEDICATION-2b2aa8cdaf604106"></a>
- **M19-CAP-MEDICATION-2b2aa8cdaf604106**: # Gonadotropin Therapy Monitoring
  Applies to original IDs: 679.

<a id="M19-CAP-MEDICATION-b1aa8aa82d1baafb"></a>
- **M19-CAP-MEDICATION-b1aa8aa82d1baafb**: Supports monitoring of hCG and related therapies.
  Applies to original IDs: 679.

<a id="M19-CAP-MEDICATION-edd0c7367bff9c4c"></a>
- **M19-CAP-MEDICATION-edd0c7367bff9c4c**: hCG Administration
  Applies to original IDs: 679.

<a id="M19-CAP-MEDICATION-5096547f04ef0106"></a>
- **M19-CAP-MEDICATION-5096547f04ef0106**: Hormonal Changes
  Applies to original IDs: 679.

<a id="M19-CAP-MEDICATION-0b90b9e939c4d1e3"></a>
- **M19-CAP-MEDICATION-0b90b9e939c4d1e3**: # Hormone Replacement Therapy Monitoring
  Applies to original IDs: 703.

<a id="M19-CAP-MEDICATION-59b26564a4b3523a"></a>
- **M19-CAP-MEDICATION-59b26564a4b3523a**: Supports physician-supervised HRT.
  Applies to original IDs: 703.

<a id="M19-CAP-MEDICATION-3f55ecdbec07eb48"></a>
- **M19-CAP-MEDICATION-3f55ecdbec07eb48**: Estrogen
  Applies to original IDs: 703.

<a id="M19-CAP-MEDICATION-2f87863459d7d729"></a>
- **M19-CAP-MEDICATION-2f87863459d7d729**: Progesterone
  Applies to original IDs: 703.

<a id="M19-CAP-MEDICATION-7155c96e611db8f3"></a>
- **M19-CAP-MEDICATION-7155c96e611db8f3**: # Chemotherapy Monitoring
  Applies to original IDs: 810.

<a id="M19-CAP-MEDICATION-2dc7f270e05a0520"></a>
- **M19-CAP-MEDICATION-2dc7f270e05a0520**: Tracks chemotherapy cycles.
  Applies to original IDs: 810.

<a id="M19-CAP-MEDICATION-dbe240b8553e431d"></a>
- **M19-CAP-MEDICATION-dbe240b8553e431d**: Protocol
  Applies to original IDs: 810.

<a id="M19-CAP-MEDICATION-b27a80589841d1df"></a>
- **M19-CAP-MEDICATION-b27a80589841d1df**: Cycle Number
  Applies to original IDs: 810.

<a id="M19-CAP-MEDICATION-89ed03683ec55924"></a>
- **M19-CAP-MEDICATION-89ed03683ec55924**: # Pediatric Insulin Therapy Manager
  Applies to original IDs: 866.

<a id="M19-CAP-MEDICATION-4fb78dab81782535"></a>
- **M19-CAP-MEDICATION-4fb78dab81782535**: Manages insulin therapy for children.
  Applies to original IDs: 866.

<a id="M19-CAP-MEDICATION-0fc94940076d8a50"></a>
- **M19-CAP-MEDICATION-0fc94940076d8a50**: Correction Doses
  Applies to original IDs: 866.

<a id="M19-CAP-MEDICATION-a3a1f74e98055772"></a>
- **M19-CAP-MEDICATION-a3a1f74e98055772**: # Pediatric Growth Hormone Therapy
  Applies to original IDs: 868.

<a id="M19-CAP-MEDICATION-d6df62c819b30699"></a>
- **M19-CAP-MEDICATION-d6df62c819b30699**: Supports monitoring of growth hormone treatment.
  Applies to original IDs: 868.

<a id="M19-CAP-MEDICATION-03f2688f1c6d2cab"></a>
- **M19-CAP-MEDICATION-03f2688f1c6d2cab**: Height Velocity
  Applies to original IDs: 868.

<a id="M19-CAP-MEDICATION-78b7f365993d4abc"></a>
- **M19-CAP-MEDICATION-78b7f365993d4abc**: IGF-1
  Applies to original IDs: 868.

<a id="M19-CAP-MEDICATION-0d86946e629cc025"></a>
- **M19-CAP-MEDICATION-0d86946e629cc025**: Follow-up
  Applies to original IDs: 868.

<a id="M19-CAP-MEDICATION-20efe36ab0439c5e"></a>
- **M19-CAP-MEDICATION-20efe36ab0439c5e**: # Pediatric Inhaler Manager
  Applies to original IDs: 909.

<a id="M19-CAP-MEDICATION-ad3f1d798d9b6150"></a>
- **M19-CAP-MEDICATION-ad3f1d798d9b6150**: Tracks inhaler therapy.
  Applies to original IDs: 909.

<a id="M19-CAP-MEDICATION-d1b66c80ccb6bc03"></a>
- **M19-CAP-MEDICATION-d1b66c80ccb6bc03**: Dose Counter
  Applies to original IDs: 909.

<a id="M19-CAP-MEDICATION-e5ec1a80bf5235cd"></a>
- **M19-CAP-MEDICATION-e5ec1a80bf5235cd**: Usage History
  Applies to original IDs: 909.

<a id="M19-CAP-MEDICATION-a343ad16a1294964"></a>
- **M19-CAP-MEDICATION-a343ad16a1294964**: Reminders
  Applies to original IDs: 909.

<a id="M19-CAP-MEDICATION-968f419ce838a8a1"></a>
- **M19-CAP-MEDICATION-968f419ce838a8a1**: # Pediatric Iron Therapy Manager
  Applies to original IDs: 970.

<a id="M19-CAP-MEDICATION-8f6e92b5ad9152c2"></a>
- **M19-CAP-MEDICATION-8f6e92b5ad9152c2**: Tracks iron supplementation.
  Applies to original IDs: 970.

<a id="M19-CAP-MEDICATION-c6d2faefa788a381"></a>
- **M19-CAP-MEDICATION-c6d2faefa788a381**: Schedule
  Applies to original IDs: 970.

<a id="M19-CAP-MEDICATION-159b5db268668f6a"></a>
- **M19-CAP-MEDICATION-159b5db268668f6a**: Laboratory Response
  Applies to original IDs: 970.

<a id="M19-CAP-MEDICATION-511f6d422428687c"></a>
- **M19-CAP-MEDICATION-511f6d422428687c**: Tracks antimicrobial therapy.
  Applies to original IDs: 1008.

<a id="M19-CAP-MEDICATION-cf1455105f07c3ad"></a>
- **M19-CAP-MEDICATION-cf1455105f07c3ad**: Antibiotics
  Applies to original IDs: 1008.

<a id="M19-CAP-MEDICATION-0429a4e72046b528"></a>
- **M19-CAP-MEDICATION-0429a4e72046b528**: Antivirals
  Applies to original IDs: 1008.

<a id="M19-CAP-MEDICATION-d18f38475bc410ad"></a>
- **M19-CAP-MEDICATION-d18f38475bc410ad**: Antifungals
  Applies to original IDs: 1008.

<a id="M19-CAP-MEDICATION-5ab874e8998bf8aa"></a>
- **M19-CAP-MEDICATION-5ab874e8998bf8aa**: Weight-Based Dosage
  Applies to original IDs: 1008.
