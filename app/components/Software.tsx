import SoftwareCard from "./SoftwareCard";
import prisma from "../../lib/prisma";
import { Software } from "@prisma/client";

// revalidate cache every week
export const revalidate = 604800;

export default async function Software() {
  const projects = await getData();
  return (
    <section id="projects" className="container">
      {/* title */}
      <header>
        <h1 className="title">Proyectos personales</h1>
        <p className="text-sm font-light">
          Click imagen para ver proyecto o código.
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
          />
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
