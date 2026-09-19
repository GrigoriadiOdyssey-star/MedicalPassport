import { translate as tr } from "./i18n.js";
import {
  escape as e,
  screens,
  route,
  grantStatus,
  sourceStatus,
  errorMessage,
  groupTimeline,
} from "./ui.js";
const $ = (s) => document.querySelector(s),
  icon = {
    home: "⌂",
    passport: "⊞",
    records: "◷",
    medication: "◇",
    allergy: "⚑",
    documents: "▤",
    qr: "▦",
    emergency: "✚",
    assistant: "✧",
    profile: "○",
    doctor: "⊕",
    condition: "◈",
    observation: "∿",
    vaccination: "✓",
  };
let locale = localStorage.getItem("edht-language") === "en" ? "en" : "ru",
  me = null,
  csrf = "",
  screen = "home",
  data = {},
  offset = 0,
  archived = false,
  filter = "all",
  qr = null,
  shareToken = "",
  shared = null,
  accessInfo = null,
  authMode = "signin",
  messages = [],
  loadId = 0,
  chosenFile = null,
  toastTimer;
if (location.hash.startsWith("#access=")) {
  shareToken = new URLSearchParams(location.hash.slice(1)).get("access") ?? "";
  history.replaceState(null, "", location.pathname);
}
const t = (k) => tr(k, locale),
  stamp = (n) =>
    n
      ? new Date(n).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-GB")
      : "—";
const b = (label, action, extra = "", cls = "secondary") =>
  `<button class="btn ${cls}" data-action="${action}" ${extra}>${e(t(label))}</button>`;
const chip = (key) => `<span class="chip ${e(key)}">${e(t(key))}</span>`;
const link = (key, label = key) =>
  `<a class="btn ghost small" href="#/${key}">${e(t(label))} →</a>`;
const definition = (items) =>
  `<dl class="definition">${items.map(([k, v]) => `<div><dt>${e(t(k))}</dt><dd>${e(["severity", "status"].includes(k) ? t(v || "unknown") : v || t("unknown"))}</dd></div>`).join("")}</dl>`;
const avatar = (name) =>
  `<span class="avatar" aria-hidden="true">${e(
    (name ?? "")
      .split(" ")
      .map((x) => x[0])
      .slice(0, 2)
      .join("")
      .toUpperCase(),
  )}</span>`;
const langSelect = () =>
  `<select class="language" data-language aria-label="${e(t("language"))}"><option value="en" ${locale === "en" ? "selected" : ""}>EN</option><option value="ru" ${locale === "ru" ? "selected" : ""}>RU</option></select>`;
function notice(text, error = false) {
  $("#toast").textContent = text;
  $("#toast").className = error ? "error" : "";
  $("#toast").style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ($("#toast").style.display = "none"), 6000);
}
async function api(path, body, blob = false) {
  let r;
  try {
    r = await fetch("/api" + path, {
      method: body === undefined ? "GET" : "POST",
      headers:
        body === undefined
          ? {}
          : { "Content-Type": "application/json", "x-csrf-token": csrf },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw Error("NETWORK");
  }
  if (!r.ok) {
    let code = "SERVER";
    try {
      code = (await r.json()).error;
    } catch {}
    if (r.status === 401 && me) {
      clearPrivate();
      renderAuth();
    }
    throw Error(code);
  }
  return blob ? r.blob() : r.json();
}
function clearPrivate() {
  authMode = "signin";
  me = null;
  csrf = "";
  data = {};
  qr = null;
  shared = null;
  accessInfo = null;
  shareToken = "";
  messages = [];
  loadId++;
  $("#dialog").close();
  $("#dialog").replaceChildren();
}
function field(
  name,
  label,
  value = "",
  type = "text",
  required = false,
  options = null,
) {
  const id = "f-" + name;
  const input = options
    ? `<select id="${id}" name="${name}" ${required ? "required" : ""}>${options
        .map((o) => {
          const [v, k] = Array.isArray(o) ? o : [o, o];
          return `<option value="${e(v)}" ${String(value) === v ? "selected" : ""}>${e(t(k))}</option>`;
        })
        .join("")}</select>`
    : type === "textarea"
      ? `<textarea id="${id}" name="${name}" maxlength="2000" ${required ? "required" : ""}>${e(value)}</textarea>`
      : `<input id="${id}" name="${name}" type="${type}" value="${e(value)}" ${required ? "required" : ""} ${type === "password" ? 'minlength="12" maxlength="128" autocomplete="current-password"' : type === "date" ? "" : 'maxlength="200"'}>`;
  return `<label for="${id}">${e(t(label))}${input}<span class="field-error" id="err-${name}"></span></label>`;
}
function modal(title, content) {
  const d = $("#dialog");
  d.innerHTML = `<div class="dialog-head"><h2 id="dialog-title">${e(t(title))}</h2><button class="icon-btn" data-action="close" aria-label="${e(t("close"))}">×</button></div><div class="dialog-body">${content}</div>`;
  if (!d.open) d.showModal();
}
const actions = () =>
  `<div class="form-actions">${b("cancel", "close")}<button class="btn" type="submit">${e(t("save"))}</button></div>`;
function confirmation(key, fn) {
  modal(
    key,
    `<p>${e(t(key))}</p><div class="form-actions">${b("cancel", "close")}<button class="btn danger" id="confirm-action">${e(t("confirm"))}</button></div>`,
  );
  $("#confirm-action").onclick = async (event) => {
    event.target.disabled = true;
    try {
      await fn();
      $("#dialog").close();
      notice(t("saved"));
    } catch (err) {
      notice(errorMessage(err.message, locale), true);
    } finally {
      if (event.target.isConnected) event.target.disabled = false;
    }
  };
}
function renderAuth() {
  document.documentElement.lang = locale;
  if ($(".skip")) $(".skip").textContent = t("skip");
  $("#app").innerHTML =
    `<div class="auth-layout"><section class="auth-story"><div class="brand"><span class="brand-mark">✚</span><span>EDHT<small>Medical Passport</small></span></div><h1>${e(t("welcome"))}</h1><p>${e(t("intro"))}</p><div class="auth-seal" aria-hidden="true">✚</div><small>${e(t("alpha"))}</small></section><main class="auth-form" id="main">${langSelect()}<h2>${e(t(authMode))}</h2><div class="auth-tabs">${[
      "signin",
      "signup",
      "recover",
    ]
      .filter((x) => x !== authMode)
      .map(
        (x) =>
          `<button data-action="auth" data-mode="${x}">${e(t(x))}</button>`,
      )
      .join(
        "",
      )}</div><form id="auth-form" novalidate>${authMode === "signup" ? field("name", "name", "", "text", true) : ""}${authMode === "recover" ? field("token", "recoveryCode", "", "text", true) : field("email", "email", "", "email", true)}${field("password", authMode === "recover" ? "newPassword" : "password", "", "password", true)}<p class="help">${e(t("passwordHelp"))}</p>${authMode === "signup" ? `<label class="check"><input type="checkbox" name="synthetic" required>${e(t("synthetic"))}</label><label class="check"><input type="checkbox" name="adult" required>${e(t("adult"))}</label>` : ""}<div class="field-error" data-form-error role="alert"></div><button class="btn">${e(t(authMode))}</button></form><small>${e(t("securityNote"))}</small></main></div>`;
}
function shell() {
  if ($(".skip")) $(".skip").textContent = t("skip");
  document.documentElement.lang = locale;
  const navs = me.role === "doctor" ? ["doctor"] : screens;
  const nav = (key, mobile = false) =>
    `<a href="#/${key}" ${screen === key ? 'aria-current="page"' : ""}><span class="nav-icon" aria-hidden="true">${icon[key]}</span><span>${e(t(mobile ? ({ passport: "navPassport", profile: "navProfile", assistant: "navAI", qr: "navQR" }[key] ?? key) : key))}</span></a>`;
  $("#app").innerHTML =
    `<aside class="sidebar" id="sidebar"><div class="brand"><span class="brand-mark">✚</span><span>EDHT<small>Medical Passport</small></span></div><nav class="nav" aria-label="${e(t("menu"))}">${navs.map((k) => nav(k)).join("")}</nav><div class="sidebar-foot">${e(t("local"))}<br>Alpha 0.2</div></aside><div class="workspace"><header class="topbar"><button class="icon-btn mobile-menu" data-action="menu" aria-label="${e(t("menu"))}" aria-expanded="false">☰</button><div class="topbar-title">${e(t(screen))}</div>${langSelect()}${me.role === "patient" ? `<button class="icon-btn activity" data-action="activity" aria-label="${e(t("notifications"))}">◷</button>` : ""}<a class="user-link" aria-label="${e(t(me.role === "doctor" ? "doctor" : "profile") + ": " + me.name)}" href="#/${me.role === "doctor" ? "doctor" : "profile"}">${avatar(me.name)}<span>${e(me.name)}</span></a><button class="icon-btn" data-action="logout" aria-label="${e(t("logout"))}">↗</button></header><div class="alpha">${e(t("alpha"))}</div><main id="main" class="main" tabindex="-1"><div class="skeleton title"></div><div class="grid" aria-busy="true" aria-label="${e(t("loading"))}"><div class="skeleton"></div><div class="skeleton"></div></div></main></div>${me.role === "patient" ? `<nav class="bottom-nav" aria-label="${e(t("menu"))}">${["home", "passport", "qr", "assistant", "profile"].map((k) => nav(k, true)).join("")}</nav><a class="sos-float" href="#/emergency">✚ SOS</a>` : ""}`;
}
function empty(title, description, action = "", label = "add") {
  return `<div class="empty"><div class="empty-icon" aria-hidden="true">${icon[screen] ?? "○"}</div><h2>${e(t(title))}</h2><p>${e(t(description))}</p>${action ? b(label, action, "", "") : ""}</div>`;
}
const head = (key, button = "") =>
  `<div class="screen-head"><div><p class="eyebrow">EDHT / ${e(t("brand"))}</p><h1>${e(t(key))}</h1></div>${button}</div>`;
function recordCard(r, doctor = false) {
  const body = r.body,
    meta = sourceStatus(r.source);
  const fields =
    r.kind === "allergy"
      ? [
          ["reaction", body.reaction],
          ["severity", t(body.severity ?? "unknown")],
          ["status", t(body.status ?? "reported")],
        ]
      : r.kind === "medication"
        ? [
            ["dose", body.dose],
            ["frequency", body.frequency],
            ["route", body.route],
            ["start", body.start],
            ["end", body.end],
            ["notes", body.notes],
          ]
        : [["notes", body.notes]];
  return `<article class="card record-card ${body.severity === "critical" ? "critical" : ""}"><div class="record-title"><h2>${e(body.name ?? t(r.kind))}</h2>${body.severity === "critical" ? chip("critical") : ""}</div><div class="chips">${chip(meta)}${r.archived ? chip("archived") : chip(body.status === "stopped" ? "stopped" : "active")}</div>${definition(fields)}<small>${e(t("date"))}: ${stamp(r.created_at)} · ${e(t("version"))} ${r.version}</small>${doctor ? "" : `<div class="card-actions">${!r.archived ? b("edit", "edit-record", `data-id="${r.id}"`) + b(r.kind === "medication" ? "stop" : "archive", "archive-record", `data-id="${r.id}"`) : ""}${b("history", "history", `data-id="${r.id}"`, "ghost")}</div>`}</article>`;
}
function docCard(d, doctor = false) {
  return `<article class="card document-card"><div class="row spread"><span class="list-icon" aria-hidden="true">▤</span>${chip("reported")}</div><h3>${e(d.name)}</h3><p class="muted">${e(t(d.document_type))} · ${e(d.document_date || stamp(d.created_at))}</p>${d.description ? `<p>${e(d.description)}</p>` : ""}<div class="card-actions">${b("download", doctor ? "shared-download" : "download", `data-id="${d.id}"`)}${!doctor && d.mime === "text/plain" ? b("preview", "preview", `data-id="${d.id}"`) : ""}${!doctor && !d.archived ? b("edit", "edit-document", `data-id="${d.id}"`, "ghost") + b("archive", "archive-document", `data-id="${d.id}"`, "ghost") : ""}</div></article>`;
}
function listRows(rows) {
  return (
    rows
      .map(
        (r) =>
          `<div class="list-item"><span class="list-icon" aria-hidden="true">${icon[r.kind] ?? "▤"}</span><div class="content"><strong>${e(r.body?.name ?? r.name ?? t(r.kind))}</strong><p>${e(t(r.kind ?? "documents"))} · ${stamp(r.created_at)}</p>${chip(sourceStatus(r.source))}</div></div>`,
      )
      .join("") || `<p class="muted">${e(t("nothing"))}</p>`
  );
}
function home() {
  const p = data.profile,
    em = data.emergency?.body ?? {},
    blood = [em.bloodGroup, em.rh]
      .filter((x) => x && x !== "UNKNOWN")
      .join(" ");
  return `<section class="card welcome-card"><div><p class="eyebrow">${e(t("greeting"))}</p><h1>${e(p.name)}</h1><p>${e(t("overview"))}</p><div class="profile-meta"><span>${e(t("birth"))}: ${e(p.birth_date || t("unknown"))}</span><span>${e(t("blood"))}: ${e(blood || t("unknown"))}</span></div></div>${avatar(p.name)}</section>${data.critical_allergies.length ? `<div class="warning">⚑ ${e(t("criticalWarning"))}: ${data.critical_allergies.map((r) => e(r.body.name)).join(", ")}</div>` : ""}<div class="quick-grid">${[
    ["emergency", "sos", "sosHelp", "sos"],
    ["qr", "showQR", "qrHelp", ""],
    ["assistant", "askAI", "aiHelp", "ai"],
  ]
    .map(
      ([s, l, h, c]) =>
        `<a class="quick-card ${c}" href="#/${s}"><span class="quick-icon" aria-hidden="true">${icon[s]}</span><div><strong>${e(t(l))}</strong><small>${e(t(h))}</small></div></a>`,
    )
    .join(
      "",
    )}</div><div class="grid"><section class="card"><div class="row spread"><h2>${e(t("recent"))}</h2>${link("records", "view")}</div>${listRows(data.recent)}</section><section class="card"><div class="row spread"><h2>${e(t("latestDocs"))}</h2>${link("documents", "view")}</div>${listRows(data.documents)}</section><section class="card"><div class="row spread"><h2>${e(t("medication"))}</h2>${link("medication", "view")}</div><p class="big-value">${data.counts.find((c) => c.kind === "medication")?.count ?? 0}</p><p class="muted">${e(t("sectionCount"))}</p>${b("addMedication", "add-medication", "", "")}</section><section class="card"><div class="row spread"><h2>${e(t("allergy"))}</h2>${link("allergy", "view")}</div><p class="big-value">${data.counts.find((c) => c.kind === "allergy")?.count ?? 0}</p><p class="muted">${e(t("absence"))}</p>${b("addAllergy", "add-allergy", "", "")}</section><section class="card wide"><h2>${e(t("accessActivity"))}</h2>${data.access.map((a) => `<div class="list-item"><span class="list-icon">◷</span><div>${e(t(a.action))}<small> · ${stamp(a.occurred_at)}</small></div></div>`).join("") || `<p class="muted">${e(t("emptyAccess"))}</p>`}</section></div>`;
}
function passport() {
  const p = data.profile,
    em = data.emergency?.body ?? {};
  return (
    head("passport") +
    `<div class="note">${e(t("unverified"))}</div><div class="grid"><section class="card"><h2>${e(t("personal"))}</h2>${definition(
      [
        ["name", p.name],
        ["birth", p.birth_date],
        ["country", p.country],
      ],
    )}<div class="card-actions">${link("profile", "edit")}</div></section><section class="card"><h2>${e(t("blood"))}</h2><p class="big-value">${e(em.bloodGroup && em.bloodGroup !== "UNKNOWN" ? em.bloodGroup + " " + (em.rh === "UNKNOWN" ? "" : em.rh) : t("unknown"))}</p><div class="card-actions">${b("editEmergency", "edit-emergency")}</div></section>${["condition", "allergy", "medication", "vaccination", "documents"].map((k) => `<section class="card"><h2>${e(t(k))}</h2><p class="big-value">${k === "documents" ? data.document_count : (data.counts.find((c) => c.kind === k)?.count ?? 0)}</p><div class="card-actions">${k === "condition" || k === "vaccination" ? `<button class="btn secondary" data-action="filter-records" data-kind="${k}">${e(t("view"))}</button>` : link(k, "view")}${b("add", "add-record", `data-kind="${k}"`)}</div></section>`).join("")}<section class="card"><h2>${e(t("contacts"))}</h2><p>${e(em.contacts || t("unknown"))}</p><div class="card-actions">${link("emergency", "view")}${b("edit", "edit-emergency")}</div></section></div>`
  );
}
function recordScreen() {
  const kind = screen === "records" ? null : screen;
  let rows = data.records ?? [];
  if (filter !== "all" && !kind) rows = rows.filter((r) => r.kind === filter);
  const toolbar = `<div class="toolbar"><div class="tabs" role="tablist"><button class="tab" role="tab" data-action="archive-tab" data-value="0" aria-selected="${!archived}">${e(t("active"))}</button><button class="tab" role="tab" data-action="archive-tab" data-value="1" aria-selected="${archived}">${e(t("archived"))}</button></div>${!kind ? `<label>${e(t("recordType"))}<select data-filter>${["all", "condition", "observation", "allergy", "medication", "vaccination", "documents"].map((k) => `<option value="${k}" ${filter === k ? "selected" : ""}>${e(t(k))}</option>`).join("")}</select></label>` : ""}</div>`;
  return (
    head(
      screen,
      b(
        kind === "allergy"
          ? "addAllergy"
          : kind === "medication"
            ? "addMedication"
            : "addRecord",
        "add-record",
        `data-kind="${kind ?? "condition"}"`,
        "",
      ),
    ) +
    toolbar +
    (screen === "records"
      ? `<div class="timeline">${
          groupTimeline({
            ...data,
            records: rows,
            documents:
              filter === "all" || filter === "documents" ? data.documents : [],
          })
            .map((r) => (r.kind === "documents" ? docCard(r) : recordCard(r)))
            .join("") ||
          empty("nothing", "emptyRecords", "add-record", "addRecord")
        }</div>`
      : rows.length
        ? `<div class="grid">${rows.map((r) => recordCard(r)).join("")}</div>`
        : empty(
            kind === "medication" ? "emptyMeds" : "emptyAllergies",
            "absence",
            "add-record",
            kind === "medication" ? "addMedication" : "addAllergy",
          )) +
    pagination()
  );
}
function pagination() {
  return `<div class="row spread toolbar">${offset ? b("previous", "page", `data-offset="${Math.max(0, offset - 30)}"`) : "<span></span>"}${(data.records?.length ?? 0) >= 30 || (data.documents?.length ?? 0) >= 30 ? b("next", "page", `data-offset="${offset + 30}"`) : ""}</div>`;
}
function documents() {
  return (
    head("documents", b("upload", "upload", "", "")) +
    `<div class="toolbar"><div class="tabs" role="tablist">${[false, true].map((v) => `<button class="tab" role="tab" aria-selected="${archived === v}" data-action="archive-tab" data-value="${v ? 1 : 0}">${e(t(v ? "archived" : "active"))}</button>`).join("")}</div></div>` +
    (data.documents.length
      ? `<div class="grid">${data.documents.map((d) => docCard(d)).join("")}</div>`
      : empty("emptyDocs", "fileHelp", "upload", "upload")) +
    `<p class="help">${e(t("fileWarning"))}</p>` +
    pagination()
  );
}
function emergency(body, doctor = false) {
  const em = body ?? {};
  return `<section class="sos-panel"><p class="eyebrow">${e(t("emergencyView"))}</p><div class="row spread"><h1>${e(t("emergencyIntro"))}</h1>${!doctor ? b("editEmergency", "edit-emergency") : ""}</div><p>${e(t("emergencyNotice"))}</p><div class="sos-grid">${[
    [
      "blood",
      em.bloodGroup && em.bloodGroup !== "UNKNOWN"
        ? em.bloodGroup + " " + (em.rh === "UNKNOWN" ? "" : em.rh)
        : t("unknown"),
    ],
    ["allergy", em.allergies],
    ["medication", em.medications],
    ["majorConditions", em.diagnoses],
    ["contacts", em.contacts],
    ["instructions", em.instructions],
  ]
    .map(
      ([k, v]) =>
        `<article class="card"><h3>${e(t(k))}</h3><p class="${k === "blood" ? "big-value" : ""}">${e(v || t("unknown"))}</p></article>`,
    )
    .join(
      "",
    )}</div><div class="note">${e(t("emergencyPermission"))}</div></section>`;
}
function grantsList() {
  const selected = filter === "all" ? "active" : filter,
    rows = data.grants.filter((g) => grantStatus(g) === selected);
  return `<section class="access-card"><h2>${e(t("qr"))}</h2><div class="tabs" role="tablist">${["active", "expired", "revoked", "used"].map((k) => `<button class="tab" role="tab" data-action="grant-tab" data-value="${k}" aria-selected="${selected === k}">${e(t(k))}</button>`).join("")}</div><div class="grid">${rows.map((g) => `<article class="card access-card"><div class="row spread"><h3>${e(g.recipient)}</h3>${chip(grantStatus(g))}</div><p>${g.scopes.map((k) => e(t(k))).join(" · ")}</p><small>${e(t("expires"))}: ${e(new Date(g.expires_at).toLocaleString(locale))}</small><div class="card-actions">${!g.revoked_at ? b("revoke", "revoke", `data-id="${g.id}"`) : ""}</div></article>`).join("")}</div>${!rows.length ? `<p class="muted">${e(t("nothing"))}</p>` : ""}</section>`;
}
function qrScreen() {
  return (
    head("qr") +
    `<div class="qr-layout"><section class="card"><form id="qr-form" novalidate><fieldset><legend>${e(t("who"))}</legend>${
      data.doctors.length
        ? field(
            "recipient_id",
            "recipient",
            data.doctors[0].id,
            "text",
            true,
            data.doctors.map((d) => [d.id, d.name]),
          )
        : `<p class="note">${e(t("noDoctors"))}</p>`
    }</fieldset><fieldset><legend>${e(t("what"))}</legend><div class="scope-grid">${["allergy", "medication", "condition", "vaccination", "documents", "emergency", "observation"].map((k) => `<label class="scope-option"><input type="checkbox" name="scope" value="${k}" ${k === "allergy" ? "checked" : ""}><span>${icon[k] ?? "▤"} ${e(t(k))}</span></label>`).join("")}</div><p class="help">${e(t("scopeHelp"))}</p></fieldset><div class="form-row">${field("duration", "howlong", "1h", "text", true, ["once", "1h", "24h", "7d"])}${field("purpose", "why", "review", "text", true, ["review", "emergency"])}</div><p class="help">${e(t("onceHelp"))}</p><div class="field-error" data-form-error role="alert"></div><button class="btn" ${!data.doctors.length ? "disabled" : ""}>▦ ${e(t("generate"))}</button></form></section>${qr ? `<section class="card qr-card"><p class="eyebrow">${e(t("shareTitle"))}</p><h2>${e(qr.recipient)}</h2><img src="${qr.qr}" alt="${e(t("qr"))}"><div class="chips">${qr.scopes.map((k) => chip(k)).join("")}</div><p>${e(t(qr.purpose))}</p><small>${e(t("expiresIn"))}</small><div class="countdown" data-expires="${qr.expires_at}"></div><div class="row">${b("copy", "copy")}${b("share", "share")}${b("revoke", "revoke", `data-id="${qr.id}"`, "danger")}</div><p class="help">${e(t("saveLink"))}</p><p class="help">${e(t("localQR"))}</p></section>` : `<section class="card qr-card"><div class="symbol">▦</div><h2>${e(t("emptyGrants"))}</h2><p>${e(t("securityNote"))}</p></section>`}</div>` +
    grantsList()
  );
}
function doctorScreen() {
  let extra = "";
  if (accessInfo && accessInfo.status !== "ACTIVE" && !shared) {
    const key =
      {
        ACCESS_EXPIRED: "accessExpired",
        ACCESS_REVOKED: "accessRevoked",
        ACCESS_USED: "accessUsed",
      }[accessInfo.status] ?? "accessDenied";
    extra = `<section class="card access-state" role="status"><div class="symbol">⊘</div><h2>${e(t(key))}</h2><p>${e(t("requestNew"))}</p></section>`;
  }
  if (shared) {
    extra = `<section class="card access-card"><div class="row spread"><h2>${e(t("patient"))}</h2>${chip("active")}</div>${definition(
      [
        ["scope", accessInfo.scopes.map((k) => t(k)).join(", ")],
        ["expires", new Date(accessInfo.expires_at).toLocaleString(locale)],
        ["source", t("sharedVia")],
      ],
    )}<p class="help">${e(t("unverified"))}</p></section><div class="grid access-card">${accessInfo.scopes
      .filter((k) => k !== "documents" && k !== "emergency")
      .map(
        (k) =>
          `<section class="wide"><h2>${e(t(k))}</h2><div class="grid">${
            shared.records
              .filter((r) => r.kind === k)
              .map((r) => recordCard(r, true))
              .join("") || `<p class="muted">${e(t("nothing"))}</p>`
          }</div></section>`,
      )
      .join(
        "",
      )}${accessInfo.scopes.includes("documents") ? `<section class="wide"><h2>${e(t("documents"))}</h2><div class="grid">${shared.documents.map((d) => docCard(d, true)).join("") || `<p>${e(t("nothing"))}</p>`}</div></section>` : ""}${accessInfo.scopes.includes("emergency") ? `<section class="wide">${emergency(shared.records.filter((r) => r.kind === "emergency").sort((a, b) => b.created_at - a.created_at)[0]?.body, true)}</section>` : ""}</div>`;
  }
  return (
    head("doctor") +
    `<section class="card"><p>${e(t("accessPrompt"))}</p><form id="access-form" novalidate>${field("token", "accessToken", shareToken, "text", true)}${field("document_id", "documentId")}<div class="field-error" data-form-error role="alert"></div><div class="form-actions"><button class="btn">${e(t(shared ? "refreshAccess" : "openAccess"))}</button></div></form></section>` +
    extra
  );
}
function assistantScreen() {
  return (
    head("assistant") +
    `<div class="chat"><section class="chat-intro"><div class="chat-icon">✧</div><h2>${e(t("aiTitle"))}</h2><p class="note">${e(t("aiNotice"))}</p><small>● ${e(t("aiContext"))}</small><div class="prompts">${["aiMedication", "aiDocument", "aiQuestions", "aiTravel"].map((k) => b(k, "prompt", `data-prompt="${k}"`)).join("")}</div></section><div aria-live="polite">${messages.map((m) => `<div class="message ${m.role}">${e(m.text)}${m.sources ? `<small>${e(t("aiSources"))}: ${m.sources.length} · ${m.sources.map((r) => e(r.id.slice(0, 8)) + " / v" + r.version).join(", ")}</small>` : ""}</div>`).join("")}</div><form id="chat-form" class="chat-compose" novalidate>${field("message", "message", "", "textarea", true)}<button class="btn">${e(t("send"))}</button></form></div>`
  );
}
function profileScreen() {
  const p = data;
  return (
    head("profile") +
    `<section class="card"><div class="profile-summary">${avatar(p.name)}<div><h2>${e(p.name)}</h2><small>${e(p.email)}</small></div></div><form id="profile-form" novalidate>${field("name", "name", p.name, "text", true)}<div class="form-row">${field("birth_date", "birth", p.birth_date ?? "", "date")}${field("country", "country", p.country ?? "")}</div><p class="help">${e(t("adult"))}</p><div class="field-error" data-form-error role="alert"></div><div class="form-actions"><button class="btn">${e(t("save"))}</button></div></form></section>`
  );
}
function render() {
  if (!me) return renderAuth();
  let html = "";
  switch (screen) {
    case "home":
      html = home();
      break;
    case "passport":
      html = passport();
      break;
    case "allergy":
    case "medication":
    case "records":
      html = recordScreen();
      break;
    case "documents":
      html = documents();
      break;
    case "emergency":
      html = emergency(data.records?.[0]?.body);
      break;
    case "qr":
      html = qrScreen();
      break;
    case "doctor":
      html = doctorScreen();
      break;
    case "assistant":
      html = assistantScreen();
      break;
    case "profile":
      html = profileScreen();
  }
  $("#main").innerHTML = html;
  countdown();
}
async function load() {
  if (!me) return renderAuth();
  const id = ++loadId;
  screen = route(location.hash, me.role);
  shell();
  try {
    let result = {};
    if (
      [
        "home",
        "passport",
        "records",
        "medication",
        "allergy",
        "documents",
        "emergency",
      ].includes(screen)
    )
      result = await api(
        "/views/" +
          (screen === "records" && filter !== "all" ? filter : screen) +
          "?offset=" +
          offset +
          "&archived=" +
          (archived ? 1 : 0),
      );
    else if (screen === "qr") {
      const [grants, doctors] = await Promise.all([
        api("/grants"),
        api("/doctors"),
      ]);
      result = { grants, doctors };
    } else if (screen === "profile") result = await api("/profile");
    if (id !== loadId) return;
    data = result;
    render();
  } catch (err) {
    if (id !== loadId) return;
    $("#main").innerHTML = empty(
      "errorTitle",
      errorMessage(err.message, locale),
      "retry",
      "retry",
    );
  }
}
async function refreshMe() {
  me = await api("/me");
  csrf = me.csrf;
  await load();
}
function openRecord(kind, existing) {
  if (kind === "documents") return openUpload();
  if (kind === "emergency") return openEmergency();
  const body = existing?.body ?? {},
    k =
      kind ??
      (["allergy", "medication"].includes(screen) ? screen : "condition");
  modal(
    existing
      ? "edit"
      : k === "allergy"
        ? "addAllergy"
        : k === "medication"
          ? "addMedication"
          : "addRecord",
    `<form id="record-form" data-kind="${k}" ${existing ? `data-id="${existing.id}" data-version="${existing.version}"` : ""} novalidate><p class="help">${e(t("patientOnly"))}</p>${!existing && !["allergy", "medication"].includes(k) ? field("kind", "recordType", k, "text", true, ["condition", "observation", "vaccination"]) : ""}${field("name", k === "allergy" ? "substance" : "name", body.name ?? "", "text", true)}${k === "allergy" ? field("reaction", "reaction", body.reaction ?? "") + `<div class="form-row">${field("severity", "severity", body.severity ?? "unknown", "text", false, ["unknown", "mild", "moderate", "severe", "critical"])}${field("status", "status", body.status ?? "reported", "text", false, ["reported", "unknown", "not_assessed", "no_known_allergy"])}</div>` : k === "medication" ? `<div class="form-row">${field("dose", "dose", body.dose ?? "")}${field("frequency", "frequency", body.frequency ?? "")}</div>${field("route", "route", body.route ?? "")}<div class="form-row">${field("start", "start", body.start ?? "", "date")}${field("end", "end", body.end ?? "", "date")}</div>${field("status", "status", body.status ?? "active", "text", false, ["active", "reported", "stopped"])}${field("notes", "notes", body.notes ?? "", "textarea")}` : field("notes", "notes", body.notes ?? "", "textarea")}<div class="field-error" data-form-error role="alert"></div>${actions()}</form>`,
  );
}
async function openEmergency() {
  let record =
    data.records?.filter((r) => r.kind === "emergency")[0] ?? data.emergency;
  if (!record) {
    const d = await api("/views/emergency");
    record = d.records[0];
  }
  const body = record?.body ?? {};
  modal(
    "editEmergency",
    `<form id="emergency-form" ${record ? `data-id="${record.id}" data-version="${record.version}"` : ""} novalidate><div class="form-row">${field("bloodGroup", "bloodGroup", body.bloodGroup ?? "UNKNOWN", "text", false, [["UNKNOWN", "unknown"], "A", "B", "AB", "O"])}${field("rh", "rh", body.rh ?? "UNKNOWN", "text", false, [["UNKNOWN", "unknown"], "+", "-"])}</div>${[
      ["allergies", "allergy"],
      ["medications", "medication"],
      ["diagnoses", "majorConditions"],
      ["contacts", "contacts"],
      ["instructions", "instructions"],
      ["donor", "donor"],
    ]
      .map(([k, l]) =>
        field(k, l, body[k] ?? "", k === "instructions" ? "textarea" : "text"),
      )
      .join(
        "",
      )}<div class="field-error" data-form-error role="alert"></div>${actions()}</form>`,
  );
}
function openUpload(doc) {
  chosenFile = null;
  modal(
    doc ? "edit" : "upload",
    `<form id="upload-form" ${doc ? `data-id="${doc.id}"` : ""} novalidate>${!doc ? `<label class="dropzone" id="dropzone"><span class="drop-icon">⇧</span><strong>${e(t("drop"))}</strong><span class="help">${e(t("fileHelp"))}</span><input type="file" name="file" accept=".pdf,.txt" aria-label="${e(t("choose"))}"><span id="selected-file"></span></label>${field("document_type", "documentType", "medical_document", "text", true, ["medical_document", "lab", "report", "prescription"])}` : ""}<div class="form-row">${field("document_date", "date", doc?.document_date ?? "", "date")}${doc ? `<p class="help">${e(t("source"))}: ${e(doc.source)}</p>` : field("source", "source", t("reported"))}</div>${field("description", "description", doc?.description ?? "", "textarea")}<div class="field-error" data-form-error role="alert"></div>${actions()}</form>`,
  );
  if (!doc) {
    const zone = $("#dropzone");
    zone.ondragover = (ev) => {
      ev.preventDefault();
      zone.classList.add("drag");
    };
    zone.ondragleave = () => zone.classList.remove("drag");
    zone.ondrop = (ev) => {
      ev.preventDefault();
      zone.classList.remove("drag");
      chosenFile = ev.dataTransfer.files[0];
      $("#selected-file").textContent = chosenFile?.name ?? "";
    };
  }
}
async function blobDownload(path, body, name) {
  const blob = await api(path, body, true),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = name || "document";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
async function useAccess(token, docId) {
  shareToken = token.includes("#access=")
    ? new URLSearchParams(token.split("#")[1]).get("access")
    : token.trim();
  shared = null;
  accessInfo = null;
  try {
    accessInfo = await api("/access/info", { token: shareToken });
    if (accessInfo.status !== "ACTIVE") {
      render();
      return;
    }
    if (docId) {
      await blobDownload(
        "/access/document",
        { token: shareToken, document_id: docId },
        "document",
      );
      accessInfo = await api("/access/info", { token: shareToken });
    } else shared = await api("/access", { token: shareToken });
    render();
  } catch (err) {
    shared = null;
    try {
      accessInfo = await api("/access/info", { token: shareToken });
    } catch {
      accessInfo = { status: "ACCESS_NOT_AUTHORIZED" };
    }
    render();
    if (err.message === "NETWORK") throw err;
  }
}
async function chat(message) {
  messages.push({ role: "user", text: message });
  render();
  if (
    /sos|emergency|urgent|dying|chest pain|can't breathe|экстр|умира|не могу дышать|боль в груди/i.test(
      message,
    )
  ) {
    messages.push({ role: "assistant", text: t("aiEmergency") });
    render();
    return;
  }
  const result = await api("/assistant", { message, language: locale });
  messages.push({
    role: "assistant",
    text: t("aiReply"),
    sources: result.source_records,
  });
  render();
}
function countdown() {
  document.querySelectorAll("[data-expires]").forEach((el) => {
    const n = Math.max(0, Number(el.dataset.expires) - Date.now());
    el.textContent = n
      ? `${Math.floor(n / 3600000)}:${String(Math.floor(n / 60000) % 60).padStart(2, "0")}:${String(Math.floor(n / 1000) % 60).padStart(2, "0")}`
      : t("expired");
  });
  if (shared && accessInfo?.expires_at <= Date.now()) {
    shared = null;
    accessInfo.status = "ACCESS_EXPIRED";
    if (screen === "doctor") render();
  }
}
setInterval(countdown, 1000);
setInterval(async () => {
  if (me?.role !== "doctor" || !shared || !shareToken) return;
  try {
    const info = await api("/access/info", { token: shareToken });
    if (
      ["ACCESS_REVOKED", "ACCESS_EXPIRED", "ACCESS_NOT_AUTHORIZED"].includes(
        info.status,
      )
    ) {
      shared = null;
      accessInfo = info;
      render();
    }
  } catch {
    shared = null;
    accessInfo = { status: "ACCESS_NOT_AUTHORIZED" };
    if (me) render();
  }
}, 10000);
document.addEventListener("change", async (event) => {
  if (event.target.matches("[data-language]")) {
    locale = event.target.value;
    localStorage.setItem("edht-language", locale);
    $("#dialog").close();
    if (me) {
      await load();
    } else renderAuth();
  }
  if (event.target.matches("[data-filter]")) {
    filter = event.target.value;
    offset = 0;
    await load();
  }
  if (event.target.matches("input[type=file]")) {
    chosenFile = event.target.files[0];
    $("#selected-file").textContent = chosenFile?.name ?? "";
  }
  if (event.target.name === "purpose" && event.target.value === "emergency")
    document
      .querySelectorAll("[name=scope]")
      .forEach((el) => (el.checked = el.value === "emergency"));
});
document.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const a = target.dataset.action;
  event.preventDefault();
  try {
    if (a === "close") return $("#dialog").close();
    if (a === "menu") {
      const open = $("#sidebar").classList.toggle("open");
      target.setAttribute("aria-expanded", String(open));
      return;
    }
    if (a === "auth") {
      authMode = target.dataset.mode;
      return renderAuth();
    }
    if (a === "logout")
      return confirmation("logoutConfirm", async () => {
        await api("/logout", {});
        clearPrivate();
        renderAuth();
      });
    if (a === "retry") return load();
    if (a === "add-allergy") return openRecord("allergy");
    if (a === "add-medication") return openRecord("medication");
    if (a === "add-record") return openRecord(target.dataset.kind);
    if (a === "edit-emergency") return await openEmergency();
    if (a === "upload") return openUpload();
    if (a === "filter-records") {
      filter = target.dataset.kind;
      location.hash = "/records";
      return;
    }
    if (a === "archive-tab") {
      archived = target.dataset.value === "1";
      offset = 0;
      return load();
    }
    if (a === "page") {
      offset = Number(target.dataset.offset);
      return load();
    }
    if (a === "grant-tab") {
      filter = target.dataset.value;
      return render();
    }
    const record = data.records?.find((r) => r.id === target.dataset.id),
      doc = data.documents?.find((d) => d.id === target.dataset.id);
    if (a === "edit-record") return openRecord(record.kind, record);
    if (a === "archive-record")
      return confirmation("archiveConfirm", async () => {
        await api("/records/" + record.id + "/archive", {
          version: record.version,
        });
        await load();
      });
    if (a === "archive-document")
      return confirmation("archiveConfirm", async () => {
        await api("/documents/" + doc.id + "/archive", {});
        await load();
      });
    if (a === "edit-document") return openUpload(doc);
    if (a === "revoke")
      return confirmation("revokeConfirm", async () => {
        await api("/grants/" + target.dataset.id + "/revoke", {});
        if (qr?.id === target.dataset.id) qr = null;
        await load();
      });
    target.disabled = true;
    if (a === "history") {
      const rows = await api("/records/" + record.id + "/history");
      modal(
        "history",
        rows
          .map(
            (r) =>
              `<article class="card"><div class="row spread"><h3>${e(t("version"))} ${r.version}</h3>${chip(r.archived ? "archived" : sourceStatus(r.source))}</div><small>${stamp(r.created_at)}</small>${definition(Object.entries(r.body))}</article>`,
          )
          .join(""),
      );
    }
    if (a === "download")
      await blobDownload("/documents/" + doc.id, undefined, doc.name);
    if (a === "preview") {
      const blob = await api("/documents/" + doc.id, undefined, true);
      modal("preview", `<pre class="doc-text">${e(await blob.text())}</pre>`);
    }
    if (a === "shared-download") {
      const d = shared.documents.find((x) => x.id === target.dataset.id);
      try {
        await blobDownload(
          "/access/document",
          { token: shareToken, document_id: d.id },
          d.name,
        );
      } catch (err) {
        shared = null;
        try {
          accessInfo = await api("/access/info", { token: shareToken });
        } catch {
          accessInfo = { status: "ACCESS_NOT_AUTHORIZED" };
        }
        render();
        throw err;
      }
    }
    if (a === "copy") {
      await navigator.clipboard.writeText(qr.link);
      notice(t("copied"));
    }
    if (a === "share") {
      if (navigator.share) {
        try {
          await navigator.share({ title: "EDHT", url: qr.link });
        } catch (err) {
          if (err.name !== "AbortError") throw err;
        }
      } else {
        await navigator.clipboard.writeText(qr.link);
        notice(t("copied"));
      }
    }
    if (a === "activity") {
      const items = await api("/audit");
      modal(
        "accessActivity",
        items
          .filter((x) =>
            [
              "SHARED_PASSPORT_READ",
              "SHARED_DOCUMENT_READ",
              "EMERGENCY_ACCESS",
              "GRANT_REVOKED",
              "ACCESS_STATUS_CHECK",
            ].includes(x.action),
          )
          .map(
            (x) =>
              `<div class="list-item"><div>${e(t(x.action))}<br><small>${stamp(x.occurred_at)}</small></div></div>`,
          )
          .join("") || `<p>${e(t("emptyAccess"))}</p>`,
      );
    }
    if (a === "prompt") await chat(t(target.dataset.prompt));
  } catch (err) {
    notice(errorMessage(err.message, locale), true);
  } finally {
    if (target.isConnected) target.disabled = false;
  }
});
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target,
    submit = event.submitter,
    values = Object.fromEntries(new FormData(form));
  let valid = true;
  form.querySelectorAll("input,select,textarea").forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      input.setAttribute("aria-invalid", "true");
      const err = form.querySelector("#err-" + input.name);
      if (err) {
        err.textContent = t(
          input.validity.valueMissing ? "required" : "invalid",
        );
        input.setAttribute("aria-describedby", err.id);
      }
    } else input.removeAttribute("aria-invalid");
  });
  if (!valid) {
    form.querySelector("[aria-invalid=true]")?.focus();
    return;
  }
  const old = submit?.textContent;
  if (submit) {
    submit.disabled = true;
    submit.textContent = t("saving");
  }
  form.setAttribute("aria-busy", "true");
  try {
    if (form.id === "auth-form") {
      if (authMode === "recover") {
        await api("/recover", values);
        authMode = "signin";
        renderAuth();
        notice(t("saved"));
        return;
      }
      if (authMode === "signup")
        await api("/register", {
          ...values,
          synthetic: values.synthetic === "on",
          adult: values.adult === "on",
        });
      await api("/login", { email: values.email, password: values.password });
      await refreshMe();
      return;
    }
    if (form.id === "record-form" || form.id === "emergency-form") {
      const kind =
        form.id === "emergency-form"
          ? "emergency"
          : (values.kind ?? form.dataset.kind);
      delete values.kind;
      if (form.dataset.id)
        await api("/records/" + form.dataset.id + "/update", {
          body: values,
          version: Number(form.dataset.version),
        });
      else await api("/records", { kind, body: values });
      $("#dialog").close();
      await load();
    }
    if (form.id === "profile-form") {
      await api("/profile", values);
      await refreshMe();
    }
    if (form.id === "upload-form") {
      let id = form.dataset.id;
      if (!id) {
        const file = chosenFile;
        if (
          !file ||
          file.size < 1 ||
          file.size > 1048576 ||
          !/\.(pdf|txt)$/i.test(file.name)
        )
          throw Error("INVALID_DOCUMENT");
        const bytes = new Uint8Array(await file.arrayBuffer());
        let bin = "";
        for (let i = 0; i < bytes.length; i += 8192)
          bin += String.fromCharCode(...bytes.subarray(i, i + 8192));
        const result = await api("/documents", {
          name: file.name,
          mime: file.name.toLowerCase().endsWith(".txt")
            ? "text/plain"
            : "application/pdf",
          document_type: values.document_type,
          source: values.source || "patient_uploaded",
          base64: btoa(bin),
        });
        id = result.id;
        form.dataset.id = id;
      }
      await api("/documents/" + id + "/metadata", {
        description: values.description,
        document_date: values.document_date,
      });
      $("#dialog").close();
      await load();
    }
    if (form.id === "qr-form") {
      const scopes = [...form.querySelectorAll("[name=scope]:checked")].map(
        (x) => x.value,
      );
      if (
        !scopes.length ||
        (values.purpose === "emergency" &&
          (scopes.length !== 1 || scopes[0] !== "emergency"))
      )
        throw Error("INVALID_SCOPE");
      qr = await api("/grants", { ...values, scopes });
      qr.recipient =
        data.doctors.find((d) => d.id === values.recipient_id)?.name ?? "";
      await load();
    }
    if (form.id === "access-form") {
      await useAccess(values.token, values.document_id);
      return;
    }
    if (form.id === "chat-form") {
      await chat(values.message);
      return;
    }
    notice(t("saved"));
  } catch (err) {
    const message = errorMessage(err.message, locale),
      el = form.querySelector("[data-form-error]");
    if (el && form.isConnected) el.textContent = message;
    else notice(message, true);
  } finally {
    if (submit?.isConnected) {
      submit.disabled = false;
      submit.textContent = old;
    }
    form.removeAttribute("aria-busy");
  }
});
window.addEventListener("hashchange", () => {
  offset = 0;
  archived = false;
  if (
    !["condition", "vaccination"].includes(filter) ||
    !location.hash.endsWith("/records")
  )
    filter = "all";
  $("#dialog").close();
  load();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    $("#sidebar")?.classList.remove("open");
    $(".mobile-menu")?.setAttribute("aria-expanded", "false");
  }
});
refreshMe().catch((err) => {
  renderAuth();
  if (err.message !== "UNAUTHENTICATED")
    notice(errorMessage(err.message, locale), true);
});
