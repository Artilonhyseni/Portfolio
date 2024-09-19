import React from "react";
import "./Webdesign.css";

const Webdesign = () => {
  return (
    <div className="webdesign-page">
      <header className="header">
        <h1>Web Design Project</h1>
      </header>

      <section className="main-content">
        <h2>Webdesign for Dania Games</h2>
        <p>
          During my second semester, we completed a project that involved a
          complete rebrand of the landingpage for Dania Games.
        </p>
        <p>
          Our product owner requested a more game-themed design for their
          webpage, and this was the final result.
          <p />
          The final design was approved, and the product owner was very
          satisfied with the outcome.
        </p>
        <img
          src="/public/Dania Games.png"
          alt="Dania Games Web Design"
          className="web-design-image"
        />
      </section>
    </div>
  );
};

export default Webdesign;
