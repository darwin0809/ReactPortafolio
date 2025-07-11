// Timeline.js
import React from 'react';
import './Timeline.css';

const timelineData = [
  { year: '2020', description: 'Graduación del bachillerato' },
  { year: '2021', description: 'Ingreso a Ingeniería Multimedia en la UAO' },
  { year: '2022', description: 'Aprendizaje de bases de datos SQL y MongoDB' },
  { year: '2023', description: 'Desarrollo web con React y tecnologías frontend' },
  { year: '2024', description: 'Backend con Node.js, CRUD y APIs REST' },
  { year: 'Actualmente', description: 'Desarrollo Full Stack completo' },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2>Línea de Tiempo</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
