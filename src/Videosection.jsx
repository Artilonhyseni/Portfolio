import React from "react";
import "./Videosection.css";

const VideoSection = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay muted loop>
        <source src="fremlæggelse.mp4" type="video/mp4" />
      </video>
      <div className="overlay-text">
        <h1>Tekst</h1>
      </div>
    </div>
  );
};

export default VideoSection;
