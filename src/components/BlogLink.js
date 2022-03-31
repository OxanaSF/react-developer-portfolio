import React from "react";
import { Link } from "react-router-dom";

const BlogLink = () => {
  return (
    <Link to="blog" className="nav-link" href="#">
      Blog
    </Link>
  );
};

export default BlogLink;
