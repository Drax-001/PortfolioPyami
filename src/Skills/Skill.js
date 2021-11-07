import React, { useEffect, useState } from "react";
import { mySkills } from "./data";
import "./skill.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export default function Skill({ dark }) {
  const [skills, setSkills] = useState(mySkills);
  const [skillPerPage, setSkillPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = currentPage * skillPerPage;
  const firstPage = lastPage - skillPerPage;
  const list = skills.slice(firstPage, lastPage);

  const totalPages = Math.ceil(skills.length / skillPerPage);

  useEffect(() => {
    setSkills(mySkills);
    setSkillPerPage(3);
  }, []);

  function next() {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  function prev() {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className={dark ? "skills_dark" : "skills"}>
      <div className="skills">
        <div className="arrowCont" id="prev" onClick={() => prev()}>
          <FaRegArrowAltCircleLeft onClick={() => prev()} />
        </div>
        {list.map((mySkill) => {
          const { id, skill, img } = mySkill;
          return (
            <>
              <div className="skill" key={id}>
                <div className="skill_image">
                  <img src={img} alt={skill} />
                </div>
                <div className="about_skill">
                  <h2 className="skill_name"> {skill} </h2>
                </div>
              </div>
            </>
          );
        })}
        <div className="arrowCont" id="next" onClick={() => next()}>
          <FaRegArrowAltCircleRight onClick={() => next()} />
        </div>
      </div>
    </div>
  );
}
