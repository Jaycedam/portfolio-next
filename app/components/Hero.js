"use client";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

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
      className="relative isolate grid place-items-center
      min-h-[100vh] min-h-[100svh] max-h-[1500px]"
    >
      <div
        className="container w-full min-h-full
          flex-center flex-col gap-8 relative"
      >
        <header className="grid gap-2 text-white">
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="font-black text-5xl 
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
        </motion.div>

        {/* decoration right  */}
        <motion.div
          style={{ y }}
          className="-right-12 absolute 
            hidden
            md:block"
        >
          <p className="rotate-90 text-zinc-50 font-thin text-3xl tracking-wider">
            hello, world.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute w-full h-full inset-0 -z-10"
        style={{ y }}
      >
        <Image
          src={"/bg.png"}
          quality={100}
          alt=""
          fill
          sizes="100vh"
          className="object-cover rounded-b-3xl"
          priority
        />
      </motion.div>
    </section>
  );
}
