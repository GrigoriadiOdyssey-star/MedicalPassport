# CORE-CAP-MEDICATION — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## registry-medication

Medication owns source-scoped controlled/injectable medication reference and reported-use context. Registry inclusion does not confer prescription, administration or controlled-substance authority.

Acceptance additions: Preserve source identity, source-specific fields, verification, chronology and correction lineage. Test unknown versus absent states, wrong-patient/tenant binding, stale or revoked access, conflicting reports and attributed human disposition. Clinical actions and sensitive pediatric/guardian disclosure require separately approved workflows; no inferred automation or compatibility approval.

## medication-record-profiles

Medication owns attributed medication-reference and reported-use records, timelines and bounded source API intent. Image recognition yields candidate product matches, not confirmed drug identity. Prescription, dispensing and administration remain separate owners.

Acceptance additions: Preserve product/strength/form/route, record source/version, reported versus verified state and contradictory exposures. Medication image matching must abstain on ambiguity. Historical API/table fields do not authorize bulk access or autonomous medication changes.

## Source scope

- Original 424 / registry-medication: Controlled Medication Registry — Stores information about controlled prescription medicines.
- Original 433 / registry-medication: Injectable Medication Registry — Stores injectable treatment history.
- Original 8 / medication-record-profiles: Medicines Table — Stores all medicines prescribed or taken by the user.
- Original 57 / medication-record-profiles: Medicines API — Defines all API endpoints for medicine management.
- Original 106 / medication-record-profiles: Medicine Management — Track medicine, dose, frequency, reminders and course completion with product identification support.
- Original 159 / medication-record-profiles: Medicine Interaction Timeline — Present temporal medication interactions, severity and clinician recommendations.
- Original 411 / medication-record-profiles: Medication Image Recognition — Identifies medications using package images.

## Requirements and source metadata

<a id="M17-CAP-MEDICATION-ea36a77a5c73e1bd"></a>
- **M17-CAP-MEDICATION-ea36a77a5c73e1bd**: # Controlled Medication Registry
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-92b69e7f2436036e"></a>
- **M17-CAP-MEDICATION-92b69e7f2436036e**: Stores information about controlled prescription medicines.
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-4fbeeb87456accf5"></a>
- **M17-CAP-MEDICATION-4fbeeb87456accf5**: Supports
  Applies to original IDs: 424, 433, 57, 106, 411.

<a id="M17-CAP-MEDICATION-85646ae07af09906"></a>
- **M17-CAP-MEDICATION-85646ae07af09906**: Prescription Number
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-10f35868ff6e2c00"></a>
- **M17-CAP-MEDICATION-10f35868ff6e2c00**: Issue Date
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-337b49704d348de9"></a>
- **M17-CAP-MEDICATION-337b49704d348de9**: Expiration Date
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-b4e8f1143154855c"></a>
- **M17-CAP-MEDICATION-b4e8f1143154855c**: Authorized Quantity
  Applies to original IDs: 424.

<a id="M17-CAP-MEDICATION-5ba74d8fcc7b20cc"></a>
- **M17-CAP-MEDICATION-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 424, 433, 8, 57, 106, 159, 411.

<a id="M17-CAP-MEDICATION-d5232cbd3a326267"></a>
- **M17-CAP-MEDICATION-d5232cbd3a326267**: Documentation
  Applies to original IDs: 424, 433, 8, 57, 106, 159, 411.

<a id="M17-CAP-MEDICATION-6f33acf3afb37064"></a>
- **M17-CAP-MEDICATION-6f33acf3afb37064**: ---
  Applies to original IDs: 424, 433, 8, 57, 106, 159, 411.

<a id="M17-CAP-MEDICATION-6be8212ec4546694"></a>
- **M17-CAP-MEDICATION-6be8212ec4546694**: # Injectable Medication Registry
  Applies to original IDs: 433.

<a id="M17-CAP-MEDICATION-4ec500e954e4887a"></a>
- **M17-CAP-MEDICATION-4ec500e954e4887a**: Stores injectable treatment history.
  Applies to original IDs: 433.

<a id="M17-CAP-MEDICATION-3cfa39200ce0ea10"></a>
- **M17-CAP-MEDICATION-3cfa39200ce0ea10**: Medication
  Applies to original IDs: 433.

<a id="M17-CAP-MEDICATION-364a4c7e3ce06ed8"></a>
- **M17-CAP-MEDICATION-364a4c7e3ce06ed8**: Dose
  Applies to original IDs: 433, 106.

<a id="M17-CAP-MEDICATION-b91db9f6549d3ea5"></a>
- **M17-CAP-MEDICATION-b91db9f6549d3ea5**: Injection Site
  Applies to original IDs: 433.

<a id="M17-CAP-MEDICATION-1c65129f436c9bd3"></a>
- **M17-CAP-MEDICATION-1c65129f436c9bd3**: Administration Date
  Applies to original IDs: 433.

<a id="M17-CAP-MEDICATION-2aacb3ab3ed637cc"></a>
- **M17-CAP-MEDICATION-2aacb3ab3ed637cc**: # Medicines Table
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-2f5fdcca89ef8e56"></a>
- **M17-CAP-MEDICATION-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 8, 57.

<a id="M17-CAP-MEDICATION-7e30e5f957121eb1"></a>
- **M17-CAP-MEDICATION-7e30e5f957121eb1**: Stores all medicines prescribed or taken by the user.
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-90dc9b75b60f53a5"></a>
- **M17-CAP-MEDICATION-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-c91610423a46692c"></a>
- **M17-CAP-MEDICATION-c91610423a46692c**: id (UUID)
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-ff6fb316f9bc6c33"></a>
- **M17-CAP-MEDICATION-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-c559823f6e5c0162"></a>
- **M17-CAP-MEDICATION-c559823f6e5c0162**: medical_profile_id
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-fa6c5fd33c08e888"></a>
- **M17-CAP-MEDICATION-fa6c5fd33c08e888**: brand_name
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-7a01795851ce1ec8"></a>
- **M17-CAP-MEDICATION-7a01795851ce1ec8**: international_name
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-6767cdc9d05e8027"></a>
- **M17-CAP-MEDICATION-6767cdc9d05e8027**: active_substance
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-52e301826e8f4931"></a>
- **M17-CAP-MEDICATION-52e301826e8f4931**: dosage
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-d26dbc35888f1827"></a>
- **M17-CAP-MEDICATION-d26dbc35888f1827**: dosage_unit
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-47a8bff144b08a61"></a>
- **M17-CAP-MEDICATION-47a8bff144b08a61**: form
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-1af2f04633c5e56b"></a>
- **M17-CAP-MEDICATION-1af2f04633c5e56b**: manufacturer
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-b1ab63e38c3401d1"></a>
- **M17-CAP-MEDICATION-b1ab63e38c3401d1**: prescription_required
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-845280d2ad99c209"></a>
- **M17-CAP-MEDICATION-845280d2ad99c209**: prescription_id
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-882f70af91cfd264"></a>
- **M17-CAP-MEDICATION-882f70af91cfd264**: prescribing_doctor
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-8c3545c02195074b"></a>
- **M17-CAP-MEDICATION-8c3545c02195074b**: start_date
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-85be9f327764f231"></a>
- **M17-CAP-MEDICATION-85be9f327764f231**: end_date
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-0fca842eac3b1fa9"></a>
- **M17-CAP-MEDICATION-0fca842eac3b1fa9**: frequency
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-eb318158d95b5821"></a>
- **M17-CAP-MEDICATION-eb318158d95b5821**: times_per_day
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-31b71cf4d4253a92"></a>
- **M17-CAP-MEDICATION-31b71cf4d4253a92**: instructions
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-0a1380cf6500fb89"></a>
- **M17-CAP-MEDICATION-0a1380cf6500fb89**: food_interaction
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-7c7d14ffa47d6d06"></a>
- **M17-CAP-MEDICATION-7c7d14ffa47d6d06**: alcohol_warning
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-d3fbd213aad6f2b4"></a>
- **M17-CAP-MEDICATION-d3fbd213aad6f2b4**: driving_warning
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-accb62e35da36651"></a>
- **M17-CAP-MEDICATION-accb62e35da36651**: country_of_origin
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-7d1dcde0969d8db5"></a>
- **M17-CAP-MEDICATION-7d1dcde0969d8db5**: alternative_medicines
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-d0928e023c830479"></a>
- **M17-CAP-MEDICATION-d0928e023c830479**: barcode
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-5acef6b6ce9b6225"></a>
- **M17-CAP-MEDICATION-5acef6b6ce9b6225**: qr_code
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-092522435299be0d"></a>
- **M17-CAP-MEDICATION-092522435299be0d**: reminder_enabled
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-5754dd8ea427e6f0"></a>
- **M17-CAP-MEDICATION-5754dd8ea427e6f0**: status
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-bcc951dbdead2bf5"></a>
- **M17-CAP-MEDICATION-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-51db2c3a3a174a78"></a>
- **M17-CAP-MEDICATION-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-2fac6cbf308c244b"></a>
- **M17-CAP-MEDICATION-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-1dcc674f28b67008"></a>
- **M17-CAP-MEDICATION-1dcc674f28b67008**: Medicine
  Applies to original IDs: 8, 106.

<a id="M17-CAP-MEDICATION-46172ef655d51ea4"></a>
- **M17-CAP-MEDICATION-46172ef655d51ea4**: ├── User
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-41bd3320fb6ee128"></a>
- **M17-CAP-MEDICATION-41bd3320fb6ee128**: ├── Medical Profile
  Applies to original IDs: 8, 57.

<a id="M17-CAP-MEDICATION-13ff240df46fab2e"></a>
- **M17-CAP-MEDICATION-13ff240df46fab2e**: ├── Prescription
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-81ba0891f795d2c1"></a>
- **M17-CAP-MEDICATION-81ba0891f795d2c1**: ├── QR System
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-225d721817a80b2f"></a>
- **M17-CAP-MEDICATION-225d721817a80b2f**: ├── Notifications
  Applies to original IDs: 8, 57.

<a id="M17-CAP-MEDICATION-93522f774f6d0bd5"></a>
- **M17-CAP-MEDICATION-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-1fe58243e9dd99aa"></a>
- **M17-CAP-MEDICATION-1fe58243e9dd99aa**: ├── Travel Mode
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-37bfdffca1a32095"></a>
- **M17-CAP-MEDICATION-37bfdffca1a32095**: Future Features
  Applies to original IDs: 8, 57.

<a id="M17-CAP-MEDICATION-363042937c804102"></a>
- **M17-CAP-MEDICATION-363042937c804102**: Drug interaction checker
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-b384fa6bc32183de"></a>
- **M17-CAP-MEDICATION-b384fa6bc32183de**: Alternative medicines by country
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-c57f7bf9184a0e4b"></a>
- **M17-CAP-MEDICATION-c57f7bf9184a0e4b**: Local pharmacy availability
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-114c285e7d1941f5"></a>
- **M17-CAP-MEDICATION-114c285e7d1941f5**: AI medicine explanation
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-a225a03e5db3fe72"></a>
- **M17-CAP-MEDICATION-a225a03e5db3fe72**: Automatic translation
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-a147b723cbfe3314"></a>
- **M17-CAP-MEDICATION-a147b723cbfe3314**: Import from prescription
  Applies to original IDs: 8.

<a id="M17-CAP-MEDICATION-166b6977594a3f61"></a>
- **M17-CAP-MEDICATION-166b6977594a3f61**: # Medicines API
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-39d1929043216286"></a>
- **M17-CAP-MEDICATION-39d1929043216286**: Defines all API endpoints for medicine management.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-7dd2fa01b13b80db"></a>
- **M17-CAP-MEDICATION-7dd2fa01b13b80db**: # Get Medicines
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-c50f4663d2a6cd50"></a>
- **M17-CAP-MEDICATION-c50f4663d2a6cd50**: GET /medicines
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-b2dae077bcb3aa1c"></a>
- **M17-CAP-MEDICATION-b2dae077bcb3aa1c**: Returns all active medicines.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-3c5e5bf12f398b54"></a>
- **M17-CAP-MEDICATION-3c5e5bf12f398b54**: Filters
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-df43fbf9b213c607"></a>
- **M17-CAP-MEDICATION-df43fbf9b213c607**: Active
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-65d7e6c9febb1335"></a>
- **M17-CAP-MEDICATION-65d7e6c9febb1335**: Completed
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-580c32d823047de1"></a>
- **M17-CAP-MEDICATION-580c32d823047de1**: Country
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-41cd1f36f6a83f8a"></a>
- **M17-CAP-MEDICATION-41cd1f36f6a83f8a**: Prescription Required
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-c7408055fa0de6ac"></a>
- **M17-CAP-MEDICATION-c7408055fa0de6ac**: Medicine Type
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-cc058d0ac58d7d25"></a>
- **M17-CAP-MEDICATION-cc058d0ac58d7d25**: # Get Medicine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-815d9ef5f85fd0df"></a>
- **M17-CAP-MEDICATION-815d9ef5f85fd0df**: GET /medicines/{id}
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-55b49ba095b6d926"></a>
- **M17-CAP-MEDICATION-55b49ba095b6d926**: Returns detailed medicine information.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-4f49a518990588fb"></a>
- **M17-CAP-MEDICATION-4f49a518990588fb**: # Add Medicine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-18f9a711777ccafd"></a>
- **M17-CAP-MEDICATION-18f9a711777ccafd**: POST /medicines
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-7e78c9e00e0ea8cd"></a>
- **M17-CAP-MEDICATION-7e78c9e00e0ea8cd**: Fields
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-f5ff2466370d6d7d"></a>
- **M17-CAP-MEDICATION-f5ff2466370d6d7d**: Generic Name
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-62e8595b83534b39"></a>
- **M17-CAP-MEDICATION-62e8595b83534b39**: Brand Name
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-368389b22a7065de"></a>
- **M17-CAP-MEDICATION-368389b22a7065de**: Dosage
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-24ed7bccabcd91b8"></a>
- **M17-CAP-MEDICATION-24ed7bccabcd91b8**: Form
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-c8f2f3fad28c4b03"></a>
- **M17-CAP-MEDICATION-c8f2f3fad28c4b03**: Strength
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-267d300e14857db1"></a>
- **M17-CAP-MEDICATION-267d300e14857db1**: Frequency
  Applies to original IDs: 57, 106.

<a id="M17-CAP-MEDICATION-6ffbfeb83a373123"></a>
- **M17-CAP-MEDICATION-6ffbfeb83a373123**: Route
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-2422e0f7d14fc2a1"></a>
- **M17-CAP-MEDICATION-2422e0f7d14fc2a1**: Start Date
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-39761e7604228fdf"></a>
- **M17-CAP-MEDICATION-39761e7604228fdf**: End Date
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-2d791cbb8f7adb9b"></a>
- **M17-CAP-MEDICATION-2d791cbb8f7adb9b**: Notes
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-5b2d14ad81d67c3f"></a>
- **M17-CAP-MEDICATION-5b2d14ad81d67c3f**: # Update Medicine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-8bba50eb33997c4d"></a>
- **M17-CAP-MEDICATION-8bba50eb33997c4d**: PUT /medicines/{id}
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-b7d3ea680a7f111a"></a>
- **M17-CAP-MEDICATION-b7d3ea680a7f111a**: Updates medicine information.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-9558865fb38ab417"></a>
- **M17-CAP-MEDICATION-9558865fb38ab417**: # Delete Medicine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-10c60e46136cabeb"></a>
- **M17-CAP-MEDICATION-10c60e46136cabeb**: DELETE /medicines/{id}
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-9bf8910bfd2b51c4"></a>
- **M17-CAP-MEDICATION-9bf8910bfd2b51c4**: Soft delete.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-c1d64f18456628c3"></a>
- **M17-CAP-MEDICATION-c1d64f18456628c3**: # Medicine Schedule
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-aad2da829718633d"></a>
- **M17-CAP-MEDICATION-aad2da829718633d**: GET /medicines/schedule
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-b25f1e570db33eaa"></a>
- **M17-CAP-MEDICATION-b25f1e570db33eaa**: Returns daily medication schedule.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-9bbab6c62a89bef4"></a>
- **M17-CAP-MEDICATION-9bbab6c62a89bef4**: # Mark Medicine Taken
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-5289374d8a570b42"></a>
- **M17-CAP-MEDICATION-5289374d8a570b42**: POST /medicines/{id}/taken
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-cd9a1372567abc92"></a>
- **M17-CAP-MEDICATION-cd9a1372567abc92**: Records medication intake.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-8a42beeffe9e6a45"></a>
- **M17-CAP-MEDICATION-8a42beeffe9e6a45**: # Missed Dose
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d2e4a90e0b058c87"></a>
- **M17-CAP-MEDICATION-d2e4a90e0b058c87**: POST /medicines/{id}/missed
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-272e676776c28dc0"></a>
- **M17-CAP-MEDICATION-272e676776c28dc0**: Records missed medication.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-3e242f3d835da12b"></a>
- **M17-CAP-MEDICATION-3e242f3d835da12b**: # Medicine Reminder
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-451bced8a34cac31"></a>
- **M17-CAP-MEDICATION-451bced8a34cac31**: GET /medicines/reminders
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-cd910e48cd311ead"></a>
- **M17-CAP-MEDICATION-cd910e48cd311ead**: Returns active reminders.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d94a2de357839f59"></a>
- **M17-CAP-MEDICATION-d94a2de357839f59**: # Medicine History
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-017595b580a75e96"></a>
- **M17-CAP-MEDICATION-017595b580a75e96**: GET /medicines/history
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-4e5a4c7b92597ad5"></a>
- **M17-CAP-MEDICATION-4e5a4c7b92597ad5**: Complete medication history.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-5272117351269287"></a>
- **M17-CAP-MEDICATION-5272117351269287**: # Drug Interaction
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-4e55b06303a25c4a"></a>
- **M17-CAP-MEDICATION-4e55b06303a25c4a**: POST /medicines/check-interactions
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-e62f87730af70a3c"></a>
- **M17-CAP-MEDICATION-e62f87730af70a3c**: Checks interactions between medicines.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-7ec468fe354a013d"></a>
- **M17-CAP-MEDICATION-7ec468fe354a013d**: # Alternative Medicines
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-f85b3092299bd511"></a>
- **M17-CAP-MEDICATION-f85b3092299bd511**: GET /medicines/{id}/alternatives
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-e8f6b93a190e06c1"></a>
- **M17-CAP-MEDICATION-e8f6b93a190e06c1**: Returns country-specific alternatives.
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-7a7c27f0cd770a9b"></a>
- **M17-CAP-MEDICATION-7a7c27f0cd770a9b**: # Search Medicines
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-82ba0d2851de9d04"></a>
- **M17-CAP-MEDICATION-82ba0d2851de9d04**: GET /medicines/search
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-de0ab3f6d86c6f10"></a>
- **M17-CAP-MEDICATION-de0ab3f6d86c6f10**: Barcode
  Applies to original IDs: 57, 106.

<a id="M17-CAP-MEDICATION-40d908ab1e1d81f0"></a>
- **M17-CAP-MEDICATION-40d908ab1e1d81f0**: ATC Code
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-ab2fd2438e03fce3"></a>
- **M17-CAP-MEDICATION-ab2fd2438e03fce3**: # Response Example
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d6ea1bdd127bdf47"></a>
- **M17-CAP-MEDICATION-d6ea1bdd127bdf47**: {
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d9b76fddc788880a"></a>
- **M17-CAP-MEDICATION-d9b76fddc788880a**: "success": true,
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-f4eea15f7a9c414b"></a>
- **M17-CAP-MEDICATION-f4eea15f7a9c414b**: "data": {
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-91d6832251ce1c38"></a>
- **M17-CAP-MEDICATION-91d6832251ce1c38**: "id": "...",
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-44fe0c3cc13380b3"></a>
- **M17-CAP-MEDICATION-44fe0c3cc13380b3**: "genericName": "...",
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-07bac96f9acf4c03"></a>
- **M17-CAP-MEDICATION-07bac96f9acf4c03**: "brandName": "...",
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-873536e0e16bd01e"></a>
- **M17-CAP-MEDICATION-873536e0e16bd01e**: "dosage": "...",
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-446c9b955226a23c"></a>
- **M17-CAP-MEDICATION-446c9b955226a23c**: "frequency": "..."
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-ac89c5c4e185f31e"></a>
- **M17-CAP-MEDICATION-ac89c5c4e185f31e**: }
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-efc101e38d418651"></a>
- **M17-CAP-MEDICATION-efc101e38d418651**: # Security
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-ca51b08733e66b72"></a>
- **M17-CAP-MEDICATION-ca51b08733e66b72**: JWT Required
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d20a95b6b63719a7"></a>
- **M17-CAP-MEDICATION-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-0349f77b1e444441"></a>
- **M17-CAP-MEDICATION-0349f77b1e444441**: Encrypted Data
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-a6f838712ba6cf93"></a>
- **M17-CAP-MEDICATION-a6f838712ba6cf93**: FHIR Compatible
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-9879a69a15c5a50a"></a>
- **M17-CAP-MEDICATION-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-aa3e999983b79daa"></a>
- **M17-CAP-MEDICATION-aa3e999983b79daa**: ├── Prescriptions
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-2b383921dd5c0b8f"></a>
- **M17-CAP-MEDICATION-2b383921dd5c0b8f**: ├── AI Drug Interaction Engine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-efa2a8ae50719ab3"></a>
- **M17-CAP-MEDICATION-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-5cbe96785bf5a069"></a>
- **M17-CAP-MEDICATION-5cbe96785bf5a069**: ├── Pharmacies
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-a7f2ddd3ac9459b5"></a>
- **M17-CAP-MEDICATION-a7f2ddd3ac9459b5**: ├── Telemedicine
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-0a44b2edf09c3246"></a>
- **M17-CAP-MEDICATION-0a44b2edf09c3246**: Barcode Scanner
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-976dc9b3916f898e"></a>
- **M17-CAP-MEDICATION-976dc9b3916f898e**: Pill Recognition
  Applies to original IDs: 57, 411.

<a id="M17-CAP-MEDICATION-a29ff46ee976def1"></a>
- **M17-CAP-MEDICATION-a29ff46ee976def1**: Smart Dose Calculator
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-7818064e70314bc2"></a>
- **M17-CAP-MEDICATION-7818064e70314bc2**: Refill Prediction
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-d9858d82c62abd38"></a>
- **M17-CAP-MEDICATION-d9858d82c62abd38**: International Drug Database
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-df9b19ac3a5b96e2"></a>
- **M17-CAP-MEDICATION-df9b19ac3a5b96e2**: AI Medication Optimization
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-187488b281b0ba49"></a>
- **M17-CAP-MEDICATION-187488b281b0ba49**: Automatic Pharmacy Availability Check
  Applies to original IDs: 57.

<a id="M17-CAP-MEDICATION-90a1aaf5767a2e13"></a>
- **M17-CAP-MEDICATION-90a1aaf5767a2e13**: # Medicine Module
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-60ad5f0e95a3c0f2"></a>
- **M17-CAP-MEDICATION-60ad5f0e95a3c0f2**: ↓
  Applies to original IDs: 106, 159.

<a id="M17-CAP-MEDICATION-777e9e30fff4e585"></a>
- **M17-CAP-MEDICATION-777e9e30fff4e585**: Reminder
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-fc6305640e017d45"></a>
- **M17-CAP-MEDICATION-fc6305640e017d45**: Course
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-443cc5d453358871"></a>
- **M17-CAP-MEDICATION-443cc5d453358871**: Completion
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-6bd02bd0f00ae1d0"></a>
- **M17-CAP-MEDICATION-6bd02bd0f00ae1d0**: Photos
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-0ee546a2f1b21bde"></a>
- **M17-CAP-MEDICATION-0ee546a2f1b21bde**: AI Recognition
  Applies to original IDs: 106.

<a id="M17-CAP-MEDICATION-f9ec674ca0f42bbc"></a>
- **M17-CAP-MEDICATION-f9ec674ca0f42bbc**: # Medicine Interaction Timeline
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-f3d993f49bc6debb"></a>
- **M17-CAP-MEDICATION-f3d993f49bc6debb**: Displays
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-14352852ac112ec3"></a>
- **M17-CAP-MEDICATION-14352852ac112ec3**: Medicine A
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-45114c49dddb927d"></a>
- **M17-CAP-MEDICATION-45114c49dddb927d**: Medicine B
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-74b2d0891c5b2fde"></a>
- **M17-CAP-MEDICATION-74b2d0891c5b2fde**: Interaction
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-0dbeacb9f9ac3f6a"></a>
- **M17-CAP-MEDICATION-0dbeacb9f9ac3f6a**: Severity
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-2ba9324701947f41"></a>
- **M17-CAP-MEDICATION-2ba9324701947f41**: Doctor Recommendation
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-6b5855701f10c64d"></a>
- **M17-CAP-MEDICATION-6b5855701f10c64d**: History
  Applies to original IDs: 159.

<a id="M17-CAP-MEDICATION-6c3a52e5b25d87ae"></a>
- **M17-CAP-MEDICATION-6c3a52e5b25d87ae**: # Medication Image Recognition
  Applies to original IDs: 411.

<a id="M17-CAP-MEDICATION-82a3bf969a78baf9"></a>
- **M17-CAP-MEDICATION-82a3bf969a78baf9**: Identifies medications using package images.
  Applies to original IDs: 411.

<a id="M17-CAP-MEDICATION-5cd6213902263a0e"></a>
- **M17-CAP-MEDICATION-5cd6213902263a0e**: Package Recognition
  Applies to original IDs: 411.
