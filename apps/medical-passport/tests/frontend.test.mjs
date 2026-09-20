import { createAlpha4UI } from "../public/alpha4-ui.js";
import { createProductUI } from "../public/product-ui.js";
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { JSDOM } from "jsdom";
import { translate, strings } from "../public/i18n.js";
import * as ui from "../public/ui.js";
const source = fs
  .readFileSync(new URL("../public/main.js", import.meta.url), "utf8")
  .replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\r?\n/gm, "");
async function waitFor(fn) {
  for (let i = 0; i < 100; i++) {
    if (fn()) return;
    await new Promise((r) => setTimeout(r, 5));
  }
  assert.fail("UI did not reach expected state");
}
async function setup(t, { role = "patient", failScreen = false } = {}) {
  const dom = new JSDOM(
      '<a class="skip" href="#main"></a><div id="app"></div><dialog id="dialog"></dialog><div id="toast"></div>',
      { url: "http://127.0.0.1:4173/#/home", runScripts: "outside-only" },
    ),
    w = dom.window;
  w.localStorage.setItem("edht-language", "en");
  w.HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  w.HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  w.__deps = { tr: translate, createProductUI, createAlpha4UI, ...ui };
  let records = [],
    calls = [];
  const me = {
    name: "Synthetic Patient",
    role,
    csrf: "csrf",
    id: "u",
    patient_id: "p",
    email: "p@example.test",
  };
  w.fetch = async (url, opt = {}) => {
    const path = String(url).split("?")[0];
    calls.push({ path, opt });
    let value = {};
    if (path === "/api/me") value = me;
    else if (path === "/api/appointments") value = [];
    else if (path === "/api/views/home" || path === "/api/views/passport")
      value = {
        profile: me,
        counts: [],
        emergency: null,
        critical_allergies: [],
        recent: [],
        documents: [],
        access: [],
      };
    else if (path.startsWith("/api/views/")) {
      if (failScreen)
        return {
          ok: false,
          status: 500,
          json: async () => ({ error: "INTERNAL_ERROR" }),
        };
      value = { records, documents: [] };
    } else if (path === "/api/records") {
      const b = JSON.parse(opt.body);
      value = {
        id: "record-1",
        ...b,
        version: 1,
        source: "patient_reported",
        created_at: 1,
      };
      records.push(value);
    } else if (path === "/api/doctors") value = [];
    else if (
      path === "/api/grants" ||
      path === "/api/audit" ||
      path === "/api/notification-settings" ||
      path === "/api/sessions"
    )
      value = [];
    else if (path === "/api/notifications") value = { items: [], unread: 0 };
    else if (path === "/api/reminders") value = { plans: [], doses: [] };
    else if (path === "/api/assistant")
      value = { source_records: [], is_generative_ai: false };
    return { ok: true, status: 200, json: async () => value };
  };
  w.eval(
    "const {tr,createProductUI,createAlpha4UI,escape:e,screens,route,grantStatus,sourceStatus,errorMessage,groupTimeline}=window.__deps;\n" +
      source,
  );
  t.after(() => w.close());
  await waitFor(() => w.document.querySelector("h1"));
  return {
    w,
    calls,
    click: (selector) => w.document.querySelector(selector).click(),
    navigate: async (screen) => {
      w.location.hash = "/" + screen;
      await waitFor(
        () =>
          w.document.querySelector(".topbar-title")?.textContent ===
          translate(screen, "en"),
      );
      await waitFor(() => !w.document.querySelector(".skeleton"));
    },
  };
}
test("i18n keys have two languages; unsafe strings are escaped and roles cannot select patient screens", () => {
  for (const [key, values] of Object.entries(strings)) {
    assert.equal(values.length, 2, key);
    assert.ok(
      values.every((v) => typeof v === "string" && v.length),
      key,
    );
  }
  assert.equal(
    ui.escape('<img onerror="x">'),
    "&lt;img onerror=&quot;x&quot;&gt;",
  );
  assert.equal(ui.route("#/passport", "doctor"), "doctor");
  assert.equal(ui.route("#/unknown", "patient"), "home");
  assert.equal(ui.sourceStatus("clinician_verified"), "reported");
});
test("grant status precedence preserves revoke, expiry and single-use distinctions", () => {
  const g = { revoked_at: null, expires_at: 100, one_time: 1, used_at: null };
  assert.equal(ui.grantStatus(g, 0), "active");
  assert.equal(ui.grantStatus({ ...g, used_at: 1 }, 0), "used");
  assert.equal(ui.grantStatus(g, 100), "expired");
  assert.equal(ui.grantStatus({ ...g, revoked_at: 2 }, 100), "revoked");
});
test("navigation renders one screen, empty state and modal validated record creation", async (t) => {
  const { w, calls, navigate, click } = await setup(t);
  assert.equal(w.document.querySelectorAll(".nav a").length, 7);
  assert.match(
    w.document.querySelector("#main").textContent,
    /Synthetic Patient/,
  );
  await navigate("allergy");
  assert.match(
    w.document.querySelector("#main").textContent,
    /No allergies recorded yet/,
  );
  assert.doesNotMatch(
    w.document.querySelector("#main").textContent,
    /Upload document/,
  );
  click('[data-action="add-record"]');
  let form = w.document.querySelector("#record-form");
  form.dispatchEvent(
    new w.SubmitEvent("submit", {
      bubbles: true,
      cancelable: true,
      submitter: form.querySelector("[type=submit]"),
    }),
  );
  assert.equal(
    form.querySelector("[name=name]").getAttribute("aria-invalid"),
    "true",
  );
  form.querySelector("[name=name]").value = "<script>fictional</script>";
  form.querySelector("[name=reaction]").value = "Synthetic";
  form.dispatchEvent(
    new w.SubmitEvent("submit", {
      bubbles: true,
      cancelable: true,
      submitter: form.querySelector("[type=submit]"),
    }),
  );
  await waitFor(() => w.document.querySelector(".record-card"));
  assert.equal(
    w.document.querySelector(".record-card h2").textContent,
    "<script>fictional</script>",
  );
  assert.equal(w.document.querySelectorAll(".record-card script").length, 0);
  const post = calls.find((c) => c.path === "/api/records");
  assert.equal(post.opt.headers["x-csrf-token"], "csrf");
  assert.equal(JSON.parse(post.opt.body).kind, "allergy");
});
test("language switch re-renders labels; unknown server errors are friendly with retry", async (t) => {
  const { w, navigate } = await setup(t, { failScreen: true });
  await navigate("medication");
  assert.match(
    w.document.querySelector("#main").textContent,
    /service could not complete/,
  );
  assert.ok(w.document.querySelector("[data-action=retry]"));
  const select = w.document.querySelector("[data-language]");
  select.value = "ru";
  select.dispatchEvent(new w.Event("change", { bubbles: true }));
  await waitFor(
    () =>
      w.document.documentElement.lang === "ru" &&
      !w.document.querySelector(".skeleton"),
  );
  assert.match(w.document.querySelector("#main").textContent, /Сервис не смог/);
  assert.equal(w.localStorage.getItem("edht-language"), "ru");
});
test("doctor workspace exposes no patient CRUD or clinical sections before authorized access", async (t) => {
  const { w } = await setup(t, { role: "doctor" });
  assert.equal(w.document.querySelectorAll(".nav a").length, 1);
  assert.match(
    w.document.querySelector("#main").textContent,
    /Check access & open/,
  );
  assert.equal(w.document.querySelectorAll(".record-card").length, 0);
  assert.equal(w.document.querySelector("[data-action=add-record]"), null);
});
test("emergency chat prompt produces escalation without invoking assistant API", async (t) => {
  const { w, calls, navigate } = await setup(t);
  await navigate("assistant");
  const form = w.document.querySelector("#chat-form");
  form.querySelector("textarea").value = "Emergency, I cannot breathe";
  form.dispatchEvent(
    new w.SubmitEvent("submit", {
      bubbles: true,
      cancelable: true,
      submitter: form.querySelector("button"),
    }),
  );
  await waitFor(() => w.document.querySelector(".message.assistant"));
  assert.match(
    w.document.querySelector(".message.assistant").textContent,
    /contact local emergency services/,
  );
  assert.equal(calls.filter((c) => c.path === "/api/assistant").length, 0);
});

test("localized skip link and profile remain named independently of mobile-hidden text", async (t) => {
  const { w } = await setup(t);
  assert.equal(
    w.document.querySelector(".skip").textContent,
    translate("skip", "en"),
  );
  assert.match(
    w.document.querySelector(".user-link").getAttribute("aria-label"),
    /Synthetic Patient/,
  );
  const language =
    w.document.querySelector("[data-language]") ??
    w.document.querySelector("select");
  language.value = "ru";
  language.dispatchEvent(new w.Event("change", { bubbles: true }));
  await waitFor(
    () =>
      w.document.querySelector(".skip").textContent === translate("skip", "ru"),
  );
  await waitFor(() => !w.document.querySelector(".skeleton"));
});
test("notification center and settings submit real UI actions with CSRF", async (t) => {
  const { w, calls, navigate, click } = await setup(t);
  await navigate("notifications");
  assert.match(w.document.querySelector("main").textContent, /Notifications/);
  click('[data-notice-action="read_all"]');
  await waitFor(() =>
    calls.some((c) => c.path === "/api/notifications/action"),
  );
  const request = calls.find((c) => c.path === "/api/notifications/action");
  assert.equal(JSON.parse(request.opt.body).action, "read_all");
  assert.equal(request.opt.headers["x-csrf-token"], "csrf");
  await waitFor(() => !w.document.querySelector(".skeleton"));
  await navigate("notification-settings");
  assert.match(
    w.document.querySelector("main").textContent,
    /External channels are not connected/,
  );
});
test("medication reminder form enforces confirmation and serializes schedule independently of record", async (t) => {
  const { w, calls, navigate, click } = await setup(t);
  await navigate("medication");
  click('[data-action="add-record"]');
  let f = w.document.querySelector("#record-form");
  f.elements.name.value = "Synthetic reminder med";
  f.dispatchEvent(new w.Event("submit", { bubbles: true, cancelable: true }));
  await waitFor(() =>
    w.document.querySelector('[data-action="configure-reminder"]'),
  );
  click('[data-action="configure-reminder"]');
  await waitFor(() => w.document.querySelector("#reminder-form"));
  f = w.document.querySelector("#reminder-form");
  f.dispatchEvent(new w.Event("submit", { bubbles: true, cancelable: true }));
  assert.equal(
    calls.filter((c) => c.path === "/api/reminders" && c.opt.method === "POST")
      .length,
    0,
  );
  f.elements.confirmed.checked = true;
  f.elements.start.value = "2026-09-19";
  f.elements.timezone.value = "UTC";
  f.elements.times.value = "08:00,20:00";
  f.dispatchEvent(new w.Event("submit", { bubbles: true, cancelable: true }));
  await waitFor(() =>
    calls.some((c) => c.path === "/api/reminders" && c.opt.method === "POST"),
  );
  const request = calls.find(
    (c) => c.path === "/api/reminders" && c.opt.method === "POST",
  );
  assert.deepEqual(JSON.parse(request.opt.body).times, ["08:00", "20:00"]);
  assert.equal(JSON.parse(request.opt.body).record_id, "record-1");
  assert.equal(calls.filter((c) => c.path === "/api/records").length, 1);
  await waitFor(() =>
    w.document
      .querySelector("#toast")
      .textContent.includes("Reminder scheduled"),
  );
});

test("new resumable file selection does not invoke legacy selected-file handler", async (t) => {
  const { w } = await setup(t);
  const form = w.document.createElement("form");
  form.id = "a4-upload";
  const input = w.document.createElement("input");
  input.type = "file";
  form.append(input);
  w.document.body.append(form);
  assert.equal(w.document.querySelector("#selected-file"), null);
  input.dispatchEvent(new w.Event("change", { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.ok(form.isConnected);
});
