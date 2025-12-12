import React from "react";
import { NavBar } from "../components/NavBar";
import { OtherFooter } from "../components/OtherFooter";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  return (
    <div className="Contact">
      <NavBar />
      <h1>Let's get in touch!</h1>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <h2>ndobes76@gmail.com</h2>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} />
        <h2>LinkedIn</h2>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <h2>Github</h2>
      </div>
      <OtherFooter />
    </div>
  );
}
