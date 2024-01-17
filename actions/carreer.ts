"use server";

import prisma from "@lib/prisma";
import { TCarreer, carreerSchema } from "@lib/zod-schema";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/");
  revalidatePath("/admin/carreer");
}

export async function CreateCarreer(data: TCarreer) {
  let errorMessage: string = "Carreer could not be created, try again later.";
  let successMessage: string = "Carreer created successfully.";

  const parsedData = carreerSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }
  try {
    await prisma.carreer.create({
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
    revalidate();
  }
}

export async function UpdateCarreer(data: TCarreer) {
  let errorMessage: string = "Carreer could not be updated, try again later.";
  let successMessage: string = "Carreer updated successfully.";

  const parsedData = carreerSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: errorMessage,
    };
  }
  try {
    await prisma.carreer.update({
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
    revalidate();
  }
}

export async function DeleteCarreer(formData: FormData) {
  try {
    await prisma.carreer.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });
    return {
      success: "Carreer successfully deleted.",
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  } finally {
    revalidate();
  }
}
