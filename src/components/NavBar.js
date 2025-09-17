import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <Link to="/" className="Nav-Link">
          <li>Home</li>
        </Link>
        <Link to="/About" className="Nav-Link">
          <li>About Me</li>
        </Link>
        <Link to="/Projects" className="Nav-Link">
          <li> My Projects</li>
        </Link>
        <Link to="/Contact" className="Nav-Link">
          <li>Contact Me</li>
        </Link>
      </ul>
    </div>
  );
}
