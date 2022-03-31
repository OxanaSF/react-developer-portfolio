import React from "react";
import { Link } from "react-router-dom";
import BlogLink from "./BlogLink";

const BlogNavbar = () => {
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
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" href="#">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contacts" className="nav-link" href="#">
                Contacts
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

export default BlogNavbar;
