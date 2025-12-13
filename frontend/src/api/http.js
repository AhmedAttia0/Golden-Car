const DEFAULT_BASE = "http://localhost:3000";
const BASE_URL = (import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE).replace(
  /\/$/,
  ""
);

function buildUrl(endpoint) {
  return `${BASE_URL}/${endpoint.replace(/^\//, "")}`;
}

async function request(endpoint, opts = {}) {
  const res = await fetch(buildUrl(endpoint), {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });

  if (!res.ok) {
    let body = null;
    try {
      body = await res.json();
    } catch (e) {
      try {
        body = await res.text();
      } catch {}
    }
    const message =
      body && (body.error || body.message)
        ? body.error || body.message
        : res.statusText;
    const err = new Error(message);
    err.status = res.status;
    err.body = body;
    throw err;
  }

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const json = await res.json();
    return { data: json, headers: res.headers };
  }
  const text = await res.text();
  return { data: text, headers: res.headers };
}

export async function httpGet(endpoint) {
  const { data, headers } = await request(endpoint, { method: "GET" });
  const total = parseInt(headers.get("X-Total-Count")) || 0;
  return { data, total };
}

export async function httpPost(endpoint, body, extraHeaders = {}) {
  const { data } = await request(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: extraHeaders,
  });
  return data;
}

export async function httpPut(endpoint, body, extraHeaders = {}) {
  const { data } = await request(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: extraHeaders,
  });
  return data;
}

export async function httpDelete(endpoint) {
  const { data } = await request(endpoint, { method: "DELETE" });
  return data;
}

export function getCSRFToken() {
  const match = document.cookie.match(new RegExp(`(^| )XSRF-TOKEN=([^;]+)`));
  if (match) return match[2];
  return null;
}

export const resumeSession = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: "GET",
      // THIS IS THE KEY PART: It tells the browser to include
      // any session cookies associated with the backend domain.
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Session resumed successfully
      return { success: true, user: data.user };
    } else {
      // Session not found or expired (401 response)
      return { success: false, user: null };
    }
  } catch (error) {
    console.error("Error resuming session:", error);
    return { success: false, user: null };
  }
};
