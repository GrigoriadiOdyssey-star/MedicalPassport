# Interoperability findings
Revision 2026-09-14. Source 1356 enumerates standards; 1359 proposes universal connectors. Enumeration is not partner compatibility.

[Adaptive interoperability](adaptive_interoperability_architecture.md) now specifies authorized read-only discovery, profiling, semantic/terminology/FHIR mapping, validation, conflict/loss reporting, sandbox and round-trip testing, signed approval, monitoring and rollback. AI proposals remain candidates until validated. A model confidence score never authorizes a clinical import.

Unresolved contracts include patient matching, local identifiers and terminology versions; laboratory units/ranges and corrected reports; medication formulation/dose semantics; imaging geometry/identity; time zones and partial dates; source authority; allowed transformations and loss; partner legal/purpose constraints; schema drift and replays. Each partner needs an accountable owner and test pack.

Required adverse cases: two patients sharing a local identifier in different namespaces; unsupported unit; swapped reference build; out-of-order corrections; unrecognized fields; partial batch failure; revoked mapping; inconsistent round trip; unsafe generated connector operations. Record item-level quarantine and loss without discarding source data.

The [dependency graph](dependency_graph.json) separates checked proposed CAP/EXT references from unresolved original prose references. A module with no observed explicit link is not automatically an orphan. Source graph semantic completeness and critical runtime dependencies remain unverified. No live partner system was accessed or changed during this stage.
