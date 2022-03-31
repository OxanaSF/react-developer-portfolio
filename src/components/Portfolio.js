import React from "react";
import WebDevProject from "./WebDevProject";

const Portfolio = (props) => {
  return (
    <div id="portfolio" class="food-menu">
      <h1 id="scroll-gallery" class="main-heading">
        Portfolio
      </h1>

      <div class="cards-gallery">
        {props.webDevProjects.map((webDevProject) => (
          <WebDevProject
            title={webDevProject.title}
            imgSrc={webDevProject.imgSrc}
            url={webDevProject.url}
            githubLink={webDevProject.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
