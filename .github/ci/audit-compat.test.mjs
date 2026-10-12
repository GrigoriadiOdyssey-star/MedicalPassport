import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { transformFrozenAudit } from './audit-compat.mjs';
import { checkBaselineUnchanged } from '../../scripts/master09.mjs';

// Exercise the actual loaded production guard, not a duplicate implementation.
// Its lexical repository path and baseline are rebound to a disposable fixture.
// Function text comes solely from the hash-pinned, trusted repository module.
const executeGuard = new Function('execFileSync', 'baseline', 'root',
  `return (${checkBaselineUnchanged.toString()})();`);

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'edht-audit-guard-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', args, {
    cwd: root, encoding: 'utf8', timeout: 10000, stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
  git('init', '-q');
  git('config', 'user.name', 'EDHT synthetic CI');
  git('config', 'user.email', 'ci@example.invalid');
  git('config', 'core.filemode', 'true');
  const write = (name, text) => {
    const destination = path.join(root, name);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, text);
  };
  write('docs/canonical/old.md', 'Original immutable canonical evidence\n');
  write('sources/original.md', 'Original source\n');
  write('audit/master/original.json', '{"reviewed":false}\n');
  git('add', '.');
  git('commit', '-qm', 'synthetic immutable baseline');
  const baseline = git('rev-parse', 'HEAD');
  return {
    root, git, write,
    check: (ref = baseline) => executeGuard(execFileSync, ref, root),
  };
}

test('archival adapter permits an unchanged baseline and tracked additive documents', t => {
  const f = fixture(t);
  assert.doesNotThrow(() => f.check());
  f.write('docs/canonical/master10/new.md', 'New addendum, not an old-file change\n');
  f.git('add', '.');
  assert.doesNotThrow(() => f.check());
});

test('archival adapter still rejects a modified historical document', t => {
  const f = fixture(t);
  f.write('docs/canonical/old.md', 'Modified evidence\n');
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter still rejects a deleted historical document', t => {
  const f = fixture(t);
  fs.unlinkSync(path.join(f.root, 'docs/canonical/old.md'));
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter still rejects a renamed historical document', t => {
  const f = fixture(t);
  f.git('mv', 'docs/canonical/old.md', 'docs/canonical/renamed.md');
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter still rejects replacement by a symbolic link', t => {
  const f = fixture(t);
  const name = path.join(f.root, 'docs/canonical/old.md');
  fs.unlinkSync(name);
  fs.symlinkSync('../../sources/original.md', name);
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter still rejects historical executable-mode changes', t => {
  const f = fixture(t);
  fs.chmodSync(path.join(f.root, 'docs/canonical/old.md'), 0o755);
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter still rejects original source and audit evidence changes', t => {
  const f = fixture(t);
  f.write('sources/original.md', 'Altered original\n');
  f.write('audit/master/original.json', '{"reviewed":true}\n');
  assert.throws(() => f.check(), /Cached baseline invalidated/);
});

test('archival adapter fails closed when the baseline cannot be resolved', t => {
  const f = fixture(t);
  assert.throws(() => f.check('missing-synthetic-baseline'));
});

test('archival adapter applies only the declared one-line correction to the pinned blob', () => {
  const source = fs.readFileSync(new URL('../../scripts/master09.mjs', import.meta.url), 'utf8');
  const expected = source.replace(
    "['diff','--name-only',baseline,'--','sources'",
    "['diff','--name-only','--diff-filter=MDRT',baseline,'--','sources'",
  );
  assert.equal(transformFrozenAudit(source), expected);
  assert.match(checkBaselineUnchanged.toString(), /--diff-filter=MDRT/);
});

test('archival adapter rejects any drift of its frozen source instead of silently adapting', () => {
  const source = fs.readFileSync(new URL('../../scripts/master09.mjs', import.meta.url), 'utf8');
  assert.throws(() => transformFrozenAudit(source + '\n'), /source blob changed/);
  assert.throws(() => transformFrozenAudit('export function checkBaselineUnchanged() {}'), /source blob changed/);
});
