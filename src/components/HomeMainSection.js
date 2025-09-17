import React from "react";
import "./HomeMainSection.css";
import { TechnologiesIcon } from "../components/TechnologiesIcon.js";
import photo1 from "../images/Sophie/Sophie-Garden.jpg";
import photo2 from "../images/Sophie/Sophie-pose.jpg";
import photo3 from "../images/Sophie/Sophie-Snow.jpg";
import photo4 from "../images/Sophie/Sophie-balcony.jpg";
import photo5 from "../images/Sophie/Sophie-car.png";
import photo6 from "../images/Sophie/Sophie-Parking-lot.jpg";
import photo7 from "../images/Sophie/Sophie-looking-out.jpg";
import photo8 from "../images/Sophie/Sophie-Safari.jpg";

export function HomeMainSection() {
  return (
    <div className="HomeMainSection">
      <p>
        A front-end developer who loves solving problems and turning ideas into
        enjoyable user experiences. When I’m not coding, you’ll usually find me
        sketching with a pencil or tackling a tricky sudoku puzzle. These
        hobbies keep me creative and sharp, which often inspires the way I
        approach challenges in web development. I love learning and I view
        challanges as an opportunities to gain knowledge.
      </p>
      <TechnologiesIcon />
      <div className="picture-gallery-grid">
        <div>
          <img src={photo2} alt="Sophie in a posing" className="img-fluid" />
        </div>
        <div>
          <img src={photo3} alt="Sophie in the snow" className="img-fluid" />
        </div>
        <div>
          <img
            src={photo4}
            alt="Sophie posing on a balcony"
            className="img-fluid"
          />
        </div>

        <div>
          <img
            src={photo1}
            alt="Sophie sitting in a garden"
            className="img-fluid"
          />
        </div>

        <div>
          <img src={photo8} alt="Sophie on a Safari" className="img-fluid" />
        </div>

        <div>
          <img
            src={photo5}
            alt="Sophie sitting in the car"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={photo6}
            alt="Sophie posing in the parking lot"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={photo7}
            alt="Sophie looking out into a distance"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
