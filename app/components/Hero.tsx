import { FaCode } from "react-icons/fa";
import LaptopSVG from "./LaptopSVG";
import { buttonVariants } from "@/components/ui/test";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      className="relative isolate mb-0 overflow-x-hidden
         md:mt-14"
    >
      <div className="container my-16 flex flex-col items-center justify-center gap-4 text-center">
        {/* hero graphic  */}
        <div className="w-full max-w-md [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopSVG />
        </div>

        <header className="mt-4 space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Hola, soy
            <br />
            <strong className="animate-gradient bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-6xl font-black text-transparent md:text-7xl">
              Jordan Cortés
            </strong>
          </h1>

          <p className="text-lg text-muted-foreground">
            Desarrollador de Software.
            <br />
            Ocacionalmente trabajo en Motion Graphics.
          </p>
        </header>

        <div className="flex gap-4">
          <a
            href="#projects"
            className={buttonVariants({ variant: "default" })}
          >
            <FaCode />
            &nbsp; Proyectos
          </a>

          <a
            href="#projects"
            className={buttonVariants({ variant: "outline" })}
          >
            <MdEmail />
            &nbsp; Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
