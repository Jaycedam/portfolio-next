"use server";

import prisma from "@lib/prisma";
import { TProjectArea, projectAreaSchema } from "@lib/zod-schema";
import { Area } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

// the results are cached, updated with the revalidate function.
// Wait for stable release of unstable cache for transfer
// https://nextjs.org/docs/app/api-reference/functions/unstable_cache

// todo: universal local messages with str params

// todo: replace with cache tags
function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/project-area");
}

export const createProjectArea = async (data: TProjectArea) => {
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

export const getProjectAreas = cache(async (): Promise<Area[]> => {
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
});

export const getProjectAreaById = cache(async (id: number) => {
  try {
    const result = await prisma.area.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project area: ", error);
    return notFound();
  }
});

export const updateProjectArea = async (data: TProjectArea) => {
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
