import React from "react";
import "./DrawingProject.css";
import drawing1 from "../images/Drawings/cheetah.jpg";
import drawing2 from "../images/Drawings/cottage.png";
import drawing3 from "../images/Drawings/elephant.jpg";
import drawing4 from "../images/Drawings/eye (1).png";
import drawing5 from "../images/Drawings/lion.jpg";

export function DrawingProjects() {
  return (
    <div>
      <div className="drawing-grid">
        <div>
          {" "}
          <img
            src={drawing3}
            alt="a drawing of an elephant"
            className="img-fluid"
          />
          <img
            src={drawing4}
            alt="a drawing of an eye"
            className="img-fluid mt-3"
          />
        </div>

        <div>
          <img
            src={drawing5}
            alt="a drawing of a lion"
            className="img-fluid lion"
          />
        </div>

        <div>
          <img
            src={drawing1}
            alt="a drawing of a cheeter"
            className="img-fluid"
          />
          <img
            src={drawing2}
            alt="a drawing of a cottage"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
}
