import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="input-area">
        <h1>Contact</h1>
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
  );
};

export default Contact;
