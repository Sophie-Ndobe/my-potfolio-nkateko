import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HomeMainSection } from "../components/HomeMainSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import "./HomePage.css";

export function Home() {
  return (
    <div className="Home">
      <NavBar />
      <header>
        <h1>Sophie Nkateko Ndobe</h1>
        <h2>Front-end Developer and Project Manager based in South Africa</h2>
      </header>
      <main>
        <HomeMainSection />
        <div className="contacts-grid">
          <div>
            <h3 className="pt-4">
              <span className="me-3">
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              Let work together
            </h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="/Contact">Let's get in touch</a>
              </li>
              <li className="mt-2 mb-2">
                <a href="/Projects">Check out my work</a>
              </li>
              <li>
                <a href="/">See my resume</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
