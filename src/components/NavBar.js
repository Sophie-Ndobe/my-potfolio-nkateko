import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <Link to="/" className="Nav-Link">
          <li className="me-5">Home</li>
        </Link>
        <Link to="/About" className="Nav-Link">
          <li className="ms-5 me-5">About Me</li>
        </Link>
        <Link to="/Projects" className="Nav-Link">
          <li className="ms-5 me-5"> My Projects</li>
        </Link>
        <Link to="/Contact" className="Nav-Link">
          <li className="ms-5">Contact Me</li>
        </Link>
      </ul>
    </div>
  );
}
