# CORE-CAP-APPOINTMENTS — consolidated source profiles

Extends existing canonical owner and all prior addenda. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## appointments

Appointments owns booking, availability, reschedule/cancel and time-zone state. Specialty, insurance and preparation context remain parameters; booking does not prove clinical eligibility or attendance.

Acceptance additions: Test double booking, time-zone/DST ambiguity, idempotent cancellation, stale provider availability and permission changes. Reminder delivery is separate from attendance.

## Source scope

- Original 253 / appointments: Online Appointment System — Coordinate online booking, time zones, reminders, rescheduling and cancellation.
- Original 365 / appointments: Laboratory Appointment Booking — Allows users to schedule laboratory visits.
- Original 443 / appointments: Dental Appointment Booking — Allows users to schedule dental consultations.
- Original 463 / appointments: Dermatology Appointment Booking — Allows scheduling dermatology consultations.
- Original 483 / appointments: Sexual Health Appointment Booking — Allows scheduling confidential consultations.
- Original 503 / appointments: Cardiology Appointment Booking — Allows scheduling cardiology consultations.
- Original 523 / appointments: Neurology Appointment Booking — Allows scheduling neurology consultations.
- Original 543 / appointments: Ophthalmology Appointment Booking — Allows scheduling ophthalmology consultations.
- Original 563 / appointments: Endocrinology Appointment Booking — Allows scheduling endocrinology consultations.
- Original 583 / appointments: Pulmonology Appointment Booking — Allows scheduling pulmonology consultations.
- Original 603 / appointments: Gastroenterology Appointment Booking — Allows scheduling gastroenterology consultations.
- Original 633 / appointments: Nephrology Appointment Booking — Allows scheduling nephrology consultations.
- Original 653 / appointments: Urology Appointment Booking — Allows scheduling urology consultations.
- Original 673 / appointments: Andrology Appointment Booking — Allows scheduling consultations with andrologists.
- Original 693 / appointments: Gynecology Appointment Booking — Allows scheduling gynecological consultations.
- Original 783 / appointments: Mammology Appointment Booking — Allows scheduling mammology consultations.
- Original 803 / appointments: Gynecologic Oncology Appointment Booking — Allows scheduling consultations with gynecologic oncologists.
- Original 823 / appointments: Pediatric Appointment Booking — Allows booking pediatric consultations.
- Original 983 / appointments: Pediatric Rheumatology Appointment Booking — Allows scheduling consultations with pediatric rheumatologists.
- Original 1033 / appointments: Pediatric Orthopedic Appointment Booking — Scheduling consultations with pediatric orthopedic specialists.
- Original 1053 / appointments: Pediatric Ophthalmology Appointment Booking — Allows scheduling consultations with pediatric ophthalmologists.

## Requirements and source metadata

<a id="M15-CAP-APPOINTMENTS-10b9861dbb6c4c1f"></a>
- **M15-CAP-APPOINTMENTS-10b9861dbb6c4c1f**: # Appointment System
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-4fbeeb87456accf5"></a>
- **M15-CAP-APPOINTMENTS-4fbeeb87456accf5**: Supports
  Applies to original IDs: 253, 365, 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783, 803, 823, 983, 1033, 1053.

<a id="M15-CAP-APPOINTMENTS-da412981386de473"></a>
- **M15-CAP-APPOINTMENTS-da412981386de473**: Online Booking
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-10a193e1c613340b"></a>
- **M15-CAP-APPOINTMENTS-10a193e1c613340b**: Calendar
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-7b7f28d78737f297"></a>
- **M15-CAP-APPOINTMENTS-7b7f28d78737f297**: Time Zones
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-1e4cb80e69c46baf"></a>
- **M15-CAP-APPOINTMENTS-1e4cb80e69c46baf**: Automatic Reminders
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-a199acd34aacf4f6"></a>
- **M15-CAP-APPOINTMENTS-a199acd34aacf4f6**: Rescheduling
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-e00822ff7d748f94"></a>
- **M15-CAP-APPOINTMENTS-e00822ff7d748f94**: Cancellation
  Applies to original IDs: 253.

<a id="M15-CAP-APPOINTMENTS-5ba74d8fcc7b20cc"></a>
- **M15-CAP-APPOINTMENTS-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 253, 365, 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783, 803, 823, 983, 1053.

<a id="M15-CAP-APPOINTMENTS-d5232cbd3a326267"></a>
- **M15-CAP-APPOINTMENTS-d5232cbd3a326267**: Documentation
  Applies to original IDs: 253, 365, 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783, 803, 823, 983, 1053.

<a id="M15-CAP-APPOINTMENTS-6f33acf3afb37064"></a>
- **M15-CAP-APPOINTMENTS-6f33acf3afb37064**: ---
  Applies to original IDs: 253, 365, 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783, 803, 823, 983, 1033, 1053.

<a id="M15-CAP-APPOINTMENTS-a4697a909f6b4d44"></a>
- **M15-CAP-APPOINTMENTS-a4697a909f6b4d44**: # Laboratory Appointment Booking
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-3a7192631cd9a7a3"></a>
- **M15-CAP-APPOINTMENTS-3a7192631cd9a7a3**: Allows users to schedule laboratory visits.
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-fc05fd6f6d32dcca"></a>
- **M15-CAP-APPOINTMENTS-fc05fd6f6d32dcca**: Date Selection
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-0a870a86b3feb8a4"></a>
- **M15-CAP-APPOINTMENTS-0a870a86b3feb8a4**: Time Selection
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-9e51e169e40cb82d"></a>
- **M15-CAP-APPOINTMENTS-9e51e169e40cb82d**: Branch Selection
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-58ae1ec4e082a4cb"></a>
- **M15-CAP-APPOINTMENTS-58ae1ec4e082a4cb**: Appointment Confirmation
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-7037fe908feae151"></a>
- **M15-CAP-APPOINTMENTS-7037fe908feae151**: Integrated with participating laboratories.
  Applies to original IDs: 365.

<a id="M15-CAP-APPOINTMENTS-dca72bbee29570ad"></a>
- **M15-CAP-APPOINTMENTS-dca72bbee29570ad**: # Dental Appointment Booking
  Applies to original IDs: 443.

<a id="M15-CAP-APPOINTMENTS-b657511ecc1c2269"></a>
- **M15-CAP-APPOINTMENTS-b657511ecc1c2269**: Allows users to schedule dental consultations.
  Applies to original IDs: 443.

<a id="M15-CAP-APPOINTMENTS-703ea7dbc5d7a043"></a>
- **M15-CAP-APPOINTMENTS-703ea7dbc5d7a043**: Date
  Applies to original IDs: 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783.

<a id="M15-CAP-APPOINTMENTS-1ef4251455566e4b"></a>
- **M15-CAP-APPOINTMENTS-1ef4251455566e4b**: Time
  Applies to original IDs: 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 653, 673, 693, 783.

<a id="M15-CAP-APPOINTMENTS-79882aba52e58450"></a>
- **M15-CAP-APPOINTMENTS-79882aba52e58450**: Dentist Selection
  Applies to original IDs: 443.

<a id="M15-CAP-APPOINTMENTS-79207ac485cbe950"></a>
- **M15-CAP-APPOINTMENTS-79207ac485cbe950**: Online Confirmation
  Applies to original IDs: 443, 463, 483, 503, 523, 543, 563, 583, 603, 633, 673, 693.

<a id="M15-CAP-APPOINTMENTS-fa5b802f2ccf98e5"></a>
- **M15-CAP-APPOINTMENTS-fa5b802f2ccf98e5**: # Dermatology Appointment Booking
  Applies to original IDs: 463.

<a id="M15-CAP-APPOINTMENTS-13a125118a2be7ca"></a>
- **M15-CAP-APPOINTMENTS-13a125118a2be7ca**: Allows scheduling dermatology consultations.
  Applies to original IDs: 463.

<a id="M15-CAP-APPOINTMENTS-c772a16e395d2605"></a>
- **M15-CAP-APPOINTMENTS-c772a16e395d2605**: Physician Selection
  Applies to original IDs: 463, 483, 503, 523, 543, 563, 583, 603, 633, 673, 693.

<a id="M15-CAP-APPOINTMENTS-21084077790342ff"></a>
- **M15-CAP-APPOINTMENTS-21084077790342ff**: # Sexual Health Appointment Booking
  Applies to original IDs: 483.

<a id="M15-CAP-APPOINTMENTS-23efd6cd74120dba"></a>
- **M15-CAP-APPOINTMENTS-23efd6cd74120dba**: Allows scheduling confidential consultations.
  Applies to original IDs: 483.

<a id="M15-CAP-APPOINTMENTS-c003b7c3f8f1fc46"></a>
- **M15-CAP-APPOINTMENTS-c003b7c3f8f1fc46**: # Cardiology Appointment Booking
  Applies to original IDs: 503.

<a id="M15-CAP-APPOINTMENTS-b2afeadf9e778f91"></a>
- **M15-CAP-APPOINTMENTS-b2afeadf9e778f91**: Allows scheduling cardiology consultations.
  Applies to original IDs: 503.

<a id="M15-CAP-APPOINTMENTS-7bfc1267908fe4dd"></a>
- **M15-CAP-APPOINTMENTS-7bfc1267908fe4dd**: # Neurology Appointment Booking
  Applies to original IDs: 523.

<a id="M15-CAP-APPOINTMENTS-4d629fab617b50c5"></a>
- **M15-CAP-APPOINTMENTS-4d629fab617b50c5**: Allows scheduling neurology consultations.
  Applies to original IDs: 523.

<a id="M15-CAP-APPOINTMENTS-05894c59f03eb6df"></a>
- **M15-CAP-APPOINTMENTS-05894c59f03eb6df**: # Ophthalmology Appointment Booking
  Applies to original IDs: 543.

<a id="M15-CAP-APPOINTMENTS-d354626fc7cfb596"></a>
- **M15-CAP-APPOINTMENTS-d354626fc7cfb596**: Allows scheduling ophthalmology consultations.
  Applies to original IDs: 543.

<a id="M15-CAP-APPOINTMENTS-70516b5230b45475"></a>
- **M15-CAP-APPOINTMENTS-70516b5230b45475**: # Endocrinology Appointment Booking
  Applies to original IDs: 563.

<a id="M15-CAP-APPOINTMENTS-4f506e976549ba05"></a>
- **M15-CAP-APPOINTMENTS-4f506e976549ba05**: Allows scheduling endocrinology consultations.
  Applies to original IDs: 563.

<a id="M15-CAP-APPOINTMENTS-6ee448c29fa1d809"></a>
- **M15-CAP-APPOINTMENTS-6ee448c29fa1d809**: # Pulmonology Appointment Booking
  Applies to original IDs: 583.

<a id="M15-CAP-APPOINTMENTS-e76e759bf7b9b72c"></a>
- **M15-CAP-APPOINTMENTS-e76e759bf7b9b72c**: Allows scheduling pulmonology consultations.
  Applies to original IDs: 583.

<a id="M15-CAP-APPOINTMENTS-a6c46f1d2dae22f9"></a>
- **M15-CAP-APPOINTMENTS-a6c46f1d2dae22f9**: # Gastroenterology Appointment Booking
  Applies to original IDs: 603.

<a id="M15-CAP-APPOINTMENTS-0d7deaafb1d913c2"></a>
- **M15-CAP-APPOINTMENTS-0d7deaafb1d913c2**: Allows scheduling gastroenterology consultations.
  Applies to original IDs: 603.

<a id="M15-CAP-APPOINTMENTS-c36367dd3c4010de"></a>
- **M15-CAP-APPOINTMENTS-c36367dd3c4010de**: # Nephrology Appointment Booking
  Applies to original IDs: 633.

<a id="M15-CAP-APPOINTMENTS-e6563f5b69a73263"></a>
- **M15-CAP-APPOINTMENTS-e6563f5b69a73263**: Allows scheduling nephrology consultations.
  Applies to original IDs: 633.

<a id="M15-CAP-APPOINTMENTS-333cbf2317d93a8e"></a>
- **M15-CAP-APPOINTMENTS-333cbf2317d93a8e**: # Urology Appointment Booking
  Applies to original IDs: 653.

<a id="M15-CAP-APPOINTMENTS-1b74c5f319289f9e"></a>
- **M15-CAP-APPOINTMENTS-1b74c5f319289f9e**: Allows scheduling urology consultations.
  Applies to original IDs: 653.

<a id="M15-CAP-APPOINTMENTS-55faff639138dc86"></a>
- **M15-CAP-APPOINTMENTS-55faff639138dc86**: Physician
  Applies to original IDs: 653, 783, 803, 983, 1033, 1053.

<a id="M15-CAP-APPOINTMENTS-76968af3bfd3face"></a>
- **M15-CAP-APPOINTMENTS-76968af3bfd3face**: Clinic
  Applies to original IDs: 653, 803, 983, 1033, 1053.

<a id="M15-CAP-APPOINTMENTS-b346fe6434c0133a"></a>
- **M15-CAP-APPOINTMENTS-b346fe6434c0133a**: # Andrology Appointment Booking
  Applies to original IDs: 673.

<a id="M15-CAP-APPOINTMENTS-91c3963925d66315"></a>
- **M15-CAP-APPOINTMENTS-91c3963925d66315**: Allows scheduling consultations with andrologists.
  Applies to original IDs: 673.

<a id="M15-CAP-APPOINTMENTS-290cafe9b571a291"></a>
- **M15-CAP-APPOINTMENTS-290cafe9b571a291**: # Gynecology Appointment Booking
  Applies to original IDs: 693.

<a id="M15-CAP-APPOINTMENTS-15dcfa9ea5f74194"></a>
- **M15-CAP-APPOINTMENTS-15dcfa9ea5f74194**: Allows scheduling gynecological consultations.
  Applies to original IDs: 693.

<a id="M15-CAP-APPOINTMENTS-97357d43708082c3"></a>
- **M15-CAP-APPOINTMENTS-97357d43708082c3**: # Mammology Appointment Booking
  Applies to original IDs: 783.

<a id="M15-CAP-APPOINTMENTS-da5d15d2c708a61c"></a>
- **M15-CAP-APPOINTMENTS-da5d15d2c708a61c**: Allows scheduling mammology consultations.
  Applies to original IDs: 783.

<a id="M15-CAP-APPOINTMENTS-76507b42b60ede7f"></a>
- **M15-CAP-APPOINTMENTS-76507b42b60ede7f**: Online Consultation
  Applies to original IDs: 783, 803, 823.

<a id="M15-CAP-APPOINTMENTS-ac8badd50fa1aa21"></a>
- **M15-CAP-APPOINTMENTS-ac8badd50fa1aa21**: # Gynecologic Oncology Appointment Booking
  Applies to original IDs: 803.

<a id="M15-CAP-APPOINTMENTS-857bb77a16b0035f"></a>
- **M15-CAP-APPOINTMENTS-857bb77a16b0035f**: Allows scheduling consultations with gynecologic oncologists.
  Applies to original IDs: 803.

<a id="M15-CAP-APPOINTMENTS-9cd012dde97385cc"></a>
- **M15-CAP-APPOINTMENTS-9cd012dde97385cc**: # Pediatric Appointment Booking
  Applies to original IDs: 823.

<a id="M15-CAP-APPOINTMENTS-ec1e372e985228fe"></a>
- **M15-CAP-APPOINTMENTS-ec1e372e985228fe**: Allows booking pediatric consultations.
  Applies to original IDs: 823.

<a id="M15-CAP-APPOINTMENTS-a194d2f0e07f3aed"></a>
- **M15-CAP-APPOINTMENTS-a194d2f0e07f3aed**: Pediatrician Selection
  Applies to original IDs: 823.

<a id="M15-CAP-APPOINTMENTS-d560b3f9268db800"></a>
- **M15-CAP-APPOINTMENTS-d560b3f9268db800**: Clinic Selection
  Applies to original IDs: 823.

<a id="M15-CAP-APPOINTMENTS-32c6172aecdb445b"></a>
- **M15-CAP-APPOINTMENTS-32c6172aecdb445b**: Emergency Appointment
  Applies to original IDs: 823.

<a id="M15-CAP-APPOINTMENTS-172e8cab6bc6e90e"></a>
- **M15-CAP-APPOINTMENTS-172e8cab6bc6e90e**: # Pediatric Rheumatology Appointment Booking
  Applies to original IDs: 983.

<a id="M15-CAP-APPOINTMENTS-1766bf4561f03928"></a>
- **M15-CAP-APPOINTMENTS-1766bf4561f03928**: Allows scheduling consultations with pediatric rheumatologists.
  Applies to original IDs: 983.

<a id="M15-CAP-APPOINTMENTS-338cd6a1ad180ca5"></a>
- **M15-CAP-APPOINTMENTS-338cd6a1ad180ca5**: Telemedicine
  Applies to original IDs: 983, 1033, 1053.

<a id="M15-CAP-APPOINTMENTS-393c9209128b5e18"></a>
- **M15-CAP-APPOINTMENTS-393c9209128b5e18**: Scheduling consultations with pediatric orthopedic specialists.
  Applies to original IDs: 1033.

<a id="M15-CAP-APPOINTMENTS-6ea3d2fef8aa1c34"></a>
- **M15-CAP-APPOINTMENTS-6ea3d2fef8aa1c34**: Allows scheduling consultations with pediatric ophthalmologists.
  Applies to original IDs: 1053.
