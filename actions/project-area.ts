"use server";

import prisma from "@lib/prisma";
import { TProjectArea, projectAreaSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/project-area");
}

export async function CreateProjectArea(data: TProjectArea) {
  const parsedData = projectAreaSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Project Area could not be created. Try again.",
    };
  }

  try {
    const result = await prisma.area.create({
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

export async function UpdateProjectArea(data: TProjectArea) {
  const parsedData = projectAreaSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Project Area could not be updated. Try again.",
    };
  }

  try {
    const result = await prisma.area.update({
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

export async function DeleteProjectArea(formData: FormData) {
  try {
    const result = await prisma.area.delete({
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
