import React from "react";
import ProjectCard from "./ProjectCard";
import visitAfrica from "../images/visitAfrica.png";
import adoptGoodBoy from "../images/adoptGoodBoy.png";
import todoList from "../images/todoList.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Portfolio.css";

import { Carousel } from "react-responsive-carousel";
import AnimatedPage from "./AnimatedPage";

function Portfolio() {
  const projectCards = [
    {
      screenshot: todoList,
      name: "ToDo app",
      tools: [
        "React",
        "HTML",
        "CSS",
        "React Router",
        "Firebase Authentication",
        "Cloud Firestore",
      ],
      description:
        "Responsive landing page layout with a burger menu and a video background built with HTML, Sass and vanilla JavaScript",
      source: "https://github.com/kremlevmax/todo-list",
      online: "https://kremlevmax.github.io/todo-list/",
    },
    {
      screenshot: visitAfrica,
      name: "Visit Africa",
      tools: ["HTML", "JavaScript", "Sass", "Boxicons"],
      description:
        "Responsive landing page layout with a burger menu and a video background built with HTML, Sass and vanilla JavaScript",
      source: "https://github.com/kremlevmax/visit-africa",
      online: "https://kremlevmax.github.io/visit-africa/",
    },
    {
      screenshot: adoptGoodBoy,
      name: "Adopt a Good Boy",
      tools: ["HTML", "Sass", "JavaScript", "Formspree", "Swiper.js"],
      description:
        "Responsive landing page layout  built with HTML, Sass and vanilla JavaScript",
      source: "https://github.com/kremlevmax/sass-project",
      online: "https://kremlevmax.github.io/sass-project/",
    },
    {
      screenshot: visitAfrica,
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
      source={card.source}
      online={card.online}
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
