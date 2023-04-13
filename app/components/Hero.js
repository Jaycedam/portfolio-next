import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

export default function Hero() {
  // bg is inside "after:"
  return (
    <section
      className="relative isolate
      h-screen max-h-[1500px]

      after:content-[''] after:absolute after:inset-0
      after:w-screen after:h-full 
      after:bg-[url('/bg.png')] after:bg-cover after:bg-center after:bg-fixed
      after:rounded-b-2xl after:-z-10"
    >
      <div
        className="container h-full w-full 
          flex-center flex-col gap-8 relative"
      >
        <header className="grid gap-2 text-white">
          <h1
            className="font-black text-5xl 
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl"
          >
            Software
            <br />
            Dev.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            ipsum.
          </p>
        </header>

        <a href="#software" className="btn-hero">
          Proyectos destacados
          <span>
            <FaCode />
          </span>
        </a>

        {/* social icons  */}
        <div
          className="absolute top-10 text-3xl flex gap-4 text-zinc-50
          md:left-0 md:top-auto md:flex-col"
        >
          <a href="#" aria-label="GitHub Link">
            <AiFillGithub />
          </a>

          <a href="#" aria-label="Dribbble Link">
            <AiFillDribbbleCircle />
          </a>

          <a href="#" aria-label="Linkedin Link">
            <AiFillLinkedin />
          </a>
        </div>

        {/* decoration right  */}
        <div
          className="-right-12 absolute rotate-90 text-zinc-50 font-thin text-3xl tracking-wider
            hidden
            md:block"
        >
          hello, world.
        </div>
      </div>
    </section>
  );
}
