"use server";

import prisma from "@/lib/prisma";
import { TProjectArea, projectAreaSchema } from "@/lib/zod-schema";
import { revalidatePath } from "next/cache";

const url: string = "/admin/project-area";

export async function CreateProjectArea(data: TProjectArea) {
  let errorMessage: string =
    "Project Area could not be created, try again later.";
  let successMessage: string = "Project Area created successfully.";

  const parsedData = projectAreaSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.area.create({
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
    revalidatePath(url);
  }
}

export async function UpdateProjectArea(data: TProjectArea) {
  let errorMessage: string = "Project could not be updated, try again later.";
  let successMessage: string = "Project updated successfully.";

  const parsedData = projectAreaSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.area.update({
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
    revalidatePath(url);
  }
}

export async function DeleteProjectArea(formData: FormData) {
  try {
    await prisma.area.delete({
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
    revalidatePath(url);
  }
}
