import React from "react";
import "./Competencies.css";

const competenciesData = [
  {
    id: 1,
    icon: "Visual studios.png",
    description:
      "My main software for coding is Visual Studio, and i am very skilled in the software.",
  },
  {
    id: 2,
    icon: "After Effects.png",
    description: "I am very skilled in Motion Graphics, and Video Editing.",
  },
  {
    id: 3,
    icon: "React.png",
    description:
      "I just learned React.js and have an understanding of how to use it.",
  },
  {
    id: 4,
    icon: "javascript.png",
    description: "I have an understanding of how to use JS in my projects",
  },
  {
    id: 5,
    icon: "Figma.png",
    description:
      "I am very skilled in Figma and have a wide understanding of the features",
  },
  {
    id: 6,
    icon: "Lightroom.png",
    description:
      "I am very skilled in photo editing and know how to work with color correction and contrast.",
  },
  {
    id: 7,
    icon: "Html.png",
    description:
      "I am very skilled in HTML and know how to build a website with the language.",
  },
  {
    id: 8,
    icon: "css.png",
    description:
      "I am very skilled in CSS and know how to use it to style a website",
  },
  {
    id: 9,
    icon: "Illustrator.png",
    description:
      "I am skilled in Illustrator and have a wide understanding of icons and logo design.",
  },
  {
    id: 10,
    icon: "Indesign.png",
    description:
      "I am skilled in InDesign and have a wide understanding of its features",
  },
];

const Competencies = () => {
  return (
    <div className="competencies-section">
      <h2 className="competencies-title">Competencies</h2>
      <p className="competencies-intro">
        I'm a team player who thrives under any circumstances and delivers
        high-quality work on time. My goal is to create the best solutions for
        clients while balancing clean design with user-friendly experiences.
      </p>
      <div className="competencies-grid">
        {competenciesData.map((competency) => (
          <div className="competency-item" key={competency.id}>
            <img
              src={`/icons/$}{competency.icon}`}
              alt={competency.description}
              className="competency-icon"
            />
            <p className="competency-description">{competency.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competencies;
