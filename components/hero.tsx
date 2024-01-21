import { FaCode } from "react-icons/fa";
import LaptopSVG from "@components/svg/laptop-svg";
import { buttonVariants } from "@components/ui/button";
import { MdEmail } from "react-icons/md";
import ScrolIntoViewButton from "./scroll-into-view-button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center">
      {/* hero graphic  */}
      <div className="w-full max-w-md py-4 [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
        <LaptopSVG />
      </div>

      <header className="mt-4 space-y-2">
        <h1 className="text-3xl font-bold md:text-4xl">
          Hola, soy
          <br />
          <strong className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-6xl font-black text-transparent md:text-7xl">
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
        <ScrolIntoViewButton variant="outline" id="projects">
          <FaCode /> &nbsp; Projectos
        </ScrolIntoViewButton>

        <ScrolIntoViewButton id="contact">
          <MdEmail /> &nbsp; Contactar
        </ScrolIntoViewButton>
      </div>
    </section>
  );
}
