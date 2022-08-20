import React from "react";
import resume from "../files/Max_Kremlev_Resume_Frontend_Developer.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome//free-brands-svg-icons";
import { faMobileRetro, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

{
  /* <div className='about__social-links-container'>
<div className='about__social-links-description-container'>
  <span className='about__social-links-description'>Find me here:</span>
</div>
<div className='about__social-links'>
  <div className='about__social-link'>
    <a
      className='about__social-link-a'
      href='https://github.com/kremlevmax'
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
  <div className='about__social-link'>
    <a
      className='about__social-link-a'
      href='https://www.linkedin.com/in/max-kremlev/'
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
  <div className='about__social-link'>
    <a className='about__social-link-a' href='tel:+14253754075'>
      <FontAwesomeIcon icon={faMobileRetro} />
    </a>
  </div>
  <div className='about__social-link'>
    <a
      className='about__social-link-a'
      href='mailto:kremlevmax.webdev@icloud.com'
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
</div>
</div> */
}
