import React from "react";
import photo from "../images/photo.png";
import "./About.css";
import AnimatedPage from "./AnimatedPage";

function About() {
  return (
    <AnimatedPage>
      <main className='about'>
        <div className='about__about-me-container'>
          <span className='about__about-me'>About Me</span>
        </div>

        <div className='about__container'>
          <picture className='about__image-container'>
            <img className='about__image' src={photo} alt='Max Kremlev' />
          </picture>
          <div className='about__text-container'>
            <div className='about__text-header-container'>
              <h1 className='about__text-header'>
                I'm Max Kremlev and Frontend Developer
              </h1>
            </div>
            <div className='about__main-text-container'>
              <span className='about__main-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis urna cursus eget nunc scelerisque viverra mauris.
                Massa tincidunt dui ut ornare lectus sit amet est. Platea
                dictumst vestibulum rhoncus est. Semper auctor neque vitae
                tempus quam. Eu augue ut lectus arcu bibendum. Fames ac turpis
                egestas maecenas pharetra convallis posuere morbi. Eget felis
                eget nunc lobortis mattis aliquam faucibus. Pharetra sit amet
                aliquam id. Sed tempus urna et pharetra pharetra massa. Non
                curabitur gravida arcu ac tortor dignissim convallis aenean et.
                Auctor urna nunc id cursus metus aliquam eleifend mi in. Libero
                justo laoreet sit amet cursus sit amet dictum. Urna condimentum
                mattis pellentesque id nibh tortor id aliquet.
              </span>
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
