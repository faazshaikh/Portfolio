import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.description && (
        <p className="work__description">{item.description}</p>
      )}
      {item.technologies && item.technologies.length > 0 && (
        <div className="work__technologies">
          {item.technologies.map((tech, index) => (
            <span key={index} className="work__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      <a href={item.github || "https://github.com/faazshaikh"} className="work__button" target="_blank" rel="noopener noreferrer">
        GitHub
        <i className="bx bxl-github work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
