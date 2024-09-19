import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Assuming you'll have CSS to handle the layout

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // This will check if the screen size is small enough for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the value (768px) based on your mobile breakpoint
    };

    // Run on initial load
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile ? (
          <button
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        ) : null}
        <ul className={`navbar-list ${isMenuOpen || !isMobile ? "open" : ""}`}>
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About me</a>
          </li>
          <li className="navbar-item">
            <a href="#work">My work</a>
          </li>
          <li className="navbar-item">
            <a href="#competencies">Competencies</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
