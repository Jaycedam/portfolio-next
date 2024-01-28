"use server";

import { ProjectForm } from "@/utils/types";
import prisma from "@lib/prisma";
import { projectSchema } from "@/utils/zod-schema";
import { revalidatePath } from "next/cache";

// todo: universal local messages with str params

// todo: replace with cache tags
function revalidate() {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/project");
}

export const createProject = async (data: ProjectForm) => {
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
};

export const updateProject = async (data: ProjectForm) => {
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
};

export const deleteProject = async (formData: FormData) => {
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
};
