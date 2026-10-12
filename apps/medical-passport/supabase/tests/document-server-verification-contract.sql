-- Synthetic PostgreSQL contract; run only in the disposable cloud test database.
\set ON_ERROR_STOP on
begin;
create table if not exists auth.sessions(
 id uuid primary key,user_id uuid not null,not_after timestamptz,created_at timestamptz default now()
);
insert into auth.users(id) values
 ('d1000000-0000-4000-8000-000000000001'),('d1000000-0000-4000-8000-000000000002');
insert into auth.sessions(id,user_id) values
 ('d1000000-0000-4000-8000-000000000001','d1000000-0000-4000-8000-000000000001'),
 ('d1000000-0000-4000-8000-000000000002','d1000000-0000-4000-8000-000000000002');
-- Synthetic fixture only; no deployment credential is generated or read.
insert into private.edht_document_ingestion_capabilities(capability_digest,enabled)
 values(sha256(convert_to(repeat('K',43),'UTF8')),true);

set local role authenticated;
select set_config('request.jwt.claim.sub','d1000000-0000-4000-8000-000000000001',true);
select set_config('request.jwt.claims','{"session_id":"d1000000-0000-4000-8000-000000000001"}',true);
do $test$
declare s jsonb; label text;hash text:=encode(sha256(convert_to('abc','UTF8')),'hex');
begin
 foreach label in array array['good','missing','cancel','audit'] loop
  s:=public.edht_upload_reserve('EDHT-TEST-'||label||'.txt','text/plain',3,hash,'{}');
  perform set_config('edht.doc.'||label||'_upload',s->>'id',true);
  perform set_config('edht.doc.'||label||'_document',s->>'document_id',true);
 end loop;
 begin
  perform public.edht_upload_verified_finish(current_setting('edht.doc.missing_upload')::uuid,repeat('K',43),hash,3,'text/plain');
  raise exception 'MISSING_OBJECT_ACCEPTED';
 exception when sqlstate 'PT409' then null;end;
 begin perform 1 from private.edht_document_ingestion_capabilities;raise exception 'CAPABILITY_READ_ALLOWED';
 exception when insufficient_privilege then null;end;
 begin perform 1 from private.edht_document_verification_receipts;raise exception 'RECEIPT_READ_ALLOWED';
 exception when insufficient_privilege then null;end;
 begin
  perform private.edht_upload_finish_internal(current_setting('edht.doc.good_upload')::uuid,false);
  raise exception 'INTERNAL_FINISH_EXECUTE_ALLOWED';
 exception when insufficient_privilege then null;end;
end $test$;
reset role;
insert into storage.objects(bucket_id,name)
 select 'edht-medical-documents',d.object_path
 from public.edht_documents d join public.edht_upload_sessions s on s.document_id=d.id and s.version=d.version
 where s.id in(current_setting('edht.doc.good_upload')::uuid,current_setting('edht.doc.audit_upload')::uuid);

set local role authenticated;
do $test$
declare hash text:=encode(sha256(convert_to('abc','UTF8')),'hex');result jsonb;
begin
 begin perform public.edht_upload_finish(current_setting('edht.doc.good_upload')::uuid,false);raise exception 'OLD_PUBLIC_COMPLETION_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform private.edht_upload_finish(current_setting('edht.doc.good_upload')::uuid,false);raise exception 'OLD_PRIVATE_COMPLETION_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,null,hash,3,'text/plain');raise exception 'ABSENT_CAPABILITY_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('Z',43),hash,3,'text/plain');raise exception 'WRONG_CAPABILITY_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),repeat('a',64),3,'text/plain');raise exception 'BAD_HASH_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),hash,4,'text/plain');raise exception 'BAD_SIZE_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),hash,3,'image/png');raise exception 'BAD_MIME_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
 if (select status from public.edht_upload_sessions where id=current_setting('edht.doc.good_upload')::uuid) is distinct from 'OPEN' then raise exception 'DENIAL_CHANGED_UPLOAD';end if;
 result:=public.edht_upload_finish(current_setting('edht.doc.cancel_upload')::uuid,true);
 if result is distinct from jsonb_build_object('id',current_setting('edht.doc.cancel_document'),'version',1,'ok',true) then raise exception 'CANCEL_CONTRACT_CHANGED';end if;
 result:=public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),hash,3,'text/plain');
 if result is distinct from jsonb_build_object('id',current_setting('edht.doc.good_document'),'version',1,'ok',true) then raise exception 'COMPLETION_CONTRACT_CHANGED';end if;
 result:=public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),hash,3,'text/plain');
 if result->>'ok' is distinct from 'true' then raise exception 'COMPLETION_RETRY_FAILED';end if;
 result:=public.edht_document_verification_state(current_setting('edht.doc.good_document')::uuid,1);
 if result->>'integrity_state' is distinct from 'SIGNATURE_VERIFIED' or result->>'malware_state' is distinct from 'NOT_CONFIGURED' then raise exception 'FALSE_MALWARE_CLEAN';end if;
end $test$;

-- Legacy/client metadata cannot fabricate trusted verification.
insert into public.edht_documents(
 id,version,patient_user_id,uploaded_by,object_path,original_name,mime_type,byte_size,sha256,document_type,source,metadata)
values(
 'd2000000-0000-4000-8000-000000000001',1,
 'd1000000-0000-4000-8000-000000000001','d1000000-0000-4000-8000-000000000001',
 'd1000000-0000-4000-8000-000000000001/d2000000-0000-4000-8000-000000000001/1',
 'EDHT-TEST-legacy.txt','text/plain',3,encode(sha256(convert_to('abc','UTF8')),'hex'),'Other','patient_upload',
 '{"cloud_upload_pending":false,"scan_state":"CLEAN","integrity_state":"SIGNATURE_VERIFIED"}');
do $test$ begin
 if public.edht_document_verification_state('d2000000-0000-4000-8000-000000000001',1) is distinct from
  '{"integrity_state":"UNVERIFIED","malware_state":"NOT_CONFIGURED"}'::jsonb then raise exception 'CLIENT_METADATA_TRUSTED';end if;
end $test$;

select set_config('request.jwt.claim.sub','d1000000-0000-4000-8000-000000000002',true);
select set_config('request.jwt.claims','{"session_id":"d1000000-0000-4000-8000-000000000002"}',true);
do $test$ begin
 begin perform public.edht_upload_finish(current_setting('edht.doc.missing_upload')::uuid,true);raise exception 'B_CANCELLED_A_UPLOAD';
 exception when sqlstate 'PT404' then null;end;
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),encode(sha256(convert_to('abc','UTF8')),'hex'),3,'text/plain');raise exception 'B_COMPLETED_A_UPLOAD';
 exception when sqlstate 'PT404' then null;end;
 begin perform public.edht_document_verification_state(current_setting('edht.doc.good_document')::uuid,1);raise exception 'B_READ_A_EVIDENCE';
 exception when sqlstate 'PT404' then null;end;
end $test$;
reset role;

-- Audit failure must roll back the private receipt and original completion.
create function pg_temp.edht_document_fail_audit() returns trigger language plpgsql as $$
begin
 if new.action='DOCUMENT_UPLOADED' and new.reference=current_setting('edht.doc.audit_document',true) then
  raise exception 'EDHT_TEST_AUDIT_REJECTED';end if;
 return new;
end $$;
create trigger edht_document_contract_fail_audit before insert on public.edht_runtime_audit
 for each row execute function pg_temp.edht_document_fail_audit();
set local role authenticated;
select set_config('request.jwt.claim.sub','d1000000-0000-4000-8000-000000000001',true);
select set_config('request.jwt.claims','{"session_id":"d1000000-0000-4000-8000-000000000001"}',true);
do $test$ begin
 begin
  perform public.edht_upload_verified_finish(current_setting('edht.doc.audit_upload')::uuid,repeat('K',43),encode(sha256(convert_to('abc','UTF8')),'hex'),3,'text/plain');
  raise exception 'AUDIT_FAILURE_NOT_PROPAGATED';
 exception when raise_exception then
  if sqlerrm<>'EDHT_TEST_AUDIT_REJECTED' then raise;end if;
 end;
 if (select status from public.edht_upload_sessions where id=current_setting('edht.doc.audit_upload')::uuid) is distinct from 'OPEN' then raise exception 'AUDIT_FAILURE_COMPLETED_UPLOAD';end if;
end $test$;
reset role;
do $test$ begin
 if (select count(*) from private.edht_document_verification_receipts where document_id=current_setting('edht.doc.good_document')::uuid)<>1 then raise exception 'IDEMPOTENT_RECEIPT_DUPLICATED';end if;
 if exists(select 1 from private.edht_document_verification_receipts where document_id in(current_setting('edht.doc.audit_document')::uuid,'d2000000-0000-4000-8000-000000000001'::uuid)) then raise exception 'UNVERIFIED_RECEIPT_PERSISTED';end if;
 if (select count(*) from public.edht_runtime_audit where action='DOCUMENT_UPLOADED' and reference=current_setting('edht.doc.good_document'))<>1 then raise exception 'COMPLETION_AUDIT_DUPLICATED';end if;
 if exists(select 1 from public.edht_runtime_audit where reference=current_setting('edht.doc.audit_document') and action in('DOCUMENT_CONTENT_VERIFIED','DOCUMENT_UPLOADED')) then raise exception 'AUDIT_FAILURE_NOT_ATOMIC';end if;
end $test$;

update private.edht_document_ingestion_capabilities set enabled=false;
set local role authenticated;
do $test$ begin
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),encode(sha256(convert_to('abc','UTF8')),'hex'),3,'text/plain');raise exception 'DISABLED_CAPABILITY_ALLOWED';
 exception when sqlstate 'PT409' then null;end;
end $test$;
reset role;
update private.edht_document_ingestion_capabilities set enabled=true;
delete from auth.sessions where user_id='d1000000-0000-4000-8000-000000000001';
set local role authenticated;
do $test$ begin
 begin perform public.edht_upload_verified_finish(current_setting('edht.doc.good_upload')::uuid,repeat('K',43),encode(sha256(convert_to('abc','UTF8')),'hex'),3,'text/plain');raise exception 'REVOKED_SESSION_ALLOWED';
 exception when insufficient_privilege then null;end;
end $test$;
reset role;
rollback;
select 'DOCUMENT_SERVER_VERIFICATION_CONTRACT_PASS' as result;
