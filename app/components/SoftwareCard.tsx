"use client";

import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import { Software } from "@prisma/client";
import { ProjectType } from "../../utils/enums";
import { motion } from "framer-motion";
import { fadeInRight } from "../../utils/animations";
import Modal from "./Modal";
import { useState } from "react";

interface ISoftware extends Software {
  children: React.ReactNode;
}

export default function SoftwareCard(props: ISoftware) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      className="grid gap-2
        md:grid-cols-2 md:gap-8"
    >
      {/* image with link to project */}
      <button onClick={openModal}>
        <div
          className="group relative isolate aspect-square
            overflow-hidden rounded-xl shadow-md transition-all
            duration-500
            hover:scale-[1.03]"
        >
          {/* overlay  */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-20
            flex w-full items-center justify-center gap-2 bg-gradient-to-t
            from-zinc-950/80 pb-8 
            pt-12 font-bold
            text-zinc-50
            transition-all duration-300"
          >
            Ver proyecto <BiLinkExternal />
          </div>

          <Image
            src={props.imageUrl}
            alt="project-image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover
            transition-all duration-500
            group-hover:scale-105"
          />
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Example Modal">
        {props.children}
      </Modal>

      {/* text section */}
      <motion.div
        variants={fadeInRight}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.5 }}
        className="flex flex-col items-start justify-center gap-3"
      >
        <h2 className="text-xl font-bold">
          {props.name} - {ProjectType[props.areaId]}
        </h2>
        <motion.p
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          {props.about}
        </motion.p>
      </motion.div>
    </div>
  );
}
