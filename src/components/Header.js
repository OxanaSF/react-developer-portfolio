import React from "react";
import img1 from "./images/computer_and_hands.jpg";
import img2 from "./images/three_screens.jpg";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="container header-wraper">
      
      <div className="text-block">
        <h1 className="first-name">Howard</h1>
        <h1>
          <span className="last-name">Oxana</span>
        </h1>
        {/* <h5>React Developer</h5> */}
        <Typed
          className="typed-text"
          strings={["Front-end Developer", "React Developer"]}
          typeSpeed={60}
          backSpeed={100}
          loop
        />
      </div>

      <div className="row">
        <div className="col-sm-4 left-section-name"></div>

        <div className="col-sm-8 right-section-image"></div>

        {/* <div className="col-sm-8 right-section-image">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="computer_and_hands" />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="three_screens" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;