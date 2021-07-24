import React from "react";

const Projui = ({ length, myProjects }) => {
  return (
    <div id="proj_cont">
      {myProjects.map((items) => {
        const { id, img, name, tech, projLink } = items;
        return (
          <div key={id} className="project">
            <div className="project-header">
              <h2>{name}</h2>
            </div>
            <div className="project-body">
              <div className="project-image">
                <img src={img} alt={name} className="projImg" />
              </div>
              <div className="project-detail">
                <p className="tech"> {tech} </p>
              </div>
            </div>
            <div className="project-footer">
              <div className="project-number">
                <p className="count">
                  {id} / {length}
                </p>
              </div>
              <div className="underline highlight linked">
                <a
                  className="project-link"
                  href={projLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projui;
