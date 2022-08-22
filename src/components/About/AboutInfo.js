import React from "react";
import "./AboutInfo.css";
import AboutSocials from "./AboutSocials";

const AbooutInfo = () => {
  return (
    <section className='about__text'>
      <div className='about__text-container'>
        <div className='about__text-header-container'>
          <h1 className='about__text-header'>
            Hi, I am Max, Frontend Developer
          </h1>
        </div>
        <div className='about__main-text-container'>
          <p className='about__main-text'>
            I'm a pro-active and detail-oriented developer and currently seeking
            an entry-level position to utilize skills in coding,
            troubleshooting, acquiring new skills, and assisting in delivering
            effective solutions.
          </p>
          <p>
            <span className='about__text_bold'>Location: </span>Seattle, WA.
            Open to relocation
          </p>
          <p>
            <span className='about__text_bold'>Job Model: </span>On-site, Remote
            or Hybrid
          </p>
          <p>
            <span className='about__text_bold'>Languages: </span>HTML, CSS,
            JavaScript, TypeScript
          </p>
          <p>
            <span className='about__text_bold'>
              Frameworks and State/Data Management:{" "}
            </span>
            React, React Router, NextJS, Redux Toolkit, Firebase, Axios, Apollo
            Client, GraphQL, Strapi CMS, MongoDB, Formspree
          </p>
          <p>
            <span className='about__text_bold'>UI Libraries: </span>
            Sass, CSS Modules, FramerJS, Material UI, Boxicons, Font Awesome,
            Styled Components
          </p>
          <p>
            <span className='about__text_bold'>Tools: </span>
            Jira, Cypress, Jest, Git, webpack
          </p>
        </div>
        <AboutSocials />
      </div>
    </section>
  );
};

export default AbooutInfo;
