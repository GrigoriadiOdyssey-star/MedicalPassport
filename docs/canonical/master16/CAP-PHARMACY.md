# CORE-CAP-PHARMACY — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. For Pharmacy this is the first canonical specification under the already registered owner, not a new architecture. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## pharmacy

Use already registered CAP-PHARMACY for pharmacy participation, branches, schedules, pharmacy-maintained offers/prices/inventory, reservation, fulfillment and dispense records. CAP-IDENTITY verifies organizations and pharmacists; CAP-MEDICATION owns product/INN/ATC reference identity; CAP-PRESCRIPTION owns prescription validity and remaining authorized supply. QR is an access reference, not dispensing authority. Search results, generic matches and price estimates do not establish therapeutic interchangeability. CDS owns interaction and dose advice, AI supplies separately governed forecasts. Existing Medication source 403 is referenced, never remigrated.

Acceptance additions: Preserve branch, product/formulation/package, currency, quote time, stock source/time and jurisdiction context. Distinguish estimated stock from confirmed reservation and authorized dispense; partial dispensing requires atomic remaining-quantity checks and idempotent receipts. Stale/offline inventory is unknown, never available by default. Reject expired/replayed prescriptions and cross-patient QR use. Delivery tracking is not proof of ingestion; cross-border eligibility and substitution remain subject to qualified local authorization.

## Source scope

- Original 45 / pharmacy: Pharmacy Portal — Provides pharmacies with secure access to prescriptions, medicine verification and dispensing workflows.
- Original 115 / pharmacy: Pharmacy Directory — Find pharmacies, opening hours, availability and navigation with future reservation and delivery.
- Original 151 / pharmacy: International Pharmacy Network — Provides a unified international pharmacy ecosystem.
- Original 204 / pharmacy: Pharmacy Partner Portal — Support pharmacy prescription handling, stock, availability, reservations and delivery.
- Original 391 / pharmacy: Pharmacy Profile — Provides a complete profile for participating pharmacies.
- Original 392 / pharmacy: Pharmacy Branch Directory — Displays all branches of participating pharmacies.
- Original 393 / pharmacy: Pharmacy Working Schedule — Displays pharmacy operating hours.
- Original 394 / pharmacy: Pharmacy Service Catalog — Displays services provided by participating pharmacies.
- Original 395 / pharmacy: Medication Price Catalog — Displays estimated medication prices.
- Original 396 / pharmacy: Generic Medication Search — Allows searching medicines using international non-proprietary names (INN).
- Original 397 / pharmacy: Pharmacy Inventory Status — Displays medicine availability in participating pharmacies.
- Original 399 / pharmacy: Pharmacy Home Delivery — Displays pharmacies offering medication delivery services.
- Original 400 / pharmacy: Global Pharmacy Network — Provides access to participating pharmacies worldwide.
- Original 401 / pharmacy: Pharmacy Medication Search — Allows searching medications across participating pharmacies.
- Original 402 / pharmacy: Pharmacy Medication Availability — Displays medicine availability in nearby pharmacies.

## Requirements and source metadata

<a id="M16-CAP-PHARMACY-fdda6f4d63e915da"></a>
- **M16-CAP-PHARMACY-fdda6f4d63e915da**: # Pharmacy Portal
  Applies to original IDs: 45, 204.

<a id="M16-CAP-PHARMACY-2f5fdcca89ef8e56"></a>
- **M16-CAP-PHARMACY-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 45, 151.

<a id="M16-CAP-PHARMACY-83c804f4d92a49ec"></a>
- **M16-CAP-PHARMACY-83c804f4d92a49ec**: Provides pharmacies with secure access to prescriptions, medicine verification and dispensing workflows.
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-6f33acf3afb37064"></a>
- **M16-CAP-PHARMACY-6f33acf3afb37064**: ---
  Applies to original IDs: 45, 115, 151, 204, 391, 392, 393, 394, 395, 396, 397, 399, 400, 401, 402.

<a id="M16-CAP-PHARMACY-19addde118ab4f35"></a>
- **M16-CAP-PHARMACY-19addde118ab4f35**: # Core Features
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-f24b1aa514a7b4e7"></a>
- **M16-CAP-PHARMACY-f24b1aa514a7b4e7**: Pharmacy Dashboard
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-44912574de9f4923"></a>
- **M16-CAP-PHARMACY-44912574de9f4923**: Prescription Verification
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-6a348d6ed13b8e5b"></a>
- **M16-CAP-PHARMACY-6a348d6ed13b8e5b**: QR Prescription Scanner
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-935a00b3f98b3c8a"></a>
- **M16-CAP-PHARMACY-935a00b3f98b3c8a**: Medicine Availability
  Applies to original IDs: 45, 115, 151, 204.

<a id="M16-CAP-PHARMACY-786bb214776afb5e"></a>
- **M16-CAP-PHARMACY-786bb214776afb5e**: Medicine Reservation
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-3bb1455d8fb9d963"></a>
- **M16-CAP-PHARMACY-3bb1455d8fb9d963**: Medicine Dispensing
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-d90337e4f8365f86"></a>
- **M16-CAP-PHARMACY-d90337e4f8365f86**: Stock Management
  Applies to original IDs: 45, 204.

<a id="M16-CAP-PHARMACY-733f84b92119b9ce"></a>
- **M16-CAP-PHARMACY-733f84b92119b9ce**: Alternative Medicine Search
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-b7e5c52cd0edc1a6"></a>
- **M16-CAP-PHARMACY-b7e5c52cd0edc1a6**: Patient Verification
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-6983245975837530"></a>
- **M16-CAP-PHARMACY-6983245975837530**: # Prescription Management
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-af78e35cbd818253"></a>
- **M16-CAP-PHARMACY-af78e35cbd818253**: Verify Digital Prescription
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-8d1c697cbb5d9b83"></a>
- **M16-CAP-PHARMACY-8d1c697cbb5d9b83**: View Prescription Details
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-9a36eb693e78fae3"></a>
- **M16-CAP-PHARMACY-9a36eb693e78fae3**: Check Expiration Date
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-8eb504dcad6e8cfb"></a>
- **M16-CAP-PHARMACY-8eb504dcad6e8cfb**: Dispense Medicines
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-4e9225e04f45503f"></a>
- **M16-CAP-PHARMACY-4e9225e04f45503f**: Partial Dispensing
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-16b7b14d1e87e43d"></a>
- **M16-CAP-PHARMACY-16b7b14d1e87e43d**: Prescription History
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-d55040208ccdd821"></a>
- **M16-CAP-PHARMACY-d55040208ccdd821**: # Inventory
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-ba09dc8bbc700ff5"></a>
- **M16-CAP-PHARMACY-ba09dc8bbc700ff5**: Medicine Catalog
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-56fd3dd47655a8b5"></a>
- **M16-CAP-PHARMACY-56fd3dd47655a8b5**: Stock Level
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-9308a8da98f13c4d"></a>
- **M16-CAP-PHARMACY-9308a8da98f13c4d**: Expiration Monitoring
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-c11a577b14c67fdc"></a>
- **M16-CAP-PHARMACY-c11a577b14c67fdc**: Batch Number
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-de0ab3f6d86c6f10"></a>
- **M16-CAP-PHARMACY-de0ab3f6d86c6f10**: Barcode
  Applies to original IDs: 45, 401.

<a id="M16-CAP-PHARMACY-21d10097ab8f86fb"></a>
- **M16-CAP-PHARMACY-21d10097ab8f86fb**: QR Code
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-f16aebe863041dd0"></a>
- **M16-CAP-PHARMACY-f16aebe863041dd0**: Supplier Management
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-bef00880841b3da5"></a>
- **M16-CAP-PHARMACY-bef00880841b3da5**: # Patient Services
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-8c0b36cbd68150ff"></a>
- **M16-CAP-PHARMACY-8c0b36cbd68150ff**: Home Delivery
  Applies to original IDs: 45, 115, 151.

<a id="M16-CAP-PHARMACY-67df35ddd62990ae"></a>
- **M16-CAP-PHARMACY-67df35ddd62990ae**: Pickup Scheduling
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-860a6aaace9680db"></a>
- **M16-CAP-PHARMACY-860a6aaace9680db**: Refill Requests
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-5b2c095d906dfdc0"></a>
- **M16-CAP-PHARMACY-5b2c095d906dfdc0**: Digital Receipt
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-7a365d914338b8d3"></a>
- **M16-CAP-PHARMACY-7a365d914338b8d3**: # AI Features
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-4fe119dc135fc251"></a>
- **M16-CAP-PHARMACY-4fe119dc135fc251**: Drug Interaction Check
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-56b56efffdf29439"></a>
- **M16-CAP-PHARMACY-56b56efffdf29439**: Alternative Medicine Suggestions
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-c1c473bcb6a90ebf"></a>
- **M16-CAP-PHARMACY-c1c473bcb6a90ebf**: Dosage Validation
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-1f2439b410866db9"></a>
- **M16-CAP-PHARMACY-1f2439b410866db9**: Medicine Availability Prediction
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-29a159ee03f03fa9"></a>
- **M16-CAP-PHARMACY-29a159ee03f03fa9**: Automatic Translation
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-efc101e38d418651"></a>
- **M16-CAP-PHARMACY-efc101e38d418651**: # Security
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-947d949955b98121"></a>
- **M16-CAP-PHARMACY-947d949955b98121**: Pharmacy Verification
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-dad4958b80edea22"></a>
- **M16-CAP-PHARMACY-dad4958b80edea22**: Pharmacist Authentication
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-b95b8e5397e9b6e2"></a>
- **M16-CAP-PHARMACY-b95b8e5397e9b6e2**: Digital Signature
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-f57da9be49d5101a"></a>
- **M16-CAP-PHARMACY-f57da9be49d5101a**: QR Validation
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-d20a95b6b63719a7"></a>
- **M16-CAP-PHARMACY-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-8d02f72c1c0a1863"></a>
- **M16-CAP-PHARMACY-8d02f72c1c0a1863**: GDPR Compliance
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-9879a69a15c5a50a"></a>
- **M16-CAP-PHARMACY-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-db59f8620101e9fd"></a>
- **M16-CAP-PHARMACY-db59f8620101e9fd**: ├── Users
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-ca0910ed36c02588"></a>
- **M16-CAP-PHARMACY-ca0910ed36c02588**: ├── Medicines
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-aa3e999983b79daa"></a>
- **M16-CAP-PHARMACY-aa3e999983b79daa**: ├── Prescriptions
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-efa2a8ae50719ab3"></a>
- **M16-CAP-PHARMACY-efa2a8ae50719ab3**: ├── QR Passport
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-93878a6ec6a84276"></a>
- **M16-CAP-PHARMACY-93878a6ec6a84276**: ├── Payments
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-225d721817a80b2f"></a>
- **M16-CAP-PHARMACY-225d721817a80b2f**: ├── Notifications
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-93522f774f6d0bd5"></a>
- **M16-CAP-PHARMACY-93522f774f6d0bd5**: ├── AI Assistant
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-48a0e7b8fcbc590c"></a>
- **M16-CAP-PHARMACY-48a0e7b8fcbc590c**: ├── Audit Logs
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-37bfdffca1a32095"></a>
- **M16-CAP-PHARMACY-37bfdffca1a32095**: Future Features
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-933fe86381f84717"></a>
- **M16-CAP-PHARMACY-933fe86381f84717**: National Pharmacy Networks
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-3a1366afa043a40d"></a>
- **M16-CAP-PHARMACY-3a1366afa043a40d**: Cross-border Prescription Support
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-f1f7a414694d43a7"></a>
- **M16-CAP-PHARMACY-f1f7a414694d43a7**: Automated Inventory Ordering
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-d9562eeadb63d6a3"></a>
- **M16-CAP-PHARMACY-d9562eeadb63d6a3**: AI Inventory Forecast
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-9b3b7f471f88e27a"></a>
- **M16-CAP-PHARMACY-9b3b7f471f88e27a**: Smart Refill Reminders
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-5c2c623ee1e6d134"></a>
- **M16-CAP-PHARMACY-5c2c623ee1e6d134**: Delivery Tracking
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-c378a4341e2283a6"></a>
- **M16-CAP-PHARMACY-c378a4341e2283a6**: Insurance Billing
  Applies to original IDs: 45.

<a id="M16-CAP-PHARMACY-5ba74d8fcc7b20cc"></a>
- **M16-CAP-PHARMACY-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 45, 115, 151, 204, 391, 392, 393, 394, 395, 396, 397, 399, 400, 401, 402.

<a id="M16-CAP-PHARMACY-d5232cbd3a326267"></a>
- **M16-CAP-PHARMACY-d5232cbd3a326267**: Documentation
  Applies to original IDs: 45, 115, 151, 204, 391, 392, 393, 394, 395, 396, 397, 399, 400, 401, 402.

<a id="M16-CAP-PHARMACY-10905e73ddbbd1b3"></a>
- **M16-CAP-PHARMACY-10905e73ddbbd1b3**: # Pharmacy Directory
  Applies to original IDs: 115.

<a id="M16-CAP-PHARMACY-fc1b44c1d4878793"></a>
- **M16-CAP-PHARMACY-fc1b44c1d4878793**: Functions
  Applies to original IDs: 115, 204.

<a id="M16-CAP-PHARMACY-5491fdde22c6d0a8"></a>
- **M16-CAP-PHARMACY-5491fdde22c6d0a8**: Nearby Pharmacies
  Applies to original IDs: 115.

<a id="M16-CAP-PHARMACY-778fef259d4c5475"></a>
- **M16-CAP-PHARMACY-778fef259d4c5475**: Open Now
  Applies to original IDs: 115, 151.

<a id="M16-CAP-PHARMACY-df36cb0ee2c4e372"></a>
- **M16-CAP-PHARMACY-df36cb0ee2c4e372**: 24/7
  Applies to original IDs: 115, 151.

<a id="M16-CAP-PHARMACY-c0f0eee5bf6ba6b4"></a>
- **M16-CAP-PHARMACY-c0f0eee5bf6ba6b4**: Route Navigation
  Applies to original IDs: 115.

<a id="M16-CAP-PHARMACY-6dbf59519601ac0d"></a>
- **M16-CAP-PHARMACY-6dbf59519601ac0d**: Future
  Applies to original IDs: 115.

<a id="M16-CAP-PHARMACY-89443a354989ac3c"></a>
- **M16-CAP-PHARMACY-89443a354989ac3c**: Online Reservation
  Applies to original IDs: 115.

<a id="M16-CAP-PHARMACY-0ff578306d8a8ae1"></a>
- **M16-CAP-PHARMACY-0ff578306d8a8ae1**: # International Pharmacy Network
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-3b6f107547c76766"></a>
- **M16-CAP-PHARMACY-3b6f107547c76766**: Provides a unified international pharmacy ecosystem.
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-c317bd382ede5a78"></a>
- **M16-CAP-PHARMACY-c317bd382ede5a78**: # Functions
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-b34b9da081868e50"></a>
- **M16-CAP-PHARMACY-b34b9da081868e50**: Pharmacy Search
  Applies to original IDs: 151, 400.

<a id="M16-CAP-PHARMACY-8b6956ec34ca4e8f"></a>
- **M16-CAP-PHARMACY-8b6956ec34ca4e8f**: Prescription Validation
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-245c7ed8b25bbf20"></a>
- **M16-CAP-PHARMACY-245c7ed8b25bbf20**: QR Prescription
  Applies to original IDs: 151, 204.

<a id="M16-CAP-PHARMACY-0a76af6317841880"></a>
- **M16-CAP-PHARMACY-0a76af6317841880**: Digital Reservation
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-fc583d5a934fc172"></a>
- **M16-CAP-PHARMACY-fc583d5a934fc172**: Emergency Pharmacy
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-a52047d68f538680"></a>
- **M16-CAP-PHARMACY-a52047d68f538680**: # Search Filters
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-b83c67c92e402d76"></a>
- **M16-CAP-PHARMACY-b83c67c92e402d76**: Distance
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-580c32d823047de1"></a>
- **M16-CAP-PHARMACY-580c32d823047de1**: Country
  Applies to original IDs: 151, 391, 392.

<a id="M16-CAP-PHARMACY-2cdc52bf1d2f5303"></a>
- **M16-CAP-PHARMACY-2cdc52bf1d2f5303**: Language
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-e4a7d395f869c9ae"></a>
- **M16-CAP-PHARMACY-e4a7d395f869c9ae**: Insurance
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-3ae467e8295ed8bb"></a>
- **M16-CAP-PHARMACY-3ae467e8295ed8bb**: # AI Functions
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-ca8c2737fabfe356"></a>
- **M16-CAP-PHARMACY-ca8c2737fabfe356**: Equivalent Medicines
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-ac0db9a877e8c09a"></a>
- **M16-CAP-PHARMACY-ac0db9a877e8c09a**: Generic Names
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-f12045546899dc38"></a>
- **M16-CAP-PHARMACY-f12045546899dc38**: Availability Prediction
  Applies to original IDs: 151.

<a id="M16-CAP-PHARMACY-86db8b86e0b181d1"></a>
- **M16-CAP-PHARMACY-86db8b86e0b181d1**: Alternative Pharmacies
  Applies to original IDs: 151, 402.

<a id="M16-CAP-PHARMACY-a221e123d94e872a"></a>
- **M16-CAP-PHARMACY-a221e123d94e872a**: Reservation
  Applies to original IDs: 204, 400.

<a id="M16-CAP-PHARMACY-0f5ad7d6e65af38c"></a>
- **M16-CAP-PHARMACY-0f5ad7d6e65af38c**: Delivery
  Applies to original IDs: 204.

<a id="M16-CAP-PHARMACY-327d95b762ee312d"></a>
- **M16-CAP-PHARMACY-327d95b762ee312d**: Generic Alternatives
  Applies to original IDs: 204.

<a id="M16-CAP-PHARMACY-8972ad6f867c588e"></a>
- **M16-CAP-PHARMACY-8972ad6f867c588e**: Analytics
  Applies to original IDs: 204.

<a id="M16-CAP-PHARMACY-0befe5bcb6df0d9f"></a>
- **M16-CAP-PHARMACY-0befe5bcb6df0d9f**: # Pharmacy Profile
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-131ef4d8494b86dc"></a>
- **M16-CAP-PHARMACY-131ef4d8494b86dc**: Provides a complete profile for participating pharmacies.
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-4fbeeb87456accf5"></a>
- **M16-CAP-PHARMACY-4fbeeb87456accf5**: Supports
  Applies to original IDs: 391, 392, 393, 394, 395, 396, 397, 399, 400, 401, 402.

<a id="M16-CAP-PHARMACY-aa602b30520b0b18"></a>
- **M16-CAP-PHARMACY-aa602b30520b0b18**: Pharmacy Name
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-e92411fba2438bd2"></a>
- **M16-CAP-PHARMACY-e92411fba2438bd2**: City
  Applies to original IDs: 391, 392.

<a id="M16-CAP-PHARMACY-923da24e89456a5f"></a>
- **M16-CAP-PHARMACY-923da24e89456a5f**: Address
  Applies to original IDs: 391, 392.

<a id="M16-CAP-PHARMACY-9ffc076550b94ce2"></a>
- **M16-CAP-PHARMACY-9ffc076550b94ce2**: Contact Information
  Applies to original IDs: 391, 392.

<a id="M16-CAP-PHARMACY-9e23bd6dbe2aa871"></a>
- **M16-CAP-PHARMACY-9e23bd6dbe2aa871**: Working Hours
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-2d1464b435bb05f6"></a>
- **M16-CAP-PHARMACY-2d1464b435bb05f6**: Languages
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-986497e9dbff0dee"></a>
- **M16-CAP-PHARMACY-986497e9dbff0dee**: Integrated with Global Pharmacy Network.
  Applies to original IDs: 391.

<a id="M16-CAP-PHARMACY-81ec5248213c00d8"></a>
- **M16-CAP-PHARMACY-81ec5248213c00d8**: # Pharmacy Branch Directory
  Applies to original IDs: 392.

<a id="M16-CAP-PHARMACY-a8c3ac2d6c7ecc2c"></a>
- **M16-CAP-PHARMACY-a8c3ac2d6c7ecc2c**: Displays all branches of participating pharmacies.
  Applies to original IDs: 392.

<a id="M16-CAP-PHARMACY-3df0ee25c4530753"></a>
- **M16-CAP-PHARMACY-3df0ee25c4530753**: GPS Navigation
  Applies to original IDs: 392.

<a id="M16-CAP-PHARMACY-df5f2afe6d050375"></a>
- **M16-CAP-PHARMACY-df5f2afe6d050375**: # Pharmacy Working Schedule
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-f05a190a3c6e9bc1"></a>
- **M16-CAP-PHARMACY-f05a190a3c6e9bc1**: Displays pharmacy operating hours.
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-a300ec4dd85fc4ad"></a>
- **M16-CAP-PHARMACY-a300ec4dd85fc4ad**: Daily Schedule
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-fb966578a937a386"></a>
- **M16-CAP-PHARMACY-fb966578a937a386**: Weekend Schedule
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-995cabc5dccea27a"></a>
- **M16-CAP-PHARMACY-995cabc5dccea27a**: Holiday Schedule
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-982887c834bf6a40"></a>
- **M16-CAP-PHARMACY-982887c834bf6a40**: 24-Hour Pharmacies
  Applies to original IDs: 393.

<a id="M16-CAP-PHARMACY-33f23baa720d6bff"></a>
- **M16-CAP-PHARMACY-33f23baa720d6bff**: # Pharmacy Service Catalog
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-7305cb688f5cd564"></a>
- **M16-CAP-PHARMACY-7305cb688f5cd564**: Displays services provided by participating pharmacies.
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-07b544301bee983e"></a>
- **M16-CAP-PHARMACY-07b544301bee983e**: Prescription Medicines
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-10139642f9ea7f0b"></a>
- **M16-CAP-PHARMACY-10139642f9ea7f0b**: OTC Medicines
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-b384954822a310e2"></a>
- **M16-CAP-PHARMACY-b384954822a310e2**: Medical Devices
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-c8f15db61f0d7a5d"></a>
- **M16-CAP-PHARMACY-c8f15db61f0d7a5d**: Vaccination Services
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-18bfb447e9be6cc0"></a>
- **M16-CAP-PHARMACY-18bfb447e9be6cc0**: Health Screening
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-ebab99e05dbadf8d"></a>
- **M16-CAP-PHARMACY-ebab99e05dbadf8d**: Pharmaceutical Consultation
  Applies to original IDs: 394.

<a id="M16-CAP-PHARMACY-7979e63a5bc261eb"></a>
- **M16-CAP-PHARMACY-7979e63a5bc261eb**: # Medication Price Catalog
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-244d93f1064e126b"></a>
- **M16-CAP-PHARMACY-244d93f1064e126b**: Displays estimated medication prices.
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-62e8595b83534b39"></a>
- **M16-CAP-PHARMACY-62e8595b83534b39**: Brand Name
  Applies to original IDs: 395, 401.

<a id="M16-CAP-PHARMACY-f5ff2466370d6d7d"></a>
- **M16-CAP-PHARMACY-f5ff2466370d6d7d**: Generic Name
  Applies to original IDs: 395, 396, 401.

<a id="M16-CAP-PHARMACY-368389b22a7065de"></a>
- **M16-CAP-PHARMACY-368389b22a7065de**: Dosage
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-33046cd47ad32383"></a>
- **M16-CAP-PHARMACY-33046cd47ad32383**: Package Size
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-5f94a7e341e3f6d8"></a>
- **M16-CAP-PHARMACY-5f94a7e341e3f6d8**: Currency
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-4b91c1370ee24645"></a>
- **M16-CAP-PHARMACY-4b91c1370ee24645**: Prices are maintained by participating pharmacies.
  Applies to original IDs: 395.

<a id="M16-CAP-PHARMACY-0176d64829a58731"></a>
- **M16-CAP-PHARMACY-0176d64829a58731**: # Generic Medication Search
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-2e70f326a2ea3b51"></a>
- **M16-CAP-PHARMACY-2e70f326a2ea3b51**: Allows searching medicines using international non-proprietary names (INN).
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-7cc392f808fea006"></a>
- **M16-CAP-PHARMACY-7cc392f808fea006**: Brand Equivalents
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-ad6c239fcc3676df"></a>
- **M16-CAP-PHARMACY-ad6c239fcc3676df**: Available Dosages
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-a772b2588b03b57b"></a>
- **M16-CAP-PHARMACY-a772b2588b03b57b**: Available Forms
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-5ce2b28694d05383"></a>
- **M16-CAP-PHARMACY-5ce2b28694d05383**: Integrated with International Pharmacy Platform.
  Applies to original IDs: 396.

<a id="M16-CAP-PHARMACY-2f84c3710d61e296"></a>
- **M16-CAP-PHARMACY-2f84c3710d61e296**: # Pharmacy Inventory Status
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-dc2cb7b760035bf2"></a>
- **M16-CAP-PHARMACY-dc2cb7b760035bf2**: Displays medicine availability in participating pharmacies.
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-5d989a137934beb6"></a>
- **M16-CAP-PHARMACY-5d989a137934beb6**: Available
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-fb40850b798910e6"></a>
- **M16-CAP-PHARMACY-fb40850b798910e6**: Limited Stock
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-192d46ad5e19fce7"></a>
- **M16-CAP-PHARMACY-192d46ad5e19fce7**: Out of Stock
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-f7d7fdd1ce6a02e2"></a>
- **M16-CAP-PHARMACY-f7d7fdd1ce6a02e2**: Expected Delivery
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-a4f78a81d828d4a9"></a>
- **M16-CAP-PHARMACY-a4f78a81d828d4a9**: Inventory information is updated by participating pharmacies.
  Applies to original IDs: 397.

<a id="M16-CAP-PHARMACY-365f4ba579516e07"></a>
- **M16-CAP-PHARMACY-365f4ba579516e07**: # Pharmacy Home Delivery
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-82d371bca727fb02"></a>
- **M16-CAP-PHARMACY-82d371bca727fb02**: Displays pharmacies offering medication delivery services.
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-5e60f3333b399cdf"></a>
- **M16-CAP-PHARMACY-5e60f3333b399cdf**: Delivery Area
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-a99bfbc18e099869"></a>
- **M16-CAP-PHARMACY-a99bfbc18e099869**: Delivery Time
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-4b587b3a59b0c5ce"></a>
- **M16-CAP-PHARMACY-4b587b3a59b0c5ce**: Delivery Status
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-b0f4139d5c217f29"></a>
- **M16-CAP-PHARMACY-b0f4139d5c217f29**: Tracking Information
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-dd1dc0676656ad4d"></a>
- **M16-CAP-PHARMACY-dd1dc0676656ad4d**: Availability depends on local regulations and participating pharmacies.
  Applies to original IDs: 399.

<a id="M16-CAP-PHARMACY-caef2b13abae67e5"></a>
- **M16-CAP-PHARMACY-caef2b13abae67e5**: # Global Pharmacy Network
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-a5a55eede7de1ffe"></a>
- **M16-CAP-PHARMACY-a5a55eede7de1ffe**: Provides access to participating pharmacies worldwide.
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-39850dec2ccf84fa"></a>
- **M16-CAP-PHARMACY-39850dec2ccf84fa**: Country Search
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-d0492d1210ac9ca5"></a>
- **M16-CAP-PHARMACY-d0492d1210ac9ca5**: City Search
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-db110f9bdd5f92f6"></a>
- **M16-CAP-PHARMACY-db110f9bdd5f92f6**: Medication Availability
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-f8fd09dde4230de6"></a>
- **M16-CAP-PHARMACY-f8fd09dde4230de6**: Delivery Services
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-62d590f306d5c2e8"></a>
- **M16-CAP-PHARMACY-62d590f306d5c2e8**: Acts as the central pharmacy platform within the Medical Passport ecosystem.
  Applies to original IDs: 400.

<a id="M16-CAP-PHARMACY-3f6addbaf9c4797f"></a>
- **M16-CAP-PHARMACY-3f6addbaf9c4797f**: # Pharmacy Medication Search
  Applies to original IDs: 401.

<a id="M16-CAP-PHARMACY-624ddef1cb485811"></a>
- **M16-CAP-PHARMACY-624ddef1cb485811**: Allows searching medications across participating pharmacies.
  Applies to original IDs: 401.

<a id="M16-CAP-PHARMACY-fe468f219c6f18ac"></a>
- **M16-CAP-PHARMACY-fe468f219c6f18ac**: ATC Classification
  Applies to original IDs: 401.

<a id="M16-CAP-PHARMACY-e6322ac09f884cf3"></a>
- **M16-CAP-PHARMACY-e6322ac09f884cf3**: Manufacturer
  Applies to original IDs: 401.

<a id="M16-CAP-PHARMACY-b05a297db821e709"></a>
- **M16-CAP-PHARMACY-b05a297db821e709**: # Medication Availability
  Applies to original IDs: 402.

<a id="M16-CAP-PHARMACY-a44078fbb02ce9b0"></a>
- **M16-CAP-PHARMACY-a44078fbb02ce9b0**: Displays medicine availability in nearby pharmacies.
  Applies to original IDs: 402.

<a id="M16-CAP-PHARMACY-3a9e6fe0d3b15edd"></a>
- **M16-CAP-PHARMACY-3a9e6fe0d3b15edd**: Real-time Availability
  Applies to original IDs: 402.

<a id="M16-CAP-PHARMACY-70246045d4694f7d"></a>
- **M16-CAP-PHARMACY-70246045d4694f7d**: Branch Comparison
  Applies to original IDs: 402.
