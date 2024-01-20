"use server";

import { notFound } from "next/navigation";
import prisma from "@lib/prisma";

export async function getUserByUsername(username: string) {
  try {
    const result = await prisma.user.findUniqueOrThrow({
      where: { username: username },
    });
    return result;
  } catch (error) {
    console.log("Error fetching user: ", error);
    return notFound();
  }
}
