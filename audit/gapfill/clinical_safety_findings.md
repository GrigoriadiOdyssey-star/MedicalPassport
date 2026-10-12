# Clinical safety findings — specification gates
Revision 2026-09-14. These findings describe missing evidence/contracts in proposed architecture; they are not findings of exploited production vulnerabilities.

The [combined register](findings.json) preserves all previous findings and adds five gates. Critical: unknown connector mappings must not enter clinical truth; research hypotheses or training feedback must not silently become treatment logic. High: PGx/organ-function assessments need context and evidence versions; generic anatomy/scenario displays must not imply measured patient effects; provider fallback/retraining must preserve intended-use and jurisdiction approvals.

Required controls are specified in [pharmacology](precision_pharmacology_architecture.md), [AI platform](ai_platform_architecture.md), [twin](digital_twin_architecture.md), [visualization](dynamic_organism_visualization.md), [research](research_ai_architecture.md) and [interop](adaptive_interoperability_architecture.md). Writing a control is not verification of its effectiveness; findings remain OPEN_SPECIFICATION_GATE.

No AI autonomously prescribes or changes dose. No simulation overwrites a fact. Clinical recommendation review and medication-order authorization are separate steps. Missing context leads to a limited result or abstention. Provider failure cannot lower clinical eligibility gates.

Before closure, assign accountable clinical/data/security owners, define intended use and relevant populations, perform hazard analysis, establish evaluation data and acceptance thresholds, test harm scenarios and user comprehension, approve incident/rollback procedures and obtain independent clinical review. Pediatric age, guardian/adolescent confidentiality, pregnancy/lactation, uncertain genetics and organ dysfunction need explicit cases. This pass does not provide medical advice or an approved clinical algorithm.

The structural safety validator detects unsafe declarations in extension configuration. Negative tests exercise prohibited metadata transitions. They do not test a deployed clinical system; no such system exists here.
