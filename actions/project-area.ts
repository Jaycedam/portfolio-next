"use server";

import prisma from "@lib/prisma";
import { TProjectArea, projectAreaSchema } from "@lib/zod-schema";
import { Area } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/project-area");
}

export async function createProjectArea(data: TProjectArea) {
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

export async function getProjectAreas(): Promise<Area[]> {
  try {
    const result = await prisma.area.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
}

export async function getProjectAreaById(id: number) {
  try {
    const result = await prisma.area.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project area: ", error);
    return notFound();
  }
}

export async function updateProjectArea(data: TProjectArea) {
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

export async function deleteProjectArea(formData: FormData) {
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
