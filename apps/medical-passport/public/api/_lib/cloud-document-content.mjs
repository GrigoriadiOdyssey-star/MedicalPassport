import { createHash } from "node:crypto";
import { CloudHttpError } from "./cloud-runtime.mjs";
export const DOCUMENT_MAX_BYTES = 4194304;
export const DOCUMENT_MIMES = Object.freeze([
  "application/pdf", "text/plain", "image/png", "image/jpeg",
  "text/csv", "application/json",
]);
const fail = (status, code) => { throw new CloudHttpError(status, code); };
// Canonical signature and text checks; not malware or clinical verification.
export function validateDocumentContent(bytes, mime) {
  if (!DOCUMENT_MIMES.includes(mime)) fail(415, "UNSUPPORTED_FILE_TYPE");
  if (!(bytes instanceof Uint8Array) || !bytes.byteLength) fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (bytes.byteLength > DOCUMENT_MAX_BYTES) fail(413, "FILE_TOO_LARGE");
  const data = Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (mime === "application/pdf" && data.subarray(0, 5).toString() !== "%PDF-") fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (mime === "image/png" && !data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (mime === "image/jpeg" && !(data[0] === 255 && data[1] === 216 && data[2] === 255)) fail(415, "CONTENT_SIGNATURE_MISMATCH");
  if (["text/plain", "text/csv", "application/json"].includes(mime)) {
    if (data.includes(0)) fail(415, "INVALID_TEXT_FILE");
    try { new TextDecoder("utf-8", { fatal: true }).decode(data); }
    catch { fail(415, "INVALID_TEXT_FILE"); }
  }
  return true;
}
export async function verifyDocumentObject(response, session) {
  if (!Number.isSafeInteger(session.size) || session.size < 1 || session.size > DOCUMENT_MAX_BYTES || !/^[a-f0-9]{64}$/.test(session.sha256 || "")) throw Error("CLOUD_RESPONSE_INVALID");
  if (!response.body) throw Error("CLOUD_RESPONSE_INVALID");
  const chunks = [], hash = createHash("sha256"); let size = 0;
  try {
    for await (const chunk of response.body) {
      size += chunk.byteLength;
      if (size > DOCUMENT_MAX_BYTES) fail(413, "FILE_TOO_LARGE");
      hash.update(chunk); chunks.push(Buffer.from(chunk));
    }
  } catch (error) {
    if (error instanceof CloudHttpError) throw error;
    throw Error("CLOUD_BACKEND_UNAVAILABLE");
  }
  if (size !== session.size || hash.digest("hex") !== session.sha256) fail(409, "UPLOAD_INTEGRITY_MISMATCH");
  const bytes = Buffer.concat(chunks, size);
  validateDocumentContent(bytes, session.mime);
  return bytes;
}
