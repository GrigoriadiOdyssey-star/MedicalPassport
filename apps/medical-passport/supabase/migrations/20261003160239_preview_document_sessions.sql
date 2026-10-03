-- Bounded Preview document upload sessions; private original objects remain immutable.
create table public.edht_upload_sessions (
 id uuid primary key default gen_random_uuid(),patient_user_id uuid not null references auth.users(id),
 document_id uuid not null,version integer not null,
 name text not null,mime text not null,size bigint not null check(size between 1 and 4194304),
 sha256 text not null check(sha256~'^[a-f0-9]{64}$'),
 status text not null default 'OPEN' check(status in('OPEN','COMPLETE','CANCELLED')),
 created_at timestamptz not null default now(),expires_at timestamptz not null default now()+interval '24 hours',
 completed_at timestamptz,unique(document_id,version),
 foreign key(document_id,version) references public.edht_documents(id,version)
);
create index edht_upload_owner on public.edht_upload_sessions(patient_user_id,created_at desc);
create table public.edht_document_details (
 document_id uuid primary key,patient_user_id uuid not null references auth.users(id),
 description text not null default '' check(length(description)<=2000),
 document_date date,language text not null default 'und' check(length(language)<=35),
 translation_status text not null default 'original' check(translation_status in('original','translated','needs_review')),
 archived boolean not null default false
);
create index edht_document_details_owner on public.edht_document_details(patient_user_id);
alter table public.edht_upload_sessions enable row level security;
alter table public.edht_document_details enable row level security;
revoke all on public.edht_upload_sessions,public.edht_document_details from anon,authenticated;
grant select on public.edht_upload_sessions,public.edht_document_details to authenticated;
create policy edht_upload_self on public.edht_upload_sessions for select to authenticated using(patient_user_id=(select auth.uid()));
create policy edht_document_details_self on public.edht_document_details for select to authenticated using(patient_user_id=(select auth.uid()));

create function private.edht_upload_reserve(p_name text,p_mime text,p_size bigint,p_sha256 text,p_metadata jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();v_id uuid;v_version integer;s public.edht_upload_sessions;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_name is null or length(p_name) not between 1 and 180 or p_size is null or p_size not between 1 and 4194304
 or p_mime not in('application/pdf','text/plain','image/png','image/jpeg','text/csv','application/json') or p_sha256 is null or p_sha256!~'^[a-f0-9]{64}$'
 or jsonb_typeof(p_metadata) is distinct from 'object' or pg_column_size(p_metadata)>4096 then raise exception 'EDHT_UPLOAD_INVALID' using errcode='22023';end if;
 perform pg_advisory_xact_lock(hashtextextended(v_user::text,1));
 if (select count(*) from public.edht_upload_sessions where patient_user_id=v_user and status='OPEN' and expires_at>now())>=64 then raise exception 'EDHT_UPLOAD_LIMIT' using errcode='PT409';end if;
 if coalesce((select sum(byte_size) from public.edht_documents where patient_user_id=v_user),0)+p_size>21474836480 then raise exception 'EDHT_UPLOAD_LIMIT' using errcode='PT409';end if;
 v_id:=nullif(p_metadata->>'document_id','')::uuid;
 if v_id is null then v_id:=gen_random_uuid();v_version:=1;
 else
  select max(version)+1 into v_version from public.edht_documents where id=v_id and patient_user_id=v_user;
  if v_version is null then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 end if;
 insert into public.edht_documents(id,version,patient_user_id,uploaded_by,object_path,original_name,mime_type,byte_size,sha256,document_type,source,metadata)
 values(v_id,v_version,v_user,v_user,v_user||'/'||v_id||'/'||v_version,p_name,p_mime,p_size,p_sha256,left(coalesce(p_metadata->>'category','Other'),80),'patient_upload',p_metadata||'{"cloud_upload_pending":true}'::jsonb);
 insert into public.edht_upload_sessions(patient_user_id,document_id,version,name,mime,size,sha256) values(v_user,v_id,v_version,p_name,p_mime,p_size,p_sha256) returning * into s;
 return to_jsonb(s)-'patient_user_id';
end $$;
create function public.edht_upload_reserve(p_name text,p_mime text,p_size bigint,p_sha256 text,p_metadata jsonb) returns jsonb language sql security invoker set search_path='' as $$select private.edht_upload_reserve(p_name,p_mime,p_size,p_sha256,p_metadata)$$;

create function private.edht_upload_finish(p_id uuid,p_cancel boolean default false)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();s public.edht_upload_sessions;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into s from public.edht_upload_sessions where id=p_id and patient_user_id=v_user for update;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if s.status='COMPLETE' and not p_cancel then return jsonb_build_object('id',s.document_id,'version',s.version,'ok',true);end if;
 if s.status<>'OPEN' or s.expires_at<=now() then raise exception 'EDHT_UPLOAD_CLOSED' using errcode='PT409';end if;
 if not p_cancel and not exists(select 1 from storage.objects where bucket_id='edht-medical-documents' and name=v_user||'/'||s.document_id||'/'||s.version) then raise exception 'EDHT_UPLOAD_INCOMPLETE' using errcode='PT409';end if;
 update public.edht_upload_sessions set status=case when p_cancel then 'CANCELLED' else 'COMPLETE' end,completed_at=case when p_cancel then null else now() end where id=p_id;
 perform private.edht_runtime_event(v_user,case when p_cancel then 'UPLOAD_CANCELLED' else 'DOCUMENT_UPLOADED' end,s.document_id::text,case when p_cancel then null else 'Document' end,'documentUploaded','#/documents');
 return jsonb_build_object('id',s.document_id,'version',s.version,'ok',true);
end $$;
create function public.edht_upload_finish(p_id uuid,p_cancel boolean default false) returns jsonb language sql security invoker set search_path='' as $$select private.edht_upload_finish(p_id,p_cancel)$$;

create function private.edht_document_metadata(p_id uuid,p_body jsonb,p_archive boolean default false)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if not exists(select 1 from public.edht_documents where id=p_id and patient_user_id=v_user) then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p_archive then
  insert into public.edht_document_details(document_id,patient_user_id,archived) values(p_id,v_user,true) on conflict(document_id) do update set archived=true;
 else
  if jsonb_typeof(p_body) is distinct from 'object' then raise exception 'EDHT_METADATA_INVALID' using errcode='22023';end if;
  insert into public.edht_document_details(document_id,patient_user_id,description,document_date,language,translation_status)
  values(p_id,v_user,coalesce(p_body->>'description',''),nullif(p_body->>'document_date','')::date,coalesce(p_body->>'language','und'),coalesce(p_body->>'translation_status','original'))
  on conflict(document_id) do update set description=excluded.description,document_date=excluded.document_date,language=excluded.language,translation_status=excluded.translation_status;
 end if;
 perform private.edht_runtime_event(v_user,case when p_archive then 'DOCUMENT_ARCHIVED' else 'DOCUMENT_METADATA_UPDATED' end,p_id::text);
 return '{"ok":true}'::jsonb;
end $$;
create function public.edht_document_metadata(p_id uuid,p_body jsonb,p_archive boolean default false) returns jsonb language sql security invoker set search_path='' as $$select private.edht_document_metadata(p_id,p_body,p_archive)$$;
revoke all on function private.edht_upload_reserve(text,text,bigint,text,jsonb),public.edht_upload_reserve(text,text,bigint,text,jsonb),private.edht_upload_finish(uuid,boolean),public.edht_upload_finish(uuid,boolean),private.edht_document_metadata(uuid,jsonb,boolean),public.edht_document_metadata(uuid,jsonb,boolean) from public,anon;
grant execute on function private.edht_upload_reserve(text,text,bigint,text,jsonb),public.edht_upload_reserve(text,text,bigint,text,jsonb),private.edht_upload_finish(uuid,boolean),public.edht_upload_finish(uuid,boolean),private.edht_document_metadata(uuid,jsonb,boolean),public.edht_document_metadata(uuid,jsonb,boolean) to authenticated;
notify pgrst,'reload schema';

create or replace function private.edht_runtime_change()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_table_name='edht_clinical_record_versions' then
  perform private.edht_runtime_event(new.patient_user_id,case when new.version=1 then 'RECORD_CREATED' else 'RECORD_UPDATED' end,new.record_id::text,
   case when new.version>1 then 'Clinical' else null end,'recordUpdated','#/records');
 elsif tg_table_name='edht_documents' then
  if new.metadata->>'cloud_upload_pending'='true' then return new;end if;
  perform private.edht_runtime_event(new.patient_user_id,'DOCUMENT_UPLOADED',new.id::text,'Document','documentUploaded','#/documents');
 elsif tg_table_name='edht_patient_grants' then
  if tg_op='INSERT' then
   perform private.edht_runtime_event(new.patient_user_id,'GRANT_CREATED',new.id::text,'Access','accessGranted','#/privacy');
  elsif old.revoked_at is null and new.revoked_at is not null then
   perform private.edht_runtime_event(new.patient_user_id,'GRANT_REVOKED',new.id::text,'Access','accessRevokedNotice','#/privacy');
  end if;
 elsif tg_table_name='edht_patient_profiles' then
  perform private.edht_runtime_event(new.patient_user_id,'PROFILE_UPDATED','');
 end if;
 return new;
end $$;
