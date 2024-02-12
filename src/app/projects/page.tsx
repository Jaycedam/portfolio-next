import FilterByParam from "@/components/filter-by-param";
import Projects from "@/components/projects";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import es from "@/locales/es";
import { X } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: {
    tags?: string;
  };
}) {
  const t = es.projects;
  const tags = searchParams?.tags;

  return (
    <section className="container space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="title">
          {t.heading}{" "}
          {tags && (
            <span className="space-x-8 text-xl font-normal text-muted-foreground">
              {tags}
            </span>
          )}
        </h1>

        {tags && (
          <Link
            className={buttonVariants({ variant: "secondary", size: "sm" })}
            href="/projects"
          >
            <X className="h-4 w-auto" />
            &nbsp; Borrar filtros
          </Link>
        )}
      </div>

      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterByParam repoFolder="projects" />
      </Suspense>

      <Suspense key={tags} fallback={<SkeletonProjects />}>
        <Projects tags={searchParams?.tags} />
      </Suspense>
    </section>
  );
}

export const metadata = {
  title: "Projects - Jordan Cortés",
  description: "A list of my software projects.",
};
