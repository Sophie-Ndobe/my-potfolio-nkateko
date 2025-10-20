import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { DrawingProjects } from "../components/DrawingProjects";
import "./ProjectsPage.css";
import photo1 from "../images/Projects/Weather App.png";

export function Projects() {
  return (
    <div className="Projects">
      <NavBar />
      <header>
        <h1>Take a look at what I've been working on!</h1>
      </header>
      <main>
        <h4>Web Develoment Project</h4>
        <div className="project-web-development">
          <div>
            <img src={photo1} alt="Weather app project" className="img-fluid" />
            <p className="mt-2 mb-2 p-2">
              Developed in Visual Studio Code using web technologies such as{" "}
              <strong>HTML</strong>, <strong>CSS</strong>. Additional tools and
              frameworks such as <strong>React</strong>, <strong>APIs</strong>,{" "}
              <strong>GitHub</strong>, and <strong>hosting </strong> services.
            </p>
            <a
              href="https://sprightly-chimera-7bf70b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="launch-button"
            >
              Launch Project
            </a>
          </div>
          <div>
            <img src={photo1} alt="Weather app project" className="img-fluid" />
            <p className="mt-2 mb-2 p-2">
              Developed in Visual Studio Code using web technologies such as{" "}
              <strong>HTML</strong>, <strong>CSS</strong>. Additional tools and
              frameworks such as <strong>React</strong>, <strong>APIs</strong>,{" "}
              <strong>GitHub</strong>, and <strong>hosting</strong> services.
            </p>
            <a
              href="https://sprightly-chimera-7bf70b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="launch-button"
            >
              Launch Project
            </a>
          </div>
          <div>
            <img src={photo1} alt="Weather app project" className="img-fluid" />
            <p className="mt-2 mb-2 p-2">
              Developed in Visual Studio Code using web technologies such as{" "}
              <strong>HTML</strong>, <strong>CSS</strong>. Additional tools and
              frameworks such as <strong>React</strong>, <strong>APIs</strong>,{" "}
              <strong>GitHub</strong>, and <strong>hosting</strong> services.
            </p>
            <a
              href="https://sprightly-chimera-7bf70b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="launch-button"
            >
              Launch Project
            </a>
          </div>
        </div>
        <br />
        <br />
        <DrawingProjects />
      </main>
      <Footer />
    </div>
  );
}
