import ProjectAreaForm from "@/components/form/project-area-form";
import { getProjectArea } from "@/utils/get-data";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const data = await getProjectArea(Number(params.id));
  return <ProjectAreaForm projectArea={data} />;
}
