import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = ({ dark }) => {
  return (
    <div id={dark ? "about_dark" : "about"} className="slide">
      <div id="aboutMe">
        <h1 className="heading">About Me</h1>
        <p className="info">
          I am a student learning modern day tech. So far my{" "}
          <Link
            to="/skills"
            aria-label="View Skills"
            id="skill-link"
            className="link-other underline"
          >
            skills
          </Link>{" "}
          includes technologies like React, HTML, CSS, SASS, JavaScript, etc. I
          have made many{" "}
          <Link
            to="/projects"
            aria-label="View Projects"
            className="link-other underline"
            id="project-link"
          >
            projects
          </Link>{" "}
          using these languages.
        </p>
        <p className="info">
          I am passionate about learning new things and I love to take on
          challenges. Apart from coding my hobbies include to play games and to
          explore. I love a challenging task I really enjoy it because it
          teaches me something new.
        </p>
        <span id="fit">
          <Link to="/contact" id="about" className="underline">
            Contact me...
          </Link>
        </span>
      </div>
    </div>
  );
};

export default About;
