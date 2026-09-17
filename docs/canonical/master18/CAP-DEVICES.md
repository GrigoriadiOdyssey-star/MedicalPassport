# CORE-CAP-DEVICES — consolidated source profiles

Uses an existing registered canonical owner and preserves all prior addenda. All owners already have canonical specifications. Every clause below applies only to its listed source profiles; it is not a universal clinical rule. No new service, clinical approval or implementation readiness.

## ai-device-lifecycle

Devices owns equipment identity, status, maintenance/calibration history, availability and home-device connector context. Predictions remain attributed AI artifacts; a reported working status is not calibration proof or permission to operate/program a device.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required.

## clinical-device-and-life-support-context

Devices owns circulatory/ventilation/ECMO and wearable/CGM equipment identity, settings/exposure history and integration context. Protocols and clinical weaning/therapy decisions are references to clinician-controlled workflows; this profile does not implement a medical-device controller. AI detection and time-in-range are derived measures with raw-data provenance.

Acceptance additions: Preserve every source clause with source-specific applicability, patient/tenant identity, evidence versions, uncertainty and correction lineage. Unverified or stale context must remain explicit; never infer absent disease, permission or clinical eligibility. Test wrong-patient, revoked consent, missing inputs, conflicting sources and downstream invalidation. Qualified clinical acceptance and actual service integration remain required. Preserve age/development, body size and acquisition time where present, laterality/site, clinical phase, donor/recipient or mother/fetus identity, guardian/assent and adolescent confidentiality. No universal dose, threshold or protocol is inferred. Plans, actual procedures, device operation, clinical diagnoses and model suggestions stay separately attributable. Retain device model/firmware, clock, units, calibration and gaps. Stale sensors, mode ambiguity or missing patient binding must never lead to automated actuation.

## Source scope

- Original 1217 / ai-device-lifecycle: AI Medical Device Monitoring — Monitors connected medical devices.
- Original 1411 / ai-device-lifecycle: AI Medical Equipment Intelligence — Monitors medical equipment.
- Original 1768 / ai-device-lifecycle: AI Home Medical Device Integration — Integrates home medical devices.
- Original 1867 / ai-device-lifecycle: AI Medical Equipment Manager — Tracks medical equipment availability.
- Original 2042 / clinical-device-and-life-support-context: Mechanical Circulatory Support Module — Supports mechanical circulatory devices.
- Original 2045 / clinical-device-and-life-support-context: Wearable Cardiology Integration — Integrates wearable cardiovascular devices.
- Original 2067 / clinical-device-and-life-support-context: Respiratory Wearable Integration — Integrates wearable respiratory devices.
- Original 2087 / clinical-device-and-life-support-context: Neurology Wearable Integration — Integrates neurological wearable devices.
- Original 2103 / clinical-device-and-life-support-context: Continuous Glucose Monitoring Module — Supports continuous glucose monitoring devices.
- Original 2282 / clinical-device-and-life-support-context: Urology Wearable Integration — Integrates wearable urology devices.
- Original 2734 / clinical-device-and-life-support-context: Mechanical Ventilation Module — Supports invasive and non-invasive ventilation.
- Original 2736 / clinical-device-and-life-support-context: Extracorporeal Life Support Module — Supports extracorporeal circulation systems.
- Original 3626 / clinical-device-and-life-support-context: Continuous Glucose Monitoring Module — Supports continuous glucose monitoring.

## Requirements and source metadata

<a id="M18-CAP-DEVICES-1759dfeca43f299a"></a>
- **M18-CAP-DEVICES-1759dfeca43f299a**: Monitors connected medical devices.
  Applies to original IDs: 1217.

<a id="M18-CAP-DEVICES-4fbeeb87456accf5"></a>
- **M18-CAP-DEVICES-4fbeeb87456accf5**: Supports
  Applies to original IDs: 1217, 1411, 1768, 1867, 2042, 2045, 2067, 2087, 2103, 2282, 2734, 2736, 3626.

<a id="M18-CAP-DEVICES-5ba74d8fcc7b20cc"></a>
- **M18-CAP-DEVICES-5ba74d8fcc7b20cc**: Status
  Applies to original IDs: 1217, 1411, 1768, 1867, 2042, 2045, 2067, 2087, 2103, 2282, 2734, 2736, 3626.

<a id="M18-CAP-DEVICES-bb435b65fbbfb7b0"></a>
- **M18-CAP-DEVICES-bb435b65fbbfb7b0**: Errors
  Applies to original IDs: 1217.

<a id="M18-CAP-DEVICES-497c7721b34b7660"></a>
- **M18-CAP-DEVICES-497c7721b34b7660**: Maintenance
  Applies to original IDs: 1217, 1411.

<a id="M18-CAP-DEVICES-0e0b96b0c8c3a9a9"></a>
- **M18-CAP-DEVICES-0e0b96b0c8c3a9a9**: Alerts
  Applies to original IDs: 1217, 2103.

<a id="M18-CAP-DEVICES-d5232cbd3a326267"></a>
- **M18-CAP-DEVICES-d5232cbd3a326267**: Documentation
  Applies to original IDs: 1217, 1411, 1768, 1867, 2042, 2045, 2067, 2087, 2103, 2282, 2734, 2736, 3626.

<a id="M18-CAP-DEVICES-6f33acf3afb37064"></a>
- **M18-CAP-DEVICES-6f33acf3afb37064**: ---
  Applies to original IDs: 1217, 1411, 1768, 1867, 2042, 2045, 2067, 2087, 2103, 2282, 2734, 2736, 3626.

<a id="M18-CAP-DEVICES-bda2ee44af2f22e5"></a>
- **M18-CAP-DEVICES-bda2ee44af2f22e5**: Monitors medical equipment.
  Applies to original IDs: 1411.

<a id="M18-CAP-DEVICES-66cb8cd6201376f6"></a>
- **M18-CAP-DEVICES-66cb8cd6201376f6**: Diagnostics
  Applies to original IDs: 1411.

<a id="M18-CAP-DEVICES-eef467a9af425cc9"></a>
- **M18-CAP-DEVICES-eef467a9af425cc9**: Calibration
  Applies to original IDs: 1411.

<a id="M18-CAP-DEVICES-2709623d4b49403c"></a>
- **M18-CAP-DEVICES-2709623d4b49403c**: Failure Prediction
  Applies to original IDs: 1411.

<a id="M18-CAP-DEVICES-57b6ab270ce4b614"></a>
- **M18-CAP-DEVICES-57b6ab270ce4b614**: Integrates home medical devices.
  Applies to original IDs: 1768.

<a id="M18-CAP-DEVICES-37b86a896673d4f8"></a>
- **M18-CAP-DEVICES-37b86a896673d4f8**: Blood Pressure Monitor
  Applies to original IDs: 1768.

<a id="M18-CAP-DEVICES-c3dca47a9cbdff7b"></a>
- **M18-CAP-DEVICES-c3dca47a9cbdff7b**: Glucometer
  Applies to original IDs: 1768.

<a id="M18-CAP-DEVICES-8ce8cc69bc376dac"></a>
- **M18-CAP-DEVICES-8ce8cc69bc376dac**: Pulse Oximeter
  Applies to original IDs: 1768.

<a id="M18-CAP-DEVICES-1eb022625861024e"></a>
- **M18-CAP-DEVICES-1eb022625861024e**: Smart Scale
  Applies to original IDs: 1768.

<a id="M18-CAP-DEVICES-eab0ff4ff266da4b"></a>
- **M18-CAP-DEVICES-eab0ff4ff266da4b**: Tracks medical equipment availability.
  Applies to original IDs: 1867.

<a id="M18-CAP-DEVICES-2663978a32c6d34f"></a>
- **M18-CAP-DEVICES-2663978a32c6d34f**: MRI
  Applies to original IDs: 1867.

<a id="M18-CAP-DEVICES-7bc7f92cb128242c"></a>
- **M18-CAP-DEVICES-7bc7f92cb128242c**: CT
  Applies to original IDs: 1867.

<a id="M18-CAP-DEVICES-5032f26f1a690cb2"></a>
- **M18-CAP-DEVICES-5032f26f1a690cb2**: Ultrasound
  Applies to original IDs: 1867.

<a id="M18-CAP-DEVICES-e4638c7a44272c09"></a>
- **M18-CAP-DEVICES-e4638c7a44272c09**: ICU Equipment
  Applies to original IDs: 1867.

<a id="M18-CAP-DEVICES-79c7d57e87c047e5"></a>
- **M18-CAP-DEVICES-79c7d57e87c047e5**: Supports mechanical circulatory devices.
  Applies to original IDs: 2042.

<a id="M18-CAP-DEVICES-4e96922e6316ffa9"></a>
- **M18-CAP-DEVICES-4e96922e6316ffa9**: LVAD
  Applies to original IDs: 2042.

<a id="M18-CAP-DEVICES-9727ef8f375783b9"></a>
- **M18-CAP-DEVICES-9727ef8f375783b9**: RVAD
  Applies to original IDs: 2042.

<a id="M18-CAP-DEVICES-82e0a895e89c012b"></a>
- **M18-CAP-DEVICES-82e0a895e89c012b**: ECMO History
  Applies to original IDs: 2042.

<a id="M18-CAP-DEVICES-52b279501e3ad640"></a>
- **M18-CAP-DEVICES-52b279501e3ad640**: Integrates wearable cardiovascular devices.
  Applies to original IDs: 2045.

<a id="M18-CAP-DEVICES-a4a7a6fd4581e565"></a>
- **M18-CAP-DEVICES-a4a7a6fd4581e565**: Smart Watches
  Applies to original IDs: 2045.

<a id="M18-CAP-DEVICES-07e6e48a1090bc17"></a>
- **M18-CAP-DEVICES-07e6e48a1090bc17**: ECG Sensors
  Applies to original IDs: 2045.

<a id="M18-CAP-DEVICES-dbfd6ab3c068daaa"></a>
- **M18-CAP-DEVICES-dbfd6ab3c068daaa**: Continuous Monitoring
  Applies to original IDs: 2045.

<a id="M18-CAP-DEVICES-718e67a1dda8486f"></a>
- **M18-CAP-DEVICES-718e67a1dda8486f**: Integrates wearable respiratory devices.
  Applies to original IDs: 2067.

<a id="M18-CAP-DEVICES-23d5943d7099d139"></a>
- **M18-CAP-DEVICES-23d5943d7099d139**: Pulse Oximeters
  Applies to original IDs: 2067.

<a id="M18-CAP-DEVICES-b304438de4c324c6"></a>
- **M18-CAP-DEVICES-b304438de4c324c6**: Smart Inhalers
  Applies to original IDs: 2067.

<a id="M18-CAP-DEVICES-6a7884a5e5f5abe6"></a>
- **M18-CAP-DEVICES-6a7884a5e5f5abe6**: Respiratory Sensors
  Applies to original IDs: 2067.

<a id="M18-CAP-DEVICES-371c3714815139d3"></a>
- **M18-CAP-DEVICES-371c3714815139d3**: Integrates neurological wearable devices.
  Applies to original IDs: 2087.

<a id="M18-CAP-DEVICES-42703bf16dc646e5"></a>
- **M18-CAP-DEVICES-42703bf16dc646e5**: Tremor Sensors
  Applies to original IDs: 2087.

<a id="M18-CAP-DEVICES-1d515cb86cb86b96"></a>
- **M18-CAP-DEVICES-1d515cb86cb86b96**: Seizure Detection
  Applies to original IDs: 2087.

<a id="M18-CAP-DEVICES-dd64d9e6b25aae1a"></a>
- **M18-CAP-DEVICES-dd64d9e6b25aae1a**: Activity Monitoring
  Applies to original IDs: 2087.

<a id="M18-CAP-DEVICES-ff2581540ec26d66"></a>
- **M18-CAP-DEVICES-ff2581540ec26d66**: Supports continuous glucose monitoring devices.
  Applies to original IDs: 2103.

<a id="M18-CAP-DEVICES-abd165262dd15072"></a>
- **M18-CAP-DEVICES-abd165262dd15072**: CGM
  Applies to original IDs: 2103.

<a id="M18-CAP-DEVICES-bfc08617f1b0bbd7"></a>
- **M18-CAP-DEVICES-bfc08617f1b0bbd7**: Trend Analysis
  Applies to original IDs: 2103.

<a id="M18-CAP-DEVICES-28aa77f10a4c6b21"></a>
- **M18-CAP-DEVICES-28aa77f10a4c6b21**: Integrates wearable urology devices.
  Applies to original IDs: 2282.

<a id="M18-CAP-DEVICES-c5885c7561f7c490"></a>
- **M18-CAP-DEVICES-c5885c7561f7c490**: Bladder Sensors
  Applies to original IDs: 2282.

<a id="M18-CAP-DEVICES-b37d296a52e6b898"></a>
- **M18-CAP-DEVICES-b37d296a52e6b898**: Urine Monitoring
  Applies to original IDs: 2282.

<a id="M18-CAP-DEVICES-76773d3aa7af1ead"></a>
- **M18-CAP-DEVICES-76773d3aa7af1ead**: Home Devices
  Applies to original IDs: 2282.

<a id="M18-CAP-DEVICES-7450d6d3acc80480"></a>
- **M18-CAP-DEVICES-7450d6d3acc80480**: Supports invasive and non-invasive ventilation.
  Applies to original IDs: 2734.

<a id="M18-CAP-DEVICES-a79724279902e12f"></a>
- **M18-CAP-DEVICES-a79724279902e12f**: Ventilator Modes
  Applies to original IDs: 2734.

<a id="M18-CAP-DEVICES-65ddce9cff394cb5"></a>
- **M18-CAP-DEVICES-65ddce9cff394cb5**: Lung Protective Ventilation
  Applies to original IDs: 2734.

<a id="M18-CAP-DEVICES-0851ba114d4f7335"></a>
- **M18-CAP-DEVICES-0851ba114d4f7335**: Weaning Protocols
  Applies to original IDs: 2734.

<a id="M18-CAP-DEVICES-2a31fd692519cabe"></a>
- **M18-CAP-DEVICES-2a31fd692519cabe**: Respiratory Monitoring
  Applies to original IDs: 2734.

<a id="M18-CAP-DEVICES-33dfafdb021caa4d"></a>
- **M18-CAP-DEVICES-33dfafdb021caa4d**: Supports extracorporeal circulation systems.
  Applies to original IDs: 2736.

<a id="M18-CAP-DEVICES-6632b111e7ce726d"></a>
- **M18-CAP-DEVICES-6632b111e7ce726d**: ECMO
  Applies to original IDs: 2736.

<a id="M18-CAP-DEVICES-b009a124c986a5b6"></a>
- **M18-CAP-DEVICES-b009a124c986a5b6**: VV-ECMO
  Applies to original IDs: 2736.

<a id="M18-CAP-DEVICES-ee5a0617b85b1dcf"></a>
- **M18-CAP-DEVICES-ee5a0617b85b1dcf**: VA-ECMO
  Applies to original IDs: 2736.

<a id="M18-CAP-DEVICES-cb8c996422dfceba"></a>
- **M18-CAP-DEVICES-cb8c996422dfceba**: Perfusion Monitoring
  Applies to original IDs: 2736.

<a id="M18-CAP-DEVICES-63748bb803c63534"></a>
- **M18-CAP-DEVICES-63748bb803c63534**: Supports continuous glucose monitoring.
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-1fb72ad651ae98e9"></a>
- **M18-CAP-DEVICES-1fb72ad651ae98e9**: CGM Devices
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-3b6ea7bf2ca94117"></a>
- **M18-CAP-DEVICES-3b6ea7bf2ca94117**: Glucose Trends
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-e6c832b9463b2f0a"></a>
- **M18-CAP-DEVICES-e6c832b9463b2f0a**: Time in Range
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-c8d580adf33006da"></a>
- **M18-CAP-DEVICES-c8d580adf33006da**: Hypoglycemia Detection
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-158494ffa78d58d1"></a>
- **M18-CAP-DEVICES-158494ffa78d58d1**: Hyperglycemia Prediction
  Applies to original IDs: 3626.

<a id="M18-CAP-DEVICES-232f603e7e9f89ce"></a>
- **M18-CAP-DEVICES-232f603e7e9f89ce**: AI Glucose Analysis
  Applies to original IDs: 3626.
