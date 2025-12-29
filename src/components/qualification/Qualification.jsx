import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
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
            onClick={() => toggleTab(2)}
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
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Science in Computer Science</h3>
                <span className="qualification__subtitle">
                  McMaster University - Hamilton, ON
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep. 2024 – May 2028
                </div>
                <div className="qualification__description">
                  GPA: 10.2/12 | Dean's Honour List | Award of Excellence
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer Intern</h3>
                <span className="qualification__subtitle">
                  The Blue Marble Academy - Remote
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov 2025 – Present
                </div>
                <div className="qualification__description">
                  • Engineered AI quiz generation pipeline with 75% reduction in creation time<br/>
                  • Built content management system for 7 content types with 3-level hierarchy<br/>
                  • Developed 43 REST API endpoints with FastAPI, React, and Azure Cosmos DB
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Class Instructor / Supervisor</h3>
                <span className="qualification__subtitle">
                  Kumon Learning Centre
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Previous Experience
                </div>
                <div className="qualification__description">
                  • Mentored 300+ students across Grades 1–12 in math and reading<br/>
                  • Led classrooms of 40+ concurrent learners, marking 1,000+ assignments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
