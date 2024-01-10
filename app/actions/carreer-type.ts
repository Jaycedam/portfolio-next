"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url: string = "/admin/carreer-type";

export async function CreateCarreerType(formData: FormData) {
  try {
    const update = await prisma.type.create({
      data: {
        name: formData.get("name") as string,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function UpdateCarreerType(formData: FormData) {
  try {
    const update = await prisma.type.update({
      where: {
        id: Number(formData.get("id")),
      },
      data: {
        name: formData.get("name") as string,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function DeleteCarreerType(formData: FormData) {
  try {
    const update = await prisma.type.delete({
      where: {
        id: Number(formData.get("id")),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
  }
}
