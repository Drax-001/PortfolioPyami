import React, { useState } from "react";
import "./project.css";
import { data } from "./projectList";
import Projui from "./Projui";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Search from "../Search/Search";

const Projects = ({ dark }) => {
  const [myProj, setMyProj] = useState(data);
  const [searchText, setSearchText] = useState("");

  const searched = myProj.filter((proj) =>
    proj.category.toLowerCase().includes(searchText.toLowerCase().trim(""))
  );

  return (
    <div id={dark ? "projects_dark" : "projects"} className="scroll">
      <Search
        text={searchText}
        length={searched.length}
        searchtext={setSearchText}
      />
      <div id="skills">
        {searched.map((proj) => {
          const { id, img, name, tech, projLink } = proj;
          return (
            <div key={id} className="card">
              <h1 className="title"> {name} </h1>
              <div className="image">
                <img src={img} alt={name} />
              </div>
              <p className="tech"> {tech} </p>
              <div id="footer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projLink}
                  className="link"
                >
                  View
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
