import React, { useState } from 'react';
import "./style.css"

const Accordions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="accordian-card">
      <div className="header" onClick={handleClick}>
        <div>{title}</div>
        <p>{isActive ? "-" : "+"}</p>
      </div>
      {/* ✅ yahan active class add ki */}
      <div className={`content ${isActive ? "active" : ""}`}>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Accordions;
