import React from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import screenshot from "../images/screenshot.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const projectCards = [
    {
      screenshot: screenshot,
      name: "Project Name 1",
      tools: ["React", "HTML", "CSS"],
      description: "Project 1 Description",
    },
    {
      screenshot: screenshot,
      name: "Project Name 2",
      tools: ["React", "HTML", "CSS"],
      description: "Project 2 Description",
    },
    {
      screenshot: screenshot,
      name: "Project Name 3",
      tools: ["React", "HTML", "CSS"],
      description: "Project 3 Description",
    },
  ];

  const sliderSettings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
  };

  return (
    <section className='portfolio'>
      <div className='portfolio__header-container'>
        <span className='portfolio__header'>Portfolio</span>
      </div>
      <div className='portfolio__container'>
        <Slider {...sliderSettings}>
          {projectCards.map((card, index) => (
            <ProjectCard
              key={card.name}
              screenshot={card.screenshot}
              name={card.name}
              tools={card.tools}
              description={card.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
