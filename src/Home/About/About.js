import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="scroll">
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
          includes technologies like React, HTML, CSS, SASS, JavaScript, etc.,
          and I want to add more to it. I have made many{" "}
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
          My hobbies are to code, play games and to explore. I love to take on
          challenging tasks and to complete them no matter what.
        </p>
      </div>
    </div>
  );
};

export default About;
