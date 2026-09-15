# CORE-CAP-IMMUNIZATION — shared capability and profiles

MASTER-06 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: VaccinationRecord, PolicyRelease, Restriction, EligibilityReview. Dependencies: CAP-IMMUNIZATION, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve vaccine history and policy release → bind immune/exposure context → separate contraindication/precaution/temporary restriction → clinician eligibility review → separate administration record → reassessment at expiry.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### PED2-IMMUNE-VACCINATION

Original IDs: 4443, 5014, 5020.

Immune safety, antibody-response assessment and post-transplant revaccination are distinct workflows under shared vaccination integration, not duplicate eligibility engines.

Resolve vaccine history and policy release → bind immune/exposure context → separate contraindication/precaution/temporary restriction → clinician eligibility review → separate administration record → reassessment at expiry.

### M04-RHEUM-VACCINATION

Original IDs: 4715, 5047.

One immunization policy profile retains dose sequence, temporary/permanent restrictions, specialist recommendation and expiration/reassessment; expiry is not automatic eligibility.

Resolve vaccine history and policy release → bind immune/exposure context → separate contraindication/precaution/temporary restriction → clinician eligibility review → separate administration record → reassessment at expiry.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M06-CAP-IMMUNIZATION-3e94f49ab9514ef9"></a>
- **M06-CAP-IMMUNIZATION-3e94f49ab9514ef9**: Connects immune status with the EDHT Global Vaccination Intelligence Platform.
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-4d7b4c17b47d42b1"></a>
- **M06-CAP-IMMUNIZATION-4d7b4c17b47d42b1**: Evaluates
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-e76820d23209012b"></a>
- **M06-CAP-IMMUNIZATION-e76820d23209012b**: Immune Diagnosis
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-ee54e27f27fe774f"></a>
- **M06-CAP-IMMUNIZATION-ee54e27f27fe774f**: Immune Function
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-de4ed1dc32363a66"></a>
- **M06-CAP-IMMUNIZATION-de4ed1dc32363a66**: Current Treatment
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-7ec42d2ad16af21e"></a>
- **M06-CAP-IMMUNIZATION-7ec42d2ad16af21e**: Vaccine Type
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-9457444b538e6aff"></a>
- **M06-CAP-IMMUNIZATION-9457444b538e6aff**: Previous Vaccinations
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-4b5b0c8caca3c931"></a>
- **M06-CAP-IMMUNIZATION-4b5b0c8caca3c931**: Previous Reactions
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-e7e6035fcc37a046"></a>
- **M06-CAP-IMMUNIZATION-e7e6035fcc37a046**: National Guidance
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-f5df05d6020d3ecc"></a>
- **M06-CAP-IMMUNIZATION-f5df05d6020d3ecc**: Specialist Decisions
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-da5a0435b386854d"></a>
- **M06-CAP-IMMUNIZATION-da5a0435b386854d**: Can flag vaccinations requiring immunology review.
  Origin: original 4443

<a id="M06-CAP-IMMUNIZATION-d45ea4dcf82d182b"></a>
- **M06-CAP-IMMUNIZATION-d45ea4dcf82d182b**: Coordinate vaccination and infection-related clinical information for children receiving immunosuppressive treatment.
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-8b51cb52413bd07d"></a>
- **M06-CAP-IMMUNIZATION-8b51cb52413bd07d**: Immunosuppression Status
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-0cdcf465ec7d12ac"></a>
- **M06-CAP-IMMUNIZATION-0cdcf465ec7d12ac**: Medication Exposure
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-46cdd9e5fce2291e"></a>
- **M06-CAP-IMMUNIZATION-46cdd9e5fce2291e**: Infection History
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-a91b469df851c232"></a>
- **M06-CAP-IMMUNIZATION-a91b469df851c232**: Vaccination History
  Origin: original 4715, original 5047

<a id="M06-CAP-IMMUNIZATION-df570c0438f0b3cb"></a>
- **M06-CAP-IMMUNIZATION-df570c0438f0b3cb**: National Vaccination Calendar Integration
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-8ec4c802726562fe"></a>
- **M06-CAP-IMMUNIZATION-8ec4c802726562fe**: Age-based Vaccination Context
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-95c3dab31fdd44cb"></a>
- **M06-CAP-IMMUNIZATION-95c3dab31fdd44cb**: Vaccine Due-date Tracking
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-a273ab5a66f5c373"></a>
- **M06-CAP-IMMUNIZATION-a273ab5a66f5c373**: Temporary Vaccination Restrictions
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-982e0b25936d657d"></a>
- **M06-CAP-IMMUNIZATION-982e0b25936d657d**: Specialist-defined Restrictions
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-bcfcf08f7506067a"></a>
- **M06-CAP-IMMUNIZATION-bcfcf08f7506067a**: Previous Vaccine Reactions
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-368db562d8afb74e"></a>
- **M06-CAP-IMMUNIZATION-368db562d8afb74e**: Serological Data where clinically relevant
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-8e535620c6936c64"></a>
- **M06-CAP-IMMUNIZATION-8e535620c6936c64**: Planned Therapy Context
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-8ead8b6fd48618d0"></a>
- **M06-CAP-IMMUNIZATION-8ead8b6fd48618d0**: Vaccination Documentation
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-9f5afa8f1f9c3dce"></a>
- **M06-CAP-IMMUNIZATION-9f5afa8f1f9c3dce**: Clinical Governance:
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-6861c080bb361166"></a>
- **M06-CAP-IMMUNIZATION-6861c080bb361166**: Vaccination eligibility and contraindication decisions must be based on current clinical guidance and qualified clinician assessment.
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-a8f4fa19e751d826"></a>
- **M06-CAP-IMMUNIZATION-a8f4fa19e751d826**: Important Safety Principle:
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-d3ebf7b3a262bf5a"></a>
- **M06-CAP-IMMUNIZATION-d3ebf7b3a262bf5a**: The system distinguishes permanent contraindications from temporary precautions, treatment-related restrictions and conditions requiring specialist assessment.
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-2f27e552d723d07f"></a>
- **M06-CAP-IMMUNIZATION-2f27e552d723d07f**: Integrations:
  Origin: original 4715, original 5014, original 5020

<a id="M06-CAP-IMMUNIZATION-791e150b54f860f6"></a>
- **M06-CAP-IMMUNIZATION-791e150b54f860f6**: Rheumatology
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-27cde7069fe13381"></a>
- **M06-CAP-IMMUNIZATION-27cde7069fe13381**: Immunology
  Origin: original 4715, original 5014, original 5020

<a id="M06-CAP-IMMUNIZATION-813d0ab6af854e92"></a>
- **M06-CAP-IMMUNIZATION-813d0ab6af854e92**: Infectious Disease
  Origin: original 4715, original 5014, original 5020

<a id="M06-CAP-IMMUNIZATION-f5b38128ad4c99ee"></a>
- **M06-CAP-IMMUNIZATION-f5b38128ad4c99ee**: Vaccination Intelligence
  Origin: original 4715, original 5014, original 5020

<a id="M06-CAP-IMMUNIZATION-3464207120f1db8a"></a>
- **M06-CAP-IMMUNIZATION-3464207120f1db8a**: Primary Care
  Origin: original 4715

<a id="M06-CAP-IMMUNIZATION-9e9dbb804ca8197a"></a>
- **M06-CAP-IMMUNIZATION-9e9dbb804ca8197a**: Medical Passport
  Origin: original 4715, original 5014

<a id="M06-CAP-IMMUNIZATION-e453dca437376744"></a>
- **M06-CAP-IMMUNIZATION-e453dca437376744**: Connect vaccination history with clinically indicated immune-response assessment.
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-ffda182bfe81bb2d"></a>
- **M06-CAP-IMMUNIZATION-ffda182bfe81bb2d**: Vaccine History
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-19689dbaf893736c"></a>
- **M06-CAP-IMMUNIZATION-19689dbaf893736c**: Vaccine Product
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-cbb92af05bc80256"></a>
- **M06-CAP-IMMUNIZATION-cbb92af05bc80256**: Dose Sequence
  Origin: original 5014, original 5020

<a id="M06-CAP-IMMUNIZATION-e7faffaef616c412"></a>
- **M06-CAP-IMMUNIZATION-e7faffaef616c412**: Vaccination Date
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-6787a2a093f774b8"></a>
- **M06-CAP-IMMUNIZATION-6787a2a093f774b8**: National Calendar Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-7ab41e948155734b"></a>
- **M06-CAP-IMMUNIZATION-7ab41e948155734b**: Specific Antibody Testing
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-1737965bac1bdc1c"></a>
- **M06-CAP-IMMUNIZATION-1737965bac1bdc1c**: Pre/Post Vaccination Testing Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-aa30479c0f453198"></a>
- **M06-CAP-IMMUNIZATION-aa30479c0f453198**: Protective Response Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-1ffd91b9a7834e18"></a>
- **M06-CAP-IMMUNIZATION-1ffd91b9a7834e18**: Waning Response Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-a3ba9efd382b4480"></a>
- **M06-CAP-IMMUNIZATION-a3ba9efd382b4480**: Immune Deficiency Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-3bd3037f0973f758"></a>
- **M06-CAP-IMMUNIZATION-3bd3037f0973f758**: Revaccination Context
  Origin: original 5014, original 5047

<a id="M06-CAP-IMMUNIZATION-8354dfab70cff022"></a>
- **M06-CAP-IMMUNIZATION-8354dfab70cff022**: Specialist Recommendation
  Origin: original 5014, original 5047

<a id="M06-CAP-IMMUNIZATION-d33cffb9f857227c"></a>
- **M06-CAP-IMMUNIZATION-d33cffb9f857227c**: Contraindication Context
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-c5e66386eff95a33"></a>
- **M06-CAP-IMMUNIZATION-c5e66386eff95a33**: Temporary Restriction
  Origin: original 5014, original 5047

<a id="M06-CAP-IMMUNIZATION-0d86946e629cc025"></a>
- **M06-CAP-IMMUNIZATION-0d86946e629cc025**: Follow-up
  Origin: original 5014, original 5047

<a id="M06-CAP-IMMUNIZATION-35ff4287a628c0a4"></a>
- **M06-CAP-IMMUNIZATION-35ff4287a628c0a4**: Laboratory Medicine
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-07f8d474b8b4141c"></a>
- **M06-CAP-IMMUNIZATION-07f8d474b8b4141c**: Safety:
  Origin: original 5014, original 5020, original 5047

<a id="M06-CAP-IMMUNIZATION-6325cde4d612d155"></a>
- **M06-CAP-IMMUNIZATION-6325cde4d612d155**: Laboratory immune-response data does not automatically determine vaccination eligibility without clinical interpretation.
  Origin: original 5014

<a id="M06-CAP-IMMUNIZATION-a1283c4127069bc4"></a>
- **M06-CAP-IMMUNIZATION-a1283c4127069bc4**: Manage recovery of immune competence and clinician-approved revaccination after transplantation or major immune-modifying treatment.
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-32cca9eed565dd50"></a>
- **M06-CAP-IMMUNIZATION-32cca9eed565dd50**: Treatment/Transplant History
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-a55ce6e7d67da07e"></a>
- **M06-CAP-IMMUNIZATION-a55ce6e7d67da07e**: Immune Recovery Timeline
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-e022cae3aff0c14f"></a>
- **M06-CAP-IMMUNIZATION-e022cae3aff0c14f**: Lymphocyte Subsets
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-3b2c3ca949f16a52"></a>
- **M06-CAP-IMMUNIZATION-3b2c3ca949f16a52**: Immunoglobulin Levels
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-348449082e3409b7"></a>
- **M06-CAP-IMMUNIZATION-348449082e3409b7**: Functional Immune Testing
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-70ac12ac6d93efc9"></a>
- **M06-CAP-IMMUNIZATION-70ac12ac6d93efc9**: Previous Vaccination History
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-3a1040534aa257b8"></a>
- **M06-CAP-IMMUNIZATION-3a1040534aa257b8**: Vaccine Eligibility Review
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-b2c5da413f2bacee"></a>
- **M06-CAP-IMMUNIZATION-b2c5da413f2bacee**: National Calendar Mapping
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-66b4ca704b2f7b03"></a>
- **M06-CAP-IMMUNIZATION-66b4ca704b2f7b03**: Revaccination Schedule
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-6b9b8dbf63943970"></a>
- **M06-CAP-IMMUNIZATION-6b9b8dbf63943970**: Temporary Restrictions
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-07105fff881c00e2"></a>
- **M06-CAP-IMMUNIZATION-07105fff881c00e2**: Live-vaccine Restriction Context
  Origin: original 5020, original 5047

<a id="M06-CAP-IMMUNIZATION-f3d768581b08512e"></a>
- **M06-CAP-IMMUNIZATION-f3d768581b08512e**: Antibody Response Context
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-2e8492347580ffc2"></a>
- **M06-CAP-IMMUNIZATION-2e8492347580ffc2**: Completion Tracking
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-f0f14bba87a2c571"></a>
- **M06-CAP-IMMUNIZATION-f0f14bba87a2c571**: Vaccine recommendations remain dependent on current immune status, specialist review and applicable national guidance.
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-c25e5083a540778a"></a>
- **M06-CAP-IMMUNIZATION-c25e5083a540778a**: Transplantation
  Origin: original 5020

<a id="M06-CAP-IMMUNIZATION-67464f47ae12fb10"></a>
- **M06-CAP-IMMUNIZATION-67464f47ae12fb10**: Connect national vaccination schedules with immunosuppression status and specialist vaccination planning.
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-ea60fc07291d851a"></a>
- **M06-CAP-IMMUNIZATION-ea60fc07291d851a**: National Vaccination Calendar
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-b5ff0ee65dc3cfc8"></a>
- **M06-CAP-IMMUNIZATION-b5ff0ee65dc3cfc8**: Vaccine Dose Sequence
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-4dfa70efe41e0821"></a>
- **M06-CAP-IMMUNIZATION-4dfa70efe41e0821**: Immunosuppressive Medication
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-3ba92a774d0545d8"></a>
- **M06-CAP-IMMUNIZATION-3ba92a774d0545d8**: Biological Therapy
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-3ec2421e3e448571"></a>
- **M06-CAP-IMMUNIZATION-3ec2421e3e448571**: Immune Status Context
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-7e7c1f0acce435e2"></a>
- **M06-CAP-IMMUNIZATION-7e7c1f0acce435e2**: Vaccine Due Status
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-90e1c6372cf74d03"></a>
- **M06-CAP-IMMUNIZATION-90e1c6372cf74d03**: Clinician-confirmed Contraindication
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-d5a4455f908ec5bc"></a>
- **M06-CAP-IMMUNIZATION-d5a4455f908ec5bc**: Restriction Expiration
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-97f113117ba85c65"></a>
- **M06-CAP-IMMUNIZATION-97f113117ba85c65**: Alert Logic:
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-7442cf206ab55ee0"></a>
- **M06-CAP-IMMUNIZATION-7442cf206ab55ee0**: Vaccine Due
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-c5b7111119ecdae1"></a>
- **M06-CAP-IMMUNIZATION-c5b7111119ecdae1**: Vaccine Overdue
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-12510f8fa1958151"></a>
- **M06-CAP-IMMUNIZATION-12510f8fa1958151**: Temporary Restriction Expiring
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-d5d65be3e4a5acda"></a>
- **M06-CAP-IMMUNIZATION-d5d65be3e4a5acda**: Specialist Review Required
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-4230873ae8058b49"></a>
- **M06-CAP-IMMUNIZATION-4230873ae8058b49**: Missing Vaccination Documentation
  Origin: original 5047

<a id="M06-CAP-IMMUNIZATION-7583f6a4c616e189"></a>
- **M06-CAP-IMMUNIZATION-7583f6a4c616e189**: The system distinguishes true contraindications from temporary precautions and treatment-dependent restrictions.
  Origin: original 5047

## Preserved source metadata

<a id="M06-CAP-IMMUNIZATION-5ba74d8fcc7b20cc"></a>
- **M06-CAP-IMMUNIZATION-5ba74d8fcc7b20cc**: Status

<a id="M06-CAP-IMMUNIZATION-d5232cbd3a326267"></a>
- **M06-CAP-IMMUNIZATION-d5232cbd3a326267**: Documentation

<a id="M06-CAP-IMMUNIZATION-6f33acf3afb37064"></a>
- **M06-CAP-IMMUNIZATION-6f33acf3afb37064**: ---

<a id="M06-CAP-IMMUNIZATION-6510c5c511a879bc"></a>
- **M06-CAP-IMMUNIZATION-6510c5c511a879bc**: Purpose:

<a id="M06-CAP-IMMUNIZATION-b34f593f0f83a1d1"></a>
- **M06-CAP-IMMUNIZATION-b34f593f0f83a1d1**: Core Functions:

<a id="M06-CAP-IMMUNIZATION-b88b375a44ccd619"></a>
- **M06-CAP-IMMUNIZATION-b88b375a44ccd619**: Status:

[Applied migration](../../../audit/master-06/requirement_migration.json) · [Gap disposition](../../../audit/master-06/gap_disposition.json) · [Readiness gates](../../../audit/master-06/implementation_gate_matrix.json).
