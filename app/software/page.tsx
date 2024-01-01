import SoftwareCard from "@/components/SoftwareCard";
import prisma from "@/lib/prisma";
import { Software } from "@prisma/client";

export default async function SoftwareHome() {
  const projects = await getData();
  return (
    <section className="container">
      {/* title */}
      <header className="flex items-center gap-2">
        <h1 className="title">Software</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-2 md:grid-cols-3">
        {projects.map((p) => (
          <SoftwareCard
            key={p.id}
            id={p.id}
            url={p.url}
            imageUrl={p.imageUrl}
            name={p.name}
            areaId={p.areaId}
            homepage
          ></SoftwareCard>
        ))}
      </div>
    </section>
  );
}

async function getData(): Promise<Software[]> {
  const result = await prisma.software.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return result;
}
