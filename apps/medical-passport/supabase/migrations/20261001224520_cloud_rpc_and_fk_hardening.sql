-- Keep the applied cloud hardening reproducible in Git and CI.
-- Privileged implementations stay outside PostgREST's exposed public schema.
create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

alter function public.edht_append_clinical_record_version(uuid, text, jsonb, text) set schema private;
alter function public.edht_create_patient_grant(uuid, text, text[], timestamptz) set schema private;
alter function public.edht_revoke_patient_grant(uuid) set schema private;
alter function public.edht_can_read_document_object(text) set schema private;
alter function public.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) set schema private;
alter function public.edht_revoke_document_grant(uuid) set schema private;

revoke all on function private.edht_append_clinical_record_version(uuid, text, jsonb, text) from public, anon;
revoke all on function private.edht_create_patient_grant(uuid, text, text[], timestamptz) from public, anon;
revoke all on function private.edht_revoke_patient_grant(uuid) from public, anon;
revoke all on function private.edht_can_read_document_object(text) from public, anon;
revoke all on function private.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) from public, anon;
revoke all on function private.edht_revoke_document_grant(uuid) from public, anon;
grant execute on function private.edht_append_clinical_record_version(uuid, text, jsonb, text) to authenticated;
grant execute on function private.edht_create_patient_grant(uuid, text, text[], timestamptz) to authenticated;
grant execute on function private.edht_revoke_patient_grant(uuid) to authenticated;
grant execute on function private.edht_can_read_document_object(text) to authenticated;
grant execute on function private.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) to authenticated;
grant execute on function private.edht_revoke_document_grant(uuid) to authenticated;

create or replace function public.edht_append_clinical_record_version(p_record_id uuid, p_kind text, p_body jsonb, p_source text)
returns table(record_id uuid, version integer)
language sql
set search_path = pg_catalog, private, public, auth
as $$ select * from private.edht_append_clinical_record_version(p_record_id,p_kind,p_body,p_source); $$;
create or replace function public.edht_create_patient_grant(p_recipient_user_id uuid, p_purpose text, p_scopes text[], p_expires_at timestamptz)
returns uuid
language sql
set search_path = pg_catalog, private, public, auth
as $$ select private.edht_create_patient_grant(p_recipient_user_id,p_purpose,p_scopes,p_expires_at); $$;
create or replace function public.edht_revoke_patient_grant(p_grant_id uuid)
returns boolean
language sql
set search_path = pg_catalog, private, public, auth
as $$ select private.edht_revoke_patient_grant(p_grant_id); $$;
create or replace function public.edht_can_read_document_object(p_object_path text)
returns boolean
language sql stable
set search_path = pg_catalog, private, public, auth
as $$ select private.edht_can_read_document_object(p_object_path); $$;
create or replace function public.edht_create_document_grant(p_document_id uuid, p_document_version integer, p_recipient_user_id uuid, p_purpose text, p_expires_at timestamptz)
returns uuid
language sql
set search_path = pg_catalog, private, public, auth
as $$ select private.edht_create_document_grant(p_document_id,p_document_version,p_recipient_user_id,p_purpose,p_expires_at); $$;
create or replace function public.edht_revoke_document_grant(p_grant_id uuid)
returns boolean
language sql
set search_path = pg_catalog, private, public, auth
as $$ select private.edht_revoke_document_grant(p_grant_id); $$;

revoke all on function public.edht_append_clinical_record_version(uuid, text, jsonb, text) from public, anon;
revoke all on function public.edht_create_patient_grant(uuid, text, text[], timestamptz) from public, anon;
revoke all on function public.edht_revoke_patient_grant(uuid) from public, anon;
revoke all on function public.edht_can_read_document_object(text) from public, anon;
revoke all on function public.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) from public, anon;
revoke all on function public.edht_revoke_document_grant(uuid) from public, anon;
grant execute on function public.edht_append_clinical_record_version(uuid, text, jsonb, text) to authenticated;
grant execute on function public.edht_create_patient_grant(uuid, text, text[], timestamptz) to authenticated;
grant execute on function public.edht_revoke_patient_grant(uuid) to authenticated;
grant execute on function public.edht_can_read_document_object(text) to authenticated;
grant execute on function public.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) to authenticated;
grant execute on function public.edht_revoke_document_grant(uuid) to authenticated;

create index if not exists edht_documents_patient on public.edht_documents(patient_user_id);
create index if not exists edht_documents_uploaded_by on public.edht_documents(uploaded_by);
create index if not exists edht_document_grants_patient on public.edht_document_grants(patient_user_id);
create index if not exists edht_document_grants_document_version on public.edht_document_grants(document_id, document_version);
create index if not exists edht_patient_grants_patient on public.edht_patient_grants(patient_user_id);
create index if not exists edht_clinical_actor_user on public.edht_clinical_record_versions(actor_user_id);
