export const baseline='53c4fe4647f200df6c4f867acc6b044a6b728ab4';
export const medicationFindings={
401:['CAP-PHARMACY','Search preserves brand/generic/ATC/barcode/manufacturer; a search match does not establish dispensing eligibility or availability.'],
402:['CAP-PHARMACY','Availability and branch alternatives require timestamp/source and stock uncertainty; real-time is an unverified integration requirement.'],
403:['CAP-MEDICATION','INN, dosage and manufacturer comparison does not establish interchangeability; preserve formulation/strength/route and jurisdiction-specific approval before clinician/pharmacist substitution.'],
404:['CAP-CDS','Major/moderate/minor interactions require licensed versioned knowledge and current complete medication context; absence of a hit is not proof of safety.'],
405:['CAP-CDS','Disease, pregnancy, lactation and age contraindications require population/applicability and current evidence; no automatic prescribing or exclusion based on missing history.'],
406:['CAP-MEDICATION','Common/rare/serious and frequency claims retain evidence source, formulation and population; observed adverse events are separate from reference knowledge.'],
407:['CAP-MEDICATION','Temperature/humidity/shelf-life instructions retain exact manufacturer/product/formulation release; no generic storage assumption after opening or excursion.'],
408:['CAP-MEDICATION','Expiry observation retains packaging/source and date semantics; notifications do not authorize replacement, treatment interruption or disposal.'],
409:['CAP-MEDICATION','Recall matches require authoritative notice/product/batch identity and update time. Missing batch is unknown, not a negative match; acknowledgement and clinical action are distinct.'],
410:['CAP-MEDICATION','Barcode/QR/package identification is a candidate product link, not authenticity, active-ingredient equivalence or dispensing approval.'],
411:['CAP-AI','Pill/package recognition requires validated image conditions, model uncertainty and human verification; never recommend consumption from an image match.'],
412:['CAP-CDS','Weight/age dose calculations require units, current measurements, exact product/route, organ context, ceilings and independently validated equations. No dose formula or autonomous order is established by this source.'],
413:['CAP-MEDICATION','Pediatric age/weight/restrictions need gestational/chronological context and approved product applicability; no adult-dose scaling or inferred safe threshold.'],
414:['CAP-MEDICATION','Pregnancy trimester and historical safety categories require current qualified evidence and patient context. A category alone cannot rank safety or choose treatment.'],
415:['CAP-MEDICATION','Lactation guidance/alternatives depend on product, infant and exposure context; alternatives are not automatic substitutions and missing evidence is explicit.'],
416:['CAP-NOTIFICATIONS','Daily/weekly/missed-dose reminders follow an authorized schedule and version; delivery/acknowledgement does not prove ingestion and never creates a catch-up instruction.'],
417:['CAP-MEDICATION','Missed-dose guidance needs exact current manufacturer/product regimen and qualified escalation when unclear. Do not synthesize double-dose or timing rules.'],
418:['CAP-MEDICATION','Daily/weekly/monthly adherence distinguishes reported, inferred, unknown and observed exposure; no moral label or inferred clinical effect.'],
419:['CAP-MEDICATION','Treatment history preserves attributed start/stop/correction and reported-versus-prescribed/dispensed/administered distinctions; complete history is not guaranteed.'],
420:['CAP-MEDICATION','Medication chronology references source-owned exposure and version/time rather than rewriting clinical facts; out-of-order corrections remain visible.'],
421:['CAP-MEDICATION','Renewal planning tracks date/supply and recipient reminders; it cannot issue a prescription or promise authorization or pharmacy stock.'],
422:['CAP-MEDICATION','Home quantity/consumption/low-stock tracking retains unit, product and source uncertainty; consumption estimates are not verified administration.'],
423:['CAP-MEDICATION','Usage statistics preserve period, denominator, missingness and source type; counts of packages or reminders are not clinical adherence outcomes.'],
424:['CAP-PRESCRIPTION','Controlled medicine identifiers/date/expiry/quantity require current jurisdiction/issuer authority and immutable amendments; registry presence never grants dispensing or transport permission.'],
426:['CAP-TRAVEL','Customs declaration links country/entry date/medication and original documents with purpose-limited disclosure; storage is not legal acceptance.'],
427:['CAP-TRAVEL','Import/controlled-drug documentation rules must be dated authoritative jurisdiction evidence; no current legal permission is inferred from generic module text.'],
428:['CAP-DOCUMENTS','Translated generic/brand/dose/warning text is a versioned derivative requiring critical-field review; translation must not silently alter units or administration instructions.'],
429:['CAP-MEDICATION','Official indication/contraindication/dose/effect/storage sheets require exact product/source/version and jurisdiction. Displaying text does not validate treatment applicability.'],
430:['CAP-CDS','Allergy cross-check must reconcile ingredient/excipient, reaction and verification status with current medication context. Unknown allergy is not no allergy; professional review governs response.']
};
export const strongRisk=/dose|dosing|prescrib|prescription|interaction|contraindicat|emergenc|\bicu\b|intensive care|oncolog|cancer|neonat|pregnan|surg|suicid|crisis|diagnos|image interpretation|treatment predict|closed.loop/i;
export const privacyRisk=/consent|guardian|confidential|privacy|security|authorization|cross.border|interoperab|patient matching|genomic|genetic|reproductive/i;
export const domainRules=[['oncology',/oncol|cancer|tumou?r|chemotherap/i],['neurology',/neuro|brain|epilep|seizure|cogniti/i],['cardiovascular',/cardio|heart|vascular|hypertension/i],['renal',/renal|nephro|kidney|dialysis/i],['respiratory',/respirat|pulmon|asthma|lung/i],['endocrine',/endocrin|diabet|hormon|thyroid/i],['infection',/infect|microbi|sepsis|antimicrob/i],['reproductive',/fertility|reproduct|gyneco|obstetric|pregnan/i],['musculoskeletal',/orthop|musculoskel|fracture|joint|rehabilit/i],['medication',/medicat|pharmac|prescri|drug|dose/i],['imaging',/imaging|radiolog|ultrasound|\bmri\b|\bct\b/i],['pediatrics',/pediatric|paediatric|child|neonat/i]];
