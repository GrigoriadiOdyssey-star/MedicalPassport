import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { sha256 } from './catalog-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  if (['.git', 'node_modules'].includes(entry.name)) return [];
  const file = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const files = walk(root);
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
for (const file of files.filter(f => f.endsWith('.json'))) {
  try { JSON.parse(fs.readFileSync(file, 'utf8')); } catch (error) { failures.push(`${path.relative(root, file)}: ${error.message}`); }
}
const provenance = readJson('sources/provenance.json');
check(sha256(fs.readFileSync(path.join(root, provenance.extractedFile))) === provenance.extractedFileSha256, 'Original source SHA-256 mismatch');
try { execFileSync(process.execPath, ['scripts/build-catalog.mjs', '--check'], { cwd: root, stdio: 'pipe' }); }
catch (error) { failures.push(`Catalog reproducibility: ${error.stderr?.toString() || error.message}`); }
try { console.log(execFileSync(process.execPath, ['scripts/check-contract.cjs'], { cwd: root, encoding: 'utf8' }).trim()); }
catch (error) { failures.push(`Targeted API contract checks: ${error.stderr?.toString() || error.message}`); }

const markdown = files.filter(f => f.endsWith('.md') && !f.includes(`${path.sep}sources${path.sep}`));
let links = 0;
for (const file of markdown) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/\[[^\]\n]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const href = match[1].replace(/^<|>$/g, '');
    if (/^[a-z][a-z\d+.-]*:/i.test(href)) continue;
    const [relative, anchor] = href.split('#');
    const target = relative ? path.resolve(path.dirname(file), decodeURIComponent(relative)) : file;
    links++;
    check(target.startsWith(root + path.sep) || target === root, `${file}: link escapes repository ${href}`);
    check(fs.existsSync(target), `${path.relative(root, file)}: missing link ${href}`);
    if (anchor?.startsWith('module-') && fs.existsSync(target)) {
      check(fs.readFileSync(target, 'utf8').includes(`id="${anchor}"`), `${path.relative(root, file)}: missing module anchor ${href}`);
    }
  }
  check(!text.includes('\ufffd'), `${path.relative(root, file)} contains Unicode replacement character`);
}

const openapiFile = files.find(f => /openapi.*\.json$/i.test(path.basename(f)) && f.includes(`${path.sep}specs${path.sep}`));
check(Boolean(openapiFile), 'OpenAPI JSON contract is missing');
let operations = 0;
if (openapiFile) {
  const api = JSON.parse(fs.readFileSync(openapiFile, 'utf8'));
  check(/^3\.1\./.test(api.openapi), 'Expected OpenAPI 3.1');
  const operationIds = new Set();
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    if (value.$ref) {
      check(value.$ref.startsWith('#/'), `External $ref must be explicitly reviewed: ${value.$ref}`);
      if (value.$ref.startsWith('#/')) {
        const found = value.$ref.slice(2).split('/').map(v => v.replace(/~1/g, '/').replace(/~0/g, '~')).reduce((obj, key) => obj?.[key], api);
        check(found !== undefined, `Unresolved $ref ${value.$ref}`);
      }
    }
    Object.values(value).forEach(visit);
  }
  visit(api);
  for (const [route, item] of Object.entries(api.paths ?? {})) {
    for (const method of ['get', 'put', 'post', 'delete', 'patch', 'head', 'options']) {
      const op = item[method];
      if (!op) continue;
      operations++;
      check(Boolean(op.operationId) && !operationIds.has(op.operationId), `Missing/duplicate operationId at ${method} ${route}`);
      operationIds.add(op.operationId);
      check(Boolean(op.responses) && Object.keys(op.responses).length > 0, `Missing responses at ${route}`);
      check(op.security !== undefined || api.security !== undefined, `Security not declared at ${route}`);
      const params = [...(item.parameters ?? []), ...(op.parameters ?? [])].map(p => p.$ref ? p.$ref.slice(2).split('/').reduce((obj, key) => obj?.[key], api) : p);
      for (const [, name] of route.matchAll(/\{([^}]+)\}/g)) check(params.some(p => p?.name === name && p.in === 'path' && p.required === true), `Missing required path parameter ${route}: ${name}`);
    }
  }
}

const secretPatterns = [new RegExp('-----BEGIN ' + '(?:RSA |EC |OPENSSH )?PRIVATE KEY-----'), new RegExp('glpat-' + '[A-Za-z0-9_-]{20,}')];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  check(!secretPatterns.some(pattern => pattern.test(text)), `Possible credential in ${path.relative(root, file)}`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`PASS: source integrity; reproducible 5175-module catalog; ${links} local links; JSON and ${operations} OpenAPI operations; high-confidence credential patterns. These are document/contract checks, not application or clinical validation.`);
}
