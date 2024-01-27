import Projects from "@components/projects";
import SkeletonProjects from "@components/skeleton/skeleton-projects";
import { Suspense } from "react";

export const metadata = {
  title: "Jordan Cortés | Projects",
  description: "Software Projects",
};

export default async function ProjectsPage() {
  return (
    <Suspense fallback={<SkeletonProjects highlights={false} />}>
      <Projects homepage={false} />
    </Suspense>
  );
}
