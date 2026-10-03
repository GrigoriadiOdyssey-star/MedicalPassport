// Product workflows reuse the existing auth/CSRF transport and confirmed server responses.
export function createProductUI(ctx) {
  const { document, window } = ctx;
  const { api, t, e, b, chip, field, modal, actions, notice, load, get, link } =
    ctx;
  let noticeFilter = "unread",
    noticeType = "all",
    noticeOffset = 0,
    days = 1,
    browserEnabled = false,
    seen = new Set(),
    pollInFlight = false,
    pollBlocked = false,
    medPhase = "active",
    accessFilter = "active",
    accessOffset = 0,
    doseOffset = 0;
  const dateTime = (at, zone) =>
    new Date(at).toLocaleString(get().locale, { timeZone: zone ?? undefined });
  const doseCard = (d) =>
    `<article class="dose-card"><div><strong>${e(d.snapshot.name)}</strong><p>${e([d.snapshot.dose, d.snapshot.unit].filter(Boolean).join(" "))} · ${e(dateTime(d.scheduled_at, d.snapshot.timezone))}</p><small>${e(d.snapshot.timezone)} · ${e(d.snapshot.instructions || d.snapshot.notes || "")}</small></div>${chip(d.status)}${d.status === "PENDING" && d.scheduled_at <= Date.now() ? `<div class="card-actions">${b("take", "dose", `data-id="${d.id}" data-dose-action="taken"`, "")}${b("skipDose", "dose", `data-id="${d.id}" data-dose-action="skip"`)}<label>${e(t("snooze"))}<select data-snooze="${d.id}">${[5, 10, 30, 60].map((n) => `<option value="${n}" ${n === 10 ? "selected" : ""}>${n} ${e(t("minutes"))}</option>`).join("")}</select></label>${b("snooze", "dose", `data-id="${d.id}" data-dose-action="snooze"`)}</div>` : ""}</article>`;
  const badge = (n) => {
    const el = document.querySelector("[data-unread]");
    if (el) el.textContent = n || "";
  };
  async function enrich(screen, d) {
    if (get().me?.role !== "patient") return d;
    const notifications = await api(
      "/notifications?filter=" +
        encodeURIComponent(noticeFilter) +
        "&type=" +
        noticeType +
        "&offset=" +
        noticeOffset,
    );
    pollBlocked = false;
    d.notifications = notifications;
    badge(notifications.unread);
    if (["home", "medication", "notifications"].includes(screen))
      d.reminders = await api(
        "/reminders?days=" +
          (screen === "medication" ? days : 1) +
          "&offset=" +
          (screen === "medication" ? doseOffset : 0),
      );

    if (["privacy", "profile", "home"].includes(screen)) {
      const [grants, audit] = await Promise.all([
        api(
          "/grants?offset=" +
            (screen === "privacy" ? accessOffset : 0) +
            "&status=" +
            (screen === "privacy" ? accessFilter : "active"),
        ),
        api("/audit"),
      ]);
      d.grants = grants;
      d.activity = audit;
    }
    if (screen === "notification-settings")
      d.preferences = await api("/notification-settings");
    if (screen === "profile") d.sessions = await api("/sessions");

    return d;
  }
  function notifications(d) {
    return `<div class="screen-head"><h1>${e(t("notifications"))}</h1>${link("notification-settings")}</div><div class="toolbar tabs">${["today", "upcoming", "unread", "all"].map((k) => b(k, "notification-filter", `data-value="${k}" aria-pressed="${noticeFilter === k}"`)).join("")}</div><div class="toolbar"><label>${e(t("notificationType"))}<select data-notification-type>${["all", "Medication", "Appointment", "Document", "Access", "Security", "Emergency", "Clinical", "Guideline", "System"].map((k) => `<option ${noticeType === k ? "selected" : ""} value="${k}">${e(t(k))}</option>`).join("")}</select></label>${b("markAllRead", "notification-action", 'data-notice-action="read_all"')}</div><div class="notification-list">${(d.notifications?.items ?? []).map((n) => `<article class="card notification ${n.status === "DELIVERED" ? "unread" : ""}"><div class="row spread"><h2>${e(t(n.title))}</h2>${chip(n.status)}</div><p>${e(n.message)}</p><small>${e(t(n.type))} · ${e(dateTime(n.scheduled_at))}${n.audit_seq ? " · " + e(t("notificationAudit")) + " #" + n.audit_seq : ""}</small><div class="card-actions"><a class="btn" href="${e(n.action_url)}">${e(t("open"))}</a>${["DELIVERED", "READ"].includes(n.status) ? b("markRead", "notification-action", `data-id="${n.notification_id}" data-notice-action="read"`) : ""}${n.priority !== "CRITICAL" ? b("dismiss", "notification-action", `data-id="${n.notification_id}" data-notice-action="dismiss"`) : ""}</div>${n.source === "medication_dose" && n.status !== "CANCELLED" && (d.reminders?.doses ?? []).find((x) => x.id === n.related_entity) ? doseCard(d.reminders.doses.find((x) => x.id === n.related_entity)) : ""}</article>`).join("") || `<div class="empty">${e(t("noNotification"))}</div>`}</div><div class="toolbar">${noticeOffset ? b("previous", "notification-page", `data-offset="${Math.max(0, noticeOffset - 30)}"`) : ""}${d.notifications?.items?.length === 30 ? b("next", "notification-page", `data-offset="${noticeOffset + 30}"`) : ""}</div>`;
  }
  function preferences(d) {
    return `<h1>${e(t("notificationSettings"))}</h1><p class="note">${e(t("channelNotice"))}</p><form id="notification-settings-form"><div class="grid">${(d.preferences ?? []).map((p) => `<section class="card"><h2>${e(t(p.type))}</h2><label class="check"><input type="checkbox" name="enabled-${p.type}" ${p.enabled ? "checked" : ""} ${p.type === "Security" ? "disabled" : ""}>${e(t("enabled"))}</label>${field("channel-" + p.type, "preferredChannel", p.channel, "text", true, ["IN_APP", "BROWSER", "PUSH", "EMAIL", "SMS"])}${p.type === "Security" ? `<p class="help">${e(t("securityRequired"))}</p>` : ""}</section>`).join("")}</div><div data-form-error role="alert"></div><button class="btn">${e(t("save"))}</button></form><section class="card">${b("enableBrowser", "enable-browser")}<p class="help">${e(t("channelNotice"))}</p></section>`;
  }
  function privacy(d, compact = false) {
    return `${compact ? "" : `<h1>${e(t("privacy"))}</h1><div class="toolbar tabs">${["active", "expired", "revoked", "used", "all"].map((k) => b(k, "access-filter", `data-value="${k}" aria-pressed="${accessFilter === k}"`)).join("")}</div><p class="note">${e(t("privacyInfo"))}</p>`}<div class="grid">${
      (d.grants ?? [])
        .filter(
          (g) =>
            !compact ||
            (g.expires_at > Date.now() &&
              g.revoked_at === null &&
              !(g.one_time && g.used_at)),
        )
        .slice(0, compact ? 3 : 100)
        .map(
          (g) =>
            `<article class="card"><h2>${e(g.recipient)}</h2><p>${g.scopes.map((s) => e(t(s))).join(" · ")}</p>${chip(g.revoked_at !== null ? "revoked" : g.expires_at <= Date.now() ? "expired" : g.one_time && g.used_at ? "used" : "active")}<p>${e(t("expires"))}: ${e(dateTime(g.expires_at))}</p><p>${e(t(g.purpose))}</p>${g.revoked_at === null && g.expires_at > Date.now() ? b("revoke", "revoke", `data-id="${g.id}"`) : ""}</article>`,
        )
        .join("") || `<p class="muted">${e(t("emptyAccess"))}</p>`
    }</div>${
      compact
        ? ""
        : `<div class="toolbar">${accessOffset ? b("previous", "access-page", `data-offset="${Math.max(0, accessOffset - 30)}"`) : ""}${d.grants?.length === 30 ? b("next", "access-page", `data-offset="${accessOffset + 30}"`) : ""}</div><section class="card"><h2>${e(t("accessActivity"))}</h2>${
            (d.activity ?? [])
              .filter((a) => /GRANT|SHARED_|EMERGENCY_ACCESS/.test(a.action))
              .map(
                (a) =>
                  `<div class="list-item">${e(t(a.action))}<small>${e(dateTime(a.occurred_at))} · #${a.seq}</small></div>`,
              )
              .join("") || e(t("nothing"))
          }</section>`
    }`;
  }
  function dashboard(d) {
    const day = (at) =>
      new Intl.DateTimeFormat("en-CA", {
        timeZone: d.reminders?.timezone ?? "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(at));
    const reminders = d.reminders?.doses ?? [],
      due = reminders
        .filter(
          (x) =>
            x.status === "PENDING" && day(x.scheduled_at) === day(Date.now()),
        )
        .sort((a, b) => a.scheduled_at - b.scheduled_at)
        .slice(0, 3);
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return `<section class="command-center"><div class="screen-head"><h2>${e(t("today"))}</h2>${link("notifications")}</div>${d.profile?.timezone && d.profile.timezone !== zone ? `<div class="note"><p>${e(t("timezoneChanged"))}</p><div class="row">${b("keepHome", "timezone", 'data-mode="home"')}${b("useLocal", "timezone", 'data-mode="local"')}</div></div>` : ""}<div class="grid"><section class="card wide"><div class="row spread"><h3>${e(t("reminders"))}</h3>${link("medication")}</div>${due.map(doseCard).join("") || `<p>${e(t("emptyDoses"))}</p>`}</section><section class="card"><h3>${e(t("healthSummary"))}</h3><div class="summary-stats">${["medication", "allergy", "condition", "vaccination"].map((k) => `<div><strong>${d.counts?.find((x) => x.kind === k)?.count ?? 0}</strong><span>${e(t(k))}</span></div>`).join("")}</div></section><section class="card"><h3>${e(t("outstanding"))}</h3><p class="big-value">${d.notifications?.unread ?? 0}</p>${link("notifications", "unread")}<p class="help">${e(t("noAppointments"))}</p></section></div><div class="row spread"><h2>${e(t("activeAccess"))}</h2>${link("privacy", "view")}</div>${privacy(d, true)}</section>`;
  }
  function adherence(d) {
    const zone = d.reminders?.timezone ?? "UTC";
    const dateAt = (at) =>
      new Intl.DateTimeFormat("en-CA", {
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(at));
    const today = dateAt(Date.now());
    const start = dateAt(Date.now() - (days - 1) * 86400000);
    const doses = (d.reminders?.doses ?? []).filter(
      (x) =>
        x.status !== "CANCELLED" &&
        dateAt(x.scheduled_at) >= start &&
        dateAt(x.scheduled_at) <= today,
    );
    return `<section class="card adherence"><div class="row spread"><h2>${e(t("adherence"))}</h2><div class="tabs">${[
      [1, "today"],
      [7, "days7"],
      [30, "days30"],
    ]
      .map(([n, k]) =>
        b(k, "dose-days", `data-days="${n}" aria-pressed="${days === n}"`),
      )
      .join(
        "",
      )}</div></div><p class="help">${e(t("adherenceNote"))}</p><div class="chips">${["TAKEN", "TAKEN_LATE", "SKIPPED", "MISSED", "PENDING"].map((k) => `<span class="chip ${k}">${e(t(k))}: ${d.reminders?.counts?.find((x) => x.status === k)?.n ?? doses.filter((x) => x.status === k).length}</span>`).join("")}</div><details><summary>${e(t("adherence"))} (${doses.length})</summary>${doses.map(doseCard).join("") || e(t("emptyDoses"))}</details><div class="toolbar">${doseOffset ? b("previous", "dose-page", `data-offset="${Math.max(0, doseOffset - 300)}"`) : ""}${d.reminders?.doses?.length === 300 ? b("next", "dose-page", `data-offset="${doseOffset + 300}"`) : ""}</div></section>`;
  }
  function medTools(r, d) {
    const p = (d.reminders?.plans ?? []).find((x) => x.record_id === r.id);
    return `<div class="reminder-tools">${p ? `<p>${e(t(p.active ? "scheduleActive" : "schedulePaused"))} · ${e(p.config.timezone)} · ${e(p.config.mode === "daily" ? p.config.times.join(", ") : p.config.interval_hours + " h")}</p>` : ""}${!r.archived && r.body.status !== "stopped" ? b("configureReminder", "configure-reminder", `data-id="${r.id}"`) : ""}${p?.active ? b("pauseReminder", "pause-reminder", `data-id="${p.id}"`) : ""}</div>`;
  }
  async function configure(id) {
    const d = get().data;
    const r = d.records?.find((r) => r.id === id);
    if (!r) return;
    const plan = d.reminders?.plans?.find((x) => x.record_id === id),
      c = plan?.config ?? {},
      zone = c.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
      now = new Date(
        c.mode === "interval" && c.anchor > 0 ? c.anchor : Date.now(),
      );
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      })
        .formatToParts(now)
        .map((p) => [p.type, p.value]),
    );
    const local =
      parts.year +
      "-" +
      parts.month +
      "-" +
      parts.day +
      "T" +
      parts.hour +
      ":" +
      parts.minute;
    modal(
      "configureReminder",
      `<h3>${e(r.body.name)} · ${e(r.body.dose || "")}</h3><p class="note">${e(t("scheduleSafety"))}</p><form id="reminder-form" data-record-id="${id}" novalidate><div class="tabs">${[
        ["onceDaily", "08:00"],
        ["twiceDaily", "08:00,20:00"],
        ["threeDaily", "08:00,14:00,20:00"],
      ]
        .map(([k, v]) => b(k, "schedule-preset", `data-times="${v}"`))
        .join(
          "",
        )}</div>${field("mode", "schedule", c.mode ?? "daily", "text", true, ["daily", "interval"])}${field("times", "times", (c.times ?? ["08:00"]).join(", "), "text")}<div class="weekday-options" data-clock-only>${["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((k, i) => `<label><input type="checkbox" name="weekday" value="${i}" ${(c.weekdays ?? [0, 1, 2, 3, 4, 5, 6]).includes(i) ? "checked" : ""}>${e(t(k))}</label>`).join("")}</div><details ${c.mode === "interval" ? "open" : ""}><summary>${e(t("interval"))}</summary>${field("interval_hours", "intervalHours", c.interval_hours ?? 24, "number")}${field("anchor_local", "anchor", local, "datetime-local")}</details><div class="form-row">${field("start", "start", c.start || r.body.start || local.slice(0, 10), "date", true)}${field("end", "end", c.end ?? r.body.end ?? "", "date")}</div>${field("timezone", "timezone", zone, "text", true)}<p class="help">${e(t("zoneSafety"))}</p><label class="check"><input name="confirmed" type="checkbox" required>${e(t("scheduleConfirm"))}</label><div data-form-error role="alert"></div>${actions()}</form>`,
    );
    await change(document.querySelector("#reminder-form [name=mode]"));
  }
  function profileExtras(d) {
    return `<div class="grid settings-grid"><section class="card"><h2>${e(t("notifications"))}</h2>${link("notification-settings")}<h2>${e(t("privacy"))}</h2>${link("privacy", "view")}</section><section class="card"><h2>${e(t("security"))}</h2><p>${e(d.auth_provider === "supabase" ? (get().locale === "ru" ? "Вход, восстановление доступа и срок действия сессии управляются Supabase Auth." : "Sign-in, account recovery and session lifetime are managed by Supabase Auth.") : t("securityInfo"))}</p>${b("logout", "logout")}<h3>${e(t("devices"))}</h3><p class="muted">${e(t("notConnected"))}</p></section><section class="card wide"><h2>${e(t("sessions"))}</h2>${(d.sessions ?? []).map((s) => `<div class="row spread"><p>${e(t(s.current ? "currentSession" : "sessions"))} #${s.id}<br><small>${s.expires_at ? e(t("expires")) + ": " + e(dateTime(s.expires_at)) : e(get().locale === "ru" ? "Срок действия управляется Supabase Auth" : "Lifetime managed by Supabase Auth")}</small></p>${!s.current && s.revocable !== false ? b("endSession", "end-session", `data-id="${s.id}"`) : ""}</div>`).join("")}</section></div>`;
  }
  async function click(a, target) {
    const id = target.dataset.id;
    if (a === "access-filter") {
      accessFilter = target.dataset.value;
      accessOffset = 0;
      await load();
    } else if (a === "access-page") {
      accessOffset = Number(target.dataset.offset);
      await load();
    } else if (a === "dose-page") {
      doseOffset = Number(target.dataset.offset);
      await load();
    } else if (a === "notification-filter") {
      noticeFilter = target.dataset.value;
      noticeOffset = 0;
      await load();
    } else if (a === "notification-page") {
      noticeOffset = Number(target.dataset.offset);
      await load();
    } else if (a === "notification-action") {
      await api("/notifications/action", {
        id,
        action: target.dataset.noticeAction,
      });
      await load();
    } else if (a === "configure-reminder") {
      await configure(id);
    } else if (a === "schedule-preset") {
      document.querySelector("#reminder-form [name=times]").value =
        target.dataset.times;
      document.querySelector("#reminder-form [name=mode]").value = "daily";
      document
        .querySelector("#reminder-form [name=mode]")
        .dispatchEvent(new window.Event("change", { bubbles: true }));
    } else if (a === "pause-reminder") {
      await api("/reminders/pause", { id });
      await load();
      notice(t("schedulePaused"));
    } else if (a === "dose") {
      const minutes = Number(
        document.querySelector(`[data-snooze="${id}"]`)?.value ?? 10,
      );
      await api("/doses/action", {
        id,
        action: target.dataset.doseAction,
        minutes,
      });
      await load();
      notice(t("saved"));
    } else if (a === "dose-days") {
      days = Number(target.dataset.days);
      doseOffset = 0;
      await load();
    } else if (a === "timezone") {
      await api("/timezone", {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        mode: target.dataset.mode,
      });
      await load();
    } else if (a === "end-session") {
      await api("/sessions/revoke", { id });
      await load();
    } else if (a === "enable-browser") {
      if (!("Notification" in window)) {
        notice(t("browserUnavailable"), true);
        return true;
      }
      const permission = await window.Notification.requestPermission();
      browserEnabled = permission === "granted";
      notice(
        t(browserEnabled ? "browserEnabled" : "browserUnavailable"),
        !browserEnabled,
      );
    } else return false;
    return true;
  }
  async function submit(form, values) {
    if (form.id === "reminder-form") {
      await api("/reminders", {
        ...values,
        record_id: form.dataset.recordId,
        times: values.times
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        weekdays:
          values.mode === "interval"
            ? [0, 1, 2, 3, 4, 5, 6]
            : [...form.querySelectorAll("[name=weekday]:checked")].map((x) =>
                Number(x.value),
              ),
        confirmed: values.confirmed === "on",
      });
      document.querySelector("#dialog").close();
      await load();
      notice(t("reminderScheduled"));
      return true;
    }
    if (form.id === "notification-settings-form") {
      await api("/notification-settings", {
        preferences: (get().data.preferences ?? []).map((p) => ({
          type: p.type,
          enabled:
            p.type === "Security" || values["enabled-" + p.type] === "on",
          channel: values["channel-" + p.type],
        })),
      });
      await load();
      notice(t("saved"));
      return true;
    }
    return false;
  }
  async function change(target) {
    if (target.closest("#reminder-form") && target.name === "mode") {
      const form = target.form;
      const clock = target.value === "daily";
      form.querySelector(".weekday-options").hidden = !clock;
      form.querySelector("[name=times]").closest("label").hidden = !clock;
      form.querySelector("details").open = !clock;
      return true;
    }
    if (target.matches("[data-notification-type]")) {
      noticeType = target.value;
      noticeOffset = 0;
      await load();
      return true;
    }
    return false;
  }
  async function poll() {
    if (!get().me || get().me.role !== "patient" || document.hidden || pollInFlight || pollBlocked) return;
    pollInFlight = true;
    const actor = get().me.id;
    try {
    const n = await api("/notifications?filter=unread");
    if (!get().me || get().me.id !== actor) return;
    badge(n.unread);
    if (browserEnabled && window.Notification?.permission === "granted") {
      const prefs = await api("/notification-settings");
      for (const item of n.items ?? []) {
        if (
          !seen.has(item.notification_id) &&
          prefs.find((p) => p.type === item.type)?.channel === "BROWSER"
        ) {
          seen.add(item.notification_id);
          new window.Notification("EDHT", {
            body: t("genericNotification"),
            tag: item.notification_id,
          });
        }
      }
    }
    } catch (error) {
      // Pause after any failure; an explicit successful screen load or a new session resumes.
      pollBlocked = true;
      throw error;
    } finally { pollInFlight = false; }

  }
  return {
    enrich,
    render: (s, d) =>
      s === "notifications"
        ? notifications(d)
        : s === "notification-settings"
          ? preferences(d)
          : s === "privacy"
            ? privacy(d)
            : null,
    dashboard,
    adherence,
    medTools,
    profileExtras,
    click,
    submit,
    change,
    poll,
    isPollingPaused: () => pollBlocked || pollInFlight,
    clear() {
      browserEnabled = false;
      pollBlocked = false;
      pollInFlight = false;
      seen.clear();
      noticeFilter = "unread";
      noticeOffset = 0;
      noticeType = "all";
      accessFilter = "active";
      accessOffset = 0;
      doseOffset = 0;
      days = 1;
    },
  };
}
