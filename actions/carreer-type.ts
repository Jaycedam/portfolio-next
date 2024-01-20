"use server";

import prisma from "@lib/prisma";
import { TCarreerType, carreerTypeSchema } from "@lib/zod-schema";
import { Type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer-type");
}

export async function createCarreerType(data: TCarreerType) {
  const parsedData = carreerTypeSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Carreer Type could not be created. Try again.",
    };
  }

  try {
    const result = await prisma.type.create({
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

export async function getCarreerTypes(): Promise<Type[]> {
  try {
    const result = await prisma.type.findMany({
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

export async function getCarreerTypeById(id: number) {
  try {
    const result = await prisma.type.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer type: ", error);
    return notFound();
  }
}

export async function updateCarreerType(data: TCarreerType) {
  const parsedData = carreerTypeSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Carreer Type could not be updated. Please try again.",
    };
  }

  try {
    const result = await prisma.type.update({
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

export async function deleteCarreerType(formData: FormData) {
  try {
    const result = await prisma.type.delete({
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
