import test from "node:test";
import assert from "node:assert/strict";
import { SupabaseAuth } from "../supabase-auth.mjs";

const url = "https://example.supabase.co";
const key = "sb_publishable_test_public_key_123";

test("password recovery requests only email and a validated HTTPS redirect", async () => {
  let captured;
  const client = new SupabaseAuth({ supabaseUrl: url, publishableKey: key, fetchImpl: async (request, init) => {
    captured = { url: String(request), init };
    return new Response(null, { status: 204 });
  }});
  assert.deepEqual(await client.requestPasswordReset({ email: "Patient@Example.org", redirectTo: "https://edht.example/?recovery=1" }), { accepted: true });
  assert.match(captured.url, /auth\/v1\/recover\?redirect_to=/);
  assert.deepEqual(JSON.parse(captured.init.body), { email: "patient@example.org" });
  await assert.rejects(client.requestPasswordReset({ email: "a@b.test", redirectTo: "http://edht.example" }), /RECOVERY_REDIRECT_INVALID/);
});

test("password update requires a bearer session and a strong password length", async () => {
  let captured;
  const client = new SupabaseAuth({ supabaseUrl: url, publishableKey: key, fetchImpl: async (request, init) => {
    captured = init;
    return new Response(JSON.stringify({ id: "user-1", email: "p@example.org" }), { status: 200, headers: { "content-type": "application/json" } });
  }});
  assert.deepEqual(await client.updatePassword("x".repeat(24), "long-enough-password"), { id: "user-1", email: "p@example.org" });
  assert.equal(captured.method, "PUT");
  assert.equal(captured.headers.authorization, "Bearer " + "x".repeat(24));
  await assert.rejects(client.updatePassword("x".repeat(24), "short"), /PASSWORD_INVALID/);
});

test("signup callback is validated and attached to the Auth redirect", async () => {
  let captured;
  const client = new SupabaseAuth({ supabaseUrl: url, publishableKey: key, fetchImpl: async (request, init) => {
    captured = { url: String(request), init };
    return new Response(JSON.stringify({ user: { id: "user-2", email: "p@example.org" }, access_token: "a".repeat(24), refresh_token: "r".repeat(24) }), { status: 200, headers: { "content-type": "application/json" } });
  }});
  const result = await client.signUp({ email: "P@example.org", password: "long-enough-password", displayName: "Patient", redirectTo: "https://preview.example/?confirmation=1" });
  assert.match(captured.url, /auth\/v1\/signup\?redirect_to=/);
  assert.equal(result.confirmationRequired, false);
  await assert.rejects(client.signUp({ email: "P@example.org", password: "long-enough-password", displayName: "Patient", redirectTo: "http://evil.example.test" }), /AUTH_PROVIDER_UNAVAILABLE|RECOVERY_REDIRECT_INVALID/);
});
