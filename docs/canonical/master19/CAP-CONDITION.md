# CORE-CAP-CONDITION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## condition-assertions-and-diagnosis-api

Existing Condition owns attributed diagnoses and clinical-assessment assertions with code/terminology version, clinical/verification status, onset/resolution and correction provenance. Patient-reported disease, confirmed diagnosis and AI explanation are distinct. Soft deletion preserves protected history under policy and never erases an active clinical hazard. FHIR/GDPR/HIPAA source labels are targets, not certified compatibility or legal compliance.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 9 / condition-assertions-and-diagnosis-api: Diagnoses Table — Stores all user diagnoses and medical conditions.
- Original 58 / condition-assertions-and-diagnosis-api: Diagnoses API — Defines all API endpoints for diagnosis management.
- Original 192 / condition-assertions-and-diagnosis-api: Genetic Conditions Module — Supports secure attachment of genetic reports.
- Original 197 / condition-assertions-and-diagnosis-api: Infectious Disease Status — Access is fully controlled by the patient according to privacy settings.

## Requirements and source metadata

<a id="M19-CAP-CONDITION-90f4c3e05615654b"></a>
- **M19-CAP-CONDITION-90f4c3e05615654b**: # Diagnoses Table
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-2f5fdcca89ef8e56"></a>
- **M19-CAP-CONDITION-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-b13103604070cdbe"></a>
- **M19-CAP-CONDITION-b13103604070cdbe**: Stores all user diagnoses and medical conditions.
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-6f33acf3afb37064"></a>
- **M19-CAP-CONDITION-6f33acf3afb37064**: ---
  Applies to original IDs: 9, 58, 192, 197.

<a id="M19-CAP-CONDITION-90dc9b75b60f53a5"></a>
- **M19-CAP-CONDITION-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-c91610423a46692c"></a>
- **M19-CAP-CONDITION-c91610423a46692c**: id (UUID)
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-ff6fb316f9bc6c33"></a>
- **M19-CAP-CONDITION-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-c559823f6e5c0162"></a>
- **M19-CAP-CONDITION-c559823f6e5c0162**: medical_profile_id
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-b09aad0b30a9bfb3"></a>
- **M19-CAP-CONDITION-b09aad0b30a9bfb3**: icd10_code
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-93a8c17e59e98468"></a>
- **M19-CAP-CONDITION-93a8c17e59e98468**: icd11_code
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-bdcdb450af78c467"></a>
- **M19-CAP-CONDITION-bdcdb450af78c467**: diagnosis_name
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-047d1678ea85015b"></a>
- **M19-CAP-CONDITION-047d1678ea85015b**: diagnosis_type
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-fee7e746b8c03bf5"></a>
- **M19-CAP-CONDITION-fee7e746b8c03bf5**: severity
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-5754dd8ea427e6f0"></a>
- **M19-CAP-CONDITION-5754dd8ea427e6f0**: status
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-485169b886eb75ea"></a>
- **M19-CAP-CONDITION-485169b886eb75ea**: date_diagnosed
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-f67cd71a96f1144e"></a>
- **M19-CAP-CONDITION-f67cd71a96f1144e**: diagnosed_by
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-d8781eb949ab5813"></a>
- **M19-CAP-CONDITION-d8781eb949ab5813**: hospital_id
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-faea4e7b11fd2247"></a>
- **M19-CAP-CONDITION-faea4e7b11fd2247**: doctor_id
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-6000b5b8632914a0"></a>
- **M19-CAP-CONDITION-6000b5b8632914a0**: notes
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-c39f9ea0f704e671"></a>
- **M19-CAP-CONDITION-c39f9ea0f704e671**: requires_medication
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-0fa1834d23c7602e"></a>
- **M19-CAP-CONDITION-0fa1834d23c7602e**: requires_monitoring
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-e336980347541b6e"></a>
- **M19-CAP-CONDITION-e336980347541b6e**: is_chronic
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-5342ca826059cf95"></a>
- **M19-CAP-CONDITION-5342ca826059cf95**: is_infectious
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-bcc951dbdead2bf5"></a>
- **M19-CAP-CONDITION-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-51db2c3a3a174a78"></a>
- **M19-CAP-CONDITION-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-2fac6cbf308c244b"></a>
- **M19-CAP-CONDITION-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-5f124f9e42776b79"></a>
- **M19-CAP-CONDITION-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-46172ef655d51ea4"></a>
- **M19-CAP-CONDITION-46172ef655d51ea4**: ├── User
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-41bd3320fb6ee128"></a>
- **M19-CAP-CONDITION-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-b3a8fb58abb0fac0"></a>
- **M19-CAP-CONDITION-b3a8fb58abb0fac0**: ├── Doctor
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-4aa0cb20484238f6"></a>
- **M19-CAP-CONDITION-4aa0cb20484238f6**: ├── Hospital
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-ca0910ed36c02588"></a>
- **M19-CAP-CONDITION-ca0910ed36c02588**: ├── Medicines
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-d3290df0dc43733d"></a>
- **M19-CAP-CONDITION-d3290df0dc43733d**: ├── Medical Documents
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-93522f774f6d0bd5"></a>
- **M19-CAP-CONDITION-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-1fe58243e9dd99aa"></a>
- **M19-CAP-CONDITION-1fe58243e9dd99aa**: ├── Travel Mode
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-37bfdffca1a32095"></a>
- **M19-CAP-CONDITION-37bfdffca1a32095**: Future Features
  Applies to original IDs: 9, 58.

<a id="M19-CAP-CONDITION-a82d3644aa77acf9"></a>
- **M19-CAP-CONDITION-a82d3644aa77acf9**: ICD-10 search
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-f66706c4ab32b9c0"></a>
- **M19-CAP-CONDITION-f66706c4ab32b9c0**: ICD-11 support
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-e76764393f5f0ff1"></a>
- **M19-CAP-CONDITION-e76764393f5f0ff1**: AI explanation
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-29117c937a39ac2e"></a>
- **M19-CAP-CONDITION-29117c937a39ac2e**: Disease progression
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-d4f350d51cc0b743"></a>
- **M19-CAP-CONDITION-d4f350d51cc0b743**: Medical recommendations
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-8ae5ceb5a31ba751"></a>
- **M19-CAP-CONDITION-8ae5ceb5a31ba751**: Treatment protocols
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-a225a03e5db3fe72"></a>
- **M19-CAP-CONDITION-a225a03e5db3fe72**: Automatic translation
  Applies to original IDs: 9.

<a id="M19-CAP-CONDITION-5ba74d8fcc7b20cc"></a>
- **M19-CAP-CONDITION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 9, 58, 192, 197.

<a id="M19-CAP-CONDITION-d5232cbd3a326267"></a>
- **M19-CAP-CONDITION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 9, 58, 192, 197.

<a id="M19-CAP-CONDITION-f2efd6df06acbd10"></a>
- **M19-CAP-CONDITION-f2efd6df06acbd10**: # Diagnoses API
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-13719c6544c773e9"></a>
- **M19-CAP-CONDITION-13719c6544c773e9**: Defines all API endpoints for diagnosis management.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-0e090c84d48e1d90"></a>
- **M19-CAP-CONDITION-0e090c84d48e1d90**: # Get Diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-146b2b9b39d38b6e"></a>
- **M19-CAP-CONDITION-146b2b9b39d38b6e**: GET /diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-e84f9d5232fc36dc"></a>
- **M19-CAP-CONDITION-e84f9d5232fc36dc**: Returns all diagnoses for the authenticated user.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-3c5e5bf12f398b54"></a>
- **M19-CAP-CONDITION-3c5e5bf12f398b54**: Filters
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-df43fbf9b213c607"></a>
- **M19-CAP-CONDITION-df43fbf9b213c607**: Active
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-f4bb36b87df64f44"></a>
- **M19-CAP-CONDITION-f4bb36b87df64f44**: Resolved
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-440eef1eba7d0912"></a>
- **M19-CAP-CONDITION-440eef1eba7d0912**: Chronic
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-e097f40d63303923"></a>
- **M19-CAP-CONDITION-e097f40d63303923**: ICD Code
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-36d2fa83c0fc6c01"></a>
- **M19-CAP-CONDITION-36d2fa83c0fc6c01**: Date Range
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-af6be95b5e64aa0d"></a>
- **M19-CAP-CONDITION-af6be95b5e64aa0d**: # Get Diagnosis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-df49f8b08daec2f7"></a>
- **M19-CAP-CONDITION-df49f8b08daec2f7**: GET /diagnoses/{id}
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-e762aa4a423fad8f"></a>
- **M19-CAP-CONDITION-e762aa4a423fad8f**: Returns detailed diagnosis information.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-bbddb2c54785fbd8"></a>
- **M19-CAP-CONDITION-bbddb2c54785fbd8**: # Create Diagnosis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ac27c0e8e88d9e96"></a>
- **M19-CAP-CONDITION-ac27c0e8e88d9e96**: POST /diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-7e78c9e00e0ea8cd"></a>
- **M19-CAP-CONDITION-7e78c9e00e0ea8cd**: Fields
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-332a456d1af37f5e"></a>
- **M19-CAP-CONDITION-332a456d1af37f5e**: ICD-10 Code
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ae1b7a9ec412cff4"></a>
- **M19-CAP-CONDITION-ae1b7a9ec412cff4**: ICD-11 Code (optional)
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ada43091f1af4032"></a>
- **M19-CAP-CONDITION-ada43091f1af4032**: Diagnosis Name
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-26fd71fc64cb047c"></a>
- **M19-CAP-CONDITION-26fd71fc64cb047c**: Description
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-0dbeacb9f9ac3f6a"></a>
- **M19-CAP-CONDITION-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-a1457e84ed0c689f"></a>
- **M19-CAP-CONDITION-a1457e84ed0c689f**: Diagnosed Date
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-52a3545c159968e0"></a>
- **M19-CAP-CONDITION-52a3545c159968e0**: Doctor
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-9292031266b0e334"></a>
- **M19-CAP-CONDITION-9292031266b0e334**: Hospital
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-2d791cbb8f7adb9b"></a>
- **M19-CAP-CONDITION-2d791cbb8f7adb9b**: Notes
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-387dd46f12f80a8a"></a>
- **M19-CAP-CONDITION-387dd46f12f80a8a**: # Update Diagnosis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-9bc4ad3f8ad98fa8"></a>
- **M19-CAP-CONDITION-9bc4ad3f8ad98fa8**: PUT /diagnoses/{id}
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-a9591541d510c2e8"></a>
- **M19-CAP-CONDITION-a9591541d510c2e8**: Updates diagnosis information.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-fa39123fa5def4ba"></a>
- **M19-CAP-CONDITION-fa39123fa5def4ba**: # Delete Diagnosis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-52ed08d867340fa0"></a>
- **M19-CAP-CONDITION-52ed08d867340fa0**: DELETE /diagnoses/{id}
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-9bf8910bfd2b51c4"></a>
- **M19-CAP-CONDITION-9bf8910bfd2b51c4**: Soft delete.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-08f8ff0730b034f3"></a>
- **M19-CAP-CONDITION-08f8ff0730b034f3**: # Chronic Diseases
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-70cd1e5808605e4b"></a>
- **M19-CAP-CONDITION-70cd1e5808605e4b**: GET /diagnoses/chronic
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-bdf52e69fce9081e"></a>
- **M19-CAP-CONDITION-bdf52e69fce9081e**: Returns active chronic diseases.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-be5ae613ecd25919"></a>
- **M19-CAP-CONDITION-be5ae613ecd25919**: # Diagnosis Timeline
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4c164b298624cdc6"></a>
- **M19-CAP-CONDITION-4c164b298624cdc6**: GET /diagnoses/timeline
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4432ebbdf603a373"></a>
- **M19-CAP-CONDITION-4432ebbdf603a373**: Returns diagnosis history sorted by date.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-3380afa1da2c027f"></a>
- **M19-CAP-CONDITION-3380afa1da2c027f**: # Diagnosis Statistics
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-72f86e0efda7b0af"></a>
- **M19-CAP-CONDITION-72f86e0efda7b0af**: GET /diagnoses/statistics
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-0f6ce5db1025be5d"></a>
- **M19-CAP-CONDITION-0f6ce5db1025be5d**: Returns
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ba428346da66c368"></a>
- **M19-CAP-CONDITION-ba428346da66c368**: Total Diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-e8c7fe0d065a8d3e"></a>
- **M19-CAP-CONDITION-e8c7fe0d065a8d3e**: Active Diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-5dfc4279dcad6281"></a>
- **M19-CAP-CONDITION-5dfc4279dcad6281**: Chronic Diseases
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-e1b779eb1216e80d"></a>
- **M19-CAP-CONDITION-e1b779eb1216e80d**: Resolved Diagnoses
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-8d9a6871aa6e824f"></a>
- **M19-CAP-CONDITION-8d9a6871aa6e824f**: # Search Diagnosis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-b992d3716c2d478e"></a>
- **M19-CAP-CONDITION-b992d3716c2d478e**: GET /diagnoses/search
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4fbeeb87456accf5"></a>
- **M19-CAP-CONDITION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-01a782ab6c7d0e5e"></a>
- **M19-CAP-CONDITION-01a782ab6c7d0e5e**: ICD-10
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4927cf33d751757e"></a>
- **M19-CAP-CONDITION-4927cf33d751757e**: ICD-11
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-a8c13c920ebc87a7"></a>
- **M19-CAP-CONDITION-a8c13c920ebc87a7**: Name
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-3241e3b60ff9dd72"></a>
- **M19-CAP-CONDITION-3241e3b60ff9dd72**: Category
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4b21169d77cc29db"></a>
- **M19-CAP-CONDITION-4b21169d77cc29db**: # AI Diagnosis Summary
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-15b49b0b82effca0"></a>
- **M19-CAP-CONDITION-15b49b0b82effca0**: POST /diagnoses/summary
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-3cfe15fa052d7973"></a>
- **M19-CAP-CONDITION-3cfe15fa052d7973**: Returns AI-generated diagnosis overview.
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ab2fd2438e03fce3"></a>
- **M19-CAP-CONDITION-ab2fd2438e03fce3**: # Response Example
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-d6ea1bdd127bdf47"></a>
- **M19-CAP-CONDITION-d6ea1bdd127bdf47**: {
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-d9b76fddc788880a"></a>
- **M19-CAP-CONDITION-d9b76fddc788880a**: "success": true,
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-f4eea15f7a9c414b"></a>
- **M19-CAP-CONDITION-f4eea15f7a9c414b**: "data": {
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-91d6832251ce1c38"></a>
- **M19-CAP-CONDITION-91d6832251ce1c38**: "id": "...",
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-d672e84ac082afb1"></a>
- **M19-CAP-CONDITION-d672e84ac082afb1**: "icd10": "E11",
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-cc374c6a6b2b353a"></a>
- **M19-CAP-CONDITION-cc374c6a6b2b353a**: "name": "Type 2 Diabetes",
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-dd3c7e3a6842a5e5"></a>
- **M19-CAP-CONDITION-dd3c7e3a6842a5e5**: "status": "Active"
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ac89c5c4e185f31e"></a>
- **M19-CAP-CONDITION-ac89c5c4e185f31e**: }
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-efc101e38d418651"></a>
- **M19-CAP-CONDITION-efc101e38d418651**: # Security
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-ca51b08733e66b72"></a>
- **M19-CAP-CONDITION-ca51b08733e66b72**: JWT Required
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-c48f0e7bb6f278e1"></a>
- **M19-CAP-CONDITION-c48f0e7bb6f278e1**: RBAC
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-d20a95b6b63719a7"></a>
- **M19-CAP-CONDITION-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-a6f838712ba6cf93"></a>
- **M19-CAP-CONDITION-a6f838712ba6cf93**: FHIR Compatible
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-dbd1329f16de55fa"></a>
- **M19-CAP-CONDITION-dbd1329f16de55fa**: GDPR
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-c71fe81b3339854c"></a>
- **M19-CAP-CONDITION-c71fe81b3339854c**: HIPAA
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-9879a69a15c5a50a"></a>
- **M19-CAP-CONDITION-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-6b5a53cdf9b18696"></a>
- **M19-CAP-CONDITION-6b5a53cdf9b18696**: ├── Allergies
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-a7f2ddd3ac9459b5"></a>
- **M19-CAP-CONDITION-a7f2ddd3ac9459b5**: ├── Telemedicine
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-efa2a8ae50719ab3"></a>
- **M19-CAP-CONDITION-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-876cc7b538f6ce89"></a>
- **M19-CAP-CONDITION-876cc7b538f6ce89**: SNOMED CT Support
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-0a6ff6d9f397f60a"></a>
- **M19-CAP-CONDITION-0a6ff6d9f397f60a**: AI Disease Progression Analysis
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-271ba7d1216b2ba8"></a>
- **M19-CAP-CONDITION-271ba7d1216b2ba8**: Clinical Decision Support
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-d02d601a03a10604"></a>
- **M19-CAP-CONDITION-d02d601a03a10604**: Disease Risk Prediction
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-2cfd07c027b7d4f0"></a>
- **M19-CAP-CONDITION-2cfd07c027b7d4f0**: WHO Disease Classification
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-4e54d328853dd05c"></a>
- **M19-CAP-CONDITION-4e54d328853dd05c**: Automatic ICD Mapping
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-f401a908c3a8b952"></a>
- **M19-CAP-CONDITION-f401a908c3a8b952**: International Diagnosis Exchange
  Applies to original IDs: 58.

<a id="M19-CAP-CONDITION-bc53843a280fa825"></a>
- **M19-CAP-CONDITION-bc53843a280fa825**: # Genetic Conditions
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-f46e10af70055b66"></a>
- **M19-CAP-CONDITION-f46e10af70055b66**: Stores
  Applies to original IDs: 192, 197.

<a id="M19-CAP-CONDITION-15597d2310c53fe9"></a>
- **M19-CAP-CONDITION-15597d2310c53fe9**: Confirmed Genetic Disorders
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-c5949143452e135b"></a>
- **M19-CAP-CONDITION-c5949143452e135b**: Gene Variant
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-dadcf4acf648661b"></a>
- **M19-CAP-CONDITION-dadcf4acf648661b**: Test Date
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-a10a70546ef9f3c2"></a>
- **M19-CAP-CONDITION-a10a70546ef9f3c2**: Laboratory
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-f55c9043fbee3135"></a>
- **M19-CAP-CONDITION-f55c9043fbee3135**: Clinical Significance
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-c1fc9a52c89f5744"></a>
- **M19-CAP-CONDITION-c1fc9a52c89f5744**: Supports secure attachment of genetic reports.
  Applies to original IDs: 192.

<a id="M19-CAP-CONDITION-9cf3ec5fdd6d5446"></a>
- **M19-CAP-CONDITION-9cf3ec5fdd6d5446**: # Infectious Disease Module
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-b055b0edc9cf56a0"></a>
- **M19-CAP-CONDITION-b055b0edc9cf56a0**: Hepatitis
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-fa76936bda21b8f0"></a>
- **M19-CAP-CONDITION-fa76936bda21b8f0**: HIV
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-38f69a02cfe1c1a4"></a>
- **M19-CAP-CONDITION-38f69a02cfe1c1a4**: Tuberculosis
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-a4d252c9ce82c4aa"></a>
- **M19-CAP-CONDITION-a4d252c9ce82c4aa**: COVID History
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-79baa4c6d2e58c3f"></a>
- **M19-CAP-CONDITION-79baa4c6d2e58c3f**: Other Relevant Infections
  Applies to original IDs: 197.

<a id="M19-CAP-CONDITION-6c762ea7f64b08b9"></a>
- **M19-CAP-CONDITION-6c762ea7f64b08b9**: Access is fully controlled by the patient according to privacy settings.
  Applies to original IDs: 197.
