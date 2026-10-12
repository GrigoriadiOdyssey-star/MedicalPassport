# CORE-CAP-IDENTITY — MASTER-09 addendum

Professional and facility directories share the existing account/practitioner/organization owner; they do not create a new clinical truth store or an owner per specialty. Preserve qualifications, expertise, biography/publications, languages, international certification and network affiliations; verify source, issuing authority, scope, expiry and status. Retain center-specific dialysis, endoscopy, transfusion, infusion, isolation/ICU, laser, rehabilitation, surgery, diagnostic, maternity/delivery and working-hour/contact capabilities. A directory claim is not current staffing, treatment privilege or patient-data authorization. Fertility success rates require denominator/time/cohort provenance and must not be treated as a personal outcome estimate.

Extends [unchanged MASTER-08 specification](../master08/CAP-IDENTITY.md). Earlier profiles/anchors remain authoritative and are not recounted.

## Workflow and boundaries

Capture attributed practitioner/organization claim → verify credential and role scope/expiry separately → retain specialty and facility capability profiles → publish purpose-limited directory projection → correct/version with provenance. Clinical record access requires a separate current authorization decision.

No credential, directory membership, risk score or clinical model can grant treatment authority or unrestricted patient access. Fail closed for the non-emergency MVP read; do not claim emergency response, clinical clearance or certification.

Purpose-limited minimum disclosure with separate tenant/patient/recipient checks, guardian/adolescent restrictions and protected credential/audit metadata. No raw bearer tokens, biometric samples or unrestricted health payloads in logs.

Unknown, expired, revoked, contradictory or unavailable identity/role/grant/source yields denial or explicit unavailable state. Preserve source history and idempotent correction; never silently expand permissions on retry.

Trace every nonempty source fragment to a canonical anchor; verify credential and facility differences survive normalization. Future runtime acceptance must cover wrong patient/tenant/purpose, revoked/expired role, dependency failure, stale source and concurrent revoke/read. Structural tests do not establish runtime protection.

Entities: Practitioner, Organization, CredentialClaim, VerifiedRole, FacilityCapability, DirectoryRevision. Dependencies: CAP-IDENTITY, CAP-SECURITY, CAP-CONSENT, CAP-AUDIT.

## New source fragments

<a id="M09-CAP-IDENTITY-5c6d8de0472569a9"></a>
- **M09-CAP-IDENTITY-5c6d8de0472569a9**: Provides professional information about licensed gastroenterologists.
  Original IDs: 601

<a id="M09-CAP-IDENTITY-8b2d7025901b5418"></a>
- **M09-CAP-IDENTITY-8b2d7025901b5418**: Full Name
  Original IDs: 601, 631

<a id="M09-CAP-IDENTITY-b0f874eff292dcf3"></a>
- **M09-CAP-IDENTITY-b0f874eff292dcf3**: Qualifications
  Original IDs: 601, 631, 651, 671, 691, 721, 761, 781, 801, 821, 841, 861, 881, 901, 921, 941, 961, 981, 991, 1001, 1031, 1051, 1071, 1091, 1111

<a id="M09-CAP-IDENTITY-0b379eedb717ebd1"></a>
- **M09-CAP-IDENTITY-0b379eedb717ebd1**: Experience
  Original IDs: 601, 631, 651, 671, 691, 721, 761, 781, 801, 821, 841, 861, 881, 901, 921, 941, 961, 981, 991, 1001, 1031, 1051, 1071, 1091, 1111

<a id="M09-CAP-IDENTITY-2d1464b435bb05f6"></a>
- **M09-CAP-IDENTITY-2d1464b435bb05f6**: Languages
  Original IDs: 601, 631, 651, 671, 691, 721, 761, 781, 801, 821, 841, 861, 881, 901, 921, 941, 961, 981, 991, 1001, 1031, 1051, 1071, 1091, 1111

<a id="M09-CAP-IDENTITY-832099f1aa3fa722"></a>
- **M09-CAP-IDENTITY-832099f1aa3fa722**: Professional Biography
  Original IDs: 601, 631

<a id="M09-CAP-IDENTITY-31e9a54eeb92f0c3"></a>
- **M09-CAP-IDENTITY-31e9a54eeb92f0c3**: Integrated with Global Gastroenterology Network.
  Original IDs: 601

<a id="M09-CAP-IDENTITY-c6512e131aee524e"></a>
- **M09-CAP-IDENTITY-c6512e131aee524e**: Stores complete information about participating gastroenterology clinics.
  Original IDs: 602

<a id="M09-CAP-IDENTITY-c0cedbf42faa6a9b"></a>
- **M09-CAP-IDENTITY-c0cedbf42faa6a9b**: Clinic Information
  Original IDs: 602, 632

<a id="M09-CAP-IDENTITY-cf0d6b7a13473234"></a>
- **M09-CAP-IDENTITY-cf0d6b7a13473234**: Services
  Original IDs: 602, 632, 652, 672, 692, 722, 762, 782, 802, 822, 842, 862, 882, 902, 922, 942, 962, 982, 992, 1052, 1072, 1092

<a id="M09-CAP-IDENTITY-9e23bd6dbe2aa871"></a>
- **M09-CAP-IDENTITY-9e23bd6dbe2aa871**: Working Hours
  Original IDs: 602, 632

<a id="M09-CAP-IDENTITY-9ffc076550b94ce2"></a>
- **M09-CAP-IDENTITY-9ffc076550b94ce2**: Contact Information
  Original IDs: 602, 632, 652, 672, 692, 722, 762, 782, 802, 822, 842, 862, 882, 902, 922, 942, 962, 982, 992, 1002, 1032, 1052, 1072, 1092, 1112

<a id="M09-CAP-IDENTITY-94fd81ab79d21ed2"></a>
- **M09-CAP-IDENTITY-94fd81ab79d21ed2**: Provides professional information about licensed nephrologists.
  Original IDs: 631

<a id="M09-CAP-IDENTITY-2591bcc0c52b2bed"></a>
- **M09-CAP-IDENTITY-2591bcc0c52b2bed**: Integrated with Global Nephrology Network.
  Original IDs: 631

<a id="M09-CAP-IDENTITY-b49d7b229e544f04"></a>
- **M09-CAP-IDENTITY-b49d7b229e544f04**: Stores complete information about participating nephrology clinics.
  Original IDs: 632

<a id="M09-CAP-IDENTITY-d4b7b5ca629f9f19"></a>
- **M09-CAP-IDENTITY-d4b7b5ca629f9f19**: Professional profile of a licensed urologist.
  Original IDs: 651

<a id="M09-CAP-IDENTITY-a98fb94637000a04"></a>
- **M09-CAP-IDENTITY-a98fb94637000a04**: Biography
  Original IDs: 651, 671, 691, 721, 761, 781, 821

<a id="M09-CAP-IDENTITY-54d186f5910d5178"></a>
- **M09-CAP-IDENTITY-54d186f5910d5178**: Stores complete information about urology clinics.
  Original IDs: 652

<a id="M09-CAP-IDENTITY-705ca7666c7616e4"></a>
- **M09-CAP-IDENTITY-705ca7666c7616e4**: Physicians
  Original IDs: 652, 672, 692, 722, 762, 782, 822, 842, 862, 882, 902, 922, 942, 962, 982, 992, 1002, 1032, 1052, 1072, 1092, 1112

<a id="M09-CAP-IDENTITY-bc69691df2ee1ace"></a>
- **M09-CAP-IDENTITY-bc69691df2ee1ace**: Equipment
  Original IDs: 652, 692, 782, 802

<a id="M09-CAP-IDENTITY-0532dbf26f49b042"></a>
- **M09-CAP-IDENTITY-0532dbf26f49b042**: Provides professional information about licensed andrologists.
  Original IDs: 671

<a id="M09-CAP-IDENTITY-b761822ab810fa50"></a>
- **M09-CAP-IDENTITY-b761822ab810fa50**: Stores complete information about participating andrology clinics.
  Original IDs: 672

<a id="M09-CAP-IDENTITY-7baa46d6c91b05ae"></a>
- **M09-CAP-IDENTITY-7baa46d6c91b05ae**: Provides professional information about licensed gynecologists.
  Original IDs: 691

<a id="M09-CAP-IDENTITY-358d38decabe63a8"></a>
- **M09-CAP-IDENTITY-358d38decabe63a8**: Integrated with Global Gynecology Network.
  Original IDs: 691

<a id="M09-CAP-IDENTITY-9054c34adf704244"></a>
- **M09-CAP-IDENTITY-9054c34adf704244**: Stores complete information about participating gynecology clinics.
  Original IDs: 692

<a id="M09-CAP-IDENTITY-af30a91baac142be"></a>
- **M09-CAP-IDENTITY-af30a91baac142be**: Provides professional information about licensed obstetricians.
  Original IDs: 721

<a id="M09-CAP-IDENTITY-8eff5e436fe16bbf"></a>
- **M09-CAP-IDENTITY-8eff5e436fe16bbf**: Integrated with Global Obstetrics Network.
  Original IDs: 721

<a id="M09-CAP-IDENTITY-358357e494b6a541"></a>
- **M09-CAP-IDENTITY-358357e494b6a541**: Stores complete information about maternity hospitals and obstetric clinics.
  Original IDs: 722

<a id="M09-CAP-IDENTITY-95a1b896198ea681"></a>
- **M09-CAP-IDENTITY-95a1b896198ea681**: Delivery Facilities
  Original IDs: 722

<a id="M09-CAP-IDENTITY-3e4d421deabb734c"></a>
- **M09-CAP-IDENTITY-3e4d421deabb734c**: Professional profile of reproductive medicine physicians.
  Original IDs: 761

<a id="M09-CAP-IDENTITY-4c7be48140932489"></a>
- **M09-CAP-IDENTITY-4c7be48140932489**: Stores complete information about fertility centers.
  Original IDs: 762

<a id="M09-CAP-IDENTITY-80fe3b19682f73b3"></a>
- **M09-CAP-IDENTITY-80fe3b19682f73b3**: Success Rates
  Original IDs: 762

<a id="M09-CAP-IDENTITY-ebb12f56bc95193c"></a>
- **M09-CAP-IDENTITY-ebb12f56bc95193c**: Professional profile of licensed mammologists and breast specialists.
  Original IDs: 781

<a id="M09-CAP-IDENTITY-f5b2d222cc00e8e1"></a>
- **M09-CAP-IDENTITY-f5b2d222cc00e8e1**: Stores complete information about breast health centers.
  Original IDs: 782

<a id="M09-CAP-IDENTITY-902430668e2215b1"></a>
- **M09-CAP-IDENTITY-902430668e2215b1**: Professional profile of licensed gynecologic oncologists.
  Original IDs: 801

<a id="M09-CAP-IDENTITY-db901beb671d41e4"></a>
- **M09-CAP-IDENTITY-db901beb671d41e4**: Scientific Publications
  Original IDs: 801

<a id="M09-CAP-IDENTITY-618c63d232134483"></a>
- **M09-CAP-IDENTITY-618c63d232134483**: Stores complete information about gynecologic oncology centers.
  Original IDs: 802

<a id="M09-CAP-IDENTITY-18419e891e0c8e26"></a>
- **M09-CAP-IDENTITY-18419e891e0c8e26**: Surgical Team
  Original IDs: 802

<a id="M09-CAP-IDENTITY-e620861d8b257c48"></a>
- **M09-CAP-IDENTITY-e620861d8b257c48**: Professional profile of licensed pediatricians.
  Original IDs: 821

<a id="M09-CAP-IDENTITY-17d31396b3c71d55"></a>
- **M09-CAP-IDENTITY-17d31396b3c71d55**: Pediatric Subspecialties
  Original IDs: 821

<a id="M09-CAP-IDENTITY-8462e4af0c91eb32"></a>
- **M09-CAP-IDENTITY-8462e4af0c91eb32**: Integrated with the Global Pediatrics Network.
  Original IDs: 821

<a id="M09-CAP-IDENTITY-5e7071ee6dcf05fc"></a>
- **M09-CAP-IDENTITY-5e7071ee6dcf05fc**: Stores complete information about pediatric clinics.
  Original IDs: 822

<a id="M09-CAP-IDENTITY-c84e0c7c0452daa2"></a>
- **M09-CAP-IDENTITY-c84e0c7c0452daa2**: Emergency Department
  Original IDs: 822

<a id="M09-CAP-IDENTITY-7679bd8fc2209502"></a>
- **M09-CAP-IDENTITY-7679bd8fc2209502**: Professional profile of licensed pediatric cardiologists.
  Original IDs: 841

<a id="M09-CAP-IDENTITY-6950e23544f10fb6"></a>
- **M09-CAP-IDENTITY-6950e23544f10fb6**: Congenital Heart Disease Expertise
  Original IDs: 841

<a id="M09-CAP-IDENTITY-dc495a91b84a7612"></a>
- **M09-CAP-IDENTITY-dc495a91b84a7612**: Stores complete information about pediatric cardiology centers.
  Original IDs: 842

<a id="M09-CAP-IDENTITY-97e08f582e37b393"></a>
- **M09-CAP-IDENTITY-97e08f582e37b393**: Diagnostic Equipment
  Original IDs: 842, 862, 882, 1052

<a id="M09-CAP-IDENTITY-9cef0ee95bea8577"></a>
- **M09-CAP-IDENTITY-9cef0ee95bea8577**: Professional profile of licensed pediatric endocrinologists.
  Original IDs: 861

<a id="M09-CAP-IDENTITY-19d6da3e6223fd2d"></a>
- **M09-CAP-IDENTITY-19d6da3e6223fd2d**: Pediatric Endocrinology Expertise
  Original IDs: 861

<a id="M09-CAP-IDENTITY-d7d1fb8ec93b1fbe"></a>
- **M09-CAP-IDENTITY-d7d1fb8ec93b1fbe**: Stores complete information about pediatric endocrinology centers.
  Original IDs: 862

<a id="M09-CAP-IDENTITY-3f7e8c9ef0904c79"></a>
- **M09-CAP-IDENTITY-3f7e8c9ef0904c79**: Professional profile of licensed pediatric neurologists.
  Original IDs: 881

<a id="M09-CAP-IDENTITY-acb4e1c5d3c86a1c"></a>
- **M09-CAP-IDENTITY-acb4e1c5d3c86a1c**: Pediatric Neurology Expertise
  Original IDs: 881

<a id="M09-CAP-IDENTITY-6d7e487dc402f330"></a>
- **M09-CAP-IDENTITY-6d7e487dc402f330**: Stores complete information about pediatric neurology centers.
  Original IDs: 882

<a id="M09-CAP-IDENTITY-391936b779ac3e11"></a>
- **M09-CAP-IDENTITY-391936b779ac3e11**: Professional profile of licensed pediatric pulmonologists.
  Original IDs: 901

<a id="M09-CAP-IDENTITY-635c29a2509800b1"></a>
- **M09-CAP-IDENTITY-635c29a2509800b1**: Pediatric Respiratory Expertise
  Original IDs: 901

<a id="M09-CAP-IDENTITY-09f4e5fb9ceae4ec"></a>
- **M09-CAP-IDENTITY-09f4e5fb9ceae4ec**: Stores complete information about pediatric pulmonology centers.
  Original IDs: 902

<a id="M09-CAP-IDENTITY-38ceae4a47b97bc3"></a>
- **M09-CAP-IDENTITY-38ceae4a47b97bc3**: Respiratory Laboratories
  Original IDs: 902

<a id="M09-CAP-IDENTITY-a75e3d37d44eae25"></a>
- **M09-CAP-IDENTITY-a75e3d37d44eae25**: Professional profile of licensed pediatric nephrologists.
  Original IDs: 921

<a id="M09-CAP-IDENTITY-552c09e472f659fb"></a>
- **M09-CAP-IDENTITY-552c09e472f659fb**: Pediatric Kidney Disease Expertise
  Original IDs: 921

<a id="M09-CAP-IDENTITY-e7ed73f79b4b8cfa"></a>
- **M09-CAP-IDENTITY-e7ed73f79b4b8cfa**: Stores complete information about pediatric nephrology centers.
  Original IDs: 922

<a id="M09-CAP-IDENTITY-2fa89c3e03cb9528"></a>
- **M09-CAP-IDENTITY-2fa89c3e03cb9528**: Dialysis Unit
  Original IDs: 922

<a id="M09-CAP-IDENTITY-2aa3c61555623752"></a>
- **M09-CAP-IDENTITY-2aa3c61555623752**: Professional profile of licensed pediatric gastroenterologists.
  Original IDs: 941

<a id="M09-CAP-IDENTITY-b3fbb64bf5052313"></a>
- **M09-CAP-IDENTITY-b3fbb64bf5052313**: Pediatric Digestive Disease Expertise
  Original IDs: 941

<a id="M09-CAP-IDENTITY-4d210de505682f82"></a>
- **M09-CAP-IDENTITY-4d210de505682f82**: Stores complete information about pediatric gastroenterology centers.
  Original IDs: 942

<a id="M09-CAP-IDENTITY-28bdd10390ec2ba1"></a>
- **M09-CAP-IDENTITY-28bdd10390ec2ba1**: Endoscopy Unit
  Original IDs: 942

<a id="M09-CAP-IDENTITY-7e5230495550a76f"></a>
- **M09-CAP-IDENTITY-7e5230495550a76f**: Professional profile of licensed pediatric hematologists.
  Original IDs: 961

<a id="M09-CAP-IDENTITY-d3cc017780655943"></a>
- **M09-CAP-IDENTITY-d3cc017780655943**: Pediatric Blood Disorders Expertise
  Original IDs: 961

<a id="M09-CAP-IDENTITY-aab46c6a52aec19d"></a>
- **M09-CAP-IDENTITY-aab46c6a52aec19d**: Stores complete information about pediatric hematology centers.
  Original IDs: 962

<a id="M09-CAP-IDENTITY-30167dd7df2181cb"></a>
- **M09-CAP-IDENTITY-30167dd7df2181cb**: Transfusion Unit
  Original IDs: 962

<a id="M09-CAP-IDENTITY-d496749b4c9c0e12"></a>
- **M09-CAP-IDENTITY-d496749b4c9c0e12**: Professional profile of licensed pediatric rheumatologists.
  Original IDs: 981

<a id="M09-CAP-IDENTITY-56b7f62706203c91"></a>
- **M09-CAP-IDENTITY-56b7f62706203c91**: Autoimmune Disease Expertise
  Original IDs: 981

<a id="M09-CAP-IDENTITY-b0ac7b2b0f27e413"></a>
- **M09-CAP-IDENTITY-b0ac7b2b0f27e413**: Stores complete information about pediatric rheumatology centers.
  Original IDs: 982

<a id="M09-CAP-IDENTITY-2406447bcc9e0ae3"></a>
- **M09-CAP-IDENTITY-2406447bcc9e0ae3**: Infusion Unit
  Original IDs: 982

<a id="M09-CAP-IDENTITY-195dc6a217ddfa71"></a>
- **M09-CAP-IDENTITY-195dc6a217ddfa71**: Professional profile of licensed pediatric immunologists.
  Original IDs: 991

<a id="M09-CAP-IDENTITY-7b31910ce4008215"></a>
- **M09-CAP-IDENTITY-7b31910ce4008215**: Immunology Expertise
  Original IDs: 991

<a id="M09-CAP-IDENTITY-f90f972bfe58b6e9"></a>
- **M09-CAP-IDENTITY-f90f972bfe58b6e9**: Stores complete information about pediatric immunology centers.
  Original IDs: 992

<a id="M09-CAP-IDENTITY-7f024f21523515c1"></a>
- **M09-CAP-IDENTITY-7f024f21523515c1**: Infusion Center
  Original IDs: 992

<a id="M09-CAP-IDENTITY-b9c4b774e7021c20"></a>
- **M09-CAP-IDENTITY-b9c4b774e7021c20**: Professional profile of licensed pediatric infectious disease specialists.
  Original IDs: 1001

<a id="M09-CAP-IDENTITY-b72a924aa65aed33"></a>
- **M09-CAP-IDENTITY-b72a924aa65aed33**: International Certification
  Original IDs: 1001

<a id="M09-CAP-IDENTITY-41cfe805a82c8c57"></a>
- **M09-CAP-IDENTITY-41cfe805a82c8c57**: Stores complete information about pediatric infectious disease centers.
  Original IDs: 1002

<a id="M09-CAP-IDENTITY-fcc773a1bf424b27"></a>
- **M09-CAP-IDENTITY-fcc773a1bf424b27**: Isolation Units
  Original IDs: 1002

<a id="M09-CAP-IDENTITY-f833803c6fa6e87b"></a>
- **M09-CAP-IDENTITY-f833803c6fa6e87b**: ICU Support
  Original IDs: 1002

<a id="M09-CAP-IDENTITY-b5be473b98bc84f7"></a>
- **M09-CAP-IDENTITY-b5be473b98bc84f7**: Professional profile of pediatric orthopedic surgeons.
  Original IDs: 1031

<a id="M09-CAP-IDENTITY-132339b93a55a724"></a>
- **M09-CAP-IDENTITY-132339b93a55a724**: Pediatric Orthopedic Expertise
  Original IDs: 1031

<a id="M09-CAP-IDENTITY-7613c881806d453e"></a>
- **M09-CAP-IDENTITY-7613c881806d453e**: Stores pediatric orthopedic center information.
  Original IDs: 1032

<a id="M09-CAP-IDENTITY-4eb64c04a5621b34"></a>
- **M09-CAP-IDENTITY-4eb64c04a5621b34**: Operating Rooms
  Original IDs: 1032

<a id="M09-CAP-IDENTITY-e9426dd272d9aa70"></a>
- **M09-CAP-IDENTITY-e9426dd272d9aa70**: Rehabilitation
  Original IDs: 1032

<a id="M09-CAP-IDENTITY-e51dd3340d5d3f2f"></a>
- **M09-CAP-IDENTITY-e51dd3340d5d3f2f**: Professional profile of pediatric ophthalmologists.
  Original IDs: 1051

<a id="M09-CAP-IDENTITY-9e0d2a7e07d9142d"></a>
- **M09-CAP-IDENTITY-9e0d2a7e07d9142d**: Eye Disease Expertise
  Original IDs: 1051

<a id="M09-CAP-IDENTITY-b2a4219bff681f77"></a>
- **M09-CAP-IDENTITY-b2a4219bff681f77**: Stores pediatric ophthalmology center information.
  Original IDs: 1052

<a id="M09-CAP-IDENTITY-0f7aad8fad57e9cd"></a>
- **M09-CAP-IDENTITY-0f7aad8fad57e9cd**: Professional profile of pediatric ENT specialists.
  Original IDs: 1071

<a id="M09-CAP-IDENTITY-b5e56d4fd9f53a0a"></a>
- **M09-CAP-IDENTITY-b5e56d4fd9f53a0a**: Stores pediatric ENT clinic information.
  Original IDs: 1072

<a id="M09-CAP-IDENTITY-bc506fdefc6e7e7b"></a>
- **M09-CAP-IDENTITY-bc506fdefc6e7e7b**: Surgery
  Original IDs: 1072

<a id="M09-CAP-IDENTITY-abd090c864e78c97"></a>
- **M09-CAP-IDENTITY-abd090c864e78c97**: Professional profile of pediatric dermatologists.
  Original IDs: 1091

<a id="M09-CAP-IDENTITY-557a2b3908e72131"></a>
- **M09-CAP-IDENTITY-557a2b3908e72131**: Stores pediatric dermatology center information.
  Original IDs: 1092

<a id="M09-CAP-IDENTITY-3ad43067192a5233"></a>
- **M09-CAP-IDENTITY-3ad43067192a5233**: Laser Unit
  Original IDs: 1092

<a id="M09-CAP-IDENTITY-66462421da5bea5c"></a>
- **M09-CAP-IDENTITY-66462421da5bea5c**: Professional profile of pediatric allergists.
  Original IDs: 1111

<a id="M09-CAP-IDENTITY-e590049332f58a2d"></a>
- **M09-CAP-IDENTITY-e590049332f58a2d**: Allergy Expertise
  Original IDs: 1111

<a id="M09-CAP-IDENTITY-9f045d9b3d4ec4ba"></a>
- **M09-CAP-IDENTITY-9f045d9b3d4ec4ba**: Stores pediatric allergy center information.
  Original IDs: 1112

<a id="M09-CAP-IDENTITY-42ecf80f75b68da4"></a>
- **M09-CAP-IDENTITY-42ecf80f75b68da4**: Immunotherapy
  Original IDs: 1112

<a id="M09-CAP-IDENTITY-56ef72bd61b96ba5"></a>
- **M09-CAP-IDENTITY-56ef72bd61b96ba5**: Diagnostic Laboratory
  Original IDs: 1112

<a id="M09-CAP-IDENTITY-ac11ca69519aa147"></a>
- **M09-CAP-IDENTITY-ac11ca69519aa147**: # Gastroenterologist Profile
  Original IDs: 601

<a id="M09-CAP-IDENTITY-4fbeeb87456accf5"></a>
- **M09-CAP-IDENTITY-4fbeeb87456accf5**: Supports
  Original IDs: 601, 602, 631, 632, 651, 652, 671, 672, 691, 692, 721, 722, 761, 762, 781, 782, 801, 802, 821, 822, 841, 842, 861, 862, 881, 882, 901, 902, 921, 922, 941, 942, 961, 962, 981, 982, 991, 992, 1001, 1002, 1031, 1032, 1051, 1052, 1071, 1072, 1091, 1092, 1111, 1112

<a id="M09-CAP-IDENTITY-5ba74d8fcc7b20cc"></a>
- **M09-CAP-IDENTITY-5ba74d8fcc7b20cc**: Status
  Original IDs: 601, 602, 631, 632, 651, 652, 671, 672, 691, 692, 721, 722, 761, 762, 781, 782, 801, 802, 821, 822, 841, 842, 861, 862, 881, 882, 901, 902, 921, 922, 941, 942, 961, 962, 981, 982, 991, 992, 1001, 1002, 1051, 1052, 1071, 1072, 1091, 1092, 1111, 1112

<a id="M09-CAP-IDENTITY-d5232cbd3a326267"></a>
- **M09-CAP-IDENTITY-d5232cbd3a326267**: Documentation
  Original IDs: 601, 602, 631, 632, 651, 652, 671, 672, 691, 692, 721, 722, 761, 762, 781, 782, 801, 802, 821, 822, 841, 842, 861, 862, 881, 882, 901, 902, 921, 922, 941, 942, 961, 962, 981, 982, 991, 992, 1001, 1002, 1051, 1052, 1071, 1072, 1091, 1092, 1111, 1112

<a id="M09-CAP-IDENTITY-6f33acf3afb37064"></a>
- **M09-CAP-IDENTITY-6f33acf3afb37064**: ---
  Original IDs: 601, 602, 631, 632, 651, 652, 671, 672, 691, 692, 721, 722, 761, 762, 781, 782, 801, 802, 821, 822, 841, 842, 861, 862, 881, 882, 901, 902, 921, 922, 941, 942, 961, 962, 981, 982, 991, 992, 1001, 1002, 1031, 1032, 1051, 1052, 1071, 1072, 1091, 1092, 1111, 1112

<a id="M09-CAP-IDENTITY-f569fa7670590aeb"></a>
- **M09-CAP-IDENTITY-f569fa7670590aeb**: # Gastroenterology Clinic Profile
  Original IDs: 602

<a id="M09-CAP-IDENTITY-efe98dfb804a8f44"></a>
- **M09-CAP-IDENTITY-efe98dfb804a8f44**: # Nephrologist Profile
  Original IDs: 631

<a id="M09-CAP-IDENTITY-ca5e2f5b75a8df11"></a>
- **M09-CAP-IDENTITY-ca5e2f5b75a8df11**: # Nephrology Clinic Profile
  Original IDs: 632

<a id="M09-CAP-IDENTITY-687f62edcf434ec8"></a>
- **M09-CAP-IDENTITY-687f62edcf434ec8**: # Urologist Profile
  Original IDs: 651

<a id="M09-CAP-IDENTITY-caf5b0fa96fabe4d"></a>
- **M09-CAP-IDENTITY-caf5b0fa96fabe4d**: # Urology Clinic Profile
  Original IDs: 652

<a id="M09-CAP-IDENTITY-0f12e4d7fdf10d5b"></a>
- **M09-CAP-IDENTITY-0f12e4d7fdf10d5b**: # Andrologist Profile
  Original IDs: 671

<a id="M09-CAP-IDENTITY-717890d62f0899f1"></a>
- **M09-CAP-IDENTITY-717890d62f0899f1**: # Andrology Clinic Profile
  Original IDs: 672

<a id="M09-CAP-IDENTITY-885aab14009bf99c"></a>
- **M09-CAP-IDENTITY-885aab14009bf99c**: # Gynecologist Profile
  Original IDs: 691

<a id="M09-CAP-IDENTITY-43f53c97116835bb"></a>
- **M09-CAP-IDENTITY-43f53c97116835bb**: # Gynecology Clinic Profile
  Original IDs: 692

<a id="M09-CAP-IDENTITY-95cae3ec14ae983a"></a>
- **M09-CAP-IDENTITY-95cae3ec14ae983a**: # Obstetrician Profile
  Original IDs: 721

<a id="M09-CAP-IDENTITY-6210cd898efeb6f0"></a>
- **M09-CAP-IDENTITY-6210cd898efeb6f0**: # Obstetrics Clinic Profile
  Original IDs: 722

<a id="M09-CAP-IDENTITY-7eeca0ddaf681292"></a>
- **M09-CAP-IDENTITY-7eeca0ddaf681292**: # Reproductive Medicine Specialist Profile
  Original IDs: 761

<a id="M09-CAP-IDENTITY-fe44ae8e088cce0e"></a>
- **M09-CAP-IDENTITY-fe44ae8e088cce0e**: # Fertility Clinic Profile
  Original IDs: 762

<a id="M09-CAP-IDENTITY-2152ccd1db5e4e1c"></a>
- **M09-CAP-IDENTITY-2152ccd1db5e4e1c**: # Mammologist Profile
  Original IDs: 781

<a id="M09-CAP-IDENTITY-3681581a149391df"></a>
- **M09-CAP-IDENTITY-3681581a149391df**: # Breast Center Profile
  Original IDs: 782

<a id="M09-CAP-IDENTITY-3cbaaf135ec230f4"></a>
- **M09-CAP-IDENTITY-3cbaaf135ec230f4**: # Gynecologic Oncologist Profile
  Original IDs: 801

<a id="M09-CAP-IDENTITY-f2dcc78f6bbe3c9f"></a>
- **M09-CAP-IDENTITY-f2dcc78f6bbe3c9f**: # Gynecologic Oncology Center Profile
  Original IDs: 802

<a id="M09-CAP-IDENTITY-c40c5e2ce46cd437"></a>
- **M09-CAP-IDENTITY-c40c5e2ce46cd437**: # Pediatrician Profile
  Original IDs: 821

<a id="M09-CAP-IDENTITY-d3ae416d8f9efe85"></a>
- **M09-CAP-IDENTITY-d3ae416d8f9efe85**: # Children's Clinic Profile
  Original IDs: 822

<a id="M09-CAP-IDENTITY-6552cec1dda8232a"></a>
- **M09-CAP-IDENTITY-6552cec1dda8232a**: # Pediatric Cardiologist Profile
  Original IDs: 841

<a id="M09-CAP-IDENTITY-33c6efb713e8defa"></a>
- **M09-CAP-IDENTITY-33c6efb713e8defa**: # Pediatric Cardiology Center Profile
  Original IDs: 842

<a id="M09-CAP-IDENTITY-90875e36c5e8bc13"></a>
- **M09-CAP-IDENTITY-90875e36c5e8bc13**: # Pediatric Endocrinologist Profile
  Original IDs: 861

<a id="M09-CAP-IDENTITY-7e5e5d0f135c5dc9"></a>
- **M09-CAP-IDENTITY-7e5e5d0f135c5dc9**: # Pediatric Endocrinology Center Profile
  Original IDs: 862

<a id="M09-CAP-IDENTITY-5061025c320e85cc"></a>
- **M09-CAP-IDENTITY-5061025c320e85cc**: # Pediatric Neurologist Profile
  Original IDs: 881

<a id="M09-CAP-IDENTITY-0e2d38ab3840b699"></a>
- **M09-CAP-IDENTITY-0e2d38ab3840b699**: # Pediatric Neurology Center Profile
  Original IDs: 882

<a id="M09-CAP-IDENTITY-6433849aa7094066"></a>
- **M09-CAP-IDENTITY-6433849aa7094066**: # Pediatric Pulmonologist Profile
  Original IDs: 901

<a id="M09-CAP-IDENTITY-5b2614bda8a45dfd"></a>
- **M09-CAP-IDENTITY-5b2614bda8a45dfd**: # Pediatric Pulmonology Center Profile
  Original IDs: 902

<a id="M09-CAP-IDENTITY-d1a2ff07838bbb71"></a>
- **M09-CAP-IDENTITY-d1a2ff07838bbb71**: # Pediatric Nephrologist Profile
  Original IDs: 921

<a id="M09-CAP-IDENTITY-38980d3bf08d643e"></a>
- **M09-CAP-IDENTITY-38980d3bf08d643e**: # Pediatric Nephrology Center Profile
  Original IDs: 922

<a id="M09-CAP-IDENTITY-a5240d8e14ca4fb9"></a>
- **M09-CAP-IDENTITY-a5240d8e14ca4fb9**: # Pediatric Gastroenterologist Profile
  Original IDs: 941

<a id="M09-CAP-IDENTITY-5bf1d3b662e9f48d"></a>
- **M09-CAP-IDENTITY-5bf1d3b662e9f48d**: # Pediatric Gastroenterology Center Profile
  Original IDs: 942

<a id="M09-CAP-IDENTITY-ac2a54dc4ff16d8a"></a>
- **M09-CAP-IDENTITY-ac2a54dc4ff16d8a**: # Pediatric Hematologist Profile
  Original IDs: 961

<a id="M09-CAP-IDENTITY-4c335fedd07534bd"></a>
- **M09-CAP-IDENTITY-4c335fedd07534bd**: # Pediatric Hematology Center Profile
  Original IDs: 962

<a id="M09-CAP-IDENTITY-c22fb2d75b52512a"></a>
- **M09-CAP-IDENTITY-c22fb2d75b52512a**: # Pediatric Rheumatologist Profile
  Original IDs: 981

<a id="M09-CAP-IDENTITY-bd7e78c694876b7e"></a>
- **M09-CAP-IDENTITY-bd7e78c694876b7e**: # Pediatric Rheumatology Center Profile
  Original IDs: 982

<a id="M09-CAP-IDENTITY-8ac3a576242e74c4"></a>
- **M09-CAP-IDENTITY-8ac3a576242e74c4**: # Pediatric Immunologist Profile
  Original IDs: 991

<a id="M09-CAP-IDENTITY-315650fd1adf754d"></a>
- **M09-CAP-IDENTITY-315650fd1adf754d**: # Pediatric Immunology Center Profile
  Original IDs: 992

<a id="M09-CAP-IDENTITY-989005540cd21f66"></a>
- **M09-CAP-IDENTITY-989005540cd21f66**: # Pediatric Dermatologist Profile
  Original IDs: 1091

<a id="M09-CAP-IDENTITY-01ccb7d2b5e8d20c"></a>
- **M09-CAP-IDENTITY-01ccb7d2b5e8d20c**: # Pediatric Dermatology Center Profile
  Original IDs: 1092

[Delta migration](../../../audit/master-09/requirement_migration_delta.json) · [Security readiness additions](../../engineering/security-readiness-addendum.md).
