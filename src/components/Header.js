import React from "react";
import pcHandsImg from "./images/computer_and_hands.jpg";
import Typed from "react-typed";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled id="home" className="container">
      {/* <div></div> */}
      <div className="text-block">
        <h1 className="last-name">Howard</h1>
        <h1>
          <span className="first-name">Oxana</span>
        </h1>

        <Typed
          className="typed-text"
          strings={["Front-end Developer", "React Developer"]}
          typeSpeed={60}
          backSpeed={100}
          loop
        />
      </div>

      <div className="col-sm-10 right-section-image"></div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12.5rem;

  .text-block {
    transform: translateX(50%);
  }

  .right-section-image {
    background: url(${pcHandsImg}) no-repeat;
    background-size: cover;
    opacity: 0.4;
    height: 90vh;
  }

  .text-block h1 {
    text-transform: uppercase;
    font-size: 8rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;
  }

  .last-name {
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
  }

  .first-name {
    color: black;
    font-family: "Roboto", sans-serif;
  }

  .typed-text {
    margin-left: 0.938rem;
  }



  /* First and Last Names Animation on hover */
  .last-name::before,
  .first-name::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  .last-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .last-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(30, 2%, 73%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  .last-name,
  .first-name {
    position: relative;
    /* font-size: 5rem; */
  }



  /* Last Name Animation on Hover */
  .first-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .first-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    /* background: hsl(35, 29%, 91%); */
    background: hsl(10, 2%, 90%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  /* .first-name {
    position: relative;
  } */




`;

export default Header;
