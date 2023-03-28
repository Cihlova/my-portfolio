import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="nav content">
      <Logo />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#about">My journey</a>
        </li>
        <li className="nav-item">
          <a href="#work">My work</a>
        </li>
        <li className="nav-item">
          <a href="#work" className="btn btn--secondary">
            My resume
          </a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Navbar;
