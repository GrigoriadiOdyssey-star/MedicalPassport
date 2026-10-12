import fs from "node:fs";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
const root = new URL("../", import.meta.url),
  read = (p) => JSON.parse(fs.readFileSync(new URL(p, root)));
const c = read("product_implementation_coverage.json"),
  r = read(c.source_registry).records;
assert.equal(c.items.length, 33);
assert.equal(new Set(c.items.map((x) => x.canonical_owner)).size, 33);
assert.deepEqual(
  c.items.map((x) => x.canonical_owner).sort(),
  r.map((x) => x.owner).sort(),
);
const valid = new Set([
  "IMPLEMENTED",
  "PARTIALLY_IMPLEMENTED",
  "UI_ONLY",
  "BACKEND_ONLY",
  "NOT_IMPLEMENTED",
  "BLOCKED_EXTERNAL",
  "POST_MVP",
  "RESEARCH",
]);
let specs = 0;
const counts = {};
for (const x of c.items) {
  assert.ok(valid.has(x.status));
  counts[x.status] = (counts[x.status] || 0) + 1;
  assert.ok(x.missing_functions.length);
  assert.notEqual(x.status, "IMPLEMENTED");
  assert.ok(x.specifications.length);
  for (const s of x.specifications) {
    assert.equal(
      createHash("sha256")
        .update(fs.readFileSync(new URL(s.path, root)))
        .digest("hex"),
      s.sha256,
    );
    specs++;
  }
  for (const p of x.profiles)
    assert.ok(x.specifications.some((s) => s.path === p.path));
  for (const p of x.evidence) assert.ok(fs.existsSync(new URL(p, root)), p);
}
assert.ok(fs.existsSync(new URL(c.guideline_profile.specification, root)));
assert.equal(c.guideline_profile.mvp_dependency, false);
console.log(
  JSON.stringify(
    {
      result: "PASS",
      owners: c.items.length,
      specification_references: specs,
      counts,
    },
    null,
    2,
  ),
);
