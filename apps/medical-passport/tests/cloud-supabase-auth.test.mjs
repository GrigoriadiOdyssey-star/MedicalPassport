import test from "node:test";
import assert from "node:assert/strict";
import { SupabaseAuth } from "../supabase-auth.mjs";

const key = "sb_publishable_synthetic-test-key";
const accessToken = "synthetic-access-token-for-auth-test";
const refreshToken = "synthetic-refresh-token-for-auth-test";
const user = { id: "10000000-0000-4000-8000-000000000001", email: "patient@example.test" };

function fakeFetch(reply, status = 200) {
  const calls = [];
  return {
    calls,
    fetchImpl: async (url, init) => {
      calls.push({ url: new URL(url), init });
      return Response.json(reply, { status });
    },
  };
}

test("signup sends patient identity only and reports email confirmation state", async () => {
  const fake = fakeFetch({ user });
  const auth = new SupabaseAuth({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    fetchImpl: fake.fetchImpl,
  });
  const result = await auth.signUp({
    email: " Patient@Example.Test ",
    password: "Synthetic-password-123",
    displayName: "Synthetic Patient",
  });
  assert.deepEqual(result, {
    user,
    session: null,
    confirmationRequired: true,
  });
  assert.equal(fake.calls[0].url.pathname, "/auth/v1/signup");
  assert.deepEqual(JSON.parse(fake.calls[0].init.body), {
    email: "patient@example.test",
    password: "Synthetic-password-123",
    data: { display_name: "Synthetic Patient" },
  });
  assert.equal(fake.calls[0].init.headers.authorization, undefined);
});

test("sign-in, refresh, user validation and logout use Supabase Auth endpoints", async () => {
  const session = {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_at: 1790971200,
    user,
  };
  const calls = [];
  const fake = {
    calls,
    fetchImpl: async (url, init) => {
      const parsed = new URL(url);
      calls.push({ url: parsed, init });
      if (parsed.pathname === "/auth/v1/user") return Response.json(user);
      if (parsed.pathname === "/auth/v1/logout") return new Response(null, { status: 204 });
      return Response.json(session);
    },
  };
  const auth = new SupabaseAuth({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    fetchImpl: fake.fetchImpl,
  });
  assert.deepEqual(await auth.signIn({ email: user.email, password: "synthetic-password" }), {
    user,
    session: { accessToken, refreshToken, expiresAt: session.expires_at },
  });
  assert.equal(fake.calls[0].url.pathname, "/auth/v1/token");
  assert.equal(fake.calls[0].url.searchParams.get("grant_type"), "password");
  assert.deepEqual(await auth.refresh(refreshToken), {
    user,
    session: { accessToken, refreshToken, expiresAt: session.expires_at },
  });
  assert.equal(fake.calls[1].url.searchParams.get("grant_type"), "refresh_token");
  assert.deepEqual(await auth.user(accessToken), { id: user.id, email: user.email });
  assert.equal(fake.calls[2].url.pathname, "/auth/v1/user");
  assert.equal(fake.calls[2].init.headers.authorization, "Bearer " + accessToken);
  assert.equal(await auth.signOut(accessToken), undefined);
  assert.equal(fake.calls[3].url.pathname, "/auth/v1/logout");
});

test("Auth client rejects unsafe keys and hides provider details", async () => {
  assert.throws(() => new SupabaseAuth({
    supabaseUrl: "http://edht-test.supabase.co",
    publishableKey: key,
  }), /CLOUD_URL_INVALID/);
  assert.throws(() => new SupabaseAuth({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: "sb_secret_service-token-long-enough",
  }), /CLOUD_PUBLISHABLE_KEY_REQUIRED/);
  const auth = new SupabaseAuth({
    supabaseUrl: "https://edht-test.supabase.co",
    publishableKey: key,
    fetchImpl: async () => Response.json(
      { message: "secret provider response with synthetic patient details" },
      { status: 401 },
    ),
  });
  await assert.rejects(
    auth.signIn({ email: user.email, password: "synthetic-password" }),
    (error) => {
      assert.equal(error.message, "AUTHENTICATION_FAILED");
      assert.doesNotMatch(error.message, /secret provider response|synthetic patient/);
      return true;
    },
  );
  await assert.rejects(
    auth.signUp({ email: "invalid", password: "short", displayName: "" }),
    /REGISTRATION_INVALID/,
  );
});
