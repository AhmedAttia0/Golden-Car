const BASE_URL = "http://localhost:3000/";

export async function httpGet(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }

  const json = await res.json();
  const total = parseInt(res.headers.get("X-Total-Count")) || 0;

  return {
    data: json,
    total,
  };
}
