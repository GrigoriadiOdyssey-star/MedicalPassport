import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { JSDOM } from "jsdom";
import { createAlpha4UI } from "../public/alpha4-ui.js";
import { createProductUI } from "../public/product-ui.js";
import { createPharmacyUI } from "../public/pharmacy-ui.js";
import { translate as tr } from "../public/i18n.js";
import * as ui from "../public/ui.js";

const source = fs.readFileSync(new URL("../public/main.js", import.meta.url), "utf8")
  .replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\r?\n/gm, "");
const conversation = "11111111-1111-4111-8111-111111111111";
const second = "22222222-2222-4222-8222-222222222222";
const record = "33333333-3333-4333-8333-333333333333";
async function waitFor(fn) {
  for (let i = 0; i < 100; i++) {
    if (fn()) return;
    await new Promise(resolve => setTimeout(resolve, 5));
  }
  assert.fail("Assistant UI did not reach the expected state");
}
async function setup(t, { mode = "live", storage = true, saved = [], post, locale = "en", query = "" } = {}) {
  const dom = new JSDOM('<a class="skip" href="#main"></a><div id="app"></div><dialog id="dialog"></dialog><div id="toast"></div>',
    { url: "https://edht-synthetic.example.test/#/assistant" + query, runScripts: "outside-only" });
  const w = dom.window, calls = [], threads = new Map();
  w.localStorage.setItem("edht-language", locale);
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  w.HTMLDialogElement.prototype.close = function () { this.open = false; };
  if (saved.length) threads.set(conversation, structuredClone(saved));
  w.__deps = { tr, createAlpha4UI, createProductUI, createPharmacyUI, ...ui };
  w.fetch = async (url, options = {}) => {
    const path = String(url).split("?")[0], method = options.method || "GET";
    const body = options.body ? JSON.parse(options.body) : null;
    calls.push({ path, method, body, headers: options.headers });
    let value;
    if (path === "/api/me") value = { id: "synthetic-owner", name: "Synthetic owner", role: "patient", auth_provider: "supabase", csrf: "synthetic-csrf" };
    else if (path === "/api/assistant/status") value = { mode, storage_ready: storage };
    else if (path === "/api/assistant/conversations" && method === "GET")
      value = { conversations: [...threads.keys()].map(id => ({ id, version: 1, created_at: 1791300000000 })) };
    else if (path === "/api/assistant/conversations" && method === "POST") {
      const id = threads.has(conversation) ? second : conversation;
      threads.set(id, []);
      value = { id, version: 1 };
    } else if (/^\/api\/assistant\/conversations\/[^/]+\/delete$/.test(path)) {
      threads.delete(path.split("/")[4]);
      value = { ok: true };
    } else if (/^\/api\/assistant\/conversations\/[^/]+$/.test(path)) {
      const id = path.split("/")[4];
      value = { id, version: 1, messages: structuredClone(threads.get(id) || []) };
    } else if (path === "/api/assistant") {
      if (post) value = await post(body, threads, calls);
      else {
        const text = "A real server answer for " + body.message + " <img src=x onerror=alert(1)>";
        threads.get(body.conversation_id).push({ id: "u", role: "user", text: body.message },
          { id: "a", role: "assistant", text, source_records: [{ id: record, version: 2 }, { id: "https://untrusted.example", version: 1 }] });
        value = { text, mode: "live", persisted: true, is_generative_ai: true };
      }
    } else if (path === "/api/records/" + record + "/history")
      value = [{ version: 2, body: { name: "Synthetic observation", value: "5.2", unit: "mmol/L" } }];
    else if (path === "/api/logout") value = { ok: true };
    else if (path === "/api/profile") value = { name: "Synthetic owner", email: "synthetic@example.test" };
    else if (["/api/audit", "/api/sessions", "/api/notification-settings"].includes(path)) value = [];
    else if (path === "/api/notifications") value = { items: [], unread: 0 };
    else throw Error("Unexpected UI request: " + method + " " + path);
    return { ok: true, status: 200, json: async () => value };
  };
  w.eval("const {tr,createAlpha4UI,createProductUI,createPharmacyUI,escape:e,screens,route,grantStatus,sourceStatus,errorMessage,groupTimeline}=window.__deps;\n" + source);
  t.after(() => w.close());
  await waitFor(() => w.document.querySelector("[data-assistant-mode]"));
  return { w, calls, threads, send(message) {
    const form = w.document.querySelector("#chat-form");
    form.querySelector("textarea").value = message;
    form.dispatchEvent(new w.SubmitEvent("submit", { bubbles: true, cancelable: true, submitter: form.querySelector("button") }));
  } };
}

test("cloud assistant renders authoritative server text, escapes output, and opens authorized source versions", async t => {
  const { w, calls, send } = await setup(t);
  send("Explain this recorded observation");
  await waitFor(() => w.document.querySelector(".message.assistant"));
  assert.match(w.document.querySelector(".message.assistant").textContent, /A real server answer/);
  assert.doesNotMatch(w.document.querySelector(".message.assistant").textContent, /I can organize recorded information/);
  assert.equal(w.document.querySelectorAll(".message img").length, 0);
  assert.equal(w.document.querySelectorAll('[data-action="assistant-source"]').length, 1);
  w.document.querySelector('[data-action="assistant-source"]').click();
  await waitFor(() => w.document.querySelector("#dialog").open);
  assert.match(w.document.querySelector("#dialog").textContent, /5.2.*mmol\/L/);
  const request = calls.find(c => c.path === "/api/assistant");
  assert.equal(request.headers["x-csrf-token"], "synthetic-csrf");
  assert.match(request.body.request_id, /^[0-9a-f-]{36}$/);
  assert.equal(request.body.conversation_id, conversation);
  assert.deepEqual(Object.keys(request.body).sort(), ["conversation_id", "language", "message", "request_id"]);
  assert.equal(w.localStorage.length, 1);
});

test("reload restores the selected conversation from server storage without sending another AI request", async t => {
  const saved = [{ role: "user", text: "Earlier question" }, { role: "assistant", text: "Earlier server answer" }];
  const { w, calls } = await setup(t, { saved, query: "?conversation=" + conversation });
  assert.match(w.document.querySelector("#main").textContent, /Earlier server answer/);
  assert.equal(calls.filter(c => c.path === "/api/assistant").length, 0);
  assert.ok(calls.some(c => c.path === "/api/assistant/conversations/" + conversation));
});

test("double submission is blocked and an uncertain retry reuses the same request ID", async t => {
  let attempts = 0;
  const { w, calls, send } = await setup(t, { post: async (body, threads) => {
    attempts++;
    if (attempts === 1) {
      threads.get(body.conversation_id).push({ role: "user", text: body.message }, { role: "assistant", text: "Persisted once" });
      throw Error("Synthetic lost response");
    }
    return { text: "Persisted once", mode: "live", persisted: true };
  } });
  send("First question");
  send("Duplicate question");
  await waitFor(() => w.document.querySelector('[data-action="assistant-retry"]'));
  assert.equal(calls.filter(c => c.path === "/api/assistant").length, 1);
  w.document.querySelector('[data-action="assistant-retry"]').click();
  await waitFor(() => w.document.querySelector(".message.assistant")?.textContent === "Persisted once");
  const requests = calls.filter(c => c.path === "/api/assistant");
  assert.equal(requests.length, 2);
  assert.deepEqual(requests[0].body, requests[1].body);
  assert.equal(w.document.querySelectorAll(".message.user").length, 1);
  assert.equal(w.document.querySelector('[data-action="assistant-retry"]'), null);
});

test("logout clears private messages and discards an in-flight response", async t => {
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const { w, calls, send } = await setup(t, { post: async () => {
    await gate;
    return { text: "Must never appear after logout", mode: "live" };
  } });
  send("A private synthetic question");
  await waitFor(() => calls.some(c => c.path === "/api/assistant"));
  w.document.querySelector('[data-action="logout"]').click();
  w.document.querySelector("#confirm-action").click();
  await waitFor(() => w.document.querySelector("#auth-form"));
  release();
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(w.document.querySelector(".message"), null);
  assert.doesNotMatch(w.document.body.textContent, /Must never appear|private synthetic question/);
  assert.equal(calls.filter(c => c.path === "/api/assistant/conversations/" + conversation).length, 0);
});

test("disabled cloud AI uses honest Russian and English labels and performs no paid call", async t => {
  const { w, calls } = await setup(t, { mode: "disabled", storage: false, locale: "ru" });
  assert.match(w.document.querySelector("#main").textContent, /Платные вызовы не разрешены/);
  assert.match(w.document.querySelector("#main").textContent, /хранение диалогов пока не настроено/);
  assert.equal(w.document.querySelector("#chat-form button").disabled, true);
  assert.doesNotMatch(w.document.querySelector("#main").textContent, /aiMode|aiBoundary|aiSummary|aiLab/);
  const language = w.document.querySelector("[data-language]");
  language.value = "en";
  language.dispatchEvent(new w.Event("change", { bubbles: true }));
  await waitFor(() => w.document.querySelector("#main").textContent.includes("Paid calls have not been authorized"));
  assert.equal(calls.filter(c => c.path === "/api/assistant" || c.path === "/api/assistant/conversations").length, 0);
});

test("new conversation and deletion update server storage and clear displayed messages", async t => {
  const { w, threads, calls } = await setup(t, { saved: [{ role: "assistant", text: "Existing server history" }] });
  w.document.querySelector('[data-action="assistant-new"]').click();
  await waitFor(() => w.location.hash.includes(second));
  assert.equal(w.document.querySelector(".message"), null);
  assert.equal(threads.size, 2);
  w.document.querySelector('[data-action="assistant-delete"]').click();
  w.document.querySelector("#confirm-action").click();
  await waitFor(() => threads.size === 1 && w.location.hash === "#/assistant" && !w.document.querySelector("#dialog").open);
  assert.equal(w.location.hash, "#/assistant");
  assert.equal(w.document.querySelector(".message"), null);
  const deletion = calls.find(c => c.path.endsWith("/delete"));
  assert.equal(deletion.method, "POST");
  assert.equal(deletion.headers["x-csrf-token"], "synthetic-csrf");
});

test("provider and budget states remain distinct from a successful answer", async t => {
  const { w, calls } = await setup(t, { mode: "budget-exceeded", storage: true });
  assert.match(w.document.querySelector("[data-assistant-mode]").textContent, /approved AI usage limit/);
  assert.equal(w.document.querySelector("#chat-form button").disabled, true);
  assert.equal(w.document.querySelector(".message.assistant"), null);
  assert.equal(calls.filter(c => c.path === "/api/assistant").length, 0);
});

test("explicit offline answers are rendered honestly as temporary and are not fabricated in persisted history", async t => {
  const { w, calls, send } = await setup(t, {
    mode: "deterministic", saved: [{ role: "assistant", text: "Previously saved answer" }],
    post: async () => ({ text: "A real offline response", mode: "deterministic", persisted: false, is_generative_ai: false }),
  });
  send("Prepare a summary");
  await waitFor(() => w.document.querySelector("#main").textContent.includes("A real offline response"));
  assert.match(w.document.querySelector("#main").textContent, /temporary and is not saved/);
  assert.equal(calls.filter(c => c.path === "/api/assistant/conversations/" + conversation).length, 1);
  w.dispatchEvent(new w.HashChangeEvent("hashchange"));
  await waitFor(() => !w.document.querySelector(".skeleton") && calls.filter(c => c.path === "/api/assistant/conversations/" + conversation).length === 2);
  assert.match(w.document.querySelector("#main").textContent, /Previously saved answer/);
  assert.doesNotMatch(w.document.querySelector("#main").textContent, /A real offline response/);
});
