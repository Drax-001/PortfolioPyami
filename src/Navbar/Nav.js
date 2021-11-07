import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ dark, setDark }) => {
  return (
    <nav>
      <Link className={dark ? "name_dark" : "name"} to="/">
        Pyami <span className="highlight">Prajapati</span>
      </Link>
      <div className={dark ? "nav_links_dark" : "nav_links"}>
        <Link to="/skills" className="nav_link underline">
          Skills
        </Link>
        <Link to="/projects" className="nav_link underline">
          Projects
        </Link>
        <Link to="/blogs" className="nav_link underline">
          Blogs
        </Link>
        <div id="toggle_div">
          <div className="toggle" onClick={() => setDark(!dark)}>
            {dark ? (
              <span className="fa fa-sun-o sun" />
            ) : (
              <span className="fa fa-moon-o moon" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
