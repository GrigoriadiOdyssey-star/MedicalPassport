-- Preserve existing patient-entered Care contracts in isolated Preview.
create table public.edht_appointments (
 id uuid primary key default gen_random_uuid(),patient_user_id uuid not null references auth.users(id),
 body jsonb not null check(jsonb_typeof(body)='object' and pg_column_size(body)<=4096),
 version integer not null check(version>0),archived boolean not null default false,
 created_at timestamptz not null default now()
);
create index edht_appointments_owner on public.edht_appointments(patient_user_id,created_at desc);
create table public.edht_appointment_versions (
 appointment_id uuid not null references public.edht_appointments(id),version integer not null,
 patient_user_id uuid not null references auth.users(id),body jsonb not null,actor_user_id uuid not null references auth.users(id),
 created_at timestamptz not null default now(),primary key(appointment_id,version),check(actor_user_id=patient_user_id)
);
create index edht_appointment_versions_owner on public.edht_appointment_versions(patient_user_id);
create table public.edht_guideline_context (
 patient_user_id uuid primary key references auth.users(id),context jsonb not null,
 version integer not null check(version>0),updated_at timestamptz not null default now()
);
create table public.edht_guideline_context_versions (
 patient_user_id uuid not null references auth.users(id),version integer not null,context jsonb not null,
 actor_user_id uuid not null references auth.users(id),created_at timestamptz not null default now(),
 primary key(patient_user_id,version),check(actor_user_id=patient_user_id)
);
alter table public.edht_appointments enable row level security;
alter table public.edht_appointment_versions enable row level security;
alter table public.edht_guideline_context enable row level security;
alter table public.edht_guideline_context_versions enable row level security;
revoke all on public.edht_appointments,public.edht_appointment_versions,public.edht_guideline_context,public.edht_guideline_context_versions from public,anon,authenticated;
grant select on public.edht_appointments,public.edht_appointment_versions,public.edht_guideline_context,public.edht_guideline_context_versions to authenticated;
create policy edht_appointments_owner on public.edht_appointments for select to authenticated using(patient_user_id=(select auth.uid()));
create policy edht_appointment_versions_owner on public.edht_appointment_versions for select to authenticated using(patient_user_id=(select auth.uid()));
create policy edht_guideline_context_owner on public.edht_guideline_context for select to authenticated using(patient_user_id=(select auth.uid()));
create policy edht_guideline_context_versions_owner on public.edht_guideline_context_versions for select to authenticated using(patient_user_id=(select auth.uid()));

create function private.edht_save_appointment(p_id uuid,p_version integer,p_body jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();a public.edht_appointments;v_id uuid;v_version integer;v_at timestamptz;v_suppressed boolean;v_audit bigint;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_body is null or jsonb_typeof(p_body)<>'object' or pg_column_size(p_body)>4096
 or coalesce(length(btrim(p_body->>'provider')),0) not between 1 and 200
 or coalesce(length(p_body->>'specialty'),0)>200 or coalesce(length(p_body->>'location'),0)>500
 or coalesce(p_body->>'status','') not in('planned','attended','cancelled')
 or p_body->>'source' is distinct from 'PATIENT_ENTERED_NOT_PROVIDER_CONFIRMED' then raise exception 'EDHT_APPOINTMENT_INVALID' using errcode='22023';end if;
 v_at:=(p_body->>'at')::timestamptz;
 if v_at is null then raise exception 'EDHT_APPOINTMENT_INVALID' using errcode='22023';end if;
 if p_id is not null then
  select * into a from public.edht_appointments where id=p_id and patient_user_id=u for update;
  if not found then raise exception 'EDHT_NOT_FOUND' using errcode='PT404';end if;
  if p_version is distinct from a.version then raise exception 'EDHT_VERSION_CONFLICT' using errcode='PT409';end if;
  v_id:=a.id;v_version:=a.version+1;
  update public.edht_appointments set body=p_body,version=v_version,archived=p_body->>'status'='cancelled' where id=v_id;
 else
  v_id:=gen_random_uuid();v_version:=1;
  insert into public.edht_appointments(id,patient_user_id,body,version) values(v_id,u,p_body,v_version);
 end if;
 insert into public.edht_appointment_versions(appointment_id,version,patient_user_id,body,actor_user_id) values(v_id,v_version,u,p_body,u);
 update public.edht_notifications set status='CANCELLED' where user_id=u and source='appointment' and related_entity=v_id::text and status in('SCHEDULED','SNOOZED','DELIVERED');
 perform private.edht_runtime_event(u,'APPOINTMENT_UPDATED',v_id::text);
 if p_body->>'status'='planned' and v_at>now() then
  select exists(select 1 from public.edht_notification_preferences where user_id=u and type='Appointment' and not enabled) into v_suppressed;
  select seq into v_audit from public.edht_runtime_audit where user_id=u and action='APPOINTMENT_UPDATED' and reference=v_id::text order by seq desc limit 1;
  insert into public.edht_notifications(user_id,type,title,message,source,related_entity,action_url,scheduled_at,expires_at,dedupe_key,status,suppressed_by_settings,audit_seq)
  values(u,'Appointment','appointmentReminder',p_body->>'provider','appointment',v_id::text,'#/care?appointment='||v_id,greatest(now(),v_at-interval '1 hour'),v_at+interval '1 day','appointment:'||v_id||':'||v_version,case when v_suppressed then 'CANCELLED' else 'SCHEDULED' end,v_suppressed,v_audit);
 end if;
 return jsonb_build_object('id',v_id,'version',v_version);
end $$;
create function public.edht_save_appointment(p_id uuid,p_version integer,p_body jsonb)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_save_appointment(p_id,p_version,p_body)$$;

create function private.edht_save_guideline_context(p_version integer,p_context jsonb)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();v integer;k text;c jsonb;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_context is null or jsonb_typeof(p_context)<>'object' or pg_column_size(p_context)>4096 or coalesce(length(btrim(p_context->>'reason')),0) not between 1 and 500 then raise exception 'EDHT_CONTEXT_INVALID' using errcode='22023';end if;
 foreach k in array array['patient_home','patient_current','treating_doctor','care_delivery'] loop
  c:=p_context->k;
  if jsonb_typeof(c) is distinct from 'object' or coalesce(jsonb_typeof(c->'country'),'null') not in ('string','null') or c->>'origin' is distinct from 'PATIENT_ENTERED' or c->>'verification' is distinct from 'UNVERIFIED' or coalesce(length(c->>'country'),0)>100 then raise exception 'EDHT_CONTEXT_INVALID' using errcode='22023';end if;
 end loop;
 perform pg_advisory_xact_lock(hashtextextended(u::text,97));
 select version into v from public.edht_guideline_context where patient_user_id=u;
 if p_version is distinct from coalesce(v,0) then raise exception 'EDHT_VERSION_CONFLICT' using errcode='PT409';end if;
 v:=coalesce(v,0)+1;
 insert into public.edht_guideline_context values(u,p_context,v,now()) on conflict(patient_user_id) do update set context=excluded.context,version=excluded.version,updated_at=excluded.updated_at;
 insert into public.edht_guideline_context_versions(patient_user_id,version,context,actor_user_id) values(u,v,p_context,u);
 perform private.edht_runtime_event(u,'GUIDELINE_CONTEXT_UPDATED','');
 return jsonb_build_object('version',v);
end $$;
create function public.edht_save_guideline_context(p_version integer,p_context jsonb)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_save_guideline_context(p_version,p_context)$$;


create function private.edht_care_read(p_kind text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();result jsonb;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_kind='appointments' then
  perform private.edht_runtime_event(u,'APPOINTMENTS_READ','');
  select coalesce(jsonb_agg(to_jsonb(a)),'[]'::jsonb) into result from
   (select id,body,version,archived,created_at from public.edht_appointments where patient_user_id=u order by created_at desc,id limit 100) a;
 elsif p_kind='context' then
  perform private.edht_runtime_event(u,'GUIDELINE_CONTEXT_READ','');
  select jsonb_build_object('context',context,'version',version) into result from public.edht_guideline_context where patient_user_id=u;
  result:=coalesce(result,'{"context":{},"version":0}'::jsonb);
 else raise exception 'EDHT_CARE_KIND_INVALID' using errcode='22023';
 end if;
 return result;
end $$;
create function public.edht_care_read(p_kind text)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_care_read(p_kind)$$;
revoke all on function private.edht_save_appointment(uuid,integer,jsonb),public.edht_save_appointment(uuid,integer,jsonb),
 private.edht_save_guideline_context(integer,jsonb),public.edht_save_guideline_context(integer,jsonb),
 private.edht_care_read(text),public.edht_care_read(text) from public,anon;
grant execute on function private.edht_save_appointment(uuid,integer,jsonb),public.edht_save_appointment(uuid,integer,jsonb),
 private.edht_save_guideline_context(integer,jsonb),public.edht_save_guideline_context(integer,jsonb),
 private.edht_care_read(text),public.edht_care_read(text) to authenticated;
