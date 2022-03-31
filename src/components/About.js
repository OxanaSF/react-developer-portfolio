import React from "react";

// import portrait from "./images/fall.jpg"

const About = () => {
  return (
    <div id="about" className="container about-wrapper">
      <div className="row about-section">
        <div className="col-lg-5 col-xm-12 about-left-img">
          {/* <img src={portrait} alt="portrait..."/> */}
        </div>
        <div className="col-lg-7 col-xm-12 about-right-text">
          <h1 className="main-heading">Oxana Howard</h1>
          <h6>Web App & Front-end Developer</h6>
          <p className="par1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="par2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button className="btn btn-dark btn-lg btn-download">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;