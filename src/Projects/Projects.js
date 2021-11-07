import React, { useEffect, useState } from "react";
import "./project.css";
import { data } from "./projectList";
import Search from "../Search/Search";

const Projects = ({ dark }) => {
  const [myProj, setMyProj] = useState(data);
  const [searchText, setSearchText] = useState("");

  const searched = myProj.filter((proj) =>
    proj.category.toLowerCase().includes(searchText.toLowerCase().trim(""))
  );

  useEffect(() => {
    setMyProj(data);
  }, []);
  return (
    <div id={dark ? "projects_dark" : "projects"} className="scroll">
      <Search
        text={searchText}
        length={searched.length}
        searchtext={setSearchText}
      />
      <div id="skills">
        {searched.map((proj) => {
          const { id, img, name, projLink } = proj;
          return (
            <div className="card" key={id}>
              <img src={img} alt={name} className="image_cont" />
              <div className="proj_content">
                <h2 className="title">
                  <a href={projLink} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
