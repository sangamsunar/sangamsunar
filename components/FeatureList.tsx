"use client";
import { delay, motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FeatureList = () => {
  const features = ["fasst", "declarative", "powerful", "fun"];
  return (
    <>
      <ul>
        <motion.li variants={container} initial="hidden" animate="visible">
          {features.map((feature) => (
            <motion.li key={feature} variants={item}>
              {feature}
            </motion.li>
          ))}
        </motion.li>
      </ul>
    </>
  );
};
