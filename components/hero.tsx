import { FaCode } from "react-icons/fa";
import LaptopSVG from "@components/svg/laptop-svg";
import { buttonVariants } from "@components/ui/button";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-4 space-y-4 text-center">
        {/* hero graphic  */}
        <div className="w-full max-w-lg py-4 [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopSVG />
        </div>

        <div className="space-y-2">
          <h1 className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-6xl lg:text-7xl">
            Jordan Cortés
          </h1>

          <p className="text-lg text-muted-foreground">
            Desarrollador de Software.
            <br />
            Actualmente enfocado en full stack Next.js (React) con Typescript.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="/#projects"
          >
            <FaCode /> &nbsp; Projectos
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="/#contact"
          >
            <MdEmail /> &nbsp; Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
