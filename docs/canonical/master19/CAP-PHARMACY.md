# CORE-CAP-PHARMACY — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## core-pharmacy-directory-reservation

Pharmacy owns pharmacy participation and medication-reservation state. A reservation is not stock guarantee, valid prescription, substitution permission or completed dispense; expiry/partial fulfilment and concurrency preserve prescription identity. Directory membership does not certify branch licensure.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 19 / core-pharmacy-directory-reservation: Pharmacies Table — Stores pharmacies connected to the Medical Passport ecosystem.
- Original 398 / core-pharmacy-directory-reservation: Prescription Reservation System — Allows users to reserve prescribed medicines.

## Requirements and source metadata

<a id="M19-CAP-PHARMACY-9ca919addf103c4d"></a>
- **M19-CAP-PHARMACY-9ca919addf103c4d**: # Pharmacies Table
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-2f5fdcca89ef8e56"></a>
- **M19-CAP-PHARMACY-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-3258ee00d52d74ef"></a>
- **M19-CAP-PHARMACY-3258ee00d52d74ef**: Stores pharmacies connected to the Medical Passport ecosystem.
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-6f33acf3afb37064"></a>
- **M19-CAP-PHARMACY-6f33acf3afb37064**: ---
  Applies to original IDs: 19, 398.

<a id="M19-CAP-PHARMACY-90dc9b75b60f53a5"></a>
- **M19-CAP-PHARMACY-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-c91610423a46692c"></a>
- **M19-CAP-PHARMACY-c91610423a46692c**: id (UUID)
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-e20d460f6589fc2f"></a>
- **M19-CAP-PHARMACY-e20d460f6589fc2f**: name
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-8e2787ad63884423"></a>
- **M19-CAP-PHARMACY-8e2787ad63884423**: pharmacy_type
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-fbaa9c54df04a6bd"></a>
- **M19-CAP-PHARMACY-fbaa9c54df04a6bd**: license_number
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-9fe94e819c56a7a3"></a>
- **M19-CAP-PHARMACY-9fe94e819c56a7a3**: country
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-964c74225c44f6e8"></a>
- **M19-CAP-PHARMACY-964c74225c44f6e8**: city
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-6069f44150b70c7b"></a>
- **M19-CAP-PHARMACY-6069f44150b70c7b**: address
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-70577d9fa01462f6"></a>
- **M19-CAP-PHARMACY-70577d9fa01462f6**: postal_code
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-38ca8d13ab4cc0c6"></a>
- **M19-CAP-PHARMACY-38ca8d13ab4cc0c6**: latitude
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-6b0f008f8db9dca5"></a>
- **M19-CAP-PHARMACY-6b0f008f8db9dca5**: longitude
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-0fb52a054ac630c9"></a>
- **M19-CAP-PHARMACY-0fb52a054ac630c9**: phone
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-343184d0288e3a11"></a>
- **M19-CAP-PHARMACY-343184d0288e3a11**: email
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-fbc423a77512bdee"></a>
- **M19-CAP-PHARMACY-fbc423a77512bdee**: website
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-3a1de446c94313fb"></a>
- **M19-CAP-PHARMACY-3a1de446c94313fb**: working_hours
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-34d15b24bd633b8f"></a>
- **M19-CAP-PHARMACY-34d15b24bd633b8f**: emergency_service
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-b12fdc4d7e283b15"></a>
- **M19-CAP-PHARMACY-b12fdc4d7e283b15**: online_orders
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-bfeba29d501a79ee"></a>
- **M19-CAP-PHARMACY-bfeba29d501a79ee**: delivery_available
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-59d45d28a2dc1cb8"></a>
- **M19-CAP-PHARMACY-59d45d28a2dc1cb8**: twenty_four_hours
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-1b0b1422e63b8265"></a>
- **M19-CAP-PHARMACY-1b0b1422e63b8265**: verified
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-5754dd8ea427e6f0"></a>
- **M19-CAP-PHARMACY-5754dd8ea427e6f0**: status
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-bcc951dbdead2bf5"></a>
- **M19-CAP-PHARMACY-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-51db2c3a3a174a78"></a>
- **M19-CAP-PHARMACY-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-2fac6cbf308c244b"></a>
- **M19-CAP-PHARMACY-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-7605ce62d32022f4"></a>
- **M19-CAP-PHARMACY-7605ce62d32022f4**: Pharmacy
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-ca0910ed36c02588"></a>
- **M19-CAP-PHARMACY-ca0910ed36c02588**: ├── Medicines
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-aa3e999983b79daa"></a>
- **M19-CAP-PHARMACY-aa3e999983b79daa**: ├── Prescriptions
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-efa2a8ae50719ab3"></a>
- **M19-CAP-PHARMACY-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-81523a5b3313c450"></a>
- **M19-CAP-PHARMACY-81523a5b3313c450**: ├── Orders
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-93878a6ec6a84276"></a>
- **M19-CAP-PHARMACY-93878a6ec6a84276**: ├── Payments
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-db59f8620101e9fd"></a>
- **M19-CAP-PHARMACY-db59f8620101e9fd**: ├── Users
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-37bfdffca1a32095"></a>
- **M19-CAP-PHARMACY-37bfdffca1a32095**: Future Features
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-935a00b3f98b3c8a"></a>
- **M19-CAP-PHARMACY-935a00b3f98b3c8a**: Medicine Availability
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-89443a354989ac3c"></a>
- **M19-CAP-PHARMACY-89443a354989ac3c**: Online Reservation
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-8c0b36cbd68150ff"></a>
- **M19-CAP-PHARMACY-8c0b36cbd68150ff**: Home Delivery
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-5f87040cb46ed41f"></a>
- **M19-CAP-PHARMACY-5f87040cb46ed41f**: Cross-border Prescription Validation
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-1c40bcd986f5dbe3"></a>
- **M19-CAP-PHARMACY-1c40bcd986f5dbe3**: Navigation
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-cdba68410a918ee7"></a>
- **M19-CAP-PHARMACY-cdba68410a918ee7**: AI Medicine Search
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-6e0214bdb898d5e1"></a>
- **M19-CAP-PHARMACY-6e0214bdb898d5e1**: Digital Prescription Support
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-5ba74d8fcc7b20cc"></a>
- **M19-CAP-PHARMACY-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 19, 398.

<a id="M19-CAP-PHARMACY-d5232cbd3a326267"></a>
- **M19-CAP-PHARMACY-d5232cbd3a326267**: Documentation
  Applies to original IDs: 19, 398.

<a id="M19-CAP-PHARMACY-2bfb8c43838f8653"></a>
- **M19-CAP-PHARMACY-2bfb8c43838f8653**: ```
  Applies to original IDs: 19.

<a id="M19-CAP-PHARMACY-14d327317cf68c7d"></a>
- **M19-CAP-PHARMACY-14d327317cf68c7d**: # Prescription Reservation
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-1625d6ebcaa2c1ac"></a>
- **M19-CAP-PHARMACY-1625d6ebcaa2c1ac**: Allows users to reserve prescribed medicines.
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-4fbeeb87456accf5"></a>
- **M19-CAP-PHARMACY-4fbeeb87456accf5**: Supports
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-e34e88c38557078d"></a>
- **M19-CAP-PHARMACY-e34e88c38557078d**: Pharmacy Selection
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-45fe1932270398ef"></a>
- **M19-CAP-PHARMACY-45fe1932270398ef**: Reservation Confirmation
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-667e4211758b5177"></a>
- **M19-CAP-PHARMACY-667e4211758b5177**: Reservation Expiration
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-7bd7541bdde90162"></a>
- **M19-CAP-PHARMACY-7bd7541bdde90162**: Pickup Information
  Applies to original IDs: 398.

<a id="M19-CAP-PHARMACY-21a7f7da189dcc16"></a>
- **M19-CAP-PHARMACY-21a7f7da189dcc16**: Integrated with participating pharmacies.
  Applies to original IDs: 398.
