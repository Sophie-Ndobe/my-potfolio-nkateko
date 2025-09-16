import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="Home">
      <NavBar />
      This is the Home page
      <Footer />
    </div>
  );
}
