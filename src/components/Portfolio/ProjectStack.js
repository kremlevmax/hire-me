import React from "react";
import "./ProjectStack.css";

const ProjectStack = ({ stack }) => {
  const stackList = stack.map((item) => (
    <li key={Math.random()} className='project-stack__list-item'>
      {item}
    </li>
  ));
  return (
    <div className='project-stack'>
      <div className='project-stack__container'>
        <h2>Stack:</h2>
        <ul className='project-stack__list'>{stackList}</ul>
      </div>
    </div>
  );
};

export default ProjectStack;
