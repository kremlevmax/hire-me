import React from "react";
import resume from "../files/Max_Kremlev_Resume_Frontend_Developer.pdf";

import "./AboutResume.css";
import { motion } from "framer-motion";

const AboutResume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='about__download-resume'
    >
      <a
        href={resume}
        target='_blank'
        rel='noreferrer'
        className='about__download-button-link'
      >
        <div className='about__download-button-inside'>
          <span>Download Resume</span>
        </div>
      </a>
    </motion.div>
  );
};

export default AboutResume;
