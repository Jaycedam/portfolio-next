import ProjectForm from "@/components/project-form";
import prisma from "@/lib/prisma";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const project = await getData(parseInt(params.id));
  return <ProjectForm project={project} />;
}

async function getData(id: number) {
  const result = await prisma.project.findUnique({
    where: { id: id },
  });
  return result;
}
