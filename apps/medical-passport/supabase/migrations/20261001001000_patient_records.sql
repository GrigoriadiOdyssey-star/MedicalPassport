-- EDHT cloud foundation: patient profiles, append-only clinical versions and scoped grants.
-- This is a synthetic-staging data contract. It does not certify a clinician or authorize care.

create table if not exists public.edht_patient_profiles (
  patient_user_id uuid primary key references auth.users(id) on delete restrict,
  display_name text not null check (length(display_name) between 1 and 100),
  locale text not null default 'en' check (length(locale) between 2 and 35),
  time_zone text not null default 'UTC' check (length(time_zone) between 1 and 80),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.edht_clinical_record_versions (
  record_id uuid not null,
  version integer not null check (version > 0),
  patient_user_id uuid not null references auth.users(id) on delete restrict,
  actor_user_id uuid not null references auth.users(id) on delete restrict,
  kind text not null check (kind in ('condition', 'observation', 'allergy', 'medication', 'vaccination', 'emergency')),
  body jsonb not null check (jsonb_typeof(body) = 'object' and pg_column_size(body) <= 8192),
  source text not null check (length(source) between 1 and 80),
  created_at timestamptz not null default now(),
  primary key (record_id, version),
  check (actor_user_id = patient_user_id)
);

create table if not exists public.edht_patient_grants (
  id uuid primary key default gen_random_uuid(),
  patient_user_id uuid not null references auth.users(id) on delete restrict,
  recipient_user_id uuid not null references auth.users(id) on delete restrict,
  purpose text not null check (purpose in ('care_coordination', 'second_opinion', 'emergency')),
  scopes text[] not null check (
    cardinality(scopes) between 1 and 6
    and scopes <@ array['condition', 'observation', 'allergy', 'medication', 'vaccination', 'emergency']::text[]
  ),
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  check (recipient_user_id <> patient_user_id),
  check (expires_at > created_at)
);

create index if not exists edht_record_owner_kind
  on public.edht_clinical_record_versions (patient_user_id, kind, record_id, version desc);
create index if not exists edht_patient_grants_recipient_active
  on public.edht_patient_grants (recipient_user_id, patient_user_id, expires_at)
  where revoked_at is null;

alter table public.edht_patient_profiles enable row level security;
alter table public.edht_clinical_record_versions enable row level security;
alter table public.edht_patient_grants enable row level security;

revoke all on public.edht_patient_profiles from anon, authenticated;
revoke all on public.edht_clinical_record_versions from anon, authenticated;
revoke all on public.edht_patient_grants from anon, authenticated;
grant select, insert, update on public.edht_patient_profiles to authenticated;
grant select on public.edht_clinical_record_versions to authenticated;
grant select on public.edht_patient_grants to authenticated;

create policy edht_profile_self_read
  on public.edht_patient_profiles for select to authenticated
  using (patient_user_id = (select auth.uid()));
create policy edht_profile_self_insert
  on public.edht_patient_profiles for insert to authenticated
  with check (patient_user_id = (select auth.uid()));
create policy edht_profile_self_update
  on public.edht_patient_profiles for update to authenticated
  using (patient_user_id = (select auth.uid()))
  with check (patient_user_id = (select auth.uid()));

create policy edht_record_owner_or_scoped_grant_read
  on public.edht_clinical_record_versions for select to authenticated
  using (
    patient_user_id = (select auth.uid())
    or exists (
      select 1 from public.edht_patient_grants g
      where g.patient_user_id = edht_clinical_record_versions.patient_user_id
        and g.recipient_user_id = (select auth.uid())
        and edht_clinical_record_versions.kind = any(g.scopes)
        and g.revoked_at is null
        and g.expires_at > now()
    )
  );

create policy edht_grant_owner_or_recipient_read
  on public.edht_patient_grants for select to authenticated
  using (
    patient_user_id = (select auth.uid())
    or recipient_user_id = (select auth.uid())
  );

create or replace function public.edht_append_clinical_record_version(
  p_record_id uuid,
  p_kind text,
  p_body jsonb,
  p_source text
)
returns table (record_id uuid, version integer)
language plpgsql
volatile
security definer
set search_path = pg_catalog, public, auth
set row_security = off
as $$
declare
  v_record_id uuid;
  v_version integer;
  v_existing_kind text;
  v_existing_source text;
begin
  if auth.uid() is null then
    raise exception 'EDHT_AUTH_REQUIRED' using errcode = '42501';
  end if;
  if p_kind not in ('condition', 'observation', 'allergy', 'medication', 'vaccination', 'emergency')
     or p_body is null
     or jsonb_typeof(p_body) <> 'object'
     or pg_column_size(p_body) > 8192
     or p_source is null
     or length(p_source) not between 1 and 80 then
    raise exception 'EDHT_RECORD_INVALID' using errcode = '22023';
  end if;

  if p_record_id is null then
    v_record_id := gen_random_uuid();
    v_version := 1;
  else
    v_record_id := p_record_id;
    perform pg_advisory_xact_lock(hashtextextended(v_record_id::text, 0));
    select r.version, r.kind, r.source
      into v_version, v_existing_kind, v_existing_source
    from public.edht_clinical_record_versions r
    where r.record_id = v_record_id
      and r.patient_user_id = auth.uid()
    order by r.version desc
    limit 1;
    if v_version is null then
      raise exception 'EDHT_RECORD_NOT_OWNED' using errcode = '42501';
    end if;
    if v_existing_kind <> p_kind or v_existing_source <> p_source then
      raise exception 'EDHT_RECORD_IDENTITY_IMMUTABLE' using errcode = '22023';
    end if;
    v_version := v_version + 1;
  end if;

  insert into public.edht_clinical_record_versions (
    record_id, version, patient_user_id, actor_user_id, kind, body, source
  ) values (
    v_record_id, v_version, auth.uid(), auth.uid(), p_kind, p_body, p_source
  );
  return query select v_record_id, v_version;
end;
$$;

create or replace function public.edht_create_patient_grant(
  p_recipient_user_id uuid,
  p_purpose text,
  p_scopes text[],
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
  v_allowed text[] := array['condition', 'observation', 'allergy', 'medication', 'vaccination', 'emergency']::text[];
begin
  if auth.uid() is null or p_recipient_user_id = auth.uid() then
    raise exception 'EDHT_GRANT_FORBIDDEN' using errcode = '42501';
  end if;
  if p_purpose not in ('care_coordination', 'second_opinion', 'emergency')
     or p_scopes is null
     or cardinality(p_scopes) not between 1 and 6
     or not (p_scopes <@ v_allowed)
     or p_expires_at <= v_now
     or p_expires_at > v_now + interval '7 days' then
    raise exception 'EDHT_GRANT_POLICY' using errcode = '22023';
  end if;
  if not exists (select 1 from auth.users u where u.id = p_recipient_user_id) then
    raise exception 'EDHT_RECIPIENT_NOT_FOUND' using errcode = '22023';
  end if;
  insert into public.edht_patient_grants (
    patient_user_id, recipient_user_id, purpose, scopes, expires_at
  ) values (
    auth.uid(), p_recipient_user_id, p_purpose, p_scopes, p_expires_at
  ) returning id into v_id;
  return v_id;
end;
$$;

create or replace function public.edht_revoke_patient_grant(p_grant_id uuid)
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
  update public.edht_patient_grants
  set revoked_at = coalesce(revoked_at, now())
  where id = p_grant_id
    and patient_user_id = auth.uid()
    and revoked_at is null;
  get diagnostics v_count = row_count;
  return v_count = 1;
end;
$$;

revoke all on function public.edht_append_clinical_record_version(uuid, text, jsonb, text) from public, anon;
revoke all on function public.edht_create_patient_grant(uuid, text, text[], timestamptz) from public, anon;
revoke all on function public.edht_revoke_patient_grant(uuid) from public, anon;
grant execute on function public.edht_append_clinical_record_version(uuid, text, jsonb, text) to authenticated;
grant execute on function public.edht_create_patient_grant(uuid, text, text[], timestamptz) to authenticated;
grant execute on function public.edht_revoke_patient_grant(uuid) to authenticated;

create or replace view public.edht_current_clinical_records
with (security_invoker = true)
as
select distinct on (record_id)
  record_id, version, patient_user_id, actor_user_id, kind, body, source, created_at
from public.edht_clinical_record_versions
order by record_id, version desc;

grant select on public.edht_current_clinical_records to authenticated;
