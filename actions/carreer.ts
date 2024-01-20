"use server";

import { ExtendedCarreer } from "@/utils/interfaces";
import prisma from "@lib/prisma";
import { TCarreer, carreerSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer");
}

export async function createCarreer(data: TCarreer) {
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
}

export async function getCarreers(): Promise<ExtendedCarreer[]> {
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
}

export async function getCarreerById(id: number) {
  try {
    const result = await prisma.carreer.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer: ", error);
    return notFound();
  }
}

export async function updateCarreer(data: TCarreer) {
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
}

export async function deleteCarreer(formData: FormData) {
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
}
