"use server";

import prisma from "@lib/prisma";
import { TProject, projectSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/project");
}

export async function CreateProject(data: TProject) {
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
    return {
      success: true,
      message: `${result.name} created successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  } finally {
    revalidate();
  }
}

export async function UpdateProject(data: TProject) {
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

    return {
      success: true,
      message: `${result.name} updated successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      error: "Error: " + e.message,
    };
  } finally {
    revalidate();
  }
}

export async function DeleteProject(formData: FormData) {
  try {
    const result = await prisma.project.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });

    return {
      success: true,
      message: `${result.name} successfully deleted.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  } finally {
    revalidate();
  }
}
