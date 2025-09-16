import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="Footer">
      <h4>ndobes76@gmail.com</h4>
      <span className="icon">
        <a
          href="https://github.com/Sophie-Ndobe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </span>
      <span className="icon">
        <a
          href="https://www.linkedin.com/in/sophie-nkateko-ndobe-59260b21a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </span>
      <p>
        This project was developed by Sophie Ndobe, released as{" "}
        <a
          href="https://github.com/Sophie-Ndobe/my-potfolio-nkateko"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        .
      </p>
    </div>
  );
}
