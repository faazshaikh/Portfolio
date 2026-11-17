import React, { useState } from "react";
import "./qualification.css";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    place: "McMaster University",
    location: "Hamilton, ON",
    dates: "Sep 2024 – May 2028",
    tags: ["GPA 3.7 / 4.0"],
    icon: "uil-graduation-cap",
  },
];

const experience = [
  {
    title: "Data Engineering Co-op",
    place: "Sanofi",
    location: "North York, ON",
    dates: "May 2026 – Present",
    current: true,
    icon: "uil-database",
  },
  {
    title: "Software Developer Intern",
    place: "The Blue Marble Academy",
    location: "Remote",
    dates: "Nov 2025 – Jan 2026",
    icon: "uil-brackets-curly",
  },
];

const Card = ({ item }) => (
  <article className="qualification__card">
    <div className="qualification__card-icon">
      <i className={`uil ${item.icon}`}></i>
    </div>

    <h3 className="qualification__title">{item.title}</h3>
    <span className="qualification__subtitle">
      {item.place} <span className="qualification__dot">•</span> {item.location}
    </span>

    <div className="qualification__calender">
      <i className="uil uil-calendar-alt"></i> {item.dates}
    </div>

    {item.current && (
      <span className="qualification__badge">
        <span className="qualification__badge-dot"></span>
        Currently working here
      </span>
    )}

    {item.tags && (
      <div className="qualification__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="qualification__tag">
            {tag}
          </span>
        ))}
      </div>
    )}
  </article>
);

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__grid qualification__grid--single">
              {education.map((item) => (
                <Card item={item} key={item.title} />
              ))}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__grid">
              {experience.map((item) => (
                <Card item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
