import fs from "node:fs";
import crypto from "node:crypto";
const root = new URL("../", import.meta.url);
const read = (p) => JSON.parse(fs.readFileSync(new URL(p, root)));
const mvp = read("audit/master-19/mvp_delta.json").records;
const backlog = read("audit/master-22/mvp_implementation_backlog.json");
const partial = {
  IDENTITY: [
    "Local sessions and synthetic practitioner identity",
    "Real identity issuer, verified clinical authority, MFA",
  ],
  SECURITY: [
    "Session/CSRF/ownership checks",
    "Production hardening, encryption key operations, load acceptance",
  ],
  AUDIT: [
    "Transactional hash-chain audit",
    "External anchoring, retention policy and disaster recovery",
  ],
  CONSENT: [
    "Recipient-bound scoped expiring/revocable grants",
    "Exact source/version leases and recovery contracts",
  ],
  DATA: [
    "Versioned patient records",
    "Full canonical terminology, reconciliation and recovery",
  ],
  INTEROP: [
    "Restricted synthetic FHIR import",
    "Real provider integration and conformance",
  ],
  QR: [
    "QR generation, scoped access and revocation",
    "Offline verification and deployment-bound trust",
  ],
  PROFILE: [
    "Patient profile and scoped passport",
    "Full longitudinal cross-provider aggregation",
  ],
  MEDICATION: [
    "Reported medicines, version history, schedules and adherence",
    "Verified prescriptions, reconciliation and full pharmacology",
  ],
  ALLERGY: [
    "Reported assertions, versions and critical alerts",
    "Qualified verification and cross-source reconciliation",
  ],
  CONDITION: [
    "Structured reported conditions, status/onset/resolution, provider/code, revisions/archive",
    "Verified diagnosis lifecycle and terminology services",
  ],
  LABORATORY: [
    "Structured patient-entered results, reference fields, comparable trends and immutable revisions",
    "Laboratory issuer verification, real feeds, coded panel reconciliation and qualified result review",
  ],
  IMAGING: [
    "Study/series/instance import, scoped object storage, report revisions and bounded pixel viewer",
    "Broader DICOM syntax/sequence/multiframe support, certified viewer, live PACS, validated anatomy derivation",
  ],
  DOCUMENTS: [
    "Configurable resumable object-storage ingestion, SHA256, versioned originals, source labels and scoped streams",
    "Native PDF preview, verified translation, malware service, production object provider and complete source certification",
  ],
  IMMUNIZATION: [
    "Structured vaccine/dose/manufacturer/lot/provider/certificate reference and history",
    "Verified issuer certificates, schedules, jurisdiction rules and provider feeds",
  ],
  APPOINTMENTS: [
    "Patient-entered personal calendar, revisions, cancellation and scheduled notifications",
    "Provider booking/availability, live telemedicine, externally confirmed appointments",
  ],
  NOTIFICATIONS: [
    "In-app scheduling, preferences, medication/appointment actions and periodic UI refresh",
    "Background external delivery and provider guarantees",
  ],
  AI: [
    "Deterministic permitted-context summaries",
    "Generative explain/translate and source-governed guideline comparison",
  ],
  EMERGENCY: [
    "Patient emergency profile and scoped access",
    "External emergency integration and validated operational workflows",
  ],
};
const items = mvp.map((r) => {
  const key = r.owner.slice(4),
    p = partial[key];
  const status = p
    ? "PARTIALLY_IMPLEMENTED"
    : r.tag === "RESEARCH"
      ? "RESEARCH"
      : r.tag === "MVP_CORE"
        ? "NOT_IMPLEMENTED"
        : "POST_MVP";
  const dirs = fs
    .readdirSync(new URL("docs/canonical/", root), { withFileTypes: true })
    .filter((x) => x.isDirectory())
    .map((x) => "docs/canonical/" + x.name + "/" + r.owner + ".md")
    .filter((x) => fs.existsSync(new URL(x, root)));
  const specifications = [...new Set([...dirs, r.canonical_document])];
  return {
    canonical_owner: r.owner,
    canonical_id: r.canonical_id,
    status,
    mvp_classification: r.tag,
    scope:
      "Full canonical capability, not page presence. Adult synthetic Alpha profile is narrower.",
    implemented_workflows: p ? [p[0]] : [],
    missing_functions: p
      ? [p[1]]
      : [
          "Canonical source profiles and external acceptance not implemented in the runtime",
        ],
    specifications: specifications.map((path) => ({
      path,
      sha256: crypto
        .createHash("sha256")
        .update(fs.readFileSync(new URL(path, root)))
        .digest("hex"),
    })),
    profiles: specifications
      .flatMap((path) =>
        [
          ...fs
            .readFileSync(new URL(path, root), "utf8")
            .matchAll(/^## ([^\n\r]+)/gm),
        ].map((x) => ({ name: x[1], path })),
      )
      .filter(
        (x) =>
          !["Source scope", "Requirements and source metadata"].includes(
            x.name,
          ),
      ),
    dependencies:
      read("audit/master/canonical_owners.json").owners.find(
        (o) => o.id === r.owner,
      )?.dependencies ?? [],
    evidence: p
      ? [
          "apps/medical-passport/",
          "audit/master-25/tests.tap",
          "audit/master-25/BROWSER_REVIEW.md",
        ]
      : [],
    acceptance:
      "Functional completeness must include ownership, source/state, edit/history/archive where applicable, audit and reload persistence; partial until missing canonical requirements close.",
  };
});
const doc = {
  version: "MASTER-25",
  baseline_commit: "c4c3599",
  scope:
    "All 33 registered canonical owners. Legacy original-ID audits remain unchanged.",
  source_registry: "audit/master-19/mvp_delta.json",
  backlog: "audit/master-22/mvp_implementation_backlog.json",
  dependency_graph: "audit/master-20/mvp_dependency_order.json",
  guideline_profile: {
    owners: ["CAP-AI", "CAP-DOCUMENTS", "CAP-INTEROP", "CAP-GOVERNANCE"],
    specification: "docs/canonical/guideline-intelligence.md",
    status: "PARTIALLY_IMPLEMENTED",
    implemented: [
      "Versioned four-jurisdiction context; explicit unknown/unverified state; no approved source or clinical comparison fabricated",
    ],
    missing: [
      "Approved source network, current original versions, verified translations, comparison and surveillance",
    ],
    mvp_dependency: false,
  },
  items,
};
fs.writeFileSync(
  new URL("product_implementation_coverage.json", root),
  JSON.stringify(doc, null, 2) + "\n",
);
fs.writeFileSync(
  new URL("PRODUCT_IMPLEMENTATION_COVERAGE.md", root),
  "# Product Bible implementation coverage\n\nFull canonical owners, not page counts. Baseline c4c3599; no renewed legacy audit. See JSON for specification hashes, profile provenance, dependencies and missing functions. MASTER-25 waves A–D extend the synthetic alpha without changing historical MVP classification.\n\n| Owner | Runtime status | Existing workflow | Missing scope |\n|---|---|---|---|\n" +
    items
      .map(
        (x) =>
          `| ${x.canonical_owner} | ${x.status} | ${x.implemented_workflows.join("; ") || "—"} | ${x.missing_functions.join("; ")} |`,
      )
      .join("\n") +
    "\n\nGuideline Intelligence remains a profile of existing owners; no new owner/module is counted. Statuses describe the full canonical owner. None is promoted to fully IMPLEMENTED merely by this Alpha profile. See MASTER-25 evidence and open gates.\n",
);
console.log("Coverage:", items.length, "owners");
