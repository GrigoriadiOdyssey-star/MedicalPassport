# Browser acceptance — 2026-09-18

Local application: http://127.0.0.1:4173. Codex in-app browser; all profiles and data fictional. No external provider used.

| Scenario | Observation |
|---|---|
| Patient registration and login | Registered via the UI; patient heading and empty passport appeared |
| Allergy entry | Name/reaction appeared with patient-reported provenance |
| Medication entry | Reported medication appeared; no prescribing action exposed |
| Emergency profile | Unknown blood group/Rh and fictional contact persisted |
| Document upload | Real text fixture uploaded; metadata and download action appeared |
| QR creation | QR image and token-only link appeared; recipient/scope/expiry listed |
| Expiry | Previously issued one-hour QR denied after the work pause exceeded its lifetime |
| Doctor login and fresh grant | Provisioned doctor opened a new allergy-only grant; medication and emergency data absent |
| Revoke | Patient UI showed “Отозван”; same QR then denied to doctor, shared snapshot hidden |
| FHIR | Synthetic Observation imported and displayed with source provenance |
| Assistant boundary | Deterministic context counts and no-diagnosis disclaimer displayed |
| Visual desktop | Screenshot inspected: readable two-column records, no visible clipping at default viewport |
| Console | Browser tool returned no error/warning entries during the final inspection |

Document byte delivery, recovery and concurrent one-time use are covered by automated API/store tests. Mobile layout is implemented in CSS but mobile viewport acceptance is not yet recorded. UI locator timeouts occurred during tooling; visible AX state and subsequent UI actions resolved them. No app exception was observed from those timeouts.
