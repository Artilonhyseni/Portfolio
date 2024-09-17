import React from "react";
import { motion } from "framer-motion";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section id="about">
      <section className="about-me">
        <div className="container">
          <motion.h3
            className="section-title"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About me
          </motion.h3>
          <motion.h1
            className="name-title"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Artilon Hyseni
          </motion.h1>
          <motion.p
            className="description"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My name is Artilon Hyseni, i’m a 23-year old front-end developer,
            and digital designer living in Aarhus, Denmark. I thrive on creating
            visually engaging and user-friendly experiences.
          </motion.p>
          <motion.p
            className="description"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I love solving complex problems and bringing creative ideas to life,
            so if you need a team-player with diverse competencies, then this is
            the right place for you!
          </motion.p>

          <motion.p
            className="description"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Check my recent work below!
          </motion.p>

          <motion.button
            className="recent-work-btn"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#work" className="recent-work-btn">
              Recent work
            </a>
          </motion.button>
        </div>
      </section>
    </section>
  );
};

export default Aboutme;
