import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "./components/Hero";
import Software from "./components/Software";
import Motion from "./components/Motion";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* disable ts check due to bug, 
      details https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components */}
      {/* @ts-expect-error Server Component */}
      <Software />
      <Motion />
      <About />
      <Footer />
    </main>
  );
}
