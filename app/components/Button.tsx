"use client";
import { motion } from "framer-motion";
import { button } from "../../utils/animations";

export default function Button(props) {
  return (
    <motion.a
      variants={button}
      whileHover={"hover"}
      whileTap={"tap"}
      className="flex-center w-fit gap-2 rounded-lg bg-zinc-950
      px-6 py-2.5 font-bold text-zinc-100 shadow-lg
  
      transition-colors hover:bg-primary hover:text-zinc-100 
      
      dark:bg-zinc-100 dark:text-zinc-900"
      href={props.link}
    >
      {props.text}
      {/* checks if prop icon exist  */}
      {props.icon && <span>{props.icon}</span>}
    </motion.a>
  );
}
