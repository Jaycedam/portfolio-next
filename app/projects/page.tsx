import Projects from "@/components/projects";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

const ProjectsPage = ({
  searchParams,
}: {
  searchParams?: {
    tags?: string | string[];
  };
}) => {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <Projects tags={searchParams?.tags} />
    </Suspense>
  );
};

export default ProjectsPage;
