import Projects from "@/components/projects";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";
import { Suspense } from "react";

export default async function ProjectsHome() {
  return (
    <main>
      <Suspense fallback={<SkeletonProjects highlights={false} />}>
        <Projects highlights={false} />
      </Suspense>
    </main>
  );
}
