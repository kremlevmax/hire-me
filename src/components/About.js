import React from "react";
import photo from "../images/photo.png";
import "./About.css";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome//free-brands-svg-icons";
import { faMobileRetro, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import resume from "../files/Max_Kremlev_Resume_Frontend_Developer.pdf";

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
              <p className='about__main-text'>
                I'm a pro-active and detail-oriented developer and currently
                seeking an entry-level position to utilize skills in coding,
                troubleshooting, acquiring new skills, and assisting in
                delivering effective solutions.
              </p>
              <p>
                <span className='about__text_bold'>Location: </span>Seattle, WA.
                Open to relocation
              </p>
              <p>
                <span className='about__text_bold'>Job Model: </span>On-site,
                Remote or Hybrid
              </p>
              <p>
                <span className='about__text_bold'>Languages: </span>HTML, CSS,
                JavaScript, TypeScript
              </p>
              <p>
                <span className='about__text_bold'>
                  Frameworks and State/Data Management:{" "}
                </span>
                React, React Router, NextJS, Redux Toolkit, Firebase, Axios,
                Apollo Client, GraphQL, Strapi CMS, MongoDB, Formspree
              </p>
              <p>
                <span className='about__text_bold'>UI Libraries: </span>
                Sass, CSS Modules, FramerJS, Material UI, Boxicons, Font Awesome
              </p>
              <p>
                <span className='about__text_bold'>Tools: </span>
                Jira, Cypress, Jest, Git, webpack
              </p>
            </div>
            <div className='about__download-button'>
              <a
                href={resume}
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
                  Find me here:
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
