import { notFound } from "next/navigation";
import { cache } from "react";
import { ExtendedCarreer, ExtendedProject } from "@/utils/interfaces";
import { Area, Project, Type } from "@prisma/client";
import prisma from "@lib/prisma";

// the results are cached
// Wait for stable release of unstable cache for transfer
// https://nextjs.org/docs/app/api-reference/functions/unstable_cache

// project
export const getProjects = cache(async (): Promise<ExtendedProject[]> => {
  try {
    const result = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
      where: {
        homepage: true,
      },
      take: 4,
      include: {
        area: true,
      },
    });
    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
});

export const getProjectById = cache(async (id: number): Promise<Project> => {
  try {
    const result = await prisma.project.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project: ", error);
    return notFound();
  }
});

export const getProjectByName = cache(
  async (name: string): Promise<Project> => {
    try {
      const result = await prisma.project.findUniqueOrThrow({
        where: { name: name },
      });
      return result;
    } catch (error) {
      console.log("Error fetching project: ", error);
      return notFound();
    }
  }
);

// project area
export const getProjectAreas = cache(async (): Promise<Area[]> => {
  try {
    const result = await prisma.area.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
});

export const getProjectAreaById = cache(async (id: number) => {
  try {
    const result = await prisma.area.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project area: ", error);
    return notFound();
  }
});

// carreer
export const getCarreers = cache(async (): Promise<ExtendedCarreer[]> => {
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
});

export const getCarreerById = cache(async (id: number) => {
  try {
    const result = await prisma.carreer.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer: ", error);
    return notFound();
  }
});

// type
export const getCarreerTypes = cache(async (): Promise<Type[]> => {
  try {
    const result = await prisma.type.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
});

export const getCarreerTypeById = cache(async (id: number) => {
  try {
    const result = await prisma.type.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer type: ", error);
    return notFound();
  }
});

// user
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
