import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-container">
        <img src={item.image} alt={item.title} className="work__img" />
        {item.hackathonWinner && (
          <span className="work__badge">🏆 Hackathon Winner</span>
        )}
      </div>
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
      <div className="work__buttons">
        {item.github && (
          <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
            GitHub
            <i className="bx bxl-github work__button-icon"></i>
          </a>
        )}
        {item.devpost && (
          <a href={item.devpost} className="work__button work__button--devpost" target="_blank" rel="noopener noreferrer">
            Devpost
            <i className="bx bx-link-external work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
