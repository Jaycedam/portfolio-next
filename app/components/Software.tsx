import SoftwareCard from "./SoftwareCard";
import prisma from "../../lib/prisma";
import { Software } from "@prisma/client";
import MDX from "./MDX";

// disable caching, turn on for development
export const revalidate = 0;

export default async function Software() {
  const projects = await getData();
  return (
    <section id="projects" className="container">
      {/* title */}
      <header>
        <h1 className="title">Proyectos</h1>
        <p className=" text-sm font-light">
          Algunos de mis proyectos destacados, click en imagen para más
          detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-10">
        {projects.map((p) => (
          <SoftwareCard
            key={p.id}
            id={p.id}
            url={p.url}
            imageUrl={p.imageUrl}
            name={p.name}
            stack={p.stack}
            about={p.about}
            areaId={p.areaId}
          >
            <MDX url={p.url} />
          </SoftwareCard>
        ))}
      </div>
    </section>
  );
}

// get data from database, using Prisma model interface
// update prisma interface when doing migrations with
// npx prisma generate
async function getData(): Promise<Software[]> {
  const result = await prisma.software.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return result;
}
