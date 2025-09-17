import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HomeMainSection } from "../components/HomeMainSection";
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
      </main>
      <Footer />
    </div>
  );
}
