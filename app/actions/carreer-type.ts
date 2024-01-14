"use server";

import prisma from "@/lib/prisma";
import { TCarreerType, carreerTypeSchema } from "@/lib/zod-schema";
import { revalidatePath } from "next/cache";

const url: string = "/admin/carreer-type";

export async function CreateCarreerType(data: TCarreerType) {
  let errorMessage: string =
    "Carreer Type could not be created, try again later.";
  let successMessage: string = "Carreer Type created successfully.";

  const parsedData = carreerTypeSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.type.create({
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

export async function UpdateCarreerType(data: TCarreerType) {
  let errorMessage: string =
    "Carreer Type could not be updated, try again later.";
  let successMessage: string = "Carreer Type updated successfully.";

  const parsedData = carreerTypeSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }

  try {
    await prisma.type.update({
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

export async function DeleteCarreerType(formData: FormData) {
  try {
    await prisma.type.delete({
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
