import Button from "./Button";
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
      place-items-center overflow-hidden rounded-b-3xl"
    >
      <div
        className="
          flex-center container relative
          min-h-full w-full flex-col gap-8"
      >
        <header className="grid gap-2 text-white">
          <h1
            className="
              text-6xl font-black 
              drop-shadow-2xl
              md:text-8xl"
          >
            DEV &
            <br />
            MOTION
          </h1>

          <p className="max-w-md">
            Hola! soy Jordan. Desarrollo software y ocacionalmente trabajo en
            Motion Graphics.
          </p>
        </header>

        <Button
          link="#software"
          color="secondary"
          text="Ver proyectos"
          icon={<FaCode />}
        />

        {/* social icons  */}
        <div
          className="
            absolute top-10 flex gap-4 text-3xl text-zinc-50
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
