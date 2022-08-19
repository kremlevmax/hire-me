import React from "react";
import "./Poster.css";
import me from "../images/me.webp";
import { motion } from "framer-motion";

const Poster = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className='poster__img'
        src={me}
        alt='Me'
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className='poster__frontend'
      >
        Frontend
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className='poster__css'
      >
        CSS
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className='poster__react'
      >
        React
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.4, duration: 1 }}
        className='poster__html'
      >
        HTML
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.8, duration: 1 }}
        className='poster__nextjs'
      >
        NextJS
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.6, duration: 1 }}
        className='poster__sass'
      >
        SASS
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className='poster__redux'
      >
        Redux
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className='poster__graphql'
      >
        GraphQL
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className='poster__git'
      >
        Git
      </motion.p>
    </motion.section>
  );
};

export default Poster;
