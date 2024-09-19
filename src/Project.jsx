import { useState } from "react";
import "./Project.css";

const ProjectSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    if (project === "artismedia") {
      window.location.href = "https://www.instagram.com/artismediia/";
    } else {
      setExpandedProject(expandedProject === project ? null : project);
      setShowModal(!showModal);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setExpandedProject(null);
  };

  return (
    <section id="work">
      <div className="project-section">
        <h2 className="projects-title">My Recent Work</h2>
        <p className="projects-description">
          My projects are constantly evolving over time. New additions will
          regularly be made as I continue to grow and expand my work.
          <br />
          <br />
          One of my featured ongoing projects is <strong>Artismedia</strong>, my
          personal brand where I design for artists. Its an evolving project
          where I explore creative designs for artists in need of branding,
          media, and digital designs. Check it out!
        </p>

        <div className="projects-grid">
          {}
          <div
            className={`projects-item ${
              expandedProject === "webdesign" ? "expanded" : ""
            }`}
          >
            <div className="project-content">
              <div className="project-item">
                <h3 onClick={() => handleProjectClick("webdesign")}>
                  Webdesign
                </h3>
              </div>
            </div>
          </div>

          {}
          <div
            className="projects-item"
            onClick={() => handleProjectClick("artismedia")}
          >
            <div className="project-content">
              <div className="project-item">
                <h3>Artismedia</h3>
              </div>
            </div>
          </div>
        </div>

        {}
        {showModal && expandedProject === "webdesign" && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <img
                src="Dania Games.png"
                alt="Webdesign"
                className="modal-image"
              />
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
