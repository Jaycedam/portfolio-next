import Button from "./Button";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import image from "../../public/hero.webp";

export default function Hero() {
  return (
    <section
      className="relative isolate mb-0 
         overflow-x-hidden"
    >
      <div
        className="container flex h-screen max-h-[1200px] flex-col items-center justify-center gap-4 text-center 
        md:items-start md:text-start"
      >
        {/* social icons  */}
        <div
          className="
            flex gap-4 text-3xl"
        >
          <a
            target="_blank"
            href="https://github.com/Jaycedam/"
            aria-label="GitHub Link"
            className="social-icon"
          >
            <AiFillGithub />
          </a>

          <a
            target="_blank"
            href="https://dribbble.com/Jaycedam"
            aria-label="Dribbble Link"
            className="social-icon"
          >
            <AiFillDribbbleCircle />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/jaycedam"
            aria-label="Linkedin Link"
            className="social-icon"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <header className="max-w-xl space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Hola, soy
            <br />
            <strong className="gradient animate-gradient bg-clip-text text-6xl font-black text-transparent md:text-7xl">
              Jordan Cortés.
            </strong>
          </h1>

          <p className="text-lg">
            Desarrollador de Software.
            <br />
            Ocacionalmente trabajo en Motion Graphics.
          </p>
        </header>

        <Button link="#projects" text="Ver proyectos" icon={<FaCode />} />
      </div>

      {/* screen mockup container  */}
      <div
        className="absolute inset-y-0 -right-[20%] -z-10 hidden h-full w-2/4 place-items-center 
          md:-right-[15%] 
          md:grid
          xl:-right-[10%] 
          portrait:hidden"
      >
        <div
          className=" relative aspect-[4/3] h-3/4 rounded-xl bg-zinc-100 
            before:absolute
            before:inset-0 before:-z-50 before:h-full before:w-full before:rounded-xl before:bg-zinc-300/80
            before:blur-2xl dark:bg-zinc-950 
            dark:before:bg-zinc-800/80
            "
        >
          {/* terminal  */}
          <div
            className="pointer-events-none absolute left-[-15%] top-[10%] z-10 aspect-video h-[40%] rounded-xl 
              bg-gradient-to-tl
              from-zinc-100/30 from-50% to-zinc-300/30 
              shadow-xl backdrop-blur-xl
              dark:from-zinc-900/30 dark:to-zinc-700/30"
          >
            {/* buttons  */}
            <div className="flex h-[10%] w-full gap-2 p-2">
              <div className="aspect-square h-4 rounded-full bg-primary"></div>
              <div className="aspect-square h-4 rounded-full bg-cyan-500"></div>
              <div className="aspect-square h-4 rounded-full bg-green-500"></div>
            </div>
            {/* lines code  */}
            <div
              className="flex h-[90%] w-full flex-col gap-4 px-2 py-4 
              [&>div]:h-[5%] [&>div]:rounded-xl [&>div]:bg-zinc-600/80 [&>div]:dark:bg-zinc-200/80"
            >
              <div className="w-[30%]"></div>
              <div className="w-[60%]"></div>
              <div className="w-[10%]"></div>
              <div className="w-[90%]"></div>
              <div className="w-[50%]"></div>
            </div>
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              fill
              placeholder="blur"
              className="object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
