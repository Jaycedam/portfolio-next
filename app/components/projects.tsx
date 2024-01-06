import ProjectCard from "@/components/project-card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { ExtendedProject } from "@/utils/interfaces";

export default async function Projects() {
  const projects = await getData();
  return (
    <section id="projects" className="container">
      {/* title */}
      <header className="flex flex-col">
        <h1 className="title">Proyectos destacados</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-2 md:grid-cols-2">
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item}></ProjectCard>
        ))}
      </div>

      <div className="mt-8 grid justify-end">
        <Link
          href="/projects"
          className={buttonVariants({ variant: "outline" })}
        >
          Ver más &nbsp;
          <FaAngleRight />
        </Link>
      </div>
    </section>
  );
}

// get data from database, using Prisma model interface
// update prisma interface when doing migrations with
// npx prisma generate
async function getData(): Promise<ExtendedProject[]> {
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
