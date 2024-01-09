"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url: string = "/admin/project-area";

export async function CreateProjectArea(formData: FormData) {
  try {
    const update = await prisma.area.create({
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

export async function UpdateProjectArea(formData: FormData) {
  try {
    const update = await prisma.area.update({
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

export async function DeleteProjectArea(formData: FormData) {
  try {
    const update = await prisma.area.delete({
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
