import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import HorizontalCarousel from "./HorizontalCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLaptop } from "@fortawesome/free-solid-svg-icons";

const Portfolio = (props) => {
  const [isMobale, setIsMobale] = useState(false);

  const switchMobalDesctopHandler = () => {
    setIsMobale(!isMobale);
  };

  const desctopDisplay = (
    <div
      type="button"
      onClick={switchMobalDesctopHandler}
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
  );

  const mobaleDisplay = (
    <div
      type="button"
      onClick={switchMobalDesctopHandler}
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
  );

  return (
    <div id="portfolio" className="portfolio-section">
      <div className="portfolio-title">Portfolio</div>

      <h1 id="scroll-gallery" className="main-heading">
        Projects
      </h1>

      {!isMobale && desctopDisplay}
      {!isMobale && (
        <HorizontalCarousel webDevProjects={props.webDevProjects} />
      )}

      {isMobale && mobaleDisplay}
      {isMobale && <VerticalCarousel webDevProjects={props.webDevProjects} />}
    </div>
  );
};

export default Portfolio;
