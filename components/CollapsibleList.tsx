"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useState } from "react";

export const CollapsibleList = () => {
  const [expanded, setExpanded] = useState(null);
  const items = [1,2,3];
return(
  <>
  <div className="list"></div>
  </>
)
  return <div>CollapsibleList</div>;
};
