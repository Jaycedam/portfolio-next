"use server";

import prisma from "@/lib/prisma";
import { TProject, projectSchema } from "@/lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/project");
}

export async function CreateProject(data: TProject) {
  let errorMessage: string = "Project could not be created, try again later.";
  let successMessage: string = "Project created successfully.";

  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.project.create({
      data: parsedData.data,
    });
    return {
      success: successMessage,
    };
  } catch (e: any) {
    return {
      error: errorMessage + " " + e.message,
    };
  } finally {
    revalidate();
  }
}

export async function UpdateProject(data: TProject) {
  let errorMessage: string = "Project could not be updated, try again later.";
  let successMessage: string = "Project updated successfully.";

  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.project.update({
      where: {
        id: data.id,
      },
      data: parsedData.data,
    });

    return {
      success: successMessage,
    };
  } catch (e: any) {
    return {
      error: errorMessage + " " + e.message,
    };
  } finally {
    revalidate();
  }
}

export async function DeleteProject(formData: FormData) {
  try {
    await prisma.project.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });

    return {
      success: "Project successfully deleted.",
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  } finally {
    revalidate();
  }
}
