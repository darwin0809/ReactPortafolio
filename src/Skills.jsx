// Skills.js
import React from 'react';
import './Skills.css'; // Para el estilo de las barras

const skillsData = [
  { skill: 'HTML', level: 85 },
  { skill: 'CSS', level: 80 },
  { skill: 'JavaScript', level: 90 },
  { skill: 'TypeScript', level: 75 },
  { skill: 'React', level: 70 },
  { skill: 'Angular', level: 70 },
  { skill: 'Node.js', level: 80 },
  { skill: 'Python', level: 75 },
  { skill: 'SQL', level: 70 },
  { skill: 'Git', level: 80 },
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
