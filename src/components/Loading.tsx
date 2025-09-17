"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading=() =>{
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <motion.div
        className="w-14 h-14 rounded-full border-4 border-t-4 border-blue-400 border-t-transparent"
        style={{ borderTopColor: "transparent" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="mt-3 text-sm text-gray-600"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}


export default Loading