import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome//free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./AboutSocials.css";

const AboutSocials = () => {
  return (
    <div className='social-links-container'>
      <div className='social-links__description-container'>
        <span className='social-links__description'>Find me here:</span>
      </div>
      <div className='social-links'>
        <div className='social-link'>
          <a
            className='social-link__a'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/kremlevmax'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className='social-link'>
          <a
            className='social-link__a'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/max-kremlev/'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='social-link'>
          <a className='social-link__a' href='tel:+14253754075'>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <div className='social-link'>
          <a
            id='email'
            className='social-link__a'
            href='mailto:kremlevmax.webdev@icloud.com'
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSocials;
