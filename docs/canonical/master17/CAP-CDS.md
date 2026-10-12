# CORE-CAP-CDS — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## diagnostic-clinical-assessment

CDS owns bounded cardiovascular risk assessments and AI-assisted pre-visit drafts. AI performs model execution; clinician review/edit/reject/sign/publish are distinct attributed decisions. SCORE2 and ASCVD names are source coverage requirements, not approved algorithms for every population.

Acceptance additions: Preserve score/evidence versions, eligibility population, missing inputs, uncertainty and draft status. Never apply adult score assumptions to children. Draft summaries cannot publish themselves; review, signature, correction and revocation must be tested independently.

## clinical-recommendation-profiles

Existing CDS owns clinician-facing recommendation, interpretation, triage and scoring artifacts. AI supplies execution and evidence retrieval; medication, imaging, laboratory and emergency owners retain their own clinical facts and actions. Every intended-use task retains its own source requirements and validation gates.

Acceptance additions: Preserve patient/context/evidence/model versions, eligibility, uncertainty, contradictions and clinician acceptance/rejection. No autonomous dose/substitution, ICU transfer, diagnostic exclusion, vaccination order or emergency disposition. Clinical recommendations are not approved actions; drift, stale context and revoked data require invalidation.

## medication-safety-assessments

CDS owns medication contraindication, dose, allergy/duplicate-therapy and obstetric emergency assessment outputs. Medication/Laboratory provide attributed inputs and AI executes models; prescribing, administration and emergency actions remain qualified human decisions.

Acceptance additions: Retain exact intended population, pregnancy/age/weight/renal/hepatic context, units, evidence/algorithm versions and uncertainty. Reject ambiguous units, stale patient context and inferred normal values. Neither a calculator nor obstetric symptom score authorizes dose, substitution or emergency disposition.

## Source scope

- Original 2008 / diagnostic-clinical-assessment: Cardiovascular Risk Assessment Module — Calculates cardiovascular risk profiles.
- Original 4158 / diagnostic-clinical-assessment: Pediatric Endocrinology AI Pre-Visit Assessment Module — Creates an AI-assisted preliminary endocrine assessment before clinician publication.
- Original 4396 / diagnostic-clinical-assessment: Pediatric Dermatology AI Pre-Visit Assessment Module — Creates structured pre-visit dermatology summaries.
- Original 1141 / clinical-recommendation-profiles: AI Clinical Decision Support Engine — AI assists physicians during clinical decision making.
- Original 1144 / clinical-recommendation-profiles: AI Laboratory Interpretation Engine — Automatically interprets laboratory data.
- Original 1147 / clinical-recommendation-profiles: AI Personalized Dosage Advisor — Suggests dosage adjustments.
- Original 1155 / clinical-recommendation-profiles: AI Emergency Decision Assistant — Supports physicians during emergency situations.
- Original 1158 / clinical-recommendation-profiles: AI Oncology Treatment Advisor — Supports oncology treatment planning.
- Original 1165 / clinical-recommendation-profiles: AI Clinical Risk Scoring Engine — Calculates clinical risks.
- Original 1168 / clinical-recommendation-profiles: AI Preventive Medicine Advisor — Provides preventive healthcare recommendations.
- Original 1178 / clinical-recommendation-profiles: AI Explainable Decision Module — Explains every AI recommendation.
- Original 1179 / clinical-recommendation-profiles: AI Recommendation Validation — Allows physician validation of AI recommendations.
- Original 1182 / clinical-recommendation-profiles: AI ECG Interpretation Engine — Automatically analyzes ECG recordings.
- Original 1187 / clinical-recommendation-profiles: AI Genetics Interpretation Engine — Interprets genetic testing.
- Original 1188 / clinical-recommendation-profiles: AI Oncology Biomarker Interpreter — Analyzes oncology biomarkers.
- Original 1192 / clinical-recommendation-profiles: AI Personalized Screening Advisor — Recommends personalized screening programs.
- Original 1206 / clinical-recommendation-profiles: AI Emergency Triage Assistant — Assists emergency triage.
- Original 1229 / clinical-recommendation-profiles: AI ICU Transfer Recommendation — Recommends ICU transfer.
- Original 1253 / clinical-recommendation-profiles: AI Nutrition Recommendation Engine — Generates personalized nutritional recommendations.
- Original 1294 / clinical-recommendation-profiles: AI Clinical Recommendation Ranking — Ranks recommendations.
- Original 1313 / clinical-recommendation-profiles: AI Medication Substitution Advisor — Suggests therapeutic alternatives.
- Original 1379 / clinical-recommendation-profiles: AI Clinical Evidence Scoring — Assigns evidence scores.
- Original 1427 / clinical-recommendation-profiles: AI Vaccination Recommendation Engine — Generates travel vaccination plans.
- Original 1503 / clinical-recommendation-profiles: AI Medical Recommendation Generator — Generates personalized medical recommendations.
- Original 1504 / clinical-recommendation-profiles: AI Recommendation Ranking Engine — Ranks AI recommendations by priority.
- Original 1505 / clinical-recommendation-profiles: AI Medical Recommendation Validator — Validates AI recommendations before publication.
- Original 1507 / clinical-recommendation-profiles: AI Dynamic Risk Scoring Engine — Calculates dynamic patient risk score.
- Original 1534 / clinical-recommendation-profiles: AI Medical Intervention Recommendation Engine — Recommends medical interventions.
- Original 1545 / clinical-recommendation-profiles: AI Clinical Recommendation Harmonizer — Resolves differences between clinical recommendations.
- Original 1565 / clinical-recommendation-profiles: AI Ultrasound Interpretation Engine — Interprets ultrasound examinations.
- Original 1599 / clinical-recommendation-profiles: AI Laboratory Interpretation Generator — Generates structured laboratory interpretations.
- Original 1605 / clinical-recommendation-profiles: AI Genetic Variant Interpreter — Interprets genetic variants.
- Original 1654 / clinical-recommendation-profiles: AI Probiotic Recommendation Engine — Generates personalized probiotic recommendations.
- Original 1721 / clinical-recommendation-profiles: AI Clinical Decision Core Engine — Central AI engine for clinical decision intelligence.
- Original 1725 / clinical-recommendation-profiles: AI Therapeutic Recommendation Engine — Generates therapy recommendations.
- Original 1729 / clinical-recommendation-profiles: AI Laboratory Decision Engine — Suggests laboratory investigations.
- Original 1730 / clinical-recommendation-profiles: AI Imaging Decision Engine — Recommends imaging studies.
- Original 1731 / clinical-recommendation-profiles: AI Referral Recommendation Engine — Determines specialist referral necessity.
- Original 1736 / clinical-recommendation-profiles: AI Personalized Decision Engine — Adapts recommendations to individual patients.
- Original 1739 / clinical-recommendation-profiles: AI Physician Decision Assistant — Provides real-time physician support.
- Original 1740 / clinical-recommendation-profiles: AI Clinical Decision Intelligence Platform — Unified clinical decision platform.
- Original 1759 / clinical-recommendation-profiles: AI Workflow Decision Assistant — Supports workflow-related clinical decisions.
- Original 1783 / clinical-recommendation-profiles: AI Screening Recommendation Engine — Generates screening schedules.
- Original 1784 / clinical-recommendation-profiles: AI Vaccination Recommendation Engine — Builds personalized vaccination schedules.
- Original 1846 / clinical-recommendation-profiles: AI Genomic Therapy Advisor — Generates genomic therapy recommendations.
- Original 1852 / clinical-recommendation-profiles: AI Precision Laboratory Interpretation — Interprets laboratory data using precision medicine.
- Original 1996 / clinical-recommendation-profiles: AI Future Decision Intelligence — Supports strategic healthcare decisions.
- Original 405 / medication-safety-assessments: Medication Contraindications — Displays contraindications for prescribed medicines.
- Original 412 / medication-safety-assessments: Medication Dose Calculator — Assists in calculating prescribed doses.
- Original 430 / medication-safety-assessments: Medication Allergy Cross Check — Automatically compares prescribed medicines with registered allergies.
- Original 431 / medication-safety-assessments: Medication Duplicate Therapy Detection — Detects duplicate medications with similar active substances.
- Original 758 / medication-safety-assessments: Obstetric Emergency AI — AI evaluates obstetric emergency symptoms.

## Requirements and source metadata

<a id="M17-CAP-CDS-e71f9c7708f1a9df"></a>
- **M17-CAP-CDS-e71f9c7708f1a9df**: Calculates cardiovascular risk profiles.
  Applies to original IDs: 2008.

<a id="M17-CAP-CDS-4fbeeb87456accf5"></a>
- **M17-CAP-CDS-4fbeeb87456accf5**: Supports
  Applies to original IDs: 2008, 1141, 1144, 1165, 1168, 1179, 1182, 1187, 1188, 1206, 1253, 1313, 1427, 1503, 1504, 1507, 1534, 1545, 1565, 1599, 1605, 1654, 1721, 1725, 1729, 1730, 1731, 1736, 1739, 1759, 1783, 1784, 1846, 1852, 1996, 405, 412, 430, 431, 758.

<a id="M17-CAP-CDS-581e585de2dd59d3"></a>
- **M17-CAP-CDS-581e585de2dd59d3**: SCORE2
  Applies to original IDs: 2008.

<a id="M17-CAP-CDS-f55cd6c89b169c04"></a>
- **M17-CAP-CDS-f55cd6c89b169c04**: ASCVD
  Applies to original IDs: 2008.

<a id="M17-CAP-CDS-44f54f1154fbb769"></a>
- **M17-CAP-CDS-44f54f1154fbb769**: Individual Risk Factors
  Applies to original IDs: 2008.

<a id="M17-CAP-CDS-5ba74d8fcc7b20cc"></a>
- **M17-CAP-CDS-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 2008, 4158, 4396, 1141, 1144, 1147, 1155, 1158, 1165, 1168, 1178, 1179, 1182, 1187, 1188, 1192, 1206, 1229, 1253, 1294, 1313, 1379, 1427, 1503, 1504, 1505, 1507, 1534, 1545, 1565, 1599, 1605, 1654, 1721, 1725, 1729, 1730, 1731, 1736, 1739, 1740, 1759, 1783, 1784, 1846, 1852, 1996, 405, 412, 430, 431, 758.

<a id="M17-CAP-CDS-d5232cbd3a326267"></a>
- **M17-CAP-CDS-d5232cbd3a326267**: Documentation
  Applies to original IDs: 2008, 4158, 4396, 1141, 1144, 1147, 1155, 1158, 1165, 1168, 1178, 1179, 1182, 1187, 1188, 1192, 1206, 1229, 1253, 1294, 1313, 1379, 1427, 1503, 1504, 1505, 1507, 1534, 1545, 1565, 1599, 1605, 1654, 1721, 1725, 1729, 1730, 1731, 1736, 1739, 1740, 1759, 1783, 1784, 1846, 1852, 1996, 405, 412, 430, 431, 758.

<a id="M17-CAP-CDS-6f33acf3afb37064"></a>
- **M17-CAP-CDS-6f33acf3afb37064**: ---
  Applies to original IDs: 2008, 4158, 4396, 1141, 1144, 1147, 1155, 1158, 1165, 1168, 1178, 1179, 1182, 1187, 1188, 1192, 1206, 1229, 1253, 1294, 1313, 1379, 1427, 1503, 1504, 1505, 1507, 1534, 1545, 1565, 1599, 1605, 1654, 1721, 1725, 1729, 1730, 1731, 1736, 1739, 1740, 1759, 1783, 1784, 1846, 1852, 1996, 405, 412, 430, 431, 758.

<a id="M17-CAP-CDS-149bb2e7c77da0ea"></a>
- **M17-CAP-CDS-149bb2e7c77da0ea**: Creates an AI-assisted preliminary endocrine assessment before clinician publication.
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-948c8c9d3cfb631b"></a>
- **M17-CAP-CDS-948c8c9d3cfb631b**: With appropriate consent, AI may structure
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-8938c9fdc8e15ea6"></a>
- **M17-CAP-CDS-8938c9fdc8e15ea6**: Chief Complaint
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-2ec59980aad4f42f"></a>
- **M17-CAP-CDS-2ec59980aad4f42f**: History of Present Illness
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-e76526e6ec4f064b"></a>
- **M17-CAP-CDS-e76526e6ec4f064b**: Growth History
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-2cbd1f2aea929b9b"></a>
- **M17-CAP-CDS-2cbd1f2aea929b9b**: Medication History
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-0bea5346ef341f41"></a>
- **M17-CAP-CDS-0bea5346ef341f41**: Family History
  Applies to original IDs: 4158, 4396, 1192.

<a id="M17-CAP-CDS-dd17a24cf636f6c9"></a>
- **M17-CAP-CDS-dd17a24cf636f6c9**: Relevant Symptoms
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-0051f0f3665d142b"></a>
- **M17-CAP-CDS-0051f0f3665d142b**: Device Data
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-ab3febd198e62322"></a>
- **M17-CAP-CDS-ab3febd198e62322**: Laboratory Trends
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-ecaf4dd6c4638f3a"></a>
- **M17-CAP-CDS-ecaf4dd6c4638f3a**: Preliminary Clinical Summary
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-bb4bac101f3807da"></a>
- **M17-CAP-CDS-bb4bac101f3807da**: The physician can
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-69f32cafadf0f19a"></a>
- **M17-CAP-CDS-69f32cafadf0f19a**: Review
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-3542f6a4ee6f1af3"></a>
- **M17-CAP-CDS-3542f6a4ee6f1af3**: Edit
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-5451bf3cc1272dca"></a>
- **M17-CAP-CDS-5451bf3cc1272dca**: Correct
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-28ad873d9abfe5e5"></a>
- **M17-CAP-CDS-28ad873d9abfe5e5**: Reject
  Applies to original IDs: 4158, 1179.

<a id="M17-CAP-CDS-0a1e45aa70858a38"></a>
- **M17-CAP-CDS-0a1e45aa70858a38**: Add Findings
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-df67f3d321605c07"></a>
- **M17-CAP-CDS-df67f3d321605c07**: Approve
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-eb7717cd32a03f62"></a>
- **M17-CAP-CDS-eb7717cd32a03f62**: Sign
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-d4695f4b08e4fa84"></a>
- **M17-CAP-CDS-d4695f4b08e4fa84**: Publish
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-4005351c3571a28c"></a>
- **M17-CAP-CDS-4005351c3571a28c**: AI-generated content remains clearly marked as draft until clinician approval.
  Applies to original IDs: 4158.

<a id="M17-CAP-CDS-ee0de0deeab1bcb0"></a>
- **M17-CAP-CDS-ee0de0deeab1bcb0**: Creates structured pre-visit dermatology summaries.
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-3c61a0f665858068"></a>
- **M17-CAP-CDS-3c61a0f665858068**: AI may organize
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-a9ed92e21b229587"></a>
- **M17-CAP-CDS-a9ed92e21b229587**: Primary Complaint
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-846aed89682a432d"></a>
- **M17-CAP-CDS-846aed89682a432d**: Onset
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-73161d79117ec8cb"></a>
- **M17-CAP-CDS-73161d79117ec8cb**: Evolution
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-8ea50d2707dd1600"></a>
- **M17-CAP-CDS-8ea50d2707dd1600**: Symptoms
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-054414de8dc457de"></a>
- **M17-CAP-CDS-054414de8dc457de**: Exposures
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-5ece9f76c54dd0a2"></a>
- **M17-CAP-CDS-5ece9f76c54dd0a2**: Allergies
  Applies to original IDs: 4396, 1253.

<a id="M17-CAP-CDS-cc10c6c35eee7d95"></a>
- **M17-CAP-CDS-cc10c6c35eee7d95**: Previous Treatments
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-19bc933b2d102e5e"></a>
- **M17-CAP-CDS-19bc933b2d102e5e**: Uploaded Images
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-bfd485dd1931bc84"></a>
- **M17-CAP-CDS-bfd485dd1931bc84**: Output remains draft until clinician review.
  Applies to original IDs: 4396.

<a id="M17-CAP-CDS-34b64d820789b93c"></a>
- **M17-CAP-CDS-34b64d820789b93c**: AI assists physicians during clinical decision making.
  Applies to original IDs: 1141.

<a id="M17-CAP-CDS-b9b9efdf5eab53fa"></a>
- **M17-CAP-CDS-b9b9efdf5eab53fa**: Differential Diagnosis
  Applies to original IDs: 1141.

<a id="M17-CAP-CDS-f468be0316491865"></a>
- **M17-CAP-CDS-f468be0316491865**: Risk Assessment
  Applies to original IDs: 1141.

<a id="M17-CAP-CDS-3d1887b037cd61a3"></a>
- **M17-CAP-CDS-3d1887b037cd61a3**: Guideline Recommendations
  Applies to original IDs: 1141.

<a id="M17-CAP-CDS-b8ff31eb987269c1"></a>
- **M17-CAP-CDS-b8ff31eb987269c1**: Confidence Score
  Applies to original IDs: 1141.

<a id="M17-CAP-CDS-e27e1d14886b8e88"></a>
- **M17-CAP-CDS-e27e1d14886b8e88**: Automatically interprets laboratory data.
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-9bbf34aa349132ec"></a>
- **M17-CAP-CDS-9bbf34aa349132ec**: CBC
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-1fd2ef2a1adb6ffc"></a>
- **M17-CAP-CDS-1fd2ef2a1adb6ffc**: Biochemistry
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-7b40033c1c8e1625"></a>
- **M17-CAP-CDS-7b40033c1c8e1625**: Hormones
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-27cde7069fe13381"></a>
- **M17-CAP-CDS-27cde7069fe13381**: Immunology
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-af9579f296eef00a"></a>
- **M17-CAP-CDS-af9579f296eef00a**: Tumor Markers
  Applies to original IDs: 1144.

<a id="M17-CAP-CDS-d3acad6e908056de"></a>
- **M17-CAP-CDS-d3acad6e908056de**: Suggests dosage adjustments.
  Applies to original IDs: 1147.

<a id="M17-CAP-CDS-32a79aa90b436d09"></a>
- **M17-CAP-CDS-32a79aa90b436d09**: Considers
  Applies to original IDs: 1147, 1158, 1192.

<a id="M17-CAP-CDS-d105f29dd1ec7126"></a>
- **M17-CAP-CDS-d105f29dd1ec7126**: Age
  Applies to original IDs: 1147, 1192.

<a id="M17-CAP-CDS-cdcecae88521194c"></a>
- **M17-CAP-CDS-cdcecae88521194c**: Weight
  Applies to original IDs: 1147.

<a id="M17-CAP-CDS-f906bcad6358135b"></a>
- **M17-CAP-CDS-f906bcad6358135b**: Kidney Function
  Applies to original IDs: 1147.

<a id="M17-CAP-CDS-941d836af291d4e2"></a>
- **M17-CAP-CDS-941d836af291d4e2**: Liver Function
  Applies to original IDs: 1147.

<a id="M17-CAP-CDS-4f33c48fb630c046"></a>
- **M17-CAP-CDS-4f33c48fb630c046**: Supports physicians during emergency situations.
  Applies to original IDs: 1155.

<a id="M17-CAP-CDS-4db49935c1bab8b0"></a>
- **M17-CAP-CDS-4db49935c1bab8b0**: Provides
  Applies to original IDs: 1155.

<a id="M17-CAP-CDS-f8149ad7dd2d5a94"></a>
- **M17-CAP-CDS-f8149ad7dd2d5a94**: Protocols
  Applies to original IDs: 1155.

<a id="M17-CAP-CDS-09023c9373041930"></a>
- **M17-CAP-CDS-09023c9373041930**: Critical Alerts
  Applies to original IDs: 1155.

<a id="M17-CAP-CDS-9ae0c11d4680f044"></a>
- **M17-CAP-CDS-9ae0c11d4680f044**: Treatment Sequence
  Applies to original IDs: 1155.

<a id="M17-CAP-CDS-75c1b9b3cf4c3922"></a>
- **M17-CAP-CDS-75c1b9b3cf4c3922**: Supports oncology treatment planning.
  Applies to original IDs: 1158.

<a id="M17-CAP-CDS-07e0f3a8e184960e"></a>
- **M17-CAP-CDS-07e0f3a8e184960e**: Tumor Stage
  Applies to original IDs: 1158.

<a id="M17-CAP-CDS-a549916693516568"></a>
- **M17-CAP-CDS-a549916693516568**: Biomarkers
  Applies to original IDs: 1158, 1852.

<a id="M17-CAP-CDS-0416661699ff7eae"></a>
- **M17-CAP-CDS-0416661699ff7eae**: Guidelines
  Applies to original IDs: 1158, 1379.

<a id="M17-CAP-CDS-49dbeb9c2fb5c5ad"></a>
- **M17-CAP-CDS-49dbeb9c2fb5c5ad**: Previous Therapy
  Applies to original IDs: 1158.

<a id="M17-CAP-CDS-e8e614239f3480c3"></a>
- **M17-CAP-CDS-e8e614239f3480c3**: Calculates clinical risks.
  Applies to original IDs: 1165.

<a id="M17-CAP-CDS-9b38c337e64b41f9"></a>
- **M17-CAP-CDS-9b38c337e64b41f9**: Mortality Risk
  Applies to original IDs: 1165.

<a id="M17-CAP-CDS-2a7aaaff1aed67d4"></a>
- **M17-CAP-CDS-2a7aaaff1aed67d4**: Complication Risk
  Applies to original IDs: 1165.

<a id="M17-CAP-CDS-4c08c7f13138a85a"></a>
- **M17-CAP-CDS-4c08c7f13138a85a**: ICU Risk
  Applies to original IDs: 1165.

<a id="M17-CAP-CDS-a7f037858004d6eb"></a>
- **M17-CAP-CDS-a7f037858004d6eb**: Readmission Risk
  Applies to original IDs: 1165.

<a id="M17-CAP-CDS-9716a23cea201546"></a>
- **M17-CAP-CDS-9716a23cea201546**: Provides preventive healthcare recommendations.
  Applies to original IDs: 1168.

<a id="M17-CAP-CDS-924a5f96ac253c06"></a>
- **M17-CAP-CDS-924a5f96ac253c06**: Screening
  Applies to original IDs: 1168.

<a id="M17-CAP-CDS-c725477367334eb0"></a>
- **M17-CAP-CDS-c725477367334eb0**: Vaccination
  Applies to original IDs: 1168.

<a id="M17-CAP-CDS-ec6c9eb4857a2ac3"></a>
- **M17-CAP-CDS-ec6c9eb4857a2ac3**: Lifestyle
  Applies to original IDs: 1168, 1736.

<a id="M17-CAP-CDS-b08618ffe006af0f"></a>
- **M17-CAP-CDS-b08618ffe006af0f**: Risk Prevention
  Applies to original IDs: 1168.

<a id="M17-CAP-CDS-4a52c57be91a276f"></a>
- **M17-CAP-CDS-4a52c57be91a276f**: Explains every AI recommendation.
  Applies to original IDs: 1178.

<a id="M17-CAP-CDS-f3d993f49bc6debb"></a>
- **M17-CAP-CDS-f3d993f49bc6debb**: Displays
  Applies to original IDs: 1178.

<a id="M17-CAP-CDS-915617bb994ad8c8"></a>
- **M17-CAP-CDS-915617bb994ad8c8**: Evidence
  Applies to original IDs: 1178, 1294.

<a id="M17-CAP-CDS-f958f4de7080ff89"></a>
- **M17-CAP-CDS-f958f4de7080ff89**: Clinical Sources
  Applies to original IDs: 1178.

<a id="M17-CAP-CDS-bc564a8061dca0dd"></a>
- **M17-CAP-CDS-bc564a8061dca0dd**: Confidence
  Applies to original IDs: 1178.

<a id="M17-CAP-CDS-32fd2aace5325c28"></a>
- **M17-CAP-CDS-32fd2aace5325c28**: Decision Path
  Applies to original IDs: 1178.

<a id="M17-CAP-CDS-1fd73d6ef643827a"></a>
- **M17-CAP-CDS-1fd73d6ef643827a**: Allows physician validation of AI recommendations.
  Applies to original IDs: 1179.

<a id="M17-CAP-CDS-a393ec73b04ca0f2"></a>
- **M17-CAP-CDS-a393ec73b04ca0f2**: Accept
  Applies to original IDs: 1179.

<a id="M17-CAP-CDS-4492aefd6db5c213"></a>
- **M17-CAP-CDS-4492aefd6db5c213**: Modify
  Applies to original IDs: 1179.

<a id="M17-CAP-CDS-40d51e802552faa5"></a>
- **M17-CAP-CDS-40d51e802552faa5**: Feedback Learning
  Applies to original IDs: 1179.

<a id="M17-CAP-CDS-358c9eaeb4f864df"></a>
- **M17-CAP-CDS-358c9eaeb4f864df**: Automatically analyzes ECG recordings.
  Applies to original IDs: 1182.

<a id="M17-CAP-CDS-ae85cc7e3dbc27ac"></a>
- **M17-CAP-CDS-ae85cc7e3dbc27ac**: Arrhythmias
  Applies to original IDs: 1182.

<a id="M17-CAP-CDS-646bdd1e7c9ef211"></a>
- **M17-CAP-CDS-646bdd1e7c9ef211**: STEMI Detection
  Applies to original IDs: 1182.

<a id="M17-CAP-CDS-5a4c441086643b37"></a>
- **M17-CAP-CDS-5a4c441086643b37**: QT Analysis
  Applies to original IDs: 1182.

<a id="M17-CAP-CDS-3993c45fad2aafad"></a>
- **M17-CAP-CDS-3993c45fad2aafad**: Heart Rate Variability
  Applies to original IDs: 1182.

<a id="M17-CAP-CDS-36bce548e6d1dd2f"></a>
- **M17-CAP-CDS-36bce548e6d1dd2f**: Interprets genetic testing.
  Applies to original IDs: 1187.

<a id="M17-CAP-CDS-e058040ad8c3ecb0"></a>
- **M17-CAP-CDS-e058040ad8c3ecb0**: Pathogenic Variants
  Applies to original IDs: 1187.

<a id="M17-CAP-CDS-a2a8a21b91097b87"></a>
- **M17-CAP-CDS-a2a8a21b91097b87**: Carrier Status
  Applies to original IDs: 1187.

<a id="M17-CAP-CDS-cb3f44db33fde2bb"></a>
- **M17-CAP-CDS-cb3f44db33fde2bb**: Risk Prediction
  Applies to original IDs: 1187.

<a id="M17-CAP-CDS-40ce514d86a34609"></a>
- **M17-CAP-CDS-40ce514d86a34609**: Clinical Recommendations
  Applies to original IDs: 1187, 1503, 1721.

<a id="M17-CAP-CDS-9744fe43105c9737"></a>
- **M17-CAP-CDS-9744fe43105c9737**: Analyzes oncology biomarkers.
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-c17c3471f7d1ac34"></a>
- **M17-CAP-CDS-c17c3471f7d1ac34**: HER2
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-625b55ecd4a6006a"></a>
- **M17-CAP-CDS-625b55ecd4a6006a**: EGFR
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-2aeb6460c27a9933"></a>
- **M17-CAP-CDS-2aeb6460c27a9933**: KRAS
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-9a15fbb0a9cdb020"></a>
- **M17-CAP-CDS-9a15fbb0a9cdb020**: PD-L1
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-623ac65ea261f5cb"></a>
- **M17-CAP-CDS-623ac65ea261f5cb**: MSI
  Applies to original IDs: 1188.

<a id="M17-CAP-CDS-ebef79545a243540"></a>
- **M17-CAP-CDS-ebef79545a243540**: Recommends personalized screening programs.
  Applies to original IDs: 1192.

<a id="M17-CAP-CDS-035d6ee69ba1a4f0"></a>
- **M17-CAP-CDS-035d6ee69ba1a4f0**: Sex
  Applies to original IDs: 1192.

<a id="M17-CAP-CDS-5e1bee5c4692460f"></a>
- **M17-CAP-CDS-5e1bee5c4692460f**: Risk Factors
  Applies to original IDs: 1192.

<a id="M17-CAP-CDS-a7629a85fbffa0d5"></a>
- **M17-CAP-CDS-a7629a85fbffa0d5**: Assists emergency triage.
  Applies to original IDs: 1206.

<a id="M17-CAP-CDS-b890766b57a1f164"></a>
- **M17-CAP-CDS-b890766b57a1f164**: Priority Level
  Applies to original IDs: 1206.

<a id="M17-CAP-CDS-acb1db60adc82aea"></a>
- **M17-CAP-CDS-acb1db60adc82aea**: Severity Score
  Applies to original IDs: 1206.

<a id="M17-CAP-CDS-726078e860cb5f8b"></a>
- **M17-CAP-CDS-726078e860cb5f8b**: Resource Allocation
  Applies to original IDs: 1206, 1759.

<a id="M17-CAP-CDS-d26662d7133f219c"></a>
- **M17-CAP-CDS-d26662d7133f219c**: Recommends ICU transfer.
  Applies to original IDs: 1229.

<a id="M17-CAP-CDS-0535ebb6ad4f5674"></a>
- **M17-CAP-CDS-0535ebb6ad4f5674**: Analyzes
  Applies to original IDs: 1229.

<a id="M17-CAP-CDS-a158f45f0f200d67"></a>
- **M17-CAP-CDS-a158f45f0f200d67**: Vital Signs
  Applies to original IDs: 1229.

<a id="M17-CAP-CDS-6a3b5a0ae4701f12"></a>
- **M17-CAP-CDS-6a3b5a0ae4701f12**: Clinical Deterioration
  Applies to original IDs: 1229.

<a id="M17-CAP-CDS-8add4da42c716271"></a>
- **M17-CAP-CDS-8add4da42c716271**: Organ Failure
  Applies to original IDs: 1229.

<a id="M17-CAP-CDS-d9d27bdab2815791"></a>
- **M17-CAP-CDS-d9d27bdab2815791**: Generates personalized nutritional recommendations.
  Applies to original IDs: 1253.

<a id="M17-CAP-CDS-2c3b1ad7d6afbe5b"></a>
- **M17-CAP-CDS-2c3b1ad7d6afbe5b**: Diseases
  Applies to original IDs: 1253, 405.

<a id="M17-CAP-CDS-03cc8a2b432e82eb"></a>
- **M17-CAP-CDS-03cc8a2b432e82eb**: BMI
  Applies to original IDs: 1253.

<a id="M17-CAP-CDS-71f790fdf94f9c10"></a>
- **M17-CAP-CDS-71f790fdf94f9c10**: Laboratory Results
  Applies to original IDs: 1253.

<a id="M17-CAP-CDS-d5068203fd800a0e"></a>
- **M17-CAP-CDS-d5068203fd800a0e**: # AI Clinical Recommendation Ranking
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-352dc191883d1fc5"></a>
- **M17-CAP-CDS-352dc191883d1fc5**: Ranks recommendations.
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-d68651bd3c6d472b"></a>
- **M17-CAP-CDS-d68651bd3c6d472b**: Criteria
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-337ac426909d5755"></a>
- **M17-CAP-CDS-337ac426909d5755**: Safety
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-d125699682b71377"></a>
- **M17-CAP-CDS-d125699682b71377**: Cost
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-ce9a5ab4819ffa62"></a>
- **M17-CAP-CDS-ce9a5ab4819ffa62**: Clinical Benefit
  Applies to original IDs: 1294.

<a id="M17-CAP-CDS-362822c5b0040d10"></a>
- **M17-CAP-CDS-362822c5b0040d10**: Suggests therapeutic alternatives.
  Applies to original IDs: 1313.

<a id="M17-CAP-CDS-f7d53c81a0ae7939"></a>
- **M17-CAP-CDS-f7d53c81a0ae7939**: Generic Drugs
  Applies to original IDs: 1313.

<a id="M17-CAP-CDS-a0828eab4075b916"></a>
- **M17-CAP-CDS-a0828eab4075b916**: Equivalent Therapy
  Applies to original IDs: 1313.

<a id="M17-CAP-CDS-a2cce91a3c1582bb"></a>
- **M17-CAP-CDS-a2cce91a3c1582bb**: International Availability
  Applies to original IDs: 1313.

<a id="M17-CAP-CDS-be0ae39d19b387b9"></a>
- **M17-CAP-CDS-be0ae39d19b387b9**: Assigns evidence scores.
  Applies to original IDs: 1379.

<a id="M17-CAP-CDS-cc2299c20283a5c6"></a>
- **M17-CAP-CDS-cc2299c20283a5c6**: Based on
  Applies to original IDs: 1379.

<a id="M17-CAP-CDS-ca519247eff2e16a"></a>
- **M17-CAP-CDS-ca519247eff2e16a**: Clinical Trials
  Applies to original IDs: 1379.

<a id="M17-CAP-CDS-8c17dd5fc5c3e99e"></a>
- **M17-CAP-CDS-8c17dd5fc5c3e99e**: Meta-analysis
  Applies to original IDs: 1379.

<a id="M17-CAP-CDS-eb62cd8b61580607"></a>
- **M17-CAP-CDS-eb62cd8b61580607**: Expert Consensus
  Applies to original IDs: 1379.

<a id="M17-CAP-CDS-225a693e93f5d524"></a>
- **M17-CAP-CDS-225a693e93f5d524**: Generates travel vaccination plans.
  Applies to original IDs: 1427.

<a id="M17-CAP-CDS-777911ab00e14a6a"></a>
- **M17-CAP-CDS-777911ab00e14a6a**: Mandatory Vaccines
  Applies to original IDs: 1427.

<a id="M17-CAP-CDS-3a35ab1ba596bf43"></a>
- **M17-CAP-CDS-3a35ab1ba596bf43**: Recommended Vaccines
  Applies to original IDs: 1427.

<a id="M17-CAP-CDS-088ee70fbb327c18"></a>
- **M17-CAP-CDS-088ee70fbb327c18**: Booster Notifications
  Applies to original IDs: 1427.

<a id="M17-CAP-CDS-afb4a0a3fe156672"></a>
- **M17-CAP-CDS-afb4a0a3fe156672**: Generates personalized medical recommendations.
  Applies to original IDs: 1503.

<a id="M17-CAP-CDS-e3d6108688f3bd86"></a>
- **M17-CAP-CDS-e3d6108688f3bd86**: Preventive Recommendations
  Applies to original IDs: 1503.

<a id="M17-CAP-CDS-0668d3e141e0e5ef"></a>
- **M17-CAP-CDS-0668d3e141e0e5ef**: Lifestyle Recommendations
  Applies to original IDs: 1503.

<a id="M17-CAP-CDS-6b8ef415977baf11"></a>
- **M17-CAP-CDS-6b8ef415977baf11**: Ranks AI recommendations by priority.
  Applies to original IDs: 1504.

<a id="M17-CAP-CDS-29179fd53bb11c0a"></a>
- **M17-CAP-CDS-29179fd53bb11c0a**: Risk Level
  Applies to original IDs: 1504.

<a id="M17-CAP-CDS-dbd8de4521806efa"></a>
- **M17-CAP-CDS-dbd8de4521806efa**: Clinical Importance
  Applies to original IDs: 1504.

<a id="M17-CAP-CDS-908fd259af8386fe"></a>
- **M17-CAP-CDS-908fd259af8386fe**: Evidence Strength
  Applies to original IDs: 1504.

<a id="M17-CAP-CDS-f2683f08fa644a73"></a>
- **M17-CAP-CDS-f2683f08fa644a73**: Validates AI recommendations before publication.
  Applies to original IDs: 1505.

<a id="M17-CAP-CDS-f62ebcef0792a834"></a>
- **M17-CAP-CDS-f62ebcef0792a834**: Checks
  Applies to original IDs: 1505.

<a id="M17-CAP-CDS-282e8e09524fe20e"></a>
- **M17-CAP-CDS-282e8e09524fe20e**: Medical Guidelines
  Applies to original IDs: 1505.

<a id="M17-CAP-CDS-04477fd2f48b0e6e"></a>
- **M17-CAP-CDS-04477fd2f48b0e6e**: Drug Safety
  Applies to original IDs: 1505.

<a id="M17-CAP-CDS-7d6960c08299b20a"></a>
- **M17-CAP-CDS-7d6960c08299b20a**: Clinical Consistency
  Applies to original IDs: 1505.

<a id="M17-CAP-CDS-ee9a99a088b28a83"></a>
- **M17-CAP-CDS-ee9a99a088b28a83**: Calculates dynamic patient risk score.
  Applies to original IDs: 1507.

<a id="M17-CAP-CDS-658fde7c9b826414"></a>
- **M17-CAP-CDS-658fde7c9b826414**: Continuous Updates
  Applies to original IDs: 1507.

<a id="M17-CAP-CDS-6e93053f7b4d8b9a"></a>
- **M17-CAP-CDS-6e93053f7b4d8b9a**: Event-triggered Recalculation
  Applies to original IDs: 1507.

<a id="M17-CAP-CDS-b6d92a9fec71004a"></a>
- **M17-CAP-CDS-b6d92a9fec71004a**: Predictive Risk Assessment
  Applies to original IDs: 1507.

<a id="M17-CAP-CDS-490d6328581e32bd"></a>
- **M17-CAP-CDS-490d6328581e32bd**: Recommends medical interventions.
  Applies to original IDs: 1534.

<a id="M17-CAP-CDS-6ee2e086b727af49"></a>
- **M17-CAP-CDS-6ee2e086b727af49**: Medication Adjustment
  Applies to original IDs: 1534.

<a id="M17-CAP-CDS-ba94c800db592316"></a>
- **M17-CAP-CDS-ba94c800db592316**: Hospital Referral
  Applies to original IDs: 1534.

<a id="M17-CAP-CDS-4195fc8e31b7b0e1"></a>
- **M17-CAP-CDS-4195fc8e31b7b0e1**: Specialist Consultation
  Applies to original IDs: 1534.

<a id="M17-CAP-CDS-97a03a1aad19867e"></a>
- **M17-CAP-CDS-97a03a1aad19867e**: Resolves differences between clinical recommendations.
  Applies to original IDs: 1545.

<a id="M17-CAP-CDS-3b4f866df61b9ed7"></a>
- **M17-CAP-CDS-3b4f866df61b9ed7**: Guideline Comparison
  Applies to original IDs: 1545.

<a id="M17-CAP-CDS-e5455c6fdc8fa6c6"></a>
- **M17-CAP-CDS-e5455c6fdc8fa6c6**: Consensus Building
  Applies to original IDs: 1545.

<a id="M17-CAP-CDS-10dab343de1961a3"></a>
- **M17-CAP-CDS-10dab343de1961a3**: Recommendation Selection
  Applies to original IDs: 1545.

<a id="M17-CAP-CDS-4574d4cb3198a67d"></a>
- **M17-CAP-CDS-4574d4cb3198a67d**: Interprets ultrasound examinations.
  Applies to original IDs: 1565.

<a id="M17-CAP-CDS-7d5e060336009224"></a>
- **M17-CAP-CDS-7d5e060336009224**: Abdomen
  Applies to original IDs: 1565.

<a id="M17-CAP-CDS-7c49afabe60c90d6"></a>
- **M17-CAP-CDS-7c49afabe60c90d6**: Cardiology
  Applies to original IDs: 1565, 1783.

<a id="M17-CAP-CDS-382561e335e4526e"></a>
- **M17-CAP-CDS-382561e335e4526e**: Obstetrics
  Applies to original IDs: 1565.

<a id="M17-CAP-CDS-834917cb2d439042"></a>
- **M17-CAP-CDS-834917cb2d439042**: Emergency FAST
  Applies to original IDs: 1565.

<a id="M17-CAP-CDS-745bb0aded1beb85"></a>
- **M17-CAP-CDS-745bb0aded1beb85**: Generates structured laboratory interpretations.
  Applies to original IDs: 1599.

<a id="M17-CAP-CDS-57ab516f3701d78a"></a>
- **M17-CAP-CDS-57ab516f3701d78a**: Physician Version
  Applies to original IDs: 1599.

<a id="M17-CAP-CDS-f2d896ff8ce8aa5f"></a>
- **M17-CAP-CDS-f2d896ff8ce8aa5f**: Patient Version
  Applies to original IDs: 1599.

<a id="M17-CAP-CDS-5e1b64f903c98655"></a>
- **M17-CAP-CDS-5e1b64f903c98655**: Multilingual Output
  Applies to original IDs: 1599.

<a id="M17-CAP-CDS-4c5014b05ea80270"></a>
- **M17-CAP-CDS-4c5014b05ea80270**: Interprets genetic variants.
  Applies to original IDs: 1605.

<a id="M17-CAP-CDS-557e1ce32474ceaf"></a>
- **M17-CAP-CDS-557e1ce32474ceaf**: SNV
  Applies to original IDs: 1605.

<a id="M17-CAP-CDS-d7613070e6d194ac"></a>
- **M17-CAP-CDS-d7613070e6d194ac**: CNV
  Applies to original IDs: 1605.

<a id="M17-CAP-CDS-4193189dfdf58154"></a>
- **M17-CAP-CDS-4193189dfdf58154**: Indels
  Applies to original IDs: 1605.

<a id="M17-CAP-CDS-7ec7b591c5f9ef1b"></a>
- **M17-CAP-CDS-7ec7b591c5f9ef1b**: Structural Variants
  Applies to original IDs: 1605.

<a id="M17-CAP-CDS-c23b3cf7a9b8b5e6"></a>
- **M17-CAP-CDS-c23b3cf7a9b8b5e6**: Generates personalized probiotic recommendations.
  Applies to original IDs: 1654.

<a id="M17-CAP-CDS-4221d628f343dc04"></a>
- **M17-CAP-CDS-4221d628f343dc04**: Gut Balance
  Applies to original IDs: 1654.

<a id="M17-CAP-CDS-2ead501f1441e7f1"></a>
- **M17-CAP-CDS-2ead501f1441e7f1**: Recovery
  Applies to original IDs: 1654.

<a id="M17-CAP-CDS-9d0d4a1dfad7755b"></a>
- **M17-CAP-CDS-9d0d4a1dfad7755b**: Prevention
  Applies to original IDs: 1654.

<a id="M17-CAP-CDS-b6699c9c6b87e4de"></a>
- **M17-CAP-CDS-b6699c9c6b87e4de**: Central AI engine for clinical decision intelligence.
  Applies to original IDs: 1721.

<a id="M17-CAP-CDS-5809f7fd3a2e43e4"></a>
- **M17-CAP-CDS-5809f7fd3a2e43e4**: Diagnostic Decisions
  Applies to original IDs: 1721.

<a id="M17-CAP-CDS-05ea02eb2016d88c"></a>
- **M17-CAP-CDS-05ea02eb2016d88c**: Therapeutic Decisions
  Applies to original IDs: 1721.

<a id="M17-CAP-CDS-82dd11ee6f7cf7f4"></a>
- **M17-CAP-CDS-82dd11ee6f7cf7f4**: Generates therapy recommendations.
  Applies to original IDs: 1725.

<a id="M17-CAP-CDS-3cfa39200ce0ea10"></a>
- **M17-CAP-CDS-3cfa39200ce0ea10**: Medication
  Applies to original IDs: 1725.

<a id="M17-CAP-CDS-bc506fdefc6e7e7b"></a>
- **M17-CAP-CDS-bc506fdefc6e7e7b**: Surgery
  Applies to original IDs: 1725.

<a id="M17-CAP-CDS-e9426dd272d9aa70"></a>
- **M17-CAP-CDS-e9426dd272d9aa70**: Rehabilitation
  Applies to original IDs: 1725.

<a id="M17-CAP-CDS-8460e9e36ae2e771"></a>
- **M17-CAP-CDS-8460e9e36ae2e771**: Suggests laboratory investigations.
  Applies to original IDs: 1729.

<a id="M17-CAP-CDS-13e24b4a0620fa7c"></a>
- **M17-CAP-CDS-13e24b4a0620fa7c**: Additional Tests
  Applies to original IDs: 1729.

<a id="M17-CAP-CDS-f5aeff23cb9d4fbe"></a>
- **M17-CAP-CDS-f5aeff23cb9d4fbe**: Monitoring
  Applies to original IDs: 1729.

<a id="M17-CAP-CDS-60cc18f04208d9ee"></a>
- **M17-CAP-CDS-60cc18f04208d9ee**: Confirmation
  Applies to original IDs: 1729.

<a id="M17-CAP-CDS-bf644d57fc852a3e"></a>
- **M17-CAP-CDS-bf644d57fc852a3e**: Recommends imaging studies.
  Applies to original IDs: 1730.

<a id="M17-CAP-CDS-2663978a32c6d34f"></a>
- **M17-CAP-CDS-2663978a32c6d34f**: MRI
  Applies to original IDs: 1730.

<a id="M17-CAP-CDS-7bc7f92cb128242c"></a>
- **M17-CAP-CDS-7bc7f92cb128242c**: CT
  Applies to original IDs: 1730.

<a id="M17-CAP-CDS-5032f26f1a690cb2"></a>
- **M17-CAP-CDS-5032f26f1a690cb2**: Ultrasound
  Applies to original IDs: 1730.

<a id="M17-CAP-CDS-b643882bdf3bd937"></a>
- **M17-CAP-CDS-b643882bdf3bd937**: X-Ray
  Applies to original IDs: 1730.

<a id="M17-CAP-CDS-856d87b80123274b"></a>
- **M17-CAP-CDS-856d87b80123274b**: Determines specialist referral necessity.
  Applies to original IDs: 1731.

<a id="M17-CAP-CDS-6cdff2a9fcd4a793"></a>
- **M17-CAP-CDS-6cdff2a9fcd4a793**: Specialist Selection
  Applies to original IDs: 1731.

<a id="M17-CAP-CDS-be6df0e7e4da0e7c"></a>
- **M17-CAP-CDS-be6df0e7e4da0e7c**: Urgency
  Applies to original IDs: 1731.

<a id="M17-CAP-CDS-bc9950326339e7d7"></a>
- **M17-CAP-CDS-bc9950326339e7d7**: Clinical Priority
  Applies to original IDs: 1731.

<a id="M17-CAP-CDS-2800d33473c83f4e"></a>
- **M17-CAP-CDS-2800d33473c83f4e**: Adapts recommendations to individual patients.
  Applies to original IDs: 1736.

<a id="M17-CAP-CDS-aaaf0a34a8eb8286"></a>
- **M17-CAP-CDS-aaaf0a34a8eb8286**: Genetics
  Applies to original IDs: 1736.

<a id="M17-CAP-CDS-c7d8b0fe081c98b1"></a>
- **M17-CAP-CDS-c7d8b0fe081c98b1**: Comorbidities
  Applies to original IDs: 1736.

<a id="M17-CAP-CDS-603b818f7805fd95"></a>
- **M17-CAP-CDS-603b818f7805fd95**: Provides real-time physician support.
  Applies to original IDs: 1739.

<a id="M17-CAP-CDS-66cb8cd6201376f6"></a>
- **M17-CAP-CDS-66cb8cd6201376f6**: Diagnostics
  Applies to original IDs: 1739.

<a id="M17-CAP-CDS-a7472d3c57b3f4e0"></a>
- **M17-CAP-CDS-a7472d3c57b3f4e0**: Therapy
  Applies to original IDs: 1739.

<a id="M17-CAP-CDS-5fe69bafd2d99d37"></a>
- **M17-CAP-CDS-5fe69bafd2d99d37**: Clinical Workflow
  Applies to original IDs: 1739.

<a id="M17-CAP-CDS-3236c9906b46dbfe"></a>
- **M17-CAP-CDS-3236c9906b46dbfe**: Unified clinical decision platform.
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-039896b594f08ddf"></a>
- **M17-CAP-CDS-039896b594f08ddf**: Coordinates
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-27dfc3d8f831fbdc"></a>
- **M17-CAP-CDS-27dfc3d8f831fbdc**: Diagnostic Support
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-532718384b5ea281"></a>
- **M17-CAP-CDS-532718384b5ea281**: Therapy Planning
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-0579c87b8849c8ce"></a>
- **M17-CAP-CDS-0579c87b8849c8ce**: Guideline Intelligence
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-63ed8c5e8466ab75"></a>
- **M17-CAP-CDS-63ed8c5e8466ab75**: Personalized Decisions
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-13ff98f6ea58cf66"></a>
- **M17-CAP-CDS-13ff98f6ea58cf66**: Evidence-Based Medicine
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-d3b5e9fc6819d266"></a>
- **M17-CAP-CDS-d3b5e9fc6819d266**: Forms the clinical decision intelligence layer of the EDHT ecosystem.
  Applies to original IDs: 1740.

<a id="M17-CAP-CDS-df81a3c39520c5ae"></a>
- **M17-CAP-CDS-df81a3c39520c5ae**: Supports workflow-related clinical decisions.
  Applies to original IDs: 1759.

<a id="M17-CAP-CDS-40cb97ef8e61e033"></a>
- **M17-CAP-CDS-40cb97ef8e61e033**: Prioritization
  Applies to original IDs: 1759.

<a id="M17-CAP-CDS-24db0f2a43579752"></a>
- **M17-CAP-CDS-24db0f2a43579752**: Clinical Coordination
  Applies to original IDs: 1759.

<a id="M17-CAP-CDS-c234af4e9a9bde90"></a>
- **M17-CAP-CDS-c234af4e9a9bde90**: Generates screening schedules.
  Applies to original IDs: 1783.

<a id="M17-CAP-CDS-6b1b617f18c456db"></a>
- **M17-CAP-CDS-6b1b617f18c456db**: Oncology
  Applies to original IDs: 1783.

<a id="M17-CAP-CDS-1b8a22e65f4f0098"></a>
- **M17-CAP-CDS-1b8a22e65f4f0098**: Endocrinology
  Applies to original IDs: 1783.

<a id="M17-CAP-CDS-d627496a1b97c9ca"></a>
- **M17-CAP-CDS-d627496a1b97c9ca**: Builds personalized vaccination schedules.
  Applies to original IDs: 1784.

<a id="M17-CAP-CDS-d9696dba7599a1f2"></a>
- **M17-CAP-CDS-d9696dba7599a1f2**: National Programs
  Applies to original IDs: 1784.

<a id="M17-CAP-CDS-ac15ce78dd9db39a"></a>
- **M17-CAP-CDS-ac15ce78dd9db39a**: Travel Vaccination
  Applies to original IDs: 1784.

<a id="M17-CAP-CDS-0532d62e9c85a78a"></a>
- **M17-CAP-CDS-0532d62e9c85a78a**: Risk Groups
  Applies to original IDs: 1784.

<a id="M17-CAP-CDS-4a1f24f9613f8137"></a>
- **M17-CAP-CDS-4a1f24f9613f8137**: Generates genomic therapy recommendations.
  Applies to original IDs: 1846.

<a id="M17-CAP-CDS-133069b4ec24b674"></a>
- **M17-CAP-CDS-133069b4ec24b674**: Cancer
  Applies to original IDs: 1846.

<a id="M17-CAP-CDS-4e77068b04c7211a"></a>
- **M17-CAP-CDS-4e77068b04c7211a**: Rare Diseases
  Applies to original IDs: 1846.

<a id="M17-CAP-CDS-e4ff79659ac3b16a"></a>
- **M17-CAP-CDS-e4ff79659ac3b16a**: Personalized Medicine
  Applies to original IDs: 1846.

<a id="M17-CAP-CDS-8bde6408bdb57886"></a>
- **M17-CAP-CDS-8bde6408bdb57886**: Interprets laboratory data using precision medicine.
  Applies to original IDs: 1852.

<a id="M17-CAP-CDS-1d18c66d0db6a648"></a>
- **M17-CAP-CDS-1d18c66d0db6a648**: Omics
  Applies to original IDs: 1852.

<a id="M17-CAP-CDS-73ecdbf953ecca8a"></a>
- **M17-CAP-CDS-73ecdbf953ecca8a**: Longitudinal Trends
  Applies to original IDs: 1852.

<a id="M17-CAP-CDS-b17cc07d4af6926a"></a>
- **M17-CAP-CDS-b17cc07d4af6926a**: Supports strategic healthcare decisions.
  Applies to original IDs: 1996.

<a id="M17-CAP-CDS-d5695ee36bcc8222"></a>
- **M17-CAP-CDS-d5695ee36bcc8222**: Healthcare Planning
  Applies to original IDs: 1996.

<a id="M17-CAP-CDS-7b0b28a60f78fe52"></a>
- **M17-CAP-CDS-7b0b28a60f78fe52**: Innovation
  Applies to original IDs: 1996.

<a id="M17-CAP-CDS-4a490801a7333102"></a>
- **M17-CAP-CDS-4a490801a7333102**: Long-term Development
  Applies to original IDs: 1996.

<a id="M17-CAP-CDS-f0de377ce387d65c"></a>
- **M17-CAP-CDS-f0de377ce387d65c**: # Medication Contraindications
  Applies to original IDs: 405.

<a id="M17-CAP-CDS-24624cd95815c852"></a>
- **M17-CAP-CDS-24624cd95815c852**: Displays contraindications for prescribed medicines.
  Applies to original IDs: 405.

<a id="M17-CAP-CDS-32bc9690af72c2cf"></a>
- **M17-CAP-CDS-32bc9690af72c2cf**: Pregnancy
  Applies to original IDs: 405.

<a id="M17-CAP-CDS-c95deb2ce7ba8cb1"></a>
- **M17-CAP-CDS-c95deb2ce7ba8cb1**: Lactation
  Applies to original IDs: 405.

<a id="M17-CAP-CDS-e18efbdace993939"></a>
- **M17-CAP-CDS-e18efbdace993939**: Age Restrictions
  Applies to original IDs: 405.

<a id="M17-CAP-CDS-a35b4e8cc4faae22"></a>
- **M17-CAP-CDS-a35b4e8cc4faae22**: # Dose Calculator
  Applies to original IDs: 412.

<a id="M17-CAP-CDS-3279b490f9004374"></a>
- **M17-CAP-CDS-3279b490f9004374**: Assists in calculating prescribed doses.
  Applies to original IDs: 412.

<a id="M17-CAP-CDS-4bc26b0d4eb19d27"></a>
- **M17-CAP-CDS-4bc26b0d4eb19d27**: Weight-based Calculations
  Applies to original IDs: 412.

<a id="M17-CAP-CDS-e1cb8b5933fe3931"></a>
- **M17-CAP-CDS-e1cb8b5933fe3931**: Age-based Calculations
  Applies to original IDs: 412.

<a id="M17-CAP-CDS-a889b4dfb3256453"></a>
- **M17-CAP-CDS-a889b4dfb3256453**: # Medication Allergy Cross Check
  Applies to original IDs: 430.

<a id="M17-CAP-CDS-acace6df14eb256f"></a>
- **M17-CAP-CDS-acace6df14eb256f**: Automatically compares prescribed medicines with registered allergies.
  Applies to original IDs: 430.

<a id="M17-CAP-CDS-76408637a8b38d99"></a>
- **M17-CAP-CDS-76408637a8b38d99**: Active Alerts
  Applies to original IDs: 430.

<a id="M17-CAP-CDS-589c29bbea72be7a"></a>
- **M17-CAP-CDS-589c29bbea72be7a**: Physician Review
  Applies to original IDs: 430.

<a id="M17-CAP-CDS-93ca9f82f0eaed24"></a>
- **M17-CAP-CDS-93ca9f82f0eaed24**: # Duplicate Therapy Detection
  Applies to original IDs: 431.

<a id="M17-CAP-CDS-8647517130fc9b9c"></a>
- **M17-CAP-CDS-8647517130fc9b9c**: Detects duplicate medications with similar active substances.
  Applies to original IDs: 431.

<a id="M17-CAP-CDS-fd0e2f300a73783d"></a>
- **M17-CAP-CDS-fd0e2f300a73783d**: Active Ingredient Analysis
  Applies to original IDs: 431.

<a id="M17-CAP-CDS-48fe6f108dd33614"></a>
- **M17-CAP-CDS-48fe6f108dd33614**: Duplicate Alerts
  Applies to original IDs: 431.

<a id="M17-CAP-CDS-ef31b65960922064"></a>
- **M17-CAP-CDS-ef31b65960922064**: # Obstetric Emergency AI
  Applies to original IDs: 758.

<a id="M17-CAP-CDS-cfe2f101b56fe2c1"></a>
- **M17-CAP-CDS-cfe2f101b56fe2c1**: AI evaluates obstetric emergency symptoms.
  Applies to original IDs: 758.

<a id="M17-CAP-CDS-3b0854c8588d8898"></a>
- **M17-CAP-CDS-3b0854c8588d8898**: Bleeding
  Applies to original IDs: 758.

<a id="M17-CAP-CDS-53b597216bf53446"></a>
- **M17-CAP-CDS-53b597216bf53446**: Contractions
  Applies to original IDs: 758.

<a id="M17-CAP-CDS-39fb4c36a16bc0fb"></a>
- **M17-CAP-CDS-39fb4c36a16bc0fb**: Reduced Fetal Movement
  Applies to original IDs: 758.

<a id="M17-CAP-CDS-30eec395a1d9ef13"></a>
- **M17-CAP-CDS-30eec395a1d9ef13**: Hypertension
  Applies to original IDs: 758.
