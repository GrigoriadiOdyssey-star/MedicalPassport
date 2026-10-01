-- EDHT cloud foundation: private, version-pinned document objects.
-- Apply only after reviewing the Supabase project identity and enabling Supabase Auth.
-- This migration is not applied to the connected project while that project is inactive.

create table if not exists public.edht_documents (
  id uuid not null default gen_random_uuid(),
  version integer not null check (version > 0),
  patient_user_id uuid not null references auth.users(id) on delete restrict,
  uploaded_by uuid not null references auth.users(id) on delete restrict,
  object_path text not null unique,
  original_name text not null check (length(original_name) between 1 and 180),
  mime_type text not null check (mime_type in (
    'application/pdf', 'text/plain', 'image/png', 'image/jpeg',
    'application/json', 'text/csv', 'application/dicom'
  )),
  byte_size bigint not null check (byte_size > 0 and byte_size <= 268435456),
  sha256 text not null check (sha256 ~ '^[a-f0-9]{64}$'),
  document_type text not null check (length(document_type) between 1 and 80),
  source text not null check (length(source) between 1 and 80),
  created_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
    check (pg_column_size(metadata) <= 8192),
  primary key (id, version),
  check (object_path = patient_user_id::text || '/' || id::text || '/' || version::text),
  check (uploaded_by = patient_user_id)
);

create table if not exists public.edht_document_grants (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null,
  document_version integer not null,
  patient_user_id uuid not null references auth.users(id) on delete restrict,
  recipient_user_id uuid not null references auth.users(id) on delete restrict,
  purpose text not null check (purpose in ('care_coordination', 'second_opinion', 'emergency')),
  scope text not null default 'document.read' check (scope = 'document.read'),
  expires_at timestamptz not null check (expires_at > created_at),
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  foreign key (document_id, document_version)
    references public.edht_documents(id, version) on delete restrict,
  check (recipient_user_id <> patient_user_id)
);

create index if not exists edht_document_grants_active_recipient
  on public.edht_document_grants (recipient_user_id, document_id, document_version, expires_at)
  where revoked_at is null;

alter table public.edht_documents enable row level security;
alter table public.edht_document_grants enable row level security;

revoke all on public.edht_documents from anon, authenticated;
revoke all on public.edht_document_grants from anon, authenticated;
grant select, insert on public.edht_documents to authenticated;
grant select on public.edht_document_grants to authenticated;

create or replace function public.edht_can_read_document_object(p_object_path text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, auth
set row_security = off
as $$
  select exists (
    select 1
    from public.edht_documents d
    where d.object_path = p_object_path
      and (
        d.patient_user_id = (select auth.uid())
        or exists (
          select 1
          from public.edht_document_grants g
          where g.document_id = d.id
            and g.document_version = d.version
            and g.patient_user_id = d.patient_user_id
            and g.recipient_user_id = (select auth.uid())
            and g.scope = 'document.read'
            and g.revoked_at is null
            and g.expires_at > now()
        )
      )
  );
$$;

revoke all on function public.edht_can_read_document_object(text) from public, anon;
grant execute on function public.edht_can_read_document_object(text) to authenticated;

create policy edht_documents_owner_or_granted_read
  on public.edht_documents for select to authenticated
  using (
    patient_user_id = (select auth.uid())
    or exists (
      select 1 from public.edht_document_grants g
      where g.document_id = edht_documents.id
        and g.document_version = edht_documents.version
        and g.patient_user_id = edht_documents.patient_user_id
        and g.recipient_user_id = (select auth.uid())
        and g.scope = 'document.read'
        and g.revoked_at is null
        and g.expires_at > now()
    )
  );

create policy edht_documents_owner_insert
  on public.edht_documents for insert to authenticated
  with check (
    patient_user_id = (select auth.uid())
    and uploaded_by = (select auth.uid())
  );

create policy edht_grants_owner_or_recipient_read
  on public.edht_document_grants for select to authenticated
  using (
    patient_user_id = (select auth.uid())
    or recipient_user_id = (select auth.uid())
  );

create or replace function public.edht_create_document_grant(
  p_document_id uuid,
  p_document_version integer,
  p_recipient_user_id uuid,
  p_purpose text,
  p_expires_at timestamptz
)
returns uuid
language plpgsql
volatile
security definer
set search_path = pg_catalog, public, auth
set row_security = off
as $$
declare
  v_id uuid;
  v_now timestamptz := now();
begin
  if auth.uid() is null or p_recipient_user_id = auth.uid() then
    raise exception 'EDHT_GRANT_FORBIDDEN' using errcode = '42501';
  end if;
  if p_purpose not in ('care_coordination', 'second_opinion', 'emergency')
     or p_expires_at <= v_now
     or p_expires_at > v_now + interval '7 days' then
    raise exception 'EDHT_GRANT_POLICY' using errcode = '22023';
  end if;
  if not exists (
    select 1 from public.edht_documents d
    where d.id = p_document_id
      and d.version = p_document_version
      and d.patient_user_id = auth.uid()
  ) then
    raise exception 'EDHT_DOCUMENT_NOT_OWNED' using errcode = '42501';
  end if;
  if not exists (select 1 from auth.users u where u.id = p_recipient_user_id) then
    raise exception 'EDHT_RECIPIENT_NOT_FOUND' using errcode = '22023';
  end if;
  insert into public.edht_document_grants (
    document_id, document_version, patient_user_id, recipient_user_id,
    purpose, expires_at
  ) values (
    p_document_id, p_document_version, auth.uid(), p_recipient_user_id,
    p_purpose, p_expires_at
  ) returning id into v_id;
  return v_id;
end;
$$;

create or replace function public.edht_revoke_document_grant(p_grant_id uuid)
returns boolean
language plpgsql
volatile
security definer
set search_path = pg_catalog, public, auth
set row_security = off
as $$
declare
  v_count integer;
begin
  if auth.uid() is null then
    raise exception 'EDHT_GRANT_FORBIDDEN' using errcode = '42501';
  end if;
  update public.edht_document_grants
  set revoked_at = coalesce(revoked_at, now())
  where id = p_grant_id
    and patient_user_id = auth.uid()
    and revoked_at is null;
  get diagnostics v_count = row_count;
  return v_count = 1;
end;
$$;

revoke all on function public.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) from public, anon;
revoke all on function public.edht_revoke_document_grant(uuid) from public, anon;
grant execute on function public.edht_create_document_grant(uuid, integer, uuid, text, timestamptz) to authenticated;
grant execute on function public.edht_revoke_document_grant(uuid) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'edht-medical-documents',
  'edht-medical-documents',
  false,
  268435456,
  array['application/pdf', 'text/plain', 'image/png', 'image/jpeg', 'application/json', 'text/csv', 'application/dicom']
)
on conflict (id) do nothing;

create policy edht_storage_owner_upload
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'edht-medical-documents'
    and split_part(name, '/', 1) = (select auth.uid())::text
    and exists (
      select 1 from public.edht_documents d
      where d.object_path = name
        and d.patient_user_id = (select auth.uid())
        and d.uploaded_by = (select auth.uid())
    )
  );

create policy edht_storage_owner_or_granted_read
  on storage.objects for select to authenticated
  using (
    bucket_id = 'edht-medical-documents'
    and public.edht_can_read_document_object(name)
  );

-- There are deliberately no update/delete policies for document metadata or objects.
-- The runtime integration must proxy downloads to append an access audit event before release.
