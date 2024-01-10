import ProjectForm from "@/components/form/project-form";
import { getProject, getProjectAreaList } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const project = await getProject(parseInt(params.id));
  const areaList = await getProjectAreaList();
  return <ProjectForm project={project} areaCbo={areaList} />;
}
