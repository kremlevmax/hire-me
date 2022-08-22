import React, { useState } from "react";
import { useEffect } from "react";
import "./ProjectNumber.css";

const ProjectNumber = ({ number }) => {
  const [index, setIndex] = useState(number);

  useEffect(() => {
    setIndex(number);
  }, [number]);

  return (
    <div className='project-number'>
      <span key={index} className='project-number__span'>
        {index}
      </span>
    </div>
  );
};

export default ProjectNumber;
