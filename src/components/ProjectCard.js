import React from "react";
import "./ProjectCard.css";

function ProjectCard({ screenshot, name, tools, description }) {
  return (
    <section className='project-card'>
      <picture className='project-card__screenshot-container'>
        <img className='project-card__screenshot' src={screenshot} alt={name} />
      </picture>
      <div className='project-card__text-container'>
        <div className='project-card__tools-container'>
          <span className='project-card__tools'>Tools: </span>
          {tools.map((tool, index) => {
            if (index === tools.length - 1) {
              return <span className='project-card__tool'>{tool}</span>;
            } else {
              return <span className='project-card__tool'>{tool}, </span>;
            }
          })}
        </div>
        <div className='project-card___description-container'>
          <span className='project-card___description'>{description}</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
