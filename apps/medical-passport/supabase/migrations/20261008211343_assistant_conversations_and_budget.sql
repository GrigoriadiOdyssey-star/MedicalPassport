-- Additive AI conversation persistence and durable server-authorized spending ledger.
-- No paid configuration is enabled by this migration. Private approval must be
-- populated only after explicit model, pricing-version and budget authorization.
create table public.edht_assistant_conversations (
 conversation_id uuid primary key default gen_random_uuid(),
 owner_user_id uuid not null references auth.users(id) on delete restrict,
 patient_user_id uuid not null references auth.users(id) on delete restrict,
 version integer not null default 0 check(version>=0),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 check(owner_user_id=patient_user_id)
);
create index edht_assistant_conversations_owner on public.edht_assistant_conversations(owner_user_id,updated_at desc,conversation_id);
create table public.edht_assistant_messages (
 message_id uuid primary key default gen_random_uuid(),
 conversation_id uuid not null references public.edht_assistant_conversations(conversation_id) on delete cascade,
 sequence integer not null check(sequence>0),
 role text not null check(role in('user','assistant')),
 body jsonb not null check(jsonb_typeof(body)='object' and octet_length(body::text)<=100000),
 created_at timestamptz not null default now(),
 unique(conversation_id,sequence)
);
alter table public.edht_assistant_conversations enable row level security;
alter table public.edht_assistant_messages enable row level security;
revoke all on public.edht_assistant_conversations,public.edht_assistant_messages from public,anon,authenticated;
grant select on public.edht_assistant_conversations,public.edht_assistant_messages to authenticated;
create policy edht_assistant_conversation_owner on public.edht_assistant_conversations for select to authenticated
 using(owner_user_id=(select auth.uid()) and patient_user_id=(select auth.uid()));
create policy edht_assistant_message_owner on public.edht_assistant_messages for select to authenticated
 using(exists(select 1 from public.edht_assistant_conversations c where c.conversation_id=edht_assistant_messages.conversation_id and c.owner_user_id=(select auth.uid()) and c.patient_user_id=(select auth.uid())));

-- SHA-256 capability digest never leaves the unexposed private schema. A browser
-- JWT by itself cannot create billable reservations or forge provider output.
create table private.edht_assistant_approvals (
 approval_id uuid primary key default gen_random_uuid(),
 enabled boolean not null default false,
 capability_digest bytea not null check(octet_length(capability_digest)=32),
 provider text not null check(provider='openai'),
 model text not null check(model ~ '^[A-Za-z0-9][A-Za-z0-9._:-]{0,99}$'),
 pricing_version text not null check(length(pricing_version) between 1 and 100),
 input_rate_microusd_per_million bigint not null check(input_rate_microusd_per_million>=0 and input_rate_microusd_per_million<=1000000000000),
 output_rate_microusd_per_million bigint not null check(output_rate_microusd_per_million>=0 and output_rate_microusd_per_million<=1000000000000),
 total_budget_microusd bigint not null check(total_budget_microusd>=0),
 daily_budget_microusd bigint not null check(daily_budget_microusd>=0),
 user_daily_budget_microusd bigint not null check(user_daily_budget_microusd>=0),
 requests_per_minute integer not null default 6 check(requests_per_minute between 1 and 60),
 max_input_tokens integer not null check(max_input_tokens between 1 and 65536),
 max_output_tokens integer not null check(max_output_tokens between 1 and 8192),
 consecutive_failures integer not null default 0 check(consecutive_failures>=0),
 circuit_open_until timestamptz,
 approved_at timestamptz not null default now()
);
create unique index edht_assistant_one_active_approval on private.edht_assistant_approvals((true)) where enabled;
create table private.edht_assistant_requests (
 request_id uuid primary key,
 owner_user_id uuid not null references auth.users(id) on delete restrict,
 conversation_id uuid references public.edht_assistant_conversations(conversation_id) on delete set null,
 approval_id uuid not null references private.edht_assistant_approvals(approval_id) on delete restrict,
 payload_digest bytea not null,
 status text not null check(status in('pending','completed','unknown','failed_before_send')),
 model text not null,
 pricing_version text not null,
 input_rate_microusd_per_million bigint not null,
 output_rate_microusd_per_million bigint not null,
 max_input_tokens integer not null,
 max_output_tokens integer not null,
 reserved_cost_microusd bigint not null check(reserved_cost_microusd>=0),
 actual_cost_microusd bigint check(actual_cost_microusd>=0),
 cost_estimated boolean not null default false,
 input_tokens bigint check(input_tokens>=0),
 output_tokens bigint check(output_tokens>=0),
 failure_code text,
 user_message_id uuid references public.edht_assistant_messages(message_id) on delete set null,
 assistant_message_id uuid references public.edht_assistant_messages(message_id) on delete set null,
 created_at timestamptz not null default now(),
 finished_at timestamptz
);
create index edht_assistant_requests_budget on private.edht_assistant_requests(approval_id,created_at,status);
create index edht_assistant_requests_owner on private.edht_assistant_requests(owner_user_id,created_at desc,status);
alter table private.edht_assistant_approvals enable row level security;
alter table private.edht_assistant_requests enable row level security;
revoke all on private.edht_assistant_approvals,private.edht_assistant_requests from public,anon,authenticated;

create function private.edht_assistant_messages(p_conversation_id uuid)
returns jsonb language sql security definer set search_path='' as $$
 select coalesce(jsonb_agg(m.body||jsonb_build_object('message_id',m.message_id,'role',m.role,'sequence',m.sequence,'generated_at',m.created_at) order by m.sequence),'[]'::jsonb)
 from (select * from public.edht_assistant_messages where conversation_id=p_conversation_id order by sequence desc limit 40) m
$$;
revoke all on function private.edht_assistant_messages(uuid) from public,anon,authenticated;

create function private.edht_assistant_create()
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); c public.edht_assistant_conversations;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 perform pg_advisory_xact_lock(hashtextextended('assistant-create:'||u::text,0));
 if (select count(*) from public.edht_assistant_conversations where owner_user_id=u)>=100 then return '{"error":"AI_CONVERSATION_LIMIT"}'::jsonb;end if;
 insert into public.edht_assistant_conversations(owner_user_id,patient_user_id) values(u,u) returning * into c;
 perform private.edht_runtime_event(u,'ASSISTANT_CONVERSATION_CREATED',c.conversation_id::text);
 return jsonb_build_object('conversation_id',c.conversation_id,'version',c.version);
end $$;
create function public.edht_assistant_create() returns jsonb language sql security invoker set search_path='' as $$select private.edht_assistant_create()$$;

create function private.edht_assistant_history(p_conversation_id uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();c public.edht_assistant_conversations;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 select * into c from public.edht_assistant_conversations where conversation_id=p_conversation_id and owner_user_id=u and patient_user_id=u;
 if not found then return '{"error":"AI_CONVERSATION_NOT_FOUND"}'::jsonb;end if;
 return jsonb_build_object('conversation_id',c.conversation_id,'version',c.version,'has_older',c.version>40,'messages',private.edht_assistant_messages(c.conversation_id));
end $$;
create function public.edht_assistant_history(p_conversation_id uuid) returns jsonb language sql security invoker set search_path='' as $$select private.edht_assistant_history(p_conversation_id)$$;

create function private.edht_assistant_delete(p_conversation_id uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();c public.edht_assistant_conversations;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 -- Match reserve/finish lock order. Every financial transition serializes on the
 -- approval row, then conversation; deletion cannot race completion into a leak.
 perform 1 from private.edht_assistant_approvals order by approval_id for update;
 select * into c from public.edht_assistant_conversations where conversation_id=p_conversation_id and owner_user_id=u and patient_user_id=u for update;
 if not found then return '{"error":"AI_CONVERSATION_NOT_FOUND"}'::jsonb;end if;
 update private.edht_assistant_requests set status='unknown',failure_code='AI_CONVERSATION_DELETED',finished_at=now() where conversation_id=c.conversation_id and status='pending';
 delete from public.edht_assistant_conversations where conversation_id=c.conversation_id;
 perform private.edht_runtime_event(u,'ASSISTANT_CONVERSATION_DELETED',c.conversation_id::text);
 -- Plaintext messages are deleted by cascade. The private cost ledger retains
 -- only technical identifiers, counts and digests; uncertain spend is not freed.
 return '{"ok":true}'::jsonb;
end $$;
create function public.edht_assistant_delete(p_conversation_id uuid) returns jsonb language sql security invoker set search_path='' as $$select private.edht_assistant_delete(p_conversation_id)$$;

create function private.edht_assistant_reserve(p_server_capability text,p_conversation_id uuid,p_request_id uuid,p_message text,p_language text,p_expected_version integer,p_max_input_tokens integer,p_max_output_tokens integer)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();a private.edht_assistant_approvals;c public.edht_assistant_conversations;r private.edht_assistant_requests;
 d bytea;cost bigint;total_spend numeric;day_spend numeric;user_spend numeric;message_id uuid;messages jsonb;t timestamptz:=clock_timestamp();
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_server_capability is null or p_server_capability !~ '^[A-Za-z0-9_-]{43,128}$' then return '{"error":"AI_NOT_CONFIGURED"}'::jsonb;end if;
 select * into a from private.edht_assistant_approvals where enabled and capability_digest=sha256(convert_to(p_server_capability,'UTF8')) for update;
 if not found then return '{"error":"AI_NOT_CONFIGURED"}'::jsonb;end if;
 if a.total_budget_microusd=0 or a.daily_budget_microusd=0 or a.user_daily_budget_microusd=0 then return '{"error":"AI_BUDGET_EXCEEDED"}'::jsonb;end if;
 if a.input_rate_microusd_per_million<=0 or a.output_rate_microusd_per_million<=0 then return '{"error":"AI_NOT_CONFIGURED"}'::jsonb;end if;
 if p_request_id is null or p_message is null or length(btrim(p_message))=0 or length(p_message)>6000 or p_language is null or p_language not in('ru','en') or p_expected_version<0 or p_expected_version>1000000 or p_max_input_tokens is null or p_max_input_tokens<1 or p_max_input_tokens>a.max_input_tokens or p_max_output_tokens is null or p_max_output_tokens<1 or p_max_output_tokens>a.max_output_tokens then return '{"error":"AI_INPUT_LIMIT"}'::jsonb;end if;
 select * into c from public.edht_assistant_conversations where conversation_id=p_conversation_id and owner_user_id=u and patient_user_id=u for update;
 if not found then return '{"error":"AI_CONVERSATION_NOT_FOUND"}'::jsonb;end if;
 d:=sha256(convert_to(jsonb_build_array(p_conversation_id,p_message,p_language)::text,'UTF8'));
 select * into r from private.edht_assistant_requests where request_id=p_request_id;
 if found then
  if r.owner_user_id<>u or r.conversation_id is distinct from c.conversation_id or r.payload_digest<>d then return '{"error":"AI_REQUEST_CONFLICT"}'::jsonb;end if;
  if r.status='completed' then return jsonb_build_object('status','completed','request_id',r.request_id,'conversation_id',c.conversation_id,'version',c.version,'response',(select m.body from public.edht_assistant_messages m where m.message_id=r.assistant_message_id));end if;
  if r.status='pending' then return '{"error":"AI_BUSY"}'::jsonb;end if;
  return '{"error":"AI_RECONCILIATION_REQUIRED"}'::jsonb;
 end if;
 if p_expected_version is not null and p_expected_version<>c.version then return '{"error":"AI_VERSION_CONFLICT"}'::jsonb;end if;
 if c.version>=200 then return '{"error":"AI_HISTORY_LIMIT"}'::jsonb;end if;
 if a.circuit_open_until>t then return '{"error":"AI_CIRCUIT_OPEN"}'::jsonb;end if;
 update private.edht_assistant_requests set status='unknown',failure_code='AI_PROVIDER_TIMEOUT',finished_at=t where owner_user_id=u and status='pending' and created_at<t-interval '2 minutes';
 if exists(select 1 from private.edht_assistant_requests where owner_user_id=u and status='unknown') then return '{"error":"AI_RECONCILIATION_REQUIRED"}'::jsonb;end if;
 if exists(select 1 from private.edht_assistant_requests where owner_user_id=u and status='pending') then return '{"error":"AI_BUSY"}'::jsonb;end if;
 if (select count(*) from private.edht_assistant_requests where owner_user_id=u and created_at>t-interval '1 minute')>=a.requests_per_minute then return '{"error":"AI_RATE_LIMITED"}'::jsonb;end if;
 cost:=ceil((p_max_input_tokens::numeric*a.input_rate_microusd_per_million+p_max_output_tokens::numeric*a.output_rate_microusd_per_million)/1000000)::bigint;
 select coalesce(sum(case when status='completed' then actual_cost_microusd when status in('pending','unknown') then reserved_cost_microusd else 0 end),0),
 coalesce(sum(case when created_at>=(date_trunc('day',t at time zone 'UTC') at time zone 'UTC') then case when status='completed' then actual_cost_microusd when status in('pending','unknown') then reserved_cost_microusd else 0 end else 0 end),0),
 coalesce(sum(case when owner_user_id=u and created_at>=(date_trunc('day',t at time zone 'UTC') at time zone 'UTC') then case when status='completed' then actual_cost_microusd when status in('pending','unknown') then reserved_cost_microusd else 0 end else 0 end),0)
 into total_spend,day_spend,user_spend from private.edht_assistant_requests where approval_id=a.approval_id;
 if cost> a.total_budget_microusd-total_spend or cost>a.daily_budget_microusd-day_spend or cost>a.user_daily_budget_microusd-user_spend then return '{"error":"AI_BUDGET_EXCEEDED"}'::jsonb;end if;
 messages:=private.edht_assistant_messages(c.conversation_id);
 insert into public.edht_assistant_messages(conversation_id,sequence,role,body) values(c.conversation_id,c.version+1,'user',jsonb_build_object('text',p_message,'language',p_language)) returning edht_assistant_messages.message_id into message_id;
 update public.edht_assistant_conversations set version=version+1,updated_at=t where conversation_id=c.conversation_id returning * into c;
 insert into private.edht_assistant_requests(request_id,owner_user_id,conversation_id,approval_id,payload_digest,status,model,pricing_version,input_rate_microusd_per_million,output_rate_microusd_per_million,max_input_tokens,max_output_tokens,reserved_cost_microusd,user_message_id)
 values(p_request_id,u,c.conversation_id,a.approval_id,d,'pending',a.model,a.pricing_version,a.input_rate_microusd_per_million,a.output_rate_microusd_per_million,p_max_input_tokens,p_max_output_tokens,cost,message_id);
 perform private.edht_runtime_event(u,'ASSISTANT_REQUEST_RESERVED',p_request_id::text);
 return jsonb_build_object('status','reserved','request_id',p_request_id,'conversation_id',c.conversation_id,'version',c.version,'model',a.model,'pricing_version',a.pricing_version,'reserved_cost_microusd',cost,'messages',messages);
end $$;
create function public.edht_assistant_reserve(p_server_capability text,p_conversation_id uuid,p_request_id uuid,p_message text,p_language text,p_expected_version integer,p_max_input_tokens integer,p_max_output_tokens integer)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_assistant_reserve(p_server_capability,p_conversation_id,p_request_id,p_message,p_language,p_expected_version,p_max_input_tokens,p_max_output_tokens)$$;

create function private.edht_assistant_finish(p_server_capability text,p_request_id uuid,p_status text,p_response jsonb,p_input_tokens bigint,p_output_tokens bigint,p_failure_code text default null,p_cost_estimated boolean default false)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid();a private.edht_assistant_approvals;r private.edht_assistant_requests;c public.edht_assistant_conversations;
 output jsonb;message_id uuid;actual_cost bigint;t timestamptz:=clock_timestamp();ref jsonb;
begin
 if u is null then raise exception 'EDHT_AUTH_REQUIRED' using errcode='42501';end if;
 if p_server_capability is null or p_server_capability !~ '^[A-Za-z0-9_-]{43,128}$' then return '{"error":"AI_NOT_CONFIGURED"}'::jsonb;end if;
 select * into a from private.edht_assistant_approvals where capability_digest=sha256(convert_to(p_server_capability,'UTF8')) and approval_id=(select approval_id from private.edht_assistant_requests where request_id=p_request_id and owner_user_id=u) for update;
 if not found then return '{"error":"AI_NOT_CONFIGURED"}'::jsonb;end if;
 select * into r from private.edht_assistant_requests where request_id=p_request_id and owner_user_id=u for update;
 if not found then return '{"error":"AI_REQUEST_CONFLICT"}'::jsonb;end if;
 if p_cost_estimated is null or p_status is null or p_status not in('completed','unknown','failed_before_send') or (p_failure_code is not null and p_failure_code not in('AI_PROVIDER_TIMEOUT','AI_PROVIDER_RATE_LIMIT','AI_PROVIDER_REJECTED','AI_PROVIDER_UNAVAILABLE','AI_INVALID_RESPONSE')) then return '{"error":"AI_INVALID_FINISH_STATUS"}'::jsonb;end if;
 if r.status='completed' then return jsonb_build_object('status','completed','conversation_id',r.conversation_id,'response',(select m.body from public.edht_assistant_messages m where m.message_id=r.assistant_message_id));end if;
 if r.status='failed_before_send' then return jsonb_build_object('status',r.status,'conversation_id',r.conversation_id);end if;
 if p_status='failed_before_send' and r.status='unknown' then return '{"error":"AI_RECONCILIATION_REQUIRED"}'::jsonb;end if;
 if p_status='completed' and (p_input_tokens is null or p_output_tokens is null or p_input_tokens<0 or p_output_tokens<0 or p_input_tokens>100000000 or p_output_tokens>100000000) then p_status:='unknown';end if;
 if p_status='completed' then
  if r.conversation_id is null then return '{"error":"AI_CONVERSATION_NOT_FOUND"}'::jsonb;end if;
  select * into c from public.edht_assistant_conversations where conversation_id=r.conversation_id and owner_user_id=u and patient_user_id=u for update;
  if not found then return '{"error":"AI_CONVERSATION_NOT_FOUND"}'::jsonb;end if;
  if jsonb_typeof(p_response) is distinct from 'object' or jsonb_typeof(p_response->'text') is distinct from 'string' or length(p_response->>'text') not between 1 and 16000 or jsonb_typeof(p_response->'source_records') is distinct from 'array' or jsonb_array_length(p_response->'source_records')>100 or length(coalesce(p_response->>'rules_version','')) not between 1 and 100 or coalesce(p_response->>'safe_status','') not in('INFORMATION','CLINICIAN_REVIEW_REQUIRED','EMERGENCY_ESCALATION','SECURITY_BOUNDARY') then return '{"error":"AI_INVALID_RESPONSE"}'::jsonb;end if;
  for ref in select value from jsonb_array_elements(p_response->'source_records') loop
   if jsonb_typeof(ref) is distinct from 'object' or coalesce(ref->>'id','') !~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$' or coalesce(ref->>'version','') !~ '^[1-9][0-9]{0,8}$' then return '{"error":"AI_INVALID_RESPONSE"}'::jsonb;end if;
   if not exists(select 1 from public.edht_clinical_record_versions where patient_user_id=u and record_id=(ref->>'id')::uuid and version=(ref->>'version')::integer) then return '{"error":"AI_INVALID_RESPONSE"}'::jsonb;end if;
  end loop;
  actual_cost:=ceil((p_input_tokens::numeric*r.input_rate_microusd_per_million+p_output_tokens::numeric*r.output_rate_microusd_per_million)/1000000)::bigint;
  message_id:=gen_random_uuid();
  output:=jsonb_build_object('text',p_response->>'text','conversation_id',c.conversation_id,'message_id',message_id,'provider','openai','model',r.model,'mode','live','is_generative_ai',true,'persisted',true,'generated_at',t,'source_records',p_response->'source_records','safe_status',p_response->>'safe_status','rules_version',p_response->>'rules_version');
  insert into public.edht_assistant_messages(message_id,conversation_id,sequence,role,body) values(message_id,c.conversation_id,c.version+1,'assistant',output);
  update public.edht_assistant_conversations set version=version+1,updated_at=t where conversation_id=c.conversation_id returning * into c;
  update private.edht_assistant_requests set status='completed',actual_cost_microusd=actual_cost,cost_estimated=p_cost_estimated,input_tokens=p_input_tokens,output_tokens=p_output_tokens,assistant_message_id=message_id,finished_at=t where request_id=r.request_id;
  update private.edht_assistant_approvals set consecutive_failures=0,circuit_open_until=case when actual_cost>r.reserved_cost_microusd then t+interval '1 minute' else null end where approval_id=a.approval_id;
  perform private.edht_runtime_event(u,'ASSISTANT_REQUEST_COMPLETED',r.request_id::text);
  return jsonb_build_object('status','completed','conversation_id',c.conversation_id,'version',c.version,'response',output,'usage',jsonb_build_object('input_tokens',p_input_tokens,'output_tokens',p_output_tokens,'cost_microusd',actual_cost,'pricing_version',r.pricing_version,'is_estimate',p_cost_estimated));
 end if;
 update private.edht_assistant_requests set status=p_status,cost_estimated=p_status='unknown',failure_code=p_failure_code,finished_at=t where request_id=r.request_id;
 if p_status='unknown' and r.status<>'unknown' then
  update private.edht_assistant_approvals set consecutive_failures=consecutive_failures+1,circuit_open_until=case when consecutive_failures+1>=3 then t+interval '1 minute' else circuit_open_until end where approval_id=a.approval_id;
 end if;
 perform private.edht_runtime_event(u,case when p_status='unknown' then 'ASSISTANT_REQUEST_COST_UNKNOWN' else 'ASSISTANT_REQUEST_NOT_SENT' end,r.request_id::text);
 return jsonb_build_object('status',p_status,'conversation_id',r.conversation_id,'reserved_cost_microusd',case when p_status='unknown' then r.reserved_cost_microusd else 0 end,'is_estimate',p_status='unknown');
end $$;
create function public.edht_assistant_finish(p_server_capability text,p_request_id uuid,p_status text,p_response jsonb,p_input_tokens bigint,p_output_tokens bigint,p_failure_code text default null,p_cost_estimated boolean default false)
returns jsonb language sql security invoker set search_path='' as $$select private.edht_assistant_finish(p_server_capability,p_request_id,p_status,p_response,p_input_tokens,p_output_tokens,p_failure_code,p_cost_estimated)$$;

revoke all on function private.edht_assistant_create(),public.edht_assistant_create(),private.edht_assistant_history(uuid),public.edht_assistant_history(uuid),private.edht_assistant_delete(uuid),public.edht_assistant_delete(uuid),private.edht_assistant_reserve(text,uuid,uuid,text,text,integer,integer,integer),public.edht_assistant_reserve(text,uuid,uuid,text,text,integer,integer,integer),private.edht_assistant_finish(text,uuid,text,jsonb,bigint,bigint,text,boolean),public.edht_assistant_finish(text,uuid,text,jsonb,bigint,bigint,text,boolean) from public,anon,authenticated;
grant execute on function private.edht_assistant_create(),public.edht_assistant_create(),private.edht_assistant_history(uuid),public.edht_assistant_history(uuid),private.edht_assistant_delete(uuid),public.edht_assistant_delete(uuid),private.edht_assistant_reserve(text,uuid,uuid,text,text,integer,integer,integer),public.edht_assistant_reserve(text,uuid,uuid,text,text,integer,integer,integer),private.edht_assistant_finish(text,uuid,text,jsonb,bigint,bigint,text,boolean),public.edht_assistant_finish(text,uuid,text,jsonb,bigint,bigint,text,boolean) to authenticated;