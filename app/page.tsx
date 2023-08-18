import Hero from "./components/Hero";
import Software from "./components/Software";
import About from "./components/About";
import Carreer from "./components/Carreer";

export default function Home() {
  const email: string = process.env.EMAIL;

  return (
    <main>
      <Hero />
      <Software />
      <Carreer />
      <About email={email} />
    </main>
  );
}
