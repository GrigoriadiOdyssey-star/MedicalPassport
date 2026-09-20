import { translate, errorKeys } from "./i18n.js";
export const escape = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const screens = [
  "home",
  "passport",
  "records",
  "medication",
  "allergy",
  "documents",
  "qr",
  "emergency",
  "assistant",
  "profile",
];
export function route(hash, role) {
  const key = hash.replace(/^#\/?/, "").split("?")[0];
  return role === "doctor"
    ? "doctor"
    : [
          ...screens,
          "care",
          "guidelines",
          "medication-detail",
          "condition",
          "observation",
          "vaccination",
          "imaging",
          "search",
          "notifications",
          "notification-settings",
          "privacy",
        ].includes(key)
      ? key
      : "home";
}
export function grantStatus(g, now = Date.now()) {
  return g.revoked_at !== null
    ? "revoked"
    : g.expires_at <= now
      ? "expired"
      : g.one_time && g.used_at !== null
        ? "used"
        : "active";
}
export function sourceStatus(source) {
  return source?.startsWith("synthetic_fhir:") ? "imported" : "reported";
}
export function errorMessage(code, locale) {
  return translate(
    errorKeys[code] ??
      (code === "NETWORK"
        ? "network"
        : code?.startsWith("INVALID_")
          ? "invalid"
          : "server"),
    locale,
  );
}
export function groupTimeline(data) {
  return [
    ...(data.records ?? []),
    ...(data.documents ?? []).map((d) => ({
      ...d,
      kind: "documents",
      body: { name: d.name },
    })),
  ].sort((a, b) => b.created_at - a.created_at);
}
