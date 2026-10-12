# Functional Alpha 0.4 — architecture and limits

Baseline c4c3599; MASTER-25. Node 24 / SQLite / local object storage. Synthetic adult data only. Startup rejects production mode and binds localhost. This implementation does not close full canonical acceptance or the 13 retained MASTER-21 runtime tasks.

## Ingestion and storage

SQLite stores metadata, ownership, audit, upload offsets, immutable document versions and imaging structure. LocalObjects stores content-addressed objects separately from the DB. Legacy binaries migrate with their original hash and provenance; old database content is cleared only after object publication. Backups must include BOTH SQLite and the object root as a consistent set; no validated disaster recovery procedure is claimed.

Default resource policy (bytes): EDHT_DOCUMENT_MAX_BYTES=268435456; EDHT_IMAGING_MAX_BYTES=2147483648; EDHT_PATIENT_STORAGE_BYTES=21474836480; EDHT_CHUNK_BYTES=2097152. Chunk buffers have a hard 16 MiB safety ceiling. A session lasts 24 hours; 64 active sessions per patient; image preview limit 32 MiB. These are configurable/resource controls, not a 1 MiB product-demo cap. A 2 GiB policy is not evidence of measured 2 GiB throughput.

Authenticated session creation reserves quota. Every chunk checks actor, CSRF, offset, size and SHA-256; identical retries are idempotent. Completion streams assembly, checks size/whole-file hash/type and publishes before committing metadata. Resume offsets persist across server restart; the UI requires the same file to be reselected and hash-verified. Pause stops after the current chunk; cancel removes staged chunks. Expired staging is cleaned on subsequent session creation. No health data is stored in browser localStorage.

Original versions are immutable. Downloads reauthorize every request and support explicit version selection. Object keys are never public URLs. The legacy base64 compatibility endpoint is limited by the chunk policy and immediately migrates bytes; the new UI uses binary chunks. PDF/PNG/JPEG signatures and UTF-8/no-NUL text checks are basic validation, not antivirus or semantic CSV/JSON validation. The scanner port currently returns NOT_SCANNED_SYNTHETIC; a production scanner, quarantine operations, KMS and S3 adapter are absent. Locks are single-process; crash-orphan GC, cross-process coordination and load acceptance remain open.

## Imaging foundation

Study → Series → Instance are separate tables. DICOM UIDs group files; source objects/hashes and patient-binding confirmation remain traceable. User confirmation does not establish verified clinical identity. Report changes have optimistic versions and immutable history. Doctor retrieval requires an imaging scope and rechecks expiry, recipient and revocation before streaming.

The bounded parser accepts DICOM Part 10 with DICM prefix and Explicit VR Little Endian transfer syntax 1.2.840.10008.1.2.1. Unsupported syntax, undefined-length sequences and malformed files fail explicitly. Pixel viewing supports single-frame 8/16-bit monochrome, stored-bit masks/sign extension, slope/intercept, Window/Level, pan and zoom with a bounded 16 MiB frame. Compressed, color, multiframe and advanced modality tools are not implemented. PNG/JPEG source preview is supported within memory policy. A synthetic gradient fixture proves pixel decoding, not diagnostic correctness.

SandboxPACS exposes executable application methods qido/wado/stowSession. These are local port semantics, NOT DICOMweb-conformant HTTP services; capabilities explicitly declare external_connected=false and dicomweb_conformance=false. Live PACS authentication/conformance is external work. References: [DICOM Part 10](https://dicom.nema.org/medical/dicom/current/output/html/part10.html), [DICOM encoding Part 5](https://dicom.nema.org/medical/dicom/2024d/output/html/part05.html).

Future anatomy derivation must consume authorized version/hash references, emit separate derived artifacts with algorithm/version/input lineage and require validation. No patient-derived model, diagnosis or Digital Twin simulation is produced here. Non-DICOM image batches currently need explicit shared UIDs at the application boundary to group them; the UI does not infer clinical grouping.

## Clinical and care workflows

Conditions include status/onset/resolution/provider/code; laboratory observations include panel, numeric value, units, reference bounds, flag, specimen, method and timestamp. Trends group matching name/unit/method/specimen within the loaded page (30 records), not all historical results or clinically reconciled codes. Vaccinations include dose/manufacturer/lot/country/provider/date and an own-patient certificate link. Edits preserve immutable revisions, archives retain originals; client-supplied verified status is rejected. All are patient-reported, not qualified clinical verification.

Medication detail joins descriptive record/history, schedules and recent dose events. Existing reminder/timezone/DST behavior remains. Personal calendar entries are patient-entered plans, not clinic bookings; edits cancel and replace scheduled in-app notices. External PUSH/EMAIL/SMS/telemedicine remain disconnected. Notification polling refreshes eligible views without replacing open forms.

Guideline context stores home/current/treating-doctor/care-delivery jurisdictions independently, with explicit unknowns, reason and version. It neither infers location nor verifies practitioner authority. Approved source count remains zero; original versions, certified translations and clinical comparison are unavailable. This remains a profile of existing canonical owners.

## UX, verification and next work

Compact patient identity, seven desktop destinations, mobile bottom navigation and Health subnavigation separate clinical domains. Document/study notifications support object deep links; search is own-patient and bounded, escapes SQL wildcard characters and excludes archived documents. Provider directory/global terminology search is not implemented. PDF uses authenticated download; some technical provenance/history displays remain raw JSON.

See MASTER-25 tests.tap and BROWSER_REVIEW.md. Tests cover real SQLite/HTTP, isolation, CSRF, revoke, checksum/retry, resume/restart, revisions, certificate ownership and search escaping. Browser evidence is agent-operated, not an automated end-to-end suite. Remaining next wave: exact source/version grant and recovery contracts; production storage/scanning adapter; broader DICOM and viewer accessibility; provider-backed clinical verification and terminology; full-history trend pagination; external guideline sources. No full canonical owner is promoted to IMPLEMENTED by page availability.
