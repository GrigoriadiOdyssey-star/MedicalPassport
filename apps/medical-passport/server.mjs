import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import QRCode from "qrcode";
import { Store, HttpError, appRoot, hash } from "./store.mjs";
import { adaptFHIR } from "./interop.mjs";
import { attachUX } from "./ux-store.mjs";
import { attachProduct } from "./product-store.mjs";
attachUX(Store);
attachProduct(Store);
export function createApplication({
  database = path.join(appRoot, "var", "passport.sqlite"),
  mode = process.env.EDHT_MODE ?? "synthetic",
  now,
} = {}) {
  if (mode !== "synthetic" || process.env.NODE_ENV === "production")
    throw Error(
      "PRODUCTION_RELEASE_GATES_OPEN: only synthetic loopback mode permitted",
    );
  const store = new Store(database, now);
  let origin;
  let notificationWorker;
  const registrationLimit = new Map();
  const server = http.createServer(async (req, res) => {
    const headers = {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    };
    for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);
    let requestActor = "anonymous";
    const json = (status, value) => {
      res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
      });
      res.end(JSON.stringify(value));
    };
    try {
      if (req.headers.host !== new URL(origin).host)
        throw new HttpError(403, "INVALID_HOST");
      const url = new URL(req.url, origin),
        route = url.pathname;
      const mutation = !["GET", "HEAD"].includes(req.method);
      if (mutation && req.headers.origin !== origin)
        throw new HttpError(403, "INVALID_ORIGIN");
      let body = {};
      if (mutation) {
        if (
          !String(req.headers["content-type"] ?? "").startsWith(
            "application/json",
          )
        )
          throw new HttpError(415, "JSON_REQUIRED");
        let length = 0,
          chunks = [];
        for await (const chunk of req) {
          length += chunk.length;
          if (length > 1600000) throw new HttpError(413, "BODY_TOO_LARGE");
          chunks.push(chunk);
        }
        try {
          body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
        } catch {
          throw new HttpError(400, "INVALID_JSON");
        }
        if (!body || typeof body !== "object" || Array.isArray(body))
          throw new HttpError(400, "INVALID_JSON");
      }
      if (
        req.method === "GET" &&
        [
          "/",
          "/main.js",
          "/i18n.js",
          "/ui.js",
          "/app.css",
          "/product-ui.js",
          "/product-i18n.js",
        ].includes(route)
      ) {
        const filename = route === "/" ? "index.html" : route.slice(1),
          mime = route.endsWith(".js")
            ? "text/javascript"
            : route.endsWith(".css")
              ? "text/css"
              : "text/html";
        res.writeHead(200, { "Content-Type": mime + "; charset=utf-8" });
        res.end(fs.readFileSync(path.join(appRoot, "public", filename)));
        return;
      }
      if (req.method === "GET" && route === "/api/health") {
        json(200, {
          status: "ok",
          mode: "synthetic",
          migrations: store.db
            .prepare("SELECT version FROM migrations ORDER BY version")
            .all(),
          release_gates_open: true,
        });
        return;
      }
      if (req.method === "POST" && route === "/api/register") {
        const ip = req.socket.remoteAddress,
          now = Date.now(),
          recent = (registrationLimit.get(ip) ?? []).filter(
            (t) => now - t < 60000,
          );
        if (recent.length >= 10) throw new HttpError(429, "TRY_LATER");
        registrationLimit.set(ip, [...recent, now]);
        if (body.synthetic !== true || body.adult !== true)
          throw new HttpError(400, "SYNTHETIC_ADULT_CONFIRMATION_REQUIRED");
        if (body.role && body.role !== "patient")
          throw new HttpError(403, "ROLE_SELF_ASSIGNMENT_FORBIDDEN");
        json(201, store.register(body));
        return;
      }
      if (req.method === "POST" && route === "/api/login") {
        const login = store.login(
          body.email,
          body.password,
          req.socket.remoteAddress,
        );
        res.setHeader(
          "Set-Cookie",
          `edht_session=${login.token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`,
        );
        json(200, { csrf: login.csrf });
        return;
      }
      if (req.method === "POST" && route === "/api/recover") {
        store.recover(body.token, body.password);
        json(200, { ok: true });
        return;
      }
      const token = String(req.headers.cookie ?? "")
          .split(";")
          .map((s) => s.trim())
          .find((s) => s.startsWith("edht_session="))
          ?.slice(13),
        user = store.session(token);
      if (!user) throw new HttpError(401, "UNAUTHENTICATED");
      requestActor = user.user_id;
      if (mutation && req.headers["x-csrf-token"] !== user.csrf)
        throw new HttpError(403, "INVALID_CSRF");
      if (req.method === "GET" && route === "/api/notifications") {
        json(
          200,
          store.notificationList(
            user,
            url.searchParams.get("filter") ?? "all",
            url.searchParams.get("type") ?? "all",
            Number(url.searchParams.get("offset") ?? 0),
          ),
        );
        return;
      }
      if (req.method === "POST" && route === "/api/notifications/action") {
        json(
          200,
          store.notificationAction(
            user,
            body.id ?? "",
            body.action,
            body.minutes,
          ),
        );
        return;
      }
      if (req.method === "GET" && route === "/api/notification-settings") {
        json(200, store.preferences(user));
        return;
      }
      if (req.method === "POST" && route === "/api/notification-settings") {
        json(200, store.savePreferences(user, body));
        return;
      }
      if (req.method === "GET" && route === "/api/reminders") {
        json(
          200,
          store.reminderData(user, Number(url.searchParams.get("days") ?? 1),Number(url.searchParams.get("offset")??0)),
        );
        return;
      }
      if (req.method === "POST" && route === "/api/reminders") {
        json(201, store.configureReminder(user, body.record_id, body));
        return;
      }
      if (req.method === "POST" && route === "/api/reminders/pause") {
        json(200, store.pauseReminder(user, body.id));
        return;
      }
      if (req.method === "POST" && route === "/api/doses/action") {
        json(200, store.doseAction(user, body.id, body.action, body.minutes));
        return;
      }
      if (req.method === "POST" && route === "/api/timezone") {
        json(200, store.timezoneChoice(user, body));
        return;
      }
      if (req.method === "GET" && route === "/api/sessions") {
        json(200, store.sessionsList(user));
        return;
      }
      if (req.method === "POST" && route === "/api/sessions/revoke") {
        json(200, store.revokeSession(user, body.id));
        return;
      }
      if (req.method === "GET" && route === "/api/profile") {
        json(200, store.profile(user));
        return;
      }
      if (req.method === "POST" && route === "/api/profile") {
        json(200, store.updateProfile(user, body));
        return;
      }
      if (req.method === "GET" && route.startsWith("/api/views/")) {
        json(
          200,
          store.screen(
            user,
            route.split("/")[3],
            url.searchParams.get("offset") ?? 0,
            url.searchParams.get("archived") === "1",
            url.searchParams.get("phase") ?? "active",
          ),
        );
        return;
      }
      if (
        req.method === "GET" &&
        /^\/api\/records\/[a-f0-9-]+\/history$/.test(route)
      ) {
        json(200, store.recordHistory(user, route.split("/")[3]));
        return;
      }
      if (
        req.method === "POST" &&
        /^\/api\/records\/[a-f0-9-]+\/(update|archive)$/.test(route)
      ) {
        json(
          200,
          store.changeRecord(
            user,
            route.split("/")[3],
            body.body,
            body.version,
            route.endsWith("/archive"),
          ),
        );
        return;
      }
      if (
        req.method === "POST" &&
        /^\/api\/documents\/[a-f0-9-]+\/metadata$/.test(route)
      ) {
        json(200, store.documentMetadata(user, route.split("/")[3], body));
        return;
      }
      if (
        req.method === "POST" &&
        /^\/api\/documents\/[a-f0-9-]+\/archive$/.test(route)
      ) {
        json(200, store.archiveDocument(user, route.split("/")[3]));
        return;
      }
      if (req.method === "POST" && route === "/api/access/info") {
        json(200, store.accessInfo(user, body.token));
        return;
      }
      if (req.method === "GET" && route === "/api/me") {
        json(200, store.me(user));
        return;
      }
      if (req.method === "POST" && route === "/api/logout") {
        store.logout(user);
        res.setHeader(
          "Set-Cookie",
          "edht_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0",
        );
        json(200, { ok: true });
        return;
      }
      if (req.method === "GET" && route === "/api/doctors") {
        store.patient(user);
        json(200, store.doctors());
        return;
      }
      if (req.method === "GET" && route === "/api/passport") {
        json(200, store.ownPassport(user));
        return;
      }
      if (req.method === "POST" && route === "/api/records") {
        json(201, store.addRecord(user, body.kind, body.body));
        return;
      }
      if (req.method === "POST" && route === "/api/documents") {
        json(201, store.upload(user, body));
        return;
      }
      const download = (d) => {
        res.writeHead(200, {
          "Content-Type": d.mime,
          "Content-Disposition": `attachment; filename="${d.name.replace(/[^A-Za-z0-9._-]/g, "_")}"`,
        });
        res.end(Buffer.from(d.content));
      };
      if (
        req.method === "GET" &&
        /^\/api\/documents\/[a-f0-9-]+$/.test(route)
      ) {
        download(store.ownDocument(user, route.split("/").at(-1)));
        return;
      }
      if (req.method === "GET" && route === "/api/grants") {
        json(200, store.grants(user,Number(url.searchParams.get("offset")??0),url.searchParams.get("status")??"all"));
        return;
      }
      if (req.method === "POST" && route === "/api/grants") {
        const g = store.createGrant(user, body);
        const link = origin + "/#access=" + g.token;
        const qr = await QRCode.toDataURL(link, {
          errorCorrectionLevel: "M",
          width: 320,
          margin: 4,
        });
        json(201, { ...g, link, qr });
        return;
      }
      if (
        req.method === "POST" &&
        /^\/api\/grants\/[a-f0-9-]+\/revoke$/.test(route)
      ) {
        store.revoke(user, route.split("/")[3]);
        json(200, { ok: true });
        return;
      }
      if (req.method === "POST" && route === "/api/access") {
        if (
          typeof body.token !== "string" ||
          !/^[-_A-Za-z0-9]{43}$/.test(body.token)
        )
          throw new HttpError(404, "NOT_FOUND");
        json(200, store.consume(user, body.token));
        return;
      }
      if (req.method === "POST" && route === "/api/access/document") {
        if (
          typeof body.token !== "string" ||
          typeof body.document_id !== "string"
        )
          throw new HttpError(400, "INVALID_REQUEST");
        download(store.consume(user, body.token, body.document_id));
        return;
      }
      if (req.method === "GET" && route === "/api/audit") {
        json(200, store.auditList(user));
        return;
      }
      if (req.method === "POST" && route === "/api/fhir/import") {
        const p = store.patient(user),
          mapped = adaptFHIR(body.resource, p.id);
        json(
          201,
          store.addRecord(
            user,
            mapped.kind,
            mapped.body,
            "synthetic_fhir:" + mapped.external_id,
          ),
        );
        return;
      }
      if (req.method === "POST" && route === "/api/assistant") {
        const p = store.patient(user);
        const data = store.transaction(() => {
          store.audit(user.user_id, "SANDBOX_ASSISTANT_CONTEXT", "", p.id);
          return store.passport(p.id, ["allergy", "medication", "condition"]);
        });
        json(200, {
          provider: "deterministic-sandbox",
          model: "context-summary-v1",
          is_generative_ai: false,
          generated_at: store.now(),
          source_records: data.records.map((r) => ({
            id: r.id,
            version: r.version,
            source: r.source,
          })),
          text: `В вашем синтетическом паспорте: аллергии — ${data.records.filter((r) => r.kind === "allergy").length}, лекарства — ${data.records.filter((r) => r.kind === "medication").length}, состояния — ${data.records.filter((r) => r.kind === "condition").length}. Это записанные сведения, а не подтверждённые диагнозы или назначения. Обсудите медицинские вопросы с врачом. При непосредственной угрозе здоровью обратитесь в местную экстренную службу.`,
          boundaries: {
            guideline_registry: "interface_preserved_not_connected",
            precision_pharmacology: "not_enabled",
            digital_twin: "not_enabled",
          },
        });
        return;
      }
      json(404, { error: "NOT_FOUND" });
    } catch (e) {
      const status = e instanceof HttpError ? e.status : 500;
      if ([401, 403, 404].includes(status)) {
        try {
          store.transaction(() =>
            store.audit(requestActor, "REQUEST_DENIED", "", null, "DENIED"),
          );
        } catch {}
      }
      if (status === 500) console.error("Request failed:", e.name);
      if (!res.headersSent)
        json(status, {
          error: e instanceof HttpError ? e.code : "INTERNAL_ERROR",
        });
      else res.end();
    }
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  return {
    server,
    store,
    async start(port = 0) {
      await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(port, "127.0.0.1", resolve);
      });
      origin = "http://127.0.0.1:" + server.address().port;
      notificationWorker = setInterval(() => {
        try {
          store.pumpNotifications();
        } catch (e) {
          console.error("Notification worker failed:", e.name);
        }
      }, 30000);
      notificationWorker.unref();
      return origin;
    },
    async close() {
      clearInterval(notificationWorker);
      await new Promise((resolve) => server.close(resolve));
      store.close();
    },
  };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const app = createApplication();
  const origin = await app.start(Number(process.env.PORT ?? 4173));
  console.log("EDHT synthetic MVP: " + origin);
  const close = () => app.close().then(() => process.exit(0));
  process.on("SIGINT", close);
  process.on("SIGTERM", close);
}
