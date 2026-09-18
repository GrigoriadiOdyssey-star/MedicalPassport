# MASTER21 continuation: shared admission and recovery contract

Extends the seven-owner adult single-allergy slice; no new API surface, canonical owner, clinical feature or guideline dependency. MASTER21 already recorded seven scoped engineering-ready profiles. This continuation does not award those statuses again. Full-owner blockers outside this scope remain open.

## Resolved shared design questions

1. **What bytes may be released when the source changes after admission?** Bind the admission to the exact immutable source version and response digest prepared before admission. An admitted response may finish within its bounded lifetime even if grant/source/policy/role state changes afterwards; it must never fetch and substitute newer source bytes. The caller receives the pinned source version and provenance. No unbounded cached response or stream is admitted.
2. **Can retry reuse an admission?** No. An admission is single-use and request/context-bound. Claim it atomically immediately before handing the prepared response to the transport. A consumed, expired, foreign-context or wrong-digest admission cannot release bytes. A transport failure after claim does not prove delivery; retry requires a new current authorization, audit attempt and admission. Audit receipt deduplication remains separate from admission reuse.
3. **Can a restored store serve old admissions?** No. A recovery epoch changes before reopening. Every pre-restore admission becomes invalid, including an otherwise unexpired one. Restore reconciles immutable source, grant/authority, audit, deduplication and outbox state; policy/identity evidence is refreshed before admitting new work. Recovered sequence counters do not revalidate old permits.

## Concrete internal record and operations

AdmissionLease is internal, never a public bearer credential. Fields: tenant_id, request_id, subject_id, patient_id, grant_id, exact source ID/version, policy/identity/role/binding/grant versions, response_sha256, admitted_at_ms, expires_at_ms, recovery_epoch, status (ISSUED/CONSUMED/EXPIRED/INVALIDATED). IDs and versions use the existing closed port constraints; digest is 64 lowercase hexadecimal characters. expires_at_ms is admitted_at_ms +5000 using a server-controlled clock; overflow denies. Expiry equality denies. Runtime implementations need a monotonic expiry clock and safe handling of wall-clock rollback; absent trusted clock state denies. Do not persist leases across recovery as reusable permits.

Prepare response from an immutable authorized source snapshot inside the existing admission protocol. Lock tenant integrity-stream, grant, then source/admission state consistently for all relevant writers. Current identity/role/binding attestations and source/grant/policy versions must match; pending or unavailable evidence denies. Commit the access-attempt audit and ISSUED lease in the same transaction. No content is exposed before commit.

`claimRelease(lease_id, trusted_request_context, prepared_response_digest, now)` atomically compares context, epoch, digest, status and expiry, then changes ISSUED to CONSUMED. It does not authorize any other resource, source version or caller. Only the claimed prepared response can be handed to transport. The transport handoff must start within the admission window; if scheduling delays cross expiry, abort and reauthorize. A single already handed-off response cannot be recalled. The implementation must define and measure this handoff boundary; a database commit alone is not network delivery.

Current source/policy/identity/grant changes linearize before later admissions under the same ordering. They do not retroactively fabricate denial or delivery for an earlier valid bounded admission. The independent recovery epoch invalidates every outstanding lease. Patient receipt-query permission remains separate from clinical grant status, as defined in MASTER18/21; this lease model describes clinician content release only.

## Ownership updates, applied once

Identity supplies current attestations and epoch invalidation. Data owns immutable snapshot/version binding. Security owns admission and single-use claim. Consent supplies current grant/authority versions and withdrawal ordering. Audit commits access-attempt evidence without delivery claims. Allergy retains assertion meaning under the pinned source revision. Profile hands off only the prepared permitted projection. All seven profiles reference this contract; none duplicates it.

## Required runtime acceptance

The companion executable model explores operation order and rejects changed context/digest, duplicate claim, boundary expiry and restore reuse. It is a model, not PostgreSQL locking, provider-revocation or network proof. Implement concurrent SQL transactions and crash injection: revoke before admission denies; admission before revoke may release only its original snapshot within the window; correction never substitutes new bytes; concurrent duplicate claims yield at most one winner; restore invalidates all leases; audit commit/claim/transport failures expose no unauthorized bytes. Confirm expired/failed responses do not enter caches or logs. Clinical/legal/provider gates stay open and cannot be satisfied by synthetic model tests.
