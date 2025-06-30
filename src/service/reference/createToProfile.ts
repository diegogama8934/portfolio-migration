import { apiUrl } from "../../constants";
import type { ApiResponse } from "../../interfaces";
import type { Reference } from "../../interfaces/reference";

export async function createReferenceToProfile(payload: FormData) {

  const response: ApiResponse<Reference> = await fetch(`${apiUrl}/references/profile`, {
    method: "POST",
    body: payload
  })
    .then(res => res.json())
    .catch(err => new Error(err));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}