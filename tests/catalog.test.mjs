import test from 'node:test';
import assert from 'node:assert/strict';
import { parseModules, applyCorrections, duplicateGroups, classify } from '../scripts/catalog-lib.mjs';

test('parser preserves embedded headings and rejects missing or duplicate IDs', () => {
  const modules = parseModules('# Book\n## Module 1 — Example\n# Inner title\nText\n## Module 2 — Other\nOther body');
  assert.equal(modules[0].sourceLine, 2);
  assert.match(modules[0].body, /# Inner title/);
  assert.throws(() => parseModules('## Module 1 — A\nA\n## Module 3 — C\nC'), /contiguous/);
  assert.throws(() => parseModules('## Module 1 — A\nA\n## Module 1 — B\nB'), /Duplicate/);
});

test('editorial corrections fail closed if exact evidence changes', () => {
  const rule = { id: 'test', moduleId: 1, old: 'unsafe promise', new: 'review required' };
  assert.equal(applyCorrections({ id: 1, body: 'unsafe promise' }, [rule]).body, 'review required');
  assert.throws(() => applyCorrections({ id: 1, body: 'changed source' }, [rule]), /not found/);
  assert.equal(applyCorrections({ id: 2, body: 'unsafe promise' }, [rule]).body, 'unsafe promise');
});

test('same title is not treated as same body or silently merged', () => {
  const modules = [{ id: 1, title: 'Same title', body: 'A' }, { id: 2, title: 'same  title', body: 'B' }];
  assert.deepEqual(duplicateGroups(modules, 'title'), [[1, 2]]);
  assert.deepEqual(duplicateGroups(modules, 'body'), []);
});

test('risk hints never assign implementation or clinical validation', () => {
  const result = classify({ id: 5174, title: 'Pediatric Mental Health AI', body: '' }, []);
  assert.equal(result.phase, 'future-candidate');
  assert.equal(result.specificationStatus, 'proposed-not-implemented');
  assert.ok(result.reviewFlags.includes('minors-and-guardians'));
  assert.ok(result.reviewFlags.includes('sensitive-data-segmentation'));
});
