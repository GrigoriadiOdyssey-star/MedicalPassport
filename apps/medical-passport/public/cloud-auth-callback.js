// Only classify callback parameters here; Supabase must validate the session server-side.
export function readAuthCallback(location) {
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const query = new URLSearchParams(location.search);
  const type = hash.get("type");
  const recognized = ["recovery", "signup"].includes(type);
  const hasCredentials = hash.has("access_token") || hash.has("refresh_token");
  const hasError = ["error", "error_code", "error_description"].some(key => hash.has(key) || query.has(key));
  if (hasError || ((recognized || hasCredentials || query.has("recovery") || query.has("confirmation")) &&
      (!recognized || !hash.get("access_token") || !hash.get("refresh_token")))) {
    return { kind: "invalid", error: "RECOVERY_LINK_INVALID" };
  }
  if (!recognized) return { kind: "none" };
  return {
    kind: type,
    credentials: { access_token: hash.get("access_token"), refresh_token: hash.get("refresh_token") },
  };
}

export async function establishAuthCallback(api, callback) {
  if (!["recovery", "signup"].includes(callback.kind) || !callback.credentials)
    throw Error("RECOVERY_LINK_INVALID");
  try {
    const session = await api("/recover/session", callback.credentials);
    if (!session?.id || typeof session.csrf !== "string" || !session.csrf)
      throw Error("AUTH_RESPONSE_INVALID");
    return { mode: callback.kind === "recovery" ? "reset" : "signin", csrf: session.csrf };
  } catch (error) {
    if (["AUTHENTICATION_FAILED", "CLOUD_SESSION_REQUIRED", "UNAUTHENTICATED"].includes(error.message))
      throw Error("RECOVERY_LINK_INVALID");
    throw error;
  } finally {
    callback.credentials = null;
  }
}
