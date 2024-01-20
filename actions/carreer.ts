"use server";

import prisma from "@lib/prisma";
import { TCarreer, carreerSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer");
}

export async function CreateCarreer(data: TCarreer) {
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

export async function UpdateCarreer(data: TCarreer) {
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

export async function DeleteCarreer(formData: FormData) {
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
