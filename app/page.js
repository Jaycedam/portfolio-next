import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* container with padding */}
      <div
        className="p-6
        md:px-10 
        lg:px-24"
      >
        <Projects />
        <About />
      </div>

      <Footer />
    </main>
  );
}
