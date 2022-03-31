import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faThin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
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
                to="home"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link" href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="portfolio" className="nav-link" href="#">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contacts" className="nav-link" href="#">
                Contacts
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} className="nav-link" href="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
