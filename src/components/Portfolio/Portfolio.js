import React, { useState } from "react";

import { projectCards } from "./data.js";
import "./Portfolio.css";
import ProjectDescription from "./ProjectDescription.js";
import ProjectNumber from "./ProjectNumber.js";
import ProjectScreenshot from "./ProjectScreenshot.js";
import ProjectStack from "./ProjectStack.js";
import { motion } from "framer-motion";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const swipeBack = () => {
    if (index === 0) {
      setIndex(projectCards.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const swipeForward = () => {
    if (index === projectCards.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const number =
    index < 0 ? (index + 1).toString() : "0" + (index + 1).toString();

  return (
    <motion.section
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className='portfolio'
    >
      <div className='portfolio__container'>
        <ProjectStack stack={projectCards[index].tools} />
        <ProjectScreenshot
          screenshot={projectCards[index].screenshot}
          title={projectCards[index].name}
          description={projectCards[index].description}
          swipeBack={swipeBack}
          swipeForward={swipeForward}
        />
        <ProjectNumber number={number} />
        <ProjectDescription
          description={projectCards[index].description}
          code={projectCards[index].source}
          live={projectCards[index].online}
        />
      </div>
    </motion.section>
  );
}

export default Portfolio;
