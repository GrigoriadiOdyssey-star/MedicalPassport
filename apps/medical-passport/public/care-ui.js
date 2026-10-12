export function createCareUI({ api, e, t, modal, load, get, document }) {
  const L = (ru, en) => (get().locale === "ru" ? ru : en);
  const field = (name, label, value = "", type = "text", required = false) =>
    `<label>${e(label)}<input name="${name}" type="${type}" value="${e(value)}" ${required ? "required" : ""}></label>`;
  function card(x) {
    return `<article class="clinical-card"><div class="row spread"><h3>${e(x.body.provider)}</h3><span class="clinical-status">${e(t(x.body.status))}</span></div><p>${e(new Date(x.body.at).toLocaleString())} · ${e(x.body.specialty)}</p><p>${e(x.body.location)}</p><span class="verification-badge">${L("Запись пациента — не подтверждение клиники", "Patient entry — not a clinic confirmation")}</span><div class="card-actions"><button class="btn secondary" data-action="a4-care-edit" data-id="${x.id}">${L("Изменить / отменить", "Edit / cancel")}</button></div></article>`;
  }
  async function enrich(screen, d) {
    if (["care", "home"].includes(screen))
      d.appointments = await api("/appointments");
    if (screen === "guidelines")
      d.guidelines = await api("/guidelines/context");
    return d;
  }
  function render(screen, d) {
    if (screen === "care")
      return `<div class="screen-head"><div><p class="eyebrow">Care</p><h1>${L("Приёмы и планы", "Appointments & care")}</h1></div><button class="btn" data-action="a4-care-new">${L("Добавить приём", "Add appointment")}</button></div><p class="note">${L("Личный календарь. Бронирование, наличие врача и телемедицина не подключены.", "Personal calendar. Booking, provider availability and telemedicine are not connected.")}</p><h2>${L("Предстоящие", "Upcoming")}</h2><div class="clinical-list">${
        (d.appointments ?? [])
          .filter(
            (x) =>
              x.body.status === "planned" &&
              Date.parse(x.body.at) >= Date.now(),
          )
          .map(card)
          .join("") ||
        L("Нет запланированных приёмов", "No upcoming appointments")
      }</div><h2>${L("Прошедшие и отменённые", "Past & cancelled")}</h2><div class="clinical-list">${
        (d.appointments ?? [])
          .filter(
            (x) =>
              x.body.status !== "planned" || Date.parse(x.body.at) < Date.now(),
          )
          .map(card)
          .join("") || "—"
      }</div>`;
    if (screen === "guidelines") {
      const g = d.guidelines,
        c = g.context;
      return `<div class="screen-head"><div><p class="eyebrow">Guideline Intelligence</p><h1>${L("Рекомендации и юрисдикции", "Guidelines & jurisdictions")}</h1></div><span class="clinical-status">BLOCKED_EXTERNAL</span></div><div class="grid"><section class="clinical-card"><h2>${L("Контекст применения", "Applicability context")}</h2><p>${L("Страна проживания, текущее местоположение и страна оказания помощи — разные сведения. Не определяются по IP.", "Home, current location and care delivery are separate facts. They are not inferred from IP.")}</p><form id="care-context" data-version="${g.version}">${[
        [
          "patient_home",
          L("Страна проживания пациента", "Patient home country"),
        ],
        [
          "patient_current",
          L("Текущее местоположение пациента", "Patient current country"),
        ],
        [
          "treating_doctor",
          L("Юрисдикция лечащего врача", "Treating doctor jurisdiction"),
        ],
        [
          "care_delivery",
          L("Юрисдикция оказания помощи", "Care delivery jurisdiction"),
        ],
      ]
        .map(([k, l]) => field(k, l, c[k]?.country ?? ""))
        .join(
          "",
        )}${field("reason", L("Источник / причина изменения", "Source / reason"), c.reason ?? "", "text", true)}<p>${L("Пустое значение означает неизвестно. Ввод пациента не подтверждает лицензию врача.", "Empty means unknown. Patient input does not verify practitioner licensing.")}</p><button class="btn">${e(t("save"))}</button><div data-form-error role="alert"></div></form></section><section class="clinical-card"><h2>${L("Источники и версии", "Sources & versions")}</h2><dl class="clinical-grid"><div><dt>${L("Одобренные источники", "Approved sources")}</dt><dd>0</dd></div><div><dt>${L("Текущая версия", "Current version")}</dt><dd>${L("Не установлена", "Not established")}</dd></div></dl><h3>${L("Сравнение и перевод", "Comparison & translation")}</h3><p>${L("Недоступны без подключённых одобренных источников, версий оригиналов и проверенных переводов. Сохранённый контекст не создаёт клинических рекомендаций.", "Unavailable without approved sources, original versions and verified translations. Saved context does not create clinical recommendations.")}</p><h3>${L("Статус обновления", "Update status")}</h3><p>${L("Сеть внешних источников не подключена; актуальность не подтверждена.", "External source network is not connected; currentness is unverified.")}</p><p>GUIDELINE-CROSS-JURISDICTION · CAP-AI / CAP-DOCUMENTS / CAP-INTEROP</p></section></div>`;
    }
    return null;
  }
  function dashboard(d) {
    const x = (d.appointments ?? [])
      .filter(
        (x) =>
          x.body.status === "planned" && Date.parse(x.body.at) >= Date.now(),
      )
      .sort((a, b) => Date.parse(a.body.at) - Date.parse(b.body.at))[0];
    return `<section class="clinical-card care-next"><div class="row spread"><h2>${L("Ближайший приём", "Next appointment")}</h2><a class="btn ghost" href="#/care">${L("Календарь", "Calendar")} →</a></div>${x ? `<strong>${e(x.body.provider)}</strong><p>${e(new Date(x.body.at).toLocaleString())} · ${e(x.body.specialty)} · ${e(x.body.location)}</p>` : `<p>${L("Добавьте предстоящий приём в личный календарь.", "Add your next appointment to your personal calendar.")}</p>`}</section>`;
  }
  async function click(action, id) {
    const x = get().data.appointments?.find((x) => x.id === id),
      b = x?.body ?? {};
    let at = "";
    if (b.at) {
      const date = new Date(b.at);
      at = new Date(date - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
    }
    modal(
      L("Приём", "Appointment"),
      `<form id="care-appointment" data-id="${x?.id ?? ""}" data-version="${x?.version ?? 0}">${field("provider", L("Врач / организация", "Provider"), b.provider ?? "", "text", true)}${field("specialty", L("Специальность", "Specialty"), b.specialty ?? "")}${field("at", L("Время в текущем часовом поясе", "Time in current timezone"), at, "datetime-local", true)}${field("location", L("Адрес или сведения о телеконсультации", "Location or teleconsultation information"), b.location ?? "")}<label>${L("Статус", "Status")}<select name="status">${["planned", "attended", "cancelled"].map((s) => `<option value="${s}" ${b.status === s ? "selected" : ""}>${e(t(s))}</option>`).join("")}</select></label><p>${L("Не создаёт бронирование в клинике.", "Does not book a clinic appointment.")}</p><button class="btn">${e(t("save"))}</button><div data-form-error role="alert"></div></form>`,
    );
  }
  async function submit(form, v) {
    if (form.id === "care-appointment") {
      await api("/appointments", {
        ...v,
        at: new Date(v.at).toISOString(),
        id: form.dataset.id || undefined,
        version: Number(form.dataset.version),
      });
      document.querySelector("#dialog").close();
      await load();
      return true;
    }
    if (form.id === "care-context") {
      await api("/guidelines/context", {
        ...v,
        version: Number(form.dataset.version),
      });
      await load();
      return true;
    }
    return false;
  }
  return { enrich, render, dashboard, click, submit };
}
