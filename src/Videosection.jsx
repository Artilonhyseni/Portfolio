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
        <div className="overlay-text">
          <h1>Artilon Hyseni</h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
