"use client";

import { motion } from "framer-motion";

interface headerTitleProps {
    title: string
}

const AnimatedHeader=({title}:headerTitleProps)=> {
  return (
    <motion.h1
      className="text-3xl font-bold text-center mt-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h1>
  );
}


export default AnimatedHeader