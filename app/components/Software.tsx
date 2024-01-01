import SoftwareCard from "./SoftwareCard";
import prisma from "../lib/prisma";
import { Software } from "@prisma/client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FaAngleRight } from "react-icons/fa6";

export default async function Software() {
  const projects = await getData();
  return (
    <section id="software" className="container">
      {/* title */}
      <header className="flex flex-col">
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
            homepage
          ></SoftwareCard>
        ))}
      </div>

      <div className="mt-8 grid justify-end">
        <Link
          href="/software"
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
async function getData(): Promise<Software[]> {
  const result = await prisma.software.findMany({
    where: {
      homepage: true,
    },
    take: 4,
    orderBy: {
      id: "desc",
    },
  });
  return result;
}
