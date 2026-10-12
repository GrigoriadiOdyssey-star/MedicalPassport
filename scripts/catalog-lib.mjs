import { createHash } from 'node:crypto';

export const sha256 = value => createHash('sha256').update(value).digest('hex');

export function parseModules(text) {
  const headers = [...text.matchAll(/^## Module (\d+) — (.+)\r?$/gm)];
  if (!headers.length) throw new Error('No module headings found');
  let previousIndex = 0;
  let sourceLine = 1;
  const modules = headers.map((match, index) => {
    sourceLine += (text.slice(previousIndex, match.index).match(/\n/g) ?? []).length;
    previousIndex = match.index;
    const next = headers[index + 1];
    const body = text.slice(match.index + match[0].length, next?.index ?? text.length).trim();
    return {
      id: Number(match[1]), title: match[2].trim(), body,
      sourceLine,
      wordCount: (body.match(/[\p{L}\p{N}_]+/gu) ?? []).length,
    };
  });
  const ids = modules.map(m => m.id);
  if (new Set(ids).size !== ids.length) throw new Error('Duplicate module IDs');
  if (ids.some((id, index) => id !== index + 1)) throw new Error('Module sequence must begin at 1 and be contiguous');
  return modules;
}

export function duplicateGroups(modules, field) {
  const groups = new Map();
  for (const module of modules) {
    const key = field === 'title' ? module.title.toLowerCase().replace(/\s+/g, ' ').trim() : sha256(module.body);
    groups.set(key, [...(groups.get(key) ?? []), module.id]);
  }
  return [...groups.values()].filter(ids => ids.length > 1);
}

export function applyCorrections(module, rules) {
  let body = module.body;
  const applied = [];
  for (const rule of rules.filter(r => r.moduleId === module.id || r.moduleId === '*')) {
    if (!rule.old || !rule.new || rule.old === rule.new) throw new Error(`Invalid correction ${rule.id}`);
    const count = body.split(rule.old).length - 1;
    if (!count) {
      if (rule.moduleId !== '*') throw new Error(`Correction ${rule.id}: source text not found in module ${module.id}`);
      continue;
    }
    body = body.split(rule.old).join(rule.new);
    applied.push({ ruleId: rule.id, moduleId: module.id, occurrences: count, reason: rule.reason });
  }
  return { body, applied };
}

export function classify(module, p0Ids) {
  const text = `${module.title}\n${module.body}`;
  const reviewFlags = [];
  if (/\bAI\b|artificial intelligence|machine learning|predict|digital twin/i.test(text)) reviewFlags.push('ai-and-clinical-safety');
  if (/pediatric|paediatric|child|adolescent|guardian|parental/i.test(text)) reviewFlags.push('minors-and-guardians');
  if (/mental|psychiatr|genom|genetic|substance|reproductive|sexual/i.test(text)) reviewFlags.push('sensitive-data-segmentation');
  if (/prescrib|prescription|dosage|treatment|therap|diagnos|emergency|medicine|drug/i.test(text)) reviewFlags.push('clinical-intended-use');
  if (/FHIR|HL7|DICOM|EHDS|national health|interoperab|cross.border/i.test(text)) reviewFlags.push('interoperability-and-jurisdiction');
  return {
    phase: p0Ids.includes(module.id) ? 'P0-specification-input' : 'future-candidate',
    specificationStatus: 'proposed-not-implemented',
    reviewFlags,
  };
}
