import test from "node:test";
import assert from "node:assert/strict";
import handler from "../public/api/[...route].mjs";

function response() {
  const headers = new Map();
  return {
    headers,
    statusCode: 200,
    setHeader(name, value) { headers.set(name.toLowerCase(), value); },
    getHeader(name) { return headers.get(name.toLowerCase()); },
    end(value) { this.body = value; },
  };
}

test("Vercel Auth route imports and fails closed when public Supabase config is absent", async () => {
  const previousUrl = process.env.SUPABASE_URL;
  const previousKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  delete process.env.SUPABASE_URL;
  delete process.env.SUPABASE_PUBLISHABLE_KEY;
  try {
    const res = response();
    await handler({ method: "GET", url: "/api/me", headers: { host: "preview.example.vercel.app" } }, res);
    assert.equal(res.statusCode, 503);
    assert.deepEqual(JSON.parse(res.body), { error: "CLOUD_URL_INVALID" });
    assert.equal(res.headers.get("cache-control"), "no-store, private");
  } finally {
    if (previousUrl === undefined) delete process.env.SUPABASE_URL; else process.env.SUPABASE_URL = previousUrl;
    if (previousKey === undefined) delete process.env.SUPABASE_PUBLISHABLE_KEY; else process.env.SUPABASE_PUBLISHABLE_KEY = previousKey;
  }
});

test("Vercel Auth route rejects cross-origin mutations before contacting Supabase", async () => {
  const res = response();
  await handler({
    method: "POST",
    url: "/api/login",
    headers: { host: "preview.example.vercel.app", origin: "https://attacker.example" },
    body: { email: "patient@example.test", password: "irrelevant" },
  }, res);
  assert.equal(res.statusCode, 403);
  assert.deepEqual(JSON.parse(res.body), { error: "INVALID_ORIGIN" });
});
