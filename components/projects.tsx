import ProjectCard from "@components/project-card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronRight, X } from "lucide-react";
import { getMDXMeta } from "@/utils/fetch-mdx";

export default async function Projects({
  homepage = false,
  tags,
}: {
  homepage?: boolean;
  tags?: string | string[];
}) {
  // if the prop homepage = true, fetch only 4 values with the homepage property set to true, else return all items
  let data = await getMDXMeta("projects");
  let title = "Proyectos";

  if (!data) {
    return <p>No projects available</p>;
  }
  if (homepage) {
    title = title + " destacados";
    data = data.filter((item) => item.featured === "true");
  }

  if (!homepage && tags && tags.length > 0) {
    title = title + " " + tags;
    data = data.filter(
      (item) => item.tags && item.tags.some((tag) => tags.includes(tag))
    );
  }

  return (
    <section id="projects">
      <div className="container space-y-4">
        {/* title */}

        <div className="flex flex-wrap justify-between">
          <div className="space-y-1">
            <h1 className="heading">{title}</h1>
            <p className="subheading">Click en imagen para más detalles.</p>
          </div>

          {tags && (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/projects"
            >
              <X className="h-4" />
              Limpiar filtros
            </Link>
          )}
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
              <ChevronRight className="h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
