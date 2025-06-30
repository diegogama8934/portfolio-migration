import type { ApiResponse } from "../../interfaces";
import type { Project } from "../../interfaces/project";
import { apiUrl } from "../../constants";

export async function getAllProjects() {

  const response: ApiResponse<Project[]> = await fetch(`${apiUrl}/projects`)
    .then(res => res.json())
    .catch(err => new Error(err))

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}