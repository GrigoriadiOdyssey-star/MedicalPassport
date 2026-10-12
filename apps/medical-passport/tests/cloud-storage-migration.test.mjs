import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const migration = fs.readFileSync(
  new URL("../supabase/migrations/20261001000000_document_storage.sql", import.meta.url),
  "utf8",
);

test("cloud document objects are private and version-pinned", () => {
  assert.match(migration, /public\.edht_documents/);
  assert.match(migration, /primary key \(id, version\)/);
  assert.match(migration, /unique,\s*$/m);
  assert.match(migration, /check \(object_path = patient_user_id::text \|\| '\/' \|\| id::text \|\| '\/' \|\| version::text\)/);
  assert.match(migration, /insert into storage\.buckets[\s\S]*?'edht-medical-documents',[\s\S]*?false,/);
  assert.doesNotMatch(migration, /service[_-]?role|secret[_-]?key|OPENAI_API_KEY/i);
});

test("document grants are exact-version, owner-issued, bounded, and revocable", () => {
  assert.match(migration, /document_version integer not null/);
  assert.match(migration, /foreign key \(document_id, document_version\)/);
  assert.match(migration, /p_expires_at > v_now \+ interval '7 days'/);
  assert.match(migration, /d\.patient_user_id = auth\.uid\(\)/);
  assert.match(migration, /edht_revoke_document_grant/);
  assert.match(migration, /grant execute on function public\.edht_create_document_grant[\s\S]*?to authenticated/);
});

test("every exposed cloud table has RLS and storage access is owner-or-grant scoped", () => {
  assert.match(migration, /alter table public\.edht_documents enable row level security/);
  assert.match(migration, /alter table public\.edht_document_grants enable row level security/);
  assert.match(migration, /edht_documents_owner_or_granted_read/);
  assert.match(migration, /edht_storage_owner_upload/);
  assert.match(migration, /edht_storage_owner_or_granted_read/);
  assert.match(migration, /revoke all on public\.edht_documents from anon, authenticated/);
  assert.match(migration, /revoke all on public\.edht_document_grants from anon, authenticated/);
  assert.match(migration, /no update\/delete policies/);
});
