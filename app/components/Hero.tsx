import Button from "./Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import LaptopAnimation from "./LaptopAnimation";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section
      className="relative isolate mb-0 overflow-x-hidden
         md:mt-14"
    >
      <div
        className="container flex flex-col justify-center gap-8 py-20 md:flex-row-reverse md:items-center md:py-36
          [&>div]:w-full md:[&>div]:w-2/4"
      >
        {/* hero graphic  */}
        <div className="[&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopAnimation />
        </div>

        <div
          className="flex flex-col items-center gap-4 text-center
            md:items-start md:text-start"
        >
          <ThemeToggle />

          <header className="mt-4 max-w-xl space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              Hola, soy
              <br />
              <strong className="gradient animate-gradient bg-clip-text text-6xl font-black text-transparent md:text-7xl">
                Jordan Cortés.
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
      </div>
    </section>
  );
}
