import React from "react";
import skillsData from "./data.json";
import "../../css/skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      {skillsData.map((skill) => (
        <div
          className="card"
          key={skill.id}
          style={{ backgroundImage: `url(${skill.logo})` }}
        >
          <div className="overlay">
            <h2 className="skillName">{skill.name}</h2>{" "}
            <p className="skillDescription">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
