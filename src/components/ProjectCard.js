import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ screenshot, name, tools, description, source, online }) {
  return (
    <section className='project-card'>
      <div className='project-card__container'>
        <picture className='project-card__screenshot-container'>
          <img
            className='project-card__screenshot'
            src={screenshot}
            alt={name}
          />
        </picture>
        <div className='project-card__text-container'>
          <div className='project-card__title-container'>
            <span className='project-card__title'>{name}</span>
          </div>
          <div className='project-card__separation-line' />
          <div className='project-card__tools-container'>
            <span className='project-card__tools'>Stack: </span>
            {tools.map((tool, index) => {
              if (index === tools.length - 1) {
                return (
                  <span className='project-card__tool' key={index}>
                    {tool}
                  </span>
                );
              } else {
                return (
                  <span className='project-card__tool' key={index}>
                    {tool},{" "}
                  </span>
                );
              }
            })}
          </div>

          <div className='project-card___description-container'>
            <span className='project-card___description'>{description}</span>
          </div>
          <div className='project-card__separation-line' />

          <div className='project-cars__links-container'>
            <a
              href={source}
              target='_blank'
              rel='noreferrer'
              className='project-cars__link'
            >
              <FontAwesomeIcon icon={faGithub} /> Source
            </a>

            <a
              href={online}
              target='_blank'
              rel='noreferrer'
              className='project-cars__link'
            >
              <FontAwesomeIcon icon={faEarthAmerica} /> Deploy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
