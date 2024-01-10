import ProjectCard from "@/components/project-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { getProjectListHome, getProjectList } from "@/utils/get-data";

// prop highlights defines if we return all items or only the ones that have homepage: true on the db
// it also changes the grid layout
export default async function Projects({ homepage }: { homepage: boolean }) {
  // if homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  let projects;
  switch (homepage) {
    case true:
      projects = await getProjectListHome();
      break;
    case false:
      projects = await getProjectList(true);
      break;
  }

  // changes the skeleton loading items, use double the number of the md:grid-cols of the skeleton parent
  const skeletonCount: number = homepage ? 4 : 6;
  const title: string = homepage ? "Proyectos destacados" : "Proyectos";
  return (
    <section id="projects" className="container">
      {/* title */}
      <header className="flex flex-col">
        <h1 className="title">{title}</h1>
        <p className="text-sm font-light text-muted-foreground">
          click en imagen para más detalles.
        </p>
      </header>
      {/* GRID LAYOUR FOR PROJECTS */}
      <div
        className={`grid gap-2 ${
          homepage ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item}></ProjectCard>
        ))}
      </div>

      {homepage && (
        <div className="mt-8 grid justify-end">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline" })}
          >
            Ver más &nbsp;
            <FaAngleRight />
          </Link>
        </div>
      )}
    </section>
  );
}
