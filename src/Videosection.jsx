import "./Videosection.css";

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
          <p>Your go-to solution for innovative webdesign</p> {}
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>{" "}
          {}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
