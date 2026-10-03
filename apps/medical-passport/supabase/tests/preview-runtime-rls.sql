-- Additional tests only. Disposable CI database or explicit BEGIN/ROLLBACK on Preview.
begin;
insert into auth.users(id) values('80000000-0000-4000-8000-000000000001'),('80000000-0000-4000-8000-000000000002');
insert into public.edht_patient_profiles(patient_user_id,display_name) values('80000000-0000-4000-8000-000000000001','Synthetic A'),('80000000-0000-4000-8000-000000000002','Synthetic B');
insert into public.edht_notifications(notification_id,user_id,type,title,dedupe_key) values
('90000000-0000-4000-8000-000000000001','80000000-0000-4000-8000-000000000001','System','synthetic-a','test:a'),
('90000000-0000-4000-8000-000000000002','80000000-0000-4000-8000-000000000002','System','synthetic-b','test:b');
set local role authenticated;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000001',true);
do $test$ declare n jsonb; begin
 n:=public.edht_notifications_read();
 if n->>'unread'<>'1' or n->'items'->0->>'title'<>'synthetic-a' then raise exception 'A_NOTIFICATION_ISOLATION_FAILED';end if;
 if exists(select 1 from public.edht_notifications where user_id='80000000-0000-4000-8000-000000000002') then raise exception 'A_SEES_B';end if;
 begin
  perform public.edht_notification_action('90000000-0000-4000-8000-000000000002','read');
  raise exception 'FOREIGN_ID_ACCEPTED';
 exception when sqlstate 'PT404' then null;end;
 begin
  insert into public.edht_notifications(user_id,type,title,dedupe_key) values('80000000-0000-4000-8000-000000000002','System','forged','forged');
  raise exception 'DIRECT_INSERT_ALLOWED';
 exception when insufficient_privilege then null;end;
 perform public.edht_notification_action(null,'read_all');
 if (public.edht_notifications_read())->>'unread'<>'0' then raise exception 'READ_ALL_FAILED';end if;
 perform public.edht_append_clinical_record_version(null,'allergy','{"name":"Synthetic A"}','patient_reported');
end $test$;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000002',true);
do $test$ declare n jsonb;r record;p jsonb; begin
 n:=public.edht_notifications_read();
 if n->>'unread'<>'1' or n->'items'->0->>'title'<>'synthetic-b' then raise exception 'B_NOTIFICATION_ISOLATION_FAILED';end if;
 if exists(select 1 from public.edht_current_clinical_records where patient_user_id='80000000-0000-4000-8000-000000000001') then raise exception 'B_SEES_A_RECORDS';end if;
 if exists(select 1 from public.edht_runtime_audit where user_id='80000000-0000-4000-8000-000000000001') then raise exception 'B_SEES_A_AUDIT';end if;
 select * into r from public.edht_append_clinical_record_version(null,'medication','{"name":"Synthetic B medication","status":"active"}','patient_reported');
 p:=public.edht_reminder_configure(r.record_id,jsonb_build_object('mode','daily','timezone','UTC','start',current_date::text,'end','','times',jsonb_build_array('08:00'),'weekdays',jsonb_build_array(0,1,2,3,4,5,6)),true);
 if (select count(*) from public.edht_reminder_plans)<>1 then raise exception 'PLAN_CREATE_FAILED';end if;
 perform public.edht_change_record(r.record_id,1,'{"name":"Synthetic B updated","status":"active"}',false);
 if (select active from public.edht_reminder_plans where id=(p->>'id')::uuid) then raise exception 'REMINDER_NOT_PAUSED_ON_EDIT';end if;
 begin
  perform public.edht_change_record(r.record_id,1,'{}',false);
  raise exception 'STALE_VERSION_ACCEPTED';
 exception when sqlstate 'PT409' then null;end;
end $test$;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000001',true);
do $test$ begin
 if exists(select 1 from public.edht_reminder_plans) then raise exception 'A_SEES_B_PLANS';end if;
 if exists(select 1 from public.edht_current_clinical_records where patient_user_id='80000000-0000-4000-8000-000000000002') then raise exception 'A_SEES_B_RECORDS';end if;
end $test$;
reset role;
rollback;
select 'PREVIEW_RUNTIME_RLS_A_B_PASS' as result;
