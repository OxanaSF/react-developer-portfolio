import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import bgAbstractImg from "../components/images/abstraction.jpg";

const Contact = () => {
  return (
    <ContactStyled id="contact" className="contact-wrapper">

        <div className="contact-title">Contact</div>

        
        {/* <div className="get-in-touch"> */}

        <div className="get-intouch-area ">
          <h1>Get in Touch</h1>
          {/* <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div> */}
        {/* </div> */}


       <div className="input-areas">
        <div className="input-area">
        <label for="exampleFormControlInput1" className="form-label"></label>
        <input
          className="input-cell"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>

      <div className="input-area">
        <label for="exampleFormControlInput1" className="form-label"></label>
        <input
          className="input-cell"
          type="phone"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Phone Number"
        />
      </div>

      <div className="input-area">
        <label for="exampleFormControlInput1" className="form-label"></label>
        <input
          className="input-cell"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div className="input-area">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write your message here"
        ></textarea>
      </div>
      </div>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.section`
  margin-bottom: 9.375rem;
  margin-top: 12.375rem;

  .get-intouch-area {
    width: 75%;
    margin: auto;
  }

  .input-areas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid gray;
    padding: 0.6rem;
    border-radius: 4px;
    margin-bottom: 2rem;
 
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 0rem;
    /* justify-items: start; */
    font-size: 4.75rem;
    font-size: 3.75rem;

    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 3.125rem;
    padding-left: 18%;
  
  }

  .contact-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 10rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;
    font-family: "Roboto", sans-serif;
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 rgb(201, 198, 198), 0 0.063rem rgb(201, 198, 198),
      0.063rem 0 rgb(201, 198, 198), 0 -0.063rem rgb(201, 198, 198);
  }

  .letter-image {
    width: 200px;
    height: 200px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;

    .body {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 100px 200px;
      border-color: transparent transparent #e95f55 transparent;
      z-index: 2;
    }

    .top-fold {
      position: absolute;
      top: 50px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 100px 0 100px;
      -webkit-transform-origin: 50% 0%;
      -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      -moz-transform-origin: 50% 0%;
      -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      transform-origin: 50% 0%;
      transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
      border-color: #cf4a43 transparent transparent transparent;
      z-index: 2;
    }

    .back-fold {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 100px;
      background: #cf4a43;
      z-index: 0;
    }

    .left-fold {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 50px 100px;
      border-color: transparent transparent transparent #e15349;
      z-index: 2;
    }

    .letter {
      left: 20px;
      bottom: 0px;
      position: absolute;
      width: 160px;
      height: 60px;
      background: white;
      z-index: 1;
      overflow: hidden;
      -webkit-transition: 0.4s 0.2s;
      -moz-transition: 0.4s 0.2s;
      transition: 0.4s 0.2s;

      .letter-border {
        height: 10px;
        width: 100%;
        background: repeating-linear-gradient(
          -45deg,
          #cb5a5e,
          #cb5a5e 8px,
          transparent 8px,
          transparent 18px
        );
      }

      .letter-title {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 40%;
        background: #cb5a5e;
      }
      .letter-context {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 20%;
        background: #cb5a5e;
      }

      .letter-stamp {
        margin-top: 30px;
        margin-left: 120px;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        background: #cb5a5e;
        opacity: 0.3;
      }
    }
  }

  .shadow {
    position: absolute;
    top: 200px;
    left: 50%;
    width: 400px;
    height: 30px;
    transition: 0.4s;
    transform: translateX(-50%);
    -webkit-transition: 0.4s;
    -webkit-transform: translateX(-50%);
    -moz-transition: 0.4s;
    -moz-transform: translateX(-50%);

    border-radius: 100%;
    background: radial-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
  }

  .letter-image:hover {
    .animated-mail {
      transform: translateY(50px);
      -webkit-transform: translateY(50px);
      -moz-transform: translateY(50px);
    }

    .animated-mail .top-fold {
      transition: transform 0.4s, z-index 0.2s;
      transform: rotateX(180deg);
      -webkit-transition: transform 0.4s, z-index 0.2s;
      -webkit-transform: rotateX(180deg);
      -moz-transition: transform 0.4s, z-index 0.2s;
      -moz-transform: rotateX(180deg);
      z-index: 0;
    }

    .animated-mail .letter {
      height: 180px;
    }

    .shadow {
      width: 250px;
    }
  }
`;

export default Contact;
