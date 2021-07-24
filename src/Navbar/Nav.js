import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <Link className="name underline" to="/">
        Pyami <span className="highlight">Prajapati</span>{" "}
      </Link>
      <div className="nav_links">
        <Link to="/skills" className="nav_link underline">
          Skills
        </Link>
        <Link to="/projects" className="nav_link underline">
          Projects
        </Link>
        <Link to="/blogs" className="nav_link underline">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
