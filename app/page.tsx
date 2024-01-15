import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Carreer from "@/components/carreer";
import { Suspense } from "react";
import SkeletonProjects from "@/components/skeleton/skeleton-projects";

export default function Home() {
  return (
    // pt 14 offset of nav height
    <>
      <Hero />
      <Suspense fallback={<SkeletonProjects highlights={true} />}>
        <Projects homepage={true} />
      </Suspense>
      <Carreer />
      <About />
    </>
  );
}
