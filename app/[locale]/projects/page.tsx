import Projects from "@/components/projects";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: {
    tags?: string | string[];
  };
}) {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <Projects tags={searchParams?.tags} />
    </Suspense>
  );
}

export const metadata = {
  title: "Projects - Jordan Cortés",
  description: "A list of my software projects.",
};
