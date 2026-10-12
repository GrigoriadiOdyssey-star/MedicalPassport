import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseModules, duplicateGroups, applyCorrections, classify, sha256 } from './catalog-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');
const stale = [];
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const write = (file, text) => {
  const target = path.join(root, file);
  if (checkOnly) {
    if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== text) stale.push(file);
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, text);
};
const json = (file, value) => write(file, JSON.stringify(value, null, 2) + '\n');
const sourceFile = 'sources/EDHT_Medical_Passport_Product_Bible_5175_Modules_FULL.md';
const sourceBuffer = fs.readFileSync(path.join(root, sourceFile));
const source = sourceBuffer.toString('utf8').replace(/\r\n/g, '\n');
const modules = parseModules(source);
if (modules.length !== 5175) throw new Error(`Expected 5175 modules, got ${modules.length}`);
const config = readJson('config/catalog.json');
const rules = readJson('config/editorial-corrections.json');
const corrected = modules.map(m => ({ ...m, ...applyCorrections(m, rules) }));
const corrections = corrected.flatMap(m => m.applied);
for (const rule of rules) if (!corrections.some(c => c.ruleId === rule.id)) throw new Error(`Unused correction ${rule.id}`);
const titleGroups = duplicateGroups(modules, 'title');
const bodyGroups = duplicateGroups(modules, 'body');
const registry = corrected.map((m, index) => {
  const start = Math.floor((m.id - 1) / 100) * 100 + 1;
  const end = Math.min(start + 99, modules.length);
  const file = `docs/modules/${String(start).padStart(4, '0')}-${String(end).padStart(4, '0')}.md`;
  return {
    id: m.id, title: m.title, sourceFile, sourceLine: m.sourceLine,
    sourceBodySha256: sha256(modules[index].body), correctedBodySha256: sha256(m.body),
    sourceWordCount: m.wordCount, document: file, anchor: `module-${m.id}`,
    ...classify(m, config.p0ModuleIds),
    correctionIds: m.applied.map(c => c.ruleId),
    duplicateTitleModuleIds: titleGroups.find(ids => ids.includes(m.id))?.filter(id => id !== m.id) ?? [],
    exactDuplicateBodyModuleIds: bodyGroups.find(ids => ids.includes(m.id))?.filter(id => id !== m.id) ?? [],
  };
});
const summary = {
  schemaVersion: 1, reviewDate: config.reviewDate, sourceFile, sourceSha256: sha256(sourceBuffer),
  moduleCount: modules.length, firstModuleId: modules[0].id, lastModuleId: modules.at(-1).id,
  duplicateTitleGroups: titleGroups.length, duplicateBodyGroups: bodyGroups.length,
  modulesUnder50Words: modules.filter(m => m.wordCount < 50).length,
  modulesUnder100Words: modules.filter(m => m.wordCount < 100).length,
  sourceWordsInModuleBodies: modules.reduce((n, m) => n + m.wordCount, 0),
  wordCountMethod: 'Sequences of Unicode letters, numbers and underscore in module bodies, including inner headings; Markdown punctuation is not counted as words.',
  correctionRules: rules.length, correctedModules: new Set(corrections.map(c => c.moduleId)).size,
  replacementOccurrences: corrections.reduce((n, c) => n + c.occurrences, 0),
  p0SpecificationInputs: registry.filter(m => m.phase === 'P0-specification-input').length,
  implementationStatus: 'No application source code was present in the input archive. Specifications are not an implemented product.',
  method: 'Full-corpus structural/lexical checks; targeted semantic audit of core and risk-bearing content. Keyword flags are review candidates, not clinical or legal classification.',
};
json('data/modules.json', registry);
json('data/audit-summary.json', summary);
json('data/duplicates.json', { titleGroups, exactBodyGroups: bodyGroups, method: 'Lowercase whitespace-normalized titles; exact trimmed LF-normalized bodies, including inner headings.' });
json('data/corrections-applied.json', corrections);
const intro = `# EDHT — Medical Passport: исправленная Product Bible\n\nРедакция ${config.reviewDate}. Сохранены все 5 175 идентификаторов. Исходные описания являются предложениями, а не свидетельством реализации или клинической валидации.\n\nНормативные для этой редакции ограничения и критерии: [область продукта](product/product-scope.md), [клиническая безопасность](safety/clinical-safety.md), [согласия и приватность](safety/privacy-and-consent.md), [инженерные спецификации](engineering/architecture.md). При противоречии прежних описаний применяются эти уточнения.\n\nОригинал сохранён отдельно как исторический источник. Принятые редакторские изменения воспроизводятся из config/editorial-corrections.json; полный журнал — data/corrections-applied.json.\n\n`;
const render = (module, base) => {
  const row = registry[module.id - 1];
  const flags = row.reviewFlags.length ? row.reviewFlags.join(', ') : 'общие продуктовые и технические требования';
  const body = module.body.replace(/^(#{1,6}) /gm, (_, hashes) => '#'.repeat(Math.min(6, hashes.length + 2)) + ' ').replace(/^• /gm, '- ');
  return `<a id="module-${module.id}"></a>\n\n## Module ${module.id} — ${module.title}\n\n> Статус редакции: спецификация, реализация не подтверждена. Фаза: ${row.phase}. Обязательное уточнение: [границы продукта](${base}product/product-scope.md), [безопасность](${base}safety/clinical-safety.md), [доступ к данным](${base}safety/privacy-and-consent.md). Направления проверки: ${flags}.\n\n${body}\n\n`;
};
write('docs/product-bible.md', intro + corrected.map(m => render(m, '')).join(''));
const indexRows = [];
for (let start = 0; start < corrected.length; start += 100) {
  const chunk = corrected.slice(start, start + 100);
  const file = registry[start].document;
  write(file, `# EDHT — модули ${chunk[0].id}–${chunk.at(-1).id}\n\n[Реестр](../module-index.md) · [Область продукта](../product/product-scope.md)\n\n` + chunk.map(m => render(m, '../')).join(''));
  indexRows.push(`| ${chunk[0].id}–${chunk.at(-1).id} | [Открыть](${file.replace('docs/', '')}) |`);
}
write('docs/module-index.md', '# Реестр 5 175 модулей EDHT\n\nВсе исходные идентификаторы сохранены. Машиночитаемый реестр: [modules.json](../data/modules.json). Одинаковые названия не объединены автоматически: [группы дубликатов](../data/duplicates.json).\n\n| Модули | Документ |\n|---|---|\n' + indexRows.join('\n') + '\n');
if (stale.length) throw new Error(`Generated files are missing or stale: ${stale.join(', ')}. Run npm run build.`);
if (!checkOnly) console.log(JSON.stringify(summary, null, 2));
