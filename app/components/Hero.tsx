import Button from "./Button";
import { FaCode } from "react-icons/fa";
import LaptopSVG from "./LaptopSVG";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section
      className="relative isolate mb-0 overflow-x-hidden
         md:mt-14"
    >
      <div className="container my-16 flex flex-col items-center justify-center gap-4 text-center">
        {/* hero graphic  */}
        <div className="max-w-lg [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopSVG />
        </div>

        <ThemeToggle />

        <header className="mt-4 space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Hola, soy
            <br />
            <strong className="gradient animate-gradient bg-clip-text text-6xl font-black text-transparent md:text-8xl">
              Jordan Cortés
            </strong>
          </h1>

          <p>
            Desarrollador de Software.
            <br />
            Ocacionalmente trabajo en Motion Graphics.
          </p>
        </header>

        <Button link="#projects" text="Ver proyectos" icon={<FaCode />} />
      </div>
    </section>
  );
}
