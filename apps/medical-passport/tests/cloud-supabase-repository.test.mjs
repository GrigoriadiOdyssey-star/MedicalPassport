import test from "node:test";
import assert from "node:assert/strict";
import { SupabaseRepository } from "../supabase-repository.mjs";

const patient = "10000000-0000-4000-8000-000000000001";
const recipient = "10000000-0000-4000-8000-000000000002";
const token = "synthetic-access-token-for-cloud-repository-test";
const key = "sb_publishable_synthetic-test-key";

function fakeFetch(reply = []) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url: new URL(url), init });
    return Response.json(reply, { status: 200 });
  };
  return { calls, fetchImpl };
}

test("cloud repository sends authenticated, bounded profile and record queries", async () => {
  const fake = fakeFetch([{ patient_user_id: patient, kind: "allergy" }]);
  const repo = new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    accessToken: token,
    fetchImpl: fake.fetchImpl,
  });
  const rows = await repo.currentRecords(patient, "allergy");
  assert.equal(rows.length, 1);
  const call = fake.calls[0];
  assert.equal(call.url.pathname, "/rest/v1/edht_current_clinical_records");
  assert.equal(call.url.searchParams.get("patient_user_id"), "eq." + patient);
  assert.equal(call.url.searchParams.get("kind"), "eq.allergy");
  assert.equal(call.init.headers.apikey, key);
  assert.equal(call.init.headers.authorization, "Bearer " + token);
  assert.equal(call.init.signal.aborted, false);
});

test("cloud repository writes through owner-checked SQL functions", async () => {
  const fake = fakeFetch([{ record_id: patient, version: 1 }]);
  const repo = new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    accessToken: token,
    fetchImpl: fake.fetchImpl,
  });
  const result = await repo.appendRecord({
    kind: "allergy",
    body: { name: "Synthetic allergen" },
    source: "patient_reported",
  });
  assert.deepEqual(result, { record_id: patient, version: 1 });
  assert.equal(fake.calls[0].url.pathname, "/rest/v1/rpc/edht_append_clinical_record_version");
  assert.deepEqual(JSON.parse(fake.calls[0].init.body), {
    p_record_id: null,
    p_kind: "allergy",
    p_body: { name: "Synthetic allergen" },
    p_source: "patient_reported",
  });
});

test("cloud document grants pin a version and use server-side authorization RPCs", async () => {
  const fake = fakeFetch("grant-id");
  const repo = new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    accessToken: token,
    fetchImpl: fake.fetchImpl,
  });
  await repo.createDocumentGrant({
    documentId: patient,
    version: 3,
    recipientUserId: recipient,
    purpose: "second_opinion",
    expiresAt: "2026-10-03T12:00:00Z",
  });
  assert.equal(fake.calls[0].url.pathname, "/rest/v1/rpc/edht_create_document_grant");
  assert.deepEqual(JSON.parse(fake.calls[0].init.body), {
    p_document_id: patient,
    p_document_version: 3,
    p_recipient_user_id: recipient,
    p_purpose: "second_opinion",
    p_expires_at: "2026-10-03T12:00:00Z",
  });
});

test("repository rejects unsafe config and never surfaces provider response bodies", async () => {
  assert.throws(() => new SupabaseRepository({
    supabaseUrl: "http://edht-test.supabase.co",
    publishableKey: key,
    accessToken: token,
  }), /CLOUD_URL_INVALID/);
  assert.throws(() => new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: "sb_secret_service-token-long-enough",
    accessToken: token,
  }), /CLOUD_PUBLISHABLE_KEY_REQUIRED/);
  assert.throws(() => new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    accessToken: "",
  }), /CLOUD_SESSION_REQUIRED/);

  const repo = new SupabaseRepository({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    accessToken: token,
    fetchImpl: async () => Response.json(
      { error: "synthetic PHI must not appear in logs" },
      { status: 403 },
    ),
  });
  await assert.rejects(repo.profile(patient), (error) => {
    assert.equal(error.message, "CLOUD_ACCESS_DENIED");
    assert.doesNotMatch(error.message, /synthetic PHI|service-token/);
    return true;
  });
  await assert.rejects(repo.currentRecords("not-a-uuid"), /PATIENT_ID_INVALID/);
  await assert.rejects(repo.currentRecords(patient, "unsupported"), /RECORD_KIND_INVALID/);
});
