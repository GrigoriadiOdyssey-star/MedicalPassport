import {CloudHttpError} from "./cloud-runtime.mjs";
const fail=(s,c)=>{throw new CloudHttpError(s,c)};
const text=(v)=>{if(typeof v!=="string"||!v.trim()||v.length>2000)fail(400,"INVALID_TEXT");return v.trim();};
export function cleanBody(kind, b) {
  if (!b || typeof b !== "object" || Array.isArray(b))
    fail(400, "INVALID_RECORD");
  const allowed =
    kind === "emergency"
      ? [
          "bloodGroup",
          "rh",
          "allergies",
          "medications",
          "diagnoses",
          "contacts",
          "instructions",
          "donor",
        ]
      : kind === "allergy"
        ? ["name", "reaction", "status", "severity", "onset", "notes"]
        : kind === "medication"
          ? [
              "name",
              "notes",
              "status",
              "dose",
              "frequency",
              "form",
              "unit",
              "instructions",
              "food",
              "prescriber",
              "route",
              "start",
              "end",
            ]
          : kind === "condition"
            ? [
                "name",
                "notes",
                "status",
                "onset",
                "resolution",
                "provider",
                "code",
                "code_system",
              ]
            : kind === "observation"
              ? [
                  "name",
                  "notes",
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
              : kind === "vaccination"
                ? [
                    "name",
                    "notes",
                    "dose_number",
                    "date",
                    "manufacturer",
                    "lot",
                    "country",
                    "provider",
                    "status",
                    "document_id",
                  ]
                : ["name", "notes"];
  if (Object.keys(b).some((k) => !allowed.includes(k)))
    fail(400, "UNKNOWN_RECORD_FIELD");
  const out = {};
  for (const [k, v] of Object.entries(b)) {
    if (typeof v !== "string" || v.length > 2000) fail(400, "INVALID_RECORD");
    out[k] = v.trim();
  }
  if (kind !== "emergency") out.name = text(b.name);
  if (
    ["medication", "condition", "observation", "vaccination"].includes(kind)
  ) {
    for (const k of ["start", "end", "onset", "resolution", "date"])
      if (
        out[k] &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(out[k]) ||
          Number.isNaN(Date.parse(out[k])) ||
          new Date(out[k]).toISOString().slice(0, 10) !== out[k])
      )
        fail(400, "INVALID_DATE");
    if (out.start && out.end && out.end < out.start)
      fail(400, "INVALID_DATE_RANGE");
  }
  if (
    kind === "allergy" &&
    out.severity &&
    !["unknown", "mild", "moderate", "severe", "critical"].includes(
      out.severity,
    )
  )
    fail(400, "INVALID_SEVERITY");
  if (
    kind === "medication" &&
    out.status &&
    !["reported", "active", "stopped"].includes(out.status)
  )
    fail(400, "INVALID_STATUS");
  if (
    kind === "allergy" &&
    !["reported", "unknown", "not_assessed", "no_known_allergy"].includes(
      out.status ?? "reported",
    )
  )
    fail(400, "INVALID_ASSERTION");
  if (kind === "allergy") {
    out.status ??= "reported";
    if (out.status !== "reported" && out.reaction)
      fail(400, "CONTRADICTORY_ASSERTION");
  }
  if (kind === "observation") {
    for (const key of ["value", "reference_low", "reference_high"])
      if (out[key] && !Number.isFinite(Number(out[key])))
        fail(400, "INVALID_NUMERIC_VALUE");
    if (
      out.reference_low &&
      out.reference_high &&
      Number(out.reference_low) > Number(out.reference_high)
    )
      fail(400, "INVALID_REFERENCE_RANGE");
    if (out.observed_at && !Number.isFinite(Date.parse(out.observed_at)))
      fail(400, "INVALID_DATE");
    if (
      out.flag &&
      !["unknown", "normal", "low", "high", "critical"].includes(out.flag)
    )
      fail(400, "INVALID_FLAG");
  }
  if (
    kind === "condition" &&
    out.status &&
    !["active", "resolved", "remission", "unknown"].includes(out.status)
  )
    fail(400, "INVALID_STATUS");
  if (
    kind === "vaccination" &&
    out.dose_number &&
    !/^[1-9][0-9]?$/.test(out.dose_number)
  )
    fail(400, "INVALID_DOSE_NUMBER");
  if (kind === "emergency") {
    out.bloodGroup ??= "UNKNOWN";
    out.rh ??= "UNKNOWN";
    if (
      !["UNKNOWN", "A", "B", "AB", "O"].includes(out.bloodGroup) ||
      !["UNKNOWN", "+", "-"].includes(out.rh)
    )
      fail(400, "INVALID_BLOOD_GROUP");
  }
  return out;
}