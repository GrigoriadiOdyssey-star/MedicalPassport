import { createCareUI } from "./care-ui.js";
import { hashFile, SHA256 } from "./file-hash.js";
export function createAlpha4UI(ctx) {
  const { document, window, api, e, t, modal, load, get, notice, csrf } = ctx;
  const care = createCareUI(ctx);
  const L = (ru, en) => (get().locale === "ru" ? ru : en);
  const button = (text, action, id = "", extra = "") =>
    `<button class="btn secondary" type="button" data-action="a4-${action}" data-id="${e(id)}" ${extra}>${e(text)}</button>`;
  const input = (name, label, value = "", type = "text", required = false) =>
    `<label>${e(label)}<input name="${name}" type="${type}" value="${e(value)}" ${required ? "required" : ""}></label>`;
  const status = (text) => `<span class="clinical-status">${e(t(text))}</span>`;
  const source = (value) =>
    `<span class="source-badge">${e(value === "patient_reported" ? L("Со слов пациента", "Patient reported") : (value ?? L("Сообщено пациентом", "Patient reported")))}</span>`;
  const verification = () =>
    `<span class="verification-badge">${e(L("Не подтверждено врачом", "Not clinician verified"))}</span>`;
  let policy = null,
    paused = false,
    currentUpload = null,
    objectURL = null,
    currentStudy = null,
    pixels = null,
    image = null,
    viewerIndex = 0,
    zoom = 1,
    panX = 0,
    panY = 0;
  const health = [
    "records",
    "condition",
    "medication",
    "allergy",
    "vaccination",
    "observation",
    "imaging",
    "care",
  ];
  function archiveTabs() {
    return (
      '<div class="tabs" role="tablist">' +
      [false, true]
        .map(
          (v) =>
            '<button class="tab" role="tab" data-action="archive-tab" data-value="' +
            (v ? 1 : 0) +
            '" aria-selected="' +
            (Boolean(get().archived) === v) +
            '">' +
            e(t(v ? "archived" : "active")) +
            "</button>",
        )
        .join("") +
      "</div>"
    );
  }
  function subnav() {
    return `<nav class="health-nav" aria-label="${L("Разделы здоровья", "Health sections")}">${health.map((k) => `<a href="#/${k}" ${get().screen === k ? 'aria-current="page"' : ""}>${e(k === "imaging" ? L("Исследования", "Imaging") : t(k))}</a>`).join("")}</nav>`;
  }
  async function enrich(screen, d) {
    if (get().me?.role !== "patient") return d;
    d = await care.enrich(screen, d);
    if (["condition", "observation", "vaccination"].includes(screen))
      d = await api(
        "/views/" +
          screen +
          "?offset=" +
          (get().offset ?? 0) +
          "&archived=" +
          (get().archived ? 1 : 0),
      );
    if (screen === "medication-detail") {
      const id = new URLSearchParams(window.location.hash.split("?")[1]).get(
        "id",
      );
      d.record = await api("/record/" + id);
      d.history = await api("/records/" + id + "/history");
      d.reminders = await api("/reminders?days=30");
    }
    if (screen === "documents") {
      policy = await api("/storage-policy");
      d.uploads = await api("/uploads");
      d.versions = await Promise.all(
        (d.documents ?? []).map((x) => api("/documents/" + x.id + "/versions")),
      );
    }
    if (screen === "imaging") {
      policy = await api("/storage-policy");
      d.studies = await api("/imaging");
      d.uploads = await api("/uploads");
    }
    return d;
  }
  function clinicalCard(r) {
    const x = r.body;
    return `<article class="clinical-card"><div class="row spread"><h3>${e(x.name)}</h3>${status(x.status || x.flag || L("Запись", "Record"))}</div><div class="provenance-line">${source(r.source)}${verification()}<span>v${r.version}</span></div><dl class="clinical-grid">${Object.entries(
      x,
    )
      .filter(([k, v]) => k !== "name" && v)
      .map(
        ([k, v]) =>
          `<div><dt>${e(label(k))}</dt><dd>${k === "document_id" ? `<a href="#/documents?document=${encodeURIComponent(v)}">${e(L("Сертификат", "Certificate"))}</a>` : e(k === "observed_at" ? new Date(v).toLocaleString() : ["flag", "status"].includes(k) ? t(v) : v)}</dd></div>`,
      )
      .join(
        "",
      )}</dl><div class="card-actions">${r.archived ? "" : r.kind === "medication" ? `<a class="btn" href="#/medication">${L("Управление лекарством", "Manage medication")}</a>` : button(L("Изменить", "Edit"), "clinical-edit", r.id)}${button(L("История", "History"), "clinical-history", r.id)}${!r.archived ? button(L("Архивировать", "Archive"), "clinical-archive", r.id) : ""}</div></article>`;
  }
  const labels = {
    panel: "Panel",
    value: "Value",
    unit: "Unit",
    reference_low: "Reference low",
    reference_high: "Reference high",
    observed_at: "Date / time",
    provider: "Provider",
    specimen: "Specimen",
    method: "Method",
    flag: "Source flag",
    onset: "Onset",
    resolution: "Resolution",
    code: "Code",
    code_system: "Code system",
    dose_number: "Dose number",
    manufacturer: "Manufacturer",
    lot: "Lot",
    country: "Country",
    document_id: "Certificate document ID",
  };
  const ruLabels = {
    panel: "Панель",
    value: "Значение",
    unit: "Единица",
    reference_low: "Нижняя граница",
    reference_high: "Верхняя граница",
    observed_at: "Дата и время",
    provider: "Организация / врач",
    specimen: "Образец",
    method: "Метод",
    flag: "Отметка источника",
    onset: "Начало",
    resolution: "Разрешение",
    code: "Код",
    code_system: "Система кодирования",
    dose_number: "Номер дозы",
    manufacturer: "Производитель",
    lot: "Серия",
    country: "Страна",
    document_id: "ID сертификата",
  };
  const label = (k) =>
    get().locale === "ru" ? (ruLabels[k] ?? t(k)) : (labels[k] ?? t(k));
  function labsTrend(records) {
    const groups = new Map();
    for (const r of records) {
      const b = r.body;
      if (b.value === "" || !Number.isFinite(Number(b.value)) || !b.observed_at)
        continue;
      const k = [b.name, b.unit, b.method, b.specimen].join(" · ");
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(b);
    }
    return [...groups]
      .map(([key, values]) => {
        values.sort(
          (a, b) => Date.parse(a.observed_at) - Date.parse(b.observed_at),
        );
        if (values.length < 2) return "";
        const nums = values.map((v) => Number(v.value)),
          min = Math.min(...nums),
          max = Math.max(...nums);
        return `<section class="clinical-card"><h3>${e(key.replace(/( · )+$/, ""))}</h3><p>${nums.map((n) => e(n)).join(" → ")}</p><svg class="lab-trend" viewBox="0 0 600 130" role="img" aria-label="${e(L("Динамика показателя без клинической интерпретации", "Result trend without clinical interpretation"))}"><polyline fill="none" stroke="currentColor" stroke-width="3" points="${nums.map((v, i) => `${20 + (i * 560) / (nums.length - 1)},${110 - ((v - min) * 90) / (max - min || 1)}`).join(" ")}"/></svg><p>${e(new Date(values[0].observed_at).toLocaleDateString())} → ${e(new Date(values.at(-1).observed_at).toLocaleDateString())} · ${e(L("Сопоставлены только одинаковые название, единица, метод и образец.", "Only matching name, unit, method and specimen are grouped."))}</p></section>`;
      })
      .join("");
  }
  function render(screen, d) {
    if (["care", "guidelines"].includes(screen))
      return (screen === "care" ? subnav() : "") + care.render(screen, d);
    if (screen === "medication-detail") {
      const r = d.record;
      if (!r) return "";
      return `${subnav()}<div class="screen-head"><div><p class="eyebrow">${e(t("medication"))}</p><h1>${e(r.body.name)}</h1></div><a class="btn" href="#/medication">${L("К списку препаратов", "Back to medications")}</a></div>${clinicalCard(r)}<section class="clinical-card"><h2>${L("Расписание и история", "Schedule & history")}</h2>${(
        d.reminders.plans ?? []
      )
        .filter((p) => p.record_id === r.id)
        .map(
          (p) =>
            `<p>${e(p.config.timezone)} · ${e(p.config.times?.join(", ") || p.config.interval_hours + " h")} · ${e(p.active ? L("Активно", "Active") : L("Пауза", "Paused"))}</p>`,
        )
        .join(
          "",
        )}<p>${L("Изменить расписание и отметить приём можно в списке лекарств.", "Configure reminders and mark doses from the medications list.")}</p>${(
        d.reminders.doses ?? []
      )
        .filter((x) => x.record_id === r.id)
        .map(
          (x) =>
            `<div class="list-item">${e(new Date(x.scheduled_at).toLocaleString())} ${status(x.status)}</div>`,
        )
        .join(
          "",
        )}<details><summary>${L("Версии назначения", "Record versions")}</summary><pre>${e(JSON.stringify(d.history, null, 2))}</pre></details></section>`;
    }
    if (["condition", "observation", "vaccination"].includes(screen))
      return `${subnav()}<div class="screen-head"><h1>${e(t(screen))}</h1>${button(L("Добавить запись", "Add record"), "clinical-new", screen)}</div>${archiveTabs()}${screen === "observation" ? labsTrend(d.records ?? []) : ""}<div class="clinical-list">${(d.records ?? []).map(clinicalCard).join("") || `<section class="empty"><h2>${L("Начните с первой записи", "Add your first record")}</h2><p>${L("Сохраните источник и дату. Запись пациента не становится подтверждённым диагнозом.", "Keep the source and date. Patient entry does not establish a confirmed diagnosis.")}</p></section>`}</div>`;
    if (screen === "documents")
      return `<div class="screen-head"><div><p class="eyebrow">EDHT · ${L("Медицинский архив", "Medical archive")}</p><h1>${e(t("documents"))}</h1><p>${L("Оригиналы, версии и происхождение в одном месте", "Originals, versions and provenance in one place")}</p></div>${button(L("Загрузить файл", "Upload file"), "upload")}</div><p class="policy-line">${L("Лимит документа", "Document limit")}: ${Math.round((policy?.documentBytes ?? 0) / 1048576)} MiB · ${L("Возобновляемая загрузка · PDF, PNG, JPEG, TXT, CSV, JSON", "Resumable upload · PDF, PNG, JPEG, TXT, CSV, JSON")} · <a href="#/imaging">DICOM → ${L("Исследования", "Imaging")}</a></p>${archiveTabs()}${uploadSessions(d)}<div class="document-library">${
        (d.documents ?? [])
          .map((x, i) => {
            const v = d.versions?.[i]?.[0],
              m = v?.metadata ?? {};
            return `<article class="document-tile"><div class="document-format">${e(x.mime.split("/")[1].toUpperCase())}</div><div><h2>${e(m.title || x.name)}</h2><p>${e(m.category || x.document_type)} · ${e(m.date || x.document_date || "—")}</p><p>${e(m.provider || x.source)} · ${e(m.country || "—")} · ${e(m.language || x.language || "und")}</p><div class="provenance-line">${verification()}${status(m.translation || "Original")}<span>${v ? Math.ceil(v.size / 1024) + " KiB · v" + v.version : "Legacy original"}</span></div></div><div class="card-actions">${button(L("Открыть", "Open"), "document", x.id)}${button(L("Новая версия", "New version"), "version", x.id)}${!x.archived ? button(L("Архивировать", "Archive"), "document-archive", x.id) : ""}</div></article>`;
          })
          .join("") ||
        `<p>${L("Добавьте документы. Снимки DICOM загружайте в разделе исследований.", "Add documents. Import DICOM images in Imaging.")}</p>`
      }</div>`;
    if (screen === "imaging")
      return `${subnav()}<div class="screen-head"><div><p class="eyebrow">Medical Imaging</p><h1>${L("Исследования и снимки", "Studies & images")}</h1></div>${button(L("Импорт исследования", "Import study"), "imaging-upload")}</div><p class="note">${L("Обзор исходных снимков, не диагностический просмотрщик. Производная анатомия пациента не создана.", "Source image review, not a diagnostic viewer. No patient-derived anatomy has been created.")}</p>${uploadSessions(d)}<div class="clinical-list">${(d.studies ?? []).map((s) => `<article class="clinical-card"><div class="row spread"><h2>${e(s.metadata.title)}</h2>${status(s.archived ? L("Архив", "Archived") : s.metadata.modality)}</div><p>${e(s.metadata.bodyPart || "")} · ${e(s.metadata.acquisitionDate || "—")} · ${e(s.metadata.facility || "—")}</p>${source(s.metadata.source)}${verification()}<div class="card-actions">${button(L("Открыть исследование", "Open study"), "study", s.id)}</div></article>`).join("") || `<section class="empty"><h2>${L("Все серии одного исследования — вместе", "Keep every series of a study together")}</h2><p>${L("Выберите несколько DICOM Part 10 файлов либо PNG/JPEG. Идентификаторы исследования и серии извлекаются из поддерживаемых DICOM-файлов.", "Select multiple DICOM Part 10 files or PNG/JPEG. Study and series identifiers are extracted from supported DICOM files.")}</p></section>`}</div>`;
    if (screen === "search")
      return `<h1>${L("Поиск по паспорту", "Search your passport")}</h1><form id="a4-search"><label>${L("Записи, препараты, документы, источники", "Records, medicines, documents, sources")}<input name="q" required minlength="2" maxlength="100" type="search"></label><button class="btn">${L("Найти", "Search")}</button></form><div id="search-results" aria-live="polite"></div>`;
    return null;
  }
  function uploadSessions(d) {
    d = {
      ...d,
      uploads: (d.uploads ?? []).filter(
        (u) => u.kind === (get().screen === "imaging" ? "imaging" : "document"),
      ),
    };
    return (d.uploads ?? []).length
      ? `<section class="upload-resume"><h2>${L("Незавершённые загрузки", "Unfinished uploads")}</h2>${d.uploads.map((s) => `<div class="row spread"><span>${e(s.name)} · ${Math.round((s.received / s.size) * 100)}%</span>${button(L("Продолжить: выберите тот же файл", "Resume: select the same file"), "resume", s.id)}${button(L("Отменить", "Cancel"), "cancel-upload", s.id)}</div>`).join("")}</section>`
      : "";
  }
  async function uploadModal(
    kind = "document",
    documentID = "",
    resumeID = "",
  ) {
    paused = false;
    policy ??= await api("/storage-policy");
    modal(
      kind === "imaging"
        ? L("Импорт исследования", "Import study")
        : L("Загрузка документа", "Upload document"),
      `<form id="a4-upload" data-kind="${kind}" data-document="${e(documentID)}" data-resume="${e(resumeID)}"><label class="dropzone">${L("Выберите файл", "Choose file")}<input type="file" name="files" required ${kind === "imaging" ? 'multiple accept=".dcm,.png,.jpg,.jpeg"' : 'accept=".pdf,.png,.jpg,.jpeg,.txt,.csv,.json"'}></label>${input("title", L("Название", "Title"))}<div class="form-row">${input("provider", L("Организация / врач", "Provider"))}${input("country", L("Страна", "Country"))}${input("language", L("Язык", "Language"), "und")}${input("date", L("Дата", "Date"), "", "date")}</div>${kind === "document" ? `<label>${L("Категория", "Category")}<select name="category">${["Laboratory", "Imaging Report", "Prescription", "Discharge Summary", "Consultation", "Vaccination", "Referral", "Insurance", "Medical Certificate", "Other"].map((x) => `<option>${x}</option>`).join("")}</select></label>` : `${input("modality", "Modality", "OT")}${input("body_part", L("Область тела", "Body part"))}<label><input type="checkbox" name="binding" required>${L("Подтверждаю принадлежность выбранных файлов моему синтетическому профилю", "I confirm these files belong to my synthetic profile")}</label>`}${documentID ? input("reason", L("Причина новой версии", "Reason for new version"), "", "text", true) : ""}<p class="help">${L("Проверка SHA-256. Антивирусный сканер не подключён.", "SHA-256 verification. Malware scanner is not connected.")}</p><progress id="upload-progress" max="100" value="0"></progress><p id="upload-state" role="status"></p><div data-form-error role="alert"></div><div class="form-actions">${button(L("Пауза", "Pause"), "pause-upload")}<button class="btn">${L("Загрузить / повторить", "Upload / retry")}</button></div></form>`,
    );
  }
  async function sendFiles(form, v) {
    const files = [...form.elements.files.files];
    const progress = document.querySelector("#upload-progress"),
      state = document.querySelector("#upload-state");
    paused = false;
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const ext = file.name.split(".").at(-1).toLowerCase(),
        mime = {
          pdf: "application/pdf",
          png: "image/png",
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          txt: "text/plain",
          csv: "text/csv",
          json: "application/json",
          dcm: "application/dicom",
        }[ext];
      if (!mime) throw Error("UNSUPPORTED_FILE_TYPE");
      if (file.size > policy.documentBytes && form.dataset.kind === "document") throw Error("FILE_TOO_LARGE");
      state.textContent = `${index + 1}/${files.length} · ${file.name} · ${L("Проверка файла", "Hashing")}`;
      const hash = await hashFile(
        file,
        (n, total) => (progress.value = (n / total) * 100),
      );
      if (paused) {
        state.textContent = L(
          "Приостановлено. Нажмите загрузить для продолжения.",
          "Paused. Submit again to continue.",
        );
        return;
      }
      let session;
      if (form.dataset.resume) {
        session = await api("/uploads/" + form.dataset.resume);
        if (
          session.size !== file.size ||
          session.name !== file.name ||
          session.sha256 !== hash
        )
          throw Error("RESUME_FILE_MISMATCH");
      } else {
        session = await api("/uploads", {
          name: file.name,
          mime,
          size: file.size,
          sha256: hash,
          kind: form.dataset.kind,
          metadata: {
            ...v,
            files: undefined,
            document_id: form.dataset.document || undefined,
            source: "patient_upload",
            patient_binding_confirmed: v.binding === "on",
          },
        });
        form.dataset.resume = session.id;
      }
      currentUpload = session.id;
      if (session.transport === "supabase-signed") {
        const response = await window.fetch(session.upload_url, {method:"PUT",headers:{"Content-Type":mime,"cache-control":"no-store","x-upsert":"false"},body:file});
        if (!response.ok && response.status !== 409) throw Error("CLOUD_UPLOAD_FAILED");
        // Complete verifies stored bytes and hash; no provider body, URL or token is logged.
        await api("/uploads/" + session.id + "/complete", {});
        form.dataset.resume = ""; currentUpload = null; progress.value = 100;
        continue;
      }
      for (
        let offset = session.received;
        offset < file.size;
        offset += policy.chunkBytes
      ) {
        if (paused) {
          state.textContent = L(
            "Пауза. Сессия сохранена на сервере.",
            "Paused. Session saved on server.",
          );
          return;
        }
        const bytes = new Uint8Array(
            await file.slice(offset, offset + policy.chunkBytes).arrayBuffer(),
          ),
          chunkHash = new SHA256().update(bytes).hex();
        const res = await window.fetch(
          "/api/uploads/" + session.id + "/chunk?offset=" + offset,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/octet-stream",
              "x-csrf-token": csrf(),
              "x-chunk-sha256": chunkHash,
            },
            body: bytes,
          },
        );
        if (!res.ok) throw Error((await res.json()).error);
        progress.value =
          (Math.min(offset + bytes.length, file.size) / file.size) * 100;
        state.textContent = `${index + 1}/${files.length} · ${file.name} · ${Math.round(progress.value)}%`;
      }
      state.textContent = L("Проверка и сохранение…", "Verifying and saving…");
      await api("/uploads/" + session.id + "/complete", {});
      form.dataset.resume = "";
      currentUpload = null;
    }
    document.querySelector("#dialog").close();
    await load();
    notice(L("Файлы сохранены", "Files saved"));
  }
  async function openDocument(id) {
    const versions = await api("/documents/" + id + "/versions");
    const v = versions[0];
    const d =
      get().data.documents?.find((x) => x.id === id) ??
      (v
        ? {
            id,
            name: v.name,
            mime: v.mime,
            source: v.metadata?.source || "patient_reported",
          }
        : null);
    if (!d) return;
    modal(
      d.name,
      `<p>${source(d.source)} ${verification()}</p><div class="card-actions">${button(L("Предпросмотр", "Preview"), "preview", id)}<a class="btn" href="/api/documents/${id}" download>${e(t("download"))}</a><a class="btn" href="#/qr">${L("Поделиться через QR", "Share through QR")}</a>${button(L("Новая версия", "New version"), "version", id)}</div><p>${L("Переводчик не подключён. Оригинал сохраняется неизменным; перевод загружается отдельной версией с источником и причиной.", "Translation service is not connected. Originals remain immutable; upload a translation as a sourced version with a reason.")}</p><h3>${L("Происхождение и версии", "Provenance & versions")}</h3>${versions.map((x) => `<details><summary>v${x.version} · ${e(new Date(x.created_at).toLocaleString())} · ${e(x.reason)}</summary><p>${e(x.uploaded_by)} · ${e(x.scan_state)}</p><code class="hash">${e(x.sha256)}</code><pre>${e(JSON.stringify(x.metadata, null, 2))}</pre><a href="/api/documents/${id}?version=${x.version}" download>${L("Скачать эту версию", "Download this version")}</a></details>`).join("") || L("Исходный документ Alpha 0.3; история начинается с новой версии.", "Original Alpha 0.3 document; version history begins with the next revision.")}<div id="document-preview"></div>`,
    );
  }
  async function preview(id) {
    const versions = await api("/documents/" + id + "/versions");
    const d =
      get().data.documents?.find((x) => x.id === id) ??
      (versions[0]
        ? { id, name: versions[0].name, mime: versions[0].mime }
        : null);
    if (!d) return;
    if ((versions[0]?.size ?? 0) > (policy?.previewBytes ?? 33554432)) {
      document.querySelector("#document-preview").textContent = L(
        "Предпросмотр ограничен политикой памяти. Скачайте оригинал.",
        "Preview exceeds the memory policy. Download the original.",
      );
      return;
    }
    const response = await window.fetch("/api/documents/" + id);
    if (!response.ok) throw Error("PREVIEW_DENIED");
    const box = document.querySelector("#document-preview");
    if (objectURL) window.URL.revokeObjectURL(objectURL);
    if (["image/png", "image/jpeg"].includes(d.mime)) {
      objectURL = window.URL.createObjectURL(await response.blob());
      box.innerHTML = `<img class="document-preview" src="${objectURL}" alt="${e(d.name)}">`;
    } else if (
      ["text/plain", "text/csv", "application/json"].includes(d.mime)
    ) {
      const reader = response.body.getReader();
      let length = 0,
        chunks = [];
      while (length < 131072) {
        const { value, done } = await reader.read();
        if (done) break;
        chunks.push(value);
        length += value.length;
      }
      await reader.cancel();
      const all = new Uint8Array(Math.min(length, 131072));
      let at = 0;
      for (const b of chunks) {
        const part = b.subarray(0, all.length - at);
        all.set(part, at);
        at += part.length;
        if (at >= all.length) break;
      }
      box.innerHTML = `<p>${L("Первые 128 KiB", "First 128 KiB")}</p><pre>${e(new TextDecoder().decode(all))}</pre>`;
    } else {
      box.innerHTML = `<p>${L("Для PDF используйте защищённое скачивание и доверенный просмотрщик.", "For PDF use authenticated download and a trusted viewer.")}</p>`;
      await response.body.cancel();
    }
  }
  async function openStudy(id) {
    currentStudy = await api("/imaging/" + id);
    viewerIndex = 0;
    const list = currentStudy.series.flatMap((s) =>
      s.instances.map((i) => ({ ...i, series: s })),
    );
    currentStudy.instances = list;
    modal(
      currentStudy.metadata.title,
      `<div class="imaging-workspace"><aside><h3>${L("Серии и снимки", "Series & images")}</h3>${currentStudy.series.map((s) => `<details open><summary>${e(s.metadata.modality)} · ${s.instances.length} ${L("файлов", "files")}</summary>${s.instances.map((i) => button(i.metadata.instanceNumber || i.sop_uid.slice(-12), "image", i.id)).join("")}</details>`).join("")}<p>${verification()}</p><details><summary>Metadata / provenance</summary><pre>${e(JSON.stringify(currentStudy.metadata, null, 2))}</pre></details></aside><section><div class="viewer-toolbar">${button("−", "zoom-out")}${button("+", "zoom-in")}${button(L("Сброс", "Reset"), "viewer-reset")}<label>Window<input id="viewer-window" type="range" min="1" max="4096" value="256"></label><label>Level<input id="viewer-level" type="range" min="-2048" max="4096" value="128"></label></div><div class="viewer-stage"><canvas id="medical-canvas" width="640" height="480" aria-label="${L("Исходное изображение", "Source image")}"></canvas></div><p id="viewer-state" role="status"></p><p class="help">${L("Перетаскивайте для перемещения. Не для диагностики.", "Drag to pan. Not for diagnostic use.")}</p></section></div><form id="a4-report" data-id="${id}" data-version="${currentStudy.version}"><label>${L("Отчёт / комментарий к исследованию", "Study report / note")}<textarea name="report" maxlength="10000">${e(currentStudy.metadata.report || "")}</textarea></label>${input("reason", L("Причина изменения", "Reason for change"), "", "text", true)}<label><input type="checkbox" name="archived" ${currentStudy.archived ? "checked" : ""}>${L("Архив", "Archived")}</label><button class="btn">${L("Сохранить версию", "Save revision")}</button><div data-form-error role="alert"></div></form>`,
    );
    const canvas = document.querySelector("#medical-canvas");
    let drag = null;
    canvas.onpointerdown = (ev) => {
      drag = [ev.clientX, ev.clientY, panX, panY];
      canvas.setPointerCapture(ev.pointerId);
    };
    canvas.onpointermove = (ev) => {
      if (drag) {
        panX = drag[2] + ev.clientX - drag[0];
        panY = drag[3] + ev.clientY - drag[1];
        draw();
      }
    };
    canvas.onpointerup = () => (drag = null);
    document.querySelector("#viewer-window").oninput = draw;
    document.querySelector("#viewer-level").oninput = draw;
    if (list.length) await openImage(list[0].id);
  }
  async function openImage(id) {
    const i = currentStudy.instances.find((x) => x.id === id);
    if (!i) return;
    pixels = null;
    image = null;
    zoom = 1;
    panX = panY = 0;
    const state = document.querySelector("#viewer-state");
    state.innerHTML =
      e(i.sop_uid) +
      ` · <a href="/api/imaging-instances/${id}/file" download>${e(t("download"))}</a>`;
    const dicom = i.mime === "application/dicom";
    if (!dicom && i.size > (policy?.previewBytes ?? 33554432)) {
      state.textContent = L(
        "Изображение превышает политику памяти предпросмотра. Исходник сохранён.",
        "Image exceeds preview memory policy. Original retained.",
      );
      draw();
      return;
    }
    if (dicom && !i.metadata.viewerSupported) {
      state.textContent = L(
        "Формат пикселей не поддержан просмотрщиком. Исходник сохранён.",
        "Pixel format is not supported by this viewer. Original retained.",
      );
      draw();
      return;
    }
    const res = await window.fetch(
      "/api/imaging-instances/" + id + (dicom ? "/pixels" : "/file"),
    );
    if (!res.ok) throw Error("IMAGE_ACCESS_DENIED");
    if (dicom) {
      pixels = {
        bytes: new Uint8Array(await res.arrayBuffer()),
        metadata: i.metadata,
      };
      draw();
    } else {
      if (objectURL) window.URL.revokeObjectURL(objectURL);
      objectURL = window.URL.createObjectURL(await res.blob());
      image = new window.Image();
      image.onload = draw;
      image.onerror = () => {
        state.textContent = L(
          "Не удалось декодировать исходное изображение.",
          "Source image could not be decoded.",
        );
      };
      image.src = objectURL;
    }
  }
  function draw() {
    const canvas = document.querySelector("#medical-canvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    context.fillStyle = "#0b172a";
    context.fillRect(0, 0, canvas.width, canvas.height);
    let sourceImage = image;
    if (pixels) {
      const m = pixels.metadata,
        off = document.createElement("canvas");
      off.width = m.columns;
      off.height = m.rows;
      const c = off.getContext("2d"),
        data = c.createImageData(off.width, off.height),
        dv = new DataView(pixels.bytes.buffer),
        width = Number(document.querySelector("#viewer-window").value),
        level = Number(document.querySelector("#viewer-level").value);
      for (let p = 0; p < off.width * off.height; p++) {
        let value =
          Number(m.bitsAllocated) === 8
            ? pixels.bytes[p]
            : Number(m.pixelRepresentation) === 1
              ? dv.getInt16(p * 2, true)
              : dv.getUint16(p * 2, true);
        const stored = Number(m.bitsStored ?? m.bitsAllocated),
          high = Number(m.highBit ?? stored - 1);
        value = (value >>> (high + 1 - stored)) & (2 ** stored - 1);
        if (Number(m.pixelRepresentation) === 1 && value >= 2 ** (stored - 1))
          value -= 2 ** stored;
        value =
          value * Number(String(m.slope ?? 1).split("\\")[0]) +
          Number(String(m.intercept ?? 0).split("\\")[0]);
        let grey = Math.max(
          0,
          Math.min(255, ((value - (level - width / 2)) / width) * 255),
        );
        if (m.photometric === "MONOCHROME1") grey = 255 - grey;
        data.data.set([grey, grey, grey, 255], p * 4);
      }
      c.putImageData(data, 0, 0);
      sourceImage = off;
    }
    if (sourceImage) {
      const factor =
          Math.min(
            canvas.width / sourceImage.width,
            canvas.height / sourceImage.height,
          ) * zoom,
        w = sourceImage.width * factor,
        h = sourceImage.height * factor;
      context.drawImage(
        sourceImage,
        (canvas.width - w) / 2 + panX,
        (canvas.height - h) / 2 + panY,
        w,
        h,
      );
    }
  }
  function clinicalForm(kind, r) {
    const x = r?.body ?? {},
      fields =
        kind === "observation"
          ? [
              "panel",
              "value",
              "unit",
              "reference_low",
              "reference_high",
              "flag",
              "observed_at",
              "provider",
              "specimen",
              "method",
            ]
          : kind === "condition"
            ? [
                "status",
                "onset",
                "resolution",
                "provider",
                "code",
                "code_system",
              ]
            : [
                "dose_number",
                "date",
                "manufacturer",
                "lot",
                "country",
                "provider",
                "status",
                "document_id",
              ];
    modal(
      t(kind),
      `<form id="a4-clinical" data-kind="${kind}" data-id="${r?.id ?? ""}" data-version="${r?.version ?? ""}">${input("name", t("clinicalName"), x.name ?? "", "text", true)}<div class="form-row">${fields
        .map((k) => {
          const options =
            k === "flag"
              ? ["unknown", "normal", "low", "high", "critical"]
              : k === "status" && kind === "condition"
                ? ["active", "resolved", "remission", "unknown"]
                : null;
          return options
            ? `<label>${e(label(k))}<select name="${k}">${options.map((o) => `<option value="${o}" ${x[k] === o ? "selected" : ""}>${e(t(o))}</option>`).join("")}</select></label>`
            : input(
                k,
                label(k),
                k === "observed_at" && x[k]
                  ? new Date(
                      new Date(x[k]).getTime() -
                        new Date(x[k]).getTimezoneOffset() * 60000,
                    )
                      .toISOString()
                      .slice(0, 16)
                  : (x[k] ?? ""),
                ["date", "onset", "resolution"].includes(k)
                  ? "date"
                  : k === "observed_at"
                    ? "datetime-local"
                    : "text",
              );
        })
        .join(
          "",
        )}</div><label>${e(t("notes"))}<textarea name="notes">${e(x.notes ?? "")}</textarea></label><p>${verification()}</p><div data-form-error role="alert"></div><button class="btn">${e(t("save"))}</button></form>`,
    );
  }
  async function click(a, target) {
    if (!a.startsWith("a4-")) return false;
    const id = target.dataset.id,
      action = a.slice(3);
    if (action.startsWith("care-")) {
      await care.click(action, id);
      return true;
    }
    if (action === "upload") await uploadModal();
    else if (action === "version") await uploadModal("document", id);
    else if (action === "imaging-upload") await uploadModal("imaging");
    else if (action === "resume")
      await uploadModal(
        get().screen === "imaging" ? "imaging" : "document",
        "",
        id,
      );
    else if (action === "pause-upload") paused = true;
    else if (action === "cancel-upload") {
      await api("/uploads/" + id + "/cancel", {});
      await load();
    } else if (action === "document") await openDocument(id);
    else if (action === "preview") await preview(id);
    else if (action === "document-archive") {
      await api("/documents/" + id + "/archive", {});
      await load();
    } else if (action === "study") await openStudy(id);
    else if (action === "image") await openImage(id);
    else if (action === "zoom-in") {
      zoom = Math.min(8, zoom * 1.25);
      draw();
    } else if (action === "zoom-out") {
      zoom = Math.max(0.25, zoom / 1.25);
      draw();
    } else if (action === "viewer-reset") {
      zoom = 1;
      panX = panY = 0;
      draw();
    } else if (action === "clinical-new") clinicalForm(id);
    else if (action === "clinical-edit")
      clinicalForm(
        get().screen === "medication-detail" ? "medication" : get().screen,
        (get().data.records ?? [get().data.record]).find((r) => r.id === id),
      );
    else if (action === "clinical-history") {
      const rows = await api("/records/" + id + "/history");
      modal(t("history"), `<pre>${e(JSON.stringify(rows, null, 2))}</pre>`);
    } else if (action === "clinical-archive") {
      const r = (get().data.records ?? [get().data.record]).find(
        (r) => r.id === id,
      );
      await api("/records/" + id + "/archive", { version: r.version });
      await load();
    }
    return true;
  }
  async function submit(form, v) {
    if (await care.submit(form, v)) return true;
    if (form.id === "a4-upload") {
      await sendFiles(form, v);
      return true;
    }
    if (form.id === "a4-report") {
      await api("/imaging/" + form.dataset.id, {
        ...v,
        version: Number(form.dataset.version),
        archived: v.archived === "on",
      });
      document.querySelector("#dialog").close();
      await load();
      return true;
    }
    if (form.id === "a4-clinical") {
      if (v.observed_at) v.observed_at = new Date(v.observed_at).toISOString();
      await api(
        form.dataset.id
          ? "/records/" + form.dataset.id + "/update"
          : "/records",
        form.dataset.id
          ? { body: v, version: Number(form.dataset.version) }
          : { kind: form.dataset.kind, body: v },
      );
      document.querySelector("#dialog").close();
      await load();
      return true;
    }
    if (form.id === "a4-search") {
      const result = await api("/search?q=" + encodeURIComponent(v.q));
      document.querySelector("#search-results").innerHTML =
        `<h2>${L("Результаты", "Results")}</h2>${result.records.map((r) => `<a class="search-result" href="#/${r.kind}"><strong>${e(r.body.name || t(r.kind))}</strong>${source(r.source)}</a>`).join("")}${result.records.length || result.documents.length ? "" : L("Совпадений нет", "No matches")}${result.documents.map((d) => `<a class="search-result" href="#/documents?document=${encodeURIComponent(d.id)}"><strong>${e(d.name)}</strong>${source(d.source)}</a>`).join("")}`;
      return true;
    }
    return false;
  }
  async function activate() {
    const q = new URLSearchParams(window.location.hash.split("?")[1]);
    if (get().screen === "documents" && q.get("document"))
      await openDocument(q.get("document"));
    if (get().screen === "imaging" && q.get("study"))
      await openStudy(q.get("study"));
  }
  function clear() {
    paused = true;
    currentStudy = null;
    pixels = null;
    image = null;
    if (objectURL) window.URL.revokeObjectURL(objectURL);
    objectURL = null;
  }
  return {
    enrich,
    render,
    click,
    submit,
    subnav,
    clear,
    activate,
    uploadModal,
    clinicalForm,
    careDashboard: care.dashboard,
    components: {
      ClinicalStatus: status,
      SourceBadge: source,
      VerificationBadge: verification,
      LabResult: clinicalCard,
    },
  };
}
