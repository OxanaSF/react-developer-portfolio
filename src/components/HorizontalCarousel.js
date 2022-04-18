import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";



const HorizontalCarousel = (props) => {
  const [width, setWidth] = useState(0);
  const [test, setTest] =useState(false)

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  const testHandler = (e) => {
    console.log(e.detail)
    setTest(!test)

  }


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
          {props.webDevProjects.map((project, index) => {
            return (
              <motion.div key={index} className="horizontal-item">
               
                <motion.iframe
               
                  className="horizontal-item-inside"
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

export default HorizontalCarousel;
