-- Preview runtime contracts. Additive; no existing rows or RLS policies are removed.
alter table public.edht_patient_profiles add column if not exists birth_date date;
alter table public.edht_patient_profiles add column if not exists country text not null default '' check (length(country)<=100);

create table public.edht_notifications (
 notification_id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete restrict,
 type text not null check(type in ('Medication','Appointment','Document','Access','Security','Emergency','Clinical','Guideline','System')),
 priority text not null default 'NORMAL' check(priority in ('NORMAL','HIGH','CRITICAL')),
 title text not null check(length(title) between 1 and 120),
 message text not null default '' check(length(message)<=2000),
 scheduled_at timestamptz not null default now(),
 status text not null default 'SCHEDULED' check(status in ('SCHEDULED','SNOOZED','DELIVERED','READ','CANCELLED','EXPIRED')),
 source text not null default 'system',
 related_entity text not null default '',
 action_url text not null default '#/notifications' check(action_url like '#/%'),
 expires_at timestamptz not null default now()+interval '30 days',
 created_at timestamptz not null default now(),
 dedupe_key text not null,
 audit_seq bigint,
 read_at timestamptz,
 delivered_at timestamptz,
 suppressed_by_settings boolean not null default false,
 unique(user_id,dedupe_key)
);
create index edht_notifications_owner_schedule on public.edht_notifications(user_id,scheduled_at desc,notification_id);
create index edht_notifications_owner_status on public.edht_notifications(user_id,status);
create table public.edht_notification_preferences (
 user_id uuid not null references auth.users(id) on delete restrict,
 type text not null check(type in ('Medication','Appointment','Document','Access','Security','Emergency','Clinical','Guideline','System')),
 enabled boolean not null default true,
 channel text not null default 'IN_APP' check(channel in ('IN_APP','BROWSER','PUSH','EMAIL','SMS')),
 primary key(user_id,type),
 check(type<>'Security' or enabled)
);
create table public.edht_runtime_audit (
 seq bigint generated always as identity primary key,
 user_id uuid not null references auth.users(id) on delete restrict,
 action text not null,
 reference text not null default '',
 outcome text not null default 'COMMITTED',
 occurred_at timestamptz not null default now()
);
create index edht_runtime_audit_owner on public.edht_runtime_audit(user_id,seq desc);
alter table public.edht_notifications enable row level security;
alter table public.edht_notification_preferences enable row level security;
alter table public.edht_runtime_audit enable row level security;
revoke all on public.edht_notifications,public.edht_notification_preferences,public.edht_runtime_audit from anon,authenticated;
grant select on public.edht_notifications,public.edht_notification_preferences,public.edht_runtime_audit to authenticated;
create policy edht_notifications_self on public.edht_notifications for select to authenticated using(user_id=(select auth.uid()));
create policy edht_notification_preferences_self on public.edht_notification_preferences for select to authenticated using(user_id=(select auth.uid()));
create policy edht_runtime_audit_self on public.edht_runtime_audit for select to authenticated using(user_id=(select auth.uid()));

-- Called only by controlled triggers/RPC implementations, never by browser RPC.
create function private.edht_runtime_event(p_owner uuid,p_action text,p_reference text,p_type text default null,p_title text default null,p_route text default '#/notifications')
returns void language plpgsql security definer set search_path='' as $$
declare v_seq bigint;
begin
 insert into public.edht_runtime_audit(user_id,action,reference) values(p_owner,p_action,coalesce(p_reference,'')) returning seq into v_seq;
 if p_type is not null then
  insert into public.edht_notifications(user_id,type,title,source,related_entity,action_url,dedupe_key,audit_seq,status,suppressed_by_settings)
  values(p_owner,p_type,p_title,'audit',coalesce(p_reference,''),p_route,'audit:'||v_seq,v_seq,
   case when exists(select 1 from public.edht_notification_preferences where user_id=p_owner and type=p_type and not enabled) and p_type<>'Security' then 'CANCELLED' else 'SCHEDULED' end,
   exists(select 1 from public.edht_notification_preferences where user_id=p_owner and type=p_type and not enabled) and p_type<>'Security');
 end if;
end $$;
revoke all on function private.edht_runtime_event(uuid,text,text,text,text,text) from public,anon,authenticated;

create function private.edht_runtime_change()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_table_name='edht_clinical_record_versions' then
  perform private.edht_runtime_event(new.patient_user_id,case when new.version=1 then 'RECORD_CREATED' else 'RECORD_UPDATED' end,new.record_id::text,
   case when new.version>1 then 'Clinical' else null end,'recordUpdated','#/records');
 elsif tg_table_name='edht_documents' then
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
revoke all on function private.edht_runtime_change() from public,anon,authenticated;
create trigger edht_runtime_records after insert on public.edht_clinical_record_versions for each row execute function private.edht_runtime_change();
create trigger edht_runtime_documents after insert on public.edht_documents for each row execute function private.edht_runtime_change();
create trigger edht_runtime_grants after insert or update on public.edht_patient_grants for each row execute function private.edht_runtime_change();
create trigger edht_runtime_profiles after update on public.edht_patient_profiles for each row execute function private.edht_runtime_change();

create function private.edht_notifications_read(p_filter text default 'all',p_type text default 'all',p_offset integer default 0)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); v_zone text; v_now timestamptz:=now(); v_today date; v_items jsonb; v_unread bigint;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501'; end if;
 if p_filter not in ('all','today','upcoming','unread') or p_type not in ('all','Medication','Appointment','Document','Access','Security','Emergency','Clinical','Guideline','System') or p_offset is null or p_offset<0 or p_offset>100000 then
  raise exception 'EDHT_PAGE_INVALID' using errcode='22023';
 end if;
 select time_zone into v_zone from public.edht_patient_profiles where patient_user_id=v_user;
 v_zone:=coalesce(v_zone,'UTC'); v_today:=(v_now at time zone v_zone)::date;
 update public.edht_notifications set status='EXPIRED'
  where user_id=v_user and status in ('SCHEDULED','SNOOZED','DELIVERED') and expires_at<=v_now;
 update public.edht_notifications set status='DELIVERED',delivered_at=coalesce(delivered_at,v_now)
  where user_id=v_user and status in ('SCHEDULED','SNOOZED') and scheduled_at<=v_now and expires_at>v_now;
 select count(*) into v_unread from public.edht_notifications where user_id=v_user and status='DELIVERED';
 select coalesce(jsonb_agg(to_jsonb(n)-'user_id'-'dedupe_key'),'[]'::jsonb) into v_items from (
  select * from public.edht_notifications where user_id=v_user
   and (p_type='all' or type=p_type)
   and (p_filter='all' or (p_filter='unread' and status='DELIVERED') or (p_filter='upcoming' and status in ('SCHEDULED','SNOOZED')) or (p_filter='today' and (scheduled_at at time zone v_zone)::date=v_today))
  order by case when p_filter='upcoming' then scheduled_at end asc,case when p_filter<>'upcoming' then scheduled_at end desc,notification_id
  limit 30 offset p_offset
 ) n;
 return jsonb_build_object('items',v_items,'unread',v_unread,'timezone',v_zone,'offset',p_offset);
end $$;
create function public.edht_notifications_read(p_filter text default 'all',p_type text default 'all',p_offset integer default 0)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_notifications_read(p_filter,p_type,p_offset)$$;

create function private.edht_notification_action(p_id uuid,p_action text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); v_row public.edht_notifications;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501'; end if;
 if p_action='read_all' then
  update public.edht_notifications set status='READ',read_at=coalesce(read_at,now()) where user_id=v_user and status='DELIVERED';
 else
  select * into v_row from public.edht_notifications where notification_id=p_id and user_id=v_user for update;
  if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404'; end if;
  if p_action='read' and v_row.status in ('DELIVERED','READ') then
   update public.edht_notifications set status='READ',read_at=coalesce(read_at,now()) where notification_id=p_id;
  elsif p_action='dismiss' and v_row.priority<>'CRITICAL' then
   update public.edht_notifications set status='CANCELLED',suppressed_by_settings=false where notification_id=p_id;
  else raise exception 'EDHT_NOTIFICATION_ACTION_INVALID' using errcode='22023';
  end if;
 end if;
 perform private.edht_runtime_event(v_user,'NOTIFICATION_ACTION',coalesce(p_id::text,''));
 return '{"ok":true}'::jsonb;
end $$;
create function public.edht_notification_action(p_id uuid,p_action text)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_notification_action(p_id,p_action)$$;

create function private.edht_notification_settings(p_preferences jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); p jsonb;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501'; end if;
 if jsonb_typeof(p_preferences) is distinct from 'array' or jsonb_array_length(p_preferences)<>9 then raise exception 'EDHT_PREFERENCES_INVALID' using errcode='22023'; end if;
 if (select count(distinct value->>'type') from jsonb_array_elements(p_preferences))<>9 then raise exception 'EDHT_PREFERENCES_INVALID' using errcode='22023'; end if;
 for p in select value from jsonb_array_elements(p_preferences) loop
  if jsonb_typeof(p->'enabled') is distinct from 'boolean' or p->>'type' is null or p->>'channel' is null then raise exception 'EDHT_PREFERENCES_INVALID' using errcode='22023'; end if;
  insert into public.edht_notification_preferences(user_id,type,enabled,channel) values(v_user,p->>'type',(p->>'enabled')::boolean,p->>'channel')
  on conflict(user_id,type) do update set enabled=excluded.enabled,channel=excluded.channel;
 end loop;
 update public.edht_notifications n set status='CANCELLED',suppressed_by_settings=true
 where n.user_id=v_user and n.type<>'Security' and n.status in ('SCHEDULED','SNOOZED','DELIVERED')
 and exists(select 1 from public.edht_notification_preferences p where p.user_id=v_user and p.type=n.type and not p.enabled);
 update public.edht_notifications n set status='SCHEDULED',suppressed_by_settings=false
 where n.user_id=v_user and n.suppressed_by_settings and n.expires_at>now()
 and exists(select 1 from public.edht_notification_preferences p where p.user_id=v_user and p.type=n.type and p.enabled);
 perform private.edht_runtime_event(v_user,'NOTIFICATION_SETTINGS_UPDATED','');
 return '{"ok":true}'::jsonb;
end $$;
create function public.edht_notification_settings(p_preferences jsonb)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_notification_settings(p_preferences)$$;

-- No email, IP, refresh token or device string is exposed by this projection.
create function private.edht_own_sessions()
returns jsonb language plpgsql security definer set search_path='' as $$
declare result jsonb; v_user uuid:=auth.uid();
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501'; end if;
 execute 'select coalesce(jsonb_agg(jsonb_build_object(''id'',id,''expires_at'',not_after,''created_at'',created_at)),''[]''::jsonb) from auth.sessions where user_id=$1 and (not_after is null or not_after>now())' into result using v_user;
 return result;
end $$;
create function public.edht_own_sessions() returns jsonb language sql security invoker set search_path='' as $$select private.edht_own_sessions()$$;

revoke all on function private.edht_notifications_read(text,text,integer),public.edht_notifications_read(text,text,integer),private.edht_notification_action(uuid,text),public.edht_notification_action(uuid,text),private.edht_notification_settings(jsonb),public.edht_notification_settings(jsonb),private.edht_own_sessions(),public.edht_own_sessions() from public,anon;
grant execute on function private.edht_notifications_read(text,text,integer),public.edht_notifications_read(text,text,integer),private.edht_notification_action(uuid,text),public.edht_notification_action(uuid,text),private.edht_notification_settings(jsonb),public.edht_notification_settings(jsonb),private.edht_own_sessions(),public.edht_own_sessions() to authenticated;
notify pgrst,'reload schema';


create table public.edht_reminder_plans(
 id uuid primary key default gen_random_uuid(), patient_user_id uuid not null references auth.users(id),
 record_id uuid not null, config jsonb not null check(jsonb_typeof(config)='object'),
 active boolean not null default true, version integer not null default 1,
 created_at timestamptz not null default now(),updated_at timestamptz not null default now(),
 unique(patient_user_id,record_id)
);
create table public.edht_medication_doses(
 id uuid primary key default gen_random_uuid(), patient_user_id uuid not null references auth.users(id),
 plan_id uuid not null references public.edht_reminder_plans(id),plan_version integer not null,record_id uuid not null,
 slot text not null,scheduled_at timestamptz not null,status text not null default 'PENDING' check(status in('PENDING','TAKEN','TAKEN_LATE','SKIPPED','MISSED','CANCELLED')),
 snapshot jsonb not null,acted_at timestamptz,snoozed_until timestamptz,unique(plan_id,slot)
);
create index edht_reminder_owner on public.edht_reminder_plans(patient_user_id,id);
create index edht_dose_owner on public.edht_medication_doses(patient_user_id,scheduled_at,id);
alter table public.edht_reminder_plans enable row level security;
alter table public.edht_medication_doses enable row level security;
revoke all on public.edht_reminder_plans,public.edht_medication_doses from anon,authenticated;
grant select on public.edht_reminder_plans,public.edht_medication_doses to authenticated;
create policy edht_reminder_self on public.edht_reminder_plans for select to authenticated using(patient_user_id=(select auth.uid()));
create policy edht_dose_self on public.edht_medication_doses for select to authenticated using(patient_user_id=(select auth.uid()));

create function private.edht_reminder_configure(p_record_id uuid,p_config jsonb,p_confirmed boolean)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid(); r public.edht_clinical_record_versions; p public.edht_reminder_plans;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into r from public.edht_clinical_record_versions where patient_user_id=v_user and record_id=p_record_id order by version desc limit 1;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p_confirmed is distinct from true or r.kind<>'medication' or r.body->>'status'='stopped' or jsonb_typeof(p_config) is distinct from 'object'
 or coalesce(p_config->>'mode','') not in('daily','interval') or coalesce(p_config->>'start','')!~'^\d{4}-\d{2}-\d{2}$'
 or not exists(select 1 from pg_catalog.pg_timezone_names where name=p_config->>'timezone') then
 raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 if r.body->>'start'<>'' and p_config->>'start'<r.body->>'start' then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 if r.body->>'end'<>'' and (coalesce(p_config->>'end','')='' or p_config->>'end'>r.body->>'end') then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 if p_config->>'mode'='daily' and (jsonb_typeof(p_config->'times') is distinct from 'array' or jsonb_array_length(p_config->'times') not between 1 and 12 or jsonb_typeof(p_config->'weekdays') is distinct from 'array' or jsonb_array_length(p_config->'weekdays') not between 1 and 7) then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 if p_config->>'mode'='interval' and (coalesce((p_config->>'interval_hours')::integer,0) not between 1 and 168 or coalesce((p_config->>'anchor')::numeric,0)<=0) then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 insert into public.edht_reminder_plans(patient_user_id,record_id,config) values(v_user,p_record_id,p_config)
 on conflict(patient_user_id,record_id) do update set config=excluded.config,active=true,version=edht_reminder_plans.version+1,updated_at=now() returning * into p;
 update public.edht_medication_doses set status='CANCELLED' where plan_id=p.id and patient_user_id=v_user and status='PENDING';
 update public.edht_notifications n set status='CANCELLED' where n.user_id=v_user and n.source='medication_dose' and n.related_entity in(select id::text from public.edht_medication_doses where plan_id=p.id and status='CANCELLED');
 perform private.edht_runtime_event(v_user,'REMINDER_CONFIGURED',p.id::text);
 return jsonb_build_object('id',p.id,'version',p.version,'ok',true);
end $$;
create function public.edht_reminder_configure(p_record_id uuid,p_config jsonb,p_confirmed boolean) returns jsonb language sql security invoker set search_path='' as $$select private.edht_reminder_configure(p_record_id,p_config,p_confirmed)$$;

create function private.edht_reminder_materialize(p_plan_id uuid,p_version integer,p_slots jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();p public.edht_reminder_plans;r public.edht_clinical_record_versions;s jsonb;d public.edht_medication_doses;at timestamptz;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into p from public.edht_reminder_plans where id=p_plan_id and patient_user_id=v_user for update;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p.version<>p_version then raise exception 'EDHT_VERSION_CONFLICT' using errcode='PT409';end if;
 if not p.active then return '{"ok":true}'::jsonb;end if;
 select * into r from public.edht_clinical_record_versions where record_id=p.record_id and patient_user_id=v_user order by version desc limit 1;
 if not found or r.kind<>'medication' or r.body->>'status'='stopped' then
  update public.edht_reminder_plans set active=false where id=p.id;
  update public.edht_medication_doses set status='CANCELLED' where plan_id=p.id and status='PENDING';
  update public.edht_notifications set status='CANCELLED' where user_id=v_user and source='medication_dose' and related_entity in(select id::text from public.edht_medication_doses where plan_id=p.id);
  return '{"ok":true}'::jsonb;
 end if;
 if jsonb_typeof(p_slots) is distinct from 'array' or jsonb_array_length(p_slots)>800 then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
 for s in select value from jsonb_array_elements(p_slots) loop
  at:=to_timestamp((s->>'at')::numeric/1000);
  if at<p.updated_at-interval '1 second' or at<now()-interval '31 days' or at>now()+interval '3 days' or length(s->>'slot')>80 then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
  if (at at time zone (p.config->>'timezone'))::date < (p.config->>'start')::date or (coalesce(p.config->>'end','')<>'' and (at at time zone (p.config->>'timezone'))::date > (p.config->>'end')::date) then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
  if p.config->>'mode'='daily' and (not ((p.config->'times') ? to_char(at at time zone (p.config->>'timezone'),'HH24:MI')) or not ((p.config->'weekdays') @> jsonb_build_array(extract(dow from at at time zone (p.config->>'timezone'))::integer)) or s->>'slot'<>to_char(at at time zone (p.config->>'timezone'),'YYYY-MM-DD"T"HH24:MI')) then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
  if p.config->>'mode'='interval' and (mod((s->>'at')::numeric-(p.config->>'anchor')::numeric,(p.config->>'interval_hours')::numeric*3600000)<>0 or (s->>'at')::numeric<(p.config->>'anchor')::numeric or s->>'slot'<>'utc:'||(s->>'at')) then raise exception 'EDHT_SCHEDULE_INVALID' using errcode='22023';end if;
  insert into public.edht_medication_doses(patient_user_id,plan_id,plan_version,record_id,slot,scheduled_at,snapshot)
  values(v_user,p.id,p.version,p.record_id,s->>'slot',at,r.body||jsonb_build_object('source',r.source,'record_version',r.version,'timezone',p.config->>'timezone'))
  on conflict(plan_id,slot) do update set status='PENDING',plan_version=excluded.plan_version,scheduled_at=excluded.scheduled_at,snapshot=excluded.snapshot,acted_at=null,snoozed_until=null where edht_medication_doses.status='CANCELLED';
 end loop;
 update public.edht_medication_doses set status='MISSED' where patient_user_id=v_user and plan_id=p.id and status='PENDING' and scheduled_at<now()-interval '1 day';
 for d in select * from public.edht_medication_doses where plan_id=p.id and patient_user_id=v_user and status='PENDING' loop
  insert into public.edht_notifications(user_id,type,title,scheduled_at,expires_at,source,related_entity,action_url,dedupe_key)
  select v_user,'Medication','doseReminder',coalesce(d.snoozed_until,d.scheduled_at),d.scheduled_at+interval '1 day','medication_dose',d.id::text,'#/medication-detail?id='||d.record_id,'dose:'||d.id||':'||d.plan_version
  where not exists(select 1 from public.edht_notification_preferences where user_id=v_user and type='Medication' and not enabled)
  on conflict(user_id,dedupe_key) do nothing;
 end loop;
 return '{"ok":true}'::jsonb;
end $$;
create function public.edht_reminder_materialize(p_plan_id uuid,p_version integer,p_slots jsonb) returns jsonb language sql security invoker set search_path='' as $$select private.edht_reminder_materialize(p_plan_id,p_version,p_slots)$$;

create function private.edht_reminder_pause(p_id uuid) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 update public.edht_reminder_plans set active=false,updated_at=now() where id=p_id and patient_user_id=v_user;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 update public.edht_medication_doses set status='CANCELLED' where plan_id=p_id and patient_user_id=v_user and status='PENDING';
 update public.edht_notifications set status='CANCELLED' where user_id=v_user and source='medication_dose' and related_entity in(select id::text from public.edht_medication_doses where plan_id=p_id and status='CANCELLED');
 perform private.edht_runtime_event(v_user,'REMINDER_PAUSED',p_id::text);return '{"ok":true}'::jsonb;
end $$;
create function public.edht_reminder_pause(p_id uuid) returns jsonb language sql security invoker set search_path='' as $$select private.edht_reminder_pause(p_id)$$;

create function private.edht_dose_action(p_id uuid,p_action text,p_minutes integer default 10) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=auth.uid();d public.edht_medication_doses; v_status text;
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into d from public.edht_medication_doses where id=p_id and patient_user_id=v_user for update;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if d.status<>'PENDING' then raise exception 'EDHT_DOSE_COMPLETED' using errcode='PT409';end if;
 if d.scheduled_at>now() or d.scheduled_at+interval '1 day'<=now() then raise exception 'EDHT_DOSE_NOT_DUE' using errcode='22023';end if;
 if p_action='snooze' then
  if p_minutes not in(5,10,30,60) or now()+make_interval(mins=>p_minutes)>=d.scheduled_at+interval '1 day' then raise exception 'EDHT_SNOOZE_INVALID' using errcode='22023';end if;
  update public.edht_medication_doses set snoozed_until=now()+make_interval(mins=>p_minutes) where id=p_id;
  update public.edht_notifications set status='SNOOZED',scheduled_at=now()+make_interval(mins=>p_minutes) where user_id=v_user and source='medication_dose' and related_entity=p_id::text and status in('SCHEDULED','SNOOZED','DELIVERED');
 elsif p_action in('taken','skip') then
  v_status:=case when p_action='skip' then 'SKIPPED' when now()>d.scheduled_at+interval '30 minutes' then 'TAKEN_LATE' else 'TAKEN' end;
  update public.edht_medication_doses set status=v_status,acted_at=now() where id=p_id;
  update public.edht_notifications set status='READ',read_at=coalesce(read_at,now()) where user_id=v_user and source='medication_dose' and related_entity=p_id::text and status in('SCHEDULED','SNOOZED','DELIVERED');
 else raise exception 'EDHT_DOSE_ACTION_INVALID' using errcode='22023';end if;
 perform private.edht_runtime_event(v_user,'DOSE_ACTION',p_id::text);return '{"ok":true}'::jsonb;
end $$;
create function public.edht_dose_action(p_id uuid,p_action text,p_minutes integer default 10) returns jsonb language sql security invoker set search_path='' as $$select private.edht_dose_action(p_id,p_action,p_minutes)$$;
revoke all on function private.edht_reminder_configure(uuid,jsonb,boolean),public.edht_reminder_configure(uuid,jsonb,boolean),private.edht_reminder_materialize(uuid,integer,jsonb),public.edht_reminder_materialize(uuid,integer,jsonb),private.edht_reminder_pause(uuid),public.edht_reminder_pause(uuid),private.edht_dose_action(uuid,text,integer),public.edht_dose_action(uuid,text,integer) from public,anon;
grant execute on function private.edht_reminder_configure(uuid,jsonb,boolean),public.edht_reminder_configure(uuid,jsonb,boolean),private.edht_reminder_materialize(uuid,integer,jsonb),public.edht_reminder_materialize(uuid,integer,jsonb),private.edht_reminder_pause(uuid),public.edht_reminder_pause(uuid),private.edht_dose_action(uuid,text,integer),public.edht_dose_action(uuid,text,integer) to authenticated;

create function public.edht_reminder_counts(p_start timestamptz,p_end timestamptz) returns table(status text,n bigint)
language sql stable security invoker set search_path='' as $$
 select d.status,count(*) from public.edht_medication_doses d where d.patient_user_id=(select auth.uid()) and d.scheduled_at>=p_start and d.scheduled_at<p_end and d.status<>'CANCELLED' group by d.status
$$;
revoke all on function public.edht_reminder_counts(timestamptz,timestamptz) from public,anon;
grant execute on function public.edht_reminder_counts(timestamptz,timestamptz) to authenticated;


alter table public.edht_clinical_record_versions add column archived boolean not null default false;
create or replace view public.edht_current_clinical_records with(security_invoker=true) as
 select distinct on(record_id) record_id,version,patient_user_id,actor_user_id,kind,body,source,created_at,archived from public.edht_clinical_record_versions order by record_id,version desc;
create function private.edht_change_record(p_id uuid,p_version integer,p_body jsonb,p_archive boolean default false)
returns jsonb language plpgsql security definer set search_path='' as $$
declare r public.edht_clinical_record_versions;v_user uuid:=auth.uid();
begin
 if v_user is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 perform pg_advisory_xact_lock(hashtextextended(p_id::text,0));
 select * into r from public.edht_clinical_record_versions where record_id=p_id and patient_user_id=v_user order by version desc limit 1;
 if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
 if p_version is null or r.version<>p_version then raise exception 'EDHT_VERSION_CONFLICT' using errcode='PT409';end if;
 if r.archived then raise exception 'EDHT_RECORD_ARCHIVED' using errcode='PT409';end if;
 if not p_archive and (jsonb_typeof(p_body) is distinct from 'object' or pg_column_size(p_body)>8192) then raise exception 'EDHT_RECORD_INVALID' using errcode='22023';end if;
 insert into public.edht_clinical_record_versions(record_id,version,patient_user_id,actor_user_id,kind,body,source,archived)
 values(r.record_id,r.version+1,v_user,v_user,r.kind,case when p_archive then r.body else p_body end,r.source,p_archive);
 update public.edht_reminder_plans set active=false,updated_at=now() where patient_user_id=v_user and record_id=p_id;
 update public.edht_medication_doses set status='CANCELLED' where patient_user_id=v_user and record_id=p_id and status='PENDING';
 update public.edht_notifications set status='CANCELLED' where user_id=v_user and source='medication_dose' and related_entity in(select id::text from public.edht_medication_doses where record_id=p_id and patient_user_id=v_user and status='CANCELLED');
 return jsonb_build_object('ok',true,'id',r.record_id,'version',r.version+1);
end $$;
create function public.edht_change_record(p_id uuid,p_version integer,p_body jsonb,p_archive boolean default false) returns jsonb language sql security invoker set search_path='' as $$select private.edht_change_record(p_id,p_version,p_body,p_archive)$$;
revoke all on function private.edht_change_record(uuid,integer,jsonb,boolean),public.edht_change_record(uuid,integer,jsonb,boolean) from public,anon;
grant execute on function private.edht_change_record(uuid,integer,jsonb,boolean),public.edht_change_record(uuid,integer,jsonb,boolean) to authenticated;

notify pgrst,'reload schema';
