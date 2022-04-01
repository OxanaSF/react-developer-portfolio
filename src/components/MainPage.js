import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


const MainPage = (props) => {
  return (
    <div>
      
      <Header />
      <About />
      <Portfolio webDevProjects={props.webDevProjects} />
      <Contact />
    </div>
  );
};

export default MainPage;
