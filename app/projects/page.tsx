import Projects from "@/components/projects";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

const ProjectsPage = () => {
  return (
    <Suspense fallback={<SkeletonProjects />}>
      <Projects />
    </Suspense>
  );
};

export default ProjectsPage;
