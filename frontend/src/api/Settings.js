import { httpGet } from "./http";
export async function getSettings() {
  const { data } = await httpGet("settings");
  return data;
}
