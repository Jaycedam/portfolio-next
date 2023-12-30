"use client";

import { Carreer } from "@prisma/client";
import { CarreerType } from "../utils/enums";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

export default function CarreerCard(props: Carreer) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.5 }}
      key={props.id}
      className="grid w-full p-6 md:w-2/4
        md:odd:place-self-start md:odd:text-end md:even:place-self-end"
    >
      {/* due to localization mismatch on server/client 
      I added suppressHydrationWarning to prevent log this issue on browser */}
      <p className="text-sm font-light" suppressHydrationWarning>
        <strong className="font-normal uppercase text-pink-500">
          {CarreerType[props.typeId]}{" "}
        </strong>

        {props.start.toLocaleDateString("es-ES", {
          month: "short",
          year: "numeric",
        }) + " - "}
        {props.end &&
          props.end.toLocaleDateString("es-ES", {
            month: "short",
            year: "numeric",
          })}
      </p>

      <p className="text-lg font-bold">
        {props.name} - {props.company}
      </p>

      <p className="mt-1">{props.about}</p>
    </motion.div>
  );
}
