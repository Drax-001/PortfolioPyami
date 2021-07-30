import React, { useState } from "react";
import "./skill.css";
import { mySkills } from "./data";

const Skill = () => {
  const [skills, setSkills] = useState(mySkills);

  return (
    <div id="skills" className="scroll">
      <h1 className="heading">My Skills</h1>
      <div id="skill_cont">
        {skills.map((myskill) => {
          const { id, skill, status } = myskill;
          return (
            <div key={id} className="skill-card">
              <h2 className="skill_name"> {skill} </h2>
              <div className={status}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
