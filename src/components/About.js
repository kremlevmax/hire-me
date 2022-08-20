import React from "react";
import "./About.css";
import AnimatedPage from "./AnimatedPage";
import Poster from "./Poster";
import AbooutInfo from "./AboutInfo";
import AboutResume from "./AboutResume";

function About() {
  return (
    <AnimatedPage>
      <main className='about'>
        <div className='about__container'>
          <div className='about__poster-and-resume'>
            <Poster />
            <AboutResume />
          </div>
          <AbooutInfo />
        </div>
      </main>
    </AnimatedPage>
  );
}

export default About;
