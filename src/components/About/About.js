import React from "react";
import "./About.css";
import Poster from "./AboutPoster";
import AbooutInfo from "./AboutInfo";
import AboutResume from "./AboutResume";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className='about'
    >
      <div className='about__container'>
        <div className='about__poster-and-resume'>
          <Poster />
          <AboutResume />
        </div>
        <AbooutInfo />
      </div>
    </motion.main>
  );
}

export default About;
