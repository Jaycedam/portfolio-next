import ProjectCard from "@/components/project-card";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { Suspense } from "react";
import { ExtendedProject } from "@/utils/interfaces";

// skeleton for image in the project list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="aspect-square" />
  ));
}

export default async function ProjectsHome() {
  const projects = await getData();
  return (
    <main>
      <section className="container">
        {/* title */}
        <header className="flex flex-col">
          <h1 className="title">Proyectos</h1>
          <p className="text-sm font-light text-muted-foreground">
            click en imagen para más detalles.
          </p>
        </header>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div className="grid gap-2 md:grid-cols-3">
          <Suspense fallback={<SkeletonLoader count={6} />}>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                url={p.url}
                imageUrl={p.imageUrl}
                name={p.name}
                areaId={p.areaId}
                area={p.area}
                homepage
              ></ProjectCard>
            ))}
          </Suspense>
        </div>
      </section>
    </main>
  );
}

async function getData(): Promise<ExtendedProject[]> {
  const result = await prisma.project.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      area: true,
    },
  });
  return result;
}
