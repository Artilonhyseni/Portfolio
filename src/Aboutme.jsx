import React from "react";

import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section id="about">
      <section className="about-me">
        <div className="container">
          <h3 className="section-title">About me</h3>
          <h1 className="name-title">Artilon Hyseni</h1>
          <p className="description">
            My name is Artilon Hyseni, i’m a 23-year old front-end developer,
            and digital designer living in Aarhus, Denmark. I thrive on creating
            visually engaging and user-friendly experiences.
          </p>
          <p className="description">
            I love solving complex problems and bringing creative ideas to life,
            so if you need a team-player with diverse competencies, then this is
            the right place for you!
          </p>

          <p className="description">Check my recent work below!</p>

          <button className="recent-work-btn">
            <a href="#work" className="recent-work-btn">
              Recent work
            </a>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Aboutme;
