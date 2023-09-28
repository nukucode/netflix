import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import './Label.css';

function Label({title}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="row-label"
    >
      <h3>
        {title} <span>{isHover && "Explore All"}</span>
      </h3>
      <ChevronRightIcon className="icon" />
    </div>
  );
}



export default Label