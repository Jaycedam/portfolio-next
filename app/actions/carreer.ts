"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url: string = "/admin/carreer";

export async function CreateCarreer(formData: FormData) {
  try {
    const create = await prisma.carreer.create({
      data: {
        name: formData.get("name") as string,
        about: formData.get("about") as string,
        company: formData.get("company") as string,
        typeId: Number(formData.get("typeId")),
        date: formData.get("date") as string,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function UpdateCarreer(formData: FormData) {
  try {
    const update = await prisma.carreer.update({
      where: {
        id: Number(formData.get("id")),
      },
      data: {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        about: formData.get("about") as string,
        typeId: Number(formData.get("typeId")),
        date: formData.get("date") as string,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function DeleteCarreer(formData: FormData) {
  try {
    const update = await prisma.carreer.delete({
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
