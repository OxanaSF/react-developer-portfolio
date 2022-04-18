import React from "react";
import cv from "./images/OxanaH_CV.pdf";
import oxanasImage from "./images/oxana_img.jpeg";

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-left-img">
        <img src={oxanasImage} alt="" />
      </div>

      <div className="about-right-text">

        <div>
        <h2>About me</h2>
        <h6>Web App & Front-end Developer</h6>
        <p className="par1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="par2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in aute
          irure dolor in reprehenderit in .
        </p>
        </div>
        <div className="about-button">
          <a className="btn-download" href={cv} download="OxanaH_CV.pdf">
            {" "}
            Download CV{" "}
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
