# External reference check — 2026-09-14

This check supports design boundaries only. It does not validate clinical rules or establish partner conformance.

- CPIC's indexed official guideline page describes using available genetic test results for drug therapy rather than deciding whether to order a test. The original overview redirects to a JavaScript-only ClinPGx page in the available reader; specific guideline releases still need pinning at implementation. [CPIC guideline overview](https://cpicpgx.org/%20guidelines/).
- The indexed HL7 Genomics Reporting page describes data structures and explicitly excludes report request/creation/approval/delivery workflows. EDHT must therefore supply and validate its own workflow and partner mapping contracts. The retrieved page identifies version 3.0.0; this audit does not claim it is the latest available release. [HL7 Genomics Reporting](https://hl7.org/fhir/uv/genomics-reporting/).
- AlphaFold's FAQ distinguishes predicted structures and their confidence measures. Confidence is not an EDHT clinical-actionability approval. Adapter tasks must preserve provider/model-specific semantics; no model accuracy or clinical eligibility is inferred here. [AlphaFold FAQ](https://alphafold.ebi.ac.uk/faq).
- The FDA pharmacogenetic association page could not be fetched by the available reader. Its historical reference is retained, but **not marked freshly verified**. Verification and release-specific pharmacogenetic evidence remain open before implementing any treatment logic. [Historical FDA reference](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations).

The limitations above do not block documentation-level semantic ownership integration; they do block claiming clinical guideline, regulatory or implementation approval from this pass.
