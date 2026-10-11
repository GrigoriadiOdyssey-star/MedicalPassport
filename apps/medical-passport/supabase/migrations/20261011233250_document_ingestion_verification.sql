-- Additive, server-attested document completion. Apply after the QR actor migration.
-- No credentials/configuration rows, trusted backfill or malware result are created.
create table private.edht_document_ingestion_capabilities (
 capability_digest bytea primary key check(octet_length(capability_digest)=32),
 enabled boolean not null default false,
 created_at timestamptz not null default now()
);
create unique index edht_document_ingestion_one_enabled
 on private.edht_document_ingestion_capabilities((true)) where enabled;
alter table private.edht_document_ingestion_capabilities enable row level security;
revoke all on private.edht_document_ingestion_capabilities from public,anon,authenticated;

create table private.edht_document_verification_receipts (
 document_id uuid not null,
 document_version integer not null,
 upload_id uuid not null unique references public.edht_upload_sessions(id) on delete restrict,
 patient_user_id uuid not null references auth.users(id) on delete restrict,
 sha256 text not null check(sha256~'^[a-f0-9]{64}$'),
 byte_size bigint not null check(byte_size between 1 and 4194304),
 mime text not null check(mime in('application/pdf','text/plain','image/png','image/jpeg','text/csv','application/json')),
 content_rules_version text not null check(content_rules_version='SIGNATURE_UTF8_V1'),
 malware_state text not null default 'NOT_CONFIGURED' check(malware_state='NOT_CONFIGURED'),
 verified_at timestamptz not null default now(),
 primary key(document_id,document_version),
 foreign key(document_id,document_version) references public.edht_documents(id,version) on delete restrict
);
alter table private.edht_document_verification_receipts enable row level security;
revoke all on private.edht_document_verification_receipts from public,anon,authenticated;

-- Keep the canonical transaction/audit/notification behavior unchanged.
alter function private.edht_upload_finish(uuid,boolean) rename to edht_upload_finish_internal;
revoke all on function private.edht_upload_finish_internal(uuid,boolean) from public,anon,authenticated;

create function private.edht_upload_finish(p_id uuid,p_cancel boolean default false)
returns jsonb language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_cancel is distinct from true then
  if not exists(select 1 from public.edht_upload_sessions where id=p_id and patient_user_id=auth.uid()) then
   raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
  raise exception 'EDHT_UPLOAD_VERIFICATION_REQUIRED' using errcode='PT409';
 end if;
 return private.edht_upload_finish_internal(p_id,true);
end $$;
-- Rebind the old public wrapper explicitly after renaming the implementation.
create or replace function public.edht_upload_finish(p_id uuid,p_cancel boolean default false)
returns jsonb language sql security invoker set search_path='' as $$
 select private.edht_upload_finish(p_id,p_cancel)
$$;

create function private.edht_upload_verified_finish(
 p_id uuid,p_server_capability text,p_observed_sha256 text,p_observed_size bigint,p_observed_mime text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();s public.edht_upload_sessions;d public.edht_documents;
 r private.edht_document_verification_receipts;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_server_capability is null or p_server_capability!~'^[A-Za-z0-9_-]{43,128}$' then
  raise exception 'EDHT_UPLOAD_VERIFICATION_REQUIRED' using errcode='PT409';end if;
 perform 1 from private.edht_document_ingestion_capabilities
 where enabled and capability_digest=sha256(convert_to(p_server_capability,'UTF8')) for share;
 if not found then raise exception 'EDHT_UPLOAD_VERIFICATION_REQUIRED' using errcode='PT409';end if;
 if private.edht_qr_actor() is distinct from u then
  raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;

 select * into s from public.edht_upload_sessions where id=p_id and patient_user_id=u for update;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if s.status not in('OPEN','COMPLETE') or (s.status='OPEN' and s.expires_at<=now()) then
  raise exception 'EDHT_UPLOAD_CLOSED' using errcode='PT409';end if;
 select * into d from public.edht_documents
 where id=s.document_id and version=s.version and patient_user_id=u for share;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p_observed_size is distinct from s.size or p_observed_size is distinct from d.byte_size
  or p_observed_sha256 is distinct from s.sha256 or p_observed_sha256 is distinct from d.sha256
  or p_observed_mime is distinct from s.mime or p_observed_mime is distinct from d.mime_type then
  raise exception 'EDHT_UPLOAD_INTEGRITY_MISMATCH' using errcode='PT409';end if;
 if not exists(select 1 from storage.objects where bucket_id='edht-medical-documents' and name=d.object_path) then
  raise exception 'EDHT_UPLOAD_INCOMPLETE' using errcode='PT409';end if;

 select * into r from private.edht_document_verification_receipts
 where document_id=s.document_id and document_version=s.version;
 if found then
  if r.upload_id<>s.id or r.patient_user_id<>u or r.sha256<>s.sha256 or r.byte_size<>s.size or r.mime<>s.mime then
   raise exception 'EDHT_UPLOAD_INTEGRITY_MISMATCH' using errcode='PT409';end if;
 else
  insert into private.edht_document_verification_receipts(
   document_id,document_version,upload_id,patient_user_id,sha256,byte_size,mime,content_rules_version)
  values(s.document_id,s.version,s.id,u,s.sha256,s.size,s.mime,'SIGNATURE_UTF8_V1');
  perform private.edht_runtime_event(u,'DOCUMENT_CONTENT_VERIFIED',s.document_id::text);
 end if;
 return private.edht_upload_finish_internal(p_id,false);
end $$;
create function public.edht_upload_verified_finish(
 p_id uuid,p_server_capability text,p_observed_sha256 text,p_observed_size bigint,p_observed_mime text)
returns jsonb language sql security invoker set search_path='' as $$
 select private.edht_upload_verified_finish(p_id,p_server_capability,p_observed_sha256,p_observed_size,p_observed_mime)
$$;

-- Owner-only evidence projection. Client metadata, COMPLETE alone and legacy
-- rows never become trusted evidence; lack of a scanner never becomes CLEAN.
create function private.edht_document_verification_state(p_document_id uuid,p_version integer)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();r private.edht_document_verification_receipts;
begin
 if u is null or private.edht_qr_actor() is distinct from u then
  raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if not exists(select 1 from public.edht_documents where id=p_document_id and version=p_version and patient_user_id=u) then
  raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 select * into r from private.edht_document_verification_receipts
 where document_id=p_document_id and document_version=p_version and patient_user_id=u;
 if not found then return '{"integrity_state":"UNVERIFIED","malware_state":"NOT_CONFIGURED"}'::jsonb;end if;
 return jsonb_build_object('integrity_state','SIGNATURE_VERIFIED','malware_state',r.malware_state,
  'content_rules_version',r.content_rules_version,'verified_at',r.verified_at);
end $$;
create function public.edht_document_verification_state(p_document_id uuid,p_version integer)
returns jsonb language sql security invoker set search_path='' as $$
 select private.edht_document_verification_state(p_document_id,p_version)
$$;
revoke all on function private.edht_upload_finish(uuid,boolean),public.edht_upload_finish(uuid,boolean),
 private.edht_upload_verified_finish(uuid,text,text,bigint,text),public.edht_upload_verified_finish(uuid,text,text,bigint,text),
 private.edht_document_verification_state(uuid,integer),public.edht_document_verification_state(uuid,integer)
 from public,anon,authenticated;
grant execute on function private.edht_upload_finish(uuid,boolean),public.edht_upload_finish(uuid,boolean),
 private.edht_upload_verified_finish(uuid,text,text,bigint,text),public.edht_upload_verified_finish(uuid,text,text,bigint,text),
 private.edht_document_verification_state(uuid,integer),public.edht_document_verification_state(uuid,integer)
 to authenticated;
notify pgrst,'reload schema';
