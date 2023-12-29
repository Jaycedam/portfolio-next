"use client";

import Image from "next/image";
import { Software } from "@prisma/client";
import { ProjectType } from "../utils/enums";
import Modal from "./ui/Modal";
import { useState } from "react";

interface ISoftware extends Software {
  children: React.ReactNode;
}

export default function SoftwareCard(props: ISoftware) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* image with link to project */}
      <button onClick={openModal}>
        <div
          className="group relative isolate aspect-square overflow-hidden rounded-lg
             transition-all duration-500"
        >
          {/* overlay  */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-20
              w-full items-center justify-center bg-gradient-to-t
              from-zinc-950/80 pb-8 
              pt-12 text-lg 
              text-zinc-50"
          >
            {props.name} - {ProjectType[props.areaId]}
          </div>

          <Image
            src={props.imageUrl}
            alt="project-image"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover 
            transition-all duration-500 group-hover:scale-110
            "
          />
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {props.children}
      </Modal>
    </>
  );
}
