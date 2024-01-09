import prisma from "@/lib/prisma";
import { ExtendedCarreer, ExtendedProject } from "./interfaces";
import { notFound } from "next/navigation";
import { Area, Type } from "@prisma/client";

// PROJECT
export async function getProjectListHome(): Promise<ExtendedProject[]> {
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
}

export async function getProjectList(): Promise<ExtendedProject[]> {
  try {
    const result = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        area: true,
      },
    });

    return result;
  } catch (error) {
    console.log("Error fetching data from db: ", error);
    return [];
  }
}

export async function getProject(id: number) {
  try {
    const result = await prisma.project.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project: ", error);
    return notFound();
  }
}
// END PROJECT

// PROJECT AREA
export async function getProjectAreaList(): Promise<Area[]> {
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
}

export async function getProjectArea(id: number) {
  try {
    const result = await prisma.area.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching project area: ", error);
    return notFound();
  }
}
// END PROJECT AREA

// CARREER
export async function getCarreerList(): Promise<ExtendedCarreer[]> {
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
}

export async function getCarreer(id: number) {
  try {
    const result = await prisma.carreer.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer: ", error);
    return notFound();
  }
}
// END CARREER

// CARREER TYPE
export async function getCarreerTypeList(): Promise<Type[]> {
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
}

export async function getCarreerType(id: number) {
  try {
    const result = await prisma.type.findUniqueOrThrow({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log("Error fetching carreer type: ", error);
    return notFound();
  }
}
// END CARREER TYPE
