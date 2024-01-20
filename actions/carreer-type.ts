"use server";

import prisma from "@lib/prisma";
import { TCarreerType, carreerTypeSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer-type");
}

export async function CreateCarreerType(data: TCarreerType) {
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

export async function UpdateCarreerType(data: TCarreerType) {
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

export async function DeleteCarreerType(formData: FormData) {
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
