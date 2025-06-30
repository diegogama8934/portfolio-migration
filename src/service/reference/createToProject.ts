import { apiUrl } from "../../constants";
import type { ApiResponse } from "../../interfaces";
import type { Reference } from "../../interfaces/reference";

export async function createReferenceToProject({ payload, projectId }: { payload: FormData, projectId: string }) {
  const response: ApiResponse<Reference> = await fetch(`${apiUrl}/reference/project/${projectId}`, {
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .catch(err => new Error(err));

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}