import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="nav">
    <Logo/>

      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#about">My journey</a>
        </li>
        <li className="nav-item">
          <a href="/">My work</a>
        </li>
        <li className="nav-item">
          <a href="/" className="btn resume">
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
