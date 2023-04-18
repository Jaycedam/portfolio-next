import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import bg from "../../public/bg.webp";

export default function Hero() {
  return (
    <section
      className="
      relative isolate mb-4 grid max-h-[1500px] min-h-[90vh]
      place-items-center overflow-hidden rounded-b-xl"
    >
      <div
        className="
          flex-center container relative
          min-h-full w-full flex-col gap-8"
      >
        <header className="grid gap-2 text-white">
          <h1
            className="
              text-5xl font-black 
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl"
          >
            JORDAN
            <br />
            CORTÉS
          </h1>

          <p>Software Developer / Motion Graphics</p>
        </header>

        <a href="#software" className="btn-hero">
          Proyectos
          <span>
            <FaCode className="text-xl" />
          </span>
        </a>

        {/* social icons  */}
        <div
          className="
            absolute top-10 flex gap-4 text-3xl text-zinc-50
            md:left-0 md:top-auto md:flex-col"
        >
          <a
            href="#"
            aria-label="GitHub Link"
            className="transition-all hover:scale-90"
          >
            <AiFillGithub />
          </a>

          <a
            href="#"
            aria-label="Dribbble Link"
            className="transition-all hover:scale-90"
          >
            <AiFillDribbbleCircle />
          </a>

          <a
            href="#"
            aria-label="Linkedin Link"
            className="transition-all hover:scale-90"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* decoration right  */}
        <div
          className="absolute -right-12 
            hidden
            md:block"
        >
          <p
            className="
              rotate-90 text-3xl font-thin tracking-wider text-zinc-50"
          >
            hello, world.
          </p>
        </div>
      </div>

      <Image
        src={bg}
        quality={100}
        alt=""
        placeholder="blur"
        fill
        sizes="100vh"
        className="
            absolute inset-0 -z-10 h-full w-full object-cover"
        priority
      />
    </section>
  );
}