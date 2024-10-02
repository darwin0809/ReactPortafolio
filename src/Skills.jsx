// Skills.js
import React from 'react';
import './Skills.css'; // Para el estilo de las barras

const skillsData = [
  { skill: 'HTML', level: 60 },
  { skill: 'CSS', level: 60 },
  { skill: 'JavaScript', level: 80 },
  { skill: 'React', level: 50 },
  { skill: 'Python', level: 85 },
];

const Skills = () => {
  return (
    
    <div className="skills-container">

      <h2>Mis Habilidades</h2>
      {skillsData.map((item, index) => (
        <div key={index} className="skill-bar">
          <span className="skill-name">{item.skill}</span>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${item.level}%` }}
            ></div>
          </div>
          <span className="skill-level">{item.level}%</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
