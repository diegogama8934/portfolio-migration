import { apiUrl } from "../../constants";

export async function get() {
  const response = await fetch(`${apiUrl}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}