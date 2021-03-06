import React from "react";
import photo from "../images/photo.png";
import "./About.css";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome//free-brands-svg-icons";
import { faMobileRetro, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <AnimatedPage>
      <main className='about'>
        <div className='about__top-part'>
          <div className='about__about-me-container'>
            <span className='about__about-me'>About Me</span>
          </div>
        </div>
        <div className='about__container'>
          <picture className='about__image-container'>
            <img className='about__image' src={photo} alt='Max Kremlev' />
          </picture>
          <div className='about__text-container'>
            <div className='about__text-header-container'>
              <h1 className='about__text-header'>
                Hi, I am Max, Frontend Developer
              </h1>
            </div>
            <div className='about__main-text-container'>
              <span className='about__main-text'>
                Pro-active and detail-oriented Frontend Developer seeking an
                entry-level position to utilize skills in coding,
                troubleshooting, acquiring new skills, and assisting in
                delivering effective solutions within a regulated time frame.
              </span>
            </div>
            <div className='about__download-button'>
              <a
                href='https://drive.google.com/file/d/1JGiLWFoyyGsAzl697YawAXiQNzGQT5Mk/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='about__download-button-link'
                download
              >
                Download Resume
              </a>
            </div>

            <div className='about__social-links-container'>
              <div className='about__social-links-description-container'>
                <span className='about__social-links-description'>
                  You can find me here:
                </span>
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
                  <a
                    className='about__social-link-a'
                    href='https://www.instagram.com/krmlvmx/'
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} />
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
            </div>
          </div>

          <div className='about__circle' />
          <div className='about__triangle-container'>
            <div className='about__triangle'>
              <div className='about__inner-triangle' />
            </div>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default About;
