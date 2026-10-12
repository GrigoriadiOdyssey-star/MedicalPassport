// Ordinary authenticated Supabase access. The capability is server-only and is
// additionally required by the database for billable reservations/reconciliation.
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const statuses = new Map([
  ["AI_NOT_CONFIGURED", 503], ["AI_DISABLED", 503],
  ["AI_BUDGET_EXCEEDED", 429], ["AI_RATE_LIMITED", 429],
  ["AI_BUSY", 409], ["AI_REQUEST_CONFLICT", 409],
  ["AI_VERSION_CONFLICT", 409], ["AI_RECONCILIATION_REQUIRED", 409],
  ["AI_CIRCUIT_OPEN", 503], ["AI_CONVERSATION_NOT_FOUND", 404],
  ["AI_INPUT_LIMIT", 400], ["AI_INVALID_RESPONSE", 502],
  ["AI_CONVERSATION_LIMIT", 429], ["AI_HISTORY_LIMIT", 400],
  ["AI_INVALID_FINISH_STATUS", 400],
]);

export class AssistantStoreError extends Error {
  constructor(code, status = statuses.get(code) ?? 400) {
    super(code);
    this.name = "AssistantStoreError";
    this.code = code;
    this.status = status;
  }
}

function id(value) {
  if (typeof value !== "string" || !UUID.test(value))
    throw new AssistantStoreError("AI_INVALID_ID");
  return value;
}

function count(value, min, max) {
  if (!Number.isSafeInteger(value) || value < min || value > max)
    throw new AssistantStoreError("AI_INPUT_LIMIT");
  return value;
}

function result(value) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new AssistantStoreError("AI_STORE_RESPONSE_INVALID", 503);
  if (value.error) {
    const code = statuses.has(value.error) ? value.error : "AI_STORE_REJECTED";
    throw new AssistantStoreError(code, statuses.get(code) ?? 503);
  }
  return value;
}

export class AssistantStore {
  #cloud;
  #capability;

  constructor(cloud, serverCapability) {
    if (typeof cloud?.rpc !== "function" || typeof cloud?.rows !== "function")
      throw new AssistantStoreError("AI_STORE_REQUIRED", 503);
    this.#cloud = cloud;
    this.#capability = serverCapability;
  }

  capability() {
    if (typeof this.#capability !== "string" ||
        !/^[A-Za-z0-9_-]{43,128}$/.test(this.#capability))
      throw new AssistantStoreError("AI_NOT_CONFIGURED", 503);
    return this.#capability;
  }

  async list(userId) {
    const rows = await this.#cloud.rows("edht_assistant_conversations", {
      select: "conversation_id,version,created_at,updated_at",
      owner_user_id: "eq." + id(userId),
      order: "updated_at.desc,conversation_id.asc", limit: "100",
    });
    if (!Array.isArray(rows))
      throw new AssistantStoreError("AI_STORE_RESPONSE_INVALID", 503);
    return rows;
  }

  async create() {
    return result(await this.#cloud.rpc("edht_assistant_create"));
  }

  async history(conversationId) {
    return result(await this.#cloud.rpc("edht_assistant_history", {
      p_conversation_id: id(conversationId),
    }));
  }

  async delete(conversationId) {
    return result(await this.#cloud.rpc("edht_assistant_delete", {
      p_conversation_id: id(conversationId),
    }));
  }

  async reserve({ conversationId, requestId, message, language,
    expectedVersion = null, maxInputTokens, maxOutputTokens } = {}) {
    const capability = this.capability();
    id(conversationId); id(requestId);
    if (typeof message !== "string" || !message.trim() || message.length > 6000 ||
        !["ru", "en"].includes(language))
      throw new AssistantStoreError("AI_INPUT_LIMIT");
    if (expectedVersion !== null) count(expectedVersion, 0, 1000000);
    count(maxInputTokens, 1, 65536);
    count(maxOutputTokens, 1, 8192);
    return result(await this.#cloud.rpc("edht_assistant_reserve", {
      p_server_capability: capability,
      p_conversation_id: conversationId, p_request_id: requestId,
      p_message: message, p_language: language, p_expected_version: expectedVersion,
      p_max_input_tokens: maxInputTokens, p_max_output_tokens: maxOutputTokens,
    }));
  }

  async finish({ requestId, response = null, usage = null, status, failureCode = null } = {}) {
    const capability = this.capability();
    id(requestId);
    if (!["completed", "unknown", "failed_before_send"].includes(status))
      throw new AssistantStoreError("AI_INVALID_FINISH_STATUS");
    // A successful HTTP status alone cannot establish the cost of a provider call.
    // Unknown usage retains the original reservation; it must never become zero.
    const validUsage = usage && Number.isSafeInteger(usage.input_tokens) &&
      usage.input_tokens >= 0 && usage.input_tokens <= 100000000 && Number.isSafeInteger(usage.output_tokens) &&
      usage.output_tokens >= 0 && usage.output_tokens <= 100000000;
    if (failureCode !== null && !["AI_PROVIDER_TIMEOUT", "AI_PROVIDER_RATE_LIMIT",
      "AI_PROVIDER_REJECTED", "AI_PROVIDER_UNAVAILABLE", "AI_INVALID_RESPONSE"].includes(failureCode))
      throw new AssistantStoreError("AI_INVALID_FINISH_STATUS");
    if (status === "completed" && !validUsage) status = "unknown";
    if (status === "completed" && (!response || typeof response !== "object" ||
        Array.isArray(response) || typeof response.text !== "string" ||
        response.text.length < 1 || response.text.length > 16000))
      throw new AssistantStoreError("AI_INVALID_RESPONSE");
    return result(await this.#cloud.rpc("edht_assistant_finish", {
      p_server_capability: capability, p_request_id: requestId,
      p_status: status, p_response: status === "completed" ? response : null,
      p_input_tokens: status === "completed" ? usage.input_tokens : null,
      p_output_tokens: status === "completed" ? usage.output_tokens : null,
      p_failure_code: failureCode,
      // Full-input tariff is an upper estimate when the provider reports cached tokens.
      p_cost_estimated: status === "completed"
        ? usage.estimated === true || usage.cached_input_tokens > 0
        : status === "unknown",
    }));
  }
}
