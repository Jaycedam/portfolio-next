import SoftwareCard from "./SoftwareCard";
import prisma from "../lib/prisma";
import { Software } from "@prisma/client";
import MDX from "./MDX";

export default async function Software() {
  const projects = await getData();
  return (
    <section id="projects" className="container">
      {/* title */}
      <header className="flex items-center gap-2">
        <h1 className="title">Proyectos</h1>
        <p className="subtitle">click en imagen para más detalles.</p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-2 md:grid-cols-2">
        {projects.map((p) => (
          <SoftwareCard
            key={p.id}
            id={p.id}
            url={p.url}
            imageUrl={p.imageUrl}
            name={p.name}
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
