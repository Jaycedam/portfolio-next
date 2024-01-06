import ProjectCard from "@/components/project-card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { ExtendedProject } from "@/utils/interfaces";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// skeleton for image in the project list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="aspect-square" />
  ));
}

// prop highlights defines if we return all items or only the ones that have homepage: true on the db
// it also changes the grid layout
export default async function Projects(props: { highlights: boolean }) {
  const projects = await getData(props.highlights);
  // changes the skeleton loading items, use double the number of the md:grid-cols of the skeleton parent
  const skeletonCount: number = props.highlights ? 4 : 6;
  const title: string = props.highlights ? "Proyectos destacados" : "Proyectos";
  return (
    <section id="projects" className="container">
      {/* title */}
      <header className="flex flex-col">
        <h1 className="title">{title}</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div
        className={`grid gap-2 ${
          props.highlights ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        <Suspense fallback={<SkeletonLoader count={skeletonCount} />}>
          {projects.map((item) => (
            <ProjectCard key={item.id} {...item}></ProjectCard>
          ))}
        </Suspense>
      </div>

      {props.highlights && (
        <div className="mt-8 grid justify-end">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline" })}
          >
            Ver más &nbsp;
            <FaAngleRight />
          </Link>
        </div>
      )}
    </section>
  );
}

// get data from database, using Prisma model interface
// update prisma interface when doing migrations with
// npx prisma generate
// Highlights parameter defines if we get all items or only the ones which have homepage: true on the db
async function getData(highlights: boolean): Promise<ExtendedProject[]> {
  try {
    if (highlights) {
      const result = await prisma.project.findMany({
        where: {
          homepage: true,
        },
        take: 4,
        orderBy: {
          id: "desc",
        },
        include: {
          area: true,
        },
      });

      return result;
    }
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
