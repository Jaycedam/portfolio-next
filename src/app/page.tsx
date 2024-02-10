import Hero from "@components/hero";
import Projects from "@components/projects";
import About from "@components/about";
import Carreer from "@components/carreer";
import { Suspense } from "react";
import SkeletonProjects from "@components/skeleton/skeleton-projects";
import SkeletonCarreer from "@components/skeleton/skeleton-carreer";
import ContactForm from "@/components/form/contact-form";
import BlogPosts from "@/components/blog-posts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default async function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section id="projects" className="container space-y-4">
        <h1 className="heading">Proyectos destacados</h1>
        <Suspense fallback={<SkeletonProjects homepage={true} />}>
          <Projects homepage />
        </Suspense>

        <div className="flex justify-end">
          <Link
            className={`group ${buttonVariants({
              variant: "outline",
            })}`}
            href="/projects"
          >
            Ver más
            <ChevronRight className="h-4 w-0 transition-all group-hover:w-4" />
          </Link>
        </div>
      </section>

      <section id="blog" className="container space-y-4">
        <h1 className="heading">Blog</h1>
        <Suspense fallback={<SkeletonProjects homepage={true} />}>
          <BlogPosts homepage={true} />
        </Suspense>

        <div className="flex justify-end">
          <Link
            className={`group ${buttonVariants({
              variant: "outline",
            })}`}
            href="/blog"
          >
            Ver más
            <ChevronRight className="h-4 w-0 transition-all group-hover:w-4" />
          </Link>
        </div>
      </section>

      <section
        id="carreer"
        className="scroll-py-16 border-y bg-gradient-to-b from-muted/20 to-muted/10 py-16"
      >
        <div className="container space-y-8">
          <div className="mx-auto max-w-prose space-y-2 text-center">
            <h1 className="heading">Carrera Profesional</h1>
            <p className="subheading">como Desarrollador de Software.</p>
          </div>
          <Suspense fallback={<SkeletonCarreer />}>
            <Carreer />
          </Suspense>
        </div>
      </section>

      <About />
      <ContactForm />
    </div>
  );
}
