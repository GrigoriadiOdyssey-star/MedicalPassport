import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { JSDOM } from "jsdom";
import handler from "../public/api/[...route].mjs";
import * as ui from "../public/ui.js";
import { translate } from "../public/i18n.js";

const mainSource = await readFile(new URL("../public/main.js", import.meta.url), "utf8");
const callbackSource = mainSource.slice(mainSource.indexOf("function readAuthCallback("), mainSource.indexOf('let authError = "";'));
const { readAuthCallback, establishAuthCallback } = new Function(callbackSource + ";return {readAuthCallback,establishAuthCallback};")();

const access = "synthetic-recovery-access-token";
const refresh = "synthetic-recovery-refresh-token";
const uid = "91000000-0000-4000-8000-000000000001";
const host = "preview.example.vercel.app";
const origin = "https://" + host;
const callbackUrl = origin + "/?recovery=1#type=recovery&access_token=" + access + "&refresh_token=" + refresh;
const classify = value => readAuthCallback(new URL(value));

test("cloud callback recognizes recovery and signup without treating URL parameters as authority", async () => {
  for (const type of ["recovery", "signup"]) {
    const callback = classify(callbackUrl.replace("type=recovery", "type=" + type));
    assert.equal(callback.kind, type);
    let calls = 0;
    const result = await establishAuthCallback(async (path, body) => {
      calls++;
      assert.equal(path, "/recover/session");
      assert.deepEqual(body, { access_token: access, refresh_token: refresh });
      return { id: uid, csrf: "synthetic-csrf" };
    }, callback);
    assert.deepEqual(result, { mode: type === "recovery" ? "reset" : "signin", csrf: "synthetic-csrf" });
    assert.equal(calls, 1);
    assert.equal(callback.credentials, null);
  }
});

test("expired, reused, malformed and incomplete links never enable password entry", async () => {
  for (const suffix of [
    "/?recovery=1",
    "/#type=recovery",
    "/#type=recovery&access_token=synthetic",
    "/#access_token=synthetic&refresh_token=synthetic",
    "/#error=access_denied&error_code=otp_expired&error_description=PRIVATE_PROVIDER_TEXT",
    "/?recovery=1&error_code=otp_expired",
  ]) {
    const callback = classify(origin + suffix);
    assert.deepEqual(callback, { kind: "invalid", error: "RECOVERY_LINK_INVALID" });
    let called = false;
    await assert.rejects(establishAuthCallback(async () => { called = true; }, callback), /RECOVERY_LINK_INVALID/);
    assert.equal(called, false);
    assert.doesNotMatch(JSON.stringify(callback), /PRIVATE_PROVIDER_TEXT/);
  }
  assert.deepEqual(classify(origin + "/#/home"), { kind: "none" });
});

test("recovery validation rejects provider denial and preserves provider availability failures", async () => {
  for (const code of ["AUTHENTICATION_FAILED", "AUTH_PROVIDER_UNAVAILABLE"]) {
    const callback = classify(callbackUrl);
    await assert.rejects(establishAuthCallback(async () => { throw Error(code); }, callback),
      { message: code === "AUTHENTICATION_FAILED" ? "RECOVERY_LINK_INVALID" : code });
    assert.equal(callback.credentials, null);
  }
  await assert.rejects(establishAuthCallback(async () => ({ id: uid }), classify(callbackUrl)), /AUTH_RESPONSE_INVALID/);
});

function response() {
  const headers = new Map();
  return { statusCode: 200, headers, setHeader(k,v) { headers.set(k.toLowerCase(),v); },
    getHeader(k) { return headers.get(k.toLowerCase()); },
    end(raw) { this.body = JSON.parse(raw); } };
}
async function withProvider(run, denied = false) {
  const saved = { fetch: globalThis.fetch, url: process.env.SUPABASE_URL, key: process.env.SUPABASE_PUBLISHABLE_KEY };
  const calls = [];
  process.env.SUPABASE_URL = "https://synthetic.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_synthetic_recovery_test";
  globalThis.fetch = async (url, init) => {
    calls.push({ url: new URL(url), init });
    if (denied) return Response.json({ message: "PRIVATE_PROVIDER_TEXT" }, { status: 401 });
    return Response.json({ id: uid, email: "synthetic@example.test" });
  };
  try { await run(calls); } finally {
    globalThis.fetch = saved.fetch;
    for (const [key,value] of [["SUPABASE_URL",saved.url],["SUPABASE_PUBLISHABLE_KEY",saved.key]])
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
}

test("verified cloud callback supplies the exact CSRF needed for password update", async () => {
  await withProvider(async calls => {
    const session = response();
    await handler({ method: "POST", url: "/api/recover/session",
      headers: { host, origin }, body: { access_token: access, refresh_token: refresh } }, session);
    assert.equal(session.statusCode, 200);
    const cookies = session.headers.get("set-cookie");
    const cookie = cookies.map(value => value.split(";")[0]).join("; ");
    const csrfCookie = cookies.find(value => value.startsWith("__Host-edht_csrf="));
    assert.equal(decodeURIComponent(csrfCookie.split(";")[0].split("=")[1]), session.body.csrf);
    assert.equal(session.body.id, uid);
    assert.equal(session.headers.get("cache-control"), "no-store, private");
    assert.doesNotMatch(JSON.stringify(session.body), /synthetic-recovery/);
    assert.ok(cookies.filter(value => !value.startsWith("__Host-edht_csrf=")).every(value => value.includes("HttpOnly") && value.includes("Secure") && value.includes("SameSite=Strict")));

    const update = response();
    await handler({ method: "POST", url: "/api/recover/update",
      headers: { host, origin, cookie, "x-csrf-token": session.body.csrf },
      body: { password: "Synthetic-new-password-123" } }, update);
    assert.equal(update.statusCode, 200);
    assert.equal(calls.filter(call => call.init.method === "PUT").length, 1);
    assert.equal(calls.find(call => call.init.method === "PUT").init.headers.authorization, "Bearer " + access);
  });
});

test("password update never bypasses session validation, origin or CSRF", async () => {
  await withProvider(async calls => {
    for (const headers of [
      { host, origin },
      { host, origin, cookie: "__Host-edht_csrf=synthetic", "x-csrf-token": "synthetic" },
      { host, origin: "https://untrusted.example", cookie: "__Host-edht_access=" + access + "; __Host-edht_csrf=synthetic", "x-csrf-token": "synthetic" },
    ]) {
      const res = response();
      await handler({ method: "POST", url: "/api/recover/update", headers, body: { password: "Synthetic-password-123" } }, res);
      assert.ok([401,403].includes(res.statusCode));
    }
    assert.equal(calls.filter(call => call.init.method === "PUT").length, 0);
  });
  await withProvider(async () => {
    const res = response();
    await handler({ method: "POST", url: "/api/recover/session", headers: {host,origin},
      body: { access_token: access, refresh_token: refresh } }, res);
    assert.equal(res.statusCode, 401);
    assert.equal(res.headers.get("set-cookie"), undefined);
    assert.doesNotMatch(JSON.stringify(res.body), /PRIVATE_PROVIDER_TEXT/);
  }, true);
});

test("recovery request keeps the originating Preview redirect and sanitizes the account response", async () => {
  await withProvider(async calls => {
    const res = response();
    await handler({ method: "POST", url: "/api/recover", headers: {host,origin},
      body: { email: "synthetic@example.test" } }, res);
    assert.equal(res.statusCode, 200);
    assert.equal(calls[0].url.pathname, "/auth/v1/recover");
    assert.equal(calls[0].url.searchParams.get("redirect_to"), origin + "/?recovery=1");
    assert.deepEqual(res.body, {ok:true});
  });
});

async function browserHarness(url, apiReply) {
  const dom = new JSDOM('<a class="skip"></a><div id="app"></div><dialog id="dialog"></dialog><div id="toast"></div>', {url});
  const w = dom.window;
  w.HTMLDialogElement.prototype.close = function () {};
  const calls = [];
  const module = await readFile(new URL("../public/main.js", import.meta.url), "utf8");
  const script = module.replace(/^import[\s\S]*?from\s+"[^"]+";\s*/gm, "");
  const factory = () => ({ submit: async () => false, clear() {}, poll: async () => {}, isPollingPaused: () => false });
  const context = vm.createContext({
    ...ui, e: ui.escape, tr: translate,
    createAlpha4UI:factory, createProductUI:factory, createPharmacyUI:factory,
    window:w, document:w.document, location:w.location, history:w.history, localStorage:w.localStorage,
    URLSearchParams, FormData:w.FormData, setInterval:()=>0, setTimeout:()=>0, clearTimeout:()=>{},
    fetch:async(path,init)=>{calls.push({path,init});return Response.json(await apiReply(path,init));},
  });
  vm.runInContext(script,context);
  const settle = async predicate => {
    for(let i=0;i<50;i++) { if(predicate())return; await new Promise(resolve=>setImmediate(resolve)); }
    assert.fail("browser state did not settle");
  };
  return {dom,w,calls,settle};
}

test("new-password UI uses returned CSRF, never asks for an operator code, and removes link credentials", async () => {
  const h = await browserHarness(callbackUrl, path => path === "/api/recover/session" ? {id:uid,csrf:"synthetic-csrf"} : {ok:true});
  try {
    await h.settle(()=>h.w.document.querySelector('input[name="password"]'));
    assert.equal(h.w.location.href, origin + "/");
    assert.doesNotMatch(h.w.document.body.textContent,/оператор|recovery code/i);
    h.w.document.querySelector('input[name="password"]').value="Synthetic-new-password-123";
    h.w.document.querySelector("form").dispatchEvent(new h.w.Event("submit",{bubbles:true,cancelable:true}));
    await h.settle(()=>h.calls.some(call=>call.path==="/api/logout"));
    assert.equal(h.calls.find(call=>call.path==="/api/recover/update").init.headers["x-csrf-token"],"synthetic-csrf");
  } finally { h.dom.window.close(); }
});

test("invalid-link UI shows a persistent safe error and an email-only retry form without API calls", async () => {
  const h = await browserHarness(origin + "/?recovery=1#error=access_denied&error_code=otp_expired&error_description=PRIVATE_PROVIDER_TEXT",()=>assert.fail("must not authenticate invalid callback"));
  try {
    assert.equal(h.calls.length,0);
    assert.equal(h.w.location.href,origin+"/");
    assert.equal(h.w.document.querySelector('input[name="password"]'),null);
    assert.ok(h.w.document.querySelector('input[name="email"]'));
    assert.match(h.w.document.querySelector("[data-form-error]").textContent,/Запросите новое письмо/);
    assert.doesNotMatch(h.w.document.body.textContent,/PRIVATE_PROVIDER_TEXT|оператор/i);
  } finally { h.dom.window.close(); }
});
