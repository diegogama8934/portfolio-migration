import { apiUrl } from "../../constants";
import type { ApiResponse } from "../../interfaces";
import type { Reference } from "../../interfaces/reference";

export async function getMultipleReferences({ queryParams }: { queryParams: Record<string, string> }): Promise<Reference[]> {

  const formattedQueryParams = new URLSearchParams(queryParams).toString();

  const response: ApiResponse<Reference[]> = await fetch(`${apiUrl}/references?${formattedQueryParams}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })
    .then(res => res.json())
    .catch(err => new Error(err))

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
