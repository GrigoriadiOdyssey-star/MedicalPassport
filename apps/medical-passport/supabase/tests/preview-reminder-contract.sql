begin;
insert into auth.users(id) values('80000000-0000-4000-8000-000000000001');
insert into public.edht_patient_profiles(patient_user_id,display_name) values('80000000-0000-4000-8000-000000000001','Synthetic contract test');
set local role authenticated;
select set_config('request.jwt.claim.sub','80000000-0000-4000-8000-000000000001',true);
do $test$ declare r record;p jsonb;begin
 select * into r from public.edht_append_clinical_record_version(null,'medication','{"name":"Synthetic medication","status":"active"}','patient_reported');
 p:=public.edht_reminder_configure(r.record_id,jsonb_build_object('mode','daily','timezone','UTC','start',current_date::text,'end','','times',jsonb_build_array('08:00'),'weekdays',jsonb_build_array(0,1,2,3,4,5,6)),true);
 if (select count(*) from public.edht_reminder_versions where plan_id=(p->>'id')::uuid)<>1 then raise exception 'INITIAL_PLAN_PROVENANCE_MISSING';end if;
 perform public.edht_timezone('Europe/Berlin','local');
 if (select count(*) from public.edht_reminder_versions where plan_id=(p->>'id')::uuid)<>2 then raise exception 'TIMEZONE_PROVENANCE_MISSING';end if;
end $test$;
reset role;
insert into public.edht_medication_doses(patient_user_id,plan_id,plan_version,record_id,slot,scheduled_at,status,snapshot)
 select patient_user_id,id,version,record_id,'synthetic-old-slot',now()-interval '2 days','MISSED','{}' from public.edht_reminder_plans where patient_user_id='80000000-0000-4000-8000-000000000001';
set local role authenticated;
do $test$ declare d uuid;begin
 select id into d from public.edht_medication_doses where slot='synthetic-old-slot';
 perform public.edht_dose_action(d,'taken');
 if (select status from public.edht_medication_doses where id=d)<>'TAKEN_LATE' then raise exception 'LATE_TAKEN_CONTRACT_REGRESSION';end if;
 begin perform public.edht_dose_action(d,'taken');raise exception 'DOUBLE_DOSE_ACTION_ACCEPTED';exception when sqlstate 'PT409' then null;end;
end $test$;
reset role;
rollback;
select 'PREVIEW_REMINDER_CONTRACT_PASS' as result;
