import React, { useState } from "react";
import "./project.css";
import { data } from "./projectList";
import Projui from "./Projui";

const Projects = () => {
  const [myProj, setMyProj] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(8);

  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const projectList = myProj.slice(indexOfFirstProject, indexOfLastProject);

  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    const totalPages = Math.ceil(myProj.length / projectPerPage);
    if (currentPage === totalPages) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="projects" className="slide">
      <h1 className="heading">My Projects</h1>
      <div id="top">
        <button id="prev" className="pageTurn" onClick={() => previousPage()}>
          <span className="fa fa-angle-double-left" />
        </button>
        <Projui length={data.length} myProjects={projectList} />
        <button id="next" className="pageTurn" onClick={() => nextPage()}>
          <span className="fa fa-angle-double-right" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
