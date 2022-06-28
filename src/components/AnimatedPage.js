import React from "react";
import { motion } from "framer-motion";
import "./AnimatedPage.css";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className='animated-page'
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
