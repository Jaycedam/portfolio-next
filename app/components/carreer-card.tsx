"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { ExtendedCarreer } from "@/utils/interfaces";

export default function CarreerCard(props: ExtendedCarreer) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.5 }}
      key={props.id}
      className="grid w-full p-6 md:w-2/4 md:odd:place-self-start md:odd:text-end md:even:place-self-end"
    >
      <p className="text-sm font-light">
        <strong className="font-normal uppercase text-primary">
          {props.type.name} &nbsp;
        </strong>
        {props.date && "- " + props.date}
      </p>

      <p className="text-lg font-bold">
        {props.name} - {props.company}
      </p>

      <p className="mt-1 text-muted-foreground">{props.about}</p>
    </motion.div>
  );
}
