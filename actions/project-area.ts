"use server";

import { ProjectAreaForm } from "@/utils/types";
import prisma from "@lib/prisma";
import { projectAreaSchema } from "@/utils/zod-schema";
import { revalidatePath } from "next/cache";

// todo: universal local messages with str params

// todo: replace with cache tags
function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/project-area");
}

export const createProjectArea = async (data: ProjectAreaForm) => {
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
};

export const updateProjectArea = async (data: ProjectAreaForm) => {
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
};

export const deleteProjectArea = async (formData: FormData) => {
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
};
