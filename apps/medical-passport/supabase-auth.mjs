function assertPublicKey(value) {
  if (typeof value !== "string" || value.length < 16 || value.length > 4096)
    throw new Error("CLOUD_PUBLISHABLE_KEY_REQUIRED");
  if (value.startsWith("sb_publishable_")) return value;
  const parts = value.split(".");
  if (parts.length === 3) {
    try {
      const claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
      if (claims.role === "anon") return value;
    } catch {}
  }
  throw new Error("CLOUD_PUBLISHABLE_KEY_REQUIRED");
}

function assertToken(value, code) {
  if (
    typeof value !== "string" ||
    value.length < 20 ||
    value.length > 8192 ||
    /[\r\n]/.test(value)
  )
    throw new Error(code);
  return value;
}

export class SupabaseAuth {
  constructor({ supabaseUrl, publishableKey, fetchImpl = globalThis.fetch, timeoutMs = 10000 } = {}) {
    let base;
    try {
      base = new URL(supabaseUrl);
    } catch {
      throw new Error("CLOUD_URL_INVALID");
    }
    if (
      base.protocol !== "https:" ||
      base.username ||
      base.password ||
      base.search ||
      base.hash ||
      base.pathname !== "/"
    )
      throw new Error("CLOUD_URL_INVALID");
    if (typeof fetchImpl !== "function") throw new Error("CLOUD_FETCH_UNAVAILABLE");
    if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 100 || timeoutMs > 30000)
      throw new Error("CLOUD_TIMEOUT_INVALID");
    this.base = base;
    this.key = assertPublicKey(publishableKey);
    this.fetch = fetchImpl;
    this.timeoutMs = timeoutMs;
  }

  async request(path, { method = "GET", body, accessToken } = {}) {
    const url = new URL(path, this.base);
    if (url.origin !== this.base.origin) throw new Error("CLOUD_PATH_INVALID");
    const headers = { apikey: this.key, accept: "application/json" };
    if (body !== undefined) headers["content-type"] = "application/json";
    if (accessToken)
      headers.authorization = "Bearer " + assertToken(accessToken, "CLOUD_SESSION_REQUIRED");
    let response;
    try {
      response = await this.fetch(url, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: AbortSignal.timeout(this.timeoutMs),
      });
    } catch {
      throw new Error("AUTH_PROVIDER_UNAVAILABLE");
    }
    if (response.status === 401 || response.status === 400)
      throw new Error("AUTHENTICATION_FAILED");
    if (response.status === 422) throw new Error("REGISTRATION_UNAVAILABLE");
    if (response.status === 429) throw new Error("AUTH_RATE_LIMITED");
    if (!response.ok) throw new Error("AUTH_PROVIDER_UNAVAILABLE");
    if (response.status === 204) return null;
    try {
      return await response.json();
    } catch {
      throw new Error("AUTH_RESPONSE_INVALID");
    }
  }

  async signUp({ email, password, displayName } = {}) {
    if (
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      typeof password !== "string" ||
      password.length < 12 ||
      password.length > 128 ||
      typeof displayName !== "string" ||
      !displayName.trim() ||
      displayName.length > 100
    )
      throw new Error("REGISTRATION_INVALID");
    const result = await this.request("/auth/v1/signup", {
      method: "POST",
      body: {
        email: email.trim().toLowerCase(),
        password,
        data: { display_name: displayName.trim() },
      },
    });
    return {
      user: result?.user ? {
        id: result.user.id,
        email: result.user.email,
      } : null,
      session: result?.access_token && result?.refresh_token
        ? {
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            expiresAt: result.expires_at ?? null,
          }
        : null,
      confirmationRequired: !result?.access_token,
    };
  }

  async signIn({ email, password } = {}) {
    if (
      typeof email !== "string" ||
      email.length > 254 ||
      typeof password !== "string" ||
      password.length > 128
    )
      throw new Error("AUTHENTICATION_FAILED");
    const result = await this.request("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: { email: email.trim().toLowerCase(), password },
    });
    if (!result?.access_token || !result?.refresh_token || !result?.user?.id)
      throw new Error("AUTH_RESPONSE_INVALID");
    return {
      user: { id: result.user.id, email: result.user.email },
      session: {
        accessToken: result.access_token,
        refreshToken: result.refresh_token,
        expiresAt: result.expires_at ?? null,
      },
    };
  }

  async refresh(refreshToken) {
    const result = await this.request("/auth/v1/token?grant_type=refresh_token", {
      method: "POST",
      body: { refresh_token: assertToken(refreshToken, "CLOUD_REFRESH_REQUIRED") },
    });
    if (!result?.access_token || !result?.refresh_token || !result?.user?.id)
      throw new Error("AUTH_RESPONSE_INVALID");
    return {
      user: { id: result.user.id, email: result.user.email },
      session: {
        accessToken: result.access_token,
        refreshToken: result.refresh_token,
        expiresAt: result.expires_at ?? null,
      },
    };
  }

  async user(accessToken) {
    const result = await this.request("/auth/v1/user", {
      accessToken: assertToken(accessToken, "CLOUD_SESSION_REQUIRED"),
    });
    if (!result?.id) throw new Error("AUTH_RESPONSE_INVALID");
    return { id: result.id, email: result.email };
  }

  async signOut(accessToken) {
    await this.request("/auth/v1/logout", {
      method: "POST",
      accessToken: assertToken(accessToken, "CLOUD_SESSION_REQUIRED"),
    });
  }
}
