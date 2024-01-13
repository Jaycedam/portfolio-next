"use server";

import prisma from "@/lib/prisma";
import { TProject, projectSchema } from "@/lib/zod-schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url: string = "/admin/project";

export async function CreateProject(data: TProject) {
  let errorMessage: string = "";
  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    parsedData.error.issues.map(
      (issue) =>
        (errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ")
    );
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.project.create({
      data: parsedData.data,
    });
  } catch (e: any) {
    return {
      error: e.message,
    };
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function UpdateProject(data: TProject) {
  let errorMessage: string = "";
  const parsedData = projectSchema.safeParse(data);

  if (!parsedData.success) {
    parsedData.error.issues.map(
      (issue) =>
        (errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ")
    );
    return {
      error: "Server: " + errorMessage,
    };
  }

  try {
    await prisma.project.update({
      where: {
        id: Number(data.id),
      },
      data: parsedData.data,
    });
  } catch (e: any) {
    return {
      error: e.message,
    };
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function DeleteProject(formData: FormData) {
  try {
    const update = await prisma.project.delete({
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
