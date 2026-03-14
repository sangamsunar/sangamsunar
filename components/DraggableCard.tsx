"use client";
import { motion } from "framer-motion";
import React from "react";

export const DraggableCard = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        className="p-3 px-2 bg-amber-50 w-[100px] rounded-2xl text-black text-center"
        animate={{
          scale: [1, 1.1, 1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          // repeatDelay: ,
        }}
      >
        Drag Me
      </motion.div>
    </div>
  );
};
