import React from "react";
import img1 from "./images/image1_ocean.jpg";
import img2 from "./images/image2_fire.jpg";
import img3 from "./images/image3_leaves.jpg";
import img4 from "./images/image4_purple.jpg";
import img5 from "./images/image5_green.jpg";
import img6 from "./images/image6_orange.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio" class="food-menu">
      <h1 id="scroll-gallery" class="main-heading">
        Portfolio
      </h1>

      <div class="cards-gallery">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>
            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img1} class="card-img" alt="amg1" />
        </div>

        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>

            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img2} class="card-img" alt="amg2" />
        </div>

        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>

            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img3} class="card-img" alt="amg2" />
        </div>

        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>

            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img4} class="card-img" alt="amg2" />
        </div>

        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>

            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img5} class="card-img" alt="amg2" />
        </div>

        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">Project Name</h1>

            <button class="card-overlay-btn web">link icon</button>
            <button class="card-overlay-btn github">Github</button>
          </div>
          <img src={img6} class="card-img" alt="amg2" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
