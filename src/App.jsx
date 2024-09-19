import "./App.css";

import Navbar from "./Navbar";
import "./Navbar.css";
import VideoSection from "./Videosection";
import Aboutme from "./Aboutme";
import Competencies from "./Competencies";
import ProjectSection from "./Project";
import ContactForm from "./ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <VideoSection />
      <Aboutme />
      <Competencies />
      <ProjectSection />
      <ContactForm />
    </>
  );
}

export default App;
