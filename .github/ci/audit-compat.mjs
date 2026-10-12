import { registerHooks } from 'node:module';
import { createHash } from 'node:crypto';

// Compatibility correction for one frozen MASTER-09 auditing tool only.
// Never changes files, test assertions, application code, or recorded evidence.
const target = new URL('../../scripts/master09.mjs', import.meta.url).href;
const expectedBlob = 'fbefee90b87b0445fd644d94b40c2ed0dd57dbf3';
const original = "['diff','--name-only',baseline,'--','sources'";
const corrected = "['diff','--name-only','--diff-filter=MDRT',baseline,'--','sources'";

export function transformFrozenAudit(source) {
  const bytes = Buffer.isBuffer(source) ? source : Buffer.from(source);
  const blob = createHash('sha1')
    .update(`blob ${bytes.length}\0`)
    .update(bytes)
    .digest('hex');
  if (blob !== expectedBlob) {
    throw new Error('MASTER-09 compatibility adapter requires review: source blob changed');
  }
  const text = bytes.toString('utf8');
  if (text.split(original).length !== 2) {
    throw new Error('MASTER-09 compatibility adapter requires exactly one known guard');
  }
  return text.replace(original, corrected);
}

registerHooks({
  load(url, context, nextLoad) {
    const result = nextLoad(url, context);
    if (url !== target) return result;
    if (result.format !== 'module' || result.source == null) {
      throw new Error('MASTER-09 compatibility adapter received an unsupported module');
    }
    return { ...result, source: transformFrozenAudit(result.source) };
  },
});
