import React from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import screenshot from "../images/screenshot.png";
// import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AnimatedPage from "./AnimatedPage";

function Portfolio() {
  const projectCards = [
    {
      screenshot: screenshot,
      name: "Project Name 1",
      tools: ["React", "HTML", "CSS"],
      description:
        "Project 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      screenshot: screenshot,
      name: "Project Name 2",
      tools: ["React", "HTML", "CSS"],
      description:
        "Project 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      screenshot: screenshot,
      name: "Project Name 3",
      tools: ["React", "HTML", "CSS"],
      description:
        "Project 3 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const cards = projectCards.map((card, index) => (
    <ProjectCard
      key={index}
      screenshot={card.screenshot}
      name={card.name}
      tools={card.tools}
      description={card.description}
    />
  ));

  return (
    <AnimatedPage>
      <section className='portfolio'>
        <div className='portfolio__top'>
          <div className='portfolio__header-container'>
            <span className='portfolio__header'>Portfolio</span>
          </div>
        </div>
        <div className='portfolio__container'>
          <Carousel
            infiniteLoop
            // autoPlay
            showThumbs={false}
            interval={5000}
            showStatus={false}
            swipeable
          >
            {cards}
          </Carousel>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Portfolio;

// {
//   /* <Slider {...sliderSettings}>
//           {projectCards.map((card, index) => (
//             <ProjectCard
//               key={card.name}
//               screenshot={card.screenshot}
//               name={card.name}
//               tools={card.tools}
//               description={card.description}
//             />
//           ))}
//         </Slider> */
// }
