import React from "react";
import resume from "../../files/Max_Kremlev_Resume_Frontend_Developer.pdf";

import "./AboutResume.css";

const AboutResume = () => {
  return (
    <div className='about__download-resume'>
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
    </div>
  );
};

export default AboutResume;
