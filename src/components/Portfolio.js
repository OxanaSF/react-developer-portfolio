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


  const turnMobalHandler = () => {
    setIsMobale(true);
  };

  const turnDesctopHandler = () => {
    if (isMobale) setIsMobale(false);
  };

  return (
    <div id="portfolio" className="portfolio-section">
      <div className="portfolio-title">Portfolio</div>

      <h1 id="scroll-gallery" className="main-heading">
        Projects
      </h1>

      {!isMobale && (
        <div
          type="button"
          onClick={turnMobalHandler}
          className="btn-desktop-mobale"
        >
          <div className="portfolio-icons portfolio-icons-left">
            <FontAwesomeIcon
              className="portfolio-icon icon-mobale"
              icon={faMobile}
            />

            <span>View the Mobile Version</span>
          </div>
        </div>
      )}
      {!isMobale && <HorizontalCarousel />}


      {isMobale && (
        <div
          type="button"
          onClick={turnMobalHandler}
          className="btn-desktop-mobale"
        >
          

          <div className="portfolio-icons">
            <FontAwesomeIcon
              className="portfolio-icon icon-desktop"
              icon={faLaptop}
            />
            <span>View the Desktop Version</span>
          </div>
          
        </div>
      )}

      {isMobale && <VerticalCarousel />}
    </div>
  );
};

export default Portfolio;
