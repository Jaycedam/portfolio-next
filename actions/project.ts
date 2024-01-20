"use server";

import { ExtendedProject } from "@/utils/interfaces";
import prisma from "@lib/prisma";
import { TProject, projectSchema } from "@lib/zod-schema";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/project");
}

export async function createProject(data: TProject) {
  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Project could not be created. Try again.",
    };
  }

  try {
    const result = await prisma.project.create({
      data: parsedData.data,
    });

    revalidate();
    return {
      success: true,
      message: `${result.name} created successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
}

export async function getProjects(
  homepage: boolean
): Promise<ExtendedProject[]> {
  try {
    // boolean checks if only homepage=true is shown, else show all projects
    if (homepage) {
      const result = await prisma.project.findMany({
        orderBy: {
          id: "desc",
        },
        where: {
          homepage: true,
        },
        take: 4,
        include: {
          area: true,
        },
      });
      return result;
    }

    const result = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        area: true,
      },
    });
    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
}

export async function getProjectById(id: number): Promise<Project> {
  try {
    const result = await prisma.project.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project: ", error);
    return notFound();
  }
}

export async function updateProject(data: TProject) {
  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Project could not be updated. Please try again.",
    };
  }

  try {
    const result = await prisma.project.update({
      where: {
        id: data.id,
      },
      data: parsedData.data,
    });

    revalidate();
    return {
      success: true,
      message: `${result.name} updated successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      error: "Error: " + e.message,
    };
  }
}

export async function deleteProject(formData: FormData) {
  try {
    const result = await prisma.project.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });

    revalidate();
    return {
      success: true,
      message: `${result.name} successfully deleted.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
}
