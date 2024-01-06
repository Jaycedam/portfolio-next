import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Carreer from "@/components/carreer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects highlights={true} />
      <Carreer />
      <About />
    </main>
  );
}
