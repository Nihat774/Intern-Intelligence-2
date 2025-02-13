"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ScrollAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="p-6  text-blue-600 rounded-md"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
