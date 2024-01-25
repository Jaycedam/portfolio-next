import ProjectCard from "@components/project-card";
import Link from "next/link";
import { buttonVariants } from "@components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { getProjects } from "@/actions/project";

// prop highlights defines if we return all items or only the ones that have homepage: true on the db
// it also changes the grid layout
export default async function Projects({ homepage }: { homepage: boolean }) {
  // if the prop homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  const data = await getProjects(homepage);

  const title: string = homepage ? "Proyectos destacados" : "Proyectos";
  return (
    <section id="projects">
      <div className="container space-y-4">
        {/* title */}
        <div className="space-y-1">
          <h1 className="heading">{title}</h1>
          <p className="subheading">Click en imagen para más detalles.</p>
        </div>
        {/* GRID LAYOUR FOR PROJECTS */}
        <div
          className={`grid gap-4 ${
            homepage ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {data.map((item) => (
            <ProjectCard key={item.id} {...item}></ProjectCard>
          ))}
        </div>

        {homepage && (
          <div className="mt-8 grid justify-end">
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline" })}
            >
              Ver todos los proyectos &nbsp;
              <FaAngleRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
