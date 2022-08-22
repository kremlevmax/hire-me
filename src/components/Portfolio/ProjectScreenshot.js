import React from "react";
import "./ProjectScreenshot.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectScreenshot = ({
  title,
  screenshot,
  description,
  swipeBack,
  swipeForward,
}) => {
  return (
    <div className='project-screenshot'>
      <div key={Math.random()} className='project-screenshot__inlay'>
        <div className='project-screenshot__inlay-text'>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
        <div className='project-screenshot__inlay-pic'>
          <img src={screenshot} alt='Project Screenshot' />
        </div>
      </div>

      <div className='project-screenshot__arrow-back' onClick={swipeBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className='project-screenshot__arrow-forward' onClick={swipeForward}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default ProjectScreenshot;
