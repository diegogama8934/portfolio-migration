import { useParams } from "react-router";

export function ProjectDetails() {
  const { id } = useParams();
  return <div>ProjectDetails {id}</div>;
}