import React from "react";
import "./TechnologiesIcon.css";
import icon1 from "../images/Technologies/icon-html.png";
import icon2 from "../images/Technologies/icon-css.png";
import icon3 from "../images/Technologies/icon-js.png";
import icon4 from "../images/Technologies/icon-editor.png";
import icon5 from "../images/Technologies/icon-api.png";
import icon6 from "../images/Technologies/icon-github.png";
import icon7 from "../images/Technologies/icon-hosting.png";
import icon8 from "../images/Technologies/icon-git.png";
import icon9 from "../images/Technologies/icon-bootstrap.png";
import icon10 from "../images/Technologies/icon-seo.png";
import icon11 from "../images/Technologies/icon-responsive.png";
import icon12 from "../images/Technologies/icon-react.png";
import icon13 from "../images/Technologies/icon-AI.png";

export function TechnologiesIcon() {
  return (
    <div className="TechnologiesIcon">
      <div className="technologies-grid">
        <div className="icon">
          <img src={icon1} alt="Html icon" className="img-fluid"></img>
          <div className="text">HTML</div>
        </div>
        <div className="icon">
          <img src={icon2} alt="CSS icon" className="img-fluid"></img>
          <div className="text">CSS</div>
        </div>
        <div className="icon">
          <img src={icon3} alt="JavaScript icon" className="img-fluid"></img>
          <div className="text">JavaScript</div>
        </div>
        <div className="icon">
          <img
            src={icon4}
            alt="VS Code editor icon"
            className="img-fluid"
          ></img>
          <div className="text">Editor</div>
        </div>
        <div className="icon">
          <img src={icon5} alt="API icon" className="img-fluid" />
          <div className="text">API</div>
        </div>
        <div className="icon">
          <img src={icon6} alt="Github icon" className="img-fluid" />
          <div className="text">Github</div>
        </div>
        <div className="icon">
          <img src={icon7} alt="Hosting icon" className="img-fluid" />
          <div className="text">Hosting</div>
        </div>
        <div className="icon">
          <img src={icon8} alt="Git icon" className="img-fluid" />
          <div className="text">Git</div>
        </div>
        <div className="icon">
          <img src={icon9} alt="Bootstrap icon" className="img-fluid" />
          <div className="text">Bootstrap</div>
        </div>
        <div className="icon">
          <img src={icon10} alt="SEO icon" className="img-fluid" />
          <div className="text">SEO</div>
        </div>
        <div className="icon">
          <img
            src={icon11}
            alt="Responsive design icon"
            className="img-fluid"
          />
          <div className="text">Responsive</div>
        </div>
        <div className="icon">
          <img src={icon12} alt="React icon" className="img-fluid" />
          <div className="text">React</div>
        </div>
        <div className="icon">
          <img src={icon13} alt="AI icon" className="img-fluid" />
          <div className="text">AI</div>
        </div>
      </div>
    </div>
  );
}
