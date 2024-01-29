import ProjectCard from "@components/project-card";
import { getProjects } from "@utils/get-data";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default async function Projects({
  homepage = false,
}: {
  homepage?: boolean;
}) {
  // if the prop homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  const data = await getProjects(homepage);

  return (
    <section id="projects">
      <div className="container space-y-4">
        {/* title */}
        <div className="space-y-1">
          <h1 className="heading">
            {homepage ? "Proyectos destacados" : "Proyectos"}
          </h1>
          <p className="subheading">Click en imagen para más detalles.</p>
        </div>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div
          className={`grid gap-2 ${
            homepage ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {data.map((item) => (
            <ProjectCard key={item.id} {...item}></ProjectCard>
          ))}
        </div>

        {homepage && (
          <div className="flex justify-end">
            <Link
              className={buttonVariants({
                variant: "outline",
              })}
              href="/projects"
            >
              Ver más
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
