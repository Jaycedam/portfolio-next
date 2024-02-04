"use server";

import { CarreerTypeForm } from "@/utils/types";
import prisma from "@lib/prisma";
import { carreerTypeSchema } from "@/utils/zod-schema";
import { revalidatePath } from "next/cache";

// todo: universal local messages with str params

// todo: replace with cache tags
function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer-type");
}

export const createCarreerType = async (data: CarreerTypeForm) => {
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
      message: `${result.name_en} created successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
};

export const updateCarreerType = async (data: CarreerTypeForm) => {
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
      message: `${result.name_en} updated successfully.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
};

export const deleteCarreerType = async (formData: FormData) => {
  try {
    const result = await prisma.type.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });

    revalidate();
    return {
      success: true,
      message: `${result.name_en} successfully deleted.`,
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
};
