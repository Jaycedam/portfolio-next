import SoftwareCard from "./SoftwareCard";
import prisma from "../lib/prisma";
import { Software } from "@prisma/client";

export default async function Software() {
  const projects = await getData();
  return (
    <section id="software" className="container">
      {/* title */}
      <header className="flex items-center gap-2">
        <h1 className="title">Software</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
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
          ></SoftwareCard>
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
