"use server";

import { ExtendedCarreer } from "@/utils/interfaces";
import { CarreerForm } from "@/utils/types";
import prisma from "@lib/prisma";
import { carreerSchema } from "@lib/zod-schema";
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

export const getCarreers = cache(async (): Promise<ExtendedCarreer[]> => {
  try {
    const result = await prisma.carreer.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        type: true,
      },
    });

    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
});

export const getCarreerById = cache(async (id: number) => {
  try {
    const result = await prisma.carreer.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer: ", error);
    return notFound();
  }
});

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
