import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Full-Stack Development",
      icon: "uil uil-web-grid",
      description: "Building complete web applications with modern frameworks and technologies.",
      items: [
        "React-based frontend development with responsive UI/UX.",
        "RESTful API development with FastAPI and Node.js.",
        "Database design and management with MySQL, PostgreSQL, and SQLite.",
        "User authentication and secure data handling.",
        "Real-time data synchronization and state management.",
      ],
    },
    {
      id: 2,
      title: "AI Integration & Automation",
      icon: "uil uil-brain",
      description: "Leveraging AI and cloud services to build intelligent, automated solutions.",
      items: [
        "Azure OpenAI integration for content generation.",
        "Speech recognition and voice input validation.",
        "Automated workflows and pipeline development.",
        "Azure Cosmos DB for scalable data management.",
        "Algorithm implementation for recommendation systems.",
      ],
    },
    {
      id: 3,
      title: "Backend Architecture",
      icon: "uil uil-server-network",
      description: "Designing and implementing robust backend systems with scalable architecture.",
      items: [
        "RESTful API design and implementation.",
        "Content management systems with hierarchical structures.",
        "Enterprise authentication and authorization.",
        "Data validation and security best practices.",
        "Performance optimization and database indexing.",
      ],
    },
  ];

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const currentService = servicesData.find((service) => service.id === activeModal);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__content">
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title.split(' ').slice(0, 2).join(' ')}<br />{service.title.split(' ').slice(2).join(' ')}</h3>
            </div>
            <span className="services__button" onClick={() => openModal(service.id)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {/* Modal as separate entity */}
      {activeModal && (
        <div className="services__modal active-modal" onClick={closeModal}>
          <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
            {currentService && (
              <>
                <h3 className="services__modal-title">{currentService.title}</h3>
                <p className="services__modal-description">{currentService.description}</p>
                <ul className="services__modal-services grid">
                  {currentService.items.map((item, index) => (
                    <li key={index} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
