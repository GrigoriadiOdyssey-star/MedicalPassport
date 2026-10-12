import {sha256} from './catalog-lib.mjs';
import {profileProposals} from '../config/canonical-proposals.mjs';

export function buildCanonicalProposals(modules,meta){
 const byId=new Map(modules.map(m=>[m.id,m])),outputs=new Map(),profiles=[],mappings=[];
 for(const p of profileProposals){
  const requirements=[],byLabel=new Map();
  for(const id of p.source_ids){
   const source=byId.get(id);if(!source)throw Error('Unknown canonical proposal source '+id);
   for(const match of source.body.matchAll(/^\s*•\s*(.+)$/gm)){
    const label=match[1].trim();
    if(!byLabel.has(label)){const r={requirement_id:`${p.id}-R${String(requirements.length+1).padStart(2,'0')}`,label,source_ids:[]};requirements.push(r);byLabel.set(label,r);}
    byLabel.get(label).source_ids.push(id);
   }
  }
  const document=`canonical_profiles/${p.id}.md`;
  const profileMappings=[];
  for(const id of p.source_ids){
   const m=byId.get(id);
   m.body.split(/\n\s*\n/).filter(Boolean).forEach((text,i)=>{
    const labels=[...text.matchAll(/^\s*•\s*(.+)$/gm)].map(x=>x[1].trim());
    const reqs=labels.map(label=>byLabel.get(label)?.requirement_id);
    if(reqs.some(x=>!x))throw Error('Unmapped feature');
    const row={original_id:id,source_fragment_id:`REQ-${id}-${i+1}`,source_fragment_sha256:sha256(text),retained_text:text,proposal_id:p.id,target_document:document,target_section:reqs.length?'Requirement union':'Original context and status',target_requirement_ids:reqs,decision:'PROPOSED_MAPPING_NOT_MIGRATED',approved:false};
    profileMappings.push(row);mappings.push(row);
   });
  }
  profiles.push({...p,document,requirements,source_fragment_count:profileMappings.length});
  const requirementsTable=requirements.map(r=>`| ${r.requirement_id} | ${r.label} | ${r.source_ids.join(', ')} |`).join('\n');
  const contexts=p.source_ids.map(id=>{const m=byId.get(id);const fragments=profileMappings.filter(x=>x.original_id===id&&!x.target_requirement_ids.length);return `### Original ${id}: ${m.title}\n\nSource heading line: ${m.sourceLine}; body SHA-256: \`${sha256(m.body)}\`.\n\n${fragments.map(f=>`- ${f.source_fragment_id}: ${f.retained_text.replace(/\n/g,' / ')}`).join('\n')}`;}).join('\n\n');
  const text=`# ${p.id} — ${p.title}\n\nStatus: DRAFT_REQUIREMENT_UNION. Source IDs: ${p.source_ids.join(', ')}. Это proposed canonical profile, не новый historical ID. NORMALIZED/CANONICALIZED/IMPLEMENTATION_READY пока false.\n\n## Purpose\n\n${p.purpose}\n\n## Scope\n\n${p.scope}\n\nLayer: ${p.architecture_layer}; proposed owner: ${p.canonical_owner_proposal}; stage: ${p.roadmap_stage}, OUT_OF_P0.\n\n## Non-goals\n\n${p.non_goals}\n\n## Actors\n\nPatient (child/adolescent), verified guardian с текущей authority, authorized clinician и системные consumers с отдельной purpose/tenant policy. Person/team для clinical ownership пока не назначен. Наличие actor в списке не выдаёт права.\n\n## Permissions\n\nPatient/guardian/clinician получают только разрешённые data elements/encounters. На clinical records действуют права shared owner. Read-only profile не может выполнять prescribing/administering. Research/AI consent отдельно. Unknown/conflicting authority → deny/review.\n\n## Inputs\n\nVersioned source references, subject/tenant, effective/recorded time, verification/truth kind, consent/policy version, authority evidence, requested profile version. Отсутствующие данные остаются unknown.\n\n## Outputs\n\nPermission-filtered profile projection с source versions/freshness; отдельные errors/unknown/stale markers. Клинические факты, predictions и recommendations не объединяются.\n\n## Requirement union\n\nТочные исходные feature labels объединены только при буквальном совпадении. Синонимы не свёрнуты автоматически. Narrative/context fragments сохранены ниже и в traceability.\n\n| Requirement | Original label | Original IDs |\n|---|---|---|\n${requirementsTable}\n\n## Data model\n\n${p.data}\n\nОбщий envelope и владельцы: [Data architecture](../data_architecture_findings.md). Ни одной новой authoritative specialty table этот draft не вводит.\n\n## API\n\nProfile API — draft contract: read projection(subject, profile version, requested elements, caller policy context) возвращает allowed values/source versions/freshness либо typed denial. Конкретные routes/payload schemas и partner profile URLs ещё не определены. Все write operations идут через shared owner contracts; текущий P0 OpenAPI не объявляется API детских профилей.\n\n## Events\n\nProposed: ClinicalAssertionVersionChanged, ConsentPolicyChanged, SpecialtyProjectionInvalidated. Envelope: event_id, tenant, subject reference, resource/type/version, timestamp, correlation_id; PHI payload не включать в общий bus. Consumer version-aware и idempotent. Event schema/version и topic policy — открытый engineering gate.\n\n## Dependencies\n\n${p.dependencies.map(d=>'- '+d).join('\n')}\n\nЭто proposed critical dependencies; API compatibility/integration tests не выполнены.\n\n## Failure modes\n\n${p.failure_modes.map(s=>'- '+s).join('\n')}\n\n## Security\n\nTenant isolation; object-level authorization; отдельные service identities; default deny; source references не обходят policy. Запрет direct clinical writes из AI/twin/profile runtime.\n\n## Privacy\n\nGuardian access не blanket access; consent/assent/maturity и sensitive encounter segmentation применяются на каждую выдачу/экспорт. Revocation закрывает будущую выдачу; внешние копии не считаются отозванными автоматически.\n\n## Clinical safety\n\n${p.invariants.map(s=>'- '+s).join('\n')}\n\nАлгоритмов диагностики, лечения и dosing не предлагается. Данные сохраняют source/author/truth kind. Отдельная clinical validation обязательна для будущих actionable функций.\n\n## Observability\n\nProjection version, stale/denied/error counts и dependency latency без medical payload; audit purpose/actor/resource reference/decision. Budgets и alert owner пока не назначены.\n\n## Tests\n\nПлан: cross-tenant denial; guardian confidential encounter denial; version correction propagation; unknown data handling; replay/out-of-order events; denied AI/order writes; complete source-fragment coverage. Только последняя проверка выполнена локально для draft mapping; приложение не реализовано.\n\n## Acceptance criteria\n\n${p.acceptance.map((s,i)=>`${i+1}. ${s}`).join('\n')}\n\nClinical/runtime criteria: NOT_RUN. Ни один checkbox не считается закрытым по существованию текста.\n\n## Open decisions\n\n${p.open_decisions.map(s=>'- '+s).join('\n')}\n\n## Original context and status\n\nИсходные формулировки ниже — исторические намерения, не доказанные возможности. Их сохранение предотвращает потерю возрастных границ, product intent и provenance при объединении bullet requirements.\n\n${contexts}\n`;
  outputs.set(document,text);
 }
 outputs.set('canonical_profile_proposals.json',JSON.stringify({...meta,status:'PROPOSED_ONLY',profiles},null,2)+'\n');
 outputs.set('requirement_traceability_proposals.json',JSON.stringify({...meta,status:'DRAFT_NOT_APPROVED',mapped_original_ids:[...new Set(mappings.map(m=>m.original_id))].sort((a,b)=>a-b),mappings},null,2)+'\n');
 return {outputs,profiles,mappings};
}
