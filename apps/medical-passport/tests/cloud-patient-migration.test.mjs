import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const migration = fs.readFileSync(
  new URL("../supabase/migrations/20261001001000_patient_records.sql", import.meta.url),
  "utf8",
);

test("cloud clinical data is append-only and owner-bound", () => {
  assert.match(migration, /edht_clinical_record_versions/);
  assert.match(migration, /primary key \(record_id, version\)/);
  assert.match(migration, /check \(actor_user_id = patient_user_id\)/);
  assert.match(migration, /alter table public\.edht_clinical_record_versions enable row level security/);
  assert.match(migration, /edht_record_owner_or_scoped_grant_read/);
  assert.match(migration, /edht_append_clinical_record_version/);
  assert.match(migration, /pg_advisory_xact_lock/);
  assert.match(migration, /EDHT_RECORD_IDENTITY_IMMUTABLE/);
  assert.match(migration, /v_existing_kind <> p_kind or v_existing_source <> p_source/);
  assert.match(migration, /revoke all on public\.edht_clinical_record_versions from anon, authenticated/);
  assert.doesNotMatch(migration, /on public\.edht_clinical_record_versions for (update|delete)/i);
});

test("shared record access is owner-issued, scope-limited, expiring and revocable", () => {
  assert.match(migration, /scopes <@ array\['condition', 'observation', 'allergy', 'medication', 'vaccination', 'emergency'\]/);
  assert.match(migration, /p_expires_at > v_now \+ interval '7 days'/);
  assert.match(migration, /edht_create_patient_grant/);
  assert.match(migration, /edht_revoke_patient_grant/);
  assert.match(migration, /grant execute on function public\.edht_create_patient_grant[\s\S]*?to authenticated/);
  assert.match(migration, /edht_grant_owner_or_recipient_read/);
});

test("current clinical projection invokes PostgreSQL RLS as the caller", () => {
  assert.match(migration, /with \(security_invoker = true\)/);
  assert.match(migration, /create or replace view public\.edht_current_clinical_records/);
  assert.match(migration, /grant select on public\.edht_current_clinical_records to authenticated/);
  assert.doesNotMatch(migration, /service[_-]?role|secret[_-]?key|OPENAI_API_KEY/i);
});
