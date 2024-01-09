import ProjectForm from "@/components/project-form";
import { getProject } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const project = await getProject(parseInt(params.id));
  return <ProjectForm project={project} />;
}
