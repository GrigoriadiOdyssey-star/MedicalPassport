export const parent='4b42871cf4e76845a081b5607d3f361a77b1edf5';
export const domains={
 HEMATO:{ranges:[[4161,4200],[4976,5000]],note:'Hematology preserves age/context-sensitive observations, specimen identity, disease phenotype, blood-product traceability and separately authorized treatment. Shared profiles retain uncertainty and longitudinal correction; compatibility, transfusion, anticoagulation and transplantation cannot be authorized by AI or historical registry entries.'},
 ONCO:{ranges:[[4201,4250]],note:'Oncology preserves tumor-specific diagnosis/classification releases, specimen/pathology/genomic evidence, treatment phases/exposure and response/toxicity provenance. Separate molecular association, trial matching and predicted response from clinical eligibility and authorized therapy. Maintain family/guardian privacy, survivorship and concurrent supportive care.'},
 NEUROONCO:{ranges:[[5126,5150]],note:'Neuro-oncology preserves integrated molecular/pathological classification, imaging and treatment chronology, neurological function and developmental late effects. Shared oncology profiles retain CNS-specific anatomy, acquisition uncertainty and clinician-led decisions; no autonomous diagnosis, surgery, radiotherapy or systemic treatment.'}
};
export const specific={
 4182:'ABO/Rh, antibody screen, crossmatch, extended phenotype/genotype and previous reactions require blood-bank source/version and patient/product verification; a passport is not a compatibility-release authority.',
 4187:'Donor relationship/health/HLA/genetic/infectious evidence belongs to a separately authorized donor identity; recipient care access is not blanket donor-record access.',
 4196:'Draft → review/edit/correct/reject → approve/sign/publish are separate attributable states; preserve the exact source and clinician-approved version.',
 4198:'Research-team verification is required before enrollment; an algorithmic match is not eligibility confirmation or consent.',
 4977:'CBC trends retain age-adjusted reference context, acute illness, source method/time and patient baseline; persistent abnormalities differ from isolated deviations.',
 4981:'Sickle-cell profile retains newborn screening, splenic/stroke/infection context, hydroxyurea exposure, vaccination and organ surveillance; source context does not prescribe treatment.',
 4984:'Retain non-factor therapy, inhibitor status, home treatment, dental/surgery planning and emergency contact as distinct hemostasis profile requirements.',
 4988:'Anticoagulation monitoring retains renal/weight/procedure context, holds and reversal; alerts never execute a hold, reversal or dose adjustment.',
 4989:'Thrombophilia testing decisions remain indication-specific and specialist-led; genetic risk is not an automatic anticoagulation indication.',
 4993:'Blood products require identity, product ID/special requirements, start/end, volume and compatible source release; preserve massive/chronic transfusion contexts and audit.',
 4994:'Reaction surveillance retains timing, product, clinical investigation, blood-bank final classification and future product requirements; propagation preserves uncertainty until adjudicated.',
 4995:'Apheresis records preserve access, device, replacement fluid, anticoagulation, parameters and collected-product context; documentation is separate from machine control.',
 4998:'Preserve explicit prohibitions on autonomous diagnosis, anticoagulation prescription, transfusion order and transplant eligibility; task-specific pediatric validation stays open.',
 5000:'Apheresis, hemovigilance and blood-bank integration extend the common hematology workspace; local MVP language does not authorize clinical deployment.'
};
