-- QR consent uses canonical patient grants but never grants direct Data API reads.
-- Existing durable grants keep their recipient-bound behavior.
alter table public.edht_patient_grants add column access_mode text not null default 'DURABLE'
  check (access_mode in ('DURABLE','QR'));

create table private.edht_qr_credentials (
  grant_id uuid primary key references public.edht_patient_grants(id) on delete restrict,
  token_hash text not null unique check (token_hash ~ '^[0-9a-f]{64}$'),
  one_time boolean not null,
  used_at timestamptz
);
alter table private.edht_qr_credentials enable row level security;
revoke all on private.edht_qr_credentials from public,anon,authenticated;

alter policy edht_record_owner_or_scoped_grant_read on public.edht_clinical_record_versions
  using (patient_user_id=(select auth.uid()) or exists (
    select 1 from public.edht_patient_grants g
    where g.patient_user_id=edht_clinical_record_versions.patient_user_id
      and g.recipient_user_id=(select auth.uid()) and g.access_mode='DURABLE'
      and edht_clinical_record_versions.kind=any(g.scopes)
      and g.revoked_at is null and g.expires_at>now()
  ));
alter policy edht_grant_owner_or_recipient_read on public.edht_patient_grants
  using (patient_user_id=(select auth.uid()) or
    (recipient_user_id=(select auth.uid()) and access_mode='DURABLE'));

-- Sensitive RPCs reject revoked sessions even when an access JWT has not expired.
create function private.edht_qr_actor() returns uuid
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();v_session uuid;v_active boolean;
begin
 if v_user is null or to_regclass('auth.sessions') is null then return null;end if;
 begin
  v_session:=(nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'session_id')::uuid;
 exception when invalid_text_representation then return null;end;
 if v_session is null then return null;end if;
 execute 'select exists(select 1 from auth.sessions where id=$1 and user_id=$2 and (not_after is null or not_after>clock_timestamp()))'
 into v_active using v_session,v_user;
 return case when v_active then v_user else null end;
end $$;
revoke all on function private.edht_qr_actor() from public,anon,authenticated;

create function private.edht_qr_doctor(p_user uuid) returns boolean
language plpgsql security definer set search_path='' as $$
declare v_verified boolean;
begin
 if p_user is null or to_regclass('public.clinicians') is null then return false;end if;
 execute 'select exists(select 1 from public.clinicians where user_id=$1 and verified_at is not null)'
 into v_verified using p_user;
 return v_verified;
end $$;
revoke all on function private.edht_qr_doctor(uuid) from public,anon,authenticated;

-- Denials return an opaque contract after persisting an actor-only audit event.
-- Raising after INSERT would roll back the required denial evidence.
create function private.edht_qr_denied() returns jsonb
language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is not null then
  insert into public.edht_runtime_audit(user_id,action,reference,outcome)
  values(auth.uid(),'QR_ACCESS_DENIED','','DENIED');
 end if;
 return '{"error":"NOT_FOUND"}'::jsonb;
end $$;
revoke all on function private.edht_qr_denied() from public,anon,authenticated;

create function private.edht_qr_create(p_recipient uuid,p_scopes text[],p_purpose text,p_seconds integer,p_one_time boolean,p_token_hash text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=private.edht_qr_actor();v_id uuid;v_expiry timestamptz;
begin
 if v_user is null then return private.edht_qr_denied();end if;
 if p_recipient is null or p_recipient=v_user or not private.edht_qr_doctor(p_recipient) then
  return '{"error":"INVALID_RECIPIENT"}'::jsonb;
 end if;
 if p_scopes is null or cardinality(p_scopes) not between 1 and 6
  or not(p_scopes<@array['condition','observation','allergy','medication','vaccination','emergency']::text[])
  or array_position(p_scopes,null) is not null
  or cardinality(p_scopes)<>(select count(distinct s) from unnest(p_scopes) s)
  or p_purpose is null or p_purpose not in ('review','emergency')
  or (p_purpose='emergency' and p_scopes<>array['emergency']::text[])
  or p_seconds is null or p_seconds not in (3600,86400,604800)
  or p_one_time is null or (p_one_time and p_seconds<>3600)
  or p_token_hash is null or p_token_hash!~'^[0-9a-f]{64}$' then
  raise exception 'EDHT_QR_POLICY' using errcode='22023';
 end if;
 v_expiry:=clock_timestamp()+make_interval(secs=>p_seconds);
 insert into public.edht_patient_grants(patient_user_id,recipient_user_id,purpose,scopes,expires_at,access_mode)
 values(v_user,p_recipient,case when p_purpose='review' then 'care_coordination' else 'emergency' end,p_scopes,v_expiry,'QR') returning id into v_id;
 insert into private.edht_qr_credentials(grant_id,token_hash,one_time) values(v_id,p_token_hash,p_one_time);
 -- Canonical grant trigger persists create audit and notification in this transaction.
 return jsonb_build_object('id',v_id,'expires_at',v_expiry,'scopes',p_scopes,'purpose',p_purpose,'one_time',p_one_time);
end $$;

create function private.edht_qr_info(p_token_hash text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=private.edht_qr_actor();g public.edht_patient_grants; q private.edht_qr_credentials;v_status text;v_label text;
begin
 if v_user is null or not private.edht_qr_doctor(v_user) or p_token_hash is null or p_token_hash!~'^[0-9a-f]{64}$' then
  return private.edht_qr_denied();end if;
 select pg.* into g from public.edht_patient_grants pg join private.edht_qr_credentials qc on qc.grant_id=pg.id
 where qc.token_hash=p_token_hash and pg.recipient_user_id=v_user and pg.access_mode='QR' for share of pg;
 if not found then return private.edht_qr_denied();end if;
 select * into q from private.edht_qr_credentials where grant_id=g.id;
 v_status:=case when g.revoked_at is not null then 'ACCESS_REVOKED'
   when g.expires_at<=clock_timestamp() then 'ACCESS_EXPIRED'
   when q.one_time and q.used_at is not null then 'ACCESS_USED' else 'ACTIVE' end;
 -- Only an active recipient gets the patient label; denied or inactive responses contain no PHI.
 if v_status='ACTIVE' then
  select display_name into v_label from public.edht_patient_profiles where patient_user_id=g.patient_user_id;
 end if;
 insert into public.edht_runtime_audit(user_id,action,reference,outcome)
 values(v_user,'QR_ACCESS_INFO',g.id::text,case when v_status='ACTIVE' then 'ALLOWED' else 'DENIED' end);
 return jsonb_build_object('status',v_status,'expires_at',g.expires_at,'scopes',g.scopes,
  'purpose',case when g.purpose='care_coordination' then 'review' else g.purpose end,
  'patient_label',v_label,'one_time',q.one_time);
end $$;

create function private.edht_qr_read(p_token_hash text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=private.edht_qr_actor();g public.edht_patient_grants;q private.edht_qr_credentials;v_records jsonb;v_result jsonb;
begin
 if v_user is null or not private.edht_qr_doctor(v_user) or p_token_hash is null or p_token_hash!~'^[0-9a-f]{64}$' then
  return private.edht_qr_denied();end if;
 -- Same canonical row lock as revoke; concurrent reads and revoke have one serial order.
 select pg.* into g from public.edht_patient_grants pg join private.edht_qr_credentials qc on qc.grant_id=pg.id
 where qc.token_hash=p_token_hash and pg.recipient_user_id=v_user and pg.access_mode='QR' for update of pg;
 if not found then return private.edht_qr_denied();end if;
 select * into q from private.edht_qr_credentials where grant_id=g.id for update;
 if g.revoked_at is not null or g.expires_at<=clock_timestamp() or (q.one_time and q.used_at is not null) then
  return private.edht_qr_denied();end if;
 select coalesce(jsonb_agg(jsonb_build_object('id',r.record_id,'version',r.version,'kind',r.kind,
  'body',r.body,'source',r.source,'created_at',r.created_at,'archived',0) order by r.created_at desc,r.record_id),'[]'::jsonb)
 into v_records from public.edht_current_clinical_records r
 where r.patient_user_id=g.patient_user_id and r.kind=any(g.scopes) and not r.archived;
 v_result:=jsonb_build_object('records',v_records,'documents','[]'::jsonb);
 -- The audit receipt and single-use consumption commit before the successful RPC response.
 insert into public.edht_runtime_audit(user_id,action,reference,outcome)
 values(g.patient_user_id,case when g.purpose='emergency' then 'EMERGENCY_ACCESS' else 'SHARED_PASSPORT_READ' end,g.id::text,'ALLOWED');
 insert into public.edht_runtime_audit(user_id,action,reference,outcome)
 values(v_user,'QR_PASSPORT_READ',g.id::text,'ALLOWED');
 if q.one_time then update private.edht_qr_credentials set used_at=clock_timestamp() where grant_id=g.id;end if;
 return v_result;
end $$;

create function private.edht_qr_grants(p_filter text,p_offset integer) returns jsonb
language plpgsql security definer set search_path='' as $$
declare v_user uuid:=private.edht_qr_actor();v_result jsonb;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_filter is null or p_filter not in ('all','active','expired','revoked','used') or p_offset is null or p_offset<0 or p_offset>100000 then
  raise exception 'EDHT_PAGE_INVALID' using errcode='22023';end if;
 select coalesce(jsonb_agg(r.item order by r.created_at desc,r.id),'[]'::jsonb) into v_result from (
  select g.id,g.created_at,jsonb_build_object('id',g.id,'recipient_user_id',g.recipient_user_id,
   'recipient',g.recipient_user_id::text,'purpose',case when g.purpose='care_coordination' and g.access_mode='QR' then 'review' else g.purpose end,
   'scopes',g.scopes,'expires_at',g.expires_at,'revoked_at',g.revoked_at,'created_at',g.created_at,
   'one_time',coalesce(q.one_time,false),'used_at',q.used_at,'access_mode',g.access_mode) as item
  from public.edht_patient_grants g left join private.edht_qr_credentials q on q.grant_id=g.id
  where g.patient_user_id=v_user and (
   p_filter='all' or (p_filter='revoked' and g.revoked_at is not null)
   or (p_filter='expired' and g.revoked_at is null and g.expires_at<=clock_timestamp())
   or (p_filter='used' and g.revoked_at is null and g.expires_at>clock_timestamp() and q.one_time and q.used_at is not null)
   or (p_filter='active' and g.revoked_at is null and g.expires_at>clock_timestamp() and not(coalesce(q.one_time,false) and q.used_at is not null)))
  order by g.created_at desc,g.id limit 30 offset p_offset
 ) r;
 return v_result;
end $$;

create function public.edht_qr_create(p_recipient uuid,p_scopes text[],p_purpose text,p_seconds integer,p_one_time boolean,p_token_hash text)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_qr_create(p_recipient,p_scopes,p_purpose,p_seconds,p_one_time,p_token_hash)$$;
create function public.edht_qr_info(p_token_hash text) returns jsonb language sql security invoker set search_path='' as $$select private.edht_qr_info(p_token_hash)$$;
create function public.edht_qr_read(p_token_hash text) returns jsonb language sql security invoker set search_path='' as $$select private.edht_qr_read(p_token_hash)$$;
create function public.edht_qr_grants(p_filter text default 'all',p_offset integer default 0) returns jsonb language sql security invoker set search_path='' as $$select private.edht_qr_grants(p_filter,p_offset)$$;
revoke all on function private.edht_qr_create(uuid,text[],text,integer,boolean,text),private.edht_qr_info(text),private.edht_qr_read(text),private.edht_qr_grants(text,integer),
 public.edht_qr_create(uuid,text[],text,integer,boolean,text),public.edht_qr_info(text),public.edht_qr_read(text),public.edht_qr_grants(text,integer) from public,anon;
grant execute on function private.edht_qr_create(uuid,text[],text,integer,boolean,text),private.edht_qr_info(text),private.edht_qr_read(text),private.edht_qr_grants(text,integer),
 public.edht_qr_create(uuid,text[],text,integer,boolean,text),public.edht_qr_info(text),public.edht_qr_read(text),public.edht_qr_grants(text,integer) to authenticated;
notify pgrst,'reload schema';
