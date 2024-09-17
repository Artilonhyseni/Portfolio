import React from "react";
import { motion } from "framer-motion";
import "./Competencies.css";

const competenciesData = [
  {
    id: 1,
    icon: "visual-studio.png",
    description:
      "My main software for coding is Visual Studio, and I am very skilled in the software.",
  },
  {
    id: 2,
    icon: "after-effects.png",
    description: "I am very skilled in Motion Graphics, and Video Editing.",
  },
  {
    id: 3,
    icon: "react.png",
    description:
      "I just learned React.js and have an understanding of how to use it.",
  },
  {
    id: 4,
    icon: "javascript.png",
    description: "I have an understanding of how to use JS in my projects.",
  },
  {
    id: 5,
    icon: "figma.png",
    description:
      "I am very skilled in Figma and have a wide understanding of the features.",
  },
  {
    id: 6,
    icon: "lightroom.png",
    description:
      "I am very skilled in photo editing and know how to work with color correction and contrast.",
  },
  {
    id: 7,
    icon: "html.png",
    description:
      "I am very skilled in HTML and know how to build a website with the language.",
  },
  {
    id: 8,
    icon: "css.png",
    description:
      "I am very skilled in CSS and know how to use it to style a website.",
  },
  {
    id: 9,
    icon: "illustrator.png",
    description:
      "I am skilled in Illustrator and have a wide understanding of icons and logo design.",
  },
  {
    id: 10,
    icon: "indesign.png",
    description:
      "I am skilled in InDesign and have a wide understanding of its features.",
  },
];

const Competencies = () => {
  return (
    <section id="competencies">
      <div className="competencies-section">
        <h2 className="competencies-title">Competencies</h2>
        <p className="competencies-intro">
          I'm a team player who thrives under any circumstances and delivers
          high-quality work on time. My goal is to create the best solutions for
          clients while balancing clean design with user-friendly experiences.
        </p>
        <div className="competencies-grid">
          {competenciesData.map((competency) => (
            <motion.div
              className="competency-item"
              key={competency.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: competency.id * 0.1 }}
            >
              <img
                src={`/icons/${competency.icon}`}
                alt={competency.description}
                className="competency-icon"
              />
              <p className="competency-description">{competency.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
