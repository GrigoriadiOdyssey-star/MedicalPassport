export const expectedCount=51075;
export const checkpointCommit='7f1e8e84a4e5a3294cab525cea5f818b0a47d2e9';
export const exclusiveStatuses=['NOT_REVIEWED','REVIEWED_ONLY','NORMALIZED','CANONICALIZED','SUPERSEDED','DUPLICATE','PARTIAL_OVERLAP','NEEDS_REVIEW','IMPLEMENTATION_READY'];

export const domains=[
 ['Patient','patient|medical profile|passport'],['Doctor','doctor|physician|practitioner'],['Clinic','clinic'],['Hospital','hospital'],['Laboratory','laborator|lab results'],['Imaging','imaging|radiolog|mri|x-ray|ultrasound'],['Pharmacy','pharmac(y|ies)|dispens'],['Insurance','insurance|coverage|claim'],['Emergency','emergency|\\bsos\\b|crisis'],['Telemedicine','telemedicine|telehealth'],['Devices','device|implant|wearable'],['RPM','remote.*monitor|home.*monitor|\\brpm\\b'],['Documents','document|\\bocr\\b'],['Vaccination','vaccin|immunization'],['Travel medicine','travel|border|travel medicine'],['Pediatrics','pediatric|paediatric|child|adolescent'],['Neonatology','neonat|newborn|nicu'],['Geriatrics','geriat|elderly|older adult'],['Pregnancy','pregnan|obstetric|maternal'],['Reproductive medicine','reproductive|fertility|gynecol|ivf'],['Cardiology','cardio|cardiac|heart'],['Neurology','neurolog|seizure|epilepsy'],['Oncology','oncol|cancer|tumor'],['Hematology','hematol|haematol|blood disorder'],['Endocrinology','endocrin|diabet|hormon'],['Gastroenterology','gastro|digestive|bowel'],['Hepatology','hepat|liver'],['Nephrology','nephro|renal|kidney'],['Urology','urolog|bladder|urinary'],['Pulmonology','pulmon|respiratory|lung'],['Rheumatology','rheumat|autoimmune|arthritis'],['Immunology','immunolog|immune'],['Allergy','allerg|hypersensitiv'],['Dermatology','dermat|skin'],['Ophthalmology','ophthalm|vision|ocular|retina'],['ENT','\\bent\\b|otolaryng|hearing|ear nose'],['Psychiatry','psychiatr|mental health|psychopharmac'],['Psychology','psycholog|psychotherapy|behavioral'],['Surgery','surg|operative'],['ICU','intensive care|\\bicu\\b|critical care'],['Rehabilitation','rehabil|physiotherap|functional recovery'],['Dentistry','dent|orthodont|oral health|craniofacial'],['Genetics','genetic|hereditary|variant'],['Genomics','genom|sequencing|omics'],['Pharmacology','pharmacol|pharmacogen|drug response'],['Epidemiology','epidemiolog|outbreak|surveillance'],['Public health','public health|population health|health authorit'],['Research','research|clinical trial|cohort|biobank'],['Medical tourism','medical tourism|cross.border.*care'],['Provider network','provider|hospital network|clinic network|international.*search'],['Government integrations','government|national.*health|eurostat|\\bwho\\b|\\becdc\\b|\\bcdc\\b']
].map(([name,pattern])=>({name,pattern}));

export const pediatricSpecialties=[
 ['General pediatrics','pediatrics|general pediatric'],['Neonatology','neonat|newborn|nicu'],['Cardiology','cardiol|cardiac'],['Neurology','neurolog'],['Neurosurgery','neurosurg'],['Neuro-oncology','neuro.oncol|cns tumor'],['Oncology','oncol|cancer'],['Hematology','hematol|haematol'],['Endocrinology','endocrin|diabet'],['Gastroenterology','gastro|digestive|pancrea'],['Hepatology','hepat|liver'],['Nephrology','nephro|renal|kidney'],['Urology','urolog|bladder'],['Pulmonology','pulmon|respiratory'],['Rheumatology','rheumat'],['Allergy','allerg'],['Immunology','immunolog|immune'],['Infectious disease','infect|antimicrobial'],['Dermatology','dermat|skin'],['Ophthalmology','ophthalm|vision|eye'],['ENT','\\bent\\b|hearing|otolaryng'],['Mental health / psychiatry','mental health|psychiatr|psychopharmac'],['Psychology / development','psycholog|neurodevelop|behavioral'],['Surgery','surg'],['Orthopedics','orthop|musculoskeletal'],['Trauma','trauma|injury'],['Dentistry / craniofacial','dent|craniofacial|orthodont'],['Reproductive / adolescent','reproductive|adolescent|gynecol'],['Genetics','genetic|genom'],['Rehabilitation','rehabil'],['ICU / critical care','critical care|intensive care|icu']
].map(([name,pattern])=>({name,pattern}));
export const dimensions=[
 ['Core','core|platform|hub|complete|ecosystem','CAP-SPECIALTY'],['Registry','registry|records|register','CAP-DATA'],['Timeline','timeline|longitudinal|history','CAP-DATA'],['Diagnostics','diagnos|assessment|screening','CAP-CONDITION'],['Laboratory','laborator|lab |biomarker','CAP-LABORATORY'],['Imaging','imag|radiol|mri|ct |ultrasound|oct','CAP-IMAGING'],['Medication','medicat|drug|pharmaco|therapy exposure','CAP-MEDICATION'],['Safety','safety|risk|adverse|contraindic','CAP-CDS'],['Procedures','procedure|surg|intervention','CAP-ENCOUNTER'],['AI/CDS','\\bai\\b|artificial intelligence|decision support','CAP-CDS'],['Digital Twin','digital twin|simulat','CAP-TWIN'],['Telemedicine','telemedicine|telehealth|video consult','CAP-TELEMEDICINE'],['RPM','remote.*monitor|home.*monitor|wearable|device signal|\\brpm\\b','CAP-DEVICES'],['Rehabilitation','rehabil|functional recovery','CAP-ENCOUNTER'],['Emergency','emergency|crisis|rescue','CAP-EMERGENCY'],['Genetics','genetic|genom|hereditary','CAP-DATA'],['Research','research|clinical trial|cohort','CAP-RESEARCH'],['Passport','passport|summary|handover','CAP-PROFILE'],['Transition to adult care','transition|adult.care|adulthood|adult.*handover','CAP-CONSENT']
].map(([name,pattern,shared_owner])=>({name,pattern,shared_owner}));

const requirements={
 PHARM:['Patient covariates and missingness','Medication exposure incl OTC/supplements','Renal/hepatic function and pediatric/pregnancy context','Genomic/PGx phenotype and uncertainty','Organ toxicity and adverse reaction evidence','Response model/scenario comparison','Clinician review boundary','Longitudinal response and governed learning'],
 TWIN:['Seven separated twin levels','Generic versus patient-derived anatomy','CT/MRI/PET-CT/X-ray/ultrasound/OCT references','Versioned physiological/disease/treatment model','Scenario assumptions and uncertainty','Longitudinal invalidation and replay','No clinical fact overwrite'],
 VISUAL:['Interactive body and organ/system highlighting','Observed/measured/inferred/predicted/simulated labels','Treatment impact/evidence/model links','Temporal overlays and stale/unknown states','Accessible alternative and no false patient anatomy'],
 GENOMIC:['Model-agnostic protein/variant adapters','Assembly/transcript/allele/phase provenance','Gene-drug/genotype-phenotype/pathway evidence','Licensing and provider approval','No protein prediction to clinical conclusion shortcut'],
 INTEROP:['Read-only discovery and format profiling','FHIR/HL7v2/CDA/DICOM/CSV/JSON/XML/API/export inputs','Candidate semantic/terminology mappings with confidence','Validation and loss/conflict reporting','Sandbox round-trip and human approval','Connector registry monitoring rollback','No unvalidated clinical source-of-truth writes'],
 RESEARCH:['Distinct analytics purposes','Cohort version and longitudinal exposure/outcome','Pseudonymization/aggregation and disclosure control','Governed hypothesis to evidence publication','No correlation-to-causation claim','Separate training consent/legal basis','Knowledge feedback approval and rollback'],
 AI:['Knowledge/Clinical/Personal/Research AI hierarchy','Gateway/router/model registry','Routing by task/risk/privacy/jurisdiction/cost/latency/validation','Approved alternative models or abstention','RAG/evidence versioning','Human review/audit/uncertainty','Governed evaluation to training to deployment lifecycle']
};
export const extensions=[
 ['PHARM','Precision Pharmacology / Drug Intelligence','CAP-CDS','precision_pharmacology_architecture.md','pharmaco|drug response|drug interaction|precision.*medicine|medicines table|medicines api|adverse|nephrotox|medication response',['CAP-MEDICATION','CAP-LABORATORY','CAP-DATA','CAP-AI','CAP-TWIN','CAP-CONSENT']],
 ['TWIN','Seven-level Digital Twin','CAP-TWIN','digital_twin_architecture.md','digital twin|anatomical|physiological|patient.specific.*model|treatment.response visualization',['CAP-DATA','CAP-AI','CAP-IMAGING','CAP-DEVICES','CAP-CONSENT']],
 ['VISUAL','Dynamic Organism / Treatment Impact Visualization','CAP-TWIN','dynamic_organism_visualization.md','visuali|organ.*model|anatom|treatment.response|therapy.*exposure|multisystem|organ.*effect',['CAP-TWIN','CAP-IMAGING','CAP-DATA','CAP-CDS']],
 ['GENOMIC','Protein / Genomic Intelligence Adapters','CAP-AI','protein_genomic_adapters.md','protein|genom|gene.variant|pharmacogen|molecular|pathway|omics',['CAP-DATA','CAP-LABORATORY','CAP-AI','CAP-CONSENT']],
 ['INTEROP','Adaptive Interoperability / Connector Intelligence','CAP-INTEROP','adaptive_interoperability_architecture.md','interoper|connector|mapping|schema|format|fhir|hl7|dicom|cda|synchroniz',['CAP-DATA','CAP-IDENTITY','CAP-CONSENT','CAP-AI','CAP-AUDIT']],
 ['RESEARCH','Research AI / Population Intelligence','CAP-RESEARCH','research_ai_architecture.md','research|population|epidemiolog|public health|eurostat|statistics|analytics|cohort',['CAP-DATA','CAP-CONSENT','CAP-AI','CAP-AUDIT']],
 ['AI','Model-agnostic AI Platform','CAP-AI','ai_platform_architecture.md','ai platform|knowledge|model registr|model rout|learning|gateway|assistant|inference|evaluation',['CAP-DATA','CAP-CONSENT','CAP-AUDIT']]
].map(([key,title,owner,document,search,dependencies])=>({id:`EXT-${key}`,key,title,canonical_owner:owner,document,search,dependencies,requirements:requirements[key],decision:'EXTEND_EXISTING_OWNER',record_kind:'CANONICAL_EXTENSION_DRAFT',new_original_module:false,new_gap_module:false,status:'DRAFT_SPECIFICATION',architecture_layer:'SHARED CAPABILITY',roadmap_stage:'RESEARCH',implementation_ready:false,clinical_safety:{autonomous_prescribing:false,autonomous_dose_change:false,simulation_is_clinical_fact:false,clinician_review_required:true,unvalidated_clinical_import_allowed:false}}));

export const specificVerdicts={
 1176:'Dose Optimization требует клинического review; PGx advisor не становится prescriber.',
 1218:'Model Retraining не получает разрешение на patient data из Physician Feedback; нужен governance release gate.',
 1224:'Hospital operational twin: beds/departments/equipment/staff. Отделить от patient physiological twin.',
 1225:'Physician workflow profile: нагрузка и performance, не physiological replica человека.',
 1259:'Clinical validation/version control/safety уже явно требуются; сохранить эти ограничения в feedback loop.',
 1356:'HL7/FHIR/DICOM/CDA перечислены, но compatible integration не доказана; добавить per-partner conformance.',
 1359:'National EMR/hospital/research connectors существуют как intent; discovery/mapping/sandbox/rollback недоопределены.',
 1369:'Registry содержит version/dataset/approval/performance; расширить intended-use/jurisdiction/rollback и routing eligibility.',
 1438:'Anonymous population health — историческое заявление, а не доказательство anonymization; ввести disclosure controls.',
 1440:'WHO/ECDC/CDC coordination требует отдельных authorized reporting adapters, не доступа ко всем пациентам.',
 1471:'Обновления guidelines/publications/regulatory не должны автоматически менять клинические recommendations.',
 1609:'Pathogen genomes отделены от human genome и family consent; resistance/outbreak interpretation остаётся проверяемым.',
 1621:'WGS/WES/chromosome/structural variant анализ требует assembly/pipeline/version и QC; не новый AI provider.',
 1636:'Ethnic reference data нельзя превращать в детерминированный индивидуальный риск; нужны cohort applicability и governance.',
 1663:'Efficacy/side effects/personalized dosing — прогнозы, не клинические факты и не самостоятельная смена дозы.',
 1664:'Treatment Adjustment и Combination Therapy выполняются через отдельное clinical decision/order действие.',
 1727:'OTC и Supplements явно существуют в исходнике; их отсутствие в раннем medicines outline не означает новый модуль.',
 1823:'Patient matching для cohort не даёт права связывать идентичности для care; version inclusion/exclusion/time anchor.',
 1826:'Correlation/knowledge mining создают hypotheses, не validated medical knowledge.',
 1843:'Gene variants/drug response/dose optimization дополняют 1606 adverse reactions; partial overlap, не exact duplicate.',
 1876:'Operational patient flow/resource/forecasting дополняют hospital twin 1224; оба вне patient clinical twin.',
 1915:'Research Education — обучение методам, не обработка patient cohort. Не сливать по слову Research.',
 2149:'Proteinuria — urinary observation, не protein structure intelligence; устранён lexical false positive.',
 2401:'Raw data references, variant reports и reanalysis уже предусмотрены; добавить provenance и reference build.',
 2677:'CYP Gene Analysis добавляет конкретное PGx требование к общему 2399; сохранить, не молча supersede.',
 3993:'Clinician supervision прямо указана; сохранить medication reconciliation/history и запрет автономной выписки.',
 4220:'Actionability/evidence/resistance/trial matching/molecular board review заданы; клинический review обязателен до действия.',
 4343:'Vaccine product/batch/timing/outcome/reporting и population privacy существуют; связать с pharmacovigilance, не adverse-event diagnosis.',
 4419:'Cross-reactivity использует class/molecular relation/reaction phenotype/previous tolerance/results/evidence; это не универсальное отсутствие аллергии.',
 4566:'Renal dosing/contrast/TDM/multiple nephrotoxins присутствуют; нужно усилить context schema и validated thresholds, а не создавать копию.',
 4583:'Hematuria/proteinuria diagnostic context не относится к protein folding; сохранять transient/persistent distinction и clinical review.',
 4649:'Authorization/de-identification/audit явно заданы: усилить cohort governance, не удалять как обычный registry.',
 4842:'Weights/labs/cardiovascular/growth/sleep/neurological monitoring есть; HIGH MVP не расширяет adult P0.',
 5018:'Variant classification/pedigree/cascade testing/reanalysis с genetics supervision; отдельно family consent и reinterpretation.',
 5130:'Germline/somatic/CNV/fusions/actionability/resistance/reclassification нуждаются в разных evidence states и molecular board.',
 5166:'MedicationEpisode/DoseChange/MonitoringRequirement/Result уже сформулированы; расширить shared medication architecture и clinician boundary.',
 5175:'Полный mental-health hub уже включает segmented privacy, transition и research expansion; local MVP не равен global MVP, generic twin не должен потерять эти ограничения.'
};
