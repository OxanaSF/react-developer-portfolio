import React from "react";
import { Link } from "react-scroll";
import BlogLink from "./BlogLink";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top wrapper">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                // exact={true}
                to="home"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link 
              to="about" 
              className="nav-link" 
              href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link 
              to="portfolio" 
              className="nav-link" 
              href="#">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link 
              to="contact" 
              className="nav-link" 
              href="#">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <BlogLink />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
