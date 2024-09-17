import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
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
    </nav>
  );
};

export default Navbar;
