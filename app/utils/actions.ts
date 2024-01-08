"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function UpdateProject(formData: FormData) {
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
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function CreateProject(formData: FormData) {
  const update = await prisma.project.create({
    data: {
      name: formData.get("name") as string,
      imageUrl: formData.get("imageUrl") as string,
      url: formData.get("url") as string,
      homepage: formData.get("homepage") === "on" ? true : false,
      areaId: Number(formData.get("areaId")),
    },
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export async function DeleteProject(formData: FormData) {
  const update = await prisma.project.delete({
    where: {
      id: Number(formData.get("id")),
    },
  });
  revalidatePath("/admin");
}
