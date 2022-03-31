import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

const MainPage = (props) => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio webDevProjects={props.webDevProjects} />
      <Contacts />
    </div>
  );
};

export default MainPage;
