import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import "./NavBar.css";
import VideoSection from "./Videosection";
import Aboutme from "./Aboutme";
import Competencies from "./Competencies";

function App() {
  return (
    <>
      <Navbar />
      <VideoSection />
      <Aboutme />
      <Competencies />
    </>
  );
}

export default App;
