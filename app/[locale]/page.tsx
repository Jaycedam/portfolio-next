import Hero from "@components/hero";
import Projects from "@components/projects";
import About from "@components/about";
import Carreer from "@components/carreer";
import { Suspense } from "react";
import SkeletonProjects from "@components/skeleton/skeleton-projects";
import SkeletonCarreer from "@components/skeleton/skeleton-carreer";
import ContactForm from "@/components/form/contact-form";
import BlogPosts from "@/components/blog-posts";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
  const tContact = await getScopedI18n("contact");

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonProjects homepage={true} />}>
        <Projects homepage={true} />
      </Suspense>

      <Suspense fallback={<SkeletonProjects homepage={true} />}>
        <BlogPosts homepage={true} />
      </Suspense>

      <Suspense fallback={<SkeletonCarreer />}>
        <Carreer />
      </Suspense>
      <About />
      <ContactForm
        title={tContact("heading")}
        email={tContact("email")}
        subject={tContact("subject")}
        message={tContact("message")}
        send={tContact("btn.send")}
        error={tContact("toast.error")}
        success={tContact("toast.success")}
      />
    </>
  );
}
