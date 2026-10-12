\set ON_ERROR_STOP on
insert into auth.users (id) values
  ('10000000-0000-4000-8000-000000000001'),
  ('10000000-0000-4000-8000-000000000002'),
  ('10000000-0000-4000-8000-000000000003');

set role authenticated;
set request.jwt.claim.sub = '10000000-0000-4000-8000-000000000001';
insert into public.edht_patient_profiles (patient_user_id, display_name)
values ('10000000-0000-4000-8000-000000000001', 'Synthetic Patient');

select record_id as allergy_record
from public.edht_append_clinical_record_version(
  null, 'allergy', '{"name":"Synthetic allergen"}'::jsonb, 'patient_reported'
) \gset
select record_id as medication_record
from public.edht_append_clinical_record_version(
  null, 'medication', '{"name":"Synthetic medication"}'::jsonb, 'patient_reported'
) \gset
select public.edht_create_patient_grant(
  '10000000-0000-4000-8000-000000000002',
  'second_opinion', array['allergy']::text[], now() + interval '1 hour'
) as patient_grant \gset

insert into public.edht_documents (
  id, version, patient_user_id, uploaded_by, object_path, original_name,
  mime_type, byte_size, sha256, document_type, source
) values (
  '20000000-0000-4000-8000-000000000001', 1,
  '10000000-0000-4000-8000-000000000001',
  '10000000-0000-4000-8000-000000000001',
  '10000000-0000-4000-8000-000000000001/20000000-0000-4000-8000-000000000001/1',
  'synthetic-result.pdf', 'application/pdf', 12,
  repeat('a', 64), 'laboratory', 'patient_upload'
);
insert into storage.objects (bucket_id, name) values (
  'edht-medical-documents',
  '10000000-0000-4000-8000-000000000001/20000000-0000-4000-8000-000000000001/1'
);
select public.edht_create_document_grant(
  '20000000-0000-4000-8000-000000000001', 1,
  '10000000-0000-4000-8000-000000000002',
  'second_opinion', now() + interval '1 hour'
) as document_grant \gset

set request.jwt.claim.sub = '10000000-0000-4000-8000-000000000002';
do $$
begin
  if (select count(*) from public.edht_clinical_record_versions where patient_user_id = '10000000-0000-4000-8000-000000000001') <> 1 then
    raise exception 'recipient did not receive exactly the allergy scope';
  end if;
  if (select count(*) from public.edht_clinical_record_versions where kind = 'medication') <> 0 then
    raise exception 'recipient can read an ungranted medication';
  end if;
  if (select count(*) from public.edht_current_clinical_records where kind = 'allergy') <> 1 then
    raise exception 'security-invoker current view did not preserve RLS';
  end if;
  if (select count(*) from public.edht_documents where id = '20000000-0000-4000-8000-000000000001') <> 1 then
    raise exception 'recipient cannot read the exact granted document version';
  end if;
  if (select count(*) from storage.objects where bucket_id = 'edht-medical-documents') <> 1 then
    raise exception 'recipient cannot read granted private object';
  end if;
end $$;

set request.jwt.claim.sub = '10000000-0000-4000-8000-000000000003';
do $$
begin
  if (select count(*) from public.edht_clinical_record_versions) <> 0
     or (select count(*) from public.edht_documents) <> 0
     or (select count(*) from storage.objects) <> 0 then
    raise exception 'unrelated account crossed patient isolation';
  end if;
end $$;

reset role;
set role authenticated;
set request.jwt.claim.sub = '10000000-0000-4000-8000-000000000001';
select public.edht_revoke_patient_grant(:'patient_grant'::uuid);
select public.edht_revoke_document_grant(:'document_grant'::uuid);

set request.jwt.claim.sub = '10000000-0000-4000-8000-000000000002';
do $$
begin
  if (select count(*) from public.edht_clinical_record_versions) <> 0
     or (select count(*) from public.edht_documents) <> 0
     or (select count(*) from storage.objects) <> 0 then
    raise exception 'revoked recipient retained access';
  end if;
end $$;
