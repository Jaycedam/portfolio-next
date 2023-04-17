"use client";

import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import bg from "../../public/bg.webp";

import { motion, useScroll, useTransform } from "framer-motion";

const variant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
export default function Hero() {
  // gets overall scroll progress of page
  const { scrollYProgress } = useScroll();
  // parses from top to bottom scroll value into %
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      className="
      relative isolate grid max-h-[1500px]
      min-h-[100vh] place-items-center"
    >
      <div
        className="
          flex-center container relative
          min-h-full w-full flex-col gap-8"
      >
        <header className="grid gap-2 text-white">
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="
              text-5xl font-black 
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl"
          >
            DEV /
            <br />
            MOTION
          </motion.h1>

          <motion.p
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            ipsum.
          </motion.p>
        </header>

        <a href="#software" className="btn-hero">
          Proyectos destacados
          <span>
            <FaCode />
          </span>
        </a>

        {/* social icons  */}
        <motion.div
          style={{ y }}
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
        </motion.div>

        {/* decoration right  */}
        <motion.div
          style={{ y }}
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
        </motion.div>
      </div>

      <motion.div
        className="
          absolute inset-0 -z-10 h-full w-full"
        style={{ y }}
      >
        <Image
          src={bg}
          quality={100}
          alt=""
          placeholder="blur"
          fill
          sizes="100vh"
          className="
            rounded-b-3xl object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
