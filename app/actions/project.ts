"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url: string = "/admin/projects";

export async function CreateProject(formData: FormData) {
  try {
    const update = await prisma.project.create({
      data: {
        name: formData.get("name") as string,
        imageUrl: formData.get("imageUrl") as string,
        url: formData.get("url") as string,
        homepage: formData.get("homepage") === "on" ? true : false,
        areaId: Number(formData.get("areaId")),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function UpdateProject(formData: FormData) {
  try {
    const update = await prisma.project.update({
      where: {
        id: Number(formData.get("id")),
      },
      data: {
        name: formData.get("name") as string,
        imageUrl: formData.get("imageUrl") as string,
        url: formData.get("url") as string,
        homepage: formData.get("homepage") === "on" ? true : false,
        areaId: Number(formData.get("areaId")),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(url);
    redirect(url);
  }
}

export async function DeleteProject(formData: FormData) {
  try {
    const update = await prisma.project.delete({
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
