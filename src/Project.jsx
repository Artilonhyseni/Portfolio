import React, { useState } from "react";
import "./Project.css";

const ProjectSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (project === "artismedia") {
      // Redirect to Instagram profile
      window.location.href = "https://www.instagram.com/artismediia/"; // Replace with your actual Instagram profile URL
    } else {
      // Toggle expansion for other projects
      setExpandedProject(expandedProject === project ? null : project);
    }
  };

  return (
    <section id="work">
      <div className="project-section">
        <h2 className="projects-title">My recent work</h2>
        <div className="projects-grid">
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
                {/* Conditionally render the image for Webdesign */}
                {expandedProject === "webdesign" && (
                  <div className="project-image">
                    <img src="Dania Games.png" alt="Webdesign" />
                    {/* Replace with the actual path to your image */}
                  </div>
                )}
              </div>
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default ProjectSection;
