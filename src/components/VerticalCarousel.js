import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import verticalImages from "./verticalImages";

const VerticalCarousel = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {props.webDevProjects.map((project) => {
            return (
              <motion.div className="vertical-item">
                <motion.iframe
                  className="vertical-item"
                  src={project.url}
                ></motion.iframe>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerticalCarousel;
