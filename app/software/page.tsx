import SoftwareCard from "@/components/SoftwareCard";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { Software } from "@prisma/client";
import { Suspense } from "react";

// skeleton for image in the software list
function SkeletonLoader(props: { count: number }) {
  return Array.from({ length: props.count }, (_, index) => (
    <Skeleton key={index} className="aspect-square" />
  ));
}

export default async function SoftwareHome() {
  const projects = await getData();
  return (
    <section className="container">
      {/* title */}
      <header className="flex flex-col">
        <h1 className="title">Software</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div className="grid gap-2 md:grid-cols-3">
        <Suspense fallback={<SkeletonLoader count={6} />}>
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
        </Suspense>
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
