begin;
insert into auth.users(id) values('80000000-0000-4000-8000-000000000001'),('80000000-0000-4000-8000-000000000002');
set local role authenticated;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000001',true);
do $test$ declare s jsonb;begin
 s:=public.edht_upload_reserve('synthetic.txt','text/plain',3,repeat('a',64),'{}');
 perform set_config('edht.test_upload',s->>'id',true);
 perform set_config('edht.test_document',s->>'document_id',true);
 if (select count(*) from public.edht_upload_sessions)<>1 then raise exception 'UPLOAD_RESERVE_FAILED';end if;
 begin perform public.edht_upload_finish((s->>'id')::uuid);raise exception 'MISSING_OBJECT_ACCEPTED';exception when sqlstate 'PT409' then null;end;
end $test$;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000002',true);
do $test$ begin
 if exists(select 1 from public.edht_upload_sessions) then raise exception 'B_SEES_A_UPLOAD';end if;
 if exists(select 1 from public.edht_documents) then raise exception 'B_SEES_A_DOCUMENT';end if;
 begin perform public.edht_upload_finish(current_setting('edht.test_upload')::uuid,true);raise exception 'B_CANCELLED_A_UPLOAD';exception when sqlstate 'PT404' then null;end;
 begin perform public.edht_document_metadata(current_setting('edht.test_document')::uuid,'{}',true);raise exception 'B_ARCHIVED_A_DOCUMENT';exception when sqlstate 'PT404' then null;end;
end $test$;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000001',true);
select public.edht_upload_finish(current_setting('edht.test_upload')::uuid,true);
reset role;
rollback;
select 'PREVIEW_DOCUMENT_RLS_A_B_PASS' as result;
