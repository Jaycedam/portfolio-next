import SoftwareCard from "./SoftwareCard";
import prisma from "../../lib/prisma";
import { Software } from "@prisma/client";

// revalidate cache every week
export const revalidate = 604800;

export default async function Software() {
  const projects = await getData();
  return (
    <section id="software" className="relative z-10">
      <div className="container">
        {/* title */}
        <header
          className="
            flex flex-col items-center gap-4 py-4
            md:flex-row"
        >
          <h1 className="title">Software: Destacados</h1>
          <p className="text-sm font-light italic">
            Click imagen para ver proyecto o repo.
          </p>
        </header>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div className="grid gap-10">
          {projects.map((p) => (
            <SoftwareCard
              key={p.id}
              url={p.url}
              image_url={p.imageUrl}
              name={p.name}
              technologies={p.stack}
              about={p.about}
            />
          ))}
        </div>
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
