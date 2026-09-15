# CORE-CAP-APPOINTMENTS — shared capability and profiles

MASTER-08 · ADOPTED_DOCUMENTATION_BASELINE. Clinical approval and implementation readiness: not established. One owner is used across all profiles below; profiles are not separate canonical modules.

## Ownership, data and workflow

Logical documentation ownership confirmed by explicit profile comparisons and prior owner register; facts and execution authorities remain separate.

Entities: Appointment, ParticipantReference, AvailabilityReference, TimeZone, BookingRevision. Dependencies: CAP-APPOINTMENTS, CAP-DATA, CAP-CONSENT, CAP-AUDIT.

Resolve verified clinician/facility/channel → select time-zone-aware availability → authorize booking → idempotent reserve → confirm/reschedule/cancel with version check. Booking does not authorize treatment or start a telemedicine encounter.

All records carry opaque id, tenant/patient reference, actor, purpose, profile/version, effective/recorded timestamps, source/version/hash, status and correction linkage. Missing, unknown, not tested and conflicting remain distinct. Exact types/cardinalities/value sets remain implementation gates. Commands create a versioned bounded owner artifact, request authorized context, record professional review and invalidate a derived artifact. Errors include ACCESS_DENIED, STALE_CONTEXT, INVALID_SOURCE, UNKNOWN_UNIT and INSUFFICIENT_EVIDENCE. Idempotent events carry opaque IDs/versions, not sensitive payloads. External profiles require independently tested partner releases.

## Safety, security, privacy and acceptance

No autonomous diagnosis, prescribing, dose/ventilator/pump change, emergency disposition or clinical-fact overwrite. Preserve REPORTED, OBSERVED, MEASURED, CLINICIAN_ASSESSED, INFERRED, PREDICTED and SIMULATED separately. Uncertain or incomplete evidence cannot become normality, eligibility or remission.

Per-record/encounter tenant, actor, purpose, age/assent/guardian authority, jurisdiction, restriction, expiry and revocation checks apply to views, exports, caches and downstream AI. Family/genomic and restricted session information is separately segmented; routine logs contain opaque IDs and hashes. Encryption in transit/at rest, managed keys, least privilege and service authentication require deployment verification; no credentials are embedded here.

Reject identity/unit/schema/context-version conflicts with explicit unavailable/partial state; quarantine untrusted input. Retries use stable source event IDs and idempotency keys; corrections preserve history. Invalidate dependent artifacts on source, permission or model changes. Human clinical care never waits for a model.

All source fragments and profile-specific clauses resolve to canonical anchors; preserve source versions and single aliases. Contract suites must cover wrong patient, missing/ambiguous units, stale context, revoked access, duplicate/out-of-order events and forbidden clinical actions. Documentation tests do not establish implemented system behavior.

Concrete schemas/cardinalities, partner terminology/profile versions, security/privacy evidence, clinical intended-use sign-off, numerical/model evaluations, end-to-end and human-factors acceptance remain open; see implementation_gate_matrix.json.

## Semantic profiles

### M08-APPOINTMENTS

Original IDs: 843, 863, 883, 903, 923, 943, 963, 993, 1003, 1073, 1093, 1113, 1123.

Twelve specialty bookings and surgery booking are profiles of one appointment owner. Preserve each specialty, clinic, clinician/surgeon and online/telemedicine channel; booking is not a consultation encounter, consent or surgical authorization. Availability/reschedule/cancel and time-zone rules require bounded contract evidence.

Resolve verified clinician/facility/channel → select time-zone-aware availability → authorize booking → idempotent reserve → confirm/reschedule/cancel with version check. Booking does not authorize treatment or start a telemedicine encounter.

## Integrated extension decisions



## Preserved canonical requirements

Historical proposal revision/status text below records provenance; current disposition is the integrated decision above.

<a id="M08-CAP-APPOINTMENTS-49980cf0280e9594"></a>
- **M08-CAP-APPOINTMENTS-49980cf0280e9594**: Allows scheduling consultations with pediatric cardiologists.
  Origin: original 843

<a id="M08-CAP-APPOINTMENTS-76968af3bfd3face"></a>
- **M08-CAP-APPOINTMENTS-76968af3bfd3face**: Clinic
  Origin: original 843, original 863, original 883, original 903, original 923, original 943, original 963, original 993, original 1003, original 1073, original 1093, original 1113, original 1123

<a id="M08-CAP-APPOINTMENTS-55faff639138dc86"></a>
- **M08-CAP-APPOINTMENTS-55faff639138dc86**: Physician
  Origin: original 843, original 863, original 883, original 903, original 923, original 943, original 963, original 993, original 1003, original 1073, original 1093, original 1113

<a id="M08-CAP-APPOINTMENTS-76507b42b60ede7f"></a>
- **M08-CAP-APPOINTMENTS-76507b42b60ede7f**: Online Consultation
  Origin: original 843, original 863, original 883

<a id="M08-CAP-APPOINTMENTS-5d262e320801e3f8"></a>
- **M08-CAP-APPOINTMENTS-5d262e320801e3f8**: Allows scheduling consultations with pediatric endocrinologists.
  Origin: original 863

<a id="M08-CAP-APPOINTMENTS-6b2c9d729f9c0c74"></a>
- **M08-CAP-APPOINTMENTS-6b2c9d729f9c0c74**: Allows scheduling consultations with pediatric neurologists.
  Origin: original 883

<a id="M08-CAP-APPOINTMENTS-649915d4dc738f08"></a>
- **M08-CAP-APPOINTMENTS-649915d4dc738f08**: Allows scheduling consultations with pediatric pulmonologists.
  Origin: original 903

<a id="M08-CAP-APPOINTMENTS-338cd6a1ad180ca5"></a>
- **M08-CAP-APPOINTMENTS-338cd6a1ad180ca5**: Telemedicine
  Origin: original 903, original 923, original 943, original 963, original 993, original 1003, original 1073, original 1093, original 1113, original 1123

<a id="M08-CAP-APPOINTMENTS-f671d38b95e2e5ee"></a>
- **M08-CAP-APPOINTMENTS-f671d38b95e2e5ee**: Allows scheduling consultations with pediatric nephrologists.
  Origin: original 923

<a id="M08-CAP-APPOINTMENTS-3eb3bf320daef275"></a>
- **M08-CAP-APPOINTMENTS-3eb3bf320daef275**: Allows scheduling consultations with pediatric gastroenterologists.
  Origin: original 943

<a id="M08-CAP-APPOINTMENTS-2b9c85ebdd755fc8"></a>
- **M08-CAP-APPOINTMENTS-2b9c85ebdd755fc8**: Allows scheduling consultations with pediatric hematologists.
  Origin: original 963

<a id="M08-CAP-APPOINTMENTS-da3a00b6fb68379a"></a>
- **M08-CAP-APPOINTMENTS-da3a00b6fb68379a**: Allows scheduling consultations with pediatric immunologists.
  Origin: original 993

<a id="M08-CAP-APPOINTMENTS-2e458bbfed92c957"></a>
- **M08-CAP-APPOINTMENTS-2e458bbfed92c957**: Allows scheduling consultations with pediatric infectious disease specialists.
  Origin: original 1003

<a id="M08-CAP-APPOINTMENTS-37f9a232d42d89ad"></a>
- **M08-CAP-APPOINTMENTS-37f9a232d42d89ad**: Allows scheduling ENT consultations.
  Origin: original 1073

<a id="M08-CAP-APPOINTMENTS-13a125118a2be7ca"></a>
- **M08-CAP-APPOINTMENTS-13a125118a2be7ca**: Allows scheduling dermatology consultations.
  Origin: original 1093

<a id="M08-CAP-APPOINTMENTS-e605999a5648ae9f"></a>
- **M08-CAP-APPOINTMENTS-e605999a5648ae9f**: Schedules allergy consultations.
  Origin: original 1113

<a id="M08-CAP-APPOINTMENTS-c3ab85c2fa036893"></a>
- **M08-CAP-APPOINTMENTS-c3ab85c2fa036893**: Allows scheduling surgical consultations.
  Origin: original 1123

<a id="M08-CAP-APPOINTMENTS-4d2b58385f4ea306"></a>
- **M08-CAP-APPOINTMENTS-4d2b58385f4ea306**: Surgeon
  Origin: original 1123

## Preserved source metadata

<a id="M08-CAP-APPOINTMENTS-db407470bb83b179"></a>
- **M08-CAP-APPOINTMENTS-db407470bb83b179**: # Pediatric Cardiology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-4fbeeb87456accf5"></a>
- **M08-CAP-APPOINTMENTS-4fbeeb87456accf5**: Supports

<a id="M08-CAP-APPOINTMENTS-5ba74d8fcc7b20cc"></a>
- **M08-CAP-APPOINTMENTS-5ba74d8fcc7b20cc**: Status

<a id="M08-CAP-APPOINTMENTS-d5232cbd3a326267"></a>
- **M08-CAP-APPOINTMENTS-d5232cbd3a326267**: Documentation

<a id="M08-CAP-APPOINTMENTS-6f33acf3afb37064"></a>
- **M08-CAP-APPOINTMENTS-6f33acf3afb37064**: ---

<a id="M08-CAP-APPOINTMENTS-4f4ed295c0f01bf6"></a>
- **M08-CAP-APPOINTMENTS-4f4ed295c0f01bf6**: # Pediatric Endocrinology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-3c3a5d9d69ece88a"></a>
- **M08-CAP-APPOINTMENTS-3c3a5d9d69ece88a**: # Pediatric Neurology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-43eaee8edc6bc186"></a>
- **M08-CAP-APPOINTMENTS-43eaee8edc6bc186**: # Pediatric Pulmonology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-8db6a63838bd8730"></a>
- **M08-CAP-APPOINTMENTS-8db6a63838bd8730**: # Pediatric Nephrology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-0bb93b978245a587"></a>
- **M08-CAP-APPOINTMENTS-0bb93b978245a587**: # Pediatric Gastroenterology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-eca6c39f868e6dfa"></a>
- **M08-CAP-APPOINTMENTS-eca6c39f868e6dfa**: # Pediatric Hematology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-e9d38558e1672ca5"></a>
- **M08-CAP-APPOINTMENTS-e9d38558e1672ca5**: # Pediatric Immunology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-ffb18e3010116922"></a>
- **M08-CAP-APPOINTMENTS-ffb18e3010116922**: # Pediatric Dermatology Appointment Booking

<a id="M08-CAP-APPOINTMENTS-255f229bc74831f1"></a>
- **M08-CAP-APPOINTMENTS-255f229bc74831f1**: # Pediatric Surgery Appointment Booking

[Applied migration](../../../audit/master-08/requirement_migration.json) · [Gap disposition](../../../audit/master-08/gap_disposition.json) · [Readiness gates](../../../audit/master-08/implementation_gate_matrix.json).
