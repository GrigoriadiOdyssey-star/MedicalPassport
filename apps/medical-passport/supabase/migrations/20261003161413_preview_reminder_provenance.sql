
-- Preserve plan provenance and the existing late/missed dose action contract.
create table public.edht_reminder_versions(
 plan_id uuid not null references public.edht_reminder_plans(id),version integer not null,
 patient_user_id uuid not null references auth.users(id),config jsonb not null,record_version integer not null,
 created_at timestamptz not null default now(),primary key(plan_id,version)
);
create index edht_reminder_versions_owner on public.edht_reminder_versions(patient_user_id);
alter table public.edht_reminder_versions enable row level security;
revoke all on public.edht_reminder_versions from anon,authenticated;
grant select on public.edht_reminder_versions to authenticated;
create policy edht_reminder_versions_self on public.edht_reminder_versions for select to authenticated using(patient_user_id=(select auth.uid()));
create function private.edht_save_reminder_version() returns trigger language plpgsql security definer set search_path='' as $$
begin
 insert into public.edht_reminder_versions(plan_id,version,patient_user_id,config,record_version)
 select new.id,new.version,new.patient_user_id,new.config,coalesce(max(version),1) from public.edht_clinical_record_versions where record_id=new.record_id and patient_user_id=new.patient_user_id
 on conflict(plan_id,version) do nothing;
 return new;
end $$;
revoke all on function private.edht_save_reminder_version() from public,anon,authenticated;
create trigger edht_reminder_provenance after insert or update on public.edht_reminder_plans for each row execute function private.edht_save_reminder_version();
create or replace function private.edht_dose_action(p_id uuid,p_action text,p_minutes integer default 10) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();d public.edht_medication_doses; v_status text;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into d from public.edht_medication_doses where id=p_id and patient_user_id=v_user for update;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if d.status<>'PENDING' and not(d.status='MISSED' and p_action='taken') then raise exception 'EDHT_DOSE_COMPLETED' using errcode='PT409';end if;
 if d.scheduled_at>now() then raise exception 'EDHT_DOSE_NOT_DUE' using errcode='22023';end if;
 if p_action='snooze' then
  if p_minutes not in(5,10,30,60) or now()+make_interval(mins=>p_minutes)>=d.scheduled_at+interval '1 day' then raise exception 'EDHT_SNOOZE_INVALID' using errcode='22023';end if;
  if not exists(select 1 from public.edht_notifications where user_id=v_user and source='medication_dose' and related_entity=p_id::text) then raise exception 'EDHT_REMINDER_DISABLED' using errcode='22023';end if;
  update public.edht_medication_doses set snoozed_until=now()+make_interval(mins=>p_minutes) where id=p_id;
  update public.edht_notifications set status='SNOOZED',scheduled_at=now()+make_interval(mins=>p_minutes),read_at=null where notification_id=(select notification_id from public.edht_notifications where user_id=v_user and source='medication_dose' and related_entity=p_id::text order by created_at desc limit 1);
 elsif p_action in('taken','skip') then
  v_status:=case when p_action='skip' then 'SKIPPED' when now()>d.scheduled_at+interval '30 minutes' then 'TAKEN_LATE' else 'TAKEN' end;
  update public.edht_medication_doses set status=v_status,acted_at=now() where id=p_id;
  update public.edht_notifications set status='READ',read_at=coalesce(read_at,now()) where user_id=v_user and source='medication_dose' and related_entity=p_id::text ;
 else raise exception 'EDHT_DOSE_ACTION_INVALID' using errcode='22023';end if;
 perform private.edht_runtime_event(v_user,'DOSE_ACTION',p_id::text);return '{"ok":true}'::jsonb;
end $$;

create function private.edht_timezone(p_zone text,p_mode text) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();p public.edht_reminder_plans;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_mode not in('home','local') or not exists(select 1 from pg_catalog.pg_timezone_names where name=p_zone) then raise exception 'EDHT_TIMEZONE_INVALID' using errcode='22023';end if;
 update public.edht_patient_profiles set time_zone=p_zone,updated_at=now() where patient_user_id=v_user;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p_mode='local' then
  for p in select * from public.edht_reminder_plans where patient_user_id=v_user and active and config->>'mode'='daily' for update loop
   update public.edht_reminder_plans set config=jsonb_set(config,'{timezone}',to_jsonb(p_zone)),version=version+1,updated_at=now() where id=p.id;
   update public.edht_medication_doses set status='CANCELLED' where plan_id=p.id and patient_user_id=v_user and status='PENDING' and scheduled_at>now();
   update public.edht_notifications set status='CANCELLED' where user_id=v_user and source='medication_dose' and related_entity in(select id::text from public.edht_medication_doses where plan_id=p.id and status='CANCELLED');
  end loop;
 end if;
 perform private.edht_runtime_event(v_user,'TIMEZONE_UPDATED','');return '{"ok":true}'::jsonb;
end $$;
create function public.edht_timezone(p_zone text,p_mode text) returns jsonb language sql security invoker set search_path='' as $$select private.edht_timezone(p_zone,p_mode)$$;
revoke all on function private.edht_timezone(text,text),public.edht_timezone(text,text) from public,anon;
grant execute on function private.edht_timezone(text,text),public.edht_timezone(text,text) to authenticated;
notify pgrst,'reload schema';
