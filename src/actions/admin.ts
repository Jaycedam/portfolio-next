"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAll() {
  try {
    revalidatePath("/", "layout");
    return {
      success: true,
      message: "All the cache has been purged.",
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Error: " + e.message,
    };
  }
}
