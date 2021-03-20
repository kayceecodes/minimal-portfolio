import { motion } from "framer-motion";
import React from "react";

export default function MotionContainer(props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      {props.children}
    </motion.div>
  );
}
