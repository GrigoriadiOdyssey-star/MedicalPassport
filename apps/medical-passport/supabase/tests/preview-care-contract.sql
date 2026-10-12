begin;
insert into auth.users(id) values('83000000-0000-4000-8000-000000000001'),('83000000-0000-4000-8000-000000000002');
insert into public.edht_patient_profiles(patient_user_id,display_name) values
 ('83000000-0000-4000-8000-000000000001','Synthetic care A'),('83000000-0000-4000-8000-000000000002','Synthetic care B');
set local role authenticated;
select set_config('request.jwt.claim.sub','83000000-0000-4000-8000-000000000001',true);
do $test$
declare a jsonb;b jsonb;c jsonb;n integer;
begin
 if public.edht_care_read('appointments')<>'[]'::jsonb then raise exception 'NOT_EMPTY';end if;
 if public.edht_care_read('context')<>'{"context":{},"version":0}'::jsonb then raise exception 'CONTEXT_NOT_EMPTY';end if;
 b:=jsonb_build_object('provider','Synthetic clinic','specialty','','location','','at',(now()+interval '1 day')::text,'status','planned','source','PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED');
 a:=public.edht_save_appointment(null,null,b);
 perform set_config('test.care_appointment',a->>'id',true);
 if a->>'version'<>'1' then raise exception 'INITIAL_VERSION';end if;
 if (select count(*) from public.edht_appointment_versions)<>1 then raise exception 'INITIAL_HISTORY';end if;
 if not exists(select 1 from public.edht_notifications where source='appointment' and status='SCHEDULED' and audit_seq is not null) then raise exception 'NOTIFICATION_MISSING';end if;
 begin perform public.edht_save_appointment((a->>'id')::uuid,0,b);raise exception 'STALE_WRITE_ACCEPTED';exception when sqlstate 'PT409' then null;end;
 a:=public.edht_save_appointment((a->>'id')::uuid,1,b||'{"status":"cancelled"}'::jsonb);
 if a->>'version'<>'2' or (select count(*) from public.edht_appointment_versions)<>2 then raise exception 'CANCEL_HISTORY';end if;
 if exists(select 1 from public.edht_notifications where source='appointment' and status in('SCHEDULED','DELIVERED')) then raise exception 'CANCEL_NOTIFICATION';end if;
 c:=jsonb_build_object('country',null,'origin','PATIENT_ENTERED','verification','UNVERIFIED');
 c:=jsonb_build_object('patient_home',c,'patient_current',c,'treating_doctor',c,'care_delivery',c,'reason','Synthetic context fixture');
 if public.edht_save_guideline_context(0,c)<>'{"version":1}'::jsonb then raise exception 'CONTEXT_SAVE';end if;
 if (public.edht_care_read('context')->'context'->'care_delivery'->'country') is distinct from 'null'::jsonb then raise exception 'UNKNOWN_COERCED';end if;
 begin perform public.edht_save_guideline_context(0,c);raise exception 'CONTEXT_STALE_ACCEPTED';exception when sqlstate 'PT409' then null;end;
 begin perform public.edht_save_guideline_context(1,jsonb_set(c,'{treating_doctor,verification}','"VERIFIED"'));raise exception 'FORGED_VERIFICATION';exception when sqlstate '22023' then null;end;
 begin update public.edht_appointments set version=9;raise exception 'DIRECT_MUTATION_ALLOWED';exception when insufficient_privilege then null;end;
end $test$;
reset role;
insert into public.edht_notification_preferences(user_id,type,enabled,channel) values('83000000-0000-4000-8000-000000000001','Appointment',false,'IN_APP');
create function pg_temp.reject_care_fixture() returns trigger language plpgsql as $$begin if new.body->>'provider'='ROLLBACK_TEST' then raise exception 'TEST_ROLLBACK' using errcode='ZX001';end if;return new;end$$;
create trigger reject_care_fixture before insert on public.edht_appointment_versions for each row execute function pg_temp.reject_care_fixture();
set local role authenticated;
do $test$ declare b jsonb;a jsonb;n integer;begin
 b:=jsonb_build_object('provider','Suppressed test','specialty','','location','','at',(now()+interval '1 day')::text,'status','planned','source','PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED');
 a:=public.edht_save_appointment(null,null,b);
 if not exists(select 1 from public.edht_notifications where related_entity=a->>'id' and status='CANCELLED' and suppressed_by_settings) then raise exception 'PREFERENCE_IGNORED';end if;
 select count(*) into n from public.edht_appointments;
 begin perform public.edht_save_appointment(null,null,b||'{"provider":"ROLLBACK_TEST"}'::jsonb);raise exception 'ROLLBACK_TRIGGER_NOT_RUN';exception when sqlstate 'ZX001' then null;end;
 if (select count(*) from public.edht_appointments)<>n then raise exception 'PARTIAL_APPOINTMENT_COMMITTED';end if;
end $test$;
select set_config('request.jwt.claim.sub','83000000-0000-4000-8000-000000000002',true);
do $test$ begin
 if public.edht_care_read('appointments')<>'[]'::jsonb or public.edht_care_read('context')<>'{"context":{},"version":0}'::jsonb then raise exception 'FOREIGN_READ';end if;
 if exists(select 1 from public.edht_appointments) or exists(select 1 from public.edht_appointment_versions) or exists(select 1 from public.edht_guideline_context) or exists(select 1 from public.edht_guideline_context_versions) then raise exception 'RLS_BYPASS';end if;
 begin perform public.edht_save_appointment(current_setting('test.care_appointment')::uuid,2,jsonb_build_object('provider','Foreign write','specialty','','location','','at',now()::text,'status','planned','source','PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED'));raise exception 'FOREIGN_WRITE_ACCEPTED';exception when sqlstate 'PT404' then null;end;
end $test$;
reset role;
set local role anon;
do $test$ begin
 begin perform public.edht_care_read('appointments');raise exception 'ANON_READ';exception when insufficient_privilege then null;end;
end $test$;
reset role;
rollback;
select 'PREVIEW_CARE_CONTRACT_PASS' as result;
