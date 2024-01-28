"use server";

import { CarreerForm } from "@/utils/types";
import prisma from "@lib/prisma";
import { carreerSchema } from "@/utils/zod-schema";
import { revalidatePath } from "next/cache";

// todo: universal local messages with str params

// todo: replace with cache tags
function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer");
}

export const createCarreer = async (data: CarreerForm) => {
  const parsedData = carreerSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Carreer could not be created. Try again.",
    };
  }
  try {
    const result = await prisma.carreer.create({
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
      message: "Error: " + " " + e.message,
    };
  }
};

export const updateCarreer = async (data: CarreerForm) => {
  const parsedData = carreerSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Carreer could not be updated. Please try again.",
    };
  }
  try {
    const result = await prisma.carreer.update({
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
      error: "Error: " + " " + e.message,
    };
  }
};

export const deleteCarreer = async (formData: FormData) => {
  try {
    const result = await prisma.carreer.delete({
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
