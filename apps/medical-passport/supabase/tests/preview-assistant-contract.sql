\set ON_ERROR_STOP on
-- Disposable synthetic database only. Rollback removes fixture approvals and data.
begin;
insert into auth.users(id) values
 ('84000000-0000-4000-8000-000000000001'),
 ('84000000-0000-4000-8000-000000000002');
insert into public.edht_clinical_record_versions(record_id,version,patient_user_id,actor_user_id,kind,body,source) values('8b000000-0000-4000-8000-000000000001',1,'84000000-0000-4000-8000-000000000002','84000000-0000-4000-8000-000000000002','allergy','{"name":"Synthetic foreign allergen"}','patient_reported');
set local role authenticated;
select set_config('request.jwt.claim.sub','84000000-0000-4000-8000-000000000001',true);
do $test$
declare c jsonb;
begin
 c:=public.edht_assistant_create();
 perform set_config('test.assistant_a',c->>'conversation_id',true);
 if c->>'version'<>'0' or jsonb_array_length(public.edht_assistant_history((c->>'conversation_id')::uuid)->'messages')<>0 then raise exception 'NEW_HISTORY_NOT_EMPTY';end if;
 if public.edht_assistant_reserve(repeat('a',43),(c->>'conversation_id')::uuid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',0,100,50)->>'error'<>'AI_NOT_CONFIGURED' then raise exception 'UNAPPROVED_AI_ALLOWED';end if;
 begin insert into public.edht_assistant_messages(conversation_id,sequence,role,body) values((c->>'conversation_id')::uuid,1,'assistant','{"text":"forged"}');raise exception 'DIRECT_MESSAGE_FORGERY';exception when insufficient_privilege then null;end;
 begin update public.edht_assistant_conversations set owner_user_id='84000000-0000-4000-8000-000000000002';raise exception 'OWNER_REASSIGNMENT_ALLOWED';exception when insufficient_privilege then null;end;
 begin select count(*) from private.edht_assistant_approvals;raise exception 'APPROVAL_EXPOSED';exception when insufficient_privilege then null;end;
end $test$;
reset role;
insert into private.edht_assistant_approvals(enabled,capability_digest,provider,model,pricing_version,input_rate_microusd_per_million,output_rate_microusd_per_million,total_budget_microusd,daily_budget_microusd,user_daily_budget_microusd,max_input_tokens,max_output_tokens)
values(true,sha256(convert_to(repeat('a',43),'UTF8')),'openai','synthetic-contract-model','contract-v1',1000000,1000000,10000,10000,1000,32768,1200);
-- Zero budgets were already guarded; assert them and invalid zero-rate policy.
do $test$
declare field text;r jsonb;cid uuid:=current_setting('test.assistant_a')::uuid;
begin
 for field in select unnest(array['total_budget_microusd','daily_budget_microusd','user_daily_budget_microusd']) loop
  execute format('update private.edht_assistant_approvals set %I=0',field);
  r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000009','Unapproved budget','en',0,100,50);
  if r->>'error'<>'AI_BUDGET_EXCEEDED' then raise exception 'ZERO_BUDGET_ALLOWED %',field;end if;
  execute format('update private.edht_assistant_approvals set %I=%s',field,case when field='user_daily_budget_microusd' then 1000 else 10000 end);
 end loop;
 for field in select unnest(array['input_rate_microusd_per_million','output_rate_microusd_per_million']) loop
  execute format('update private.edht_assistant_approvals set %I=0',field);
  r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000009','Invalid pricing','en',0,100,50);
  if r->>'error'<>'AI_NOT_CONFIGURED' then raise exception 'ZERO_PRICE_ALLOWED %',field;end if;
  execute format('update private.edht_assistant_approvals set %I=1000000',field);
 end loop;
 if exists(select 1 from private.edht_assistant_requests) then raise exception 'INVALID_POLICY_RESERVED_SPEND';end if;
end $test$;
set local role authenticated;
do $test$
declare cid uuid:=current_setting('test.assistant_a')::uuid; r jsonb;c jsonb;h jsonb;message_count integer;
begin
 if public.edht_assistant_reserve(repeat('b',43),cid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',0,100,50)->>'error'<>'AI_NOT_CONFIGURED' then raise exception 'FORGED_CAPABILITY_ALLOWED';end if;
 r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',0,100,50);
 if r->>'status'<>'reserved' or r->>'version'<>'1' or r->>'reserved_cost_microusd'<>'150' or r->'messages'<>'[]'::jsonb then raise exception 'RESERVATION_CONTRACT %',r;end if;
 if public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',0,100,50)->>'error'<>'AI_BUSY' then raise exception 'DUPLICATE_RESERVATION';end if;
 if public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000001','Changed question','en',0,100,50)->>'error'<>'AI_REQUEST_CONFLICT' then raise exception 'REQUEST_PAYLOAD_CONFLICT_ALLOWED';end if;
 c:=public.edht_assistant_create();
 if public.edht_assistant_reserve(repeat('a',43),(c->>'conversation_id')::uuid,'85000000-0000-4000-8000-000000000002','Concurrent question','en',0,100,50)->>'error'<>'AI_BUSY' then raise exception 'PER_USER_CONCURRENCY_BYPASS';end if;
 if public.edht_assistant_finish(repeat('b',43),'85000000-0000-4000-8000-000000000001','completed','{"text":"Forged","source_records":[],"safe_status":"INFORMATION","rules_version":"contract-v1"}',20,10)->>'error'<>'AI_NOT_CONFIGURED' then raise exception 'PROVIDER_RESPONSE_FORGERY';end if;
 if public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000001','completed','{"text":"Foreign source answer","source_records":[{"id":"8b000000-0000-4000-8000-000000000001","version":1}],"safe_status":"INFORMATION","rules_version":"contract-v1"}',20,10)->>'error'<>'AI_INVALID_RESPONSE' then raise exception 'FOREIGN_SOURCE_PROVENANCE_ALLOWED';end if;
 r:=public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000001','completed','{"text":"Synthetic answer","source_records":[],"safe_status":"INFORMATION","rules_version":"contract-v1","model":"forged-model","provider":"forged-provider"}',20,10,null,true);
 if r->>'status'<>'completed' or r->>'version'<>'2' or r->'usage'->>'cost_microusd'<>'30' or r->'usage'->>'is_estimate'<>'true' or r->'response'->>'model'<>'synthetic-contract-model' or r->'response'->>'provider'<>'openai' then raise exception 'RECONCILIATION_CONTRACT %',r;end if;
 h:=public.edht_assistant_history(cid);
 if jsonb_array_length(h->'messages')<>2 or h->'messages'->0->>'role'<>'user' or h->'messages'->1->>'role'<>'assistant' or h->'messages'->1->>'text'<>'Synthetic answer' then raise exception 'AUTHORITATIVE_HISTORY';end if;
 r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',0,100,50);
 if r->>'status'<>'completed' or r->'response'->>'text'<>'Synthetic answer' then raise exception 'COMPLETED_DEDUPE';end if;
 -- Derived token bounds and the current version are not part of stable client intent.
 r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000001','Synthetic question','en',2,200,75);
 if r->>'status'<>'completed' or r->'response'->>'text'<>'Synthetic answer' or jsonb_array_length(public.edht_assistant_history(cid)->'messages')<>2 then raise exception 'RETRY_RECALCULATION_CONFLICT';end if;
 perform public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000001','completed','{"text":"Ignored duplicate"}',20,10);
 if jsonb_array_length(public.edht_assistant_history(cid)->'messages')<>2 then raise exception 'DUPLICATE_COMPLETION_APPEND';end if;
 if public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000003','Stale question','en',0,100,50)->>'error'<>'AI_VERSION_CONFLICT' then raise exception 'STALE_VERSION_ALLOWED';end if;
 r:=public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000003','Follow-up question','en',2,100,50);
 if jsonb_array_length(r->'messages')<>2 then raise exception 'CONTEXT_HISTORY_MISSING';end if;
 -- Usage missing after a successful HTTP result is unknown cost, never zero.
 r:=public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000003','completed','{"text":"Usage absent"}',null,null,'AI_PROVIDER_TIMEOUT');
 if r->>'status'<>'unknown' or r->>'reserved_cost_microusd'<>'150' or r->>'is_estimate'<>'true' then raise exception 'UNKNOWN_COST_FREED';end if;
 if public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000003','failed_before_send',null,null,null)->>'error'<>'AI_RECONCILIATION_REQUIRED' then raise exception 'DISPUTED_COST_RELEASED';end if;
 if public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000004','Retry after timeout','en',3,100,50)->>'error'<>'AI_RECONCILIATION_REQUIRED' then raise exception 'UNKNOWN_COST_RETRY_ALLOWED';end if;
end $test$;
select set_config('request.jwt.claim.sub','84000000-0000-4000-8000-000000000002',true);
do $test$
declare cid uuid:=current_setting('test.assistant_a')::uuid;r jsonb;c jsonb;
begin
 if exists(select 1 from public.edht_assistant_conversations where conversation_id=cid) or exists(select 1 from public.edht_assistant_messages where conversation_id=cid) then raise exception 'FOREIGN_RLS_READ';end if;
 if public.edht_assistant_history(cid)->>'error'<>'AI_CONVERSATION_NOT_FOUND' or public.edht_assistant_delete(cid)->>'error'<>'AI_CONVERSATION_NOT_FOUND' then raise exception 'FOREIGN_RPC_ACCESS';end if;
 if public.edht_assistant_reserve(repeat('a',43),cid,'85000000-0000-4000-8000-000000000005','Foreign conversation','en',3,100,50)->>'error'<>'AI_CONVERSATION_NOT_FOUND' then raise exception 'FOREIGN_RESERVE';end if;
 if public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000003','unknown',null,null,null)->>'error'<>'AI_NOT_CONFIGURED' then raise exception 'FOREIGN_RECONCILIATION';end if;
 c:=public.edht_assistant_create();perform set_config('test.assistant_b',c->>'conversation_id',true);
 r:=public.edht_assistant_reserve(repeat('a',43),(c->>'conversation_id')::uuid,'85000000-0000-4000-8000-000000000006','Not sent','ru',0,100,50);
 if r->>'status'<>'reserved' then raise exception 'SECOND_OWNER_BLOCKED';end if;
 r:=public.edht_assistant_finish(repeat('a',43),'85000000-0000-4000-8000-000000000006','failed_before_send',null,null,null);
 if r->>'status'<>'failed_before_send' or r->>'reserved_cost_microusd'<>'0' then raise exception 'CONFIRMED_NOT_SENT_NOT_RELEASED';end if;
end $test$;
reset role;
-- A's unknown hold and B's confirmed not-sent request must have different costs.
do $test$begin
 if (select count(*) from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000001')<>1 then raise exception 'RETRY_DUPLICATED_LEDGER';end if;
 if (select actual_cost_microusd from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000001')<>30 then raise exception 'ACTUAL_COST_NOT_PERSISTED';end if;
 if not (select cost_estimated from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000001') then raise exception 'CACHED_COST_CLAIMED_EXACT';end if;
 if (select status from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000003')<>'unknown' then raise exception 'UNKNOWN_NOT_DURABLE';end if;
end $test$;
-- Global quota refuses a new request based on durable held+spent cost, not process memory.
update private.edht_assistant_approvals set total_budget_microusd=200;
set local role authenticated;
do $test$begin
 if public.edht_assistant_reserve(repeat('a',43),current_setting('test.assistant_b')::uuid,'85000000-0000-4000-8000-000000000007','Budget exhausted','en',1,100,50)->>'error'<>'AI_BUDGET_EXCEEDED' then raise exception 'GLOBAL_BUDGET_BYPASS';end if;
end $test$;
select set_config('request.jwt.claim.sub','84000000-0000-4000-8000-000000000001',true);
do $test$begin
 if public.edht_assistant_delete(current_setting('test.assistant_a')::uuid)<>'{"ok":true}'::jsonb then raise exception 'DELETE_FAILED';end if;
 if exists(select 1 from public.edht_assistant_messages where conversation_id=current_setting('test.assistant_a')::uuid) then raise exception 'PLAINTEXT_RETAINED_AFTER_DELETE';end if;
 if public.edht_assistant_history(current_setting('test.assistant_a')::uuid)->>'error'<>'AI_CONVERSATION_NOT_FOUND' then raise exception 'DELETED_HISTORY_VISIBLE';end if;
end $test$;
reset role;
do $test$begin
 if (select status from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000003')<>'unknown' or (select conversation_id from private.edht_assistant_requests where request_id='85000000-0000-4000-8000-000000000003') is not null then raise exception 'DELETE_RESET_COST_LEDGER';end if;
 if exists(select 1 from pg_policies where tablename in('edht_assistant_conversations','edht_assistant_messages') and qual like '%user_metadata%') then raise exception 'UNTRUSTED_METADATA_AUTHORIZATION';end if;
end $test$;
set local role anon;
do $test$begin
 begin perform public.edht_assistant_create();raise exception 'ANON_CONVERSATION';exception when insufficient_privilege then null;end;
end $test$;
reset role;
rollback;
select 'PREVIEW_ASSISTANT_CONTRACT_PASS' as result;