import React from "react";
import "./Videosection.css";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section id="home">
      <div className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src="fremlæggelse.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="overlay-text">
          <h1>Artilon Hyseni</h1>
          <p>Your go-to solution for innovative webdesign</p>{" "}
          {/* Add an introduction text */}
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>{" "}
          {/* Call to action button */}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
