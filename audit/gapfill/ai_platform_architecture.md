# EDHT Model-agnostic AI Platform
Revision 2026-09-14 · EXT-AI · DRAFT_SPECIFICATION · CAP-AI · shared AI infrastructure / governed inference and learning · roadmap RESEARCH.

## Purpose and retained capabilities
Provide one infrastructure with task-specific policy, provenance and evaluation. Existing 1369 already calls for model version, dataset, approval and performance; 1259 requires clinical validation/version/safety; 1218 retraining and 1547 knowledge learning need separate controlled release paths. Specialty AI titles become candidate profiles with prompts, retrieval scope, evaluation sets and permissions. They do not automatically receive their own gateways, model registries or patient stores.

## Responsibility hierarchy
Knowledge AI retrieves and explains approved evidence with source/version and applicability. Clinical AI supports authorized clinician decisions within a validated intended use. Personal AI provides patient-facing explanations and navigation with no autonomous prescribing or diagnosis. Research AI works within protocol/dataset/disclosure permissions and emits hypotheses rather than clinical knowledge.
The shared platform supplies AI Gateway, Model Router, RAG, Clinical Knowledge Graph, Model Registry, Evaluation, Safety, Monitoring, Audit, Provenance, Uncertainty and Human Review. Knowledge ownership belongs to approved evidence releases; source clinical facts stay with clinical services.

## Actors, inputs and routing contract
A task owner specifies use, risk class, input sensitivity, patient/tenant/purpose, jurisdiction, latency/cost limits and required validation. Model stewards approve releases; clinical governance approves clinical intended use; privacy/security approves processing terms. Execution service identities cannot approve themselves.
RouteRequest references authorized context, evidence pack, task/profile version and processing policy. ModelRelease declares provider/model version, task eligibility, populations/exclusions, evaluation, region, retention/training terms, context limits, tool permissions, approval and rollback target. RouteDecision records eligible candidates, exclusions, selected release, policy version and rationale.
First apply hard constraints: task/intended use, clinical risk, privacy, jurisdiction and validation. Only then optimize among eligible routes for latency and cost. A timeout can switch only to a separately approved route for the same task, data and population. Otherwise abstain or defer to a human. A cheaper model is never an automatic substitute.

## Model independence and interfaces
Adapters may eventually support OpenAI, Google/DeepMind, Anthropic, xAI, open-source, specialized biomedical and future EDHT models. These are illustrative provider categories, not configured or validated integrations. Business contracts use EDHT task/result envelopes, not provider-specific chat objects. Keep provider translation, rate limits and output parsing within adapters.
Proposed commands: executeGovernedTask, evaluateCandidateRelease, recordHumanReview, approveModelRelease, revokeModelRelease. Events InferenceCompleted, ModelAbstained, ReviewRequested, ModelReleaseChanged and OutputInvalidated contain artifact/version references. Idempotency and explicit cancellation prevent duplicate consequential tool actions. This stage creates no deployed endpoints or provider credentials.

## RAG, tools and result ownership
Retrieval enforces authorization before indexing/querying and on source access; embedding stores inherit source sensitivity and deletion/revocation policy. Evidence snippets are untrusted content, never execution instructions. Index releases pin corpus/terminology versions. The knowledge graph preserves provenance, conflicting claims, applicability and review state.
Result envelope records source IDs, model release, prompt/task version, retrieval version, epistemic status, uncertainty representation, limitations and human disposition. Unsupported claims trigger abstention. Model confidence is not a calibrated probability unless evaluation supports that interpretation. Tool calls pass through deterministic authorization and schema validation; recommendations cannot call a medication mutation tool.

## Safety, privacy, failure and monitoring
Enforce minimum necessary context, separate consent/legal-basis/purpose checks, tenant isolation, provider retention/region rules and redacted logging. Test prompt injection from documents, exfiltration, cross-patient context, stale retrieval, tool misuse, bias/subgroup performance and unsupported age/language. Model outage, schema mismatch or revoked release returns an explicit unavailable state; it must not fabricate a result or select an unapproved provider.
Monitor safety incidents, drift, abstention rate, latency, cost, evaluation regressions and human overrides against defined denominators. Pin releases and retain traceability; emergency disablement invalidates affected derived outputs while preserving audit.

## Governed improvement and acceptance
Clinical data → governed dataset → evaluation/research → permitted model improvement → validation → signed release → monitoring. Every training/export step requires an approved basis, purpose and retention policy. Feedback is evidence for review, not an automatic training grant. Knowledge-pack updates and model retraining have separate releases.
Acceptance tests must demonstrate hard-constraint routing before optimization, approved fallback or abstention, source-linked explanations, refusal of clinical fact/order writes, and replayable model/context versions. Dependencies CAP-DATA, CAP-CONSENT, CAP-AUDIT; downstream CDS/twin/research consume typed results. Open gates: model/task evaluation suites, provider contracts, clinical authority, incident response ownership and patient-facing human-factors validation.
