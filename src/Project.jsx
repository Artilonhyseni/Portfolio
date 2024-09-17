import React from "react";
import "./Project.css";

const ProjectSection = () => {
  return (
    <section id="work">
      <div className="project-section">
        <section className="project-section">
          <h2 className="projects-title">My recent work</h2>
          <div className="projects-grid">
            <div className="projects-item">
              <div className="project-content">
                <div className="project-item">
                  <h3>Webdesign</h3>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-content">
                <h3>Artismedia</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectSection;
