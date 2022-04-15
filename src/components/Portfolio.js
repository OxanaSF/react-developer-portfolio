import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import HorizontalCarousel from "./HorizontalCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLaptop,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = (props) => {
  const [isMobale, setIsMobale] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const turnMobalHandler = () => {
    setIsMobale(true);
    // setIsDesktop(false);
  };

  const turnDesctopHandler = () => {
    if (isMobale)
      setIsMobale(false);
    // setIsDesktop(true);
  };

  return (
    <div id="portfolio" className="portfolio-section">
      <div className="portfolio-title">Portfolio</div>

      <h1 id="scroll-gallery" className="main-heading">
        Projects
      </h1>

      {!isMobale &&
        (
          <div
            type="button"
            onClick={turnMobalHandler}
            className="btn-desktop-mobale"
          >
            <div className="icons-left">



              <div className="portfolio-icons portfolio-icons-left">
                <FontAwesomeIcon
                  className="portfolio-icon icon-mobale"
                  icon={faMobile}
                />

                <span>
                  Mobale
                </span>
              </div>


              <div className="portfolio-icons portfolio-icons-right"
              style={
                !isMobale
                  ? { pointerEvents: "none" }
                  : { pointerEvents: "!none" }
              }
              >
                <FontAwesomeIcon
                style={
                  !isMobale
                    ? { pointerEvents: "none" }
                    : { pointerEvents: "!none" }
                }
                  className="portfolio-icon icon-desktop"
                  icon={faLaptop}
                />
                <span
                  className="mobal-text"
                  style={
                    !isMobale
                      ? { borderBottom: "3px solid red", pointerEvents: "none" }
                      : { color: "transparent" }
                  }
                >
                  Desktop
                </span>
              </div>
            </div>

            {/* <FontAwesomeIcon
            className="portfolio-icon icon-arrow-right"
            icon={faArrowRight}
          /> */}
          </div>

        )
      }

      {!isMobale && <HorizontalCarousel />}




      {isMobale && (
        <div
          // type="button"
          onClick={turnDesctopHandler}
          className="btn-desktop-mobale"
        >
          <div className="icons-left">
            <div className="portfolio-icons"
          
            >
              <FontAwesomeIcon
               style={
                isMobale
                  ? { cursor: "none" }
                  : { cursor: "!none" }
              }
                className="portfolio-icon icon-mobale"
                icon={faMobile}
              />

              <span
                className="mobal-text"
                style={
                  isMobale
                    ? { borderBottom: "3px solid red", cursor: "none" }
                    : { cursor: "!none" }
                }
              >Mobale
              </span>
            </div>

          
          <div className="portfolio-icons">
            <FontAwesomeIcon
              className="portfolio-icon icon-desktop"
              icon={faLaptop}
            />
            <span>
              Desktop
            </span>
          </div>
          </div>

          {/* <FontAwesomeIcon
            className="portfolio-icon icon-arrow-right"
            icon={faArrowRight}
          /> */}
        </div>
      )}

      {isMobale && <VerticalCarousel />}



    </div>
  );
};

export default Portfolio;
