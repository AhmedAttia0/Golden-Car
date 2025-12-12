const BASE_URL = import.meta.env.VITE_API_URL;

export async function httpGet(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    let body = null;
    try {
      body = await res.text();
    } catch (e) {
      /* ignore */
    }
    throw new Error(`HTTP ${res.status}: ${body || res.statusText}`);
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
