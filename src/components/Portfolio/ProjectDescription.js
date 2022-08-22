import React from "react";
import "./ProjectDescription.css";

const ProjectDescription = ({ description, live, code }) => {
  return (
    <div className='project-description'>
      <div className='project-description__desc'>
        <h3>Description:</h3>
        <div key={Math.random()} className='project-description__desc-text'>
          <span>{description}</span>
          <div className='project-description__links'>
            <a
              href={live}
              className='project-description__link'
              target='_blank'
              rel='noreferrer'
            >
              Live
            </a>
            <a
              href={code}
              className='project-description__link'
              target='_blank'
              rel='noreferrer'
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
