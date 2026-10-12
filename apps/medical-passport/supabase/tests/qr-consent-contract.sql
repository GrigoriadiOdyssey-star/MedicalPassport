-- Focused synthetic QR authorization contract; all fixtures roll back.
\set ON_ERROR_STOP on
begin;
create table if not exists auth.sessions(id uuid primary key,user_id uuid not null,not_after timestamptz,created_at timestamptz default now());
create table if not exists public.clinicians(id uuid primary key default gen_random_uuid(),user_id uuid,given_name text not null default '',family_name text not null default '',verified_at timestamptz);
alter table public.clinicians enable row level security;
grant select on public.clinicians to authenticated;
insert into auth.users(id) values
 ('a1000000-0000-4000-8000-000000000001'),('a1000000-0000-4000-8000-000000000002'),
 ('a1000000-0000-4000-8000-000000000003'),('a1000000-0000-4000-8000-000000000004');
insert into auth.sessions(id,user_id) select id,id from auth.users where id::text like 'a1000000-%';
insert into public.clinicians(user_id,verified_at) values
 ('a1000000-0000-4000-8000-000000000003',now()),('a1000000-0000-4000-8000-000000000004',now());
insert into public.edht_patient_profiles(patient_user_id,display_name) values ('a1000000-0000-4000-8000-000000000001','Synthetic QR A');
set local role authenticated;
select set_config('request.jwt.claim.sub','a1000000-0000-4000-8000-000000000001',true);
select set_config('request.jwt.claims','{"session_id":"a1000000-0000-4000-8000-000000000001"}',true);
select public.edht_append_clinical_record_version(null,'allergy','{"name":"Synthetic QR allergy"}','patient_reported');
select public.edht_append_clinical_record_version(null,'medication','{"name":"Synthetic QR medication"}','patient_reported');
select public.edht_append_clinical_record_version(null,'observation','{"name":"Synthetic QR observation"}','patient_reported');
select public.edht_create_patient_grant('a1000000-0000-4000-8000-000000000003','second_opinion',array['observation'],now()+interval '1 hour');
select (public.edht_qr_create('a1000000-0000-4000-8000-000000000003',array['allergy'],'review',3600,true,repeat('a',64))->>'id') as once_grant \gset
select (public.edht_qr_create('a1000000-0000-4000-8000-000000000003',array['medication'],'review',3600,false,repeat('b',64))->>'id') as durable_qr_grant \gset

do $test$ declare r jsonb;begin
 r:=public.edht_qr_create('a1000000-0000-4000-8000-000000000002',array['allergy'],'review',3600,false,repeat('c',64));
 if r->>'error'<>'INVALID_RECIPIENT' then raise exception 'UNVERIFIED_RECIPIENT_ACCEPTED';end if;
 r:=public.edht_qr_grants('all',0);
 if jsonb_array_length(r)<>3 or r::text like '%token_hash%' or r::text like '%'||repeat('a',64)||'%' then raise exception 'OWNER_GRANT_PROJECTION_INVALID';end if;
 begin
  perform public.edht_qr_create('a1000000-0000-4000-8000-000000000003',array['documents'],'review',3600,false,repeat('d',64));
  raise exception 'UNSUPPORTED_SCOPE_ACCEPTED';
 exception when invalid_parameter_value then null;end;
end $test$;

-- Verified but wrong recipient learns no patient, scopes, status or grant existence.
select set_config('request.jwt.claim.sub','a1000000-0000-4000-8000-000000000004',true);
select set_config('request.jwt.claims','{"session_id":"a1000000-0000-4000-8000-000000000004"}',true);
do $test$ declare r jsonb;begin
 r:=public.edht_qr_info(repeat('a',64));if r<>'{"error":"NOT_FOUND"}'::jsonb then raise exception 'WRONG_RECIPIENT_INFO_LEAK';end if;
 r:=public.edht_qr_read(repeat('a',64));if r<>'{"error":"NOT_FOUND"}'::jsonb then raise exception 'WRONG_RECIPIENT_READ';end if;
end $test$;

select set_config('request.jwt.claim.sub','a1000000-0000-4000-8000-000000000003',true);
select set_config('request.jwt.claims','{"session_id":"a1000000-0000-4000-8000-000000000003"}',true);
do $test$ declare r jsonb;begin
 -- Direct Data API equivalents cannot redeem/skip QR consent, but durable grants still work.
 if (select count(*) from public.edht_current_clinical_records where patient_user_id='a1000000-0000-4000-8000-000000000001')<>1
 or exists(select 1 from public.edht_current_clinical_records where kind in('allergy','medication') and patient_user_id='a1000000-0000-4000-8000-000000000001') then raise exception 'QR_RLS_BYPASS';end if;
 if exists(select 1 from public.edht_patient_grants where access_mode='QR') then raise exception 'QR_GRANT_DIRECT_ENUMERATION';end if;
 begin perform 1 from private.edht_qr_credentials;raise exception 'QR_HASH_READ_ALLOWED';exception when insufficient_privilege then null;end;
 r:=public.edht_qr_info(repeat('a',64));if r->>'status'<>'ACTIVE' then raise exception 'INFO_NOT_ACTIVE';end if;
 r:=public.edht_qr_info(repeat('a',64));if r->>'status'<>'ACTIVE' then raise exception 'INFO_CONSUMED_GRANT';end if;
 r:=public.edht_qr_read(repeat('a',64));
 if jsonb_array_length(r->'records')<>1 or r->'records'->0->>'kind'<>'allergy' or r->'records'->0->>'source'<>'patient_reported'
 or jsonb_array_length(r->'documents')<>0 then raise exception 'QR_SCOPE_OR_PROVENANCE_INVALID';end if;
 if (public.edht_qr_read(repeat('a',64)))<>'{"error":"NOT_FOUND"}'::jsonb then raise exception 'ONE_READ_REUSED';end if;
 if (public.edht_qr_info(repeat('a',64)))->>'status'<>'ACCESS_USED' then raise exception 'USED_STATUS_INVALID';end if;
 r:=public.edht_qr_read(repeat('b',64));if jsonb_array_length(r->'records')<>1 or r->'records'->0->>'kind'<>'medication' then raise exception 'DURATION_SCOPE_INVALID';end if;
 r:=public.edht_qr_read(repeat('b',64));if jsonb_array_length(r->'records')<>1 then raise exception 'DURATION_GRANT_CONSUMED';end if;
end $test$;

-- Canonical revoke immediately blocks all future credential reads.
select set_config('request.jwt.claim.sub','a1000000-0000-4000-8000-000000000001',true);
select set_config('request.jwt.claims','{"session_id":"a1000000-0000-4000-8000-000000000001"}',true);
select public.edht_revoke_patient_grant(:'durable_qr_grant'::uuid);
select set_config('request.jwt.claim.sub','a1000000-0000-4000-8000-000000000003',true);
select set_config('request.jwt.claims','{"session_id":"a1000000-0000-4000-8000-000000000003"}',true);
do $test$ begin
 if (public.edht_qr_info(repeat('b',64)))->>'status'<>'ACCESS_REVOKED' then raise exception 'REVOKE_INFO_INVALID';end if;
 if public.edht_qr_read(repeat('b',64))<>'{"error":"NOT_FOUND"}'::jsonb then raise exception 'REVOKED_READ_ALLOWED';end if;
end $test$;
reset role;
delete from auth.sessions where user_id='a1000000-0000-4000-8000-000000000003';
set local role authenticated;
do $test$ begin
 if public.edht_qr_info(repeat('a',64))<>'{"error":"NOT_FOUND"}'::jsonb then raise exception 'REVOKED_SESSION_ACCEPTED';end if;
end $test$;
reset role;
do $test$ begin
 if (select count(*) from public.edht_runtime_audit where action='SHARED_PASSPORT_READ' and user_id='a1000000-0000-4000-8000-000000000001')<>3 then raise exception 'READ_AUDIT_RECEIPT_MISSING';end if;
 if not exists(select 1 from public.edht_runtime_audit where action='QR_ACCESS_DENIED' and outcome='DENIED') then raise exception 'DENIAL_AUDIT_MISSING';end if;
end $test$;
rollback;
