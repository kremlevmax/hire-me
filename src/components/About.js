import React from "react";
import "./About.css";
import Poster from "./Poster";
import AbooutInfo from "./AboutInfo";
import AboutResume from "./AboutResume";

function About() {
  return (
    <main className='about'>
      <div className='about__container'>
        <div className='about__poster-and-resume'>
          <Poster />
          <AboutResume />
        </div>
        <AbooutInfo />
      </div>
    </main>
  );
}

export default About;
