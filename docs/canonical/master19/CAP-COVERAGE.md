# CORE-CAP-COVERAGE — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. Previously inactive registered owners receive their first source-preserving specification without creating a new architecture owner. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## coverage-claims-and-billing

Existing Coverage owns policy/claim/invoice/payment state and financial projections. Monetary amounts retain currency, precision, transaction identity, provider/time and refund/reversal lineage; retries cannot double-charge. An estimate, AI claim check or policy card is not authorization, adjudication, guaranteed reimbursement or a performed payment. Family finance respects individual permissions; coverage cannot authorize clinical access. External payment and insurer integrations require independently verified contracts.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## remaining-financial-estimates

Insurance and treatment estimates retain currency, timestamp, publisher, conversion basis and adjudication state. Price comparisons are not reimbursement, payment or clinical recommendations.

Acceptance additions: Preserve every original clause, patient/tenant/source/version/time provenance and explicit missingness. Test wrong identity, stale measurements, revoked consent, guardian changes, adolescent confidentiality and source corrections. Pediatric age, developmental stage, weight/height/unit/time and clinical context remain explicit where applicable. No automatic diagnosis, prescription, dose change, medication stop, device actuation or crisis disposition; qualified clinician review remains required. Clinical validation and production acceptance remain external gates.

## Source scope

- Original 20 / coverage-claims-and-billing: Insurance Policies Table — Stores health insurance information for users.
- Original 24 / coverage-claims-and-billing: Payments Table — Stores all payment transactions within the Medical Passport ecosystem.
- Original 46 / coverage-claims-and-billing: Insurance Portal — Provides insurance companies with secure access to insurance verification, claims processing and policy management.
- Original 113 / coverage-claims-and-billing: Insurance Management — Maintain insurance policy, coverage, expiration and emergency contact information.
- Original 321 / coverage-claims-and-billing: Medical Membership Center — Provides a centralized area where users can view available membership plans and compare included services.
- Original 322 / coverage-claims-and-billing: Digital Invoice Center — Stores digital invoices related to healthcare services.
- Original 323 / coverage-claims-and-billing: Healthcare Payment History — Stores complete payment history.
- Original 324 / coverage-claims-and-billing: Medical Expense Analytics — Provides visual analysis of healthcare expenses.
- Original 325 / coverage-claims-and-billing: Healthcare Budget Planner — Allows users to create healthcare budgets.
- Original 327 / coverage-claims-and-billing: Healthcare Subscription History — Displays chronological history of healthcare memberships.
- Original 328 / coverage-claims-and-billing: Family Healthcare Finance — Supports consolidated financial overview for family accounts.
- Original 329 / coverage-claims-and-billing: Healthcare Financial Reports — Generates structured healthcare financial reports.
- Original 1215 / coverage-claims-and-billing: AI Insurance Claim Validator — Validates insurance claims.
- Original 1317 / coverage-claims-and-billing: AI Insurance Coverage Optimizer — Optimizes insurance utilization.
- Original 1889 / coverage-claims-and-billing: AI International Insurance Integration — Coordinates international medical insurance.
- Original 206 / remaining-financial-estimates: Insurance Partner Portal — Support insurance verification, approval, claims, payment and report workflows.
- Original 458 / remaining-financial-estimates: Dental Cost Estimator — Displays estimated treatment costs.
- Original 478 / remaining-financial-estimates: Dermatology Cost Estimator — Displays estimated dermatology treatment costs.
- Original 497 / remaining-financial-estimates: Sexual Health Cost Estimator — Displays estimated costs for consultations, laboratory examinations and treatment.

## Requirements and source metadata

<a id="M19-CAP-COVERAGE-95c4e7a24e7c3b90"></a>
- **M19-CAP-COVERAGE-95c4e7a24e7c3b90**: # Insurance Policies Table
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-2f5fdcca89ef8e56"></a>
- **M19-CAP-COVERAGE-2f5fdcca89ef8e56**: ## Purpose
  Applies to original IDs: 20, 24, 46.

<a id="M19-CAP-COVERAGE-fcc6b28d3db9db6c"></a>
- **M19-CAP-COVERAGE-fcc6b28d3db9db6c**: Stores health insurance information for users.
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-6f33acf3afb37064"></a>
- **M19-CAP-COVERAGE-6f33acf3afb37064**: ---
  Applies to original IDs: 20, 24, 46, 113, 321, 322, 323, 324, 325, 327, 328, 329, 1215, 1317, 1889, 206, 458, 478, 497.

<a id="M19-CAP-COVERAGE-90dc9b75b60f53a5"></a>
- **M19-CAP-COVERAGE-90dc9b75b60f53a5**: # Fields
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-c91610423a46692c"></a>
- **M19-CAP-COVERAGE-c91610423a46692c**: id (UUID)
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-ff6fb316f9bc6c33"></a>
- **M19-CAP-COVERAGE-ff6fb316f9bc6c33**: user_id
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-6f419158e635c02d"></a>
- **M19-CAP-COVERAGE-6f419158e635c02d**: insurance_company
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-15e838e726c6b8ae"></a>
- **M19-CAP-COVERAGE-15e838e726c6b8ae**: policy_number
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-a890e41c3e713880"></a>
- **M19-CAP-COVERAGE-a890e41c3e713880**: policy_type
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-5a02f2d3821ee457"></a>
- **M19-CAP-COVERAGE-5a02f2d3821ee457**: coverage_type
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-9fe94e819c56a7a3"></a>
- **M19-CAP-COVERAGE-9fe94e819c56a7a3**: country
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-8c3545c02195074b"></a>
- **M19-CAP-COVERAGE-8c3545c02195074b**: start_date
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-85be9f327764f231"></a>
- **M19-CAP-COVERAGE-85be9f327764f231**: end_date
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-2a11f8627eff452b"></a>
- **M19-CAP-COVERAGE-2a11f8627eff452b**: emergency_coverage
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-52c7b35413b77e9d"></a>
- **M19-CAP-COVERAGE-52c7b35413b77e9d**: telemedicine_coverage
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-dd90e700650a5ce5"></a>
- **M19-CAP-COVERAGE-dd90e700650a5ce5**: medicine_coverage
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-59833b53aa92f7dc"></a>
- **M19-CAP-COVERAGE-59833b53aa92f7dc**: hospital_coverage
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-ce1440bfd44ce17a"></a>
- **M19-CAP-COVERAGE-ce1440bfd44ce17a**: international_coverage
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-7b8d85a0d1a4817c"></a>
- **M19-CAP-COVERAGE-7b8d85a0d1a4817c**: contact_phone
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-19233372f05e82ea"></a>
- **M19-CAP-COVERAGE-19233372f05e82ea**: contact_email
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-fbc423a77512bdee"></a>
- **M19-CAP-COVERAGE-fbc423a77512bdee**: website
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-5754dd8ea427e6f0"></a>
- **M19-CAP-COVERAGE-5754dd8ea427e6f0**: status
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-bcc951dbdead2bf5"></a>
- **M19-CAP-COVERAGE-bcc951dbdead2bf5**: created_at
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-51db2c3a3a174a78"></a>
- **M19-CAP-COVERAGE-51db2c3a3a174a78**: updated_at
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-2fac6cbf308c244b"></a>
- **M19-CAP-COVERAGE-2fac6cbf308c244b**: # Relationships
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-bc08e6806917ec9d"></a>
- **M19-CAP-COVERAGE-bc08e6806917ec9d**: Insurance Policy
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-46172ef655d51ea4"></a>
- **M19-CAP-COVERAGE-46172ef655d51ea4**: ├── User
  Applies to original IDs: 20, 24.

<a id="M19-CAP-COVERAGE-4aa0cb20484238f6"></a>
- **M19-CAP-COVERAGE-4aa0cb20484238f6**: ├── Hospital
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-b3a8fb58abb0fac0"></a>
- **M19-CAP-COVERAGE-b3a8fb58abb0fac0**: ├── Doctor
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-aa3e999983b79daa"></a>
- **M19-CAP-COVERAGE-aa3e999983b79daa**: ├── Prescriptions
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-93878a6ec6a84276"></a>
- **M19-CAP-COVERAGE-93878a6ec6a84276**: ├── Payments
  Applies to original IDs: 20, 46.

<a id="M19-CAP-COVERAGE-56592e1317f90581"></a>
- **M19-CAP-COVERAGE-56592e1317f90581**: ├── Claims
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-a7f2ddd3ac9459b5"></a>
- **M19-CAP-COVERAGE-a7f2ddd3ac9459b5**: ├── Telemedicine
  Applies to original IDs: 20, 24, 46.

<a id="M19-CAP-COVERAGE-37bfdffca1a32095"></a>
- **M19-CAP-COVERAGE-37bfdffca1a32095**: Future Features
  Applies to original IDs: 20, 24, 46.

<a id="M19-CAP-COVERAGE-47717cc8431fcdc2"></a>
- **M19-CAP-COVERAGE-47717cc8431fcdc2**: Digital Insurance Card
  Applies to original IDs: 20, 46, 113.

<a id="M19-CAP-COVERAGE-9c26c1b46bcd0a38"></a>
- **M19-CAP-COVERAGE-9c26c1b46bcd0a38**: QR Verification
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-bca7182d883e64ac"></a>
- **M19-CAP-COVERAGE-bca7182d883e64ac**: Claim Tracking
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-d671fe7338a8968f"></a>
- **M19-CAP-COVERAGE-d671fe7338a8968f**: Automatic Coverage Check
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-012fae62fad4977b"></a>
- **M19-CAP-COVERAGE-012fae62fad4977b**: International Insurance Support
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-d2064be0f14d1d23"></a>
- **M19-CAP-COVERAGE-d2064be0f14d1d23**: AI Coverage Analysis
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-1dc5049405270344"></a>
- **M19-CAP-COVERAGE-1dc5049405270344**: Emergency Verification
  Applies to original IDs: 20.

<a id="M19-CAP-COVERAGE-5ba74d8fcc7b20cc"></a>
- **M19-CAP-COVERAGE-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 20, 24, 46, 113, 321, 322, 323, 324, 325, 327, 328, 329, 1215, 1317, 1889, 206, 458, 478, 497.

<a id="M19-CAP-COVERAGE-d5232cbd3a326267"></a>
- **M19-CAP-COVERAGE-d5232cbd3a326267**: Documentation
  Applies to original IDs: 20, 24, 46, 113, 321, 322, 323, 324, 325, 327, 328, 329, 1215, 1317, 1889, 206, 458, 478, 497.

<a id="M19-CAP-COVERAGE-a864765353a135fa"></a>
- **M19-CAP-COVERAGE-a864765353a135fa**: # Payments Table
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-9b4622a321cf70ce"></a>
- **M19-CAP-COVERAGE-9b4622a321cf70ce**: Stores all payment transactions within the Medical Passport ecosystem.
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-17f51555afef8ef7"></a>
- **M19-CAP-COVERAGE-17f51555afef8ef7**: payment_type
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-bc4610e74ebfc396"></a>
- **M19-CAP-COVERAGE-bc4610e74ebfc396**: payment_provider
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-29303f90a713d4b5"></a>
- **M19-CAP-COVERAGE-29303f90a713d4b5**: transaction_id
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-4c74fa55473849f0"></a>
- **M19-CAP-COVERAGE-4c74fa55473849f0**: invoice_number
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-53373137be4f82d9"></a>
- **M19-CAP-COVERAGE-53373137be4f82d9**: amount
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-ba9e5be92ae92eae"></a>
- **M19-CAP-COVERAGE-ba9e5be92ae92eae**: currency
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-eb19cd5654956ea5"></a>
- **M19-CAP-COVERAGE-eb19cd5654956ea5**: tax_amount
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-1a6112380c87e8ea"></a>
- **M19-CAP-COVERAGE-1a6112380c87e8ea**: discount
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-eb78e3a0e5f75b3d"></a>
- **M19-CAP-COVERAGE-eb78e3a0e5f75b3d**: subscription_plan
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-d56f449896c280b4"></a>
- **M19-CAP-COVERAGE-d56f449896c280b4**: payment_method
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-26387baaadda7180"></a>
- **M19-CAP-COVERAGE-26387baaadda7180**: payment_status
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-a1005a091a10c258"></a>
- **M19-CAP-COVERAGE-a1005a091a10c258**: paid_at
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-f821bdef3f5e2ac4"></a>
- **M19-CAP-COVERAGE-f821bdef3f5e2ac4**: refund_status
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-8dd998c3aed82bc8"></a>
- **M19-CAP-COVERAGE-8dd998c3aed82bc8**: refund_amount
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-0ecd3c807e03d00b"></a>
- **M19-CAP-COVERAGE-0ecd3c807e03d00b**: receipt_url
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-005ef39319f97578"></a>
- **M19-CAP-COVERAGE-005ef39319f97578**: Payment
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-e30c48e0aff08042"></a>
- **M19-CAP-COVERAGE-e30c48e0aff08042**: ├── Subscription
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-f242256e9ecdac25"></a>
- **M19-CAP-COVERAGE-f242256e9ecdac25**: ├── Pharmacy
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-d3851f7ba53f3cf3"></a>
- **M19-CAP-COVERAGE-d3851f7ba53f3cf3**: ├── Insurance
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-81523a5b3313c450"></a>
- **M19-CAP-COVERAGE-81523a5b3313c450**: ├── Orders
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-c3d6425213522466"></a>
- **M19-CAP-COVERAGE-c3d6425213522466**: Apple Pay
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-e13ebd3ec5e81036"></a>
- **M19-CAP-COVERAGE-e13ebd3ec5e81036**: Google Pay
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-149334a814ae2a63"></a>
- **M19-CAP-COVERAGE-149334a814ae2a63**: Stripe
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-2874a0af9993f805"></a>
- **M19-CAP-COVERAGE-2874a0af9993f805**: PayPal
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-22c4d8e52be0076f"></a>
- **M19-CAP-COVERAGE-22c4d8e52be0076f**: SEPA
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-c980ea91094eeafe"></a>
- **M19-CAP-COVERAGE-c980ea91094eeafe**: Refund Management
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-e05788886f78230a"></a>
- **M19-CAP-COVERAGE-e05788886f78230a**: Subscription Billing
  Applies to original IDs: 24.

<a id="M19-CAP-COVERAGE-9fd42b5cee6f64d3"></a>
- **M19-CAP-COVERAGE-9fd42b5cee6f64d3**: # Insurance Portal
  Applies to original IDs: 46, 206.

<a id="M19-CAP-COVERAGE-0a4d99a0ba3ea16c"></a>
- **M19-CAP-COVERAGE-0a4d99a0ba3ea16c**: Provides insurance companies with secure access to insurance verification, claims processing and policy management.
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-19addde118ab4f35"></a>
- **M19-CAP-COVERAGE-19addde118ab4f35**: # Core Features
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-b924b055372935bf"></a>
- **M19-CAP-COVERAGE-b924b055372935bf**: Insurance Dashboard
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-a036d6fa7ec3e2e6"></a>
- **M19-CAP-COVERAGE-a036d6fa7ec3e2e6**: Policy Verification
  Applies to original IDs: 46, 206.

<a id="M19-CAP-COVERAGE-c7b527fdc2ccdfeb"></a>
- **M19-CAP-COVERAGE-c7b527fdc2ccdfeb**: Coverage Validation
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-c4649790414b834b"></a>
- **M19-CAP-COVERAGE-c4649790414b834b**: Claim Management
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d7a8c1cc10d88a9e"></a>
- **M19-CAP-COVERAGE-d7a8c1cc10d88a9e**: Hospital Billing
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-19cfd687422686c4"></a>
- **M19-CAP-COVERAGE-19cfd687422686c4**: Pharmacy Billing
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-15e08a501ad63e69"></a>
- **M19-CAP-COVERAGE-15e08a501ad63e69**: Telemedicine Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-3158a90d9a1cbd48"></a>
- **M19-CAP-COVERAGE-3158a90d9a1cbd48**: Payment Processing
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-b6780e92ed0e1272"></a>
- **M19-CAP-COVERAGE-b6780e92ed0e1272**: # Policy Management
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d7e3346f03b51c09"></a>
- **M19-CAP-COVERAGE-d7e3346f03b51c09**: Create Policy
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-9293d7c3ba4bb68f"></a>
- **M19-CAP-COVERAGE-9293d7c3ba4bb68f**: Update Policy
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-a0835f18c9aec498"></a>
- **M19-CAP-COVERAGE-a0835f18c9aec498**: Suspend Policy
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-a8bcf0bd01257652"></a>
- **M19-CAP-COVERAGE-a8bcf0bd01257652**: Renew Policy
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-8e1290ed61788aef"></a>
- **M19-CAP-COVERAGE-8e1290ed61788aef**: Cancel Policy
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-62e72b0939acfe91"></a>
- **M19-CAP-COVERAGE-62e72b0939acfe91**: Coverage History
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-da949bb458c61453"></a>
- **M19-CAP-COVERAGE-da949bb458c61453**: # Claims
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-4131be56e7359cd4"></a>
- **M19-CAP-COVERAGE-4131be56e7359cd4**: Create Claim
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-0f3684b8e4aaeadb"></a>
- **M19-CAP-COVERAGE-0f3684b8e4aaeadb**: Verify Claim
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-77d6fe62afcb4723"></a>
- **M19-CAP-COVERAGE-77d6fe62afcb4723**: Review Documents
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-8899deda7a6e2955"></a>
- **M19-CAP-COVERAGE-8899deda7a6e2955**: Approve Claim
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-e5971b6d945800c6"></a>
- **M19-CAP-COVERAGE-e5971b6d945800c6**: Reject Claim
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-5af5400f663d343d"></a>
- **M19-CAP-COVERAGE-5af5400f663d343d**: Payment Status
  Applies to original IDs: 46, 327.

<a id="M19-CAP-COVERAGE-44fadba2733db90f"></a>
- **M19-CAP-COVERAGE-44fadba2733db90f**: Claim History
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-2b7af3448a09c99e"></a>
- **M19-CAP-COVERAGE-2b7af3448a09c99e**: # Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-9b70ddf30f464c0c"></a>
- **M19-CAP-COVERAGE-9b70ddf30f464c0c**: Hospital Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-9a7a7ee17b6dd429"></a>
- **M19-CAP-COVERAGE-9a7a7ee17b6dd429**: Pharmacy Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-f9aec8d13f6f41a5"></a>
- **M19-CAP-COVERAGE-f9aec8d13f6f41a5**: Emergency Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-8eab0f1f635cb290"></a>
- **M19-CAP-COVERAGE-8eab0f1f635cb290**: International Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-250e5b3388e77fde"></a>
- **M19-CAP-COVERAGE-250e5b3388e77fde**: Travel Coverage
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-7a365d914338b8d3"></a>
- **M19-CAP-COVERAGE-7a365d914338b8d3**: # AI Features
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d3c6da22cf092259"></a>
- **M19-CAP-COVERAGE-d3c6da22cf092259**: Fraud Detection
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-38c8c4b701c02e2a"></a>
- **M19-CAP-COVERAGE-38c8c4b701c02e2a**: Automatic Claim Review
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-f2e8785b179bda4f"></a>
- **M19-CAP-COVERAGE-f2e8785b179bda4f**: Coverage Recommendation
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-dc735ef6c61429d3"></a>
- **M19-CAP-COVERAGE-dc735ef6c61429d3**: Risk Analysis
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-b4dc5fc7c96d35ac"></a>
- **M19-CAP-COVERAGE-b4dc5fc7c96d35ac**: Billing Validation
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-163c3fe221db2d5e"></a>
- **M19-CAP-COVERAGE-163c3fe221db2d5e**: Medical Cost Prediction
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-efc101e38d418651"></a>
- **M19-CAP-COVERAGE-efc101e38d418651**: # Security
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-374fbf095e7ca646"></a>
- **M19-CAP-COVERAGE-374fbf095e7ca646**: Insurance Verification
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-b95b8e5397e9b6e2"></a>
- **M19-CAP-COVERAGE-b95b8e5397e9b6e2**: Digital Signature
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-fd2f05fb7464e1d2"></a>
- **M19-CAP-COVERAGE-fd2f05fb7464e1d2**: Two-Factor Authentication
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d20a95b6b63719a7"></a>
- **M19-CAP-COVERAGE-d20a95b6b63719a7**: Audit Logs
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-8d02f72c1c0a1863"></a>
- **M19-CAP-COVERAGE-8d02f72c1c0a1863**: GDPR Compliance
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-c319f7ea6797eff9"></a>
- **M19-CAP-COVERAGE-c319f7ea6797eff9**: HIPAA Compliance
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-9879a69a15c5a50a"></a>
- **M19-CAP-COVERAGE-9879a69a15c5a50a**: # Integrations
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-db59f8620101e9fd"></a>
- **M19-CAP-COVERAGE-db59f8620101e9fd**: ├── Users
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-e496807084365b11"></a>
- **M19-CAP-COVERAGE-e496807084365b11**: ├── Hospitals
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-593a539148322e7e"></a>
- **M19-CAP-COVERAGE-593a539148322e7e**: ├── Doctors
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-5cbe96785bf5a069"></a>
- **M19-CAP-COVERAGE-5cbe96785bf5a069**: ├── Pharmacies
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d3290df0dc43733d"></a>
- **M19-CAP-COVERAGE-d3290df0dc43733d**: ├── Medical Documents
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-225d721817a80b2f"></a>
- **M19-CAP-COVERAGE-225d721817a80b2f**: ├── Notifications
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-48a0e7b8fcbc590c"></a>
- **M19-CAP-COVERAGE-48a0e7b8fcbc590c**: ├── Audit Logs
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-9d18db252c271b71"></a>
- **M19-CAP-COVERAGE-9d18db252c271b71**: Real-time Policy Verification
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-5ea1ed96924a8948"></a>
- **M19-CAP-COVERAGE-5ea1ed96924a8948**: AI Claim Processing
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-d3c707d760682c0f"></a>
- **M19-CAP-COVERAGE-d3c707d760682c0f**: International Insurance Network
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-fe5033a89346c782"></a>
- **M19-CAP-COVERAGE-fe5033a89346c782**: Cross-border Billing
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-97541a95e657f89e"></a>
- **M19-CAP-COVERAGE-97541a95e657f89e**: Smart Reimbursement
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-70d3fb72c79f9ddb"></a>
- **M19-CAP-COVERAGE-70d3fb72c79f9ddb**: Blockchain Claim Verification
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-a5b8db7f8f544b83"></a>
- **M19-CAP-COVERAGE-a5b8db7f8f544b83**: Automatic Policy Renewal
  Applies to original IDs: 46.

<a id="M19-CAP-COVERAGE-e8e678a36741181f"></a>
- **M19-CAP-COVERAGE-e8e678a36741181f**: # Insurance Module
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-f46e10af70055b66"></a>
- **M19-CAP-COVERAGE-f46e10af70055b66**: Stores
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-8c19f245b352d47d"></a>
- **M19-CAP-COVERAGE-8c19f245b352d47d**: Insurance Company
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-411909b6f071a0c6"></a>
- **M19-CAP-COVERAGE-411909b6f071a0c6**: Policy Number
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-864d8ee14d518aed"></a>
- **M19-CAP-COVERAGE-864d8ee14d518aed**: Coverage
  Applies to original IDs: 113, 1215.

<a id="M19-CAP-COVERAGE-8154ac552d297e62"></a>
- **M19-CAP-COVERAGE-8154ac552d297e62**: Expiration
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-8a9a950b79221454"></a>
- **M19-CAP-COVERAGE-8a9a950b79221454**: Emergency Hotline
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-6dbf59519601ac0d"></a>
- **M19-CAP-COVERAGE-6dbf59519601ac0d**: Future
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-307535dd1a7aeae7"></a>
- **M19-CAP-COVERAGE-307535dd1a7aeae7**: Claim Submission
  Applies to original IDs: 113.

<a id="M19-CAP-COVERAGE-5fc160a6117ee040"></a>
- **M19-CAP-COVERAGE-5fc160a6117ee040**: # Medical Membership Center
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-e9ff18cc7d178053"></a>
- **M19-CAP-COVERAGE-e9ff18cc7d178053**: Provides a centralized area where users can view available membership plans and compare included services.
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-4fbeeb87456accf5"></a>
- **M19-CAP-COVERAGE-4fbeeb87456accf5**: Supports
  Applies to original IDs: 321, 322, 323, 324, 325, 327, 329, 1317, 1889, 458, 478, 497.

<a id="M19-CAP-COVERAGE-7285f443f3415079"></a>
- **M19-CAP-COVERAGE-7285f443f3415079**: Membership Overview
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-71c2a9888e2ba44e"></a>
- **M19-CAP-COVERAGE-71c2a9888e2ba44e**: Feature Comparison
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-a15f1501a661e7e2"></a>
- **M19-CAP-COVERAGE-a15f1501a661e7e2**: Upgrade Options
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-288bff2c922c8013"></a>
- **M19-CAP-COVERAGE-288bff2c922c8013**: Membership History
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-f3fe52f1bb406324"></a>
- **M19-CAP-COVERAGE-f3fe52f1bb406324**: Billing Information
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-81b15e383f4801b8"></a>
- **M19-CAP-COVERAGE-81b15e383f4801b8**: Integrated with user account settings.
  Applies to original IDs: 321.

<a id="M19-CAP-COVERAGE-0799a91c0013bce6"></a>
- **M19-CAP-COVERAGE-0799a91c0013bce6**: # Digital Invoice Center
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-ab8f3215eaf42cd9"></a>
- **M19-CAP-COVERAGE-ab8f3215eaf42cd9**: Stores digital invoices related to healthcare services.
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-4978a251e71671a2"></a>
- **M19-CAP-COVERAGE-4978a251e71671a2**: Consultation Payments
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-7a2e25af23e3cc44"></a>
- **M19-CAP-COVERAGE-7a2e25af23e3cc44**: Laboratory Payments
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-cf9b427b6670a5db"></a>
- **M19-CAP-COVERAGE-cf9b427b6670a5db**: Pharmacy Payments
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-13a1d3a406e0d9f5"></a>
- **M19-CAP-COVERAGE-13a1d3a406e0d9f5**: Medical Tourism Services
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-e30ce98bef994f0d"></a>
- **M19-CAP-COVERAGE-e30ce98bef994f0d**: Downloadable Receipts
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-e86123095ba99963"></a>
- **M19-CAP-COVERAGE-e86123095ba99963**: Provides chronological financial history.
  Applies to original IDs: 322.

<a id="M19-CAP-COVERAGE-a364836a18ba62c1"></a>
- **M19-CAP-COVERAGE-a364836a18ba62c1**: # Healthcare Payment History
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-6963d484b614ffb2"></a>
- **M19-CAP-COVERAGE-6963d484b614ffb2**: Stores complete payment history.
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-703ea7dbc5d7a043"></a>
- **M19-CAP-COVERAGE-703ea7dbc5d7a043**: Date
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-0b44b0bbc237f45f"></a>
- **M19-CAP-COVERAGE-0b44b0bbc237f45f**: Provider
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-9a1a2daac8faacf8"></a>
- **M19-CAP-COVERAGE-9a1a2daac8faacf8**: Service
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-e41a15fb9c0ccc93"></a>
- **M19-CAP-COVERAGE-e41a15fb9c0ccc93**: Amount
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-5f94a7e341e3f6d8"></a>
- **M19-CAP-COVERAGE-5f94a7e341e3f6d8**: Currency
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-c210245ecbb3e3d2"></a>
- **M19-CAP-COVERAGE-c210245ecbb3e3d2**: Allows filtering and exporting payment records.
  Applies to original IDs: 323.

<a id="M19-CAP-COVERAGE-7a4620cf5fdf0582"></a>
- **M19-CAP-COVERAGE-7a4620cf5fdf0582**: # Medical Expense Analytics
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-78bf8e4747a5ccb4"></a>
- **M19-CAP-COVERAGE-78bf8e4747a5ccb4**: Provides visual analysis of healthcare expenses.
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-76943286e9b3b8ea"></a>
- **M19-CAP-COVERAGE-76943286e9b3b8ea**: Monthly Expenses
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-d2ba4b61f033582c"></a>
- **M19-CAP-COVERAGE-d2ba4b61f033582c**: Annual Expenses
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-88fe51747c89e795"></a>
- **M19-CAP-COVERAGE-88fe51747c89e795**: Service Categories
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-dbed1fc4b9b5e0d9"></a>
- **M19-CAP-COVERAGE-dbed1fc4b9b5e0d9**: Country Comparison
  Applies to original IDs: 324, 458, 478, 497.

<a id="M19-CAP-COVERAGE-ebfe3d28b42d6be3"></a>
- **M19-CAP-COVERAGE-ebfe3d28b42d6be3**: Provider Comparison
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-0cafdba772244a3a"></a>
- **M19-CAP-COVERAGE-0cafdba772244a3a**: Displays interactive charts.
  Applies to original IDs: 324.

<a id="M19-CAP-COVERAGE-0932591c7ffe6cf6"></a>
- **M19-CAP-COVERAGE-0932591c7ffe6cf6**: # Healthcare Budget Planner
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-76a8a940af57800a"></a>
- **M19-CAP-COVERAGE-76a8a940af57800a**: Allows users to create healthcare budgets.
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-6f1554a232af18a3"></a>
- **M19-CAP-COVERAGE-6f1554a232af18a3**: Annual Budget
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-99df32f996dc7a10"></a>
- **M19-CAP-COVERAGE-99df32f996dc7a10**: Monthly Budget
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-8c3ef1cf80ab83ea"></a>
- **M19-CAP-COVERAGE-8c3ef1cf80ab83ea**: Planned Procedures
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-1a796ca874be866e"></a>
- **M19-CAP-COVERAGE-1a796ca874be866e**: Medication Budget
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-d1ddfede80351b09"></a>
- **M19-CAP-COVERAGE-d1ddfede80351b09**: Preventive Care Budget
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-cd185f07d96c8e6b"></a>
- **M19-CAP-COVERAGE-cd185f07d96c8e6b**: Provides expenditure forecasting.
  Applies to original IDs: 325.

<a id="M19-CAP-COVERAGE-515771813c2c4e8f"></a>
- **M19-CAP-COVERAGE-515771813c2c4e8f**: # Subscription History
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-2b05cf059889dd64"></a>
- **M19-CAP-COVERAGE-2b05cf059889dd64**: Displays chronological history of healthcare memberships.
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-018f1bea640bb3e5"></a>
- **M19-CAP-COVERAGE-018f1bea640bb3e5**: Activation Date
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-ce0485ccde7b2a7d"></a>
- **M19-CAP-COVERAGE-ce0485ccde7b2a7d**: Renewal Date
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-337b49704d348de9"></a>
- **M19-CAP-COVERAGE-337b49704d348de9**: Expiration Date
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-20cd7e4732263890"></a>
- **M19-CAP-COVERAGE-20cd7e4732263890**: Provides complete subscription history.
  Applies to original IDs: 327.

<a id="M19-CAP-COVERAGE-46a6ad1771769e0c"></a>
- **M19-CAP-COVERAGE-46a6ad1771769e0c**: # Family Healthcare Finance
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-91bcfe5cf908c4e5"></a>
- **M19-CAP-COVERAGE-91bcfe5cf908c4e5**: Supports consolidated financial overview for family accounts.
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-01bbec9df504a305"></a>
- **M19-CAP-COVERAGE-01bbec9df504a305**: Includes
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-618ceac743648c13"></a>
- **M19-CAP-COVERAGE-618ceac743648c13**: Individual Expenses
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-f7413b55ece27160"></a>
- **M19-CAP-COVERAGE-f7413b55ece27160**: Shared Expenses
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-a5a63a9f074fc224"></a>
- **M19-CAP-COVERAGE-a5a63a9f074fc224**: Children Healthcare Costs
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-1d3f425f760163dd"></a>
- **M19-CAP-COVERAGE-1d3f425f760163dd**: Family Reports
  Applies to original IDs: 328.

<a id="M19-CAP-COVERAGE-bce8d63fd76292c7"></a>
- **M19-CAP-COVERAGE-bce8d63fd76292c7**: # Financial Reports
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-a91784be135689d2"></a>
- **M19-CAP-COVERAGE-a91784be135689d2**: Generates structured healthcare financial reports.
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-b4d0d1cdc20c0903"></a>
- **M19-CAP-COVERAGE-b4d0d1cdc20c0903**: Monthly Reports
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-5a67273292f2f6f5"></a>
- **M19-CAP-COVERAGE-5a67273292f2f6f5**: Annual Reports
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-f39e56781debd080"></a>
- **M19-CAP-COVERAGE-f39e56781debd080**: Category Reports
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-748a3e86d4da630c"></a>
- **M19-CAP-COVERAGE-748a3e86d4da630c**: Export Functions
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-95a936530bcb500b"></a>
- **M19-CAP-COVERAGE-95a936530bcb500b**: Designed for personal financial management.
  Applies to original IDs: 329.

<a id="M19-CAP-COVERAGE-97ce42ca415b2860"></a>
- **M19-CAP-COVERAGE-97ce42ca415b2860**: Validates insurance claims.
  Applies to original IDs: 1215.

<a id="M19-CAP-COVERAGE-f62ebcef0792a834"></a>
- **M19-CAP-COVERAGE-f62ebcef0792a834**: Checks
  Applies to original IDs: 1215.

<a id="M19-CAP-COVERAGE-5f124f9e42776b79"></a>
- **M19-CAP-COVERAGE-5f124f9e42776b79**: Diagnosis
  Applies to original IDs: 1215.

<a id="M19-CAP-COVERAGE-228b18d13e8b34f1"></a>
- **M19-CAP-COVERAGE-228b18d13e8b34f1**: Procedures
  Applies to original IDs: 1215.

<a id="M19-CAP-COVERAGE-ebe09673a462735e"></a>
- **M19-CAP-COVERAGE-ebe09673a462735e**: Optimizes insurance utilization.
  Applies to original IDs: 1317.

<a id="M19-CAP-COVERAGE-2acf29bc17c0de1b"></a>
- **M19-CAP-COVERAGE-2acf29bc17c0de1b**: Coverage Analysis
  Applies to original IDs: 1317.

<a id="M19-CAP-COVERAGE-ec48fef0c3f58f16"></a>
- **M19-CAP-COVERAGE-ec48fef0c3f58f16**: Cost Prediction
  Applies to original IDs: 1317.

<a id="M19-CAP-COVERAGE-1119f531d119b577"></a>
- **M19-CAP-COVERAGE-1119f531d119b577**: Reimbursement
  Applies to original IDs: 1317.

<a id="M19-CAP-COVERAGE-5eac61bb75cf75fa"></a>
- **M19-CAP-COVERAGE-5eac61bb75cf75fa**: Coordinates international medical insurance.
  Applies to original IDs: 1889.

<a id="M19-CAP-COVERAGE-05ae5933be6c10c7"></a>
- **M19-CAP-COVERAGE-05ae5933be6c10c7**: Coverage Verification
  Applies to original IDs: 1889.

<a id="M19-CAP-COVERAGE-079cf9b52818f426"></a>
- **M19-CAP-COVERAGE-079cf9b52818f426**: Claims
  Applies to original IDs: 1889, 206.

<a id="M19-CAP-COVERAGE-af9e7bda4f0f43fd"></a>
- **M19-CAP-COVERAGE-af9e7bda4f0f43fd**: Cross-border Payments
  Applies to original IDs: 1889.

<a id="M19-CAP-COVERAGE-fc1b44c1d4878793"></a>
- **M19-CAP-COVERAGE-fc1b44c1d4878793**: Functions
  Applies to original IDs: 206.

<a id="M19-CAP-COVERAGE-f49f2ddc0e7b3e0f"></a>
- **M19-CAP-COVERAGE-f49f2ddc0e7b3e0f**: Coverage Check
  Applies to original IDs: 206.

<a id="M19-CAP-COVERAGE-abd2ceb47af048c8"></a>
- **M19-CAP-COVERAGE-abd2ceb47af048c8**: Digital Approval
  Applies to original IDs: 206.

<a id="M19-CAP-COVERAGE-f57a2598cdedb711"></a>
- **M19-CAP-COVERAGE-f57a2598cdedb711**: Payments
  Applies to original IDs: 206.

<a id="M19-CAP-COVERAGE-2d052ebdee2572b1"></a>
- **M19-CAP-COVERAGE-2d052ebdee2572b1**: Medical Reports
  Applies to original IDs: 206.

<a id="M19-CAP-COVERAGE-6362237416a71094"></a>
- **M19-CAP-COVERAGE-6362237416a71094**: # Dental Cost Estimator
  Applies to original IDs: 458.

<a id="M19-CAP-COVERAGE-130a8ab292ef538c"></a>
- **M19-CAP-COVERAGE-130a8ab292ef538c**: Displays estimated treatment costs.
  Applies to original IDs: 458.

<a id="M19-CAP-COVERAGE-ba1af87f13afdea1"></a>
- **M19-CAP-COVERAGE-ba1af87f13afdea1**: Clinic Comparison
  Applies to original IDs: 458, 478, 497.

<a id="M19-CAP-COVERAGE-278bf435a2bd3707"></a>
- **M19-CAP-COVERAGE-278bf435a2bd3707**: Currency Conversion
  Applies to original IDs: 458, 478.

<a id="M19-CAP-COVERAGE-ef844a7c09388dbe"></a>
- **M19-CAP-COVERAGE-ef844a7c09388dbe**: # Dermatology Cost Estimator
  Applies to original IDs: 478.

<a id="M19-CAP-COVERAGE-773958507b4c3e06"></a>
- **M19-CAP-COVERAGE-773958507b4c3e06**: Displays estimated dermatology treatment costs.
  Applies to original IDs: 478.

<a id="M19-CAP-COVERAGE-2a095782d9779c20"></a>
- **M19-CAP-COVERAGE-2a095782d9779c20**: # Sexual Health Cost Estimator
  Applies to original IDs: 497.

<a id="M19-CAP-COVERAGE-68f978380a3c0637"></a>
- **M19-CAP-COVERAGE-68f978380a3c0637**: Displays estimated costs for consultations, laboratory examinations and treatment.
  Applies to original IDs: 497.
